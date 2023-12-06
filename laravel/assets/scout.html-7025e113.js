import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{r as i,o as r,c as l,b as n,d as e,e as s,a as t}from"./app-06635a3b.js";const c={},d=t('<h1 id="laravel-scout" tabindex="-1"><a class="header-anchor" href="#laravel-scout" aria-hidden="true">#</a> Laravel Scout</h1><ul><li><a href="#introduction">Introduction</a></li><li><a href="#installation">Installation</a><ul><li><a href="#driver-prerequisites">Driver Prerequisites</a></li><li><a href="#queueing">Queueing</a></li></ul></li><li><a href="#configuration">Configuration</a><ul><li><a href="#configuring-model-indexes">Configuring Model Indexes</a></li><li><a href="#configuring-searchable-data">Configuring Searchable Data</a></li><li><a href="#configuring-the-model-id">Configuring The Model ID</a></li><li><a href="#configuring-search-engines-per-model">Configuring Search Engines Per Model</a></li><li><a href="#identifying-users">Identifying Users</a></li></ul></li><li><a href="#database-and-collection-engines">Database / Collection Engines</a><ul><li><a href="#database-engine">Database Engine</a></li><li><a href="#collection-engine">Collection Engine</a></li></ul></li><li><a href="#indexing">Indexing</a><ul><li><a href="#batch-import">Batch Import</a></li><li><a href="#adding-records">Adding Records</a></li><li><a href="#updating-records">Updating Records</a></li><li><a href="#removing-records">Removing Records</a></li><li><a href="#pausing-indexing">Pausing Indexing</a></li><li><a href="#conditionally-searchable-model-instances">Conditionally Searchable Model Instances</a></li></ul></li><li><a href="#searching">Searching</a><ul><li><a href="#where-clauses">Where Clauses</a></li><li><a href="#pagination">Pagination</a></li><li><a href="#soft-deleting">Soft Deleting</a></li><li><a href="#customizing-engine-searches">Customizing Engine Searches</a></li></ul></li><li><a href="#custom-engines">Custom Engines</a></li></ul><p><a name="introduction"></a></p><h2 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h2>',4),u={href:"https://github.com/laravel/scout",target:"_blank",rel:"noopener noreferrer"},p=n("a",{href:"./eloquent"},"Eloquent models",-1),h={href:"https://www.algolia.com/",target:"_blank",rel:"noopener noreferrer"},g={href:"https://www.meilisearch.com",target:"_blank",rel:"noopener noreferrer"},m=n("code",null,"database",-1),b=t(`<p><a name="installation"></a></p><h2 id="installation" tabindex="-1"><a class="header-anchor" href="#installation" aria-hidden="true">#</a> Installation</h2><p>First, install Scout via the Composer package manager:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">composer</span> require laravel/scout
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>After installing Scout, you should publish the Scout configuration file using the <code>vendor:publish</code> Artisan command. This command will publish the <code>scout.php</code> configuration file to your application&#39;s <code>config</code> directory:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan vendor:publish <span class="token parameter variable">--provider</span><span class="token operator">=</span><span class="token string">&quot;Laravel\\Scout\\ScoutServiceProvider&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Finally, add the <code>Laravel\\Scout\\Searchable</code> trait to the model you would like to make searchable. This trait will register a model observer that will automatically keep the model in sync with your search driver:</p><pre><code>&lt;?php

namespace App\\Models;

use Illuminate\\Database\\Eloquent\\Model;
use Laravel\\Scout\\Searchable;

class Post extends Model
{
    use Searchable;
}
</code></pre><p><a name="driver-prerequisites"></a></p><h3 id="driver-prerequisites" tabindex="-1"><a class="header-anchor" href="#driver-prerequisites" aria-hidden="true">#</a> Driver Prerequisites</h3><p><a name="algolia"></a></p><h4 id="algolia" tabindex="-1"><a class="header-anchor" href="#algolia" aria-hidden="true">#</a> Algolia</h4><p>When using the Algolia driver, you should configure your Algolia <code>id</code> and <code>secret</code> credentials in your <code>config/scout.php</code> configuration file. Once your credentials have been configured, you will also need to install the Algolia PHP SDK via the Composer package manager:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">composer</span> require algolia/algoliasearch-client-php
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a name="meilisearch"></a></p><h4 id="meilisearch" tabindex="-1"><a class="header-anchor" href="#meilisearch" aria-hidden="true">#</a> Meilisearch</h4>`,16),y={href:"https://www.meilisearch.com",target:"_blank",rel:"noopener noreferrer"},f=n("a",{href:"./sail#meilisearch"},"Laravel Sail",-1),v=t(`<p>When using the Meilisearch driver you will need to install the Meilisearch PHP SDK via the Composer package manager:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">composer</span> require meilisearch/meilisearch-php http-interop/http-factory-guzzle
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Then, set the <code>SCOUT_DRIVER</code> environment variable as well as your Meilisearch <code>host</code> and <code>key</code> credentials within your application&#39;s <code>.env</code> file:</p><div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code><span class="token key attr-name">SCOUT_DRIVER</span><span class="token punctuation">=</span><span class="token value attr-value">meilisearch</span>
<span class="token key attr-name">MEILISEARCH_HOST</span><span class="token punctuation">=</span><span class="token value attr-value">http://127.0.0.1:7700</span>
<span class="token key attr-name">MEILISEARCH_KEY</span><span class="token punctuation">=</span><span class="token value attr-value">masterKey</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),k={href:"https://docs.meilisearch.com/learn/getting_started/quick_start.html",target:"_blank",rel:"noopener noreferrer"},q=n("code",null,"meilisearch/meilisearch-php",-1),w={href:"https://github.com/meilisearch/meilisearch-php#-compatibility-with-meilisearch",target:"_blank",rel:"noopener noreferrer"},x=n("strong",null,"Warning",-1),S=n("br",null,null,-1),_={href:"https://github.com/meilisearch/Meilisearch/releases",target:"_blank",rel:"noopener noreferrer"},I=t(`<p><a name="queueing"></a></p><h3 id="queueing" tabindex="-1"><a class="header-anchor" href="#queueing" aria-hidden="true">#</a> Queueing</h3><p>While not strictly required to use Scout, you should strongly consider configuring a <a href="./queues">queue driver</a> before using the library. Running a queue worker will allow Scout to queue all operations that sync your model information to your search indexes, providing much better response times for your application&#39;s web interface.</p><p>Once you have configured a queue driver, set the value of the <code>queue</code> option in your <code>config/scout.php</code> configuration file to <code>true</code>:</p><pre><code>&#39;queue&#39; =&gt; true,
</code></pre><p>Even when the <code>queue</code> option is set to <code>false</code>, it&#39;s important to remember that some Scout drivers like Algolia and Meilisearch always index records asynchronously. Meaning, even though the index operation has completed within your Laravel application, the search engine itself may not reflect the new and updated records immediately.</p><p>To specify the connection and queue that your Scout jobs utilize, you may define the <code>queue</code> configuration option as an array:</p><pre><code>&#39;queue&#39; =&gt; [
    &#39;connection&#39; =&gt; &#39;redis&#39;,
    &#39;queue&#39; =&gt; &#39;scout&#39;
],
</code></pre><p><a name="configuration"></a></p><h2 id="configuration" tabindex="-1"><a class="header-anchor" href="#configuration" aria-hidden="true">#</a> Configuration</h2><p><a name="configuring-model-indexes"></a></p><h3 id="configuring-model-indexes" tabindex="-1"><a class="header-anchor" href="#configuring-model-indexes" aria-hidden="true">#</a> Configuring Model Indexes</h3><p>Each Eloquent model is synced with a given search &quot;index&quot;, which contains all of the searchable records for that model. In other words, you can think of each index like a MySQL table. By default, each model will be persisted to an index matching the model&#39;s typical &quot;table&quot; name. Typically, this is the plural form of the model name; however, you are free to customize the model&#39;s index by overriding the <code>searchableAs</code> method on the model:</p><pre><code>&lt;?php

