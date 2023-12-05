import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as n,a as o,b as e}from"./app-8cdff07c.js";const i={},d=o(`<h1 id="eloquent-collections" tabindex="-1"><a class="header-anchor" href="#eloquent-collections" aria-hidden="true">#</a> Eloquent: Collections</h1><ul><li><a href="#introduction">Introduction</a></li><li><a href="#available-methods">Available Methods</a></li><li><a href="#custom-collections">Custom Collections</a></li></ul><p><a name="introduction"></a></p><h2 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h2><p>All Eloquent methods that return more than one model result will return instances of the <code>Illuminate\\Database\\Eloquent\\Collection</code> class, including results retrieved via the <code>get</code> method or accessed via a relationship. The Eloquent collection object extends Laravel&#39;s <a href="./collections">base collection</a>, so it naturally inherits dozens of methods used to fluently work with the underlying array of Eloquent models. Be sure to review the Laravel collection documentation to learn all about these helpful methods!</p><p>All collections also serve as iterators, allowing you to loop over them as if they were simple PHP arrays:</p><pre><code>use App\\Models\\User;

$users = User::where(&#39;active&#39;, 1)-&gt;get();

foreach ($users as $user) {
    echo $user-&gt;name;
}
</code></pre><p>However, as previously mentioned, collections are much more powerful than arrays and expose a variety of map / reduce operations that may be chained using an intuitive interface. For example, we may remove all inactive models and then gather the first name for each remaining user:</p><pre><code>$names = User::all()-&gt;reject(function (User $user) {
    return $user-&gt;active === false;
})-&gt;map(function (User $user) {
    return $user-&gt;name;
});
</code></pre><p><a name="eloquent-collection-conversion"></a></p><h4 id="eloquent-collection-conversion" tabindex="-1"><a class="header-anchor" href="#eloquent-collection-conversion" aria-hidden="true">#</a> Eloquent Collection Conversion</h4><p>While most Eloquent collection methods return a new instance of an Eloquent collection, the <code>collapse</code>, <code>flatten</code>, <code>flip</code>, <code>keys</code>, <code>pluck</code>, and <code>zip</code> methods return a <a href="./collections">base collection</a> instance. Likewise, if a <code>map</code> operation returns a collection that does not contain any Eloquent models, it will be converted to a base collection instance.</p><p><a name="available-methods"></a></p><h2 id="available-methods" tabindex="-1"><a class="header-anchor" href="#available-methods" aria-hidden="true">#</a> Available Methods</h2><p>All Eloquent collections extend the base <a href="./collections#available-methods">Laravel collection</a> object; therefore, they inherit all of the powerful methods provided by the base collection class.</p><p>In addition, the <code>Illuminate\\Database\\Eloquent\\Collection</code> class provides a superset of methods to aid with managing your model collections. Most methods return <code>Illuminate\\Database\\Eloquent\\Collection</code> instances; however, some methods, like <code>modelKeys</code>, return an <code>Illuminate\\Support\\Collection</code> instance.</p>`,16),l=e("div",{class:"collection-method-list",markdown:"1"},[e("p",null,[e("a",{href:"#method-append"},"append"),e("a",{href:"#method-contains"},"contains"),e("a",{href:"#method-diff"},"diff"),e("a",{href:"#method-except"},"except"),e("a",{href:"#method-find"},"find"),e("a",{href:"#method-fresh"},"fresh"),e("a",{href:"#method-intersect"},"intersect"),e("a",{href:"#method-load"},"load"),e("a",{href:"#method-loadMissing"},"loadMissing"),e("a",{href:"#method-modelKeys"},"modelKeys"),e("a",{href:"#method-makeVisible"},"makeVisible"),e("a",{href:"#method-makeHidden"},"makeHidden"),e("a",{href:"#method-only"},"only"),e("a",{href:"#method-setVisible"},"setVisible"),e("a",{href:"#method-setHidden"},"setHidden"),e("a",{href:"#method-toquery"},"toQuery"),e("a",{href:"#method-unique"},"unique")])],-1),s=o(`<p><a name="method-append"></a></p><h4 id="append-attributes-collection-method-first-collection-method" tabindex="-1"><a class="header-anchor" href="#append-attributes-collection-method-first-collection-method" aria-hidden="true">#</a> <code>append($attributes)</code> {.collection-method .first-collection-method}</h4><p>The <code>append</code> method may be used to indicate that an attribute should be <a href="./eloquent-serialization#appending-values-to-json">appended</a> for every model in the collection. This method accepts an array of attributes or a single attribute:</p><pre><code>$users-&gt;append(&#39;team&#39;);

$users-&gt;append([&#39;team&#39;, &#39;is_admin&#39;]);
</code></pre><p><a name="method-contains"></a></p><h4 id="contains-key-operator-null-value-null-collection-method" tabindex="-1"><a class="header-anchor" href="#contains-key-operator-null-value-null-collection-method" aria-hidden="true">#</a> <code>contains($key, $operator = null, $value = null)</code> {.collection-method}</h4><p>The <code>contains</code> method may be used to determine if a given model instance is contained by the collection. This method accepts a primary key or a model instance:</p><pre><code>$users-&gt;contains(1);

$users-&gt;contains(User::find(1));
</code></pre><p><a name="method-diff"></a></p><h4 id="diff-items-collection-method" tabindex="-1"><a class="header-anchor" href="#diff-items-collection-method" aria-hidden="true">#</a> <code>diff($items)</code> {.collection-method}</h4><p>The <code>diff</code> method returns all of the models that are not present in the given collection:</p><pre><code>use App\\Models\\User;

$users = $users-&gt;diff(User::whereIn(&#39;id&#39;, [1, 2, 3])-&gt;get());
</code></pre><p><a name="method-except"></a></p><h4 id="except-keys-collection-method" tabindex="-1"><a class="header-anchor" href="#except-keys-collection-method" aria-hidden="true">#</a> <code>except($keys)</code> {.collection-method}</h4><p>The <code>except</code> method returns all of the models that do not have the given primary keys:</p><pre><code>$users = $users-&gt;except([1, 2, 3]);
</code></pre><p><a name="method-find"></a></p><h4 id="find-key-collection-method" tabindex="-1"><a class="header-anchor" href="#find-key-collection-method" aria-hidden="true">#</a> <code>find($key)</code> {.collection-method}</h4><p>The <code>find</code> method returns the model that has a primary key matching the given key. If <code>$key</code> is a model instance, <code>find</code> will attempt to return a model matching the primary key. If <code>$key</code> is an array of keys, <code>find</code> will return all models which have a primary key in the given array:</p><pre><code>$users = User::all();

$user = $users-&gt;find(1);
</code></pre><p><a name="method-fresh"></a></p><h4 id="fresh-with-collection-method" tabindex="-1"><a class="header-anchor" href="#fresh-with-collection-method" aria-hidden="true">#</a> <code>fresh($with = [])</code> {.collection-method}</h4><p>The <code>fresh</code> method retrieves a fresh instance of each model in the collection from the database. In addition, any specified relationships will be eager loaded:</p><pre><code>$users = $users-&gt;fresh();

$users = $users-&gt;fresh(&#39;comments&#39;);
</code></pre><p><a name="method-intersect"></a></p><h4 id="intersect-items-collection-method" tabindex="-1"><a class="header-anchor" href="#intersect-items-collection-method" aria-hidden="true">#</a> <code>intersect($items)</code> {.collection-method}</h4><p>The <code>intersect</code> method returns all of the models that are also present in the given collection:</p><pre><code>use App\\Models\\User;

$users = $users-&gt;intersect(User::whereIn(&#39;id&#39;, [1, 2, 3])-&gt;get());
</code></pre><p><a name="method-load"></a></p><h4 id="load-relations-collection-method" tabindex="-1"><a class="header-anchor" href="#load-relations-collection-method" aria-hidden="true">#</a> <code>load($relations)</code> {.collection-method}</h4><p>The <code>load</code> method eager loads the given relationships for all models in the collection:</p><pre><code>$users-&gt;load([&#39;comments&#39;, &#39;posts&#39;]);

$users-&gt;load(&#39;comments.author&#39;);

$users-&gt;load([&#39;comments&#39;, &#39;posts&#39; =&gt; fn ($query) =&gt; $query-&gt;where(&#39;active&#39;, 1)]);
</code></pre><p><a name="method-loadMissing"></a></p><h4 id="loadmissing-relations-collection-method" tabindex="-1"><a class="header-anchor" href="#loadmissing-relations-collection-method" aria-hidden="true">#</a> <code>loadMissing($relations)</code> {.collection-method}</h4><p>The <code>loadMissing</code> method eager loads the given relationships for all models in the collection if the relationships are not already loaded:</p><pre><code>$users-&gt;loadMissing([&#39;comments&#39;, &#39;posts&#39;]);

$users-&gt;loadMissing(&#39;comments.author&#39;);

$users-&gt;loadMissing([&#39;comments&#39;, &#39;posts&#39; =&gt; fn ($query) =&gt; $query-&gt;where(&#39;active&#39;, 1)]);
</code></pre><p><a name="method-modelKeys"></a></p><h4 id="modelkeys-collection-method" tabindex="-1"><a class="header-anchor" href="#modelkeys-collection-method" aria-hidden="true">#</a> <code>modelKeys()</code> {.collection-method}</h4><p>The <code>modelKeys</code> method returns the primary keys for all models in the collection:</p><pre><code>$users-&gt;modelKeys();

// [1, 2, 3, 4, 5]
</code></pre><p><a name="method-makeVisible"></a></p><h4 id="makevisible-attributes-collection-method" tabindex="-1"><a class="header-anchor" href="#makevisible-attributes-collection-method" aria-hidden="true">#</a> <code>makeVisible($attributes)</code> {.collection-method}</h4><p>The <code>makeVisible</code> method <a href="./eloquent-serialization#hiding-attributes-from-json">makes attributes visible</a> that are typically &quot;hidden&quot; on each model in the collection:</p><pre><code>$users = $users-&gt;makeVisible([&#39;address&#39;, &#39;phone_number&#39;]);
</code></pre><p><a name="method-makeHidden"></a></p><h4 id="makehidden-attributes-collection-method" tabindex="-1"><a class="header-anchor" href="#makehidden-attributes-collection-method" aria-hidden="true">#</a> <code>makeHidden($attributes)</code> {.collection-method}</h4><p>The <code>makeHidden</code> method <a href="./eloquent-serialization#hiding-attributes-from-json">hides attributes</a> that are typically &quot;visible&quot; on each model in the collection:</p><pre><code>$users = $users-&gt;makeHidden([&#39;address&#39;, &#39;phone_number&#39;]);
</code></pre><p><a name="method-only"></a></p><h4 id="only-keys-collection-method" tabindex="-1"><a class="header-anchor" href="#only-keys-collection-method" aria-hidden="true">#</a> <code>only($keys)</code> {.collection-method}</h4><p>The <code>only</code> method returns all of the models that have the given primary keys:</p><pre><code>$users = $users-&gt;only([1, 2, 3]);
</code></pre><p><a name="method-setVisible"></a></p><h4 id="setvisible-attributes-collection-method" tabindex="-1"><a class="header-anchor" href="#setvisible-attributes-collection-method" aria-hidden="true">#</a> <code>setVisible($attributes)</code> {.collection-method}</h4><p>The <code>setVisible</code> method <a href="./eloquent-serialization#temporarily-modifying-attribute-visibility">temporarily overrides</a> all of the visible attributes on each model in the collection:</p><pre><code>$users = $users-&gt;setVisible([&#39;id&#39;, &#39;name&#39;]);
</code></pre><p><a name="method-setHidden"></a></p><h4 id="sethidden-attributes-collection-method" tabindex="-1"><a class="header-anchor" href="#sethidden-attributes-collection-method" aria-hidden="true">#</a> <code>setHidden($attributes)</code> {.collection-method}</h4><p>The <code>setHidden</code> method <a href="./eloquent-serialization#temporarily-modifying-attribute-visibility">temporarily overrides</a> all of the hidden attributes on each model in the collection:</p><pre><code>$users = $users-&gt;setHidden([&#39;email&#39;, &#39;password&#39;, &#39;remember_token&#39;]);
</code></pre><p><a name="method-toquery"></a></p><h4 id="toquery-collection-method" tabindex="-1"><a class="header-anchor" href="#toquery-collection-method" aria-hidden="true">#</a> <code>toQuery()</code> {.collection-method}</h4><p>The <code>toQuery</code> method returns an Eloquent query builder instance containing a <code>whereIn</code> constraint on the collection model&#39;s primary keys:</p><pre><code>use App\\Models\\User;

$users = User::where(&#39;status&#39;, &#39;VIP&#39;)-&gt;get();

$users-&gt;toQuery()-&gt;update([
    &#39;status&#39; =&gt; &#39;Administrator&#39;,
]);
</code></pre><p><a name="method-unique"></a></p><h4 id="unique-key-null-strict-false-collection-method" tabindex="-1"><a class="header-anchor" href="#unique-key-null-strict-false-collection-method" aria-hidden="true">#</a> <code>unique($key = null, $strict = false)</code> {.collection-method}</h4><p>The <code>unique</code> method returns all of the unique models in the collection. Any models of the same type with the same primary key as another model in the collection are removed:</p><pre><code>$users = $users-&gt;unique();
</code></pre><p><a name="custom-collections"></a></p><h2 id="custom-collections" tabindex="-1"><a class="header-anchor" href="#custom-collections" aria-hidden="true">#</a> Custom Collections</h2><p>If you would like to use a custom <code>Collection</code> object when interacting with a given model, you may define a <code>newCollection</code> method on your model:</p><pre><code>&lt;?php

namespace App\\Models;

use App\\Support\\UserCollection;
use Illuminate\\Database\\Eloquent\\Collection;
use Illuminate\\Database\\Eloquent\\Model;

class User extends Model
{
    /**
     * Create a new Eloquent Collection instance.
     *
     * @param  array&lt;int, \\Illuminate\\Database\\Eloquent\\Model&gt;  $models
     * @return \\Illuminate\\Database\\Eloquent\\Collection&lt;int, \\Illuminate\\Database\\Eloquent\\Model&gt;
     */
    public function newCollection(array $models = []): Collection
    {
        return new UserCollection($models);
    }
}
</code></pre><p>Once you have defined a <code>newCollection</code> method, you will receive an instance of your custom collection anytime Eloquent would normally return an <code>Illuminate\\Database\\Eloquent\\Collection</code> instance. If you would like to use a custom collection for every model in your application, you should define the <code>newCollection</code> method on a base model class that is extended by all of your application&#39;s models.</p>`,73),c=[d,l,s];function r(h,m){return a(),n("div",null,c)}const f=t(i,[["render",r],["__file","eloquent-collections.html.vue"]]);export{f as default};
