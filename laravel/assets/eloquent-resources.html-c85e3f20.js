import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as n,c as s,a as t}from"./app-06635a3b.js";const a={},o=t(`<h1 id="eloquent-api-resources" tabindex="-1"><a class="header-anchor" href="#eloquent-api-resources" aria-hidden="true">#</a> Eloquent: API Resources</h1><ul><li><a href="#introduction">Introduction</a></li><li><a href="#generating-resources">Generating Resources</a></li><li><a href="#concept-overview">Concept Overview</a><ul><li><a href="#resource-collections">Resource Collections</a></li></ul></li><li><a href="#writing-resources">Writing Resources</a><ul><li><a href="#data-wrapping">Data Wrapping</a></li><li><a href="#pagination">Pagination</a></li><li><a href="#conditional-attributes">Conditional Attributes</a></li><li><a href="#conditional-relationships">Conditional Relationships</a></li><li><a href="#adding-meta-data">Adding Meta Data</a></li></ul></li><li><a href="#resource-responses">Resource Responses</a></li></ul><p><a name="introduction"></a></p><h2 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h2><p>When building an API, you may need a transformation layer that sits between your Eloquent models and the JSON responses that are actually returned to your application&#39;s users. For example, you may wish to display certain attributes for a subset of users and not others, or you may wish to always include certain relationships in the JSON representation of your models. Eloquent&#39;s resource classes allow you to expressively and easily transform your models and model collections into JSON.</p><p>Of course, you may always convert Eloquent models or collections to JSON using their <code>toJson</code> methods; however, Eloquent resources provide more granular and robust control over the JSON serialization of your models and their relationships.</p><p><a name="generating-resources"></a></p><h2 id="generating-resources" tabindex="-1"><a class="header-anchor" href="#generating-resources" aria-hidden="true">#</a> Generating Resources</h2><p>To generate a resource class, you may use the <code>make:resource</code> Artisan command. By default, resources will be placed in the <code>app/Http/Resources</code> directory of your application. Resources extend the <code>Illuminate\\Http\\Resources\\Json\\JsonResource</code> class:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan make:resource UserResource
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a name="generating-resource-collections"></a></p><h4 id="resource-collections" tabindex="-1"><a class="header-anchor" href="#resource-collections" aria-hidden="true">#</a> Resource Collections</h4><p>In addition to generating resources that transform individual models, you may generate resources that are responsible for transforming collections of models. This allows your JSON responses to include links and other meta information that is relevant to an entire collection of a given resource.</p><p>To create a resource collection, you should use the <code>--collection</code> flag when creating the resource. Or, including the word <code>Collection</code> in the resource name will indicate to Laravel that it should create a collection resource. Collection resources extend the <code>Illuminate\\Http\\Resources\\Json\\ResourceCollection</code> class:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan make:resource User <span class="token parameter variable">--collection</span>

php artisan make:resource UserCollection
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="concept-overview"></a></p><h2 id="concept-overview" tabindex="-1"><a class="header-anchor" href="#concept-overview" aria-hidden="true">#</a> Concept Overview</h2><blockquote><p><strong>Note</strong><br> This is a high-level overview of resources and resource collections. You are highly encouraged to read the other sections of this documentation to gain a deeper understanding of the customization and power offered to you by resources.</p></blockquote><p>Before diving into all of the options available to you when writing resources, let&#39;s first take a high-level look at how resources are used within Laravel. A resource class represents a single model that needs to be transformed into a JSON structure. For example, here is a simple <code>UserResource</code> resource class:</p><pre><code>&lt;?php

namespace App\\Http\\Resources;

use Illuminate\\Http\\Request;
use Illuminate\\Http\\Resources\\Json\\JsonResource;

class UserResource extends JsonResource
{
    /**
     * Transform the resource into an array.
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
</code></pre><p>Every resource class defines a <code>toArray</code> method which returns the array of attributes that should be converted to JSON when the resource is returned as a response from a route or controller method.</p><p>Note that we can access model properties directly from the <code>$this</code> variable. This is because a resource class will automatically proxy property and method access down to the underlying model for convenient access. Once the resource is defined, it may be returned from a route or controller. The resource accepts the underlying model instance via its constructor:</p><pre><code>use App\\Http\\Resources\\UserResource;
use App\\Models\\User;

Route::get(&#39;/user/{id}&#39;, function (string $id) {
    return new UserResource(User::findOrFail($id));
});
</code></pre><p><a name="resource-collections"></a></p><h3 id="resource-collections-1" tabindex="-1"><a class="header-anchor" href="#resource-collections-1" aria-hidden="true">#</a> Resource Collections</h3><p>If you are returning a collection of resources or a paginated response, you should use the <code>collection</code> method provided by your resource class when creating the resource instance in your route or controller:</p><pre><code>use App\\Http\\Resources\\UserResource;
use App\\Models\\User;

Route::get(&#39;/users&#39;, function () {
    return UserResource::collection(User::all());
});
</code></pre><p>Note that this does not allow any addition of custom meta data that may need to be returned with your collection. If you would like to customize the resource collection response, you may create a dedicated resource to represent the collection:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan make:resource UserCollection
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Once the resource collection class has been generated, you may easily define any meta data that should be included with the response:</p><pre><code>&lt;?php

namespace App\\Http\\Resources;

use Illuminate\\Http\\Request;
use Illuminate\\Http\\Resources\\Json\\ResourceCollection;

class UserCollection extends ResourceCollection
{
    /**
     * Transform the resource collection into an array.
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
</code></pre><p>After defining your resource collection, it may be returned from a route or controller:</p><pre><code>use App\\Http\\Resources\\UserCollection;
use App\\Models\\User;

Route::get(&#39;/users&#39;, function () {
    return new UserCollection(User::all());
});
</code></pre><p><a name="preserving-collection-keys"></a></p><h4 id="preserving-collection-keys" tabindex="-1"><a class="header-anchor" href="#preserving-collection-keys" aria-hidden="true">#</a> Preserving Collection Keys</h4><p>When returning a resource collection from a route, Laravel resets the collection&#39;s keys so that they are in numerical order. However, you may add a <code>preserveKeys</code> property to your resource class indicating whether a collection&#39;s original keys should be preserved:</p><pre><code>&lt;?php

namespace App\\Http\\Resources;

use Illuminate\\Http\\Resources\\Json\\JsonResource;

class UserResource extends JsonResource
{
    /**
     * Indicates if the resource&#39;s collection keys should be preserved.
     *
     * @var bool
     */
    public $preserveKeys = true;
}
</code></pre><p>When the <code>preserveKeys</code> property is set to <code>true</code>, collection keys will be preserved when the collection is returned from a route or controller:</p><pre><code>use App\\Http\\Resources\\UserResource;
use App\\Models\\User;

Route::get(&#39;/users&#39;, function () {
    return UserResource::collection(User::all()-&gt;keyBy-&gt;id);
});
</code></pre><p><a name="customizing-the-underlying-resource-class"></a></p><h4 id="customizing-the-underlying-resource-class" tabindex="-1"><a class="header-anchor" href="#customizing-the-underlying-resource-class" aria-hidden="true">#</a> Customizing The Underlying Resource Class</h4><p>Typically, the <code>$this-&gt;collection</code> property of a resource collection is automatically populated with the result of mapping each item of the collection to its singular resource class. The singular resource class is assumed to be the collection&#39;s class name without the trailing <code>Collection</code> portion of the class name. In addition, depending on your personal preference, the singular resource class may or may not be suffixed with <code>Resource</code>.</p><p>For example, <code>UserCollection</code> will attempt to map the given user instances into the <code>UserResource</code> resource. To customize this behavior, you may override the <code>$collects</code> property of your resource collection:</p><pre><code>&lt;?php

namespace App\\Http\\Resources;

use Illuminate\\Http\\Resources\\Json\\ResourceCollection;

class UserCollection extends ResourceCollection
{
    /**
     * The resource that this resource collects.
     *
     * @var string
     */
    public $collects = Member::class;
}
</code></pre><p><a name="writing-resources"></a></p><h2 id="writing-resources" tabindex="-1"><a class="header-anchor" href="#writing-resources" aria-hidden="true">#</a> Writing Resources</h2><blockquote><p><strong>Note</strong><br> If you have not read the <a href="#concept-overview">concept overview</a>, you are highly encouraged to do so before proceeding with this documentation.</p></blockquote><p>Resources only need to transform a given model into an array. So, each resource contains a <code>toArray</code> method which translates your model&#39;s attributes into an API friendly array that can be returned from your application&#39;s routes or controllers:</p><pre><code>&lt;?php

namespace App\\Http\\Resources;

use Illuminate\\Http\\Request;
use Illuminate\\Http\\Resources\\Json\\JsonResource;

class UserResource extends JsonResource
{
    /**
     * Transform the resource into an array.
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
</code></pre><p>Once a resource has been defined, it may be returned directly from a route or controller:</p><pre><code>use App\\Http\\Resources\\UserResource;
use App\\Models\\User;

Route::get(&#39;/user/{id}&#39;, function (string $id) {
    return new UserResource(User::findOrFail($id));
});
</code></pre><p><a name="relationships"></a></p><h4 id="relationships" tabindex="-1"><a class="header-anchor" href="#relationships" aria-hidden="true">#</a> Relationships</h4><p>If you would like to include related resources in your response, you may add them to the array returned by your resource&#39;s <code>toArray</code> method. In this example, we will use the <code>PostResource</code> resource&#39;s <code>collection</code> method to add the user&#39;s blog posts to the resource response:</p><pre><code>use App\\Http\\Resources\\PostResource;
use Illuminate\\Http\\Request;

/**
 * Transform the resource into an array.
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
</code></pre><blockquote><p><strong>Note</strong><br> If you would like to include relationships only when they have already been loaded, check out the documentation on <a href="#conditional-relationships">conditional relationships</a>.</p></blockquote><p><a name="writing-resource-collections"></a></p><h4 id="resource-collections-2" tabindex="-1"><a class="header-anchor" href="#resource-collections-2" aria-hidden="true">#</a> Resource Collections</h4><p>While resources transform a single model into an array, resource collections transform a collection of models into an array. However, it is not absolutely necessary to define a resource collection class for each one of your models since all resources provide a <code>collection</code> method to generate an &quot;ad-hoc&quot; resource collection on the fly:</p><pre><code>use App\\Http\\Resources\\UserResource;
use App\\Models\\User;

Route::get(&#39;/users&#39;, function () {
    return UserResource::collection(User::all());
});
</code></pre><p>However, if you need to customize the meta data returned with the collection, it is necessary to define your own resource collection:</p><pre><code>&lt;?php

namespace App\\Http\\Resources;

use Illuminate\\Http\\Request;
use Illuminate\\Http\\Resources\\Json\\ResourceCollection;

class UserCollection extends ResourceCollection
{
    /**
     * Transform the resource collection into an array.
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
</code></pre><p>Like singular resources, resource collections may be returned directly from routes or controllers:</p><pre><code>use App\\Http\\Resources\\UserCollection;
use App\\Models\\User;

Route::get(&#39;/users&#39;, function () {
    return new UserCollection(User::all());
});
</code></pre><p><a name="data-wrapping"></a></p><h3 id="data-wrapping" tabindex="-1"><a class="header-anchor" href="#data-wrapping" aria-hidden="true">#</a> Data Wrapping</h3><p>By default, your outermost resource is wrapped in a <code>data</code> key when the resource response is converted to JSON. So, for example, a typical resource collection response looks like the following:</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>If you would like to use a custom key instead of <code>data</code>, you may define a <code>$wrap</code> attribute on the resource class:</p><pre><code>&lt;?php

namespace App\\Http\\Resources;

use Illuminate\\Http\\Resources\\Json\\JsonResource;

class UserResource extends JsonResource
{
    /**
     * The &quot;data&quot; wrapper that should be applied.
     *
     * @var string|null
     */
    public static $wrap = &#39;user&#39;;
}
</code></pre><p>If you would like to disable the wrapping of the outermost resource, you should invoke the <code>withoutWrapping</code> method on the base <code>Illuminate\\Http\\Resources\\Json\\JsonResource</code> class. Typically, you should call this method from your <code>AppServiceProvider</code> or another <a href="./providers">service provider</a> that is loaded on every request to your application:</p><pre><code>&lt;?php

namespace App\\Providers;

use Illuminate\\Http\\Resources\\Json\\JsonResource;
use Illuminate\\Support\\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        // ...
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        JsonResource::withoutWrapping();
    }
}
</code></pre><blockquote><p><strong>Warning</strong><br> The <code>withoutWrapping</code> method only affects the outermost response and will not remove <code>data</code> keys that you manually add to your own resource collections.</p></blockquote><p><a name="wrapping-nested-resources"></a></p><h4 id="wrapping-nested-resources" tabindex="-1"><a class="header-anchor" href="#wrapping-nested-resources" aria-hidden="true">#</a> Wrapping Nested Resources</h4><p>You have total freedom to determine how your resource&#39;s relationships are wrapped. If you would like all resource collections to be wrapped in a <code>data</code> key, regardless of their nesting, you should define a resource collection class for each resource and return the collection within a <code>data</code> key.</p><p>You may be wondering if this will cause your outermost resource to be wrapped in two <code>data</code> keys. Don&#39;t worry, Laravel will never let your resources be accidentally double-wrapped, so you don&#39;t have to be concerned about the nesting level of the resource collection you are transforming:</p><pre><code>&lt;?php

namespace App\\Http\\Resources;

use Illuminate\\Http\\Resources\\Json\\ResourceCollection;

class CommentsCollection extends ResourceCollection
{
    /**
     * Transform the resource collection into an array.
     *
     * @return array&lt;string, mixed&gt;
     */
    public function toArray(Request $request): array
    {
        return [&#39;data&#39; =&gt; $this-&gt;collection];
    }
}
</code></pre><p><a name="data-wrapping-and-pagination"></a></p><h4 id="data-wrapping-and-pagination" tabindex="-1"><a class="header-anchor" href="#data-wrapping-and-pagination" aria-hidden="true">#</a> Data Wrapping And Pagination</h4><p>When returning paginated collections via a resource response, Laravel will wrap your resource data in a <code>data</code> key even if the <code>withoutWrapping</code> method has been called. This is because paginated responses always contain <code>meta</code> and <code>links</code> keys with information about the paginator&#39;s state:</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
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
        <span class="token property">&quot;first&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://example.com/users?page=1&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;last&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://example.com/users?page=1&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;prev&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
        <span class="token property">&quot;next&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;meta&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token property">&quot;current_page&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token property">&quot;from&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token property">&quot;last_page&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://example.com/users&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;per_page&quot;</span><span class="token operator">:</span> <span class="token number">15</span><span class="token punctuation">,</span>
        <span class="token property">&quot;to&quot;</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
        <span class="token property">&quot;total&quot;</span><span class="token operator">:</span> <span class="token number">10</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="pagination"></a></p><h3 id="pagination" tabindex="-1"><a class="header-anchor" href="#pagination" aria-hidden="true">#</a> Pagination</h3><p>You may pass a Laravel paginator instance to the <code>collection</code> method of a resource or to a custom resource collection:</p><pre><code>use App\\Http\\Resources\\UserCollection;
use App\\Models\\User;

Route::get(&#39;/users&#39;, function () {
    return new UserCollection(User::paginate());
});
</code></pre><p>Paginated responses always contain <code>meta</code> and <code>links</code> keys with information about the paginator&#39;s state:</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
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
        <span class="token property">&quot;first&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://example.com/users?page=1&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;last&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://example.com/users?page=1&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;prev&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
        <span class="token property">&quot;next&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;meta&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token property">&quot;current_page&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token property">&quot;from&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token property">&quot;last_page&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://example.com/users&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;per_page&quot;</span><span class="token operator">:</span> <span class="token number">15</span><span class="token punctuation">,</span>
        <span class="token property">&quot;to&quot;</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
        <span class="token property">&quot;total&quot;</span><span class="token operator">:</span> <span class="token number">10</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="customizing-the-pagination-information"></a></p><h4 id="customizing-the-pagination-information" tabindex="-1"><a class="header-anchor" href="#customizing-the-pagination-information" aria-hidden="true">#</a> Customizing The Pagination Information</h4><p>If you would like to customize the information included in the <code>links</code> or <code>meta</code> keys of the pagination response, you may define a <code>paginationInformation</code> method on the resource. This method will receive the <code>$paginated</code> data and the array of <code>$default</code> information, which is an array containing the <code>links</code> and <code>meta</code> keys:</p><pre><code>/**
 * Customize the pagination information for the resource.
 *
 * @param  \\Illuminate\\Http\\Request  $request
 * @param  array $paginated
 * @param  array $default
 * @return array
 */
public function paginationInformation($request, $paginated, $default)
{
    $default[&#39;links&#39;][&#39;custom&#39;] = &#39;https://example.com&#39;;

    return $default;
}
</code></pre><p><a name="conditional-attributes"></a></p><h3 id="conditional-attributes" tabindex="-1"><a class="header-anchor" href="#conditional-attributes" aria-hidden="true">#</a> Conditional Attributes</h3><p>Sometimes you may wish to only include an attribute in a resource response if a given condition is met. For example, you may wish to only include a value if the current user is an &quot;administrator&quot;. Laravel provides a variety of helper methods to assist you in this situation. The <code>when</code> method may be used to conditionally add an attribute to a resource response:</p><pre><code>/**
 * Transform the resource into an array.
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
</code></pre><p>In this example, the <code>secret</code> key will only be returned in the final resource response if the authenticated user&#39;s <code>isAdmin</code> method returns <code>true</code>. If the method returns <code>false</code>, the <code>secret</code> key will be removed from the resource response before it is sent to the client. The <code>when</code> method allows you to expressively define your resources without resorting to conditional statements when building the array.</p><p>The <code>when</code> method also accepts a closure as its second argument, allowing you to calculate the resulting value only if the given condition is <code>true</code>:</p><pre><code>&#39;secret&#39; =&gt; $this-&gt;when($request-&gt;user()-&gt;isAdmin(), function () {
    return &#39;secret-value&#39;;
}),
</code></pre><p>The <code>whenHas</code> method may be used to include an attribute if it is actually present on the underlying model:</p><pre><code>&#39;name&#39; =&gt; $this-&gt;whenHas(&#39;name&#39;),
</code></pre><p>Additionally, the <code>whenNotNull</code> method may be used to include an attribute in the resource response if the attribute is not null:</p><pre><code>&#39;name&#39; =&gt; $this-&gt;whenNotNull($this-&gt;name),
</code></pre><p><a name="merging-conditional-attributes"></a></p><h4 id="merging-conditional-attributes" tabindex="-1"><a class="header-anchor" href="#merging-conditional-attributes" aria-hidden="true">#</a> Merging Conditional Attributes</h4><p>Sometimes you may have several attributes that should only be included in the resource response based on the same condition. In this case, you may use the <code>mergeWhen</code> method to include the attributes in the response only when the given condition is <code>true</code>:</p><pre><code>/**
 * Transform the resource into an array.
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
</code></pre><p>Again, if the given condition is <code>false</code>, these attributes will be removed from the resource response before it is sent to the client.</p><blockquote><p><strong>Warning</strong><br> The <code>mergeWhen</code> method should not be used within arrays that mix string and numeric keys. Furthermore, it should not be used within arrays with numeric keys that are not ordered sequentially.</p></blockquote><p><a name="conditional-relationships"></a></p><h3 id="conditional-relationships" tabindex="-1"><a class="header-anchor" href="#conditional-relationships" aria-hidden="true">#</a> Conditional Relationships</h3><p>In addition to conditionally loading attributes, you may conditionally include relationships on your resource responses based on if the relationship has already been loaded on the model. This allows your controller to decide which relationships should be loaded on the model and your resource can easily include them only when they have actually been loaded. Ultimately, this makes it easier to avoid &quot;N+1&quot; query problems within your resources.</p><p>The <code>whenLoaded</code> method may be used to conditionally load a relationship. In order to avoid unnecessarily loading relationships, this method accepts the name of the relationship instead of the relationship itself:</p><pre><code>use App\\Http\\Resources\\PostResource;

/**
 * Transform the resource into an array.
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
</code></pre><p>In this example, if the relationship has not been loaded, the <code>posts</code> key will be removed from the resource response before it is sent to the client.</p><p><a name="conditional-relationship-counts"></a></p><h4 id="conditional-relationship-counts" tabindex="-1"><a class="header-anchor" href="#conditional-relationship-counts" aria-hidden="true">#</a> Conditional Relationship Counts</h4><p>In addition to conditionally including relationships, you may conditionally include relationship &quot;counts&quot; on your resource responses based on if the relationship&#39;s count has been loaded on the model:</p><pre><code>new UserResource($user-&gt;loadCount(&#39;posts&#39;));
</code></pre><p>The <code>whenCounted</code> method may be used to conditionally include a relationship&#39;s count in your resource response. This method avoids unnecessarily including the attribute if the relationships&#39; count is not present:</p><pre><code>/**
 * Transform the resource into an array.
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
</code></pre><p>In this example, if the <code>posts</code> relationship&#39;s count has not been loaded, the <code>posts_count</code> key will be removed from the resource response before it is sent to the client.</p><p>Other types of aggregates, such as <code>avg</code>, <code>sum</code>, <code>min</code>, and <code>max</code> may also be conditionally loaded using the <code>whenAggregated</code> method:</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token string single-quoted-string">&#39;words_avg&#39;</span> <span class="token operator">=&gt;</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">whenAggregated</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;posts&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;words&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;avg&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token string single-quoted-string">&#39;words_sum&#39;</span> <span class="token operator">=&gt;</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">whenAggregated</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;posts&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;words&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;sum&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token string single-quoted-string">&#39;words_min&#39;</span> <span class="token operator">=&gt;</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">whenAggregated</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;posts&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;words&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;min&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token string single-quoted-string">&#39;words_max&#39;</span> <span class="token operator">=&gt;</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">whenAggregated</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;posts&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;words&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;max&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="conditional-pivot-information"></a></p><h4 id="conditional-pivot-information" tabindex="-1"><a class="header-anchor" href="#conditional-pivot-information" aria-hidden="true">#</a> Conditional Pivot Information</h4><p>In addition to conditionally including relationship information in your resource responses, you may conditionally include data from the intermediate tables of many-to-many relationships using the <code>whenPivotLoaded</code> method. The <code>whenPivotLoaded</code> method accepts the name of the pivot table as its first argument. The second argument should be a closure that returns the value to be returned if the pivot information is available on the model:</p><pre><code>/**
 * Transform the resource into an array.
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
</code></pre><p>If your relationship is using a <a href="./eloquent-relationships#defining-custom-intermediate-table-models">custom intermediate table model</a>, you may pass an instance of the intermediate table model as the first argument to the <code>whenPivotLoaded</code> method:</p><pre><code>&#39;expires_at&#39; =&gt; $this-&gt;whenPivotLoaded(new Membership, function () {
    return $this-&gt;pivot-&gt;expires_at;
}),
</code></pre><p>If your intermediate table is using an accessor other than <code>pivot</code>, you may use the <code>whenPivotLoadedAs</code> method:</p><pre><code>/**
 * Transform the resource into an array.
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
</code></pre><p><a name="adding-meta-data"></a></p><h3 id="adding-meta-data" tabindex="-1"><a class="header-anchor" href="#adding-meta-data" aria-hidden="true">#</a> Adding Meta Data</h3><p>Some JSON API standards require the addition of meta data to your resource and resource collections responses. This often includes things like <code>links</code> to the resource or related resources, or meta data about the resource itself. If you need to return additional meta data about a resource, include it in your <code>toArray</code> method. For example, you might include <code>link</code> information when transforming a resource collection:</p><pre><code>/**
 * Transform the resource into an array.
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
</code></pre><p>When returning additional meta data from your resources, you never have to worry about accidentally overriding the <code>links</code> or <code>meta</code> keys that are automatically added by Laravel when returning paginated responses. Any additional <code>links</code> you define will be merged with the links provided by the paginator.</p><p><a name="top-level-meta-data"></a></p><h4 id="top-level-meta-data" tabindex="-1"><a class="header-anchor" href="#top-level-meta-data" aria-hidden="true">#</a> Top Level Meta Data</h4><p>Sometimes you may wish to only include certain meta data with a resource response if the resource is the outermost resource being returned. Typically, this includes meta information about the response as a whole. To define this meta data, add a <code>with</code> method to your resource class. This method should return an array of meta data to be included with the resource response only when the resource is the outermost resource being transformed:</p><pre><code>&lt;?php

namespace App\\Http\\Resources;

use Illuminate\\Http\\Resources\\Json\\ResourceCollection;

class UserCollection extends ResourceCollection
{
    /**
     * Transform the resource collection into an array.
     *
     * @return array&lt;string, mixed&gt;
     */
    public function toArray(Request $request): array
    {
        return parent::toArray($request);
    }

    /**
     * Get additional data that should be returned with the resource array.
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
</code></pre><p><a name="adding-meta-data-when-constructing-resources"></a></p><h4 id="adding-meta-data-when-constructing-resources" tabindex="-1"><a class="header-anchor" href="#adding-meta-data-when-constructing-resources" aria-hidden="true">#</a> Adding Meta Data When Constructing Resources</h4><p>You may also add top-level data when constructing resource instances in your route or controller. The <code>additional</code> method, which is available on all resources, accepts an array of data that should be added to the resource response:</p><pre><code>return (new UserCollection(User::all()-&gt;load(&#39;roles&#39;)))
                -&gt;additional([&#39;meta&#39; =&gt; [
                    &#39;key&#39; =&gt; &#39;value&#39;,
                ]]);
</code></pre><p><a name="resource-responses"></a></p><h2 id="resource-responses" tabindex="-1"><a class="header-anchor" href="#resource-responses" aria-hidden="true">#</a> Resource Responses</h2><p>As you have already read, resources may be returned directly from routes and controllers:</p><pre><code>use App\\Http\\Resources\\UserResource;
use App\\Models\\User;

Route::get(&#39;/user/{id}&#39;, function (string $id) {
    return new UserResource(User::findOrFail($id));
});
</code></pre><p>However, sometimes you may need to customize the outgoing HTTP response before it is sent to the client. There are two ways to accomplish this. First, you may chain the <code>response</code> method onto the resource. This method will return an <code>Illuminate\\Http\\JsonResponse</code> instance, giving you full control over the response&#39;s headers:</p><pre><code>use App\\Http\\Resources\\UserResource;
use App\\Models\\User;

Route::get(&#39;/user&#39;, function () {
    return (new UserResource(User::find(1)))
                -&gt;response()
                -&gt;header(&#39;X-Value&#39;, &#39;True&#39;);
});
</code></pre><p>Alternatively, you may define a <code>withResponse</code> method within the resource itself. This method will be called when the resource is returned as the outermost resource in a response:</p><pre><code>&lt;?php

namespace App\\Http\\Resources;

use Illuminate\\Http\\JsonResponse;
use Illuminate\\Http\\Request;
use Illuminate\\Http\\Resources\\Json\\JsonResource;

class UserResource extends JsonResource
{
    /**
     * Transform the resource into an array.
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
     * Customize the outgoing response for the resource.
     */
    public function withResponse(Request $request, JsonResponse $response): void
    {
        $response-&gt;header(&#39;X-Value&#39;, &#39;True&#39;);
    }
}
</code></pre>`,153),r=[o];function i(c,p){return n(),s("div",null,r)}const d=e(a,[["render",i],["__file","eloquent-resources.html.vue"]]);export{d as default};
