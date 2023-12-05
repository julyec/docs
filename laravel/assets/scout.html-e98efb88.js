import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{r,o as c,c as i,b as a,d as e,e as s,a as t}from"./app-8cdff07c.js";const p={},l=t('<h1 id="scout-全文搜索" tabindex="-1"><a class="header-anchor" href="#scout-全文搜索" aria-hidden="true">#</a> Scout 全文搜索</h1><ul><li><a href="#introduction">简介</a></li><li><a href="#installation">安装</a><ul><li><a href="#driver-prerequisites">驱动必要条件</a></li><li><a href="#queueing">队列</a></li></ul></li><li><a href="#configuration">配置</a><ul><li><a href="#configuring-model-indexes">配置模型索引</a></li><li><a href="#configuring-searchable-data">配置可搜索数据</a></li><li><a href="#configuring-the-model-id">配置模型 ID</a></li><li><a href="#configuring-search-engines-per-model">配置每个模型的搜索引擎</a></li><li><a href="#identifying-users">识别用户</a></li></ul></li><li><a href="#database-and-collection-engines">数据库 / 收集引擎</a><ul><li><a href="#database-engine">数据库引擎</a></li><li><a href="#collection-engine">Collection 引擎</a></li></ul></li><li><a href="#indexing">索引</a><ul><li><a href="#batch-import">批量导入</a></li><li><a href="#adding-records">添加记录</a></li><li><a href="#updating-records">修改记录</a></li><li><a href="#removing-records">删除记录</a></li><li><a href="#pausing-indexing">暂停索引</a></li><li><a href="#conditionally-searchable-model-instances">有条件可搜索的模型实例</a></li></ul></li><li><a href="#searching">搜索</a><ul><li><a href="#where-clauses">Where 语句</a></li><li><a href="#pagination">分页</a></li><li><a href="#soft-deleting">软删除</a></li><li><a href="#customizing-engine-searches">自定义引擎搜索</a></li></ul></li><li><a href="#custom-engines">自定义引擎</a></li><li><a href="#builder-macros">生成器宏</a></li></ul><p><a name="introduction"></a></p><h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h2>',4),d={href:"https://github.com/laravel/scout",target:"_blank",rel:"noopener noreferrer"},u=a("a",{href:"./eloquent"},"Eloquent models",-1),h={href:"https://www.algolia.com/",target:"_blank",rel:"noopener noreferrer"},g={href:"https://www.meilisearch.com",target:"_blank",rel:"noopener noreferrer"},b=a("code",null,"database",-1),k=t(`<p><a name="installation"></a></p><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><p>首先，通过 Composer 软件包管理器安装 Scout：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">composer</span> require laravel/scout
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Scout 安装完成后，使用 Artisan 命令 <code>vendor:publish</code> 生成 Scout 配置文件。此命令将会在你的 <code>config</code> 目录下 生成一个 <code>scout.php</code> 配置文件:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan vendor:publish <span class="token parameter variable">--provider</span><span class="token operator">=</span><span class="token string">&quot;Laravel\\Scout\\ScoutServiceProvider&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>最后，在你要做搜索的模型中添加 <code>Laravel\\Scout\\Searchable</code> trait 。这个 trait 会注册一个模型观察者来保持模型和搜索驱动的同步:</p><pre><code>&lt;?php

namespace App\\Models;

use Illuminate\\Database\\Eloquent\\Model;
use Laravel\\Scout\\Searchable;

class Post extends Model
{
    use Searchable;
}
</code></pre><p><a name="driver-prerequisites"></a></p><h3 id="驱动的先决条件" tabindex="-1"><a class="header-anchor" href="#驱动的先决条件" aria-hidden="true">#</a> 驱动的先决条件</h3><p><a name="algolia"></a></p><h4 id="algolia" tabindex="-1"><a class="header-anchor" href="#algolia" aria-hidden="true">#</a> Algolia</h4><p>使用 Algolia 驱动时，需要在 <code>config/scout.php</code> 配置文件配置你的 <code>Algolia</code> <code>id</code> 和 <code>secret</code> 凭证。配置好凭证之后，还需要使用 Composer 安装 Algolia PHP SDK：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">composer</span> require algolia/algoliasearch-client-php
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a name="meilisearch"></a></p><h4 id="meilisearch" tabindex="-1"><a class="header-anchor" href="#meilisearch" aria-hidden="true">#</a> Meilisearch</h4>`,16),m={href:"https://www.meilisearch.com",target:"_blank",rel:"noopener noreferrer"},v=a("a",{href:"./sail#meilisearch"},"Laravel Sail",-1),f=t(`<p>使用 MeiliSearch 驱动程序时，你需要通过 Composer 包管理器安装 MeiliSearch PHP SDK：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">composer</span> require meilisearch/meilisearch-php http-interop/http-factory-guzzle
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>然后，在应用程序的 <code>.env</code> 文件中设置 <code>SCOUT_DRIVER</code> 环境变量以及你的 MeiliSearch <code>host</code> 和 <code>key</code> 凭据：</p><div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code><span class="token key attr-name">SCOUT_DRIVER</span><span class="token punctuation">=</span><span class="token value attr-value">meilisearch</span>
<span class="token key attr-name">MEILISEARCH_HOST</span><span class="token punctuation">=</span><span class="token value attr-value">http://127.0.0.1:7700</span>
<span class="token key attr-name">MEILISEARCH_KEY</span><span class="token punctuation">=</span><span class="token value attr-value">masterKey</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),S={href:"https://docs.meilisearch.com/learn/getting_started/quick_start.html",target:"_blank",rel:"noopener noreferrer"},q={href:"https://github.com/meilisearch/meilisearch-php#-compatibility-with-meilisearch",target:"_blank",rel:"noopener noreferrer"},x=a("code",null,"meilisearch/meilisearch-php",-1),_={href:"https://github.com/meilisearch/MeiliSearch/releases",target:"_blank",rel:"noopener noreferrer"},y=t(`<p><a name="queueing"></a></p><h3 id="队列" tabindex="-1"><a class="header-anchor" href="#队列" aria-hidden="true">#</a> 队列</h3><p>虽然不强制要求使用 Scout，但在使用该库之前，强烈建议配置一个<a href="./queues">队列驱动</a>。运行队列 worker 将允许 Scout 将所有同步模型信息到搜索索引的操作都放入队列中，从而为你的应用程序的Web界面提供更快的响应时间。</p><p>一旦你配置了队列驱动程序，请将 <code>config/scout.php</code> 配置文件中的 <code>queue</code> 选项的值设置为 <code>true</code>：</p><pre><code>&#39;queue&#39; =&gt; true,
</code></pre><p>即使将 <code>queue</code> 选项设置为 <code>false</code>，也要记住有些 Scout 驱动程序（如 Algolia 和 Meilisearch）始终异步记录索引。也就是说，即使索引操作已在 Laravel 应用程序中完成，但搜索引擎本身可能不会立即反映新记录和更新记录。</p><p>要指定 Scout 使用的连接和队列，请将 <code>queue</code> 配置选项定义为数组：</p><pre><code>&#39;queue&#39; =&gt; [
    &#39;connection&#39; =&gt; &#39;redis&#39;,
    &#39;queue&#39; =&gt; &#39;scout&#39;
],
</code></pre><p><a name="configuration"></a></p><h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h2><p><a name="configuring-model-indexes"></a></p><h3 id="配置模型索引" tabindex="-1"><a class="header-anchor" href="#配置模型索引" aria-hidden="true">#</a> 配置模型索引</h3><p>每个 Eloquent 模型都与一个给定的搜索「索引」同步，该索引包含该模型的所有可搜索记录。换句话说，可以将每个索引视为 MySQL 表。默认情况下，每个模型将持久化到与模型的典型「表」名称匹配的索引中。通常，这是模型名称的复数形式；但是，你可以通过在模型上重写 <code>searchableAs</code> 方法来自定义模型的索引：</p><pre><code>&lt;?php

