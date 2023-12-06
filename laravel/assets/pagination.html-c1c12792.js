import{_ as d}from"./plugin-vue_export-helper-c27b6911.js";import{r,o as s,c as i,b as a,d as e,e as o,a as t}from"./app-06635a3b.js";const c={},p=t('<h1 id="数据库-分页" tabindex="-1"><a class="header-anchor" href="#数据库-分页" aria-hidden="true">#</a> 数据库：分页</h1><ul><li><a href="#%E4%BB%8B%E7%BB%8D">介绍</a></li><li><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">基本用法</a><ul><li><a href="#%E5%AF%B9%E6%9F%A5%E8%AF%A2%E6%9E%84%E9%80%A0%E5%99%A8%E7%BB%93%E6%9E%9C%E8%BF%9B%E8%A1%8C%E5%88%86%E9%A1%B5">对查询构造器结果进行分页</a></li><li><a href="#EloquentORM%E5%88%86%E9%A1%B5">Eloquent ORM 分页</a></li><li><a href="#%E6%B8%B8%E6%A0%87%E5%88%86%E9%A1%B5">游标分页</a></li><li><a href="#%E6%89%8B%E5%8A%A8%E5%88%9B%E5%BB%BA%E5%88%86%E9%A1%B5">手动创建分页</a></li><li><a href="#%E8%87%AA%E5%AE%9A%E4%B9%89%E5%88%86%E9%A1%B5URL">自定义分页 URL</a></li></ul></li><li><a href="#%E6%98%BE%E7%A4%BA%E5%88%86%E9%A1%B5%E7%BB%93%E6%9E%9C">显示分页结果</a><ul><li><a href="#%E8%B0%83%E6%95%B4%E5%88%86%E9%A1%B5%E9%93%BE%E6%8E%A5%E7%AA%97%E5%8F%A3">调整分页链接窗口</a></li><li><a href="#%E5%B0%86%E7%BB%93%E6%9E%9C%E8%BD%AC%E6%8D%A2%E4%B8%BAJSON">将结果转换为 JSON</a></li></ul></li><li><a href="#%E8%87%AA%E5%AE%9A%E4%B9%89%E5%88%86%E9%A1%B5%E8%A7%86%E5%9B%BE">自定义分页视图</a><ul><li><a href="#%E4%BD%BF%E7%94%A8Bootstrap">使用 Bootstrap</a></li></ul></li><li><a href="#%E5%88%86%E9%A1%B5%E5%99%A8%E5%AE%9E%E4%BE%8B%E6%96%B9%E6%B3%95">分页器实例方法</a></li><li><a href="#%E6%B8%B8%E6%A0%87%E5%88%86%E9%A1%B5%E5%99%A8%E5%AE%9E%E4%BE%8B%E6%96%B9%E6%B3%95">游标分页器实例方法</a></li></ul><p><a name="介绍"></a></p><h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h2><p>在其他框架中，分页可能非常痛苦，我们希望 Laravel 的分页方法像一股新鲜空气。 Laravel 的分页器集成了 <a href="./queries">query builder</a> 和 <a href="./eloquent">Eloquent ORM</a>，并提供了方便、易于使用的无需任何配置的数据库记录分页。</p>',5),l={href:"https://tailwindcss.com/",target:"_blank",rel:"noopener noreferrer"},u=t(`<p><a name="tailwind-jit"></a></p><h4 id="tailwind-jit" tabindex="-1"><a class="header-anchor" href="#tailwind-jit" aria-hidden="true">#</a> Tailwind JIT</h4><p>如果你使用 Laravel 的默认 Tailwind 视图和 Tailwind JIT 引擎，你应该确保你的应用程序的 <code>tailwind.config.js</code> 文件的 <code>content</code> 关键引用 Laravel 的分页视图，这样它们的 Tailwind 类就不会被清除：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&#39;./resources/**/*.blade.php&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;./resources/**/*.js&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;./resources/**/*.vue&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="基础用法"></a></p><h2 id="基础用法" tabindex="-1"><a class="header-anchor" href="#基础用法" aria-hidden="true">#</a> 基础用法</h2><p><a name="对查询构造器结果进行分页"></a></p><h3 id="对查询构造器结果进行分页" tabindex="-1"><a class="header-anchor" href="#对查询构造器结果进行分页" aria-hidden="true">#</a> 对查询构造器结果进行分页</h3><p>有几种方法可以对结果进行分页，最简单的方法是在 <a href="./queries">query builder</a> 或 <a href="./eloquent">Eloquent query</a> 上使用 <code>paginate</code> 方法， <code>paginate</code> 方法根据用户查看的当前页面自动设置查询的「limit」和「offset」，默认情况下，通过 HTTP 请求中的 <code>page</code> 查询字符串参数的值检测当前页面，Laravel会自动检测这个值，它也会自动插入到分页器生成的链接中。</p><p>在下面的例子中，传递给 <code>paginate</code> 方法的唯一参数是你想要在一页中显示的记录数。在此例中，我们希望「每页」显示 <code>15</code> 条数据：</p><pre><code>&lt;?php

namespace App\\Http\\Controllers;

use App\\Http\\Controllers\\Controller;
use Illuminate\\Support\\Facades\\DB;
use Illuminate\\View\\View;

class UserController extends Controller
{
    /**
     * 显示应用中所有用户列表
     */
    public function index(): View
    {
        return view(&#39;user.index&#39;, [
            &#39;users&#39; =&gt; DB::table(&#39;users&#39;)-&gt;paginate(15)
        ]);
    }
}
</code></pre><p><a name="simple-pagination"></a></p><h4 id="简单分页" tabindex="-1"><a class="header-anchor" href="#简单分页" aria-hidden="true">#</a> 简单分页</h4><p>该 <code>paginate</code> 方法会在查询数据库之前先计算与查询匹配的记录总数，从而让分页器知道总共需要有多少个页面来显示所有的记录。不过，如果你不打算在界面上显示总页数的话，那么计算记录总数是没有意义的。</p><p>因此，如果你只需要显示一个简单的「上一页」和「下一页」链接的话， <code>simplePaginate</code> 方法是一个更高效的选择：</p><pre><code>$users = DB::table(&#39;users&#39;)-&gt;simplePaginate(15);
</code></pre><p><a name="paginating-eloquent-results"></a></p><h3 id="eloquent-orm-分页" tabindex="-1"><a class="header-anchor" href="#eloquent-orm-分页" aria-hidden="true">#</a> Eloquent ORM 分页</h3><p>你也可以对 <a href="./eloquent">Eloquent</a> 查询结果进行分页. 在下面的例子中，我们将 <code>App\\Models\\User</code> 模型按每页 15 条记录进行分页。如你所见，其语法与查询构造器分页基本相同：</p><pre><code>use App\\Models\\User;

$users = User::paginate(15);
</code></pre><p>当然，你也可以在调用 <code>paginate</code> 方法之前为查询添加其他约束，例如 <code>where</code> 子句：</p><pre><code>$users = User::where(&#39;votes&#39;, &#39;&gt;&#39;, 100)-&gt;paginate(15);
</code></pre><p>你也可以在 Eloquent ORM 分页中使用 <code>simplePaginate</code>：</p><pre><code>$users = User::where(&#39;votes&#39;, &#39;&gt;&#39;, 100)-&gt;simplePaginate(15);
</code></pre><p>同样，您可以使用 <code>cursorPaginate</code> 方法对 Eloquent 模型进行游标分页：</p><pre><code>$users = User::where(&#39;votes&#39;, &#39;&gt;&#39;, 100)-&gt;cursorPaginate(15);
</code></pre><p><a name="multiple-paginator-instances-per-page"></a></p><h4 id="每页有多个-paginator-实例" tabindex="-1"><a class="header-anchor" href="#每页有多个-paginator-实例" aria-hidden="true">#</a> 每页有多个 Paginator 实例</h4><p>有时你可能需要在应用程序呈现的单个屏幕上呈现两个单独的分页器。 但是，如果两个分页器实例都使用 <code>page</code> 查询字符串参数来存储当前页面，则两个分页器会发生冲突。 要解决此冲突，您可以通过提供给 <code>paginate</code>、<code>simplePaginate</code> 和 <code>cursorPaginate</code> 方法的第三个参数传递你希望用于存储分页器当前页面的查询字符串参数的名称：</p><pre><code>use App\\Models\\User;

$users = User::where(&#39;votes&#39;, &#39;&gt;&#39;, 100)-&gt;paginate(
    $perPage = 15, $columns = [&#39;*&#39;], $pageName = &#39;users&#39;
);
</code></pre><p><a name="cursor-pagination"></a></p><h3 id="游标分页" tabindex="-1"><a class="header-anchor" href="#游标分页" aria-hidden="true">#</a> 游标分页</h3><p>虽然 <code>paginate</code> 和 <code>simplePaginate</code> 使用 SQL「offset」 子句创建查询，但游标分页通过构造「where」子句来工作，这些子句比较查询中包含的有序列的值，提供所有可用的最有效的数据库性能 Laravel 的分页方法。 这种分页方法特别适合大型数据集和「无限」滚动用户界面。</p><p>与基于偏移量的分页在分页器生成的 URL 的查询字符串中包含页码不同，基于游标的分页在查询字符串中放置一个「游标」字符串。游标是一个编码字符串，包含下一个分页查询应该开始分页的位置和它应该分页的方向：</p><div class="language-nothing line-numbers-mode" data-ext="nothing"><pre class="language-nothing"><code>http://localhost/users?cursor=eyJpZCI6MTUsIl9wb2ludHNUb05leHRJdGVtcyI6dHJ1ZX0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>你可以通过查询生成器提供的 <code>cursorPaginate</code> 方法创建基于游标的分页器实例。这个方法返回一个 <code>Illuminate\\Pagination\\CursorPaginator</code> 的实例：</p><pre><code>$users = DB::table(&#39;users&#39;)-&gt;orderBy(&#39;id&#39;)-&gt;cursorPaginate(15);
</code></pre><p>检索到游标分页器实例后，你可以像使用 <code>paginate</code> 和 <code>simplePaginate</code> 方法时一样<a href="displaying-pagination-results">显示分页结果</a>。更多游标分页器提供的实例方法请参考<a href="#cursor-paginator-instance-methods">游标分页器实例方法文档</a>.</p><blockquote><p><strong>注意</strong> 你的查询必须包含「order by」子句才能使用游标分页。</p></blockquote><p><a name="cursor-vs-offset-pagination"></a></p><h4 id="游标与偏移分页" tabindex="-1"><a class="header-anchor" href="#游标与偏移分页" aria-hidden="true">#</a> 游标与偏移分页</h4><p>为了说明偏移分页和游标分页之间的区别，让我们检查一些示例 SQL 查询。 以下两个查询都将显示按 <code>id</code> 排序的 <code>users</code> 表的「第二页」结果：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment"># 偏移分页...</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> users <span class="token keyword">order</span> <span class="token keyword">by</span> id <span class="token keyword">asc</span> <span class="token keyword">limit</span> <span class="token number">15</span> <span class="token keyword">offset</span> <span class="token number">15</span><span class="token punctuation">;</span>

<span class="token comment"># 游标分页...</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> users <span class="token keyword">where</span> id <span class="token operator">&gt;</span> <span class="token number">15</span> <span class="token keyword">order</span> <span class="token keyword">by</span> id <span class="token keyword">asc</span> <span class="token keyword">limit</span> <span class="token number">15</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>与偏移分页相比，游标分页查询具有以下优势：</p><ul><li><p>对于大型数据集，如果「order by」列被索引，游标分页将提供更好的性能。 这是因为「offset」子句会扫描所有先前匹配的数据。</p></li><li><p>对于频繁写入的数据集，如果最近在用户当前查看的页面中添加或删除了结果，偏移分页可能会跳过记录或显示重复。</p></li></ul><p>但是，游标分页有以下限制：</p><ul><li><p>与 <code>simplePaginate</code> 一样，游标分页只能用于显示「下一个」和「上一个」链接，不支持生成带页码的链接。</p></li><li><p>它要求排序基于至少一个唯一列或唯一列的组合。 不支持具有 <code>null</code> 值的列。</p></li></ul><p>-「order by」子句中的查询表达式仅在它们被别名并添加到「select」子句时才受支持。</p><p><a name="manually-creating-a-paginator"></a></p><h3 id="手动创建分页" tabindex="-1"><a class="header-anchor" href="#手动创建分页" aria-hidden="true">#</a> 手动创建分页</h3><p>有时你可能希望手动创建分页，并传递一个包含数据的数组给它。这可以通过手动创建 <code>Illuminate\\Pagination\\Paginator</code>, <code>Illuminate\\Pagination\\LengthAwarePaginator</code> 或者 <code>Illuminate\\Pagination\\CursorPaginator</code> 实例来实现，这取决于你的需要。</p><p><code>Paginator</code> 不需要知道数据的总数。然而，你也无法通过 <code>Paginator</code> 获取最后一页的索引。而 <code>LengthAwarePaginator</code> 接受和 <code>Paginator</code> 几乎相同的参数，不过，它会计算数据的总数。</p><p>或者说，<code>Paginator</code> 相当于查询构造器或者 Eloquent ORM 分页的 <code>simplePaginate</code> 方法，而 <code>LengthAwarePaginator</code> 相当于 <code>paginate</code> 方法。</p>`,53),g=a("strong",null,"注意",-1),h=a("br",null,null,-1),m={href:"https://secure.php.net/manual/en/function.array-slice.php",target:"_blank",rel:"noopener noreferrer"},v=t(`<p><a name="customizing-pagination-urls"></a></p><h3 id="自定义分页的-url" tabindex="-1"><a class="header-anchor" href="#自定义分页的-url" aria-hidden="true">#</a> 自定义分页的 URL</h3><p>默认情况下，分页器生成的链接会匹配当前的请求 URL。不过，分页器的 withPath 方法允许你自定义分页器生成链接时使用的 URL。比如说，你想要分页器生成类似 https://example.com/admin/users?page=N 的链接，你应该给 <code>withPath</code> 方法传递 <code>/admin/users</code> 参数：</p><pre><code>use App\\Models\\User;

Route::get(&#39;/users&#39;, function () {
    $users = User::paginate(15);

    $users-&gt;withPath(&#39;/admin/users&#39;);

    // ...
});
</code></pre><p><a name="appending-query-string-values"></a></p><h4 id="附加参数到分页链接" tabindex="-1"><a class="header-anchor" href="#附加参数到分页链接" aria-hidden="true">#</a> 附加参数到分页链接</h4><p>你可以使用 <code>appends</code> 方法向分页链接中添加查询参数。例如，要在每个分页链接中添加 <code>sort=votes</code> ，你应该这样调用 <code>appends</code>：</p><pre><code>use App\\Models\\User;

Route::get(&#39;/users&#39;, function () {
    $users = User::paginate(15);

    $users-&gt;appends([&#39;sort&#39; =&gt; &#39;votes&#39;]);

    // ...
});
</code></pre><p>如果你想要把当前所有的请求查询参数添加到分页链接，你可以使用 <code>withQueryString</code> 方法：</p><pre><code>$users = User::paginate(15)-&gt;withQueryString();
</code></pre><p><a name="appending-hash-fragments"></a></p><h4 id="附加-hash-片段" tabindex="-1"><a class="header-anchor" href="#附加-hash-片段" aria-hidden="true">#</a> 附加 hash 片段</h4><p>如果你希望向分页器的 URL 添加「哈希片段」，你可以使用 <code>fragment</code> 方法。例如，你可以使用 <code>fragment</code> 方法，为 <code>#user</code> 添加分页链接：</p><pre><code>$users = User::paginate(15)-&gt;fragment(&#39;users&#39;);
</code></pre><p><a name="displaying-pagination-results"></a></p><h2 id="显示分页结果" tabindex="-1"><a class="header-anchor" href="#显示分页结果" aria-hidden="true">#</a> 显示分页结果</h2><p>当调用 <code>paginate</code> 方法时， 你会得到一个 <code>Illuminate\\Pagination\\LengthAwarePaginator</code> 实例， 而调用 <code>simplePaginate</code> 方法时，会得到一个 <code>Illuminate\\Pagination\\Paginator</code> 实例。 最后，调用 <code>cursorPaginate</code> 方法，会得到 <code>Illuminate\\Pagination\\CursorPaginator</code> 实例。</p><p>这些对象提供了数个方法来获取结果集的信息。除了这些辅助方法外，分页器的实例是迭代器，可以像数组一样遍历。所以，你可以使用 <a href="./blade">Blade</a> 模板来显示数据、渲染分页链接等：</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>&lt;div class=&quot;container&quot;&gt;
    @foreach ($users as $user)
        {{ $user-&gt;name }}
    @endforeach
&lt;/div&gt;

{{ $users-&gt;links() }}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,19),b={href:"https://tailwindcss.com",target:"_blank",rel:"noopener noreferrer"},E=t(`<p><a name="adjusting-the-pagination-link-window"></a></p><h3 id="调整分页链接窗口" tabindex="-1"><a class="header-anchor" href="#调整分页链接窗口" aria-hidden="true">#</a> 调整分页链接窗口</h3><p>在使用分页器展示分页链接时，将展示当前页及当前页面前后各三页的链接。如果有需要，你可以通过 <code>onEachSide</code> 方法来控制每侧显示多少个链接：</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>{{ $users-&gt;onEachSide(5)-&gt;links() }}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a name="converting-results-to-json"></a></p><h3 id="将结果转换为json" tabindex="-1"><a class="header-anchor" href="#将结果转换为json" aria-hidden="true">#</a> 将结果转换为JSON</h3><p>Laravel 分页器类实现了 <code>Illuminate\\Contracts\\Support\\Jsonable</code> 接口契约，提供了 <code>toJson</code> 方法。这意味着你可以很方便地将分页结果转换为 JSON。你也可以通过直接在路由闭包或者控制器方法中返回分页实例来将其转换为 JSON：</p><pre><code>use App\\Models\\User;

Route::get(&#39;/users&#39;, function () {
    return User::paginate();
});
</code></pre><p>分页器生成的 JSON 会包括诸如 <code>total</code>，<code>current_page</code>，<code>last_page</code>等元数据信息。实际结果对象将通过 JSON 数组的 <code>data</code> 键提供。以下是通过自路由中分页器实例的方式创建 JSON 的例子：</p><pre><code>{
   &quot;total&quot;: 50,
   &quot;per_page&quot;: 15,
   &quot;current_page&quot;: 1,
   &quot;last_page&quot;: 4,
   &quot;first_page_url&quot;: &quot;http://laravel.app?page=1&quot;,
   &quot;last_page_url&quot;: &quot;http://laravel.app?page=4&quot;,
   &quot;next_page_url&quot;: &quot;http://laravel.app?page=2&quot;,
   &quot;prev_page_url&quot;: null,
   &quot;path&quot;: &quot;http://laravel.app&quot;,
   &quot;from&quot;: 1,
   &quot;to&quot;: 15,
   &quot;data&quot;:[
        {
            // 分页数据...
        },
        {
            // 分页数据...
        }
   ]
}
</code></pre><p><a name="customizing-the-pagination-view"></a></p><h2 id="自定义分页视图" tabindex="-1"><a class="header-anchor" href="#自定义分页视图" aria-hidden="true">#</a> 自定义分页视图</h2>`,12),f={href:"https://tailwindcss.com",target:"_blank",rel:"noopener noreferrer"},P=a("code",null,"links",-1),k=t(`<div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>{{ $paginator-&gt;links(&#39;view.name&#39;) }}

