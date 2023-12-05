import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o as p,c as l,d as s,a as n,b as e,e as r}from"./app-4560479e.js";const c={},u=n("h1",{id:"vite",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#vite","aria-hidden":"true"},"#"),e(" Vite")],-1),d={href:"https://www.npmjs.com/package/@vuepress/bundler-vite",target:"_blank",rel:"noopener noreferrer"},v={href:"https://www.npmjs.com/package/vuepress",target:"_blank",rel:"noopener noreferrer"},k=r(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> i <span class="token parameter variable">-D</span> @vuepress/bundler-vite@next
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="配置项" tabindex="-1"><a class="header-anchor" href="#配置项" aria-hidden="true">#</a> 配置项</h2><p>Vite 打包工具的配置项：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> viteBundler <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@vuepress/bundler-vite&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineUserConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@vuepress/cli&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineUserConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  bundler<span class="token operator">:</span> <span class="token function">viteBundler</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    viteOptions<span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    vuePluginOptions<span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="viteoptions" tabindex="-1"><a class="header-anchor" href="#viteoptions" aria-hidden="true">#</a> viteOptions</h3>`,5),h=n("li",null,[n("p",null,"详情："),n("p",null,"接收 Vite 的所有配置项。")],-1),_=n("p",null,"参考：",-1),m={href:"https://cn.vitejs.dev/config/",target:"_blank",rel:"noopener noreferrer"},f=n("h3",{id:"vuepluginoptions",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#vuepluginoptions","aria-hidden":"true"},"#"),e(" vuePluginOptions")],-1),b=n("p",null,"详情：",-1),g={href:"https://www.npmjs.com/package/@vitejs/plugin-vue",target:"_blank",rel:"noopener noreferrer"},w=n("p",null,"参考：",-1),x={href:"https://cn.vitejs.dev/plugins/#vitejsplugin-vue",target:"_blank",rel:"noopener noreferrer"};function V(j,y){const o=t("NpmBadge"),a=t("ExternalLinkIcon");return p(),l("div",null,[u,s(o,{package:"@vuepress/bundler-vite"}),n("p",null,[e("Vite 打包工具是由 "),n("a",d,[e("@vuepress/bundler-vite"),s(a)]),e(" 包提供的。它是 "),n("a",v,[e("vuepress"),s(a)]),e(" 包的依赖之一，当然你也可以单独安装它：")]),k,n("ul",null,[h,n("li",null,[_,n("ul",null,[n("li",null,[n("a",m,[e("Vite > Config"),s(a)])])])])]),f,n("ul",null,[n("li",null,[b,n("p",null,[e("接收 "),n("a",g,[e("@vitejs/plugin-vue"),s(a)]),e(" 的所有配置项。")])]),n("li",null,[w,n("ul",null,[n("li",null,[n("a",x,[e("Vite > 插件 > 官方插件"),s(a)])])])])])])}const q=i(c,[["render",V],["__file","vite.html.vue"]]);export{q as default};
