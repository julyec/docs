import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as t,c as a,a as o}from"./app-8cdff07c.js";const n={},s=o(`<h1 id="http-redirects" tabindex="-1"><a class="header-anchor" href="#http-redirects" aria-hidden="true">#</a> HTTP Redirects</h1><ul><li><a href="#creating-redirects">Creating Redirects</a></li><li><a href="#redirecting-named-routes">Redirecting To Named Routes</a></li><li><a href="#redirecting-controller-actions">Redirecting To Controller Actions</a></li><li><a href="#redirecting-with-flashed-session-data">Redirecting With Flashed Session Data</a></li></ul><p><a name="creating-redirects"></a></p><h2 id="creating-redirects" tabindex="-1"><a class="header-anchor" href="#creating-redirects" aria-hidden="true">#</a> Creating Redirects</h2><p>Redirect responses are instances of the <code>Illuminate\\Http\\RedirectResponse</code> class, and contain the proper headers needed to redirect the user to another URL. There are several ways to generate a <code>RedirectResponse</code> instance. The simplest method is to use the global <code>redirect</code> helper:</p><pre><code>Route::get(&#39;/dashboard&#39;, function () {
    return redirect(&#39;/home/dashboard&#39;);
});
</code></pre><p>Sometimes you may wish to redirect the user to their previous location, such as when a submitted form is invalid. You may do so by using the global <code>back</code> helper function. Since this feature utilizes the <a href="./session">session</a>, make sure the route calling the <code>back</code> function is using the <code>web</code> middleware group or has all of the session middleware applied:</p><pre><code>Route::post(&#39;/user/profile&#39;, function () {
    // Validate the request...

    return back()-&gt;withInput();
});
</code></pre><p><a name="redirecting-named-routes"></a></p><h2 id="redirecting-to-named-routes" tabindex="-1"><a class="header-anchor" href="#redirecting-to-named-routes" aria-hidden="true">#</a> Redirecting To Named Routes</h2><p>When you call the <code>redirect</code> helper with no parameters, an instance of <code>Illuminate\\Routing\\Redirector</code> is returned, allowing you to call any method on the <code>Redirector</code> instance. For example, to generate a <code>RedirectResponse</code> to a named route, you may use the <code>route</code> method:</p><pre><code>return redirect()-&gt;route(&#39;login&#39;);
</code></pre><p>If your route has parameters, you may pass them as the second argument to the <code>route</code> method:</p><pre><code>// For a route with the following URI: profile/{id}

return redirect()-&gt;route(&#39;profile&#39;, [&#39;id&#39; =&gt; 1]);
</code></pre><p>For convenience, Laravel also offers the global <code>to_route</code> function:</p><pre><code>return to_route(&#39;profile&#39;, [&#39;id&#39; =&gt; 1]);
</code></pre><p><a name="populating-parameters-via-eloquent-models"></a></p><h4 id="populating-parameters-via-eloquent-models" tabindex="-1"><a class="header-anchor" href="#populating-parameters-via-eloquent-models" aria-hidden="true">#</a> Populating Parameters Via Eloquent Models</h4><p>If you are redirecting to a route with an &quot;ID&quot; parameter that is being populated from an Eloquent model, you may pass the model itself. The ID will be extracted automatically:</p><pre><code>// For a route with the following URI: profile/{id}

return redirect()-&gt;route(&#39;profile&#39;, [$user]);
</code></pre><p>If you would like to customize the value that is placed in the route parameter, you should override the <code>getRouteKey</code> method on your Eloquent model:</p><pre><code>/**
 * Get the value of the model&#39;s route key.
 */
public function getRouteKey(): mixed
{
    return $this-&gt;slug;
}
</code></pre><p><a name="redirecting-controller-actions"></a></p><h2 id="redirecting-to-controller-actions" tabindex="-1"><a class="header-anchor" href="#redirecting-to-controller-actions" aria-hidden="true">#</a> Redirecting To Controller Actions</h2><p>You may also generate redirects to <a href="./controllers">controller actions</a>. To do so, pass the controller and action name to the <code>action</code> method:</p><pre><code>use App\\Http\\Controllers\\HomeController;

return redirect()-&gt;action([HomeController::class, &#39;index&#39;]);
</code></pre><p>If your controller route requires parameters, you may pass them as the second argument to the <code>action</code> method:</p><pre><code>return redirect()-&gt;action(
    [UserController::class, &#39;profile&#39;], [&#39;id&#39; =&gt; 1]
);
</code></pre><p><a name="redirecting-with-flashed-session-data"></a></p><h2 id="redirecting-with-flashed-session-data" tabindex="-1"><a class="header-anchor" href="#redirecting-with-flashed-session-data" aria-hidden="true">#</a> Redirecting With Flashed Session Data</h2><p>Redirecting to a new URL and <a href="./session#flash-data">flashing data to the session</a> are usually done at the same time. Typically, this is done after successfully performing an action when you flash a success message to the session. For convenience, you may create a <code>RedirectResponse</code> instance and flash data to the session in a single, fluent method chain:</p><pre><code>Route::post(&#39;/user/profile&#39;, function () {
    // Update the user&#39;s profile...

    return redirect(&#39;/dashboard&#39;)-&gt;with(&#39;status&#39;, &#39;Profile updated!&#39;);
});
</code></pre><p>You may use the <code>withInput</code> method provided by the <code>RedirectResponse</code> instance to flash the current request&#39;s input data to the session before redirecting the user to a new location. Once the input has been flashed to the session, you may easily <a href="./requests#retrieving-old-input">retrieve it</a> during the next request:</p><pre><code>return back()-&gt;withInput();
</code></pre><p>After the user is redirected, you may display the flashed message from the <a href="./session">session</a>. For example, using <a href="./blade">Blade syntax</a>:</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>    @<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">session</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;status&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string double-quoted-string">&quot;alert alert-success&quot;</span><span class="token operator">&gt;</span>
            <span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token function">session</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;status&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">}</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
    @<span class="token keyword">endif</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,36),r=[s];function i(d,c){return t(),a("div",null,r)}const u=e(n,[["render",i],["__file","redirects.html.vue"]]);export{u as default};
