import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e}from"./app-c17653d8.js";const t={},p=e(`<h1 id="数据仓库" tabindex="-1"><a class="header-anchor" href="#数据仓库" aria-hidden="true">#</a> 数据仓库</h1><p>数据仓库(<code>Repository</code>)是<code>Dcat Admin</code>中对数据增删改查操作接口的具体实现，通过<code>Repository</code>的介入可以让页面的构建不再关心数据读写功能的具体实现，开发者通过实现<code>Repository</code>接口即可对数据进行读写操作。</p><blockquote><p>{tip} 当然为了方便系统也保留了直接使用 <code>Model</code> 的功能，底层会自动把<code>Model</code>转化为数据仓库实例，毕竟大多数时候直接使用 <code>Model</code> 也能满足我们的需求。</p></blockquote><p>数据表格<code>Grid</code>、数据表单<code>Form</code>、数据详情<code>Show</code>、<code>Tree</code> 等组件不再直接依赖于<code>Model</code>，而是依赖于提供更简单清晰的接口的数据仓库，下面是<code>Repository</code>的所有接口：</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>

<span class="token keyword">namespace</span> <span class="token package">Dcat<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Contracts</span><span class="token punctuation">;</span>

<span class="token keyword">use</span> <span class="token package">Dcat<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Form</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Dcat<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Grid</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Dcat<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Show</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Support<span class="token punctuation">\\</span>Collection</span><span class="token punctuation">;</span>

<span class="token keyword">interface</span> <span class="token class-name-definition class-name">Repository</span>
<span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * 获取主键名称.
     *
     * <span class="token keyword">@return</span> <span class="token class-name"><span class="token keyword">string</span></span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">getKeyName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 获取创建时间字段.
     *
     * <span class="token keyword">@return</span> <span class="token class-name"><span class="token keyword">string</span></span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">getCreatedAtColumn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 获取更新时间字段.
     *
     * <span class="token keyword">@return</span> <span class="token class-name"><span class="token keyword">string</span></span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">getUpdatedAtColumn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 是否使用软删除.
     *
     * <span class="token keyword">@return</span> <span class="token class-name"><span class="token keyword">bool</span></span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">isSoftDeletes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 获取Grid表格数据.
     *
     * <span class="token keyword">@param</span> <span class="token class-name">Grid<span class="token punctuation">\\</span>Model</span> <span class="token parameter">$model</span>
     *
     * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">\\</span>Illuminate<span class="token punctuation">\\</span>Contracts<span class="token punctuation">\\</span>Pagination<span class="token punctuation">\\</span>LengthAwarePaginator<span class="token punctuation">|</span>Collection<span class="token punctuation">|</span><span class="token keyword">array</span></span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">get</span><span class="token punctuation">(</span><span class="token class-name class-name-fully-qualified type-declaration">Grid<span class="token punctuation">\\</span>Model</span> <span class="token variable">$model</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 获取编辑页面数据.
     *
     * <span class="token keyword">@param</span> <span class="token class-name">Form</span> <span class="token parameter">$form</span>
     *
     * <span class="token keyword">@return</span> <span class="token class-name"><span class="token keyword">array</span><span class="token punctuation">|</span><span class="token punctuation">\\</span>Illuminate<span class="token punctuation">\\</span>Contracts<span class="token punctuation">\\</span>Support<span class="token punctuation">\\</span>Arrayable</span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">edit</span><span class="token punctuation">(</span><span class="token class-name type-declaration">Form</span> <span class="token variable">$form</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 获取详情页面数据.
     *
     * <span class="token keyword">@param</span> <span class="token class-name">Show</span> <span class="token parameter">$show</span>
     *
     * <span class="token keyword">@return</span> <span class="token class-name"><span class="token keyword">array</span><span class="token punctuation">|</span><span class="token punctuation">\\</span>Illuminate<span class="token punctuation">\\</span>Contracts<span class="token punctuation">\\</span>Support<span class="token punctuation">\\</span>Arrayable</span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">detail</span><span class="token punctuation">(</span><span class="token class-name type-declaration">Show</span> <span class="token variable">$show</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 新增记录.
     *
     * <span class="token keyword">@param</span> <span class="token class-name">Form</span> <span class="token parameter">$form</span>
     *
     * <span class="token keyword">@return</span> <span class="token class-name"><span class="token keyword">mixed</span></span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">store</span><span class="token punctuation">(</span><span class="token class-name type-declaration">Form</span> <span class="token variable">$form</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 查询更新前的行数据.
     *
     * <span class="token keyword">@param</span> <span class="token class-name">Form</span> <span class="token parameter">$form</span>
     *
     * <span class="token keyword">@return</span> <span class="token class-name"><span class="token keyword">array</span><span class="token punctuation">|</span><span class="token punctuation">\\</span>Illuminate<span class="token punctuation">\\</span>Contracts<span class="token punctuation">\\</span>Support<span class="token punctuation">\\</span>Arrayable</span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">updating</span><span class="token punctuation">(</span><span class="token class-name type-declaration">Form</span> <span class="token variable">$form</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 更新数据.
     *
     * <span class="token keyword">@param</span> <span class="token class-name">Form</span> <span class="token parameter">$form</span>
     *
     * <span class="token keyword">@return</span> <span class="token class-name"><span class="token keyword">bool</span></span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">update</span><span class="token punctuation">(</span><span class="token class-name type-declaration">Form</span> <span class="token variable">$form</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 删除数据.
     *
     * <span class="token keyword">@param</span> <span class="token class-name">Form</span>  <span class="token parameter">$form</span>
     * <span class="token keyword">@param</span> <span class="token class-name"><span class="token keyword">array</span></span> <span class="token parameter">$deletingData</span>
     *
     * <span class="token keyword">@return</span> <span class="token class-name"><span class="token keyword">mixed</span></span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">delete</span><span class="token punctuation">(</span><span class="token class-name type-declaration">Form</span> <span class="token variable">$form</span><span class="token punctuation">,</span> <span class="token keyword type-hint">array</span> <span class="token variable">$deletingData</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 查询删除前的行数据.
     *
     * <span class="token keyword">@param</span> <span class="token class-name">Form</span> <span class="token parameter">$form</span>
     *
     * <span class="token keyword">@return</span> <span class="token class-name"><span class="token keyword">array</span><span class="token punctuation">|</span><span class="token punctuation">\\</span>Illuminate<span class="token punctuation">\\</span>Contracts<span class="token punctuation">\\</span>Support<span class="token punctuation">\\</span>Arrayable</span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">deleting</span><span class="token punctuation">(</span><span class="token class-name type-declaration">Form</span> <span class="token variable">$form</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果你的数据是多层级结构，则还需要实现以下接口</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>

<span class="token keyword">namespace</span> <span class="token package">Dcat<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Contracts</span><span class="token punctuation">;</span>

<span class="token keyword">interface</span> <span class="token class-name-definition class-name">TreeRepository</span>
<span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * 获取主键字段名称.
     *
     * <span class="token keyword">@return</span> <span class="token class-name"><span class="token keyword">string</span></span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">getPrimaryKeyColumn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 获取父级ID字段名称.
     *
     * <span class="token keyword">@return</span> <span class="token class-name"><span class="token keyword">string</span></span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">getParentColumn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 获取标题字段名称.
     *
     * <span class="token keyword">@return</span> <span class="token class-name"><span class="token keyword">string</span></span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">getTitleColumn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 获取排序字段名称.
     *
     * <span class="token keyword">@return</span> <span class="token class-name"><span class="token keyword">string</span></span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">getOrderColumn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 保存层级数据排序.
     *
     * <span class="token keyword">@param</span> <span class="token class-name"><span class="token keyword">array</span></span> <span class="token parameter">$tree</span>
     * <span class="token keyword">@param</span> <span class="token class-name"><span class="token keyword">int</span></span>   <span class="token parameter">$parentId</span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">saveOrder</span><span class="token punctuation">(</span><span class="token variable">$tree</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token variable">$parentId</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 设置数据查询回调.
     *
     * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">\\</span>Closure<span class="token punctuation">|</span><span class="token keyword">null</span></span> <span class="token parameter">$query</span>
     *
     * <span class="token keyword">@return</span> $this
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">withQuery</span><span class="token punctuation">(</span><span class="token variable">$queryCallback</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 获取层级数据.
     *
     * <span class="token keyword">@return</span> <span class="token class-name"><span class="token keyword">array</span></span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">toTree</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="repository接口" tabindex="-1"><a class="header-anchor" href="#repository接口" aria-hidden="true">#</a> Repository接口</h2><h3 id="getkeyname" tabindex="-1"><a class="header-anchor" href="#getkeyname" aria-hidden="true">#</a> getKeyName</h3><p>此接口要求返回数据的主键字段名称，需要返回<code>string</code>类型值。</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">getKeyName</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string single-quoted-string">&#39;id&#39;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="getcreatedatcolumn" tabindex="-1"><a class="header-anchor" href="#getcreatedatcolumn" aria-hidden="true">#</a> getCreatedAtColumn</h3><p>此接口要求返回数据的<code>created_at</code>字段名称，如果没有值可以返回空字符串或<code>null</code>值。</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>    <span class="token comment">// 如果没有值可以返回空字符串或\`null\`值</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">getCreatedAtColumn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string single-quoted-string">&#39;created_at&#39;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="getupdatedatcolumn" tabindex="-1"><a class="header-anchor" href="#getupdatedatcolumn" aria-hidden="true">#</a> getUpdatedAtColumn</h3><p>此接口要求返回数据的<code>updated_at</code>字段名称，如果没有值可以返回空字符串或<code>null</code>值。</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>    <span class="token comment">// 如果没有值可以返回空字符串或\`null\`值</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">getCreatedAtColumn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string single-quoted-string">&#39;updated_at&#39;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="issoftdeletes" tabindex="-1"><a class="header-anchor" href="#issoftdeletes" aria-hidden="true">#</a> isSoftDeletes</h3><p>此接口要求返回数据是否支持软删除，请返回一个<code>bool</code>类型的值。</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">isSoftDeletes</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token constant boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="get" tabindex="-1"><a class="header-anchor" href="#get" aria-hidden="true">#</a> get</h3><p>此接口要求返回数据表格<code>Grid</code>的数据，用于数据表格展示，要求返回一个<code>array</code>、<code>Illuminate\\Support\\Collection</code>或<code>LengthAwarePaginator</code>类型值。</p><h4 id="分页" tabindex="-1"><a class="header-anchor" href="#分页" aria-hidden="true">#</a> 分页</h4><p>当数据需要分页时要求返回一个<code>\\Illuminate\\Contracts\\Pagination\\LengthAwarePaginator</code>类型值：</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">get</span><span class="token punctuation">(</span><span class="token class-name class-name-fully-qualified type-declaration">Grid<span class="token punctuation">\\</span>Model</span> <span class="token variable">$model</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// 获取当前页数</span>
        <span class="token variable">$currentPage</span> <span class="token operator">=</span> <span class="token variable">$model</span><span class="token operator">-&gt;</span><span class="token function">getCurrentPage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 获取每页显示行数</span>
        <span class="token variable">$perPage</span> <span class="token operator">=</span> <span class="token variable">$model</span><span class="token operator">-&gt;</span><span class="token function">getPerPage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 获取筛选参数</span>
        <span class="token variable">$city</span> <span class="token operator">=</span> <span class="token variable">$model</span><span class="token operator">-&gt;</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">input</span><span class="token punctuation">(</span><span class="token class-name class-name-fully-qualified static-context">Grid<span class="token punctuation">\\</span>Filter<span class="token punctuation">\\</span>Scope</span><span class="token operator">::</span><span class="token constant">QUERY_NAME</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;广州&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token variable">$start</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token variable">$currentPage</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token variable">$perPage</span><span class="token punctuation">;</span>

        <span class="token variable">$client</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name class-name-fully-qualified"><span class="token punctuation">\\</span>GuzzleHttp<span class="token punctuation">\\</span>Client</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token variable">$response</span> <span class="token operator">=</span> <span class="token variable">$client</span><span class="token operator">-&gt;</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;<span class="token interpolation"><span class="token punctuation">{</span><span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">api</span><span class="token punctuation">}</span></span>?<span class="token interpolation"><span class="token punctuation">{</span><span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">apiKey</span><span class="token punctuation">}</span></span>&amp;city=<span class="token interpolation"><span class="token variable">$city</span></span>&amp;start=<span class="token interpolation"><span class="token variable">$start</span></span>&amp;count=<span class="token interpolation"><span class="token variable">$perPage</span></span>&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token variable">$data</span> <span class="token operator">=</span> <span class="token function">json_decode</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token keyword type-casting">string</span><span class="token punctuation">)</span><span class="token variable">$response</span><span class="token operator">-&gt;</span><span class="token function">getBody</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token constant boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">return</span> <span class="token variable">$model</span><span class="token operator">-&gt;</span><span class="token function">makePaginator</span><span class="token punctuation">(</span>
            <span class="token variable">$data</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;total&#39;</span><span class="token punctuation">]</span> <span class="token operator">??</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token comment">// 传入总记录数</span>
            <span class="token variable">$data</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;subjects&#39;</span><span class="token punctuation">]</span> <span class="token operator">??</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token comment">// 传入数据二维数组</span>
        <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="不分页" tabindex="-1"><a class="header-anchor" href="#不分页" aria-hidden="true">#</a> 不分页</h4><p>如果不需要分页，则直接返回一个<code>array</code>或<code>Illuminate\\Support\\Collection</code>类型值即可。</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">get</span><span class="token punctuation">(</span><span class="token class-name class-name-fully-qualified type-declaration">Grid<span class="token punctuation">\\</span>Model</span> <span class="token variable">$model</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">[</span>
            <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;id&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;name&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;n1&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;id&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;name&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;n2&#39;</span><span class="token punctuation">]</span>
        <span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意，<code>grid</code>需要禁用分页</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token variable">$grid</span><span class="token operator">-&gt;</span><span class="token function">disablePagination</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="edit" tabindex="-1"><a class="header-anchor" href="#edit" aria-hidden="true">#</a> edit</h3><p>此接口要求返回表单编辑页面的数据，用于显示数据表单编辑页面，需要返回<code>array</code>类型值。</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">edit</span><span class="token punctuation">(</span><span class="token class-name type-declaration">Form</span> <span class="token variable">$form</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">array</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// 获取数据主键值</span>
        <span class="token variable">$id</span> <span class="token operator">=</span> <span class="token variable">$form</span><span class="token operator">-&gt;</span><span class="token function">getKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    
        <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;id&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;name&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;n1&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="detail" tabindex="-1"><a class="header-anchor" href="#detail" aria-hidden="true">#</a> detail</h3><p>此接口要求返回数据详情页面的数据，用于显示数据详情，需要返回<code>array</code>类型值。</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">detail</span><span class="token punctuation">(</span><span class="token class-name type-declaration">Show</span> <span class="token variable">$show</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">array</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// 获取数据主键值</span>
        <span class="token variable">$id</span> <span class="token operator">=</span> <span class="token variable">$show</span><span class="token operator">-&gt;</span><span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    
        <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;id&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;name&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;n1&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="store" tabindex="-1"><a class="header-anchor" href="#store" aria-hidden="true">#</a> store</h3><p>此接口用于新增一条记录，可以返回<code>int</code>、<code>string</code>或<code>bool</code>类型值。</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">store</span><span class="token punctuation">(</span><span class="token class-name type-declaration">Form</span> <span class="token variable">$form</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// 获取待新增的数据</span>
        <span class="token variable">$attributes</span> <span class="token operator">=</span> <span class="token variable">$form</span><span class="token operator">-&gt;</span><span class="token function">updates</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        <span class="token comment">// 执行你的新增逻辑</span>
    
        <span class="token comment">// 返回新增记录id或bool值</span>
        <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="updating" tabindex="-1"><a class="header-anchor" href="#updating" aria-hidden="true">#</a> updating</h3><p>此接口用于数据表单修改数据时查询原始记录，需要返回<code>array</code>或<code>Model</code>类型值。</p><blockquote><p>{tip} 此接口只有某些特殊字段会用到，如图片、文件上传字段，当更改了图片或文件时可以根据这个接口查出的数据删除旧文件。所以如果你的表单中没有用到此类特殊字段，此接口可以返回一个空数组。</p></blockquote><div class="language-phpjie line-numbers-mode" data-ext="phpjie"><pre class="language-phpjie"><code>    public function updating(Form $form)
    {
        // 获取数据主键值
        $id = $form-&gt;getKey();
    
        return [&#39;id&#39; =&gt; 1, &#39;name&#39; =&gt; &#39;n1&#39;];
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="update" tabindex="-1"><a class="header-anchor" href="#update" aria-hidden="true">#</a> update</h3><p>此接口用于数据表单修改记录，可以返回<code>int</code>、<code>string</code>或<code>bool</code>类型值。</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">update</span><span class="token punctuation">(</span><span class="token class-name type-declaration">Form</span> <span class="token variable">$form</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// 获取待编辑的数据</span>
        <span class="token variable">$attributes</span> <span class="token operator">=</span> <span class="token variable">$form</span><span class="token operator">-&gt;</span><span class="token function">updates</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        <span class="token comment">// 执行你的编辑逻辑</span>
    
        <span class="token comment">// 返回成功</span>
        <span class="token keyword">return</span> <span class="token constant boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="deleting" tabindex="-1"><a class="header-anchor" href="#deleting" aria-hidden="true">#</a> deleting</h3><p>此接口用于删除数据时查询原始记录，需要返回二维数组，或Collection model。</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">deleting</span><span class="token punctuation">(</span><span class="token class-name type-declaration">Form</span> <span class="token variable">$form</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">array</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// 当批量删除时id为多个</span>
        <span class="token variable">$id</span> <span class="token operator">=</span> <span class="token function">explode</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;,&#39;</span><span class="token punctuation">,</span> <span class="token variable">$form</span><span class="token operator">-&gt;</span><span class="token function">getKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        <span class="token comment">// 执行你的逻辑</span>
    
        <span class="token comment">// 注意这里需要返回二维数组</span>
        <span class="token keyword">return</span> <span class="token punctuation">[</span>
            <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;id&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;name&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;h1&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">;</span>
        
        <span class="token comment">// 也可以返回collection</span>
        <span class="token keyword">return</span> <span class="token class-name static-context">Modell</span><span class="token operator">::</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token variable">$id</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="destroy" tabindex="-1"><a class="header-anchor" href="#destroy" aria-hidden="true">#</a> destroy</h3><p>单行/批量删除数据方法，成功返回<code>true</code>，失败返回<code>false</code>。</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">destroy</span><span class="token punctuation">(</span><span class="token class-name type-declaration">Form</span> <span class="token variable">$form</span><span class="token punctuation">,</span> <span class="token keyword type-hint">array</span> <span class="token variable">$deletingData</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// 当批量删除时id为多个</span>
        <span class="token variable">$id</span> <span class="token operator">=</span> <span class="token function">explode</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;,&#39;</span><span class="token punctuation">,</span> <span class="token variable">$form</span><span class="token operator">-&gt;</span><span class="token function">getKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        <span class="token comment">// $deletingData 是 getDataWhenDeleting 接口返回的数据</span>
        
        <span class="token comment">// 执行你的逻辑</span>
    
        <span class="token keyword">return</span> <span class="token constant boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="treerepository接口" tabindex="-1"><a class="header-anchor" href="#treerepository接口" aria-hidden="true">#</a> TreeRepository接口</h2><h3 id="getprimarykeycolumn" tabindex="-1"><a class="header-anchor" href="#getprimarykeycolumn" aria-hidden="true">#</a> getPrimaryKeyColumn</h3><p>此接口用于返回数据的主键字段名称，需要返回<code>string</code>类型值。</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">getPrimaryKeyColumn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">getKeyName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="getparentcolumn" tabindex="-1"><a class="header-anchor" href="#getparentcolumn" aria-hidden="true">#</a> getParentColumn</h3><p>此接口用于返回数据的父ID字段名称，需要返回<code>string</code>类型值。</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">getParentColumn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string single-quoted-string">&#39;parent_id&#39;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="gettitlecolumn" tabindex="-1"><a class="header-anchor" href="#gettitlecolumn" aria-hidden="true">#</a> getTitleColumn</h3><p>此接口用于返回数据标题字段名称，需要返回<code>string</code>类型值。</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">getTitleColumn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string single-quoted-string">&#39;title&#39;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="getordercolumn" tabindex="-1"><a class="header-anchor" href="#getordercolumn" aria-hidden="true">#</a> getOrderColumn</h3><p>此接口用于返回数据排序字段名称，需要返回<code>string</code>类型值。</p><blockquote><p>{tip} 此字段不是必须的，如果你的数据不支持或不需要排序，请返回空值！</p></blockquote><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">getOrderColumn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string single-quoted-string">&#39;order&#39;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="saveorder" tabindex="-1"><a class="header-anchor" href="#saveorder" aria-hidden="true">#</a> saveOrder</h3><p>此接口用于保存层级数据的排序，并且接收两个参数</p><ul><li><code>$tree</code> <code>array</code> 此字段是一个已分好层级的数组</li><li><code>$parentId</code> <code>int</code> 此字段主要用于递归时传递父ID使用</li></ul><blockquote><p>{tip} 如果你的数据不支持 <code>MySQL</code>，可参考 <code>Dcat\\Admin\\Traits\\ModelTree::saveOrder</code> 方法自行实现。</p></blockquote><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token variable">$tree</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
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

<span class="token comment">// 保存排序，内层逻辑请自行实现</span>
<span class="token variable">$repository</span><span class="token operator">-&gt;</span><span class="token function">saveOrder</span><span class="token punctuation">(</span><span class="token variable">$tree</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="withquery" tabindex="-1"><a class="header-anchor" href="#withquery" aria-hidden="true">#</a> withQuery</h3><p>此接口需结合 <code>toTree</code> 接口使用，接收一个参数：主要用于设置数据查询操作的相关回调或参数。</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>

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
	    <span class="token comment">// 这里演示的代码只是为了说明 withQuery 方法的作用</span>
	    <span class="token variable">$client</span> <span class="token operator">=</span> <span class="token operator">...</span><span class="token punctuation">;</span>
	    
	    <span class="token keyword">foreach</span> <span class="token punctuation">(</span><span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">queryCallbacks</span> <span class="token keyword">as</span> <span class="token variable">$callback</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	    	<span class="token variable">$callback</span><span class="token punctuation">(</span><span class="token variable">$client</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	    <span class="token punctuation">}</span>
	    
	    <span class="token keyword">return</span> <span class="token class-name static-context">Helper</span><span class="token operator">::</span><span class="token function">buildNestedArray</span><span class="token punctuation">(</span><span class="token variable">$client</span><span class="token operator">-&gt;</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>   
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="totree" tabindex="-1"><a class="header-anchor" href="#totree" aria-hidden="true">#</a> toTree</h3><p>此接口主要用于查询数据并分好层级返回，需要返回 <code>array</code> 类型值。</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>	<span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">toTree</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token punctuation">{</span>
	    <span class="token variable">$client</span> <span class="token operator">=</span> <span class="token operator">...</span><span class="token punctuation">;</span>
	    
	    <span class="token keyword">foreach</span> <span class="token punctuation">(</span><span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">queryCallbacks</span> <span class="token keyword">as</span> <span class="token variable">$callback</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	    	<span class="token variable">$callback</span><span class="token punctuation">(</span><span class="token variable">$client</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	    <span class="token punctuation">}</span>
	    
	    <span class="token keyword">return</span> <span class="token class-name static-context">Helper</span><span class="token operator">::</span><span class="token function">buildNestedArray</span><span class="token punctuation">(</span><span class="token variable">$client</span><span class="token operator">-&gt;</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="模型" tabindex="-1"><a class="header-anchor" href="#模型" aria-hidden="true">#</a> 模型</h2><p><code>Dcat Admin</code>已经内置了对<code>Eloquent model</code>的支持，如果你的数据源是支持<code>Model</code>的，那么只需继承<code>Dcat\\Admin\\Repositories\\EloquentRepository</code>类即可实现对数据的<code>CURD</code>操作，如：</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>

<span class="token keyword">namespace</span> <span class="token package">App<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Repositories</span><span class="token punctuation">;</span>

<span class="token keyword">use</span> <span class="token package">Dcat<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Repositories<span class="token punctuation">\\</span>EloquentRepository</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">App<span class="token punctuation">\\</span>Models<span class="token punctuation">\\</span>Movie</span> <span class="token keyword">as</span> MovieModel<span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">Movie</span> <span class="token keyword">extends</span> <span class="token class-name">EloquentRepository</span>
<span class="token punctuation">{</span>
    <span class="token comment">// 这里设置你的模型类名即可</span>
    <span class="token keyword">protected</span> <span class="token variable">$eloquentClass</span> <span class="token operator">=</span> <span class="token class-name static-context">MovieModel</span><span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">;</span>
    
    <span class="token comment">// 通过这个方法可以指定查询的字段，默认&quot;*&quot;</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">getGridColumns</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">getKeyName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;name&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;title&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;created_at&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token comment">// 通过这个方法可以指定表单页查询的字段，默认&quot;*&quot;</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">getFormColumns</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">getKeyName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;name&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;title&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;created_at&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
   <span class="token comment">// 通过这个方法可以指定数据详情页查询的字段，默认&quot;*&quot;</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">getDetailColumns</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;*&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
<span class="token punctuation">}</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="querybuilder" tabindex="-1"><a class="header-anchor" href="#querybuilder" aria-hidden="true">#</a> QueryBuilder</h2><p>如果你的数据支持<code>QueryBuilder</code>查询，但不方便建模型类（比如需要动态查表数据），则可以继承<code>Dcat\\Admin\\Repositories\\QueryBuilderRepository</code>类。</p><blockquote><p>{tip} 注意，<code>QueryBuilderRepository</code>默认是不支持<code>Model</code>的关联模型、软删除、模型树以及字段排序等功能，如果需要这些功能，请自定实现上述相关接口即可。</p></blockquote><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>

<span class="token keyword">namespace</span> <span class="token package">App<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Repositories</span><span class="token punctuation">;</span>

<span class="token keyword">use</span> <span class="token package">Dcat<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Repositories<span class="token punctuation">\\</span>QueryBuilderRepository</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">MyRepository</span> <span class="token keyword">extends</span> <span class="token class-name">QueryBuilderRepository</span>
<span class="token punctuation">{</span>
    <span class="token comment">// 设置你的主键名称</span>
    <span class="token keyword">protected</span> <span class="token variable">$keyName</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;id&#39;</span><span class="token punctuation">;</span>
    
    <span class="token comment">// 设置创建时间字段</span>
    <span class="token keyword">protected</span> <span class="token variable">$createdAtColumn</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;created_at&#39;</span><span class="token punctuation">;</span>
    
     <span class="token comment">// 设置更新时间字段</span>
    <span class="token keyword">protected</span> <span class="token variable">$updatedAtColumn</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;updated_at&#39;</span><span class="token punctuation">;</span>
    
    <span class="token comment">// 返回表名</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">getTable</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string single-quoted-string">&#39;your_table_name&#39;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token comment">// 返回你的主键名称</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">getKeyName</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">keyName</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token comment">// 通过这个方法可以指定查询的字段，默认&quot;*&quot;</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">getGridColumns</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">getKeyName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;name&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;title&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;created_at&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token comment">// 通过这个方法可以指定表单页查询的字段，默认&quot;*&quot;</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">getFormColumns</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">getKeyName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;name&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;title&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;created_at&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
   <span class="token comment">// 通过这个方法可以指定数据详情页查询的字段，默认&quot;*&quot;</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">getDetailColumns</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;*&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,84),i=[p];function o(c,l){return s(),a("div",null,i)}const r=n(t,[["render",o],["__file","model-repository.html.vue"]]);export{r as default};
