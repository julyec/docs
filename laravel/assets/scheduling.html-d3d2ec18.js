import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as c,c as r,b as t,d as e,e as d,a as n}from"./app-8cdff07c.js";const l={},i=n(`<h1 id="任务调度" tabindex="-1"><a class="header-anchor" href="#任务调度" aria-hidden="true">#</a> 任务调度</h1><ul><li><a href="#introduction">简介</a></li><li><a href="#defining-schedules">定义调度</a><ul><li><a href="#scheduling-artisan-commands">Artisan 命令调度</a></li><li><a href="#scheduling-queued-jobs">队列任务调度</a></li><li><a href="#scheduling-shell-commands">Shell 命令调度</a></li><li><a href="#schedule-frequency-options">调度频率设置</a></li><li><a href="#timezones">时区</a></li><li><a href="#preventing-task-overlaps">避免任务重复</a></li><li><a href="#running-tasks-on-one-server">单机任务调度</a></li><li><a href="#background-tasks">后台任务</a></li><li><a href="#maintenance-mode">维护模式</a></li></ul></li><li><a href="#running-the-scheduler">运行调度程序</a><ul><li><a href="#running-the-scheduler-locally">本地运行调度程序</a></li></ul></li><li><a href="#task-output">任务输出</a></li><li><a href="#task-hooks">任务钩子</a></li><li><a href="#events">事件</a></li></ul><p><a name="introduction"></a></p><h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h2><p>过去，你可能需要在服务器上为每一个调度任务去创建 Cron 条目。因为这些任务的调度不是通过代码控制的，你要查看或新增任务调度都需要通过 SSH 远程登录到服务器上去操作，所以这种方式很快会让人变得痛苦不堪。</p><p>Laravel 的命令行调度器允许你在 Laravel 中清晰明了地定义命令调度。在使用这个任务调度器时，你只需要在你的服务器上创建单个 Cron 入口。你的任务调度在 <code>app/Console/Kernel.php</code> 的 <code>schedule</code> 方法中进行定义。为了帮助你更好的入门，这个方法中有个简单的例子。</p><p><a name="defining-schedules"></a></p><h2 id="定义调度" tabindex="-1"><a class="header-anchor" href="#定义调度" aria-hidden="true">#</a> 定义调度</h2><p>你可以在 <code>App\\Console\\Kernel</code> 类的 <code>schedule</code> 方法中定义所有的调度任务。在开始之前，我们来看一个例子：我们计划每天午夜执行一个闭包，这个闭包会执行一次数据库语句去清空一张表：</p><pre><code>&lt;?php

namespace App\\Console;

use Illuminate\\Console\\Scheduling\\Schedule;
use Illuminate\\Foundation\\Console\\Kernel as ConsoleKernel;
use Illuminate\\Support\\Facades\\DB;

class Kernel extends ConsoleKernel
{
    /**
     * 定义应用中的命令调度
     */
    protected function schedule(Schedule $schedule): void
    {
        $schedule-&gt;call(function () {
            DB::table(&#39;recent_users&#39;)-&gt;delete();
        })-&gt;daily();
    }
}
</code></pre>`,10),p={href:"https://secure.php.net/manual/en/language.oop5.magic.php#object.invoke",target:"_blank",rel:"noopener noreferrer"},u=t("code",null,"__invoke",-1),h=n(`<pre><code>$schedule-&gt;call(new DeleteRecentUsers)-&gt;daily();
</code></pre><p>如果你想查看任务计划的概述及其下次计划运行时间，你可以使用 <code>schedule:list</code> Artisan 命令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan schedule:list
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a name="scheduling-artisan-commands"></a></p><h3 id="artisan-命令调度" tabindex="-1"><a class="header-anchor" href="#artisan-命令调度" aria-hidden="true">#</a> Artisan 命令调度</h3><p>调度方式不仅有调用闭包，还有调用 <a href="./artisan">Artisan commands</a> 和操作系统命令。例如，你可以给 command 方法传递命令名称或类来调度一个 <code>Artisan</code> 命令：</p><p>当使用命令类名调度 <code>Artisan</code> 命令时，你可以通过一个数组传递附加的命令行参数，且这些参数需要在命令触发时提供：</p><pre><code>use App\\Console\\Commands\\SendEmailsCommand;

$schedule-&gt;command(&#39;emails:send Taylor --force&#39;)-&gt;daily();

$schedule-&gt;command(SendEmailsCommand::class, [&#39;Taylor&#39;, &#39;--force&#39;])-&gt;daily();
</code></pre><p><a name="scheduling-queued-jobs"></a></p><h3 id="队列任务调度" tabindex="-1"><a class="header-anchor" href="#队列任务调度" aria-hidden="true">#</a> 队列任务调度</h3><p><code>job</code> 方法可以用来调度 <a href="./queues">queued job</a>。此方法提供了一种快捷方式来调度任务，而无需使用 <code>call</code> 方法创建闭包来调度任务：</p><pre><code>use App\\Jobs\\Heartbeat;

$schedule-&gt;job(new Heartbeat)-&gt;everyFiveMinutes();
</code></pre><p><code>job</code> 方法提供了可选的第二，三参数，分别指定任务将被放置的队列名称及连接：</p><pre><code>use App\\Jobs\\Heartbeat;

// 分发任务到「heartbeats」队列及「sqs」连接...
$schedule-&gt;job(new Heartbeat, &#39;heartbeats&#39;, &#39;sqs&#39;)-&gt;everyFiveMinutes();
</code></pre><p><a name="scheduling-shell-commands"></a></p><h3 id="shell-命令调度" tabindex="-1"><a class="header-anchor" href="#shell-命令调度" aria-hidden="true">#</a> Shell 命令调度</h3><p><code>exec</code> 方法可发送命令到操作系统：</p><pre><code>$schedule-&gt;exec(&#39;node /home/forge/script.js&#39;)-&gt;daily();
</code></pre><p><a name="schedule-frequency-options"></a></p><h3 id="调度频率选项" tabindex="-1"><a class="header-anchor" href="#调度频率选项" aria-hidden="true">#</a> 调度频率选项</h3><p>我们已经看到了几个如何设置任务在指定时间间隔运行的例子。不仅如此，你还有更多的任务调度频率可选：</p><table><thead><tr><th>方法</th><th>描述</th></tr></thead><tbody><tr><td><code>-&gt;cron(&#39;* * * * *&#39;);</code></td><td>按自定义 cron 计划运行任务</td></tr><tr><td><code>-&gt;everySecond();</code></td><td>每秒运行一次任务</td></tr><tr><td><code>-&gt;everyTwoSeconds();</code></td><td>每两秒运行一次任务</td></tr><tr><td><code>-&gt;everyFiveSeconds();</code></td><td>每五秒运行一次任务</td></tr><tr><td><code>-&gt;everyTenSeconds();</code></td><td>每十秒运行一次任务</td></tr><tr><td><code>-&gt;everyFifteenSeconds();</code></td><td>每 15 秒运行一次任务</td></tr><tr><td><code>-&gt;everyTwentySeconds();</code></td><td>每 20 秒运行一次任务</td></tr><tr><td><code>-&gt;everyThirtySeconds();</code></td><td>每 30 秒运行一次任务</td></tr><tr><td><code>-&gt;everyMinute();</code></td><td>每分钟运行一次任务</td></tr><tr><td><code>-&gt;everyTwoMinutes();</code></td><td>每两分钟运行一次任务</td></tr><tr><td><code>-&gt;everyThreeMinutes();</code></td><td>每三分钟运行一次任务</td></tr><tr><td><code>-&gt;everyFourMinutes();</code></td><td>每四分钟运行一次任务</td></tr><tr><td><code>-&gt;everyFiveMinutes();</code></td><td>每五分钟运行一次任务</td></tr><tr><td><code>-&gt;everyTenMinutes();</code></td><td>每十分钟运行一次任务</td></tr><tr><td><code>-&gt;everyFifteenMinutes();</code></td><td>每 15 分钟运行一次任务</td></tr><tr><td><code>-&gt;everyThirtyMinutes();</code></td><td>每 30 分钟运行一次任务</td></tr><tr><td><code>-&gt;hourly();</code></td><td>每小时运行一次任务</td></tr><tr><td><code>-&gt;hourlyAt(17);</code></td><td>每小时第十七分钟时执行一次任务</td></tr><tr><td><code>-&gt;everyOddHour($minutes = 0);</code></td><td>每奇数小时运行一次任务</td></tr><tr><td><code>-&gt;everyTwoHours($minutes = 0);</code></td><td>每两小时运行一次任务</td></tr><tr><td><code>-&gt;everyThreeHours($minutes = 0);</code></td><td>每三小时运行一次任务</td></tr><tr><td><code>-&gt;everyFourHours($minutes = 0);</code></td><td>每四小时运行一次任务</td></tr><tr><td><code>-&gt;everySixHours($minutes = 0);</code></td><td>每六小时运行一次任务</td></tr><tr><td><code>-&gt;daily();</code></td><td>每天 00:00 执行一次任务</td></tr><tr><td><code>-&gt;dailyAt(&#39;13:00&#39;);</code></td><td>每天 13:00 运行任务</td></tr><tr><td><code>-&gt;twiceDaily(1, 13);</code></td><td>每天在 1:00 和 13:00 运行任务</td></tr><tr><td><code>-&gt;twiceDailyAt(1, 13, 15);</code></td><td>每天在 1:15 和 13:15 运行任务</td></tr><tr><td><code>-&gt;weekly();</code></td><td>每周日00:00运行任务</td></tr><tr><td><code>-&gt;weeklyOn(1, &#39;8:00&#39;);</code></td><td>每周一 8:00 运行任务</td></tr><tr><td><code>-&gt;monthly();</code></td><td>每月第一天 00:00 运行任务</td></tr><tr><td><code>-&gt;monthlyOn(4, &#39;15:00&#39;);</code></td><td>每月第四天 15:00 运行任务</td></tr><tr><td><code>-&gt;twiceMonthly(1, 16, &#39;13:00&#39;);</code></td><td>每月第一天和第十六天的 13:00 运行任务</td></tr><tr><td><code>-&gt;lastDayOfMonth(&#39;15:00&#39;);</code></td><td>每月的最后一天 15:00 运行任务</td></tr><tr><td><code>-&gt;quarterly();</code></td><td>每个季度的第一天 00:00 运行任务</td></tr><tr><td><code>-&gt;quarterlyOn(4, &#39;14:00&#39;);</code></td><td>每季度 4 日 14:00 运行任务</td></tr><tr><td><code>-&gt;yearly();</code></td><td>每年的第一天 00:00 运行任务</td></tr><tr><td><code>-&gt;yearlyOn(6, 1, &#39;17:00&#39;);</code></td><td>每年 6 月 1 日 17:00 运行任务</td></tr><tr><td><code>-&gt;timezone(&#39;America/New_York&#39;);</code></td><td>设置任务的时区</td></tr></tbody></table><p>这些方法与额外的约束条件相结合后，可用于创建在一周的特定时间运行甚至更精细的计划任务。例如，在每周一执行命令：</p><pre><code>// 在每周一 13:00 执行...
$schedule-&gt;call(function () {
    // ...
})-&gt;weekly()-&gt;mondays()-&gt;at(&#39;13:00&#39;);

// 在每个工作日 8:00 到 17:00 之间的每小时周期执行...
$schedule-&gt;command(&#39;foo&#39;)
          -&gt;weekdays()
          -&gt;hourly()
          -&gt;timezone(&#39;America/Chicago&#39;)
          -&gt;between(&#39;8:00&#39;, &#39;17:00&#39;);
</code></pre><p>下方列出了额外的约束条件：</p><div class="overflow-auto"><table><thead><tr><th style="text-align:left;">方法</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:left;"><code>-&gt;weekdays();</code></td><td style="text-align:left;">限制任务在工作日执行</td></tr><tr><td style="text-align:left;"><code>-&gt;weekends();</code></td><td style="text-align:left;">限制任务在周末执行</td></tr><tr><td style="text-align:left;"><code>-&gt;sundays();</code></td><td style="text-align:left;">限制任务在周日执行</td></tr><tr><td style="text-align:left;"><code>-&gt;mondays();</code></td><td style="text-align:left;">限制任务在周一执行</td></tr><tr><td style="text-align:left;"><code>-&gt;tuesdays();</code></td><td style="text-align:left;">限制任务在周二执行</td></tr><tr><td style="text-align:left;"><code>-&gt;wednesdays();</code></td><td style="text-align:left;">限制任务在周三执行</td></tr><tr><td style="text-align:left;"><code>-&gt;thursdays();</code></td><td style="text-align:left;">限制任务在周四执行</td></tr><tr><td style="text-align:left;"><code>-&gt;fridays();</code></td><td style="text-align:left;">限制任务在周五执行</td></tr><tr><td style="text-align:left;"><code>-&gt;saturdays();</code></td><td style="text-align:left;">限制任务在周六执行</td></tr><tr><td style="text-align:left;"><code>-&gt;days(array|mixed);</code></td><td style="text-align:left;">限制任务在每周的指定日期执行</td></tr><tr><td style="text-align:left;"><code>-&gt;between($startTime, $endTime);</code></td><td style="text-align:left;">限制任务在 <code>$startTime</code> 和 <code>$endTime</code> 区间执行</td></tr><tr><td style="text-align:left;"><code>-&gt;unlessBetween($startTime, $endTime);</code></td><td style="text-align:left;">限制任务不在 <code>$startTime</code> 和 <code>$endTime</code> 区间执行</td></tr><tr><td style="text-align:left;"><code>-&gt;when(Closure);</code></td><td style="text-align:left;">限制任务在闭包返回为真时执行</td></tr><tr><td style="text-align:left;"><code>-&gt;environments($env);</code></td><td style="text-align:left;">限制任务在特定环境中执行</td></tr></tbody></table></div><p><a name="day-constraints"></a></p><h4 id="周几-day-限制" tabindex="-1"><a class="header-anchor" href="#周几-day-限制" aria-hidden="true">#</a> 周几（Day）限制</h4><p><code>days</code> 方法可以用于限制任务在每周的指定日期执行。举个例子，你可以在让一个命令每周日和每周三每小时执行一次：</p><pre><code>$schedule-&gt;command(&#39;emails:send&#39;)
                -&gt;hourly()
                -&gt;days([0, 3]);
</code></pre><p>不仅如此，你还可以使用 <code>Illuminate\\Console\\Scheduling\\Schedule</code> 类中的常量来设置任务在指定日期运行：</p><pre><code>use Illuminate\\Console\\Scheduling\\Schedule;

$schedule-&gt;command(&#39;emails:send&#39;)
                -&gt;hourly()
                -&gt;days([Schedule::SUNDAY, Schedule::WEDNESDAY]);
</code></pre><p><a name="between-time-constraints"></a></p><h4 id="时间范围限制" tabindex="-1"><a class="header-anchor" href="#时间范围限制" aria-hidden="true">#</a> 时间范围限制</h4><p><code>between</code> 方法可用于限制任务在一天中的某个时间段执行：</p><pre><code>$schedule-&gt;command(&#39;emails:send&#39;)
                    -&gt;hourly()
                    -&gt;between(&#39;7:00&#39;, &#39;22:00&#39;);
</code></pre><p>同样， <code>unlessBetween</code> 方法也可用于限制任务不在一天中的某个时间段执行：</p><pre><code>$schedule-&gt;command(&#39;emails:send&#39;)
                    -&gt;hourly()
                    -&gt;unlessBetween(&#39;23:00&#39;, &#39;4:00&#39;);
</code></pre><p><a name="truth-test-constraints"></a></p><h4 id="真值检测限制" tabindex="-1"><a class="header-anchor" href="#真值检测限制" aria-hidden="true">#</a> 真值检测限制</h4><p><code>when</code> 方法可根据闭包返回结果来执行任务。换言之，若给定的闭包返回 <code>true</code>，若无其他限制条件阻止，任务就会一直执行：</p><pre><code>$schedule-&gt;command(&#39;emails:send&#39;)-&gt;daily()-&gt;when(function () {
    return true;
});
</code></pre><p><code>skip</code> 可看作是 <code>when</code> 的逆方法。若 <code>skip</code> 方法返回 <code>true</code>，任务将不会执行：</p><pre><code>$schedule-&gt;command(&#39;emails:send&#39;)-&gt;daily()-&gt;skip(function () {
    return true;
});
</code></pre><p>当链式调用 <code>when</code> 方法时，仅当所有 <code>when</code> 都返回 <code>true</code> 时，任务才会执行。</p><p><a name="environment-constraints"></a></p><h4 id="环境限制" tabindex="-1"><a class="header-anchor" href="#环境限制" aria-hidden="true">#</a> 环境限制</h4><p><code>environments</code> 方法可限制任务在指定环境中执行（由 <code>APP_ENV</code> <a href="./configuration#environment-configuration">环境变量</a> 定义）：</p><pre><code>$schedule-&gt;command(&#39;emails:send&#39;)
            -&gt;daily()
            -&gt;environments([&#39;staging&#39;, &#39;production&#39;]);
</code></pre><p><a name="timezones"></a></p><h3 id="时区" tabindex="-1"><a class="header-anchor" href="#时区" aria-hidden="true">#</a> 时区</h3><p><code>timezone</code> 方法可指定在某一时区的时间执行计划任务：</p><pre><code>$schedule-&gt;command(&#39;report:generate&#39;)
         -&gt;timezone(&#39;America/New_York&#39;)
         -&gt;at(&#39;2:00&#39;)
</code></pre><p>若想给所有计划任务分配相同的时区，那么需要在 <code>app/Console/Kernel.php</code> 类中定义 <code>scheduleTimezone</code> 方法。该方法会返回一个默认时区，最终分配给所有计划任务：</p><pre><code>use DateTimeZone;

/**
 * 获取计划事件默认使用的时区
 */
protected function scheduleTimezone(): DateTimeZone|string|null
{
    return &#39;America/Chicago&#39;;
}
</code></pre><blockquote><p><strong>注意</strong> 请记住，有些时区会使用夏令时。当夏令时发生调整时，你的任务可能会执行两次，甚至根本不会执行。因此，我们建议尽可能避免使用时区来安排计划任务。</p></blockquote><p><a name="preventing-task-overlaps"></a></p><h3 id="避免任务重复" tabindex="-1"><a class="header-anchor" href="#避免任务重复" aria-hidden="true">#</a> 避免任务重复</h3><p>默认情况下，即使之前的任务实例还在执行，调度内的任务也会执行。为避免这种情况的发生，你可以使用 <code>withoutOverlapping</code> 方法：</p><pre><code>$schedule-&gt;command(&#39;emails:send&#39;)-&gt;withoutOverlapping();
</code></pre><p>在此例中，若 <code>emails:send</code> <a href="./artisan">Artisan 命令</a> 还未运行，那它将会每分钟执行一次。如果你的任务执行时间非常不确定，导致你无法准确预测任务的执行时间，那 <code>withoutOverlapping</code> 方法会特别有用。</p><p>如有需要，你可以在 <code>withoutOverlapping</code> 锁过期之前，指定它的过期分钟数。默认情况下，这个锁会在 24 小时后过期：</p><pre><code>$schedule-&gt;command(&#39;emails:send&#39;)-&gt;withoutOverlapping(10);
</code></pre><p>上面这种场景中，<code>withoutOverlapping</code> 方法使用应用程序的 <a href="./cache">缓存</a> 获取锁。如有必要，可以使用<code>schedule:clear cache</code> Artisan命令清除这些缓存锁。这通常只有在任务由于意外的服务器问题而卡住时才需要。</p><p><a name="running-tasks-on-one-server"></a></p><h3 id="任务只运行在一台服务器上" tabindex="-1"><a class="header-anchor" href="#任务只运行在一台服务器上" aria-hidden="true">#</a> 任务只运行在一台服务器上</h3><blockquote><p><strong>注意</strong> 要使用此功能，你的应用程序必须使用 <code>database</code>, <code>memcached</code>, <code>dynamodb</code>, 或 <code>redis</code> 缓存驱动程序作为应用程序的默认缓存驱动程序。此外，所有服务器必须和同一个中央缓存服务器通信。</p></blockquote><p>如果你的应用运行在多台服务器上，可能需要限制调度任务只在某台服务器上运行。 例如，假设你有一个每个星期五晚上生成新报告的调度任务，如果任务调度器运行在三台服务器上，调度任务会在三台服务器上运行并且生成三次报告，不够优雅！</p><p>要指示任务应仅在一台服务器上运行，请在定义计划任务时使用 <code>onOneServer</code> 方法。第一台获取到该任务的服务器会给任务上一把原子锁以阻止其他服务器同时运行该任务:</p><pre><code>$schedule-&gt;command(&#39;report:generate&#39;)
                -&gt;fridays()
                -&gt;at(&#39;17:00&#39;)
                -&gt;onOneServer();
</code></pre><p><a name="naming-unique-jobs"></a></p><h4 id="命名单服务器作业" tabindex="-1"><a class="header-anchor" href="#命名单服务器作业" aria-hidden="true">#</a> 命名单服务器作业</h4><p>有时，你可能需要使用不同的参数调度相同的作业，同时使其仍然在单个服务器上运行作业。为此，你可以使用 <code>name</code> 方法为每个作业定义一个唯一的名字：</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token variable">$schedule</span><span class="token operator">-&gt;</span><span class="token function">job</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">CheckUptime</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;https://laravel.com&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token operator">-&gt;</span><span class="token function">name</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;check_uptime:laravel.com&#39;</span><span class="token punctuation">)</span>
            <span class="token operator">-&gt;</span><span class="token function">everyFiveMinutes</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token operator">-&gt;</span><span class="token function">onOneServer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token variable">$schedule</span><span class="token operator">-&gt;</span><span class="token function">job</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">CheckUptime</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;https://vapor.laravel.com&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token operator">-&gt;</span><span class="token function">name</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;check_uptime:vapor.laravel.com&#39;</span><span class="token punctuation">)</span>
            <span class="token operator">-&gt;</span><span class="token function">everyFiveMinutes</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token operator">-&gt;</span><span class="token function">onOneServer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果你使用闭包来定义单服务器作业，则必须为他们定义一个名字</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token variable">$schedule</span><span class="token operator">-&gt;</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">fn</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token class-name static-context">User</span><span class="token operator">::</span><span class="token function">resetApiRequestCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token operator">-&gt;</span><span class="token function">name</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;reset-api-request-count&#39;</span><span class="token punctuation">)</span>
    <span class="token operator">-&gt;</span><span class="token function">daily</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token operator">-&gt;</span><span class="token function">onOneServer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="background-tasks"></a></p><h3 id="后台任务" tabindex="-1"><a class="header-anchor" href="#后台任务" aria-hidden="true">#</a> 后台任务</h3><p>默认情况下，同时运行多个任务将根据它们在 <code>schedule</code> 方法中定义的顺序执行。如果你有一些长时间运行的任务，将会导致后续任务比预期时间更晚启动。 如果你想在后台运行任务，以便它们可以同时运行，则可以使用 <code>runInBackground</code> 方法:</p><pre><code>$schedule-&gt;command(&#39;analytics:report&#39;)
         -&gt;daily()
         -&gt;runInBackground();
</code></pre><blockquote><p><strong>注意</strong><code>runInBackground</code> 方法只有在通过 <code>command</code> 和 <code>exec</code> 方法调度任务时才可以使用</p></blockquote><p><a name="maintenance-mode"></a></p><h3 id="维护模式" tabindex="-1"><a class="header-anchor" href="#维护模式" aria-hidden="true">#</a> 维护模式</h3><p>当应用处于 <a href="./configuration#maintenance-mode">维护模式</a> 时，Laravel 的队列任务将不会运行。因为我们不想调度任务干扰到服务器上可能还未完成的维护项目。不过，如果你想强制任务在维护模式下运行，你可以使用 <code>evenInMaintenanceMode</code> 方法：</p><pre><code>$schedule-&gt;command(&#39;emails:send&#39;)-&gt;evenInMaintenanceMode();
</code></pre><p><a name="running-the-scheduler"></a></p><h2 id="运行调度程序" tabindex="-1"><a class="header-anchor" href="#运行调度程序" aria-hidden="true">#</a> 运行调度程序</h2><p>现在，我们已经学会了如何定义计划任务，接下来让我们讨论如何真正在服务器上运行它们。<code>schedule:run</code> Artisan 命令将评估你的所有计划任务，并根据服务器的当前时间决定它们是否运行。</p>`,88),g=t("code",null,"schedule:run",-1),m={href:"https://forge.laravel.com",target:"_blank",rel:"noopener noreferrer"},f=n(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>* * * * * <span class="token builtin class-name">cd</span> /path-to-your-project <span class="token operator">&amp;&amp;</span> php artisan schedule:run <span class="token operator">&gt;&gt;</span> /dev/null <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a name="running-the-scheduler-locally"></a></p><h3 id="本地运行调度程序" tabindex="-1"><a class="header-anchor" href="#本地运行调度程序" aria-hidden="true">#</a> 本地运行调度程序</h3><p>通常，你不会直接将 cron 配置项添加到本地开发计算机。你反而可以使用 <code>schedule:work</code> Artisan 命令。该命令将在前台运行，并每分钟调用一次调度程序，直到你终止该命令为止：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan schedule:work
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a name="task-output"></a></p><h2 id="任务输出" tabindex="-1"><a class="header-anchor" href="#任务输出" aria-hidden="true">#</a> 任务输出</h2><p>Laravel 调度器提供了一些简便方法来处理调度任务生成的输出。首先，你可以使用 <code>sendOutputTo</code> 方法将输出发送到文件中以便后续检查：</p><pre><code>$schedule-&gt;command(&#39;emails:send&#39;)
         -&gt;daily()
         -&gt;sendOutputTo($filePath);
</code></pre><p>如果希望将输出追加到指定文件，可使用 <code>appendOutputTo</code> 方法：</p><pre><code>$schedule-&gt;command(&#39;emails:send&#39;)
         -&gt;daily()
         -&gt;appendOutputTo($filePath);
</code></pre><p>使用 <code>emailOutputTo</code> 方法，你可以将输出发送到指定邮箱。在发送邮件之前，你需要先配置 Laravel 的 <a href="./mail">邮件服务</a>:</p><pre><code>$schedule-&gt;command(&#39;report:generate&#39;)
         -&gt;daily()
         -&gt;sendOutputTo($filePath)
         -&gt;emailOutputTo(&#39;taylor@example.com&#39;);
</code></pre><p>如果你只想在命令执行失败时将输出发送到邮箱，可使用 <code>emailOutputOnFailure</code> 方法：</p><pre><code>$schedule-&gt;command(&#39;report:generate&#39;)
         -&gt;daily()
         -&gt;emailOutputOnFailure(&#39;taylor@example.com&#39;);
</code></pre><blockquote><p><strong>注意</strong><code>emailOutputTo</code>, <code>emailOutputOnFailure</code>, <code>sendOutputTo</code> 和 <code>appendOutputTo</code> 是 <code>command</code> 和 <code>exec</code> 独有的方法。</p></blockquote><p><a name="task-hooks"></a></p><h2 id="任务钩子" tabindex="-1"><a class="header-anchor" href="#任务钩子" aria-hidden="true">#</a> 任务钩子</h2><p>使用 <code>before</code> 和 <code>after</code> 方法，你可以决定在调度任务执行前或者执行后来运行代码：</p><pre><code>$schedule-&gt;command(&#39;emails:send&#39;)
         -&gt;daily()
         -&gt;before(function () {
             // 任务即将执行。。。
         })
         -&gt;after(function () {
             // 任务已经执行。。。
         });
</code></pre><p>使用 <code>onSuccess</code> 和 <code>onFailure</code> 方法，你可以决定在调度任务成功或者失败运行代码。失败表示 Artisan 或系统命令以非零退出码终止：</p><pre><code>$schedule-&gt;command(&#39;emails:send&#39;)
         -&gt;daily()
         -&gt;onSuccess(function () {
             // 任务执行成功。。。
         })
         -&gt;onFailure(function () {
             // 任务执行失败。。。
         });
</code></pre><p>如果你的命令有输出，你可以使用<code>after</code>, <code>onSuccess</code> 或 <code>onFailure</code>钩子并传入类型为<code>Illuminate\\Support\\Stringable</code>的<code>$output</code>参数的闭包来访问任务输出：</p><pre><code>use Illuminate\\Support\\Stringable;

$schedule-&gt;command(&#39;emails:send&#39;)
         -&gt;daily()
         -&gt;onSuccess(function (Stringable $output) {
             // The task succeeded...
         })
         -&gt;onFailure(function (Stringable $output) {
             // The task failed...
         });
</code></pre><p><a name="pinging-urls"></a></p><h4 id="pinging-网址" tabindex="-1"><a class="header-anchor" href="#pinging-网址" aria-hidden="true">#</a> Pinging 网址</h4>`,26),v=t("code",null,"pingBefore",-1),k=t("code",null,"thenPing",-1),y={href:"https://envoyer.io",target:"_blank",rel:"noopener noreferrer"},b=n(`<pre><code>$schedule-&gt;command(&#39;emails:send&#39;)
         -&gt;daily()
         -&gt;pingBefore($url)
         -&gt;thenPing($url);
</code></pre><p>只有当条件为 <code>true</code> 时，才可以使用 <code>pingBeforeIf</code> 和 <code>thenPingIf</code> 方法来 ping 指定 URL ：</p><pre><code>$schedule-&gt;command(&#39;emails:send&#39;)
         -&gt;daily()
         -&gt;pingBeforeIf($condition, $url)
         -&gt;thenPingIf($condition, $url);
</code></pre><p>当任务成功或失败时，可使用 <code>pingOnSuccess</code> 和 <code>pingOnFailure</code> 方法来 ping 给定 URL。失败表示 Artisan 或系统命令以非零退出码终止：</p><pre><code>$schedule-&gt;command(&#39;emails:send&#39;)
         -&gt;daily()
         -&gt;pingOnSuccess($successUrl)
         -&gt;pingOnFailure($failureUrl);
</code></pre><p>所有 ping 方法都依赖 Guzzle HTTP 库。通常，Guzzle 已在所有新的 Laravel 项目中默认安装，不过，若意外将 Guzzle 删除，则可以使用 Composer 包管理器将 Guzzle 手动安装到项目中：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">composer</span> require guzzlehttp/guzzle
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a name="events"></a></p><h2 id="事件" tabindex="-1"><a class="header-anchor" href="#事件" aria-hidden="true">#</a> 事件</h2><p>如果需要，你可以监听调度程序调度的 <a href="./events">事件</a>。通常，事件侦听器映射将在你的应用程序的 <code>App\\Providers\\EventServiceProvider</code> 类中定义：</p><pre><code>/**
 * 应用的事件监听器映射
 *
 * @var array
 */
protected $listen = [
    &#39;Illuminate\\Console\\Events\\ScheduledTaskStarting&#39; =&gt; [
        &#39;App\\Listeners\\LogScheduledTaskStarting&#39;,
    ],

    &#39;Illuminate\\Console\\Events\\ScheduledTaskFinished&#39; =&gt; [
        &#39;App\\Listeners\\LogScheduledTaskFinished&#39;,
    ],

    &#39;Illuminate\\Console\\Events\\ScheduledBackgroundTaskFinished&#39; =&gt; [
        &#39;App\\Listeners\\LogScheduledBackgroundTaskFinished&#39;,
    ],

    &#39;Illuminate\\Console\\Events\\ScheduledTaskSkipped&#39; =&gt; [
        &#39;App\\Listeners\\LogScheduledTaskSkipped&#39;,
    ],

    &#39;Illuminate\\Console\\Events\\ScheduledTaskFailed&#39; =&gt; [
        &#39;App\\Listeners\\LogScheduledTaskFailed&#39;,
    ],
];
</code></pre>`,11);function x($,S){const a=o("ExternalLinkIcon");return c(),r("div",null,[i,t("p",null,[e("除了调用闭包这种方式来调度外，你还可以调用 "),t("a",p,[e("可调用对象"),d(a)]),e("。 可调用对象是简单的 PHP 类，包含一个 "),u,e(" 方法：")]),h,t("p",null,[e("因此，当使用 Laravel 的调度程序时，我们只需要向服务器添加一个 cron 配置项，该项每分钟运行一次 "),g,e(" 命令。如果你不知道如何向服务器添加 cron 配置项，请考虑使用 "),t("a",m,[e("Laravel Forge"),d(a)]),e(" 之类的服务来为你管理 cron 配置项：")]),f,t("p",null,[e("使用 "),v,e(" 和 "),k,e(" 方法，你可以在任务完成之前或完成之后来 ping 指定的 URL。当前方法在通知外部服务，如 "),t("a",y,[e("Envoyer"),d(a)]),e("，计划任务在将要执行或已完成时会很有用：")]),b])}const _=s(l,[["render",x],["__file","scheduling.html.vue"]]);export{_ as default};