namespace App\\Models;

use Illuminate\\Database\\Eloquent\\Model;
use Laravel\\Scout\\Searchable;

class Post extends Model
{
    use Searchable;

    /**
     * Get the name of the index associated with the model.
     */
    public function searchableAs(): string
    {
        return &#39;posts_index&#39;;
    }
}
</code></pre><p><a name="configuring-searchable-data"></a></p><h3 id="configuring-searchable-data" tabindex="-1"><a class="header-anchor" href="#configuring-searchable-data" aria-hidden="true">#</a> Configuring Searchable Data</h3><p>By default, the entire <code>toArray</code> form of a given model will be persisted to its search index. If you would like to customize the data that is synchronized to the search index, you may override the <code>toSearchableArray</code> method on the model:</p><pre><code>&lt;?php

namespace App\\Models;

use Illuminate\\Database\\Eloquent\\Model;
use Laravel\\Scout\\Searchable;

class Post extends Model
{
    use Searchable;

    /**
     * Get the indexable data array for the model.
     *
     * @return array&lt;string, mixed&gt;
     */
    public function toSearchableArray(): array
    {
        $array = $this-&gt;toArray();

        // Customize the data array...

        return $array;
    }
}
</code></pre><p>Some search engines such as Meilisearch will only perform filter operations (<code>&gt;</code>, <code>&lt;</code>, etc.) on data of the correct type. So, when using these search engines and customizing your searchable data, you should ensure that numeric values are cast to their correct type:</p><pre><code>public function toSearchableArray()
{
    return [
        &#39;id&#39; =&gt; (int) $this-&gt;id,
        &#39;name&#39; =&gt; $this-&gt;name,
        &#39;price&#39; =&gt; (float) $this-&gt;price,
    ];
}
</code></pre><p><a name="configuring-filterable-data-for-meilisearch"></a></p><h4 id="configuring-filterable-data-index-settings-meilisearch" tabindex="-1"><a class="header-anchor" href="#configuring-filterable-data-index-settings-meilisearch" aria-hidden="true">#</a> Configuring Filterable Data &amp; Index Settings (Meilisearch)</h4>`,22),E={href:"https://docs.meilisearch.com/reference/api/settings.html",target:"_blank",rel:"noopener noreferrer"},M=t(`<p>Filterable attributes are any attributes you plan to filter on when invoking Scout&#39;s <code>where</code> method, while sortable attributes are any attributes you plan to sort by when invoking Scout&#39;s <code>orderBy</code> method. To define your index settings, adjust the <code>index-settings</code> portion of your <code>meilisearch</code> configuration entry in your application&#39;s <code>scout</code> configuration file:</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">App<span class="token punctuation">\\</span>Models<span class="token punctuation">\\</span>User</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">App<span class="token punctuation">\\</span>Models<span class="token punctuation">\\</span>Flight</span><span class="token punctuation">;</span>

