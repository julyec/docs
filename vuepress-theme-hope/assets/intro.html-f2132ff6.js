import{_ as u}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as p,c as r,b as n,d as s,e as c,w as e}from"./app-083c2955.js";const d={},m=n("h2",{id:"config-concepts",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#config-concepts","aria-hidden":"true"},"#"),s(" Config Concepts")],-1),k=n("p",null,[s("VuePress mainly stores config and required files through the "),n("code",null,".vuepress/"),s(" folder in the directory.")],-1),h={class:"hint-container info"},v=n("p",{class:"hint-container-title"},"Info",-1),f=n("p",null,"In VuePress, there are three config concepts:",-1),b=n("ul",null,[n("li",null,"Site Config: this is the object you export directly in the config file"),n("li",null,[s("Theme Config: first option passed to "),n("code",null,"hopeTheme"),s(" function")]),n("li",null,"Page Config: provided by Frontmatter at the top of the page based on YAML syntax")],-1),g=n("h2",{id:"theme-usage",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#theme-usage","aria-hidden":"true"},"#"),s(" Theme Usage")],-1),_=n("div",{class:"language-typescript line-numbers-mode","data-ext":"ts"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.ts"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" defineUserConfig "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" hopeTheme "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress-theme-hope"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"defineUserConfig"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token comment"},"// siteConfig here"),s(`
  `),n("span",{class:"token comment"},"// ..."),s(`

  theme`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token function"},"hopeTheme"),n("span",{class:"token punctuation"},"("),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token comment"},"// themeConfig here"),s(`
      `),n("span",{class:"token comment"},"// ..."),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token comment"},"// theme behavior options here (optional)"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),y=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.js"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" defineUserConfig "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" hopeTheme "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress-theme-hope"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"defineUserConfig"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token comment"},"// siteConfig here"),s(`
  `),n("span",{class:"token comment"},"// ..."),s(`

  `),n("span",{class:"token literal-property property"},"theme"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token function"},"hopeTheme"),n("span",{class:"token punctuation"},"("),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token comment"},"// themeConfig here"),s(`
      `),n("span",{class:"token comment"},"// ..."),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token comment"},"// theme behavior options here (optional)"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1);function C(w,x){const i=o("RouterLink"),l=o("CodeTabs");return p(),r("div",null,[m,k,n("div",h,[v,n("p",null,[s("For the file structure of VuePress, see "),c(i,{to:"/cookbook/vuepress/file.html"},{default:e(()=>[s("VuePress Basics → File Structure")]),_:1}),s(".")])]),f,b,g,c(l,{id:"34",data:[{id:"TS"},{id:"JS"}],"tab-id":"language"},{title0:e(({value:t,isActive:a})=>[s("TS")]),title1:e(({value:t,isActive:a})=>[s("JS")]),tab0:e(({value:t,isActive:a})=>[_]),tab1:e(({value:t,isActive:a})=>[y]),_:1})])}const S=u(d,[["render",C],["__file","intro.html.vue"]]);export{S as default};
