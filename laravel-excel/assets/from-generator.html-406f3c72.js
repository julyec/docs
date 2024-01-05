import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o as p,c as o,b as s,e as n,d as c,a as l}from"./app-edc8bdf9.js";const i={},r=s("h1",{id:"from-generator",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#from-generator","aria-hidden":"true"},"#"),n(" From Generator")],-1),u={href:"https://www.php.net/manual/en/class.generator.php",target:"_blank",rel:"noopener noreferrer"},d=s("code",null,"FromGenerator",-1),k=l(`<p>A generator allows you to write code that uses foreach to iterate over a set of data without needing to build an array in memory.</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">namespace</span> <span class="token package">App<span class="token punctuation">\\</span>Exports</span><span class="token punctuation">;</span>

<span class="token keyword">use</span> <span class="token package">Generator</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Maatwebsite<span class="token punctuation">\\</span>Excel<span class="token punctuation">\\</span>Concerns<span class="token punctuation">\\</span>Exportable</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Maatwebsite<span class="token punctuation">\\</span>Excel<span class="token punctuation">\\</span>Concerns<span class="token punctuation">\\</span>FromGenerator</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">DataExport</span> <span class="token keyword">implements</span> <span class="token class-name">FromGenerator</span>
<span class="token punctuation">{</span>
    <span class="token keyword">use</span> <span class="token package">Exportable</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">generator</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token class-name return-type">Generator</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token variable">$i</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token variable">$i</span> <span class="token operator">&lt;=</span> <span class="token number">100</span><span class="token punctuation">;</span> <span class="token variable">$i</span><span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">yield</span> <span class="token punctuation">[</span><span class="token variable">$i</span><span class="token punctuation">,</span> <span class="token variable">$i</span><span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token variable">$i</span><span class="token operator">+</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>You can download the export in your controller:</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">export</span><span class="token punctuation">(</span><span class="token punctuation">)</span> 
<span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">DataExport</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">download</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;data.xlsx&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4);function m(v,b){const a=t("ExternalLinkIcon");return p(),o("div",null,[r,s("p",null,[n("Exports can be created from a PHP "),s("a",u,[n("generator"),c(a)]),n(" class, by using the "),d,n(" concern.")]),k])}const g=e(i,[["render",m],["__file","from-generator.html.vue"]]);export{g as default};
