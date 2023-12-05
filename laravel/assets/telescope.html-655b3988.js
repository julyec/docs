import{_ as s}from"./telescope-example-c8b2142c.js";import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{r as c,o,c as d,b as a,d as e,e as t,a as n}from"./app-8cdff07c.js";const l={},p=n('<h1 id="telescope-调试工具" tabindex="-1"><a class="header-anchor" href="#telescope-调试工具" aria-hidden="true">#</a> Telescope 调试工具</h1><ul><li><a href="#introduction">简介</a></li><li><a href="#installation">安装</a><ul><li><a href="#local-only-installation">仅本地安装</a></li><li><a href="#configuration">配置</a></li><li><a href="#data-pruning">数据修改</a></li><li><a href="#dashboard-authorization">仪表盘授权</a></li></ul></li><li><a href="#upgrading-telescope">升级 Telescope</a></li><li><a href="#filtering">过滤</a><ul><li><a href="#filtering-entries">单项过滤</a></li><li><a href="#filtering-batches">批量过滤</a></li></ul></li><li><a href="#tagging">标记</a></li><li><a href="#available-watchers">可用的监视器</a><ul><li><a href="#batch-watcher">批量监视器</a></li><li><a href="#cache-watcher">缓存监视器</a></li><li><a href="#command-watcher">命令监视器</a></li><li><a href="#dump-watcher">输出监视器</a></li><li><a href="#event-watcher">事件监视器</a></li><li><a href="#exception-watcher">异常监视器</a></li><li><a href="#gate-watcher">Gate 监视器</a></li><li><a href="#http-client-watcher">HTTP Client 监视器</a></li><li><a href="#job-watcher">任务监视器</a></li><li><a href="#log-watcher">日志监视器</a></li><li><a href="#mail-watcher">邮件监视器</a></li><li><a href="#model-watcher">模型监视器</a></li><li><a href="#notification-watcher">消息通知监视器</a></li><li><a href="#query-watcher">数据查询监视器</a></li><li><a href="#redis-watcher">Redis 监视器</a></li><li><a href="#request-watcher">请求监视器</a></li><li><a href="#schedule-watcher">定时任务监视器</a></li><li><a href="#view-watcher">视图监视器</a></li></ul></li><li><a href="#displaying-user-avatars">显示用户头像</a></li></ul><p><a name="introduction"></a></p><h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h2>',4),h={href:"https://github.com/laravel/telescope",target:"_blank",rel:"noopener noreferrer"},u=n('<img src="'+s+`"><p><a name="installation"></a></p><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><p>你可以使用 Composer 将 Telescope 安装到 Laravel 项目中：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">composer</span> require laravel/telescope
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>安装 Telescope 后，你应使用 <code>telescope:install</code> 命令来发布其公共资源，然后运行 <code>migrate</code> 命令执行数据库变更来创建和保存 Telescope 需要的数据：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan telescope:install

php artisan migrate
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="migration-customization"></a></p><h4 id="自定义迁移" tabindex="-1"><a class="header-anchor" href="#自定义迁移" aria-hidden="true">#</a> 自定义迁移</h4><p>如果不打算使用 Telescope 的默认迁移，则应在应用程序的 <code>App\\Providers\\AppServiceProvider</code> 类的 <code>register</code> 方法中调用 <code>Telescope::ignoreMigrations</code> 方法。你可以使用以下命令导出默认迁移：<code>php artisan vendor:publish --tag=telescope-migrations</code></p><p><a name="local-only-installation"></a></p><h3 id="仅本地安装" tabindex="-1"><a class="header-anchor" href="#仅本地安装" aria-hidden="true">#</a> 仅本地安装</h3><p>如果你仅打算使用 Telescope 来帮助你的本地开发，你可以使用 <code>--dev</code> 标记安装 Telescope：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">composer</span> require laravel/telescope <span class="token parameter variable">--dev</span>

php artisan telescope:install

php artisan migrate
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行 <code>telescope:install</code> 后，应该从应用程序的 <code>config/app.php</code> 配置文件中删除 <code>TelescopeServiceProvider</code> 服务提供者注册。手动在 <code>App\\Providers\\AppServiceProvider</code> 类的 <code>register</code> 方法中注册 telescope 的服务提供者来替代。在注册提供者之前，我们会确保当前环境是 <code>local</code>：</p><pre><code>/**
 * 注册应用服务。
 */
public function register(): void
{
    if ($this-&gt;app-&gt;environment(&#39;local&#39;)) {
        $this-&gt;app-&gt;register(\\Laravel\\Telescope\\TelescopeServiceProvider::class);
        $this-&gt;app-&gt;register(TelescopeServiceProvider::class);
    }
}
</code></pre><p>最后，你还应该将以下内容添加到你的 <code>composer.json</code> 文件中来防止 Telescope 扩展包被 <a href="./packages#package-discovery">自动发现</a>：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;extra&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;laravel&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;dont-discover&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">&quot;laravel/telescope&quot;</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="configuration"></a></p><h3 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h3><p>发布 Telescope 的资源文件后，其主要配置文件将位于 <code>config/telescope.php</code>。此配置文件允许你配置监听 <a href="#available-watchers">观察者选项</a>，每个配置选项都包含其用途说明，因此请务必彻底浏览此文件。</p><p>如果需要，你可以使用 <code>enabled</code> 配置选项完全禁用 Telescope 的数据收集：</p><pre><code>&#39;enabled&#39; =&gt; env(&#39;TELESCOPE_ENABLED&#39;, true),
</code></pre><p><a name="data-pruning"></a></p><h3 id="数据修改" tabindex="-1"><a class="header-anchor" href="#数据修改" aria-hidden="true">#</a> 数据修改</h3><p>有了数据修改， <code>telescope_entries</code> 表可以非常快速地累积记录。 为了缓解这个问题，你应该使用 <a href="./scheduling">调度</a> 每天运行 <code>telescope:prune</code> 命令：</p><pre><code>$schedule-&gt;command(&#39;telescope:prune&#39;)-&gt;daily();
</code></pre><p>默认情况下，将获取超过 24 小时的所有数据。在调用命令时可以使用 <code>hours</code> 选项来确定保留 <code>Telescope</code> 数据的时间。例如，以下命令将删除 48 小时前创建的所有记录：</p><pre><code>$schedule-&gt;command(&#39;telescope:prune --hours=48&#39;)-&gt;daily();
</code></pre><p><a name="dashboard-authorization"></a></p><h3 id="仪表板授权" tabindex="-1"><a class="header-anchor" href="#仪表板授权" aria-hidden="true">#</a> 仪表板授权</h3><p>访问 <code>/telescope</code> 即可显示仪表盘。默认情况下，你只能在 <code>local</code> 环境中访问此仪表板。 在 <code>app/Providers/TelescopeServiceProvider.php</code> 文件中，有一个 <a href="./authorization#gates">gate 授权</a> 。此授权能控制在 <strong>非本地</strong> 环境中对 Telescope 的访问。你可以根据需要随意修改此权限以限制对 Telescope 安装和访问：</p><pre><code>use App\\Models\\User;

/**
 * 注册 Telescope gate。
 *
 * 该 gate 确定谁可以在非本地环境中访问 Telescope
 */
protected function gate(): void
{
    Gate::define(&#39;viewTelescope&#39;, function (User $user) {
        return in_array($user-&gt;email, [
            &#39;taylor@laravel.com&#39;,
        ]);
    });
}
</code></pre><blockquote><p>注意：你应该确保在生产环境中将 <code>APP_ENV</code> 环境变量更改为 <code>Production</code>。 否则，你的 Telescope 调试工具将公开可用。</p></blockquote><p><a name="upgrading-telescope"></a></p><h2 id="更新-telescope" tabindex="-1"><a class="header-anchor" href="#更新-telescope" aria-hidden="true">#</a> 更新 Telescope</h2>`,36),g={href:"https://github.com/laravel/telescope/blob/master/UPGRADE.",target:"_blank",rel:"noopener noreferrer"},v=n(`<p>此外，升级到任何新的 Telescope 版本时，你都应该重建 Telescope 实例：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan telescope:publish
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>为了使实例保持最新状态并避免将来的更新中出现问题，可以在应用程序的 <code>composer.json</code> 文件中的 <code>post-update-cmd</code> 脚本添加 <code>telescope:publish</code> 命令：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;post-update-cmd&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">&quot;@php artisan vendor:publish --tag=laravel-assets --ansi --force&quot;</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="filtering"></a></p><h2 id="过滤" tabindex="-1"><a class="header-anchor" href="#过滤" aria-hidden="true">#</a> 过滤</h2><p><a name="filtering-entries"></a></p><h3 id="单项过滤" tabindex="-1"><a class="header-anchor" href="#单项过滤" aria-hidden="true">#</a> 单项过滤</h3><p>你可以通过在 <code>App\\Providers\\TelescopeServiceProvider</code> 类中定义的 <code>filter</code> 闭包来过滤 Telescope 记录的数据。 默认情况下，此回调会记录 <code>local</code> 环境中的所有数据以及异常、失败任务、计划任务和带有受监控标记的数据：</p><pre><code>use Laravel\\Telescope\\IncomingEntry;
use Laravel\\Telescope\\Telescope;

/**
 * 注册应用服务
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
</code></pre><p><a name="filtering-batches"></a></p><h3 id="批量过滤" tabindex="-1"><a class="header-anchor" href="#批量过滤" aria-hidden="true">#</a> 批量过滤</h3><p><code>filter</code> 闭包过滤单个条目的数据， 你也可以使用 <code>filterBatch</code> 方法注册一个闭包，该闭包过滤给定请求或控制台命令的所有数据。如果闭包返回 <code>true</code>，则所有数据都由 Telescope 记录：</p><pre><code>use Illuminate\\Support\\Collection;
use Laravel\\Telescope\\IncomingEntry;
use Laravel\\Telescope\\Telescope;

/**
 *  注册应用服务
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
</code></pre><p><a name="tagging"></a></p><h2 id="标签" tabindex="-1"><a class="header-anchor" href="#标签" aria-hidden="true">#</a> 标签</h2><p>Telescope 允许你通过 「tag」 搜索条目。通常，标签是 Eloquent 模型的类名或经过身份验证的用户 ID， 这些标签会自动添加到条目中。有时，你可能希望将自己的自定义标签附加到条目中。 你可以使用 <code>Telescope::tag</code> 方法。 <code>tag</code> 方法接受一个闭包，该闭包应返回一个标签数组。返回的标签将与 Telescope 自动附加到条目的所有标签合并。你应该在 <code>App\\Providers\\TelescopeServiceProvider</code> 类中的 <code>register</code> 方法调用 <code>tag</code> 方法：</p><pre><code>use Laravel\\Telescope\\IncomingEntry;
use Laravel\\Telescope\\Telescope;

/**
 * 注册应用服务
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
</code></pre><p><a name="available-watchers"></a></p><h2 id="可用的观察者" tabindex="-1"><a class="header-anchor" href="#可用的观察者" aria-hidden="true">#</a> 可用的观察者</h2><p>Telescope 「观察者」 在执行请求或控制台命令时收集应用数据。你可以在 <code>config/telescope.php</code> 配置文件中自定义启用的观察者列表：</p><pre><code>&#39;watchers&#39; =&gt; [
    Watchers\\CacheWatcher::class =&gt; true,
    Watchers\\CommandWatcher::class =&gt; true,
    ...
],
</code></pre><p>一些监视器还允许你提供额外的自定义选项：</p><pre><code>&#39;watchers&#39; =&gt; [
    Watchers\\QueryWatcher::class =&gt; [
        &#39;enabled&#39; =&gt; env(&#39;TELESCOPE_QUERY_WATCHER&#39;, true),
        &#39;slow&#39; =&gt; 100,
    ],
    ...
],
</code></pre><p><a name="batch-watcher"></a></p><h3 id="批量监视器" tabindex="-1"><a class="header-anchor" href="#批量监视器" aria-hidden="true">#</a> 批量监视器</h3><p>批量监视器记录队列 <a href="./queues#job-batching">批量任务</a> 的信息，包括任务和连接信息。</p><p><a name="cache-watcher"></a></p><h3 id="缓存监视器" tabindex="-1"><a class="header-anchor" href="#缓存监视器" aria-hidden="true">#</a> 缓存监视器</h3><p>当缓存键被命中、未命中、更新和删除时，缓存监视器会记录数据。</p><p><a name="command-watcher"></a></p><h3 id="命令监视器" tabindex="-1"><a class="header-anchor" href="#命令监视器" aria-hidden="true">#</a> 命令监视器</h3><p>只要执行 Artisan 命令，命令监视器就会记录参数、选项、退出码和输出。如果你想排除监视器记录的某些命令，你可以在 <code>config/telescope.php</code> 文件的 <code>ignore</code> 选项中指定命令：</p><pre><code>&#39;watchers&#39; =&gt; [
    Watchers\\CommandWatcher::class =&gt; [
        &#39;enabled&#39; =&gt; env(&#39;TELESCOPE_COMMAND_WATCHER&#39;, true),
        &#39;ignore&#39; =&gt; [&#39;key:generate&#39;],
    ],
    ...
],
</code></pre><p><a name="dump-watcher"></a></p><h3 id="输出监视器" tabindex="-1"><a class="header-anchor" href="#输出监视器" aria-hidden="true">#</a> 输出监视器</h3><p>输出监视器在 Telescope 中记录并显示你的变量输出。使用 Laravel 时，可以使用全局 <code>dump</code> 函数输出变量。必须在浏览器中打开数据监视器选项卡，才能进行输出变量，否则监视器将忽略此次输出。</p><p><a name="event-watcher"></a></p><h3 id="事件监视器" tabindex="-1"><a class="header-anchor" href="#事件监视器" aria-hidden="true">#</a> 事件监视器</h3><p>事件监视器记录应用分发的所有 <a href="./events">事件</a> 的有效负载、监听器和广播数据。事件监视器忽略了 Laravel 框架的内部事件。</p><p><a name="exception-watcher"></a></p><h3 id="异常监视器" tabindex="-1"><a class="header-anchor" href="#异常监视器" aria-hidden="true">#</a> 异常监视器</h3><p>异常监视器记录应用抛出的任何可报告异常的数据和堆栈跟踪。</p><p><a name="gate-watcher"></a></p><h3 id="gate-拦截-监视器" tabindex="-1"><a class="header-anchor" href="#gate-拦截-监视器" aria-hidden="true">#</a> Gate（拦截）监视器</h3><p>Gate 监视器记录你的应用的 <a href="./authorization">gate 和策略</a> 检查的数据和结果。如果你希望将某些属性排除在监视器的记录之外，你可 <code>config/telescope.php</code> 文件的 <code>ignore_abilities</code> 选项中指定它们：</p><pre><code>&#39;watchers&#39; =&gt; [
    Watchers\\GateWatcher::class =&gt; [
        &#39;enabled&#39; =&gt; env(&#39;TELESCOPE_GATE_WATCHER&#39;, true),
        &#39;ignore_abilities&#39; =&gt; [&#39;viewNova&#39;],
    ],
    ...
],
</code></pre><p><a name="http-client-watcher"></a></p><h3 id="http-客户端监视器" tabindex="-1"><a class="header-anchor" href="#http-客户端监视器" aria-hidden="true">#</a> HTTP 客户端监视器</h3><p>HTTP 客户端监视器记录你的应用程序发出的传出 <a href="./http-client">HTTP 客户端请求</a>。</p><p><a name="job-watcher"></a></p><h3 id="任务监视器" tabindex="-1"><a class="header-anchor" href="#任务监视器" aria-hidden="true">#</a> 任务监视器</h3><p>任务监视器记录应用程序分发的任何 <a href="./queues">任务</a> 的数据和状态。</p><p><a name="log-watcher"></a></p><h3 id="日志监视器" tabindex="-1"><a class="header-anchor" href="#日志监视器" aria-hidden="true">#</a> 日志监视器</h3><p>日志监视器记录应用程序写入的任何日志的 <a href="./logging">日志数据</a>。</p><p>默认情况下，Telescope 将只记录 [错误] 级别及以上的日志。但是，你可以修改应用程序的 <code>config/tescope.php</code> 配置文件中的 <code>level</code> 选项来修改此行为：</p><pre><code>&#39;watchers&#39; =&gt; [
    Watchers\\LogWatcher::class =&gt; [
        &#39;enabled&#39; =&gt; env(&#39;TELESCOPE_LOG_WATCHER&#39;, true),
        &#39;level&#39; =&gt; &#39;debug&#39;,
    ],

    // ...
],
</code></pre><p><a name="mail-watcher"></a></p><h3 id="邮件监视器" tabindex="-1"><a class="header-anchor" href="#邮件监视器" aria-hidden="true">#</a> 邮件监视器</h3><p>邮件监视器允许你查看应用发送的 <a href="./mail">邮件</a> 及其相关数据的浏览器内预览。你也可以将该电子邮件下载为 <code>.eml</code> 文件。</p><p><a name="model-watcher"></a></p><h3 id="模型监视器" tabindex="-1"><a class="header-anchor" href="#模型监视器" aria-hidden="true">#</a> 模型监视器</h3><p>每当调度 Eloquent 的 <a href="./eloquent#events">模型事件</a> 时，模型监视器就会记录模型更改。你可以通过监视器的 <code>events</code> 选项指定应记录哪些模型事件：</p><pre><code>&#39;watchers&#39; =&gt; [
    Watchers\\ModelWatcher::class =&gt; [
        &#39;enabled&#39; =&gt; env(&#39;TELESCOPE_MODEL_WATCHER&#39;, true),
        &#39;events&#39; =&gt; [&#39;eloquent.created*&#39;, &#39;eloquent.updated*&#39;],
    ],
    ...
],
</code></pre><p>如果你想记录在给定请求期间融合的模型数量，请启用 <code>hydrations</code> 选项：</p><pre><code>&#39;watchers&#39; =&gt; [
    Watchers\\ModelWatcher::class =&gt; [
        &#39;enabled&#39; =&gt; env(&#39;TELESCOPE_MODEL_WATCHER&#39;, true),
        &#39;events&#39; =&gt; [&#39;eloquent.created*&#39;, &#39;eloquent.updated*&#39;],
        &#39;hydrations&#39; =&gt; true,
    ],
    ...
],
</code></pre><p><a name="notification-watcher"></a></p><h3 id="消息通知监视器" tabindex="-1"><a class="header-anchor" href="#消息通知监视器" aria-hidden="true">#</a> 消息通知监视器</h3><p>消息通知监听器记录你的应用程序发送的所有 <a href="./notifications">消息通知</a> 。如果通知触发了电子邮件并且你启用了邮件监听器，则电子邮件也可以在邮件监视器屏幕上进行预览。</p><p><a name="query-watcher"></a></p><h3 id="数据查询监视器" tabindex="-1"><a class="header-anchor" href="#数据查询监视器" aria-hidden="true">#</a> 数据查询监视器</h3><p>数据查询监视器记录应用程序执行的所有查询的原始 SQL、绑定和执行时间。监视器还将任何慢于 100 毫秒的查询标记为 <code>slow</code>。你可以使用监视器的 <code>slow</code> 选项自定义慢查询阈值：</p><pre><code>&#39;watchers&#39; =&gt; [
    Watchers\\QueryWatcher::class =&gt; [
        &#39;enabled&#39; =&gt; env(&#39;TELESCOPE_QUERY_WATCHER&#39;, true),
        &#39;slow&#39; =&gt; 50,
    ],
    ...
],
</code></pre><p><a name="redis-watcher"></a></p><h3 id="redis-监视器" tabindex="-1"><a class="header-anchor" href="#redis-监视器" aria-hidden="true">#</a> Redis 监视器</h3><p>Redis 监视器记录你的应用程序执行的所有 <a href="./redis">Redis</a> 命令。如果你使用 Redis 进行缓存，Redis 监视器也会记录缓存命令。</p><p><a name="request-watcher"></a></p><h3 id="请求监视器" tabindex="-1"><a class="header-anchor" href="#请求监视器" aria-hidden="true">#</a> 请求监视器</h3><p>请求监视器记录与应用程序处理的任何请求相关联的请求、请求头、会话和响应数据。你可以通过 <code>size_limit</code>（以 KB 为单位）选项限制记录的响应数据：</p><pre><code>&#39;watchers&#39; =&gt; [
    Watchers\\RequestWatcher::class =&gt; [
        &#39;enabled&#39; =&gt; env(&#39;TELESCOPE_REQUEST_WATCHER&#39;, true),
        &#39;size_limit&#39; =&gt; env(&#39;TELESCOPE_RESPONSE_SIZE_LIMIT&#39;, 64),
    ],
    ...
],
</code></pre><p><a name="schedule-watcher"></a></p><h3 id="定时任务监视器" tabindex="-1"><a class="header-anchor" href="#定时任务监视器" aria-hidden="true">#</a> 定时任务监视器</h3><p>定时任务监视器记录应用程序运行的任何 <a href="./scheduling">计划任务</a> 的命令和输出。</p><p><a name="view-watcher"></a></p><h3 id="视图监视器" tabindex="-1"><a class="header-anchor" href="#视图监视器" aria-hidden="true">#</a> 视图监视器</h3><p>视图监视器记录渲染视图时使用的 <a href="./views">视图</a> 名称、路径、数据和「composer」组件。</p><p><a name="displaying-user-avatars"></a></p><h2 id="显示用户头像" tabindex="-1"><a class="header-anchor" href="#显示用户头像" aria-hidden="true">#</a> 显示用户头像</h2><p>Telescope 仪表盘显示保存给定条目时会有登录用户的用户头像。 默认情况下，Telescope 将使用 Gravatar Web 服务检索头像。 但是，你可以通过在 <code>App\\Providers\\TelescopeServiceProvider</code> 类中注册一个回调来自定义头像 URL。 回调将收到用户的 ID 和电子邮件地址，并应返回用户的头像 URL：</p><pre><code>use App\\Models\\User;
use Laravel\\Telescope\\Telescope;

/**
 * 注册应用服务
 */
public function register(): void
{
    // ...

    Telescope::avatar(function (string $id, string $email) {
        return &#39;/avatars/&#39;.User::find($id)-&gt;avatar_path;
    });
}
</code></pre>`,91);function m(f,b){const r=c("ExternalLinkIcon");return o(),d("div",null,[p,a("p",null,[a("a",h,[e("Laravel Telescope"),t(r)]),e(" 是 Laravel 本地开发环境的绝佳伴侣。Telescope 可以洞察你的应用程序的请求、异常、日志条目、数据库查询、排队的作业、邮件、消息通知、缓存操作、定时计划任务、变量打印等。")]),u,a("p",null,[e("升级到 Telescope 的新主要版本时，务必仔细阅读 "),a("a",g,[e("升级指南"),t(r)]),e(".")]),v])}const _=i(l,[["render",m],["__file","telescope.html.vue"]]);export{_ as default};
