import{_ as r}from"./plugin-vue_export-helper-c27b6911.js";import{r as c,o as i,c as s,b as a,d as e,e as o,a as n}from"./app-8cdff07c.js";const d={},h=n('<h1 id="cache" tabindex="-1"><a class="header-anchor" href="#cache" aria-hidden="true">#</a> Cache</h1><ul><li><a href="#introduction">Introduction</a></li><li><a href="#configuration">Configuration</a><ul><li><a href="#driver-prerequisites">Driver Prerequisites</a></li></ul></li><li><a href="#cache-usage">Cache Usage</a><ul><li><a href="#obtaining-a-cache-instance">Obtaining A Cache Instance</a></li><li><a href="#retrieving-items-from-the-cache">Retrieving Items From The Cache</a></li><li><a href="#storing-items-in-the-cache">Storing Items In The Cache</a></li><li><a href="#removing-items-from-the-cache">Removing Items From The Cache</a></li><li><a href="#the-cache-helper">The Cache Helper</a></li></ul></li><li><a href="#atomic-locks">Atomic Locks</a><ul><li><a href="#lock-driver-prerequisites">Driver Prerequisites</a></li><li><a href="#managing-locks">Managing Locks</a></li><li><a href="#managing-locks-across-processes">Managing Locks Across Processes</a></li></ul></li><li><a href="#adding-custom-cache-drivers">Adding Custom Cache Drivers</a><ul><li><a href="#writing-the-driver">Writing The Driver</a></li><li><a href="#registering-the-driver">Registering The Driver</a></li></ul></li><li><a href="#events">Events</a></li></ul><p><a name="introduction"></a></p><h2 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h2>',4),l={href:"https://memcached.org",target:"_blank",rel:"noopener noreferrer"},u={href:"https://redis.io",target:"_blank",rel:"noopener noreferrer"},p=a("p",null,"Thankfully, Laravel provides an expressive, unified API for various cache backends, allowing you to take advantage of their blazing fast data retrieval and speed up your web application.",-1),m=a("p",null,[a("a",{name:"configuration"})],-1),g=a("h2",{id:"configuration",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#configuration","aria-hidden":"true"},"#"),e(" Configuration")],-1),f=a("code",null,"config/cache.php",-1),v={href:"https://memcached.org",target:"_blank",rel:"noopener noreferrer"},b={href:"https://redis.io",target:"_blank",rel:"noopener noreferrer"},y={href:"https://aws.amazon.com/dynamodb",target:"_blank",rel:"noopener noreferrer"},k=a("code",null,"array",-1),w=n(`<p>The cache configuration file also contains various other options, which are documented within the file, so make sure to read over these options. By default, Laravel is configured to use the <code>file</code> cache driver, which stores the serialized, cached objects on the server&#39;s filesystem. For larger applications, it is recommended that you use a more robust driver such as Memcached or Redis. You may even configure multiple cache configurations for the same driver.</p><p><a name="driver-prerequisites"></a></p><h3 id="driver-prerequisites" tabindex="-1"><a class="header-anchor" href="#driver-prerequisites" aria-hidden="true">#</a> Driver Prerequisites</h3><p><a name="prerequisites-database"></a></p><h4 id="database" tabindex="-1"><a class="header-anchor" href="#database" aria-hidden="true">#</a> Database</h4><p>When using the <code>database</code> cache driver, you will need to set up a table to contain the cache items. You&#39;ll find an example <code>Schema</code> declaration for the table below:</p><pre><code>Schema::create(&#39;cache&#39;, function (Blueprint $table) {
    $table-&gt;string(&#39;key&#39;)-&gt;unique();
    $table-&gt;text(&#39;value&#39;);
    $table-&gt;integer(&#39;expiration&#39;);
});
</code></pre><blockquote><p><strong>Note</strong><br> You may also use the <code>php artisan cache:table</code> Artisan command to generate a migration with the proper schema.</p></blockquote><p><a name="memcached"></a></p><h4 id="memcached" tabindex="-1"><a class="header-anchor" href="#memcached" aria-hidden="true">#</a> Memcached</h4>`,10),C={href:"https://pecl.php.net/package/memcached",target:"_blank",rel:"noopener noreferrer"},_=a("code",null,"config/cache.php",-1),x=a("code",null,"memcached.servers",-1),I=n(`<pre><code>&#39;memcached&#39; =&gt; [
    &#39;servers&#39; =&gt; [
        [
            &#39;host&#39; =&gt; env(&#39;MEMCACHED_HOST&#39;, &#39;127.0.0.1&#39;),
            &#39;port&#39; =&gt; env(&#39;MEMCACHED_PORT&#39;, 11211),
            &#39;weight&#39; =&gt; 100,
        ],
    ],
],
</code></pre><p>If needed, you may set the <code>host</code> option to a UNIX socket path. If you do this, the <code>port</code> option should be set to <code>0</code>:</p><pre><code>&#39;memcached&#39; =&gt; [
    [
        &#39;host&#39; =&gt; &#39;/var/run/memcached/memcached.sock&#39;,
        &#39;port&#39; =&gt; 0,
        &#39;weight&#39; =&gt; 100
    ],
],
</code></pre><p><a name="redis"></a></p><h4 id="redis" tabindex="-1"><a class="header-anchor" href="#redis" aria-hidden="true">#</a> Redis</h4>`,5),q=a("code",null,"predis/predis",-1),$=a("a",{href:"./sail"},"Laravel Sail",-1),T={href:"https://forge.laravel.com",target:"_blank",rel:"noopener noreferrer"},L={href:"https://vapor.laravel.com",target:"_blank",rel:"noopener noreferrer"},S=a("p",null,[e("For more information on configuring Redis, consult its "),a("a",{href:"./redis#configuration"},"Laravel documentation page"),e(".")],-1),M=a("p",null,[a("a",{name:"dynamodb"})],-1),A=a("h4",{id:"dynamodb",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#dynamodb","aria-hidden":"true"},"#"),e(" DynamoDB")],-1),D={href:"https://aws.amazon.com/dynamodb",target:"_blank",rel:"noopener noreferrer"},P=a("code",null,"cache",-1),F=a("code",null,"stores.dynamodb.table",-1),E=a("code",null,"cache",-1),B=n(`<p>This table should also have a string partition key with a name that corresponds to the value of the <code>stores.dynamodb.attributes.key</code> configuration item within your application&#39;s <code>cache</code> configuration file. By default, the partition key should be named <code>key</code>.</p><p><a name="cache-usage"></a></p><h2 id="cache-usage" tabindex="-1"><a class="header-anchor" href="#cache-usage" aria-hidden="true">#</a> Cache Usage</h2><p><a name="obtaining-a-cache-instance"></a></p><h3 id="obtaining-a-cache-instance" tabindex="-1"><a class="header-anchor" href="#obtaining-a-cache-instance" aria-hidden="true">#</a> Obtaining A Cache Instance</h3><p>To obtain a cache store instance, you may use the <code>Cache</code> facade, which is what we will use throughout this documentation. The <code>Cache</code> facade provides convenient, terse access to the underlying implementations of the Laravel cache contracts:</p><pre><code>&lt;?php

