import{_ as c}from"./plugin-vue_export-helper-c27b6911.js";import{r as i,o as l,c as p,a as r,e as u,w as e,b as n,d as s,f as d}from"./app-083c2955.js";const k={},m=n("p",null,"The theme supports encryption of specific folders or specific paths, as well as global scope encryption.",-1),h=n("div",{class:"hint-container danger"},[n("p",{class:"hint-container-title"},"Warning"),n("p",null,"Note that because of the limitation of vuepress, the content of the article is only hidden before being decrypted, and visitors can still get the content of the article from the source code (from js)."),n("p",null,[s("Please "),n("strong",null,"DO NOT USE"),s(" this encryption function for any sensitive and confidential articles and files, please bear the consequences of it.")])],-1),y=n("h2",{id:"local-encryption",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#local-encryption","aria-hidden":"true"},"#"),s(" Local Encryption")],-1),v=n("p",null,[s("You can configure encryption options through the "),n("code",null,"encrypt.config"),s(" options in theme options.")],-1),g=n("div",{class:"language-typescript line-numbers-mode","data-ext":"ts"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.ts"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" defineUserConfig "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" hopeTheme "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress-theme-hope"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"defineUserConfig"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  theme`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token function"},"hopeTheme"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
    encrypt`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
      config`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token comment"},"// This will encrypt the entire guide directory, and both passwords are available"),s(`
        `),n("span",{class:"token string-property property"},'"/guide/"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},'"1234"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"5678"'),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token comment"},"// This will only encrypt config/page.html"),s(`
        `),n("span",{class:"token string-property property"},'"/config/page.html"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"1234"'),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),b=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.js"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" hopeTheme "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress-theme-hope"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token literal-property property"},"theme"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token function"},"hopeTheme"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"encrypt"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token literal-property property"},"config"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token comment"},"// This will encrypt the entire guide directory, and both passwords are available"),s(`
        `),n("span",{class:"token string-property property"},'"/guide/"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},'"1234"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"5678"'),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token comment"},"// This will only encrypt config/page.html"),s(`
        `),n("span",{class:"token string-property property"},'"/config/page.html"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"1234"'),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),f=d('<div class="hint-container warning"><p class="hint-container-title">Note</p><p>Note that you can only use passwords in string format.</p><p>The salted hash value of the number <code>1234</code> and the string <code>&quot;1234&quot;</code> is different! While user can only enter the content in the string format through the input box.</p></div><h2 id="global-encryption" tabindex="-1"><a class="header-anchor" href="#global-encryption" aria-hidden="true">#</a> Global encryption</h2><p>In some cases, you may want to encrypt the entire site, you can set <code>encrypt.global: true</code> in theme options to do that.</p><p>For global encryption, you can set one or more passwords in the format of string or string array in <code>encrypt.admin</code>.</p><div class="hint-container tip"><p class="hint-container-title">Tips</p><p>The consideration of multiple passwords is separation of permissions. This allows you to deprecate or update some of the global passwords in future deployments, so that some users with certain password will lose access.</p></div>',5);function w(_,T){const o=i("CodeTabs");return l(),p("div",null,[m,h,r(" more "),y,v,u(o,{id:"18",data:[{id:"TS"},{id:"JS"}],"tab-id":"language"},{title0:e(({value:t,isActive:a})=>[s("TS")]),title1:e(({value:t,isActive:a})=>[s("JS")]),tab0:e(({value:t,isActive:a})=>[g]),tab1:e(({value:t,isActive:a})=>[b]),_:1}),f])}const C=c(k,[["render",w],["__file","encrypt.html.vue"]]);export{C as default};
