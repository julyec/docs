import{_ as d}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as r,c as k,a as e,b as n,e as l,w as a,d as s,f as m}from"./app-083c2955.js";const v={},g=n("h2",{id:"syntax",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#syntax","aria-hidden":"true"},"#"),s(" Syntax")],-1),b=m(`<div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>::: normal-demo Optional title text

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">html</span>
<span class="token code-block language-html language-html language-html"><span class="token comment">&lt;!-- html code --&gt;</span></span>
<span class="token punctuation">\`\`\`</span></span>

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">js</span>
<span class="token code-block language-js language-js language-js"><span class="token comment">// js code</span></span>
<span class="token punctuation">\`\`\`</span></span>

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">css</span>
<span class="token code-block language-css language-css language-css"><span class="token comment">/* css code */</span></span>
<span class="token punctuation">\`\`\`</span></span>

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">json</span>
<span class="token code-block language-json language-json language-json"><span class="token comment">// config (optional)</span>
<span class="token punctuation">{</span>
  <span class="token property">&quot;jsLib&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    ...
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;cssLib&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
    ...
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span></span>
<span class="token punctuation">\`\`\`</span></span>

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),h=n("div",{class:"hint-container warning"},[n("p",{class:"hint-container-title"},"Attention"),n("ul",null,[n("li",null,[s('We use "ShadowDOM" to make style isolation, and we already replace '),n("code",null,"document"),s(" with "),n("code",null,"shadowRoot"),s(". To access the page document, please visit "),n("code",null,"window.document"),s(".")])])],-1),_={class:"hint-container tip"},y=n("p",{class:"hint-container-title"},"Import external styles",-1),f=n("ul",null,[n("li",null,[s("If you need import to external styles (e.g., css files generated by unocss), you can add "),n("code",null,"link"),s(" tags using html or js blocks. E.g.")])],-1),x=n("div",{class:"language-html line-numbers-mode","data-ext":"html"},[n("pre",{class:"language-html"},[n("code",null,[n("span",{class:"token comment"},"<!-- change to your own href -->"),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("link")]),s(),n("span",{class:"token attr-name"},"rel"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("stylesheet"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"href"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("__uno.css"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token punctuation"},"/>")]),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),j=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"// add this to js code block, change to your own href"),s(`
`),n("span",{class:"token keyword"},"const"),s(" linkElem "),n("span",{class:"token operator"},"="),s(" window"),n("span",{class:"token punctuation"},"."),s("document"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"createElement"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"link"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

linkElem`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"setAttribute"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"rel"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"stylesheet"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
linkElem`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"setAttribute"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"href"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"__uno.css"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
document`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"appendChild"),n("span",{class:"token punctuation"},"("),s("linkElem"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),w=n("h2",{id:"demo",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#demo","aria-hidden":"true"},"#"),s(" Demo")],-1),E=n("div",{class:"language-html line-numbers-mode","data-ext":"html"},[n("pre",{class:"language-html"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("h1")]),n("span",{class:"token punctuation"},">")]),s("VuePress Theme Hope"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("h1")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("p")]),n("span",{class:"token punctuation"},">")]),s("is "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("span")]),s(),n("span",{class:"token attr-name"},"id"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("very"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("very"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("span")]),n("span",{class:"token punctuation"},">")]),s(" powerful!"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("p")]),n("span",{class:"token punctuation"},">")]),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),q=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[s("document"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"querySelector"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"#very"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"addEventListener"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"click"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"alert"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Very powerful"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),A=n("div",{class:"language-css line-numbers-mode","data-ext":"css"},[n("pre",{class:"language-css"},[n("code",null,[n("span",{class:"token selector"},"span"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),s(" red"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),V=n("div",{class:"language-markdown line-numbers-mode","data-ext":"md"},[n("pre",{class:"language-markdown"},[n("code",null,[s(`::: normal-demo Demo

`),n("span",{class:"token code"},[n("span",{class:"token punctuation"},"```"),n("span",{class:"token code-language"},"html"),s(`
`),n("span",{class:"token code-block language-html language-html language-html"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("h1")]),n("span",{class:"token punctuation"},">")]),s("VuePress Theme Hope"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("h1")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("p")]),n("span",{class:"token punctuation"},">")]),s("is "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("span")]),s(),n("span",{class:"token attr-name"},"id"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("very"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("very"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("span")]),n("span",{class:"token punctuation"},">")]),s(" powerful!"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("p")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"token punctuation"},"```")]),s(`

`),n("span",{class:"token code"},[n("span",{class:"token punctuation"},"```"),n("span",{class:"token code-language"},"js"),s(`
`),n("span",{class:"token code-block language-js language-js language-js"},[s("document"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"querySelector"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"#very"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"addEventListener"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"click"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"alert"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Very powerful"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"token punctuation"},"```")]),s(`

`),n("span",{class:"token code"},[n("span",{class:"token punctuation"},"```"),n("span",{class:"token code-language"},"css"),s(`
`),n("span",{class:"token code-block language-css language-css language-css"},[n("span",{class:"token selector"},"span"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),s(" red"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}")]),s(`
`),n("span",{class:"token punctuation"},"```")]),s(`

:::
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1);function C(D,L){const i=o("CodeTabs"),u=o("CodeDemo"),p=o("MdDemo");return r(),k("div",null,[g,e(" #region syntax "),b,e(" #endregion syntax "),h,n("div",_,[y,f,l(i,{id:"23",data:[{id:"html example"},{id:"js example"}]},{title0:a(({value:t,isActive:c})=>[s("html example")]),title1:a(({value:t,isActive:c})=>[s("js example")]),tab0:a(({value:t,isActive:c})=>[x]),tab1:a(({value:t,isActive:c})=>[j]),_:1})]),w,e(" #region demo "),l(p,{title:"Normal demo",id:"md-demo-36"},{default:a(()=>[l(u,{id:"code-demo-37",type:"normal",title:"Demo",code:"eJw9jjELwjAQhf/KeS4KYnHVmE1wcBAUpywlOWk1TWKSKiL9714quNzBvfe9dx9scmdxjaJZyUtPx0gpwbmhjmDvA4mK78qJINsEIoXaQWu2Cp8U3wplWaIqZwnBvyheezsRVWAEF3hLHGy87jtyefno2XwiSzr7OFM4/WXMl7Uxuyc7Dm3K5Kho2rb6rnABszlsJXyUA6gtxczahbF/GfMb5YYyuFCn0jh+OSLaWx/XEMkUE1uGLyvyUMo="},{default:a(()=>[E,q,A]),_:1})]),code:a(()=>[V]),_:1}),e(" #endregion demo ")])}const N=d(v,[["render",C],["__file","normal.html.vue"]]);export{N as default};