import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{r,o as s,c as l,b as o,d as e,e as a,a as t}from"./app-06635a3b.js";const c="/laravel/images/pail-example.png",d={},h=t('<h1 id="logging" tabindex="-1"><a class="header-anchor" href="#logging" aria-hidden="true">#</a> Logging</h1><ul><li><a href="#introduction">Introduction</a></li><li><a href="#configuration">Configuration</a><ul><li><a href="#available-channel-drivers">Available Channel Drivers</a></li><li><a href="#channel-prerequisites">Channel Prerequisites</a></li><li><a href="#logging-deprecation-warnings">Logging Deprecation Warnings</a></li></ul></li><li><a href="#building-log-stacks">Building Log Stacks</a></li><li><a href="#writing-log-messages">Writing Log Messages</a><ul><li><a href="#contextual-information">Contextual Information</a></li><li><a href="#writing-to-specific-channels">Writing To Specific Channels</a></li></ul></li><li><a href="#monolog-channel-customization">Monolog Channel Customization</a><ul><li><a href="#customizing-monolog-for-channels">Customizing Monolog For Channels</a></li><li><a href="#creating-monolog-handler-channels">Creating Monolog Handler Channels</a></li><li><a href="#creating-custom-channels-via-factories">Creating Custom Channels Via Factories</a></li></ul></li><li><a href="#tailing-log-messages-using-pail">Tailing Log Messages Using Pail</a><ul><li><a href="#pail-installation">Installation</a></li><li><a href="#pail-usage">Usage</a></li><li><a href="#pail-filtering-logs">Filtering Logs</a></li></ul></li></ul><p><a name="introduction"></a></p><h2 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h2><p>To help you learn more about what&#39;s happening within your application, Laravel provides robust logging services that allow you to log messages to files, the system error log, and even to Slack to notify your entire team.</p><p>Laravel logging is based on &quot;channels&quot;. Each channel represents a specific way of writing log information. For example, the <code>single</code> channel writes log files to a single log file, while the <code>slack</code> channel sends log messages to Slack. Log messages may be written to multiple channels based on their severity.</p>',6),g={href:"https://github.com/Seldaek/monolog",target:"_blank",rel:"noopener noreferrer"},p=t(`<p><a name="configuration"></a></p><h2 id="configuration" tabindex="-1"><a class="header-anchor" href="#configuration" aria-hidden="true">#</a> Configuration</h2><p>All of the configuration options for your application&#39;s logging behavior are housed in the <code>config/logging.php</code> configuration file. This file allows you to configure your application&#39;s log channels, so be sure to review each of the available channels and their options. We&#39;ll review a few common options below.</p><p>By default, Laravel will use the <code>stack</code> channel when logging messages. The <code>stack</code> channel is used to aggregate multiple log channels into a single channel. For more information on building stacks, check out the <a href="#building-log-stacks">documentation below</a>.</p><p><a name="configuring-the-channel-name"></a></p><h4 id="configuring-the-channel-name" tabindex="-1"><a class="header-anchor" href="#configuring-the-channel-name" aria-hidden="true">#</a> Configuring The Channel Name</h4><p>By default, Monolog is instantiated with a &quot;channel name&quot; that matches the current environment, such as <code>production</code> or <code>local</code>. To change this value, add a <code>name</code> option to your channel&#39;s configuration:</p><pre><code>&#39;stack&#39; =&gt; [
    &#39;driver&#39; =&gt; &#39;stack&#39;,
    &#39;name&#39; =&gt; &#39;channel-name&#39;,
    &#39;channels&#39; =&gt; [&#39;single&#39;, &#39;slack&#39;],
],
</code></pre><p><a name="available-channel-drivers"></a></p><h3 id="available-channel-drivers" tabindex="-1"><a class="header-anchor" href="#available-channel-drivers" aria-hidden="true">#</a> Available Channel Drivers</h3><p>Each log channel is powered by a &quot;driver&quot;. The driver determines how and where the log message is actually recorded. The following log channel drivers are available in every Laravel application. An entry for most of these drivers is already present in your application&#39;s <code>config/logging.php</code> configuration file, so be sure to review this file to become familiar with its contents:</p><div class="overflow-auto"><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td><code>custom</code></td><td>A driver that calls a specified factory to create a channel</td></tr><tr><td><code>daily</code></td><td>A <code>RotatingFileHandler</code> based Monolog driver which rotates daily</td></tr><tr><td><code>errorlog</code></td><td>An <code>ErrorLogHandler</code> based Monolog driver</td></tr><tr><td><code>monolog</code></td><td>A Monolog factory driver that may use any supported Monolog handler</td></tr><tr><td><code>papertrail</code></td><td>A <code>SyslogUdpHandler</code> based Monolog driver</td></tr><tr><td><code>single</code></td><td>A single file or path based logger channel (<code>StreamHandler</code>)</td></tr><tr><td><code>slack</code></td><td>A <code>SlackWebhookHandler</code> based Monolog driver</td></tr><tr><td><code>stack</code></td><td>A wrapper to facilitate creating &quot;multi-channel&quot; channels</td></tr><tr><td><code>syslog</code></td><td>A <code>SyslogHandler</code> based Monolog driver</td></tr></tbody></table></div><blockquote><p><strong>Note</strong><br> Check out the documentation on <a href="#monolog-channel-customization">advanced channel customization</a> to learn more about the <code>monolog</code> and <code>custom</code> drivers.</p></blockquote><p><a name="channel-prerequisites"></a></p><h3 id="channel-prerequisites" tabindex="-1"><a class="header-anchor" href="#channel-prerequisites" aria-hidden="true">#</a> Channel Prerequisites</h3><p><a name="configuring-the-single-and-daily-channels"></a></p><h4 id="configuring-the-single-and-daily-channels" tabindex="-1"><a class="header-anchor" href="#configuring-the-single-and-daily-channels" aria-hidden="true">#</a> Configuring The Single and Daily Channels</h4><p>The <code>single</code> and <code>daily</code> channels have three optional configuration options: <code>bubble</code>, <code>permission</code>, and <code>locking</code>.</p><div class="overflow-auto"><table><thead><tr><th>Name</th><th>Description</th><th>Default</th></tr></thead><tbody><tr><td><code>bubble</code></td><td>Indicates if messages should bubble up to other channels after being handled</td><td><code>true</code></td></tr><tr><td><code>locking</code></td><td>Attempt to lock the log file before writing to it</td><td><code>false</code></td></tr><tr><td><code>permission</code></td><td>The log file&#39;s permissions</td><td><code>0644</code></td></tr></tbody></table></div><p>Additionally, the retention policy for the <code>daily</code> channel can be configured via the <code>days</code> option:</p><div class="overflow-auto"><table><thead><tr><th>Name</th><th>Description</th><th>Default</th></tr></thead><tbody><tr><td><code>days</code></td><td>The number of days that daily log files should be retained</td><td><code>7</code></td></tr></tbody></table></div><p><a name="configuring-the-papertrail-channel"></a></p><h4 id="configuring-the-papertrail-channel" tabindex="-1"><a class="header-anchor" href="#configuring-the-papertrail-channel" aria-hidden="true">#</a> Configuring The Papertrail Channel</h4>`,23),u=o("code",null,"papertrail",-1),m=o("code",null,"host",-1),f=o("code",null,"port",-1),v={href:"https://help.papertrailapp.com/kb/configuration/configuring-centralized-logging-from-php-apps/#send-events-from-php-app",target:"_blank",rel:"noopener noreferrer"},y=o("p",null,[o("a",{name:"configuring-the-slack-channel"})],-1),b=o("h4",{id:"configuring-the-slack-channel",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#configuring-the-slack-channel","aria-hidden":"true"},"#"),e(" Configuring The Slack Channel")],-1),w=o("code",null,"slack",-1),_=o("code",null,"url",-1),k={href:"https://slack.com/apps/A0F7XDUAZ-incoming-webhooks",target:"_blank",rel:"noopener noreferrer"},L=t(`<p>By default, Slack will only receive logs at the <code>critical</code> level and above; however, you can adjust this in your <code>config/logging.php</code> configuration file by modifying the <code>level</code> configuration option within your Slack log channel&#39;s configuration array.</p><p><a name="logging-deprecation-warnings"></a></p><h3 id="logging-deprecation-warnings" tabindex="-1"><a class="header-anchor" href="#logging-deprecation-warnings" aria-hidden="true">#</a> Logging Deprecation Warnings</h3><p>PHP, Laravel, and other libraries often notify their users that some of their features have been deprecated and will be removed in a future version. If you would like to log these deprecation warnings, you may specify your preferred <code>deprecations</code> log channel in your application&#39;s <code>config/logging.php</code> configuration file:</p><pre><code>&#39;deprecations&#39; =&gt; env(&#39;LOG_DEPRECATIONS_CHANNEL&#39;, &#39;null&#39;),

&#39;channels&#39; =&gt; [
    ...
]
</code></pre><p>Or, you may define a log channel named <code>deprecations</code>. If a log channel with this name exists, it will always be used to log deprecations:</p><pre><code>&#39;channels&#39; =&gt; [
    &#39;deprecations&#39; =&gt; [
        &#39;driver&#39; =&gt; &#39;single&#39;,
        &#39;path&#39; =&gt; storage_path(&#39;logs/php-deprecation-warnings.log&#39;),
    ],
],
</code></pre><p><a name="building-log-stacks"></a></p><h2 id="building-log-stacks" tabindex="-1"><a class="header-anchor" href="#building-log-stacks" aria-hidden="true">#</a> Building Log Stacks</h2><p>As mentioned previously, the <code>stack</code> driver allows you to combine multiple channels into a single log channel for convenience. To illustrate how to use log stacks, let&#39;s take a look at an example configuration that you might see in a production application:</p><pre><code>&#39;channels&#39; =&gt; [
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
</code></pre><p>Let&#39;s dissect this configuration. First, notice our <code>stack</code> channel aggregates two other channels via its <code>channels</code> option: <code>syslog</code> and <code>slack</code>. So, when logging messages, both of these channels will have the opportunity to log the message. However, as we will see below, whether these channels actually log the message may be determined by the message&#39;s severity / &quot;level&quot;.</p><p><a name="log-levels"></a></p><h4 id="log-levels" tabindex="-1"><a class="header-anchor" href="#log-levels" aria-hidden="true">#</a> Log Levels</h4>`,14),x=o("code",null,"level",-1),C=o("code",null,"syslog",-1),S=o("code",null,"slack",-1),M={href:"https://tools.ietf.org/html/rfc5424",target:"_blank",rel:"noopener noreferrer"},q=o("strong",null,"emergency",-1),T=o("strong",null,"alert",-1),I=o("strong",null,"critical",-1),F=o("strong",null,"error",-1),A=o("strong",null,"warning",-1),H=o("strong",null,"notice",-1),$=o("strong",null,"info",-1),P=o("strong",null,"debug",-1),z=t(`<p>So, imagine we log a message using the <code>debug</code> method:</p><pre><code>Log::debug(&#39;An informational message.&#39;);
</code></pre><p>Given our configuration, the <code>syslog</code> channel will write the message to the system log; however, since the error message is not <code>critical</code> or above, it will not be sent to Slack. However, if we log an <code>emergency</code> message, it will be sent to both the system log and Slack since the <code>emergency</code> level is above our minimum level threshold for both channels:</p><pre><code>Log::emergency(&#39;The system is down!&#39;);
</code></pre><p><a name="writing-log-messages"></a></p><h2 id="writing-log-messages" tabindex="-1"><a class="header-anchor" href="#writing-log-messages" aria-hidden="true">#</a> Writing Log Messages</h2>`,6),U=o("code",null,"Log",-1),R=o("a",{href:"./facades"},"facade",-1),D={href:"https://tools.ietf.org/html/rfc5424",target:"_blank",rel:"noopener noreferrer"},N=o("strong",null,"emergency",-1),O=o("strong",null,"alert",-1),W=o("strong",null,"critical",-1),B=o("strong",null,"error",-1),E=o("strong",null,"warning",-1),V=o("strong",null,"notice",-1),Y=o("strong",null,"info",-1),j=o("strong",null,"debug",-1),G=t(`<pre><code>use Illuminate\\Support\\Facades\\Log;

Log::emergency($message);
Log::alert($message);
Log::critical($message);
Log::error($message);
Log::warning($message);
Log::notice($message);
Log::info($message);
Log::debug($message);
</code></pre><p>You may call any of these methods to log a message for the corresponding level. By default, the message will be written to the default log channel as configured by your <code>logging</code> configuration file:</p><pre><code>&lt;?php

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
        Log::info(&#39;Showing the user profile for user: {id}&#39;, [&#39;id&#39; =&gt; $id]);

        return view(&#39;user.profile&#39;, [
            &#39;user&#39; =&gt; User::findOrFail($id)
        ]);
    }
}
</code></pre><p><a name="contextual-information"></a></p><h3 id="contextual-information" tabindex="-1"><a class="header-anchor" href="#contextual-information" aria-hidden="true">#</a> Contextual Information</h3><p>An array of contextual data may be passed to the log methods. This contextual data will be formatted and displayed with the log message:</p><pre><code>use Illuminate\\Support\\Facades\\Log;

