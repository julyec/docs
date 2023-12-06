import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{r as c,o as i,c as l,a,b as n,d as e,w as p,e as t}from"./app-c17653d8.js";const u={},d=t(`<h1 id="行的使用和扩展" tabindex="-1"><a class="header-anchor" href="#行的使用和扩展" aria-hidden="true">#</a> 行的使用和扩展</h1><h3 id="启用或禁用默认操作按钮" tabindex="-1"><a class="header-anchor" href="#启用或禁用默认操作按钮" aria-hidden="true">#</a> 启用或禁用默认操作按钮</h3><p><code>model-grid</code>默认有四个行操作<code>编辑</code>、<code>快捷编辑</code>、<code>删除</code>和<code>详情</code>，可以通过下面的方式关闭它们：</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">Dcat<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Grid</span><span class="token punctuation">;</span>

 <span class="token variable">$grid</span><span class="token operator">-&gt;</span><span class="token function">actions</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token class-name class-name-fully-qualified type-declaration">Grid<span class="token punctuation">\\</span>Displayers<span class="token punctuation">\\</span>Actions</span> <span class="token variable">$actions</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token variable">$actions</span><span class="token operator">-&gt;</span><span class="token function">disableDelete</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token variable">$actions</span><span class="token operator">-&gt;</span><span class="token function">disableEdit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token variable">$actions</span><span class="token operator">-&gt;</span><span class="token function">disableQuickEdit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token variable">$actions</span><span class="token operator">-&gt;</span><span class="token function">disableView</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 也可以通过以下方式启用或禁用按钮</span>
<span class="token variable">$grid</span><span class="token operator">-&gt;</span><span class="token function">disableDeleteButton</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">$grid</span><span class="token operator">-&gt;</span><span class="token function">disableEditButton</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">$grid</span><span class="token operator">-&gt;</span><span class="token function">disableQuickEditButton</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">$grid</span><span class="token operator">-&gt;</span><span class="token function">disableViewButton</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="切换行操作按钮显示方式" tabindex="-1"><a class="header-anchor" href="#切换行操作按钮显示方式" aria-hidden="true">#</a> 切换行操作按钮显示方式</h3><p>全局默认的行操作按钮显示方式可以通过配置参数<code>admin.grid.grid_action_class</code>参数进行配置，目前支持的行操作按钮显示方式有以下两种：</p><ul><li><code>Dcat\\Admin\\Grid\\Displayers\\DropdownActions</code> 下拉菜单方式</li><li><code>Dcat\\Admin\\Grid\\Displayers\\Actions</code> 图标展开方式</li><li><code>Dcat\\Admin\\Grid\\Displayers\\ContextMenuActions</code> 鼠标右键显示下拉菜单</li></ul><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>    <span class="token operator">...</span>

    <span class="token string single-quoted-string">&#39;grid&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>

        <span class="token comment">/*
        |--------------------------------------------------------------------------
        | The global Grid action display class.
        |--------------------------------------------------------------------------
        */</span>
        <span class="token string single-quoted-string">&#39;grid_action_class&#39;</span> <span class="token operator">=&gt;</span> <span class="token class-name class-name-fully-qualified static-context">Dcat<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Grid<span class="token punctuation">\\</span>Displayers<span class="token punctuation">\\</span>DropdownActions</span><span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    
    <span class="token operator">...</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在控制器中切换显示方式</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">Dcat<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Grid</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">grid</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">Grid</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Model</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token class-name type-declaration">Grid</span> <span class="token variable">$grid</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token variable">$grid</span><span class="token operator">-&gt;</span><span class="token function">setActionClass</span><span class="token punctuation">(</span><span class="token class-name class-name-fully-qualified static-context">Grid<span class="token punctuation">\\</span>Displayers<span class="token punctuation">\\</span>Actions</span><span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        <span class="token operator">...</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="获取行序号-index" tabindex="-1"><a class="header-anchor" href="#获取行序号-index" aria-hidden="true">#</a> 获取行序号 (index)</h3><p>序号从 <code>0</code> 开始计算</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token comment">// 在 display 回调中使用</span>
<span class="token variable">$grid</span><span class="token operator">-&gt;</span><span class="token function">column</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;序号&#39;</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">display</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">_index</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


<span class="token comment">// 在行操作 action 中使用</span>
<span class="token variable">$grid</span><span class="token operator">-&gt;</span><span class="token function">actions</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token variable">$actions</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token variable">$index</span> <span class="token operator">=</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">_index</span><span class="token punctuation">;</span>
    
    <span class="token operator">...</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="获取当前行数据" tabindex="-1"><a class="header-anchor" href="#获取当前行数据" aria-hidden="true">#</a> 获取当前行数据</h3><p>可以通过传入的<code>$actions</code>参数来获取当前行的数据：</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">Dcat<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Grid</span><span class="token punctuation">;</span>

<span class="token variable">$grid</span><span class="token operator">-&gt;</span><span class="token function">actions</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token class-name class-name-fully-qualified type-declaration">Grid<span class="token punctuation">\\</span>Displayers<span class="token punctuation">\\</span>Actions</span> <span class="token variable">$actions</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 当前行的数据数组</span>
    <span class="token variable">$rowArray</span> <span class="token operator">=</span> <span class="token variable">$actions</span><span class="token operator">-&gt;</span><span class="token property">row</span><span class="token operator">-&gt;</span><span class="token function">toArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    
    <span class="token comment">// 当前行的某个字段的数据</span>
    <span class="token variable">$email</span> <span class="token operator">=</span> <span class="token variable">$actions</span><span class="token operator">-&gt;</span><span class="token property">row</span><span class="token operator">-&gt;</span><span class="token property">email</span><span class="token punctuation">;</span>
    
    <span class="token comment">// 获取当前行主键值</span>
    <span class="token variable">$id</span> <span class="token operator">=</span> <span class="token variable">$actions</span><span class="token operator">-&gt;</span><span class="token function">getKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="添加自定义按钮" tabindex="-1"><a class="header-anchor" href="#添加自定义按钮" aria-hidden="true">#</a> 添加自定义按钮</h3><p>如果有自定义的操作按钮，可以通过下面的方式添加：</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">Dcat<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Grid</span><span class="token punctuation">;</span>

<span class="token variable">$grid</span><span class="token operator">-&gt;</span><span class="token function">actions</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token class-name class-name-fully-qualified type-declaration">Grid<span class="token punctuation">\\</span>Displayers<span class="token punctuation">\\</span>Actions</span> <span class="token variable">$actions</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// append一个操作</span>
    <span class="token variable">$actions</span><span class="token operator">-&gt;</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;&lt;a href=&quot;&quot;&gt;&lt;i class=&quot;fa fa-eye&quot;&gt;&lt;/i&gt;&lt;/a&gt;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// append一个复杂操作</span>
    <span class="token variable">$actions</span><span class="token operator">-&gt;</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Copy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// prepend一个操作</span>
    <span class="token variable">$actions</span><span class="token operator">-&gt;</span><span class="token function">prepend</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;&lt;a href=&quot;&quot;&gt;&lt;i class=&quot;fa fa-paper-plane&quot;&gt;&lt;/i&gt;&lt;/a&gt;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="添加复杂操作按钮" tabindex="-1"><a class="header-anchor" href="#添加复杂操作按钮" aria-hidden="true">#</a> 添加复杂操作按钮</h3><p>如果有比较复杂的操作，可以参考下面的方式：</p><p>先定义行操作类继承<code>Dcat\\Admin\\Grid\\RowAction</code></p>`,22),r=t(`<div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>

<span class="token keyword">namespace</span> <span class="token package">App<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Extensions</span><span class="token punctuation">;</span>

<span class="token keyword">use</span> <span class="token package">Dcat<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Grid<span class="token punctuation">\\</span>RowAction</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">CheckRow</span> <span class="token keyword">extends</span> <span class="token class-name">RowAction</span>
<span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * 返回字段标题
     * 
     * <span class="token keyword">@return</span> <span class="token class-name"><span class="token keyword">string</span></span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">title</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string single-quoted-string">&#39;Check row&#39;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token doc-comment comment">/**
     * 添加JS
     * 
     * <span class="token keyword">@return</span> <span class="token class-name"><span class="token keyword">string</span></span>
     */</span>
    <span class="token keyword">protected</span> <span class="token keyword">function</span> <span class="token function-definition function">script</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string heredoc-string"><span class="token delimiter symbol"><span class="token punctuation">&lt;&lt;&lt;</span>JS</span>
$(&#39;.grid-check-row&#39;).on(&#39;click&#39;, function () {
    
    // Your code.
    console.log($(this).data(&#39;id&#39;));
    
});
<span class="token delimiter symbol">JS<span class="token punctuation">;</span></span></span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">html</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// 获取当前行数据ID</span>
        <span class="token variable">$id</span> <span class="token operator">=</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">getKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        <span class="token comment">// 获取当前行数据的用户名</span>
        <span class="token variable">$username</span> <span class="token operator">=</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">row</span><span class="token operator">-&gt;</span><span class="token property">username</span><span class="token punctuation">;</span>
        
        <span class="token comment">// 这里需要添加一个class, 和上面script方法对应</span>
        <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">setHtmlAttribute</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;data-id&#39;</span> <span class="token operator">=&gt;</span> <span class="token variable">$id</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;email&#39;</span> <span class="token operator">=&gt;</span> <span class="token variable">$username</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;class&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;grid-check-row&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">return</span> <span class="token keyword static-context">parent</span><span class="token operator">::</span><span class="token function">html</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后添加操作：</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token variable">$grid</span><span class="token operator">-&gt;</span><span class="token function">actions</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token keyword">new</span> <span class="token class-name">CheckRow</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 也可以通过这种方式添加</span>
<span class="token variable">$grid</span><span class="token operator">-&gt;</span><span class="token function">actions</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token class-name class-name-fully-qualified type-declaration">Grid<span class="token punctuation">\\</span>Displayers<span class="token punctuation">\\</span>Actions</span> <span class="token variable">$actions</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token variable">$actions</span><span class="token operator">-&gt;</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">CheckRow</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="操作按钮需要与api交互" tabindex="-1"><a class="header-anchor" href="#操作按钮需要与api交互" aria-hidden="true">#</a> 操作按钮需要与API交互</h3><p>如果你的操作类需要与后台接口交互，则可以在你的操作类中加上<code>handle</code>方法，这样就可以很方便的在同一个类里面处理完所有逻辑</p>`,5),k=t(`<div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>

<span class="token keyword">namespace</span> <span class="token package">App<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>RowActions</span><span class="token punctuation">;</span>

<span class="token keyword">use</span> <span class="token package">Dcat<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Grid<span class="token punctuation">\\</span>RowAction</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Http<span class="token punctuation">\\</span>Request</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Database<span class="token punctuation">\\</span>Eloquent<span class="token punctuation">\\</span>Model</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">Copy</span> <span class="token keyword">extends</span> <span class="token class-name">RowAction</span>
<span class="token punctuation">{</span>
    <span class="token keyword">protected</span> <span class="token variable">$model</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">__construct</span><span class="token punctuation">(</span><span class="token keyword type-hint">string</span> <span class="token variable">$model</span> <span class="token operator">=</span> <span class="token constant">null</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">model</span> <span class="token operator">=</span> <span class="token variable">$model</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 标题
     *
     * <span class="token keyword">@return</span> <span class="token class-name"><span class="token keyword">string</span></span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">title</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string single-quoted-string">&#39;Copy&#39;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 设置确认弹窗信息，如果返回空值，则不会弹出弹窗
     *
     * 允许返回字符串或数组类型
     *
     * <span class="token keyword">@return</span> <span class="token class-name"><span class="token keyword">array</span><span class="token punctuation">|</span><span class="token keyword">string</span><span class="token punctuation">|</span><span class="token keyword">void</span></span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">confirm</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">[</span>
            <span class="token comment">// 确认弹窗 title</span>
            <span class="token string double-quoted-string">&quot;您确定要复制这行数据吗？&quot;</span><span class="token punctuation">,</span>
            <span class="token comment">// 确认弹窗 content</span>
            <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">row</span><span class="token operator">-&gt;</span><span class="token property">username</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 处理请求
     *
     * <span class="token keyword">@param</span> <span class="token class-name">Request</span> <span class="token parameter">$request</span>
     *
     * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">\\</span>Dcat<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Actions<span class="token punctuation">\\</span>Response</span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">handle</span><span class="token punctuation">(</span><span class="token class-name type-declaration">Request</span> <span class="token variable">$request</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// 获取当前行ID</span>
        <span class="token variable">$id</span> <span class="token operator">=</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">getKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 获取 parameters 方法传递的参数</span>
        <span class="token variable">$username</span> <span class="token operator">=</span> <span class="token variable">$request</span><span class="token operator">-&gt;</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;username&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token variable">$model</span> <span class="token operator">=</span> <span class="token variable">$request</span><span class="token operator">-&gt;</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;model&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 复制数据</span>
        <span class="token variable">$model</span><span class="token operator">::</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token variable">$id</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">replicate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">save</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 返回响应结果并刷新页面</span>
        <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">response</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">success</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;复制成功: [<span class="token interpolation"><span class="token punctuation">{</span><span class="token variable">$username</span><span class="token punctuation">}</span></span>]&quot;</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">refresh</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 设置要POST到接口的数据
     *
     * <span class="token keyword">@return</span> <span class="token class-name"><span class="token keyword">array</span></span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">parameters</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">[</span>
            <span class="token comment">// 发送当前行 username 字段数据到接口</span>
            <span class="token string single-quoted-string">&#39;username&#39;</span> <span class="token operator">=&gt;</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">row</span><span class="token operator">-&gt;</span><span class="token property">username</span><span class="token punctuation">,</span>
            <span class="token comment">// 把模型类名传递到接口</span>
            <span class="token string single-quoted-string">&#39;model&#39;</span> <span class="token operator">=&gt;</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">model</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">App<span class="token punctuation">\\</span>Models<span class="token punctuation">\\</span>User</span><span class="token punctuation">;</span>

<span class="token variable">$grid</span><span class="token operator">-&gt;</span><span class="token function">actions</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token keyword">new</span> <span class="token class-name">Copy</span><span class="token punctuation">(</span><span class="token class-name static-context">User</span><span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 也可以通过这种方式添加</span>
<span class="token variable">$grid</span><span class="token operator">-&gt;</span><span class="token function">actions</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token class-name class-name-fully-qualified type-declaration">Grid<span class="token punctuation">\\</span>Displayers<span class="token punctuation">\\</span>Actions</span> <span class="token variable">$actions</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token variable">$actions</span><span class="token operator">-&gt;</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Copy</span><span class="token punctuation">(</span><span class="token class-name static-context">User</span><span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="表单弹窗" tabindex="-1"><a class="header-anchor" href="#表单弹窗" aria-hidden="true">#</a> 表单弹窗</h2>`,4);function v(m,b){const s=c("RouterLink");return i(),l("div",null,[d,a("blockquote",null,[a("p",null,[n("{tip} 动作类更详细的用法，请参考"),e(s,{to:"/zh/guide/action.html"},{default:p(()=>[n("动作基本使用")]),_:1}),n("以及"),e(s,{to:"/zh/guide/action-grid.html"},{default:p(()=>[n("数据表格动作")]),_:1}),n("。")])]),r,a("blockquote",null,[a("p",null,[n("{tip} 动作类更详细的用法，请参考"),e(s,{to:"/zh/guide/action.html"},{default:p(()=>[n("动作基本使用")]),_:1}),n("以及"),e(s,{to:"/zh/guide/action-grid.html"},{default:p(()=>[n("数据表格动作")]),_:1}),n("。")])]),k,a("p",null,[n("请参考文档"),e(s,{to:"/zh/guide/widgets-form.html#modal"},{default:p(()=>[n("工具表单 - 弹窗")]),_:1})])])}const y=o(u,[["render",v],["__file","model-grid-actions.html.vue"]]);export{y as default};
