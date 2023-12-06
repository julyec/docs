import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,a as t}from"./app-98225aba.js";const e={},p=t(`<h1 id="cards" tabindex="-1"><a class="header-anchor" href="#cards" aria-hidden="true">#</a> Cards</h1><h2 id="card" tabindex="-1"><a class="header-anchor" href="#card" aria-hidden="true">#</a> Card</h2><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>

<span class="token keyword">use</span> <span class="token package">Dcat<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Widgets<span class="token punctuation">\\</span>Card</span><span class="token punctuation">;</span>

<span class="token comment">// Fill only the content, no TITLE</span>
<span class="token variable">$card</span> <span class="token operator">=</span> <span class="token class-name static-context">Card</span><span class="token operator">::</span><span class="token function">make</span><span class="token punctuation">(</span><span class="token function">view</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;...&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// TITLE and CONTENT</span>
<span class="token variable">$card</span> <span class="token operator">=</span> <span class="token class-name static-context">Card</span><span class="token operator">::</span><span class="token function">make</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;TITLE&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;content&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Set the spacing</span>
<span class="token variable">$card</span><span class="token operator">-&gt;</span><span class="token function">padding</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;0 15px 0 12px&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Set tool buttons</span>
<span class="token variable">$card</span><span class="token operator">-&gt;</span><span class="token function">tool</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;&lt;button class=&quot;btn btn-sm btn-light shadow-none&quot;&gt;button text&lt;/button&gt;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Set footer content</span>
<span class="token variable">$card</span><span class="token operator">-&gt;</span><span class="token function">footer</span><span class="token punctuation">(</span><span class="token function">view</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;...&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="box" tabindex="-1"><a class="header-anchor" href="#box" aria-hidden="true">#</a> Box</h2><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>

<span class="token keyword">use</span> <span class="token package">Dcat<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Widgets<span class="token punctuation">\\</span>Box</span><span class="token punctuation">;</span>

<span class="token comment">// TITLE and CONTENT</span>
<span class="token variable">$box</span> <span class="token operator">=</span> <span class="token class-name static-context">Box</span><span class="token operator">::</span><span class="token function">make</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;TITLE&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;content&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Set the spacing</span>
<span class="token variable">$box</span><span class="token operator">-&gt;</span><span class="token function">padding</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;0 15px 0 12px&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Set tool buttons</span>
<span class="token variable">$box</span><span class="token operator">-&gt;</span><span class="token function">tool</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;&lt;button class=&quot;btn btn-sm btn-light shadow-none&quot;&gt;button text&lt;/button&gt;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Setting the shrink button</span>
<span class="token variable">$box</span><span class="token operator">-&gt;</span><span class="token function">collapsable</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Set the remove button</span>
<span class="token variable">$box</span><span class="token operator">-&gt;</span><span class="token function">removable</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),o=[p];function c(i,l){return s(),a("div",null,o)}const d=n(e,[["render",c],["__file","widgets-box.html.vue"]]);export{d as default};
