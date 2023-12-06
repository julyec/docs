import{_ as r}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o as d,c as i,b as a,d as e,e as o,a as n}from"./app-06635a3b.js";const s={},h=n('<h1 id="缓存系统" tabindex="-1"><a class="header-anchor" href="#缓存系统" aria-hidden="true">#</a> 缓存系统</h1><ul><li><a href="#introduction">简介</a></li><li><a href="#configuration">配置</a><ul><li><a href="#driver-prerequisites">驱动的前提条件</a></li></ul></li><li><a href="#cache-usage">缓存使用</a><ul><li><a href="#obtaining-a-cache-instance">获取缓存实例</a></li><li><a href="#retrieving-items-from-the-cache">从缓存获取数据</a></li><li><a href="#storing-items-in-the-cache">向缓存存储数据</a></li><li><a href="#removing-items-from-the-cache">从缓存删除数据</a></li><li><a href="#the-cache-helper">Cache 辅助函数</a></li></ul></li><li><a href="#cache-tags">缓存标记</a><ul><li><a href="#storing-tagged-cache-items">存储被标记的缓存数据</a></li><li><a href="#accessing-tagged-cache-items">访问被标记的缓存数据</a></li><li><a href="#removing-tagged-cache-items">删除被标记的缓存数据</a></li><li><a href="#pruning-stale-cache-tags">清理过期的缓存标记</a></li></ul></li><li><a href="#atomic-locks">原子锁</a><ul><li><a href="#lock-driver-prerequisites">驱动的前提条件</a></li><li><a href="#managing-locks">管理锁</a></li><li><a href="#managing-locks-across-processes">跨进程管理锁</a></li></ul></li><li><a href="#adding-custom-cache-drivers">添加自定义缓存驱动</a><ul><li><a href="#writing-the-driver">编写驱动</a></li><li><a href="#registering-the-driver">注册驱动</a></li></ul></li><li><a href="#events">事件</a></li></ul><p><a name="introduction"></a></p><h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h2>',4),p={href:"https://memcached.org",target:"_blank",rel:"noopener noreferrer"},l={href:"https://redis.io",target:"_blank",rel:"noopener noreferrer"},u=a("p",null,"Laravel 为各种缓存后端提供了富有表现力且统一的 API，以便你利用它们极快的查询数据来加快你的应用。",-1),g=a("p",null,[a("a",{name:"configuration"})],-1),m=a("h2",{id:"配置",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#配置","aria-hidden":"true"},"#"),e(" 配置")],-1),f=a("code",null,"config/cache.php",-1),b={href:"https://memcached.org",target:"_blank",rel:"noopener noreferrer"},v={href:"https://redis.io",target:"_blank",rel:"noopener noreferrer"},k={href:"https://aws.amazon.com/dynamodb",target:"_blank",rel:"noopener noreferrer"},_=a("code",null,"array",-1),C=a("code",null,"null",-1),y=n(`<p>缓存配置文件还包含文件中记录的各种其他选项，因此请务必阅读这些选项。 默认情况下，Laravel 配置为使用 <code>file</code> 缓存驱动，它将序列化的缓存对象存储在服务器的文件系统中。 对于较大的应用程序，建议你使用更强大的驱动，例如 Memcached 或 Redis。 你甚至可以为同一个驱动配置多个缓存配置。</p><p><a name="driver-prerequisites"></a></p><h3 id="驱动先决条件" tabindex="-1"><a class="header-anchor" href="#驱动先决条件" aria-hidden="true">#</a> 驱动先决条件</h3><p><a name="prerequisites-database"></a></p><h4 id="database" tabindex="-1"><a class="header-anchor" href="#database" aria-hidden="true">#</a> Database</h4><p>使用 <code>database</code> 缓存驱动时，你需要设置一个表来包含缓存项。你将在下表中找到 <code>Schema</code> 声明的示例：</p><pre><code>Schema::create(&#39;cache&#39;, function (Blueprint $table) {
    $table-&gt;string(&#39;key&#39;)-&gt;unique();
    $table-&gt;text(&#39;value&#39;);
    $table-&gt;integer(&#39;expiration&#39;);
});
</code></pre><blockquote><p><strong>注意</strong> 你还可以使用 <code>php artisan cache:table</code> Artisan 命令生成具有适当模式的迁移。</p></blockquote><p><a name="memcached"></a></p><h4 id="memcached" tabindex="-1"><a class="header-anchor" href="#memcached" aria-hidden="true">#</a> Memcached</h4>`,10),$={href:"https://pecl.php.net/package/memcached",target:"_blank",rel:"noopener noreferrer"},x=a("code",null,"config/cache.php",-1),L=a("code",null,"memcached.servers",-1),M=n(`<pre><code>&#39;memcached&#39; =&gt; [
    &#39;servers&#39; =&gt; [
        [
            &#39;host&#39; =&gt; env(&#39;MEMCACHED_HOST&#39;, &#39;127.0.0.1&#39;),
            &#39;port&#39; =&gt; env(&#39;MEMCACHED_PORT&#39;, 11211),
            &#39;weight&#39; =&gt; 100,
        ],
    ],
],
</code></pre><p>如果需要，你可以将 <code>host</code> 选项设置为 UNIX socket path。 如果这样做， <code>port</code> 选项应设置为 <code>0</code>：</p><pre><code>&#39;memcached&#39; =&gt; [
    [
        &#39;host&#39; =&gt; &#39;/var/run/memcached/memcached.sock&#39;,
        &#39;port&#39; =&gt; 0,
        &#39;weight&#39; =&gt; 100
    ],
],
</code></pre><p><a name="redis"></a></p><h4 id="redis" tabindex="-1"><a class="header-anchor" href="#redis" aria-hidden="true">#</a> Redis</h4>`,5),A=a("code",null,"predis/predis",-1),S=a("a",{href:"./sail"},"Laravel Sail",-1),q={href:"https://forge.laravel.com",target:"_blank",rel:"noopener noreferrer"},P={href:"https://vapor.laravel.com",target:"_blank",rel:"noopener noreferrer"},E=a("p",null,[e("有关配置 Redis 的更多信息，请参阅其 "),a("a",{href:"./redis#configuration"},"Laravel documentation page"),e(".")],-1),I=a("p",null,[a("a",{name:"dynamodb"})],-1),D=a("h4",{id:"dynamodb",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#dynamodb","aria-hidden":"true"},"#"),e(" DynamoDB")],-1),w={href:"https://aws.amazon.com/dynamodb",target:"_blank",rel:"noopener noreferrer"},B=a("code",null,"cache",-1),R=a("code",null,"stores.dynamodb.table",-1),F=n(`<p>该表还应该有一个字符串分区键，其名称对应于应用程序的缓存配置文件中的 <code>stores.dynamodb.attributes.key</code> 配置项的值。 默认情况下，分区键应命名为 <code>key</code>。</p><p><a name="cache-usage"></a></p><h2 id="缓存用法" tabindex="-1"><a class="header-anchor" href="#缓存用法" aria-hidden="true">#</a> 缓存用法</h2><p><a name="obtaining-a-cache-instance"></a></p><h3 id="获取缓存实例" tabindex="-1"><a class="header-anchor" href="#获取缓存实例" aria-hidden="true">#</a> 获取缓存实例</h3><p>要获取缓存存储实例，您可以使用 <code>Cache</code> 门面类，我们将在本文档中使用它。<code>Cache</code> 门面类提供了对 Laravel 缓存底层实现的方便、简单的访问：</p><pre><code>&lt;?php

