import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{r as i,o as r,c,b as a,d as e,e as t,a as o}from"./app-8cdff07c.js";const d={},u=o('<h1 id="queues" tabindex="-1"><a class="header-anchor" href="#queues" aria-hidden="true">#</a> Queues</h1><ul><li><a href="#introduction">Introduction</a><ul><li><a href="#connections-vs-queues">Connections Vs. Queues</a></li><li><a href="#driver-prerequisites">Driver Notes &amp; Prerequisites</a></li></ul></li><li><a href="#creating-jobs">Creating Jobs</a><ul><li><a href="#generating-job-classes">Generating Job Classes</a></li><li><a href="#class-structure">Class Structure</a></li><li><a href="#unique-jobs">Unique Jobs</a></li><li><a href="#encrypted-jobs">Encrypted Jobs</a></li></ul></li><li><a href="#job-middleware">Job Middleware</a><ul><li><a href="#rate-limiting">Rate Limiting</a></li><li><a href="#preventing-job-overlaps">Preventing Job Overlaps</a></li><li><a href="#throttling-exceptions">Throttling Exceptions</a></li></ul></li><li><a href="#dispatching-jobs">Dispatching Jobs</a><ul><li><a href="#delayed-dispatching">Delayed Dispatching</a></li><li><a href="#synchronous-dispatching">Synchronous Dispatching</a></li><li><a href="#jobs-and-database-transactions">Jobs &amp; Database Transactions</a></li><li><a href="#job-chaining">Job Chaining</a></li><li><a href="#customizing-the-queue-and-connection">Customizing The Queue &amp; Connection</a></li><li><a href="#max-job-attempts-and-timeout">Specifying Max Job Attempts / Timeout Values</a></li><li><a href="#error-handling">Error Handling</a></li></ul></li><li><a href="#job-batching">Job Batching</a><ul><li><a href="#defining-batchable-jobs">Defining Batchable Jobs</a></li><li><a href="#dispatching-batches">Dispatching Batches</a></li><li><a href="#chains-and-batches">Chains &amp; Batches</a></li><li><a href="#adding-jobs-to-batches">Adding Jobs To Batches</a></li><li><a href="#inspecting-batches">Inspecting Batches</a></li><li><a href="#cancelling-batches">Cancelling Batches</a></li><li><a href="#batch-failures">Batch Failures</a></li><li><a href="#pruning-batches">Pruning Batches</a></li></ul></li><li><a href="#queueing-closures">Queueing Closures</a></li><li><a href="#running-the-queue-worker">Running The Queue Worker</a><ul><li><a href="#the-queue-work-command">The <code>queue:work</code> Command</a></li><li><a href="#queue-priorities">Queue Priorities</a></li><li><a href="#queue-workers-and-deployment">Queue Workers &amp; Deployment</a></li><li><a href="#job-expirations-and-timeouts">Job Expirations &amp; Timeouts</a></li></ul></li><li><a href="#supervisor-configuration">Supervisor Configuration</a></li><li><a href="#dealing-with-failed-jobs">Dealing With Failed Jobs</a><ul><li><a href="#cleaning-up-after-failed-jobs">Cleaning Up After Failed Jobs</a></li><li><a href="#retrying-failed-jobs">Retrying Failed Jobs</a></li><li><a href="#ignoring-missing-models">Ignoring Missing Models</a></li><li><a href="#pruning-failed-jobs">Pruning Failed Jobs</a></li><li><a href="#storing-failed-jobs-in-dynamodb">Storing Failed Jobs In DynamoDB</a></li><li><a href="#disabling-failed-job-storage">Disabling Failed Job Storage</a></li><li><a href="#failed-job-events">Failed Job Events</a></li></ul></li><li><a href="#clearing-jobs-from-queues">Clearing Jobs From Queues</a></li><li><a href="#monitoring-your-queues">Monitoring Your Queues</a></li><li><a href="#testing">Testing</a><ul><li><a href="#faking-a-subset-of-jobs">Faking A Subset Of Jobs</a></li><li><a href="#testing-job-chains">Testing Job Chains</a></li><li><a href="#testing-job-batches">Testing Job Batches</a></li></ul></li><li><a href="#job-events">Job Events</a></li></ul><p><a name="introduction"></a></p><h2 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h2><p>While building your web application, you may have some tasks, such as parsing and storing an uploaded CSV file, that take too long to perform during a typical web request. Thankfully, Laravel allows you to easily create queued jobs that may be processed in the background. By moving time intensive tasks to a queue, your application can respond to web requests with blazing speed and provide a better user experience to your customers.</p>',5),l={href:"https://aws.amazon.com/sqs/",target:"_blank",rel:"noopener noreferrer"},p={href:"https://redis.io",target:"_blank",rel:"noopener noreferrer"},h=a("code",null,"config/queue.php",-1),b={href:"https://aws.amazon.com/sqs/",target:"_blank",rel:"noopener noreferrer"},m={href:"https://redis.io",target:"_blank",rel:"noopener noreferrer"},g={href:"https://beanstalkd.github.io/",target:"_blank",rel:"noopener noreferrer"},f=a("code",null,"null",-1),y=o(`<blockquote><p><strong>Note</strong><br> Laravel now offers Horizon, a beautiful dashboard and configuration system for your Redis powered queues. Check out the full <a href="./horizon">Horizon documentation</a> for more information.</p></blockquote><p><a name="connections-vs-queues"></a></p><h3 id="connections-vs-queues" tabindex="-1"><a class="header-anchor" href="#connections-vs-queues" aria-hidden="true">#</a> Connections Vs. Queues</h3><p>Before getting started with Laravel queues, it is important to understand the distinction between &quot;connections&quot; and &quot;queues&quot;. In your <code>config/queue.php</code> configuration file, there is a <code>connections</code> configuration array. This option defines the connections to backend queue services such as Amazon SQS, Beanstalk, or Redis. However, any given queue connection may have multiple &quot;queues&quot; which may be thought of as different stacks or piles of queued jobs.</p><p>Note that each connection configuration example in the <code>queue</code> configuration file contains a <code>queue</code> attribute. This is the default queue that jobs will be dispatched to when they are sent to a given connection. In other words, if you dispatch a job without explicitly defining which queue it should be dispatched to, the job will be placed on the queue that is defined in the <code>queue</code> attribute of the connection configuration:</p><pre><code>use App\\Jobs\\ProcessPodcast;

// This job is sent to the default connection&#39;s default queue...
ProcessPodcast::dispatch();

// This job is sent to the default connection&#39;s &quot;emails&quot; queue...
ProcessPodcast::dispatch()-&gt;onQueue(&#39;emails&#39;);
</code></pre><p>Some applications may not need to ever push jobs onto multiple queues, instead preferring to have one simple queue. However, pushing jobs to multiple queues can be especially useful for applications that wish to prioritize or segment how jobs are processed, since the Laravel queue worker allows you to specify which queues it should process by priority. For example, if you push jobs to a <code>high</code> queue, you may run a worker that gives them higher processing priority:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan queue:work <span class="token parameter variable">--queue</span><span class="token operator">=</span>high,default
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a name="driver-prerequisites"></a></p><h3 id="driver-notes-prerequisites" tabindex="-1"><a class="header-anchor" href="#driver-notes-prerequisites" aria-hidden="true">#</a> Driver Notes &amp; Prerequisites</h3><p><a name="database"></a></p><h4 id="database" tabindex="-1"><a class="header-anchor" href="#database" aria-hidden="true">#</a> Database</h4><p>In order to use the <code>database</code> queue driver, you will need a database table to hold the jobs. To generate a migration that creates this table, run the <code>queue:table</code> Artisan command. Once the migration has been created, you may migrate your database using the <code>migrate</code> command:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan queue:table

php artisan migrate
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Finally, don&#39;t forget to instruct your application to use the <code>database</code> driver by updating the <code>QUEUE_CONNECTION</code> variable in your application&#39;s <code>.env</code> file:</p><pre><code>QUEUE_CONNECTION=database
</code></pre><p><a name="redis"></a></p><h4 id="redis" tabindex="-1"><a class="header-anchor" href="#redis" aria-hidden="true">#</a> Redis</h4><p>In order to use the <code>redis</code> queue driver, you should configure a Redis database connection in your <code>config/database.php</code> configuration file.</p><blockquote><p><strong>Warning</strong><br> The <code>serializer</code> and <code>compression</code> Redis options are not supported by the <code>redis</code> queue driver.</p></blockquote><p><strong>Redis Cluster</strong></p>`,21),v={href:"https://redis.io/docs/reference/cluster-spec/#hash-tags",target:"_blank",rel:"noopener noreferrer"},w=o(`<pre><code>&#39;redis&#39; =&gt; [
    &#39;driver&#39; =&gt; &#39;redis&#39;,
    &#39;connection&#39; =&gt; &#39;default&#39;,
    &#39;queue&#39; =&gt; &#39;{default}&#39;,
    &#39;retry_after&#39; =&gt; 90,
],
</code></pre><p><strong>Blocking</strong></p><p>When using the Redis queue, you may use the <code>block_for</code> configuration option to specify how long the driver should wait for a job to become available before iterating through the worker loop and re-polling the Redis database.</p><p>Adjusting this value based on your queue load can be more efficient than continually polling the Redis database for new jobs. For instance, you may set the value to <code>5</code> to indicate that the driver should block for five seconds while waiting for a job to become available:</p><pre><code>&#39;redis&#39; =&gt; [
    &#39;driver&#39; =&gt; &#39;redis&#39;,
    &#39;connection&#39; =&gt; &#39;default&#39;,
    &#39;queue&#39; =&gt; &#39;default&#39;,
    &#39;retry_after&#39; =&gt; 90,
    &#39;block_for&#39; =&gt; 5,
],
</code></pre><blockquote><p><strong>Warning</strong><br> Setting <code>block_for</code> to <code>0</code> will cause queue workers to block indefinitely until a job is available. This will also prevent signals such as <code>SIGTERM</code> from being handled until the next job has been processed.</p></blockquote><p><a name="other-driver-prerequisites"></a></p><h4 id="other-driver-prerequisites" tabindex="-1"><a class="header-anchor" href="#other-driver-prerequisites" aria-hidden="true">#</a> Other Driver Prerequisites</h4><p>The following dependencies are needed for the listed queue drivers. These dependencies may be installed via the Composer package manager:</p>`,9),k=a("div",{class:"content-list",markdown:"1"},[a("ul",null,[a("li",null,[e("Amazon SQS: "),a("code",null,"aws/aws-sdk-php ~3.0")]),a("li",null,[e("Beanstalkd: "),a("code",null,"pda/pheanstalk ~4.0")]),a("li",null,[e("Redis: "),a("code",null,"predis/predis ~1.0"),e(" or phpredis PHP extension")])])],-1),j=o(`<p><a name="creating-jobs"></a></p><h2 id="creating-jobs" tabindex="-1"><a class="header-anchor" href="#creating-jobs" aria-hidden="true">#</a> Creating Jobs</h2><p><a name="generating-job-classes"></a></p><h3 id="generating-job-classes" tabindex="-1"><a class="header-anchor" href="#generating-job-classes" aria-hidden="true">#</a> Generating Job Classes</h3><p>By default, all of the queueable jobs for your application are stored in the <code>app/Jobs</code> directory. If the <code>app/Jobs</code> directory doesn&#39;t exist, it will be created when you run the <code>make:job</code> Artisan command:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan make:job ProcessPodcast
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>The generated class will implement the <code>Illuminate\\Contracts\\Queue\\ShouldQueue</code> interface, indicating to Laravel that the job should be pushed onto the queue to run asynchronously.</p><blockquote><p><strong>Note</strong><br> Job stubs may be customized using <a href="./artisan#stub-customization">stub publishing</a>.</p></blockquote><p><a name="class-structure"></a></p><h3 id="class-structure" tabindex="-1"><a class="header-anchor" href="#class-structure" aria-hidden="true">#</a> Class Structure</h3><p>Job classes are very simple, normally containing only a <code>handle</code> method that is invoked when the job is processed by the queue. To get started, let&#39;s take a look at an example job class. In this example, we&#39;ll pretend we manage a podcast publishing service and need to process the uploaded podcast files before they are published:</p><pre><code>&lt;?php

namespace App\\Jobs;

use App\\Models\\Podcast;
use App\\Services\\AudioProcessor;
use Illuminate\\Bus\\Queueable;
use Illuminate\\Contracts\\Queue\\ShouldQueue;
use Illuminate\\Foundation\\Bus\\Dispatchable;
use Illuminate\\Queue\\InteractsWithQueue;
use Illuminate\\Queue\\SerializesModels;

class ProcessPodcast implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * Create a new job instance.
     */
    public function __construct(
        public Podcast $podcast,
    ) {}

    /**
     * Execute the job.
     */
    public function handle(AudioProcessor $processor): void
    {
        // Process uploaded podcast...
    }
}
</code></pre><p>In this example, note that we were able to pass an <a href="./eloquent">Eloquent model</a> directly into the queued job&#39;s constructor. Because of the <code>SerializesModels</code> trait that the job is using, Eloquent models and their loaded relationships will be gracefully serialized and unserialized when the job is processing.</p><p>If your queued job accepts an Eloquent model in its constructor, only the identifier for the model will be serialized onto the queue. When the job is actually handled, the queue system will automatically re-retrieve the full model instance and its loaded relationships from the database. This approach to model serialization allows for much smaller job payloads to be sent to your queue driver.</p><p><a name="handle-method-dependency-injection"></a></p><h4 id="handle-method-dependency-injection" tabindex="-1"><a class="header-anchor" href="#handle-method-dependency-injection" aria-hidden="true">#</a> <code>handle</code> Method Dependency Injection</h4><p>The <code>handle</code> method is invoked when the job is processed by the queue. Note that we are able to type-hint dependencies on the <code>handle</code> method of the job. The Laravel <a href="./container">service container</a> automatically injects these dependencies.</p><p>If you would like to take total control over how the container injects dependencies into the <code>handle</code> method, you may use the container&#39;s <code>bindMethod</code> method. The <code>bindMethod</code> method accepts a callback which receives the job and the container. Within the callback, you are free to invoke the <code>handle</code> method however you wish. Typically, you should call this method from the <code>boot</code> method of your <code>App\\Providers\\AppServiceProvider</code> <a href="./providers">service provider</a>:</p><pre><code>use App\\Jobs\\ProcessPodcast;
use App\\Services\\AudioProcessor;
use Illuminate\\Contracts\\Foundation\\Application;

$this-&gt;app-&gt;bindMethod([ProcessPodcast::class, &#39;handle&#39;], function (ProcessPodcast $job, Application $app) {
    return $job-&gt;handle($app-&gt;make(AudioProcessor::class));
});
</code></pre><blockquote><p><strong>Warning</strong><br> Binary data, such as raw image contents, should be passed through the <code>base64_encode</code> function before being passed to a queued job. Otherwise, the job may not properly serialize to JSON when being placed on the queue.</p></blockquote><p><a name="handling-relationships"></a></p><h4 id="queued-relationships" tabindex="-1"><a class="header-anchor" href="#queued-relationships" aria-hidden="true">#</a> Queued Relationships</h4><p>Because all loaded Eloquent model relationships also get serialized when a job is queued, the serialized job string can sometimes become quite large. Furthermore, when a job is deserialized and model relationships are re-retrieved from the database, they will be retrieved in their entirety. Any previous relationship constraints that were applied before the model was serialized during the job queueing process will not be applied when the job is deserialized. Therefore, if you wish to work with a subset of a given relationship, you should re-constrain that relationship within your queued job.</p><p>Or, to prevent relations from being serialized, you can call the <code>withoutRelations</code> method on the model when setting a property value. This method will return an instance of the model without its loaded relationships:</p><pre><code>/**
 * Create a new job instance.
 */
public function __construct(Podcast $podcast)
{
    $this-&gt;podcast = $podcast-&gt;withoutRelations();
}
</code></pre><p>If you are using PHP constructor property promotion and would like to indicate that an Eloquent model should not have its relations serialized, you may use the <code>WithoutRelations</code> attribute:</p><pre><code>use Illuminate\\Queue\\Attributes\\WithoutRelations;

/**
 * Create a new job instance.
 */
public function __construct(
    #[WithoutRelations]
    public Podcast $podcast
) {
}
</code></pre><p>If a job receives a collection or array of Eloquent models instead of a single model, the models within that collection will not have their relationships restored when the job is deserialized and executed. This is to prevent excessive resource usage on jobs that deal with large numbers of models.</p><p><a name="unique-jobs"></a></p><h3 id="unique-jobs" tabindex="-1"><a class="header-anchor" href="#unique-jobs" aria-hidden="true">#</a> Unique Jobs</h3><blockquote><p><strong>Warning</strong><br> Unique jobs require a cache driver that supports <a href="./cache#atomic-locks">locks</a>. Currently, the <code>memcached</code>, <code>redis</code>, <code>dynamodb</code>, <code>database</code>, <code>file</code>, and <code>array</code> cache drivers support atomic locks. In addition, unique job constraints do not apply to jobs within batches.</p></blockquote><p>Sometimes, you may want to ensure that only one instance of a specific job is on the queue at any point in time. You may do so by implementing the <code>ShouldBeUnique</code> interface on your job class. This interface does not require you to define any additional methods on your class:</p><pre><code>&lt;?php

use Illuminate\\Contracts\\Queue\\ShouldQueue;
use Illuminate\\Contracts\\Queue\\ShouldBeUnique;

class UpdateSearchIndex implements ShouldQueue, ShouldBeUnique
{
    ...
}
</code></pre><p>In the example above, the <code>UpdateSearchIndex</code> job is unique. So, the job will not be dispatched if another instance of the job is already on the queue and has not finished processing.</p><p>In certain cases, you may want to define a specific &quot;key&quot; that makes the job unique or you may want to specify a timeout beyond which the job no longer stays unique. To accomplish this, you may define <code>uniqueId</code> and <code>uniqueFor</code> properties or methods on your job class:</p><pre><code>&lt;?php

use App\\Models\\Product;
use Illuminate\\Contracts\\Queue\\ShouldQueue;
use Illuminate\\Contracts\\Queue\\ShouldBeUnique;

class UpdateSearchIndex implements ShouldQueue, ShouldBeUnique
{
    /**
     * The product instance.
     *
     * @var \\App\\Product
     */
    public $product;

    /**
     * The number of seconds after which the job&#39;s unique lock will be released.
     *
     * @var int
     */
    public $uniqueFor = 3600;

    /**
     * Get the unique ID for the job.
     */
    public function uniqueId(): string
    {
        return $this-&gt;product-&gt;id;
    }
}
</code></pre><p>In the example above, the <code>UpdateSearchIndex</code> job is unique by a product ID. So, any new dispatches of the job with the same product ID will be ignored until the existing job has completed processing. In addition, if the existing job is not processed within one hour, the unique lock will be released and another job with the same unique key can be dispatched to the queue.</p><blockquote><p><strong>Warning</strong><br> If your application dispatches jobs from multiple web servers or containers, you should ensure that all of your servers are communicating with the same central cache server so that Laravel can accurately determine if a job is unique.</p></blockquote><p><a name="keeping-jobs-unique-until-processing-begins"></a></p><h4 id="keeping-jobs-unique-until-processing-begins" tabindex="-1"><a class="header-anchor" href="#keeping-jobs-unique-until-processing-begins" aria-hidden="true">#</a> Keeping Jobs Unique Until Processing Begins</h4><p>By default, unique jobs are &quot;unlocked&quot; after a job completes processing or fails all of its retry attempts. However, there may be situations where you would like your job to unlock immediately before it is processed. To accomplish this, your job should implement the <code>ShouldBeUniqueUntilProcessing</code> contract instead of the <code>ShouldBeUnique</code> contract:</p><pre><code>&lt;?php

use App\\Models\\Product;
use Illuminate\\Contracts\\Queue\\ShouldQueue;
use Illuminate\\Contracts\\Queue\\ShouldBeUniqueUntilProcessing;

class UpdateSearchIndex implements ShouldQueue, ShouldBeUniqueUntilProcessing
{
    // ...
}
</code></pre><p><a name="unique-job-locks"></a></p><h4 id="unique-job-locks" tabindex="-1"><a class="header-anchor" href="#unique-job-locks" aria-hidden="true">#</a> Unique Job Locks</h4><p>Behind the scenes, when a <code>ShouldBeUnique</code> job is dispatched, Laravel attempts to acquire a <a href="./cache#atomic-locks">lock</a> with the <code>uniqueId</code> key. If the lock is not acquired, the job is not dispatched. This lock is released when the job completes processing or fails all of its retry attempts. By default, Laravel will use the default cache driver to obtain this lock. However, if you wish to use another driver for acquiring the lock, you may define a <code>uniqueVia</code> method that returns the cache driver that should be used:</p><pre><code>use Illuminate\\Contracts\\Cache\\Repository;
use Illuminate\\Support\\Facades\\Cache;

class UpdateSearchIndex implements ShouldQueue, ShouldBeUnique
{
    ...

    /**
     * Get the cache driver for the unique job lock.
     */
    public function uniqueVia(): Repository
    {
        return Cache::driver(&#39;redis&#39;);
    }
}
</code></pre><blockquote><p><strong>Note</strong><br> If you only need to limit the concurrent processing of a job, use the <a href="./queues#preventing-job-overlaps"><code>WithoutOverlapping</code></a> job middleware instead.</p></blockquote><p><a name="encrypted-jobs"></a></p><h3 id="encrypted-jobs" tabindex="-1"><a class="header-anchor" href="#encrypted-jobs" aria-hidden="true">#</a> Encrypted Jobs</h3><p>Laravel allows you to ensure the privacy and integrity of a job&#39;s data via <a href="./encryption">encryption</a>. To get started, simply add the <code>ShouldBeEncrypted</code> interface to the job class. Once this interface has been added to the class, Laravel will automatically encrypt your job before pushing it onto a queue:</p><pre><code>&lt;?php

use Illuminate\\Contracts\\Queue\\ShouldBeEncrypted;
use Illuminate\\Contracts\\Queue\\ShouldQueue;

class UpdateSearchIndex implements ShouldQueue, ShouldBeEncrypted
{
    // ...
}
</code></pre><p><a name="job-middleware"></a></p><h2 id="job-middleware" tabindex="-1"><a class="header-anchor" href="#job-middleware" aria-hidden="true">#</a> Job Middleware</h2><p>Job middleware allow you to wrap custom logic around the execution of queued jobs, reducing boilerplate in the jobs themselves. For example, consider the following <code>handle</code> method which leverages Laravel&#39;s Redis rate limiting features to allow only one job to process every five seconds:</p><pre><code>use Illuminate\\Support\\Facades\\Redis;

/**
 * Execute the job.
 */
public function handle(): void
{
    Redis::throttle(&#39;key&#39;)-&gt;block(0)-&gt;allow(1)-&gt;every(5)-&gt;then(function () {
        info(&#39;Lock obtained...&#39;);

        // Handle job...
    }, function () {
        // Could not obtain lock...

        return $this-&gt;release(5);
    });
}
</code></pre><p>While this code is valid, the implementation of the <code>handle</code> method becomes noisy since it is cluttered with Redis rate limiting logic. In addition, this rate limiting logic must be duplicated for any other jobs that we want to rate limit.</p><p>Instead of rate limiting in the handle method, we could define a job middleware that handles rate limiting. Laravel does not have a default location for job middleware, so you are welcome to place job middleware anywhere in your application. In this example, we will place the middleware in an <code>app/Jobs/Middleware</code> directory:</p><pre><code>&lt;?php

namespace App\\Jobs\\Middleware;

use Closure;
use Illuminate\\Support\\Facades\\Redis;

class RateLimited
{
    /**
     * Process the queued job.
     *
     * @param  \\Closure(object): void  $next
     */
    public function handle(object $job, Closure $next): void
    {
        Redis::throttle(&#39;key&#39;)
                -&gt;block(0)-&gt;allow(1)-&gt;every(5)
                -&gt;then(function () use ($job, $next) {
                    // Lock obtained...

                    $next($job);
                }, function () use ($job) {
                    // Could not obtain lock...

                    $job-&gt;release(5);
                });
    }
}
</code></pre><p>As you can see, like <a href="./middleware">route middleware</a>, job middleware receive the job being processed and a callback that should be invoked to continue processing the job.</p><p>After creating job middleware, they may be attached to a job by returning them from the job&#39;s <code>middleware</code> method. This method does not exist on jobs scaffolded by the <code>make:job</code> Artisan command, so you will need to manually add it to your job class:</p><pre><code>use App\\Jobs\\Middleware\\RateLimited;

/**
 * Get the middleware the job should pass through.
 *
 * @return array&lt;int, object&gt;
 */
public function middleware(): array
{
    return [new RateLimited];
}
</code></pre><blockquote><p><strong>Note</strong><br> Job middleware can also be assigned to queueable event listeners, mailables, and notifications.</p></blockquote><p><a name="rate-limiting"></a></p><h3 id="rate-limiting" tabindex="-1"><a class="header-anchor" href="#rate-limiting" aria-hidden="true">#</a> Rate Limiting</h3><p>Although we just demonstrated how to write your own rate limiting job middleware, Laravel actually includes a rate limiting middleware that you may utilize to rate limit jobs. Like <a href="./routing#defining-rate-limiters">route rate limiters</a>, job rate limiters are defined using the <code>RateLimiter</code> facade&#39;s <code>for</code> method.</p><p>For example, you may wish to allow users to backup their data once per hour while imposing no such limit on premium customers. To accomplish this, you may define a <code>RateLimiter</code> in the <code>boot</code> method of your <code>AppServiceProvider</code>:</p><pre><code>use Illuminate\\Cache\\RateLimiting\\Limit;
use Illuminate\\Support\\Facades\\RateLimiter;

/**
 * Bootstrap any application services.
 */
public function boot(): void
{
    RateLimiter::for(&#39;backups&#39;, function (object $job) {
        return $job-&gt;user-&gt;vipCustomer()
                    ? Limit::none()
                    : Limit::perHour(1)-&gt;by($job-&gt;user-&gt;id);
    });
}
</code></pre><p>In the example above, we defined an hourly rate limit; however, you may easily define a rate limit based on minutes using the <code>perMinute</code> method. In addition, you may pass any value you wish to the <code>by</code> method of the rate limit; however, this value is most often used to segment rate limits by customer:</p><pre><code>return Limit::perMinute(50)-&gt;by($job-&gt;user-&gt;id);
</code></pre><p>Once you have defined your rate limit, you may attach the rate limiter to your job using the <code>Illuminate\\Queue\\Middleware\\RateLimited</code> middleware. Each time the job exceeds the rate limit, this middleware will release the job back to the queue with an appropriate delay based on the rate limit duration.</p><pre><code>use Illuminate\\Queue\\Middleware\\RateLimited;

/**
 * Get the middleware the job should pass through.
 *
 * @return array&lt;int, object&gt;
 */
public function middleware(): array
{
    return [new RateLimited(&#39;backups&#39;)];
}
</code></pre><p>Releasing a rate limited job back onto the queue will still increment the job&#39;s total number of <code>attempts</code>. You may wish to tune your <code>tries</code> and <code>maxExceptions</code> properties on your job class accordingly. Or, you may wish to use the <a href="#time-based-attempts"><code>retryUntil</code> method</a> to define the amount of time until the job should no longer be attempted.</p><p>If you do not want a job to be retried when it is rate limited, you may use the <code>dontRelease</code> method:</p><pre><code>/**
 * Get the middleware the job should pass through.
 *
 * @return array&lt;int, object&gt;
 */
public function middleware(): array
{
    return [(new RateLimited(&#39;backups&#39;))-&gt;dontRelease()];
}
</code></pre><blockquote><p><strong>Note</strong><br> If you are using Redis, you may use the <code>Illuminate\\Queue\\Middleware\\RateLimitedWithRedis</code> middleware, which is fine-tuned for Redis and more efficient than the basic rate limiting middleware.</p></blockquote><p><a name="preventing-job-overlaps"></a></p><h3 id="preventing-job-overlaps" tabindex="-1"><a class="header-anchor" href="#preventing-job-overlaps" aria-hidden="true">#</a> Preventing Job Overlaps</h3><p>Laravel includes an <code>Illuminate\\Queue\\Middleware\\WithoutOverlapping</code> middleware that allows you to prevent job overlaps based on an arbitrary key. This can be helpful when a queued job is modifying a resource that should only be modified by one job at a time.</p><p>For example, let&#39;s imagine you have a queued job that updates a user&#39;s credit score and you want to prevent credit score update job overlaps for the same user ID. To accomplish this, you can return the <code>WithoutOverlapping</code> middleware from your job&#39;s <code>middleware</code> method:</p><pre><code>use Illuminate\\Queue\\Middleware\\WithoutOverlapping;

/**
 * Get the middleware the job should pass through.
 *
 * @return array&lt;int, object&gt;
 */
public function middleware(): array
{
    return [new WithoutOverlapping($this-&gt;user-&gt;id)];
}
</code></pre><p>Any overlapping jobs of the same type will be released back to the queue. You may also specify the number of seconds that must elapse before the released job will be attempted again:</p><pre><code>/**
 * Get the middleware the job should pass through.
 *
 * @return array&lt;int, object&gt;
 */
public function middleware(): array
{
    return [(new WithoutOverlapping($this-&gt;order-&gt;id))-&gt;releaseAfter(60)];
}
</code></pre><p>If you wish to immediately delete any overlapping jobs so that they will not be retried, you may use the <code>dontRelease</code> method:</p><pre><code>/**
 * Get the middleware the job should pass through.
 *
 * @return array&lt;int, object&gt;
 */
public function middleware(): array
{
    return [(new WithoutOverlapping($this-&gt;order-&gt;id))-&gt;dontRelease()];
}
</code></pre><p>The <code>WithoutOverlapping</code> middleware is powered by Laravel&#39;s atomic lock feature. Sometimes, your job may unexpectedly fail or timeout in such a way that the lock is not released. Therefore, you may explicitly define a lock expiration time using the <code>expireAfter</code> method. For example, the example below will instruct Laravel to release the <code>WithoutOverlapping</code> lock three minutes after the job has started processing:</p><pre><code>/**
 * Get the middleware the job should pass through.
 *
 * @return array&lt;int, object&gt;
 */
public function middleware(): array
{
    return [(new WithoutOverlapping($this-&gt;order-&gt;id))-&gt;expireAfter(180)];
}
</code></pre><blockquote><p><strong>Warning</strong> The <code>WithoutOverlapping</code> middleware requires a cache driver that supports <a href="./cache#atomic-locks">locks</a>. Currently, the <code>memcached</code>, <code>redis</code>, <code>dynamodb</code>, <code>database</code>, <code>file</code>, and <code>array</code> cache drivers support atomic locks.</p></blockquote><p><a name="sharing-lock-keys"></a></p><h4 id="sharing-lock-keys-across-job-classes" tabindex="-1"><a class="header-anchor" href="#sharing-lock-keys-across-job-classes" aria-hidden="true">#</a> Sharing Lock Keys Across Job Classes</h4><p>By default, the <code>WithoutOverlapping</code> middleware will only prevent overlapping jobs of the same class. So, although two different job classes may use the same lock key, they will not be prevented from overlapping. However, you can instruct Laravel to apply the key across job classes using the <code>shared</code> method:</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Queue<span class="token punctuation">\\</span>Middleware<span class="token punctuation">\\</span>WithoutOverlapping</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">ProviderIsDown</span>
<span class="token punctuation">{</span>
    <span class="token comment">// ...</span>


    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">middleware</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">array</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">[</span>
            <span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">WithoutOverlapping</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;status:<span class="token interpolation"><span class="token punctuation">{</span><span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">provider</span><span class="token punctuation">}</span></span>&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">shared</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">ProviderIsUp</span>
<span class="token punctuation">{</span>
    <span class="token comment">// ...</span>


    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">middleware</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">array</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">[</span>
            <span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">WithoutOverlapping</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;status:<span class="token interpolation"><span class="token punctuation">{</span><span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">provider</span><span class="token punctuation">}</span></span>&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">shared</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="throttling-exceptions"></a></p><h3 id="throttling-exceptions" tabindex="-1"><a class="header-anchor" href="#throttling-exceptions" aria-hidden="true">#</a> Throttling Exceptions</h3><p>Laravel includes a <code>Illuminate\\Queue\\Middleware\\ThrottlesExceptions</code> middleware that allows you to throttle exceptions. Once the job throws a given number of exceptions, all further attempts to execute the job are delayed until a specified time interval lapses. This middleware is particularly useful for jobs that interact with third-party services that are unstable.</p><p>For example, let&#39;s imagine a queued job that interacts with a third-party API that begins throwing exceptions. To throttle exceptions, you can return the <code>ThrottlesExceptions</code> middleware from your job&#39;s <code>middleware</code> method. Typically, this middleware should be paired with a job that implements <a href="#time-based-attempts">time based attempts</a>:</p><pre><code>use DateTime;
use Illuminate\\Queue\\Middleware\\ThrottlesExceptions;

/**
 * Get the middleware the job should pass through.
 *
 * @return array&lt;int, object&gt;
 */
public function middleware(): array
{
    return [new ThrottlesExceptions(10, 5)];
}

/**
 * Determine the time at which the job should timeout.
 */
public function retryUntil(): DateTime
{
    return now()-&gt;addMinutes(5);
}
</code></pre><p>The first constructor argument accepted by the middleware is the number of exceptions the job can throw before being throttled, while the second constructor argument is the number of minutes that should elapse before the job is attempted again once it has been throttled. In the code example above, if the job throws 10 exceptions within 5 minutes, we will wait 5 minutes before attempting the job again.</p><p>When a job throws an exception but the exception threshold has not yet been reached, the job will typically be retried immediately. However, you may specify the number of minutes such a job should be delayed by calling the <code>backoff</code> method when attaching the middleware to the job:</p><pre><code>use Illuminate\\Queue\\Middleware\\ThrottlesExceptions;

/**
 * Get the middleware the job should pass through.
 *
 * @return array&lt;int, object&gt;
 */
public function middleware(): array
{
    return [(new ThrottlesExceptions(10, 5))-&gt;backoff(5)];
}
</code></pre><p>Internally, this middleware uses Laravel&#39;s cache system to implement rate limiting, and the job&#39;s class name is utilized as the cache &quot;key&quot;. You may override this key by calling the <code>by</code> method when attaching the middleware to your job. This may be useful if you have multiple jobs interacting with the same third-party service and you would like them to share a common throttling &quot;bucket&quot;:</p><pre><code>use Illuminate\\Queue\\Middleware\\ThrottlesExceptions;

/**
 * Get the middleware the job should pass through.
 *
 * @return array&lt;int, object&gt;
 */
public function middleware(): array
{
    return [(new ThrottlesExceptions(10, 10))-&gt;by(&#39;key&#39;)];
}
</code></pre><blockquote><p><strong>Note</strong><br> If you are using Redis, you may use the <code>Illuminate\\Queue\\Middleware\\ThrottlesExceptionsWithRedis</code> middleware, which is fine-tuned for Redis and more efficient than the basic exception throttling middleware.</p></blockquote><p><a name="dispatching-jobs"></a></p><h2 id="dispatching-jobs" tabindex="-1"><a class="header-anchor" href="#dispatching-jobs" aria-hidden="true">#</a> Dispatching Jobs</h2><p>Once you have written your job class, you may dispatch it using the <code>dispatch</code> method on the job itself. The arguments passed to the <code>dispatch</code> method will be given to the job&#39;s constructor:</p><pre><code>&lt;?php

namespace App\\Http\\Controllers;

use App\\Http\\Controllers\\Controller;
use App\\Jobs\\ProcessPodcast;
use App\\Models\\Podcast;
use Illuminate\\Http\\RedirectResponse;
use Illuminate\\Http\\Request;

class PodcastController extends Controller
{
    /**
     * Store a new podcast.
     */
    public function store(Request $request): RedirectResponse
    {
        $podcast = Podcast::create(/* ... */);

        // ...

        ProcessPodcast::dispatch($podcast);

        return redirect(&#39;/podcasts&#39;);
    }
}
</code></pre><p>If you would like to conditionally dispatch a job, you may use the <code>dispatchIf</code> and <code>dispatchUnless</code> methods:</p><pre><code>ProcessPodcast::dispatchIf($accountActive, $podcast);

ProcessPodcast::dispatchUnless($accountSuspended, $podcast);
</code></pre><p>In new Laravel applications, the <code>sync</code> driver is the default queue driver. This driver executes jobs synchronously in the foreground of the current request, which is often convenient during local development. If you would like to actually begin queueing jobs for background processing, you may specify a different queue driver within your application&#39;s <code>config/queue.php</code> configuration file.</p><p><a name="delayed-dispatching"></a></p><h3 id="delayed-dispatching" tabindex="-1"><a class="header-anchor" href="#delayed-dispatching" aria-hidden="true">#</a> Delayed Dispatching</h3><p>If you would like to specify that a job should not be immediately available for processing by a queue worker, you may use the <code>delay</code> method when dispatching the job. For example, let&#39;s specify that a job should not be available for processing until 10 minutes after it has been dispatched:</p><pre><code>&lt;?php

namespace App\\Http\\Controllers;

use App\\Http\\Controllers\\Controller;
use App\\Jobs\\ProcessPodcast;
use App\\Models\\Podcast;
use Illuminate\\Http\\RedirectResponse;
use Illuminate\\Http\\Request;

class PodcastController extends Controller
{
    /**
     * Store a new podcast.
     */
    public function store(Request $request): RedirectResponse
    {
        $podcast = Podcast::create(/* ... */);

        // ...

        ProcessPodcast::dispatch($podcast)
                    -&gt;delay(now()-&gt;addMinutes(10));

        return redirect(&#39;/podcasts&#39;);
    }
}
</code></pre><blockquote><p><strong>Warning</strong><br> The Amazon SQS queue service has a maximum delay time of 15 minutes.</p></blockquote><p><a name="dispatching-after-the-response-is-sent-to-browser"></a></p><h4 id="dispatching-after-the-response-is-sent-to-browser" tabindex="-1"><a class="header-anchor" href="#dispatching-after-the-response-is-sent-to-browser" aria-hidden="true">#</a> Dispatching After The Response Is Sent To Browser</h4><p>Alternatively, the <code>dispatchAfterResponse</code> method delays dispatching a job until after the HTTP response is sent to the user&#39;s browser if your web server is using FastCGI. This will still allow the user to begin using the application even though a queued job is still executing. This should typically only be used for jobs that take about a second, such as sending an email. Since they are processed within the current HTTP request, jobs dispatched in this fashion do not require a queue worker to be running in order for them to be processed:</p><pre><code>use App\\Jobs\\SendNotification;

SendNotification::dispatchAfterResponse();
</code></pre><p>You may also <code>dispatch</code> a closure and chain the <code>afterResponse</code> method onto the <code>dispatch</code> helper to execute a closure after the HTTP response has been sent to the browser:</p><pre><code>use App\\Mail\\WelcomeMessage;
use Illuminate\\Support\\Facades\\Mail;

dispatch(function () {
    Mail::to(&#39;taylor@example.com&#39;)-&gt;send(new WelcomeMessage);
})-&gt;afterResponse();
</code></pre><p><a name="synchronous-dispatching"></a></p><h3 id="synchronous-dispatching" tabindex="-1"><a class="header-anchor" href="#synchronous-dispatching" aria-hidden="true">#</a> Synchronous Dispatching</h3><p>If you would like to dispatch a job immediately (synchronously), you may use the <code>dispatchSync</code> method. When using this method, the job will not be queued and will be executed immediately within the current process:</p><pre><code>&lt;?php

namespace App\\Http\\Controllers;

use App\\Http\\Controllers\\Controller;
use App\\Jobs\\ProcessPodcast;
use App\\Models\\Podcast;
use Illuminate\\Http\\RedirectResponse;
use Illuminate\\Http\\Request;

class PodcastController extends Controller
{
    /**
     * Store a new podcast.
     */
    public function store(Request $request): RedirectResponse
    {
        $podcast = Podcast::create(/* ... */);

        // Create podcast...

        ProcessPodcast::dispatchSync($podcast);

        return redirect(&#39;/podcasts&#39;);
    }
}
</code></pre><p><a name="jobs-and-database-transactions"></a></p><h3 id="jobs-database-transactions" tabindex="-1"><a class="header-anchor" href="#jobs-database-transactions" aria-hidden="true">#</a> Jobs &amp; Database Transactions</h3><p>While it is perfectly fine to dispatch jobs within database transactions, you should take special care to ensure that your job will actually be able to execute successfully. When dispatching a job within a transaction, it is possible that the job will be processed by a worker before the parent transaction has committed. When this happens, any updates you have made to models or database records during the database transaction(s) may not yet be reflected in the database. In addition, any models or database records created within the transaction(s) may not exist in the database.</p><p>Thankfully, Laravel provides several methods of working around this problem. First, you may set the <code>after_commit</code> connection option in your queue connection&#39;s configuration array:</p><pre><code>&#39;redis&#39; =&gt; [
    &#39;driver&#39; =&gt; &#39;redis&#39;,
    // ...
    &#39;after_commit&#39; =&gt; true,
],
</code></pre><p>When the <code>after_commit</code> option is <code>true</code>, you may dispatch jobs within database transactions; however, Laravel will wait until the open parent database transactions have been committed before actually dispatching the job. Of course, if no database transactions are currently open, the job will be dispatched immediately.</p><p>If a transaction is rolled back due to an exception that occurs during the transaction, the jobs that were dispatched during that transaction will be discarded.</p><blockquote><p><strong>Note</strong><br> Setting the <code>after_commit</code> configuration option to <code>true</code> will also cause any queued event listeners, mailables, notifications, and broadcast events to be dispatched after all open database transactions have been committed.</p></blockquote><p><a name="specifying-commit-dispatch-behavior-inline"></a></p><h4 id="specifying-commit-dispatch-behavior-inline" tabindex="-1"><a class="header-anchor" href="#specifying-commit-dispatch-behavior-inline" aria-hidden="true">#</a> Specifying Commit Dispatch Behavior Inline</h4><p>If you do not set the <code>after_commit</code> queue connection configuration option to <code>true</code>, you may still indicate that a specific job should be dispatched after all open database transactions have been committed. To accomplish this, you may chain the <code>afterCommit</code> method onto your dispatch operation:</p><pre><code>use App\\Jobs\\ProcessPodcast;

ProcessPodcast::dispatch($podcast)-&gt;afterCommit();
</code></pre><p>Likewise, if the <code>after_commit</code> configuration option is set to <code>true</code>, you may indicate that a specific job should be dispatched immediately without waiting for any open database transactions to commit:</p><pre><code>ProcessPodcast::dispatch($podcast)-&gt;beforeCommit();
</code></pre><p><a name="job-chaining"></a></p><h3 id="job-chaining" tabindex="-1"><a class="header-anchor" href="#job-chaining" aria-hidden="true">#</a> Job Chaining</h3><p>Job chaining allows you to specify a list of queued jobs that should be run in sequence after the primary job has executed successfully. If one job in the sequence fails, the rest of the jobs will not be run. To execute a queued job chain, you may use the <code>chain</code> method provided by the <code>Bus</code> facade. Laravel&#39;s command bus is a lower level component that queued job dispatching is built on top of:</p><pre><code>use App\\Jobs\\OptimizePodcast;
use App\\Jobs\\ProcessPodcast;
use App\\Jobs\\ReleasePodcast;
use Illuminate\\Support\\Facades\\Bus;

Bus::chain([
    new ProcessPodcast,
    new OptimizePodcast,
    new ReleasePodcast,
])-&gt;dispatch();
</code></pre><p>In addition to chaining job class instances, you may also chain closures:</p><pre><code>Bus::chain([
    new ProcessPodcast,
    new OptimizePodcast,
    function () {
        Podcast::update(/* ... */);
    },
])-&gt;dispatch();
</code></pre><blockquote><p><strong>Warning</strong><br> Deleting jobs using the <code>$this-&gt;delete()</code> method within the job will not prevent chained jobs from being processed. The chain will only stop executing if a job in the chain fails.</p></blockquote><p><a name="chain-connection-queue"></a></p><h4 id="chain-connection-queue" tabindex="-1"><a class="header-anchor" href="#chain-connection-queue" aria-hidden="true">#</a> Chain Connection &amp; Queue</h4><p>If you would like to specify the connection and queue that should be used for the chained jobs, you may use the <code>onConnection</code> and <code>onQueue</code> methods. These methods specify the queue connection and queue name that should be used unless the queued job is explicitly assigned a different connection / queue:</p><pre><code>Bus::chain([
    new ProcessPodcast,
    new OptimizePodcast,
    new ReleasePodcast,
])-&gt;onConnection(&#39;redis&#39;)-&gt;onQueue(&#39;podcasts&#39;)-&gt;dispatch();
</code></pre><p><a name="chain-failures"></a></p><h4 id="chain-failures" tabindex="-1"><a class="header-anchor" href="#chain-failures" aria-hidden="true">#</a> Chain Failures</h4><p>When chaining jobs, you may use the <code>catch</code> method to specify a closure that should be invoked if a job within the chain fails. The given callback will receive the <code>Throwable</code> instance that caused the job failure:</p><pre><code>use Illuminate\\Support\\Facades\\Bus;
use Throwable;

Bus::chain([
    new ProcessPodcast,
    new OptimizePodcast,
    new ReleasePodcast,
])-&gt;catch(function (Throwable $e) {
    // A job within the chain has failed...
})-&gt;dispatch();
</code></pre><blockquote><p><strong>Warning</strong><br> Since chain callbacks are serialized and executed at a later time by the Laravel queue, you should not use the <code>$this</code> variable within chain callbacks.</p></blockquote><p><a name="customizing-the-queue-and-connection"></a></p><h3 id="customizing-the-queue-connection" tabindex="-1"><a class="header-anchor" href="#customizing-the-queue-connection" aria-hidden="true">#</a> Customizing The Queue &amp; Connection</h3><p><a name="dispatching-to-a-particular-queue"></a></p><h4 id="dispatching-to-a-particular-queue" tabindex="-1"><a class="header-anchor" href="#dispatching-to-a-particular-queue" aria-hidden="true">#</a> Dispatching To A Particular Queue</h4><p>By pushing jobs to different queues, you may &quot;categorize&quot; your queued jobs and even prioritize how many workers you assign to various queues. Keep in mind, this does not push jobs to different queue &quot;connections&quot; as defined by your queue configuration file, but only to specific queues within a single connection. To specify the queue, use the <code>onQueue</code> method when dispatching the job:</p><pre><code>&lt;?php

namespace App\\Http\\Controllers;

use App\\Http\\Controllers\\Controller;
use App\\Jobs\\ProcessPodcast;
use App\\Models\\Podcast;
use Illuminate\\Http\\RedirectResponse;
use Illuminate\\Http\\Request;

class PodcastController extends Controller
{
    /**
     * Store a new podcast.
     */
    public function store(Request $request): RedirectResponse
    {
        $podcast = Podcast::create(/* ... */);

        // Create podcast...

        ProcessPodcast::dispatch($podcast)-&gt;onQueue(&#39;processing&#39;);

        return redirect(&#39;/podcasts&#39;);
    }
}
</code></pre><p>Alternatively, you may specify the job&#39;s queue by calling the <code>onQueue</code> method within the job&#39;s constructor:</p><pre><code>&lt;?php

namespace App\\Jobs;

 use Illuminate\\Bus\\Queueable;
 use Illuminate\\Contracts\\Queue\\ShouldQueue;
 use Illuminate\\Foundation\\Bus\\Dispatchable;
 use Illuminate\\Queue\\InteractsWithQueue;
 use Illuminate\\Queue\\SerializesModels;

class ProcessPodcast implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * Create a new job instance.
     */
    public function __construct()
    {
        $this-&gt;onQueue(&#39;processing&#39;);
    }
}
</code></pre><p><a name="dispatching-to-a-particular-connection"></a></p><h4 id="dispatching-to-a-particular-connection" tabindex="-1"><a class="header-anchor" href="#dispatching-to-a-particular-connection" aria-hidden="true">#</a> Dispatching To A Particular Connection</h4><p>If your application interacts with multiple queue connections, you may specify which connection to push a job to using the <code>onConnection</code> method:</p><pre><code>&lt;?php

namespace App\\Http\\Controllers;

use App\\Http\\Controllers\\Controller;
use App\\Jobs\\ProcessPodcast;
use App\\Models\\Podcast;
use Illuminate\\Http\\RedirectResponse;
use Illuminate\\Http\\Request;

class PodcastController extends Controller
{
    /**
     * Store a new podcast.
     */
    public function store(Request $request): RedirectResponse
    {
        $podcast = Podcast::create(/* ... */);

        // Create podcast...

        ProcessPodcast::dispatch($podcast)-&gt;onConnection(&#39;sqs&#39;);

        return redirect(&#39;/podcasts&#39;);
    }
}
</code></pre><p>You may chain the <code>onConnection</code> and <code>onQueue</code> methods together to specify the connection and the queue for a job:</p><pre><code>ProcessPodcast::dispatch($podcast)
              -&gt;onConnection(&#39;sqs&#39;)
              -&gt;onQueue(&#39;processing&#39;);
</code></pre><p>Alternatively, you may specify the job&#39;s connection by calling the <code>onConnection</code> method within the job&#39;s constructor:</p><pre><code>&lt;?php

namespace App\\Jobs;

 use Illuminate\\Bus\\Queueable;
 use Illuminate\\Contracts\\Queue\\ShouldQueue;
 use Illuminate\\Foundation\\Bus\\Dispatchable;
 use Illuminate\\Queue\\InteractsWithQueue;
 use Illuminate\\Queue\\SerializesModels;

class ProcessPodcast implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * Create a new job instance.
     */
    public function __construct()
    {
        $this-&gt;onConnection(&#39;sqs&#39;);
    }
}
</code></pre><p><a name="max-job-attempts-and-timeout"></a></p><h3 id="specifying-max-job-attempts-timeout-values" tabindex="-1"><a class="header-anchor" href="#specifying-max-job-attempts-timeout-values" aria-hidden="true">#</a> Specifying Max Job Attempts / Timeout Values</h3><p><a name="max-attempts"></a></p><h4 id="max-attempts" tabindex="-1"><a class="header-anchor" href="#max-attempts" aria-hidden="true">#</a> Max Attempts</h4><p>If one of your queued jobs is encountering an error, you likely do not want it to keep retrying indefinitely. Therefore, Laravel provides various ways to specify how many times or for how long a job may be attempted.</p><p>One approach to specifying the maximum number of times a job may be attempted is via the <code>--tries</code> switch on the Artisan command line. This will apply to all jobs processed by the worker unless the job being processed specifies the number of times it may be attempted:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan queue:work <span class="token parameter variable">--tries</span><span class="token operator">=</span><span class="token number">3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>If a job exceeds its maximum number of attempts, it will be considered a &quot;failed&quot; job. For more information on handling failed jobs, consult the <a href="#dealing-with-failed-jobs">failed job documentation</a>. If <code>--tries=0</code> is provided to the <code>queue:work</code> command, the job will be retried indefinitely.</p><p>You may take a more granular approach by defining the maximum number of times a job may be attempted on the job class itself. If the maximum number of attempts is specified on the job, it will take precedence over the <code>--tries</code> value provided on the command line:</p><pre><code>&lt;?php

namespace App\\Jobs;

class ProcessPodcast implements ShouldQueue
{
    /**
     * The number of times the job may be attempted.
     *
     * @var int
     */
    public $tries = 5;
}
</code></pre><p><a name="time-based-attempts"></a></p><h4 id="time-based-attempts" tabindex="-1"><a class="header-anchor" href="#time-based-attempts" aria-hidden="true">#</a> Time Based Attempts</h4><p>As an alternative to defining how many times a job may be attempted before it fails, you may define a time at which the job should no longer be attempted. This allows a job to be attempted any number of times within a given time frame. To define the time at which a job should no longer be attempted, add a <code>retryUntil</code> method to your job class. This method should return a <code>DateTime</code> instance:</p><pre><code>use DateTime;

/**
 * Determine the time at which the job should timeout.
 */
public function retryUntil(): DateTime
{
    return now()-&gt;addMinutes(10);
}
</code></pre><blockquote><p><strong>Note</strong><br> You may also define a <code>tries</code> property or <code>retryUntil</code> method on your <a href="./events#queued-event-listeners">queued event listeners</a>.</p></blockquote><p><a name="max-exceptions"></a></p><h4 id="max-exceptions" tabindex="-1"><a class="header-anchor" href="#max-exceptions" aria-hidden="true">#</a> Max Exceptions</h4><p>Sometimes you may wish to specify that a job may be attempted many times, but should fail if the retries are triggered by a given number of unhandled exceptions (as opposed to being released by the <code>release</code> method directly). To accomplish this, you may define a <code>maxExceptions</code> property on your job class:</p><pre><code>&lt;?php

namespace App\\Jobs;

use Illuminate\\Support\\Facades\\Redis;

class ProcessPodcast implements ShouldQueue
{
    /**
     * The number of times the job may be attempted.
     *
     * @var int
     */
    public $tries = 25;

    /**
     * The maximum number of unhandled exceptions to allow before failing.
     *
     * @var int
     */
    public $maxExceptions = 3;

    /**
     * Execute the job.
     */
    public function handle(): void
    {
        Redis::throttle(&#39;key&#39;)-&gt;allow(10)-&gt;every(60)-&gt;then(function () {
            // Lock obtained, process the podcast...
        }, function () {
            // Unable to obtain lock...
            return $this-&gt;release(10);
        });
    }
}
</code></pre><p>In this example, the job is released for ten seconds if the application is unable to obtain a Redis lock and will continue to be retried up to 25 times. However, the job will fail if three unhandled exceptions are thrown by the job.</p><p><a name="timeout"></a></p><h4 id="timeout" tabindex="-1"><a class="header-anchor" href="#timeout" aria-hidden="true">#</a> Timeout</h4><p>Often, you know roughly how long you expect your queued jobs to take. For this reason, Laravel allows you to specify a &quot;timeout&quot; value. By default, the timeout value is 60 seconds. If a job is processing for longer than the number of seconds specified by the timeout value, the worker processing the job will exit with an error. Typically, the worker will be restarted automatically by a <a href="#supervisor-configuration">process manager configured on your server</a>.</p><p>The maximum number of seconds that jobs can run may be specified using the <code>--timeout</code> switch on the Artisan command line:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan queue:work <span class="token parameter variable">--timeout</span><span class="token operator">=</span><span class="token number">30</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>If the job exceeds its maximum attempts by continually timing out, it will be marked as failed.</p><p>You may also define the maximum number of seconds a job should be allowed to run on the job class itself. If the timeout is specified on the job, it will take precedence over any timeout specified on the command line:</p><pre><code>&lt;?php

namespace App\\Jobs;

class ProcessPodcast implements ShouldQueue
{
    /**
     * The number of seconds the job can run before timing out.
     *
     * @var int
     */
    public $timeout = 120;
}
</code></pre><p>Sometimes, IO blocking processes such as sockets or outgoing HTTP connections may not respect your specified timeout. Therefore, when using these features, you should always attempt to specify a timeout using their APIs as well. For example, when using Guzzle, you should always specify a connection and request timeout value.</p><blockquote><p><strong>Warning</strong> The <code>pcntl</code> PHP extension must be installed in order to specify job timeouts. In addition, a job&#39;s &quot;timeout&quot; value should always be less than its <a href="#job-expiration">&quot;retry after&quot;</a> value. Otherwise, the job may be re-attempted before it has actually finished executing or timed out.</p></blockquote><p><a name="failing-on-timeout"></a></p><h4 id="failing-on-timeout" tabindex="-1"><a class="header-anchor" href="#failing-on-timeout" aria-hidden="true">#</a> Failing On Timeout</h4><p>If you would like to indicate that a job should be marked as <a href="#dealing-with-failed-jobs">failed</a> on timeout, you may define the <code>$failOnTimeout</code> property on the job class:</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token doc-comment comment">/**
 * Indicate if the job should be marked as failed on timeout.
 *
 * <span class="token keyword">@var</span> <span class="token class-name"><span class="token keyword">bool</span></span>
 */</span>
<span class="token keyword">public</span> <span class="token variable">$failOnTimeout</span> <span class="token operator">=</span> <span class="token constant boolean">true</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="error-handling"></a></p><h3 id="error-handling" tabindex="-1"><a class="header-anchor" href="#error-handling" aria-hidden="true">#</a> Error Handling</h3><p>If an exception is thrown while the job is being processed, the job will automatically be released back onto the queue so it may be attempted again. The job will continue to be released until it has been attempted the maximum number of times allowed by your application. The maximum number of attempts is defined by the <code>--tries</code> switch used on the <code>queue:work</code> Artisan command. Alternatively, the maximum number of attempts may be defined on the job class itself. More information on running the queue worker <a href="#running-the-queue-worker">can be found below</a>.</p><p><a name="manually-releasing-a-job"></a></p><h4 id="manually-releasing-a-job" tabindex="-1"><a class="header-anchor" href="#manually-releasing-a-job" aria-hidden="true">#</a> Manually Releasing A Job</h4><p>Sometimes you may wish to manually release a job back onto the queue so that it can be attempted again at a later time. You may accomplish this by calling the <code>release</code> method:</p><pre><code>/**
 * Execute the job.
 */
public function handle(): void
{
    // ...

    $this-&gt;release();
}
</code></pre><p>By default, the <code>release</code> method will release the job back onto the queue for immediate processing. However, you may instruct the queue to not make the job available for processing until a given number of seconds has elapsed by passing an integer or date instance to the <code>release</code> method:</p><pre><code>$this-&gt;release(10);

$this-&gt;release(now()-&gt;addSeconds(10));
</code></pre><p><a name="manually-failing-a-job"></a></p><h4 id="manually-failing-a-job" tabindex="-1"><a class="header-anchor" href="#manually-failing-a-job" aria-hidden="true">#</a> Manually Failing A Job</h4><p>Occasionally you may need to manually mark a job as &quot;failed&quot;. To do so, you may call the <code>fail</code> method:</p><pre><code>/**
 * Execute the job.
 */
public function handle(): void
{
    // ...

    $this-&gt;fail();
}
</code></pre><p>If you would like to mark your job as failed because of an exception that you have caught, you may pass the exception to the <code>fail</code> method. Or, for convenience, you may pass a string error message which will be converted to an exception for you:</p><pre><code>$this-&gt;fail($exception);

$this-&gt;fail(&#39;Something went wrong.&#39;);
</code></pre><blockquote><p><strong>Note</strong><br> For more information on failed jobs, check out the <a href="#dealing-with-failed-jobs">documentation on dealing with job failures</a>.</p></blockquote><p><a name="job-batching"></a></p><h2 id="job-batching" tabindex="-1"><a class="header-anchor" href="#job-batching" aria-hidden="true">#</a> Job Batching</h2><p>Laravel&#39;s job batching feature allows you to easily execute a batch of jobs and then perform some action when the batch of jobs has completed executing. Before getting started, you should create a database migration to build a table to contain meta information about your job batches, such as their completion percentage. This migration may be generated using the <code>queue:batches-table</code> Artisan command:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan queue:batches-table

php artisan migrate
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="defining-batchable-jobs"></a></p><h3 id="defining-batchable-jobs" tabindex="-1"><a class="header-anchor" href="#defining-batchable-jobs" aria-hidden="true">#</a> Defining Batchable Jobs</h3><p>To define a batchable job, you should <a href="#creating-jobs">create a queueable job</a> as normal; however, you should add the <code>Illuminate\\Bus\\Batchable</code> trait to the job class. This trait provides access to a <code>batch</code> method which may be used to retrieve the current batch that the job is executing within:</p><pre><code>&lt;?php

namespace App\\Jobs;

use Illuminate\\Bus\\Batchable;
use Illuminate\\Bus\\Queueable;
use Illuminate\\Contracts\\Queue\\ShouldQueue;
use Illuminate\\Foundation\\Bus\\Dispatchable;
use Illuminate\\Queue\\InteractsWithQueue;
use Illuminate\\Queue\\SerializesModels;

class ImportCsv implements ShouldQueue
{
    use Batchable, Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * Execute the job.
     */
    public function handle(): void
    {
        if ($this-&gt;batch()-&gt;cancelled()) {
            // Determine if the batch has been cancelled...

            return;
        }

        // Import a portion of the CSV file...
    }
}
</code></pre><p><a name="dispatching-batches"></a></p><h3 id="dispatching-batches" tabindex="-1"><a class="header-anchor" href="#dispatching-batches" aria-hidden="true">#</a> Dispatching Batches</h3><p>To dispatch a batch of jobs, you should use the <code>batch</code> method of the <code>Bus</code> facade. Of course, batching is primarily useful when combined with completion callbacks. So, you may use the <code>then</code>, <code>catch</code>, and <code>finally</code> methods to define completion callbacks for the batch. Each of these callbacks will receive an <code>Illuminate\\Bus\\Batch</code> instance when they are invoked. In this example, we will imagine we are queueing a batch of jobs that each process a given number of rows from a CSV file:</p><pre><code>use App\\Jobs\\ImportCsv;
use Illuminate\\Bus\\Batch;
use Illuminate\\Support\\Facades\\Bus;
use Throwable;

$batch = Bus::batch([
    new ImportCsv(1, 100),
    new ImportCsv(101, 200),
    new ImportCsv(201, 300),
    new ImportCsv(301, 400),
    new ImportCsv(401, 500),
])-&gt;then(function (Batch $batch) {
    // All jobs completed successfully...
})-&gt;catch(function (Batch $batch, Throwable $e) {
    // First batch job failure detected...
})-&gt;finally(function (Batch $batch) {
    // The batch has finished executing...
})-&gt;dispatch();

return $batch-&gt;id;
</code></pre><p>The batch&#39;s ID, which may be accessed via the <code>$batch-&gt;id</code> property, may be used to <a href="#inspecting-batches">query the Laravel command bus</a> for information about the batch after it has been dispatched.</p><blockquote><p><strong>Warning</strong><br> Since batch callbacks are serialized and executed at a later time by the Laravel queue, you should not use the <code>$this</code> variable within the callbacks.</p></blockquote><p><a name="naming-batches"></a></p><h4 id="naming-batches" tabindex="-1"><a class="header-anchor" href="#naming-batches" aria-hidden="true">#</a> Naming Batches</h4><p>Some tools such as Laravel Horizon and Laravel Telescope may provide more user-friendly debug information for batches if batches are named. To assign an arbitrary name to a batch, you may call the <code>name</code> method while defining the batch:</p><pre><code>$batch = Bus::batch([
    // ...
])-&gt;then(function (Batch $batch) {
    // All jobs completed successfully...
})-&gt;name(&#39;Import CSV&#39;)-&gt;dispatch();
</code></pre><p><a name="batch-connection-queue"></a></p><h4 id="batch-connection-queue" tabindex="-1"><a class="header-anchor" href="#batch-connection-queue" aria-hidden="true">#</a> Batch Connection &amp; Queue</h4><p>If you would like to specify the connection and queue that should be used for the batched jobs, you may use the <code>onConnection</code> and <code>onQueue</code> methods. All batched jobs must execute within the same connection and queue:</p><pre><code>$batch = Bus::batch([
    // ...
])-&gt;then(function (Batch $batch) {
    // All jobs completed successfully...
})-&gt;onConnection(&#39;redis&#39;)-&gt;onQueue(&#39;imports&#39;)-&gt;dispatch();
</code></pre><p><a name="chains-and-batches"></a></p><h3 id="chains-batches" tabindex="-1"><a class="header-anchor" href="#chains-batches" aria-hidden="true">#</a> Chains &amp; Batches</h3><p>You may define a set of <a href="#job-chaining">chained jobs</a> within a batch by placing the chained jobs within an array. For example, we may execute two job chains in parallel and execute a callback when both job chains have finished processing:</p><pre><code>use App\\Jobs\\ReleasePodcast;
use App\\Jobs\\SendPodcastReleaseNotification;
use Illuminate\\Bus\\Batch;
use Illuminate\\Support\\Facades\\Bus;

Bus::batch([
    [
        new ReleasePodcast(1),
        new SendPodcastReleaseNotification(1),
    ],
    [
        new ReleasePodcast(2),
        new SendPodcastReleaseNotification(2),
    ],
])-&gt;then(function (Batch $batch) {
    // ...
})-&gt;dispatch();
</code></pre><p>Conversely, you may run batches of jobs within a <a href="#job-chaining">chain</a> by defining batches within the chain. For example, you could first run a batch of jobs to release multiple podcasts then a batch of jobs to send the release notifications:</p><pre><code>use App\\Jobs\\FlushPodcastCache;
use App\\Jobs\\ReleasePodcast;
use App\\Jobs\\SendPodcastReleaseNotification;
use Illuminate\\Support\\Facades\\Bus;

Bus::chain([
    new FlushPodcastCache,
    Bus::batch([
        new ReleasePodcast(1),
        new ReleasePodcast(2),
    ]),
    Bus::batch([
        new SendPodcastReleaseNotification(1),
        new SendPodcastReleaseNotification(2),
    ]),
])-&gt;dispatch();
</code></pre><p><a name="adding-jobs-to-batches"></a></p><h3 id="adding-jobs-to-batches" tabindex="-1"><a class="header-anchor" href="#adding-jobs-to-batches" aria-hidden="true">#</a> Adding Jobs To Batches</h3><p>Sometimes it may be useful to add additional jobs to a batch from within a batched job. This pattern can be useful when you need to batch thousands of jobs which may take too long to dispatch during a web request. So, instead, you may wish to dispatch an initial batch of &quot;loader&quot; jobs that hydrate the batch with even more jobs:</p><pre><code>$batch = Bus::batch([
    new LoadImportBatch,
    new LoadImportBatch,
    new LoadImportBatch,
])-&gt;then(function (Batch $batch) {
    // All jobs completed successfully...
})-&gt;name(&#39;Import Contacts&#39;)-&gt;dispatch();
</code></pre><p>In this example, we will use the <code>LoadImportBatch</code> job to hydrate the batch with additional jobs. To accomplish this, we may use the <code>add</code> method on the batch instance that may be accessed via the job&#39;s <code>batch</code> method:</p><pre><code>use App\\Jobs\\ImportContacts;
use Illuminate\\Support\\Collection;

/**
 * Execute the job.
 */
public function handle(): void
{
    if ($this-&gt;batch()-&gt;cancelled()) {
        return;
    }

    $this-&gt;batch()-&gt;add(Collection::times(1000, function () {
        return new ImportContacts;
    }));
}
</code></pre><blockquote><p><strong>Warning</strong><br> You may only add jobs to a batch from within a job that belongs to the same batch.</p></blockquote><p><a name="inspecting-batches"></a></p><h3 id="inspecting-batches" tabindex="-1"><a class="header-anchor" href="#inspecting-batches" aria-hidden="true">#</a> Inspecting Batches</h3><p>The <code>Illuminate\\Bus\\Batch</code> instance that is provided to batch completion callbacks has a variety of properties and methods to assist you in interacting with and inspecting a given batch of jobs:</p><pre><code>// The UUID of the batch...
$batch-&gt;id;

// The name of the batch (if applicable)...
$batch-&gt;name;

// The number of jobs assigned to the batch...
$batch-&gt;totalJobs;

// The number of jobs that have not been processed by the queue...
$batch-&gt;pendingJobs;

// The number of jobs that have failed...
$batch-&gt;failedJobs;

// The number of jobs that have been processed thus far...
$batch-&gt;processedJobs();

// The completion percentage of the batch (0-100)...
$batch-&gt;progress();

// Indicates if the batch has finished executing...
$batch-&gt;finished();

// Cancel the execution of the batch...
$batch-&gt;cancel();

// Indicates if the batch has been cancelled...
$batch-&gt;cancelled();
</code></pre><p><a name="returning-batches-from-routes"></a></p><h4 id="returning-batches-from-routes" tabindex="-1"><a class="header-anchor" href="#returning-batches-from-routes" aria-hidden="true">#</a> Returning Batches From Routes</h4><p>All <code>Illuminate\\Bus\\Batch</code> instances are JSON serializable, meaning you can return them directly from one of your application&#39;s routes to retrieve a JSON payload containing information about the batch, including its completion progress. This makes it convenient to display information about the batch&#39;s completion progress in your application&#39;s UI.</p><p>To retrieve a batch by its ID, you may use the <code>Bus</code> facade&#39;s <code>findBatch</code> method:</p><pre><code>use Illuminate\\Support\\Facades\\Bus;
use Illuminate\\Support\\Facades\\Route;

Route::get(&#39;/batch/{batchId}&#39;, function (string $batchId) {
    return Bus::findBatch($batchId);
});
</code></pre><p><a name="cancelling-batches"></a></p><h3 id="cancelling-batches" tabindex="-1"><a class="header-anchor" href="#cancelling-batches" aria-hidden="true">#</a> Cancelling Batches</h3><p>Sometimes you may need to cancel a given batch&#39;s execution. This can be accomplished by calling the <code>cancel</code> method on the <code>Illuminate\\Bus\\Batch</code> instance:</p><pre><code>/**
 * Execute the job.
 */
public function handle(): void
{
    if ($this-&gt;user-&gt;exceedsImportLimit()) {
        return $this-&gt;batch()-&gt;cancel();
    }

    if ($this-&gt;batch()-&gt;cancelled()) {
        return;
    }
}
</code></pre><p>As you may have noticed in the previous examples, batched jobs should typically determine if their corresponding batch has been cancelled before continuing execution. However, for convenience, you may assign the <code>SkipIfBatchCancelled</code> <a href="#job-middleware">middleware</a> to the job instead. As its name indicates, this middleware will instruct Laravel to not process the job if its corresponding batch has been cancelled:</p><pre><code>use Illuminate\\Queue\\Middleware\\SkipIfBatchCancelled;

/**
 * Get the middleware the job should pass through.
 */
public function middleware(): array
{
    return [new SkipIfBatchCancelled];
}
</code></pre><p><a name="batch-failures"></a></p><h3 id="batch-failures" tabindex="-1"><a class="header-anchor" href="#batch-failures" aria-hidden="true">#</a> Batch Failures</h3><p>When a batched job fails, the <code>catch</code> callback (if assigned) will be invoked. This callback is only invoked for the first job that fails within the batch.</p><p><a name="allowing-failures"></a></p><h4 id="allowing-failures" tabindex="-1"><a class="header-anchor" href="#allowing-failures" aria-hidden="true">#</a> Allowing Failures</h4><p>When a job within a batch fails, Laravel will automatically mark the batch as &quot;cancelled&quot;. If you wish, you may disable this behavior so that a job failure does not automatically mark the batch as cancelled. This may be accomplished by calling the <code>allowFailures</code> method while dispatching the batch:</p><pre><code>$batch = Bus::batch([
    // ...
])-&gt;then(function (Batch $batch) {
    // All jobs completed successfully...
})-&gt;allowFailures()-&gt;dispatch();
</code></pre><p><a name="retrying-failed-batch-jobs"></a></p><h4 id="retrying-failed-batch-jobs" tabindex="-1"><a class="header-anchor" href="#retrying-failed-batch-jobs" aria-hidden="true">#</a> Retrying Failed Batch Jobs</h4><p>For convenience, Laravel provides a <code>queue:retry-batch</code> Artisan command that allows you to easily retry all of the failed jobs for a given batch. The <code>queue:retry-batch</code> command accepts the UUID of the batch whose failed jobs should be retried:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan queue:retry-batch 32dbc76c-4f82-4749-b610-a639fe0099b5
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a name="pruning-batches"></a></p><h3 id="pruning-batches" tabindex="-1"><a class="header-anchor" href="#pruning-batches" aria-hidden="true">#</a> Pruning Batches</h3><p>Without pruning, the <code>job_batches</code> table can accumulate records very quickly. To mitigate this, you should <a href="./scheduling">schedule</a> the <code>queue:prune-batches</code> Artisan command to run daily:</p><pre><code>$schedule-&gt;command(&#39;queue:prune-batches&#39;)-&gt;daily();
</code></pre><p>By default, all finished batches that are more than 24 hours old will be pruned. You may use the <code>hours</code> option when calling the command to determine how long to retain batch data. For example, the following command will delete all batches that finished over 48 hours ago:</p><pre><code>$schedule-&gt;command(&#39;queue:prune-batches --hours=48&#39;)-&gt;daily();
</code></pre><p>Sometimes, your <code>jobs_batches</code> table may accumulate batch records for batches that never completed successfully, such as batches where a job failed and that job was never retried successfully. You may instruct the <code>queue:prune-batches</code> command to prune these unfinished batch records using the <code>unfinished</code> option:</p><pre><code>$schedule-&gt;command(&#39;queue:prune-batches --hours=48 --unfinished=72&#39;)-&gt;daily();
</code></pre><p>Likewise, your <code>jobs_batches</code> table may also accumulate batch records for cancelled batches. You may instruct the <code>queue:prune-batches</code> command to prune these cancelled batch records using the <code>cancelled</code> option:</p><pre><code>$schedule-&gt;command(&#39;queue:prune-batches --hours=48 --cancelled=72&#39;)-&gt;daily();
</code></pre><p><a name="queueing-closures"></a></p><h2 id="queueing-closures" tabindex="-1"><a class="header-anchor" href="#queueing-closures" aria-hidden="true">#</a> Queueing Closures</h2><p>Instead of dispatching a job class to the queue, you may also dispatch a closure. This is great for quick, simple tasks that need to be executed outside of the current request cycle. When dispatching closures to the queue, the closure&#39;s code content is cryptographically signed so that it can not be modified in transit:</p><pre><code>$podcast = App\\Podcast::find(1);

dispatch(function () use ($podcast) {
    $podcast-&gt;publish();
});
</code></pre><p>Using the <code>catch</code> method, you may provide a closure that should be executed if the queued closure fails to complete successfully after exhausting all of your queue&#39;s <a href="#max-job-attempts-and-timeout">configured retry attempts</a>:</p><pre><code>use Throwable;

dispatch(function () use ($podcast) {
    $podcast-&gt;publish();
})-&gt;catch(function (Throwable $e) {
    // This job has failed...
});
</code></pre><blockquote><p><strong>Warning</strong><br> Since <code>catch</code> callbacks are serialized and executed at a later time by the Laravel queue, you should not use the <code>$this</code> variable within <code>catch</code> callbacks.</p></blockquote><p><a name="running-the-queue-worker"></a></p><h2 id="running-the-queue-worker" tabindex="-1"><a class="header-anchor" href="#running-the-queue-worker" aria-hidden="true">#</a> Running The Queue Worker</h2><p><a name="the-queue-work-command"></a></p><h3 id="the-queue-work-command" tabindex="-1"><a class="header-anchor" href="#the-queue-work-command" aria-hidden="true">#</a> The <code>queue:work</code> Command</h3><p>Laravel includes an Artisan command that will start a queue worker and process new jobs as they are pushed onto the queue. You may run the worker using the <code>queue:work</code> Artisan command. Note that once the <code>queue:work</code> command has started, it will continue to run until it is manually stopped or you close your terminal:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan queue:work
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p><strong>Note</strong><br> To keep the <code>queue:work</code> process running permanently in the background, you should use a process monitor such as <a href="#supervisor-configuration">Supervisor</a> to ensure that the queue worker does not stop running.</p></blockquote><p>You may include the <code>-v</code> flag when invoking the <code>queue:work</code> command if you would like the processed job IDs to be included in the command&#39;s output:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan queue:work <span class="token parameter variable">-v</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Remember, queue workers are long-lived processes and store the booted application state in memory. As a result, they will not notice changes in your code base after they have been started. So, during your deployment process, be sure to <a href="#queue-workers-and-deployment">restart your queue workers</a>. In addition, remember that any static state created or modified by your application will not be automatically reset between jobs.</p><p>Alternatively, you may run the <code>queue:listen</code> command. When using the <code>queue:listen</code> command, you don&#39;t have to manually restart the worker when you want to reload your updated code or reset the application state; however, this command is significantly less efficient than the <code>queue:work</code> command:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan queue:listen
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a name="running-multiple-queue-workers"></a></p><h4 id="running-multiple-queue-workers" tabindex="-1"><a class="header-anchor" href="#running-multiple-queue-workers" aria-hidden="true">#</a> Running Multiple Queue Workers</h4><p>To assign multiple workers to a queue and process jobs concurrently, you should simply start multiple <code>queue:work</code> processes. This can either be done locally via multiple tabs in your terminal or in production using your process manager&#39;s configuration settings. <a href="#supervisor-configuration">When using Supervisor</a>, you may use the <code>numprocs</code> configuration value.</p><p><a name="specifying-the-connection-queue"></a></p><h4 id="specifying-the-connection-queue" tabindex="-1"><a class="header-anchor" href="#specifying-the-connection-queue" aria-hidden="true">#</a> Specifying The Connection &amp; Queue</h4><p>You may also specify which queue connection the worker should utilize. The connection name passed to the <code>work</code> command should correspond to one of the connections defined in your <code>config/queue.php</code> configuration file:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan queue:work redis
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>By default, the <code>queue:work</code> command only processes jobs for the default queue on a given connection. However, you may customize your queue worker even further by only processing particular queues for a given connection. For example, if all of your emails are processed in an <code>emails</code> queue on your <code>redis</code> queue connection, you may issue the following command to start a worker that only processes that queue:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan queue:work redis <span class="token parameter variable">--queue</span><span class="token operator">=</span>emails
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a name="processing-a-specified-number-of-jobs"></a></p><h4 id="processing-a-specified-number-of-jobs" tabindex="-1"><a class="header-anchor" href="#processing-a-specified-number-of-jobs" aria-hidden="true">#</a> Processing A Specified Number Of Jobs</h4><p>The <code>--once</code> option may be used to instruct the worker to only process a single job from the queue:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan queue:work <span class="token parameter variable">--once</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>The <code>--max-jobs</code> option may be used to instruct the worker to process the given number of jobs and then exit. This option may be useful when combined with <a href="#supervisor-configuration">Supervisor</a> so that your workers are automatically restarted after processing a given number of jobs, releasing any memory they may have accumulated:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan queue:work --max-jobs<span class="token operator">=</span><span class="token number">1000</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a name="processing-all-queued-jobs-then-exiting"></a></p><h4 id="processing-all-queued-jobs-then-exiting" tabindex="-1"><a class="header-anchor" href="#processing-all-queued-jobs-then-exiting" aria-hidden="true">#</a> Processing All Queued Jobs &amp; Then Exiting</h4><p>The <code>--stop-when-empty</code> option may be used to instruct the worker to process all jobs and then exit gracefully. This option can be useful when processing Laravel queues within a Docker container if you wish to shutdown the container after the queue is empty:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan queue:work --stop-when-empty
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a name="processing-jobs-for-a-given-number-of-seconds"></a></p><h4 id="processing-jobs-for-a-given-number-of-seconds" tabindex="-1"><a class="header-anchor" href="#processing-jobs-for-a-given-number-of-seconds" aria-hidden="true">#</a> Processing Jobs For A Given Number Of Seconds</h4><p>The <code>--max-time</code> option may be used to instruct the worker to process jobs for the given number of seconds and then exit. This option may be useful when combined with <a href="#supervisor-configuration">Supervisor</a> so that your workers are automatically restarted after processing jobs for a given amount of time, releasing any memory they may have accumulated:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Process jobs for one hour and then exit...</span>
php artisan queue:work --max-time<span class="token operator">=</span><span class="token number">3600</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="worker-sleep-duration"></a></p><h4 id="worker-sleep-duration" tabindex="-1"><a class="header-anchor" href="#worker-sleep-duration" aria-hidden="true">#</a> Worker Sleep Duration</h4><p>When jobs are available on the queue, the worker will keep processing jobs with no delay in between jobs. However, the <code>sleep</code> option determines how many seconds the worker will &quot;sleep&quot; if there are no jobs available. Of course, while sleeping, the worker will not process any new jobs:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan queue:work <span class="token parameter variable">--sleep</span><span class="token operator">=</span><span class="token number">3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a name="resource-considerations"></a></p><h4 id="resource-considerations" tabindex="-1"><a class="header-anchor" href="#resource-considerations" aria-hidden="true">#</a> Resource Considerations</h4><p>Daemon queue workers do not &quot;reboot&quot; the framework before processing each job. Therefore, you should release any heavy resources after each job completes. For example, if you are doing image manipulation with the GD library, you should free the memory with <code>imagedestroy</code> when you are done processing the image.</p><p><a name="queue-priorities"></a></p><h3 id="queue-priorities" tabindex="-1"><a class="header-anchor" href="#queue-priorities" aria-hidden="true">#</a> Queue Priorities</h3><p>Sometimes you may wish to prioritize how your queues are processed. For example, in your <code>config/queue.php</code> configuration file, you may set the default <code>queue</code> for your <code>redis</code> connection to <code>low</code>. However, occasionally you may wish to push a job to a <code>high</code> priority queue like so:</p><pre><code>dispatch((new Job)-&gt;onQueue(&#39;high&#39;));
</code></pre><p>To start a worker that verifies that all of the <code>high</code> queue jobs are processed before continuing to any jobs on the <code>low</code> queue, pass a comma-delimited list of queue names to the <code>work</code> command:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan queue:work <span class="token parameter variable">--queue</span><span class="token operator">=</span>high,low
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a name="queue-workers-and-deployment"></a></p><h3 id="queue-workers-deployment" tabindex="-1"><a class="header-anchor" href="#queue-workers-deployment" aria-hidden="true">#</a> Queue Workers &amp; Deployment</h3><p>Since queue workers are long-lived processes, they will not notice changes to your code without being restarted. So, the simplest way to deploy an application using queue workers is to restart the workers during your deployment process. You may gracefully restart all of the workers by issuing the <code>queue:restart</code> command:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan queue:restart
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>This command will instruct all queue workers to gracefully exit after they finish processing their current job so that no existing jobs are lost. Since the queue workers will exit when the <code>queue:restart</code> command is executed, you should be running a process manager such as <a href="#supervisor-configuration">Supervisor</a> to automatically restart the queue workers.</p><blockquote><p><strong>Note</strong><br> The queue uses the <a href="./cache">cache</a> to store restart signals, so you should verify that a cache driver is properly configured for your application before using this feature.</p></blockquote><p><a name="job-expirations-and-timeouts"></a></p><h3 id="job-expirations-timeouts" tabindex="-1"><a class="header-anchor" href="#job-expirations-timeouts" aria-hidden="true">#</a> Job Expirations &amp; Timeouts</h3><p><a name="job-expiration"></a></p><h4 id="job-expiration" tabindex="-1"><a class="header-anchor" href="#job-expiration" aria-hidden="true">#</a> Job Expiration</h4><p>In your <code>config/queue.php</code> configuration file, each queue connection defines a <code>retry_after</code> option. This option specifies how many seconds the queue connection should wait before retrying a job that is being processed. For example, if the value of <code>retry_after</code> is set to <code>90</code>, the job will be released back onto the queue if it has been processing for 90 seconds without being released or deleted. Typically, you should set the <code>retry_after</code> value to the maximum number of seconds your jobs should reasonably take to complete processing.</p>`,357),q=a("strong",null,"Warning",-1),x=a("br",null,null,-1),I=a("code",null,"retry_after",-1),S={href:"https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/AboutVT.html",target:"_blank",rel:"noopener noreferrer"},T=o(`<p><a name="worker-timeouts"></a></p><h4 id="worker-timeouts" tabindex="-1"><a class="header-anchor" href="#worker-timeouts" aria-hidden="true">#</a> Worker Timeouts</h4><p>The <code>queue:work</code> Artisan command exposes a <code>--timeout</code> option. By default, the <code>--timeout</code> value is 60 seconds. If a job is processing for longer than the number of seconds specified by the timeout value, the worker processing the job will exit with an error. Typically, the worker will be restarted automatically by a <a href="#supervisor-configuration">process manager configured on your server</a>:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan queue:work <span class="token parameter variable">--timeout</span><span class="token operator">=</span><span class="token number">60</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>The <code>retry_after</code> configuration option and the <code>--timeout</code> CLI option are different, but work together to ensure that jobs are not lost and that jobs are only successfully processed once.</p><blockquote><p><strong>Warning</strong><br> The <code>--timeout</code> value should always be at least several seconds shorter than your <code>retry_after</code> configuration value. This will ensure that a worker processing a frozen job is always terminated before the job is retried. If your <code>--timeout</code> option is longer than your <code>retry_after</code> configuration value, your jobs may be processed twice.</p></blockquote><p><a name="supervisor-configuration"></a></p><h2 id="supervisor-configuration" tabindex="-1"><a class="header-anchor" href="#supervisor-configuration" aria-hidden="true">#</a> Supervisor Configuration</h2><p>In production, you need a way to keep your <code>queue:work</code> processes running. A <code>queue:work</code> process may stop running for a variety of reasons, such as an exceeded worker timeout or the execution of the <code>queue:restart</code> command.</p><p>For this reason, you need to configure a process monitor that can detect when your <code>queue:work</code> processes exit and automatically restart them. In addition, process monitors can allow you to specify how many <code>queue:work</code> processes you would like to run concurrently. Supervisor is a process monitor commonly used in Linux environments and we will discuss how to configure it in the following documentation.</p><p><a name="installing-supervisor"></a></p><h4 id="installing-supervisor" tabindex="-1"><a class="header-anchor" href="#installing-supervisor" aria-hidden="true">#</a> Installing Supervisor</h4><p>Supervisor is a process monitor for the Linux operating system, and will automatically restart your <code>queue:work</code> processes if they fail. To install Supervisor on Ubuntu, you may use the following command:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> supervisor
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,14),P=a("strong",null,"Note",-1),A=a("br",null,null,-1),B={href:"https://forge.laravel.com",target:"_blank",rel:"noopener noreferrer"},C=o(`<p><a name="configuring-supervisor"></a></p><h4 id="configuring-supervisor" tabindex="-1"><a class="header-anchor" href="#configuring-supervisor" aria-hidden="true">#</a> Configuring Supervisor</h4><p>Supervisor configuration files are typically stored in the <code>/etc/supervisor/conf.d</code> directory. Within this directory, you may create any number of configuration files that instruct supervisor how your processes should be monitored. For example, let&#39;s create a <code>laravel-worker.conf</code> file that starts and monitors <code>queue:work</code> processes:</p><div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code><span class="token section"><span class="token punctuation">[</span><span class="token section-name selector">program:laravel-worker</span><span class="token punctuation">]</span></span>
<span class="token key attr-name">process_name</span><span class="token punctuation">=</span><span class="token value attr-value">%(program_name)s_%(process_num)02d</span>
<span class="token key attr-name">command</span><span class="token punctuation">=</span><span class="token value attr-value">php /home/forge/app.com/artisan queue:work sqs --sleep=3 --tries=3 --max-time=3600</span>
<span class="token key attr-name">autostart</span><span class="token punctuation">=</span><span class="token value attr-value">true</span>
<span class="token key attr-name">autorestart</span><span class="token punctuation">=</span><span class="token value attr-value">true</span>
<span class="token key attr-name">stopasgroup</span><span class="token punctuation">=</span><span class="token value attr-value">true</span>
<span class="token key attr-name">killasgroup</span><span class="token punctuation">=</span><span class="token value attr-value">true</span>
<span class="token key attr-name">user</span><span class="token punctuation">=</span><span class="token value attr-value">forge</span>
<span class="token key attr-name">numprocs</span><span class="token punctuation">=</span><span class="token value attr-value">8</span>
<span class="token key attr-name">redirect_stderr</span><span class="token punctuation">=</span><span class="token value attr-value">true</span>
<span class="token key attr-name">stdout_logfile</span><span class="token punctuation">=</span><span class="token value attr-value">/home/forge/app.com/worker.log</span>
<span class="token key attr-name">stopwaitsecs</span><span class="token punctuation">=</span><span class="token value attr-value">3600</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>In this example, the <code>numprocs</code> directive will instruct Supervisor to run eight <code>queue:work</code> processes and monitor all of them, automatically restarting them if they fail. You should change the <code>command</code> directive of the configuration to reflect your desired queue connection and worker options.</p><blockquote><p><strong>Warning</strong><br> You should ensure that the value of <code>stopwaitsecs</code> is greater than the number of seconds consumed by your longest running job. Otherwise, Supervisor may kill the job before it is finished processing.</p></blockquote><p><a name="starting-supervisor"></a></p><h4 id="starting-supervisor" tabindex="-1"><a class="header-anchor" href="#starting-supervisor" aria-hidden="true">#</a> Starting Supervisor</h4><p>Once the configuration file has been created, you may update the Supervisor configuration and start the processes using the following commands:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> supervisorctl reread

<span class="token function">sudo</span> supervisorctl update

<span class="token function">sudo</span> supervisorctl start <span class="token string">&quot;laravel-worker:*&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),Q={href:"http://supervisord.org/index.html",target:"_blank",rel:"noopener noreferrer"},$=o(`<p><a name="dealing-with-failed-jobs"></a></p><h2 id="dealing-with-failed-jobs" tabindex="-1"><a class="header-anchor" href="#dealing-with-failed-jobs" aria-hidden="true">#</a> Dealing With Failed Jobs</h2><p>Sometimes your queued jobs will fail. Don&#39;t worry, things don&#39;t always go as planned! Laravel includes a convenient way to <a href="#max-job-attempts-and-timeout">specify the maximum number of times a job should be attempted</a>. After an asynchronous job has exceeded this number of attempts, it will be inserted into the <code>failed_jobs</code> database table. <a href="./queues#synchronous-dispatching">Synchronously dispatched jobs</a> that fail are not stored in this table and their exceptions are immediately handled by the application.</p><p>A migration to create the <code>failed_jobs</code> table is typically already present in new Laravel applications. However, if your application does not contain a migration for this table, you may use the <code>queue:failed-table</code> command to create the migration:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan queue:failed-table

php artisan migrate
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>When running a <a href="#running-the-queue-worker">queue worker</a> process, you may specify the maximum number of times a job should be attempted using the <code>--tries</code> switch on the <code>queue:work</code> command. If you do not specify a value for the <code>--tries</code> option, jobs will only be attempted once or as many times as specified by the job class&#39; <code>$tries</code> property:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan queue:work redis <span class="token parameter variable">--tries</span><span class="token operator">=</span><span class="token number">3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Using the <code>--backoff</code> option, you may specify how many seconds Laravel should wait before retrying a job that has encountered an exception. By default, a job is immediately released back onto the queue so that it may be attempted again:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan queue:work redis <span class="token parameter variable">--tries</span><span class="token operator">=</span><span class="token number">3</span> <span class="token parameter variable">--backoff</span><span class="token operator">=</span><span class="token number">3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>If you would like to configure how many seconds Laravel should wait before retrying a job that has encountered an exception on a per-job basis, you may do so by defining a <code>backoff</code> property on your job class:</p><pre><code>/**
 * The number of seconds to wait before retrying the job.
 *
 * @var int
 */
public $backoff = 3;
</code></pre><p>If you require more complex logic for determining the job&#39;s backoff time, you may define a <code>backoff</code> method on your job class:</p><pre><code>/**
* Calculate the number of seconds to wait before retrying the job.
*/
public function backoff(): int
{
    return 3;
}
</code></pre><p>You may easily configure &quot;exponential&quot; backoffs by returning an array of backoff values from the <code>backoff</code> method. In this example, the retry delay will be 1 second for the first retry, 5 seconds for the second retry, 10 seconds for the third retry, and 10 seconds for every subsequent retry if there are more attempts remaining:</p><pre><code>/**
* Calculate the number of seconds to wait before retrying the job.
*
* @return array&lt;int, int&gt;
*/
public function backoff(): array
{
    return [1, 5, 10];
}
</code></pre><p><a name="cleaning-up-after-failed-jobs"></a></p><h3 id="cleaning-up-after-failed-jobs" tabindex="-1"><a class="header-anchor" href="#cleaning-up-after-failed-jobs" aria-hidden="true">#</a> Cleaning Up After Failed Jobs</h3><p>When a particular job fails, you may want to send an alert to your users or revert any actions that were partially completed by the job. To accomplish this, you may define a <code>failed</code> method on your job class. The <code>Throwable</code> instance that caused the job to fail will be passed to the <code>failed</code> method:</p><pre><code>&lt;?php

namespace App\\Jobs;

use App\\Models\\Podcast;
use App\\Services\\AudioProcessor;
use Illuminate\\Bus\\Queueable;
use Illuminate\\Contracts\\Queue\\ShouldQueue;
use Illuminate\\Queue\\InteractsWithQueue;
use Illuminate\\Queue\\SerializesModels;
use Throwable;

class ProcessPodcast implements ShouldQueue
{
    use InteractsWithQueue, Queueable, SerializesModels;

    /**
     * Create a new job instance.
     */
    public function __construct(
        public Podcast $podcast,
    ) {}

    /**
     * Execute the job.
     */
    public function handle(AudioProcessor $processor): void
    {
        // Process uploaded podcast...
    }

    /**
     * Handle a job failure.
     */
    public function failed(Throwable $exception): void
    {
        // Send user notification of failure, etc...
    }
}
</code></pre><blockquote><p><strong>Warning</strong><br> A new instance of the job is instantiated before invoking the <code>failed</code> method; therefore, any class property modifications that may have occurred within the <code>handle</code> method will be lost.</p></blockquote><p><a name="retrying-failed-jobs"></a></p><h3 id="retrying-failed-jobs" tabindex="-1"><a class="header-anchor" href="#retrying-failed-jobs" aria-hidden="true">#</a> Retrying Failed Jobs</h3><p>To view all of the failed jobs that have been inserted into your <code>failed_jobs</code> database table, you may use the <code>queue:failed</code> Artisan command:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan queue:failed
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>The <code>queue:failed</code> command will list the job ID, connection, queue, failure time, and other information about the job. The job ID may be used to retry the failed job. For instance, to retry a failed job that has an ID of <code>ce7bb17c-cdd8-41f0-a8ec-7b4fef4e5ece</code>, issue the following command:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan queue:retry ce7bb17c-cdd8-41f0-a8ec-7b4fef4e5ece
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>If necessary, you may pass multiple IDs to the command:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan queue:retry ce7bb17c-cdd8-41f0-a8ec-7b4fef4e5ece 91401d2c-0784-4f43-824c-34f94a33c24d
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>You may also retry all of the failed jobs for a particular queue:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan queue:retry <span class="token parameter variable">--queue</span><span class="token operator">=</span>name
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>To retry all of your failed jobs, execute the <code>queue:retry</code> command and pass <code>all</code> as the ID:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan queue:retry all
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>If you would like to delete a failed job, you may use the <code>queue:forget</code> command:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan queue:forget 91401d2c-0784-4f43-824c-34f94a33c24d
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p><strong>Note</strong><br> When using <a href="./horizon">Horizon</a>, you should use the <code>horizon:forget</code> command to delete a failed job instead of the <code>queue:forget</code> command.</p></blockquote><p>To delete all of your failed jobs from the <code>failed_jobs</code> table, you may use the <code>queue:flush</code> command:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan queue:flush
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a name="ignoring-missing-models"></a></p><h3 id="ignoring-missing-models" tabindex="-1"><a class="header-anchor" href="#ignoring-missing-models" aria-hidden="true">#</a> Ignoring Missing Models</h3><p>When injecting an Eloquent model into a job, the model is automatically serialized before being placed on the queue and re-retrieved from the database when the job is processed. However, if the model has been deleted while the job was waiting to be processed by a worker, your job may fail with a <code>ModelNotFoundException</code>.</p><p>For convenience, you may choose to automatically delete jobs with missing models by setting your job&#39;s <code>deleteWhenMissingModels</code> property to <code>true</code>. When this property is set to <code>true</code>, Laravel will quietly discard the job without raising an exception:</p><pre><code>/**
 * Delete the job if its models no longer exist.
 *
 * @var bool
 */
public $deleteWhenMissingModels = true;
</code></pre><p><a name="pruning-failed-jobs"></a></p><h3 id="pruning-failed-jobs" tabindex="-1"><a class="header-anchor" href="#pruning-failed-jobs" aria-hidden="true">#</a> Pruning Failed Jobs</h3><p>You may prune the records in your application&#39;s <code>failed_jobs</code> table by invoking the <code>queue:prune-failed</code> Artisan command:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan queue:prune-failed
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>By default, all the failed job records that are more than 24 hours old will be pruned. If you provide the <code>--hours</code> option to the command, only the failed job records that were inserted within the last N number of hours will be retained. For example, the following command will delete all the failed job records that were inserted more than 48 hours ago:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan queue:prune-failed <span class="token parameter variable">--hours</span><span class="token operator">=</span><span class="token number">48</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a name="storing-failed-jobs-in-dynamodb"></a></p><h3 id="storing-failed-jobs-in-dynamodb" tabindex="-1"><a class="header-anchor" href="#storing-failed-jobs-in-dynamodb" aria-hidden="true">#</a> Storing Failed Jobs In DynamoDB</h3>`,50),_={href:"https://aws.amazon.com/dynamodb",target:"_blank",rel:"noopener noreferrer"},R=a("code",null,"failed_jobs",-1),J=a("code",null,"queue.failed.table",-1),F=a("code",null,"queue",-1),W=o(`<p>The <code>failed_jobs</code> table should have a string primary partition key named <code>application</code> and a string primary sort key named <code>uuid</code>. The <code>application</code> portion of the key will contain your application&#39;s name as defined by the <code>name</code> configuration value within your application&#39;s <code>app</code> configuration file. Since the application name is part of the DynamoDB table&#39;s key, you can use the same table to store failed jobs for multiple Laravel applications.</p><p>In addition, ensure that you install the AWS SDK so that your Laravel application can communicate with Amazon DynamoDB:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">composer</span> require aws/aws-sdk-php
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Next, set the <code>queue.failed.driver</code> configuration option&#39;s value to <code>dynamodb</code>. In addition, you should define <code>key</code>, <code>secret</code>, and <code>region</code> configuration options within the failed job configuration array. These options will be used to authenticate with AWS. When using the <code>dynamodb</code> driver, the <code>queue.failed.database</code> configuration option is unnecessary:</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token string single-quoted-string">&#39;failed&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>
    <span class="token string single-quoted-string">&#39;driver&#39;</span> <span class="token operator">=&gt;</span> <span class="token function">env</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;QUEUE_FAILED_DRIVER&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;dynamodb&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;key&#39;</span> <span class="token operator">=&gt;</span> <span class="token function">env</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;AWS_ACCESS_KEY_ID&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;secret&#39;</span> <span class="token operator">=&gt;</span> <span class="token function">env</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;AWS_SECRET_ACCESS_KEY&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;region&#39;</span> <span class="token operator">=&gt;</span> <span class="token function">env</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;AWS_DEFAULT_REGION&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;us-east-1&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;table&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;failed_jobs&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="disabling-failed-job-storage"></a></p><h3 id="disabling-failed-job-storage" tabindex="-1"><a class="header-anchor" href="#disabling-failed-job-storage" aria-hidden="true">#</a> Disabling Failed Job Storage</h3><p>You may instruct Laravel to discard failed jobs without storing them by setting the <code>queue.failed.driver</code> configuration option&#39;s value to <code>null</code>. Typically, this may be accomplished via the <code>QUEUE_FAILED_DRIVER</code> environment variable:</p><div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code><span class="token key attr-name">QUEUE_FAILED_DRIVER</span><span class="token punctuation">=</span><span class="token value attr-value">null</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a name="failed-job-events"></a></p><h3 id="failed-job-events" tabindex="-1"><a class="header-anchor" href="#failed-job-events" aria-hidden="true">#</a> Failed Job Events</h3><p>If you would like to register an event listener that will be invoked when a job fails, you may use the <code>Queue</code> facade&#39;s <code>failing</code> method. For example, we may attach a closure to this event from the <code>boot</code> method of the <code>AppServiceProvider</code> that is included with Laravel:</p><pre><code>&lt;?php

namespace App\\Providers;

use Illuminate\\Support\\Facades\\Queue;
use Illuminate\\Support\\ServiceProvider;
use Illuminate\\Queue\\Events\\JobFailed;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        // ...
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        Queue::failing(function (JobFailed $event) {
            // $event-&gt;connectionName
            // $event-&gt;job
            // $event-&gt;exception
        });
    }
}
</code></pre><p><a name="clearing-jobs-from-queues"></a></p><h2 id="clearing-jobs-from-queues" tabindex="-1"><a class="header-anchor" href="#clearing-jobs-from-queues" aria-hidden="true">#</a> Clearing Jobs From Queues</h2><blockquote><p><strong>Note</strong><br> When using <a href="./horizon">Horizon</a>, you should use the <code>horizon:clear</code> command to clear jobs from the queue instead of the <code>queue:clear</code> command.</p></blockquote><p>If you would like to delete all jobs from the default queue of the default connection, you may do so using the <code>queue:clear</code> Artisan command:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan queue:clear
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>You may also provide the <code>connection</code> argument and <code>queue</code> option to delete jobs from a specific connection and queue:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan queue:clear redis <span class="token parameter variable">--queue</span><span class="token operator">=</span>emails
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p><strong>Warning</strong><br> Clearing jobs from queues is only available for the SQS, Redis, and database queue drivers. In addition, the SQS message deletion process takes up to 60 seconds, so jobs sent to the SQS queue up to 60 seconds after you clear the queue might also be deleted.</p></blockquote><p><a name="monitoring-your-queues"></a></p><h2 id="monitoring-your-queues" tabindex="-1"><a class="header-anchor" href="#monitoring-your-queues" aria-hidden="true">#</a> Monitoring Your Queues</h2><p>If your queue receives a sudden influx of jobs, it could become overwhelmed, leading to a long wait time for jobs to complete. If you wish, Laravel can alert you when your queue job count exceeds a specified threshold.</p><p>To get started, you should schedule the <code>queue:monitor</code> command to <a href="./scheduling">run every minute</a>. The command accepts the names of the queues you wish to monitor as well as your desired job count threshold:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan queue:monitor redis:default,redis:deployments <span class="token parameter variable">--max</span><span class="token operator">=</span><span class="token number">100</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Scheduling this command alone is not enough to trigger a notification alerting you of the queue&#39;s overwhelmed status. When the command encounters a queue that has a job count exceeding your threshold, an <code>Illuminate\\Queue\\Events\\QueueBusy</code> event will be dispatched. You may listen for this event within your application&#39;s <code>EventServiceProvider</code> in order to send a notification to you or your development team:</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">App<span class="token punctuation">\\</span>Notifications<span class="token punctuation">\\</span>QueueHasLongWaitTime</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Queue<span class="token punctuation">\\</span>Events<span class="token punctuation">\\</span>QueueBusy</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Support<span class="token punctuation">\\</span>Facades<span class="token punctuation">\\</span>Event</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Support<span class="token punctuation">\\</span>Facades<span class="token punctuation">\\</span>Notification</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * Register any other events for your application.
 */</span>
<span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">boot</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">void</span>
<span class="token punctuation">{</span>
    <span class="token class-name static-context">Event</span><span class="token operator">::</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token class-name type-declaration">QueueBusy</span> <span class="token variable">$event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name static-context">Notification</span><span class="token operator">::</span><span class="token function">route</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;mail&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;dev@example.com&#39;</span><span class="token punctuation">)</span>
                <span class="token operator">-&gt;</span><span class="token function">notify</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">QueueHasLongWaitTime</span><span class="token punctuation">(</span>
                    <span class="token variable">$event</span><span class="token operator">-&gt;</span><span class="token property">connection</span><span class="token punctuation">,</span>
                    <span class="token variable">$event</span><span class="token operator">-&gt;</span><span class="token property">queue</span><span class="token punctuation">,</span>
                    <span class="token variable">$event</span><span class="token operator">-&gt;</span><span class="token property">size</span>
                <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="testing"></a></p><h2 id="testing" tabindex="-1"><a class="header-anchor" href="#testing" aria-hidden="true">#</a> Testing</h2><p>When testing code that dispatches jobs, you may wish to instruct Laravel to not actually execute the job itself, since the job&#39;s code can be tested directly and separately of the code that dispatches it. Of course, to test the job itself, you may instantiate a job instance and invoke the <code>handle</code> method directly in your test.</p><p>You may use the <code>Queue</code> facade&#39;s <code>fake</code> method to prevent queued jobs from actually being pushed to the queue. After calling the <code>Queue</code> facade&#39;s <code>fake</code> method, you may then assert that the application attempted to push jobs to the queue:</p><pre><code>&lt;?php

namespace Tests\\Feature;

use App\\Jobs\\AnotherJob;
use App\\Jobs\\FinalJob;
use App\\Jobs\\ShipOrder;
use Illuminate\\Support\\Facades\\Queue;
use Tests\\TestCase;

class ExampleTest extends TestCase
{
    public function test_orders_can_be_shipped(): void
    {
        Queue::fake();

        // Perform order shipping...

        // Assert that no jobs were pushed...
        Queue::assertNothingPushed();

        // Assert a job was pushed to a given queue...
        Queue::assertPushedOn(&#39;queue-name&#39;, ShipOrder::class);

        // Assert a job was pushed twice...
        Queue::assertPushed(ShipOrder::class, 2);

        // Assert a job was not pushed...
        Queue::assertNotPushed(AnotherJob::class);

        // Assert that a Closure was pushed to the queue...
        Queue::assertClosurePushed();
    }
}
</code></pre><p>You may pass a closure to the <code>assertPushed</code> or <code>assertNotPushed</code> methods in order to assert that a job was pushed that passes a given &quot;truth test&quot;. If at least one job was pushed that passes the given truth test then the assertion will be successful:</p><pre><code>Queue::assertPushed(function (ShipOrder $job) use ($order) {
    return $job-&gt;order-&gt;id === $order-&gt;id;
});
</code></pre><p><a name="faking-a-subset-of-jobs"></a></p><h3 id="faking-a-subset-of-jobs" tabindex="-1"><a class="header-anchor" href="#faking-a-subset-of-jobs" aria-hidden="true">#</a> Faking A Subset Of Jobs</h3><p>If you only need to fake specific jobs while allowing your other jobs to execute normally, you may pass the class names of the jobs that should be faked to the <code>fake</code> method:</p><pre><code>public function test_orders_can_be_shipped(): void
{
    Queue::fake([
        ShipOrder::class,
    ]);

    // Perform order shipping...

    // Assert a job was pushed twice...
    Queue::assertPushed(ShipOrder::class, 2);
}
</code></pre><p>You may fake all jobs except for a set of specified jobs using the <code>except</code> method:</p><pre><code>Queue::fake()-&gt;except([
    ShipOrder::class,
]);
</code></pre><p><a name="testing-job-chains"></a></p><h3 id="testing-job-chains" tabindex="-1"><a class="header-anchor" href="#testing-job-chains" aria-hidden="true">#</a> Testing Job Chains</h3><p>To test job chains, you will need to utilize the <code>Bus</code> facade&#39;s faking capabilities. The <code>Bus</code> facade&#39;s <code>assertChained</code> method may be used to assert that a <a href="./queues#job-chaining">chain of jobs</a> was dispatched. The <code>assertChained</code> method accepts an array of chained jobs as its first argument:</p><pre><code>use App\\Jobs\\RecordShipment;
use App\\Jobs\\ShipOrder;
use App\\Jobs\\UpdateInventory;
use Illuminate\\Support\\Facades\\Bus;

Bus::fake();

// ...

Bus::assertChained([
    ShipOrder::class,
    RecordShipment::class,
    UpdateInventory::class
]);
</code></pre><p>As you can see in the example above, the array of chained jobs may be an array of the job&#39;s class names. However, you may also provide an array of actual job instances. When doing so, Laravel will ensure that the job instances are of the same class and have the same property values of the chained jobs dispatched by your application:</p><pre><code>Bus::assertChained([
    new ShipOrder,
    new RecordShipment,
    new UpdateInventory,
]);
</code></pre><p>You may use the <code>assertDispatchedWithoutChain</code> method to assert that a job was pushed without a chain of jobs:</p><pre><code>Bus::assertDispatchedWithoutChain(ShipOrder::class);
</code></pre><p><a name="testing-job-batches"></a></p><h3 id="testing-job-batches" tabindex="-1"><a class="header-anchor" href="#testing-job-batches" aria-hidden="true">#</a> Testing Job Batches</h3><p>The <code>Bus</code> facade&#39;s <code>assertBatched</code> method may be used to assert that a <a href="./queues#job-batching">batch of jobs</a> was dispatched. The closure given to the <code>assertBatched</code> method receives an instance of <code>Illuminate\\Bus\\PendingBatch</code>, which may be used to inspect the jobs within the batch:</p><pre><code>use Illuminate\\Bus\\PendingBatch;
use Illuminate\\Support\\Facades\\Bus;

Bus::fake();

// ...

Bus::assertBatched(function (PendingBatch $batch) {
    return $batch-&gt;name == &#39;import-csv&#39; &amp;&amp;
           $batch-&gt;jobs-&gt;count() === 10;
});
</code></pre><p>You may use the <code>assertBatchCount</code> method to assert that a given number of batches were dispatched:</p><pre><code>Bus::assertBatchCount(3);
</code></pre><p>You may use <code>assertNothingBatched</code> to assert that no batches were dispatched:</p><pre><code>Bus::assertNothingBatched();
</code></pre><p><a name="testing-job-batch-interaction"></a></p><h4 id="testing-job-batch-interaction" tabindex="-1"><a class="header-anchor" href="#testing-job-batch-interaction" aria-hidden="true">#</a> Testing Job / Batch Interaction</h4><p>In addition, you may occasionally need to test an individual job&#39;s interaction with its underlying batch. For example, you may need to test if a job cancelled further processing for its batch. To accomplish this, you need to assign a fake batch to the job via the <code>withFakeBatch</code> method. The <code>withFakeBatch</code> method returns a tuple containing the job instance and the fake batch:</p><pre><code>[$job, $batch] = (new ShipOrder)-&gt;withFakeBatch();

$job-&gt;handle();

$this-&gt;assertTrue($batch-&gt;cancelled());
$this-&gt;assertEmpty($batch-&gt;added);
</code></pre><p><a name="job-events"></a></p><h2 id="job-events" tabindex="-1"><a class="header-anchor" href="#job-events" aria-hidden="true">#</a> Job Events</h2><p>Using the <code>before</code> and <code>after</code> methods on the <code>Queue</code> <a href="./facades">facade</a>, you may specify callbacks to be executed before or after a queued job is processed. These callbacks are a great opportunity to perform additional logging or increment statistics for a dashboard. Typically, you should call these methods from the <code>boot</code> method of a <a href="./providers">service provider</a>. For example, we may use the <code>AppServiceProvider</code> that is included with Laravel:</p><pre><code>&lt;?php

namespace App\\Providers;

use Illuminate\\Support\\Facades\\Queue;
use Illuminate\\Support\\ServiceProvider;
use Illuminate\\Queue\\Events\\JobProcessed;
use Illuminate\\Queue\\Events\\JobProcessing;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        // ...
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        Queue::before(function (JobProcessing $event) {
            // $event-&gt;connectionName
            // $event-&gt;job
            // $event-&gt;job-&gt;payload()
        });

        Queue::after(function (JobProcessed $event) {
            // $event-&gt;connectionName
            // $event-&gt;job
            // $event-&gt;job-&gt;payload()
        });
    }
}
</code></pre><p>Using the <code>looping</code> method on the <code>Queue</code> <a href="./facades">facade</a>, you may specify callbacks that execute before the worker attempts to fetch a job from a queue. For example, you might register a closure to rollback any transactions that were left open by a previously failed job:</p><pre><code>use Illuminate\\Support\\Facades\\DB;
use Illuminate\\Support\\Facades\\Queue;

Queue::looping(function () {
    while (DB::transactionLevel() &gt; 0) {
        DB::rollBack();
    }
});
</code></pre>`,67);function L(D,E){const n=i("ExternalLinkIcon");return r(),c("div",null,[u,a("p",null,[e("Laravel queues provide a unified queueing API across a variety of different queue backends, such as "),a("a",l,[e("Amazon SQS"),t(n)]),e(", "),a("a",p,[e("Redis"),t(n)]),e(", or even a relational database.")]),a("p",null,[e("Laravel's queue configuration options are stored in your application's "),h,e(" configuration file. In this file, you will find connection configurations for each of the queue drivers that are included with the framework, including the database, "),a("a",b,[e("Amazon SQS"),t(n)]),e(", "),a("a",m,[e("Redis"),t(n)]),e(", and "),a("a",g,[e("Beanstalkd"),t(n)]),e(" drivers, as well as a synchronous driver that will execute jobs immediately (for use during local development). A "),f,e(" queue driver is also included which discards queued jobs.")]),y,a("p",null,[e("If your Redis queue connection uses a Redis Cluster, your queue names must contain a "),a("a",v,[e("key hash tag"),t(n)]),e(". This is required in order to ensure all of the Redis keys for a given queue are placed into the same hash slot:")]),w,k,j,a("blockquote",null,[a("p",null,[q,x,e(" The only queue connection which does not contain a "),I,e(" value is Amazon SQS. SQS will retry the job based on the "),a("a",S,[e("Default Visibility Timeout"),t(n)]),e(" which is managed within the AWS console.")])]),T,a("blockquote",null,[a("p",null,[P,A,e(" If configuring and managing Supervisor yourself sounds overwhelming, consider using "),a("a",B,[e("Laravel Forge"),t(n)]),e(", which will automatically install and configure Supervisor for your production Laravel projects.")])]),C,a("p",null,[e("For more information on Supervisor, consult the "),a("a",Q,[e("Supervisor documentation"),t(n)]),e(".")]),$,a("p",null,[e("Laravel also provides support for storing your failed job records in "),a("a",_,[e("DynamoDB"),t(n)]),e(" instead of a relational database table. However, you must create a DynamoDB table to store all of the failed job records. Typically, this table should be named "),R,e(", but you should name the table based on the value of the "),J,e(" configuration value within your application's "),F,e(" configuration file.")]),W])}const O=s(d,[["render",L],["__file","queues.html.vue"]]);export{O as default};