Log::info(&#39;User {id} failed to login.&#39;, [&#39;id&#39; =&gt; $user-&gt;id]);
</code></pre><p>Occasionally, you may wish to specify some contextual information that should be included with all subsequent log entries in a particular channel. For example, you may wish to log a request ID that is associated with each incoming request to your application. To accomplish this, you may call the <code>Log</code> facade&#39;s <code>withContext</code> method:</p><pre><code>&lt;?php

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

        $response = $next($request);

        $response-&gt;headers-&gt;set(&#39;Request-Id&#39;, $requestId);

        return $response;
    }
}
</code></pre><p>If you would like to share contextual information across <em>all</em> logging channels, you may call the <code>Log::shareContext()</code> method. This method will provide the contextual information to all created channels and any channels that are created subsequently. Typically, the <code>shareContext</code> method should be called from the <code>boot</code> method of an application service provider:</p><pre><code>use Illuminate\\Support\\Facades\\Log;
use Illuminate\\Support\\Str;

class AppServiceProvider
{
    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        Log::shareContext([
            &#39;invocation-id&#39; =&gt; (string) Str::uuid(),
        ]);
    }
}
</code></pre><p><a name="writing-to-specific-channels"></a></p><h3 id="writing-to-specific-channels" tabindex="-1"><a class="header-anchor" href="#writing-to-specific-channels" aria-hidden="true">#</a> Writing To Specific Channels</h3><p>Sometimes you may wish to log a message to a channel other than your application&#39;s default channel. You may use the <code>channel</code> method on the <code>Log</code> facade to retrieve and log to any channel defined in your configuration file:</p><pre><code>use Illuminate\\Support\\Facades\\Log;

