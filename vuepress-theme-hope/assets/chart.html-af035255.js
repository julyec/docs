import{_ as u}from"./plugin-vue_export-helper-c27b6911.js";import{r as c,o as k,c as d,a as l,b as n,d as s,e as t,w as a,f as b}from"./app-083c2955.js";const m={},v=n("p",null,"让你 VuePress 站点中的 Markdown 文件支持图表。",-1),g=n("h2",{id:"配置",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#配置","aria-hidden":"true"},"#"),s(" 配置")],-1),y={href:"https://www.chartjs.org/docs/latest/",target:"_blank",rel:"noopener noreferrer"},h=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"pnpm"),s(),n("span",{class:"token function"},"add"),s(),n("span",{class:"token parameter variable"},"-D"),s(` chart.js
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),_=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"yarn"),s(),n("span",{class:"token function"},"add"),s(),n("span",{class:"token parameter variable"},"-D"),s(` chart.js
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),f=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"npm"),s(" i "),n("span",{class:"token parameter variable"},"-D"),s(` chart.js
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),j=n("p",null,"之后启用它:",-1),x=n("div",{class:"language-typescript line-numbers-mode","data-ext":"ts"},[n("pre",{ts:"",class:"language-typescript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.ts"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" mdEnhancePlugin "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress-plugin-md-enhance"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
  plugins`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
    `),n("span",{class:"token function"},"mdEnhancePlugin"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token comment"},"// 启用图表"),s(`
      chart`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"highlight-lines"},[n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"}," "),n("br"),n("br"),n("br")]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),C=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{js:"",class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.js"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" mdEnhancePlugin "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress-plugin-md-enhance"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token literal-property property"},"plugins"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
    `),n("span",{class:"token function"},"mdEnhancePlugin"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token comment"},"// 启用图表"),s(`
      `),n("span",{class:"token literal-property property"},"chart"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"highlight-lines"},[n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"}," "),n("br"),n("br"),n("br")]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),w=b(`<h2 id="格式" tabindex="-1"><a class="header-anchor" href="#格式" aria-hidden="true">#</a> 格式</h2><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>::: chart 标题

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">json</span>
<span class="token code-block language-json language-json language-json"><span class="token punctuation">{</span>
  <span class="token comment">// 此处为图表配置</span>
<span class="token punctuation">}</span></span>
<span class="token punctuation">\`\`\`</span></span>

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们也支持 <code>js</code> 和 <code>javascript</code> 的代码块，你应当将导出对象赋值给 <code>module.exports</code>。</p><h2 id="案例" tabindex="-1"><a class="header-anchor" href="#案例" aria-hidden="true">#</a> 案例</h2>`,4),B=n("p",null,"::: chart 一个块状图案例",-1),A=n("div",{class:"language-json line-numbers-mode","data-ext":"json"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},'"type"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"bar"'),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token property"},'"data"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},'"labels"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},'"红色"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"蓝色"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"黄色"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"绿色"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"紫色"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"橙色"'),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token property"},'"datasets"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token property"},'"label"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"投票数"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"data"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"12"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"19"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"5"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"backgroundColor"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
          `),n("span",{class:"token string"},'"rgba(255, 99, 132, 0.2)"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token string"},'"rgba(54, 162, 235, 0.2)"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token string"},'"rgba(255, 206, 86, 0.2)"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token string"},'"rgba(75, 192, 192, 0.2)"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token string"},'"rgba(153, 102, 255, 0.2)"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token string"},'"rgba(255, 159, 64, 0.2)"'),s(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"borderColor"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
          `),n("span",{class:"token string"},'"rgba(255, 99, 132, 1)"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token string"},'"rgba(54, 162, 235, 1)"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token string"},'"rgba(255, 206, 86, 1)"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token string"},'"rgba(75, 192, 192, 1)"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token string"},'"rgba(153, 102, 255, 1)"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token string"},'"rgba(255, 159, 64, 1)"'),s(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"borderWidth"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1"),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"]"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token property"},'"options"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},'"scales"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token property"},'"y"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token property"},'"beginAtZero"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),H=n("p",null,":::",-1),E=n("div",{class:"language-markdown line-numbers-mode","data-ext":"md"},[n("pre",{class:"language-markdown"},[n("code",null,[s(`::: chart 一个块状图案例

`),n("span",{class:"token code"},[n("span",{class:"token punctuation"},"```"),n("span",{class:"token code-language"},"json"),s(`
`),n("span",{class:"token code-block language-json language-json language-json"},[n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},'"type"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"bar"'),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token property"},'"data"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},'"labels"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},'"红色"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"蓝色"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"黄色"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"绿色"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"紫色"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"橙色"'),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token property"},'"datasets"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token property"},'"label"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"投票数"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"data"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"12"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"19"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"5"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"backgroundColor"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
          `),n("span",{class:"token string"},'"rgba(255, 99, 132, 0.2)"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token string"},'"rgba(54, 162, 235, 0.2)"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token string"},'"rgba(255, 206, 86, 0.2)"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token string"},'"rgba(75, 192, 192, 0.2)"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token string"},'"rgba(153, 102, 255, 0.2)"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token string"},'"rgba(255, 159, 64, 0.2)"'),s(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"borderColor"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
          `),n("span",{class:"token string"},'"rgba(255, 99, 132, 1)"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token string"},'"rgba(54, 162, 235, 1)"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token string"},'"rgba(255, 206, 86, 1)"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token string"},'"rgba(75, 192, 192, 1)"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token string"},'"rgba(153, 102, 255, 1)"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token string"},'"rgba(255, 159, 64, 1)"'),s(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"borderWidth"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1"),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"]"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token property"},'"options"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},'"scales"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token property"},'"y"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token property"},'"beginAtZero"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}")]),s(`
`),n("span",{class:"token punctuation"},"```")]),s(`

:::
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),V=n("p",null,"::: chart 一个气泡图案例",-1),D=n("div",{class:"language-json line-numbers-mode","data-ext":"json"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},'"type"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"bubble"'),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token property"},'"data"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},'"datasets"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token property"},'"label"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"第一个数据集"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"data"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
          `),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token property"},'"x"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"20"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token property"},'"y"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"30"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token property"},'"r"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"15"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token property"},'"x"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"40"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token property"},'"y"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"10"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token property"},'"r"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"10"),s(),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"backgroundColor"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"rgb(255, 99, 132)"'),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"]"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),N=n("p",null,":::",-1),P=n("div",{class:"language-markdown line-numbers-mode","data-ext":"md"},[n("pre",{class:"language-markdown"},[n("code",null,[s(`::: chart 一个气泡图案例

`),n("span",{class:"token code"},[n("span",{class:"token punctuation"},"```"),n("span",{class:"token code-language"},"json"),s(`
`),n("span",{class:"token code-block language-json language-json language-json"},[n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},'"type"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"bubble"'),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token property"},'"data"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},'"datasets"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token property"},'"label"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"第一个数据集"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"data"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
          `),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token property"},'"x"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"20"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token property"},'"y"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"30"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token property"},'"r"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"15"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token property"},'"x"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"40"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token property"},'"y"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"10"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token property"},'"r"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"10"),s(),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"backgroundColor"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"rgb(255, 99, 132)"'),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"]"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}")]),s(`
