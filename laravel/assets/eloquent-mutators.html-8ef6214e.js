import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{r as i,o as r,c,b as e,d as a,e as s,a as t}from"./app-06635a3b.js";const l={},d=t(`<h1 id="eloquent-mutators-casting" tabindex="-1"><a class="header-anchor" href="#eloquent-mutators-casting" aria-hidden="true">#</a> Eloquent: Mutators &amp; Casting</h1><ul><li><a href="#introduction">Introduction</a></li><li><a href="#accessors-and-mutators">Accessors &amp; Mutators</a><ul><li><a href="#defining-an-accessor">Defining An Accessor</a></li><li><a href="#defining-a-mutator">Defining A Mutator</a></li></ul></li><li><a href="#attribute-casting">Attribute Casting</a><ul><li><a href="#array-and-json-casting">Array &amp; JSON Casting</a></li><li><a href="#date-casting">Date Casting</a></li><li><a href="#enum-casting">Enum Casting</a></li><li><a href="#encrypted-casting">Encrypted Casting</a></li><li><a href="#query-time-casting">Query Time Casting</a></li></ul></li><li><a href="#custom-casts">Custom Casts</a><ul><li><a href="#value-object-casting">Value Object Casting</a></li><li><a href="#array-json-serialization">Array / JSON Serialization</a></li><li><a href="#inbound-casting">Inbound Casting</a></li><li><a href="#cast-parameters">Cast Parameters</a></li><li><a href="#castables">Castables</a></li></ul></li></ul><p><a name="introduction"></a></p><h2 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h2><p>Accessors, mutators, and attribute casting allow you to transform Eloquent attribute values when you retrieve or set them on model instances. For example, you may want to use the <a href="./encryption">Laravel encrypter</a> to encrypt a value while it is stored in the database, and then automatically decrypt the attribute when you access it on an Eloquent model. Or, you may want to convert a JSON string that is stored in your database to an array when it is accessed via your Eloquent model.</p><p><a name="accessors-and-mutators"></a></p><h2 id="accessors-mutators" tabindex="-1"><a class="header-anchor" href="#accessors-mutators" aria-hidden="true">#</a> Accessors &amp; Mutators</h2><p><a name="defining-an-accessor"></a></p><h3 id="defining-an-accessor" tabindex="-1"><a class="header-anchor" href="#defining-an-accessor" aria-hidden="true">#</a> Defining An Accessor</h3><p>An accessor transforms an Eloquent attribute value when it is accessed. To define an accessor, create a protected method on your model to represent the accessible attribute. This method name should correspond to the &quot;camel case&quot; representation of the true underlying model attribute / database column when applicable.</p><p>In this example, we&#39;ll define an accessor for the <code>first_name</code> attribute. The accessor will automatically be called by Eloquent when attempting to retrieve the value of the <code>first_name</code> attribute. All attribute accessor / mutator methods must declare a return type-hint of <code>Illuminate\\Database\\Eloquent\\Casts\\Attribute</code>:</p><pre><code>&lt;?php

namespace App\\Models;

use Illuminate\\Database\\Eloquent\\Casts\\Attribute;
use Illuminate\\Database\\Eloquent\\Model;

class User extends Model
{
    /**
     * Get the user&#39;s first name.
     */
    protected function firstName(): Attribute
    {
        return Attribute::make(
            get: fn (string $value) =&gt; ucfirst($value),
        );
    }
}
</code></pre><p>All accessor methods return an <code>Attribute</code> instance which defines how the attribute will be accessed and, optionally, mutated. In this example, we are only defining how the attribute will be accessed. To do so, we supply the <code>get</code> argument to the <code>Attribute</code> class constructor.</p><p>As you can see, the original value of the column is passed to the accessor, allowing you to manipulate and return the value. To access the value of the accessor, you may simply access the <code>first_name</code> attribute on a model instance:</p><pre><code>use App\\Models\\User;

$user = User::find(1);

$firstName = $user-&gt;first_name;
</code></pre><blockquote><p><strong>Note</strong><br> If you would like these computed values to be added to the array / JSON representations of your model, <a href="./eloquent-serialization#appending-values-to-json">you will need to append them</a>.</p></blockquote><p><a name="building-value-objects-from-multiple-attributes"></a></p><h4 id="building-value-objects-from-multiple-attributes" tabindex="-1"><a class="header-anchor" href="#building-value-objects-from-multiple-attributes" aria-hidden="true">#</a> Building Value Objects From Multiple Attributes</h4><p>Sometimes your accessor may need to transform multiple model attributes into a single &quot;value object&quot;. To do so, your <code>get</code> closure may accept a second argument of <code>$attributes</code>, which will be automatically supplied to the closure and will contain an array of all of the model&#39;s current attributes:</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">App<span class="token punctuation">\\</span>Support<span class="token punctuation">\\</span>Address</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Database<span class="token punctuation">\\</span>Eloquent<span class="token punctuation">\\</span>Casts<span class="token punctuation">\\</span>Attribute</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * Interact with the user&#39;s address.
 */</span>
<span class="token keyword">protected</span> <span class="token keyword">function</span> <span class="token function-definition function">address</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token class-name return-type">Attribute</span>
<span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token class-name static-context">Attribute</span><span class="token operator">::</span><span class="token function">make</span><span class="token punctuation">(</span>
        <span class="token argument-name">get</span><span class="token punctuation">:</span> <span class="token keyword">fn</span> <span class="token punctuation">(</span><span class="token keyword type-hint">mixed</span> <span class="token variable">$value</span><span class="token punctuation">,</span> <span class="token keyword type-hint">array</span> <span class="token variable">$attributes</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">new</span> <span class="token class-name">Address</span><span class="token punctuation">(</span>
            <span class="token variable">$attributes</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;address_line_one&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token variable">$attributes</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;address_line_two&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="accessor-caching"></a></p><h4 id="accessor-caching" tabindex="-1"><a class="header-anchor" href="#accessor-caching" aria-hidden="true">#</a> Accessor Caching</h4><p>When returning value objects from accessors, any changes made to the value object will automatically be synced back to the model before the model is saved. This is possible because Eloquent retains instances returned by accessors so it can return the same instance each time the accessor is invoked:</p><pre><code>use App\\Models\\User;

$user = User::find(1);

$user-&gt;address-&gt;lineOne = &#39;Updated Address Line 1 Value&#39;;
$user-&gt;address-&gt;lineTwo = &#39;Updated Address Line 2 Value&#39;;

$user-&gt;save();
</code></pre><p>However, you may sometimes wish to enable caching for primitive values like strings and booleans, particularly if they are computationally intensive. To accomplish this, you may invoke the <code>shouldCache</code> method when defining your accessor:</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">protected</span> <span class="token keyword">function</span> <span class="token function-definition function">hash</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token class-name return-type">Attribute</span>
<span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token class-name static-context">Attribute</span><span class="token operator">::</span><span class="token function">make</span><span class="token punctuation">(</span>
        <span class="token argument-name">get</span><span class="token punctuation">:</span> <span class="token keyword">fn</span> <span class="token punctuation">(</span><span class="token keyword type-hint">string</span> <span class="token variable">$value</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">bcrypt</span><span class="token punctuation">(</span><span class="token function">gzuncompress</span><span class="token punctuation">(</span><span class="token variable">$value</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">shouldCache</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>If you would like to disable the object caching behavior of attributes, you may invoke the <code>withoutObjectCaching</code> method when defining the attribute:</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token doc-comment comment">/**
 * Interact with the user&#39;s address.
 */</span>
<span class="token keyword">protected</span> <span class="token keyword">function</span> <span class="token function-definition function">address</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token class-name return-type">Attribute</span>
<span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token class-name static-context">Attribute</span><span class="token operator">::</span><span class="token function">make</span><span class="token punctuation">(</span>
        <span class="token argument-name">get</span><span class="token punctuation">:</span> <span class="token keyword">fn</span> <span class="token punctuation">(</span><span class="token keyword type-hint">mixed</span> <span class="token variable">$value</span><span class="token punctuation">,</span> <span class="token keyword type-hint">array</span> <span class="token variable">$attributes</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">new</span> <span class="token class-name">Address</span><span class="token punctuation">(</span>
            <span class="token variable">$attributes</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;address_line_one&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token variable">$attributes</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;address_line_two&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">withoutObjectCaching</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="defining-a-mutator"></a></p><h3 id="defining-a-mutator" tabindex="-1"><a class="header-anchor" href="#defining-a-mutator" aria-hidden="true">#</a> Defining A Mutator</h3><p>A mutator transforms an Eloquent attribute value when it is set. To define a mutator, you may provide the <code>set</code> argument when defining your attribute. Let&#39;s define a mutator for the <code>first_name</code> attribute. This mutator will be automatically called when we attempt to set the value of the <code>first_name</code> attribute on the model:</p><pre><code>&lt;?php

namespace App\\Models;

use Illuminate\\Database\\Eloquent\\Casts\\Attribute;
use Illuminate\\Database\\Eloquent\\Model;

class User extends Model
{
    /**
     * Interact with the user&#39;s first name.
     */
    protected function firstName(): Attribute
    {
        return Attribute::make(
            get: fn (string $value) =&gt; ucfirst($value),
            set: fn (string $value) =&gt; strtolower($value),
        );
    }
}
</code></pre><p>The mutator closure will receive the value that is being set on the attribute, allowing you to manipulate the value and return the manipulated value. To use our mutator, we only need to set the <code>first_name</code> attribute on an Eloquent model:</p><pre><code>use App\\Models\\User;

$user = User::find(1);

$user-&gt;first_name = &#39;Sally&#39;;
</code></pre><p>In this example, the <code>set</code> callback will be called with the value <code>Sally</code>. The mutator will then apply the <code>strtolower</code> function to the name and set its resulting value in the model&#39;s internal <code>$attributes</code> array.</p><p><a name="mutating-multiple-attributes"></a></p><h4 id="mutating-multiple-attributes" tabindex="-1"><a class="header-anchor" href="#mutating-multiple-attributes" aria-hidden="true">#</a> Mutating Multiple Attributes</h4><p>Sometimes your mutator may need to set multiple attributes on the underlying model. To do so, you may return an array from the <code>set</code> closure. Each key in the array should correspond with an underlying attribute / database column associated with the model:</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">App<span class="token punctuation">\\</span>Support<span class="token punctuation">\\</span>Address</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Database<span class="token punctuation">\\</span>Eloquent<span class="token punctuation">\\</span>Casts<span class="token punctuation">\\</span>Attribute</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * Interact with the user&#39;s address.
 */</span>
<span class="token keyword">protected</span> <span class="token keyword">function</span> <span class="token function-definition function">address</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token class-name return-type">Attribute</span>
<span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token class-name static-context">Attribute</span><span class="token operator">::</span><span class="token function">make</span><span class="token punctuation">(</span>
        <span class="token argument-name">get</span><span class="token punctuation">:</span> <span class="token keyword">fn</span> <span class="token punctuation">(</span><span class="token keyword type-hint">mixed</span> <span class="token variable">$value</span><span class="token punctuation">,</span> <span class="token keyword type-hint">array</span> <span class="token variable">$attributes</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">new</span> <span class="token class-name">Address</span><span class="token punctuation">(</span>
            <span class="token variable">$attributes</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;address_line_one&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token variable">$attributes</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;address_line_two&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token argument-name">set</span><span class="token punctuation">:</span> <span class="token keyword">fn</span> <span class="token punctuation">(</span><span class="token class-name type-declaration">Address</span> <span class="token variable">$value</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>
            <span class="token string single-quoted-string">&#39;address_line_one&#39;</span> <span class="token operator">=&gt;</span> <span class="token variable">$value</span><span class="token operator">-&gt;</span><span class="token property">lineOne</span><span class="token punctuation">,</span>
            <span class="token string single-quoted-string">&#39;address_line_two&#39;</span> <span class="token operator">=&gt;</span> <span class="token variable">$value</span><span class="token operator">-&gt;</span><span class="token property">lineTwo</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="attribute-casting"></a></p><h2 id="attribute-casting" tabindex="-1"><a class="header-anchor" href="#attribute-casting" aria-hidden="true">#</a> Attribute Casting</h2><p>Attribute casting provides functionality similar to accessors and mutators without requiring you to define any additional methods on your model. Instead, your model&#39;s <code>$casts</code> property provides a convenient method of converting attributes to common data types.</p><p>The <code>$casts</code> property should be an array where the key is the name of the attribute being cast and the value is the type you wish to cast the column to. The supported cast types are:</p>`,43),u=e("div",{class:"content-list",markdown:"1"},[e("ul",null,[e("li",null,[e("code",null,"array")]),e("li",null,[e("code",null,"AsStringable::class")]),e("li",null,[e("code",null,"boolean")]),e("li",null,[e("code",null,"collection")]),e("li",null,[e("code",null,"date")]),e("li",null,[e("code",null,"datetime")]),e("li",null,[e("code",null,"immutable_date")]),e("li",null,[e("code",null,"immutable_datetime")]),e("li",null,[e("code",null,"decimal:<precision>")]),e("li",null,[e("code",null,"double")]),e("li",null,[e("code",null,"encrypted")]),e("li",null,[e("code",null,"encrypted:array")]),e("li",null,[e("code",null,"encrypted:collection")]),e("li",null,[e("code",null,"encrypted:object")]),e("li",null,[e("code",null,"float")]),e("li",null,[e("code",null,"hashed")]),e("li",null,[e("code",null,"integer")]),e("li",null,[e("code",null,"object")]),e("li",null,[e("code",null,"real")]),e("li",null,[e("code",null,"string")]),e("li",null,[e("code",null,"timestamp")])])],-1),p=t(`<p>To demonstrate attribute casting, let&#39;s cast the <code>is_admin</code> attribute, which is stored in our database as an integer (<code>0</code> or <code>1</code>) to a boolean value:</p><pre><code>&lt;?php

namespace App\\Models;

use Illuminate\\Database\\Eloquent\\Model;

class User extends Model
{
    /**
     * The attributes that should be cast.
     *
     * @var array
     */
    protected $casts = [
        &#39;is_admin&#39; =&gt; &#39;boolean&#39;,
    ];
}
</code></pre><p>After defining the cast, the <code>is_admin</code> attribute will always be cast to a boolean when you access it, even if the underlying value is stored in the database as an integer:</p><pre><code>$user = App\\Models\\User::find(1);

if ($user-&gt;is_admin) {
    // ...
}
</code></pre><p>If you need to add a new, temporary cast at runtime, you may use the <code>mergeCasts</code> method. These cast definitions will be added to any of the casts already defined on the model:</p><pre><code>$user-&gt;mergeCasts([
    &#39;is_admin&#39; =&gt; &#39;integer&#39;,
    &#39;options&#39; =&gt; &#39;object&#39;,
]);
</code></pre><blockquote><p><strong>Warning</strong><br> Attributes that are <code>null</code> will not be cast. In addition, you should never define a cast (or an attribute) that has the same name as a relationship or assign a cast to the model&#39;s primary key.</p></blockquote><p><a name="stringable-casting"></a></p><h4 id="stringable-casting" tabindex="-1"><a class="header-anchor" href="#stringable-casting" aria-hidden="true">#</a> Stringable Casting</h4><p>You may use the <code>Illuminate\\Database\\Eloquent\\Casts\\AsStringable</code> cast class to cast a model attribute to a <a href="./strings#fluent-strings-method-list">fluent <code>Illuminate\\Support\\Stringable</code> object</a>:</p><pre><code>&lt;?php

namespace App\\Models;

use Illuminate\\Database\\Eloquent\\Casts\\AsStringable;
use Illuminate\\Database\\Eloquent\\Model;

class User extends Model
{
    /**
     * The attributes that should be cast.
     *
     * @var array
     */
    protected $casts = [
        &#39;directory&#39; =&gt; AsStringable::class,
    ];
}
</code></pre><p><a name="array-and-json-casting"></a></p><h3 id="array-json-casting" tabindex="-1"><a class="header-anchor" href="#array-json-casting" aria-hidden="true">#</a> Array &amp; JSON Casting</h3><p>The <code>array</code> cast is particularly useful when working with columns that are stored as serialized JSON. For example, if your database has a <code>JSON</code> or <code>TEXT</code> field type that contains serialized JSON, adding the <code>array</code> cast to that attribute will automatically deserialize the attribute to a PHP array when you access it on your Eloquent model:</p><pre><code>&lt;?php

namespace App\\Models;

use Illuminate\\Database\\Eloquent\\Model;

class User extends Model
{
    /**
     * The attributes that should be cast.
     *
     * @var array
     */
    protected $casts = [
        &#39;options&#39; =&gt; &#39;array&#39;,
    ];
}
</code></pre><p>Once the cast is defined, you may access the <code>options</code> attribute and it will automatically be deserialized from JSON into a PHP array. When you set the value of the <code>options</code> attribute, the given array will automatically be serialized back into JSON for storage:</p><pre><code>use App\\Models\\User;

$user = User::find(1);

$options = $user-&gt;options;

$options[&#39;key&#39;] = &#39;value&#39;;

$user-&gt;options = $options;

$user-&gt;save();
</code></pre><p>To update a single field of a JSON attribute with a more terse syntax, you may use the <code>-&gt;</code> operator when calling the <code>update</code> method:</p><pre><code>$user = User::find(1);

$user-&gt;update([&#39;options-&gt;key&#39; =&gt; &#39;value&#39;]);
</code></pre><p><a name="array-object-and-collection-casting"></a></p><h4 id="array-object-collection-casting" tabindex="-1"><a class="header-anchor" href="#array-object-collection-casting" aria-hidden="true">#</a> Array Object &amp; Collection Casting</h4><p>Although the standard <code>array</code> cast is sufficient for many applications, it does have some disadvantages. Since the <code>array</code> cast returns a primitive type, it is not possible to mutate an offset of the array directly. For example, the following code will trigger a PHP error:</p><pre><code>$user = User::find(1);

$user-&gt;options[&#39;key&#39;] = $value;
</code></pre>`,23),h=e("code",null,"AsArrayObject",-1),m={href:"https://www.php.net/manual/en/class.arrayobject.php",target:"_blank",rel:"noopener noreferrer"},b=e("a",{href:"#custom-casts"},"custom cast",-1),y=e("code",null,"AsArrayObject",-1),g=t(`<pre><code>use Illuminate\\Database\\Eloquent\\Casts\\AsArrayObject;

/**
 * The attributes that should be cast.
 *
 * @var array
 */
protected $casts = [
    &#39;options&#39; =&gt; AsArrayObject::class,
];
</code></pre><p>Similarly, Laravel offers an <code>AsCollection</code> cast that casts your JSON attribute to a Laravel <a href="./collections">Collection</a> instance:</p><pre><code>use Illuminate\\Database\\Eloquent\\Casts\\AsCollection;

/**
 * The attributes that should be cast.
 *
 * @var array
 */
protected $casts = [
    &#39;options&#39; =&gt; AsCollection::class,
];
</code></pre><p>If you would like the <code>AsCollection</code> cast to instantiate a custom collection class instead of Laravel&#39;s base collection class, you may provide the collection class name as a cast argument:</p><pre><code>use App\\Collections\\OptionCollection;
use Illuminate\\Database\\Eloquent\\Casts\\AsCollection;

/**
 * The attributes that should be cast.
 *
 * @var array
 */
protected $casts = [
    &#39;options&#39; =&gt; AsCollection::class.&#39;:&#39;.OptionCollection::class,
];
</code></pre><p><a name="date-casting"></a></p><h3 id="date-casting" tabindex="-1"><a class="header-anchor" href="#date-casting" aria-hidden="true">#</a> Date Casting</h3>`,7),v=e("code",null,"created_at",-1),f=e("code",null,"updated_at",-1),k={href:"https://github.com/briannesbitt/Carbon",target:"_blank",rel:"noopener noreferrer"},w=e("code",null,"DateTime",-1),A=e("code",null,"$casts",-1),$=e("code",null,"datetime",-1),_=e("code",null,"immutable_datetime",-1),C=t(`<p>When defining a <code>date</code> or <code>datetime</code> cast, you may also specify the date&#39;s format. This format will be used when the <a href="./eloquent-serialization">model is serialized to an array or JSON</a>:</p><pre><code>/**
 * The attributes that should be cast.
 *
 * @var array
 */
protected $casts = [
    &#39;created_at&#39; =&gt; &#39;datetime:Y-m-d&#39;,
];
</code></pre><p>When a column is cast as a date, you may set the corresponding model attribute value to a UNIX timestamp, date string (<code>Y-m-d</code>), date-time string, or a <code>DateTime</code> / <code>Carbon</code> instance. The date&#39;s value will be correctly converted and stored in your database.</p><p>You may customize the default serialization format for all of your model&#39;s dates by defining a <code>serializeDate</code> method on your model. This method does not affect how your dates are formatted for storage in the database:</p><pre><code>/**
 * Prepare a date for array / JSON serialization.
 */
protected function serializeDate(DateTimeInterface $date): string
{
    return $date-&gt;format(&#39;Y-m-d&#39;);
}
</code></pre><p>To specify the format that should be used when actually storing a model&#39;s dates within your database, you should define a <code>$dateFormat</code> property on your model:</p><pre><code>/**
 * The storage format of the model&#39;s date columns.
 *
 * @var string
 */
protected $dateFormat = &#39;U&#39;;
</code></pre><p><a name="date-casting-and-timezones"></a></p><h4 id="date-casting-serialization-timezones" tabindex="-1"><a class="header-anchor" href="#date-casting-serialization-timezones" aria-hidden="true">#</a> Date Casting, Serialization, &amp; Timezones</h4><p>By default, the <code>date</code> and <code>datetime</code> casts will serialize dates to a UTC ISO-8601 date string (<code>YYYY-MM-DDTHH:MM:SS.uuuuuuZ</code>), regardless of the timezone specified in your application&#39;s <code>timezone</code> configuration option. You are strongly encouraged to always use this serialization format, as well as to store your application&#39;s dates in the UTC timezone by not changing your application&#39;s <code>timezone</code> configuration option from its default <code>UTC</code> value. Consistently using the UTC timezone throughout your application will provide the maximum level of interoperability with other date manipulation libraries written in PHP and JavaScript.</p><p>If a custom format is applied to the <code>date</code> or <code>datetime</code> cast, such as <code>datetime:Y-m-d H:i:s</code>, the inner timezone of the Carbon instance will be used during date serialization. Typically, this will be the timezone specified in your application&#39;s <code>timezone</code> configuration option.</p><p><a name="enum-casting"></a></p><h3 id="enum-casting" tabindex="-1"><a class="header-anchor" href="#enum-casting" aria-hidden="true">#</a> Enum Casting</h3>`,13),x={href:"https://www.php.net/manual/en/language.enumerations.backed.php",target:"_blank",rel:"noopener noreferrer"},q=e("code",null,"$casts",-1),T=t(`<pre><code>use App\\Enums\\ServerStatus;

/**
 * The attributes that should be cast.
 *
 * @var array
 */
protected $casts = [
    &#39;status&#39; =&gt; ServerStatus::class,
];
</code></pre><p>Once you have defined the cast on your model, the specified attribute will be automatically cast to and from an enum when you interact with the attribute:</p><pre><code>if ($server-&gt;status == ServerStatus::Provisioned) {
    $server-&gt;status = ServerStatus::Ready;

    $server-&gt;save();
}
</code></pre><p><a name="casting-arrays-of-enums"></a></p><h4 id="casting-arrays-of-enums" tabindex="-1"><a class="header-anchor" href="#casting-arrays-of-enums" aria-hidden="true">#</a> Casting Arrays Of Enums</h4><p>Sometimes you may need your model to store an array of enum values within a single column. To accomplish this, you may utilize the <code>AsEnumArrayObject</code> or <code>AsEnumCollection</code> casts provided by Laravel:</p><pre><code>use App\\Enums\\ServerStatus;
use Illuminate\\Database\\Eloquent\\Casts\\AsEnumCollection;

/**
 * The attributes that should be cast.
 *
 * @var array
 */
protected $casts = [
    &#39;statuses&#39; =&gt; AsEnumCollection::class.&#39;:&#39;.ServerStatus::class,
];
</code></pre><p><a name="encrypted-casting"></a></p><h3 id="encrypted-casting" tabindex="-1"><a class="header-anchor" href="#encrypted-casting" aria-hidden="true">#</a> Encrypted Casting</h3><p>The <code>encrypted</code> cast will encrypt a model&#39;s attribute value using Laravel&#39;s built-in <a href="./encryption">encryption</a> features. In addition, the <code>encrypted:array</code>, <code>encrypted:collection</code>, <code>encrypted:object</code>, <code>AsEncryptedArrayObject</code>, and <code>AsEncryptedCollection</code> casts work like their unencrypted counterparts; however, as you might expect, the underlying value is encrypted when stored in your database.</p><p>As the final length of the encrypted text is not predictable and is longer than its plain text counterpart, make sure the associated database column is of <code>TEXT</code> type or larger. In addition, since the values are encrypted in the database, you will not be able to query or search encrypted attribute values.</p><p><a name="key-rotation"></a></p><h4 id="key-rotation" tabindex="-1"><a class="header-anchor" href="#key-rotation" aria-hidden="true">#</a> Key Rotation</h4><p>As you may know, Laravel encrypts strings using the <code>key</code> configuration value specified in your application&#39;s <code>app</code> configuration file. Typically, this value corresponds to the value of the <code>APP_KEY</code> environment variable. If you need to rotate your application&#39;s encryption key, you will need to manually re-encrypt your encrypted attributes using the new key.</p><p><a name="query-time-casting"></a></p><h3 id="query-time-casting" tabindex="-1"><a class="header-anchor" href="#query-time-casting" aria-hidden="true">#</a> Query Time Casting</h3><p>Sometimes you may need to apply casts while executing a query, such as when selecting a raw value from a table. For example, consider the following query:</p><pre><code>use App\\Models\\Post;
use App\\Models\\User;

$users = User::select([
    &#39;users.*&#39;,
    &#39;last_posted_at&#39; =&gt; Post::selectRaw(&#39;MAX(created_at)&#39;)
            -&gt;whereColumn(&#39;user_id&#39;, &#39;users.id&#39;)
])-&gt;get();
</code></pre><p>The <code>last_posted_at</code> attribute on the results of this query will be a simple string. It would be wonderful if we could apply a <code>datetime</code> cast to this attribute when executing the query. Thankfully, we may accomplish this using the <code>withCasts</code> method:</p><pre><code>$users = User::select([
    &#39;users.*&#39;,
    &#39;last_posted_at&#39; =&gt; Post::selectRaw(&#39;MAX(created_at)&#39;)
            -&gt;whereColumn(&#39;user_id&#39;, &#39;users.id&#39;)
])-&gt;withCasts([
    &#39;last_posted_at&#39; =&gt; &#39;datetime&#39;
])-&gt;get();
</code></pre><p><a name="custom-casts"></a></p><h2 id="custom-casts" tabindex="-1"><a class="header-anchor" href="#custom-casts" aria-hidden="true">#</a> Custom Casts</h2><p>Laravel has a variety of built-in, helpful cast types; however, you may occasionally need to define your own cast types. To create a cast, execute the <code>make:cast</code> Artisan command. The new cast class will be placed in your <code>app/Casts</code> directory:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan make:cast Json
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>All custom cast classes implement the <code>CastsAttributes</code> interface. Classes that implement this interface must define a <code>get</code> and <code>set</code> method. The <code>get</code> method is responsible for transforming a raw value from the database into a cast value, while the <code>set</code> method should transform a cast value into a raw value that can be stored in the database. As an example, we will re-implement the built-in <code>json</code> cast type as a custom cast type:</p><pre><code>&lt;?php

namespace App\\Casts;

use Illuminate\\Contracts\\Database\\Eloquent\\CastsAttributes;
use Illuminate\\Database\\Eloquent\\Model;

class Json implements CastsAttributes
{
    /**
     * Cast the given value.
     *
     * @param  array&lt;string, mixed&gt;  $attributes
     * @return array&lt;string, mixed&gt;
     */
    public function get(Model $model, string $key, mixed $value, array $attributes): array
    {
        return json_decode($value, true);
    }

    /**
     * Prepare the given value for storage.
     *
     * @param  array&lt;string, mixed&gt;  $attributes
     */
    public function set(Model $model, string $key, mixed $value, array $attributes): string
    {
        return json_encode($value);
    }
}
</code></pre><p>Once you have defined a custom cast type, you may attach it to a model attribute using its class name:</p><pre><code>&lt;?php

namespace App\\Models;

use App\\Casts\\Json;
use Illuminate\\Database\\Eloquent\\Model;

class User extends Model
{
    /**
     * The attributes that should be cast.
     *
     * @var array
     */
    protected $casts = [
        &#39;options&#39; =&gt; Json::class,
    ];
}
</code></pre><p><a name="value-object-casting"></a></p><h3 id="value-object-casting" tabindex="-1"><a class="header-anchor" href="#value-object-casting" aria-hidden="true">#</a> Value Object Casting</h3><p>You are not limited to casting values to primitive types. You may also cast values to objects. Defining custom casts that cast values to objects is very similar to casting to primitive types; however, the <code>set</code> method should return an array of key / value pairs that will be used to set raw, storable values on the model.</p><p>As an example, we will define a custom cast class that casts multiple model values into a single <code>Address</code> value object. We will assume the <code>Address</code> value has two public properties: <code>lineOne</code> and <code>lineTwo</code>:</p><pre><code>&lt;?php

namespace App\\Casts;

use App\\ValueObjects\\Address as AddressValueObject;
use Illuminate\\Contracts\\Database\\Eloquent\\CastsAttributes;
use Illuminate\\Database\\Eloquent\\Model;
use InvalidArgumentException;

class Address implements CastsAttributes
{
    /**
     * Cast the given value.
     *
     * @param  array&lt;string, mixed&gt;  $attributes
     */
    public function get(Model $model, string $key, mixed $value, array $attributes): AddressValueObject
    {
        return new AddressValueObject(
            $attributes[&#39;address_line_one&#39;],
            $attributes[&#39;address_line_two&#39;]
        );
    }

    /**
     * Prepare the given value for storage.
     *
     * @param  array&lt;string, mixed&gt;  $attributes
     * @return array&lt;string, string&gt;
     */
    public function set(Model $model, string $key, mixed $value, array $attributes): array
    {
        if (! $value instanceof AddressValueObject) {
            throw new InvalidArgumentException(&#39;The given value is not an Address instance.&#39;);
        }

        return [
            &#39;address_line_one&#39; =&gt; $value-&gt;lineOne,
            &#39;address_line_two&#39; =&gt; $value-&gt;lineTwo,
        ];
    }
}
</code></pre><p>When casting to value objects, any changes made to the value object will automatically be synced back to the model before the model is saved:</p><pre><code>use App\\Models\\User;

$user = User::find(1);

$user-&gt;address-&gt;lineOne = &#39;Updated Address Value&#39;;

$user-&gt;save();
</code></pre><blockquote><p><strong>Note</strong><br> If you plan to serialize your Eloquent models containing value objects to JSON or arrays, you should implement the <code>Illuminate\\Contracts\\Support\\Arrayable</code> and <code>JsonSerializable</code> interfaces on the value object.</p></blockquote><p><a name="value-object-caching"></a></p><h4 id="value-object-caching" tabindex="-1"><a class="header-anchor" href="#value-object-caching" aria-hidden="true">#</a> Value Object Caching</h4><p>When attributes that are cast to value objects are resolved, they are cached by Eloquent. Therefore, the same object instance will be returned if the attribute is accessed again.</p><p>If you would like to disable the object caching behavior of custom cast classes, you may declare a public <code>withoutObjectCaching</code> property on your custom cast class:</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">class</span> <span class="token class-name-definition class-name">Address</span> <span class="token keyword">implements</span> <span class="token class-name">CastsAttributes</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword type-declaration">bool</span> <span class="token variable">$withoutObjectCaching</span> <span class="token operator">=</span> <span class="token constant boolean">true</span><span class="token punctuation">;</span>

    <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="array-json-serialization"></a></p><h3 id="array-json-serialization" tabindex="-1"><a class="header-anchor" href="#array-json-serialization" aria-hidden="true">#</a> Array / JSON Serialization</h3><p>When an Eloquent model is converted to an array or JSON using the <code>toArray</code> and <code>toJson</code> methods, your custom cast value objects will typically be serialized as well as long as they implement the <code>Illuminate\\Contracts\\Support\\Arrayable</code> and <code>JsonSerializable</code> interfaces. However, when using value objects provided by third-party libraries, you may not have the ability to add these interfaces to the object.</p><p>Therefore, you may specify that your custom cast class will be responsible for serializing the value object. To do so, your custom cast class should implement the <code>Illuminate\\Contracts\\Database\\Eloquent\\SerializesCastableAttributes</code> interface. This interface states that your class should contain a <code>serialize</code> method which should return the serialized form of your value object:</p><pre><code>/**
 * Get the serialized representation of the value.
 *
 * @param  array&lt;string, mixed&gt;  $attributes
 */
public function serialize(Model $model, string $key, mixed $value, array $attributes): string
{
    return (string) $value;
}
</code></pre><p><a name="inbound-casting"></a></p><h3 id="inbound-casting" tabindex="-1"><a class="header-anchor" href="#inbound-casting" aria-hidden="true">#</a> Inbound Casting</h3><p>Occasionally, you may need to write a custom cast class that only transforms values that are being set on the model and does not perform any operations when attributes are being retrieved from the model.</p><p>Inbound only custom casts should implement the <code>CastsInboundAttributes</code> interface, which only requires a <code>set</code> method to be defined. The <code>make:cast</code> Artisan command may be invoked with the <code>--inbound</code> option to generate an inbound only cast class:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan make:cast Hash <span class="token parameter variable">--inbound</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>A classic example of an inbound only cast is a &quot;hashing&quot; cast. For example, we may define a cast that hashes inbound values via a given algorithm:</p><pre><code>&lt;?php

namespace App\\Casts;

use Illuminate\\Contracts\\Database\\Eloquent\\CastsInboundAttributes;
use Illuminate\\Database\\Eloquent\\Model;

class Hash implements CastsInboundAttributes
{
    /**
     * Create a new cast class instance.
     */
    public function __construct(
        protected string|null $algorithm = null,
    ) {}

    /**
     * Prepare the given value for storage.
     *
     * @param  array&lt;string, mixed&gt;  $attributes
     */
    public function set(Model $model, string $key, mixed $value, array $attributes): string
    {
        return is_null($this-&gt;algorithm)
                    ? bcrypt($value)
                    : hash($this-&gt;algorithm, $value);
    }
}
</code></pre><p><a name="cast-parameters"></a></p><h3 id="cast-parameters" tabindex="-1"><a class="header-anchor" href="#cast-parameters" aria-hidden="true">#</a> Cast Parameters</h3><p>When attaching a custom cast to a model, cast parameters may be specified by separating them from the class name using a <code>:</code> character and comma-delimiting multiple parameters. The parameters will be passed to the constructor of the cast class:</p><pre><code>/**
 * The attributes that should be cast.
 *
 * @var array
 */
protected $casts = [
    &#39;secret&#39; =&gt; Hash::class.&#39;:sha256&#39;,
];
</code></pre><p><a name="castables"></a></p><h3 id="castables" tabindex="-1"><a class="header-anchor" href="#castables" aria-hidden="true">#</a> Castables</h3><p>You may want to allow your application&#39;s value objects to define their own custom cast classes. Instead of attaching the custom cast class to your model, you may alternatively attach a value object class that implements the <code>Illuminate\\Contracts\\Database\\Eloquent\\Castable</code> interface:</p><pre><code>use App\\Models\\Address;

protected $casts = [
    &#39;address&#39; =&gt; Address::class,
];
</code></pre><p>Objects that implement the <code>Castable</code> interface must define a <code>castUsing</code> method that returns the class name of the custom caster class that is responsible for casting to and from the <code>Castable</code> class:</p><pre><code>&lt;?php

namespace App\\Models;

use Illuminate\\Contracts\\Database\\Eloquent\\Castable;
use App\\Casts\\Address as AddressCast;

class Address implements Castable
{
    /**
     * Get the name of the caster class to use when casting from / to this cast target.
     *
     * @param  array&lt;string, mixed&gt;  $arguments
     */
    public static function castUsing(array $arguments): string
    {
        return AddressCast::class;
    }
}
</code></pre><p>When using <code>Castable</code> classes, you may still provide arguments in the <code>$casts</code> definition. The arguments will be passed to the <code>castUsing</code> method:</p><pre><code>use App\\Models\\Address;

protected $casts = [
    &#39;address&#39; =&gt; Address::class.&#39;:argument&#39;,
];
</code></pre><p><a name="anonymous-cast-classes"></a></p><h4 id="castables-anonymous-cast-classes" tabindex="-1"><a class="header-anchor" href="#castables-anonymous-cast-classes" aria-hidden="true">#</a> Castables &amp; Anonymous Cast Classes</h4>`,67),j={href:"https://www.php.net/manual/en/language.oop5.anonymous.php",target:"_blank",rel:"noopener noreferrer"},I=e("code",null,"castUsing",-1),E=e("code",null,"CastsAttributes",-1),S=e("pre",null,[e("code",null,`<?php

namespace App\\Models;

use Illuminate\\Contracts\\Database\\Eloquent\\Castable;
use Illuminate\\Contracts\\Database\\Eloquent\\CastsAttributes;
use Illuminate\\Database\\Eloquent\\Model;

class Address implements Castable
{
    // ...

    /**
     * Get the caster class to use when casting from / to this cast target.
     *
     * @param  array<string, mixed>  $arguments
     */
    public static function castUsing(array $arguments): CastsAttributes
    {
        return new class implements CastsAttributes
        {
            public function get(Model $model, string $key, mixed $value, array $attributes): Address
            {
                return new Address(
                    $attributes['address_line_one'],
                    $attributes['address_line_two']
                );
            }

            public function set(Model $model, string $key, mixed $value, array $attributes): array
            {
                return [
                    'address_line_one' => $value->lineOne,
                    'address_line_two' => $value->lineTwo,
                ];
            }
        };
    }
}
`)],-1);function M(O,z){const n=i("ExternalLinkIcon");return r(),c("div",null,[d,u,p,e("p",null,[a("To solve this, Laravel offers an "),h,a(" cast that casts your JSON attribute to an "),e("a",m,[a("ArrayObject"),s(n)]),a(" class. This feature is implemented using Laravel's "),b,a(" implementation, which allows Laravel to intelligently cache and transform the mutated object such that individual offsets may be modified without triggering a PHP error. To use the "),y,a(" cast, simply assign it to an attribute:")]),g,e("p",null,[a("By default, Eloquent will cast the "),v,a(" and "),f,a(" columns to instances of "),e("a",k,[a("Carbon"),s(n)]),a(", which extends the PHP "),w,a(" class and provides an assortment of helpful methods. You may cast additional date attributes by defining additional date casts within your model's "),A,a(" property array. Typically, dates should be cast using the "),$,a(" or "),_,a(" cast types.")]),C,e("p",null,[a("Eloquent also allows you to cast your attribute values to PHP "),e("a",x,[a("Enums"),s(n)]),a(". To accomplish this, you may specify the attribute and enum you wish to cast in your model's "),q,a(" property array:")]),T,e("p",null,[a(`By combining "castables" with PHP's `),e("a",j,[a("anonymous classes"),s(n)]),a(", you may define a value object and its casting logic as a single castable object. To accomplish this, return an anonymous class from your value object's "),I,a(" method. The anonymous class should implement the "),E,a(" interface:")]),S])}const N=o(l,[["render",M],["__file","eloquent-mutators.html.vue"]]);export{N as default};
