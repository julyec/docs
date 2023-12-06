import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as n,c as a,a as r}from"./app-06635a3b.js";const o={},t=r(`<h1 id="生成-url" tabindex="-1"><a class="header-anchor" href="#生成-url" aria-hidden="true">#</a> 生成 URL</h1><ul><li><a href="#introduction">简介</a></li><li><a href="#the-basics">基础</a><ul><li><a href="#generating-urls">生成基础 URLs</a></li><li><a href="#accessing-the-current-url">访问当前 URL</a></li></ul></li><li><a href="#urls-for-named-routes">命名路由的 URLs</a><ul><li><a href="#signed-urls">签名 URLs</a></li></ul></li><li><a href="#urls-for-controller-actions">控制器行为的 URLs</a></li><li><a href="#default-values">默认值</a></li></ul><p><a name="introduction"></a></p><h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h2><p>Laravel 提供了几个辅助函数来为应用程序生成 URL。主要用于在模板和 API 响应中构建 URL 或者在应用程序的其它部分生成重定向响应。</p><p><a name="the-basics"></a></p><h2 id="基础" tabindex="-1"><a class="header-anchor" href="#基础" aria-hidden="true">#</a> 基础</h2><p><a name="generating-urls"></a></p><h3 id="生成基础-urls" tabindex="-1"><a class="header-anchor" href="#生成基础-urls" aria-hidden="true">#</a> 生成基础 URLs</h3><p>辅助函数 <code>url</code> 可以用于应用的任何一个 URL。生成的 URL 将自动使用当前请求中的方案 (HTTP 或 HTTPS) 和主机：</p><pre><code>$post = App\\Models\\Post::find(1);

echo url(&quot;/posts/{$post-&gt;id}&quot;);

// http://example.com/posts/1
</code></pre><p><a name="accessing-the-current-url"></a></p><h3 id="访问当前-url" tabindex="-1"><a class="header-anchor" href="#访问当前-url" aria-hidden="true">#</a> 访问当前 URL</h3><p>如果没有给辅助函数 <code>url</code> 提供路径，则会返回一个 <code>Illuminate\\Routing\\UrlGenerator</code> 实例，来允许你访问有关当前 URL 的信息：</p><pre><code>// 获取当前 URL 没有 query string...
echo url()-&gt;current();

// 获取当前 URL 包括 query string...
echo url()-&gt;full();

// 获取上个请求 URL
echo url()-&gt;previous();
</code></pre><p>上面的这些方法都可以通过 <code>URL</code> <a href="./facades">facade</a> 访问:</p><pre><code>use Illuminate\\Support\\Facades\\URL;

echo URL::current();
</code></pre><p><a name="urls-for-named-routes"></a></p><h2 id="命名路由的-urls" tabindex="-1"><a class="header-anchor" href="#命名路由的-urls" aria-hidden="true">#</a> 命名路由的 URLs</h2><p>辅助函数 <code>route</code> 可以用于生成指定 <a href="./routing#named-routes">命名路由</a> 的URLs。 命名路由生成的 URLs 不与路由上定义的 URL 相耦合。因此，就算路由的 URL 有任何改变，都不需要对 <code>route</code> 函数调用进行任何更改。例如，假设你的应用程序包含以下路由：</p><pre><code>Route::get(&#39;/post/{post}&#39;, function (Post $post) {
    // ...
})-&gt;name(&#39;post.show&#39;);
</code></pre><p>要生成此路由的 URL ，可以像这样使用辅助函数 <code>route</code> ：</p><pre><code>echo route(&#39;post.show&#39;, [&#39;post&#39; =&gt; 1]);

// http://example.com/post/1
</code></pre><p>当然，辅助函数 <code>route</code> 也可以用于为具有多个参数的路由生成 URL：</p><pre><code>Route::get(&#39;/post/{post}/comment/{comment}&#39;, function (Post $post, Comment $comment) {
    // ...
})-&gt;name(&#39;comment.show&#39;);

echo route(&#39;comment.show&#39;, [&#39;post&#39; =&gt; 1, &#39;comment&#39; =&gt; 3]);

// http://example.com/post/1/comment/3
</code></pre><p>任何与路由定义参数对应不上的附加数组元素都将添加到 URL 的查询字符串中：</p><pre><code>echo route(&#39;post.show&#39;, [&#39;post&#39; =&gt; 1, &#39;search&#39; =&gt; &#39;rocket&#39;]);

// http://example.com/post/1?search=rocket
</code></pre><p><a name="eloquent-models"></a></p><h4 id="eloquent-models" tabindex="-1"><a class="header-anchor" href="#eloquent-models" aria-hidden="true">#</a> Eloquent Models</h4><p>你通常使用 <a href="./eloquent">Eloquent 模型</a> 的主键生成 URL。因此，您可以将 Eloquent 模型作为参数值传递。 <code>route</code> 辅助函数将自动提取模型的主键：</p><pre><code>echo route(&#39;post.show&#39;, [&#39;post&#39; =&gt; $post]);
</code></pre><p><a name="signed-urls"></a></p><h3 id="签名-urls" tabindex="-1"><a class="header-anchor" href="#签名-urls" aria-hidden="true">#</a> 签名 URLs</h3><p>Laravel 允许你轻松地为命名路径创建「签名」 URLs，这些 URLs 在查询字符串后附加了「签名」哈希，允许 Laravel 验证 URL 自创建以来未被修改过。 签名 URLs 对于可公开访问但需要一层防止 URL 操作的路由特别有用。</p><p>例如，你可以使用签名 URLs 来实现通过电子邮件发送给客户的公共「取消订阅」链接。要创建指向路径的签名 URL ，请使用 <code>URL</code> facade 的 <code>signedRoute</code> 方法：</p><pre><code>use Illuminate\\Support\\Facades\\URL;

return URL::signedRoute(&#39;unsubscribe&#39;, [&#39;user&#39; =&gt; 1]);
</code></pre><p>如果要生成具有有效期的临时签名路由 URL，可以使用以下 <code>temporarySignedRoute</code> 方法，当 Laravel 验证一个临时的签名路由 URL 时，它会确保编码到签名 URL 中的过期时间戳没有过期：</p><pre><code>use Illuminate\\Support\\Facades\\URL;

return URL::temporarySignedRoute(
    &#39;unsubscribe&#39;, now()-&gt;addMinutes(30), [&#39;user&#39; =&gt; 1]
);
</code></pre><p><a name="validating-signed-route-requests"></a></p><h4 id="验证签名路由请求" tabindex="-1"><a class="header-anchor" href="#验证签名路由请求" aria-hidden="true">#</a> 验证签名路由请求</h4><p>要验证传入请求是否具有有效签名，你应该对传入的 <code>Illuminate\\Http\\Request</code> 实例中调用 <code>hasValidSignature</code> 方法：</p><pre><code>use Illuminate\\Http\\Request;

Route::get(&#39;/unsubscribe/{user}&#39;, function (Request $request) {
    if (! $request-&gt;hasValidSignature()) {
        abort(401);
    }

    // ...
})-&gt;name(&#39;unsubscribe&#39;);
</code></pre><p>有时，你可能需要允许你的应用程序前端将数据附加到签名 URL，例如在执行客户端分页时。因此，你可以指定在使用 <code>hasValidSignatureWhileIgnoring</code> 方法验证签名 URL 时应忽略的请求查询参数。请记住，忽略参数将允许任何人根据请求修改这些参数：</p><pre><code>if (! $request-&gt;hasValidSignatureWhileIgnoring([&#39;page&#39;, &#39;order&#39;])) {
    abort(401);
}
</code></pre><p>或者，你可以将 <code>Illuminate\\Routing\\Middleware\\ValidateSignature</code> <a href="./middleware">中间件</a> 分配给路由。如果它不存在，则应该在 HTTP 内核的 <code>$middlewareAliases</code> 数组中为此中间件分配一个键：</p><pre><code>/**
 * The application&#39;s middleware aliases.
 *
 * Aliases may be used to conveniently assign middleware to routes and groups.
 *
 * @var array&lt;string, class-string|string&gt;
 */
protected $middlewareAliases = [
    &#39;signed&#39; =&gt; \\Illuminate\\Routing\\Middleware\\ValidateSignature::class,
];
</code></pre><p>一旦在内核中注册了中间件，就可以将其附加到路由。如果传入的请求没有有效的签名，中间件将自动返回 <code>403</code> HTTP 响应：</p><pre><code>Route::post(&#39;/unsubscribe/{user}&#39;, function (Request $request) {
    // ...
})-&gt;name(&#39;unsubscribe&#39;)-&gt;middleware(&#39;signed&#39;);
</code></pre><p><a name="responding-to-invalid-signed-routes"></a></p><h4 id="响应无效的签名路由" tabindex="-1"><a class="header-anchor" href="#响应无效的签名路由" aria-hidden="true">#</a> 响应无效的签名路由</h4><p>当有人访问已过期的签名 URL 时，他们将收到一个通用的错误页面，显示 <code>403</code> HTTP 状态代码。然而，你可以通过在异常处理程序中为 <code>InvalidSignatureException</code> 异常定义自定义 “可渲染” 闭包来自定义此行为。这个闭包应该返回一个 HTTP 响应：</p><pre><code>use Illuminate\\Routing\\Exceptions\\InvalidSignatureException;

/**
 * 为应用程序注册异常处理回调
 */
public function register(): void
{
    $this-&gt;renderable(function (InvalidSignatureException $e) {
        return response()-&gt;view(&#39;error.link-expired&#39;, [], 403);
    });
}
</code></pre><p><a name="urls-for-controller-actions"></a></p><h2 id="控制器行为的-url" tabindex="-1"><a class="header-anchor" href="#控制器行为的-url" aria-hidden="true">#</a> 控制器行为的 URL</h2><p><code>action</code> 功能可以为给定的控制器行为生成 URL。</p><pre><code>use App\\Http\\Controllers\\HomeController;

$url = action([HomeController::class, &#39;index&#39;]);
</code></pre><p>如果控制器方法接收路由参数，你可以通过第二个参数传递：</p><pre><code>$url = action([UserController::class, &#39;profile&#39;], [&#39;id&#39; =&gt; 1]);
</code></pre><p><a name="default-values"></a></p><h2 id="默认值" tabindex="-1"><a class="header-anchor" href="#默认值" aria-hidden="true">#</a> 默认值</h2><p>对于某些应用程序，你可能希望为某些 URL 参数的请求范围指定默认值。例如，假设有些路由定义了 <code>{locale}</code> 参数：</p><pre><code>Route::get(&#39;/{locale}/posts&#39;, function () {
    // ...
})-&gt;name(&#39;post.index&#39;);
</code></pre><p>每次都通过 <code>locale</code> 来调用辅助函数 <code>route</code> 也是一件很麻烦的事情。因此，使用 <code>URL::defaults</code> 方法定义这个参数的默认值，可以让该参数始终存在当前请求中。然后就能从 <a href="./middleware#assigning-middleware-to-routes">路由中间件</a> 调用此方法来访问当前请求：</p><pre><code>&lt;?php

namespace App\\Http\\Middleware;

use Closure;
use Illuminate\\Http\\Request;
use Illuminate\\Support\\Facades\\URL;
use Symfony\\Component\\HttpFoundation\\Response;

class SetDefaultLocaleForUrls
{
    /**
     * 处理传入的请求
     *
     * @param  \\Closure(\\Illuminate\\Http\\Request): (\\Symfony\\Component\\HttpFoundation\\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        URL::defaults([&#39;locale&#39; =&gt; $request-&gt;user()-&gt;locale]);

        return $next($request);
    }
}
</code></pre><p>一旦设置了 <code>locale</code> 参数的默认值，你就不再需要通过辅助函数 <code>route</code> 生成 URL 时传递它的值。</p><p><a name="url-defaults-middleware-priority"></a></p><h4 id="默认-url-中间件优先级" tabindex="-1"><a class="header-anchor" href="#默认-url-中间件优先级" aria-hidden="true">#</a> 默认 URL &amp; 中间件优先级</h4><p>设置 URL 的默认值会影响 Laravel 对隐式模型绑定的处理。因此，你应该通过<a href="./middleware#sorting-middleware">设置中间件优先级</a>来确保在 Laravel 自己的 <code>SubstituteBindings</code> 中间件执行之前设置 URL 的默认值。你可以通过在你的应用的 HTTP kernel 文件中的 <code>$middlewarePriority</code> 属性里把你的中间件放在 <code>SubstituteBindings</code> 中间件之前。</p><p><code>$middlewarePriority</code> 这个属性在 <code>Illuminate\\Foundation\\Http\\Kernel</code> 这个基类里。你可以复制一份到你的应用程序的 HTTP kernel 文件中以便做修改:</p><pre><code>/**
 * 根据优先级排序的中间件列表
 *
 * 这将保证非全局中间件按照既定顺序排序
 *
 * @var array
 */
protected $middlewarePriority = [
    // ...
     \\App\\Http\\Middleware\\SetDefaultLocaleForUrls::class,
     \\Illuminate\\Routing\\Middleware\\SubstituteBindings::class,
     // ...
];
</code></pre>`,70),d=[t];function s(i,c){return n(),a("div",null,d)}const p=e(o,[["render",s],["__file","urls.html.vue"]]);export{p as default};
