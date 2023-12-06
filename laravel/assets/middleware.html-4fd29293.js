import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as n,c as a,a as t}from"./app-06635a3b.js";const d={},r=t(`<h1 id="中间件" tabindex="-1"><a class="header-anchor" href="#中间件" aria-hidden="true">#</a> 中间件</h1><ul><li><a href="#introduction">介绍</a></li><li><a href="#defining-middleware">定义中间件</a></li><li><a href="#registering-middleware">注册中间件</a><ul><li><a href="#global-middleware">全局中间件</a></li><li><a href="#assigning-middleware-to-routes">将中间件分配给路由</a></li><li><a href="#middleware-groups">中间件组</a></li><li><a href="#sorting-middleware">排序中间件</a></li></ul></li><li><a href="#middleware-parameters">中间件参数</a></li><li><a href="#terminable-middleware">可终止的中间件</a></li></ul><p><a name="introduction"></a></p><h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h2><p>中间件提供了一种方便的机制来检查和过滤进入应用程序的 HTTP 请求。例如，Laravel 包含一个中间件，用于验证应用程序的用户是否经过身份验证。如果用户未通过身份验证，中间件会将用户重定向到应用程序的登录屏幕。 但是，如果用户通过了身份验证，中间件将允许请求进一步进入应用程序。</p><p>除了身份验证之外，还可以编写其他中间件来执行各种任务。例如，日志中间件可能会将所有传入请求记录到你的应用程序。Laravel 框架中包含了几个中间件，包括用于身份验证和 CSRF 保护的中间件。所有这些中间件都位于 <code>app/Http/Middleware</code> 目录中。</p><p><a name="defining-middleware"></a></p><h2 id="定义中间件" tabindex="-1"><a class="header-anchor" href="#定义中间件" aria-hidden="true">#</a> 定义中间件</h2><p>要创建新的中间件，请使用 <code>make:middleware</code> Artisan 命令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan make:middleware EnsureTokenIsValid
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>此命令将在你的 <code>app/Http/Middleware</code> 目录中放置一个新的 <code>EnsureTokenIsValid</code> 类。在这个中间件中，如果提供的 <code>token</code> 输入匹配指定的值，我们将只允许访问路由。否则，我们会将用户重定向回 <code>home</code> URI：</p><pre><code>&lt;?php

namespace App\\Http\\Middleware;

use Closure;
use Illuminate\\Http\\Request;
use Symfony\\Component\\HttpFoundation\\Response;

class EnsureTokenIsValid
{
    /**
     * 处理传入请求。
     *
     * @param  \\Closure(\\Illuminate\\Http\\Request): (\\Symfony\\Component\\HttpFoundation\\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        if ($request-&gt;input(&#39;token&#39;) !== &#39;my-secret-token&#39;) {
            return redirect(&#39;home&#39;);
        }

        return $next($request);
    }
}
</code></pre><p>如你所见，如果给定的 <code>token</code> 与我们的秘密令牌不匹配，中间件将向客户端返回 HTTP 重定向； 否则，请求将被进一步传递到应用程序中。要将请求更深入地传递到应用程序中（允许中间件「通过」），你应该使用 <code>$request</code> 调用 <code>$next</code> 回调。</p><p>最好将中间件设想为一系列「层」HTTP 请求在到达你的应用程序之前必须通过。每一层都可以检查请求，甚至完全拒绝它。</p><blockquote><p>技巧：所有中间件都通过 <a href="./container">服务容器</a> 解析，因此你可以在中间件的构造函数中键入提示你需要的任何依赖项。</p></blockquote><p><a name="before-after-middleware"></a><a name="middleware-and-responses"></a></p><h4 id="中间件和响应" tabindex="-1"><a class="header-anchor" href="#中间件和响应" aria-hidden="true">#</a> 中间件和响应</h4><p>当然，中间件可以在将请求更深入地传递到应用程序之前或之后执行任务。例如，以下中间件将在应用程序处理__请求之前__执行一些任务：</p><pre><code>&lt;?php

namespace App\\Http\\Middleware;

use Closure;
use Illuminate\\Http\\Request;
use Symfony\\Component\\HttpFoundation\\Response;

class BeforeMiddleware
{
    public function handle(Request $request, Closure $next): Response
    {
        // 执行操作

        return $next($request);
    }
}
</code></pre><p>但是，此中间件将在应用程序处理__请求之后__执行其任务：</p><pre><code>&lt;?php

namespace App\\Http\\Middleware;

use Closure;
use Illuminate\\Http\\Request;
use Symfony\\Component\\HttpFoundation\\Response;

class AfterMiddleware
{
    public function handle(Request $request, Closure $next): Response
    {
        $response = $next($request);

        // 执行操作

        return $response;
    }
}
</code></pre><p><a name="registering-middleware"></a></p><h2 id="注册中间件" tabindex="-1"><a class="header-anchor" href="#注册中间件" aria-hidden="true">#</a> 注册中间件</h2><p><a name="global-middleware"></a></p><h3 id="全局中间件" tabindex="-1"><a class="header-anchor" href="#全局中间件" aria-hidden="true">#</a> 全局中间件</h3><p>如果你希望在对应用程序的每个 HTTP 请求期间运行中间件，请在 <code>app/Http/Kernel.php</code> 类的 <code>$middleware</code> 属性中列出中间件类。</p><p><a name="assigning-middleware-to-routes"></a></p><h3 id="将中间件分配给路由" tabindex="-1"><a class="header-anchor" href="#将中间件分配给路由" aria-hidden="true">#</a> 将中间件分配给路由</h3><p>如果要将中间件分配给特定路由，可以在定义路由时调用 <code>middleware</code> 方法：</p><pre><code>use App\\Http\\Middleware\\Authenticate;

Route::get(&#39;/profile&#39;, function () {
    // ...
})-&gt;middleware(Authenticate::class);
</code></pre><p>通过向 <code>middleware</code> 方法传递一组中间件名称，可以为路由分配多个中间件：</p><pre><code>Route::get(&#39;/&#39;, function () {
    // ...
})-&gt;middleware([First::class, Second::class]);
</code></pre><p>为了方便起见，可以在应用程序的<code>app/Http/Kernel.php</code>文件中为中间件分配别名。默认情况下，此类的 <code>$middlewareAliases</code> 属性包含Laravel中包含的中间件的条目。你可以将自己的中间件添加到此列表中，并为其分配选择的别名：</p><pre><code>// 在App\\Http\\Kernel类中。。。

protected $middlewareAliases = [
    &#39;auth&#39; =&gt; \\App\\Http\\Middleware\\Authenticate::class,
    &#39;auth.basic&#39; =&gt; \\Illuminate\\Auth\\Middleware\\AuthenticateWithBasicAuth::class,
    &#39;bindings&#39; =&gt; \\Illuminate\\Routing\\Middleware\\SubstituteBindings::class,
    &#39;cache.headers&#39; =&gt; \\Illuminate\\Http\\Middleware\\SetCacheHeaders::class,
    &#39;can&#39; =&gt; \\Illuminate\\Auth\\Middleware\\Authorize::class,
    &#39;guest&#39; =&gt; \\App\\Http\\Middleware\\RedirectIfAuthenticated::class,
    &#39;signed&#39; =&gt; \\Illuminate\\Routing\\Middleware\\ValidateSignature::class,
    &#39;throttle&#39; =&gt; \\Illuminate\\Routing\\Middleware\\ThrottleRequests::class,
    &#39;verified&#39; =&gt; \\Illuminate\\Auth\\Middleware\\EnsureEmailIsVerified::class,
];
</code></pre><p>一旦在HTTP内核中定义了中间件别名，就可以在将中间件分配给路由时使用该别名：</p><pre><code>Route::get(&#39;/profile&#39;, function () {
    // ...
})-&gt;middleware(&#39;auth&#39;);
</code></pre><p><a name="excluding-middleware"></a></p><h4 id="排除中间件" tabindex="-1"><a class="header-anchor" href="#排除中间件" aria-hidden="true">#</a> 排除中间件</h4><p>当将中间件分配给一组路由时，可能偶尔需要防止中间件应用于组内的单个路由。可以使用 <code>withoutMiddleware</code> 方法完成此操作：</p><pre><code>use App\\Http\\Middleware\\EnsureTokenIsValid;

Route::middleware([EnsureTokenIsValid::class])-&gt;group(function () {
    Route::get(&#39;/&#39;, function () {
        // ...
    });

    Route::get(&#39;/profile&#39;, function () {
        // ...
    })-&gt;withoutMiddleware([EnsureTokenIsValid::class]);
});
</code></pre><p>还可以从整个 <a href="./routing#route-groups">组</a> 路由定义中排除一组给定的中间件：</p><pre><code>use App\\Http\\Middleware\\EnsureTokenIsValid;

Route::withoutMiddleware([EnsureTokenIsValid::class])-&gt;group(function () {
    Route::get(&#39;/profile&#39;, function () {
        // ...
    });
});
</code></pre><p>「withoutMiddleware」方法只能删除路由中间件，不适用于 <a href="#global-middleware">全局中间件</a>。</p><p><a name="middleware-groups"></a></p><h3 id="中间件组" tabindex="-1"><a class="header-anchor" href="#中间件组" aria-hidden="true">#</a> 中间件组</h3><p>有时，你可能希望将多个中间件组合在一个键下，以使它们更容易分配给路由。你可以使用 HTTP 内核的 <code>$middlewareGroups</code> 属性来完成此操作。</p><p>Laravel 包括预定义 带有 <code>web</code> 和 <code>api</code> 中间件组，其中包含你可能希望应用于 Web 和 API 路由的常见中间件。请记住，这些中间件组会由应用程序的 <code>App\\Providers\\RouteServiceProvider</code> 服务提供者自动应用于相应的 <code>web</code> 和 <code>api</code> 路由文件中的路由：</p><pre><code>/**
 * 应用程序的路由中间件组。
 *
 * @var array
 */
protected $middlewareGroups = [
    &#39;web&#39; =&gt; [
        \\App\\Http\\Middleware\\EncryptCookies::class,
        \\Illuminate\\Cookie\\Middleware\\AddQueuedCookiesToResponse::class,
        \\Illuminate\\Session\\Middleware\\StartSession::class,
        \\Illuminate\\View\\Middleware\\ShareErrorsFromSession::class,
        \\App\\Http\\Middleware\\VerifyCsrfToken::class,
        \\Illuminate\\Routing\\Middleware\\SubstituteBindings::class,
    ],

    &#39;api&#39; =&gt; [
        \\Illuminate\\Routing\\Middleware\\ThrottleRequests::class.&#39;:api&#39;,
        \\Illuminate\\Routing\\Middleware\\SubstituteBindings::class,
    ],
];
</code></pre><p>中间件组可以使用与单个中间件相同的语法分配给路由和控制器动作。同理，中间件组使一次将多个中间件分配给一个路由更加方便：</p><pre><code>Route::get(&#39;/&#39;, function () {
    // ...
})-&gt;middleware(&#39;web&#39;);

Route::middleware([&#39;web&#39;])-&gt;group(function () {
    // ...
});
</code></pre><blockquote><p>技巧：开箱即用，<code>web</code> 和 <code>api</code> 中间件组会通过 <code>App\\Providers\\RouteServiceProvider</code> 自动应用于应用程序对应的 <code>routes/web.php</code> 和 <code>routes/api.php</code> 文件。</p></blockquote><p><a name="sorting-middleware"></a></p><h3 id="排序中间件" tabindex="-1"><a class="header-anchor" href="#排序中间件" aria-hidden="true">#</a> 排序中间件</h3><p>在特定情况下，可能需要中间件以特定的顺序执行，但当它们被分配到路由时，是无法控制它们的顺序的。在这种情况下，可以使用到 <code>app/Http/Kernel.php</code> 文件的 <code>$middlewarePriority</code> 属性指定中间件优先级。默认情况下，HTTP内核中可能不存在此属性。如果它不存在，你可以复制下面的默认定义：</p><pre><code>/**
 * 中间件的优先级排序列表。
 *
 * 这迫使非全局中间件始终处于给定的顺序。
 *
 * @var string[]
 */
protected $middlewarePriority = [
    \\Illuminate\\Foundation\\Http\\Middleware\\HandlePrecognitiveRequests::class,
    \\Illuminate\\Cookie\\Middleware\\EncryptCookies::class,
    \\Illuminate\\Session\\Middleware\\StartSession::class,
    \\Illuminate\\View\\Middleware\\ShareErrorsFromSession::class,
    \\Illuminate\\Contracts\\Auth\\Middleware\\AuthenticatesRequests::class,
    \\Illuminate\\Routing\\Middleware\\ThrottleRequests::class,
    \\Illuminate\\Routing\\Middleware\\ThrottleRequestsWithRedis::class,
    \\Illuminate\\Contracts\\Session\\Middleware\\AuthenticatesSessions::class,
    \\Illuminate\\Routing\\Middleware\\SubstituteBindings::class,
    \\Illuminate\\Auth\\Middleware\\Authorize::class,
];
</code></pre><p><a name="middleware-parameters"></a></p><h2 id="中间件参数" tabindex="-1"><a class="header-anchor" href="#中间件参数" aria-hidden="true">#</a> 中间件参数</h2><p>中间件也可以接收额外的参数。例如，如果你的应用程序需要在执行给定操作之前验证经过身份验证的用户是否具有给定的「角色」，你可以创建一个 <code>EnsureUserHasRole</code> 中间件，该中间件接收角色名称作为附加参数。</p><p>额外的中间件参数将在 <code>$next</code> 参数之后传递给中间件：</p><pre><code>&lt;?php

namespace App\\Http\\Middleware;

use Closure;
use Illuminate\\Http\\Request;
use Symfony\\Component\\HttpFoundation\\Response;

class EnsureUserHasRole
{
    /**
     * 处理传入请求。
     *
     * @param  \\Closure(\\Illuminate\\Http\\Request): (\\Symfony\\Component\\HttpFoundation\\Response)  $next
     */
    public function handle(Request $request, Closure $next, string $role): Response
    {
        if (! $request-&gt;user()-&gt;hasRole($role)) {
            // 重定向。。。
        }

        return $next($request);
    }

}
</code></pre><p>在定义路由时，可以指定中间件参数，方法是使用 <code>:</code> 分隔中间件名称和参数。多个参数应以逗号分隔：</p><pre><code>Route::put(&#39;/post/{id}&#39;, function (string $id) {
    // ...
})-&gt;middleware(&#39;role:editor&#39;);
</code></pre><p><a name="terminable-middleware"></a></p><h2 id="可终止的中间件" tabindex="-1"><a class="header-anchor" href="#可终止的中间件" aria-hidden="true">#</a> 可终止的中间件</h2><p>部分情况下，在将 HTTP 响应发送到浏览器之后，中间件可能需要做一些工作。如果你在中间件上定义了一个 <code>terminate</code> 方法，并且你的 Web 服务器使用 FastCGI，则在将响应发送到浏览器后会自动调用 <code>terminate</code> 方法：</p><pre><code>&lt;?php

namespace Illuminate\\Session\\Middleware;

use Closure;
use Illuminate\\Http\\Request;
use Symfony\\Component\\HttpFoundation\\Response;

class TerminatingMiddleware
{
    /**
     * 处理传入的请求。
     *
     * @param  \\Closure(\\Illuminate\\Http\\Request): (\\Symfony\\Component\\HttpFoundation\\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        return $next($request);
    }

    /**
     * 在响应发送到浏览器后处理任务。
     */
    public function terminate(Request $request, Response $response): void
    {
        // ...
    }
}
</code></pre><p><code>terminate</code> 方法应该同时接收请求和响应。一旦你定义了一个可终止的中间件，你应该将它添加到 <code>app/Http/Kernel.php</code> 文件中的路由或全局中间件列表中。</p><p>当在中间件上调用 <code>terminate</code> 方法时，Laravel 会从 <a href="./container">服务容器</a> 解析一个新的中间件实例。如果你想在调用 <code>handle</code> 和 <code>terminate</code> 方法时使用相同的中间件实例，请使用容器的 <code>singleton</code> 方法向容器注册中间件。 通常这应该在你的 <code>AppServiceProvider</code> 的 <code>register</code> 方法中完成：</p><pre><code>use App\\Http\\Middleware\\TerminatingMiddleware;

/**
 * 注册任何应用程序服务。
 */
public function register(): void
{
    $this-&gt;app-&gt;singleton(TerminatingMiddleware::class);
}
</code></pre><p><a name="前后中间件"></a><a name="中间件和响应"></a></p>`,70),i=[r];function o(s,l){return n(),a("div",null,i)}const u=e(d,[["render",o],["__file","middleware.html.vue"]]);export{u as default};
