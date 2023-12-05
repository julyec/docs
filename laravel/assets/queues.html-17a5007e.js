import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as c,o as d,c as i,b as n,d as e,e as s,a as o}from"./app-8cdff07c.js";const r={},p=o('<h1 id="队列" tabindex="-1"><a class="header-anchor" href="#队列" aria-hidden="true">#</a> 队列</h1><ul><li><a href="#introduction">简介</a><ul><li><a href="#connections-vs-queues">连接 Vs. 驱动</a></li><li><a href="#driver-prerequisites">驱动程序说明 &amp; 先决条件</a></li></ul></li><li><a href="#creating-jobs">创建任务</a><ul><li><a href="#generating-job-classes">生成任务类</a></li><li><a href="#class-structure">任务类结构</a></li><li><a href="#unique-jobs">唯一任务</a></li></ul></li><li><a href="#job-middleware">任务中间件</a><ul><li><a href="#rate-limiting">访问限制</a></li><li><a href="#preventing-job-overlaps">防止任务重复</a></li><li><a href="#throttling-exceptions">限制异常</a></li></ul></li><li><a href="#dispatching-jobs">任务调度</a><ul><li><a href="#delayed-dispatching">延迟调度</a></li><li><a href="#synchronous-dispatching">同步调度</a></li><li><a href="#jobs-and-database-transactions">任务 &amp; 数据库事务</a></li><li><a href="#job-chaining">任务链</a></li><li><a href="#customizing-the-queue-and-connection">自定义队列 &amp; 连接</a></li><li><a href="#max-job-attempts-and-timeout">指定任务最大尝试次数 / 超时值</a></li><li><a href="#error-handling">错误处理</a></li></ul></li><li><a href="#job-batching">任务批处理</a><ul><li><a href="#defining-batchable-jobs">定义可批处理任务</a></li><li><a href="#dispatching-batches">分派批处理</a></li><li><a href="#adding-jobs-to-batches">将任务添加到批处理</a></li><li><a href="#inspecting-batches">校验批处理</a></li><li><a href="#cancelling-batches">取消批处理</a></li><li><a href="#batch-failures">批处理失败</a></li><li><a href="#pruning-batches">批量清理</a></li></ul></li><li><a href="#queueing-closures">队列闭包</a></li><li><a href="#running-the-queue-worker">运行队列处理器</a><ul><li><a href="#the-queue-work-command"><code>queue:work</code> 命令</a></li><li><a href="#queue-priorities">队列优先级</a></li><li><a href="#queue-workers-and-deployment">队列处理器 &amp; 部署</a></li><li><a href="#job-expirations-and-timeouts">任务过期 &amp; 超时</a></li></ul></li><li><a href="#supervisor-configuration">Supervisor 配置</a></li><li><a href="#dealing-with-failed-jobs">处理失败任务</a><ul><li><a href="#cleaning-up-after-failed-jobs">清理失败任务</a></li><li><a href="#retrying-failed-jobs">重试失败任务</a></li><li><a href="#ignoring-missing-models">忽略缺失的模型</a></li><li><a href="#pruning-failed-jobs">清理失败的任务</a></li><li><a href="#storing-failed-jobs-in-dynamodb">在 DynamoDB 中存储失败的任务</a></li><li><a href="#disabling-failed-job-storage">禁用失败的任务存储</a></li><li><a href="#failed-job-events">任务失败事件</a></li></ul></li><li><a href="#clearing-jobs-from-queues">清理队列任务</a></li><li><a href="#monitoring-your-queues">监控你的队列</a></li><li><a href="#testing">测试</a><ul><li><a href="#faking-a-subset-of-jobs">伪造任务的一个子集</a></li><li><a href="#testing-job-chains">测试任务链</a></li><li><a href="#testing-job-batches">测试任务批处理</a></li></ul></li><li><a href="#job-events">任务事件</a></li></ul><p><a name="introduction"></a></p><h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h2><p>在构建 Web 应用程序时，你可能需要执行一些任务，例如解析和存储上传的 CSV 文件，这些任务在典型的 Web 请求期间需要很长时间才能执行。 值得庆幸的是，Laravel 允许你轻松创建可以在后台处理的队列任务。 通过将时间密集型任务移至队列，你的应用程序可以以极快的速度响应 Web 请求，并为你的客户提供更好的用户体验。</p>',5),u={href:"https://aws.amazon.com/sqs/",target:"_blank",rel:"noopener noreferrer"},l={href:"https://redis.io",target:"_blank",rel:"noopener noreferrer"},h=n("code",null,"config/queue.php",-1),b={href:"https://aws.amazon.com/sqs/",target:"_blank",rel:"noopener noreferrer"},m={href:"https://redis.io",target:"_blank",rel:"noopener noreferrer"},v={href:"https://beanstalkd.github.io/",target:"_blank",rel:"noopener noreferrer"},g=n("code",null,"null",-1),f=o(`<blockquote><p><strong>技巧</strong>   Laravel 提供了 Horizon ，适用于 Redis 驱动队列。 Horizon 是一个拥有漂亮仪表盘的配置系统。如需了解更多信息请查看完整的 <a href="./horizon">Horizon 文档</a>。</p></blockquote><p><a name="connections-vs-queues"></a></p><h3 id="连接-vs-驱动" tabindex="-1"><a class="header-anchor" href="#连接-vs-驱动" aria-hidden="true">#</a> 连接 Vs. 驱动</h3><p>在开始使用 Laravel 队列之前，理解「连接」和「队列」之间的区别非常重要。 在 <code>config/queue.php</code> 配置文件中，有一个 <code>connections</code> 连接选项。 此选项定义连接某个驱动（如 Amazon SQS、Beanstalk 或 Redis）。然而，任何给定的队列连接都可能有多个「队列」，这些「队列」可能被认为是不同的堆栈或成堆的排队任务。</p><p>请注意， <code>queue</code> 配置文件中的每个连接配置示例都包含一个 <code>queue</code> 属性。</p><p>这是将任务发送到给定连接时将被分配到的默认队列。换句话说，如果你没有显式地定义任务应该被发送到哪个队列，那么该任务将被放置在连接配置的 <code>queue</code> 属性中定义的队列上：</p><p>use App\\Jobs\\ProcessPodcast;</p><p>// 这个任务将被推送到默认队列...</p><p>ProcessPodcast::dispatch();</p><pre><code>// 这个任务将被推送到「emails」队列...
</code></pre><p>ProcessPodcast::dispatch()-&gt;onQueue(&#39;emails&#39;);</p><p>有些应用程序可能不需要将任务推到多个队列中，而是倾向于使用一个简单的队列。然而，如果希望对任务的处理方式进行优先级排序或分段时，将任务推送到多个队列就显得特别有用，因为 Laravel 队列工作程序允许你指定哪些队列应该按优先级处理。例如，如果你将任务推送到一个 <code>high</code> 队列，你可能会运行一个赋予它们更高处理优先级的 worker：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan queue:work <span class="token parameter variable">--queue</span><span class="token operator">=</span>high,default
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a name="driver-prerequisites"></a></p><h3 id="驱动程序说明和先决条件" tabindex="-1"><a class="header-anchor" href="#驱动程序说明和先决条件" aria-hidden="true">#</a> 驱动程序说明和先决条件</h3><p><a name="database"></a></p><h4 id="数据库" tabindex="-1"><a class="header-anchor" href="#数据库" aria-hidden="true">#</a> 数据库</h4><p>要使用 <code>database</code> 队列驱动程序，你需要一个数据库表来保存任务。要生成创建此表的迁移，请运行 <code>queue:table</code> Artisan 命令。一旦迁移已经创建，你可以使用 <code>migrate</code> 命令迁移你的数据库：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan queue:table

php artisan migrate
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>最后，请不要忘记通过修改<code>.env</code> 文件中的 <code>QUEUE_CONNECTION</code> 变量从而将 <code>database</code> 作为你的应用队列驱动程序:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> <span class="token assign-left variable">QUEUE_CONNECTION</span><span class="token operator">=</span>database
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a name="redis"></a></p><h4 id="redis" tabindex="-1"><a class="header-anchor" href="#redis" aria-hidden="true">#</a> Redis</h4><p>要使用 <code>redis</code> 队列驱动程序，需要在 <code>config/database.php</code> 配置文件中配置一个 redis 数据库连接。</p><p><strong>Redis 集群</strong></p>`,25),k={href:"https://redis.io/topics/cluster-spec#keys-hash-tags",target:"_blank",rel:"noopener noreferrer"},q=o(`<pre><code>&#39;redis&#39; =&gt; [
    &#39;driver&#39; =&gt; &#39;redis&#39;,
    &#39;connection&#39; =&gt; &#39;default&#39;,
    &#39;queue&#39; =&gt; &#39;{default}&#39;,
    &#39;retry_after&#39; =&gt; 90,
],
</code></pre><p><strong>阻塞</strong></p><p>在使用 Redis 队列时，你可以使用 block_for 配置选项来指定在遍历 worker 循环和重新轮询 Redis 数据库之前，驱动程序需要等待多长时间才能使任务变得可用。</p><p>根据你的队列负载调整此值要比连续轮询 Redis 数据库中的新任务更加有效。例如，你可以将值设置为 5 以指示驱动程序在等待任务变得可用时应该阻塞 5 秒：</p><pre><code>&#39;redis&#39; =&gt; [
    &#39;driver&#39; =&gt; &#39;redis&#39;,
    &#39;connection&#39; =&gt; &#39;default&#39;,
    &#39;queue&#39; =&gt; &#39;default&#39;,
    &#39;retry_after&#39; =&gt; 90,
    &#39;block_for&#39; =&gt; 5,
],
</code></pre><blockquote><p><strong>注意</strong> 将 block_for 设置为 0 将导致队列 workers 一直阻塞，直到某一个任务变得可用。这还能防止在下一个任务被处理之前处理诸如 SIGTERM 之类的信号。</p></blockquote><p><a name="other-driver-prerequisites"></a></p><h4 id="其他驱动的先决条件" tabindex="-1"><a class="header-anchor" href="#其他驱动的先决条件" aria-hidden="true">#</a> 其他驱动的先决条件</h4><p>列出的队列驱动需要如下的依赖，这些依赖可通过 Composer 包管理器进行安装：</p>`,9),w=n("div",{class:"content-list",markdown:"1"},[n("ul",null,[n("li",null,[e("Amazon SQS: "),n("code",null,"aws/aws-sdk-php ~3.0")]),n("li",null,[e("Beanstalkd: "),n("code",null,"pda/pheanstalk ~4.0")]),n("li",null,[e("Redis: "),n("code",null,"predis/predis ~1.0"),e(" or phpredis PHP extension")])])],-1),x=o(`<p><a name="creating-jobs"></a></p><h2 id="创建任务" tabindex="-1"><a class="header-anchor" href="#创建任务" aria-hidden="true">#</a> 创建任务</h2><p><a name="generating-job-classes"></a></p><h3 id="生成任务类" tabindex="-1"><a class="header-anchor" href="#生成任务类" aria-hidden="true">#</a> 生成任务类</h3><p>默认情况下，应用程序的所有的可排队任务都被存储在了 app/Jobs 目录中。如果 app/Jobs 目录不存在，当你运行 make:job Artisan 命令时，将会自动创建该目录：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan make:job ProcessPodcast
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>生成的类将会实现 Illuminate\\Contracts\\Queue\\ShouldQueue 接口， 告诉 Laravel ，该任务应该推入队列以异步的方式运行。</p><blockquote><p><strong>技巧</strong> 你可以使用 <a href="./artisan#stub-customization">stub publishing</a> 来自定义任务 stub 。</p></blockquote><p><a name="class-structure"></a></p><h3 id="任务类结构" tabindex="-1"><a class="header-anchor" href="#任务类结构" aria-hidden="true">#</a> 任务类结构</h3><p>任务类非常简单，通常只包含一个 <code>handle</code> 方法，在队列处理任务时将会调用它。让我们看一个任务类的示例。在这个例子中，我们假设我们管理一个 podcast 服务，并且需要在上传的 podcast 文件发布之前对其进行处理：</p><pre><code>&lt;?php

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
     * 创建一个新的任务实例
     */
    public function __construct(
        public Podcast $podcast,
    ) {}

    /**
     * 运行任务
     */
    public function handle(AudioProcessor $processor): void
    {
        // 处理上传的 podcast...
    }
}
</code></pre><p>在本示例中，请注意，我们能够将一个 <a href="./eloquent">Eloquent model</a> 直接传递到已排队任务的构造函数中。由于任务所使用的 <code>SerializesModels</code> ，在任务处理时，Eloquent 模型及其加载的关系将被优雅地序列化和反序列化。</p><p>如果你的队列任务在其构造函数中接受一个 Eloquent 模型，那么只有模型的标识符才会被序列化到队列中。当实际处理任务时，队列系统将自动重新从数据库中获取完整的模型实例及其加载的关系。这种用于模型序列化的方式允许将更小的作业有效负载发送给你的队列驱动程序。</p><p><a name="handle-method-dependency-injection"></a></p><h4 id="handle-方法依赖注入" tabindex="-1"><a class="header-anchor" href="#handle-方法依赖注入" aria-hidden="true">#</a> <code>handle</code> 方法依赖注入</h4><p>当任务由队列处理时，将调用 <code>handle</code> 方法。注意，我们可以对任务的 <code>handle</code> 方法进行类型提示依赖。Laravel <a href="./container">服务容器</a> 会自动注入这些依赖项。</p><p>如果你想完全控制容器如何将依赖注入 <code>handle</code> 方法，你可以使用容器的 <code>bindMethod</code> 方法。 <code>bindMethod</code> 方法接受一个可接收任务和容器的回调。在回调中，你可以在任何你想用的地方随意调用 <code>handle</code> 方法。 通常， 你应该从你的 <code>App\\Providers\\AppServiceProvider</code> <a href="./providers">服务提供者</a> 中来调用该方法:</p><pre><code>use App\\Jobs\\ProcessPodcast;
use App\\Services\\AudioProcessor;
use Illuminate\\Contracts\\Foundation\\Application;

$this-&gt;app-&gt;bindMethod([ProcessPodcast::class, &#39;handle&#39;], function (ProcessPodcast $job, Application $app) {
    return $job-&gt;handle($app-&gt;make(AudioProcessor::class));
});
</code></pre><blockquote><p><strong>注意</strong> 二进制数据，例如原始图像内容，应该在传递到队列任务之前通过 <code>base64_encode</code> 函数传递。否则，在将任务放入队列时，可能无法正确地序列化为 JSON。</p></blockquote><p><a name="handling-relationships"></a></p><h4 id="队列关系" tabindex="-1"><a class="header-anchor" href="#队列关系" aria-hidden="true">#</a> 队列关系</h4><p>因为加载的关系也会被序列化，所以处理序列化任务的字符串有时会变得相当大。为了防止该关系被序列化，可以在设置属性值时对模型调用 <code>withoutRelations</code> 方法。此方法将返回没有加载关系的模型实例：</p><pre><code>/**
 * 创建新的任务实例
 */
public function __construct(Podcast $podcast)
{
    $this-&gt;podcast = $podcast-&gt;withoutRelations();
}
</code></pre><p>此外，当反序列化任务并从数据库中重新检索模型关系时，它们将被完整检索。反序列化任务时，将不会应用在任务排队过程中序列化模型之前应用的任何先前关系约束。因此，如果你希望使用给定关系的子集，则应在排队任务中重新限制该关系。</p><p><a name="unique-jobs"></a></p><h3 id="唯一任务" tabindex="-1"><a class="header-anchor" href="#唯一任务" aria-hidden="true">#</a> 唯一任务</h3><blockquote><p>注意：唯一任务需要支持 <a href="./cache#atomic-locks">locks</a> 的缓存驱动程序。 目前，<code>memcached</code>、<code>redis</code>、<code>dynamodb</code>、<code>database</code>、<code>file</code>和<code>array</code>缓存驱动支持原子锁。 此外，独特的任务约束不适用于批次内的任务。</p></blockquote><p>有时，你可能希望确保在任何时间点队列中只有一个特定任务的实例。你可以通过在你的工作类上实现 <code>ShouldBeUnique</code> 接口来做到这一点。这个接口不需要你在你的类上定义任何额外的方法：</p><pre><code>&lt;?php

use Illuminate\\Contracts\\Queue\\ShouldQueue;
use Illuminate\\Contracts\\Queue\\ShouldBeUnique;

class UpdateSearchIndex implements ShouldQueue, ShouldBeUnique
{
    ...
}
</code></pre><p>以上示例中，<code>UpdateSearchIndex</code> 任务是唯一的。因此，如果任务的另一个实例已经在队列中并且尚未完成处理，则不会分派该任务。</p><p>在某些情况下，你可能想要定义一个使任务唯一的特定「键」，或者你可能想要指定一个超时时间，超过该时间任务不再保持唯一。为此，你可以在任务类上定义 <code>uniqueId</code> 和 <code>uniqueFor</code> 属性或方法：</p><pre><code>&lt;?php

use App\\Product;
use Illuminate\\Contracts\\Queue\\ShouldQueue;
use Illuminate\\Contracts\\Queue\\ShouldBeUnique;

class UpdateSearchIndex implements ShouldQueue, ShouldBeUnique
{
    /**
     * 产品实例
     *
     * @var \\App\\Product
     */
    public $product;

    /**
     * 任务的唯一锁将被释放的秒数
     *
     * @var int
     */
    public $uniqueFor = 3600;

    /**
     * 任务的唯一 ID
     */
    public function uniqueId(): string
    {
        return $this-&gt;product-&gt;id;
    }
}
</code></pre><p>以上示例中， <code>UpdateSearchIndex</code> 任务中的 product ID 是唯一的。因此，在现有任务完成处理之前，任何具有相同 product ID 的任务都将被忽略。此外，如果现有任务在一小时内没有得到处理，则释放唯一锁，并将具有相同唯一键的另一个任务分派到该队列。</p><blockquote><p><strong>注意</strong> 如果你的应用程序从多个 web 服务器或容器分派任务，你应该确保你的所有服务器都与同一个中央缓存服务器通信，以便Laravel能够准确确定任务是否唯一。</p></blockquote><p><a name="keeping-jobs-unique-until-processing-begins"></a></p><h4 id="在任务处理开始前保证唯一" tabindex="-1"><a class="header-anchor" href="#在任务处理开始前保证唯一" aria-hidden="true">#</a> 在任务处理开始前保证唯一</h4><p>默认情况下，在任务完成处理或所有重试尝试均失败后，唯一任务将被「解锁」。但是，在某些情况下，你可能希望任务在处理之前立即解锁。为此，你的任务类可以实现 <code>ShouldBeUniqueUntilProcessing</code> 接口，而不是实现 <code>ShouldBeUnique</code> 接口：</p><pre><code>&lt;?php

use App\\Product;
use Illuminate\\Contracts\\Queue\\ShouldQueue;
use Illuminate\\Contracts\\Queue\\ShouldBeUniqueUntilProcessing;

class UpdateSearchIndex implements ShouldQueue, ShouldBeUniqueUntilProcessing
{
    // ...
}
</code></pre><p><a name="unique-job-locks"></a></p><h4 id="唯一任务锁" tabindex="-1"><a class="header-anchor" href="#唯一任务锁" aria-hidden="true">#</a> 唯一任务锁</h4><p>在底层实现中，当分发 <code>ShouldBeUnique</code> 任务时，Laravel 尝试使用<code>uniqueId</code> 键获取一个 <a href="./cache#atomic-locks">锁</a> 。如果未获取到锁，则不会分派任务。当任务完成处理或所有重试尝试失败时，将释放此锁。默认情况下，Laravel 将使用默认的缓存驱动程序来获取此锁。但是，如果你希望使用其他驱动程序来获取锁，则可以定义一个 <code>uniqueVia</code> 方法，该方法返回一个缓存驱动对象：</p><pre><code>use Illuminate\\Contracts\\Cache\\Repository;
use Illuminate\\Support\\Facades\\Cache;

class UpdateSearchIndex implements ShouldQueue, ShouldBeUnique
{
    ...

    /**
     * 获取唯一任务锁的缓存驱动程序
     */
    public function uniqueVia(): Repository
    {
        return Cache::driver(&#39;redis&#39;);
    }
}
</code></pre><blockquote><p>技巧：如果只需要限制任务的并发处理，请改用 <a href="./queues#preventing-job-overlaps"><code>WithoutOverlapping</code></a> 任务中间件。</p></blockquote><p><a name="job-middleware"></a></p><h2 id="任务中间件" tabindex="-1"><a class="header-anchor" href="#任务中间件" aria-hidden="true">#</a> 任务中间件</h2><p>任务中间件允许你围绕排队任务的执行封装自定义逻辑，从而减少了任务本身的样板代码。例如，看下面的 <code>handle</code> 方法，它利用了 Laravel 的 Redis 速率限制特性，允许每 5 秒只处理一个任务：</p><pre><code>use Illuminate\\Support\\Facades\\Redis;

/**
 * 执行任务
 */
public function handle(): void
{
    Redis::throttle(&#39;key&#39;)-&gt;block(0)-&gt;allow(1)-&gt;every(5)-&gt;then(function () {
        info(&#39;取得了锁...&#39;);

        // 处理任务...
    }, function () {
        // 无法获取锁...

        return $this-&gt;release(5);
    });
}
</code></pre><p>虽然这段代码是有效的， 但是 <code>handle</code> 方法的结构却变得杂乱，因为它掺杂了 Redis 速率限制逻辑。此外，其他任务需要使用速率限制的时候，只能将限制逻辑复制一次。</p><p>我们可以定义一个处理速率限制的任务中间件，而不是在 handle 方法中定义速率限制。Laravel 没有任务中间件的默认位置，所以你可以将任务中间件放置在你喜欢的任何位置。在本例中，我们将把中间件放在 <code>app/Jobs/Middleware</code> 目录：</p><pre><code>&lt;?php

namespace App\\Jobs\\Middleware;

use Closure;
use Illuminate\\Support\\Facades\\Redis;

class RateLimited
{
    /**
     * 处理队列任务
     *
     * @param  \\Closure(object): void  $next
     */
    public function handle(object $job, Closure $next): void
    {
        Redis::throttle(&#39;key&#39;)
                -&gt;block(0)-&gt;allow(1)-&gt;every(5)
                -&gt;then(function () use (object $job, Closure $next) {
                    // 已获得锁...

                    $next($job);
                }, function () use ($job) {
                    // 没有获取到锁...

                    $job-&gt;release(5);
                });
    }
}
</code></pre><p>正如你看到的，类似于 <a href="./middleware">路由中间件</a>，任务中间件接收正在处理队列任务以及一个回调来继续处理队列任务。</p><p>在任务中间件被创建以后，他们可能被关联到通过从任务的 <code>middleware</code>方法返回的任务。这个方法并不存在于 <code>make:job</code> Artisan 命令搭建的任务中，所以你需要将它添加到你自己的任务类的定义中：</p><pre><code>use App\\Jobs\\Middleware\\RateLimited;

/**
 * 获取一个可以被传递通过的中间件任务
 *
 * @return array&lt;int, object&gt;
 */
public function middleware(): array
{
    return [new RateLimited];
}
</code></pre><blockquote><p><strong>技巧</strong> 任务中间件也可以分配其他可队列处理的监听事件当中，比如邮件，通知等。</p></blockquote><p><a name="rate-limiting"></a></p><h3 id="访问限制" tabindex="-1"><a class="header-anchor" href="#访问限制" aria-hidden="true">#</a> 访问限制</h3><p>尽管我们刚刚演示了如何编写自己的访问限制的任务中间件，但 Laravel 实际上内置了一个访问限制中间件，你可以利用它来限制任务。与 <a href="./routingmd/14845#defining-rate-limiters">路由限流器</a> 一样，任务访问限制器是使用 <code>RateLimiter</code> facade 的 <code>for</code> 方法定义的。</p><p>例如，你可能希望允许用户每小时备份一次数据，但不对高级客户施加此类限制。为此，可以在 <code>RateLimiter</code> 的 <code>boot</code> 方法中定义 <code>AppServiceProvider</code>：</p><pre><code>use Illuminate\\Cache\\RateLimiting\\Limit;
use Illuminate\\Support\\Facades\\RateLimiter;

/**
 * 注册应用程序服务
 */
public function boot(): void
{
    RateLimiter::for(&#39;backups&#39;, function (object $job) {
        return $job-&gt;user-&gt;vipCustomer()
                    ? Limit::none()
                    : Limit::perHour(1)-&gt;by($job-&gt;user-&gt;id);
    });
}
</code></pre><p>在上面的例子中，我们定义了一个小时访问限制；但是，你可以使用 <code>perMinute</code> 方法轻松定义基于分钟的访问限制。此外，你可以将任何值传递给访问限制的 <code>by</code> 方法，但是，这个值通常用于按客户来区分不同的访问限制：</p><pre><code>return Limit::perMinute(50)-&gt;by($job-&gt;user-&gt;id);
</code></pre><p>定义速率限制后，你可以使用 <code>Illuminate\\Queue\\Middleware\\RateLimited</code> 中间件将速率限制器附加到备份任务。 每次任务超过速率限制时，此中间件都会根据速率限制持续时间以适当的延迟将任务释放回队列。</p><pre><code>use Illuminate\\Queue\\Middleware\\RateLimited;

/**
 * 获取任务时，应该通过的中间件
 *
 * @return array&lt;int, object&gt;
 */
public function middleware(): array
{
    return [new RateLimited(&#39;backups&#39;)];
}
</code></pre><p>将速率受限的任务释放回队列仍然会增加任务的 「尝试」总数。你可能希望相应地调整你的任务类上的 <code>tries</code> 和 <code>maxExceptions</code> 属性。或者，你可能希望使用 <code>retryUntil</code> <a href="#time-based-attempts">方法</a> 来定义不再尝试任务之前的时间量。</p><p>如果你不想在速率限制时重试任务，你可以使用 <code>dontRelease</code> 方法：</p><pre><code>/**
 * 获取任务时，应该通过的中间件
 *
 * @return array&lt;int, object&gt;
 */
public function middleware(): array
{
    return [(new RateLimited(&#39;backups&#39;))-&gt;dontRelease()];
}
</code></pre><blockquote><p><strong>技巧</strong> 如果你使用 Redis，你可以使用 Illuminate\\Queue\\Middleware\\RateLimitedWithRedis 中间件，它针对 Redis 进行了微调，比基本的限速中间件更高效。</p></blockquote><p><a name="preventing-job-overlaps"></a></p><h3 id="防止任务重叠" tabindex="-1"><a class="header-anchor" href="#防止任务重叠" aria-hidden="true">#</a> 防止任务重叠</h3><p>Laravel 包含一个 <code>Illuminate\\Queue\\Middleware\\WithoutOverlapping</code> 中间件，允许你根据任意键防止任务重叠。当排队的任务正在修改一次只能由一个任务修改的资源时，这会很有帮助。</p><p>例如，假设你有一个更新用户信用评分的排队任务，并且你希望防止同一用户 ID 的信用评分更新任务重叠。为此，你可以从任务的 <code>middleware</code> 方法返回 <code>WithoutOverlapping</code> 中间件：</p><pre><code>use Illuminate\\Queue\\Middleware\\WithoutOverlapping;

/**
 * 获取任务时，应该通过的中间件
 *
 * @return array&lt;int, object&gt;
 */
public function middleware(): array
{
    return [new WithoutOverlapping($this-&gt;user-&gt;id)];
}
</code></pre><p>任何重叠的任务都将被释放回队列。你还可以指定再次尝试释放的任务之前必须经过的秒数：</p><pre><code>/**
 * 获取任务时，应该通过的中间件
 *
 * @return array&lt;int, object&gt;
 */
public function middleware(): array
{
    return [(new WithoutOverlapping($this-&gt;order-&gt;id))-&gt;releaseAfter(60)];
}
</code></pre><p>如果你想立即删除任何重叠的任务，你可以使用 <code>dontRelease</code> 方法，这样它们就不会被重试：</p><pre><code>/**
 * 获取任务时，应该通过的中间件。
 *
 * @return array&lt;int, object&gt;
 */
public function middleware(): array
{
    return [(new WithoutOverlapping($this-&gt;order-&gt;id))-&gt;dontRelease()];
}
</code></pre><p><code>WithoutOverlapping</code> 中间件由 Laravel 的原子锁特性提供支持。有时，你的任务可能会以未释放锁的方式意外失败或超时。因此，你可以使用 expireAfter 方法显式定义锁定过期时间。例如，下面的示例将指示 Laravel 在任务开始处理三分钟后释放 WithoutOverlapping 锁：</p><pre><code>/**
 * 获取任务时，应该通过的中间件。
 *
 * @return array&lt;int, object&gt;
 */
public function middleware(): array
{
    return [(new WithoutOverlapping($this-&gt;order-&gt;id))-&gt;expireAfter(180)];
}
</code></pre><blockquote><p><strong>注意</strong><code>WithoutOverlapping</code> 中间件需要支持 <a href="./cache#atomic-locks">locks</a> 的缓存驱动程序。目前，<code>memcached</code>、<code>redis</code>、<code>dynamodb</code>、<code>database</code>、<code>file</code> 和 <code>array</code> 缓存驱动支持原子锁。</p></blockquote><p><a name="sharing-lock-keys"></a></p><h4 id="跨任务类别共享锁" tabindex="-1"><a class="header-anchor" href="#跨任务类别共享锁" aria-hidden="true">#</a> 跨任务类别共享锁</h4><p>默认情况下，<code>WithoutOverlapping</code> 中间件只会阻止同一类的重叠任务。 因此，尽管两个不同的任务类可能使用相同的锁，但不会阻止它们重叠。 但是，你可以使用 <code>shared</code> 方法指示 Laravel 跨任务类应用锁：</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Queue<span class="token punctuation">\\</span>Middleware<span class="token punctuation">\\</span>WithoutOverlapping</span><span class="token punctuation">;</span>

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="throttling-exceptions"></a></p><h3 id="节流限制异常" tabindex="-1"><a class="header-anchor" href="#节流限制异常" aria-hidden="true">#</a> 节流限制异常</h3><p>Laravel 包含一个 <code>Illuminate\\Queue\\Middleware\\ThrottlesExceptions</code> 中间件，允许你限制异常。一旦任务抛出给定数量的异常，所有进一步执行该任务的尝试都会延迟，直到经过指定的时间间隔。该中间件对于与不稳定的第三方服务交互的任务特别有用。</p><p>例如，让我们想象一个队列任务与开始抛出异常的第三方 API 交互。要限制异常，你可以从任务的 <code>middleware</code> 方法返回 <code>ThrottlesExceptions</code> 中间件。通常，此中间件应与实现 <a href="#time-based-attempts">基于时间的尝试</a> 的任务配对：</p><pre><code>use DateTime;
use Illuminate\\Queue\\Middleware\\ThrottlesExceptions;

/**
 * 获取任务时，应该通过的中间件。
 *
 * @return array&lt;int, object&gt;
 */
public function middleware(): array
{
    return [new ThrottlesExceptions(10, 5)];
}

/**
 * 确定任务应该超时的时间。
 */
public function retryUntil(): DateTime
{
    return now()-&gt;addMinutes(5);
}
</code></pre><p>中间件接受的第一个构造函数参数是任务在被限制之前可以抛出的异常数，而第二个构造函数参数是在任务被限制后再次尝试之前应该经过的分钟数。在上面的代码示例中，如果任务在 5 分钟内抛出 10 个异常，我们将等待 5 分钟，然后再次尝试该任务。</p><p>当任务抛出异常但尚未达到异常阈值时，通常会立即重试该任务。但是，你可以通过在将中间件附加到任务时调用 <code>backoff</code> 方法来指定此类任务应延迟的分钟数：</p><pre><code>use Illuminate\\Queue\\Middleware\\ThrottlesExceptions;

/**
 * 获取任务时，应该通过的中间件。
 *
 * @return array&lt;int, object&gt;
 */
public function middleware(): array
{
    return [(new ThrottlesExceptions(10, 5))-&gt;backoff(5)];
}
</code></pre><p>在内部，这个中间件使用 Laravel 的缓存系统来实现速率限制，并利用任务的类名作为缓存 「键」。 在将中间件附加到任务时，你可以通过调用 <code>by</code> 方法来覆盖此键。 如果你有多个任务与同一个第三方服务交互并且你希望它们共享一个共同的节流 「桶」，这可能会很有用：</p><pre><code>use Illuminate\\Queue\\Middleware\\ThrottlesExceptions;

/**
 * 获取任务时，应该通过的中间件。
 *
 * @return array&lt;int, object&gt;
 */
public function middleware(): array
{
    return [(new ThrottlesExceptions(10, 10))-&gt;by(&#39;key&#39;)];
}
</code></pre><blockquote><p><strong>技巧</strong><br> 如果你使用 Redis，你可以使用 <code>Illuminate\\Queue\\Middleware\\ThrottlesExceptionsWithRedis</code> 中间件，它针对 Redis 进行了微调，比基本的异常节流中间件更高效。</p></blockquote><p><a name="dispatching-jobs"></a></p><h2 id="调度任务" tabindex="-1"><a class="header-anchor" href="#调度任务" aria-hidden="true">#</a> 调度任务</h2><p>一旦你写好了你的任务类，你可以使用任务本身的 <code>dispatch</code> 方法来调度它。传递给 <code>dispatch</code> 方法的参数将被提供给任务的构造函数：</p><pre><code>&lt;?php

namespace App\\Http\\Controllers;

use App\\Http\\Controllers\\Controller;
use App\\Jobs\\ProcessPodcast;
use App\\Models\\Podcast;
use Illuminate\\Http\\RedirectResponse;
use Illuminate\\Http\\Request;

class PodcastController extends Controller
{
    /**
     * 存储一个新的播客。
     */
    public function store(Request $request): RedirectResponse
    {
        $podcast = Podcast::create(/* ... */);

        // ...

        ProcessPodcast::dispatch($podcast);

        return redirect(&#39;/podcasts&#39;);
    }
}
</code></pre><p>如果你想有条件地分派任务，你可以使用 <code>dispatchIf</code> 和 <code>dispatchUnless</code> 方法：</p><pre><code>ProcessPodcast::dispatchIf($accountActive, $podcast);

ProcessPodcast::dispatchUnless($accountSuspended, $podcast);
</code></pre><p>在新的 Laravel 应用程序中，<code>sync</code> 是默认的队列驱动程序。 该驱动程序会在当前请求的前台同步执行任务，这在本地开发时通常会很方便。 如果你想在后台处理排队任务，你可以在应用程序的 <code>config/queue.php</code> 配置文件中指定一个不同的队列驱动程序。</p><p><a name="delayed-dispatching"></a></p><h3 id="延迟调度" tabindex="-1"><a class="header-anchor" href="#延迟调度" aria-hidden="true">#</a> 延迟调度</h3><p>如果你想指定任务不应立即可供队列工作人员处理，你可以在调度任务时使用 <code>delay</code> 方法。例如，让我们指定一个任务在分派后 10 分钟内不能用于处理</p><pre><code>&lt;?php

namespace App\\Http\\Controllers;

use App\\Http\\Controllers\\Controller;
use App\\Jobs\\ProcessPodcast;
use App\\Models\\Podcast;
use Illuminate\\Http\\RedirectResponse;
use Illuminate\\Http\\Request;

class PodcastController extends Controller
{
    /**
     * 储存一个新的播客
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
</code></pre><blockquote><p><strong>注意</strong><br> Amazon SQS 队列服务的最大延迟时间为 15 分钟。</p></blockquote><p><a name="dispatching-after-the-response-is-sent-to-browser"></a></p><h4 id="响应发送到浏览器后调度" tabindex="-1"><a class="header-anchor" href="#响应发送到浏览器后调度" aria-hidden="true">#</a> 响应发送到浏览器后调度</h4><p>或者，<code>dispatchAfterResponse</code> 方法延迟调度任务，直到 HTTP 响应发送到用户的浏览器之后。 即使排队的任务仍在执行，这仍将允许用户开始使用应用程序。这通常应该只用于需要大约一秒钟的工作，例如发送电子邮件。由于它们是在当前 HTTP 请求中处理的，因此以这种方式分派的任务不需要运行队列工作者来处理它们：</p><pre><code>use App\\Jobs\\SendNotification;

SendNotification::dispatchAfterResponse();
</code></pre><p>你也可以 <code>dispatch</code> 一个闭包并将 <code>afterResponse</code> 方法链接到 <code>dispatch</code> 帮助器以在 HTTP 响应发送到浏览器后执行一个闭包</p><pre><code>use App\\Mail\\WelcomeMessage;
use Illuminate\\Support\\Facades\\Mail;

dispatch(function () {
    Mail::to(&#39;taylor@example.com&#39;)-&gt;send(new WelcomeMessage);
})-&gt;afterResponse();
</code></pre><p><a name="synchronous-dispatching"></a></p><h3 id="同步调度" tabindex="-1"><a class="header-anchor" href="#同步调度" aria-hidden="true">#</a> 同步调度</h3><p>如果你想立即（同步）调度任务，你可以使用 <code>dispatchSync</code> 方法。使用此方法时，任务不会排队，会在当前进程内立即执行：</p><pre><code>&lt;?php

namespace App\\Http\\Controllers;

use App\\Http\\Controllers\\Controller;
use App\\Jobs\\ProcessPodcast;
use App\\Models\\Podcast;
use Illuminate\\Http\\RedirectResponse;
use Illuminate\\Http\\Request;

class PodcastController extends Controller
{
    /**
     * 储存一个新的播客。
     */
    public function store(Request $request): RedirectResponse
    {
        $podcast = Podcast::create(/* ... */);

        // 创建播客

        ProcessPodcast::dispatchSync($podcast);

        return redirect(&#39;/podcasts&#39;);
    }
}
</code></pre><p><a name="jobs-and-database-transactions"></a></p><h3 id="任务-数据库事务" tabindex="-1"><a class="header-anchor" href="#任务-数据库事务" aria-hidden="true">#</a> 任务 &amp; 数据库事务</h3><p>虽然在数据库事务中分派任务非常好，但你应该特别注意确保你的任务实际上能够成功执行。在事务中调度任务时，任务可能会在父事务提交之前由工作人员处理。发生这种情况时，你在数据库事务期间对模型或数据库记录所做的任何更新可能尚未反映在数据库中。此外，在事务中创建的任何模型或数据库记录可能不存在于数据库中。</p><p>值得庆幸的是，Laravel 提供了几种解决这个问题的方法。首先，你可以在队列连接的配置数组中设置 <code>after_commit</code> 连接选项：</p><pre><code>&#39;redis&#39; =&gt; [
    &#39;driver&#39; =&gt; &#39;redis&#39;,
    // ...
    &#39;after_commit&#39; =&gt; true,
],
</code></pre><p>当 <code>after_commit</code> 选项为 true 时，你可以在数据库事务中分发任务；Laravel 会等到所有打开的数据库事务都已提交，然后才会开始分发任务。当然，如果当前没有打开的数据库事务，任务将被立即调度。</p><p>如果事务因事务期间发生异常而回滚，则在该事务期间分发的已分发任务将被丢弃。</p><blockquote><p><strong>技巧</strong><br> 将 <code>after_commit</code> 配置选项设置为 <code>true</code> 还会导致所有排队的事件监听器、邮件、通知和广播事件在所有打开的数据库事务提交后才被调度。</p></blockquote><p><a name="specifying-commit-dispatch-behavior-inline"></a></p><h4 id="内联指定提交调度" tabindex="-1"><a class="header-anchor" href="#内联指定提交调度" aria-hidden="true">#</a> 内联指定提交调度</h4><p>如果你没有将 <code>after_commit</code> 队列连接配置选项设置为 <code>true</code>，你可能需要在所有打开的数据库事务提交后才调度特定的任务。为此，你可以将 <code>afterCommit</code> 方法放到你的调度操作上：</p><pre><code>use App\\Jobs\\ProcessPodcast;

ProcessPodcast::dispatch($podcast)-&gt;afterCommit();
</code></pre><p>同样，如果 <code>after_commit</code> 配置选项设置为 <code>true</code>，则可以指示应立即调度特定作业，而无需等待任何打开的数据库事务提交：</p><pre><code>ProcessPodcast::dispatch($podcast)-&gt;beforeCommit();
</code></pre><p><a name="job-chaining"></a></p><h3 id="任务链" tabindex="-1"><a class="header-anchor" href="#任务链" aria-hidden="true">#</a> 任务链</h3><p>任务链允许你指定一组应在主任务成功执行后按顺序运行的排队任务。如果序列中的一个任务失败，其余的任务将不会运行。要执行一个排队的任务链，你可以使用 <code>Bus</code> facade 提供的 <code>chain</code> 方法：</p><pre><code>use App\\Jobs\\OptimizePodcast;
use App\\Jobs\\ProcessPodcast;
use App\\Jobs\\ReleasePodcast;
use Illuminate\\Support\\Facades\\Bus;

Bus::chain([
    new ProcessPodcast,
    new OptimizePodcast,
    new ReleasePodcast,
])-&gt;dispatch();
</code></pre><p>除了链接任务类实例之外，你还可以链接闭包：</p><pre><code>Bus::chain([
    new ProcessPodcast,
    new OptimizePodcast,
    function () {
        Podcast::update(/* ... */);
    },
])-&gt;dispatch();
</code></pre><blockquote><p><strong>注意</strong><br> 在任务中使用 <code>$this-&gt;delete()</code> 方法删除任务不会阻止链式任务的处理。只有当链中的任务失败时，链才会停止执行。</p></blockquote><p><a name="chain-connection-queue"></a></p><h4 id="链式连接-队列" tabindex="-1"><a class="header-anchor" href="#链式连接-队列" aria-hidden="true">#</a> 链式连接 &amp; 队列</h4><p>如果要指定链接任务应使用的连接和队列，可以使用 <code>onConnection</code> 和 <code>onQueue</code> 方法。这些方法指定应使用的队列连接和队列名称，除非为排队任务显式分配了不同的连接 / 队列：</p><pre><code>Bus::chain([
    new ProcessPodcast,
    new OptimizePodcast,
    new ReleasePodcast,
])-&gt;onConnection(&#39;redis&#39;)-&gt;onQueue(&#39;podcasts&#39;)-&gt;dispatch();
</code></pre><p><a name="chain-failures"></a></p><h4 id="链故障" tabindex="-1"><a class="header-anchor" href="#链故障" aria-hidden="true">#</a> 链故障</h4><p>链接任务时，你可以使用 <code>catch</code> 方法指定一个闭包，如果链中的任务失败，则应调用该闭包。给定的回调将接收导致任务失败的 <code>Throwable</code> 实例：</p><pre><code>use Illuminate\\Support\\Facades\\Bus;
use Throwable;

Bus::chain([
    new ProcessPodcast,
    new OptimizePodcast,
    new ReleasePodcast,
])-&gt;catch(function (Throwable $e) {
    // 链中的任务失败了...
})-&gt;dispatch();
</code></pre><blockquote><p><strong>注意</strong><br> 由于链式回调由 Laravel 队列稍后序列化并执行，因此你不应在链式回调中使用 <code>$this</code> 变量。</p></blockquote><p><a name="customizing-the-queue-and-connection"></a></p><h3 id="自定义队列-连接" tabindex="-1"><a class="header-anchor" href="#自定义队列-连接" aria-hidden="true">#</a> 自定义队列 &amp; 连接</h3><p><a name="dispatching-to-a-particular-queue"></a></p><h4 id="分派到特定队列" tabindex="-1"><a class="header-anchor" href="#分派到特定队列" aria-hidden="true">#</a> 分派到特定队列</h4><p>通过将任务推送到不同的队列，你可以对排队的任务进行「分类」，甚至可以优先考虑分配给各个队列的工作人员数量。请记住，这不会将任务推送到队列配置文件定义的不同队列「连接」，而只会推送到单个连接中的特定队列。要指定队列，请在调度任务时使用 <code>onQueue</code> 方法：</p><pre><code>&lt;?php

namespace App\\Http\\Controllers;

use App\\Http\\Controllers\\Controller;
use App\\Jobs\\ProcessPodcast;
use App\\Models\\Podcast;
use Illuminate\\Http\\RedirectResponse;
use Illuminate\\Http\\Request;

class PodcastController extends Controller
{
    /**
     * 存储一个播客。
     */
    public function store(Request $request): RedirectResponse
    {
        $podcast = Podcast::create(/* ... */);

        // 创建播客...

        ProcessPodcast::dispatch($podcast)-&gt;onQueue(&#39;processing&#39;);

        return redirect(&#39;/podcasts&#39;);
    }
}
</code></pre><p>或者，你可以通过在任务的构造函数中调用 <code>onQueue</code> 方法来指定任务的队列：</p><pre><code>&lt;?php

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
     * 创建一个新的任务实例
     */
    public function __construct()
    {
        $this-&gt;onQueue(&#39;processing&#39;);
    }
}
</code></pre><p><a name="dispatching-to-a-particular-connection"></a></p><h4 id="调度到特定连接" tabindex="-1"><a class="header-anchor" href="#调度到特定连接" aria-hidden="true">#</a> 调度到特定连接</h4><p>如果你的应用程序与多个队列连接交互，你可以使用 <code>onConnection</code> 方法指定将任务推送到哪个连接：</p><pre><code>&lt;?php

namespace App\\Http\\Controllers;

use App\\Http\\Controllers\\Controller;
use App\\Jobs\\ProcessPodcast;
use App\\Models\\Podcast;
use Illuminate\\Http\\RedirectResponse;
use Illuminate\\Http\\Request;

class PodcastController extends Controller
{
    /**
     * 储存新的播客
     */
    public function store(Request $request): RedirectResponse
    {
        $podcast = Podcast::create(/* ... */);

        // 创建播客...

        ProcessPodcast::dispatch($podcast)-&gt;onConnection(&#39;sqs&#39;);

        return redirect(&#39;/podcasts&#39;);
    }
}
</code></pre><p>你可以将 <code>onConnection</code> 和 <code>onQueue</code> 方法链接在一起，以指定任务的连接和队列：</p><pre><code>ProcessPodcast::dispatch($podcast)
              -&gt;onConnection(&#39;sqs&#39;)
              -&gt;onQueue(&#39;processing&#39;);
</code></pre><p>或者，你可以通过在任务的构造函数中调用 <code>onConnection</code> 方法来指定任务的连接</p><pre><code>&lt;?php

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
     * 创建一个新的任务实例。
     */
    public function __construct()
    {
        $this-&gt;onConnection(&#39;sqs&#39;);
    }
}
</code></pre><p><a name="max-job-attempts-and-timeout"></a></p><h3 id="指定最大任务尝试-超时值" tabindex="-1"><a class="header-anchor" href="#指定最大任务尝试-超时值" aria-hidden="true">#</a> 指定最大任务尝试 / 超时值</h3><p><a name="max-attempts"></a></p><h4 id="最大尝试次数" tabindex="-1"><a class="header-anchor" href="#最大尝试次数" aria-hidden="true">#</a> 最大尝试次数</h4><p>如果你的一个队列任务遇到了错误，你可能不希望无限制的重试。因此 Laravel 提供了各种方法来指定一个任务可以尝试多少次或多长时间。</p><p>指定任务可尝试的最大次数的其中一个方法是，通过 Artisan 命令行上的 <code>--tries</code> 开关。这将适用于调度作业的所有任务，除非正在处理的任务指定了最大尝试次数。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan queue:work <span class="token parameter variable">--tries</span><span class="token operator">=</span><span class="token number">3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果一个任务超过其最大尝试次数，将被视为「失败」的任务。有关处理失败任务的更多信息，可以参考 <a href="./queuesmd/14873#dealing-with-failed-jobs">处理失败队列</a>。如果将 <code>--tries=0</code> 提供给 <code>queue:work</code> 命令，任务将无限期地重试。</p><p>你可以采取更细化的方法来定义任务类本身的最大尝试次数。如果在任务上指定了最大尝试次数，它将优先于命令行上提供的 <code>--tries</code> 开关设定的值：</p><pre><code>&lt;?php

namespace App\\Jobs;

class ProcessPodcast implements ShouldQueue
{
    /**
     * 任务可尝试的次数。
     *
     * @var int
     */
    public $tries = 5;
}
</code></pre><p><a name="time-based-attempts"></a></p><h4 id="基于时间的尝试" tabindex="-1"><a class="header-anchor" href="#基于时间的尝试" aria-hidden="true">#</a> 基于时间的尝试</h4><p>除了定义任务失败前尝试的次数之外，还可以定义任务应该超时的时间。这允许在给定的时间范围内尝试任意次数的任务。要定义任务超时的时间，请在任务类中添加 <code>retryUntil</code> 方法。这个方法应返回一个 <code>DateTime</code> 实例：</p><pre><code>use DateTime;

/**
 * 确定任务应该超时的时间。
 */
public function retryUntil(): DateTime
{
    return now()-&gt;addMinutes(10);
}
</code></pre><blockquote><p><strong>技巧</strong><br> 你也可以在 <a href="./events#queued-event-listeners">队列事件监听器</a> 上定义一个 <code>tries</code> 属性或 <code>retryUntil</code> 方法。</p></blockquote><p><a name="max-exceptions"></a></p><h4 id="最大尝试" tabindex="-1"><a class="header-anchor" href="#最大尝试" aria-hidden="true">#</a> 最大尝试</h4><p>有时你可能希望指定一个任务可能会尝试多次，但如果重试由给定数量的未处理异常触发（而不是直接由 <code>release</code> 方法释放），则应该失败。为此，你可以在任务类上定义一个 <code>maxExceptions</code> 属性：</p><pre><code>&lt;?php

namespace App\\Jobs;

use Illuminate\\Support\\Facades\\Redis;

class ProcessPodcast implements ShouldQueue
{
    /**
     * 可以尝试任务的次数
     *
     * @var int
     */
    public $tries = 25;

    /**
     * 失败前允许的最大未处理异常数
     *
     * @var int
     */
    public $maxExceptions = 3;

    /**
     * 执行
     */
    public function handle(): void
    {
        Redis::throttle(&#39;key&#39;)-&gt;allow(10)-&gt;every(60)-&gt;then(function () {
            // 获得锁，处理播客...
        }, function () {
            // 无法获取锁...
            return $this-&gt;release(10);
        });
    }
}
</code></pre><p>在此示例中，如果应用程序无法获得 Redis 锁，则该任务将在 10 秒后被释放，并将继续重试最多 25 次。但是，如果任务抛出三个未处理的异常，则任务将失败。</p><p><a name="timeout"></a></p><h4 id="超时" tabindex="-1"><a class="header-anchor" href="#超时" aria-hidden="true">#</a> 超时</h4><blockquote><p><strong>注意</strong><br> 必须安装 <code>pcntl</code> PHP 扩展以指定任务超时。</p></blockquote><p>通常，你大致知道你预计排队的任务需要多长时间。出于这个原因，Laravel 允许你指定一个「超时」值。 如果任务的处理时间超过超时值指定的秒数，则处理该任务的任务进程将退出并出现错误。 通常，任务程序将由在你的<a href="#supervisor-configuration">服务器上配置的进程管理器</a>自动重新启动。</p><p>同样，任务可以运行的最大秒数可以使用 Artisan 命令行上的 <code>--timeout</code> 开关来指定：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan queue:work <span class="token parameter variable">--timeout</span><span class="token operator">=</span><span class="token number">30</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果任务因不断超时而超过其最大尝试次数，则它将被标记为失败。</p><p>你也可以定义允许任务在任务类本身上运行的最大秒数。如果在任务上指定了超时，它将优先于在命令行上指定的任何超时:</p><pre><code>&lt;?php

namespace App\\Jobs;

class ProcessPodcast implements ShouldQueue
{
    /**
     * 在超时之前任务可以运行的秒数.
     *
     * @var int
     */
    public $timeout = 120;
}
</code></pre><p>有些时候，诸如 socket 或在 HTTP 连接之类的 IO 阻止进程可能不会遵守你指定的超时。因此，在使用这些功能时，也应始终尝试使用其 API 指定超时。例如，在使用 Guzzle 时，应始终指定连接并请求的超时时间。</p><p><a name="failing-on-timeout"></a></p><h4 id="超时失败" tabindex="-1"><a class="header-anchor" href="#超时失败" aria-hidden="true">#</a> 超时失败</h4><p>如果你希望在超时时将任务标记为 <a href="#dealing-with-failed-jobs">failed</a>，可以在任务类上定义 <code>$failOnTimeout</code> 属性：</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token doc-comment comment">/**
 * 标示是否应在超时时标记为失败.
 *
 * <span class="token keyword">@var</span> <span class="token class-name"><span class="token keyword">bool</span></span>
 */</span>
<span class="token keyword">public</span> <span class="token variable">$failOnTimeout</span> <span class="token operator">=</span> <span class="token constant boolean">true</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="error-handling"></a></p><h3 id="错误处理" tabindex="-1"><a class="header-anchor" href="#错误处理" aria-hidden="true">#</a> 错误处理</h3><p>如果在处理任务时抛出异常，任务将自动释放回队列，以便再次尝试。 任务将继续发布，直到尝试达到你的应用程序允许的最大次数为止。最大尝试次数由 <code>queue:work</code> Artisan 命令中使用的 <code>--tries</code> 开关定义。或者，可以在任务类本身上定义最大尝试次数。有关运行队列处理器的更多信息 <a href="#running-the-queue-worker">可以在下面找到</a>。</p><p><a name="manually-releasing-a-job"></a></p><h4 id="手动发布" tabindex="-1"><a class="header-anchor" href="#手动发布" aria-hidden="true">#</a> 手动发布</h4><p>有时你可能希望手动将任务发布回队列，以便稍后再次尝试。你可以通过调用 <code>release</code> 方法来完成此操作：</p><pre><code>/**
 * 执行任务。
 */
public function handle(): void
{
    // ...

    $this-&gt;release();
}
</code></pre><p>默认情况下，<code>release</code> 方法会将任务发布回队列以供立即处理。但是，通过向 <code>release</code> 方法传递一个整数，你可以指示队列在给定的秒数过去之前不使任务可用于处理：</p><pre><code>$this-&gt;release(10);
</code></pre><p><a name="manually-failing-a-job"></a></p><h4 id="手动使任务失败" tabindex="-1"><a class="header-anchor" href="#手动使任务失败" aria-hidden="true">#</a> 手动使任务失败</h4><p>有时，你可能需要手动将任务标记为 「failed」。为此，你可以调用 <code>fail</code> 方法：</p><pre><code>/**
 * 执行任务。
 */
public function handle(): void
{
    // ...

    $this-&gt;fail();
}
</code></pre><p>如果你捕获了一个异常，你想直接将你的任务标记为失败，你可以将异常传递给 <code>fail</code> 方法。 或者，为方便起见，你可以传递一个字符串来表示错误异常信息：</p><pre><code>$this-&gt;fail($exception);

$this-&gt;fail(&#39;Something went wrong.&#39;);
</code></pre><blockquote><p><strong>技巧</strong><br> 有关失败任务的更多信息，请查看 <a href="#dealing-with-failed-jobs">处理任务失败的文档</a>.</p></blockquote><p><a name="job-batching"></a></p><h2 id="任务批处理" tabindex="-1"><a class="header-anchor" href="#任务批处理" aria-hidden="true">#</a> 任务批处理</h2><p>Laravel 的任务批处理功能允许你轻松地执行一批任务，然后在这批任务执行完毕后执行一些操作。 在开始之前，你应该创建一个数据库迁移以构建一个表来包含有关你的任务批次的元信息，例如它们的完成百分比。 可以使用 <code>queue:batches-table</code> Artisan 命令来生成此迁移：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan queue:batches-table

php artisan migrate
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="defining-batchable-jobs"></a></p><h3 id="定义可批处理任务" tabindex="-1"><a class="header-anchor" href="#定义可批处理任务" aria-hidden="true">#</a> 定义可批处理任务</h3><p>要定义可批处理的任务，你应该像往常一样<a href="#creating-jobs">创建可排队的任务</a>； 但是，你应该将 <code>Illuminate\\Bus\\Batchable</code> 特性添加到任务类中。 此 <code>trait</code> 提供对 <code>batch</code> 方法的访问，该方法可用于检索任务正在执行的当前批次：</p><pre><code>&lt;?php

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
     * 执行任务。
     */
    public function handle(): void
    {
        if ($this-&gt;batch()-&gt;cancelled()) {
            // 确定批次是否已被取消...

            return;
        }

        // 导入 CSV 文件的一部分...
    }
}
</code></pre><p><a name="dispatching-batches"></a></p><h3 id="调度批次" tabindex="-1"><a class="header-anchor" href="#调度批次" aria-hidden="true">#</a> 调度批次</h3><p>要调度一批任务，你应该使用 <code>Bus</code> 门面的 <code>batch</code> 方法。 当然，批处理主要在与完成回调结合使用时有用。 因此，你可以使用 <code>then</code>、<code>catch</code> 和 <code>finally</code> 方法来定义批处理的完成回调。 这些回调中的每一个在被调用时都会收到一个 <code>Illuminate\\Bus\\Batch</code> 实例。 在这个例子中，我们假设我们正在排队一批任务，每个任务处理 CSV 文件中给定数量的行：</p><pre><code>use App\\Jobs\\ImportCsv;
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
    // 所有任务均已成功完成...
})-&gt;catch(function (Batch $batch, Throwable $e) {
    // 检测到第一批任务失败...
})-&gt;finally(function (Batch $batch) {
    // 批处理已完成执行...
})-&gt;dispatch();

return $batch-&gt;id;
</code></pre><p>批次的 ID 可以通过 <code>$batch-&gt;id</code> 属性访问，可用于 <a href="#inspecting-batches">查询 Laravel 命令总线</a> 以获取有关批次分派后的信息。</p><blockquote><p><strong>注意</strong><br> 由于批处理回调是由 Laravel 队列序列化并在稍后执行的，因此你不应在回调中使用 <code>$this</code> 变量。</p></blockquote><p><a name="naming-batches"></a></p><h4 id="命名批次" tabindex="-1"><a class="header-anchor" href="#命名批次" aria-hidden="true">#</a> 命名批次</h4><p>Laravel Horizon 和 Laravel Telescope 等工具如果命名了批次，可能会为批次提供更用户友好的调试信息。要为批处理分配任意名称，你可以在定义批处理时调用 <code>name</code> 方法：</p><pre><code>$batch = Bus::batch([
    // ...
])-&gt;then(function (Batch $batch) {
    // 所有任务均已成功完成...
})-&gt;name(&#39;Import CSV&#39;)-&gt;dispatch();
</code></pre><p><a name="batch-connection-queue"></a></p><h4 id="批处理连接-队列" tabindex="-1"><a class="header-anchor" href="#批处理连接-队列" aria-hidden="true">#</a> 批处理连接 &amp; 队列</h4><p>如果你想指定应用于批处理任务的连接和队列，你可以使用 <code>onConnection</code> 和 <code>onQueue</code> 方法。 所有批处理任务必须在相同的连接和队列中执行：</p><pre><code>$batch = Bus::batch([
    // ...
])-&gt;then(function (Batch $batch) {
    // 所有任务均已成功完成...
})-&gt;onConnection(&#39;redis&#39;)-&gt;onQueue(&#39;imports&#39;)-&gt;dispatch();
</code></pre><p><a name="chains-within-batches"></a></p><h4 id="批量内链" tabindex="-1"><a class="header-anchor" href="#批量内链" aria-hidden="true">#</a> 批量内链</h4><p>你可以通过将链接的任务放在数组中来在批处理中定义一组 <a href="#job-chaining">链接的任务</a>。 例如，我们可以并行执行两个任务链，并在两个任务链都完成处理后执行回调：</p><pre><code>use App\\Jobs\\ReleasePodcast;
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
</code></pre><p><a name="adding-jobs-to-batches"></a></p><h3 id="批量添加任务" tabindex="-1"><a class="header-anchor" href="#批量添加任务" aria-hidden="true">#</a> 批量添加任务</h3><p>有些时候，批量向批处理中添加任务可能很有用。当你需要批量处理数千个任务时，这种模式非常好用，而这些任务在 Web 请求期间可能需要很长时间才能调度。因此，你可能希望调度初始批次的「加载器」任务，这些任务与更多任务相结合：</p><pre><code>$batch = Bus::batch([
    new LoadImportBatch,
    new LoadImportBatch,
    new LoadImportBatch,
])-&gt;then(function (Batch $batch) {
    // 所有任务都成功完成... 
})-&gt;name(&#39;Import Contacts&#39;)-&gt;dispatch();
</code></pre><p>在这个例子中，我们将使用 <code>LoadImportBatch</code> 实例为批处理添加其他任务。为了实现这个功能，我们可以对批处理实例使用 <code>add</code> 方法，该方法可以通过 <code>batch</code> 实例访问：</p><pre><code>use App\\Jobs\\ImportContacts;
use Illuminate\\Support\\Collection;

/**
 * 执行任务。
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
</code></pre><blockquote><p><strong>注意</strong><br> 你只能将任务添加到当前任务所属的批处理中。</p></blockquote><p><a name="inspecting-batches"></a></p><h3 id="校验批处理" tabindex="-1"><a class="header-anchor" href="#校验批处理" aria-hidden="true">#</a> 校验批处理</h3><p>为批处理完成后提供回调的 <code>Illuminate\\Bus\\Batch</code> 实例中具有多种属性和方法，可以帮助你与指定的批处理业务进行交互和检查：</p><pre><code>// 批处理的UUID...
$batch-&gt;id;

// 批处理的名称（如果已经设置的话）...
$batch-&gt;name;

// 分配给批处理的任务数量...
$batch-&gt;totalJobs;

// 队列还没处理的任务数量...
$batch-&gt;pendingJobs;

// 失败的任务数量...
$batch-&gt;failedJobs;

// 到目前为止已经处理的任务数量...
$batch-&gt;processedJobs();

// 批处理已经完成的百分比（0-100）...
$batch-&gt;progress();

// 批处理是否已经完成执行...
$batch-&gt;finished();

// 取消批处理的运行...
$batch-&gt;cancel();

// 批处理是否已经取消...
$batch-&gt;cancelled();
</code></pre><p><a name="returning-batches-from-routes"></a></p><h4 id="从路由返回批次" tabindex="-1"><a class="header-anchor" href="#从路由返回批次" aria-hidden="true">#</a> 从路由返回批次</h4><p>所有 <code>Illuminate\\Bus\\Batch</code> 实例都是 JSON 可序列化的，这意味着你可以直接从应用程序的一个路由返回它们，以检索包含有关批处理的信息的 JSON 有效负载，包括其完成进度。这样可以方便地在应用程序的 UI 中显示有关批处理完成进度的信息。</p><p>要通过 ID 检索批次，你可以使用 <code>Bus</code> 外观的 <code>findBatch</code> 方法：</p><pre><code>use Illuminate\\Support\\Facades\\Bus;
use Illuminate\\Support\\Facades\\Route;

Route::get(&#39;/batch/{batchId}&#39;, function (string $batchId) {
    return Bus::findBatch($batchId);
});
</code></pre><p><a name="cancelling-batches"></a></p><h3 id="取消批次" tabindex="-1"><a class="header-anchor" href="#取消批次" aria-hidden="true">#</a> 取消批次</h3><p>有时你可能需要取消给定批处理的执行。这可以通过调用 <code>Illuminate\\Bus\\Batch</code> 实例的 <code>cancel</code> 方法来完成：</p><pre><code>/**
 * 执行任务。
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
</code></pre><p>正如你在前面的示例中可能已经注意到的那样，批处理任务通常应在继续执行之前确定其相应的批处理是否已被取消。 但是，为了方便起见，你可以将 <code>SkipIfBatchCancelled</code> <a href="#job-middleware">中间件</a> 分配给作业。 顾名思义，如果相应的批次已被取消，此中间件将指示 Laravel 不处理该作业：</p><pre><code>use Illuminate\\Queue\\Middleware\\SkipIfBatchCancelled;

/**
 * 获取任务应通过的中间件。
 */
public function middleware(): array
{
    return [new SkipIfBatchCancelled];
}
</code></pre><p><a name="batch-failures"></a></p><h3 id="批处理失败" tabindex="-1"><a class="header-anchor" href="#批处理失败" aria-hidden="true">#</a> 批处理失败</h3><p>当批处理任务失败时，将调用 <code>catch</code> 回调（如果已分配）。此回调仅针对批处理中失败的第一个任务调用。</p><p><a name="allowing-failures"></a></p><h4 id="允许失败" tabindex="-1"><a class="header-anchor" href="#允许失败" aria-hidden="true">#</a> 允许失败</h4><p>当批处理中的某个任务失败时，Laravel 会自动将该批处理标记为「已取消」。如果你愿意，你可以禁用此行为，以便任务失败不会自动将批处理标记为已取消。这可以通过在调度批处理时调用 <code>allowFailures</code> 方法来完成：</p><pre><code>$batch = Bus::batch([
    // ...
])-&gt;then(function (Batch $batch) {
    // 所有任务均已成功完成...
})-&gt;allowFailures()-&gt;dispatch();
</code></pre><p><a name="retrying-failed-batch-jobs"></a></p><h4 id="重试失败的批处理任务" tabindex="-1"><a class="header-anchor" href="#重试失败的批处理任务" aria-hidden="true">#</a> 重试失败的批处理任务</h4><p>为方便起见，Laravel 提供了一个 <code>queue:retry-batch</code> Artisan 命令，允许你轻松重试给定批次的所有失败任务。 <code>queue:retry-batch</code> 命令接受应该重试失败任务的批处理的 UUID：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan queue:retry-batch 32dbc76c-4f82-4749-b610-a639fe0099b5
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a name="pruning-batches"></a></p><h3 id="修剪批次" tabindex="-1"><a class="header-anchor" href="#修剪批次" aria-hidden="true">#</a> 修剪批次</h3><p>如果不进行修剪，<code>job_batches</code> 表可以非常快速地积累记录。为了缓解这种情况，你应该 <a href="./scheduling">schedule</a> <code>queue:prune-batches</code> Artisan 命令每天运行：</p><pre><code>$schedule-&gt;command(&#39;queue:prune-batches&#39;)-&gt;daily();
</code></pre><p>默认情况下，将修剪所有超过 24 小时的已完成批次。你可以在调用命令时使用 <code>hours</code> 选项来确定保留批处理数据的时间。例如，以下命令将删除 48 小时前完成的所有批次：</p><pre><code>$schedule-&gt;command(&#39;queue:prune-batches --hours=48&#39;)-&gt;daily();
</code></pre><p>有时，你的 <code>jobs_batches</code> 表可能会累积从未成功完成的批次的批次记录，例如任务失败且该任务从未成功重试的批次。 你可以使用 <code>unfinished</code> 选项指示 <code>queue:prune-batches</code> 命令修剪这些未完成的批处理记录：</p><pre><code>$schedule-&gt;command(&#39;queue:prune-batches --hours=48 --unfinished=72&#39;)-&gt;daily();
</code></pre><p>同样，你的 <code>jobs_batches</code> 表也可能会累积已取消批次的批次记录。 你可以使用 <code>cancelled</code> 选项指示 <code>queue:prune-batches</code> 命令修剪这些已取消的批记录：</p><pre><code>$schedule-&gt;command(&#39;queue:prune-batches --hours=48 --cancelled=72&#39;)-&gt;daily();
</code></pre><p><a name="queueing-closures"></a></p><h2 id="队列闭包" tabindex="-1"><a class="header-anchor" href="#队列闭包" aria-hidden="true">#</a> 队列闭包</h2><p>除了将任务类分派到队列之外，你还可以分派一个闭包。这对于需要在当前请求周期之外执行的快速、简单的任务非常有用。当向队列分派闭包时，闭包的代码内容是加密签名的，因此它不能在传输过程中被修改：</p><pre><code>$podcast = App\\Podcast::find(1);

dispatch(function () use ($podcast) {
    $podcast-&gt;publish();
});
</code></pre><p>使用 <code>catch</code> 方法，你可以提供一个闭包，如果排队的闭包在耗尽所有队列的<a href="#max-job-attempts-and-timeout">配置的重试次数</a> 后未能成功完成，则应执行该闭包：</p><pre><code>use Throwable;

dispatch(function () use ($podcast) {
    $podcast-&gt;publish();
})-&gt;catch(function (Throwable $e) {
    // 这个任务失败了...
});
</code></pre><blockquote><p><strong>注意</strong><br> 由于 <code>catch</code> 回调由 Laravel 队列稍后序列化并执行，因此你不应在 <code>catch</code> 回调中使用 <code>$this</code> 变量。</p></blockquote><p><a name="running-the-queue-worker"></a></p><h2 id="运行队列工作者" tabindex="-1"><a class="header-anchor" href="#运行队列工作者" aria-hidden="true">#</a> 运行队列工作者</h2><p><a name="the-queue-work-command"></a></p><h3 id="queue-work-命令" tabindex="-1"><a class="header-anchor" href="#queue-work-命令" aria-hidden="true">#</a> <code>queue:work</code> 命令</h3><p>Laravel 包含一个 Artisan 命令，该命令将启动队列进程并在新任务被推送到队列时处理它们。 你可以使用 <code>queue:work</code> Artisan 命令运行任务进程。请注意，一旦 <code>queue:work</code> 命令启动，它将继续运行，直到手动停止或关闭终端：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan queue:work
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p><strong>技巧</strong><br> 要保持 <code>queue:work</code> 进程在后台永久运行，你应该使用 <a href="#supervisor-configuration">Supervisor</a> 等进程监视器来确保队列工作进程不会停止运行。</p></blockquote><p>如果你希望处理的任务 ID 包含在命令的输出中，则可以在调用 <code>queue:work</code> 命令时包含 -v 标志：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan queue:work <span class="token parameter variable">-v</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>请记住，队列任务工作者是长期存在的进程，并将启动的应用程序状态存储在内存中。 因此，他们在启动后不会注意到你的代码库中的更改。 因此，在你的部署过程中，请务必<a href="#queue-workers-and-deployment">重新启动你的任务队列进程</a>。 此外，请记住，你的应用程序创建或修改的任何静态状态都不会在任务启动之间自动重置。</p><p>或者，你可以运行 <code>queue:listen</code> 命令。 使用 <code>queue:listen</code> 命令时，当你想要重新加载更新后的代码或重置应用程序状态时，无需手动重启 worker； 但是，此命令的效率明显低于 <code>queue:work</code> 命令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan queue:listen
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a name="running-multiple-queue-workers"></a></p><h4 id="运行多个队列进程" tabindex="-1"><a class="header-anchor" href="#运行多个队列进程" aria-hidden="true">#</a> 运行多个队列进程</h4><p>要将多个 worker 分配到一个队列并同时处理任务，你应该简单地启动多个 <code>queue:work</code> 进程。 这可以通过终端中的多个选项卡在本地完成，也可以使用流程管理器的配置设置在生产环境中完成。 <a href="#supervisor-configuration">使用 Supervisor 时</a>，你可以使用 <code>numprocs</code> 配置值。</p><p><a name="specifying-the-connection-queue"></a></p><h4 id="指定连接-队列" tabindex="-1"><a class="header-anchor" href="#指定连接-队列" aria-hidden="true">#</a> 指定连接 &amp; 队列</h4><p>你还可以指定工作人员应使用哪个队列连接。 传递给 <code>work</code> 命令的连接名称应对应于 <code>config/queue.php</code> 配置文件中定义的连接之一：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan queue:work redis
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>默认情况下，<code>queue:work</code> 命令只处理给定连接上默认队列的任务。 但是，你可以通过仅处理给定连接的特定队列来进一步自定义你的队列工作者。 例如，如果你的所有电子邮件都在你的 <code>redis</code> 队列连接上的 <code>emails</code> 队列中处理，你可以发出以下命令来启动只处理该队列的工作程序：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan queue:work redis <span class="token parameter variable">--queue</span><span class="token operator">=</span>emails
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a name="processing-a-specified-number-of-jobs"></a></p><h4 id="processing-a-specified-number-of-jobs" tabindex="-1"><a class="header-anchor" href="#processing-a-specified-number-of-jobs" aria-hidden="true">#</a> Processing A Specified Number Of Jobs</h4><p><code>--once</code> 选项可用于指定进程仅处理队列中的单个任务</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan queue:work <span class="token parameter variable">--once</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>--max-jobs</code> 选项可用于指示 worker 处理给定数量的任务然后退出。 此选项在与 <a href="#supervisor-configuration">Supervisor</a> 结合使用时可能很有用，这样你的工作人员在处理给定数量的任务后会自动重新启动，释放他们可能积累的任何内存：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan queue:work --max-jobs<span class="token operator">=</span><span class="token number">1000</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a name="processing-all-queued-jobs-then-exiting"></a></p><h4 id="处理所有排队的任务然后退出" tabindex="-1"><a class="header-anchor" href="#处理所有排队的任务然后退出" aria-hidden="true">#</a> 处理所有排队的任务然后退出</h4><p><code>--stop-when-empty</code> 选项可用于指定进程处理所有作业，然后正常退出。如果你希望在队列为空后关闭容器，则此选项在处理 Docker 容器中的 Laravel 队列时很有用</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan queue:work --stop-when-empty
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a name="processing-jobs-for-a-given-number-of-seconds"></a></p><h4 id="在给定的秒数内处理任务" tabindex="-1"><a class="header-anchor" href="#在给定的秒数内处理任务" aria-hidden="true">#</a> 在给定的秒数内处理任务</h4><p><code>--max-time</code> 选项可用于指示进程给定的秒数内处理作业，然后退出。 当与 <a href="#supervisor-configuration">Supervisor</a> 结合使用时，此选项可能很有用，这样你的工作人员在处理作业给定时间后会自动重新启动，释放他们可能积累的任何内存：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 处理进程一小时，然后退出...</span>
php artisan queue:work --max-time<span class="token operator">=</span><span class="token number">3600</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="worker-sleep-duration"></a></p><h4 id="进程睡眠时间" tabindex="-1"><a class="header-anchor" href="#进程睡眠时间" aria-hidden="true">#</a> 进程睡眠时间</h4><p>当队列中有任务可用时，进程将继续处理作业，而不会在它们之间产生延迟。但是，<code>sleep</code> 选项决定了如果没有可用的新任务，进程将 <code>sleep</code> 多少秒。 睡眠时，进程不会处理任何新的作业 - 任务将在进程再次唤醒后处理。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan queue:work <span class="token parameter variable">--sleep</span><span class="token operator">=</span><span class="token number">3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a name="resource-considerations"></a></p><h4 id="资源注意事项" tabindex="-1"><a class="header-anchor" href="#资源注意事项" aria-hidden="true">#</a> 资源注意事项</h4><p>守护进程队列在处理每个任务之前不会 <code>reboot</code> 框架。因此，你应该在每个任务完成后释放所有繁重的资源。例如，如果你正在使用 GD 库进行图像处理，你应该在处理完图像后使用 <code>imagedestroy</code> 释放内存。</p><p><a name="queue-priorities"></a></p><h3 id="队列优先级" tabindex="-1"><a class="header-anchor" href="#队列优先级" aria-hidden="true">#</a> 队列优先级</h3><p>有时你可能希望优先处理队列的处理方式。例如，在 <code>config/queue.php</code> 配置文件中，你可以将 <code>redis</code> 连接的默认 <code>queue</code> 设置为 <code>low</code>。 但是，有时你可能希望将作业推送到 <code>high</code> 优先级队列，如下所示：</p><pre><code>dispatch((new Job)-&gt;onQueue(&#39;high&#39;));
</code></pre><p>要启动一个进程，在继续处理 <code>low</code> 队列上的任何任务之前验证所有 <code>high</code> 队列任务是否已处理，请将队列名称的逗号分隔列表传递给 <code>work</code> 命令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan queue:work <span class="token parameter variable">--queue</span><span class="token operator">=</span>high,low
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a name="queue-workers-and-deployment"></a></p><h3 id="队列进程-部署" tabindex="-1"><a class="header-anchor" href="#队列进程-部署" aria-hidden="true">#</a> 队列进程 &amp; 部署</h3><p>由于队列任务是长期存在的进程，如果不重新启动，他们不会注意到代码的更改。因此，使用队列任务部署应用程序的最简单方法是在部署过程中重新启动任务。你可以通过发出 <code>queue:restart</code> 命令优雅地重新启动所有进程：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan queue:restart
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>此命令将指示所有队列进程在处理完当前任务后正常退出，以免丢失现有任务。由于队列任务将在执行 <code>queue:restart</code> 命令时退出，你应该运行诸如 <a href="#supervisor-configuration">Supervisor</a> 之类的进程管理器来自动重新启动队列任务。</p><blockquote><p><strong>注意</strong> 队列使用 <a href="./cache">cache</a> 来存储重启信号，因此你应该在使用此功能之前验证是否为你的应用程序正确配置了缓存驱动程序。</p></blockquote><p><a name="job-expirations-and-timeouts"></a></p><h3 id="任务到期-超时" tabindex="-1"><a class="header-anchor" href="#任务到期-超时" aria-hidden="true">#</a> 任务到期 &amp; 超时</h3><p><a name="job-expiration"></a></p><h4 id="任务到期" tabindex="-1"><a class="header-anchor" href="#任务到期" aria-hidden="true">#</a> 任务到期</h4><p>在<code>config/queue.php</code>配置文件中，每个队列连接都定义了一个<code>retry_after</code>选项。该选项指定队列连接在重试正在处理的作业之前应该等待多少秒。例如，如果<code>retry_after</code>的值设置为<code>90</code>，如果作业已经处理了90秒而没有被释放或删除，则该作业将被释放回队列。通常，你应该将<code>retry_after</code>值设置为作业完成处理所需的最大秒数。</p>`,348),S=n("strong",null,"警告",-1),I=n("code",null,"retry_after",-1),y={href:"https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/AboutVT.html",target:"_blank",rel:"noopener noreferrer"},P=o(`<p><a name="worker-timeouts"></a></p><h4 id="进程超时" tabindex="-1"><a class="header-anchor" href="#进程超时" aria-hidden="true">#</a> 进程超时</h4><p><code>queue:work</code> Artisan命令公开了一个<code>--timeout</code>选项。默认情况下，<code>--timeout</code>值为60秒。如果任务的处理时间超过超时值指定的秒数，则处理该任务的进程将退出并出现错误。通常，工作程序将由 <a href="#supervisor-configuration">你的服务器上配置的进程管理器</a> 自动重新启动：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan queue:work <span class="token parameter variable">--timeout</span><span class="token operator">=</span><span class="token number">60</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>retry_after</code> 配置选项和 <code>--timeout</code> CLI 选项是不同的，但它们协同工作以确保任务不会丢失并且任务仅成功处理一次。</p><blockquote><p><strong>警告</strong><code>--timeout</code> 值应始终比 <code>retry_after</code> 配置值至少短几秒钟。 这将确保处理冻结任务的进程始终在重试任务之前终止。 如果你的 <code>--timeout</code> 选项比你的 <code>retry_after</code> 配置值长，你的任务可能会被处理两次。</p></blockquote><p><a name="supervisor-configuration"></a></p><h2 id="supervisor-配置" tabindex="-1"><a class="header-anchor" href="#supervisor-配置" aria-hidden="true">#</a> Supervisor 配置</h2><p>在生产中，你需要一种方法来保持 <code>queue:work</code> 进程运行。 <code>queue:work</code> 进程可能会因多种原因停止运行，例如超过 worker 超时或执行 <code>queue:restart</code> 命令。 出于这个原因，你需要配置一个进程监视器，它可以检测你的 <code>queue:work</code> 进程何时退出并自动重新启动它们。此外，进程监视器可以让你指定要同时运行多少个 <code>queue:work</code> 进程。Supervisor 是 Linux 环境中常用的进程监视器，我们将在下面的文档中讨论如何配置它。</p><p><a name="installing-supervisor"></a></p><h4 id="安装-supervisor" tabindex="-1"><a class="header-anchor" href="#安装-supervisor" aria-hidden="true">#</a> 安装 Supervisor</h4><p>Supervisor 是 Linux 操作系统的进程监视器，如果它们失败，它将自动重新启动你的 <code>queue:work</code> 进程。要在 Ubuntu 上安装 Supervisor，你可以使用以下命令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> supervisor
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,13),$=n("strong",null,"注意",-1),_={href:"https://forge.laravel.com",target:"_blank",rel:"noopener noreferrer"},Q=o(`<p><a name="configuring-supervisor"></a></p><h4 id="配置-supervisor" tabindex="-1"><a class="header-anchor" href="#配置-supervisor" aria-hidden="true">#</a> 配置 Supervisor</h4><p>Supervisor 配置文件通常存储在 <code>/etc/supervisor/conf.d</code> 目录中。在这个目录中，你可以创建任意数量的配置文件来指示 Supervisor 应该如何监控你的进程。例如，让我们创建一个启动和监控 <code>queue:work</code> 进程的 <code>laravel-worker.conf</code> 文件：</p><div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code><span class="token section"><span class="token punctuation">[</span><span class="token section-name selector">program:laravel-worker</span><span class="token punctuation">]</span></span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个例子中，<code>numprocs</code> 指令将指示 Supervisor 运行 8 个 <code>queue:work</code> 进程并监控所有进程，如果它们失败则自动重新启动它们。你应该更改配置的「命令」指令以反映你所需的队列连接和任务选项。</p><blockquote><p><strong>警告</strong> 你应该确保 <code>stopwaitsecs</code> 的值大于运行时间最长的作业所消耗的秒数。否则，Supervisor 可能会在作业完成处理之前将其终止。</p></blockquote><p><a name="starting-supervisor"></a></p><h4 id="开始-supervisor" tabindex="-1"><a class="header-anchor" href="#开始-supervisor" aria-hidden="true">#</a> 开始 Supervisor</h4><p>创建配置文件后，你可以使用以下命令更新 Supervisor 配置并启动进程：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> supervisorctl reread

<span class="token function">sudo</span> supervisorctl update

<span class="token function">sudo</span> supervisorctl start laravel-worker:*
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),j={href:"http://supervisord.org/index.html",target:"_blank",rel:"noopener noreferrer"},A=o(`<p><a name="dealing-with-failed-jobs"></a></p><h2 id="处理失败的任务" tabindex="-1"><a class="header-anchor" href="#处理失败的任务" aria-hidden="true">#</a> 处理失败的任务</h2><p>有时，你队列的任务会失败。别担心，事情并不总是按计划进行！ Laravel 提供了一种方便的方法来 <a href="#max-job-attempts-and-timeout">指一个任务应该尝试的最大次数</a>。在异步任务超过此尝试次数后，它将被插入到 <code>failed_jobs</code> 数据库表中。 失败的 <a href="./queues#synchronous-dispatching">同步调度的任务</a> 不存储在此表中，它们的异常由应用程序立即处理。</p><p>创建 <code>failed_jobs</code> 表的迁移通常已经存在于新的 Laravel 应用程序中。但是，如果你的应用程序不包含此表的迁移，你可以使用 <code>queue:failed-table</code> 命令来创建迁移：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan queue:failed-table

php artisan migrate
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行 <a href="#running-the-queue-worker">queue worker</a> 进程时，你可以使用 <code>queue:work</code> 命令上的 <code>--tries</code> 开关指定任务应尝试的最大次数。如果你没有为 <code>--tries</code> 选项指定值，则作业将仅尝试一次或与任务类的 <code>$tries</code> 属性指定的次数相同：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan queue:work redis <span class="token parameter variable">--tries</span><span class="token operator">=</span><span class="token number">3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>使用 <code>--backoff</code> 选项，你可以指定 Laravel 在重试遇到异常的任务之前应该等待多少秒。默认情况下，任务会立即释放回队列，以便可以再次尝试：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan queue:work redis <span class="token parameter variable">--tries</span><span class="token operator">=</span><span class="token number">3</span> <span class="token parameter variable">--backoff</span><span class="token operator">=</span><span class="token number">3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果你想配置 Laravel 在重试每个任务遇到异常的任务之前应该等待多少秒，你可以通过在你的任务类上定义一个 <code>backoff</code> 属性来实现：</p><pre><code>/**
 * 重试任务前等待的秒数
 *
 * @var int
 */
public $backoff = 3;
</code></pre><p>如果你需要更复杂的逻辑来确定任务的退避时间，你可以在你的任务类上定义一个 <code>backoff</code> 方法：</p><pre><code>/**
* 计算重试任务之前要等待的秒数
*/
public function backoff(): int
{
    return 3;
}
</code></pre><p>你可以通过从 <code>backoff</code> 方法返回一组退避值来轻松配置 “exponential” 退避。在此示例中，第一次重试的重试延迟为 1 秒，第二次重试为 5 秒，第三次重试为 10 秒：</p><pre><code>/**
* 计算重试任务之前要等待的秒数
*
* @return array&lt;int, int&gt;
*/
public function backoff(): array
{
    return [1, 5, 10];
}
</code></pre><p><a name="cleaning-up-after-failed-jobs"></a></p><h3 id="任务失败后清理" tabindex="-1"><a class="header-anchor" href="#任务失败后清理" aria-hidden="true">#</a> 任务失败后清理</h3><p>当特定任务失败时，你可能希望向用户发送警报或恢复该任务部分完成的任何操作。为此，你可以在任务类上定义一个 <code>failed</code> 方法。导致作业失败的 <code>Throwable</code> 实例将被传递给 <code>failed</code> 方法：</p><pre><code>&lt;?php

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
     * 创建新任务实例
     */
    public function __construct(
        public Podcast $podcast,
    ) {}

    /**
     * 执行任务
     */
    public function handle(AudioProcessor $processor): void
    {
        // 处理上传的播客...
    }

    /**
     * 处理失败作业
     */
    public function failed(Throwable $exception): void
    {
        // 向用户发送失败通知等...
    }
}
</code></pre><blockquote><p><strong>注意</strong><br> 在调用 <code>failed</code> 方法之前实例化任务的新实例；因此，在 <code>handle</code> 方法中可能发生的任何类属性修改都将丢失。</p></blockquote><p><a name="retrying-failed-jobs"></a></p><h3 id="重试失败的任务" tabindex="-1"><a class="header-anchor" href="#重试失败的任务" aria-hidden="true">#</a> 重试失败的任务</h3><p>要查看已插入到你的 <code>failed_jobs</code> 数据库表中的所有失败任务，你可以使用 <code>queue:failed</code> Artisan 命令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan queue:failed
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>queue:failed</code> 命令将列出任务 ID、连接、队列、失败时间和有关任务的其他信息。任务 ID 可用于重试失败的任务。例如，要重试 ID 为 <code>ce7bb17c-cdd8-41f0-a8ec-7b4fef4e5ece</code> 的失败任务，请发出以下命令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan queue:retry ce7bb17c-cdd8-41f0-a8ec-7b4fef4e5ece
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如有必要，可以向命令传递多个 ID:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan queue:retry ce7bb17c-cdd8-41f0-a8ec-7b4fef4e5ece 91401d2c-0784-4f43-824c-34f94a33c24d
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>还可以重试指定队列的所有失败任务：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan queue:retry <span class="token parameter variable">--queue</span><span class="token operator">=</span>name
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>重试所有失败任务，可以执行 <code>queue:retry</code> 命令，并将 <code>all</code> 作为 ID 传递：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan queue:retry all
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果要删除指定的失败任务，可以使用 <code>queue:forget</code> 命令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan queue:forget 91401d2c-0784-4f43-824c-34f94a33c24d
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p><strong>技巧</strong><br> 使用 <a href="./horizon">Horizon</a> 时，应该使用 <code>Horizon:forget</code> 命令来删除失败任务，而不是 <code>queue:forget</code> 命令。</p></blockquote><p>删除 <code>failed_jobs</code> 表中所有失败任务，可以使用 <code>queue:flush</code> 命令:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan queue:flush
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a name="ignoring-missing-models"></a></p><h3 id="忽略缺失的模型" tabindex="-1"><a class="header-anchor" href="#忽略缺失的模型" aria-hidden="true">#</a> 忽略缺失的模型</h3><p>向任务中注入 <code>Eloquent</code> 模型时，模型会在注入队列之前自动序列化，并在处理任务时从数据库中重新检索。但是，如果在任务等待消费时删除了模型，则任务可能会失败，抛出 <code>ModelNotFoundException</code> 异常。</p><p>为方便起见，可以把将任务的 <code>deleteWhenMissingModels</code> 属性设置为 <code>true</code>，这样会自动删除缺少模型的任务。当此属性设置为 <code>true</code> 时，Laravel 会放弃该任务，并且不会引发异常：</p><pre><code>/**
 * 如果任务的模型不存在，则删除该任务
 *
 * @var bool
 */
public $deleteWhenMissingModels = true;
</code></pre><p><a name="pruning-failed-jobs"></a></p><h3 id="删除失败的任务" tabindex="-1"><a class="header-anchor" href="#删除失败的任务" aria-hidden="true">#</a> 删除失败的任务</h3><p>你可以通过调用 <code>queue:prune-failed</code> Artisan 命令删除应用程序的 <code>failed_jobs</code> 表中的所有记录：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan queue:prune-failed
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>默认情况下，将删除所有超过 24 小时的失败任务记录，如果为命令提供 <code>--hours</code> 选项，则仅保留在过去 N 小时内插入的失败任务记录。例如，以下命令将删除超过 48 小时前插入的所有失败任务记录：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan queue:prune-failed <span class="token parameter variable">--hours</span><span class="token operator">=</span><span class="token number">48</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a name="storing-failed-jobs-in-dynamodb"></a></p><h3 id="在-dynamodb-中存储失败的任务" tabindex="-1"><a class="header-anchor" href="#在-dynamodb-中存储失败的任务" aria-hidden="true">#</a> 在 DynamoDB 中存储失败的任务</h3>`,50),B={href:"https://aws.amazon.com/dynamodb",target:"_blank",rel:"noopener noreferrer"},R=n("code",null,"failed_jobs",-1),C=n("code",null,"queue",-1),L=n("code",null,"queue.failed.table",-1),E=o(`<p><code>failed_jobs</code> 表应该有一个名为 <code>application</code> 的字符串主分区键和一个名为 uuid 的字符串主排序键。键的 <code>application</code> 部分将包含应用程序的名称，该名称由应用程序的 <code>app</code> 配置文件中的 <code>name</code> 配置值定义。由于应用程序名称是 DynamoDB 表键的一部分，因此你可以使用同一个表来存储多个 Laravel 应用程序的失败任务。</p><p>此外，请确保你安装了 AWS 开发工具包，以便你的 Laravel 应用程序可以与 Amazon DynamoDB 通信：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">composer</span> require aws/aws-sdk-php
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>接下来，<code>queue.failed.driver</code> 配置选项的值设置为 <code>dynamodb</code>。此外，你应该在失败的作业配置数组中定义 <code>key</code>、<code>secret</code> 和 <code>region</code> 配置选项。 这些选项将用于向 AWS 进行身份验证。 当使用 <code>dynamodb</code> 驱动程序时，<code>queue.failed.database</code> 配置选项不是必须的：</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token string single-quoted-string">&#39;failed&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>
    <span class="token string single-quoted-string">&#39;driver&#39;</span> <span class="token operator">=&gt;</span> <span class="token function">env</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;QUEUE_FAILED_DRIVER&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;dynamodb&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;key&#39;</span> <span class="token operator">=&gt;</span> <span class="token function">env</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;AWS_ACCESS_KEY_ID&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;secret&#39;</span> <span class="token operator">=&gt;</span> <span class="token function">env</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;AWS_SECRET_ACCESS_KEY&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;region&#39;</span> <span class="token operator">=&gt;</span> <span class="token function">env</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;AWS_DEFAULT_REGION&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;us-east-1&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;table&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;failed_jobs&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="disabling-failed-job-storage"></a></p><h3 id="禁用失败的任务存储" tabindex="-1"><a class="header-anchor" href="#禁用失败的任务存储" aria-hidden="true">#</a> 禁用失败的任务存储</h3><p>你可以通过将 <code>queue.failed.driver</code> 配置选项的值设置为 <code>null</code> 来指示 Laravel 丢弃失败的任务而不存储它们。通过 <code>QUEUE_FAILED_DRIVER</code> 环境变量来完成：</p><div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code><span class="token key attr-name">QUEUE_FAILED_DRIVER</span><span class="token punctuation">=</span><span class="token value attr-value">null</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a name="failed-job-events"></a></p><h3 id="失败的任务事件" tabindex="-1"><a class="header-anchor" href="#失败的任务事件" aria-hidden="true">#</a> 失败的任务事件</h3><p>如果你想注册一个在作业失败时调用的事件监听器，你可以使用 <code>Queue</code> facade的 failing 方法。例如，我们可以从 Laravel 中包含的 <code>AppServiceProvider</code> 的 <code>boot</code> 方法为这个事件附加一个闭包：</p><pre><code>&lt;?php

namespace App\\Providers;

use Illuminate\\Support\\Facades\\Queue;
use Illuminate\\Support\\ServiceProvider;
use Illuminate\\Queue\\Events\\JobFailed;

class AppServiceProvider extends ServiceProvider
{
    /**
     * 注册任何应用程序服务
     */
    public function register(): void
    {
        // ...
    }

    /**
     * 引导任何应用程序服务
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
</code></pre><p><a name="clearing-jobs-from-queues"></a></p><h2 id="从队列中清除任务" tabindex="-1"><a class="header-anchor" href="#从队列中清除任务" aria-hidden="true">#</a> 从队列中清除任务</h2><blockquote><p><strong>技巧</strong> 使用 <a href="./horizon">Horizon</a> 时，应使用 <code>horizon:clear</code> 命令从队列中清除作业，而不是使用 <code>queue:clear</code> 命令。</p></blockquote><p>如果你想从默认连接的默认队列中删除所有任务，你可以使用 <code>queue:clear</code> Artisan 命令来执行此操作：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan queue:clear
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>你还可以提供 <code>connection</code> 参数和 <code>queue</code> 选项以从特定连接和队列中删除任务：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan queue:clear redis <span class="token parameter variable">--queue</span><span class="token operator">=</span>emails
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p><strong>注意</strong> 从队列中清除任务仅适用于 SQS、Redis 和数据库队列驱动程序。 此外，SQS 消息删除过程最多需要 60 秒，因此在你清除队列后 60 秒内发送到 SQS 队列的任务也可能会被删除。</p></blockquote><p><a name="monitoring-your-queues"></a></p><h2 id="监控你的队列" tabindex="-1"><a class="header-anchor" href="#监控你的队列" aria-hidden="true">#</a> 监控你的队列</h2><p>如果你的队列突然涌入了大量的任务，它会导致队列任务繁重，从而增加了任务的完成时间，想你所想， Laravel 可以在队列执行超过设定的阈值时候提醒你。</p><p>在开始之前， 你需要通过 <code>queue:monitor</code> 命令配置它 <a href="./scheduling">每分钟执行一次</a>。这个命令可以设定任务的名称，以及你想要设定的任务阈值：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan queue:monitor redis:default,redis:deployments <span class="token parameter variable">--max</span><span class="token operator">=</span><span class="token number">100</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>当你的任务超过设定阈值时候，仅通过这个方法还不足以触发通知，此时会触发一个 <code>Illuminate\\Queue\\Events\\QueueBusy</code> 事件。你可以在你的应用 <code>EventServiceProvider</code> 来监听这个事件，从而将监听结果通知给你的开发团队：</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">App<span class="token punctuation">\\</span>Notifications<span class="token punctuation">\\</span>QueueHasLongWaitTime</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Queue<span class="token punctuation">\\</span>Events<span class="token punctuation">\\</span>QueueBusy</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Support<span class="token punctuation">\\</span>Facades<span class="token punctuation">\\</span>Event</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Support<span class="token punctuation">\\</span>Facades<span class="token punctuation">\\</span>Notification</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * 为你的应用程序注册其他更多事件
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="testing"></a></p><h2 id="测试" tabindex="-1"><a class="header-anchor" href="#测试" aria-hidden="true">#</a> 测试</h2><p>当测试调度任务的代码时，你可能希望指示 Laravel 不要实际执行任务本身，因为任务的代码可以直接和独立于调度它的代码进行测试。 当然，要测试任务本身，你可以实例化一个任务实例并在测试中直接调用 <code>handle</code> 方法。</p><p>你可以使用 <code>Queue</code> facade 的 <code>fake</code> 方法来防止排队的任务实际被推送到队列中。 在调用 <code>Queue</code> facade 的 <code>fake</code> 方法后，你可以断言应用程序试图将任务推送到队列中：</p><pre><code>&lt;?php

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

        // 执行订单发货...

        // 断言没有任务被推送......
        Queue::assertNothingPushed();

        // 断言一个任务被推送到一个给定的队列...
        Queue::assertPushedOn(&#39;queue-name&#39;, ShipOrder::class);

        // 断言任务被推了两次...
        Queue::assertPushed(ShipOrder::class, 2);

        // 断言任务没有被推送...
        Queue::assertNotPushed(AnotherJob::class);

        // 断言闭包被推送到队列中...
        Queue::assertClosurePushed();
    }
}
</code></pre><p>你可以将闭包传递给 <code>assertPushed</code> 或 <code>assertNotPushed</code> 方法，以断言已推送通过给定「真实性测试」的任务。 如果至少有一项任务被推送并通过了给定的真值测试，则断言将成功：</p><pre><code>Queue::assertPushed(function (ShipOrder $job) use ($order) {
    return $job-&gt;order-&gt;id === $order-&gt;id;
});
</code></pre><p><a name="faking-a-subset-of-jobs"></a></p><h3 id="伪造任务的一个子集" tabindex="-1"><a class="header-anchor" href="#伪造任务的一个子集" aria-hidden="true">#</a> 伪造任务的一个子集</h3><p>如果你只需要伪造特定的任务，同时允许你的其他任务正常执行，你可以将应该伪造的任务的类名传递给 fake 方法：</p><pre><code>public function test_orders_can_be_shipped(): void
{
    Queue::fake([
        ShipOrder::class,
    ]);

    // 执行订单发货...

    // 断言任务被推了两次......
    Queue::assertPushed(ShipOrder::class, 2);
}
</code></pre><p>你可以使用 <code>except</code> 方法伪造除一组指定任务之外的所有任务：</p><pre><code>Queue::fake()-&gt;except([
    ShipOrder::class,
]);
</code></pre><p><a name="testing-job-chains"></a></p><h3 id="测试任务链" tabindex="-1"><a class="header-anchor" href="#测试任务链" aria-hidden="true">#</a> 测试任务链</h3><p>要测试任务链，你需要利用 <code>Bus</code> 外观的伪造功能。 <code>Bus</code> 门面的 <code>assertChained</code> 方法可用于断言 <a href="./queues#job-chaining">任务链</a> 已被分派。 <code>assertChained</code> 方法接受一个链式任务数组作为它的第一个参数：</p><pre><code>use App\\Jobs\\RecordShipment;
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
</code></pre><p>正如你在上面的示例中看到的，链式任务数组可能是任务类名称的数组。 但是，你也可以提供一组实际的任务实例。 这样做时，Laravel 将确保任务实例属于同一类，并且与你的应用程序调度的链式任务具有相同的属性值：</p><pre><code>Bus::assertChained([
    new ShipOrder,
    new RecordShipment,
    new UpdateInventory,
]);
</code></pre><p>你可以使用 <code>assertDispatchedWithoutChain</code> 方法来断言一个任务是在没有任务链的情况下被推送的：</p><pre><code>Bus::assertDispatchedWithoutChain(ShipOrder::class);
</code></pre><p><a name="testing-job-batches"></a></p><h3 id="测试任务批处理" tabindex="-1"><a class="header-anchor" href="#测试任务批处理" aria-hidden="true">#</a> 测试任务批处理</h3><p><code>Bus</code> 门面的 <code>assertBatched</code> 方法可用于断言 <a href="./queues#job-batching">批处理任务</a> 已分派。 给 <code>assertBatched</code> 方法的闭包接收一个 <code>Illuminate\\Bus\\PendingBatch</code> 的实例，它可用于检查批处理中的任务：</p><pre><code>use Illuminate\\Bus\\PendingBatch;
use Illuminate\\Support\\Facades\\Bus;

Bus::fake();

// ...

Bus::assertBatched(function (PendingBatch $batch) {
    return $batch-&gt;name == &#39;import-csv&#39; &amp;&amp;
           $batch-&gt;jobs-&gt;count() === 10;
});
</code></pre><p><a name="testing-job-batch-interaction"></a></p><h4 id="测试任务-批处理交互" tabindex="-1"><a class="header-anchor" href="#测试任务-批处理交互" aria-hidden="true">#</a> 测试任务 / 批处理交互</h4><p>此外，你可能偶尔需要测试单个任务与其基础批处理的交互。 例如，你可能需要测试任务是否取消了对其批次的进一步处理。 为此，你需要通过 <code>withFakeBatch</code> 方法为任务分配一个假批次。 <code>withFakeBatch</code> 方法返回一个包含任务实例和假批次的元组：</p><pre><code>[$job, $batch] = (new ShipOrder)-&gt;withFakeBatch();

$job-&gt;handle();

$this-&gt;assertTrue($batch-&gt;cancelled());
$this-&gt;assertEmpty($batch-&gt;added);
</code></pre><p><a name="job-events"></a></p><h2 id="任务事件" tabindex="-1"><a class="header-anchor" href="#任务事件" aria-hidden="true">#</a> 任务事件</h2><p>使用 <code>Queue</code> <a href="./facades">facade</a> 上的 <code>before</code> 和 <code>after</code> 方法，你可以指定要在处理排队任务之前或之后执行的回调。 这些回调是为仪表板执行额外日志记录或增量统计的绝佳机会。 通常，你应该从 <a href="./providers">服务提供者</a> 的 <code>boot</code> 方法中调用这些方法。 例如，我们可以使用 Laravel 自带的 <code>AppServiceProvider</code>：</p><pre><code>&lt;?php

namespace App\\Providers;

use Illuminate\\Support\\Facades\\Queue;
use Illuminate\\Support\\ServiceProvider;
use Illuminate\\Queue\\Events\\JobProcessed;
use Illuminate\\Queue\\Events\\JobProcessing;

class AppServiceProvider extends ServiceProvider
{
    /**
     * 注册任何应用程序服务。
     */
    public function register(): void
    {
        // ...
    }

    /**
     * 引导任何应用程序服务。
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
</code></pre><p>通过使用 <code>Queue</code> <a href="./facades">facade</a> 的 <code>looping</code> 方法 ，你可以在 worker 尝试从队列获取任务之前执行指定的回调。例如，你可以注册一个闭包，用以回滚之前失败任务打开的任何事务：</p><pre><code>use Illuminate\\Support\\Facades\\DB;
use Illuminate\\Support\\Facades\\Queue;

Queue::looping(function () {
    while (DB::transactionLevel() &gt; 0) {
        DB::rollBack();
    }
});
</code></pre>`,63);function D(J,M){const a=c("ExternalLinkIcon");return d(),i("div",null,[p,n("p",null,[e("Laravel 队列为各种不同的队列驱动提供统一的队列 API，例如 "),n("a",u,[e("Amazon SQS"),s(a)]),e("，"),n("a",l,[e("Redis"),s(a)]),e("，甚至关系数据库。")]),n("p",null,[e("Laravel 队列的配置选项存储在 "),h,e(" 文件中。 在这个文件中，你可以找到框架中包含的每个队列驱动的连接配置，包括数据库， "),n("a",b,[e("Amazon SQS"),s(a)]),e(", "),n("a",m,[e("Redis"),s(a)]),e("， 和 "),n("a",v,[e("Beanstalkd"),s(a)]),e(" 驱动，以及一个会立即执行作业的同步驱动（用于本地开发）。还包括一个用于丢弃排队任务的 "),g,e(" 队列驱动。")]),f,n("p",null,[e("如果你的 Redis 队列当中使用了 Redis 集群，那么你的队列名称就必须包含一个 "),n("a",k,[e("key hash tag"),s(a)]),e("。这是为了确保一个给定队列的所有 Redis 键都被放在同一个哈希插槽：")]),q,w,x,n("blockquote",null,[n("p",null,[S,e(" 唯一不包含 "),I,e(" 值的队列连接是Amazon SQS。SQS将根据AWS控制台内管理的 "),n("a",y,[e("默认可见性超时"),s(a)]),e(" 重试作业。")])]),P,n("blockquote",null,[n("p",null,[$,e(" 如果你自己配置和管理 Supervisor 听起来很费力，请考虑使用 "),n("a",_,[e("Laravel Forge"),s(a)]),e("，它会自动为你的生产 Laravel 项目安装和配置 Supervisor。")])]),Q,n("p",null,[e("有关 Supervisor 的更多信息，请参阅 "),n("a",j,[e("Supervisor 文档"),s(a)]),e("。")]),A,n("p",null,[e("Laravel 还支持将失败的任务记录存储在 "),n("a",B,[e("DynamoDB"),s(a)]),e(" 而不是关系数据库表中。但是，你必须创建一个 DynamoDB 表来存储所有失败的任务记录。通常，此表应命名为 "),R,e("，但你应根据应用程序的 "),C,e(" 配置文件中的 "),L,e(" 配置值命名该表。")]),E])}const W=t(r,[["render",D],["__file","queues.html.vue"]]);export{W as default};