`),n("span",{class:"token punctuation"},"```")]),s(`

:::
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),S=n("p",null,"::: chart 一个线状图案例",-1),T=n("div",{class:"language-json line-numbers-mode","data-ext":"json"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},'"type"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"line"'),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token property"},'"data"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},'"labels"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},'"一月"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"二月"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"三月"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"四月"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"五月"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"六月"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"七月"'),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token property"},'"datasets"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token property"},'"label"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"我的第一个数据集"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"data"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"65"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"59"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"80"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"81"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"56"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"55"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"40"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"fill"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"borderColor"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"rgb(75, 192, 192)"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"tension"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"0.1"),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"]"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),W=n("p",null,":::",-1),M=n("div",{class:"language-markdown line-numbers-mode","data-ext":"md"},[n("pre",{class:"language-markdown"},[n("code",null,[s(`::: chart 一个线状图案例

`),n("span",{class:"token code"},[n("span",{class:"token punctuation"},"```"),n("span",{class:"token code-language"},"json"),s(`
`),n("span",{class:"token code-block language-json language-json language-json"},[n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},'"type"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"line"'),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token property"},'"data"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},'"labels"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},'"一月"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"二月"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"三月"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"四月"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"五月"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"六月"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"七月"'),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token property"},'"datasets"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token property"},'"label"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"我的第一个数据集"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"data"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"65"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"59"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"80"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"81"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"56"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"55"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"40"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"fill"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"borderColor"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"rgb(75, 192, 192)"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"tension"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"0.1"),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"]"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}")]),s(`
`),n("span",{class:"token punctuation"},"```")]),s(`

:::
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),I=n("p",null,"::: chart 一个玫瑰图案例",-1),J=n("div",{class:"language-json line-numbers-mode","data-ext":"json"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},'"type"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"polarArea"'),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token property"},'"data"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},'"labels"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},'"红色"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"绿色"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"黄色"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"灰色"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"蓝色"'),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token property"},'"datasets"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token property"},'"label"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"我的第一个数据集"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"data"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"11"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"16"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"7"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"14"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"backgroundColor"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
          `),n("span",{class:"token string"},'"rgb(255, 99, 132)"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token string"},'"rgb(75, 192, 192)"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token string"},'"rgb(255, 205, 86)"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token string"},'"rgb(201, 203, 207)"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token string"},'"rgb(54, 162, 235)"'),s(`
        `),n("span",{class:"token punctuation"},"]"),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"]"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),L=n("p",null,":::",-1),Z=n("div",{class:"language-markdown line-numbers-mode","data-ext":"md"},[n("pre",{class:"language-markdown"},[n("code",null,[s(`::: chart 一个玫瑰图案例

`),n("span",{class:"token code"},[n("span",{class:"token punctuation"},"```"),n("span",{class:"token code-language"},"json"),s(`
`),n("span",{class:"token code-block language-json language-json language-json"},[n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},'"type"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"polarArea"'),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token property"},'"data"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},'"labels"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},'"红色"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"绿色"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"黄色"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"灰色"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"蓝色"'),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token property"},'"datasets"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token property"},'"label"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"我的第一个数据集"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"data"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"11"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"16"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"7"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"14"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"backgroundColor"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
          `),n("span",{class:"token string"},'"rgb(255, 99, 132)"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token string"},'"rgb(75, 192, 192)"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token string"},'"rgb(255, 205, 86)"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token string"},'"rgb(201, 203, 207)"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token string"},'"rgb(54, 162, 235)"'),s(`
        `),n("span",{class:"token punctuation"},"]"),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"]"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}")]),s(`
`),n("span",{class:"token punctuation"},"```")]),s(`

:::
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),q=n("p",null,"::: chart 一个雷达图案例",-1),z=n("div",{class:"language-json line-numbers-mode","data-ext":"json"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},'"type"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"radar"'),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token property"},'"data"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},'"labels"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},'"吃饭"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"喝水"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"睡觉"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"设计"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"编程"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"骑车"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"跑步"'),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token property"},'"datasets"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token property"},'"label"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"我的第一个数据集"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"data"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"65"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"59"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"90"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"81"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"56"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"55"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"40"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"fill"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"backgroundColor"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"rgba(255, 99, 132, 0.2)"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"borderColor"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"rgb(255, 99, 132)"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"pointBackgroundColor"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"rgb(255, 99, 132)"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"pointBorderColor"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"#fff"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"pointHoverBackgroundColor"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"#fff"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"pointHoverBorderColor"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"rgb(255, 99, 132)"'),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token property"},'"label"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"我的第二个数据集"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"data"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"28"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"48"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"40"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"19"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"96"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"27"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"100"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"fill"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"backgroundColor"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"rgba(54, 162, 235, 0.2)"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"borderColor"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"rgb(54, 162, 235)"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"pointBackgroundColor"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"rgb(54, 162, 235)"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"pointBorderColor"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"#fff"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"pointHoverBackgroundColor"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"#fff"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"pointHoverBorderColor"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"rgb(54, 162, 235)"'),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"]"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token property"},'"options"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},'"elements"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token property"},'"line"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token property"},'"borderWidth"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"3"),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),F=n("p",null,":::",-1),G=n("div",{class:"language-markdown line-numbers-mode","data-ext":"md"},[n("pre",{class:"language-markdown"},[n("code",null,[s(`::: chart 一个雷达图案例

