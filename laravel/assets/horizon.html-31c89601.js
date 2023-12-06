import{_ as i}from"./horizon-example-7829a532.js";import{_ as r}from"./plugin-vue_export-helper-c27b6911.js";import{r as d,o as t,c,b as e,d as n,e as o,a as s}from"./app-06635a3b.js";const l={},p=s('<h1 id="horizon-队列管理工具" tabindex="-1"><a class="header-anchor" href="#horizon-队列管理工具" aria-hidden="true">#</a> Horizon 队列管理工具</h1><ul><li><a href="#introduction">介绍</a></li><li><a href="#installation">安装</a><ul><li><a href="#configuration">配置</a></li><li><a href="#balancing-strategies">均衡策略</a></li><li><a href="#dashboard-authorization">控制面板授权</a></li><li><a href="#silenced-jobs">静默作业</a></li></ul></li><li><a href="#upgrading-horizon">升级 Horizon</a></li><li><a href="#running-horizon">运行 Horizon</a><ul><li><a href="#deploying-horizon">部署 Horizon</a></li></ul></li><li><a href="#tags">标记</a></li><li><a href="#notifications">通知</a></li><li><a href="#metrics">指标</a></li><li><a href="#deleting-failed-jobs">删除失败的作业</a></li><li><a href="#clearing-jobs-from-queues">从队列中清除作业</a></li></ul><p><a name="introduction"></a></p><h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h2><blockquote><p><strong>提示</strong><br> 在深入了解 Laravel Horizon 之前，您应该熟悉 Laravel 的基础 <a href="./queues">队列服务</a>。 Horizon 为 Laravel 的队列增加了额外的功能，如果你还不熟悉 Laravel 提供的基本队列功能，这些功能可能会让人感到困惑。</p></blockquote>',5),u={href:"https://github.com/laravel/horizon",target:"_blank",rel:"noopener noreferrer"},h=e("a",{href:"./queues"},"Redis queues",-1),v=e("p",null,"在使用 Horizon 时，所有队列的 worker 配置都存储在一个简单的配置文件中。通过在受版本控制的文件中定义应用程序的 worker 配置，你可以在部署应用程序时轻松扩展或修改应用程序的队列 worker。",-1),m=e("img",{src:i},null,-1),b=e("p",null,[e("a",{name:"installation"})],-1),g=e("h2",{id:"安装",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#安装","aria-hidden":"true"},"#"),n(" 安装")],-1),z=e("strong",null,"注意",-1),f={href:"https://redis.io",target:"_blank",rel:"noopener noreferrer"},k=e("code",null,"config/queue.php",-1),_=e("code",null,"redis",-1),H=s(`<p>你可以使用 Composer 将 Horizon 安装到你的 Laravel 项目里：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">composer</span> require laravel/horizon
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Horizon 安装之后，使用 <code>horizon:install</code> Artisan 命令发布资源：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan horizon:install
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a name="configuration"></a></p><h3 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h3><p>Horizon 资源发布之后，其主要配置文件会被分配到 <code>config/horizon.php</code> 文件。可以用这个配置文件配置工作选项，每个配置选项包含一个用途描述，请务必仔细研究这个文件。</p><blockquote><p>**注意：**Horizon 在内部使用名为 <code>horizon</code> 的 Redis 连接。此 Redis 连接名称是保留的，不应分配给 <code>database.php</code> 配置文件中的另一个 Redis 连接或作为 <code>horizon.php</code> 配置文件中的 <code>use</code> 选项的值。</p></blockquote><p><a name="environments"></a></p><h4 id="环境配置" tabindex="-1"><a class="header-anchor" href="#环境配置" aria-hidden="true">#</a> 环境配置</h4><p>安装后，你需要熟悉的重点 Horizon 配置选项是 <code>environments</code> 配置选项。此配置选项定义了你的应用程序运行的一系列环境，并为每个环境定义了工作进程选项。默认情况下，此条目包含　<code>生产 (production)</code>　和 <code>本地 (local)</code>环境。简而言之，你可以根据自己的需要自由添加更多环境：</p><pre><code>&#39;environments&#39; =&gt; [
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
</code></pre><p>当你启动 Horizon 时，它将使用指定应用程序运行环境所配置的 worker 进程选项。通常，环境配置由 <code>APP_ENV</code> <a href="./configuration#determining-the-current-environment">环境变量</a> 的值确定。例如，默认的 <code>local</code> Horizon 环境配置为启动三个工作进程，并自动平衡分配给每个队列的工作进程数量。默认的「生产」环境配置为最多启动 10 个 worker 进程，并自动平衡分配给每个队列的 worker 进程数量。</p><blockquote><p>**注意：**你应该确保你的 <code>horizon</code> 配置文件的 <code>environments</code> 部分包含计划在其上运行 Horizon 的每个 <a href="./configuration#environment-configuration">环境</a> 的配置。</p></blockquote><p><a name="supervisors"></a></p><h4 id="supervisors" tabindex="-1"><a class="header-anchor" href="#supervisors" aria-hidden="true">#</a> Supervisors</h4><p>正如你在 Horizon 的默认配置文件中看到的那样。每个环境可以包含一个或多个 Supervisor 配置。默认情况下，配置文件将这个Supervisor 定义为 <code>supervisor-1</code>；但是，你可以随意命名你的 Supervisor。每个 Supervisor 负责监督一组 worker，并负责平衡队列之间的 worker。</p><p>如果你想定义一组在指定环境中运行的新 worker，可以向相应的环境添加额外的 Supervisor。如果你想为应用程序使用的特定队列定义不同的平衡策略或 worker 数量，也可以选择这样做。</p><p><a name="default-values"></a></p><h4 id="默认值" tabindex="-1"><a class="header-anchor" href="#默认值" aria-hidden="true">#</a> 默认值</h4><p>在 Horizon 的默认配置文件中，你会注意到一个 <code>defaults</code> 配置选项。这个配置选项指定应用程序的 <a href="#supervisors">supervisors</a> 的默认值。Supervisor 的默认配置值将合并到每个环境的 Supervisor 配置中，让你在定义 Supervisor 时避免不必要的重复工作。</p><p><a name="balancing-strategies"></a></p><h3 id="均衡策略" tabindex="-1"><a class="header-anchor" href="#均衡策略" aria-hidden="true">#</a> 均衡策略</h3><p>与 Laravel 的默认队列系统不同，Horizon 允许你从三个平衡策略中进行选择：<code>simple</code>， <code>auto</code>， 和 <code>false</code>。<code>simple</code> 策略是配置文件的默认选项，它会在进程之间平均分配进入的任务：</p><pre><code>&#39;balance&#39; =&gt; &#39;simple&#39;,
</code></pre><p><code>auto</code> 策略根据队列的当前工作负载来调整每个队列的工作进程数量。举个例子，如果你的 <code>notifications</code> 队列有 1000 个等待的任务，而你的 <code>render</code> 队列是空的，那么 Horizon 将为 <code>notifications</code> 队列分配更多的工作线程，直到队列为空。</p><p>当使用 <code>auto</code> 策略时，你可以定义 <code>minProcesses</code> 和 <code>maxProcesses</code> 的配置选项来控制 Horizon 扩展进程的最小和最大数量：</p><pre><code>&#39;environments&#39; =&gt; [
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
</code></pre><p><code>autoScalingStrategy</code> 配置值决定了 Horizon 是根据清除队列所需的总时间（<code>time</code> 策略）还是根据队列上的作业总数（<code>size</code> 策略）来为队列分配更多的Worker 进程。</p><p><code>balanceMaxShift</code> 和 <code>balanceCooldown</code> 配置项可以确定 Horizon 将以多快的速度扩展进程，在上面的示例中，每 3 秒钟最多创建或销毁一个新进程，你可以根据应用程序的需要随意调整这些值。</p><p>当 <code>balance</code> 选项设置为 <code>false</code> 时，将使用默认的 Laravel 行为，它按照队列在配置中列出的顺序处理队列。</p><p><a name="dashboard-authorization"></a></p><h3 id="控制面板授权" tabindex="-1"><a class="header-anchor" href="#控制面板授权" aria-hidden="true">#</a> 控制面板授权</h3><p>Horizon 在 <code>/horizon</code> 上显示了一个控制面板。默认情况下，你只能在 <code>local</code> 环境中访问这个面板。在你的 <code>app/Providers/HorizonServiceProvider.php</code> 文件中，有一个 <a href="./authorization#gates">授权拦截器（Gates）</a> 的方法定义，该拦截器用于控制在<strong>非本地</strong>环境中对 Horizon 的访问。末可以根据需要修改此方法，来限制对 Horizon 的访问：</p><pre><code>/**
 * 注册 Horizon 授权
 *
 * 此方法决定了谁可以在非本地环境中访问 Horizon
 */
protected function gate(): void
{
    Gate::define(&#39;viewHorizon&#39;, function (User $user) {
        return in_array($user-&gt;email, [
            &#39;taylor@laravel.com&#39;,
        ]);
    });
}
</code></pre><p><a name="alternative-authentication-strategies"></a></p><h4 id="可替代的身份验证策略" tabindex="-1"><a class="header-anchor" href="#可替代的身份验证策略" aria-hidden="true">#</a> 可替代的身份验证策略</h4><p>需要留意的是，Laravel 会自动将经过认证的用户注入到拦截器（Gate）闭包中。如果你的应用程序通过其他方法（例如 IP 限制）提供 Horizon 安全性保障，那么你访问 Horizon 用户可能不需要实现这个「登录」动作。因此，你需要将上面的 <code>function ($user)</code> 更改为 <code>function ($user = null)</code> 以强制 Laravel 跳过身份验证。</p><p><a name="silenced-jobs"></a></p><h3 id="静默作业" tabindex="-1"><a class="header-anchor" href="#静默作业" aria-hidden="true">#</a> 静默作业</h3><p>有时，你可能对查看某些由你的应用程序或第三方软件包发出的工作不感兴趣。与其让这些作业在你的「已完成作业」列表中占用空间，你可以让它们静默。要开始的话，在你的应用程序的 <code>horizon</code> 配置文件中的 <code>silenced</code> 配置选项中添加作业的类名。</p><pre><code>&#39;silenced&#39; =&gt; [
    App\\Jobs\\ProcessPodcast::class,
],
</code></pre><p>或者，你希望静默的作业可以实现 <code>Laravel\\Horizon\\Contracts\\Silenced</code> 接口。如果一个作业实现了这个接口，它将自动被静默，即使它不在 <code>silenced</code> 配置阵列中。</p><pre><code>use Laravel\\Horizon\\Contracts\\Silenced;

