import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,a as t}from"./app-98225aba.js";const e={},p=t(`<h1 id="markdown" tabindex="-1"><a class="header-anchor" href="#markdown" aria-hidden="true">#</a> Markdown</h1><p>Basic Usage</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>

<span class="token keyword">use</span> <span class="token package">Dcat<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Widgets<span class="token punctuation">\\</span>Markdown</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Dcat<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Widgets<span class="token punctuation">\\</span>Card</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Dcat<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Layout<span class="token punctuation">\\</span>Content</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">MyController</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">index</span><span class="token punctuation">(</span><span class="token class-name type-declaration">Content</span> <span class="token variable">$content</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token variable">$content</span><span class="token operator">-&gt;</span><span class="token function">body</span><span class="token punctuation">(</span><span class="token class-name static-context">Card</span><span class="token operator">::</span><span class="token function">make</span><span class="token punctuation">(</span>
            <span class="token class-name static-context">Markdown</span><span class="token operator">::</span><span class="token function">make</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;The content of your markdown article&#39;</span><span class="token punctuation">)</span>
        <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),c=[p];function o(i,l){return s(),a("div",null,c)}const r=n(e,[["render",o],["__file","widgets-markdown.html.vue"]]);export{r as default};
