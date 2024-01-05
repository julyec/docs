import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o,c as i,b as n,d as c,w as p,e as s,a as l}from"./app-edc8bdf9.js";const u={},d=n("h1",{id:"custom-csv-settings",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#custom-csv-settings","aria-hidden":"true"},"#"),s(" Custom CSV Settings")],-1),r={class:"table-of-contents"},k=l(`<p>By default Laravel Excel uses the defaults from the config (<code>config/excel.php</code>). You can change this by adding the <code>WithCustomCsvSettings</code> interface.</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">namespace</span> <span class="token package">App<span class="token punctuation">\\</span>Imports</span><span class="token punctuation">;</span>

<span class="token keyword">use</span> <span class="token package">Maatwebsite<span class="token punctuation">\\</span>Excel<span class="token punctuation">\\</span>Concerns<span class="token punctuation">\\</span>ToModel</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Maatwebsite<span class="token punctuation">\\</span>Excel<span class="token punctuation">\\</span>Concerns<span class="token punctuation">\\</span>WithCustomCsvSettings</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">UsersImport</span> <span class="token keyword">implements</span> <span class="token class-name">ToModel</span><span class="token punctuation">,</span> WithCustomCsvSettings
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">model</span><span class="token punctuation">(</span><span class="token keyword type-hint">array</span> <span class="token variable">$row</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
            <span class="token string single-quoted-string">&#39;name&#39;</span> <span class="token operator">=&gt;</span> <span class="token variable">$row</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;0&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token string single-quoted-string">&#39;email&#39;</span> <span class="token operator">=&gt;</span> <span class="token variable">$row</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;1&#39;</span><span class="token punctuation">]</span>
        <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">getCsvSettings</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">array</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">[</span>
            <span class="token string single-quoted-string">&#39;input_encoding&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;ISO-8859-1&#39;</span>
        <span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>A CSV file stores data in rows and the values in each row is separated with a separator, also known as a delimiter. Although the file is defined as Comma Separated Values, the delimiter could be anything. Delimiter requires a single character. For Tab use <code>&quot;\\t&quot;</code>. The most common delimiters are: a comma <code>,</code>, a semicolon <code>;</code>, a tab <code>\\t</code>, a space <code></code>, or a pipe <code>|</code>.</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">getCsvSettings</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">array</span>
<span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">[</span>
        <span class="token string single-quoted-string">&#39;delimiter&#39;</span> <span class="token operator">=&gt;</span> <span class="token string double-quoted-string">&quot;\\t&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="available-settings" tabindex="-1"><a class="header-anchor" href="#available-settings" aria-hidden="true">#</a> Available settings</h2><ul><li><code>delimiter</code></li><li><code>enclosure</code></li><li><code>escape_character</code></li><li><code>contiguous</code></li><li><code>input_encoding</code></li></ul>`,6);function v(m,g){const a=t("router-link");return o(),i("div",null,[d,n("nav",r,[n("ul",null,[n("li",null,[c(a,{to:"#available-settings"},{default:p(()=>[s("Available settings")]),_:1})])])]),k])}const f=e(u,[["render",v],["__file","custom-csv-settings.html.vue"]]);export{f as default};
