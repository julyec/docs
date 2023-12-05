import{_ as p}from"./plugin-vue_export-helper-c27b6911.js";import{r as a,o as l,c as r,b as e,d as s,e as c,w as o,f as u}from"./app-d630ecd8.js";const h={},v=e("h2",{id:"确认使用正确的环境",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#确认使用正确的环境","aria-hidden":"true"},"#"),s(" 确认使用正确的环境")],-1),m=e("p",null,[e("code",null,"vuepress-theme-hope"),s(" 仅支持 "),e("code",null,">=18.16.0"),s(" 版本的 Node.js。")],-1),_=e("code",null,"node -v",-1),b=u('<p>同时，你应该使用满足下方要求的包管理器 (推荐 <code>pnpm@8</code>):</p><ul><li><p>pnpm: &gt;= 7</p><p>检查: <code>pnpm -v</code></p><p>安装: <code>npm i -g pnpm</code></p></li><li><p>npm: &gt;= 8</p><p>检查: <code>npm -v</code></p><p>安装: <code>npm i -g npm</code></p></li><li><p>yarn: &gt;= 2</p><p>检查: <code>yarn -v</code></p><p>安装: <code>npm i -g yarn@2</code></p></li></ul><h2 id="确定使用最新版本与正确的依赖树" tabindex="-1"><a class="header-anchor" href="#确定使用最新版本与正确的依赖树" aria-hidden="true">#</a> 确定使用最新版本与正确的依赖树</h2><p>请确保你在使用最新的 <code>vuepress</code> 和 <code>vuepress-theme-hope</code> V2 版本，因为一些你遇到的 bug 可能已经在新版本中修复。</p><p>另外在一些情况下，你可能会在升级某些依赖后生成错误的依赖树，这是因为 <code>vuepress</code> 和 <code>vue</code> 都由很多名为 <code>@vuepress/xxx</code> 和 <code>@vue/xxx</code> 的包构成。</p><p>为了让 VuePress 正确工作，在整个项目中，应该只能存在一个版本的 <code>@vuepress/xxx</code> <code>@vue/xxx</code> <code>vue</code> 与 <code>vue-router</code>。多个版本的包会导致应用的不同部分在使用不同的 Vue 与对应包实例，进而引发如 <code>useXXX() is called without provider</code> 之类的错误。</p><div class="hint-container warning"><p class="hint-container-title">注意</p><p>任何以 <code>@vuepress/</code> 开头的官方包应该和 VuePress 保持相同版本。</p><p>比如，如果你正在使用 <code>@vuepress/plugin-search</code> 和 <code>@vuepress/utils</code>，你应该确保他们和 <code>vuepress</code> 版本相同</p><p>另外，如果你使用了其他第三方插件，请确保它兼容你要升级到的 VuePress 版本。</p></div><p>你可以通过执行下列命令来更新到最新版本。</p>',8),x=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"pnpm"),s(` dlx vp-update
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),g=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"yarn"),s(` dlx vp-update
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),f=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,`npx vp-update
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),V=e("h2",{id:"确认配置正确",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#确认配置正确","aria-hidden":"true"},"#"),s(" 确认配置正确")],-1),k=e("p",null,"请确认你的配置文件没有出现错误 (如红色波浪线)，如果有，请根据提示修改配置文件直至你正确配置了 VuePress 与主题。",-1);function y(A,N){const t=a("RouterLink"),i=a("CodeTabs");return l(),r("div",null,[v,m,e("p",null,[s("你可以通过 "),_,s(" 查看它的版本，如果不满足要求，请 "),c(t,{to:"/zh/cookbook/tutorial/env.html#nodejs"},{default:o(()=>[s("下载并安装 LTS 版本的 Node.js")]),_:1}),s("。")]),b,c(i,{id:"73",data:[{id:"pnpm"},{id:"yarn"},{id:"npm"}],"tab-id":"shell"},{title0:o(({value:d,isActive:n})=>[s("pnpm")]),title1:o(({value:d,isActive:n})=>[s("yarn")]),title2:o(({value:d,isActive:n})=>[s("npm")]),tab0:o(({value:d,isActive:n})=>[x]),tab1:o(({value:d,isActive:n})=>[g]),tab2:o(({value:d,isActive:n})=>[f]),_:1}),V,k])}const P=p(h,[["render",y],["__file","troubleshooting.html.vue"]]);export{P as default};
