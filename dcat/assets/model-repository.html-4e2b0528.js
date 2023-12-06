import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e}from"./app-c17653d8.js";const t={},p=e(`<h1 id="repository" tabindex="-1"><a class="header-anchor" href="#repository" aria-hidden="true">#</a> Repository</h1><p>Data warehouse (<code>Repository</code>) is a concrete implementation of the <code>Dcat Admin</code> interface for data add/drop operations. The intervention of <code>Repository</code> can make the construction of the page no longer care about the specific implementation of the data read and write functions. Developers through the implementation of the <code>Repository</code> interface can read and write operations on the data.</p><blockquote><p>{tip} Of course, for your convenience the system also retains the ability to use <code>Model</code> directly, the underlying layer will automatically convert <code>Model</code> to a repository instance, after all, most of the time the direct use of <code>Model</code> can also meet our needs.</p></blockquote><p>Components such as data table <code>Grid</code>, data form <code>Form</code>, data detail <code>Show</code>, <code>Tree</code>, etc. no longer depend directly on <code>Model</code>, but on a repository that provides simpler and clearer interfaces, the following are all the interfaces of <code>Repository</code>.</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>

<span class="token keyword">namespace</span> <span class="token package">Dcat<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Contracts</span><span class="token punctuation">;</span>

<span class="token keyword">use</span> <span class="token package">Dcat<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Form</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Dcat<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Grid</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Dcat<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Show</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Support<span class="token punctuation">\\</span>Collection</span><span class="token punctuation">;</span>

<span class="token keyword">interface</span> <span class="token class-name-definition class-name">Repository</span>
<span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * Get Primary Key Name.
     *
     * <span class="token keyword">@return</span> <span class="token class-name"><span class="token keyword">string</span></span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">getKeyName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * Get creation time field
     *
     * <span class="token keyword">@return</span> <span class="token class-name"><span class="token keyword">string</span></span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">getCreatedAtColumn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * Get update time field
     *
     * <span class="token keyword">@return</span> <span class="token class-name"><span class="token keyword">string</span></span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">getUpdatedAtColumn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * Whether to use soft deletes
     *
     * <span class="token keyword">@return</span> <span class="token class-name"><span class="token keyword">bool</span></span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">isSoftDeletes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * Get Grid Data
     *
     * <span class="token keyword">@param</span> <span class="token class-name">Grid<span class="token punctuation">\\</span>Model</span> <span class="token parameter">$model</span>
     *
     * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">\\</span>Illuminate<span class="token punctuation">\\</span>Contracts<span class="token punctuation">\\</span>Pagination<span class="token punctuation">\\</span>LengthAwarePaginator<span class="token punctuation">|</span>Collection<span class="token punctuation">|</span><span class="token keyword">array</span></span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">get</span><span class="token punctuation">(</span><span class="token class-name class-name-fully-qualified type-declaration">Grid<span class="token punctuation">\\</span>Model</span> <span class="token variable">$model</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * Get Edit Page Data
     *
     * <span class="token keyword">@param</span> <span class="token class-name">Form</span> <span class="token parameter">$form</span>
     *
     * <span class="token keyword">@return</span> <span class="token class-name"><span class="token keyword">array</span><span class="token punctuation">|</span><span class="token punctuation">\\</span>Illuminate<span class="token punctuation">\\</span>Contracts<span class="token punctuation">\\</span>Support<span class="token punctuation">\\</span>Arrayable</span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">edit</span><span class="token punctuation">(</span><span class="token class-name type-declaration">Form</span> <span class="token variable">$form</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * Get details page data
     *
     * <span class="token keyword">@param</span> <span class="token class-name">Show</span> <span class="token parameter">$show</span>
     *
     * <span class="token keyword">@return</span> <span class="token class-name"><span class="token keyword">array</span><span class="token punctuation">|</span><span class="token punctuation">\\</span>Illuminate<span class="token punctuation">\\</span>Contracts<span class="token punctuation">\\</span>Support<span class="token punctuation">\\</span>Arrayable</span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">detail</span><span class="token punctuation">(</span><span class="token class-name type-declaration">Show</span> <span class="token variable">$show</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * New record
     *
     * <span class="token keyword">@param</span> <span class="token class-name">Form</span> <span class="token parameter">$form</span>
     *
     * <span class="token keyword">@return</span> <span class="token class-name"><span class="token keyword">mixed</span></span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">store</span><span class="token punctuation">(</span><span class="token class-name type-declaration">Form</span> <span class="token variable">$form</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * Query the row data before updating
     *
     * <span class="token keyword">@param</span> <span class="token class-name">Form</span> <span class="token parameter">$form</span>
     *
     * <span class="token keyword">@return</span> <span class="token class-name"><span class="token keyword">array</span><span class="token punctuation">|</span><span class="token punctuation">\\</span>Illuminate<span class="token punctuation">\\</span>Contracts<span class="token punctuation">\\</span>Support<span class="token punctuation">\\</span>Arrayable</span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">updating</span><span class="token punctuation">(</span><span class="token class-name type-declaration">Form</span> <span class="token variable">$form</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * Update data
     *
     * <span class="token keyword">@param</span> <span class="token class-name">Form</span> <span class="token parameter">$form</span>
     *
     * <span class="token keyword">@return</span> <span class="token class-name"><span class="token keyword">bool</span></span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">update</span><span class="token punctuation">(</span><span class="token class-name type-declaration">Form</span> <span class="token variable">$form</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * Delete data
     *
     * <span class="token keyword">@param</span> <span class="token class-name">Form</span>  <span class="token parameter">$form</span>
     * <span class="token keyword">@param</span> <span class="token class-name"><span class="token keyword">array</span></span> <span class="token parameter">$deletingData</span>
     *
     * <span class="token keyword">@return</span> <span class="token class-name"><span class="token keyword">mixed</span></span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">delete</span><span class="token punctuation">(</span><span class="token class-name type-declaration">Form</span> <span class="token variable">$form</span><span class="token punctuation">,</span> <span class="token keyword type-hint">array</span> <span class="token variable">$deletingData</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * Row data before deletion
     *
     * <span class="token keyword">@param</span> <span class="token class-name">Form</span> <span class="token parameter">$form</span>
     *
     * <span class="token keyword">@return</span> <span class="token class-name"><span class="token keyword">array</span><span class="token punctuation">|</span><span class="token punctuation">\\</span>Illuminate<span class="token punctuation">\\</span>Contracts<span class="token punctuation">\\</span>Support<span class="token punctuation">\\</span>Arrayable</span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">deleting</span><span class="token punctuation">(</span><span class="token class-name type-declaration">Form</span> <span class="token variable">$form</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>If your data is multi-level structured, you will also need to implement the following interfaces</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>

<span class="token keyword">namespace</span> <span class="token package">Dcat<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Contracts</span><span class="token punctuation">;</span>

<span class="token keyword">interface</span> <span class="token class-name-definition class-name">TreeRepository</span>
<span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * Get the primary key field name.
     *
     * <span class="token keyword">@return</span> <span class="token class-name"><span class="token keyword">string</span></span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">getPrimaryKeyColumn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * Get the parent ID field name.
     *
     * <span class="token keyword">@return</span> <span class="token class-name"><span class="token keyword">string</span></span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">getParentColumn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * Get the TITLE field name
     *
     * <span class="token keyword">@return</span> <span class="token class-name"><span class="token keyword">string</span></span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">getTitleColumn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * Get the sort field name
     *
     * <span class="token keyword">@return</span> <span class="token class-name"><span class="token keyword">string</span></span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">getOrderColumn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * Saving hierarchical data sorting
     *
     * <span class="token keyword">@param</span> <span class="token class-name"><span class="token keyword">array</span></span> <span class="token parameter">$tree</span>
     * <span class="token keyword">@param</span> <span class="token class-name"><span class="token keyword">int</span></span>   <span class="token parameter">$parentId</span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">saveOrder</span><span class="token punctuation">(</span><span class="token variable">$tree</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token variable">$parentId</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * Setting Data Query Callbacks
     *
     * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">\\</span>Closure<span class="token punctuation">|</span><span class="token keyword">null</span></span> <span class="token parameter">$query</span>
     *
     * <span class="token keyword">@return</span> $this
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">withQuery</span><span class="token punctuation">(</span><span class="token variable">$queryCallback</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * Get hierarchical data.
     *
     * <span class="token keyword">@return</span> <span class="token class-name"><span class="token keyword">array</span></span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">toTree</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="repository-interface" tabindex="-1"><a class="header-anchor" href="#repository-interface" aria-hidden="true">#</a> Repository Interface</h2><h3 id="getkeyname" tabindex="-1"><a class="header-anchor" href="#getkeyname" aria-hidden="true">#</a> getKeyName</h3><p>This interface requires the primary key field name of the returned data to return a value of type <code>string</code>.</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">getKeyName</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string single-quoted-string">&#39;id&#39;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="getcreatedatcolumn" tabindex="-1"><a class="header-anchor" href="#getcreatedatcolumn" aria-hidden="true">#</a> getCreatedAtColumn</h3><p>This interface requires the <code>created_at</code> field name of the data to be returned, or an empty string or <code>null</code> value if there is no value.</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>    <span class="token comment">// Returns a null string or \`null\` value if there is no value</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">getCreatedAtColumn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string single-quoted-string">&#39;created_at&#39;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="getupdatedatcolumn" tabindex="-1"><a class="header-anchor" href="#getupdatedatcolumn" aria-hidden="true">#</a> getUpdatedAtColumn</h3><p>This interface requires the <code>updated_at</code> field name of the data to be returned, or an empty string or <code>null</code> value if there is no value.</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>    <span class="token comment">// Returns a null string or \`null\` value if there is no value</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">getCreatedAtColumn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string single-quoted-string">&#39;updated_at&#39;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="issoftdeletes" tabindex="-1"><a class="header-anchor" href="#issoftdeletes" aria-hidden="true">#</a> isSoftDeletes</h3><p>This interface requires the return of data to support soft delete or not, return a value of type <code>bool</code>.</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">isSoftDeletes</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token constant boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="get" tabindex="-1"><a class="header-anchor" href="#get" aria-hidden="true">#</a> get</h3><p>This interface requires the return of data from the data table <code>Grid</code> for data table presentation and requires a value of type <code>array</code>, <code>Illuminate\\Support\\Collection</code> or <code>LengthAwarePaginator</code>.</p><h4 id="pagination" tabindex="-1"><a class="header-anchor" href="#pagination" aria-hidden="true">#</a> pagination</h4><p>Requires the return of a <code>\\Illuminate\\Contracts\\Pagination\\LengthAwarePaginator</code> type value when data is to be paginated.</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">get</span><span class="token punctuation">(</span><span class="token class-name class-name-fully-qualified type-declaration">Grid<span class="token punctuation">\\</span>Model</span> <span class="token variable">$model</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// Get the current number of pages</span>
        <span class="token variable">$currentPage</span> <span class="token operator">=</span> <span class="token variable">$model</span><span class="token operator">-&gt;</span><span class="token function">getCurrentPage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// Get the number of lines per page</span>
        <span class="token variable">$perPage</span> <span class="token operator">=</span> <span class="token variable">$model</span><span class="token operator">-&gt;</span><span class="token function">getPerPage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// Get filter parameters</span>
        <span class="token variable">$city</span> <span class="token operator">=</span> <span class="token variable">$model</span><span class="token operator">-&gt;</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">input</span><span class="token punctuation">(</span><span class="token class-name class-name-fully-qualified static-context">Grid<span class="token punctuation">\\</span>Filter<span class="token punctuation">\\</span>Scope</span><span class="token operator">::</span><span class="token constant">QUERY_NAME</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;Guangzhou&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token variable">$start</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token variable">$currentPage</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token variable">$perPage</span><span class="token punctuation">;</span>

        <span class="token variable">$client</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name class-name-fully-qualified"><span class="token punctuation">\\</span>GuzzleHttp<span class="token punctuation">\\</span>Client</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token variable">$response</span> <span class="token operator">=</span> <span class="token variable">$client</span><span class="token operator">-&gt;</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;<span class="token interpolation"><span class="token punctuation">{</span><span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">api</span><span class="token punctuation">}</span></span>?<span class="token interpolation"><span class="token punctuation">{</span><span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">apiKey</span><span class="token punctuation">}</span></span>&amp;city=<span class="token interpolation"><span class="token variable">$city</span></span>&amp;start=<span class="token interpolation"><span class="token variable">$start</span></span>&amp;count=<span class="token interpolation"><span class="token variable">$perPage</span></span>&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token variable">$data</span> <span class="token operator">=</span> <span class="token function">json_decode</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token keyword type-casting">string</span><span class="token punctuation">)</span><span class="token variable">$response</span><span class="token operator">-&gt;</span><span class="token function">getBody</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token constant boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">return</span> <span class="token variable">$model</span><span class="token operator">-&gt;</span><span class="token function">makePaginator</span><span class="token punctuation">(</span>
            <span class="token variable">$data</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;total&#39;</span><span class="token punctuation">]</span> <span class="token operator">??</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token comment">// Total number of incoming records</span>
            <span class="token variable">$data</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;subjects&#39;</span><span class="token punctuation">]</span> <span class="token operator">??</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token comment">// Two-dimensional array of incoming data</span>
        <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="no-pagination" tabindex="-1"><a class="header-anchor" href="#no-pagination" aria-hidden="true">#</a> no pagination</h4><p>If paging is not required, simply return a value of type <code>array</code> or <code>Illuminate\\Support\\Collection</code>.</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">get</span><span class="token punctuation">(</span><span class="token class-name class-name-fully-qualified type-declaration">Grid<span class="token punctuation">\\</span>Model</span> <span class="token variable">$model</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">[</span>
            <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;id&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;name&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;n1&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;id&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;name&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;n2&#39;</span><span class="token punctuation">]</span>
        <span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Note that <code>grid</code> requires paging to be disabled!</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token variable">$grid</span><span class="token operator">-&gt;</span><span class="token function">disablePagination</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="edit" tabindex="-1"><a class="header-anchor" href="#edit" aria-hidden="true">#</a> edit</h3><p>This interface requires the return of data from a form edit page for displaying a data form edit page, and needs to return a value of type <code>array</code>.</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">edit</span><span class="token punctuation">(</span><span class="token class-name type-declaration">Form</span> <span class="token variable">$form</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">array</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// Get data primary key values</span>
        <span class="token variable">$id</span> <span class="token operator">=</span> <span class="token variable">$form</span><span class="token operator">-&gt;</span><span class="token function">getKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    
        <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;id&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;name&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;n1&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="detail" tabindex="-1"><a class="header-anchor" href="#detail" aria-hidden="true">#</a> detail</h3><p>This interface requires data from the Data Details page to be returned for displaying data details, and requires a value of type <code>array</code> to be returned.</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">detail</span><span class="token punctuation">(</span><span class="token class-name type-declaration">Show</span> <span class="token variable">$show</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">array</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// Get data primary key values</span>
        <span class="token variable">$id</span> <span class="token operator">=</span> <span class="token variable">$show</span><span class="token operator">-&gt;</span><span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    
        <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;id&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;name&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;n1&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="store" tabindex="-1"><a class="header-anchor" href="#store" aria-hidden="true">#</a> store</h3><p>This interface is used to add a new record and can return values of type <code>int</code>, <code>string</code> or <code>bool</code>.</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">store</span><span class="token punctuation">(</span><span class="token class-name type-declaration">Form</span> <span class="token variable">$form</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// Access to data to be added</span>
        <span class="token variable">$attributes</span> <span class="token operator">=</span> <span class="token variable">$form</span><span class="token operator">-&gt;</span><span class="token function">updates</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        <span class="token comment">// Implement your added logic.</span>
    
        <span class="token comment">// Return the new record id or bool value.</span>
        <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="updating" tabindex="-1"><a class="header-anchor" href="#updating" aria-hidden="true">#</a> updating</h3><p>This interface is used to query the raw record when the data form modifies the data, which needs to return a value of type <code>array</code> or <code>Model</code>.</p><blockquote><p>{tip} This interface is only used for some special fields, such as image and file upload fields, so when an image or file is changed, the old file can be deleted based on the data retrieved from this interface. So if your form does not use such special fields, this interface can return an empty array.</p></blockquote><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">updating</span><span class="token punctuation">(</span><span class="token class-name type-declaration">Form</span> <span class="token variable">$form</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// Get data primary key values</span>
        <span class="token variable">$id</span> <span class="token operator">=</span> <span class="token variable">$form</span><span class="token operator">-&gt;</span><span class="token function">getKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    
        <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;id&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;name&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;n1&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="update" tabindex="-1"><a class="header-anchor" href="#update" aria-hidden="true">#</a> update</h3><p>This interface is used to modify records for data forms, and can return values of type <code>int</code>, <code>string</code> or <code>bool</code>.</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">update</span><span class="token punctuation">(</span><span class="token class-name type-declaration">Form</span> <span class="token variable">$form</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// Access to data to be edited</span>
        <span class="token variable">$attributes</span> <span class="token operator">=</span> <span class="token variable">$form</span><span class="token operator">-&gt;</span><span class="token function">updates</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        <span class="token comment">// Execute your editing logic</span>
    
        <span class="token comment">// Return success</span>
        <span class="token keyword">return</span> <span class="token constant boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="deleting" tabindex="-1"><a class="header-anchor" href="#deleting" aria-hidden="true">#</a> deleting</h3><p>This interface is used to query the original record when deleting data, which requires the return of a two-dimensional array, or a Collection model.</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">deleting</span><span class="token punctuation">(</span><span class="token class-name type-declaration">Form</span> <span class="token variable">$form</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">array</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// Multiple ids when batch deleting</span>
        <span class="token variable">$id</span> <span class="token operator">=</span> <span class="token function">explode</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;,&#39;</span><span class="token punctuation">,</span> <span class="token variable">$form</span><span class="token operator">-&gt;</span><span class="token function">getKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        <span class="token comment">// Implement your logic.</span>
    
        <span class="token comment">// Note that a two-dimensional array needs to be returned here.</span>
        <span class="token keyword">return</span> <span class="token punctuation">[</span>
            <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;id&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;name&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;h1&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">;</span>

        <span class="token comment">// You can also return a collection</span>
        <span class="token keyword">return</span> <span class="token class-name static-context">Modell</span><span class="token operator">::</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token variable">$id</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="destroy" tabindex="-1"><a class="header-anchor" href="#destroy" aria-hidden="true">#</a> destroy</h3><p>The single/batch delete data method, success returns <code>true</code>, failure returns <code>false</code>.</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">destroy</span><span class="token punctuation">(</span><span class="token class-name type-declaration">Form</span> <span class="token variable">$form</span><span class="token punctuation">,</span> <span class="token keyword type-hint">array</span> <span class="token variable">$deletingData</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// Multiple ids when batch deleting</span>
        <span class="token variable">$id</span> <span class="token operator">=</span> <span class="token function">explode</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;,&#39;</span><span class="token punctuation">,</span> <span class="token variable">$form</span><span class="token operator">-&gt;</span><span class="token function">getKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        <span class="token comment">// $deletingData is the data returned by the getDataWhenDeleting interface.</span>
        
        <span class="token comment">// Implement your logic.</span>
    
        <span class="token keyword">return</span> <span class="token constant boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="treerepository接口" tabindex="-1"><a class="header-anchor" href="#treerepository接口" aria-hidden="true">#</a> TreeRepository接口</h2><h3 id="getprimarykeycolumn" tabindex="-1"><a class="header-anchor" href="#getprimarykeycolumn" aria-hidden="true">#</a> getPrimaryKeyColumn</h3><p>This interface is used to return the primary key field name of the data, which requires a value of type <code>string</code> to be returned.</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">getPrimaryKeyColumn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">getKeyName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="getparentcolumn" tabindex="-1"><a class="header-anchor" href="#getparentcolumn" aria-hidden="true">#</a> getParentColumn</h3><p>This interface is used to return the parent ID field name of the data and requires a value of type <code>string</code> to be returned.</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">getParentColumn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string single-quoted-string">&#39;parent_id&#39;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="gettitlecolumn" tabindex="-1"><a class="header-anchor" href="#gettitlecolumn" aria-hidden="true">#</a> getTitleColumn</h3><p>This interface is used to return the data TITLE field name, which requires a value of type <code>string</code> to be returned.</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">getTitleColumn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string single-quoted-string">&#39;title&#39;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="getordercolumn" tabindex="-1"><a class="header-anchor" href="#getordercolumn" aria-hidden="true">#</a> getOrderColumn</h3><p>This interface is used to return the name of the data sorting field and requires a value of type <code>string</code>.</p><blockquote><p>{tip} This field is not required, so if your data doesn&#39;t support it or doesn&#39;t need to be sorted, return an empty value!</p></blockquote><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">getOrderColumn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string single-quoted-string">&#39;order&#39;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="saveorder" tabindex="-1"><a class="header-anchor" href="#saveorder" aria-hidden="true">#</a> saveOrder</h3><p>This interface is used to save the sorting of hierarchical data and receives two parameters</p><ul><li><code>$tree</code> <code>array</code> This field is a hierarchical array of fields</li><li><code>$parentId</code> <code>int</code> This field is primarily used to pass parent IDs for recursion.</li></ul><blockquote><p>{tip} If your data does not support <code>MySQL</code>, you can refer to the <code>Dcat\\Admin\\Traits\\ModelTree::saveOrder</code> method to do it yourself.</p></blockquote><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token variable">$tree</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
	<span class="token punctuation">[</span>
		<span class="token string single-quoted-string">&#39;id&#39;</span>        <span class="token operator">=&gt;</span> <span class="token number">1</span><span class="token punctuation">,</span>
		<span class="token string single-quoted-string">&#39;title&#39;</span>     <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;title&#39;</span><span class="token punctuation">,</span>
		<span class="token string single-quoted-string">&#39;parent_id&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">0</span><span class="token punctuation">,</span>
		
		<span class="token string single-quoted-string">&#39;children&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>
			<span class="token punctuation">[</span>
				<span class="token string single-quoted-string">&#39;id&#39;</span>        <span class="token operator">=&gt;</span> <span class="token number">2</span><span class="token punctuation">,</span>
				<span class="token string single-quoted-string">&#39;title&#39;</span>     <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;child1&#39;</span><span class="token punctuation">,</span>
				<span class="token string single-quoted-string">&#39;parent_id&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">1</span><span class="token punctuation">,</span>
			<span class="token punctuation">]</span><span class="token punctuation">,</span>
			<span class="token punctuation">[</span>
				<span class="token string single-quoted-string">&#39;id&#39;</span>        <span class="token operator">=&gt;</span> <span class="token number">3</span><span class="token punctuation">,</span>
				<span class="token string single-quoted-string">&#39;title&#39;</span>     <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;child2&#39;</span><span class="token punctuation">,</span>
				<span class="token string single-quoted-string">&#39;parent_id&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">1</span><span class="token punctuation">,</span>
			<span class="token punctuation">]</span><span class="token punctuation">,</span>
		<span class="token punctuation">]</span><span class="token punctuation">,</span>
	<span class="token punctuation">]</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// Save the sort, please implement your own internal logic.</span>
<span class="token variable">$repository</span><span class="token operator">-&gt;</span><span class="token function">saveOrder</span><span class="token punctuation">(</span><span class="token variable">$tree</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="withquery" tabindex="-1"><a class="header-anchor" href="#withquery" aria-hidden="true">#</a> withQuery</h3><p>This interface should be used in conjunction with the <code>toTree</code> interface to receive a parameter: a callback or parameter primarily used to set the data query operation.</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>

<span class="token keyword">use</span> <span class="token package">Dcat<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Contracts<span class="token punctuation">\\</span>Repository</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Dcat<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Contracts<span class="token punctuation">\\</span>TreeRepository</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Dcat<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Support<span class="token punctuation">\\</span>Helper</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">Category</span> <span class="token keyword">implements</span> <span class="token class-name">Repository</span><span class="token punctuation">,</span> TreeRepository
<span class="token punctuation">{</span>
    <span class="token keyword">protected</span> <span class="token variable">$queryCallbacks</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">withQuery</span><span class="token punctuation">(</span><span class="token variable">$queryCallback</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">queryCallbacks</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token variable">$queryCallback</span><span class="token punctuation">;</span>
        
        <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	
	<span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">toTree</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token punctuation">{</span>
	    <span class="token comment">// The code shown here is just to illustrate what the withQuery method does.</span>
	    <span class="token variable">$client</span> <span class="token operator">=</span> <span class="token operator">...</span><span class="token punctuation">;</span>
	    
	    <span class="token keyword">foreach</span> <span class="token punctuation">(</span><span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">queryCallbacks</span> <span class="token keyword">as</span> <span class="token variable">$callback</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	    	<span class="token variable">$callback</span><span class="token punctuation">(</span><span class="token variable">$client</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	    <span class="token punctuation">}</span>
	    
	    <span class="token keyword">return</span> <span class="token class-name static-context">Helper</span><span class="token operator">::</span><span class="token function">buildNestedArray</span><span class="token punctuation">(</span><span class="token variable">$client</span><span class="token operator">-&gt;</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>   
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="totree" tabindex="-1"><a class="header-anchor" href="#totree" aria-hidden="true">#</a> toTree</h3><p>This interface is mainly used for querying data and returning it at a hierarchical level, and needs to return <code>array</code> type values.</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>	<span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">toTree</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token punctuation">{</span>
	    <span class="token variable">$client</span> <span class="token operator">=</span> <span class="token operator">...</span><span class="token punctuation">;</span>
	    
	    <span class="token keyword">foreach</span> <span class="token punctuation">(</span><span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">queryCallbacks</span> <span class="token keyword">as</span> <span class="token variable">$callback</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	    	<span class="token variable">$callback</span><span class="token punctuation">(</span><span class="token variable">$client</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	    <span class="token punctuation">}</span>
	    
	    <span class="token keyword">return</span> <span class="token class-name static-context">Helper</span><span class="token operator">::</span><span class="token function">buildNestedArray</span><span class="token punctuation">(</span><span class="token variable">$client</span><span class="token operator">-&gt;</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="models" tabindex="-1"><a class="header-anchor" href="#models" aria-hidden="true">#</a> Models</h2><p><code>Dcat Admin</code> already has built-in support for <code>Eloquent model</code>, so if your data source supports <code>Model</code>, then you only need to inherit the <code>Dcat\\Admin\\Repositories\\EloquentRepository</code> class to implement the <code>CRUD</code> operation on the data, such as.</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>

<span class="token keyword">namespace</span> <span class="token package">App<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Repositories</span><span class="token punctuation">;</span>

<span class="token keyword">use</span> <span class="token package">Dcat<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Repositories<span class="token punctuation">\\</span>EloquentRepository</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">App<span class="token punctuation">\\</span>Models<span class="token punctuation">\\</span>Movie</span> <span class="token keyword">as</span> MovieModel<span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">Movie</span> <span class="token keyword">extends</span> <span class="token class-name">EloquentRepository</span>
<span class="token punctuation">{</span>
    <span class="token comment">// Just set your model class name here</span>
    <span class="token keyword">protected</span> <span class="token variable">$eloquentClass</span> <span class="token operator">=</span> <span class="token class-name static-context">MovieModel</span><span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">;</span>
    
    <span class="token comment">// With this method you can specify the field of the query, default &quot;*&quot;</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">getGridColumns</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">getKeyName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;name&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;title&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;created_at&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token comment">// With this method, you can specify the fields of the form page query, default &quot;*&quot;</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">getFormColumns</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">getKeyName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;name&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;title&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;created_at&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
   <span class="token comment">// With this method, you can specify the field for the data detail page query, which defaults to &quot;*&quot;</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">getDetailColumns</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;*&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
<span class="token punctuation">}</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="querybuilder" tabindex="-1"><a class="header-anchor" href="#querybuilder" aria-hidden="true">#</a> QueryBuilder</h2><p>If your data supports <code>QueryBuilder</code> query, but it is not convenient to build model classes (for example, you need to dynamically look up table data), you can inherit the <code>Dcat\\Admin\\Repositories\\QueryBuilderRepository</code> class.</p><blockquote><p>{tip} Note that <code>QueryBuilderRepository</code> does not support <code>Model</code>&#39;s associative model, soft delete, model tree and field sorting functions by default.</p></blockquote><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>

<span class="token keyword">namespace</span> <span class="token package">App<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Repositories</span><span class="token punctuation">;</span>

<span class="token keyword">use</span> <span class="token package">Dcat<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Repositories<span class="token punctuation">\\</span>QueryBuilderRepository</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">MyRepository</span> <span class="token keyword">extends</span> <span class="token class-name">QueryBuilderRepository</span>
<span class="token punctuation">{</span>
    <span class="token comment">// Set the name of your primary key</span>
    <span class="token keyword">protected</span> <span class="token variable">$keyName</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;id&#39;</span><span class="token punctuation">;</span>
    
    <span class="token comment">// Set the Create Time field</span>
    <span class="token keyword">protected</span> <span class="token variable">$createdAtColumn</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;created_at&#39;</span><span class="token punctuation">;</span>
    
     <span class="token comment">// Set the update time field</span>
    <span class="token keyword">protected</span> <span class="token variable">$updatedAtColumn</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;updated_at&#39;</span><span class="token punctuation">;</span>
    
    <span class="token comment">// Return table name</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">getTable</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string single-quoted-string">&#39;your_table_name&#39;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token comment">// Return the name of your primary key.</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">getKeyName</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">keyName</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token comment">// With this method you can specify the field of the query, default &quot;*&quot;</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">getGridColumns</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">getKeyName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;name&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;title&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;created_at&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token comment">// With this method, you can specify the fields of the form page query, default &quot;*&quot;</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">getFormColumns</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">getKeyName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;name&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;title&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;created_at&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
   <span class="token comment">// With this method, you can specify the field for the data detail page query, which defaults to &quot;*&quot;</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">getDetailColumns</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;*&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,84),i=[p];function o(c,l){return s(),a("div",null,i)}const d=n(t,[["render",o],["__file","model-repository.html.vue"]]);export{d as default};
