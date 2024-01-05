import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as p,c,b as n,d as e,w as t,e as s,a as l}from"./app-f5806220.js";const r={},u=n("h1",{id:"settings",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#settings","aria-hidden":"true"},"#"),s(" Settings")],-1),d={class:"table-of-contents"},k=l(`<h2 id="properties" tabindex="-1"><a class="header-anchor" href="#properties" aria-hidden="true">#</a> Properties</h2><p>By default the Worksheet properties get configured in <code>config/excel.php</code>. You can configure a default title, description, creator, etc.</p><p>If you want to overrule on a per export basis, you can use the <code>WithProperties</code> concern.</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">namespace</span> <span class="token package">App<span class="token punctuation">\\</span>Exports</span><span class="token punctuation">;</span>

<span class="token keyword">use</span> <span class="token package">Maatwebsite<span class="token punctuation">\\</span>Excel<span class="token punctuation">\\</span>Concerns<span class="token punctuation">\\</span>WithProperties</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">InvoicesExport</span> <span class="token keyword">implements</span> <span class="token class-name">WithProperties</span>
<span class="token punctuation">{</span>    
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">properties</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">array</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">[</span>
            <span class="token string single-quoted-string">&#39;creator&#39;</span>        <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;Patrick Brouwers&#39;</span><span class="token punctuation">,</span>
            <span class="token string single-quoted-string">&#39;lastModifiedBy&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;Patrick Brouwers&#39;</span><span class="token punctuation">,</span>
            <span class="token string single-quoted-string">&#39;title&#39;</span>          <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;Invoices Export&#39;</span><span class="token punctuation">,</span>
            <span class="token string single-quoted-string">&#39;description&#39;</span>    <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;Latest Invoices&#39;</span><span class="token punctuation">,</span>
            <span class="token string single-quoted-string">&#39;subject&#39;</span>        <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;Invoices&#39;</span><span class="token punctuation">,</span>
            <span class="token string single-quoted-string">&#39;keywords&#39;</span>       <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;invoices,export,spreadsheet&#39;</span><span class="token punctuation">,</span>
            <span class="token string single-quoted-string">&#39;category&#39;</span>       <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;Invoices&#39;</span><span class="token punctuation">,</span>
            <span class="token string single-quoted-string">&#39;manager&#39;</span>        <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;Patrick Brouwers&#39;</span><span class="token punctuation">,</span>
            <span class="token string single-quoted-string">&#39;company&#39;</span>        <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;Maatwebsite&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>It&#39;s not required to return all properties, you can ommit the keys you don&#39;t want to overrule.</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">namespace</span> <span class="token package">App<span class="token punctuation">\\</span>Exports</span><span class="token punctuation">;</span>

<span class="token keyword">use</span> <span class="token package">Maatwebsite<span class="token punctuation">\\</span>Excel<span class="token punctuation">\\</span>Concerns<span class="token punctuation">\\</span>WithProperties</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">InvoicesExport</span> <span class="token keyword">implements</span> <span class="token class-name">WithProperties</span>
<span class="token punctuation">{</span>    
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">properties</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">array</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">[</span>
            <span class="token string single-quoted-string">&#39;creator&#39;</span>        <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;Patrick Brouwers&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="custom-csv-settings" tabindex="-1"><a class="header-anchor" href="#custom-csv-settings" aria-hidden="true">#</a> Custom CSV Settings</h2><p>By default Laravel Excel uses the defaults from the config (<code>config/excel.php</code>). You can change this by adding the <code>WithCustomCsvSettings</code> interface.</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">namespace</span> <span class="token package">App<span class="token punctuation">\\</span>Exports</span><span class="token punctuation">;</span>

<span class="token keyword">use</span> <span class="token package">Maatwebsite<span class="token punctuation">\\</span>Excel<span class="token punctuation">\\</span>Concerns<span class="token punctuation">\\</span>WithCustomCsvSettings</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">InvoicesExport</span> <span class="token keyword">implements</span> <span class="token class-name">WithCustomCsvSettings</span>
<span class="token punctuation">{</span>    
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">getCsvSettings</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">array</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">[</span>
            <span class="token string single-quoted-string">&#39;delimiter&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;;&#39;</span><span class="token punctuation">,</span>
            <span class="token string single-quoted-string">&#39;use_bom&#39;</span> <span class="token operator">=&gt;</span> <span class="token constant boolean">false</span><span class="token punctuation">,</span>
            <span class="token string single-quoted-string">&#39;output_encoding&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;ISO-8859-1&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="available-csv-settings" tabindex="-1"><a class="header-anchor" href="#available-csv-settings" aria-hidden="true">#</a> Available csv settings</h3><ul><li><code>delimiter</code></li><li><code>enclosure</code></li><li><code>line_ending</code></li><li><code>use_bom</code></li><li><code>include_separator_line</code></li><li><code>excel_compatibility</code></li><li><code>output_encoding</code></li></ul><h2 id="cell-caching" tabindex="-1"><a class="header-anchor" href="#cell-caching" aria-hidden="true">#</a> Cell caching</h2><p>By default PhpSpreadsheet keeps all cell values in memory, however when dealing with large files, this might result into memory issues. If you want to mitigate that, you can configure a cell caching driver here.</p><p>When using the illuminate driver, it will store each value in the cache store. This can slow down the process, because it needs to store each value. However it will use less memory. It will automatically use your default cache store. However if you prefer to have the cell cache on a separate store, you can configure the store name here. You can use any store defined in your cache config. When leaving at &quot;null&quot; it will use the default store.</p><p>You can use the &quot;batch&quot; store if you want to only persist to the store when the memory limit is reached. You can tweak the memory limit in the config.</p>`,15);function g(v,m){const a=o("router-link");return p(),c("div",null,[u,n("nav",d,[n("ul",null,[n("li",null,[e(a,{to:"#properties"},{default:t(()=>[s("Properties")]),_:1})]),n("li",null,[e(a,{to:"#custom-csv-settings"},{default:t(()=>[s("Custom CSV Settings")]),_:1}),n("ul",null,[n("li",null,[e(a,{to:"#available-csv-settings"},{default:t(()=>[s("Available csv settings")]),_:1})])])]),n("li",null,[e(a,{to:"#cell-caching"},{default:t(()=>[s("Cell caching")]),_:1})])])]),k])}const f=i(r,[["render",g],["__file","settings.html.vue"]]);export{f as default};