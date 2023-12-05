import{_ as u}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as d,c as p,a as c,e as a,w as e,b as n,d as s}from"./app-d630ecd8.js";const m={},k=n("p",null,"插件可以为你添加提示、注释、信息、注意、警告和详情自定义容器的支持。",-1),b=n("h2",{id:"配置",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#配置","aria-hidden":"true"},"#"),s(" 配置")],-1),v=n("div",{class:"language-typescript line-numbers-mode","data-ext":"ts"},[n("pre",{ts:"",class:"language-typescript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.ts"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" mdEnhancePlugin "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress-plugin-md-enhance"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
  plugins`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
    `),n("span",{class:"token function"},"mdEnhancePlugin"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token comment"},"// 启用自定义容器"),s(`
      container`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"highlight-lines"},[n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"}," "),n("br"),n("br"),n("br")]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),g=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{js:"",class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.js"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" mdEnhancePlugin "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress-plugin-md-enhance"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token literal-property property"},"plugins"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
    `),n("span",{class:"token function"},"mdEnhancePlugin"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token comment"},"// 启用自定义容器"),s(`
      `),n("span",{class:"token literal-property property"},"container"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"highlight-lines"},[n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"}," "),n("br"),n("br"),n("br")]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),h=n("h2",{id:"演示",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#演示","aria-hidden":"true"},"#"),s(" 演示")],-1),_=n("div",{class:"hint-container info"},[n("p",{class:"hint-container-title"},"相关信息"),n("p",null,"信息容器。")],-1),j=n("div",{class:"hint-container note"},[n("p",{class:"hint-container-title"},"注"),n("p",null,"注释容器。")],-1),w=n("div",{class:"hint-container tip"},[n("p",{class:"hint-container-title"},"提示"),n("p",null,"提示容器")],-1),f=n("div",{class:"hint-container warning"},[n("p",{class:"hint-container-title"},"注意"),n("p",null,"警告容器")],-1),y=n("div",{class:"hint-container danger"},[n("p",{class:"hint-container-title"},"警告"),n("p",null,"危险容器")],-1),x=n("details",{class:"hint-container details"},[n("summary",null,"详情"),n("p",null,"详情容器")],-1),E=n("div",{class:"language-markdown line-numbers-mode","data-ext":"md"},[n("pre",{class:"language-markdown"},[n("code",null,`::: info
信息容器。
:::

::: note
注释容器。
:::

::: tip
提示容器
:::

::: warning
警告容器
:::

::: danger
危险容器
:::

::: details
详情容器
:::
`)]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),A=n("div",{class:"hint-container info"},[n("p",{class:"hint-container-title"},"自定义标题"),n("p",null,[s("一个有 "),n("code",null,"代码"),s(" 和 "),n("a",{href:"#%E6%BC%94%E7%A4%BA"},"链接"),s(" 的信息容器。")]),n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"const"),s(" a "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])])],-1),B=n("div",{class:"hint-container note"},[n("p",{class:"hint-container-title"},"自定义标题"),n("p",null,[s("一个有 "),n("code",null,"代码"),s(" 和 "),n("a",{href:"#%E6%BC%94%E7%A4%BA"},"链接"),s(" 的注释容器。")]),n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"const"),s(" a "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])])],-1),C=n("div",{class:"hint-container tip"},[n("p",{class:"hint-container-title"},"自定义标题"),n("p",null,[s("一个有 "),n("code",null,"代码"),s(" 和 "),n("a",{href:"#%E6%BC%94%E7%A4%BA"},"链接"),s(" 的提示容器。")]),n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"const"),s(" a "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])])],-1),T=n("div",{class:"hint-container warning"},[n("p",{class:"hint-container-title"},"自定义标题"),n("p",null,[s("一个有 "),n("code",null,"代码"),s(" 和 "),n("a",{href:"#%E6%BC%94%E7%A4%BA"},"链接"),s(" 的警告容器。")]),n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"const"),s(" a "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])])],-1),N=n("div",{class:"hint-container danger"},[n("p",{class:"hint-container-title"},"自定义标题"),n("p",null,[s("一个有 "),n("code",null,"代码"),s(" 和 "),n("a",{href:"#%E6%BC%94%E7%A4%BA"},"链接"),s(" 的危险容器。")]),n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"const"),s(" a "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])])],-1),P=n("details",{class:"hint-container details"},[n("summary",null,"自定义标题"),n("p",null,[s("一个有 "),n("code",null,"代码"),s(" 和 "),n("a",{href:"#%E6%BC%94%E7%A4%BA"},"链接"),s(" 的详情容器。")]),n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"const"),s(" a "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])])],-1),S=n("div",{class:"language-markdown line-numbers-mode","data-ext":"md"},[n("pre",{class:"language-markdown"},[n("code",null,[s(`::: info 自定义标题

一个有 `),n("span",{class:"token code-snippet code keyword"},"`代码`"),s(" 和 "),n("span",{class:"token url"},[s("["),n("span",{class:"token content"},"链接"),s("]("),n("span",{class:"token url"},"#演示"),s(")")]),s(` 的信息容器。

`),n("span",{class:"token code"},[n("span",{class:"token punctuation"},"```"),n("span",{class:"token code-language"},"js"),s(`
`),n("span",{class:"token code-block language-js language-js language-js"},[n("span",{class:"token keyword"},"const"),s(" a "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"token punctuation"},"```")]),s(`

:::

::: note 自定义标题

一个有 `),n("span",{class:"token code-snippet code keyword"},"`代码`"),s(" 和 "),n("span",{class:"token url"},[s("["),n("span",{class:"token content"},"链接"),s("]("),n("span",{class:"token url"},"#演示"),s(")")]),s(` 的注释容器。

`),n("span",{class:"token code"},[n("span",{class:"token punctuation"},"```"),n("span",{class:"token code-language"},"js"),s(`
`),n("span",{class:"token code-block language-js language-js language-js"},[n("span",{class:"token keyword"},"const"),s(" a "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"token punctuation"},"```")]),s(`

:::

::: tip 自定义标题

一个有 `),n("span",{class:"token code-snippet code keyword"},"`代码`"),s(" 和 "),n("span",{class:"token url"},[s("["),n("span",{class:"token content"},"链接"),s("]("),n("span",{class:"token url"},"#演示"),s(")")]),s(` 的提示容器。

`),n("span",{class:"token code"},[n("span",{class:"token punctuation"},"```"),n("span",{class:"token code-language"},"js"),s(`
`),n("span",{class:"token code-block language-js language-js language-js"},[n("span",{class:"token keyword"},"const"),s(" a "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"token punctuation"},"```")]),s(`

:::

::: warning 自定义标题

一个有 `),n("span",{class:"token code-snippet code keyword"},"`代码`"),s(" 和 "),n("span",{class:"token url"},[s("["),n("span",{class:"token content"},"链接"),s("]("),n("span",{class:"token url"},"#演示"),s(")")]),s(` 的警告容器。

`),n("span",{class:"token code"},[n("span",{class:"token punctuation"},"```"),n("span",{class:"token code-language"},"js"),s(`
`),n("span",{class:"token code-block language-js language-js language-js"},[n("span",{class:"token keyword"},"const"),s(" a "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"token punctuation"},"```")]),s(`

:::

::: danger 自定义标题

一个有 `),n("span",{class:"token code-snippet code keyword"},"`代码`"),s(" 和 "),n("span",{class:"token url"},[s("["),n("span",{class:"token content"},"链接"),s("]("),n("span",{class:"token url"},"#演示"),s(")")]),s(` 的危险容器。

`),n("span",{class:"token code"},[n("span",{class:"token punctuation"},"```"),n("span",{class:"token code-language"},"js"),s(`
`),n("span",{class:"token code-block language-js language-js language-js"},[n("span",{class:"token keyword"},"const"),s(" a "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"token punctuation"},"```")]),s(`

:::

::: details 自定义标题

一个有 `),n("span",{class:"token code-snippet code keyword"},"`代码`"),s(" 和 "),n("span",{class:"token url"},[s("["),n("span",{class:"token content"},"链接"),s("]("),n("span",{class:"token url"},"#演示"),s(")")]),s(` 的详情容器。

`),n("span",{class:"token code"},[n("span",{class:"token punctuation"},"```"),n("span",{class:"token code-language"},"js"),s(`
`),n("span",{class:"token code-block language-js language-js language-js"},[n("span",{class:"token keyword"},"const"),s(" a "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"token punctuation"},"```")]),s(`

:::
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),V=n("div",{class:"hint-container info"},[n("p",{class:"hint-container-title"},"自定义信息")],-1),D=n("div",{class:"hint-container note"},[n("p",{class:"hint-container-title"},"自定义注释")],-1),J=n("div",{class:"hint-container tip"},[n("p",{class:"hint-container-title"},"自定义提示")],-1),M=n("div",{class:"hint-container warning"},[n("p",{class:"hint-container-title"},"自定义警告")],-1),q=n("div",{class:"hint-container danger"},[n("p",{class:"hint-container-title"},"自定义危险")],-1),z=n("div",{class:"language-markdown line-numbers-mode","data-ext":"md"},[n("pre",{class:"language-markdown"},[n("code",null,`::: info 自定义信息
:::

::: note 自定义注释
:::

::: tip 自定义提示
:::

::: warning 自定义警告
:::

::: danger 自定义危险
:::
`)]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1);function F(G,H){const r=o("CodeTabs"),l=o("MdDemo");return d(),p("div",null,[k,c(" more "),b,a(r,{id:"7",data:[{id:"TS"},{id:"JS"}],"tab-id":"language"},{title0:e(({value:t,isActive:i})=>[s("TS")]),title1:e(({value:t,isActive:i})=>[s("JS")]),tab0:e(({value:t,isActive:i})=>[v]),tab1:e(({value:t,isActive:i})=>[g]),_:1}),c(" #region after "),h,a(l,{title:"默认标题的容器",id:"md-demo-19"},{default:e(()=>[_,j,w,f,y,x]),code:e(()=>[E]),_:1}),a(l,{title:"自定义标题的容器",id:"md-demo-52"},{default:e(()=>[A,B,C,T,N,P]),code:e(()=>[S]),_:1}),a(l,{title:"不含内容的容器",id:"md-demo-91"},{default:e(()=>[V,D,J,M,q]),code:e(()=>[z]),_:1}),c(" #endregion after ")])}const L=u(m,[["render",F],["__file","container.html.vue"]]);export{L as default};