<span class="token string single-quoted-string">&#39;meilisearch&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>
    <span class="token string single-quoted-string">&#39;host&#39;</span> <span class="token operator">=&gt;</span> <span class="token function">env</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;MEILISEARCH_HOST&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;http://localhost:7700&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;key&#39;</span> <span class="token operator">=&gt;</span> <span class="token function">env</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;MEILISEARCH_KEY&#39;</span><span class="token punctuation">,</span> <span class="token constant">null</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;index-settings&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>
        <span class="token class-name static-context">User</span><span class="token operator">::</span><span class="token keyword">class</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>
            <span class="token string single-quoted-string">&#39;filterableAttributes&#39;</span><span class="token operator">=&gt;</span> <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;id&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;name&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;email&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token string single-quoted-string">&#39;sortableAttributes&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;created_at&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token comment">// Other settings fields...</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token class-name static-context">Flight</span><span class="token operator">::</span><span class="token keyword">class</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>
            <span class="token string single-quoted-string">&#39;filterableAttributes&#39;</span><span class="token operator">=&gt;</span> <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;id&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;destination&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token string single-quoted-string">&#39;sortableAttributes&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;updated_at&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>If the model underlying a given index is soft deletable and is included in the <code>index-settings</code> array, Scout will automatically include support for filtering on soft deleted models on that index. If you have no other filterable or sortable attributes to define for a soft deletable model index, you may simply add an empty entry to the <code>index-settings</code> array for that model:</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token string single-quoted-string">&#39;index-settings&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>
    <span class="token class-name static-context">Flight</span><span class="token operator">::</span><span class="token keyword">class</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token punctuation">]</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>After configuring your application&#39;s index settings, you must invoke the <code>scout:sync-index-settings</code> Artisan command. This command will inform Meilisearch of your currently configured index settings. For convenience, you may wish to make this command part of your deployment process:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan scout:sync-index-settings
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a name="configuring-the-model-id"></a></p><h3 id="configuring-the-model-id" tabindex="-1"><a class="header-anchor" href="#configuring-the-model-id" aria-hidden="true">#</a> Configuring The Model ID</h3><p>By default, Scout will use the primary key of the model as the model&#39;s unique ID / key that is stored in the search index. If you need to customize this behavior, you may override the <code>getScoutKey</code> and the <code>getScoutKeyName</code> methods on the model:</p><pre><code>&lt;?php

namespace App\\Models;

use Illuminate\\Database\\Eloquent\\Model;
use Laravel\\Scout\\Searchable;

class User extends Model
{
    use Searchable;

    /**
     * Get the value used to index the model.
     */
    public function getScoutKey(): mixed
    {
        return $this-&gt;email;
    }

    /**
     * Get the key name used to index the model.
     */
    public function getScoutKeyName(): mixed
    {
        return &#39;email&#39;;
    }
}
</code></pre><p><a name="configuring-search-engines-per-model"></a></p><h3 id="configuring-search-engines-per-model" tabindex="-1"><a class="header-anchor" href="#configuring-search-engines-per-model" aria-hidden="true">#</a> Configuring Search Engines Per Model</h3><p>When searching, Scout will typically use the default search engine specified in your application&#39;s <code>scout</code> configuration file. However, the search engine for a particular model can be changed by overriding the <code>searchableUsing</code> method on the model:</p><pre><code>&lt;?php

namespace App\\Models;

use Illuminate\\Database\\Eloquent\\Model;
use Laravel\\Scout\\Engines\\Engine;
use Laravel\\Scout\\EngineManager;
use Laravel\\Scout\\Searchable;

class User extends Model
{
    use Searchable;

