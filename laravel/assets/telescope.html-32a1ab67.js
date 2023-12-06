import{_ as o}from"./telescope-example-c8b2142c.js";import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{r as s,o as c,c as l,b as a,d as e,e as r,a as t}from"./app-06635a3b.js";const d={},h=t('<h1 id="laravel-telescope" tabindex="-1"><a class="header-anchor" href="#laravel-telescope" aria-hidden="true">#</a> Laravel Telescope</h1><ul><li><a href="#introduction">Introduction</a></li><li><a href="#installation">Installation</a><ul><li><a href="#local-only-installation">Local Only Installation</a></li><li><a href="#configuration">Configuration</a></li><li><a href="#data-pruning">Data Pruning</a></li><li><a href="#dashboard-authorization">Dashboard Authorization</a></li></ul></li><li><a href="#upgrading-telescope">Upgrading Telescope</a></li><li><a href="#filtering">Filtering</a><ul><li><a href="#filtering-entries">Entries</a></li><li><a href="#filtering-batches">Batches</a></li></ul></li><li><a href="#tagging">Tagging</a></li><li><a href="#available-watchers">Available Watchers</a><ul><li><a href="#batch-watcher">Batch Watcher</a></li><li><a href="#cache-watcher">Cache Watcher</a></li><li><a href="#command-watcher">Command Watcher</a></li><li><a href="#dump-watcher">Dump Watcher</a></li><li><a href="#event-watcher">Event Watcher</a></li><li><a href="#exception-watcher">Exception Watcher</a></li><li><a href="#gate-watcher">Gate Watcher</a></li><li><a href="#http-client-watcher">HTTP Client Watcher</a></li><li><a href="#job-watcher">Job Watcher</a></li><li><a href="#log-watcher">Log Watcher</a></li><li><a href="#mail-watcher">Mail Watcher</a></li><li><a href="#model-watcher">Model Watcher</a></li><li><a href="#notification-watcher">Notification Watcher</a></li><li><a href="#query-watcher">Query Watcher</a></li><li><a href="#redis-watcher">Redis Watcher</a></li><li><a href="#request-watcher">Request Watcher</a></li><li><a href="#schedule-watcher">Schedule Watcher</a></li><li><a href="#view-watcher">View Watcher</a></li></ul></li><li><a href="#displaying-user-avatars">Displaying User Avatars</a></li></ul><p><a name="introduction"></a></p><h2 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h2>',4),p={href:"https://github.com/laravel/telescope",target:"_blank",rel:"noopener noreferrer"},u=t('<img src="'+o+`"><p><a name="installation"></a></p><h2 id="installation" tabindex="-1"><a class="header-anchor" href="#installation" aria-hidden="true">#</a> Installation</h2><p>You may use the Composer package manager to install Telescope into your Laravel project:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">composer</span> require laravel/telescope
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>After installing Telescope, publish its assets using the <code>telescope:install</code> Artisan command. After installing Telescope, you should also run the <code>migrate</code> command in order to create the tables needed to store Telescope&#39;s data:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan telescope:install

php artisan migrate
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="migration-customization"></a></p><h4 id="migration-customization" tabindex="-1"><a class="header-anchor" href="#migration-customization" aria-hidden="true">#</a> Migration Customization</h4><p>If you are not going to use Telescope&#39;s default migrations, you should call the <code>Telescope::ignoreMigrations</code> method in the <code>register</code> method of your application&#39;s <code>App\\Providers\\AppServiceProvider</code> class. You may export the default migrations using the following command: <code>php artisan vendor:publish --tag=telescope-migrations</code></p><p><a name="local-only-installation"></a></p><h3 id="local-only-installation" tabindex="-1"><a class="header-anchor" href="#local-only-installation" aria-hidden="true">#</a> Local Only Installation</h3><p>If you plan to only use Telescope to assist your local development, you may install Telescope using the <code>--dev</code> flag:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">composer</span> require laravel/telescope <span class="token parameter variable">--dev</span>

php artisan telescope:install

php artisan migrate
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>After running <code>telescope:install</code>, you should remove the <code>TelescopeServiceProvider</code> service provider registration from your application&#39;s <code>config/app.php</code> configuration file. Instead, manually register Telescope&#39;s service providers in the <code>register</code> method of your <code>App\\Providers\\AppServiceProvider</code> class. We will ensure the current environment is <code>local</code> before registering the providers:</p><pre><code>/**
 * Register any application services.
 */
public function register(): void
{
    if ($this-&gt;app-&gt;environment(&#39;local&#39;)) {
        $this-&gt;app-&gt;register(\\Laravel\\Telescope\\TelescopeServiceProvider::class);
        $this-&gt;app-&gt;register(TelescopeServiceProvider::class);
    }
}
</code></pre><p>Finally, you should also prevent the Telescope package from being <a href="./packages#package-discovery">auto-discovered</a> by adding the following to your <code>composer.json</code> file:</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;extra&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;laravel&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;dont-discover&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">&quot;laravel/telescope&quot;</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="configuration"></a></p><h3 id="configuration" tabindex="-1"><a class="header-anchor" href="#configuration" aria-hidden="true">#</a> Configuration</h3><p>After publishing Telescope&#39;s assets, its primary configuration file will be located at <code>config/telescope.php</code>. This configuration file allows you to configure your <a href="#available-watchers">watcher options</a>. Each configuration option includes a description of its purpose, so be sure to thoroughly explore this file.</p><p>If desired, you may disable Telescope&#39;s data collection entirely using the <code>enabled</code> configuration option:</p><pre><code>&#39;enabled&#39; =&gt; env(&#39;TELESCOPE_ENABLED&#39;, true),
</code></pre><p><a name="data-pruning"></a></p><h3 id="data-pruning" tabindex="-1"><a class="header-anchor" href="#data-pruning" aria-hidden="true">#</a> Data Pruning</h3><p>Without pruning, the <code>telescope_entries</code> table can accumulate records very quickly. To mitigate this, you should <a href="./scheduling">schedule</a> the <code>telescope:prune</code> Artisan command to run daily:</p><pre><code>$schedule-&gt;command(&#39;telescope:prune&#39;)-&gt;daily();
</code></pre><p>By default, all entries older than 24 hours will be pruned. You may use the <code>hours</code> option when calling the command to determine how long to retain Telescope data. For example, the following command will delete all records created over 48 hours ago:</p><pre><code>$schedule-&gt;command(&#39;telescope:prune --hours=48&#39;)-&gt;daily();
</code></pre><p><a name="dashboard-authorization"></a></p><h3 id="dashboard-authorization" tabindex="-1"><a class="header-anchor" href="#dashboard-authorization" aria-hidden="true">#</a> Dashboard Authorization</h3><p>The Telescope dashboard may be accessed at the <code>/telescope</code> route. By default, you will only be able to access this dashboard in the <code>local</code> environment. Within your <code>app/Providers/TelescopeServiceProvider.php</code> file, there is an <a href="./authorization#gates">authorization gate</a> definition. This authorization gate controls access to Telescope in <strong>non-local</strong> environments. You are free to modify this gate as needed to restrict access to your Telescope installation:</p><pre><code>use App\\Models\\User;

/**
 * Register the Telescope gate.
 *
 * This gate determines who can access Telescope in non-local environments.
 */
protected function gate(): void
{
    Gate::define(&#39;viewTelescope&#39;, function (User $user) {
        return in_array($user-&gt;email, [
            &#39;taylor@laravel.com&#39;,
        ]);
    });
}
</code></pre><blockquote><p><strong>Warning</strong><br> You should ensure you change your <code>APP_ENV</code> environment variable to <code>production</code> in your production environment. Otherwise, your Telescope installation will be publicly available.</p></blockquote><p><a name="upgrading-telescope"></a></p><h2 id="upgrading-telescope" tabindex="-1"><a class="header-anchor" href="#upgrading-telescope" aria-hidden="true">#</a> Upgrading Telescope</h2>`,36),g={href:"https://github.com/laravel/telescope/blob/master/UPGRADE.md",target:"_blank",rel:"noopener noreferrer"},m=t(`<p>In addition, when upgrading to any new Telescope version, you should re-publish Telescope&#39;s assets:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan telescope:publish
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>To keep the assets up-to-date and avoid issues in future updates, you may add the <code>vendor:publish --tag=laravel-assets</code> command to the <code>post-update-cmd</code> scripts in your application&#39;s <code>composer.json</code> file:</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;post-update-cmd&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">&quot;@php artisan vendor:publish --tag=laravel-assets --ansi --force&quot;</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="filtering"></a></p><h2 id="filtering" tabindex="-1"><a class="header-anchor" href="#filtering" aria-hidden="true">#</a> Filtering</h2><p><a name="filtering-entries"></a></p><h3 id="entries" tabindex="-1"><a class="header-anchor" href="#entries" aria-hidden="true">#</a> Entries</h3><p>You may filter the data that is recorded by Telescope via the <code>filter</code> closure that is defined in your <code>App\\Providers\\TelescopeServiceProvider</code> class. By default, this closure records all data in the <code>local</code> environment and exceptions, failed jobs, scheduled tasks, and data with monitored tags in all other environments:</p><pre><code>use Laravel\\Telescope\\IncomingEntry;
use Laravel\\Telescope\\Telescope;

/**
 * Register any application services.
 */
public function register(): void
{
    $this-&gt;hideSensitiveRequestDetails();

    Telescope::filter(function (IncomingEntry $entry) {
        if ($this-&gt;app-&gt;environment(&#39;local&#39;)) {
            return true;
        }

        return $entry-&gt;isReportableException() ||
            $entry-&gt;isFailedJob() ||
            $entry-&gt;isScheduledTask() ||
            $entry-&gt;isSlowQuery() ||
            $entry-&gt;hasMonitoredTag();
    });
}
</code></pre><p><a name="filtering-batches"></a></p><h3 id="batches" tabindex="-1"><a class="header-anchor" href="#batches" aria-hidden="true">#</a> Batches</h3><p>While the <code>filter</code> closure filters data for individual entries, you may use the <code>filterBatch</code> method to register a closure that filters all data for a given request or console command. If the closure returns <code>true</code>, all of the entries are recorded by Telescope:</p><pre><code>use Illuminate\\Support\\Collection;
use Laravel\\Telescope\\IncomingEntry;
use Laravel\\Telescope\\Telescope;

/**
 * Register any application services.
 */
public function register(): void
{
    $this-&gt;hideSensitiveRequestDetails();

    Telescope::filterBatch(function (Collection $entries) {
        if ($this-&gt;app-&gt;environment(&#39;local&#39;)) {
            return true;
        }

        return $entries-&gt;contains(function (IncomingEntry $entry) {
            return $entry-&gt;isReportableException() ||
                $entry-&gt;isFailedJob() ||
                $entry-&gt;isScheduledTask() ||
                $entry-&gt;isSlowQuery() ||
                $entry-&gt;hasMonitoredTag();
            });
    });
}
</code></pre><p><a name="tagging"></a></p><h2 id="tagging" tabindex="-1"><a class="header-anchor" href="#tagging" aria-hidden="true">#</a> Tagging</h2><p>Telescope allows you to search entries by &quot;tag&quot;. Often, tags are Eloquent model class names or authenticated user IDs which Telescope automatically adds to entries. Occasionally, you may want to attach your own custom tags to entries. To accomplish this, you may use the <code>Telescope::tag</code> method. The <code>tag</code> method accepts a closure which should return an array of tags. The tags returned by the closure will be merged with any tags Telescope would automatically attach to the entry. Typically, you should call the <code>tag</code> method within the <code>register</code> method of your <code>App\\Providers\\TelescopeServiceProvider</code> class:</p><pre><code>use Laravel\\Telescope\\IncomingEntry;
use Laravel\\Telescope\\Telescope;

/**
 * Register any application services.
 */
public function register(): void
{
    $this-&gt;hideSensitiveRequestDetails();

    Telescope::tag(function (IncomingEntry $entry) {
        return $entry-&gt;type === &#39;request&#39;
                    ? [&#39;status:&#39;.$entry-&gt;content[&#39;response_status&#39;]]
                    : [];
    });
 }
</code></pre><p><a name="available-watchers"></a></p><h2 id="available-watchers" tabindex="-1"><a class="header-anchor" href="#available-watchers" aria-hidden="true">#</a> Available Watchers</h2><p>Telescope &quot;watchers&quot; gather application data when a request or console command is executed. You may customize the list of watchers that you would like to enable within your <code>config/telescope.php</code> configuration file:</p><pre><code>&#39;watchers&#39; =&gt; [
    Watchers\\CacheWatcher::class =&gt; true,
    Watchers\\CommandWatcher::class =&gt; true,
    ...
],
</code></pre><p>Some watchers also allow you to provide additional customization options:</p><pre><code>&#39;watchers&#39; =&gt; [
    Watchers\\QueryWatcher::class =&gt; [
        &#39;enabled&#39; =&gt; env(&#39;TELESCOPE_QUERY_WATCHER&#39;, true),
        &#39;slow&#39; =&gt; 100,
    ],
    ...
],
</code></pre><p><a name="batch-watcher"></a></p><h3 id="batch-watcher" tabindex="-1"><a class="header-anchor" href="#batch-watcher" aria-hidden="true">#</a> Batch Watcher</h3><p>The batch watcher records information about queued <a href="./queues#job-batching">batches</a>, including the job and connection information.</p><p><a name="cache-watcher"></a></p><h3 id="cache-watcher" tabindex="-1"><a class="header-anchor" href="#cache-watcher" aria-hidden="true">#</a> Cache Watcher</h3><p>The cache watcher records data when a cache key is hit, missed, updated and forgotten.</p><p><a name="command-watcher"></a></p><h3 id="command-watcher" tabindex="-1"><a class="header-anchor" href="#command-watcher" aria-hidden="true">#</a> Command Watcher</h3><p>The command watcher records the arguments, options, exit code, and output whenever an Artisan command is executed. If you would like to exclude certain commands from being recorded by the watcher, you may specify the command in the <code>ignore</code> option within your <code>config/telescope.php</code> file:</p><pre><code>&#39;watchers&#39; =&gt; [
    Watchers\\CommandWatcher::class =&gt; [
        &#39;enabled&#39; =&gt; env(&#39;TELESCOPE_COMMAND_WATCHER&#39;, true),
        &#39;ignore&#39; =&gt; [&#39;key:generate&#39;],
    ],
    ...
],
</code></pre><p><a name="dump-watcher"></a></p><h3 id="dump-watcher" tabindex="-1"><a class="header-anchor" href="#dump-watcher" aria-hidden="true">#</a> Dump Watcher</h3><p>The dump watcher records and displays your variable dumps in Telescope. When using Laravel, variables may be dumped using the global <code>dump</code> function. The dump watcher tab must be open in a browser for the dump to be recorded, otherwise, the dumps will be ignored by the watcher.</p><p><a name="event-watcher"></a></p><h3 id="event-watcher" tabindex="-1"><a class="header-anchor" href="#event-watcher" aria-hidden="true">#</a> Event Watcher</h3><p>The event watcher records the payload, listeners, and broadcast data for any <a href="./events">events</a> dispatched by your application. The Laravel framework&#39;s internal events are ignored by the Event watcher.</p><p><a name="exception-watcher"></a></p><h3 id="exception-watcher" tabindex="-1"><a class="header-anchor" href="#exception-watcher" aria-hidden="true">#</a> Exception Watcher</h3><p>The exception watcher records the data and stack trace for any reportable exceptions that are thrown by your application.</p><p><a name="gate-watcher"></a></p><h3 id="gate-watcher" tabindex="-1"><a class="header-anchor" href="#gate-watcher" aria-hidden="true">#</a> Gate Watcher</h3><p>The gate watcher records the data and result of <a href="./authorization">gate and policy</a> checks by your application. If you would like to exclude certain abilities from being recorded by the watcher, you may specify those in the <code>ignore_abilities</code> option in your <code>config/telescope.php</code> file:</p><pre><code>&#39;watchers&#39; =&gt; [
    Watchers\\GateWatcher::class =&gt; [
        &#39;enabled&#39; =&gt; env(&#39;TELESCOPE_GATE_WATCHER&#39;, true),
        &#39;ignore_abilities&#39; =&gt; [&#39;viewNova&#39;],
    ],
    ...
],
</code></pre><p><a name="http-client-watcher"></a></p><h3 id="http-client-watcher" tabindex="-1"><a class="header-anchor" href="#http-client-watcher" aria-hidden="true">#</a> HTTP Client Watcher</h3><p>The HTTP client watcher records outgoing <a href="./http-client">HTTP client requests</a> made by your application.</p><p><a name="job-watcher"></a></p><h3 id="job-watcher" tabindex="-1"><a class="header-anchor" href="#job-watcher" aria-hidden="true">#</a> Job Watcher</h3><p>The job watcher records the data and status of any <a href="./queues">jobs</a> dispatched by your application.</p><p><a name="log-watcher"></a></p><h3 id="log-watcher" tabindex="-1"><a class="header-anchor" href="#log-watcher" aria-hidden="true">#</a> Log Watcher</h3><p>The log watcher records the <a href="./logging">log data</a> for any logs written by your application.</p><p>By default, Telescope will only record logs at the <code>error</code> level and above. However, you can modify the <code>level</code> option in your application&#39;s <code>config/telescope.php</code> configuration file to modify this behavior:</p><pre><code>&#39;watchers&#39; =&gt; [
    Watchers\\LogWatcher::class =&gt; [
        &#39;enabled&#39; =&gt; env(&#39;TELESCOPE_LOG_WATCHER&#39;, true),
        &#39;level&#39; =&gt; &#39;debug&#39;,
    ],

    // ...
],
</code></pre><p><a name="mail-watcher"></a></p><h3 id="mail-watcher" tabindex="-1"><a class="header-anchor" href="#mail-watcher" aria-hidden="true">#</a> Mail Watcher</h3><p>The mail watcher allows you to view an in-browser preview of <a href="./mail">emails</a> sent by your application along with their associated data. You may also download the email as an <code>.eml</code> file.</p><p><a name="model-watcher"></a></p><h3 id="model-watcher" tabindex="-1"><a class="header-anchor" href="#model-watcher" aria-hidden="true">#</a> Model Watcher</h3><p>The model watcher records model changes whenever an Eloquent <a href="./eloquent#events">model event</a> is dispatched. You may specify which model events should be recorded via the watcher&#39;s <code>events</code> option:</p><pre><code>&#39;watchers&#39; =&gt; [
    Watchers\\ModelWatcher::class =&gt; [
        &#39;enabled&#39; =&gt; env(&#39;TELESCOPE_MODEL_WATCHER&#39;, true),
        &#39;events&#39; =&gt; [&#39;eloquent.created*&#39;, &#39;eloquent.updated*&#39;],
    ],
    ...
],
</code></pre><p>If you would like to record the number of models hydrated during a given request, enable the <code>hydrations</code> option:</p><pre><code>&#39;watchers&#39; =&gt; [
    Watchers\\ModelWatcher::class =&gt; [
        &#39;enabled&#39; =&gt; env(&#39;TELESCOPE_MODEL_WATCHER&#39;, true),
        &#39;events&#39; =&gt; [&#39;eloquent.created*&#39;, &#39;eloquent.updated*&#39;],
        &#39;hydrations&#39; =&gt; true,
    ],
    ...
],
</code></pre><p><a name="notification-watcher"></a></p><h3 id="notification-watcher" tabindex="-1"><a class="header-anchor" href="#notification-watcher" aria-hidden="true">#</a> Notification Watcher</h3><p>The notification watcher records all <a href="./notifications">notifications</a> sent by your application. If the notification triggers an email and you have the mail watcher enabled, the email will also be available for preview on the mail watcher screen.</p><p><a name="query-watcher"></a></p><h3 id="query-watcher" tabindex="-1"><a class="header-anchor" href="#query-watcher" aria-hidden="true">#</a> Query Watcher</h3><p>The query watcher records the raw SQL, bindings, and execution time for all queries that are executed by your application. The watcher also tags any queries slower than 100 milliseconds as <code>slow</code>. You may customize the slow query threshold using the watcher&#39;s <code>slow</code> option:</p><pre><code>&#39;watchers&#39; =&gt; [
    Watchers\\QueryWatcher::class =&gt; [
        &#39;enabled&#39; =&gt; env(&#39;TELESCOPE_QUERY_WATCHER&#39;, true),
        &#39;slow&#39; =&gt; 50,
    ],
    ...
],
</code></pre><p><a name="redis-watcher"></a></p><h3 id="redis-watcher" tabindex="-1"><a class="header-anchor" href="#redis-watcher" aria-hidden="true">#</a> Redis Watcher</h3><p>The Redis watcher records all <a href="./redis">Redis</a> commands executed by your application. If you are using Redis for caching, cache commands will also be recorded by the Redis watcher.</p><p><a name="request-watcher"></a></p><h3 id="request-watcher" tabindex="-1"><a class="header-anchor" href="#request-watcher" aria-hidden="true">#</a> Request Watcher</h3><p>The request watcher records the request, headers, session, and response data associated with any requests handled by the application. You may limit your recorded response data via the <code>size_limit</code> (in kilobytes) option:</p><pre><code>&#39;watchers&#39; =&gt; [
    Watchers\\RequestWatcher::class =&gt; [
        &#39;enabled&#39; =&gt; env(&#39;TELESCOPE_REQUEST_WATCHER&#39;, true),
        &#39;size_limit&#39; =&gt; env(&#39;TELESCOPE_RESPONSE_SIZE_LIMIT&#39;, 64),
    ],
    ...
],
</code></pre><p><a name="schedule-watcher"></a></p><h3 id="schedule-watcher" tabindex="-1"><a class="header-anchor" href="#schedule-watcher" aria-hidden="true">#</a> Schedule Watcher</h3><p>The schedule watcher records the command and output of any <a href="./scheduling">scheduled tasks</a> run by your application.</p><p><a name="view-watcher"></a></p><h3 id="view-watcher" tabindex="-1"><a class="header-anchor" href="#view-watcher" aria-hidden="true">#</a> View Watcher</h3><p>The view watcher records the <a href="./views">view</a> name, path, data, and &quot;composers&quot; used when rendering views.</p><p><a name="displaying-user-avatars"></a></p><h2 id="displaying-user-avatars" tabindex="-1"><a class="header-anchor" href="#displaying-user-avatars" aria-hidden="true">#</a> Displaying User Avatars</h2><p>The Telescope dashboard displays the user avatar for the user that was authenticated when a given entry was saved. By default, Telescope will retrieve avatars using the Gravatar web service. However, you may customize the avatar URL by registering a callback in your <code>App\\Providers\\TelescopeServiceProvider</code> class. The callback will receive the user&#39;s ID and email address and should return the user&#39;s avatar image URL:</p><pre><code>use App\\Models\\User;
use Laravel\\Telescope\\Telescope;

/**
 * Register any application services.
 */
public function register(): void
{
    // ...

    Telescope::avatar(function (string $id, string $email) {
        return &#39;/avatars/&#39;.User::find($id)-&gt;avatar_path;
    });
}
</code></pre>`,91);function v(f,b){const n=s("ExternalLinkIcon");return c(),l("div",null,[h,a("p",null,[a("a",p,[e("Laravel Telescope"),r(n)]),e(" makes a wonderful companion to your local Laravel development environment. Telescope provides insight into the requests coming into your application, exceptions, log entries, database queries, queued jobs, mail, notifications, cache operations, scheduled tasks, variable dumps, and more.")]),u,a("p",null,[e("When upgrading to a new major version of Telescope, it's important that you carefully review "),a("a",g,[e("the upgrade guide"),r(n)]),e(".")]),m])}const E=i(d,[["render",v],["__file","telescope.html.vue"]]);export{E as default};
