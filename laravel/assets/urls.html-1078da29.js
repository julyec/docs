import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as t,c as o,a}from"./app-8cdff07c.js";const r={},n=a(`<h1 id="url-generation" tabindex="-1"><a class="header-anchor" href="#url-generation" aria-hidden="true">#</a> URL Generation</h1><ul><li><a href="#introduction">Introduction</a></li><li><a href="#the-basics">The Basics</a><ul><li><a href="#generating-urls">Generating URLs</a></li><li><a href="#accessing-the-current-url">Accessing The Current URL</a></li></ul></li><li><a href="#urls-for-named-routes">URLs For Named Routes</a><ul><li><a href="#signed-urls">Signed URLs</a></li></ul></li><li><a href="#urls-for-controller-actions">URLs For Controller Actions</a></li><li><a href="#default-values">Default Values</a></li></ul><p><a name="introduction"></a></p><h2 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h2><p>Laravel provides several helpers to assist you in generating URLs for your application. These helpers are primarily helpful when building links in your templates and API responses, or when generating redirect responses to another part of your application.</p><p><a name="the-basics"></a></p><h2 id="the-basics" tabindex="-1"><a class="header-anchor" href="#the-basics" aria-hidden="true">#</a> The Basics</h2><p><a name="generating-urls"></a></p><h3 id="generating-urls" tabindex="-1"><a class="header-anchor" href="#generating-urls" aria-hidden="true">#</a> Generating URLs</h3><p>The <code>url</code> helper may be used to generate arbitrary URLs for your application. The generated URL will automatically use the scheme (HTTP or HTTPS) and host from the current request being handled by the application:</p><pre><code>$post = App\\Models\\Post::find(1);

echo url(&quot;/posts/{$post-&gt;id}&quot;);

// http://example.com/posts/1
</code></pre><p><a name="accessing-the-current-url"></a></p><h3 id="accessing-the-current-url" tabindex="-1"><a class="header-anchor" href="#accessing-the-current-url" aria-hidden="true">#</a> Accessing The Current URL</h3><p>If no path is provided to the <code>url</code> helper, an <code>Illuminate\\Routing\\UrlGenerator</code> instance is returned, allowing you to access information about the current URL:</p><pre><code>// Get the current URL without the query string...
echo url()-&gt;current();

// Get the current URL including the query string...
echo url()-&gt;full();

// Get the full URL for the previous request...
echo url()-&gt;previous();
</code></pre><p>Each of these methods may also be accessed via the <code>URL</code> <a href="./facades">facade</a>:</p><pre><code>use Illuminate\\Support\\Facades\\URL;

echo URL::current();
</code></pre><p><a name="urls-for-named-routes"></a></p><h2 id="urls-for-named-routes" tabindex="-1"><a class="header-anchor" href="#urls-for-named-routes" aria-hidden="true">#</a> URLs For Named Routes</h2><p>The <code>route</code> helper may be used to generate URLs to <a href="./routing#named-routes">named routes</a>. Named routes allow you to generate URLs without being coupled to the actual URL defined on the route. Therefore, if the route&#39;s URL changes, no changes need to be made to your calls to the <code>route</code> function. For example, imagine your application contains a route defined like the following:</p><pre><code>Route::get(&#39;/post/{post}&#39;, function (Post $post) {
    // ...
})-&gt;name(&#39;post.show&#39;);
</code></pre><p>To generate a URL to this route, you may use the <code>route</code> helper like so:</p><pre><code>echo route(&#39;post.show&#39;, [&#39;post&#39; =&gt; 1]);

// http://example.com/post/1
</code></pre><p>Of course, the <code>route</code> helper may also be used to generate URLs for routes with multiple parameters:</p><pre><code>Route::get(&#39;/post/{post}/comment/{comment}&#39;, function (Post $post, Comment $comment) {
    // ...
})-&gt;name(&#39;comment.show&#39;);

echo route(&#39;comment.show&#39;, [&#39;post&#39; =&gt; 1, &#39;comment&#39; =&gt; 3]);

// http://example.com/post/1/comment/3
</code></pre><p>Any additional array elements that do not correspond to the route&#39;s definition parameters will be added to the URL&#39;s query string:</p><pre><code>echo route(&#39;post.show&#39;, [&#39;post&#39; =&gt; 1, &#39;search&#39; =&gt; &#39;rocket&#39;]);

// http://example.com/post/1?search=rocket
</code></pre><p><a name="eloquent-models"></a></p><h4 id="eloquent-models" tabindex="-1"><a class="header-anchor" href="#eloquent-models" aria-hidden="true">#</a> Eloquent Models</h4><p>You will often be generating URLs using the route key (typically the primary key) of <a href="./eloquent">Eloquent models</a>. For this reason, you may pass Eloquent models as parameter values. The <code>route</code> helper will automatically extract the model&#39;s route key:</p><pre><code>echo route(&#39;post.show&#39;, [&#39;post&#39; =&gt; $post]);
</code></pre><p><a name="signed-urls"></a></p><h3 id="signed-urls" tabindex="-1"><a class="header-anchor" href="#signed-urls" aria-hidden="true">#</a> Signed URLs</h3><p>Laravel allows you to easily create &quot;signed&quot; URLs to named routes. These URLs have a &quot;signature&quot; hash appended to the query string which allows Laravel to verify that the URL has not been modified since it was created. Signed URLs are especially useful for routes that are publicly accessible yet need a layer of protection against URL manipulation.</p><p>For example, you might use signed URLs to implement a public &quot;unsubscribe&quot; link that is emailed to your customers. To create a signed URL to a named route, use the <code>signedRoute</code> method of the <code>URL</code> facade:</p><pre><code>use Illuminate\\Support\\Facades\\URL;

return URL::signedRoute(&#39;unsubscribe&#39;, [&#39;user&#39; =&gt; 1]);
</code></pre><p>You may exclude the domain from the signed URL hash by providing the <code>absolute</code> argument to the <code>signedRoute</code> method:</p><pre><code>return URL::signedRoute(&#39;unsubscribe&#39;, [&#39;user&#39; =&gt; 1], absolute: false);
</code></pre><p>If you would like to generate a temporary signed route URL that expires after a specified amount of time, you may use the <code>temporarySignedRoute</code> method. When Laravel validates a temporary signed route URL, it will ensure that the expiration timestamp that is encoded into the signed URL has not elapsed:</p><pre><code>use Illuminate\\Support\\Facades\\URL;

return URL::temporarySignedRoute(
    &#39;unsubscribe&#39;, now()-&gt;addMinutes(30), [&#39;user&#39; =&gt; 1]
);
</code></pre><p><a name="validating-signed-route-requests"></a></p><h4 id="validating-signed-route-requests" tabindex="-1"><a class="header-anchor" href="#validating-signed-route-requests" aria-hidden="true">#</a> Validating Signed Route Requests</h4><p>To verify that an incoming request has a valid signature, you should call the <code>hasValidSignature</code> method on the incoming <code>Illuminate\\Http\\Request</code> instance:</p><pre><code>use Illuminate\\Http\\Request;

Route::get(&#39;/unsubscribe/{user}&#39;, function (Request $request) {
    if (! $request-&gt;hasValidSignature()) {
        abort(401);
    }

    // ...
})-&gt;name(&#39;unsubscribe&#39;);
</code></pre><p>Sometimes, you may need to allow your application&#39;s frontend to append data to a signed URL, such as when performing client-side pagination. Therefore, you can specify request query parameters that should be ignored when validating a signed URL using the <code>hasValidSignatureWhileIgnoring</code> method. Remember, ignoring parameters allows anyone to modify those parameters on the request:</p><pre><code>if (! $request-&gt;hasValidSignatureWhileIgnoring([&#39;page&#39;, &#39;order&#39;])) {
    abort(401);
}
</code></pre><p>Instead of validating signed URLs using the incoming request instance, you may assign the <code>Illuminate\\Routing\\Middleware\\ValidateSignature</code> <a href="./middleware">middleware</a> to the route. If it is not already present, you may assign this middleware an alias in your HTTP kernel&#39;s <code>$middlewareAliases</code> array:</p><pre><code>/**
 * The application&#39;s middleware aliases.
 *
 * Aliases may be used to conveniently assign middleware to routes and groups.
 *
 * @var array&lt;string, class-string|string&gt;
 */
protected $middlewareAliases = [
    &#39;signed&#39; =&gt; \\Illuminate\\Routing\\Middleware\\ValidateSignature::class,
];
</code></pre><p>Once you have registered the middleware in your kernel, you may attach it to a route. If the incoming request does not have a valid signature, the middleware will automatically return a <code>403</code> HTTP response:</p><pre><code>Route::post(&#39;/unsubscribe/{user}&#39;, function (Request $request) {
    // ...
})-&gt;name(&#39;unsubscribe&#39;)-&gt;middleware(&#39;signed&#39;);
</code></pre><p>If your signed URLs do not include the domain in the URL hash, you should provide the <code>relative</code> argument to the middleware:</p><pre><code>Route::post(&#39;/unsubscribe/{user}&#39;, function (Request $request) {
    // ...
})-&gt;name(&#39;unsubscribe&#39;)-&gt;middleware(&#39;signed:relative&#39;);
</code></pre><p><a name="responding-to-invalid-signed-routes"></a></p><h4 id="responding-to-invalid-signed-routes" tabindex="-1"><a class="header-anchor" href="#responding-to-invalid-signed-routes" aria-hidden="true">#</a> Responding To Invalid Signed Routes</h4><p>When someone visits a signed URL that has expired, they will receive a generic error page for the <code>403</code> HTTP status code. However, you can customize this behavior by defining a custom &quot;renderable&quot; closure for the <code>InvalidSignatureException</code> exception in your exception handler. This closure should return an HTTP response:</p><pre><code>use Illuminate\\Routing\\Exceptions\\InvalidSignatureException;

/**
 * Register the exception handling callbacks for the application.
 */
public function register(): void
{
    $this-&gt;renderable(function (InvalidSignatureException $e) {
        return response()-&gt;view(&#39;error.link-expired&#39;, [], 403);
    });
}
</code></pre><p><a name="urls-for-controller-actions"></a></p><h2 id="urls-for-controller-actions" tabindex="-1"><a class="header-anchor" href="#urls-for-controller-actions" aria-hidden="true">#</a> URLs For Controller Actions</h2><p>The <code>action</code> function generates a URL for the given controller action:</p><pre><code>use App\\Http\\Controllers\\HomeController;

$url = action([HomeController::class, &#39;index&#39;]);
</code></pre><p>If the controller method accepts route parameters, you may pass an associative array of route parameters as the second argument to the function:</p><pre><code>$url = action([UserController::class, &#39;profile&#39;], [&#39;id&#39; =&gt; 1]);
</code></pre><p><a name="default-values"></a></p><h2 id="default-values" tabindex="-1"><a class="header-anchor" href="#default-values" aria-hidden="true">#</a> Default Values</h2><p>For some applications, you may wish to specify request-wide default values for certain URL parameters. For example, imagine many of your routes define a <code>{locale}</code> parameter:</p><pre><code>Route::get(&#39;/{locale}/posts&#39;, function () {
    // ...
})-&gt;name(&#39;post.index&#39;);
</code></pre><p>It is cumbersome to always pass the <code>locale</code> every time you call the <code>route</code> helper. So, you may use the <code>URL::defaults</code> method to define a default value for this parameter that will always be applied during the current request. You may wish to call this method from a <a href="./middleware#assigning-middleware-to-routes">route middleware</a> so that you have access to the current request:</p><pre><code>&lt;?php

namespace App\\Http\\Middleware;

use Closure;
use Illuminate\\Http\\Request;
use Illuminate\\Support\\Facades\\URL;
use Symfony\\Component\\HttpFoundation\\Response;

class SetDefaultLocaleForUrls
{
    /**
     * Handle an incoming request.
     *
     * @param  \\Closure(\\Illuminate\\Http\\Request): (\\Symfony\\Component\\HttpFoundation\\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        URL::defaults([&#39;locale&#39; =&gt; $request-&gt;user()-&gt;locale]);

        return $next($request);
    }
}
</code></pre><p>Once the default value for the <code>locale</code> parameter has been set, you are no longer required to pass its value when generating URLs via the <code>route</code> helper.</p><p><a name="url-defaults-middleware-priority"></a></p><h4 id="url-defaults-middleware-priority" tabindex="-1"><a class="header-anchor" href="#url-defaults-middleware-priority" aria-hidden="true">#</a> URL Defaults &amp; Middleware Priority</h4><p>Setting URL default values can interfere with Laravel&#39;s handling of implicit model bindings. Therefore, you should <a href="./middleware#sorting-middleware">prioritize your middleware</a> that set URL defaults to be executed before Laravel&#39;s own <code>SubstituteBindings</code> middleware. You can accomplish this by making sure your middleware occurs before the <code>SubstituteBindings</code> middleware within the <code>$middlewarePriority</code> property of your application&#39;s HTTP kernel.</p><p>The <code>$middlewarePriority</code> property is defined in the base <code>Illuminate\\Foundation\\Http\\Kernel</code> class. You may copy its definition from that class and overwrite it in your application&#39;s HTTP kernel in order to modify it:</p><pre><code>/**
 * The priority-sorted list of middleware.
 *
 * This forces non-global middleware to always be in the given order.
 *
 * @var array
 */
protected $middlewarePriority = [
    // ...
     \\App\\Http\\Middleware\\SetDefaultLocaleForUrls::class,
     \\Illuminate\\Routing\\Middleware\\SubstituteBindings::class,
     // ...
];
</code></pre>`,74),i=[n];function s(d,u){return t(),o("div",null,i)}const p=e(r,[["render",s],["__file","urls.html.vue"]]);export{p as default};
