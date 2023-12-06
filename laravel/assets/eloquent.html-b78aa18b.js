import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{r as c,o as d,c as p,b as n,d as e,e as t,a}from"./app-06635a3b.js";const l={},r=a('<h1 id="eloquent-快速入门" tabindex="-1"><a class="header-anchor" href="#eloquent-快速入门" aria-hidden="true">#</a> Eloquent: 快速入门</h1><ul><li><a href="#introduction">简介</a></li><li><a href="#generating-model-classes">生成模型类</a></li><li><a href="#eloquent-model-conventions">Eloquent模型约定</a><ul><li><a href="#table-names">表名</a></li><li><a href="#primary-keys">主键</a></li><li><a href="#uuid-and-ulid-keys">UUID与ULID键</a></li><li><a href="#timestamps">时间戳</a></li><li><a href="#database-connections">数据库连接</a></li><li><a href="#default-attribute-values">默认属性值</a></li><li><a href="#configuring-eloquent-strictness">严格配置Eloquent</a></li></ul></li><li><a href="#retrieving-models">模型检索</a><ul><li><a href="#collections">集合</a></li><li><a href="#chunking-results">分块结果集</a></li><li><a href="#chunking-using-lazy-collections">使用懒加载集合分块</a></li><li><a href="#cursors">游标</a></li><li><a href="#advanced-subqueries">高级子查询</a></li></ul></li><li><a href="#retrieving-single-models">检索单个模型/聚合</a><ul><li><a href="#retrieving-or-creating-models">检索或创建模型</a></li><li><a href="#retrieving-aggregates">检索聚合</a></li></ul></li><li><a href="#inserting-and-updating-models">新增&amp;更新模型</a><ul><li><a href="#inserts">新增</a></li><li><a href="#updates">更新</a></li><li><a href="#mass-assignment">批量任务</a></li><li><a href="#upserts">有则更新无则新增</a></li></ul></li><li><a href="#deleting-models">删除模型</a><ul><li><a href="#soft-deleting">软删除</a></li><li><a href="#querying-soft-deleted-models">查询已被软删除模型</a></li></ul></li><li><a href="#pruning-models">修剪模型</a></li><li><a href="#replicating-models">复制模型</a></li><li><a href="#query-scopes">查询作用域</a><ul><li><a href="#global-scopes">全局作用域</a></li><li><a href="#local-scopes">局部作用域</a></li></ul></li><li><a href="#comparing-models">模型对比</a></li><li><a href="#events">事件</a><ul><li><a href="#events-using-closures">使用闭包方法</a></li><li><a href="#observers">观察者</a></li><li><a href="#muting-events">静默事件</a></li></ul></li></ul><p><a name="introduction"></a></p><h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h2><p>Laravel包含的Eloquent模块，是一个对象关系映射(ORM)，能使你更愉快地交互数据库。当你使用Eloquent时，数据库中每张表都有一个相对应的&quot;模型&quot;用于操作这张表。除了能从数据表中检索数据记录之外，Eloquent模型同时也允许你新增，更新和删除这对应表中的数据</p><blockquote><p><strong>注意</strong><br> 开始使用之前, 请确认在你的项目里的<code>config/database.php</code>配置文件中已经配置好一个可用的数据库连接. 关于配置数据库的更多信息, 请查阅<a href="./database#configuration">数据库配置文档</a>.</p></blockquote><h4 id="laravel-训练营" tabindex="-1"><a class="header-anchor" href="#laravel-训练营" aria-hidden="true">#</a> Laravel 训练营</h4>',7),i={href:"https://bootcamp.laravel.com",target:"_blank",rel:"noopener noreferrer"},u=a(`<p><a name="generating-model-classes"></a></p><h2 id="生成模型类" tabindex="-1"><a class="header-anchor" href="#生成模型类" aria-hidden="true">#</a> 生成模型类</h2><p>首先，让我们创建一个 Eloquent 模型。模型通常位于 <code>app\\Models</code> 目录中，并继承 <code>Illuminate\\Database\\Eloquent\\Model</code> 类。 你可以使用 <code>make:model</code> <a href="./artisan">Artisan 命令</a> 来生成新模型类：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan make:model Flight
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果你想要在生成模型类的同时生成 <a href="./migrations">数据库迁移</a>， 可以使用 <code>--migration</code> 或 <code>-m</code> 选项：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan make:model Flight <span class="token parameter variable">--migration</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在生成模型的同时，你可能还想要各种其他类型的类，例如模型工厂、数据填充和控制器。这些选项可以组合在一起从而一次创建多个类：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 生成模型和 Flight 工厂类...</span>
php artisan make:model Flight <span class="token parameter variable">--factory</span>
php artisan make:model Flight <span class="token parameter variable">-f</span>

<span class="token comment"># 生成模型和 Flight 数据填充类...</span>
php artisan make:model Flight <span class="token parameter variable">--seed</span>
php artisan make:model Flight <span class="token parameter variable">-s</span>

<span class="token comment"># 生成模型和 Flight 控制器类...</span>
php artisan make:model Flight <span class="token parameter variable">--controller</span>
php artisan make:model Flight <span class="token parameter variable">-c</span>

<span class="token comment"># 生成模型，Flight 控制器类，资源类和表单验证类...</span>
php artisan make:model Flight <span class="token parameter variable">--controller</span> <span class="token parameter variable">--resource</span> <span class="token parameter variable">--requests</span>
php artisan make:model Flight <span class="token parameter variable">-crR</span>

<span class="token comment"># 生成模型和 Flight 授权策略类...</span>
php artisan make:model Flight <span class="token parameter variable">--policy</span>

<span class="token comment"># 生成模型和数据库迁移，Filght 工厂类，数据库填充类和 Flight 控制器...</span>
php artisan make:model Flight <span class="token parameter variable">-mfsc</span>

<span class="token comment"># 快捷生成模型，数据库迁移，Flight 工厂类，数据库填充类，授权策略类，Flight 控制器和表单验证类...</span>
php artisan make:model Flight <span class="token parameter variable">--all</span>

<span class="token comment"># 生成中间表模型...</span>
php artisan make:model Member <span class="token parameter variable">--pivot</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="inspecting-models"></a></p><h4 id="检查模型" tabindex="-1"><a class="header-anchor" href="#检查模型" aria-hidden="true">#</a> 检查模型</h4><p>有时，仅仅通过略读代码来确定一个模型的所有可用属性和关系是很困难的。作为替代，试试 <code>model:show</code> Artisan 命令，它提供了一个对于模型的所有属性和关系的方便概述。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan model:show Flight
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a name="eloquent-model-conventions"></a></p><h2 id="eloquent-模型约定" tabindex="-1"><a class="header-anchor" href="#eloquent-模型约定" aria-hidden="true">#</a> Eloquent 模型约定</h2><p>由 <code>make:model</code> 命令生成的模型会被放置在 <code>app/Models</code> 目录下。让我们检查一个基本的模型类并讨论 Eloquent 的一些关键约定：</p><pre><code>&lt;?php

namespace App\\Models;

use Illuminate\\Database\\Eloquent\\Model;

class Flight extends Model
{
    // ...
}
</code></pre><p><a name="table-names"></a></p><h3 id="数据表名称" tabindex="-1"><a class="header-anchor" href="#数据表名称" aria-hidden="true">#</a> 数据表名称</h3><p>看了上面的例子，你可能已经注意到我们没有告诉 Eloquent 哪个数据库表对应我们的 <code>Flight</code> 模型。按照约定，除非明确指定另一个名称，类名称的下划线格式的复数形态将被用作表名。因此，在这个例子中，Eloquent 将假定 <code>Flight</code> 模型将记录存储在 <code>flights</code> 表中，而 <code>AirTrafficController</code> 模型将记录存储在 <code>air_traffic_controllers</code> 表中。</p><p>如果你的模型对应的数据表不符合这个约定，你可以通过在模型上定义一个 <code>table</code> 属性来手动指定模型的表名：</p><pre><code>&lt;?php

namespace App\\Models;

use Illuminate\\Database\\Eloquent\\Model;

class Flight extends Model
{
    /**
     * 与模型关联的数据表。
     *
     * @var string
     */
    protected $table = &#39;my_flights&#39;;
}
</code></pre><p><a name="primary-keys"></a></p><h3 id="主键" tabindex="-1"><a class="header-anchor" href="#主键" aria-hidden="true">#</a> 主键</h3><p>Eloquent 还会假设每个模型对应的数据表都有一个名为 <code>id</code> 的列作为主键。如有必要，你可以在模型上定义一个受保护的 <code>$primaryKey</code> 属性，来指定一个不同的列名称用作模型的主键：</p><pre><code>&lt;?php

namespace App\\Models;

use Illuminate\\Database\\Eloquent\\Model;

class Flight extends Model
{
    /**
     * 与数据表关联的主键。
     *
     * @var string
     */
    protected $primaryKey = &#39;flight_id&#39;;
}
</code></pre><p>此外，Eloquent 默认有一个 integer 值的主键，Eloquent 会自动转换这个主键为一个 integer 类型，如果你的主键不是自增或者不是数字类型，你可以在你的模型上定义一个 public 属性的 <code>$incrementing</code> ，并将其设置为 <code>false</code>：</p><pre><code>&lt;?php

class Flight extends Model
{
    /**
     * 指明模型的ID是否自动递增。
     *
     * @var bool
     */
    public $incrementing = false;
}
</code></pre><p>如果你的模型主键不是 <code>integer</code>，应该定义一个 <code>protected $keyType</code> 属性在模型上，其值应为 <code>string</code>：</p><pre><code>&lt;?php

class Flight extends Model
{
    /**
     * 自动递增ID的数据类型。
     *
     * @var string
     */
    protected $keyType = &#39;string&#39;;
}
</code></pre><p><a name="composite-primary-keys"></a></p><h4 id="复合主键" tabindex="-1"><a class="header-anchor" href="#复合主键" aria-hidden="true">#</a> 复合主键</h4><p>Eloquent 要求每个模型至少有一个可以作为其主键的唯一标识 ID。它不支持「复合」主键。但是，除了表的唯一标识主键之外，还可以向数据库表添加额外的多列唯一索引。</p><p><a name="uuid-and-ulid-keys"></a></p><h3 id="uuid-与-ulid-键" tabindex="-1"><a class="header-anchor" href="#uuid-与-ulid-键" aria-hidden="true">#</a> UUID 与 ULID 键</h3><p>你可以选择使用UUID，而不是使用自动递增的整数作为Elquent模型的主键。UUID是36个字符长的通用唯一字母数字标识符。</p><p>如果你希望模型使用UUID键而不是自动递增的整数键，可以在模型上使用 <code>Illuminate\\Database\\Eloquent\\Concerns\\HasUuids</code> trait，在此情况下应该确保模型具有 <a href="./migrations#column-method-uuid">UUID相等的主键列</a>:</p><pre><code>use Illuminate\\Database\\Eloquent\\Concerns\\HasUuids;
use Illuminate\\Database\\Eloquent\\Model;

class Article extends Model
{
    use HasUuids;

    // ...
}

$article = Article::create([&#39;title&#39; =&gt; &#39;Traveling to Europe&#39;]);

$article-&gt;id; // &quot;8f8e8478-9035-4d23-b9a7-62f4d2612ce5&quot;
</code></pre><p>默认情况下，<code>HasUuids</code> trait 将会为模型生成 <a href="./helpers#method-str-ordered-uuid">「ordered」 UUIDs</a> 。 这些 UUIDs 对于索引数据库存储更有效，因为它们可以按字典顺序进行排序。</p><p>通过在模型中定义一个 <code>newUniqueId</code> 方法，你可以推翻给定模型的 UUID 生成方法。此外，你可以通过模型中的 <code>uniqueIds</code> 方法，来指定哪个字段是需要接收 UUIDs:</p><pre><code>use Ramsey\\Uuid\\Uuid;

/**
 * 为模型生成一个新的 UUID。
 */
public function newUniqueId(): string
{
    return (string) Uuid::uuid4();
}

/**
 * 获取应该接收唯一标识符的列。
 *
 * @return array&lt;int, string&gt;
 */
public function uniqueIds(): array
{
    return [&#39;id&#39;, &#39;discount_code&#39;];
}
</code></pre><p>如果你愿意，你可以选择利用 「ULIDs」 来替代 UUIDs。 ULIDs 类似于 UUIDs； 然而，它们的长度仅为 26 字符。类似于订单 UUIDs， ULIDs 是字典顺序排序，以实现高效的数据索引。为了利用 ULIDs， 你需要在你的模型中引用 <code>Illuminate\\Database\\Eloquent\\Concerns\\HasUlids</code> trait。 同样还需要确保模型中有一个 <a href="./migrations#column-method-ulid">ULID 匹配的主键字段</a>:</p><pre><code>use Illuminate\\Database\\Eloquent\\Concerns\\HasUlids;
use Illuminate\\Database\\Eloquent\\Model;

class Article extends Model
{
    use HasUlids;

    // ...
}

$article = Article::create([&#39;title&#39; =&gt; &#39;Traveling to Asia&#39;]);

$article-&gt;id; // &quot;01gd4d3tgrrfqeda94gdbtdk5c&quot;
</code></pre><p><a name="timestamps"></a></p><h3 id="时间戳" tabindex="-1"><a class="header-anchor" href="#时间戳" aria-hidden="true">#</a> 时间戳</h3><p>默认情况下，Eloquent 需要 <code>created_at</code> 和 <code>updated_at</code> 字段存在你的模型数据表中。当模型被创建或更新时，Eloquent 将自动地设置这些字段的值。如果你不想让这些字段被 Eloquent 自动管理，你需要在你的模型中定义一个 <code>$timestamps</code> 属性并赋值为 <code>false</code>:</p><pre><code>&lt;?php

namespace App\\Models;

use Illuminate\\Database\\Eloquent\\Model;

class Flight extends Model
{
    /**
     * 指示模型是否主动维护时间戳。
     *
     * @var bool
     */
    public $timestamps = false;
}
</code></pre><p>如果你需要自定义模型时间戳的格式，请在模型上设置 <code>$dateFormat</code> 属性。以此来定义时间戳在数据库中的存储方式以及模型序列化为数组或 JSON 时的格式：</p><pre><code>&lt;?php

namespace App\\Models;

use Illuminate\\Database\\Eloquent\\Model;

class Flight extends Model
{
    /**
     * 模型日期字段的存储格式。
     *
     * @var string
     */
    protected $dateFormat = &#39;U&#39;;
}
</code></pre><p>如果需要自定义用于存储时间戳的字段的名称，可以在模型上定义 <code>CREATED_AT</code> 和 <code>UPDATED_AT</code> 常量：</p><pre><code>&lt;?php

class Flight extends Model
{
    const CREATED_AT = &#39;creation_date&#39;;
    const UPDATED_AT = &#39;updated_date&#39;;
}
</code></pre><p>如果你想在不修改模型的 <code>updated_at</code> 时间戳的情况下执行模型操作，你可以在给 <code>withoutTimestamps</code> 方法的闭包中对模型进行操作：</p><pre><code>Model::withoutTimestamps(fn () =&gt; $post-&gt;increment([&#39;reads&#39;]));
</code></pre><p><a name="database-connections"></a></p><h3 id="数据库连接" tabindex="-1"><a class="header-anchor" href="#数据库连接" aria-hidden="true">#</a> 数据库连接</h3><p>默认情况下，所有 Eloquent 模型使用的是应用程序配置的默认数据库连接。如果想指定在与特定模型交互时应该使用的不同连接，可以在模型上定义 <code>$connection</code> 属性：</p><pre><code>&lt;?php

namespace App\\Models;

use Illuminate\\Database\\Eloquent\\Model;

class Flight extends Model
{
    /**
     * 设置当前模型使用的数据库连接名。
     *
     * @var string
     */
    protected $connection = &#39;sqlite&#39;;
}
</code></pre><p><a name="default-attribute-values"></a></p><h3 id="默认属性值" tabindex="-1"><a class="header-anchor" href="#默认属性值" aria-hidden="true">#</a> 默认属性值</h3><p>默认情况下，被实例化的模型不会包含任何属性值。如果你想为模型的某些属性定义默认值，可以在模型上定义一个 <code>$attributes</code> 属性。放在 <code>$attributes</code> 数组中的属性值应该是原始的，“可存储的”格式，就像它们刚刚从数据库中读取一样：</p><pre><code>&lt;?php

namespace App\\Models;

use Illuminate\\Database\\Eloquent\\Model;

class Flight extends Model
{
    /**
     * 模型的属性默认值。
     *
     * @var array
     */
    protected $attributes = [
        &#39;options&#39; =&gt; &#39;[]&#39;,
        &#39;delayed&#39; =&gt; false,
    ];
}
</code></pre><p><a name="configuring-eloquent-strictness"></a></p><h3 id="配置严格-eloquent" tabindex="-1"><a class="header-anchor" href="#配置严格-eloquent" aria-hidden="true">#</a> 配置严格 Eloquent</h3><p>Laravel 提供了几种方法允许你在各种情况下配置 Eloquent 的行为和其「严格性」。</p><p>首先，<code>preventLazyLoading</code> 方法接受一个可选的布尔参数，它代表是否需要禁用延迟加载。例如，你可能希望仅在非生产环境下禁用延迟加载，以便即使在生产环境中的代码意外出现延迟加载关系，你的生产环境也可以继续正常运行。一般来说，该方法应该在应用程序的 <code>AppServiceProvider</code> 的 <code>boot</code> 方法中调用：</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Database<span class="token punctuation">\\</span>Eloquent<span class="token punctuation">\\</span>Model</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * 启动任意应用程序服务。
 */</span>
<span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">boot</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">void</span>
<span class="token punctuation">{</span>
    <span class="token class-name static-context">Model</span><span class="token operator">::</span><span class="token function">preventLazyLoading</span><span class="token punctuation">(</span><span class="token operator">!</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">app</span><span class="token operator">-&gt;</span><span class="token function">isProduction</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此外，你可以通过调用 <code>preventSilentlyDiscardingAttributes</code> 方法来让 Laravel 在使用尝试填充一个不能填充的属性的时候抛出一个异常。这有助于防止在本地开发过程中尝试设置尚未到模型的 <code>fillable</code> 数组中的属性时出现意外情况：</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token class-name static-context">Model</span><span class="token operator">::</span><span class="token function">preventSilentlyDiscardingAttributes</span><span class="token punctuation">(</span><span class="token operator">!</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">app</span><span class="token operator">-&gt;</span><span class="token function">isProduction</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>最后，在你尝试访问模型上的一个无法从数据库中检索到或是该属性不存在的时候，你可能想要让 Eloquent 抛出一个异常。例如，当你忘记将属性添加到 Eloquent 查询的 <code>select</code> 子句时候，便可能发生这样的情况。</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token class-name static-context">Model</span><span class="token operator">::</span><span class="token function">preventAccessingMissingAttributes</span><span class="token punctuation">(</span><span class="token operator">!</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">app</span><span class="token operator">-&gt;</span><span class="token function">isProduction</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a name="enabling-eloquent-strict-mode"></a></p><h4 id="启用-eloquent-的严格模式" tabindex="-1"><a class="header-anchor" href="#启用-eloquent-的严格模式" aria-hidden="true">#</a> 启用 Eloquent 的严格模式</h4><p>为了方便，你可以通过调用 <code>shouldBeStrict</code> 方法来启用上述的三种方法：</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token class-name static-context">Model</span><span class="token operator">::</span><span class="token function">shouldBeStrict</span><span class="token punctuation">(</span><span class="token operator">!</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">app</span><span class="token operator">-&gt;</span><span class="token function">isProduction</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a name="retrieving-models"></a></p><h2 id="检索模型" tabindex="-1"><a class="header-anchor" href="#检索模型" aria-hidden="true">#</a> 检索模型</h2><p>一旦你创建了一个模型和 <a href="./migrations#writing-migrations">其关联的数据库表</a>，就可以开始从数据库中检索数据了。可以将每个 Eloquent 模型视为一个强大的<a href="./queries">查询构建器</a> ，让你能流畅地查询与该模型关联的数据库表。模型中的 <code>all</code> 方法将从模型的关联数据库表中检索所有记录：</p><pre><code>use App\\Models\\Flight;

foreach (Flight::all() as $flight) {
    echo $flight-&gt;name;
}
</code></pre><p><a name="building-queries"></a></p><h4 id="构建查询" tabindex="-1"><a class="header-anchor" href="#构建查询" aria-hidden="true">#</a> 构建查询</h4><p>Eloquent 的 <code>all</code> 方法会返回模型中所有的结果。由于每个 Eloquent 模型都可以被视为<a href="./queries">查询构建器</a>，可以添加额外的查询条件，然后使用 <code>get</code> 方法获取查询结果：</p><pre><code>$flights = Flight::where(&#39;active&#39;, 1)
               -&gt;orderBy(&#39;name&#39;)
               -&gt;take(10)
               -&gt;get();
</code></pre><blockquote><p><strong>技巧</strong><br> 由于 Eloquent 模型是查询构建器，因此你应该查看 Laravel 的<a href="./queries">查询构建器</a>提供的所有方法。在编写 Eloquent 查询时，这些是通用的。</p></blockquote><p><a name="refreshing-models"></a></p><h4 id="刷新模型" tabindex="-1"><a class="header-anchor" href="#刷新模型" aria-hidden="true">#</a> 刷新模型</h4><p>如果已经有一个从数据库中检索到的 Eloquent 模型的实例，你可以使用 <code>fresh</code> 和 <code>refresh</code>方法「刷新」模型。 <code>fresh</code> 方法将从数据库中重新检索模型。现有模型实例不会受到影响：</p><pre><code>$flight = Flight::where(&#39;number&#39;, &#39;FR 900&#39;)-&gt;first();

$freshFlight = $flight-&gt;fresh();
</code></pre><p><code>refresh</code> 方法会使用数据库中的新数据重新赋值现有的模型。此外，已经加载的关系也会被重新加载：</p><pre><code>$flight = Flight::where(&#39;number&#39;, &#39;FR 900&#39;)-&gt;first();

$flight-&gt;number = &#39;FR 456&#39;;

$flight-&gt;refresh();

$flight-&gt;number; // &quot;FR 900&quot;
</code></pre><p><a name="collections"></a></p><h3 id="集合" tabindex="-1"><a class="header-anchor" href="#集合" aria-hidden="true">#</a> 集合</h3><p>正如我们所见，像 <code>all</code> 和 <code>get</code> 这样的 Eloquent 方法从数据库中检索出多条记录。但是，这些方法不会返回一个普通的 PHP 数组。相反，会返回一个 <code>Illuminate\\Database\\Eloquent\\Collection</code> 的实例。</p><p>Eloquent <code>Collection</code> 类扩展了 Laravel 的 <code>Illuminate\\Support\\Collection</code> 基类，它提供了<a href="./collections#available-methods">大量的辅助方法</a>来与数据集合交互。例如，<code>reject</code> 方法可用于根据调用闭包的结果从集合中删除模型：</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token variable">$flights</span> <span class="token operator">=</span> <span class="token class-name static-context">Flight</span><span class="token operator">::</span><span class="token function">where</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;destination&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;Paris&#39;</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token variable">$flights</span> <span class="token operator">=</span> <span class="token variable">$flights</span><span class="token operator">-&gt;</span><span class="token function">reject</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token class-name type-declaration">Flight</span> <span class="token variable">$flight</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token variable">$flight</span><span class="token operator">-&gt;</span><span class="token property">cancelled</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>除了 Laravel 的基础集合类提供的方法之外，Eloquent 集合类还提供了<a href="./eloquent-collections#available-methods">一些额外的方法</a>，专门用于与 Eloquent 的模型。</p><p>由于 Laravel 的所有集合都实现了 PHP 的可迭代接口，因此你可以像数组一样循环遍历集合：</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">foreach</span> <span class="token punctuation">(</span><span class="token variable">$flights</span> <span class="token keyword">as</span> <span class="token variable">$flight</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">echo</span> <span class="token variable">$flight</span><span class="token operator">-&gt;</span><span class="token property">name</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="chunking-results"></a></p><h3 id="结果分块" tabindex="-1"><a class="header-anchor" href="#结果分块" aria-hidden="true">#</a> 结果分块</h3><p>如果你尝试通过<code>all</code> 或 <code>get</code> 方法加载数万条 Eloquent 记录，你的应用程序可能会耗尽内存。为了避免出现这种情况， <code>chunk</code> 方法可以用来更有效地处理这些大量数据。</p><p><code>chunk</code> 方法将传递 Eloquent 模型的子集，将它们交给闭包进行处理。由于一次只检索当前的 Eloquent 模型块的数据，所以当处理大量模型数据时， <code>chunk</code> 方法将显着减少内存使用：</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">App<span class="token punctuation">\\</span>Models<span class="token punctuation">\\</span>Flight</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Database<span class="token punctuation">\\</span>Eloquent<span class="token punctuation">\\</span>Collection</span><span class="token punctuation">;</span>

<span class="token class-name static-context">Flight</span><span class="token operator">::</span><span class="token function">chunk</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token class-name type-declaration">Collection</span> <span class="token variable">$flights</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">foreach</span> <span class="token punctuation">(</span><span class="token variable">$flights</span> <span class="token keyword">as</span> <span class="token variable">$flight</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// ...</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>传递给<code>chunk</code>方法的第一个参数是每个分块检索的数据数量。第二个参数传递的闭包将方法将应用到每个分块，以数据库中查询到的分块结果来作为参数。</p><p>如果要根据一个字段来过滤<code>chunk</code>方法拿到的数据，同时，这个字段的数据在遍历的时候还需要更新的话，那么可以使用「chunkById」方法。在这种场景下如果使用<code>chunk</code>方法的话，得到的结果可能和预想中的不一样。在<code>chunkById</code> 方法的内部，默认会查询 id 字段大于前一个分块中最后一个模型的 id。</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token class-name static-context">Flight</span><span class="token operator">::</span><span class="token function">where</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;departed&#39;</span><span class="token punctuation">,</span> <span class="token constant boolean">true</span><span class="token punctuation">)</span>
    <span class="token operator">-&gt;</span><span class="token function">chunkById</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token class-name type-declaration">Collection</span> <span class="token variable">$flights</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token variable">$flights</span><span class="token operator">-&gt;</span><span class="token property">each</span><span class="token operator">-&gt;</span><span class="token function">update</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;departed&#39;</span> <span class="token operator">=&gt;</span> <span class="token constant boolean">false</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token variable">$column</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;id&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="chunking-using-lazy-collections"></a></p><h3 id="使用惰性集合进行分块" tabindex="-1"><a class="header-anchor" href="#使用惰性集合进行分块" aria-hidden="true">#</a> 使用惰性集合进行分块</h3><p><code>lazy</code> 方法的工作方式类似于 <a href="#chunking-results"><code>chunk</code> 方法</a>，因为它在后台以块的形式执行查询。 然而，<code>lazy</code> 方法不是将每个块直接传递到回调中，而是返回 Eloquent 模型的扁平化 <a href="./collections#lazy-collections"><code>LazyCollection</code></a>，它可以让你将结果作为单个流进行交互：</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">App<span class="token punctuation">\\</span>Models<span class="token punctuation">\\</span>Flight</span><span class="token punctuation">;</span>

<span class="token keyword">foreach</span> <span class="token punctuation">(</span><span class="token class-name static-context">Flight</span><span class="token operator">::</span><span class="token function">lazy</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">as</span> <span class="token variable">$flight</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果要根据一个字段来过滤<code>lazy</code>方法拿到的数据，同时，这个字段的数据在遍历的时候还需要更新的话，那么可以使用<code>lazyById</code>方法。在<code>lazyById</code> 方法的内部，默认会查询 id 字段大于前一个<code>chunk</code>中最后一个模型的 id 。</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token class-name static-context">Flight</span><span class="token operator">::</span><span class="token function">where</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;departed&#39;</span><span class="token punctuation">,</span> <span class="token constant boolean">true</span><span class="token punctuation">)</span>
    <span class="token operator">-&gt;</span><span class="token function">lazyById</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">,</span> <span class="token variable">$column</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;id&#39;</span><span class="token punctuation">)</span>
    <span class="token operator">-&gt;</span><span class="token property">each</span><span class="token operator">-&gt;</span><span class="token function">update</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;departed&#39;</span> <span class="token operator">=&gt;</span> <span class="token constant boolean">false</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>你可以使用 <code>lazyByIdDesc</code> 方法根据 <code>id</code> 的降序过滤结果。</p><p><a name="cursors"></a></p><h3 id="游标" tabindex="-1"><a class="header-anchor" href="#游标" aria-hidden="true">#</a> 游标</h3><p>与 <code>lazy</code> 方法类似，<code>cursor</code> 方法可用于在查询数万条 Eloquent 模型记录时减少内存的使用。</p><p><code>cursor</code> 方法只会执行一次数据库查询；但是，各个 Eloquent 模型在实际迭代之前不会被数据填充。因此，在遍历游标时，在任何给定时间，只有一个 Eloquent 模型保留在内存中。</p><blockquote><p><strong>注意</strong><br> 由于 <code>cursor</code> 方法一次只能在内存中保存一个 Eloquent 模型，因此它不能预加载关系。如果需要预加载关系，请考虑使用<a href="#chunking-using-lazy-collections"><code>lazy</code> 方法</a>。</p></blockquote>`,116),h=n("code",null,"cursor",-1),g={href:"https://www.php.net/manual/en/language.generators.overview.php",target:"_blank",rel:"noopener noreferrer"},m=a(`<div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">App<span class="token punctuation">\\</span>Models<span class="token punctuation">\\</span>Flight</span><span class="token punctuation">;</span>

<span class="token keyword">foreach</span> <span class="token punctuation">(</span><span class="token class-name static-context">Flight</span><span class="token operator">::</span><span class="token function">where</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;destination&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;Zurich&#39;</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">cursor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">as</span> <span class="token variable">$flight</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>cursor</code> 返回一个 <code>Illuminate\\Support\\LazyCollection</code> 实例。<a href="./collections#lazy-collections">惰性集合</a> 可以使用 Laravel 集合中的可用方法，同时一次仅将单个模型加载到内存中：</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">App<span class="token punctuation">\\</span>Models<span class="token punctuation">\\</span>User</span><span class="token punctuation">;</span>

<span class="token variable">$users</span> <span class="token operator">=</span> <span class="token class-name static-context">User</span><span class="token operator">::</span><span class="token function">cursor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token class-name type-declaration">User</span> <span class="token variable">$user</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token variable">$user</span><span class="token operator">-&gt;</span><span class="token property">id</span> <span class="token operator">&gt;</span> <span class="token number">500</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">foreach</span> <span class="token punctuation">(</span><span class="token variable">$users</span> <span class="token keyword">as</span> <span class="token variable">$user</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">echo</span> <span class="token variable">$user</span><span class="token operator">-&gt;</span><span class="token property">id</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),b=n("code",null,"cursor",-1),v={href:"https://www.php.net/manual/en/mysqlinfo.concepts.buffering.php",target:"_blank",rel:"noopener noreferrer"},k=n("a",{href:"#chunking-using-lazy-collections"},[n("code",null,"lazy"),e(" 方法")],-1),f=a(`<p><a name="advanced-subqueries"></a></p><h3 id="高级子查询" tabindex="-1"><a class="header-anchor" href="#高级子查询" aria-hidden="true">#</a> 高级子查询</h3><p><a name="subquery-selects"></a></p><h4 id="selects-子查询" tabindex="-1"><a class="header-anchor" href="#selects-子查询" aria-hidden="true">#</a> selects 子查询</h4><p>Eloquent 还提供高级子查询支持，你可以在单条语句中从相关表中提取信息。 例如，假设我们有一个航班目的地表<code>destinations</code>和一个到达这些目的地的航班表<code>flights</code>。 <code>flights</code> 表包含一个 <code>arrived_at</code> 字段，指示航班何时到达目的地。</p><p>使用查询生成器可用的子查询功能 <code>select</code> 和 <code>addSelect</code> 方法，我们可以用单条语句查询全部目的地 <code>destinations</code> 和 抵达各目的地最后一班航班的名称：</p><pre><code>use App\\Models\\Destination;
use App\\Models\\Flight;

return Destination::addSelect([&#39;last_flight&#39; =&gt; Flight::select(&#39;name&#39;)
    -&gt;whereColumn(&#39;destination_id&#39;, &#39;destinations.id&#39;)
    -&gt;orderByDesc(&#39;arrived_at&#39;)
    -&gt;limit(1)
])-&gt;get();
</code></pre><p><a name="subquery-ordering"></a></p><h4 id="子查询排序" tabindex="-1"><a class="header-anchor" href="#子查询排序" aria-hidden="true">#</a> 子查询排序</h4><p>此外，查询构建器的 <code>orderBy</code> 也同样支持子查询。继续使用我们的航班为例，根据最后一次航班到达该目的地的时间对所有目的地进行排序。这同样可以在执行单个数据库查询时完成：</p><pre><code>return Destination::orderByDesc(
    Flight::select(&#39;arrived_at&#39;)
        -&gt;whereColumn(&#39;destination_id&#39;, &#39;destinations.id&#39;)
        -&gt;orderByDesc(&#39;arrived_at&#39;)
        -&gt;limit(1)
)-&gt;get();
</code></pre><p><a name="retrieving-single-models"></a></p><h2 id="检索单个模型-聚合" tabindex="-1"><a class="header-anchor" href="#检索单个模型-聚合" aria-hidden="true">#</a> 检索单个模型 / 聚合</h2><p>除了检索与给定查询匹配的所有记录之外，还可以使用 <code>find</code>、<code>first</code> 或 <code>firstWhere</code> 方法检索单个记录。 这些方法不是返回模型集合，而是返回单个模型实例：</p><pre><code>use App\\Models\\Flight;

// 通过主键检索模型...
$flight = Flight::find(1);

// 检索与查询约束匹配的第一个模型...
$flight = Flight::where(&#39;active&#39;, 1)-&gt;first();

// 替代检索与查询约束匹配的第一个模型...
$flight = Flight::firstWhere(&#39;active&#39;, 1);
</code></pre><p>有时你可能希望检索查询的第一个结果或在未找到结果时执行一些其他操作。<code>firstOr</code> 方法将返回匹配查询的第一个结果，或者，如果没有找到结果，则执行给定的闭包。闭包返回的值将被视为 <code>firstOr</code> 方法的结果：</p><pre><code>$flight = Flight::findOr(1, function () {
    // ...
});

$flight = Flight::where(&#39;legs&#39;, &#39;&gt;&#39;, 3)-&gt;firstOr(function () {
    // ...
});
</code></pre><p><a name="not-found-exceptions"></a></p><h4 id="未找到时抛出异常" tabindex="-1"><a class="header-anchor" href="#未找到时抛出异常" aria-hidden="true">#</a> 未找到时抛出异常</h4><p>如果找不到模型，你可能希望抛出异常。这在路由或控制器中特别有用。 <code>findOrFail</code> 和 <code>firstOrFail</code> 方法将检索查询的第一个结果；但是，如果没有找到结果，则会抛出 <code>Illuminate\\Database\\Eloquent\\ModelNotFoundException</code>：</p><pre><code>$flight = Flight::findOrFail(1);

$flight = Flight::where(&#39;legs&#39;, &#39;&gt;&#39;, 3)-&gt;firstOrFail();
</code></pre><p>如果没有捕获到 <code>ModelNotFoundException</code>，则会自动将 404 HTTP 响应发送回客户端：</p><pre><code>use App\\Models\\Flight;

Route::get(&#39;/api/flights/{id}&#39;, function (string $id) {
    return Flight::findOrFail($id);
});
</code></pre><p><a name="retrieving-or-creating-models"></a></p><h3 id="检索或创建模型" tabindex="-1"><a class="header-anchor" href="#检索或创建模型" aria-hidden="true">#</a> 检索或创建模型</h3><p><code>firstOrCreate</code> 方法将尝试使用给定的列 / 值对来查找数据库记录。如果在数据库中找不到该模型，则将插入一条记录，其中包含将第一个数组参数与可选的第二个数组参数合并后产生的属性：</p><p><code>firstOrNew</code> 方法，类似 <code>firstOrCreate</code>，会尝试在数据库中找到与给定属性匹配的记录。如果没有找到，则会返回一个新的模型实例。请注意，由 <code>firstOrNew</code> 返回的模型尚未持久化到数据库中。需要手动调用 <code>save</code> 方法来保存它：</p><pre><code>use App\\Models\\Flight;

// 按名称检索航班，如果不存在则创建它...
$flight = Flight::firstOrCreate([
    &#39;name&#39; =&gt; &#39;London to Paris&#39;
]);

// 按名称检索航班或使用名称、延迟和到达时间属性创建它...
$flight = Flight::firstOrCreate(
    [&#39;name&#39; =&gt; &#39;London to Paris&#39;],
    [&#39;delayed&#39; =&gt; 1, &#39;arrival_time&#39; =&gt; &#39;11:30&#39;]
);

// 按名称检索航班或实例化一个新的航班实例...
$flight = Flight::firstOrNew([
    &#39;name&#39; =&gt; &#39;London to Paris&#39;
]);

// 按名称检索航班或使用名称、延迟和到达时间属性实例化...
$flight = Flight::firstOrNew(
    [&#39;name&#39; =&gt; &#39;Tokyo to Sydney&#39;],
    [&#39;delayed&#39; =&gt; 1, &#39;arrival_time&#39; =&gt; &#39;11:30&#39;]
);
</code></pre><p><a name="retrieving-aggregates"></a></p><h3 id="检索聚合" tabindex="-1"><a class="header-anchor" href="#检索聚合" aria-hidden="true">#</a> 检索聚合</h3><p>当使用 Eloquent 模型交互的时候，你可以使用 <code>count</code>、<code>sum</code>、<code>max</code>，以及一些 laravel <a href="./queries">查询生成器</a>提供的其他<a href="./queries#aggregates">聚合方法</a>。如你所需要的，这些方法会返回一个数字值而不是 Eloquent 模型实例：</p><pre><code>$count = Flight::where(&#39;active&#39;, 1)-&gt;count();

$max = Flight::where(&#39;active&#39;, 1)-&gt;max(&#39;price&#39;);
</code></pre><p><a name="inserting-and-updating-models"></a></p><h2 id="新增-更新模型" tabindex="-1"><a class="header-anchor" href="#新增-更新模型" aria-hidden="true">#</a> 新增 &amp; 更新模型</h2><p><a name="inserts"></a></p><h3 id="新增" tabindex="-1"><a class="header-anchor" href="#新增" aria-hidden="true">#</a> 新增</h3><p>显然，使用 Eloquent 的时候，我们不仅需要从数据库中检索模型，同时也需要新增新的数据记录。值得高兴的是，对于这种需求 Eloquent 可以从容应对。为了向数据库新增新的数据记录，你需要实例化一个新的模型实例并且为它的属性赋值，然后调用这个实例的 <code>save</code> 方法：</p><pre><code>&lt;?php

namespace App\\Http\\Controllers;

use App\\Http\\Controllers\\Controller;
use App\\Models\\Flight;
use Illuminate\\Http\\RedirectResponse;
use Illuminate\\Http\\Request;

class FlightController extends Controller
{
    /**
     * 向数据库中存储条新的航班信息.
     */
    public function store(Request $request): RedirectResponse
    {
        // 验证request...

        $flight = new Flight;

        $flight-&gt;name = $request-&gt;name;

        $flight-&gt;save();

        return redirect(&#39;/flights&#39;);
    }
}
</code></pre><p>在这个例子中，我们使用来自 HTTP request 请求中的 <code>name</code> 参数值来对 <code>App\\Models\\Flight</code> 模型实例的<code>name</code>属性赋值，当我们调用 <code>save</code> 方法时，数据库便会增加一条数据记录，模型的 <code>created_at</code> 和 <code>updated_at</code> 字段将会在调用 <code>save</code> 方法时自动设置为相应的时间, 所以不需要手动去设置这两个属性。</p><p>或者，可以使用 <code>create</code> 方法使用单个 PHP 语句「保存」一个新模型。插入的模型实例将通过 <code>create</code> 方法返回：</p><pre><code>use App\\Models\\Flight;

$flight = Flight::create([
    &#39;name&#39; =&gt; &#39;London to Paris&#39;,
]);
</code></pre><p>但是，在使用 <code>create</code> 方法之前，你需要在模型类上指定 <code>fillable</code> 或 <code>guarded</code> 属性。这些属性是必需的，因为默认情况下，所有 Eloquent 模型都受到保护，免受批量赋值漏洞的影响。 要了解有关批量赋值的更多信息，请参阅<a href="#mass-assignment">批量赋值文档</a>。</p><p><a name="updates"></a></p><h3 id="更新" tabindex="-1"><a class="header-anchor" href="#更新" aria-hidden="true">#</a> 更新</h3><p><code>save</code> 方法也可以用来更新数据库中已经存在的模型。要更新模型，应该检索它并设置你想更新的任何属性。然后调用模型的 <code>save</code> 方法。 同样，<code>updated_at</code> 时间戳将自动更新，因此无需手动设置其值：</p><pre><code>use App\\Models\\Flight;

$flight = Flight::find(1);

$flight-&gt;name = &#39;Paris to London&#39;;

$flight-&gt;save();
</code></pre><p><a name="mass-updates"></a></p><h4 id="批量更新" tabindex="-1"><a class="header-anchor" href="#批量更新" aria-hidden="true">#</a> 批量更新</h4><p>还可以批量更新与给定条件匹配的所有模型。在此示例中，所有 <code>active</code> 且 <code>destination</code> 为 <code>San Diego</code> 的航班都将被标记为延迟：</p><pre><code>Flight::where(&#39;active&#39;, 1)
      -&gt;where(&#39;destination&#39;, &#39;San Diego&#39;)
      -&gt;update([&#39;delayed&#39; =&gt; 1]);
</code></pre><p><code>update</code> 方法需要一个表示应该更新的列的列和值对数组。<code>update</code> 方法返回受影响的行数。</p><blockquote><p><strong>注意</strong><br> 通过 Eloquent 批量更新时，不会触发模型的 <code>saving</code>、<code>saved</code>、<code>updating</code> 和 <code>updated</code> 模型事件。 这是因为在批量更新时从未真正检索到模型。</p></blockquote><p><a name="examining-attribute-changes"></a></p><h4 id="检查属性变更" tabindex="-1"><a class="header-anchor" href="#检查属性变更" aria-hidden="true">#</a> 检查属性变更</h4><p>Eloquent 提供了 <code>isDirty</code>、<code>isClean</code> 和 <code>wasChanged</code> 方法来检查模型的内部状态，并确定它的属性与最初检索模型时的变化情况。</p><p><code>isDirty</code> 方法确定模型的任何属性在检索模型后是否已更改。你可以传递特定的属性名称来确定它是否「变脏」。<code>isClean</code> 方法将确定自检索模型以来属性是否保持不变。 它也接受可选的属性参数：</p><pre><code>use App\\Models\\User;

$user = User::create([
    &#39;first_name&#39; =&gt; &#39;Taylor&#39;,
    &#39;last_name&#39; =&gt; &#39;Otwell&#39;,
    &#39;title&#39; =&gt; &#39;Developer&#39;,
]);

$user-&gt;title = &#39;Painter&#39;;

$user-&gt;isDirty(); // true
$user-&gt;isDirty(&#39;title&#39;); // true
$user-&gt;isDirty(&#39;first_name&#39;); // false
$user-&gt;isDirty([&#39;first_name&#39;, &#39;title&#39;]); // true

$user-&gt;isClean(); // false
$user-&gt;isClean(&#39;title&#39;); // false
$user-&gt;isClean(&#39;first_name&#39;); // true
$user-&gt;isClean([&#39;first_name&#39;, &#39;title&#39;]); // false

$user-&gt;save();

$user-&gt;isDirty(); // false
$user-&gt;isClean(); // true
</code></pre><p><code>wasChanged</code> 方法确定在当前请求周期内最后一次保存模型时是否更改了任何属性。你还可以传递属性名称以查看特定属性是否已更改：</p><pre><code>$user = User::create([
    &#39;first_name&#39; =&gt; &#39;Taylor&#39;,
    &#39;last_name&#39; =&gt; &#39;Otwell&#39;,
    &#39;title&#39; =&gt; &#39;Developer&#39;,
]);

$user-&gt;title = &#39;Painter&#39;;

$user-&gt;save();

$user-&gt;wasChanged(); // true
$user-&gt;wasChanged(&#39;title&#39;); // true
$user-&gt;wasChanged([&#39;title&#39;, &#39;slug&#39;]); // true
$user-&gt;wasChanged(&#39;first_name&#39;); // false
$user-&gt;wasChanged([&#39;first_name&#39;, &#39;title&#39;]); // true
</code></pre><p><code>getOriginal</code> 方法返回一个包含模型原始属性的数组，忽略加载模型之后进行的任何更改。你也可以传递特定的属性名称来获取特定属性的原始值：</p><pre><code>$user = User::find(1);

$user-&gt;name; // John
$user-&gt;email; // john@example.com

$user-&gt;name = &quot;Jack&quot;;
$user-&gt;name; // Jack

$user-&gt;getOriginal(&#39;name&#39;); // John
$user-&gt;getOriginal(); // 原始属性数组
</code></pre><p><a name="mass-assignment"></a></p><h3 id="批量赋值" tabindex="-1"><a class="header-anchor" href="#批量赋值" aria-hidden="true">#</a> 批量赋值</h3><p>你可以使用<code>create</code>方法使用单个 PHP 语句「保存」一个新模型。插入的模型实例将通过该方法返回：</p><pre><code>use App\\Models\\Flight;

$flight = Flight::create([
    &#39;name&#39; =&gt; &#39;London to Paris&#39;,
]);
</code></pre><p>但是，在使用 <code>create</code> 方法之前，需要在模型类上指定 <code>fillable</code> 或 <code>guarded</code> 属性。 这些属性是必需的，因为默认情况下，所有 Eloquent 模型都受到保护，免受批量分配漏洞的影响。</p><p>当用户传递一个意外的 HTTP 请求字段并且该字段更改了你的数据库中的一个字段，而你没有预料到时，就会出现批量分配漏洞。 例如，恶意用户可能通过 HTTP 请求发送 <code>is_admin</code> 参数，然后将其传递给模型的 <code>create</code> 方法，从而允许用户将自己升级为管理员。</p><p>因此，你应该定义要使哪些模型属性可批量分配。可以使用模型上的 <code>$fillable</code> 属性来执行此操作。 例如，让 <code>Flight</code> 模型的 <code>name</code> 属性可以批量赋值：</p><pre><code>&lt;?php

namespace App\\Models;

use Illuminate\\Database\\Eloquent\\Model;

class Flight extends Model
{
    /**
     * 可批量赋值的属性。
     *
     * @var array
     */
    protected $fillable = [&#39;name&#39;];
}
</code></pre><p>一旦你指定了哪些属性是可批量分配的，可以使用 <code>create</code> 方法在数据库中插入一条新记录。<code>create</code> 方法返回新创建的模型实例</p><pre><code>$flight = Flight::create([&#39;name&#39; =&gt; &#39;London to Paris&#39;]);
</code></pre><p>如果你已经有一个模型实例，你可以使用 <code>fill</code> 方法来填充它的属性数组：</p><pre><code>$flight-&gt;fill([&#39;name&#39; =&gt; &#39;Amsterdam to Frankfurt&#39;]);
</code></pre><p><a name="mass-assignment-json-columns"></a></p><h4 id="批量赋值-json-列" tabindex="-1"><a class="header-anchor" href="#批量赋值-json-列" aria-hidden="true">#</a> 批量赋值 &amp; JSON 列</h4><p>分配 JSON 列时，必须在模型的 <code>$fillable</code> 数组中指定每个列的批量分配键。为了安全起见，Laravel 不支持在使用 <code>guarded</code> 属性时更新嵌套的 JSON 属性：</p><pre><code>/**
 * 可以批量赋值的属性。
 *
 * @var array
 */
protected $fillable = [
    &#39;options-&gt;enabled&#39;,
];
</code></pre><p><a name="allowing-mass-assignment"></a></p><h4 id="允许批量分配" tabindex="-1"><a class="header-anchor" href="#允许批量分配" aria-hidden="true">#</a> 允许批量分配</h4><p>如果你想让所有属性都可以批量赋值，你可以将 <code>$guarded</code> 定义成一个空数组。如果你选择解除你的模型的保护，你应该时刻特别注意传递给 Eloquent 的 <code>fill</code>、<code>create</code> 和 <code>update</code> 方法的数组：</p><pre><code>/**
 * 不可以批量赋值的属性。
 *
 * @var array
 */
protected $guarded = [];
</code></pre><p><a name="mass-assignment-exceptions"></a></p><h4 id="批量作业异常抛出" tabindex="-1"><a class="header-anchor" href="#批量作业异常抛出" aria-hidden="true">#</a> 批量作业异常抛出</h4><p>默认情况下，在执行批量分配操作时，未包含在<code>$fillable</code>数组中的属性将被静默丢弃。 在生产环境中，这是预期行为; 然而，在局部开发过程中，它可能导致为什么模型更改没有生效的困惑。</p><p>如果你愿意，你可以指示Laravel在试图通过调用<code> preventSilentlyDiscardingAttributes</code>方法填充一个不可填充的属性时抛出一个异常。 通常，这个方法在应用程序服务提供者的<code>boot </code>方法中调用:</p><pre><code>use Illuminate\\Database\\Eloquent\\Model;

/**
 * 加载任意应用服务。
 */
public function boot(): void
{
    Model::preventSilentlyDiscardingAttributes($this-&gt;app-&gt;isLocal());
}
</code></pre><p><a name="upserts"></a></p><h3 id="新增或更新" tabindex="-1"><a class="header-anchor" href="#新增或更新" aria-hidden="true">#</a> 新增或更新</h3><p>有时，如果不存在匹配的模型，你可能需要更新现有模型或创建新模型。与 <code>firstOrCreate</code> 方法一样，<code>updateOrCreate</code> 方法会持久化模型，因此无需手动调用 <code>save</code> 方法。</p><p>在下面的示例中，如果存在<code>departure</code>位置为<code>Oakland</code>且<code>destination</code>位置为<code>San Diego</code>的航班，则其<code>price</code>和<code>discounted</code>列将被更新。 如果不存在这样的航班，将创建一个新航班，该航班具有将第一个参数数组与第二个参数数组合并后的属性：</p><pre><code>$flight = Flight::updateOrCreate(
    [&#39;departure&#39; =&gt; &#39;Oakland&#39;, &#39;destination&#39; =&gt; &#39;San Diego&#39;],
    [&#39;price&#39; =&gt; 99, &#39;discounted&#39; =&gt; 1]
);
</code></pre><p>如果你想在单个查询中执行多个「新增或更新」，那么应该使用 <code>upsert</code> 方法。该方法的第一个参数包含要插入或更新的值，而第二个参数列出了在关联表中唯一标识记录的列。该方法的第三个也是最后一个参数是一个列数组，如果数据库中已经存在匹配的记录，则应该更新这些列。如果在模型上启用了时间戳，<code>upsert</code> 方法将自动设置 <code>created_at</code> 和 <code>updated_at</code> 时间戳：</p><pre><code>Flight::upsert([
    [&#39;departure&#39; =&gt; &#39;Oakland&#39;, &#39;destination&#39; =&gt; &#39;San Diego&#39;, &#39;price&#39; =&gt; 99],
    [&#39;departure&#39; =&gt; &#39;Chicago&#39;, &#39;destination&#39; =&gt; &#39;New York&#39;, &#39;price&#39; =&gt; 150]
], [&#39;departure&#39;, &#39;destination&#39;], [&#39;price&#39;]);
</code></pre><blockquote><p><strong>注意</strong><br> 除SQL Server外，其他所有数据库都要求<code>upsert</code>方法的第二个参数中的列具有主键索引或唯一索引。 此外，MySQL数据库驱动程序忽略了<code>upsert</code> 方法的第二个参数，总是使用表的主键索引和唯一索引来检测现有的记录</p></blockquote><p><a name="deleting-models"></a></p><h2 id="删除模型" tabindex="-1"><a class="header-anchor" href="#删除模型" aria-hidden="true">#</a> 删除模型</h2><p>想删除模型，你可以调用模型实例的 <code>delete</code> 方法:</p><pre><code>use App\\Models\\Flight;

$flight = Flight::find(1);

$flight-&gt;delete();
</code></pre><p>你可以调用 <code>truncate</code> 方法来删除所有模型关联的数据库记录。 <code>truncate</code> 操作还将重置模型关联表上的所有自动递增 ID：</p><pre><code>Flight::truncate();
</code></pre><p><a name="deleting-an-existing-model-by-its-primary-key"></a></p><h4 id="通过其主键删除现有模型" tabindex="-1"><a class="header-anchor" href="#通过其主键删除现有模型" aria-hidden="true">#</a> 通过其主键删除现有模型</h4><p>在上面的示例中，我们在调用<code>delete</code>方法之前从数据库中检索模型。但是，如果你知道模型的主键，则可以通过调用 <code>destroy</code> 方法删除模型而无需显式检索它。除了接受单个主键之外，<code>destroy</code> 方法还将接受多个主键、主键数组或主键 <a href="./collections">集合</a>：</p><pre><code>Flight::destroy(1);

Flight::destroy(1, 2, 3);

Flight::destroy([1, 2, 3]);

Flight::destroy(collect([1, 2, 3]));
</code></pre><blockquote><p><strong>注意</strong><br><code>destroy</code> 方法单独加载每个模型并调用 <code>delete</code> 方法，以便为每个模型正确调度 <code>deleting</code> 和 <code>deleted</code> 事件。</p></blockquote><p><a name="deleting-models-using-queries"></a></p><h4 id="使用查询删除模型" tabindex="-1"><a class="header-anchor" href="#使用查询删除模型" aria-hidden="true">#</a> 使用查询删除模型</h4><p>当然，你可以构建一个 Eloquent 查询来删除所有符合你查询条件的模型。在此示例中，我们将删除所有标记为非活动的航班。与批量更新一样，批量删除不会为已删除的模型调度模型事件：</p><pre><code>$deleted = Flight::where(&#39;active&#39;, 0)-&gt;delete();
</code></pre><blockquote><p><strong>注意</strong><br> 通过 Eloquent 执行批量删除语句时，不会为已删除的模型调度 <code>deleting</code> 和 <code>deleted</code> 模型事件。这是因为在执行 delete 语句时从未真正检索到模型。</p></blockquote><p><a name="soft-deleting"></a></p><h3 id="软删除" tabindex="-1"><a class="header-anchor" href="#软删除" aria-hidden="true">#</a> 软删除</h3><p>除了实际从数据库中删除记录之外，Eloquent 还可以「软删除」。软删除不会真的从数据库中删除记录。相反，它在模型上设置了一个 <code>deleted_at</code> 属性，记录模型被「删除」的日期和时间。要为模型启用软删除，请将 <code>Illuminate\\Database\\Eloquent\\SoftDeletes</code> trait 添加到模型中：</p><pre><code>&lt;?php

namespace App\\Models;

use Illuminate\\Database\\Eloquent\\Model;
use Illuminate\\Database\\Eloquent\\SoftDeletes;

class Flight extends Model
{
    use SoftDeletes;
}
</code></pre><blockquote><p><strong>注意</strong><br><code>SoftDeletes</code> trait 会自动将 <code>deleted_at</code> 属性转换为 <code>DateTime</code> / <code>Carbon</code> 实例</p></blockquote><p>当然，你需要把 <code>deleted_at</code> 字段添加到数据表中。<code>Laravel</code> 的<a href="./migrations">数据迁移</a>有创建这个字段的方法：</p><pre><code>use Illuminate\\Database\\Schema\\Blueprint;
use Illuminate\\Support\\Facades\\Schema;

Schema::table(&#39;flights&#39;, function (Blueprint $table) {
    $table-&gt;softDeletes();
});

Schema::table(&#39;flights&#39;, function (Blueprint $table) {
    $table-&gt;dropSoftDeletes();
});
</code></pre><p>那现在，当你在模型实例上使用 <code>delete</code> 方法，当前日期时间会写入 <code>deleted_at</code> 字段。同时，查询出来的结果也会自动排除已被软删除的记录。</p><p>判断模型实例是否已被软删除，可以使用 <code>trashed</code> 方法：</p><pre><code>if ($flight-&gt;trashed()) {
    // ...
}
</code></pre><p><a name="restoring-soft-deleted-models"></a></p><h4 id="恢复软删除的模型" tabindex="-1"><a class="header-anchor" href="#恢复软删除的模型" aria-hidden="true">#</a> 恢复软删除的模型</h4><p>有时你可能希望「撤销」软删除的模型。要恢复软删除的模型，可以在模型实例上调用<code>restore</code>方法。 <code>restore</code> 方法会将模型的 <code>deleted_at</code> 列设置为 <code>null</code>：</p><pre><code>$flight-&gt;restore();
</code></pre><p>你也可以在查询中使用 <code>restore</code> 方法，从而快速恢复多个模型。和其他「批量」操作一样，这个操作不会触发模型的任何事件：</p><pre><code>Flight::withTrashed()
        -&gt;where(&#39;airline_id&#39;, 1)
        -&gt;restore();
</code></pre><p><code>restore</code> 方法可以在<a href="./eloquent-relationships">关联查询</a>中使用：</p><pre><code>$flight-&gt;history()-&gt;restore();
</code></pre><p><a name="permanently-deleting-models"></a></p><h4 id="永久删除模型" tabindex="-1"><a class="header-anchor" href="#永久删除模型" aria-hidden="true">#</a> 永久删除模型</h4><p>有时你可能需要从数据库中真正删除模型。要从数据库中永久删除软删除的模型，请使用 <code>forceDelete</code> 方法：</p><pre><code>$flight-&gt;forceDelete();
</code></pre><p><code>forceDelete</code> 同样可以用在关联查询上:</p><pre><code>$flight-&gt;history()-&gt;forceDelete();
</code></pre><p><a name="querying-soft-deleted-models"></a></p><h3 id="查询软删除模型" tabindex="-1"><a class="header-anchor" href="#查询软删除模型" aria-hidden="true">#</a> 查询软删除模型</h3><p><a name="including-soft-deleted-models"></a></p><h4 id="包括已软删除的模型" tabindex="-1"><a class="header-anchor" href="#包括已软删除的模型" aria-hidden="true">#</a> 包括已软删除的模型</h4><p>如上所述，软删除模型将自动从查询结果中排除。但是，你也可以通过在查询上调用 <code>withTrashed</code> 方法来强制将软删除模型包含在查询结果中：</p><pre><code>use App\\Models\\Flight;

$flights = Flight::withTrashed()
                -&gt;where(&#39;account_id&#39;, 1)
                -&gt;get();
</code></pre><p><code>withTrashed</code> 方法可以在 <a href="./eloquent-relationships">关联查询</a> 中使用</p><pre><code>$flight-&gt;history()-&gt;withTrashed()-&gt;get();
</code></pre><p><a name="retrieving-only-soft-deleted-models"></a></p><h4 id="仅检索软删除的模型" tabindex="-1"><a class="header-anchor" href="#仅检索软删除的模型" aria-hidden="true">#</a> 仅检索软删除的模型</h4><p><code>onlyTrashed</code> 方法将检索 <strong>只被</strong> 软删除模型：</p><pre><code>$flights = Flight::onlyTrashed()
                -&gt;where(&#39;airline_id&#39;, 1)
                -&gt;get();
</code></pre><p><a name="pruning-models"></a></p><h2 id="修剪模型" tabindex="-1"><a class="header-anchor" href="#修剪模型" aria-hidden="true">#</a> 修剪模型</h2><p>有时你可能希望定期删除不再需要的模型。为此，你可以将 <code>Illuminate\\Database\\Eloquent\\Prunable</code> 或 <code>Illuminate\\Database\\Eloquent\\MassPrunable</code> trait 添加到要定期修剪的模型中。将其中一个 trait 添加到模型后，实现 <code>prunable</code> 方法，该方法返回一个 Eloquent 查询构建器，用于检索不再需要的模型数据：</p><pre><code>&lt;?php

namespace App\\Models;

use Illuminate\\Database\\Eloquent\\Builder;
use Illuminate\\Database\\Eloquent\\Model;
use Illuminate\\Database\\Eloquent\\Prunable;

class Flight extends Model
{
    use Prunable;

    /**
     * 获取可修剪模型查询构造器。
     */
    public function prunable(): Builder
    {
        return static::where(&#39;created_at&#39;, &#39;&lt;=&#39;, now()-&gt;subMonth());
    }
}
</code></pre><p>当将模型标记为 <code>Prunable</code> 时，你还可以在模型上定义 <code>pruning</code> 方法。该方法将在模型被删除之前被调用。在从数据库中永久删除模型之前，此方法可用于删除与模型关联的任何其他资源，例如存储的文件：</p><pre><code>/**
 * 准备模型进行修剪。
 */
protected function pruning(): void
{
    // ...
}
</code></pre><p>配置可修剪模型后，你还应该在应用程序的 <code>App\\Console\\Kernel</code> 类中调度 <code>model:prune</code> Artisan 命令。你可以自由选择运行此命令的时间间隔：</p><pre><code>/**
 * 定义应用程序的命令计划。
 */
protected function schedule(Schedule $schedule): void
{
    $schedule-&gt;command(&#39;model:prune&#39;)-&gt;daily();
}
</code></pre><p>在后台，<code>model:prune</code> 命令会自动检测应用程序的 <code>app/Models</code> 目录中的「Prunable」模型。 如果模型位于不同的位置，可以使用 <code>--model</code> 选项来指定模型类名称：</p><pre><code>$schedule-&gt;command(&#39;model:prune&#39;, [
    &#39;--model&#39; =&gt; [Address::class, Flight::class],
])-&gt;daily();
</code></pre><p>如果你想在修剪所有其他检测到的模型时排除某些模型被修剪，你可以使用 <code>--except</code> 选项：</p><pre><code>$schedule-&gt;command(&#39;model:prune&#39;, [
    &#39;--except&#39; =&gt; [Address::class, Flight::class],
])-&gt;daily();
</code></pre><p>你可以通过执行带有 <code>--pretend</code> 选项的 <code>model:prune</code> 命令来预测你的 <code>prunable</code> 查询。预测时，<code>model:prune</code> 命令将报告该命令实际运行将修剪多少记录：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan model:prune <span class="token parameter variable">--pretend</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p><strong>注意</strong><br> 如果软删除模型与可修剪查询匹配，则它们将被永久删除（<code>forceDelete</code>）。</p></blockquote><p><a name="mass-pruning"></a></p><h4 id="批量修剪模型" tabindex="-1"><a class="header-anchor" href="#批量修剪模型" aria-hidden="true">#</a> 批量修剪模型</h4><p>当模型被标记为 <code>Illuminate\\Database\\Eloquent\\MassPrunable</code> 特征时，模型会使用批量删除查询从数据库中删除。因此，不会调用 <code>pruning</code> 方法，也不会触发 <code>deleting</code> 和 <code>deleted</code> 模型事件。这是因为模型在删除之前从未真正检索过，因此更高效：</p><pre><code>&lt;?php

namespace App\\Models;

use Illuminate\\Database\\Eloquent\\Builder;
use Illuminate\\Database\\Eloquent\\Model;
use Illuminate\\Database\\Eloquent\\MassPrunable;

class Flight extends Model
{
    use MassPrunable;

    /**
     * 获取可修剪模型查询。
     */
    public function prunable(): Builder
    {
        return static::where(&#39;created_at&#39;, &#39;&lt;=&#39;, now()-&gt;subMonth());
    }
}
</code></pre><p><a name="replicating-models"></a></p><h2 id="复制模型" tabindex="-1"><a class="header-anchor" href="#复制模型" aria-hidden="true">#</a> 复制模型</h2><p>可以使用 <code>replicate</code> 方法创建现有模型实例的未保存副本。在拥有共享许多相同属性的模型实例时，此方法特别有用：</p><pre><code>use App\\Models\\Address;

$shipping = Address::create([
    &#39;type&#39; =&gt; &#39;shipping&#39;,
    &#39;line_1&#39; =&gt; &#39;123 Example Street&#39;,
    &#39;city&#39; =&gt; &#39;Victorville&#39;,
    &#39;state&#39; =&gt; &#39;CA&#39;,
    &#39;postcode&#39; =&gt; &#39;90001&#39;,
]);

$billing = $shipping-&gt;replicate()-&gt;fill([
    &#39;type&#39; =&gt; &#39;billing&#39;
]);

$billing-&gt;save();
</code></pre><p>要排除一个或多个属性被复制到新模型，可以将数组传递给 <code>replicate</code> 方法：</p><pre><code>$flight = Flight::create([
    &#39;destination&#39; =&gt; &#39;LAX&#39;,
    &#39;origin&#39; =&gt; &#39;LHR&#39;,
    &#39;last_flown&#39; =&gt; &#39;2020-03-04 11:00:00&#39;,
    &#39;last_pilot_id&#39; =&gt; 747,
]);

$flight = $flight-&gt;replicate([
    &#39;last_flown&#39;,
    &#39;last_pilot_id&#39;
]);
</code></pre><p><a name="query-scopes"></a></p><h2 id="查询作用域" tabindex="-1"><a class="header-anchor" href="#查询作用域" aria-hidden="true">#</a> 查询作用域</h2><p><a name="global-scopes"></a></p><h3 id="全局作用域" tabindex="-1"><a class="header-anchor" href="#全局作用域" aria-hidden="true">#</a> 全局作用域</h3><p>全局作用域可以为模型的所有查询添加约束。 Laravel 的<a href="#soft-deleting">软删除</a> 功能就是利用全局范围仅从数据库中检索「未删除」模型。编写全局范围查询可以为模型的每个查询都添加约束条件。</p><p><a name="writing-global-scopes"></a></p><h4 id="编写全局作用域" tabindex="-1"><a class="header-anchor" href="#编写全局作用域" aria-hidden="true">#</a> 编写全局作用域</h4><p>编写全局范围很简单。首先，定义一个实现 <code>Illuminate\\Database\\Eloquent\\Scope</code> 接口的类。 Laravel 没有放置作用域类的常规位置，因此你可以自由地将此类放置在你希望的任何目录中。</p><p><code>Scope</code> 接口要求实现 <code>apply</code> 方法。 <code>apply</code> 方法可以根据需要向查询中添加 <code>where</code> 约束或其他类型的子句：</p><pre><code>&lt;?php

namespace App\\Models\\Scopes;

use Illuminate\\Database\\Eloquent\\Builder;
use Illuminate\\Database\\Eloquent\\Model;
use Illuminate\\Database\\Eloquent\\Scope;

class AncientScope implements Scope
{
    /**
     * 将作用域应用于给定的 Eloquent 查询构建器
     */
    public function apply(Builder $builder, Model $model): void
    {
        $builder-&gt;where(&#39;created_at&#39;, &#39;&lt;&#39;, now()-&gt;subYears(2000));
    }
}
</code></pre><blockquote><p><strong>注意</strong><br> 如果需要在 <code>select</code> 语句里添加字段，应使用 <code>addSelect</code> 方法，而不是 <code>select</code> 方法。这将有效防止无意中替换现有 <code>select</code> 语句的情况。</p></blockquote><p><a name="applying-global-scopes"></a></p><h4 id="应用全局作用域" tabindex="-1"><a class="header-anchor" href="#应用全局作用域" aria-hidden="true">#</a> 应用全局作用域</h4><p>要将全局作用域分配给模型，需要重写模型的 <code>booted</code> 方法并使用 <code>addGlobalScope</code> 方法，<code>addGlobalScope</code> 方法接受作用域的一个实例作为它的唯一参数：</p><pre><code>&lt;?php

namespace App\\Models;

use App\\Models\\Scopes\\AncientScope;
use Illuminate\\Database\\Eloquent\\Model;

class User extends Model
{
    /**
     * 模型的「引导」方法。
     */
    protected static function booted(): void
    {
        static::addGlobalScope(new AncientScope);
    }
}
</code></pre><p>将上例中的作用域添加到 <code>App\\Models\\User</code> 模型后，用 <code>User::all()</code> 方法将执行以下 SQL 查询：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> <span class="token identifier"><span class="token punctuation">\`</span>users<span class="token punctuation">\`</span></span> <span class="token keyword">where</span> <span class="token identifier"><span class="token punctuation">\`</span>created_at<span class="token punctuation">\`</span></span> <span class="token operator">&lt;</span> <span class="token number">0021</span><span class="token operator">-</span><span class="token number">02</span><span class="token operator">-</span><span class="token number">18</span> <span class="token number">00</span>:<span class="token number">00</span>:<span class="token number">00</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a name="anonymous-global-scopes"></a></p><h4 id="匿名全局作用域" tabindex="-1"><a class="header-anchor" href="#匿名全局作用域" aria-hidden="true">#</a> 匿名全局作用域</h4><p>Eloquent 同样允许使用闭包定义全局作用域，这样就不需要为一个简单的作用域而编写一个单独的类。使用闭包定义全局作用域时，你应该指定一个作用域名称作为 <code>addGlobalScope</code> 方法的第一个参数：</p><pre><code>&lt;?php

namespace App\\Models;

use Illuminate\\Database\\Eloquent\\Builder;
use Illuminate\\Database\\Eloquent\\Model;

class User extends Model
{
    /**
     * 模型的「引导」方法。
     */
    protected static function booted(): void
    {
        static::addGlobalScope(&#39;ancient&#39;, function (Builder $builder) {
            $builder-&gt;where(&#39;created_at&#39;, &#39;&lt;&#39;, now()-&gt;subYears(2000));
        });
    }
}
</code></pre><p><a name="removing-global-scopes"></a></p><h4 id="取消全局作用域" tabindex="-1"><a class="header-anchor" href="#取消全局作用域" aria-hidden="true">#</a> 取消全局作用域</h4><p>如果需要对当前查询取消全局作用域，需要使用 <code>withoutGlobalScope</code> 方法。该方法仅接受全局作用域类名作为它唯一的参数：</p><pre><code>User::withoutGlobalScope(AncientScope::class)-&gt;get();
</code></pre><p>或者，如果你使用闭包定义了全局作用域，则应传递分配给全局作用域的字符串名称：</p><pre><code>User::withoutGlobalScope(&#39;ancient&#39;)-&gt;get();
</code></pre><p>如果需要取消部分或者全部的全局作用域的话，需要使用 <code>withoutGlobalScopes</code> 方法：</p><pre><code>// 取消全部全局作用域...
User::withoutGlobalScopes()-&gt;get();

// 取消部分作用域...
User::withoutGlobalScopes([
    FirstScope::class, SecondScope::class
])-&gt;get();
</code></pre><p><a name="local-scopes"></a></p><h3 id="局部作用域" tabindex="-1"><a class="header-anchor" href="#局部作用域" aria-hidden="true">#</a> 局部作用域</h3><p>局部作用域允许定义通用的约束集合以便在应用程序中重复使用。例如，你可能经常需要获取所有「流行」的用户。要定义这样一个范围，只需要在对应的 Eloquent 模型方法前添加 <code>scope</code> 前缀。</p><p>作用域总是返回一个查询构造器实例或者<code>void</code>：</p><pre><code>&lt;?php

namespace App\\Models;

use Illuminate\\Database\\Eloquent\\Builder;
use Illuminate\\Database\\Eloquent\\Model;

class User extends Model
{
    /**
     * 只查询受欢迎的用户的作用域。
     */
    public function scopePopular(Builder $query): void
    {
        $query-&gt;where(&#39;votes&#39;, &#39;&gt;&#39;, 100);
    }

    /**
     * 只查询 active 用户的作用域。
     */
    public function scopeActive(Builder $query): void
    {
        $query-&gt;where(&#39;active&#39;, 1);
    }
}
</code></pre><p><a name="utilizing-a-local-scope"></a></p><h4 id="使用局部作用域" tabindex="-1"><a class="header-anchor" href="#使用局部作用域" aria-hidden="true">#</a> 使用局部作用域</h4><p>一旦定义了作用域，就可以在查询该模型时调用作用域方法。不过，在调用这些方法时不必包含 <code>scope</code> 前缀。甚至可以链式调用多个作用域，例如：</p><pre><code>use App\\Models\\User;

$users = User::popular()-&gt;active()-&gt;orderBy(&#39;created_at&#39;)-&gt;get();
</code></pre><p>通过 <code>or</code> 查询运算符组合多个 Eloquent 模型作用域可能需要使用闭包来实现正确的<a href="./queries#logical-grouping">逻辑分组</a>：</p><pre><code>$users = User::popular()-&gt;orWhere(function (Builder $query) {
    $query-&gt;active();
})-&gt;get();
</code></pre><p>然而这可能有点麻烦，所以 Laravel 提供了一个更高阶的 <code>orWhere</code> 方法，允许你流畅地将作用域链接在一起，而无需使用闭包：</p><pre><code>$users = App\\Models\\User::popular()-&gt;orWhere-&gt;active()-&gt;get();
</code></pre><p><a name="dynamic-scopes"></a></p><h4 id="动态作用域" tabindex="-1"><a class="header-anchor" href="#动态作用域" aria-hidden="true">#</a> 动态作用域</h4><p>有时可能地希望定义一个可以接受参数的作用域。把额外参数传递给作用域就可以达到此目的。作用域参数要放在 <code>$query</code> 参数之后：</p><pre><code>&lt;?php

namespace App\\Models;

use Illuminate\\Database\\Eloquent\\Model;

class User extends Model
{
    /**
     * 将查询作用域限制为仅包含给定类型的用户。
     */
    public function scopeOfType(Builder $query, string $type): void
    {
        $query-&gt;where(&#39;type&#39;, $type);
    }
}
</code></pre><p>一旦将预期的参数添加到作用域方法的签名中，你就可以在调用作用域时传递参数：</p><pre><code>$users = User::ofType(&#39;admin&#39;)-&gt;get();
</code></pre><p><a name="comparing-models"></a></p><h2 id="模型比较" tabindex="-1"><a class="header-anchor" href="#模型比较" aria-hidden="true">#</a> 模型比较</h2><p>有时可能需要判断两个模型是否「相同」。<code>is</code> 和 <code>isNot</code> 方法可以用来快速校验两个模型是否拥有相同的主键、表和数据库连接：</p><pre><code>if ($post-&gt;is($anotherPost)) {
    // ...
}

if ($post-&gt;isNot($anotherPost)) {
    // ...
}
</code></pre><p>当使用 <code>belongsTo</code>、<code>hasOne</code>、<code>morphTo</code> 和 <code>morphOne</code> <a href="./eloquent-relationships">relationships</a> 时，<code>is</code> 和 <code>isNot</code> 方法也可用。当你想比较相关模型而不发出查询来检索该模型时，此方法特别有用：</p><pre><code>if ($post-&gt;author()-&gt;is($user)) {
    // ...
}
</code></pre><p><a name="events"></a></p><h2 id="events" tabindex="-1"><a class="header-anchor" href="#events" aria-hidden="true">#</a> Events</h2><blockquote><p><strong>注意</strong><br> 想要将 Eloquent 事件直接广播到客户端应用程序？查看 Laravel 的<a href="./broadcasting#model-broadcasting">模型事件广播</a>。</p></blockquote><p>Eloquent 模型触发几个事件，允许你挂接到模型生命周期的如下节点： <code>retrieved</code>、<code>creating</code>、<code>created</code>、<code>updating</code>、<code>updated</code>、<code>saving</code>、<code>saved</code>、<code>deleting</code>、<code>deleted</code>、<code>restoring</code>、<code>restored</code>、<code>replicating</code>。事件允许你每当特定模型保存或更新数据库时执行代码。每个事件通过其构造器接受模型实例。</p><p>当从数据库中检索到现有模型时，将调度 <code>retrieved</code> 事件。 当一个新模型第一次被保存时，<code>creating</code> 和 <code>created</code> 事件将被触发。 <code>updating</code> / <code>updated</code> 事件将在修改现有模型并调用 <code>save</code> 方法时触发。<code>saving</code> / <code>saved</code> 事件将在创建或更新模型时触发 - 即使模型的属性没有更改。以<code>-ing</code>结尾的事件名称在模型的任何更改被持久化之前被调度，而以<code>-ed</code>结尾的事件在对模型的更改被持久化之后被调度。</p><p>要开始监听模型事件，请在 Eloquent 模型上定义一个 $dispatchesEvents 属性。此属性将 Eloquent 模型生命周期的各个点映射到你定义的<a href="./events">事件类</a>。每个模型事件类都应该通过其构造函数接收受影响的模型的实例：</p><pre><code>&lt;?php

namespace App\\Models;

use App\\Events\\UserDeleted;
use App\\Events\\UserSaved;
use Illuminate\\Foundation\\Auth\\User as Authenticatable;
use Illuminate\\Notifications\\Notifiable;

class User extends Authenticatable
{
    use Notifiable;

    /**
     * 模型的事件映射。
     *
     * @var array
     */
    protected $dispatchesEvents = [
        &#39;saved&#39; =&gt; UserSaved::class,
        &#39;deleted&#39; =&gt; UserDeleted::class,
    ];
}
</code></pre><p>在定义和映射了 Eloquent 事件之后，可以使用 <a href="./events#defining-listeners">event listeners</a> 来处理事件。</p><blockquote><p><strong>注意</strong><br> 在使用 Eloquent 进行批量更新或删除查询时，受影响的模型不会触发<code>saved</code>、<code>updated</code>、<code>deleting</code>和<code>deleted</code>等事件。这是因为在执行批量更新或删除操作时，实际上没有检索到这些模型，所以也就不会触发这些事件。</p></blockquote><p><a name="events-using-closures"></a></p><h3 id="使用闭包" tabindex="-1"><a class="header-anchor" href="#使用闭包" aria-hidden="true">#</a> 使用闭包</h3><p>你可以注册一些闭包函数来处理模型事件，而不使用自定义事件类。通常，你应该在模型的 <code>booted</code> 方法中注册这些闭包</p><pre><code>&lt;?php

namespace App\\Models;

use Illuminate\\Database\\Eloquent\\Model;

class User extends Model
{
    /**
     * 模型的「booted」方法。
     */
    protected static function booted(): void
    {
        static::created(function (User $user) {
            // ...
        });
    }
}
</code></pre><p>如果需要，你可以在注册模型事件时使用<a href="./events#queuable-anonymous-event-listeners">队列匿名事件侦听器</a> 。这将指示 Laravel 使用应用程序的 <a href="./queues">queue</a> 在后台执行模型事件监听器：</p><pre><code>use function Illuminate\\Events\\queueable;

static::created(queueable(function (User $user) {
    // ...
}));
</code></pre><p><a name="observers"></a></p><h3 id="观察者" tabindex="-1"><a class="header-anchor" href="#观察者" aria-hidden="true">#</a> 观察者</h3><p><a name="defining-observers"></a></p><h4 id="定义观察者" tabindex="-1"><a class="header-anchor" href="#定义观察者" aria-hidden="true">#</a> 定义观察者</h4><p>如果在一个模型上监听了多个事件，可以使用观察者来将这些监听器组织到一个单独的类中。观察者类的方法名映射到你希望监听的 Eloquent 事件。这些方法都以模型作为其唯一参数。<code>make:observer</code> Artisan 命令可以快速建立新的观察者类：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan make:observer UserObserver <span class="token parameter variable">--model</span><span class="token operator">=</span>User
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>此命令将在 <code>App/Observers</code> 文件夹放置新的观察者类。如果这个目录不存在，Artisan 将替你创建。使用如下方式开启观察者：</p><pre><code>&lt;?php

namespace App\\Observers;

use App\\Models\\User;

class UserObserver
{
    /**
     * 处理用户「创建」事件。
     */
    public function created(User $user): void
    {
        // ...
    }

    /**
     * 处理用户「更新」事件。
     */
    public function updated(User $user): void
    {
        // ...
    }

    /**
     * 处理用户「删除」事件。
     */
    public function deleted(User $user): void
    {
        // ...
    }
    
    /**
     * 处理用户「还原」事件。
     */
    public function restored(User $user): void
    {
        // ...
    }

    /**
     * 处理用户「强制删除」事件。
     */
    public function forceDeleted(User $user): void
    {
        // ...
    }
}
</code></pre><p>要注册观察者，需要在要观察的模型上调用<code>Observer</code> 方法。你可以在应用程序的 <code>boot</code> 方法中注册观察者</p><p><code>App\\Providers\\EventServiceProvider</code> 服务提供者:</p><pre><code>use App\\Models\\User;
use App\\Observers\\UserObserver;

/**
 * 为你的应用程序注册任何事件。
 */
public function boot(): void
{
    User::observe(UserObserver::class);
}
</code></pre><p>或者，可以在应用程序的 <code>$observers</code> 属性中列出你的观察者</p><p><code>App\\Providers\\EventServiceProvider</code> class:</p><pre><code>use App\\Models\\User;
use App\\Observers\\UserObserver;

/**
 * 应用程序的模型观察者。
 *
 * @var array
 */
protected $observers = [
    User::class =&gt; [UserObserver::class],
];
</code></pre><blockquote><p><strong>技巧</strong><br> 观察者可以监听其他事件，例如「saving」和「retrieved」。这些事件在 <a href="#events">events</a> 文档中进行了描述。</p></blockquote><p><a name="observers-and-database-transactions"></a></p><h4 id="观察者与数据库事务" tabindex="-1"><a class="header-anchor" href="#观察者与数据库事务" aria-hidden="true">#</a> 观察者与数据库事务</h4><p>在数据库事务中创建模型时，你可能希望指示观察者仅在提交数据库事务后执行其事件处理程序。可以通过在观察者上定义一个 <code>$afterCommit</code> 属性来完成此操作。如果数据库事务不在进行中，事件处理程序将立即执行：</p><pre><code>&lt;?php

namespace App\\Observers;

use App\\Models\\User;

class UserObserver
{
    /**
     * 在提交所有事务后处理事件
     *
     * @var bool
     */
    public $afterCommit = true;

    /**
     *  处理用户「创建」事件。
     */
    public function created(User $user): void
    {
        // ...
    }
}
</code></pre><p><a name="muting-events"></a></p><h3 id="静默事件" tabindex="-1"><a class="header-anchor" href="#静默事件" aria-hidden="true">#</a> 静默事件</h3><p>也许有时候你会需要暂时将所有由模型触发的事件「静默」处理。使用 <code>withoutEvents</code> 达到目的。<code>withoutEvents</code> 方法接受一个闭包作为唯一参数。任何在闭包中执行的代码都不会被分配模型事件，并且闭包函数返回的任何值都将被 <code>withoutEvents</code> 方法所返回：</p><pre><code>use App\\Models\\User;

$user = User::withoutEvents(function () {
    User::findOrFail(1)-&gt;delete();

    return User::find(2);
});
</code></pre><p><a name="saving-a-single-model-without-events"></a></p><h4 id="静默的保存单个模型" tabindex="-1"><a class="header-anchor" href="#静默的保存单个模型" aria-hidden="true">#</a> 静默的保存单个模型</h4><p>有时候，你也许会想要「保存」一个已有的模型，且不触发任何事件。那么你可用 <code>saveQuietly</code> 方法达到目的：</p><pre><code>$user = User::findOrFail(1);

$user-&gt;name = &#39;Victoria Faith&#39;;

$user-&gt;saveQuietly();
</code></pre><p>你也可以「更新」「删除」「软删除」「还原」「复制」给定模型且不触发任何事件：</p><pre><code>$user-&gt;deleteQuietly();
$user-&gt;forceDeleteQuietly();
$user-&gt;restoreQuietly();
</code></pre>`,269);function q($,y){const s=c("ExternalLinkIcon");return d(),p("div",null,[r,n("p",null,[e("如果你是 Laravel 的新手，可以随时前往 "),n("a",i,[e("Laravel 训练营"),t(s)]),e("。Laravel 训练营将指导你使用 Eloquent 建立你的第一个 Laravel 应用。这是一个很好的方式来了解 Laravel 和 Eloquent 所提供的一切。")]),u,n("p",null,[e("在内部，"),h,e(" 方法使用 PHP "),n("a",g,[e("generators"),t(s)]),e(" 来实现此功能：")]),m,n("p",null,[e("尽管 "),b,e(" 方法使用的内存比常规查询要少得多（一次只在内存中保存一个 Eloquent 模型），但它最终仍会耗尽内存。这是"),n("a",v,[e("由于 PHP 的 PDO 驱动程序内部将所有原始查询结果缓存在其缓冲区中"),t(s)]),e("。 如果要处理大量 Eloquent 记录，请考虑使用 "),k,e("。")]),f])}const F=o(l,[["render",q],["__file","eloquent.html.vue"]]);export{F as default};