    /**
     * Get the engine used to index the model.
     */
    public function searchableUsing(): Engine
    {
        return app(EngineManager::class)-&gt;engine(&#39;meilisearch&#39;);
    }
}
</code></pre><p><a name="identifying-users"></a></p><h3 id="identifying-users" tabindex="-1"><a class="header-anchor" href="#identifying-users" aria-hidden="true">#</a> Identifying Users</h3>`,16),A={href:"https://algolia.com",target:"_blank",rel:"noopener noreferrer"},T=n("code",null,"SCOUT_IDENTIFY",-1),$=n("code",null,"true",-1),O=n("code",null,".env",-1),C=t(`<div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code><span class="token key attr-name">SCOUT_IDENTIFY</span><span class="token punctuation">=</span><span class="token value attr-value">true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Enabling this feature will also pass the request&#39;s IP address and your authenticated user&#39;s primary identifier to Algolia so this data is associated with any search request that is made by the user.</p><p><a name="database-and-collection-engines"></a></p><h2 id="database-collection-engines" tabindex="-1"><a class="header-anchor" href="#database-collection-engines" aria-hidden="true">#</a> Database / Collection Engines</h2><p><a name="database-engine"></a></p><h3 id="database-engine" tabindex="-1"><a class="header-anchor" href="#database-engine" aria-hidden="true">#</a> Database Engine</h3><blockquote><p><strong>Warning</strong><br> The database engine currently supports MySQL and PostgreSQL.</p></blockquote><p>If your application interacts with small to medium sized databases or has a light workload, you may find it more convenient to get started with Scout&#39;s &quot;database&quot; engine. The database engine will use &quot;where like&quot; clauses and full text indexes when filtering results from your existing database to determine the applicable search results for your query.</p><p>To use the database engine, you may simply set the value of the <code>SCOUT_DRIVER</code> environment variable to <code>database</code>, or specify the <code>database</code> driver directly in your application&#39;s <code>scout</code> configuration file:</p><div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code><span class="token key attr-name">SCOUT_DRIVER</span><span class="token punctuation">=</span><span class="token value attr-value">database</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Once you have specified the database engine as your preferred driver, you must <a href="#configuring-searchable-data">configure your searchable data</a>. Then, you may start <a href="#searching">executing search queries</a> against your models. Search engine indexing, such as the indexing needed to seed Algolia or Meilisearch indexes, is unnecessary when using the database engine.</p><h4 id="customizing-database-searching-strategies" tabindex="-1"><a class="header-anchor" href="#customizing-database-searching-strategies" aria-hidden="true">#</a> Customizing Database Searching Strategies</h4><p>By default, the database engine will execute a &quot;where like&quot; query against every model attribute that you have <a href="#configuring-searchable-data">configured as searchable</a>. However, in some situations, this may result in poor performance. Therefore, the database engine&#39;s search strategy can be configured so that some specified columns utilize full text search queries or only use &quot;where like&quot; constraints to search the prefixes of strings (<code>example%</code>) instead of searching within the entire string (<code>%example%</code>).</p><p>To define this behavior, you may assign PHP attributes to your model&#39;s <code>toSearchableArray</code> method. Any columns that are not assigned additional search strategy behavior will continue to use the default &quot;where like&quot; strategy:</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">Laravel<span class="token punctuation">\\</span>Scout<span class="token punctuation">\\</span>Attributes<span class="token punctuation">\\</span>SearchUsingFullText</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Laravel<span class="token punctuation">\\</span>Scout<span class="token punctuation">\\</span>Attributes<span class="token punctuation">\\</span>SearchUsingPrefix</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * Get the indexable data array for the model.
 *
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token keyword">array</span></span>&lt;string, mixed&gt;
 */</span>
<span class="token attribute"><span class="token delimiter punctuation">#[</span><span class="token attribute-content"><span class="token attribute-class-name class-name">SearchUsingPrefix</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;id&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;email&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span></span><span class="token delimiter punctuation">]</span></span>
<span class="token attribute"><span class="token delimiter punctuation">#[</span><span class="token attribute-content"><span class="token attribute-class-name class-name">SearchUsingFullText</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;bio&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span></span><span class="token delimiter punctuation">]</span></span>
<span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">toSearchableArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">array</span>
<span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">[</span>
        <span class="token string single-quoted-string">&#39;id&#39;</span> <span class="token operator">=&gt;</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">id</span><span class="token punctuation">,</span>
        <span class="token string single-quoted-string">&#39;name&#39;</span> <span class="token operator">=&gt;</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">name</span><span class="token punctuation">,</span>
        <span class="token string single-quoted-string">&#39;email&#39;</span> <span class="token operator">=&gt;</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">email</span><span class="token punctuation">,</span>
        <span class="token string single-quoted-string">&#39;bio&#39;</span> <span class="token operator">=&gt;</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">bio</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>Warning</strong><br> Before specifying that a column should use full text query constraints, ensure that the column has been assigned a <a href="./migrations#available-index-types">full text index</a>.</p></blockquote><p><a name="collection-engine"></a></p><h3 id="collection-engine" tabindex="-1"><a class="header-anchor" href="#collection-engine" aria-hidden="true">#</a> Collection Engine</h3><p>While you are free to use the Algolia or Meilisearch search engines during local development, you may find it more convenient to get started with the &quot;collection&quot; engine. The collection engine will use &quot;where&quot; clauses and collection filtering on results from your existing database to determine the applicable search results for your query. When using this engine, it is not necessary to &quot;index&quot; your searchable models, as they will simply be retrieved from your local database.</p><p>To use the collection engine, you may simply set the value of the <code>SCOUT_DRIVER</code> environment variable to <code>collection</code>, or specify the <code>collection</code> driver directly in your application&#39;s <code>scout</code> configuration file:</p><div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code><span class="token key attr-name">SCOUT_DRIVER</span><span class="token punctuation">=</span><span class="token value attr-value">collection</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Once you have specified the collection driver as your preferred driver, you may start <a href="#searching">executing search queries</a> against your models. Search engine indexing, such as the indexing needed to seed Algolia or Meilisearch indexes, is unnecessary when using the collection engine.</p><h4 id="differences-from-database-engine" tabindex="-1"><a class="header-anchor" href="#differences-from-database-engine" aria-hidden="true">#</a> Differences From Database Engine</h4><p>On first glance, the &quot;database&quot; and &quot;collections&quot; engines are fairly similar. They both interact directly with your database to retrieve search results. However, the collection engine does not utilize full text indexes or <code>LIKE</code> clauses to find matching records. Instead, it pulls all possible records and uses Laravel&#39;s <code>Str::is</code> helper to determine if the search string exists within the model attribute values.</p><p>The collection engine is the most portable search engine as it works across all relational databases supported by Laravel (including SQLite and SQL Server); however, it is less efficient than Scout&#39;s database engine.</p><p><a name="indexing"></a></p><h2 id="indexing" tabindex="-1"><a class="header-anchor" href="#indexing" aria-hidden="true">#</a> Indexing</h2><p><a name="batch-import"></a></p><h3 id="batch-import" tabindex="-1"><a class="header-anchor" href="#batch-import" aria-hidden="true">#</a> Batch Import</h3><p>If you are installing Scout into an existing project, you may already have database records you need to import into your indexes. Scout provides a <code>scout:import</code> Artisan command that you may use to import all of your existing records into your search indexes:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan scout:import <span class="token string">&quot;App\\Models\\Post&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>The <code>flush</code> command may be used to remove all of a model&#39;s records from your search indexes:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan scout:flush <span class="token string">&quot;App\\Models\\Post&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a name="modifying-the-import-query"></a></p><h4 id="modifying-the-import-query" tabindex="-1"><a class="header-anchor" href="#modifying-the-import-query" aria-hidden="true">#</a> Modifying The Import Query</h4><p>If you would like to modify the query that is used to retrieve all of your models for batch importing, you may define a <code>makeAllSearchableUsing</code> method on your model. This is a great place to add any eager relationship loading that may be necessary before importing your models:</p><pre><code>use Illuminate\\Database\\Eloquent\\Builder;

/**
 * Modify the query used to retrieve models when making all of the models searchable.
 */
protected function makeAllSearchableUsing(Builder $query): Builder
{
    return $query-&gt;with(&#39;author&#39;);
}
</code></pre><blockquote><p><strong>Warning</strong><br> The <code>makeAllSearchableUsing</code> method may not be applicable when using a queue to batch import models. Relationships are <a href="./queues#handling-relationships">not restored</a> when model collections are processed by jobs.</p></blockquote><p><a name="adding-records"></a></p><h3 id="adding-records" tabindex="-1"><a class="header-anchor" href="#adding-records" aria-hidden="true">#</a> Adding Records</h3><p>Once you have added the <code>Laravel\\Scout\\Searchable</code> trait to a model, all you need to do is <code>save</code> or <code>create</code> a model instance and it will automatically be added to your search index. If you have configured Scout to <a href="#queueing">use queues</a> this operation will be performed in the background by your queue worker:</p><pre><code>use App\\Models\\Order;

$order = new Order;

// ...

$order-&gt;save();
</code></pre><p><a name="adding-records-via-query"></a></p><h4 id="adding-records-via-query" tabindex="-1"><a class="header-anchor" href="#adding-records-via-query" aria-hidden="true">#</a> Adding Records Via Query</h4><p>If you would like to add a collection of models to your search index via an Eloquent query, you may chain the <code>searchable</code> method onto the Eloquent query. The <code>searchable</code> method will <a href="./eloquent#chunking-results">chunk the results</a> of the query and add the records to your search index. Again, if you have configured Scout to use queues, all of the chunks will be imported in the background by your queue workers:</p><pre><code>use App\\Models\\Order;

Order::where(&#39;price&#39;, &#39;&gt;&#39;, 100)-&gt;searchable();
</code></pre><p>You may also call the <code>searchable</code> method on an Eloquent relationship instance:</p><pre><code>$user-&gt;orders()-&gt;searchable();
</code></pre><p>Or, if you already have a collection of Eloquent models in memory, you may call the <code>searchable</code> method on the collection instance to add the model instances to their corresponding index:</p><pre><code>$orders-&gt;searchable();
</code></pre><blockquote><p><strong>Note</strong><br> The <code>searchable</code> method can be considered an &quot;upsert&quot; operation. In other words, if the model record is already in your index, it will be updated. If it does not exist in the search index, it will be added to the index.</p></blockquote><p><a name="updating-records"></a></p><h3 id="updating-records" tabindex="-1"><a class="header-anchor" href="#updating-records" aria-hidden="true">#</a> Updating Records</h3><p>To update a searchable model, you only need to update the model instance&#39;s properties and <code>save</code> the model to your database. Scout will automatically persist the changes to your search index:</p><pre><code>use App\\Models\\Order;

$order = Order::find(1);

// Update the order...

$order-&gt;save();
</code></pre><p>You may also invoke the <code>searchable</code> method on an Eloquent query instance to update a collection of models. If the models do not exist in your search index, they will be created:</p><pre><code>Order::where(&#39;price&#39;, &#39;&gt;&#39;, 100)-&gt;searchable();
</code></pre><p>If you would like to update the search index records for all of the models in a relationship, you may invoke the <code>searchable</code> on the relationship instance:</p><pre><code>$user-&gt;orders()-&gt;searchable();
</code></pre><p>Or, if you already have a collection of Eloquent models in memory, you may call the <code>searchable</code> method on the collection instance to update the model instances in their corresponding index:</p><pre><code>$orders-&gt;searchable();
</code></pre><p><a name="modifying-records-before-importing"></a></p><h4 id="modifying-records-before-importing" tabindex="-1"><a class="header-anchor" href="#modifying-records-before-importing" aria-hidden="true">#</a> Modifying Records Before Importing</h4><p>Sometimes you may need to prepare the collection of models before they are made searchable. For instance, you may want to eager load a relationship so that the relationship data can be efficiently added to your search index. To accomplish this, define a <code>makeSearchableUsing</code> method on the corresponding model:</p><pre><code>use Illuminate\\Database\\Eloquent\\Collection;

/**
 * Modify the collection of models being made searchable.
 */
public function makeSearchableUsing(Collection $models): Collection
{
    return $models-&gt;load(&#39;author&#39;);
}
</code></pre><p><a name="removing-records"></a></p><h3 id="removing-records" tabindex="-1"><a class="header-anchor" href="#removing-records" aria-hidden="true">#</a> Removing Records</h3><p>To remove a record from your index you may simply <code>delete</code> the model from the database. This may be done even if you are using <a href="./eloquent#soft-deleting">soft deleted</a> models:</p><pre><code>use App\\Models\\Order;

$order = Order::find(1);

$order-&gt;delete();
</code></pre><p>If you do not want to retrieve the model before deleting the record, you may use the <code>unsearchable</code> method on an Eloquent query instance:</p><pre><code>Order::where(&#39;price&#39;, &#39;&gt;&#39;, 100)-&gt;unsearchable();
</code></pre><p>If you would like to remove the search index records for all of the models in a relationship, you may invoke the <code>unsearchable</code> on the relationship instance:</p><pre><code>$user-&gt;orders()-&gt;unsearchable();
</code></pre><p>Or, if you already have a collection of Eloquent models in memory, you may call the <code>unsearchable</code> method on the collection instance to remove the model instances from their corresponding index:</p><pre><code>$orders-&gt;unsearchable();
</code></pre><p><a name="pausing-indexing"></a></p><h3 id="pausing-indexing" tabindex="-1"><a class="header-anchor" href="#pausing-indexing" aria-hidden="true">#</a> Pausing Indexing</h3><p>Sometimes you may need to perform a batch of Eloquent operations on a model without syncing the model data to your search index. You may do this using the <code>withoutSyncingToSearch</code> method. This method accepts a single closure which will be immediately executed. Any model operations that occur within the closure will not be synced to the model&#39;s index:</p><pre><code>use App\\Models\\Order;

Order::withoutSyncingToSearch(function () {
    // Perform model actions...
});
</code></pre><p><a name="conditionally-searchable-model-instances"></a></p><h3 id="conditionally-searchable-model-instances" tabindex="-1"><a class="header-anchor" href="#conditionally-searchable-model-instances" aria-hidden="true">#</a> Conditionally Searchable Model Instances</h3><p>Sometimes you may need to only make a model searchable under certain conditions. For example, imagine you have <code>App\\Models\\Post</code> model that may be in one of two states: &quot;draft&quot; and &quot;published&quot;. You may only want to allow &quot;published&quot; posts to be searchable. To accomplish this, you may define a <code>shouldBeSearchable</code> method on your model:</p><pre><code>/**
 * Determine if the model should be searchable.
 */
public function shouldBeSearchable(): bool
{
    return $this-&gt;isPublished();
}
</code></pre><p>The <code>shouldBeSearchable</code> method is only applied when manipulating models through the <code>save</code> and <code>create</code> methods, queries, or relationships. Directly making models or collections searchable using the <code>searchable</code> method will override the result of the <code>shouldBeSearchable</code> method.</p><blockquote><p><strong>Warning</strong><br> The <code>shouldBeSearchable</code> method is not applicable when using Scout&#39;s &quot;database&quot; engine, as all searchable data is always stored in the database. To achieve similar behavior when using the database engine, you should use <a href="#where-clauses">where clauses</a> instead.</p></blockquote><p><a name="searching"></a></p><h2 id="searching" tabindex="-1"><a class="header-anchor" href="#searching" aria-hidden="true">#</a> Searching</h2><p>You may begin searching a model using the <code>search</code> method. The search method accepts a single string that will be used to search your models. You should then chain the <code>get</code> method onto the search query to retrieve the Eloquent models that match the given search query:</p><pre><code>use App\\Models\\Order;

$orders = Order::search(&#39;Star Trek&#39;)-&gt;get();
</code></pre><p>Since Scout searches return a collection of Eloquent models, you may even return the results directly from a route or controller and they will automatically be converted to JSON:</p><pre><code>use App\\Models\\Order;
use Illuminate\\Http\\Request;

Route::get(&#39;/search&#39;, function (Request $request) {
    return Order::search($request-&gt;search)-&gt;get();
});
</code></pre><p>If you would like to get the raw search results before they are converted to Eloquent models, you may use the <code>raw</code> method:</p><pre><code>$orders = Order::search(&#39;Star Trek&#39;)-&gt;raw();
</code></pre><p><a name="custom-indexes"></a></p><h4 id="custom-indexes" tabindex="-1"><a class="header-anchor" href="#custom-indexes" aria-hidden="true">#</a> Custom Indexes</h4><p>Search queries will typically be performed on the index specified by the model&#39;s <a href="#configuring-model-indexes"><code>searchableAs</code></a> method. However, you may use the <code>within</code> method to specify a custom index that should be searched instead:</p><pre><code>$orders = Order::search(&#39;Star Trek&#39;)
    -&gt;within(&#39;tv_shows_popularity_desc&#39;)
    -&gt;get();
</code></pre><p><a name="where-clauses"></a></p><h3 id="where-clauses" tabindex="-1"><a class="header-anchor" href="#where-clauses" aria-hidden="true">#</a> Where Clauses</h3><p>Scout allows you to add simple &quot;where&quot; clauses to your search queries. Currently, these clauses only support basic numeric equality checks and are primarily useful for scoping search queries by an owner ID:</p><pre><code>use App\\Models\\Order;

$orders = Order::search(&#39;Star Trek&#39;)-&gt;where(&#39;user_id&#39;, 1)-&gt;get();
</code></pre><p>In addition, the <code>whereIn</code> method may be used to verify that a given column&#39;s value is contained within the given array:</p><pre><code>$orders = Order::search(&#39;Star Trek&#39;)-&gt;whereIn(
    &#39;status&#39;, [&#39;open&#39;, &#39;paid&#39;]
)-&gt;get();
</code></pre><p>The <code>whereNotIn</code> method verifies that the given column&#39;s value is not contained in the given array:</p><pre><code>$orders = Order::search(&#39;Star Trek&#39;)-&gt;whereNotIn(
    &#39;status&#39;, [&#39;closed&#39;]
)-&gt;get();
</code></pre><p>Since a search index is not a relational database, more advanced &quot;where&quot; clauses are not currently supported.</p><blockquote><p><strong>Warning</strong> If your application is using Meilisearch, you must configure your application&#39;s <a href="#configuring-filterable-data-for-meilisearch">filterable attributes</a> before utilizing Scout&#39;s &quot;where&quot; clauses.</p></blockquote><p><a name="pagination"></a></p><h3 id="pagination" tabindex="-1"><a class="header-anchor" href="#pagination" aria-hidden="true">#</a> Pagination</h3><p>In addition to retrieving a collection of models, you may paginate your search results using the <code>paginate</code> method. This method will return an <code>Illuminate\\Pagination\\LengthAwarePaginator</code> instance just as if you had <a href="./pagination">paginated a traditional Eloquent query</a>:</p><pre><code>use App\\Models\\Order;

$orders = Order::search(&#39;Star Trek&#39;)-&gt;paginate();
</code></pre><p>You may specify how many models to retrieve per page by passing the amount as the first argument to the <code>paginate</code> method:</p><pre><code>$orders = Order::search(&#39;Star Trek&#39;)-&gt;paginate(15);
</code></pre><p>Once you have retrieved the results, you may display the results and render the page links using <a href="./blade">Blade</a> just as if you had paginated a traditional Eloquent query:</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>container<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    @foreach ($orders as $order)
        {{ $order-&gt;price }}
    @endforeach
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

{{ $orders-&gt;links() }}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Of course, if you would like to retrieve the pagination results as JSON, you may return the paginator instance directly from a route or controller:</p><pre><code>use App\\Models\\Order;
use Illuminate\\Http\\Request;

Route::get(&#39;/orders&#39;, function (Request $request) {
    return Order::search($request-&gt;input(&#39;query&#39;))-&gt;paginate(15);
});
</code></pre><blockquote><p><strong>Warning</strong><br> Since search engines are not aware of your Eloquent model&#39;s global scope definitions, you should not utilize global scopes in applications that utilize Scout pagination. Or, you should recreate the global scope&#39;s constraints when searching via Scout.</p></blockquote><p><a name="soft-deleting"></a></p><h3 id="soft-deleting" tabindex="-1"><a class="header-anchor" href="#soft-deleting" aria-hidden="true">#</a> Soft Deleting</h3><p>If your indexed models are <a href="./eloquent#soft-deleting">soft deleting</a> and you need to search your soft deleted models, set the <code>soft_delete</code> option of the <code>config/scout.php</code> configuration file to <code>true</code>:</p><pre><code>&#39;soft_delete&#39; =&gt; true,
</code></pre><p>When this configuration option is <code>true</code>, Scout will not remove soft deleted models from the search index. Instead, it will set a hidden <code>__soft_deleted</code> attribute on the indexed record. Then, you may use the <code>withTrashed</code> or <code>onlyTrashed</code> methods to retrieve the soft deleted records when searching:</p><pre><code>use App\\Models\\Order;

// Include trashed records when retrieving results...
$orders = Order::search(&#39;Star Trek&#39;)-&gt;withTrashed()-&gt;get();

// Only include trashed records when retrieving results...
$orders = Order::search(&#39;Star Trek&#39;)-&gt;onlyTrashed()-&gt;get();
</code></pre><blockquote><p><strong>Note</strong><br> When a soft deleted model is permanently deleted using <code>forceDelete</code>, Scout will remove it from the search index automatically.</p></blockquote><p><a name="customizing-engine-searches"></a></p><h3 id="customizing-engine-searches" tabindex="-1"><a class="header-anchor" href="#customizing-engine-searches" aria-hidden="true">#</a> Customizing Engine Searches</h3><p>If you need to perform advanced customization of the search behavior of an engine you may pass a closure as the second argument to the <code>search</code> method. For example, you could use this callback to add geo-location data to your search options before the search query is passed to Algolia:</p><pre><code>use Algolia\\AlgoliaSearch\\SearchIndex;
use App\\Models\\Order;

Order::search(
    &#39;Star Trek&#39;,
    function (SearchIndex $algolia, string $query, array $options) {
        $options[&#39;body&#39;][&#39;query&#39;][&#39;bool&#39;][&#39;filter&#39;][&#39;geo_distance&#39;] = [
            &#39;distance&#39; =&gt; &#39;1000km&#39;,
            &#39;location&#39; =&gt; [&#39;lat&#39; =&gt; 36, &#39;lon&#39; =&gt; 111],
        ];

        return $algolia-&gt;search($query, $options);
    }
)-&gt;get();
</code></pre><p><a name="customizing-the-eloquent-results-query"></a></p><h4 id="customizing-the-eloquent-results-query" tabindex="-1"><a class="header-anchor" href="#customizing-the-eloquent-results-query" aria-hidden="true">#</a> Customizing The Eloquent Results Query</h4><p>After Scout retrieves a list of matching Eloquent models from your application&#39;s search engine, Eloquent is used to retrieve all of the matching models by their primary keys. You may customize this query by invoking the <code>query</code> method. The <code>query</code> method accepts a closure that will receive the Eloquent query builder instance as an argument:</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">App<span class="token punctuation">\\</span>Models<span class="token punctuation">\\</span>Order</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Database<span class="token punctuation">\\</span>Eloquent<span class="token punctuation">\\</span>Builder</span><span class="token punctuation">;</span>

<span class="token variable">$orders</span> <span class="token operator">=</span> <span class="token class-name static-context">Order</span><span class="token operator">::</span><span class="token function">search</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;Star Trek&#39;</span><span class="token punctuation">)</span>
    <span class="token operator">-&gt;</span><span class="token function">query</span><span class="token punctuation">(</span><span class="token keyword">fn</span> <span class="token punctuation">(</span><span class="token class-name type-declaration">Builder</span> <span class="token variable">$query</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token variable">$query</span><span class="token operator">-&gt;</span><span class="token function">with</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;invoices&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token operator">-&gt;</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Since this callback is invoked after the relevant models have already been retrieved from your application&#39;s search engine, the <code>query</code> method should not be used for &quot;filtering&quot; results. Instead, you should use <a href="#where-clauses">Scout where clauses</a>.</p><p><a name="custom-engines"></a></p><h2 id="custom-engines" tabindex="-1"><a class="header-anchor" href="#custom-engines" aria-hidden="true">#</a> Custom Engines</h2><p><a name="writing-the-engine"></a></p><h4 id="writing-the-engine" tabindex="-1"><a class="header-anchor" href="#writing-the-engine" aria-hidden="true">#</a> Writing The Engine</h4><p>If one of the built-in Scout search engines doesn&#39;t fit your needs, you may write your own custom engine and register it with Scout. Your engine should extend the <code>Laravel\\Scout\\Engines\\Engine</code> abstract class. This abstract class contains eight methods your custom engine must implement:</p><pre><code>use Laravel\\Scout\\Builder;

abstract public function update($models);
abstract public function delete($models);
abstract public function search(Builder $builder);
abstract public function paginate(Builder $builder, $perPage, $page);
abstract public function mapIds($results);
abstract public function map(Builder $builder, $results, $model);
abstract public function getTotalCount($results);
abstract public function flush($model);
</code></pre><p>You may find it helpful to review the implementations of these methods on the <code>Laravel\\Scout\\Engines\\AlgoliaEngine</code> class. This class will provide you with a good starting point for learning how to implement each of these methods in your own engine.</p><p><a name="registering-the-engine"></a></p><h4 id="registering-the-engine" tabindex="-1"><a class="header-anchor" href="#registering-the-engine" aria-hidden="true">#</a> Registering The Engine</h4><p>Once you have written your custom engine, you may register it with Scout using the <code>extend</code> method of the Scout engine manager. Scout&#39;s engine manager may be resolved from the Laravel service container. You should call the <code>extend</code> method from the <code>boot</code> method of your <code>App\\Providers\\AppServiceProvider</code> class or any other service provider used by your application:</p><pre><code>use App\\ScoutExtensions\\MySqlSearchEngine;
use Laravel\\Scout\\EngineManager;

/**
 * Bootstrap any application services.
 */
public function boot(): void
{
    resolve(EngineManager::class)-&gt;extend(&#39;mysql&#39;, function () {
        return new MySqlSearchEngine;
    });
}
</code></pre><p>Once your engine has been registered, you may specify it as your default Scout <code>driver</code> in your application&#39;s <code>config/scout.php</code> configuration file:</p><pre><code>&#39;driver&#39; =&gt; &#39;mysql&#39;,
</code></pre>`,147);function D(L,R){const a=i("ExternalLinkIcon");return r(),l("div",null,[d,n("p",null,[n("a",u,[e("Laravel Scout"),s(a)]),e(" provides a simple, driver based solution for adding full-text search to your "),p,e(". Using model observers, Scout will automatically keep your search indexes in sync with your Eloquent records.")]),n("p",null,[e("Currently, Scout ships with "),n("a",h,[e("Algolia"),s(a)]),e(", "),n("a",g,[e("Meilisearch"),s(a)]),e(", and MySQL / PostgreSQL ("),m,e(') drivers. In addition, Scout includes a "collection" driver that is designed for local development usage and does not require any external dependencies or third-party services. Furthermore, writing custom drivers is simple and you are free to extend Scout with your own search implementations.')]),b,n("p",null,[n("a",y,[e("Meilisearch"),s(a)]),e(" is a blazingly fast and open source search engine. If you aren't sure how to install Meilisearch on your local machine, you may use "),f,e(", Laravel's officially supported Docker development environment.")]),v,n("p",null,[e("For more information regarding Meilisearch, please consult the "),n("a",k,[e("Meilisearch documentation"),s(a)]),e(".")]),n("p",null,[e("In addition, you should ensure that you install a version of "),q,e(" that is compatible with your Meilisearch binary version by reviewing "),n("a",w,[e("Meilisearch's documentation regarding binary compatibility"),s(a)]),e(".")]),n("blockquote",null,[n("p",null,[x,S,e(" When upgrading Scout on an application that utilizes Meilisearch, you should always "),n("a",_,[e("review any additional breaking changes"),s(a)]),e(" to the Meilisearch service itself.")])]),I,n("p",null,[e("Unlike Scout's other drivers, Meilisearch requires you to pre-define index search settings such as filterable attributes, sortable attributes, and "),n("a",E,[e("other supported settings fields"),s(a)]),e(".")]),M,n("p",null,[e("Scout also allows you to auto identify users when using "),n("a",A,[e("Algolia"),s(a)]),e(". Associating the authenticated user with search operations may be helpful when viewing your search analytics within Algolia's dashboard. You can enable user identification by defining a "),T,e(" environment variable as "),$,e(" in your application's "),O,e(" file:")]),C])}const U=o(c,[["render",D],["__file","scout.html.vue"]]);export{U as default};
