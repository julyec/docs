import{_ as r}from"./plugin-vue_export-helper-c27b6911.js";import{r as c,o as b,c as p,a as d,e as t,w as s,b as n,d as e,f as v}from"./app-d630ecd8.js";const m={},h=n("p",null,"Let the Markdown file in your VuePress site support tabs.",-1),g=n("h2",{id:"settings",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#settings","aria-hidden":"true"},"#"),e(" Settings")],-1),k=n("div",{class:"language-typescript line-numbers-mode","data-ext":"ts"},[n("pre",{ts:"",class:"language-typescript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.ts"),e(`
`),n("span",{class:"token keyword"},"import"),e(),n("span",{class:"token punctuation"},"{"),e(" mdEnhancePlugin "),n("span",{class:"token punctuation"},"}"),e(),n("span",{class:"token keyword"},"from"),e(),n("span",{class:"token string"},'"vuepress-plugin-md-enhance"'),n("span",{class:"token punctuation"},";"),e(`

`),n("span",{class:"token keyword"},"export"),e(),n("span",{class:"token keyword"},"default"),e(),n("span",{class:"token punctuation"},"{"),e(`
  plugins`),n("span",{class:"token operator"},":"),e(),n("span",{class:"token punctuation"},"["),e(`
    `),n("span",{class:"token function"},"mdEnhancePlugin"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),e(`
      `),n("span",{class:"token comment"},"// adds tabs support"),e(`
      tabs`),n("span",{class:"token operator"},":"),e(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),e(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),e(`
  `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),e(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),e(`
`)])]),n("div",{class:"highlight-lines"},[n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"}," "),n("br"),n("br"),n("br")]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),_=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{js:"",class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.js"),e(`
`),n("span",{class:"token keyword"},"import"),e(),n("span",{class:"token punctuation"},"{"),e(" mdEnhancePlugin "),n("span",{class:"token punctuation"},"}"),e(),n("span",{class:"token keyword"},"from"),e(),n("span",{class:"token string"},'"vuepress-plugin-md-enhance"'),n("span",{class:"token punctuation"},";"),e(`

`),n("span",{class:"token keyword"},"export"),e(),n("span",{class:"token keyword"},"default"),e(),n("span",{class:"token punctuation"},"{"),e(`
  `),n("span",{class:"token literal-property property"},"plugins"),n("span",{class:"token operator"},":"),e(),n("span",{class:"token punctuation"},"["),e(`
    `),n("span",{class:"token function"},"mdEnhancePlugin"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),e(`
      `),n("span",{class:"token comment"},"// adds tabs support"),e(`
      `),n("span",{class:"token literal-property property"},"tabs"),n("span",{class:"token operator"},":"),e(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),e(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),e(`
  `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),e(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),e(`
`)])]),n("div",{class:"highlight-lines"},[n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"}," "),n("br"),n("br"),n("br")]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),f=v(`<h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><p>You need to wrap your tabs in <code>tabs</code> container.</p><p>You can add an id suffix in <code>tabs</code> container, which will be used as tab id. All tabs with same id will share same switch event.</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>::: tabs#fruit

<span class="token comment">&lt;!-- here, fruit will be used as id, it&#39;s optional --&gt;</span>

<span class="token comment">&lt;!-- tabs content --&gt;</span>

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Inside this container, you should use <code>@tab</code> marker to mark and separate tab contents.</p><p>Behind <code>@tab</code> marker, you can add text <code>:active</code> to activate the tab by default, and the text will be resolved as tab title.</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>::: tabs

@tab title 1

<span class="token comment">&lt;!-- tab 1 content --&gt;</span>

@tab title 2

<span class="token comment">&lt;!-- tab 2 content --&gt;</span>

@tab:active title 3

<span class="token comment">&lt;!-- tab 3 will be activated by default --&gt;</span>

<span class="token comment">&lt;!-- tab 3 content --&gt;</span>

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>By default, the title will be used as value of tab, but you can override it using id suffix.</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>::: tabs

@tab title 1

<span class="token comment">&lt;!-- here, tab 1&#39;s title &quot;title 1&quot; will be used as value. --&gt;</span>

<span class="token comment">&lt;!-- tab 1 content --&gt;</span>

@tab title 2#value2

<span class="token comment">&lt;!-- here, tab 2&#39;s title will be &quot;title 2&quot;, but it will bind a value with &quot;value2&quot; --&gt;</span>

<span class="token comment">&lt;!-- tab 2 content --&gt;</span>

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>You can use Vue syntax and components in each tab, and you can access <code>value</code> and <code>isActive</code>, indicating the tab&#39;s binding value and whether the tab is active.</p>`,10),A={class:"hint-container info"},w=n("p",{class:"hint-container-title"},"Switching together and persisting choice",-1),y=n("p",null,"If you want to make some tab groups switch together, you can use same tab id to bind them.",-1),x=n("p",null,"Also, your choice with that tab id will be stored and persisted.",-1),B=n("p",null,"Here is an example:",-1),S=n("p",null,"Choose a package manager:",-1),T=n("p",null,"npm should be installed with Node.js.",-1),V=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[e("corepack prepare pnpm@latest "),n("span",{class:"token parameter variable"},"--activated"),e(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),j=n("p",null,[e("Install "),n("code",null,"vuepress-plugin-md-enhance"),e(":")],-1),q=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"npm"),e(" i "),n("span",{class:"token parameter variable"},"-D"),e(` vuepress-plugin-md-enhance
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),C=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"pnpm"),e(),n("span",{class:"token function"},"add"),e(),n("span",{class:"token parameter variable"},"-D"),e(` vuepress-plugin-md-enhance
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),N=n("h2",{id:"demo",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#demo","aria-hidden":"true"},"#"),e(" Demo")],-1),D=n("p",null,"A tab of fruit:",-1),E=n("p",null,"Apple",-1),P=n("p",null,"Banana",-1),O=n("p",null,"Another tab of fruit:",-1),I=n("p",null,"Apple",-1),M=n("p",null,"Banana",-1),U=n("p",null,"Orange",-1),Y=n("p",null,"A tab of fruit without id:",-1),J=n("p",null,"Apple",-1),H=n("p",null,"Banana",-1),L=n("p",null,"Orange",-1),z=n("div",{class:"language-markdown line-numbers-mode","data-ext":"md"},[n("pre",{class:"language-markdown"},[n("code",null,`A tab of fruit:

::: tabs#fruit

@tab apple#apple

Apple

@tab banana#banana

Banana

:::

Another tab of fruit:

::: tabs#fruit

@tab apple

Apple

@tab banana

Banana

@tab orange

Orange

:::

A tab of fruit without id:

::: tabs

@tab apple

Apple

@tab banana

Banana

@tab orange

Orange

:::
`)]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1);function F(G,K){const o=c("CodeTabs"),l=c("Tabs"),u=c("MdDemo");return b(),p("div",null,[h,d(" more "),g,t(o,{id:"7",data:[{id:"TS"},{id:"JS"}],"tab-id":"language"},{title0:s(({value:a,isActive:i})=>[e("TS")]),title1:s(({value:a,isActive:i})=>[e("JS")]),tab0:s(({value:a,isActive:i})=>[k]),tab1:s(({value:a,isActive:i})=>[_]),_:1}),d(" #region after "),f,n("div",A,[w,y,x,B,S,t(l,{id:"53",data:[{id:"npm"},{id:"pnpm"}],"tab-id":"shell"},{title0:s(({value:a,isActive:i})=>[e("npm")]),title1:s(({value:a,isActive:i})=>[e("pnpm")]),tab0:s(({value:a,isActive:i})=>[T]),tab1:s(({value:a,isActive:i})=>[V]),_:1}),j,t(l,{id:"66",data:[{id:"npm"},{id:"pnpm"}],"tab-id":"shell"},{title0:s(({value:a,isActive:i})=>[e("Using npm")]),title1:s(({value:a,isActive:i})=>[e("Using pnpm")]),tab0:s(({value:a,isActive:i})=>[q]),tab1:s(({value:a,isActive:i})=>[C]),_:1})]),N,t(u,{title:"",id:"md-demo-78"},{default:s(()=>[D,t(l,{id:"82",data:[{id:"apple"},{id:"banana"}],"tab-id":"fruit"},{title0:s(({value:a,isActive:i})=>[e("apple")]),title1:s(({value:a,isActive:i})=>[e("banana")]),tab0:s(({value:a,isActive:i})=>[E]),tab1:s(({value:a,isActive:i})=>[P]),_:1}),O,t(l,{id:"97",data:[{id:"apple"},{id:"banana"},{id:"orange"}],"tab-id":"fruit"},{title0:s(({value:a,isActive:i})=>[e("apple")]),title1:s(({value:a,isActive:i})=>[e("banana")]),title2:s(({value:a,isActive:i})=>[e("orange")]),tab0:s(({value:a,isActive:i})=>[I]),tab1:s(({value:a,isActive:i})=>[M]),tab2:s(({value:a,isActive:i})=>[U]),_:1}),Y,t(l,{id:"117",data:[{id:"apple"},{id:"banana"},{id:"orange"}]},{title0:s(({value:a,isActive:i})=>[e("apple")]),title1:s(({value:a,isActive:i})=>[e("banana")]),title2:s(({value:a,isActive:i})=>[e("orange")]),tab0:s(({value:a,isActive:i})=>[J]),tab1:s(({value:a,isActive:i})=>[H]),tab2:s(({value:a,isActive:i})=>[L]),_:1})]),code:s(()=>[z]),_:1}),d(" #endregion after ")])}const W=r(m,[["render",F],["__file","tabs.html.vue"]]);export{W as default};
