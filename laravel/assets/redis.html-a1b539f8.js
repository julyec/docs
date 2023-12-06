import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{r as i,o as r,c as t,b as n,d as e,e as s,a}from"./app-06635a3b.js";const c={},p=a('<h1 id="redis" tabindex="-1"><a class="header-anchor" href="#redis" aria-hidden="true">#</a> Redis</h1><ul><li><a href="#introduction">安装</a></li><li><a href="#configuration">配置</a><ul><li><a href="#clusters">集群</a></li><li><a href="#predis">Predis</a></li><li><a href="#phpredis">phpredis</a></li></ul></li><li><a href="#interacting-with-redis">与Redis交互</a><ul><li><a href="#transactions">事务</a></li><li><a href="#pipelining-commands">管道命令</a></li></ul></li><li><a href="#pubsub">发布与订阅</a></li></ul><p><a name="introduction"></a></p><h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h2>',4),l={href:"https://redis.io",target:"_blank",rel:"noopener noreferrer"},h={href:"https://redis.io/topics/data-types#strings",target:"_blank",rel:"noopener noreferrer"},u={href:"https://redis.io/topics/data-types#hashes",target:"_blank",rel:"noopener noreferrer"},R={href:"https://redis.io/topics/data-types#lists",target:"_blank",rel:"noopener noreferrer"},_={href:"https://redis.io/topics/data-types#sets",target:"_blank",rel:"noopener noreferrer"},g={href:"https://redis.io/topics/data-types#sorted-sets",target:"_blank",rel:"noopener noreferrer"},f={href:"https://github.com/phpredis/phpredis",target:"_blank",rel:"noopener noreferrer"},m=n("a",{href:"./sail"},"Laravel Sail",-1),b=a(`<p>如果你不能安装 PHPRedis 扩展，你或许可以使用 composer 安装 predis/predis 包。Predis 是一个完全用 PHP 编写的 Redis 客户端，不需要任何额外的扩展：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">composer</span> require predis/predis
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a name="configuration"></a></p><h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h2><p>在你的应用中配置 Redis 信息，你要在 <code>config/database.php</code> 文件中进行配置。在该文件中，你将看到一个 <code>Redis</code> 数组包含了你的 Redis 配置信息。</p><pre><code>&#39;redis&#39; =&gt; [

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
</code></pre><p>在你的配置文件里定义的每个 Redis 服务器，除了用 URL 来表示的 Redis 连接，都必需要指定名称 、 host （主机）和 port （端口）字段：</p><pre><code>&#39;redis&#39; =&gt; [

    &#39;client&#39; =&gt; env(&#39;REDIS_CLIENT&#39;, &#39;phpredis&#39;),

    &#39;default&#39; =&gt; [
        &#39;url&#39; =&gt; &#39;tcp://127.0.0.1:6379?database=0&#39;,
    ],

    &#39;cache&#39; =&gt; [
        &#39;url&#39; =&gt; &#39;tls://user:password@127.0.0.1:6380?database=1&#39;,
    ],

],
</code></pre><p><a name="configuring-the-connection-scheme"></a></p><h4 id="配置连接方案" tabindex="-1"><a class="header-anchor" href="#配置连接方案" aria-hidden="true">#</a> 配置连接方案</h4><p>默认情况下，Redis 客户端使用 <code>tcp</code> 方案连接 Redis 服务器。另外，你也可以在你的 Redis 服务配置数组中指定一个 <code>scheme</code> 配置项，来使用 TLS/SSL 加密：</p><pre><code>&#39;redis&#39; =&gt; [

    &#39;client&#39; =&gt; env(&#39;REDIS_CLIENT&#39;, &#39;phpredis&#39;),

    &#39;default&#39; =&gt; [
        &#39;scheme&#39; =&gt; &#39;tls&#39;,
        &#39;host&#39; =&gt; env(&#39;REDIS_HOST&#39;, &#39;127.0.0.1&#39;),
        &#39;password&#39; =&gt; env(&#39;REDIS_PASSWORD&#39;),
        &#39;port&#39; =&gt; env(&#39;REDIS_PORT&#39;, 6379),
        &#39;database&#39; =&gt; env(&#39;REDIS_DB&#39;, 0),
    ],

],
</code></pre><p><a name="clusters"></a></p><h3 id="集群" tabindex="-1"><a class="header-anchor" href="#集群" aria-hidden="true">#</a> 集群</h3><p>如果你的应用使用 Redis 集群，你应该在 Redis 配置文件中用 <code>clusters</code> 键来定义集群。这个配置键默认没有，所以你需要在 <code>config/database.php</code> 配置文件中手动创建：</p><pre><code>&#39;redis&#39; =&gt; [

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
</code></pre><p>默认情况下，集群可以在节点上实现客户端分片，允许你实现节点池以及创建大量可用内存。这里要注意，客户端共享不会处理失败的情况；因此，这个功能主要适用于从另一个主数据库获取的缓存数据。 如果要使用 Redis 原生集群，需要把 <code>config/database.php</code> 配置文件下的 <code>options.cluster</code> 配置项的值设置为 <code>redis</code> ：</p><pre><code>&#39;redis&#39; =&gt; [

    &#39;client&#39; =&gt; env(&#39;REDIS_CLIENT&#39;, &#39;phpredis&#39;),

    &#39;options&#39; =&gt; [
        &#39;cluster&#39; =&gt; env(&#39;REDIS_CLUSTER&#39;, &#39;redis&#39;),
    ],

    &#39;clusters&#39; =&gt; [
        // ...
    ],

],
</code></pre><p><a name="predis"></a></p><h3 id="predis" tabindex="-1"><a class="header-anchor" href="#predis" aria-hidden="true">#</a> Predis</h3><p>要使用 Predis 扩展去连接 Redis， 请确保环境变量 <code>REDIS_CLIENT</code> 的值为 <code>predis</code> ：</p><pre><code>&#39;redis&#39; =&gt; [

    &#39;client&#39; =&gt; env(&#39;REDIS_CLIENT&#39;, &#39;predis&#39;),

    // ...
],
</code></pre>`,22),S=n("code",null,"host",-1),I=n("code",null,"port",-1),E=n("code",null,"database",-1),v=n("code",null,"password",-1),D={href:"https://github.com/nrk/predis/wiki/Connection-Parameters",target:"_blank",rel:"noopener noreferrer"},L=a(`<pre><code>&#39;default&#39; =&gt; [
    &#39;host&#39; =&gt; env(&#39;REDIS_HOST&#39;, &#39;localhost&#39;),
    &#39;password&#39; =&gt; env(&#39;REDIS_PASSWORD&#39;),
    &#39;port&#39; =&gt; env(&#39;REDIS_PORT&#39;, 6379),
    &#39;database&#39; =&gt; 0,
    &#39;read_write_timeout&#39; =&gt; 60,
],
</code></pre><p><a name="the-redis-facade-alias"></a></p><h4 id="redis-facade-别名" tabindex="-1"><a class="header-anchor" href="#redis-facade-别名" aria-hidden="true">#</a> Redis Facade 别名</h4><p>Laravel 的 <code>config/app.php</code> 配置文件包含了 <code>aliases</code> 数组，该数组可用于定义通过框架注册的所有类别名。方便起见，Laravel 提供了一份包含了所有 facade 的别名入口；不过，<code>Redis</code> 别名不能在这里使用，因为这与 phpredis 扩展提供的 <code>Redis</code> 类名冲突。如果正在使用 <code>Predis</code> 客户端并确实想要用这个别名，你可以在 <code>config/app.php</code> 配置文件中取消对此别名的注释。</p><pre><code>&#39;aliases&#39; =&gt; Facade::defaultAliases()-&gt;merge([
    &#39;Redis&#39; =&gt; Illuminate\\Support\\Facades\\Redis::class,
])-&gt;toArray(),
</code></pre><p><a name="phpredis"></a></p><h3 id="phpredis" tabindex="-1"><a class="header-anchor" href="#phpredis" aria-hidden="true">#</a> phpredis</h3><p>Laravel 默认使用 phpredis 扩展与 Redis 通信。Laravel 用于与 Redis 通信的客户端由 <code>redis.client</code> 配置项决定，这个配置通常为环境变量 <code>REDIS_CLIENT</code> 的值：</p><pre><code>&#39;redis&#39; =&gt; [

    &#39;client&#39; =&gt; env(&#39;REDIS_CLIENT&#39;, &#39;phpredis&#39;),

    // 重设 Redis 配置项...
],
</code></pre><p>除默认的 <code>scheme</code> , <code>host</code> , <code>port </code>, <code>database</code> 和 <code>password</code> 的服务器配置选项外，<code>phpredis</code> 还支持以下额外的连接参数：<code>name</code> , <code>persistent </code>, <code>persistent_id </code>, <code>prefix </code>, <code>read_timeout </code>, <code>retry_interval </code>, <code>timeout</code> 和 <code>context </code>。 你可以在 <code>config/database.php</code> 配置文件中将任意选项添加到 Redis 服务器配置内：</p><pre><code>&#39;default&#39; =&gt; [
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
</code></pre><p><a name="phpredis-serialization"></a></p><h4 id="phpredis-序列化和压缩" tabindex="-1"><a class="header-anchor" href="#phpredis-序列化和压缩" aria-hidden="true">#</a> phpredis 序列化和压缩</h4><p>phpredis 扩展可以配置使用各种序列化和压缩算法。可以通过设置 Redis 配置中的 <code>options</code> 数组进行配置：</p><pre><code>&#39;redis&#39; =&gt; [

    &#39;client&#39; =&gt; env(&#39;REDIS_CLIENT&#39;, &#39;phpredis&#39;),

    &#39;options&#39; =&gt; [
        &#39;serializer&#39; =&gt; Redis::SERIALIZER_MSGPACK,
        &#39;compression&#39; =&gt; Redis::COMPRESSION_LZ4,
    ],

    // 重设 Redis 配置项...
],
</code></pre><p>当前支持的序列化算法包括： <code>Redis::SERIALIZER_NONE</code> （默认）, <code>Redis::SERIALIZER_PHP</code> , <code>Redis::SERIALIZER_JSON</code> , <code>Redis::SERIALIZER_IGBINARY</code> 和 <code>Redis::SERIALIZER_MSGPACK</code> 。</p><p>支持的压缩算法包括： <code>Redis::COMPRESSION_NONE</code> （默认）, <code>Redis::COMPRESSION_LZF</code> , <code>Redis::COMPRESSION_ZSTD</code> 和 <code>Redis::COMPRESSION_LZ4</code> 。</p><p><a name="interacting-with-redis"></a></p><h2 id="与-redis-交互" tabindex="-1"><a class="header-anchor" href="#与-redis-交互" aria-hidden="true">#</a> 与 Redis 交互</h2>`,19),C=n("code",null,"Redis",-1),P=n("a",{href:"./facades"},"facade",-1),O=n("code",null,"Redis",-1),T={href:"https://redis.io/commands",target:"_blank",rel:"noopener noreferrer"},x=n("code",null,"Redis",-1),$=n("code",null,"get",-1),A=n("code",null,"GET",-1),N=a(`<pre><code>&lt;?php

namespace App\\Http\\Controllers;

use App\\Http\\Controllers\\Controller;
use Illuminate\\Support\\Facades\\Redis;
use Illuminate\\View\\View;

class UserController extends Controller
{
    /**
     * 显示给定用户的配置文件
     */
    public function show(string $id): View
    {
        return view(&#39;user.profile&#39;, [
            &#39;user&#39; =&gt; Redis::get(&#39;user:profile:&#39;.$id)
        ]);
    }
}
</code></pre><p>如上所述，你可以在 <code>Redis</code> facade 上调用任意 Redis 命令。 Laravel 使用魔术方法将命令传递给 Redis 服务器。如果一个 Redis 命令需要参数，则应将这些参数传递给 <code>Redis</code> facade 的相应方法：</p><pre><code>use Illuminate\\Support\\Facades\\Redis;

Redis::set(&#39;name&#39;, &#39;Taylor&#39;);

$values = Redis::lrange(&#39;names&#39;, 5, 10);
</code></pre><p>或者，你也可以使用 <code>Redis</code> facade 上的 <code>command</code> 方法将命令传递给服务器，它接受命令的名称作为其第一个参数，并将值的数组作为其第二个参数：</p><pre><code>$values = Redis::command(&#39;lrange&#39;, [&#39;name&#39;, 5, 10]);
</code></pre><p><a name="using-multiple-redis-connections"></a></p><h4 id="使用多个-redis-连接" tabindex="-1"><a class="header-anchor" href="#使用多个-redis-连接" aria-hidden="true">#</a> 使用多个 Redis 连接</h4><p>你应用里的 <code>config/database.php</code> 配置文件允许你去定义多个 Redis 连接或者服务器。你可以使用 <code>Redis</code> facade 上的 <code>connection</code> 方法获得指定的 Redis 连接：</p><pre><code>$redis = Redis::connection(&#39;connection-name&#39;);
</code></pre><p>要获取获取一个默认的 Redis 连接，你可以调用 <code>connection</code> 方法时，不带任何参数：</p><pre><code>$redis = Redis::connection();
</code></pre><p><a name="transactions"></a></p><h3 id="事务" tabindex="-1"><a class="header-anchor" href="#事务" aria-hidden="true">#</a> 事务</h3><p><code>Redis</code> facade 上的 <code>transaction</code> 方法对 Redis 原生的 <code>MULTI</code> 和 <code>EXEC</code> 命令进行了封装。 <code>transaction</code> 方法接受一个闭包作为其唯一参数。这个闭包将接收一个 Redis 连接实例，并可能向这个实例发出想要的任何命令。闭包中发出的所有 Redis 命令都将在单个原子性事务中执行：</p><pre><code>use Redis;
use Illuminate\\Support\\Facades;

Facades\\Redis::transaction(function (Redis $redis) {
    $redis-&gt;incr(&#39;user_visits&#39;, 1);
    $redis-&gt;incr(&#39;total_visits&#39;, 1);
});
</code></pre><blockquote><p><strong>注意</strong><br> 定义一个 Redis 事务时，你不能从 Redis 连接中获取任何值。请记住，事务是作为单个原子性操作执行的，在整个闭包执行完其命令之前，不会执行该操作。</p></blockquote><h4 id="lua-脚本" tabindex="-1"><a class="header-anchor" href="#lua-脚本" aria-hidden="true">#</a> Lua 脚本</h4>`,17),k=n("code",null,"eval",-1),w=n("code",null,"eval",-1),F={href:"https://www.lua.org/",target:"_blank",rel:"noopener noreferrer"},H=n("p",null,[n("code",null,"eval"),e(" 方法一开始可能有点令人劝退，所以我们将用一个基本示例来明确它的使用方法。 "),n("code",null,"eval"),e(" 方法需要几个参数。第一，在方法中传递一个 Lua 脚本（作为一个字符串）。第二，在方法中传递脚本交互中用到的键的数量（作为一个整数）。第三，在方法中传递所有键名。最后，你可以传递一些脚本中用到的其他参数。")],-1),y=n("p",null,"在本例中，我们要对第一个计数器进行递增，检查它的新值，如果该计数器的值大于 5，那么递增第二个计数器。最终，我们将返回第一个计数器的值：",-1),Z=n("pre",null,[n("code",null,`$value = Redis::eval(<<<'LUA'
    local counter = redis.call("incr", KEYS[1])

    if counter > 5 then
        redis.call("incr", KEYS[2])
    end

    return counter
LUA, 2, 'first-counter', 'second-counter');
`)],-1),M=n("strong",null,"注意",-1),B=n("br",null,null,-1),V={href:"https://redis.io/commands/eval",target:"_blank",rel:"noopener noreferrer"},W=a(`<p><a name="pipelining-commands"></a></p><h3 id="管道命令" tabindex="-1"><a class="header-anchor" href="#管道命令" aria-hidden="true">#</a> 管道命令</h3><p>当你需要执行很多个 Redis 命令时，你可以使用 <code>pipeline</code> 方法一次性提交所有命令，而不需要每条命令都与 Redis 服务器建立一次网络连接。 <code>pipeline</code> 方法只接受一个参数：接收一个 Redis 实例的闭包。你可以将所有命令发给这个 Redis 实例，它们将同时发送到 Redis 服务器，以减少到服务器的网络访问。这些命令仍然会按照发出的顺序执行：</p><pre><code>use Redis;
use Illuminate\\Support\\Facades;

Facades\\Redis::pipeline(function (Redis $pipe) {
    for ($i = 0; $i &lt; 1000; $i++) {
        $pipe-&gt;set(&quot;key:$i&quot;, $i);
    }
});
</code></pre><p><a name="pubsub"></a></p><h2 id="发布-订阅" tabindex="-1"><a class="header-anchor" href="#发布-订阅" aria-hidden="true">#</a> 发布 / 订阅</h2><p>Laravel 为 Redis 的 <code>publish</code> 和 <code>subscribe</code> 命令提供了方便的接口。你可以用这些 Redis 命令监听指定「频道」上的消息。你也可以从一个应用程序发消息给另一个应用程序，哪怕它是用其它编程语言开发的，让应用程序和进程之间能够轻松进行通信。</p><p>首先，用 <code>subscribe</code> 方法设置一个频道监听器。我们将这个方法调用放到一个 <a href="./artisan">Artisan 命令</a> 中，因为调用 <code>subscribe</code> 方法会启动一个常驻进程：</p><pre><code>&lt;?php

namespace App\\Console\\Commands;

use Illuminate\\Console\\Command;
use Illuminate\\Support\\Facades\\Redis;

class RedisSubscribe extends Command
{
    /**
     * 控制台命令的名称和签名
     *
     * @var string
     */
    protected $signature = &#39;redis:subscribe&#39;;

    /**
     * 控制台命令的描述
     *
     * @var string
     */
    protected $description = &#39;Subscribe to a Redis channel&#39;;

    /**
     * 执行控制台命令
     */
    public function handle(): void
    {
        Redis::subscribe([&#39;test-channel&#39;], function (string $message) {
            echo $message;
        });
    }
}
</code></pre><p>现在我们可以使用 <code>publish</code> 方法将消息发布到频道：</p><pre><code>use Illuminate\\Support\\Facades\\Redis;

Route::get(&#39;/publish&#39;, function () {
    // ...

    Redis::publish(&#39;test-channel&#39;, json_encode([
        &#39;name&#39; =&gt; &#39;Adam Wathan&#39;
    ]));
});
</code></pre><p><a name="wildcard-subscriptions"></a></p><h4 id="通配符订阅" tabindex="-1"><a class="header-anchor" href="#通配符订阅" aria-hidden="true">#</a> 通配符订阅</h4><p>使用 <code>psubscribe</code> 方法，你可以订阅一个通配符频道，用来获取所有频道中的所有消息，频道名称将作为第二个参数传递给提供的回调闭包：</p><pre><code>Redis::psubscribe([&#39;*&#39;], function (string $message, string $channel) {
    echo $message;
});

Redis::psubscribe([&#39;users.*&#39;], function (string $message, string $channel) {
    echo $message;
});
</code></pre>`,15);function q(U,G){const d=i("ExternalLinkIcon");return r(),t("div",null,[p,n("p",null,[n("a",l,[e("Redis"),s(d)]),e(" 是一个开源的, 高级键值对存储数据库。 保护的数据库类型有 "),n("a",h,[e("字符串"),s(d)]),e(", "),n("a",u,[e("hash"),s(d)]),e(", "),n("a",R,[e("列表"),s(d)]),e(", "),n("a",_,[e("集合"),s(d)]),e(" 和 "),n("a",g,[e("有序集合"),s(d)]),e("。")]),n("p",null,[e("在将 Redis 与 Laravel 一起使用前，我们鼓励你通过 PECL 安装并使用 "),n("a",f,[e("PhpRedis"),s(d)]),e(" ，尽管扩展安装起来更复杂，但对于大量使用 Redis 的应用程序可能会带来更好的性能。如果你使用 "),m,e(", 这个扩展已经事先在你的 Docker 容器中安装完成。")]),b,n("p",null,[e("除默认的 "),S,e(" ，"),I,e(" ，"),E,e(" 和 "),v,e(" 这些服务配置选项外， Predis 还支持为每个 Redis 服务器定义其它的 "),n("a",D,[e("连接参数"),s(d)]),e("。如果要使用这些额外的配置项，可以在 config/database.php 配置文件中将任意选项添加到 Redis 服务器配置内：")]),L,n("p",null,[e("你可以通过调用 "),C,e(),P,e(" 上的各种方法来与Redis进行交互。 "),O,e(" facade 支持动态方法，所以你可以在facade上调用各种 "),n("a",T,[e("Redis 命令"),s(d)]),e(" ,这些命令将直接传递给 Redis 。 在本例中，我们将调用 "),x,e(" facade 的 "),$,e(" 方法，来调用 Redis "),A,e(" 方法：")]),N,n("p",null,[k,e(" 方法提供了另外一种原子性执行多条 Redis 命令的方式。但是，"),w,e(" 方法的好处是能够在操作期间与 Redis 键值交互并检查它们。 Redis 脚本是用 "),n("a",F,[e("Lua 编程语言"),s(d)]),e(" 编写的。")]),H,y,Z,n("blockquote",null,[n("p",null,[M,B,e(" 请参考 "),n("a",V,[e("Redis 文档"),s(d)]),e(" 更多关于 Redis 脚本的信息。")])]),W])}const z=o(c,[["render",q],["__file","redis.html.vue"]]);export{z as default};
