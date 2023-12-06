import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as p,o,c as i,a as s,b as n,d as c,e as a}from"./app-c17653d8.js";const l="/dcat/assets/6JTuX8z35m-1dfc0ece.png",u={},r=a('<h1 id="filter-for-table-specifications" tabindex="-1"><a class="header-anchor" href="#filter-for-table-specifications" aria-hidden="true">#</a> Filter for table specifications</h1><p>This feature is used to build a selection of specifications similar to Taobao or Jingdong products.</p><p><img src="'+l+`" alt="" loading="lazy"></p><h3 id="basic-use" tabindex="-1"><a class="header-anchor" href="#basic-use" aria-hidden="true">#</a> Basic use</h3><blockquote><p>{tip} The second argument of <code>select</code> and <code>selectOne</code> method is selector <code>label</code>, which can be omitted, if omitted the translation of the translation file will be used automatically.</p></blockquote><p>As shown in the following code, assuming that the four values of the <code>brand</code> field correspond to four brands, the following way will build the specification selector of <code>brand</code>.</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">Dcat<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Grid</span><span class="token punctuation">;</span>

<span class="token variable">$grid</span><span class="token operator">-&gt;</span><span class="token function">selector</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token class-name class-name-fully-qualified type-declaration">Grid<span class="token punctuation">\\</span>Tools<span class="token punctuation">\\</span>Selector</span> <span class="token variable">$selector</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token variable">$selector</span><span class="token operator">-&gt;</span><span class="token function">select</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;brand&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;brands&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>
        <span class="token number">1</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;Huawei&#39;</span><span class="token punctuation">,</span>
        <span class="token number">2</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;millet&#39;</span><span class="token punctuation">,</span>
        <span class="token number">3</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;OPPO&#39;</span><span class="token punctuation">,</span>
        <span class="token number">4</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;vivo&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>select</code> method is multiple choice by default, click on the page to the right of each option of the plus sign, the query will add a query option for this field, if the field filter allows only one selection, use the <code>selectOne</code> method</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token variable">$selector</span><span class="token operator">-&gt;</span><span class="token function">selectOne</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;brand&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;brand&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>
        <span class="token number">1</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;Huawei&#39;</span><span class="token punctuation">,</span>
        <span class="token number">2</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;millet&#39;</span><span class="token punctuation">,</span>
        <span class="token number">3</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;OPPO&#39;</span><span class="token punctuation">,</span>
        <span class="token number">4</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;vivo&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="relational-field-lookup" tabindex="-1"><a class="header-anchor" href="#relational-field-lookup" aria-hidden="true">#</a> Relational field lookup</h3>`,10),d={href:"https://github.com/jqhph/laravel-wherehasin",target:"_blank",rel:"noopener noreferrer"},k=s("code",null,"whereHasIn",-1),g=a(`<div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">Dcat<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Grid</span><span class="token punctuation">;</span>

<span class="token variable">$grid</span><span class="token operator">-&gt;</span><span class="token function">selector</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token class-name class-name-fully-qualified type-declaration">Grid<span class="token punctuation">\\</span>Tools<span class="token punctuation">\\</span>Selector</span> <span class="token variable">$selector</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token variable">$selector</span><span class="token operator">-&gt;</span><span class="token function">select</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;brand.id&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;brands&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>
        <span class="token number">1</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;Huawei&#39;</span><span class="token punctuation">,</span>
        <span class="token number">2</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;millet&#39;</span><span class="token punctuation">,</span>
        <span class="token number">3</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;OPPO&#39;</span><span class="token punctuation">,</span>
        <span class="token number">4</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;vivo&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="custom-queries" tabindex="-1"><a class="header-anchor" href="#custom-queries" aria-hidden="true">#</a> Custom queries</h3><p>The above method will use the value selected on the selector as the query condition, but in some cases where more flexible control over the query is needed, the query can be customized using the following method:</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token variable">$selector</span><span class="token operator">-&gt;</span><span class="token function">select</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;price&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;价格&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;0-999&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;1000-1999&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;2000-2999&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token variable">$query</span><span class="token punctuation">,</span> <span class="token variable">$value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token variable">$between</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
        <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">999</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">[</span><span class="token number">1000</span><span class="token punctuation">,</span> <span class="token number">1999</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">[</span><span class="token number">2000</span><span class="token punctuation">,</span> <span class="token number">2999</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">;</span>
    
    <span class="token variable">$value</span> <span class="token operator">=</span> <span class="token function">current</span><span class="token punctuation">(</span><span class="token variable">$value</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token variable">$query</span><span class="token operator">-&gt;</span><span class="token function">whereBetween</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;price&#39;</span><span class="token punctuation">,</span> <span class="token variable">$between</span><span class="token punctuation">[</span><span class="token variable">$value</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>As shown above, an anonymous function is passed in as the fourth argument. Once price is selected, the logic in the anonymous function will be used to query the data, so that you can define any kind of query.</p>`,5);function v(b,m){const e=p("ExternalLinkIcon");return o(),i("div",null,[r,s("p",null,[n("If "),s("a",d,[n("dcat/laravel-wherehasin"),c(e)]),n(" is installed, the "),k,n(" method is used preferentially for queries.")]),g])}const q=t(u,[["render",v],["__file","model-grid-selector.html.vue"]]);export{q as default};