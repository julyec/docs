import{_ as r}from"./plugin-vue_export-helper-c27b6911.js";import{r as d,o as c,c as l,b as o,d as e,e as t,a}from"./app-06635a3b.js";const s={},i=a('<h1 id="日志" tabindex="-1"><a class="header-anchor" href="#日志" aria-hidden="true">#</a> 日志</h1><ul><li><a href="#introduction">介绍</a></li><li><a href="#configuration">配置</a><ul><li><a href="#available-channel-driver">可用通道驱动</a></li><li><a href="#available-channel-driver">通道先决条件</a></li><li><a href="#logging-deprecation-warnings">记录弃用警告</a></li></ul></li><li><a href="#building-log-stacks">构建日志堆栈</a></li><li><a href="#writing-log-messages">写日志消息</a><ul><li><a href="#contextual-information">上下文信息</a></li><li><a href="#writing-to-specific-channels">写入到指定通道</a></li></ul></li><li><a href="#monolog-channel-customization">Monolog 通道自定义</a><ul><li><a href="#customizing-monolog-for-channels">为通道自定义 Monolog</a></li><li><a href="#creating-monolog-handler-channels">创建 Monolog 处理器通道</a></li><li><a href="#creating-custom-channels-via-factories">创建 Monolog 处理器通道</a></li></ul></li></ul><p><a name="introduction"></a></p><h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h2><p>为了帮助您更多地了解应用程序中发生的事情，Laravel 提供了强大的日志记录服务，允许您将日志记录到文件、系统错误日志，甚至记录到 Slack 以通知您的整个团队。</p><p>Laravel 日志基于「 通道 」。 每个通道代表一种写入日志信息的特定方式。 例如，<code>single</code> 通道是将日志写入到单个日志文件中。而 <code>slack</code> 通道是将日志发送到 Slack 上。 基于它们的重要程度，日志可以被写入到多个通道中去。</p>',6),g={href:"https://github.com/Seldaek/monolog",target:"_blank",rel:"noopener noreferrer"},h=o("a",{name:"configuration"},null,-1),p=o("h2",{id:"配置",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#配置","aria-hidden":"true"},"#"),e(" 配置")],-1),u=o("p",null,[e("所有应用程序的日志行为配置选项都位于 "),o("code",null,"config/logging.php"),e(" 配置文件中。 该文件允许您配置应用程序的日志通道，因此请务必查看每个可用通道及其选项。 我们将在下面回顾一些常见的选项。")],-1),m=o("code",null,"stack",-1),_=o("code",null,"stack",-1),f={href:"https://chat.openai.com/chat#building-log-stacks",target:"_blank",rel:"noopener noreferrer"},b=a(`<p><a name="configuring-the-channel-name"></a></p><h4 id="配置频道名称" tabindex="-1"><a class="header-anchor" href="#配置频道名称" aria-hidden="true">#</a> 配置频道名称</h4><p>默认情况下，Monolog 使用与当前环境相匹配的“频道名称”（例如 <code>production</code> 或 <code>local</code>）进行实例化。要更改此值，请向频道的配置中添加一个 <code>name</code> 选项：</p><pre><code>&#39;stack&#39; =&gt; [
    &#39;driver&#39; =&gt; &#39;stack&#39;,
    &#39;name&#39; =&gt; &#39;channel-name&#39;,
    &#39;channels&#39; =&gt; [&#39;single&#39;, &#39;slack&#39;],
],
</code></pre><p><a name="available-channel-drivers"></a></p><h3 id="可用频道驱动程序" tabindex="-1"><a class="header-anchor" href="#可用频道驱动程序" aria-hidden="true">#</a> 可用频道驱动程序</h3><p>每个日志频道都由一个“驱动程序”驱动。驱动程序确定实际记录日志消息的方式和位置。以下日志频道驱动程序在每个 Laravel 应用程序中都可用。大多数这些驱动程序的条目已经在应用程序的 <code>config/logging.php</code> 配置文件中存在，因此请务必查看此文件以熟悉其内容：</p><table><thead><tr><th>名称</th><th>描述</th></tr></thead><tbody><tr><td><code>custom</code></td><td>调用指定工厂创建频道的驱动程序</td></tr><tr><td><code>daily</code></td><td>基于 <code>RotatingFileHandler</code> 的 Monolog 驱动程序，每天轮换一次日志文件</td></tr><tr><td><code>errorlog</code></td><td>基于 <code>ErrorLogHandler</code> 的 Monolog 驱动程序</td></tr><tr><td><code>monolog</code></td><td>可使用任何支持的 Monolog 处理程序的 Monolog 工厂驱动程序</td></tr><tr><td><code>null</code></td><td>丢弃所有日志消息的驱动程序</td></tr><tr><td><code>papertrail</code></td><td>基于 <code>SyslogUdpHandler</code> 的 Monolog 驱动程序</td></tr><tr><td><code>single</code></td><td>单个文件或路径为基础的记录器频道（<code>StreamHandler</code>）</td></tr><tr><td><code>slack</code></td><td>基于 <code>SlackWebhookHandler</code> 的 Monolog 驱动程序</td></tr><tr><td><code>stack</code></td><td>包装器，用于方便地创建“多通道”频道</td></tr><tr><td><code>syslog</code></td><td>基于 <code>SyslogHandler</code> 的 Monolog 驱动程序</td></tr></tbody></table>`,8),L=o("strong",null,"注意",-1),k={href:"/chat#monolog-channel-customization",target:"_blank",rel:"noopener noreferrer"},v=o("code",null,"monolog",-1),M=o("code",null,"custom",-1),x=a('<h3 id="频道前提条件" tabindex="-1"><a class="header-anchor" href="#频道前提条件" aria-hidden="true">#</a> 频道前提条件</h3><h4 id="配置单一和日志频道" tabindex="-1"><a class="header-anchor" href="#配置单一和日志频道" aria-hidden="true">#</a> 配置单一和日志频道</h4><p>在处理消息时，<code>single</code>和 <code>daily</code> 频道有三个可选配置选项：<code>bubble</code>，<code>permission</code> 和<code>locking</code>。</p><table><thead><tr><th>名称</th><th>描述</th><th>默认值</th></tr></thead><tbody><tr><td><code>bubble</code></td><td>表示是否在处理后将消息传递到其他频道</td><td><code>true</code></td></tr><tr><td><code>locking</code></td><td>在写入日志文件之前尝试锁定日志文件</td><td><code>false</code></td></tr><tr><td><code>permission</code></td><td>日志文件的权限</td><td><code>0644</code></td></tr></tbody></table><p>另外，可以通过 <code>days</code> 选项配置 <code>daily</code> 频道的保留策略：</p><table><thead><tr><th>名称</th><th>描述</th><th>默认值</th></tr></thead><tbody><tr><td><code>days</code></td><td>保留每日日志文件的天数</td><td><code>7</code></td></tr></tbody></table><h4 id="配置-papertrail-频道" tabindex="-1"><a class="header-anchor" href="#配置-papertrail-频道" aria-hidden="true">#</a> 配置 Papertrail 频道</h4>',7),S=o("code",null,"papertrail",-1),y=o("code",null,"host",-1),w=o("code",null,"port",-1),C={href:"https://help.papertrailapp.com/kb/configuration/configuring-centralized-logging-from-php-apps/#send-events-from-php-app",target:"_blank",rel:"noopener noreferrer"},H=o("h4",{id:"配置slack频道",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#配置slack频道","aria-hidden":"true"},"#"),e(" 配置Slack频道")],-1),F=o("code",null,"slack",-1),$=o("code",null,"url",-1),I={href:"https://slack.com/apps/A0F7XDUAZ-incoming-webhooks",target:"_blank",rel:"noopener noreferrer"},q=a(`<p>默认情况下，Slack仅会接收 <code>critical</code> 级别及以上的日志；但是，您可以通过修改 <code>config/logging.php</code> 配置文件中您的Slack日志频道配置数组中的 <code>level</code> 配置选项来调整此设置。</p><h3 id="记录弃用警告" tabindex="-1"><a class="header-anchor" href="#记录弃用警告" aria-hidden="true">#</a> 记录弃用警告</h3><p>PHP、Laravel和其他库通常会通知其用户，一些功能已被弃用，将在未来版本中删除。如果您想记录这些弃用警告，可以在应用程序的 <code>config/logging.php</code> 配置文件中指定您首选的 <code>deprecations</code> 日志频道：</p><pre><code>&#39;deprecations&#39; =&gt; env(&#39;LOG_DEPRECATIONS_CHANNEL&#39;, &#39;null&#39;),

&#39;channels&#39; =&gt; [
    ...
]
</code></pre><p>或者，您可以定义一个名为 <code>deprecations</code> 的日志通道。如果存在此名称的日志通道，则始终将其用于记录弃用：</p><pre><code>&#39;channels&#39; =&gt; [
    &#39;deprecations&#39; =&gt; [
        &#39;driver&#39; =&gt; &#39;single&#39;,
        &#39;path&#39; =&gt; storage_path(&#39;logs/php-deprecation-warnings.log&#39;),
    ],
],
</code></pre><p><a name="building-log-stacks"></a></p><h2 id="构建日志堆栈" tabindex="-1"><a class="header-anchor" href="#构建日志堆栈" aria-hidden="true">#</a> 构建日志堆栈</h2><p>如前所述，<code>stack</code> 驱动程序允许您将多个通道组合成一个方便的日志通道。为了说明如何使用日志堆栈，让我们看一个您可能在生产应用程序中看到的示例配置：</p><pre><code>&#39;channels&#39; =&gt; [
    &#39;stack&#39; =&gt; [
        &#39;driver&#39; =&gt; &#39;stack&#39;,
        &#39;channels&#39; =&gt; [&#39;syslog&#39;, &#39;slack&#39;],
    ],

    &#39;syslog&#39; =&gt; [
        &#39;driver&#39; =&gt; &#39;syslog&#39;,
        &#39;level&#39; =&gt; &#39;debug&#39;,
    ],

    &#39;slack&#39; =&gt; [
        &#39;driver&#39; =&gt; &#39;slack&#39;,
        &#39;url&#39; =&gt; env(&#39;LOG_SLACK_WEBHOOK_URL&#39;),
        &#39;username&#39; =&gt; &#39;Laravel Log&#39;,
        &#39;emoji&#39; =&gt; &#39;:boom:&#39;,
        &#39;level&#39; =&gt; &#39;critical&#39;,
    ],
],
</code></pre><p>让我们分解一下这个配置。首先，请注意我们的 <code>stack</code> 通道通过其 <code>channels</code> 选项聚合了两个其他通道：<code>syslog</code> 和 <code>slack</code>。因此，在记录消息时，这两个通道都有机会记录消息。但是，正如我们将在下面看到的那样，这些通道是否实际记录消息可能取决于消息的严重程度/&quot;级别&quot;。</p><p><a name="log-levels"></a></p><h4 id="日志级别" tabindex="-1"><a class="header-anchor" href="#日志级别" aria-hidden="true">#</a> 日志级别</h4>`,13),A=o("code",null,"syslog",-1),R=o("code",null,"slack",-1),P=o("code",null,"level",-1),U={href:"https://tools.ietf.org/html/rfc5424",target:"_blank",rel:"noopener noreferrer"},z=o("strong",null,"emergency",-1),E=o("strong",null,"alert",-1),N=o("strong",null,"critical",-1),V=o("strong",null,"error",-1),O=o("strong",null,"warning",-1),B=o("strong",null,"notice",-1),D=o("strong",null,"info",-1),T=o("strong",null,"debug",-1),W=a(`<p>在我们的配置中，如果我们使用 <code>debug</code> 方法记录消息：</p><pre><code>Log::debug(&#39;An informational message.&#39;);
</code></pre><p>根据我们的配置，<code>syslog</code> 渠道将把消息写入系统日志；但由于错误消息不是 <code>critical</code> 或以上级别，它不会被发送到 Slack。然而，如果我们记录一个 <code>emergency</code> 级别的消息，则会发送到系统日志和 Slack，因为 <code>emergency</code> 级别高于我们两个渠道的最小级别阈值：</p><pre><code>Log::emergency(&#39;The system is down!&#39;);
</code></pre><p><a name="writing-log-messages"></a></p><h2 id="写入日志消息" tabindex="-1"><a class="header-anchor" href="#写入日志消息" aria-hidden="true">#</a> 写入日志消息</h2>`,6),G=o("code",null,"Log",-1),K=o("a",{href:"./facades"},"facade",-1),j={href:"https://tools.ietf.org/html/rfc5424",target:"_blank",rel:"noopener noreferrer"},X=o("strong",null,"emergency",-1),Y=o("strong",null,"alert",-1),Z=o("strong",null,"critical",-1),J=o("strong",null,"error",-1),Q=o("strong",null,"warning",-1),ee=o("strong",null,"notice",-1),oe=o("strong",null,"info",-1),ne=o("strong",null,"debug",-1),te=a(`<pre><code>use Illuminate\\Support\\Facades\\Log;

Log::emergency($message);
Log::alert($message);
Log::critical($message);
Log::error($message);
Log::warning($message);
Log::notice($message);
Log::info($message);
Log::debug($message);
</code></pre><p>您可以调用其中任何一个方法来记录相应级别的消息。默认情况下，该消息将根据您的 <code>logging</code> 配置文件配置的默认日志渠道进行写入：</p><pre><code>&lt;?php

namespace App\\Http\\Controllers;

use App\\Http\\Controllers\\Controller;
use App\\Models\\User;
use Illuminate\\Support\\Facades\\Log;
use Illuminate\\View\\View;

class UserController extends Controller
{
    /**
     * Show the profile for the given user.
     */
    public function show(string $id): View
    {
        Log::info(&#39;Showing the user profile for user: &#39;.$id);

        return view(&#39;user.profile&#39;, [
            &#39;user&#39; =&gt; User::findOrFail($id)
        ]);
    }
}
</code></pre><p><a name="contextual-information"></a></p><h3 id="上下文信息" tabindex="-1"><a class="header-anchor" href="#上下文信息" aria-hidden="true">#</a> 上下文信息</h3><p>可以向日志方法传递一组上下文数据。这些上下文数据将与日志消息一起格式化和显示：</p><pre><code>use Illuminate\\Support\\Facades\\Log;

Log::info(&#39;User failed to login.&#39;, [&#39;id&#39; =&gt; $user-&gt;id]);
</code></pre><p>偶尔，您可能希望指定一些上下文信息，这些信息应包含在特定频道中所有随后的日志条目中。例如，您可能希望记录与应用程序的每个传入请求相关联的请求ID。为了实现这一目的，您可以调用 <code>Log</code> 门面的 <code>withContext</code> 方法：</p><pre><code>&lt;?php

namespace App\\Http\\Middleware;

use Closure;
use Illuminate\\Http\\Request;
use Illuminate\\Support\\Facades\\Log;
use Illuminate\\Support\\Str;
use Symfony\\Component\\HttpFoundation\\Response;

class AssignRequestId
{
    /**
     * Handle an incoming request.
     *
     * @param  \\Closure(\\Illuminate\\Http\\Request): (\\Symfony\\Component\\HttpFoundation\\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $requestId = (string) Str::uuid();

        Log::withContext([
            &#39;request-id&#39; =&gt; $requestId
        ]);

        return $next($request)-&gt;header(&#39;Request-Id&#39;, $requestId);
    }
}
</code></pre><p>如果要在_所有_日志频道之间共享上下文信息，则可以调用 <code>Log::shareContext()</code> 方法。此方法将向所有已创建的频道提供上下文信息，以及随后创建的任何频道。通常，<code>shareContext</code> 方法应从应用程序服务提供程序的 <code>boot</code> 方法中调用：</p><pre><code>use Illuminate\\Support\\Facades\\Log;
use Illuminate\\Support\\Str;

class AppServiceProvider
{
    /**
     * 启动任何应用程序服务。
     */
    public function boot(): void
    {
        Log::shareContext([
            &#39;invocation-id&#39; =&gt; (string) Str::uuid(),
        ]);
    }
}
</code></pre><p><a name="writing-to-specific-channels"></a></p><h3 id="写入特定频道" tabindex="-1"><a class="header-anchor" href="#写入特定频道" aria-hidden="true">#</a> 写入特定频道</h3><p>有时，您可能希望将消息记录到应用程序默认频道以外的频道。您可以使用 <code>Log</code> 门面上的 <code>channel</code> 方法来检索并记录配置文件中定义的任何频道：</p><pre><code>use Illuminate\\Support\\Facades\\Log;

Log::channel(&#39;slack&#39;)-&gt;info(&#39;Something happened!&#39;);
</code></pre><p>如果你想创建一个由多个通道组成的按需记录堆栈，可以使用 <code>stack</code> 方法：</p><pre><code>Log::stack([&#39;single&#39;, &#39;slack&#39;])-&gt;info(&#39;Something happened!&#39;);
</code></pre><p><a name="on-demand-channels"></a></p><h4 id="按需通道" tabindex="-1"><a class="header-anchor" href="#按需通道" aria-hidden="true">#</a> 按需通道</h4><p>还可以创建一个按需通道，方法是在运行时提供配置而无需将该配置包含在应用程序的 <code>logging</code> 配置文件中。为此，可以将配置数组传递给 <code>Log</code> 门面的 <code>build</code> 方法：</p><pre><code>use Illuminate\\Support\\Facades\\Log;

Log::build([
  &#39;driver&#39; =&gt; &#39;single&#39;,
  &#39;path&#39; =&gt; storage_path(&#39;logs/custom.log&#39;),
])-&gt;info(&#39;Something happened!&#39;);
</code></pre><p>您可能还希望在按需记录堆栈中包含一个按需通道。可以通过将按需通道实例包含在传递给 <code>stack</code> 方法的数组中来实现：</p><pre><code>use Illuminate\\Support\\Facades\\Log;

$channel = Log::build([
  &#39;driver&#39; =&gt; &#39;single&#39;,
  &#39;path&#39; =&gt; storage_path(&#39;logs/custom.log&#39;),
]);

Log::stack([&#39;slack&#39;, $channel])-&gt;info(&#39;Something happened!&#39;);
</code></pre><p><a name="monolog-channel-customization"></a></p><h2 id="monolog-通道定制" tabindex="-1"><a class="header-anchor" href="#monolog-通道定制" aria-hidden="true">#</a> Monolog 通道定制</h2><p><a name="customizing-monolog-for-channels"></a></p><h3 id="为通道定制-monolog" tabindex="-1"><a class="header-anchor" href="#为通道定制-monolog" aria-hidden="true">#</a> 为通道定制 Monolog</h3><p>有时，您可能需要完全控制 Monolog 如何配置现有通道。例如，您可能希望为 Laravel 内置的 <code>single</code> 通道配置自定义的 Monolog <code>FormatterInterface</code> 实现。</p><p>要开始，请在通道配置中定义 <code>tap</code> 数组。<code>tap</code> 数组应包含一系列类，这些类在创建 Monolog 实例后应有机会自定义（或“tap”）它。没有这些类应放置在何处的惯例位置，因此您可以在应用程序中创建一个目录以包含这些类：</p><pre><code>&#39;single&#39; =&gt; [
    &#39;driver&#39; =&gt; &#39;single&#39;,
    &#39;tap&#39; =&gt; [App\\Logging\\CustomizeFormatter::class],
    &#39;path&#39; =&gt; storage_path(&#39;logs/laravel.log&#39;),
    &#39;level&#39; =&gt; &#39;debug&#39;,
],
</code></pre><p>一旦你在通道上配置了 <code>tap</code> 选项，你就可以定义一个类来自定义你的 Monolog 实例。这个类只需要一个方法：<code>__invoke</code>，它接收一个 <code>Illuminate\\Log\\Logger</code> 实例。<code>Illuminate\\Log\\Logger</code> 实例代理所有方法调用到底层的 Monolog 实例：</p><pre><code>&lt;?php

namespace App\\Logging;

use Illuminate\\Log\\Logger;
use Monolog\\Formatter\\LineFormatter;

class CustomizeFormatter
{
    /**
     * 自定义给定的日志记录器实例。
     */
    public function __invoke(Logger $logger): void
    {
        foreach ($logger-&gt;getHandlers() as $handler) {
            $handler-&gt;setFormatter(new LineFormatter(
                &#39;[%datetime%] %channel%.%level_name%: %message% %context% %extra%&#39;
            ));
        }
    }
}
</code></pre><blockquote><p><strong>注意</strong> 所有的 “tap” 类都由 <a href="./container">服务容器</a> 解析，因此它们所需的任何构造函数依赖关系都将自动注入。</p></blockquote><p><a name="creating-monolog-handler-channels"></a></p><h3 id="创建-monolog-处理程序通道" tabindex="-1"><a class="header-anchor" href="#创建-monolog-处理程序通道" aria-hidden="true">#</a> 创建 Monolog 处理程序通道</h3>`,35),ae={href:"https://github.com/Seldaek/monolog/tree/main/src/Monolog/Handler",target:"_blank",rel:"noopener noreferrer"},re=o("code",null,"monolog",-1),de=a(`<p>使用 <code>monolog</code> 驱动程序时，<code>handler</code> 配置选项用于指定将实例化哪个处理程序。可选地，可以使用 <code>with</code> 配置选项指定处理程序需要的任何构造函数参数：</p><pre><code>&#39;logentries&#39; =&gt; [
    &#39;driver&#39;  =&gt; &#39;monolog&#39;,
    &#39;handler&#39; =&gt; Monolog\\Handler\\SyslogUdpHandler::class,
    &#39;with&#39; =&gt; [
        &#39;host&#39; =&gt; &#39;my.logentries.internal.datahubhost.company.com&#39;,
        &#39;port&#39; =&gt; &#39;10000&#39;,
    ],
],
</code></pre><p><a name="monolog-formatters"></a></p><h4 id="monolog-格式化程序" tabindex="-1"><a class="header-anchor" href="#monolog-格式化程序" aria-hidden="true">#</a> Monolog 格式化程序</h4><p>使用 <code>monolog</code> 驱动程序时，Monolog <code>LineFormatter</code> 将用作默认格式化程序。但是，你可以使用 <code>formatter</code> 和 <code>formatter_with</code> 配置选项自定义传递给处理程序的格式化程序类型：</p><pre><code>&#39;browser&#39; =&gt; [
    &#39;driver&#39; =&gt; &#39;monolog&#39;,
    &#39;handler&#39; =&gt; Monolog\\Handler\\BrowserConsoleHandler::class,
    &#39;formatter&#39; =&gt; Monolog\\Formatter\\HtmlFormatter::class,
    &#39;formatter_with&#39; =&gt; [
        &#39;dateFormat&#39; =&gt; &#39;Y-m-d&#39;,
    ],
],
</code></pre><p>如果你使用的是能够提供自己的格式化程序的 Monolog 处理程序，你可以将 <code>formatter</code> 配置选项的值设置为 <code>default</code>：</p><pre><code>&#39;newrelic&#39; =&gt; [
    &#39;driver&#39; =&gt; &#39;monolog&#39;,
    &#39;handler&#39; =&gt; Monolog\\Handler\\NewRelicHandler::class,
    &#39;formatter&#39; =&gt; &#39;default&#39;,
],
</code></pre><p><a name="monolog-processors"></a></p><h4 id="monolog-处理器" tabindex="-1"><a class="header-anchor" href="#monolog-处理器" aria-hidden="true">#</a> Monolog 处理器</h4>`,10),ce={href:"https://github.com/Seldaek/monolog/tree/main/src/Monolog/Processor",target:"_blank",rel:"noopener noreferrer"},le=a(`<p>如果你想为 <code>monolog</code> 驱动定制处理器，请在通道的配置中加入<code>processors</code> 配置值。</p><pre><code> &#39;memory&#39; =&gt; [
     &#39;driver&#39; =&gt; &#39;monolog&#39;,
     &#39;handler&#39; =&gt; Monolog\\Handler\\StreamHandler::class,
     &#39;with&#39; =&gt; [
         &#39;stream&#39; =&gt; &#39;php://stderr&#39;,
     ],
     &#39;processors&#39; =&gt; [
         // Simple syntax...
         Monolog\\Processor\\MemoryUsageProcessor::class,

         // With options...
         [
            &#39;processor&#39; =&gt; Monolog\\Processor\\PsrLogMessageProcessor::class,
            &#39;with&#39; =&gt; [&#39;removeUsedContextFields&#39; =&gt; true],
        ],
     ],
 ],
