import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{r as p,o as i,c,b as e,d as n,e as s,a as t}from"./app-8cdff07c.js";const r={},l=t('<h1 id="error-handling" tabindex="-1"><a class="header-anchor" href="#error-handling" aria-hidden="true">#</a> Error Handling</h1><ul><li><a href="#introduction">Introduction</a></li><li><a href="#configuration">Configuration</a></li><li><a href="#the-exception-handler">The Exception Handler</a><ul><li><a href="#reporting-exceptions">Reporting Exceptions</a></li><li><a href="#exception-log-levels">Exception Log Levels</a></li><li><a href="#ignoring-exceptions-by-type">Ignoring Exceptions By Type</a></li><li><a href="#rendering-exceptions">Rendering Exceptions</a></li><li><a href="#renderable-exceptions">Reportable &amp; Renderable Exceptions</a></li></ul></li><li><a href="#throttling-reported-exceptions">Throttling Reported Exceptions</a></li><li><a href="#http-exceptions">HTTP Exceptions</a><ul><li><a href="#custom-http-error-pages">Custom HTTP Error Pages</a></li></ul></li></ul><p><a name="introduction"></a></p><h2 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h2><p>When you start a new Laravel project, error and exception handling is already configured for you. The <code>App\\Exceptions\\Handler</code> class is where all exceptions thrown by your application are logged and then rendered to the user. We&#39;ll dive deeper into this class throughout this documentation.</p><p><a name="configuration"></a></p><h2 id="configuration" tabindex="-1"><a class="header-anchor" href="#configuration" aria-hidden="true">#</a> Configuration</h2><p>The <code>debug</code> option in your <code>config/app.php</code> configuration file determines how much information about an error is actually displayed to the user. By default, this option is set to respect the value of the <code>APP_DEBUG</code> environment variable, which is stored in your <code>.env</code> file.</p><p>During local development, you should set the <code>APP_DEBUG</code> environment variable to <code>true</code>. <strong>In your production environment, this value should always be <code>false</code>. If the value is set to <code>true</code> in production, you risk exposing sensitive configuration values to your application&#39;s end users.</strong></p><p><a name="the-exception-handler"></a></p><h2 id="the-exception-handler" tabindex="-1"><a class="header-anchor" href="#the-exception-handler" aria-hidden="true">#</a> The Exception Handler</h2><p><a name="reporting-exceptions"></a></p><h3 id="reporting-exceptions" tabindex="-1"><a class="header-anchor" href="#reporting-exceptions" aria-hidden="true">#</a> Reporting Exceptions</h3>',13),d=e("code",null,"App\\Exceptions\\Handler",-1),u=e("code",null,"register",-1),h={href:"https://flareapp.io",target:"_blank",rel:"noopener noreferrer"},k={href:"https://bugsnag.com",target:"_blank",rel:"noopener noreferrer"},m={href:"https://github.com/getsentry/sentry-laravel",target:"_blank",rel:"noopener noreferrer"},v=e("a",{href:"./logging"},"logging",-1),g=t(`<p>If you need to report different types of exceptions in different ways, you may use the <code>reportable</code> method to register a closure that should be executed when an exception of a given type needs to be reported. Laravel will determine what type of exception the closure reports by examining the type-hint of the closure:</p><pre><code>use App\\Exceptions\\InvalidOrderException;

/**
 * Register the exception handling callbacks for the application.
 */
public function register(): void
{
    $this-&gt;reportable(function (InvalidOrderException $e) {
        // ...
    });
}
</code></pre><p>When you register a custom exception reporting callback using the <code>reportable</code> method, Laravel will still log the exception using the default logging configuration for the application. If you wish to stop the propagation of the exception to the default logging stack, you may use the <code>stop</code> method when defining your reporting callback or return <code>false</code> from the callback:</p><pre><code>$this-&gt;reportable(function (InvalidOrderException $e) {
    // ...
})-&gt;stop();

$this-&gt;reportable(function (InvalidOrderException $e) {
    return false;
});
</code></pre><blockquote><p><strong>Note</strong><br> To customize the exception reporting for a given exception, you may also utilize <a href="./errors#renderable-exceptions">reportable exceptions</a>.</p></blockquote><p><a name="global-log-context"></a></p><h4 id="global-log-context" tabindex="-1"><a class="header-anchor" href="#global-log-context" aria-hidden="true">#</a> Global Log Context</h4><p>If available, Laravel automatically adds the current user&#39;s ID to every exception&#39;s log message as contextual data. You may define your own global contextual data by defining a <code>context</code> method on your application&#39;s <code>App\\Exceptions\\Handler</code> class. This information will be included in every exception&#39;s log message written by your application:</p><pre><code>/**
 * Get the default context variables for logging.
 *
 * @return array&lt;string, mixed&gt;
 */
protected function context(): array
{
    return array_merge(parent::context(), [
        &#39;foo&#39; =&gt; &#39;bar&#39;,
    ]);
}
</code></pre><p><a name="exception-log-context"></a></p><h4 id="exception-log-context" tabindex="-1"><a class="header-anchor" href="#exception-log-context" aria-hidden="true">#</a> Exception Log Context</h4><p>While adding context to every log message can be useful, sometimes a particular exception may have unique context that you would like to include in your logs. By defining a <code>context</code> method on one of your application&#39;s exceptions, you may specify any data relevant to that exception that should be added to the exception&#39;s log entry:</p><pre><code>&lt;?php

namespace App\\Exceptions;

use Exception;

class InvalidOrderException extends Exception
{
    // ...

    /**
     * Get the exception&#39;s context information.
     *
     * @return array&lt;string, mixed&gt;
     */
    public function context(): array
    {
        return [&#39;order_id&#39; =&gt; $this-&gt;orderId];
    }
}
</code></pre><p><a name="the-report-helper"></a></p><h4 id="the-report-helper" tabindex="-1"><a class="header-anchor" href="#the-report-helper" aria-hidden="true">#</a> The <code>report</code> Helper</h4><p>Sometimes you may need to report an exception but continue handling the current request. The <code>report</code> helper function allows you to quickly report an exception via the exception handler without rendering an error page to the user:</p><pre><code>public function isValid(string $value): bool
{
    try {
        // Validate the value...
    } catch (Throwable $e) {
        report($e);

        return false;
    }
}
</code></pre><p><a name="deduplicating-reported-exceptions"></a></p><h4 id="deduplicating-reported-exceptions" tabindex="-1"><a class="header-anchor" href="#deduplicating-reported-exceptions" aria-hidden="true">#</a> Deduplicating Reported Exceptions</h4><p>If you are using the <code>report</code> function throughout your application, you may occasionally report the same exception multiple times, creating duplicate entries in your logs.</p><p>If you would like to ensure that a single instance of an exception is only ever reported once, you may set the <code>$withoutDuplicates</code> property to <code>true</code> within your application&#39;s <code>App\\Exceptions\\Handler</code> class:</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">namespace</span> <span class="token package">App<span class="token punctuation">\\</span>Exceptions</span><span class="token punctuation">;</span>

<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Foundation<span class="token punctuation">\\</span>Exceptions<span class="token punctuation">\\</span>Handler</span> <span class="token keyword">as</span> ExceptionHandler<span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">Handler</span> <span class="token keyword">extends</span> <span class="token class-name">ExceptionHandler</span>
<span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * Indicates that an exception instance should only be reported once.
     *
     * <span class="token keyword">@var</span> <span class="token class-name"><span class="token keyword">bool</span></span>
     */</span>
    <span class="token keyword">protected</span> <span class="token variable">$withoutDuplicates</span> <span class="token operator">=</span> <span class="token constant boolean">true</span><span class="token punctuation">;</span>

    <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Now, when the <code>report</code> helper is called with the same instance of an exception, only the first call will be reported:</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token variable">$original</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">RuntimeException</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;Whoops!&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">report</span><span class="token punctuation">(</span><span class="token variable">$original</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// reported</span>

<span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token keyword">throw</span> <span class="token variable">$original</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Throwable</span> <span class="token variable">$caught</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">report</span><span class="token punctuation">(</span><span class="token variable">$caught</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// ignored</span>
<span class="token punctuation">}</span>

<span class="token function">report</span><span class="token punctuation">(</span><span class="token variable">$original</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// ignored</span>
<span class="token function">report</span><span class="token punctuation">(</span><span class="token variable">$caught</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// ignored</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="exception-log-levels"></a></p><h3 id="exception-log-levels" tabindex="-1"><a class="header-anchor" href="#exception-log-levels" aria-hidden="true">#</a> Exception Log Levels</h3><p>When messages are written to your application&#39;s <a href="./logging">logs</a>, the messages are written at a specified <a href="./logging#log-levels">log level</a>, which indicates the severity or importance of the message being logged.</p><p>As noted above, even when you register a custom exception reporting callback using the <code>reportable</code> method, Laravel will still log the exception using the default logging configuration for the application; however, since the log level can sometimes influence the channels on which a message is logged, you may wish to configure the log level that certain exceptions are logged at.</p><p>To accomplish this, you may define a <code>$levels</code> property on your application&#39;s exception handler. This property should contain an array of exception types and their associated log levels:</p><pre><code>use PDOException;
use Psr\\Log\\LogLevel;

/**
 * A list of exception types with their corresponding custom log levels.
 *
 * @var array&lt;class-string&lt;\\Throwable&gt;, \\Psr\\Log\\LogLevel::*&gt;
 */
protected $levels = [
    PDOException::class =&gt; LogLevel::CRITICAL,
];
</code></pre><p><a name="ignoring-exceptions-by-type"></a></p><h3 id="ignoring-exceptions-by-type" tabindex="-1"><a class="header-anchor" href="#ignoring-exceptions-by-type" aria-hidden="true">#</a> Ignoring Exceptions By Type</h3><p>When building your application, there will be some types of exceptions you never want to report. To ignore these exceptions, define a <code>$dontReport</code> property on your application&#39;s exception handler. Any classes that you add to this property will never be reported; however, they may still have custom rendering logic:</p><pre><code>use App\\Exceptions\\InvalidOrderException;

/**
 * A list of the exception types that are not reported.
 *
 * @var array&lt;int, class-string&lt;\\Throwable&gt;&gt;
 */
protected $dontReport = [
    InvalidOrderException::class,
];
</code></pre><p>Internally, Laravel already ignores some types of errors for you, such as exceptions resulting from 404 HTTP errors or 419 HTTP responses generated by invalid CSRF tokens. If you would like to instruct Laravel to stop ignoring a given type of exception, you may invoke the <code>stopIgnoring</code> method within your exception handler&#39;s <code>register</code> method:</p><pre><code>use Symfony\\Component\\HttpKernel\\Exception\\HttpException;

/**
 * Register the exception handling callbacks for the application.
 */
public function register(): void
{
    $this-&gt;stopIgnoring(HttpException::class);

    // ...
}
</code></pre><p><a name="rendering-exceptions"></a></p><h3 id="rendering-exceptions" tabindex="-1"><a class="header-anchor" href="#rendering-exceptions" aria-hidden="true">#</a> Rendering Exceptions</h3><p>By default, the Laravel exception handler will convert exceptions into an HTTP response for you. However, you are free to register a custom rendering closure for exceptions of a given type. You may accomplish this by invoking the <code>renderable</code> method within your exception handler.</p><p>The closure passed to the <code>renderable</code> method should return an instance of <code>Illuminate\\Http\\Response</code>, which may be generated via the <code>response</code> helper. Laravel will determine what type of exception the closure renders by examining the type-hint of the closure:</p><pre><code>use App\\Exceptions\\InvalidOrderException;
use Illuminate\\Http\\Request;

/**
 * Register the exception handling callbacks for the application.
 */
public function register(): void
{
    $this-&gt;renderable(function (InvalidOrderException $e, Request $request) {
        return response()-&gt;view(&#39;errors.invalid-order&#39;, [], 500);
    });
}
</code></pre><p>You may also use the <code>renderable</code> method to override the rendering behavior for built-in Laravel or Symfony exceptions such as <code>NotFoundHttpException</code>. If the closure given to the <code>renderable</code> method does not return a value, Laravel&#39;s default exception rendering will be utilized:</p><pre><code>use Illuminate\\Http\\Request;
use Symfony\\Component\\HttpKernel\\Exception\\NotFoundHttpException;

/**
 * Register the exception handling callbacks for the application.
 */
public function register(): void
{
    $this-&gt;renderable(function (NotFoundHttpException $e, Request $request) {
        if ($request-&gt;is(&#39;api/*&#39;)) {
            return response()-&gt;json([
                &#39;message&#39; =&gt; &#39;Record not found.&#39;
            ], 404);
        }
    });
}
</code></pre><p><a name="renderable-exceptions"></a></p><h3 id="reportable-renderable-exceptions" tabindex="-1"><a class="header-anchor" href="#reportable-renderable-exceptions" aria-hidden="true">#</a> Reportable &amp; Renderable Exceptions</h3><p>Instead of defining custom reporting and rendering behavior in your exception handler&#39;s <code>register</code> method, you may define <code>report</code> and <code>render</code> methods directly on your application&#39;s exceptions. When these methods exist, they will automatically be called by the framework:</p><pre><code>&lt;?php

namespace App\\Exceptions;

use Exception;
use Illuminate\\Http\\Request;
use Illuminate\\Http\\Response;

class InvalidOrderException extends Exception
{
    /**
     * Report the exception.
     */
    public function report(): void
    {
        // ...
    }

    /**
     * Render the exception into an HTTP response.
     */
    public function render(Request $request): Response
    {
        return response(/* ... */);
    }
}
</code></pre><p>If your exception extends an exception that is already renderable, such as a built-in Laravel or Symfony exception, you may return <code>false</code> from the exception&#39;s <code>render</code> method to render the exception&#39;s default HTTP response:</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>    <span class="token doc-comment comment">/**
     * Render the exception into an HTTP response.
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">render</span><span class="token punctuation">(</span><span class="token class-name type-declaration">Request</span> <span class="token variable">$request</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token class-name">Response</span><span class="token operator">|</span><span class="token keyword type-declaration">bool</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token doc-comment comment">/** Determine if the exception needs custom rendering */</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

            <span class="token keyword">return</span> <span class="token function">response</span><span class="token punctuation">(</span><span class="token comment">/* ... */</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">return</span> <span class="token constant boolean">false</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>If your exception contains custom reporting logic that is only necessary when certain conditions are met, you may need to instruct Laravel to sometimes report the exception using the default exception handling configuration. To accomplish this, you may return <code>false</code> from the exception&#39;s <code>report</code> method:</p><pre><code>/**
 * Report the exception.
 */
public function report(): bool
{
    if (/** Determine if the exception needs custom reporting */) {

        // ...

        return true;
    }

    return false;
}
</code></pre><blockquote><p><strong>Note</strong><br> You may type-hint any required dependencies of the <code>report</code> method and they will automatically be injected into the method by Laravel&#39;s <a href="./container">service container</a>.</p></blockquote><p><a name="throttling-reported-exceptions"></a></p><h3 id="throttling-reported-exceptions" tabindex="-1"><a class="header-anchor" href="#throttling-reported-exceptions" aria-hidden="true">#</a> Throttling Reported Exceptions</h3><p>If your application reports a very large number of exceptions, you may want to throttle how many exceptions are actually logged or sent to your application&#39;s external error tracking service.</p><p>To take a random sample rate of exceptions, you can return a <code>Lottery</code> instance from your exception handler&#39;s <code>throttle</code> method. If your <code>App\\Exceptions\\Handler</code> class does not contain this method, you may simply add it to the class:</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Support<span class="token punctuation">\\</span>Lottery</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Throwable</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * Throttle incoming exceptions.
 */</span>
<span class="token keyword">protected</span> <span class="token keyword">function</span> <span class="token function-definition function">throttle</span><span class="token punctuation">(</span><span class="token class-name type-declaration">Throwable</span> <span class="token variable">$e</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">mixed</span>
<span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token class-name static-context">Lottery</span><span class="token operator">::</span><span class="token function">odds</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>It is also possible to conditionally sample based on the exception type. If you would like to only sample instances of a specific exception class, you may return a <code>Lottery</code> instance only for that class:</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">App<span class="token punctuation">\\</span>Exceptions<span class="token punctuation">\\</span>ApiMonitoringException</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Support<span class="token punctuation">\\</span>Lottery</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Throwable</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * Throttle incoming exceptions.
 */</span>
<span class="token keyword">protected</span> <span class="token keyword">function</span> <span class="token function-definition function">throttle</span><span class="token punctuation">(</span><span class="token class-name type-declaration">Throwable</span> <span class="token variable">$e</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">mixed</span>
<span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token variable">$e</span> <span class="token keyword">instanceof</span> <span class="token class-name">ApiMonitoringException</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token class-name static-context">Lottery</span><span class="token operator">::</span><span class="token function">odds</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>You may also rate limit exceptions logged or sent to an external error tracking service by returning a <code>Limit</code> instance instead of a <code>Lottery</code>. This is useful if you want to protect against sudden bursts of exceptions flooding your logs, for example, when a third-party service used by your application is down:</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Broadcasting<span class="token punctuation">\\</span>BroadcastException</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Cache<span class="token punctuation">\\</span>RateLimiting<span class="token punctuation">\\</span>Limit</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Throwable</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * Throttle incoming exceptions.
 */</span>
<span class="token keyword">protected</span> <span class="token keyword">function</span> <span class="token function-definition function">throttle</span><span class="token punctuation">(</span><span class="token class-name type-declaration">Throwable</span> <span class="token variable">$e</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">mixed</span>
<span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token variable">$e</span> <span class="token keyword">instanceof</span> <span class="token class-name">BroadcastException</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token class-name static-context">Limit</span><span class="token operator">::</span><span class="token function">perMinute</span><span class="token punctuation">(</span><span class="token number">300</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>By default, limits will use the exception&#39;s class as the rate limit key. You can customize this by specifying your own key using the <code>by</code> method on the <code>Limit</code>:</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Broadcasting<span class="token punctuation">\\</span>BroadcastException</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Cache<span class="token punctuation">\\</span>RateLimiting<span class="token punctuation">\\</span>Limit</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Throwable</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * Throttle incoming exceptions.
 */</span>
<span class="token keyword">protected</span> <span class="token keyword">function</span> <span class="token function-definition function">throttle</span><span class="token punctuation">(</span><span class="token class-name type-declaration">Throwable</span> <span class="token variable">$e</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">mixed</span>
<span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token variable">$e</span> <span class="token keyword">instanceof</span> <span class="token class-name">BroadcastException</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token class-name static-context">Limit</span><span class="token operator">::</span><span class="token function">perMinute</span><span class="token punctuation">(</span><span class="token number">300</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">by</span><span class="token punctuation">(</span><span class="token variable">$e</span><span class="token operator">-&gt;</span><span class="token function">getMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Of course, you may return a mixture of <code>Lottery</code> and <code>Limit</code> instances for different exceptions:</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">App<span class="token punctuation">\\</span>Exceptions<span class="token punctuation">\\</span>ApiMonitoringException</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Broadcasting<span class="token punctuation">\\</span>BroadcastException</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Cache<span class="token punctuation">\\</span>RateLimiting<span class="token punctuation">\\</span>Limit</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Support<span class="token punctuation">\\</span>Lottery</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Throwable</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * Throttle incoming exceptions.
 */</span>
<span class="token keyword">protected</span> <span class="token keyword">function</span> <span class="token function-definition function">throttle</span><span class="token punctuation">(</span><span class="token class-name type-declaration">Throwable</span> <span class="token variable">$e</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">mixed</span>
<span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">match</span> <span class="token punctuation">(</span><span class="token constant boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token variable">$e</span> <span class="token keyword">instanceof</span> <span class="token class-name">BroadcastException</span> <span class="token operator">=&gt;</span> <span class="token class-name static-context">Limit</span><span class="token operator">::</span><span class="token function">perMinute</span><span class="token punctuation">(</span><span class="token number">300</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token variable">$e</span> <span class="token keyword">instanceof</span> <span class="token class-name">ApiMonitoringException</span> <span class="token operator">=&gt;</span> <span class="token class-name static-context">Lottery</span><span class="token operator">::</span><span class="token function">odds</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token keyword">default</span> <span class="token operator">=&gt;</span> <span class="token class-name static-context">Limit</span><span class="token operator">::</span><span class="token function">none</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="http-exceptions"></a></p><h2 id="http-exceptions" tabindex="-1"><a class="header-anchor" href="#http-exceptions" aria-hidden="true">#</a> HTTP Exceptions</h2><p>Some exceptions describe HTTP error codes from the server. For example, this may be a &quot;page not found&quot; error (404), an &quot;unauthorized error&quot; (401), or even a developer generated 500 error. In order to generate such a response from anywhere in your application, you may use the <code>abort</code> helper:</p><pre><code>abort(404);
</code></pre><p><a name="custom-http-error-pages"></a></p><h3 id="custom-http-error-pages" tabindex="-1"><a class="header-anchor" href="#custom-http-error-pages" aria-hidden="true">#</a> Custom HTTP Error Pages</h3><p>Laravel makes it easy to display custom error pages for various HTTP status codes. For example, to customize the error page for 404 HTTP status codes, create a <code>resources/views/errors/404.blade.php</code> view template. This view will be rendered for all 404 errors generated by your application. The views within this directory should be named to match the HTTP status code they correspond to. The <code>Symfony\\Component\\HttpKernel\\Exception\\HttpException</code> instance raised by the <code>abort</code> function will be passed to the view as an <code>$exception</code> variable:</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token operator">&lt;</span>h2<span class="token operator">&gt;</span><span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token variable">$exception</span><span class="token operator">-&gt;</span><span class="token function">getMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>You may publish Laravel&#39;s default error page templates using the <code>vendor:publish</code> Artisan command. Once the templates have been published, you may customize them to your liking:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan vendor:publish <span class="token parameter variable">--tag</span><span class="token operator">=</span>laravel-errors
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a name="fallback-http-error-pages"></a></p><h4 id="fallback-http-error-pages" tabindex="-1"><a class="header-anchor" href="#fallback-http-error-pages" aria-hidden="true">#</a> Fallback HTTP Error Pages</h4><p>You may also define a &quot;fallback&quot; error page for a given series of HTTP status codes. This page will be rendered if there is not a corresponding page for the specific HTTP status code that occurred. To accomplish this, define a <code>4xx.blade.php</code> template and a <code>5xx.blade.php</code> template in your application&#39;s <code>resources/views/errors</code> directory.</p>`,78);function b(y,x){const a=p("ExternalLinkIcon");return i(),c("div",null,[l,e("p",null,[n("All exceptions are handled by the "),d,n(" class. This class contains a "),u,n(" method where you may register custom exception reporting and rendering callbacks. We'll examine each of these concepts in detail. Exception reporting is used to log exceptions or send them to an external service like "),e("a",h,[n("Flare"),s(a)]),n(", "),e("a",k,[n("Bugsnag"),s(a)]),n(", or "),e("a",m,[n("Sentry"),s(a)]),n(". By default, exceptions will be logged based on your "),v,n(" configuration. However, you are free to log exceptions however you wish.")]),g])}const E=o(r,[["render",b],["__file","errors.html.vue"]]);export{E as default};
