import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{r as s,o as r,c as i,b as o,d as e,e as d,a as t}from"./app-8cdff07c.js";const c={},p=t(`<h1 id="http-responses" tabindex="-1"><a class="header-anchor" href="#http-responses" aria-hidden="true">#</a> HTTP Responses</h1><ul><li><a href="#creating-responses">Creating Responses</a><ul><li><a href="#attaching-headers-to-responses">Attaching Headers To Responses</a></li><li><a href="#attaching-cookies-to-responses">Attaching Cookies To Responses</a></li><li><a href="#cookies-and-encryption">Cookies &amp; Encryption</a></li></ul></li><li><a href="#redirects">Redirects</a><ul><li><a href="#redirecting-named-routes">Redirecting To Named Routes</a></li><li><a href="#redirecting-controller-actions">Redirecting To Controller Actions</a></li><li><a href="#redirecting-external-domains">Redirecting To External Domains</a></li><li><a href="#redirecting-with-flashed-session-data">Redirecting With Flashed Session Data</a></li></ul></li><li><a href="#other-response-types">Other Response Types</a><ul><li><a href="#view-responses">View Responses</a></li><li><a href="#json-responses">JSON Responses</a></li><li><a href="#file-downloads">File Downloads</a></li><li><a href="#file-responses">File Responses</a></li></ul></li><li><a href="#response-macros">Response Macros</a></li></ul><p><a name="creating-responses"></a></p><h2 id="creating-responses" tabindex="-1"><a class="header-anchor" href="#creating-responses" aria-hidden="true">#</a> Creating Responses</h2><p><a name="strings-arrays"></a></p><h4 id="strings-arrays" tabindex="-1"><a class="header-anchor" href="#strings-arrays" aria-hidden="true">#</a> Strings &amp; Arrays</h4><p>All routes and controllers should return a response to be sent back to the user&#39;s browser. Laravel provides several different ways to return responses. The most basic response is returning a string from a route or controller. The framework will automatically convert the string into a full HTTP response:</p><pre><code>Route::get(&#39;/&#39;, function () {
    return &#39;Hello World&#39;;
});
</code></pre><p>In addition to returning strings from your routes and controllers, you may also return arrays. The framework will automatically convert the array into a JSON response:</p><pre><code>Route::get(&#39;/&#39;, function () {
    return [1, 2, 3];
});
</code></pre><blockquote><p><strong>Note</strong><br> Did you know you can also return <a href="./eloquent-collections">Eloquent collections</a> from your routes or controllers? They will automatically be converted to JSON. Give it a shot!</p></blockquote><p><a name="response-objects"></a></p><h4 id="response-objects" tabindex="-1"><a class="header-anchor" href="#response-objects" aria-hidden="true">#</a> Response Objects</h4><p>Typically, you won&#39;t just be returning simple strings or arrays from your route actions. Instead, you will be returning full <code>Illuminate\\Http\\Response</code> instances or <a href="./views">views</a>.</p><p>Returning a full <code>Response</code> instance allows you to customize the response&#39;s HTTP status code and headers. A <code>Response</code> instance inherits from the <code>Symfony\\Component\\HttpFoundation\\Response</code> class, which provides a variety of methods for building HTTP responses:</p><pre><code>Route::get(&#39;/home&#39;, function () {
    return response(&#39;Hello World&#39;, 200)
                  -&gt;header(&#39;Content-Type&#39;, &#39;text/plain&#39;);
});
</code></pre><p><a name="eloquent-models-and-collections"></a></p><h4 id="eloquent-models-collections" tabindex="-1"><a class="header-anchor" href="#eloquent-models-collections" aria-hidden="true">#</a> Eloquent Models &amp; Collections</h4><p>You may also return <a href="./eloquent">Eloquent ORM</a> models and collections directly from your routes and controllers. When you do, Laravel will automatically convert the models and collections to JSON responses while respecting the model&#39;s <a href="./eloquent-serialization#hiding-attributes-from-json">hidden attributes</a>:</p><pre><code>use App\\Models\\User;

Route::get(&#39;/user/{user}&#39;, function (User $user) {
    return $user;
});
</code></pre><p><a name="attaching-headers-to-responses"></a></p><h3 id="attaching-headers-to-responses" tabindex="-1"><a class="header-anchor" href="#attaching-headers-to-responses" aria-hidden="true">#</a> Attaching Headers To Responses</h3><p>Keep in mind that most response methods are chainable, allowing for the fluent construction of response instances. For example, you may use the <code>header</code> method to add a series of headers to the response before sending it back to the user:</p><pre><code>return response($content)
            -&gt;header(&#39;Content-Type&#39;, $type)
            -&gt;header(&#39;X-Header-One&#39;, &#39;Header Value&#39;)
            -&gt;header(&#39;X-Header-Two&#39;, &#39;Header Value&#39;);
</code></pre><p>Or, you may use the <code>withHeaders</code> method to specify an array of headers to be added to the response:</p><pre><code>return response($content)
            -&gt;withHeaders([
                &#39;Content-Type&#39; =&gt; $type,
                &#39;X-Header-One&#39; =&gt; &#39;Header Value&#39;,
                &#39;X-Header-Two&#39; =&gt; &#39;Header Value&#39;,
            ]);
</code></pre><p><a name="cache-control-middleware"></a></p><h4 id="cache-control-middleware" tabindex="-1"><a class="header-anchor" href="#cache-control-middleware" aria-hidden="true">#</a> Cache Control Middleware</h4><p>Laravel includes a <code>cache.headers</code> middleware, which may be used to quickly set the <code>Cache-Control</code> header for a group of routes. Directives should be provided using the &quot;snake case&quot; equivalent of the corresponding cache-control directive and should be separated by a semicolon. If <code>etag</code> is specified in the list of directives, an MD5 hash of the response content will automatically be set as the ETag identifier:</p><pre><code>Route::middleware(&#39;cache.headers:public;max_age=2628000;etag&#39;)-&gt;group(function () {
    Route::get(&#39;/privacy&#39;, function () {
        // ...
    });

    Route::get(&#39;/terms&#39;, function () {
        // ...
    });
});
</code></pre><p><a name="attaching-cookies-to-responses"></a></p><h3 id="attaching-cookies-to-responses" tabindex="-1"><a class="header-anchor" href="#attaching-cookies-to-responses" aria-hidden="true">#</a> Attaching Cookies To Responses</h3><p>You may attach a cookie to an outgoing <code>Illuminate\\Http\\Response</code> instance using the <code>cookie</code> method. You should pass the name, value, and the number of minutes the cookie should be considered valid to this method:</p><pre><code>return response(&#39;Hello World&#39;)-&gt;cookie(
    &#39;name&#39;, &#39;value&#39;, $minutes
);
</code></pre>`,34),l=o("code",null,"cookie",-1),h={href:"https://secure.php.net/manual/en/function.setcookie.php",target:"_blank",rel:"noopener noreferrer"},u=t(`<pre><code>return response(&#39;Hello World&#39;)-&gt;cookie(
    &#39;name&#39;, &#39;value&#39;, $minutes, $path, $domain, $secure, $httpOnly
);
</code></pre><p>If you would like to ensure that a cookie is sent with the outgoing response but you do not yet have an instance of that response, you can use the <code>Cookie</code> facade to &quot;queue&quot; cookies for attachment to the response when it is sent. The <code>queue</code> method accepts the arguments needed to create a cookie instance. These cookies will be attached to the outgoing response before it is sent to the browser:</p><pre><code>use Illuminate\\Support\\Facades\\Cookie;

Cookie::queue(&#39;name&#39;, &#39;value&#39;, $minutes);
</code></pre><p><a name="generating-cookie-instances"></a></p><h4 id="generating-cookie-instances" tabindex="-1"><a class="header-anchor" href="#generating-cookie-instances" aria-hidden="true">#</a> Generating Cookie Instances</h4><p>If you would like to generate a <code>Symfony\\Component\\HttpFoundation\\Cookie</code> instance that can be attached to a response instance at a later time, you may use the global <code>cookie</code> helper. This cookie will not be sent back to the client unless it is attached to a response instance:</p><pre><code>$cookie = cookie(&#39;name&#39;, &#39;value&#39;, $minutes);

return response(&#39;Hello World&#39;)-&gt;cookie($cookie);
</code></pre><p><a name="expiring-cookies-early"></a></p><h4 id="expiring-cookies-early" tabindex="-1"><a class="header-anchor" href="#expiring-cookies-early" aria-hidden="true">#</a> Expiring Cookies Early</h4><p>You may remove a cookie by expiring it via the <code>withoutCookie</code> method of an outgoing response:</p><pre><code>return response(&#39;Hello World&#39;)-&gt;withoutCookie(&#39;name&#39;);
</code></pre><p>If you do not yet have an instance of the outgoing response, you may use the <code>Cookie</code> facade&#39;s <code>expire</code> method to expire a cookie:</p><pre><code>Cookie::expire(&#39;name&#39;);
</code></pre><p><a name="cookies-and-encryption"></a></p><h3 id="cookies-encryption" tabindex="-1"><a class="header-anchor" href="#cookies-encryption" aria-hidden="true">#</a> Cookies &amp; Encryption</h3><p>By default, all cookies generated by Laravel are encrypted and signed so that they can&#39;t be modified or read by the client. If you would like to disable encryption for a subset of cookies generated by your application, you may use the <code>$except</code> property of the <code>App\\Http\\Middleware\\EncryptCookies</code> middleware, which is located in the <code>app/Http/Middleware</code> directory:</p><pre><code>/**
 * The names of the cookies that should not be encrypted.
 *
 * @var array
 */
protected $except = [
    &#39;cookie_name&#39;,
];
</code></pre><p><a name="redirects"></a></p><h2 id="redirects" tabindex="-1"><a class="header-anchor" href="#redirects" aria-hidden="true">#</a> Redirects</h2><p>Redirect responses are instances of the <code>Illuminate\\Http\\RedirectResponse</code> class, and contain the proper headers needed to redirect the user to another URL. There are several ways to generate a <code>RedirectResponse</code> instance. The simplest method is to use the global <code>redirect</code> helper:</p><pre><code>Route::get(&#39;/dashboard&#39;, function () {
    return redirect(&#39;home/dashboard&#39;);
});
</code></pre><p>Sometimes you may wish to redirect the user to their previous location, such as when a submitted form is invalid. You may do so by using the global <code>back</code> helper function. Since this feature utilizes the <a href="./session">session</a>, make sure the route calling the <code>back</code> function is using the <code>web</code> middleware group:</p><pre><code>Route::post(&#39;/user/profile&#39;, function () {
    // Validate the request...

    return back()-&gt;withInput();
});
</code></pre><p><a name="redirecting-named-routes"></a></p><h3 id="redirecting-to-named-routes" tabindex="-1"><a class="header-anchor" href="#redirecting-to-named-routes" aria-hidden="true">#</a> Redirecting To Named Routes</h3><p>When you call the <code>redirect</code> helper with no parameters, an instance of <code>Illuminate\\Routing\\Redirector</code> is returned, allowing you to call any method on the <code>Redirector</code> instance. For example, to generate a <code>RedirectResponse</code> to a named route, you may use the <code>route</code> method:</p><pre><code>return redirect()-&gt;route(&#39;login&#39;);
</code></pre><p>If your route has parameters, you may pass them as the second argument to the <code>route</code> method:</p><pre><code>// For a route with the following URI: /profile/{id}

return redirect()-&gt;route(&#39;profile&#39;, [&#39;id&#39; =&gt; 1]);
</code></pre><p><a name="populating-parameters-via-eloquent-models"></a></p><h4 id="populating-parameters-via-eloquent-models" tabindex="-1"><a class="header-anchor" href="#populating-parameters-via-eloquent-models" aria-hidden="true">#</a> Populating Parameters Via Eloquent Models</h4><p>If you are redirecting to a route with an &quot;ID&quot; parameter that is being populated from an Eloquent model, you may pass the model itself. The ID will be extracted automatically:</p><pre><code>// For a route with the following URI: /profile/{id}

return redirect()-&gt;route(&#39;profile&#39;, [$user]);
</code></pre><p>If you would like to customize the value that is placed in the route parameter, you can specify the column in the route parameter definition (<code>/profile/{id:slug}</code>) or you can override the <code>getRouteKey</code> method on your Eloquent model:</p><pre><code>/**
 * Get the value of the model&#39;s route key.
 */
public function getRouteKey(): mixed
{
    return $this-&gt;slug;
}
</code></pre><p><a name="redirecting-controller-actions"></a></p><h3 id="redirecting-to-controller-actions" tabindex="-1"><a class="header-anchor" href="#redirecting-to-controller-actions" aria-hidden="true">#</a> Redirecting To Controller Actions</h3><p>You may also generate redirects to <a href="./controllers">controller actions</a>. To do so, pass the controller and action name to the <code>action</code> method:</p><pre><code>use App\\Http\\Controllers\\UserController;

return redirect()-&gt;action([UserController::class, &#39;index&#39;]);
</code></pre><p>If your controller route requires parameters, you may pass them as the second argument to the <code>action</code> method:</p><pre><code>return redirect()-&gt;action(
    [UserController::class, &#39;profile&#39;], [&#39;id&#39; =&gt; 1]
);
</code></pre><p><a name="redirecting-external-domains"></a></p><h3 id="redirecting-to-external-domains" tabindex="-1"><a class="header-anchor" href="#redirecting-to-external-domains" aria-hidden="true">#</a> Redirecting To External Domains</h3><p>Sometimes you may need to redirect to a domain outside of your application. You may do so by calling the <code>away</code> method, which creates a <code>RedirectResponse</code> without any additional URL encoding, validation, or verification:</p><pre><code>return redirect()-&gt;away(&#39;https://www.google.com&#39;);
</code></pre><p><a name="redirecting-with-flashed-session-data"></a></p><h3 id="redirecting-with-flashed-session-data" tabindex="-1"><a class="header-anchor" href="#redirecting-with-flashed-session-data" aria-hidden="true">#</a> Redirecting With Flashed Session Data</h3><p>Redirecting to a new URL and <a href="./session#flash-data">flashing data to the session</a> are usually done at the same time. Typically, this is done after successfully performing an action when you flash a success message to the session. For convenience, you may create a <code>RedirectResponse</code> instance and flash data to the session in a single, fluent method chain:</p><pre><code>Route::post(&#39;/user/profile&#39;, function () {
    // ...

    return redirect(&#39;dashboard&#39;)-&gt;with(&#39;status&#39;, &#39;Profile updated!&#39;);
});
</code></pre><p>After the user is redirected, you may display the flashed message from the <a href="./session">session</a>. For example, using <a href="./blade">Blade syntax</a>:</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>    @<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">session</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;status&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string double-quoted-string">&quot;alert alert-success&quot;</span><span class="token operator">&gt;</span>
            <span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token function">session</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;status&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">}</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
    @<span class="token keyword">endif</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="redirecting-with-input"></a></p><h4 id="redirecting-with-input" tabindex="-1"><a class="header-anchor" href="#redirecting-with-input" aria-hidden="true">#</a> Redirecting With Input</h4><p>You may use the <code>withInput</code> method provided by the <code>RedirectResponse</code> instance to flash the current request&#39;s input data to the session before redirecting the user to a new location. This is typically done if the user has encountered a validation error. Once the input has been flashed to the session, you may easily <a href="./requests#retrieving-old-input">retrieve it</a> during the next request to repopulate the form:</p><pre><code>return back()-&gt;withInput();
</code></pre><p><a name="other-response-types"></a></p><h2 id="other-response-types" tabindex="-1"><a class="header-anchor" href="#other-response-types" aria-hidden="true">#</a> Other Response Types</h2><p>The <code>response</code> helper may be used to generate other types of response instances. When the <code>response</code> helper is called without arguments, an implementation of the <code>Illuminate\\Contracts\\Routing\\ResponseFactory</code> <a href="./contracts">contract</a> is returned. This contract provides several helpful methods for generating responses.</p><p><a name="view-responses"></a></p><h3 id="view-responses" tabindex="-1"><a class="header-anchor" href="#view-responses" aria-hidden="true">#</a> View Responses</h3><p>If you need control over the response&#39;s status and headers but also need to return a <a href="./views">view</a> as the response&#39;s content, you should use the <code>view</code> method:</p><pre><code>return response()
            -&gt;view(&#39;hello&#39;, $data, 200)
            -&gt;header(&#39;Content-Type&#39;, $type);
</code></pre><p>Of course, if you do not need to pass a custom HTTP status code or custom headers, you may use the global <code>view</code> helper function.</p><p><a name="json-responses"></a></p><h3 id="json-responses" tabindex="-1"><a class="header-anchor" href="#json-responses" aria-hidden="true">#</a> JSON Responses</h3><p>The <code>json</code> method will automatically set the <code>Content-Type</code> header to <code>application/json</code>, as well as convert the given array to JSON using the <code>json_encode</code> PHP function:</p><pre><code>return response()-&gt;json([
    &#39;name&#39; =&gt; &#39;Abigail&#39;,
    &#39;state&#39; =&gt; &#39;CA&#39;,
]);
</code></pre><p>If you would like to create a JSONP response, you may use the <code>json</code> method in combination with the <code>withCallback</code> method:</p><pre><code>return response()
            -&gt;json([&#39;name&#39; =&gt; &#39;Abigail&#39;, &#39;state&#39; =&gt; &#39;CA&#39;])
            -&gt;withCallback($request-&gt;input(&#39;callback&#39;));
</code></pre><p><a name="file-downloads"></a></p><h3 id="file-downloads" tabindex="-1"><a class="header-anchor" href="#file-downloads" aria-hidden="true">#</a> File Downloads</h3><p>The <code>download</code> method may be used to generate a response that forces the user&#39;s browser to download the file at the given path. The <code>download</code> method accepts a filename as the second argument to the method, which will determine the filename that is seen by the user downloading the file. Finally, you may pass an array of HTTP headers as the third argument to the method:</p><pre><code>return response()-&gt;download($pathToFile);

return response()-&gt;download($pathToFile, $name, $headers);
</code></pre><blockquote><p><strong>Warning</strong><br> Symfony HttpFoundation, which manages file downloads, requires the file being downloaded to have an ASCII filename.</p></blockquote><p><a name="streamed-downloads"></a></p><h4 id="streamed-downloads" tabindex="-1"><a class="header-anchor" href="#streamed-downloads" aria-hidden="true">#</a> Streamed Downloads</h4><p>Sometimes you may wish to turn the string response of a given operation into a downloadable response without having to write the contents of the operation to disk. You may use the <code>streamDownload</code> method in this scenario. This method accepts a callback, filename, and an optional array of headers as its arguments:</p><pre><code>use App\\Services\\GitHub;

return response()-&gt;streamDownload(function () {
    echo GitHub::api(&#39;repo&#39;)
                -&gt;contents()
                -&gt;readme(&#39;laravel&#39;, &#39;laravel&#39;)[&#39;contents&#39;];
}, &#39;laravel-readme.md&#39;);
</code></pre><p><a name="file-responses"></a></p><h3 id="file-responses" tabindex="-1"><a class="header-anchor" href="#file-responses" aria-hidden="true">#</a> File Responses</h3><p>The <code>file</code> method may be used to display a file, such as an image or PDF, directly in the user&#39;s browser instead of initiating a download. This method accepts the path to the file as its first argument and an array of headers as its second argument:</p><pre><code>return response()-&gt;file($pathToFile);

return response()-&gt;file($pathToFile, $headers);
</code></pre><p><a name="response-macros"></a></p><h2 id="response-macros" tabindex="-1"><a class="header-anchor" href="#response-macros" aria-hidden="true">#</a> Response Macros</h2><p>If you would like to define a custom response that you can re-use in a variety of your routes and controllers, you may use the <code>macro</code> method on the <code>Response</code> facade. Typically, you should call this method from the <code>boot</code> method of one of your application&#39;s <a href="./providers">service providers</a>, such as the <code>App\\Providers\\AppServiceProvider</code> service provider:</p><pre><code>&lt;?php

namespace App\\Providers;

use Illuminate\\Support\\Facades\\Response;
use Illuminate\\Support\\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        Response::macro(&#39;caps&#39;, function (string $value) {
            return Response::make(strtoupper($value));
        });
    }
}
</code></pre><p>The <code>macro</code> function accepts a name as its first argument and a closure as its second argument. The macro&#39;s closure will be executed when calling the macro name from a <code>ResponseFactory</code> implementation or the <code>response</code> helper:</p><pre><code>return response()-&gt;caps(&#39;foo&#39;);
</code></pre>`,88);function m(g,f){const a=s("ExternalLinkIcon");return r(),i("div",null,[p,o("p",null,[e("The "),l,e(" method also accepts a few more arguments which are used less frequently. Generally, these arguments have the same purpose and meaning as the arguments that would be given to PHP's native "),o("a",h,[e("setcookie"),d(a)]),e(" method:")]),u])}const b=n(c,[["render",m],["__file","responses.html.vue"]]);export{b as default};
