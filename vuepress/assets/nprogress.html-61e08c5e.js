import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{r as n,o as p,c,f as a,d as t,a as s,b as e,e as l}from"./app-d06631bc.js";const d={},u=s("h1",{id:"nprogress-plugin",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#nprogress-plugin","aria-hidden":"true"},"#"),e(" nprogress Plugin")],-1),g={href:"https://github.com/rstacruz/nprogress",target:"_blank",rel:"noopener noreferrer"},h=l(`<p>This plugin has been integrated into the default theme.</p><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> i <span class="token parameter variable">-D</span> @vuepress/plugin-nprogress@next
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> nprogressPlugin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@vuepress/plugin-nprogress&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  plugins<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">nprogressPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="styles" tabindex="-1"><a class="header-anchor" href="#styles" aria-hidden="true">#</a> Styles</h2><p>You can customize the style of the progress bar via CSS variables:</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>File not found</code></pre><div class="line-numbers" aria-hidden="true"></div></div>`,7);function m(v,k){const r=n("NpmBadge"),o=n("ExternalLinkIcon");return p(),c("div",null,[a(' `# nprogress` will be rendered as `<h1 id="nprogress">`, and the id will conflict with the nprogress bar (stupid) '),a(" so we add a 'plugin' suffix in the h1 title, and use title frontmatter to set the page title "),u,t(r,{package:"@vuepress/plugin-nprogress"}),s("p",null,[e("Integrate "),s("a",g,[e("nprogress"),t(o)]),e(" into VuePress, which can provide a progress bar when navigating to another page.")]),h])}const _=i(d,[["render",m],["__file","nprogress.html.vue"]]);export{_ as default};
