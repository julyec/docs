import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as r,c as i,a as o}from"./app-8cdff07c.js";const n={},t=o(`<h1 id="service-providers" tabindex="-1"><a class="header-anchor" href="#service-providers" aria-hidden="true">#</a> Service Providers</h1><ul><li><a href="#introduction">Introduction</a></li><li><a href="#writing-service-providers">Writing Service Providers</a><ul><li><a href="#the-register-method">The Register Method</a></li><li><a href="#the-boot-method">The Boot Method</a></li></ul></li><li><a href="#registering-providers">Registering Providers</a></li><li><a href="#deferred-providers">Deferred Providers</a></li></ul><p><a name="introduction"></a></p><h2 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h2><p>Service providers are the central place of all Laravel application bootstrapping. Your own application, as well as all of Laravel&#39;s core services, are bootstrapped via service providers.</p><p>But, what do we mean by &quot;bootstrapped&quot;? In general, we mean <strong>registering</strong> things, including registering service container bindings, event listeners, middleware, and even routes. Service providers are the central place to configure your application.</p><p>If you open the <code>config/app.php</code> file included with Laravel, you will see a <code>providers</code> array. These are all of the service provider classes that will be loaded for your application. By default, a set of Laravel core service providers are listed in this array. These providers bootstrap the core Laravel components, such as the mailer, queue, cache, and others. Many of these providers are &quot;deferred&quot; providers, meaning they will not be loaded on every request, but only when the services they provide are actually needed.</p><p>In this overview, you will learn how to write your own service providers and register them with your Laravel application.</p><blockquote><p><strong>Note</strong><br> If you would like to learn more about how Laravel handles requests and works internally, check out our documentation on the Laravel <a href="./lifecycle">request lifecycle</a>.</p></blockquote><p><a name="writing-service-providers"></a></p><h2 id="writing-service-providers" tabindex="-1"><a class="header-anchor" href="#writing-service-providers" aria-hidden="true">#</a> Writing Service Providers</h2><p>All service providers extend the <code>Illuminate\\Support\\ServiceProvider</code> class. Most service providers contain a <code>register</code> and a <code>boot</code> method. Within the <code>register</code> method, you should <strong>only bind things into the <a href="./container">service container</a></strong>. You should never attempt to register any event listeners, routes, or any other piece of functionality within the <code>register</code> method.</p><p>The Artisan CLI can generate a new provider via the <code>make:provider</code> command:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan make:provider RiakServiceProvider
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a name="the-register-method"></a></p><h3 id="the-register-method" tabindex="-1"><a class="header-anchor" href="#the-register-method" aria-hidden="true">#</a> The Register Method</h3><p>As mentioned previously, within the <code>register</code> method, you should only bind things into the <a href="./container">service container</a>. You should never attempt to register any event listeners, routes, or any other piece of functionality within the <code>register</code> method. Otherwise, you may accidentally use a service that is provided by a service provider which has not loaded yet.</p><p>Let&#39;s take a look at a basic service provider. Within any of your service provider methods, you always have access to the <code>$app</code> property which provides access to the service container:</p><pre><code>&lt;?php

namespace App\\Providers;

use App\\Services\\Riak\\Connection;
use Illuminate\\Contracts\\Foundation\\Application;
use Illuminate\\Support\\ServiceProvider;

class RiakServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        $this-&gt;app-&gt;singleton(Connection::class, function (Application $app) {
            return new Connection(config(&#39;riak&#39;));
        });
    }
}
</code></pre><p>This service provider only defines a <code>register</code> method, and uses that method to define an implementation of <code>App\\Services\\Riak\\Connection</code> in the service container. If you&#39;re not yet familiar with Laravel&#39;s service container, check out <a href="./container">its documentation</a>.</p><p><a name="the-bindings-and-singletons-properties"></a></p><h4 id="the-bindings-and-singletons-properties" tabindex="-1"><a class="header-anchor" href="#the-bindings-and-singletons-properties" aria-hidden="true">#</a> The <code>bindings</code> And <code>singletons</code> Properties</h4><p>If your service provider registers many simple bindings, you may wish to use the <code>bindings</code> and <code>singletons</code> properties instead of manually registering each container binding. When the service provider is loaded by the framework, it will automatically check for these properties and register their bindings:</p><pre><code>&lt;?php

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
     * All of the container bindings that should be registered.
     *
     * @var array
     */
    public $bindings = [
        ServerProvider::class =&gt; DigitalOceanServerProvider::class,
    ];

    /**
     * All of the container singletons that should be registered.
     *
     * @var array
     */
    public $singletons = [
        DowntimeNotifier::class =&gt; PingdomDowntimeNotifier::class,
        ServerProvider::class =&gt; ServerToolsProvider::class,
    ];
}
</code></pre><p><a name="the-boot-method"></a></p><h3 id="the-boot-method" tabindex="-1"><a class="header-anchor" href="#the-boot-method" aria-hidden="true">#</a> The Boot Method</h3><p>So, what if we need to register a <a href="./views#view-composers">view composer</a> within our service provider? This should be done within the <code>boot</code> method. <strong>This method is called after all other service providers have been registered</strong>, meaning you have access to all other services that have been registered by the framework:</p><pre><code>&lt;?php

namespace App\\Providers;

use Illuminate\\Support\\Facades\\View;
use Illuminate\\Support\\ServiceProvider;

class ComposerServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        View::composer(&#39;view&#39;, function () {
            // ...
        });
    }
}
</code></pre><p><a name="boot-method-dependency-injection"></a></p><h4 id="boot-method-dependency-injection" tabindex="-1"><a class="header-anchor" href="#boot-method-dependency-injection" aria-hidden="true">#</a> Boot Method Dependency Injection</h4><p>You may type-hint dependencies for your service provider&#39;s <code>boot</code> method. The <a href="./container">service container</a> will automatically inject any dependencies you need:</p><pre><code>use Illuminate\\Contracts\\Routing\\ResponseFactory;

/**
 * Bootstrap any application services.
 */
public function boot(ResponseFactory $response): void
{
    $response-&gt;macro(&#39;serialized&#39;, function (mixed $value) {
        // ...
    });
}
</code></pre><p><a name="registering-providers"></a></p><h2 id="registering-providers" tabindex="-1"><a class="header-anchor" href="#registering-providers" aria-hidden="true">#</a> Registering Providers</h2><p>All service providers are registered in the <code>config/app.php</code> configuration file. This file contains a <code>providers</code> array where you can list the class names of your service providers. By default, a set of Laravel core service providers are registered in this array. The default providers bootstrap the core Laravel components, such as the mailer, queue, cache, and others.</p><p>To register your provider, add it to the array:</p><pre><code>&#39;providers&#39; =&gt; ServiceProvider::defaultProviders()-&gt;merge([
    // Other Service Providers

    App\\Providers\\ComposerServiceProvider::class,
])-&gt;toArray(),
</code></pre><p><a name="deferred-providers"></a></p><h2 id="deferred-providers" tabindex="-1"><a class="header-anchor" href="#deferred-providers" aria-hidden="true">#</a> Deferred Providers</h2><p>If your provider is <strong>only</strong> registering bindings in the <a href="./container">service container</a>, you may choose to defer its registration until one of the registered bindings is actually needed. Deferring the loading of such a provider will improve the performance of your application, since it is not loaded from the filesystem on every request.</p><p>Laravel compiles and stores a list of all of the services supplied by deferred service providers, along with the name of its service provider class. Then, only when you attempt to resolve one of these services does Laravel load the service provider.</p><p>To defer the loading of a provider, implement the <code>\\Illuminate\\Contracts\\Support\\DeferrableProvider</code> interface and define a <code>provides</code> method. The <code>provides</code> method should return the service container bindings registered by the provider:</p><pre><code>&lt;?php

namespace App\\Providers;

use App\\Services\\Riak\\Connection;
use Illuminate\\Contracts\\Foundation\\Application;
use Illuminate\\Contracts\\Support\\DeferrableProvider;
use Illuminate\\Support\\ServiceProvider;

class RiakServiceProvider extends ServiceProvider implements DeferrableProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        $this-&gt;app-&gt;singleton(Connection::class, function (Application $app) {
            return new Connection($app[&#39;config&#39;][&#39;riak&#39;]);
        });
    }

    /**
     * Get the services provided by the provider.
     *
     * @return array&lt;int, string&gt;
     */
    public function provides(): array
    {
        return [Connection::class];
    }
}
</code></pre>`,43),a=[t];function s(d,c){return r(),i("div",null,a)}const h=e(n,[["render",s],["__file","providers.html.vue"]]);export{h as default};
