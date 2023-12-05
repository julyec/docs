import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as e,c as s,a}from"./app-8cdff07c.js";const t={},o=a(`<h1 id="eloquent-api-resources" tabindex="-1"><a class="header-anchor" href="#eloquent-api-resources" aria-hidden="true">#</a> Eloquent: API Resources</h1><ul><li><a href="#introduction">简介</a></li><li><a href="#generating-resources">生成资源</a></li><li><a href="#concept-overview">生成资源</a><ul><li><a href="#resource-collections">资源集合</a></li></ul></li><li><a href="#writing-resources">编写资源</a><ul><li><a href="#data-wrapping">数据包裹</a></li><li><a href="#pagination">分页</a></li><li><a href="#conditional-attributes">条件属性</a></li><li><a href="#conditional-relationships">条件关系</a></li><li><a href="#adding-meta-data">添加元数据</a></li></ul></li><li><a href="#resource-responses">资源响应</a></li></ul><p><a name="introduction"></a></p><h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h2><p>在构建 API 时，你往往需要一个转换层来联结你的 Eloquent 模型和实际返回给用户的 JSON 响应。比如，你可能希望显示部分用户属性而不是全部，或者你可能希望在模型的 JSON 中包括某些关系。Eloquent 的资源类能够让你以更直观简便的方式将模型和模型集合转化成 JSON。</p><p>当然，你可以始终使用 Eloquent 模型或集合的 <code>toJson</code> 方法将其转换为 JSON ；但是，Eloquent 的资源提供了对模型及其关系的 JSON 序列化更加精细和更加健壮的控制。</p><p><a name="generating-resources"></a></p><h2 id="生成资源" tabindex="-1"><a class="header-anchor" href="#生成资源" aria-hidden="true">#</a> 生成资源</h2><p>你可以使用 <code>make:resource</code> artisan 命令来生成一个资源类。默认情况下，资源将放在应用程序的 <code>app/Http/Resources</code> 目录下。资源继承自 <code>Illuminate\\Http\\Resources\\Json\\JsonResource</code> 类：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan make:resource UserResource
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a name="generating-resource-collections"></a></p><h4 id="资源集合" tabindex="-1"><a class="header-anchor" href="#资源集合" aria-hidden="true">#</a> 资源集合</h4><p>除了生成转换单个模型的资源之外，还可以生成负责转换模型集合的资源。这允许你的 JSON 包含与给定资源的整个集合相关的其他信息。</p><p>你应该在创建资源集合时使用 <code>--collection</code> 标志来表明你要生成一个资源集合。或者，在资源名称中包含 Collection 一词将向 Laravel 表明它应该生成一个资源集合。资源集合继承自 <code>Illuminate\\Http\\Resources\\Json\\ResourceCollection</code> 类：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan make:resource User <span class="token parameter variable">--collection</span>

php artisan make:resource UserCollection
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="concept-overview"></a></p><h2 id="概念综述" tabindex="-1"><a class="header-anchor" href="#概念综述" aria-hidden="true">#</a> 概念综述</h2><blockquote><p><strong>提示</strong><br> 提示：这是对资源和资源集合的高度概述。强烈建议您阅读本文档的其他部分，以深入了解如何更好地自定义和使用资源。</p></blockquote><p>在深入了解如何定制化编写你的资源之前，让我们首先从高层次上了解 Laravel 中如何使用资源。一个资源类表示一个单一模型需要被转换成 JSON 格式。例如，下面是一个简单的 <code>UserResource</code> 资源类：</p><pre><code>&lt;?php

namespace App\\Http\\Resources;

use Illuminate\\Http\\Request;
use Illuminate\\Http\\Resources\\Json\\JsonResource;

class UserResource extends JsonResource
{
    /**
     * 将资源转换为数组。
     *
     * @return array&lt;string, mixed&gt;
     */
    public function toArray(Request $request): array
    {
        return [
            &#39;id&#39; =&gt; $this-&gt;id,
            &#39;name&#39; =&gt; $this-&gt;name,
            &#39;email&#39; =&gt; $this-&gt;email,
            &#39;created_at&#39; =&gt; $this-&gt;created_at,
            &#39;updated_at&#39; =&gt; $this-&gt;updated_at,
        ];
    }
}
</code></pre><p>每个资源类都定义了一个 <code>toArray</code> 方法，当资源从路由或控制器方法作为响应被调用返回时，该方法返回应该转换为 JSON 的属性数组。</p><p>注意，我们可以直接使用 <code>$this</code> 变量访问模型属性。这是因为资源类将自动代理属性和方法访问到底层模型以方便访问。一旦定义了资源，你可以从路由或控制器中调用并返回它。资源通过其构造函数接受底层模型实例：</p><pre><code>use App\\Http\\Resources\\UserResource;
use App\\Models\\User;

Route::get(&#39;/user/{id}&#39;, function (string $id) {
    return new UserResource(User::findOrFail($id));
});
</code></pre><p><a name="resource-collections"></a></p><h3 id="资源集合-1" tabindex="-1"><a class="header-anchor" href="#资源集合-1" aria-hidden="true">#</a> 资源集合</h3><p>如果你要返回一个资源集合或一个分页响应，你应该在路由或控制器中创建资源实例时使用你的资源类提供的 <code>collection</code> 方法：</p><pre><code>use App\\Http\\Resources\\UserResource;
use App\\Models\\User;

Route::get(&#39;/users&#39;, function () {
    return UserResource::collection(User::all());
});
</code></pre><p>当然了，使用如上方法你将不能添加任何附加的元数据和集合一起返回。如果你需要自定义资源集合响应，你需要创建一个专用的资源来表示集合：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan make:resource UserCollection
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>此时，你就可以轻松地自定义响应中应该包含的任何元数据：</p><pre><code>&lt;?php

namespace App\\Http\\Resources;

use Illuminate\\Http\\Request;
use Illuminate\\Http\\Resources\\Json\\ResourceCollection;

class UserCollection extends ResourceCollection
{
    /**
     * 将资源集合转换为数组。
     *
     * @return array&lt;int|string, mixed&gt;
     */
    public function toArray(Request $request): array
    {
        return [
            &#39;data&#39; =&gt; $this-&gt;collection,
            &#39;links&#39; =&gt; [
                &#39;self&#39; =&gt; &#39;link-value&#39;,
            ],
        ];
    }
}
</code></pre><p>你可以在路由或者控制器中返回已定义的资源集合：</p><pre><code>use App\\Http\\Resources\\UserCollection;
use App\\Models\\User;

Route::get(&#39;/users&#39;, function () {
    return new UserCollection(User::all());
});
</code></pre><p><a name="preserving-collection-keys"></a></p><h4 id="保护集合的键" tabindex="-1"><a class="header-anchor" href="#保护集合的键" aria-hidden="true">#</a> 保护集合的键</h4><p>当从路由返回一个资源集合时，Laravel 会重置集合的键，使它们按数字顺序排列。但是，你可以在资源类中添加 <code>preserveKeys</code> 属性，以指示是否应该保留集合的原始键：</p><pre><code>&lt;?php

namespace App\\Http\\Resources;

use Illuminate\\Http\\Resources\\Json\\JsonResource;

class UserResource extends JsonResource
{
    /**
     * 指示是否应保留资源的集合原始键。
     *
     * @var bool
     */
    public $preserveKeys = true;
}
</code></pre><p>如果 <code>preserveKeys</code> 属性设置为 <code>true</code> ，那么从路由或控制器返回集合时，集合的键将会被保留：</p><pre><code>use App\\Http\\Resources\\UserResource;
use App\\Models\\User;

Route::get(&#39;/users&#39;, function () {
    return UserResource::collection(User::all()-&gt;keyBy-&gt;id);
});
</code></pre><p><a name="customizing-the-underlying-resource-class"></a></p><h4 id="自定义基础资源类" tabindex="-1"><a class="header-anchor" href="#自定义基础资源类" aria-hidden="true">#</a> 自定义基础资源类</h4><p>通常，资源集合的 <code>$this-&gt;collection</code> 属性会被自动填充，结果是将集合的每个项映射到其单个资源类。单个资源类被假定为资源的类名，但没有类名末尾的 <code>Collection</code> 部分。 此外，根据您的个人偏好，单个资源类可以带着后缀 <code>Resource</code> ，也可以不带。</p><p>例如，<code>UserCollection</code> 会尝试将给定的用户实例映射到 <code>User</code> 或 <code>UserResource</code> 资源。想要自定义该行为，你可以重写资源集合中的 <code>$collects</code> 属性指定自定义的资源：</p><pre><code>&lt;?php

namespace App\\Http\\Resources;

use Illuminate\\Http\\Resources\\Json\\ResourceCollection;

class UserCollection extends ResourceCollection
{
    /**
     * 自定义资源类名。
     *
     * @var string
     */
    public $collects = Member::class;
}
</code></pre><p><a name="writing-resources"></a></p><h2 id="编写资源" tabindex="-1"><a class="header-anchor" href="#编写资源" aria-hidden="true">#</a> 编写资源</h2><blockquote><p><strong>Note</strong><br> 技巧：如果您还没有阅读 <a href="#concept-overview">概念综述</a>，那么在继续阅读本文档前，强烈建议您去阅读一下，会更容易理解本节的内容。</p></blockquote><p>从本质上说，资源的作用很简单，它只需将一个给定的模型转换为一个数组。因此，每个资源都包含一个 <code>toArray</code> 方法，这个方法会将模型的属性转换为一个 API 友好的数组，然后将该数组通过路由或控制器返回给用户：</p><pre><code>&lt;?php

namespace App\\Http\\Resources;

use Illuminate\\Http\\Request;
use Illuminate\\Http\\Resources\\Json\\JsonResource;

class UserResource extends JsonResource
{
    /**
     * 将资源转换为数组。
     *
     * @return array&lt;string, mixed&gt;
     */
    public function toArray(Request $request): array
    {
        return [
            &#39;id&#39; =&gt; $this-&gt;id,
            &#39;name&#39; =&gt; $this-&gt;name,
            &#39;email&#39; =&gt; $this-&gt;email,
            &#39;created_at&#39; =&gt; $this-&gt;created_at,
            &#39;updated_at&#39; =&gt; $this-&gt;updated_at,
        ];
    }
}
</code></pre><p>一旦资源被定义，它可以直接从路由或控制器返回：</p><pre><code>use App\\Http\\Resources\\UserResource;
use App\\Models\\User;

Route::get(&#39;/user/{id}&#39;, function (string $id) {
    return new UserResource(User::findOrFail($id));
});
</code></pre><p><a name="relationships"></a></p><h4 id="关联关系" tabindex="-1"><a class="header-anchor" href="#关联关系" aria-hidden="true">#</a> 关联关系</h4><p>如果你想在你的响应中包含关联的资源，你可以将它们添加到你的资源的 <code>toArray</code> 方法返回的数组中。在下面的例子中，我们将使用 <code>PostResource</code> 资源的 <code>collection</code> 方法来将用户的博客文章添加到资源响应中：</p><pre><code>use App\\Http\\Resources\\PostResource;
use Illuminate\\Http\\Request;

/**
 * 将资源转换为数组。
 *
 * @return array&lt;string, mixed&gt;
 */
public function toArray(Request $request): array
{
    return [
        &#39;id&#39; =&gt; $this-&gt;id,
        &#39;name&#39; =&gt; $this-&gt;name,
        &#39;email&#39; =&gt; $this-&gt;email,
        &#39;posts&#39; =&gt; PostResource::collection($this-&gt;posts),
        &#39;created_at&#39; =&gt; $this-&gt;created_at,
        &#39;updated_at&#39; =&gt; $this-&gt;updated_at,
    ];
}
</code></pre><blockquote><p>注意：如果你只希望在已经加载的关联关系中包含它们，点这里查看 <a href="#conditional-relationships">条件关联</a>。</p></blockquote><p><a name="writing-resource-collections"></a></p><h4 id="资源集合-2" tabindex="-1"><a class="header-anchor" href="#资源集合-2" aria-hidden="true">#</a> 资源集合</h4><p>当资源将单个模型转换为数组时，资源集合将模型集合转换为数组。当然，你并不是必须要为每个类都定义一个资源集合类，因为所有的资源都提供了一个 <code>collection</code> 方法来动态地生成一个「临时」资源集合：</p><pre><code>use App\\Http\\Resources\\UserResource;
use App\\Models\\User;

Route::get(&#39;/users&#39;, function () {
    return UserResource::collection(User::all());
});
</code></pre><p>当然，如果你需要自定义资源集合返回的元数据，那就需要自己创建资源集合类：</p><pre><code>&lt;?php

namespace App\\Http\\Resources;

use Illuminate\\Http\\Resources\\Json\\ResourceCollection;

class UserCollection extends ResourceCollection
{
    /**
     * 将资源集合转换为数组。
     *
     * @return array&lt;string, mixed&gt;
     */
    public function toArray(Request $request): array
    {
        return [
            &#39;data&#39; =&gt; $this-&gt;collection,
            &#39;links&#39; =&gt; [
                &#39;self&#39; =&gt; &#39;link-value&#39;,
            ],
        ];
    }
}
</code></pre><p>与单一资源一样，资源集合可以直接从路由或控制器返回:</p><pre><code>use App\\Http\\Resources\\UserCollection;
use App\\Models\\User;

Route::get(&#39;/users&#39;, function () {
    return new UserCollection(User::all());
});
</code></pre><p><a name="data-wrapping"></a></p><h3 id="数据包裹" tabindex="-1"><a class="header-anchor" href="#数据包裹" aria-hidden="true">#</a> 数据包裹</h3><p>默认情况下，当资源响应被转换为 JSON 时，最外层的资源被包裹在 <code>data</code> 键中。因此一个典型的资源收集响应如下所示:</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Eladio Schroeder Sr.&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;email&quot;</span><span class="token operator">:</span> <span class="token string">&quot;therese28@example.com&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
            <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Liliana Mayert&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;email&quot;</span><span class="token operator">:</span> <span class="token string">&quot;evandervort@example.com&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果你想使用自定义键而不是 <code>data</code>，你可以在资源类上定义一个 <code>$wrap</code> 属性:</p><pre><code>&lt;?php

namespace App\\Http\\Resources;

use Illuminate\\Http\\Resources\\Json\\JsonResource;

class UserResource extends JsonResource
{
    /**
     * 应该应用的「数据」包装器。
     *
     * @var string|null
     */
    public static $wrap = &#39;user&#39;;
}
</code></pre><p>如果你想禁用最外层资源的包裹，你应该调用基类 <code>Illuminate\\Http\\Resources\\Json\\JsonResource</code> 的 <code>withoutWrapping</code> 方法。通常，你应该从你的 <code>AppServiceProvider</code> 或其他在程序每一个请求中都会被加载的 <a href="./providers">服务提供者</a> 中调用这个方法:</p><pre><code>&lt;?php

namespace App\\Providers;

use Illuminate\\Http\\Resources\\Json\\JsonResource;
use Illuminate\\Support\\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * 注册任何应用程序服务。
     */
    public function register(): void
    {
        // ...
    }

    /**
     * 引导任何应用程序服务。
     */
    public function boot(): void
    {
        JsonResource::withoutWrapping();
    }
}
</code></pre><blockquote><p><strong>注意</strong><br><code>withoutWrapping</code> 方法只会禁用最外层资源的包裹，不会删除你手动添加到资源集合中的 <code>data</code> 键。</p></blockquote><p>和单个资源一样，你可以在路由或控制器中直接返回资源集合：</p><pre><code>use App\\Http\\Resources\\UserCollection;
use App\\Models\\User;

Route::get(&#39;/users&#39;, function () {
    return new UserCollection(User::all());
});
</code></pre><p><a name="data-wrapping"></a></p><h3 id="数据包裹-1" tabindex="-1"><a class="header-anchor" href="#数据包裹-1" aria-hidden="true">#</a> 数据包裹</h3><p>默认情况下，当资源响应被转换为 JSON 时，最外层的资源被包裹在 <code>data</code> 键中。因此一个典型的资源收集响应如下所示：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Eladio Schroeder Sr.&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;email&quot;</span><span class="token operator">:</span> <span class="token string">&quot;therese28@example.com&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
            <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Liliana Mayert&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;email&quot;</span><span class="token operator">:</span> <span class="token string">&quot;evandervort@example.com&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果你想使用自定义键而不是 <code>data</code>，你可以在资源类上定义一个 <code>$wrap</code> 属性：</p><pre><code>&lt;?php

namespace App\\Http\\Resources;

use Illuminate\\Http\\Resources\\Json\\JsonResource;

class UserResource extends JsonResource
{
    /**
     * 应该应用的「数据」包装器。
     *
     * @var string|null
     */
    public static $wrap = &#39;user&#39;;
}
</code></pre><p>如果你想禁用最外层资源的包裹，你应该调用基类 <code>Illuminate\\Http\\Resources\\Json\\JsonResource</code> 的 <code>withoutWrapping</code> 方法。通常，你应该从你的 <code>AppServiceProvider</code> 或其他在程序每一个请求中都会被加载的 <a href="./providers">服务提供者</a> 中调用这个方法：</p><pre><code>&lt;?php

namespace App\\Providers;

use Illuminate\\Http\\Resources\\Json\\JsonResource;
use Illuminate\\Support\\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * 注册任何应用程序服务。
     */
    public function register(): void
    {
        // ...
    }

    /**
     * 引导任何应用程序服务。
     */
    public function boot(): void
    {
        JsonResource::withoutWrapping();
    }
}
</code></pre><blockquote><p><strong>注意</strong><code>withoutWrapping</code> 方法只会禁用最外层资源的包裹，不会删除你手动添加到资源集合中的 <code>data</code> 键。</p></blockquote><p><a name="wrapping-nested-resources"></a></p><h4 id="包裹嵌套资源" tabindex="-1"><a class="header-anchor" href="#包裹嵌套资源" aria-hidden="true">#</a> 包裹嵌套资源</h4><p>你可以完全自由地决定资源关联如何被包裹。如果你希望无论怎样嵌套，所有的资源集合都包裹在一个 <code>data</code> 键中，你应该为每个资源定义一个资源集合类，并将返回的集合包裹在 <code>data</code> 键中。</p><p>你可能会担心这是否会导致最外层的资源包裹在两层 <code>data</code> 键中。别担心， Laravel 永远不会让你的资源被双层包裹，所以你不必担心资源集合被多重嵌套的问题：</p><pre><code>&lt;?php

namespace App\\Http\\Resources;

use Illuminate\\Http\\Resources\\Json\\ResourceCollection;

class CommentsCollection extends ResourceCollection
{
    /**
     * 将资源集合转换成数组。
     *
     * @return array&lt;string, mixed&gt;
     */
    public function toArray(Request $request): array
    {
        return [&#39;data&#39; =&gt; $this-&gt;collection];
    }
}
</code></pre><p><a name="data-wrapping-and-pagination"></a></p><h4 id="数据包裹和分页" tabindex="-1"><a class="header-anchor" href="#数据包裹和分页" aria-hidden="true">#</a> 数据包裹和分页</h4><p>当通过资源响应返回分页集合时，即使你调用了 <code>withoutWrapping</code> 方法，Laravel 也会将你的资源数据包裹在 <code>data</code> 键中。这是因为分页响应总会有 <code>meta</code> 和 <code>links</code> 键包含关于分页状态的信息：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Eladio Schroeder Sr.&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;email&quot;</span><span class="token operator">:</span> <span class="token string">&quot;therese28@example.com&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
            <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Liliana Mayert&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;email&quot;</span><span class="token operator">:</span> <span class="token string">&quot;evandervort@example.com&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;links&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token property">&quot;first&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://example.com/pagination?page=1&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;last&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://example.com/pagination?page=1&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;prev&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
        <span class="token property">&quot;next&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;meta&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token property">&quot;current_page&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token property">&quot;from&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token property">&quot;last_page&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://example.com/pagination&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;per_page&quot;</span><span class="token operator">:</span> <span class="token number">15</span><span class="token punctuation">,</span>
        <span class="token property">&quot;to&quot;</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
        <span class="token property">&quot;total&quot;</span><span class="token operator">:</span> <span class="token number">10</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="pagination"></a></p><h3 id="分页" tabindex="-1"><a class="header-anchor" href="#分页" aria-hidden="true">#</a> 分页</h3><p>你可以将 Laravel 分页实例传递给资源的 <code>collection</code> 方法或自定义资源集合：</p><pre><code>use App\\Http\\Resources\\UserCollection;
use App\\Models\\User;

Route::get(&#39;/users&#39;, function () {
    return new UserCollection(User::paginate());
});
</code></pre><p>分页响应中总有 <code>meta</code> 和 <code>links</code> 键包含着分页状态信息：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Eladio Schroeder Sr.&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;email&quot;</span><span class="token operator">:</span> <span class="token string">&quot;therese28@example.com&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
            <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Liliana Mayert&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;email&quot;</span><span class="token operator">:</span> <span class="token string">&quot;evandervort@example.com&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;links&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token property">&quot;first&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://example.com/pagination?page=1&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;last&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://example.com/pagination?page=1&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;prev&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
        <span class="token property">&quot;next&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;meta&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token property">&quot;current_page&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token property">&quot;from&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token property">&quot;last_page&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://example.com/pagination&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;per_page&quot;</span><span class="token operator">:</span> <span class="token number">15</span><span class="token punctuation">,</span>
        <span class="token property">&quot;to&quot;</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
        <span class="token property">&quot;total&quot;</span><span class="token operator">:</span> <span class="token number">10</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="conditional-attributes"></a></p><h3 id="条件属性" tabindex="-1"><a class="header-anchor" href="#条件属性" aria-hidden="true">#</a> 条件属性</h3><p>有些时候，你可能希望在给定条件满足时添加属性到资源响应里。例如，你可能希望如果当前用户是「管理员」时添加某个值到资源响应中。在这种情况下 Laravel 提供了一些辅助方法来帮助你解决问题。<code>when</code> 方法可以被用来有条件地向资源响应添加属性：</p><pre><code>/**
 * 将资源转换成数组。
 *
 * @return array&lt;string, mixed&gt;
 */
public function toArray(Request $request): array
{
    return [
        &#39;id&#39; =&gt; $this-&gt;id,
        &#39;name&#39; =&gt; $this-&gt;name,
        &#39;email&#39; =&gt; $this-&gt;email,
        &#39;secret&#39; =&gt; $this-&gt;when($request-&gt;user()-&gt;isAdmin(), &#39;secret-value&#39;),
        &#39;created_at&#39; =&gt; $this-&gt;created_at,
        &#39;updated_at&#39; =&gt; $this-&gt;updated_at,
    ];
}
</code></pre><p>在上面这个例子中，只有当 <code>isAdmin</code> 方法返回 <code>true</code> 时，<code>secret</code> 键才会最终在资源响应中被返回。如果该方法返回 <code>false</code> 键将会在资源响应被发送给客户端之前被删除。 <code>when</code> 方法可以使你避免使用条件语句拼接数组，转而用更优雅的方式来编写你的资源。</p><p><code>when</code> 方法也接受闭包作为其第二个参数，只有在给定条件为 <code>true</code> 时，才从闭包中计算返回的值：</p><pre><code>&#39;secret&#39; =&gt; $this-&gt;when($request-&gt;user()-&gt;isAdmin(), function () {
    return &#39;secret-value&#39;;
}),
</code></pre><p><code>whenHas</code> 方法可以用来包含一个属性，如果它确实存在于底层模型中：</p><pre><code>&#39;name&#39; =&gt; $this-&gt;whenHas(&#39;name&#39;),
</code></pre><p>此外， <code>whenNotNull</code> 方法可用于在资源响应中包含一个属性，如果该属性不为空：</p><pre><code>&#39;name&#39; =&gt; $this-&gt;whenNotNull($this-&gt;name),
</code></pre><p><a name="merging-conditional-attributes"></a></p><h4 id="有条件地合并数据" tabindex="-1"><a class="header-anchor" href="#有条件地合并数据" aria-hidden="true">#</a> 有条件地合并数据</h4><p>有些时候，你可能希望在给定条件满足时添加多个属性到资源响应里。在这种情况下，你可以使用 <code>mergeWhen</code> 方法在给定的条件为 <code>true</code> 时将多个属性添加到响应中：</p><pre><code>/**
 * 将资源转换成数组
 *
 * @return array&lt;string, mixed&gt;
 */
public function toArray(Request $request): array
{
    return [
        &#39;id&#39; =&gt; $this-&gt;id,
        &#39;name&#39; =&gt; $this-&gt;name,
        &#39;email&#39; =&gt; $this-&gt;email,
        $this-&gt;mergeWhen($request-&gt;user()-&gt;isAdmin(), [
            &#39;first-secret&#39; =&gt; &#39;value&#39;,
            &#39;second-secret&#39; =&gt; &#39;value&#39;,
        ]),
        &#39;created_at&#39; =&gt; $this-&gt;created_at,
        &#39;updated_at&#39; =&gt; $this-&gt;updated_at,
    ];
}
</code></pre><p>同理，如果给定的条件为 <code>false</code> 时，则这些属性将会在资源响应被发送给客户端之前被移除。</p><blockquote><p><strong>注意</strong><br><code>mergeWhen</code> 方法不应该被使用在混合字符串和数字键的数组中。此外，它也不应该被使用在不按顺序排列的数字键的数组中。</p></blockquote><p><a name="conditional-relationships"></a></p><h3 id="条件关联" tabindex="-1"><a class="header-anchor" href="#条件关联" aria-hidden="true">#</a> 条件关联</h3><p>除了有条件地加载属性之外，你还可以根据模型关联是否已加载来有条件地在你的资源响应中包含关联。这允许你在控制器中决定加载哪些模型关联，这样你的资源可以在模型关联被加载后才添加它们。最终，这样做可以使你的资源轻松避免「N+1」查询问题。</p><p>如果属性确实存在于模型中，可以用<code>whenHas</code>来获取：</p><pre><code>&#39;name&#39; =&gt; $this-&gt;whenHas(&#39;name&#39;),
</code></pre><p>此外，<code>whenNotNull</code>可用于在资源响应中获取一个不为空的属性：</p><pre><code>&#39;name&#39; =&gt; $this-&gt;whenNotNull($this-&gt;name),
</code></pre><p><a name="merging-conditional-attributes"></a></p><h4 id="有条件地合并数据-1" tabindex="-1"><a class="header-anchor" href="#有条件地合并数据-1" aria-hidden="true">#</a> 有条件地合并数据</h4><p>有些时候，你可能希望在给定条件满足时添加多个属性到资源响应里。在这种情况下，你可以使用 <code>mergeWhen</code> 方法在给定的条件为 <code>true</code> 时将多个属性添加到响应中：</p><pre><code>/**
 * 将资源转换成数组。
 *
 * @return array&lt;string, mixed&gt;
 */
public function toArray(Request $request): array
{
    return [
        &#39;id&#39; =&gt; $this-&gt;id,
        &#39;name&#39; =&gt; $this-&gt;name,
        &#39;email&#39; =&gt; $this-&gt;email,
        $this-&gt;mergeWhen($request-&gt;user()-&gt;isAdmin(), [
            &#39;first-secret&#39; =&gt; &#39;value&#39;,
            &#39;second-secret&#39; =&gt; &#39;value&#39;,
        ]),
        &#39;created_at&#39; =&gt; $this-&gt;created_at,
        &#39;updated_at&#39; =&gt; $this-&gt;updated_at,
    ];
}
</code></pre><p>同理，如果给定的条件为 <code>false</code> 时，则这些属性将会在资源响应被发送给客户端之前被移除。</p><blockquote><p><strong>注意</strong><code>mergeWhen</code> 方法不应该被使用在混合字符串和数字键的数组中。此外，它也不应该被使用在不按顺序排列的数字键的数组中。</p></blockquote><p><a name="conditional-relationships"></a></p><h3 id="条件关联-1" tabindex="-1"><a class="header-anchor" href="#条件关联-1" aria-hidden="true">#</a> 条件关联</h3><p>除了有条件地加载属性之外，你还可以根据模型关联是否已加载来有条件地在你的资源响应中包含关联。这允许你在控制器中决定加载哪些模型关联，这样你的资源可以在模型关联被加载后才添加它们。最终，这样做可以使你的资源轻松避免「N+1」查询问题。</p><p>可以使用<code>whenLoaded</code>方法来有条件的加载关联。为了避免加载不必要的关联，此方法接受关联的名称而不是关联本身作为其参数：</p><pre><code>use App\\Http\\Resources\\PostResource;

/**
 * 将资源转换成数组。
 *
 * @return array&lt;string, mixed&gt;
 */
public function toArray(Request $request): array
{
    return [
        &#39;id&#39; =&gt; $this-&gt;id,
        &#39;name&#39; =&gt; $this-&gt;name,
        &#39;email&#39; =&gt; $this-&gt;email,
        &#39;posts&#39; =&gt; PostResource::collection($this-&gt;whenLoaded(&#39;posts&#39;)),
        &#39;created_at&#39; =&gt; $this-&gt;created_at,
        &#39;updated_at&#39; =&gt; $this-&gt;updated_at,
    ];
}
</code></pre><p>在上面这个例子中，如果关联没有被加载，则<code>posts</code>键将会在资源响应被发送给客户端之前被删除。</p><p><a name="conditional-relationship-counts"></a></p><h4 id="条件关系计数" tabindex="-1"><a class="header-anchor" href="#条件关系计数" aria-hidden="true">#</a> 条件关系计数</h4><p>除了有条件地包含关系之外，你还可以根据关系的计数是否已加载到模型上，有条件地包含资源响应中的关系「计数」:</p><pre><code>new UserResource($user-&gt;loadCount(&#39;posts&#39;));
</code></pre><p><code>whenCounted</code>方法可用于在资源响应中有条件地包含关系的计数。该方法避免在关系计数不存在时不必要地包含属性:</p><pre><code>/**
 * 将资源转换为一个数组。
 *
 * @return array&lt;string, mixed&gt;
 */
public function toArray(Request $request): array
{
    return [
        &#39;id&#39; =&gt; $this-&gt;id,
        &#39;name&#39; =&gt; $this-&gt;name,
        &#39;email&#39; =&gt; $this-&gt;email,
        &#39;posts_count&#39; =&gt; $this-&gt;whenCounted(&#39;posts&#39;),
        &#39;created_at&#39; =&gt; $this-&gt;created_at,
        &#39;updated_at&#39; =&gt; $this-&gt;updated_at,
    ];
}
</code></pre><p>在这个例子中，如果<code>posts</code>关系的计数还没有加载，<code>posts_count</code>键将在资源响应发送到客户端之前从资源响应中删除。</p><p><a name="conditional-pivot-information"></a></p><h4 id="条件中间表信息" tabindex="-1"><a class="header-anchor" href="#条件中间表信息" aria-hidden="true">#</a> 条件中间表信息</h4><p>除了在你的资源响应中有条件地包含关联外，你还可以使用 <code>whenPivotLoaded</code> 方法有条件地从多对多关联的中间表中添加数据。<code>whenPivotLoaded</code> 方法接受的第一个参数为中间表的名称。第二个参数是一个闭包，它定义了在模型上如果中间表信息可用时要返回的值：</p><pre><code>/**
 * 将资源转换成数组。
 *
 * @return array&lt;string, mixed&gt;
 */
public function toArray(Request $request): array
{
    return [
        &#39;id&#39; =&gt; $this-&gt;id,
        &#39;name&#39; =&gt; $this-&gt;name,
        &#39;expires_at&#39; =&gt; $this-&gt;whenPivotLoaded(&#39;role_user&#39;, function () {
            return $this-&gt;pivot-&gt;expires_at;
        }),
    ];
}
</code></pre><p>如果你的关联使用的是 <a href="./eloquent-relationships#defining-custom-intermediate-table-models">自定义中间表</a>，你可以将中间表模型的实例作为 <code>whenPivotLoaded</code> 方法的第一个参数:</p><pre><code>&#39;expires_at&#39; =&gt; $this-&gt;whenPivotLoaded(new Membership, function () {
    return $this-&gt;pivot-&gt;expires_at;
}),
</code></pre><p>如果你的中间表使用的是 <code>pivot</code> 以外的访问器，你可以使用 <code>whenPivotLoadedAs</code> 方法：</p><pre><code>/**
 * 将资源转换成数组。
 *
 * @return array&lt;string, mixed&gt;
 */
public function toArray(Request $request): array
{
    return [
        &#39;id&#39; =&gt; $this-&gt;id,
        &#39;name&#39; =&gt; $this-&gt;name,
        &#39;expires_at&#39; =&gt; $this-&gt;whenPivotLoadedAs(&#39;subscription&#39;, &#39;role_user&#39;, function () {
            return $this-&gt;subscription-&gt;expires_at;
        }),
    ];
}
</code></pre><p><a name="adding-meta-data"></a></p><h3 id="添加元数据" tabindex="-1"><a class="header-anchor" href="#添加元数据" aria-hidden="true">#</a> 添加元数据</h3><p>一些 JSON API 标准需要你在资源和资源集合响应中添加元数据。这通常包括资源或相关资源的 <code>links</code> ，或一些关于资源本身的元数据。如果你需要返回有关资源的其他元数据，只需要将它们包含在 <code>toArray</code> 方法中即可。例如在转换资源集合时你可能需要添加 <code>link</code> 信息：</p><pre><code>/**
 * 将资源转换成数组。
 *
 * @return array&lt;string, mixed&gt;
 */
public function toArray(Request $request): array
{
    return [
        &#39;data&#39; =&gt; $this-&gt;collection,
        &#39;links&#39; =&gt; [
            &#39;self&#39; =&gt; &#39;link-value&#39;,
        ],
    ];
}
</code></pre><p>当添加额外的元数据到你的资源中时，你不必担心会覆盖 Laravel 在返回分页响应时自动添加的 <code>links</code> 或 <code>meta</code> 键。你添加的任何其他 <code>links</code> 会与分页响应添加的 <code>links</code> 相合并。</p><p><a name="top-level-meta-data"></a></p><h4 id="顶层元数据" tabindex="-1"><a class="header-anchor" href="#顶层元数据" aria-hidden="true">#</a> 顶层元数据</h4><p>有时候，你可能希望当资源被作为顶层资源返回时添加某些元数据到资源响应中。这通常包括整个响应的元信息。你可以在资源类中添加 <code>with</code> 方法来定义元数据。此方法应返回一个元数据数组，当资源被作为顶层资源渲染时，这个数组将会被包含在资源响应中：</p><pre><code>&lt;?php

namespace App\\Http\\Resources;

use Illuminate\\Http\\Resources\\Json\\ResourceCollection;

class UserCollection extends ResourceCollection
{
    /**
     * 将资源集合转换成数组。
     *
     * @return array&lt;string, mixed&gt;
     */
    public function toArray(Request $request): array
    {
        return parent::toArray($request);
    }

    /**
     * 返回应该和资源一起返回的其他数据数组。
     *
     * @return array&lt;string, mixed&gt;
     */
    public function with(Request $request): array
    {
        return [
            &#39;meta&#39; =&gt; [
                &#39;key&#39; =&gt; &#39;value&#39;,
            ],
        ];
    }
}
</code></pre><p><a name="adding-meta-data-when-constructing-resources"></a></p><h4 id="构造资源时添加元数据" tabindex="-1"><a class="header-anchor" href="#构造资源时添加元数据" aria-hidden="true">#</a> 构造资源时添加元数据</h4><p>你还可以在路由或者控制器中构造资源实例时添加顶层数据。所有资源都可以使用 <code>additional</code> 方法来接受应该被添加到资源响应中的数据数组：</p><pre><code>return (new UserCollection(User::all()-&gt;load(&#39;roles&#39;)))
                -&gt;additional([&#39;meta&#39; =&gt; [
                    &#39;key&#39; =&gt; &#39;value&#39;,
                ]]);
</code></pre><p><a name="resource-responses"></a></p><h2 id="响应资源" tabindex="-1"><a class="header-anchor" href="#响应资源" aria-hidden="true">#</a> 响应资源</h2><p>就像你知道的那样，资源可以直接在路由和控制器中被返回：</p><pre><code>use App\\Http\\Resources\\UserResource;
use App\\Models\\User;

Route::get(&#39;/user/{id}&#39;, function (string $id) {
    return new UserResource(User::findOrFail($id));
});
</code></pre><p>但有些时候，在发送给客户端前你可能需要自定义 HTTP 响应。你有两种办法。第一，你可以链式调用 <code>response</code> 方法。此方法将会返回 <code>Illuminate\\Http\\JsonResponse</code> 实例，允许你自定义响应头信息：</p><pre><code>use App\\Http\\Resources\\UserResource;
use App\\Models\\User;

Route::get(&#39;/user&#39;, function () {
    return (new UserResource(User::find(1)))
                -&gt;response()
                -&gt;header(&#39;X-Value&#39;, &#39;True&#39;);
});
</code></pre><p>另外，你还可以在资源中定义一个 <code>withResponse</code> 方法。此方法将会在资源被作为顶层资源在响应时被调用：</p><pre><code>&lt;?php

namespace App\\Http\\Resources;

use Illuminate\\Http\\JsonResponse;
use Illuminate\\Http\\Request;
use Illuminate\\Http\\Resources\\Json\\JsonResource;

class UserResource extends JsonResource
{
    /**
     * 将资源转换为数组。
     *
     * @return array&lt;string, mixed&gt;
     */
    public function toArray(Request $request): array
    {
        return [
            &#39;id&#39; =&gt; $this-&gt;id,
        ];
    }

    /**
     * 自定义响应信息。
     */
    public function withResponse(Request $request, JsonResponse $response): void
    {
        $response-&gt;header(&#39;X-Value&#39;, &#39;True&#39;);
    }
}
</code></pre>`,171),p=[o];function r(c,i){return e(),s("div",null,p)}const d=n(t,[["render",r],["__file","eloquent-resources.html.vue"]]);export{d as default};
