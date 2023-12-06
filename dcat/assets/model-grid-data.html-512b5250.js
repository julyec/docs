import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{r as i,o as c,c as l,a as s,b as n,d as e,w as t,e as p}from"./app-c17653d8.js";const r={},u=s("h1",{id:"tabular-data-sources",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#tabular-data-sources","aria-hidden":"true"},"#"),n(" Tabular data sources")],-1),d=s("code",null,"Repository",-1),k=p(`<blockquote><p>{tip} The data for the table is obtained through the <code>Dcat\\Admin\\Contracts\\Repository::get</code> interface.</p></blockquote><h2 id="data-from-the-model" tabindex="-1"><a class="header-anchor" href="#data-from-the-model" aria-hidden="true">#</a> Data from the model</h2><blockquote><p>{tip} If your data comes from <code>Model</code>, then you can also use the <code>Model</code> instance directly, and the underlying layer will automatically convert <code>Model</code> into a repository instance.</p></blockquote><p>When the data source supports <code>Eloquent Model</code>, just create a simple <code>Repository</code> class that inherits <code>Dcat\\Admin\\Repositories\\EloquentRepository</code>.</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>

<span class="token keyword">namespace</span> <span class="token package">App<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Repositories</span><span class="token punctuation">;</span>

<span class="token keyword">use</span> <span class="token package">Dcat<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Repositories<span class="token punctuation">\\</span>EloquentRepository</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">App<span class="token punctuation">\\</span>Models<span class="token punctuation">\\</span>Movie</span> <span class="token keyword">as</span> MovieModel<span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">Movie</span> <span class="token keyword">extends</span> <span class="token class-name">EloquentRepository</span>
<span class="token punctuation">{</span>
    <span class="token comment">// Define your model class name here</span>
    <span class="token keyword">protected</span> <span class="token variable">$eloquentClass</span> <span class="token operator">=</span> <span class="token class-name static-context">MovieModel</span><span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">;</span>
    
    <span class="token comment">// With this method you can specify the field of the query, default &quot;*&quot;</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">getGridColumns</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">getKeyName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;name&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;title&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;created_at&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="use-the-model-directly" tabindex="-1"><a class="header-anchor" href="#use-the-model-directly" aria-hidden="true">#</a> Use the model directly</h3><p>If you still find it troublesome to create the <code>Repository</code> class, you can also pass the instance of <code>Eloquent Model</code> directly into the <code>Grid</code>, and the underlying layer will automatically convert <code>Eloquent Model</code> into an instance of <code>EloquentRepository</code>.</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">App<span class="token punctuation">\\</span>Models<span class="token punctuation">\\</span>Movie</span> <span class="token keyword">as</span> MovieModel<span class="token punctuation">;</span>

<span class="token variable">$grid</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Grid</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">MovieModel</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token operator">...</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="modify-source-data" tabindex="-1"><a class="header-anchor" href="#modify-source-data" aria-hidden="true">#</a> Modify source data</h3><p>1、use <code>Grid\\Model</code></p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">App<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Repositories<span class="token punctuation">\\</span>Movie</span><span class="token punctuation">;</span>

<span class="token variable">$grid</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Grid</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Movie</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Add default query conditions</span>
<span class="token variable">$grid</span><span class="token operator">-&gt;</span><span class="token function">model</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">where</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;id&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;&gt;&#39;</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Set initial sort criteria</span>
<span class="token variable">$grid</span><span class="token operator">-&gt;</span><span class="token function">model</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">orderBy</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;id&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;desc&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token operator">...</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Other queries can refer to the <code>eloquent</code> query method.</p><p>2、use <code>Model Query</code></p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">App<span class="token punctuation">\\</span>Models<span class="token punctuation">\\</span>Movie</span> <span class="token keyword">as</span> MovieModel<span class="token punctuation">;</span>

<span class="token variable">$grid</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Grid</span><span class="token punctuation">(</span><span class="token class-name static-context">MovieModel</span><span class="token operator">::</span><span class="token function">where</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;id&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;&gt;&#39;</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token operator">...</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="associated-data" tabindex="-1"><a class="header-anchor" href="#associated-data" aria-hidden="true">#</a> Associated data</h3><p>There are three ways to make your forms support Linked Data</p><p>1、Using the Repository</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">App<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Repositories<span class="token punctuation">\\</span>Movie</span><span class="token punctuation">;</span>

<span class="token comment">// Equivalent to MovieModel::with(&#39;categories&#39;)</span>
<span class="token variable">$grid</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Grid</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Movie</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;categories&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token variable">$grid</span><span class="token operator">-&gt;</span><span class="token property">categories</span><span class="token punctuation">;</span>

<span class="token operator">...</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2、use <code>Grid\\Model</code></p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">App<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Repositories<span class="token punctuation">\\</span>Movie</span><span class="token punctuation">;</span>

<span class="token variable">$grid</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Grid</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Movie</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token variable">$grid</span><span class="token operator">-&gt;</span><span class="token function">model</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">with</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;categories&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token variable">$grid</span><span class="token operator">-&gt;</span><span class="token property">categories</span><span class="token punctuation">;</span>

<span class="token operator">...</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3、use <code>Model Query</code></p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">App<span class="token punctuation">\\</span>Models<span class="token punctuation">\\</span>Movie</span> <span class="token keyword">as</span> MovieModel<span class="token punctuation">;</span>

<span class="token variable">$grid</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Grid</span><span class="token punctuation">(</span><span class="token class-name static-context">MovieModel</span><span class="token operator">::</span><span class="token function">with</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;categories&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token variable">$grid</span><span class="token operator">-&gt;</span><span class="token property">categories</span><span class="token punctuation">;</span>

<span class="token operator">...</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="data-from-external-api" tabindex="-1"><a class="header-anchor" href="#data-from-external-api" aria-hidden="true">#</a> Data from external API</h2><h3 id="example" tabindex="-1"><a class="header-anchor" href="#example" aria-hidden="true">#</a> Example</h3><p>If the data is from an external API simply override the <code>get</code> method of the <code>Repository</code>. For specific usage, refer to the following Example, which uses the <code>Douban movie</code> API to obtain and display data.</p>`,25),v=s("code",null,"get",-1),m=p(`<div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
<span class="token keyword">namespace</span> <span class="token package">App<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Repositories</span><span class="token punctuation">;</span>

<span class="token keyword">use</span> <span class="token package">Dcat<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Grid</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Dcat<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Repositories<span class="token punctuation">\\</span>Repository</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Pagination<span class="token punctuation">\\</span>LengthAwarePaginator</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">ComingSoon</span> <span class="token keyword">extends</span> <span class="token class-name">Repository</span>
<span class="token punctuation">{</span>
    <span class="token keyword">protected</span> <span class="token variable">$api</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;https://api.douban.com/v2/movie/coming_soon&#39;</span><span class="token punctuation">;</span>
    
    <span class="token doc-comment comment">/**
     * Defining Primary Key Field Names 
     * 
     * <span class="token keyword">@return</span> <span class="token class-name"><span class="token keyword">string</span></span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">getPrimaryKeyColumn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string single-quoted-string">&#39;_id&#39;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * Inquiry Form Data
     *
     * <span class="token keyword">@param</span> <span class="token class-name">Grid<span class="token punctuation">\\</span>Model</span> <span class="token parameter">$model</span>
     * <span class="token keyword">@return</span> <span class="token class-name">LengthAwarePaginator</span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">get</span><span class="token punctuation">(</span><span class="token class-name class-name-fully-qualified type-declaration">Grid<span class="token punctuation">\\</span>Model</span> <span class="token variable">$model</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// Current number of pages</span>
		<span class="token variable">$currentPage</span> <span class="token operator">=</span> <span class="token variable">$model</span><span class="token operator">-&gt;</span><span class="token function">getCurrentPage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token comment">// Number of lines per page</span>
		<span class="token variable">$perPage</span> <span class="token operator">=</span> <span class="token variable">$model</span><span class="token operator">-&gt;</span><span class="token function">getPerPage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

		<span class="token comment">// Get the sort field</span>
		<span class="token punctuation">[</span><span class="token variable">$orderColumn</span><span class="token punctuation">,</span> <span class="token variable">$orderType</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token variable">$model</span><span class="token operator">-&gt;</span><span class="token function">getSort</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

		<span class="token comment">// Get &quot;scope&quot; filter value</span>
		<span class="token variable">$city</span> <span class="token operator">=</span> <span class="token variable">$model</span><span class="token operator">-&gt;</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">input</span><span class="token punctuation">(</span><span class="token class-name class-name-fully-qualified static-context">Grid<span class="token punctuation">\\</span>Filter<span class="token punctuation">\\</span>Scope</span><span class="token operator">::</span><span class="token constant">QUERY_NAME</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;Guangzhou&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		
		<span class="token comment">// If other filter fields are set, values can also be obtained by the &quot;input&quot; method, e.g..</span>
		<span class="token variable">$title</span> <span class="token operator">=</span> <span class="token variable">$model</span><span class="token operator">-&gt;</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">input</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;title&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token variable">$title</span> <span class="token operator">!==</span> <span class="token constant">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token comment">// Execute your filtering logic</span>
			
		<span class="token punctuation">}</span>

		<span class="token variable">$start</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token variable">$currentPage</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token variable">$perPage</span><span class="token punctuation">;</span>

		<span class="token variable">$client</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name class-name-fully-qualified"><span class="token punctuation">\\</span>GuzzleHttp<span class="token punctuation">\\</span>Client</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

		<span class="token variable">$response</span> <span class="token operator">=</span> <span class="token variable">$client</span><span class="token operator">-&gt;</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;<span class="token interpolation"><span class="token punctuation">{</span><span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">api</span><span class="token punctuation">}</span></span>?<span class="token interpolation"><span class="token punctuation">{</span><span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">apiKey</span><span class="token punctuation">}</span></span>&amp;city=<span class="token interpolation"><span class="token variable">$city</span></span>&amp;start=<span class="token interpolation"><span class="token variable">$start</span></span>&amp;count=<span class="token interpolation"><span class="token variable">$perPage</span></span>&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token variable">$data</span> <span class="token operator">=</span> <span class="token function">json_decode</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token keyword type-casting">string</span><span class="token punctuation">)</span><span class="token variable">$response</span><span class="token operator">-&gt;</span><span class="token function">getBody</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token constant boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

		<span class="token keyword">return</span> <span class="token variable">$model</span><span class="token operator">-&gt;</span><span class="token function">makePaginator</span><span class="token punctuation">(</span>
            <span class="token variable">$data</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;total&#39;</span><span class="token punctuation">]</span> <span class="token operator">??</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token comment">// Total number of incoming records</span>
            <span class="token variable">$data</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;subjects&#39;</span><span class="token punctuation">]</span> <span class="token operator">??</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token comment">// Two-dimensional array of incoming data</span>
		<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="grid-model-common-methods" tabindex="-1"><a class="header-anchor" href="#grid-model-common-methods" aria-hidden="true">#</a> Grid\\Model Common Methods</h3><h4 id="gets-current-page-getcurrentpage" tabindex="-1"><a class="header-anchor" href="#gets-current-page-getcurrentpage" aria-hidden="true">#</a> gets current page (getCurrentPage)</h4><p>Get the current page number</p><ul><li>Return value: <code>int|null</code> If paging is not allowed, return null.</li></ul><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token variable">$page</span> <span class="token operator">=</span> <span class="token variable">$model</span><span class="token operator">-&gt;</span><span class="token function">getCurrentPage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="get-number-of-lines-per-page-getperpage" tabindex="-1"><a class="header-anchor" href="#get-number-of-lines-per-page-getperpage" aria-hidden="true">#</a> get number of lines per page (getPerPage)</h4><p>Get the number of lines per page</p><ul><li>Return value: <code>int|null</code> If paging is not allowed, return null.</li></ul><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token variable">$limit</span> <span class="token operator">=</span> <span class="token variable">$model</span><span class="token operator">-&gt;</span><span class="token function">getPerPage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="getsort-field-getsort" tabindex="-1"><a class="header-anchor" href="#getsort-field-getsort" aria-hidden="true">#</a> getSort field (getSort)</h4><p>Get sort field</p><ul><li>Return value: <code>array</code> <code>[$orderColumn, &#39;desc&#39;|&#39;asc&#39;]</code> || <code>[null, null]</code></li></ul><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token comment">// $orderColumn field name is null if not sorted.</span>
<span class="token comment">// $orderType ascending or descending: &quot;desc&quot;, &quot;asc&quot;, null if not sorted.</span>
<span class="token keyword">list</span><span class="token punctuation">(</span><span class="token variable">$orderColumn</span><span class="token punctuation">,</span> <span class="token variable">$orderType</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token variable">$model</span><span class="token operator">-&gt;</span><span class="token function">getSort</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="get-filter-object-filter" tabindex="-1"><a class="header-anchor" href="#get-filter-object-filter" aria-hidden="true">#</a> get filter object (filter)</h4><p>Get the filter object, through the filter object can get the value of the search form, Usages are as follows</p><ul><li>Return Value <code>Dcat\\Admin\\Grid\\Filter</code></li></ul><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token comment">// Get &quot;scope&quot; filter value</span>
<span class="token variable">$city</span> <span class="token operator">=</span> <span class="token variable">$model</span><span class="token operator">-&gt;</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">input</span><span class="token punctuation">(</span><span class="token class-name class-name-fully-qualified static-context">Grid<span class="token punctuation">\\</span>Filter<span class="token punctuation">\\</span>Scope</span><span class="token operator">::</span><span class="token constant">QUERY_NAME</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;Guangzhou&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// If other filter fields are set, values can also be obtained by the &quot;input&quot; method, e.g..</span>
<span class="token variable">$title</span> <span class="token operator">=</span> <span class="token variable">$model</span><span class="token operator">-&gt;</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">input</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;title&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token variable">$title</span> <span class="token operator">!==</span> <span class="token constant">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// Execute your filtering logic</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="get-quick-search-form-values" tabindex="-1"><a class="header-anchor" href="#get-quick-search-form-values" aria-hidden="true">#</a> Get Quick Search Form Values</h4><p>The Quick Search form values can be retrieved in the following ways</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token variable">$quickSearch</span> <span class="token operator">=</span> <span class="token variable">$model</span><span class="token operator">-&gt;</span><span class="token function">grid</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">quickSearch</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">value</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="data-from-complex-sql-queries" tabindex="-1"><a class="header-anchor" href="#data-from-complex-sql-queries" aria-hidden="true">#</a> Data from complex SQL queries</h2><p>If the source data needs to be retrieved with a complex SQL statement, there are two ways to do it, the first being the above method. Override the <code>get</code> method implementation of <code>Repository</code>.</p>`,23),g=s("code",null,"get",-1);function b(h,f){const a=i("RouterLink");return c(),l("div",null,[u,s("p",null,[n("A data warehouse ("),d,n(") is a class that provides a specific interface for reading and writing operations on data. With the introduction of the data warehouse, it is possible to build pages that do not care about the specific implementation of the read and write functions of the data, developers only need to implement a specific interface to easily switch data sources. For detailed Usages of the data warehouse, please refer to the document "),e(a,{to:"/guide/model-repository.html"},{default:t(()=>[n("data warehouse")]),_:1}),n(".")]),k,s("blockquote",null,[s("p",null,[n("{tip} It should be noted that the "),v,n(" method returns different types of parameter values for paginated and unpaginated cases, see "),e(a,{to:"/guide/model-repository.html#get"},{default:t(()=>[n("data warehouse - get")]),_:1}),n(".")])]),m,s("blockquote",null,[s("p",null,[n("{tip} It should be noted that the "),g,n(" method returns different types of parameter values for paginated and unpaginated cases, see "),e(a,{to:"/guide/model-repository.html#get"},{default:t(()=>[n("data warehouse - get")]),_:1}),n(".")])])])}const q=o(r,[["render",b],["__file","model-grid-data.html.vue"]]);export{q as default};