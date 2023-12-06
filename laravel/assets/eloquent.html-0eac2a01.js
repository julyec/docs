import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{r as i,o as l,c as r,b as a,d as e,e as s,a as n}from"./app-06635a3b.js";const d={},c=n('<h1 id="eloquent-getting-started" tabindex="-1"><a class="header-anchor" href="#eloquent-getting-started" aria-hidden="true">#</a> Eloquent: Getting Started</h1><ul><li><a href="#introduction">Introduction</a></li><li><a href="#generating-model-classes">Generating Model Classes</a></li><li><a href="#eloquent-model-conventions">Eloquent Model Conventions</a><ul><li><a href="#table-names">Table Names</a></li><li><a href="#primary-keys">Primary Keys</a></li><li><a href="#uuid-and-ulid-keys">UUID &amp; ULID Keys</a></li><li><a href="#timestamps">Timestamps</a></li><li><a href="#database-connections">Database Connections</a></li><li><a href="#default-attribute-values">Default Attribute Values</a></li><li><a href="#configuring-eloquent-strictness">Configuring Eloquent Strictness</a></li></ul></li><li><a href="#retrieving-models">Retrieving Models</a><ul><li><a href="#collections">Collections</a></li><li><a href="#chunking-results">Chunking Results</a></li><li><a href="#chunking-using-lazy-collections">Chunk Using Lazy Collections</a></li><li><a href="#cursors">Cursors</a></li><li><a href="#advanced-subqueries">Advanced Subqueries</a></li></ul></li><li><a href="#retrieving-single-models">Retrieving Single Models / Aggregates</a><ul><li><a href="#retrieving-or-creating-models">Retrieving Or Creating Models</a></li><li><a href="#retrieving-aggregates">Retrieving Aggregates</a></li></ul></li><li><a href="#inserting-and-updating-models">Inserting &amp; Updating Models</a><ul><li><a href="#inserts">Inserts</a></li><li><a href="#updates">Updates</a></li><li><a href="#mass-assignment">Mass Assignment</a></li><li><a href="#upserts">Upserts</a></li></ul></li><li><a href="#deleting-models">Deleting Models</a><ul><li><a href="#soft-deleting">Soft Deleting</a></li><li><a href="#querying-soft-deleted-models">Querying Soft Deleted Models</a></li></ul></li><li><a href="#pruning-models">Pruning Models</a></li><li><a href="#replicating-models">Replicating Models</a></li><li><a href="#query-scopes">Query Scopes</a><ul><li><a href="#global-scopes">Global Scopes</a></li><li><a href="#local-scopes">Local Scopes</a></li></ul></li><li><a href="#comparing-models">Comparing Models</a></li><li><a href="#events">Events</a><ul><li><a href="#events-using-closures">Using Closures</a></li><li><a href="#observers">Observers</a></li><li><a href="#muting-events">Muting Events</a></li></ul></li></ul><p><a name="introduction"></a></p><h2 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h2><p>Laravel includes Eloquent, an object-relational mapper (ORM) that makes it enjoyable to interact with your database. When using Eloquent, each database table has a corresponding &quot;Model&quot; that is used to interact with that table. In addition to retrieving records from the database table, Eloquent models allow you to insert, update, and delete records from the table as well.</p><blockquote><p><strong>Note</strong><br> Before getting started, be sure to configure a database connection in your application&#39;s <code>config/database.php</code> configuration file. For more information on configuring your database, check out <a href="./database#configuration">the database configuration documentation</a>.</p></blockquote><h4 id="laravel-bootcamp" tabindex="-1"><a class="header-anchor" href="#laravel-bootcamp" aria-hidden="true">#</a> Laravel Bootcamp</h4>',7),p={href:"https://bootcamp.laravel.com",target:"_blank",rel:"noopener noreferrer"},u=n(`<p><a name="generating-model-classes"></a></p><h2 id="generating-model-classes" tabindex="-1"><a class="header-anchor" href="#generating-model-classes" aria-hidden="true">#</a> Generating Model Classes</h2><p>To get started, let&#39;s create an Eloquent model. Models typically live in the <code>app\\Models</code> directory and extend the <code>Illuminate\\Database\\Eloquent\\Model</code> class. You may use the <code>make:model</code> <a href="./artisan">Artisan command</a> to generate a new model:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan make:model Flight
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>If you would like to generate a <a href="./migrations">database migration</a> when you generate the model, you may use the <code>--migration</code> or <code>-m</code> option:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan make:model Flight <span class="token parameter variable">--migration</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>You may generate various other types of classes when generating a model, such as factories, seeders, policies, controllers, and form requests. In addition, these options may be combined to create multiple classes at once:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Generate a model and a FlightFactory class...</span>
php artisan make:model Flight <span class="token parameter variable">--factory</span>
php artisan make:model Flight <span class="token parameter variable">-f</span>

<span class="token comment"># Generate a model and a FlightSeeder class...</span>
php artisan make:model Flight <span class="token parameter variable">--seed</span>
php artisan make:model Flight <span class="token parameter variable">-s</span>

<span class="token comment"># Generate a model and a FlightController class...</span>
php artisan make:model Flight <span class="token parameter variable">--controller</span>
php artisan make:model Flight <span class="token parameter variable">-c</span>

<span class="token comment"># Generate a model, FlightController resource class, and form request classes...</span>
php artisan make:model Flight <span class="token parameter variable">--controller</span> <span class="token parameter variable">--resource</span> <span class="token parameter variable">--requests</span>
php artisan make:model Flight <span class="token parameter variable">-crR</span>

<span class="token comment"># Generate a model and a FlightPolicy class...</span>
php artisan make:model Flight <span class="token parameter variable">--policy</span>

<span class="token comment"># Generate a model and a migration, factory, seeder, and controller...</span>
php artisan make:model Flight <span class="token parameter variable">-mfsc</span>

<span class="token comment"># Shortcut to generate a model, migration, factory, seeder, policy, controller, and form requests...</span>
php artisan make:model Flight <span class="token parameter variable">--all</span>

<span class="token comment"># Generate a pivot model...</span>
php artisan make:model Member <span class="token parameter variable">--pivot</span>
php artisan make:model Member <span class="token parameter variable">-p</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="inspecting-models"></a></p><h4 id="inspecting-models" tabindex="-1"><a class="header-anchor" href="#inspecting-models" aria-hidden="true">#</a> Inspecting Models</h4><p>Sometimes it can be difficult to determine all of a model&#39;s available attributes and relationships just by skimming its code. Instead, try the <code>model:show</code> Artisan command, which provides a convenient overview of all the model&#39;s attributes and relations:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan model:show Flight
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a name="eloquent-model-conventions"></a></p><h2 id="eloquent-model-conventions" tabindex="-1"><a class="header-anchor" href="#eloquent-model-conventions" aria-hidden="true">#</a> Eloquent Model Conventions</h2><p>Models generated by the <code>make:model</code> command will be placed in the <code>app/Models</code> directory. Let&#39;s examine a basic model class and discuss some of Eloquent&#39;s key conventions:</p><pre><code>&lt;?php

namespace App\\Models;

use Illuminate\\Database\\Eloquent\\Model;

class Flight extends Model
{
    // ...
}
</code></pre><p><a name="table-names"></a></p><h3 id="table-names" tabindex="-1"><a class="header-anchor" href="#table-names" aria-hidden="true">#</a> Table Names</h3><p>After glancing at the example above, you may have noticed that we did not tell Eloquent which database table corresponds to our <code>Flight</code> model. By convention, the &quot;snake case&quot;, plural name of the class will be used as the table name unless another name is explicitly specified. So, in this case, Eloquent will assume the <code>Flight</code> model stores records in the <code>flights</code> table, while an <code>AirTrafficController</code> model would store records in an <code>air_traffic_controllers</code> table.</p><p>If your model&#39;s corresponding database table does not fit this convention, you may manually specify the model&#39;s table name by defining a <code>table</code> property on the model:</p><pre><code>&lt;?php

namespace App\\Models;

use Illuminate\\Database\\Eloquent\\Model;

class Flight extends Model
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = &#39;my_flights&#39;;
}
</code></pre><p><a name="primary-keys"></a></p><h3 id="primary-keys" tabindex="-1"><a class="header-anchor" href="#primary-keys" aria-hidden="true">#</a> Primary Keys</h3><p>Eloquent will also assume that each model&#39;s corresponding database table has a primary key column named <code>id</code>. If necessary, you may define a protected <code>$primaryKey</code> property on your model to specify a different column that serves as your model&#39;s primary key:</p><pre><code>&lt;?php

namespace App\\Models;

use Illuminate\\Database\\Eloquent\\Model;

class Flight extends Model
{
    /**
     * The primary key associated with the table.
     *
     * @var string
     */
    protected $primaryKey = &#39;flight_id&#39;;
}
</code></pre><p>In addition, Eloquent assumes that the primary key is an incrementing integer value, which means that Eloquent will automatically cast the primary key to an integer. If you wish to use a non-incrementing or a non-numeric primary key you must define a public <code>$incrementing</code> property on your model that is set to <code>false</code>:</p><pre><code>&lt;?php

class Flight extends Model
{
    /**
     * Indicates if the model&#39;s ID is auto-incrementing.
     *
     * @var bool
     */
    public $incrementing = false;
}
</code></pre><p>If your model&#39;s primary key is not an integer, you should define a protected <code>$keyType</code> property on your model. This property should have a value of <code>string</code>:</p><pre><code>&lt;?php

class Flight extends Model
{
    /**
     * The data type of the auto-incrementing ID.
     *
     * @var string
     */
    protected $keyType = &#39;string&#39;;
}
</code></pre><p><a name="composite-primary-keys"></a></p><h4 id="composite-primary-keys" tabindex="-1"><a class="header-anchor" href="#composite-primary-keys" aria-hidden="true">#</a> &quot;Composite&quot; Primary Keys</h4><p>Eloquent requires each model to have at least one uniquely identifying &quot;ID&quot; that can serve as its primary key. &quot;Composite&quot; primary keys are not supported by Eloquent models. However, you are free to add additional multi-column, unique indexes to your database tables in addition to the table&#39;s uniquely identifying primary key.</p><p><a name="uuid-and-ulid-keys"></a></p><h3 id="uuid-ulid-keys" tabindex="-1"><a class="header-anchor" href="#uuid-ulid-keys" aria-hidden="true">#</a> UUID &amp; ULID Keys</h3><p>Instead of using auto-incrementing integers as your Eloquent model&#39;s primary keys, you may choose to use UUIDs instead. UUIDs are universally unique alpha-numeric identifiers that are 36 characters long.</p><p>If you would like a model to use a UUID key instead of an auto-incrementing integer key, you may use the <code>Illuminate\\Database\\Eloquent\\Concerns\\HasUuids</code> trait on the model. Of course, you should ensure that the model has a <a href="./migrations#column-method-uuid">UUID equivalent primary key column</a>:</p><pre><code>use Illuminate\\Database\\Eloquent\\Concerns\\HasUuids;
use Illuminate\\Database\\Eloquent\\Model;

class Article extends Model
{
    use HasUuids;

    // ...
}

$article = Article::create([&#39;title&#39; =&gt; &#39;Traveling to Europe&#39;]);

$article-&gt;id; // &quot;8f8e8478-9035-4d23-b9a7-62f4d2612ce5&quot;
</code></pre><p>By default, The <code>HasUuids</code> trait will generate <a href="./strings#method-str-ordered-uuid">&quot;ordered&quot; UUIDs</a> for your models. These UUIDs are more efficient for indexed database storage because they can be sorted lexicographically.</p><p>You can override the UUID generation process for a given model by defining a <code>newUniqueId</code> method on the model. In addition, you may specify which columns should receive UUIDs by defining a <code>uniqueIds</code> method on the model:</p><pre><code>use Ramsey\\Uuid\\Uuid;

/**
 * Generate a new UUID for the model.
 */
public function newUniqueId(): string
{
    return (string) Uuid::uuid4();
}

/**
 * Get the columns that should receive a unique identifier.
 *
 * @return array&lt;int, string&gt;
 */
public function uniqueIds(): array
{
    return [&#39;id&#39;, &#39;discount_code&#39;];
}
</code></pre><p>If you wish, you may choose to utilize &quot;ULIDs&quot; instead of UUIDs. ULIDs are similar to UUIDs; however, they are only 26 characters in length. Like ordered UUIDs, ULIDs are lexicographically sortable for efficient database indexing. To utilize ULIDs, you should use the <code>Illuminate\\Database\\Eloquent\\Concerns\\HasUlids</code> trait on your model. You should also ensure that the model has a <a href="./migrations#column-method-ulid">ULID equivalent primary key column</a>:</p><pre><code>use Illuminate\\Database\\Eloquent\\Concerns\\HasUlids;
use Illuminate\\Database\\Eloquent\\Model;

class Article extends Model
{
    use HasUlids;

    // ...
}

$article = Article::create([&#39;title&#39; =&gt; &#39;Traveling to Asia&#39;]);

$article-&gt;id; // &quot;01gd4d3tgrrfqeda94gdbtdk5c&quot;
</code></pre><p><a name="timestamps"></a></p><h3 id="timestamps" tabindex="-1"><a class="header-anchor" href="#timestamps" aria-hidden="true">#</a> Timestamps</h3><p>By default, Eloquent expects <code>created_at</code> and <code>updated_at</code> columns to exist on your model&#39;s corresponding database table. Eloquent will automatically set these column&#39;s values when models are created or updated. If you do not want these columns to be automatically managed by Eloquent, you should define a <code>$timestamps</code> property on your model with a value of <code>false</code>:</p><pre><code>&lt;?php

namespace App\\Models;

use Illuminate\\Database\\Eloquent\\Model;

class Flight extends Model
{
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;
}
</code></pre><p>If you need to customize the format of your model&#39;s timestamps, set the <code>$dateFormat</code> property on your model. This property determines how date attributes are stored in the database as well as their format when the model is serialized to an array or JSON:</p><pre><code>&lt;?php

namespace App\\Models;

use Illuminate\\Database\\Eloquent\\Model;

class Flight extends Model
{
    /**
     * The storage format of the model&#39;s date columns.
     *
     * @var string
     */
    protected $dateFormat = &#39;U&#39;;
}
</code></pre><p>If you need to customize the names of the columns used to store the timestamps, you may define <code>CREATED_AT</code> and <code>UPDATED_AT</code> constants on your model:</p><pre><code>&lt;?php

class Flight extends Model
{
    const CREATED_AT = &#39;creation_date&#39;;
    const UPDATED_AT = &#39;updated_date&#39;;
}
</code></pre><p>If you would like to perform model operations without the model having its <code>updated_at</code> timestamp modified, you may operate on the model within a closure given to the <code>withoutTimestamps</code> method:</p><pre><code>Model::withoutTimestamps(fn () =&gt; $post-&gt;increment([&#39;reads&#39;]));
</code></pre><p><a name="database-connections"></a></p><h3 id="database-connections" tabindex="-1"><a class="header-anchor" href="#database-connections" aria-hidden="true">#</a> Database Connections</h3><p>By default, all Eloquent models will use the default database connection that is configured for your application. If you would like to specify a different connection that should be used when interacting with a particular model, you should define a <code>$connection</code> property on the model:</p><pre><code>&lt;?php

namespace App\\Models;

use Illuminate\\Database\\Eloquent\\Model;

class Flight extends Model
{
    /**
     * The database connection that should be used by the model.
     *
     * @var string
     */
    protected $connection = &#39;sqlite&#39;;
}
</code></pre><p><a name="default-attribute-values"></a></p><h3 id="default-attribute-values" tabindex="-1"><a class="header-anchor" href="#default-attribute-values" aria-hidden="true">#</a> Default Attribute Values</h3><p>By default, a newly instantiated model instance will not contain any attribute values. If you would like to define the default values for some of your model&#39;s attributes, you may define an <code>$attributes</code> property on your model. Attribute values placed in the <code>$attributes</code> array should be in their raw, &quot;storable&quot; format as if they were just read from the database:</p><pre><code>&lt;?php

namespace App\\Models;

use Illuminate\\Database\\Eloquent\\Model;

class Flight extends Model
{
    /**
     * The model&#39;s default values for attributes.
     *
     * @var array
     */
    protected $attributes = [
        &#39;options&#39; =&gt; &#39;[]&#39;,
        &#39;delayed&#39; =&gt; false,
    ];
}
</code></pre><p><a name="configuring-eloquent-strictness"></a></p><h3 id="configuring-eloquent-strictness" tabindex="-1"><a class="header-anchor" href="#configuring-eloquent-strictness" aria-hidden="true">#</a> Configuring Eloquent Strictness</h3><p>Laravel offers several methods that allow you to configure Eloquent&#39;s behavior and &quot;strictness&quot; in a variety of situations.</p><p>First, the <code>preventLazyLoading</code> method accepts an optional boolean argument that indicates if lazy loading should be prevented. For example, you may wish to only disable lazy loading in non-production environments so that your production environment will continue to function normally even if a lazy loaded relationship is accidentally present in production code. Typically, this method should be invoked in the <code>boot</code> method of your application&#39;s <code>AppServiceProvider</code>:</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Database<span class="token punctuation">\\</span>Eloquent<span class="token punctuation">\\</span>Model</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * Bootstrap any application services.
 */</span>
<span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">boot</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">void</span>
<span class="token punctuation">{</span>
    <span class="token class-name static-context">Model</span><span class="token operator">::</span><span class="token function">preventLazyLoading</span><span class="token punctuation">(</span><span class="token operator">!</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">app</span><span class="token operator">-&gt;</span><span class="token function">isProduction</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Also, you may instruct Laravel to throw an exception when attempting to fill an unfillable attribute by invoking the <code>preventSilentlyDiscardingAttributes</code> method. This can help prevent unexpected errors during local development when attempting to set an attribute that has not been added to the model&#39;s <code>fillable</code> array:</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token class-name static-context">Model</span><span class="token operator">::</span><span class="token function">preventSilentlyDiscardingAttributes</span><span class="token punctuation">(</span><span class="token operator">!</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">app</span><span class="token operator">-&gt;</span><span class="token function">isProduction</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a name="retrieving-models"></a></p><h2 id="retrieving-models" tabindex="-1"><a class="header-anchor" href="#retrieving-models" aria-hidden="true">#</a> Retrieving Models</h2><p>Once you have created a model and <a href="./migrations#writing-migrations">its associated database table</a>, you are ready to start retrieving data from your database. You can think of each Eloquent model as a powerful <a href="./queries">query builder</a> allowing you to fluently query the database table associated with the model. The model&#39;s <code>all</code> method will retrieve all of the records from the model&#39;s associated database table:</p><pre><code>use App\\Models\\Flight;

foreach (Flight::all() as $flight) {
    echo $flight-&gt;name;
}
</code></pre><p><a name="building-queries"></a></p><h4 id="building-queries" tabindex="-1"><a class="header-anchor" href="#building-queries" aria-hidden="true">#</a> Building Queries</h4><p>The Eloquent <code>all</code> method will return all of the results in the model&#39;s table. However, since each Eloquent model serves as a <a href="./queries">query builder</a>, you may add additional constraints to queries and then invoke the <code>get</code> method to retrieve the results:</p><pre><code>$flights = Flight::where(&#39;active&#39;, 1)
               -&gt;orderBy(&#39;name&#39;)
               -&gt;take(10)
               -&gt;get();
</code></pre><blockquote><p><strong>Note</strong><br> Since Eloquent models are query builders, you should review all of the methods provided by Laravel&#39;s <a href="./queries">query builder</a>. You may use any of these methods when writing your Eloquent queries.</p></blockquote><p><a name="refreshing-models"></a></p><h4 id="refreshing-models" tabindex="-1"><a class="header-anchor" href="#refreshing-models" aria-hidden="true">#</a> Refreshing Models</h4><p>If you already have an instance of an Eloquent model that was retrieved from the database, you can &quot;refresh&quot; the model using the <code>fresh</code> and <code>refresh</code> methods. The <code>fresh</code> method will re-retrieve the model from the database. The existing model instance will not be affected:</p><pre><code>$flight = Flight::where(&#39;number&#39;, &#39;FR 900&#39;)-&gt;first();

$freshFlight = $flight-&gt;fresh();
</code></pre><p>The <code>refresh</code> method will re-hydrate the existing model using fresh data from the database. In addition, all of its loaded relationships will be refreshed as well:</p><pre><code>$flight = Flight::where(&#39;number&#39;, &#39;FR 900&#39;)-&gt;first();

$flight-&gt;number = &#39;FR 456&#39;;

$flight-&gt;refresh();

$flight-&gt;number; // &quot;FR 900&quot;
</code></pre><p><a name="collections"></a></p><h3 id="collections" tabindex="-1"><a class="header-anchor" href="#collections" aria-hidden="true">#</a> Collections</h3><p>As we have seen, Eloquent methods like <code>all</code> and <code>get</code> retrieve multiple records from the database. However, these methods don&#39;t return a plain PHP array. Instead, an instance of <code>Illuminate\\Database\\Eloquent\\Collection</code> is returned.</p><p>The Eloquent <code>Collection</code> class extends Laravel&#39;s base <code>Illuminate\\Support\\Collection</code> class, which provides a <a href="./collections#available-methods">variety of helpful methods</a> for interacting with data collections. For example, the <code>reject</code> method may be used to remove models from a collection based on the results of an invoked closure:</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token variable">$flights</span> <span class="token operator">=</span> <span class="token class-name static-context">Flight</span><span class="token operator">::</span><span class="token function">where</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;destination&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;Paris&#39;</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token variable">$flights</span> <span class="token operator">=</span> <span class="token variable">$flights</span><span class="token operator">-&gt;</span><span class="token function">reject</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token class-name type-declaration">Flight</span> <span class="token variable">$flight</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token variable">$flight</span><span class="token operator">-&gt;</span><span class="token property">cancelled</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>In addition to the methods provided by Laravel&#39;s base collection class, the Eloquent collection class provides <a href="./eloquent-collections#available-methods">a few extra methods</a> that are specifically intended for interacting with collections of Eloquent models.</p><p>Since all of Laravel&#39;s collections implement PHP&#39;s iterable interfaces, you may loop over collections as if they were an array:</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">foreach</span> <span class="token punctuation">(</span><span class="token variable">$flights</span> <span class="token keyword">as</span> <span class="token variable">$flight</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">echo</span> <span class="token variable">$flight</span><span class="token operator">-&gt;</span><span class="token property">name</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="chunking-results"></a></p><h3 id="chunking-results" tabindex="-1"><a class="header-anchor" href="#chunking-results" aria-hidden="true">#</a> Chunking Results</h3><p>Your application may run out of memory if you attempt to load tens of thousands of Eloquent records via the <code>all</code> or <code>get</code> methods. Instead of using these methods, the <code>chunk</code> method may be used to process large numbers of models more efficiently.</p><p>The <code>chunk</code> method will retrieve a subset of Eloquent models, passing them to a closure for processing. Since only the current chunk of Eloquent models is retrieved at a time, the <code>chunk</code> method will provide significantly reduced memory usage when working with a large number of models:</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">App<span class="token punctuation">\\</span>Models<span class="token punctuation">\\</span>Flight</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Database<span class="token punctuation">\\</span>Eloquent<span class="token punctuation">\\</span>Collection</span><span class="token punctuation">;</span>

<span class="token class-name static-context">Flight</span><span class="token operator">::</span><span class="token function">chunk</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token class-name type-declaration">Collection</span> <span class="token variable">$flights</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">foreach</span> <span class="token punctuation">(</span><span class="token variable">$flights</span> <span class="token keyword">as</span> <span class="token variable">$flight</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// ...</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The first argument passed to the <code>chunk</code> method is the number of records you wish to receive per &quot;chunk&quot;. The closure passed as the second argument will be invoked for each chunk that is retrieved from the database. A database query will be executed to retrieve each chunk of records passed to the closure.</p><p>If you are filtering the results of the <code>chunk</code> method based on a column that you will also be updating while iterating over the results, you should use the <code>chunkById</code> method. Using the <code>chunk</code> method in these scenarios could lead to unexpected and inconsistent results. Internally, the <code>chunkById</code> method will always retrieve models with an <code>id</code> column greater than the last model in the previous chunk:</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token class-name static-context">Flight</span><span class="token operator">::</span><span class="token function">where</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;departed&#39;</span><span class="token punctuation">,</span> <span class="token constant boolean">true</span><span class="token punctuation">)</span>
    <span class="token operator">-&gt;</span><span class="token function">chunkById</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token class-name type-declaration">Collection</span> <span class="token variable">$flights</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token variable">$flights</span><span class="token operator">-&gt;</span><span class="token property">each</span><span class="token operator">-&gt;</span><span class="token function">update</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;departed&#39;</span> <span class="token operator">=&gt;</span> <span class="token constant boolean">false</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token variable">$column</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;id&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="chunking-using-lazy-collections"></a></p><h3 id="chunking-using-lazy-collections" tabindex="-1"><a class="header-anchor" href="#chunking-using-lazy-collections" aria-hidden="true">#</a> Chunking Using Lazy Collections</h3><p>The <code>lazy</code> method works similarly to <a href="#chunking-results">the <code>chunk</code> method</a> in the sense that, behind the scenes, it executes the query in chunks. However, instead of passing each chunk directly into a callback as is, the <code>lazy</code> method returns a flattened <a href="./collections#lazy-collections"><code>LazyCollection</code></a> of Eloquent models, which lets you interact with the results as a single stream:</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">App<span class="token punctuation">\\</span>Models<span class="token punctuation">\\</span>Flight</span><span class="token punctuation">;</span>

<span class="token keyword">foreach</span> <span class="token punctuation">(</span><span class="token class-name static-context">Flight</span><span class="token operator">::</span><span class="token function">lazy</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">as</span> <span class="token variable">$flight</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>If you are filtering the results of the <code>lazy</code> method based on a column that you will also be updating while iterating over the results, you should use the <code>lazyById</code> method. Internally, the <code>lazyById</code> method will always retrieve models with an <code>id</code> column greater than the last model in the previous chunk:</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token class-name static-context">Flight</span><span class="token operator">::</span><span class="token function">where</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;departed&#39;</span><span class="token punctuation">,</span> <span class="token constant boolean">true</span><span class="token punctuation">)</span>
    <span class="token operator">-&gt;</span><span class="token function">lazyById</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">,</span> <span class="token variable">$column</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;id&#39;</span><span class="token punctuation">)</span>
    <span class="token operator">-&gt;</span><span class="token property">each</span><span class="token operator">-&gt;</span><span class="token function">update</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;departed&#39;</span> <span class="token operator">=&gt;</span> <span class="token constant boolean">false</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>You may filter the results based on the descending order of the <code>id</code> using the <code>lazyByIdDesc</code> method.</p><p><a name="cursors"></a></p><h3 id="cursors" tabindex="-1"><a class="header-anchor" href="#cursors" aria-hidden="true">#</a> Cursors</h3><p>Similar to the <code>lazy</code> method, the <code>cursor</code> method may be used to significantly reduce your application&#39;s memory consumption when iterating through tens of thousands of Eloquent model records.</p><p>The <code>cursor</code> method will only execute a single database query; however, the individual Eloquent models will not be hydrated until they are actually iterated over. Therefore, only one Eloquent model is kept in memory at any given time while iterating over the cursor.</p><blockquote><p><strong>Warning</strong><br> Since the <code>cursor</code> method only ever holds a single Eloquent model in memory at a time, it cannot eager load relationships. If you need to eager load relationships, consider using <a href="#chunking-using-lazy-collections">the <code>lazy</code> method</a> instead.</p></blockquote>`,110),h=a("code",null,"cursor",-1),m={href:"https://www.php.net/manual/en/language.generators.overview.php",target:"_blank",rel:"noopener noreferrer"},g=n(`<div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">App<span class="token punctuation">\\</span>Models<span class="token punctuation">\\</span>Flight</span><span class="token punctuation">;</span>

<span class="token keyword">foreach</span> <span class="token punctuation">(</span><span class="token class-name static-context">Flight</span><span class="token operator">::</span><span class="token function">where</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;destination&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;Zurich&#39;</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">cursor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">as</span> <span class="token variable">$flight</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The <code>cursor</code> returns an <code>Illuminate\\Support\\LazyCollection</code> instance. <a href="./collections#lazy-collections">Lazy collections</a> allow you to use many of the collection methods available on typical Laravel collections while only loading a single model into memory at a time:</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">App<span class="token punctuation">\\</span>Models<span class="token punctuation">\\</span>User</span><span class="token punctuation">;</span>

<span class="token variable">$users</span> <span class="token operator">=</span> <span class="token class-name static-context">User</span><span class="token operator">::</span><span class="token function">cursor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token class-name type-declaration">User</span> <span class="token variable">$user</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token variable">$user</span><span class="token operator">-&gt;</span><span class="token property">id</span> <span class="token operator">&gt;</span> <span class="token number">500</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">foreach</span> <span class="token punctuation">(</span><span class="token variable">$users</span> <span class="token keyword">as</span> <span class="token variable">$user</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">echo</span> <span class="token variable">$user</span><span class="token operator">-&gt;</span><span class="token property">id</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),f=a("code",null,"cursor",-1),y={href:"https://www.php.net/manual/en/mysqlinfo.concepts.buffering.php",target:"_blank",rel:"noopener noreferrer"},b=a("a",{href:"#chunking-using-lazy-collections"},[e("the "),a("code",null,"lazy"),e(" method")],-1),v=n(`<p><a name="advanced-subqueries"></a></p><h3 id="advanced-subqueries" tabindex="-1"><a class="header-anchor" href="#advanced-subqueries" aria-hidden="true">#</a> Advanced Subqueries</h3><p><a name="subquery-selects"></a></p><h4 id="subquery-selects" tabindex="-1"><a class="header-anchor" href="#subquery-selects" aria-hidden="true">#</a> Subquery Selects</h4><p>Eloquent also offers advanced subquery support, which allows you to pull information from related tables in a single query. For example, let&#39;s imagine that we have a table of flight <code>destinations</code> and a table of <code>flights</code> to destinations. The <code>flights</code> table contains an <code>arrived_at</code> column which indicates when the flight arrived at the destination.</p><p>Using the subquery functionality available to the query builder&#39;s <code>select</code> and <code>addSelect</code> methods, we can select all of the <code>destinations</code> and the name of the flight that most recently arrived at that destination using a single query:</p><pre><code>use App\\Models\\Destination;
use App\\Models\\Flight;

return Destination::addSelect([&#39;last_flight&#39; =&gt; Flight::select(&#39;name&#39;)
    -&gt;whereColumn(&#39;destination_id&#39;, &#39;destinations.id&#39;)
    -&gt;orderByDesc(&#39;arrived_at&#39;)
    -&gt;limit(1)
])-&gt;get();
</code></pre><p><a name="subquery-ordering"></a></p><h4 id="subquery-ordering" tabindex="-1"><a class="header-anchor" href="#subquery-ordering" aria-hidden="true">#</a> Subquery Ordering</h4><p>In addition, the query builder&#39;s <code>orderBy</code> function supports subqueries. Continuing to use our flight example, we may use this functionality to sort all destinations based on when the last flight arrived at that destination. Again, this may be done while executing a single database query:</p><pre><code>return Destination::orderByDesc(
    Flight::select(&#39;arrived_at&#39;)
        -&gt;whereColumn(&#39;destination_id&#39;, &#39;destinations.id&#39;)
        -&gt;orderByDesc(&#39;arrived_at&#39;)
        -&gt;limit(1)
)-&gt;get();
</code></pre><p><a name="retrieving-single-models"></a></p><h2 id="retrieving-single-models-aggregates" tabindex="-1"><a class="header-anchor" href="#retrieving-single-models-aggregates" aria-hidden="true">#</a> Retrieving Single Models / Aggregates</h2><p>In addition to retrieving all of the records matching a given query, you may also retrieve single records using the <code>find</code>, <code>first</code>, or <code>firstWhere</code> methods. Instead of returning a collection of models, these methods return a single model instance:</p><pre><code>use App\\Models\\Flight;

// Retrieve a model by its primary key...
$flight = Flight::find(1);

// Retrieve the first model matching the query constraints...
$flight = Flight::where(&#39;active&#39;, 1)-&gt;first();

// Alternative to retrieving the first model matching the query constraints...
$flight = Flight::firstWhere(&#39;active&#39;, 1);
</code></pre><p>Sometimes you may wish to perform some other action if no results are found. The <code>findOr</code> and <code>firstOr</code> methods will return a single model instance or, if no results are found, execute the given closure. The value returned by the closure will be considered the result of the method:</p><pre><code>$flight = Flight::findOr(1, function () {
    // ...
});

$flight = Flight::where(&#39;legs&#39;, &#39;&gt;&#39;, 3)-&gt;firstOr(function () {
    // ...
});
</code></pre><p><a name="not-found-exceptions"></a></p><h4 id="not-found-exceptions" tabindex="-1"><a class="header-anchor" href="#not-found-exceptions" aria-hidden="true">#</a> Not Found Exceptions</h4><p>Sometimes you may wish to throw an exception if a model is not found. This is particularly useful in routes or controllers. The <code>findOrFail</code> and <code>firstOrFail</code> methods will retrieve the first result of the query; however, if no result is found, an <code>Illuminate\\Database\\Eloquent\\ModelNotFoundException</code> will be thrown:</p><pre><code>$flight = Flight::findOrFail(1);

$flight = Flight::where(&#39;legs&#39;, &#39;&gt;&#39;, 3)-&gt;firstOrFail();
</code></pre><p>If the <code>ModelNotFoundException</code> is not caught, a 404 HTTP response is automatically sent back to the client:</p><pre><code>use App\\Models\\Flight;

Route::get(&#39;/api/flights/{id}&#39;, function (string $id) {
    return Flight::findOrFail($id);
});
</code></pre><p><a name="retrieving-or-creating-models"></a></p><h3 id="retrieving-or-creating-models" tabindex="-1"><a class="header-anchor" href="#retrieving-or-creating-models" aria-hidden="true">#</a> Retrieving Or Creating Models</h3><p>The <code>firstOrCreate</code> method will attempt to locate a database record using the given column / value pairs. If the model can not be found in the database, a record will be inserted with the attributes resulting from merging the first array argument with the optional second array argument:</p><p>The <code>firstOrNew</code> method, like <code>firstOrCreate</code>, will attempt to locate a record in the database matching the given attributes. However, if a model is not found, a new model instance will be returned. Note that the model returned by <code>firstOrNew</code> has not yet been persisted to the database. You will need to manually call the <code>save</code> method to persist it:</p><pre><code>use App\\Models\\Flight;

// Retrieve flight by name or create it if it doesn&#39;t exist...
$flight = Flight::firstOrCreate([
    &#39;name&#39; =&gt; &#39;London to Paris&#39;
]);

// Retrieve flight by name or create it with the name, delayed, and arrival_time attributes...
$flight = Flight::firstOrCreate(
    [&#39;name&#39; =&gt; &#39;London to Paris&#39;],
    [&#39;delayed&#39; =&gt; 1, &#39;arrival_time&#39; =&gt; &#39;11:30&#39;]
);

// Retrieve flight by name or instantiate a new Flight instance...
$flight = Flight::firstOrNew([
    &#39;name&#39; =&gt; &#39;London to Paris&#39;
]);

// Retrieve flight by name or instantiate with the name, delayed, and arrival_time attributes...
$flight = Flight::firstOrNew(
    [&#39;name&#39; =&gt; &#39;Tokyo to Sydney&#39;],
    [&#39;delayed&#39; =&gt; 1, &#39;arrival_time&#39; =&gt; &#39;11:30&#39;]
);
</code></pre><p><a name="retrieving-aggregates"></a></p><h3 id="retrieving-aggregates" tabindex="-1"><a class="header-anchor" href="#retrieving-aggregates" aria-hidden="true">#</a> Retrieving Aggregates</h3><p>When interacting with Eloquent models, you may also use the <code>count</code>, <code>sum</code>, <code>max</code>, and other <a href="./queries#aggregates">aggregate methods</a> provided by the Laravel <a href="./queries">query builder</a>. As you might expect, these methods return a scalar value instead of an Eloquent model instance:</p><pre><code>$count = Flight::where(&#39;active&#39;, 1)-&gt;count();

$max = Flight::where(&#39;active&#39;, 1)-&gt;max(&#39;price&#39;);
</code></pre><p><a name="inserting-and-updating-models"></a></p><h2 id="inserting-updating-models" tabindex="-1"><a class="header-anchor" href="#inserting-updating-models" aria-hidden="true">#</a> Inserting &amp; Updating Models</h2><p><a name="inserts"></a></p><h3 id="inserts" tabindex="-1"><a class="header-anchor" href="#inserts" aria-hidden="true">#</a> Inserts</h3><p>Of course, when using Eloquent, we don&#39;t only need to retrieve models from the database. We also need to insert new records. Thankfully, Eloquent makes it simple. To insert a new record into the database, you should instantiate a new model instance and set attributes on the model. Then, call the <code>save</code> method on the model instance:</p><pre><code>&lt;?php

namespace App\\Http\\Controllers;

use App\\Http\\Controllers\\Controller;
use App\\Models\\Flight;
use Illuminate\\Http\\RedirectResponse;
use Illuminate\\Http\\Request;

class FlightController extends Controller
{
    /**
     * Store a new flight in the database.
     */
    public function store(Request $request): RedirectResponse
    {
        // Validate the request...

        $flight = new Flight;

        $flight-&gt;name = $request-&gt;name;

        $flight-&gt;save();

        return redirect(&#39;/flights&#39;);
    }
}
</code></pre><p>In this example, we assign the <code>name</code> field from the incoming HTTP request to the <code>name</code> attribute of the <code>App\\Models\\Flight</code> model instance. When we call the <code>save</code> method, a record will be inserted into the database. The model&#39;s <code>created_at</code> and <code>updated_at</code> timestamps will automatically be set when the <code>save</code> method is called, so there is no need to set them manually.</p><p>Alternatively, you may use the <code>create</code> method to &quot;save&quot; a new model using a single PHP statement. The inserted model instance will be returned to you by the <code>create</code> method:</p><pre><code>use App\\Models\\Flight;

$flight = Flight::create([
    &#39;name&#39; =&gt; &#39;London to Paris&#39;,
]);
</code></pre><p>However, before using the <code>create</code> method, you will need to specify either a <code>fillable</code> or <code>guarded</code> property on your model class. These properties are required because all Eloquent models are protected against mass assignment vulnerabilities by default. To learn more about mass assignment, please consult the <a href="#mass-assignment">mass assignment documentation</a>.</p><p><a name="updates"></a></p><h3 id="updates" tabindex="-1"><a class="header-anchor" href="#updates" aria-hidden="true">#</a> Updates</h3><p>The <code>save</code> method may also be used to update models that already exist in the database. To update a model, you should retrieve it and set any attributes you wish to update. Then, you should call the model&#39;s <code>save</code> method. Again, the <code>updated_at</code> timestamp will automatically be updated, so there is no need to manually set its value:</p><pre><code>use App\\Models\\Flight;

$flight = Flight::find(1);

$flight-&gt;name = &#39;Paris to London&#39;;

$flight-&gt;save();
</code></pre><p><a name="mass-updates"></a></p><h4 id="mass-updates" tabindex="-1"><a class="header-anchor" href="#mass-updates" aria-hidden="true">#</a> Mass Updates</h4><p>Updates can also be performed against models that match a given query. In this example, all flights that are <code>active</code> and have a <code>destination</code> of <code>San Diego</code> will be marked as delayed:</p><pre><code>Flight::where(&#39;active&#39;, 1)
      -&gt;where(&#39;destination&#39;, &#39;San Diego&#39;)
      -&gt;update([&#39;delayed&#39; =&gt; 1]);
</code></pre><p>The <code>update</code> method expects an array of column and value pairs representing the columns that should be updated. The <code>update</code> method returns the number of affected rows.</p><blockquote><p><strong>Warning</strong><br> When issuing a mass update via Eloquent, the <code>saving</code>, <code>saved</code>, <code>updating</code>, and <code>updated</code> model events will not be fired for the updated models. This is because the models are never actually retrieved when issuing a mass update.</p></blockquote><p><a name="examining-attribute-changes"></a></p><h4 id="examining-attribute-changes" tabindex="-1"><a class="header-anchor" href="#examining-attribute-changes" aria-hidden="true">#</a> Examining Attribute Changes</h4><p>Eloquent provides the <code>isDirty</code>, <code>isClean</code>, and <code>wasChanged</code> methods to examine the internal state of your model and determine how its attributes have changed from when the model was originally retrieved.</p><p>The <code>isDirty</code> method determines if any of the model&#39;s attributes have been changed since the model was retrieved. You may pass a specific attribute name or an array of attributes to the <code>isDirty</code> method to determine if any of the attributes are &quot;dirty&quot;. The <code>isClean</code> method will determine if an attribute has remained unchanged since the model was retrieved. This method also accepts an optional attribute argument:</p><pre><code>use App\\Models\\User;

$user = User::create([
    &#39;first_name&#39; =&gt; &#39;Taylor&#39;,
    &#39;last_name&#39; =&gt; &#39;Otwell&#39;,
    &#39;title&#39; =&gt; &#39;Developer&#39;,
]);

$user-&gt;title = &#39;Painter&#39;;

$user-&gt;isDirty(); // true
$user-&gt;isDirty(&#39;title&#39;); // true
$user-&gt;isDirty(&#39;first_name&#39;); // false
$user-&gt;isDirty([&#39;first_name&#39;, &#39;title&#39;]); // true

$user-&gt;isClean(); // false
$user-&gt;isClean(&#39;title&#39;); // false
$user-&gt;isClean(&#39;first_name&#39;); // true
$user-&gt;isClean([&#39;first_name&#39;, &#39;title&#39;]); // false

$user-&gt;save();

$user-&gt;isDirty(); // false
$user-&gt;isClean(); // true
</code></pre><p>The <code>wasChanged</code> method determines if any attributes were changed when the model was last saved within the current request cycle. If needed, you may pass an attribute name to see if a particular attribute was changed:</p><pre><code>$user = User::create([
    &#39;first_name&#39; =&gt; &#39;Taylor&#39;,
    &#39;last_name&#39; =&gt; &#39;Otwell&#39;,
    &#39;title&#39; =&gt; &#39;Developer&#39;,
]);

$user-&gt;title = &#39;Painter&#39;;

$user-&gt;save();

$user-&gt;wasChanged(); // true
$user-&gt;wasChanged(&#39;title&#39;); // true
$user-&gt;wasChanged([&#39;title&#39;, &#39;slug&#39;]); // true
$user-&gt;wasChanged(&#39;first_name&#39;); // false
$user-&gt;wasChanged([&#39;first_name&#39;, &#39;title&#39;]); // true
</code></pre><p>The <code>getOriginal</code> method returns an array containing the original attributes of the model regardless of any changes to the model since it was retrieved. If needed, you may pass a specific attribute name to get the original value of a particular attribute:</p><pre><code>$user = User::find(1);

$user-&gt;name; // John
$user-&gt;email; // john@example.com

$user-&gt;name = &quot;Jack&quot;;
$user-&gt;name; // Jack

$user-&gt;getOriginal(&#39;name&#39;); // John
$user-&gt;getOriginal(); // Array of original attributes...
</code></pre><p><a name="mass-assignment"></a></p><h3 id="mass-assignment" tabindex="-1"><a class="header-anchor" href="#mass-assignment" aria-hidden="true">#</a> Mass Assignment</h3><p>You may use the <code>create</code> method to &quot;save&quot; a new model using a single PHP statement. The inserted model instance will be returned to you by the method:</p><pre><code>use App\\Models\\Flight;

$flight = Flight::create([
    &#39;name&#39; =&gt; &#39;London to Paris&#39;,
]);
</code></pre><p>However, before using the <code>create</code> method, you will need to specify either a <code>fillable</code> or <code>guarded</code> property on your model class. These properties are required because all Eloquent models are protected against mass assignment vulnerabilities by default.</p><p>A mass assignment vulnerability occurs when a user passes an unexpected HTTP request field and that field changes a column in your database that you did not expect. For example, a malicious user might send an <code>is_admin</code> parameter through an HTTP request, which is then passed to your model&#39;s <code>create</code> method, allowing the user to escalate themselves to an administrator.</p><p>So, to get started, you should define which model attributes you want to make mass assignable. You may do this using the <code>$fillable</code> property on the model. For example, let&#39;s make the <code>name</code> attribute of our <code>Flight</code> model mass assignable:</p><pre><code>&lt;?php

namespace App\\Models;

use Illuminate\\Database\\Eloquent\\Model;

class Flight extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [&#39;name&#39;];
}
</code></pre><p>Once you have specified which attributes are mass assignable, you may use the <code>create</code> method to insert a new record in the database. The <code>create</code> method returns the newly created model instance:</p><pre><code>$flight = Flight::create([&#39;name&#39; =&gt; &#39;London to Paris&#39;]);
</code></pre><p>If you already have a model instance, you may use the <code>fill</code> method to populate it with an array of attributes:</p><pre><code>$flight-&gt;fill([&#39;name&#39; =&gt; &#39;Amsterdam to Frankfurt&#39;]);
</code></pre><p><a name="mass-assignment-json-columns"></a></p><h4 id="mass-assignment-json-columns" tabindex="-1"><a class="header-anchor" href="#mass-assignment-json-columns" aria-hidden="true">#</a> Mass Assignment &amp; JSON Columns</h4><p>When assigning JSON columns, each column&#39;s mass assignable key must be specified in your model&#39;s <code>$fillable</code> array. For security, Laravel does not support updating nested JSON attributes when using the <code>guarded</code> property:</p><pre><code>/**
 * The attributes that are mass assignable.
 *
 * @var array
 */
protected $fillable = [
    &#39;options-&gt;enabled&#39;,
];
</code></pre><p><a name="allowing-mass-assignment"></a></p><h4 id="allowing-mass-assignment" tabindex="-1"><a class="header-anchor" href="#allowing-mass-assignment" aria-hidden="true">#</a> Allowing Mass Assignment</h4><p>If you would like to make all of your attributes mass assignable, you may define your model&#39;s <code>$guarded</code> property as an empty array. If you choose to unguard your model, you should take special care to always hand-craft the arrays passed to Eloquent&#39;s <code>fill</code>, <code>create</code>, and <code>update</code> methods:</p><pre><code>/**
 * The attributes that aren&#39;t mass assignable.
 *
 * @var array
 */
protected $guarded = [];
</code></pre><p><a name="mass-assignment-exceptions"></a></p><h4 id="mass-assignment-exceptions" tabindex="-1"><a class="header-anchor" href="#mass-assignment-exceptions" aria-hidden="true">#</a> Mass Assignment Exceptions</h4><p>By default, attributes that are not included in the <code>$fillable</code> array are silently discarded when performing mass-assignment operations. In production, this is expected behavior; however, during local development it can lead to confusion as to why model changes are not taking effect.</p><p>If you wish, you may instruct Laravel to throw an exception when attempting to fill an unfillable attribute by invoking the <code>preventSilentlyDiscardingAttributes</code> method. Typically, this method should be invoked within the <code>boot</code> method of one of your application&#39;s service providers:</p><pre><code>use Illuminate\\Database\\Eloquent\\Model;

/**
 * Bootstrap any application services.
 */
public function boot(): void
{
    Model::preventSilentlyDiscardingAttributes($this-&gt;app-&gt;isLocal());
}
</code></pre><p><a name="upserts"></a></p><h3 id="upserts" tabindex="-1"><a class="header-anchor" href="#upserts" aria-hidden="true">#</a> Upserts</h3><p>Occasionally, you may need to update an existing model or create a new model if no matching model exists. Like the <code>firstOrCreate</code> method, the <code>updateOrCreate</code> method persists the model, so there&#39;s no need to manually call the <code>save</code> method.</p><p>In the example below, if a flight exists with a <code>departure</code> location of <code>Oakland</code> and a <code>destination</code> location of <code>San Diego</code>, its <code>price</code> and <code>discounted</code> columns will be updated. If no such flight exists, a new flight will be created which has the attributes resulting from merging the first argument array with the second argument array:</p><pre><code>$flight = Flight::updateOrCreate(
    [&#39;departure&#39; =&gt; &#39;Oakland&#39;, &#39;destination&#39; =&gt; &#39;San Diego&#39;],
    [&#39;price&#39; =&gt; 99, &#39;discounted&#39; =&gt; 1]
);
</code></pre><p>If you would like to perform multiple &quot;upserts&quot; in a single query, then you should use the <code>upsert</code> method instead. The method&#39;s first argument consists of the values to insert or update, while the second argument lists the column(s) that uniquely identify records within the associated table. The method&#39;s third and final argument is an array of the columns that should be updated if a matching record already exists in the database. The <code>upsert</code> method will automatically set the <code>created_at</code> and <code>updated_at</code> timestamps if timestamps are enabled on the model:</p><pre><code>Flight::upsert([
    [&#39;departure&#39; =&gt; &#39;Oakland&#39;, &#39;destination&#39; =&gt; &#39;San Diego&#39;, &#39;price&#39; =&gt; 99],
    [&#39;departure&#39; =&gt; &#39;Chicago&#39;, &#39;destination&#39; =&gt; &#39;New York&#39;, &#39;price&#39; =&gt; 150]
], [&#39;departure&#39;, &#39;destination&#39;], [&#39;price&#39;]);
</code></pre><blockquote><p><strong>Warning</strong><br> All databases except SQL Server require the columns in the second argument of the <code>upsert</code> method to have a &quot;primary&quot; or &quot;unique&quot; index. In addition, the MySQL database driver ignores the second argument of the <code>upsert</code> method and always uses the &quot;primary&quot; and &quot;unique&quot; indexes of the table to detect existing records.</p></blockquote><p><a name="deleting-models"></a></p><h2 id="deleting-models" tabindex="-1"><a class="header-anchor" href="#deleting-models" aria-hidden="true">#</a> Deleting Models</h2><p>To delete a model, you may call the <code>delete</code> method on the model instance:</p><pre><code>use App\\Models\\Flight;

$flight = Flight::find(1);

$flight-&gt;delete();
</code></pre><p>You may call the <code>truncate</code> method to delete all of the model&#39;s associated database records. The <code>truncate</code> operation will also reset any auto-incrementing IDs on the model&#39;s associated table:</p><pre><code>Flight::truncate();
</code></pre><p><a name="deleting-an-existing-model-by-its-primary-key"></a></p><h4 id="deleting-an-existing-model-by-its-primary-key" tabindex="-1"><a class="header-anchor" href="#deleting-an-existing-model-by-its-primary-key" aria-hidden="true">#</a> Deleting An Existing Model By Its Primary Key</h4><p>In the example above, we are retrieving the model from the database before calling the <code>delete</code> method. However, if you know the primary key of the model, you may delete the model without explicitly retrieving it by calling the <code>destroy</code> method. In addition to accepting the single primary key, the <code>destroy</code> method will accept multiple primary keys, an array of primary keys, or a <a href="./collections">collection</a> of primary keys:</p><pre><code>Flight::destroy(1);

Flight::destroy(1, 2, 3);

Flight::destroy([1, 2, 3]);

Flight::destroy(collect([1, 2, 3]));
</code></pre><blockquote><p><strong>Warning</strong><br> The <code>destroy</code> method loads each model individually and calls the <code>delete</code> method so that the <code>deleting</code> and <code>deleted</code> events are properly dispatched for each model.</p></blockquote><p><a name="deleting-models-using-queries"></a></p><h4 id="deleting-models-using-queries" tabindex="-1"><a class="header-anchor" href="#deleting-models-using-queries" aria-hidden="true">#</a> Deleting Models Using Queries</h4><p>Of course, you may build an Eloquent query to delete all models matching your query&#39;s criteria. In this example, we will delete all flights that are marked as inactive. Like mass updates, mass deletes will not dispatch model events for the models that are deleted:</p><pre><code>$deleted = Flight::where(&#39;active&#39;, 0)-&gt;delete();
</code></pre><blockquote><p><strong>Warning</strong><br> When executing a mass delete statement via Eloquent, the <code>deleting</code> and <code>deleted</code> model events will not be dispatched for the deleted models. This is because the models are never actually retrieved when executing the delete statement.</p></blockquote><p><a name="soft-deleting"></a></p><h3 id="soft-deleting" tabindex="-1"><a class="header-anchor" href="#soft-deleting" aria-hidden="true">#</a> Soft Deleting</h3><p>In addition to actually removing records from your database, Eloquent can also &quot;soft delete&quot; models. When models are soft deleted, they are not actually removed from your database. Instead, a <code>deleted_at</code> attribute is set on the model indicating the date and time at which the model was &quot;deleted&quot;. To enable soft deletes for a model, add the <code>Illuminate\\Database\\Eloquent\\SoftDeletes</code> trait to the model:</p><pre><code>&lt;?php

namespace App\\Models;

use Illuminate\\Database\\Eloquent\\Model;
use Illuminate\\Database\\Eloquent\\SoftDeletes;

class Flight extends Model
{
    use SoftDeletes;
}
</code></pre><blockquote><p><strong>Note</strong><br> The <code>SoftDeletes</code> trait will automatically cast the <code>deleted_at</code> attribute to a <code>DateTime</code> / <code>Carbon</code> instance for you.</p></blockquote><p>You should also add the <code>deleted_at</code> column to your database table. The Laravel <a href="./migrations">schema builder</a> contains a helper method to create this column:</p><pre><code>use Illuminate\\Database\\Schema\\Blueprint;
use Illuminate\\Support\\Facades\\Schema;

Schema::table(&#39;flights&#39;, function (Blueprint $table) {
    $table-&gt;softDeletes();
});

Schema::table(&#39;flights&#39;, function (Blueprint $table) {
    $table-&gt;dropSoftDeletes();
});
</code></pre><p>Now, when you call the <code>delete</code> method on the model, the <code>deleted_at</code> column will be set to the current date and time. However, the model&#39;s database record will be left in the table. When querying a model that uses soft deletes, the soft deleted models will automatically be excluded from all query results.</p><p>To determine if a given model instance has been soft deleted, you may use the <code>trashed</code> method:</p><pre><code>if ($flight-&gt;trashed()) {
    // ...
}
</code></pre><p><a name="restoring-soft-deleted-models"></a></p><h4 id="restoring-soft-deleted-models" tabindex="-1"><a class="header-anchor" href="#restoring-soft-deleted-models" aria-hidden="true">#</a> Restoring Soft Deleted Models</h4><p>Sometimes you may wish to &quot;un-delete&quot; a soft deleted model. To restore a soft deleted model, you may call the <code>restore</code> method on a model instance. The <code>restore</code> method will set the model&#39;s <code>deleted_at</code> column to <code>null</code>:</p><pre><code>$flight-&gt;restore();
</code></pre><p>You may also use the <code>restore</code> method in a query to restore multiple models. Again, like other &quot;mass&quot; operations, this will not dispatch any model events for the models that are restored:</p><pre><code>Flight::withTrashed()
        -&gt;where(&#39;airline_id&#39;, 1)
        -&gt;restore();
</code></pre><p>The <code>restore</code> method may also be used when building <a href="./eloquent-relationships">relationship</a> queries:</p><pre><code>$flight-&gt;history()-&gt;restore();
</code></pre><p><a name="permanently-deleting-models"></a></p><h4 id="permanently-deleting-models" tabindex="-1"><a class="header-anchor" href="#permanently-deleting-models" aria-hidden="true">#</a> Permanently Deleting Models</h4><p>Sometimes you may need to truly remove a model from your database. You may use the <code>forceDelete</code> method to permanently remove a soft deleted model from the database table:</p><pre><code>$flight-&gt;forceDelete();
</code></pre><p>You may also use the <code>forceDelete</code> method when building Eloquent relationship queries:</p><pre><code>$flight-&gt;history()-&gt;forceDelete();
</code></pre><p><a name="querying-soft-deleted-models"></a></p><h3 id="querying-soft-deleted-models" tabindex="-1"><a class="header-anchor" href="#querying-soft-deleted-models" aria-hidden="true">#</a> Querying Soft Deleted Models</h3><p><a name="including-soft-deleted-models"></a></p><h4 id="including-soft-deleted-models" tabindex="-1"><a class="header-anchor" href="#including-soft-deleted-models" aria-hidden="true">#</a> Including Soft Deleted Models</h4><p>As noted above, soft deleted models will automatically be excluded from query results. However, you may force soft deleted models to be included in a query&#39;s results by calling the <code>withTrashed</code> method on the query:</p><pre><code>use App\\Models\\Flight;

$flights = Flight::withTrashed()
                -&gt;where(&#39;account_id&#39;, 1)
                -&gt;get();
</code></pre><p>The <code>withTrashed</code> method may also be called when building a <a href="./eloquent-relationships">relationship</a> query:</p><pre><code>$flight-&gt;history()-&gt;withTrashed()-&gt;get();
</code></pre><p><a name="retrieving-only-soft-deleted-models"></a></p><h4 id="retrieving-only-soft-deleted-models" tabindex="-1"><a class="header-anchor" href="#retrieving-only-soft-deleted-models" aria-hidden="true">#</a> Retrieving Only Soft Deleted Models</h4><p>The <code>onlyTrashed</code> method will retrieve <strong>only</strong> soft deleted models:</p><pre><code>$flights = Flight::onlyTrashed()
                -&gt;where(&#39;airline_id&#39;, 1)
                -&gt;get();
</code></pre><p><a name="pruning-models"></a></p><h2 id="pruning-models" tabindex="-1"><a class="header-anchor" href="#pruning-models" aria-hidden="true">#</a> Pruning Models</h2><p>Sometimes you may want to periodically delete models that are no longer needed. To accomplish this, you may add the <code>Illuminate\\Database\\Eloquent\\Prunable</code> or <code>Illuminate\\Database\\Eloquent\\MassPrunable</code> trait to the models you would like to periodically prune. After adding one of the traits to the model, implement a <code>prunable</code> method which returns an Eloquent query builder that resolves the models that are no longer needed:</p><pre><code>&lt;?php

namespace App\\Models;

use Illuminate\\Database\\Eloquent\\Builder;
use Illuminate\\Database\\Eloquent\\Model;
use Illuminate\\Database\\Eloquent\\Prunable;

class Flight extends Model
{
    use Prunable;

    /**
     * Get the prunable model query.
     */
    public function prunable(): Builder
    {
        return static::where(&#39;created_at&#39;, &#39;&lt;=&#39;, now()-&gt;subMonth());
    }
}
</code></pre><p>When marking models as <code>Prunable</code>, you may also define a <code>pruning</code> method on the model. This method will be called before the model is deleted. This method can be useful for deleting any additional resources associated with the model, such as stored files, before the model is permanently removed from the database:</p><pre><code>/**
 * Prepare the model for pruning.
 */
protected function pruning(): void
{
    // ...
}
</code></pre><p>After configuring your prunable model, you should schedule the <code>model:prune</code> Artisan command in your application&#39;s <code>App\\Console\\Kernel</code> class. You are free to choose the appropriate interval at which this command should be run:</p><pre><code>/**
 * Define the application&#39;s command schedule.
 */
protected function schedule(Schedule $schedule): void
{
    $schedule-&gt;command(&#39;model:prune&#39;)-&gt;daily();
}
</code></pre><p>Behind the scenes, the <code>model:prune</code> command will automatically detect &quot;Prunable&quot; models within your application&#39;s <code>app/Models</code> directory. If your models are in a different location, you may use the <code>--model</code> option to specify the model class names:</p><pre><code>$schedule-&gt;command(&#39;model:prune&#39;, [
    &#39;--model&#39; =&gt; [Address::class, Flight::class],
])-&gt;daily();
</code></pre><p>If you wish to exclude certain models from being pruned while pruning all other detected models, you may use the <code>--except</code> option:</p><pre><code>$schedule-&gt;command(&#39;model:prune&#39;, [
    &#39;--except&#39; =&gt; [Address::class, Flight::class],
])-&gt;daily();
</code></pre><p>You may test your <code>prunable</code> query by executing the <code>model:prune</code> command with the <code>--pretend</code> option. When pretending, the <code>model:prune</code> command will simply report how many records would be pruned if the command were to actually run:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan model:prune <span class="token parameter variable">--pretend</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p><strong>Warning</strong><br> Soft deleting models will be permanently deleted (<code>forceDelete</code>) if they match the prunable query.</p></blockquote><p><a name="mass-pruning"></a></p><h4 id="mass-pruning" tabindex="-1"><a class="header-anchor" href="#mass-pruning" aria-hidden="true">#</a> Mass Pruning</h4><p>When models are marked with the <code>Illuminate\\Database\\Eloquent\\MassPrunable</code> trait, models are deleted from the database using mass-deletion queries. Therefore, the <code>pruning</code> method will not be invoked, nor will the <code>deleting</code> and <code>deleted</code> model events be dispatched. This is because the models are never actually retrieved before deletion, thus making the pruning process much more efficient:</p><pre><code>&lt;?php

namespace App\\Models;

use Illuminate\\Database\\Eloquent\\Builder;
use Illuminate\\Database\\Eloquent\\Model;
use Illuminate\\Database\\Eloquent\\MassPrunable;

class Flight extends Model
{
    use MassPrunable;

    /**
     * Get the prunable model query.
     */
    public function prunable(): Builder
    {
        return static::where(&#39;created_at&#39;, &#39;&lt;=&#39;, now()-&gt;subMonth());
    }
}
</code></pre><p><a name="replicating-models"></a></p><h2 id="replicating-models" tabindex="-1"><a class="header-anchor" href="#replicating-models" aria-hidden="true">#</a> Replicating Models</h2><p>You may create an unsaved copy of an existing model instance using the <code>replicate</code> method. This method is particularly useful when you have model instances that share many of the same attributes:</p><pre><code>use App\\Models\\Address;

$shipping = Address::create([
    &#39;type&#39; =&gt; &#39;shipping&#39;,
    &#39;line_1&#39; =&gt; &#39;123 Example Street&#39;,
    &#39;city&#39; =&gt; &#39;Victorville&#39;,
    &#39;state&#39; =&gt; &#39;CA&#39;,
    &#39;postcode&#39; =&gt; &#39;90001&#39;,
]);

$billing = $shipping-&gt;replicate()-&gt;fill([
    &#39;type&#39; =&gt; &#39;billing&#39;
]);

$billing-&gt;save();
</code></pre><p>To exclude one or more attributes from being replicated to the new model, you may pass an array to the <code>replicate</code> method:</p><pre><code>$flight = Flight::create([
    &#39;destination&#39; =&gt; &#39;LAX&#39;,
    &#39;origin&#39; =&gt; &#39;LHR&#39;,
    &#39;last_flown&#39; =&gt; &#39;2020-03-04 11:00:00&#39;,
    &#39;last_pilot_id&#39; =&gt; 747,
]);

$flight = $flight-&gt;replicate([
    &#39;last_flown&#39;,
    &#39;last_pilot_id&#39;
]);
</code></pre><p><a name="query-scopes"></a></p><h2 id="query-scopes" tabindex="-1"><a class="header-anchor" href="#query-scopes" aria-hidden="true">#</a> Query Scopes</h2><p><a name="global-scopes"></a></p><h3 id="global-scopes" tabindex="-1"><a class="header-anchor" href="#global-scopes" aria-hidden="true">#</a> Global Scopes</h3><p>Global scopes allow you to add constraints to all queries for a given model. Laravel&#39;s own <a href="#soft-deleting">soft delete</a> functionality utilizes global scopes to only retrieve &quot;non-deleted&quot; models from the database. Writing your own global scopes can provide a convenient, easy way to make sure every query for a given model receives certain constraints.</p><p><a name="generating-scopes"></a></p><h4 id="generating-scopes" tabindex="-1"><a class="header-anchor" href="#generating-scopes" aria-hidden="true">#</a> Generating Scopes</h4><p>To generate a new global scope, you may invoke the <code>make:scope</code> Artisan command, which will place the generated scope in your application&#39;s <code>app/Models/Scopes</code> directory:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan make:scope AncientScope
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a name="writing-global-scopes"></a></p><h4 id="writing-global-scopes" tabindex="-1"><a class="header-anchor" href="#writing-global-scopes" aria-hidden="true">#</a> Writing Global Scopes</h4><p>Writing a global scope is simple. First, use the <code>make:scope</code> command to generate a class that implements the <code>Illuminate\\Database\\Eloquent\\Scope</code> interface. The <code>Scope</code> interface requires you to implement one method: <code>apply</code>. The <code>apply</code> method may add <code>where</code> constraints or other types of clauses to the query as needed:</p><pre><code>&lt;?php

namespace App\\Models\\Scopes;

use Illuminate\\Database\\Eloquent\\Builder;
use Illuminate\\Database\\Eloquent\\Model;
use Illuminate\\Database\\Eloquent\\Scope;

class AncientScope implements Scope
{
    /**
     * Apply the scope to a given Eloquent query builder.
     */
    public function apply(Builder $builder, Model $model): void
    {
        $builder-&gt;where(&#39;created_at&#39;, &#39;&lt;&#39;, now()-&gt;subYears(2000));
    }
}
</code></pre><blockquote><p><strong>Note</strong><br> If your global scope is adding columns to the select clause of the query, you should use the <code>addSelect</code> method instead of <code>select</code>. This will prevent the unintentional replacement of the query&#39;s existing select clause.</p></blockquote><p><a name="applying-global-scopes"></a></p><h4 id="applying-global-scopes" tabindex="-1"><a class="header-anchor" href="#applying-global-scopes" aria-hidden="true">#</a> Applying Global Scopes</h4><p>To assign a global scope to a model, you should override the model&#39;s <code>booted</code> method and invoke the model&#39;s <code>addGlobalScope</code> method. The <code>addGlobalScope</code> method accepts an instance of your scope as its only argument:</p><pre><code>&lt;?php

namespace App\\Models;

use App\\Models\\Scopes\\AncientScope;
use Illuminate\\Database\\Eloquent\\Model;

class User extends Model
{
    /**
     * The &quot;booted&quot; method of the model.
     */
    protected static function booted(): void
    {
        static::addGlobalScope(new AncientScope);
    }
}
</code></pre><p>After adding the scope in the example above to the <code>App\\Models\\User</code> model, a call to the <code>User::all()</code> method will execute the following SQL query:</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> <span class="token identifier"><span class="token punctuation">\`</span>users<span class="token punctuation">\`</span></span> <span class="token keyword">where</span> <span class="token identifier"><span class="token punctuation">\`</span>created_at<span class="token punctuation">\`</span></span> <span class="token operator">&lt;</span> <span class="token number">0021</span><span class="token operator">-</span><span class="token number">02</span><span class="token operator">-</span><span class="token number">18</span> <span class="token number">00</span>:<span class="token number">00</span>:<span class="token number">00</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a name="anonymous-global-scopes"></a></p><h4 id="anonymous-global-scopes" tabindex="-1"><a class="header-anchor" href="#anonymous-global-scopes" aria-hidden="true">#</a> Anonymous Global Scopes</h4><p>Eloquent also allows you to define global scopes using closures, which is particularly useful for simple scopes that do not warrant a separate class of their own. When defining a global scope using a closure, you should provide a scope name of your own choosing as the first argument to the <code>addGlobalScope</code> method:</p><pre><code>&lt;?php

namespace App\\Models;

use Illuminate\\Database\\Eloquent\\Builder;
use Illuminate\\Database\\Eloquent\\Model;

class User extends Model
{
    /**
     * The &quot;booted&quot; method of the model.
     */
    protected static function booted(): void
    {
        static::addGlobalScope(&#39;ancient&#39;, function (Builder $builder) {
            $builder-&gt;where(&#39;created_at&#39;, &#39;&lt;&#39;, now()-&gt;subYears(2000));
        });
    }
}
</code></pre><p><a name="removing-global-scopes"></a></p><h4 id="removing-global-scopes" tabindex="-1"><a class="header-anchor" href="#removing-global-scopes" aria-hidden="true">#</a> Removing Global Scopes</h4><p>If you would like to remove a global scope for a given query, you may use the <code>withoutGlobalScope</code> method. This method accepts the class name of the global scope as its only argument:</p><pre><code>User::withoutGlobalScope(AncientScope::class)-&gt;get();
</code></pre><p>Or, if you defined the global scope using a closure, you should pass the string name that you assigned to the global scope:</p><pre><code>User::withoutGlobalScope(&#39;ancient&#39;)-&gt;get();
</code></pre><p>If you would like to remove several or even all of the query&#39;s global scopes, you may use the <code>withoutGlobalScopes</code> method:</p><pre><code>// Remove all of the global scopes...
User::withoutGlobalScopes()-&gt;get();

// Remove some of the global scopes...
User::withoutGlobalScopes([
    FirstScope::class, SecondScope::class
])-&gt;get();
</code></pre><p><a name="local-scopes"></a></p><h3 id="local-scopes" tabindex="-1"><a class="header-anchor" href="#local-scopes" aria-hidden="true">#</a> Local Scopes</h3><p>Local scopes allow you to define common sets of query constraints that you may easily re-use throughout your application. For example, you may need to frequently retrieve all users that are considered &quot;popular&quot;. To define a scope, prefix an Eloquent model method with <code>scope</code>.</p><p>Scopes should always return the same query builder instance or <code>void</code>:</p><pre><code>&lt;?php

namespace App\\Models;

use Illuminate\\Database\\Eloquent\\Builder;
use Illuminate\\Database\\Eloquent\\Model;

class User extends Model
{
    /**
     * Scope a query to only include popular users.
     */
    public function scopePopular(Builder $query): void
    {
        $query-&gt;where(&#39;votes&#39;, &#39;&gt;&#39;, 100);
    }

    /**
     * Scope a query to only include active users.
     */
    public function scopeActive(Builder $query): void
    {
        $query-&gt;where(&#39;active&#39;, 1);
    }
}
</code></pre><p><a name="utilizing-a-local-scope"></a></p><h4 id="utilizing-a-local-scope" tabindex="-1"><a class="header-anchor" href="#utilizing-a-local-scope" aria-hidden="true">#</a> Utilizing A Local Scope</h4><p>Once the scope has been defined, you may call the scope methods when querying the model. However, you should not include the <code>scope</code> prefix when calling the method. You can even chain calls to various scopes:</p><pre><code>use App\\Models\\User;

$users = User::popular()-&gt;active()-&gt;orderBy(&#39;created_at&#39;)-&gt;get();
</code></pre><p>Combining multiple Eloquent model scopes via an <code>or</code> query operator may require the use of closures to achieve the correct <a href="./queries#logical-grouping">logical grouping</a>:</p><pre><code>$users = User::popular()-&gt;orWhere(function (Builder $query) {
    $query-&gt;active();
})-&gt;get();
</code></pre><p>However, since this can be cumbersome, Laravel provides a &quot;higher order&quot; <code>orWhere</code> method that allows you to fluently chain scopes together without the use of closures:</p><pre><code>$users = User::popular()-&gt;orWhere-&gt;active()-&gt;get();
</code></pre><p><a name="dynamic-scopes"></a></p><h4 id="dynamic-scopes" tabindex="-1"><a class="header-anchor" href="#dynamic-scopes" aria-hidden="true">#</a> Dynamic Scopes</h4><p>Sometimes you may wish to define a scope that accepts parameters. To get started, just add your additional parameters to your scope method&#39;s signature. Scope parameters should be defined after the <code>$query</code> parameter:</p><pre><code>&lt;?php

namespace App\\Models;

use Illuminate\\Database\\Eloquent\\Builder;
use Illuminate\\Database\\Eloquent\\Model;

class User extends Model
{
    /**
     * Scope a query to only include users of a given type.
     */
    public function scopeOfType(Builder $query, string $type): void
    {
        $query-&gt;where(&#39;type&#39;, $type);
    }
}
</code></pre><p>Once the expected arguments have been added to your scope method&#39;s signature, you may pass the arguments when calling the scope:</p><pre><code>$users = User::ofType(&#39;admin&#39;)-&gt;get();
</code></pre><p><a name="comparing-models"></a></p><h2 id="comparing-models" tabindex="-1"><a class="header-anchor" href="#comparing-models" aria-hidden="true">#</a> Comparing Models</h2><p>Sometimes you may need to determine if two models are the &quot;same&quot; or not. The <code>is</code> and <code>isNot</code> methods may be used to quickly verify two models have the same primary key, table, and database connection or not:</p><pre><code>if ($post-&gt;is($anotherPost)) {
    // ...
}

if ($post-&gt;isNot($anotherPost)) {
    // ...
}
</code></pre><p>The <code>is</code> and <code>isNot</code> methods are also available when using the <code>belongsTo</code>, <code>hasOne</code>, <code>morphTo</code>, and <code>morphOne</code> <a href="./eloquent-relationships">relationships</a>. This method is particularly helpful when you would like to compare a related model without issuing a query to retrieve that model:</p><pre><code>if ($post-&gt;author()-&gt;is($user)) {
    // ...
}
</code></pre><p><a name="events"></a></p><h2 id="events" tabindex="-1"><a class="header-anchor" href="#events" aria-hidden="true">#</a> Events</h2><blockquote><p><strong>Note</strong><br> Want to broadcast your Eloquent events directly to your client-side application? Check out Laravel&#39;s <a href="./broadcasting#model-broadcasting">model event broadcasting</a>.</p></blockquote><p>Eloquent models dispatch several events, allowing you to hook into the following moments in a model&#39;s lifecycle: <code>retrieved</code>, <code>creating</code>, <code>created</code>, <code>updating</code>, <code>updated</code>, <code>saving</code>, <code>saved</code>, <code>deleting</code>, <code>deleted</code>, <code>trashed</code>, <code>forceDeleting</code>, <code>forceDeleted</code>, <code>restoring</code>, <code>restored</code>, and <code>replicating</code>.</p><p>The <code>retrieved</code> event will dispatch when an existing model is retrieved from the database. When a new model is saved for the first time, the <code>creating</code> and <code>created</code> events will dispatch. The <code>updating</code> / <code>updated</code> events will dispatch when an existing model is modified and the <code>save</code> method is called. The <code>saving</code> / <code>saved</code> events will dispatch when a model is created or updated - even if the model&#39;s attributes have not been changed. Event names ending with <code>-ing</code> are dispatched before any changes to the model are persisted, while events ending with <code>-ed</code> are dispatched after the changes to the model are persisted.</p><p>To start listening to model events, define a <code>$dispatchesEvents</code> property on your Eloquent model. This property maps various points of the Eloquent model&#39;s lifecycle to your own <a href="./events">event classes</a>. Each model event class should expect to receive an instance of the affected model via its constructor:</p><pre><code>&lt;?php

namespace App\\Models;

use App\\Events\\UserDeleted;
use App\\Events\\UserSaved;
use Illuminate\\Foundation\\Auth\\User as Authenticatable;
use Illuminate\\Notifications\\Notifiable;

class User extends Authenticatable
{
    use Notifiable;

    /**
     * The event map for the model.
     *
     * @var array
     */
    protected $dispatchesEvents = [
        &#39;saved&#39; =&gt; UserSaved::class,
        &#39;deleted&#39; =&gt; UserDeleted::class,
    ];
}
</code></pre><p>After defining and mapping your Eloquent events, you may use <a href="./events#defining-listeners">event listeners</a> to handle the events.</p><blockquote><p><strong>Warning</strong><br> When issuing a mass update or delete query via Eloquent, the <code>saved</code>, <code>updated</code>, <code>deleting</code>, and <code>deleted</code> model events will not be dispatched for the affected models. This is because the models are never actually retrieved when performing mass updates or deletes.</p></blockquote><p><a name="events-using-closures"></a></p><h3 id="using-closures" tabindex="-1"><a class="header-anchor" href="#using-closures" aria-hidden="true">#</a> Using Closures</h3><p>Instead of using custom event classes, you may register closures that execute when various model events are dispatched. Typically, you should register these closures in the <code>booted</code> method of your model:</p><pre><code>&lt;?php

namespace App\\Models;

use Illuminate\\Database\\Eloquent\\Model;

class User extends Model
{
    /**
     * The &quot;booted&quot; method of the model.
     */
    protected static function booted(): void
    {
        static::created(function (User $user) {
            // ...
        });
    }
}
</code></pre><p>If needed, you may utilize <a href="./events#queuable-anonymous-event-listeners">queueable anonymous event listeners</a> when registering model events. This will instruct Laravel to execute the model event listener in the background using your application&#39;s <a href="./queues">queue</a>:</p><pre><code>use function Illuminate\\Events\\queueable;

static::created(queueable(function (User $user) {
    // ...
}));
</code></pre><p><a name="observers"></a></p><h3 id="observers" tabindex="-1"><a class="header-anchor" href="#observers" aria-hidden="true">#</a> Observers</h3><p><a name="defining-observers"></a></p><h4 id="defining-observers" tabindex="-1"><a class="header-anchor" href="#defining-observers" aria-hidden="true">#</a> Defining Observers</h4><p>If you are listening for many events on a given model, you may use observers to group all of your listeners into a single class. Observer classes have method names which reflect the Eloquent events you wish to listen for. Each of these methods receives the affected model as their only argument. The <code>make:observer</code> Artisan command is the easiest way to create a new observer class:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan make:observer UserObserver <span class="token parameter variable">--model</span><span class="token operator">=</span>User
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>This command will place the new observer in your <code>app/Observers</code> directory. If this directory does not exist, Artisan will create it for you. Your fresh observer will look like the following:</p><pre><code>&lt;?php

namespace App\\Observers;

use App\\Models\\User;

class UserObserver
{
    /**
     * Handle the User &quot;created&quot; event.
     */
    public function created(User $user): void
    {
        // ...
    }

    /**
     * Handle the User &quot;updated&quot; event.
     */
    public function updated(User $user): void
    {
        // ...
    }

    /**
     * Handle the User &quot;deleted&quot; event.
     */
    public function deleted(User $user): void
    {
        // ...
    }
    
    /**
     * Handle the User &quot;restored&quot; event.
     */
    public function restored(User $user): void
    {
        // ...
    }

    /**
     * Handle the User &quot;forceDeleted&quot; event.
     */
    public function forceDeleted(User $user): void
    {
        // ...
    }
}
</code></pre><p>To register an observer, you need to call the <code>observe</code> method on the model you wish to observe. You may register observers in the <code>boot</code> method of your application&#39;s <code>App\\Providers\\EventServiceProvider</code> service provider:</p><pre><code>use App\\Models\\User;
use App\\Observers\\UserObserver;

/**
 * Register any events for your application.
 */
public function boot(): void
{
    User::observe(UserObserver::class);
}
</code></pre><p>Alternatively, you may list your observers within an <code>$observers</code> property of your applications&#39; <code>App\\Providers\\EventServiceProvider</code> class:</p><pre><code>use App\\Models\\User;
use App\\Observers\\UserObserver;

/**
 * The model observers for your application.
 *
 * @var array
 */
protected $observers = [
    User::class =&gt; [UserObserver::class],
];
</code></pre><blockquote><p><strong>Note</strong><br> There are additional events an observer can listen to, such as <code>saving</code> and <code>retrieved</code>. These events are described within the <a href="#events">events</a> documentation.</p></blockquote><p><a name="observers-and-database-transactions"></a></p><h4 id="observers-database-transactions" tabindex="-1"><a class="header-anchor" href="#observers-database-transactions" aria-hidden="true">#</a> Observers &amp; Database Transactions</h4><p>When models are being created within a database transaction, you may want to instruct an observer to only execute its event handlers after the database transaction is committed. You may accomplish this by implementing the <code>ShouldHandleEventsAfterCommit</code> interface on your observer. If a database transaction is not in progress, the event handlers will execute immediately:</p><pre><code>&lt;?php

namespace App\\Observers;

use App\\Models\\User;
use Illuminate\\Contracts\\Events\\ShouldHandleEventsAfterCommit;

class UserObserver implements ShouldHandleEventsAfterCommit
{
    /**
     * Handle the User &quot;created&quot; event.
     */
    public function created(User $user): void
    {
        // ...
    }
}
</code></pre><p><a name="muting-events"></a></p><h3 id="muting-events" tabindex="-1"><a class="header-anchor" href="#muting-events" aria-hidden="true">#</a> Muting Events</h3><p>You may occasionally need to temporarily &quot;mute&quot; all events fired by a model. You may achieve this using the <code>withoutEvents</code> method. The <code>withoutEvents</code> method accepts a closure as its only argument. Any code executed within this closure will not dispatch model events, and any value returned by the closure will be returned by the <code>withoutEvents</code> method:</p><pre><code>use App\\Models\\User;

$user = User::withoutEvents(function () {
    User::findOrFail(1)-&gt;delete();

    return User::find(2);
});
</code></pre><p><a name="saving-a-single-model-without-events"></a></p><h4 id="saving-a-single-model-without-events" tabindex="-1"><a class="header-anchor" href="#saving-a-single-model-without-events" aria-hidden="true">#</a> Saving A Single Model Without Events</h4><p>Sometimes you may wish to &quot;save&quot; a given model without dispatching any events. You may accomplish this using the <code>saveQuietly</code> method:</p><pre><code>$user = User::findOrFail(1);

$user-&gt;name = &#39;Victoria Faith&#39;;

$user-&gt;saveQuietly();
</code></pre><p>You may also &quot;update&quot;, &quot;delete&quot;, &quot;soft delete&quot;, &quot;restore&quot;, and &quot;replicate&quot; a given model without dispatching any events:</p><pre><code>$user-&gt;deleteQuietly();
$user-&gt;forceDeleteQuietly();
$user-&gt;restoreQuietly();
</code></pre>`,270);function k(w,q){const t=i("ExternalLinkIcon");return l(),r("div",null,[c,a("p",null,[e("If you're new to Laravel, feel free to jump into the "),a("a",p,[e("Laravel Bootcamp"),s(t)]),e(". The Laravel Bootcamp will walk you through building your first Laravel application using Eloquent. It's a great way to get a tour of everything that Laravel and Eloquent have to offer.")]),u,a("p",null,[e("Internally, the "),h,e(" method uses PHP "),a("a",m,[e("generators"),s(t)]),e(" to implement this functionality:")]),g,a("p",null,[e("Although the "),f,e(" method uses far less memory than a regular query (by only holding a single Eloquent model in memory at a time), it will still eventually run out of memory. This is "),a("a",y,[e("due to PHP's PDO driver internally caching all raw query results in its buffer"),s(t)]),e(". If you're dealing with a very large number of Eloquent records, consider using "),b,e(" instead.")]),v])}const I=o(d,[["render",k],["__file","eloquent.html.vue"]]);export{I as default};
