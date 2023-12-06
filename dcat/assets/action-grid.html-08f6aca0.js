import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{r as c,o,c as p,a as s,b as n,d as e,w as t,e as l}from"./app-c17653d8.js";const d={},r=s("h1",{id:"数据表格动作",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#数据表格动作","aria-hidden":"true"},"#"),n(" 数据表格动作")],-1),u=s("h2",{id:"表格动作基类-gridaction",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#表格动作基类-gridaction","aria-hidden":"true"},"#"),n(" 表格动作基类 (GridAction)")],-1),k=s("code",null,"AbstractTool",-1),v=s("code",null,"RowAction",-1),m=s("code",null,"BatchAction",-1),b=s("code",null,"Dcat\\Admin\\Grid\\GridAction",-1),h=s("code",null,"GridAction",-1),g=s("code",null,"Action",-1),y=l(`<p>下面将介绍<code>GridAction</code>类中增加的方法或属性</p><h3 id="表格实例-parent" tabindex="-1"><a class="header-anchor" href="#表格实例-parent" aria-hidden="true">#</a> 表格实例 (parent)</h3><p>通过 <code>parent</code> 属性可以获取到表格实例 (<code>Dcat\\Admin\\Grid</code>)。</p><p>下面简单的演示下用法，这段代码没有任何实际意义</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">Dcat<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Grid<span class="token punctuation">\\</span>GridAction</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">MyAction</span> extend GridAction
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">html</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token variable">$gridName</span> <span class="token operator">=</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">parent</span><span class="token operator">-&gt;</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        <span class="token keyword">return</span> <span class="token operator">...</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token operator">...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="表格页面地址-resource" tabindex="-1"><a class="header-anchor" href="#表格页面地址-resource" aria-hidden="true">#</a> 表格页面地址 (resource)</h3><p>通过 <code>resource</code> 方法可以获取到表格页面的地址。</p><p>下面简单的演示下用法，这段代码没有任何实际意义</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">Dcat<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Grid<span class="token punctuation">\\</span>GridAction</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">MyAction</span> extend GridAction
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">html</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// 假如你的列表页路径为 /admin/users，则这里的值为 http://域名/admin/users    </span>
        <span class="token variable">$path</span> <span class="token operator">=</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">resource</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        <span class="token keyword">return</span> <span class="token operator">...</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token operator">...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="工具栏操作按钮基类-abstracttool" tabindex="-1"><a class="header-anchor" href="#工具栏操作按钮基类-abstracttool" aria-hidden="true">#</a> 工具栏操作按钮基类 (AbstractTool)</h2><p>表格工具栏按钮基类(<code>Dcat\\Admin\\Grid\\Tools\\AbstractTool</code>)继承自<code>GridAction</code>类。</p><p>下面将介绍<code>AbstractTool</code>类中增加的方法或属性</p><h3 id="按钮样式-style" tabindex="-1"><a class="header-anchor" href="#按钮样式-style" aria-hidden="true">#</a> 按钮样式 (style)</h3><p>通过 <code>style</code> 属性可以设置工具栏按钮的类(<code>class</code>)，默认值为 <code>btn btn-white waves-effect</code>。</p><p>下面简单的演示下用法</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">Dcat<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Grid<span class="token punctuation">\\</span>AbstractTool</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">MyTool</span> extend AbstractTool
<span class="token punctuation">{</span>
    <span class="token keyword">protected</span> <span class="token variable">$style</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;btn btn-outline-primary waves-effect&#39;</span><span class="token punctuation">;</span>
    
    <span class="token operator">...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="批量操作基类-batchaction" tabindex="-1"><a class="header-anchor" href="#批量操作基类-batchaction" aria-hidden="true">#</a> 批量操作基类 (BatchAction)</h2><p>表格工具栏按钮基类(<code>Dcat\\Admin\\Grid\\Tools\\BatchAction</code>)继承自<code>GridAction</code>类。</p><p>下面将介绍<code>BatchAction</code>类中增加的方法或属性</p><h3 id="获取选中行的主键数组-getselectedkeysscript" tabindex="-1"><a class="header-anchor" href="#获取选中行的主键数组-getselectedkeysscript" aria-hidden="true">#</a> 获取选中行的主键数组 (getSelectedKeysScript)</h3><p>通过 <code>getSelectedKeysScript</code> 方法可以生成获取选中的行的主键数组的<code>JS</code>代码。</p><p>下面简单的演示下用法</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">Dcat<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Grid<span class="token punctuation">\\</span>BatchAction</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">MyBatchAction</span> extend BatchAction
<span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * <span class="token punctuation">{</span><span class="token keyword">@inheritdoc</span><span class="token punctuation">}</span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">actionScript</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token variable">$warning</span> <span class="token operator">=</span> <span class="token function">__</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;No data selected!&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">return</span> <span class="token string heredoc-string"><span class="token delimiter symbol"><span class="token punctuation">&lt;&lt;&lt;</span>JS</span>
    var key = <span class="token interpolation"><span class="token punctuation">{</span><span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">getSelectedKeysScript</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>
    
    if (key.length === 0) {
        Dcat.warning(&#39;<span class="token interpolation"><span class="token punctuation">{</span><span class="token variable">$warning</span><span class="token punctuation">}</span></span>&#39;);
        return ;
    }
    Object.assign(data, {_key:key});
<span class="token delimiter symbol">JS<span class="token punctuation">;</span></span></span>
    <span class="token punctuation">}</span>
    
    <span class="token operator">...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="行操作基类-rowaction" tabindex="-1"><a class="header-anchor" href="#行操作基类-rowaction" aria-hidden="true">#</a> 行操作基类 (RowAction)</h2><p>表格工具栏按钮基类(<code>Dcat\\Admin\\Grid\\Tools\\RowAction</code>)继承自<code>GridAction</code>类。</p><p>下面将介绍<code>RowAction</code>类中增加的方法或属性</p><h3 id="行数据-row" tabindex="-1"><a class="header-anchor" href="#行数据-row" aria-hidden="true">#</a> 行数据 (row)</h3><p>通过 <code>row</code> 属性可以获取到当前行数据内容。</p><p>下面简单的演示下用法，这段代码没有任何实际意义</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">Dcat<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Grid<span class="token punctuation">\\</span>RowAction</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">MyRowAction</span> extend RowAction
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">html</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// 获取当前行的字段值</span>
        <span class="token variable">$username</span> <span class="token operator">=</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">row</span><span class="token operator">-&gt;</span><span class="token property">username</span><span class="token punctuation">;</span>
        
        <span class="token comment">// 转化为数组</span>
        <span class="token variable">$rowArray</span> <span class="token operator">=</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">row</span><span class="token operator">-&gt;</span><span class="token function">toArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        <span class="token keyword">return</span> <span class="token operator">...</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token operator">...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="主键值-getkey" tabindex="-1"><a class="header-anchor" href="#主键值-getkey" aria-hidden="true">#</a> 主键值 (getKey)</h3><p>通过 <code>getKey</code> 属性方法可以获取到当前行数据的主键值(<code>ID</code>)。</p><p>下面简单的演示下用法，这段代码没有任何实际意义</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">Dcat<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Grid<span class="token punctuation">\\</span>RowAction</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">MyRowAction</span> extend RowAction
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">html</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token variable">$id</span> <span class="token operator">=</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">getKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        <span class="token keyword">return</span> <span class="token operator">...</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token operator">...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,34);function f(w,A){const a=c("RouterLink");return o(),p("div",null,[r,u,s("p",null,[n("所有数据表格相关的动作类，包括"),e(a,{to:"/zh/guide/model-grid-custom-tools.html"},{default:t(()=>[n("工具栏按钮")]),_:1}),n("("),k,n(")、 "),e(a,{to:"/zh/guide/model-grid-actions.html"},{default:t(()=>[n("行操作")]),_:1}),n("("),v,n(")、"),e(a,{to:"/zh/guide/model-grid-custom-tools.html#batch"},{default:t(()=>[n("批量操作")]),_:1}),n("("),m,n(") 等等操作按钮的基类都继承自"),b,n("类，而"),h,n("则继承自"),e(a,{to:"/zh/guide/action.html"},{default:t(()=>[n("动作类基类")]),_:1}),n("("),g,n(")。")]),y])}const G=i(d,[["render",f],["__file","action-grid.html.vue"]]);export{G as default};