`),n("span",{class:"token code"},[n("span",{class:"token punctuation"},"```"),n("span",{class:"token code-language"},"json"),s(`
`),n("span",{class:"token code-block language-json language-json language-json"},[n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},'"type"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"radar"'),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token property"},'"data"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},'"labels"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},'"吃饭"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"喝水"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"睡觉"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"设计"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"编程"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"骑车"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"跑步"'),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token property"},'"datasets"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token property"},'"label"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"我的第一个数据集"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"data"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"65"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"59"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"90"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"81"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"56"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"55"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"40"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"fill"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"backgroundColor"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"rgba(255, 99, 132, 0.2)"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"borderColor"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"rgb(255, 99, 132)"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"pointBackgroundColor"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"rgb(255, 99, 132)"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"pointBorderColor"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"#fff"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"pointHoverBackgroundColor"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"#fff"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"pointHoverBorderColor"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"rgb(255, 99, 132)"'),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token property"},'"label"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"我的第二个数据集"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"data"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"28"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"48"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"40"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"19"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"96"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"27"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"100"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"fill"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"backgroundColor"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"rgba(54, 162, 235, 0.2)"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"borderColor"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"rgb(54, 162, 235)"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"pointBackgroundColor"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"rgb(54, 162, 235)"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"pointBorderColor"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"#fff"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"pointHoverBackgroundColor"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"#fff"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"pointHoverBorderColor"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"rgb(54, 162, 235)"'),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"]"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token property"},'"options"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},'"elements"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token property"},'"line"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token property"},'"borderWidth"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"3"),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}")]),s(`
`),n("span",{class:"token punctuation"},"```")]),s(`

