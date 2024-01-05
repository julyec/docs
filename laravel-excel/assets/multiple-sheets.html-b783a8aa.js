import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o as p,c as o,b as n,d as c,w as l,e as s,a as i}from"./app-5f6cf456.js";const u={},r=n("h1",{id:"multiple-sheets",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#multiple-sheets","aria-hidden":"true"},"#"),s(" Multiple Sheets")],-1),d={class:"table-of-contents"},k=i(`<p>To allow the export to have multiple sheets, the <code>WithMultipleSheets</code> concern should be used. The <code>sheets()</code> method expects an array of sheet export objects to be returned.</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">namespace</span> <span class="token package">App<span class="token punctuation">\\</span>Exports</span><span class="token punctuation">;</span>

<span class="token keyword">use</span> <span class="token package">Maatwebsite<span class="token punctuation">\\</span>Excel<span class="token punctuation">\\</span>Concerns<span class="token punctuation">\\</span>Exportable</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Maatwebsite<span class="token punctuation">\\</span>Excel<span class="token punctuation">\\</span>Concerns<span class="token punctuation">\\</span>WithMultipleSheets</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">InvoicesExport</span> <span class="token keyword">implements</span> <span class="token class-name">WithMultipleSheets</span>
<span class="token punctuation">{</span>
    <span class="token keyword">use</span> <span class="token package">Exportable</span><span class="token punctuation">;</span>

    <span class="token keyword">protected</span> <span class="token variable">$year</span><span class="token punctuation">;</span>
    
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">__construct</span><span class="token punctuation">(</span><span class="token keyword type-hint">int</span> <span class="token variable">$year</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">year</span> <span class="token operator">=</span> <span class="token variable">$year</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * <span class="token keyword">@return</span> <span class="token class-name"><span class="token keyword">array</span></span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">sheets</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">array</span>
    <span class="token punctuation">{</span>
        <span class="token variable">$sheets</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token variable">$month</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token variable">$month</span> <span class="token operator">&lt;=</span> <span class="token number">12</span><span class="token punctuation">;</span> <span class="token variable">$month</span><span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token variable">$sheets</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">InvoicesPerMonthSheet</span><span class="token punctuation">(</span><span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">year</span><span class="token punctuation">,</span> <span class="token variable">$month</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">return</span> <span class="token variable">$sheets</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="sheet-classes" tabindex="-1"><a class="header-anchor" href="#sheet-classes" aria-hidden="true">#</a> Sheet classes</h2><p>The <code>InvoicesPerMonthSheet</code> can implement concerns like <code>FromQuery</code>, <code>FromCollection</code>, <code>FromView</code>, ...</p><p><em>Note: The WithTitle concern is needed in order to name each sheet using the <code>title()</code> method</em></p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">namespace</span> <span class="token package">App<span class="token punctuation">\\</span>Exports<span class="token punctuation">\\</span>Sheets</span><span class="token punctuation">;</span>

<span class="token keyword">use</span> <span class="token package">Maatwebsite<span class="token punctuation">\\</span>Excel<span class="token punctuation">\\</span>Concerns<span class="token punctuation">\\</span>FromQuery</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Maatwebsite<span class="token punctuation">\\</span>Excel<span class="token punctuation">\\</span>Concerns<span class="token punctuation">\\</span>WithTitle</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">InvoicesPerMonthSheet</span> <span class="token keyword">implements</span> <span class="token class-name">FromQuery</span><span class="token punctuation">,</span> WithTitle
<span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token variable">$month</span><span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token variable">$year</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">__construct</span><span class="token punctuation">(</span><span class="token keyword type-hint">int</span> <span class="token variable">$year</span><span class="token punctuation">,</span> <span class="token keyword type-hint">int</span> <span class="token variable">$month</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">month</span> <span class="token operator">=</span> <span class="token variable">$month</span><span class="token punctuation">;</span>
        <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">year</span>  <span class="token operator">=</span> <span class="token variable">$year</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * <span class="token keyword">@return</span> <span class="token class-name">Builder</span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">query</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token class-name static-context">Invoice</span>
            <span class="token operator">::</span><span class="token function">query</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token operator">-&gt;</span><span class="token function">whereYear</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;created_at&#39;</span><span class="token punctuation">,</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">year</span><span class="token punctuation">)</span>
            <span class="token operator">-&gt;</span><span class="token function">whereMonth</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;created_at&#39;</span><span class="token punctuation">,</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">month</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * <span class="token keyword">@return</span> <span class="token class-name"><span class="token keyword">string</span></span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">title</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">string</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string single-quoted-string">&#39;Month &#39;</span> <span class="token operator">.</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">month</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The code below can be implemented in any class in order to download an xlsx of all invoices from the current year, with 12 worksheets representing each month of the year.</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">downloadInvoices</span><span class="token punctuation">(</span><span class="token punctuation">)</span> 
<span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">InvoicesExport</span><span class="token punctuation">(</span><span class="token number">2018</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">download</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;invoices.xlsx&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8);function v(m,b){const a=t("router-link");return p(),o("div",null,[r,n("nav",d,[n("ul",null,[n("li",null,[c(a,{to:"#sheet-classes"},{default:l(()=>[s("Sheet classes")]),_:1})])])]),k])}const w=e(u,[["render",v],["__file","multiple-sheets.html.vue"]]);export{w as default};
