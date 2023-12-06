import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{r as s,o as r,c as d,b as n,d as e,e as t,a as i}from"./app-06635a3b.js";const c={},l=i('<h1 id="redis" tabindex="-1"><a class="header-anchor" href="#redis" aria-hidden="true">#</a> Redis</h1><ul><li><a href="#introduction">Introduction</a></li><li><a href="#configuration">Configuration</a><ul><li><a href="#clusters">Clusters</a></li><li><a href="#predis">Predis</a></li><li><a href="#phpredis">phpredis</a></li></ul></li><li><a href="#interacting-with-redis">Interacting With Redis</a><ul><li><a href="#transactions">Transactions</a></li><li><a href="#pipelining-commands">Pipelining Commands</a></li></ul></li><li><a href="#pubsub">Pub / Sub</a></li></ul><p><a name="introduction"></a></p><h2 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h2>',4),h={href:"https://redis.io",target:"_blank",rel:"noopener noreferrer"},p={href:"https://redis.io/topics/data-types#strings",target:"_blank",rel:"noopener noreferrer"},u={href:"https://redis.io/topics/data-types#hashes",target:"_blank",rel:"noopener noreferrer"},m={href:"https://redis.io/topics/data-types#lists",target:"_blank",rel:"noopener noreferrer"},g={href:"https://redis.io/topics/data-types#sets",target:"_blank",rel:"noopener noreferrer"},f={href:"https://redis.io/topics/data-types#sorted-sets",target:"_blank",rel:"noopener noreferrer"},R={href:"https://github.com/phpredis/phpredis",target:"_blank",rel:"noopener noreferrer"},y=n("a",{href:"./sail"},"Laravel Sail",-1),_=i(`<p>If you are unable to install the phpredis extension, you may install the <code>predis/predis</code> package via Composer. Predis is a Redis client written entirely in PHP and does not require any additional extensions:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">composer</span> require predis/predis
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a name="configuration"></a></p><h2 id="configuration" tabindex="-1"><a class="header-anchor" href="#configuration" aria-hidden="true">#</a> Configuration</h2><p>You may configure your application&#39;s Redis settings via the <code>config/database.php</code> configuration file. Within this file, you will see a <code>redis</code> array containing the Redis servers utilized by your application:</p><pre><code>&#39;redis&#39; =&gt; [

    &#39;client&#39; =&gt; env(&#39;REDIS_CLIENT&#39;, &#39;phpredis&#39;),

    &#39;default&#39; =&gt; [
        &#39;host&#39; =&gt; env(&#39;REDIS_HOST&#39;, &#39;127.0.0.1&#39;),
        &#39;password&#39; =&gt; env(&#39;REDIS_PASSWORD&#39;),
        &#39;port&#39; =&gt; env(&#39;REDIS_PORT&#39;, 6379),
        &#39;database&#39; =&gt; env(&#39;REDIS_DB&#39;, 0),
    ],

    &#39;cache&#39; =&gt; [
        &#39;host&#39; =&gt; env(&#39;REDIS_HOST&#39;, &#39;127.0.0.1&#39;),
        &#39;password&#39; =&gt; env(&#39;REDIS_PASSWORD&#39;),
        &#39;port&#39; =&gt; env(&#39;REDIS_PORT&#39;, 6379),
        &#39;database&#39; =&gt; env(&#39;REDIS_CACHE_DB&#39;, 1),
    ],

],
</code></pre><p>Each Redis server defined in your configuration file is required to have a name, host, and a port unless you define a single URL to represent the Redis connection:</p><pre><code>&#39;redis&#39; =&gt; [

    &#39;client&#39; =&gt; env(&#39;REDIS_CLIENT&#39;, &#39;phpredis&#39;),

    &#39;default&#39; =&gt; [
        &#39;url&#39; =&gt; &#39;tcp://127.0.0.1:6379?database=0&#39;,
    ],

    &#39;cache&#39; =&gt; [
        &#39;url&#39; =&gt; &#39;tls://user:password@127.0.0.1:6380?database=1&#39;,
    ],

],
</code></pre><p><a name="configuring-the-connection-scheme"></a></p><h4 id="configuring-the-connection-scheme" tabindex="-1"><a class="header-anchor" href="#configuring-the-connection-scheme" aria-hidden="true">#</a> Configuring The Connection Scheme</h4><p>By default, Redis clients will use the <code>tcp</code> scheme when connecting to your Redis servers; however, you may use TLS / SSL encryption by specifying a <code>scheme</code> configuration option in your Redis server&#39;s configuration array:</p><pre><code>&#39;redis&#39; =&gt; [

    &#39;client&#39; =&gt; env(&#39;REDIS_CLIENT&#39;, &#39;phpredis&#39;),

    &#39;default&#39; =&gt; [
        &#39;scheme&#39; =&gt; &#39;tls&#39;,
        &#39;host&#39; =&gt; env(&#39;REDIS_HOST&#39;, &#39;127.0.0.1&#39;),
        &#39;password&#39; =&gt; env(&#39;REDIS_PASSWORD&#39;),
        &#39;port&#39; =&gt; env(&#39;REDIS_PORT&#39;, 6379),
        &#39;database&#39; =&gt; env(&#39;REDIS_DB&#39;, 0),
    ],

],
</code></pre><p><a name="clusters"></a></p><h3 id="clusters" tabindex="-1"><a class="header-anchor" href="#clusters" aria-hidden="true">#</a> Clusters</h3><p>If your application is utilizing a cluster of Redis servers, you should define these clusters within a <code>clusters</code> key of your Redis configuration. This configuration key does not exist by default so you will need to create it within your application&#39;s <code>config/database.php</code> configuration file:</p><pre><code>&#39;redis&#39; =&gt; [

    &#39;client&#39; =&gt; env(&#39;REDIS_CLIENT&#39;, &#39;phpredis&#39;),

    &#39;clusters&#39; =&gt; [
        &#39;default&#39; =&gt; [
            [
                &#39;host&#39; =&gt; env(&#39;REDIS_HOST&#39;, &#39;localhost&#39;),
                &#39;password&#39; =&gt; env(&#39;REDIS_PASSWORD&#39;),
                &#39;port&#39; =&gt; env(&#39;REDIS_PORT&#39;, 6379),
                &#39;database&#39; =&gt; 0,
            ],
        ],
    ],

],
</code></pre><p>By default, clusters will perform client-side sharding across your nodes, allowing you to pool nodes and create a large amount of available RAM. However, client-side sharding does not handle failover; therefore, it is primarily suited for transient cached data that is available from another primary data store.</p><p>If you would like to use native Redis clustering instead of client-side sharding, you may specify this by setting the <code>options.cluster</code> configuration value to <code>redis</code> within your application&#39;s <code>config/database.php</code> configuration file:</p><pre><code>&#39;redis&#39; =&gt; [

    &#39;client&#39; =&gt; env(&#39;REDIS_CLIENT&#39;, &#39;phpredis&#39;),

    &#39;options&#39; =&gt; [
        &#39;cluster&#39; =&gt; env(&#39;REDIS_CLUSTER&#39;, &#39;redis&#39;),
    ],

    &#39;clusters&#39; =&gt; [
        // ...
    ],

],
</code></pre><p><a name="predis"></a></p><h3 id="predis" tabindex="-1"><a class="header-anchor" href="#predis" aria-hidden="true">#</a> Predis</h3><p>If you would like your application to interact with Redis via the Predis package, you should ensure the <code>REDIS_CLIENT</code> environment variable&#39;s value is <code>predis</code>:</p><pre><code>&#39;redis&#39; =&gt; [

    &#39;client&#39; =&gt; env(&#39;REDIS_CLIENT&#39;, &#39;predis&#39;),

    // ...
],
</code></pre>`,23),b=n("code",null,"host",-1),v=n("code",null,"port",-1),S=n("code",null,"database",-1),w=n("code",null,"password",-1),I={href:"https://github.com/nrk/predis/wiki/Connection-Parameters",target:"_blank",rel:"noopener noreferrer"},E=n("code",null,"config/database.php",-1),T=i(`<pre><code>&#39;default&#39; =&gt; [
    &#39;host&#39; =&gt; env(&#39;REDIS_HOST&#39;, &#39;localhost&#39;),
    &#39;password&#39; =&gt; env(&#39;REDIS_PASSWORD&#39;),
    &#39;port&#39; =&gt; env(&#39;REDIS_PORT&#39;, 6379),
    &#39;database&#39; =&gt; 0,
    &#39;read_write_timeout&#39; =&gt; 60,
],
</code></pre><p><a name="the-redis-facade-alias"></a></p><h4 id="the-redis-facade-alias" tabindex="-1"><a class="header-anchor" href="#the-redis-facade-alias" aria-hidden="true">#</a> The Redis Facade Alias</h4><p>Laravel&#39;s <code>config/app.php</code> configuration file contains an <code>aliases</code> array which defines all of the class aliases that will be registered by the framework. By default, no <code>Redis</code> alias is included because it would conflict with the <code>Redis</code> class name provided by the phpredis extension. If you are using the Predis client and would like to add a <code>Redis</code> alias, you may add it to the <code>aliases</code> array in your application&#39;s <code>config/app.php</code> configuration file:</p><pre><code>&#39;aliases&#39; =&gt; Facade::defaultAliases()-&gt;merge([
    &#39;Redis&#39; =&gt; Illuminate\\Support\\Facades\\Redis::class,
])-&gt;toArray(),
</code></pre><p><a name="phpredis"></a></p><h3 id="phpredis" tabindex="-1"><a class="header-anchor" href="#phpredis" aria-hidden="true">#</a> phpredis</h3><p>By default, Laravel will use the phpredis extension to communicate with Redis. The client that Laravel will use to communicate with Redis is dictated by the value of the <code>redis.client</code> configuration option, which typically reflects the value of the <code>REDIS_CLIENT</code> environment variable:</p><pre><code>&#39;redis&#39; =&gt; [

    &#39;client&#39; =&gt; env(&#39;REDIS_CLIENT&#39;, &#39;phpredis&#39;),

    // Rest of Redis configuration...
],
</code></pre><p>In addition to the default <code>scheme</code>, <code>host</code>, <code>port</code>, <code>database</code>, and <code>password</code> server configuration options, phpredis supports the following additional connection parameters: <code>name</code>, <code>persistent</code>, <code>persistent_id</code>, <code>prefix</code>, <code>read_timeout</code>, <code>retry_interval</code>, <code>timeout</code>, and <code>context</code>. You may add any of these options to your Redis server configuration in the <code>config/database.php</code> configuration file:</p><pre><code>&#39;default&#39; =&gt; [
    &#39;host&#39; =&gt; env(&#39;REDIS_HOST&#39;, &#39;localhost&#39;),
    &#39;password&#39; =&gt; env(&#39;REDIS_PASSWORD&#39;),
    &#39;port&#39; =&gt; env(&#39;REDIS_PORT&#39;, 6379),
    &#39;database&#39; =&gt; 0,
    &#39;read_timeout&#39; =&gt; 60,
    &#39;context&#39; =&gt; [
        // &#39;auth&#39; =&gt; [&#39;username&#39;, &#39;secret&#39;],
        // &#39;stream&#39; =&gt; [&#39;verify_peer&#39; =&gt; false],
    ],
],
</code></pre><p><a name="phpredis-serialization"></a></p><h4 id="phpredis-serialization-compression" tabindex="-1"><a class="header-anchor" href="#phpredis-serialization-compression" aria-hidden="true">#</a> phpredis Serialization &amp; Compression</h4><p>The phpredis extension may also be configured to use a variety of serialization and compression algorithms. These algorithms can be configured via the <code>options</code> array of your Redis configuration:</p><pre><code>&#39;redis&#39; =&gt; [

    &#39;client&#39; =&gt; env(&#39;REDIS_CLIENT&#39;, &#39;phpredis&#39;),

    &#39;options&#39; =&gt; [
        &#39;serializer&#39; =&gt; Redis::SERIALIZER_MSGPACK,
        &#39;compression&#39; =&gt; Redis::COMPRESSION_LZ4,
    ],

    // Rest of Redis configuration...
],
</code></pre><p>Currently supported serialization algorithms include: <code>Redis::SERIALIZER_NONE</code> (default), <code>Redis::SERIALIZER_PHP</code>, <code>Redis::SERIALIZER_JSON</code>, <code>Redis::SERIALIZER_IGBINARY</code>, and <code>Redis::SERIALIZER_MSGPACK</code>.</p><p>Supported compression algorithms include: <code>Redis::COMPRESSION_NONE</code> (default), <code>Redis::COMPRESSION_LZF</code>, <code>Redis::COMPRESSION_ZSTD</code>, and <code>Redis::COMPRESSION_LZ4</code>.</p><p><a name="interacting-with-redis"></a></p><h2 id="interacting-with-redis" tabindex="-1"><a class="header-anchor" href="#interacting-with-redis" aria-hidden="true">#</a> Interacting With Redis</h2>`,19),x=n("code",null,"Redis",-1),C=n("a",{href:"./facades"},"facade",-1),k=n("code",null,"Redis",-1),D={href:"https://redis.io/commands",target:"_blank",rel:"noopener noreferrer"},P=n("code",null,"GET",-1),L=n("code",null,"get",-1),O=n("code",null,"Redis",-1),A=i(`<pre><code>&lt;?php

namespace App\\Http\\Controllers;

use App\\Http\\Controllers\\Controller;
use Illuminate\\Support\\Facades\\Redis;
use Illuminate\\View\\View;

class UserController extends Controller
{
    /**
     * Show the profile for the given user.
     */
    public function show(string $id): View
    {
        return view(&#39;user.profile&#39;, [
            &#39;user&#39; =&gt; Redis::get(&#39;user:profile:&#39;.$id)
        ]);
    }
}
</code></pre><p>As mentioned above, you may call any of Redis&#39; commands on the <code>Redis</code> facade. Laravel uses magic methods to pass the commands to the Redis server. If a Redis command expects arguments, you should pass those to the facade&#39;s corresponding method:</p><pre><code>use Illuminate\\Support\\Facades\\Redis;

Redis::set(&#39;name&#39;, &#39;Taylor&#39;);

$values = Redis::lrange(&#39;names&#39;, 5, 10);
</code></pre><p>Alternatively, you may pass commands to the server using the <code>Redis</code> facade&#39;s <code>command</code> method, which accepts the name of the command as its first argument and an array of values as its second argument:</p><pre><code>$values = Redis::command(&#39;lrange&#39;, [&#39;name&#39;, 5, 10]);
</code></pre><p><a name="using-multiple-redis-connections"></a></p><h4 id="using-multiple-redis-connections" tabindex="-1"><a class="header-anchor" href="#using-multiple-redis-connections" aria-hidden="true">#</a> Using Multiple Redis Connections</h4><p>Your application&#39;s <code>config/database.php</code> configuration file allows you to define multiple Redis connections / servers. You may obtain a connection to a specific Redis connection using the <code>Redis</code> facade&#39;s <code>connection</code> method:</p><pre><code>$redis = Redis::connection(&#39;connection-name&#39;);
</code></pre><p>To obtain an instance of the default Redis connection, you may call the <code>connection</code> method without any additional arguments:</p><pre><code>$redis = Redis::connection();
</code></pre><p><a name="transactions"></a></p><h3 id="transactions" tabindex="-1"><a class="header-anchor" href="#transactions" aria-hidden="true">#</a> Transactions</h3><p>The <code>Redis</code> facade&#39;s <code>transaction</code> method provides a convenient wrapper around Redis&#39; native <code>MULTI</code> and <code>EXEC</code> commands. The <code>transaction</code> method accepts a closure as its only argument. This closure will receive a Redis connection instance and may issue any commands it would like to this instance. All of the Redis commands issued within the closure will be executed in a single, atomic transaction:</p><pre><code>use Redis;
use Illuminate\\Support\\Facades;

Facades\\Redis::transaction(function (Redis $redis) {
    $redis-&gt;incr(&#39;user_visits&#39;, 1);
    $redis-&gt;incr(&#39;total_visits&#39;, 1);
});
</code></pre><blockquote><p><strong>Warning</strong><br> When defining a Redis transaction, you may not retrieve any values from the Redis connection. Remember, your transaction is executed as a single, atomic operation and that operation is not executed until your entire closure has finished executing its commands.</p></blockquote><h4 id="lua-scripts" tabindex="-1"><a class="header-anchor" href="#lua-scripts" aria-hidden="true">#</a> Lua Scripts</h4>`,17),$=n("code",null,"eval",-1),N=n("code",null,"eval",-1),F={href:"https://www.lua.org",target:"_blank",rel:"noopener noreferrer"},H=n("p",null,[e("The "),n("code",null,"eval"),e(" method can be a bit scary at first, but we'll explore a basic example to break the ice. The "),n("code",null,"eval"),e(" method expects several arguments. First, you should pass the Lua script (as a string) to the method. Secondly, you should pass the number of keys (as an integer) that the script interacts with. Thirdly, you should pass the names of those keys. Finally, you may pass any other additional arguments that you need to access within your script.")],-1),W=n("p",null,"In this example, we will increment a counter, inspect its new value, and increment a second counter if the first counter's value is greater than five. Finally, we will return the value of the first counter:",-1),B=n("pre",null,[n("code",null,`$value = Redis::eval(<<<'LUA'
    local counter = redis.call("incr", KEYS[1])

    if counter > 5 then
        redis.call("incr", KEYS[2])
    end

    return counter
LUA, 2, 'first-counter', 'second-counter');
`)],-1),z=n("strong",null,"Warning",-1),q=n("br",null,null,-1),M={href:"https://redis.io/commands/eval",target:"_blank",rel:"noopener noreferrer"},Y=i(`<p><a name="pipelining-commands"></a></p><h3 id="pipelining-commands" tabindex="-1"><a class="header-anchor" href="#pipelining-commands" aria-hidden="true">#</a> Pipelining Commands</h3><p>Sometimes you may need to execute dozens of Redis commands. Instead of making a network trip to your Redis server for each command, you may use the <code>pipeline</code> method. The <code>pipeline</code> method accepts one argument: a closure that receives a Redis instance. You may issue all of your commands to this Redis instance and they will all be sent to the Redis server at the same time to reduce network trips to the server. The commands will still be executed in the order they were issued:</p><pre><code>use Redis;
use Illuminate\\Support\\Facades;

Facades\\Redis::pipeline(function (Redis $pipe) {
    for ($i = 0; $i &lt; 1000; $i++) {
        $pipe-&gt;set(&quot;key:$i&quot;, $i);
    }
});
</code></pre><p><a name="pubsub"></a></p><h2 id="pub-sub" tabindex="-1"><a class="header-anchor" href="#pub-sub" aria-hidden="true">#</a> Pub / Sub</h2><p>Laravel provides a convenient interface to the Redis <code>publish</code> and <code>subscribe</code> commands. These Redis commands allow you to listen for messages on a given &quot;channel&quot;. You may publish messages to the channel from another application, or even using another programming language, allowing easy communication between applications and processes.</p><p>First, let&#39;s setup a channel listener using the <code>subscribe</code> method. We&#39;ll place this method call within an <a href="./artisan">Artisan command</a> since calling the <code>subscribe</code> method begins a long-running process:</p><pre><code>&lt;?php

namespace App\\Console\\Commands;

use Illuminate\\Console\\Command;
use Illuminate\\Support\\Facades\\Redis;

class RedisSubscribe extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = &#39;redis:subscribe&#39;;

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = &#39;Subscribe to a Redis channel&#39;;

    /**
     * Execute the console command.
     */
    public function handle(): void
    {
        Redis::subscribe([&#39;test-channel&#39;], function (string $message) {
            echo $message;
        });
    }
}
</code></pre><p>Now we may publish messages to the channel using the <code>publish</code> method:</p><pre><code>use Illuminate\\Support\\Facades\\Redis;

Route::get(&#39;/publish&#39;, function () {
    // ...

    Redis::publish(&#39;test-channel&#39;, json_encode([
        &#39;name&#39; =&gt; &#39;Adam Wathan&#39;
    ]));
});
</code></pre><p><a name="wildcard-subscriptions"></a></p><h4 id="wildcard-subscriptions" tabindex="-1"><a class="header-anchor" href="#wildcard-subscriptions" aria-hidden="true">#</a> Wildcard Subscriptions</h4><p>Using the <code>psubscribe</code> method, you may subscribe to a wildcard channel, which may be useful for catching all messages on all channels. The channel name will be passed as the second argument to the provided closure:</p><pre><code>Redis::psubscribe([&#39;*&#39;], function (string $message, string $channel) {
    echo $message;
});

Redis::psubscribe([&#39;users.*&#39;], function (string $message, string $channel) {
    echo $message;
});
</code></pre>`,15);function Z(U,V){const o=s("ExternalLinkIcon");return r(),d("div",null,[l,n("p",null,[n("a",h,[e("Redis"),t(o)]),e(" is an open source, advanced key-value store. It is often referred to as a data structure server since keys can contain "),n("a",p,[e("strings"),t(o)]),e(", "),n("a",u,[e("hashes"),t(o)]),e(", "),n("a",m,[e("lists"),t(o)]),e(", "),n("a",g,[e("sets"),t(o)]),e(", and "),n("a",f,[e("sorted sets"),t(o)]),e(".")]),n("p",null,[e("Before using Redis with Laravel, we encourage you to install and use the "),n("a",R,[e("phpredis"),t(o)]),e(' PHP extension via PECL. The extension is more complex to install compared to "user-land" PHP packages but may yield better performance for applications that make heavy use of Redis. If you are using '),y,e(", this extension is already installed in your application's Docker container.")]),_,n("p",null,[e("In addition to the default "),b,e(", "),v,e(", "),S,e(", and "),w,e(" server configuration options, Predis supports additional "),n("a",I,[e("connection parameters"),t(o)]),e(" that may be defined for each of your Redis servers. To utilize these additional configuration options, add them to your Redis server configuration in your application's "),E,e(" configuration file:")]),T,n("p",null,[e("You may interact with Redis by calling various methods on the "),x,e(),C,e(". The "),k,e(" facade supports dynamic methods, meaning you may call any "),n("a",D,[e("Redis command"),t(o)]),e(" on the facade and the command will be passed directly to Redis. In this example, we will call the Redis "),P,e(" command by calling the "),L,e(" method on the "),O,e(" facade:")]),A,n("p",null,[e("The "),$,e(" method provides another method of executing multiple Redis commands in a single, atomic operation. However, the "),N,e(" method has the benefit of being able to interact with and inspect Redis key values during that operation. Redis scripts are written in the "),n("a",F,[e("Lua programming language"),t(o)]),e(".")]),H,W,B,n("blockquote",null,[n("p",null,[z,q,e(" Please consult the "),n("a",M,[e("Redis documentation"),t(o)]),e(" for more information on Redis scripting.")])]),Y])}const j=a(c,[["render",Z],["__file","redis.html.vue"]]);export{j as default};
