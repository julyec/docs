import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as t,c as s,b as n,d as e,e as c,a as r}from"./app-8cdff07c.js";const d={},p=r(`<h1 id="服务提供者" tabindex="-1"><a class="header-anchor" href="#服务提供者" aria-hidden="true">#</a> 服务提供者</h1><ul><li><a href="#introduction">简介</a></li><li><a href="#writing-service-providers">编写服务提供者</a><ul><li><a href="#the-register-method">注册方法</a></li><li><a href="#the-boot-method">引导方法</a></li></ul></li><li><a href="#registering-providers">注册提供者</a></li><li><a href="#deferred-providers">延迟加载提供者</a></li></ul><p><a name="introduction"></a></p><h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h2><p>服务提供者是所有 Laravel 应用程序的引导中心。你的应用程序，以及通过服务器引导的 Laravel 核心服务都是通过服务提供器引导。</p><p>但是，「引导」是什么意思呢？通常，我们可以理解为<strong>注册</strong>，比如注册服务容器绑定，事件监听器，中间件，甚至是路由。服务提供者是配置应用程序的中心。</p><p>当你打开 Laravel 的<code>config/app.php</code> 文件时，你会看到 <code>providers</code>数组。数组中的内容是应用程序要加载的所有服务提供者的类。当然，其中有很多「延迟」提供者，他们并不会在每次请求的时候都加载，只有他们的服务实际被需要时才会加载。</p><p>本篇你将会学到如何编写自己的服务提供者，并将其注册到你的 Laravel 应用程序中。</p><blockquote><p>**技巧 ** 如果你想了解有关 Laravel 如何处理请求并在内部工作的更多信息，请查看有关 Laravel 的文档 <a href="./lifecycle">请求生命周期</a>。</p></blockquote><p><a name="writing-service-providers"></a></p><h2 id="编写服务提供者" tabindex="-1"><a class="header-anchor" href="#编写服务提供者" aria-hidden="true">#</a> 编写服务提供者</h2><p>所有的服务提供者都会继承<code>Illuminate\\Support\\ServiceProvider</code>类。大多服务提供者都包含一个 register 和一个<code>boot</code>方法。在<code>register</code>方法中，你只需要将服务绑定到 <code>register</code> 方法中， 你只需要 <strong>将服务绑定到 <a href="./container">服务容器</a></strong>。而不要尝试在<code>register</code>方法中注册任何监听器，路由，或者其他任何功能。</p><p>使用 Artisan 命令行工具，通过 <code>make:provider</code> 命令可以生成一个新的提供者：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan make:provider RiakServiceProvider
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a name="the-register-method"></a></p><h3 id="注册方法" tabindex="-1"><a class="header-anchor" href="#注册方法" aria-hidden="true">#</a> 注册方法</h3>`,16),l=n("code",null,"register",-1),v={href:"/docs/laravel/9.x/container",target:"_blank",rel:"noopener noreferrer"},h=n("code",null,"register",-1),u=r(`<p>让我们来看一个基础的服务提供者。在任何服务提供者方法中，你总是通过 $app 属性来访问服务容器：</p><pre><code>&lt;?php

namespace App\\Providers;

use App\\Services\\Riak\\Connection;
use Illuminate\\Contracts\\Foundation\\Application;
use Illuminate\\Support\\ServiceProvider;

class RiakServiceProvider extends ServiceProvider
{
    /**
     * 注册应用服务
     */
    public function register(): void
    {
        $this-&gt;app-&gt;singleton(Connection::class, function (Application $app) {
            return new Connection(config(&#39;riak&#39;));
        });
    }
}
</code></pre><p>这个服务提供者只是定义了一个 <code>register</code> 方法，并且使用这个方法在服务容器中定义了一个 <code>Riak\\Connection</code> 接口。如果你不理解服务容器的工作原理，请查看其 <a href="./container">文档</a>.</p><p><a name="bindings 和 singletons 的特性"></a></p><h4 id="bindings-和-singletons-的特性" tabindex="-1"><a class="header-anchor" href="#bindings-和-singletons-的特性" aria-hidden="true">#</a> bindings 和 singletons 的特性</h4><p>如果你的服务提供器注册了许多简单的绑定，你可能想用 <code>bindings</code> 和 <code>singletons</code> 属性替代手动注册每个容器绑定。当服务提供器被框架加载时，将自动检查这些属性并注册相应的绑定：</p><pre><code>&lt;?php

namespace App\\Providers;

use App\\Contracts\\DowntimeNotifier;
use App\\Contracts\\ServerProvider;
use App\\Services\\DigitalOceanServerProvider;
use App\\Services\\PingdomDowntimeNotifier;
use App\\Services\\ServerToolsProvider;
use Illuminate\\Support\\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     *  所有需要注册的容器绑定
     *
     * @var array
     */
    public $bindings = [
        ServerProvider::class =&gt; DigitalOceanServerProvider::class,
    ];

    /**
     * 所有需要注册的容器单例
     *
     * @var array
     */
    public $singletons = [
        DowntimeNotifier::class =&gt; PingdomDowntimeNotifier::class,
        ServerProvider::class =&gt; ServerToolsProvider::class,
    ];
}
</code></pre><p><a name="引导方法"></a></p><h3 id="引导方法" tabindex="-1"><a class="header-anchor" href="#引导方法" aria-hidden="true">#</a> 引导方法</h3><p>如果我们要在服务提供者中注册一个 <a href="./views#view-composers">视图合成器</a> 该怎么做？这就需要用到 <code>boot</code> 方法了。<strong>该方法在所有服务提供者被注册以后才会被调用</strong>，这就是说我们可以在其中访问框架已注册的所有其它服务：</p><pre><code>&lt;?php

namespace App\\Providers;

use Illuminate\\Support\\Facades\\View;
use Illuminate\\Support\\ServiceProvider;

class ComposerServiceProvider extends ServiceProvider
{
    /**
     * 启动所有的应用服务
     */
    public function boot(): void
    {
        View::composer(&#39;view&#39;, function () {
            // ...
        });
    }
}
</code></pre><p><a name="启动方法的依赖注入"></a></p><h4 id="启动方法的依赖注入" tabindex="-1"><a class="header-anchor" href="#启动方法的依赖注入" aria-hidden="true">#</a> 启动方法的依赖注入</h4><p>你可以为服务提供者的 <code>boot</code> 方法设置类型提示。<a href="./container">服务容器</a> 会自动注入你所需要的依赖：</p><pre><code>use Illuminate\\Contracts\\Routing\\ResponseFactory;

/**
 * 引导所有的应用服务
 */
public function boot(ResponseFactory $response): void
{
    $response-&gt;macro(&#39;serialized&#39;, function (mixed $value) {
        // ...
    });
}
</code></pre><p><a name="注册服务提供者"></a></p><h2 id="注册服务提供者" tabindex="-1"><a class="header-anchor" href="#注册服务提供者" aria-hidden="true">#</a> 注册服务提供者</h2><p>所有服务提供者都是通过配置文件 <code>config/app.php</code> 进行注册。该文件包含了一个列出所有服务提供者名字的 <code>providers</code> 数组，默认情况下，其中列出了所有核心服务提供者，这些服务提供者启动 Laravel 核心组件，比如邮件、队列、缓存等等。</p><p>要注册提供器，只需要将其添加到数组：</p><pre><code>&#39;providers&#39; =&gt; [
    // 其他服务提供者

    App\\Providers\\ComposerServiceProvider::class,
],
</code></pre><p><a name="延迟加载提供者"></a></p><h2 id="延迟加载提供者" tabindex="-1"><a class="header-anchor" href="#延迟加载提供者" aria-hidden="true">#</a> 延迟加载提供者</h2><p>如果你的服务提供者只在 <a href="./container">服务容器</a>中注册，可以选择延迟加载该绑定直到注册绑定的服务真的需要时再加载，延迟加载这样的一个提供者将会提升应用的性能，因为它不会在每次请求时都从文件系统加载。</p><p>Laravel 编译并保存延迟服务提供者提供的所有服务的列表，以及其服务提供者类的名称。因此，只有当你在尝试解析其中一项服务时，Laravel 才会加载服务提供者。</p><p>要延迟加载提供者，需要实现 <code>\\Illuminate\\Contracts\\Support\\DeferrableProvider</code> 接口并置一个 <code>provides</code> 方法。这个 <code>provides</code> 方法返回该提供者注册的服务容器绑定：</p><pre><code>&lt;?php

namespace App\\Providers;

use App\\Services\\Riak\\Connection;
use Illuminate\\Contracts\\Foundation\\Application;
use Illuminate\\Contracts\\Support\\DeferrableProvider;
use Illuminate\\Support\\ServiceProvider;

class RiakServiceProvider extends ServiceProvider implements DeferrableProvider
{
    /**
     * 注册所有的应用服务
     */
    public function register(): void
    {
        $this-&gt;app-&gt;singleton(Connection::class, function (Application $app) {
            return new Connection($app[&#39;config&#39;][&#39;riak&#39;]);
        });
    }

    /**
     * 获取服务提供者的服务
     *
     * @return array&lt;int, string&gt;
     */
    public function provides(): array
    {
        return [Connection::class];
    }
}
</code></pre>`,26);function g(m,f){const i=o("ExternalLinkIcon");return t(),s("div",null,[p,n("p",null,[e("如上所述，在 "),l,e(" 方法中，你只需要将服务绑定到 "),n("a",v,[e("服务容器"),c(i)]),e(" 中。而不要尝试在 "),h,e(" 方法中注册任何监听器，路由，或者其他任何功能。否则，你可能会意外地使用到尚未加载的服务提供者提供的服务。")]),u])}const P=a(d,[["render",g],["__file","providers.html.vue"]]);export{P as default};
