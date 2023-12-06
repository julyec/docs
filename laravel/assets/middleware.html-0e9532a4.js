import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as n,a as t}from"./app-06635a3b.js";const i={},r=t(`<h1 id="middleware" tabindex="-1"><a class="header-anchor" href="#middleware" aria-hidden="true">#</a> Middleware</h1><ul><li><a href="#introduction">Introduction</a></li><li><a href="#defining-middleware">Defining Middleware</a></li><li><a href="#registering-middleware">Registering Middleware</a><ul><li><a href="#global-middleware">Global Middleware</a></li><li><a href="#assigning-middleware-to-routes">Assigning Middleware To Routes</a></li><li><a href="#middleware-groups">Middleware Groups</a></li><li><a href="#sorting-middleware">Sorting Middleware</a></li></ul></li><li><a href="#middleware-parameters">Middleware Parameters</a></li><li><a href="#terminable-middleware">Terminable Middleware</a></li></ul><p><a name="introduction"></a></p><h2 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h2><p>Middleware provide a convenient mechanism for inspecting and filtering HTTP requests entering your application. For example, Laravel includes a middleware that verifies the user of your application is authenticated. If the user is not authenticated, the middleware will redirect the user to your application&#39;s login screen. However, if the user is authenticated, the middleware will allow the request to proceed further into the application.</p><p>Additional middleware can be written to perform a variety of tasks besides authentication. For example, a logging middleware might log all incoming requests to your application. There are several middleware included in the Laravel framework, including middleware for authentication and CSRF protection. All of these middleware are located in the <code>app/Http/Middleware</code> directory.</p><p><a name="defining-middleware"></a></p><h2 id="defining-middleware" tabindex="-1"><a class="header-anchor" href="#defining-middleware" aria-hidden="true">#</a> Defining Middleware</h2><p>To create a new middleware, use the <code>make:middleware</code> Artisan command:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan make:middleware EnsureTokenIsValid
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>This command will place a new <code>EnsureTokenIsValid</code> class within your <code>app/Http/Middleware</code> directory. In this middleware, we will only allow access to the route if the supplied <code>token</code> input matches a specified value. Otherwise, we will redirect the users back to the <code>home</code> URI:</p><pre><code>&lt;?php

namespace App\\Http\\Middleware;

use Closure;
use Illuminate\\Http\\Request;
use Symfony\\Component\\HttpFoundation\\Response;

class EnsureTokenIsValid
{
    /**
     * Handle an incoming request.
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
</code></pre><p>As you can see, if the given <code>token</code> does not match our secret token, the middleware will return an HTTP redirect to the client; otherwise, the request will be passed further into the application. To pass the request deeper into the application (allowing the middleware to &quot;pass&quot;), you should call the <code>$next</code> callback with the <code>$request</code>.</p><p>It&#39;s best to envision middleware as a series of &quot;layers&quot; HTTP requests must pass through before they hit your application. Each layer can examine the request and even reject it entirely.</p><blockquote><p><strong>Note</strong><br> All middleware are resolved via the <a href="./container">service container</a>, so you may type-hint any dependencies you need within a middleware&#39;s constructor.</p></blockquote><p><a name="before-after-middleware"></a><a name="middleware-and-responses"></a></p><h4 id="middleware-responses" tabindex="-1"><a class="header-anchor" href="#middleware-responses" aria-hidden="true">#</a> Middleware &amp; Responses</h4><p>Of course, a middleware can perform tasks before or after passing the request deeper into the application. For example, the following middleware would perform some task <strong>before</strong> the request is handled by the application:</p><pre><code>&lt;?php

namespace App\\Http\\Middleware;

use Closure;
use Illuminate\\Http\\Request;
use Symfony\\Component\\HttpFoundation\\Response;

class BeforeMiddleware
{
    public function handle(Request $request, Closure $next): Response
    {
        // Perform action

        return $next($request);
    }
}
</code></pre><p>However, this middleware would perform its task <strong>after</strong> the request is handled by the application:</p><pre><code>&lt;?php

namespace App\\Http\\Middleware;

use Closure;
use Illuminate\\Http\\Request;
use Symfony\\Component\\HttpFoundation\\Response;

class AfterMiddleware
{
    public function handle(Request $request, Closure $next): Response
    {
        $response = $next($request);

        // Perform action

        return $response;
    }
}
</code></pre><p><a name="registering-middleware"></a></p><h2 id="registering-middleware" tabindex="-1"><a class="header-anchor" href="#registering-middleware" aria-hidden="true">#</a> Registering Middleware</h2><p><a name="global-middleware"></a></p><h3 id="global-middleware" tabindex="-1"><a class="header-anchor" href="#global-middleware" aria-hidden="true">#</a> Global Middleware</h3><p>If you want a middleware to run during every HTTP request to your application, list the middleware class in the <code>$middleware</code> property of your <code>app/Http/Kernel.php</code> class.</p><p><a name="assigning-middleware-to-routes"></a></p><h3 id="assigning-middleware-to-routes" tabindex="-1"><a class="header-anchor" href="#assigning-middleware-to-routes" aria-hidden="true">#</a> Assigning Middleware To Routes</h3><p>If you would like to assign middleware to specific routes, you may invoke the <code>middleware</code> method when defining the route:</p><pre><code>use App\\Http\\Middleware\\Authenticate;

Route::get(&#39;/profile&#39;, function () {
    // ...
})-&gt;middleware(Authenticate::class);
</code></pre><p>You may assign multiple middleware to the route by passing an array of middleware names to the <code>middleware</code> method:</p><pre><code>Route::get(&#39;/&#39;, function () {
    // ...
})-&gt;middleware([First::class, Second::class]);
</code></pre><p>For convenience, you may assign aliases to middleware in your application&#39;s <code>app/Http/Kernel.php</code> file. By default, the <code>$middlewareAliases</code> property of this class contains entries for the middleware included with Laravel. You may add your own middleware to this list and assign it an alias of your choosing:</p><pre><code>// Within App\\Http\\Kernel class...

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
</code></pre><p>Once the middleware alias has been defined in the HTTP kernel, you may use the alias when assigning middleware to routes:</p><pre><code>Route::get(&#39;/profile&#39;, function () {
    // ...
})-&gt;middleware(&#39;auth&#39;);
</code></pre><p><a name="excluding-middleware"></a></p><h4 id="excluding-middleware" tabindex="-1"><a class="header-anchor" href="#excluding-middleware" aria-hidden="true">#</a> Excluding Middleware</h4><p>When assigning middleware to a group of routes, you may occasionally need to prevent the middleware from being applied to an individual route within the group. You may accomplish this using the <code>withoutMiddleware</code> method:</p><pre><code>use App\\Http\\Middleware\\EnsureTokenIsValid;

Route::middleware([EnsureTokenIsValid::class])-&gt;group(function () {
    Route::get(&#39;/&#39;, function () {
        // ...
    });

    Route::get(&#39;/profile&#39;, function () {
        // ...
    })-&gt;withoutMiddleware([EnsureTokenIsValid::class]);
});
</code></pre><p>You may also exclude a given set of middleware from an entire <a href="./routing#route-groups">group</a> of route definitions:</p><pre><code>use App\\Http\\Middleware\\EnsureTokenIsValid;

Route::withoutMiddleware([EnsureTokenIsValid::class])-&gt;group(function () {
    Route::get(&#39;/profile&#39;, function () {
        // ...
    });
});
</code></pre><p>The <code>withoutMiddleware</code> method can only remove route middleware and does not apply to <a href="#global-middleware">global middleware</a>.</p><p><a name="middleware-groups"></a></p><h3 id="middleware-groups" tabindex="-1"><a class="header-anchor" href="#middleware-groups" aria-hidden="true">#</a> Middleware Groups</h3><p>Sometimes you may want to group several middleware under a single key to make them easier to assign to routes. You may accomplish this using the <code>$middlewareGroups</code> property of your HTTP kernel.</p><p>Laravel includes predefined <code>web</code> and <code>api</code> middleware groups that contain common middleware you may want to apply to your web and API routes. Remember, these middleware groups are automatically applied by your application&#39;s <code>App\\Providers\\RouteServiceProvider</code> service provider to routes within your corresponding <code>web</code> and <code>api</code> route files:</p><pre><code>/**
 * The application&#39;s route middleware groups.
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
</code></pre><p>Middleware groups may be assigned to routes and controller actions using the same syntax as individual middleware. Again, middleware groups make it more convenient to assign many middleware to a route at once:</p><pre><code>Route::get(&#39;/&#39;, function () {
    // ...
})-&gt;middleware(&#39;web&#39;);

Route::middleware([&#39;web&#39;])-&gt;group(function () {
    // ...
});
</code></pre><blockquote><p><strong>Note</strong><br> Out of the box, the <code>web</code> and <code>api</code> middleware groups are automatically applied to your application&#39;s corresponding <code>routes/web.php</code> and <code>routes/api.php</code> files by the <code>App\\Providers\\RouteServiceProvider</code>.</p></blockquote><p><a name="sorting-middleware"></a></p><h3 id="sorting-middleware" tabindex="-1"><a class="header-anchor" href="#sorting-middleware" aria-hidden="true">#</a> Sorting Middleware</h3><p>Rarely, you may need your middleware to execute in a specific order but not have control over their order when they are assigned to the route. In this case, you may specify your middleware priority using the <code>$middlewarePriority</code> property of your <code>app/Http/Kernel.php</code> file. This property may not exist in your HTTP kernel by default. If it does not exist, you may copy its default definition below:</p><pre><code>/**
 * The priority-sorted list of middleware.
 *
 * This forces non-global middleware to always be in the given order.
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
</code></pre><p><a name="middleware-parameters"></a></p><h2 id="middleware-parameters" tabindex="-1"><a class="header-anchor" href="#middleware-parameters" aria-hidden="true">#</a> Middleware Parameters</h2><p>Middleware can also receive additional parameters. For example, if your application needs to verify that the authenticated user has a given &quot;role&quot; before performing a given action, you could create an <code>EnsureUserHasRole</code> middleware that receives a role name as an additional argument.</p><p>Additional middleware parameters will be passed to the middleware after the <code>$next</code> argument:</p><pre><code>&lt;?php

namespace App\\Http\\Middleware;

use Closure;
use Illuminate\\Http\\Request;
use Symfony\\Component\\HttpFoundation\\Response;

class EnsureUserHasRole
{
    /**
     * Handle an incoming request.
     *
     * @param  \\Closure(\\Illuminate\\Http\\Request): (\\Symfony\\Component\\HttpFoundation\\Response)  $next
     */
    public function handle(Request $request, Closure $next, string $role): Response
    {
        if (! $request-&gt;user()-&gt;hasRole($role)) {
            // Redirect...
        }

        return $next($request);
    }

}
</code></pre><p>Middleware parameters may be specified when defining the route by separating the middleware name and parameters with a <code>:</code>. Multiple parameters should be delimited by commas:</p><pre><code>Route::put(&#39;/post/{id}&#39;, function (string $id) {
    // ...
})-&gt;middleware(&#39;role:editor&#39;);
</code></pre><p><a name="terminable-middleware"></a></p><h2 id="terminable-middleware" tabindex="-1"><a class="header-anchor" href="#terminable-middleware" aria-hidden="true">#</a> Terminable Middleware</h2><p>Sometimes a middleware may need to do some work after the HTTP response has been sent to the browser. If you define a <code>terminate</code> method on your middleware and your web server is using FastCGI, the <code>terminate</code> method will automatically be called after the response is sent to the browser:</p><pre><code>&lt;?php

namespace Illuminate\\Session\\Middleware;

use Closure;
use Illuminate\\Http\\Request;
use Symfony\\Component\\HttpFoundation\\Response;

class TerminatingMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \\Closure(\\Illuminate\\Http\\Request): (\\Symfony\\Component\\HttpFoundation\\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        return $next($request);
    }

    /**
     * Handle tasks after the response has been sent to the browser.
     */
    public function terminate(Request $request, Response $response): void
    {
        // ...
    }
}
</code></pre><p>The <code>terminate</code> method should receive both the request and the response. Once you have defined a terminable middleware, you should add it to the list of routes or global middleware in the <code>app/Http/Kernel.php</code> file.</p><p>When calling the <code>terminate</code> method on your middleware, Laravel will resolve a fresh instance of the middleware from the <a href="./container">service container</a>. If you would like to use the same middleware instance when the <code>handle</code> and <code>terminate</code> methods are called, register the middleware with the container using the container&#39;s <code>singleton</code> method. Typically this should be done in the <code>register</code> method of your <code>AppServiceProvider</code>:</p><pre><code>use App\\Http\\Middleware\\TerminatingMiddleware;

/**
 * Register any application services.
 */
public function register(): void
{
    $this-&gt;app-&gt;singleton(TerminatingMiddleware::class);
}
</code></pre>`,69),d=[r];function o(s,l){return a(),n("div",null,d)}const c=e(i,[["render",o],["__file","middleware.html.vue"]]);export{c as default};