class ProcessPodcast implements ShouldQueue, Silenced
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    // ...
}
</code></pre><p><a name="upgrading-horizon"></a></p><h2 id="升级-horizon" tabindex="-1"><a class="header-anchor" href="#升级-horizon" aria-hidden="true">#</a> 升级 Horizon</h2>`,46),x={href:"https://github.com/laravel/horizon/blob/master/UPGRADE.",target:"_blank",rel:"noopener noreferrer"},S=s(`<p>此外，升级到新的 Horizon 版本时，你应该重新发布 Horizon 资源：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan horizon:publish
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>为了使资源文件保持最新并避免以后的更新中出现问题，你可以将以下 <code>horizon:publish</code> 命令添加到 <code>composer.json</code> 文件中的 <code>post-update-cmd</code> 脚本中：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;post-update-cmd&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">&quot;@php artisan vendor:publish --tag=laravel-assets --ansi --force&quot;</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="running-horizon"></a></p><h2 id="运行-horizon" tabindex="-1"><a class="header-anchor" href="#运行-horizon" aria-hidden="true">#</a> 运行 Horizon</h2><p>在 <code>config/horizon.php</code> 中配置了你的 workers 之后，你可以使用 <code>horizon</code> Artisan 命令启动 Horizon。只需这一个命令你就可以启动你的所有已配置的 workers：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan horizon
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>你可以暂停 Horizon 进程，并使用 <code>horizon:pause</code> 和 <code>horizon:continue</code> Artisan 命令指示它继续处理任务：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan horizon:pause

