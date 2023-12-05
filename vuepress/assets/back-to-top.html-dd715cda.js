import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{r as e,o as t,c as o,d as p,a,b as c,e as i}from"./app-4560479e.js";const d={},r=a("h1",{id:"back-to-top",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#back-to-top","aria-hidden":"true"},"#"),c(" back-to-top")],-1),l=i(`<p>该插件会给你的站点添加一个 <em>返回顶部</em> 按钮。当页面向下滚动时，该按钮会显示在页面的右下角，点击它就会滚动到页面顶部。</p><p>该插件已经集成到默认主题中。</p><h2 id="使用方法" tabindex="-1"><a class="header-anchor" href="#使用方法" aria-hidden="true">#</a> 使用方法</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> i <span class="token parameter variable">-D</span> @vuepress/plugin-back-to-top@next
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> backToTopPlugin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@vuepress/plugin-back-to-top&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  plugins<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">backToTopPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="样式" tabindex="-1"><a class="header-anchor" href="#样式" aria-hidden="true">#</a> 样式</h2><p>你可以通过 CSS 变量来自定义 <em>返回顶部</em> 按钮的样式：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>File not found</code></pre><div class="line-numbers" aria-hidden="true"></div></div>`,8);function u(k,m){const n=e("NpmBadge");return t(),o("div",null,[r,p(n,{package:"@vuepress/plugin-back-to-top"}),l])}const h=s(d,[["render",u],["__file","back-to-top.html.vue"]]);export{h as default};