namespace App\\Models;

use Illuminate\\Database\\Eloquent\\Model;
use Laravel\\Scout\\Searchable;

class Post extends Model
{
    use Searchable;

    /**
     * 获取与模型关联的索引的名称.
     */
    public function searchableAs(): string
    {
        return &#39;posts_index&#39;;
    }
}
</code></pre><p><a name="configuring-searchable-data"></a></p><h3 id="配置可搜索数据" tabindex="-1"><a class="header-anchor" href="#配置可搜索数据" aria-hidden="true">#</a> 配置可搜索数据</h3><p>默认情况下，给定模型的 <code>toArray</code> 形式的整个内容将被持久化到其搜索索引中。如果要自定义同步到搜索索引的数据，可以重写模型上的 <code>toSearchableArray</code> 方法：</p><pre><code>&lt;?php

namespace App\\Models;

use Illuminate\\Database\\Eloquent\\Model;
use Laravel\\Scout\\Searchable;

class Post extends Model
{
    use Searchable;

    /**
     * 获取模型的可索引数据。
     *
     * @return array&lt;string, mixed&gt;
     */
    public function toSearchableArray(): array
    {
        $array = $this-&gt;toArray();

        // 自定义数据数组...

        return $array;
    }
}
</code></pre><p>一些搜索引擎（如 Meilisearch）只会在正确的数据类型上执行过滤操作（<code>&gt;</code> 、 <code>&lt;</code> 等）。因此，在使用这些搜索引擎并自定义可搜索数据时，你应该确保数值类型被转换为正确的类型：</p><pre><code>public function toSearchableArray()
{
    return [
        &#39;id&#39; =&gt; (int) $this-&gt;id,
        &#39;name&#39; =&gt; $this-&gt;name,
        &#39;price&#39; =&gt; (float) $this-&gt;price,
    ];
}
</code></pre><p><a name="configuring-filterable-data-for-meilisearch"></a></p><h4 id="配置可过滤数据和索引设置-meilisearch" tabindex="-1"><a class="header-anchor" href="#配置可过滤数据和索引设置-meilisearch" aria-hidden="true">#</a> 配置可过滤数据和索引设置 (Meilisearch)</h4>`,22),M={href:"https://docs.meilisearch.com/reference/api/settings.html",target:"_blank",rel:"noopener noreferrer"},A=t(`<p>可过滤属性是你在调用 Scout 的 <code>where</code> 方法时想要过滤的任何属性，而可排序属性是你在调用 Scout 的 <code>orderBy</code> 方法时想要排序的任何属性。要定义索引设置，请调整应用程序的 <code>scout</code> 配置文件中 <code>meilisearch</code> 配置条目的 <code>index-settings</code> 部分：</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">App<span class="token punctuation">\\</span>Models<span class="token punctuation">\\</span>User</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">App<span class="token punctuation">\\</span>Models<span class="token punctuation">\\</span>Flight</span><span class="token punctuation">;</span>

