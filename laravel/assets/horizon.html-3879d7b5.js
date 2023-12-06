import{_ as s}from"./horizon-example-7829a532.js";import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r,o as l,c as d,b as e,d as o,e as a,a as i}from"./app-06635a3b.js";const c={},u=i('<h1 id="laravel-horizon" tabindex="-1"><a class="header-anchor" href="#laravel-horizon" aria-hidden="true">#</a> Laravel Horizon</h1><ul><li><a href="#introduction">Introduction</a></li><li><a href="#installation">Installation</a><ul><li><a href="#configuration">Configuration</a></li><li><a href="#balancing-strategies">Balancing Strategies</a></li><li><a href="#dashboard-authorization">Dashboard Authorization</a></li><li><a href="#silenced-jobs">Silenced Jobs</a></li></ul></li><li><a href="#upgrading-horizon">Upgrading Horizon</a></li><li><a href="#running-horizon">Running Horizon</a><ul><li><a href="#deploying-horizon">Deploying Horizon</a></li></ul></li><li><a href="#tags">Tags</a></li><li><a href="#notifications">Notifications</a></li><li><a href="#metrics">Metrics</a></li><li><a href="#deleting-failed-jobs">Deleting Failed Jobs</a></li><li><a href="#clearing-jobs-from-queues">Clearing Jobs From Queues</a></li></ul><p><a name="introduction"></a></p><h2 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h2><blockquote><p><strong>Note</strong><br> Before digging into Laravel Horizon, you should familiarize yourself with Laravel&#39;s base <a href="./queues">queue services</a>. Horizon augments Laravel&#39;s queue with additional features that may be confusing if you are not already familiar with the basic queue features offered by Laravel.</p></blockquote>',5),p={href:"https://github.com/laravel/horizon",target:"_blank",rel:"noopener noreferrer"},h=e("a",{href:"./queues"},"Redis queues",-1),m=e("p",null,"When using Horizon, all of your queue worker configuration is stored in a single, simple configuration file. By defining your application's worker configuration in a version controlled file, you may easily scale or modify your application's queue workers when deploying your application.",-1),g=e("img",{src:s},null,-1),f=e("p",null,[e("a",{name:"installation"})],-1),v=e("h2",{id:"installation",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#installation","aria-hidden":"true"},"#"),o(" Installation")],-1),b=e("strong",null,"Warning",-1),y=e("br",null,null,-1),z={href:"https://redis.io",target:"_blank",rel:"noopener noreferrer"},k=e("code",null,"redis",-1),w=e("code",null,"config/queue.php",-1),q=i(`<p>You may install Horizon into your project using the Composer package manager:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">composer</span> require laravel/horizon
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>After installing Horizon, publish its assets using the <code>horizon:install</code> Artisan command:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan horizon:install
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a name="configuration"></a></p><h3 id="configuration" tabindex="-1"><a class="header-anchor" href="#configuration" aria-hidden="true">#</a> Configuration</h3><p>After publishing Horizon&#39;s assets, its primary configuration file will be located at <code>config/horizon.php</code>. This configuration file allows you to configure the queue worker options for your application. Each configuration option includes a description of its purpose, so be sure to thoroughly explore this file.</p><blockquote><p><strong>Warning</strong><br> Horizon uses a Redis connection named <code>horizon</code> internally. This Redis connection name is reserved and should not be assigned to another Redis connection in the <code>database.php</code> configuration file or as the value of the <code>use</code> option in the <code>horizon.php</code> configuration file.</p></blockquote><p><a name="environments"></a></p><h4 id="environments" tabindex="-1"><a class="header-anchor" href="#environments" aria-hidden="true">#</a> Environments</h4><p>After installation, the primary Horizon configuration option that you should familiarize yourself with is the <code>environments</code> configuration option. This configuration option is an array of environments that your application runs on and defines the worker process options for each environment. By default, this entry contains a <code>production</code> and <code>local</code> environment. However, you are free to add more environments as needed:</p><pre><code>&#39;environments&#39; =&gt; [
    &#39;production&#39; =&gt; [
        &#39;supervisor-1&#39; =&gt; [
            &#39;maxProcesses&#39; =&gt; 10,
            &#39;balanceMaxShift&#39; =&gt; 1,
            &#39;balanceCooldown&#39; =&gt; 3,
        ],
    ],

    &#39;local&#39; =&gt; [
        &#39;supervisor-1&#39; =&gt; [
            &#39;maxProcesses&#39; =&gt; 3,
        ],
    ],
],
</code></pre><p>When you start Horizon, it will use the worker process configuration options for the environment that your application is running on. Typically, the environment is determined by the value of the <code>APP_ENV</code> <a href="./configuration#determining-the-current-environment">environment variable</a>. For example, the default <code>local</code> Horizon environment is configured to start three worker processes and automatically balance the number of worker processes assigned to each queue. The default <code>production</code> environment is configured to start a maximum of 10 worker processes and automatically balance the number of worker processes assigned to each queue.</p><blockquote><p><strong>Warning</strong><br> You should ensure that the <code>environments</code> portion of your <code>horizon</code> configuration file contains an entry for each <a href="./configuration#environment-configuration">environment</a> on which you plan to run Horizon.</p></blockquote><p><a name="supervisors"></a></p><h4 id="supervisors" tabindex="-1"><a class="header-anchor" href="#supervisors" aria-hidden="true">#</a> Supervisors</h4><p>As you can see in Horizon&#39;s default configuration file, each environment can contain one or more &quot;supervisors&quot;. By default, the configuration file defines this supervisor as <code>supervisor-1</code>; however, you are free to name your supervisors whatever you want. Each supervisor is essentially responsible for &quot;supervising&quot; a group of worker processes and takes care of balancing worker processes across queues.</p><p>You may add additional supervisors to a given environment if you would like to define a new group of worker processes that should run in that environment. You may choose to do this if you would like to define a different balancing strategy or worker process count for a given queue used by your application.</p><p><a name="default-values"></a></p><h4 id="default-values" tabindex="-1"><a class="header-anchor" href="#default-values" aria-hidden="true">#</a> Default Values</h4><p>Within Horizon&#39;s default configuration file, you will notice a <code>defaults</code> configuration option. This configuration option specifies the default values for your application&#39;s <a href="#supervisors">supervisors</a>. The supervisor&#39;s default configuration values will be merged into the supervisor&#39;s configuration for each environment, allowing you to avoid unnecessary repetition when defining your supervisors.</p><p><a name="balancing-strategies"></a></p><h3 id="balancing-strategies" tabindex="-1"><a class="header-anchor" href="#balancing-strategies" aria-hidden="true">#</a> Balancing Strategies</h3><p>Unlike Laravel&#39;s default queue system, Horizon allows you to choose from three worker balancing strategies: <code>simple</code>, <code>auto</code>, and <code>false</code>. The <code>simple</code> strategy splits incoming jobs evenly between worker processes:</p><pre><code>&#39;balance&#39; =&gt; &#39;simple&#39;,
</code></pre><p>The <code>auto</code> strategy, which is the configuration file&#39;s default, adjusts the number of worker processes per queue based on the current workload of the queue. For example, if your <code>notifications</code> queue has 1,000 pending jobs while your <code>render</code> queue is empty, Horizon will allocate more workers to your <code>notifications</code> queue until the queue is empty.</p><p>When using the <code>auto</code> strategy, you may define the <code>minProcesses</code> and <code>maxProcesses</code> configuration options to control the minimum and the maximum number of worker processes Horizon should scale up and down to:</p><pre><code>&#39;environments&#39; =&gt; [
    &#39;production&#39; =&gt; [
        &#39;supervisor-1&#39; =&gt; [
            &#39;connection&#39; =&gt; &#39;redis&#39;,
            &#39;queue&#39; =&gt; [&#39;default&#39;],
            &#39;balance&#39; =&gt; &#39;auto&#39;,
            &#39;autoScalingStrategy&#39; =&gt; &#39;time&#39;,
            &#39;minProcesses&#39; =&gt; 1,
            &#39;maxProcesses&#39; =&gt; 10,
            &#39;balanceMaxShift&#39; =&gt; 1,
            &#39;balanceCooldown&#39; =&gt; 3,
            &#39;tries&#39; =&gt; 3,
        ],
    ],
],
</code></pre><p>The <code>autoScalingStrategy</code> configuration value determines if Horizon will assign more worker processes to queues based on the total amount of time it will take to clear the queue (<code>time</code> strategy) or by the total number of jobs on the queue (<code>size</code> strategy).</p><p>The <code>balanceMaxShift</code> and <code>balanceCooldown</code> configuration values determine how quickly Horizon will scale to meet worker demand. In the example above, a maximum of one new process will be created or destroyed every three seconds. You are free to tweak these values as necessary based on your application&#39;s needs.</p><p>When the <code>balance</code> option is set to <code>false</code>, the default Laravel behavior will be used, wherein queues are processed in the order they are listed in your configuration.</p><p><a name="dashboard-authorization"></a></p><h3 id="dashboard-authorization" tabindex="-1"><a class="header-anchor" href="#dashboard-authorization" aria-hidden="true">#</a> Dashboard Authorization</h3><p>Horizon exposes a dashboard at the <code>/horizon</code> URI. By default, you will only be able to access this dashboard in the <code>local</code> environment. However, within your <code>app/Providers/HorizonServiceProvider.php</code> file, there is an <a href="./authorization#gates">authorization gate</a> definition. This authorization gate controls access to Horizon in <strong>non-local</strong> environments. You are free to modify this gate as needed to restrict access to your Horizon installation:</p><pre><code>/**
 * Register the Horizon gate.
 *
 * This gate determines who can access Horizon in non-local environments.
 */
