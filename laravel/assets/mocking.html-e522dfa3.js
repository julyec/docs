import{_ as c}from"./plugin-vue_export-helper-c27b6911.js";import{r as s,o as i,c as r,b as t,d as e,e as a,a as n}from"./app-8cdff07c.js";const l={},d=n(`<h1 id="mocking" tabindex="-1"><a class="header-anchor" href="#mocking" aria-hidden="true">#</a> Mocking</h1><ul><li><a href="#introduction">Introduction</a></li><li><a href="#mocking-objects">Mocking Objects</a></li><li><a href="#mocking-facades">Mocking Facades</a><ul><li><a href="#facade-spies">Facade Spies</a></li></ul></li><li><a href="#interacting-with-time">Interacting With Time</a></li></ul><p><a name="introduction"></a></p><h2 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h2><p>When testing Laravel applications, you may wish to &quot;mock&quot; certain aspects of your application so they are not actually executed during a given test. For example, when testing a controller that dispatches an event, you may wish to mock the event listeners so they are not actually executed during the test. This allows you to only test the controller&#39;s HTTP response without worrying about the execution of the event listeners since the event listeners can be tested in their own test case.</p><p>Laravel provides helpful methods for mocking events, jobs, and other facades out of the box. These helpers primarily provide a convenience layer over Mockery so you do not have to manually make complicated Mockery method calls.</p><p><a name="mocking-objects"></a></p><h2 id="mocking-objects" tabindex="-1"><a class="header-anchor" href="#mocking-objects" aria-hidden="true">#</a> Mocking Objects</h2><p>When mocking an object that is going to be injected into your application via Laravel&#39;s <a href="./container">service container</a>, you will need to bind your mocked instance into the container as an <code>instance</code> binding. This will instruct the container to use your mocked instance of the object instead of constructing the object itself:</p><pre><code>use App\\Service;
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
</code></pre><p>In order to make this more convenient, you may use the <code>mock</code> method that is provided by Laravel&#39;s base test case class. For example, the following example is equivalent to the example above:</p><pre><code>use App\\Service;
use Mockery\\MockInterface;

$mock = $this-&gt;mock(Service::class, function (MockInterface $mock) {
    $mock-&gt;shouldReceive(&#39;process&#39;)-&gt;once();
});
</code></pre><p>You may use the <code>partialMock</code> method when you only need to mock a few methods of an object. The methods that are not mocked will be executed normally when called:</p><pre><code>use App\\Service;
use Mockery\\MockInterface;

$mock = $this-&gt;partialMock(Service::class, function (MockInterface $mock) {
    $mock-&gt;shouldReceive(&#39;process&#39;)-&gt;once();
});
</code></pre>`,14),h={href:"http://docs.mockery.io/en/latest/reference/spies.html",target:"_blank",rel:"noopener noreferrer"},u=t("code",null,"spy",-1),p=t("code",null,"Mockery::spy",-1),m=n(`<pre><code>use App\\Service;

$spy = $this-&gt;spy(Service::class);

// ...

$spy-&gt;shouldHaveReceived(&#39;process&#39;);
</code></pre><p><a name="mocking-facades"></a></p><h2 id="mocking-facades" tabindex="-1"><a class="header-anchor" href="#mocking-facades" aria-hidden="true">#</a> Mocking Facades</h2><p>Unlike traditional static method calls, <a href="./facades">facades</a> (including <a href="./facades#real-time-facades">real-time facades</a>) may be mocked. This provides a great advantage over traditional static methods and grants you the same testability that you would have if you were using traditional dependency injection. When testing, you may often want to mock a call to a Laravel facade that occurs in one of your controllers. For example, consider the following controller action:</p><pre><code>&lt;?php

namespace App\\Http\\Controllers;

use Illuminate\\Support\\Facades\\Cache;

class UserController extends Controller
{
    /**
     * Retrieve a list of all users of the application.
     */
    public function index(): array
    {
        $value = Cache::get(&#39;key&#39;);

        return [
            // ...
        ];
    }
}
</code></pre>`,5),g=t("code",null,"Cache",-1),f=t("code",null,"shouldReceive",-1),y={href:"https://github.com/padraic/mockery",target:"_blank",rel:"noopener noreferrer"},k=t("a",{href:"./container"},"service container",-1),v=t("code",null,"Cache",-1),_=t("code",null,"get",-1),b=n(`<pre><code>&lt;?php

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
</code></pre><blockquote><p><strong>Warning</strong><br> You should not mock the <code>Request</code> facade. Instead, pass the input you desire into the <a href="./http-tests">HTTP testing methods</a> such as <code>get</code> and <code>post</code> when running your test. Likewise, instead of mocking the <code>Config</code> facade, call the <code>Config::set</code> method in your tests.</p></blockquote><p><a name="facade-spies"></a></p><h3 id="facade-spies" tabindex="-1"><a class="header-anchor" href="#facade-spies" aria-hidden="true">#</a> Facade Spies</h3>`,4),w={href:"http://docs.mockery.io/en/latest/reference/spies.html",target:"_blank",rel:"noopener noreferrer"},$=t("code",null,"spy",-1),x=n(`<pre><code>use Illuminate\\Support\\Facades\\Cache;

public function test_values_are_be_stored_in_cache(): void
{
    Cache::spy();

    $response = $this-&gt;get(&#39;/&#39;);

    $response-&gt;assertStatus(200);

    Cache::shouldHaveReceived(&#39;put&#39;)-&gt;once()-&gt;with(&#39;name&#39;, &#39;Taylor&#39;, 10);
}
</code></pre><p><a name="interacting-with-time"></a></p><h2 id="interacting-with-time" tabindex="-1"><a class="header-anchor" href="#interacting-with-time" aria-hidden="true">#</a> Interacting With Time</h2><p>When testing, you may occasionally need to modify the time returned by helpers such as <code>now</code> or <code>Illuminate\\Support\\Carbon::now()</code>. Thankfully, Laravel&#39;s base feature test class includes helpers that allow you to manipulate the current time:</p><pre><code>use Illuminate\\Support\\Carbon;

public function test_time_can_be_manipulated(): void
{
    // Travel into the future...
    $this-&gt;travel(5)-&gt;milliseconds();
    $this-&gt;travel(5)-&gt;seconds();
    $this-&gt;travel(5)-&gt;minutes();
    $this-&gt;travel(5)-&gt;hours();
    $this-&gt;travel(5)-&gt;days();
    $this-&gt;travel(5)-&gt;weeks();
    $this-&gt;travel(5)-&gt;years();

    // Travel into the past...
    $this-&gt;travel(-5)-&gt;hours();

    // Travel to an explicit time...
    $this-&gt;travelTo(now()-&gt;subHours(6));

    // Return back to the present time...
    $this-&gt;travelBack();
}
</code></pre><p>You may also provide a closure to the various time travel methods. The closure will be invoked with time frozen at the specified time. Once the closure has executed, time will resume as normal:</p><pre><code>$this-&gt;travel(5)-&gt;days(function () {
    // Test something five days into the future...
});

$this-&gt;travelTo(now()-&gt;subDays(10), function () {
    // Test something during a given moment...
});
</code></pre><p>The <code>freezeTime</code> method may be used to freeze the current time. Similarly, the <code>freezeSecond</code> method will freeze the current time but at the start of the current second:</p><pre><code>use Illuminate\\Support\\Carbon;

// Freeze time and resume normal time after executing closure...
$this-&gt;freezeTime(function (Carbon $time) {
    // ...
});

// Freeze time at the current second and resume normal time after executing closure...
$this-&gt;freezeSecond(function (Carbon $time) {
    // ...
})
</code></pre><p>As you would expect, all of the methods discussed above are primarily useful for testing time sensitive application behavior, such as locking inactive posts on a discussion forum:</p><pre><code>use App\\Models\\Thread;

public function test_forum_threads_lock_after_one_week_of_inactivity()
{
    $thread = Thread::factory()-&gt;create();
    
    $this-&gt;travel(1)-&gt;week();
    
    $this-&gt;assertTrue($thread-&gt;isLockedByInactivity());
}
</code></pre>`,11);function T(S,C){const o=s("ExternalLinkIcon");return i(),r("div",null,[d,t("p",null,[e("Similarly, if you want to "),t("a",h,[e("spy"),a(o)]),e(" on an object, Laravel's base test case class offers a "),u,e(" method as a convenient wrapper around the "),p,e(" method. Spies are similar to mocks; however, spies record any interaction between the spy and the code being tested, allowing you to make assertions after the code is executed:")]),m,t("p",null,[e("We can mock the call to the "),g,e(" facade by using the "),f,e(" method, which will return an instance of a "),t("a",y,[e("Mockery"),a(o)]),e(" mock. Since facades are actually resolved and managed by the Laravel "),k,e(", they have much more testability than a typical static class. For example, let's mock our call to the "),v,e(" facade's "),_,e(" method:")]),b,t("p",null,[e("If you would like to "),t("a",w,[e("spy"),a(o)]),e(" on a facade, you may call the "),$,e(" method on the corresponding facade. Spies are similar to mocks; however, spies record any interaction between the spy and the code being tested, allowing you to make assertions after the code is executed:")]),x])}const j=c(l,[["render",T],["__file","mocking.html.vue"]]);export{j as default};
