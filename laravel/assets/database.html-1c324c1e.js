import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{r as i,o as r,c,b as a,d as e,e as t,a as s}from"./app-8cdff07c.js";const d={},l=s('<h1 id="database-getting-started" tabindex="-1"><a class="header-anchor" href="#database-getting-started" aria-hidden="true">#</a> Database: Getting Started</h1><ul><li><a href="#introduction">Introduction</a><ul><li><a href="#configuration">Configuration</a></li><li><a href="#read-and-write-connections">Read &amp; Write Connections</a></li></ul></li><li><a href="#running-queries">Running SQL Queries</a><ul><li><a href="#using-multiple-database-connections">Using Multiple Database Connections</a></li><li><a href="#listening-for-query-events">Listening For Query Events</a></li><li><a href="#monitoring-cumulative-query-time">Monitoring Cumulative Query Time</a></li></ul></li><li><a href="#database-transactions">Database Transactions</a></li><li><a href="#connecting-to-the-database-cli">Connecting To The Database CLI</a></li><li><a href="#inspecting-your-databases">Inspecting Your Databases</a></li><li><a href="#monitoring-your-databases">Monitoring Your Databases</a></li></ul><p><a name="introduction"></a></p><h2 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h2><p>Almost every modern web application interacts with a database. Laravel makes interacting with databases extremely simple across a variety of supported databases using raw SQL, a <a href="./queries">fluent query builder</a>, and the <a href="./eloquent">Eloquent ORM</a>. Currently, Laravel provides first-party support for five databases:</p>',5),u={class:"content-list",markdown:"1"},p={href:"https://mariadb.org/about/#maintenance-policy",target:"_blank",rel:"noopener noreferrer"},h={href:"https://en.wikipedia.org/wiki/MySQL#Release_history",target:"_blank",rel:"noopener noreferrer"},m={href:"https://www.postgresql.org/support/versioning/",target:"_blank",rel:"noopener noreferrer"},b=a("li",null,"SQLite 3.8.8+",-1),g={href:"https://docs.microsoft.com/en-us/lifecycle/products/?products=sql-server",target:"_blank",rel:"noopener noreferrer"},v=s(`<p><a name="configuration"></a></p><h3 id="configuration" tabindex="-1"><a class="header-anchor" href="#configuration" aria-hidden="true">#</a> Configuration</h3><p>The configuration for Laravel&#39;s database services is located in your application&#39;s <code>config/database.php</code> configuration file. In this file, you may define all of your database connections, as well as specify which connection should be used by default. Most of the configuration options within this file are driven by the values of your application&#39;s environment variables. Examples for most of Laravel&#39;s supported database systems are provided in this file.</p><p>By default, Laravel&#39;s sample <a href="./configuration#environment-configuration">environment configuration</a> is ready to use with <a href="./sail">Laravel Sail</a>, which is a Docker configuration for developing Laravel applications on your local machine. However, you are free to modify your database configuration as needed for your local database.</p><p><a name="sqlite-configuration"></a></p><h4 id="sqlite-configuration" tabindex="-1"><a class="header-anchor" href="#sqlite-configuration" aria-hidden="true">#</a> SQLite Configuration</h4><p>SQLite databases are contained within a single file on your filesystem. You can create a new SQLite database using the <code>touch</code> command in your terminal: <code>touch database/database.sqlite</code>. After the database has been created, you may easily configure your environment variables to point to this database by placing the absolute path to the database in the <code>DB_DATABASE</code> environment variable:</p><div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code><span class="token key attr-name">DB_CONNECTION</span><span class="token punctuation">=</span><span class="token value attr-value">sqlite</span>
<span class="token key attr-name">DB_DATABASE</span><span class="token punctuation">=</span><span class="token value attr-value">/absolute/path/to/database.sqlite</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>To enable foreign key constraints for SQLite connections, you should set the <code>DB_FOREIGN_KEYS</code> environment variable to <code>true</code>:</p><div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code><span class="token key attr-name">DB_FOREIGN_KEYS</span><span class="token punctuation">=</span><span class="token value attr-value">true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a name="mssql-configuration"></a></p><h4 id="microsoft-sql-server-configuration" tabindex="-1"><a class="header-anchor" href="#microsoft-sql-server-configuration" aria-hidden="true">#</a> Microsoft SQL Server Configuration</h4><p>To use a Microsoft SQL Server database, you should ensure that you have the <code>sqlsrv</code> and <code>pdo_sqlsrv</code> PHP extensions installed as well as any dependencies they may require such as the Microsoft SQL ODBC driver.</p><p><a name="configuration-using-urls"></a></p><h4 id="configuration-using-urls" tabindex="-1"><a class="header-anchor" href="#configuration-using-urls" aria-hidden="true">#</a> Configuration Using URLs</h4><p>Typically, database connections are configured using multiple configuration values such as <code>host</code>, <code>database</code>, <code>username</code>, <code>password</code>, etc. Each of these configuration values has its own corresponding environment variable. This means that when configuring your database connection information on a production server, you need to manage several environment variables.</p><p>Some managed database providers such as AWS and Heroku provide a single database &quot;URL&quot; that contains all of the connection information for the database in a single string. An example database URL may look something like the following:</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>mysql://root:password@127.0.0.1/forge?charset=UTF-8
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>These URLs typically follow a standard schema convention:</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>driver://username:password@host:port/database?options
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>For convenience, Laravel supports these URLs as an alternative to configuring your database with multiple configuration options. If the <code>url</code> (or corresponding <code>DATABASE_URL</code> environment variable) configuration option is present, it will be used to extract the database connection and credential information.</p><p><a name="read-and-write-connections"></a></p><h3 id="read-write-connections" tabindex="-1"><a class="header-anchor" href="#read-write-connections" aria-hidden="true">#</a> Read &amp; Write Connections</h3><p>Sometimes you may wish to use one database connection for SELECT statements, and another for INSERT, UPDATE, and DELETE statements. Laravel makes this a breeze, and the proper connections will always be used whether you are using raw queries, the query builder, or the Eloquent ORM.</p><p>To see how read / write connections should be configured, let&#39;s look at this example:</p><pre><code>&#39;mysql&#39; =&gt; [
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
</code></pre><p>Note that three keys have been added to the configuration array: <code>read</code>, <code>write</code> and <code>sticky</code>. The <code>read</code> and <code>write</code> keys have array values containing a single key: <code>host</code>. The rest of the database options for the <code>read</code> and <code>write</code> connections will be merged from the main <code>mysql</code> configuration array.</p><p>You only need to place items in the <code>read</code> and <code>write</code> arrays if you wish to override the values from the main <code>mysql</code> array. So, in this case, <code>192.168.1.1</code> will be used as the host for the &quot;read&quot; connection, while <code>192.168.1.3</code> will be used for the &quot;write&quot; connection. The database credentials, prefix, character set, and all other options in the main <code>mysql</code> array will be shared across both connections. When multiple values exist in the <code>host</code> configuration array, a database host will be randomly chosen for each request.</p><p><a name="the-sticky-option"></a></p><h4 id="the-sticky-option" tabindex="-1"><a class="header-anchor" href="#the-sticky-option" aria-hidden="true">#</a> The <code>sticky</code> Option</h4><p>The <code>sticky</code> option is an <em>optional</em> value that can be used to allow the immediate reading of records that have been written to the database during the current request cycle. If the <code>sticky</code> option is enabled and a &quot;write&quot; operation has been performed against the database during the current request cycle, any further &quot;read&quot; operations will use the &quot;write&quot; connection. This ensures that any data written during the request cycle can be immediately read back from the database during that same request. It is up to you to decide if this is the desired behavior for your application.</p><p><a name="running-queries"></a></p><h2 id="running-sql-queries" tabindex="-1"><a class="header-anchor" href="#running-sql-queries" aria-hidden="true">#</a> Running SQL Queries</h2><p>Once you have configured your database connection, you may run queries using the <code>DB</code> facade. The <code>DB</code> facade provides methods for each type of query: <code>select</code>, <code>update</code>, <code>insert</code>, <code>delete</code>, and <code>statement</code>.</p><p><a name="running-a-select-query"></a></p><h4 id="running-a-select-query" tabindex="-1"><a class="header-anchor" href="#running-a-select-query" aria-hidden="true">#</a> Running A Select Query</h4><p>To run a basic SELECT query, you may use the <code>select</code> method on the <code>DB</code> facade:</p><pre><code>&lt;?php

namespace App\\Http\\Controllers;

use App\\Http\\Controllers\\Controller;
use Illuminate\\Support\\Facades\\DB;
use Illuminate\\View\\View;

class UserController extends Controller
{
    /**
     * Show a list of all of the application&#39;s users.
     */
    public function index(): View
    {
        $users = DB::select(&#39;select * from users where active = ?&#39;, [1]);

        return view(&#39;user.index&#39;, [&#39;users&#39; =&gt; $users]);
    }
}
</code></pre><p>The first argument passed to the <code>select</code> method is the SQL query, while the second argument is any parameter bindings that need to be bound to the query. Typically, these are the values of the <code>where</code> clause constraints. Parameter binding provides protection against SQL injection.</p><p>The <code>select</code> method will always return an <code>array</code> of results. Each result within the array will be a PHP <code>stdClass</code> object representing a record from the database:</p><pre><code>use Illuminate\\Support\\Facades\\DB;

$users = DB::select(&#39;select * from users&#39;);

foreach ($users as $user) {
    echo $user-&gt;name;
}
</code></pre><p><a name="selecting-scalar-values"></a></p><h4 id="selecting-scalar-values" tabindex="-1"><a class="header-anchor" href="#selecting-scalar-values" aria-hidden="true">#</a> Selecting Scalar Values</h4><p>Sometimes your database query may result in a single, scalar value. Instead of being required to retrieve the query&#39;s scalar result from a record object, Laravel allows you to retrieve this value directly using the <code>scalar</code> method:</p><pre><code>$burgers = DB::scalar(
    &quot;select count(case when food = &#39;burger&#39; then 1 end) as burgers from menu&quot;
);
</code></pre><p><a name="selecting-multiple-result-sets"></a></p><h4 id="selecting-multiple-result-sets" tabindex="-1"><a class="header-anchor" href="#selecting-multiple-result-sets" aria-hidden="true">#</a> Selecting Multiple Result Sets</h4><p>If your application calls stored procedures that return multiple result sets, you may use the <code>selectResultSets</code> method to retrieve all of the result sets returned by the stored procedure:</p><pre><code>[$options, $notifications] = DB::selectResultSets(
    &quot;CALL get_user_options_and_notifications(?)&quot;, $request-&gt;user()-&gt;id
);
</code></pre><p><a name="using-named-bindings"></a></p><h4 id="using-named-bindings" tabindex="-1"><a class="header-anchor" href="#using-named-bindings" aria-hidden="true">#</a> Using Named Bindings</h4><p>Instead of using <code>?</code> to represent your parameter bindings, you may execute a query using named bindings:</p><pre><code>$results = DB::select(&#39;select * from users where id = :id&#39;, [&#39;id&#39; =&gt; 1]);
</code></pre><p><a name="running-an-insert-statement"></a></p><h4 id="running-an-insert-statement" tabindex="-1"><a class="header-anchor" href="#running-an-insert-statement" aria-hidden="true">#</a> Running An Insert Statement</h4><p>To execute an <code>insert</code> statement, you may use the <code>insert</code> method on the <code>DB</code> facade. Like <code>select</code>, this method accepts the SQL query as its first argument and bindings as its second argument:</p><pre><code>use Illuminate\\Support\\Facades\\DB;

DB::insert(&#39;insert into users (id, name) values (?, ?)&#39;, [1, &#39;Marc&#39;]);
</code></pre><p><a name="running-an-update-statement"></a></p><h4 id="running-an-update-statement" tabindex="-1"><a class="header-anchor" href="#running-an-update-statement" aria-hidden="true">#</a> Running An Update Statement</h4><p>The <code>update</code> method should be used to update existing records in the database. The number of rows affected by the statement is returned by the method:</p><pre><code>use Illuminate\\Support\\Facades\\DB;

$affected = DB::update(
    &#39;update users set votes = 100 where name = ?&#39;,
    [&#39;Anita&#39;]
);
</code></pre><p><a name="running-a-delete-statement"></a></p><h4 id="running-a-delete-statement" tabindex="-1"><a class="header-anchor" href="#running-a-delete-statement" aria-hidden="true">#</a> Running A Delete Statement</h4><p>The <code>delete</code> method should be used to delete records from the database. Like <code>update</code>, the number of rows affected will be returned by the method:</p><pre><code>use Illuminate\\Support\\Facades\\DB;

$deleted = DB::delete(&#39;delete from users&#39;);
</code></pre><p><a name="running-a-general-statement"></a></p><h4 id="running-a-general-statement" tabindex="-1"><a class="header-anchor" href="#running-a-general-statement" aria-hidden="true">#</a> Running A General Statement</h4><p>Some database statements do not return any value. For these types of operations, you may use the <code>statement</code> method on the <code>DB</code> facade:</p><pre><code>DB::statement(&#39;drop table users&#39;);
</code></pre><p><a name="running-an-unprepared-statement"></a></p><h4 id="running-an-unprepared-statement" tabindex="-1"><a class="header-anchor" href="#running-an-unprepared-statement" aria-hidden="true">#</a> Running An Unprepared Statement</h4><p>Sometimes you may want to execute an SQL statement without binding any values. You may use the <code>DB</code> facade&#39;s <code>unprepared</code> method to accomplish this:</p><pre><code>DB::unprepared(&#39;update users set votes = 100 where name = &quot;Dries&quot;&#39;);
</code></pre><blockquote><p><strong>Warning</strong><br> Since unprepared statements do not bind parameters, they may be vulnerable to SQL injection. You should never allow user controlled values within an unprepared statement.</p></blockquote><p><a name="implicit-commits-in-transactions"></a></p><h4 id="implicit-commits" tabindex="-1"><a class="header-anchor" href="#implicit-commits" aria-hidden="true">#</a> Implicit Commits</h4>`,76),f=a("code",null,"DB",-1),y=a("code",null,"statement",-1),k=a("code",null,"unprepared",-1),w={href:"https://dev.mysql.com/doc/refman/8.0/en/implicit-commit.html",target:"_blank",rel:"noopener noreferrer"},q=a("pre",null,[a("code",null,`DB::unprepared('create table a (col varchar(1) null)');
`)],-1),x={href:"https://dev.mysql.com/doc/refman/8.0/en/implicit-commit.html",target:"_blank",rel:"noopener noreferrer"},D=s(`<p><a name="using-multiple-database-connections"></a></p><h3 id="using-multiple-database-connections" tabindex="-1"><a class="header-anchor" href="#using-multiple-database-connections" aria-hidden="true">#</a> Using Multiple Database Connections</h3><p>If your application defines multiple connections in your <code>config/database.php</code> configuration file, you may access each connection via the <code>connection</code> method provided by the <code>DB</code> facade. The connection name passed to the <code>connection</code> method should correspond to one of the connections listed in your <code>config/database.php</code> configuration file or configured at runtime using the <code>config</code> helper:</p><pre><code>use Illuminate\\Support\\Facades\\DB;

$users = DB::connection(&#39;sqlite&#39;)-&gt;select(/* ... */);
</code></pre><p>You may access the raw, underlying PDO instance of a connection using the <code>getPdo</code> method on a connection instance:</p><pre><code>$pdo = DB::connection()-&gt;getPdo();
</code></pre><p><a name="listening-for-query-events"></a></p><h3 id="listening-for-query-events" tabindex="-1"><a class="header-anchor" href="#listening-for-query-events" aria-hidden="true">#</a> Listening For Query Events</h3><p>If you would like to specify a closure that is invoked for each SQL query executed by your application, you may use the <code>DB</code> facade&#39;s <code>listen</code> method. This method can be useful for logging queries or debugging. You may register your query listener closure in the <code>boot</code> method of a <a href="./providers">service provider</a>:</p><pre><code>&lt;?php

namespace App\\Providers;

use Illuminate\\Database\\Events\\QueryExecuted;
use Illuminate\\Support\\Facades\\DB;
use Illuminate\\Support\\ServiceProvider;

class AppServiceProvider extends ServiceProvider
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
        DB::listen(function (QueryExecuted $query) {
            // $query-&gt;sql;
            // $query-&gt;bindings;
            // $query-&gt;time;
        });
    }
}
</code></pre><p><a name="monitoring-cumulative-query-time"></a></p><h3 id="monitoring-cumulative-query-time" tabindex="-1"><a class="header-anchor" href="#monitoring-cumulative-query-time" aria-hidden="true">#</a> Monitoring Cumulative Query Time</h3><p>A common performance bottleneck of modern web applications is the amount of time they spend querying databases. Thankfully, Laravel can invoke a closure or callback of your choice when it spends too much time querying the database during a single request. To get started, provide a query time threshold (in milliseconds) and closure to the <code>whenQueryingForLongerThan</code> method. You may invoke this method in the <code>boot</code> method of a <a href="./providers">service provider</a>:</p><pre><code>&lt;?php

namespace App\\Providers;

use Illuminate\\Database\\Connection;
use Illuminate\\Support\\Facades\\DB;
use Illuminate\\Support\\ServiceProvider;
use Illuminate\\Database\\Events\\QueryExecuted;

class AppServiceProvider extends ServiceProvider
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
        DB::whenQueryingForLongerThan(500, function (Connection $connection, QueryExecuted $event) {
            // Notify development team...
        });
    }
}
</code></pre><p><a name="database-transactions"></a></p><h2 id="database-transactions" tabindex="-1"><a class="header-anchor" href="#database-transactions" aria-hidden="true">#</a> Database Transactions</h2><p>You may use the <code>transaction</code> method provided by the <code>DB</code> facade to run a set of operations within a database transaction. If an exception is thrown within the transaction closure, the transaction will automatically be rolled back and the exception is re-thrown. If the closure executes successfully, the transaction will automatically be committed. You don&#39;t need to worry about manually rolling back or committing while using the <code>transaction</code> method:</p><pre><code>use Illuminate\\Support\\Facades\\DB;

DB::transaction(function () {
    DB::update(&#39;update users set votes = 1&#39;);

    DB::delete(&#39;delete from posts&#39;);
});
</code></pre><p><a name="handling-deadlocks"></a></p><h4 id="handling-deadlocks" tabindex="-1"><a class="header-anchor" href="#handling-deadlocks" aria-hidden="true">#</a> Handling Deadlocks</h4><p>The <code>transaction</code> method accepts an optional second argument which defines the number of times a transaction should be retried when a deadlock occurs. Once these attempts have been exhausted, an exception will be thrown:</p><pre><code>use Illuminate\\Support\\Facades\\DB;

DB::transaction(function () {
    DB::update(&#39;update users set votes = 1&#39;);

    DB::delete(&#39;delete from posts&#39;);
}, 5);
</code></pre><p><a name="manually-using-transactions"></a></p><h4 id="manually-using-transactions" tabindex="-1"><a class="header-anchor" href="#manually-using-transactions" aria-hidden="true">#</a> Manually Using Transactions</h4><p>If you would like to begin a transaction manually and have complete control over rollbacks and commits, you may use the <code>beginTransaction</code> method provided by the <code>DB</code> facade:</p><pre><code>use Illuminate\\Support\\Facades\\DB;

DB::beginTransaction();
</code></pre><p>You can rollback the transaction via the <code>rollBack</code> method:</p><pre><code>DB::rollBack();
</code></pre><p>Lastly, you can commit a transaction via the <code>commit</code> method:</p><pre><code>DB::commit();
</code></pre><blockquote><p><strong>Note</strong><br> The <code>DB</code> facade&#39;s transaction methods control the transactions for both the <a href="./queries">query builder</a> and <a href="./eloquent">Eloquent ORM</a>.</p></blockquote><p><a name="connecting-to-the-database-cli"></a></p><h2 id="connecting-to-the-database-cli" tabindex="-1"><a class="header-anchor" href="#connecting-to-the-database-cli" aria-hidden="true">#</a> Connecting To The Database CLI</h2><p>If you would like to connect to your database&#39;s CLI, you may use the <code>db</code> Artisan command:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan db
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>If needed, you may specify a database connection name to connect to a database connection that is not the default connection:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan db mysql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a name="inspecting-your-databases"></a></p><h2 id="inspecting-your-databases" tabindex="-1"><a class="header-anchor" href="#inspecting-your-databases" aria-hidden="true">#</a> Inspecting Your Databases</h2><p>Using the <code>db:show</code> and <code>db:table</code> Artisan commands, you can get valuable insight into your database and its associated tables. To see an overview of your database, including its size, type, number of open connections, and a summary of its tables, you may use the <code>db:show</code> command:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan db:show
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>You may specify which database connection should be inspected by providing the database connection name to the command via the <code>--database</code> option:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan db:show <span class="token parameter variable">--database</span><span class="token operator">=</span>pgsql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>If you would like to include table row counts and database view details within the output of the command, you may provide the <code>--counts</code> and <code>--views</code> options, respectively. On large databases, retrieving row counts and view details can be slow:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan db:show <span class="token parameter variable">--counts</span> <span class="token parameter variable">--views</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a name="table-overview"></a></p><h4 id="table-overview" tabindex="-1"><a class="header-anchor" href="#table-overview" aria-hidden="true">#</a> Table Overview</h4><p>If you would like to get an overview of an individual table within your database, you may execute the <code>db:table</code> Artisan command. This command provides a general overview of a database table, including its columns, types, attributes, keys, and indexes:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan db:table <span class="token function">users</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a name="monitoring-your-databases"></a></p><h2 id="monitoring-your-databases" tabindex="-1"><a class="header-anchor" href="#monitoring-your-databases" aria-hidden="true">#</a> Monitoring Your Databases</h2><p>Using the <code>db:monitor</code> Artisan command, you can instruct Laravel to dispatch an <code>Illuminate\\Database\\Events\\DatabaseBusy</code> event if your database is managing more than a specified number of open connections.</p><p>To get started, you should schedule the <code>db:monitor</code> command to <a href="./scheduling">run every minute</a>. The command accepts the names of the database connection configurations that you wish to monitor as well as the maximum number of open connections that should be tolerated before dispatching an event:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan db:monitor <span class="token parameter variable">--databases</span><span class="token operator">=</span>mysql,pgsql <span class="token parameter variable">--max</span><span class="token operator">=</span><span class="token number">100</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Scheduling this command alone is not enough to trigger a notification alerting you of the number of open connections. When the command encounters a database that has an open connection count that exceeds your threshold, a <code>DatabaseBusy</code> event will be dispatched. You should listen for this event within your application&#39;s <code>EventServiceProvider</code> in order to send a notification to you or your development team:</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">App<span class="token punctuation">\\</span>Notifications<span class="token punctuation">\\</span>DatabaseApproachingMaxConnections</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Database<span class="token punctuation">\\</span>Events<span class="token punctuation">\\</span>DatabaseBusy</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Support<span class="token punctuation">\\</span>Facades<span class="token punctuation">\\</span>Event</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Support<span class="token punctuation">\\</span>Facades<span class="token punctuation">\\</span>Notification</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * Register any other events for your application.
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,56);function S(B,_){const n=i("ExternalLinkIcon");return r(),c("div",null,[l,a("div",u,[a("ul",null,[a("li",null,[e("MariaDB 10.10+ ("),a("a",p,[e("Version Policy"),t(n)]),e(")")]),a("li",null,[e("MySQL 5.7+ ("),a("a",h,[e("Version Policy"),t(n)]),e(")")]),a("li",null,[e("PostgreSQL 11.0+ ("),a("a",m,[e("Version Policy"),t(n)]),e(")")]),b,a("li",null,[e("SQL Server 2017+ ("),a("a",g,[e("Version Policy"),t(n)]),e(")")])])]),v,a("p",null,[e("When using the "),f,e(" facade's "),y,e(" and "),k,e(" methods within transactions you must be careful to avoid statements that cause "),a("a",w,[e("implicit commits"),t(n)]),e(". These statements will cause the database engine to indirectly commit the entire transaction, leaving Laravel unaware of the database's transaction level. An example of such a statement is creating a database table:")]),q,a("p",null,[e("Please refer to the MySQL manual for "),a("a",x,[e("a list of all statements"),t(n)]),e(" that trigger implicit commits.")]),D])}const I=o(d,[["render",S],["__file","database.html.vue"]]);export{I as default};
