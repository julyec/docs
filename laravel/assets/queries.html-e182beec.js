import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{r,o as d,c as i,b as t,d as e,e as n,a}from"./app-06635a3b.js";const c={},u=a(`<h1 id="database-query-builder" tabindex="-1"><a class="header-anchor" href="#database-query-builder" aria-hidden="true">#</a> Database: Query Builder</h1><ul><li><a href="#introduction">Introduction</a></li><li><a href="#running-database-queries">Running Database Queries</a><ul><li><a href="#chunking-results">Chunking Results</a></li><li><a href="#streaming-results-lazily">Streaming Results Lazily</a></li><li><a href="#aggregates">Aggregates</a></li></ul></li><li><a href="#select-statements">Select Statements</a></li><li><a href="#raw-expressions">Raw Expressions</a></li><li><a href="#joins">Joins</a></li><li><a href="#unions">Unions</a></li><li><a href="#basic-where-clauses">Basic Where Clauses</a><ul><li><a href="#where-clauses">Where Clauses</a></li><li><a href="#or-where-clauses">Or Where Clauses</a></li><li><a href="#where-not-clauses">Where Not Clauses</a></li><li><a href="#json-where-clauses">JSON Where Clauses</a></li><li><a href="#additional-where-clauses">Additional Where Clauses</a></li><li><a href="#logical-grouping">Logical Grouping</a></li></ul></li><li><a href="#advanced-where-clauses">Advanced Where Clauses</a><ul><li><a href="#where-exists-clauses">Where Exists Clauses</a></li><li><a href="#subquery-where-clauses">Subquery Where Clauses</a></li><li><a href="#full-text-where-clauses">Full Text Where Clauses</a></li></ul></li><li><a href="#ordering-grouping-limit-and-offset">Ordering, Grouping, Limit &amp; Offset</a><ul><li><a href="#ordering">Ordering</a></li><li><a href="#grouping">Grouping</a></li><li><a href="#limit-and-offset">Limit &amp; Offset</a></li></ul></li><li><a href="#conditional-clauses">Conditional Clauses</a></li><li><a href="#insert-statements">Insert Statements</a><ul><li><a href="#upserts">Upserts</a></li></ul></li><li><a href="#update-statements">Update Statements</a><ul><li><a href="#updating-json-columns">Updating JSON Columns</a></li><li><a href="#increment-and-decrement">Increment &amp; Decrement</a></li></ul></li><li><a href="#delete-statements">Delete Statements</a></li><li><a href="#pessimistic-locking">Pessimistic Locking</a></li><li><a href="#debugging">Debugging</a></li></ul><p><a name="introduction"></a></p><h2 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h2><p>Laravel&#39;s database query builder provides a convenient, fluent interface to creating and running database queries. It can be used to perform most database operations in your application and works perfectly with all of Laravel&#39;s supported database systems.</p><p>The Laravel query builder uses PDO parameter binding to protect your application against SQL injection attacks. There is no need to clean or sanitize strings passed to the query builder as query bindings.</p><blockquote><p><strong>Warning</strong><br> PDO does not support binding column names. Therefore, you should never allow user input to dictate the column names referenced by your queries, including &quot;order by&quot; columns.</p></blockquote><p><a name="running-database-queries"></a></p><h2 id="running-database-queries" tabindex="-1"><a class="header-anchor" href="#running-database-queries" aria-hidden="true">#</a> Running Database Queries</h2><p><a name="retrieving-all-rows-from-a-table"></a></p><h4 id="retrieving-all-rows-from-a-table" tabindex="-1"><a class="header-anchor" href="#retrieving-all-rows-from-a-table" aria-hidden="true">#</a> Retrieving All Rows From A Table</h4><p>You may use the <code>table</code> method provided by the <code>DB</code> facade to begin a query. The <code>table</code> method returns a fluent query builder instance for the given table, allowing you to chain more constraints onto the query and then finally retrieve the results of the query using the <code>get</code> method:</p><pre><code>&lt;?php

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
        $users = DB::table(&#39;users&#39;)-&gt;get();

        return view(&#39;user.index&#39;, [&#39;users&#39; =&gt; $users]);
    }
}
</code></pre><p>The <code>get</code> method returns an <code>Illuminate\\Support\\Collection</code> instance containing the results of the query where each result is an instance of the PHP <code>stdClass</code> object. You may access each column&#39;s value by accessing the column as a property of the object:</p><pre><code>use Illuminate\\Support\\Facades\\DB;

$users = DB::table(&#39;users&#39;)-&gt;get();

foreach ($users as $user) {
    echo $user-&gt;name;
}
</code></pre><blockquote><p><strong>Note</strong><br> Laravel collections provide a variety of extremely powerful methods for mapping and reducing data. For more information on Laravel collections, check out the <a href="./collections">collection documentation</a>.</p></blockquote><p><a name="retrieving-a-single-row-column-from-a-table"></a></p><h4 id="retrieving-a-single-row-column-from-a-table" tabindex="-1"><a class="header-anchor" href="#retrieving-a-single-row-column-from-a-table" aria-hidden="true">#</a> Retrieving A Single Row / Column From A Table</h4><p>If you just need to retrieve a single row from a database table, you may use the <code>DB</code> facade&#39;s <code>first</code> method. This method will return a single <code>stdClass</code> object:</p><pre><code>$user = DB::table(&#39;users&#39;)-&gt;where(&#39;name&#39;, &#39;John&#39;)-&gt;first();

return $user-&gt;email;
</code></pre><p>If you don&#39;t need an entire row, you may extract a single value from a record using the <code>value</code> method. This method will return the value of the column directly:</p><pre><code>$email = DB::table(&#39;users&#39;)-&gt;where(&#39;name&#39;, &#39;John&#39;)-&gt;value(&#39;email&#39;);
</code></pre><p>To retrieve a single row by its <code>id</code> column value, use the <code>find</code> method:</p><pre><code>$user = DB::table(&#39;users&#39;)-&gt;find(3);
</code></pre><p><a name="retrieving-a-list-of-column-values"></a></p><h4 id="retrieving-a-list-of-column-values" tabindex="-1"><a class="header-anchor" href="#retrieving-a-list-of-column-values" aria-hidden="true">#</a> Retrieving A List Of Column Values</h4><p>If you would like to retrieve an <code>Illuminate\\Support\\Collection</code> instance containing the values of a single column, you may use the <code>pluck</code> method. In this example, we&#39;ll retrieve a collection of user titles:</p><pre><code>use Illuminate\\Support\\Facades\\DB;

$titles = DB::table(&#39;users&#39;)-&gt;pluck(&#39;title&#39;);

foreach ($titles as $title) {
    echo $title;
}
</code></pre><p>You may specify the column that the resulting collection should use as its keys by providing a second argument to the <code>pluck</code> method:</p><pre><code>$titles = DB::table(&#39;users&#39;)-&gt;pluck(&#39;title&#39;, &#39;name&#39;);

foreach ($titles as $name =&gt; $title) {
    echo $title;
}
</code></pre><p><a name="chunking-results"></a></p><h3 id="chunking-results" tabindex="-1"><a class="header-anchor" href="#chunking-results" aria-hidden="true">#</a> Chunking Results</h3><p>If you need to work with thousands of database records, consider using the <code>chunk</code> method provided by the <code>DB</code> facade. This method retrieves a small chunk of results at a time and feeds each chunk into a closure for processing. For example, let&#39;s retrieve the entire <code>users</code> table in chunks of 100 records at a time:</p><pre><code>use Illuminate\\Support\\Collection;
use Illuminate\\Support\\Facades\\DB;

DB::table(&#39;users&#39;)-&gt;orderBy(&#39;id&#39;)-&gt;chunk(100, function (Collection $users) {
    foreach ($users as $user) {
        // ...
    }
});
</code></pre><p>You may stop further chunks from being processed by returning <code>false</code> from the closure:</p><pre><code>DB::table(&#39;users&#39;)-&gt;orderBy(&#39;id&#39;)-&gt;chunk(100, function (Collection $users) {
    // Process the records...

    return false;
});
</code></pre><p>If you are updating database records while chunking results, your chunk results could change in unexpected ways. If you plan to update the retrieved records while chunking, it is always best to use the <code>chunkById</code> method instead. This method will automatically paginate the results based on the record&#39;s primary key:</p><pre><code>DB::table(&#39;users&#39;)-&gt;where(&#39;active&#39;, false)
    -&gt;chunkById(100, function (Collection $users) {
        foreach ($users as $user) {
            DB::table(&#39;users&#39;)
                -&gt;where(&#39;id&#39;, $user-&gt;id)
                -&gt;update([&#39;active&#39; =&gt; true]);
        }
    });
</code></pre><blockquote><p><strong>Warning</strong><br> When updating or deleting records inside the chunk callback, any changes to the primary key or foreign keys could affect the chunk query. This could potentially result in records not being included in the chunked results.</p></blockquote><p><a name="streaming-results-lazily"></a></p><h3 id="streaming-results-lazily" tabindex="-1"><a class="header-anchor" href="#streaming-results-lazily" aria-hidden="true">#</a> Streaming Results Lazily</h3><p>The <code>lazy</code> method works similarly to <a href="#chunking-results">the <code>chunk</code> method</a> in the sense that it executes the query in chunks. However, instead of passing each chunk into a callback, the <code>lazy()</code> method returns a <a href="./collections#lazy-collections"><code>LazyCollection</code></a>, which lets you interact with the results as a single stream:</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Support<span class="token punctuation">\\</span>Facades<span class="token punctuation">\\</span>DB</span><span class="token punctuation">;</span>

<span class="token class-name static-context">DB</span><span class="token operator">::</span><span class="token function">table</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;users&#39;</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">orderBy</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;id&#39;</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">lazy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">each</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token keyword type-hint">object</span> <span class="token variable">$user</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Once again, if you plan to update the retrieved records while iterating over them, it is best to use the <code>lazyById</code> or <code>lazyByIdDesc</code> methods instead. These methods will automatically paginate the results based on the record&#39;s primary key:</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token class-name static-context">DB</span><span class="token operator">::</span><span class="token function">table</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;users&#39;</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">where</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;active&#39;</span><span class="token punctuation">,</span> <span class="token constant boolean">false</span><span class="token punctuation">)</span>
    <span class="token operator">-&gt;</span><span class="token function">lazyById</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">each</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token keyword type-hint">object</span> <span class="token variable">$user</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name static-context">DB</span><span class="token operator">::</span><span class="token function">table</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;users&#39;</span><span class="token punctuation">)</span>
            <span class="token operator">-&gt;</span><span class="token function">where</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;id&#39;</span><span class="token punctuation">,</span> <span class="token variable">$user</span><span class="token operator">-&gt;</span><span class="token property">id</span><span class="token punctuation">)</span>
            <span class="token operator">-&gt;</span><span class="token function">update</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;active&#39;</span> <span class="token operator">=&gt;</span> <span class="token constant boolean">true</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>Warning</strong><br> When updating or deleting records while iterating over them, any changes to the primary key or foreign keys could affect the chunk query. This could potentially result in records not being included in the results.</p></blockquote><p><a name="aggregates"></a></p><h3 id="aggregates" tabindex="-1"><a class="header-anchor" href="#aggregates" aria-hidden="true">#</a> Aggregates</h3><p>The query builder also provides a variety of methods for retrieving aggregate values like <code>count</code>, <code>max</code>, <code>min</code>, <code>avg</code>, and <code>sum</code>. You may call any of these methods after constructing your query:</p><pre><code>use Illuminate\\Support\\Facades\\DB;

$users = DB::table(&#39;users&#39;)-&gt;count();

$price = DB::table(&#39;orders&#39;)-&gt;max(&#39;price&#39;);
</code></pre><p>Of course, you may combine these methods with other clauses to fine-tune how your aggregate value is calculated:</p><pre><code>$price = DB::table(&#39;orders&#39;)
                -&gt;where(&#39;finalized&#39;, 1)
                -&gt;avg(&#39;price&#39;);
</code></pre><p><a name="determining-if-records-exist"></a></p><h4 id="determining-if-records-exist" tabindex="-1"><a class="header-anchor" href="#determining-if-records-exist" aria-hidden="true">#</a> Determining If Records Exist</h4><p>Instead of using the <code>count</code> method to determine if any records exist that match your query&#39;s constraints, you may use the <code>exists</code> and <code>doesntExist</code> methods:</p><pre><code>if (DB::table(&#39;orders&#39;)-&gt;where(&#39;finalized&#39;, 1)-&gt;exists()) {
    // ...
}

if (DB::table(&#39;orders&#39;)-&gt;where(&#39;finalized&#39;, 1)-&gt;doesntExist()) {
    // ...
}
</code></pre><p><a name="select-statements"></a></p><h2 id="select-statements" tabindex="-1"><a class="header-anchor" href="#select-statements" aria-hidden="true">#</a> Select Statements</h2><p><a name="specifying-a-select-clause"></a></p><h4 id="specifying-a-select-clause" tabindex="-1"><a class="header-anchor" href="#specifying-a-select-clause" aria-hidden="true">#</a> Specifying A Select Clause</h4><p>You may not always want to select all columns from a database table. Using the <code>select</code> method, you can specify a custom &quot;select&quot; clause for the query:</p><pre><code>use Illuminate\\Support\\Facades\\DB;

$users = DB::table(&#39;users&#39;)
            -&gt;select(&#39;name&#39;, &#39;email as user_email&#39;)
            -&gt;get();
</code></pre><p>The <code>distinct</code> method allows you to force the query to return distinct results:</p><pre><code>$users = DB::table(&#39;users&#39;)-&gt;distinct()-&gt;get();
</code></pre><p>If you already have a query builder instance and you wish to add a column to its existing select clause, you may use the <code>addSelect</code> method:</p><pre><code>$query = DB::table(&#39;users&#39;)-&gt;select(&#39;name&#39;);

$users = $query-&gt;addSelect(&#39;age&#39;)-&gt;get();
</code></pre><p><a name="raw-expressions"></a></p><h2 id="raw-expressions" tabindex="-1"><a class="header-anchor" href="#raw-expressions" aria-hidden="true">#</a> Raw Expressions</h2><p>Sometimes you may need to insert an arbitrary string into a query. To create a raw string expression, you may use the <code>raw</code> method provided by the <code>DB</code> facade:</p><pre><code>$users = DB::table(&#39;users&#39;)
             -&gt;select(DB::raw(&#39;count(*) as user_count, status&#39;))
             -&gt;where(&#39;status&#39;, &#39;&lt;&gt;&#39;, 1)
             -&gt;groupBy(&#39;status&#39;)
             -&gt;get();
</code></pre><blockquote><p><strong>Warning</strong><br> Raw statements will be injected into the query as strings, so you should be extremely careful to avoid creating SQL injection vulnerabilities.</p></blockquote><p><a name="raw-methods"></a></p><h3 id="raw-methods" tabindex="-1"><a class="header-anchor" href="#raw-methods" aria-hidden="true">#</a> Raw Methods</h3><p>Instead of using the <code>DB::raw</code> method, you may also use the following methods to insert a raw expression into various parts of your query. <strong>Remember, Laravel can not guarantee that any query using raw expressions is protected against SQL injection vulnerabilities.</strong></p><p><a name="selectraw"></a></p><h4 id="selectraw" tabindex="-1"><a class="header-anchor" href="#selectraw" aria-hidden="true">#</a> <code>selectRaw</code></h4><p>The <code>selectRaw</code> method can be used in place of <code>addSelect(DB::raw(/* ... */))</code>. This method accepts an optional array of bindings as its second argument:</p><pre><code>$orders = DB::table(&#39;orders&#39;)
                -&gt;selectRaw(&#39;price * ? as price_with_tax&#39;, [1.0825])
                -&gt;get();
</code></pre><p><a name="whereraw-orwhereraw"></a></p><h4 id="whereraw-orwhereraw" tabindex="-1"><a class="header-anchor" href="#whereraw-orwhereraw" aria-hidden="true">#</a> <code>whereRaw / orWhereRaw</code></h4><p>The <code>whereRaw</code> and <code>orWhereRaw</code> methods can be used to inject a raw &quot;where&quot; clause into your query. These methods accept an optional array of bindings as their second argument:</p><pre><code>$orders = DB::table(&#39;orders&#39;)
                -&gt;whereRaw(&#39;price &gt; IF(state = &quot;TX&quot;, ?, 100)&#39;, [200])
                -&gt;get();
</code></pre><p><a name="havingraw-orhavingraw"></a></p><h4 id="havingraw-orhavingraw" tabindex="-1"><a class="header-anchor" href="#havingraw-orhavingraw" aria-hidden="true">#</a> <code>havingRaw / orHavingRaw</code></h4><p>The <code>havingRaw</code> and <code>orHavingRaw</code> methods may be used to provide a raw string as the value of the &quot;having&quot; clause. These methods accept an optional array of bindings as their second argument:</p><pre><code>$orders = DB::table(&#39;orders&#39;)
                -&gt;select(&#39;department&#39;, DB::raw(&#39;SUM(price) as total_sales&#39;))
                -&gt;groupBy(&#39;department&#39;)
                -&gt;havingRaw(&#39;SUM(price) &gt; ?&#39;, [2500])
                -&gt;get();
</code></pre><p><a name="orderbyraw"></a></p><h4 id="orderbyraw" tabindex="-1"><a class="header-anchor" href="#orderbyraw" aria-hidden="true">#</a> <code>orderByRaw</code></h4><p>The <code>orderByRaw</code> method may be used to provide a raw string as the value of the &quot;order by&quot; clause:</p><pre><code>$orders = DB::table(&#39;orders&#39;)
                -&gt;orderByRaw(&#39;updated_at - created_at DESC&#39;)
                -&gt;get();
</code></pre><p><a name="groupbyraw"></a></p><h3 id="groupbyraw" tabindex="-1"><a class="header-anchor" href="#groupbyraw" aria-hidden="true">#</a> <code>groupByRaw</code></h3><p>The <code>groupByRaw</code> method may be used to provide a raw string as the value of the <code>group by</code> clause:</p><pre><code>$orders = DB::table(&#39;orders&#39;)
                -&gt;select(&#39;city&#39;, &#39;state&#39;)
                -&gt;groupByRaw(&#39;city, state&#39;)
                -&gt;get();
</code></pre><p><a name="joins"></a></p><h2 id="joins" tabindex="-1"><a class="header-anchor" href="#joins" aria-hidden="true">#</a> Joins</h2><p><a name="inner-join-clause"></a></p><h4 id="inner-join-clause" tabindex="-1"><a class="header-anchor" href="#inner-join-clause" aria-hidden="true">#</a> Inner Join Clause</h4><p>The query builder may also be used to add join clauses to your queries. To perform a basic &quot;inner join&quot;, you may use the <code>join</code> method on a query builder instance. The first argument passed to the <code>join</code> method is the name of the table you need to join to, while the remaining arguments specify the column constraints for the join. You may even join multiple tables in a single query:</p><pre><code>use Illuminate\\Support\\Facades\\DB;

$users = DB::table(&#39;users&#39;)
            -&gt;join(&#39;contacts&#39;, &#39;users.id&#39;, &#39;=&#39;, &#39;contacts.user_id&#39;)
            -&gt;join(&#39;orders&#39;, &#39;users.id&#39;, &#39;=&#39;, &#39;orders.user_id&#39;)
            -&gt;select(&#39;users.*&#39;, &#39;contacts.phone&#39;, &#39;orders.price&#39;)
            -&gt;get();
</code></pre><p><a name="left-join-right-join-clause"></a></p><h4 id="left-join-right-join-clause" tabindex="-1"><a class="header-anchor" href="#left-join-right-join-clause" aria-hidden="true">#</a> Left Join / Right Join Clause</h4><p>If you would like to perform a &quot;left join&quot; or &quot;right join&quot; instead of an &quot;inner join&quot;, use the <code>leftJoin</code> or <code>rightJoin</code> methods. These methods have the same signature as the <code>join</code> method:</p><pre><code>$users = DB::table(&#39;users&#39;)
            -&gt;leftJoin(&#39;posts&#39;, &#39;users.id&#39;, &#39;=&#39;, &#39;posts.user_id&#39;)
            -&gt;get();

$users = DB::table(&#39;users&#39;)
            -&gt;rightJoin(&#39;posts&#39;, &#39;users.id&#39;, &#39;=&#39;, &#39;posts.user_id&#39;)
            -&gt;get();
</code></pre><p><a name="cross-join-clause"></a></p><h4 id="cross-join-clause" tabindex="-1"><a class="header-anchor" href="#cross-join-clause" aria-hidden="true">#</a> Cross Join Clause</h4><p>You may use the <code>crossJoin</code> method to perform a &quot;cross join&quot;. Cross joins generate a cartesian product between the first table and the joined table:</p><pre><code>$sizes = DB::table(&#39;sizes&#39;)
            -&gt;crossJoin(&#39;colors&#39;)
            -&gt;get();
</code></pre><p><a name="advanced-join-clauses"></a></p><h4 id="advanced-join-clauses" tabindex="-1"><a class="header-anchor" href="#advanced-join-clauses" aria-hidden="true">#</a> Advanced Join Clauses</h4><p>You may also specify more advanced join clauses. To get started, pass a closure as the second argument to the <code>join</code> method. The closure will receive a <code>Illuminate\\Database\\Query\\JoinClause</code> instance which allows you to specify constraints on the &quot;join&quot; clause:</p><pre><code>DB::table(&#39;users&#39;)
        -&gt;join(&#39;contacts&#39;, function (JoinClause $join) {
            $join-&gt;on(&#39;users.id&#39;, &#39;=&#39;, &#39;contacts.user_id&#39;)-&gt;orOn(/* ... */);
        })
        -&gt;get();
</code></pre><p>If you would like to use a &quot;where&quot; clause on your joins, you may use the <code>where</code> and <code>orWhere</code> methods provided by the <code>JoinClause</code> instance. Instead of comparing two columns, these methods will compare the column against a value:</p><pre><code>DB::table(&#39;users&#39;)
        -&gt;join(&#39;contacts&#39;, function (JoinClause $join) {
            $join-&gt;on(&#39;users.id&#39;, &#39;=&#39;, &#39;contacts.user_id&#39;)
                 -&gt;where(&#39;contacts.user_id&#39;, &#39;&gt;&#39;, 5);
        })
        -&gt;get();
</code></pre><p><a name="subquery-joins"></a></p><h4 id="subquery-joins" tabindex="-1"><a class="header-anchor" href="#subquery-joins" aria-hidden="true">#</a> Subquery Joins</h4><p>You may use the <code>joinSub</code>, <code>leftJoinSub</code>, and <code>rightJoinSub</code> methods to join a query to a subquery. Each of these methods receives three arguments: the subquery, its table alias, and a closure that defines the related columns. In this example, we will retrieve a collection of users where each user record also contains the <code>created_at</code> timestamp of the user&#39;s most recently published blog post:</p><pre><code>$latestPosts = DB::table(&#39;posts&#39;)
                   -&gt;select(&#39;user_id&#39;, DB::raw(&#39;MAX(created_at) as last_post_created_at&#39;))
                   -&gt;where(&#39;is_published&#39;, true)
                   -&gt;groupBy(&#39;user_id&#39;);

$users = DB::table(&#39;users&#39;)
        -&gt;joinSub($latestPosts, &#39;latest_posts&#39;, function (JoinClause $join) {
            $join-&gt;on(&#39;users.id&#39;, &#39;=&#39;, &#39;latest_posts.user_id&#39;);
        })-&gt;get();
</code></pre><p><a name="unions"></a></p><h2 id="unions" tabindex="-1"><a class="header-anchor" href="#unions" aria-hidden="true">#</a> Unions</h2><p>The query builder also provides a convenient method to &quot;union&quot; two or more queries together. For example, you may create an initial query and use the <code>union</code> method to union it with more queries:</p><pre><code>use Illuminate\\Support\\Facades\\DB;

$first = DB::table(&#39;users&#39;)
            -&gt;whereNull(&#39;first_name&#39;);

$users = DB::table(&#39;users&#39;)
            -&gt;whereNull(&#39;last_name&#39;)
            -&gt;union($first)
            -&gt;get();
</code></pre><p>In addition to the <code>union</code> method, the query builder provides a <code>unionAll</code> method. Queries that are combined using the <code>unionAll</code> method will not have their duplicate results removed. The <code>unionAll</code> method has the same method signature as the <code>union</code> method.</p><p><a name="basic-where-clauses"></a></p><h2 id="basic-where-clauses" tabindex="-1"><a class="header-anchor" href="#basic-where-clauses" aria-hidden="true">#</a> Basic Where Clauses</h2><p><a name="where-clauses"></a></p><h3 id="where-clauses" tabindex="-1"><a class="header-anchor" href="#where-clauses" aria-hidden="true">#</a> Where Clauses</h3><p>You may use the query builder&#39;s <code>where</code> method to add &quot;where&quot; clauses to the query. The most basic call to the <code>where</code> method requires three arguments. The first argument is the name of the column. The second argument is an operator, which can be any of the database&#39;s supported operators. The third argument is the value to compare against the column&#39;s value.</p><p>For example, the following query retrieves users where the value of the <code>votes</code> column is equal to <code>100</code> and the value of the <code>age</code> column is greater than <code>35</code>:</p><pre><code>$users = DB::table(&#39;users&#39;)
                -&gt;where(&#39;votes&#39;, &#39;=&#39;, 100)
                -&gt;where(&#39;age&#39;, &#39;&gt;&#39;, 35)
                -&gt;get();
</code></pre><p>For convenience, if you want to verify that a column is <code>=</code> to a given value, you may pass the value as the second argument to the <code>where</code> method. Laravel will assume you would like to use the <code>=</code> operator:</p><pre><code>$users = DB::table(&#39;users&#39;)-&gt;where(&#39;votes&#39;, 100)-&gt;get();
</code></pre><p>As previously mentioned, you may use any operator that is supported by your database system:</p><pre><code>$users = DB::table(&#39;users&#39;)
                -&gt;where(&#39;votes&#39;, &#39;&gt;=&#39;, 100)
                -&gt;get();

$users = DB::table(&#39;users&#39;)
                -&gt;where(&#39;votes&#39;, &#39;&lt;&gt;&#39;, 100)
                -&gt;get();

$users = DB::table(&#39;users&#39;)
                -&gt;where(&#39;name&#39;, &#39;like&#39;, &#39;T%&#39;)
                -&gt;get();
</code></pre><p>You may also pass an array of conditions to the <code>where</code> function. Each element of the array should be an array containing the three arguments typically passed to the <code>where</code> method:</p><pre><code>$users = DB::table(&#39;users&#39;)-&gt;where([
    [&#39;status&#39;, &#39;=&#39;, &#39;1&#39;],
    [&#39;subscribed&#39;, &#39;&lt;&gt;&#39;, &#39;1&#39;],
])-&gt;get();
</code></pre><blockquote><p><strong>Warning</strong><br> PDO does not support binding column names. Therefore, you should never allow user input to dictate the column names referenced by your queries, including &quot;order by&quot; columns.</p></blockquote><p><a name="or-where-clauses"></a></p><h3 id="or-where-clauses" tabindex="-1"><a class="header-anchor" href="#or-where-clauses" aria-hidden="true">#</a> Or Where Clauses</h3><p>When chaining together calls to the query builder&#39;s <code>where</code> method, the &quot;where&quot; clauses will be joined together using the <code>and</code> operator. However, you may use the <code>orWhere</code> method to join a clause to the query using the <code>or</code> operator. The <code>orWhere</code> method accepts the same arguments as the <code>where</code> method:</p><pre><code>$users = DB::table(&#39;users&#39;)
                    -&gt;where(&#39;votes&#39;, &#39;&gt;&#39;, 100)
                    -&gt;orWhere(&#39;name&#39;, &#39;John&#39;)
                    -&gt;get();
</code></pre><p>If you need to group an &quot;or&quot; condition within parentheses, you may pass a closure as the first argument to the <code>orWhere</code> method:</p><pre><code>$users = DB::table(&#39;users&#39;)
            -&gt;where(&#39;votes&#39;, &#39;&gt;&#39;, 100)
            -&gt;orWhere(function (Builder $query) {
                $query-&gt;where(&#39;name&#39;, &#39;Abigail&#39;)
                      -&gt;where(&#39;votes&#39;, &#39;&gt;&#39;, 50);
            })
            -&gt;get();
</code></pre><p>The example above will produce the following SQL:</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> users <span class="token keyword">where</span> votes <span class="token operator">&gt;</span> <span class="token number">100</span> <span class="token operator">or</span> <span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">&#39;Abigail&#39;</span> <span class="token operator">and</span> votes <span class="token operator">&gt;</span> <span class="token number">50</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p><strong>Warning</strong><br> You should always group <code>orWhere</code> calls in order to avoid unexpected behavior when global scopes are applied.</p></blockquote><p><a name="where-not-clauses"></a></p><h3 id="where-not-clauses" tabindex="-1"><a class="header-anchor" href="#where-not-clauses" aria-hidden="true">#</a> Where Not Clauses</h3><p>The <code>whereNot</code> and <code>orWhereNot</code> methods may be used to negate a given group of query constraints. For example, the following query excludes products that are on clearance or which have a price that is less than ten:</p><pre><code>$products = DB::table(&#39;products&#39;)
                -&gt;whereNot(function (Builder $query) {
                    $query-&gt;where(&#39;clearance&#39;, true)
                          -&gt;orWhere(&#39;price&#39;, &#39;&lt;&#39;, 10);
                })
                -&gt;get();
</code></pre><p><a name="json-where-clauses"></a></p><h3 id="json-where-clauses" tabindex="-1"><a class="header-anchor" href="#json-where-clauses" aria-hidden="true">#</a> JSON Where Clauses</h3>`,152),l={href:"https://www.sqlite.org/json1.html",target:"_blank",rel:"noopener noreferrer"},h=t("code",null,"->",-1),p=a(`<pre><code>$users = DB::table(&#39;users&#39;)
                -&gt;where(&#39;preferences-&gt;dining-&gt;meal&#39;, &#39;salad&#39;)
                -&gt;get();
</code></pre><p>You may use <code>whereJsonContains</code> to query JSON arrays. This feature is not supported by SQLite database versions less than 3.38.0:</p><pre><code>$users = DB::table(&#39;users&#39;)
                -&gt;whereJsonContains(&#39;options-&gt;languages&#39;, &#39;en&#39;)
                -&gt;get();
</code></pre><p>If your application uses the MySQL or PostgreSQL databases, you may pass an array of values to the <code>whereJsonContains</code> method:</p><pre><code>$users = DB::table(&#39;users&#39;)
                -&gt;whereJsonContains(&#39;options-&gt;languages&#39;, [&#39;en&#39;, &#39;de&#39;])
                -&gt;get();
</code></pre><p>You may use <code>whereJsonLength</code> method to query JSON arrays by their length:</p><pre><code>$users = DB::table(&#39;users&#39;)
                -&gt;whereJsonLength(&#39;options-&gt;languages&#39;, 0)
                -&gt;get();

$users = DB::table(&#39;users&#39;)
                -&gt;whereJsonLength(&#39;options-&gt;languages&#39;, &#39;&gt;&#39;, 1)
                -&gt;get();
</code></pre><p><a name="additional-where-clauses"></a></p><h3 id="additional-where-clauses" tabindex="-1"><a class="header-anchor" href="#additional-where-clauses" aria-hidden="true">#</a> Additional Where Clauses</h3><p><strong>whereBetween / orWhereBetween</strong></p><p>The <code>whereBetween</code> method verifies that a column&#39;s value is between two values:</p><pre><code>$users = DB::table(&#39;users&#39;)
           -&gt;whereBetween(&#39;votes&#39;, [1, 100])
           -&gt;get();
</code></pre><p><strong>whereNotBetween / orWhereNotBetween</strong></p><p>The <code>whereNotBetween</code> method verifies that a column&#39;s value lies outside of two values:</p><pre><code>$users = DB::table(&#39;users&#39;)
                    -&gt;whereNotBetween(&#39;votes&#39;, [1, 100])
                    -&gt;get();
</code></pre><p><strong>whereBetweenColumns / whereNotBetweenColumns / orWhereBetweenColumns / orWhereNotBetweenColumns</strong></p><p>The <code>whereBetweenColumns</code> method verifies that a column&#39;s value is between the two values of two columns in the same table row:</p><pre><code>$patients = DB::table(&#39;patients&#39;)
                       -&gt;whereBetweenColumns(&#39;weight&#39;, [&#39;minimum_allowed_weight&#39;, &#39;maximum_allowed_weight&#39;])
                       -&gt;get();
</code></pre><p>The <code>whereNotBetweenColumns</code> method verifies that a column&#39;s value lies outside the two values of two columns in the same table row:</p><pre><code>$patients = DB::table(&#39;patients&#39;)
                       -&gt;whereNotBetweenColumns(&#39;weight&#39;, [&#39;minimum_allowed_weight&#39;, &#39;maximum_allowed_weight&#39;])
                       -&gt;get();
</code></pre><p><strong>whereIn / whereNotIn / orWhereIn / orWhereNotIn</strong></p><p>The <code>whereIn</code> method verifies that a given column&#39;s value is contained within the given array:</p><pre><code>$users = DB::table(&#39;users&#39;)
                    -&gt;whereIn(&#39;id&#39;, [1, 2, 3])
                    -&gt;get();
</code></pre><p>The <code>whereNotIn</code> method verifies that the given column&#39;s value is not contained in the given array:</p><pre><code>$users = DB::table(&#39;users&#39;)
                    -&gt;whereNotIn(&#39;id&#39;, [1, 2, 3])
                    -&gt;get();
</code></pre><p>You may also provide a query object as the <code>whereIn</code> method&#39;s second argument:</p><pre><code>$activeUsers = DB::table(&#39;users&#39;)-&gt;select(&#39;id&#39;)-&gt;where(&#39;is_active&#39;, 1);

$users = DB::table(&#39;comments&#39;)
                    -&gt;whereIn(&#39;user_id&#39;, $activeUsers)
                    -&gt;get();
</code></pre><p>The example above will produce the following SQL:</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> comments <span class="token keyword">where</span> user_id <span class="token operator">in</span> <span class="token punctuation">(</span>
    <span class="token keyword">select</span> id
    <span class="token keyword">from</span> users
    <span class="token keyword">where</span> is_active <span class="token operator">=</span> <span class="token number">1</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>Warning</strong><br> If you are adding a large array of integer bindings to your query, the <code>whereIntegerInRaw</code> or <code>whereIntegerNotInRaw</code> methods may be used to greatly reduce your memory usage.</p></blockquote><p><strong>whereNull / whereNotNull / orWhereNull / orWhereNotNull</strong></p><p>The <code>whereNull</code> method verifies that the value of the given column is <code>NULL</code>:</p><pre><code>$users = DB::table(&#39;users&#39;)
                -&gt;whereNull(&#39;updated_at&#39;)
                -&gt;get();
</code></pre><p>The <code>whereNotNull</code> method verifies that the column&#39;s value is not <code>NULL</code>:</p><pre><code>$users = DB::table(&#39;users&#39;)
                -&gt;whereNotNull(&#39;updated_at&#39;)
                -&gt;get();
</code></pre><p><strong>whereDate / whereMonth / whereDay / whereYear / whereTime</strong></p><p>The <code>whereDate</code> method may be used to compare a column&#39;s value against a date:</p><pre><code>$users = DB::table(&#39;users&#39;)
                -&gt;whereDate(&#39;created_at&#39;, &#39;2016-12-31&#39;)
                -&gt;get();
</code></pre><p>The <code>whereMonth</code> method may be used to compare a column&#39;s value against a specific month:</p><pre><code>$users = DB::table(&#39;users&#39;)
                -&gt;whereMonth(&#39;created_at&#39;, &#39;12&#39;)
                -&gt;get();
</code></pre><p>The <code>whereDay</code> method may be used to compare a column&#39;s value against a specific day of the month:</p><pre><code>$users = DB::table(&#39;users&#39;)
                -&gt;whereDay(&#39;created_at&#39;, &#39;31&#39;)
                -&gt;get();
</code></pre><p>The <code>whereYear</code> method may be used to compare a column&#39;s value against a specific year:</p><pre><code>$users = DB::table(&#39;users&#39;)
                -&gt;whereYear(&#39;created_at&#39;, &#39;2016&#39;)
                -&gt;get();
</code></pre><p>The <code>whereTime</code> method may be used to compare a column&#39;s value against a specific time:</p><pre><code>$users = DB::table(&#39;users&#39;)
                -&gt;whereTime(&#39;created_at&#39;, &#39;=&#39;, &#39;11:20:45&#39;)
                -&gt;get();
</code></pre><p><strong>whereColumn / orWhereColumn</strong></p><p>The <code>whereColumn</code> method may be used to verify that two columns are equal:</p><pre><code>$users = DB::table(&#39;users&#39;)
                -&gt;whereColumn(&#39;first_name&#39;, &#39;last_name&#39;)
                -&gt;get();
</code></pre><p>You may also pass a comparison operator to the <code>whereColumn</code> method:</p><pre><code>$users = DB::table(&#39;users&#39;)
                -&gt;whereColumn(&#39;updated_at&#39;, &#39;&gt;&#39;, &#39;created_at&#39;)
                -&gt;get();
</code></pre><p>You may also pass an array of column comparisons to the <code>whereColumn</code> method. These conditions will be joined using the <code>and</code> operator:</p><pre><code>$users = DB::table(&#39;users&#39;)
                -&gt;whereColumn([
                    [&#39;first_name&#39;, &#39;=&#39;, &#39;last_name&#39;],
                    [&#39;updated_at&#39;, &#39;&gt;&#39;, &#39;created_at&#39;],
                ])-&gt;get();
</code></pre><p><a name="logical-grouping"></a></p><h3 id="logical-grouping" tabindex="-1"><a class="header-anchor" href="#logical-grouping" aria-hidden="true">#</a> Logical Grouping</h3><p>Sometimes you may need to group several &quot;where&quot; clauses within parentheses in order to achieve your query&#39;s desired logical grouping. In fact, you should generally always group calls to the <code>orWhere</code> method in parentheses in order to avoid unexpected query behavior. To accomplish this, you may pass a closure to the <code>where</code> method:</p><pre><code>$users = DB::table(&#39;users&#39;)
           -&gt;where(&#39;name&#39;, &#39;=&#39;, &#39;John&#39;)
           -&gt;where(function (Builder $query) {
               $query-&gt;where(&#39;votes&#39;, &#39;&gt;&#39;, 100)
                     -&gt;orWhere(&#39;title&#39;, &#39;=&#39;, &#39;Admin&#39;);
           })
           -&gt;get();
</code></pre><p>As you can see, passing a closure into the <code>where</code> method instructs the query builder to begin a constraint group. The closure will receive a query builder instance which you can use to set the constraints that should be contained within the parenthesis group. The example above will produce the following SQL:</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> users <span class="token keyword">where</span> name <span class="token operator">=</span> <span class="token string">&#39;John&#39;</span> <span class="token operator">and</span> <span class="token punctuation">(</span>votes <span class="token operator">&gt;</span> <span class="token number">100</span> <span class="token operator">or</span> title <span class="token operator">=</span> <span class="token string">&#39;Admin&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p><strong>Warning</strong><br> You should always group <code>orWhere</code> calls in order to avoid unexpected behavior when global scopes are applied.</p></blockquote><p><a name="advanced-where-clauses"></a></p><h3 id="advanced-where-clauses" tabindex="-1"><a class="header-anchor" href="#advanced-where-clauses" aria-hidden="true">#</a> Advanced Where Clauses</h3><p><a name="where-exists-clauses"></a></p><h3 id="where-exists-clauses" tabindex="-1"><a class="header-anchor" href="#where-exists-clauses" aria-hidden="true">#</a> Where Exists Clauses</h3><p>The <code>whereExists</code> method allows you to write &quot;where exists&quot; SQL clauses. The <code>whereExists</code> method accepts a closure which will receive a query builder instance, allowing you to define the query that should be placed inside of the &quot;exists&quot; clause:</p><pre><code>$users = DB::table(&#39;users&#39;)
           -&gt;whereExists(function (Builder $query) {
               $query-&gt;select(DB::raw(1))
                     -&gt;from(&#39;orders&#39;)
                     -&gt;whereColumn(&#39;orders.user_id&#39;, &#39;users.id&#39;);
           })
           -&gt;get();
</code></pre><p>Alternatively, you may provide a query object to the <code>whereExists</code> method instead of a closure:</p><pre><code>$orders = DB::table(&#39;orders&#39;)
                -&gt;select(DB::raw(1))
                -&gt;whereColumn(&#39;orders.user_id&#39;, &#39;users.id&#39;);

$users = DB::table(&#39;users&#39;)
                    -&gt;whereExists($orders)
                    -&gt;get();
</code></pre><p>Both of the examples above will produce the following SQL:</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> users
<span class="token keyword">where</span> <span class="token keyword">exists</span> <span class="token punctuation">(</span>
    <span class="token keyword">select</span> <span class="token number">1</span>
    <span class="token keyword">from</span> orders
    <span class="token keyword">where</span> orders<span class="token punctuation">.</span>user_id <span class="token operator">=</span> users<span class="token punctuation">.</span>id
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="subquery-where-clauses"></a></p><h3 id="subquery-where-clauses" tabindex="-1"><a class="header-anchor" href="#subquery-where-clauses" aria-hidden="true">#</a> Subquery Where Clauses</h3><p>Sometimes you may need to construct a &quot;where&quot; clause that compares the results of a subquery to a given value. You may accomplish this by passing a closure and a value to the <code>where</code> method. For example, the following query will retrieve all users who have a recent &quot;membership&quot; of a given type;</p><pre><code>use App\\Models\\User;
use Illuminate\\Database\\Query\\Builder;

$users = User::where(function (Builder $query) {
    $query-&gt;select(&#39;type&#39;)
        -&gt;from(&#39;membership&#39;)
        -&gt;whereColumn(&#39;membership.user_id&#39;, &#39;users.id&#39;)
        -&gt;orderByDesc(&#39;membership.start_date&#39;)
        -&gt;limit(1);
}, &#39;Pro&#39;)-&gt;get();
</code></pre><p>Or, you may need to construct a &quot;where&quot; clause that compares a column to the results of a subquery. You may accomplish this by passing a column, operator, and closure to the <code>where</code> method. For example, the following query will retrieve all income records where the amount is less than average;</p><pre><code>use App\\Models\\Income;
use Illuminate\\Database\\Query\\Builder;

$incomes = Income::where(&#39;amount&#39;, &#39;&lt;&#39;, function (Builder $query) {
    $query-&gt;selectRaw(&#39;avg(i.amount)&#39;)-&gt;from(&#39;incomes as i&#39;);
})-&gt;get();
</code></pre><p><a name="full-text-where-clauses"></a></p><h3 id="full-text-where-clauses" tabindex="-1"><a class="header-anchor" href="#full-text-where-clauses" aria-hidden="true">#</a> Full Text Where Clauses</h3><blockquote><p><strong>Warning</strong><br> Full text where clauses are currently supported by MySQL and PostgreSQL.</p></blockquote><p>The <code>whereFullText</code> and <code>orWhereFullText</code> methods may be used to add full text &quot;where&quot; clauses to a query for columns that have <a href="./migrations#available-index-types">full text indexes</a>. These methods will be transformed into the appropriate SQL for the underlying database system by Laravel. For example, a <code>MATCH AGAINST</code> clause will be generated for applications utilizing MySQL:</p><pre><code>$users = DB::table(&#39;users&#39;)
           -&gt;whereFullText(&#39;bio&#39;, &#39;web developer&#39;)
           -&gt;get();
</code></pre><p><a name="ordering-grouping-limit-and-offset"></a></p><h2 id="ordering-grouping-limit-offset" tabindex="-1"><a class="header-anchor" href="#ordering-grouping-limit-offset" aria-hidden="true">#</a> Ordering, Grouping, Limit &amp; Offset</h2><p><a name="ordering"></a></p><h3 id="ordering" tabindex="-1"><a class="header-anchor" href="#ordering" aria-hidden="true">#</a> Ordering</h3><p><a name="orderby"></a></p><h4 id="the-orderby-method" tabindex="-1"><a class="header-anchor" href="#the-orderby-method" aria-hidden="true">#</a> The <code>orderBy</code> Method</h4><p>The <code>orderBy</code> method allows you to sort the results of the query by a given column. The first argument accepted by the <code>orderBy</code> method should be the column you wish to sort by, while the second argument determines the direction of the sort and may be either <code>asc</code> or <code>desc</code>:</p><pre><code>$users = DB::table(&#39;users&#39;)
                -&gt;orderBy(&#39;name&#39;, &#39;desc&#39;)
                -&gt;get();
</code></pre><p>To sort by multiple columns, you may simply invoke <code>orderBy</code> as many times as necessary:</p><pre><code>$users = DB::table(&#39;users&#39;)
                -&gt;orderBy(&#39;name&#39;, &#39;desc&#39;)
                -&gt;orderBy(&#39;email&#39;, &#39;asc&#39;)
                -&gt;get();
</code></pre><p><a name="latest-oldest"></a></p><h4 id="the-latest-oldest-methods" tabindex="-1"><a class="header-anchor" href="#the-latest-oldest-methods" aria-hidden="true">#</a> The <code>latest</code> &amp; <code>oldest</code> Methods</h4><p>The <code>latest</code> and <code>oldest</code> methods allow you to easily order results by date. By default, the result will be ordered by the table&#39;s <code>created_at</code> column. Or, you may pass the column name that you wish to sort by:</p><pre><code>$user = DB::table(&#39;users&#39;)
                -&gt;latest()
                -&gt;first();
</code></pre><p><a name="random-ordering"></a></p><h4 id="random-ordering" tabindex="-1"><a class="header-anchor" href="#random-ordering" aria-hidden="true">#</a> Random Ordering</h4><p>The <code>inRandomOrder</code> method may be used to sort the query results randomly. For example, you may use this method to fetch a random user:</p><pre><code>$randomUser = DB::table(&#39;users&#39;)
                -&gt;inRandomOrder()
                -&gt;first();
</code></pre><p><a name="removing-existing-orderings"></a></p><h4 id="removing-existing-orderings" tabindex="-1"><a class="header-anchor" href="#removing-existing-orderings" aria-hidden="true">#</a> Removing Existing Orderings</h4><p>The <code>reorder</code> method removes all of the &quot;order by&quot; clauses that have previously been applied to the query:</p><pre><code>$query = DB::table(&#39;users&#39;)-&gt;orderBy(&#39;name&#39;);

$unorderedUsers = $query-&gt;reorder()-&gt;get();
</code></pre><p>You may pass a column and direction when calling the <code>reorder</code> method in order to remove all existing &quot;order by&quot; clauses and apply an entirely new order to the query:</p><pre><code>$query = DB::table(&#39;users&#39;)-&gt;orderBy(&#39;name&#39;);

$usersOrderedByEmail = $query-&gt;reorder(&#39;email&#39;, &#39;desc&#39;)-&gt;get();
</code></pre><p><a name="grouping"></a></p><h3 id="grouping" tabindex="-1"><a class="header-anchor" href="#grouping" aria-hidden="true">#</a> Grouping</h3><p><a name="groupby-having"></a></p><h4 id="the-groupby-having-methods" tabindex="-1"><a class="header-anchor" href="#the-groupby-having-methods" aria-hidden="true">#</a> The <code>groupBy</code> &amp; <code>having</code> Methods</h4><p>As you might expect, the <code>groupBy</code> and <code>having</code> methods may be used to group the query results. The <code>having</code> method&#39;s signature is similar to that of the <code>where</code> method:</p><pre><code>$users = DB::table(&#39;users&#39;)
                -&gt;groupBy(&#39;account_id&#39;)
                -&gt;having(&#39;account_id&#39;, &#39;&gt;&#39;, 100)
                -&gt;get();
</code></pre><p>You can use the <code>havingBetween</code> method to filter the results within a given range:</p><pre><code>$report = DB::table(&#39;orders&#39;)
                -&gt;selectRaw(&#39;count(id) as number_of_orders, customer_id&#39;)
                -&gt;groupBy(&#39;customer_id&#39;)
                -&gt;havingBetween(&#39;number_of_orders&#39;, [5, 15])
                -&gt;get();
</code></pre><p>You may pass multiple arguments to the <code>groupBy</code> method to group by multiple columns:</p><pre><code>$users = DB::table(&#39;users&#39;)
                -&gt;groupBy(&#39;first_name&#39;, &#39;status&#39;)
                -&gt;having(&#39;account_id&#39;, &#39;&gt;&#39;, 100)
                -&gt;get();
</code></pre><p>To build more advanced <code>having</code> statements, see the <a href="#raw-methods"><code>havingRaw</code></a> method.</p><p><a name="limit-and-offset"></a></p><h3 id="limit-offset" tabindex="-1"><a class="header-anchor" href="#limit-offset" aria-hidden="true">#</a> Limit &amp; Offset</h3><p><a name="skip-take"></a></p><h4 id="the-skip-take-methods" tabindex="-1"><a class="header-anchor" href="#the-skip-take-methods" aria-hidden="true">#</a> The <code>skip</code> &amp; <code>take</code> Methods</h4><p>You may use the <code>skip</code> and <code>take</code> methods to limit the number of results returned from the query or to skip a given number of results in the query:</p><pre><code>$users = DB::table(&#39;users&#39;)-&gt;skip(10)-&gt;take(5)-&gt;get();
</code></pre><p>Alternatively, you may use the <code>limit</code> and <code>offset</code> methods. These methods are functionally equivalent to the <code>take</code> and <code>skip</code> methods, respectively:</p><pre><code>$users = DB::table(&#39;users&#39;)
                -&gt;offset(10)
                -&gt;limit(5)
                -&gt;get();
</code></pre><p><a name="conditional-clauses"></a></p><h2 id="conditional-clauses" tabindex="-1"><a class="header-anchor" href="#conditional-clauses" aria-hidden="true">#</a> Conditional Clauses</h2><p>Sometimes you may want certain query clauses to apply to a query based on another condition. For instance, you may only want to apply a <code>where</code> statement if a given input value is present on the incoming HTTP request. You may accomplish this using the <code>when</code> method:</p><pre><code>$role = $request-&gt;string(&#39;role&#39;);

$users = DB::table(&#39;users&#39;)
                -&gt;when($role, function (Builder $query, string $role) {
                    $query-&gt;where(&#39;role_id&#39;, $role);
                })
                -&gt;get();
</code></pre><p>The <code>when</code> method only executes the given closure when the first argument is <code>true</code>. If the first argument is <code>false</code>, the closure will not be executed. So, in the example above, the closure given to the <code>when</code> method will only be invoked if the <code>role</code> field is present on the incoming request and evaluates to <code>true</code>.</p><p>You may pass another closure as the third argument to the <code>when</code> method. This closure will only execute if the first argument evaluates as <code>false</code>. To illustrate how this feature may be used, we will use it to configure the default ordering of a query:</p><pre><code>$sortByVotes = $request-&gt;boolean(&#39;sort_by_votes&#39;);

$users = DB::table(&#39;users&#39;)
                -&gt;when($sortByVotes, function (Builder $query, bool $sortByVotes) {
                    $query-&gt;orderBy(&#39;votes&#39;);
                }, function (Builder $query) {
                    $query-&gt;orderBy(&#39;name&#39;);
                })
                -&gt;get();
</code></pre><p><a name="insert-statements"></a></p><h2 id="insert-statements" tabindex="-1"><a class="header-anchor" href="#insert-statements" aria-hidden="true">#</a> Insert Statements</h2><p>The query builder also provides an <code>insert</code> method that may be used to insert records into the database table. The <code>insert</code> method accepts an array of column names and values:</p><pre><code>DB::table(&#39;users&#39;)-&gt;insert([
    &#39;email&#39; =&gt; &#39;kayla@example.com&#39;,
    &#39;votes&#39; =&gt; 0
]);
</code></pre><p>You may insert several records at once by passing an array of arrays. Each array represents a record that should be inserted into the table:</p><pre><code>DB::table(&#39;users&#39;)-&gt;insert([
    [&#39;email&#39; =&gt; &#39;picard@example.com&#39;, &#39;votes&#39; =&gt; 0],
    [&#39;email&#39; =&gt; &#39;janeway@example.com&#39;, &#39;votes&#39; =&gt; 0],
]);
</code></pre>`,137),g=t("code",null,"insertOrIgnore",-1),m=t("code",null,"insertOrIgnore",-1),b={href:"https://dev.mysql.com/doc/refman/en/sql-mode.html#ignore-effect-on-execution",target:"_blank",rel:"noopener noreferrer"},y=a(`<pre><code>DB::table(&#39;users&#39;)-&gt;insertOrIgnore([
    [&#39;id&#39; =&gt; 1, &#39;email&#39; =&gt; &#39;sisko@example.com&#39;],
    [&#39;id&#39; =&gt; 2, &#39;email&#39; =&gt; &#39;archer@example.com&#39;],
]);
</code></pre><p>The <code>insertUsing</code> method will insert new records into the table while using a subquery to determine the data that should be inserted:</p><pre><code>DB::table(&#39;pruned_users&#39;)-&gt;insertUsing([
    &#39;id&#39;, &#39;name&#39;, &#39;email&#39;, &#39;email_verified_at&#39;
], DB::table(&#39;users&#39;)-&gt;select(
    &#39;id&#39;, &#39;name&#39;, &#39;email&#39;, &#39;email_verified_at&#39;
)-&gt;where(&#39;updated_at&#39;, &#39;&lt;=&#39;, now()-&gt;subMonth()));
</code></pre><p><a name="auto-incrementing-ids"></a></p><h4 id="auto-incrementing-ids" tabindex="-1"><a class="header-anchor" href="#auto-incrementing-ids" aria-hidden="true">#</a> Auto-Incrementing IDs</h4><p>If the table has an auto-incrementing id, use the <code>insertGetId</code> method to insert a record and then retrieve the ID:</p><pre><code>$id = DB::table(&#39;users&#39;)-&gt;insertGetId(
    [&#39;email&#39; =&gt; &#39;john@example.com&#39;, &#39;votes&#39; =&gt; 0]
);
</code></pre><blockquote><p><strong>Warning</strong><br> When using PostgreSQL the <code>insertGetId</code> method expects the auto-incrementing column to be named <code>id</code>. If you would like to retrieve the ID from a different &quot;sequence&quot;, you may pass the column name as the second parameter to the <code>insertGetId</code> method.</p></blockquote><p><a name="upserts"></a></p><h3 id="upserts" tabindex="-1"><a class="header-anchor" href="#upserts" aria-hidden="true">#</a> Upserts</h3><p>The <code>upsert</code> method will insert records that do not exist and update the records that already exist with new values that you may specify. The method&#39;s first argument consists of the values to insert or update, while the second argument lists the column(s) that uniquely identify records within the associated table. The method&#39;s third and final argument is an array of columns that should be updated if a matching record already exists in the database:</p><pre><code>DB::table(&#39;flights&#39;)-&gt;upsert(
    [
        [&#39;departure&#39; =&gt; &#39;Oakland&#39;, &#39;destination&#39; =&gt; &#39;San Diego&#39;, &#39;price&#39; =&gt; 99],
        [&#39;departure&#39; =&gt; &#39;Chicago&#39;, &#39;destination&#39; =&gt; &#39;New York&#39;, &#39;price&#39; =&gt; 150]
    ],
    [&#39;departure&#39;, &#39;destination&#39;],
    [&#39;price&#39;]
);
</code></pre><p>In the example above, Laravel will attempt to insert two records. If a record already exists with the same <code>departure</code> and <code>destination</code> column values, Laravel will update that record&#39;s <code>price</code> column.</p><blockquote><p><strong>Warning</strong><br> All databases except SQL Server require the columns in the second argument of the <code>upsert</code> method to have a &quot;primary&quot; or &quot;unique&quot; index. In addition, the MySQL database driver ignores the second argument of the <code>upsert</code> method and always uses the &quot;primary&quot; and &quot;unique&quot; indexes of the table to detect existing records.</p></blockquote><p><a name="update-statements"></a></p><h2 id="update-statements" tabindex="-1"><a class="header-anchor" href="#update-statements" aria-hidden="true">#</a> Update Statements</h2><p>In addition to inserting records into the database, the query builder can also update existing records using the <code>update</code> method. The <code>update</code> method, like the <code>insert</code> method, accepts an array of column and value pairs indicating the columns to be updated. The <code>update</code> method returns the number of affected rows. You may constrain the <code>update</code> query using <code>where</code> clauses:</p><pre><code>$affected = DB::table(&#39;users&#39;)
              -&gt;where(&#39;id&#39;, 1)
              -&gt;update([&#39;votes&#39; =&gt; 1]);
</code></pre><p><a name="update-or-insert"></a></p><h4 id="update-or-insert" tabindex="-1"><a class="header-anchor" href="#update-or-insert" aria-hidden="true">#</a> Update Or Insert</h4><p>Sometimes you may want to update an existing record in the database or create it if no matching record exists. In this scenario, the <code>updateOrInsert</code> method may be used. The <code>updateOrInsert</code> method accepts two arguments: an array of conditions by which to find the record, and an array of column and value pairs indicating the columns to be updated.</p><p>The <code>updateOrInsert</code> method will attempt to locate a matching database record using the first argument&#39;s column and value pairs. If the record exists, it will be updated with the values in the second argument. If the record can not be found, a new record will be inserted with the merged attributes of both arguments:</p><pre><code>DB::table(&#39;users&#39;)
    -&gt;updateOrInsert(
        [&#39;email&#39; =&gt; &#39;john@example.com&#39;, &#39;name&#39; =&gt; &#39;John&#39;],
        [&#39;votes&#39; =&gt; &#39;2&#39;]
    );
</code></pre><p><a name="updating-json-columns"></a></p><h3 id="updating-json-columns" tabindex="-1"><a class="header-anchor" href="#updating-json-columns" aria-hidden="true">#</a> Updating JSON Columns</h3><p>When updating a JSON column, you should use <code>-&gt;</code> syntax to update the appropriate key in the JSON object. This operation is supported on MySQL 5.7+ and PostgreSQL 9.5+:</p><pre><code>$affected = DB::table(&#39;users&#39;)
              -&gt;where(&#39;id&#39;, 1)
              -&gt;update([&#39;options-&gt;enabled&#39; =&gt; true]);
</code></pre><p><a name="increment-and-decrement"></a></p><h3 id="increment-decrement" tabindex="-1"><a class="header-anchor" href="#increment-decrement" aria-hidden="true">#</a> Increment &amp; Decrement</h3><p>The query builder also provides convenient methods for incrementing or decrementing the value of a given column. Both of these methods accept at least one argument: the column to modify. A second argument may be provided to specify the amount by which the column should be incremented or decremented:</p><pre><code>DB::table(&#39;users&#39;)-&gt;increment(&#39;votes&#39;);

DB::table(&#39;users&#39;)-&gt;increment(&#39;votes&#39;, 5);

DB::table(&#39;users&#39;)-&gt;decrement(&#39;votes&#39;);

DB::table(&#39;users&#39;)-&gt;decrement(&#39;votes&#39;, 5);
</code></pre><p>If needed, you may also specify additional columns to update during the increment or decrement operation:</p><pre><code>DB::table(&#39;users&#39;)-&gt;increment(&#39;votes&#39;, 1, [&#39;name&#39; =&gt; &#39;John&#39;]);
</code></pre><p>In addition, you may increment or decrement multiple columns at once using the <code>incrementEach</code> and <code>decrementEach</code> methods:</p><pre><code>DB::table(&#39;users&#39;)-&gt;incrementEach([
    &#39;votes&#39; =&gt; 5,
    &#39;balance&#39; =&gt; 100,
]);
</code></pre><p><a name="delete-statements"></a></p><h2 id="delete-statements" tabindex="-1"><a class="header-anchor" href="#delete-statements" aria-hidden="true">#</a> Delete Statements</h2><p>The query builder&#39;s <code>delete</code> method may be used to delete records from the table. The <code>delete</code> method returns the number of affected rows. You may constrain <code>delete</code> statements by adding &quot;where&quot; clauses before calling the <code>delete</code> method:</p><pre><code>$deleted = DB::table(&#39;users&#39;)-&gt;delete();

$deleted = DB::table(&#39;users&#39;)-&gt;where(&#39;votes&#39;, &#39;&gt;&#39;, 100)-&gt;delete();
</code></pre><p>If you wish to truncate an entire table, which will remove all records from the table and reset the auto-incrementing ID to zero, you may use the <code>truncate</code> method:</p><pre><code>DB::table(&#39;users&#39;)-&gt;truncate();
</code></pre><p><a name="table-truncation-and-postgresql"></a></p><h4 id="table-truncation-postgresql" tabindex="-1"><a class="header-anchor" href="#table-truncation-postgresql" aria-hidden="true">#</a> Table Truncation &amp; PostgreSQL</h4><p>When truncating a PostgreSQL database, the <code>CASCADE</code> behavior will be applied. This means that all foreign key related records in other tables will be deleted as well.</p><p><a name="pessimistic-locking"></a></p><h2 id="pessimistic-locking" tabindex="-1"><a class="header-anchor" href="#pessimistic-locking" aria-hidden="true">#</a> Pessimistic Locking</h2><p>The query builder also includes a few functions to help you achieve &quot;pessimistic locking&quot; when executing your <code>select</code> statements. To execute a statement with a &quot;shared lock&quot;, you may call the <code>sharedLock</code> method. A shared lock prevents the selected rows from being modified until your transaction is committed:</p><pre><code>DB::table(&#39;users&#39;)
        -&gt;where(&#39;votes&#39;, &#39;&gt;&#39;, 100)
        -&gt;sharedLock()
        -&gt;get();
</code></pre><p>Alternatively, you may use the <code>lockForUpdate</code> method. A &quot;for update&quot; lock prevents the selected records from being modified or from being selected with another shared lock:</p><pre><code>DB::table(&#39;users&#39;)
        -&gt;where(&#39;votes&#39;, &#39;&gt;&#39;, 100)
        -&gt;lockForUpdate()
        -&gt;get();
</code></pre><p><a name="debugging"></a></p><h2 id="debugging" tabindex="-1"><a class="header-anchor" href="#debugging" aria-hidden="true">#</a> Debugging</h2><p>You may use the <code>dd</code> and <code>dump</code> methods while building a query to dump the current query bindings and SQL. The <code>dd</code> method will display the debug information and then stop executing the request. The <code>dump</code> method will display the debug information but allow the request to continue executing:</p><pre><code>DB::table(&#39;users&#39;)-&gt;where(&#39;votes&#39;, &#39;&gt;&#39;, 100)-&gt;dd();

DB::table(&#39;users&#39;)-&gt;where(&#39;votes&#39;, &#39;&gt;&#39;, 100)-&gt;dump();
</code></pre><p>The <code>dumpRawSql</code> and <code>ddRawSql</code> methods may be invoked on a query to dump the query&#39;s SQL with all parameter bindings properly substituted:</p><pre><code>DB::table(&#39;users&#39;)-&gt;where(&#39;votes&#39;, &#39;&gt;&#39;, 100)-&gt;dumpRawSql();

DB::table(&#39;users&#39;)-&gt;where(&#39;votes&#39;, &#39;&gt;&#39;, 100)-&gt;ddRawSql();
</code></pre>`,56);function w(f,v){const s=r("ExternalLinkIcon");return d(),i("div",null,[u,t("p",null,[e("Laravel also supports querying JSON column types on databases that provide support for JSON column types. Currently, this includes MySQL 5.7+, PostgreSQL, SQL Server 2016, and SQLite 3.39.0 (with the "),t("a",l,[e("JSON1 extension"),n(s)]),e("). To query a JSON column, use the "),h,e(" operator:")]),p,t("p",null,[e("The "),g,e(" method will ignore errors while inserting records into the database. When using this method, you should be aware that duplicate record errors will be ignored and other types of errors may also be ignored depending on the database engine. For example, "),m,e(" will "),t("a",b,[e("bypass MySQL's strict mode"),n(s)]),e(":")]),y])}const B=o(c,[["render",w],["__file","queries.html.vue"]]);export{B as default};
