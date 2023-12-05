import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{r as s,o as r,c as i,b as n,d as e,e as a,a as t}from"./app-8cdff07c.js";const d={},l=t(`<h1 id="mocking" tabindex="-1"><a class="header-anchor" href="#mocking" aria-hidden="true">#</a> Mocking</h1><ul><li><a href="#introduction">简介</a></li><li><a href="#mocking-objects">模拟对象</a></li><li><a href="#mocking-facades">模拟 Facades</a><ul><li><a href="#facade-spies">Facade Spies</a></li></ul></li><li><a href="#interacting-with-time">设置时间</a></li></ul><p><a name="introduction"></a></p><h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h2><p>在 Laravel 应用程序测试中，你可能希望「模拟」应用程序的某些功能的行为，从而避免该部分在测试中真正执行。例如：在控制器执行过程中会触发事件，您可能希望模拟事件监听器，从而避免该事件在测试时真正执行。这允许你在仅测试控制器 HTTP 响应的情况时，而不必担心触发事件，因为事件侦听器可以在它们自己的测试用例中进行测试。</p><p>Laravel 针对事件、任务和 Facades 的模拟，提供了开箱即用的辅助函数。这些函数基于 <code>Mockery</code> 封装而成，使用非常方便，无需手动调用复杂的 <code>Mockery</code> 函数。</p><p><a name="mocking-objects"></a></p><h2 id="模拟对象" tabindex="-1"><a class="header-anchor" href="#模拟对象" aria-hidden="true">#</a> 模拟对象</h2><p>当模拟一个对象将通过 Laravel 的 <a href="./container">服务容器</a> 注入到应用中时，你将需要将模拟实例作为 <code>instance</code> 绑定到容器中。这将告诉容器使用对象的模拟实例，而不是构造对象的本身：</p><pre><code>use App\\Service;
use Mockery;
use Mockery\\MockInterface;

public function test_something_can_be_mocked(): void
{
    $this-&gt;instance(
        Service::class,
        Mockery::mock(Service::class, function (MockInterface $mock) {
            $mock-&gt;shouldReceive(&#39;process&#39;)-&gt;once();
        })
    );
}
</code></pre><p>为了让以上过程更便捷，你可以使用 Laravel 的基本测试用例类提供的 <code>mock</code> 方法。例如，下面的例子跟上面的例子的执行效果是一样的：</p><pre><code>use App\\Service;
use Mockery\\MockInterface;

$mock = $this-&gt;mock(Service::class, function (MockInterface $mock) {
    $mock-&gt;shouldReceive(&#39;process&#39;)-&gt;once();
});
</code></pre><p>当你只需要模拟对象的几个方法时，可以使用 <code>partialMock</code> 方法。 未被模拟的方法将在调用时正常执行：</p><pre><code>use App\\Service;
use Mockery\\MockInterface;

$mock = $this-&gt;partialMock(Service::class, function (MockInterface $mock) {
    $mock-&gt;shouldReceive(&#39;process&#39;)-&gt;once();
});
</code></pre>`,14),p={href:"http://docs.mockery.io/en/latest/reference/spies.html",target:"_blank",rel:"noopener noreferrer"},h=n("code",null,"spy",-1),u=n("code",null,"Mockery::spy",-1),_=n("code",null,"spies",-1),f=n("code",null,"spies",-1),g=n("code",null,"spy",-1),m=t(`<pre><code>use App\\Service;

$spy = $this-&gt;spy(Service::class);

// ...

$spy-&gt;shouldHaveReceived(&#39;process&#39;);
</code></pre><p><a name="mocking-facades"></a></p><h2 id="facades-模拟" tabindex="-1"><a class="header-anchor" href="#facades-模拟" aria-hidden="true">#</a> Facades 模拟</h2><p>与传统静态方法调用不同的是，<a href="./facades">facades</a> (包含的 <a href="./facades#real-time-facades">real-time facades</a>) 也可以被模拟。相较传统的静态方法而言，它具有很大的优势，同时提供了与传统依赖注入相同的可测试性。在测试中，你可能想在控制器中模拟对 Laravel Facade 的调用。比如下面控制器中的行为：</p><pre><code>&lt;?php

namespace App\\Http\\Controllers;

use Illuminate\\Support\\Facades\\Cache;

class UserController extends Controller
{
    /**
     * 显示该应用程序的所有用户的列表。
     */
    public function index(): array
    {
        $value = Cache::get(&#39;key&#39;);

        return [
            // ...
        ];
    }
}
</code></pre>`,5),k=n("code",null,"shouldReceive",-1),v=n("code",null,"Cache",-1),$={href:"https://github.com/padraic/mockery",target:"_blank",rel:"noopener noreferrer"},y=n("a",{href:"./container"},"服务容器",-1),b=n("code",null,"Cache",-1),C=n("code",null,"get",-1),S=t(`<pre><code>&lt;?php

namespace Tests\\Feature;

use Illuminate\\Support\\Facades\\Cache;
use Tests\\TestCase;

class UserControllerTest extends TestCase
{
    public function test_get_index(): void
    {
        Cache::shouldReceive(&#39;get&#39;)
                    -&gt;once()
                    -&gt;with(&#39;key&#39;)
                    -&gt;andReturn(&#39;value&#39;);

        $response = $this-&gt;get(&#39;/users&#39;);

        // ...
    }
}
</code></pre><blockquote><p><strong>注意</strong> 你不应该模拟 <code>Request</code> facade。相反，在运行测试时将你想要的输入传递到 <a href="./http-tests">HTTP 测试方法</a> 中，例如 <code>get</code> 和 <code>post</code> 方法。同样也不要模拟 <code>Config</code> facade，而是在测试中调用 <code>Config::set</code> 方法。</p></blockquote><p><a name="facade-spies"></a></p><h3 id="facade-spies" tabindex="-1"><a class="header-anchor" href="#facade-spies" aria-hidden="true">#</a> Facade Spies</h3>`,4),M={href:"http://docs.mockery.io/en/latest/reference/spies.html",target:"_blank",rel:"noopener noreferrer"},T=n("code",null,"spy",-1),x=n("code",null,"spies",-1),I=n("code",null,"mocks",-1),F=n("code",null,"spies",-1),w=n("code",null,"spy",-1),L=t(`<pre><code>use Illuminate\\Support\\Facades\\Cache;

public function test_values_are_be_stored_in_cache(): void
{
    Cache::spy();

    $response = $this-&gt;get(&#39;/&#39;);

    $response-&gt;assertStatus(200);

    Cache::shouldHaveReceived(&#39;put&#39;)-&gt;once()-&gt;with(&#39;name&#39;, &#39;Taylor&#39;, 10);
}
</code></pre><p><a name="interacting-with-time"></a></p><h2 id="设置时间" tabindex="-1"><a class="header-anchor" href="#设置时间" aria-hidden="true">#</a> 设置时间</h2><p>当我们测试时，有时可能需要修改诸如 <code>now</code> 或 <code>Illuminate\\Support\\Carbon::now()</code> 之类的助手函数返回的时间。 Laravel 的基本功能测试类包中包含了一些助手函数，可以让你设置当前时间：</p><pre><code>use Illuminate\\Support\\Carbon;

public function test_time_can_be_manipulated(): void
{
    // 设置未来的时间...
    $this-&gt;travel(5)-&gt;milliseconds();
    $this-&gt;travel(5)-&gt;seconds();
    $this-&gt;travel(5)-&gt;minutes();
    $this-&gt;travel(5)-&gt;hours();
    $this-&gt;travel(5)-&gt;days();
    $this-&gt;travel(5)-&gt;weeks();
    $this-&gt;travel(5)-&gt;years();

    // 设置过去的时间...
    $this-&gt;travel(-5)-&gt;hours();

    // 设置一个确切的时间...
    $this-&gt;travelTo(now()-&gt;subHours(6));

    // 返回现在的时间...
    $this-&gt;travelBack();
}
</code></pre><p>你还可以为各种设置时间方法写一个闭包。闭包将在指定的时间被冻结调用。一旦闭包执行完毕，时间将恢复正常:</p><pre><code>$this-&gt;travel(5)-&gt;days(function () {
    // 在5天之后测试...
});

$this-&gt;travelTo(now()-&gt;subDays(10), function () {
    // 在指定的时间测试...
});
</code></pre><p><code>freezeTime</code> 方法可用于冻结当前时间。与之类似地，<code>freezeSecond</code> 方法也可以秒为单位冻结当前时间：</p><pre><code>use Illuminate\\Support\\Carbon;

// 冻结时间并在完成后恢复正常时间...
$this-&gt;freezeTime(function (Carbon $time) {
    // ...
});

// 冻结以秒为单位的时间并在完成后恢复正常时间...
$this-&gt;freezeSecond(function (Carbon $time) {
    // ...
})
</code></pre><p>正如你期望的一样，上面讨论的所有方法都主要用于测试对时间敏感的应用程序的行为，比如锁定论坛上不活跃的帖子:</p><pre><code>use App\\Models\\Thread;

public function test_forum_threads_lock_after_one_week_of_inactivity()
{
    $thread = Thread::factory()-&gt;create();
    
    $this-&gt;travel(1)-&gt;week();
    
    $this-&gt;assertTrue($thread-&gt;isLockedByInactivity());
}
</code></pre>`,11);function R(A,H){const c=s("ExternalLinkIcon");return r(),i("div",null,[l,n("p",null,[e("同样，如果你想 "),n("a",p,[e("监控"),a(c)]),e(" 一个对象，Laravel 的基本测试用例类提供了一个便捷的 "),h,e(" 方法作为 "),u,e(" 的替代方法。"),_,e(" 与模拟类似。但是，"),f,e(" 会记录 "),g,e(" 与被测试代码之间的所有交互，从而允许您在执行代码后做出断言：")]),m,n("p",null,[e("我们可以使用 "),k,e(" 方法模拟对 "),v,e(" Facade 的调用，该方法将返回一个 "),n("a",$,[e("Mockery"),a(c)]),e(" 模拟的实例。由于 Facades 实际上是由 Laravel "),y,e(" 解析和管理的，因此它们比传统的静态类具有更好的可测试性。例如，让我们模拟对 "),b,e(" Facade 的 "),C,e(" 方法的调用：")]),S,n("p",null,[e("如果你想 "),n("a",M,[e("监控"),a(c)]),e(" 一个 facade，你可以在相应的 facade 上调用 "),T,e(" 方法。"),x,e(" 类似于 "),I,e("；但是，"),F,e(" 会记录 "),w,e(" 和被测试代码之间的所有交互，允许你在代码执行后做出断言：")]),L])}const N=o(d,[["render",R],["__file","mocking.html.vue"]]);export{N as default};
