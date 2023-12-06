import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{r as c,o as d,c as r,b as a,d as e,e as s,a as t}from"./app-06635a3b.js";const i={},p=t('<h1 id="数据库-快速入门" tabindex="-1"><a class="header-anchor" href="#数据库-快速入门" aria-hidden="true">#</a> 数据库: 快速入门</h1><ul><li><a href="#introduction">简介</a><ul><li><a href="#configuration">配置</a></li><li><a href="#read-and-write-connections">读写分离</a></li></ul></li><li><a href="#running-queries">运行原生 SQL 查询</a><ul><li><a href="#using-multiple-database-connections">使用多个数据库连接</a></li><li><a href="#listening-for-query-events">监听查询事件</a></li><li><a href="#monitoring-cumulative-query-time">监控累计查询时间</a></li></ul></li><li><a href="#database-transactions">数据库事务</a></li><li><a href="#connecting-to-the-database-cli">连接到数据库 CLI</a></li><li><a href="#inspecting-your-databases">检查数据库</a></li><li><a href="#monitoring-your-databases">监控数据库</a></li></ul><p><a name="introduction"></a></p><h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h2><p>几乎所有的应用程序都需要和数据库进行交互。Laravel 为此提供了一套非常简单易用的数据库交互方式。开发者可以使用原生 SQL，<a href="./queries">查询构造器</a>，以及 <a href="./eloquent">Eloquent ORM</a> 等方式与数据库交互。目前，Laravel 为以下五种数据库提供了官方支持：:</p>',5),l={class:"content-list",markdown:"1"},u={href:"https://mariadb.org/about/#maintenance-policy",target:"_blank",rel:"noopener noreferrer"},h={href:"https://en.wikipedia.org/wiki/MySQL#Release_history",target:"_blank",rel:"noopener noreferrer"},m={href:"https://www.postgresql.org/support/versioning/",target:"_blank",rel:"noopener noreferrer"},v=a("li",null,"SQLite 3.8.8+",-1),b={href:"https://docs.microsoft.com/en-us/lifecycle/products/?products=sql-server",target:"_blank",rel:"noopener noreferrer"},g=t(`<p><a name="configuration"></a></p><h3 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h3><p>Laravel数据库服务的配置位于应用程序的<code>config/database.php</code>配置文件中。在此文件中，您可以定义所有数据库连接，并指定默认情况下应使用的连接。此文件中的大多数配置选项由应用程序环境变量的值驱动。本文件提供了Laravel支持的大多数数据库系统的示例。</p><p>在默认情况下，Laravel 的示例 <a href="./configuration#environment-configuration">环境配置</a> 使用了 <a href="./sail">Laravel Sail</a>，Laravel Sail 是一种用于在本地开发 Laravel 应用的 Docker 配置。但你依然可以根据本地数据库的需要修改数据库配置。</p><p><a name="sqlite-configuration"></a></p><h4 id="sqlite-配置" tabindex="-1"><a class="header-anchor" href="#sqlite-配置" aria-hidden="true">#</a> SQLite 配置</h4><p>SQLite 数据库本质上只是一个存在你文件系统上的文件。你可以通过 <code>touch</code> 命令来建立一个新的 SQLite 数据库，如： <code>touch database/database.sqlite </code>. 建立数据库之后，你就可以很简单地使用数据库的绝对路径来配置 <code>DB_DATABASE</code> 环境变量，使其指向这个新创建的数据库：</p><div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code><span class="token key attr-name">DB_CONNECTION</span><span class="token punctuation">=</span><span class="token value attr-value">sqlite</span>
<span class="token key attr-name">DB_DATABASE</span><span class="token punctuation">=</span><span class="token value attr-value">/absolute/path/to/database.sqlite</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>若要为 SQLite 连接启用外键约束，应将 <code>DB_FOREIGN_KEYS</code> 环境变量设置为 <code>true</code> ：</p><div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code><span class="token key attr-name">DB_FOREIGN_KEYS</span><span class="token punctuation">=</span><span class="token value attr-value">true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a name="mssql-configuration"></a></p><h4 id="microsoft-sql-server-配置" tabindex="-1"><a class="header-anchor" href="#microsoft-sql-server-配置" aria-hidden="true">#</a> Microsoft SQL Server 配置</h4><p>在使用 SQL Server 数据库前，你需要先确保你已安装并启用了 <code>sqlsrv</code> 和 <code>pdo_sqlsrv</code> PHP 扩展以及它们所需要的依赖项，例如 Microsoft SQL ODBC 驱动。</p><p><a name="configuration-using-urls"></a></p><h4 id="url-形式配置" tabindex="-1"><a class="header-anchor" href="#url-形式配置" aria-hidden="true">#</a> URL 形式配置</h4><p>通常，数据库连接使用多个配置项进行配置，例如 <code>host</code> 、<code>database</code> 、 <code>username</code> 、 <code>password</code> 等。这些配置项都拥有对应的环境变量。这意味着你需要在生产服务器上管理多个不同的环境变量。</p><p>部分数据库托管平台（如 AWS 和 Heroku）会提供了包含所有连接信息的数据库「URL」。它们通常看起来像这样：</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>mysql://root:password@127.0.0.1/forge?charset=UTF-8
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这些 URL 通常遵循标准模式约定：</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>driver://username:password@host:port/database?options
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>为了方便起见，Laravel 支持使用这些 URL 替代传统的配置项来配置你的数据库。如果配置项 <code>url</code> （或其对应的环境变量 <code>DATABASE_URL</code> ）存在，那么 Laravel 将会尝试从 URL 中提取数据库连接以及凭证信息。</p><p><a name="read-and-write-connections"></a></p><h3 id="读写分离" tabindex="-1"><a class="header-anchor" href="#读写分离" aria-hidden="true">#</a> 读写分离</h3><p>有时候你可能会希望使用一个数据库连接来执行 <code>SELECT</code> 语句，而 <code>INSERT</code>、<code>UPDATE</code> 和 <code>DELETE</code> 语句则由另一个数据库连接来执行。在 Laravel 中，无论你是使用原生 SQL 查询、查询构造器 或是 <code>Eloquent ORM</code>，都能轻松实现读写分离。</p><p>为了弄明白如何配置读写分离，我们先来看个例子：</p><pre><code>&#39;mysql&#39; =&gt; [
    &#39;read&#39; =&gt; [
        &#39;host&#39; =&gt; [
            &#39;192.168.1.1&#39;,
            &#39;196.168.1.2&#39;,
        ],
    ],
    &#39;write&#39; =&gt; [
        &#39;host&#39; =&gt; [
            &#39;196.168.1.3&#39;,
        ],
    ],
    &#39;sticky&#39; =&gt; true,
    &#39;driver&#39; =&gt; &#39;mysql&#39;,
    &#39;database&#39; =&gt; &#39;database&#39;,
    &#39;username&#39; =&gt; &#39;root&#39;,
    &#39;password&#39; =&gt; &#39;&#39;,
    &#39;charset&#39; =&gt; &#39;utf8mb4&#39;,
    &#39;collation&#39; =&gt; &#39;utf8mb4_unicode_ci&#39;,
    &#39;prefix&#39; =&gt; &#39;&#39;,
],
</code></pre><p>请注意，我们在数据库配置中加入了三个键，分别是： <code>read</code>, <code>write</code> 以及 <code>sticky</code> 。<code>read</code> 和 <code>write</code> 的值是一个只包含 <code>host</code> 键的数组。这代表其他的数据库选项将会从主 <code>mysql</code> 配置中获取。</p><p>如果你想要覆写主 <code>mysql</code> 配置，只需要将需要覆写的值放到 <code>read</code> 和 <code>write</code> 数组里即可。所以，在这个例子中，<code>192.168.1.1</code> 将会被用作「读」连接主机，而 <code>192.168.1.3</code> 将作为「写」连接主机。这两个连接将共享 <code>mysql</code> 数组中的各项配置，如数据库凭证（用户名、密码）、前缀、字符编码等。如果 <code>host</code> 数组中存在多个值，<code>Laravel</code> 将会为每个连接随机选取所使用的数据库主机。</p><p><a name="the-sticky-option"></a></p><h4 id="sticky-选项" tabindex="-1"><a class="header-anchor" href="#sticky-选项" aria-hidden="true">#</a> <code>sticky</code> 选项</h4><p><code>sticky</code> 是一个 可选 值，它用于允许 Laravel 立即读取在当前请求周期内写入到数据库的记录。若 <code>sticky</code> 选项被启用，且在当前请求周期中执行过「写」操作，那么在这之后的所有「读」操作都将使用「写」连接。这样可以确保同一个请求周期中写入的数据库可以被立即读取到，从而避免主从同步延迟导致的数据不一致。不过是否启用它取决于项目的实际需求。</p><p><a name="running-queries"></a></p><h2 id="执行原生sql查询" tabindex="-1"><a class="header-anchor" href="#执行原生sql查询" aria-hidden="true">#</a> 执行原生SQL查询</h2><p>一旦配置好数据库连接，你就可以使用 <code>DB</code> Facade 来执行查询。<code>DB</code> Facade 为每种类型的查询都提供了相应的方法：<code>select</code>、<code>update</code>、<code>insert</code>、<code>delete</code> 以及 <code>statement</code>。</p><p><a name="running-a-select-query"></a></p><h4 id="执行-select-查询" tabindex="-1"><a class="header-anchor" href="#执行-select-查询" aria-hidden="true">#</a> 执行 SELECT 查询</h4><p>你可以使用 <code>DB</code> Facade 的 <code>select</code> 方法来执行一个基础的 SELECT 查询：</p><pre><code>&lt;?php

namespace App\\Http\\Controllers;

use App\\Http\\Controllers\\Controller;
use Illuminate\\Support\\Facades\\DB;
use Illuminate\\View\\View;

class UserController extends Controller
{
    /**
     * 展示应用程序所有的用户列表.
     */
    public function index(): View
    {
        $users = DB::select(&#39;select * from users where active = ?&#39;, [1]);

        return view(&#39;user.index&#39;, [&#39;users&#39; =&gt; $users]);
    }
}
</code></pre><p>传递给 <code>select</code> 方法的第一个参数是一个原生 SQL 查询语句，而第二个参数则是需要绑定到查询中的参数值。通常，这些值用于约束 <code>where</code> 语句。使用参数绑定可以有效防止 SQL 注入。</p><p><code>select</code>方法将始终返回一个包含查询结果的数组。数组中的每个结果都对应一个数据库记录的<code>stdClass</code>对象：</p><pre><code>use Illuminate\\Support\\Facades\\DB;

$users = DB::select(&#39;select * from users&#39;);

foreach ($users as $user) {
    echo $user-&gt;name;
}
</code></pre><p><a name="selecting-scalar-values"></a></p><h4 id="选择标量值" tabindex="-1"><a class="header-anchor" href="#选择标量值" aria-hidden="true">#</a> 选择标量值</h4><p>有时你的数据库查询可能得到一个单一的标量值。而不是需要从记录对象中检索查询的标量结果，Laravel 允许你直接使用<code>scalar</code>方法检索此值:</p><pre><code>$burgers = DB::scalar(
    &quot;select count(case when food = &#39;burger&#39; then 1 end) as burgers from menu&quot;
);
</code></pre><p><a name="using-named-bindings"></a></p><h4 id="使用命名绑定" tabindex="-1"><a class="header-anchor" href="#使用命名绑定" aria-hidden="true">#</a> 使用命名绑定</h4><p>除了使用<code>?</code>表示参数绑定外，你还可以使用命名绑定的形式来执行一个查询：</p><pre><code>$results = DB::select(&#39;select * from users where id = :id&#39;, [&#39;id&#39; =&gt; 1]);
</code></pre><p><a name="running-an-insert-statement"></a></p><h4 id="执行-insert-语句" tabindex="-1"><a class="header-anchor" href="#执行-insert-语句" aria-hidden="true">#</a> 执行 Insert 语句</h4><p>你可以使用<code>DB</code> Facade 的<code>insert</code>方法来执行语句。跟<code>select</code>方法一样，该方法的第一个和第二个参数分别是原生 SQL 语句和绑定的数据：</p><pre><code>use Illuminate\\Support\\Facades\\DB;

DB::insert(&#39;insert into users (id, name) values (?, ?)&#39;, [1, &#39;Marc&#39;]);
</code></pre><p><a name="running-an-update-statement"></a></p><h4 id="执行-update-语句" tabindex="-1"><a class="header-anchor" href="#执行-update-语句" aria-hidden="true">#</a> 执行 Update 语句</h4><p><code>update</code>方法用于更新数据库中现有的记录。该方法将会返回受到本次操作影响的记录行数：</p><pre><code>use Illuminate\\Support\\Facades\\DB;

$affected = DB::update(
    &#39;update users set votes = 100 where name = ?&#39;,
    [&#39;Anita&#39;]
);
</code></pre><p><a name="running-a-delete-statement"></a></p><h4 id="执行-delete-语句" tabindex="-1"><a class="header-anchor" href="#执行-delete-语句" aria-hidden="true">#</a> 执行 Delete 语句</h4><p><code>delete</code> 函数被用于删除数据库中的记录。它的返回值与 <code>update</code> 函数相同，返回本次操作受影响的总行数。</p><pre><code>use Illuminate\\Support\\Facades\\DB;

$deleted = DB::delete(&#39;delete from users&#39;);
</code></pre><p><a name="执行指定的 SQL"></a></p><h4 id="执行指定的-sql" tabindex="-1"><a class="header-anchor" href="#执行指定的-sql" aria-hidden="true">#</a> 执行指定的 SQL</h4><p>部分 SQL 语句不返回任何值。在这种情况下，你可能需要使用 <code>DB::statement($sql)</code> 来执行你的 SQL 语句。</p><pre><code>DB::statement(&#39;drop table users&#39;);
</code></pre><p><a name="直接执行 SQL"></a></p><h4 id="直接执行-sql" tabindex="-1"><a class="header-anchor" href="#直接执行-sql" aria-hidden="true">#</a> 直接执行 SQL</h4><p>有时候你可能想执行一段 SQL 语句，但不需要进行 SQL 预处理绑定。这种情况下你可以使用 <code>DB::unprepared($sql)</code> 来执行你的 SQL 语句。</p><pre><code>DB::unprepared(&#39;update users set votes = 100 where name = &quot;Dries&quot;&#39;);
</code></pre><blockquote><p><strong>注意</strong><br> 未经过预处理 SQL 的语句不绑定参数，它们可能容易受到 SQL 注入的攻击。在没有必要的理由的情况下，你不应直接在 SQL 中使用用户传入的数据。</p></blockquote><p><a name="在事务中的隐式提交"></a></p><h4 id="在事务中的隐式提交" tabindex="-1"><a class="header-anchor" href="#在事务中的隐式提交" aria-hidden="true">#</a> 在事务中的隐式提交</h4>`,72),k=a("code",null,"DB::statement($sql)",-1),f=a("code",null,"DB::unprepared($sql)",-1),D={href:"https://dev.mysql.com/doc/refman/8.0/en/implicit-commit.html",target:"_blank",rel:"noopener noreferrer"},S=a("pre",null,[a("code",null,`DB::unprepared('create table a (col varchar(1) null)');
`)],-1),L={href:"https://dev.mysql.com/doc/refman/8.0/en/implicit-commit.html",target:"_blank",rel:"noopener noreferrer"},q=t(`<p><a name="使用多数据库连接"></a></p><h3 id="使用多数据库连接" tabindex="-1"><a class="header-anchor" href="#使用多数据库连接" aria-hidden="true">#</a> 使用多数据库连接</h3><p>如果你在配置文件 <code>config/database.php</code> 中定义了多个数据库连接的话，你可以通过 DB Facade 的 <code>connection</code> 方法来使用它们。传递给 <code>connection</code> 方法的连接名称应该是你在 <code>config/database.php</code> 里或者通过 <code>config</code> 助手函数在运行时配置的连接之一：</p><pre><code>use Illuminate\\Support\\Facades\\DB;

$users = DB::connection(&#39;sqlite&#39;)-&gt;select(/* ... */);
</code></pre><p>你也可以使用一个连接实例上的 <code>getPdo</code> 方法来获取底层的 PDO 实例：</p><pre><code>$pdo = DB::connection()-&gt;getPdo();
</code></pre><p><a name="listening-for-query-events"></a></p><h3 id="监听查询事件" tabindex="-1"><a class="header-anchor" href="#监听查询事件" aria-hidden="true">#</a> 监听查询事件</h3><p>如果你想要获取程序执行的每一条 SQL 语句，可以使用 <code>Db</code> facade 的 <code>listen</code> 方法。该方法对查询日志和调试非常有用，你可以在 <a href="./providers">服务提供者</a> 中使用 <code>boot</code> 方法注册查询监听器。</p><pre><code>&lt;?php

namespace App\\Providers;

use Illuminate\\Database\\Events\\QueryExecuted;
use Illuminate\\Support\\Facades\\DB;
use Illuminate\\Support\\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * 注册任意应用服务
     */
    public function register(): void
    {
        // ...
    }

    /**
     * 引导任意应用服务
     */
    public function boot(): void
    {
        DB::listen(function (QueryExecuted $query) {
            // $query-&gt;sql;
            // $query-&gt;bindings;
            // $query-&gt;time;
        });
    }
}
</code></pre><p><a name="monitoring-cumulative-query-time"></a></p><h3 id="监控累积查询时间" tabindex="-1"><a class="header-anchor" href="#监控累积查询时间" aria-hidden="true">#</a> 监控累积查询时间</h3><p>现代web应用程序的一个常见性能瓶颈是查询数据库所花费的时间。幸运的是，当Laravel在单个请求中花费了太多时间查询数据库时，它可以调用你定义的闭包或回调。要使用它，你可以调用 <code>whenQueryingForLongerThan</code> 方法并提供查询时间阀值(以毫秒为单位)和一个闭包作为参数。你可以在<a href="./providers">服务提供者</a> 的 <code>boot</code> 方法中调用此方法：</p><pre><code>&lt;?php

namespace App\\Providers;

use Illuminate\\Database\\Connection;
use Illuminate\\Support\\Facades\\DB;
use Illuminate\\Support\\ServiceProvider;
use Illuminate\\Database\\Events\\QueryExecuted;

class AppServiceProvider extends ServiceProvider
{
    /**
     * 注册任意应用服务
     */
    public function register(): void
    {
        // ...
    }

    /**
     * 引导任意应用服务
     */
    public function boot(): void
    {
        DB::whenQueryingForLongerThan(500, function (Connection $connection, QueryExecuted $event) {
            // 通知开发团队...
        });
    }
}
</code></pre><p><a name="database-transactions"></a></p><h2 id="数据库事务" tabindex="-1"><a class="header-anchor" href="#数据库事务" aria-hidden="true">#</a> 数据库事务</h2><p>想要在数据库事务中运行一系列操作，你可以使用 <code>DB</code> 门面的 <code>transaction</code> 方法。如果在事务的闭包中出现了异常，事务将会自动回滚。如果闭包执行成功，事务将会自动提交。在使用 <code>transaction</code> 方法时不需要手动回滚或提交：</p><pre><code>use Illuminate\\Support\\Facades\\DB;

DB::transaction(function () {
    DB::update(&#39;update users set votes = 1&#39;);

    DB::delete(&#39;delete from posts&#39;);
});
</code></pre><p><a name="handling-deadlocks"></a></p><h4 id="处理死锁" tabindex="-1"><a class="header-anchor" href="#处理死锁" aria-hidden="true">#</a> 处理死锁</h4><p><code>transaction</code> 方法接受一个可选的第二个参数，该参数定义发生死锁时事务应重试的次数。一旦这些尝试用尽，就会抛出一个异常：</p><pre><code>use Illuminate\\Support\\Facades\\DB;

DB::transaction(function () {
    DB::update(&#39;update users set votes = 1&#39;);

    DB::delete(&#39;delete from posts&#39;);
}, 5);
</code></pre><p><a name="manually-using-transactions"></a></p><h4 id="手动执行事务" tabindex="-1"><a class="header-anchor" href="#手动执行事务" aria-hidden="true">#</a> 手动执行事务</h4><p>如果你想要手动处理事务并完全控制回滚和提交，可以使用 <code>DB</code> 门面提供的 <code>beginTransaction</code> 方法：</p><pre><code>use Illuminate\\Support\\Facades\\DB;

DB::beginTransaction();
</code></pre><p>你可以通过 <code>rollBack</code> 方法回滚事务：</p><pre><code>DB::rollBack();
</code></pre><p>最后，你可以通过 <code>commit</code> 方法提交事务：</p><pre><code>DB::commit();
</code></pre><blockquote><p><strong>技巧</strong><br><code>DB</code> 门面的事务方法还可以用于控制 <a href="./queries">查询构造器</a> and <a href="./eloquent">Eloquent ORM</a>.</p></blockquote><p><a name="connecting-to-the-database-cli"></a></p><h2 id="连接到数据库-cli" tabindex="-1"><a class="header-anchor" href="#连接到数据库-cli" aria-hidden="true">#</a> 连接到数据库 CLI</h2><p>如果你想连接到数据库的 CLI，则可以使用 <code>db</code> Artisan 命令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan db
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果需要，你可以指定数据库连接名称以连接到不是默认连接的数据库连接：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan db mysql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a name="inspecting-your-databases"></a></p><h2 id="检查你的数据库" tabindex="-1"><a class="header-anchor" href="#检查你的数据库" aria-hidden="true">#</a> 检查你的数据库</h2><p>使用 <code>db:show</code> 和 <code>db:table</code> Artisan 命令，你可以深入了解数据库及其相关的表。要查看数据库的概述，包括它的大小、类型、打开的连接数以及表的摘要，你可以使用 <code>db:show</code> 命令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan db:show
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>你可以通过 <code>--database</code> 选项向命令提供数据库连接名称来指定应该检查哪个数据库连接:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan db:show <span class="token parameter variable">--database</span><span class="token operator">=</span>pgsql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果希望在命令的输出中包含表行计数和数据库视图详细信息，你可以分别提供 <code>--counts</code> 和 <code>--views</code> 选项。在大型数据库上，检索行数和视图详细信息可能很慢:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan db:show <span class="token parameter variable">--counts</span> <span class="token parameter variable">--views</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a name="table-overview"></a></p><h4 id="表的摘要信息" tabindex="-1"><a class="header-anchor" href="#表的摘要信息" aria-hidden="true">#</a> 表的摘要信息</h4><p>如果你想获得数据库中单张表的概览，你可以执行 <code>db:table</code> Artisan命令。这个命令提供了一个数据库表的概览，包括它的列、类型、属性、键和索引:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan db:table <span class="token function">users</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a name="monitoring-your-databases"></a></p><h2 id="监视数据库" tabindex="-1"><a class="header-anchor" href="#监视数据库" aria-hidden="true">#</a> 监视数据库</h2><p>使用 <code>db:monitor</code> Artisan命令，如果你的数据库正在管理超过指定数量的打开连接，可以通过 Laravel 调度触发 <code>Illuminate\\Database\\Events\\DatabaseBusy</code> 事件。</p><p>开始, 你应该将 <code>db:monitor</code> 命令安排为 <a href="./scheduling">每分钟运行一次</a>。 该命令接受要监视的数据库连接配置的名称，以及在分派事件之前应允许的最大打开连接数：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan db:monitor <span class="token parameter variable">--databases</span><span class="token operator">=</span>mysql,pgsql <span class="token parameter variable">--max</span><span class="token operator">=</span><span class="token number">100</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>仅调度此命令不足以触发通知，提醒你打开的连接数。当命令遇到打开连接计数超过阈值的数据库时，将调度 <code>DatabaseBusy</code> 事件。你应该在应用程序的 <code>EventServiceProvider</code> 中侦听此事件，以便向你或你的开发团队发送通知</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">App<span class="token punctuation">\\</span>Notifications<span class="token punctuation">\\</span>DatabaseApproachingMaxConnections</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Database<span class="token punctuation">\\</span>Events<span class="token punctuation">\\</span>DatabaseBusy</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Support<span class="token punctuation">\\</span>Facades<span class="token punctuation">\\</span>Event</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Support<span class="token punctuation">\\</span>Facades<span class="token punctuation">\\</span>Notification</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * 为应用程序注册任何其他事件。
 */</span>
<span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">boot</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">void</span>
<span class="token punctuation">{</span>
    <span class="token class-name static-context">Event</span><span class="token operator">::</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token class-name type-declaration">DatabaseBusy</span> <span class="token variable">$event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name static-context">Notification</span><span class="token operator">::</span><span class="token function">route</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;mail&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;dev@example.com&#39;</span><span class="token punctuation">)</span>
                <span class="token operator">-&gt;</span><span class="token function">notify</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">DatabaseApproachingMaxConnections</span><span class="token punctuation">(</span>
                    <span class="token variable">$event</span><span class="token operator">-&gt;</span><span class="token property">connectionName</span><span class="token punctuation">,</span>
                    <span class="token variable">$event</span><span class="token operator">-&gt;</span><span class="token property">connections</span>
                <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,56);function y(B,x){const n=c("ExternalLinkIcon");return d(),r("div",null,[p,a("div",l,[a("ul",null,[a("li",null,[e("MariaDB 10.3+ ("),a("a",u,[e("版本策略"),s(n)]),e(")")]),a("li",null,[e("MySQL 5.7+ ("),a("a",h,[e("版本策略"),s(n)]),e(")")]),a("li",null,[e("PostgreSQL 10.0+ ("),a("a",m,[e("版本策略"),s(n)]),e(")")]),v,a("li",null,[e("SQL Server 2017+ ("),a("a",b,[e("版本策略"),s(n)]),e(")")])])]),g,a("p",null,[e("在事务中使用 "),k,e(" 与 "),f,e(" 时，你必须要谨慎处理，避免 SQL 语句产生"),a("a",D,[e("隐式提交"),s(n)]),e("。这些语句会导致数据库引擎间接地提交整个事务, 让 Laravel 丢失数据库当前的事务级别。下面是一个会产生隐式提交的示例 SQL：创建一个数据库表。")]),S,a("p",null,[e("请参考"),a("a",L,[e("MySQL 官方手册"),s(n)]),e("以了解更多隐式提交的信息。")]),q])}const Q=o(i,[["render",y],["__file","database.html.vue"]]);export{Q as default};