php artisan horizon:continue
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>你还可以使用 <code>horizon:pause-supervisor</code> 和 <code>horizon:continue-supervisor</code> Artisan 命令暂停和继续指定的 Horizon <a href="#supervisors">supervisors</a>：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan horizon:pause-supervisor supervisor-1

php artisan horizon:continue-supervisor supervisor-1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>你可以使用 <code>horizon:status</code> Artisan 命令检查 Horizon 进程的当前状态：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan horizon:status
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>你可以使用 <code>horizon:terminate</code> Artisan 命令优雅地终止机器上的主 Horizon 进程。Horizon 会等当前正在处理的所有任务都完成后退出：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan horizon:terminate
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a name="deploying-horizon"></a></p><h3 id="部署-horizon" tabindex="-1"><a class="header-anchor" href="#部署-horizon" aria-hidden="true">#</a> 部署 Horizon</h3><p>如果要将 Horizon 部署到一个正在运行的服务器上，应该配置一个进程监视器来监视 <code>php artisan horizon</code> 命令，并在它意外退出时重新启动它。</p><p>在将新代码部署到服务器时，你需要终止 Horizon 主进程，以便进程监视器重新启动它并接收代码的更改。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan horizon:terminate
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a name="installing-supervisor"></a></p><h4 id="安装-supervisor" tabindex="-1"><a class="header-anchor" href="#安装-supervisor" aria-hidden="true">#</a> 安装 Supervisor</h4><p>Supervisor 是一个用于 Linux 操作系统的进程监视器。如果 <code>Horizon</code> 进程被退出或终止，Supervisor 将自动重启你的 <code>Horizon</code> 进程。如果要在 Ubuntu 上安装 Supervisor，你可以使用以下命令。如果你不使用 Ubuntu，也可以使用操作系统的包管理器安装 Supervisor：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> supervisor
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,25),q={href:"https://forge.laravel.com",target:"_blank",rel:"noopener noreferrer"},w=s(`<p><a name="supervisor-configuration"></a></p><h4 id="supervisor-配置" tabindex="-1"><a class="header-anchor" href="#supervisor-配置" aria-hidden="true">#</a> Supervisor 配置</h4><p>Supervisor 配置文件通常存储在 <code>/etc/supervisor/conf.d</code> 目录下。在此目录中，你可以创建任意数量的配置文件，这些配置文件会告诉 supervisor 如何监视你的进程。例如，让我们创建一个 <code>horizon.conf</code> 文件，它启动并监视一个 <code>horizon</code> 进程：</p><div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code><span class="token section"><span class="token punctuation">[</span><span class="token section-name selector">program:horizon</span><span class="token punctuation">]</span></span>
<span class="token key attr-name">process_name</span><span class="token punctuation">=</span><span class="token value attr-value">%(program_name)s</span>
<span class="token key attr-name">command</span><span class="token punctuation">=</span><span class="token value attr-value">php /home/forge/example.com/artisan horizon</span>
<span class="token key attr-name">autostart</span><span class="token punctuation">=</span><span class="token value attr-value">true</span>
<span class="token key attr-name">autorestart</span><span class="token punctuation">=</span><span class="token value attr-value">true</span>
<span class="token key attr-name">user</span><span class="token punctuation">=</span><span class="token value attr-value">forge</span>
<span class="token key attr-name">redirect_stderr</span><span class="token punctuation">=</span><span class="token value attr-value">true</span>
<span class="token key attr-name">stdout_logfile</span><span class="token punctuation">=</span><span class="token value attr-value">/home/forge/example.com/horizon.log</span>
<span class="token key attr-name">stopwaitsecs</span><span class="token punctuation">=</span><span class="token value attr-value">3600</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在定义 Supervisor 配置时，你应该确保 <code>stopwaitsecs</code> 的值大于最长运行作业所消耗的秒数。否则，Supervisor 可能会在作业处理完之前就将其杀死。</p><blockquote><p>**注意：**虽然上面的例子对基于Ubuntu的服务器有效，但其他服务器操作系统对监督员配置文件的位置和文件扩展名可能有所不同。请查阅你的服务器的文档以了解更多信息。</p></blockquote><p><a name="starting-supervisor"></a></p><h4 id="启动-supervisor" tabindex="-1"><a class="header-anchor" href="#启动-supervisor" aria-hidden="true">#</a> 启动 Supervisor</h4><p>创建了配置文件后，可以使用以下命令更新 Supervisor 配置并启动进程：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> supervisorctl reread

<span class="token function">sudo</span> supervisorctl update

<span class="token function">sudo</span> supervisorctl start horizon
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),y={href:"http://supervisord.org/index.html",target:"_blank",rel:"noopener noreferrer"},L=s(`<p><a name="tags"></a></p><h2 id="标记-tags" tabindex="-1"><a class="header-anchor" href="#标记-tags" aria-hidden="true">#</a> 标记 (Tags)</h2><p>Horizon 允许你将 <code>tags</code> 分配给任务，包括邮件、事件广播、通知和排队的事件监听器。实际上，Horizon 会根据附加到作业上的有 Eloquent 模型，智能地、自动地标记大多数任务。例如，看看下面的任务：</p><pre><code>&lt;?php

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
     * 创建一个新的任务实例
     */
    public function __construct(
        public Video $video,
    ) {}

    /**
     * 执行任务
     */
    public function handle(): void
    {
        // ...
    }
}
</code></pre><p>如果此任务与 <code>App\\Models\\Video</code> 实例一起排队，且该实例的 <code>id</code> 为 <code>1</code>，则该作业将自动接收 <code>App\\Models\\Video:1</code> 标记。这是因为 Horizon 将为任何有 Eloquent 的模型检查任务的属性。如果找到了有 Eloquent 的模型，Horizon 将智能地使用模型的类名和主键标记任务：</p><pre><code>use App\\Jobs\\RenderVideo;
use App\\Models\\Video;

