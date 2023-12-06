import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{r,o as t,c as d,b as e,d as s,e as a,a as n}from"./app-06635a3b.js";const c={},l=n('<h1 id="http-会话机制" tabindex="-1"><a class="header-anchor" href="#http-会话机制" aria-hidden="true">#</a> HTTP 会话机制</h1><ul><li><a href="#introduction">简介</a><ul><li><a href="#configuration">配置</a></li><li><a href="#driver-prerequisites">驱动程序先决条件</a></li></ul></li><li><a href="#interacting-with-the-session">使用 Session</a><ul><li><a href="#retrieving-data">获取数据</a></li><li><a href="#storing-data">存储数据</a></li><li><a href="#flash-data">闪存数据</a></li><li><a href="#deleting-data">删除数据</a></li><li><a href="#regenerating-the-session-id">重新生成 Session ID</a></li></ul></li><li><a href="#session-blocking">Session Blocking</a></li><li><a href="#adding-custom-session-drivers">添加自定义 Session 驱动</a><ul><li><a href="#implementing-the-driver">实现驱动</a></li><li><a href="#registering-the-driver">注册驱动</a></li></ul></li></ul><p><a name="introduction"></a></p><h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h2><p>由于 HTTP 驱动的应用程序是无状态的，Session 提供了一种在多个请求之间存储有关用户信息的方法，这类信息一般都存储在后续请求可以访问的持久存储 / 后端中。</p>',5),p={href:"https://memcached.org",target:"_blank",rel:"noopener noreferrer"},u={href:"https://redis.io",target:"_blank",rel:"noopener noreferrer"},h=e("p",null,[e("a",{name:"configuration"})],-1),g=e("h3",{id:"配置",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#配置","aria-hidden":"true"},"#"),s(" 配置")],-1),f=e("p",null,[s("Session 的配置文件存储在"),e("code",null,"config/session.php"),s("文件中。请务必查看此文件中对于你而言可用的选项。默认情况下，Laravel 为绝大多数应用程序配置的 Session 驱动为"),e("code",null,"file"),s(" 驱动，它适用于大多数程序。如果你的应用程序需要在多个 Web 服务器之间进行负载平衡，你应该选择一个所有服务器都可以访问的集中式存储，例如 Redis 或数据库。")],-1),m=e("p",null,[s("Session"),e("code",null,"driver"),s("的配置预设了每个请求存储 Session 数据的位置。Laravel 自带了几个不错而且开箱即用的驱动：")],-1),S=e("div",{class:"content-list",markdown:"1"},[e("ul",null,[e("li",null,[e("code",null,"file"),s(" - Sessions 存储在"),e("code",null,"storage/framework/sessions"),s("。")]),e("li",null,[e("code",null,"cookie"),s(" - Sessions 被存储在安全加密的 cookie 中。")]),e("li",null,[e("code",null,"database"),s(" - Sessions 被存储在关系型数据库中。")]),e("li",null,[e("code",null,"memcached"),s(" / "),e("code",null,"redis"),s(" - Sessions 被存储在基于高速缓存的存储系统中。")]),e("li",null,[e("code",null,"dynamodb"),s(" - Sessions 被存储在 AWS DynamoDB 中。")]),e("li",null,[e("code",null,"array"),s(" - Sessions 存储在 PHP 数组中，但不会被持久化。")])])],-1),b=n(`<blockquote><p><strong>技巧</strong><br> 数组驱动一般用于<a href="./testing">测试</a>并且防止存储在 Session 中的数据被持久化。</p></blockquote><p><a name="driver-prerequisites"></a></p><h3 id="驱动先决条件" tabindex="-1"><a class="header-anchor" href="#驱动先决条件" aria-hidden="true">#</a> 驱动先决条件</h3><p><a name="database"></a></p><h4 id="数据库" tabindex="-1"><a class="header-anchor" href="#数据库" aria-hidden="true">#</a> 数据库</h4><p>使用<code>database</code>Session 驱动时，你需要创建一个记录 Session 的表。下面是<code>Schema</code>的声明示例：</p><pre><code>use Illuminate\\Database\\Schema\\Blueprint;
use Illuminate\\Support\\Facades\\Schema;

Schema::create(&#39;sessions&#39;, function (Blueprint $table) {
    $table-&gt;string(&#39;id&#39;)-&gt;primary();
    $table-&gt;foreignId(&#39;user_id&#39;)-&gt;nullable()-&gt;index();
    $table-&gt;string(&#39;ip_address&#39;, 45)-&gt;nullable();
    $table-&gt;text(&#39;user_agent&#39;)-&gt;nullable();
    $table-&gt;text(&#39;payload&#39;);
    $table-&gt;integer(&#39;last_activity&#39;)-&gt;index();
});
</code></pre><p>你可以使用 Artisan 命令<code>session:table</code>生成这个迁移。了解更多数据库迁移，请查看完整的文档<a href="./migrations">迁移文档</a>:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan session:table

php artisan migrate
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="redis"></a></p><h4 id="redis" tabindex="-1"><a class="header-anchor" href="#redis" aria-hidden="true">#</a> Redis</h4><p>在 Laravel 使用 Redis Session 驱动前，你需要安装 PhpRedis PHP 扩展，可以通过 PECL 或者 通过 Composer 安装这个<code>predis/predis</code>包 (~1.0)。更多关于 Redis 配置信息，查询 Laravel 的 <a href="./redis#configuration">Redis 文档</a>.</p><blockquote><p><strong>技巧</strong><br> 在<code>session</code>配置文件里，<code>connection</code>选项可以用来设置 Session 使用 Redis 连接方式。</p></blockquote><p><a name="interacting-with-the-session"></a></p><h2 id="使用-session" tabindex="-1"><a class="header-anchor" href="#使用-session" aria-hidden="true">#</a> 使用 Session</h2><p><a name="retrieving-data"></a></p><h3 id="获取数据" tabindex="-1"><a class="header-anchor" href="#获取数据" aria-hidden="true">#</a> 获取数据</h3><p>在 Laravel 中有两种基本的 Session 使用方式：全局<code>session</code>助手函数和通过<code>Request</code>实例。首先看下通过<code>Request</code>实例访问 Session , 它可以隐式绑定路由闭包或者控制器方法。记住，Laravel 会自动注入控制器方法的依赖。<a href="./container">服务容器</a>：</p><pre><code>&lt;?php

namespace App\\Http\\Controllers;

use App\\Http\\Controllers\\Controller;
use Illuminate\\Http\\Request;
use Illuminate\\View\\View;

class UserController extends Controller
{
    /**
     * 显示指定用户个人资料。
     */
    public function show(Request $request, string $id): View
    {
        $value = $request-&gt;session()-&gt;get(&#39;key&#39;);

        // ...

        $user = $this-&gt;users-&gt;find($id);

        return view(&#39;user.profile&#39;, [&#39;user&#39; =&gt; $user]);
    }
}
</code></pre><p>当你从 Session 获取数据时，你也可以在<code>get</code>方法第二个参数里传递一个 default 默认值，如果 Session 里不存在键值对 key 的数据结果，这个默认值就会返回。如果你传递给<code>get</code>方法一个闭包作为默认值，这个闭包会被执行并且返回结果：</p><pre><code>$value = $request-&gt;session()-&gt;get(&#39;key&#39;, &#39;default&#39;);

$value = $request-&gt;session()-&gt;get(&#39;key&#39;, function () {
    return &#39;default&#39;;
});
</code></pre><p><a name="the-global-session-helper"></a></p><h4 id="全局-session-助手函数" tabindex="-1"><a class="header-anchor" href="#全局-session-助手函数" aria-hidden="true">#</a> 全局 Session 助手函数</h4><p>你也可以在 Session 里使用 PHP 全局<code>session</code>函数获取和储存数据。当这个<code>session</code>函数以一个单独的字符串形式被调用时，它将会返回这个 Session 键值对的结果。当函数以 key / value 数组形式被调用时，这些值会被存储在 Session 里：</p><pre><code>Route::get(&#39;/home&#39;, function () {
    // 从 Session 获取数据 ...
    $value = session(&#39;key&#39;);

    // 设置默认值...
    $value = session(&#39;key&#39;, &#39;default&#39;);

    // 在Session 里存储一段数据 ...
    session([&#39;key&#39; =&gt; &#39;value&#39;]);
});
</code></pre><blockquote><p><strong>技巧</strong><br> 通过 HTTP 请求实例与通过<code>session</code>助手函数方式使用 Session 之间没有实际区别。两种方式都是<a href="./testing">可的测试</a>，你所有的测试用例中都可以通过 <code>assertSessionHas</code>方法进行断言。</p></blockquote><p><a name="retrieving-all-session-data"></a></p><h4 id="获取所有-session-数据" tabindex="-1"><a class="header-anchor" href="#获取所有-session-数据" aria-hidden="true">#</a> 获取所有 Session 数据</h4><p>如果你想要从 Session 里获取所有数据，你可以使用<code>all</code>方法：</p><pre><code>$data = $request-&gt;session()-&gt;all();
</code></pre><p><a name="determining-if-an-item-exists-in-the-session"></a></p><h4 id="判断-session-里是否存在条目" tabindex="-1"><a class="header-anchor" href="#判断-session-里是否存在条目" aria-hidden="true">#</a> 判断 Session 里是否存在条目</h4><p>判断 Session 里是否存在一个条目，你可以使用<code>has</code>方法。如果条目存在<code>has</code>，方法返回<code>true</code>不存在则返回<code>null</code>：</p><pre><code>if ($request-&gt;session()-&gt;has(&#39;users&#39;)) {
    // ...
}
</code></pre><p>判断 Session 里是否存在一个即使结果值为<code>null</code>的条目，你可以使用<code>exists</code>方法：</p><pre><code>if ($request-&gt;session()-&gt;exists(&#39;users&#39;)) {
    // ...
}
</code></pre><p>要确定某个条目是否在会话中不存在，你可以使用 <code>missing</code>方法。如果条目不存在，<code>missing</code>方法返回<code>true</code>：</p><pre><code>if ($request-&gt;session()-&gt;missing(&#39;users&#39;)) {
    // ...
}
</code></pre><p><a name="storing-data"></a></p><h3 id="存储数据" tabindex="-1"><a class="header-anchor" href="#存储数据" aria-hidden="true">#</a> 存储数据</h3><p>Session 里存储数据，你通常将使用 Request 实例中的<code>put</code>方法或者<code>session</code>助手函数：</p><pre><code>// 通过 Request 实例存储 ...
$request-&gt;session()-&gt;put(&#39;key&#39;, &#39;value&#39;);

// 通过全局 Session 助手函数存储 ...
session([&#39;key&#39; =&gt; &#39;value&#39;]);
</code></pre><p><a name="pushing-to-array-session-values"></a></p><h4 id="session-存储数组" tabindex="-1"><a class="header-anchor" href="#session-存储数组" aria-hidden="true">#</a> Session 存储数组</h4><p><code>push</code>方法可以把一个新值推入到以数组形式存储的 session 值里。例如：如果<code>user.teams</code>键值对有一个关于团队名字的数组，你可以推入一个新值到这个数组里：</p><pre><code>$request-&gt;session()-&gt;push(&#39;user.teams&#39;, &#39;developers&#39;);
</code></pre><p><a name="retrieving-deleting-an-item"></a></p><h4 id="获取-删除条目" tabindex="-1"><a class="header-anchor" href="#获取-删除条目" aria-hidden="true">#</a> 获取 &amp; 删除条目</h4><p><code>pull</code>方法会从 Session 里获取并且删除一个条目，只需要一步如下：</p><pre><code>$value = $request-&gt;session()-&gt;pull(&#39;key&#39;, &#39;default&#39;);
</code></pre><p><a name="#incrementing-and-decrementing-session-values"></a></p><h4 id="递增-递减会话值" tabindex="-1"><a class="header-anchor" href="#递增-递减会话值" aria-hidden="true">#</a> 递增 / 递减会话值</h4><p>如果你的 Session 数据里有整形你希望进行加减操作，可以使用<code>increment</code>和<code>decrement</code>方法：</p><pre><code>$request-&gt;session()-&gt;increment(&#39;count&#39;);

$request-&gt;session()-&gt;increment(&#39;count&#39;, $incrementBy = 2);

$request-&gt;session()-&gt;decrement(&#39;count&#39;);

$request-&gt;session()-&gt;decrement(&#39;count&#39;, $decrementBy = 2);
</code></pre><p><a name="flash-data"></a></p><h3 id="闪存数据" tabindex="-1"><a class="header-anchor" href="#闪存数据" aria-hidden="true">#</a> 闪存数据</h3><p>有时你可能想在 Session 里为下次请求存储一些条目。你可以使用<code>flash</code>方法。使用这个方法，存储在 Session 的数据将立即可用并且会保留到下一个 HTTP 请求期间，之后会被删除。闪存数据主要用于短期的状态消息：</p><pre><code>$request-&gt;session()-&gt;flash(&#39;status&#39;, &#39;Task was successful!&#39;);
</code></pre><p>如果你需要为多次请求持久化闪存数据，可以使用<code>reflash</code>方法，它会为一个额外的请求保持住所有的闪存数据，如果你仅需要保持特定的闪存数据，可以使用<code>keep</code>方法：</p><pre><code>$request-&gt;session()-&gt;reflash();

$request-&gt;session()-&gt;keep([&#39;username&#39;, &#39;email&#39;]);
</code></pre><p>如果你仅为了当前的请求持久化闪存数据，可以使用<code>now</code> 方法：</p><pre><code>$request-&gt;session()-&gt;now(&#39;status&#39;, &#39;Task was successful!&#39;);
</code></pre><p><a name="deleting-data"></a></p><h3 id="删除数据" tabindex="-1"><a class="header-anchor" href="#删除数据" aria-hidden="true">#</a> 删除数据</h3><p><code>forget</code>方法会从 Session 删除一些数据。如果你想删除所有 Session 数据，可以使用<code>flush</code>方法：</p><pre><code>// 删除一个单独的键值对 ...
$request-&gt;session()-&gt;forget(&#39;name&#39;);

// 删除多个 键值对 ...
$request-&gt;session()-&gt;forget([&#39;name&#39;, &#39;status&#39;]);

$request-&gt;session()-&gt;flush();
</code></pre><p><a name="regenerating-the-session-id"></a></p><h3 id="重新生成-session-id" tabindex="-1"><a class="header-anchor" href="#重新生成-session-id" aria-hidden="true">#</a> 重新生成 Session ID</h3>`,68),v={href:"https://owasp.org/www-community/attacks/Session_fixation",target:"_blank",rel:"noopener noreferrer"},$=n(`<p>如果你正在使用<a href="./starter-kits">入门套件</a>或 <a href="./fortify">Laravel Fortify</a>中的任意一种， Laravel 会在认证阶段自动生成 Session ID；然而如果你需要手动重新生成 Session ID ，可以使用<code>regenerate</code>方法：</p><pre><code>$request-&gt;session()-&gt;regenerate();
</code></pre><p>如果你需要重新生成 Session ID 并同时删除所有 Session 里的数据，可以使用<code>invalidate</code>方法：</p><pre><code>$request-&gt;session()-&gt;invalidate();
</code></pre><p><a name="session-blocking"></a></p><h2 id="session-阻塞" tabindex="-1"><a class="header-anchor" href="#session-阻塞" aria-hidden="true">#</a> Session 阻塞</h2><blockquote><p><strong>注意</strong><br> 应用 Session 阻塞功能，你的应用必须使用一个支持<a href="./cache#atomic-locks">原子锁 </a>的缓存驱动。目前，可用的缓存驱动有<code>memcached</code>、 <code>dynamodb</code>、 <code>redis</code>和<code>database</code>等。另外，你可能不会使用<code>cookie</code> Session 驱动。</p></blockquote><p>默认情况下，Laravel 允许使用同一 Session 的请求并发地执行，举例来说，如果你使用一个 JavaScript HTTP 库向你的应用执行两次 HTTP 请求，它们将同时执行。对多数应用这不是问题，然而 在一小部分应用中可能出现 Session 数据丢失，这些应用会向两个不同的应用端并发请求，并同时写入数据到 Session。</p><p>为了解决这个问题，Laravel 允许你限制指定 Session 的并发请求。首先，你可以在路由定义时使用<code>block</code>链式方法。在这个示例中，一个到<code>/profile</code>的路由请求会拿到一把 Session 锁。当它处在锁定状态时，任何使用相同 Session ID 的到<code>/profile</code>或<code>/order</code>的路由请求都必须等待，直到第一个请求处理完成后再继续执行：</p><pre><code>Route::post(&#39;/profile&#39;, function () {
    // ...
})-&gt;block($lockSeconds = 10, $waitSeconds = 10)

Route::post(&#39;/order&#39;, function () {
    // ...
})-&gt;block($lockSeconds = 10, $waitSeconds = 10)
</code></pre><p><code>block</code>方法接受两个可选参数。<code>block</code>方法接受的第一个参数是 Session 锁释放前应该持有的最大秒数。当然，如果请求在此时间之前完成执行，锁将提前释放。</p><p><code>block</code>方法接受的第二个参数是请求在试图获得 Session 锁时应该等待的秒数。如果请求在给定的秒数内无法获得会话锁，将抛出<code>Illuminate\\Contracts\\Cache\\LockTimeoutException</code>异常。</p><p>如果不传参，那么 Session 锁默认锁定最大时间是 10 秒，请求锁最大的等待时间也是 10 秒：</p><pre><code>Route::post(&#39;/profile&#39;, function () {
    // ...
})-&gt;block()
</code></pre><p><a name="adding-custom-session-drivers"></a></p><h2 id="添加自定义-session-驱动" tabindex="-1"><a class="header-anchor" href="#添加自定义-session-驱动" aria-hidden="true">#</a> 添加自定义 Session 驱动</h2><p><a name="implementing-the-driver"></a></p><h4 id="实现驱动" tabindex="-1"><a class="header-anchor" href="#实现驱动" aria-hidden="true">#</a> 实现驱动</h4><p>如果现存的 Session 驱动不能满足你的需求，Laravel 允许你自定义 Session Handler。你的自定义驱动应实现 PHP 内置的<code>SessionHandlerInterface</code>。这个接口仅包含几个方法。以下是 MongoDB 驱动实现的代码片段：</p><pre><code>&lt;?php

namespace App\\Extensions;

class MongoSessionHandler implements \\SessionHandlerInterface
{
    public function open($savePath, $sessionName) {}
    public function close() {}
    public function read($sessionId) {}
    public function write($sessionId, $data) {}
    public function destroy($sessionId) {}
    public function gc($lifetime) {}
}
</code></pre><blockquote><p><strong>技巧</strong><br> Laravel 没有内置存放扩展的目录，你可以放置在任意目录下，这个示例里，我们创建了一个<code>Extensions</code>目录存放<code>MongoSessionHandler</code>。</p></blockquote><p>由于这些方法的含义并非通俗易懂，因此我们快速浏览下每个方法：</p>`,22),k=e("div",{class:"content-list",markdown:"1"},[e("ul",null,[e("li",null,[e("code",null,"open"),s("方法通常用于基于文件的 Session 存储系统。因为 Laravel 附带了一个"),e("code",null,"file"),s(" Session 驱动。你无须在里面写任何代码。可以简单地忽略掉。")]),e("li",null,[e("code",null,"close"),s("方法跟"),e("code",null,"open"),s("方法很像，通常也可以忽略掉。对大多数驱动来说，它不是必须的。")]),e("li",null,[e("code",null,"read"),s(" 方法应返回与给定的"),e("code",null,"$sessionId"),s("关联的 Session 数据的字符串格式。在你的驱动中获取或存储 Session 数据时，无须作任何序列化和编码的操作，Laravel 会自动为你执行序列化。")]),e("li",null,[e("code",null,"write"),s("方法将与"),e("code",null,"$sessionId"),s("关联的给定的"),e("code",null,"$data"),s("字符串写入到一些持久化存储系统，如 MongoDB 或者其他你选择的存储系统。再次，你无须进行任何序列化操作，Laravel 会自动为你处理。")]),e("li",null,[e("code",null,"destroy"),s("方法应可以从持久化存储中删除与"),e("code",null,"$sessionId"),s("相关联的数据。")]),e("li",null,[e("code",null,"gc"),s("方法应可以销毁给定的"),e("code",null,"$lifetime"),s("（UNIX 时间戳格式 ）之前的所有 Session 数据。对于像 Memcached 和 Redis 这类拥有过期机制的系统来说，本方法可以置空。")])])],-1),_=n(`<p><a name="registering-the-driver"></a></p><h4 id="注册驱动" tabindex="-1"><a class="header-anchor" href="#注册驱动" aria-hidden="true">#</a> 注册驱动</h4><p>一旦你的驱动实现了，需要注册到 Laravel 。在 Laravel 中添加额外的驱动到 Session 后端 ，你可以使用<code>Session</code> <a href="./facades">Facade</a> 提供的<code>extend</code>方法。你应该在<a href="./providers">服务提供者</a>中的<code>boot</code>方法中调用<code>extend</code>方法。可以通过已有的<code>App\\Providers\\AppServiceProvider</code>或创建一个全新的服务提供者执行此操作：</p><pre><code>&lt;?php

namespace App\\Providers;

use App\\Extensions\\MongoSessionHandler;
use Illuminate\\Contracts\\Foundation\\Application;
use Illuminate\\Support\\Facades\\Session;
use Illuminate\\Support\\ServiceProvider;

class SessionServiceProvider extends ServiceProvider
{
    /**
     * 注册任意应用服务。
     */
    public function register(): void
    {
        // ...
    }

    /**
     * 启动任意应用服务。
     */
    public function boot(): void
    {
        Session::extend(&#39;mongo&#39;, function (Application $app) {
            // 返回一个 SessionHandlerInterface 接口的实现 ...
            return new MongoSessionHandler;
        });
    }
}
</code></pre><p>一旦 Session 驱动注册完成，就可以在<code>config/session.php</code>配置文件选择使用<code>mongo</code> 驱动。</p>`,5);function x(q,I){const o=r("ExternalLinkIcon");return t(),d("div",null,[l,e("p",null,[s("Laravel 通过同一个可读性强的 API 处理各种自带的后台驱动程序。支持诸如比较热门的"),e("a",p,[s("Memcached"),a(o)]),s("、 "),e("a",u,[s("Redis"),a(o)]),s("和数据库。")]),h,g,f,m,S,b,e("p",null,[s("重新生成 Session ID 经常被用来阻止恶意用户使用 "),e("a",v,[s("session fixation"),a(o)]),s(" 攻击你的应用。")]),$,k,_])}const w=i(c,[["render",x],["__file","session.html.vue"]]);export{w as default};
