import{i as u,r as e,o as d,c as k,b as n,d as s,e as t,w as a,f as b}from"./app-d630ecd8.js";import{_ as m}from"./plugin-vue_export-helper-c27b6911.js";const h=n("h2",{id:"print-button",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#print-button","aria-hidden":"true"},"#"),s(" Print Button")],-1),v=n("p",null,"The theme fully optimize style for print, and there will be a print button at toc in desktop mode by default.",-1),f=n("p",null,[s("To hide print button, you should set "),n("code",null,"print: false"),s(" in theme options.")],-1),g=n("h2",{id:"fullscreen-button",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#fullscreen-button","aria-hidden":"true"},"#"),s(" Fullscreen Button")],-1),y=n("p",null,[s("If you need it, you can enable it by setting "),n("code",null,"fullscreen: true"),s(" in theme options.")],-1),_=n("div",{class:"hint-container tip"},[n("p",{class:"hint-container-title"},"Tips"),n("p",null,"If the current browser does not support full screen, the full screen button is automatically hidden.")],-1),T=n("div",{class:"language-typescript line-numbers-mode","data-ext":"ts"},[n("pre",{ts:"",class:"language-typescript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.ts"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" defineUserConfig "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" hopeTheme "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress-theme-hope"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"defineUserConfig"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  theme`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token function"},"hopeTheme"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
    fullscreen`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"highlight-lines"},[n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"}," "),n("br"),n("br")]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),w=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{js:"",class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.js"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" defineUserConfig "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" hopeTheme "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress-theme-hope"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"defineUserConfig"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token literal-property property"},"theme"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token function"},"hopeTheme"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"fullscreen"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"highlight-lines"},[n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"}," "),n("br"),n("br")]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),x=b(`<h2 id="back-to-top-button" tabindex="-1"><a class="header-anchor" href="#back-to-top-button" aria-hidden="true">#</a> Back to top button</h2><p><code>vuepress-theme-hope</code> adds a back-to-top button with progress bar which will display after scrolling down 100px by default.</p><p>You can set <code>backToTop: false</code> in theme options to disable it, or set it with an object to customize its threshold distance and progress bar display:</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">BackToTopOptions</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * Scroll threshold distance to display back to top button (in pixels)
   *
   * <span class="token keyword">@default</span> 100
   */</span>
  threshold<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Whether display scroll progress
   *
   * <span class="token keyword">@default</span> true
   */</span>
  progress<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="rtl-layout" tabindex="-1"><a class="header-anchor" href="#rtl-layout" aria-hidden="true">#</a> RTL Layout</h2><p><code>vuepress-theme-hope</code> fully supports RTL layout. Just set <code>rtl: true</code> in rtl locales.</p>`,6),B=u({__name:"others.html",setup(C){return(S,j)=>{const i=e("PrintButton"),c=e("ToggleFullScreenButton"),p=e("CodeTabs"),r=e("ToggleRTLButton");return d(),k("div",null,[h,n("p",null,[s("Try it: "),t(i)]),v,f,g,t(c),y,_,t(p,{id:"25",data:[{id:"TS"},{id:"JS"}],"tab-id":"language"},{title0:a(({value:o,isActive:l})=>[s("TS")]),title1:a(({value:o,isActive:l})=>[s("JS")]),tab0:a(({value:o,isActive:l})=>[T]),tab1:a(({value:o,isActive:l})=>[w]),_:1}),x,n("p",null,[s("Try it: "),t(r)])])}}}),N=m(B,[["__file","others.html.vue"]]);export{N as default};
