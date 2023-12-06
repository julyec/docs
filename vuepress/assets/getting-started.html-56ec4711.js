import{_ as u}from"./plugin-vue_export-helper-c27b6911.js";import{r,o as p,c as v,a as e,b as s,d as i,w as n,e as c}from"./app-d06631bc.js";const h={},b=e("h1",{id:"快速上手",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#快速上手","aria-hidden":"true"},"#"),s(" 快速上手")],-1),g={class:"hint-container warning"},m=e("p",{class:"hint-container-title"},"注意",-1),_=e("code",null,"beta",-1),k={href:"https://github.com/vuepress/vuepress-next/blob/main/CHANGELOG.md",target:"_blank",rel:"noopener noreferrer"},f=e("h2",{id:"依赖环境",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#依赖环境","aria-hidden":"true"},"#"),s(" 依赖环境")],-1),x={href:"https://nodejs.org/",target:"_blank",rel:"noopener noreferrer"},A={href:"https://classic.yarnpkg.com/zh-Hans/",target:"_blank",rel:"noopener noreferrer"},P={class:"hint-container tip"},N=e("p",{class:"hint-container-title"},"提示",-1),M={href:"https://pnpm.io/zh/",target:"_blank",rel:"noopener noreferrer"},y=e("code",null,"vue",-1),V=e("code",null,"@vuepress/client",-1),q=e("code",null,"pnpm add -D vue @vuepress/client@next",-1),R={href:"https://yarnpkg.com/",target:"_blank",rel:"noopener noreferrer"},j={href:"https://yarnpkg.com/configuration/yarnrc#nodeLinker",target:"_blank",rel:"noopener noreferrer"},L=e("code",null,".yarnrc.yml",-1),Y=e("code",null,"nodeLinker: 'node-modules'",-1),C=c(`<h2 id="手动安装" tabindex="-1"><a class="header-anchor" href="#手动安装" aria-hidden="true">#</a> 手动安装</h2><p>这一章节会帮助你从头搭建一个简单的 VuePress 文档网站。如果你想在一个现有项目中使用 VuePress 管理文档，从步骤 3 开始。</p><ul><li><strong>步骤 1</strong>: 创建并进入一个新目录</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">mkdir</span> vuepress-starter
<span class="token builtin class-name">cd</span> vuepress-starter
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>步骤 2</strong>: 初始化项目</li></ul>`,5),E=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"git"),s(` init
`),e("span",{class:"token function"},"pnpm"),s(` init
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),D=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"git"),s(` init
`),e("span",{class:"token function"},"yarn"),s(` init
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),w=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"git"),s(` init
`),e("span",{class:"token function"},"npm"),s(` init
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),z=e("ul",null,[e("li",null,[e("strong",null,"步骤 3"),s(": 将 VuePress 安装为本地依赖")])],-1),B=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"pnpm"),s(),e("span",{class:"token function"},"add"),s(),e("span",{class:"token parameter variable"},"-D"),s(` vuepress@next @vuepress/client@next vue
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),H=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"yarn"),s(),e("span",{class:"token function"},"add"),s(),e("span",{class:"token parameter variable"},"-D"),s(` vuepress@next
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),I=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"npm"),s(),e("span",{class:"token function"},"install"),s(),e("span",{class:"token parameter variable"},"-D"),s(` vuepress@next
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),T=e("strong",null,"步骤 4",-1),G=e("code",null,"package.json",-1),S={href:"https://classic.yarnpkg.com/zh-Hans/docs/package-json#toc-scripts",target:"_blank",rel:"noopener noreferrer"},O=c(`<div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;docs:dev&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vuepress dev docs&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;docs:build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vuepress build docs&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>步骤 5</strong>: 将默认的临时目录和缓存目录添加到 <code>.gitignore</code> 文件中</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">&#39;node_modules&#39;</span> <span class="token operator">&gt;&gt;</span> .gitignore
<span class="token builtin class-name">echo</span> <span class="token string">&#39;.temp&#39;</span> <span class="token operator">&gt;&gt;</span> .gitignore
<span class="token builtin class-name">echo</span> <span class="token string">&#39;.cache&#39;</span> <span class="token operator">&gt;&gt;</span> .gitignore
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>步骤 6</strong>: 创建你的第一篇文档</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">mkdir</span> docs
<span class="token builtin class-name">echo</span> <span class="token string">&#39;# Hello VuePress&#39;</span> <span class="token operator">&gt;</span> docs/README.md
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>步骤 7</strong>: 在本地启动服务器来开发你的文档网站</li></ul>`,6),F=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"pnpm"),s(` docs:dev
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),J=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"yarn"),s(` docs:dev
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),K=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"npm"),s(` run docs:dev
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),Q={href:"http://localhost:8080",target:"_blank",rel:"noopener noreferrer"};function U(W,X){const l=r("ExternalLinkIcon"),o=r("CodeTabs"),d=r("RouterLink");return p(),v("div",null,[b,e("div",g,[m,e("p",null,[s("VuePress v2 目前仍处于 "),_,s(" 阶段。你已经可以用它来构建你的站点，但是它的配置和 API 还不够稳定，很可能会在 Minor 版本中发生 Breaking Changes 。因此，在每次更新 beta 版本之后，请一定要仔细阅读 "),e("a",k,[s("更新日志"),i(l)]),s("。")])]),f,e("ul",null,[e("li",null,[e("a",x,[s("Node.js v16.19.0+"),i(l)])]),e("li",null,[e("a",A,[s("Yarn v1 classic"),i(l)]),s(" （可选）")])]),e("div",P,[N,e("ul",null,[e("li",null,[s("使用 "),e("a",M,[s("pnpm"),i(l)]),s(" 时，你可能需要安装 "),y,s(" 和 "),V,s(" 作为 peer-dependencies ，即 "),q,s(" 。")]),e("li",null,[s("使用 "),e("a",R,[s("yarn 2"),i(l)]),s(" 时，你需要在 "),e("a",j,[L,i(l)]),s(" 文件中设置 "),Y,s(" 。")])])]),C,i(o,{id:"58",data:[{id:"PNPM"},{id:"YARN"},{id:"NPM"}],active:0,"tab-id":"shell"},{title0:n(({value:a,isActive:t})=>[s("PNPM")]),title1:n(({value:a,isActive:t})=>[s("YARN")]),title2:n(({value:a,isActive:t})=>[s("NPM")]),tab0:n(({value:a,isActive:t})=>[E]),tab1:n(({value:a,isActive:t})=>[D]),tab2:n(({value:a,isActive:t})=>[w]),_:1}),z,i(o,{id:"76",data:[{id:"PNPM"},{id:"YARN"},{id:"NPM"}],active:0,"tab-id":"shell"},{title0:n(({value:a,isActive:t})=>[s("PNPM")]),title1:n(({value:a,isActive:t})=>[s("YARN")]),title2:n(({value:a,isActive:t})=>[s("NPM")]),tab0:n(({value:a,isActive:t})=>[B]),tab1:n(({value:a,isActive:t})=>[H]),tab2:n(({value:a,isActive:t})=>[I]),_:1}),e("ul",null,[e("li",null,[T,s(": 在 "),G,s(" 中添加一些 "),e("a",S,[s("scripts"),i(l)])])]),O,i(o,{id:"118",data:[{id:"PNPM"},{id:"YARN"},{id:"NPM"}],active:0,"tab-id":"shell"},{title0:n(({value:a,isActive:t})=>[s("PNPM")]),title1:n(({value:a,isActive:t})=>[s("YARN")]),title2:n(({value:a,isActive:t})=>[s("NPM")]),tab0:n(({value:a,isActive:t})=>[F]),tab1:n(({value:a,isActive:t})=>[J]),tab2:n(({value:a,isActive:t})=>[K]),_:1}),e("p",null,[s("VuePress 会在 "),e("a",Q,[s("http://localhost:8080"),i(l)]),s(" 启动一个热重载的开发服务器。当你修改你的 Markdown 文件时，浏览器中的内容也会自动更新。")]),e("p",null,[s("现在，你应该已经有了一个简单可用的 VuePress 文档网站。接下来，了解一下 VuePress "),i(d,{to:"/zh/guide/configuration.html"},{default:n(()=>[s("配置")]),_:1}),s(" 相关的内容。")])])}const ee=u(h,[["render",U],["__file","getting-started.html.vue"]]);export{ee as default};
