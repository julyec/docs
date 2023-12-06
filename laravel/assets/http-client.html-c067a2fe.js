import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{r as p,o as r,c as i,b as n,d as e,e as a,a as s}from"./app-06635a3b.js";const c={},l=s('<h1 id="http-client" tabindex="-1"><a class="header-anchor" href="#http-client" aria-hidden="true">#</a> HTTP Client</h1><ul><li><a href="#introduction">Introduction</a></li><li><a href="#making-requests">Making Requests</a><ul><li><a href="#request-data">Request Data</a></li><li><a href="#headers">Headers</a></li><li><a href="#authentication">Authentication</a></li><li><a href="#timeout">Timeout</a></li><li><a href="#retries">Retries</a></li><li><a href="#error-handling">Error Handling</a></li><li><a href="#guzzle-middleware">Guzzle Middleware</a></li><li><a href="#guzzle-options">Guzzle Options</a></li></ul></li><li><a href="#concurrent-requests">Concurrent Requests</a></li><li><a href="#macros">Macros</a></li><li><a href="#testing">Testing</a><ul><li><a href="#faking-responses">Faking Responses</a></li><li><a href="#inspecting-requests">Inspecting Requests</a></li><li><a href="#preventing-stray-requests">Preventing Stray Requests</a></li></ul></li><li><a href="#events">Events</a></li></ul><p><a name="introduction"></a></p><h2 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h2>',4),u={href:"http://docs.guzzlephp.org/en/stable/",target:"_blank",rel:"noopener noreferrer"},d=s(`<p>Before getting started, you should ensure that you have installed the Guzzle package as a dependency of your application. By default, Laravel automatically includes this dependency. However, if you have previously removed the package, you may install it again via Composer:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">composer</span> require guzzlehttp/guzzle
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a name="making-requests"></a></p><h2 id="making-requests" tabindex="-1"><a class="header-anchor" href="#making-requests" aria-hidden="true">#</a> Making Requests</h2><p>To make requests, you may use the <code>head</code>, <code>get</code>, <code>post</code>, <code>put</code>, <code>patch</code>, and <code>delete</code> methods provided by the <code>Http</code> facade. First, let&#39;s examine how to make a basic <code>GET</code> request to another URL:</p><pre><code>use Illuminate\\Support\\Facades\\Http;

$response = Http::get(&#39;http://example.com&#39;);
</code></pre><p>The <code>get</code> method returns an instance of <code>Illuminate\\Http\\Client\\Response</code>, which provides a variety of methods that may be used to inspect the response:</p><pre><code>$response-&gt;body() : string;
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
</code></pre><p>The <code>Illuminate\\Http\\Client\\Response</code> object also implements the PHP <code>ArrayAccess</code> interface, allowing you to access JSON response data directly on the response:</p><pre><code>return Http::get(&#39;http://example.com/users/1&#39;)[&#39;name&#39;];
</code></pre><p>In addition to the response methods listed above, the following methods may be used to determine if the response has a given status code:</p><pre><code>$response-&gt;ok() : bool;                  // 200 OK
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
</code></pre><p><a name="uri-templates"></a></p><h4 id="uri-templates" tabindex="-1"><a class="header-anchor" href="#uri-templates" aria-hidden="true">#</a> URI Templates</h4>`,14),h={href:"https://www.rfc-editor.org/rfc/rfc6570",target:"_blank",rel:"noopener noreferrer"},m=n("code",null,"withUrlParameters",-1),g=s(`<div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token class-name static-context">Http</span><span class="token operator">::</span><span class="token function">withUrlParameters</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
    <span class="token string single-quoted-string">&#39;endpoint&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;https://laravel.com&#39;</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;page&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;docs&#39;</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;version&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;9.x&#39;</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;topic&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;validation&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;{+endpoint}/{page}/{version}/{topic}&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="dumping-requests"></a></p><h4 id="dumping-requests" tabindex="-1"><a class="header-anchor" href="#dumping-requests" aria-hidden="true">#</a> Dumping Requests</h4><p>If you would like to dump the outgoing request instance before it is sent and terminate the script&#39;s execution, you may add the <code>dd</code> method to the beginning of your request definition:</p><pre><code>return Http::dd()-&gt;get(&#39;http://example.com&#39;);
</code></pre><p><a name="request-data"></a></p><h3 id="request-data" tabindex="-1"><a class="header-anchor" href="#request-data" aria-hidden="true">#</a> Request Data</h3><p>Of course, it is common when making <code>POST</code>, <code>PUT</code>, and <code>PATCH</code> requests to send additional data with your request, so these methods accept an array of data as their second argument. By default, data will be sent using the <code>application/json</code> content type:</p><pre><code>use Illuminate\\Support\\Facades\\Http;

$response = Http::post(&#39;http://example.com/users&#39;, [
    &#39;name&#39; =&gt; &#39;Steve&#39;,
    &#39;role&#39; =&gt; &#39;Network Administrator&#39;,
]);
</code></pre><p><a name="get-request-query-parameters"></a></p><h4 id="get-request-query-parameters" tabindex="-1"><a class="header-anchor" href="#get-request-query-parameters" aria-hidden="true">#</a> GET Request Query Parameters</h4><p>When making <code>GET</code> requests, you may either append a query string to the URL directly or pass an array of key / value pairs as the second argument to the <code>get</code> method:</p><pre><code>$response = Http::get(&#39;http://example.com/users&#39;, [
    &#39;name&#39; =&gt; &#39;Taylor&#39;,
    &#39;page&#39; =&gt; 1,
]);
</code></pre><p>Alternatively, the <code>withQueryParameters</code> method may be used:</p><pre><code>Http::retry(3, 100)-&gt;withQueryParameters([
    &#39;name&#39; =&gt; &#39;Taylor&#39;,
    &#39;page&#39; =&gt; 1,
])-&gt;get(&#39;http://example.com/users&#39;)
</code></pre><p><a name="sending-form-url-encoded-requests"></a></p><h4 id="sending-form-url-encoded-requests" tabindex="-1"><a class="header-anchor" href="#sending-form-url-encoded-requests" aria-hidden="true">#</a> Sending Form URL Encoded Requests</h4><p>If you would like to send data using the <code>application/x-www-form-urlencoded</code> content type, you should call the <code>asForm</code> method before making your request:</p><pre><code>$response = Http::asForm()-&gt;post(&#39;http://example.com/users&#39;, [
    &#39;name&#39; =&gt; &#39;Sara&#39;,
    &#39;role&#39; =&gt; &#39;Privacy Consultant&#39;,
]);
</code></pre><p><a name="sending-a-raw-request-body"></a></p><h4 id="sending-a-raw-request-body" tabindex="-1"><a class="header-anchor" href="#sending-a-raw-request-body" aria-hidden="true">#</a> Sending A Raw Request Body</h4><p>You may use the <code>withBody</code> method if you would like to provide a raw request body when making a request. The content type may be provided via the method&#39;s second argument:</p><pre><code>$response = Http::withBody(
    base64_encode($photo), &#39;image/jpeg&#39;
)-&gt;post(&#39;http://example.com/photo&#39;);
</code></pre><p><a name="multi-part-requests"></a></p><h4 id="multi-part-requests" tabindex="-1"><a class="header-anchor" href="#multi-part-requests" aria-hidden="true">#</a> Multi-Part Requests</h4><p>If you would like to send files as multi-part requests, you should call the <code>attach</code> method before making your request. This method accepts the name of the file and its contents. If needed, you may provide a third argument which will be considered the file&#39;s filename:</p><pre><code>$response = Http::attach(
    &#39;attachment&#39;, file_get_contents(&#39;photo.jpg&#39;), &#39;photo.jpg&#39;
)-&gt;post(&#39;http://example.com/attachments&#39;);
</code></pre><p>Instead of passing the raw contents of a file, you may pass a stream resource:</p><pre><code>$photo = fopen(&#39;photo.jpg&#39;, &#39;r&#39;);

$response = Http::attach(
    &#39;attachment&#39;, $photo, &#39;photo.jpg&#39;
)-&gt;post(&#39;http://example.com/attachments&#39;);
</code></pre><p><a name="headers"></a></p><h3 id="headers" tabindex="-1"><a class="header-anchor" href="#headers" aria-hidden="true">#</a> Headers</h3><p>Headers may be added to requests using the <code>withHeaders</code> method. This <code>withHeaders</code> method accepts an array of key / value pairs:</p><pre><code>$response = Http::withHeaders([
    &#39;X-First&#39; =&gt; &#39;foo&#39;,
    &#39;X-Second&#39; =&gt; &#39;bar&#39;
])-&gt;post(&#39;http://example.com/users&#39;, [
    &#39;name&#39; =&gt; &#39;Taylor&#39;,
]);
</code></pre><p>You may use the <code>accept</code> method to specify the content type that your application is expecting in response to your request:</p><pre><code>$response = Http::accept(&#39;application/json&#39;)-&gt;get(&#39;http://example.com/users&#39;);
</code></pre><p>For convenience, you may use the <code>acceptJson</code> method to quickly specify that your application expects the <code>application/json</code> content type in response to your request:</p><pre><code>$response = Http::acceptJson()-&gt;get(&#39;http://example.com/users&#39;);
</code></pre><p>The <code>withHeaders</code> method merges new headers into the request&#39;s existing headers. If needed, you may replace all of the headers entirely using the <code>replaceHeaders</code> method:</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token variable">$response</span> <span class="token operator">=</span> <span class="token class-name static-context">Http</span><span class="token operator">::</span><span class="token function">withHeaders</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
    <span class="token string single-quoted-string">&#39;X-Original&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;foo&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">replaceHeaders</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
    <span class="token string single-quoted-string">&#39;X-Replacement&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;bar&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;http://example.com/users&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>
    <span class="token string single-quoted-string">&#39;name&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;Taylor&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="authentication"></a></p><h3 id="authentication" tabindex="-1"><a class="header-anchor" href="#authentication" aria-hidden="true">#</a> Authentication</h3><p>You may specify basic and digest authentication credentials using the <code>withBasicAuth</code> and <code>withDigestAuth</code> methods, respectively:</p><pre><code>// Basic authentication...
$response = Http::withBasicAuth(&#39;taylor@laravel.com&#39;, &#39;secret&#39;)-&gt;post(/* ... */);

// Digest authentication...
$response = Http::withDigestAuth(&#39;taylor@laravel.com&#39;, &#39;secret&#39;)-&gt;post(/* ... */);
</code></pre><p><a name="bearer-tokens"></a></p><h4 id="bearer-tokens" tabindex="-1"><a class="header-anchor" href="#bearer-tokens" aria-hidden="true">#</a> Bearer Tokens</h4><p>If you would like to quickly add a bearer token to the request&#39;s <code>Authorization</code> header, you may use the <code>withToken</code> method:</p><pre><code>$response = Http::withToken(&#39;token&#39;)-&gt;post(/* ... */);
</code></pre><p><a name="timeout"></a></p><h3 id="timeout" tabindex="-1"><a class="header-anchor" href="#timeout" aria-hidden="true">#</a> Timeout</h3><p>The <code>timeout</code> method may be used to specify the maximum number of seconds to wait for a response. By default, the HTTP client will timeout after 30 seconds:</p><pre><code>$response = Http::timeout(3)-&gt;get(/* ... */);
</code></pre><p>If the given timeout is exceeded, an instance of <code>Illuminate\\Http\\Client\\ConnectionException</code> will be thrown.</p><p>You may specify the maximum number of seconds to wait while trying to connect to a server using the <code>connectTimeout</code> method:</p><pre><code>$response = Http::connectTimeout(3)-&gt;get(/* ... */);
</code></pre><p><a name="retries"></a></p><h3 id="retries" tabindex="-1"><a class="header-anchor" href="#retries" aria-hidden="true">#</a> Retries</h3><p>If you would like the HTTP client to automatically retry the request if a client or server error occurs, you may use the <code>retry</code> method. The <code>retry</code> method accepts the maximum number of times the request should be attempted and the number of milliseconds that Laravel should wait in between attempts:</p><pre><code>$response = Http::retry(3, 100)-&gt;post(/* ... */);
</code></pre><p>If needed, you may pass a third argument to the <code>retry</code> method. The third argument should be a callable that determines if the retries should actually be attempted. For example, you may wish to only retry the request if the initial request encounters an <code>ConnectionException</code>:</p><pre><code>use Exception;
use Illuminate\\Http\\Client\\PendingRequest;

$response = Http::retry(3, 100, function (Exception $exception, PendingRequest $request) {
    return $exception instanceof ConnectionException;
})-&gt;post(/* ... */);
</code></pre><p>If a request attempt fails, you may wish to make a change to the request before a new attempt is made. You can achieve this by modifying the request argument provided to the callable you provided to the <code>retry</code> method. For example, you might want to retry the request with a new authorization token if the first attempt returned an authentication error:</p><pre><code>use Exception;
use Illuminate\\Http\\Client\\PendingRequest;
use Illuminate\\Http\\Client\\RequestException;

$response = Http::withToken($this-&gt;getToken())-&gt;retry(2, 0, function (Exception $exception, PendingRequest $request) {
    if (! $exception instanceof RequestException || $exception-&gt;response-&gt;status() !== 401) {
        return false;
    }

    $request-&gt;withToken($this-&gt;getNewToken());

    return true;
})-&gt;post(/* ... */);
</code></pre><p>If all of the requests fail, an instance of <code>Illuminate\\Http\\Client\\RequestException</code> will be thrown. If you would like to disable this behavior, you may provide a <code>throw</code> argument with a value of <code>false</code>. When disabled, the last response received by the client will be returned after all retries have been attempted:</p><pre><code>$response = Http::retry(3, 100, throw: false)-&gt;post(/* ... */);
</code></pre><blockquote><p><strong>Warning</strong><br> If all of the requests fail because of a connection issue, a <code>Illuminate\\Http\\Client\\ConnectionException</code> will still be thrown even when the <code>throw</code> argument is set to <code>false</code>.</p></blockquote><p><a name="error-handling"></a></p><h3 id="error-handling" tabindex="-1"><a class="header-anchor" href="#error-handling" aria-hidden="true">#</a> Error Handling</h3><p>Unlike Guzzle&#39;s default behavior, Laravel&#39;s HTTP client wrapper does not throw exceptions on client or server errors (<code>400</code> and <code>500</code> level responses from servers). You may determine if one of these errors was returned using the <code>successful</code>, <code>clientError</code>, or <code>serverError</code> methods:</p><pre><code>// Determine if the status code is &gt;= 200 and &lt; 300...
$response-&gt;successful();

// Determine if the status code is &gt;= 400...
$response-&gt;failed();

// Determine if the response has a 400 level status code...
$response-&gt;clientError();

// Determine if the response has a 500 level status code...
$response-&gt;serverError();

// Immediately execute the given callback if there was a client or server error...
$response-&gt;onError(callable $callback);
</code></pre><p><a name="throwing-exceptions"></a></p><h4 id="throwing-exceptions" tabindex="-1"><a class="header-anchor" href="#throwing-exceptions" aria-hidden="true">#</a> Throwing Exceptions</h4><p>If you have a response instance and would like to throw an instance of <code>Illuminate\\Http\\Client\\RequestException</code> if the response status code indicates a client or server error, you may use the <code>throw</code> or <code>throwIf</code> methods:</p><pre><code>use Illuminate\\Http\\Client\\Response;

$response = Http::post(/* ... */);

// Throw an exception if a client or server error occurred...
$response-&gt;throw();

// Throw an exception if an error occurred and the given condition is true...
$response-&gt;throwIf($condition);

// Throw an exception if an error occurred and the given closure resolves to true...
$response-&gt;throwIf(fn (Response $response) =&gt; true);

// Throw an exception if an error occurred and the given condition is false...
$response-&gt;throwUnless($condition);

// Throw an exception if an error occurred and the given closure resolves to false...
$response-&gt;throwUnless(fn (Response $response) =&gt; false);

// Throw an exception if the response has a specific status code...
$response-&gt;throwIfStatus(403);

// Throw an exception unless the response has a specific status code...
$response-&gt;throwUnlessStatus(200);

return $response[&#39;user&#39;][&#39;id&#39;];
</code></pre><p>The <code>Illuminate\\Http\\Client\\RequestException</code> instance has a public <code>$response</code> property which will allow you to inspect the returned response.</p><p>The <code>throw</code> method returns the response instance if no error occurred, allowing you to chain other operations onto the <code>throw</code> method:</p><pre><code>return Http::post(/* ... */)-&gt;throw()-&gt;json();
</code></pre><p>If you would like to perform some additional logic before the exception is thrown, you may pass a closure to the <code>throw</code> method. The exception will be thrown automatically after the closure is invoked, so you do not need to re-throw the exception from within the closure:</p><pre><code>use Illuminate\\Http\\Client\\Response;
use Illuminate\\Http\\Client\\RequestException;

return Http::post(/* ... */)-&gt;throw(function (Response $response, RequestException $e) {
    // ...
})-&gt;json();
</code></pre><p><a name="guzzle-middleware"></a></p><h3 id="guzzle-middleware" tabindex="-1"><a class="header-anchor" href="#guzzle-middleware" aria-hidden="true">#</a> Guzzle Middleware</h3>`,80),k={href:"https://docs.guzzlephp.org/en/stable/handlers-and-middleware.html",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"withRequestMiddleware",-1),v=s(`<pre><code>use Illuminate\\Support\\Facades\\Http;
use Psr\\Http\\Message\\RequestInterface;

$response = Http::withRequestMiddleware(
    function (RequestInterface $request) {
        return $request-&gt;withHeader(&#39;X-Example&#39;, &#39;Value&#39;);
    }
)-&gt;get(&#39;http://example.com&#39;);
</code></pre><p>Likewise, you can inspect the incoming HTTP response by registering a middleware via the <code>withResponseMiddleware</code> method:</p><pre><code>use Illuminate\\Support\\Facades\\Http;
use Psr\\Http\\Message\\ResponseInterface;

$response = Http::withResponseMiddleware(
    function (ResponseInterface $response) {
        $header = $response-&gt;getHeader(&#39;X-Example&#39;);

        // ...

        return $response;
    }
)-&gt;get(&#39;http://example.com&#39;);
</code></pre><p><a name="global-middleware"></a></p><h4 id="global-middleware" tabindex="-1"><a class="header-anchor" href="#global-middleware" aria-hidden="true">#</a> Global Middleware</h4><p>Sometimes, you may want to register a middleware that applies to every outgoing request and incoming response. To accomplish this, you may use the <code>globalRequestMiddleware</code> and <code>globalResponseMiddleware</code> methods. Typically, these methods should be invoked in the <code>boot</code> method of your application&#39;s <code>AppServiceProvider</code>:</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Support<span class="token punctuation">\\</span>Facades<span class="token punctuation">\\</span>Http</span><span class="token punctuation">;</span>

<span class="token class-name static-context">Http</span><span class="token operator">::</span><span class="token function">globalRequestMiddleware</span><span class="token punctuation">(</span><span class="token keyword">fn</span> <span class="token punctuation">(</span><span class="token variable">$request</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token variable">$request</span><span class="token operator">-&gt;</span><span class="token function">withHeader</span><span class="token punctuation">(</span>
    <span class="token string single-quoted-string">&#39;User-Agent&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;Example Application/1.0&#39;</span>
<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token class-name static-context">Http</span><span class="token operator">::</span><span class="token function">globalResponseMiddleware</span><span class="token punctuation">(</span><span class="token keyword">fn</span> <span class="token punctuation">(</span><span class="token variable">$response</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token variable">$response</span><span class="token operator">-&gt;</span><span class="token function">withHeader</span><span class="token punctuation">(</span>
    <span class="token string single-quoted-string">&#39;X-Finished-At&#39;</span><span class="token punctuation">,</span> <span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">toDateTimeString</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="guzzle-options"></a></p><h3 id="guzzle-options" tabindex="-1"><a class="header-anchor" href="#guzzle-options" aria-hidden="true">#</a> Guzzle Options</h3>`,9),b={href:"http://docs.guzzlephp.org/en/stable/request-options.html",target:"_blank",rel:"noopener noreferrer"},y=n("code",null,"withOptions",-1),q=n("code",null,"withOptions",-1),w=s(`<pre><code>$response = Http::withOptions([
    &#39;debug&#39; =&gt; true,
])-&gt;get(&#39;http://example.com/users&#39;);
</code></pre><p><a name="concurrent-requests"></a></p><h2 id="concurrent-requests" tabindex="-1"><a class="header-anchor" href="#concurrent-requests" aria-hidden="true">#</a> Concurrent Requests</h2><p>Sometimes, you may wish to make multiple HTTP requests concurrently. In other words, you want several requests to be dispatched at the same time instead of issuing the requests sequentially. This can lead to substantial performance improvements when interacting with slow HTTP APIs.</p><p>Thankfully, you may accomplish this using the <code>pool</code> method. The <code>pool</code> method accepts a closure which receives an <code>Illuminate\\Http\\Client\\Pool</code> instance, allowing you to easily add requests to the request pool for dispatching:</p><pre><code>use Illuminate\\Http\\Client\\Pool;
use Illuminate\\Support\\Facades\\Http;

$responses = Http::pool(fn (Pool $pool) =&gt; [
    $pool-&gt;get(&#39;http://localhost/first&#39;),
    $pool-&gt;get(&#39;http://localhost/second&#39;),
    $pool-&gt;get(&#39;http://localhost/third&#39;),
]);

return $responses[0]-&gt;ok() &amp;&amp;
       $responses[1]-&gt;ok() &amp;&amp;
       $responses[2]-&gt;ok();
</code></pre><p>As you can see, each response instance can be accessed based on the order it was added to the pool. If you wish, you can name the requests using the <code>as</code> method, which allows you to access the corresponding responses by name:</p><pre><code>use Illuminate\\Http\\Client\\Pool;
use Illuminate\\Support\\Facades\\Http;

$responses = Http::pool(fn (Pool $pool) =&gt; [
    $pool-&gt;as(&#39;first&#39;)-&gt;get(&#39;http://localhost/first&#39;),
    $pool-&gt;as(&#39;second&#39;)-&gt;get(&#39;http://localhost/second&#39;),
    $pool-&gt;as(&#39;third&#39;)-&gt;get(&#39;http://localhost/third&#39;),
]);

return $responses[&#39;first&#39;]-&gt;ok();
</code></pre><p><a name="customizing-concurrent-requests"></a></p><h4 id="customizing-concurrent-requests" tabindex="-1"><a class="header-anchor" href="#customizing-concurrent-requests" aria-hidden="true">#</a> Customizing Concurrent Requests</h4><p>The <code>pool</code> method cannot be chained with other HTTP client methods such as the <code>withHeaders</code> or <code>middleware</code> methods. If you want to apply custom headers or middleware to pooled requests, you should configure those options on each request in the pool:</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Http<span class="token punctuation">\\</span>Client<span class="token punctuation">\\</span>Pool</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Support<span class="token punctuation">\\</span>Facades<span class="token punctuation">\\</span>Http</span><span class="token punctuation">;</span>

<span class="token variable">$headers</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token string single-quoted-string">&#39;X-Example&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;example&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token variable">$responses</span> <span class="token operator">=</span> <span class="token class-name static-context">Http</span><span class="token operator">::</span><span class="token function">pool</span><span class="token punctuation">(</span><span class="token keyword">fn</span> <span class="token punctuation">(</span><span class="token class-name type-declaration">Pool</span> <span class="token variable">$pool</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>
    <span class="token variable">$pool</span><span class="token operator">-&gt;</span><span class="token function">withHeaders</span><span class="token punctuation">(</span><span class="token variable">$headers</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;http://laravel.test/test&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token variable">$pool</span><span class="token operator">-&gt;</span><span class="token function">withHeaders</span><span class="token punctuation">(</span><span class="token variable">$headers</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;http://laravel.test/test&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token variable">$pool</span><span class="token operator">-&gt;</span><span class="token function">withHeaders</span><span class="token punctuation">(</span><span class="token variable">$headers</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;http://laravel.test/test&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="macros"></a></p><h2 id="macros" tabindex="-1"><a class="header-anchor" href="#macros" aria-hidden="true">#</a> Macros</h2><p>The Laravel HTTP client allows you to define &quot;macros&quot;, which can serve as a fluent, expressive mechanism to configure common request paths and headers when interacting with services throughout your application. To get started, you may define the macro within the <code>boot</code> method of your application&#39;s <code>App\\Providers\\AppServiceProvider</code> class:</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Support<span class="token punctuation">\\</span>Facades<span class="token punctuation">\\</span>Http</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * Bootstrap any application services.
 */</span>
<span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">boot</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">void</span>
<span class="token punctuation">{</span>
    <span class="token class-name static-context">Http</span><span class="token operator">::</span><span class="token function">macro</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;github&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token class-name static-context">Http</span><span class="token operator">::</span><span class="token function">withHeaders</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
            <span class="token string single-quoted-string">&#39;X-Example&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;example&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">baseUrl</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;https://github.com&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Once your macro has been configured, you may invoke it from anywhere in your application to create a pending request with the specified configuration:</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token variable">$response</span> <span class="token operator">=</span> <span class="token class-name static-context">Http</span><span class="token operator">::</span><span class="token function">github</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;/&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a name="testing"></a></p><h2 id="testing" tabindex="-1"><a class="header-anchor" href="#testing" aria-hidden="true">#</a> Testing</h2><p>Many Laravel services provide functionality to help you easily and expressively write tests, and Laravel&#39;s HTTP client is no exception. The <code>Http</code> facade&#39;s <code>fake</code> method allows you to instruct the HTTP client to return stubbed / dummy responses when requests are made.</p><p><a name="faking-responses"></a></p><h3 id="faking-responses" tabindex="-1"><a class="header-anchor" href="#faking-responses" aria-hidden="true">#</a> Faking Responses</h3><p>For example, to instruct the HTTP client to return empty, <code>200</code> status code responses for every request, you may call the <code>fake</code> method with no arguments:</p><pre><code>use Illuminate\\Support\\Facades\\Http;

Http::fake();

$response = Http::post(/* ... */);
</code></pre><p><a name="faking-specific-urls"></a></p><h4 id="faking-specific-urls" tabindex="-1"><a class="header-anchor" href="#faking-specific-urls" aria-hidden="true">#</a> Faking Specific URLs</h4><p>Alternatively, you may pass an array to the <code>fake</code> method. The array&#39;s keys should represent URL patterns that you wish to fake and their associated responses. The <code>*</code> character may be used as a wildcard character. Any requests made to URLs that have not been faked will actually be executed. You may use the <code>Http</code> facade&#39;s <code>response</code> method to construct stub / fake responses for these endpoints:</p><pre><code>Http::fake([
    // Stub a JSON response for GitHub endpoints...
    &#39;github.com/*&#39; =&gt; Http::response([&#39;foo&#39; =&gt; &#39;bar&#39;], 200, $headers),

    // Stub a string response for Google endpoints...
    &#39;google.com/*&#39; =&gt; Http::response(&#39;Hello World&#39;, 200, $headers),
]);
</code></pre><p>If you would like to specify a fallback URL pattern that will stub all unmatched URLs, you may use a single <code>*</code> character:</p><pre><code>Http::fake([
    // Stub a JSON response for GitHub endpoints...
    &#39;github.com/*&#39; =&gt; Http::response([&#39;foo&#39; =&gt; &#39;bar&#39;], 200, [&#39;Headers&#39;]),

    // Stub a string response for all other endpoints...
    &#39;*&#39; =&gt; Http::response(&#39;Hello World&#39;, 200, [&#39;Headers&#39;]),
]);
</code></pre><p><a name="faking-response-sequences"></a></p><h4 id="faking-response-sequences" tabindex="-1"><a class="header-anchor" href="#faking-response-sequences" aria-hidden="true">#</a> Faking Response Sequences</h4><p>Sometimes you may need to specify that a single URL should return a series of fake responses in a specific order. You may accomplish this using the <code>Http::sequence</code> method to build the responses:</p><pre><code>Http::fake([
    // Stub a series of responses for GitHub endpoints...
    &#39;github.com/*&#39; =&gt; Http::sequence()
                            -&gt;push(&#39;Hello World&#39;, 200)
                            -&gt;push([&#39;foo&#39; =&gt; &#39;bar&#39;], 200)
                            -&gt;pushStatus(404),
]);
</code></pre><p>When all the responses in a response sequence have been consumed, any further requests will cause the response sequence to throw an exception. If you would like to specify a default response that should be returned when a sequence is empty, you may use the <code>whenEmpty</code> method:</p><pre><code>Http::fake([
    // Stub a series of responses for GitHub endpoints...
    &#39;github.com/*&#39; =&gt; Http::sequence()
                            -&gt;push(&#39;Hello World&#39;, 200)
                            -&gt;push([&#39;foo&#39; =&gt; &#39;bar&#39;], 200)
                            -&gt;whenEmpty(Http::response()),
]);
</code></pre><p>If you would like to fake a sequence of responses but do not need to specify a specific URL pattern that should be faked, you may use the <code>Http::fakeSequence</code> method:</p><pre><code>Http::fakeSequence()
        -&gt;push(&#39;Hello World&#39;, 200)
        -&gt;whenEmpty(Http::response());
</code></pre><p><a name="fake-callback"></a></p><h4 id="fake-callback" tabindex="-1"><a class="header-anchor" href="#fake-callback" aria-hidden="true">#</a> Fake Callback</h4><p>If you require more complicated logic to determine what responses to return for certain endpoints, you may pass a closure to the <code>fake</code> method. This closure will receive an instance of <code>Illuminate\\Http\\Client\\Request</code> and should return a response instance. Within your closure, you may perform whatever logic is necessary to determine what type of response to return:</p><pre><code>use Illuminate\\Http\\Client\\Request;

Http::fake(function (Request $request) {
    return Http::response(&#39;Hello World&#39;, 200);
});
</code></pre><p><a name="preventing-stray-requests"></a></p><h3 id="preventing-stray-requests" tabindex="-1"><a class="header-anchor" href="#preventing-stray-requests" aria-hidden="true">#</a> Preventing Stray Requests</h3><p>If you would like to ensure that all requests sent via the HTTP client have been faked throughout your individual test or complete test suite, you can call the <code>preventStrayRequests</code> method. After calling this method, any requests that do not have a corresponding fake response will throw an exception rather than making the actual HTTP request:</p><pre><code>use Illuminate\\Support\\Facades\\Http;

Http::preventStrayRequests();

Http::fake([
    &#39;github.com/*&#39; =&gt; Http::response(&#39;ok&#39;),
]);

// An &quot;ok&quot; response is returned...
Http::get(&#39;https://github.com/laravel/framework&#39;);

// An exception is thrown...
Http::get(&#39;https://laravel.com&#39;);
</code></pre><p><a name="inspecting-requests"></a></p><h3 id="inspecting-requests" tabindex="-1"><a class="header-anchor" href="#inspecting-requests" aria-hidden="true">#</a> Inspecting Requests</h3><p>When faking responses, you may occasionally wish to inspect the requests the client receives in order to make sure your application is sending the correct data or headers. You may accomplish this by calling the <code>Http::assertSent</code> method after calling <code>Http::fake</code>.</p><p>The <code>assertSent</code> method accepts a closure which will receive an <code>Illuminate\\Http\\Client\\Request</code> instance and should return a boolean value indicating if the request matches your expectations. In order for the test to pass, at least one request must have been issued matching the given expectations:</p><pre><code>use Illuminate\\Http\\Client\\Request;
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
</code></pre><p>If needed, you may assert that a specific request was not sent using the <code>assertNotSent</code> method:</p><pre><code>use Illuminate\\Http\\Client\\Request;
use Illuminate\\Support\\Facades\\Http;

Http::fake();

Http::post(&#39;http://example.com/users&#39;, [
    &#39;name&#39; =&gt; &#39;Taylor&#39;,
    &#39;role&#39; =&gt; &#39;Developer&#39;,
]);

Http::assertNotSent(function (Request $request) {
    return $request-&gt;url() === &#39;http://example.com/posts&#39;;
});
</code></pre><p>You may use the <code>assertSentCount</code> method to assert how many requests were &quot;sent&quot; during the test:</p><pre><code>Http::fake();

Http::assertSentCount(5);
</code></pre><p>Or, you may use the <code>assertNothingSent</code> method to assert that no requests were sent during the test:</p><pre><code>Http::fake();

Http::assertNothingSent();
</code></pre><p><a name="recording-requests-and-responses"></a></p><h4 id="recording-requests-responses" tabindex="-1"><a class="header-anchor" href="#recording-requests-responses" aria-hidden="true">#</a> Recording Requests / Responses</h4><p>You may use the <code>recorded</code> method to gather all requests and their corresponding responses. The <code>recorded</code> method returns a collection of arrays that contains instances of <code>Illuminate\\Http\\Client\\Request</code> and <code>Illuminate\\Http\\Client\\Response</code>:</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token class-name static-context">Http</span><span class="token operator">::</span><span class="token function">fake</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
    <span class="token string single-quoted-string">&#39;https://laravel.com&#39;</span> <span class="token operator">=&gt;</span> <span class="token class-name static-context">Http</span><span class="token operator">::</span><span class="token function">response</span><span class="token punctuation">(</span><span class="token argument-name">status</span><span class="token punctuation">:</span> <span class="token number">500</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;https://nova.laravel.com/&#39;</span> <span class="token operator">=&gt;</span> <span class="token class-name static-context">Http</span><span class="token operator">::</span><span class="token function">response</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token class-name static-context">Http</span><span class="token operator">::</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;https://laravel.com&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name static-context">Http</span><span class="token operator">::</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;https://nova.laravel.com/&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token variable">$recorded</span> <span class="token operator">=</span> <span class="token class-name static-context">Http</span><span class="token operator">::</span><span class="token function">recorded</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">[</span><span class="token variable">$request</span><span class="token punctuation">,</span> <span class="token variable">$response</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token variable">$recorded</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Additionally, the <code>recorded</code> method accepts a closure which will receive an instance of <code>Illuminate\\Http\\Client\\Request</code> and <code>Illuminate\\Http\\Client\\Response</code> and may be used to filter request / response pairs based on your expectations:</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Http<span class="token punctuation">\\</span>Client<span class="token punctuation">\\</span>Request</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Http<span class="token punctuation">\\</span>Client<span class="token punctuation">\\</span>Response</span><span class="token punctuation">;</span>

<span class="token class-name static-context">Http</span><span class="token operator">::</span><span class="token function">fake</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
    <span class="token string single-quoted-string">&#39;https://laravel.com&#39;</span> <span class="token operator">=&gt;</span> <span class="token class-name static-context">Http</span><span class="token operator">::</span><span class="token function">response</span><span class="token punctuation">(</span><span class="token argument-name">status</span><span class="token punctuation">:</span> <span class="token number">500</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;https://nova.laravel.com/&#39;</span> <span class="token operator">=&gt;</span> <span class="token class-name static-context">Http</span><span class="token operator">::</span><span class="token function">response</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token class-name static-context">Http</span><span class="token operator">::</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;https://laravel.com&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name static-context">Http</span><span class="token operator">::</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;https://nova.laravel.com/&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token variable">$recorded</span> <span class="token operator">=</span> <span class="token class-name static-context">Http</span><span class="token operator">::</span><span class="token function">recorded</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token class-name type-declaration">Request</span> <span class="token variable">$request</span><span class="token punctuation">,</span> <span class="token class-name type-declaration">Response</span> <span class="token variable">$response</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token variable">$request</span><span class="token operator">-&gt;</span><span class="token function">url</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">!==</span> <span class="token string single-quoted-string">&#39;https://laravel.com&#39;</span> <span class="token operator">&amp;&amp;</span>
           <span class="token variable">$response</span><span class="token operator">-&gt;</span><span class="token function">successful</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="events"></a></p><h2 id="events" tabindex="-1"><a class="header-anchor" href="#events" aria-hidden="true">#</a> Events</h2><p>Laravel fires three events during the process of sending HTTP requests. The <code>RequestSending</code> event is fired prior to a request being sent, while the <code>ResponseReceived</code> event is fired after a response is received for a given request. The <code>ConnectionFailed</code> event is fired if no response is received for a given request.</p><p>The <code>RequestSending</code> and <code>ConnectionFailed</code> events both contain a public <code>$request</code> property that you may use to inspect the <code>Illuminate\\Http\\Client\\Request</code> instance. Likewise, the <code>ResponseReceived</code> event contains a <code>$request</code> property as well as a <code>$response</code> property which may be used to inspect the <code>Illuminate\\Http\\Client\\Response</code> instance. You may register event listeners for this event in your <code>App\\Providers\\EventServiceProvider</code> service provider:</p><pre><code>/**
 * The event listener mappings for the application.
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
</code></pre>`,69);function H(x,$){const t=p("ExternalLinkIcon");return r(),i("div",null,[l,n("p",null,[e("Laravel provides an expressive, minimal API around the "),n("a",u,[e("Guzzle HTTP client"),a(t)]),e(", allowing you to quickly make outgoing HTTP requests to communicate with other web applications. Laravel's wrapper around Guzzle is focused on its most common use cases and a wonderful developer experience.")]),d,n("p",null,[e("The HTTP client also allows you to construct request URLs using the "),n("a",h,[e("URI template specification"),a(t)]),e(". To define the URL parameters that can be expanded by your URI template, you may use the "),m,e(" method:")]),g,n("p",null,[e("Since Laravel's HTTP client is powered by Guzzle, you may take advantage of "),n("a",k,[e("Guzzle Middleware"),a(t)]),e(" to manipulate the outgoing request or inspect the incoming response. To manipulate the outgoing request, register a Guzzle middleware via the "),f,e(" method:")]),v,n("p",null,[e("You may specify additional "),n("a",b,[e("Guzzle request options"),a(t)]),e(" using the "),y,e(" method. The "),q,e(" method accepts an array of key / value pairs:")]),w])}const I=o(c,[["render",H],["__file","http-client.html.vue"]]);export{I as default};