protected function gate(): void
{
    Gate::define(&#39;viewHorizon&#39;, function (User $user) {
        return in_array($user-&gt;email, [
            &#39;taylor@laravel.com&#39;,
        ]);
    });
}
</code></pre><p><a name="alternative-authentication-strategies"></a></p><h4 id="alternative-authentication-strategies" tabindex="-1"><a class="header-anchor" href="#alternative-authentication-strategies" aria-hidden="true">#</a> Alternative Authentication Strategies</h4><p>Remember that Laravel automatically injects the authenticated user into the gate closure. If your application is providing Horizon security via another method, such as IP restrictions, then your Horizon users may not need to &quot;login&quot;. Therefore, you will need to change <code>function (User $user)</code> closure signature above to <code>function (User $user = null)</code> in order to force Laravel to not require authentication.</p><p><a name="silenced-jobs"></a></p><h3 id="silenced-jobs" tabindex="-1"><a class="header-anchor" href="#silenced-jobs" aria-hidden="true">#</a> Silenced Jobs</h3><p>Sometimes, you may not be interested in viewing certain jobs dispatched by your application or third-party packages. Instead of these jobs taking up space in your &quot;Completed Jobs&quot; list, you can silence them. To get started, add the job&#39;s class name to the <code>silenced</code> configuration option in your application&#39;s <code>horizon</code> configuration file:</p><pre><code>&#39;silenced&#39; =&gt; [
    App\\Jobs\\ProcessPodcast::class,
],
</code></pre><p>Alternatively, the job you wish to silence can implement the <code>Laravel\\Horizon\\Contracts\\Silenced</code> interface. If a job implements this interface, it will automatically be silenced, even if it is not present in the <code>silenced</code> configuration array:</p><pre><code>use Laravel\\Horizon\\Contracts\\Silenced;

