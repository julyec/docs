import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{r as d,o as i,c as r,b as t,d as e,e as s,a as n}from"./app-8cdff07c.js";const c={},u=n(`<h1 id="task-scheduling" tabindex="-1"><a class="header-anchor" href="#task-scheduling" aria-hidden="true">#</a> Task Scheduling</h1><ul><li><a href="#introduction">Introduction</a></li><li><a href="#defining-schedules">Defining Schedules</a><ul><li><a href="#scheduling-artisan-commands">Scheduling Artisan Commands</a></li><li><a href="#scheduling-queued-jobs">Scheduling Queued Jobs</a></li><li><a href="#scheduling-shell-commands">Scheduling Shell Commands</a></li><li><a href="#schedule-frequency-options">Schedule Frequency Options</a></li><li><a href="#timezones">Timezones</a></li><li><a href="#preventing-task-overlaps">Preventing Task Overlaps</a></li><li><a href="#running-tasks-on-one-server">Running Tasks On One Server</a></li><li><a href="#background-tasks">Background Tasks</a></li><li><a href="#maintenance-mode">Maintenance Mode</a></li></ul></li><li><a href="#running-the-scheduler">Running The Scheduler</a><ul><li><a href="#sub-minute-scheduled-tasks">Sub-Minute Scheduled Tasks</a></li><li><a href="#running-the-scheduler-locally">Running The Scheduler Locally</a></li></ul></li><li><a href="#task-output">Task Output</a></li><li><a href="#task-hooks">Task Hooks</a></li><li><a href="#events">Events</a></li></ul><p><a name="introduction"></a></p><h2 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h2><p>In the past, you may have written a cron configuration entry for each task you needed to schedule on your server. However, this can quickly become a pain because your task schedule is no longer in source control and you must SSH into your server to view your existing cron entries or add additional entries.</p><p>Laravel&#39;s command scheduler offers a fresh approach to managing scheduled tasks on your server. The scheduler allows you to fluently and expressively define your command schedule within your Laravel application itself. When using the scheduler, only a single cron entry is needed on your server. Your task schedule is defined in the <code>app/Console/Kernel.php</code> file&#39;s <code>schedule</code> method. To help you get started, a simple example is defined within the method.</p><p><a name="defining-schedules"></a></p><h2 id="defining-schedules" tabindex="-1"><a class="header-anchor" href="#defining-schedules" aria-hidden="true">#</a> Defining Schedules</h2><p>You may define all of your scheduled tasks in the <code>schedule</code> method of your application&#39;s <code>App\\Console\\Kernel</code> class. To get started, let&#39;s take a look at an example. In this example, we will schedule a closure to be called every day at midnight. Within the closure we will execute a database query to clear a table:</p><pre><code>&lt;?php

namespace App\\Console;

use Illuminate\\Console\\Scheduling\\Schedule;
use Illuminate\\Foundation\\Console\\Kernel as ConsoleKernel;
use Illuminate\\Support\\Facades\\DB;

class Kernel extends ConsoleKernel
{
    /**
     * Define the application&#39;s command schedule.
     */
    protected function schedule(Schedule $schedule): void
    {
        $schedule-&gt;call(function () {
            DB::table(&#39;recent_users&#39;)-&gt;delete();
        })-&gt;daily();
    }
}
</code></pre>`,10),l={href:"https://secure.php.net/manual/en/language.oop5.magic.php#object.invoke",target:"_blank",rel:"noopener noreferrer"},h=t("code",null,"__invoke",-1),p=n(`<pre><code>$schedule-&gt;call(new DeleteRecentUsers)-&gt;daily();
</code></pre><p>If you would like to view an overview of your scheduled tasks and the next time they are scheduled to run, you may use the <code>schedule:list</code> Artisan command:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan schedule:list
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a name="scheduling-artisan-commands"></a></p><h3 id="scheduling-artisan-commands" tabindex="-1"><a class="header-anchor" href="#scheduling-artisan-commands" aria-hidden="true">#</a> Scheduling Artisan Commands</h3><p>In addition to scheduling closures, you may also schedule <a href="./artisan">Artisan commands</a> and system commands. For example, you may use the <code>command</code> method to schedule an Artisan command using either the command&#39;s name or class.</p><p>When scheduling Artisan commands using the command&#39;s class name, you may pass an array of additional command-line arguments that should be provided to the command when it is invoked:</p><pre><code>use App\\Console\\Commands\\SendEmailsCommand;

$schedule-&gt;command(&#39;emails:send Taylor --force&#39;)-&gt;daily();

$schedule-&gt;command(SendEmailsCommand::class, [&#39;Taylor&#39;, &#39;--force&#39;])-&gt;daily();
</code></pre><p><a name="scheduling-queued-jobs"></a></p><h3 id="scheduling-queued-jobs" tabindex="-1"><a class="header-anchor" href="#scheduling-queued-jobs" aria-hidden="true">#</a> Scheduling Queued Jobs</h3><p>The <code>job</code> method may be used to schedule a <a href="./queues">queued job</a>. This method provides a convenient way to schedule queued jobs without using the <code>call</code> method to define closures to queue the job:</p><pre><code>use App\\Jobs\\Heartbeat;

$schedule-&gt;job(new Heartbeat)-&gt;everyFiveMinutes();
</code></pre><p>Optional second and third arguments may be provided to the <code>job</code> method which specifies the queue name and queue connection that should be used to queue the job:</p><pre><code>use App\\Jobs\\Heartbeat;

// Dispatch the job to the &quot;heartbeats&quot; queue on the &quot;sqs&quot; connection...
$schedule-&gt;job(new Heartbeat, &#39;heartbeats&#39;, &#39;sqs&#39;)-&gt;everyFiveMinutes();
</code></pre><p><a name="scheduling-shell-commands"></a></p><h3 id="scheduling-shell-commands" tabindex="-1"><a class="header-anchor" href="#scheduling-shell-commands" aria-hidden="true">#</a> Scheduling Shell Commands</h3><p>The <code>exec</code> method may be used to issue a command to the operating system:</p><pre><code>$schedule-&gt;exec(&#39;node /home/forge/script.js&#39;)-&gt;daily();
</code></pre><p><a name="schedule-frequency-options"></a></p><h3 id="schedule-frequency-options" tabindex="-1"><a class="header-anchor" href="#schedule-frequency-options" aria-hidden="true">#</a> Schedule Frequency Options</h3><p>We&#39;ve already seen a few examples of how you may configure a task to run at specified intervals. However, there are many more task schedule frequencies that you may assign to a task:</p><div class="overflow-auto"><table><thead><tr><th>Method</th><th>Description</th></tr></thead><tbody><tr><td><code>-&gt;cron(&#39;* * * * *&#39;);</code></td><td>Run the task on a custom cron schedule</td></tr><tr><td><code>-&gt;everySecond();</code></td><td>Run the task every second</td></tr><tr><td><code>-&gt;everyTwoSeconds();</code></td><td>Run the task every two seconds</td></tr><tr><td><code>-&gt;everyFiveSeconds();</code></td><td>Run the task every five seconds</td></tr><tr><td><code>-&gt;everyTenSeconds();</code></td><td>Run the task every ten seconds</td></tr><tr><td><code>-&gt;everyFifteenSeconds();</code></td><td>Run the task every fifteen seconds</td></tr><tr><td><code>-&gt;everyTwentySeconds();</code></td><td>Run the task every twenty seconds</td></tr><tr><td><code>-&gt;everyThirtySeconds();</code></td><td>Run the task every thirty seconds</td></tr><tr><td><code>-&gt;everyMinute();</code></td><td>Run the task every minute</td></tr><tr><td><code>-&gt;everyTwoMinutes();</code></td><td>Run the task every two minutes</td></tr><tr><td><code>-&gt;everyThreeMinutes();</code></td><td>Run the task every three minutes</td></tr><tr><td><code>-&gt;everyFourMinutes();</code></td><td>Run the task every four minutes</td></tr><tr><td><code>-&gt;everyFiveMinutes();</code></td><td>Run the task every five minutes</td></tr><tr><td><code>-&gt;everyTenMinutes();</code></td><td>Run the task every ten minutes</td></tr><tr><td><code>-&gt;everyFifteenMinutes();</code></td><td>Run the task every fifteen minutes</td></tr><tr><td><code>-&gt;everyThirtyMinutes();</code></td><td>Run the task every thirty minutes</td></tr><tr><td><code>-&gt;hourly();</code></td><td>Run the task every hour</td></tr><tr><td><code>-&gt;hourlyAt(17);</code></td><td>Run the task every hour at 17 minutes past the hour</td></tr><tr><td><code>-&gt;everyOddHour($minutes = 0);</code></td><td>Run the task every odd hour</td></tr><tr><td><code>-&gt;everyTwoHours($minutes = 0);</code></td><td>Run the task every two hours</td></tr><tr><td><code>-&gt;everyThreeHours($minutes = 0);</code></td><td>Run the task every three hours</td></tr><tr><td><code>-&gt;everyFourHours($minutes = 0);</code></td><td>Run the task every four hours</td></tr><tr><td><code>-&gt;everySixHours($minutes = 0);</code></td><td>Run the task every six hours</td></tr><tr><td><code>-&gt;daily();</code></td><td>Run the task every day at midnight</td></tr><tr><td><code>-&gt;dailyAt(&#39;13:00&#39;);</code></td><td>Run the task every day at 13:00</td></tr><tr><td><code>-&gt;twiceDaily(1, 13);</code></td><td>Run the task daily at 1:00 &amp; 13:00</td></tr><tr><td><code>-&gt;twiceDailyAt(1, 13, 15);</code></td><td>Run the task daily at 1:15 &amp; 13:15</td></tr><tr><td><code>-&gt;weekly();</code></td><td>Run the task every Sunday at 00:00</td></tr><tr><td><code>-&gt;weeklyOn(1, &#39;8:00&#39;);</code></td><td>Run the task every week on Monday at 8:00</td></tr><tr><td><code>-&gt;monthly();</code></td><td>Run the task on the first day of every month at 00:00</td></tr><tr><td><code>-&gt;monthlyOn(4, &#39;15:00&#39;);</code></td><td>Run the task every month on the 4th at 15:00</td></tr><tr><td><code>-&gt;twiceMonthly(1, 16, &#39;13:00&#39;);</code></td><td>Run the task monthly on the 1st and 16th at 13:00</td></tr><tr><td><code>-&gt;lastDayOfMonth(&#39;15:00&#39;);</code></td><td>Run the task on the last day of the month at 15:00</td></tr><tr><td><code>-&gt;quarterly();</code></td><td>Run the task on the first day of every quarter at 00:00</td></tr><tr><td><code>-&gt;quarterlyOn(4, &#39;14:00&#39;);</code></td><td>Run the task every quarter on the 4th at 14:00</td></tr><tr><td><code>-&gt;yearly();</code></td><td>Run the task on the first day of every year at 00:00</td></tr><tr><td><code>-&gt;yearlyOn(6, 1, &#39;17:00&#39;);</code></td><td>Run the task every year on June 1st at 17:00</td></tr><tr><td><code>-&gt;timezone(&#39;America/New_York&#39;);</code></td><td>Set the timezone for the task</td></tr></tbody></table></div><p>These methods may be combined with additional constraints to create even more finely tuned schedules that only run on certain days of the week. For example, you may schedule a command to run weekly on Monday:</p><pre><code>// Run once per week on Monday at 1 PM...
$schedule-&gt;call(function () {
    // ...
})-&gt;weekly()-&gt;mondays()-&gt;at(&#39;13:00&#39;);

// Run hourly from 8 AM to 5 PM on weekdays...
$schedule-&gt;command(&#39;foo&#39;)
          -&gt;weekdays()
          -&gt;hourly()
          -&gt;timezone(&#39;America/Chicago&#39;)
          -&gt;between(&#39;8:00&#39;, &#39;17:00&#39;);
</code></pre><p>A list of additional schedule constraints may be found below:</p><div class="overflow-auto"><table><thead><tr><th>Method</th><th>Description</th></tr></thead><tbody><tr><td><code>-&gt;weekdays();</code></td><td>Limit the task to weekdays</td></tr><tr><td><code>-&gt;weekends();</code></td><td>Limit the task to weekends</td></tr><tr><td><code>-&gt;sundays();</code></td><td>Limit the task to Sunday</td></tr><tr><td><code>-&gt;mondays();</code></td><td>Limit the task to Monday</td></tr><tr><td><code>-&gt;tuesdays();</code></td><td>Limit the task to Tuesday</td></tr><tr><td><code>-&gt;wednesdays();</code></td><td>Limit the task to Wednesday</td></tr><tr><td><code>-&gt;thursdays();</code></td><td>Limit the task to Thursday</td></tr><tr><td><code>-&gt;fridays();</code></td><td>Limit the task to Friday</td></tr><tr><td><code>-&gt;saturdays();</code></td><td>Limit the task to Saturday</td></tr><tr><td><code>-&gt;days(array|mixed);</code></td><td>Limit the task to specific days</td></tr><tr><td><code>-&gt;between($startTime, $endTime);</code></td><td>Limit the task to run between start and end times</td></tr><tr><td><code>-&gt;unlessBetween($startTime, $endTime);</code></td><td>Limit the task to not run between start and end times</td></tr><tr><td><code>-&gt;when(Closure);</code></td><td>Limit the task based on a truth test</td></tr><tr><td><code>-&gt;environments($env);</code></td><td>Limit the task to specific environments</td></tr></tbody></table></div><p><a name="day-constraints"></a></p><h4 id="day-constraints" tabindex="-1"><a class="header-anchor" href="#day-constraints" aria-hidden="true">#</a> Day Constraints</h4><p>The <code>days</code> method may be used to limit the execution of a task to specific days of the week. For example, you may schedule a command to run hourly on Sundays and Wednesdays:</p><pre><code>$schedule-&gt;command(&#39;emails:send&#39;)
                -&gt;hourly()
                -&gt;days([0, 3]);
</code></pre><p>Alternatively, you may use the constants available on the <code>Illuminate\\Console\\Scheduling\\Schedule</code> class when defining the days on which a task should run:</p><pre><code>use Illuminate\\Console\\Scheduling\\Schedule;

$schedule-&gt;command(&#39;emails:send&#39;)
                -&gt;hourly()
                -&gt;days([Schedule::SUNDAY, Schedule::WEDNESDAY]);
</code></pre><p><a name="between-time-constraints"></a></p><h4 id="between-time-constraints" tabindex="-1"><a class="header-anchor" href="#between-time-constraints" aria-hidden="true">#</a> Between Time Constraints</h4><p>The <code>between</code> method may be used to limit the execution of a task based on the time of day:</p><pre><code>$schedule-&gt;command(&#39;emails:send&#39;)
                    -&gt;hourly()
                    -&gt;between(&#39;7:00&#39;, &#39;22:00&#39;);
</code></pre><p>Similarly, the <code>unlessBetween</code> method can be used to exclude the execution of a task for a period of time:</p><pre><code>$schedule-&gt;command(&#39;emails:send&#39;)
                    -&gt;hourly()
                    -&gt;unlessBetween(&#39;23:00&#39;, &#39;4:00&#39;);
</code></pre><p><a name="truth-test-constraints"></a></p><h4 id="truth-test-constraints" tabindex="-1"><a class="header-anchor" href="#truth-test-constraints" aria-hidden="true">#</a> Truth Test Constraints</h4><p>The <code>when</code> method may be used to limit the execution of a task based on the result of a given truth test. In other words, if the given closure returns <code>true</code>, the task will execute as long as no other constraining conditions prevent the task from running:</p><pre><code>$schedule-&gt;command(&#39;emails:send&#39;)-&gt;daily()-&gt;when(function () {
    return true;
});
</code></pre><p>The <code>skip</code> method may be seen as the inverse of <code>when</code>. If the <code>skip</code> method returns <code>true</code>, the scheduled task will not be executed:</p><pre><code>$schedule-&gt;command(&#39;emails:send&#39;)-&gt;daily()-&gt;skip(function () {
    return true;
});
</code></pre><p>When using chained <code>when</code> methods, the scheduled command will only execute if all <code>when</code> conditions return <code>true</code>.</p><p><a name="environment-constraints"></a></p><h4 id="environment-constraints" tabindex="-1"><a class="header-anchor" href="#environment-constraints" aria-hidden="true">#</a> Environment Constraints</h4><p>The <code>environments</code> method may be used to execute tasks only on the given environments (as defined by the <code>APP_ENV</code> <a href="./configuration#environment-configuration">environment variable</a>):</p><pre><code>$schedule-&gt;command(&#39;emails:send&#39;)
            -&gt;daily()
            -&gt;environments([&#39;staging&#39;, &#39;production&#39;]);
</code></pre><p><a name="timezones"></a></p><h3 id="timezones" tabindex="-1"><a class="header-anchor" href="#timezones" aria-hidden="true">#</a> Timezones</h3><p>Using the <code>timezone</code> method, you may specify that a scheduled task&#39;s time should be interpreted within a given timezone:</p><pre><code>$schedule-&gt;command(&#39;report:generate&#39;)
         -&gt;timezone(&#39;America/New_York&#39;)
         -&gt;at(&#39;2:00&#39;)
</code></pre><p>If you are repeatedly assigning the same timezone to all of your scheduled tasks, you may wish to define a <code>scheduleTimezone</code> method in your <code>App\\Console\\Kernel</code> class. This method should return the default timezone that should be assigned to all scheduled tasks:</p><pre><code>use DateTimeZone;

/**
 * Get the timezone that should be used by default for scheduled events.
 */
protected function scheduleTimezone(): DateTimeZone|string|null
{
    return &#39;America/Chicago&#39;;
}
</code></pre><blockquote><p><strong>Warning</strong><br> Remember that some timezones utilize daylight savings time. When daylight saving time changes occur, your scheduled task may run twice or even not run at all. For this reason, we recommend avoiding timezone scheduling when possible.</p></blockquote><p><a name="preventing-task-overlaps"></a></p><h3 id="preventing-task-overlaps" tabindex="-1"><a class="header-anchor" href="#preventing-task-overlaps" aria-hidden="true">#</a> Preventing Task Overlaps</h3><p>By default, scheduled tasks will be run even if the previous instance of the task is still running. To prevent this, you may use the <code>withoutOverlapping</code> method:</p><pre><code>$schedule-&gt;command(&#39;emails:send&#39;)-&gt;withoutOverlapping();
</code></pre><p>In this example, the <code>emails:send</code> <a href="./artisan">Artisan command</a> will be run every minute if it is not already running. The <code>withoutOverlapping</code> method is especially useful if you have tasks that vary drastically in their execution time, preventing you from predicting exactly how long a given task will take.</p><p>If needed, you may specify how many minutes must pass before the &quot;without overlapping&quot; lock expires. By default, the lock will expire after 24 hours:</p><pre><code>$schedule-&gt;command(&#39;emails:send&#39;)-&gt;withoutOverlapping(10);
</code></pre><p>Behind the scenes, the <code>withoutOverlapping</code> method utilizes your application&#39;s <a href="./cache">cache</a> to obtain locks. If necessary, you can clear these cache locks using the <code>schedule:clear-cache</code> Artisan command. This is typically only necessary if a task becomes stuck due to an unexpected server problem.</p><p><a name="running-tasks-on-one-server"></a></p><h3 id="running-tasks-on-one-server" tabindex="-1"><a class="header-anchor" href="#running-tasks-on-one-server" aria-hidden="true">#</a> Running Tasks On One Server</h3><blockquote><p><strong>Warning</strong><br> To utilize this feature, your application must be using the <code>database</code>, <code>memcached</code>, <code>dynamodb</code>, or <code>redis</code> cache driver as your application&#39;s default cache driver. In addition, all servers must be communicating with the same central cache server.</p></blockquote><p>If your application&#39;s scheduler is running on multiple servers, you may limit a scheduled job to only execute on a single server. For instance, assume you have a scheduled task that generates a new report every Friday night. If the task scheduler is running on three worker servers, the scheduled task will run on all three servers and generate the report three times. Not good!</p><p>To indicate that the task should run on only one server, use the <code>onOneServer</code> method when defining the scheduled task. The first server to obtain the task will secure an atomic lock on the job to prevent other servers from running the same task at the same time:</p><pre><code>$schedule-&gt;command(&#39;report:generate&#39;)
                -&gt;fridays()
                -&gt;at(&#39;17:00&#39;)
                -&gt;onOneServer();
</code></pre><p><a name="naming-unique-jobs"></a></p><h4 id="naming-single-server-jobs" tabindex="-1"><a class="header-anchor" href="#naming-single-server-jobs" aria-hidden="true">#</a> Naming Single Server Jobs</h4><p>Sometimes you may need to schedule the same job to be dispatched with different parameters, while still instructing Laravel to run each permutation of the job on a single server. To accomplish this, you may assign each schedule definition a unique name via the <code>name</code> method:</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token variable">$schedule</span><span class="token operator">-&gt;</span><span class="token function">job</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">CheckUptime</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;https://laravel.com&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token operator">-&gt;</span><span class="token function">name</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;check_uptime:laravel.com&#39;</span><span class="token punctuation">)</span>
            <span class="token operator">-&gt;</span><span class="token function">everyFiveMinutes</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token operator">-&gt;</span><span class="token function">onOneServer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token variable">$schedule</span><span class="token operator">-&gt;</span><span class="token function">job</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">CheckUptime</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;https://vapor.laravel.com&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token operator">-&gt;</span><span class="token function">name</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;check_uptime:vapor.laravel.com&#39;</span><span class="token punctuation">)</span>
            <span class="token operator">-&gt;</span><span class="token function">everyFiveMinutes</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token operator">-&gt;</span><span class="token function">onOneServer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Similarly, scheduled closures must be assigned a name if they are intended to be run on one server:</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token variable">$schedule</span><span class="token operator">-&gt;</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">fn</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token class-name static-context">User</span><span class="token operator">::</span><span class="token function">resetApiRequestCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token operator">-&gt;</span><span class="token function">name</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;reset-api-request-count&#39;</span><span class="token punctuation">)</span>
    <span class="token operator">-&gt;</span><span class="token function">daily</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token operator">-&gt;</span><span class="token function">onOneServer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="background-tasks"></a></p><h3 id="background-tasks" tabindex="-1"><a class="header-anchor" href="#background-tasks" aria-hidden="true">#</a> Background Tasks</h3><p>By default, multiple tasks scheduled at the same time will execute sequentially based on the order they are defined in your <code>schedule</code> method. If you have long-running tasks, this may cause subsequent tasks to start much later than anticipated. If you would like to run tasks in the background so that they may all run simultaneously, you may use the <code>runInBackground</code> method:</p><pre><code>$schedule-&gt;command(&#39;analytics:report&#39;)
         -&gt;daily()
         -&gt;runInBackground();
</code></pre><blockquote><p><strong>Warning</strong><br> The <code>runInBackground</code> method may only be used when scheduling tasks via the <code>command</code> and <code>exec</code> methods.</p></blockquote><p><a name="maintenance-mode"></a></p><h3 id="maintenance-mode" tabindex="-1"><a class="header-anchor" href="#maintenance-mode" aria-hidden="true">#</a> Maintenance Mode</h3><p>Your application&#39;s scheduled tasks will not run when the application is in <a href="./configuration#maintenance-mode">maintenance mode</a>, since we don&#39;t want your tasks to interfere with any unfinished maintenance you may be performing on your server. However, if you would like to force a task to run even in maintenance mode, you may call the <code>evenInMaintenanceMode</code> method when defining the task:</p><pre><code>$schedule-&gt;command(&#39;emails:send&#39;)-&gt;evenInMaintenanceMode();
</code></pre><p><a name="running-the-scheduler"></a></p><h2 id="running-the-scheduler" tabindex="-1"><a class="header-anchor" href="#running-the-scheduler" aria-hidden="true">#</a> Running The Scheduler</h2><p>Now that we have learned how to define scheduled tasks, let&#39;s discuss how to actually run them on our server. The <code>schedule:run</code> Artisan command will evaluate all of your scheduled tasks and determine if they need to run based on the server&#39;s current time.</p>`,88),m=t("code",null,"schedule:run",-1),g={href:"https://forge.laravel.com",target:"_blank",rel:"noopener noreferrer"},y=n(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>* * * * * <span class="token builtin class-name">cd</span> /path-to-your-project <span class="token operator">&amp;&amp;</span> php artisan schedule:run <span class="token operator">&gt;&gt;</span> /dev/null <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a name="sub-minute-scheduled-tasks"></a></p><h3 id="sub-minute-scheduled-tasks" tabindex="-1"><a class="header-anchor" href="#sub-minute-scheduled-tasks" aria-hidden="true">#</a> Sub-Minute Scheduled Tasks</h3><p>On most operating systems, cron jobs are limited to running a maximum of once per minute. However, Laravel&#39;s scheduler allows you to schedule tasks to run at more frequent intervals, even as often as once per second:</p><pre><code>$schedule-&gt;call(function () {
    DB::table(&#39;recent_users&#39;)-&gt;delete();
})-&gt;everySecond();
</code></pre><p>When sub-minute tasks are defined within your application, the <code>schedule:run</code> command will continue running until the end of the current minute instead of exiting immediately. This allows the command to invoke all required sub-minute tasks throughout the minute.</p><p>Since sub-minute tasks that take longer than expected to run could delay the execution of later sub-minute tasks, it is recommend that all sub-minute tasks dispatch queued jobs or background commands to handle the actual task processing:</p><pre><code>use App\\Jobs\\DeleteRecentUsers;

