import{_ as l}from"./plugin-vue_export-helper-c27b6911.js";import{r as c,o as i,c as u,b as n,d as a,w as t,e as s,a as p}from"./app-5f6cf456.js";const r={},d=n("h1",{id:"export-formats",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#export-formats","aria-hidden":"true"},"#"),s(" Export formats")],-1),k={class:"table-of-contents"},h=p(`<p>By default, the export format is determined by the extension of the file. If you want to explicitly configure the export format, you can pass it through as 2nd parameter.</p><h2 id="xlsx" tabindex="-1"><a class="header-anchor" href="#xlsx" aria-hidden="true">#</a> XLSX</h2><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">return</span> <span class="token class-name static-context">Excel</span><span class="token operator">::</span><span class="token function">download</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">InvoicesExport</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;invoices.xlsx&#39;</span><span class="token punctuation">,</span> <span class="token class-name class-name-fully-qualified static-context"><span class="token punctuation">\\</span>Maatwebsite<span class="token punctuation">\\</span>Excel<span class="token punctuation">\\</span>Excel</span><span class="token operator">::</span><span class="token constant">XLSX</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="csv" tabindex="-1"><a class="header-anchor" href="#csv" aria-hidden="true">#</a> CSV</h2><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">return</span> <span class="token class-name static-context">Excel</span><span class="token operator">::</span><span class="token function">download</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">InvoicesExport</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;invoices.csv&#39;</span><span class="token punctuation">,</span> <span class="token class-name class-name-fully-qualified static-context"><span class="token punctuation">\\</span>Maatwebsite<span class="token punctuation">\\</span>Excel<span class="token punctuation">\\</span>Excel</span><span class="token operator">::</span><span class="token constant">CSV</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>By default the CSV is download with Content Type <code>text/plain</code>, if you want to customize the Content-Type header, you can do so by passing it as 3rd parameter.</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">return</span> <span class="token class-name static-context">Excel</span><span class="token operator">::</span><span class="token function">download</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">InvoicesExport</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;invoices.csv&#39;</span><span class="token punctuation">,</span> <span class="token class-name class-name-fully-qualified static-context"><span class="token punctuation">\\</span>Maatwebsite<span class="token punctuation">\\</span>Excel<span class="token punctuation">\\</span>Excel</span><span class="token operator">::</span><span class="token constant">CSV</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>
      <span class="token string single-quoted-string">&#39;Content-Type&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;text/csv&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),m={class:"hint-container tip"},x=n("p",{class:"hint-container-title"},"Laravel CSV",-1),v={href:"/csv/1.0/getting-started/",target:"_blank",rel:"noopener noreferrer"},f=p(`<h2 id="tsv" tabindex="-1"><a class="header-anchor" href="#tsv" aria-hidden="true">#</a> TSV</h2><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">return</span> <span class="token class-name static-context">Excel</span><span class="token operator">::</span><span class="token function">download</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">InvoicesExport</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;invoices.tsv&#39;</span><span class="token punctuation">,</span> <span class="token class-name class-name-fully-qualified static-context"><span class="token punctuation">\\</span>Maatwebsite<span class="token punctuation">\\</span>Excel<span class="token punctuation">\\</span>Excel</span><span class="token operator">::</span><span class="token constant">TSV</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="ods" tabindex="-1"><a class="header-anchor" href="#ods" aria-hidden="true">#</a> ODS</h2><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">return</span> <span class="token class-name static-context">Excel</span><span class="token operator">::</span><span class="token function">download</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">InvoicesExport</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;invoices.ods&#39;</span><span class="token punctuation">,</span> <span class="token class-name class-name-fully-qualified static-context"><span class="token punctuation">\\</span>Maatwebsite<span class="token punctuation">\\</span>Excel<span class="token punctuation">\\</span>Excel</span><span class="token operator">::</span><span class="token constant">ODS</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="xls" tabindex="-1"><a class="header-anchor" href="#xls" aria-hidden="true">#</a> XLS</h2><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">return</span> <span class="token class-name static-context">Excel</span><span class="token operator">::</span><span class="token function">download</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">InvoicesExport</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;invoices.xls&#39;</span><span class="token punctuation">,</span> <span class="token class-name class-name-fully-qualified static-context"><span class="token punctuation">\\</span>Maatwebsite<span class="token punctuation">\\</span>Excel<span class="token punctuation">\\</span>Excel</span><span class="token operator">::</span><span class="token constant">XLS</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="html" tabindex="-1"><a class="header-anchor" href="#html" aria-hidden="true">#</a> HTML</h2><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">return</span> <span class="token class-name static-context">Excel</span><span class="token operator">::</span><span class="token function">download</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">InvoicesExport</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;invoices.html&#39;</span><span class="token punctuation">,</span> <span class="token class-name class-name-fully-qualified static-context"><span class="token punctuation">\\</span>Maatwebsite<span class="token punctuation">\\</span>Excel<span class="token punctuation">\\</span>Excel</span><span class="token operator">::</span><span class="token constant">HTML</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,8),g={class:"hint-container warning"},w=n("p",{class:"hint-container-title"},"Exporting to PDF",-1),b={href:"https://phpspreadsheet.readthedocs.io/en/latest/topics/reading-and-writing-to-file/#pdf",target:"_blank",rel:"noopener noreferrer"},_=p(`<h2 id="mpdf" tabindex="-1"><a class="header-anchor" href="#mpdf" aria-hidden="true">#</a> MPDF</h2><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">return</span> <span class="token class-name static-context">Excel</span><span class="token operator">::</span><span class="token function">download</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">InvoicesExport</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;invoices.pdf&#39;</span><span class="token punctuation">,</span> <span class="token class-name class-name-fully-qualified static-context"><span class="token punctuation">\\</span>Maatwebsite<span class="token punctuation">\\</span>Excel<span class="token punctuation">\\</span>Excel</span><span class="token operator">::</span><span class="token constant">MPDF</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="dompdf" tabindex="-1"><a class="header-anchor" href="#dompdf" aria-hidden="true">#</a> DOMPDF</h2><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">return</span> <span class="token class-name static-context">Excel</span><span class="token operator">::</span><span class="token function">download</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">InvoicesExport</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;invoices.pdf&#39;</span><span class="token punctuation">,</span> <span class="token class-name class-name-fully-qualified static-context"><span class="token punctuation">\\</span>Maatwebsite<span class="token punctuation">\\</span>Excel<span class="token punctuation">\\</span>Excel</span><span class="token operator">::</span><span class="token constant">DOMPDF</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="tcpdf" tabindex="-1"><a class="header-anchor" href="#tcpdf" aria-hidden="true">#</a> TCPDF</h2><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">return</span> <span class="token class-name static-context">Excel</span><span class="token operator">::</span><span class="token function">download</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">InvoicesExport</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;invoices.pdf&#39;</span><span class="token punctuation">,</span> <span class="token class-name class-name-fully-qualified static-context"><span class="token punctuation">\\</span>Maatwebsite<span class="token punctuation">\\</span>Excel<span class="token punctuation">\\</span>Excel</span><span class="token operator">::</span><span class="token constant">TCPDF</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,6);function y(E,q){const e=c("router-link"),o=c("ExternalLinkIcon");return i(),u("div",null,[d,n("nav",k,[n("ul",null,[n("li",null,[a(e,{to:"#xlsx"},{default:t(()=>[s("XLSX")]),_:1})]),n("li",null,[a(e,{to:"#csv"},{default:t(()=>[s("CSV")]),_:1})]),n("li",null,[a(e,{to:"#tsv"},{default:t(()=>[s("TSV")]),_:1})]),n("li",null,[a(e,{to:"#ods"},{default:t(()=>[s("ODS")]),_:1})]),n("li",null,[a(e,{to:"#xls"},{default:t(()=>[s("XLS")]),_:1})]),n("li",null,[a(e,{to:"#html"},{default:t(()=>[s("HTML")]),_:1})]),n("li",null,[a(e,{to:"#mpdf"},{default:t(()=>[s("MPDF")]),_:1})]),n("li",null,[a(e,{to:"#dompdf"},{default:t(()=>[s("DOMPDF")]),_:1})]),n("li",null,[a(e,{to:"#tcpdf"},{default:t(()=>[s("TCPDF")]),_:1})])])]),h,n("div",m,[x,n("p",null,[s("You may have a look at our "),n("a",v,[s("Laravel CSV"),a(o)]),s(" package as well.")])]),f,n("div",g,[w,n("p",null,[s("If you'd like to export to PDF, you must now install a PDF rendering library yourself. Please refer to the "),n("a",b,[s("PhpSpreadsheet Documentation"),a(o)]),s(" for more information.")])]),_])}const M=l(r,[["render",y],["__file","export-formats.html.vue"]]);export{M as default};
