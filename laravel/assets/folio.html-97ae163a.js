import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as i,c as p,b as a,d as n,e as l,a as s}from"./app-06635a3b.js";const c={},d=s('<h1 id="laravel-folio" tabindex="-1"><a class="header-anchor" href="#laravel-folio" aria-hidden="true">#</a> Laravel Folio</h1><ul><li><a href="#introduction">Introduction</a></li><li><a href="#installation">Installation</a><ul><li><a href="#page-paths-uris">Page Paths / URIs</a></li><li><a href="#subdomain-routing">Subdomain Routing</a></li></ul></li><li><a href="#creating-routes">Creating Routes</a><ul><li><a href="#nested-routes">Nested Routes</a></li><li><a href="#index-routes">Index Routes</a></li></ul></li><li><a href="#route-parameters">Route Parameters</a></li><li><a href="#route-model-binding">Route Model Binding</a><ul><li><a href="#soft-deleted-models">Soft Deleted Models</a></li></ul></li><li><a href="#render-hooks">Render Hooks</a></li><li><a href="#named-routes">Named Routes</a></li><li><a href="#middleware">Middleware</a></li><li><a href="#route-caching">Route Caching</a></li></ul><p><a name="introduction"></a></p><h2 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h2>',4),u={href:"https://github.com/laravel/folio",target:"_blank",rel:"noopener noreferrer"},r=a("code",null,"resources/views/pages",-1),m=s(`<p>For example, to create a page that is accessible at the <code>/greeting</code> URL, just create a <code>greeting.blade.php</code> file in your application&#39;s <code>resources/views/pages</code> directory:</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
    Hello World
<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="installation"></a></p><h2 id="installation" tabindex="-1"><a class="header-anchor" href="#installation" aria-hidden="true">#</a> Installation</h2><p>To get started, install Folio into your project using the Composer package manager:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">composer</span> require laravel/folio
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>After installing Folio, you may execute the <code>folio:install</code> Artisan command, which will install Folio&#39;s service provider into your application. This service provider registers the directory where Folio will search for routes / pages:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan folio:install
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a name="page-paths-uris"></a></p><h3 id="page-paths-uris" tabindex="-1"><a class="header-anchor" href="#page-paths-uris" aria-hidden="true">#</a> Page Paths / URIs</h3><p>By default, Folio serves pages from your application&#39;s <code>resources/views/pages</code> directory, but you may customize these directories in your Folio service provider&#39;s <code>boot</code> method.</p><p>For example, sometimes it may be convenient to specify multiple Folio paths in the same Laravel application. You may wish to have a separate directory of Folio pages for your application&#39;s &quot;admin&quot; area, while using another directory for the rest of your application&#39;s pages.</p><p>You may accomplish this using the <code>Folio::path</code> and <code>Folio::uri</code> methods. The <code>path</code> method registers a directory that Folio will scan for pages when routing incoming HTTP requests, while the <code>uri</code> method specifies the &quot;base URI&quot; for that directory of pages:</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">Laravel<span class="token punctuation">\\</span>Folio<span class="token punctuation">\\</span>Folio</span><span class="token punctuation">;</span>

<span class="token class-name static-context">Folio</span><span class="token operator">::</span><span class="token function">path</span><span class="token punctuation">(</span><span class="token function">resource_path</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;views/pages/guest&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">uri</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;/&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token class-name static-context">Folio</span><span class="token operator">::</span><span class="token function">path</span><span class="token punctuation">(</span><span class="token function">resource_path</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;views/pages/admin&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token operator">-&gt;</span><span class="token function">uri</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;/admin&#39;</span><span class="token punctuation">)</span>
    <span class="token operator">-&gt;</span><span class="token function">middleware</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
        <span class="token string single-quoted-string">&#39;*&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>
            <span class="token string single-quoted-string">&#39;auth&#39;</span><span class="token punctuation">,</span>
            <span class="token string single-quoted-string">&#39;verified&#39;</span><span class="token punctuation">,</span>

            <span class="token comment">// ...</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="subdomain-routing"></a></p><h3 id="subdomain-routing" tabindex="-1"><a class="header-anchor" href="#subdomain-routing" aria-hidden="true">#</a> Subdomain Routing</h3><p>You may also route to pages based on the incoming request&#39;s subdomain. For example, you may wish to route requests from <code>admin.example.com</code> to a different page directory than the rest of your Folio pages. You may accomplish this by invoking the <code>domain</code> method after invoking the <code>Folio::path</code> method:</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">Laravel<span class="token punctuation">\\</span>Folio<span class="token punctuation">\\</span>Folio</span><span class="token punctuation">;</span>

<span class="token class-name static-context">Folio</span><span class="token operator">::</span><span class="token function">domain</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;admin.example.com&#39;</span><span class="token punctuation">)</span>
    <span class="token operator">-&gt;</span><span class="token function">path</span><span class="token punctuation">(</span><span class="token function">resource_path</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;views/pages/admin&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The <code>domain</code> method also allows you to capture parts of the domain or subdomain as parameters. These parameters will be injected into your page template:</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">Laravel<span class="token punctuation">\\</span>Folio<span class="token punctuation">\\</span>Folio</span><span class="token punctuation">;</span>

<span class="token class-name static-context">Folio</span><span class="token operator">::</span><span class="token function">domain</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;{account}.example.com&#39;</span><span class="token punctuation">)</span>
    <span class="token operator">-&gt;</span><span class="token function">path</span><span class="token punctuation">(</span><span class="token function">resource_path</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;views/pages/admin&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="creating-routes"></a></p><h2 id="creating-routes" tabindex="-1"><a class="header-anchor" href="#creating-routes" aria-hidden="true">#</a> Creating Routes</h2><p>You may create a Folio route by placing a Blade template in any of your Folio mounted directories. By default, Folio mounts the <code>resources/views/pages</code> directory, but you may customize these directories in your Folio service provider&#39;s <code>boot</code> method.</p><p>Once a Blade template has been placed in a Folio mounted directory, you may immediately access it via your browser. For example, a page placed in <code>pages/schedule.blade.php</code> may be accessed in your browser at <code>http://example.com/schedule</code>.</p><p>To quickly view a list of all of your Folio pages / routes, you may invoke the <code>folio:list</code> Artisan command:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan folio:list
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a name="nested-routes"></a></p><h3 id="nested-routes" tabindex="-1"><a class="header-anchor" href="#nested-routes" aria-hidden="true">#</a> Nested Routes</h3><p>You may create a nested route by creating one or more directories within one of Folio&#39;s directories. For instance, to create a page that is accessible via <code>/user/profile</code>, create a <code>profile.blade.php</code> template within the <code>pages/user</code> directory:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan make:folio user/profile

<span class="token comment"># pages/user/profile.blade.php → /user/profile</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="index-routes"></a></p><h3 id="index-routes" tabindex="-1"><a class="header-anchor" href="#index-routes" aria-hidden="true">#</a> Index Routes</h3><p>Sometimes, you may wish to make a given page the &quot;index&quot; of a directory. By placing an <code>index.blade.php</code> template within a Folio directory, any requests to the root of that directory will be routed to that page:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan make:folio index
<span class="token comment"># pages/index.blade.php → /</span>

php artisan make:folio users/index
<span class="token comment"># pages/users/index.blade.php → /users</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="route-parameters"></a></p><h2 id="route-parameters" tabindex="-1"><a class="header-anchor" href="#route-parameters" aria-hidden="true">#</a> Route Parameters</h2><p>Often, you will need to have segments of the incoming request&#39;s URL injected into your page so that you can interact with them. For example, you may need to access the &quot;ID&quot; of the user whose profile is being displayed. To accomplish this, you may encapsulate a segment of the page&#39;s filename in square brackets:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan make:folio <span class="token string">&quot;users/[id]&quot;</span>

<span class="token comment"># pages/users/[id].blade.php → /users/1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Captured segments can be accessed as variables within your Blade template:</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
    User {{ $id }}
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>To capture multiple segments, you can prefix the encapsulated segment with three dots <code>...</code>:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan make:folio <span class="token string">&quot;users/[...ids]&quot;</span>

<span class="token comment"># pages/users/[...ids].blade.php → /users/1/2/3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>When capturing multiple segments, the captured segments will be injected into the page as an array:</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">&gt;</span></span>
    @foreach ($ids as $id)
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>User {{ $id }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
    @endforeach
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="route-model-binding"></a></p><h2 id="route-model-binding" tabindex="-1"><a class="header-anchor" href="#route-model-binding" aria-hidden="true">#</a> Route Model Binding</h2><p>If a wildcard segment of your page template&#39;s filename corresponds one of your application&#39;s Eloquent models, Folio will automatically take advantage of Laravel&#39;s route model binding capabilities and attempt to inject the resolved model instance into your page:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan make:folio <span class="token string">&quot;users/[User]&quot;</span>

<span class="token comment"># pages/users/[User].blade.php → /users/1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Captured models can be accessed as variables within your Blade template. The model&#39;s variable name will be converted to &quot;camel case&quot;:</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
    User {{ $user-&gt;id }}
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="customizing-the-key" tabindex="-1"><a class="header-anchor" href="#customizing-the-key" aria-hidden="true">#</a> Customizing The Key</h4><p>Sometimes you may wish to resolve bound Eloquent models using a column other than <code>id</code>. To do so, you may specify the column in the page&#39;s filename. For example, a page with the filename <code>[Post:slug].blade.php</code> will attempt to resolve the bound model via the <code>slug</code> column instead of the <code>id</code> column.</p><p>On Windows, you should use <code>-</code> to separate the model name from the key: <code>[Post-slug].blade.php</code>.</p><h4 id="model-location" tabindex="-1"><a class="header-anchor" href="#model-location" aria-hidden="true">#</a> Model Location</h4><p>By default, Folio will search for your model within your application&#39;s <code>app/Models</code> directory. However, if needed, you may specify the fully-qualified model class name in your template&#39;s filename:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan make:folio <span class="token string">&quot;users/[.App.Models.User]&quot;</span>

<span class="token comment"># pages/users/[.App.Models.User].blade.php → /users/1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="soft-deleted-models"></a></p><h3 id="soft-deleted-models" tabindex="-1"><a class="header-anchor" href="#soft-deleted-models" aria-hidden="true">#</a> Soft Deleted Models</h3><p>By default, models that have been soft deleted are not retrieved when resolving implicit model bindings. However, if you wish, you can instruct Folio to retrieve soft deleted models by invoking the <code>withTrashed</code> function within the page&#39;s template:</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>

<span class="token keyword">use</span> <span class="token package">function</span> Laravel\\Folio\\<span class="token punctuation">{</span>withTrashed<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token function">withTrashed</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token delimiter important">?&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
    User {{ $user-&gt;id }}
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="render-hooks"></a></p><h2 id="render-hooks" tabindex="-1"><a class="header-anchor" href="#render-hooks" aria-hidden="true">#</a> Render Hooks</h2><p>By default, Folio will return the content of the page&#39;s Blade template as the response to the incoming request. However, you may customize the response by invoking the <code>render</code> function within the page&#39;s template.</p><p>The <code>render</code> function accepts a closure which will receive the <code>View</code> instance being rendered by Folio, allowing you to add additional data to the view or customize the entire response. In addition to receiving the <code>View</code> instance, any additional route parameters or model bindings will also be provided to the <code>render</code> closure:</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>

<span class="token keyword">use</span> <span class="token package">App<span class="token punctuation">\\</span>Models<span class="token punctuation">\\</span>Post</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Support<span class="token punctuation">\\</span>Facades<span class="token punctuation">\\</span>Auth</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>View<span class="token punctuation">\\</span>View</span><span class="token punctuation">;</span>

<span class="token keyword">use</span> <span class="token keyword">function</span> <span class="token package">Laravel<span class="token punctuation">\\</span>Folio<span class="token punctuation">\\</span>render</span><span class="token punctuation">;</span>

<span class="token function">render</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token class-name type-declaration">View</span> <span class="token variable">$view</span><span class="token punctuation">,</span> <span class="token class-name type-declaration">Post</span> <span class="token variable">$post</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span> <span class="token class-name static-context">Auth</span><span class="token operator">::</span><span class="token function">user</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">can</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;view&#39;</span><span class="token punctuation">,</span> <span class="token variable">$post</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">response</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;Unauthorized&#39;</span><span class="token punctuation">,</span> <span class="token number">403</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token variable">$view</span><span class="token operator">-&gt;</span><span class="token function">with</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;photos&#39;</span><span class="token punctuation">,</span> <span class="token variable">$post</span><span class="token operator">-&gt;</span><span class="token property">author</span><span class="token operator">-&gt;</span><span class="token property">photos</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token delimiter important">?&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
    {{ $post-&gt;content }}
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
    This author has also taken {{ count($photos) }} photos.
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="named-routes"></a></p><h2 id="named-routes" tabindex="-1"><a class="header-anchor" href="#named-routes" aria-hidden="true">#</a> Named Routes</h2><p>You may specify a name for a given page&#39;s route using the <code>name</code> function:</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>

<span class="token keyword">use</span> <span class="token keyword">function</span> <span class="token package">Laravel<span class="token punctuation">\\</span>Folio<span class="token punctuation">\\</span>name</span><span class="token punctuation">;</span>

<span class="token function">name</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;users.index&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Just like Laravel&#39;s named routes, you may use the <code>route</code> function to generate URLs to Folio pages that have been assigned a name:</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token operator">&lt;</span>a href<span class="token operator">=</span><span class="token string double-quoted-string">&quot;{{ route(&#39;users.index&#39;) }}&quot;</span><span class="token operator">&gt;</span>
    All Users
<span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>If the page has parameters, you may simply pass their values to the <code>route</code> function:</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token function">route</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;users.show&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;user&#39;</span> <span class="token operator">=&gt;</span> <span class="token variable">$user</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a name="middleware"></a></p><h2 id="middleware" tabindex="-1"><a class="header-anchor" href="#middleware" aria-hidden="true">#</a> Middleware</h2><p>You can apply middleware to a specific page by invoking the <code>middleware</code> function within the page&#39;s template:</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>

<span class="token keyword">use</span> <span class="token package">function</span> Laravel\\Folio\\<span class="token punctuation">{</span>middleware<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token function">middleware</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;auth&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;verified&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token delimiter important">?&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
    Dashboard
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Or, to assign middleware to a group of pages, you may chain the <code>middleware</code> method after invoking the <code>Folio::path</code> method.</p><p>To specify which pages the middleware should be applied to, the array of middleware may be keyed using the corresponding URL patterns of the pages they should be applied to. The <code>*</code> character may be utilized as a wildcard character:</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">Laravel<span class="token punctuation">\\</span>Folio<span class="token punctuation">\\</span>Folio</span><span class="token punctuation">;</span>

<span class="token class-name static-context">Folio</span><span class="token operator">::</span><span class="token function">path</span><span class="token punctuation">(</span><span class="token function">resource_path</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;views/pages&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">middleware</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
    <span class="token string single-quoted-string">&#39;admin/*&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>
        <span class="token string single-quoted-string">&#39;auth&#39;</span><span class="token punctuation">,</span>
        <span class="token string single-quoted-string">&#39;verified&#39;</span><span class="token punctuation">,</span>

        <span class="token comment">// ...</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>You may include closures in the array of middleware to define inline, anonymous middleware:</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">Closure</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Http<span class="token punctuation">\\</span>Request</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Laravel<span class="token punctuation">\\</span>Folio<span class="token punctuation">\\</span>Folio</span><span class="token punctuation">;</span>

<span class="token class-name static-context">Folio</span><span class="token operator">::</span><span class="token function">path</span><span class="token punctuation">(</span><span class="token function">resource_path</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;views/pages&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">middleware</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
    <span class="token string single-quoted-string">&#39;admin/*&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>
        <span class="token string single-quoted-string">&#39;auth&#39;</span><span class="token punctuation">,</span>
        <span class="token string single-quoted-string">&#39;verified&#39;</span><span class="token punctuation">,</span>

        <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token class-name type-declaration">Request</span> <span class="token variable">$request</span><span class="token punctuation">,</span> <span class="token class-name type-declaration">Closure</span> <span class="token variable">$next</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// ...</span>

            <span class="token keyword">return</span> <span class="token variable">$next</span><span class="token punctuation">(</span><span class="token variable">$request</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="route-caching"></a></p><h2 id="route-caching" tabindex="-1"><a class="header-anchor" href="#route-caching" aria-hidden="true">#</a> Route Caching</h2><p>When using Folio, you should always take advantage of <a href="./routing#route-caching">Laravel&#39;s route caching capabilities</a>. Folio listens for the <code>route:cache</code> Artisan command to ensure that Folio page definitions and route names are properly cached for maximum performance.</p>`,85);function v(h,k){const e=o("ExternalLinkIcon");return i(),p("div",null,[d,a("p",null,[a("a",u,[n("Laravel Folio"),l(e)]),n(" is a powerful page based router designed to simplify routing in Laravel applications. With Laravel Folio, generating a route becomes as effortless as creating a Blade template within your application's "),r,n(" directory.")]),m])}const f=t(c,[["render",v],["__file","folio.html.vue"]]);export{f as default};
