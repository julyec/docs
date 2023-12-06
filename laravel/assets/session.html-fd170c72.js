import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{r as a,o as r,c as d,b as e,d as s,e as o,a as t}from"./app-06635a3b.js";const l={},c=t('<h1 id="http-session" tabindex="-1"><a class="header-anchor" href="#http-session" aria-hidden="true">#</a> HTTP Session</h1><ul><li><a href="#introduction">Introduction</a><ul><li><a href="#configuration">Configuration</a></li><li><a href="#driver-prerequisites">Driver Prerequisites</a></li></ul></li><li><a href="#interacting-with-the-session">Interacting With The Session</a><ul><li><a href="#retrieving-data">Retrieving Data</a></li><li><a href="#storing-data">Storing Data</a></li><li><a href="#flash-data">Flash Data</a></li><li><a href="#deleting-data">Deleting Data</a></li><li><a href="#regenerating-the-session-id">Regenerating The Session ID</a></li></ul></li><li><a href="#session-blocking">Session Blocking</a></li><li><a href="#adding-custom-session-drivers">Adding Custom Session Drivers</a><ul><li><a href="#implementing-the-driver">Implementing The Driver</a></li><li><a href="#registering-the-driver">Registering The Driver</a></li></ul></li></ul><p><a name="introduction"></a></p><h2 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h2><p>Since HTTP driven applications are stateless, sessions provide a way to store information about the user across multiple requests. That user information is typically placed in a persistent store / backend that can be accessed from subsequent requests.</p>',5),h={href:"https://memcached.org",target:"_blank",rel:"noopener noreferrer"},u={href:"https://redis.io",target:"_blank",rel:"noopener noreferrer"},p=e("p",null,[e("a",{name:"configuration"})],-1),m=e("h3",{id:"configuration",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#configuration","aria-hidden":"true"},"#"),s(" Configuration")],-1),g=e("p",null,[s("Your application's session configuration file is stored at "),e("code",null,"config/session.php"),s(". Be sure to review the options available to you in this file. By default, Laravel is configured to use the "),e("code",null,"file"),s(" session driver, which will work well for many applications. If your application will be load balanced across multiple web servers, you should choose a centralized store that all servers can access, such as Redis or a database.")],-1),f=e("p",null,[s("The session "),e("code",null,"driver"),s(" configuration option defines where session data will be stored for each request. Laravel ships with several great drivers out of the box:")],-1),v=e("div",{class:"content-list",markdown:"1"},[e("ul",null,[e("li",null,[e("code",null,"file"),s(" - sessions are stored in "),e("code",null,"storage/framework/sessions"),s(".")]),e("li",null,[e("code",null,"cookie"),s(" - sessions are stored in secure, encrypted cookies.")]),e("li",null,[e("code",null,"database"),s(" - sessions are stored in a relational database.")]),e("li",null,[e("code",null,"memcached"),s(" / "),e("code",null,"redis"),s(" - sessions are stored in one of these fast, cache based stores.")]),e("li",null,[e("code",null,"dynamodb"),s(" - sessions are stored in AWS DynamoDB.")]),e("li",null,[e("code",null,"array"),s(" - sessions are stored in a PHP array and will not be persisted.")])])],-1),y=t(`<blockquote><p><strong>Note</strong><br> The array driver is primarily used during <a href="./testing">testing</a> and prevents the data stored in the session from being persisted.</p></blockquote><p><a name="driver-prerequisites"></a></p><h3 id="driver-prerequisites" tabindex="-1"><a class="header-anchor" href="#driver-prerequisites" aria-hidden="true">#</a> Driver Prerequisites</h3><p><a name="database"></a></p><h4 id="database" tabindex="-1"><a class="header-anchor" href="#database" aria-hidden="true">#</a> Database</h4><p>When using the <code>database</code> session driver, you will need to create a table to contain the session records. An example <code>Schema</code> declaration for the table may be found below:</p><pre><code>use Illuminate\\Database\\Schema\\Blueprint;
use Illuminate\\Support\\Facades\\Schema;

Schema::create(&#39;sessions&#39;, function (Blueprint $table) {
    $table-&gt;string(&#39;id&#39;)-&gt;primary();
    $table-&gt;foreignId(&#39;user_id&#39;)-&gt;nullable()-&gt;index();
    $table-&gt;string(&#39;ip_address&#39;, 45)-&gt;nullable();
    $table-&gt;text(&#39;user_agent&#39;)-&gt;nullable();
    $table-&gt;text(&#39;payload&#39;);
    $table-&gt;integer(&#39;last_activity&#39;)-&gt;index();
});
</code></pre><p>You may use the <code>session:table</code> Artisan command to generate this migration. To learn more about database migrations, you may consult the complete <a href="./migrations">migration documentation</a>:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan session:table

php artisan migrate
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="redis"></a></p><h4 id="redis" tabindex="-1"><a class="header-anchor" href="#redis" aria-hidden="true">#</a> Redis</h4><p>Before using Redis sessions with Laravel, you will need to either install the PhpRedis PHP extension via PECL or install the <code>predis/predis</code> package (~1.0) via Composer. For more information on configuring Redis, consult Laravel&#39;s <a href="./redis#configuration">Redis documentation</a>.</p><blockquote><p><strong>Note</strong><br> In the <code>session</code> configuration file, the <code>connection</code> option may be used to specify which Redis connection is used by the session.</p></blockquote><p><a name="interacting-with-the-session"></a></p><h2 id="interacting-with-the-session" tabindex="-1"><a class="header-anchor" href="#interacting-with-the-session" aria-hidden="true">#</a> Interacting With The Session</h2><p><a name="retrieving-data"></a></p><h3 id="retrieving-data" tabindex="-1"><a class="header-anchor" href="#retrieving-data" aria-hidden="true">#</a> Retrieving Data</h3><p>There are two primary ways of working with session data in Laravel: the global <code>session</code> helper and via a <code>Request</code> instance. First, let&#39;s look at accessing the session via a <code>Request</code> instance, which can be type-hinted on a route closure or controller method. Remember, controller method dependencies are automatically injected via the Laravel <a href="./container">service container</a>:</p><pre><code>&lt;?php

namespace App\\Http\\Controllers;

use Illuminate\\Http\\Request;
use Illuminate\\View\\View;

class UserController extends Controller
{
    /**
     * Show the profile for the given user.
     */
    public function show(Request $request, string $id): View
    {
        $value = $request-&gt;session()-&gt;get(&#39;key&#39;);

        // ...

        $user = $this-&gt;users-&gt;find($id);

        return view(&#39;user.profile&#39;, [&#39;user&#39; =&gt; $user]);
    }
}
</code></pre><p>When you retrieve an item from the session, you may also pass a default value as the second argument to the <code>get</code> method. This default value will be returned if the specified key does not exist in the session. If you pass a closure as the default value to the <code>get</code> method and the requested key does not exist, the closure will be executed and its result returned:</p><pre><code>$value = $request-&gt;session()-&gt;get(&#39;key&#39;, &#39;default&#39;);

$value = $request-&gt;session()-&gt;get(&#39;key&#39;, function () {
    return &#39;default&#39;;
});
</code></pre><p><a name="the-global-session-helper"></a></p><h4 id="the-global-session-helper" tabindex="-1"><a class="header-anchor" href="#the-global-session-helper" aria-hidden="true">#</a> The Global Session Helper</h4><p>You may also use the global <code>session</code> PHP function to retrieve and store data in the session. When the <code>session</code> helper is called with a single, string argument, it will return the value of that session key. When the helper is called with an array of key / value pairs, those values will be stored in the session:</p><pre><code>Route::get(&#39;/home&#39;, function () {
    // Retrieve a piece of data from the session...
    $value = session(&#39;key&#39;);

    // Specifying a default value...
    $value = session(&#39;key&#39;, &#39;default&#39;);

    // Store a piece of data in the session...
    session([&#39;key&#39; =&gt; &#39;value&#39;]);
});
</code></pre><blockquote><p><strong>Note</strong><br> There is little practical difference between using the session via an HTTP request instance versus using the global <code>session</code> helper. Both methods are <a href="./testing">testable</a> via the <code>assertSessionHas</code> method which is available in all of your test cases.</p></blockquote><p><a name="retrieving-all-session-data"></a></p><h4 id="retrieving-all-session-data" tabindex="-1"><a class="header-anchor" href="#retrieving-all-session-data" aria-hidden="true">#</a> Retrieving All Session Data</h4><p>If you would like to retrieve all the data in the session, you may use the <code>all</code> method:</p><pre><code>$data = $request-&gt;session()-&gt;all();
</code></pre><p><a name="determining-if-an-item-exists-in-the-session"></a></p><h4 id="determining-if-an-item-exists-in-the-session" tabindex="-1"><a class="header-anchor" href="#determining-if-an-item-exists-in-the-session" aria-hidden="true">#</a> Determining If An Item Exists In The Session</h4><p>To determine if an item is present in the session, you may use the <code>has</code> method. The <code>has</code> method returns <code>true</code> if the item is present and is not <code>null</code>:</p><pre><code>if ($request-&gt;session()-&gt;has(&#39;users&#39;)) {
    // ...
}
</code></pre><p>To determine if an item is present in the session, even if its value is <code>null</code>, you may use the <code>exists</code> method:</p><pre><code>if ($request-&gt;session()-&gt;exists(&#39;users&#39;)) {
    // ...
}
</code></pre><p>To determine if an item is not present in the session, you may use the <code>missing</code> method. The <code>missing</code> method returns <code>true</code> if the item is not present:</p><pre><code>if ($request-&gt;session()-&gt;missing(&#39;users&#39;)) {
    // ...
}
</code></pre><p><a name="storing-data"></a></p><h3 id="storing-data" tabindex="-1"><a class="header-anchor" href="#storing-data" aria-hidden="true">#</a> Storing Data</h3><p>To store data in the session, you will typically use the request instance&#39;s <code>put</code> method or the global <code>session</code> helper:</p><pre><code>// Via a request instance...
$request-&gt;session()-&gt;put(&#39;key&#39;, &#39;value&#39;);

// Via the global &quot;session&quot; helper...
session([&#39;key&#39; =&gt; &#39;value&#39;]);
</code></pre><p><a name="pushing-to-array-session-values"></a></p><h4 id="pushing-to-array-session-values" tabindex="-1"><a class="header-anchor" href="#pushing-to-array-session-values" aria-hidden="true">#</a> Pushing To Array Session Values</h4><p>The <code>push</code> method may be used to push a new value onto a session value that is an array. For example, if the <code>user.teams</code> key contains an array of team names, you may push a new value onto the array like so:</p><pre><code>$request-&gt;session()-&gt;push(&#39;user.teams&#39;, &#39;developers&#39;);
</code></pre><p><a name="retrieving-deleting-an-item"></a></p><h4 id="retrieving-deleting-an-item" tabindex="-1"><a class="header-anchor" href="#retrieving-deleting-an-item" aria-hidden="true">#</a> Retrieving &amp; Deleting An Item</h4><p>The <code>pull</code> method will retrieve and delete an item from the session in a single statement:</p><pre><code>$value = $request-&gt;session()-&gt;pull(&#39;key&#39;, &#39;default&#39;);
</code></pre><p><a name="#incrementing-and-decrementing-session-values"></a></p><h4 id="incrementing-decrementing-session-values" tabindex="-1"><a class="header-anchor" href="#incrementing-decrementing-session-values" aria-hidden="true">#</a> Incrementing &amp; Decrementing Session Values</h4><p>If your session data contains an integer you wish to increment or decrement, you may use the <code>increment</code> and <code>decrement</code> methods:</p><pre><code>$request-&gt;session()-&gt;increment(&#39;count&#39;);

$request-&gt;session()-&gt;increment(&#39;count&#39;, $incrementBy = 2);

$request-&gt;session()-&gt;decrement(&#39;count&#39;);

$request-&gt;session()-&gt;decrement(&#39;count&#39;, $decrementBy = 2);
</code></pre><p><a name="flash-data"></a></p><h3 id="flash-data" tabindex="-1"><a class="header-anchor" href="#flash-data" aria-hidden="true">#</a> Flash Data</h3><p>Sometimes you may wish to store items in the session for the next request. You may do so using the <code>flash</code> method. Data stored in the session using this method will be available immediately and during the subsequent HTTP request. After the subsequent HTTP request, the flashed data will be deleted. Flash data is primarily useful for short-lived status messages:</p><pre><code>$request-&gt;session()-&gt;flash(&#39;status&#39;, &#39;Task was successful!&#39;);
</code></pre><p>If you need to persist your flash data for several requests, you may use the <code>reflash</code> method, which will keep all of the flash data for an additional request. If you only need to keep specific flash data, you may use the <code>keep</code> method:</p><pre><code>$request-&gt;session()-&gt;reflash();

$request-&gt;session()-&gt;keep([&#39;username&#39;, &#39;email&#39;]);
</code></pre><p>To persist your flash data only for the current request, you may use the <code>now</code> method:</p><pre><code>$request-&gt;session()-&gt;now(&#39;status&#39;, &#39;Task was successful!&#39;);
</code></pre><p><a name="deleting-data"></a></p><h3 id="deleting-data" tabindex="-1"><a class="header-anchor" href="#deleting-data" aria-hidden="true">#</a> Deleting Data</h3><p>The <code>forget</code> method will remove a piece of data from the session. If you would like to remove all data from the session, you may use the <code>flush</code> method:</p><pre><code>// Forget a single key...
$request-&gt;session()-&gt;forget(&#39;name&#39;);

// Forget multiple keys...
$request-&gt;session()-&gt;forget([&#39;name&#39;, &#39;status&#39;]);

$request-&gt;session()-&gt;flush();
</code></pre><p><a name="regenerating-the-session-id"></a></p><h3 id="regenerating-the-session-id" tabindex="-1"><a class="header-anchor" href="#regenerating-the-session-id" aria-hidden="true">#</a> Regenerating The Session ID</h3>`,68),b={href:"https://owasp.org/www-community/attacks/Session_fixation",target:"_blank",rel:"noopener noreferrer"},w=t(`<p>Laravel automatically regenerates the session ID during authentication if you are using one of the Laravel <a href="./starter-kits">application starter kits</a> or <a href="./fortify">Laravel Fortify</a>; however, if you need to manually regenerate the session ID, you may use the <code>regenerate</code> method:</p><pre><code>$request-&gt;session()-&gt;regenerate();
</code></pre><p>If you need to regenerate the session ID and remove all data from the session in a single statement, you may use the <code>invalidate</code> method:</p><pre><code>$request-&gt;session()-&gt;invalidate();
</code></pre><p><a name="session-blocking"></a></p><h2 id="session-blocking" tabindex="-1"><a class="header-anchor" href="#session-blocking" aria-hidden="true">#</a> Session Blocking</h2><blockquote><p><strong>Warning</strong><br> To utilize session blocking, your application must be using a cache driver that supports <a href="./cache#atomic-locks">atomic locks</a>. Currently, those cache drivers include the <code>memcached</code>, <code>dynamodb</code>, <code>redis</code>, and <code>database</code> drivers. In addition, you may not use the <code>cookie</code> session driver.</p></blockquote><p>By default, Laravel allows requests using the same session to execute concurrently. So, for example, if you use a JavaScript HTTP library to make two HTTP requests to your application, they will both execute at the same time. For many applications, this is not a problem; however, session data loss can occur in a small subset of applications that make concurrent requests to two different application endpoints which both write data to the session.</p><p>To mitigate this, Laravel provides functionality that allows you to limit concurrent requests for a given session. To get started, you may simply chain the <code>block</code> method onto your route definition. In this example, an incoming request to the <code>/profile</code> endpoint would acquire a session lock. While this lock is being held, any incoming requests to the <code>/profile</code> or <code>/order</code> endpoints which share the same session ID will wait for the first request to finish executing before continuing their execution:</p><pre><code>Route::post(&#39;/profile&#39;, function () {
    // ...
})-&gt;block($lockSeconds = 10, $waitSeconds = 10)

Route::post(&#39;/order&#39;, function () {
    // ...
})-&gt;block($lockSeconds = 10, $waitSeconds = 10)
</code></pre><p>The <code>block</code> method accepts two optional arguments. The first argument accepted by the <code>block</code> method is the maximum number of seconds the session lock should be held for before it is released. Of course, if the request finishes executing before this time the lock will be released earlier.</p><p>The second argument accepted by the <code>block</code> method is the number of seconds a request should wait while attempting to obtain a session lock. An <code>Illuminate\\Contracts\\Cache\\LockTimeoutException</code> will be thrown if the request is unable to obtain a session lock within the given number of seconds.</p><p>If neither of these arguments is passed, the lock will be obtained for a maximum of 10 seconds and requests will wait a maximum of 10 seconds while attempting to obtain a lock:</p><pre><code>Route::post(&#39;/profile&#39;, function () {
    // ...
})-&gt;block()
</code></pre><p><a name="adding-custom-session-drivers"></a></p><h2 id="adding-custom-session-drivers" tabindex="-1"><a class="header-anchor" href="#adding-custom-session-drivers" aria-hidden="true">#</a> Adding Custom Session Drivers</h2><p><a name="implementing-the-driver"></a></p><h4 id="implementing-the-driver" tabindex="-1"><a class="header-anchor" href="#implementing-the-driver" aria-hidden="true">#</a> Implementing The Driver</h4><p>If none of the existing session drivers fit your application&#39;s needs, Laravel makes it possible to write your own session handler. Your custom session driver should implement PHP&#39;s built-in <code>SessionHandlerInterface</code>. This interface contains just a few simple methods. A stubbed MongoDB implementation looks like the following:</p><pre><code>&lt;?php

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
</code></pre><blockquote><p><strong>Note</strong><br> Laravel does not ship with a directory to contain your extensions. You are free to place them anywhere you like. In this example, we have created an <code>Extensions</code> directory to house the <code>MongoSessionHandler</code>.</p></blockquote><p>Since the purpose of these methods is not readily understandable, let&#39;s quickly cover what each of the methods do:</p>`,22),k=e("div",{class:"content-list",markdown:"1"},[e("ul",null,[e("li",null,[s("The "),e("code",null,"open"),s(" method would typically be used in file based session store systems. Since Laravel ships with a "),e("code",null,"file"),s(" session driver, you will rarely need to put anything in this method. You can simply leave this method empty.")]),e("li",null,[s("The "),e("code",null,"close"),s(" method, like the "),e("code",null,"open"),s(" method, can also usually be disregarded. For most drivers, it is not needed.")]),e("li",null,[s("The "),e("code",null,"read"),s(" method should return the string version of the session data associated with the given "),e("code",null,"$sessionId"),s(". There is no need to do any serialization or other encoding when retrieving or storing session data in your driver, as Laravel will perform the serialization for you.")]),e("li",null,[s("The "),e("code",null,"write"),s(" method should write the given "),e("code",null,"$data"),s(" string associated with the "),e("code",null,"$sessionId"),s(" to some persistent storage system, such as MongoDB or another storage system of your choice. Again, you should not perform any serialization - Laravel will have already handled that for you.")]),e("li",null,[s("The "),e("code",null,"destroy"),s(" method should remove the data associated with the "),e("code",null,"$sessionId"),s(" from persistent storage.")]),e("li",null,[s("The "),e("code",null,"gc"),s(" method should destroy all session data that is older than the given "),e("code",null,"$lifetime"),s(", which is a UNIX timestamp. For self-expiring systems like Memcached and Redis, this method may be left empty.")])])],-1),q=t(`<p><a name="registering-the-driver"></a></p><h4 id="registering-the-driver" tabindex="-1"><a class="header-anchor" href="#registering-the-driver" aria-hidden="true">#</a> Registering The Driver</h4><p>Once your driver has been implemented, you are ready to register it with Laravel. To add additional drivers to Laravel&#39;s session backend, you may use the <code>extend</code> method provided by the <code>Session</code> <a href="./facades">facade</a>. You should call the <code>extend</code> method from the <code>boot</code> method of a <a href="./providers">service provider</a>. You may do this from the existing <code>App\\Providers\\AppServiceProvider</code> or create an entirely new provider:</p><pre><code>&lt;?php

namespace App\\Providers;

use App\\Extensions\\MongoSessionHandler;
use Illuminate\\Contracts\\Foundation\\Application;
use Illuminate\\Support\\Facades\\Session;
use Illuminate\\Support\\ServiceProvider;

class SessionServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        // ...
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        Session::extend(&#39;mongo&#39;, function (Application $app) {
            // Return an implementation of SessionHandlerInterface...
            return new MongoSessionHandler;
        });
    }
}
</code></pre><p>Once the session driver has been registered, you may use the <code>mongo</code> driver in your <code>config/session.php</code> configuration file.</p>`,5);function x($,T){const n=a("ExternalLinkIcon");return r(),d("div",null,[c,e("p",null,[s("Laravel ships with a variety of session backends that are accessed through an expressive, unified API. Support for popular backends such as "),e("a",h,[s("Memcached"),o(n)]),s(", "),e("a",u,[s("Redis"),o(n)]),s(", and databases is included.")]),p,m,g,f,v,y,e("p",null,[s("Regenerating the session ID is often done in order to prevent malicious users from exploiting a "),e("a",b,[s("session fixation"),o(n)]),s(" attack on your application.")]),w,k,q])}const _=i(l,[["render",x],["__file","session.html.vue"]]);export{_ as default};
