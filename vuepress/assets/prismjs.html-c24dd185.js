import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o as p,c as l,d as a,a as n,b as s,e as r}from"./app-4560479e.js";const c={},d=n("h1",{id:"prismjs",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#prismjs","aria-hidden":"true"},"#"),s(" prismjs")],-1),u={href:"https://prismjs.com/",target:"_blank",rel:"noopener noreferrer"},m=r(`<p>该插件已经集成到默认主题中。</p><p>需要注意的是，该插件仅会给代码块添加 HTML 标记，而不会添加样式。当你在一个自定义主题中使用它时，可能需要自己选择并引入 Prism.js 样式主题。</p><h2 id="使用方法" tabindex="-1"><a class="header-anchor" href="#使用方法" aria-hidden="true">#</a> 使用方法</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> i <span class="token parameter variable">-D</span> @vuepress/plugin-prismjs@next
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> prismjsPlugin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@vuepress/plugin-prismjs&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  plugins<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">prismjsPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token comment">// 配置项</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="配置项" tabindex="-1"><a class="header-anchor" href="#配置项" aria-hidden="true">#</a> 配置项</h2><h3 id="preloadlanguages" tabindex="-1"><a class="header-anchor" href="#preloadlanguages" aria-hidden="true">#</a> preloadLanguages</h3>`,7),h=n("li",null,[n("p",null,[s("类型： "),n("code",null,"string[]")])],-1),k=n("li",null,[n("p",null,[s("默认值： "),n("code",null,"['markdown', 'jsdoc', 'yaml']")])],-1),_=n("p",null,"详情：",-1),v=n("p",null,"需要预加载的语言。",-1),g=n("p",null,"默认情况下，语言会在解析 Markdown 文件时按需加载。",-1),b={href:"https://github.com/PrismJS/prism/issues/2716",target:"_blank",rel:"noopener noreferrer"};function f(j,x){const i=t("NpmBadge"),e=t("ExternalLinkIcon");return p(),l("div",null,[d,a(i,{package:"@vuepress/plugin-prismjs"}),n("p",null,[s("该插件使用 "),n("a",u,[s("Prism.js"),a(e)]),s(" 来为 Markdown 代码块启用代码高亮。")]),m,n("ul",null,[h,k,n("li",null,[_,v,g,n("p",null,[s("然而， Prism.js 在动态加载语言时可能会遇到 "),n("a",b,[s("一些潜在的问题"),a(e)]),s(" 。为了避免这些问题，你可以使用该配置项来预加载一些语言。")])])])])}const N=o(c,[["render",f],["__file","prismjs.html.vue"]]);export{N as default};
