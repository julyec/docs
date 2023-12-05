import{_ as u}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as p,c as r,b as n,d as s,e as c,w as e}from"./app-d630ecd8.js";const d={},m=n("h2",{id:"配置概念",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#配置概念","aria-hidden":"true"},"#"),s(" 配置概念")],-1),k=n("p",null,[s("VuePress 主要通过目录下的 "),n("code",null,".vuepress/"),s(" 文件夹存放配置和需要的文件。")],-1),v={class:"hint-container info"},b=n("p",{class:"hint-container-title"},"相关信息",-1),h=n("p",null,"在 VuePress 中，有三种配置概念:",-1),_=n("ul",null,[n("li",null,"站点配置: 这是你在配置文件中直接导出的对象"),n("li",null,[s("主题配置: 传递给 "),n("code",null,"hopeTheme"),s(" 的第一个对象")]),n("li",null,"页面配置: 由在页面顶部基于 YAML 语法的 Frontmatter 提供")],-1),f=n("h2",{id:"使用主题",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#使用主题","aria-hidden":"true"},"#"),s(" 使用主题")],-1),g=n("div",{class:"language-typescript line-numbers-mode","data-ext":"ts"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.ts"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" defineUserConfig "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" hopeTheme "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress-theme-hope"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"defineUserConfig"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token comment"},"// 站点选项"),s(`
  `),n("span",{class:"token comment"},"// ..."),s(`

  theme`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token function"},"hopeTheme"),n("span",{class:"token punctuation"},"("),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token comment"},"// 主题选项"),s(`
      `),n("span",{class:"token comment"},"// ..."),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token comment"},"// 主题行为选项 (可选)"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),y=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.js"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" hopeTheme "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress-theme-hope"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token comment"},"// 站点选项"),s(`
  `),n("span",{class:"token comment"},"// ..."),s(`

  `),n("span",{class:"token literal-property property"},"theme"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token function"},"hopeTheme"),n("span",{class:"token punctuation"},"("),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token comment"},"// 主题选项"),s(`
      `),n("span",{class:"token comment"},"// ..."),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token comment"},"// 主题行为选项 (可选)"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1);function w(x,T){const l=o("RouterLink"),i=o("CodeTabs");return p(),r("div",null,[m,k,n("div",v,[b,n("p",null,[s("关于 VuePress 的文件结构，详见 "),c(l,{to:"/zh/cookbook/vuepress/file.html"},{default:e(()=>[s("VuePress 基础 → 文件结构")]),_:1}),s("。")])]),h,_,f,c(i,{id:"34",data:[{id:"TS"},{id:"JS"}],"tab-id":"language"},{title0:e(({value:a,isActive:t})=>[s("TS")]),title1:e(({value:a,isActive:t})=>[s("JS")]),tab0:e(({value:a,isActive:t})=>[g]),tab1:e(({value:a,isActive:t})=>[y]),_:1})])}const A=u(d,[["render",w],["__file","intro.html.vue"]]);export{A as default};
