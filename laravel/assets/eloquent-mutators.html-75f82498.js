import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{r as c,o as p,c as r,b as n,d as e,e as t,a}from"./app-06635a3b.js";const l={},i=a(`<h1 id="eloquent-修改器-类型转换" tabindex="-1"><a class="header-anchor" href="#eloquent-修改器-类型转换" aria-hidden="true">#</a> Eloquent: 修改器 &amp; 类型转换</h1><ul><li><a href="#introduction">简介</a></li><li><a href="#accessors-and-mutators">访问器 &amp; 修改器</a><ul><li><a href="#defining-an-accessor">定义一个访问器</a></li><li><a href="#defining-a-mutator">定义一个修改器</a></li></ul></li><li><a href="#attribute-casting">属性转换</a><ul><li><a href="#array-and-json-casting">数组 &amp; JSON 转换</a></li><li><a href="#date-casting">日期转换</a></li><li><a href="#enum-casting">枚举转换</a></li><li><a href="#encrypted-casting">加密转换</a></li><li><a href="#query-time-casting">查询时转换</a></li></ul></li><li><a href="#custom-casts">自定义类型转换</a><ul><li><a href="#value-object-casting">值对象转换</a></li><li><a href="#array-json-serialization">数组 / JSON 序列化</a></li><li><a href="#inbound-casting">入站转换</a></li><li><a href="#cast-parameters">类型转换参数</a></li><li><a href="#castables">可转换</a></li></ul></li></ul><p><a name="introduction"></a></p><h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h2><p>当你在 Eloquent 模型实例中获取或设置某些属性值时，访问器和修改器允许你对 Eloquent 属性值进行格式化。例如，你可能需要使用<a href="./encryption"> Laravel 加密器</a> 来加密保存在数据库中的值，而在使用 Eloquent 模型访问该属性的时候自动进行解密其值。</p><p>或者，当通过 Eloquent 模型访问存储在数据库的 JSON 字符串时，你可能希望将其转换为数组。</p><p><a name="accessors-and-mutators"></a></p><h2 id="访问器-修改器" tabindex="-1"><a class="header-anchor" href="#访问器-修改器" aria-hidden="true">#</a> 访问器 &amp; 修改器</h2><p><a name="defining-an-accessor"></a></p><h3 id="定义一个访问器" tabindex="-1"><a class="header-anchor" href="#定义一个访问器" aria-hidden="true">#</a> 定义一个访问器</h3><p>访问器会在访问一个模型的属性时转换 Eloquent 值。要定义访问器，请在模型中创建一个受保护的「驼峰式」方法来表示可访问属性。此方法名称对应到真正的底层模型 <code>属性/数据库字段</code> 的表示。</p><p>在本例中，我们将为 <code>first_name</code> 属性定义一个访问器。在尝试检索 <code>first_name</code> 属性的值时，Eloquent 会自动调用访问器。所有属性访问器 / 修改器方法必须声明 <code>Illuminate\\Database\\Eloquent\\Casts\\Attribute</code>的返回类型提示：</p><pre><code>&lt;?php

namespace App\\Models;

use Illuminate\\Database\\Eloquent\\Casts\\Attribute;
use Illuminate\\Database\\Eloquent\\Model;

class User extends Model
{
    /**
     * 获取用户的名字。
     */
    protected function firstName(): Attribute
    {
        return Attribute::make(
            get: fn (string $value) =&gt; ucfirst($value),
        );
    }
}
</code></pre><p>所有访问器方法都返回一个 <code>Attribute</code> 实例，该实例定义了如何访问该属性以及如何改变该属性。 在此示例中，我们仅定义如何访问该属性。 为此，我们将 <code>get</code> 参数提供给 <code>Attribute</code> 类构造函数。</p><p>如你所见，字段的原始值被传递到访问器中，允许你对它进行处理并返回结果。如果想获取被修改后的值，你可以在模型实例上访问 <code>first_name</code> 属性：</p><pre><code>use App\\Models\\User;

$user = User::find(1);

$firstName = $user-&gt;first_name;
</code></pre><blockquote><p><strong>注意</strong>： 如果要将这些计算值添加到模型的 array / JSON 中表示，<a href="./eloquent-serialization/14893#appending-values-to-json">你需要追加它们</a>.</p></blockquote><p><a name="building-value-objects-from-multiple-attributes"></a></p><h4 id="从多个属性构建值对象" tabindex="-1"><a class="header-anchor" href="#从多个属性构建值对象" aria-hidden="true">#</a> 从多个属性构建值对象</h4><p>有时你的访问器可能需要将多个模型属性转换为单个「值对象」。 为此，你的 <code>get</code> 闭包可以接受 <code>$attributes</code> 的第二个参数，该参数将自动提供给闭包，并将包含模型所有当前属性的数组：</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">App<span class="token punctuation">\\</span>Support<span class="token punctuation">\\</span>Address</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Database<span class="token punctuation">\\</span>Eloquent<span class="token punctuation">\\</span>Casts<span class="token punctuation">\\</span>Attribute</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * 与用户地址交互。
 */</span>
<span class="token keyword">protected</span> <span class="token keyword">function</span> <span class="token function-definition function">address</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token class-name return-type">Attribute</span>
<span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token class-name static-context">Attribute</span><span class="token operator">::</span><span class="token function">make</span><span class="token punctuation">(</span>
        <span class="token argument-name">get</span><span class="token punctuation">:</span> <span class="token keyword">fn</span> <span class="token punctuation">(</span><span class="token keyword type-hint">mixed</span> <span class="token variable">$value</span><span class="token punctuation">,</span> <span class="token keyword type-hint">array</span> <span class="token variable">$attributes</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">new</span> <span class="token class-name">Address</span><span class="token punctuation">(</span>
            <span class="token variable">$attributes</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;address_line_one&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token variable">$attributes</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;address_line_two&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="accessor-caching"></a></p><h4 id="访问器缓存" tabindex="-1"><a class="header-anchor" href="#访问器缓存" aria-hidden="true">#</a> 访问器缓存</h4><p>从访问器返回值对象时，对值对象所做的任何更改都将在模型保存之前自动同步回模型。 这是可能的，因为 Eloquent 保留了访问器返回的实例，因此每次调用访问器时都可以返回相同的实例：</p><pre><code>use App\\Models\\User;

$user = User::find(1);

$user-&gt;address-&gt;lineOne = &#39;Updated Address Line 1 Value&#39;;
$user-&gt;address-&gt;lineTwo = &#39;Updated Address Line 2 Value&#39;;

$user-&gt;save();
</code></pre><p>有时你可能希望为字符串和布尔值等原始值启用缓存，特别是当它们是计算密集型时。要实现这一点，你可以在定义访问器时调用 <code>shouldCache</code> 方法：</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">protected</span> <span class="token keyword">function</span> <span class="token function-definition function">hash</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token class-name return-type">Attribute</span>
<span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token class-name static-context">Attribute</span><span class="token operator">::</span><span class="token function">make</span><span class="token punctuation">(</span>
        <span class="token argument-name">get</span><span class="token punctuation">:</span> <span class="token keyword">fn</span> <span class="token punctuation">(</span><span class="token keyword type-hint">string</span> <span class="token variable">$value</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">bcrypt</span><span class="token punctuation">(</span><span class="token function">gzuncompress</span><span class="token punctuation">(</span><span class="token variable">$value</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">shouldCache</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果要禁用属性的缓存，可以在定义属性时调用 <code>withoutObjectCaching</code> 方法：</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token doc-comment comment">/**
 * 与 user 的 address 交互。
 */</span>
<span class="token keyword">protected</span> <span class="token keyword">function</span> <span class="token function-definition function">address</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token class-name return-type">Attribute</span>
<span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token class-name static-context">Attribute</span><span class="token operator">::</span><span class="token function">make</span><span class="token punctuation">(</span>
        <span class="token argument-name">get</span><span class="token punctuation">:</span> <span class="token keyword">fn</span> <span class="token punctuation">(</span><span class="token keyword type-hint">mixed</span> <span class="token variable">$value</span><span class="token punctuation">,</span> <span class="token keyword type-hint">array</span> <span class="token variable">$attributes</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">new</span> <span class="token class-name">Address</span><span class="token punctuation">(</span>
            <span class="token variable">$attributes</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;address_line_one&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token variable">$attributes</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;address_line_two&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">withoutObjectCaching</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="defining-a-mutator"></a></p><h3 id="定义修改器" tabindex="-1"><a class="header-anchor" href="#定义修改器" aria-hidden="true">#</a> 定义修改器</h3><p>修改器会在设置属性时生效。要定义修改器，可以在定义属性时提供 <code>set</code> 参数。让我们为 <code>first_name</code> 属性定义一个修改器。这个修改器将会在我们修改 <code>first_name</code> 属性的值时自动调用：</p><pre><code>&lt;?php

namespace App\\Models;

use Illuminate\\Database\\Eloquent\\Casts\\Attribute;
use Illuminate\\Database\\Eloquent\\Model;

class User extends Model
{
    /**
     * 与 user 的 first name 交互。
     */
    protected function firstName(): Attribute
    {
        return Attribute::make(
            get: fn (string $value) =&gt; ucfirst($value),
            set: fn (string $value) =&gt; strtolower($value),
        );
    }
}
</code></pre><p>修改器的闭包会接收将要设置的值，并允许我们使用和返回该值。要使该修改器生效，只需在模型上设置 <code>first_name</code> 即可：</p><pre><code>use App\\Models\\User;

$user = User::find(1);

$user-&gt;first_name = &#39;Sally&#39;;
</code></pre><p>在本例中，值 <code>Sally</code> 将会触发 <code>set</code> 回调。然后，修改器会使用 <code>strtolower</code> 函数处理姓名，并将结果值设置在模型的 <code>$attributes</code> 数组中。</p><p><a name="mutating-multiple-attributes"></a></p><h4 id="修改多个属性" tabindex="-1"><a class="header-anchor" href="#修改多个属性" aria-hidden="true">#</a> 修改多个属性</h4><p>有时你的修改器可能需要修改底层模型的多个属性。 为此，你的 <code>set</code> 闭包可以返回一个数组，数组中的每个键都应该与模型的属性 / 数据库列相对应：</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">App<span class="token punctuation">\\</span>Support<span class="token punctuation">\\</span>Address</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Database<span class="token punctuation">\\</span>Eloquent<span class="token punctuation">\\</span>Casts<span class="token punctuation">\\</span>Attribute</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * 与user模型的address交互。
 */</span>
<span class="token keyword">protected</span> <span class="token keyword">function</span> <span class="token function-definition function">address</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token class-name return-type">Attribute</span>
<span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token class-name static-context">Attribute</span><span class="token operator">::</span><span class="token function">make</span><span class="token punctuation">(</span>
        <span class="token argument-name">get</span><span class="token punctuation">:</span> <span class="token keyword">fn</span> <span class="token punctuation">(</span><span class="token keyword type-hint">mixed</span> <span class="token variable">$value</span><span class="token punctuation">,</span> <span class="token keyword type-hint">array</span> <span class="token variable">$attributes</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">new</span> <span class="token class-name">Address</span><span class="token punctuation">(</span>
            <span class="token variable">$attributes</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;address_line_one&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token variable">$attributes</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;address_line_two&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token argument-name">set</span><span class="token punctuation">:</span> <span class="token keyword">fn</span> <span class="token punctuation">(</span><span class="token class-name type-declaration">Address</span> <span class="token variable">$value</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>
            <span class="token string single-quoted-string">&#39;address_line_one&#39;</span> <span class="token operator">=&gt;</span> <span class="token variable">$value</span><span class="token operator">-&gt;</span><span class="token property">lineOne</span><span class="token punctuation">,</span>
            <span class="token string single-quoted-string">&#39;address_line_two&#39;</span> <span class="token operator">=&gt;</span> <span class="token variable">$value</span><span class="token operator">-&gt;</span><span class="token property">lineTwo</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="attribute-casting"></a></p><h2 id="属性转换" tabindex="-1"><a class="header-anchor" href="#属性转换" aria-hidden="true">#</a> 属性转换</h2><p>属性转换提供了类似于访问器和修改器的功能，且无需在模型上定义任何其他方法。模型中的 <code>$casts</code> 属性提供了一个便利的方法来将属性转换为常见的数据类型。</p><p><code>$casts</code> 属性应是一个数组，且数组的键是那些需要被转换的属性名称，值则是你希望转换的数据类型。支持转换的数据类型有：</p>`,44),d=n("div",{class:"content-list",markdown:"1"},[n("ul",null,[n("li",null,[n("code",null,"array")]),n("li",null,[n("code",null,"AsStringable::class")]),n("li",null,[n("code",null,"boolean")]),n("li",null,[n("code",null,"collection")]),n("li",null,[n("code",null,"date")]),n("li",null,[n("code",null,"datetime")]),n("li",null,[n("code",null,"immutable_date")]),n("li",null,[n("code",null,"immutable_datetime")]),n("li",null,[n("code",null,"decimal:<precision>")]),n("li",null,[n("code",null,"double")]),n("li",null,[n("code",null,"encrypted")]),n("li",null,[n("code",null,"encrypted:array")]),n("li",null,[n("code",null,"encrypted:collection")]),n("li",null,[n("code",null,"encrypted:object")]),n("li",null,[n("code",null,"float")]),n("li",null,[n("code",null,"integer")]),n("li",null,[n("code",null,"object")]),n("li",null,[n("code",null,"real")]),n("li",null,[n("code",null,"string")]),n("li",null,[n("code",null,"timestamp")])])],-1),u=a(`<p>示例， 让我们把以整数（<code>0</code> 或 <code>1</code>）形式存储在数据库中的 <code>is_admin</code> 属性转成布尔值：</p><pre><code>&lt;?php

namespace App\\Models;

use Illuminate\\Database\\Eloquent\\Model;

class User extends Model
{
    /**
     * 类型转换。
     *
     * @var array
     */
    protected $casts = [
        &#39;is_admin&#39; =&gt; &#39;boolean&#39;,
    ];
}
</code></pre><p>现在当你访问 <code>is_admin</code> 属性时，虽然保存在数据库里的值是一个整数类型，但是返回值总是会被转换成布尔值类型：</p><pre><code>$user = App\\Models\\User::find(1);

if ($user-&gt;is_admin) {
    // ...
}
</code></pre><p>如果需要在运行时添加新的临时强制转换，可以使用 <code>mergeCasts</code> 这些强制转换定义将添加到模型上已定义的任何强制转换中：</p><pre><code>$user-&gt;mergeCasts([
    &#39;is_admin&#39; =&gt; &#39;integer&#39;,
    &#39;options&#39; =&gt; &#39;object&#39;,
]);
</code></pre><blockquote><p><strong>注意</strong>： 值属性将不会被转换。此外，禁止定义与关联同名的类型转换（或属性）。</p></blockquote><p><a name="stringable-casting"></a></p><h4 id="强制转换" tabindex="-1"><a class="header-anchor" href="#强制转换" aria-hidden="true">#</a> 强制转换</h4><p>你可以用 <code>Illuminate\\Database\\Eloquent\\Casts\\AsStringable</code> 类将模型属性强制转换为 <a href="./helpers#fluent-strings-method-list"><code>Illuminate\\Support\\Stringable</code> 对象</a>:</p><pre><code>&lt;?php

namespace App\\Models;

use Illuminate\\Database\\Eloquent\\Casts\\AsStringable;
use Illuminate\\Database\\Eloquent\\Model;

class User extends Model
{
    /**
     * 类型转换。
     *
     * @var array
     */
    protected $casts = [
        &#39;directory&#39; =&gt; AsStringable::class,
    ];
}
</code></pre><p><a name="array-and-json-casting"></a></p><h3 id="数组-json-转换" tabindex="-1"><a class="header-anchor" href="#数组-json-转换" aria-hidden="true">#</a> 数组 &amp; JSON 转换</h3><p>当你在数据库存储序列化的 <code>JSON</code> 的数据时， <code>array</code> 类型的转换非常有用。比如：如果你的数据库具有被序列化为 JSON 的 <code>JSON</code> 或 <code>TEXT</code> 字段类型，并且在 Eloquent 模型中加入了 <code>array</code> 类型转换，那么当你访问的时候就会自动被转换为 PHP 数组：</p><pre><code>&lt;?php

namespace App\\Models;

use Illuminate\\Database\\Eloquent\\Model;

class User extends Model
{
    /**
     * 类型转换。
     *
     * @var array
     */
    protected $casts = [
        &#39;options&#39; =&gt; &#39;array&#39;,
    ];
}
</code></pre><p>一旦定义了转换，你访问 <code>options</code> 属性时他会自动从 JSON 类型反序列化为 PHP 数组。当你设置了 <code>options</code> 属性的值时，给定的数组也会自动序列化为 JSON 类型存储：</p><pre><code>use App\\Models\\User;

$user = User::find(1);

$options = $user-&gt;options;

$options[&#39;key&#39;] = &#39;value&#39;;

$user-&gt;options = $options;

$user-&gt;save();
</code></pre><p>当使用 <code>update</code> 方法更新 JSON 属性的单个字段时，可以使用 <code>-&gt;</code> 操作符让语法更加简洁：</p><pre><code>$user = User::find(1);

$user-&gt;update([&#39;options-&gt;key&#39; =&gt; &#39;value&#39;]);
</code></pre><p><a name="array-object-and-collection-casting"></a></p><h4 id="数组对象-集合类型转换" tabindex="-1"><a class="header-anchor" href="#数组对象-集合类型转换" aria-hidden="true">#</a> 数组对象 &amp; 集合类型转换</h4><p>虽然标准的 <code>array</code> 类型转换对于许多应用程序来说已经足够了，但它确实有一些缺点。由于 <code>array</code> 类型转换返回一个基础类型，因此不可能直接改变数组键的值。例如，以下代码将触发一个 PHP 错误：</p><pre><code>$user = User::find(1);

$user-&gt;options[&#39;key&#39;] = $value;
</code></pre>`,23),m=n("code",null,"AsArrayObject",-1),b={href:"https://www.php.net/manual/en/class.arrayobject.php",target:"_blank",rel:"noopener noreferrer"},h=n("a",{href:"#custom-casts"},"自定义类型转换",-1),k=n("code",null,"AsArrayObject",-1),g=a(`<pre><code>use Illuminate\\Database\\Eloquent\\Casts\\AsArrayObject;

/**
 * 类型转换。
 *
 * @var array
 */
protected $casts = [
    &#39;options&#39; =&gt; AsArrayObject::class,
];
</code></pre><p>类似的，Laravel 提供了一个 <code>AsCollection</code> 类型转换，它将 JSON 属性转换为 Laravel <a href="./collections">集合</a> 实例：</p><pre><code>use Illuminate\\Database\\Eloquent\\Casts\\AsCollection;

/**
 * 类型转换。
 *
 * @var array
 */
protected $casts = [
    &#39;options&#39; =&gt; AsCollection::class,
];
</code></pre><p><a name="date-casting"></a></p><h3 id="date-转换" tabindex="-1"><a class="header-anchor" href="#date-转换" aria-hidden="true">#</a> Date 转换</h3>`,5),v=n("code",null,"created_at",-1),f=n("code",null,"updated_at",-1),y={href:"https://github.com/briannesbitt/Carbon",target:"_blank",rel:"noopener noreferrer"},$=n("code",null,"DateTime",-1),_=n("code",null,"$casts",-1),A=n("code",null,"datetime",-1),C=n("code",null,"immutable_datetime",-1),w=a(`<p>当使用 <code>date</code> 或 <code>datetime</code> 类型转换时，你也可以指定日期的格式。这种格式会被用在 <a href="./eloquent-serialization">模型序列化为数组或者 JSON</a>：</p><pre><code>/**
 * 类型转换。
 *
 * @var array
 */
protected $casts = [
    &#39;created_at&#39; =&gt; &#39;datetime:Y-m-d&#39;,
];
</code></pre><p>将列类型转换为日期时，可以将其值设置为 UNIX 时间戳、日期字符串（<code>Y-m-d</code>）、日期时间字符串或 <code>DateTime</code> / <code>Carbon</code> 实例。日期值将会被准确的转换并存储在数据库中。</p><p>通过在模型中定义 <code>serializeDate</code> 方法，你可以自定义所有模型日期的默认序列化格式。此方法不会影响日期在数据库中存储的格式：</p><pre><code>/**
 * 为 array / JSON 序列化准备日期格式。
 */
protected function serializeDate(DateTimeInterface $date): string
{
    return $date-&gt;format(&#39;Y-m-d&#39;);
}
</code></pre><p>在模型上定义 <code>$dateFormat</code> 属性后，模型的日期将会以你指定的格式实际存储于数据库中：</p><pre><code>/**
 * 模型日期列的存储格式。
 *
 * @var string
 */
protected $dateFormat = &#39;U&#39;;
</code></pre><p><a name="date-casting-and-timezones"></a></p><h4 id="日期转换-序列化-时区" tabindex="-1"><a class="header-anchor" href="#日期转换-序列化-时区" aria-hidden="true">#</a> 日期转换，序列化，&amp; 时区</h4><p>默认情况下，<code>date</code> 和 <code>datetime</code> 会序列化为 UTC ISO-8601 格式的（ <code>1986-05-28T21:05:54.000000Z</code> ）字符串，并不会受到应用的 <code>timezone</code> 配置影响。强烈建议您始终使用此序列化格式，并不更改应用程序的 <code>timezone</code> 配置（默认 <code>UTC</code> ）以将应用程序的日期存储在 UTC 时区中。在整个应用程序中始终使用 UTC 时区，会使与其他 PHP 和 JavaScript 类库的互操作性更高。</p><p>如果对 <code>date</code> 或 <code>datetime</code> 属性自定义了格式，例如 <code>datetime:Y-m-d H:i​:s</code>，那么在日期序列化期间将使用 Carbon 实例的内部时区。通常，这是应用程序的 <code>timezone</code> 配置选项中指定的时区。</p><p><a name="enum-casting"></a></p><h3 id="枚举转换" tabindex="-1"><a class="header-anchor" href="#枚举转换" aria-hidden="true">#</a> 枚举转换</h3>`,13),x={href:"https://www.php.net/manual/en/language.enumerations.backed.php",target:"_blank",rel:"noopener noreferrer"},q=n("code",null,"$casts",-1),E=a(`<pre><code>use App\\Enums\\ServerStatus;

/**
 * 类型转换。
 *
 * @var array
 */
protected $casts = [
    &#39;status&#39; =&gt; ServerStatus::class,
];
</code></pre><p>在模型上定义了转换后，与属性交互时，指定的属性都将在枚举中强制转换：</p><pre><code>if ($server-&gt;status == ServerStatus::Provisioned) {
    $server-&gt;status = ServerStatus::Ready;

    $server-&gt;save();
}
</code></pre><p><a name="casting-arrays-of-enums"></a></p><h4 id="转换枚举数组" tabindex="-1"><a class="header-anchor" href="#转换枚举数组" aria-hidden="true">#</a> 转换枚举数组</h4><p>有时，你可能需要模型在单个列中存储枚举值的数组。为此，你可以使用 Laravel 提供的<code>AsEnumArrayObject</code>或<code>AsEnumCollection</code>强制转换：</p><pre><code>use App\\Enums\\ServerStatus;
use Illuminate\\Database\\Eloquent\\Casts\\AsEnumCollection;

/**
 * 类型转换。
 *
 * @var array
 */
protected $casts = [
    &#39;statuses&#39; =&gt; AsEnumCollection::class.&#39;:&#39;.ServerStatus::class,
];
</code></pre><p><a name="encrypted-casting"></a></p><h3 id="加密转换" tabindex="-1"><a class="header-anchor" href="#加密转换" aria-hidden="true">#</a> 加密转换</h3><p><code>encrypted</code> 转换使用了 Laravel 的内置 <a href="./encryption">encryption</a> 功能加密模型的属性值。 此外，<code>encrypted:array</code>、<code>encrypted:collection</code>、<code>encrypted:object</code>、<code>AsEncryptedArrayObject</code> 和 <code>AsEncryptedCollection</code> 类型转换的工作方式与未加密的类型相同； 但是，正如您所料，底层值在存储在数据库中时是加密的。</p><p>由于加密文本的最终长度不可预测并且比其纯文本长度要长，因此请确保关联的数据库列属性是 <code>TEXT</code> 类型或更大。此外，由于数据库中的值是加密的，您将无法查询或搜索加密的属性值。</p><p><a name="key-rotation"></a></p><h4 id="密钥轮换" tabindex="-1"><a class="header-anchor" href="#密钥轮换" aria-hidden="true">#</a> 密钥轮换</h4><p>如你所知，Laravel使用应用程序的 <code>app</code> 配置文件中指定的 <code>key</code> 配置值对字符串进行加密。通常，该值对应于 <code>APP_KEY</code> 环境变量的值。如果需要轮换应用程序的加密密钥，则需要使用新密钥手动重新加密加密属性。</p><p><a name="query-time-casting"></a></p><h3 id="查询时转换" tabindex="-1"><a class="header-anchor" href="#查询时转换" aria-hidden="true">#</a> 查询时转换</h3><p>有时你可能需要在执行查询时应用强制转换，例如从表中选择原始值时。 例如，考虑以下查询：</p><pre><code>use App\\Models\\Post;
use App\\Models\\User;

$users = User::select([
    &#39;users.*&#39;,
    &#39;last_posted_at&#39; =&gt; Post::selectRaw(&#39;MAX(created_at)&#39;)
            -&gt;whereColumn(&#39;user_id&#39;, &#39;users.id&#39;)
])-&gt;get();
</code></pre><p>在该查询获取到的结果集中，<code>last_posted_at</code> 属性将会是一个字符串。假如我们在执行查询时进行 <code>datetime</code> 类型转换将更方便。你可以通过使用 <code>withCasts</code> 方法来完成上述操作：</p><pre><code>$users = User::select([
    &#39;users.*&#39;,
    &#39;last_posted_at&#39; =&gt; Post::selectRaw(&#39;MAX(created_at)&#39;)
            -&gt;whereColumn(&#39;user_id&#39;, &#39;users.id&#39;)
])-&gt;withCasts([
    &#39;last_posted_at&#39; =&gt; &#39;datetime&#39;
])-&gt;get();
</code></pre><p><a name="custom-casts"></a></p><h2 id="自定义类型转换" tabindex="-1"><a class="header-anchor" href="#自定义类型转换" aria-hidden="true">#</a> 自定义类型转换</h2><p>Laravel 有多种内置的、有用的类型转换； 如果需要自定义强制转换类型。要创建一个类型转换，执行<code>make:cast</code>命令。 新的强制转换类将被放置在你的<code>app/Casts</code>目录中:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan make:cast Json
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>所有自定义强制转换类都实现了<code>CastsAttributes</code>接口。 实现这个接口的类必须定义一个 <code>get</code> 和 <code>set</code> 方法。<code>get</code>方法负责将数据库中的原始值转换为转换值，而 <code>set</code> 方法应将转换值转换为可以存储在数据库中的原始值。 作为示例，我们将内置的 <code>json</code> 类型转换重新实现为自定义类型：</p><pre><code>&lt;?php

namespace App\\Casts;

use Illuminate\\Contracts\\Database\\Eloquent\\CastsAttributes;
use Illuminate\\Database\\Eloquent\\Model;

class Json implements CastsAttributes
{
    /**
     * 将取出的数据进行转换。
     *
     * @param  array&lt;string, mixed&gt;  $attributes
     * @return array&lt;string, mixed&gt;
     */
    public function get(Model $model, string $key, mixed $value, array $attributes): array
    {
        return json_decode($value, true);
    }

    /**
     * 转换成将要进行存储的值。
     *
     * @param  array&lt;string, mixed&gt;  $attributes
     */
    public function set(Model $model, string $key, mixed $value, array $attributes): string
    {
        return json_encode($value);
    }
}
</code></pre><p>定义好自定义类型转换后，可以使用其类名称将其附加到模型属性里：</p><pre><code>&lt;?php

namespace App\\Models;

use App\\Casts\\Json;
use Illuminate\\Database\\Eloquent\\Model;

class User extends Model
{
    /**
     * 应被强制转换的属性。
     *
     * @var array
     */
    protected $casts = [
        &#39;options&#39; =&gt; Json::class,
    ];
}
</code></pre><p><a name="value-object-casting"></a></p><h3 id="值对象转换" tabindex="-1"><a class="header-anchor" href="#值对象转换" aria-hidden="true">#</a> 值对象转换</h3><p>你不仅可以将数据转换成原生的数据类型，还可以将数据转换成对象。两种自定义类型转换的定义方式非常类似。但是将数据转换成对象的自定义转换类中的 <code>set</code> 方法需要返回键值对数组，用于设置原始、可存储的值到对应的模型中。</p><p>例如，我们将定义一个自定义转换类，将多个模型值转换为单个<code>Address</code>值对象。 我们将假设 <code>Address</code> 值有两个公共属性：<code>lineOne</code> 和 <code>lineTwo</code>：</p><pre><code>&lt;?php

namespace App\\Casts;

use App\\ValueObjects\\Address as AddressValueObject;
use Illuminate\\Contracts\\Database\\Eloquent\\CastsAttributes;
use Illuminate\\Database\\Eloquent\\Model;
use InvalidArgumentException;

class Address implements CastsAttributes
{
    /**
     * 转换给定的值。
     *
     * @param  array&lt;string, mixed&gt;  $attributes
     */
    public function get(Model $model, string $key, mixed $value, array $attributes): AddressValueObject
    {
        return new AddressValueObject(
            $attributes[&#39;address_line_one&#39;],
            $attributes[&#39;address_line_two&#39;]
        );
    }

    /**
     * 准备给定值以进行存储。
     *
     * @param  array&lt;string, mixed&gt;  $attributes
     * @return array&lt;string, string&gt;
     */
    public function set(Model $model, string $key, mixed $value, array $attributes): array
    {
        if (! $value instanceof AddressValueObject) {
            throw new InvalidArgumentException(&#39;The given value is not an Address instance.&#39;);
        }

        return [
            &#39;address_line_one&#39; =&gt; $value-&gt;lineOne,
            &#39;address_line_two&#39; =&gt; $value-&gt;lineTwo,
        ];
    }
}
</code></pre><p>转换为值对象时，对值对象所做的任何更改都将在模型保存之前自动同步回模型：</p><pre><code>use App\\Models\\User;

$user = User::find(1);

$user-&gt;address-&gt;lineOne = &#39;Updated Address Value&#39;;

$user-&gt;save();
</code></pre><blockquote><p>注意：如果你计划将包含值对象的 Eloquent 模型序列化为 JSON 或数组，那么应该在值对象上实现 <code>Illuminate\\Contracts\\Support\\Arrayable</code> 和 <code>JsonSerializable</code> 接口。</p></blockquote><p><a name="array-json-serialization"></a></p><h3 id="数组-json-序列化" tabindex="-1"><a class="header-anchor" href="#数组-json-序列化" aria-hidden="true">#</a> 数组 / JSON 序列化</h3><p>当使用 <code>toArray</code> 和 <code>toJson</code> 方法将 Eloquent 模型转换为数组或 JSON 时，自定义转换值对象通常会被序列化，只要它们实现 <code>Illuminate\\Contracts\\Support\\Arrayable</code> 和 <code>JsonSerializable</code> 接口。 但是，在使用第三方库提供的值对象时，你可能无法将这些接口添加到对象中。</p><p>因此，你可以指定你自定义的类型转换类，它将负责序列化成值对象。为此，你自定义的类型转换类需要实现 <code>Illuminate\\Contracts\\Database\\Eloquent\\SerializesCastableAttributes</code> 接口。此接口声明类应包含 <code>serialize</code> 方法，该方法应返回值对象的序列化形式：</p><pre><code>/**
 * 获取值的序列化表示形式。
 *
 * @param  array&lt;string, mixed&gt;  $attributes
 */
public function serialize(Model $model, string $key, mixed $value, array $attributes): string
{
    return (string) $value;
}
</code></pre><p><a name="inbound-casting"></a></p><h3 id="入站转换" tabindex="-1"><a class="header-anchor" href="#入站转换" aria-hidden="true">#</a> 入站转换</h3><p>有时候，你可能只需要对写入模型的属性值进行类型转换而不需要对从模型中获取的属性值进行任何处理。</p><p>入站自定义强制转换应该实现<code>CastsInboundAttributes</code>接口，该接口只需要定义一个<code>set</code>方法。<code>make:cast</code>Artisan 命令可以通过<code>——inbound</code>选项调用来生成一个入站强制转换类:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan make:cast Hash <span class="token parameter variable">--inbound</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>仅入站强制转换的一个经典示例是「hashing」强制转换。例如，我们可以定义一个类型转换，通过给定的算法散列入站值:</p><pre><code>&lt;?php

namespace App\\Casts;

use Illuminate\\Contracts\\Database\\Eloquent\\CastsInboundAttributes;
use Illuminate\\Database\\Eloquent\\Model;

class Hash implements CastsInboundAttributes
{
    /**
     * 创建一个新的强制转换类实例。
     */
    public function __construct(
        protected string $algorithm = null,
    ) {}

    /**
     * 转换成将要进行存储的值
     *
     * @param  array&lt;string, mixed&gt;  $attributes
     */
    public function set(Model $model, string $key, mixed $value, array $attributes): string
    {
        return is_null($this-&gt;algorithm)
                    ? bcrypt($value)
                    : hash($this-&gt;algorithm, $value);
    }
}
</code></pre><p><a name="cast-parameters"></a></p><h3 id="转换参数" tabindex="-1"><a class="header-anchor" href="#转换参数" aria-hidden="true">#</a> 转换参数</h3><p>当将自定义类型转换附加到模型时，可以指定传入的类型转换参数。传入类型转换参数需使用 <code>:</code> 将参数与类名分隔，多个参数之间使用逗号分隔。这些参数将会传递到类型转换类的构造函数中：</p><pre><code>/**
 * 应该强制转换的属性。
 *
 * @var array
 */
protected $casts = [
    &#39;secret&#39; =&gt; Hash::class.&#39;:sha256&#39;,
];
</code></pre><p><a name="castables"></a></p><h3 id="可转换" tabindex="-1"><a class="header-anchor" href="#可转换" aria-hidden="true">#</a> 可转换</h3><p>如果要允许应用程序对象的值定义它们自定义转换类。除了将自定义转换类附加到你的模型之外，还可以附加一个实现 <code>Illuminate\\Contracts\\Database\\Eloquent\\Castable</code> 接口的值对象类：</p><pre><code>use App\\Models\\Address;

protected $casts = [
    &#39;address&#39; =&gt; Address::class,
];
</code></pre><p>实现 <code>Castable</code> 接口的对象必须定义一个 <code>castUsing</code> 方法，此方法返回的是负责将 <code>Castable</code> 类进行自定义转换的转换器类名：</p><pre><code>&lt;?php

namespace App\\Models;

use Illuminate\\Contracts\\Database\\Eloquent\\Castable;
use App\\Casts\\Address as AddressCast;

class Address implements Castable
{
    /**
     * 获取转换器的类名用以转换当前类型转换对象。
     *
     * @param  array&lt;string, mixed&gt;  $arguments
     */
    public static function castUsing(array $arguments): string
    {
        return AddressCast::class;
    }
}
</code></pre><p>使用 <code>Castable</code> 类时，仍然可以在 <code>$casts</code> 定义中提供参数。参数将传递给 <code>castUsing</code> 方法：</p><pre><code>use App\\Models\\Address;

protected $casts = [
    &#39;address&#39; =&gt; Address::class.&#39;:argument&#39;,
];
</code></pre><p><a name="anonymous-cast-classes"></a></p><h4 id="可转换-匿名类型转换类" tabindex="-1"><a class="header-anchor" href="#可转换-匿名类型转换类" aria-hidden="true">#</a> 可转换 &amp; 匿名类型转换类</h4>`,62),S=n("code",null,"castables",-1),M={href:"https://www.php.net/manual/en/language.oop5.anonymous.php",target:"_blank",rel:"noopener noreferrer"},I=n("code",null,"castUsing",-1),O=n("code",null,"CastsAttributes",-1),U=n("pre",null,[n("code",null,`<?php

namespace App\\Models;

use Illuminate\\Contracts\\Database\\Eloquent\\Castable;
use Illuminate\\Contracts\\Database\\Eloquent\\CastsAttributes;
use Illuminate\\Database\\Eloquent\\Model;

class Address implements Castable
{
    // ...

    /**
     * 获取转换器类用以转换当前类型转换对象。
     *
     * @param  array<string, mixed>  $arguments
     */
    public static function castUsing(array $arguments): CastsAttributes
    {
        return new class implements CastsAttributes
        {
            public function get(Model $model, string $key, mixed $value, array $attributes): Address
            {
                return new Address(
                    $attributes['address_line_one'],
                    $attributes['address_line_two']
                );
            }

            public function set(Model $model, string $key, mixed $value, array $attributes): array
            {
                return [
                    'address_line_one' => $value->lineOne,
                    'address_line_two' => $value->lineTwo,
                ];
            }
        };
    }
}
`)],-1);function j(D,J){const s=c("ExternalLinkIcon");return p(),r("div",null,[i,d,u,n("p",null,[e("为了解决这个问题，Laravel 提供了一个 "),m,e(" 类型转换，它将 JSON 属性转换为一个 "),n("a",b,[e("数组对象"),t(s)]),e(" 类。这个特性是使用 Laravel 的 "),h,e(" 实现的，它允许 Laravel 智能地缓存和转换修改的对象，这样可以在不触发 PHP 错误的情况下修改各个键的值。要使用 "),k,e(" 类型转换，只需将其指定给一个属性即可：")]),g,n("p",null,[e("默认情况下，Eloquent 会将 "),v,e(" 和 "),f,e(" 字段转换为 "),n("a",y,[e("Carbon"),t(s)]),e(" 实例，它继承了 PHP 原生的 "),$,e(" 类并提供了各种有用的方法。你可以通过在模型的 "),_,e(" 属性数组中定义额外的日期类型转换，用来转换其他的日期属性。通常来说，日期应该使用 "),A,e(" 或 "),C,e(" 类型转换来转换。")]),w,n("p",null,[e("Eloquent 还允许您将属性值强制转换为 PHP 的 "),n("a",x,[e("枚举"),t(s)]),e("。 为此，可以在模型的 "),q,e(" 数组属性中指定要转换的属性和枚举：")]),E,n("p",null,[e("通过将 "),S,e(" 与 PHP 的 "),n("a",M,[e("匿名类"),t(s)]),e(" 相结合，可以将值对象及其转换逻辑定义为单个可转换对象。为此，请从值对象的 "),I,e(" 方法返回一个匿名类。匿名类应该实现 "),O,e(" 接口：")]),U])}const T=o(l,[["render",j],["__file","eloquent-mutators.html.vue"]]);export{T as default};