namespace App\\Http\\Controllers;

use Illuminate\\Support\\Facades\\Cache;

class UserController extends Controller
{
    /**
     * 显示应用程序所有用户的列表。
     */
    public function index(): array
    {
        $value = Cache::get(&#39;key&#39;);

        return [
            // ...
        ];
    }
}
</code></pre><p><a name="accessing-multiple-cache-stores"></a></p><h4 id="访问多个缓存存储" tabindex="-1"><a class="header-anchor" href="#访问多个缓存存储" aria-hidden="true">#</a> 访问多个缓存存储</h4><p>使用 <code>Cache</code> 门面类, 您可以通过 <code>store</code> 方法访问各种缓存存储。传递给 <code>store</code> 方法的键应该对应于 <code>cache</code> 配置文件中的 <code>stores</code> 配置数组中列出的存储之一：</p><pre><code>$value = Cache::store(&#39;file&#39;)-&gt;get(&#39;foo&#39;);

Cache::store(&#39;redis&#39;)-&gt;put(&#39;bar&#39;, &#39;baz&#39;, 600); // 10 分钟
</code></pre><p><a name="retrieving-items-from-the-cache"></a></p><h3 id="从缓存中检索项目" tabindex="-1"><a class="header-anchor" href="#从缓存中检索项目" aria-hidden="true">#</a> 从缓存中检索项目</h3><p><code>Cache</code> 门面的 <code>get</code> 方法用于从缓存中检索项目。如果缓存中不存在该项目，则将返回 <code>null</code>。如果您愿意，您可以将第二个参数传递给 <code>get</code> 方法，指定您希望在项目不存在时返回的默认值：</p><pre><code>$value = Cache::get(&#39;key&#39;);

$value = Cache::get(&#39;key&#39;, &#39;default&#39;);
</code></pre><p>您甚至可以将闭包作为默认值传递。如果指定的项在缓存中不存在，则返回闭包的结果。传递闭包允许您推迟从数据库或其他外部服务中检索默认值：</p><pre><code>$value = Cache::get(&#39;key&#39;, function () {
    return DB::table(/* ... */)-&gt;get();
});
</code></pre><p><a name="checking-for-item-existence"></a></p><h4 id="检查项目是否存在" tabindex="-1"><a class="header-anchor" href="#检查项目是否存在" aria-hidden="true">#</a> 检查项目是否存在</h4><p><code>has</code> 方法可用于确定缓存中是否存在项目。如果项目存在但其值为 <code>null</code>，此方法也将返回 <code>false</code>：</p><pre><code>if (Cache::has(&#39;key&#39;)) {
    // ...
}
</code></pre><p><a name="incrementing-decrementing-values"></a></p><h4 id="递增-递减值" tabindex="-1"><a class="header-anchor" href="#递增-递减值" aria-hidden="true">#</a> 递增 / 递减值</h4><p><code>increment</code> 和 <code>decrement</code> 方法可用于调整缓存中整数项的值。这两种方法都接受一个可选的第二个参数，指示增加或减少项目值的数量：</p><pre><code>Cache::increment(&#39;key&#39;);
Cache::increment(&#39;key&#39;, $amount);
Cache::decrement(&#39;key&#39;);
Cache::decrement(&#39;key&#39;, $amount);
</code></pre><p><a name="retrieve-store"></a></p><h4 id="检索和存储" tabindex="-1"><a class="header-anchor" href="#检索和存储" aria-hidden="true">#</a> 检索和存储</h4><p>有时你可能希望从缓存中检索一个项目，但如果请求的项目不存在，则存储一个默认值。 例如， 你可能希望从缓存中检索所有用户，如果用户不存在，则从数据库中检索并将它们添加到缓存中。 你可以使用 <code>Cache::remember</code> 方法执行此操作：</p><pre><code>$value = Cache::remember(&#39;users&#39;, $seconds, function () {
    return DB::table(&#39;users&#39;)-&gt;get();
});
</code></pre><p>如果该项不存在于缓存中，将执行传递给 <code>remember</code> 方法的闭包，并将其结果放入缓存中。</p><p>你可以使用 <code>rememberForever</code> 方法从缓存中检索一个项目，如果它不存在则永久存储它：</p><pre><code>$value = Cache::rememberForever(&#39;users&#39;, function () {
    return DB::table(&#39;users&#39;)-&gt;get();
});
</code></pre><p><a name="retrieve-delete"></a></p><h4 id="检索和删除" tabindex="-1"><a class="header-anchor" href="#检索和删除" aria-hidden="true">#</a> 检索和删除</h4><p>如果你需要从缓存中检索一项后并删除该项，你可以使用 <code>pull</code> 方法。 与 <code>get</code> 方法一样，如果该项不存在于缓存中，将返回 <code>null</code>：</p><pre><code>$value = Cache::pull(&#39;key&#39;);
</code></pre><p><a name="storing-items-in-the-cache"></a></p><h3 id="在缓存中存储项目" tabindex="-1"><a class="header-anchor" href="#在缓存中存储项目" aria-hidden="true">#</a> 在缓存中存储项目</h3><p>你可以使用 <code>Cache</code> Facade上的 <code>put</code> 方法将项目存储在缓存中：</p><pre><code>Cache::put(&#39;key&#39;, &#39;value&#39;, $seconds = 10);
</code></pre><p>如果存储时间没有传递给 <code>put</code> 方法，则该项目将无限期存储：</p><pre><code>Cache::put(&#39;key&#39;, &#39;value&#39;);
</code></pre><p>除了将秒数作为整数传递之外，你还可以传递一个代表缓存项所需过期时间的 <code>DateTime</code> 实例：</p><pre><code>Cache::put(&#39;key&#39;, &#39;value&#39;, now()-&gt;addMinutes(10));
</code></pre><p><a name="store-if-not-present"></a></p><h4 id="如果不存在则存储" tabindex="-1"><a class="header-anchor" href="#如果不存在则存储" aria-hidden="true">#</a> 如果不存在则存储</h4><p><code>add</code> 方法只会将缓存存储中不存在的项目添加到缓存中。如果项目实际添加到缓存中，该方法将返回 <code>true</code>。 否则，该方法将返回 <code>false</code>。 <code>add</code> 方法是一个原子操作：</p><pre><code>Cache::add(&#39;key&#39;, &#39;value&#39;, $seconds);
</code></pre><p><a name="storing-items-forever"></a></p><h4 id="永久存储" tabindex="-1"><a class="header-anchor" href="#永久存储" aria-hidden="true">#</a> 永久存储</h4><p><code>forever</code> 方法可用于将项目永久存储在缓存中。由于这些项目不会过期，因此必须使用 <code>forget</code> 方法手动将它们从缓存中删除：</p><pre><code>Cache::forever(&#39;key&#39;, &#39;value&#39;);
</code></pre><blockquote><p><strong>注意</strong> 如果您使用的是 Memcached 驱动程序，则当缓存达到其大小限制时，可能会删除「永久」存储的项目。</p></blockquote><p><a name="removing-items-from-the-cache"></a></p><h3 id="从缓存中删除项目" tabindex="-1"><a class="header-anchor" href="#从缓存中删除项目" aria-hidden="true">#</a> 从缓存中删除项目</h3><p>您可以使用 <code>forget</code> 方法从缓存中删除项目：</p><pre><code>Cache::forget(&#39;key&#39;);
</code></pre><p>您还可以通过提供零或负数的过期秒数来删除项目：</p><pre><code>Cache::put(&#39;key&#39;, &#39;value&#39;, 0);

Cache::put(&#39;key&#39;, &#39;value&#39;, -5);
</code></pre><p>您可以使用 <code>flush</code> 方法清除整个缓存：</p><pre><code>Cache::flush();
</code></pre><blockquote><p><strong>注意</strong> 刷新缓存不会考虑您配置的缓存「前缀，并且会从缓存中删除所有条目。在清除由其他应用程序共享的缓存时，请考虑到这一点。</p></blockquote><p><a name="the-cache-helper"></a></p><h3 id="缓存助手函数" tabindex="-1"><a class="header-anchor" href="#缓存助手函数" aria-hidden="true">#</a> 缓存助手函数</h3><p>除了使用 <code>Cache</code> 门面之外，您还可以使用全局 <code>cache</code> 函数通过缓存检索和存储数据。当使用单个字符串参数调用 <code>cache</code> 函数时，它将返回给定键的值：</p><pre><code>$value = cache(&#39;key&#39;);
</code></pre><p>如果您向函数提供键 / 值对数组和过期时间，它将在指定的持续时间内将值存储在缓存中：</p><pre><code>cache([&#39;key&#39; =&gt; &#39;value&#39;], $seconds);

cache([&#39;key&#39; =&gt; &#39;value&#39;], now()-&gt;addMinutes(10));
</code></pre><p>当不带任何参数调用 cache 函数时，它会返回 Illuminate\\Contracts\\Cache\\Factory 实现的实例，允许您调用其他缓存方法：</p><pre><code>cache()-&gt;remember(&#39;users&#39;, $seconds, function () {
    return DB::table(&#39;users&#39;)-&gt;get();
});
</code></pre><blockquote><p><strong>技巧</strong> 在测试对全局 <code>cache</code> 函数的调用时，您可以使用 <code>Cache::shouldReceive</code> 方法，就像 <a href="./mocking#mocking-facades">testing the facade</a>. <a name="cache-tags"></a></p></blockquote><h2 id="缓存标签" tabindex="-1"><a class="header-anchor" href="#缓存标签" aria-hidden="true">#</a> 缓存标签</h2><blockquote><p><strong>注意</strong> 使用 <code>file</code>, <code>dynamodb</code> 或 <code>database</code> 存驱动程序时不支持缓存标记。 此外，当使用带有「永久」存储的缓存的多个标签时，使用诸如「memcached」之类的驱动程序会获得最佳性能，它会自动清除陈旧的记录。 <a name="storing-tagged-cache-items"></a></p></blockquote><h3 id="存储缓存标签" tabindex="-1"><a class="header-anchor" href="#存储缓存标签" aria-hidden="true">#</a> 存储缓存标签</h3><p>缓存标签允许您在缓存中标记相关项目，然后刷新所有已分配给定标签的缓存值。您可以通过传入标记名称的有序数组来访问标记缓存。例如，让我们访问一个标记的缓存并将一个值<code>put</code>缓存中：</p><pre><code>Cache::tags([&#39;people&#39;, &#39;artists&#39;])-&gt;put(&#39;John&#39;, $john, $seconds);

Cache::tags([&#39;people&#39;, &#39;authors&#39;])-&gt;put(&#39;Anne&#39;, $anne, $seconds);
</code></pre><p><a name="accessing-tagged-cache-items"></a></p><h3 id="访问缓存标签" tabindex="-1"><a class="header-anchor" href="#访问缓存标签" aria-hidden="true">#</a> 访问缓存标签</h3><p>要检索标记的缓存项，请将相同的有序标签列表传递给 tags 方法，然后使用您要检索的键调用 <code>get</code> 方法：</p><pre><code>$john = Cache::tags([&#39;people&#39;, &#39;artists&#39;])-&gt;get(&#39;John&#39;);

$anne = Cache::tags([&#39;people&#39;, &#39;authors&#39;])-&gt;get(&#39;Anne&#39;);
</code></pre><p><a name="removing-tagged-cache-items"></a></p><h3 id="删除被标记的缓存数据" tabindex="-1"><a class="header-anchor" href="#删除被标记的缓存数据" aria-hidden="true">#</a> 删除被标记的缓存数据</h3><p>你可以刷新所有分配了标签或标签列表的项目。 例如，此语句将删除所有标记有 <code>people</code>, <code>authors</code>或两者的缓存。因此，<code>Anne</code> 和 <code>John</code> 都将从缓存中删除：</p><pre><code>Cache::tags([&#39;people&#39;, &#39;authors&#39;])-&gt;flush();
</code></pre><p>相反，此语句将仅删除带有 <code>authors</code> 标记的缓存，因此将删除 <code>Anne</code>，但不会删除 <code>John</code>：</p><pre><code>Cache::tags(&#39;authors&#39;)-&gt;flush();
</code></pre><p><a name="pruning-stale-cache-tags"></a></p><h3 id="清理过期的缓存标记" tabindex="-1"><a class="header-anchor" href="#清理过期的缓存标记" aria-hidden="true">#</a> 清理过期的缓存标记</h3><blockquote><p><strong>注意</strong> 仅在使用 Redis 作为应用程序的缓存驱动程序时，才需要清理过期的缓存标记。</p></blockquote><p>为了在使用 Redis 缓存驱动程序时正确清理过期的缓存标记，Laravel 的 Artisan 命令 <code>cache:prune-stale-tags</code> 应该被添加到 <a href="./scheduling">任务调度</a> 中，在应用程序的 <code>App\\Console\\Kernel</code> 类里：</p><pre><code>$schedule-&gt;command(&#39;cache:prune-stale-tags&#39;)-&gt;hourly();
</code></pre><p><a name="atomic-locks"></a></p><h2 id="原子锁" tabindex="-1"><a class="header-anchor" href="#原子锁" aria-hidden="true">#</a> 原子锁</h2><blockquote><p><strong>注意</strong> 要使用此功能，您的应用程序必须使用<code>memcached</code>、<code>redis</code>、<code>dynamicodb</code>、<code>database</code>、<code>file</code>或<code>array</code>缓存驱动程序作为应用程序的默认缓存驱动程序。 此外，所有服务器都必须与同一中央缓存服务器通信。</p></blockquote><p><a name="lock-driver-prerequisites"></a></p><h3 id="驱动程序先决条件" tabindex="-1"><a class="header-anchor" href="#驱动程序先决条件" aria-hidden="true">#</a> 驱动程序先决条件</h3><p><a name="atomic-locks-prerequisites-database"></a></p><h4 id="数据库" tabindex="-1"><a class="header-anchor" href="#数据库" aria-hidden="true">#</a> 数据库</h4><p>使用“数据库”缓存驱动程序时，您需要设置一个表来包含应用程序的缓存锁。您将在下表中找到一个示例 <code>Schema</code> 声明：</p><pre><code>Schema::create(&#39;cache_locks&#39;, function (Blueprint $table) {
    $table-&gt;string(&#39;key&#39;)-&gt;primary();
    $table-&gt;string(&#39;owner&#39;);
    $table-&gt;integer(&#39;expiration&#39;);
});
</code></pre><p><a name="managing-locks"></a></p><h3 id="管理锁" tabindex="-1"><a class="header-anchor" href="#管理锁" aria-hidden="true">#</a> 管理锁</h3>`,102),H={href:"https://forge.laravel.com",target:"_blank",rel:"noopener noreferrer"},K=a("code",null,"Cache::lock",-1),T=n(`<pre><code>use Illuminate\\Support\\Facades\\Cache;

$lock = Cache::lock(&#39;foo&#39;, 10);

if ($lock-&gt;get()) {
    // 锁定 10 秒…

    $lock-&gt;release();
}
</code></pre><p><code>get</code> 方法也接受一个闭包。闭包执行后，Laravel 会自动释放锁：</p><pre><code>Cache::lock(&#39;foo&#39;, 10)-&gt;get(function () {
    // 锁定 10 秒并自动释放...
});
</code></pre><p>如果在您请求时锁不可用，您可以指示 Laravel 等待指定的秒数。如果在指定的时间限制内无法获取锁，则会抛出 Illuminate\\Contracts\\Cache\\LockTimeoutException：</p><pre><code>use Illuminate\\Contracts\\Cache\\LockTimeoutException;

$lock = Cache::lock(&#39;foo&#39;, 10);

try {
    $lock-&gt;block(5);

    // 等待最多 5 秒后获得的锁...
} catch (LockTimeoutException $e) {
    // 无法获取锁…
} finally {
    $lock?-&gt;release();
}
</code></pre><p>上面的例子可以通过将闭包传递给 <code>block</code> 方法来简化。当一个闭包被传递给这个方法时，Laravel 将尝试在指定的秒数内获取锁，并在闭包执行后自动释放锁：</p><pre><code>Cache::lock(&#39;foo&#39;, 10)-&gt;block(5, function () {
    // 等待最多 5 秒后获得的锁...
});
</code></pre><p><a name="managing-locks-across-processes"></a></p><h3 id="跨进程管理锁" tabindex="-1"><a class="header-anchor" href="#跨进程管理锁" aria-hidden="true">#</a> 跨进程管理锁</h3><p>有时，您可能希望在一个进程中获取锁并在另一个进程中释放它。例如，您可能在 Web 请求期间获取锁，并希望在由该请求触发的排队作业结束时释放锁。在这种情况下，您应该将锁的作用域<code>owner token</code>传递给排队的作业，以便作业可以使用给定的令牌重新实例化锁。</p><p>在下面的示例中，如果成功获取锁，我们将调度一个排队的作业。 此外，我们将通过锁的<code>owner</code>方法将锁的所有者令牌传递给排队的作业：</p><pre><code>$podcast = Podcast::find($id);

$lock = Cache::lock(&#39;processing&#39;, 120);

if ($lock-&gt;get()) {
    ProcessPodcast::dispatch($podcast, $lock-&gt;owner());
}
</code></pre><p>在我们应用程序的<code>ProcessPodcast</code>作业中，我们可以使用所有者令牌恢复和释放锁：</p><pre><code>Cache::restoreLock(&#39;processing&#39;, $this-&gt;owner)-&gt;release();
</code></pre><p>如果你想释放一个锁而不考虑它的当前所有者，你可以使用<code>forceRelease</code>方法：</p><pre><code>Cache::lock(&#39;processing&#39;)-&gt;forceRelease();
</code></pre><p><a name="adding-custom-cache-drivers"></a></p><h2 id="添加自定义缓存驱动" tabindex="-1"><a class="header-anchor" href="#添加自定义缓存驱动" aria-hidden="true">#</a> 添加自定义缓存驱动</h2><p><a name="writing-the-driver"></a></p><h3 id="编写驱动" tabindex="-1"><a class="header-anchor" href="#编写驱动" aria-hidden="true">#</a> 编写驱动</h3><p>要创建我们的自定义缓存驱动程序，我们首先需要实现<code>Illuminate\\Contracts\\Cache\\Store</code> <a href="./contracts">contract</a>。 因此，MongoDB 缓存实现可能如下所示：</p><pre><code>&lt;?php

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
</code></pre>`,22),N={href:"https://github.com/laravel/framework",target:"_blank",rel:"noopener noreferrer"},V=a("code",null,"Illuminate\\Cache\\MemcachedStore",-1),W=a("code",null,"Cache",-1),J=a("code",null,"extend",-1),z=n(`<pre><code>Cache::extend(&#39;mongo&#39;, function (Application $app) {
    return Cache::repository(new MongoStore);
});
</code></pre><blockquote><p><strong>技巧</strong> 如果你想知道将自定义缓存驱动程序代码放在哪里，可以在你的<code>app</code>目录中创建一个<code>Extensions</code>命名空间。 但是请记住，Laravel 没有严格的应用程序结构，你可以根据自己的喜好自由组织应用程序。</p></blockquote><p><a name="registering-the-driver"></a></p><h3 id="注册驱动" tabindex="-1"><a class="header-anchor" href="#注册驱动" aria-hidden="true">#</a> 注册驱动</h3><p>要向 Laravel 注册自定义缓存驱动程序，我们将使用<code>Cache</code>门面的<code>extend</code>方法。 由于其他服务提供者可能会尝试在他们的<code>boot</code>方法中读取缓存值，我们将在<code>booting</code>回调中注册我们的自定义驱动程序。 通过使用<code>booting</code>回调，我们可以确保在应用程序的服务提供者调用<code>boot</code>方法之前但在所有服务提供者调用<code>register</code>方法之后注册自定义驱动程序。 我们将在应用程序的<code>App\\Providers\\AppServiceProvider</code>类的<code>register</code>方法中注册我们的<code>booting</code>回调：</p><pre><code>&lt;?php

namespace App\\Providers;

use App\\Extensions\\MongoStore;
use Illuminate\\Contracts\\Foundation\\Application;
use Illuminate\\Support\\Facades\\Cache;
use Illuminate\\Support\\ServiceProvider;

class CacheServiceProvider extends ServiceProvider
{
    /**
     * 注册任何应用程序服务。
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
     * 引导任何应用程序服务。
     */
    public function boot(): void
    {
        // ...
    }
}
</code></pre><p>传递给<code>extend</code>方法的第一个参数是驱动程序的名称。这将对应于<code>config/cache.php</code>配置文件中的 <code>driver</code>选项。 第二个参数是一个闭包，它应该返回一个<code>Illuminate\\Cache\\Repository</code>实例。闭包将传递一个<code>$app</code>实例，它是<a href="./container">服务容器</a>的一个实例。</p><p>注册扩展程序后，将<code>config/cache.php</code>配置文件的<code>driver</code>选项更新为扩展程序的名称。</p><p><a name="events"></a></p><h2 id="事件" tabindex="-1"><a class="header-anchor" href="#事件" aria-hidden="true">#</a> 事件</h2><p>要在每个缓存操作上执行代码，你可以侦听缓存触发的 <a href="./events">events</a> 。 通常，你应该将这些事件侦听器放在应用程序的<code>App\\Providers\\EventServiceProvider</code>类中：</p><pre><code>use App\\Listeners\\LogCacheHit;
use App\\Listeners\\LogCacheMissed;
use App\\Listeners\\LogKeyForgotten;
use App\\Listeners\\LogKeyWritten;
use Illuminate\\Cache\\Events\\CacheHit;
use Illuminate\\Cache\\Events\\CacheMissed;
use Illuminate\\Cache\\Events\\KeyForgotten;
use Illuminate\\Cache\\Events\\KeyWritten;

/**
 * 应用程序的事件侦听器映射。
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
</code></pre>`,12);function j(O,U){const c=t("ExternalLinkIcon");return d(),i("div",null,[h,a("p",null,[e("在某些应用中，一些查询数据或处理任务的操作会在某段时间里短时间内大量进行，或是一个操作花费好几秒钟。当出现这种情况时，通常会将检索到的数据缓存起来，从而为后面请求同一数据的请求迅速返回结果。这些缓存数据通常会储存在极快的存储系统中，例如 "),a("a",p,[e("Memcached"),o(c)]),e(" 和 "),a("a",l,[e("Redis"),o(c)]),e("。")]),u,g,m,a("p",null,[e("缓存配置文件位于 "),f,e("。在这个文件中，你可以指定应用默认使用哪个缓存驱动。Laravel 支持的缓存后端包括 "),a("a",b,[e("Memcached"),o(c)]),e("、"),a("a",v,[e("Redis"),o(c)]),e("、"),a("a",k,[e("DynamoDB"),o(c)]),e("，以及现成的关系型数据库。此外，还支持基于文件的缓存驱动，以及方便自动化测试的缓存驱动 "),_,e(" 和 "),C,e(" 。")]),y,a("p",null,[e("使用 Memcached 驱动程序需要安装 "),a("a",$,[e("Memcached PECL 包"),o(c)]),e("。你可以在 "),x,e(" 配置文件中列出所有的 Memcached 服务器。该文件已经包含一个 "),L,e(" 来帮助你入门：")]),M,a("p",null,[e("在将 Redis 缓存与 Laravel 一起使用之前，您需要通过 PECL 安装 PhpRedis PHP 扩展或通过 Composer 安装 "),A,e(" 包（~1.0）。"),S,e(" 已经包含了这个扩展。另外，Laravel 官方部署平台如 "),a("a",q,[e("Laravel Forge"),o(c)]),e(" 和 "),a("a",P,[e("Laravel Vapor"),o(c)]),e(" 也默认安装了 PhpRedis 扩展。")]),E,I,D,a("p",null,[e("在使用 "),a("a",w,[e("DynamoDB"),o(c)]),e(" 缓存驱动程序之前，您必须创建一个 DynamoDB 表来存储所有缓存的数据。通常，此表应命名为"),B,e("。但是，您应该根据应用程序的缓存配置文件中的 "),R,e(" 配置值来命名表。")]),F,a("p",null,[e("原子锁允许操作分布式锁而不用担心竞争条件。例如，"),a("a",H,[e("Laravel Forge"),o(c)]),e(" 使用原子锁来确保服务器上一次只执行一个远程任务。您可以使用 "),K,e(" 方法创建和管理锁：")]),T,a("p",null,[e("我们只需要使用 MongoDB 连接来实现这些方法中的每一个。有关如何实现这些方法的示例，请查看 "),a("a",N,[e("Laravel 框架源代码"),o(c)]),e("中的"),V,e("。 一旦我们的实现完成，我们可以通过调用"),W,e(" 门面的"),J,e("方法来完成我们的自定义驱动程序注册：")]),z])}const Q=r(s,[["render",j],["__file","cache.html.vue"]]);export{Q as default};