&lt;!-- 向视图传递参数... --&gt;
{{ $paginator-&gt;links(&#39;view.name&#39;, [&#39;foo&#39; =&gt; &#39;bar&#39;]) }}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>不过，最简单的自定义分页视图的方法依然是使用 <code>vendor:publish</code> 命令将它们导出到 <code>resources/views/vendor</code> 目录：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan vendor:publish <span class="token parameter variable">--tag</span><span class="token operator">=</span>laravel-pagination
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这个命令将会把分页视图导出到 <code>resources/views/vendor/pagination</code> 目录。该目录下的 <code>tailwind.blade.php</code> 文件就是默认的分页视图。你可以通过编辑这一文件来自定义分页视图。</p><p>如果你想要定义不同的文件作为默认的分页视图，你可以在 <code>App\\Providers\\AppServiceProvider</code> 服务提供者中的 <code>boot</code> 方法内调用 <code>defaultView</code> 和 <code>defaultSimpleView</code> 方法：</p><pre><code>&lt;?php

namespace App\\Providers;

use Illuminate\\Pagination\\Paginator;
use Illuminate\\Support\\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * 引导应用程序服务
     */
    public function boot(): void
    {
        Paginator::defaultView(&#39;view-name&#39;);

        Paginator::defaultSimpleView(&#39;view-name&#39;);
    }
}
</code></pre><p><a name="using-bootstrap"></a></p><h3 id="使用-bootstrap" tabindex="-1"><a class="header-anchor" href="#使用-bootstrap" aria-hidden="true">#</a> 使用 Bootstrap</h3>`,8),B={href:"https://getbootstrap.com/",target:"_blank",rel:"noopener noreferrer"},_=a("code",null,"App\\Providers\\AppServiceProvider",-1),w=a("code",null,"boot",-1),A=a("code",null,"useBootstrapFour",-1),q=a("code",null,"useBootstrapFive",-1),$=t(`<pre><code>use Illuminate\\Pagination\\Paginator;

/**
 * 引导应用程序服务
 */
public function boot(): void
{
    Paginator::useBootstrapFive();
    Paginator::useBootstrapFour();
}
</code></pre><p><a name="paginator-instance-methods"></a></p><h2 id="分页器实例方法" tabindex="-1"><a class="header-anchor" href="#分页器实例方法" aria-hidden="true">#</a> 分页器实例方法</h2><p>每一个分页器实例都提供了下列方法来获取分页信息：</p><table><thead><tr><th>方法</th><th>描述</th></tr></thead><tbody><tr><td><code>$paginator-&gt;count()</code></td><td>获取分页的总数据</td></tr><tr><td><code>$paginator-&gt;currentPage()</code></td><td>获取当前页码</td></tr><tr><td><code>$paginator-&gt;firstItem()</code></td><td>获取结果集中第一个数据的编号</td></tr><tr><td><code>$paginator-&gt;getOptions()</code></td><td>获取分页器选项</td></tr><tr><td><code>$paginator-&gt;getUrlRange($start, $end)</code></td><td>创建指定页数范围的 URL</td></tr><tr><td><code>$paginator-&gt;hasPages()</code></td><td>是否有足够多的数据来创建多个页面</td></tr><tr><td><code>$paginator-&gt;hasMorePages()</code></td><td>是否有更多的页面可供展示</td></tr><tr><td><code>$paginator-&gt;items()</code></td><td>获取当前页的数据项</td></tr><tr><td><code>$paginator-&gt;lastItem()</code></td><td>获取结果集中最后一个数据的编号</td></tr><tr><td><code>$paginator-&gt;lastPage()</code></td><td>获取最后一页的页码（在<code>simplePaginate</code>中不可用）</td></tr><tr><td><code>$paginator-&gt;nextPageUrl()</code></td><td>获取下一页的 URL</td></tr><tr><td><code>$paginator-&gt;onFirstPage()</code></td><td>当前页是否为第一页</td></tr><tr><td><code>$paginator-&gt;perPage()</code></td><td>获取每一页显示的数量总数</td></tr><tr><td><code>$paginator-&gt;previousPageUrl()</code></td><td>获取上一页的 URL</td></tr><tr><td><code>$paginator-&gt;total()</code></td><td>获取结果集中的数据总数（在 <code>simplePaginate</code>中不可用）</td></tr><tr><td><code>$paginator-&gt;url($page)</code></td><td>获取指定页的 URL</td></tr><tr><td><code>$paginator-&gt;getPageName()</code></td><td>获取用于储存页码的查询参数名</td></tr><tr><td><code>$paginator-&gt;setPageName($name)</code></td><td>设置用于储存页码的查询参数名</td></tr></tbody></table><p><a name="cursor-paginator-instance-methods"></a></p><h2 id="游标分页器实例方法" tabindex="-1"><a class="header-anchor" href="#游标分页器实例方法" aria-hidden="true">#</a> 游标分页器实例方法</h2><p>每一个分页器实例都提供了下列额外方法来获取分页信息:</p><table><thead><tr><th>方法</th><th>描述</th></tr></thead><tbody><tr><td><code>$paginator-&gt;count()</code></td><td>获取当前页的数据总数</td></tr><tr><td><code>$paginator-&gt;cursor()</code></td><td>获取当前分页实例</td></tr><tr><td><code>$paginator-&gt;getOptions()</code></td><td>获取分页参数选项</td></tr><tr><td><code>$paginator-&gt;hasPages()</code></td><td>判断是否有足够数据用于分页</td></tr><tr><td><code>$paginator-&gt;hasMorePages()</code></td><td>判断数据存储是否还有更多项目</td></tr><tr><td><code>$paginator-&gt;getCursorName()</code></td><td>获取用于查询实例的变量名称</td></tr><tr><td><code>$paginator-&gt;items()</code></td><td>获取当前页面的数据项目</td></tr><tr><td><code>$paginator-&gt;nextCursor()</code></td><td>获取下一页数据实例</td></tr><tr><td><code>$paginator-&gt;nextPageUrl()</code></td><td>获取下一页URL</td></tr><tr><td><code>$paginator-&gt;onFirstPage()</code></td><td>判断页面是否属于第一页</td></tr><tr><td><code>$paginator-&gt;perPage()</code></td><td>每页显示的数据数量</td></tr><tr><td><code>$paginator-&gt;previousCursor()</code></td><td>获取上一页数据实例</td></tr><tr><td><code>$paginator-&gt;previousPageUrl()</code></td><td>获取上一页URL</td></tr><tr><td><code>$paginator-&gt;setCursorName()</code></td><td>设置用于查询实例的变量名称</td></tr><tr><td><code>$paginator-&gt;url($cursor)</code></td><td>获取指定实例的 URL</td></tr></tbody></table>`,9);function x(y,U){const n=r("ExternalLinkIcon");return s(),i("div",null,[p,a("p",null,[e("默认情况下，由分页器生成的 HTML 与 "),a("a",l,[e("Tailwind CSS 框架"),o(n)]),e(" 兼容，然而，引导分页支持也是可用的。")]),u,a("blockquote",null,[a("p",null,[g,h,e(" 手动创建分页器实例时，你应该手动「切片」传递给分页器的结果数组。如果你不确定如何执行此操作，请查看 "),a("a",m,[e("array_slice"),o(n)]),e(" PHP 函数。")])]),v,a("p",null,[e("links 方法会渲染结果集中剩余页面的链接。每个链接都包含了 page 查询字符串变量。请记住，links 方法生成的 HTML 兼容 "),a("a",b,[e("Tailwind CSS 框架"),o(n)]),e(" 。")]),E,a("p",null,[e("默认情况下，分页器渲染的视图与 "),a("a",f,[e("Tailwind CSS"),o(n)]),e(" 兼容。不过，如果你并非使用 Tailwind，你也可以自由地定义用于渲染这些链接的视图。在调用分页器实例的 "),P,e(" 方法时，将视图名称作为第一个参数传递给该方法：")]),k,a("p",null,[e("Laravel 同样包含使用 "),a("a",B,[e("Bootstrap CSS"),o(n)]),e(" 构建的分页视图。要使用这些视图来替代默认的 Tailwind 视图，你可以在 "),_,e(" 服务提供者中的 "),w,e(" 方法内调用分页器的 "),A,e(" 或 "),q,e(" 方法：")]),$])}const C=d(c,[["render",x],["__file","pagination.html.vue"]]);export{C as default};
