import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as p,o as i,c,b as n,d as e,e as r,a as o}from"./app-8cdff07c.js";const d={},s=o('<h1 id="错误处理" tabindex="-1"><a class="header-anchor" href="#错误处理" aria-hidden="true">#</a> 错误处理</h1><ul><li><a href="#introduction">简介</a></li><li><a href="#configuration">配置</a></li><li><a href="#the-exception-handler">异常处理</a><ul><li><a href="#reporting-exceptions">报告异常</a></li><li><a href="#exception-log-levels">异常日志级别</a></li><li><a href="#ignoring-exceptions-by-type">忽略指定类型异常</a></li><li><a href="#rendering-exceptions">渲染异常</a></li><li><a href="#renderable-exceptions">Reportable &amp; Renderable 异常</a></li></ul></li><li><a href="#http-exceptions">HTTP 异常</a><ul><li><a href="#custom-http-error-pages">自定义 HTTP 错误页面</a></li></ul></li></ul><p><a name="introduction"></a></p><h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h2><p>Laravel 默认已经为我们配置好了错误和异常处理，我们在 App\\Exceptions\\Handler 类中触发异常并将响应返回给用户。在本文档中我们将深入探讨这个类。</p><p><a name="configuration"></a></p><h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h2><p>配置文件 config/app.php 中的 debug 配置项控制浏览器显示的错误信息数量。默认情况下，该配置项通过 .env 文件中的环境变量 APP_DEBUG 进行设置。</p><p>对本地开发而言，你应该设置环境变量 APP_DEBUG 值为 true。在生产环境，该值应该被设置为 false。如果在生产环境被设置为 true，就有可能将一些敏感的配置值暴露给终端用户。</p><p><a name="the-exception-handler"></a></p><h2 id="异常处理器" tabindex="-1"><a class="header-anchor" href="#异常处理器" aria-hidden="true">#</a> 异常处理器</h2><p><a name="reporting-exceptions"></a></p><h3 id="报告异常" tabindex="-1"><a class="header-anchor" href="#报告异常" aria-hidden="true">#</a> 报告异常</h3><p>所有异常都由 App\\Exceptions\\Handler 类处理。这个类包含了一个 register 方法用于注册自定义的异常报告器和渲染器回调，接下来我们会详细介绍这些概念。我们可以通过异常报告记录异常或者将它们发送给外部服务，比如 Flare、Bugsnag 以及 Sentry。默认情况下，会基于日志配置记录异常，不过，你也可以按照自己期望的方式进行自定义。</p><p>例如，如果你需要以不同方式报告不同类型的异常，可以使用 reportable 方法注册一个闭包，该闭包会在给定类型异常需要被报告时执行。Laravel 会通过检查闭包的参数类型提示推断该闭包报告的异常类型：</p><h1 id="错误处理-1" tabindex="-1"><a class="header-anchor" href="#错误处理-1" aria-hidden="true">#</a> 错误处理</h1><ul><li><a href="#introduction">介绍</a></li><li><a href="#configuration">配置</a></li><li><a href="#the-exception-handler">异常处理</a><ul><li><a href="#reporting-exceptions">异常报告</a></li><li><a href="#exception-log-levels">异常日志级别</a></li><li><a href="#ignoring-exceptions-by-type">忽略指定类型异常</a></li><li><a href="#rendering-exceptions">渲染异常</a></li><li><a href="#renderable-exceptions">Reportable &amp; Renderable 异常</a></li></ul></li><li><a href="#http-exceptions">HTTP 异常</a><ul><li><a href="#custom-http-error-pages">自定义 HTTP 错误页面</a></li></ul></li></ul><p><a name="introduction"></a></p><h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h2><p>当你开始一个新的 Laravel 项目时，它已经为你配置了错误和异常处理。<code>App\\Exceptions\\Handler</code>类用于记录应用程序触发的所有异常，然后将其呈现回用户。我们将在本文中深入讨论这个类。</p><p><a name="configuration"></a></p><h2 id="配置-1" tabindex="-1"><a class="header-anchor" href="#配置-1" aria-hidden="true">#</a> 配置</h2><p>你的<code>config/app.php</code>配置文件中的<code>debug</code>选项决定了对于一个错误实际上将显示多少信息给用户。默认情况下，该选项的设置将遵照存储在<code>.env</code>文件中的<code>APP_DEBUG</code>环境变量的值。</p><p>对于本地开发，你应该将<code>APP_DEBUG</code>环境变量的值设置为<code>true</code>。 <strong>在生产环境中，该值应始终为<code>false</code>。如果在生产中将该值设置为<code>true</code>，则可能会将敏感配置值暴露给应用程序的终端用户。</strong></p><p><a name="the-exception-handler"></a></p><h2 id="异常处理" tabindex="-1"><a class="header-anchor" href="#异常处理" aria-hidden="true">#</a> 异常处理</h2><p><a name="reporting-exceptions"></a></p><h3 id="异常报告" tabindex="-1"><a class="header-anchor" href="#异常报告" aria-hidden="true">#</a> 异常报告</h3>',28),l=n("code",null,"App\\Exceptions\\Handler",-1),h=n("code",null,"register",-1),u={href:"https://flareapp.io",target:"_blank",rel:"noopener noreferrer"},g={href:"https://bugsnag.com",target:"_blank",rel:"noopener noreferrer"},x={href:"https://github.com/getsentry/sentry-laravel",target:"_blank",rel:"noopener noreferrer"},f=n("a",{href:"./logging"},"日志",-1),b=o(`<p>例如，如果您需要以不同的方式报告不同类型的异常，您可以使用 <code>reportable</code> 方法注册一个闭包，当需要报告给定的异常的时候便会执行它。 Laravel 将通过检查闭包的类型提示来判断闭包报告的异常类型：</p><pre><code>use App\\Exceptions\\InvalidOrderException;

/**
 * 为应用程序注册异常处理回调
 */
public function register(): void
{
    $this-&gt;reportable(function (InvalidOrderException $e) {
        // ...
    });
}
</code></pre><p>当您使用 <code>reportable</code> 方法注册一个自定义异常报告回调时， Laravel 依然会使用默认的日志配置记录下应用异常。 如果您想要在默认的日志堆栈中停止这个行为，您可以在定义报告回调时使用 stop 方法或者从回调函数中返回 <code>false</code>：</p><pre><code>$this-&gt;reportable(function (InvalidOrderException $e) {
    // ...
})-&gt;stop();

$this-&gt;reportable(function (InvalidOrderException $e) {
    return false;
});
</code></pre><blockquote><p><strong>技巧</strong><br> 要为给定的异常自定义异常报告，您可以使用 <a href="./errors#renderable-exceptions">可报告异常</a>.</p></blockquote><p><a name="global-log-context"></a></p><h4 id="全局日志上下文" tabindex="-1"><a class="header-anchor" href="#全局日志上下文" aria-hidden="true">#</a> 全局日志上下文</h4><p>在可用的情况下， Laravel 会自动将当前用户的编号作为数据添加到每一条异常日志信息中。您可以通过重写 <code>App\\Exceptions\\Handler</code> 类中的 <code>context</code> 方法来定义您自己的全局上下文数据（环境变量）。此后，每一条异常日志信息都将包含这个信息：</p><pre><code>/**
 * 获取默认日志的上下文变量。
 *
 * @return array&lt;string, mixed&gt;
 */
protected function context(): array
{
    return array_merge(parent::context(), [
        &#39;foo&#39; =&gt; &#39;bar&#39;,
    ]);
}
</code></pre><p><a name="exception-log-context"></a></p><h4 id="异常日志上下文" tabindex="-1"><a class="header-anchor" href="#异常日志上下文" aria-hidden="true">#</a> 异常日志上下文</h4><p>尽管将上下文添加到每个日志消息中可能很有用，但有时特定的异常可能具有您想要包含在日志中的唯一上下文。通过在应用程序的自定义异常中定义<code>context</code>方法，您可以指定与该异常相关的任何数据，应将其添加到异常的日志条目中：</p><pre><code>&lt;?php

namespace App\\Exceptions;

use Exception;

class InvalidOrderException extends Exception
{
    // ...

    /**
     * 获取异常上下文信息
     *
     * @return array&lt;string, mixed&gt;
     */
    public function context(): array
    {
        return [&#39;order_id&#39; =&gt; $this-&gt;orderId];
    }
}
</code></pre><p><a name="the-report-helper"></a></p><h4 id="report-助手" tabindex="-1"><a class="header-anchor" href="#report-助手" aria-hidden="true">#</a> <code>report</code> 助手</h4><p>有时，您可能需要报告异常，但继续处理当前请求。<code>report</code>助手函数允许您通过异常处理程序快速报告异常，而无需向用户呈现错误页面：</p><pre><code>public function isValid(string $value): bool
{
    try {
        // Validate the value...
    } catch (Throwable $e) {
        report($e);

        return false;
    }
}
</code></pre><p><a name="exception-log-levels"></a></p><h3 id="异常日志级别" tabindex="-1"><a class="header-anchor" href="#异常日志级别" aria-hidden="true">#</a> 异常日志级别</h3><p>当消息被写入应用程序的<a href="./logging">日志</a>时，消息将以指定的<a href="./logging#log-levels">日志级别</a>写入，该级别指示正在记录的消息的严重性或重要性。</p><p>如上所述，即使使用<code>reportable</code>方法注册自定义异常报告回调，Laravel仍将使用应用程序的默认日志记录配置记录异常；但是，由于日志级别有时会影响消息记录的通道，因此您可能希望配置某些异常记录的日志级别。</p><p>为了实现这个目标，您可以在应用程序的异常处理程序的<code>$levels</code>属性中定义一个异常类型数组以及它们关联的日志级别：</p><pre><code>use PDOException;
use Psr\\Log\\LogLevel;

/**
 * 包含其对应自定义日志级别的异常类型列表。
 *
 * @var array&lt;class-string&lt;\\Throwable&gt;, \\Psr\\Log\\LogLevel::*&gt;
 */
protected $levels = [
    PDOException::class =&gt; LogLevel::CRITICAL,
];
</code></pre><p><a name="ignoring-exceptions-by-type"></a></p><h3 id="按类型忽略异常" tabindex="-1"><a class="header-anchor" href="#按类型忽略异常" aria-hidden="true">#</a> 按类型忽略异常</h3><p>在构建应用程序时，您可能希望忽略某些类型的异常并永远不报告它们。应用程序的异常处理程序包含一个 <code>$dontReport</code> 属性，该属性初始化为空数组。您添加到此属性的任何类都将不会被报告；但是它们仍然可能具有自定义渲染逻辑：</p><pre><code>use App\\Exceptions\\InvalidOrderException;

/**
 * 不会被报告的异常类型列表。
 *
 * @var array&lt;int, class-string&lt;\\Throwable&gt;&gt;
 */
protected $dontReport = [
    InvalidOrderException::class,
];
</code></pre><p>在内部，Laravel已经为您忽略了一些类型的错误，例如由404 HTTP错误或由无效CSRF令牌生成的419 HTTP响应引起的异常。如果您想指示Laravel停止忽略给定类型的异常，您可以在异常处理程序的<code>register</code>方法中调用<code>stopIgnoring</code>方法：</p><pre><code>use Symfony\\Component\\HttpKernel\\Exception\\HttpException;

/**
 * 为应用程序注册异常处理回调函数。
 */
public function register(): void
{
    $this-&gt;stopIgnoring(HttpException::class);

    // ...
}
</code></pre><p><a name="rendering-exceptions"></a></p><h3 id="渲染异常" tabindex="-1"><a class="header-anchor" href="#渲染异常" aria-hidden="true">#</a> 渲染异常</h3><p>默认情况下，Laravel 异常处理程序会将异常转换为 HTTP 响应。但是，您可以自由地为给定类型的异常注册自定义渲染闭包。您可以通过在异常处理程序中调用<code>renderable</code>方法来实现这一点。</p><p>传递给 <code>renderable</code> 方法的闭包应该返回一个 <code>Illuminate\\Http\\Response</code> 实例，该实例可以通过 <code>response</code> 助手生成。 Laravel 将通过检查闭包的类型提示来推断闭包呈现的异常类型：</p><pre><code>use App\\Exceptions\\InvalidOrderException;
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
</code></pre><p>您还可以使用 <code>renderable</code> 方法来覆盖内置的Laravel或Symfony异常的呈现行为，例如 <code>NotFoundHttpException</code>。如果传递给 <code>renderable</code> 方法的闭包没有返回值，则将使用Laravel的默认异常呈现：</p><pre><code>use Illuminate\\Http\\Request;
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
</code></pre><p><a name="renderable-exceptions"></a></p><h3 id="reportable-renderable-异常" tabindex="-1"><a class="header-anchor" href="#reportable-renderable-异常" aria-hidden="true">#</a> Reportable &amp; Renderable 异常</h3><p>您可以直接在自定义异常类中定义 <code>report</code> 和 <code>render</code> 方法，而不是在异常处理程序的 <code>register</code> 方法中定义自定义报告和呈现行为。当存在这些方法时，框架将自动调用它们：</p><pre><code>&lt;?php

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
</code></pre><p>如果您的异常扩展了已经可呈现的异常，例如内置的Laravel或Symfony异常，则可以从异常的 <code>render</code> 方法中返回<code>false</code>，以呈现异常的默认HTTP响应：</p><pre><code>/**
 * Render the exception into an HTTP response.
 */
public function render(Request $request): Response|bool
{
    if (/** Determine if the exception needs custom rendering */) {

        return response(/* ... */);
    }

    return false;
}
</code></pre><p>如果你的异常包含了只在特定条件下才需要使用的自定义报告逻辑，那么你可能需要指示 Laravel 有时使用默认的异常处理配置来报告异常。为了实现这一点，你可以从异常的 <code>report</code> 方法中返回 <code>false</code>：</p><pre><code>/**
 * Report the exception.
 */
public function report(): bool
{
    if (/** 确定异常是否需要自定义报告 */) {

        // ...

        return true;
    }

    return false;
}
</code></pre><blockquote><p><strong>注意</strong> 你可以在 <code>report</code> 方法中类型提示任何所需的依赖项，它们将自动被 Laravel 的<a href="./container">服务容器</a>注入该方法中。</p></blockquote><p><a name="http-exceptions"></a></p><h2 id="http-异常" tabindex="-1"><a class="header-anchor" href="#http-异常" aria-hidden="true">#</a> HTTP 异常</h2><p>有些异常描述了服务器返回的 HTTP 错误代码。例如，这可能是一个 &quot;页面未找到&quot; 错误（404），一个 &quot;未经授权错误&quot;（401）或甚至是一个由开发者生成的 500 错误。为了从应用程序的任何地方生成这样的响应，你可以使用 <code>abort</code> 帮助函数：</p><pre><code>abort(404);
</code></pre><p><a name="custom-http-error-pages"></a></p><h3 id="自定义-http-错误页面" tabindex="-1"><a class="header-anchor" href="#自定义-http-错误页面" aria-hidden="true">#</a> 自定义 HTTP 错误页面</h3><p>Laravel 使得为各种 HTTP 状态码显示自定义错误页面变得很容易。例如，如果你想自定义 404 HTTP 状态码的错误页面，请创建一个 <code>resources/views/errors/404.blade.php</code> 视图模板。这个视图将会被渲染在应用程序生成的所有 404 错误上。这个目录中的视图应该被命名为它们对应的 HTTP 状态码。<code>abort</code> 函数引发的 <code>Symfony\\Component\\HttpKernel\\Exception\\HttpException</code> 实例将会以 <code>$exception</code> 变量的形式传递给视图：</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token operator">&lt;</span>h2<span class="token operator">&gt;</span><span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token variable">$exception</span><span class="token operator">-&gt;</span><span class="token function">getMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>你可以使用 <code>vendor:publish</code> Artisan 命令发布 Laravel 的默认错误页面模板。一旦模板被发布，你可以根据自己的喜好进行自定义：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan vendor:publish <span class="token parameter variable">--tag</span><span class="token operator">=</span>laravel-errors
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a name="fallback-http-error-pages"></a></p><h4 id="回退-http-错误页面" tabindex="-1"><a class="header-anchor" href="#回退-http-错误页面" aria-hidden="true">#</a> 回退 HTTP 错误页面</h4><p>你也可以为给定系列的 HTTP 状态码定义一个“回退”错误页面。如果没有针对发生的具体 HTTP 状态码相应的页面，就会呈现此页面。为了实现这一点，在你应用程序的 <code>resources/views/errors</code> 目录中定义一个 <code>4xx.blade.php</code> 模板和一个 <code>5xx.blade.php</code> 模板。</p>`,58);function v(m,T){const a=p("ExternalLinkIcon");return i(),c("div",null,[s,n("p",null,[e("所有异常都是由"),l,e("类处理。此类包含一个"),h,e("方法，可以在其中注册自定义异常报告程序和渲染器回调。我们将详细研究每个概念。异常报告用于记录异常或将其发送到如 "),n("a",u,[e("Flare"),r(a)]),e("、 "),n("a",g,[e("Bugsnag"),r(a)]),e(" 或 "),n("a",x,[e("Sentry"),r(a)]),e(" 等外部服务。默认情况下，将根据你的"),f,e("配置来记录异常。不过，你可以用任何自己喜欢的方式来记录异常。")]),b])}const H=t(d,[["render",v],["__file","errors.html.vue"]]);export{H as default};
