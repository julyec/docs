import{_ as u}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as p,c as d,a as l,e as c,w as e,b as n,d as s,f as k}from"./app-d630ecd8.js";const m={},b=n("p",null,"让你的 VuePress 站点中的 Markdown 文件支持脚注。",-1),v=n("h2",{id:"配置",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#配置","aria-hidden":"true"},"#"),s(" 配置")],-1),h=n("div",{class:"language-typescript line-numbers-mode","data-ext":"ts"},[n("pre",{ts:"",class:"language-typescript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.ts"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" mdEnhancePlugin "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress-plugin-md-enhance"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
  plugins`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
    `),n("span",{class:"token function"},"mdEnhancePlugin"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token comment"},"// 启用脚注"),s(`
      footnote`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"highlight-lines"},[n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"}," "),n("br"),n("br"),n("br")]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),_=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{js:"",class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.js"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" mdEnhancePlugin "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress-plugin-md-enhance"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token literal-property property"},"plugins"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
    `),n("span",{class:"token function"},"mdEnhancePlugin"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token comment"},"// 启用脚注"),s(`
      `),n("span",{class:"token literal-property property"},"footnote"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"highlight-lines"},[n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"}," "),n("br"),n("br"),n("br")]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),g=k('<h2 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h2><ul><li><p>在 Markdown 中使用 <code>[^锚点文字]</code> 来定义脚注。</p></li><li><p>在之后的任何位置使用 <code>[^锚点文字]: ...</code> 来描述脚注内容。</p></li><li><p>如果脚注包含多个段落，其后的段落应当保持双层缩进。</p></li></ul><h2 id="例子" tabindex="-1"><a class="header-anchor" href="#例子" aria-hidden="true">#</a> 例子</h2>',3),f=n("p",null,"脚注 1 链接[^first]。",-1),w=n("p",null,[s("脚注 2 链接"),n("a",{href:"%E8%84%9A%E6%B3%A8%E6%96%87%E5%AD%97%E3%80%82"},"^second"),s("。")],-1),y=n("p",null,"行内的脚注^[行内脚注文本] 定义。",-1),E=n("p",null,[s("重复的页脚定义"),n("a",{href:"%E8%84%9A%E6%B3%A8%E6%96%87%E5%AD%97%E3%80%82"},"^second"),s("。")],-1),x=n("p",null,[s("[^first]: 脚注 "),n("strong",null,"可以包含特殊标记")],-1),A=n("pre",null,[n("code",null,`也可以由多个段落组成
`)],-1),V=n("div",{class:"language-markdown line-numbers-mode","data-ext":"md"},[n("pre",{class:"language-markdown"},[n("code",null,[s(`脚注 1 链接[^first]。

脚注 2 链接[^second]。

行内的脚注^[行内脚注文本] 定义。

重复的页脚定义[^second]。

`),n("span",{class:"token url-reference url"},[n("span",{class:"token punctuation"},"["),n("span",{class:"token variable"},"^first"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},":"),s(" 脚注")]),s(),n("span",{class:"token bold"},[n("span",{class:"token punctuation"},"**"),n("span",{class:"token content"},"可以包含特殊标记"),n("span",{class:"token punctuation"},"**")]),s(`

`),n("span",{class:"token code keyword"},"    也可以由多个段落组成"),s(`

`),n("span",{class:"token url-reference url"},[n("span",{class:"token punctuation"},"["),n("span",{class:"token variable"},"^second"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},":"),s(" 脚注文字。")]),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1);function j(B,C){const i=o("CodeTabs"),r=o("MdDemo");return p(),d("div",null,[b,l(" more "),v,c(i,{id:"7",data:[{id:"TS"},{id:"JS"}],"tab-id":"language"},{title0:e(({value:a,isActive:t})=>[s("TS")]),title1:e(({value:a,isActive:t})=>[s("JS")]),tab0:e(({value:a,isActive:t})=>[h]),tab1:e(({value:a,isActive:t})=>[_]),_:1}),l(" #region after "),g,c(r,{title:"",id:"md-demo-39"},{default:e(()=>[f,w,y,E,x,A]),code:e(()=>[V]),_:1}),l(" #endregion after ")])}const S=u(m,[["render",j],["__file","footnote.html.vue"]]);export{S as default};