<span class="token string single-quoted-string">&#39;meilisearch&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>
    <span class="token string single-quoted-string">&#39;host&#39;</span> <span class="token operator">=&gt;</span> <span class="token function">env</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;MEILISEARCH_HOST&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;http://localhost:7700&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;key&#39;</span> <span class="token operator">=&gt;</span> <span class="token function">env</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;MEILISEARCH_KEY&#39;</span><span class="token punctuation">,</span> <span class="token constant">null</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;index-settings&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>
        <span class="token class-name static-context">User</span><span class="token operator">::</span><span class="token keyword">class</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>
            <span class="token string single-quoted-string">&#39;filterableAttributes&#39;</span><span class="token operator">=&gt;</span> <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;id&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;name&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;email&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token string single-quoted-string">&#39;sortableAttributes&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;created_at&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token comment">// 其他设置字段...</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token class-name static-context">Flight</span><span class="token operator">::</span><span class="token keyword">class</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>
            <span class="token string single-quoted-string">&#39;filterableAttributes&#39;</span><span class="token operator">=&gt;</span> <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;id&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;destination&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token string single-quoted-string">&#39;sortableAttributes&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;updated_at&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果给定索引下的模型可以进行软删除，并且已包含在<code>index-settings</code>数组中，Scout 将自动支持在该索引上过滤软删除的模型。如果你没有其他可过滤或可排序的属性来定义软删除的模型索引，则可以简单地向该模型的<code>index-settings</code>数组添加一个空条目：</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token string single-quoted-string">&#39;index-settings&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>
    <span class="token class-name static-context">Flight</span><span class="token operator">::</span><span class="token keyword">class</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token punctuation">]</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在配置应用程序的索引设置之后，你必须调用 <code>scout:sync-index-settings</code> Artisan 命令。此命令将向 Meilisearch 通知你当前配置的索引设置。为了方便起见，你可能希望将此命令作为部署过程的一部分：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan scout:sync-index-settings
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a name="configuring-the-model-id"></a></p><h3 id="配置模型id" tabindex="-1"><a class="header-anchor" href="#配置模型id" aria-hidden="true">#</a> 配置模型ID</h3><p>默认情况下，Scout 将使用模型的主键作为存储在搜索索引中的模型唯一ID/键。如果你需要自定义此行为，可以重写模型的 <code>getScoutKey</code> 和 <code>getScoutKeyName</code> 方法：</p><pre><code>&lt;?php

namespace App\\Models;

use Illuminate\\Database\\Eloquent\\Model;
use Laravel\\Scout\\Searchable;

class User extends Model
{
    use Searchable;

    /**
     * 获取这个模型用于索引的值.
     */
    public function getScoutKey(): mixed
    {
        return $this-&gt;email;
    }

    /**
     * 获取这个模型用于索引的键.
     */
    public function getScoutKeyName(): mixed
    {
        return &#39;email&#39;;
    }
}
</code></pre><p><a name="configuring-search-engines-per-model"></a></p><h3 id="设置模型的搜索引擎" tabindex="-1"><a class="header-anchor" href="#设置模型的搜索引擎" aria-hidden="true">#</a> 设置模型的搜索引擎</h3><p>当进行搜索时，Scout 通常会使用应用程序的 <code>scout</code> 配置文件中指定的默认搜索引擎。但是，可以通过在模型上覆盖 <code>searchableUsing</code> 方法来更改特定模型的搜索引擎：</p><pre><code>&lt;?php

namespace App\\Models;

use Illuminate\\Database\\Eloquent\\Model;
use Laravel\\Scout\\Engines\\Engine;
use Laravel\\Scout\\EngineManager;
use Laravel\\Scout\\Searchable;

class User extends Model
{
    use Searchable;

