import{_ as l}from"./plugin-vue_export-helper-c27b6911.js";import{r as p,o as c,c as u,a as s,b as n,d as a,w as t,e as i}from"./app-d06631bc.js";const r={},d=s("h1",{id:"插件",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#插件","aria-hidden":"true"},"#"),n(" 插件")],-1),k=s("h2",{id:"社区插件",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#社区插件","aria-hidden":"true"},"#"),n(" 社区插件")],-1),h={href:"https://www.npmjs.com/search?q=keywords:vuepress-plugin",target:"_blank",rel:"noopener noreferrer"},m={href:"https://www.npmjs.com/search?q=%40vuepress%20keywords%3Aplugin",target:"_blank",rel:"noopener noreferrer"},g=i(`<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> googleAnalyticsPlugin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@vuepress/plugin-google-analytics&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  plugins<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">googleAnalyticsPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      id<span class="token operator">:</span> <span class="token string">&quot;G-XXXXXXXXXX&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),v={class:"hint-container tip"},_=s("p",{class:"hint-container-title"},"提示",-1),f=s("p",null,"大部分插件只能使用一次，如果同一个插件被多次使用，那么只有最后一次会生效。",-1),b=s("h2",{id:"本地插件",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#本地插件","aria-hidden":"true"},"#"),n(" 本地插件")],-1),y=s("p",null,"如果你想要使用自己的插件，但是又不想发布它，你可以创建一个本地插件。",-1),w=i(`<p>但是如果你在配置文件中要做的事情太多了，你可以考虑将它们提取到单独的插件中，然后在你的配置文件中使用它们：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> myPlugin <span class="token keyword">from</span> <span class="token string">&quot;./path/to/my-plugin.js&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  plugins<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">myPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function x(B,E){const e=p("RouterLink"),o=p("ExternalLinkIcon");return c(),u("div",null,[d,s("p",null,[n("借助于 "),a(e,{to:"/zh/reference/plugin-api.html"},{default:t(()=>[n("插件 API")]),_:1}),n(" ， VuePress 插件可以为你提供各种不同的功能。")]),k,s("p",null,[n("社区用户创建了很多插件，并将它们发布到了 "),s("a",h,[n("NPM"),a(o)]),n(" 上。 VuePress 团队也在 "),s("a",m,[n("@vuepress"),a(o)]),n(" Scope 下维护了一些官方插件。查看插件本身的文档可以获取更详细的指引。")]),s("p",null,[n("一般而言，你需要导入插件并通过配置文件的 "),a(e,{to:"/zh/reference/config.html#plugins"},{default:t(()=>[n("plugins")]),_:1}),n(" 配置项来使用它。举例来说，你可以使用 "),a(e,{to:"/zh/reference/plugin/google-analytics.html"},{default:t(()=>[n("@vuepress/plugin-google-analytics")]),_:1}),n(" 来使用 Google Analytics ：")]),g,s("div",v,[_,f,s("p",null,[n("然而，部分插件是可以被多次使用的（例如 "),a(e,{to:"/zh/reference/plugin/container.html"},{default:t(()=>[n("@vuepress/plugin-container")]),_:1}),n("），你应该查看插件本身的文档来获取详细指引。")])]),b,y,s("p",null,[n("我们推荐你直接将 "),a(e,{to:"/zh/guide/configuration.html#%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6"},{default:t(()=>[n("配置文件")]),_:1}),n(" 作为插件使用，因为 "),a(e,{to:"/zh/reference/config.html#%E6%8F%92%E4%BB%B6-api"},{default:t(()=>[n("几乎所有的插件 API 都可以在配置文件中使用")]),_:1}),n("，这在绝大多数场景下都更为方便。")]),w,s("p",null,[n("前往 "),a(e,{to:"/zh/advanced/plugin.html"},{default:t(()=>[n("深入 > 开发插件")]),_:1}),n(" 学习如何开发你自己的插件。")])])}const q=l(r,[["render",x],["__file","plugin.html.vue"]]);export{q as default};
