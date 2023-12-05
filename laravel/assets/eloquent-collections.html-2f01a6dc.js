import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as d,a as o,b as e}from"./app-8cdff07c.js";const n={},c=o(`<h1 id="eloquent-集合" tabindex="-1"><a class="header-anchor" href="#eloquent-集合" aria-hidden="true">#</a> Eloquent：集合</h1><ul><li><a href="#introduction">介绍</a></li><li><a href="#available-methods">可用的方法</a></li><li><a href="#custom-collections">自定义集合</a></li></ul><p><a name="introduction"></a></p><h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h2><p>所有以多个模型为查询结果的 Eloquent 方法的返回值都是 <code>Illuminate\\Database\\Eloquent\\Collection</code> 类的实例, 其中包括了通过 <code>get</code> 方法和关联关系获取的结果。Eloquent 集合对象扩展了 Laravel 的<a href="./collections">基础集合类</a>，因此它自然地继承了许多用于流畅地处理 Eloquent 模型的底层数组的方法。请务必查看 Laravel 集合文档以了解所有这些有用的方法！</p><p>所有的集合都可作为迭代器，你可以像遍历普通的 PHP 数组一样来遍历它们:</p><pre><code>use App\\Models\\User;

$users = User::where(&#39;active&#39;, 1)-&gt;get();

foreach ($users as $user) {
    echo $user-&gt;name;
}
</code></pre><p>然而，正如前面所提到的，集合远比数组要强大，而且暴露了一系列直观的、可用于链式调用的 map/reduce 方法。打个比方，我们可以删除所有不活跃的模型，然后收集余下的所有用户的名字。</p><pre><code>$names = User::all()-&gt;reject(function (User $user) {
    return $user-&gt;active === false;
})-&gt;map(function (User $user) {
    return $user-&gt;name;
});
</code></pre><p><a name="eloquent-collection-conversion"></a></p><h4 id="eloquent-集合转换" tabindex="-1"><a class="header-anchor" href="#eloquent-集合转换" aria-hidden="true">#</a> Eloquent 集合转换</h4><p>在大多数 Eloquent 集合方法返回一个新的 Eloquent 集合实例的前提下，<code>collapse</code>，<code>flatten</code>，<code>flip</code>， <code>keys</code>，<code>pluck</code>，以及 <code>zip</code> 方法返回一个<a href="./collections">基础集合类</a>的实例。 如果一个 <code>map</code> 方法返回了一个不包含任何模型的 Eloquent 集合，它也会被转换成一个基础集合实例。</p><p><a name="available-methods"></a></p><h2 id="可用的方法" tabindex="-1"><a class="header-anchor" href="#可用的方法" aria-hidden="true">#</a> 可用的方法</h2><p>所有 Eloquent 的集合都继承了 <a href="./collections#available-methods">Laravel collection</a> 对象；因此， 他们也继承了所有集合基类提供的强大的方法。</p><p>另外， <code>Illuminate\\Database\\Eloquent\\Collection</code> 类提供了一套上层的方法来帮你管理你的模型集合。大多数方法返回 <code>Illuminate\\Database\\Eloquent\\Collection</code> 实例；然而，也会有一些方法， 例如 <code>modelKeys</code>， 它们会返回基于 <code>Illuminate\\Support\\Collection</code> 类的实例。</p>`,16),i=e("div",{class:"collection-method-list",markdown:"1"},[e("p",null,[e("a",{href:"#method-append"},"append"),e("a",{href:"#method-contains"},"contains"),e("a",{href:"#method-diff"},"diff"),e("a",{href:"#method-except"},"except"),e("a",{href:"#method-find"},"find"),e("a",{href:"#method-fresh"},"fresh"),e("a",{href:"#method-intersect"},"intersect"),e("a",{href:"#method-load"},"load"),e("a",{href:"#method-loadMissing"},"loadMissing"),e("a",{href:"#method-modelKeys"},"modelKeys"),e("a",{href:"#method-makeVisible"},"makeVisible"),e("a",{href:"#method-makeHidden"},"makeHidden"),e("a",{href:"#method-only"},"only"),e("a",{href:"#method-setVisible"},"setVisible"),e("a",{href:"#method-setHidden"},"setHidden"),e("a",{href:"#method-toquery"},"toQuery"),e("a",{href:"#method-unique"},"unique")])],-1),l=o(`<p><a name="method-append"></a></p><h4 id="append-attributes-collection-method-first-collection-method" tabindex="-1"><a class="header-anchor" href="#append-attributes-collection-method-first-collection-method" aria-hidden="true">#</a> <code>append($attributes)</code> {.collection-method .first-collection-method}</h4><p>可以使用<code>append</code>方法来为集合中的模型<a href="./eloquent-serialization#appending-values-to-json">追加属性</a>。 可以是数组或单个属性追加:</p><pre><code>$users-&gt;append(&#39;team&#39;);

$users-&gt;append([&#39;team&#39;, &#39;is_admin&#39;]);
</code></pre><p><a name="method-contains"></a></p><h4 id="contains-key-operator-null-value-null-collection-method" tabindex="-1"><a class="header-anchor" href="#contains-key-operator-null-value-null-collection-method" aria-hidden="true">#</a> <code>contains($key, $operator = null, $value = null)</code> {.collection-method}</h4><p><code>contains</code> 方法可用于判断集合中是否包含指定的模型实例。这个方法接收一个主键或者模型实例：</p><pre><code>$users-&gt;contains(1);

$users-&gt;contains(User::find(1));
</code></pre><p><a name="method-diff"></a></p><h4 id="diff-items-collection-method" tabindex="-1"><a class="header-anchor" href="#diff-items-collection-method" aria-hidden="true">#</a> <code>diff($items)</code> {.collection-method}</h4><p><code>diff</code> 方法返回不在给定集合中的所有模型：</p><pre><code>use App\\Models\\User;

$users = $users-&gt;diff(User::whereIn(&#39;id&#39;, [1, 2, 3])-&gt;get());
</code></pre><p><a name="method-except"></a></p><h4 id="except-keys-collection-method" tabindex="-1"><a class="header-anchor" href="#except-keys-collection-method" aria-hidden="true">#</a> <code>except($keys)</code> {.collection-method}</h4><p><code>except</code> 方法返回给定主键外的所有模型：</p><pre><code>$users = $users-&gt;except([1, 2, 3]);
</code></pre><p><a name="method-find"></a></p><h4 id="find-key-collection-method" tabindex="-1"><a class="header-anchor" href="#find-key-collection-method" aria-hidden="true">#</a> <code>find($key)</code> {.collection-method}</h4><p><code>find</code> 方法查找给定主键的模型。如果 <code>$key</code> 是一个模型实例， <code>find</code> 将会尝试返回与主键匹配的模型。 如果 <code>$key</code> 是一个关联数组， <code>find</code> 将返回所有数组主键匹配的模型：</p><pre><code>$users = User::all();

$user = $users-&gt;find(1);
</code></pre><p><a name="method-fresh"></a></p><h4 id="fresh-with-collection-method" tabindex="-1"><a class="header-anchor" href="#fresh-with-collection-method" aria-hidden="true">#</a> <code>fresh($with = [])</code> {.collection-method}</h4><p><code>fresh</code> 方法用于从数据库中检索集合中每个模型的新实例。此外，还将加载任何指定的关联关系：</p><pre><code>$users = $users-&gt;fresh();

$users = $users-&gt;fresh(&#39;comments&#39;);
</code></pre><p><a name="method-intersect"></a></p><h4 id="intersect-items-collection-method" tabindex="-1"><a class="header-anchor" href="#intersect-items-collection-method" aria-hidden="true">#</a> <code>intersect($items)</code> {.collection-method}</h4><p><code>intersect</code> 方法返回给定集合与当前模型的交集：</p><pre><code>use App\\Models\\User;

$users = $users-&gt;intersect(User::whereIn(&#39;id&#39;, [1, 2, 3])-&gt;get());
</code></pre><p><a name="method-load"></a></p><h4 id="load-relations-collection-method" tabindex="-1"><a class="header-anchor" href="#load-relations-collection-method" aria-hidden="true">#</a> <code>load($relations)</code> {.collection-method}</h4><p><code>load</code> 方法为集合中的所有模型加载给定关联关系：</p><pre><code>$users-&gt;load([&#39;comments&#39;, &#39;posts&#39;]);

$users-&gt;load(&#39;comments.author&#39;);

$users-&gt;load([&#39;comments&#39;, &#39;posts&#39; =&gt; fn ($query) =&gt; $query-&gt;where(&#39;active&#39;, 1)]);
</code></pre><p><a name="method-loadMissing"></a></p><h4 id="loadmissing-relations-collection-method" tabindex="-1"><a class="header-anchor" href="#loadmissing-relations-collection-method" aria-hidden="true">#</a> <code>loadMissing($relations)</code> {.collection-method}</h4><p>如果尚未加载关联关系，则 <code>loadMissing</code> 方法将加载集合中所有模型的给定关联关系：</p><pre><code>$users-&gt;loadMissing([&#39;comments&#39;, &#39;posts&#39;]);

$users-&gt;loadMissing(&#39;comments.author&#39;);

$users-&gt;loadMissing([&#39;comments&#39;, &#39;posts&#39; =&gt; fn ($query) =&gt; $query-&gt;where(&#39;active&#39;, 1)]);
</code></pre><p><a name="method-modelKeys"></a></p><h4 id="modelkeys-collection-method" tabindex="-1"><a class="header-anchor" href="#modelkeys-collection-method" aria-hidden="true">#</a> <code>modelKeys()</code> {.collection-method}</h4><p><code>modelKeys</code> 方法返回集合中所有模型的主键：</p><pre><code>$users-&gt;modelKeys();

// [1, 2, 3, 4, 5]
</code></pre><p><a name="method-makeVisible"></a></p><h4 id="makevisible-attributes-collection-method" tabindex="-1"><a class="header-anchor" href="#makevisible-attributes-collection-method" aria-hidden="true">#</a> <code>makeVisible($attributes)</code> {.collection-method}</h4><p><code>makeVisible</code> 方法<a href="./eloquent-serialization#hiding-attributes-from-json">使模型上的隐藏属性可见</a> ：</p><pre><code>$users = $users-&gt;makeVisible([&#39;address&#39;, &#39;phone_number&#39;]);
</code></pre><p><a name="method-makeHidden"></a></p><h4 id="makehidden-attributes-collection-method" tabindex="-1"><a class="header-anchor" href="#makehidden-attributes-collection-method" aria-hidden="true">#</a> <code>makeHidden($attributes)</code> {.collection-method}</h4><p><code>makeHidden</code> 方法<a href="./eloquent-serialization#hiding-attributes-from-json">隐藏模型属性</a> ：</p><pre><code>$users = $users-&gt;makeHidden([&#39;address&#39;, &#39;phone_number&#39;]);
</code></pre><p><a name="method-only"></a></p><h4 id="only-keys-collection-method" tabindex="-1"><a class="header-anchor" href="#only-keys-collection-method" aria-hidden="true">#</a> <code>only($keys)</code> {.collection-method}</h4><p><code>only</code> 方法返回具有给定主键的所有模型：</p><pre><code>$users = $users-&gt;only([1, 2, 3]);
</code></pre><p><a name="method-setVisible"></a></p><h4 id="setvisible-attributes-collection-method" tabindex="-1"><a class="header-anchor" href="#setvisible-attributes-collection-method" aria-hidden="true">#</a> <code>setVisible($attributes)</code> {.collection-method}</h4><p><code>setVisible</code>方法<a href="./eloquent-serialization#temporarily-modifying-attribute-visibility">临时覆盖</a>集合中每个模型的所有可见属性:</p><pre><code>$users = $users-&gt;setVisible([&#39;id&#39;, &#39;name&#39;]);
</code></pre><p><a name="method-setHidden"></a></p><h4 id="sethidden-attributes-collection-method" tabindex="-1"><a class="header-anchor" href="#sethidden-attributes-collection-method" aria-hidden="true">#</a> <code>setHidden($attributes)</code> {.collection-method}</h4><p><code>setHidden</code>方法<a href="./eloquent-serialization#temporarily-modifying-attribute-visibility">临时覆盖</a>集合中每个模型的所有隐藏属性:</p><pre><code>$users = $users-&gt;setHidden([&#39;email&#39;, &#39;password&#39;, &#39;remember_token&#39;]);
</code></pre><p><a name="method-toquery"></a></p><h4 id="toquery-collection-method" tabindex="-1"><a class="header-anchor" href="#toquery-collection-method" aria-hidden="true">#</a> <code>toQuery()</code> {.collection-method}</h4><p><code>toQuery</code> 方法返回一个 Eloquent 查询生成器实例，该实例包含集合模型主键上的 <code>whereIn</code> 约束：</p><pre><code>use App\\Models\\User;

$users = User::where(&#39;status&#39;, &#39;VIP&#39;)-&gt;get();

$users-&gt;toQuery()-&gt;update([
    &#39;status&#39; =&gt; &#39;Administrator&#39;,
]);
</code></pre><p><a name="method-unique"></a></p><h4 id="unique-key-null-strict-false-collection-method" tabindex="-1"><a class="header-anchor" href="#unique-key-null-strict-false-collection-method" aria-hidden="true">#</a> <code>unique($key = null, $strict = false)</code> {.collection-method}</h4><p><code>unique</code> 方法返回集合中所有不重复的模型，若模型在集合中存在相同类型且相同主键的另一模型，该模型将被删除：</p><pre><code>$users = $users-&gt;unique();
</code></pre><p><a name="custom-collections"></a></p><h2 id="自定义集合" tabindex="-1"><a class="header-anchor" href="#自定义集合" aria-hidden="true">#</a> 自定义集合</h2><p>如果你想在与模型交互时使用一个自定义的 <code>Collection</code> 对象，你可以通过在模型中定义 <code>newCollection</code> 方法来实现：</p><pre><code>&lt;?php

namespace App\\Models;

use App\\Support\\UserCollection;
use Illuminate\\Database\\Eloquent\\Collection;
use Illuminate\\Database\\Eloquent\\Model;

class User extends Model
{
    /**
     * 创建新的Elquent Collection实例。
     *
     * @param  array&lt;int, \\Illuminate\\Database\\Eloquent\\Model&gt;  $models
     * @return \\Illuminate\\Database\\Eloquent\\Collection&lt;int, \\Illuminate\\Database\\Eloquent\\Model&gt;
     */
    public function newCollection(array $models = []): Collection
    {
        return new UserCollection($models);
    }
}
</code></pre><p>一旦在模型中定义了一个 <code>newCollection</code> 方法，每当 Eloquent 需要返回一个 <code>Illuminate\\Database\\Eloquent\\Collection</code> 实例的时候，将会返回自定义集合的实例取代之。如果你想使每一个模型都使用自定义的集合，可以在一个模型基类中定义一个 <code>newCollection</code> 方法，然后让其它模型派生于此基类。</p>`,73),s=[c,i,l];function r(h,u){return a(),d("div",null,s)}const f=t(n,[["render",r],["__file","eloquent-collections.html.vue"]]);export{f as default};