$video = Video::find(1);

RenderVideo::dispatch($video);
</code></pre><p><a name="manually-tagging-jobs"></a></p><h4 id="手动标记作业" tabindex="-1"><a class="header-anchor" href="#手动标记作业" aria-hidden="true">#</a> 手动标记作业</h4><p>如果你想手动定义你的一个队列对象的标签，你可以在类上定义一个 <code>tags</code> 方法：</p><pre><code>class RenderVideo implements ShouldQueue
{
    /**
     * 获取应该分配给任务的标记
     *
     * @return array&lt;int, string&gt;
     */
    public function tags(): array
    {
        return [&#39;render&#39;, &#39;video:&#39;.$this-&gt;video-&gt;id];
    }
}
</code></pre><p><a name="notifications"></a></p><h2 id="通知" tabindex="-1"><a class="header-anchor" href="#通知" aria-hidden="true">#</a> 通知</h2><blockquote><p><strong>注意：</strong> 当配置 Horizon 发送 Slack 或 SMS 通知时，你应该查看 <a href="./notifications">相关通知驱动程序的先决条件</a>。</p></blockquote><p>如果你希望在一个队列有较长的等待时间时得到通知，你可以使用 <code>Horizon::routeMailNotificationsTo</code>, <code>Horizon::routeSlackNotificationsTo</code>, 和 <code>Horizon::routeSmsNotificationsTo</code> 方法。你可以通过应用程序的 <code>App\\Providers\\HorizonServiceProvider</code> 中的 <code>boot</code> 方法来调用这些方法：</p><pre><code>/**
 * 服务引导
 */
public function boot(): void
{
    parent::boot();

    Horizon::routeSmsNotificationsTo(&#39;15556667777&#39;);
    Horizon::routeMailNotificationsTo(&#39;example@example.com&#39;);
    Horizon::routeSlackNotificationsTo(&#39;slack-webhook-url&#39;, &#39;#channel&#39;);
}
</code></pre><p><a name="configuring-notification-wait-time-thresholds"></a></p><h4 id="配置通知等待时间阈值" tabindex="-1"><a class="header-anchor" href="#配置通知等待时间阈值" aria-hidden="true">#</a> 配置通知等待时间阈值</h4><p>你可以在 <code>config/horizon.php</code> 的配置文件中配置多少秒算是「长等待」。你可以用该文件中的 <code>waits</code> 配置选项控制每个 连接 / 队列 组合的长等待阈值：</p><pre><code>&#39;waits&#39; =&gt; [
    &#39;redis:default&#39; =&gt; 60,
    &#39;redis:critical,high&#39; =&gt; 90,
],
</code></pre><p><a name="metrics"></a></p><h2 id="指标" tabindex="-1"><a class="header-anchor" href="#指标" aria-hidden="true">#</a> 指标</h2><p>Horizon 有一个指标控制面板，它提供了任务和队列的等待时间和吞吐量等信息。要让这些信息显示在这个控制面板上，你应该配置 Horizon 的 <code>snapshot</code> Artisan 命令，通过你的应用程序的 <a href="./scheduling">调度器</a> 每五分钟运行一次：</p><pre><code>/**
 * 定义应用程序的命令调度
 */
protected function schedule(Schedule $schedule): void
{
    $schedule-&gt;command(&#39;horizon:snapshot&#39;)-&gt;everyFiveMinutes();
}
</code></pre><p><a name="deleting-failed-jobs"></a></p><h2 id="删除失败的作业" tabindex="-1"><a class="header-anchor" href="#删除失败的作业" aria-hidden="true">#</a> 删除失败的作业</h2><p>如果你想删除失败的作业，可以使用 <code>horizon:forget</code> 命令。 <code>horizon:forget</code> 命令接受失败作业的 ID 或 UUID 作为其唯一参数：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan horizon:forget <span class="token number">5</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a name="clearing-jobs-from-queues"></a></p><h2 id="从队列中清除作业" tabindex="-1"><a class="header-anchor" href="#从队列中清除作业" aria-hidden="true">#</a> 从队列中清除作业</h2><p>如果你想从应用程序的默认队列中删除所有作业，你可以使用 <code>horizon:clear</code> Artisan 命令执行此操作：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan horizon:clear
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>你可以设置 <code>queue</code> 选项来从特定队列中删除作业：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan horizon:clear <span class="token parameter variable">--queue</span><span class="token operator">=</span>emails
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,33);function A(P,V){const a=d("ExternalLinkIcon");return t(),c("div",null,[p,e("p",null,[e("a",u,[n("Laravel Horizon"),o(a)]),n(" 为你的 Laravel "),h,n(".提供了一个美观的仪表盘和代码驱动的配置。它可以方便的监控队列系统的关键指标：任务吞吐量、运行时间、作业失败情况。")]),v,m,b,g,e("blockquote",null,[e("p",null,[z,n(" Laravel Horizon 要求你使用 "),e("a",f,[n("Redis"),o(a)]),n(" 来为你的队列服务。因此，你应该确保在应用程序的 "),k,n(" 配置文件中将队列连接设置为 "),_,n("。")])]),H,e("p",null,[n("当你升级到 Horizon 的一个新的主要版本时，你需要仔细阅读 "),e("a",x,[n("升级指南"),o(a)]),n("。")]),S,e("blockquote",null,[e("p",null,[n("**技巧：**如果你觉得自己配置 Supervisor 难如登天，可以考虑使用 "),e("a",q,[n("Laravel Forge"),o(a)]),n("，它将自动为你的 Laravel 项目安装和配置 Supervisor。")])]),w,e("blockquote",null,[e("p",null,[n("**技巧：**关于 Supervisor 的更多信息，可以查阅 "),e("a",y,[n("Supervisor 文档"),o(a)]),n("。")])]),L])}const j=r(l,[["render",A],["__file","horizon.html.vue"]]);export{j as default};
