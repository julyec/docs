import{_ as u}from"./plugin-vue_export-helper-c27b6911.js";import{r as p,o as k,c as d,a as c,b as n,d as s,e as t,w as a,f as b}from"./app-083c2955.js";const m={},v=n("p",null,"Let the Markdown file support chart in your VuePress site.",-1),g=n("h2",{id:"settings",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#settings","aria-hidden":"true"},"#"),s(" Settings")],-1),y={href:"https://www.chartjs.org/docs/latest/",target:"_blank",rel:"noopener noreferrer"},h=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"pnpm"),s(),n("span",{class:"token function"},"add"),s(),n("span",{class:"token parameter variable"},"-D"),s(` chart.js
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),_=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"yarn"),s(),n("span",{class:"token function"},"add"),s(),n("span",{class:"token parameter variable"},"-D"),s(` chart.js
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),f=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"npm"),s(" i "),n("span",{class:"token parameter variable"},"-D"),s(` chart.js
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),C=n("p",null,"Then enabling via:",-1),j=n("div",{class:"language-typescript line-numbers-mode","data-ext":"ts"},[n("pre",{ts:"",class:"language-typescript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.ts"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" mdEnhancePlugin "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress-plugin-md-enhance"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
  plugins`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
    `),n("span",{class:"token function"},"mdEnhancePlugin"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token comment"},"// Enable Chart"),s(`
      chart`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"highlight-lines"},[n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"}," "),n("br"),n("br"),n("br")]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),x=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{js:"",class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.js"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" mdEnhancePlugin "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress-plugin-md-enhance"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token literal-property property"},"plugins"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
    `),n("span",{class:"token function"},"mdEnhancePlugin"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token comment"},"// Enable Chart"),s(`
      `),n("span",{class:"token literal-property property"},"chart"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"highlight-lines"},[n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"}," "),n("br"),n("br"),n("br")]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),w=b(`<h2 id="syntax" tabindex="-1"><a class="header-anchor" href="#syntax" aria-hidden="true">#</a> Syntax</h2><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>::: chart Title

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">json</span>
<span class="token code-block language-json language-json"><span class="token punctuation">{</span>
  <span class="token comment">// Your chart config here.</span>
<span class="token punctuation">}</span></span>
<span class="token punctuation">\`\`\`</span></span>

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>js</code> and <code>javascript</code> code block is also supported, and you are expected to assign your export object to <code>module.exports</code>.</p><h2 id="demo" tabindex="-1"><a class="header-anchor" href="#demo" aria-hidden="true">#</a> Demo</h2>`,4),A=n("p",null,"::: chart A bar chart",-1),B=n("div",{class:"language-json line-numbers-mode","data-ext":"json"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},'"type"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"bar"'),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token property"},'"data"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},'"labels"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},'"Red"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"Blue"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"Yellow"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"Green"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"Purple"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"Orange"'),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token property"},'"datasets"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token property"},'"label"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"# of Votes"'),n("span",{class:"token punctuation"},","),s(`
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
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),D=n("p",null,":::",-1),S=n("div",{class:"language-markdown line-numbers-mode","data-ext":"md"},[n("pre",{class:"language-markdown"},[n("code",null,[s(`::: chart A bar chart

`),n("span",{class:"token code"},[n("span",{class:"token punctuation"},"```"),n("span",{class:"token code-language"},"json"),s(`
`),n("span",{class:"token code-block language-json language-json"},[n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},'"type"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"bar"'),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token property"},'"data"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},'"labels"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},'"Red"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"Blue"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"Yellow"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"Green"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"Purple"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"Orange"'),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token property"},'"datasets"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token property"},'"label"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"# of Votes"'),n("span",{class:"token punctuation"},","),s(`
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
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),M=n("p",null,"::: chart A Bubble Chart",-1),E=n("div",{class:"language-json line-numbers-mode","data-ext":"json"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},'"type"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"bubble"'),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token property"},'"data"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},'"datasets"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token property"},'"label"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"First Dataset"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"data"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
          `),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token property"},'"x"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"20"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token property"},'"y"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"30"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token property"},'"r"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"15"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token property"},'"x"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"40"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token property"},'"y"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"10"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token property"},'"r"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"10"),s(),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"backgroundColor"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"rgb(255, 99, 132)"'),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"]"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),F=n("p",null,":::",-1),P=n("div",{class:"language-markdown line-numbers-mode","data-ext":"md"},[n("pre",{class:"language-markdown"},[n("code",null,[s(`::: chart A Bubble Chart

`),n("span",{class:"token code"},[n("span",{class:"token punctuation"},"```"),n("span",{class:"token code-language"},"json"),s(`
`),n("span",{class:"token code-block language-json language-json"},[n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},'"type"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"bubble"'),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token property"},'"data"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},'"datasets"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token property"},'"label"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"First Dataset"'),n("span",{class:"token punctuation"},","),s(`
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
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),R=n("p",null,"::: chart A Line Chart",-1),H=n("div",{class:"language-json line-numbers-mode","data-ext":"json"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},'"type"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"line"'),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token property"},'"data"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},'"labels"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},'"January"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"February"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"March"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"April"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"May"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"June"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"July"'),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token property"},'"datasets"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token property"},'"label"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"My First Dataset"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"data"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"65"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"59"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"80"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"81"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"56"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"55"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"40"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"fill"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"borderColor"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"rgb(75, 192, 192)"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"tension"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"0.1"),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"]"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),J=n("p",null,":::",-1),V=n("div",{class:"language-markdown line-numbers-mode","data-ext":"md"},[n("pre",{class:"language-markdown"},[n("code",null,[s(`::: chart A Line Chart

`),n("span",{class:"token code"},[n("span",{class:"token punctuation"},"```"),n("span",{class:"token code-language"},"json"),s(`
`),n("span",{class:"token code-block language-json language-json"},[n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},'"type"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"line"'),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token property"},'"data"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},'"labels"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},'"January"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"February"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"March"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"April"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"May"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"June"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"July"'),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token property"},'"datasets"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token property"},'"label"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"My First Dataset"'),n("span",{class:"token punctuation"},","),s(`
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
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),T=n("p",null,"::: chart A Polar Area Chart",-1),G=n("div",{class:"language-json line-numbers-mode","data-ext":"json"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},'"type"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"polarArea"'),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token property"},'"data"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},'"labels"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},'"Red"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"Green"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"Yellow"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"Grey"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"Blue"'),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token property"},'"datasets"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token property"},'"label"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"My First Dataset"'),n("span",{class:"token punctuation"},","),s(`
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
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),L=n("p",null,":::",-1),N=n("div",{class:"language-markdown line-numbers-mode","data-ext":"md"},[n("pre",{class:"language-markdown"},[n("code",null,[s(`::: chart A Polar Area Chart

`),n("span",{class:"token code"},[n("span",{class:"token punctuation"},"```"),n("span",{class:"token code-language"},"json"),s(`
`),n("span",{class:"token code-block language-json language-json"},[n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},'"type"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"polarArea"'),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token property"},'"data"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},'"labels"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},'"Red"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"Green"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"Yellow"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"Grey"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"Blue"'),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token property"},'"datasets"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token property"},'"label"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"My First Dataset"'),n("span",{class:"token punctuation"},","),s(`
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
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Y=n("p",null,"::: chart A Radar Chart",-1),W=n("div",{class:"language-json line-numbers-mode","data-ext":"json"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},'"type"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"radar"'),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token property"},'"data"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},'"labels"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
      `),n("span",{class:"token string"},'"Eating"'),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token string"},'"Drinking"'),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token string"},'"Sleeping"'),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token string"},'"Designing"'),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token string"},'"Coding"'),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token string"},'"Cycling"'),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token string"},'"Running"'),s(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token property"},'"datasets"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token property"},'"label"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"My First Dataset"'),n("span",{class:"token punctuation"},","),s(`
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
        `),n("span",{class:"token property"},'"label"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"My Second Dataset"'),n("span",{class:"token punctuation"},","),s(`
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
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),I=n("p",null,":::",-1),O=n("div",{class:"language-markdown line-numbers-mode","data-ext":"md"},[n("pre",{class:"language-markdown"},[n("code",null,[s(`::: chart A Radar Chart

`),n("span",{class:"token code"},[n("span",{class:"token punctuation"},"```"),n("span",{class:"token code-language"},"json"),s(`
`),n("span",{class:"token code-block language-json language-json"},[n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},'"type"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"radar"'),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token property"},'"data"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},'"labels"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
      `),n("span",{class:"token string"},'"Eating"'),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token string"},'"Drinking"'),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token string"},'"Sleeping"'),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token string"},'"Designing"'),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token string"},'"Coding"'),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token string"},'"Cycling"'),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token string"},'"Running"'),s(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token property"},'"datasets"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token property"},'"label"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"My First Dataset"'),n("span",{class:"token punctuation"},","),s(`
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
        `),n("span",{class:"token property"},'"label"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"My Second Dataset"'),n("span",{class:"token punctuation"},","),s(`
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
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Z=n("p",null,"::: chart A Scatter Chart",-1),q=n("div",{class:"language-json line-numbers-mode","data-ext":"json"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},'"type"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"scatter"'),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token property"},'"data"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},'"datasets"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token property"},'"label"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Scatter Dataset"'),n("span",{class:"token punctuation"},","),s(`
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
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),z=n("p",null,":::",-1),K=n("div",{class:"language-markdown line-numbers-mode","data-ext":"md"},[n("pre",{class:"language-markdown"},[n("code",null,[s(`::: chart A Scatter Chart

`),n("span",{class:"token code"},[n("span",{class:"token punctuation"},"```"),n("span",{class:"token code-language"},"json"),s(`
`),n("span",{class:"token code-block language-json language-json"},[n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},'"type"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"scatter"'),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token property"},'"data"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},'"datasets"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token property"},'"label"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Scatter Dataset"'),n("span",{class:"token punctuation"},","),s(`
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
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Q=n("h2",{id:"docs",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#docs","aria-hidden":"true"},"#"),s(" Docs")],-1),U={href:"https://www.chartjs.org/docs/latest/",target:"_blank",rel:"noopener noreferrer"};function X($,nn){const r=p("ExternalLinkIcon"),i=p("CodeTabs"),l=p("MdDemo");return k(),d("div",null,[c(" #region before "),v,c(" more "),g,n("p",null,[s("Install "),n("a",y,[s("chart.js"),t(r)]),s(" in your project:")]),t(i,{id:"11",data:[{id:"pnpm"},{id:"yarn"},{id:"npm"}],"tab-id":"shell"},{title0:a(({value:e,isActive:o})=>[s("pnpm")]),title1:a(({value:e,isActive:o})=>[s("yarn")]),title2:a(({value:e,isActive:o})=>[s("npm")]),tab0:a(({value:e,isActive:o})=>[h]),tab1:a(({value:e,isActive:o})=>[_]),tab2:a(({value:e,isActive:o})=>[f]),_:1}),C,c(" #endregion before "),t(i,{id:"26",data:[{id:"TS"},{id:"JS"}],"tab-id":"language"},{title0:a(({value:e,isActive:o})=>[s("TS")]),title1:a(({value:e,isActive:o})=>[s("JS")]),tab0:a(({value:e,isActive:o})=>[j]),tab1:a(({value:e,isActive:o})=>[x]),_:1}),c(" region after "),w,t(l,{title:"Bar Chart",id:"md-demo-45"},{default:a(()=>[A,B,D]),code:a(()=>[S]),_:1}),t(l,{title:"Bubble Chart",id:"md-demo-55"},{default:a(()=>[M,E,F]),code:a(()=>[P]),_:1}),t(l,{title:"Line Chart",id:"md-demo-65"},{default:a(()=>[R,H,J]),code:a(()=>[V]),_:1}),t(l,{title:"Polar Area Chart",id:"md-demo-75"},{default:a(()=>[T,G,L]),code:a(()=>[N]),_:1}),t(l,{title:"Radar Chart",id:"md-demo-85"},{default:a(()=>[Y,W,I]),code:a(()=>[O]),_:1}),t(l,{title:"Scatter Chart",id:"md-demo-95"},{default:a(()=>[Z,q,z]),code:a(()=>[K]),_:1}),Q,n("p",null,[s("For details, please see "),n("a",U,[s("Chart.js Docs"),t(r)]),s(".")]),c(" endregion after ")])}const tn=u(m,[["render",X],["__file","chart.html.vue"]]);export{tn as default};
