import{_ as p}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as c,c as l,b as s,d as t,w as e,e as n,a as i}from"./app-edc8bdf9.js";const u={},r=s("h1",{id:"import-formats",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#import-formats","aria-hidden":"true"},"#"),n(" Import formats")],-1),d={class:"table-of-contents"},k=i(`<p>By default, the import format is determined by the extension of the file. If you want to explicitly configure the import format, you can pass it through as 3rd parameter.</p><h2 id="xlsx" tabindex="-1"><a class="header-anchor" href="#xlsx" aria-hidden="true">#</a> XLSX</h2><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">UsersImport</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">import</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;users.xlsx&#39;</span><span class="token punctuation">,</span> <span class="token constant">null</span><span class="token punctuation">,</span> <span class="token class-name class-name-fully-qualified static-context"><span class="token punctuation">\\</span>Maatwebsite<span class="token punctuation">\\</span>Excel<span class="token punctuation">\\</span>Excel</span><span class="token operator">::</span><span class="token constant">XLSX</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="csv" tabindex="-1"><a class="header-anchor" href="#csv" aria-hidden="true">#</a> CSV</h2><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">UsersImport</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">import</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;users.csv&#39;</span><span class="token punctuation">,</span> <span class="token constant">null</span><span class="token punctuation">,</span> <span class="token class-name class-name-fully-qualified static-context"><span class="token punctuation">\\</span>Maatwebsite<span class="token punctuation">\\</span>Excel<span class="token punctuation">\\</span>Excel</span><span class="token operator">::</span><span class="token constant">CSV</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="tsv" tabindex="-1"><a class="header-anchor" href="#tsv" aria-hidden="true">#</a> TSV</h2><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">UsersImport</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">import</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;users.tsv&#39;</span><span class="token punctuation">,</span> <span class="token constant">null</span><span class="token punctuation">,</span> <span class="token class-name class-name-fully-qualified static-context"><span class="token punctuation">\\</span>Maatwebsite<span class="token punctuation">\\</span>Excel<span class="token punctuation">\\</span>Excel</span><span class="token operator">::</span><span class="token constant">TSV</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="ods" tabindex="-1"><a class="header-anchor" href="#ods" aria-hidden="true">#</a> ODS</h2><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">UsersImport</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">import</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;users.ods&#39;</span><span class="token punctuation">,</span> <span class="token constant">null</span><span class="token punctuation">,</span> <span class="token class-name class-name-fully-qualified static-context"><span class="token punctuation">\\</span>Maatwebsite<span class="token punctuation">\\</span>Excel<span class="token punctuation">\\</span>Excel</span><span class="token operator">::</span><span class="token constant">ODS</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="xls" tabindex="-1"><a class="header-anchor" href="#xls" aria-hidden="true">#</a> XLS</h2><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">UsersImport</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">import</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;users.xls&#39;</span><span class="token punctuation">,</span> <span class="token constant">null</span><span class="token punctuation">,</span> <span class="token class-name class-name-fully-qualified static-context"><span class="token punctuation">\\</span>Maatwebsite<span class="token punctuation">\\</span>Excel<span class="token punctuation">\\</span>Excel</span><span class="token operator">::</span><span class="token constant">XLS</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="slk" tabindex="-1"><a class="header-anchor" href="#slk" aria-hidden="true">#</a> SLK</h2><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">UsersImport</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">import</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;users.slk&#39;</span><span class="token punctuation">,</span> <span class="token constant">null</span><span class="token punctuation">,</span> <span class="token class-name class-name-fully-qualified static-context"><span class="token punctuation">\\</span>Maatwebsite<span class="token punctuation">\\</span>Excel<span class="token punctuation">\\</span>Excel</span><span class="token operator">::</span><span class="token constant">SLK</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="xml" tabindex="-1"><a class="header-anchor" href="#xml" aria-hidden="true">#</a> XML</h2><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">UsersImport</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">import</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;users.xml&#39;</span><span class="token punctuation">,</span> <span class="token constant">null</span><span class="token punctuation">,</span> <span class="token class-name class-name-fully-qualified static-context"><span class="token punctuation">\\</span>Maatwebsite<span class="token punctuation">\\</span>Excel<span class="token punctuation">\\</span>Excel</span><span class="token operator">::</span><span class="token constant">XML</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="gnumeric" tabindex="-1"><a class="header-anchor" href="#gnumeric" aria-hidden="true">#</a> GNUMERIC</h2><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">UsersImport</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">import</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;users.gnumeric&#39;</span><span class="token punctuation">,</span> <span class="token constant">null</span><span class="token punctuation">,</span> <span class="token class-name class-name-fully-qualified static-context"><span class="token punctuation">\\</span>Maatwebsite<span class="token punctuation">\\</span>Excel<span class="token punctuation">\\</span>Excel</span><span class="token operator">::</span><span class="token constant">GNUMERIC</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="html" tabindex="-1"><a class="header-anchor" href="#html" aria-hidden="true">#</a> HTML</h2><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">UsersImport</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">import</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;users.html&#39;</span><span class="token punctuation">,</span> <span class="token constant">null</span><span class="token punctuation">,</span> <span class="token class-name class-name-fully-qualified static-context"><span class="token punctuation">\\</span>Maatwebsite<span class="token punctuation">\\</span>Excel<span class="token punctuation">\\</span>Excel</span><span class="token operator">::</span><span class="token constant">HTML</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,19);function m(h,g){const a=o("router-link");return c(),l("div",null,[r,s("nav",d,[s("ul",null,[s("li",null,[t(a,{to:"#xlsx"},{default:e(()=>[n("XLSX")]),_:1})]),s("li",null,[t(a,{to:"#csv"},{default:e(()=>[n("CSV")]),_:1})]),s("li",null,[t(a,{to:"#tsv"},{default:e(()=>[n("TSV")]),_:1})]),s("li",null,[t(a,{to:"#ods"},{default:e(()=>[n("ODS")]),_:1})]),s("li",null,[t(a,{to:"#xls"},{default:e(()=>[n("XLS")]),_:1})]),s("li",null,[t(a,{to:"#slk"},{default:e(()=>[n("SLK")]),_:1})]),s("li",null,[t(a,{to:"#xml"},{default:e(()=>[n("XML")]),_:1})]),s("li",null,[t(a,{to:"#gnumeric"},{default:e(()=>[n("GNUMERIC")]),_:1})]),s("li",null,[t(a,{to:"#html"},{default:e(()=>[n("HTML")]),_:1})])])]),k])}const v=p(u,[["render",m],["__file","import-formats.html.vue"]]);export{v as default};