class ProcessPodcast implements ShouldQueue, Silenced
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    // ...
}
</code></pre><p><a name="upgrading-horizon"></a></p><h2 id="upgrading-horizon" tabindex="-1"><a class="header-anchor" href="#upgrading-horizon" aria-hidden="true">#</a> Upgrading Horizon</h2>`,46),x={href:"https://github.com/laravel/horizon/blob/master/UPGRADE.md",target:"_blank",rel:"noopener noreferrer"},_=i(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan horizon:publish
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>To keep the assets up-to-date and avoid issues in future updates, you may add the <code>vendor:publish --tag=laravel-assets</code> command to the <code>post-update-cmd</code> scripts in your application&#39;s <code>composer.json</code> file:</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;post-update-cmd&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">&quot;@php artisan vendor:publish --tag=laravel-assets --ansi --force&quot;</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="running-horizon"></a></p><h2 id="running-horizon" tabindex="-1"><a class="header-anchor" href="#running-horizon" aria-hidden="true">#</a> Running Horizon</h2><p>Once you have configured your supervisors and workers in your application&#39;s <code>config/horizon.php</code> configuration file, you may start Horizon using the <code>horizon</code> Artisan command. This single command will start all of the configured worker processes for the current environment:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan horizon
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>You may pause the Horizon process and instruct it to continue processing jobs using the <code>horizon:pause</code> and <code>horizon:continue</code> Artisan commands:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan horizon:pause

