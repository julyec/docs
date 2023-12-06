import{_ as l}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as s,c as r,b as e,d as n,e as a,a as i}from"./app-06635a3b.js";const c={},d=i(`<h1 id="facades" tabindex="-1"><a class="header-anchor" href="#facades" aria-hidden="true">#</a> Facades</h1><ul><li><a href="#introduction">Introduction</a></li><li><a href="#when-to-use-facades">When To Use Facades</a><ul><li><a href="#facades-vs-dependency-injection">Facades Vs. Dependency Injection</a></li><li><a href="#facades-vs-helper-functions">Facades Vs. Helper Functions</a></li></ul></li><li><a href="#how-facades-work">How Facades Work</a></li><li><a href="#real-time-facades">Real-Time Facades</a></li><li><a href="#facade-class-reference">Facade Class Reference</a></li></ul><p><a name="introduction"></a></p><h2 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h2><p>Throughout the Laravel documentation, you will see examples of code that interacts with Laravel&#39;s features via &quot;facades&quot;. Facades provide a &quot;static&quot; interface to classes that are available in the application&#39;s <a href="./container">service container</a>. Laravel ships with many facades which provide access to almost all of Laravel&#39;s features.</p><p>Laravel facades serve as &quot;static proxies&quot; to underlying classes in the service container, providing the benefit of a terse, expressive syntax while maintaining more testability and flexibility than traditional static methods. It&#39;s perfectly fine if you don&#39;t totally understand how facades work - just go with the flow and continue learning about Laravel.</p><p>All of Laravel&#39;s facades are defined in the <code>Illuminate\\Support\\Facades</code> namespace. So, we can easily access a facade like so:</p><pre><code>use Illuminate\\Support\\Facades\\Cache;
use Illuminate\\Support\\Facades\\Route;

Route::get(&#39;/cache&#39;, function () {
    return Cache::get(&#39;key&#39;);
});
</code></pre><p>Throughout the Laravel documentation, many of the examples will use facades to demonstrate various features of the framework.</p><p><a name="helper-functions"></a></p><h4 id="helper-functions" tabindex="-1"><a class="header-anchor" href="#helper-functions" aria-hidden="true">#</a> Helper Functions</h4><p>To complement facades, Laravel offers a variety of global &quot;helper functions&quot; that make it even easier to interact with common Laravel features. Some of the common helper functions you may interact with are <code>view</code>, <code>response</code>, <code>url</code>, <code>config</code>, and more. Each helper function offered by Laravel is documented with their corresponding feature; however, a complete list is available within the dedicated <a href="./helpers">helper documentation</a>.</p><p>For example, instead of using the <code>Illuminate\\Support\\Facades\\Response</code> facade to generate a JSON response, we may simply use the <code>response</code> function. Because helper functions are globally available, you do not need to import any classes in order to use them:</p><pre><code>use Illuminate\\Support\\Facades\\Response;

Route::get(&#39;/users&#39;, function () {
    return Response::json([
        // ...
    ]);
});

Route::get(&#39;/users&#39;, function () {
    return response()-&gt;json([
        // ...
    ]);
});
</code></pre><p><a name="when-to-use-facades"></a></p><h2 id="when-to-use-facades" tabindex="-1"><a class="header-anchor" href="#when-to-use-facades" aria-hidden="true">#</a> When To Use Facades</h2><p>Facades have many benefits. They provide a terse, memorable syntax that allows you to use Laravel&#39;s features without remembering long class names that must be injected or configured manually. Furthermore, because of their unique usage of PHP&#39;s dynamic methods, they are easy to test.</p><p>However, some care must be taken when using facades. The primary danger of facades is class &quot;scope creep&quot;. Since facades are so easy to use and do not require injection, it can be easy to let your classes continue to grow and use many facades in a single class. Using dependency injection, this potential is mitigated by the visual feedback a large constructor gives you that your class is growing too large. So, when using facades, pay special attention to the size of your class so that its scope of responsibility stays narrow. If your class is getting too large, consider splitting it into multiple smaller classes.</p><p><a name="facades-vs-dependency-injection"></a></p><h3 id="facades-vs-dependency-injection" tabindex="-1"><a class="header-anchor" href="#facades-vs-dependency-injection" aria-hidden="true">#</a> Facades Vs. Dependency Injection</h3><p>One of the primary benefits of dependency injection is the ability to swap implementations of the injected class. This is useful during testing since you can inject a mock or stub and assert that various methods were called on the stub.</p><p>Typically, it would not be possible to mock or stub a truly static class method. However, since facades use dynamic methods to proxy method calls to objects resolved from the service container, we actually can test facades just as we would test an injected class instance. For example, given the following route:</p><pre><code>use Illuminate\\Support\\Facades\\Cache;

Route::get(&#39;/cache&#39;, function () {
    return Cache::get(&#39;key&#39;);
});
</code></pre><p>Using Laravel&#39;s facade testing methods, we can write the following test to verify that the <code>Cache::get</code> method was called with the argument we expected:</p><pre><code>use Illuminate\\Support\\Facades\\Cache;

/**
 * A basic functional test example.
 */
public function test_basic_example(): void
{
    Cache::shouldReceive(&#39;get&#39;)
         -&gt;with(&#39;key&#39;)
         -&gt;andReturn(&#39;value&#39;);

    $response = $this-&gt;get(&#39;/cache&#39;);

    $response-&gt;assertSee(&#39;value&#39;);
}
</code></pre><p><a name="facades-vs-helper-functions"></a></p><h3 id="facades-vs-helper-functions" tabindex="-1"><a class="header-anchor" href="#facades-vs-helper-functions" aria-hidden="true">#</a> Facades Vs. Helper Functions</h3><p>In addition to facades, Laravel includes a variety of &quot;helper&quot; functions which can perform common tasks like generating views, firing events, dispatching jobs, or sending HTTP responses. Many of these helper functions perform the same function as a corresponding facade. For example, this facade call and helper call are equivalent:</p><pre><code>return Illuminate\\Support\\Facades\\View::make(&#39;profile&#39;);

return view(&#39;profile&#39;);
</code></pre><p>There is absolutely no practical difference between facades and helper functions. When using helper functions, you may still test them exactly as you would the corresponding facade. For example, given the following route:</p><pre><code>Route::get(&#39;/cache&#39;, function () {
    return cache(&#39;key&#39;);
});
</code></pre><p>The <code>cache</code> helper is going to call the <code>get</code> method on the class underlying the <code>Cache</code> facade. So, even though we are using the helper function, we can write the following test to verify that the method was called with the argument we expected:</p><pre><code>use Illuminate\\Support\\Facades\\Cache;

/**
 * A basic functional test example.
 */
public function test_basic_example(): void
{
    Cache::shouldReceive(&#39;get&#39;)
         -&gt;with(&#39;key&#39;)
         -&gt;andReturn(&#39;value&#39;);

    $response = $this-&gt;get(&#39;/cache&#39;);

    $response-&gt;assertSee(&#39;value&#39;);
}
</code></pre><p><a name="how-facades-work"></a></p><h2 id="how-facades-work" tabindex="-1"><a class="header-anchor" href="#how-facades-work" aria-hidden="true">#</a> How Facades Work</h2><p>In a Laravel application, a facade is a class that provides access to an object from the container. The machinery that makes this work is in the <code>Facade</code> class. Laravel&#39;s facades, and any custom facades you create, will extend the base <code>Illuminate\\Support\\Facades\\Facade</code> class.</p><p>The <code>Facade</code> base class makes use of the <code>__callStatic()</code> magic-method to defer calls from your facade to an object resolved from the container. In the example below, a call is made to the Laravel cache system. By glancing at this code, one might assume that the static <code>get</code> method is being called on the <code>Cache</code> class:</p><pre><code>&lt;?php

namespace App\\Http\\Controllers;

use App\\Http\\Controllers\\Controller;
use Illuminate\\Support\\Facades\\Cache;
use Illuminate\\View\\View;

class UserController extends Controller
{
    /**
     * Show the profile for the given user.
     */
    public function showProfile(string $id): View
    {
        $user = Cache::get(&#39;user:&#39;.$id);

        return view(&#39;profile&#39;, [&#39;user&#39; =&gt; $user]);
    }
}
</code></pre><p>Notice that near the top of the file we are &quot;importing&quot; the <code>Cache</code> facade. This facade serves as a proxy for accessing the underlying implementation of the <code>Illuminate\\Contracts\\Cache\\Factory</code> interface. Any calls we make using the facade will be passed to the underlying instance of Laravel&#39;s cache service.</p><p>If we look at that <code>Illuminate\\Support\\Facades\\Cache</code> class, you&#39;ll see that there is no static method <code>get</code>:</p><pre><code>class Cache extends Facade
{
    /**
     * Get the registered name of the component.
     */
    protected static function getFacadeAccessor(): string
    {
        return &#39;cache&#39;;
    }
}
</code></pre><p>Instead, the <code>Cache</code> facade extends the base <code>Facade</code> class and defines the method <code>getFacadeAccessor()</code>. This method&#39;s job is to return the name of a service container binding. When a user references any static method on the <code>Cache</code> facade, Laravel resolves the <code>cache</code> binding from the <a href="./container">service container</a> and runs the requested method (in this case, <code>get</code>) against that object.</p><p><a name="real-time-facades"></a></p><h2 id="real-time-facades" tabindex="-1"><a class="header-anchor" href="#real-time-facades" aria-hidden="true">#</a> Real-Time Facades</h2><p>Using real-time facades, you may treat any class in your application as if it was a facade. To illustrate how this can be used, let&#39;s first examine some code that does not use real-time facades. For example, let&#39;s assume our <code>Podcast</code> model has a <code>publish</code> method. However, in order to publish the podcast, we need to inject a <code>Publisher</code> instance:</p><pre><code>&lt;?php

namespace App\\Models;

use App\\Contracts\\Publisher;
use Illuminate\\Database\\Eloquent\\Model;

class Podcast extends Model
{
    /**
     * Publish the podcast.
     */
    public function publish(Publisher $publisher): void
    {
        $this-&gt;update([&#39;publishing&#39; =&gt; now()]);

        $publisher-&gt;publish($this);
    }
}
</code></pre><p>Injecting a publisher implementation into the method allows us to easily test the method in isolation since we can mock the injected publisher. However, it requires us to always pass a publisher instance each time we call the <code>publish</code> method. Using real-time facades, we can maintain the same testability while not being required to explicitly pass a <code>Publisher</code> instance. To generate a real-time facade, prefix the namespace of the imported class with <code>Facades</code>:</p><pre><code>&lt;?php

namespace App\\Models;

use App\\Contracts\\Publisher; // [tl! remove]
use Facades\\App\\Contracts\\Publisher; // [tl! add]
use Illuminate\\Database\\Eloquent\\Model;

class Podcast extends Model
{
    /**
     * Publish the podcast.
     */
    public function publish(Publisher $publisher): void // [tl! remove]
    public function publish(): void // [tl! add]
    {
        $this-&gt;update([&#39;publishing&#39; =&gt; now()]);

        $publisher-&gt;publish($this); // [tl! remove]
        Publisher::publish($this); // [tl! add]
    }
}
</code></pre><p>When the real-time facade is used, the publisher implementation will be resolved out of the service container using the portion of the interface or class name that appears after the <code>Facades</code> prefix. When testing, we can use Laravel&#39;s built-in facade testing helpers to mock this method call:</p><pre><code>&lt;?php

namespace Tests\\Feature;

use App\\Models\\Podcast;
use Facades\\App\\Contracts\\Publisher;
use Illuminate\\Foundation\\Testing\\RefreshDatabase;
use Tests\\TestCase;

class PodcastTest extends TestCase
{
    use RefreshDatabase;

    /**
     * A test example.
     */
    public function test_podcast_can_be_published(): void
    {
        $podcast = Podcast::factory()-&gt;create();

        Publisher::shouldReceive(&#39;publish&#39;)-&gt;once()-&gt;with($podcast);

        $podcast-&gt;publish();
    }
}
</code></pre><p><a name="facade-class-reference"></a></p><h2 id="facade-class-reference" tabindex="-1"><a class="header-anchor" href="#facade-class-reference" aria-hidden="true">#</a> Facade Class Reference</h2><p>Below you will find every facade and its underlying class. This is a useful tool for quickly digging into the API documentation for a given facade root. The <a href="./container">service container binding</a> key is also included where applicable.</p>`,53),u={class:"overflow-auto"},h=e("thead",null,[e("tr",null,[e("th",null,"Facade"),e("th",null,"Class"),e("th",null,"Service Container Binding")])],-1),p=e("td",null,"App",-1),m={href:"https://laravel.com/api/%7B%7Bversion%7D%7D/Illuminate/Foundation/Application.html",target:"_blank",rel:"noopener noreferrer"},_=e("td",null,[e("code",null,"app")],-1),f=e("td",null,"Artisan",-1),g={href:"https://laravel.com/api/%7B%7Bversion%7D%7D/Illuminate/Contracts/Console/Kernel.html",target:"_blank",rel:"noopener noreferrer"},v=e("td",null,[e("code",null,"artisan")],-1),b=e("td",null,"Auth",-1),I={href:"https://laravel.com/api/%7B%7Bversion%7D%7D/Illuminate/Auth/AuthManager.html",target:"_blank",rel:"noopener noreferrer"},y=e("td",null,[e("code",null,"auth")],-1),B=e("td",null,"Auth (Instance)",-1),w={href:"https://laravel.com/api/%7B%7Bversion%7D%7D/Illuminate/Contracts/Auth/Guard.html",target:"_blank",rel:"noopener noreferrer"},D=e("td",null,[e("code",null,"auth.driver")],-1),k=e("td",null,"Blade",-1),C={href:"https://laravel.com/api/%7B%7Bversion%7D%7D/Illuminate/View/Compilers/BladeCompiler.html",target:"_blank",rel:"noopener noreferrer"},F=e("td",null,[e("code",null,"blade.compiler")],-1),R=e("td",null,"Broadcast",-1),x={href:"https://laravel.com/api/%7B%7Bversion%7D%7D/Illuminate/Contracts/Broadcasting/Factory.html",target:"_blank",rel:"noopener noreferrer"},P=e("td",null," ",-1),S=e("td",null,"Broadcast (Instance)",-1),A={href:"https://laravel.com/api/%7B%7Bversion%7D%7D/Illuminate/Contracts/Broadcasting/Broadcaster.html",target:"_blank",rel:"noopener noreferrer"},T=e("td",null," ",-1),M=e("td",null,"Bus",-1),V={href:"https://laravel.com/api/%7B%7Bversion%7D%7D/Illuminate/Contracts/Bus/Dispatcher.html",target:"_blank",rel:"noopener noreferrer"},q=e("td",null," ",-1),L=e("td",null,"Cache",-1),j={href:"https://laravel.com/api/%7B%7Bversion%7D%7D/Illuminate/Cache/CacheManager.html",target:"_blank",rel:"noopener noreferrer"},H=e("td",null,[e("code",null,"cache")],-1),$=e("td",null,"Cache (Instance)",-1),Q={href:"https://laravel.com/api/%7B%7Bversion%7D%7D/Illuminate/Cache/Repository.html",target:"_blank",rel:"noopener noreferrer"},E=e("td",null,[e("code",null,"cache.store")],-1),U=e("td",null,"Config",-1),N={href:"https://laravel.com/api/%7B%7Bversion%7D%7D/Illuminate/Config/Repository.html",target:"_blank",rel:"noopener noreferrer"},G=e("td",null,[e("code",null,"config")],-1),W=e("td",null,"Cookie",-1),J={href:"https://laravel.com/api/%7B%7Bversion%7D%7D/Illuminate/Cookie/CookieJar.html",target:"_blank",rel:"noopener noreferrer"},K=e("td",null,[e("code",null,"cookie")],-1),O=e("td",null,"Crypt",-1),z={href:"https://laravel.com/api/%7B%7Bversion%7D%7D/Illuminate/Encryption/Encrypter.html",target:"_blank",rel:"noopener noreferrer"},X=e("td",null,[e("code",null,"encrypter")],-1),Y=e("td",null,"Date",-1),Z={href:"https://laravel.com/api/%7B%7Bversion%7D%7D/Illuminate/Support/DateFactory.html",target:"_blank",rel:"noopener noreferrer"},ee=e("td",null,[e("code",null,"date")],-1),te=e("td",null,"DB",-1),ne={href:"https://laravel.com/api/%7B%7Bversion%7D%7D/Illuminate/Database/DatabaseManager.html",target:"_blank",rel:"noopener noreferrer"},ae=e("td",null,[e("code",null,"db")],-1),le=e("td",null,"DB (Instance)",-1),oe={href:"https://laravel.com/api/%7B%7Bversion%7D%7D/Illuminate/Database/Connection.html",target:"_blank",rel:"noopener noreferrer"},se=e("td",null,[e("code",null,"db.connection")],-1),re=e("td",null,"Event",-1),ie={href:"https://laravel.com/api/%7B%7Bversion%7D%7D/Illuminate/Events/Dispatcher.html",target:"_blank",rel:"noopener noreferrer"},ce=e("td",null,[e("code",null,"events")],-1),de=e("td",null,"File",-1),ue={href:"https://laravel.com/api/%7B%7Bversion%7D%7D/Illuminate/Filesystem/Filesystem.html",target:"_blank",rel:"noopener noreferrer"},he=e("td",null,[e("code",null,"files")],-1),pe=e("td",null,"Gate",-1),me={href:"https://laravel.com/api/%7B%7Bversion%7D%7D/Illuminate/Contracts/Auth/Access/Gate.html",target:"_blank",rel:"noopener noreferrer"},_e=e("td",null," ",-1),fe=e("td",null,"Hash",-1),ge={href:"https://laravel.com/api/%7B%7Bversion%7D%7D/Illuminate/Contracts/Hashing/Hasher.html",target:"_blank",rel:"noopener noreferrer"},ve=e("td",null,[e("code",null,"hash")],-1),be=e("td",null,"Http",-1),Ie={href:"https://laravel.com/api/%7B%7Bversion%7D%7D/Illuminate/Http/Client/Factory.html",target:"_blank",rel:"noopener noreferrer"},ye=e("td",null," ",-1),Be=e("td",null,"Lang",-1),we={href:"https://laravel.com/api/%7B%7Bversion%7D%7D/Illuminate/Translation/Translator.html",target:"_blank",rel:"noopener noreferrer"},De=e("td",null,[e("code",null,"translator")],-1),ke=e("td",null,"Log",-1),Ce={href:"https://laravel.com/api/%7B%7Bversion%7D%7D/Illuminate/Log/LogManager.html",target:"_blank",rel:"noopener noreferrer"},Fe=e("td",null,[e("code",null,"log")],-1),Re=e("td",null,"Mail",-1),xe={href:"https://laravel.com/api/%7B%7Bversion%7D%7D/Illuminate/Mail/Mailer.html",target:"_blank",rel:"noopener noreferrer"},Pe=e("td",null,[e("code",null,"mailer")],-1),Se=e("td",null,"Notification",-1),Ae={href:"https://laravel.com/api/%7B%7Bversion%7D%7D/Illuminate/Notifications/ChannelManager.html",target:"_blank",rel:"noopener noreferrer"},Te=e("td",null," ",-1),Me=e("td",null,"Password",-1),Ve={href:"https://laravel.com/api/%7B%7Bversion%7D%7D/Illuminate/Auth/Passwords/PasswordBrokerManager.html",target:"_blank",rel:"noopener noreferrer"},qe=e("td",null,[e("code",null,"auth.password")],-1),Le=e("td",null,"Password (Instance)",-1),je={href:"https://laravel.com/api/%7B%7Bversion%7D%7D/Illuminate/Auth/Passwords/PasswordBroker.html",target:"_blank",rel:"noopener noreferrer"},He=e("td",null,[e("code",null,"auth.password.broker")],-1),$e=e("td",null,"Pipeline (Instance)",-1),Qe={href:"https://laravel.com/api/%7B%7Bversion%7D%7D/Illuminate/Pipeline/Pipeline.html",target:"_blank",rel:"noopener noreferrer"},Ee=e("td",null," ",-1),Ue=e("td",null,"Process",-1),Ne={href:"https://laravel.com/api/%7B%7Bversion%7D%7D/Illuminate/Process/Factory.html",target:"_blank",rel:"noopener noreferrer"},Ge=e("td",null," ",-1),We=e("td",null,"Queue",-1),Je={href:"https://laravel.com/api/%7B%7Bversion%7D%7D/Illuminate/Queue/QueueManager.html",target:"_blank",rel:"noopener noreferrer"},Ke=e("td",null,[e("code",null,"queue")],-1),Oe=e("td",null,"Queue (Instance)",-1),ze={href:"https://laravel.com/api/%7B%7Bversion%7D%7D/Illuminate/Contracts/Queue/Queue.html",target:"_blank",rel:"noopener noreferrer"},Xe=e("td",null,[e("code",null,"queue.connection")],-1),Ye=e("td",null,"Queue (Base Class)",-1),Ze={href:"https://laravel.com/api/%7B%7Bversion%7D%7D/Illuminate/Queue/Queue.html",target:"_blank",rel:"noopener noreferrer"},et=e("td",null," ",-1),tt=e("td",null,"Redirect",-1),nt={href:"https://laravel.com/api/%7B%7Bversion%7D%7D/Illuminate/Routing/Redirector.html",target:"_blank",rel:"noopener noreferrer"},at=e("td",null,[e("code",null,"redirect")],-1),lt=e("td",null,"Redis",-1),ot={href:"https://laravel.com/api/%7B%7Bversion%7D%7D/Illuminate/Redis/RedisManager.html",target:"_blank",rel:"noopener noreferrer"},st=e("td",null,[e("code",null,"redis")],-1),rt=e("td",null,"Redis (Instance)",-1),it={href:"https://laravel.com/api/%7B%7Bversion%7D%7D/Illuminate/Redis/Connections/Connection.html",target:"_blank",rel:"noopener noreferrer"},ct=e("td",null,[e("code",null,"redis.connection")],-1),dt=e("td",null,"Request",-1),ut={href:"https://laravel.com/api/%7B%7Bversion%7D%7D/Illuminate/Http/Request.html",target:"_blank",rel:"noopener noreferrer"},ht=e("td",null,[e("code",null,"request")],-1),pt=e("td",null,"Response",-1),mt={href:"https://laravel.com/api/%7B%7Bversion%7D%7D/Illuminate/Contracts/Routing/ResponseFactory.html",target:"_blank",rel:"noopener noreferrer"},_t=e("td",null," ",-1),ft=e("td",null,"Response (Instance)",-1),gt={href:"https://laravel.com/api/%7B%7Bversion%7D%7D/Illuminate/Http/Response.html",target:"_blank",rel:"noopener noreferrer"},vt=e("td",null," ",-1),bt=e("td",null,"Route",-1),It={href:"https://laravel.com/api/%7B%7Bversion%7D%7D/Illuminate/Routing/Router.html",target:"_blank",rel:"noopener noreferrer"},yt=e("td",null,[e("code",null,"router")],-1),Bt=e("td",null,"Schema",-1),wt={href:"https://laravel.com/api/%7B%7Bversion%7D%7D/Illuminate/Database/Schema/Builder.html",target:"_blank",rel:"noopener noreferrer"},Dt=e("td",null," ",-1),kt=e("td",null,"Session",-1),Ct={href:"https://laravel.com/api/%7B%7Bversion%7D%7D/Illuminate/Session/SessionManager.html",target:"_blank",rel:"noopener noreferrer"},Ft=e("td",null,[e("code",null,"session")],-1),Rt=e("td",null,"Session (Instance)",-1),xt={href:"https://laravel.com/api/%7B%7Bversion%7D%7D/Illuminate/Session/Store.html",target:"_blank",rel:"noopener noreferrer"},Pt=e("td",null,[e("code",null,"session.store")],-1),St=e("td",null,"Storage",-1),At={href:"https://laravel.com/api/%7B%7Bversion%7D%7D/Illuminate/Filesystem/FilesystemManager.html",target:"_blank",rel:"noopener noreferrer"},Tt=e("td",null,[e("code",null,"filesystem")],-1),Mt=e("td",null,"Storage (Instance)",-1),Vt={href:"https://laravel.com/api/%7B%7Bversion%7D%7D/Illuminate/Contracts/Filesystem/Filesystem.html",target:"_blank",rel:"noopener noreferrer"},qt=e("td",null,[e("code",null,"filesystem.disk")],-1),Lt=e("td",null,"URL",-1),jt={href:"https://laravel.com/api/%7B%7Bversion%7D%7D/Illuminate/Routing/UrlGenerator.html",target:"_blank",rel:"noopener noreferrer"},Ht=e("td",null,[e("code",null,"url")],-1),$t=e("td",null,"Validator",-1),Qt={href:"https://laravel.com/api/%7B%7Bversion%7D%7D/Illuminate/Validation/Factory.html",target:"_blank",rel:"noopener noreferrer"},Et=e("td",null,[e("code",null,"validator")],-1),Ut=e("td",null,"Validator (Instance)",-1),Nt={href:"https://laravel.com/api/%7B%7Bversion%7D%7D/Illuminate/Validation/Validator.html",target:"_blank",rel:"noopener noreferrer"},Gt=e("td",null," ",-1),Wt=e("td",null,"View",-1),Jt={href:"https://laravel.com/api/%7B%7Bversion%7D%7D/Illuminate/View/Factory.html",target:"_blank",rel:"noopener noreferrer"},Kt=e("td",null,[e("code",null,"view")],-1),Ot=e("td",null,"View (Instance)",-1),zt={href:"https://laravel.com/api/%7B%7Bversion%7D%7D/Illuminate/View/View.html",target:"_blank",rel:"noopener noreferrer"},Xt=e("td",null," ",-1),Yt=e("td",null,"Vite",-1),Zt={href:"https://laravel.com/api/%7B%7Bversion%7D%7D/Illuminate/Foundation/Vite.html",target:"_blank",rel:"noopener noreferrer"},en=e("td",null," ",-1);function tn(nn,an){const t=o("ExternalLinkIcon");return s(),r("div",null,[d,e("div",u,[e("table",null,[h,e("tbody",null,[e("tr",null,[p,e("td",null,[e("a",m,[n("Illuminate\\Foundation\\Application"),a(t)])]),_]),e("tr",null,[f,e("td",null,[e("a",g,[n("Illuminate\\Contracts\\Console\\Kernel"),a(t)])]),v]),e("tr",null,[b,e("td",null,[e("a",I,[n("Illuminate\\Auth\\AuthManager"),a(t)])]),y]),e("tr",null,[B,e("td",null,[e("a",w,[n("Illuminate\\Contracts\\Auth\\Guard"),a(t)])]),D]),e("tr",null,[k,e("td",null,[e("a",C,[n("Illuminate\\View\\Compilers\\BladeCompiler"),a(t)])]),F]),e("tr",null,[R,e("td",null,[e("a",x,[n("Illuminate\\Contracts\\Broadcasting\\Factory"),a(t)])]),P]),e("tr",null,[S,e("td",null,[e("a",A,[n("Illuminate\\Contracts\\Broadcasting\\Broadcaster"),a(t)])]),T]),e("tr",null,[M,e("td",null,[e("a",V,[n("Illuminate\\Contracts\\Bus\\Dispatcher"),a(t)])]),q]),e("tr",null,[L,e("td",null,[e("a",j,[n("Illuminate\\Cache\\CacheManager"),a(t)])]),H]),e("tr",null,[$,e("td",null,[e("a",Q,[n("Illuminate\\Cache\\Repository"),a(t)])]),E]),e("tr",null,[U,e("td",null,[e("a",N,[n("Illuminate\\Config\\Repository"),a(t)])]),G]),e("tr",null,[W,e("td",null,[e("a",J,[n("Illuminate\\Cookie\\CookieJar"),a(t)])]),K]),e("tr",null,[O,e("td",null,[e("a",z,[n("Illuminate\\Encryption\\Encrypter"),a(t)])]),X]),e("tr",null,[Y,e("td",null,[e("a",Z,[n("Illuminate\\Support\\DateFactory"),a(t)])]),ee]),e("tr",null,[te,e("td",null,[e("a",ne,[n("Illuminate\\Database\\DatabaseManager"),a(t)])]),ae]),e("tr",null,[le,e("td",null,[e("a",oe,[n("Illuminate\\Database\\Connection"),a(t)])]),se]),e("tr",null,[re,e("td",null,[e("a",ie,[n("Illuminate\\Events\\Dispatcher"),a(t)])]),ce]),e("tr",null,[de,e("td",null,[e("a",ue,[n("Illuminate\\Filesystem\\Filesystem"),a(t)])]),he]),e("tr",null,[pe,e("td",null,[e("a",me,[n("Illuminate\\Contracts\\Auth\\Access\\Gate"),a(t)])]),_e]),e("tr",null,[fe,e("td",null,[e("a",ge,[n("Illuminate\\Contracts\\Hashing\\Hasher"),a(t)])]),ve]),e("tr",null,[be,e("td",null,[e("a",Ie,[n("Illuminate\\Http\\Client\\Factory"),a(t)])]),ye]),e("tr",null,[Be,e("td",null,[e("a",we,[n("Illuminate\\Translation\\Translator"),a(t)])]),De]),e("tr",null,[ke,e("td",null,[e("a",Ce,[n("Illuminate\\Log\\LogManager"),a(t)])]),Fe]),e("tr",null,[Re,e("td",null,[e("a",xe,[n("Illuminate\\Mail\\Mailer"),a(t)])]),Pe]),e("tr",null,[Se,e("td",null,[e("a",Ae,[n("Illuminate\\Notifications\\ChannelManager"),a(t)])]),Te]),e("tr",null,[Me,e("td",null,[e("a",Ve,[n("Illuminate\\Auth\\Passwords\\PasswordBrokerManager"),a(t)])]),qe]),e("tr",null,[Le,e("td",null,[e("a",je,[n("Illuminate\\Auth\\Passwords\\PasswordBroker"),a(t)])]),He]),e("tr",null,[$e,e("td",null,[e("a",Qe,[n("Illuminate\\Pipeline\\Pipeline"),a(t)])]),Ee]),e("tr",null,[Ue,e("td",null,[e("a",Ne,[n("Illuminate\\Process\\Factory"),a(t)])]),Ge]),e("tr",null,[We,e("td",null,[e("a",Je,[n("Illuminate\\Queue\\QueueManager"),a(t)])]),Ke]),e("tr",null,[Oe,e("td",null,[e("a",ze,[n("Illuminate\\Contracts\\Queue\\Queue"),a(t)])]),Xe]),e("tr",null,[Ye,e("td",null,[e("a",Ze,[n("Illuminate\\Queue\\Queue"),a(t)])]),et]),e("tr",null,[tt,e("td",null,[e("a",nt,[n("Illuminate\\Routing\\Redirector"),a(t)])]),at]),e("tr",null,[lt,e("td",null,[e("a",ot,[n("Illuminate\\Redis\\RedisManager"),a(t)])]),st]),e("tr",null,[rt,e("td",null,[e("a",it,[n("Illuminate\\Redis\\Connections\\Connection"),a(t)])]),ct]),e("tr",null,[dt,e("td",null,[e("a",ut,[n("Illuminate\\Http\\Request"),a(t)])]),ht]),e("tr",null,[pt,e("td",null,[e("a",mt,[n("Illuminate\\Contracts\\Routing\\ResponseFactory"),a(t)])]),_t]),e("tr",null,[ft,e("td",null,[e("a",gt,[n("Illuminate\\Http\\Response"),a(t)])]),vt]),e("tr",null,[bt,e("td",null,[e("a",It,[n("Illuminate\\Routing\\Router"),a(t)])]),yt]),e("tr",null,[Bt,e("td",null,[e("a",wt,[n("Illuminate\\Database\\Schema\\Builder"),a(t)])]),Dt]),e("tr",null,[kt,e("td",null,[e("a",Ct,[n("Illuminate\\Session\\SessionManager"),a(t)])]),Ft]),e("tr",null,[Rt,e("td",null,[e("a",xt,[n("Illuminate\\Session\\Store"),a(t)])]),Pt]),e("tr",null,[St,e("td",null,[e("a",At,[n("Illuminate\\Filesystem\\FilesystemManager"),a(t)])]),Tt]),e("tr",null,[Mt,e("td",null,[e("a",Vt,[n("Illuminate\\Contracts\\Filesystem\\Filesystem"),a(t)])]),qt]),e("tr",null,[Lt,e("td",null,[e("a",jt,[n("Illuminate\\Routing\\UrlGenerator"),a(t)])]),Ht]),e("tr",null,[$t,e("td",null,[e("a",Qt,[n("Illuminate\\Validation\\Factory"),a(t)])]),Et]),e("tr",null,[Ut,e("td",null,[e("a",Nt,[n("Illuminate\\Validation\\Validator"),a(t)])]),Gt]),e("tr",null,[Wt,e("td",null,[e("a",Jt,[n("Illuminate\\View\\Factory"),a(t)])]),Kt]),e("tr",null,[Ot,e("td",null,[e("a",zt,[n("Illuminate\\View\\View"),a(t)])]),Xt]),e("tr",null,[Yt,e("td",null,[e("a",Zt,[n("Illuminate\\Foundation\\Vite"),a(t)])]),en])])])])])}const sn=l(c,[["render",tn],["__file","facades.html.vue"]]);export{sn as default};
