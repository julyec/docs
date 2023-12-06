import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o as p,c as o,b as e,d as n,e as r,a as i}from"./app-06635a3b.js";const c={},l=i(`<h1 id="服务容器" tabindex="-1"><a class="header-anchor" href="#服务容器" aria-hidden="true">#</a> 服务容器</h1><ul><li><a href="#introduction">简介</a><ul><li><a href="#zero-configuration-resolution">零配置解决方案</a></li><li><a href="#when-to-use-the-container">何时使用容器</a></li></ul></li><li><a href="#binding">绑定</a><ul><li><a href="#binding-basics">绑定基础</a></li><li><a href="#binding-interfaces-to-implementations">接口到实现的绑定</a></li><li><a href="#contextual-binding">上下文绑定</a></li><li><a href="#binding-primitives">绑定原语</a></li><li><a href="#binding-typed-variadics">绑定变长参数类型</a></li><li><a href="#tagging">标签</a></li><li><a href="#extending-bindings">继承绑定</a></li></ul></li><li><a href="#resolving">解析</a><ul><li><a href="#the-make-method">Make 方法</a></li><li><a href="#automatic-injection">自动注入</a></li></ul></li><li><a href="#method-invocation-and-injection">方法调用 &amp; 注入</a></li><li><a href="#container-events">容器事件</a></li><li><a href="#psr-11">PSR-11</a></li></ul><p><a name="introduction"></a></p><h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h2><p>Laravel 服务容器是一个用于管理类依赖以及实现依赖注入的强有力工具。依赖注入这个名词表面看起来花哨，实质上是指：通过构造函数，或者某些情况下通过「setter」方法将类依赖「注入」到类中。</p><p>我们来看一个简单的例子：</p><pre><code>&lt;?php

namespace App\\Http\\Controllers;

use App\\Http\\Controllers\\Controller;
use App\\Repositories\\UserRepository;
use App\\Models\\User;
use Illuminate\\View\\View;

class UserController extends Controller
{
    /**
     * 创建一个新的控制器实例
     */
    public function __construct(
        protected UserRepository $users,
    ) {}

    /**
     * 展示给定用户的信息
     */
    public function show(string $id): View
    {
        $user = $this-&gt;users-&gt;find($id);

        return view(&#39;user.profile&#39;, [&#39;user&#39; =&gt; $user]);
    }
}
</code></pre><p>在此示例中，<code>UserController</code> 需要从数据源中检索用户。 因此，我们将 <strong>注入</strong> 一个能够检索用户的服务。 在这种情况下，我们的 <code>UserRepository</code> 很可能使用 <a href="./eloquent">Eloquent</a> 从数据库中检索用户信息。 然而，由于存储库是注入的，我们可以很容易地用另一个实现替换它。 这种方式的便利之处也体现在：当需要为应用编写测试的时候，我们也可以很轻松地 「模拟」 或者创建一个 <code>UserRepository</code> 的伪实现来操作。</p><p>深入理解服务容器，对于构建一个强大的、大型的应用，以及对 Laravel 核心本身的贡献都是至关重要的。</p><p><a name="zero-configuration-resolution"></a></p><h3 id="零配置解决方案" tabindex="-1"><a class="header-anchor" href="#零配置解决方案" aria-hidden="true">#</a> 零配置解决方案</h3><p>如果一个类没有依赖项或只依赖于其他具体类（而不是接口），则不需要指定容器如何解析该类。例如，你可以将以下代码放在 <code>routes/web.php</code> 文件中：</p><pre><code>&lt;?php

class Service
{
    // ...
}

Route::get(&#39;/&#39;, function (Service $service) {
    die(get_class($service));
});
</code></pre><p>在这个例子中，点击应用程序的 <code>/</code> 路由将自动解析 <code>Service</code> 类并将其注入到路由的处理程序中。 这是一个有趣的改变。 这意味着你可以开发应用程序并利用依赖注入，而不必担心臃肿的配置文件。</p><p>很荣幸的通知你，在构建 Laravel 应用程序时，你将要编写的许多类都可以通过容器自动接收它们的依赖关系，包括 <a href="./controllers">控制器</a>、 <a href="./events">事件监听器</a>、 <a href="./middleware">中间件</a> 等等。 此外，你可以在 <a href="./queues">队列系统</a> 的 <code>handle</code> 方法中键入提示依赖项。 一旦你尝到了自动和零配置依赖注入的力量，你就会觉得没有它是不可以开发的。</p><p><a name="when-to-use-the-container"></a></p><h3 id="何时使用容器" tabindex="-1"><a class="header-anchor" href="#何时使用容器" aria-hidden="true">#</a> 何时使用容器</h3><p>得益于零配置解决方案，通常情况下，你只需要在路由、控制器、事件侦听器和其他地方键入提示依赖项，而不必手动与容器打交道。例如，可以在路由定义中键入 <code>Illuminate\\Http\\Request</code> 对象，以便轻松访问当前请求的 Request 类。尽管我们不必与容器交互来编写此代码，但它在幕后管理着这些依赖项的注入：</p><pre><code>use Illuminate\\Http\\Request;

Route::get(&#39;/&#39;, function (Request $request) {
    // ...
});
</code></pre><p>在许多情况下，由于自动依赖注入和 <a href="./facades">facades</a> ，你在构建 Laravel 应用程序，而无需手动绑定或解析容器中的任何内容。 <strong>那么，你什么时候会手动与容器打交道呢？</strong> 让我们来看看下面两种情况。</p><p>首先，如果你编写了一个实现接口的类，并希望在路由或类的构造函数上键入该接口的提示，则必须 <a href="#binding-interfaces-to-implementations">告诉容器如何解析该接口</a>。第二，如果你正在 <a href="./packages">编写一个 Laravel 包</a> 计划与其他 Laravel 开发人员共享，那么你可能需要将包的服务绑定到容器中。</p><p><a name="binding"></a></p><h2 id="绑定" tabindex="-1"><a class="header-anchor" href="#绑定" aria-hidden="true">#</a> 绑定</h2><p><a name="binding-basics"></a></p><h3 id="基础绑定" tabindex="-1"><a class="header-anchor" href="#基础绑定" aria-hidden="true">#</a> 基础绑定</h3><p><a name="simple-bindings"></a></p><h4 id="简单绑定" tabindex="-1"><a class="header-anchor" href="#简单绑定" aria-hidden="true">#</a> 简单绑定</h4><p>几乎所有的服务容器绑定都会在 <a href="./providers">服务提供者</a> 中注册，下面示例中的大多数将演示如何在该上下文（服务提供者）中使用容器。</p><p>在服务提供者中，你总是可以通过 <code>$this-&gt;app</code> 属性访问容器。我们可以使用 <code>bind</code> 方法注册一个绑定，将我们希望注册的类或接口名称与返回类实例的闭包一起传递:</p><pre><code>use App\\Services\\Transistor;
use App\\Services\\PodcastParser;
use Illuminate\\Contracts\\Foundation\\Application;

$this-&gt;app-&gt;bind(Transistor::class, function (Application $app) {
    return new Transistor($app-&gt;make(PodcastParser::class));
});
</code></pre><p>注意，我们接受容器本身作为解析器的参数。然后，我们可以使用容器来解析正在构建的对象的子依赖。</p><p>如前所述，你通常会在服务提供者内部与容器进行交互；但是，如果你希望在服务提供者外部与容器进行交互，则可以通过 <code>App</code> <a href="./facades">facade</a> 进行:</p><pre><code>use App\\Services\\Transistor;
use Illuminate\\Contracts\\Foundation\\Application;
use Illuminate\\Support\\Facades\\App;

App::bind(Transistor::class, function (Application $app) {
    // ...
});
</code></pre><blockquote><p><strong>技巧</strong> 如果类不依赖于任何接口，则不需要将它们绑定到容器中。不需要指示容器如何构建这些对象，因为它可以使用反射自动解析这些对象。</p></blockquote><p><a name="binding-a-singleton"></a></p><h4 id="单例的绑定" tabindex="-1"><a class="header-anchor" href="#单例的绑定" aria-hidden="true">#</a> 单例的绑定</h4><p><code>singleton</code> 方法将类或接口绑定到只应解析一次的容器中。解析单例绑定后，后续调用容器时将返回相同的对象实例：</p><pre><code>use App\\Services\\Transistor;
use App\\Services\\PodcastParser;
use Illuminate\\Contracts\\Foundation\\Application;

$this-&gt;app-&gt;singleton(Transistor::class, function (Application $app) {
    return new Transistor($app-&gt;make(PodcastParser::class));
});
</code></pre><p><a name="binding-scoped"></a></p><h4 id="绑定作用域单例" tabindex="-1"><a class="header-anchor" href="#绑定作用域单例" aria-hidden="true">#</a> 绑定作用域单例</h4><p><code>scoped</code> 方法将一个类或接口绑定到容器中，该容器只应在给定的 Laravel 请求 / 作业生命周期内解析一次。虽然该方法与 <code>singleton</code> 方法类似，但是当 Laravel 应用程序开始一个新的「生命周期」时， 使用 <code>scoped</code> 方法注册的实例 将被刷新，例如当 <a href="./octane">Laravel Octane</a> 工作者处理新请求或 Laravel <a href="./queues">队列系统</a>处理新作业时：</p><pre><code>use App\\Services\\Transistor;
use App\\Services\\PodcastParser;
use Illuminate\\Contracts\\Foundation\\Application;

$this-&gt;app-&gt;scoped(Transistor::class, function (Application $app) {
    return new Transistor($app-&gt;make(PodcastParser::class));
});
</code></pre><p><a name="binding-instances"></a></p><h4 id="绑定实例" tabindex="-1"><a class="header-anchor" href="#绑定实例" aria-hidden="true">#</a> 绑定实例</h4><p>你也可以使 <code>instance</code> 方法将一个现有的对象实例绑定到容器中。给定的实例总会在后续对容器的调用中返回:</p><pre><code>use App\\Services\\Transistor;
use App\\Services\\PodcastParser;

$service = new Transistor(new PodcastParser);

$this-&gt;app-&gt;instance(Transistor::class, $service);
</code></pre><p><a name="binding-interfaces-to-implementations"></a></p><h3 id="将接口绑定实例" tabindex="-1"><a class="header-anchor" href="#将接口绑定实例" aria-hidden="true">#</a> 将接口绑定实例</h3><p>服务容器的一个非常强大的特性是它能够将接口绑定到给定的实例。例如，我们假设有一个 <code>EventPusher</code> 接口和一个 <code>RedisEventPusher</code> 实例。一旦我们编写了这个接口的 <code>RedisEventPusher</code> 实例，我们就可以像这样把它注册到服务容器中:</p><pre><code>use App\\Contracts\\EventPusher;
use App\\Services\\RedisEventPusher;

$this-&gt;app-&gt;bind(EventPusher::class, RedisEventPusher::class);
</code></pre><p>这条语句告诉容器，当类需要 <code>EventPusher</code> 的实例时，它应该注入 <code>RedisEventPusher</code>。现在我们可以在由容器解析的类的构造函数中输入 <code>EventPusher</code> 接口。记住，控制器、事件监听器、中间件和Laravel应用程序中的各种其他类型的类总是使用容器进行解析的:</p><pre><code>use App\\Contracts\\EventPusher;

/**
 * Create a new class instance.
 */
public function __construct(
    protected EventPusher $pusher
) {}
</code></pre><p><a name="contextual-binding"></a></p><h3 id="上下文绑定" tabindex="-1"><a class="header-anchor" href="#上下文绑定" aria-hidden="true">#</a> 上下文绑定</h3><blockquote><p>译者注：所谓「上下文绑定」就是根据上下文进行动态的绑定，指依赖的上下文关系。</p></blockquote><p>有时你可能有两个类使用相同的接口，但是你希望将不同的实现分别注入到各自的类中。例如，两个控制器可能依赖于 <code>Illuminate\\Contracts\\Filesystem\\Filesystem</code> <a href="./contracts">契约</a> 的不同实现。Laravel 提供了一个简单流畅的方式来定义这种行为：</p><pre><code>use App\\Http\\Controllers\\PhotoController;
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
</code></pre><p><a name="binding-primitives"></a></p><h3 id="绑定原语" tabindex="-1"><a class="header-anchor" href="#绑定原语" aria-hidden="true">#</a> 绑定原语</h3><p>有时，你可能有一个接收一些注入类的类，但也需要一个注入的原语值，如整数。你可以很容易地使用上下文绑定来，注入类可能需要的任何值:</p><pre><code>use App\\Http\\Controllers\\UserController;

$this-&gt;app-&gt;when(UserController::class)
          -&gt;needs(&#39;$variableName&#39;)
          -&gt;give($value);
</code></pre><p>有时，类可能依赖于 <a href="#tagging">标签</a> 实例的数组。使用 <code>giveTagged</code> 方法，你可以很容易地注入所有带有该标签的容器绑定:</p><pre><code>$this-&gt;app-&gt;when(ReportAggregator::class)
    -&gt;needs(&#39;$reports&#39;)
    -&gt;giveTagged(&#39;reports&#39;);
</code></pre><p>如果你需要从应用程序的某个配置文件中注入一个值，你可以使用 <code>giveConfig</code> 方法:</p><pre><code>$this-&gt;app-&gt;when(ReportAggregator::class)
    -&gt;needs(&#39;$timezone&#39;)
    -&gt;giveConfig(&#39;app.timezone&#39;);
</code></pre><p><a name="binding-typed-variadics"></a></p><h3 id="绑定变长参数类型" tabindex="-1"><a class="header-anchor" href="#绑定变长参数类型" aria-hidden="true">#</a> 绑定变长参数类型</h3><p>有时，你可能有一个使用可变构造函数参数接收类型对象数组的类：</p><pre><code>&lt;?php

use App\\Models\\Filter;
use App\\Services\\Logger;

class Firewall
{
    /**
     * 过滤器实例组
     *
     * @var array
     */
    protected $filters;

    /**
     * 创建一个类实例
     */
    public function __construct(
        protected Logger $logger,
        Filter ...$filters,
    ) {
        $this-&gt;filters = $filters;
    }
}
</code></pre><p>使用上下文绑定，你可以通过提供 <code>give</code> 方法一个闭包来解决这个依赖，该闭包返回一个已解析的 <code>Filter</code>实例数组：</p><pre><code>$this-&gt;app-&gt;when(Firewall::class)
          -&gt;needs(Filter::class)
          -&gt;give(function (Application $app) {
                return [
                    $app-&gt;make(NullFilter::class),
                    $app-&gt;make(ProfanityFilter::class),
                    $app-&gt;make(TooLongFilter::class),
                ];
          });
</code></pre><p>为方便起见，你也可以只提供一个类名数组，以便在 <code>Firewall</code> 需要 <code>Filter</code> 实例时由容器解析:</p><pre><code>$this-&gt;app-&gt;when(Firewall::class)
          -&gt;needs(Filter::class)
          -&gt;give([
              NullFilter::class,
              ProfanityFilter::class,
              TooLongFilter::class,
          ]);
</code></pre><p><a name="variadic-tag-dependencies"></a></p><h4 id="变长参数的关联标签" tabindex="-1"><a class="header-anchor" href="#变长参数的关联标签" aria-hidden="true">#</a> 变长参数的关联标签</h4><p>有时，一个类可能具有类型提示为给定类的可变依赖项（<code>Report ...$reports</code>)）。使用 <code>needs</code> 和 <code>giveTagged</code> 方法，你可以轻松地为给定依赖项注入所有带有该 <a href="#tagging">标签</a> 的所有容器绑定：</p><pre><code>$this-&gt;app-&gt;when(ReportAggregator::class)
    -&gt;needs(Report::class)
    -&gt;giveTagged(&#39;reports&#39;);
</code></pre><p><a name="tagging"></a></p><h3 id="标签" tabindex="-1"><a class="header-anchor" href="#标签" aria-hidden="true">#</a> 标签</h3><p>有时，你可能需要解决所有特定「类别」的绑定。例如，也许你正在构建一个报告分析器，它接收许多不同的 <code>Report</code> 接口实现的数组。注册 <code>Report</code> 实现后，你可以使用 <code>tag</code> 方法为它们分配标签：</p><pre><code>$this-&gt;app-&gt;bind(CpuReport::class, function () {
    // ...
});

$this-&gt;app-&gt;bind(MemoryReport::class, function () {
    // ...
});

$this-&gt;app-&gt;tag([CpuReport::class, MemoryReport::class], &#39;reports&#39;);
</code></pre><p>一旦服务被打上标签，你就可以通过容器的 <code>tagged</code> 方法轻松地解析它们：</p><pre><code>$this-&gt;app-&gt;bind(ReportAnalyzer::class, function (Application $app) {
    return new ReportAnalyzer($app-&gt;tagged(&#39;reports&#39;));
});
</code></pre><p><a name="extending-bindings"></a></p><h3 id="继承绑定" tabindex="-1"><a class="header-anchor" href="#继承绑定" aria-hidden="true">#</a> 继承绑定</h3><p><code>extend</code> 方法允许修改已解析的服务。例如，解析服务时，可以运行其他代码来修饰或配置服务。<code>extend</code> 方法接受闭包，该闭包应返回修改后的服务作为其唯一参数。闭包接收正在解析的服务和容器实例：</p><pre><code>$this-&gt;app-&gt;extend(Service::class, function (Service $service, Application $app) {
    return new DecoratedService($service);
});
</code></pre><p><a name="resolving"></a></p><h2 id="解析" tabindex="-1"><a class="header-anchor" href="#解析" aria-hidden="true">#</a> 解析</h2><p><a name="the-make-method"></a></p><h3 id="make-方法" tabindex="-1"><a class="header-anchor" href="#make-方法" aria-hidden="true">#</a> <code>make</code> 方法</h3><p>你可以使用 <code>make</code> 方法从容器中解析出一个类实例。<code>make</code> 方法接受你要解析的类或接口的名称：</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">App<span class="token punctuation">\\</span>Services<span class="token punctuation">\\</span>Transistor</span><span class="token punctuation">;</span>

<span class="token variable">$transistor</span> <span class="token operator">=</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">app</span><span class="token operator">-&gt;</span><span class="token function">make</span><span class="token punctuation">(</span><span class="token class-name static-context">Transistor</span><span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果你的某些类依赖关系无法通过容器解析，请通过将它们作为关联数组传递到 <code>makeWith</code> 方法中来注入它们。例如，我们可以手动传递 <code>Transistor</code> 服务所需的 <code>$id</code> 构造函数参数：</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">App<span class="token punctuation">\\</span>Services<span class="token punctuation">\\</span>Transistor</span><span class="token punctuation">;</span>

<span class="token variable">$transistor</span> <span class="token operator">=</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">app</span><span class="token operator">-&gt;</span><span class="token function">makeWith</span><span class="token punctuation">(</span><span class="token class-name static-context">Transistor</span><span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;id&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果你不在服务提供程序外部的代码位置中，并且没有访问 <code>$app</code> 变量的权限，你可以使用 <code>App</code> <a href="./facades">facade</a> 或 <code>app</code> <a href="./helpers#method-app">helper</a> 来从容器中解析出一个类实例：</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">App<span class="token punctuation">\\</span>Services<span class="token punctuation">\\</span>Transistor</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Support<span class="token punctuation">\\</span>Facades<span class="token punctuation">\\</span>App</span><span class="token punctuation">;</span>

<span class="token variable">$transistor</span> <span class="token operator">=</span> <span class="token class-name static-context">App</span><span class="token operator">::</span><span class="token function">make</span><span class="token punctuation">(</span><span class="token class-name static-context">Transistor</span><span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token variable">$transistor</span> <span class="token operator">=</span> <span class="token function">app</span><span class="token punctuation">(</span><span class="token class-name static-context">Transistor</span><span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果你想将 Laravel 容器实例本身注入到由容器解析的类中，你可以在你的类的构造函数上进行类型提示，指定 <code>Illuminate\\Container\\Container</code> 类型：</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Container<span class="token punctuation">\\</span>Container</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * 创建一个新的类实例。
 */</span>
<span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">__construct</span><span class="token punctuation">(</span> <span class="token keyword">protected</span> <span class="token class-name type-declaration">Container</span> <span class="token variable">$container</span> <span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="自动注入" tabindex="-1"><a class="header-anchor" href="#自动注入" aria-hidden="true">#</a> 自动注入</h3><p>或者，你可以在由容器解析的类的构造函数中类型提示依赖项，包括 <a href="./controllers">控制器</a>、<a href="./events">事件监听器</a>、<a href="./middleware">中间件</a> 等。此外，你可以在 <a href="./queues">队列作业</a> 的 <code>handle</code> 方法中类型提示依赖项。在实践中，这是大多数对象应该由容器解析的方式。</p><p>例如，你可以在控制器的构造函数中添加一个 repository 的类型提示，然后这个 repository 将会被自动解析并注入类中：</p><pre><code>&lt;?php

namespace App\\Http\\Controllers;

use App\\Repositories\\UserRepository;
use App\\Models\\User;

class UserController extends Controller
{
    /**
     * 创建一个控制器实例
     */
    public function __construct(
        protected UserRepository $users,
    ) {}

    /**
     * 使用给定的 ID 显示 user
     */
    public function show(string $id): User
    {
        $user = $this-&gt;users-&gt;findOrFail($id);

        return $user;
    }
}
</code></pre><p><a name="method-invocation-and-injection"></a></p><h2 id="方法调用和注入" tabindex="-1"><a class="header-anchor" href="#方法调用和注入" aria-hidden="true">#</a> 方法调用和注入</h2><p>有时你可能希望调用对象实例上的方法，同时允许容器自动注入该方法的依赖项。例如，给定以下类：</p><pre><code>&lt;?php

namespace App;

use App\\Repositories\\UserRepository;

class UserReport
{
    /**
     * 生成新的用户报告
     */
    public function generate(UserRepository $repository): array
    {
        return [
            // ...
        ];
    }
}
</code></pre><p>你可以通过容器调用 <code>generate</code> 方法，如下所示：</p><pre><code>use App\\UserReport;
use Illuminate\\Support\\Facades\\App;

$report = App::call([new UserReport, &#39;generate&#39;]);
</code></pre><p><code>call</code> 方法接受任何可调用的 PHP 方法。容器的 <code>call</code> 方法甚至可以用于调用闭包，同时自动注入其依赖项：</p><pre><code>use App\\Repositories\\UserRepository;
use Illuminate\\Support\\Facades\\App;

$result = App::call(function (UserRepository $repository) {
    // ...
});
</code></pre><p><a name="container-events"></a></p><h2 id="容器事件" tabindex="-1"><a class="header-anchor" href="#容器事件" aria-hidden="true">#</a> 容器事件</h2><p>服务容器每次解析对象时都会触发一个事件。你可以使用 <code>resolving</code> 方法监听此事件：</p><pre><code>use App\\Services\\Transistor;
use Illuminate\\Contracts\\Foundation\\Application;

$this-&gt;app-&gt;resolving(Transistor::class, function (Transistor $transistor, Application $app) {
    // 当容器解析「Transistor」类型的对象时调用...
});

$this-&gt;app-&gt;resolving(function (mixed $object, Application $app) {
    // 当容器解析任何类型的对象时调用...
});
</code></pre><p>如你所见，正在解析的对象将被传递给回调，从而允许你在对象提供给其使用者之前设置对象的任何其他属性。</p><p><a name="psr-11"></a></p><h2 id="psr-11" tabindex="-1"><a class="header-anchor" href="#psr-11" aria-hidden="true">#</a> PSR-11</h2>`,118),d={href:"https://github.com/php-fig/fig-standards/blob/master/accepted/PSR-11-container.",target:"_blank",rel:"noopener noreferrer"},u=e("pre",null,[e("code",null,`use App\\Services\\Transistor;
use Psr\\Container\\ContainerInterface;

Route::get('/', function (ContainerInterface $container) {
    $service = $container->get(Transistor::class);

    // ...
});
`)],-1),h=e("p",null,[n("如果无法解析给定的标识符，将引发异常。如果标识符从未绑定，则异常将是"),e("code",null,"Psr\\Container\\NotFoundExceptionInterface"),n(" 的实例。如果标识符已绑定但无法解析，则将抛出"),e("code",null,"Psr\\Container\\ContainerExceptionInterface"),n(" 的实例。")],-1);function g(v,m){const a=t("ExternalLinkIcon");return p(),o("div",null,[l,e("p",null,[n("Laravel 的服务容器实现了 "),e("a",d,[n("PSR-11"),r(a)]),n(" 接口。因此，你可以添加 PSR-11 容器接口的类型提示来获取 Laravel 容器的实例：")]),u,h])}const b=s(c,[["render",g],["__file","container.html.vue"]]);export{b as default};
