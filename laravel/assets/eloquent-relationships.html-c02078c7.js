import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{r as i,o as r,c as l,b as e,d as n,e as t,a as o}from"./app-8cdff07c.js";const d={},c=o('<h1 id="eloquent-relationships" tabindex="-1"><a class="header-anchor" href="#eloquent-relationships" aria-hidden="true">#</a> Eloquent: Relationships</h1><ul><li><a href="#introduction">Introduction</a></li><li><a href="#defining-relationships">Defining Relationships</a><ul><li><a href="#one-to-one">One To One</a></li><li><a href="#one-to-many">One To Many</a></li><li><a href="#one-to-many-inverse">One To Many (Inverse) / Belongs To</a></li><li><a href="#has-one-of-many">Has One Of Many</a></li><li><a href="#has-one-through">Has One Through</a></li><li><a href="#has-many-through">Has Many Through</a></li></ul></li><li><a href="#many-to-many">Many To Many Relationships</a><ul><li><a href="#retrieving-intermediate-table-columns">Retrieving Intermediate Table Columns</a></li><li><a href="#filtering-queries-via-intermediate-table-columns">Filtering Queries Via Intermediate Table Columns</a></li><li><a href="#ordering-queries-via-intermediate-table-columns">Ordering Queries Via Intermediate Table Columns</a></li><li><a href="#defining-custom-intermediate-table-models">Defining Custom Intermediate Table Models</a></li></ul></li><li><a href="#polymorphic-relationships">Polymorphic Relationships</a><ul><li><a href="#one-to-one-polymorphic-relations">One To One</a></li><li><a href="#one-to-many-polymorphic-relations">One To Many</a></li><li><a href="#one-of-many-polymorphic-relations">One Of Many</a></li><li><a href="#many-to-many-polymorphic-relations">Many To Many</a></li><li><a href="#custom-polymorphic-types">Custom Polymorphic Types</a></li></ul></li><li><a href="#dynamic-relationships">Dynamic Relationships</a></li><li><a href="#querying-relations">Querying Relations</a><ul><li><a href="#relationship-methods-vs-dynamic-properties">Relationship Methods Vs. Dynamic Properties</a></li><li><a href="#querying-relationship-existence">Querying Relationship Existence</a></li><li><a href="#querying-relationship-absence">Querying Relationship Absence</a></li><li><a href="#querying-morph-to-relationships">Querying Morph To Relationships</a></li></ul></li><li><a href="#aggregating-related-models">Aggregating Related Models</a><ul><li><a href="#counting-related-models">Counting Related Models</a></li><li><a href="#other-aggregate-functions">Other Aggregate Functions</a></li><li><a href="#counting-related-models-on-morph-to-relationships">Counting Related Models On Morph To Relationships</a></li></ul></li><li><a href="#eager-loading">Eager Loading</a><ul><li><a href="#constraining-eager-loads">Constraining Eager Loads</a></li><li><a href="#lazy-eager-loading">Lazy Eager Loading</a></li><li><a href="#preventing-lazy-loading">Preventing Lazy Loading</a></li></ul></li><li><a href="#inserting-and-updating-related-models">Inserting &amp; Updating Related Models</a><ul><li><a href="#the-save-method">The <code>save</code> Method</a></li><li><a href="#the-create-method">The <code>create</code> Method</a></li><li><a href="#updating-belongs-to-relationships">Belongs To Relationships</a></li><li><a href="#updating-many-to-many-relationships">Many To Many Relationships</a></li></ul></li><li><a href="#touching-parent-timestamps">Touching Parent Timestamps</a></li></ul><p><a name="introduction"></a></p><h2 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h2><p>Database tables are often related to one another. For example, a blog post may have many comments or an order could be related to the user who placed it. Eloquent makes managing and working with these relationships easy, and supports a variety of common relationships:</p>',5),p=e("div",{class:"content-list",markdown:"1"},[e("ul",null,[e("li",null,[e("a",{href:"#one-to-one"},"One To One")]),e("li",null,[e("a",{href:"#one-to-many"},"One To Many")]),e("li",null,[e("a",{href:"#many-to-many"},"Many To Many")]),e("li",null,[e("a",{href:"#has-one-through"},"Has One Through")]),e("li",null,[e("a",{href:"#has-many-through"},"Has Many Through")]),e("li",null,[e("a",{href:"#one-to-one-polymorphic-relations"},"One To One (Polymorphic)")]),e("li",null,[e("a",{href:"#one-to-many-polymorphic-relations"},"One To Many (Polymorphic)")]),e("li",null,[e("a",{href:"#many-to-many-polymorphic-relations"},"Many To Many (Polymorphic)")])])],-1),h=o(`<p><a name="defining-relationships"></a></p><h2 id="defining-relationships" tabindex="-1"><a class="header-anchor" href="#defining-relationships" aria-hidden="true">#</a> Defining Relationships</h2><p>Eloquent relationships are defined as methods on your Eloquent model classes. Since relationships also serve as powerful <a href="./queries">query builders</a>, defining relationships as methods provides powerful method chaining and querying capabilities. For example, we may chain additional query constraints on this <code>posts</code> relationship:</p><pre><code>$user-&gt;posts()-&gt;where(&#39;active&#39;, 1)-&gt;get();
</code></pre><p>But, before diving too deep into using relationships, let&#39;s learn how to define each type of relationship supported by Eloquent.</p><p><a name="one-to-one"></a></p><h3 id="one-to-one" tabindex="-1"><a class="header-anchor" href="#one-to-one" aria-hidden="true">#</a> One To One</h3><p>A one-to-one relationship is a very basic type of database relationship. For example, a <code>User</code> model might be associated with one <code>Phone</code> model. To define this relationship, we will place a <code>phone</code> method on the <code>User</code> model. The <code>phone</code> method should call the <code>hasOne</code> method and return its result. The <code>hasOne</code> method is available to your model via the model&#39;s <code>Illuminate\\Database\\Eloquent\\Model</code> base class:</p><pre><code>&lt;?php

namespace App\\Models;

use Illuminate\\Database\\Eloquent\\Model;
use Illuminate\\Database\\Eloquent\\Relations\\HasOne;

class User extends Model
{
    /**
     * Get the phone associated with the user.
     */
    public function phone(): HasOne
    {
        return $this-&gt;hasOne(Phone::class);
    }
}
</code></pre><p>The first argument passed to the <code>hasOne</code> method is the name of the related model class. Once the relationship is defined, we may retrieve the related record using Eloquent&#39;s dynamic properties. Dynamic properties allow you to access relationship methods as if they were properties defined on the model:</p><pre><code>$phone = User::find(1)-&gt;phone;
</code></pre><p>Eloquent determines the foreign key of the relationship based on the parent model name. In this case, the <code>Phone</code> model is automatically assumed to have a <code>user_id</code> foreign key. If you wish to override this convention, you may pass a second argument to the <code>hasOne</code> method:</p><pre><code>return $this-&gt;hasOne(Phone::class, &#39;foreign_key&#39;);
</code></pre><p>Additionally, Eloquent assumes that the foreign key should have a value matching the primary key column of the parent. In other words, Eloquent will look for the value of the user&#39;s <code>id</code> column in the <code>user_id</code> column of the <code>Phone</code> record. If you would like the relationship to use a primary key value other than <code>id</code> or your model&#39;s <code>$primaryKey</code> property, you may pass a third argument to the <code>hasOne</code> method:</p><pre><code>return $this-&gt;hasOne(Phone::class, &#39;foreign_key&#39;, &#39;local_key&#39;);
</code></pre><p><a name="one-to-one-defining-the-inverse-of-the-relationship"></a></p><h4 id="defining-the-inverse-of-the-relationship" tabindex="-1"><a class="header-anchor" href="#defining-the-inverse-of-the-relationship" aria-hidden="true">#</a> Defining The Inverse Of The Relationship</h4><p>So, we can access the <code>Phone</code> model from our <code>User</code> model. Next, let&#39;s define a relationship on the <code>Phone</code> model that will let us access the user that owns the phone. We can define the inverse of a <code>hasOne</code> relationship using the <code>belongsTo</code> method:</p><pre><code>&lt;?php

namespace App\\Models;

use Illuminate\\Database\\Eloquent\\Model;
use Illuminate\\Database\\Eloquent\\Relations\\BelongsTo;

class Phone extends Model
{
    /**
     * Get the user that owns the phone.
     */
    public function user(): BelongsTo
    {
        return $this-&gt;belongsTo(User::class);
    }
}
</code></pre><p>When invoking the <code>user</code> method, Eloquent will attempt to find a <code>User</code> model that has an <code>id</code> which matches the <code>user_id</code> column on the <code>Phone</code> model.</p><p>Eloquent determines the foreign key name by examining the name of the relationship method and suffixing the method name with <code>_id</code>. So, in this case, Eloquent assumes that the <code>Phone</code> model has a <code>user_id</code> column. However, if the foreign key on the <code>Phone</code> model is not <code>user_id</code>, you may pass a custom key name as the second argument to the <code>belongsTo</code> method:</p><pre><code>/**
 * Get the user that owns the phone.
 */
public function user(): BelongsTo
{
    return $this-&gt;belongsTo(User::class, &#39;foreign_key&#39;);
}
</code></pre><p>If the parent model does not use <code>id</code> as its primary key, or you wish to find the associated model using a different column, you may pass a third argument to the <code>belongsTo</code> method specifying the parent table&#39;s custom key:</p><pre><code>/**
 * Get the user that owns the phone.
 */
public function user(): BelongsTo
{
    return $this-&gt;belongsTo(User::class, &#39;foreign_key&#39;, &#39;owner_key&#39;);
}
</code></pre><p><a name="one-to-many"></a></p><h3 id="one-to-many" tabindex="-1"><a class="header-anchor" href="#one-to-many" aria-hidden="true">#</a> One To Many</h3><p>A one-to-many relationship is used to define relationships where a single model is the parent to one or more child models. For example, a blog post may have an infinite number of comments. Like all other Eloquent relationships, one-to-many relationships are defined by defining a method on your Eloquent model:</p><pre><code>&lt;?php

namespace App\\Models;

use Illuminate\\Database\\Eloquent\\Model;
use Illuminate\\Database\\Eloquent\\Relations\\HasMany;

class Post extends Model
{
    /**
     * Get the comments for the blog post.
     */
    public function comments(): HasMany
    {
        return $this-&gt;hasMany(Comment::class);
    }
}
</code></pre><p>Remember, Eloquent will automatically determine the proper foreign key column for the <code>Comment</code> model. By convention, Eloquent will take the &quot;snake case&quot; name of the parent model and suffix it with <code>_id</code>. So, in this example, Eloquent will assume the foreign key column on the <code>Comment</code> model is <code>post_id</code>.</p><p>Once the relationship method has been defined, we can access the <a href="./eloquent-collections">collection</a> of related comments by accessing the <code>comments</code> property. Remember, since Eloquent provides &quot;dynamic relationship properties&quot;, we can access relationship methods as if they were defined as properties on the model:</p><pre><code>use App\\Models\\Post;

$comments = Post::find(1)-&gt;comments;

foreach ($comments as $comment) {
    // ...
}
</code></pre><p>Since all relationships also serve as query builders, you may add further constraints to the relationship query by calling the <code>comments</code> method and continuing to chain conditions onto the query:</p><pre><code>$comment = Post::find(1)-&gt;comments()
                    -&gt;where(&#39;title&#39;, &#39;foo&#39;)
                    -&gt;first();
</code></pre><p>Like the <code>hasOne</code> method, you may also override the foreign and local keys by passing additional arguments to the <code>hasMany</code> method:</p><pre><code>return $this-&gt;hasMany(Comment::class, &#39;foreign_key&#39;);

return $this-&gt;hasMany(Comment::class, &#39;foreign_key&#39;, &#39;local_key&#39;);
</code></pre><p><a name="one-to-many-inverse"></a></p><h3 id="one-to-many-inverse-belongs-to" tabindex="-1"><a class="header-anchor" href="#one-to-many-inverse-belongs-to" aria-hidden="true">#</a> One To Many (Inverse) / Belongs To</h3><p>Now that we can access all of a post&#39;s comments, let&#39;s define a relationship to allow a comment to access its parent post. To define the inverse of a <code>hasMany</code> relationship, define a relationship method on the child model which calls the <code>belongsTo</code> method:</p><pre><code>&lt;?php

namespace App\\Models;

use Illuminate\\Database\\Eloquent\\Model;
use Illuminate\\Database\\Eloquent\\Relations\\BelongsTo;

class Comment extends Model
{
    /**
     * Get the post that owns the comment.
     */
    public function post(): BelongsTo
    {
        return $this-&gt;belongsTo(Post::class);
    }
}
</code></pre><p>Once the relationship has been defined, we can retrieve a comment&#39;s parent post by accessing the <code>post</code> &quot;dynamic relationship property&quot;:</p><pre><code>use App\\Models\\Comment;

$comment = Comment::find(1);

return $comment-&gt;post-&gt;title;
</code></pre><p>In the example above, Eloquent will attempt to find a <code>Post</code> model that has an <code>id</code> which matches the <code>post_id</code> column on the <code>Comment</code> model.</p><p>Eloquent determines the default foreign key name by examining the name of the relationship method and suffixing the method name with a <code>_</code> followed by the name of the parent model&#39;s primary key column. So, in this example, Eloquent will assume the <code>Post</code> model&#39;s foreign key on the <code>comments</code> table is <code>post_id</code>.</p><p>However, if the foreign key for your relationship does not follow these conventions, you may pass a custom foreign key name as the second argument to the <code>belongsTo</code> method:</p><pre><code>/**
 * Get the post that owns the comment.
 */
public function post(): BelongsTo
{
    return $this-&gt;belongsTo(Post::class, &#39;foreign_key&#39;);
}
</code></pre><p>If your parent model does not use <code>id</code> as its primary key, or you wish to find the associated model using a different column, you may pass a third argument to the <code>belongsTo</code> method specifying your parent table&#39;s custom key:</p><pre><code>/**
 * Get the post that owns the comment.
 */
public function post(): BelongsTo
{
    return $this-&gt;belongsTo(Post::class, &#39;foreign_key&#39;, &#39;owner_key&#39;);
}
</code></pre><p><a name="default-models"></a></p><h4 id="default-models" tabindex="-1"><a class="header-anchor" href="#default-models" aria-hidden="true">#</a> Default Models</h4>`,49),u=e("code",null,"belongsTo",-1),m=e("code",null,"hasOne",-1),g=e("code",null,"hasOneThrough",-1),y=e("code",null,"morphOne",-1),f=e("code",null,"null",-1),b={href:"https://en.wikipedia.org/wiki/Null_Object_pattern",target:"_blank",rel:"noopener noreferrer"},v=e("code",null,"user",-1),k=e("code",null,"App\\Models\\User",-1),w=e("code",null,"Post",-1),q=o(`<pre><code>/**
 * Get the author of the post.
 */
public function user(): BelongsTo
{
    return $this-&gt;belongsTo(User::class)-&gt;withDefault();
}
</code></pre><p>To populate the default model with attributes, you may pass an array or closure to the <code>withDefault</code> method:</p><pre><code>/**
 * Get the author of the post.
 */
public function user(): BelongsTo
{
    return $this-&gt;belongsTo(User::class)-&gt;withDefault([
        &#39;name&#39; =&gt; &#39;Guest Author&#39;,
    ]);
}

/**
 * Get the author of the post.
 */
public function user(): BelongsTo
{
    return $this-&gt;belongsTo(User::class)-&gt;withDefault(function (User $user, Post $post) {
        $user-&gt;name = &#39;Guest Author&#39;;
    });
}
</code></pre><p><a name="querying-belongs-to-relationships"></a></p><h4 id="querying-belongs-to-relationships" tabindex="-1"><a class="header-anchor" href="#querying-belongs-to-relationships" aria-hidden="true">#</a> Querying Belongs To Relationships</h4><p>When querying for the children of a &quot;belongs to&quot; relationship, you may manually build the <code>where</code> clause to retrieve the corresponding Eloquent models:</p><pre><code>use App\\Models\\Post;

$posts = Post::where(&#39;user_id&#39;, $user-&gt;id)-&gt;get();
</code></pre><p>However, you may find it more convenient to use the <code>whereBelongsTo</code> method, which will automatically determine the proper relationship and foreign key for the given model:</p><pre><code>$posts = Post::whereBelongsTo($user)-&gt;get();
</code></pre><p>You may also provide a <a href="./eloquent-collections">collection</a> instance to the <code>whereBelongsTo</code> method. When doing so, Laravel will retrieve models that belong to any of the parent models within the collection:</p><pre><code>$users = User::where(&#39;vip&#39;, true)-&gt;get();

$posts = Post::whereBelongsTo($users)-&gt;get();
</code></pre><p>By default, Laravel will determine the relationship associated with the given model based on the class name of the model; however, you may specify the relationship name manually by providing it as the second argument to the <code>whereBelongsTo</code> method:</p><pre><code>$posts = Post::whereBelongsTo($user, &#39;author&#39;)-&gt;get();
</code></pre><p><a name="has-one-of-many"></a></p><h3 id="has-one-of-many" tabindex="-1"><a class="header-anchor" href="#has-one-of-many" aria-hidden="true">#</a> Has One Of Many</h3><p>Sometimes a model may have many related models, yet you want to easily retrieve the &quot;latest&quot; or &quot;oldest&quot; related model of the relationship. For example, a <code>User</code> model may be related to many <code>Order</code> models, but you want to define a convenient way to interact with the most recent order the user has placed. You may accomplish this using the <code>hasOne</code> relationship type combined with the <code>ofMany</code> methods:</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token doc-comment comment">/**
 * Get the user&#39;s most recent order.
 */</span>
<span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">latestOrder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token class-name return-type">HasOne</span>
<span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">hasOne</span><span class="token punctuation">(</span><span class="token class-name static-context">Order</span><span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">latestOfMany</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Likewise, you may define a method to retrieve the &quot;oldest&quot;, or first, related model of a relationship:</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token doc-comment comment">/**
 * Get the user&#39;s oldest order.
 */</span>
<span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">oldestOrder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token class-name return-type">HasOne</span>
<span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">hasOne</span><span class="token punctuation">(</span><span class="token class-name static-context">Order</span><span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">oldestOfMany</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>By default, the <code>latestOfMany</code> and <code>oldestOfMany</code> methods will retrieve the latest or oldest related model based on the model&#39;s primary key, which must be sortable. However, sometimes you may wish to retrieve a single model from a larger relationship using a different sorting criteria.</p><p>For example, using the <code>ofMany</code> method, you may retrieve the user&#39;s most expensive order. The <code>ofMany</code> method accepts the sortable column as its first argument and which aggregate function (<code>min</code> or <code>max</code>) to apply when querying for the related model:</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token doc-comment comment">/**
 * Get the user&#39;s largest order.
 */</span>
<span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">largestOrder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token class-name return-type">HasOne</span>
<span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">hasOne</span><span class="token punctuation">(</span><span class="token class-name static-context">Order</span><span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">ofMany</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;price&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;max&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>Warning</strong><br> Because PostgreSQL does not support executing the <code>MAX</code> function against UUID columns, it is not currently possible to use one-of-many relationships in combination with PostgreSQL UUID columns.</p></blockquote><p><a name="converting-many-relationships-to-has-one-relationships"></a></p><h4 id="converting-many-relationships-to-has-one-relationships" tabindex="-1"><a class="header-anchor" href="#converting-many-relationships-to-has-one-relationships" aria-hidden="true">#</a> Converting &quot;Many&quot; Relationships To Has One Relationships</h4><p>Often, when retrieving a single model using the <code>latestOfMany</code>, <code>oldestOfMany</code>, or <code>ofMany</code> methods, you already have a &quot;has many&quot; relationship defined for the same model. For convenience, Laravel allows you to easily convert this relationship into a &quot;has one&quot; relationship by invoking the <code>one</code> method on the relationship:</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token doc-comment comment">/**
 * Get the user&#39;s orders.
 */</span>
<span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">orders</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token class-name return-type">HasMany</span>
<span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">hasMany</span><span class="token punctuation">(</span><span class="token class-name static-context">Order</span><span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * Get the user&#39;s largest order.
 */</span>
<span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">largestOrder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token class-name return-type">HasOne</span>
<span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">orders</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">one</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">ofMany</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;price&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;max&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="advanced-has-one-of-many-relationships"></a></p><h4 id="advanced-has-one-of-many-relationships" tabindex="-1"><a class="header-anchor" href="#advanced-has-one-of-many-relationships" aria-hidden="true">#</a> Advanced Has One Of Many Relationships</h4><p>It is possible to construct more advanced &quot;has one of many&quot; relationships. For example, a <code>Product</code> model may have many associated <code>Price</code> models that are retained in the system even after new pricing is published. In addition, new pricing data for the product may be able to be published in advance to take effect at a future date via a <code>published_at</code> column.</p><p>So, in summary, we need to retrieve the latest published pricing where the published date is not in the future. In addition, if two prices have the same published date, we will prefer the price with the greatest ID. To accomplish this, we must pass an array to the <code>ofMany</code> method that contains the sortable columns which determine the latest price. In addition, a closure will be provided as the second argument to the <code>ofMany</code> method. This closure will be responsible for adding additional publish date constraints to the relationship query:</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token doc-comment comment">/**
 * Get the current pricing for the product.
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="has-one-through"></a></p><h3 id="has-one-through" tabindex="-1"><a class="header-anchor" href="#has-one-through" aria-hidden="true">#</a> Has One Through</h3><p>The &quot;has-one-through&quot; relationship defines a one-to-one relationship with another model. However, this relationship indicates that the declaring model can be matched with one instance of another model by proceeding <em>through</em> a third model.</p><p>For example, in a vehicle repair shop application, each <code>Mechanic</code> model may be associated with one <code>Car</code> model, and each <code>Car</code> model may be associated with one <code>Owner</code> model. While the mechanic and the owner have no direct relationship within the database, the mechanic can access the owner <em>through</em> the <code>Car</code> model. Let&#39;s look at the tables necessary to define this relationship:</p><pre><code>mechanics
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
</code></pre><p>Now that we have examined the table structure for the relationship, let&#39;s define the relationship on the <code>Mechanic</code> model:</p><pre><code>&lt;?php

namespace App\\Models;

use Illuminate\\Database\\Eloquent\\Model;
use Illuminate\\Database\\Eloquent\\Relations\\HasOneThrough;

class Mechanic extends Model
{
    /**
     * Get the car&#39;s owner.
     */
    public function carOwner(): HasOneThrough
    {
        return $this-&gt;hasOneThrough(Owner::class, Car::class);
    }
}
</code></pre><p>The first argument passed to the <code>hasOneThrough</code> method is the name of the final model we wish to access, while the second argument is the name of the intermediate model.</p><p>Or, if the relevant relationships have already been defined on all of the models involved in the relationship, you may fluently define a &quot;has-one-through&quot; relationship by invoking the <code>through</code> method and supplying the names of those relationships. For example, if the <code>Mechanic</code> model has a <code>cars</code> relationship and the <code>Car</code> model has an <code>owner</code> relationship, you may define a &quot;has-one-through&quot; relationship connecting the mechanic and the owner like so:</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token comment">// String based syntax...</span>
<span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">through</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;cars&#39;</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">has</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;owner&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Dynamic syntax...</span>
<span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">throughCars</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">hasOwner</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="has-one-through-key-conventions"></a></p><h4 id="key-conventions" tabindex="-1"><a class="header-anchor" href="#key-conventions" aria-hidden="true">#</a> Key Conventions</h4><p>Typical Eloquent foreign key conventions will be used when performing the relationship&#39;s queries. If you would like to customize the keys of the relationship, you may pass them as the third and fourth arguments to the <code>hasOneThrough</code> method. The third argument is the name of the foreign key on the intermediate model. The fourth argument is the name of the foreign key on the final model. The fifth argument is the local key, while the sixth argument is the local key of the intermediate model:</p><pre><code>class Mechanic extends Model
{
    /**
     * Get the car&#39;s owner.
     */
    public function carOwner(): HasOneThrough
    {
        return $this-&gt;hasOneThrough(
            Owner::class,
            Car::class,
            &#39;mechanic_id&#39;, // Foreign key on the cars table...
            &#39;car_id&#39;, // Foreign key on the owners table...
            &#39;id&#39;, // Local key on the mechanics table...
            &#39;id&#39; // Local key on the cars table...
        );
    }
}
</code></pre><p>Or, as discussed earlier, if the relevant relationships have already been defined on all of the models involved in the relationship, you may fluently define a &quot;has-one-through&quot; relationship by invoking the <code>through</code> method and supplying the names of those relationships. This approach offers the advantage of reusing the key conventions already defined on the existing relationships:</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token comment">// String based syntax...</span>
<span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">through</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;cars&#39;</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">has</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;owner&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Dynamic syntax...</span>
<span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">throughCars</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">hasOwner</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="has-many-through"></a></p><h3 id="has-many-through" tabindex="-1"><a class="header-anchor" href="#has-many-through" aria-hidden="true">#</a> Has Many Through</h3>`,50),M={href:"https://vapor.laravel.com",target:"_blank",rel:"noopener noreferrer"},T=e("code",null,"Project",-1),$=e("code",null,"Deployment",-1),x=e("code",null,"Environment",-1),I=o(`<pre><code>projects
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
</code></pre><p>Now that we have examined the table structure for the relationship, let&#39;s define the relationship on the <code>Project</code> model:</p><pre><code>&lt;?php

namespace App\\Models;

use Illuminate\\Database\\Eloquent\\Model;
use Illuminate\\Database\\Eloquent\\Relations\\HasManyThrough;

class Project extends Model
{
    /**
     * Get all of the deployments for the project.
     */
    public function deployments(): HasManyThrough
    {
        return $this-&gt;hasManyThrough(Deployment::class, Environment::class);
    }
}
</code></pre><p>The first argument passed to the <code>hasManyThrough</code> method is the name of the final model we wish to access, while the second argument is the name of the intermediate model.</p><p>Or, if the relevant relationships have already been defined on all of the models involved in the relationship, you may fluently define a &quot;has-many-through&quot; relationship by invoking the <code>through</code> method and supplying the names of those relationships. For example, if the <code>Project</code> model has a <code>environments</code> relationship and the <code>Environment</code> model has a <code>deployments</code> relationship, you may define a &quot;has-many-through&quot; relationship connecting the project and the deployments like so:</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token comment">// String based syntax...</span>
<span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">through</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;environments&#39;</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">has</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;deployments&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Dynamic syntax...</span>
<span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">throughEnvironments</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">hasDeployments</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Though the <code>Deployment</code> model&#39;s table does not contain a <code>project_id</code> column, the <code>hasManyThrough</code> relation provides access to a project&#39;s deployments via <code>$project-&gt;deployments</code>. To retrieve these models, Eloquent inspects the <code>project_id</code> column on the intermediate <code>Environment</code> model&#39;s table. After finding the relevant environment IDs, they are used to query the <code>Deployment</code> model&#39;s table.</p><p><a name="has-many-through-key-conventions"></a></p><h4 id="key-conventions-1" tabindex="-1"><a class="header-anchor" href="#key-conventions-1" aria-hidden="true">#</a> Key Conventions</h4><p>Typical Eloquent foreign key conventions will be used when performing the relationship&#39;s queries. If you would like to customize the keys of the relationship, you may pass them as the third and fourth arguments to the <code>hasManyThrough</code> method. The third argument is the name of the foreign key on the intermediate model. The fourth argument is the name of the foreign key on the final model. The fifth argument is the local key, while the sixth argument is the local key of the intermediate model:</p><pre><code>class Project extends Model
{
    public function deployments(): HasManyThrough
    {
        return $this-&gt;hasManyThrough(
            Deployment::class,
            Environment::class,
            &#39;project_id&#39;, // Foreign key on the environments table...
            &#39;environment_id&#39;, // Foreign key on the deployments table...
            &#39;id&#39;, // Local key on the projects table...
            &#39;id&#39; // Local key on the environments table...
        );
    }
}
</code></pre><p>Or, as discussed earlier, if the relevant relationships have already been defined on all of the models involved in the relationship, you may fluently define a &quot;has-many-through&quot; relationship by invoking the <code>through</code> method and supplying the names of those relationships. This approach offers the advantage of reusing the key conventions already defined on the existing relationships:</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token comment">// String based syntax...</span>
<span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">through</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;environments&#39;</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">has</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;deployments&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Dynamic syntax...</span>
<span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">throughEnvironments</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">hasDeployments</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="many-to-many"></a></p><h2 id="many-to-many-relationships" tabindex="-1"><a class="header-anchor" href="#many-to-many-relationships" aria-hidden="true">#</a> Many To Many Relationships</h2><p>Many-to-many relations are slightly more complicated than <code>hasOne</code> and <code>hasMany</code> relationships. An example of a many-to-many relationship is a user that has many roles and those roles are also shared by other users in the application. For example, a user may be assigned the role of &quot;Author&quot; and &quot;Editor&quot;; however, those roles may also be assigned to other users as well. So, a user has many roles and a role has many users.</p><p><a name="many-to-many-table-structure"></a></p><h4 id="table-structure" tabindex="-1"><a class="header-anchor" href="#table-structure" aria-hidden="true">#</a> Table Structure</h4><p>To define this relationship, three database tables are needed: <code>users</code>, <code>roles</code>, and <code>role_user</code>. The <code>role_user</code> table is derived from the alphabetical order of the related model names and contains <code>user_id</code> and <code>role_id</code> columns. This table is used as an intermediate table linking the users and roles.</p><p>Remember, since a role can belong to many users, we cannot simply place a <code>user_id</code> column on the <code>roles</code> table. This would mean that a role could only belong to a single user. In order to provide support for roles being assigned to multiple users, the <code>role_user</code> table is needed. We can summarize the relationship&#39;s table structure like so:</p><pre><code>users
    id - integer
    name - string

roles
    id - integer
    name - string

role_user
    user_id - integer
    role_id - integer
</code></pre><p><a name="many-to-many-model-structure"></a></p><h4 id="model-structure" tabindex="-1"><a class="header-anchor" href="#model-structure" aria-hidden="true">#</a> Model Structure</h4><p>Many-to-many relationships are defined by writing a method that returns the result of the <code>belongsToMany</code> method. The <code>belongsToMany</code> method is provided by the <code>Illuminate\\Database\\Eloquent\\Model</code> base class that is used by all of your application&#39;s Eloquent models. For example, let&#39;s define a <code>roles</code> method on our <code>User</code> model. The first argument passed to this method is the name of the related model class:</p><pre><code>&lt;?php

namespace App\\Models;

use Illuminate\\Database\\Eloquent\\Model;
use Illuminate\\Database\\Eloquent\\Relations\\BelongsToMany;

class User extends Model
{
    /**
     * The roles that belong to the user.
     */
    public function roles(): BelongsToMany
    {
        return $this-&gt;belongsToMany(Role::class);
    }
}
</code></pre><p>Once the relationship is defined, you may access the user&#39;s roles using the <code>roles</code> dynamic relationship property:</p><pre><code>use App\\Models\\User;

$user = User::find(1);

foreach ($user-&gt;roles as $role) {
    // ...
}
</code></pre><p>Since all relationships also serve as query builders, you may add further constraints to the relationship query by calling the <code>roles</code> method and continuing to chain conditions onto the query:</p><pre><code>$roles = User::find(1)-&gt;roles()-&gt;orderBy(&#39;name&#39;)-&gt;get();
</code></pre><p>To determine the table name of the relationship&#39;s intermediate table, Eloquent will join the two related model names in alphabetical order. However, you are free to override this convention. You may do so by passing a second argument to the <code>belongsToMany</code> method:</p><pre><code>return $this-&gt;belongsToMany(Role::class, &#39;role_user&#39;);
</code></pre><p>In addition to customizing the name of the intermediate table, you may also customize the column names of the keys on the table by passing additional arguments to the <code>belongsToMany</code> method. The third argument is the foreign key name of the model on which you are defining the relationship, while the fourth argument is the foreign key name of the model that you are joining to:</p><pre><code>return $this-&gt;belongsToMany(Role::class, &#39;role_user&#39;, &#39;user_id&#39;, &#39;role_id&#39;);
</code></pre><p><a name="many-to-many-defining-the-inverse-of-the-relationship"></a></p><h4 id="defining-the-inverse-of-the-relationship-1" tabindex="-1"><a class="header-anchor" href="#defining-the-inverse-of-the-relationship-1" aria-hidden="true">#</a> Defining The Inverse Of The Relationship</h4><p>To define the &quot;inverse&quot; of a many-to-many relationship, you should define a method on the related model which also returns the result of the <code>belongsToMany</code> method. To complete our user / role example, let&#39;s define the <code>users</code> method on the <code>Role</code> model:</p><pre><code>&lt;?php

namespace App\\Models;

use Illuminate\\Database\\Eloquent\\Model;
use Illuminate\\Database\\Eloquent\\Relations\\BelongsToMany;

class Role extends Model
{
    /**
     * The users that belong to the role.
     */
    public function users(): BelongsToMany
    {
        return $this-&gt;belongsToMany(User::class);
    }
}
</code></pre><p>As you can see, the relationship is defined exactly the same as its <code>User</code> model counterpart with the exception of referencing the <code>App\\Models\\User</code> model. Since we&#39;re reusing the <code>belongsToMany</code> method, all of the usual table and key customization options are available when defining the &quot;inverse&quot; of many-to-many relationships.</p><p><a name="retrieving-intermediate-table-columns"></a></p><h3 id="retrieving-intermediate-table-columns" tabindex="-1"><a class="header-anchor" href="#retrieving-intermediate-table-columns" aria-hidden="true">#</a> Retrieving Intermediate Table Columns</h3><p>As you have already learned, working with many-to-many relations requires the presence of an intermediate table. Eloquent provides some very helpful ways of interacting with this table. For example, let&#39;s assume our <code>User</code> model has many <code>Role</code> models that it is related to. After accessing this relationship, we may access the intermediate table using the <code>pivot</code> attribute on the models:</p><pre><code>use App\\Models\\User;

$user = User::find(1);

foreach ($user-&gt;roles as $role) {
    echo $role-&gt;pivot-&gt;created_at;
}
</code></pre><p>Notice that each <code>Role</code> model we retrieve is automatically assigned a <code>pivot</code> attribute. This attribute contains a model representing the intermediate table.</p><p>By default, only the model keys will be present on the <code>pivot</code> model. If your intermediate table contains extra attributes, you must specify them when defining the relationship:</p><pre><code>return $this-&gt;belongsToMany(Role::class)-&gt;withPivot(&#39;active&#39;, &#39;created_by&#39;);
</code></pre><p>If you would like your intermediate table to have <code>created_at</code> and <code>updated_at</code> timestamps that are automatically maintained by Eloquent, call the <code>withTimestamps</code> method when defining the relationship:</p><pre><code>return $this-&gt;belongsToMany(Role::class)-&gt;withTimestamps();
</code></pre><blockquote><p><strong>Warning</strong><br> Intermediate tables that utilize Eloquent&#39;s automatically maintained timestamps are required to have both <code>created_at</code> and <code>updated_at</code> timestamp columns.</p></blockquote><p><a name="customizing-the-pivot-attribute-name"></a></p><h4 id="customizing-the-pivot-attribute-name" tabindex="-1"><a class="header-anchor" href="#customizing-the-pivot-attribute-name" aria-hidden="true">#</a> Customizing The <code>pivot</code> Attribute Name</h4><p>As noted previously, attributes from the intermediate table may be accessed on models via the <code>pivot</code> attribute. However, you are free to customize the name of this attribute to better reflect its purpose within your application.</p><p>For example, if your application contains users that may subscribe to podcasts, you likely have a many-to-many relationship between users and podcasts. If this is the case, you may wish to rename your intermediate table attribute to <code>subscription</code> instead of <code>pivot</code>. This can be done using the <code>as</code> method when defining the relationship:</p><pre><code>return $this-&gt;belongsToMany(Podcast::class)
                -&gt;as(&#39;subscription&#39;)
                -&gt;withTimestamps();
</code></pre><p>Once the custom intermediate table attribute has been specified, you may access the intermediate table data using the customized name:</p><pre><code>$users = User::with(&#39;podcasts&#39;)-&gt;get();

foreach ($users-&gt;flatMap-&gt;podcasts as $podcast) {
    echo $podcast-&gt;subscription-&gt;created_at;
}
</code></pre><p><a name="filtering-queries-via-intermediate-table-columns"></a></p><h3 id="filtering-queries-via-intermediate-table-columns" tabindex="-1"><a class="header-anchor" href="#filtering-queries-via-intermediate-table-columns" aria-hidden="true">#</a> Filtering Queries Via Intermediate Table Columns</h3><p>You can also filter the results returned by <code>belongsToMany</code> relationship queries using the <code>wherePivot</code>, <code>wherePivotIn</code>, <code>wherePivotNotIn</code>, <code>wherePivotBetween</code>, <code>wherePivotNotBetween</code>, <code>wherePivotNull</code>, and <code>wherePivotNotNull</code> methods when defining the relationship:</p><pre><code>return $this-&gt;belongsToMany(Role::class)
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
</code></pre><p><a name="ordering-queries-via-intermediate-table-columns"></a></p><h3 id="ordering-queries-via-intermediate-table-columns" tabindex="-1"><a class="header-anchor" href="#ordering-queries-via-intermediate-table-columns" aria-hidden="true">#</a> Ordering Queries Via Intermediate Table Columns</h3><p>You can order the results returned by <code>belongsToMany</code> relationship queries using the <code>orderByPivot</code> method. In the following example, we will retrieve all of the latest badges for the user:</p><pre><code>return $this-&gt;belongsToMany(Badge::class)
                -&gt;where(&#39;rank&#39;, &#39;gold&#39;)
                -&gt;orderByPivot(&#39;created_at&#39;, &#39;desc&#39;);
</code></pre><p><a name="defining-custom-intermediate-table-models"></a></p><h3 id="defining-custom-intermediate-table-models" tabindex="-1"><a class="header-anchor" href="#defining-custom-intermediate-table-models" aria-hidden="true">#</a> Defining Custom Intermediate Table Models</h3><p>If you would like to define a custom model to represent the intermediate table of your many-to-many relationship, you may call the <code>using</code> method when defining the relationship. Custom pivot models give you the opportunity to define additional behavior on the pivot model, such as methods and casts.</p><p>Custom many-to-many pivot models should extend the <code>Illuminate\\Database\\Eloquent\\Relations\\Pivot</code> class while custom polymorphic many-to-many pivot models should extend the <code>Illuminate\\Database\\Eloquent\\Relations\\MorphPivot</code> class. For example, we may define a <code>Role</code> model which uses a custom <code>RoleUser</code> pivot model:</p><pre><code>&lt;?php

namespace App\\Models;

use Illuminate\\Database\\Eloquent\\Model;
use Illuminate\\Database\\Eloquent\\Relations\\BelongsToMany;

class Role extends Model
{
    /**
     * The users that belong to the role.
     */
    public function users(): BelongsToMany
    {
        return $this-&gt;belongsToMany(User::class)-&gt;using(RoleUser::class);
    }
}
</code></pre><p>When defining the <code>RoleUser</code> model, you should extend the <code>Illuminate\\Database\\Eloquent\\Relations\\Pivot</code> class:</p><pre><code>&lt;?php

namespace App\\Models;

use Illuminate\\Database\\Eloquent\\Relations\\Pivot;

class RoleUser extends Pivot
{
    // ...
}
</code></pre><blockquote><p><strong>Warning</strong><br> Pivot models may not use the <code>SoftDeletes</code> trait. If you need to soft delete pivot records consider converting your pivot model to an actual Eloquent model.</p></blockquote><p><a name="custom-pivot-models-and-incrementing-ids"></a></p><h4 id="custom-pivot-models-and-incrementing-ids" tabindex="-1"><a class="header-anchor" href="#custom-pivot-models-and-incrementing-ids" aria-hidden="true">#</a> Custom Pivot Models And Incrementing IDs</h4><p>If you have defined a many-to-many relationship that uses a custom pivot model, and that pivot model has an auto-incrementing primary key, you should ensure your custom pivot model class defines an <code>incrementing</code> property that is set to <code>true</code>.</p><pre><code>/**
 * Indicates if the IDs are auto-incrementing.
 *
 * @var bool
 */
public $incrementing = true;
</code></pre><p><a name="polymorphic-relationships"></a></p><h2 id="polymorphic-relationships" tabindex="-1"><a class="header-anchor" href="#polymorphic-relationships" aria-hidden="true">#</a> Polymorphic Relationships</h2><p>A polymorphic relationship allows the child model to belong to more than one type of model using a single association. For example, imagine you are building an application that allows users to share blog posts and videos. In such an application, a <code>Comment</code> model might belong to both the <code>Post</code> and <code>Video</code> models.</p><p><a name="one-to-one-polymorphic-relations"></a></p><h3 id="one-to-one-polymorphic" tabindex="-1"><a class="header-anchor" href="#one-to-one-polymorphic" aria-hidden="true">#</a> One To One (Polymorphic)</h3><p><a name="one-to-one-polymorphic-table-structure"></a></p><h4 id="table-structure-1" tabindex="-1"><a class="header-anchor" href="#table-structure-1" aria-hidden="true">#</a> Table Structure</h4><p>A one-to-one polymorphic relation is similar to a typical one-to-one relation; however, the child model can belong to more than one type of model using a single association. For example, a blog <code>Post</code> and a <code>User</code> may share a polymorphic relation to an <code>Image</code> model. Using a one-to-one polymorphic relation allows you to have a single table of unique images that may be associated with posts and users. First, let&#39;s examine the table structure:</p><pre><code>posts
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
</code></pre><p>Note the <code>imageable_id</code> and <code>imageable_type</code> columns on the <code>images</code> table. The <code>imageable_id</code> column will contain the ID value of the post or user, while the <code>imageable_type</code> column will contain the class name of the parent model. The <code>imageable_type</code> column is used by Eloquent to determine which &quot;type&quot; of parent model to return when accessing the <code>imageable</code> relation. In this case, the column would contain either <code>App\\Models\\Post</code> or <code>App\\Models\\User</code>.</p><p><a name="one-to-one-polymorphic-model-structure"></a></p><h4 id="model-structure-1" tabindex="-1"><a class="header-anchor" href="#model-structure-1" aria-hidden="true">#</a> Model Structure</h4><p>Next, let&#39;s examine the model definitions needed to build this relationship:</p><pre><code>&lt;?php

namespace App\\Models;

use Illuminate\\Database\\Eloquent\\Model;
use Illuminate\\Database\\Eloquent\\Relations\\MorphTo;

class Image extends Model
{
    /**
     * Get the parent imageable model (user or post).
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
     * Get the post&#39;s image.
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
     * Get the user&#39;s image.
     */
    public function image(): MorphOne
    {
        return $this-&gt;morphOne(Image::class, &#39;imageable&#39;);
    }
}
</code></pre><p><a name="one-to-one-polymorphic-retrieving-the-relationship"></a></p><h4 id="retrieving-the-relationship" tabindex="-1"><a class="header-anchor" href="#retrieving-the-relationship" aria-hidden="true">#</a> Retrieving The Relationship</h4><p>Once your database table and models are defined, you may access the relationships via your models. For example, to retrieve the image for a post, we can access the <code>image</code> dynamic relationship property:</p><pre><code>use App\\Models\\Post;

$post = Post::find(1);

$image = $post-&gt;image;
</code></pre><p>You may retrieve the parent of the polymorphic model by accessing the name of the method that performs the call to <code>morphTo</code>. In this case, that is the <code>imageable</code> method on the <code>Image</code> model. So, we will access that method as a dynamic relationship property:</p><pre><code>use App\\Models\\Image;

$image = Image::find(1);

$imageable = $image-&gt;imageable;
</code></pre><p>The <code>imageable</code> relation on the <code>Image</code> model will return either a <code>Post</code> or <code>User</code> instance, depending on which type of model owns the image.</p><p><a name="morph-one-to-one-key-conventions"></a></p><h4 id="key-conventions-2" tabindex="-1"><a class="header-anchor" href="#key-conventions-2" aria-hidden="true">#</a> Key Conventions</h4><p>If necessary, you may specify the name of the &quot;id&quot; and &quot;type&quot; columns utilized by your polymorphic child model. If you do so, ensure that you always pass the name of the relationship as the first argument to the <code>morphTo</code> method. Typically, this value should match the method name, so you may use PHP&#39;s <code>__FUNCTION__</code> constant:</p><pre><code>/**
 * Get the model that the image belongs to.
 */
public function imageable(): MorphTo
{
    return $this-&gt;morphTo(__FUNCTION__, &#39;imageable_type&#39;, &#39;imageable_id&#39;);
}
</code></pre><p><a name="one-to-many-polymorphic-relations"></a></p><h3 id="one-to-many-polymorphic" tabindex="-1"><a class="header-anchor" href="#one-to-many-polymorphic" aria-hidden="true">#</a> One To Many (Polymorphic)</h3><p><a name="one-to-many-polymorphic-table-structure"></a></p><h4 id="table-structure-2" tabindex="-1"><a class="header-anchor" href="#table-structure-2" aria-hidden="true">#</a> Table Structure</h4><p>A one-to-many polymorphic relation is similar to a typical one-to-many relation; however, the child model can belong to more than one type of model using a single association. For example, imagine users of your application can &quot;comment&quot; on posts and videos. Using polymorphic relationships, you may use a single <code>comments</code> table to contain comments for both posts and videos. First, let&#39;s examine the table structure required to build this relationship:</p><pre><code>posts
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
</code></pre><p><a name="one-to-many-polymorphic-model-structure"></a></p><h4 id="model-structure-2" tabindex="-1"><a class="header-anchor" href="#model-structure-2" aria-hidden="true">#</a> Model Structure</h4><p>Next, let&#39;s examine the model definitions needed to build this relationship:</p><pre><code>&lt;?php

namespace App\\Models;

use Illuminate\\Database\\Eloquent\\Model;
use Illuminate\\Database\\Eloquent\\Relations\\MorphTo;

class Comment extends Model
{
    /**
     * Get the parent commentable model (post or video).
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
     * Get all of the post&#39;s comments.
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
     * Get all of the video&#39;s comments.
     */
    public function comments(): MorphMany
    {
        return $this-&gt;morphMany(Comment::class, &#39;commentable&#39;);
    }
}
</code></pre><p><a name="one-to-many-polymorphic-retrieving-the-relationship"></a></p><h4 id="retrieving-the-relationship-1" tabindex="-1"><a class="header-anchor" href="#retrieving-the-relationship-1" aria-hidden="true">#</a> Retrieving The Relationship</h4><p>Once your database table and models are defined, you may access the relationships via your model&#39;s dynamic relationship properties. For example, to access all of the comments for a post, we can use the <code>comments</code> dynamic property:</p><pre><code>use App\\Models\\Post;

$post = Post::find(1);

foreach ($post-&gt;comments as $comment) {
    // ...
}
</code></pre><p>You may also retrieve the parent of a polymorphic child model by accessing the name of the method that performs the call to <code>morphTo</code>. In this case, that is the <code>commentable</code> method on the <code>Comment</code> model. So, we will access that method as a dynamic relationship property in order to access the comment&#39;s parent model:</p><pre><code>use App\\Models\\Comment;

$comment = Comment::find(1);

$commentable = $comment-&gt;commentable;
</code></pre><p>The <code>commentable</code> relation on the <code>Comment</code> model will return either a <code>Post</code> or <code>Video</code> instance, depending on which type of model is the comment&#39;s parent.</p><p><a name="one-of-many-polymorphic-relations"></a></p><h3 id="one-of-many-polymorphic" tabindex="-1"><a class="header-anchor" href="#one-of-many-polymorphic" aria-hidden="true">#</a> One Of Many (Polymorphic)</h3><p>Sometimes a model may have many related models, yet you want to easily retrieve the &quot;latest&quot; or &quot;oldest&quot; related model of the relationship. For example, a <code>User</code> model may be related to many <code>Image</code> models, but you want to define a convenient way to interact with the most recent image the user has uploaded. You may accomplish this using the <code>morphOne</code> relationship type combined with the <code>ofMany</code> methods:</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token doc-comment comment">/**
 * Get the user&#39;s most recent image.
 */</span>
<span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">latestImage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token class-name return-type">MorphOne</span>
<span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">morphOne</span><span class="token punctuation">(</span><span class="token class-name static-context">Image</span><span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;imageable&#39;</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">latestOfMany</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Likewise, you may define a method to retrieve the &quot;oldest&quot;, or first, related model of a relationship:</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token doc-comment comment">/**
 * Get the user&#39;s oldest image.
 */</span>
<span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">oldestImage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token class-name return-type">MorphOne</span>
<span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">morphOne</span><span class="token punctuation">(</span><span class="token class-name static-context">Image</span><span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;imageable&#39;</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">oldestOfMany</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>By default, the <code>latestOfMany</code> and <code>oldestOfMany</code> methods will retrieve the latest or oldest related model based on the model&#39;s primary key, which must be sortable. However, sometimes you may wish to retrieve a single model from a larger relationship using a different sorting criteria.</p><p>For example, using the <code>ofMany</code> method, you may retrieve the user&#39;s most &quot;liked&quot; image. The <code>ofMany</code> method accepts the sortable column as its first argument and which aggregate function (<code>min</code> or <code>max</code>) to apply when querying for the related model:</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token doc-comment comment">/**
 * Get the user&#39;s most popular image.
 */</span>
<span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">bestImage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token class-name return-type">MorphOne</span>
<span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">morphOne</span><span class="token punctuation">(</span><span class="token class-name static-context">Image</span><span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;imageable&#39;</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">ofMany</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;likes&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;max&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>Note</strong><br> It is possible to construct more advanced &quot;one of many&quot; relationships. For more information, please consult the <a href="#advanced-has-one-of-many-relationships">has one of many documentation</a>.</p></blockquote><p><a name="many-to-many-polymorphic-relations"></a></p><h3 id="many-to-many-polymorphic" tabindex="-1"><a class="header-anchor" href="#many-to-many-polymorphic" aria-hidden="true">#</a> Many To Many (Polymorphic)</h3><p><a name="many-to-many-polymorphic-table-structure"></a></p><h4 id="table-structure-3" tabindex="-1"><a class="header-anchor" href="#table-structure-3" aria-hidden="true">#</a> Table Structure</h4><p>Many-to-many polymorphic relations are slightly more complicated than &quot;morph one&quot; and &quot;morph many&quot; relationships. For example, a <code>Post</code> model and <code>Video</code> model could share a polymorphic relation to a <code>Tag</code> model. Using a many-to-many polymorphic relation in this situation would allow your application to have a single table of unique tags that may be associated with posts or videos. First, let&#39;s examine the table structure required to build this relationship:</p><pre><code>posts
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
</code></pre><blockquote><p><strong>Note</strong><br> Before diving into polymorphic many-to-many relationships, you may benefit from reading the documentation on typical <a href="#many-to-many">many-to-many relationships</a>.</p></blockquote><p><a name="many-to-many-polymorphic-model-structure"></a></p><h4 id="model-structure-3" tabindex="-1"><a class="header-anchor" href="#model-structure-3" aria-hidden="true">#</a> Model Structure</h4><p>Next, we&#39;re ready to define the relationships on the models. The <code>Post</code> and <code>Video</code> models will both contain a <code>tags</code> method that calls the <code>morphToMany</code> method provided by the base Eloquent model class.</p><p>The <code>morphToMany</code> method accepts the name of the related model as well as the &quot;relationship name&quot;. Based on the name we assigned to our intermediate table name and the keys it contains, we will refer to the relationship as &quot;taggable&quot;:</p><pre><code>&lt;?php

namespace App\\Models;

use Illuminate\\Database\\Eloquent\\Model;
use Illuminate\\Database\\Eloquent\\Relations\\MorphToMany;

class Post extends Model
{
    /**
     * Get all of the tags for the post.
     */
    public function tags(): MorphToMany
    {
        return $this-&gt;morphToMany(Tag::class, &#39;taggable&#39;);
    }
}
</code></pre><p><a name="many-to-many-polymorphic-defining-the-inverse-of-the-relationship"></a></p><h4 id="defining-the-inverse-of-the-relationship-2" tabindex="-1"><a class="header-anchor" href="#defining-the-inverse-of-the-relationship-2" aria-hidden="true">#</a> Defining The Inverse Of The Relationship</h4><p>Next, on the <code>Tag</code> model, you should define a method for each of its possible parent models. So, in this example, we will define a <code>posts</code> method and a <code>videos</code> method. Both of these methods should return the result of the <code>morphedByMany</code> method.</p><p>The <code>morphedByMany</code> method accepts the name of the related model as well as the &quot;relationship name&quot;. Based on the name we assigned to our intermediate table name and the keys it contains, we will refer to the relationship as &quot;taggable&quot;:</p><pre><code>&lt;?php

namespace App\\Models;

use Illuminate\\Database\\Eloquent\\Model;
use Illuminate\\Database\\Eloquent\\Relations\\MorphToMany;

class Tag extends Model
{
    /**
     * Get all of the posts that are assigned this tag.
     */
    public function posts(): MorphToMany
    {
        return $this-&gt;morphedByMany(Post::class, &#39;taggable&#39;);
    }

    /**
     * Get all of the videos that are assigned this tag.
     */
    public function videos(): MorphToMany
    {
        return $this-&gt;morphedByMany(Video::class, &#39;taggable&#39;);
    }
}
</code></pre><p><a name="many-to-many-polymorphic-retrieving-the-relationship"></a></p><h4 id="retrieving-the-relationship-2" tabindex="-1"><a class="header-anchor" href="#retrieving-the-relationship-2" aria-hidden="true">#</a> Retrieving The Relationship</h4><p>Once your database table and models are defined, you may access the relationships via your models. For example, to access all of the tags for a post, you may use the <code>tags</code> dynamic relationship property:</p><pre><code>use App\\Models\\Post;

$post = Post::find(1);

foreach ($post-&gt;tags as $tag) {
    // ...
}
</code></pre><p>You may retrieve the parent of a polymorphic relation from the polymorphic child model by accessing the name of the method that performs the call to <code>morphedByMany</code>. In this case, that is the <code>posts</code> or <code>videos</code> methods on the <code>Tag</code> model:</p><pre><code>use App\\Models\\Tag;

$tag = Tag::find(1);

foreach ($tag-&gt;posts as $post) {
    // ...
}

foreach ($tag-&gt;videos as $video) {
    // ...
}
</code></pre><p><a name="custom-polymorphic-types"></a></p><h3 id="custom-polymorphic-types" tabindex="-1"><a class="header-anchor" href="#custom-polymorphic-types" aria-hidden="true">#</a> Custom Polymorphic Types</h3><p>By default, Laravel will use the fully qualified class name to store the &quot;type&quot; of the related model. For instance, given the one-to-many relationship example above where a <code>Comment</code> model may belong to a <code>Post</code> or a <code>Video</code> model, the default <code>commentable_type</code> would be either <code>App\\Models\\Post</code> or <code>App\\Models\\Video</code>, respectively. However, you may wish to decouple these values from your application&#39;s internal structure.</p><p>For example, instead of using the model names as the &quot;type&quot;, we may use simple strings such as <code>post</code> and <code>video</code>. By doing so, the polymorphic &quot;type&quot; column values in our database will remain valid even if the models are renamed:</p><pre><code>use Illuminate\\Database\\Eloquent\\Relations\\Relation;

Relation::enforceMorphMap([
    &#39;post&#39; =&gt; &#39;App\\Models\\Post&#39;,
    &#39;video&#39; =&gt; &#39;App\\Models\\Video&#39;,
]);
</code></pre><p>You may call the <code>enforceMorphMap</code> method in the <code>boot</code> method of your <code>App\\Providers\\AppServiceProvider</code> class or create a separate service provider if you wish.</p><p>You may determine the morph alias of a given model at runtime using the model&#39;s <code>getMorphClass</code> method. Conversely, you may determine the fully-qualified class name associated with a morph alias using the <code>Relation::getMorphedModel</code> method:</p><pre><code>use Illuminate\\Database\\Eloquent\\Relations\\Relation;

$alias = $post-&gt;getMorphClass();

$class = Relation::getMorphedModel($alias);
</code></pre><blockquote><p><strong>Warning</strong><br> When adding a &quot;morph map&quot; to your existing application, every morphable <code>*_type</code> column value in your database that still contains a fully-qualified class will need to be converted to its &quot;map&quot; name.</p></blockquote><p><a name="dynamic-relationships"></a></p><h3 id="dynamic-relationships" tabindex="-1"><a class="header-anchor" href="#dynamic-relationships" aria-hidden="true">#</a> Dynamic Relationships</h3><p>You may use the <code>resolveRelationUsing</code> method to define relations between Eloquent models at runtime. While not typically recommended for normal application development, this may occasionally be useful when developing Laravel packages.</p><p>The <code>resolveRelationUsing</code> method accepts the desired relationship name as its first argument. The second argument passed to the method should be a closure that accepts the model instance and returns a valid Eloquent relationship definition. Typically, you should configure dynamic relationships within the boot method of a <a href="./providers">service provider</a>:</p><pre><code>use App\\Models\\Order;
use App\\Models\\Customer;

Order::resolveRelationUsing(&#39;customer&#39;, function (Order $orderModel) {
    return $orderModel-&gt;belongsTo(Customer::class, &#39;customer_id&#39;);
});
</code></pre><blockquote><p><strong>Warning</strong><br> When defining dynamic relationships, always provide explicit key name arguments to the Eloquent relationship methods.</p></blockquote><p><a name="querying-relations"></a></p><h2 id="querying-relations" tabindex="-1"><a class="header-anchor" href="#querying-relations" aria-hidden="true">#</a> Querying Relations</h2><p>Since all Eloquent relationships are defined via methods, you may call those methods to obtain an instance of the relationship without actually executing a query to load the related models. In addition, all types of Eloquent relationships also serve as <a href="./queries">query builders</a>, allowing you to continue to chain constraints onto the relationship query before finally executing the SQL query against your database.</p><p>For example, imagine a blog application in which a <code>User</code> model has many associated <code>Post</code> models:</p><pre><code>&lt;?php

namespace App\\Models;

use Illuminate\\Database\\Eloquent\\Model;
use Illuminate\\Database\\Eloquent\\Relations\\HasMany;

class User extends Model
{
    /**
     * Get all of the posts for the user.
     */
    public function posts(): HasMany
    {
        return $this-&gt;hasMany(Post::class);
    }
}
</code></pre><p>You may query the <code>posts</code> relationship and add additional constraints to the relationship like so:</p><pre><code>use App\\Models\\User;

$user = User::find(1);

$user-&gt;posts()-&gt;where(&#39;active&#39;, 1)-&gt;get();
</code></pre><p>You are able to use any of the Laravel <a href="./queries">query builder&#39;s</a> methods on the relationship, so be sure to explore the query builder documentation to learn about all of the methods that are available to you.</p><p><a name="chaining-orwhere-clauses-after-relationships"></a></p><h4 id="chaining-orwhere-clauses-after-relationships" tabindex="-1"><a class="header-anchor" href="#chaining-orwhere-clauses-after-relationships" aria-hidden="true">#</a> Chaining <code>orWhere</code> Clauses After Relationships</h4><p>As demonstrated in the example above, you are free to add additional constraints to relationships when querying them. However, use caution when chaining <code>orWhere</code> clauses onto a relationship, as the <code>orWhere</code> clauses will be logically grouped at the same level as the relationship constraint:</p><pre><code>$user-&gt;posts()
        -&gt;where(&#39;active&#39;, 1)
        -&gt;orWhere(&#39;votes&#39;, &#39;&gt;=&#39;, 100)
        -&gt;get();
</code></pre><p>The example above will generate the following SQL. As you can see, the <code>or</code> clause instructs the query to return <em>any</em> post with greater than 100 votes. The query is no longer constrained to a specific user:</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> <span class="token operator">*</span>
<span class="token keyword">from</span> posts
<span class="token keyword">where</span> user_id <span class="token operator">=</span> ? <span class="token operator">and</span> active <span class="token operator">=</span> <span class="token number">1</span> <span class="token operator">or</span> votes <span class="token operator">&gt;=</span> <span class="token number">100</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>In most situations, you should use <a href="./queries#logical-grouping">logical groups</a> to group the conditional checks between parentheses:</p><pre><code>use Illuminate\\Database\\Eloquent\\Builder;

$user-&gt;posts()
        -&gt;where(function (Builder $query) {
            return $query-&gt;where(&#39;active&#39;, 1)
                         -&gt;orWhere(&#39;votes&#39;, &#39;&gt;=&#39;, 100);
        })
        -&gt;get();
</code></pre><p>The example above will produce the following SQL. Note that the logical grouping has properly grouped the constraints and the query remains constrained to a specific user:</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> <span class="token operator">*</span>
<span class="token keyword">from</span> posts
<span class="token keyword">where</span> user_id <span class="token operator">=</span> ? <span class="token operator">and</span> <span class="token punctuation">(</span>active <span class="token operator">=</span> <span class="token number">1</span> <span class="token operator">or</span> votes <span class="token operator">&gt;=</span> <span class="token number">100</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="relationship-methods-vs-dynamic-properties"></a></p><h3 id="relationship-methods-vs-dynamic-properties" tabindex="-1"><a class="header-anchor" href="#relationship-methods-vs-dynamic-properties" aria-hidden="true">#</a> Relationship Methods Vs. Dynamic Properties</h3><p>If you do not need to add additional constraints to an Eloquent relationship query, you may access the relationship as if it were a property. For example, continuing to use our <code>User</code> and <code>Post</code> example models, we may access all of a user&#39;s posts like so:</p><pre><code>use App\\Models\\User;

$user = User::find(1);

foreach ($user-&gt;posts as $post) {
    // ...
}
</code></pre><p>Dynamic relationship properties perform &quot;lazy loading&quot;, meaning they will only load their relationship data when you actually access them. Because of this, developers often use <a href="#eager-loading">eager loading</a> to pre-load relationships they know will be accessed after loading the model. Eager loading provides a significant reduction in SQL queries that must be executed to load a model&#39;s relations.</p><p><a name="querying-relationship-existence"></a></p><h3 id="querying-relationship-existence" tabindex="-1"><a class="header-anchor" href="#querying-relationship-existence" aria-hidden="true">#</a> Querying Relationship Existence</h3><p>When retrieving model records, you may wish to limit your results based on the existence of a relationship. For example, imagine you want to retrieve all blog posts that have at least one comment. To do so, you may pass the name of the relationship to the <code>has</code> and <code>orHas</code> methods:</p><pre><code>use App\\Models\\Post;

// Retrieve all posts that have at least one comment...
$posts = Post::has(&#39;comments&#39;)-&gt;get();
</code></pre><p>You may also specify an operator and count value to further customize the query:</p><pre><code>// Retrieve all posts that have three or more comments...
$posts = Post::has(&#39;comments&#39;, &#39;&gt;=&#39;, 3)-&gt;get();
</code></pre><p>Nested <code>has</code> statements may be constructed using &quot;dot&quot; notation. For example, you may retrieve all posts that have at least one comment that has at least one image:</p><pre><code>// Retrieve posts that have at least one comment with images...
$posts = Post::has(&#39;comments.images&#39;)-&gt;get();
</code></pre><p>If you need even more power, you may use the <code>whereHas</code> and <code>orWhereHas</code> methods to define additional query constraints on your <code>has</code> queries, such as inspecting the content of a comment:</p><pre><code>use Illuminate\\Database\\Eloquent\\Builder;

// Retrieve posts with at least one comment containing words like code%...
$posts = Post::whereHas(&#39;comments&#39;, function (Builder $query) {
    $query-&gt;where(&#39;content&#39;, &#39;like&#39;, &#39;code%&#39;);
})-&gt;get();

// Retrieve posts with at least ten comments containing words like code%...
$posts = Post::whereHas(&#39;comments&#39;, function (Builder $query) {
    $query-&gt;where(&#39;content&#39;, &#39;like&#39;, &#39;code%&#39;);
}, &#39;&gt;=&#39;, 10)-&gt;get();
</code></pre><blockquote><p><strong>Warning</strong><br> Eloquent does not currently support querying for relationship existence across databases. The relationships must exist within the same database.</p></blockquote><p><a name="inline-relationship-existence-queries"></a></p><h4 id="inline-relationship-existence-queries" tabindex="-1"><a class="header-anchor" href="#inline-relationship-existence-queries" aria-hidden="true">#</a> Inline Relationship Existence Queries</h4><p>If you would like to query for a relationship&#39;s existence with a single, simple where condition attached to the relationship query, you may find it more convenient to use the <code>whereRelation</code>, <code>orWhereRelation</code>, <code>whereMorphRelation</code>, and <code>orWhereMorphRelation</code> methods. For example, we may query for all posts that have unapproved comments:</p><pre><code>use App\\Models\\Post;

$posts = Post::whereRelation(&#39;comments&#39;, &#39;is_approved&#39;, false)-&gt;get();
</code></pre><p>Of course, like calls to the query builder&#39;s <code>where</code> method, you may also specify an operator:</p><pre><code>$posts = Post::whereRelation(
    &#39;comments&#39;, &#39;created_at&#39;, &#39;&gt;=&#39;, now()-&gt;subHour()
)-&gt;get();
</code></pre><p><a name="querying-relationship-absence"></a></p><h3 id="querying-relationship-absence" tabindex="-1"><a class="header-anchor" href="#querying-relationship-absence" aria-hidden="true">#</a> Querying Relationship Absence</h3><p>When retrieving model records, you may wish to limit your results based on the absence of a relationship. For example, imagine you want to retrieve all blog posts that <strong>don&#39;t</strong> have any comments. To do so, you may pass the name of the relationship to the <code>doesntHave</code> and <code>orDoesntHave</code> methods:</p><pre><code>use App\\Models\\Post;

$posts = Post::doesntHave(&#39;comments&#39;)-&gt;get();
</code></pre><p>If you need even more power, you may use the <code>whereDoesntHave</code> and <code>orWhereDoesntHave</code> methods to add additional query constraints to your <code>doesntHave</code> queries, such as inspecting the content of a comment:</p><pre><code>use Illuminate\\Database\\Eloquent\\Builder;

$posts = Post::whereDoesntHave(&#39;comments&#39;, function (Builder $query) {
    $query-&gt;where(&#39;content&#39;, &#39;like&#39;, &#39;code%&#39;);
})-&gt;get();
</code></pre><p>You may use &quot;dot&quot; notation to execute a query against a nested relationship. For example, the following query will retrieve all posts that do not have comments; however, posts that have comments from authors that are not banned will be included in the results:</p><pre><code>use Illuminate\\Database\\Eloquent\\Builder;

$posts = Post::whereDoesntHave(&#39;comments.author&#39;, function (Builder $query) {
    $query-&gt;where(&#39;banned&#39;, 0);
})-&gt;get();
</code></pre><p><a name="querying-morph-to-relationships"></a></p><h3 id="querying-morph-to-relationships" tabindex="-1"><a class="header-anchor" href="#querying-morph-to-relationships" aria-hidden="true">#</a> Querying Morph To Relationships</h3><p>To query the existence of &quot;morph to&quot; relationships, you may use the <code>whereHasMorph</code> and <code>whereDoesntHaveMorph</code> methods. These methods accept the name of the relationship as their first argument. Next, the methods accept the names of the related models that you wish to include in the query. Finally, you may provide a closure which customizes the relationship query:</p><pre><code>use App\\Models\\Comment;
use App\\Models\\Post;
use App\\Models\\Video;
use Illuminate\\Database\\Eloquent\\Builder;

// Retrieve comments associated to posts or videos with a title like code%...
$comments = Comment::whereHasMorph(
    &#39;commentable&#39;,
    [Post::class, Video::class],
    function (Builder $query) {
        $query-&gt;where(&#39;title&#39;, &#39;like&#39;, &#39;code%&#39;);
    }
)-&gt;get();

// Retrieve comments associated to posts with a title not like code%...
$comments = Comment::whereDoesntHaveMorph(
    &#39;commentable&#39;,
    Post::class,
    function (Builder $query) {
        $query-&gt;where(&#39;title&#39;, &#39;like&#39;, &#39;code%&#39;);
    }
)-&gt;get();
</code></pre><p>You may occasionally need to add query constraints based on the &quot;type&quot; of the related polymorphic model. The closure passed to the <code>whereHasMorph</code> method may receive a <code>$type</code> value as its second argument. This argument allows you to inspect the &quot;type&quot; of the query that is being built:</p><pre><code>use Illuminate\\Database\\Eloquent\\Builder;

$comments = Comment::whereHasMorph(
    &#39;commentable&#39;,
    [Post::class, Video::class],
    function (Builder $query, string $type) {
        $column = $type === Post::class ? &#39;content&#39; : &#39;title&#39;;

        $query-&gt;where($column, &#39;like&#39;, &#39;code%&#39;);
    }
)-&gt;get();
</code></pre><p><a name="querying-all-morph-to-related-models"></a></p><h4 id="querying-all-related-models" tabindex="-1"><a class="header-anchor" href="#querying-all-related-models" aria-hidden="true">#</a> Querying All Related Models</h4><p>Instead of passing an array of possible polymorphic models, you may provide <code>*</code> as a wildcard value. This will instruct Laravel to retrieve all of the possible polymorphic types from the database. Laravel will execute an additional query in order to perform this operation:</p><pre><code>use Illuminate\\Database\\Eloquent\\Builder;

$comments = Comment::whereHasMorph(&#39;commentable&#39;, &#39;*&#39;, function (Builder $query) {
    $query-&gt;where(&#39;title&#39;, &#39;like&#39;, &#39;foo%&#39;);
})-&gt;get();
</code></pre><p><a name="aggregating-related-models"></a></p><h2 id="aggregating-related-models" tabindex="-1"><a class="header-anchor" href="#aggregating-related-models" aria-hidden="true">#</a> Aggregating Related Models</h2><p><a name="counting-related-models"></a></p><h3 id="counting-related-models" tabindex="-1"><a class="header-anchor" href="#counting-related-models" aria-hidden="true">#</a> Counting Related Models</h3><p>Sometimes you may want to count the number of related models for a given relationship without actually loading the models. To accomplish this, you may use the <code>withCount</code> method. The <code>withCount</code> method will place a <code>{relation}_count</code> attribute on the resulting models:</p><pre><code>use App\\Models\\Post;

$posts = Post::withCount(&#39;comments&#39;)-&gt;get();

foreach ($posts as $post) {
    echo $post-&gt;comments_count;
}
</code></pre><p>By passing an array to the <code>withCount</code> method, you may add the &quot;counts&quot; for multiple relations as well as add additional constraints to the queries:</p><pre><code>use Illuminate\\Database\\Eloquent\\Builder;

$posts = Post::withCount([&#39;votes&#39;, &#39;comments&#39; =&gt; function (Builder $query) {
    $query-&gt;where(&#39;content&#39;, &#39;like&#39;, &#39;code%&#39;);
}])-&gt;get();

echo $posts[0]-&gt;votes_count;
echo $posts[0]-&gt;comments_count;
</code></pre><p>You may also alias the relationship count result, allowing multiple counts on the same relationship:</p><pre><code>use Illuminate\\Database\\Eloquent\\Builder;

$posts = Post::withCount([
    &#39;comments&#39;,
    &#39;comments as pending_comments_count&#39; =&gt; function (Builder $query) {
        $query-&gt;where(&#39;approved&#39;, false);
    },
])-&gt;get();

echo $posts[0]-&gt;comments_count;
echo $posts[0]-&gt;pending_comments_count;
</code></pre><p><a name="deferred-count-loading"></a></p><h4 id="deferred-count-loading" tabindex="-1"><a class="header-anchor" href="#deferred-count-loading" aria-hidden="true">#</a> Deferred Count Loading</h4><p>Using the <code>loadCount</code> method, you may load a relationship count after the parent model has already been retrieved:</p><pre><code>$book = Book::first();

$book-&gt;loadCount(&#39;genres&#39;);
</code></pre><p>If you need to set additional query constraints on the count query, you may pass an array keyed by the relationships you wish to count. The array values should be closures which receive the query builder instance:</p><pre><code>$book-&gt;loadCount([&#39;reviews&#39; =&gt; function (Builder $query) {
    $query-&gt;where(&#39;rating&#39;, 5);
}])
</code></pre><p><a name="relationship-counting-and-custom-select-statements"></a></p><h4 id="relationship-counting-custom-select-statements" tabindex="-1"><a class="header-anchor" href="#relationship-counting-custom-select-statements" aria-hidden="true">#</a> Relationship Counting &amp; Custom Select Statements</h4><p>If you&#39;re combining <code>withCount</code> with a <code>select</code> statement, ensure that you call <code>withCount</code> after the <code>select</code> method:</p><pre><code>$posts = Post::select([&#39;title&#39;, &#39;body&#39;])
                -&gt;withCount(&#39;comments&#39;)
                -&gt;get();
</code></pre><p><a name="other-aggregate-functions"></a></p><h3 id="other-aggregate-functions" tabindex="-1"><a class="header-anchor" href="#other-aggregate-functions" aria-hidden="true">#</a> Other Aggregate Functions</h3><p>In addition to the <code>withCount</code> method, Eloquent provides <code>withMin</code>, <code>withMax</code>, <code>withAvg</code>, <code>withSum</code>, and <code>withExists</code> methods. These methods will place a <code>{relation}_{function}_{column}</code> attribute on your resulting models:</p><pre><code>use App\\Models\\Post;

$posts = Post::withSum(&#39;comments&#39;, &#39;votes&#39;)-&gt;get();

foreach ($posts as $post) {
    echo $post-&gt;comments_sum_votes;
}
</code></pre><p>If you wish to access the result of the aggregate function using another name, you may specify your own alias:</p><pre><code>$posts = Post::withSum(&#39;comments as total_comments&#39;, &#39;votes&#39;)-&gt;get();

foreach ($posts as $post) {
    echo $post-&gt;total_comments;
}
</code></pre><p>Like the <code>loadCount</code> method, deferred versions of these methods are also available. These additional aggregate operations may be performed on Eloquent models that have already been retrieved:</p><pre><code>$post = Post::first();

$post-&gt;loadSum(&#39;comments&#39;, &#39;votes&#39;);
</code></pre><p>If you&#39;re combining these aggregate methods with a <code>select</code> statement, ensure that you call the aggregate methods after the <code>select</code> method:</p><pre><code>$posts = Post::select([&#39;title&#39;, &#39;body&#39;])
                -&gt;withExists(&#39;comments&#39;)
                -&gt;get();
</code></pre><p><a name="counting-related-models-on-morph-to-relationships"></a></p><h3 id="counting-related-models-on-morph-to-relationships" tabindex="-1"><a class="header-anchor" href="#counting-related-models-on-morph-to-relationships" aria-hidden="true">#</a> Counting Related Models On Morph To Relationships</h3><p>If you would like to eager load a &quot;morph to&quot; relationship, as well as related model counts for the various entities that may be returned by that relationship, you may utilize the <code>with</code> method in combination with the <code>morphTo</code> relationship&#39;s <code>morphWithCount</code> method.</p><p>In this example, let&#39;s assume that <code>Photo</code> and <code>Post</code> models may create <code>ActivityFeed</code> models. We will assume the <code>ActivityFeed</code> model defines a &quot;morph to&quot; relationship named <code>parentable</code> that allows us to retrieve the parent <code>Photo</code> or <code>Post</code> model for a given <code>ActivityFeed</code> instance. Additionally, let&#39;s assume that <code>Photo</code> models &quot;have many&quot; <code>Tag</code> models and <code>Post</code> models &quot;have many&quot; <code>Comment</code> models.</p><p>Now, let&#39;s imagine we want to retrieve <code>ActivityFeed</code> instances and eager load the <code>parentable</code> parent models for each <code>ActivityFeed</code> instance. In addition, we want to retrieve the number of tags that are associated with each parent photo and the number of comments that are associated with each parent post:</p><pre><code>use Illuminate\\Database\\Eloquent\\Relations\\MorphTo;

$activities = ActivityFeed::with([
    &#39;parentable&#39; =&gt; function (MorphTo $morphTo) {
        $morphTo-&gt;morphWithCount([
            Photo::class =&gt; [&#39;tags&#39;],
            Post::class =&gt; [&#39;comments&#39;],
        ]);
    }])-&gt;get();
</code></pre><p><a name="morph-to-deferred-count-loading"></a></p><h4 id="deferred-count-loading-1" tabindex="-1"><a class="header-anchor" href="#deferred-count-loading-1" aria-hidden="true">#</a> Deferred Count Loading</h4><p>Let&#39;s assume we have already retrieved a set of <code>ActivityFeed</code> models and now we would like to load the nested relationship counts for the various <code>parentable</code> models associated with the activity feeds. You may use the <code>loadMorphCount</code> method to accomplish this:</p><pre><code>$activities = ActivityFeed::with(&#39;parentable&#39;)-&gt;get();

$activities-&gt;loadMorphCount(&#39;parentable&#39;, [
    Photo::class =&gt; [&#39;tags&#39;],
    Post::class =&gt; [&#39;comments&#39;],
]);
</code></pre><p><a name="eager-loading"></a></p><h2 id="eager-loading" tabindex="-1"><a class="header-anchor" href="#eager-loading" aria-hidden="true">#</a> Eager Loading</h2><p>When accessing Eloquent relationships as properties, the related models are &quot;lazy loaded&quot;. This means the relationship data is not actually loaded until you first access the property. However, Eloquent can &quot;eager load&quot; relationships at the time you query the parent model. Eager loading alleviates the &quot;N + 1&quot; query problem. To illustrate the N + 1 query problem, consider a <code>Book</code> model that &quot;belongs to&quot; to an <code>Author</code> model:</p><pre><code>&lt;?php

namespace App\\Models;

use Illuminate\\Database\\Eloquent\\Model;
use Illuminate\\Database\\Eloquent\\Relations\\BelongsTo;

class Book extends Model
{
    /**
     * Get the author that wrote the book.
     */
    public function author(): BelongsTo
    {
        return $this-&gt;belongsTo(Author::class);
    }
}
</code></pre><p>Now, let&#39;s retrieve all books and their authors:</p><pre><code>use App\\Models\\Book;

$books = Book::all();

foreach ($books as $book) {
    echo $book-&gt;author-&gt;name;
}
</code></pre><p>This loop will execute one query to retrieve all of the books within the database table, then another query for each book in order to retrieve the book&#39;s author. So, if we have 25 books, the code above would run 26 queries: one for the original book, and 25 additional queries to retrieve the author of each book.</p><p>Thankfully, we can use eager loading to reduce this operation to just two queries. When building a query, you may specify which relationships should be eager loaded using the <code>with</code> method:</p><pre><code>$books = Book::with(&#39;author&#39;)-&gt;get();

foreach ($books as $book) {
    echo $book-&gt;author-&gt;name;
}
</code></pre><p>For this operation, only two queries will be executed - one query to retrieve all of the books and one query to retrieve all of the authors for all of the books:</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> books

<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> authors <span class="token keyword">where</span> id <span class="token operator">in</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="eager-loading-multiple-relationships"></a></p><h4 id="eager-loading-multiple-relationships" tabindex="-1"><a class="header-anchor" href="#eager-loading-multiple-relationships" aria-hidden="true">#</a> Eager Loading Multiple Relationships</h4><p>Sometimes you may need to eager load several different relationships. To do so, just pass an array of relationships to the <code>with</code> method:</p><pre><code>$books = Book::with([&#39;author&#39;, &#39;publisher&#39;])-&gt;get();
</code></pre><p><a name="nested-eager-loading"></a></p><h4 id="nested-eager-loading" tabindex="-1"><a class="header-anchor" href="#nested-eager-loading" aria-hidden="true">#</a> Nested Eager Loading</h4><p>To eager load a relationship&#39;s relationships, you may use &quot;dot&quot; syntax. For example, let&#39;s eager load all of the book&#39;s authors and all of the author&#39;s personal contacts:</p><pre><code>$books = Book::with(&#39;author.contacts&#39;)-&gt;get();
</code></pre><p>Alternatively, you may specify nested eager loaded relationships by providing a nested array to the <code>with</code> method, which can be convenient when eager loading multiple nested relationships:</p><pre><code>$books = Book::with([
    &#39;author&#39; =&gt; [
        &#39;contacts&#39;,
        &#39;publisher&#39;,
    ],
])-&gt;get();
</code></pre><p><a name="nested-eager-loading-morphto-relationships"></a></p><h4 id="nested-eager-loading-morphto-relationships" tabindex="-1"><a class="header-anchor" href="#nested-eager-loading-morphto-relationships" aria-hidden="true">#</a> Nested Eager Loading <code>morphTo</code> Relationships</h4><p>If you would like to eager load a <code>morphTo</code> relationship, as well as nested relationships on the various entities that may be returned by that relationship, you may use the <code>with</code> method in combination with the <code>morphTo</code> relationship&#39;s <code>morphWith</code> method. To help illustrate this method, let&#39;s consider the following model:</p><pre><code>&lt;?php

use Illuminate\\Database\\Eloquent\\Model;
use Illuminate\\Database\\Eloquent\\Relations\\MorphTo;

class ActivityFeed extends Model
{
    /**
     * Get the parent of the activity feed record.
     */
    public function parentable(): MorphTo
    {
        return $this-&gt;morphTo();
    }
}
</code></pre><p>In this example, let&#39;s assume <code>Event</code>, <code>Photo</code>, and <code>Post</code> models may create <code>ActivityFeed</code> models. Additionally, let&#39;s assume that <code>Event</code> models belong to a <code>Calendar</code> model, <code>Photo</code> models are associated with <code>Tag</code> models, and <code>Post</code> models belong to an <code>Author</code> model.</p><p>Using these model definitions and relationships, we may retrieve <code>ActivityFeed</code> model instances and eager load all <code>parentable</code> models and their respective nested relationships:</p><pre><code>use Illuminate\\Database\\Eloquent\\Relations\\MorphTo;

$activities = ActivityFeed::query()
    -&gt;with([&#39;parentable&#39; =&gt; function (MorphTo $morphTo) {
        $morphTo-&gt;morphWith([
            Event::class =&gt; [&#39;calendar&#39;],
            Photo::class =&gt; [&#39;tags&#39;],
            Post::class =&gt; [&#39;author&#39;],
        ]);
    }])-&gt;get();
</code></pre><p><a name="eager-loading-specific-columns"></a></p><h4 id="eager-loading-specific-columns" tabindex="-1"><a class="header-anchor" href="#eager-loading-specific-columns" aria-hidden="true">#</a> Eager Loading Specific Columns</h4><p>You may not always need every column from the relationships you are retrieving. For this reason, Eloquent allows you to specify which columns of the relationship you would like to retrieve:</p><pre><code>$books = Book::with(&#39;author:id,name,book_id&#39;)-&gt;get();
</code></pre><blockquote><p><strong>Warning</strong><br> When using this feature, you should always include the <code>id</code> column and any relevant foreign key columns in the list of columns you wish to retrieve.</p></blockquote><p><a name="eager-loading-by-default"></a></p><h4 id="eager-loading-by-default" tabindex="-1"><a class="header-anchor" href="#eager-loading-by-default" aria-hidden="true">#</a> Eager Loading By Default</h4><p>Sometimes you might want to always load some relationships when retrieving a model. To accomplish this, you may define a <code>$with</code> property on the model:</p><pre><code>&lt;?php

namespace App\\Models;

use Illuminate\\Database\\Eloquent\\Model;
use Illuminate\\Database\\Eloquent\\Relations\\BelongsTo;

class Book extends Model
{
    /**
     * The relationships that should always be loaded.
     *
     * @var array
     */
    protected $with = [&#39;author&#39;];

    /**
     * Get the author that wrote the book.
     */
    public function author(): BelongsTo
    {
        return $this-&gt;belongsTo(Author::class);
    }

    /**
     * Get the genre of the book.
     */
    public function genre(): BelongsTo
    {
        return $this-&gt;belongsTo(Genre::class);
    }
}
</code></pre><p>If you would like to remove an item from the <code>$with</code> property for a single query, you may use the <code>without</code> method:</p><pre><code>$books = Book::without(&#39;author&#39;)-&gt;get();
</code></pre><p>If you would like to override all items within the <code>$with</code> property for a single query, you may use the <code>withOnly</code> method:</p><pre><code>$books = Book::withOnly(&#39;genre&#39;)-&gt;get();
</code></pre><p><a name="constraining-eager-loads"></a></p><h3 id="constraining-eager-loads" tabindex="-1"><a class="header-anchor" href="#constraining-eager-loads" aria-hidden="true">#</a> Constraining Eager Loads</h3><p>Sometimes you may wish to eager load a relationship but also specify additional query conditions for the eager loading query. You can accomplish this by passing an array of relationships to the <code>with</code> method where the array key is a relationship name and the array value is a closure that adds additional constraints to the eager loading query:</p><pre><code>use App\\Models\\User;
use Illuminate\\Contracts\\Database\\Eloquent\\Builder;

$users = User::with([&#39;posts&#39; =&gt; function (Builder $query) {
    $query-&gt;where(&#39;title&#39;, &#39;like&#39;, &#39;%code%&#39;);
}])-&gt;get();
</code></pre><p>In this example, Eloquent will only eager load posts where the post&#39;s <code>title</code> column contains the word <code>code</code>. You may call other <a href="./queries">query builder</a> methods to further customize the eager loading operation:</p><pre><code>$users = User::with([&#39;posts&#39; =&gt; function (Builder $query) {
    $query-&gt;orderBy(&#39;created_at&#39;, &#39;desc&#39;);
}])-&gt;get();
</code></pre><blockquote><p><strong>Warning</strong><br> The <code>limit</code> and <code>take</code> query builder methods may not be used when constraining eager loads.</p></blockquote><p><a name="constraining-eager-loading-of-morph-to-relationships"></a></p><h4 id="constraining-eager-loading-of-morphto-relationships" tabindex="-1"><a class="header-anchor" href="#constraining-eager-loading-of-morphto-relationships" aria-hidden="true">#</a> Constraining Eager Loading Of <code>morphTo</code> Relationships</h4><p>If you are eager loading a <code>morphTo</code> relationship, Eloquent will run multiple queries to fetch each type of related model. You may add additional constraints to each of these queries using the <code>MorphTo</code> relation&#39;s <code>constrain</code> method:</p><pre><code>use Illuminate\\Database\\Eloquent\\Relations\\MorphTo;

$comments = Comment::with([&#39;commentable&#39; =&gt; function (MorphTo $morphTo) {
    $morphTo-&gt;constrain([
        Post::class =&gt; function ($query) {
            $query-&gt;whereNull(&#39;hidden_at&#39;);
        },
        Video::class =&gt; function ($query) {
            $query-&gt;where(&#39;type&#39;, &#39;educational&#39;);
        },
    ]);
}])-&gt;get();
</code></pre><p>In this example, Eloquent will only eager load posts that have not been hidden and videos that have a <code>type</code> value of &quot;educational&quot;.</p><p><a name="constraining-eager-loads-with-relationship-existence"></a></p><h4 id="constraining-eager-loads-with-relationship-existence" tabindex="-1"><a class="header-anchor" href="#constraining-eager-loads-with-relationship-existence" aria-hidden="true">#</a> Constraining Eager Loads With Relationship Existence</h4><p>You may sometimes find yourself needing to check for the existence of a relationship while simultaneously loading the relationship based on the same conditions. For example, you may wish to only retrieve <code>User</code> models that have child <code>Post</code> models matching a given query condition while also eager loading the matching posts. You may accomplish this using the <code>withWhereHas</code> method:</p><pre><code>use App\\Models\\User;

$users = User::withWhereHas(&#39;posts&#39;, function ($query) {
    $query-&gt;where(&#39;featured&#39;, true);
})-&gt;get();
</code></pre><p><a name="lazy-eager-loading"></a></p><h3 id="lazy-eager-loading" tabindex="-1"><a class="header-anchor" href="#lazy-eager-loading" aria-hidden="true">#</a> Lazy Eager Loading</h3><p>Sometimes you may need to eager load a relationship after the parent model has already been retrieved. For example, this may be useful if you need to dynamically decide whether to load related models:</p><pre><code>use App\\Models\\Book;

$books = Book::all();

if ($someCondition) {
    $books-&gt;load(&#39;author&#39;, &#39;publisher&#39;);
}
</code></pre><p>If you need to set additional query constraints on the eager loading query, you may pass an array keyed by the relationships you wish to load. The array values should be closure instances which receive the query instance:</p><pre><code>$author-&gt;load([&#39;books&#39; =&gt; function (Builder $query) {
    $query-&gt;orderBy(&#39;published_date&#39;, &#39;asc&#39;);
}]);
</code></pre><p>To load a relationship only when it has not already been loaded, use the <code>loadMissing</code> method:</p><pre><code>$book-&gt;loadMissing(&#39;author&#39;);
</code></pre><p><a name="nested-lazy-eager-loading-morphto"></a></p><h4 id="nested-lazy-eager-loading-morphto" tabindex="-1"><a class="header-anchor" href="#nested-lazy-eager-loading-morphto" aria-hidden="true">#</a> Nested Lazy Eager Loading &amp; <code>morphTo</code></h4><p>If you would like to eager load a <code>morphTo</code> relationship, as well as nested relationships on the various entities that may be returned by that relationship, you may use the <code>loadMorph</code> method.</p><p>This method accepts the name of the <code>morphTo</code> relationship as its first argument, and an array of model / relationship pairs as its second argument. To help illustrate this method, let&#39;s consider the following model:</p><pre><code>&lt;?php

use Illuminate\\Database\\Eloquent\\Model;
use Illuminate\\Database\\Eloquent\\Relations\\MorphTo;

class ActivityFeed extends Model
{
    /**
     * Get the parent of the activity feed record.
     */
    public function parentable(): MorphTo
    {
        return $this-&gt;morphTo();
    }
}
</code></pre><p>In this example, let&#39;s assume <code>Event</code>, <code>Photo</code>, and <code>Post</code> models may create <code>ActivityFeed</code> models. Additionally, let&#39;s assume that <code>Event</code> models belong to a <code>Calendar</code> model, <code>Photo</code> models are associated with <code>Tag</code> models, and <code>Post</code> models belong to an <code>Author</code> model.</p><p>Using these model definitions and relationships, we may retrieve <code>ActivityFeed</code> model instances and eager load all <code>parentable</code> models and their respective nested relationships:</p><pre><code>$activities = ActivityFeed::with(&#39;parentable&#39;)
    -&gt;get()
    -&gt;loadMorph(&#39;parentable&#39;, [
        Event::class =&gt; [&#39;calendar&#39;],
        Photo::class =&gt; [&#39;tags&#39;],
        Post::class =&gt; [&#39;author&#39;],
    ]);
</code></pre><p><a name="preventing-lazy-loading"></a></p><h3 id="preventing-lazy-loading" tabindex="-1"><a class="header-anchor" href="#preventing-lazy-loading" aria-hidden="true">#</a> Preventing Lazy Loading</h3><p>As previously discussed, eager loading relationships can often provide significant performance benefits to your application. Therefore, if you would like, you may instruct Laravel to always prevent the lazy loading of relationships. To accomplish this, you may invoke the <code>preventLazyLoading</code> method offered by the base Eloquent model class. Typically, you should call this method within the <code>boot</code> method of your application&#39;s <code>AppServiceProvider</code> class.</p><p>The <code>preventLazyLoading</code> method accepts an optional boolean argument that indicates if lazy loading should be prevented. For example, you may wish to only disable lazy loading in non-production environments so that your production environment will continue to function normally even if a lazy loaded relationship is accidentally present in production code:</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Database<span class="token punctuation">\\</span>Eloquent<span class="token punctuation">\\</span>Model</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * Bootstrap any application services.
 */</span>
<span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">boot</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">void</span>
<span class="token punctuation">{</span>
    <span class="token class-name static-context">Model</span><span class="token operator">::</span><span class="token function">preventLazyLoading</span><span class="token punctuation">(</span><span class="token operator">!</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">app</span><span class="token operator">-&gt;</span><span class="token function">isProduction</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>After preventing lazy loading, Eloquent will throw a <code>Illuminate\\Database\\LazyLoadingViolationException</code> exception when your application attempts to lazy load any Eloquent relationship.</p><p>You may customize the behavior of lazy loading violations using the <code>handleLazyLoadingViolationsUsing</code> method. For example, using this method, you may instruct lazy loading violations to only be logged instead of interrupting the application&#39;s execution with exceptions:</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token class-name static-context">Model</span><span class="token operator">::</span><span class="token function">handleLazyLoadingViolationUsing</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token class-name type-declaration">Model</span> <span class="token variable">$model</span><span class="token punctuation">,</span> <span class="token keyword type-hint">string</span> <span class="token variable">$relation</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token variable">$class</span> <span class="token operator">=</span> <span class="token variable">$model</span><span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">;</span>

    <span class="token function">info</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;Attempted to lazy load [<span class="token interpolation"><span class="token punctuation">{</span><span class="token variable">$relation</span><span class="token punctuation">}</span></span>] on model [<span class="token interpolation"><span class="token punctuation">{</span><span class="token variable">$class</span><span class="token punctuation">}</span></span>].&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="inserting-and-updating-related-models"></a></p><h2 id="inserting-updating-related-models" tabindex="-1"><a class="header-anchor" href="#inserting-updating-related-models" aria-hidden="true">#</a> Inserting &amp; Updating Related Models</h2><p><a name="the-save-method"></a></p><h3 id="the-save-method" tabindex="-1"><a class="header-anchor" href="#the-save-method" aria-hidden="true">#</a> The <code>save</code> Method</h3><p>Eloquent provides convenient methods for adding new models to relationships. For example, perhaps you need to add a new comment to a post. Instead of manually setting the <code>post_id</code> attribute on the <code>Comment</code> model you may insert the comment using the relationship&#39;s <code>save</code> method:</p><pre><code>use App\\Models\\Comment;
use App\\Models\\Post;

$comment = new Comment([&#39;message&#39; =&gt; &#39;A new comment.&#39;]);

$post = Post::find(1);

$post-&gt;comments()-&gt;save($comment);
</code></pre><p>Note that we did not access the <code>comments</code> relationship as a dynamic property. Instead, we called the <code>comments</code> method to obtain an instance of the relationship. The <code>save</code> method will automatically add the appropriate <code>post_id</code> value to the new <code>Comment</code> model.</p><p>If you need to save multiple related models, you may use the <code>saveMany</code> method:</p><pre><code>$post = Post::find(1);

$post-&gt;comments()-&gt;saveMany([
    new Comment([&#39;message&#39; =&gt; &#39;A new comment.&#39;]),
    new Comment([&#39;message&#39; =&gt; &#39;Another new comment.&#39;]),
]);
</code></pre><p>The <code>save</code> and <code>saveMany</code> methods will persist the given model instances, but will not add the newly persisted models to any in-memory relationships that are already loaded onto the parent model. If you plan on accessing the relationship after using the <code>save</code> or <code>saveMany</code> methods, you may wish to use the <code>refresh</code> method to reload the model and its relationships:</p><pre><code>$post-&gt;comments()-&gt;save($comment);

$post-&gt;refresh();

// All comments, including the newly saved comment...
$post-&gt;comments;
</code></pre><p><a name="the-push-method"></a></p><h4 id="recursively-saving-models-relationships" tabindex="-1"><a class="header-anchor" href="#recursively-saving-models-relationships" aria-hidden="true">#</a> Recursively Saving Models &amp; Relationships</h4><p>If you would like to <code>save</code> your model and all of its associated relationships, you may use the <code>push</code> method. In this example, the <code>Post</code> model will be saved as well as its comments and the comment&#39;s authors:</p><pre><code>$post = Post::find(1);

$post-&gt;comments[0]-&gt;message = &#39;Message&#39;;
$post-&gt;comments[0]-&gt;author-&gt;name = &#39;Author Name&#39;;

$post-&gt;push();
</code></pre><p>The <code>pushQuietly</code> method may be used to save a model and its associated relationships without raising any events:</p><pre><code>$post-&gt;pushQuietly();
</code></pre><p><a name="the-create-method"></a></p><h3 id="the-create-method" tabindex="-1"><a class="header-anchor" href="#the-create-method" aria-hidden="true">#</a> The <code>create</code> Method</h3><p>In addition to the <code>save</code> and <code>saveMany</code> methods, you may also use the <code>create</code> method, which accepts an array of attributes, creates a model, and inserts it into the database. The difference between <code>save</code> and <code>create</code> is that <code>save</code> accepts a full Eloquent model instance while <code>create</code> accepts a plain PHP <code>array</code>. The newly created model will be returned by the <code>create</code> method:</p><pre><code>use App\\Models\\Post;

$post = Post::find(1);

$comment = $post-&gt;comments()-&gt;create([
    &#39;message&#39; =&gt; &#39;A new comment.&#39;,
]);
</code></pre><p>You may use the <code>createMany</code> method to create multiple related models:</p><pre><code>$post = Post::find(1);

$post-&gt;comments()-&gt;createMany([
    [&#39;message&#39; =&gt; &#39;A new comment.&#39;],
    [&#39;message&#39; =&gt; &#39;Another new comment.&#39;],
]);
</code></pre><p>The <code>createQuietly</code> and <code>createManyQuietly</code> methods may be used to create a model(s) without dispatching any events:</p><pre><code>$user = User::find(1);

$user-&gt;posts()-&gt;createQuietly([
    &#39;title&#39; =&gt; &#39;Post title.&#39;,
]);

$user-&gt;posts()-&gt;createManyQuietly([
    [&#39;title&#39; =&gt; &#39;First post.&#39;],
    [&#39;title&#39; =&gt; &#39;Second post.&#39;],
]);
</code></pre><p>You may also use the <code>findOrNew</code>, <code>firstOrNew</code>, <code>firstOrCreate</code>, and <code>updateOrCreate</code> methods to <a href="./eloquent#upserts">create and update models on relationships</a>.</p><blockquote><p><strong>Note</strong><br> Before using the <code>create</code> method, be sure to review the <a href="./eloquent#mass-assignment">mass assignment</a> documentation.</p></blockquote><p><a name="updating-belongs-to-relationships"></a></p><h3 id="belongs-to-relationships" tabindex="-1"><a class="header-anchor" href="#belongs-to-relationships" aria-hidden="true">#</a> Belongs To Relationships</h3><p>If you would like to assign a child model to a new parent model, you may use the <code>associate</code> method. In this example, the <code>User</code> model defines a <code>belongsTo</code> relationship to the <code>Account</code> model. This <code>associate</code> method will set the foreign key on the child model:</p><pre><code>use App\\Models\\Account;

$account = Account::find(10);

$user-&gt;account()-&gt;associate($account);

$user-&gt;save();
</code></pre><p>To remove a parent model from a child model, you may use the <code>dissociate</code> method. This method will set the relationship&#39;s foreign key to <code>null</code>:</p><pre><code>$user-&gt;account()-&gt;dissociate();

$user-&gt;save();
</code></pre><p><a name="updating-many-to-many-relationships"></a></p><h3 id="many-to-many-relationships-1" tabindex="-1"><a class="header-anchor" href="#many-to-many-relationships-1" aria-hidden="true">#</a> Many To Many Relationships</h3><p><a name="attaching-detaching"></a></p><h4 id="attaching-detaching" tabindex="-1"><a class="header-anchor" href="#attaching-detaching" aria-hidden="true">#</a> Attaching / Detaching</h4><p>Eloquent also provides methods to make working with many-to-many relationships more convenient. For example, let&#39;s imagine a user can have many roles and a role can have many users. You may use the <code>attach</code> method to attach a role to a user by inserting a record in the relationship&#39;s intermediate table:</p><pre><code>use App\\Models\\User;

$user = User::find(1);

$user-&gt;roles()-&gt;attach($roleId);
</code></pre><p>When attaching a relationship to a model, you may also pass an array of additional data to be inserted into the intermediate table:</p><pre><code>$user-&gt;roles()-&gt;attach($roleId, [&#39;expires&#39; =&gt; $expires]);
</code></pre><p>Sometimes it may be necessary to remove a role from a user. To remove a many-to-many relationship record, use the <code>detach</code> method. The <code>detach</code> method will delete the appropriate record out of the intermediate table; however, both models will remain in the database:</p><pre><code>// Detach a single role from the user...
$user-&gt;roles()-&gt;detach($roleId);

// Detach all roles from the user...
$user-&gt;roles()-&gt;detach();
</code></pre><p>For convenience, <code>attach</code> and <code>detach</code> also accept arrays of IDs as input:</p><pre><code>$user = User::find(1);

$user-&gt;roles()-&gt;detach([1, 2, 3]);

$user-&gt;roles()-&gt;attach([
    1 =&gt; [&#39;expires&#39; =&gt; $expires],
    2 =&gt; [&#39;expires&#39; =&gt; $expires],
]);
</code></pre><p><a name="syncing-associations"></a></p><h4 id="syncing-associations" tabindex="-1"><a class="header-anchor" href="#syncing-associations" aria-hidden="true">#</a> Syncing Associations</h4><p>You may also use the <code>sync</code> method to construct many-to-many associations. The <code>sync</code> method accepts an array of IDs to place on the intermediate table. Any IDs that are not in the given array will be removed from the intermediate table. So, after this operation is complete, only the IDs in the given array will exist in the intermediate table:</p><pre><code>$user-&gt;roles()-&gt;sync([1, 2, 3]);
</code></pre><p>You may also pass additional intermediate table values with the IDs:</p><pre><code>$user-&gt;roles()-&gt;sync([1 =&gt; [&#39;expires&#39; =&gt; true], 2, 3]);
</code></pre><p>If you would like to insert the same intermediate table values with each of the synced model IDs, you may use the <code>syncWithPivotValues</code> method:</p><pre><code>$user-&gt;roles()-&gt;syncWithPivotValues([1, 2, 3], [&#39;active&#39; =&gt; true]);
</code></pre><p>If you do not want to detach existing IDs that are missing from the given array, you may use the <code>syncWithoutDetaching</code> method:</p><pre><code>$user-&gt;roles()-&gt;syncWithoutDetaching([1, 2, 3]);
</code></pre><p><a name="toggling-associations"></a></p><h4 id="toggling-associations" tabindex="-1"><a class="header-anchor" href="#toggling-associations" aria-hidden="true">#</a> Toggling Associations</h4><p>The many-to-many relationship also provides a <code>toggle</code> method which &quot;toggles&quot; the attachment status of the given related model IDs. If the given ID is currently attached, it will be detached. Likewise, if it is currently detached, it will be attached:</p><pre><code>$user-&gt;roles()-&gt;toggle([1, 2, 3]);
</code></pre><p>You may also pass additional intermediate table values with the IDs:</p><pre><code>$user-&gt;roles()-&gt;toggle([
    1 =&gt; [&#39;expires&#39; =&gt; true],
    2 =&gt; [&#39;expires&#39; =&gt; true],
]);
</code></pre><p><a name="updating-a-record-on-the-intermediate-table"></a></p><h4 id="updating-a-record-on-the-intermediate-table" tabindex="-1"><a class="header-anchor" href="#updating-a-record-on-the-intermediate-table" aria-hidden="true">#</a> Updating A Record On The Intermediate Table</h4><p>If you need to update an existing row in your relationship&#39;s intermediate table, you may use the <code>updateExistingPivot</code> method. This method accepts the intermediate record foreign key and an array of attributes to update:</p><pre><code>$user = User::find(1);

$user-&gt;roles()-&gt;updateExistingPivot($roleId, [
    &#39;active&#39; =&gt; false,
]);
</code></pre><p><a name="touching-parent-timestamps"></a></p><h2 id="touching-parent-timestamps" tabindex="-1"><a class="header-anchor" href="#touching-parent-timestamps" aria-hidden="true">#</a> Touching Parent Timestamps</h2><p>When a model defines a <code>belongsTo</code> or <code>belongsToMany</code> relationship to another model, such as a <code>Comment</code> which belongs to a <code>Post</code>, it is sometimes helpful to update the parent&#39;s timestamp when the child model is updated.</p><p>For example, when a <code>Comment</code> model is updated, you may want to automatically &quot;touch&quot; the <code>updated_at</code> timestamp of the owning <code>Post</code> so that it is set to the current date and time. To accomplish this, you may add a <code>touches</code> property to your child model containing the names of the relationships that should have their <code>updated_at</code> timestamps updated when the child model is updated:</p><pre><code>&lt;?php

namespace App\\Models;

use Illuminate\\Database\\Eloquent\\Model;
use Illuminate\\Database\\Eloquent\\Relations\\BelongsTo;

class Comment extends Model
{
    /**
     * All of the relationships to be touched.
     *
     * @var array
     */
    protected $touches = [&#39;post&#39;];

    /**
     * Get the post that the comment belongs to.
     */
    public function post(): BelongsTo
    {
        return $this-&gt;belongsTo(Post::class);
    }
}
</code></pre><blockquote><p><strong>Warning</strong><br> Parent model timestamps will only be updated if the child model is updated using Eloquent&#39;s <code>save</code> method.</p></blockquote>`,415);function P(_,E){const a=i("ExternalLinkIcon");return r(),l("div",null,[c,p,h,e("p",null,[n("The "),u,n(", "),m,n(", "),g,n(", and "),y,n(" relationships allow you to define a default model that will be returned if the given relationship is "),f,n(". This pattern is often referred to as the "),e("a",b,[n("Null Object pattern"),t(a)]),n(" and can help remove conditional checks in your code. In the following example, the "),v,n(" relation will return an empty "),k,n(" model if no user is attached to the "),w,n(" model:")]),q,e("p",null,[n(`The "has-many-through" relationship provides a convenient way to access distant relations via an intermediate relation. For example, let's assume we are building a deployment platform like `),e("a",M,[n("Laravel Vapor"),t(a)]),n(". A "),T,n(" model might access many "),$,n(" models through an intermediate "),x,n(" model. Using this example, you could easily gather all deployments for a given project. Let's look at the tables required to define this relationship:")]),I])}const R=s(d,[["render",P],["__file","eloquent-relationships.html.vue"]]);export{R as default};
