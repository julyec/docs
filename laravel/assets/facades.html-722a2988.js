import{_ as l}from"./plugin-vue_export-helper-c27b6911.js";import{r as s,o,c as r,b as e,d as t,e as a,a as c}from"./app-06635a3b.js";const i={},d=c(`<h1 id="门面" tabindex="-1"><a class="header-anchor" href="#门面" aria-hidden="true">#</a> 门面</h1><ul><li><a href="#introduction">简介</a></li><li><a href="#when-to-use-facades">何时使用 Facades</a><ul><li><a href="#facades-vs-dependency-injection">Facades Vs 依赖注入</a></li><li><a href="#facades-vs-helper-functions">Facades Vs 助手函数</a></li></ul></li><li><a href="#how-facades-work">Facades 工作原理</a></li><li><a href="#real-time-facades">实时 Facades</a></li><li><a href="#facade-class-reference">Facade 参考类</a></li></ul><p><a name="introduction"></a></p><h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h2><p>在整个 Laravel 文档中，你将看到通过 Facades 与 Laravel 特性交互的代码示例。Facades 为应用程序的<a href="./container">服务容器</a>中可用的类提供了「静态代理」。在 Laravel 这艘船上有许多 Facades，提供了几乎所有 Laravel 的特征。</p><p>Laravel Facades 充当服务容器中底层类的「静态代理」，提供简洁、富有表现力的好处，同时保持比传统静态方法更多的可测试性和灵活性。如果你不完全理解引擎盖下的 Facades 是如何工作的，那也没问题，跟着流程走，继续学习 Laravel。</p><p>Laravel 的所有 Facades 都在<code>Illuminate\\Support\\Facades</code>命名空间中定义。因此，我们可以很容易地访问这样一个 Facades ：</p><pre><code>use Illuminate\\Support\\Facades\\Cache;
use Illuminate\\Support\\Facades\\Route;

Route::get(&#39;/cache&#39;, function () {
    return Cache::get(&#39;key&#39;);
});
</code></pre><p>在整个 Laravel 文档中，许多示例将使用 Facades 来演示框架的各种特性。</p><p><a name="helper-functions"></a></p><h4 id="辅助函数" tabindex="-1"><a class="header-anchor" href="#辅助函数" aria-hidden="true">#</a> 辅助函数</h4><p>为了补充 Facades，Laravel 提供了各种全局 「助手函数」，使它更容易与常见的 Laravel 功能进行交互。可以与之交互的一些常用助手函数有<code>view</code>, <code>response</code>, <code>url</code>, <code>config</code>等。Laravel 提供的每个助手函数都有相应的特性；但是，在专用的<a href="./helpers">辅助函数文档</a>中有一个完整的列表。</p><p>例如，我们可以使用 <code>response</code> 函数而不是 <code>Illuminate\\Support\\Facades\\Response</code> Facade 生成 JSON 响应。由于「助手函数」是全局可用的，因此无需导入任何类即可使用它们：</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Support<span class="token punctuation">\\</span>Facades<span class="token punctuation">\\</span>Response</span><span class="token punctuation">;</span>

<span class="token class-name static-context">Route</span><span class="token operator">::</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;/users&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token class-name static-context">Response</span><span class="token operator">::</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
        <span class="token comment">// ...</span>
    <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token class-name static-context">Route</span><span class="token operator">::</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;/users&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">response</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
        <span class="token comment">// ...</span>
    <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="when-to-use-facades"></a></p><h2 id="何时使用-facades" tabindex="-1"><a class="header-anchor" href="#何时使用-facades" aria-hidden="true">#</a> 何时使用 Facades</h2><p>Facades 有很多好处。它们提供了简洁、易记的语法，让你可以使用 Laravel 的功能而不必记住必须手动注入或配置的长类名。此外，由于它们独特地使用了 PHP 的动态方法，因此它们易于测试。</p><p>然而，在使用 Facades 时必须小心。Facades 的主要危险是类的「作用域泄漏」。由于 Facades 如此易于使用并且不需要注入，因此让你的类继续增长并在单个类中使用许多 Facades 可能很容易。使用依赖注入，这种潜在问题通过构造函数变得明显，告诉你的类过于庞大。因此，在使用 Facades 时，需要特别关注类的大小，以便它的责任范围保持狭窄。如果你的类变得太大，请考虑将它拆分成多个较小的类。</p><p><a name="facades-vs-dependency-injection"></a></p><h3 id="facades-与-依赖注入" tabindex="-1"><a class="header-anchor" href="#facades-与-依赖注入" aria-hidden="true">#</a> Facades 与 依赖注入</h3><p>依赖注入的主要好处之一是能够替换注入类的实现。这在测试期间很有用，因为你可以注入一个模拟或存根并断言各种方法是否在存根上调用了。</p><p>通常，真正的静态方法是不可能 mock 或 stub 的。无论如何，由于 Facades 使用动态方法对服务容器中解析出来的对象方法的调用进行了代理， 我们也可以像测试注入类实例一样测试 Facades。比如，像下面的路由：</p><pre><code>use Illuminate\\Support\\Facades\\Cache;

Route::get(&#39;/cache&#39;, function () {
    return Cache::get(&#39;key&#39;);
});
</code></pre><p>使用 Laravel 的 Facade 测试方法，我们可以编写以下测试用例来验证是否 Cache::get 使用我们期望的参数调用了该方法：</p><pre><code>use Illuminate\\Support\\Facades\\Cache;

/**
 *  一个基础功能的测试用例
 */
public function test_basic_example(): void
{
    Cache::shouldReceive(&#39;get&#39;)
         -&gt;with(&#39;key&#39;)
         -&gt;andReturn(&#39;value&#39;);

    $response = $this-&gt;get(&#39;/cache&#39;);

    $response-&gt;assertSee(&#39;value&#39;);
}
</code></pre><p><a name="facades-vs-helper-functions"></a></p><h3 id="facades-vs-助手函数" tabindex="-1"><a class="header-anchor" href="#facades-vs-助手函数" aria-hidden="true">#</a> Facades Vs 助手函数</h3><p>除了 Facades，Laravel 还包含各种「辅助函数」来实现这些常用功能，比如生成视图、触发事件、任务调度或者发送 HTTP 响应。许多辅助函数都有与之对应的 Facade。例如，下面这个 Facades 和辅助函数的作用是一样的：</p><pre><code>return Illuminate\\Support\\Facades\\View::make(&#39;profile&#39;);

return view(&#39;profile&#39;);
</code></pre><p>Facades 和辅助函数之间没有实际的区别。 当你使用辅助函数时，你可以像测试相应的 Facade 那样进行测试。例如，下面的路由：</p><pre><code>Route::get(&#39;/cache&#39;, function () {
    return cache(&#39;key&#39;);
});
</code></pre><p>在底层实现，辅助函数 cache 实际是调用 Cache 这个 Facade 的 get 方法。因此，尽管我们使用的是辅助函数，我们依然可以带上我们期望的参数编写下面的测试代码来验证该方法：</p><pre><code>use Illuminate\\Support\\Facades\\Cache;

/**
 * 一个基础功能的测试用例
 */
public function test_basic_example(): void
{
    Cache::shouldReceive(&#39;get&#39;)
         -&gt;with(&#39;key&#39;)
         -&gt;andReturn(&#39;value&#39;);

    $response = $this-&gt;get(&#39;/cache&#39;);

    $response-&gt;assertSee(&#39;value&#39;);
}
</code></pre><p><a name="how-facades-work"></a></p><h2 id="facades-工作原理" tabindex="-1"><a class="header-anchor" href="#facades-工作原理" aria-hidden="true">#</a> Facades 工作原理</h2><p>在 Laravel 应用程序中，Facades 是一个提供从容器访问对象的类。完成这项工作的部分属于 <code>Facade</code> 类。Laravel 的 Facade、以及你创建的任何自定义 Facade，都继承自 <code>Illuminate\\Support\\Facades\\Facade</code> 类。</p><p><code>Facade</code> 基类使用 <code>__callStatic()</code> 魔术方法将来自 Facade 的调用推迟到从容器解析出对象后。在下面的示例中，调用了 Laravel 缓存系统。看一眼这段代码，人们可能会假设静态的 <code>get</code> 方法正在 <code>Cache</code> 类上被调用：</p><pre><code>&lt;?php

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
</code></pre><p>请注意，在文件顶部附近，我们正在「导入」<code>Cache</code> Facade。这个 Facade 作为访问 <code>Illuminate\\Contracts\\Cache\\Factory</code> 接口底层实现的代理。我们使用 Facade 进行的任何调用都将传递给 Laravel 缓存服务的底层实例。</p><p>如果我们查看 <code>Illuminate\\Support\\Facades\\Cache</code> 类，你会发现没有静态方法 <code>get</code>：</p><pre><code>class Cache extends Facade
{
    /**
     * Get the registered name of the component.
     */
    protected static function getFacadeAccessor(): string
    {
        return &#39;cache&#39;;
    }
}
</code></pre><p>相反，<code>Cache</code> Facade 继承了 <code>Facade</code> 基类并定义了 <code>getFacadeAccessor()</code> 方法。此方法的工作是返回服务容器绑定的名称。当用户引用 <code>Cache</code> Facade 上的任何静态方法时，Laravel 会从 <a href="./container">服务容器</a> 中解析 <code>cache</code> 绑定并运行该对象请求的方法（在这个例子中就是 <code>get</code> 方法）</p><p><a name="real-time-facades"></a></p><h2 id="实时-facades" tabindex="-1"><a class="header-anchor" href="#实时-facades" aria-hidden="true">#</a> 实时 Facades</h2><p>使用实时 Facade, 你可以将应用程序中的任何类视为 Facade。为了说明这是如何使用的， 让我们首先看一下一些不使用实时 Facade 的代码。例如，假设我们的 <code>Podcast</code> 模型有一个 <code>publish 方法</code>。 但是，为了发布 <code>Podcast</code>，我们需要注入一个 <code>Publisher</code> 实例：</p><pre><code>&lt;?php

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
</code></pre><p>将 publisher 的实现注入到该方法中，我们可以轻松地测试这种方法，因为我们可以模拟注入的 publisher 。但是，它要求我们每次调用 <code>publish</code> 方法时始终传递一个 publisher 实例。 使用实时的 Facades, 我们可以保持同样的可测试性，而不需要显式地通过 <code>Publisher</code> 实例。要生成实时 Facade，请在导入类的名称空间中加上 <code>Facades</code>：</p><pre><code>&lt;?php

namespace App\\Models;

use Facades\\App\\Contracts\\Publisher;
use Illuminate\\Database\\Eloquent\\Model;

class Podcast extends Model
{
    /**
     * Publish the podcast.
     */
    public function publish(): void
    {
        $this-&gt;update([&#39;publishing&#39; =&gt; now()]);

        Publisher::publish($this);
    }
}
</code></pre><p>当使用实时 Facade 时， publisher 实现将通过使用 <code>Facades</code> 前缀后出现的接口或类名的部分来解决服务容器的问题。在测试时，我们可以使用 Laravel 的内置 Facade 测试辅助函数来模拟这种方法调用：</p><pre><code>&lt;?php

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
</code></pre><p><a name="facade-class-reference"></a></p><h2 id="facade-类参考" tabindex="-1"><a class="header-anchor" href="#facade-类参考" aria-hidden="true">#</a> Facade 类参考</h2><p>在下面你可以找到每个 facade 类及其对应的底层类。这是一个快速查找给定 facade 类的 API 文档的工具。<a href="./container">服务容器绑定</a> 的关键信息也包含在内。</p>`,53),u={class:"overflow-auto"},p=e("thead",null,[e("tr",null,[e("th",null,"Facade"),e("th",null,"Class"),e("th",null,"Service Container Binding")])],-1),h=e("td",null,"App",-1),_={href:"https://laravel.com/api/10.x/Illuminate/Foundation/Application.html",target:"_blank",rel:"noopener noreferrer"},m=e("td",null,[e("code",null,"app")],-1),f=e("td",null,"Artisan",-1),g={href:"https://laravel.com/api/10.x/Illuminate/Contracts/Console/Kernel.html",target:"_blank",rel:"noopener noreferrer"},k=e("td",null,[e("code",null,"artisan")],-1),v=e("td",null,"Auth",-1),I={href:"https://laravel.com/api/10.x/Illuminate/Auth/AuthManager.html",target:"_blank",rel:"noopener noreferrer"},b=e("td",null,[e("code",null,"auth")],-1),F=e("td",null,"Auth (Instance)",-1),C={href:"https://laravel.com/api/10.x/Illuminate/Contracts/Auth/Guard.html",target:"_blank",rel:"noopener noreferrer"},x=e("td",null,[e("code",null,"auth.driver")],-1),R=e("td",null,"Blade",-1),y={href:"https://laravel.com/api/10.x/Illuminate/View/Compilers/BladeCompiler.html",target:"_blank",rel:"noopener noreferrer"},w=e("td",null,[e("code",null,"blade.compiler")],-1),P=e("td",null,"Broadcast",-1),S={href:"https://laravel.com/api/10.x/Illuminate/Contracts/Broadcasting/Factory.html",target:"_blank",rel:"noopener noreferrer"},A=e("td",null," ",-1),M=e("td",null,"Broadcast (Instance)",-1),V={href:"https://laravel.com/api/10.x/Illuminate/Contracts/Broadcasting/Broadcaster.html",target:"_blank",rel:"noopener noreferrer"},L=e("td",null," ",-1),B=e("td",null,"Bus",-1),D={href:"https://laravel.com/api/10.x/Illuminate/Contracts/Bus/Dispatcher.html",target:"_blank",rel:"noopener noreferrer"},$=e("td",null," ",-1),H=e("td",null,"Cache",-1),Q={href:"https://laravel.com/api/10.x/Illuminate/Cache/CacheManager.html",target:"_blank",rel:"noopener noreferrer"},T=e("td",null,[e("code",null,"cache")],-1),E=e("td",null,"Cache (Instance)",-1),q={href:"https://laravel.com/api/10.x/Illuminate/Cache/Repository.html",target:"_blank",rel:"noopener noreferrer"},G=e("td",null,[e("code",null,"cache.store")],-1),N=e("td",null,"Config",-1),j={href:"https://laravel.com/api/10.x/Illuminate/Config/Repository.html",target:"_blank",rel:"noopener noreferrer"},U=e("td",null,[e("code",null,"config")],-1),J=e("td",null,"Cookie",-1),K={href:"https://laravel.com/api/10.x/Illuminate/Cookie/CookieJar.html",target:"_blank",rel:"noopener noreferrer"},O=e("td",null,[e("code",null,"cookie")],-1),z=e("td",null,"Crypt",-1),W={href:"https://laravel.com/api/10.x/Illuminate/Encryption/Encrypter.html",target:"_blank",rel:"noopener noreferrer"},X=e("td",null,[e("code",null,"encrypter")],-1),Y=e("td",null,"Date",-1),Z={href:"https://laravel.com/api/10.x/Illuminate/Support/DateFactory.html",target:"_blank",rel:"noopener noreferrer"},ee=e("td",null,[e("code",null,"date")],-1),ne=e("td",null,"DB",-1),te={href:"https://laravel.com/api/10.x/Illuminate/Database/DatabaseManager.html",target:"_blank",rel:"noopener noreferrer"},ae=e("td",null,[e("code",null,"db")],-1),le=e("td",null,"DB (Instance)",-1),se={href:"https://laravel.com/api/10.x/Illuminate/Database/Connection.html",target:"_blank",rel:"noopener noreferrer"},oe=e("td",null,[e("code",null,"db.connection")],-1),re=e("td",null,"Event",-1),ce={href:"https://laravel.com/api/10.x/Illuminate/Events/Dispatcher.html",target:"_blank",rel:"noopener noreferrer"},ie=e("td",null,[e("code",null,"events")],-1),de=e("td",null,"File",-1),ue={href:"https://laravel.com/api/10.x/Illuminate/Filesystem/Filesystem.html",target:"_blank",rel:"noopener noreferrer"},pe=e("td",null,[e("code",null,"files")],-1),he=e("td",null,"Gate",-1),_e={href:"https://laravel.com/api/10.x/Illuminate/Contracts/Auth/Access/Gate.html",target:"_blank",rel:"noopener noreferrer"},me=e("td",null," ",-1),fe=e("td",null,"Hash",-1),ge={href:"https://laravel.com/api/10.x/Illuminate/Contracts/Hashing/Hasher.html",target:"_blank",rel:"noopener noreferrer"},ke=e("td",null,[e("code",null,"hash")],-1),ve=e("td",null,"Http",-1),Ie={href:"https://laravel.com/api/10.x/Illuminate/Http/Client/Factory.html",target:"_blank",rel:"noopener noreferrer"},be=e("td",null," ",-1),Fe=e("td",null,"Lang",-1),Ce={href:"https://laravel.com/api/10.x/Illuminate/Translation/Translator.html",target:"_blank",rel:"noopener noreferrer"},xe=e("td",null,[e("code",null,"translator")],-1),Re=e("td",null,"Log",-1),ye={href:"https://laravel.com/api/10.x/Illuminate/Log/LogManager.html",target:"_blank",rel:"noopener noreferrer"},we=e("td",null,[e("code",null,"log")],-1),Pe=e("td",null,"Mail",-1),Se={href:"https://laravel.com/api/10.x/Illuminate/Mail/Mailer.html",target:"_blank",rel:"noopener noreferrer"},Ae=e("td",null,[e("code",null,"mailer")],-1),Me=e("td",null,"Notification",-1),Ve={href:"https://laravel.com/api/10.x/Illuminate/Notifications/ChannelManager.html",target:"_blank",rel:"noopener noreferrer"},Le=e("td",null," ",-1),Be=e("td",null,"Password",-1),De={href:"https://laravel.com/api/10.x/Illuminate/Auth/Passwords/PasswordBrokerManager.html",target:"_blank",rel:"noopener noreferrer"},$e=e("td",null,[e("code",null,"auth.password")],-1),He=e("td",null,"Password (Instance)",-1),Qe={href:"https://laravel.com/api/10.x/Illuminate/Auth/Passwords/PasswordBroker.html",target:"_blank",rel:"noopener noreferrer"},Te=e("td",null,[e("code",null,"auth.password.broker")],-1),Ee=e("td",null,"Pipeline (Instance)",-1),qe={href:"https://laravel.com/api/10.x/Illuminate/Pipeline/Pipeline.html",target:"_blank",rel:"noopener noreferrer"},Ge=e("td",null," ",-1),Ne=e("td",null,"Queue",-1),je={href:"https://laravel.com/api/10.x/Illuminate/Queue/QueueManager.html",target:"_blank",rel:"noopener noreferrer"},Ue=e("td",null,[e("code",null,"queue")],-1),Je=e("td",null,"Queue (Instance)",-1),Ke={href:"https://laravel.com/api/10.x/Illuminate/Contracts/Queue/Queue.html",target:"_blank",rel:"noopener noreferrer"},Oe=e("td",null,[e("code",null,"queue.connection")],-1),ze=e("td",null,"Queue (Base Class)",-1),We={href:"https://laravel.com/api/10.x/Illuminate/Queue/Queue.html",target:"_blank",rel:"noopener noreferrer"},Xe=e("td",null," ",-1),Ye=e("td",null,"Redirect",-1),Ze={href:"https://laravel.com/api/10.x/Illuminate/Routing/Redirector.html",target:"_blank",rel:"noopener noreferrer"},en=e("td",null,[e("code",null,"redirect")],-1),nn=e("td",null,"Redis",-1),tn={href:"https://laravel.com/api/10.x/Illuminate/Redis/RedisManager.html",target:"_blank",rel:"noopener noreferrer"},an=e("td",null,[e("code",null,"redis")],-1),ln=e("td",null,"Redis (Instance)",-1),sn={href:"https://laravel.com/api/10.x/Illuminate/Redis/Connections/Connection.html",target:"_blank",rel:"noopener noreferrer"},on=e("td",null,[e("code",null,"redis.connection")],-1),rn=e("td",null,"Request",-1),cn={href:"https://laravel.com/api/10.x/Illuminate/Http/Request.html",target:"_blank",rel:"noopener noreferrer"},dn=e("td",null,[e("code",null,"request")],-1),un=e("td",null,"Response",-1),pn={href:"https://laravel.com/api/10.x/Illuminate/Contracts/Routing/ResponseFactory.html",target:"_blank",rel:"noopener noreferrer"},hn=e("td",null," ",-1),_n=e("td",null,"Response (Instance)",-1),mn={href:"https://laravel.com/api/10.x/Illuminate/Http/Response.html",target:"_blank",rel:"noopener noreferrer"},fn=e("td",null," ",-1),gn=e("td",null,"Route",-1),kn={href:"https://laravel.com/api/10.x/Illuminate/Routing/Router.html",target:"_blank",rel:"noopener noreferrer"},vn=e("td",null,[e("code",null,"router")],-1),In=e("td",null,"Schema",-1),bn={href:"https://laravel.com/api/10.x/Illuminate/Database/Schema/Builder.html",target:"_blank",rel:"noopener noreferrer"},Fn=e("td",null," ",-1),Cn=e("td",null,"Session",-1),xn={href:"https://laravel.com/api/10.x/Illuminate/Session/SessionManager.html",target:"_blank",rel:"noopener noreferrer"},Rn=e("td",null,[e("code",null,"session")],-1),yn=e("td",null,"Session (Instance)",-1),wn={href:"https://laravel.com/api/10.x/Illuminate/Session/Store.html",target:"_blank",rel:"noopener noreferrer"},Pn=e("td",null,[e("code",null,"session.store")],-1),Sn=e("td",null,"Storage",-1),An={href:"https://laravel.com/api/10.x/Illuminate/Filesystem/FilesystemManager.html",target:"_blank",rel:"noopener noreferrer"},Mn=e("td",null,[e("code",null,"filesystem")],-1),Vn=e("td",null,"Storage (Instance)",-1),Ln={href:"https://laravel.com/api/10.x/Illuminate/Contracts/Filesystem/Filesystem.html",target:"_blank",rel:"noopener noreferrer"},Bn=e("td",null,[e("code",null,"filesystem.disk")],-1),Dn=e("td",null,"URL",-1),$n={href:"https://laravel.com/api/10.x/Illuminate/Routing/UrlGenerator.html",target:"_blank",rel:"noopener noreferrer"},Hn=e("td",null,[e("code",null,"url")],-1),Qn=e("td",null,"Validator",-1),Tn={href:"https://laravel.com/api/10.x/Illuminate/Validation/Factory.html",target:"_blank",rel:"noopener noreferrer"},En=e("td",null,[e("code",null,"validator")],-1),qn=e("td",null,"Validator (Instance)",-1),Gn={href:"https://laravel.com/api/10.x/Illuminate/Validation/Validator.html",target:"_blank",rel:"noopener noreferrer"},Nn=e("td",null," ",-1),jn=e("td",null,"View",-1),Un={href:"https://laravel.com/api/10.x/Illuminate/View/Factory.html",target:"_blank",rel:"noopener noreferrer"},Jn=e("td",null,[e("code",null,"view")],-1),Kn=e("td",null,"View (Instance)",-1),On={href:"https://laravel.com/api/10.x/Illuminate/View/View.html",target:"_blank",rel:"noopener noreferrer"},zn=e("td",null," ",-1),Wn=e("td",null,"Vite",-1),Xn={href:"https://laravel.com/api/10.x/Illuminate/Foundation/Vite.html",target:"_blank",rel:"noopener noreferrer"},Yn=e("td",null," ",-1);function Zn(et,nt){const n=s("ExternalLinkIcon");return o(),r("div",null,[d,e("div",u,[e("table",null,[p,e("tbody",null,[e("tr",null,[h,e("td",null,[e("a",_,[t("Illuminate\\Foundation\\Application"),a(n)])]),m]),e("tr",null,[f,e("td",null,[e("a",g,[t("Illuminate\\Contracts\\Console\\Kernel"),a(n)])]),k]),e("tr",null,[v,e("td",null,[e("a",I,[t("Illuminate\\Auth\\AuthManager"),a(n)])]),b]),e("tr",null,[F,e("td",null,[e("a",C,[t("Illuminate\\Contracts\\Auth\\Guard"),a(n)])]),x]),e("tr",null,[R,e("td",null,[e("a",y,[t("Illuminate\\View\\Compilers\\BladeCompiler"),a(n)])]),w]),e("tr",null,[P,e("td",null,[e("a",S,[t("Illuminate\\Contracts\\Broadcasting\\Factory"),a(n)])]),A]),e("tr",null,[M,e("td",null,[e("a",V,[t("Illuminate\\Contracts\\Broadcasting\\Broadcaster"),a(n)])]),L]),e("tr",null,[B,e("td",null,[e("a",D,[t("Illuminate\\Contracts\\Bus\\Dispatcher"),a(n)])]),$]),e("tr",null,[H,e("td",null,[e("a",Q,[t("Illuminate\\Cache\\CacheManager"),a(n)])]),T]),e("tr",null,[E,e("td",null,[e("a",q,[t("Illuminate\\Cache\\Repository"),a(n)])]),G]),e("tr",null,[N,e("td",null,[e("a",j,[t("Illuminate\\Config\\Repository"),a(n)])]),U]),e("tr",null,[J,e("td",null,[e("a",K,[t("Illuminate\\Cookie\\CookieJar"),a(n)])]),O]),e("tr",null,[z,e("td",null,[e("a",W,[t("Illuminate\\Encryption\\Encrypter"),a(n)])]),X]),e("tr",null,[Y,e("td",null,[e("a",Z,[t("Illuminate\\Support\\DateFactory"),a(n)])]),ee]),e("tr",null,[ne,e("td",null,[e("a",te,[t("Illuminate\\Database\\DatabaseManager"),a(n)])]),ae]),e("tr",null,[le,e("td",null,[e("a",se,[t("Illuminate\\Database\\Connection"),a(n)])]),oe]),e("tr",null,[re,e("td",null,[e("a",ce,[t("Illuminate\\Events\\Dispatcher"),a(n)])]),ie]),e("tr",null,[de,e("td",null,[e("a",ue,[t("Illuminate\\Filesystem\\Filesystem"),a(n)])]),pe]),e("tr",null,[he,e("td",null,[e("a",_e,[t("Illuminate\\Contracts\\Auth\\Access\\Gate"),a(n)])]),me]),e("tr",null,[fe,e("td",null,[e("a",ge,[t("Illuminate\\Contracts\\Hashing\\Hasher"),a(n)])]),ke]),e("tr",null,[ve,e("td",null,[e("a",Ie,[t("Illuminate\\Http\\Client\\Factory"),a(n)])]),be]),e("tr",null,[Fe,e("td",null,[e("a",Ce,[t("Illuminate\\Translation\\Translator"),a(n)])]),xe]),e("tr",null,[Re,e("td",null,[e("a",ye,[t("Illuminate\\Log\\LogManager"),a(n)])]),we]),e("tr",null,[Pe,e("td",null,[e("a",Se,[t("Illuminate\\Mail\\Mailer"),a(n)])]),Ae]),e("tr",null,[Me,e("td",null,[e("a",Ve,[t("Illuminate\\Notifications\\ChannelManager"),a(n)])]),Le]),e("tr",null,[Be,e("td",null,[e("a",De,[t("Illuminate\\Auth\\Passwords\\PasswordBrokerManager"),a(n)])]),$e]),e("tr",null,[He,e("td",null,[e("a",Qe,[t("Illuminate\\Auth\\Passwords\\PasswordBroker"),a(n)])]),Te]),e("tr",null,[Ee,e("td",null,[e("a",qe,[t("Illuminate\\Pipeline\\Pipeline"),a(n)])]),Ge]),e("tr",null,[Ne,e("td",null,[e("a",je,[t("Illuminate\\Queue\\QueueManager"),a(n)])]),Ue]),e("tr",null,[Je,e("td",null,[e("a",Ke,[t("Illuminate\\Contracts\\Queue\\Queue"),a(n)])]),Oe]),e("tr",null,[ze,e("td",null,[e("a",We,[t("Illuminate\\Queue\\Queue"),a(n)])]),Xe]),e("tr",null,[Ye,e("td",null,[e("a",Ze,[t("Illuminate\\Routing\\Redirector"),a(n)])]),en]),e("tr",null,[nn,e("td",null,[e("a",tn,[t("Illuminate\\Redis\\RedisManager"),a(n)])]),an]),e("tr",null,[ln,e("td",null,[e("a",sn,[t("Illuminate\\Redis\\Connections\\Connection"),a(n)])]),on]),e("tr",null,[rn,e("td",null,[e("a",cn,[t("Illuminate\\Http\\Request"),a(n)])]),dn]),e("tr",null,[un,e("td",null,[e("a",pn,[t("Illuminate\\Contracts\\Routing\\ResponseFactory"),a(n)])]),hn]),e("tr",null,[_n,e("td",null,[e("a",mn,[t("Illuminate\\Http\\Response"),a(n)])]),fn]),e("tr",null,[gn,e("td",null,[e("a",kn,[t("Illuminate\\Routing\\Router"),a(n)])]),vn]),e("tr",null,[In,e("td",null,[e("a",bn,[t("Illuminate\\Database\\Schema\\Builder"),a(n)])]),Fn]),e("tr",null,[Cn,e("td",null,[e("a",xn,[t("Illuminate\\Session\\SessionManager"),a(n)])]),Rn]),e("tr",null,[yn,e("td",null,[e("a",wn,[t("Illuminate\\Session\\Store"),a(n)])]),Pn]),e("tr",null,[Sn,e("td",null,[e("a",An,[t("Illuminate\\Filesystem\\FilesystemManager"),a(n)])]),Mn]),e("tr",null,[Vn,e("td",null,[e("a",Ln,[t("Illuminate\\Contracts\\Filesystem\\Filesystem"),a(n)])]),Bn]),e("tr",null,[Dn,e("td",null,[e("a",$n,[t("Illuminate\\Routing\\UrlGenerator"),a(n)])]),Hn]),e("tr",null,[Qn,e("td",null,[e("a",Tn,[t("Illuminate\\Validation\\Factory"),a(n)])]),En]),e("tr",null,[qn,e("td",null,[e("a",Gn,[t("Illuminate\\Validation\\Validator"),a(n)])]),Nn]),e("tr",null,[jn,e("td",null,[e("a",Un,[t("Illuminate\\View\\Factory"),a(n)])]),Jn]),e("tr",null,[Kn,e("td",null,[e("a",On,[t("Illuminate\\View\\View"),a(n)])]),zn]),e("tr",null,[Wn,e("td",null,[e("a",Xn,[t("Illuminate\\Foundation\\Vite"),a(n)])]),Yn])])])])])}const lt=l(i,[["render",Zn],["__file","facades.html.vue"]]);export{lt as default};
