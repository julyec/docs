import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as c,o as p,c as d,b as e,d as n,e as a,a as s}from"./app-8cdff07c.js";const r={},i=s('<h1 id="eloquent-关联" tabindex="-1"><a class="header-anchor" href="#eloquent-关联" aria-hidden="true">#</a> Eloquent: 关联</h1><ul><li><a href="#introduction">简介</a></li><li><a href="#defining-relationships">定义关联</a><ul><li><a href="#one-to-one">一对一</a></li><li><a href="#one-to-many">一对多</a></li><li><a href="#one-to-many-inverse">一对多(反向)/属于</a></li><li><a href="#has-one-of-many">一对多检索</a></li><li><a href="#has-one-through">远程一对一</a></li><li><a href="#has-many-through">远程一对多</a></li></ul></li><li><a href="#many-to-many">多对多关联</a><ul><li><a href="#retrieving-intermediate-table-columns">获取中间表字段</a></li><li><a href="#filtering-queries-via-intermediate-table-columns">通过中间表字段过滤查询</a></li><li><a href="#ordering-queries-via-intermediate-table-columns">通过中间表字段排序查询</a></li><li><a href="#defining-custom-intermediate-table-models">自定义中间表模型</a></li></ul></li><li><a href="#polymorphic-relationships">多态关联</a><ul><li><a href="#one-to-one-polymorphic-relations">一对一</a></li><li><a href="#one-to-many-polymorphic-relations">一对多</a></li><li><a href="#one-of-many-polymorphic-relations">一对多检索</a></li><li><a href="#many-to-many-polymorphic-relations">多对多</a></li><li><a href="#custom-polymorphic-types">自定义多态模型</a></li></ul></li><li><a href="#dynamic-relationships">动态关联</a></li><li><a href="#querying-relations">查询关联</a><ul><li><a href="#relationship-methods-vs-dynamic-properties">关联方法与动态属性</a></li><li><a href="#querying-relationship-existence">基于存在的关联查询</a></li><li><a href="#querying-relationship-absence">基于不存在的关联查询</a></li><li><a href="#querying-morph-to-relationships">基于多态的关联查询</a></li></ul></li><li><a href="#aggregating-related-models">统计关联模型</a><ul><li><a href="#counting-related-models">关联模型计数</a></li><li><a href="#other-aggregate-functions">其他统计函数</a></li><li><a href="#counting-related-models-on-morph-to-relationships">多态关联数据计数</a></li></ul></li><li><a href="#eager-loading">预加载</a><ul><li><a href="#constraining-eager-loads">约束预加载</a></li><li><a href="#lazy-eager-loading">延迟预加载</a></li><li><a href="#preventing-lazy-loading">阻止延迟加载</a></li></ul></li><li><a href="#inserting-and-updating-related-models">插入及更新关联模型</a><ul><li><a href="#the-save-method"> save 方法</a></li><li><a href="#the-create-method"> create 方法</a></li><li><a href="#updating-belongs-to-relationships">属于关联</a></li><li><a href="#updating-many-to-many-relationships">多对多关联</a></li></ul></li><li><a href="#touching-parent-timestamps">更新父级时间戳</a></li></ul><p><a name="introduction"></a></p><h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h2><p>数据库表通常相互关联。例如，一篇博客文章可能有许多评论，或者一个订单对应一个下单用户。<code>Eloquent</code> 让这些关联的管理和使用变得简单，并支持多种常用的关联类型：</p>',5),l=e("div",{class:"content-list",markdown:"1"},[e("ul",null,[e("li",null,[e("a",{href:"#one-to-one"},"一对一")]),e("li",null,[e("a",{href:"#one-to-many"},"一对多")]),e("li",null,[e("a",{href:"#many-to-many"},"多对多")]),e("li",null,[e("a",{href:"#has-one-through"},"远程一对一")]),e("li",null,[e("a",{href:"#has-many-through"},"远程一对多")]),e("li",null,[e("a",{href:"#one-to-one-polymorphic-relations"},"多态一对一")]),e("li",null,[e("a",{href:"#one-to-many-polymorphic-relations"},"多态一对多")]),e("li",null,[e("a",{href:"#many-to-many-polymorphic-relations"},"多态多对多")])])],-1),u=s(`<p><a name="defining-relationships"></a></p><h2 id="定义关联" tabindex="-1"><a class="header-anchor" href="#定义关联" aria-hidden="true">#</a> 定义关联</h2><p>Eloquent 关联在 Eloquent 模型类中以方法的形式呈现。如同 Eloquent 模型本身，关联也可以作为强大的<a href="./queries">查询语句构造器</a>，使用，提供了强大的链式调用和查询功能。例如，我们可以在 <code>posts</code> 关联的链式调用中附加一个约束条件：</p><pre><code>$user-&gt;posts()-&gt;where(&#39;active&#39;, 1)-&gt;get();
</code></pre><p>不过在深入使用关联之前，让我们先学习如何定义每种关联类型。</p><p><a name="one-to-one"></a></p><h3 id="一对一" tabindex="-1"><a class="header-anchor" href="#一对一" aria-hidden="true">#</a> 一对一</h3><p>一对一是最基本的数据库关系。 例如，一个 <code>User</code> 模型可能与一个 <code>Phone</code> 模型相关联。为了定义这个关联关系，我们要在 <code>User</code> 模型中写一个 <code>phone</code> 方法。 在 <code>phone</code> 方法中调用 <code>hasOne</code> 方法并返回其结果。 <code>hasOne</code> 方法被定义在 <code>Illuminate\\Database\\Eloquent\\Model</code> 这个模型基类中：</p><pre><code>&lt;?php

namespace App\\Models;

use Illuminate\\Database\\Eloquent\\Model;
use Illuminate\\Database\\Eloquent\\Relations\\HasOne;

class User extends Model
{
    /**
     * 获取与用户相关的电话记录
     */
    public function phone(): HasOne
    {
        return $this-&gt;hasOne(Phone::class);
    }
}
</code></pre><p><code>hasOne</code> 方法的第一个参数是关联模型的类名。一旦定义了模型关联，我们就可以使用 Eloquent 的动态属性获得相关的记录。动态属性允许你访问该关联方法，就像访问模型中定义的属性一样：</p><pre><code>$phone = User::find(1)-&gt;phone;
</code></pre><p>Eloquent 基于父模型 <code>User</code> 的名称来确定关联模型 <code>Phone</code> 的外键名称。在本例中，会自动假定 <code>Phone</code> 模型有一个 <code>user_id</code> 的外键。如果你想重写这个约定，可以传递第二个参数给 <code>hasOne</code> 方法：</p><pre><code>return $this-&gt;hasOne(Phone::class, &#39;foreign_key&#39;);
</code></pre><p>另外，Eloquent 假设外键的值是与父模型的主键（Primary Key）相同的。换句话说，Eloquent 将会通过 <code>Phone</code> 记录的 <code>user_id</code> 列中查找与用户表的 <code>id</code> 列相匹配的值。如果你希望使用自定义的主键值，而不是使用 <code>id</code> 或者模型中的 <code>$primaryKey</code> 属性，你可以给 <code>hasOne</code> 方法传递第三个参数：</p><pre><code>return $this-&gt;hasOne(Phone::class, &#39;foreign_key&#39;, &#39;local_key&#39;);
</code></pre><p><a name="定义反向关联"></a></p><h4 id="定义反向关联" tabindex="-1"><a class="header-anchor" href="#定义反向关联" aria-hidden="true">#</a> 定义反向关联</h4><p>我们已经能从 <code>User</code> 模型访问到 <code>Phone</code> 模型了。接下来，让我们再在 <code>Phone</code> 模型上定义一个关联，它能让我们访问到拥有该电话的用户。我们可以使用 <code>belongsTo</code> 方法来定义反向关联， <code>belongsTo</code> 方法与 <code>hasOne</code> 方法相对应：</p><pre><code>&lt;?php

namespace App\\Models;

use Illuminate\\Database\\Eloquent\\Model;
use Illuminate\\Database\\Eloquent\\Relations\\BelongsTo;

class Phone extends Model
{
    /**
     * 获取拥有此电话的用户
     */
    public function user(): BelongsTo
    {
        return $this-&gt;belongsTo(User::class);
    }
}
</code></pre><p>在调用 <code>user</code> 方法时，Eloquent 会尝试查找一个 <code>User</code> 模型，该 <code>User</code> 模型上的 <code>id</code> 字段会与 <code>Phone</code> 模型上的 <code>user_id</code> 字段相匹配。</p><p>Eloquent 通过关联方法（<code>user</code>）的名称并使用 <code>_id</code> 作为后缀名来确定外键名称。因此，在本例中，Eloquent 会假设 <code>Phone</code> 模型有一个 <code>user_id</code> 字段。但是，如果 <code>Phone</code> 模型的外键不是 <code>user_id</code>，这时你可以给 <code>belongsTo</code> 方法的第二个参数传递一个自定义键名：</p><pre><code>/**
 * 获取拥有此电话的用户
 */
public function user(): BelongsTo
{
    return $this-&gt;belongsTo(User::class, &#39;foreign_key&#39;);
}
</code></pre><p>如果父模型的主键未使用 <code>id</code> 作为字段名，或者你想要使用其他的字段来匹配相关联的模型，那么你可以向 <code>belongsTo</code> 方法传递第三个参数，这个参数是在父模型中自己定义的字段名称：</p><pre><code>/**
 * 获取当前手机号的用户
 */
public function user(): BelongsTo
{
    return $this-&gt;belongsTo(User::class, &#39;foreign_key&#39;, &#39;owner_key&#39;);
}
</code></pre><p><a name="one-to-many"></a></p><h3 id="一对多" tabindex="-1"><a class="header-anchor" href="#一对多" aria-hidden="true">#</a> 一对多</h3><p>当要定义一个模型是其他 （一个或者多个）模型的父模型这种关系时，可以使用一对多关联。例如，一篇博客可以有很多条评论。和其他模型关联一样，一对多关联也是在 Eloquent 模型文件中用一个方法来定义的：</p><pre><code>&lt;?php

namespace App\\Models;

use Illuminate\\Database\\Eloquent\\Model;
use Illuminate\\Database\\Eloquent\\Relations\\HasMany;

class Post extends Model
{
    /**
     * 获取这篇博客的所有评论
     */
    public function comments(): HasMany
    {
        return $this-&gt;hasMany(Comment::class);
    }
}
</code></pre><p>注意，Eloquent 将会自动为 <code>Comment</code> 模型选择一个合适的外键。通常，这个外键是通过使用父模型的「蛇形命名」方式，然后再加上 <code>_id</code>. 的方式来命名的。因此，在上面这个例子中，Eloquent 将会默认 <code>Comment</code> 模型的外键是 <code>post_id</code> 字段。</p><p>如果关联方法被定义，那么我们就可以通过 <code>comments</code> 属性来访问相关的评论 <a href="./eloquent-collections">集合</a>。注意，由于 Eloquent 提供了「动态属性」，所以我们就可以像访问模型属性一样来访问关联方法：</p><pre><code>use App\\Models\\Post;

$comments = Post::find(1)-&gt;comments;

foreach ($comments as $comment) {
    // ...
}
</code></pre><p>由于所有的关系都可以看成是查询构造器，所以你也可以通过链式调用的方式，在 <code>comments</code> 方法中继续添加条件约束：</p><pre><code>$comment = Post::find(1)-&gt;comments()
                    -&gt;where(&#39;title&#39;, &#39;foo&#39;)
                    -&gt;first();
</code></pre><p>像 <code>hasOne</code> 方法一样，你也可以通过将附加参数传递给 <code>hasMany</code> 方法来覆盖外键和本地键：</p><pre><code>return $this-&gt;hasMany(Comment::class, &#39;foreign_key&#39;);

return $this-&gt;hasMany(Comment::class, &#39;foreign_key&#39;, &#39;local_key&#39;);
</code></pre><p><a name="one-to-many-inverse"></a></p><h3 id="一对多-反向-属于" tabindex="-1"><a class="header-anchor" href="#一对多-反向-属于" aria-hidden="true">#</a> 一对多 (反向) / 属于</h3><p>目前我们可以访问一篇文章的所有评论，下面我们可以定义一个关联关系，从而让我们可以通过一条评论来获取到它所属的文章。这个关联关系是 <code>hasMany</code> 的反向，可以在子模型中通过 <code>belongsTo</code> 方法来定义这种关联关系：</p><pre><code>&lt;?php

namespace App\\Models;

use Illuminate\\Database\\Eloquent\\Model;
use Illuminate\\Database\\Eloquent\\Relations\\BelongsTo;

class Comment extends Model
{
    /**
     * 获取这条评论所属的文章。
     */
    public function post(): BelongsTo
    {
        return $this-&gt;belongsTo(Post::class);
    }
}
</code></pre><p>如果定义了这种关联关系，那么我们就可以通过 <code>Comment</code> 模型中的 <code>post</code> 「动态属性」来获取到这条评论所属的文章：</p><pre><code>use App\\Models\\Comment;

$comment = Comment::find(1);

return $comment-&gt;post-&gt;title;
</code></pre><p>在上面这个例子中，Eloquent 将会尝试寻找 <code>Post</code> 模型中的 <code>id</code> 字段与 <code>Comment</code> 模型中的 <code>post_id</code> 字段相匹配。</p><p>Eloquent 通过检查关联方法的名称，从而在关联方法名称后面加上 <code>_</code> ，然后再加上父模型 （Post）的主键名称，以此来作为默认的外键名。因此，在上面这个例子中，Eloquent 将会默认 <code>Post</code> 模型在 <code>comments</code> 表中的外键是 <code>post_id</code>。</p><p>但是，如果你的外键不遵循这种约定的话，那么你可以传递一个自定义的外键名来作为 <code>belongsTo</code> 方法的第二个参数：</p><pre><code>/**
 * 获取这条评论所属的文章。
 */
public function post(): BelongsTo
{
    return $this-&gt;belongsTo(Post::class, &#39;foreign_key&#39;);
}
</code></pre><p>如果你的父表不使用 <code>id</code> 作为主键，或者你希望使用不同的列来关联模型，你可以将第三个参数传递给 <code>belongsTo</code> 方法，指定父表的自定义键：</p><pre><code>/**
 * 获取这条评论所属的文章。
 */
public function post(): BelongsTo
{
    return $this-&gt;belongsTo(Post::class, &#39;foreign_key&#39;, &#39;owner_key&#39;);
}
</code></pre><p><a name="default-models"></a></p><h4 id="默认模型" tabindex="-1"><a class="header-anchor" href="#默认模型" aria-hidden="true">#</a> 默认模型</h4>`,49),h=e("code",null,"belongsTo",-1),m=e("code",null,"hasOne",-1),g=e("code",null,"hasOneThrough",-1),k=e("code",null,"morphOne",-1),b=e("code",null,"null",-1),v={href:"https://en.wikipedia.org/wiki/Null_Object_pattern",target:"_blank",rel:"noopener noreferrer"},y=e("code",null,"Post",-1),f=e("code",null,"user",-1),$=e("code",null,"App\\Models\\User",-1),M=s(`<pre><code>/**
 * 获取文章的作者。
 */
public function user(): BelongsTo
{
    return $this-&gt;belongsTo(User::class)-&gt;withDefault();
}
</code></pre><p>可以向 <code>withDefault</code> 方法传递数组或者闭包来填充默认模型的属性。</p><pre><code>/**
 * 获取文章的作者。
 */
public function user(): BelongsTo
{
    return $this-&gt;belongsTo(User::class)-&gt;withDefault([
        &#39;name&#39; =&gt; &#39;Guest Author&#39;,
    ]);
}

/**
 * 获取文章的作者。
 */
public function user(): BelongsTo
{
    return $this-&gt;belongsTo(User::class)-&gt;withDefault(function (User $user, Post $post) {
        $user-&gt;name = &#39;Guest Author&#39;;
    });
}
</code></pre><p><a name="querying-belongs-to-relationships"></a></p><h4 id="查询所属关系" tabindex="-1"><a class="header-anchor" href="#查询所属关系" aria-hidden="true">#</a> 查询所属关系</h4><p>在查询「所属」的子模型时，可以构建 <code>where</code> 语句来检索相应的 Eloquent 模型：</p><pre><code>use App\\Models\\Post;

$posts = Post::where(&#39;user_id&#39;, $user-&gt;id)-&gt;get();
</code></pre><p>但是，你会发现使用 <code>whereBelongsTo</code> 方法更方便，它会自动确定给定模型的正确关系和外键：</p><pre><code>$posts = Post::whereBelongsTo($user)-&gt;get();
</code></pre><p>你还可以向 <code>whereBelongsTo</code> 方法提供一个 <a href="./eloquent-collections">集合</a> 实例。 这样 Laravel 将检索属于集合中任何父模型的子模型：</p><pre><code>$users = User::where(&#39;vip&#39;, true)-&gt;get();

$posts = Post::whereBelongsTo($users)-&gt;get();
</code></pre><p>默认情况下，Laravel 将根据模型的类名来确定给定模型的关联关系； 你也可以通过将关系名称作为 <code>whereBelongsTo</code> 方法的第二个参数来手动指定关系名称：</p><pre><code>$posts = Post::whereBelongsTo($user, &#39;author&#39;)-&gt;get();
</code></pre><p><a name="has-one-of-many"></a></p><h3 id="一对多检索" tabindex="-1"><a class="header-anchor" href="#一对多检索" aria-hidden="true">#</a> 一对多检索</h3><p>有时一个模型可能有许多相关模型，如果你想很轻松的检索「最新」或「最旧」的相关模型。例如，一个 <code>User</code> 模型可能与许多 <code>Order</code> 模型相关，但你想定义一种方便的方式来与用户最近下的订单进行交互。 可以使用 <code>hasOne</code> 关系类型结合 <code>ofMany</code> 方法来完成此操作：</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token doc-comment comment">/**
 * 获取用户最新的订单。
 */</span>
<span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">latestOrder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token class-name return-type">HasOne</span>
<span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">hasOne</span><span class="token punctuation">(</span><span class="token class-name static-context">Order</span><span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">latestOfMany</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>同样，你可以定义一个方法来检索 「oldest」或第一个相关模型：</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token doc-comment comment">/**
 * 获取用户最早的订单。
 */</span>
<span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">oldestOrder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token class-name return-type">HasOne</span>
<span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">hasOne</span><span class="token punctuation">(</span><span class="token class-name static-context">Order</span><span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">oldestOfMany</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>默认情况下，<code>latestOfMany</code> 和 <code>oldestOfMany</code> 方法将根据模型的主键检索最新或最旧的相关模型，该主键必须是可排序的。 但是，有时你可能希望使用不同的排序条件从更大的关系中检索单个模型。</p><p>例如，使用 <code>ofMany</code> 方法，可以检索用户最昂贵的订单。 <code>ofMany</code> 方法接受可排序列作为其第一个参数，以及在查询相关模型时应用哪个聚合函数（<code>min</code> 或 <code>max</code>）：</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token doc-comment comment">/**
 * 获取用户最昂贵的订单。
 */</span>
<span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">largestOrder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token class-name return-type">HasOne</span>
<span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">hasOne</span><span class="token punctuation">(</span><span class="token class-name static-context">Order</span><span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">ofMany</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;price&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;max&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>注意</strong> 因为 PostgreSQL 不支持对 UUID 列执行 <code>MAX</code> 函数，所以目前无法将一对多关系与 PostgreSQL UUID 列结合使用。</p></blockquote><p><a name="advanced-has-one-of-many-relationships"></a></p><h4 id="进阶一对多检索" tabindex="-1"><a class="header-anchor" href="#进阶一对多检索" aria-hidden="true">#</a> 进阶一对多检索</h4><p>可以构建更高级的「一对多检索」关系。例如，一个 <code>Product</code> 模型可能有许多关联的 <code>Price</code> 模型，即使在新定价发布后，这些模型也会保留在系统中。此外，产品的新定价数据能够通过 <code>published_at</code> 列提前发布，以便在未来某日生效。</p><p>因此，我们需要检索最新的发布定价。 此外，如果两个价格的发布日期相同，我们优先选择 ID 更大的价格。 为此，我们必须将一个数组传递给 <code>ofMany</code> 方法，其中包含确定最新价格的可排序列。此外，将提供一个闭包作为 <code>ofMany</code> 方法的第二个参数。此闭包将负责向关系查询添加额外的发布日期约束：</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token doc-comment comment">/**
 * 获取产品的当前定价。
 */</span>
<span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">currentPricing</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token class-name return-type">HasOne</span>
<span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">hasOne</span><span class="token punctuation">(</span><span class="token class-name static-context">Price</span><span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">ofMany</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
        <span class="token string single-quoted-string">&#39;published_at&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;max&#39;</span><span class="token punctuation">,</span>
        <span class="token string single-quoted-string">&#39;id&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;max&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token class-name type-declaration">Builder</span> <span class="token variable">$query</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token variable">$query</span><span class="token operator">-&gt;</span><span class="token function">where</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;published_at&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;&lt;&#39;</span><span class="token punctuation">,</span> <span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="has-one-through"></a></p><h3 id="远程一对一" tabindex="-1"><a class="header-anchor" href="#远程一对一" aria-hidden="true">#</a> 远程一对一</h3><p>「远程一对一」关联定义了与另一个模型的一对一的关联。然而，这种关联是声明的模型通过第三个模型来与另一个模型的一个实例相匹配。</p><p>例如，在一个汽车维修的应用程序中，每一个 <code>Mechanic</code> 模型都与一个 <code>Car</code> 模型相关联，同时每一个 <code>Car</code> 模型也和一个 <code>Owner</code> 模型相关联。虽然维修师（mechanic）和车主（owner）在数据库中并没有直接的关联，但是维修师可以通过 <code>Car</code> 模型来找到车主。让我们来看看定义这种关联所需要的数据表：</p><pre><code>mechanics
    id - integer
    name - string

cars
    id - integer
    model - string
    mechanic_id - integer

owners
    id - integer
    name - string
    car_id - integer
</code></pre><p>既然我们已经了解了远程一对一的表结构，那么我们就可以在 <code>Mechanic</code> 模型中定义这种关联：</p><pre><code>&lt;?php

namespace App\\Models;

use Illuminate\\Database\\Eloquent\\Model;
use Illuminate\\Database\\Eloquent\\Relations\\HasOneThrough;

class Mechanic extends Model
{
    /**
     * 获取汽车的主人。
     */
    public function carOwner(): HasOneThrough
    {
        return $this-&gt;hasOneThrough(Owner::class, Car::class);
    }
}
</code></pre><p>传递给 <code>hasOneThrough</code> 方法的第一个参数是我们希望访问的最终模型的名称，而第二个参数是中间模型的名称。</p><p>或者，如果相关的关联已经在关联中涉及的所有模型上被定义，你可以通过调用 <code>through</code> 方法和提供这些关联的名称来流式定义一个「远程一对一」关联。例如，<code>Mechanic</code> 模型有一个 <code>cars</code> 关联，<code>Car</code> 模型有一个 <code>owner</code> 关联，你可以这样定义一个连接维修师和车主的「远程一对一」关联：</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token comment">// 基于字符串的语法...</span>
<span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">through</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;cars&#39;</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">has</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;owner&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 动态语法...</span>
<span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">throughCars</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">hasOwner</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="has-one-through-key-conventions"></a></p><h4 id="键名约定" tabindex="-1"><a class="header-anchor" href="#键名约定" aria-hidden="true">#</a> 键名约定</h4><p>当使用远程一对一进行关联查询时，Eloquent 将会使用约定的外键名。如果你想要自定义相关联的键名的话，可以传递两个参数来作为「hasOneThrough」 方法的第三个和第四个参数。第三个参数是中间表的外键名。第四个参数是最终想要访问的模型的外键名。第五个参数是当前模型的本地键名，第六个参数是中间模型的本地键名：</p><pre><code>class Mechanic extends Model
{
    /**
     * Get the car&#39;s owner.
     */
    public function carOwner(): HasOneThrough
    {
        return $this-&gt;hasOneThrough(
            Owner::class,
            Car::class,
            &#39;mechanic_id&#39;, // 机械师表的外键...
            &#39;car_id&#39;, // 车主表的外键...
            &#39;id&#39;, // 机械师表的本地键...
            &#39;id&#39; // 汽车表的本地键...
        );
    }
}
</code></pre><p>如果所涉及的模型已经定义了相关关系，可以调用 <code>through</code> 方法并提供关系名来定义「远程一对一」关联。该方法的优点是重复使用已有关系上定义的主键约定：</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token comment">// 基本语法...</span>
<span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">through</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;cars&#39;</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">has</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;owner&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 动态语法...</span>
<span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">throughCars</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">hasOwner</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="has-many-through"></a></p><h3 id="远程一对多" tabindex="-1"><a class="header-anchor" href="#远程一对多" aria-hidden="true">#</a> 远程一对多</h3>`,46),q={href:"https://vapor.laravel.com",target:"_blank",rel:"noopener noreferrer"},w=e("code",null,"Project",-1),_=e("code",null,"Environment",-1),P=e("code",null,"Deployment",-1),x=s(`<pre><code>projects
    id - integer
    name - string

environments
    id - integer
    project_id - integer
    name - string

deployments
    id - integer
    environment_id - integer
    commit_hash - string
</code></pre><p>既然我们已经检查了关系的表结构，现在让我们在 <code>Project</code> 模型上定义该关系：</p><pre><code>&lt;?php

namespace App\\Models;

use Illuminate\\Database\\Eloquent\\Model;
use Illuminate\\Database\\Eloquent\\Relations\\HasManyThrough;

class Project extends Model
{
    /**
     * 获取该项目的所有部署。
     */
    public function deployments(): HasManyThrough
    {
        return $this-&gt;hasManyThrough(Deployment::class, Environment::class);
    }
}
</code></pre><p><code>hasManyThrough</code> 方法中传递的第一个参数是我们希望访问的最终模型名称，而第二个参数是中间模型的名称。</p><p>或者，所有模型上都定义好了关系，你可以通过调用 <code>through</code> 方法并提供这些关系的名称来定义「has-many-through」关系。例如，如果 <code>Project</code> 模型具有 <code>environments</code> 关系，而 <code>Environment</code> 模型具有 <code>deployments</code> 关系，则可以定义连接 project 和 deployments 的「has-many-through」关系，如下所示：</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token comment">// 基于字符串的语法。。。</span>
<span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">through</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;environments&#39;</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">has</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;deployments&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 动态语法。。。</span>
<span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">throughEnvironments</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">hasDeployments</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>虽然 <code>Deployment</code> 模型的表格不包含 <code>project_id</code> 列，但 <code>hasManyThrough</code> 关系通过 <code>$project-&gt;deployments</code> 提供了访问项目的部署方式。为了检索这些模型，Eloquent 在中间的 <code>Environment</code> 模型表中检查 <code>project_id</code> 列。在找到相关的 environment ID 后，它们被用来查询 <code>Deployment</code> 模型。</p><p><a name="has-many-through-key-conventions"></a></p><h4 id="键名约定-1" tabindex="-1"><a class="header-anchor" href="#键名约定-1" aria-hidden="true">#</a> 键名约定</h4><p>在执行关系查询时，通常会使用典型的 Eloquent 外键约定。如果你想要自定义关系键名，可以将它们作为 <code>hasManyThrough</code> 方法的第三个和第四个参数传递。第三个参数是中间模型上的外键名称。第四个参数是最终模型上的外键名称。第五个参数是本地键，而第六个参数是中间模型的本地键：</p><pre><code>class Project extends Model
{
    public function deployments(): HasManyThrough
    {
        return $this-&gt;hasManyThrough(
            Deployment::class,
            Environment::class,
            &#39;project_id&#39;, // 在 environments 表上的外键...
            &#39;environment_id&#39;, // 在 deployments 表上的外键...
            &#39;id&#39;, // 在 projects 表上的本地键...
            &#39;id&#39; // 在 environments 表格上的本地键...
        );
    }
}
</code></pre><p>或者，如前所述，如果涉及关系的相关关系已经在所有模型上定义，你可以通过调用 <code>through</code> 方法并提供这些关系的名称来定义「has-many-through」关系。这种方法的优点是可以重复使用已经定义在现有关系上的键约定：</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token comment">// 基于字符串的语法。。。</span>
<span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">through</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;environments&#39;</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">has</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;deployments&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 动态语法。。。</span>
<span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">throughEnvironments</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">hasDeployments</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="many-to-many"></a></p><h2 id="多对多关联" tabindex="-1"><a class="header-anchor" href="#多对多关联" aria-hidden="true">#</a> 多对多关联</h2><p>多对多关联比 <code>hasOne</code> 和 <code>hasMany</code> 关联略微复杂。举个例子，一个用户可以拥有多个角色，同时这些角色也可以分配给其他用户。例如，一个用户可是「作者」和「编辑」；当然，这些角色也可以分配给其他用户。所以，一个用户可以拥有多个角色，一个角色可以分配给多个用户。</p><p><a name="many-to-many-table-structure"></a></p><h4 id="表结构" tabindex="-1"><a class="header-anchor" href="#表结构" aria-hidden="true">#</a> 表结构</h4><p>要定义这种关联，需要三个数据库表: <code>users</code>, <code>roles</code> 和 <code>role_user</code>。<code>role_user</code> 表的命名是由关联的两个模型按照字母顺序来的，并且包含了 <code>user_id</code> 和 <code>role_id</code> 字段。该表用作链接 <code>users</code> 和 <code>roles</code> 的中间表</p><p>特别提醒，由于角色可以属于多个用户，因此我们不能简单地在 <code>roles</code> 表上放置 <code>user_id</code> 列。如果这样，这意味着角色只能属于一个用户。为了支持将角色分配给多个用户，需要使用 <code>role_user</code> 表。我们可以这样定义表结构：</p><pre><code>users
    id - integer
    name - string

roles
    id - integer
    name - string

role_user
    user_id - integer
    role_id - integer
</code></pre><p><a name="many-to-many-model-structure"></a></p><h4 id="模型结构" tabindex="-1"><a class="header-anchor" href="#模型结构" aria-hidden="true">#</a> 模型结构</h4><p>多对多关联是通过调用 <code>belongsToMany</code> 方法结果的方法来定义的。 <code>belongsToMany</code> 方法由 <code>Illuminate\\Database\\Eloquent\\Model</code> 基类提供，所有应用程序的 Eloquent 模型都使用该基类。 例如，让我们在 <code>User</code> 模型上定义一个 <code>roles</code> 方法。 传递给此方法的第一个参数是相关模型类的名称：</p><pre><code>&lt;?php

namespace App\\Models;

use Illuminate\\Database\\Eloquent\\Model;
use Illuminate\\Database\\Eloquent\\Relations\\BelongsToMany;

class User extends Model
{
    /**
     * 用户所拥有的角色
     */
    public function roles(): BelongsToMany
    {
        return $this-&gt;belongsToMany(Role::class);
    }
}
</code></pre><p>定义关系后，可以使用 <code>roles</code> 动态关系属性访问用户的角色：</p><pre><code>use App\\Models\\User;

$user = User::find(1);

foreach ($user-&gt;roles as $role) {
    // ...
}
</code></pre><p>由于所有的关系也可以作为查询构建器，你可以通过调用 <code>roles()</code> 方法查询来为关系添加约束：</p><pre><code>$roles = User::find(1)-&gt;roles()-&gt;orderBy(&#39;name&#39;)-&gt;get();
</code></pre><p>为了确定关系的中间表的表名，Eloquent 会按字母顺序连接两个相关的模型名。 你也可以随意覆盖此约定。 通过将第二个参数传递给 <code>belongsToMany</code> 方法来做到这一点：</p><pre><code>return $this-&gt;belongsToMany(Role::class, &#39;role_user&#39;);
</code></pre><p>除了自定义连接表的表名，你还可以通过传递额外的参数到 <code>belongsToMany</code> 方法来定义该表中字段的键名。第三个参数是定义此关联的模型在连接表里的外键名，第四个参数是另一个模型在连接表里的外键名:</p><pre><code>return $this-&gt;belongsToMany(Role::class, &#39;role_user&#39;, &#39;user_id&#39;, &#39;role_id&#39;);
</code></pre><p><a name="many-to-many-defining-the-inverse-of-the-relationship"></a></p><h4 id="定义反向关联-1" tabindex="-1"><a class="header-anchor" href="#定义反向关联-1" aria-hidden="true">#</a> 定义反向关联</h4><p>要定义多对多的反向关联，只需要在关联模型中调用 <code>belongsToMany</code> 方法。我们在 <code>Role</code> 模型中定义 <code>users</code> 方法:</p><pre><code>&lt;?php

namespace App\\Models;

use Illuminate\\Database\\Eloquent\\Model;
use Illuminate\\Database\\Eloquent\\Relations\\BelongsToMany;

class Role extends Model
{
    /**
     * 拥有此角色的用户
     */
    public function users(): BelongsToMany
    {
        return $this-&gt;belongsToMany(User::class);
    }
}
</code></pre><p>如你所见，除了引用 <code>App\\Models\\User</code> 模型之外，该关系的定义与其对应的 <code>User</code> 模型完全相同。 由于我们复用了 <code>belongsToMany</code> 方法，所以在定义多对多关系的「反向」关系时，所有常用的表和键自定义选项都可用。</p><p><a name="retrieving-intermediate-table-columns"></a></p><h3 id="获取中间表字段" tabindex="-1"><a class="header-anchor" href="#获取中间表字段" aria-hidden="true">#</a> 获取中间表字段</h3><p>如上所述，处理多对多关系需要一个中间表。 Eloquent 提供了一些非常有用的方式来与它进行交互。 假设我们的 <code>User</code> 对象关联了多个 <code>Role</code> 对象。在获得这些关联对象后，可以使用模型的 <code>pivot</code> 属性访问中间表的属性：</p><pre><code>use App\\Models\\User;

$user = User::find(1);

foreach ($user-&gt;roles as $role) {
    echo $role-&gt;pivot-&gt;created_at;
}
</code></pre><p>需要注意的是，我们获取的每个 <code>Role</code> 模型对象，都会被自动赋予 <code>pivot</code> 属性，它代表中间表的一个模型对象，并且可以像其他的 Eloquent 模型一样使用。</p><p>默认情况下，<code>pivot</code> 对象只包含两个关联模型的主键，如果你的中间表里还有其他额外字段，你必须在定义关联时明确指出：</p><pre><code>return $this-&gt;belongsToMany(Role::class)-&gt;withPivot(&#39;active&#39;, &#39;created_by&#39;);
</code></pre><p>如果你想让中间表自动维护 <code>created_at</code> 和 <code>updated_at</code> 时间戳，那么在定义关联时附加上 <code>withTimestamps</code> 方法即可：</p><pre><code>return $this-&gt;belongsToMany(Role::class)-&gt;withTimestamps();
</code></pre><blockquote><p><strong>注意</strong> 使用 Eloquent 自动维护时间戳的中间表需要同时具有 <code>created_at</code> 和 <code>updated_at</code>时间戳字段。</p></blockquote><p><a name="customizing-the-pivot-attribute-name"></a></p><h4 id="自定义-pivot-属性名称" tabindex="-1"><a class="header-anchor" href="#自定义-pivot-属性名称" aria-hidden="true">#</a> 自定义 pivot 属性名称</h4><p>如前所述，可以通过 <code>pivot</code> 属性在模型上访问中间表中的属性。 但是，你可以随意自定义此属性的名称，以更好地反映其在应用程序中的用途。</p><p>例如，如果你的应用程序包含可能订阅播客的用户，则用户和播客之间可能存在多对多关系。 如果是这种情况，你可能希望将中间表属性重命名为 <code>subscription</code> 而不是 <code>pivot</code>。 这可以在定义关系时使用 <code>as</code> 方法来完成：</p><pre><code>return $this-&gt;belongsToMany(Podcast::class)
                -&gt;as(&#39;subscription&#39;)
                -&gt;withTimestamps();
</code></pre><p>一旦定义完成，你可以使用自定义名称访问中间表数据：</p><pre><code>$users = User::with(&#39;podcasts&#39;)-&gt;get();

foreach ($users-&gt;flatMap-&gt;podcasts as $podcast) {
    echo $podcast-&gt;subscription-&gt;created_at;
}
</code></pre><p><a name="filtering-queries-via-intermediate-table-columns"></a></p><h3 id="通过中间表过滤查询" tabindex="-1"><a class="header-anchor" href="#通过中间表过滤查询" aria-hidden="true">#</a> 通过中间表过滤查询</h3><p>你还可以在定义关系时使用 <code>wherePivot</code>、<code>wherePivotIn</code>、<code>wherePivotNotIn</code>、<code>wherePivotBetween</code>、<code>wherePivotNotBetween</code>、<code>wherePivotNull</code> 和 <code>wherePivotNotNull</code> 方法过滤 <code>belongsToMany</code> 关系查询返回的结果：</p><pre><code>return $this-&gt;belongsToMany(Role::class)
                -&gt;wherePivot(&#39;approved&#39;, 1);

return $this-&gt;belongsToMany(Role::class)
                -&gt;wherePivotIn(&#39;priority&#39;, [1, 2]);

return $this-&gt;belongsToMany(Role::class)
                -&gt;wherePivotNotIn(&#39;priority&#39;, [1, 2]);

return $this-&gt;belongsToMany(Podcast::class)
                -&gt;as(&#39;subscriptions&#39;)
                -&gt;wherePivotBetween(&#39;created_at&#39;, [&#39;2020-01-01 00:00:00&#39;, &#39;2020-12-31 00:00:00&#39;]);

return $this-&gt;belongsToMany(Podcast::class)
                -&gt;as(&#39;subscriptions&#39;)
                -&gt;wherePivotNotBetween(&#39;created_at&#39;, [&#39;2020-01-01 00:00:00&#39;, &#39;2020-12-31 00:00:00&#39;]);

return $this-&gt;belongsToMany(Podcast::class)
                -&gt;as(&#39;subscriptions&#39;)
                -&gt;wherePivotNull(&#39;expired_at&#39;);

return $this-&gt;belongsToMany(Podcast::class)
                -&gt;as(&#39;subscriptions&#39;)
                -&gt;wherePivotNotNull(&#39;expired_at&#39;);
</code></pre><p><a name="ordering-queries-via-intermediate-table-columns"></a></p><h3 id="通过中间表字段排序" tabindex="-1"><a class="header-anchor" href="#通过中间表字段排序" aria-hidden="true">#</a> 通过中间表字段排序</h3><p>你可以使用 <code>orderByPivot</code> 方法对 <code>belongsToMany</code> 关系查询返回的结果进行排序。在下面的例子中，我们将检索用户的最新徽章：</p><pre><code>return $this-&gt;belongsToMany(Badge::class)
                -&gt;where(&#39;rank&#39;, &#39;gold&#39;)
                -&gt;orderByPivot(&#39;created_at&#39;, &#39;desc&#39;);
</code></pre><p><a name="defining-custom-intermediate-table-models"></a></p><h3 id="自定义中间表模型" tabindex="-1"><a class="header-anchor" href="#自定义中间表模型" aria-hidden="true">#</a> 自定义中间表模型</h3><p>如果你想定义一个自定义模型来表示多对多关系的中间表，你可以在定义关系时调用 <code>using</code> 方法。</p><p>自定义多对多中间表模型都必须继承 <code>Illuminate\\Database\\Eloquent\\Relations\\Pivot</code> 类，自定义多对多（多态）中间表模型必须继承 <code>Illuminate\\Database\\Eloquent\\Relations\\MorphPivot</code> 类。例如，我们在写 <code>Role</code> 模型的关联时，使用自定义中间表模型 <code>RoleUser</code>：</p><pre><code>&lt;?php

namespace App\\Models;

use Illuminate\\Database\\Eloquent\\Model;
use Illuminate\\Database\\Eloquent\\Relations\\BelongsToMany;

class Role extends Model
{
    /**
     * 属于该角色的用户。
     */
    public function users(): BelongsToMany
    {
        return $this-&gt;belongsToMany(User::class)-&gt;using(RoleUser::class);
    }
}
</code></pre><p>当定义 <code>RoleUser</code> 模型时，我们要继承 <code>Illuminate\\Database\\Eloquent\\Relations\\Pivot</code> 类：</p><pre><code>&lt;?php

namespace App\\Models;

use Illuminate\\Database\\Eloquent\\Relations\\Pivot;

class RoleUser extends Pivot
{
    // ...
}
</code></pre><blockquote><p><strong>注意</strong> Pivot 模型不可以使用 <code>SoftDeletes</code> trait。 如果需要软删除数据关联记录，请考虑将数据关联模型转换为实际的 Eloquent 模型。</p></blockquote><p><a name="custom-pivot-models-and-incrementing-ids"></a></p><h4 id="自定义中间模型和自增-id" tabindex="-1"><a class="header-anchor" href="#自定义中间模型和自增-id" aria-hidden="true">#</a> 自定义中间模型和自增 ID</h4><p>如果你用一个自定义的中继模型定义了多对多的关系，而且这个中继模型拥有一个自增的主键，你应当确保这个自定义中继模型类中定义了一个 <code>incrementing</code> 属性且其值为 <code>true</code>。</p><pre><code>/**
 * 标识 ID 是否自增
 *
 * @var bool
 */
public $incrementing = true;
</code></pre><p><a name="polymorphic-relationships"></a></p><h2 id="多态关系" tabindex="-1"><a class="header-anchor" href="#多态关系" aria-hidden="true">#</a> 多态关系</h2><p>多态关联允许子模型使用单个关联属于多种类型的模型。例如，假设你正在构建一个应用程序，允许用户共享博客文章和视频。在这样的应用程序中，<code>Comment</code> 模型可能同时属于 <code>Post</code> 和 <code>Video</code> 模型。</p><p><a name="one-to-one-polymorphic-relations"></a></p><h3 id="一对一-多态" tabindex="-1"><a class="header-anchor" href="#一对一-多态" aria-hidden="true">#</a> 一对一 (多态)</h3><p><a name="one-to-one-polymorphic-table-structure"></a></p><h4 id="表结构-1" tabindex="-1"><a class="header-anchor" href="#表结构-1" aria-hidden="true">#</a> 表结构</h4><p>一对一多态关联类似于典型的一对一关系，但是子模型可以使用单个关联属于多个类型的模型。例如，一个博客 <code>Post</code> 和一个 <code>User</code> 可以共享到一个 <code>Image</code> 模型的多态关联。使用一对一多态关联允许你拥有一个唯一图像的单个表，这些图像可以与帖子和用户关联。首先，让我们查看表结构：</p><pre><code>posts
    id - integer
    name - string

users
    id - integer
    name - string

images
    id - integer
    url - string
    imageable_id - integer
    imageable_type - string
</code></pre><p>请注意 <code>images</code> 表上的 <code>imageable_id</code> 和 <code>imageable_type</code> 两列。<code>imageable_id</code> 列将包含帖子或用户的ID值，而 <code>imageable_type</code> 列将包含父模型的类名。<code>imageable_type</code> 列用于 Eloquent 在访问 <code>imageable</code> 关联时确定要返回哪种类型的父模型。在本例中，该列将包含 <code>App\\Models\\Post</code> 或 <code>App\\Models\\User</code>。</p><p><a name="one-to-one-polymorphic-model-structure"></a></p><h4 id="模型结构-1" tabindex="-1"><a class="header-anchor" href="#模型结构-1" aria-hidden="true">#</a> 模型结构</h4><p>接下来，让我们来看一下构建这个关系所需的模型定义：</p><pre><code>&lt;?php

namespace App\\Models;

use Illuminate\\Database\\Eloquent\\Model;
use Illuminate\\Database\\Eloquent\\Relations\\MorphTo;

class Image extends Model
{
    /**
     * 获取父级 imageable 模型（用户或帖子）。
     */
    public function imageable(): MorphTo
    {
        return $this-&gt;morphTo();
    }
}

use Illuminate\\Database\\Eloquent\\Model;
use Illuminate\\Database\\Eloquent\\Relations\\MorphOne;

class Post extends Model
{
    /**
     * 获取文章图片
     */
    public function image(): MorphOne
    {
        return $this-&gt;morphOne(Image::class, &#39;imageable&#39;);
    }
}

use Illuminate\\Database\\Eloquent\\Model;
use Illuminate\\Database\\Eloquent\\Relations\\MorphOne;

class User extends Model
{
    /**
     * 获取用户的图片。
     */
    public function image(): MorphOne
    {
        return $this-&gt;morphOne(Image::class, &#39;imageable&#39;);
    }
}
</code></pre><p><a name="one-to-one-polymorphic-retrieving-the-relationship"></a></p><h4 id="检索关联关系" tabindex="-1"><a class="header-anchor" href="#检索关联关系" aria-hidden="true">#</a> 检索关联关系</h4><p>一旦定义了表和模型，就可以通过模型访问此关联。比如，要获取文章图片，可以使用 <code>image</code> 动态属性：</p><pre><code>use App\\Models\\Post;

$post = Post::find(1);

$image = $post-&gt;image;
</code></pre><p>还可以通过访问执行 <code>morphTo</code> 调用的方法名来从多态模型中获知父模型。在这个例子中，就是 <code>Image</code> 模型的 <code>imageable</code> 方法。所以，我们可以像动态属性那样访问这个方法：</p><pre><code>use App\\Models\\Image;

$image = Image::find(1);

$imageable = $image-&gt;imageable;
</code></pre><p><code>Image</code> 模型上的 <code>imageable</code> 关系将返回 <code>Post</code> 实例或 <code>User</code> 实例，具体取决于模型拥有图像的类型。</p><p><a name="morph-one-to-one-key-conventions"></a></p><h4 id="键名约定-2" tabindex="-1"><a class="header-anchor" href="#键名约定-2" aria-hidden="true">#</a> 键名约定</h4><p>如有需要，你可以指定多态子模型中使用的 <code>id</code> 和 <code>type</code> 列的名称。 如果这样做，请确保始终将关联名称作为第一个参数传递给 <code>morphTo</code> 方法。 通常，此值应与方法名称匹配，因此你可以使用 PHP 的 <code>__FUNCTION__</code> 常量：</p><pre><code>/**
 * 获取 image 实例所属的模型
 */
public function imageable(): MorphTo
{
    return $this-&gt;morphTo(__FUNCTION__, &#39;imageable_type&#39;, &#39;imageable_id&#39;);
}
</code></pre><p><a name="one-to-many-polymorphic-relations"></a></p><h3 id="一对多-多态" tabindex="-1"><a class="header-anchor" href="#一对多-多态" aria-hidden="true">#</a> 一对多（多态）</h3><p><a name="one-to-many-polymorphic-table-structure"></a></p><h4 id="表结构-2" tabindex="-1"><a class="header-anchor" href="#表结构-2" aria-hidden="true">#</a> 表结构</h4><p>一对多多态关联与简单的一对多关联类似，不过，目标模型可以在一个关联中从属于多个模型。假设应用中的用户可以同时「评论」文章和视频。使用多态关联，可以用单个 <code>comments</code> 表同时满足这些情况。我们还是先来看看用来构建这种关联的表结构：</p><pre><code>posts
    id - integer
    title - string
    body - text

videos
    id - integer
    title - string
    url - string

comments
    id - integer
    body - text
    commentable_id - integer
    commentable_type - string
</code></pre><p><a name="one-to-many-polymorphic-model-structure"></a></p><h4 id="模型结构-2" tabindex="-1"><a class="header-anchor" href="#模型结构-2" aria-hidden="true">#</a> 模型结构</h4><p>接下来，看看构建这种关联的模型定义：</p><pre><code>&lt;?php

namespace App\\Models;

use Illuminate\\Database\\Eloquent\\Model;
use Illuminate\\Database\\Eloquent\\Relations\\MorphTo;

class Comment extends Model
{
    /**
     * 获取拥有此评论的模型（Post 或 Video）。
     */
    public function commentable(): MorphTo
    {
        return $this-&gt;morphTo();
    }
}

use Illuminate\\Database\\Eloquent\\Model;
use Illuminate\\Database\\Eloquent\\Relations\\MorphMany;

class Post extends Model
{
    /**
     * 获取此文章的所有评论
     */
    public function comments(): MorphMany
    {
        return $this-&gt;morphMany(Comment::class, &#39;commentable&#39;);
    }
}

use Illuminate\\Database\\Eloquent\\Model;
use Illuminate\\Database\\Eloquent\\Relations\\MorphMany;

class Video extends Model
{
    /**
     * 获取此视频的所有评论
     */
    public function comments(): MorphMany
    {
        return $this-&gt;morphMany(Comment::class, &#39;commentable&#39;);
    }
}
</code></pre><p><a name="one-to-many-polymorphic-retrieving-the-relationship"></a></p><h4 id="获取关联" tabindex="-1"><a class="header-anchor" href="#获取关联" aria-hidden="true">#</a> 获取关联</h4><p>一旦定义了数据库表和模型，就可以通过模型访问关联。例如，可以使用 <code>comments</code> 动态属性访问文章的全部评论：</p><pre><code>use App\\Models\\Post;

$post = Post::find(1);

foreach ($post-&gt;comments as $comment) {
    // ...
}
</code></pre><p>你还可以通过访问执行对 <code>morphTo</code> 的调用的方法名来从多态模型获取其所属模型。在我们的例子中，这就是 <code>Comment</code> 模型上的 <code>commentable</code> 方法。因此，我们将以动态属性的形式访问该方法：</p><pre><code>use App\\Models\\Comment;

$comment = Comment::find(1);

$commentable = $comment-&gt;commentable;
</code></pre><p><code>Comment</code> 模型的 <code>commentable</code> 关联将返回 <code>Post</code> 或 <code>Video</code> 实例，其结果取决于评论所属的模型。</p><p><a name="one-of-many-polymorphic-relations"></a></p><h3 id="一对多检索-多态" tabindex="-1"><a class="header-anchor" href="#一对多检索-多态" aria-hidden="true">#</a> 一对多检索（多态）</h3><p>有时一个模型可能有许多相关模型，要检索关系的「最新」或「最旧」相关模型。 例如，一个 <code>User</code> 模型可能与许多 <code>Image</code> 模型相关，如果你想自定义一种方便的方式来与用户上传的最新图像进行交互。 可以使用 <code>morphOne</code> 关系类型结合 <code>ofMany</code> 方法来完成此操作：</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token doc-comment comment">/**
 * 获取用户最近上传的图像。
 */</span>
<span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">latestImage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token class-name return-type">MorphOne</span>
<span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">morphOne</span><span class="token punctuation">(</span><span class="token class-name static-context">Image</span><span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;imageable&#39;</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">latestOfMany</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>同样，你也可以定义一个方法来检索关系的「最早」或第一个相关模型：</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token doc-comment comment">/**
 * 获取用户最早上传的图像。
 */</span>
<span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">oldestImage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token class-name return-type">MorphOne</span>
<span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">morphOne</span><span class="token punctuation">(</span><span class="token class-name static-context">Image</span><span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;imageable&#39;</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">oldestOfMany</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>默认情况下，<code>latestOfMany</code> 和 <code>oldestOfMany</code> 方法将基于模型的主键（必须可排序）检索最新或最旧的相关模型。但是，有时你可能希望使用不同的排序条件从较大的关系中检索单个模型。</p><p>例如，使用 <code>ofMany</code> 方法，可以检索用户点赞最高的图像。<code>ofMany</code> 方法接受可排序列作为其第一个参数，以及在查询相关模型时应用哪个聚合函数（<code>min</code> 或 <code>max</code>）：</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token doc-comment comment">/**
 * 获取用户最受欢迎的图像。
 */</span>
<span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">bestImage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token class-name return-type">MorphOne</span>
<span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">morphOne</span><span class="token punctuation">(</span><span class="token class-name static-context">Image</span><span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;imageable&#39;</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">ofMany</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;likes&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;max&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>提示</strong> 要构建更高级的「一对多」关系。 请查看 <a href="#advanced-has-one-of-many-relationships">进阶一对多检索</a>.</p></blockquote><p><a name="many-to-many-polymorphic-relations"></a></p><h3 id="多对多-多态" tabindex="-1"><a class="header-anchor" href="#多对多-多态" aria-hidden="true">#</a> 多对多（多态）</h3><p><a name="many-to-many-polymorphic-table-structure"></a></p><h4 id="表结构-3" tabindex="-1"><a class="header-anchor" href="#表结构-3" aria-hidden="true">#</a> 表结构</h4><p>多对多多态关联比 <code>morphOne</code> 和 <code>morphMany</code> 关联略微复杂一些。例如，<code>Post</code> 和 <code>Video</code> 模型能够共享关联到 <code>Tag</code> 模型的多态关系。在这种情况下使用多对多多态关联允许使用一个唯一标签在博客文章和视频间共享。以下是多对多多态关联的表结构：</p><pre><code>posts
    id - integer
    name - string

videos
    id - integer
    name - string

tags
    id - integer
    name - string

taggables
    tag_id - integer
    taggable_id - integer
    taggable_type - string
</code></pre><blockquote><p><strong>提示</strong> 在深入研究多态多对多关系之前，阅读 <a href="#many-to-many">多对多关系</a> 的文档会对你有帮助。</p></blockquote><p><a name="many-to-many-polymorphic-model-structure"></a></p><h4 id="模型结构-3" tabindex="-1"><a class="header-anchor" href="#模型结构-3" aria-hidden="true">#</a> 模型结构</h4><p>接下来，我们可以定义模型之间的关联。<code>Post</code> 和 <code>Video</code> 模型都将包含一个 <code>tags</code> 方法，该方法调用了基础 Eloquent 模型类提供的 <code>morphToMany</code> 方法。</p><p><code>morphToMany</code> 方法接受相关模型的名称以及“关系名称”。根据我们分配给中间表的名称及其包含的键，我们将将关系称为 「taggable」：</p><pre><code>&lt;?php

namespace App\\Models;

use Illuminate\\Database\\Eloquent\\Model;
use Illuminate\\Database\\Eloquent\\Relations\\MorphToMany;

class Post extends Model
{
    /**
     * 获取帖子的所有标签。
     */
    public function tags(): MorphToMany
    {
        return $this-&gt;morphToMany(Tag::class, &#39;taggable&#39;);
    }
}
</code></pre><p><a name="many-to-many-polymorphic-defining-the-inverse-of-the-relationship"></a></p><h4 id="定义多对多-多态-反向关系" tabindex="-1"><a class="header-anchor" href="#定义多对多-多态-反向关系" aria-hidden="true">#</a> 定义多对多（多态）反向关系</h4><p>接下来, 在这个 <code>Tag</code> 模型中, 你应该为每个可能的父模型定义一个方法. 所以, 在这个例子中, 我们将会定义一个 <code>posts</code> 方法 和 一个 <code>videos</code> 方法. 这两个方法都应该返回 <code>morphedByMany</code> 结果。</p><p><code>morphedByMany</code> 方法接受相关模型的名称以及「关系名称」。根据我们分配给中间表名的名称及其包含的键，我们将该关系称为「taggable」：</p><pre><code>&lt;?php

namespace App\\Models;

use Illuminate\\Database\\Eloquent\\Model;
use Illuminate\\Database\\Eloquent\\Relations\\MorphToMany;

class Tag extends Model
{
    /**
     * 获取分配给此标签的所有帖子。
     */
    public function posts(): MorphToMany
    {
        return $this-&gt;morphedByMany(Post::class, &#39;taggable&#39;);
    }

    /**
     * 获取分配给此视频的所有帖子.
     */
    public function videos(): MorphToMany
    {
        return $this-&gt;morphedByMany(Video::class, &#39;taggable&#39;);
    }
}
</code></pre><p><a name="many-to-many-polymorphic-retrieving-the-relationship"></a></p><h4 id="获取关联-1" tabindex="-1"><a class="header-anchor" href="#获取关联-1" aria-hidden="true">#</a> 获取关联</h4><p>一旦定义了数据库表和模型，你就可以通过模型访问关系。 例如，要访问帖子的所有标签，你可以使用 <code>tags</code> 动态关系属性：</p><pre><code>use App\\Models\\Post;

$post = Post::find(1);

foreach ($post-&gt;tags as $tag) {
    // ...
}
</code></pre><p>还可以访问执行 <code>morphedByMany</code> 方法调用的方法名来从多态模型获取其所属模型。在这个示例中，就是 <code>Tag</code> 模型的 <code>posts</code> 或 <code>videos</code> 方法。可以像动态属性一样访问这些方法：</p><pre><code>use App\\Models\\Tag;

$tag = Tag::find(1);

foreach ($tag-&gt;posts as $post) {
    // ...
}

foreach ($tag-&gt;videos as $video) {
    // ...
}
</code></pre><p><a name="custom-polymorphic-types"></a></p><h3 id="自定义多态类型" tabindex="-1"><a class="header-anchor" href="#自定义多态类型" aria-hidden="true">#</a> 自定义多态类型</h3><p>默认情况下，Laravel 将使用完全限定的类名来存储相关模型的「类型」。 例如，给定上面的一对多关系示例，其中 <code>Comment</code> 模型可能属于 <code>Post</code> 或 <code>Video</code>模型，默认的 <code>commentable_type</code> 将分别是 <code>App\\Models\\Post</code> 或 <code>App\\Models\\Video</code>。 但是，你可能希望将这些值与应用程序的内部结构解耦。</p><p>例如，我们可以使用简单的字符串，例如 <code>post</code> 和 <code>video</code>，而不是使用模型名称作为「类型」。 通过这样做，即使模型被重命名，我们数据库中的多态「类型」列值也将保持有效：</p><pre><code>use Illuminate\\Database\\Eloquent\\Relations\\Relation;

Relation::enforceMorphMap([
    &#39;post&#39; =&gt; &#39;App\\Models\\Post&#39;,
    &#39;video&#39; =&gt; &#39;App\\Models\\Video&#39;,
]);
</code></pre><p>你可以在 <code>App\\Providers\\AppServiceProvider</code> 类的 <code>boot</code> 方法中调用 <code>enforceMorphMap</code> 方法，或者你也可以创建一个单独的服务提供者。</p><p>你可以在运行时使用 <code>getMorphClass</code> 方法确定给定模型的别名。相反，可以使用 <code>Relation::getMorphedModel</code> 方法来确定与别名相关联的类名：</p><pre><code>use Illuminate\\Database\\Eloquent\\Relations\\Relation;

$alias = $post-&gt;getMorphClass();

$class = Relation::getMorphedModel($alias);
</code></pre><blockquote><p><strong>注意</strong> 向现有应用程序添加「变形映射」时，数据库中仍包含完全限定类的每个可变形 <code>*_type</code> 列值都需要转换为其「映射」名称。</p></blockquote><p><a name="dynamic-relationships"></a></p><h3 id="动态关联" tabindex="-1"><a class="header-anchor" href="#动态关联" aria-hidden="true">#</a> 动态关联</h3><p>你可以使用 <code>resolveRelationUsing</code> 方法在运行时定义 Eloquent 模型之间的关系。虽然通常不建议在常规应用程序开发中使用它，但是在开发 Laravel 软件包时，这有时可能会很有用。</p>`,162),T=e("code",null,"resolveRelationUsing",-1),E={href:"https://learnku.com./providersmd/14843",target:"_blank",rel:"noopener noreferrer"},I=e("pre",null,[e("code",null,`use App\\Models\\Order;
use App\\Models\\Customer;

Order::resolveRelationUsing('customer', function (Order $orderModel) {
    return $orderModel->belongsTo(Customer::class, 'customer_id');
});
`)],-1),D=e("blockquote",null,[e("p",null,[e("strong",null,"注意"),e("br"),n(" 定义动态关系时，始终为 Eloquent 关系方法提供显式的键名参数。")])],-1),A=e("p",null,[e("a",{name:"querying-relations"})],-1),B=e("h2",{id:"查询关联",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#查询关联","aria-hidden":"true"},"#"),n(" 查询关联")],-1),O={href:"https://learnku.com./queriesmd/14883",target:"_blank",rel:"noopener noreferrer"},C=e("p",null,[n("例如，假设有一个博客系统，它的 "),e("code",null,"User"),n(" 模型有许多关联的 "),e("code",null,"Post"),n(" 模型:")],-1),U=e("pre",null,[e("code",null,`<?php

namespace App\\Models;

use Illuminate\\Database\\Eloquent\\Model;
use Illuminate\\Database\\Eloquent\\Relations\\HasMany;

class User extends Model
{
    /**
     * 获取该用户的所有文章.
     */
    public function posts(): HasMany
    {
        return $this->hasMany(Post::class);
    }
}
`)],-1),R=e("p",null,[n("你可以查询 "),e("code",null,"posts"),n(" 关联，并给它添加额外的约束条件，如下例所示:")],-1),H=e("pre",null,[e("code",null,`use App\\Models\\User;

$user = User::find(1);

$user->posts()->where('active', 1)->get();
`)],-1),L={href:"https://learnku.com./queriesmd/14883",target:"_blank",rel:"noopener noreferrer"},N=s(`<p><a name="chaining-orwhere-clauses-after-relationships"></a></p><h4 id="在关联之后链式添加-orwhere-子句" tabindex="-1"><a class="header-anchor" href="#在关联之后链式添加-orwhere-子句" aria-hidden="true">#</a> 在关联之后链式添加 <code>orWhere</code> 子句</h4><p>如上例所示，你可以在查询关联时，自由的给关联添加额外的约束条件。但是，在将 <code>orWhere</code> 子句链接到关联上时，一定要小心，因为 <code>orWhere</code> 子句将在逻辑上与关联约束处于同一级别：</p><pre><code>$user-&gt;posts()
        -&gt;where(&#39;active&#39;, 1)
        -&gt;orWhere(&#39;votes&#39;, &#39;&gt;=&#39;, 100)
        -&gt;get();
</code></pre><p>上面的例子将生成以下 SQL。像你看到的那样， 这个 <code>or</code> 子句的查询指令，将返回大于 100 票的任一用户，查询不再限于特定的用户：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> <span class="token operator">*</span>
<span class="token keyword">from</span> posts
<span class="token keyword">where</span> user_id <span class="token operator">=</span> ? <span class="token operator">and</span> active <span class="token operator">=</span> <span class="token number">1</span> <span class="token operator">or</span> votes <span class="token operator">&gt;=</span> <span class="token number">100</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),V={href:"https://learnku.com./queriesmd/14883#logical-grouping",target:"_blank",rel:"noopener noreferrer"},F=s(`<pre><code>use Illuminate\\Database\\Eloquent\\Builder;

$user-&gt;posts()
        -&gt;where(function (Builder $query) {
            return $query-&gt;where(&#39;active&#39;, 1)
                         -&gt;orWhere(&#39;votes&#39;, &#39;&gt;=&#39;, 100);
        })
        -&gt;get();
</code></pre><p>上面的示例将生成以下 SQL。 请注意，逻辑分组已正确分组约束，并且查询仍然受限于特定用户：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> <span class="token operator">*</span>
<span class="token keyword">from</span> posts
<span class="token keyword">where</span> user_id <span class="token operator">=</span> ? <span class="token operator">and</span> <span class="token punctuation">(</span>active <span class="token operator">=</span> <span class="token number">1</span> <span class="token operator">or</span> votes <span class="token operator">&gt;=</span> <span class="token number">100</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="relationship-methods-vs-dynamic-properties"></a></p><h3 id="关联方法-vs-动态属性" tabindex="-1"><a class="header-anchor" href="#关联方法-vs-动态属性" aria-hidden="true">#</a> 关联方法 VS 动态属性</h3><p>如果你不需要向 Eloquent 关联查询添加额外的约束，你可以像访问属性一样访问关联。 例如，继续使用我们的 <code>User</code> 和 <code>Post</code> 示例模型，我们可以像这样访问用户的所有帖子：</p><pre><code>use App\\Models\\User;

$user = User::find(1);

foreach ($user-&gt;posts as $post) {
    // ...
}
</code></pre><p>动态属性是 「懒加载」 的，只有实际访问到才会加载关联数据。因此，通常用 <a href="#eager-loading">预加载</a> 来准备模型需要用到的关联数据。预加载能大量减少因加载模型关联执行的 SQL 语句。</p><p><a name="querying-relationship-existence"></a></p><h3 id="基于存在的关联查询" tabindex="-1"><a class="header-anchor" href="#基于存在的关联查询" aria-hidden="true">#</a> 基于存在的关联查询</h3><p>在检索模型记录时，你可能希望基于关系的存在限制结果。例如，假设你想检索至少有一条评论的所有博客文章。为了实现这一点，你可以将关系名称传递给 <code>has</code> 和 <code>orHas</code> 方法：</p><pre><code>use App\\Models\\Post;

// 检索所有至少有一条评论的文章...
$posts = Post::has(&#39;comments&#39;)-&gt;get();
</code></pre><p>也可以指定运算符和数量来进一步自定义查询：</p><pre><code>// 检索所有有三条或更多评论的文章...
$posts = Post::has(&#39;comments&#39;, &#39;&gt;=&#39;, 3)-&gt;get();
</code></pre><p>可以使用用「.」语法构造嵌套的 <code>has</code> 语句。例如，你可以检索包含至少一张图片的评论的所有文章：</p><pre><code>// 查出至少有一条带图片的评论的文章...
$posts = Post::has(&#39;comments.images&#39;)-&gt;get();
</code></pre><p>如果你需要更多的功能，你可以使用 <code>whereHas</code> 和 <code>orWhereHas</code> 方法在 <code>has</code> 查询中定义额外的查询约束，例如检查评论的内容：</p><pre><code>use Illuminate\\Database\\Eloquent\\Builder;

// 检索至少有一条评论包含类似于 code% 单词的文章...
$posts = Post::whereHas(&#39;comments&#39;, function (Builder $query) {
    $query-&gt;where(&#39;content&#39;, &#39;like&#39;, &#39;code%&#39;);
})-&gt;get();

// 检索至少有十条评论包含类似于 code% 单词的文章...
$posts = Post::whereHas(&#39;comments&#39;, function (Builder $query) {
    $query-&gt;where(&#39;content&#39;, &#39;like&#39;, &#39;code%&#39;);
}, &#39;&gt;=&#39;, 10)-&gt;get();
</code></pre><blockquote><p><strong>注意</strong> Eloquent 目前不支持跨数据库查询关系是否存在。 这些关系必须存在于同一数据库中。</p></blockquote><p><a name="inline-relationship-existence-queries"></a></p><h4 id="内联关系存在查询" tabindex="-1"><a class="header-anchor" href="#内联关系存在查询" aria-hidden="true">#</a> 内联关系存在查询</h4><p>如果你想使用附加到关系查询简单的 where 条件来确认关系是否存在，使用 <code>whereRelation</code>, <code>orWhereRelation</code>, <code>whereMorphRelation</code>和 <code>orWhereMorphRelation</code> 方法更方便. 例如，查询所有评论未获批准的帖子:</p><pre><code>use App\\Models\\Post;

$posts = Post::whereRelation(&#39;comments&#39;, &#39;is_approved&#39;, false)-&gt;get();
</code></pre><p>当然，就像调用查询构建器的 <code>where</code> 方法一样，你也可以指定一个运算符：</p><pre><code>$posts = Post::whereRelation(
    &#39;comments&#39;, &#39;created_at&#39;, &#39;&gt;=&#39;, now()-&gt;subHour()
)-&gt;get();
</code></pre><p><a name="querying-relationship-absence"></a></p><h3 id="查询不存在的关联" tabindex="-1"><a class="header-anchor" href="#查询不存在的关联" aria-hidden="true">#</a> 查询不存在的关联</h3><p>检索模型记录时，你可能会根据不存在关系来限制结果。例如，要检索所有<strong>没有</strong>任何评论的所有博客文章。 可以将关系的名称传递给 <code>doesntHave</code> 和 <code>orDoesntHave</code> 方法：</p><pre><code>use App\\Models\\Post;

$posts = Post::doesntHave(&#39;comments&#39;)-&gt;get();
</code></pre><p>如果需要更多功能，可以使用 <code>whereDoesntHave</code> 和 <code>orWhereDoesntHave</code> 方法将「where」 条件加到 <code>doesntHave</code> 查询上。这些方法允许你向关联加入自定义限制，比如检测评论内容：</p><pre><code>use Illuminate\\Database\\Eloquent\\Builder;

$posts = Post::whereDoesntHave(&#39;comments&#39;, function (Builder $query) {
    $query-&gt;where(&#39;content&#39;, &#39;like&#39;, &#39;code%&#39;);
})-&gt;get();
</code></pre><p>你可以使用「点」符号对嵌套关系执行查询。例如，以下查询将检索所有没有评论的帖子；但是，有未被禁止的作者评论的帖子将包含在结果中:</p><pre><code>use Illuminate\\Database\\Eloquent\\Builder;

$posts = Post::whereDoesntHave(&#39;comments.author&#39;, function (Builder $query) {
    $query-&gt;where(&#39;banned&#39;, 0);
})-&gt;get();
</code></pre><p><a name="querying-morph-to-relationships"></a></p><h3 id="查询多态关联" tabindex="-1"><a class="header-anchor" href="#查询多态关联" aria-hidden="true">#</a> 查询多态关联</h3><p>要查询「多态关联」的存在，可以使用 <code>whereHasMorph</code> 和 <code>whereDoesntHaveMorph</code> 方法。这些方法接受关联名称作为它们的第一个参数。接下来，这些方法接受你希望在查询中包含的相关模型的名称。最后，你可以提供一个闭包来自定义关联查询。</p><pre><code>use App\\Models\\Comment;
use App\\Models\\Post;
use App\\Models\\Video;
use Illuminate\\Database\\Eloquent\\Builder;

// 检索与标题类似于 code% 的帖子或视频相关的评论。
$comments = Comment::whereHasMorph(
    &#39;commentable&#39;,
    [Post::class, Video::class],
    function (Builder $query) {
        $query-&gt;where(&#39;title&#39;, &#39;like&#39;, &#39;code%&#39;);
    }
)-&gt;get();

// 检索与标题不类似于 code% 的帖子相关的评论。
$comments = Comment::whereDoesntHaveMorph(
    &#39;commentable&#39;,
    Post::class,
    function (Builder $query) {
        $query-&gt;where(&#39;title&#39;, &#39;like&#39;, &#39;code%&#39;);
    }
)-&gt;get();
</code></pre><p>你可能需要根据相关多态模型的「类型」添加查询约束。传递给 <code>whereHasMorph</code> 方法的闭包可以接收 <code>$type</code> 值作为其第二个参数。此参数允许你检查正在构建的查询的「类型」：</p><pre><code>use Illuminate\\Database\\Eloquent\\Builder;

$comments = Comment::whereHasMorph(
    &#39;commentable&#39;,
    [Post::class, Video::class],
    function (Builder $query, string $type) {
        $column = $type === Post::class ? &#39;content&#39; : &#39;title&#39;;

        $query-&gt;where($column, &#39;like&#39;, &#39;code%&#39;);
    }
)-&gt;get();
</code></pre><p><a name="querying-all-morph-to-related-models"></a></p><h4 id="查询所有相关模型" tabindex="-1"><a class="header-anchor" href="#查询所有相关模型" aria-hidden="true">#</a> 查询所有相关模型</h4><p>你可以使用通配符 <code>*</code> 代替多态模型的数组，这将告诉 Laravel 从数据库中检索所有可能的多态类型。为了执行此操作，Laravel 将执行额外的查询：</p><pre><code>use Illuminate\\Database\\Eloquent\\Builder;

$comments = Comment::whereHasMorph(&#39;commentable&#39;, &#39;*&#39;, function (Builder $query) {
    $query-&gt;where(&#39;title&#39;, &#39;like&#39;, &#39;foo%&#39;);
})-&gt;get();
</code></pre><p><a name="aggregating-related-models"></a></p><h2 id="聚合相关模型" tabindex="-1"><a class="header-anchor" href="#聚合相关模型" aria-hidden="true">#</a> 聚合相关模型</h2><p><a name="counting-related-models"></a></p><h3 id="计算相关模型的数量" tabindex="-1"><a class="header-anchor" href="#计算相关模型的数量" aria-hidden="true">#</a> 计算相关模型的数量</h3><p>有时候你可能想要计算给定关系的相关模型的数量，而不实际加载模型。为了实现这一点，你可以使用 <code>withCount</code> 方法。<code>withCount</code> 方法将在生成的模型中放置一个 <code>{relation}_count</code> 属性：</p><pre><code>use App\\Models\\Post;

$posts = Post::withCount(&#39;comments&#39;)-&gt;get();

foreach ($posts as $post) {
    echo $post-&gt;comments_count;
}
</code></pre><p>通过将数组传递给 withCount 方法，你可以同时添加多个关系的 &quot;计数&quot;，并向查询添加其他约束：</p><pre><code>use Illuminate\\Database\\Eloquent\\Builder;

$posts = Post::withCount([&#39;votes&#39;, &#39;comments&#39; =&gt; function (Builder $query) {
    $query-&gt;where(&#39;content&#39;, &#39;like&#39;, &#39;code%&#39;);
}])-&gt;get();

echo $posts[0]-&gt;votes_count;
echo $posts[0]-&gt;comments_count;
</code></pre><p>你还可以给关系计数结果起别名，从而在同一关系上进行多个计数：</p><pre><code>use Illuminate\\Database\\Eloquent\\Builder;

$posts = Post::withCount([
    &#39;comments&#39;,
    &#39;comments as pending_comments_count&#39; =&gt; function (Builder $query) {
        $query-&gt;where(&#39;approved&#39;, false);
    },
])-&gt;get();

echo $posts[0]-&gt;comments_count;
echo $posts[0]-&gt;pending_comments_count;
</code></pre><p><a name="deferred-count-loading"></a></p><h4 id="延迟计数加载" tabindex="-1"><a class="header-anchor" href="#延迟计数加载" aria-hidden="true">#</a> 延迟计数加载</h4><p>使用 <code>loadCount</code> 方法，你可以在获取父模型后加载关系计数：</p><pre><code>$book = Book::first();

$book-&gt;loadCount(&#39;genres&#39;);
</code></pre><p>如果你需要在计数查询上设置其他查询约束，你可以传递一个以你想要计数的关系为键的数组。数组的值应该是接收查询构建器实例的闭包：</p><pre><code>$book-&gt;loadCount([&#39;reviews&#39; =&gt; function (Builder $query) {
    $query-&gt;where(&#39;rating&#39;, 5);
}])
</code></pre><p><a name="relationship-counting-and-custom-select-statements"></a></p><h4 id="关联计数和自定义查询字段" tabindex="-1"><a class="header-anchor" href="#关联计数和自定义查询字段" aria-hidden="true">#</a> 关联计数和自定义查询字段</h4><p>如果你的查询同时包含 <code>withCount</code> 和 <code>select</code>，请确保 <code>withCount</code> 一定在 <code>select</code> 之后调用：</p><pre><code>$posts = Post::select([&#39;title&#39;, &#39;body&#39;])
                -&gt;withCount(&#39;comments&#39;)
                -&gt;get();
</code></pre><p><a name="other-aggregate-functions"></a></p><h3 id="其他聚合函数" tabindex="-1"><a class="header-anchor" href="#其他聚合函数" aria-hidden="true">#</a> 其他聚合函数</h3><p>除了 <code>withCount</code> 方法外，Eloquent 还提供了 <code>withMin</code>, <code>withMax</code>, <code>withAvg</code> 和 <code>withSum</code> 等聚合方法。 这些方法会通过 <code>{relation}_{function}_{column}</code> 的命名方式将聚合结果添加到获取到的模型属性中：</p><pre><code>use App\\Models\\Post;

$posts = Post::withSum(&#39;comments&#39;, &#39;votes&#39;)-&gt;get();

foreach ($posts as $post) {
    echo $post-&gt;comments_sum_votes;
}
</code></pre><p>如果你想使用其他名称访问聚合函数的结果，可以自定义的别名：</p><pre><code>$posts = Post::withSum(&#39;comments as total_comments&#39;, &#39;votes&#39;)-&gt;get();

foreach ($posts as $post) {
    echo $post-&gt;total_comments;
}
</code></pre><p>与 <code>loadCount</code> 方法类似，这些方法也有延迟调用的方法。这些延迟方法可在已获取到的 Eloquent 模型上调用：</p><pre><code>$post = Post::first();

$post-&gt;loadSum(&#39;comments&#39;, &#39;votes&#39;);
</code></pre><p>如果你将这些聚合方法和一个 <code>select</code> 语句组合在一起，确保你在 <code>select</code> 方法之后调用聚合方法:</p><pre><code>$posts = Post::select([&#39;title&#39;, &#39;body&#39;])
                -&gt;withExists(&#39;comments&#39;)
                -&gt;get();
</code></pre><p><a name="counting-related-models-on-morph-to-relationships"></a></p><h3 id="多态关联计数" tabindex="-1"><a class="header-anchor" href="#多态关联计数" aria-hidden="true">#</a> 多态关联计数</h3><p>如果你想预加载多态关联关系以及这个关联关系关联的其他关联关系的计数统计，可以通过将 <code>with</code> 方法与 <code>morphTo</code> 关系和 <code>morphWithCount</code> 方法结合来实现。</p><p>在这个例子中，我们假设 <code>Photo</code> 和 <code>Post</code> 模型可以创建 <code>ActivityFeed</code> 模型。 我们将假设 <code>ActivityFeed</code>模型定义了一个名为<code>parentable</code>的多态关联关系，它允许我们为给定的 <code>ActivityFeed</code> 实例检索父级 <code>Photo</code> 或 <code>Post</code> 模型。 此外，让我们假设 <code>Photo</code> 模型有很多 <code>Tag</code> 模型、<code>Post</code> 模型有很多 <code>Comment</code> 模型。</p><p>假如我们想要检索 <code>ActivityFeed</code> 实例并为每个 <code>ActivityFeed</code> 实例预先加载 <code>parentable</code> 父模型。 此外，我们想要检索与每张父照片关联的标签数量以及与每个父帖子关联的评论数量：</p><pre><code>use Illuminate\\Database\\Eloquent\\Relations\\MorphTo;

$activities = ActivityFeed::with([
    &#39;parentable&#39; =&gt; function (MorphTo $morphTo) {
        $morphTo-&gt;morphWithCount([
            Photo::class =&gt; [&#39;tags&#39;],
            Post::class =&gt; [&#39;comments&#39;],
        ]);
    }])-&gt;get();
</code></pre><p><a name="morph-to-deferred-count-loading"></a></p><h4 id="延迟计数加载-1" tabindex="-1"><a class="header-anchor" href="#延迟计数加载-1" aria-hidden="true">#</a> 延迟计数加载</h4><p>假设我们已经检索了一组 <code>ActivityFeed</code> 模型，现在我们想要加载与活动提要关联的各种 <code>parentable</code> 模型的嵌套关系计数。 可以使用 <code>loadMorphCount</code> 方法来完成此操作：</p><pre><code>$activities = ActivityFeed::with(&#39;parentable&#39;)-&gt;get();

$activities-&gt;loadMorphCount(&#39;parentable&#39;, [
    Photo::class =&gt; [&#39;tags&#39;],
    Post::class =&gt; [&#39;comments&#39;],
]);
</code></pre><p><a name="eager-loading"></a></p><h2 id="预加载" tabindex="-1"><a class="header-anchor" href="#预加载" aria-hidden="true">#</a> 预加载</h2><p>当将 Eloquent 关系作为属性访问时，相关模型是延迟加载的。 这意味着在你第一次访问该属性之前不会实际加载关联数据。 但是，Eloquent 可以在查询父模型时主动加载关联关系。 预加载减轻了 <code>N + 1</code> 查询问题。 为了说明 <code>N + 1</code> 查询问题，请参考属于 <code>Author</code> 模型的 <code>Book</code> 模型：</p><pre><code>&lt;?php

namespace App\\Models;

use Illuminate\\Database\\Eloquent\\Model;
use Illuminate\\Database\\Eloquent\\Relations\\BelongsTo;

class Book extends Model
{
    /**
     * 获取写了这本书的作者。
     */
    public function author(): BelongsTo
    {
        return $this-&gt;belongsTo(Author::class);
    }
}
</code></pre><p>现在，让我们检索所有书籍及其作者：</p><pre><code>use App\\Models\\Book;

$books = Book::all();

foreach ($books as $book) {
    echo $book-&gt;author-&gt;name;
}
</code></pre><p>该循环将执行一个查询以检索数据库表中的所有书籍，然后对每本书执行另一个查询以检索该书的作者。 因此，如果我们有 25 本书，上面的代码将运行 26 个查询：一个查询原本的书籍信息，另外 25 个查询来检索每本书的作者。</p><p>值得庆幸的是，我们可以使用预加载将这个操作减少到两个查询。 在构建查询时，可以使用 <code>with</code> 方法指定应该预加载哪些关系：</p><pre><code>$books = Book::with(&#39;author&#39;)-&gt;get();

foreach ($books as $book) {
    echo $book-&gt;author-&gt;name;
}
</code></pre><p>对于此操作，将只执行两个查询 - 一个查询检索书籍，一个查询检索所有书籍的作者：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> books

<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> authors <span class="token keyword">where</span> id <span class="token operator">in</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="eager-loading-multiple-relationships"></a></p><h4 id="预加载多个关联" tabindex="-1"><a class="header-anchor" href="#预加载多个关联" aria-hidden="true">#</a> 预加载多个关联</h4><p>有时，你可能需要在单一操作中预加载几个不同的关联。要达成此目的，只要向 <code>with</code> 方法传递多个关联名称构成的数组参数：</p><pre><code>$books = Book::with([&#39;author&#39;, &#39;publisher&#39;])-&gt;get();
</code></pre><p><a name="nested-eager-loading"></a></p><h4 id="嵌套预加载" tabindex="-1"><a class="header-anchor" href="#嵌套预加载" aria-hidden="true">#</a> 嵌套预加载</h4><p>可以使用 「.」 语法预加载嵌套关联。比如在一个 Eloquent 语句中预加载所有书籍作者及其联系方式：</p><pre><code>$books = Book::with(&#39;author.contacts&#39;)-&gt;get();
</code></pre><p>另外，你可以通过向 <code>with</code> 方法提供嵌套数组来指定嵌套的预加载关系，这在预加载多个嵌套关系时非常方便。</p><pre><code>$books = Book::with([
    &#39;author&#39; =&gt; [
        &#39;contacts&#39;,
        &#39;publisher&#39;,
    ],
])-&gt;get();
</code></pre><p><a name="nested-eager-loading-morphto-relationships"></a></p><h4 id="嵌套预加载-morphto-关联" tabindex="-1"><a class="header-anchor" href="#嵌套预加载-morphto-关联" aria-hidden="true">#</a> 嵌套预加载 <code>morphTo</code> 关联</h4><p>如果你希望加载一个 <code>morphTo</code> 关系，以及该关系可能返回的各种实体的嵌套关系，可以将 <code>with</code> 方法与 <code>morphTo</code> 关系的 <code>morphWith</code> 方法结合使用。为了说明这种方法，让我们参考以下模型：</p><pre><code>&lt;?php

use Illuminate\\Database\\Eloquent\\Model;
use Illuminate\\Database\\Eloquent\\Relations\\MorphTo;

class ActivityFeed extends Model
{
    /**
     * 获取活动记录的父记录。
     */
    public function parentable(): MorphTo
    {
        return $this-&gt;morphTo();
    }
}
</code></pre><p>在这个例子中，我们假设 <code>Event</code>，<code>Photo</code> 和 <code>Post</code> 模型可以创建 <code>ActivityFeed</code> 模型。 另外，我们假设 <code>Event</code> 模型属于 <code>Calendar</code> 模型，<code>Photo</code> 模型与 <code>Tag</code> 模型相关联，<code>Post</code> 模型属于 <code>Author</code> 模型。</p><p>使用这些模型定义和关联，我们可以查询 <code>ActivityFeed</code> 模型实例并预加载所有 <code>parentable</code> 模型及其各自的嵌套关系：</p><pre><code>use Illuminate\\Database\\Eloquent\\Relations\\MorphTo;

$activities = ActivityFeed::query()
    -&gt;with([&#39;parentable&#39; =&gt; function (MorphTo $morphTo) {
        $morphTo-&gt;morphWith([
            Event::class =&gt; [&#39;calendar&#39;],
            Photo::class =&gt; [&#39;tags&#39;],
            Post::class =&gt; [&#39;author&#39;],
        ]);
    }])-&gt;get();
</code></pre><p><a name="eager-loading-specific-columns"></a></p><h4 id="预加载指定列" tabindex="-1"><a class="header-anchor" href="#预加载指定列" aria-hidden="true">#</a> 预加载指定列</h4><p>并不是总需要获取关系的每一列。在这种情况下，Eloquent 允许你为关联指定想要获取的列:</p><pre><code>$books = Book::with(&#39;author:id,name,book_id&#39;)-&gt;get();
</code></pre><blockquote><p><strong>注意</strong> 使用此功能时，应始终在要检索的列列表中包括 <code>id</code> 列和任何相关的外键列。</p></blockquote><p><a name="eager-loading-by-default"></a></p><h4 id="默认预加载" tabindex="-1"><a class="header-anchor" href="#默认预加载" aria-hidden="true">#</a> 默认预加载</h4><p>有时可能希望在查询模型时始终加载某些关联。 为此，你可以在模型上定义 <code>$with</code> 属性</p><pre><code>&lt;?php

namespace App\\Models;

use Illuminate\\Database\\Eloquent\\Model;
use Illuminate\\Database\\Eloquent\\Relations\\BelongsTo;

class Book extends Model
{
    /**
     * 默认预加载的关联。
     *
     * @var array
     */
    protected $with = [&#39;author&#39;];

    /**
     * 获取书籍作者。
     */
    public function author(): BelongsTo
    {
        return $this-&gt;belongsTo(Author::class);
    }

    /**
     * 获取书籍类型。
     */
    public function genre(): BelongsTo
    {
        return $this-&gt;belongsTo(Genre::class);
    }
}
</code></pre><p>如果你想从单个查询的 <code>$with</code> 属性中删除一个预加载，你可以使用 <code>without</code> 方法：</p><pre><code>$books = Book::without(&#39;author&#39;)-&gt;get();
</code></pre><p>如果你想要覆盖 <code>$with</code> 属性中所有项，仅针对单个查询，你可以使用 <code>withOnly</code> 方法：</p><pre><code>$books = Book::withOnly(&#39;genre&#39;)-&gt;get();
</code></pre><p><a name="constraining-eager-loads"></a></p><h3 id="约束预加载" tabindex="-1"><a class="header-anchor" href="#约束预加载" aria-hidden="true">#</a> 约束预加载</h3><p>有时，你可能希望预加载一个关联，同时为预加载查询添加额外查询条件。你可以通过将一个关联数组传递给 <code>with</code> 方法来实现这一点，其中数组键是关联名称，数组值是一个闭包，它为预先加载查询添加了额外的约束：</p><pre><code>use App\\Models\\User;

$users = User::with([&#39;posts&#39; =&gt; function (Builder $query) {
    $query-&gt;where(&#39;title&#39;, &#39;like&#39;, &#39;%code%&#39;);
}])-&gt;get();
</code></pre><p>在这个例子中，Eloquent 只会预加载帖子的 <code>title</code> 列包含单词 <code>code</code> 的帖子。 你可以调用其他 <a href="./queries">查询构造器</a> 方法来自定义预加载操作：</p><pre><code>$users = User::with([&#39;posts&#39; =&gt; function (Builder $query) {
    $query-&gt;orderBy(&#39;created_at&#39;, &#39;desc&#39;);
}])-&gt;get();
</code></pre><blockquote><p><strong>注意</strong> 在约束预加载时，不能使用 limit 和 take 查询构造器方法。</p></blockquote><p><a name="constraining-eager-loading-of-morph-to-relationships"></a></p><h4 id="morphto-关联预加载添加约束" tabindex="-1"><a class="header-anchor" href="#morphto-关联预加载添加约束" aria-hidden="true">#</a> <code>morphTo</code> 关联预加载添加约束</h4><p>如果你在使用 Eloquent 进行 <code>morphTo</code> 关联的预加载时，Eloquent 将运行多个查询以获取每种类型的相关模型。你可以使用 <code>MorphTo</code> 关联的 <code>constrain</code> 方法向每个查询添加附加约束条件：</p><pre><code>use Illuminate\\Database\\Eloquent\\Builder;
use Illuminate\\Database\\Eloquent\\Relations\\MorphTo;

$comments = Comment::with([&#39;commentable&#39; =&gt; function (MorphTo $morphTo) {
    $morphTo-&gt;constrain([
        Post::class =&gt; function (Builder $query) {
            $query-&gt;whereNull(&#39;hidden_at&#39;);
        },
        Video::class =&gt; function (Builder $query) {
            $query-&gt;where(&#39;type&#39;, &#39;educational&#39;);
        },
    ]);
}])-&gt;get();
</code></pre><p>在这个例子中，Eloquent 只会预先加载未被隐藏的帖子，并且视频的 <code>type</code> 值为 <code>educational</code>。</p><p><a name="constraining-eager-loads-with-relationship-existence"></a></p><h4 id="基于存在限制预加载" tabindex="-1"><a class="header-anchor" href="#基于存在限制预加载" aria-hidden="true">#</a> 基于存在限制预加载</h4><p>有时候，你可能需要同时检查关系的存在性并根据相同条件加载关系。例如，你可能希望仅查询具有符合给定条件的子模型 <code>Post</code> 的 <code>User</code> 模型，同时也预加载匹配的文章。你可以使用 Laravel 中的 <code>withWhereHas</code> 方法来实现这一点。</p><pre><code>use App\\Models\\User;
use Illuminate\\Database\\Eloquent\\Builder;

$users = User::withWhereHas(&#39;posts&#39;, function (Builder $query) {
    $query-&gt;where(&#39;featured&#39;, true);
})-&gt;get();
</code></pre><p><a name="lazy-eager-loading"></a></p><h3 id="延迟预加载" tabindex="-1"><a class="header-anchor" href="#延迟预加载" aria-hidden="true">#</a> 延迟预加载</h3><p>有时你可能需要在查询父模型之后预加载关联。例如，如果你需要动态地决定是否加载相关模型，则这可能非常有用：</p><pre><code>use App\\Models\\Book;

$books = Book::all();

if ($someCondition) {
    $books-&gt;load(&#39;author&#39;, &#39;publisher&#39;);
}
</code></pre><p>如果要在渴求式加载的查询语句中进行条件约束，可以通过数组的形式去加载，键为对应的关联关系，值为 <code>Closure</code> 闭包函数，该闭包的参数为一个查询实例：</p><pre><code>$author-&gt;load([&#39;books&#39; =&gt; function (Builder $query) {
    $query-&gt;orderBy(&#39;published_date&#39;, &#39;asc&#39;);
}]);
</code></pre><p>如果希望仅加载未被加载的关联关系时，你可以使用 <code>loadMissing</code> 方法：</p><pre><code>$book-&gt;loadMissing(&#39;author&#39;);
</code></pre><p><a name="nested-lazy-eager-loading-morphto"></a></p><h4 id="嵌套延迟预加载-morphto" tabindex="-1"><a class="header-anchor" href="#嵌套延迟预加载-morphto" aria-hidden="true">#</a> 嵌套延迟预加载 &amp; <code>morphTo</code></h4><p>如果要预加载 <code>morphTo</code> 关系，以及该关系可能返回的各种实体上的嵌套关系，你可以使用 <code>loadMorph</code> 方法。</p><p>这个方法接受 <code>morphTo</code> 关系的名称作为它的第一个参数，第二个参数接收模型数组、关系数组。例如:</p><pre><code>&lt;?php

use Illuminate\\Database\\Eloquent\\Model;
use Illuminate\\Database\\Eloquent\\Relations\\MorphTo;

class ActivityFeed extends Model
{
    /**
     * 获取活动提要记录的父项。
     */
    public function parentable(): MorphTo
    {
        return $this-&gt;morphTo();
    }
}
</code></pre><p>在这个例子中，让我们假设 <code>Event</code> 、<code>Photo</code> 和 <code>Post</code> 模型可以创建 <code>ActivityFeed</code> 模型。此外，让我们假设 <code>Event</code> 模型属于 <code>Calendar</code> 模型，<code>Photo</code> 模型与 <code>Tag</code> 模型相关联，<code>Post</code> 模型属于 <code>Author</code> 模型。</p><p>使用这些模型定义和关联关系，我们方可以检索 <code>ActivityFeed</code> 模型实例，并立即加载所有 <code>parentable</code> 模型及其各自的嵌套关系：</p><pre><code>$activities = ActivityFeed::with(&#39;parentable&#39;)
    -&gt;get()
    -&gt;loadMorph(&#39;parentable&#39;, [
        Event::class =&gt; [&#39;calendar&#39;],
        Photo::class =&gt; [&#39;tags&#39;],
        Post::class =&gt; [&#39;author&#39;],
    ]);
</code></pre><p><a name="preventing-lazy-loading"></a></p><h3 id="防止延迟加载" tabindex="-1"><a class="header-anchor" href="#防止延迟加载" aria-hidden="true">#</a> 防止延迟加载</h3><p>如前所述，预加载关系可以为应用程序提供显著的性能优势。 但你也可以指示 Laravel 始终防止延迟加载关系。 你可以调用基本 Eloquent 模型类提供的 <code>preventLazyLoading</code> 方法。 通常，你应该在应用程序的 <code>AppServiceProvider</code> 类的 <code>boot</code> 方法中调用此方法。</p><p><code>preventLazyLoading</code> 方法接受一个可选的布尔类型的参数，表示是否阻止延迟加载。例如，你可能希望只在非生产环境中禁用延迟加载，这样即使在生产环境代码中意外出现了延迟加载关系，你的生产环境也能继续正常运行。</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Database<span class="token punctuation">\\</span>Eloquent<span class="token punctuation">\\</span>Model</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * 引导应用程序服务。
 */</span>
<span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">boot</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">void</span>
<span class="token punctuation">{</span>
    <span class="token class-name static-context">Model</span><span class="token operator">::</span><span class="token function">preventLazyLoading</span><span class="token punctuation">(</span><span class="token operator">!</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">app</span><span class="token operator">-&gt;</span><span class="token function">isProduction</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在阻止延迟加载之后，当你的应用程序尝试延迟加载任何 Eloquent 关系时，Eloquent 将抛出 <code>Illuminate\\Database\\LazyLoadingViolationException</code> 异常。</p><p>你可以使用 <code>handleLazyLoadingViolationsUsing</code> 方法自定义延迟加载的违规行为。例如，使用此方法，你可以指示违规行为只被记录，而不是使用异常中断应用程序的执行：</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token class-name static-context">Model</span><span class="token operator">::</span><span class="token function">handleLazyLoadingViolationUsing</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token class-name type-declaration">Model</span> <span class="token variable">$model</span><span class="token punctuation">,</span> <span class="token keyword type-hint">string</span> <span class="token variable">$relation</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token variable">$class</span> <span class="token operator">=</span> <span class="token function">get_class</span><span class="token punctuation">(</span><span class="token variable">$model</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token function">info</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;Attempted to lazy load [<span class="token interpolation"><span class="token punctuation">{</span><span class="token variable">$relation</span><span class="token punctuation">}</span></span>] on model [<span class="token interpolation"><span class="token punctuation">{</span><span class="token variable">$class</span><span class="token punctuation">}</span></span>].&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="inserting-and-updating-related-models"></a></p><h2 id="插入-更新关联模型" tabindex="-1"><a class="header-anchor" href="#插入-更新关联模型" aria-hidden="true">#</a> 插入 &amp; 更新关联模型</h2><p><a name="the-save-method"></a></p><h3 id="save-方法" tabindex="-1"><a class="header-anchor" href="#save-方法" aria-hidden="true">#</a> <code>save</code> 方法</h3><p>Eloquent 提供了向关系中添加新模型的便捷方法。例如，你可能需要向一篇文章（<code>Post</code> 模型）添加一条新的评论（<code>Comment</code> 模型），你不用手动设置 <code>Comment</code> 模型上的 <code>post_id</code> 属性，你可以直接使用关联模型中的 <code>save</code> 方法：</p><pre><code>use App\\Models\\Comment;
use App\\Models\\Post;

$comment = new Comment([&#39;message&#39; =&gt; &#39;A new comment.&#39;]);

$post = Post::find(1);

$post-&gt;comments()-&gt;save($comment);
</code></pre><p>注意，我们没有将 <code>comments</code> 关联作为动态属性访问，相反，我们调用了 <code>comments</code> 方法来来获得关联实例， <code>save</code> 方法会自动添加适当的 <code>post_id</code> 值到新的 <code>Comment</code> 模型中。</p><p>如果需要保存多个关联模型，你可以使用 <code>saveMany</code> 方法：</p><pre><code>$post = Post::find(1);

$post-&gt;comments()-&gt;saveMany([
    new Comment([&#39;message&#39; =&gt; &#39;A new comment.&#39;]),
    new Comment([&#39;message&#39; =&gt; &#39;Another new comment.&#39;]),
]);
</code></pre><p><code>save</code> 和 <code>saveMany</code> 方法不会将新模型（<code>Comment</code>）加载到父模型（<code>Post</code>) 上， 如果你计划在使用 <code>save</code> 或 <code>saveMany</code> 方法后访问该关联模型（<code>Comment</code>），你需要使用 <code>refresh</code> 方法重新加载模型及其关联，这样你就可以访问到所有评论，包括新保存的评论了：</p><pre><code>$post-&gt;comments()-&gt;save($comment);

$post-&gt;refresh();

// 所有评论，包括新保存的评论...
$post-&gt;comments;
</code></pre><p><a name="the-push-method"></a></p><h4 id="递归保存模型和关联数据" tabindex="-1"><a class="header-anchor" href="#递归保存模型和关联数据" aria-hidden="true">#</a> 递归保存模型和关联数据</h4><p>如果你想 <code>save</code> 模型及其所有关联数据，你可以使用 <code>push</code> 方法，在此示例中，将保存 <code>Post</code> 模型及其评论和评论作者：</p><pre><code>$post = Post::find(1);

$post-&gt;comments[0]-&gt;message = &#39;Message&#39;;
$post-&gt;comments[0]-&gt;author-&gt;name = &#39;Author Name&#39;;

$post-&gt;push();
</code></pre><p><code>pushQuietly</code> 方法可用于保存模型及其关联关系，而不触发任何事件：</p><pre><code>$post-&gt;pushQuietly();
</code></pre><p><a name="the-create-method"></a></p><h3 id="create-方法" tabindex="-1"><a class="header-anchor" href="#create-方法" aria-hidden="true">#</a> <code>create</code> 方法</h3><p>除了 <code>save</code> 和 <code>saveMany</code> 方法外，你还可以使用 <code>create</code> 方法。它接受一个属性数组，同时会创建模型并插入到数据库中。 还有， <code>save</code> 和 <code>create</code> 方法的不同之处在于， <code>save</code> 方法接受一个完整的 Eloquent 模型实例，而 <code>create</code> 则接受普通的 PHP 数组：</p><pre><code>use App\\Models\\Post;

$post = Post::find(1);

$comment = $post-&gt;comments()-&gt;create([
    &#39;message&#39; =&gt; &#39;A new comment.&#39;,
]);
</code></pre><p>你还可以使用 <code>createMany</code> 方法去创建多个关联模型：</p><pre><code>$post = Post::find(1);

$post-&gt;comments()-&gt;createMany([
    [&#39;message&#39; =&gt; &#39;A new comment.&#39;],
    [&#39;message&#39; =&gt; &#39;Another new comment.&#39;],
]);
</code></pre><p>还可以使用 <code>createQuietly</code> 和 <code>createManyQuietly</code>方法创建模型，而无需调度任何事件：</p><pre><code>$user = User::find(1);

$user-&gt;posts()-&gt;createQuietly([
    &#39;title&#39; =&gt; &#39;Post title.&#39;,
]);

$user-&gt;posts()-&gt;createManyQuietly([
    [&#39;title&#39; =&gt; &#39;First post.&#39;],
    [&#39;title&#39; =&gt; &#39;Second post.&#39;],
]);
</code></pre><p>你还可以使用 <code>findOrNew</code>, <code>firstOrNew</code>, <code>firstOrCreate</code> 和 <code>updateOrCreate</code> 方法来 <a href="./eloquent#upserts">创建和更新关系模型</a>。</p><blockquote><p><strong>注意</strong>：在使用 <code>create</code> 方法前，请务必确保查看过本文档的 <a href="./eloquent#mass-assignment">批量赋值</a> 章节。</p></blockquote><p><a name="updating-belongs-to-relationships"></a></p><h3 id="belongs-to-关联" tabindex="-1"><a class="header-anchor" href="#belongs-to-关联" aria-hidden="true">#</a> Belongs To 关联</h3><p>如果你想将子模型分配给新的父模型，你可以使用 <code>associate</code> 方法。在这个例子中，<code>User</code> 模型定义了一个与 <code>Account</code> 模型的 <code>belongsTo</code> 关系。 这个 <code>associate</code> 方法将在子模型上设置外键：</p><pre><code>use App\\Models\\Account;

$account = Account::find(10);

$user-&gt;account()-&gt;associate($account);

$user-&gt;save();
</code></pre><p>要从子模型中删除父模型，你可以使用 <code>dissociate</code> 方法。此方法会将关联外键设置为 <code>null</code>：</p><pre><code>$user-&gt;account()-&gt;dissociate();

$user-&gt;save();
</code></pre><p><a name="updating-many-to-many-relationships"></a></p><h3 id="多对多关联-1" tabindex="-1"><a class="header-anchor" href="#多对多关联-1" aria-hidden="true">#</a> 多对多关联</h3><p><a name="attaching-detaching"></a></p><h4 id="附加-分离" tabindex="-1"><a class="header-anchor" href="#附加-分离" aria-hidden="true">#</a> 附加 / 分离</h4><p>Eloquent 也提供了一些额外的辅助方法，使相关模型的使用更加方便。例如，我们假设一个用户可以拥有多个角色，并且每个角色都可以被多个用户共享。给某个用户附加一个角色是通过向中间表插入一条记录实现的，可以使用 <code>attach</code> 方法完成该操作：</p><pre><code>use App\\Models\\User;

$user = User::find(1);

$user-&gt;roles()-&gt;attach($roleId);
</code></pre><p>在将关系附加到模型时，还可以传递一组要插入到中间表中的附加数据：</p><pre><code>$user-&gt;roles()-&gt;attach($roleId, [&#39;expires&#39; =&gt; $expires]);
</code></pre><p>当然，有时也需要移除用户的角色。可以使用 <code>detach</code> 移除多对多关联记录。<code>detach</code> 方法将会移除中间表对应的记录。但是这两个模型都将会保留在数据库中:</p><pre><code>// 移除用户的一个角色...
$user-&gt;roles()-&gt;detach($roleId);

// 移除用户的所有角色...
$user-&gt;roles()-&gt;detach();
</code></pre><p>为了方便起见，<code>attach</code> 和 <code>detach</code> 也允许传递一个 IDs 数组：</p><pre><code>$user = User::find(1);

$user-&gt;roles()-&gt;detach([1, 2, 3]);

$user-&gt;roles()-&gt;attach([
    1 =&gt; [&#39;expires&#39; =&gt; $expires],
    2 =&gt; [&#39;expires&#39; =&gt; $expires],
]);
</code></pre><p><a name="syncing-associations"></a></p><h4 id="同步关联" tabindex="-1"><a class="header-anchor" href="#同步关联" aria-hidden="true">#</a> 同步关联</h4><p>你也可以使用 <code>sync</code> 方法构建多对多关联。<code>sync</code> 方法接收一个 IDs 数组以替换中间表的记录。中间表记录中，所有未在 IDs 数组中的记录都将会被移除。所以该操作结束后，只有给出数组的 IDs 会被保留在中间表中：</p><pre><code>$user-&gt;roles()-&gt;sync([1, 2, 3]);
</code></pre><p>你也可以通过 IDs 传递额外的附加数据到中间表：</p><pre><code>$user-&gt;roles()-&gt;sync([1 =&gt; [&#39;expires&#39; =&gt; true], 2, 3]);
</code></pre><p>如果你想为每个同步的模型 IDs 插入相同的中间表，你可以使用 <code>syncWithPivotValues</code> 方法：</p><pre><code>$user-&gt;roles()-&gt;syncWithPivotValues([1, 2, 3], [&#39;active&#39; =&gt; true]);
</code></pre><p>如果你不想移除现有的 IDs，可以使用 <code>syncWithoutDetaching</code> 方法：</p><pre><code>$user-&gt;roles()-&gt;syncWithoutDetaching([1, 2, 3]);
</code></pre><p><a name="toggling-associations"></a></p><h4 id="切换关联" tabindex="-1"><a class="header-anchor" href="#切换关联" aria-hidden="true">#</a> 切换关联</h4><p>多对多关联也提供了 <code>toggle</code> 方法用于「切换」给定 ID 数组的附加状态。 如果给定的 ID 已被附加在中间表中，那么它将会被移除，同样，如果给定的 ID 已被移除，它将会被附加：</p><pre><code>$user-&gt;roles()-&gt;toggle([1, 2, 3]);
</code></pre><p>你还可以将附加的中间表值与ID 一起传递：</p><pre><code>$user-&gt;roles()-&gt;toggle([
    1 =&gt; [&#39;expires&#39; =&gt; true],
    2 =&gt; [&#39;expires&#39; =&gt; true],
]);
</code></pre><p><a name="updating-a-record-on-the-intermediate-table"></a></p><h4 id="更新中间表上的记录" tabindex="-1"><a class="header-anchor" href="#更新中间表上的记录" aria-hidden="true">#</a> 更新中间表上的记录</h4><p>如果你需要在中间表中更新一条已存在的记录，可以使用 <code>updateExistingPivot</code> 方法。 此方法接收中间表的外键与要更新的数据数组进行更新：</p><pre><code>$user = User::find(1);

$user-&gt;roles()-&gt;updateExistingPivot($roleId, [
    &#39;active&#39; =&gt; false,
]);
</code></pre><p><a name="touching-parent-timestamps"></a></p><h2 id="更新父级时间戳" tabindex="-1"><a class="header-anchor" href="#更新父级时间戳" aria-hidden="true">#</a> 更新父级时间戳</h2><p>当一个模型属 <code>belongsTo</code> 或者 <code>belongsToMany</code> 另一个模型时， 例如 <code>Comment</code> 属于 <code>Post</code> ，有时更新子模型导致更新父模型时间戳非常有用。</p><p>例如，当 <code>Comment</code> 模型被更新时，你需要自动「触发」父级 <code>Post</code> 模型的 <code>updated_at</code> 时间戳的更新。<code>Eloquent</code> 让它变得简单。只要在子模型加一个包含关联名称的 <code>touches</code> 属性即可：:</p><pre><code>&lt;?php

namespace App\\Models;

use Illuminate\\Database\\Eloquent\\Model;
use Illuminate\\Database\\Eloquent\\Relations\\BelongsTo;

class Comment extends Model
{
    /**
     * 需要触发的所有关联关系。
     *
     * @var array
     */
    protected $touches = [&#39;post&#39;];

    /**
     * 获取评论所属文章。
     */
    public function post(): BelongsTo
    {
        return $this-&gt;belongsTo(Post::class);
    }
}
</code></pre><blockquote><p><strong>注意</strong>：只有使用 <code>Eloquent</code> 的 <code>save</code> 方法更新子模型时，才会触发更新父模型时间戳。</p></blockquote>`,235);function W(S,j){const o=c("ExternalLinkIcon");return p(),d("div",null,[i,l,u,e("p",null,[n("当 "),h,n("，"),m,n("，"),g,n(" 和 "),k,n(" 这些关联方法返回 "),b,n(" 的时候，你可以定义一个默认的模型返回。该模式通常被称为 "),e("a",v,[n("空对象模式"),a(o)]),n("，它可以帮你省略代码中的一些条件判断。在下面这个例子中，如果 "),y,n(" 模型中没有用户，那么 "),f,n(" 关联关系将会返回一个空的 "),$,n(" 模型：")]),M,e("p",null,[n("「远程一对多」关联是可以通过中间关系来实现远程一对多的。例如，我们正在构建一个像 "),e("a",q,[n("Laravel Vapor"),a(o)]),n("这样的部署平台。一个 "),w,n(" 模型可以通过一个中间的 "),_,n(" 模型来访问许多个 "),P,n(" 模型。就像上面的这个例子，可以在给定的 environment 中很方便的获取所有的 deployments。下面是定义这种关联关系所需要的数据表：")]),x,e("p",null,[T,n(" 方法的第一个参数是关联名称。传递给该方法的第二个参数应该是一个闭包，闭包接受模型实例并返回一个有效的 Eloquent 关联定义。通常情况下，你应该在"),e("a",E,[n("服务提供器"),a(o)]),n("的启动方法中配置动态关联:")]),I,D,A,B,e("p",null,[n("因为所有的 Eloquent 关联都是通过方法定义的，你可以调用这些方法来获取关联的实例，而无需真实执行查询来获取相关的模型。此外，所有的 Eloquent 关联也可以用作"),e("a",O,[n("查询构造器"),a(o)]),n("，允许你在最终对数据库执行 SQL 查询之前，继续通过链式调用添加约束条件。")]),C,U,R,H,e("p",null,[n("你可以在关联上使用任意的 [查询构造器]("),e("a",L,[n("查询构造器 | 《Laravel 10 中文文档》 (learnku.com)"),a(o)]),n(") 方法，所以一定要阅读查询构造器的文档，了解它的所有方法，这会对你非常有用。")]),N,e("p",null,[n("在大多数情况下，你应该使用 [逻辑分组]("),e("a",V,[n("查询构造器 | 《Laravel 10 中文文档》 (learnku.com)"),a(o)]),n(") 在括号中对条件检查进行分组：")]),F])}const G=t(r,[["render",W],["__file","eloquent-relationships.html.vue"]]);export{G as default};