</code></pre><p><a name="creating-custom-channels-via-factories"></a></p><h3 id="通过工厂创建通道" tabindex="-1"><a class="header-anchor" href="#通过工厂创建通道" aria-hidden="true">#</a> 通过工厂创建通道</h3><p>如果你想定义一个完全自定义的通道，你可以在其中完全控制 Monolog 的实例化和配置，你可以在 <code>config/logging.php</code> 配置文件中指定<code>custom</code> 驱动程序类型。你的配置应该包括一个 <code>via</code> 选项，其中包含将被调用以创建 Monolog 实例的工厂类的名称：</p><pre><code>&#39;channels&#39; =&gt; [
    &#39;example-custom-channel&#39; =&gt; [
        &#39;driver&#39; =&gt; &#39;custom&#39;,
        &#39;via&#39; =&gt; App\\Logging\\CreateCustomLogger::class,
    ],
],
</code></pre><p>一旦你配置了 <code>custom</code> 驱动程序通道，你就可以定义将创建你的 Monolog 实例的类。这个类只需要一个 __invoke 方法，它应该返回 Monolog 记录器实例。 该方法将接收通道配置数组作为其唯一参数：</p><pre><code>&lt;?php

namespace App\\Logging;

use Monolog\\Logger;

class CreateCustomLogger
{
    /**
     * 创建一个自定义 Monolog 实例。
     */
    public function __invoke(array $config): Logger
    {
        return new Logger(/* ... */);
    }
}
</code></pre>`,8);function se(ie,ge){const n=d("ExternalLinkIcon");return c(),l("div",null,[i,o("p",null,[e("在底层，Laravel 利用 "),o("a",g,[e("Monolog"),t(n)]),e(" 库，它为各种强大的日志处理程序提供了支持。 Laravel 使配置这些处理程序变得轻而易举，允许您混合和匹配它们，以自定义应用程序的方式完成日志处理。 "),h]),p,u,o("p",null,[e("默认情况下，Laravel 在记录日志消息时使用 "),m,e(" 频道。"),_,e(" 频道用于将多个日志频道聚合到一个频道中。有关构建堆栈的更多信息，请查看下面的"),o("a",f,[e("文档"),t(n)]),e("。")]),b,o("blockquote",null,[o("p",null,[L,e(" 查看 "),o("a",k,[e("高级频道自定义"),t(n)]),e(" 文档，了解有关 "),v,e(" 和 "),M,e(" 驱动程序的更多信息。")])]),x,o("p",null,[S,e(" 频道需要 "),y,e(" 和 "),w,e(" 配置选项。您可以从"),o("a",C,[e("Papertrail"),t(n)]),e("获取这些值。")]),H,o("p",null,[F,e(" 频道需要一个 "),$,e(" 配置选项。此URL应该与您为Slack团队配置的"),o("a",I,[e("incoming webhook"),t(n)]),e("的URL匹配。")]),q,o("p",null,[e("请注意上面示例中 "),A,e(" 和 "),R,e(" 通道配置中存在的 "),P,e(" 配置选项。此选项确定必须记录消息的最小“级别”。Laravel的日志服务采用Monolog，提供"),o("a",U,[e("RFC 5424规范"),t(n)]),e("中定义的所有日志级别。按严重程度递减的顺序，这些日志级别是："),z,e("，"),E,e("，"),N,e("，"),V,e("，"),O,e("，"),B,e("，"),D,e("和"),T,e("。")]),W,o("p",null,[e("您可以使用 "),G,e(),K,e(" 向日志写入信息。正如之前提到的，日志记录器提供了 "),o("a",j,[e("RFC 5424 规范"),t(n)]),e(" 中定义的八个日志级别："),X,e("、"),Y,e("、"),Z,e("、"),J,e("、"),Q,e("、"),ee,e("、"),oe,e(" 和 "),ne,e("：")]),te,o("p",null,[e("Monolog 有多种 "),o("a",ae,[e("可用的处理程序"),t(n)]),e("，而 Laravel 并没有为每个处理程序内置通道。在某些情况下，你可能希望创建一个自定义通道，它仅是一个特定的 Monolog 处理程序实例，该处理程序没有相应的 Laravel 日志驱动程序。这些通道可以使用 "),re,e(" 驱动程序轻松创建。")]),de,o("p",null,[e("Monolog 也可以在记录消息之前对其进行处理。你可以创建你自己的处理器或使用 "),o("a",ce,[e("Monolog提供的现有处理器"),t(n)]),e("。")]),le])}const ue=r(s,[["render",se],["__file","logging.html.vue"]]);export{ue as default};