    /**
     * 获取这个模型用于索引的搜索引擎.
     */
    public function searchableUsing(): Engine
    {
        return app(EngineManager::class)-&gt;engine(&#39;meilisearch&#39;);
    }
}
</code></pre><p><a name="identifying-users"></a></p><h3 id="识别用户" tabindex="-1"><a class="header-anchor" href="#识别用户" aria-hidden="true">#</a> 识别用户</h3>`,16),$={href:"https://algolia.com/",target:"_blank",rel:"noopener noreferrer"},w=a("code",null,".env",-1),E=a("code",null,"SCOUT_IDENTIFY",-1),O=a("code",null,"true",-1),I=t(`<div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code><span class="token key attr-name">SCOUT_IDENTIFY</span><span class="token punctuation">=</span><span class="token value attr-value">true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>启用此功能还会将请求的 IP 地址和已验证的用户的主要标识符传递给 Algolia，以便将此数据与用户发出的任何搜索请求相关联。</p><p><a name="database-and-collection-engines"></a></p><h2 id="数据库-集合引擎" tabindex="-1"><a class="header-anchor" href="#数据库-集合引擎" aria-hidden="true">#</a> 数据库/集合引擎</h2><p><a name="database-engine"></a></p><h3 id="数据库引擎" tabindex="-1"><a class="header-anchor" href="#数据库引擎" aria-hidden="true">#</a> 数据库引擎</h3><blockquote><p>注意：目前，数据库引擎支持 MySQL 和 PostgreSQL。</p></blockquote><p>如果你的应用程序与小到中等大小的数据库交互或工作负载较轻，你可能会发现使用 Scout 的 「database」 引擎更为方便。数据库引擎将使用 「where like」子句和全文索引来过滤你现有数据库的结果，以确定适用于你查询的搜索结果。</p><p>要使用数据库引擎，你可以简单地将 <code>SCOUT_DRIVER</code> 环境变量的值设置为 <code>database</code>，或直接在你的应用程序的 <code>scout</code> 配置文件中指定 <code>database</code> 驱动程序：</p><div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code><span class="token key attr-name">SCOUT_DRIVER</span><span class="token punctuation">=</span><span class="token value attr-value">database</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>一旦你已将数据库引擎指定为首选驱动程序，你必须<a href="#configuring-searchable-data">配置你的可搜索数据</a>。然后，你可以开始<a href="#searching">执行搜索查询</a>来查询你的模型。使用数据库引擎时，不需要进行搜索引擎索引，例如用于填充 Algolia 或 Meilisearch 索引所需的索引。</p><h4 id="自定义数据库搜索策略" tabindex="-1"><a class="header-anchor" href="#自定义数据库搜索策略" aria-hidden="true">#</a> 自定义数据库搜索策略</h4><p>默认情况下，数据库引擎将对你所<a href="#configuring-searchable-data">配置为可搜索的</a>每个模型属性执行 「where like」 查询。然而，在某些情况下，这可能会导致性能不佳。因此，数据库引擎的搜索策略可以配置，以便某些指定的列利用全文搜索查询，或者仅使用 「where like」 约束来搜索字符串的前缀(<code>example%</code>)，而不是在整个字符串中搜索(<code>%example%</code>)。</p><p>为了定义这种行为，你可以将 PHP 属性赋值给你的模型的 toSearchableArray 方法。任何未被分配其他搜索策略行为的列将继续使用默认的「where like」策略：</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">Laravel<span class="token punctuation">\\</span>Scout<span class="token punctuation">\\</span>Attributes<span class="token punctuation">\\</span>SearchUsingFullText</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Laravel<span class="token punctuation">\\</span>Scout<span class="token punctuation">\\</span>Attributes<span class="token punctuation">\\</span>SearchUsingPrefix</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * 获取模型的可索引数据数组。
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>注意：在指定列应使用全文查询约束之前，请确保已为该列分配<a href="./migrations#available-index-types">全文索引</a>。</p></blockquote><p><a name="collection-engine"></a></p><h3 id="集合引擎" tabindex="-1"><a class="header-anchor" href="#集合引擎" aria-hidden="true">#</a> 集合引擎</h3><p>在本地开发过程中，你可以自由地使用 Algolia 或 Meilisearch 搜索引擎，但你可能会发现使用「集合」引擎更加方便。集合引擎将使用「where」子句和集合过滤器来从你现有的数据库结果中确定适用于你查询的搜索结果。当使用此引擎时，无需对可搜索模型进行「索引」，因为它们只需从本地数据库中检索即可。</p><p>要使用收集引擎，你可以简单地将 <code>SCOUT_DRIVER</code> 环境变量的值设置为 <code>collection</code>，或者直接在你的应用的 <code>scout</code> 配置文件中指定 <code>collection</code> 驱动程序：</p><div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code><span class="token key attr-name">SCOUT_DRIVER</span><span class="token punctuation">=</span><span class="token value attr-value">collection</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>一旦你将收集驱动程序指定为首选驱动程序，你就可以开始针对你的模型<a href="#searching">执行搜索查询</a>。使用收集引擎时，不需要进行搜索引擎索引，如种子 Algolia 或 Meilisearch 索引所需的索引。</p><h4 id="与数据库引擎的区别" tabindex="-1"><a class="header-anchor" href="#与数据库引擎的区别" aria-hidden="true">#</a> 与数据库引擎的区别</h4><p>乍一看，「数据库」和「收集」引擎非常相似。它们都直接与你的数据库交互以检索搜索结果。然而，收集引擎不使用全文索引或 <code>LIKE</code> 子句来查找匹配的记录。相反，它会拉取所有可能的记录，并使用 Laravel 的 <code>Str::is</code> 助手来确定搜索字符串是否存在于模型属性值中。</p><p>收集引擎是最便携的搜索引擎，因为它适用于 Laravel 支持的所有关系型数据库（包括 SQLite 和 SQL Server）；然而，它的效率比 Scout 的数据库引擎低。</p><p><a name="indexing"></a></p><h2 id="索引" tabindex="-1"><a class="header-anchor" href="#索引" aria-hidden="true">#</a> 索引</h2><p><a name="batch-import"></a></p><h3 id="批量导入" tabindex="-1"><a class="header-anchor" href="#批量导入" aria-hidden="true">#</a> 批量导入</h3><p>如果你要将 Scout 安装到现有项目中，你可能已经有需要导入到你的索引中的数据库记录。Scout 提供了一个 <code>scout:import</code> Artisan 命令，你可以使用它将所有现有记录导入到你的搜索索引中：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan scout:import <span class="token string">&quot;App\\Models\\Post&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>flush</code> 命令可用于从你的搜索索引中删除模型的所有记录：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan scout:flush <span class="token string">&quot;App\\Models\\Post&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a name="modifying-the-import-query"></a></p><h4 id="修改导入查询" tabindex="-1"><a class="header-anchor" href="#修改导入查询" aria-hidden="true">#</a> 修改导入查询</h4><p>如果你想修改用于获取所有批量导入模型的查询，你可以在你的模型上定义一个<code>makeAllSearchableUsing</code>方法。这是一个很好的地方，可以在导入模型之前添加任何必要的关系加载:</p><pre><code>use Illuminate\\Database\\Eloquent\\Builder;

/**
 * 修改用于检索模型的查询，使所有模型都可搜索.
 */
protected function makeAllSearchableUsing(Builder $query): Builder
{
    return $query-&gt;with(&#39;author&#39;);
}
</code></pre><p><a name="adding-records"></a></p><h3 id="添加记录" tabindex="-1"><a class="header-anchor" href="#添加记录" aria-hidden="true">#</a> 添加记录</h3><p>一旦你将<code>Laravel\\Scout\\Searchable</code> Trait添加到模型中，你所需要做的就是<code>保存</code>或<code>创建</code>一个模型实例，它将自动添加到你的搜索索引中。如果你将Scout配置为<a href="#queueing">使用队列</a>，则此操作将由你的队列工作者在后台执行:</p><pre><code>use App\\Models\\Order;

$order = new Order;

// ...

$order-&gt;save();
</code></pre><p><a name="adding-records-via-query"></a></p><h4 id="通过查询添加记录" tabindex="-1"><a class="header-anchor" href="#通过查询添加记录" aria-hidden="true">#</a> 通过查询添加记录</h4><p>如果你想通过Eloquent查询将模型集合添加到你的搜索索引中，你可以将<code>searchable</code>方法链接到Eloquent查询中。<code>searchable</code>方法会将查询的<a href="./eloquent#chunking-results">结果分块</a>并将记录添加到你的搜索索引中。同样，如果你已经配置了Scout来使用队列，那么所有的块都将由你的队列工作程序在后台导入:</p><pre><code>use App\\Models\\Order;

Order::where(&#39;price&#39;, &#39;&gt;&#39;, 100)-&gt;searchable();
</code></pre><p>你也可以在Eloquent关系实例上调用<code>searchable</code>方法:</p><pre><code>$user-&gt;orders()-&gt;searchable();
</code></pre><p>如果你已经有一组Eloquent模型对象在内存中，可以在该集合实例上调用<code>searchable</code>方法，将模型实例添加到对应的索引中：</p><pre><code>$orders-&gt;searchable();
</code></pre><blockquote><p><strong>注意</strong> searchable 方法可以被视为「upsert」操作。换句话说，如果模型记录已经存在于索引中，它将被更新。如果它在搜索索引中不存在，则将其添加到索引中。</p></blockquote><p><a name="updating-records"></a></p><h3 id="更新记录" tabindex="-1"><a class="header-anchor" href="#更新记录" aria-hidden="true">#</a> 更新记录</h3><p>要更新可搜索的模型，只需更新模型实例的属性并将模型保存到你的数据库中。Scout 将自动将更改持久化到你的搜索索引中：</p><pre><code>use App\\Models\\Order;

$order = Order::find(1);

// 更新订单…

$order-&gt;save();
</code></pre><p>你还可以在Eloquent查询实例上调用 <code>searchable</code> 方法，以更新模型的集合。如果模型不存在于搜索索引中，则将创建它们：</p><pre><code>Order::where(&#39;price&#39;, &#39;&gt;&#39;, 100)-&gt;searchable();
</code></pre><p>如果想要更新关系中所有模型的搜索索引记录，可以在关系实例上调用<code>searchable</code>方法：</p><pre><code>$user-&gt;orders()-&gt;searchable();
</code></pre><p>或者，如果你已经在内存中有一组 Eloquent 模型，可以在该集合实例上调用<code>searchable</code> 方法，以更新对应索引中的模型实例：</p><pre><code>$orders-&gt;searchable();
</code></pre><p><a name="removing-records"></a></p><h3 id="删除记录" tabindex="-1"><a class="header-anchor" href="#删除记录" aria-hidden="true">#</a> 删除记录</h3><p>要从索引中删除记录，只需从数据库中删除模型即可。即使你正在使用<a href="./eloquent#soft-deleting">软删除</a>模型，也可以这样做：</p><pre><code>use App\\Models\\Order;

$order = Order::find(1);

$order-&gt;delete();
</code></pre><p>如果你不想在删除记录之前检索模型，你可以在 Eloquent 查询实例上使用 <code>unsearchable</code> 方法：</p><pre><code>Order::where(&#39;price&#39;, &#39;&gt;&#39;, 100)-&gt;unsearchable();
</code></pre><p>如果你想删除与关系中所有模型相关的搜索索引记录，你可以在关系实例上调用 <code>unsearchable</code> 方法：</p><pre><code>$user-&gt;orders()-&gt;unsearchable();
</code></pre><p>或者，如果你已经有一组 Eloquent 模型在内存中，你可以在集合实例上调用 <code>unsearchable</code> 方法，将模型实例从相应的索引中移除：</p><pre><code>$orders-&gt;unsearchable();
</code></pre><p><a name="pausing-indexing"></a></p><h3 id="暂停索引" tabindex="-1"><a class="header-anchor" href="#暂停索引" aria-hidden="true">#</a> 暂停索引</h3><p>有时你可能需要在不将模型数据同步到搜索索引的情况下对模型执行一批 Eloquent 操作。你可以使用 <code>withoutSyncingToSearch</code> 方法来实现这一点。该方法接受一个闭包，将立即执行。在闭包内发生的任何模型操作都不会同步到模型的索引：</p><pre><code>use App\\Models\\Order;

Order::withoutSyncingToSearch(function () {
    // 执行模型动作…
});
</code></pre><p><a name="conditionally-searchable-model-instances"></a></p><h3 id="有条件地搜索模型实例" tabindex="-1"><a class="header-anchor" href="#有条件地搜索模型实例" aria-hidden="true">#</a> 有条件地搜索模型实例</h3><p>有时你可能需要在某些条件下使模型可搜索。例如，假设你有一个 <code>App\\Models\\Post</code> 模型，它可能处于两种状态之一：「draft」（草稿）和 「published」（已发布）。你可能只想让 「published」（已发布）的帖子可以被搜索。为了实现这一点，你可以在你的模型中定义一个 <code>shouldBeSearchable</code> 方法：</p><pre><code>/**
 * 确定模型是否应该可搜索。
 */
public function shouldBeSearchable(): bool
{
    return $this-&gt;isPublished();
}
</code></pre><p><code>shouldBeSearchable</code> 方法仅在通过 <code>save</code> 和 <code>create</code> 方法、查询或关系操作模型时应用。直接使用 <code>searchable</code> 方法使模型或集合可搜索将覆盖 <code>shouldBeSearchable</code> 方法的结果。</p><blockquote><p><strong>警告</strong><br> 当使用 Scout 的「database」（数据库）引擎时，<code>shouldBeSearchable</code> 方法不适用，因为所有可搜索的数据都存储在数据库中。要在使用数据库引擎时实现类似的行为，你应该使用 <a href="#where-clauses">where 子句</a>代替。</p></blockquote><p><a name="searching"></a></p><h2 id="搜索" tabindex="-1"><a class="header-anchor" href="#搜索" aria-hidden="true">#</a> 搜索</h2><p>你可以使用 <code>search</code> 方法开始搜索一个模型。搜索方法接受一个将用于搜索模型的字符串。然后，你应该在搜索查询上链接 <code>get</code> 方法以检索与给定搜索查询匹配的 Eloquent 模型：</p><pre><code>use App\\Models\\Order;

$orders = Order::search(&#39;Star Trek&#39;)-&gt;get();
</code></pre><p>由于 Scout 搜索返回一组 Eloquent 模型，你甚至可以直接从路由或控制器返回结果，它们将自动转换为 JSON：</p><pre><code>use App\\Models\\Order;
use Illuminate\\Http\\Request;

Route::get(&#39;/search&#39;, function (Request $request) {
    return Order::search($request-&gt;search)-&gt;get();
});
</code></pre><p>如果你想在将搜索结果转换为 Eloquent 模型之前获取原始搜索结果，你可以使用 <code>raw</code> 方法：</p><pre><code>$orders = Order::search(&#39;Star Trek&#39;)-&gt;raw();
</code></pre><p><a name="custom-indexes"></a></p><h4 id="自定义索引" tabindex="-1"><a class="header-anchor" href="#自定义索引" aria-hidden="true">#</a> 自定义索引</h4><p>搜索查询通常会在模型的 <a href="#configuring-model-indexes"><code>searchableAs</code></a> 方法指定的索引上执行。然而，你可以使用 <code>within</code> 方法指定一个应该被搜索的自定义索引：</p><pre><code>$orders = Order::search(&#39;Star Trek&#39;)
    -&gt;within(&#39;tv_shows_popularity_desc&#39;)
    -&gt;get();
</code></pre><p><a name="where-clauses"></a></p><h3 id="where-子句" tabindex="-1"><a class="header-anchor" href="#where-子句" aria-hidden="true">#</a> Where 子句</h3><p>Scout 允许你在搜索查询中添加简单的「where」子句。目前，这些子句只支持基本的数值相等检查，主要用于通过所有者 ID 限定搜索查询：</p><pre><code>use App\\Models\\Order;

$orders = Order::search(&#39;Star Trek&#39;)-&gt;where(&#39;user_id&#39;, 1)-&gt;get();
</code></pre><p>你可以使用 <code>whereIn</code> 方法将结果约束在给定的一组值中：</p><pre><code>$orders = Order::search(&#39;Star Trek&#39;)-&gt;whereIn(
    &#39;status&#39;, [&#39;paid&#39;, &#39;open&#39;]
)-&gt;get();
</code></pre><p>由于搜索索引不是关系数据库，所以目前不支持更高级的「where」子句。</p><blockquote><p>**警告 ** 如果你的应用程序使用了 Meilisearch，你必须在使用 Scout 的「where」子句之前配置你的应用程序的<a href="#configuring-filterable-data-for-meilisearch">可过滤属性</a>。</p></blockquote><p><a name="pagination"></a></p><h3 id="分页" tabindex="-1"><a class="header-anchor" href="#分页" aria-hidden="true">#</a> 分页</h3><p>除了检索模型集合之外，你还可以使用 <code>paginate</code> 方法对搜索结果进行分页。此方法将返回一个 <code>Illuminate\\Pagination\\LengthAwarePaginator</code> 实例，就像你对<a href="./pagination">传统的 Eloquent 查询进行分页</a>一样：</p><pre><code>use App\\Models\\Order;

$orders = Order::search(&#39;Star Trek&#39;)-&gt;paginate();
</code></pre><p>你可以通过将数量作为第一个参数传递给 <code>paginate</code> 方法来指定每页检索多少个模型：</p><pre><code>$orders = Order::search(&#39;Star Trek&#39;)-&gt;paginate(15);
</code></pre><p>一旦你检索到了结果，你可以使用 <a href="./blade">Blade</a> 显示结果并渲染页面链接，就像你对传统的 Eloquent 查询进行分页一样：</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>container<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    @foreach ($orders as $order)
        {{ $order-&gt;price }}
    @endforeach
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

{{ $orders-&gt;links() }}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当然，如果你想将分页结果作为 JSON 检索，可以直接从路由或控制器返回分页器实例：</p><pre><code>use App\\Models\\Order;
use Illuminate\\Http\\Request;

Route::get(&#39;/orders&#39;, function (Request $request) {
    return Order::search($request-&gt;input(&#39;query&#39;))-&gt;paginate(15);
});
</code></pre><blockquote><p><strong>警告</strong><br> 由于搜索引擎不了解你的 Eloquent 模型的全局作用域定义，因此在使用 Scout 分页的应用程序中，你不应该使用全局作用域。或者，你应该在通过 Scout 搜索时重新创建全局作用域的约束。</p></blockquote><p><a name="soft-deleting"></a></p><h3 id="软删除" tabindex="-1"><a class="header-anchor" href="#软删除" aria-hidden="true">#</a> 软删除</h3><p>如果你的索引模型使用了软删除并且你需要搜索已软删除的模型，请将 <code>config/scout.php</code> 配置文件中的 <code>soft_delete</code> 选项设置为 <code>true</code>。</p><pre><code>&#39;soft_delete&#39; =&gt; true,
</code></pre><p>当这个配置选项为 <code>true</code> 时，Scout 不会从搜索索引中删除已软删除的模型。相反，它会在索引记录上设置一个隐藏的 <code>__soft_deleted</code> 属性。然后，你可以使用 <code>withTrashed</code> 或 <code>onlyTrashed</code> 方法在搜索时检索已软删除的记录：</p><pre><code>use App\\Models\\Order;

// 在检索结果时包含已删除的记录。。。
$orders = Order::search(&#39;Star Trek&#39;)-&gt;withTrashed()-&gt;get();

// 仅在检索结果时包含已删除的记录。。。
$orders = Order::search(&#39;Star Trek&#39;)-&gt;onlyTrashed()-&gt;get();
</code></pre><blockquote><p>技巧：当使用 <code>forceDelete</code> 永久删除软删除模型时，Scout 将自动从搜索索引中移除它。</p></blockquote><p><a name="customizing-engine-searches"></a></p><h3 id="自定义引擎搜索" tabindex="-1"><a class="header-anchor" href="#自定义引擎搜索" aria-hidden="true">#</a> 自定义引擎搜索</h3><p>如果你需要对一个引擎的搜索行为进行高级定制，你可以将一个闭包作为 <code>search</code> 方法的第二个参数传递进去。例如，你可以使用这个回调在搜索查询传递给 Algolia 之前将地理位置数据添加到你的搜索选项中：</p><pre><code>use Algolia\\AlgoliaSearch\\SearchIndex;
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
</code></pre><p><a name="customizing-the-eloquent-results-query"></a></p><h4 id="自定义-eloquent-结果查询" tabindex="-1"><a class="header-anchor" href="#自定义-eloquent-结果查询" aria-hidden="true">#</a> 自定义 Eloquent 结果查询</h4><p>在 Scout 从你的应用程序搜索引擎中检索到匹配的 Eloquent 模型列表后，Eloquent 会使用模型的主键检索所有匹配的模型。你可以通过调用 <code>query</code> 方法来自定义此查询。<code>query</code> 方法接受一个闭包，它将接收 Eloquent 查询构建器实例作为参数：</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">App<span class="token punctuation">\\</span>Models<span class="token punctuation">\\</span>Order</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Database<span class="token punctuation">\\</span>Eloquent<span class="token punctuation">\\</span>Builder</span><span class="token punctuation">;</span>

<span class="token variable">$orders</span> <span class="token operator">=</span> <span class="token class-name static-context">Order</span><span class="token operator">::</span><span class="token function">search</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;Star Trek&#39;</span><span class="token punctuation">)</span>
    <span class="token operator">-&gt;</span><span class="token function">query</span><span class="token punctuation">(</span><span class="token keyword">fn</span> <span class="token punctuation">(</span><span class="token class-name type-declaration">Builder</span> <span class="token variable">$query</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token variable">$query</span><span class="token operator">-&gt;</span><span class="token function">with</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;invoices&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token operator">-&gt;</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>由于此回调是在从应用程序的搜索引擎中已经检索到相关模型之后调用的，因此 <code>query</code> 方法不应用于「过滤」结果。相反，你应该使用 <a href="#where-clauses">Scout where 子句</a>。</p><p><a name="custom-engines"></a></p><h2 id="自定义引擎" tabindex="-1"><a class="header-anchor" href="#自定义引擎" aria-hidden="true">#</a> 自定义引擎</h2><p><a name="writing-the-engine"></a></p><h4 id="编写引擎" tabindex="-1"><a class="header-anchor" href="#编写引擎" aria-hidden="true">#</a> 编写引擎</h4><p>如果 Scout 内置的搜索引擎不符合你的需求，你可以编写自己的自定义引擎并将其注册到 Scout。你的引擎应该继承 <code>Laravel\\Scout\\Engines\\Engine</code> 抽象类。这个抽象类包含了你的自定义引擎必须实现的八个方法：</p><pre><code>use Laravel\\Scout\\Builder;

abstract public function update($models);
abstract public function delete($models);
abstract public function search(Builder $builder);
abstract public function paginate(Builder $builder, $perPage, $page);
abstract public function mapIds($results);
abstract public function map(Builder $builder, $results, $model);
abstract public function getTotalCount($results);
abstract public function flush($model);
</code></pre><p>你可能会发现，查看 <code>Laravel\\Scout\\Engines\\AlgoliaEngine</code> 类上这些方法的实现会很有帮助。这个类将为你提供一个良好的起点，以学习如何在自己的引擎中实现每个方法。</p><p><a name="registering-the-engine"></a></p><h4 id="注册引擎" tabindex="-1"><a class="header-anchor" href="#注册引擎" aria-hidden="true">#</a> 注册引擎</h4><p>一旦你编写好自己的引擎，就可以使用 Scout 的引擎管理器的 <code>extend</code> 方法将其注册到 Scout 中。Scout 的引擎管理器可以从Laravel服务容器中解析。你应该从 <code>App\\Providers\\AppServiceProvider</code> 类或应用程序使用的任何其他服务提供程序的 <code>boot</code> 方法中调用 <code>extend</code> 方法：</p><pre><code>use App\\ScoutExtensions\\MySqlSearchEngine;
use Laravel\\Scout\\EngineManager;

/**
 * 引导任何应用程序服务。
 */
public function boot(): void
{
    resolve(EngineManager::class)-&gt;extend(&#39;mysql&#39;, function () {
        return new MySqlSearchEngine;
    });
}
</code></pre><p>引擎注册后，你可以在 <code>config/scout.php</code> , 配置文件中指定它为默认的 Scout <code>driver</code></p><pre><code>&#39;driver&#39; =&gt; &#39;mysql&#39;,
</code></pre><p><a name="builder-macros"></a></p><h2 id="生成宏命令" tabindex="-1"><a class="header-anchor" href="#生成宏命令" aria-hidden="true">#</a> 生成宏命令</h2><p>如果你想要自定义生成器方法，你可以使用 <code>Laravel\\Scout\\Builder</code> 类下的 &quot;macro&quot; 方法。 通常，定义「macros」时，需要实现 <a href="./providers">service provider’s</a> <code>boot</code> 方法:</p><pre><code>use Illuminate\\Support\\Facades\\Response;
use Illuminate\\Support\\ServiceProvider;
use Laravel\\Scout\\Builder;

/**
 * 引导任何应用程序服务。
 */
public function boot(): void
{
    Builder::macro(&#39;count&#39;, function () {
        return $this-&gt;engine()-&gt;getTotalCount(
            $this-&gt;engine()-&gt;search($this)
        );
    });
}
</code></pre><p><code>macro</code> 函数接受一个名字作为第一个参数，第二个参数为一个闭包函数。当调用 <code>Laravel\\Scout\\Builder</code> 宏命令时，调用这个函数.</p><pre><code>use App\\Models\\Order;

Order::search(&#39;Star Trek&#39;)-&gt;count();
</code></pre>`,146);function L(T,P){const n=r("ExternalLinkIcon");return c(),i("div",null,[l,a("p",null,[a("a",d,[e("Laravel Scout"),s(n)]),e(" 为 "),u,e(" 的全文搜索提供了一个简单的基于驱动程序的解决方案，通过使用模型观察者，Scout 将自动同步 Eloquent 记录的搜索索引。")]),a("p",null,[e("目前，Scout 附带 "),a("a",h,[e("Algolia"),s(n)]),e(", "),a("a",g,[e("Meilisearch"),s(n)]),e(", 和 MySQL / PostgreSQL ("),b,e(") 驱动程序。此外，Scout 包括一个「collection」驱动程序，该驱动程序专为本地开发使用而设计，不需要任何外部依赖项或第三方服务。此外，编写自定义驱动程序很简单，你可以使用自己的搜索实现自由扩展 Scout。")]),k,a("p",null,[a("a",m,[e("Meilisearch"),s(n)]),e(" 是一个速度极快的开源搜索引擎。如果你不确定如何在本地机器上安装 MeiliSearch，你可以使用 Laravel 官方支持的 Docker 开发环境 "),v,e("。")]),f,a("p",null,[e("更多关于 MeiliSearch 的信息，请参考 "),a("a",S,[e("MeiliSearch 技术文档"),s(n)]),e("。")]),a("p",null,[e("此外，你应该通过查看 "),a("a",q,[e("MeiliSearch 关于二进制兼容性的文档"),s(n)]),e("确保安装与你的 MeiliSearch 二进制版本兼容的 "),x,e(" 版本。")]),a("blockquote",null,[a("p",null,[e("Meilisearch service itself. 注意：在使用 MeiliSearch 的应用程序上升级 Scout 时，你应该始终留意查看关于 MeiliSearch 升级发布的"),a("a",_,[e("其他重大（破坏性）更改"),s(n)]),e("，以保证升级顺利。")])]),y,a("p",null,[e("与 Scout 的其他驱动程序不同，Meilisearch 要求你预定义索引搜索设置，例如可过滤属性、可排序属性和"),a("a",M,[e("其他支持的设置字段"),s(n)]),e("。")]),A,a("p",null,[e("如果你在使用 "),a("a",$,[e("Algolia"),s(n)]),e(" 时想要自动识别用户，Scout 可以帮助你。将已认证的用户与搜索操作相关联，可以在 Algolia 的仪表板中查看搜索分析时非常有用。你可以通过在应用程序的 "),w,e(" 文件中将 "),E,e(" 环境变量定义为 "),O,e(" 来启用用户识别：")]),I])}const R=o(p,[["render",L],["__file","scout.html.vue"]]);export{R as default};
