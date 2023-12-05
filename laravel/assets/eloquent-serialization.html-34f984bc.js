import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{r,o as i,c as s,b as t,d as e,e as d,a}from"./app-8cdff07c.js";const l={},c=a(`<h1 id="eloquent-serialization" tabindex="-1"><a class="header-anchor" href="#eloquent-serialization" aria-hidden="true">#</a> Eloquent: Serialization</h1><ul><li><a href="#introduction">Introduction</a></li><li><a href="#serializing-models-and-collections">Serializing Models &amp; Collections</a><ul><li><a href="#serializing-to-arrays">Serializing To Arrays</a></li><li><a href="#serializing-to-json">Serializing To JSON</a></li></ul></li><li><a href="#hiding-attributes-from-json">Hiding Attributes From JSON</a></li><li><a href="#appending-values-to-json">Appending Values To JSON</a></li><li><a href="#date-serialization">Date Serialization</a></li></ul><p><a name="introduction"></a></p><h2 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h2><p>When building APIs using Laravel, you will often need to convert your models and relationships to arrays or JSON. Eloquent includes convenient methods for making these conversions, as well as controlling which attributes are included in the serialized representation of your models.</p><blockquote><p><strong>Note</strong><br> For an even more robust way of handling Eloquent model and collection JSON serialization, check out the documentation on <a href="./eloquent-resources">Eloquent API resources</a>.</p></blockquote><p><a name="serializing-models-and-collections"></a></p><h2 id="serializing-models-collections" tabindex="-1"><a class="header-anchor" href="#serializing-models-collections" aria-hidden="true">#</a> Serializing Models &amp; Collections</h2><p><a name="serializing-to-arrays"></a></p><h3 id="serializing-to-arrays" tabindex="-1"><a class="header-anchor" href="#serializing-to-arrays" aria-hidden="true">#</a> Serializing To Arrays</h3><p>To convert a model and its loaded <a href="./eloquent-relationships">relationships</a> to an array, you should use the <code>toArray</code> method. This method is recursive, so all attributes and all relations (including the relations of relations) will be converted to arrays:</p><pre><code>use App\\Models\\User;

$user = User::with(&#39;roles&#39;)-&gt;first();

return $user-&gt;toArray();
</code></pre><p>The <code>attributesToArray</code> method may be used to convert a model&#39;s attributes to an array but not its relationships:</p><pre><code>$user = User::first();

return $user-&gt;attributesToArray();
</code></pre><p>You may also convert entire <a href="./eloquent-collections">collections</a> of models to arrays by calling the <code>toArray</code> method on the collection instance:</p><pre><code>$users = User::all();

return $users-&gt;toArray();
</code></pre><p><a name="serializing-to-json"></a></p><h3 id="serializing-to-json" tabindex="-1"><a class="header-anchor" href="#serializing-to-json" aria-hidden="true">#</a> Serializing To JSON</h3>`,18),u=t("code",null,"toJson",-1),h=t("code",null,"toArray",-1),p=t("code",null,"toJson",-1),m={href:"https://secure.php.net/manual/en/function.json-encode.php",target:"_blank",rel:"noopener noreferrer"},y=a(`<pre><code>use App\\Models\\User;

$user = User::find(1);

return $user-&gt;toJson();

return $user-&gt;toJson(JSON_PRETTY_PRINT);
</code></pre><p>Alternatively, you may cast a model or collection to a string, which will automatically call the <code>toJson</code> method on the model or collection:</p><pre><code>return (string) User::find(1);
</code></pre><p>Since models and collections are converted to JSON when cast to a string, you can return Eloquent objects directly from your application&#39;s routes or controllers. Laravel will automatically serialize your Eloquent models and collections to JSON when they are returned from routes or controllers:</p><pre><code>Route::get(&#39;users&#39;, function () {
    return User::all();
});
</code></pre><p><a name="relationships"></a></p><h4 id="relationships" tabindex="-1"><a class="header-anchor" href="#relationships" aria-hidden="true">#</a> Relationships</h4><p>When an Eloquent model is converted to JSON, its loaded relationships will automatically be included as attributes on the JSON object. Also, though Eloquent relationship methods are defined using &quot;camel case&quot; method names, a relationship&#39;s JSON attribute will be &quot;snake case&quot;.</p><p><a name="hiding-attributes-from-json"></a></p><h2 id="hiding-attributes-from-json" tabindex="-1"><a class="header-anchor" href="#hiding-attributes-from-json" aria-hidden="true">#</a> Hiding Attributes From JSON</h2><p>Sometimes you may wish to limit the attributes, such as passwords, that are included in your model&#39;s array or JSON representation. To do so, add a <code>$hidden</code> property to your model. Attributes that are listed in the <code>$hidden</code> property&#39;s array will not be included in the serialized representation of your model:</p><pre><code>&lt;?php

namespace App\\Models;

use Illuminate\\Database\\Eloquent\\Model;

class User extends Model
{
    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [&#39;password&#39;];
}
</code></pre><blockquote><p><strong>Note</strong><br> To hide relationships, add the relationship&#39;s method name to your Eloquent model&#39;s <code>$hidden</code> property.</p></blockquote><p>Alternatively, you may use the <code>visible</code> property to define an &quot;allow list&quot; of attributes that should be included in your model&#39;s array and JSON representation. All attributes that are not present in the <code>$visible</code> array will be hidden when the model is converted to an array or JSON:</p><pre><code>&lt;?php

namespace App\\Models;

use Illuminate\\Database\\Eloquent\\Model;

class User extends Model
{
    /**
     * The attributes that should be visible in arrays.
     *
     * @var array
     */
    protected $visible = [&#39;first_name&#39;, &#39;last_name&#39;];
}
</code></pre><p><a name="temporarily-modifying-attribute-visibility"></a></p><h4 id="temporarily-modifying-attribute-visibility" tabindex="-1"><a class="header-anchor" href="#temporarily-modifying-attribute-visibility" aria-hidden="true">#</a> Temporarily Modifying Attribute Visibility</h4><p>If you would like to make some typically hidden attributes visible on a given model instance, you may use the <code>makeVisible</code> method. The <code>makeVisible</code> method returns the model instance:</p><pre><code>return $user-&gt;makeVisible(&#39;attribute&#39;)-&gt;toArray();
</code></pre><p>Likewise, if you would like to hide some attributes that are typically visible, you may use the <code>makeHidden</code> method.</p><pre><code>return $user-&gt;makeHidden(&#39;attribute&#39;)-&gt;toArray();
</code></pre><p>If you wish to temporarily override all of the visible or hidden attributes, you may use the <code>setVisible</code> and <code>setHidden</code> methods respectively:</p><pre><code>return $user-&gt;setVisible([&#39;id&#39;, &#39;name&#39;])-&gt;toArray();

return $user-&gt;setHidden([&#39;email&#39;, &#39;password&#39;, &#39;remember_token&#39;])-&gt;toArray();
</code></pre><p><a name="appending-values-to-json"></a></p><h2 id="appending-values-to-json" tabindex="-1"><a class="header-anchor" href="#appending-values-to-json" aria-hidden="true">#</a> Appending Values To JSON</h2><p>Occasionally, when converting models to arrays or JSON, you may wish to add attributes that do not have a corresponding column in your database. To do so, first define an <a href="./eloquent-mutators">accessor</a> for the value:</p><pre><code>&lt;?php

namespace App\\Models;

use Illuminate\\Database\\Eloquent\\Casts\\Attribute;
use Illuminate\\Database\\Eloquent\\Model;

class User extends Model
{
    /**
     * Determine if the user is an administrator.
     */
    protected function isAdmin(): Attribute
    {
        return new Attribute(
            get: fn () =&gt; &#39;yes&#39;,
        );
    }
}
</code></pre><p>If you would like the accessor to always be appended to your model&#39;s array and JSON representations, you may add the attribute name to the <code>appends</code> property of your model. Note that attribute names are typically referenced using their &quot;snake case&quot; serialized representation, even though the accessor&#39;s PHP method is defined using &quot;camel case&quot;:</p><pre><code>&lt;?php

namespace App\\Models;

use Illuminate\\Database\\Eloquent\\Model;

class User extends Model
{
    /**
     * The accessors to append to the model&#39;s array form.
     *
     * @var array
     */
    protected $appends = [&#39;is_admin&#39;];
}
</code></pre><p>Once the attribute has been added to the <code>appends</code> list, it will be included in both the model&#39;s array and JSON representations. Attributes in the <code>appends</code> array will also respect the <code>visible</code> and <code>hidden</code> settings configured on the model.</p><p><a name="appending-at-run-time"></a></p><h4 id="appending-at-run-time" tabindex="-1"><a class="header-anchor" href="#appending-at-run-time" aria-hidden="true">#</a> Appending At Run Time</h4><p>At runtime, you may instruct a model instance to append additional attributes using the <code>append</code> method. Or, you may use the <code>setAppends</code> method to override the entire array of appended properties for a given model instance:</p><pre><code>return $user-&gt;append(&#39;is_admin&#39;)-&gt;toArray();

return $user-&gt;setAppends([&#39;is_admin&#39;])-&gt;toArray();
</code></pre><p><a name="date-serialization"></a></p><h2 id="date-serialization" tabindex="-1"><a class="header-anchor" href="#date-serialization" aria-hidden="true">#</a> Date Serialization</h2><p><a name="customizing-the-default-date-format"></a></p><h4 id="customizing-the-default-date-format" tabindex="-1"><a class="header-anchor" href="#customizing-the-default-date-format" aria-hidden="true">#</a> Customizing The Default Date Format</h4><p>You may customize the default serialization format by overriding the <code>serializeDate</code> method. This method does not affect how your dates are formatted for storage in the database:</p><pre><code>/**
 * Prepare a date for array / JSON serialization.
 */
protected function serializeDate(DateTimeInterface $date): string
{
    return $date-&gt;format(&#39;Y-m-d&#39;);
}
</code></pre><p><a name="customizing-the-date-format-per-attribute"></a></p><h4 id="customizing-the-date-format-per-attribute" tabindex="-1"><a class="header-anchor" href="#customizing-the-date-format-per-attribute" aria-hidden="true">#</a> Customizing The Date Format Per Attribute</h4><p>You may customize the serialization format of individual Eloquent date attributes by specifying the date format in the model&#39;s <a href="./eloquent-mutators#attribute-casting">cast declarations</a>:</p><pre><code>protected $casts = [
    &#39;birthday&#39; =&gt; &#39;date:Y-m-d&#39;,
    &#39;joined_at&#39; =&gt; &#39;datetime:Y-m-d H:00&#39;,
];
</code></pre>`,44);function b(f,g){const o=r("ExternalLinkIcon");return i(),s("div",null,[c,t("p",null,[e("To convert a model to JSON, you should use the "),u,e(" method. Like "),h,e(", the "),p,e(" method is recursive, so all attributes and relations will be converted to JSON. You may also specify any JSON encoding options that are "),t("a",m,[e("supported by PHP"),d(o)]),e(":")]),y])}const A=n(l,[["render",b],["__file","eloquent-serialization.html.vue"]]);export{A as default};
