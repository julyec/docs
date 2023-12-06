import{_ as c}from"./plugin-vue_export-helper-c27b6911.js";import{r as d,o as l,c as p,a as r,e as u,w as s,b as e,f as i,d as t}from"./app-083c2955.js";const v={},m=e("p",null,"本教程介绍 VuePress 项目命令。",-1),h=i(`<h2 id="常用命令" tabindex="-1"><a class="header-anchor" href="#常用命令" aria-hidden="true">#</a> 常用命令</h2><ul><li><code>vuepress dev [dir]</code> 会启动一个开发服务器，以便让你在本地开发你的 VuePress 站点。</li><li><code>vuepress build [dir]</code> 会将你的 VuePress 站点构建成静态文件，以便你进行后续部署。</li></ul><div class="hint-container info"><p class="hint-container-title">使用模板</p><p>如果你在使用 VuePress Theme Hope 模板，你可以在 <code>package.json</code> 中发现下列三个命令:</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;docs:build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vuepress build src&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;docs:clean-dev&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vuepress dev src --clean-cache&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;docs:dev&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vuepress dev src&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这意味着你可以使用:</p><ul><li><code>pnpm docs:dev</code> 启动开发服务器</li><li><code>pnpm docs:build</code> 构建项目并输出</li><li><code>pnpm docs:clean-dev</code> 清除缓存并启动开发服务器</li></ul></div><div class="hint-container tip"><p class="hint-container-title">终止开发服务器</p><p>如果你需要终止开发服务器，请点击终端，并连续两次按下 <code>Ctrl + C</code>。</p></div><h2 id="升级版本" tabindex="-1"><a class="header-anchor" href="#升级版本" aria-hidden="true">#</a> 升级版本</h2><p>如果你需要升级主题和 VuePress 版本，请执行以下命令:</p>`,6),b=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"pnpm"),t(` dlx vp-update
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),_=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"yarn"),t(` dlx vp-update
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),g=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,`npx vp-update
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),k=i('<div class="hint-container warning"><p class="hint-container-title">注意</p><p>任何以 <code>@vuepress/</code> 开头的官方包应该和 VuePress 保持相同版本。</p><p>比如，如果你正在使用 <code>@vuepress/plugin-search</code> 和 <code>@vuepress/utils</code>，你应该确保他们和 <code>vuepress</code> 版本相同</p><p>另外，如果你使用了其他第三方插件，请确保它兼容你要升级到的 VuePress 版本。</p></div>',1);function f(q,x){const o=d("CodeTabs");return l(),p("div",null,[m,r(" more "),h,u(o,{id:"56",data:[{id:"pnpm"},{id:"yarn"},{id:"npm"}],"tab-id":"shell"},{title0:s(({value:n,isActive:a})=>[t("pnpm")]),title1:s(({value:n,isActive:a})=>[t("yarn")]),title2:s(({value:n,isActive:a})=>[t("npm")]),tab0:s(({value:n,isActive:a})=>[b]),tab1:s(({value:n,isActive:a})=>[_]),tab2:s(({value:n,isActive:a})=>[g]),_:1}),k])}const C=c(v,[["render",f],["__file","command.html.vue"]]);export{C as default};
