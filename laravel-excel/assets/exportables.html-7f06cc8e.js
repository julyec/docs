import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{r as p,o as t,c as o,b as n,d as c,w as l,e as s,a as i}from"./app-edc8bdf9.js";const u={},r=n("h1",{id:"exportables",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#exportables","aria-hidden":"true"},"#"),s(" Exportables")],-1),d={class:"table-of-contents"},k=i(`<p>In the previous example, we used the <code>Excel::download</code> facade to start an export.</p><p>Laravel Excel also provides a <code>Maatwebsite\\Excel\\Concerns\\Exportable</code> trait, to make export classes exportable.</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">namespace</span> <span class="token package">App<span class="token punctuation">\\</span>Exports</span><span class="token punctuation">;</span>

<span class="token keyword">use</span> <span class="token package">App<span class="token punctuation">\\</span>Invoice</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Maatwebsite<span class="token punctuation">\\</span>Excel<span class="token punctuation">\\</span>Concerns<span class="token punctuation">\\</span>FromCollection</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Maatwebsite<span class="token punctuation">\\</span>Excel<span class="token punctuation">\\</span>Concerns<span class="token punctuation">\\</span>Exportable</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">InvoicesExport</span> <span class="token keyword">implements</span> <span class="token class-name">FromCollection</span>
<span class="token punctuation">{</span>
    <span class="token keyword">use</span> <span class="token package">Exportable</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">collection</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token class-name static-context">Invoice</span><span class="token operator">::</span><span class="token function">all</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>We can now download the export without the need for the facade:</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">InvoicesExport</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">download</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;invoices.xlsx&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>You can also pass the Writer Type and optional headers to the download method:</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">InvoicesExport</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">download</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;invoices.csv&#39;</span><span class="token punctuation">,</span> <span class="token class-name static-context">Excel</span><span class="token operator">::</span><span class="token constant">CSV</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;Content-Type&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;text/csv&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Or store it on a disk:</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">InvoicesExport</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">store</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;invoices.xlsx&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;s3&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>You can also pass options to the disk if you like:</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">InvoicesExport</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">store</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;invoices.xlsx&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;s3&#39;</span><span class="token punctuation">,</span> <span class="token constant">null</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;private&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="responsable" tabindex="-1"><a class="header-anchor" href="#responsable" aria-hidden="true">#</a> Responsable</h2><p>The previous (download) example can be made even shorter when adding Laravel&#39;s <code>Responsable</code> interface to the export class:</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">namespace</span> <span class="token package">App<span class="token punctuation">\\</span>Exports</span><span class="token punctuation">;</span>

<span class="token keyword">use</span> <span class="token package">App<span class="token punctuation">\\</span>Invoice</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Maatwebsite<span class="token punctuation">\\</span>Excel<span class="token punctuation">\\</span>Excel</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Contracts<span class="token punctuation">\\</span>Support<span class="token punctuation">\\</span>Responsable</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Maatwebsite<span class="token punctuation">\\</span>Excel<span class="token punctuation">\\</span>Concerns<span class="token punctuation">\\</span>FromCollection</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Maatwebsite<span class="token punctuation">\\</span>Excel<span class="token punctuation">\\</span>Concerns<span class="token punctuation">\\</span>Exportable</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">InvoicesExport</span> <span class="token keyword">implements</span> <span class="token class-name">FromCollection</span><span class="token punctuation">,</span> Responsable
<span class="token punctuation">{</span>
    <span class="token keyword">use</span> <span class="token package">Exportable</span><span class="token punctuation">;</span>
    
    <span class="token doc-comment comment">/**
    * It&#39;s required to define the fileName within
    * the export class when making use of Responsable.
    */</span>
    <span class="token keyword">private</span> <span class="token variable">$fileName</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;invoices.xlsx&#39;</span><span class="token punctuation">;</span>
    
    <span class="token doc-comment comment">/**
    * Optional Writer Type
    */</span>
    <span class="token keyword">private</span> <span class="token variable">$writerType</span> <span class="token operator">=</span> <span class="token class-name static-context">Excel</span><span class="token operator">::</span><span class="token constant">XLSX</span><span class="token punctuation">;</span>
    
    <span class="token doc-comment comment">/**
    * Optional headers
    */</span>
    <span class="token keyword">private</span> <span class="token variable">$headers</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
        <span class="token string single-quoted-string">&#39;Content-Type&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;text/csv&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">collection</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token class-name static-context">Invoice</span><span class="token operator">::</span><span class="token function">all</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>You can now easily return the export class, without the need of calling <code>-&gt;download()</code>.</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">InvoicesExport</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,16);function v(m,b){const a=p("router-link");return t(),o("div",null,[r,n("nav",d,[n("ul",null,[n("li",null,[c(a,{to:"#responsable"},{default:l(()=>[s("Responsable")]),_:1})])])]),k])}const x=e(u,[["render",v],["__file","exportables.html.vue"]]);export{x as default};
