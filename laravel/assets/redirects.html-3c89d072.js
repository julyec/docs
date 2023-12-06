import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as n,c as t,a}from"./app-06635a3b.js";const o={},s=a(`<h1 id="路由重定向" tabindex="-1"><a class="header-anchor" href="#路由重定向" aria-hidden="true">#</a> 路由重定向</h1><ul><li><a href="#creating-redirects">创建重定向</a></li><li><a href="#redirecting-named-routes">重定向到命名路由</a></li><li><a href="#redirecting-controller-actions">重定向到控制器动作</a></li><li><a href="#redirecting-with-flashed-session-data">使用闪存会话数据重定向</a></li></ul><p><a name="creating-redirects"></a></p><h2 id="creating-redirects" tabindex="-1"><a class="header-anchor" href="#creating-redirects" aria-hidden="true">#</a> Creating Redirects</h2><p>重定向响应是类 <code>Illuminate\\Http\\RedirectResponse</code> 的实例, 包含了重定向用户到其他 URL 所需要的合适头信息。 有很多方式生成 <code>RedirectResponse</code> 实例.。最简单的方法是使用全局的 <code>redirect</code> 辅助函数：</p><pre><code>Route::get(&#39;/dashboard&#39;, function () {
    return redirect(&#39;/home/dashboard&#39;);
});
</code></pre><p>有时候你希望将用户重定向到他们的上一个访问位置，例如当提交的表单不合法时，你就可以通过全局的<code>back</code>辅助函数来这样做。因为该特性使用了 <a href="./session">session</a>，请确保路由调用 <code>back</code> 函数时使用了 <code>web</code> 中间件组或者应用了全部的 session 中间件：</p><pre><code>Route::post(&#39;/user/profile&#39;, function () {
    // Validate the request...

    return back()-&gt;withInput();
});
</code></pre><p><a name="redirecting-named-routes"></a></p><h2 id="重定向到命名路由" tabindex="-1"><a class="header-anchor" href="#重定向到命名路由" aria-hidden="true">#</a> 重定向到命名路由</h2><p>当你不带参数调用 <code>redirect</code> 辅助函数时，会返回一个 <code>Illuminate\\Routing\\Redirector</code> 实例，它允许你调用 <code>Redirector</code> 实例上的任何方法。例如，你可以这样使用 <code>route</code> 方法为命名路由生成一个 RedirectResponse ：</p><pre><code>return redirect()-&gt;route(&#39;login&#39;);
</code></pre><p>如果你的路由包含参数，你可以把它们当做第二参数传给 <code>route</code> 方法：</p><pre><code>// For a route with the following URI: profile/{id}

return redirect()-&gt;route(&#39;profile&#39;, [&#39;id&#39; =&gt; 1]);
</code></pre><p>为了方便起见，Laravel还提供全局 <code>to_route</code> 辅助函数：</p><pre><code>return to_route(&#39;profile&#39;, [&#39;id&#39; =&gt; 1]);
</code></pre><p><a name="populating-parameters-via-eloquent-models"></a></p><h4 id="通过-eloquent-模型填充参数" tabindex="-1"><a class="header-anchor" href="#通过-eloquent-模型填充参数" aria-hidden="true">#</a> 通过 Eloquent 模型填充参数</h4><p>如果你要携带一个从 Eloquent 模型中填充过来的 &quot;ID&quot; 参数进行重定向，你可以简单的把该模型本身传进去。 ID 会被自动解析：</p><pre><code>// For a route with the following URI: profile/{id}

return redirect()-&gt;route(&#39;profile&#39;, [$user]);
</code></pre><p>如果你想自定义路由参数的值，你应该在 Eloquent 模型中重写 <code>getRouteKey</code> 方法：</p><pre><code>/**
 * Get the value of the model&#39;s route key.
 */
public function getRouteKey(): mixed
{
    return $this-&gt;slug;
}
</code></pre><p><a name="redirecting-controller-actions"></a></p><h2 id="重定向到控制器动作" tabindex="-1"><a class="header-anchor" href="#重定向到控制器动作" aria-hidden="true">#</a> 重定向到控制器动作</h2><p>您还可以生成指向<a href="./controllers">控制器动作</a>操作的重定向。为此，请将控制器和操作名称传递给方法：<code>action</code></p><pre><code>use App\\Http\\Controllers\\HomeController;

return redirect()-&gt;action([HomeController::class, &#39;index&#39;]);
</code></pre><p>如果您的控制器路由需要参数，您可以将它们作为第二个参数传递给方法：<code>action</code></p><pre><code>return redirect()-&gt;action(
    [UserController::class, &#39;profile&#39;], [&#39;id&#39; =&gt; 1]
);
</code></pre><p><a name="redirecting-with-flashed-session-data"></a></p><h2 id="使用闪存会话数据重定向" tabindex="-1"><a class="header-anchor" href="#使用闪存会话数据重定向" aria-hidden="true">#</a> 使用闪存会话数据重定向</h2><p>重定向到新 URL 和 <a href="./session#flash-data">flashing data to the session</a> 是同时完成的。通常，这是在将成功消息刷入会话时成功执行操作后完成的。为方便起见，您可以在单个流畅的方法链中创建一个实例并将数据闪存到会话中：<code>RedirectResponse</code></p><pre><code>Route::post(&#39;/user/profile&#39;, function () {
    // Update the user&#39;s profile...

    return redirect(&#39;/dashboard&#39;)-&gt;with(&#39;status&#39;, &#39;Profile updated!&#39;);
});
</code></pre><p>您可以使用 <code>RedirectResponse</code> 实例提供的方法将当前请求的输入数据刷写到会话，然后再将用户重定向到新位置。一旦输入被刷入会话，你就可以在下一个请求中轻松检索它：withInputRedirectResponse</p><p>在将用户重定向到新位置之前，您可以使用 <code>RedirectResponse</code> 实例提供的 <code>withInput</code> 方法将当前请求的输入数据闪存到会话。 一旦输入被闪存到会话中，您就可以在下一个请求中轻松地[检索它]（./requests#retrieving-old-input）：</p><pre><code>return back()-&gt;withInput();
</code></pre><p>当用户被重定向后，你可以从 <a href="./session">session</a> 中显示闪存消息。例如，使用<a href="./blade">Blade语法</a>。</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>    @<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">session</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;status&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string double-quoted-string">&quot;alert alert-success&quot;</span><span class="token operator">&gt;</span>
            <span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token function">session</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;status&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">}</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
    @<span class="token keyword">endif</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,37),r=[s];function c(i,d){return n(),t("div",null,r)}const u=e(o,[["render",c],["__file","redirects.html.vue"]]);export{u as default};
