import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{r as i,o as c,c as p,a as s,b as n,d as e,w as t,e as l}from"./app-c17653d8.js";const d={},r=s("h1",{id:"data-table-actions",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#data-table-actions","aria-hidden":"true"},"#"),n(" Data table actions")],-1),u=s("h2",{id:"gridaction-base-classes",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#gridaction-base-classes","aria-hidden":"true"},"#"),n(" GridAction Base Classes")],-1),k=s("code",null,"AbstractTool",-1),v=s("code",null,"RowAction",-1),m=s("code",null,"BatchAction",-1),h=s("code",null,"Dcat\\Admin\\Grid\\GridAction",-1),b=s("code",null,"Dcat\\Admin\\GridAction",-1),g=s("code",null,"GridAction",-1),y=s("code",null,"Action",-1),f=l(`<p>The methods or attributes added to the <code>GridAction</code> class are described below.</p><h3 id="table-example-parent" tabindex="-1"><a class="header-anchor" href="#table-example-parent" aria-hidden="true">#</a> Table Example (parent)</h3><p>The table instance (<code>Dcat\\AdminGrid</code>) can be retrieved through the <code>parent</code> attribute.</p><p>Here&#39;s a simple demonstration of how it&#39;s used:</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">Dcat<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Grid<span class="token punctuation">\\</span>GridAction</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">MyAction</span> extend GridAction
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">html</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token variable">$gridName</span> <span class="token operator">=</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">parent</span><span class="token operator">-&gt;</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        <span class="token keyword">return</span> <span class="token operator">...</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token operator">...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="table-page-address-resource" tabindex="-1"><a class="header-anchor" href="#table-page-address-resource" aria-hidden="true">#</a> Table page address (resource)</h3><p>The <code>resource</code> method is used to get the address of the form page.</p><p>The following is a simple demonstration of how this works.</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">Dcat<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Grid<span class="token punctuation">\\</span>GridAction</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">MyAction</span> extend GridAction
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">html</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// If the path to your listings page is /admin/users, the value here is http://domain/admin/users    </span>
        <span class="token variable">$path</span> <span class="token operator">=</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">resource</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        <span class="token keyword">return</span> <span class="token operator">...</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token operator">...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="toolbar-action-button-base-class-abstracttool" tabindex="-1"><a class="header-anchor" href="#toolbar-action-button-base-class-abstracttool" aria-hidden="true">#</a> Toolbar Action Button Base Class (AbstractTool)</h2><p>The table toolbar button base class (<code>Dcat\\Admin\\GridTools\\AbstractTool</code>) inherits from the <code>GridAction</code> class.</p><p>The following will introduce the methods or properties added in the <code>AbstractTool</code> class.</p><h3 id="button-style-style" tabindex="-1"><a class="header-anchor" href="#button-style-style" aria-hidden="true">#</a> Button style (style)</h3><p>The <code>style</code> property allows you to set the class of the toolbar button (<code>class</code>), which defaults to <code>btn btn-white-white-wave-effect</code>.</p><p>Here&#39;s a simple demonstration</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">Dcat<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Grid<span class="token punctuation">\\</span>AbstractTool</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">MyTool</span> extend AbstractTool
<span class="token punctuation">{</span>
    <span class="token keyword">protected</span> <span class="token variable">$style</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;btn btn-outline-primary waves-effect&#39;</span><span class="token punctuation">;</span>
    
    <span class="token operator">...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="batchaction" tabindex="-1"><a class="header-anchor" href="#batchaction" aria-hidden="true">#</a> BatchAction</h2><p>The table toolbar button base class (<code>Dcat\\Admin\\Tools\\BatchAction</code>) inherits from the <code>GridAction</code> class.</p><p>The following describes the methods or attributes added in the <code>BatchAction</code> class.</p><h3 id="get-the-primary-key-array-for-the-selected-row-getselectedkeysscript" tabindex="-1"><a class="header-anchor" href="#get-the-primary-key-array-for-the-selected-row-getselectedkeysscript" aria-hidden="true">#</a> Get the primary key array for the selected row (getSelectedKeysScript)</h3><p>The <code>getSelectedKeysScript</code> method can be used to generate <code>JS</code> code that gets the primary key array of the selected row.</p><p>Here&#39;s a simple demonstration</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">Dcat<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Grid<span class="token punctuation">\\</span>BatchAction</span>

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="rowaction-base-class-rowaction" tabindex="-1"><a class="header-anchor" href="#rowaction-base-class-rowaction" aria-hidden="true">#</a> RowAction base class (RowAction)</h2><p>The table toolbar button base class (<code>Dcat\\Admin\\Tools\\RowAction</code>) inherits from the <code>GridAction</code> class.</p><p>The following will introduce the methods or attributes added in the <code>RowAction</code> class.</p><h3 id="row-data-row" tabindex="-1"><a class="header-anchor" href="#row-data-row" aria-hidden="true">#</a> row data (row)</h3><p>The <code>row</code> property is used to retrieve the contents of the current row.</p><p>Here&#39;s a simple demonstration of how it&#39;s used.</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">Dcat<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Grid<span class="token punctuation">\\</span>RowAction</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">MyRowAction</span> extend RowAction
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">html</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// Get the field value of the current row</span>
        <span class="token variable">$username</span> <span class="token operator">=</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">row</span><span class="token operator">-&gt;</span><span class="token property">username</span><span class="token punctuation">;</span>
        
        <span class="token comment">// to an array</span>
        <span class="token variable">$rowArray</span> <span class="token operator">=</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">row</span><span class="token operator">-&gt;</span><span class="token function">toArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        <span class="token keyword">return</span> <span class="token operator">...</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token operator">...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="primary-key-value-getkey" tabindex="-1"><a class="header-anchor" href="#primary-key-value-getkey" aria-hidden="true">#</a> Primary key value (getKey)</h3><p>The <code>getKey</code> property method is used to get the primary key (<code>ID</code>) of the current row data.</p><p>The following is a simple demonstration of this usage.</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">Dcat<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Grid<span class="token punctuation">\\</span>RowAction</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">MyRowAction</span> extend RowAction
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">html</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token variable">$id</span> <span class="token operator">=</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">getKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        <span class="token keyword">return</span> <span class="token operator">...</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token operator">...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,34);function w(A,_){const a=i("RouterLink");return c(),p("div",null,[r,u,s("p",null,[n("All datagrid-related action classes, including "),e(a,{to:"/guide/model-grid-custom-tools.html"},{default:t(()=>[n("toolbar buttons")]),_:1}),n(" ("),k,n("), the "),e(a,{to:"/guide/model-grid-actions.html"},{default:t(()=>[n("Row actions")]),_:1}),n("("),v,n("), "),e(a,{to:"/guide/model-grid-custom-tools.html#batch"},{default:t(()=>[n("Batch actions")]),_:1}),n("("),m,n(") The base class of action buttons such as "),h,n(" class is inherited from "),b,n(" class, while "),g,n(" inherits from "),e(a,{to:"/guide/action.html"},{default:t(()=>[n("action class base class")]),_:1}),n("("),y,n(").")]),f])}const G=o(d,[["render",w],["__file","action-grid.html.vue"]]);export{G as default};
