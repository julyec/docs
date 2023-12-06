import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as d,c,b as a,d as e,e as r,a as n}from"./app-06635a3b.js";const p={},i=n(`<h1 id="数据库-查询生成器" tabindex="-1"><a class="header-anchor" href="#数据库-查询生成器" aria-hidden="true">#</a> 数据库：查询生成器</h1><ul><li><a href="#introduction">介绍</a></li><li><a href="#running-database-queries">运行数据库查询</a></li><li><a href="#chunking-results">分块结果</a></li><li><a href="#streaming-results-lazily">延迟流式处理结果</a></li><li><a href="#aggregates">聚合</a></li><li><a href="#select-statements">Select 语句</a></li><li><a href="#raw-expressions">原始表达式</a></li><li><a href="#joins">Joins</a></li><li><a href="#unions">Unions</a></li><li><a href="#basic-where-clauses">基础 Where 语句</a></li><li><a href="#where-clauses">条件查询语句</a></li><li><a href="#or-where-clauses">Or Where 语句</a></li><li><a href="#where-not-clauses">Where Not 语句</a></li><li><a href="#json-where-clauses">JSON Where 语句</a></li><li><a href="#additional-where-clauses">附加 Where 语句</a></li><li><a href="#logical-grouping">逻辑分组</a></li><li><a href="#advanced-where-clauses">高级 Where 语句</a></li><li><a href="#where-exists-clauses">Where Exists 语句</a></li><li><a href="#subquery-where-clauses">子查询 Where 语句</a></li><li><a href="#full-text-where-clauses">全文 Where 子句</a></li><li><a href="#ordering-grouping-limit-and-offset">排序、分组、限制和偏移量</a></li><li><a href="#ordering">排序</a></li><li><a href="#grouping">分组</a></li><li><a href="#limit-and-offset">Limit（限制） &amp; Offset（偏移量）</a></li><li><a href="#conditional-clauses">条件语句</a></li><li><a href="#insert-statements">插入语句</a></li><li><a href="#upserts">更新插入</a></li><li><a href="#update-statements">更新语句</a></li><li><a href="#updating-json-columns">更新 JSON 列</a></li><li><a href="#increment-and-decrement">自增和自减</a></li><li><a href="#delete-statements">删除语句</a></li><li><a href="#pessimistic-locking">悲观锁</a></li><li><a href="#debugging">调试</a></li></ul><p><a name="introduction"></a></p><h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h2><p>Laravel 的数据库查询生成器提供了一种便捷、流畅的接口来创建和运行数据库查询。它可用于执行应用程序中的大多数数据库操作，并与 Laravel 支持的所有数据库系统完美配合使用。</p><p>Laravel 查询生成器使用 PDO 参数绑定来保护你的应用程序免受 SQL 注入攻击。无需清理或净化传递给查询生成器的字符串作为查询绑定。</p><blockquote><p><strong>警告</strong> PDO 不支持绑定列名。因此，你不应该允许用户输入来决定查询引用的列名，包括 「order by」 列名。</p></blockquote><p><a name="running-database-queries"></a></p><h2 id="运行数据库查询" tabindex="-1"><a class="header-anchor" href="#运行数据库查询" aria-hidden="true">#</a> 运行数据库查询</h2><p><a name="retrieving-all-rows-from-a-table"></a></p><h4 id="从表中检索所有行" tabindex="-1"><a class="header-anchor" href="#从表中检索所有行" aria-hidden="true">#</a> 从表中检索所有行</h4><p>你可以使用 <code>DB</code> facade 提供的 <code>table</code> 方法开始查询。table 方法为指定的表返回一个链式查询构造器实例，允许在查询上链接更多约束，最后使用 <code>get</code> 方法检索查询结果：</p><pre><code>&lt;?php

namespace App\\Http\\Controllers;

use App\\Http\\Controllers\\Controller;
use Illuminate\\Support\\Facades\\DB;
use Illuminate\\View\\View;

class UserController extends Controller
{
    /**
     * 展示应用程序所有用户的列表
     */
    public function index(): View
    {
        $users = DB::table(&#39;users&#39;)-&gt;get();

        return view(&#39;user.index&#39;, [&#39;users&#39; =&gt; $users]);
    }
}
</code></pre><p><code>get</code> 方法返回包含查询结果的 <code>Illuminate\\Support\\Collection</code> 实例，每个结果都是 PHP <code>stdClass</code> 实例。可以将列作为对象的属性来访问每列的值：</p><pre><code>use Illuminate\\Support\\Facades\\DB;

$users = DB::table(&#39;users&#39;)-&gt;get();

foreach ($users as $user) {
    echo $user-&gt;name;
}
</code></pre><blockquote><p><strong>技巧:</strong><br> Laravel 集合提供了各种及其强大的方法来映射和裁剪数据。有关 Laravel 集合的更多信息，请查看 <a href="./collections">集合文档</a>.</p></blockquote><p><a name="retrieving-a-single-row-column-from-a-table"></a></p><h4 id="从表中检索单行或单列" tabindex="-1"><a class="header-anchor" href="#从表中检索单行或单列" aria-hidden="true">#</a> 从表中检索单行或单列</h4><p>如果只需要从数据表中检索单行，可以使用 <code>DB</code> facade 中的 <code>first</code> 方法。 此方法将返回单个 <code>stdClass</code> 对象</p><pre><code>$user = DB::table(&#39;users&#39;)-&gt;where(&#39;name&#39;, &#39;John&#39;)-&gt;first();

return $user-&gt;email;
</code></pre><p>如果不想要整行，可以使用 <code>value</code> 方法从纪录中提取单个值。此方法将直接返回列的值：</p><pre><code>$email = DB::table(&#39;users&#39;)-&gt;where(&#39;name&#39;, &#39;John&#39;)-&gt;value(&#39;email&#39;);
</code></pre><p>如果要通过 <code>id</code> 字段值获取单行数据，可以使用 <code>find</code> 方法：</p><pre><code>$user = DB::table(&#39;users&#39;)-&gt;find(3);
</code></pre><p><a name="retrieving-a-list-of-column-values"></a></p><h4 id="获取某一列的值" tabindex="-1"><a class="header-anchor" href="#获取某一列的值" aria-hidden="true">#</a> 获取某一列的值</h4><p>如果要获取包含单列值的 <code>Illuminate\\Support\\Collection</code> 实例，则可以使用 <code>pluck</code> 方法。在下面的例子中，我们将获取角色表中标题的集合：</p><pre><code>use Illuminate\\Support\\Facades\\DB;

$titles = DB::table(&#39;users&#39;)-&gt;pluck(&#39;title&#39;);

foreach ($titles as $title) {
    echo $title;
}
</code></pre><p>你可以通过向 <code>pluck</code> 方法提供第二个参数来指定结果集中要作为键的列：</p><pre><code>$titles = DB::table(&#39;users&#39;)-&gt;pluck(&#39;title&#39;, &#39;name&#39;);

foreach ($titles as $name =&gt; $title) {
    echo $title;
}
</code></pre><p><a name="chunking-results"></a></p><h3 id="分块结果" tabindex="-1"><a class="header-anchor" href="#分块结果" aria-hidden="true">#</a> 分块结果</h3><p>如果需要处理成千上万的数据库记录，请考虑使用 <code>DB</code> 提供的 <code>chunk</code> 方法。这个方法一次检索一小块结果，并将每个块反馈到闭包函数中进行处理。例如，让我们以一次 100 条记录的块为单位检索整个 <code>users</code> 表：</p><pre><code>use Illuminate\\Support\\Collection;
use Illuminate\\Support\\Facades\\DB;

DB::table(&#39;users&#39;)-&gt;orderBy(&#39;id&#39;)-&gt;chunk(100, function (Collection $users) {
    foreach ($users as $user) {
        // ...
    }
});
</code></pre><p>你可以通过从闭包中返回 <code>false</code> 来停止处理其余的块:</p><pre><code>DB::table(&#39;users&#39;)-&gt;orderBy(&#39;id&#39;)-&gt;chunk(100, function (Collection $users) {
    // 处理分块...

    return false;
});
</code></pre><p>如果在对结果进行分块时更新数据库记录，那分块结果可能会以意想不到的方式更改。如果你打算在分块时更新检索到的记录，最好使用 <code>chunkById</code> 方法。此方法将根据记录的主键自动对结果进行分页:</p><pre><code>DB::table(&#39;users&#39;)-&gt;where(&#39;active&#39;, false)
    -&gt;chunkById(100, function (Collection $users) {
        foreach ($users as $user) {
            DB::table(&#39;users&#39;)
                -&gt;where(&#39;id&#39;, $user-&gt;id)
                -&gt;update([&#39;active&#39; =&gt; true]);
        }
    });
</code></pre><blockquote><p><strong>注意</strong><br> 当在更新或删除块回调中的记录时，对主键或外键的任何更改都可能影响块查询。这可能会导致记录未包含在分块结果中。</p></blockquote><p><a name="streaming-results-lazily"></a></p><h3 id="lazily-流式传输结果" tabindex="-1"><a class="header-anchor" href="#lazily-流式传输结果" aria-hidden="true">#</a> Lazily 流式传输结果</h3><p><code>lazy</code> 方法的工作方式类似于 <a href="#chunking-results"><code>chunk</code> 方法</a>，因为它以块的形式执行查询。但是，<code>lazy()</code> 方法不是将每个块传递给回调，而是返回一个 <a href="./collections#lazy-collections"><code>LazyCollection</code></a>，它可以让你与结果进行交互单个流：</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Support<span class="token punctuation">\\</span>Facades<span class="token punctuation">\\</span>DB</span><span class="token punctuation">;</span>

<span class="token class-name static-context">DB</span><span class="token operator">::</span><span class="token function">table</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;users&#39;</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">orderBy</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;id&#39;</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">lazy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">each</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token keyword type-hint">object</span> <span class="token variable">$user</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>再一次，如果你打算在迭代它们时更新检索到的记录，最好使用 <code>lazyById</code> 或 <code>lazyByIdDesc</code> 方法。 这些方法将根据记录的主键自动对结果进行分页：</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token class-name static-context">DB</span><span class="token operator">::</span><span class="token function">table</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;users&#39;</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">where</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;active&#39;</span><span class="token punctuation">,</span> <span class="token constant boolean">false</span><span class="token punctuation">)</span>
    <span class="token operator">-&gt;</span><span class="token function">lazyById</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">each</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token keyword type-hint">object</span> <span class="token variable">$user</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name static-context">DB</span><span class="token operator">::</span><span class="token function">table</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;users&#39;</span><span class="token punctuation">)</span>
            <span class="token operator">-&gt;</span><span class="token function">where</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;id&#39;</span><span class="token punctuation">,</span> <span class="token variable">$user</span><span class="token operator">-&gt;</span><span class="token property">id</span><span class="token punctuation">)</span>
            <span class="token operator">-&gt;</span><span class="token function">update</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;active&#39;</span> <span class="token operator">=&gt;</span> <span class="token constant boolean">true</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>注意</strong><br> 在迭代记录时更新或删除记录时，对主键或外键的任何更改都可能影响块查询。这可能会导致记录不包含在结果中。</p></blockquote><p><a name="aggregates"></a></p><h3 id="聚合函数" tabindex="-1"><a class="header-anchor" href="#聚合函数" aria-hidden="true">#</a> 聚合函数</h3><p>查询构建器还提供了多种检索聚合值的方法，例如 <code>count</code>， <code>max</code>， <code>min</code>，<code>avg</code>和 <code>sum</code>。你可以在构建查询后调用这些方法中的任何一个：</p><pre><code>use Illuminate\\Support\\Facades\\DB;

$users = DB::table(&#39;users&#39;)-&gt;count();

$price = DB::table(&#39;orders&#39;)-&gt;max(&#39;price&#39;);
</code></pre><p>当然，你可以将这些方法与其他子句结合起来，以优化计算聚合值的方式：</p><pre><code>$price = DB::table(&#39;orders&#39;)
                -&gt;where(&#39;finalized&#39;, 1)
                -&gt;avg(&#39;price&#39;);
</code></pre><p><a name="determining-if-records-exist"></a></p><h4 id="判断记录是否存在" tabindex="-1"><a class="header-anchor" href="#判断记录是否存在" aria-hidden="true">#</a> 判断记录是否存在</h4><p>除了通过 <code>count</code> 方法可以确定查询条件的结果是否存在之外，还可以使用 <code>exists</code> 和 <code>doesntExist</code> 方法：</p><pre><code>if (DB::table(&#39;orders&#39;)-&gt;where(&#39;finalized&#39;, 1)-&gt;exists()) {
    // ...
}

if (DB::table(&#39;orders&#39;)-&gt;where(&#39;finalized&#39;, 1)-&gt;doesntExist()) {
    // ...
}
</code></pre><p><a name="select-statements"></a></p><h2 id="select-语句" tabindex="-1"><a class="header-anchor" href="#select-语句" aria-hidden="true">#</a> Select 语句</h2><p><a name="specifying-a-select-clause"></a></p><h4 id="指定一个-select-语句" tabindex="-1"><a class="header-anchor" href="#指定一个-select-语句" aria-hidden="true">#</a> 指定一个 Select 语句</h4><p>可能你并不总是希望从数据库表中获取所有列。 使用 <code>select</code> 方法，可以自定义一个 「select」 查询语句来查询指定的字段：</p><pre><code>use Illuminate\\Support\\Facades\\DB;

$users = DB::table(&#39;users&#39;)
            -&gt;select(&#39;name&#39;, &#39;email as user_email&#39;)
            -&gt;get();
</code></pre><p><code>distinct</code> 方法会强制让查询返回的结果不重复：</p><pre><code>$users = DB::table(&#39;users&#39;)-&gt;distinct()-&gt;get();
</code></pre><p>如果你已经有了一个查询构造器实例，并且希望在现有的查询语句中加入一个字段，那么你可以使用 <code>addSelect</code> 方法：</p><pre><code>$query = DB::table(&#39;users&#39;)-&gt;select(&#39;name&#39;);

$users = $query-&gt;addSelect(&#39;age&#39;)-&gt;get();
</code></pre><p><a name="raw-expressions"></a></p><h2 id="原生表达式" tabindex="-1"><a class="header-anchor" href="#原生表达式" aria-hidden="true">#</a> 原生表达式</h2><p>当你需要在查询中插入任意的字符串时，你可以使用 <code>DB</code> 门面提供的 <code>raw</code> 方法以创建原生表达式。</p><pre><code>$users = DB::table(&#39;users&#39;)
             -&gt;select(DB::raw(&#39;count(*) as user_count, status&#39;))
             -&gt;where(&#39;status&#39;, &#39;&lt;&gt;&#39;, 1)
             -&gt;groupBy(&#39;status&#39;)
             -&gt;get();
</code></pre><blockquote><p><strong>警告</strong><br> 原生语句作为字符串注入到查询中，因此必须格外小心避免产生 SQL 注入漏洞。</p></blockquote><p><a name="raw-methods"></a></p><h3 id="原生方法。" tabindex="-1"><a class="header-anchor" href="#原生方法。" aria-hidden="true">#</a> 原生方法。</h3><p>可以使用以下方法代替 <code>DB::raw</code>，将原生表达式插入查询的各个部分。<strong>请记住，Laravel 无法保证所有使用原生表达式的查询都不受到 SQL 注入漏洞的影响。</strong></p><p><a name="selectraw"></a></p><h4 id="selectraw" tabindex="-1"><a class="header-anchor" href="#selectraw" aria-hidden="true">#</a> <code>selectRaw</code></h4><p><code>selectRaw</code> 方法可以用来代替 <code>addSelect(DB::raw(/* ... */))</code>。此方法接受一个可选的绑定数组作为其第二个参数：</p><pre><code>$orders = DB::table(&#39;orders&#39;)
                -&gt;selectRaw(&#39;price * ? as price_with_tax&#39;, [1.0825])
                -&gt;get();
</code></pre><p><a name="whereraw-orwhereraw"></a></p><h4 id="whereraw-orwhereraw" tabindex="-1"><a class="header-anchor" href="#whereraw-orwhereraw" aria-hidden="true">#</a> <code>whereRaw / orWhereRaw</code></h4><p><code>whereRaw</code> 和 <code>orWhereRaw</code> 方法可用于将原始 「where」子句注入你的查询。这些方法接受一个可选的绑定数组作为它们的第二个参数：</p><pre><code>$orders = DB::table(&#39;orders&#39;)
                -&gt;whereRaw(&#39;price &gt; IF(state = &quot;TX&quot;, ?, 100)&#39;, [200])
                -&gt;get();
</code></pre><p><a name="havingraw-orhavingraw"></a></p><h4 id="havingraw-orhavingraw" tabindex="-1"><a class="header-anchor" href="#havingraw-orhavingraw" aria-hidden="true">#</a> <code>havingRaw / orHavingRaw</code></h4><p><code>havingRaw</code> 和 <code>orHavingRaw</code> 方法可用于提供原始字符串作为 「having」子句的值。这些方法接受一个可选的绑定数组作为它们的第二个参数：</p><pre><code>$orders = DB::table(&#39;orders&#39;)
                -&gt;select(&#39;department&#39;, DB::raw(&#39;SUM(price) as total_sales&#39;))
                -&gt;groupBy(&#39;department&#39;)
                -&gt;havingRaw(&#39;SUM(price) &gt; ?&#39;, [2500])
                -&gt;get();
</code></pre><p><a name="orderbyraw"></a></p><h4 id="orderbyraw" tabindex="-1"><a class="header-anchor" href="#orderbyraw" aria-hidden="true">#</a> <code>orderByRaw</code></h4><p>orderByRaw 方法可用于将原生字符串设置为「order by」子句的值：</p><pre><code>$orders = DB::table(&#39;orders&#39;)
                -&gt;orderByRaw(&#39;updated_at - created_at DESC&#39;)
                -&gt;get();
</code></pre><p><a name="groupbyraw"></a></p><h3 id="groupbyraw" tabindex="-1"><a class="header-anchor" href="#groupbyraw" aria-hidden="true">#</a> <code>groupByRaw</code></h3><p>groupByRaw 方法可以用于将原生字符串设置为 <code>group by</code> 子句的值：</p><pre><code>$orders = DB::table(&#39;orders&#39;)
                -&gt;select(&#39;city&#39;, &#39;state&#39;)
                -&gt;groupByRaw(&#39;city, state&#39;)
                -&gt;get();
</code></pre><p><a name="joins"></a></p><h2 id="joins" tabindex="-1"><a class="header-anchor" href="#joins" aria-hidden="true">#</a> Joins</h2><p><a name="inner-join-clause"></a></p><h4 id="inner-join-语句" tabindex="-1"><a class="header-anchor" href="#inner-join-语句" aria-hidden="true">#</a> Inner Join 语句</h4><p>查询构造器也还可用于向查询中添加连接子句。若要执行基本的「inner join」，你可以对查询构造器实例使用 <code>join</code> 方法。传递给 <code>join</code> 方法的第一个参数是需要你连接到的表的名称，而其余参数指定连接的列约束。你甚至还可以在一个查询中连接多个表：</p><pre><code>use Illuminate\\Support\\Facades\\DB;

$users = DB::table(&#39;users&#39;)
            -&gt;join(&#39;contacts&#39;, &#39;users.id&#39;, &#39;=&#39;, &#39;contacts.user_id&#39;)
            -&gt;join(&#39;orders&#39;, &#39;users.id&#39;, &#39;=&#39;, &#39;orders.user_id&#39;)
            -&gt;select(&#39;users.*&#39;, &#39;contacts.phone&#39;, &#39;orders.price&#39;)
            -&gt;get();
</code></pre><p><a name="left-join-right-join-clause"></a></p><h4 id="left-join-right-join-语句" tabindex="-1"><a class="header-anchor" href="#left-join-right-join-语句" aria-hidden="true">#</a> Left Join / Right Join 语句</h4><p>如果你想使用「left join」或者「right join」代替「inner join」，可以使用 <code>leftJoin</code> 或者 <code>rightJoin</code> 方法。这两个方法与 <code>join</code> 方法用法相同：</p><pre><code>$users = DB::table(&#39;users&#39;)
            -&gt;leftJoin(&#39;posts&#39;, &#39;users.id&#39;, &#39;=&#39;, &#39;posts.user_id&#39;)
            -&gt;get();

$users = DB::table(&#39;users&#39;)
            -&gt;rightJoin(&#39;posts&#39;, &#39;users.id&#39;, &#39;=&#39;, &#39;posts.user_id&#39;)
            -&gt;get();
</code></pre><p><a name="cross-join-clause"></a></p><h4 id="cross-join-语句" tabindex="-1"><a class="header-anchor" href="#cross-join-语句" aria-hidden="true">#</a> Cross Join 语句</h4><p>你可以使用 <code>crossJoin</code> 方法执行「交叉连接」。交叉连接在第一个表和被连接的表之间会生成笛卡尔积：</p><pre><code>$sizes = DB::table(&#39;sizes&#39;)
            -&gt;crossJoin(&#39;colors&#39;)
            -&gt;get();
</code></pre><p><a name="advanced-join-clauses"></a></p><h4 id="高级-join-语句" tabindex="-1"><a class="header-anchor" href="#高级-join-语句" aria-hidden="true">#</a> 高级 Join 语句</h4><p>你还可以指定更高级的联接子句。首先，将闭包作为第二个参数传递给 <code>join</code> 方法。闭包将收到一个 <code>Illuminate\\Database\\Query\\JoinClause</code> 实例，该实例允许你指定对 <code>join</code> 子句的约束：</p><pre><code>DB::table(&#39;users&#39;)
        -&gt;join(&#39;contacts&#39;, function (JoinClause $join) {
            $join-&gt;on(&#39;users.id&#39;, &#39;=&#39;, &#39;contacts.user_id&#39;)-&gt;orOn(/* ... */);
        })
        -&gt;get();
</code></pre><p>如果你想要在连接上使用「where」风格的语句，你可以在连接上使用 <code>JoinClause</code> 实例中的 <code>where</code> 和 <code>orWhere</code> 方法。这些方法会将列和值进行比较，而不是列和列进行比较：</p><pre><code>DB::table(&#39;users&#39;)
        -&gt;join(&#39;contacts&#39;, function (JoinClause $join) {
            $join-&gt;on(&#39;users.id&#39;, &#39;=&#39;, &#39;contacts.user_id&#39;)
                 -&gt;where(&#39;contacts.user_id&#39;, &#39;&gt;&#39;, 5);
        })
        -&gt;get();
</code></pre><p><a name="subquery-joins"></a></p><h4 id="子连接查询" tabindex="-1"><a class="header-anchor" href="#子连接查询" aria-hidden="true">#</a> 子连接查询</h4><p>你可以使用 <code>joinSub</code>，<code>leftJoinSub</code> 和 <code>rightJoinSub</code> 方法关联一个查询作为子查询。他们每一种方法都会接收三个参数：子查询、表别名和定义关联字段的闭包。如下面这个例子，获取含有用户最近一次发布博客时的 <code>created_at</code> 时间戳的用户集合：</p><pre><code>$latestPosts = DB::table(&#39;posts&#39;)
                   -&gt;select(&#39;user_id&#39;, DB::raw(&#39;MAX(created_at) as last_post_created_at&#39;))
                   -&gt;where(&#39;is_published&#39;, true)
                   -&gt;groupBy(&#39;user_id&#39;);

$users = DB::table(&#39;users&#39;)
        -&gt;joinSub($latestPosts, &#39;latest_posts&#39;, function (JoinClause $join) {
            $join-&gt;on(&#39;users.id&#39;, &#39;=&#39;, &#39;latest_posts.user_id&#39;);
        })-&gt;get();
</code></pre><p><a name="unions"></a></p><h2 id="联合" tabindex="-1"><a class="header-anchor" href="#联合" aria-hidden="true">#</a> 联合</h2><p>查询构造器还提供了一种简洁的方式将两个或者多个查询「联合」在一起。例如，你可以先创建一个查询，然后使用 <code>union</code> 方法来连接更多的查询：</p><pre><code>use Illuminate\\Support\\Facades\\DB;

$first = DB::table(&#39;users&#39;)
            -&gt;whereNull(&#39;first_name&#39;);

$users = DB::table(&#39;users&#39;)
            -&gt;whereNull(&#39;last_name&#39;)
            -&gt;union($first)
            -&gt;get();
</code></pre><p>查询构造器不仅提供了 <code>union</code> 方法，还提供了一个 <code>unionAll</code> 方法。当查询结合 <code>unionAll</code> 方法使用时，将不会删除重复的结果。<code>unionAll</code> 方法的用法和 <code>union</code> 方法一样。</p><p><a name="basic-where-clauses"></a></p><h2 id="基础的-where-语句" tabindex="-1"><a class="header-anchor" href="#基础的-where-语句" aria-hidden="true">#</a> 基础的 Where 语句</h2><p><a name="where-clauses"></a></p><h3 id="where-语句" tabindex="-1"><a class="header-anchor" href="#where-语句" aria-hidden="true">#</a> Where 语句</h3><p>你可以在 <code>where</code> 语句中使用查询构造器的 <code>where</code> 方法。调用 <code>where</code> 方法需要三个基本参数。第一个参数是字段的名称。第二个参数是一个操作符，它可以是数据库中支持的任意操作符。第三个参数是与字段比较的值。</p><p>例如。在 <code>users</code> 表中查询 <code>votes</code> 字段等于 <code>100</code> 并且 <code>age</code> 字段大于 <code>35</code> 的数据：</p><pre><code>$users = DB::table(&#39;users&#39;)
                -&gt;where(&#39;votes&#39;, &#39;=&#39;, 100)
                -&gt;where(&#39;age&#39;, &#39;&gt;&#39;, 35)
                -&gt;get();
</code></pre><p>为了方便起见。如果你想要比较一个字段的值是否 <code>等于</code> 给定的值。你可以将这个给定的值作为第二个参数传递给 <code>where</code> 方法。那么，Laravel 会默认使用 <code>=</code> 操作符：</p><pre><code>$users = DB::table(&#39;users&#39;)-&gt;where(&#39;votes&#39;, 100)-&gt;get();
</code></pre><p>如上所述，你可以使用数据库支持的任意操作符：</p><pre><code>$users = DB::table(&#39;users&#39;)
                -&gt;where(&#39;votes&#39;, &#39;&gt;=&#39;, 100)
                -&gt;get();

$users = DB::table(&#39;users&#39;)
                -&gt;where(&#39;votes&#39;, &#39;&lt;&gt;&#39;, 100)
                -&gt;get();

$users = DB::table(&#39;users&#39;)
                -&gt;where(&#39;name&#39;, &#39;like&#39;, &#39;T%&#39;)
                -&gt;get();
</code></pre><p>你也可以将一个条件数组传递给 <code>where</code> 方法。数组的每个元素都应该是一个数组，其中包是传递给 <code>where</code> 方法的三个参数：</p><pre><code>$users = DB::table(&#39;users&#39;)-&gt;where([
    [&#39;status&#39;, &#39;=&#39;, &#39;1&#39;],
    [&#39;subscribed&#39;, &#39;&lt;&gt;&#39;, &#39;1&#39;],
])-&gt;get();
</code></pre><blockquote><p><strong>注意</strong> PDO 不支持绑定字段名。因此，你不应该允许让用户输入字段名进行查询引用，包括结果集「order by」语句。</p></blockquote><p><a name="or-where-clauses"></a></p><h3 id="or-where-语句" tabindex="-1"><a class="header-anchor" href="#or-where-语句" aria-hidden="true">#</a> Or Where 语句</h3><p>当链式调用多个 <code>where</code> 方法的时候，这些「where」语句将会被看成是 <code>and</code> 关系。另外，你也可以在查询语句中使用 <code>orWhere</code> 方法来表示 <code>or</code> 关系。orWhere 方法接收的参数和 where 方法接收的参数一样：</p><pre><code>$users = DB::table(&#39;users&#39;)
                    -&gt;where(&#39;votes&#39;, &#39;&gt;&#39;, 100)
                    -&gt;orWhere(&#39;name&#39;, &#39;John&#39;)
                    -&gt;get();
</code></pre><p>如果你需要在括号内对 「or」 条件进行分组，那么可以传递一个闭包作为 <code>orWhere</code> 方法的第一个参数：</p><pre><code>$users = DB::table(&#39;users&#39;)
            -&gt;where(&#39;votes&#39;, &#39;&gt;&#39;, 100)
            -&gt;orWhere(function(Builder $query) {
                $query-&gt;where(&#39;name&#39;, &#39;Abigail&#39;)
                      -&gt;where(&#39;votes&#39;, &#39;&gt;&#39;, 50);
            })
            -&gt;get();
</code></pre><p>上面的示例将生成以下 SQL：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> users <span class="token keyword">where</span> votes <span class="token operator">&gt;</span> <span class="token number">100</span> <span class="token operator">or</span> <span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">&#39;Abigail&#39;</span> <span class="token operator">and</span> votes <span class="token operator">&gt;</span> <span class="token number">50</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p><strong>注意</strong> 为避免全局作用域应用时出现意外，你应始终对 <code>orWhere</code> 调用进行分组。</p></blockquote><p><a name="where-not-clauses"></a></p><h3 id="where-not-语句" tabindex="-1"><a class="header-anchor" href="#where-not-语句" aria-hidden="true">#</a> Where Not 语句</h3><p><code>whereNot</code> 和 <code>orWhereNot</code> 方法可用于否定一组给定的查询条件。例如, 下面的查询排除了正在清仓甩卖或价格低于 10 的产品：</p><pre><code>$products = DB::table(&#39;products&#39;)
                -&gt;whereNot(function (Builder $query) {
                    $query-&gt;where(&#39;clearance&#39;, true)
                          -&gt;orWhere(&#39;price&#39;, &#39;&lt;&#39;, 10);
                })
                -&gt;get();
</code></pre><p><a name="json-where-clauses"></a></p><h3 id="json-where-语句" tabindex="-1"><a class="header-anchor" href="#json-where-语句" aria-hidden="true">#</a> JSON Where 语句</h3>`,152),l={href:"https://www.sqlite.org/json1.html",target:"_blank",rel:"noopener noreferrer"},u=a("code",null,"->",-1),h=n(`<pre><code>$users = DB::table(&#39;users&#39;)
                -&gt;where(&#39;preferences-&gt;dining-&gt;meal&#39;, &#39;salad&#39;)
                -&gt;get();
</code></pre><p>你可以使用 <code>whereJsonContains</code> 方法来查询 JSON 数组。但是 SQLite 数据库版本低于3.38.0时不支持该功能：</p><pre><code>$users = DB::table(&#39;users&#39;)
                -&gt;whereJsonContains(&#39;options-&gt;languages&#39;, &#39;en&#39;)
                -&gt;get();
</code></pre><p>如果你的应用使用的是 MySQL 或者 PostgreSQL 数据库，那么你可以向 <code>whereJsonContains</code> 方法中传递一个数组类型的值：</p><pre><code>$users = DB::table(&#39;users&#39;)
                -&gt;whereJsonContains(&#39;options-&gt;languages&#39;, [&#39;en&#39;, &#39;de&#39;])
                -&gt;get();
</code></pre><p>你可以使用 <code>whereJsonLength</code> 方法来查询 JSON 数组的长度：</p><pre><code>$users = DB::table(&#39;users&#39;)
                -&gt;whereJsonLength(&#39;options-&gt;languages&#39;, 0)
                -&gt;get();

$users = DB::table(&#39;users&#39;)
                -&gt;whereJsonLength(&#39;options-&gt;languages&#39;, &#39;&gt;&#39;, 1)
                -&gt;get();
</code></pre><p><a name="additional-where-clauses"></a></p><h3 id="其他-where-语句" tabindex="-1"><a class="header-anchor" href="#其他-where-语句" aria-hidden="true">#</a> 其他 Where 语句</h3><p><strong>whereBetween / orWhereBetween</strong></p><p><code>whereBetween</code> 方法是用来验证字段的值是否在给定的两个值之间：</p><pre><code>$users = DB::table(&#39;users&#39;)
           -&gt;whereBetween(&#39;votes&#39;, [1, 100])
           -&gt;get();
</code></pre><p><strong>whereNotBetween / orWhereNotBetween</strong></p><p><code>whereNotBetween</code>方法用于验证字段的值是否不在给定的两个值范围之中：</p><pre><code>$users = DB::table(&#39;users&#39;)
                    -&gt;whereNotBetween(&#39;votes&#39;, [1, 100])
                    -&gt;get();
</code></pre><p><strong>whereBetweenColumns / whereNotBetweenColumns / orWhereBetweenColumns / orWhereNotBetweenColumns</strong></p><p><code>whereBetweenColumns</code> 方法用于验证字段是否在给定的两个字段的值的范围中：</p><pre><code>$patients = DB::table(&#39;patients&#39;)
                       -&gt;whereBetweenColumns(&#39;weight&#39;, [&#39;minimum_allowed_weight&#39;, &#39;maximum_allowed_weight&#39;])
                       -&gt;get();
</code></pre><p><code>whereNotBetweenColumns</code> 方法用于验证字段是否不在给定的两个字段的值的范围中：</p><pre><code>$patients = DB::table(&#39;patients&#39;)
                       -&gt;whereNotBetweenColumns(&#39;weight&#39;, [&#39;minimum_allowed_weight&#39;, &#39;maximum_allowed_weight&#39;])
                       -&gt;get();
</code></pre><p><strong>whereIn / whereNotIn / orWhereIn / orWhereNotIn</strong></p><p><code>whereIn</code> 方法用于验证字段是否在给定的值数组中：</p><pre><code>$users = DB::table(&#39;users&#39;)
                    -&gt;whereIn(&#39;id&#39;, [1, 2, 3])
                    -&gt;get();
</code></pre><p><code>whereIn</code> 方法用于验证字段是否不在给定的值数组中：</p><pre><code>$users = DB::table(&#39;users&#39;)
                    -&gt;whereNotIn(&#39;id&#39;, [1, 2, 3])
                    -&gt;get();
</code></pre><p>你也可以为<code>whereIn</code> 方法的第二个参数提供一个子查询：</p><pre><code>$activeUsers = DB::table(&#39;users&#39;)-&gt;select(&#39;id&#39;)-&gt;where(&#39;is_active&#39;, 1);

$users = DB::table(&#39;comments&#39;)
                    -&gt;whereIn(&#39;user_id&#39;, $activeUsers)
                    -&gt;get();
</code></pre><p>上面的例子将会转换为下面的 SQL 查询语句：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> comments <span class="token keyword">where</span> user_id <span class="token operator">in</span> <span class="token punctuation">(</span>
    <span class="token keyword">select</span> id
    <span class="token keyword">from</span> users
    <span class="token keyword">where</span> is_active <span class="token operator">=</span> <span class="token number">1</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>注意</strong><br> 如果你需要判断一个整数的大数组 <code>whereIntegerInRaw</code> 或 <code>whereIntegerNotInRaw</code>方法可能会更适合，这种用法的内存占用更小。</p></blockquote><p><strong>whereNull / whereNotNull / orWhereNull / orWhereNotNull</strong></p><p><code>whereNull</code> 方法用于判断指定的字段的值是否是<code>NULL</code>：</p><pre><code>$users = DB::table(&#39;users&#39;)
                -&gt;whereNull(&#39;updated_at&#39;)
                -&gt;get();
</code></pre><p><code>whereNotNull</code> 方法是用来验证给定字段的值是否不为 <code>NULL</code>:</p><pre><code>$users = DB::table(&#39;users&#39;)
                -&gt;whereNotNull(&#39;updated_at&#39;)
                -&gt;get();
</code></pre><p><strong>whereDate / whereMonth / whereDay / whereYear / whereTime</strong></p><p><code>whereDate</code> 方法是用来比较字段的值与给定的日期值是否相等:</p><pre><code>$users = DB::table(&#39;users&#39;)
                -&gt;whereDate(&#39;created_at&#39;, &#39;2016-12-31&#39;)
                -&gt;get();
</code></pre><p><code>whereMonth</code> 方法是用来比较字段的值与给定的月是否相等:</p><pre><code>$users = DB::table(&#39;users&#39;)
                -&gt;whereMonth(&#39;created_at&#39;, &#39;12&#39;)
                -&gt;get();
</code></pre><p><code>whereDay</code> 方法是用来比较字段的值与给定的日是否相等:</p><pre><code>$users = DB::table(&#39;users&#39;)
                -&gt;whereDay(&#39;created_at&#39;, &#39;31&#39;)
                -&gt;get();
</code></pre><p><code>whereYear</code> 方法是用来比较字段的值与给定的年是否相等:</p><pre><code>$users = DB::table(&#39;users&#39;)
                -&gt;whereYear(&#39;created_at&#39;, &#39;2016&#39;)
                -&gt;get();
</code></pre><p><code>whereTime</code> 方法是用来比较字段的值与给定的时间是否相等:</p><pre><code>$users = DB::table(&#39;users&#39;)
                -&gt;whereTime(&#39;created_at&#39;, &#39;=&#39;, &#39;11:20:45&#39;)
                -&gt;get();
</code></pre><p><strong>whereColumn / orWhereColumn</strong></p><p><code>whereColumn</code> 方法是用来比较两个给定字段的值是否相等:</p><pre><code>$users = DB::table(&#39;users&#39;)
                -&gt;whereColumn(&#39;first_name&#39;, &#39;last_name&#39;)
                -&gt;get();
</code></pre><p>你也可以将比较运算符传递给 <code>whereColumn</code> 方法:</p><pre><code>$users = DB::table(&#39;users&#39;)
                -&gt;whereColumn(&#39;updated_at&#39;, &#39;&gt;&#39;, &#39;created_at&#39;)
                -&gt;get();
</code></pre><p>你还可以向 <code>whereColumn</code> 方法中传递一个数组。这些条件将使用 <code>and</code> 运算符联接:</p><pre><code>$users = DB::table(&#39;users&#39;)
                -&gt;whereColumn([
                    [&#39;first_name&#39;, &#39;=&#39;, &#39;last_name&#39;],
                    [&#39;updated_at&#39;, &#39;&gt;&#39;, &#39;created_at&#39;],
                ])-&gt;get();
</code></pre><p><a name="logical-grouping"></a></p><h3 id="逻辑分组" tabindex="-1"><a class="header-anchor" href="#逻辑分组" aria-hidden="true">#</a> 逻辑分组</h3><p>有时你可能需要将括号内的几个「where」子句分组，以实现查询所需的逻辑分组。实际上应该将 <code>orWhere</code> 方法的调用分组到括号中，以避免不可预料的查询逻辑误差。因此可以传递闭包给 <code>where</code> 方法：</p><pre><code>$users = DB::table(&#39;users&#39;)
           -&gt;where(&#39;name&#39;, &#39;=&#39;, &#39;John&#39;)
           -&gt;where(function (Builder $query) {
               $query-&gt;where(&#39;votes&#39;, &#39;&gt;&#39;, 100)
                     -&gt;orWhere(&#39;title&#39;, &#39;=&#39;, &#39;Admin&#39;);
           })
           -&gt;get();
</code></pre><p>你可以看到， 通过一个闭包写入 <code>where</code> 方法 构建一个查询构造器来约束一个分组。这个闭包接收一个查询实例，你可以使用这个实例来设置应该包含的约束。上面的例子将生成以下 SQL：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> users <span class="token keyword">where</span> name <span class="token operator">=</span> <span class="token string">&#39;John&#39;</span> <span class="token operator">and</span> <span class="token punctuation">(</span>votes <span class="token operator">&gt;</span> <span class="token number">100</span> <span class="token operator">or</span> title <span class="token operator">=</span> <span class="token string">&#39;Admin&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p><strong>注意</strong><br> 你应该用 <code>orWhere</code> 调用这个分组，以避免应用全局作用时出现意外。</p></blockquote><p><a name="advanced-where-clauses"></a></p><h3 id="高级-where-语句" tabindex="-1"><a class="header-anchor" href="#高级-where-语句" aria-hidden="true">#</a> 高级 Where 语句</h3><p><a name="where-exists-clauses"></a></p><h3 id="where-exists-语句" tabindex="-1"><a class="header-anchor" href="#where-exists-语句" aria-hidden="true">#</a> Where Exists 语句</h3><p><code>whereExists</code> 方法允许你使用 <code>where exists</code> SQL 语句。 <code>whereExists</code> 方法接收一个闭包参数，该闭包获取一个查询构建器实例，从而允许你定义放置在 <code>exists</code> 子句中查询:</p><pre><code>$users = DB::table(&#39;users&#39;)
           -&gt;whereExists(function (Builder $query) {
               $query-&gt;select(DB::raw(1))
                     -&gt;from(&#39;orders&#39;)
                     -&gt;whereColumn(&#39;orders.user_id&#39;, &#39;users.id&#39;);
           })
           -&gt;get();
</code></pre><p>或者，可以向 <code>whereExists</code> 方法提供一个查询对象，替换上面的闭包：</p><pre><code>$orders = DB::table(&#39;orders&#39;)
                -&gt;select(DB::raw(1))
                -&gt;whereColumn(&#39;orders.user_id&#39;, &#39;users.id&#39;);

$users = DB::table(&#39;users&#39;)
                    -&gt;whereExists($orders)
                    -&gt;get();
</code></pre><p>上面的两个示例都会生成如下的 <code>SQL</code> 语句</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> users
<span class="token keyword">where</span> <span class="token keyword">exists</span> <span class="token punctuation">(</span>
    <span class="token keyword">select</span> <span class="token number">1</span>
    <span class="token keyword">from</span> orders
    <span class="token keyword">where</span> orders<span class="token punctuation">.</span>user_id <span class="token operator">=</span> users<span class="token punctuation">.</span>id
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="subquery-where-clauses"></a></p><h3 id="子查询-where-语句" tabindex="-1"><a class="header-anchor" href="#子查询-where-语句" aria-hidden="true">#</a> 子查询 Where 语句</h3><p>有时候，你可能需要构造一个 <code>where</code> 子查询，将子查询的结果与给定的值进行比较。你可以通过向 <code>where</code> 方法传递闭包和值来实现此操作。例如，下面的查询将检索最后一次「会员」购买记录是「Pro」类型的所有用户；</p><pre><code>use App\\Models\\User;
use Illuminate\\Database\\Query\\Builder;

$users = User::where(function (Builder $query) {
    $query-&gt;select(&#39;type&#39;)
        -&gt;from(&#39;membership&#39;)
        -&gt;whereColumn(&#39;membership.user_id&#39;, &#39;users.id&#39;)
        -&gt;orderByDesc(&#39;membership.start_date&#39;)
        -&gt;limit(1);
}, &#39;Pro&#39;)-&gt;get();
</code></pre><p>或者，你可能需要构建一个 <code>where</code> 子句，将列与子查询的结果进行比较。你可以通过将列、运算符和闭包传递给 <code>where</code> 方法来完成此操作。例如，以下查询将检索金额小于平均值的所有收入记录；</p><pre><code>use App\\Models\\Income;
use Illuminate\\Database\\Query\\Builder;

$incomes = Income::where(&#39;amount&#39;, &#39;&lt;&#39;, function (Builder $query) {
    $query-&gt;selectRaw(&#39;avg(i.amount)&#39;)-&gt;from(&#39;incomes as i&#39;);
})-&gt;get();
</code></pre><p><a name="full-text-where-clauses"></a></p><h3 id="全文-where-子句" tabindex="-1"><a class="header-anchor" href="#全文-where-子句" aria-hidden="true">#</a> 全文 Where 子句</h3><blockquote><p><strong>注意</strong><br> MySQL 和 PostgreSQL 目前支持全文 where 子句。</p></blockquote><p>可以使用 <code>where FullText</code> 和 <code>orWhere FullText</code> 方法将全文「where」 子句添加到具有 <a href="./migrations#available-index-types">full text indexes</a> 的列的查询中。这些方法将由Laravel转换为适用于底层数据库系统的SQL。例如，使用MySQL的应用会生成 <code>MATCH AGAINST</code> 子句</p><pre><code>$users = DB::table(&#39;users&#39;)
           -&gt;whereFullText(&#39;bio&#39;, &#39;web developer&#39;)
           -&gt;get();
</code></pre><p><a name="ordering-grouping-limit-and-offset"></a></p><h2 id="ordering-grouping-limit-offset" tabindex="-1"><a class="header-anchor" href="#ordering-grouping-limit-offset" aria-hidden="true">#</a> Ordering, Grouping, Limit &amp; Offset</h2><p><a name="ordering"></a></p><h3 id="排序" tabindex="-1"><a class="header-anchor" href="#排序" aria-hidden="true">#</a> 排序</h3><p><a name="orderby"></a></p><h4 id="orderby-方法" tabindex="-1"><a class="header-anchor" href="#orderby-方法" aria-hidden="true">#</a> <code>orderBy</code> 方法</h4><p><code>orderBy</code> 方法允许你按给定列对查询结果进行排序。<code>orderBy</code> 方法接受的第一个参数应该是你希望排序的列，而第二个参数确定排序的方向，可以是 <code>asc</code> 或 <code>desc</code>：</p><pre><code>$users = DB::table(&#39;users&#39;)
                -&gt;orderBy(&#39;name&#39;, &#39;desc&#39;)
                -&gt;get();
</code></pre><p>要按多列排序，你以根据需要多次调用 <code>orderBy</code>：</p><pre><code>$users = DB::table(&#39;users&#39;)
                -&gt;orderBy(&#39;name&#39;, &#39;desc&#39;)
                -&gt;orderBy(&#39;email&#39;, &#39;asc&#39;)
                -&gt;get();
</code></pre><p><a name="latest-oldest"></a></p><h4 id="latest-和-oldest-方法" tabindex="-1"><a class="header-anchor" href="#latest-和-oldest-方法" aria-hidden="true">#</a> <code>latest</code> 和 <code>oldest</code> 方法</h4><p><code>latest</code> 和 <code>oldest</code> 方法可以方便让你把结果根据日期排序。查询结果默认根据数据表的 <code>created_at</code> 字段进行排序 。或者，你可以传一个你想要排序的列名，通过:</p><pre><code>$user = DB::table(&#39;users&#39;)
                -&gt;latest()
                -&gt;first();
</code></pre><p><a name="random-ordering"></a></p><h4 id="随机排序" tabindex="-1"><a class="header-anchor" href="#随机排序" aria-hidden="true">#</a> 随机排序</h4><p><code>inRandomOrder</code> 方法被用来将查询结果随机排序。例如，你可以使用这个方法去获得一个随机用户:</p><pre><code>$randomUser = DB::table(&#39;users&#39;)
                -&gt;inRandomOrder()
                -&gt;first();
</code></pre><p><a name="removing-existing-orderings"></a></p><h4 id="移除已存在的排序" tabindex="-1"><a class="header-anchor" href="#移除已存在的排序" aria-hidden="true">#</a> 移除已存在的排序</h4><p><code>reorder</code> 方法会移除之前已经被应用到查询里的排序:</p><pre><code>$query = DB::table(&#39;users&#39;)-&gt;orderBy(&#39;name&#39;);

$unorderedUsers = $query-&gt;reorder()-&gt;get();
</code></pre><p>当你调用 <code>reorder</code> 方法去移除所有已经存在的排序的时候，你可以传递一个列名和排序方式去重新排序整个查询:</p><pre><code>$query = DB::table(&#39;users&#39;)-&gt;orderBy(&#39;name&#39;);

$usersOrderedByEmail = $query-&gt;reorder(&#39;email&#39;, &#39;desc&#39;)-&gt;get();
</code></pre><p><a name="grouping"></a></p><h3 id="分组" tabindex="-1"><a class="header-anchor" href="#分组" aria-hidden="true">#</a> 分组</h3><p><a name="groupby-having"></a></p><h4 id="groupby-和-having-方法" tabindex="-1"><a class="header-anchor" href="#groupby-和-having-方法" aria-hidden="true">#</a> <code>groupBy</code> 和 <code>having</code> 方法</h4><p>如你所愿，<code>groupBy</code> 和 <code>having</code> 方法可以将查询结果分组。<code>having</code> 方法的使用方法类似于 <code>where</code> 方法:</p><pre><code>$users = DB::table(&#39;users&#39;)
                -&gt;groupBy(&#39;account_id&#39;)
                -&gt;having(&#39;account_id&#39;, &#39;&gt;&#39;, 100)
                -&gt;get();
</code></pre><p>你可以使用 <code>havingBetween</code> 方法在一个给定的范围内去过滤结果:</p><pre><code>$report = DB::table(&#39;orders&#39;)
                -&gt;selectRaw(&#39;count(id) as number_of_orders, customer_id&#39;)
                -&gt;groupBy(&#39;customer_id&#39;)
                -&gt;havingBetween(&#39;number_of_orders&#39;, [5, 15])
                -&gt;get();
</code></pre><p>你可以传多个参数给 <code>groupBy</code> 方法将多列分组:</p><pre><code>$users = DB::table(&#39;users&#39;)
                -&gt;groupBy(&#39;first_name&#39;, &#39;status&#39;)
                -&gt;having(&#39;account_id&#39;, &#39;&gt;&#39;, 100)
                -&gt;get();
</code></pre><p>想要构造更高级的 <code>having</code> 语句, 看 <a href="#raw-methods"><code>havingRaw</code></a> 方法。</p><p><a name="limit-and-offset"></a></p><h3 id="限制和偏移量" tabindex="-1"><a class="header-anchor" href="#限制和偏移量" aria-hidden="true">#</a> 限制和偏移量</h3><p><a name="skip-take"></a></p><h4 id="skip-和-take-方法" tabindex="-1"><a class="header-anchor" href="#skip-和-take-方法" aria-hidden="true">#</a> <code>skip</code> 和 <code>take</code> 方法</h4><p>你可以使用 <code>skip</code> 和 <code>take</code> 方法去限制查询结果的返回数量或者在查询结果中跳过给定数量:</p><pre><code>$users = DB::table(&#39;users&#39;)-&gt;skip(10)-&gt;take(5)-&gt;get();
</code></pre><p>或者，你可以使用 <code>limit</code> 和 <code>offset</code> 方法。这些方法在功能上等同于 <code>take</code> 和 <code>skip</code> 方法, 如下</p><pre><code>$users = DB::table(&#39;users&#39;)
                -&gt;offset(10)
                -&gt;limit(5)
                -&gt;get();
</code></pre><p><a name="conditional-clauses"></a></p><h2 id="条件语句" tabindex="-1"><a class="header-anchor" href="#条件语句" aria-hidden="true">#</a> 条件语句</h2><p>有时，可能希望根据另一个条件将某些查询子句应用于查询。例如，当传入 HTTP 请求有一个给定的值的时候你才需要使用一个<code>where</code> 语句。你可以使用 <code>when</code> 方法去实现:</p><pre><code>$role = $request-&gt;string(&#39;role&#39;);

$users = DB::table(&#39;users&#39;)
                -&gt;when($role, function (Builder $query, string $role) {
                    $query-&gt;where(&#39;role_id&#39;, $role);
                })
                -&gt;get();
</code></pre><p><code>when</code> 方法只有当第一个参数为 <code>true</code> 时才执行给定的闭包。如果第一个参数是 <code>false</code> ，闭包将不会被执行。因此，在上面的例子中，只有在传入的请求包含 <code>role</code> 字段且结果为 <code>true</code> 时，<code>when</code> 方法里的闭包才会被调用。</p><p>你可以将另一个闭包作为第三个参数传递给 <code>when</code> 方法。这个闭包则旨在第一个参数结果为 <code>false</code> 时才会执行。为了说明如何使用该功能，我们将使用它来配置查询的默认排序：</p><pre><code>$sortByVotes = $request-&gt;boolean(&#39;sort_by_votes&#39;);

$users = DB::table(&#39;users&#39;)
                -&gt;when($sortByVotes, function (Builder $query, bool $sortByVotes) {
                    $query-&gt;orderBy(&#39;votes&#39;);
                }, function (Builder $query) {
                    $query-&gt;orderBy(&#39;name&#39;);
                })
                -&gt;get();
</code></pre><p><a name="insert-statements"></a></p><h2 id="插入语句" tabindex="-1"><a class="header-anchor" href="#插入语句" aria-hidden="true">#</a> 插入语句</h2><p>查询构造器也提供了一个 <code>insert</code> 方法来用于插入记录到数据库表中。<code>insert</code> 方法接受一个列名和值的数组：</p><pre><code>DB::table(&#39;users&#39;)-&gt;insert([
    &#39;email&#39; =&gt; &#39;kayla@example.com&#39;,
    &#39;votes&#39; =&gt; 0
]);
</code></pre><p>你可以通过传递一个二维数组来实现一次插入多条记录。每一个数组都代表了一个应当插入到数据表中的记录：</p><pre><code>DB::table(&#39;users&#39;)-&gt;insert([
    [&#39;email&#39; =&gt; &#39;picard@example.com&#39;, &#39;votes&#39; =&gt; 0],
    [&#39;email&#39; =&gt; &#39;janeway@example.com&#39;, &#39;votes&#39; =&gt; 0],
]);
</code></pre>`,137),g=a("code",null,"insertOrIgnore",-1),m=a("code",null,"insertOrIgnore",-1),w={href:"https://dev.mysql.com/doc/refman/en/sql-mode.html#ignore-effect-on-execution",target:"_blank",rel:"noopener noreferrer"},b=n(`<pre><code>DB::table(&#39;users&#39;)-&gt;insertOrIgnore([
    [&#39;id&#39; =&gt; 1, &#39;email&#39; =&gt; &#39;sisko@example.com&#39;],
    [&#39;id&#39; =&gt; 2, &#39;email&#39; =&gt; &#39;archer@example.com&#39;],
]);
</code></pre><p><code>insertUsing</code> 方法将在表中插入新记录，同时用子查询来确定应插入的数据：</p><pre><code>DB::table(&#39;pruned_users&#39;)-&gt;insertUsing([
    &#39;id&#39;, &#39;name&#39;, &#39;email&#39;, &#39;email_verified_at&#39;
], DB::table(&#39;users&#39;)-&gt;select(
    &#39;id&#39;, &#39;name&#39;, &#39;email&#39;, &#39;email_verified_at&#39;
)-&gt;where(&#39;updated_at&#39;, &#39;&lt;=&#39;, now()-&gt;subMonth()));
</code></pre><p><a name="auto-incrementing-ids"></a></p><h4 id="自增-ids" tabindex="-1"><a class="header-anchor" href="#自增-ids" aria-hidden="true">#</a> 自增 IDs</h4><p>如果数据表有自增 ID ，使用 <code>insertGetId</code> 方法来插入记录可以返回 ID 值：</p><pre><code>$id = DB::table(&#39;users&#39;)-&gt;insertGetId(
    [&#39;email&#39; =&gt; &#39;john@example.com&#39;, &#39;votes&#39; =&gt; 0]
);
</code></pre><blockquote><p><strong>注意</strong><br> 当使用 PostgreSQL 时，<code>insertGetId</code> 方法将默认把 <code>id</code> 作为自动递增字段的名称。如果你要从其他「字段」来获取 ID ，则需要将字段名称作为第二个参数传递给 <code>insertGetId</code> 方法。</p></blockquote><p><a name="upserts"></a></p><h3 id="更新插入" tabindex="-1"><a class="header-anchor" href="#更新插入" aria-hidden="true">#</a> 更新插入</h3><p><code>upsert</code> 方法是是插入不存在的记录和为已经存在记录更新值。该方法的第一个参数包含要插入或更新的值，而第二个参数列出了在关联表中唯一标识记录的列。 该方法的第三个也是最后一个参数是一个列数组，如果数据库中已经存在匹配的记录，则应该更新这些列：</p><pre><code>DB::table(&#39;flights&#39;)-&gt;upsert(
    [
        [&#39;departure&#39; =&gt; &#39;Oakland&#39;, &#39;destination&#39; =&gt; &#39;San Diego&#39;, &#39;price&#39; =&gt; 99],
        [&#39;departure&#39; =&gt; &#39;Chicago&#39;, &#39;destination&#39; =&gt; &#39;New York&#39;, &#39;price&#39; =&gt; 150]
    ],
    [&#39;departure&#39;, &#39;destination&#39;],
    [&#39;price&#39;]
);
</code></pre><p>在上面的例子中，Laravel 会尝试插入两条记录。如果已经存在具有相同 <code>departure</code> 和 <code>destination</code> 列值的记录，Laravel 将更新该记录的 <code>price</code> 列。</p><blockquote><p><strong>注意</strong><br> 除 SQL Server 之外的所有数据库都要求 <code>upsert</code> 方法的第二个参数中的列具有「主」或「唯一」索引。 此外，MySQL 数据库驱动程序忽略 <code>upsert</code> 方法的第二个参数，并始终使用表的「主」和「唯一」索引来检测现有记录。</p></blockquote><p><a name="update-statements"></a></p><h2 id="更新语句" tabindex="-1"><a class="header-anchor" href="#更新语句" aria-hidden="true">#</a> 更新语句</h2><p>除了插入记录到数据库之外，查询构造器也可以使用 <code>update</code> 方法来更新已经存在的记录。<code>update</code> 方法像 <code>insert</code> 方法一样，接受一个列名和值的数组作为参数，它表示要更新的列和数据。<code>update</code> 方法返回受影响的行数。你可以使用 <code>where</code> 子句来限制 <code>update</code> 查询：</p><pre><code>$affected = DB::table(&#39;users&#39;)
              -&gt;where(&#39;id&#39;, 1)
              -&gt;update([&#39;votes&#39; =&gt; 1]);
</code></pre><p><a name="update-or-insert"></a></p><h4 id="更新或插入" tabindex="-1"><a class="header-anchor" href="#更新或插入" aria-hidden="true">#</a> 更新或插入</h4><p>有时你可能希望更新数据库中的记录，但如果指定记录不存在的时候则创建它。在这种情况下，可以使用 <code>updateOrInsert</code> 方法。<code>updateOrInsert</code> 方法接受两个参数：一个用于查找记录的条件数组，以及一个包含要更改记录的键值对数组。</p><p><code>updateOrInsert</code> 方法将尝试使用第一个参数的列名和值来定位匹配的数据库记录。如果记录存在，则使用第二个参数更新其值。如果找不到指定记录，则会合并两个参数的属性来创建一条记录并将其插入：</p><pre><code>DB::table(&#39;users&#39;)
    -&gt;updateOrInsert(
        [&#39;email&#39; =&gt; &#39;john@example.com&#39;, &#39;name&#39; =&gt; &#39;John&#39;],
        [&#39;votes&#39; =&gt; &#39;2&#39;]
    );
</code></pre><p><a name="updating-json-columns"></a></p><h3 id="更新-json-字段" tabindex="-1"><a class="header-anchor" href="#更新-json-字段" aria-hidden="true">#</a> 更新 JSON 字段</h3><p>当更新一个 JSON 列的收，你可以使用 <code>-&gt;</code> 语法来更新 JSON 对象中恰当的键。此操作需要 MySQL 5.7+ 和 PostgreSQL 9.5+ 的数据库：</p><pre><code>$affected = DB::table(&#39;users&#39;)
              -&gt;where(&#39;id&#39;, 1)
              -&gt;update([&#39;options-&gt;enabled&#39; =&gt; true]);
</code></pre><p><a name="increment-and-decrement"></a></p><h3 id="自增与自减" tabindex="-1"><a class="header-anchor" href="#自增与自减" aria-hidden="true">#</a> 自增与自减</h3><p>查询构造器还提供了方便的方法来增加或减少给定列的值。这两种方法都至少接受一个参数：要修改的列。可以提供第二个参数来指定列应该增加或减少的数量：</p><pre><code>DB::table(&#39;users&#39;)-&gt;increment(&#39;votes&#39;);

DB::table(&#39;users&#39;)-&gt;increment(&#39;votes&#39;, 5);

DB::table(&#39;users&#39;)-&gt;decrement(&#39;votes&#39;);

DB::table(&#39;users&#39;)-&gt;decrement(&#39;votes&#39;, 5);
</code></pre><p>你还可以在操作期间指定要更新的其他列：</p><pre><code>DB::table(&#39;users&#39;)-&gt;increment(&#39;votes&#39;, 1, [&#39;name&#39; =&gt; &#39;John&#39;]);
</code></pre><p>此外，你可以使用 <code>incrementEach</code> 和 <code>decrementEach</code> 方法同时增加或减少多个列:</p><pre><code>DB::table(&#39;users&#39;)-&gt;incrementEach([
    &#39;votes&#39; =&gt; 5,
    &#39;balance&#39; =&gt; 100,
]);
</code></pre><p><a name="delete-statements"></a></p><h2 id="删除语句" tabindex="-1"><a class="header-anchor" href="#删除语句" aria-hidden="true">#</a> 删除语句</h2><p>查询构建器的 <code>delete</code> 方法可用于从表中删除记录。 <code>delete</code> 方法返回受影响的行数。你可以通过在调用 <code>delete</code> 方法之前添加 <code>where</code> 子句来限制 <code>delete</code> 语句：</p><pre><code>$deleted = DB::table(&#39;users&#39;)-&gt;delete();

$deleted = DB::table(&#39;users&#39;)-&gt;where(&#39;votes&#39;, &#39;&gt;&#39;, 100)-&gt;delete();
</code></pre><p>如果你希望截断整个表，这将从表中删除所有记录并将自动递增 ID 重置为零，你可以使用 <code>truncate</code> 方法：</p><pre><code>DB::table(&#39;users&#39;)-&gt;truncate();
</code></pre><p><a name="table-truncation-and-postgresql"></a></p><h4 id="截断表-postgresql" tabindex="-1"><a class="header-anchor" href="#截断表-postgresql" aria-hidden="true">#</a> 截断表 &amp; PostgreSQL</h4><p>截断 PostgreSQL 数据库时，将应用 <code>CASCADE</code> 行为。这意味着其他表中所有与外键相关的记录也将被删除。</p><p><a name="悲观锁"></a></p><h2 id="悲观锁" tabindex="-1"><a class="header-anchor" href="#悲观锁" aria-hidden="true">#</a> 悲观锁</h2><p>查询构建器还包括一些函数，可帮助你在执行 <code>select</code> 语句时实现「悲观锁」。 要使用「共享锁」执行语句，你可以调用 <code>sharedLock</code> 方法。共享锁可防止选定的行被修改，直到你的事务被提交：</p><pre><code>DB::table(&#39;users&#39;)
        -&gt;where(&#39;votes&#39;, &#39;&gt;&#39;, 100)
        -&gt;sharedLock()
        -&gt;get();
</code></pre><p>或者，你可以使用 <code>lockForUpdate</code> 方法。「update」锁可防止所选记录被修改或被另一个共享锁选中：</p><pre><code>DB::table(&#39;users&#39;)
        -&gt;where(&#39;votes&#39;, &#39;&gt;&#39;, 100)
        -&gt;lockForUpdate()
        -&gt;get();
</code></pre><p><a name="调试"></a></p><h2 id="调试" tabindex="-1"><a class="header-anchor" href="#调试" aria-hidden="true">#</a> 调试</h2><p>你可以在构建查询时使用 <code>dd</code> 和 <code>dump</code> 方法来转储当前查询绑定和 SQL。 <code>dd</code> 方法将显示调试信息，然后停止执行请求。 <code>dump</code> 方法将显示调试信息，但允许请求继续执行：</p><pre><code>DB::table(&#39;users&#39;)-&gt;where(&#39;votes&#39;, &#39;&gt;&#39;, 100)-&gt;dd();

DB::table(&#39;users&#39;)-&gt;where(&#39;votes&#39;, &#39;&gt;&#39;, 100)-&gt;dump();
</code></pre>`,54);function k(f,B){const s=o("ExternalLinkIcon");return d(),c("div",null,[i,a("p",null,[e("Laravel 也支持 JSON 类型的字段查询，前提是数据库也支持 JSON 类型。目前，有 MySQL 5.7+、PostgreSQL、SQL Server 2016 和 SQLite 3.39.0 支持 JSON 类型 (with the "),a("a",l,[e("JSON1 extension"),r(s)]),e(")。可以使用 "),u,e(" 操作符来查询 JSON 字段：")]),h,a("p",null,[g,e(" 方法将会在插入数据库的时候忽略发生的错误。当使用该方法时，你应当注意，重复记录插入的错误和其他类型的错误都将被忽略，这取决于数据库引擎。例如， "),m,e(" 将会 "),a("a",w,[e("绕过 MySQL 的严格模式"),r(s)]),e(" ：")]),b])}const $=t(p,[["render",k],["__file","queries.html.vue"]]);export{$ as default};
