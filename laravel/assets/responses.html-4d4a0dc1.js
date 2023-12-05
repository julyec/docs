import{_ as r}from"./plugin-vue_export-helper-c27b6911.js";import{r as s,o as t,c as d,b as o,d as e,e as c,a as n}from"./app-8cdff07c.js";const i={},p=n(`<h1 id="响应" tabindex="-1"><a class="header-anchor" href="#响应" aria-hidden="true">#</a> 响应</h1><ul><li><a href="#creating-responses">创建响应</a><ul><li><a href="#attaching-headers-to-responses">添加响应头</a></li><li><a href="#attaching-cookies-to-responses">添加响应 Cookies</a></li><li><a href="#cookies-and-encryption">Cookies &amp; 加密</a></li></ul></li><li><a href="#redirects">重定向</a><ul><li><a href="#redirecting-named-routes">重定向到命名路由</a></li><li><a href="#redirecting-controller-actions">重定向到控制器方法</a></li><li><a href="#redirecting-external-domains">重定向到外部域名</a></li><li><a href="#redirecting-with-flashed-session-data">重定向并使用闪存的 Session 数据</a></li></ul></li><li><a href="#other-response-types">其它响应类型</a><ul><li><a href="#view-responses">视图响应</a></li><li><a href="#json-responses">JSON 响应</a></li><li><a href="#file-downloads">文件下载</a></li><li><a href="#file-responses">文件响应</a></li></ul></li><li><a href="#response-macros">响应宏</a></li></ul><p><a name="creating-responses"></a></p><h2 id="创建响应" tabindex="-1"><a class="header-anchor" href="#创建响应" aria-hidden="true">#</a> 创建响应</h2><p><a name="strings-arrays"></a></p><h4 id="字符串-数组" tabindex="-1"><a class="header-anchor" href="#字符串-数组" aria-hidden="true">#</a> 字符串 &amp; 数组</h4><p>所有路由和控制器处理完业务逻辑之后都会返回响应到用户的浏览器，Laravel 提供了多种不同的响应方式，其中最基本就是从路由或控制器返回一个简单的字符串，框架会自动将这个字符串转化为一个完整的 HTTP 响应：</p><pre><code>Route::get(&#39;/&#39;, function () {
    return &#39;Hello World&#39;;
});
</code></pre><p>除了从路由和控制器返回字符串之外，你还可以返回数组。 框架会自动将数组转换为 JSON 响应：</p><pre><code>Route::get(&#39;/&#39;, function () {
    return [1, 2, 3];
});
</code></pre><blockquote><p><strong>技巧</strong><br> 你知道从路由或控制器还可以返回 <a href="./eloquent-collections">Eloquent 集合</a>吗？他们也会自动转化为 JSON 响应！</p></blockquote><p><a name="response-objects"></a></p><h4 id="response-对象" tabindex="-1"><a class="header-anchor" href="#response-对象" aria-hidden="true">#</a> Response 对象</h4><p>通常情况下会只返回简单的字符串或数组，大多数时候，需要返回一个完整的<code>Illuminate\\Http\\Response</code>实例或是<a href="./views">视图</a>.</p><p>返回一个完整的<code>Response</code> 实例允许你自定义返回的 HTTP 状态码和返回头信息。<code>Response</code>实例继承自<code>Symfony\\Component\\HttpFoundation\\Response</code>类，该类提供了各种构建 HTTP 响应的方法：</p><pre><code>Route::get(&#39;/home&#39;, function () {
    return response(&#39;Hello World&#39;, 200)
                  -&gt;header(&#39;Content-Type&#39;, &#39;text/plain&#39;);
});
</code></pre><p><a name="eloquent-models-and-collections"></a></p><h4 id="eloquent-模型-和-集合" tabindex="-1"><a class="header-anchor" href="#eloquent-模型-和-集合" aria-hidden="true">#</a> Eloquent 模型 和 集合</h4><p>你也可以直接从你的路由和控制器返回 <a href="./eloquent">Eloquent ORM</a> 模型和集合。当你这样做时，Laravel 将自动将模型和集合转换为 JSON 响应，同时遵循模型的 <a href="./eloquent-serialization#hiding-attributes-from-json">隐藏属性</a>:</p><pre><code>use App\\Models\\User;

Route::get(&#39;/user/{user}&#39;, function (User $user) {
    return $user;
});
</code></pre><p><a name="attaching-headers-to-responses"></a></p><h3 id="在响应中附加-header-信息" tabindex="-1"><a class="header-anchor" href="#在响应中附加-header-信息" aria-hidden="true">#</a> 在响应中附加 Header 信息</h3><p>请记住，大多数响应方法都是可以链式调用的，它允许你流畅地构建响应实例。例如，在将响应发送回用户之前，可以使用 <code>header</code> 方法将一系列头添加到响应中：</p><pre><code>return response($content)
            -&gt;header(&#39;Content-Type&#39;, $type)
            -&gt;header(&#39;X-Header-One&#39;, &#39;Header Value&#39;)
            -&gt;header(&#39;X-Header-Two&#39;, &#39;Header Value&#39;);
</code></pre><p>或者，你可以使用 <code>withHeaders</code> 方法指定要添加到响应的标头数组：</p><pre><code>return response($content)
            -&gt;withHeaders([
                &#39;Content-Type&#39; =&gt; $type,
                &#39;X-Header-One&#39; =&gt; &#39;Header Value&#39;,
                &#39;X-Header-Two&#39; =&gt; &#39;Header Value&#39;,
            ]);
</code></pre><p><a name="cache-control-middleware"></a></p><h4 id="缓存控制中间件" tabindex="-1"><a class="header-anchor" href="#缓存控制中间件" aria-hidden="true">#</a> 缓存控制中间件</h4><p>Laravel 包含一个 <code>cache.headers</code> 中间件，可用于快速设置一组路由的 <code>Cache-Control</code> 标头。指令应使用相应缓存控制指令的 蛇形命名法 等效项提供，并应以分号分隔。如果在指令列表中指定了 <code>etag</code> ，则响应内容的 MD5 哈希将自动设置为 ETag 标识符：</p><pre><code>Route::middleware(&#39;cache.headers:public;max_age=2628000;etag&#39;)-&gt;group(function () {
    Route::get(&#39;/privacy&#39;, function () {
        // ...
    });

    Route::get(&#39;/terms&#39;, function () {
        // ...
    });
});
</code></pre><p><a name="attaching-cookies-to-responses"></a></p><h3 id="在响应中附加-cookie-信息" tabindex="-1"><a class="header-anchor" href="#在响应中附加-cookie-信息" aria-hidden="true">#</a> 在响应中附加 Cookie 信息</h3><p>可以使用 <code>cookie</code> 方法将 cookie 附加到传出的 <code>illumize\\Http\\Response</code> 实例。你应将 cookie 的名称、值和有效分钟数传递给此方法：</p><pre><code>return response(&#39;Hello World&#39;)-&gt;cookie(
    &#39;name&#39;, &#39;value&#39;, $minutes
);
</code></pre>`,34),l=o("code",null,"cookie",-1),h={href:"https://secure.php.net/manual/en/function.setcookie.php",target:"_blank",rel:"noopener noreferrer"},u=n(`<pre><code>return response(&#39;Hello World&#39;)-&gt;cookie(
    &#39;name&#39;, &#39;value&#39;, $minutes, $path, $domain, $secure, $httpOnly
);
</code></pre><p>如果你希望确保 cookie 与传出响应一起发送，但你还没有该响应的实例，则可以使用 <code>Cookie</code> facade 将 cookie 加入队列，以便在发送响应时附加到响应中。<code>queue</code> 方法接受创建 cookie 实例所需的参数。在发送到浏览器之前，这些 cookies 将附加到传出的响应中：</p><pre><code>use Illuminate\\Support\\Facades\\Cookie;

Cookie::queue(&#39;name&#39;, &#39;value&#39;, $minutes);
</code></pre><p><a name="generating-cookie-instances"></a></p><h4 id="生成-cookie-实例" tabindex="-1"><a class="header-anchor" href="#生成-cookie-实例" aria-hidden="true">#</a> 生成 Cookie 实例</h4><p>如果要生成一个 <code>Symfony\\Component\\HttpFoundation\\Cookie</code> 实例，打算稍后附加到响应实例中，你可以使用全局 <code>cookie</code> 助手函数。此 cookie 将不会发送回客户端，除非它被附加到响应实例中：</p><pre><code>$cookie = cookie(&#39;name&#39;, &#39;value&#39;, $minutes);

return response(&#39;Hello World&#39;)-&gt;cookie($cookie);
</code></pre><p><a name="expiring-cookies-early"></a></p><h4 id="提前过期-cookies" tabindex="-1"><a class="header-anchor" href="#提前过期-cookies" aria-hidden="true">#</a> 提前过期 Cookies</h4><p>你可以通过响应中的<code>withoutCookie</code>方法使 cookie 过期，用于删除 cookie ：</p><pre><code>return response(&#39;Hello World&#39;)-&gt;withoutCookie(&#39;name&#39;);
</code></pre><p>如果尚未有创建响应的实例，则可以使用<code>Cookie</code> facade 中的<code>expire</code> 方法使 Cookie 过期：</p><pre><code>Cookie::expire(&#39;name&#39;);
</code></pre><p><a name="cookies-and-encryption"></a></p><h3 id="cookies-和-加密" tabindex="-1"><a class="header-anchor" href="#cookies-和-加密" aria-hidden="true">#</a> Cookies 和 加密</h3><p>默认情况下，由 Laravel 生成的所有 cookie 都经过了加密和签名，因此客户端无法篡改或读取它们。如果要对应用程序生成的部分 cookie 禁用加密，可以使用<code>App\\Http\\Middleware\\EncryptCookies</code>中间件的<code>$except</code>属性，该属性位于<code>app/Http/Middleware</code>目录中：</p><pre><code>/**
 * 这个名字的 Cookie 将不会加密。
 *
 * @var array
 */
protected $except = [
    &#39;cookie_name&#39;,
];
</code></pre><p><a name="redirects"></a></p><h2 id="重定向" tabindex="-1"><a class="header-anchor" href="#重定向" aria-hidden="true">#</a> 重定向</h2><p>重定向响应是<code>Illuminate\\Http\\RedirectResponse</code> 类的实例，包含将用户重定向到另一个 URL 所需的适当 HTTP 头。Laravel 有几种方法可以生成<code>RedirectResponse</code>实例。最简单的方法是使用全局<code>redirect</code>助手函数：</p><pre><code>Route::get(&#39;/dashboard&#39;, function () {
    return redirect(&#39;home/dashboard&#39;);
});
</code></pre><p>有时你可能希望将用户重定向到以前的位置，例如当提交的表单无效时。你可以使用全局 back 助手函数来执行此操作。由于此功能使用 <a href="./session">session</a>，请确保调用<code>back</code> 函数的路由使用的是<code>web</code>中间件组：</p><pre><code>Route::post(&#39;/user/profile&#39;, function () {
    // 验证请求参数

    return back()-&gt;withInput();
});
</code></pre><p><a name="redirecting-named-routes"></a></p><h3 id="重定向到指定名称的路由" tabindex="-1"><a class="header-anchor" href="#重定向到指定名称的路由" aria-hidden="true">#</a> 重定向到指定名称的路由</h3><p>当你在没有传递参数的情况下调用 <code>redirect</code> 助手函数时，将返回 <code>Illuminate\\Routing\\Redirector</code> 的实例，允许你调用 <code>Redirector</code> 实例上的任何方法。例如，要对命名路由生成 <code>RedirectResponse</code> ，可以使用 <code>route</code> 方法：</p><pre><code>return redirect()-&gt;route(&#39;login&#39;);
</code></pre><p>如果路由中有参数，可以将其作为第二个参数传递给 <code>route</code> 方法：</p><pre><code>// 对于具有以下URI的路由: /profile/{id}

return redirect()-&gt;route(&#39;profile&#39;, [&#39;id&#39; =&gt; 1]);
</code></pre><p><a name="populating-parameters-via-eloquent-models"></a></p><h4 id="通过-eloquent-模型填充参数" tabindex="-1"><a class="header-anchor" href="#通过-eloquent-模型填充参数" aria-hidden="true">#</a> 通过 Eloquent 模型填充参数</h4><p>如果你要重定向到使用从 Eloquent 模型填充 「ID」 参数的路由，可以直接传递模型本身。ID 将会被自动提取：</p><pre><code>// 对于具有以下URI的路由: /profile/{id}

return redirect()-&gt;route(&#39;profile&#39;, [$user]);
</code></pre><p>如果你想要自定义路由参数，你可以指定路由参数 (<code>/profile/{id:slug}</code>) 或者重写 Eloquent 模型上的 <code>getRouteKey</code> 方法：</p><pre><code>/**
 * 获取模型的路由键值。
 */
public function getRouteKey(): mixed
{
    return $this-&gt;slug;
}
</code></pre><p><a name="redirecting-controller-actions"></a></p><h3 id="重定向到控制器行为" tabindex="-1"><a class="header-anchor" href="#重定向到控制器行为" aria-hidden="true">#</a> 重定向到控制器行为</h3><p>也可以生成重定向到 <a href="./controllers">controller actions</a>。只要把控制器和 action 的名称传递给 <code>action</code> 方法：</p><pre><code>use App\\Http\\Controllers\\UserController;

return redirect()-&gt;action([UserController::class, &#39;index&#39;]);
</code></pre><p>如果控制器路由有参数，可以将其作为第二个参数传递给 <code>action</code> 方法：</p><pre><code>return redirect()-&gt;action(
    [UserController::class, &#39;profile&#39;], [&#39;id&#39; =&gt; 1]
);
</code></pre><p><a name="redirecting-external-domains"></a></p><h3 id="重定向到外部域名" tabindex="-1"><a class="header-anchor" href="#重定向到外部域名" aria-hidden="true">#</a> 重定向到外部域名</h3><p>有时候你需要重定向到应用外的域名。可以通过调用<code>away</code>方法，它会创建一个不带有任何额外的 URL 编码、有效性校验和检查<code>RedirectResponse</code>实例：</p><pre><code>return redirect()-&gt;away(&#39;https://www.google.com&#39;);
</code></pre><p><a name="redirecting-with-flashed-session-data"></a></p><h3 id="重定向并使用闪存的-session-数据" tabindex="-1"><a class="header-anchor" href="#重定向并使用闪存的-session-数据" aria-hidden="true">#</a> 重定向并使用闪存的 Session 数据</h3><p>重定向到新的 URL 的同时<a href="./session#flash-data">传送数据给 seesion</a> 是很常见的。 通常这是在你将消息发送到 session 后成功执行操作后完成的。为了方便，你可以创建一个<code>RedirectResponse</code>实例并在链式方法调用中将数据传送给 session：</p><pre><code>Route::post(&#39;/user/profile&#39;, function () {
    // ...

    return redirect(&#39;dashboard&#39;)-&gt;with(&#39;status&#39;, &#39;Profile updated!&#39;);
});
</code></pre><p>在用户重定向后，你可以显示 <a href="./session">session</a>。例如，你可以使用<a href="./blade"> Blade 模板语法</a>：</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>@<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">session</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;status&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string double-quoted-string">&quot;alert alert-success&quot;</span><span class="token operator">&gt;</span>
        <span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token function">session</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;status&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">}</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
@<span class="token keyword">endif</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="redirecting-with-input"></a></p><h4 id="使用输入重定向" tabindex="-1"><a class="header-anchor" href="#使用输入重定向" aria-hidden="true">#</a> 使用输入重定向</h4><p>你可以使用<code>RedirectResponse</code>实例提供的<code>withInput</code>方法将当前请求输入的数据发送到 session ，然后再将用户重定向到新位置。当用户遇到验证错误时，通常会执行此操作。每当输入数据被发送到 session , 你可以很简单的在下一次重新提交的表单请求中<a href="./requests#retrieving-old-input">取回它</a>：</p><pre><code>return back()-&gt;withInput();
</code></pre><p><a name="other-response-types"></a></p><h2 id="其他响应类型" tabindex="-1"><a class="header-anchor" href="#其他响应类型" aria-hidden="true">#</a> 其他响应类型</h2><p><code>response</code> 助手可用于生成其他类型的响应实例。当不带参数调用 <code>response</code> 助手时，会返回 <code>Illuminate\\Contracts\\Routing\\ResponseFactory</code> <a href="./contracts">contract</a> 的实现。 该契约提供了几种有用的方法来生成响应。</p><p><a name="view-responses"></a></p><h3 id="响应视图" tabindex="-1"><a class="header-anchor" href="#响应视图" aria-hidden="true">#</a> 响应视图</h3><p>如果你需要控制响应的状态和标头，但还需要返回 <a href="./views">view</a> 作为响应的内容，你应该使用 <code>view</code> 方法：</p><pre><code>return response()
            -&gt;view(&#39;hello&#39;, $data, 200)
            -&gt;header(&#39;Content-Type&#39;, $type);
</code></pre><p>当然，如果你不需要传递自定义 HTTP 状态代码或自定义标头，则可以使用全局 <code>view</code> 辅助函数。</p><p><a name="json-responses"></a></p><h3 id="json-responses" tabindex="-1"><a class="header-anchor" href="#json-responses" aria-hidden="true">#</a> JSON Responses</h3><p><code>json</code> 方法会自动将 <code>Content-Type</code> 标头设置为 <code>application/json</code>，并使用 <code>json_encode</code> PHP 函数将给定的数组转换为 JSON：</p><pre><code>return response()-&gt;json([
    &#39;name&#39; =&gt; &#39;Abigail&#39;,
    &#39;state&#39; =&gt; &#39;CA&#39;,
]);
</code></pre><p>如果你想创建一个 JSONP 响应，你可以结合使用 <code>json</code> 方法和 <code>withCallback</code> 方法：</p><pre><code>return response()
            -&gt;json([&#39;name&#39; =&gt; &#39;Abigail&#39;, &#39;state&#39; =&gt; &#39;CA&#39;])
            -&gt;withCallback($request-&gt;input(&#39;callback&#39;));
</code></pre><p><a name="file-downloads"></a></p><h3 id="文件下载" tabindex="-1"><a class="header-anchor" href="#文件下载" aria-hidden="true">#</a> 文件下载</h3><p><code>download</code> 方法可用于生成强制用户浏览器在给定路径下载文件的响应。<code>download</code> 方法接受文件名作为该方法的第二个参数，这将确定下载文件的用户看到的文件名。 最后，你可以将一组 HTTP 标头作为该方法的第三个参数传递：</p><pre><code>return response()-&gt;download($pathToFile);

return response()-&gt;download($pathToFile, $name, $headers);
</code></pre><blockquote><p>注意：管理文件下载的 Symfony HttpFoundation 要求正在下载的文件具有 ASCII 文件名。</p></blockquote><p><a name="streamed-downloads"></a></p><h4 id="流式下载" tabindex="-1"><a class="header-anchor" href="#流式下载" aria-hidden="true">#</a> 流式下载</h4><p>有时你可能希望将给定操作的字符串响应转换为可下载的响应，而不必将操作的内容写入磁盘。在这种情况下，你可以使用<code>streamDownload</code>方法。此方法接受回调、文件名和可选的标头数组作为其参数：</p><pre><code>use App\\Services\\GitHub;

return response()-&gt;streamDownload(function () {
    echo GitHub::api(&#39;repo&#39;)
                -&gt;contents()
                -&gt;readme(&#39;laravel&#39;, &#39;laravel&#39;)[&#39;contents&#39;];
}, &#39;laravel-readme.md&#39;);
</code></pre><p><a name="file-responses"></a></p><h3 id="文件响应" tabindex="-1"><a class="header-anchor" href="#文件响应" aria-hidden="true">#</a> 文件响应</h3><p><code>file</code>方法可用于直接在用户的浏览器中显示文件，例如图像或 PDF，而不是启动下载。这个方法接受文件的路径作为它的第一个参数和一个头数组作为它的第二个参数：</p><pre><code>return response()-&gt;file($pathToFile);

return response()-&gt;file($pathToFile, $headers);
</code></pre><p><a name="response-macros"></a></p><h2 id="响应宏" tabindex="-1"><a class="header-anchor" href="#响应宏" aria-hidden="true">#</a> 响应宏</h2><p>如果你想定义一个可以在各种路由和控制器中重复使用的自定义响应，你可以使用<code>Response</code> facade 上的<code>macro</code>方法。通常，你应该从应用程序的<a href="./providers">服务提供者</a>，如<code>App\\Providers\\AppServiceProvider</code>服务提供程序的<code>boot</code>方法调用此方法：</p><pre><code>&lt;?php

namespace App\\Providers;

use Illuminate\\Support\\Facades\\Response;
use Illuminate\\Support\\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * 启动一个应用的服务
     */
    public function boot(): void
    {
        Response::macro(&#39;caps&#39;, function (string $value) {
            return Response::make(strtoupper($value));
        });
    }
}
</code></pre><p><code>macro</code>函数接受名称作为其第一个参数，并接受闭包作为其第二个参数。当从<code>ResponseFactory</code>实现或<code>response</code>助手函数调用宏名称时，将执行宏的闭包：</p><pre><code>return response()-&gt;caps(&#39;foo&#39;);
</code></pre>`,88);function f(g,m){const a=s("ExternalLinkIcon");return t(),d("div",null,[p,o("p",null,[l,e(" 方法还接受一些使用频率较低的参数。通常，这些参数的目的和意义与 PHP 的原生 "),o("a",h,[e("setcookie"),c(a)]),e(" 的参数相同")]),u])}const v=r(i,[["render",f],["__file","responses.html.vue"]]);export{v as default};