php artisan horizon:continue
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>You may also pause and continue specific Horizon <a href="#supervisors">supervisors</a> using the <code>horizon:pause-supervisor</code> and <code>horizon:continue-supervisor</code> Artisan commands:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan horizon:pause-supervisor supervisor-1

php artisan horizon:continue-supervisor supervisor-1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>You may check the current status of the Horizon process using the <code>horizon:status</code> Artisan command:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan horizon:status
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>You may gracefully terminate the Horizon process using the <code>horizon:terminate</code> Artisan command. Any jobs that are currently being processed by will be completed and then Horizon will stop executing:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan horizon:terminate
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a name="deploying-horizon"></a></p><h3 id="deploying-horizon" tabindex="-1"><a class="header-anchor" href="#deploying-horizon" aria-hidden="true">#</a> Deploying Horizon</h3><p>When you&#39;re ready to deploy Horizon to your application&#39;s actual server, you should configure a process monitor to monitor the <code>php artisan horizon</code> command and restart it if it exits unexpectedly. Don&#39;t worry, we&#39;ll discuss how to install a process monitor below.</p><p>During your application&#39;s deployment process, you should instruct the Horizon process to terminate so that it will be restarted by your process monitor and receive your code changes:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan horizon:terminate
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a name="installing-supervisor"></a></p><h4 id="installing-supervisor" tabindex="-1"><a class="header-anchor" href="#installing-supervisor" aria-hidden="true">#</a> Installing Supervisor</h4><p>Supervisor is a process monitor for the Linux operating system and will automatically restart your <code>horizon</code> process if it stops executing. To install Supervisor on Ubuntu, you may use the following command. If you are not using Ubuntu, you can likely install Supervisor using your operating system&#39;s package manager:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> supervisor
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,24),H=e("strong",null,"Note",-1),j=e("br",null,null,-1),S={href:"https://forge.laravel.com",target:"_blank",rel:"noopener noreferrer"},I=i(`<p><a name="supervisor-configuration"></a></p><h4 id="supervisor-configuration" tabindex="-1"><a class="header-anchor" href="#supervisor-configuration" aria-hidden="true">#</a> Supervisor Configuration</h4><p>Supervisor configuration files are typically stored within your server&#39;s <code>/etc/supervisor/conf.d</code> directory. Within this directory, you may create any number of configuration files that instruct supervisor how your processes should be monitored. For example, let&#39;s create a <code>horizon.conf</code> file that starts and monitors a <code>horizon</code> process:</p><div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code><span class="token section"><span class="token punctuation">[</span><span class="token section-name selector">program:horizon</span><span class="token punctuation">]</span></span>
<span class="token key attr-name">process_name</span><span class="token punctuation">=</span><span class="token value attr-value">%(program_name)s</span>
<span class="token key attr-name">command</span><span class="token punctuation">=</span><span class="token value attr-value">php /home/forge/example.com/artisan horizon</span>
<span class="token key attr-name">autostart</span><span class="token punctuation">=</span><span class="token value attr-value">true</span>
<span class="token key attr-name">autorestart</span><span class="token punctuation">=</span><span class="token value attr-value">true</span>
<span class="token key attr-name">user</span><span class="token punctuation">=</span><span class="token value attr-value">forge</span>
<span class="token key attr-name">redirect_stderr</span><span class="token punctuation">=</span><span class="token value attr-value">true</span>
<span class="token key attr-name">stdout_logfile</span><span class="token punctuation">=</span><span class="token value attr-value">/home/forge/example.com/horizon.log</span>
<span class="token key attr-name">stopwaitsecs</span><span class="token punctuation">=</span><span class="token value attr-value">3600</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>When defining your Supervisor configuration, you should ensure that the value of <code>stopwaitsecs</code> is greater than the number of seconds consumed by your longest running job. Otherwise, Supervisor may kill the job before it is finished processing.</p><blockquote><p><strong>Warning</strong><br> While the examples above are valid for Ubuntu based servers, the location and file extension expected of Supervisor configuration files may vary between other server operating systems. Please consult your server&#39;s documentation for more information.</p></blockquote><p><a name="starting-supervisor"></a></p><h4 id="starting-supervisor" tabindex="-1"><a class="header-anchor" href="#starting-supervisor" aria-hidden="true">#</a> Starting Supervisor</h4><p>Once the configuration file has been created, you may update the Supervisor configuration and start the monitored processes using the following commands:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> supervisorctl reread

<span class="token function">sudo</span> supervisorctl update

<span class="token function">sudo</span> supervisorctl start horizon
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),T=e("strong",null,"Note",-1),A=e("br",null,null,-1),W={href:"http://supervisord.org/index.html",target:"_blank",rel:"noopener noreferrer"},L=i(`<p><a name="tags"></a></p><h2 id="tags" tabindex="-1"><a class="header-anchor" href="#tags" aria-hidden="true">#</a> Tags</h2><p>Horizon allows you to assign “tags” to jobs, including mailables, broadcast events, notifications, and queued event listeners. In fact, Horizon will intelligently and automatically tag most jobs depending on the Eloquent models that are attached to the job. For example, take a look at the following job:</p><pre><code>&lt;?php

namespace App\\Jobs;

use App\\Models\\Video;
use Illuminate\\Bus\\Queueable;
use Illuminate\\Contracts\\Queue\\ShouldQueue;
use Illuminate\\Foundation\\Bus\\Dispatchable;
use Illuminate\\Queue\\InteractsWithQueue;
use Illuminate\\Queue\\SerializesModels;

class RenderVideo implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * Create a new job instance.
     */
    public function __construct(
        public Video $video,
    ) {}

    /**
     * Execute the job.
     */
    public function handle(): void
    {
        // ...
    }
}
</code></pre><p>If this job is queued with an <code>App\\Models\\Video</code> instance that has an <code>id</code> attribute of <code>1</code>, it will automatically receive the tag <code>App\\Models\\Video:1</code>. This is because Horizon will search the job&#39;s properties for any Eloquent models. If Eloquent models are found, Horizon will intelligently tag the job using the model&#39;s class name and primary key:</p><pre><code>use App\\Jobs\\RenderVideo;
use App\\Models\\Video;