$schedule-&gt;job(new DeleteRecentUsers)-&gt;everyTenSeconds();

$schedule-&gt;command(&#39;users:delete&#39;)-&gt;everyTenSeconds()-&gt;runInBackground();
</code></pre><p><a name="interrupting-sub-minute-tasks"></a></p><h4 id="interrupting-sub-minute-tasks" tabindex="-1"><a class="header-anchor" href="#interrupting-sub-minute-tasks" aria-hidden="true">#</a> Interrupting Sub-Minute Tasks</h4><p>As the <code>schedule:run</code> command runs for the entire minute of invocation when sub-minute tasks are defined, you may sometimes need to interrupt the command when deploying your application. Otherwise, an instance of the <code>schedule:run</code> command that is already running would continue using your application&#39;s previously deployed code until the current minute ends.</p><p>To interrupt in-progress <code>schedule:run</code> invocations, you may add the <code>schedule:interrupt</code> command to your application&#39;s deployment script. This command should be invoked after your application is finished deploying:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan schedule:interrupt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a name="running-the-scheduler-locally"></a></p><h3 id="running-the-scheduler-locally" tabindex="-1"><a class="header-anchor" href="#running-the-scheduler-locally" aria-hidden="true">#</a> Running The Scheduler Locally</h3><p>Typically, you would not add a scheduler cron entry to your local development machine. Instead, you may use the <code>schedule:work</code> Artisan command. This command will run in the foreground and invoke the scheduler every minute until you terminate the command:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan schedule:work
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a name="task-output"></a></p><h2 id="task-output" tabindex="-1"><a class="header-anchor" href="#task-output" aria-hidden="true">#</a> Task Output</h2><p>The Laravel scheduler provides several convenient methods for working with the output generated by scheduled tasks. First, using the <code>sendOutputTo</code> method, you may send the output to a file for later inspection:</p><pre><code>$schedule-&gt;command(&#39;emails:send&#39;)
         -&gt;daily()
         -&gt;sendOutputTo($filePath);
</code></pre><p>If you would like to append the output to a given file, you may use the <code>appendOutputTo</code> method:</p><pre><code>$schedule-&gt;command(&#39;emails:send&#39;)
         -&gt;daily()
         -&gt;appendOutputTo($filePath);
</code></pre><p>Using the <code>emailOutputTo</code> method, you may email the output to an email address of your choice. Before emailing the output of a task, you should configure Laravel&#39;s <a href="./mail">email services</a>:</p><pre><code>$schedule-&gt;command(&#39;report:generate&#39;)
         -&gt;daily()
         -&gt;sendOutputTo($filePath)
         -&gt;emailOutputTo(&#39;taylor@example.com&#39;);
</code></pre><p>If you only want to email the output if the scheduled Artisan or system command terminates with a non-zero exit code, use the <code>emailOutputOnFailure</code> method:</p><pre><code>$schedule-&gt;command(&#39;report:generate&#39;)
         -&gt;daily()
         -&gt;emailOutputOnFailure(&#39;taylor@example.com&#39;);
</code></pre><blockquote><p><strong>Warning</strong><br> The <code>emailOutputTo</code>, <code>emailOutputOnFailure</code>, <code>sendOutputTo</code>, and <code>appendOutputTo</code> methods are exclusive to the <code>command</code> and <code>exec</code> methods.</p></blockquote><p><a name="task-hooks"></a></p><h2 id="task-hooks" tabindex="-1"><a class="header-anchor" href="#task-hooks" aria-hidden="true">#</a> Task Hooks</h2><p>Using the <code>before</code> and <code>after</code> methods, you may specify code to be executed before and after the scheduled task is executed:</p><pre><code>$schedule-&gt;command(&#39;emails:send&#39;)
         -&gt;daily()
         -&gt;before(function () {
             // The task is about to execute...
         })
         -&gt;after(function () {
             // The task has executed...
         });
</code></pre><p>The <code>onSuccess</code> and <code>onFailure</code> methods allow you to specify code to be executed if the scheduled task succeeds or fails. A failure indicates that the scheduled Artisan or system command terminated with a non-zero exit code:</p><pre><code>$schedule-&gt;command(&#39;emails:send&#39;)
         -&gt;daily()
         -&gt;onSuccess(function () {
             // The task succeeded...
         })
         -&gt;onFailure(function () {
             // The task failed...
         });
</code></pre><p>If output is available from your command, you may access it in your <code>after</code>, <code>onSuccess</code> or <code>onFailure</code> hooks by type-hinting an <code>Illuminate\\Support\\Stringable</code> instance as the <code>$output</code> argument of your hook&#39;s closure definition:</p><pre><code>use Illuminate\\Support\\Stringable;

$schedule-&gt;command(&#39;emails:send&#39;)
         -&gt;daily()
         -&gt;onSuccess(function (Stringable $output) {
             // The task succeeded...
         })
         -&gt;onFailure(function (Stringable $output) {
             // The task failed...
         });
</code></pre><p><a name="pinging-urls"></a></p><h4 id="pinging-urls" tabindex="-1"><a class="header-anchor" href="#pinging-urls" aria-hidden="true">#</a> Pinging URLs</h4>`,38),k=t("code",null,"pingBefore",-1),v=t("code",null,"thenPing",-1),f={href:"https://envoyer.io",target:"_blank",rel:"noopener noreferrer"},b=n(`<pre><code>$schedule-&gt;command(&#39;emails:send&#39;)
         -&gt;daily()
         -&gt;pingBefore($url)
         -&gt;thenPing($url);
</code></pre><p>The <code>pingBeforeIf</code> and <code>thenPingIf</code> methods may be used to ping a given URL only if a given condition is <code>true</code>:</p><pre><code>$schedule-&gt;command(&#39;emails:send&#39;)
         -&gt;daily()
         -&gt;pingBeforeIf($condition, $url)
         -&gt;thenPingIf($condition, $url);
</code></pre><p>The <code>pingOnSuccess</code> and <code>pingOnFailure</code> methods may be used to ping a given URL only if the task succeeds or fails. A failure indicates that the scheduled Artisan or system command terminated with a non-zero exit code:</p><pre><code>$schedule-&gt;command(&#39;emails:send&#39;)
         -&gt;daily()
         -&gt;pingOnSuccess($successUrl)
         -&gt;pingOnFailure($failureUrl);
</code></pre><p>All of the ping methods require the Guzzle HTTP library. Guzzle is typically installed in all new Laravel projects by default, but, you may manually install Guzzle into your project using the Composer package manager if it has been accidentally removed:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">composer</span> require guzzlehttp/guzzle
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a name="events"></a></p><h2 id="events" tabindex="-1"><a class="header-anchor" href="#events" aria-hidden="true">#</a> Events</h2><p>If needed, you may listen to <a href="./events">events</a> dispatched by the scheduler. Typically, event listener mappings will be defined within your application&#39;s <code>App\\Providers\\EventServiceProvider</code> class:</p><pre><code>/**
 * The event listener mappings for the application.
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
</code></pre>`,11);function w(T,S){const a=d("ExternalLinkIcon");return i(),r("div",null,[u,t("p",null,[e("In addition to scheduling using closures, you may also schedule "),t("a",l,[e("invokable objects"),s(a)]),e(". Invokable objects are simple PHP classes that contain an "),h,e(" method:")]),p,t("p",null,[e("So, when using Laravel's scheduler, we only need to add a single cron configuration entry to our server that runs the "),m,e(" command every minute. If you do not know how to add cron entries to your server, consider using a service such as "),t("a",g,[e("Laravel Forge"),s(a)]),e(" which can manage the cron entries for you:")]),y,t("p",null,[e("Using the "),k,e(" and "),v,e(" methods, the scheduler can automatically ping a given URL before or after a task is executed. This method is useful for notifying an external service, such as "),t("a",f,[e("Envoyer"),s(a)]),e(", that your scheduled task is beginning or has finished execution:")]),b])}const q=o(c,[["render",w],["__file","scheduling.html.vue"]]);export{q as default};
