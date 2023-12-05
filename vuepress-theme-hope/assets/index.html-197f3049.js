import{_ as m}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o as k,c as b,a,e as o,w as e,b as n,d as s,f as i}from"./app-d630ecd8.js";const v={},g=n("p",null,"让你的 VuePress 站点中的 Markdown 文件支持代码案例。",-1),h=n("div",{class:"hint-container info"},[n("p",{class:"hint-container-title"},"什么是代码演示"),n("p",null,"代码演示是一项功能，可让你在 Markdown 文件中插入代码片段，插件将为你呈现源代码并在浏览器上运行代码。 如果用户喜欢尝试，可以点击 CodePen 或 JSFiddle 按钮，在 CodePen 或 JSFiddle 中打开 demo，在线编辑。"),n("p",null,"因此，这意味着你无权访问项目中的内部组件。我们既不能在用户的浏览器中读取你本地的文件系统， Codepen 和 JSFiddle 也不能访问项目中的 Vue 组件。")],-1),_=n("h2",{id:"配置",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#配置","aria-hidden":"true"},"#"),s(" 配置")],-1),q=n("div",{class:"language-typescript line-numbers-mode","data-ext":"ts"},[n("pre",{ts:"",class:"language-typescript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.ts"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" mdEnhancePlugin "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress-plugin-md-enhance"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
  plugins`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
    `),n("span",{class:"token function"},"mdEnhancePlugin"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token comment"},"// 启用代码演示"),s(`
      demo`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"highlight-lines"},[n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"}," "),n("br"),n("br"),n("br")]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),f=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{js:"",class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.js"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" mdEnhancePlugin "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress-plugin-md-enhance"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token literal-property property"},"plugins"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
    `),n("span",{class:"token function"},"mdEnhancePlugin"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token comment"},"// 启用代码演示"),s(`
      `),n("span",{class:"token literal-property property"},"demo"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"highlight-lines"},[n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"}," "),n("br"),n("br"),n("br")]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),y=i(`<h2 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h2><p>请使用以下语法:</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>::: [类型]-demo 可选的标题文字

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">html</span>
<span class="token code-block language-html language-html language-html"><span class="token comment">&lt;!-- ↑ 使用可用的语言 --&gt;</span>
<span class="token comment">&lt;!-- 在代码块中放置你对应语言的代码，一个语言不能出现多个块 --&gt;</span>
<span class="token comment">&lt;!-- 你可以有多个代码块，并且 html, js, css 都是视情况可选的 --&gt;</span></span>
<span class="token punctuation">\`\`\`</span></span>

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">json</span>
<span class="token code-block language-json language-json language-json"><span class="token comment">// json block 作为插件配置存放处</span>
<span class="token punctuation">{</span>
  <span class="token comment">// 放置你的配置 (可选的)</span>
<span class="token punctuation">}</span></span>
<span class="token punctuation">\`\`\`</span></span>

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),w={class:"hint-container tip"},x=n("p",{class:"hint-container-title"},"提示",-1),E=n("p",null,"该插件支持三种类型:",-1),j=n("ul",null,[n("li",null,"normal"),n("li",null,"vue"),n("li",null,"react")],-1),A=i('<h2 id="可用的语言" tabindex="-1"><a class="header-anchor" href="#可用的语言" aria-hidden="true">#</a> 可用的语言</h2><p>你可以在演示块中使用不同语言。</p><p>当你设置一些不能在浏览器上直接运行的语言时，由于插件无法解析它们，因此网页演示将被禁用。插件只显示代码。同时提供一个 &quot;在 CodePen 中打开&quot; 按钮允许用户直接在 CodePen 打开并浏览代码。</p><p>可用的 HTML 语言:</p><ul><li><code>&quot;html&quot;</code> (默认)</li><li><code>&quot;slim&quot;</code></li><li><code>&quot;haml&quot;</code></li><li><code>&quot;markdown&quot;</code></li></ul><blockquote><p>你也可以在代码块中使用 <code>md</code>。</p></blockquote><p>可用的 JS 语言:</p><ul><li><code>&quot;javascript&quot;</code> (default)</li><li><code>&quot;coffeescript&quot;</code></li><li><code>&quot;babel&quot;</code></li><li><code>&quot;livescript&quot;</code></li><li><code>&quot;typescript&quot;</code></li></ul><blockquote><p>你也可以在代码块中使用 <code>js</code>, <code>ts</code>, <code>coffee</code> 和 <code>ls</code>。</p></blockquote><p>可用的 CSS 语言:</p><ul><li><code>&quot;css&quot;</code> (default)</li><li><code>&quot;less&quot;</code></li><li><code>&quot;scss&quot;</code></li><li><code>&quot;sass&quot;</code></li><li><code>&quot;stylus&quot;</code></li></ul><blockquote><p>你也可以在代码块中使用 <code>styl</code>。</p></blockquote>',12),S=n("h3",{id:"不支持的语言演示",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#不支持的语言演示","aria-hidden":"true"},"#"),s(" 不支持的语言演示")],-1),T=n("div",{class:"language-markdown line-numbers-mode","data-ext":"md"},[n("pre",{class:"language-markdown"},[n("code",null,[n("span",{class:"token title important"},[n("span",{class:"token punctuation"},"#"),s(" 标题")]),s(`

十分强大
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),C=n("div",{class:"language-typescript line-numbers-mode","data-ext":"ts"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"const"),s(" message"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"string"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},'"VuePress Theme Hope"'),n("span",{class:"token punctuation"},";"),s(`

document`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"querySelector"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"h1"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),s("innerHTML "),n("span",{class:"token operator"},"="),s(" message"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),P=n("div",{class:"language-scss line-numbers-mode","data-ext":"scss"},[n("pre",{class:"language-scss"},[n("code",null,[n("span",{class:"token selector"},"h1 "),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"font-style"),n("span",{class:"token punctuation"},":"),s(" italic"),n("span",{class:"token punctuation"},";"),s(`

  `),n("span",{class:"token selector"},"+ p "),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),s(" red"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),J=n("div",{class:"language-markdown line-numbers-mode","data-ext":"md"},[n("pre",{class:"language-markdown"},[n("code",null,[s(`::: normal-demo 一个使用浏览器不支持解析语言 Demo

`),n("span",{class:"token code"},[n("span",{class:"token punctuation"},"```"),n("span",{class:"token code-language"},"md"),s(`
`),n("span",{class:"token code-block language-md language-md language-md"},[n("span",{class:"token title important"},[n("span",{class:"token punctuation"},"#"),s(" 标题")]),s(`

十分强大`)]),s(`
`),n("span",{class:"token punctuation"},"```")]),s(`

`),n("span",{class:"token code"},[n("span",{class:"token punctuation"},"```"),n("span",{class:"token code-language"},"ts"),s(`
`),n("span",{class:"token code-block language-ts language-ts language-ts"},[n("span",{class:"token keyword"},"const"),s(" message"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"string"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},'"VuePress Theme Hope"'),n("span",{class:"token punctuation"},";"),s(`

document`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"querySelector"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"h1"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),s("innerHTML "),n("span",{class:"token operator"},"="),s(" message"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"token punctuation"},"```")]),s(`

`),n("span",{class:"token code"},[n("span",{class:"token punctuation"},"```"),n("span",{class:"token code-language"},"scss"),s(`
`),n("span",{class:"token code-block language-scss language-scss language-scss"},[n("span",{class:"token selector"},"h1 "),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"font-style"),n("span",{class:"token punctuation"},":"),s(" italic"),n("span",{class:"token punctuation"},";"),s(`

  `),n("span",{class:"token selector"},"+ p "),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),s(" red"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}")]),s(`
`),n("span",{class:"token punctuation"},"```")]),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1);function M(V,D){const u=t("CodeTabs"),d=t("RouterLink"),p=t("CodeDemo"),r=t("MdDemo");return k(),b("div",null,[g,a(" more "),h,_,o(u,{id:"15",data:[{id:"TS"},{id:"JS"}],"tab-id":"language"},{title0:e(({value:l,isActive:c})=>[s("TS")]),title1:e(({value:l,isActive:c})=>[s("JS")]),tab0:e(({value:l,isActive:c})=>[q]),tab1:e(({value:l,isActive:c})=>[f]),_:1}),a(" #region syntax "),y,a(" #endregion syntax "),n("div",w,[x,n("p",null,[s("JSON 块是可选的，可用的配置详见 "),o(d,{to:"/zh/guide/markdown/config.html#demo"},{default:e(()=>[s("配置")]),_:1}),s("。")])]),E,j,a(" #region language "),A,a(" #endregion language "),S,a(" #region demo "),o(r,{title:"",id:"md-demo-172"},{default:e(()=>[o(p,{id:"code-demo-173",type:"normal",title:"%E4%B8%80%E4%B8%AA%E4%BD%BF%E7%94%A8%E6%B5%8F%E8%A7%88%E5%99%A8%E4%B8%8D%E6%94%AF%E6%8C%81%E8%A7%A3%E6%9E%90%E8%AF%AD%E8%A8%80%20Demo",code:"eJwtjT2KAkEQha/yqE122V3BdJbNDRQExagS6SmdgZlq7e4JRAxM1MTcUETwDuJ1RvAWtj9QUb33vm9OZUoJfeC6X98OO1bWerusN6v6cq6PJ1b6oeBjw1j1AaV4PxxLAh9crmP8g2lQSdfFP/qZlIKWnQjT34OUWlOVoqExrcTNelKICdZ9MmVNpq9Griqu1e+0I+YNjrMo9MY/lFkTc1ZgZDX8+jArojcPwyI3TzrwjcmrARhbWJfASRozYMEajxZ3wnJQ1w=="},{default:e(()=>[T,C,P]),_:1})]),code:e(()=>[J]),_:1}),a(" #endregion demo ")])}const F=m(v,[["render",M],["__file","index.html.vue"]]);export{F as default};
