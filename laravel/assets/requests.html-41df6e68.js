import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{r,o as i,c as d,b as t,d as e,e as o,a as n}from"./app-06635a3b.js";const u={},p=n(`<h1 id="http-requests" tabindex="-1"><a class="header-anchor" href="#http-requests" aria-hidden="true">#</a> HTTP Requests</h1><ul><li><a href="#introduction">Introduction</a></li><li><a href="#interacting-with-the-request">Interacting With The Request</a><ul><li><a href="#accessing-the-request">Accessing The Request</a></li><li><a href="#request-path-and-method">Request Path, Host, &amp; Method</a></li><li><a href="#request-headers">Request Headers</a></li><li><a href="#request-ip-address">Request IP Address</a></li><li><a href="#content-negotiation">Content Negotiation</a></li><li><a href="#psr7-requests">PSR-7 Requests</a></li></ul></li><li><a href="#input">Input</a><ul><li><a href="#retrieving-input">Retrieving Input</a></li><li><a href="#determining-if-input-is-present">Determining If Input Is Present</a></li><li><a href="#merging-additional-input">Merging Additional Input</a></li><li><a href="#old-input">Old Input</a></li><li><a href="#cookies">Cookies</a></li><li><a href="#input-trimming-and-normalization">Input Trimming &amp; Normalization</a></li></ul></li><li><a href="#files">Files</a><ul><li><a href="#retrieving-uploaded-files">Retrieving Uploaded Files</a></li><li><a href="#storing-uploaded-files">Storing Uploaded Files</a></li></ul></li><li><a href="#configuring-trusted-proxies">Configuring Trusted Proxies</a></li><li><a href="#configuring-trusted-hosts">Configuring Trusted Hosts</a></li></ul><p><a name="introduction"></a></p><h2 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h2><p>Laravel&#39;s <code>Illuminate\\Http\\Request</code> class provides an object-oriented way to interact with the current HTTP request being handled by your application as well as retrieve the input, cookies, and files that were submitted with the request.</p><p><a name="interacting-with-the-request"></a></p><h2 id="interacting-with-the-request" tabindex="-1"><a class="header-anchor" href="#interacting-with-the-request" aria-hidden="true">#</a> Interacting With The Request</h2><p><a name="accessing-the-request"></a></p><h3 id="accessing-the-request" tabindex="-1"><a class="header-anchor" href="#accessing-the-request" aria-hidden="true">#</a> Accessing The Request</h3><p>To obtain an instance of the current HTTP request via dependency injection, you should type-hint the <code>Illuminate\\Http\\Request</code> class on your route closure or controller method. The incoming request instance will automatically be injected by the Laravel <a href="./container">service container</a>:</p><pre><code>&lt;?php

namespace App\\Http\\Controllers;

use Illuminate\\Http\\RedirectResponse;
use Illuminate\\Http\\Request;

class UserController extends Controller
{
    /**
     * Store a new user.
     */
    public function store(Request $request): RedirectResponse
    {
        $name = $request-&gt;input(&#39;name&#39;);

        // Store the user...

        return redirect(&#39;/users&#39;);
    }
}
</code></pre><p>As mentioned, you may also type-hint the <code>Illuminate\\Http\\Request</code> class on a route closure. The service container will automatically inject the incoming request into the closure when it is executed:</p><pre><code>use Illuminate\\Http\\Request;

Route::get(&#39;/&#39;, function (Request $request) {
    // ...
});
</code></pre><p><a name="dependency-injection-route-parameters"></a></p><h4 id="dependency-injection-route-parameters" tabindex="-1"><a class="header-anchor" href="#dependency-injection-route-parameters" aria-hidden="true">#</a> Dependency Injection &amp; Route Parameters</h4><p>If your controller method is also expecting input from a route parameter you should list your route parameters after your other dependencies. For example, if your route is defined like so:</p><pre><code>use App\\Http\\Controllers\\UserController;

Route::put(&#39;/user/{id}&#39;, [UserController::class, &#39;update&#39;]);
</code></pre><p>You may still type-hint the <code>Illuminate\\Http\\Request</code> and access your <code>id</code> route parameter by defining your controller method as follows:</p><pre><code>&lt;?php

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
        // Update the user...

        return redirect(&#39;/users&#39;);
    }
}
</code></pre><p><a name="request-path-and-method"></a></p><h3 id="request-path-host-method" tabindex="-1"><a class="header-anchor" href="#request-path-host-method" aria-hidden="true">#</a> Request Path, Host, &amp; Method</h3><p>The <code>Illuminate\\Http\\Request</code> instance provides a variety of methods for examining the incoming HTTP request and extends the <code>Symfony\\Component\\HttpFoundation\\Request</code> class. We will discuss a few of the most important methods below.</p><p><a name="retrieving-the-request-path"></a></p><h4 id="retrieving-the-request-path" tabindex="-1"><a class="header-anchor" href="#retrieving-the-request-path" aria-hidden="true">#</a> Retrieving The Request Path</h4><p>The <code>path</code> method returns the request&#39;s path information. So, if the incoming request is targeted at <code>http://example.com/foo/bar</code>, the <code>path</code> method will return <code>foo/bar</code>:</p><pre><code>$uri = $request-&gt;path();
</code></pre><p><a name="inspecting-the-request-path"></a></p><h4 id="inspecting-the-request-path-route" tabindex="-1"><a class="header-anchor" href="#inspecting-the-request-path-route" aria-hidden="true">#</a> Inspecting The Request Path / Route</h4><p>The <code>is</code> method allows you to verify that the incoming request path matches a given pattern. You may use the <code>*</code> character as a wildcard when utilizing this method:</p><pre><code>if ($request-&gt;is(&#39;admin/*&#39;)) {
    // ...
}
</code></pre><p>Using the <code>routeIs</code> method, you may determine if the incoming request has matched a <a href="./routing#named-routes">named route</a>:</p><pre><code>if ($request-&gt;routeIs(&#39;admin.*&#39;)) {
    // ...
}
</code></pre><p><a name="retrieving-the-request-url"></a></p><h4 id="retrieving-the-request-url" tabindex="-1"><a class="header-anchor" href="#retrieving-the-request-url" aria-hidden="true">#</a> Retrieving The Request URL</h4><p>To retrieve the full URL for the incoming request you may use the <code>url</code> or <code>fullUrl</code> methods. The <code>url</code> method will return the URL without the query string, while the <code>fullUrl</code> method includes the query string:</p><pre><code>$url = $request-&gt;url();

$urlWithQueryString = $request-&gt;fullUrl();
</code></pre><p>If you would like to append query string data to the current URL, you may call the <code>fullUrlWithQuery</code> method. This method merges the given array of query string variables with the current query string:</p><pre><code>$request-&gt;fullUrlWithQuery([&#39;type&#39; =&gt; &#39;phone&#39;]);
</code></pre><p>If you would like to get the current URL without a given query string parameter, you may utilize the <code>fullUrlWithoutQuery</code> method:</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token variable">$request</span><span class="token operator">-&gt;</span><span class="token function">fullUrlWithoutQuery</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;type&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a name="retrieving-the-request-host"></a></p><h4 id="retrieving-the-request-host" tabindex="-1"><a class="header-anchor" href="#retrieving-the-request-host" aria-hidden="true">#</a> Retrieving The Request Host</h4><p>You may retrieve the &quot;host&quot; of the incoming request via the <code>host</code>, <code>httpHost</code>, and <code>schemeAndHttpHost</code> methods:</p><pre><code>$request-&gt;host();
$request-&gt;httpHost();
$request-&gt;schemeAndHttpHost();
</code></pre><p><a name="retrieving-the-request-method"></a></p><h4 id="retrieving-the-request-method" tabindex="-1"><a class="header-anchor" href="#retrieving-the-request-method" aria-hidden="true">#</a> Retrieving The Request Method</h4><p>The <code>method</code> method will return the HTTP verb for the request. You may use the <code>isMethod</code> method to verify that the HTTP verb matches a given string:</p><pre><code>$method = $request-&gt;method();

if ($request-&gt;isMethod(&#39;post&#39;)) {
    // ...
}
</code></pre><p><a name="request-headers"></a></p><h3 id="request-headers" tabindex="-1"><a class="header-anchor" href="#request-headers" aria-hidden="true">#</a> Request Headers</h3><p>You may retrieve a request header from the <code>Illuminate\\Http\\Request</code> instance using the <code>header</code> method. If the header is not present on the request, <code>null</code> will be returned. However, the <code>header</code> method accepts an optional second argument that will be returned if the header is not present on the request:</p><pre><code>$value = $request-&gt;header(&#39;X-Header-Name&#39;);

$value = $request-&gt;header(&#39;X-Header-Name&#39;, &#39;default&#39;);
</code></pre><p>The <code>hasHeader</code> method may be used to determine if the request contains a given header:</p><pre><code>if ($request-&gt;hasHeader(&#39;X-Header-Name&#39;)) {
    // ...
}
</code></pre><p>For convenience, the <code>bearerToken</code> method may be used to retrieve a bearer token from the <code>Authorization</code> header. If no such header is present, an empty string will be returned:</p><pre><code>$token = $request-&gt;bearerToken();
</code></pre><p><a name="request-ip-address"></a></p><h3 id="request-ip-address" tabindex="-1"><a class="header-anchor" href="#request-ip-address" aria-hidden="true">#</a> Request IP Address</h3><p>The <code>ip</code> method may be used to retrieve the IP address of the client that made the request to your application:</p><pre><code>$ipAddress = $request-&gt;ip();
</code></pre><p><a name="content-negotiation"></a></p><h3 id="content-negotiation" tabindex="-1"><a class="header-anchor" href="#content-negotiation" aria-hidden="true">#</a> Content Negotiation</h3><p>Laravel provides several methods for inspecting the incoming request&#39;s requested content types via the <code>Accept</code> header. First, the <code>getAcceptableContentTypes</code> method will return an array containing all of the content types accepted by the request:</p><pre><code>$contentTypes = $request-&gt;getAcceptableContentTypes();
</code></pre><p>The <code>accepts</code> method accepts an array of content types and returns <code>true</code> if any of the content types are accepted by the request. Otherwise, <code>false</code> will be returned:</p><pre><code>if ($request-&gt;accepts([&#39;text/html&#39;, &#39;application/json&#39;])) {
    // ...
}
</code></pre><p>You may use the <code>prefers</code> method to determine which content type out of a given array of content types is most preferred by the request. If none of the provided content types are accepted by the request, <code>null</code> will be returned:</p><pre><code>$preferred = $request-&gt;prefers([&#39;text/html&#39;, &#39;application/json&#39;]);
</code></pre><p>Since many applications only serve HTML or JSON, you may use the <code>expectsJson</code> method to quickly determine if the incoming request expects a JSON response:</p><pre><code>if ($request-&gt;expectsJson()) {
    // ...
}
</code></pre><p><a name="psr7-requests"></a></p><h3 id="psr-7-requests" tabindex="-1"><a class="header-anchor" href="#psr-7-requests" aria-hidden="true">#</a> PSR-7 Requests</h3>`,72),l={href:"https://www.php-fig.org/psr/psr-7/",target:"_blank",rel:"noopener noreferrer"},c=t("em",null,"Symfony HTTP Message Bridge",-1),h=n(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">composer</span> require symfony/psr-http-message-bridge
<span class="token function">composer</span> require nyholm/psr7
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Once you have installed these libraries, you may obtain a PSR-7 request by type-hinting the request interface on your route closure or controller method:</p><pre><code>use Psr\\Http\\Message\\ServerRequestInterface;

Route::get(&#39;/&#39;, function (ServerRequestInterface $request) {
    // ...
});
</code></pre><blockquote><p><strong>Note</strong><br> If you return a PSR-7 response instance from a route or controller, it will automatically be converted back to a Laravel response instance and be displayed by the framework.</p></blockquote><p><a name="input"></a></p><h2 id="input" tabindex="-1"><a class="header-anchor" href="#input" aria-hidden="true">#</a> Input</h2><p><a name="retrieving-input"></a></p><h3 id="retrieving-input" tabindex="-1"><a class="header-anchor" href="#retrieving-input" aria-hidden="true">#</a> Retrieving Input</h3><p><a name="retrieving-all-input-data"></a></p><h4 id="retrieving-all-input-data" tabindex="-1"><a class="header-anchor" href="#retrieving-all-input-data" aria-hidden="true">#</a> Retrieving All Input Data</h4><p>You may retrieve all of the incoming request&#39;s input data as an <code>array</code> using the <code>all</code> method. This method may be used regardless of whether the incoming request is from an HTML form or is an XHR request:</p><pre><code>$input = $request-&gt;all();
</code></pre><p>Using the <code>collect</code> method, you may retrieve all of the incoming request&#39;s input data as a <a href="./collections">collection</a>:</p><pre><code>$input = $request-&gt;collect();
</code></pre><p>The <code>collect</code> method also allows you to retrieve a subset of the incoming request&#39;s input as a collection:</p><pre><code>$request-&gt;collect(&#39;users&#39;)-&gt;each(function (string $user) {
    // ...
});
</code></pre><p><a name="retrieving-an-input-value"></a></p><h4 id="retrieving-an-input-value" tabindex="-1"><a class="header-anchor" href="#retrieving-an-input-value" aria-hidden="true">#</a> Retrieving An Input Value</h4><p>Using a few simple methods, you may access all of the user input from your <code>Illuminate\\Http\\Request</code> instance without worrying about which HTTP verb was used for the request. Regardless of the HTTP verb, the <code>input</code> method may be used to retrieve user input:</p><pre><code>$name = $request-&gt;input(&#39;name&#39;);
</code></pre><p>You may pass a default value as the second argument to the <code>input</code> method. This value will be returned if the requested input value is not present on the request:</p><pre><code>$name = $request-&gt;input(&#39;name&#39;, &#39;Sally&#39;);
</code></pre><p>When working with forms that contain array inputs, use &quot;dot&quot; notation to access the arrays:</p><pre><code>$name = $request-&gt;input(&#39;products.0.name&#39;);

$names = $request-&gt;input(&#39;products.*.name&#39;);
</code></pre><p>You may call the <code>input</code> method without any arguments in order to retrieve all of the input values as an associative array:</p><pre><code>$input = $request-&gt;input();
</code></pre><p><a name="retrieving-input-from-the-query-string"></a></p><h4 id="retrieving-input-from-the-query-string" tabindex="-1"><a class="header-anchor" href="#retrieving-input-from-the-query-string" aria-hidden="true">#</a> Retrieving Input From The Query String</h4><p>While the <code>input</code> method retrieves values from the entire request payload (including the query string), the <code>query</code> method will only retrieve values from the query string:</p><pre><code>$name = $request-&gt;query(&#39;name&#39;);
</code></pre><p>If the requested query string value data is not present, the second argument to this method will be returned:</p><pre><code>$name = $request-&gt;query(&#39;name&#39;, &#39;Helen&#39;);
</code></pre><p>You may call the <code>query</code> method without any arguments in order to retrieve all of the query string values as an associative array:</p><pre><code>$query = $request-&gt;query();
</code></pre><p><a name="retrieving-json-input-values"></a></p><h4 id="retrieving-json-input-values" tabindex="-1"><a class="header-anchor" href="#retrieving-json-input-values" aria-hidden="true">#</a> Retrieving JSON Input Values</h4><p>When sending JSON requests to your application, you may access the JSON data via the <code>input</code> method as long as the <code>Content-Type</code> header of the request is properly set to <code>application/json</code>. You may even use &quot;dot&quot; syntax to retrieve values that are nested within JSON arrays / objects:</p><pre><code>$name = $request-&gt;input(&#39;user.name&#39;);
</code></pre><p><a name="retrieving-stringable-input-values"></a></p><h4 id="retrieving-stringable-input-values" tabindex="-1"><a class="header-anchor" href="#retrieving-stringable-input-values" aria-hidden="true">#</a> Retrieving Stringable Input Values</h4><p>Instead of retrieving the request&#39;s input data as a primitive <code>string</code>, you may use the <code>string</code> method to retrieve the request data as an instance of <a href="./helpers#fluent-strings"><code>Illuminate\\Support\\Stringable</code></a>:</p><pre><code>$name = $request-&gt;string(&#39;name&#39;)-&gt;trim();
</code></pre><p><a name="retrieving-boolean-input-values"></a></p><h4 id="retrieving-boolean-input-values" tabindex="-1"><a class="header-anchor" href="#retrieving-boolean-input-values" aria-hidden="true">#</a> Retrieving Boolean Input Values</h4><p>When dealing with HTML elements like checkboxes, your application may receive &quot;truthy&quot; values that are actually strings. For example, &quot;true&quot; or &quot;on&quot;. For convenience, you may use the <code>boolean</code> method to retrieve these values as booleans. The <code>boolean</code> method returns <code>true</code> for 1, &quot;1&quot;, true, &quot;true&quot;, &quot;on&quot;, and &quot;yes&quot;. All other values will return <code>false</code>:</p><pre><code>$archived = $request-&gt;boolean(&#39;archived&#39;);
</code></pre><p><a name="retrieving-date-input-values"></a></p><h4 id="retrieving-date-input-values" tabindex="-1"><a class="header-anchor" href="#retrieving-date-input-values" aria-hidden="true">#</a> Retrieving Date Input Values</h4><p>For convenience, input values containing dates / times may be retrieved as Carbon instances using the <code>date</code> method. If the request does not contain an input value with the given name, <code>null</code> will be returned:</p><pre><code>$birthday = $request-&gt;date(&#39;birthday&#39;);
</code></pre><p>The second and third arguments accepted by the <code>date</code> method may be used to specify the date&#39;s format and timezone, respectively:</p><pre><code>$elapsed = $request-&gt;date(&#39;elapsed&#39;, &#39;!H:i&#39;, &#39;Europe/Madrid&#39;);
</code></pre><p>If the input value is present but has an invalid format, an <code>InvalidArgumentException</code> will be thrown; therefore, it is recommended that you validate the input before invoking the <code>date</code> method.</p><p><a name="retrieving-enum-input-values"></a></p><h4 id="retrieving-enum-input-values" tabindex="-1"><a class="header-anchor" href="#retrieving-enum-input-values" aria-hidden="true">#</a> Retrieving Enum Input Values</h4>`,55),m={href:"https://www.php.net/manual/en/language.types.enumerations.php",target:"_blank",rel:"noopener noreferrer"},g=t("code",null,"null",-1),f=t("code",null,"enum",-1),y=n(`<pre><code>use App\\Enums\\Status;

$status = $request-&gt;enum(&#39;status&#39;, Status::class);
</code></pre><p><a name="retrieving-input-via-dynamic-properties"></a></p><h4 id="retrieving-input-via-dynamic-properties" tabindex="-1"><a class="header-anchor" href="#retrieving-input-via-dynamic-properties" aria-hidden="true">#</a> Retrieving Input Via Dynamic Properties</h4><p>You may also access user input using dynamic properties on the <code>Illuminate\\Http\\Request</code> instance. For example, if one of your application&#39;s forms contains a <code>name</code> field, you may access the value of the field like so:</p><pre><code>$name = $request-&gt;name;
</code></pre><p>When using dynamic properties, Laravel will first look for the parameter&#39;s value in the request payload. If it is not present, Laravel will search for the field in the matched route&#39;s parameters.</p><p><a name="retrieving-a-portion-of-the-input-data"></a></p><h4 id="retrieving-a-portion-of-the-input-data" tabindex="-1"><a class="header-anchor" href="#retrieving-a-portion-of-the-input-data" aria-hidden="true">#</a> Retrieving A Portion Of The Input Data</h4><p>If you need to retrieve a subset of the input data, you may use the <code>only</code> and <code>except</code> methods. Both of these methods accept a single <code>array</code> or a dynamic list of arguments:</p><pre><code>$input = $request-&gt;only([&#39;username&#39;, &#39;password&#39;]);

$input = $request-&gt;only(&#39;username&#39;, &#39;password&#39;);

$input = $request-&gt;except([&#39;credit_card&#39;]);

$input = $request-&gt;except(&#39;credit_card&#39;);
</code></pre><blockquote><p><strong>Warning</strong><br> The <code>only</code> method returns all of the key / value pairs that you request; however, it will not return key / value pairs that are not present on the request.</p></blockquote><p><a name="determining-if-input-is-present"></a></p><h3 id="determining-if-input-is-present" tabindex="-1"><a class="header-anchor" href="#determining-if-input-is-present" aria-hidden="true">#</a> Determining If Input Is Present</h3><p>You may use the <code>has</code> method to determine if a value is present on the request. The <code>has</code> method returns <code>true</code> if the value is present on the request:</p><pre><code>if ($request-&gt;has(&#39;name&#39;)) {
    // ...
}
</code></pre><p>When given an array, the <code>has</code> method will determine if all of the specified values are present:</p><pre><code>if ($request-&gt;has([&#39;name&#39;, &#39;email&#39;])) {
    // ...
}
</code></pre><p>The <code>hasAny</code> method returns <code>true</code> if any of the specified values are present:</p><pre><code>if ($request-&gt;hasAny([&#39;name&#39;, &#39;email&#39;])) {
    // ...
}
</code></pre><p>The <code>whenHas</code> method will execute the given closure if a value is present on the request:</p><pre><code>$request-&gt;whenHas(&#39;name&#39;, function (string $input) {
    // ...
});
</code></pre><p>A second closure may be passed to the <code>whenHas</code> method that will be executed if the specified value is not present on the request:</p><pre><code>$request-&gt;whenHas(&#39;name&#39;, function (string $input) {
    // The &quot;name&quot; value is present...
}, function () {
    // The &quot;name&quot; value is not present...
});
</code></pre><p>If you would like to determine if a value is present on the request and is not an empty string, you may use the <code>filled</code> method:</p><pre><code>if ($request-&gt;filled(&#39;name&#39;)) {
    // ...
}
</code></pre><p>The <code>anyFilled</code> method returns <code>true</code> if any of the specified values is not an empty string:</p><pre><code>if ($request-&gt;anyFilled([&#39;name&#39;, &#39;email&#39;])) {
    // ...
}
</code></pre><p>The <code>whenFilled</code> method will execute the given closure if a value is present on the request and is not an empty string:</p><pre><code>$request-&gt;whenFilled(&#39;name&#39;, function (string $input) {
    // ...
});
</code></pre><p>A second closure may be passed to the <code>whenFilled</code> method that will be executed if the specified value is not &quot;filled&quot;:</p><pre><code>$request-&gt;whenFilled(&#39;name&#39;, function (string $input) {
    // The &quot;name&quot; value is filled...
}, function () {
    // The &quot;name&quot; value is not filled...
});
</code></pre><p>To determine if a given key is absent from the request, you may use the <code>missing</code> and <code>whenMissing</code> methods:</p><pre><code>if ($request-&gt;missing(&#39;name&#39;)) {
    // ...
}

$request-&gt;whenMissing(&#39;name&#39;, function (array $input) {
    // The &quot;name&quot; value is missing...
}, function () {
    // The &quot;name&quot; value is present...
});
</code></pre><p><a name="merging-additional-input"></a></p><h3 id="merging-additional-input" tabindex="-1"><a class="header-anchor" href="#merging-additional-input" aria-hidden="true">#</a> Merging Additional Input</h3><p>Sometimes you may need to manually merge additional input into the request&#39;s existing input data. To accomplish this, you may use the <code>merge</code> method. If a given input key already exists on the request, it will be overwritten by the data provided to the <code>merge</code> method:</p><pre><code>$request-&gt;merge([&#39;votes&#39; =&gt; 0]);
</code></pre><p>The <code>mergeIfMissing</code> method may be used to merge input into the request if the corresponding keys do not already exist within the request&#39;s input data:</p><pre><code>$request-&gt;mergeIfMissing([&#39;votes&#39; =&gt; 0]);
</code></pre><p><a name="old-input"></a></p><h3 id="old-input" tabindex="-1"><a class="header-anchor" href="#old-input" aria-hidden="true">#</a> Old Input</h3><p>Laravel allows you to keep input from one request during the next request. This feature is particularly useful for re-populating forms after detecting validation errors. However, if you are using Laravel&#39;s included <a href="./validation">validation features</a>, it is possible that you will not need to manually use these session input flashing methods directly, as some of Laravel&#39;s built-in validation facilities will call them automatically.</p><p><a name="flashing-input-to-the-session"></a></p><h4 id="flashing-input-to-the-session" tabindex="-1"><a class="header-anchor" href="#flashing-input-to-the-session" aria-hidden="true">#</a> Flashing Input To The Session</h4><p>The <code>flash</code> method on the <code>Illuminate\\Http\\Request</code> class will flash the current input to the <a href="./session">session</a> so that it is available during the user&#39;s next request to the application:</p><pre><code>$request-&gt;flash();
</code></pre><p>You may also use the <code>flashOnly</code> and <code>flashExcept</code> methods to flash a subset of the request data to the session. These methods are useful for keeping sensitive information such as passwords out of the session:</p><pre><code>$request-&gt;flashOnly([&#39;username&#39;, &#39;email&#39;]);

$request-&gt;flashExcept(&#39;password&#39;);
</code></pre><p><a name="flashing-input-then-redirecting"></a></p><h4 id="flashing-input-then-redirecting" tabindex="-1"><a class="header-anchor" href="#flashing-input-then-redirecting" aria-hidden="true">#</a> Flashing Input Then Redirecting</h4><p>Since you often will want to flash input to the session and then redirect to the previous page, you may easily chain input flashing onto a redirect using the <code>withInput</code> method:</p><pre><code>return redirect(&#39;form&#39;)-&gt;withInput();

return redirect()-&gt;route(&#39;user.create&#39;)-&gt;withInput();

return redirect(&#39;form&#39;)-&gt;withInput(
    $request-&gt;except(&#39;password&#39;)
);
</code></pre><p><a name="retrieving-old-input"></a></p><h4 id="retrieving-old-input" tabindex="-1"><a class="header-anchor" href="#retrieving-old-input" aria-hidden="true">#</a> Retrieving Old Input</h4><p>To retrieve flashed input from the previous request, invoke the <code>old</code> method on an instance of <code>Illuminate\\Http\\Request</code>. The <code>old</code> method will pull the previously flashed input data from the <a href="./session">session</a>:</p><pre><code>$username = $request-&gt;old(&#39;username&#39;);
</code></pre><p>Laravel also provides a global <code>old</code> helper. If you are displaying old input within a <a href="./blade">Blade template</a>, it is more convenient to use the <code>old</code> helper to repopulate the form. If no old input exists for the given field, <code>null</code> will be returned:</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string double-quoted-string">&quot;text&quot;</span> name<span class="token operator">=</span><span class="token string double-quoted-string">&quot;username&quot;</span> value<span class="token operator">=</span><span class="token string double-quoted-string">&quot;{{ old(&#39;username&#39;) }}&quot;</span><span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a name="cookies"></a></p><h3 id="cookies" tabindex="-1"><a class="header-anchor" href="#cookies" aria-hidden="true">#</a> Cookies</h3><p><a name="retrieving-cookies-from-requests"></a></p><h4 id="retrieving-cookies-from-requests" tabindex="-1"><a class="header-anchor" href="#retrieving-cookies-from-requests" aria-hidden="true">#</a> Retrieving Cookies From Requests</h4><p>All cookies created by the Laravel framework are encrypted and signed with an authentication code, meaning they will be considered invalid if they have been changed by the client. To retrieve a cookie value from the request, use the <code>cookie</code> method on an <code>Illuminate\\Http\\Request</code> instance:</p><pre><code>$value = $request-&gt;cookie(&#39;name&#39;);
</code></pre><p><a name="input-trimming-and-normalization"></a></p><h2 id="input-trimming-normalization" tabindex="-1"><a class="header-anchor" href="#input-trimming-normalization" aria-hidden="true">#</a> Input Trimming &amp; Normalization</h2><p>By default, Laravel includes the <code>App\\Http\\Middleware\\TrimStrings</code> and <code>Illuminate\\Foundation\\Http\\Middleware\\ConvertEmptyStringsToNull</code> middleware in your application&#39;s global middleware stack. These middleware are listed in the global middleware stack by the <code>App\\Http\\Kernel</code> class. These middleware will automatically trim all incoming string fields on the request, as well as convert any empty string fields to <code>null</code>. This allows you to not have to worry about these normalization concerns in your routes and controllers.</p><h4 id="disabling-input-normalization" tabindex="-1"><a class="header-anchor" href="#disabling-input-normalization" aria-hidden="true">#</a> Disabling Input Normalization</h4><p>If you would like to disable this behavior for all requests, you may remove the two middleware from your application&#39;s middleware stack by removing them from the <code>$middleware</code> property of your <code>App\\Http\\Kernel</code> class.</p><p>If you would like to disable string trimming and empty string conversion for a subset of requests to your application, you may use the <code>skipWhen</code> method offered by both middleware. This method accepts a closure which should return <code>true</code> or <code>false</code> to indicate if input normalization should be skipped. Typically, the <code>skipWhen</code> method should be invoked in the <code>boot</code> method of your application&#39;s <code>AppServiceProvider</code>.</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">App<span class="token punctuation">\\</span>Http<span class="token punctuation">\\</span>Middleware<span class="token punctuation">\\</span>TrimStrings</span><span class="token punctuation">;</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="files"></a></p><h2 id="files" tabindex="-1"><a class="header-anchor" href="#files" aria-hidden="true">#</a> Files</h2><p><a name="retrieving-uploaded-files"></a></p><h3 id="retrieving-uploaded-files" tabindex="-1"><a class="header-anchor" href="#retrieving-uploaded-files" aria-hidden="true">#</a> Retrieving Uploaded Files</h3><p>You may retrieve uploaded files from an <code>Illuminate\\Http\\Request</code> instance using the <code>file</code> method or using dynamic properties. The <code>file</code> method returns an instance of the <code>Illuminate\\Http\\UploadedFile</code> class, which extends the PHP <code>SplFileInfo</code> class and provides a variety of methods for interacting with the file:</p><pre><code>$file = $request-&gt;file(&#39;photo&#39;);

$file = $request-&gt;photo;
</code></pre><p>You may determine if a file is present on the request using the <code>hasFile</code> method:</p><pre><code>if ($request-&gt;hasFile(&#39;photo&#39;)) {
    // ...
}
</code></pre><p><a name="validating-successful-uploads"></a></p><h4 id="validating-successful-uploads" tabindex="-1"><a class="header-anchor" href="#validating-successful-uploads" aria-hidden="true">#</a> Validating Successful Uploads</h4><p>In addition to checking if the file is present, you may verify that there were no problems uploading the file via the <code>isValid</code> method:</p><pre><code>if ($request-&gt;file(&#39;photo&#39;)-&gt;isValid()) {
    // ...
}
</code></pre><p><a name="file-paths-extensions"></a></p><h4 id="file-paths-extensions" tabindex="-1"><a class="header-anchor" href="#file-paths-extensions" aria-hidden="true">#</a> File Paths &amp; Extensions</h4><p>The <code>UploadedFile</code> class also contains methods for accessing the file&#39;s fully-qualified path and its extension. The <code>extension</code> method will attempt to guess the file&#39;s extension based on its contents. This extension may be different from the extension that was supplied by the client:</p><pre><code>$path = $request-&gt;photo-&gt;path();

$extension = $request-&gt;photo-&gt;extension();
</code></pre><p><a name="other-file-methods"></a></p><h4 id="other-file-methods" tabindex="-1"><a class="header-anchor" href="#other-file-methods" aria-hidden="true">#</a> Other File Methods</h4>`,89),v=t("code",null,"UploadedFile",-1),q={href:"https://github.com/symfony/symfony/blob/6.0/src/Symfony/Component/HttpFoundation/File/UploadedFile.php",target:"_blank",rel:"noopener noreferrer"},b=n(`<p><a name="storing-uploaded-files"></a></p><h3 id="storing-uploaded-files" tabindex="-1"><a class="header-anchor" href="#storing-uploaded-files" aria-hidden="true">#</a> Storing Uploaded Files</h3><p>To store an uploaded file, you will typically use one of your configured <a href="./filesystem">filesystems</a>. The <code>UploadedFile</code> class has a <code>store</code> method that will move an uploaded file to one of your disks, which may be a location on your local filesystem or a cloud storage location like Amazon S3.</p><p>The <code>store</code> method accepts the path where the file should be stored relative to the filesystem&#39;s configured root directory. This path should not contain a filename, since a unique ID will automatically be generated to serve as the filename.</p><p>The <code>store</code> method also accepts an optional second argument for the name of the disk that should be used to store the file. The method will return the path of the file relative to the disk&#39;s root:</p><pre><code>$path = $request-&gt;photo-&gt;store(&#39;images&#39;);

$path = $request-&gt;photo-&gt;store(&#39;images&#39;, &#39;s3&#39;);
</code></pre><p>If you do not want a filename to be automatically generated, you may use the <code>storeAs</code> method, which accepts the path, filename, and disk name as its arguments:</p><pre><code>$path = $request-&gt;photo-&gt;storeAs(&#39;images&#39;, &#39;filename.jpg&#39;);

$path = $request-&gt;photo-&gt;storeAs(&#39;images&#39;, &#39;filename.jpg&#39;, &#39;s3&#39;);
</code></pre><blockquote><p><strong>Note</strong><br> For more information about file storage in Laravel, check out the complete <a href="./filesystem">file storage documentation</a>.</p></blockquote><p><a name="configuring-trusted-proxies"></a></p><h2 id="configuring-trusted-proxies" tabindex="-1"><a class="header-anchor" href="#configuring-trusted-proxies" aria-hidden="true">#</a> Configuring Trusted Proxies</h2><p>When running your applications behind a load balancer that terminates TLS / SSL certificates, you may notice your application sometimes does not generate HTTPS links when using the <code>url</code> helper. Typically this is because your application is being forwarded traffic from your load balancer on port 80 and does not know it should generate secure links.</p><p>To solve this, you may use the <code>App\\Http\\Middleware\\TrustProxies</code> middleware that is included in your Laravel application, which allows you to quickly customize the load balancers or proxies that should be trusted by your application. Your trusted proxies should be listed as an array on the <code>$proxies</code> property of this middleware. In addition to configuring the trusted proxies, you may configure the proxy <code>$headers</code> that should be trusted:</p><pre><code>&lt;?php

namespace App\\Http\\Middleware;

use Illuminate\\Http\\Middleware\\TrustProxies as Middleware;
use Illuminate\\Http\\Request;

class TrustProxies extends Middleware
{
    /**
     * The trusted proxies for this application.
     *
     * @var string|array
     */
    protected $proxies = [
        &#39;192.168.1.1&#39;,
        &#39;192.168.1.2&#39;,
    ];

    /**
     * The headers that should be used to detect proxies.
     *
     * @var int
     */
    protected $headers = Request::HEADER_X_FORWARDED_FOR | Request::HEADER_X_FORWARDED_HOST | Request::HEADER_X_FORWARDED_PORT | Request::HEADER_X_FORWARDED_PROTO;
}
</code></pre>`,14),w=t("strong",null,"Note",-1),k=t("br",null,null,-1),$=t("code",null,"$headers",-1),T=t("code",null,"Request::HEADER_X_FORWARDED_AWS_ELB",-1),x=t("code",null,"$headers",-1),R={href:"https://symfony.com/doc/current/deployment/proxies.html",target:"_blank",rel:"noopener noreferrer"},I=n(`<p><a name="trusting-all-proxies"></a></p><h4 id="trusting-all-proxies" tabindex="-1"><a class="header-anchor" href="#trusting-all-proxies" aria-hidden="true">#</a> Trusting All Proxies</h4><p>If you are using Amazon AWS or another &quot;cloud&quot; load balancer provider, you may not know the IP addresses of your actual balancers. In this case, you may use <code>*</code> to trust all proxies:</p><pre><code>/**
 * The trusted proxies for this application.
 *
 * @var string|array
 */
protected $proxies = &#39;*&#39;;
</code></pre><p><a name="configuring-trusted-hosts"></a></p><h2 id="configuring-trusted-hosts" tabindex="-1"><a class="header-anchor" href="#configuring-trusted-hosts" aria-hidden="true">#</a> Configuring Trusted Hosts</h2><p>By default, Laravel will respond to all requests it receives regardless of the content of the HTTP request&#39;s <code>Host</code> header. In addition, the <code>Host</code> header&#39;s value will be used when generating absolute URLs to your application during a web request.</p><p>Typically, you should configure your web server, such as Nginx or Apache, to only send requests to your application that match a given host name. However, if you do not have the ability to customize your web server directly and need to instruct Laravel to only respond to certain host names, you may do so by enabling the <code>App\\Http\\Middleware\\TrustHosts</code> middleware for your application.</p><p>The <code>TrustHosts</code> middleware is already included in the <code>$middleware</code> stack of your application; however, you should uncomment it so that it becomes active. Within this middleware&#39;s <code>hosts</code> method, you may specify the host names that your application should respond to. Incoming requests with other <code>Host</code> value headers will be rejected:</p><pre><code>/**
 * Get the host patterns that should be trusted.
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
</code></pre><p>The <code>allSubdomainsOfApplicationUrl</code> helper method will return a regular expression matching all subdomains of your application&#39;s <code>app.url</code> configuration value. This helper method provides a convenient way to allow all of your application&#39;s subdomains when building an application that utilizes wildcard subdomains.</p>`,11);function H(_,A){const a=r("ExternalLinkIcon");return i(),d("div",null,[p,t("p",null,[e("The "),t("a",l,[e("PSR-7 standard"),o(a)]),e(" specifies interfaces for HTTP messages, including requests and responses. If you would like to obtain an instance of a PSR-7 request instead of a Laravel request, you will first need to install a few libraries. Laravel uses the "),c,e(" component to convert typical Laravel requests and responses into PSR-7 compatible implementations:")]),h,t("p",null,[e("Input values that correspond to "),t("a",m,[e("PHP enums"),o(a)]),e(" may also be retrieved from the request. If the request does not contain an input value with the given name or the enum does not have a backing value that matches the input value, "),g,e(" will be returned. The "),f,e(" method accepts the name of the input value and the enum class as its first and second arguments:")]),y,t("p",null,[e("There are a variety of other methods available on "),v,e(" instances. Check out the "),t("a",q,[e("API documentation for the class"),o(a)]),e(" for more information regarding these methods.")]),b,t("blockquote",null,[t("p",null,[w,k,e(" If you are using AWS Elastic Load Balancing, your "),$,e(" value should be "),T,e(". For more information on the constants that may be used in the "),x,e(" property, check out Symfony's documentation on "),t("a",R,[e("trusting proxies"),o(a)]),e(".")])]),I])}const F=s(u,[["render",H],["__file","requests.html.vue"]]);export{F as default};
