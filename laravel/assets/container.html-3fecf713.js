import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as s,o,c as i,b as e,d as n,e as r,a as c}from"./app-8cdff07c.js";const p={},l=c(`<h1 id="service-container" tabindex="-1"><a class="header-anchor" href="#service-container" aria-hidden="true">#</a> Service Container</h1><ul><li><a href="#introduction">Introduction</a><ul><li><a href="#zero-configuration-resolution">Zero Configuration Resolution</a></li><li><a href="#when-to-use-the-container">When To Use The Container</a></li></ul></li><li><a href="#binding">Binding</a><ul><li><a href="#binding-basics">Binding Basics</a></li><li><a href="#binding-interfaces-to-implementations">Binding Interfaces To Implementations</a></li><li><a href="#contextual-binding">Contextual Binding</a></li><li><a href="#binding-primitives">Binding Primitives</a></li><li><a href="#binding-typed-variadics">Binding Typed Variadics</a></li><li><a href="#tagging">Tagging</a></li><li><a href="#extending-bindings">Extending Bindings</a></li></ul></li><li><a href="#resolving">Resolving</a><ul><li><a href="#the-make-method">The Make Method</a></li><li><a href="#automatic-injection">Automatic Injection</a></li></ul></li><li><a href="#method-invocation-and-injection">Method Invocation &amp; Injection</a></li><li><a href="#container-events">Container Events</a></li><li><a href="#psr-11">PSR-11</a></li></ul><p><a name="introduction"></a></p><h2 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h2><p>The Laravel service container is a powerful tool for managing class dependencies and performing dependency injection. Dependency injection is a fancy phrase that essentially means this: class dependencies are &quot;injected&quot; into the class via the constructor or, in some cases, &quot;setter&quot; methods.</p><p>Let&#39;s look at a simple example:</p><pre><code>&lt;?php

namespace App\\Http\\Controllers;

use App\\Http\\Controllers\\Controller;
use App\\Repositories\\UserRepository;
use App\\Models\\User;
use Illuminate\\View\\View;

class UserController extends Controller
{
    /**
     * Create a new controller instance.
     */
    public function __construct(
        protected UserRepository $users,
    ) {}

    /**
     * Show the profile for the given user.
     */
    public function show(string $id): View
    {
        $user = $this-&gt;users-&gt;find($id);

        return view(&#39;user.profile&#39;, [&#39;user&#39; =&gt; $user]);
    }
}
</code></pre><p>In this example, the <code>UserController</code> needs to retrieve users from a data source. So, we will <strong>inject</strong> a service that is able to retrieve users. In this context, our <code>UserRepository</code> most likely uses <a href="./eloquent">Eloquent</a> to retrieve user information from the database. However, since the repository is injected, we are able to easily swap it out with another implementation. We are also able to easily &quot;mock&quot;, or create a dummy implementation of the <code>UserRepository</code> when testing our application.</p><p>A deep understanding of the Laravel service container is essential to building a powerful, large application, as well as for contributing to the Laravel core itself.</p><p><a name="zero-configuration-resolution"></a></p><h3 id="zero-configuration-resolution" tabindex="-1"><a class="header-anchor" href="#zero-configuration-resolution" aria-hidden="true">#</a> Zero Configuration Resolution</h3><p>If a class has no dependencies or only depends on other concrete classes (not interfaces), the container does not need to be instructed on how to resolve that class. For example, you may place the following code in your <code>routes/web.php</code> file:</p><pre><code>&lt;?php

class Service
{
    // ...
}

Route::get(&#39;/&#39;, function (Service $service) {
    die($service::class);
});
</code></pre><p>In this example, hitting your application&#39;s <code>/</code> route will automatically resolve the <code>Service</code> class and inject it into your route&#39;s handler. This is game changing. It means you can develop your application and take advantage of dependency injection without worrying about bloated configuration files.</p><p>Thankfully, many of the classes you will be writing when building a Laravel application automatically receive their dependencies via the container, including <a href="./controllers">controllers</a>, <a href="./events">event listeners</a>, <a href="./middleware">middleware</a>, and more. Additionally, you may type-hint dependencies in the <code>handle</code> method of <a href="./queues">queued jobs</a>. Once you taste the power of automatic and zero configuration dependency injection it feels impossible to develop without it.</p><p><a name="when-to-use-the-container"></a></p><h3 id="when-to-use-the-container" tabindex="-1"><a class="header-anchor" href="#when-to-use-the-container" aria-hidden="true">#</a> When To Use The Container</h3><p>Thanks to zero configuration resolution, you will often type-hint dependencies on routes, controllers, event listeners, and elsewhere without ever manually interacting with the container. For example, you might type-hint the <code>Illuminate\\Http\\Request</code> object on your route definition so that you can easily access the current request. Even though we never have to interact with the container to write this code, it is managing the injection of these dependencies behind the scenes:</p><pre><code>use Illuminate\\Http\\Request;

Route::get(&#39;/&#39;, function (Request $request) {
    // ...
});
</code></pre><p>In many cases, thanks to automatic dependency injection and <a href="./facades">facades</a>, you can build Laravel applications without <strong>ever</strong> manually binding or resolving anything from the container. <strong>So, when would you ever manually interact with the container?</strong> Let&#39;s examine two situations.</p><p>First, if you write a class that implements an interface and you wish to type-hint that interface on a route or class constructor, you must <a href="#binding-interfaces-to-implementations">tell the container how to resolve that interface</a>. Secondly, if you are <a href="./packages">writing a Laravel package</a> that you plan to share with other Laravel developers, you may need to bind your package&#39;s services into the container.</p><p><a name="binding"></a></p><h2 id="binding" tabindex="-1"><a class="header-anchor" href="#binding" aria-hidden="true">#</a> Binding</h2><p><a name="binding-basics"></a></p><h3 id="binding-basics" tabindex="-1"><a class="header-anchor" href="#binding-basics" aria-hidden="true">#</a> Binding Basics</h3><p><a name="simple-bindings"></a></p><h4 id="simple-bindings" tabindex="-1"><a class="header-anchor" href="#simple-bindings" aria-hidden="true">#</a> Simple Bindings</h4><p>Almost all of your service container bindings will be registered within <a href="./providers">service providers</a>, so most of these examples will demonstrate using the container in that context.</p><p>Within a service provider, you always have access to the container via the <code>$this-&gt;app</code> property. We can register a binding using the <code>bind</code> method, passing the class or interface name that we wish to register along with a closure that returns an instance of the class:</p><pre><code>use App\\Services\\Transistor;
use App\\Services\\PodcastParser;
use Illuminate\\Contracts\\Foundation\\Application;

$this-&gt;app-&gt;bind(Transistor::class, function (Application $app) {
    return new Transistor($app-&gt;make(PodcastParser::class));
});
</code></pre><p>Note that we receive the container itself as an argument to the resolver. We can then use the container to resolve sub-dependencies of the object we are building.</p><p>As mentioned, you will typically be interacting with the container within service providers; however, if you would like to interact with the container outside of a service provider, you may do so via the <code>App</code> <a href="./facades">facade</a>:</p><pre><code>use App\\Services\\Transistor;
use Illuminate\\Contracts\\Foundation\\Application;
use Illuminate\\Support\\Facades\\App;

App::bind(Transistor::class, function (Application $app) {
    // ...
});
</code></pre><p>You may use the <code>bindIf</code> method to register a container binding only if a binding has not already been registered for the given type:</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">app</span><span class="token operator">-&gt;</span><span class="token function">bindIf</span><span class="token punctuation">(</span><span class="token class-name static-context">Transistor</span><span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token class-name type-declaration">Application</span> <span class="token variable">$app</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Transistor</span><span class="token punctuation">(</span><span class="token variable">$app</span><span class="token operator">-&gt;</span><span class="token function">make</span><span class="token punctuation">(</span><span class="token class-name static-context">PodcastParser</span><span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>Note</strong><br> There is no need to bind classes into the container if they do not depend on any interfaces. The container does not need to be instructed on how to build these objects, since it can automatically resolve these objects using reflection.</p></blockquote><p><a name="binding-a-singleton"></a></p><h4 id="binding-a-singleton" tabindex="-1"><a class="header-anchor" href="#binding-a-singleton" aria-hidden="true">#</a> Binding A Singleton</h4><p>The <code>singleton</code> method binds a class or interface into the container that should only be resolved one time. Once a singleton binding is resolved, the same object instance will be returned on subsequent calls into the container:</p><pre><code>use App\\Services\\Transistor;
use App\\Services\\PodcastParser;
use Illuminate\\Contracts\\Foundation\\Application;

$this-&gt;app-&gt;singleton(Transistor::class, function (Application $app) {
    return new Transistor($app-&gt;make(PodcastParser::class));
});
</code></pre><p>You may use the <code>singletonIf</code> method to register a singleton container binding only if a binding has not already been registered for the given type:</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">app</span><span class="token operator">-&gt;</span><span class="token function">singletonIf</span><span class="token punctuation">(</span><span class="token class-name static-context">Transistor</span><span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token class-name type-declaration">Application</span> <span class="token variable">$app</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Transistor</span><span class="token punctuation">(</span><span class="token variable">$app</span><span class="token operator">-&gt;</span><span class="token function">make</span><span class="token punctuation">(</span><span class="token class-name static-context">PodcastParser</span><span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="binding-scoped"></a></p><h4 id="binding-scoped-singletons" tabindex="-1"><a class="header-anchor" href="#binding-scoped-singletons" aria-hidden="true">#</a> Binding Scoped Singletons</h4><p>The <code>scoped</code> method binds a class or interface into the container that should only be resolved one time within a given Laravel request / job lifecycle. While this method is similar to the <code>singleton</code> method, instances registered using the <code>scoped</code> method will be flushed whenever the Laravel application starts a new &quot;lifecycle&quot;, such as when a <a href="./octane">Laravel Octane</a> worker processes a new request or when a Laravel <a href="./queues">queue worker</a> processes a new job:</p><pre><code>use App\\Services\\Transistor;
use App\\Services\\PodcastParser;
use Illuminate\\Contracts\\Foundation\\Application;

$this-&gt;app-&gt;scoped(Transistor::class, function (Application $app) {
    return new Transistor($app-&gt;make(PodcastParser::class));
});
</code></pre><p><a name="binding-instances"></a></p><h4 id="binding-instances" tabindex="-1"><a class="header-anchor" href="#binding-instances" aria-hidden="true">#</a> Binding Instances</h4><p>You may also bind an existing object instance into the container using the <code>instance</code> method. The given instance will always be returned on subsequent calls into the container:</p><pre><code>use App\\Services\\Transistor;
use App\\Services\\PodcastParser;

$service = new Transistor(new PodcastParser);

$this-&gt;app-&gt;instance(Transistor::class, $service);
</code></pre><p><a name="binding-interfaces-to-implementations"></a></p><h3 id="binding-interfaces-to-implementations" tabindex="-1"><a class="header-anchor" href="#binding-interfaces-to-implementations" aria-hidden="true">#</a> Binding Interfaces To Implementations</h3><p>A very powerful feature of the service container is its ability to bind an interface to a given implementation. For example, let&#39;s assume we have an <code>EventPusher</code> interface and a <code>RedisEventPusher</code> implementation. Once we have coded our <code>RedisEventPusher</code> implementation of this interface, we can register it with the service container like so:</p><pre><code>use App\\Contracts\\EventPusher;
use App\\Services\\RedisEventPusher;

$this-&gt;app-&gt;bind(EventPusher::class, RedisEventPusher::class);
</code></pre><p>This statement tells the container that it should inject the <code>RedisEventPusher</code> when a class needs an implementation of <code>EventPusher</code>. Now we can type-hint the <code>EventPusher</code> interface in the constructor of a class that is resolved by the container. Remember, controllers, event listeners, middleware, and various other types of classes within Laravel applications are always resolved using the container:</p><pre><code>use App\\Contracts\\EventPusher;

/**
 * Create a new class instance.
 */
public function __construct(
    protected EventPusher $pusher
) {}
</code></pre><p><a name="contextual-binding"></a></p><h3 id="contextual-binding" tabindex="-1"><a class="header-anchor" href="#contextual-binding" aria-hidden="true">#</a> Contextual Binding</h3><p>Sometimes you may have two classes that utilize the same interface, but you wish to inject different implementations into each class. For example, two controllers may depend on different implementations of the <code>Illuminate\\Contracts\\Filesystem\\Filesystem</code> <a href="./contracts">contract</a>. Laravel provides a simple, fluent interface for defining this behavior:</p><pre><code>use App\\Http\\Controllers\\PhotoController;
use App\\Http\\Controllers\\UploadController;
use App\\Http\\Controllers\\VideoController;
use Illuminate\\Contracts\\Filesystem\\Filesystem;
use Illuminate\\Support\\Facades\\Storage;

$this-&gt;app-&gt;when(PhotoController::class)
          -&gt;needs(Filesystem::class)
          -&gt;give(function () {
              return Storage::disk(&#39;local&#39;);
          });

$this-&gt;app-&gt;when([VideoController::class, UploadController::class])
          -&gt;needs(Filesystem::class)
          -&gt;give(function () {
              return Storage::disk(&#39;s3&#39;);
          });
</code></pre><p><a name="binding-primitives"></a></p><h3 id="binding-primitives" tabindex="-1"><a class="header-anchor" href="#binding-primitives" aria-hidden="true">#</a> Binding Primitives</h3><p>Sometimes you may have a class that receives some injected classes, but also needs an injected primitive value such as an integer. You may easily use contextual binding to inject any value your class may need:</p><pre><code>use App\\Http\\Controllers\\UserController;

$this-&gt;app-&gt;when(UserController::class)
          -&gt;needs(&#39;$variableName&#39;)
          -&gt;give($value);
</code></pre><p>Sometimes a class may depend on an array of <a href="#tagging">tagged</a> instances. Using the <code>giveTagged</code> method, you may easily inject all of the container bindings with that tag:</p><pre><code>$this-&gt;app-&gt;when(ReportAggregator::class)
    -&gt;needs(&#39;$reports&#39;)
    -&gt;giveTagged(&#39;reports&#39;);
</code></pre><p>If you need to inject a value from one of your application&#39;s configuration files, you may use the <code>giveConfig</code> method:</p><pre><code>$this-&gt;app-&gt;when(ReportAggregator::class)
    -&gt;needs(&#39;$timezone&#39;)
    -&gt;giveConfig(&#39;app.timezone&#39;);
</code></pre><p><a name="binding-typed-variadics"></a></p><h3 id="binding-typed-variadics" tabindex="-1"><a class="header-anchor" href="#binding-typed-variadics" aria-hidden="true">#</a> Binding Typed Variadics</h3><p>Occasionally, you may have a class that receives an array of typed objects using a variadic constructor argument:</p><pre><code>&lt;?php

use App\\Models\\Filter;
use App\\Services\\Logger;

class Firewall
{
    /**
     * The filter instances.
     *
     * @var array
     */
    protected $filters;

    /**
     * Create a new class instance.
     */
    public function __construct(
        protected Logger $logger,
        Filter ...$filters,
    ) {
        $this-&gt;filters = $filters;
    }
}
</code></pre><p>Using contextual binding, you may resolve this dependency by providing the <code>give</code> method with a closure that returns an array of resolved <code>Filter</code> instances:</p><pre><code>$this-&gt;app-&gt;when(Firewall::class)
          -&gt;needs(Filter::class)
          -&gt;give(function (Application $app) {
                return [
                    $app-&gt;make(NullFilter::class),
                    $app-&gt;make(ProfanityFilter::class),
                    $app-&gt;make(TooLongFilter::class),
                ];
          });
</code></pre><p>For convenience, you may also just provide an array of class names to be resolved by the container whenever <code>Firewall</code> needs <code>Filter</code> instances:</p><pre><code>$this-&gt;app-&gt;when(Firewall::class)
          -&gt;needs(Filter::class)
          -&gt;give([
              NullFilter::class,
              ProfanityFilter::class,
              TooLongFilter::class,
          ]);
</code></pre><p><a name="variadic-tag-dependencies"></a></p><h4 id="variadic-tag-dependencies" tabindex="-1"><a class="header-anchor" href="#variadic-tag-dependencies" aria-hidden="true">#</a> Variadic Tag Dependencies</h4><p>Sometimes a class may have a variadic dependency that is type-hinted as a given class (<code>Report ...$reports</code>). Using the <code>needs</code> and <code>giveTagged</code> methods, you may easily inject all of the container bindings with that <a href="#tagging">tag</a> for the given dependency:</p><pre><code>$this-&gt;app-&gt;when(ReportAggregator::class)
    -&gt;needs(Report::class)
    -&gt;giveTagged(&#39;reports&#39;);
</code></pre><p><a name="tagging"></a></p><h3 id="tagging" tabindex="-1"><a class="header-anchor" href="#tagging" aria-hidden="true">#</a> Tagging</h3><p>Occasionally, you may need to resolve all of a certain &quot;category&quot; of binding. For example, perhaps you are building a report analyzer that receives an array of many different <code>Report</code> interface implementations. After registering the <code>Report</code> implementations, you can assign them a tag using the <code>tag</code> method:</p><pre><code>$this-&gt;app-&gt;bind(CpuReport::class, function () {
    // ...
});

$this-&gt;app-&gt;bind(MemoryReport::class, function () {
    // ...
});

$this-&gt;app-&gt;tag([CpuReport::class, MemoryReport::class], &#39;reports&#39;);
</code></pre><p>Once the services have been tagged, you may easily resolve them all via the container&#39;s <code>tagged</code> method:</p><pre><code>$this-&gt;app-&gt;bind(ReportAnalyzer::class, function (Application $app) {
    return new ReportAnalyzer($app-&gt;tagged(&#39;reports&#39;));
});
</code></pre><p><a name="extending-bindings"></a></p><h3 id="extending-bindings" tabindex="-1"><a class="header-anchor" href="#extending-bindings" aria-hidden="true">#</a> Extending Bindings</h3><p>The <code>extend</code> method allows the modification of resolved services. For example, when a service is resolved, you may run additional code to decorate or configure the service. The <code>extend</code> method accepts two arguments, the service class you&#39;re extending and a closure that should return the modified service. The closure receives the service being resolved and the container instance:</p><pre><code>$this-&gt;app-&gt;extend(Service::class, function (Service $service, Application $app) {
    return new DecoratedService($service);
});
</code></pre><p><a name="resolving"></a></p><h2 id="resolving" tabindex="-1"><a class="header-anchor" href="#resolving" aria-hidden="true">#</a> Resolving</h2><p><a name="the-make-method"></a></p><h3 id="the-make-method" tabindex="-1"><a class="header-anchor" href="#the-make-method" aria-hidden="true">#</a> The <code>make</code> Method</h3><p>You may use the <code>make</code> method to resolve a class instance from the container. The <code>make</code> method accepts the name of the class or interface you wish to resolve:</p><pre><code>use App\\Services\\Transistor;

$transistor = $this-&gt;app-&gt;make(Transistor::class);
</code></pre><p>If some of your class&#39;s dependencies are not resolvable via the container, you may inject them by passing them as an associative array into the <code>makeWith</code> method. For example, we may manually pass the <code>$id</code> constructor argument required by the <code>Transistor</code> service:</p><pre><code>use App\\Services\\Transistor;

$transistor = $this-&gt;app-&gt;makeWith(Transistor::class, [&#39;id&#39; =&gt; 1]);
</code></pre><p>The <code>bound</code> method may be used to determine if a class or interface has been explicitly bound in the container:</p><pre><code>if ($this-&gt;app-&gt;bound(Transistor::class)) {
    // ...
}
</code></pre><p>If you are outside of a service provider in a location of your code that does not have access to the <code>$app</code> variable, you may use the <code>App</code> <a href="./facades">facade</a> or the <code>app</code> <a href="./helpers#method-app">helper</a> to resolve a class instance from the container:</p><pre><code>use App\\Services\\Transistor;
use Illuminate\\Support\\Facades\\App;

$transistor = App::make(Transistor::class);

$transistor = app(Transistor::class);
</code></pre><p>If you would like to have the Laravel container instance itself injected into a class that is being resolved by the container, you may type-hint the <code>Illuminate\\Container\\Container</code> class on your class&#39;s constructor:</p><pre><code>use Illuminate\\Container\\Container;

/**
 * Create a new class instance.
 */
public function __construct(
    protected Container $container
) {}
</code></pre><p><a name="automatic-injection"></a></p><h3 id="automatic-injection" tabindex="-1"><a class="header-anchor" href="#automatic-injection" aria-hidden="true">#</a> Automatic Injection</h3><p>Alternatively, and importantly, you may type-hint the dependency in the constructor of a class that is resolved by the container, including <a href="./controllers">controllers</a>, <a href="./events">event listeners</a>, <a href="./middleware">middleware</a>, and more. Additionally, you may type-hint dependencies in the <code>handle</code> method of <a href="./queues">queued jobs</a>. In practice, this is how most of your objects should be resolved by the container.</p><p>For example, you may type-hint a repository defined by your application in a controller&#39;s constructor. The repository will automatically be resolved and injected into the class:</p><pre><code>&lt;?php

namespace App\\Http\\Controllers;

use App\\Repositories\\UserRepository;
use App\\Models\\User;

class UserController extends Controller
{
    /**
     * Create a new controller instance.
     */
    public function __construct(
        protected UserRepository $users,
    ) {}

    /**
     * Show the user with the given ID.
     */
    public function show(string $id): User
    {
        $user = $this-&gt;users-&gt;findOrFail($id);

        return $user;
    }
}
</code></pre><p><a name="method-invocation-and-injection"></a></p><h2 id="method-invocation-injection" tabindex="-1"><a class="header-anchor" href="#method-invocation-injection" aria-hidden="true">#</a> Method Invocation &amp; Injection</h2><p>Sometimes you may wish to invoke a method on an object instance while allowing the container to automatically inject that method&#39;s dependencies. For example, given the following class:</p><pre><code>&lt;?php

namespace App;

use App\\Repositories\\UserRepository;

class UserReport
{
    /**
     * Generate a new user report.
     */
    public function generate(UserRepository $repository): array
    {
        return [
            // ...
        ];
    }
}
</code></pre><p>You may invoke the <code>generate</code> method via the container like so:</p><pre><code>use App\\UserReport;
use Illuminate\\Support\\Facades\\App;

$report = App::call([new UserReport, &#39;generate&#39;]);
</code></pre><p>The <code>call</code> method accepts any PHP callable. The container&#39;s <code>call</code> method may even be used to invoke a closure while automatically injecting its dependencies:</p><pre><code>use App\\Repositories\\UserRepository;
use Illuminate\\Support\\Facades\\App;

$result = App::call(function (UserRepository $repository) {
    // ...
});
</code></pre><p><a name="container-events"></a></p><h2 id="container-events" tabindex="-1"><a class="header-anchor" href="#container-events" aria-hidden="true">#</a> Container Events</h2><p>The service container fires an event each time it resolves an object. You may listen to this event using the <code>resolving</code> method:</p><pre><code>use App\\Services\\Transistor;
use Illuminate\\Contracts\\Foundation\\Application;

$this-&gt;app-&gt;resolving(Transistor::class, function (Transistor $transistor, Application $app) {
    // Called when container resolves objects of type &quot;Transistor&quot;...
});

$this-&gt;app-&gt;resolving(function (mixed $object, Application $app) {
    // Called when container resolves object of any type...
});
</code></pre><p>As you can see, the object being resolved will be passed to the callback, allowing you to set any additional properties on the object before it is given to its consumer.</p><p><a name="psr-11"></a></p><h2 id="psr-11" tabindex="-1"><a class="header-anchor" href="#psr-11" aria-hidden="true">#</a> PSR-11</h2>`,124),d={href:"https://github.com/php-fig/fig-standards/blob/master/accepted/PSR-11-container.md",target:"_blank",rel:"noopener noreferrer"},h=e("pre",null,[e("code",null,`use App\\Services\\Transistor;
use Psr\\Container\\ContainerInterface;

Route::get('/', function (ContainerInterface $container) {
    $service = $container->get(Transistor::class);

    // ...
});
`)],-1),u=e("p",null,[n("An exception is thrown if the given identifier can't be resolved. The exception will be an instance of "),e("code",null,"Psr\\Container\\NotFoundExceptionInterface"),n(" if the identifier was never bound. If the identifier was bound but was unable to be resolved, an instance of "),e("code",null,"Psr\\Container\\ContainerExceptionInterface"),n(" will be thrown.")],-1);function g(m,v){const a=s("ExternalLinkIcon");return o(),i("div",null,[l,e("p",null,[n("Laravel's service container implements the "),e("a",d,[n("PSR-11"),r(a)]),n(" interface. Therefore, you may type-hint the PSR-11 container interface to obtain an instance of the Laravel container:")]),h,u])}const b=t(p,[["render",g],["__file","container.html.vue"]]);export{b as default};