$video = Video::find(1);

RenderVideo::dispatch($video);
</code></pre><p><a name="manually-tagging-jobs"></a></p><h4 id="manually-tagging-jobs" tabindex="-1"><a class="header-anchor" href="#manually-tagging-jobs" aria-hidden="true">#</a> Manually Tagging Jobs</h4><p>If you would like to manually define the tags for one of your queueable objects, you may define a <code>tags</code> method on the class:</p><pre><code>class RenderVideo implements ShouldQueue
{
    /**
     * Get the tags that should be assigned to the job.
     *
     * @return array&lt;int, string&gt;
     */
    public function tags(): array
    {
        return [&#39;render&#39;, &#39;video:&#39;.$this-&gt;video-&gt;id];
    }
}
</code></pre><p><a name="notifications"></a></p><h2 id="notifications" tabindex="-1"><a class="header-anchor" href="#notifications" aria-hidden="true">#</a> Notifications</h2><blockquote><p><strong>Warning</strong><br> When configuring Horizon to send Slack or SMS notifications, you should review the <a href="./notifications">prerequisites for the relevant notification channel</a>.</p></blockquote><p>If you would like to be notified when one of your queues has a long wait time, you may use the <code>Horizon::routeMailNotificationsTo</code>, <code>Horizon::routeSlackNotificationsTo</code>, and <code>Horizon::routeSmsNotificationsTo</code> methods. You may call these methods from the <code>boot</code> method of your application&#39;s <code>App\\Providers\\HorizonServiceProvider</code>:</p><pre><code>/**
 * Bootstrap any application services.
 */
public function boot(): void
{
    parent::boot();

    Horizon::routeSmsNotificationsTo(&#39;15556667777&#39;);
    Horizon::routeMailNotificationsTo(&#39;example@example.com&#39;);
    Horizon::routeSlackNotificationsTo(&#39;slack-webhook-url&#39;, &#39;#channel&#39;);
}
</code></pre><p><a name="configuring-notification-wait-time-thresholds"></a></p><h4 id="configuring-notification-wait-time-thresholds" tabindex="-1"><a class="header-anchor" href="#configuring-notification-wait-time-thresholds" aria-hidden="true">#</a> Configuring Notification Wait Time Thresholds</h4><p>You may configure how many seconds are considered a &quot;long wait&quot; within your application&#39;s <code>config/horizon.php</code> configuration file. The <code>waits</code> configuration option within this file allows you to control the long wait threshold for each connection / queue combination. Any undefined connection / queue combinations will default to a long wait threshold of 60 seconds:</p><pre><code>&#39;waits&#39; =&gt; [
    &#39;redis:critical&#39; =&gt; 30,
    &#39;redis:default&#39; =&gt; 60,
    &#39;redis:batch&#39; =&gt; 120,
],
</code></pre><p><a name="metrics"></a></p><h2 id="metrics" tabindex="-1"><a class="header-anchor" href="#metrics" aria-hidden="true">#</a> Metrics</h2><p>Horizon includes a metrics dashboard which provides information regarding your job and queue wait times and throughput. In order to populate this dashboard, you should configure Horizon&#39;s <code>snapshot</code> Artisan command to run every five minutes via your application&#39;s <a href="./scheduling">scheduler</a>:</p><pre><code>/**
 * Define the application&#39;s command schedule.
 */
protected function schedule(Schedule $schedule): void
{
    $schedule-&gt;command(&#39;horizon:snapshot&#39;)-&gt;everyFiveMinutes();
}
</code></pre><p><a name="deleting-failed-jobs"></a></p><h2 id="deleting-failed-jobs" tabindex="-1"><a class="header-anchor" href="#deleting-failed-jobs" aria-hidden="true">#</a> Deleting Failed Jobs</h2><p>If you would like to delete a failed job, you may use the <code>horizon:forget</code> command. The <code>horizon:forget</code> command accepts the ID or UUID of the failed job as its only argument:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan horizon:forget <span class="token number">5</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a name="clearing-jobs-from-queues"></a></p><h2 id="clearing-jobs-from-queues" tabindex="-1"><a class="header-anchor" href="#clearing-jobs-from-queues" aria-hidden="true">#</a> Clearing Jobs From Queues</h2><p>If you would like to delete all jobs from your application&#39;s default queue, you may do so using the <code>horizon:clear</code> Artisan command:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan horizon:clear
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>You may provide the <code>queue</code> option to delete jobs from a specific queue:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan horizon:clear <span class="token parameter variable">--queue</span><span class="token operator">=</span>emails
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,33);function P(M,N){const n=r("ExternalLinkIcon");return l(),d("div",null,[u,e("p",null,[e("a",p,[o("Laravel Horizon"),a(n)]),o(" provides a beautiful dashboard and code-driven configuration for your Laravel powered "),h,o(". Horizon allows you to easily monitor key metrics of your queue system such as job throughput, runtime, and job failures.")]),m,g,f,v,e("blockquote",null,[e("p",null,[b,y,o(" Laravel Horizon requires that you use "),e("a",z,[o("Redis"),a(n)]),o(" to power your queue. Therefore, you should ensure that your queue connection is set to "),k,o(" in your application's "),w,o(" configuration file.")])]),q,e("p",null,[o("When upgrading to a new major version of Horizon, it's important that you carefully review "),e("a",x,[o("the upgrade guide"),a(n)]),o(". In addition, when upgrading to any new Horizon version, you should re-publish Horizon's assets:")]),_,e("blockquote",null,[e("p",null,[H,j,o(" If configuring Supervisor yourself sounds overwhelming, consider using "),e("a",S,[o("Laravel Forge"),a(n)]),o(", which will automatically install and configure Supervisor for your Laravel projects.")])]),I,e("blockquote",null,[e("p",null,[T,A,o(" For more information on running Supervisor, consult the "),e("a",W,[o("Supervisor documentation"),a(n)]),o(".")])]),L])}const Q=t(c,[["render",P],["__file","horizon.html.vue"]]);export{Q as default};
