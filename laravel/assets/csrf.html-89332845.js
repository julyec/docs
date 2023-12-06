import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{r as p,o as c,c as l,b as n,d as a,e as t,a as s}from"./app-06635a3b.js";const r={},i=s('<h1 id="csrf-保护" tabindex="-1"><a class="header-anchor" href="#csrf-保护" aria-hidden="true">#</a> CSRF 保护</h1><ul><li><a href="#csrf-introduction">简介</a></li><li><a href="#preventing-csrf-requests">阻止 CSRF 请求</a><ul><li><a href="#csrf-excluding-uris">排除 URLS</a></li></ul></li><li><a href="#csrf-x-csrf-token">X-CSRF-Token</a></li><li><a href="#csrf-x-xsrf-token">X-XSRF-Token</a></li></ul><p><a name="csrf-introduction"></a></p><h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h2>',4),u={href:"https://en.wikipedia.org/wiki/Cross-site_request_forgery",target:"_blank",rel:"noopener noreferrer"},d=s(`<p><a name="csrf-explanation"></a></p><h4 id="漏洞的解释" tabindex="-1"><a class="header-anchor" href="#漏洞的解释" aria-hidden="true">#</a> 漏洞的解释</h4><p>如果你不熟悉跨站点请求伪造，我们讨论一个利用此漏洞的示例。假设您的应用程序有一个 <code>/user/email</code> 路由，它接受 POST 请求来更改经过身份验证用户的电子邮件地址。最有可能的情况是，此路由希望 <code>email</code> 输入字段包含用户希望开始使用的电子邮件地址。</p><p>没有 CSRF 保护，恶意网站可能会创建一个 HTML 表单，指向您的应用程序 <code>/user/email</code> 路由，并提交恶意用户自己的电子邮件地址：</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span> <span class="token attr-name">action</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://your-application.com/user/email<span class="token punctuation">&quot;</span></span> <span class="token attr-name">method</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>POST<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>email<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>malicious-email@example.com<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
    document<span class="token punctuation">.</span>forms<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">submit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果恶意网站在页面加载时自动提交了表单，则恶意用户只需要诱使您的应用程序的一个毫无戒心的用户访问他们的网站，他们的电子邮件地址就会在您的应用程序中更改。</p><p>为了防止这种漏洞，我们需要检查每一个传入的 <code>POST</code>，<code>PUT</code>，<code>PATCH</code> 或 <code>DELETE</code> 请求以获取恶意应用程序无法访问的秘密会话值。</p><p><a name="preventing-csrf-requests"></a></p><h2 id="阻止-csrf-请求" tabindex="-1"><a class="header-anchor" href="#阻止-csrf-请求" aria-hidden="true">#</a> 阻止 CSRF 请求</h2><p>Laravel 为应用程序管理的每个活动 <a href="./session">用户会话</a> 自动生成 CSRF 「令牌」。此令牌用于验证经过身份验证的用户是实际向应用程序发出请求的人。由于此令牌存储在用户的会话中，并且每次重新生成会话时都会更改，因此恶意应用程序将无法访问它。</p><p>当前会话的 CSRF 令牌可以通过请求的会话或通过 <code>csrf_token</code> 辅助函数进行访问：</p><pre><code>use Illuminate\\Http\\Request;

Route::get(&#39;/token&#39;, function (Request $request) {
    $token = $request-&gt;session()-&gt;token();

    $token = csrf_token();

    // ...
});
</code></pre><p>无论何时在应用程序中定义 <code>POST</code> 、<code>PUT</code> 、<code>PATCH</code> 或 <code>DELETE</code> HTML表单，都应在表单中包含隐藏的CSRF <code>_token</code> 字段，以便CSRF保护中间件可以验证请求。为方便起见，可以使用 <code>@csrf</code> Blade指令生成隐藏的令牌输入字段：</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span> <span class="token attr-name">method</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>POST<span class="token punctuation">&quot;</span></span> <span class="token attr-name">action</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/profile<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    @csrf

    <span class="token comment">&lt;!-- 相当于。。。 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hidden<span class="token punctuation">&quot;</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>_token<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{{ csrf_token() }}<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>默认情况下包含在 <code>web</code> 中间件组中的<code>App\\Http\\Middleware\\VerifyCsrfToken</code> <a href="./middleware">中间件</a>将自动验证请求输入中的令牌是否与会话中存储的令牌匹配。当这两个令牌匹配时，我们知道身份验证的用户是发起请求的用户。</p><p><a name="csrf-tokens-and-spas"></a></p><h3 id="csrf-tokens-spas" tabindex="-1"><a class="header-anchor" href="#csrf-tokens-spas" aria-hidden="true">#</a> CSRF Tokens &amp; SPAs</h3><p>如果你正在构建一个将 Laravel 用作 API 后端的 SPA，你应该查阅 <a href="./sanctum">Laravel Sanctum 文档</a>，以获取有关使用 API 进行身份验证和防范 CSRF 漏洞的信息。</p><p><a name="csrf-excluding-uris"></a></p><h3 id="从-csrf-保护中排除-uri" tabindex="-1"><a class="header-anchor" href="#从-csrf-保护中排除-uri" aria-hidden="true">#</a> 从 CSRF 保护中排除 URI</h3>`,20),k={href:"https://stripe.com",target:"_blank",rel:"noopener noreferrer"},m=s(`<p>通常，你应该将这些类型的路由放在 <code>App\\Providers\\RouteServiceProvider</code> 应用于 routes/web.php 文件中的所有路由的 <code>web</code> 中间件组之外。但是，现在也可以通过将路由的 URIs 添加到 <code>VerifyCsrfToken</code> 中间件的 <code>$except</code> 属性来排除路由：</p><pre><code>&lt;?php

namespace App\\Http\\Middleware;

use Illuminate\\Foundation\\Http\\Middleware\\VerifyCsrfToken as Middleware;

class VerifyCsrfToken extends Middleware
{
    /**
     * 从 CSRF 验证中排除的 URIs。
     *
     * @var array
     */
    protected $except = [
        &#39;stripe/*&#39;,
        &#39;http://example.com/foo/bar&#39;,
        &#39;http://example.com/foo/*&#39;,
    ];
}
</code></pre><blockquote><p>技巧：为方便起见，<a href="./testing">运行测试</a>.时自动禁用所有路由的 CSRF 中间件。</p></blockquote><p><a name="csrf-x-csrf-token"></a></p><h2 id="x-csrf-token" tabindex="-1"><a class="header-anchor" href="#x-csrf-token" aria-hidden="true">#</a> X-CSRF-TOKEN</h2><p>除了检查 CSRF 令牌作为 POST 参数外， <code>App\\Http\\Middleware\\VerifyCsrfToken</code> 中间件还将检查 <code>X-CSRF-TOKEN</code> 请求标头。 例如，你可以将令牌存储在 HTML 的 <code>meta</code> 标签中：</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>&lt;meta name=&quot;csrf-token&quot; content=&quot;{{ csrf_token() }}&quot;&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>然后，你可以指示 jQuery 之类的库自动将令牌添加到所有请求标头。 这为使用传统 JavaScript 技术的基于 AJAX 的应用程序提供了简单、方便的 CSRF 保护：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>$<span class="token punctuation">.</span><span class="token function">ajaxSetup</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">headers</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&#39;X-CSRF-TOKEN&#39;</span><span class="token operator">:</span> <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&#39;meta[name=&quot;csrf-token&quot;]&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">attr</span><span class="token punctuation">(</span><span class="token string">&#39;content&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="csrf-x-xsrf-token"></a></p><h2 id="x-xsrf-token" tabindex="-1"><a class="header-anchor" href="#x-xsrf-token" aria-hidden="true">#</a> X-XSRF-TOKEN</h2><p>Laravel 将当前CSRF令牌存储在加密的 <code>XSRF-TOKEN</code> cookie 中，该 cookie 包含在框架生成的每个响应中。您可以使用 cookie 值设置 <code>X-XSRF-TOKEN</code> 请求标头。</p><p>由于一些 JavaScript 框架和库（如 Angular 和 Axios ）会自动将其值放置在同一源请求的 <code>X-XSRF-TOKEN</code> 标头中，因此发送此 cookie 主要是为了方便开发人员。</p><blockquote><p>技巧：默认情况下，<code>resources/js/bootstrap.js</code> 文件包含 Axios HTTP 库，它会自动为您发送 <code>X-XSRF-TOKEN</code> 标头。</p></blockquote>`,14);function f(h,v){const e=p("ExternalLinkIcon");return c(),l("div",null,[i,n("p",null,[a("跨站点请求伪造是一种恶意利用，利用这种手段，代表经过身份验证的用户执行未经授权的命令。值得庆幸的是，Laravel 可以轻松保护您的应用程序免受"),n("a",u,[a("跨站点请求伪造"),t(e)]),a("（CSRF）攻击。")]),d,n("p",null,[a("有时你可能希望从 CSRF 保护中排除一组 URIs。例如，如果你使用 "),n("a",k,[a("Stripe"),t(e)]),a(" 处理付款并使用他们的 webhook 系统，则需要将你的 Stripe webhook 处理程序路由从 CSRF 保护中排除，因为 Stripe 不会知道要向您的路由发送什么 CSRF 令牌。")]),m])}const S=o(r,[["render",f],["__file","csrf.html.vue"]]);export{S as default};
