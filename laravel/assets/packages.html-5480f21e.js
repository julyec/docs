import{_ as r}from"./plugin-vue_export-helper-c27b6911.js";import{r as i,o as c,c as d,b as a,d as e,e as o,a as s}from"./app-8cdff07c.js";const t={},p=s('<h1 id="包开发" tabindex="-1"><a class="header-anchor" href="#包开发" aria-hidden="true">#</a> 包开发</h1><ul><li><a href="#introduction">介绍</a><ul><li><a href="#a-note-on-facades">关于 Facades</a></li></ul></li><li><a href="#package-discovery">包发现</a></li><li><a href="#service-providers">服务提供者</a></li><li><a href="#resources">资源</a><ul><li><a href="#configuration">配置</a></li><li><a href="#migrations">迁移</a></li><li><a href="#routes">路由</a></li><li><a href="#language-files">语言文件</a></li><li><a href="#views">视图</a></li><li><a href="#view-components">视图组件</a></li><li><a href="#about-artisan-command">&quot;About&quot; Artisan 命令</a></li></ul></li><li><a href="#commands">命令</a></li><li><a href="#public-assets">公共资源</a></li><li><a href="#publishing-file-groups">发布文件组</a></li></ul><p><a name="introduction"></a></p><h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h2>',4),l={href:"https://github.com/briannesbitt/Carbon",target:"_blank",rel:"noopener noreferrer"},u={href:"https://github.com/spatie/laravel-medialibrary",target:"_blank",rel:"noopener noreferrer"},h=a("p",null,[e("包有不同类型。有些包是独立的，这意味着它们可以与任何 PHP 框架一起使用。 Carbon 和 PHPUnit 是独立包的示例。这种包可以通过 "),a("code",null,"composer.json"),e(" 文件引入，在 Laravel 中使用。")],-1),v=a("p",null,"此外，还有一些包是专门用在 Laravel 中。这些包可能包含路由、控制器、视图和配置，专门用于增强 Laravel 应用。本教程主要涵盖的就是这些专用于 Laravel 的包的开发。",-1),b=a("p",null,[a("a",{name:"a-note-on-facades"})],-1),m=a("h3",{id:"关于-facades",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#关于-facades","aria-hidden":"true"},"#"),e(" 关于 Facades")],-1),g={href:"https://github.com/orchestral/testbench",target:"_blank",rel:"noopener noreferrer"},f=s(`<p><a name="package-discovery"></a></p><h2 id="包发现" tabindex="-1"><a class="header-anchor" href="#包发现" aria-hidden="true">#</a> 包发现</h2><p>在 Laravel 应用程序的 <code>config/app.php</code> 配置文件中，providers 选项定义了 Laravel 应该加载的服务提供者列表。当有人安装您的软件包时，您通常希望您的服务提供者也包含在此列表中。 您可以在包的 <code>composer.json</code> 文件的 <code>extra</code> 部分中定义提供者，而不是要求用户手动将您的服务提供者添加到列表中。除了服务提供者外，您还可以列出您想注册的任何 <a href="./facades">facades</a>：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;extra&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;laravel&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;providers&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">&quot;Barryvdh\\\\Debugbar\\\\ServiceProvider&quot;</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">&quot;aliases&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;Debugbar&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Barryvdh\\\\Debugbar\\\\Facade&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当你的包配置了包发现后，Laravel 会在安装该包时自动注册服务提供者及 Facades，这样就为你的包用户创造一个便利的安装体验。</p><p><a name="opting-out-of-package-discovery"></a></p><h3 id="退出包发现" tabindex="-1"><a class="header-anchor" href="#退出包发现" aria-hidden="true">#</a> 退出包发现</h3><p>如果你是包消费者，要禁用包发现功能，你可以在应用的 <code>composer.json</code> 文件的 <code>extra</code> 区域列出包名：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;extra&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;laravel&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;dont-discover&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">&quot;barryvdh/laravel-debugbar&quot;</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>你可以在应用的 <code>dont-discover</code> 指令中使用 <code>*</code> 字符，禁用所有包的包发现功能：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;extra&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;laravel&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;dont-discover&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">&quot;*&quot;</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="service-providers"></a></p><h2 id="服务提供者" tabindex="-1"><a class="header-anchor" href="#服务提供者" aria-hidden="true">#</a> 服务提供者</h2><p><a href="./providers">服务提供者</a>是你的包和 Laravel 之间的连接点。服务提供者负责将事物绑定到 Laravel 的<a href="./container">服务容器</a>并告知 Laravel 到哪里去加载包资源，比如视图、配置及语言文件。</p><p>服务提供者扩展了 <code>Illuminate/Support/ServiceProvider</code> 类，包含两个方法： <code>register</code> 和 <code>boot</code>。基本的 <code>ServiceProvider</code> 类位于 <code>illuminate/support</code> Composer 包中，你应该把它添加到你自己包的依赖项中。要了解更多关于服务提供者的结构和目的，请查看 <a href="./providers">服务提供者</a>.</p><p><a name="resources"></a></p><h2 id="资源" tabindex="-1"><a class="header-anchor" href="#资源" aria-hidden="true">#</a> 资源</h2><p><a name="configuration"></a></p><h3 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h3><p>通常情况下，你需要将你的包的配置文件发布到应用程序的 <code>config</code> 目录下。这将允许在使用包时覆盖扩展包中的默认配置选项。发布配置文件，需要在服务提供者的 <code>boot</code> 方法中调用 <code>publishes</code> 方法:</p><pre><code>/**
 * 引导包服务
 */
public function boot(): void
{
    $this-&gt;publishes([
        __DIR__.&#39;/../config/courier.php&#39; =&gt; config_path(&#39;courier.php&#39;),
    ]);
}
</code></pre><p>使用扩展包的时候执行 Laravel 的 <code>vendor:publish</code> 命令, 你的文件将被复制到指定的发布位置。 一旦你的配置被发布, 它的值可以像其他的配置文件一样被访问:</p><pre><code>$value = config(&#39;courier.option&#39;);
</code></pre><blockquote><p><strong>Warning</strong><br> 你不应该在你的配置文件中定义闭包。当用户执行 <code>config:cache</code> Artisan 命令时，它们不能被正确序列化。</p></blockquote><p><a name="default-package-configuration"></a></p><h4 id="默认的包配置" tabindex="-1"><a class="header-anchor" href="#默认的包配置" aria-hidden="true">#</a> 默认的包配置</h4><p>你也可以将你自己的包的配置文件与应用程序的发布副本合并。这将允许你的用户在配置文件的发布副本中只定义他们真正想要覆盖的选项。要合并配置文件的值，请使用你的服务提供者的 <code>register</code> 方法中的 <code>mergeConfigFrom</code> 方法。</p><p><code>mergeConfigFrom</code> 方法的第一个参数为你的包的配置文件的路径，第二个参数为应用程序的配置文件副本的名称：</p><pre><code>/**
 * 注册应用程序服务
 */
public function register(): void
{
    $this-&gt;mergeConfigFrom(
        __DIR__.&#39;/../config/courier.php&#39;, &#39;courier&#39;
    );
}
</code></pre><blockquote><p><strong>Warning</strong><br> 这个方法只合并了配置数组的第一层。如果你的用户部分地定义了一个多维的配置阵列，缺少的选项将不会被合并。</p></blockquote><p><a name="routes"></a></p><h3 id="路由" tabindex="-1"><a class="header-anchor" href="#路由" aria-hidden="true">#</a> 路由</h3><p>如果你的软件包包含路由，你可以使用 <code>loadRoutesFrom</code> 方法加载它们。这个方法会自动判断应用程序的路由是否被缓存，如果路由已经被缓存，则不会加载你的路由文件：</p><pre><code>/**
 * 引导包服务
 */
public function boot(): void
{
    $this-&gt;loadRoutesFrom(__DIR__.&#39;/../routes/web.php&#39;);
}
</code></pre><p><a name="migrations"></a></p><h3 id="迁移" tabindex="-1"><a class="header-anchor" href="#迁移" aria-hidden="true">#</a> 迁移</h3><p>如果你的软件包包含了 <a href="./migrations">数据库迁移</a> , 你可以使用 <code>loadMigrationsFrom</code> 方法来加载它们。<code>loadMigrationsFrom</code> 方法的参数为软件包迁移文件的路径。</p><pre><code>/**
 * 引导包服务
 */
public function boot(): void
{
    $this-&gt;loadMigrationsFrom(__DIR__.&#39;/../database/migrations&#39;);
}
</code></pre><p>一旦你的软件包的迁移被注册，当 <code>php artisan migrate</code> 命令被执行时，它们将自动被运行。你不需要把它们导出到应用程序的 <code>database/migrations</code> 目录中。</p><p><a name="language-files"></a></p><h3 id="语言文件" tabindex="-1"><a class="header-anchor" href="#语言文件" aria-hidden="true">#</a> 语言文件</h3><p>如果你的软件包包含 <a href="./localization">语言文件</a> , 你可以使用 <code>loadTranslationsFrom</code> 方法来加载它们。 例如, 如果你的包被命名为 <code>courier</code> , 你应该在你的服务提供者的 <code>boot</code> 方法中加入以下内容:</p><pre><code>/**
 * 引导包服务
 */
public function boot(): void
{
    $this-&gt;loadTranslationsFrom(__DIR__.&#39;/../lang&#39;, &#39;courier&#39;);
}
</code></pre><p>包的翻译行是使用 <code>package::file.line</code> 的语法惯例来引用的。因此，你可以这样从 <code>messages</code> 文件中加载 <code>courier</code> 包的 <code>welcome</code> 行：</p><pre><code>echo trans(&#39;courier::messages.welcome&#39;);
</code></pre><p><a name="publishing-language-files"></a></p><h4 id="发布语言文件" tabindex="-1"><a class="header-anchor" href="#发布语言文件" aria-hidden="true">#</a> 发布语言文件</h4><p>如果你想把包的语言文件发布到应用程序的 <code>lang/vendor</code> 目录，可以使用服务提供者的 <code>publishes</code> 方法。<code>publishes</code> 方法接受一个软件包路径和它们所需的发布位置的数组。例如，要发布 <code>courier</code> 包的语言文件，你可以做以下工作：</p><pre><code>/**
 * 引导包服务
 */
public function boot(): void
{
    $this-&gt;loadTranslationsFrom(__DIR__.&#39;/../lang&#39;, &#39;courier&#39;);

    $this-&gt;publishes([
        __DIR__.&#39;/../lang&#39; =&gt; $this-&gt;app-&gt;langPath(&#39;vendor/courier&#39;),
    ]);
}
</code></pre><p>当你的软件包的用户执行Laravel的 <code>vendor:publish</code> Artisan 命令时, 你的软件包的语言文件会被发布到指定的发布位置。</p><p><a name="views"></a></p><h3 id="视图" tabindex="-1"><a class="header-anchor" href="#视图" aria-hidden="true">#</a> 视图</h3><p>要在 Laravel 注册你的包的 <a href="./views">视图</a> , 你需要告诉 Laravel 这些视图的位置. 你可以使用服务提供者的 <code>loadViewsFrom</code> 方法来完成。<code>loadViewsFrom</code> 方法接受两个参数: 视图模板的路径和包的名称。 例如，如果你的包的名字是 <code>courier</code>，你可以在服务提供者的 <code>boot</code> 方法中加入以下内容：</p><pre><code>/**
 * 引导包服务
 */
public function boot(): void
{
    $this-&gt;loadViewsFrom(__DIR__.&#39;/../resources/views&#39;, &#39;courier&#39;);
}
</code></pre><p>包的视图是使用 <code>package::view</code> 的语法惯例来引用的。因此，一旦你的视图路径在服务提供者中注册，你可以像这样从 <code>courier</code> 包中加载 <code>dashboard</code> 视图。</p><pre><code>Route::get(&#39;/dashboard&#39;, function () {
    return view(&#39;courier::dashboard&#39;);
});
</code></pre><p><a name="overriding-package-views"></a></p><h4 id="覆盖包的视图" tabindex="-1"><a class="header-anchor" href="#覆盖包的视图" aria-hidden="true">#</a> 覆盖包的视图</h4><p>当你使用 <code>loadViewsFrom</code> 方法时, Laravel 实际上为你的视图注册了两个位置: 应用程序的 <code>resources/views/vendor</code> 目录和你指定的目录。 所以, 以 <code>courier</code> 包为例, Laravel 首先会检查视图的自定义版本是否已经被开发者放在 <code>resources/views/vendor/courier</code> 目录中。 然后, 如果视图没有被定制, Laravel 会搜索你在调用 <code>loadViewsFrom</code> 时指定的包的视图目录. 这使得包的用户可以很容易地定制/覆盖你的包的视图。</p><p><a name="publishing-views"></a></p><h4 id="发布视图" tabindex="-1"><a class="header-anchor" href="#发布视图" aria-hidden="true">#</a> 发布视图</h4><p>如果你想让你的视图可以发布到应用程序的 <code>resources/views/vendor</code> 目录下，你可以使用服务提供者的 <code>publishes</code> 方法。<code>publishes</code> 方法接受一个数组的包视图路径和它们所需的发布位置：</p><pre><code>/**
 * 引导包服务
 */
public function boot(): void
{
    $this-&gt;loadViewsFrom(__DIR__.&#39;/../resources/views&#39;, &#39;courier&#39;);

    $this-&gt;publishes([
        __DIR__.&#39;/../resources/views&#39; =&gt; resource_path(&#39;views/vendor/courier&#39;),
    ]);
}
</code></pre><p>当你的包的用户执行 Laravel 的 <code>vendor:publish</code> Artisan 命令时, 你的包的视图将被复制到指定的发布位置。</p><p><a name="view-components"></a></p><h3 id="视图组件" tabindex="-1"><a class="header-anchor" href="#视图组件" aria-hidden="true">#</a> 视图组件</h3><p>如果你正在建立一个用 Blade 组件的包，或者将组件放在非传统的目录中，你将需要手动注册你的组件类和它的 HTML 标签别名，以便 Laravel 知道在哪里可以找到这个组件。你通常应该在你的包的服务提供者的 <code>boot</code> 方法中注册你的组件:</p><pre><code>use Illuminate\\Support\\Facades\\Blade;
use VendorPackage\\View\\Components\\AlertComponent;

/**
 * 引导你的包的服务
 */
public function boot(): void
{
    Blade::component(&#39;package-alert&#39;, AlertComponent::class);
}
</code></pre><p>当组件注册成功后，你就可以使用标签别名对其进行渲染：</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>&lt;x-package-alert/&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a name="autoloading-package-components"></a></p><h4 id="自动加载包组件" tabindex="-1"><a class="header-anchor" href="#自动加载包组件" aria-hidden="true">#</a> 自动加载包组件</h4><p>此外，你可以使用 <code>compoentNamespace</code> 方法依照规范自动加载组件类。比如，<code>Nightshade</code> 包中可能有 <code>Calendar</code> 和 <code>ColorPicker</code> 组件，存在于 <code>Nightshade\\Views\\Components</code> 命名空间中：</p><pre><code>use Illuminate\\Support\\Facades\\Blade;

/**
 * 启动包服务
 */
public function boot(): void
{
    Blade::componentNamespace(&#39;Nightshade\\\\Views\\\\Components&#39;, &#39;nightshade&#39;);
}
</code></pre><p>我们可以使用 <code>package-name::</code> 语法，通过包提供商的命名空间调用包组件：</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>&lt;x-nightshade::calendar /&gt;
&lt;x-nightshade::color-picker /&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Blade 会通过组件名自动检测链接到该组件的类。子目录也支持使用&#39;点&#39;语法。</p><p><a name="anonymous-components"></a></p><h4 id="匿名组件" tabindex="-1"><a class="header-anchor" href="#匿名组件" aria-hidden="true">#</a> 匿名组件</h4><p>如果包中有匿名组件，则必须将它们放在包的视图目录(由<a href="#views"><code>loadViewsFrom</code> 方法</a>指定)的 <code>components</code> 文件夹下。然后，你就可以通过在组件名的前面加上包视图的命名空间来对其进行渲染了：</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>&lt;x-courier::alert /&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a name="about-artisan-command"></a></p><h3 id="about-artisan-命令" tabindex="-1"><a class="header-anchor" href="#about-artisan-命令" aria-hidden="true">#</a> &quot;About&quot; Artisan 命令</h3><p>Laravel 内建的 <code>about</code> Artisan 命令提供了应用环境和配置的摘要信息。包可以通过 <code>AboutCommand</code> 类为该命令输出添加附加信息。一般而言，这些信息可以在包服务提供者的 <code>boot</code> 方法中添加：</p><pre><code>use Illuminate\\Foundation\\Console\\AboutCommand;

/**
 * Bootstrap any application services.
 */
public function boot(): void
{
    AboutCommand::add(&#39;My Package&#39;, fn () =&gt; [&#39;Version&#39; =&gt; &#39;1.0.0&#39;]);
}
</code></pre><p><a name="commands"></a></p><h2 id="命令" tabindex="-1"><a class="header-anchor" href="#命令" aria-hidden="true">#</a> 命令</h2>`,87),_=a("code",null,"commands",-1),k={href:"https://learnku.com/docs/laravel/9.x/artisan",target:"_blank",rel:"noopener noreferrer"},x=s(`<pre><code>use Courier\\Console\\Commands\\InstallCommand;
use Courier\\Console\\Commands\\NetworkCommand;

/**
 * Bootstrap any package services.
 */
public function boot(): void
{
    if ($this-&gt;app-&gt;runningInConsole()) {
        $this-&gt;commands([
            InstallCommand::class,
            NetworkCommand::class,
        ]);
    }
}
</code></pre><p><a name="public-assets"></a></p><h2 id="公共资源" tabindex="-1"><a class="header-anchor" href="#公共资源" aria-hidden="true">#</a> 公共资源</h2><p>你的包可能有诸如 JavaScript 、CSS 和图片等资源。要发布这些资源到应用程序的 <code>public</code> 目录，请使用服务提供者的 <code>publishes</code> 方法。在下面例子中，我们还将添加一个 <code>public</code> 资源组标签，它可以用来轻松发布相关资源组：</p><pre><code>/**
 * 引导包服务
 */
public function boot(): void
{
    $this-&gt;publishes([
        __DIR__.&#39;/../public&#39; =&gt; public_path(&#39;vendor/courier&#39;),
    ], &#39;public&#39;);
}
</code></pre><p>当你的软件包的用户执行 <code>vendor:publish</code> 命令时，你的资源将被复制到指定的发布位置。通常用户需要在每次更新包的时候都要覆盖资源，你可以使用 <code>--force</code> 标志。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan vendor:publish <span class="token parameter variable">--tag</span><span class="token operator">=</span>public <span class="token parameter variable">--force</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a name="publishing-file-groups"></a></p><h2 id="发布文件组" tabindex="-1"><a class="header-anchor" href="#发布文件组" aria-hidden="true">#</a> 发布文件组</h2><p>你可能想单独发布软件包的资源和资源组。例如，你可能想让你的用户发布你的包的配置文件，而不被强迫发布你的包的资源。你可以通过在调用包的服务提供者的 <code>publishes</code> 方法时对它们进行 <code>tagging</code> 来做到这一点。例如，让我们使用标签在软件包服务提供者的 <code>boot</code> 方法中为 <code>courier</code> 软件包定义两个发布组（ <code>courier-config</code> 和 <code>courier-migrations</code> ）。</p><pre><code>/**
 * 引导包服务
 */
public function boot(): void
{
    $this-&gt;publishes([
        __DIR__.&#39;/../config/package.php&#39; =&gt; config_path(&#39;package.php&#39;)
    ], &#39;courier-config&#39;);

    $this-&gt;publishes([
        __DIR__.&#39;/../database/migrations/&#39; =&gt; database_path(&#39;migrations&#39;)
    ], &#39;courier-migrations&#39;);
}
</code></pre><p>现在你的用户可以在执行 <code>vendor:publish</code> 命令时引用他们的标签来单独发布这些组。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan vendor:publish <span class="token parameter variable">--tag</span><span class="token operator">=</span>courier-config
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,13);function q(C,w){const n=i("ExternalLinkIcon");return c(),d("div",null,[p,a("p",null,[e("包是向 Laravel 添加功能的主要方式。包可能是处理日期的好方法，例如 "),a("a",l,[e("Carbon"),o(n)]),e("，也可能是允许您将文件与 Eloquent 模型相关联的包，例如 Spatie 的 "),a("a",u,[e("Laravel 媒体库"),o(n)]),e("。")]),h,v,b,m,a("p",null,[e("编写 Laravel 应用时，通常使用契约（Contracts）还是门面（Facades）并不重要，因为两者都提供了基本相同的可测试性级别。但是，在编写包时，包通常是无法使用 Laravel 的所有测试辅助函数。如果您希望能够像将包安装在典型的 Laravel 应用程序中一样编写包测试，您可以使用 "),a("a",g,[e("Orchestral Testbench"),o(n)]),e(" 包。")]),f,a("p",null,[e("要在 Laravel 中注册你的包的 Artisan 命令，你可以使用 "),_,e(" 方法。 此方法需要一个命令类名称数组。 注册命令后，您可以使用 "),a("a",k,[e("Artisan CLI"),o(n)]),e(" 执行它们：")]),x])}const I=r(t,[["render",q],["__file","packages.html.vue"]]);export{I as default};
