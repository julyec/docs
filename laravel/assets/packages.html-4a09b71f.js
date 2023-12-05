import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o as r,c,b as e,d as a,e as n,a as s}from"./app-8cdff07c.js";const d={},p=s('<h1 id="package-development" tabindex="-1"><a class="header-anchor" href="#package-development" aria-hidden="true">#</a> Package Development</h1><ul><li><a href="#introduction">Introduction</a><ul><li><a href="#a-note-on-facades">A Note On Facades</a></li></ul></li><li><a href="#package-discovery">Package Discovery</a></li><li><a href="#service-providers">Service Providers</a></li><li><a href="#resources">Resources</a><ul><li><a href="#configuration">Configuration</a></li><li><a href="#migrations">Migrations</a></li><li><a href="#routes">Routes</a></li><li><a href="#language-files">Language Files</a></li><li><a href="#views">Views</a></li><li><a href="#view-components">View Components</a></li><li><a href="#about-artisan-command">&quot;About&quot; Artisan Command</a></li></ul></li><li><a href="#commands">Commands</a></li><li><a href="#public-assets">Public Assets</a></li><li><a href="#publishing-file-groups">Publishing File Groups</a></li></ul><p><a name="introduction"></a></p><h2 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h2>',4),l={href:"https://github.com/briannesbitt/Carbon",target:"_blank",rel:"noopener noreferrer"},u={href:"https://github.com/spatie/laravel-medialibrary",target:"_blank",rel:"noopener noreferrer"},h=e("p",null,[a("There are different types of packages. Some packages are stand-alone, meaning they work with any PHP framework. Carbon and PHPUnit are examples of stand-alone packages. Any of these packages may be used with Laravel by requiring them in your "),e("code",null,"composer.json"),a(" file.")],-1),g=e("p",null,"On the other hand, other packages are specifically intended for use with Laravel. These packages may have routes, controllers, views, and configuration specifically intended to enhance a Laravel application. This guide primarily covers the development of those packages that are Laravel specific.",-1),m=e("p",null,[e("a",{name:"a-note-on-facades"})],-1),v=e("h3",{id:"a-note-on-facades",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#a-note-on-facades","aria-hidden":"true"},"#"),a(" A Note On Facades")],-1),b={href:"https://github.com/orchestral/testbench",target:"_blank",rel:"noopener noreferrer"},f=s(`<p><a name="package-discovery"></a></p><h2 id="package-discovery" tabindex="-1"><a class="header-anchor" href="#package-discovery" aria-hidden="true">#</a> Package Discovery</h2><p>In a Laravel application&#39;s <code>config/app.php</code> configuration file, the <code>providers</code> option defines a list of service providers that should be loaded by Laravel. When someone installs your package, you will typically want your service provider to be included in this list. Instead of requiring users to manually add your service provider to the list, you may define the provider in the <code>extra</code> section of your package&#39;s <code>composer.json</code> file. In addition to service providers, you may also list any <a href="./facades">facades</a> you would like to be registered:</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;extra&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;laravel&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;providers&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">&quot;Barryvdh\\\\Debugbar\\\\ServiceProvider&quot;</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">&quot;aliases&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;Debugbar&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Barryvdh\\\\Debugbar\\\\Facade&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Once your package has been configured for discovery, Laravel will automatically register its service providers and facades when it is installed, creating a convenient installation experience for your package&#39;s users.</p><p><a name="opting-out-of-package-discovery"></a></p><h3 id="opting-out-of-package-discovery" tabindex="-1"><a class="header-anchor" href="#opting-out-of-package-discovery" aria-hidden="true">#</a> Opting Out Of Package Discovery</h3><p>If you are the consumer of a package and would like to disable package discovery for a package, you may list the package name in the <code>extra</code> section of your application&#39;s <code>composer.json</code> file:</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;extra&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;laravel&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;dont-discover&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">&quot;barryvdh/laravel-debugbar&quot;</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>You may disable package discovery for all packages using the <code>*</code> character inside of your application&#39;s <code>dont-discover</code> directive:</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;extra&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;laravel&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;dont-discover&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">&quot;*&quot;</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="service-providers"></a></p><h2 id="service-providers" tabindex="-1"><a class="header-anchor" href="#service-providers" aria-hidden="true">#</a> Service Providers</h2><p><a href="./providers">Service providers</a> are the connection point between your package and Laravel. A service provider is responsible for binding things into Laravel&#39;s <a href="./container">service container</a> and informing Laravel where to load package resources such as views, configuration, and language files.</p><p>A service provider extends the <code>Illuminate\\Support\\ServiceProvider</code> class and contains two methods: <code>register</code> and <code>boot</code>. The base <code>ServiceProvider</code> class is located in the <code>illuminate/support</code> Composer package, which you should add to your own package&#39;s dependencies. To learn more about the structure and purpose of service providers, check out <a href="./providers">their documentation</a>.</p><p><a name="resources"></a></p><h2 id="resources" tabindex="-1"><a class="header-anchor" href="#resources" aria-hidden="true">#</a> Resources</h2><p><a name="configuration"></a></p><h3 id="configuration" tabindex="-1"><a class="header-anchor" href="#configuration" aria-hidden="true">#</a> Configuration</h3><p>Typically, you will need to publish your package&#39;s configuration file to the application&#39;s <code>config</code> directory. This will allow users of your package to easily override your default configuration options. To allow your configuration files to be published, call the <code>publishes</code> method from the <code>boot</code> method of your service provider:</p><pre><code>/**
 * Bootstrap any package services.
 */
public function boot(): void
{
    $this-&gt;publishes([
        __DIR__.&#39;/../config/courier.php&#39; =&gt; config_path(&#39;courier.php&#39;),
    ]);
}
</code></pre><p>Now, when users of your package execute Laravel&#39;s <code>vendor:publish</code> command, your file will be copied to the specified publish location. Once your configuration has been published, its values may be accessed like any other configuration file:</p><pre><code>$value = config(&#39;courier.option&#39;);
</code></pre><blockquote><p><strong>Warning</strong><br> You should not define closures in your configuration files. They can not be serialized correctly when users execute the <code>config:cache</code> Artisan command.</p></blockquote><p><a name="default-package-configuration"></a></p><h4 id="default-package-configuration" tabindex="-1"><a class="header-anchor" href="#default-package-configuration" aria-hidden="true">#</a> Default Package Configuration</h4><p>You may also merge your own package configuration file with the application&#39;s published copy. This will allow your users to define only the options they actually want to override in the published copy of the configuration file. To merge the configuration file values, use the <code>mergeConfigFrom</code> method within your service provider&#39;s <code>register</code> method.</p><p>The <code>mergeConfigFrom</code> method accepts the path to your package&#39;s configuration file as its first argument and the name of the application&#39;s copy of the configuration file as its second argument:</p><pre><code>/**
 * Register any application services.
 */
public function register(): void
{
    $this-&gt;mergeConfigFrom(
        __DIR__.&#39;/../config/courier.php&#39;, &#39;courier&#39;
    );
}
</code></pre><blockquote><p><strong>Warning</strong><br> This method only merges the first level of the configuration array. If your users partially define a multi-dimensional configuration array, the missing options will not be merged.</p></blockquote><p><a name="routes"></a></p><h3 id="routes" tabindex="-1"><a class="header-anchor" href="#routes" aria-hidden="true">#</a> Routes</h3><p>If your package contains routes, you may load them using the <code>loadRoutesFrom</code> method. This method will automatically determine if the application&#39;s routes are cached and will not load your routes file if the routes have already been cached:</p><pre><code>/**
 * Bootstrap any package services.
 */
public function boot(): void
{
    $this-&gt;loadRoutesFrom(__DIR__.&#39;/../routes/web.php&#39;);
}
</code></pre><p><a name="migrations"></a></p><h3 id="migrations" tabindex="-1"><a class="header-anchor" href="#migrations" aria-hidden="true">#</a> Migrations</h3><p>If your package contains <a href="./migrations">database migrations</a>, you may use the <code>loadMigrationsFrom</code> method to inform Laravel how to load them. The <code>loadMigrationsFrom</code> method accepts the path to your package&#39;s migrations as its only argument:</p><pre><code>/**
 * Bootstrap any package services.
 */
public function boot(): void
{
    $this-&gt;loadMigrationsFrom(__DIR__.&#39;/../database/migrations&#39;);
}
</code></pre><p>Once your package&#39;s migrations have been registered, they will automatically be run when the <code>php artisan migrate</code> command is executed. You do not need to export them to the application&#39;s <code>database/migrations</code> directory.</p><p><a name="language-files"></a></p><h3 id="language-files" tabindex="-1"><a class="header-anchor" href="#language-files" aria-hidden="true">#</a> Language Files</h3><p>If your package contains <a href="./localization">language files</a>, you may use the <code>loadTranslationsFrom</code> method to inform Laravel how to load them. For example, if your package is named <code>courier</code>, you should add the following to your service provider&#39;s <code>boot</code> method:</p><pre><code>/**
 * Bootstrap any package services.
 */
public function boot(): void
{
    $this-&gt;loadTranslationsFrom(__DIR__.&#39;/../lang&#39;, &#39;courier&#39;);
}
</code></pre><p>Package translation lines are referenced using the <code>package::file.line</code> syntax convention. So, you may load the <code>courier</code> package&#39;s <code>welcome</code> line from the <code>messages</code> file like so:</p><pre><code>echo trans(&#39;courier::messages.welcome&#39;);
</code></pre><p><a name="publishing-language-files"></a></p><h4 id="publishing-language-files" tabindex="-1"><a class="header-anchor" href="#publishing-language-files" aria-hidden="true">#</a> Publishing Language Files</h4><p>If you would like to publish your package&#39;s language files to the application&#39;s <code>lang/vendor</code> directory, you may use the service provider&#39;s <code>publishes</code> method. The <code>publishes</code> method accepts an array of package paths and their desired publish locations. For example, to publish the language files for the <code>courier</code> package, you may do the following:</p><pre><code>/**
 * Bootstrap any package services.
 */
public function boot(): void
{
    $this-&gt;loadTranslationsFrom(__DIR__.&#39;/../lang&#39;, &#39;courier&#39;);

    $this-&gt;publishes([
        __DIR__.&#39;/../lang&#39; =&gt; $this-&gt;app-&gt;langPath(&#39;vendor/courier&#39;),
    ]);
}
</code></pre><p>Now, when users of your package execute Laravel&#39;s <code>vendor:publish</code> Artisan command, your package&#39;s language files will be published to the specified publish location.</p><p><a name="views"></a></p><h3 id="views" tabindex="-1"><a class="header-anchor" href="#views" aria-hidden="true">#</a> Views</h3><p>To register your package&#39;s <a href="./views">views</a> with Laravel, you need to tell Laravel where the views are located. You may do this using the service provider&#39;s <code>loadViewsFrom</code> method. The <code>loadViewsFrom</code> method accepts two arguments: the path to your view templates and your package&#39;s name. For example, if your package&#39;s name is <code>courier</code>, you would add the following to your service provider&#39;s <code>boot</code> method:</p><pre><code>/**
 * Bootstrap any package services.
 */
public function boot(): void
{
    $this-&gt;loadViewsFrom(__DIR__.&#39;/../resources/views&#39;, &#39;courier&#39;);
}
</code></pre><p>Package views are referenced using the <code>package::view</code> syntax convention. So, once your view path is registered in a service provider, you may load the <code>dashboard</code> view from the <code>courier</code> package like so:</p><pre><code>Route::get(&#39;/dashboard&#39;, function () {
    return view(&#39;courier::dashboard&#39;);
});
</code></pre><p><a name="overriding-package-views"></a></p><h4 id="overriding-package-views" tabindex="-1"><a class="header-anchor" href="#overriding-package-views" aria-hidden="true">#</a> Overriding Package Views</h4><p>When you use the <code>loadViewsFrom</code> method, Laravel actually registers two locations for your views: the application&#39;s <code>resources/views/vendor</code> directory and the directory you specify. So, using the <code>courier</code> package as an example, Laravel will first check if a custom version of the view has been placed in the <code>resources/views/vendor/courier</code> directory by the developer. Then, if the view has not been customized, Laravel will search the package view directory you specified in your call to <code>loadViewsFrom</code>. This makes it easy for package users to customize / override your package&#39;s views.</p><p><a name="publishing-views"></a></p><h4 id="publishing-views" tabindex="-1"><a class="header-anchor" href="#publishing-views" aria-hidden="true">#</a> Publishing Views</h4><p>If you would like to make your views available for publishing to the application&#39;s <code>resources/views/vendor</code> directory, you may use the service provider&#39;s <code>publishes</code> method. The <code>publishes</code> method accepts an array of package view paths and their desired publish locations:</p><pre><code>/**
 * Bootstrap the package services.
 */
public function boot(): void
{
    $this-&gt;loadViewsFrom(__DIR__.&#39;/../resources/views&#39;, &#39;courier&#39;);

    $this-&gt;publishes([
        __DIR__.&#39;/../resources/views&#39; =&gt; resource_path(&#39;views/vendor/courier&#39;),
    ]);
}
</code></pre><p>Now, when users of your package execute Laravel&#39;s <code>vendor:publish</code> Artisan command, your package&#39;s views will be copied to the specified publish location.</p><p><a name="view-components"></a></p><h3 id="view-components" tabindex="-1"><a class="header-anchor" href="#view-components" aria-hidden="true">#</a> View Components</h3><p>If you are building a package that utilizes Blade components or placing components in non-conventional directories, you will need to manually register your component class and its HTML tag alias so that Laravel knows where to find the component. You should typically register your components in the <code>boot</code> method of your package&#39;s service provider:</p><pre><code>use Illuminate\\Support\\Facades\\Blade;
use VendorPackage\\View\\Components\\AlertComponent;

/**
 * Bootstrap your package&#39;s services.
 */
public function boot(): void
{
    Blade::component(&#39;package-alert&#39;, AlertComponent::class);
}
</code></pre><p>Once your component has been registered, it may be rendered using its tag alias:</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>&lt;x-package-alert/&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a name="autoloading-package-components"></a></p><h4 id="autoloading-package-components" tabindex="-1"><a class="header-anchor" href="#autoloading-package-components" aria-hidden="true">#</a> Autoloading Package Components</h4><p>Alternatively, you may use the <code>componentNamespace</code> method to autoload component classes by convention. For example, a <code>Nightshade</code> package might have <code>Calendar</code> and <code>ColorPicker</code> components that reside within the <code>Nightshade\\Views\\Components</code> namespace:</p><pre><code>use Illuminate\\Support\\Facades\\Blade;

/**
 * Bootstrap your package&#39;s services.
 */
public function boot(): void
{
    Blade::componentNamespace(&#39;Nightshade\\\\Views\\\\Components&#39;, &#39;nightshade&#39;);
}
</code></pre><p>This will allow the usage of package components by their vendor namespace using the <code>package-name::</code> syntax:</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>&lt;x-nightshade::calendar /&gt;
&lt;x-nightshade::color-picker /&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Blade will automatically detect the class that&#39;s linked to this component by pascal-casing the component name. Subdirectories are also supported using &quot;dot&quot; notation.</p><p><a name="anonymous-components"></a></p><h4 id="anonymous-components" tabindex="-1"><a class="header-anchor" href="#anonymous-components" aria-hidden="true">#</a> Anonymous Components</h4><p>If your package contains anonymous components, they must be placed within a <code>components</code> directory of your package&#39;s &quot;views&quot; directory (as specified by the <a href="#views"><code>loadViewsFrom</code> method</a>). Then, you may render them by prefixing the component name with the package&#39;s view namespace:</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>&lt;x-courier::alert /&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a name="about-artisan-command"></a></p><h3 id="about-artisan-command" tabindex="-1"><a class="header-anchor" href="#about-artisan-command" aria-hidden="true">#</a> &quot;About&quot; Artisan Command</h3><p>Laravel&#39;s built-in <code>about</code> Artisan command provides a synopsis of the application&#39;s environment and configuration. Packages may push additional information to this command&#39;s output via the <code>AboutCommand</code> class. Typically, this information may be added from your package service provider&#39;s <code>boot</code> method:</p><pre><code>use Illuminate\\Foundation\\Console\\AboutCommand;

/**
 * Bootstrap any application services.
 */
public function boot(): void
{
    AboutCommand::add(&#39;My Package&#39;, fn () =&gt; [&#39;Version&#39; =&gt; &#39;1.0.0&#39;]);
}
</code></pre><p><a name="commands"></a></p><h2 id="commands" tabindex="-1"><a class="header-anchor" href="#commands" aria-hidden="true">#</a> Commands</h2><p>To register your package&#39;s Artisan commands with Laravel, you may use the <code>commands</code> method. This method expects an array of command class names. Once the commands have been registered, you may execute them using the <a href="./artisan">Artisan CLI</a>:</p><pre><code>use Courier\\Console\\Commands\\InstallCommand;
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
</code></pre><p><a name="public-assets"></a></p><h2 id="public-assets" tabindex="-1"><a class="header-anchor" href="#public-assets" aria-hidden="true">#</a> Public Assets</h2><p>Your package may have assets such as JavaScript, CSS, and images. To publish these assets to the application&#39;s <code>public</code> directory, use the service provider&#39;s <code>publishes</code> method. In this example, we will also add a <code>public</code> asset group tag, which may be used to easily publish groups of related assets:</p><pre><code>/**
 * Bootstrap any package services.
 */
public function boot(): void
{
    $this-&gt;publishes([
        __DIR__.&#39;/../public&#39; =&gt; public_path(&#39;vendor/courier&#39;),
    ], &#39;public&#39;);
}
</code></pre><p>Now, when your package&#39;s users execute the <code>vendor:publish</code> command, your assets will be copied to the specified publish location. Since users will typically need to overwrite the assets every time the package is updated, you may use the <code>--force</code> flag:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan vendor:publish <span class="token parameter variable">--tag</span><span class="token operator">=</span>public <span class="token parameter variable">--force</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a name="publishing-file-groups"></a></p><h2 id="publishing-file-groups" tabindex="-1"><a class="header-anchor" href="#publishing-file-groups" aria-hidden="true">#</a> Publishing File Groups</h2><p>You may want to publish groups of package assets and resources separately. For instance, you might want to allow your users to publish your package&#39;s configuration files without being forced to publish your package&#39;s assets. You may do this by &quot;tagging&quot; them when calling the <code>publishes</code> method from a package&#39;s service provider. For example, let&#39;s use tags to define two publish groups for the <code>courier</code> package (<code>courier-config</code> and <code>courier-migrations</code>) in the <code>boot</code> method of the package&#39;s service provider:</p><pre><code>/**
 * Bootstrap any package services.
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
</code></pre><p>Now your users may publish these groups separately by referencing their tag when executing the <code>vendor:publish</code> command:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan vendor:publish <span class="token parameter variable">--tag</span><span class="token operator">=</span>courier-config
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,101);function y(k,w){const o=t("ExternalLinkIcon");return r(),c("div",null,[p,e("p",null,[a("Packages are the primary way of adding functionality to Laravel. Packages might be anything from a great way to work with dates like "),e("a",l,[a("Carbon"),n(o)]),a(" or a package that allows you to associate files with Eloquent models like Spatie's "),e("a",u,[a("Laravel Media Library"),n(o)]),a(".")]),h,g,m,v,e("p",null,[a("When writing a Laravel application, it generally does not matter if you use contracts or facades since both provide essentially equal levels of testability. However, when writing packages, your package will not typically have access to all of Laravel's testing helpers. If you would like to be able to write your package tests as if the package were installed inside a typical Laravel application, you may use the "),e("a",b,[a("Orchestral Testbench"),n(o)]),a(" package.")]),f])}const q=i(d,[["render",y],["__file","packages.html.vue"]]);export{q as default};