Log::channel(&#39;slack&#39;)-&gt;info(&#39;Something happened!&#39;);
</code></pre><p>If you would like to create an on-demand logging stack consisting of multiple channels, you may use the <code>stack</code> method:</p><pre><code>Log::stack([&#39;single&#39;, &#39;slack&#39;])-&gt;info(&#39;Something happened!&#39;);
</code></pre><p><a name="on-demand-channels"></a></p><h4 id="on-demand-channels" tabindex="-1"><a class="header-anchor" href="#on-demand-channels" aria-hidden="true">#</a> On-Demand Channels</h4><p>It is also possible to create an on-demand channel by providing the configuration at runtime without that configuration being present in your application&#39;s <code>logging</code> configuration file. To accomplish this, you may pass a configuration array to the <code>Log</code> facade&#39;s <code>build</code> method:</p><pre><code>use Illuminate\\Support\\Facades\\Log;

Log::build([
  &#39;driver&#39; =&gt; &#39;single&#39;,
  &#39;path&#39; =&gt; storage_path(&#39;logs/custom.log&#39;),
])-&gt;info(&#39;Something happened!&#39;);
</code></pre><p>You may also wish to include an on-demand channel in an on-demand logging stack. This can be achieved by including your on-demand channel instance in the array passed to the <code>stack</code> method:</p><pre><code>use Illuminate\\Support\\Facades\\Log;

$channel = Log::build([
  &#39;driver&#39; =&gt; &#39;single&#39;,
  &#39;path&#39; =&gt; storage_path(&#39;logs/custom.log&#39;),
]);

Log::stack([&#39;slack&#39;, $channel])-&gt;info(&#39;Something happened!&#39;);
</code></pre><p><a name="monolog-channel-customization"></a></p><h2 id="monolog-channel-customization" tabindex="-1"><a class="header-anchor" href="#monolog-channel-customization" aria-hidden="true">#</a> Monolog Channel Customization</h2><p><a name="customizing-monolog-for-channels"></a></p><h3 id="customizing-monolog-for-channels" tabindex="-1"><a class="header-anchor" href="#customizing-monolog-for-channels" aria-hidden="true">#</a> Customizing Monolog For Channels</h3><p>Sometimes you may need complete control over how Monolog is configured for an existing channel. For example, you may want to configure a custom Monolog <code>FormatterInterface</code> implementation for Laravel&#39;s built-in <code>single</code> channel.</p><p>To get started, define a <code>tap</code> array on the channel&#39;s configuration. The <code>tap</code> array should contain a list of classes that should have an opportunity to customize (or &quot;tap&quot; into) the Monolog instance after it is created. There is no conventional location where these classes should be placed, so you are free to create a directory within your application to contain these classes:</p><pre><code>&#39;single&#39; =&gt; [
    &#39;driver&#39; =&gt; &#39;single&#39;,
    &#39;tap&#39; =&gt; [App\\Logging\\CustomizeFormatter::class],
    &#39;path&#39; =&gt; storage_path(&#39;logs/laravel.log&#39;),
    &#39;level&#39; =&gt; &#39;debug&#39;,
],
</code></pre><p>Once you have configured the <code>tap</code> option on your channel, you&#39;re ready to define the class that will customize your Monolog instance. This class only needs a single method: <code>__invoke</code>, which receives an <code>Illuminate\\Log\\Logger</code> instance. The <code>Illuminate\\Log\\Logger</code> instance proxies all method calls to the underlying Monolog instance:</p><pre><code>&lt;?php

namespace App\\Logging;

use Illuminate\\Log\\Logger;
use Monolog\\Formatter\\LineFormatter;

class CustomizeFormatter
{
    /**
     * Customize the given logger instance.
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
</code></pre><blockquote><p><strong>Note</strong><br> All of your &quot;tap&quot; classes are resolved by the <a href="./container">service container</a>, so any constructor dependencies they require will automatically be injected.</p></blockquote><p><a name="creating-monolog-handler-channels"></a></p><h3 id="creating-monolog-handler-channels" tabindex="-1"><a class="header-anchor" href="#creating-monolog-handler-channels" aria-hidden="true">#</a> Creating Monolog Handler Channels</h3>`,35),K={href:"https://github.com/Seldaek/monolog/tree/main/src/Monolog/Handler",target:"_blank",rel:"noopener noreferrer"},Q=o("code",null,"monolog",-1),X=t(`<p>When using the <code>monolog</code> driver, the <code>handler</code> configuration option is used to specify which handler will be instantiated. Optionally, any constructor parameters the handler needs may be specified using the <code>with</code> configuration option:</p><pre><code>&#39;logentries&#39; =&gt; [
    &#39;driver&#39;  =&gt; &#39;monolog&#39;,
    &#39;handler&#39; =&gt; Monolog\\Handler\\SyslogUdpHandler::class,
    &#39;with&#39; =&gt; [
        &#39;host&#39; =&gt; &#39;my.logentries.internal.datahubhost.company.com&#39;,
        &#39;port&#39; =&gt; &#39;10000&#39;,
    ],
],
</code></pre><p><a name="monolog-formatters"></a></p><h4 id="monolog-formatters" tabindex="-1"><a class="header-anchor" href="#monolog-formatters" aria-hidden="true">#</a> Monolog Formatters</h4><p>When using the <code>monolog</code> driver, the Monolog <code>LineFormatter</code> will be used as the default formatter. However, you may customize the type of formatter passed to the handler using the <code>formatter</code> and <code>formatter_with</code> configuration options:</p><pre><code>&#39;browser&#39; =&gt; [
    &#39;driver&#39; =&gt; &#39;monolog&#39;,
    &#39;handler&#39; =&gt; Monolog\\Handler\\BrowserConsoleHandler::class,
    &#39;formatter&#39; =&gt; Monolog\\Formatter\\HtmlFormatter::class,
    &#39;formatter_with&#39; =&gt; [
        &#39;dateFormat&#39; =&gt; &#39;Y-m-d&#39;,
    ],
],
</code></pre><p>If you are using a Monolog handler that is capable of providing its own formatter, you may set the value of the <code>formatter</code> configuration option to <code>default</code>:</p><pre><code>&#39;newrelic&#39; =&gt; [
    &#39;driver&#39; =&gt; &#39;monolog&#39;,
    &#39;handler&#39; =&gt; Monolog\\Handler\\NewRelicHandler::class,
    &#39;formatter&#39; =&gt; &#39;default&#39;,
],
</code></pre><p><a name="monolog-processors"></a></p><h4 id="monolog-processors" tabindex="-1"><a class="header-anchor" href="#monolog-processors" aria-hidden="true">#</a> Monolog Processors</h4>`,10),Z={href:"https://github.com/Seldaek/monolog/tree/main/src/Monolog/Processor",target:"_blank",rel:"noopener noreferrer"},J=t(`<p>If you would like to customize the processors for a <code>monolog</code> driver, add a <code>processors</code> configuration value to your channel&#39;s configuration:</p><pre><code> &#39;memory&#39; =&gt; [
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
</code></pre><p><a name="creating-custom-channels-via-factories"></a></p><h3 id="creating-custom-channels-via-factories" tabindex="-1"><a class="header-anchor" href="#creating-custom-channels-via-factories" aria-hidden="true">#</a> Creating Custom Channels Via Factories</h3><p>If you would like to define an entirely custom channel in which you have full control over Monolog&#39;s instantiation and configuration, you may specify a <code>custom</code> driver type in your <code>config/logging.php</code> configuration file. Your configuration should include a <code>via</code> option that contains the name of the factory class which will be invoked to create the Monolog instance:</p><pre><code>&#39;channels&#39; =&gt; [
    &#39;example-custom-channel&#39; =&gt; [
        &#39;driver&#39; =&gt; &#39;custom&#39;,
        &#39;via&#39; =&gt; App\\Logging\\CreateCustomLogger::class,
    ],
],
</code></pre><p>Once you have configured the <code>custom</code> driver channel, you&#39;re ready to define the class that will create your Monolog instance. This class only needs a single <code>__invoke</code> method which should return the Monolog logger instance. The method will receive the channels configuration array as its only argument:</p><pre><code>&lt;?php

namespace App\\Logging;

use Monolog\\Logger;

class CreateCustomLogger
{
    /**
     * Create a custom Monolog instance.
     */
    public function __invoke(array $config): Logger
    {
        return new Logger(/* ... */);
    }
}
</code></pre><p><a name="tailing-log-messages-using-pail"></a></p><h2 id="tailing-log-messages-using-pail" tabindex="-1"><a class="header-anchor" href="#tailing-log-messages-using-pail" aria-hidden="true">#</a> Tailing Log Messages Using Pail</h2><p>Often you may need to tail your application&#39;s logs in real time. For example, when debugging an issue or when monitoring your application&#39;s logs for specific types of errors.</p><p>Laravel Pail is a package that allows you to easily dive into your Laravel application&#39;s log files directly from the command line. Unlike the standard <code>tail</code> command, Pail is designed to work with any log driver, including Sentry or Flare. In addition, Pail provides a set of useful filters to help you quickly find what you&#39;re looking for.</p><img src="`+c+'"><p><a name="pail-installation"></a></p><h3 id="installation" tabindex="-1"><a class="header-anchor" href="#installation" aria-hidden="true">#</a> Installation</h3>',15),ee=o("strong",null,"Warning",-1),oe={href:"https://php.net/releases/",target:"_blank",rel:"noopener noreferrer"},ne={href:"https://www.php.net/manual/en/book.pcntl.php",target:"_blank",rel:"noopener noreferrer"},ae=t(`<p>To get started, install Pail into your project using the Composer package manager:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">composer</span> require laravel/pail
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a name="pail-usage"></a></p><h3 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h3><p>To start tailing logs, run the <code>pail</code> command:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan pail
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>To increase the verbosity of the output and avoid truncation (…), use the <code>-v</code> option:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan pail <span class="token parameter variable">-v</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>For maximum verbosity and to display exception stack traces, use the <code>-vv</code> option:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan pail <span class="token parameter variable">-vv</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>To stop tailing logs, press <code>Ctrl+C</code> at any time.</p><p><a name="pail-filtering-logs"></a></p><h3 id="filtering-logs" tabindex="-1"><a class="header-anchor" href="#filtering-logs" aria-hidden="true">#</a> Filtering Logs</h3><p><a name="pail-filtering-logs-filter-option"></a></p><h4 id="filter" tabindex="-1"><a class="header-anchor" href="#filter" aria-hidden="true">#</a> <code>--filter</code></h4><p>You may use the <code>--filter</code> option to filter logs by their type, file, message, and stack trace content:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan pail <span class="token parameter variable">--filter</span><span class="token operator">=</span><span class="token string">&quot;QueryException&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a name="pail-filtering-logs-message-option"></a></p><h4 id="message" tabindex="-1"><a class="header-anchor" href="#message" aria-hidden="true">#</a> <code>--message</code></h4><p>To filter logs by only their message, you may use the <code>--message</code> option:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan pail <span class="token parameter variable">--message</span><span class="token operator">=</span><span class="token string">&quot;User created&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a name="pail-filtering-logs-level-option"></a></p><h4 id="level" tabindex="-1"><a class="header-anchor" href="#level" aria-hidden="true">#</a> <code>--level</code></h4><p>The <code>--level</code> option may be used to filter logs by their <a href="#log-levels">log level</a>:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan pail <span class="token parameter variable">--level</span><span class="token operator">=</span>error
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a name="pail-filtering-logs-user-option"></a></p><h4 id="user" tabindex="-1"><a class="header-anchor" href="#user" aria-hidden="true">#</a> <code>--user</code></h4><p>To only display logs that were written while a given user was authenticated, you may provide the user&#39;s ID to the <code>--user</code> option:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan pail <span class="token parameter variable">--user</span><span class="token operator">=</span><span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,29);function te(ie,re){const n=r("ExternalLinkIcon");return s(),l("div",null,[h,o("p",null,[e("Under the hood, Laravel utilizes the "),o("a",g,[e("Monolog"),a(n)]),e(" library, which provides support for a variety of powerful log handlers. Laravel makes it a cinch to configure these handlers, allowing you to mix and match them to customize your application's log handling.")]),p,o("p",null,[e("The "),u,e(" channel requires the "),m,e(" and "),f,e(" configuration options. You can obtain these values from "),o("a",v,[e("Papertrail"),a(n)]),e(".")]),y,b,o("p",null,[e("The "),w,e(" channel requires a "),_,e(" configuration option. This URL should match a URL for an "),o("a",k,[e("incoming webhook"),a(n)]),e(" that you have configured for your Slack team.")]),L,o("p",null,[e("Take note of the "),x,e(" configuration option present on the "),C,e(" and "),S,e(` channel configurations in the example above. This option determines the minimum "level" a message must be in order to be logged by the channel. Monolog, which powers Laravel's logging services, offers all of the log levels defined in the `),o("a",M,[e("RFC 5424 specification"),a(n)]),e(". In descending order of severity, these log levels are: "),q,e(", "),T,e(", "),I,e(", "),F,e(", "),A,e(", "),H,e(", "),$,e(", and "),P,e(".")]),z,o("p",null,[e("You may write information to the logs using the "),U,e(),R,e(". As previously mentioned, the logger provides the eight logging levels defined in the "),o("a",D,[e("RFC 5424 specification"),a(n)]),e(": "),N,e(", "),O,e(", "),W,e(", "),B,e(", "),E,e(", "),V,e(", "),Y,e(" and "),j,e(":")]),G,o("p",null,[e("Monolog has a variety of "),o("a",K,[e("available handlers"),a(n)]),e(" and Laravel does not include a built-in channel for each one. In some cases, you may wish to create a custom channel that is merely an instance of a specific Monolog handler that does not have a corresponding Laravel log driver. These channels can be easily created using the "),Q,e(" driver.")]),X,o("p",null,[e("Monolog can also process messages before logging them. You can create your own processors or use the "),o("a",Z,[e("existing processors offered by Monolog"),a(n)]),e(".")]),J,o("blockquote",null,[o("p",null,[ee,e(" Laravel Pail requires "),o("a",oe,[e("PHP 8.2+"),a(n)]),e(" and the "),o("a",ne,[e("PCNTL"),a(n)]),e(" extension.")])]),ae])}const ce=i(d,[["render",te],["__file","logging.html.vue"]]);export{ce as default};