namespace App\\Http\\Controllers;

use Illuminate\\Support\\Facades\\Cache;

class UserController extends Controller
{
    /**
     * Show a list of all users of the application.
     */
    public function index(): array
    {
        $value = Cache::get(&#39;key&#39;);

        return [
            // ...
        ];
    }
}
</code></pre><p><a name="accessing-multiple-cache-stores"></a></p><h4 id="accessing-multiple-cache-stores" tabindex="-1"><a class="header-anchor" href="#accessing-multiple-cache-stores" aria-hidden="true">#</a> Accessing Multiple Cache Stores</h4><p>Using the <code>Cache</code> facade, you may access various cache stores via the <code>store</code> method. The key passed to the <code>store</code> method should correspond to one of the stores listed in the <code>stores</code> configuration array in your <code>cache</code> configuration file:</p><pre><code>$value = Cache::store(&#39;file&#39;)-&gt;get(&#39;foo&#39;);

Cache::store(&#39;redis&#39;)-&gt;put(&#39;bar&#39;, &#39;baz&#39;, 600); // 10 Minutes
</code></pre><p><a name="retrieving-items-from-the-cache"></a></p><h3 id="retrieving-items-from-the-cache" tabindex="-1"><a class="header-anchor" href="#retrieving-items-from-the-cache" aria-hidden="true">#</a> Retrieving Items From The Cache</h3><p>The <code>Cache</code> facade&#39;s <code>get</code> method is used to retrieve items from the cache. If the item does not exist in the cache, <code>null</code> will be returned. If you wish, you may pass a second argument to the <code>get</code> method specifying the default value you wish to be returned if the item doesn&#39;t exist:</p><pre><code>$value = Cache::get(&#39;key&#39;);

$value = Cache::get(&#39;key&#39;, &#39;default&#39;);
</code></pre><p>You may even pass a closure as the default value. The result of the closure will be returned if the specified item does not exist in the cache. Passing a closure allows you to defer the retrieval of default values from a database or other external service:</p><pre><code>$value = Cache::get(&#39;key&#39;, function () {
    return DB::table(/* ... */)-&gt;get();
});
</code></pre><p><a name="checking-for-item-existence"></a></p><h4 id="checking-for-item-existence" tabindex="-1"><a class="header-anchor" href="#checking-for-item-existence" aria-hidden="true">#</a> Checking For Item Existence</h4><p>The <code>has</code> method may be used to determine if an item exists in the cache. This method will also return <code>false</code> if the item exists but its value is <code>null</code>:</p><pre><code>if (Cache::has(&#39;key&#39;)) {
    // ...
}
</code></pre><p><a name="incrementing-decrementing-values"></a></p><h4 id="incrementing-decrementing-values" tabindex="-1"><a class="header-anchor" href="#incrementing-decrementing-values" aria-hidden="true">#</a> Incrementing / Decrementing Values</h4><p>The <code>increment</code> and <code>decrement</code> methods may be used to adjust the value of integer items in the cache. Both of these methods accept an optional second argument indicating the amount by which to increment or decrement the item&#39;s value:</p><pre><code>// Initialize the value if it does not exist...
Cache::add(&#39;key&#39;, 0, now()-&gt;addHours(4));

// Increment or decrement the value...
Cache::increment(&#39;key&#39;);
Cache::increment(&#39;key&#39;, $amount);
Cache::decrement(&#39;key&#39;);
Cache::decrement(&#39;key&#39;, $amount);
</code></pre><p><a name="retrieve-store"></a></p><h4 id="retrieve-store" tabindex="-1"><a class="header-anchor" href="#retrieve-store" aria-hidden="true">#</a> Retrieve &amp; Store</h4><p>Sometimes you may wish to retrieve an item from the cache, but also store a default value if the requested item doesn&#39;t exist. For example, you may wish to retrieve all users from the cache or, if they don&#39;t exist, retrieve them from the database and add them to the cache. You may do this using the <code>Cache::remember</code> method:</p><pre><code>$value = Cache::remember(&#39;users&#39;, $seconds, function () {
    return DB::table(&#39;users&#39;)-&gt;get();
});
</code></pre><p>If the item does not exist in the cache, the closure passed to the <code>remember</code> method will be executed and its result will be placed in the cache.</p><p>You may use the <code>rememberForever</code> method to retrieve an item from the cache or store it forever if it does not exist:</p><pre><code>$value = Cache::rememberForever(&#39;users&#39;, function () {
    return DB::table(&#39;users&#39;)-&gt;get();
});
</code></pre><p><a name="retrieve-delete"></a></p><h4 id="retrieve-delete" tabindex="-1"><a class="header-anchor" href="#retrieve-delete" aria-hidden="true">#</a> Retrieve &amp; Delete</h4><p>If you need to retrieve an item from the cache and then delete the item, you may use the <code>pull</code> method. Like the <code>get</code> method, <code>null</code> will be returned if the item does not exist in the cache:</p><pre><code>$value = Cache::pull(&#39;key&#39;);
</code></pre><p><a name="storing-items-in-the-cache"></a></p><h3 id="storing-items-in-the-cache" tabindex="-1"><a class="header-anchor" href="#storing-items-in-the-cache" aria-hidden="true">#</a> Storing Items In The Cache</h3><p>You may use the <code>put</code> method on the <code>Cache</code> facade to store items in the cache:</p><pre><code>Cache::put(&#39;key&#39;, &#39;value&#39;, $seconds = 10);
</code></pre><p>If the storage time is not passed to the <code>put</code> method, the item will be stored indefinitely:</p><pre><code>Cache::put(&#39;key&#39;, &#39;value&#39;);
</code></pre><p>Instead of passing the number of seconds as an integer, you may also pass a <code>DateTime</code> instance representing the desired expiration time of the cached item:</p><pre><code>Cache::put(&#39;key&#39;, &#39;value&#39;, now()-&gt;addMinutes(10));
</code></pre><p><a name="store-if-not-present"></a></p><h4 id="store-if-not-present" tabindex="-1"><a class="header-anchor" href="#store-if-not-present" aria-hidden="true">#</a> Store If Not Present</h4><p>The <code>add</code> method will only add the item to the cache if it does not already exist in the cache store. The method will return <code>true</code> if the item is actually added to the cache. Otherwise, the method will return <code>false</code>. The <code>add</code> method is an atomic operation:</p><pre><code>Cache::add(&#39;key&#39;, &#39;value&#39;, $seconds);
</code></pre><p><a name="storing-items-forever"></a></p><h4 id="storing-items-forever" tabindex="-1"><a class="header-anchor" href="#storing-items-forever" aria-hidden="true">#</a> Storing Items Forever</h4><p>The <code>forever</code> method may be used to store an item in the cache permanently. Since these items will not expire, they must be manually removed from the cache using the <code>forget</code> method:</p><pre><code>Cache::forever(&#39;key&#39;, &#39;value&#39;);
</code></pre><blockquote><p><strong>Note</strong><br> If you are using the Memcached driver, items that are stored &quot;forever&quot; may be removed when the cache reaches its size limit.</p></blockquote><p><a name="removing-items-from-the-cache"></a></p><h3 id="removing-items-from-the-cache" tabindex="-1"><a class="header-anchor" href="#removing-items-from-the-cache" aria-hidden="true">#</a> Removing Items From The Cache</h3><p>You may remove items from the cache using the <code>forget</code> method:</p><pre><code>Cache::forget(&#39;key&#39;);
</code></pre><p>You may also remove items by providing a zero or negative number of expiration seconds:</p><pre><code>Cache::put(&#39;key&#39;, &#39;value&#39;, 0);

Cache::put(&#39;key&#39;, &#39;value&#39;, -5);
</code></pre><p>You may clear the entire cache using the <code>flush</code> method:</p><pre><code>Cache::flush();
</code></pre><blockquote><p><strong>Warning</strong><br> Flushing the cache does not respect your configured cache &quot;prefix&quot; and will remove all entries from the cache. Consider this carefully when clearing a cache which is shared by other applications.</p></blockquote><p><a name="the-cache-helper"></a></p><h3 id="the-cache-helper" tabindex="-1"><a class="header-anchor" href="#the-cache-helper" aria-hidden="true">#</a> The Cache Helper</h3><p>In addition to using the <code>Cache</code> facade, you may also use the global <code>cache</code> function to retrieve and store data via the cache. When the <code>cache</code> function is called with a single, string argument, it will return the value of the given key:</p><pre><code>$value = cache(&#39;key&#39;);
</code></pre><p>If you provide an array of key / value pairs and an expiration time to the function, it will store values in the cache for the specified duration:</p><pre><code>cache([&#39;key&#39; =&gt; &#39;value&#39;], $seconds);

cache([&#39;key&#39; =&gt; &#39;value&#39;], now()-&gt;addMinutes(10));
</code></pre><p>When the <code>cache</code> function is called without any arguments, it returns an instance of the <code>Illuminate\\Contracts\\Cache\\Factory</code> implementation, allowing you to call other caching methods:</p><pre><code>cache()-&gt;remember(&#39;users&#39;, $seconds, function () {
    return DB::table(&#39;users&#39;)-&gt;get();
});
</code></pre><blockquote><p><strong>Note</strong><br> When testing call to the global <code>cache</code> function, you may use the <code>Cache::shouldReceive</code> method just as if you were <a href="./mocking#mocking-facades">testing the facade</a>.</p></blockquote><p><a name="atomic-locks"></a></p><h2 id="atomic-locks" tabindex="-1"><a class="header-anchor" href="#atomic-locks" aria-hidden="true">#</a> Atomic Locks</h2><blockquote><p><strong>Warning</strong><br> To utilize this feature, your application must be using the <code>memcached</code>, <code>redis</code>, <code>dynamodb</code>, <code>database</code>, <code>file</code>, or <code>array</code> cache driver as your application&#39;s default cache driver. In addition, all servers must be communicating with the same central cache server.</p></blockquote><p><a name="lock-driver-prerequisites"></a></p><h3 id="driver-prerequisites-1" tabindex="-1"><a class="header-anchor" href="#driver-prerequisites-1" aria-hidden="true">#</a> Driver Prerequisites</h3><p><a name="atomic-locks-prerequisites-database"></a></p><h4 id="database-1" tabindex="-1"><a class="header-anchor" href="#database-1" aria-hidden="true">#</a> Database</h4><p>When using the <code>database</code> cache driver, you will need to setup a table to contain your application&#39;s cache locks. You&#39;ll find an example <code>Schema</code> declaration for the table below:</p><pre><code>Schema::create(&#39;cache_locks&#39;, function (Blueprint $table) {
    $table-&gt;string(&#39;key&#39;)-&gt;primary();
    $table-&gt;string(&#39;owner&#39;);
    $table-&gt;integer(&#39;expiration&#39;);
});
</code></pre><blockquote><p><strong>Note</strong> If you used the <code>cache:table</code> Artisan command to create the database driver&#39;s cache table, the migration created by that command already includes a definition for the <code>cache_locks</code> table.</p></blockquote><p><a name="managing-locks"></a></p><h3 id="managing-locks" tabindex="-1"><a class="header-anchor" href="#managing-locks" aria-hidden="true">#</a> Managing Locks</h3>`,83),R={href:"https://forge.laravel.com",target:"_blank",rel:"noopener noreferrer"},W=a("code",null,"Cache::lock",-1),H=n(`<pre><code>use Illuminate\\Support\\Facades\\Cache;

$lock = Cache::lock(&#39;foo&#39;, 10);

if ($lock-&gt;get()) {
    // Lock acquired for 10 seconds...

    $lock-&gt;release();
}
</code></pre><p>The <code>get</code> method also accepts a closure. After the closure is executed, Laravel will automatically release the lock:</p><pre><code>Cache::lock(&#39;foo&#39;, 10)-&gt;get(function () {
    // Lock acquired for 10 seconds and automatically released...
});
</code></pre><p>If the lock is not available at the moment you request it, you may instruct Laravel to wait for a specified number of seconds. If the lock can not be acquired within the specified time limit, an <code>Illuminate\\Contracts\\Cache\\LockTimeoutException</code> will be thrown:</p><pre><code>use Illuminate\\Contracts\\Cache\\LockTimeoutException;

$lock = Cache::lock(&#39;foo&#39;, 10);

try {
    $lock-&gt;block(5);

    // Lock acquired after waiting a maximum of 5 seconds...
} catch (LockTimeoutException $e) {
    // Unable to acquire lock...
} finally {
    $lock?-&gt;release();
}
</code></pre><p>The example above may be simplified by passing a closure to the <code>block</code> method. When a closure is passed to this method, Laravel will attempt to acquire the lock for the specified number of seconds and will automatically release the lock once the closure has been executed:</p><pre><code>Cache::lock(&#39;foo&#39;, 10)-&gt;block(5, function () {
    // Lock acquired after waiting a maximum of 5 seconds...
});
</code></pre><p><a name="managing-locks-across-processes"></a></p><h3 id="managing-locks-across-processes" tabindex="-1"><a class="header-anchor" href="#managing-locks-across-processes" aria-hidden="true">#</a> Managing Locks Across Processes</h3><p>Sometimes, you may wish to acquire a lock in one process and release it in another process. For example, you may acquire a lock during a web request and wish to release the lock at the end of a queued job that is triggered by that request. In this scenario, you should pass the lock&#39;s scoped &quot;owner token&quot; to the queued job so that the job can re-instantiate the lock using the given token.</p><p>In the example below, we will dispatch a queued job if a lock is successfully acquired. In addition, we will pass the lock&#39;s owner token to the queued job via the lock&#39;s <code>owner</code> method:</p><pre><code>$podcast = Podcast::find($id);

$lock = Cache::lock(&#39;processing&#39;, 120);

if ($lock-&gt;get()) {
    ProcessPodcast::dispatch($podcast, $lock-&gt;owner());
}
</code></pre><p>Within our application&#39;s <code>ProcessPodcast</code> job, we can restore and release the lock using the owner token:</p><pre><code>Cache::restoreLock(&#39;processing&#39;, $this-&gt;owner)-&gt;release();
</code></pre><p>If you would like to release a lock without respecting its current owner, you may use the <code>forceRelease</code> method:</p><pre><code>Cache::lock(&#39;processing&#39;)-&gt;forceRelease();
</code></pre><p><a name="adding-custom-cache-drivers"></a></p><h2 id="adding-custom-cache-drivers" tabindex="-1"><a class="header-anchor" href="#adding-custom-cache-drivers" aria-hidden="true">#</a> Adding Custom Cache Drivers</h2><p><a name="writing-the-driver"></a></p><h3 id="writing-the-driver" tabindex="-1"><a class="header-anchor" href="#writing-the-driver" aria-hidden="true">#</a> Writing The Driver</h3><p>To create our custom cache driver, we first need to implement the <code>Illuminate\\Contracts\\Cache\\Store</code> <a href="./contracts">contract</a>. So, a MongoDB cache implementation might look something like this:</p><pre><code>&lt;?php

namespace App\\Extensions;

use Illuminate\\Contracts\\Cache\\Store;

class MongoStore implements Store
{
    public function get($key) {}
    public function many(array $keys) {}
    public function put($key, $value, $seconds) {}
    public function putMany(array $values, $seconds) {}
    public function increment($key, $value = 1) {}
    public function decrement($key, $value = 1) {}
    public function forever($key, $value) {}
    public function forget($key) {}
    public function flush() {}
    public function getPrefix() {}
}
</code></pre>`,22),Y=a("code",null,"Illuminate\\Cache\\MemcachedStore",-1),j={href:"https://github.com/laravel/framework",target:"_blank",rel:"noopener noreferrer"},N=a("code",null,"Cache",-1),z=a("code",null,"extend",-1),K=n(`<pre><code>Cache::extend(&#39;mongo&#39;, function (Application $app) {
    return Cache::repository(new MongoStore);
});
</code></pre><blockquote><p><strong>Note</strong><br> If you&#39;re wondering where to put your custom cache driver code, you could create an <code>Extensions</code> namespace within your <code>app</code> directory. However, keep in mind that Laravel does not have a rigid application structure and you are free to organize your application according to your preferences.</p></blockquote><p><a name="registering-the-driver"></a></p><h3 id="registering-the-driver" tabindex="-1"><a class="header-anchor" href="#registering-the-driver" aria-hidden="true">#</a> Registering The Driver</h3><p>To register the custom cache driver with Laravel, we will use the <code>extend</code> method on the <code>Cache</code> facade. Since other service providers may attempt to read cached values within their <code>boot</code> method, we will register our custom driver within a <code>booting</code> callback. By using the <code>booting</code> callback, we can ensure that the custom driver is registered just before the <code>boot</code> method is called on our application&#39;s service providers but after the <code>register</code> method is called on all of the service providers. We will register our <code>booting</code> callback within the <code>register</code> method of our application&#39;s <code>App\\Providers\\AppServiceProvider</code> class:</p><pre><code>&lt;?php

namespace App\\Providers;

use App\\Extensions\\MongoStore;
use Illuminate\\Contracts\\Foundation\\Application;
use Illuminate\\Support\\Facades\\Cache;
use Illuminate\\Support\\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        $this-&gt;app-&gt;booting(function () {
             Cache::extend(&#39;mongo&#39;, function (Application $app) {
                 return Cache::repository(new MongoStore);
             });
         });
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        // ...
    }
}
</code></pre><p>The first argument passed to the <code>extend</code> method is the name of the driver. This will correspond to your <code>driver</code> option in the <code>config/cache.php</code> configuration file. The second argument is a closure that should return an <code>Illuminate\\Cache\\Repository</code> instance. The closure will be passed an <code>$app</code> instance, which is an instance of the <a href="./container">service container</a>.</p><p>Once your extension is registered, update your <code>config/cache.php</code> configuration file&#39;s <code>driver</code> option to the name of your extension.</p><p><a name="events"></a></p><h2 id="events" tabindex="-1"><a class="header-anchor" href="#events" aria-hidden="true">#</a> Events</h2><p>To execute code on every cache operation, you may listen for the <a href="./events">events</a> fired by the cache. Typically, you should place these event listeners within your application&#39;s <code>App\\Providers\\EventServiceProvider</code> class:</p><pre><code>use App\\Listeners\\LogCacheHit;
use App\\Listeners\\LogCacheMissed;
use App\\Listeners\\LogKeyForgotten;
use App\\Listeners\\LogKeyWritten;
use Illuminate\\Cache\\Events\\CacheHit;
use Illuminate\\Cache\\Events\\CacheMissed;
use Illuminate\\Cache\\Events\\KeyForgotten;
use Illuminate\\Cache\\Events\\KeyWritten;

/**
 * The event listener mappings for the application.
 *
 * @var array
 */
protected $listen = [
    CacheHit::class =&gt; [
        LogCacheHit::class,
    ],

    CacheMissed::class =&gt; [
        LogCacheMissed::class,
    ],

    KeyForgotten::class =&gt; [
        LogKeyForgotten::class,
    ],

    KeyWritten::class =&gt; [
        LogKeyWritten::class,
    ],
];
</code></pre>`,12);function U(O,V){const t=c("ExternalLinkIcon");return i(),s("div",null,[h,a("p",null,[e("Some of the data retrieval or processing tasks performed by your application could be CPU intensive or take several seconds to complete. When this is the case, it is common to cache the retrieved data for a time so it can be retrieved quickly on subsequent requests for the same data. The cached data is usually stored in a very fast data store such as "),a("a",l,[e("Memcached"),o(t)]),e(" or "),a("a",u,[e("Redis"),o(t)]),e(".")]),p,m,g,a("p",null,[e("Your application's cache configuration file is located at "),f,e(". In this file, you may specify which cache driver you would like to be used by default throughout your application. Laravel supports popular caching backends like "),a("a",v,[e("Memcached"),o(t)]),e(", "),a("a",b,[e("Redis"),o(t)]),e(", "),a("a",y,[e("DynamoDB"),o(t)]),e(", and relational databases out of the box. In addition, a file based cache driver is available, while "),k,e(' and "null" cache drivers provide convenient cache backends for your automated tests.')]),w,a("p",null,[e("Using the Memcached driver requires the "),a("a",C,[e("Memcached PECL package"),o(t)]),e(" to be installed. You may list all of your Memcached servers in the "),_,e(" configuration file. This file already contains a "),x,e(" entry to get you started:")]),I,a("p",null,[e("Before using a Redis cache with Laravel, you will need to either install the PhpRedis PHP extension via PECL or install the "),q,e(" package (~1.0) via Composer. "),$,e(" already includes this extension. In addition, official Laravel deployment platforms such as "),a("a",T,[e("Laravel Forge"),o(t)]),e(" and "),a("a",L,[e("Laravel Vapor"),o(t)]),e(" have the PhpRedis extension installed by default.")]),S,M,A,a("p",null,[e("Before using the "),a("a",D,[e("DynamoDB"),o(t)]),e(" cache driver, you must create a DynamoDB table to store all of the cached data. Typically, this table should be named "),P,e(". However, you should name the table based on the value of the "),F,e(" configuration value within your application's "),E,e(" configuration file.")]),B,a("p",null,[e("Atomic locks allow for the manipulation of distributed locks without worrying about race conditions. For example, "),a("a",R,[e("Laravel Forge"),o(t)]),e(" uses atomic locks to ensure that only one remote task is being executed on a server at a time. You may create and manage locks using the "),W,e(" method:")]),H,a("p",null,[e("We just need to implement each of these methods using a MongoDB connection. For an example of how to implement each of these methods, take a look at the "),Y,e(" in the "),a("a",j,[e("Laravel framework source code"),o(t)]),e(". Once our implementation is complete, we can finish our custom driver registration by calling the "),N,e(" facade's "),z,e(" method:")]),K])}const J=r(d,[["render",U],["__file","cache.html.vue"]]);export{J as default};
