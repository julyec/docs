import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{r as p,o as s,c as d,b as t,d as e,e as r,a as n}from"./app-8cdff07c.js";const c={},i=n('<h1 id="http-client" tabindex="-1"><a class="header-anchor" href="#http-client" aria-hidden="true">#</a> HTTP Client</h1><ul><li><a href="#introduction">简介</a></li><li><a href="#making-requests">创建请求</a><ul><li><a href="#request-data">请求数据</a></li><li><a href="#headers">请求头</a></li><li><a href="#authentication">认证</a></li><li><a href="#timeout">超时</a></li><li><a href="#retries">重试</a></li><li><a href="#error-handling">错误处理</a></li><li><a href="#guzzle-middleware">Guzzle 中间件</a></li><li><a href="#guzzle-options">Guzzle 选项</a></li></ul></li><li><a href="#concurrent-requests">并发请求</a></li><li><a href="#macros">宏</a></li><li><a href="#testing">测试</a><ul><li><a href="#faking-responses">模拟响应</a></li><li><a href="#inspecting-requests">注入请求</a></li><li><a href="#preventing-stray-requests">防止意外请求</a></li></ul></li><li><a href="#events">事件</a></li></ul><p><a name="introduction"></a></p><h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h2>',4),l={href:"http://docs.guzzlephp.org/en/stable/",target:"_blank",rel:"noopener noreferrer"},u=n(`<p>在开始之前，你需要确保你的项目已经安装了 Guzzle 包作为依赖项。默认情况下，Laravel 已经包含了 Guzzle 包。但如果你此前手动移除了它，你也可以通过 Composer 重新安装它：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">composer</span> require guzzlehttp/guzzle
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a name="making-requests"></a></p><h2 id="创建请求" tabindex="-1"><a class="header-anchor" href="#创建请求" aria-hidden="true">#</a> 创建请求</h2><p>你可以使用 <code>Http</code> Facade 提供的 <code>head</code>, <code>get</code>, <code>post</code>, <code>put</code>, <code>patch</code>，以及 <code>delete</code> 方法来创建请求。首先，让我们先看一下如何发出一个基础的 GET 请求：</p><pre><code>use Illuminate\\Support\\Facades\\Http;

$response = Http::get(&#39;http://example.com&#39;);
</code></pre><p><code>get</code> 方法返回一个 <code>Illuminate\\Http\\Client\\Response</code> 的实例，该实例提供了大量的方法来检查请求的响应：</p><pre><code>$response-&gt;body() : string;
$response-&gt;json($key = null, $default = null) : array|mixed;
$response-&gt;object() : object;
$response-&gt;collect($key = null) : Illuminate\\Support\\Collection;
$response-&gt;status() : int;
$response-&gt;successful() : bool;
$response-&gt;redirect(): bool;
$response-&gt;failed() : bool;
$response-&gt;clientError() : bool;
$response-&gt;header($header) : string;
$response-&gt;headers() : array;
</code></pre><p><code>Illuminate\\Http\\Client\\Response</code> 对象同样实现了 PHP 的 <code>ArrayAccess</code> 接口，这代表着你可以直接访问响应的 JSON 数据：</p><pre><code>return Http::get(&#39;http://example.com/users/1&#39;)[&#39;name&#39;];
</code></pre><p>除了上面列出的响应方法之外，还可以使用以下方法来确定响应是否具有相应的状态码：</p><pre><code>$response-&gt;ok() : bool;                  // 200 OK
$response-&gt;created() : bool;             // 201 Created
$response-&gt;accepted() : bool;            // 202 Accepted
$response-&gt;noContent() : bool;           // 204 No Content
$response-&gt;movedPermanently() : bool;    // 301 Moved Permanently
$response-&gt;found() : bool;               // 302 Found
$response-&gt;badRequest() : bool;          // 400 Bad Request
$response-&gt;unauthorized() : bool;        // 401 Unauthorized
$response-&gt;paymentRequired() : bool;     // 402 Payment Required
$response-&gt;forbidden() : bool;           // 403 Forbidden
$response-&gt;notFound() : bool;            // 404 Not Found
$response-&gt;requestTimeout() : bool;      // 408 Request Timeout
$response-&gt;conflict() : bool;            // 409 Conflict
$response-&gt;unprocessableEntity() : bool; // 422 Unprocessable Entity
$response-&gt;tooManyRequests() : bool;     // 429 Too Many Requests
$response-&gt;serverError() : bool;         // 500 Internal Server Error
</code></pre><p><a name="uri-templates"></a></p><h4 id="uri-模版" tabindex="-1"><a class="header-anchor" href="#uri-模版" aria-hidden="true">#</a> URI 模版</h4>`,14),h={href:"https://www.rfc-editor.org/rfc/rfc6570",target:"_blank",rel:"noopener noreferrer"},g=t("code",null,"withUrlParameters",-1),m=n(`<pre><code>Http::withUrlParameters([
    &#39;endpoint&#39; =&gt; &#39;https://laravel.com&#39;,
    &#39;page&#39; =&gt; &#39;docs&#39;,
    &#39;version&#39; =&gt; &#39;9.x&#39;,
    &#39;topic&#39; =&gt; &#39;validation&#39;,
])-&gt;get(&#39;{+endpoint}/{page}/{version}/{topic}&#39;);
</code></pre><p><a name="dumping-requests"></a></p><h4 id="打印请求信息" tabindex="-1"><a class="header-anchor" href="#打印请求信息" aria-hidden="true">#</a> 打印请求信息</h4><p>如果要在发送请求之前打印输出请求信息并且结束脚本运行，你应该在创建请求前调用 <code>dd</code> 方法：</p><pre><code>return Http::dd()-&gt;get(&#39;http://example.com&#39;);
</code></pre><p><a name="request-data"></a></p><h3 id="请求数据" tabindex="-1"><a class="header-anchor" href="#请求数据" aria-hidden="true">#</a> 请求数据</h3><p>大多数情况下，<code>POST</code>、 <code>PUT</code> 和 <code>PATCH</code> 携带着额外的请求数据是相当常见的。所以，这些方法的第二个参数接受一个包含着请求数据的数组。默认情况下，这些数据会使用 <code>application/json</code> 类型随请求发送：</p><pre><code>use Illuminate\\Support\\Facades\\Http;

$response = Http::post(&#39;http://example.com/users&#39;, [
    &#39;name&#39; =&gt; &#39;Steve&#39;,
    &#39;role&#39; =&gt; &#39;Network Administrator&#39;,
]);
</code></pre><p><a name="get-request-query-parameters"></a></p><h4 id="get-请求查询参数" tabindex="-1"><a class="header-anchor" href="#get-请求查询参数" aria-hidden="true">#</a> GET 请求查询参数</h4><p>在创建 <code>GET</code> 请求时，你可以通过直接向 URL 添加查询字符串或是将键值对作为第二个参数传递给 <code>get</code> 方法：</p><pre><code>$response = Http::get(&#39;http://example.com/users&#39;, [
    &#39;name&#39; =&gt; &#39;Taylor&#39;,
    &#39;page&#39; =&gt; 1,
]);
</code></pre><p><a name="sending-form-url-encoded-requests"></a></p><h4 id="发送-url-编码请求" tabindex="-1"><a class="header-anchor" href="#发送-url-编码请求" aria-hidden="true">#</a> 发送 URL 编码请求</h4><p>如果你希望使用 <code>application/x-www-form-urlencoded</code> 作为请求的数据类型，你应该在创建请求前调用 <code>asForm</code> 方法：</p><pre><code>$response = Http::asForm()-&gt;post(&#39;http://example.com/users&#39;, [
    &#39;name&#39; =&gt; &#39;Sara&#39;,
    &#39;role&#39; =&gt; &#39;Privacy Consultant&#39;,
]);
</code></pre><p><a name="sending-a-raw-request-body"></a></p><h4 id="发送原始数据-raw-请求" tabindex="-1"><a class="header-anchor" href="#发送原始数据-raw-请求" aria-hidden="true">#</a> 发送原始数据（Raw）请求</h4><p>如果你想使用一个原始请求体发送请求，你可以在创建请求前调用 <code>withBody</code> 方法。你还可以将数据类型作为第二个参数传递给 <code>withBody</code> 方法：</p><pre><code>$response = Http::withBody(
    base64_encode($photo), &#39;image/jpeg&#39;
)-&gt;post(&#39;http://example.com/photo&#39;);
</code></pre><p><a name="multi-part-requests"></a></p><h4 id="multi-part-请求" tabindex="-1"><a class="header-anchor" href="#multi-part-请求" aria-hidden="true">#</a> Multi-Part 请求</h4><p>如果你希望将文件作为 Multipart 请求发送，你应该在创建请求前调用 <code>attach</code> 方法。该方法接受文件的名字（相当于 HTML Input 的 name 属性）以及它对应的内容。你也可以在第三个参数传入自定义的文件名称，这不是必须的。如果有需要，你也可以通过第三个参数来指定文件的文件名：</p><pre><code>$response = Http::attach(
    &#39;attachment&#39;, file_get_contents(&#39;photo.jpg&#39;), &#39;photo.jpg&#39;
)-&gt;post(&#39;http://example.com/attachments&#39;);
</code></pre><p>除了传递文件的原始内容，你也可以传递 Stream 流数据：</p><pre><code>$photo = fopen(&#39;photo.jpg&#39;, &#39;r&#39;);

$response = Http::attach(
    &#39;attachment&#39;, $photo, &#39;photo.jpg&#39;
)-&gt;post(&#39;http://example.com/attachments&#39;);
</code></pre><p><a name="headers"></a></p><h3 id="请求头" tabindex="-1"><a class="header-anchor" href="#请求头" aria-hidden="true">#</a> 请求头</h3><p>你可以通过 <code>withHeaders</code> 方法添加请求头。该 <code>withHeaders</code> 方法接受一个数组格式的键 / 值对：</p><pre><code>$response = Http::withHeaders([
    &#39;X-First&#39; =&gt; &#39;foo&#39;,
    &#39;X-Second&#39; =&gt; &#39;bar&#39;
])-&gt;post(&#39;http://example.com/users&#39;, [
    &#39;name&#39; =&gt; &#39;Taylor&#39;,
]);
</code></pre><p>你可以使用 <code>accept</code> 方法指定应用程序响应你的请求所需的内容类型：</p><pre><code>$response = Http::accept(&#39;application/json&#39;)-&gt;get(&#39;http://example.com/users&#39;);
</code></pre><p>为方便起见，你可以使用 <code>acceptJson</code> 方法快速指定应用程序需要 <code>application/json</code> 内容类型来响应你的请求：</p><pre><code>$response = Http::acceptJson()-&gt;get(&#39;http://example.com/users&#39;);
</code></pre><p><a name="authentication"></a></p><h3 id="认证" tabindex="-1"><a class="header-anchor" href="#认证" aria-hidden="true">#</a> 认证</h3><p>你可以使用 <code>withBasicAuth</code> 和 <code>withDigestAuth</code> 方法来分别指定使用 Basic 或是 Digest 认证方式：</p><pre><code>// Basic 认证方式...
$response = Http::withBasicAuth(&#39;taylor@laravel.com&#39;, &#39;secret&#39;)-&gt;post(/* ... */);

// Digest 认证方式...
$response = Http::withDigestAuth(&#39;taylor@laravel.com&#39;, &#39;secret&#39;)-&gt;post(/* ... */);
</code></pre><p><a name="bearer-tokens"></a></p><h4 id="bearer-令牌" tabindex="-1"><a class="header-anchor" href="#bearer-令牌" aria-hidden="true">#</a> Bearer 令牌</h4><p>如果你想要为你的请求快速添加 <code>Authorization</code> Token 令牌请求头，你可以使用 <code>withToken</code> 方法：</p><pre><code>$response = Http::withToken(&#39;token&#39;)-&gt;post(/* ... */);
</code></pre><p><a name="timeout"></a></p><h3 id="超时" tabindex="-1"><a class="header-anchor" href="#超时" aria-hidden="true">#</a> 超时</h3><p>该 <code>timeout</code> 方法用于指定响应的最大等待秒数：</p><pre><code>$response = Http::timeout(3)-&gt;get(/* ... */);
</code></pre><p>如果响应时间超过了指定的超时时间，将会抛出 <code>Illuminate\\Http\\Client\\ConnectionException</code> 异常。</p><p>你可以尝试使用 <code>connectTimeout</code> 方法指定连接到服务器时等待的最大秒数：</p><pre><code>$response = Http::connectTimeout(3)-&gt;get(/* ... */);
</code></pre><p><a name="retries"></a></p><h3 id="重试" tabindex="-1"><a class="header-anchor" href="#重试" aria-hidden="true">#</a> 重试</h3><p>如果你希望 HTTP 客户端在发生客户端或服务端错误时自动进行重试，你可以使用 retry 方法。该 retry 方法接受两个参数：重新尝试次数以及重试间隔（毫秒）：</p><pre><code>$response = Http::retry(3, 100)-&gt;post(/* ... */);
</code></pre><p>如果需要，你可以将第三个参数传递给该 <code>retry</code> 方法。第三个参数应该是一个可调用的，用于确定是否应该实际尝试重试。例如，你可能希望仅在初始请求遇到以下情况时重试请求 <code>ConnectionException</code>：</p><pre><code>use Exception;
use Illuminate\\Http\\Client\\PendingRequest;

$response = Http::retry(3, 100, function (Exception $exception, PendingRequest $request) {
    return $exception instanceof ConnectionException;
})-&gt;post(/* ... */);
</code></pre><p>如果请求失败，你可以在新请求之前更改请求。你可以通过修改 <code>retry</code> 方法的第三个请求参数来实现这一点。例如，当请求返回身份验证错误，则可以使用新的授权令牌重试请求：</p><pre><code>use Exception;
use Illuminate\\Http\\Client\\PendingRequest;

$response = Http::withToken($this-&gt;getToken())-&gt;retry(2, 0, function (Exception $exception, PendingRequest $request) {
    if (! $exception instanceof RequestException || $exception-&gt;response-&gt;status() !== 401) {
        return false;
    }

    $request-&gt;withToken($this-&gt;getNewToken());

    return true;
})-&gt;post(/* ... */);
</code></pre><p>所有请求都失败时，将会抛出一个<code>Illuminate\\Http\\Client\\RequestException</code>实例。如果不想抛出错误，你需要设置请求方法的<code>throw</code>参数为<code>false</code>。禁止后，当所有的请求都尝试完成后，最后一个响应将会return回来：</p><pre><code>$response = Http::retry(3, 100, throw: false)-&gt;post(/* ... */);
</code></pre><blockquote><p><strong>注意</strong><br> 如果所有的请求都因为连接问题失败， 即使 <code>throw</code>属性设置为<code>false</code>，<code>Illuminate\\Http\\Client\\ConnectionException</code>错误依旧会被抛出。</p></blockquote><p><a name="error-handling"></a></p><h3 id="错误处理" tabindex="-1"><a class="header-anchor" href="#错误处理" aria-hidden="true">#</a> 错误处理</h3><p>与 Guzzle 的默认处理方式不同，Laravel 的 HTTP 客户端在客户端或者服务端出现4xx或者5xx错误时并不会抛出错误。你应该通过<code>successful</code>、 <code>clientError</code>或 <code>serverError</code>方法来校验返回的响应是否有错误信息:</p><pre><code>// 判断状态码是否是 2xx
$response-&gt;successful();

// 判断错误码是否是 4xx或5xx
$response-&gt;failed();

// 判断错误码是4xx
$response-&gt;clientError();

// 判断错误码是5xx
$response-&gt;serverError();

// 如果出现客户端或服务器错误，则执行给定的回调
$response-&gt;onError(callable $callback);
</code></pre><p><a name="throwing-exceptions"></a></p><h4 id="主动抛出错误" tabindex="-1"><a class="header-anchor" href="#主动抛出错误" aria-hidden="true">#</a> 主动抛出错误</h4><p>如果你想在收到的响应是客户端或者服务端错误时抛出一个<code>Illuminate\\Http\\Client\\RequestException</code>实例，你可以使用<code>throw</code> 或 <code>throwIf</code> 方法：</p><pre><code>use Illuminate\\Http\\Client\\Response;

$response = Http::post(/* ... */);

// 当收到服务端或客户端错误时抛出
$response-&gt;throw();

// 当满足condition条件是抛出错误
$response-&gt;throwIf($condition);

// 当给定的闭包执行结果是true时抛出错误
$response-&gt;throwIf(fn (Response $response) =&gt; true);

// 当给定条件是false是抛出错误
$response-&gt;throwUnless($condition);

// 当给定的闭包执行结果是false时抛出错误
$response-&gt;throwUnless(fn (Response $response) =&gt; false);

// 当收到的状态码是403时抛出错误
$response-&gt;throwIfStatus(403);

// 当收到的状态码不是200时抛出错误
$response-&gt;throwUnlessStatus(200);

return $response[&#39;user&#39;][&#39;id&#39;];
</code></pre><p><code>Illuminate\\Http\\Client\\RequestException</code> 实例拥有一个 <code>$response</code> 公共属性，该属性允许你检查返回的响应。</p><p>如果没有发生错误，<code>throw</code> 方法返回响应实例，你可以将其他操作链接到 <code>throw</code> 方法：</p><pre><code>return Http::post(/* ... */)-&gt;throw()-&gt;json();
</code></pre><p>如果你希望在抛出异常前进行一些操作，你可以向 <code>throw</code> 方法传递一个闭包。异常将会在闭包执行完成后自动抛出，你不必在闭包内手动抛出异常：</p><pre><code>use Illuminate\\Http\\Client\\Response;
use Illuminate\\Http\\Client\\RequestException;

return Http::post(/* ... */)-&gt;throw(function (Response $response, RequestException $e) {
    // ...
})-&gt;json();
</code></pre><p><a name="guzzle-middleware"></a></p><h3 id="guzzle-中间件" tabindex="-1"><a class="header-anchor" href="#guzzle-中间件" aria-hidden="true">#</a> Guzzle 中间件</h3>`,76),H={href:"https://docs.guzzlephp.org/en/stable/handlers-and-middleware.html",target:"_blank",rel:"noopener noreferrer"},f=t("code",null,"withMiddleware",-1),$=t("code",null,"mapRequest",-1),b=n(`<pre><code>use GuzzleHttp\\Middleware;
use Illuminate\\Support\\Facades\\Http;
use Psr\\Http\\Message\\RequestInterface;

$response = Http::withMiddleware(
    Middleware::mapRequest(function (RequestInterface $request) {
        $request = $request-&gt;withHeader(&#39;X-Example&#39;, &#39;Value&#39;);
        
        return $request;
    })
)-&gt;get(&#39;http://example.com&#39;);
</code></pre><p>同样地，你可以通过 <code>withMiddleware</code> 方法结合 Guzzle 的 <code>mapResponse</code> 中间件工厂注册一个中间件来检查传入的 HTTP 响应：</p><pre><code>use GuzzleHttp\\Middleware;
use Illuminate\\Support\\Facades\\Http;
use Psr\\Http\\Message\\ResponseInterface;

$response = Http::withMiddleware(
    Middleware::mapResponse(function (ResponseInterface $response) {
        $header = $response-&gt;getHeader(&#39;X-Example&#39;);

        // ...
        
        return $response;
    })
)-&gt;get(&#39;http://example.com&#39;);
</code></pre><p><a name="guzzle-options"></a></p><h3 id="guzzle-选项" tabindex="-1"><a class="header-anchor" href="#guzzle-选项" aria-hidden="true">#</a> Guzzle 选项</h3>`,5),x=t("code",null,"withOptions",-1),q={href:"http://docs.guzzlephp.org/en/stable/request-options.html",target:"_blank",rel:"noopener noreferrer"},R=t("code",null,"withOptions",-1),v=n(`<pre><code>$response = Http::withOptions([
    &#39;debug&#39; =&gt; true,
])-&gt;get(&#39;http://example.com/users&#39;);
</code></pre><p><a name="concurrent-requests"></a></p><h2 id="并发请求" tabindex="-1"><a class="header-anchor" href="#并发请求" aria-hidden="true">#</a> 并发请求</h2><p>有时，你可能希望同时发出多个 HTTP 请求。换句话说，你希望同时分派多个请求，而不是按顺序发出请求。当与慢速 HTTP API 交互时，这可以显着提高性能。</p><p>值得庆幸的是，你可以使用该 <code>pool</code> 方法完成此操作。<code>pool</code> 方法接受一个接收 <code>Illuminate\\Http\\Client\\Pool</code> 实例的闭包，能让你轻松地将请求添加到请求池以进行调度：</p><pre><code>use Illuminate\\Http\\Client\\Pool;
use Illuminate\\Support\\Facades\\Http;

$responses = Http::pool(fn (Pool $pool) =&gt; [
    $pool-&gt;get(&#39;http://localhost/first&#39;),
    $pool-&gt;get(&#39;http://localhost/second&#39;),
    $pool-&gt;get(&#39;http://localhost/third&#39;),
]);

return $responses[0]-&gt;ok() &amp;&amp;
       $responses[1]-&gt;ok() &amp;&amp;
       $responses[2]-&gt;ok();
</code></pre><p>如你所见，每个响应实例可以按照添加到池中的顺序来访问。你可以使用 <code>as</code> 方法命名请求，该方法能让你按名称访问相应的响应：</p><pre><code>use Illuminate\\Http\\Client\\Pool;
use Illuminate\\Support\\Facades\\Http;

$responses = Http::pool(fn (Pool $pool) =&gt; [
    $pool-&gt;as(&#39;first&#39;)-&gt;get(&#39;http://localhost/first&#39;),
    $pool-&gt;as(&#39;second&#39;)-&gt;get(&#39;http://localhost/second&#39;),
    $pool-&gt;as(&#39;third&#39;)-&gt;get(&#39;http://localhost/third&#39;),
]);

return $responses[&#39;first&#39;]-&gt;ok();
</code></pre><p><a name="macros"></a></p><h2 id="宏" tabindex="-1"><a class="header-anchor" href="#宏" aria-hidden="true">#</a> 宏</h2><p>Laravel HTTP客户端允许你定义「宏」（macros），这可以作为一种流畅、表达力强的机制，在与应用程序中的服务交互时配置常见的请求路径和标头。要开始使用，你可以在应用程序的 <code>App\\Providers\\AppServiceProvider</code> 类的 <code>boot</code> 方法中定义宏：</p><pre><code>use Illuminate\\Support\\Facades\\Http;

/**
 * 引导应用程序服务。
 */
public function boot(): void
{
    Http::macro(&#39;github&#39;, function () {
        return Http::withHeaders([
            &#39;X-Example&#39; =&gt; &#39;example&#39;,
        ])-&gt;baseUrl(&#39;https://github.com&#39;);
    });
}
</code></pre><p>一旦你配置了宏，你可以在应用程序的任何地方调用它，以使用指定的配置创建一个挂起的请求：</p><pre><code>$response = Http::github()-&gt;get(&#39;/&#39;);
</code></pre><p><a name="testing"></a></p><h2 id="测试" tabindex="-1"><a class="header-anchor" href="#测试" aria-hidden="true">#</a> 测试</h2><p>许多 Laravel 服务提供功能来帮助你轻松、表达性地编写测试，而 Laravel 的 HTTP 客户端也不例外。<code>Http</code> 门面的 <code>fake</code> 方法允许你指示 HTTP 客户端在发出请求时返回存根/虚拟响应。</p><p><a name="faking-responses"></a></p><h3 id="伪造响应" tabindex="-1"><a class="header-anchor" href="#伪造响应" aria-hidden="true">#</a> 伪造响应</h3><p>例如，要指示 HTTP 客户端在每个请求中返回空的 <code>200</code> 状态码响应，你可以调用 <code>fake</code> 方法而不传递参数：</p><pre><code>use Illuminate\\Support\\Facades\\Http;

Http::fake();

$response = Http::post(/* ... */);
</code></pre><p><a name="faking-specific-urls"></a></p><h4 id="伪造特定的url" tabindex="-1"><a class="header-anchor" href="#伪造特定的url" aria-hidden="true">#</a> 伪造特定的URL</h4><p>另外，你可以向 <code>fake</code> 方法传递一个数组。该数组的键应该代表你想要伪造的 URL 模式及其关联的响应。<code>*</code> 字符可以用作通配符。任何请求到未伪造的 URL 的请求将会被实际执行。你可以使用 <code>Http</code> 门面的 <code>response</code> 方法来构建这些端点的存根/虚拟响应：</p><pre><code>Http::fake([
    // 为 GitHub 端点存根一个 JSON 响应...
    &#39;github.com/*&#39; =&gt; Http::response([&#39;foo&#39; =&gt; &#39;bar&#39;], 200, $headers),

    // 为 Google 端点存根一个字符串响应...
    &#39;google.com/*&#39; =&gt; Http::response(&#39;Hello World&#39;, 200, $headers),
]);
</code></pre><p>如果你想指定一个后备 URL 模式来存根所有不匹配的 URL，你可以使用单个 <code>*</code> 字符：</p><pre><code>Http::fake([
    // 为 GitHub 端点存根 JSON 响应……
    &#39;github.com/*&#39; =&gt; Http::response([&#39;foo&#39; =&gt; &#39;bar&#39;], 200, [&#39;Headers&#39;]),

    // 为其他所有端点存根字符串响应……
    &#39;*&#39; =&gt; Http::response(&#39;Hello World&#39;, 200, [&#39;Headers&#39;]),
]);
</code></pre><p><a name="faking-response-sequences"></a></p><h4 id="伪造响应序列" tabindex="-1"><a class="header-anchor" href="#伪造响应序列" aria-hidden="true">#</a> 伪造响应序列</h4><p>有时候，你可能需要为单个 URL 指定其一系列的伪造响应的返回顺序。你可以使用 <code>Http::sequence</code> 方法来构建响应，以实现这个功能：</p><pre><code>Http::fake([
    // 存根 GitHub端点的一系列响应……
    &#39;github.com/*&#39; =&gt; Http::sequence()
                            -&gt;push(&#39;Hello World&#39;, 200)
                            -&gt;push([&#39;foo&#39; =&gt; &#39;bar&#39;], 200)
                            -&gt;pushStatus(404),
]);
</code></pre><p>当响应序列中的所有响应都被消费完后，后续的任何请求都将导致相应序列抛出一个异常。如果你想要在响应序列为空时指定一个默认的响应，则可以使用 <code>whenEmpty</code> 方法：</p><pre><code>Http::fake([
    // 为 GitHub 端点存根一系列响应
    &#39;github.com/*&#39; =&gt; Http::sequence()
                            -&gt;push(&#39;Hello World&#39;, 200)
                            -&gt;push([&#39;foo&#39; =&gt; &#39;bar&#39;], 200)
                            -&gt;whenEmpty(Http::response()),
]);
</code></pre><p>如果你想要伪造一个响应序列，但你又期望在伪造的时候无需指定一个特定的 URL 匹配模式，那么你可以使用 <code>Http::fakeSequence</code> 方法：</p><pre><code>Http::fakeSequence()
        -&gt;push(&#39;Hello World&#39;, 200)
        -&gt;whenEmpty(Http::response());
</code></pre><p><a name="fake-callback"></a></p><h4 id="fake-回调" tabindex="-1"><a class="header-anchor" href="#fake-回调" aria-hidden="true">#</a> Fake 回调</h4><p>如果你需要更为复杂的逻辑来确定某些端点返回什么响应，你需要传递一个闭包给 <code>fake</code> 方法。这个闭包应该接受一个 <code>Illuminate\\Http\\Client\\Request</code> 实例且返回一个响应实例。在闭包中你可以执行任何必要的逻辑来确定要返回的响应类型：</p><pre><code>use Illuminate\\Http\\Client\\Request;

Http::fake(function (Request $request) {
    return Http::response(&#39;Hello World&#39;, 200);
});
</code></pre><p><a name="preventing-stray-requests"></a></p><h3 id="避免「流浪的」请求-确保请求总是伪造的" tabindex="-1"><a class="header-anchor" href="#避免「流浪的」请求-确保请求总是伪造的" aria-hidden="true">#</a> 避免「流浪的」请求（确保请求总是伪造的）</h3><p>如果你想确保通过 HTTP 客户端发送的所有请求在整个单独的测试或完整的测试套件中都是伪造的，那么你可以调用 <code>preventStrayRequests</code> 方法。在调用该方法后，如果一个请求没有与之相匹配的伪造的响应，则将会抛出一个异常而不是发起一个真实的请求：</p><pre><code>use Illuminate\\Support\\Facades\\Http;

Http::preventStrayRequests();

Http::fake([
    &#39;github.com/*&#39; =&gt; Http::response(&#39;ok&#39;),
]);

// 将会返回 OK 响应……
Http::get(&#39;https://github.com/laravel/framework&#39;);

// 抛出一个异常……
Http::get(&#39;https://laravel.com&#39;);
</code></pre><p><a name="inspecting-requests"></a></p><h3 id="检查请求" tabindex="-1"><a class="header-anchor" href="#检查请求" aria-hidden="true">#</a> 检查请求</h3><p>在伪造响应时，你可能希望检查客户端收到的请求，以确保你的应用程序发出了正确的数据和标头。你可以在调用 <code>Http::fake</code> 方法后调用 <code>Http::assertSent</code> 方法来实现这个功能。</p><p><code>assertSent</code> 方法接受一个闭包，该闭包应当接收一个 <code>Illuminate\\Http\\Client\\Request</code> 实例且返回一个布尔值，该布尔值指示请求是否符合预期。为了使得测试通过，必须至少发出一个符合给定预期的请求：</p><pre><code>use Illuminate\\Http\\Client\\Request;
use Illuminate\\Support\\Facades\\Http;

Http::fake();

Http::withHeaders([
    &#39;X-First&#39; =&gt; &#39;foo&#39;,
])-&gt;post(&#39;http://example.com/users&#39;, [
    &#39;name&#39; =&gt; &#39;Taylor&#39;,
    &#39;role&#39; =&gt; &#39;Developer&#39;,
]);

Http::assertSent(function (Request $request) {
    return $request-&gt;hasHeader(&#39;X-First&#39;, &#39;foo&#39;) &amp;&amp;
           $request-&gt;url() == &#39;http://example.com/users&#39; &amp;&amp;
           $request[&#39;name&#39;] == &#39;Taylor&#39; &amp;&amp;
           $request[&#39;role&#39;] == &#39;Developer&#39;;
});
</code></pre><p>如果有需要，你可以使用 <code>assertNotSent</code> 方法来断言未发出指定的请求：</p><pre><code>use Illuminate\\Http\\Client\\Request;
use Illuminate\\Support\\Facades\\Http;

Http::fake();

Http::post(&#39;http://example.com/users&#39;, [
    &#39;name&#39; =&gt; &#39;Taylor&#39;,
    &#39;role&#39; =&gt; &#39;Developer&#39;,
]);

Http::assertNotSent(function (Request $request) {
    return $request-&gt;url() === &#39;http://example.com/posts&#39;;
});
</code></pre><p>你可以使用 <code>assertSentCount</code> 方法来断言在测试过程中发出的请求数量：</p><pre><code>Http::fake();

Http::assertSentCount(5);
</code></pre><p>或者，你也可以使用 <code>assertNothingSent</code> 方法来断言在测试过程中没有发出任何请求：</p><pre><code>Http::fake();

Http::assertNothingSent();
</code></pre><p><a name="recording-requests-and-responses"></a></p><h4 id="记录请求和响应" tabindex="-1"><a class="header-anchor" href="#记录请求和响应" aria-hidden="true">#</a> 记录请求和响应</h4><p>你可以使用 <code>recorded</code> 方法来收集所有的请求及其对应的响应。<code>recorded</code> 方法返回一个数组集合，其中包含了 <code>Illuminate\\Http\\Client\\Request</code> 实例和 <code>Illuminate\\Http\\Client\\Response</code> 实例：</p><pre><code>Http::fake([
    &#39;https://laravel.com&#39; =&gt; Http::response(status: 500),
    &#39;https://nova.laravel.com/&#39; =&gt; Http::response(),
]);

Http::get(&#39;https://laravel.com&#39;);
Http::get(&#39;https://nova.laravel.com/&#39;);

$recorded = Http::recorded();

[$request, $response] = $recorded[0];
</code></pre><p>此外，<code>recorded</code> 函数也接受一个闭包，该闭包接受一个 <code>Illuminate\\Http\\Client\\Request</code> 和 <code>Illuminate\\Http\\Client\\Response</code> 实例，该闭包可以用来按照你的期望来过滤请求和响应：</p><pre><code>use Illuminate\\Http\\Client\\Request;
use Illuminate\\Http\\Client\\Response;

Http::fake([
    &#39;https://laravel.com&#39; =&gt; Http::response(status: 500),
    &#39;https://nova.laravel.com/&#39; =&gt; Http::response(),
]);

Http::get(&#39;https://laravel.com&#39;);
Http::get(&#39;https://nova.laravel.com/&#39;);

$recorded = Http::recorded(function (Request $request, Response $response) {
    return $request-&gt;url() !== &#39;https://laravel.com&#39; &amp;&amp;
           $response-&gt;successful();
});
</code></pre><p><a name="events"></a></p><h2 id="事件" tabindex="-1"><a class="header-anchor" href="#事件" aria-hidden="true">#</a> 事件</h2><p>Laravel 在发出 HTTP 请求的过程中将会触发三个事件。在发送请求前将会触发 <code>RequestSending</code> 事件，在接收到了指定请求对应的响应时将会触发 <code>ResponseReceived</code> 事件。如果没有收到指定请求对应的响应则会触发 <code>ConnectionFailed</code> 事件。</p><p><code>RequestSending</code> 和 <code>ConnectionFailed</code> 事件都包含一个公共的 <code>$request</code> 属性，你可以使用它来检查 <code>Illuminate\\Http\\Client\\Request</code> 实例。 同样，<code>ResponseReceived</code> 事件包含一个 <code>$request</code> 属性以及一个 <code>$response</code> 属性，可用于检查 <code>Illuminate\\Http\\Client\\Response</code> 实例。 你可以在你的 <code>App\\Providers\\EventServiceProvider</code> 服务提供者中为这个事件注册事件监听器：</p><pre><code>/**
 * 应用程序的事件侦听器映射。
 *
 * @var array
 */
protected $listen = [
    &#39;Illuminate\\Http\\Client\\Events\\RequestSending&#39; =&gt; [
        &#39;App\\Listeners\\LogRequestSending&#39;,
    ],
    &#39;Illuminate\\Http\\Client\\Events\\ResponseReceived&#39; =&gt; [
        &#39;App\\Listeners\\LogResponseReceived&#39;,
    ],
    &#39;Illuminate\\Http\\Client\\Events\\ConnectionFailed&#39; =&gt; [
        &#39;App\\Listeners\\LogConnectionFailed&#39;,
    ],
];
</code></pre>`,65);function w(k,z){const o=p("ExternalLinkIcon");return s(),d("div",null,[i,t("p",null,[e("Laravel 为 "),t("a",l,[e("Guzzle HTTP 客户端"),r(o)]),e(" 提供了一套语义化且轻量的 API，让你可用快速地使用 HTTP 请求与其他 Web 应用进行通信。该 API 专注于其在常见用例中的快速实现以及良好的开发者体验。")]),u,t("p",null,[e("HTTP客户端还允许你使用 "),t("a",h,[e("URI 模板规范"),r(o)]),e(" 构造请求URL. 要定义URI查询参数，你可以使用 "),g,e(" 方法：")]),m,t("p",null,[e("由于 Laravel 的 HTTP 客户端是由 Guzzle 提供支持的, 你可以利用 "),t("a",H,[e("Guzzle 中间件"),r(o)]),e(" 来操作发出的请求或检查传入的响应。要操作发出的请求，需要通过 "),f,e(" 方法和 Guzzle 的 "),$,e(" 中间件工厂注册一个 Guzzle 中间件：")]),b,t("p",null,[e("你可以使用 "),x,e(" 方法来指定额外的 "),t("a",q,[e("Guzzle 请求配置"),r(o)]),e("。"),R,e(" 方法接受数组形式的键 / 值对：")]),v])}const C=a(c,[["render",w],["__file","http-client.html.vue"]]);export{C as default};
