import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as t,c as o,a as n}from"./app-8cdff07c.js";const a={},s=n(`<h1 id="控制器" tabindex="-1"><a class="header-anchor" href="#控制器" aria-hidden="true">#</a> 控制器</h1><ul><li><a href="#introduction">介绍</a></li><li><a href="#writing-controllers">编写控制器</a><ul><li><a href="#basic-controllers">基本控制器</a></li><li><a href="#single-action-controllers">单动作控制器</a></li></ul></li><li><a href="#controller-middleware">控制器中间件</a></li><li><a href="#resource-controllers">资源控制器</a><ul><li><a href="#restful-partial-resource-routes">部分资源路由</a></li><li><a href="#restful-nested-resources">嵌套资源</a></li><li><a href="#restful-naming-resource-routes">命名资源路由</a></li><li><a href="#restful-naming-resource-route-parameters">命名资源路由参数</a></li><li><a href="#restful-scoping-resource-routes">范围资源路由</a></li><li><a href="#restful-localizing-resource-uris">本地化资源 URI</a></li><li><a href="#restful-supplementing-resource-controllers">补充资源控制器</a></li><li><a href="#singleton-resource-controllers">单例资源控制器</a></li></ul></li><li><a href="#dependency-injection-and-controllers">依赖注入和控制器</a></li></ul><p><a name="introduction"></a></p><h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h2><p>你可能希望使用「controller」类来组织此行为，而不是将所有请求处理逻辑定义为路由文件中的闭包。控制器可以将相关的请求处理逻辑分组到一个类中。 例如，一个 <code>UserController</code> 类可能会处理所有与用户相关的传入请求，包括显示、创建、更新和删除用户。 默认情况下，控制器存储在 <code>app/Http/Controllers</code> 目录中。</p><p><a name="writing-controllers"></a></p><h2 id="编写控制器" tabindex="-1"><a class="header-anchor" href="#编写控制器" aria-hidden="true">#</a> 编写控制器</h2><p><a name="basic-controllers"></a></p><h3 id="基本控制器" tabindex="-1"><a class="header-anchor" href="#基本控制器" aria-hidden="true">#</a> 基本控制器</h3><p>如果要快速生成新控制器，可以使用 <code>make:controller</code> Artisan 命令。默认情况下，应用程序的所有控制器都存储在<code>app/Http/Controllers</code> 目录中：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan make:controller UserController
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>让我们来看一个基本控制器的示例。控制器可以有任意数量的公共方法来响应传入的HTTP请求：</p><pre><code>&lt;?php

namespace App\\Http\\Controllers;

use App\\Models\\User;
use Illuminate\\View\\View;

class UserController extends Controller
{
    /**
     * 显示给定用户的配置文件。
     */
    public function show(string $id): View
    {
        return view(&#39;user.profile&#39;, [
            &#39;user&#39; =&gt; User::findOrFail($id)
        ]);
    }
}
</code></pre><p>编写控制器类和方法后，可以定义到控制器方法的路由，如下所示：</p><pre><code>use App\\Http\\Controllers\\UserController;

Route::get(&#39;/user/{id}&#39;, [UserController::class, &#39;show&#39;]);
</code></pre><p>当传入的请求与指定的路由 URI 匹配时，将调用 <code>App\\Http\\Controllers\\UserController</code> 类的 <code>show</code> 方法，并将路由参数传递给该方法。</p><blockquote><p>技巧：控制器并不是 <strong>必需</strong> 继承基础类。如果控制器没有继承基础类，你将无法使用一些便捷的功能，比如 <code>middleware</code> 和 <code>authorize</code> 方法。</p></blockquote><p><a name="single-action-controllers"></a></p><h3 id="单动作控制器" tabindex="-1"><a class="header-anchor" href="#单动作控制器" aria-hidden="true">#</a> 单动作控制器</h3><p>如果控制器动作特别复杂，你可能会发现将整个控制器类专用于该单个动作很方便。为此，您可以在控制器中定义一个 <code>__invoke</code> 方法：</p><pre><code>&lt;?php

namespace App\\Http\\Controllers;

use App\\Models\\User;
use Illuminate\\Http\\Response;

class ProvisionServer extends Controller
{
    /**
     * 设置新的web服务器。
     */
    public function __invoke()
    {
        // ...
    }
}
</code></pre><p>为单动作控制器注册路由时，不需要指定控制器方法。相反，你可以简单地将控制器的名称传递给路由器：</p><pre><code>use App\\Http\\Controllers\\ProvisionServer;

Route::post(&#39;/server&#39;, ProvisionServer::class);
</code></pre><p>你可以使用 <code>make:controller</code> Artisan 命令的 <code>--invokable</code> 选项生成可调用控制器：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan make:controller ProvisionServer <span class="token parameter variable">--invokable</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>技巧：可以使用 <a href="./artisan#stub-customization">stub 定制</a> 自定义控制器模板。</p></blockquote><p><a name="controller-middleware"></a></p><h2 id="控制器中间件" tabindex="-1"><a class="header-anchor" href="#控制器中间件" aria-hidden="true">#</a> 控制器中间件</h2><p><a href="./middleware">中间件</a> 可以在你的路由文件中分配给控制器的路由：</p><pre><code>Route::get(&#39;profile&#39;, [UserController::class, &#39;show&#39;])-&gt;middleware(&#39;auth&#39;);
</code></pre><p>或者，你可能会发现在控制器的构造函数中指定中间件很方便。使用控制器构造函数中的 <code>middleware</code> 方法，你可以将中间件分配给控制器的操作：</p><pre><code>class UserController extends Controller
{
    /**
     * Instantiate a new controller instance.
     */
    public function __construct()
    {
        $this-&gt;middleware(&#39;auth&#39;);
        $this-&gt;middleware(&#39;log&#39;)-&gt;only(&#39;index&#39;);
        $this-&gt;middleware(&#39;subscribed&#39;)-&gt;except(&#39;store&#39;);
    }
}
</code></pre><p>控制器还允许你使用闭包注册中间件。这提供了一种方便的方法来为单个控制器定义内联中间件，而无需定义整个中间件类：</p><pre><code>use Closure;
use Illuminate\\Http\\Request;

$this-&gt;middleware(function (Request $request, Closure $next) {
    return $next($request);
});
</code></pre><p><a name="resource-controllers"></a></p><h2 id="资源型控制器" tabindex="-1"><a class="header-anchor" href="#资源型控制器" aria-hidden="true">#</a> 资源型控制器</h2><p>如果你将应用程序中的每个 Eloquent 模型都视为资源，那么通常对应用程序中的每个资源都执行相同的操作。例如，假设你的应用程序中包含一个 <code>Photo</code> 模型和一个 <code>Movie</code> 模型。用户可能可以创建，读取，更新或者删除这些资源。</p><p>Laravel 的资源路由通过单行代码即可将典型的增删改查（“CURD”）路由分配给控制器。首先，我们可以使用 Artisan 命令 <code>make:controller</code> 的 <code>--resource</code> 选项来快速创建一个控制器:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan make:controller PhotoController <span class="token parameter variable">--resource</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这个命令将会生成一个控制器 <code>app/Http/Controllers/PhotoController.php</code>。其中包括每个可用资源操作的方法。接下来，你可以给控制器注册一个资源路由：</p><pre><code>use App\\Http\\Controllers\\PhotoController;

Route::resource(&#39;photos&#39;, PhotoController::class);
</code></pre><p>这个单一的路由声明创建了多个路由来处理资源上的各种行为。生成的控制器为每个行为保留了方法，而且你可以通过运行 Artisan 命令 <code>route:list</code> 来快速了解你的应用程序。</p><p>你可以通过将数组传参到 <code>resources</code> 方法中的方式来一次性的创建多个资源控制器：</p><pre><code>Route::resources([
    &#39;photos&#39; =&gt; PhotoController::class,
    &#39;posts&#39; =&gt; PostController::class,
]);
</code></pre><p><a name="actions-handled-by-resource-controller"></a></p><h4 id="资源控制器操作处理" tabindex="-1"><a class="header-anchor" href="#资源控制器操作处理" aria-hidden="true">#</a> 资源控制器操作处理</h4><table><thead><tr><th>请求方式</th><th>请求URI</th><th>行为</th><th>路由名称</th></tr></thead><tbody><tr><td>GET</td><td><code>/photos</code></td><td>index</td><td>photos.index</td></tr><tr><td>GET</td><td><code>/photos/create</code></td><td>create</td><td>photos.create</td></tr><tr><td>POST</td><td><code>/photos</code></td><td>store</td><td>photos.store</td></tr><tr><td>GET</td><td><code>/photos/{photo}</code></td><td>show</td><td>photos.show</td></tr><tr><td>GET</td><td><code>/photos/{photo}/edit</code></td><td>edit</td><td>photos.edit</td></tr><tr><td>PUT/PATCH</td><td><code>/photos/{photo}</code></td><td>update</td><td>photos.update</td></tr><tr><td>DELETE</td><td><code>/photos/{photo}</code></td><td>destroy</td><td>photos.destroy</td></tr></tbody></table><p><a name="customizing-missing-model-behavior"></a></p><h4 id="自定义缺失模型行为" tabindex="-1"><a class="header-anchor" href="#自定义缺失模型行为" aria-hidden="true">#</a> 自定义缺失模型行为</h4><p>通常，如果未找到隐式绑定的资源模型，则会生成状态码为 404 的 HTTP 响应。 但是，你可以通过在定义资源路由时调用 <code>missing</code> 的方法来自定义该行为。<code>missing</code> 方法接受一个闭包，如果对于任何资源的路由都找不到隐式绑定模型，则将调用该闭包：</p><pre><code>use App\\Http\\Controllers\\PhotoController;
use Illuminate\\Http\\Request;
use Illuminate\\Support\\Facades\\Redirect;

Route::resource(&#39;photos&#39;, PhotoController::class)
        -&gt;missing(function (Request $request) {
            return Redirect::route(&#39;photos.index&#39;);
        });
</code></pre><p><a name="soft-deleted-models"></a></p><h4 id="软删除模型" tabindex="-1"><a class="header-anchor" href="#软删除模型" aria-hidden="true">#</a> 软删除模型</h4><p>通常情况下，隐式模型绑定将不会检索已经进行了 <a href="./eloquent#soft-deleting">软删除</a> 的模型，并且会返回一个 404 HTTP 响应。但是，你可以在定义资源路由时调用 <code>withTrashed</code> 方法来告诉框架允许软删除的模型：</p><pre><code>use App\\Http\\Controllers\\PhotoController;

Route::resource(&#39;photos&#39;, PhotoController::class)-&gt;withTrashed();
</code></pre><p>当不传递参数调用 <code>withTrashed</code> 时，将在 <code>show</code>、<code>edit</code> 和 <code>update</code> 资源路由中允许软删除的模型。你可以通过一个数组指定这些路由的子集传递给 <code>withTrashed</code> 方法：</p><pre><code>Route::resource(&#39;photos&#39;, PhotoController::class)-&gt;withTrashed([&#39;show&#39;]);
</code></pre><p><a name="specifying-the-resource-model"></a></p><h4 id="指定资源模型" tabindex="-1"><a class="header-anchor" href="#指定资源模型" aria-hidden="true">#</a> 指定资源模型</h4><p>如果你使用了路由模型的绑定 <a href="./routing#route-model-binding">路由模型绑定</a> 并且想在资源控制器的方法中使用类型提示，你可以在生成控制器的时候使用 <code>--model</code> 选项：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan make:controller PhotoController <span class="token parameter variable">--model</span><span class="token operator">=</span>Photo <span class="token parameter variable">--resource</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a name="generating-form-requests"></a></p><h4 id="生成表单请求" tabindex="-1"><a class="header-anchor" href="#生成表单请求" aria-hidden="true">#</a> 生成表单请求</h4><p>你可以在生成资源控制器时提供 <code>--requests</code> 选项来让 Artisan 为控制器的 storage 和 update 方法生成 <a href="./validation#form-request-validation">表单请求类</a>：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan make:controller PhotoController <span class="token parameter variable">--model</span><span class="token operator">=</span>Photo <span class="token parameter variable">--resource</span> <span class="token parameter variable">--requests</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a name="restful-partial-resource-routes"></a></p><h3 id="部分资源路由" tabindex="-1"><a class="header-anchor" href="#部分资源路由" aria-hidden="true">#</a> 部分资源路由</h3><p>当声明资源路由时，你可以指定控制器处理的部分行为，而不是所有默认的行为：</p><pre><code>use App\\Http\\Controllers\\PhotoController;

Route::resource(&#39;photos&#39;, PhotoController::class)-&gt;only([
    &#39;index&#39;, &#39;show&#39;
]);

Route::resource(&#39;photos&#39;, PhotoController::class)-&gt;except([
    &#39;create&#39;, &#39;store&#39;, &#39;update&#39;, &#39;destroy&#39;
]);
</code></pre><p><a name="api-resource-routes"></a></p><h4 id="api-资源路由" tabindex="-1"><a class="header-anchor" href="#api-资源路由" aria-hidden="true">#</a> API 资源路由</h4><p>当声明用于 API 的资源路由时，通常需要排除显示 HTML 模板的路由，例如 <code>create</code> 和 <code>edit</code>。为了方便，你可以使用 <code>apiResource</code> 方法来排除这两个路由：</p><pre><code>use App\\Http\\Controllers\\PhotoController;

Route::apiResource(&#39;photos&#39;, PhotoController::class);
</code></pre><p>你也可以传递一个数组给 <code>apiResources</code> 方法来同时注册多个 API 资源控制器：</p><pre><code>use App\\Http\\Controllers\\PhotoController;
use App\\Http\\Controllers\\PostController;

Route::apiResources([
    &#39;photos&#39; =&gt; PhotoController::class,
    &#39;posts&#39; =&gt; PostController::class,
]);
</code></pre><p>要快速生成不包含 <code>create</code> 或 <code>edit</code> 方法的 API 资源控制器，你可以在执行 <code>make:controller</code> 命令时使用 <code>--api</code> 参数：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan make:controller PhotoController <span class="token parameter variable">--api</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a name="restful-nested-resources"></a></p><h3 id="嵌套资源" tabindex="-1"><a class="header-anchor" href="#嵌套资源" aria-hidden="true">#</a> 嵌套资源</h3><p>有时可能需要定义一个嵌套的资源型路由。例如，照片资源可能被添加了多个评论。那么可以在路由中使用 <code>.</code> 符号来声明资源型控制器：</p><pre><code>use App\\Http\\Controllers\\PhotoCommentController;

Route::resource(&#39;photos.comments&#39;, PhotoCommentController::class);
</code></pre><p>该路由会注册一个嵌套资源，可以使用如下 URI 访问：</p><pre><code>/photos/{photo}/comments/{comment}
</code></pre><p><a name="scoping-nested-resources"></a></p><h4 id="限定嵌套资源的范围" tabindex="-1"><a class="header-anchor" href="#限定嵌套资源的范围" aria-hidden="true">#</a> 限定嵌套资源的范围</h4><p>Laravel 的 <a href="./routing#implicit-model-binding-scoping">隐式模型绑定</a> 特性可以自动限定嵌套绑定的范围，以便确认已解析的子模型会自动属于父模型。定义嵌套路由时，使用 scoped 方法，可以开启自动范围限定，也可以指定 Laravel 应该按照哪个字段检索子模型资源，有关如何完成此操作的更多信息，请参见有关 <a href="#restful-scoping-resource-routes">范围资源路由</a> 的文档。</p><p><a name="shallow-nesting"></a></p><h4 id="浅层嵌套" tabindex="-1"><a class="header-anchor" href="#浅层嵌套" aria-hidden="true">#</a> 浅层嵌套</h4><p>通常，并不是在所有情况下都需要在 URI 中同时拥有父 ID 和子 ID，因为子 ID 已经是唯一的标识符。当使用唯一标识符（如自动递增的主键）来标识 URL 中的模型时，可以选择使用「浅嵌套」的方式定义路由：</p><pre><code>use App\\Http\\Controllers\\CommentController;

Route::resource(&#39;photos.comments&#39;, CommentController::class)-&gt;shallow();
</code></pre><p>上面的路由定义方式会定义以下路由：</p><table><thead><tr><th>请求方式</th><th>请求URI</th><th>行为</th><th>路由名称</th></tr></thead><tbody><tr><td>GET</td><td><code>/photos/{photo}/comments</code></td><td>index</td><td>photos.comments.index</td></tr><tr><td>GET</td><td><code>/photos/{photo}/comments/create</code></td><td>create</td><td>photos.comments.create</td></tr><tr><td>POST</td><td><code>/photos/{photo}/comments</code></td><td>store</td><td>photos.comments.store</td></tr><tr><td>GET</td><td><code>/comments/{comment}</code></td><td>show</td><td>comments.show</td></tr><tr><td>GET</td><td><code>/comments/{comment}/edit</code></td><td>edit</td><td>comments.edit</td></tr><tr><td>PUT/PATCH</td><td><code>/comments/{comment}</code></td><td>update</td><td>comments.update</td></tr><tr><td>DELETE</td><td><code>/comments/{comment}</code></td><td>destroy</td><td>comments.destroy</td></tr></tbody></table><p><a name="restful-naming-resource-routes"></a></p><h3 id="命名资源路由" tabindex="-1"><a class="header-anchor" href="#命名资源路由" aria-hidden="true">#</a> 命名资源路由</h3><p>默认情况下，所有的资源控制器行为都有一个路由名称。你可以传入 <code>names</code> 数组来覆盖这些名称：</p><pre><code>use App\\Http\\Controllers\\PhotoController;

Route::resource(&#39;photos&#39;, PhotoController::class)-&gt;names([
    &#39;create&#39; =&gt; &#39;photos.build&#39;
]);
</code></pre><p><a name="restful-naming-resource-route-parameters"></a></p><h3 id="命名资源路由参数" tabindex="-1"><a class="header-anchor" href="#命名资源路由参数" aria-hidden="true">#</a> 命名资源路由参数</h3><p>默认情况下，<code>Route::resource</code> 会根据资源名称的「单数」形式创建资源路由的路由参数。你可以使用 <code>parameters</code> 方法来轻松地覆盖资源路由名称。传入 <code>parameters</code> 方法应该是资源名称和参数名称的关联数组：</p><pre><code>use App\\Http\\Controllers\\AdminUserController;

Route::resource(&#39;users&#39;, AdminUserController::class)-&gt;parameters([
    &#39;users&#39; =&gt; &#39;admin_user&#39;
]);
</code></pre><p>上面的示例将会为资源的 <code>show</code> 路由生成以下的 URL：</p><pre><code>/users/{admin_user}
</code></pre><p><a name="restful-scoping-resource-routes"></a></p><h3 id="限定范围的资源路由" tabindex="-1"><a class="header-anchor" href="#限定范围的资源路由" aria-hidden="true">#</a> 限定范围的资源路由</h3><p>Laravel 的 <a href="./routing#implicit-model-binding-scoping">作用域隐式模型绑定</a> 功能可以自动确定嵌套绑定的范围，以便确认已解析的子模型属于父模型。通过在定义嵌套资源时使用 <code>scoped</code> 方法，你可以启用自动范围界定，并指示 Laravel 应该通过以下方式来检索子资源的哪个字段：</p><pre><code>use App\\Http\\Controllers\\PhotoCommentController;

Route::resource(&#39;photos.comments&#39;, PhotoCommentController::class)-&gt;scoped([
    &#39;comment&#39; =&gt; &#39;slug&#39;,
]);
</code></pre><p>此路由将注册一个有范围的嵌套资源，该资源可以通过以下 URI 进行访问：</p><pre><code>/photos/{photo}/comments/{comment:slug}
</code></pre><p>当使用一个自定义键的隐式绑定作为嵌套路由参数时，Laravel 会自动限定查询范围，按照约定的命名方式去父类中查找关联方法，然后检索到对应的嵌套模型。在这种情况下，将假定 <code>Photo</code> 模型有一个叫 <code>comments</code> （路由参数名的复数）的关联方法，通过这个方法可以检索到 <code>Comment</code> 模型。</p><p><a name="restful-localizing-resource-uris"></a></p><h3 id="本地化资源-uris" tabindex="-1"><a class="header-anchor" href="#本地化资源-uris" aria-hidden="true">#</a> 本地化资源 URIs</h3><p>默认情况下，<code>Route::resource</code> 将会用英文动词创建资源 URIs。如果需要自定义 <code>create</code> 和 <code>edit</code> 行为的动名词，你可以在 <code>App\\Providers\\RouteServiceProvider</code> 的 <code>boot</code> 方法中使用 <code>Route::resourceVerbs</code> 方法实现：</p><pre><code>/**
 * 定义你的路由模型绑定，模式过滤器等
 */
public function boot(): void
{
    Route::resourceVerbs([
        &#39;create&#39; =&gt; &#39;crear&#39;,
        &#39;edit&#39; =&gt; &#39;editar&#39;,
    ]);

    // ...
}
</code></pre><p>Laravel 的复数器支持<a href="./localization#pluralization-language">配置几种不同的语言</a>。自定义动词和复数语言后，诸如 <code>Route::resource(&#39;publicacion&#39;, PublicacionController::class)</code> 之类的资源路由注册将生成以下URI：</p><pre><code>/publicacion/crear

/publicacion/{publicaciones}/editar
</code></pre><p><a name="restful-supplementing-resource-controllers"></a></p><h3 id="补充资源控制器" tabindex="-1"><a class="header-anchor" href="#补充资源控制器" aria-hidden="true">#</a> 补充资源控制器</h3><p>如果你需要向资源控制器添加超出默认资源路由集的其他路由，则应在调用 <code>Route::resource</code> 方法之前定义这些路由；否则，由 <code>resource</code> 方法定义的路由可能会无意中优先于您的补充路由： 单例资源 use App\\Http\\Controller\\PhotoController;</p><pre><code>Route::get(&#39;/photos/popular&#39;, [PhotoController::class, &#39;popular&#39;]);
Route::resource(&#39;photos&#39;, PhotoController::class);
</code></pre><blockquote><p>技巧：请记住让你的控制器保持集中。如果你发现自己经常需要典型资源操作集之外的方法，请考虑将控制器拆分为两个更小的控制器。</p></blockquote><p><a name="singleton-resource-controllers"></a></p><h3 id="单例资源控制器" tabindex="-1"><a class="header-anchor" href="#单例资源控制器" aria-hidden="true">#</a> 单例资源控制器</h3><p>有时候，应用中的资源可能只有一个实例。比如，用户「个人资料」可被编辑或更新，但是一个用户只会有一份「个人资料」。同样，一张图片也只有一个「缩略图」。这些资源就是所谓「单例资源」，这意味着该资源有且只能有一个实例存在。这种情况下，你可以注册成单例(signleton)资源控制器:</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">App<span class="token punctuation">\\</span>Http<span class="token punctuation">\\</span>Controllers<span class="token punctuation">\\</span>ProfileController</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Support<span class="token punctuation">\\</span>Facades<span class="token punctuation">\\</span>Route</span><span class="token punctuation">;</span>

<span class="token class-name static-context">Route</span><span class="token operator">::</span><span class="token function">singleton</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;profile&#39;</span><span class="token punctuation">,</span> <span class="token class-name static-context">ProfileController</span><span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上例中定义的单例资源会注册如下所示的路由。如你所见，单例资源中「新建」路由没有被注册；并且注册的路由不接收路由参数，因为该资源中只有一个实例存在：</p><table><thead><tr><th>请求方式</th><th>请求 URI</th><th>行为</th><th>路由名称</th></tr></thead><tbody><tr><td>GET</td><td><code>/profile</code></td><td>show</td><td>profile.show</td></tr><tr><td>GET</td><td><code>/profile/edit</code></td><td>edit</td><td>profile.edit</td></tr><tr><td>PUT/PATCH</td><td><code>/profile</code></td><td>update</td><td>profile.update</td></tr></tbody></table><p>单例资源也可以在标准资源内嵌套使用：</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token class-name static-context">Route</span><span class="token operator">::</span><span class="token function">singleton</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;photos.thumbnail&#39;</span><span class="token punctuation">,</span> <span class="token class-name static-context">ThumbnailController</span><span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上例中， <code>photo</code> 资源将接收所有的<a href="#actions-handled-by-resource-controller">标准资源路由</a>；不过，<code>thumbnail</code> 资源将会是个单例资源，它的路由如下所示：</p><table><thead><tr><th>请求方式</th><th>请求 URI</th><th>行为</th><th>路由名称</th></tr></thead><tbody><tr><td>GET</td><td><code>/photos/{photo}/thumbnail</code></td><td>show</td><td>photos.thumbnail.show</td></tr><tr><td>GET</td><td><code>/photos/{photo}/thumbnail/edit</code></td><td>edit</td><td>photos.thumbnail.edit</td></tr><tr><td>PUT/PATCH</td><td><code>/photos/{photo}/thumbnail</code></td><td>update</td><td>photos.thumbnail.update</td></tr></tbody></table><p><a name="creatable-singleton-resources"></a></p><h4 id="creatable-单例资源" tabindex="-1"><a class="header-anchor" href="#creatable-单例资源" aria-hidden="true">#</a> Creatable 单例资源</h4><p>有时，你可能需要为单例资源定义 create 和 storage 路由。要实现这一功能，你可以在注册单例资源路由时，调用 <code>creatable</code> 方法：</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token class-name static-context">Route</span><span class="token operator">::</span><span class="token function">singleton</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;photos.thumbnail&#39;</span><span class="token punctuation">,</span> <span class="token class-name static-context">ThumbnailController</span><span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">creatable</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如下所示，将注册以下路由。还为可创建的单例资源注册 <code>DELETE</code> 路由：</p><table><thead><tr><th>Verb</th><th>URI</th><th>Action</th><th>Route Name</th></tr></thead><tbody><tr><td>GET</td><td><code>/photos/{photo}/thumbnail/create</code></td><td>create</td><td>photos.thumbnail.create</td></tr><tr><td>POST</td><td><code>/photos/{photo}/thumbnail</code></td><td>store</td><td>photos.thumbnail.store</td></tr><tr><td>GET</td><td><code>/photos/{photo}/thumbnail</code></td><td>show</td><td>photos.thumbnail.show</td></tr><tr><td>GET</td><td><code>/photos/{photo}/thumbnail/edit</code></td><td>edit</td><td>photos.thumbnail.edit</td></tr><tr><td>PUT/PATCH</td><td><code>/photos/{photo}/thumbnail</code></td><td>update</td><td>photos.thumbnail.update</td></tr><tr><td>DELETE</td><td><code>/photos/{photo}/thumbnail</code></td><td>destroy</td><td>photos.thumbnail.destroy</td></tr></tbody></table><p>如果希望 Laravel 为单个资源注册 <code>DELETE</code> 路由，但不注册创建或存储路由，则可以使用 <code>destroyable</code> 方法：</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token class-name static-context">Route</span><span class="token operator">::</span><span class="token function">singleton</span><span class="token punctuation">(</span><span class="token operator">...</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">destroyable</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a name="api-singleton-resources"></a></p><h4 id="api-单例资源" tabindex="-1"><a class="header-anchor" href="#api-单例资源" aria-hidden="true">#</a> API 单例资源</h4><p><code>apiSingleton</code> 方法可用于注册将通过API操作的单例资源，从而不需要 <code>create</code> 和 <code>edit</code> 路由：</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token class-name static-context">Route</span><span class="token operator">::</span><span class="token function">apiSingleton</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;profile&#39;</span><span class="token punctuation">,</span> <span class="token class-name static-context">ProfileController</span><span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>当然， API 单例资源也可以是 <code>可创建的</code> ，它将注册 <code>store</code> 和 <code>destroy</code> 资源路由：</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token class-name static-context">Route</span><span class="token operator">::</span><span class="token function">apiSingleton</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;photos.thumbnail&#39;</span><span class="token punctuation">,</span> <span class="token class-name static-context">ProfileController</span><span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">creatable</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a name="dependency-injection-and-controllers"></a></p><h2 id="依赖注入和控制器" tabindex="-1"><a class="header-anchor" href="#依赖注入和控制器" aria-hidden="true">#</a> 依赖注入和控制器</h2><p><a name="constructor-injection"></a></p><h4 id="构造函数注入" tabindex="-1"><a class="header-anchor" href="#构造函数注入" aria-hidden="true">#</a> 构造函数注入</h4><p>Laravel <a href="./container">服务容器</a> 用于解析所有 Laravel 控制器。因此，可以在其构造函数中对控制器可能需要的任何依赖项进行类型提示。声明的依赖项将自动解析并注入到控制器实例中：</p><pre><code>&lt;?php

namespace App\\Http\\Controllers;

use App\\Repositories\\UserRepository;

class UserController extends Controller
{
    /**
     * 创建新控制器实例。
     */
    public function __construct(
        protected UserRepository $users,
    ) {}
}
</code></pre><p><a name="method-injection"></a></p><h4 id="方法注入" tabindex="-1"><a class="header-anchor" href="#方法注入" aria-hidden="true">#</a> 方法注入</h4><p>除了构造函数注入，还可以在控制器的方法上键入提示依赖项。方法注入的一个常见用例是将 <code>Illuminate\\Http\\Request</code> 实例注入到控制器方法中：</p><pre><code>&lt;?php

namespace App\\Http\\Controllers;

use Illuminate\\Http\\RedirectResponse;
use Illuminate\\Http\\Request;

class UserController extends Controller
{
    /**
     * 存储新用户。
     */
    public function store(Request $request): RedirectResponse
    {
        $name = $request-&gt;name;

        // 存储用户。。。

        return redirect(&#39;/users&#39;);
    }
}
</code></pre><p>如果控制器方法也需要路由参数，那就在其他依赖项之后列出路由参数。例如，路由是这样定义的：</p><pre><code>use App\\Http\\Controllers\\UserController;

Route::put(&#39;/user/{id}&#39;, [UserController::class, &#39;update&#39;]);
</code></pre><p>如下所示，你依然可以类型提示 <code>Illuminate\\Http\\Request</code> 并通过定义您的控制器方法访问 <code>id</code> 参数：</p><pre><code>&lt;?php

namespace App\\Http\\Controllers;

use Illuminate\\Http\\RedirectResponse;
use Illuminate\\Http\\Request;

class UserController extends Controller
{
    /**
     * 更新给定用户。
     */
    public function update(Request $request, string $id): RedirectResponse
    {
        // 更新用户。。。

        return redirect(&#39;/users&#39;);
    }
}
</code></pre>`,158),r=[s];function d(p,c){return t(),o("div",null,r)}const u=e(a,[["render",d],["__file","controllers.html.vue"]]);export{u as default};
