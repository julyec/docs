import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as d,o as l,c as r,b as n,d as e,e as i,a}from"./app-06635a3b.js";const c={},o=a(`<h1 id="http-请求" tabindex="-1"><a class="header-anchor" href="#http-请求" aria-hidden="true">#</a> HTTP 请求</h1><ul><li><a href="#introduction">介绍</a></li><li><a href="#interacting-with-the-request">与请求交互</a></li><li><a href="#accessing-the-request">访问请求</a></li><li><a href="#request-path-and-method">请求路径、主机和方法</a></li><li><a href="#request-headers">请求头</a></li><li><a href="#request-ip-address">请求 IP址</a></li><li><a href="#content-negotiation">内容协商</a></li><li><a href="#psr7-requests">PSR-7 请求</a></li><li><a href="#input">输入</a></li><li><a href="#retrieving-input">检索输入</a></li><li><a href="#determining-if-input-is-present">确定输入是否存在</a></li><li><a href="#merging-additional-input">合并额外的输入</a></li><li><a href="#old-input">旧输入</a></li><li><a href="#cookies">Cookies</a></li><li><a href="#input-trimming-and-normalization">输入修剪和规范化</a></li><li><a href="#files">文件</a></li><li><a href="#retrieving-uploaded-files">检索上传的文件</a></li><li><a href="#storing-uploaded-files">存储上传的文件</a></li><li><a href="#configuring-trusted-proxies">配置可信代理</a></li><li><a href="#configuring-trusted-hosts">配置可信主机</a></li></ul><p><a name="introduction"></a></p><h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h2><p>Laravel 的 <code>Illuminate\\Http\\Request</code> 类提供了一种面向对象的方式来与当前由应用程序处理的 HTTP 请求进行交互，并检索提交请求的输入内容、Cookie 和文件。</p><p><a name="interacting-with-the-request"></a></p><h2 id="与请求交互" tabindex="-1"><a class="header-anchor" href="#与请求交互" aria-hidden="true">#</a> 与请求交互</h2><p><a name="accessing-the-request"></a></p><h3 id="访问请求" tabindex="-1"><a class="header-anchor" href="#访问请求" aria-hidden="true">#</a> 访问请求</h3><p>要通过依赖注入获取当前的 HTTP 请求实例，您应该在路由闭包或控制器方法中导入 <code>Illuminate\\Http\\Request</code> 类。传入的请求实例将由 Laravel  <a href="./container">服务容器</a> 自动注入：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;?php

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
        $name = $request-&gt;input(&#39;name&#39;);

        // 存储用户……

        return redirect(&#39;/users&#39;);
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如上所述，您也可以在路由闭包上导入 <code>Illuminate\\Http\\Request</code> 类。服务容器将在执行时自动将传入请求注入闭包中：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>use Illuminate\\Http\\Request;

Route::get(&#39;/&#39;, function (Request $request) {
    // ...
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="dependency-injection-route-parameters"></a></p><h4 id="依赖注入和路由参数" tabindex="-1"><a class="header-anchor" href="#依赖注入和路由参数" aria-hidden="true">#</a> 依赖注入和路由参数</h4><p>如果您的控制器方法还需要从路由参数中获取输入，则应该在其他依赖项之后列出路由参数。例如，如果您的路由定义如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>use App\\Http\\Controllers\\UserController;

Route::put(&#39;/user/{id}&#39;, [UserController::class, &#39;update&#39;]);

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>您仍然可以在控制器方法中使用类型提示的 <code>Illuminate\\Http\\Request</code> 并通过以下方式访问您的 <code>id</code> 路由参数来定义您的控制器方法：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;?php

namespace App\\Http\\Controllers;

use Illuminate\\Http\\RedirectResponse;
use Illuminate\\Http\\Request;

class UserController extends Controller
{
    /**
     * Update the specified user.
     */
    public function update(Request $request, string $id): RedirectResponse
    {
        // 更新用户...

        return redirect(&#39;/users&#39;);
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="request-path-and-method"></a></p><h3 id="请求路径、主机和方法" tabindex="-1"><a class="header-anchor" href="#请求路径、主机和方法" aria-hidden="true">#</a> 请求路径、主机和方法</h3><p><code>Illuminate\\Http\\Request</code> 实例提供各种方法来检查传入的 HTTP 请求，并扩展了 <code>Symfony\\Component\\HttpFoundation\\Request</code> 类。下面我们将讨论一些最重要的方法。</p><p><a name="retrieving-the-request-path"></a></p><h4 id="获取请求路径" tabindex="-1"><a class="header-anchor" href="#获取请求路径" aria-hidden="true">#</a> 获取请求路径</h4><p><code>path</code> 方法返回请求的路径信息。因此，如果传入的请求针对 <code>http://example.com/foo/bar</code>，则 <code>path</code> 方法将返回 <code>foo/bar</code>：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$uri = $request-&gt;path();

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="inspecting-the-request-path"></a></p><h4 id="检查请求路径-路由信息" tabindex="-1"><a class="header-anchor" href="#检查请求路径-路由信息" aria-hidden="true">#</a> 检查请求路径/路由信息</h4><p><code>is</code> 方法允许您验证传入请求路径是否与给定的模式匹配。当使用此方法时，您可以使用 <code>*</code> 字符作为通配符：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>if ($request-&gt;is(&#39;admin/*&#39;)) {
    // ...
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用 <code>routeIs</code> 方法，您可以确定传入的请求是否与 <a href="./routing#named-routes">命名路由</a> 匹配：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>if ($request-&gt;routeIs(&#39;admin.*&#39;)) {
    // ...
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="retrieving-the-request-url"></a></p><h4 id="获取请求-url" tabindex="-1"><a class="header-anchor" href="#获取请求-url" aria-hidden="true">#</a> 获取请求 URL</h4><p>要获取传入请求的完整 URL，您可以使用 <code>url</code> 或 <code>fullUrl</code> 方法。<code>url</code> 方法将返回不带查询字符串的 URL，而<code>fullUrl</code> 方法将包括查询字符串：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$url = $request-&gt;url();

$urlWithQueryString = $request-&gt;fullUrl();

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果您想将查询字符串数据附加到当前 URL，请调用 <code>fullUrlWithQuery</code> 方法。此方法将给定的查询字符串变量数组与当前查询字符串合并：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$request-&gt;fullUrlWithQuery([&#39;type&#39; =&gt; &#39;phone&#39;]);

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="retrieving-the-request-host"></a></p><h4 id="获取请求-host" tabindex="-1"><a class="header-anchor" href="#获取请求-host" aria-hidden="true">#</a> 获取请求 Host</h4><p>您可以通过 <code>host</code>、<code>httpHost</code> 和 <code>schemeAndHttpHost</code> 方法获取传入请求的 「host」：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$request-&gt;host();
$request-&gt;httpHost();
$request-&gt;schemeAndHttpHost();

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="retrieving-the-request-method"></a></p><h4 id="获取请求方法" tabindex="-1"><a class="header-anchor" href="#获取请求方法" aria-hidden="true">#</a> 获取请求方法</h4><p><code>method</code> 方法将返回请求的 HTTP 动词。您可以使用 <code>isMethod</code> 方法来验证 HTTP 动词是否与给定的字符串匹配：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$method = $request-&gt;method();

if ($request-&gt;isMethod(&#39;post&#39;)) {
    // ...
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="request-headers"></a></p><h3 id="请求头" tabindex="-1"><a class="header-anchor" href="#请求头" aria-hidden="true">#</a> 请求头</h3><p>您可以使用<code>header</code> 方法从 <code>Illuminate\\Http\\Request</code> 实例中检索请求标头。如果请求中没有该标头，则返回 <code>null</code>。但是，<code>header</code> 方法接受两个可选参数，如果该标头在请求中不存在，则返回第二个参数：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$value = $request-&gt;header(&#39;X-Header-Name&#39;);

$value = $request-&gt;header(&#39;X-Header-Name&#39;, &#39;default&#39;);

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>hasHeader</code> 方法可用于确定请求是否包含给定的标头：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>if ($request-&gt;hasHeader(&#39;X-Header-Name&#39;)) {
    // ...
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>为了方便起见，<code>bearerToken</code> 方法可用于从 <code>Authorization</code> 标头检索授权标记。如果不存在此类标头，将返回一个空字符串：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$token = $request-&gt;bearerToken();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a name="request-ip-address"></a></p><h3 id="请求-ip-地址" tabindex="-1"><a class="header-anchor" href="#请求-ip-地址" aria-hidden="true">#</a> 请求 IP 地址</h3><p><code>ip</code> 方法可用于检索向您的应用程序发出请求的客户端的 IP 地址：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ipAddress = $request-&gt;ip();

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="content-negotiation"></a></p><h3 id="内容协商" tabindex="-1"><a class="header-anchor" href="#内容协商" aria-hidden="true">#</a> 内容协商</h3><p>Laravel 提供了几种方法，通过 <code>Accept</code> 标头检查传入请求的请求内容类型。首先，<code>getAcceptableContentTypes</code> 方法将返回包含请求接受的所有内容类型的数组：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$contentTypes = $request-&gt;getAcceptableContentTypes();

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><code>accepts</code> 方法接受一个内容类型数组，并在请求接受任何内容类型时返回 <code>true</code>。否则，将返回 <code>false</code>：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>if ($request-&gt;accepts([&#39;text/html&#39;, &#39;application/json&#39;])) {
    // ...
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>您可以使用 <code>prefers</code> 方法确定给定内容类型数组中的哪种内容类型由请求最具优势。如果请求未接受任何提供的内容类型，则返回 <code>null</code>：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$preferred = $request-&gt;prefers([&#39;text/html&#39;, &#39;application/json&#39;]);

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>由于许多应用程序仅提供 HTML 或 JSON，因此您可以使用 <code>expectsJson</code> 方法快速确定传入请求是否期望获得 JSON 响应：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>if ($request-&gt;expectsJson()) {
    // ...
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="psr7-requests"></a></p><h3 id="psr-7-请求" tabindex="-1"><a class="header-anchor" href="#psr-7-请求" aria-hidden="true">#</a> PSR-7 请求</h3>`,70),p={href:"https://www.php-fig.org/psr/psr-7/",target:"_blank",rel:"noopener noreferrer"},u=n("em",null,"Symfony HTTP Message Bridge",-1),v=a(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">composer</span> require symfony/psr-http-message-bridge
<span class="token function">composer</span> require nyholm/psr7
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>安装这些库之后，您可以通过在路由闭包或控制器方法上的请求接口进行类型提示来获取 PSR-7 请求：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>use Psr\\Http\\Message\\ServerRequestInterface;

Route::get(&#39;/&#39;, function (ServerRequestInterface $request) {
    // ...
});

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>注意</strong> 如果您从路由或控制器返回 PSR-7 响应实例，它将自动转换回 Laravel 响应实例，并由框架显示。</p></blockquote><p><a name="input"></a></p><h2 id="输入" tabindex="-1"><a class="header-anchor" href="#输入" aria-hidden="true">#</a> 输入</h2><p><a name="retrieving-input"></a></p><h3 id="检索输入" tabindex="-1"><a class="header-anchor" href="#检索输入" aria-hidden="true">#</a> 检索输入</h3><p><a name="retrieving-all-input-data"></a></p><h4 id="检索所有输入数据" tabindex="-1"><a class="header-anchor" href="#检索所有输入数据" aria-hidden="true">#</a> 检索所有输入数据</h4><p>您可以使用 <code>all</code> 方法将所有传入请求的输入数据作为 <code>array</code> 检索。无论传入请求是否来自 HTML 表单或 XHR 请求，都可以使用此方法：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$input = $request-&gt;all();

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>使用 <code>collect</code> 方法，您可以将所有传入请求的输入数据作为 <a href="./collections">集合</a> 检索：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$input = $request-&gt;collect();

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><code>collect</code> 方法还允许您将传入请求的子集作为集合检索：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$request-&gt;collect(&#39;users&#39;)-&gt;each(function (string $user) {
    // ...
});

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="retrieving-an-input-value"></a></p><h4 id="检索输入值" tabindex="-1"><a class="header-anchor" href="#检索输入值" aria-hidden="true">#</a> 检索输入值</h4><p>使用几个简单的方法，无论请求使用了哪种 HTTP 动词，都可以从您的 <code>Illuminate\\Http\\Request</code> 实例访问所有用户输入。<code>input</code> 方法可用于检索用户输入：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$name = $request-&gt;input(&#39;name&#39;);

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>您可以将默认值作为第二个参数传递给 <code>input</code> 方法。如果请求中不存在所请求的输入值，则返回此值：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$name = $request-&gt;input(&#39;name&#39;, &#39;Sally&#39;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>处理包含数组输入的表单时，请使用「.」符号访问数组：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$name = $request-&gt;input(&#39;products.0.name&#39;);

$names = $request-&gt;input(&#39;products.*.name&#39;);

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>您可以调用不带任何参数的 <code>input</code> 方法，以将所有输入值作为关联数组检索出来：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$input = $request-&gt;input();

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="retrieving-input-from-the-query-string"></a></p><h4 id="从查询字符串检索输入" tabindex="-1"><a class="header-anchor" href="#从查询字符串检索输入" aria-hidden="true">#</a> 从查询字符串检索输入</h4><p>虽然 <code>input</code> 方法从整个请求消息载荷（包括查询字符串）检索值，但 <code>query</code> 方法仅从查询字符串检索值：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$name = $request-&gt;query(&#39;name&#39;);

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>如果请求的查询字符串值数据不存在，则将返回此方法的第二个参数：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$name = $request-&gt;query(&#39;name&#39;, &#39;Helen&#39;);

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>您可以调用不带任何参数的 <code>query</code> 方法，以将所有查询字符串值作为关联数组检索出来：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$query = $request-&gt;query();

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="retrieving-json-input-values"></a></p><h4 id="检索-json-输入值" tabindex="-1"><a class="header-anchor" href="#检索-json-输入值" aria-hidden="true">#</a> 检索 JSON 输入值</h4><p>当向您的应用程序发送 JSON 请求时，只要请求的 <code>Content-Type</code> 标头正确设置为 <code>application/json</code>，您就可以通过 <code>input</code> 方法访问 JSON 数据。您甚至可以使用「.」语法来检索嵌套在 JSON 数组/对象中的值：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$name = $request-&gt;input(&#39;user.name&#39;);

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="retrieving-stringable-input-values"></a></p><h4 id="检索可字符串化的输入值" tabindex="-1"><a class="header-anchor" href="#检索可字符串化的输入值" aria-hidden="true">#</a> 检索可字符串化的输入值</h4><p>您可以使用 <code>string</code> 方法将请求的输入数据检索为 <a href="./helpers#fluent-strings"><code>Illuminate\\Support\\Stringable</code></a> 的实例，而不是将其作为基本 <code>string</code> 检索：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$name = $request-&gt;string(&#39;name&#39;)-&gt;trim();

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="retrieving-boolean-input-values"></a></p><h4 id="检索布尔值输入" tabindex="-1"><a class="header-anchor" href="#检索布尔值输入" aria-hidden="true">#</a> 检索布尔值输入</h4><p>处理类似复选框的 HTML 元素时，您的应用程序可能会接收到实际上是字符串的「true」。例如，「true」或「on」。为了方便起见，您可以使用 <code>boolean</code> 方法将这些值作为布尔值检索。<code>boolean</code> 方法对于 1，「1」，true，「true」，「on」和「yes」，返回 <code>true</code>。所有其他值将返回 <code>false</code>：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$archived = $request-&gt;boolean(&#39;archived&#39;);

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="retrieving-date-input-values"></a></p><h4 id="检索日期输入值" tabindex="-1"><a class="header-anchor" href="#检索日期输入值" aria-hidden="true">#</a> 检索日期输入值</h4><p>为了方便起见，包含日期 / 时间的输入值可以使用 <code>date</code> 方法检索为 Carbon 实例。如果请求中不包含给定名称的输入值，则返回 <code>null</code>：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$birthday = $request-&gt;date(&#39;birthday&#39;);

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><code>date</code> 方法可接受的第二个和第三个参数可用于分别指定日期的格式和时区：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$elapsed = $request-&gt;date(&#39;elapsed&#39;, &#39;!H:i&#39;, &#39;Europe/Madrid&#39;);

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>如果输入值存在但格式无效，则会抛出一个 <code>InvalidArgumentException</code> 异常；因此，在调用 <code>date</code> 方法之前建议对输入进行验证。</p><p><a name="retrieving-enum-input-values"></a></p><h4 id="检索枚举输入值" tabindex="-1"><a class="header-anchor" href="#检索枚举输入值" aria-hidden="true">#</a> 检索枚举输入值</h4>`,55),m={href:"https://www.php.net/manual/en/language.types.enumerations.php",target:"_blank",rel:"noopener noreferrer"},h=n("code",null,"null",-1),b=n("code",null,"enum",-1),g=a(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>use App\\Enums\\Status;

$status = $request-&gt;enum(&#39;status&#39;, Status::class);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="retrieving-input-via-dynamic-properties"></a></p><h4 id="通过动态属性检索输入" tabindex="-1"><a class="header-anchor" href="#通过动态属性检索输入" aria-hidden="true">#</a> 通过动态属性检索输入</h4><p>您也可以使用 <code>Illuminate\\Http\\Request</code> 实例上的动态属性访问用户输入。例如，如果您的应用程序的表单之一包含一个 <code>name</code> 字段，则可以像这样访问该字段的值：</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token variable">$name</span> <span class="token operator">=</span> <span class="token variable">$request</span><span class="token operator">-&gt;</span><span class="token property">name</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>使用动态属性时，Laravel 首先会在请求负载中查找参数的值，如果不存在，则会在匹配路由的参数中搜索该字段。</p><p><a name="retrieving-a-portion-of-the-input-data"></a></p><h4 id="检索输入数据的一部分" tabindex="-1"><a class="header-anchor" href="#检索输入数据的一部分" aria-hidden="true">#</a> 检索输入数据的一部分</h4><p>如果您需要检索输入数据的子集，则可以使用 <code>only</code> 和 <code>except</code> 方法。这两个方法都接受一个单一的 <code>array</code> 或动态参数列表：</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token variable">$input</span> <span class="token operator">=</span> <span class="token variable">$request</span><span class="token operator">-&gt;</span><span class="token function">only</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;username&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;password&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token variable">$input</span> <span class="token operator">=</span> <span class="token variable">$request</span><span class="token operator">-&gt;</span><span class="token function">only</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;username&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;password&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token variable">$input</span> <span class="token operator">=</span> <span class="token variable">$request</span><span class="token operator">-&gt;</span><span class="token function">except</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;credit_card&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token variable">$input</span> <span class="token operator">=</span> <span class="token variable">$request</span><span class="token operator">-&gt;</span><span class="token function">except</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;credit_card&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>警告</strong><code>only</code> 方法返回您请求的所有键 / 值对；但是，它不会返回请求中不存在的键 / 值对。</p></blockquote><p><a name="determining-if-input-is-present"></a></p><h3 id="判断输入是否存在" tabindex="-1"><a class="header-anchor" href="#判断输入是否存在" aria-hidden="true">#</a> 判断输入是否存在</h3><p>您可以使用 <code>has</code> 方法来确定请求中是否存在某个值。如果请求中存在该值则 <code>has</code> 方法返回 <code>true</code>：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>if ($request-&gt;has(&#39;name&#39;)) {
    // ...
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当给定一个数组时，<code>has</code> 方法将确定所有指定的值是否都存在：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>if ($request-&gt;has([&#39;name&#39;, &#39;email&#39;])) {
    // ...
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>whenHas</code> 方法将在请求中存在一个值时执行给定的闭包：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$request-&gt;whenHas(&#39;name&#39;, function (string $input) {
    // ...
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以通过向 <code>whenHas</code> 方法传递第二个闭包来执行，在请求中没有指定值的情况下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$request-&gt;whenHas(&#39;name&#39;, function (string $input) {
    // &quot;name&quot; 值存在...
}, function () {
    // &quot;name&quot; 值不存在...
});

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>hasAny</code> 方法返回 <code>true</code>，如果任一指定的值存在，则它返回 <code>true</code>：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>if ($request-&gt;hasAny([&#39;name&#39;, &#39;email&#39;])) {
    // ...
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果您想要确定请求中是否存在一个值且不是一个空字符串，则可以使用 <code>filled</code> 方法：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>if ($request-&gt;filled(&#39;name&#39;)) {
    // ...
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>whenFilled</code> 方法将在请求中存在一个值且不是空字符串时执行给定的闭包：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$request-&gt;whenFilled(&#39;name&#39;, function (string $input) {
    // ...
});

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以通过向 <code>whenFilled</code> 方法传递第二个闭包来执行，在请求中没有指定值的情况下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$request-&gt;whenFilled(&#39;name&#39;, function (string $input) {
    // &quot;name&quot; 值已填写...
}, function () {
    // &quot;name&quot; 值未填写...
});

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>要确定给定的键是否不存在于请求中，可以使用 <code>missing</code> 和 <code>whenMissing</code> 方法：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>if ($request-&gt;missing(&#39;name&#39;)) {
    // ...
}

$request-&gt;whenMissing(&#39;name&#39;, function (array $input) {
    // &quot;name&quot; 值缺失...
}, function () {
    // &quot;name&quot; 值存在...
});

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="merging-additional-input"></a></p><h3 id="合并其他输入" tabindex="-1"><a class="header-anchor" href="#合并其他输入" aria-hidden="true">#</a> 合并其他输入</h3><p>有时，您可能需要手动将其他输入合并到请求的现有输入数据中。为此，可以使用 <code>merge</code> 方法。如果给定的输入键已经存在于请求中，它将被提供给 <code>merge</code> 方法的数据所覆盖：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$request-&gt;merge([&#39;votes&#39; =&gt; 0]);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果请求的输入数据中不存在相应的键，则可以使用 <code>mergeIfMissing</code> 方法将输入合并到请求中：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$request-&gt;mergeIfMissing([&#39;votes&#39; =&gt; 0]);

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="old-input"></a></p><h3 id="旧输入" tabindex="-1"><a class="header-anchor" href="#旧输入" aria-hidden="true">#</a> 旧输入</h3><p>Laravel 允许你在两次请求之间保留数据。这个特性在检测到验证错误后重新填充表单时特别有用。但是，如果您使用 Laravel 的包含的 <a href="./validation">表单验证</a>，不需要自己手动调用这些方法，因为 Laravel 的一些内置验证功能将自动调用它们。</p><p><a name="flashing-input-to-the-session"></a></p><h4 id="闪存输入到-session" tabindex="-1"><a class="header-anchor" href="#闪存输入到-session" aria-hidden="true">#</a> 闪存输入到 Session</h4><p>在 <code>Illuminate\\Http\\Request</code> 类上的 <code>flash</code> 方法将当前输入闪存到 <a href="./session">session</a>，以便在下一次用户请求应用程序时使用：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$request-&gt;flash();

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>您还可以使用 <code>flashOnly</code> 和 <code>flashExcept</code> 方法闪存一部分请求数据到 Session。这些方法对于将敏感信息（如密码）排除在 Session 外的情况下非常有用：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$request-&gt;flashOnly([&#39;username&#39;, &#39;email&#39;]);

$request-&gt;flashExcept(&#39;password&#39;);

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="flashing-input-then-redirecting"></a></p><h4 id="闪存输入后重定向" tabindex="-1"><a class="header-anchor" href="#闪存输入后重定向" aria-hidden="true">#</a> 闪存输入后重定向</h4><p>由于您通常希望闪存输入到 Session，然后重定向到以前的页面，因此您可以使用 <code>withInput</code> 方法轻松地将输入闪存到重定向中：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>return redirect(&#39;form&#39;)-&gt;withInput();

return redirect()-&gt;route(&#39;user.create&#39;)-&gt;withInput();

return redirect(&#39;form&#39;)-&gt;withInput(
    $request-&gt;except(&#39;password&#39;)
);

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="retrieving-old-input"></a></p><h4 id="检索旧输入值" tabindex="-1"><a class="header-anchor" href="#检索旧输入值" aria-hidden="true">#</a> 检索旧输入值</h4><p>若要获取上一次请求所保存的旧输入数据，可以在 <code>Illuminate\\Http\\Request</code> 的实例上调用 <code>old</code> 方法。<code>old</code> 方法会从 <a href="./session">session</a> 中检索先前闪存的输入数据：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$username = $request-&gt;old(&#39;username&#39;);

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>此外，Laravel 还提供了一个全局辅助函数 <code>old</code>。如果您在 <a href="./blade">Blade 模板</a> 中显示旧的输入，则更方便使用 <code>old</code> 辅助函数重新填充表单。如果给定字段没有旧输入，则会返回 <code>null</code>：</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string double-quoted-string">&quot;text&quot;</span> name<span class="token operator">=</span><span class="token string double-quoted-string">&quot;username&quot;</span> value<span class="token operator">=</span><span class="token string double-quoted-string">&quot;{{ old(&#39;username&#39;) }}&quot;</span><span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a name="cookies"></a></p><h3 id="cookies" tabindex="-1"><a class="header-anchor" href="#cookies" aria-hidden="true">#</a> Cookies</h3><p><a name="retrieving-cookies-from-requests"></a></p><h4 id="检索请求中的-cookies" tabindex="-1"><a class="header-anchor" href="#检索请求中的-cookies" aria-hidden="true">#</a> 检索请求中的 Cookies</h4><p>Laravel 框架创建的所有 cookies 都经过加密并签名，这意味着如果客户端更改了 cookie 值，则这些 cookie 将被视为无效。要从请求中检索 cookie 值，请在 <code>Illuminate\\Http\\Request</code> 实例上使用 <code>cookie</code> 方法：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$value = $request-&gt;cookie(&#39;name&#39;);

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="input-trimming-and-normalization"></a></p><h2 id="输入过滤和规范化" tabindex="-1"><a class="header-anchor" href="#输入过滤和规范化" aria-hidden="true">#</a> 输入过滤和规范化</h2><p>默认情况下，Laravel 在应用程序的全局中间件栈中包含 <code>App\\Http\\Middleware\\TrimStrings</code> 和 <code>Illuminate\\Foundation\\Http\\Middleware\\ConvertEmptyStringsToNull</code> 中间件。这些中间件在 <code>App\\Http\\Kernel</code> 类的全局中间件栈中列出。这些中间件将自动修剪请求中的所有字符串字段，并将任何空字符串字段转换为 <code>null</code>。这使您不必在路由和控制器中担心这些规范化问题。</p><h4 id="禁用输入规范化" tabindex="-1"><a class="header-anchor" href="#禁用输入规范化" aria-hidden="true">#</a> 禁用输入规范化</h4><p>如果要禁用所有请求的该行为，可以从 <code>App\\Http\\Kernel</code> 类的 <code>$middleware</code> 属性中删除这两个中间件，从而将它们从应用程序的中间件栈中删除。</p><p>如果您想要禁用应用程序的一部分请求的字符串修剪和空字符串转换，可以使用中间件提供的 <code>skipWhen</code> 方法。该方法接受一个闭包，该闭包应返回 <code>true</code> 或 <code>false</code>，以指示是否应跳过输入规范化。通常情况下，需要在应用程序的 <code>AppServiceProvider</code> 的 <code>boot</code> 方法中调用 <code>skipWhen</code> 方法。</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">App<span class="token punctuation">\\</span>Http<span class="token punctuation">\\</span>Middleware<span class="token punctuation">\\</span>TrimStrings</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Http<span class="token punctuation">\\</span>Request</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Foundation<span class="token punctuation">\\</span>Http<span class="token punctuation">\\</span>Middleware<span class="token punctuation">\\</span>ConvertEmptyStringsToNull</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * Bootstrap any application services.
 */</span>
<span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">boot</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">void</span>
<span class="token punctuation">{</span>
    <span class="token class-name static-context">TrimStrings</span><span class="token operator">::</span><span class="token function">skipWhen</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token class-name type-declaration">Request</span> <span class="token variable">$request</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token variable">$request</span><span class="token operator">-&gt;</span><span class="token function">is</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;admin/*&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token class-name static-context">ConvertEmptyStringsToNull</span><span class="token operator">::</span><span class="token function">skipWhen</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token class-name type-declaration">Request</span> <span class="token variable">$request</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// ...</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="files"></a></p><h2 id="文件" tabindex="-1"><a class="header-anchor" href="#文件" aria-hidden="true">#</a> 文件</h2><p><a name="retrieving-uploaded-files"></a></p><h3 id="检索上传的文件" tabindex="-1"><a class="header-anchor" href="#检索上传的文件" aria-hidden="true">#</a> 检索上传的文件</h3><p>您可以使用 <code>file</code> 方法或动态属性从 <code>Illuminate\\Http\\Request</code> 实例中检索已上传的文件。<code>file</code> 方法返回 <code>Illuminate\\Http\\UploadedFile</code> 类的实例，该类扩展了 PHP 的 <code>SplFileInfo</code> 类，并提供了各种用于与文件交互的方法：</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token variable">$file</span> <span class="token operator">=</span> <span class="token variable">$request</span><span class="token operator">-&gt;</span><span class="token function">file</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;photo&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token variable">$file</span> <span class="token operator">=</span> <span class="token variable">$request</span><span class="token operator">-&gt;</span><span class="token property">photo</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>您可以使用 <code>hasFile</code> 方法检查请求中是否存在文件：</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token variable">$request</span><span class="token operator">-&gt;</span><span class="token function">hasFile</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;photo&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="validating-successful-uploads"></a></p><h4 id="验证成功上传的文件" tabindex="-1"><a class="header-anchor" href="#验证成功上传的文件" aria-hidden="true">#</a> 验证成功上传的文件</h4><p>除了检查文件是否存在之外，您还可以通过 <code>isValid</code> 方法验证上传文件时是否存在问题：</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token variable">$request</span><span class="token operator">-&gt;</span><span class="token function">file</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;photo&#39;</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">isValid</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="file-paths-extensions"></a></p><h4 id="文件路径和扩展名" tabindex="-1"><a class="header-anchor" href="#文件路径和扩展名" aria-hidden="true">#</a> 文件路径和扩展名</h4><p><code>UploadedFile</code> 类还包含访问文件的完全限定路径及其扩展名的方法。<code>extension</code> 方法将尝试基于其内容猜测文件的扩展名。此扩展名可能与客户端提供的扩展名不同：</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token variable">$path</span> <span class="token operator">=</span> <span class="token variable">$request</span><span class="token operator">-&gt;</span><span class="token property">photo</span><span class="token operator">-&gt;</span><span class="token function">path</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token variable">$extension</span> <span class="token operator">=</span> <span class="token variable">$request</span><span class="token operator">-&gt;</span><span class="token property">photo</span><span class="token operator">-&gt;</span><span class="token function">extension</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="other-file-methods"></a></p><h4 id="其他文件方法" tabindex="-1"><a class="header-anchor" href="#其他文件方法" aria-hidden="true">#</a> 其他文件方法</h4>`,87),k=n("code",null,"UploadedFile",-1),x={href:"https://github.com/symfony/symfony/blob/6.0/src/Symfony/Component/HttpFoundation/File/UploadedFile.php",target:"_blank",rel:"noopener noreferrer"},f=a(`<p><a name="storing-uploaded-files"></a></p><h3 id="存储上传的文件" tabindex="-1"><a class="header-anchor" href="#存储上传的文件" aria-hidden="true">#</a> 存储上传的文件</h3><p>要存储已上传的文件，通常会使用您配置的一个<a href="./filesystem">文件系统</a> 。<code>UploadedFile</code> 类具有一个 <code>store</code> 方法，该方法将上传的文件移动到您的磁盘中的一个位置，该位置可以是本地文件系统上的位置，也可以是像 Amazon S3 这样的云存储位置。</p><p><code>store</code> 方法接受存储文件的路径，该路径相对于文件系统的配置根目录。此路径不应包含文件名，因为将自动生成唯一的 ID 作为文件名。</p><p><code>store</code> 方法还接受一个可选的第二个参数，用于指定应用于存储文件的磁盘的名称。该方法将返回相对于磁盘根目录的文件路径：</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token variable">$path</span> <span class="token operator">=</span> <span class="token variable">$request</span><span class="token operator">-&gt;</span><span class="token property">photo</span><span class="token operator">-&gt;</span><span class="token function">store</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;images&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token variable">$path</span> <span class="token operator">=</span> <span class="token variable">$request</span><span class="token operator">-&gt;</span><span class="token property">photo</span><span class="token operator">-&gt;</span><span class="token function">store</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;images&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;s3&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果您不希望自动生成文件名，则可以使用 <code>storeAs</code> 方法，该方法接受路径、文件名和磁盘名称作为其参数：</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token variable">$path</span> <span class="token operator">=</span> <span class="token variable">$request</span><span class="token operator">-&gt;</span><span class="token property">photo</span><span class="token operator">-&gt;</span><span class="token function">storeAs</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;images&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;filename.jpg&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token variable">$path</span> <span class="token operator">=</span> <span class="token variable">$request</span><span class="token operator">-&gt;</span><span class="token property">photo</span><span class="token operator">-&gt;</span><span class="token function">storeAs</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;images&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;filename.jpg&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;s3&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>注意</strong> 有关在 Laravel 中存储文件的更多信息，请查看完整的 <a href="./filesystem">文件存储文档</a> 。</p></blockquote><p><a name="configuring-trusted-proxies"></a></p><h2 id="配置受信任的代理" tabindex="-1"><a class="header-anchor" href="#配置受信任的代理" aria-hidden="true">#</a> 配置受信任的代理</h2><p>在终止 TLS / SSL 证书的负载平衡器后面运行应用程序时，您可能会注意到，使用 <code>url</code> 帮助程序时，应用程序有时不会生成 HTTPS 链接。通常，这是因为正在从端口 <code>80</code> 上的负载平衡器转发应用程序的流量，并且不知道它应该生成安全链接。</p><p>为了解决这个问题，您可以使用 <code>App\\Http\\Middleware\\TrustProxies</code> 中间件，这个中间件已经包含在 Laravel 应用程序中，它允许您快速定制应用程序应信任的负载均衡器或代理。您信任的代理应该被列在此中间件的 <code>$proxies</code> 属性上的数组中。除了配置受信任的代理之外，您还可以配置应该信任的代理 <code>$headers</code>：</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>

<span class="token keyword">namespace</span> <span class="token package">App<span class="token punctuation">\\</span>Http<span class="token punctuation">\\</span>Middleware</span><span class="token punctuation">;</span>

<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Http<span class="token punctuation">\\</span>Middleware<span class="token punctuation">\\</span>TrustProxies</span> <span class="token keyword">as</span> Middleware<span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Http<span class="token punctuation">\\</span>Request</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">TrustProxies</span> <span class="token keyword">extends</span> <span class="token class-name">Middleware</span>
<span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * 此应用程序的受信任代理。
     *
     * <span class="token keyword">@var</span> <span class="token class-name"><span class="token keyword">string</span><span class="token punctuation">|</span><span class="token keyword">array</span></span>
     */</span>
    <span class="token keyword">protected</span> <span class="token variable">$proxies</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
        <span class="token string single-quoted-string">&#39;192.168.1.1&#39;</span><span class="token punctuation">,</span>
        <span class="token string single-quoted-string">&#39;192.168.1.2&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 应用于检测代理的标头。
     *
     * <span class="token keyword">@var</span> <span class="token class-name"><span class="token keyword">int</span></span>
     */</span>
    <span class="token keyword">protected</span> <span class="token variable">$headers</span> <span class="token operator">=</span> <span class="token class-name static-context">Request</span><span class="token operator">::</span><span class="token class-name">HEADER_X_FORWARDED_FOR</span> <span class="token operator">|</span> <span class="token class-name">Request</span><span class="token operator">::</span><span class="token class-name">HEADER_X_FORWARDED_HOST</span> <span class="token operator">|</span> <span class="token class-name">Request</span><span class="token operator">::</span><span class="token class-name">HEADER_X_FORWARDED_PORT</span> <span class="token operator">|</span> <span class="token class-name">Request</span><span class="token operator">::</span><span class="token constant">HEADER_X_FORWARDED_PROTO</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14),q=n("strong",null,"注意",-1),$=n("code",null,"$headers",-1),y=n("code",null,"Request::HEADER_X_FORWARDED_AWS_ELB",-1),H=n("code",null,"$headers",-1),R={href:"https://symfony.com/doc/current/deployment/proxies.html",target:"_blank",rel:"noopener noreferrer"},_=a(`<p><a name="trusting-all-proxies"></a></p><h4 id="信任所有代理" tabindex="-1"><a class="header-anchor" href="#信任所有代理" aria-hidden="true">#</a> 信任所有代理</h4><p>如果您使用的是 Amazon AWS 或其他「云」负载均衡器提供商，则可能不知道实际负载均衡器的 IP 地址。在这种情况下，您可以使用 <code>*</code> 来信任所有代理：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/**
 * 应用所信任的代理。
 *
 * @var string|array
 */
protected $proxies = &#39;*&#39;;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="configuring-trusted-hosts"></a></p><h2 id="配置可信任的-host" tabindex="-1"><a class="header-anchor" href="#配置可信任的-host" aria-hidden="true">#</a> 配置可信任的 Host</h2><p>默认情况下，Laravel 将响应它接收到的所有请求，而不管 HTTP 请求的 <code>Host</code> 标头的内容是什么。此外，在 web 请求期间生成应用程序的绝对 URL 时，将使用 <code>Host</code> 头的值。</p><p>通常情况下，您应该配置您的 Web 服务器（如 Nginx 或 Apache）仅向匹配给定主机名的应用程序发送请求。然而，如果您没有直接自定义您的 Web 服务器的能力，需要指示 Laravel 仅响应特定主机名的请求，您可以为您的应用程序启用 <code>App\\Http\\Middleware\\TrustHosts</code> 中间件。</p><p><code>TrustHosts</code> 中间件已经包含在应用程序的 <code>$middleware</code> 堆栈中；但是，您应该将其取消注释以使其生效。在此中间件的 <code>hosts</code> 方法中，您可以指定您的应用程序应该响应的主机名。具有其他 <code>Host</code> 值标头的传入请求将被拒绝：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/**
 * 获取应被信任的主机模式。
 *
 * @return array&lt;int, string&gt;
 */
public function hosts(): array
{
    return [
        &#39;laravel.test&#39;,
        $this-&gt;allSubdomainsOfApplicationUrl(),
    ];
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>allSubdomainsOfApplicationUrl</code> 帮助程序方法将返回与您的应用程序 <code>app.url</code> 配置值的所有子域相匹配的正则表达式。在构建利用通配符子域的应用程序时，这个帮助程序提供了一种方便的方法来允许所有应用程序的子域。</p>`,11);function w(S,T){const s=d("ExternalLinkIcon");return l(),r("div",null,[o,n("p",null,[n("a",p,[e("PSR-7 标准"),i(s)]),e(" 指定了 HTTP 消息的接口，包括请求和响应。如果您想要获取 PSR-7 请求的实例而不是 Laravel 请求，您首先需要安装一些库。Laravel 使用 "),u,e(" 组件将典型的 Laravel 请求和响应转换为 PSR-7 兼容的实现：")]),v,n("p",null,[e("还可以从请求中检索对应于 "),n("a",m,[e("PHP 枚举"),i(s)]),e(" 的输入值。如果请求中不包含给定名称的输入值或枚举没有与输入值匹配的备份值，则返回 "),h,e("。"),b,e(" 方法接受输入值的名称和枚举类作为其第一个和第二个参数：")]),g,n("p",null,[k,e(" 实例有许多其他可用的方法。有关这些方法的更多信息，请查看该类的 "),n("a",x,[e("API文档"),i(s)]),e(" 。")]),f,n("blockquote",null,[n("p",null,[q,e(" 如果您正在使用 AWS 弹性负载平衡，请将 "),$,e(" 值设置为 "),y,e("。有关可在 "),H,e(" 属性中使用的常量的更多信息，请查看 Symfony 关于 "),n("a",R,[e("信任代理"),i(s)]),e(" 的文档。")])]),_])}const P=t(c,[["render",w],["__file","requests.html.vue"]]);export{P as default};