:::
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),K=n("p",null,"::: chart 一个散点图案例",-1),O=n("div",{class:"language-json line-numbers-mode","data-ext":"json"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},'"type"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"scatter"'),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token property"},'"data"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},'"datasets"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token property"},'"label"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"散点数据集"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"data"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
          `),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token property"},'"x"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"-10"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token property"},'"y"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"0"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token property"},'"x"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token property"},'"y"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"10"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token property"},'"x"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"10"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token property"},'"y"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"5"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token property"},'"x"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"0.5"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token property"},'"y"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"5.5"),s(),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"backgroundColor"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"rgb(255, 99, 132)"'),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"]"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token property"},'"options"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},'"scales"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token property"},'"x"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token property"},'"type"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"linear"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"position"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"bottom"'),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Q=n("p",null,":::",-1),R=n("div",{class:"language-markdown line-numbers-mode","data-ext":"md"},[n("pre",{class:"language-markdown"},[n("code",null,[s(`::: chart 一个散点图案例

`),n("span",{class:"token code"},[n("span",{class:"token punctuation"},"```"),n("span",{class:"token code-language"},"json"),s(`
`),n("span",{class:"token code-block language-json language-json language-json"},[n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},'"type"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"scatter"'),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token property"},'"data"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},'"datasets"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token property"},'"label"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"散点数据集"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"data"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
          `),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token property"},'"x"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"-10"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token property"},'"y"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"0"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token property"},'"x"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token property"},'"y"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"10"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token property"},'"x"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"10"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token property"},'"y"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"5"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token property"},'"x"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"0.5"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token property"},'"y"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"5.5"),s(),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"backgroundColor"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"rgb(255, 99, 132)"'),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"]"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token property"},'"options"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},'"scales"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token property"},'"x"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token property"},'"type"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"linear"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"position"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"bottom"'),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}")]),s(`
`),n("span",{class:"token punctuation"},"```")]),s(`

:::
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),U=n("h2",{id:"文档",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#文档","aria-hidden":"true"},"#"),s(" 文档")],-1),X={href:"https://www.chartjs.org/docs/latest/",target:"_blank",rel:"noopener noreferrer"};function Y($,nn){const r=c("ExternalLinkIcon"),i=c("CodeTabs"),p=c("MdDemo");return k(),d("div",null,[l(" #region before "),v,l(" more "),g,n("p",null,[s("在你的项目中安装 "),n("a",y,[s("chart.js"),t(r)]),s(":")]),t(i,{id:"11",data:[{id:"pnpm"},{id:"yarn"},{id:"npm"}],"tab-id":"shell"},{title0:a(({value:e,isActive:o})=>[s("pnpm")]),title1:a(({value:e,isActive:o})=>[s("yarn")]),title2:a(({value:e,isActive:o})=>[s("npm")]),tab0:a(({value:e,isActive:o})=>[h]),tab1:a(({value:e,isActive:o})=>[_]),tab2:a(({value:e,isActive:o})=>[f]),_:1}),j,l(" #endregion before "),t(i,{id:"26",data:[{id:"TS"},{id:"JS"}],"tab-id":"language"},{title0:a(({value:e,isActive:o})=>[s("TS")]),title1:a(({value:e,isActive:o})=>[s("JS")]),tab0:a(({value:e,isActive:o})=>[x]),tab1:a(({value:e,isActive:o})=>[C]),_:1}),l(" #region after "),w,t(p,{title:"块状图",id:"md-demo-45"},{default:a(()=>[B,A,H]),code:a(()=>[E]),_:1}),t(p,{title:"气泡图",id:"md-demo-55"},{default:a(()=>[V,D,N]),code:a(()=>[P]),_:1}),t(p,{title:"线状图",id:"md-demo-65"},{default:a(()=>[S,T,W]),code:a(()=>[M]),_:1}),t(p,{title:"玫瑰图",id:"md-demo-75"},{default:a(()=>[I,J,L]),code:a(()=>[Z]),_:1}),t(p,{title:"雷达图",id:"md-demo-85"},{default:a(()=>[q,z,F]),code:a(()=>[G]),_:1}),t(p,{title:"散点图",id:"md-demo-95"},{default:a(()=>[K,O,Q]),code:a(()=>[R]),_:1}),U,n("p",null,[s("相关详情，详见 "),n("a",X,[s("Chart.js 文档"),t(r)]),s(".")]),l(" #endregion after ")])}const tn=u(m,[["render",Y],["__file","chart.html.vue"]]);export{tn as default};
