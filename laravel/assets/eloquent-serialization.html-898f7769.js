import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as d,c as s,b as n,d as e,e as i,a}from"./app-06635a3b.js";const c={},p=a(`<h1 id="eloquent-序列化" tabindex="-1"><a class="header-anchor" href="#eloquent-序列化" aria-hidden="true">#</a> Eloquent: 序列化</h1><ul><li><a href="#introduction">简介</a></li><li><a href="#serializing-models-and-collections">序列化模型 &amp; 集合</a><ul><li><a href="#serializing-to-arrays">序列化为数组</a></li><li><a href="#serializing-to-json">序列化为 JSON</a></li></ul></li><li><a href="#hiding-attributes-from-json">隐藏 JSON 属性</a></li><li><a href="#appending-values-to-json">追加 JSON 值</a></li><li><a href="#date-serialization">序列化日期</a></li></ul><p><a name="introduction"></a></p><h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h2><p>在使用 Laravel 构建 API 时，经常需要把模型和关联转化为数组或 JSON。针对这些操作，Eloquent 提供了一些便捷方法，以及对序列化中的属性控制。</p><blockquote><p>技巧：想获得更全面处理 Eloquent 的模型和集合 JSON 序列化的方法，请查看 <a href="./eloquent-resources">Eloquent API 资源</a> 文档。</p></blockquote><p><a name="serializing-models-and-collections"></a></p><h2 id="序列化模型-集合" tabindex="-1"><a class="header-anchor" href="#序列化模型-集合" aria-hidden="true">#</a> 序列化模型 &amp; 集合</h2><p><a name="serializing-to-arrays"></a></p><h3 id="序列化为数组" tabindex="-1"><a class="header-anchor" href="#序列化为数组" aria-hidden="true">#</a> 序列化为数组</h3><p>要转化模型及其加载的 <a href="./eloquent-relationships">关联</a> 为数组，可以使用 <code>toArray</code> 方法。这是一个递归的方法，因此所有的属性和关联（包括关联的关联）都将转化成数组：</p><pre><code>use App\\Models\\User;

$user = User::with(&#39;roles&#39;)-&gt;first();

return $user-&gt;toArray();
</code></pre><p><code>attributesToArray</code> 方法可用于将模型的属性转换为数组，但不会转换其关联：</p><pre><code>$user = User::first();

return $user-&gt;attributesToArray();
</code></pre><p>您还可以通过调用集合实例上的 <code>toArray</code> 方法，将模型的全部 <a href="./eloquent-collections">集合</a> 转换为数组：</p><pre><code>$users = User::all();

return $users-&gt;toArray();
</code></pre><p><a name="serializing-to-json"></a></p><h3 id="序列化为-json" tabindex="-1"><a class="header-anchor" href="#序列化为-json" aria-hidden="true">#</a> 序列化为 JSON</h3>`,18),l=n("code",null,"toJson",-1),u=n("code",null,"toArray",-1),h=n("code",null,"toJson",-1),m={href:"https://secure.php.net/manual/en/function.json-encode.php",target:"_blank",rel:"noopener noreferrer"},f=a(`<pre><code>use App\\Models\\User;

$user = User::find(1);

return $user-&gt;toJson();

return $user-&gt;toJson(JSON_PRETTY_PRINT);
</code></pre><p>或者，你也可以将模型或集合转换为字符串，模型或集合上的 <code>toJson</code> 方法会自动调用：</p><pre><code>return (string) User::find(1);
</code></pre><p>由于模型和集合在转化为字符串的时候会转成 JSON， 因此可以在应用的路由或控制器中直接返回 Eloquent 对象。Laravel 会自动将 Eloquent 模型和集合序列化为 JSON：</p><pre><code>Route::get(&#39;users&#39;, function () {
    return User::all();
});
</code></pre><p><a name="relationships"></a></p><h4 id="关联关系" tabindex="-1"><a class="header-anchor" href="#关联关系" aria-hidden="true">#</a> 关联关系</h4><p>当一个模型被转化为 JSON 的时候，它加载的关联关系也将自动转化为 JSON 对象被包含进来。同时，通过「小驼峰」定义的关联方法，关联的 JSON 属性将会是「蛇形」命名。</p><p><a name="hiding-attributes-from-json"></a></p><h2 id="隐藏-json-属性" tabindex="-1"><a class="header-anchor" href="#隐藏-json-属性" aria-hidden="true">#</a> 隐藏 JSON 属性</h2><p>有时要将模型数组或 JSON 中的某些属性进行隐藏，比如密码。则可以在模型中添加 <code>$hidden</code> 属性。模型序列化后， <code>$hidden</code> 数组中列出的属性将不会被显示：</p><pre><code>&lt;?php

namespace App\\Models;

use Illuminate\\Database\\Eloquent\\Model;

class User extends Model
{
    /**
     * 数组中的属性会被隐藏。
     *
     * @var array
     */
    protected $hidden = [&#39;password&#39;];
}
</code></pre><blockquote><p><strong>注意</strong> 隐藏关联时，需添加关联的方法名到 <code>$hidden</code> 属性中。</p></blockquote><p>此外，也可以使用属性 <code>visible</code> 定义一个模型数组和 JSON 可见的「白名单」。转化后的数组或 JSON 不会出现其他的属性：</p><pre><code>&lt;?php

namespace App\\Models;

use Illuminate\\Database\\Eloquent\\Model;

class User extends Model
{
    /**
     * 数组中的属性会被展示。
     *
     * @var array
     */
    protected $visible = [&#39;first_name&#39;, &#39;last_name&#39;];
}
</code></pre><p><a name="temporarily-modifying-attribute-visibility"></a></p><h4 id="临时修改可见属性" tabindex="-1"><a class="header-anchor" href="#临时修改可见属性" aria-hidden="true">#</a> 临时修改可见属性</h4><p>如果你想要在一个模型实例中显示隐藏的属性，可以使用 <code>makeVisible</code> 方法。<code>makeVisible</code> 方法返回模型实例：</p><pre><code>return $user-&gt;makeVisible(&#39;attribute&#39;)-&gt;toArray();
</code></pre><p>相应地，如果你想要在一个模型实例中隐藏可见的属性，可以使用 <code>makeHidden</code> 方法。</p><pre><code>return $user-&gt;makeHidden(&#39;attribute&#39;)-&gt;toArray();
</code></pre><p>如果你想临时覆盖所有可见或隐藏的属性，你可以分别使用<code>setVisible</code>和<code>setHidden</code>方法:</p><pre><code>return $user-&gt;setVisible([&#39;id&#39;, &#39;name&#39;])-&gt;toArray();

return $user-&gt;setHidden([&#39;email&#39;, &#39;password&#39;, &#39;remember_token&#39;])-&gt;toArray();
</code></pre><p><a name="appending-values-to-json"></a></p><h2 id="追加-json-值" tabindex="-1"><a class="header-anchor" href="#追加-json-值" aria-hidden="true">#</a> 追加 JSON 值</h2><p>有时，需要在模型转换为数组或 JSON 时添加一些数据库中不存在字段的对应属性。要实现这个功能，首先要定义一个 <a href="./eloquent-mutators">访问器</a>：</p><pre><code>&lt;?php

namespace App\\Models;

use Illuminate\\Database\\Eloquent\\Casts\\Attribute;
use Illuminate\\Database\\Eloquent\\Model;

class User extends Model
{
    /**
     * 判断用户是否是管理员。
     */
    protected function isAdmin(): Attribute
    {
        return new Attribute(
            get: fn () =&gt; &#39;yes&#39;,
        );
    }
}
</code></pre><p>如果你想附加属性到模型中，可以使用模型属性 <code>appends</code> 中添加该属性名。注意，尽管访问器使用「驼峰命名法」方式定义，但是属性名通常以「蛇形命名法」的方式来引用：</p><pre><code>&lt;?php

namespace App\\Models;

use Illuminate\\Database\\Eloquent\\Model;

class User extends Model
{
    /**
     * 要附加到模型数组表单的访问器。
     *
     * @var array
     */
    protected $appends = [&#39;is_admin&#39;];
}
</code></pre><p>使用 <code>appends</code> 方法追加属性后，它将包含在模型的数组和 JSON 中。<code>appends</code> 数组中的属性也将遵循模型上配置的 <code>visible</code> 和 <code>hidden</code> 设置。</p><p><a name="appending-at-run-time"></a></p><h4 id="运行时追加" tabindex="-1"><a class="header-anchor" href="#运行时追加" aria-hidden="true">#</a> 运行时追加</h4><p>在运行时，你可以在单个模型实例上使用 <code>append</code> 方法来追加属性。或者，使用 <code>setAppends</code> 方法来重写整个追加属性的数组：</p><pre><code>return $user-&gt;append(&#39;is_admin&#39;)-&gt;toArray();

return $user-&gt;setAppends([&#39;is_admin&#39;])-&gt;toArray();
</code></pre><p><a name="date-serialization"></a></p><h2 id="日期序列化" tabindex="-1"><a class="header-anchor" href="#日期序列化" aria-hidden="true">#</a> 日期序列化</h2><p><a name="customizing-the-default-date-format"></a></p><h4 id="自定义默认日期格式" tabindex="-1"><a class="header-anchor" href="#自定义默认日期格式" aria-hidden="true">#</a> 自定义默认日期格式</h4><p>你可以通过重写 <code>serializeDate</code> 方法来自定义默认序列化格式。此方法不会影响日期在数据库中存储的格式：</p><pre><code>/**
 * 为 array / JSON 序列化准备日期格式
 */
protected function serializeDate(DateTimeInterface $date): string
{
    return $date-&gt;format(&#39;Y-m-d&#39;);
}
</code></pre><p><a name="customizing-the-default-date-format"></a></p><h4 id="自定义默认日期格式-1" tabindex="-1"><a class="header-anchor" href="#自定义默认日期格式-1" aria-hidden="true">#</a> 自定义默认日期格式</h4><p>你可以在 Eloquent 的 <a href="./eloquent-mutators#attribute-casting">属性转换</a> 中单独为日期属性自定义日期格式：</p><pre><code>protected $casts = [
    &#39;birthday&#39; =&gt; &#39;date:Y-m-d&#39;,
    &#39;joined_at&#39; =&gt; &#39;datetime:Y-m-d H:00&#39;,
];
</code></pre>`,44);function b(g,_){const r=o("ExternalLinkIcon");return d(),s("div",null,[p,n("p",null,[e("您可以使用 "),l,e(" 方法将模型转化成 JSON。和 "),u,e(" 一样，"),h,e(" 方法也是递归的，因此所有属性和关联都会转化成 JSON, 您还可以指定由 "),n("a",m,[e("PHP 支持"),i(r)]),e("的任何 JSON 编码选项：")]),f])}const A=t(c,[["render",b],["__file","eloquent-serialization.html.vue"]]);export{A as default};
