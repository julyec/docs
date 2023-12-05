import{_}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as f,c as w,a as p,b as n,d as a,e,w as s,n as y,k as q,f as c}from"./app-d630ecd8.js";const x={},A=n("p",null,"VuePress basically generate pages from Markdown files. So you can use it to generate documentation or blog sites easily.",-1),V=n("p",null,"You should create and write Markdown files, so that VuePress can convert them to different pages according to file structure.",-1),D=n("h2",{id:"markdown-introduction",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#markdown-introduction","aria-hidden":"true"},"#"),a(" Markdown Introduction")],-1),C=n("h2",{id:"markdown-config",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#markdown-config","aria-hidden":"true"},"#"),a(" Markdown Config")],-1),T=n("p",null,"VuePress introduce configuration for each Markdown page using Frontmatter.",-1),j={class:"hint-container info"},P=n("p",{class:"hint-container-title"},"Info",-1),B=n("h2",{id:"markdown-extension",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#markdown-extension","aria-hidden":"true"},"#"),a(" Markdown Extension")],-1),I={href:"https://github.com/markdown-it/markdown-it",target:"_blank",rel:"noopener noreferrer"},M={href:"https://github.com/markdown-it/markdown-it#syntax-extensions",target:"_blank",rel:"noopener noreferrer"},S=n("h3",{id:"vuepress-enhancement",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#vuepress-enhancement","aria-hidden":"true"},"#"),a(" VuePress Enhancement")],-1),K=n("p",null,"To enrich document content, VuePress extends standard Markdown syntax.",-1),E=n("h3",{id:"theme-enhancement",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#theme-enhancement","aria-hidden":"true"},"#"),a(" Theme Enhancement")],-1),J=n("code",null,"vuepress-plugin-md-enhance",-1),F=c(`<h4 id="custom-container" tabindex="-1"><a class="header-anchor" href="#custom-container" aria-hidden="true">#</a> Custom Container</h4><div><p>Safely use {{ variable }} in Markdown.</p></div><div class="hint-container info"><p class="hint-container-title">Custom Title</p><p>A custom information container with <code>code</code>, <a href="#custom-container">link</a>.</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div><div class="hint-container tip"><p class="hint-container-title">Custom Title</p><p>A custom tip container</p></div><div class="hint-container warning"><p class="hint-container-title">Custom Title</p><p>A custom warning container</p></div><div class="hint-container danger"><p class="hint-container-title">Custom Title</p><p>A custom danger container</p></div><details class="hint-container details"><summary>Custom Title</summary><p>A custom details container</p></details><details class="hint-container details"><summary>Code</summary><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>::: v-pre

Safely use {{ variable }} in Markdown.

:::

::: info Custom Title

A custom information container

:::

::: tip Custom Title

A custom tip container

:::

::: warning Custom Title

A custom warning container

:::

::: danger Custom Title

A custom danger container

:::

::: details Custom Title

A custom details container

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,8),G=n("h4",{id:"tabs",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#tabs","aria-hidden":"true"},"#"),a(" Tabs")],-1),L=n("p",null,"Apple",-1),z=n("p",null,"Banana",-1),Y=n("p",null,"Orange",-1),H=n("h4",{id:"code-tabs",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#code-tabs","aria-hidden":"true"},"#"),a(" Code Tabs")],-1),X=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"yarn"),a(),n("span",{class:"token function"},"add"),a(),n("span",{class:"token parameter variable"},"-D"),a(` vuepress-theme-hope
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),Z=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"npm"),a(" i "),n("span",{class:"token parameter variable"},"-D"),a(` vuepress-theme-hope
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),N=n("h4",{id:"superscript-and-subscript",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#superscript-and-subscript","aria-hidden":"true"},"#"),a(" Superscript and Subscript")],-1),U=n("p",null,[a("19"),n("sup",null,"th"),a(" H"),n("sub",null,"2"),a("O")],-1),W=n("h4",{id:"align",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#align","aria-hidden":"true"},"#"),a(" Align")],-1),Q=n("div",{style:{"text-align":"center"}},[n("p",null,"I am center")],-1),R=n("div",{style:{"text-align":"right"}},[n("p",null,"I am right align")],-1),O=n("h4",{id:"attrs",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#attrs","aria-hidden":"true"},"#"),a(" Attrs")],-1),$=n("p",null,[a("A "),n("strong",{id:"word"},"word"),a(" having id.")],-1),nn=n("h4",{id:"footnote",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#footnote","aria-hidden":"true"},"#"),a(" Footnote")],-1),an=n("p",null,"This text has footnote[^first].",-1),sn=n("p",null,"[^first]: This is footnote content",-1),en=n("h4",{id:"mark",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#mark","aria-hidden":"true"},"#"),a(" Mark")],-1),tn=n("p",null,[a("You can mark "),n("mark",null,"important words"),a(" .")],-1),on=n("h4",{id:"tasklist",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#tasklist","aria-hidden":"true"},"#"),a(" Tasklist")],-1),ln=n("li",null,[n("p",null,"[x] Plan A")],-1),cn=n("li",null,[n("p",null,"[ ] Plan B")],-1),rn=n("h4",{id:"image-enhancement",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#image-enhancement","aria-hidden":"true"},"#"),a(" Image Enhancement")],-1),pn=n("p",null,"Support setting color scheme and size",-1),un=n("h4",{id:"card",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#card","aria-hidden":"true"},"#"),a(" Card")],-1),dn=c(`<h4 id="chart" tabindex="-1"><a class="header-anchor" href="#chart" aria-hidden="true">#</a> Chart</h4><p>::: chart A Scatter Chart</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;scatter&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;datasets&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;label&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Scatter Dataset&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span> <span class="token property">&quot;x&quot;</span><span class="token operator">:</span> <span class="token number">-10</span><span class="token punctuation">,</span> <span class="token property">&quot;y&quot;</span><span class="token operator">:</span> <span class="token number">0</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token property">&quot;x&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token property">&quot;y&quot;</span><span class="token operator">:</span> <span class="token number">10</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token property">&quot;x&quot;</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token property">&quot;y&quot;</span><span class="token operator">:</span> <span class="token number">5</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token property">&quot;x&quot;</span><span class="token operator">:</span> <span class="token number">0.5</span><span class="token punctuation">,</span> <span class="token property">&quot;y&quot;</span><span class="token operator">:</span> <span class="token number">5.5</span> <span class="token punctuation">}</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">&quot;backgroundColor&quot;</span><span class="token operator">:</span> <span class="token string">&quot;rgb(255, 99, 132)&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;options&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;scales&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;x&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;linear&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;position&quot;</span><span class="token operator">:</span> <span class="token string">&quot;bottom&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p>`,4),mn=c(`<h4 id="echarts" tabindex="-1"><a class="header-anchor" href="#echarts" aria-hidden="true">#</a> Echarts</h4><p>::: echarts A line chart</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;xAxis&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;category&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;Mon&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Tue&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Wed&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Thu&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Fri&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Sat&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Sun&quot;</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;yAxis&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;value&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;series&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">150</span><span class="token punctuation">,</span> <span class="token number">230</span><span class="token punctuation">,</span> <span class="token number">224</span><span class="token punctuation">,</span> <span class="token number">218</span><span class="token punctuation">,</span> <span class="token number">135</span><span class="token punctuation">,</span> <span class="token number">147</span><span class="token punctuation">,</span> <span class="token number">260</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;line&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p>`,4),hn=c(`<h4 id="flowchart" tabindex="-1"><a class="header-anchor" href="#flowchart" aria-hidden="true">#</a> Flowchart</h4><div class="language-flow line-numbers-mode" data-ext="flow"><pre class="language-flow"><code>cond<span class="token operator">=&gt;</span>condition<span class="token operator">:</span> Process<span class="token operator">?</span>
process<span class="token operator">=&gt;</span>operation<span class="token operator">:</span> Process
e<span class="token operator">=&gt;</span>end<span class="token operator">:</span> End

<span class="token function">cond</span><span class="token punctuation">(</span>yes<span class="token punctuation">)</span><span class="token operator">-</span><span class="token operator">&gt;</span>process<span class="token operator">-</span><span class="token operator">&gt;</span>e
<span class="token function">cond</span><span class="token punctuation">(</span>no<span class="token punctuation">)</span><span class="token operator">-</span><span class="token operator">&gt;</span>e
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),kn=n("h4",{id:"mermaid",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#mermaid","aria-hidden":"true"},"#"),a(" Mermaid")],-1),vn=n("h4",{id:"tex",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#tex","aria-hidden":"true"},"#"),a(" Tex")],-1),bn=n("p",null,"$$ \\frac {\\partial^r} {\\partial \\omega^r} \\left(\\frac {y^{\\omega}} {\\omega}\\right) = \\left(\\frac {y^{\\omega}} {\\omega}\\right) \\left{(\\log y)^r + \\sum_{i=1}^r \\frac {(-1)^i r \\cdots (r-i+1) (\\log y)^{r-i}} {\\omega^i} \\right} $$",-1),gn=n("h4",{id:"include-files",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#include-files","aria-hidden":"true"},"#"),a(" Include files")],-1),_n=n("h4",{id:"code-demo",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#code-demo","aria-hidden":"true"},"#"),a(" Code Demo")],-1),fn=n("div",{class:"language-html line-numbers-mode","data-ext":"html"},[n("pre",{class:"language-html"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("h1")]),n("span",{class:"token punctuation"},">")]),a("VuePress Theme Hope"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("h1")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("p")]),n("span",{class:"token punctuation"},">")]),a("Is "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("span")]),a(),n("span",{class:"token attr-name"},"id"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("very"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("very"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("span")]),n("span",{class:"token punctuation"},">")]),a(" powerful!"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("p")]),n("span",{class:"token punctuation"},">")]),a(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),wn=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[a("document"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"querySelector"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"#very"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"addEventListener"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"click"'),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"alert"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Very powerful!"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),yn=n("div",{class:"language-css line-numbers-mode","data-ext":"css"},[n("pre",{class:"language-css"},[n("code",null,[n("span",{class:"token selector"},"span"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),a(" red"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),qn=n("h4",{id:"stylize",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#stylize","aria-hidden":"true"},"#"),a(" Stylize")],-1),xn=n("p",null,[a("Donate Mr.Hope a cup of coffee. "),n("em",null,"Recommended")],-1),An=n("h4",{id:"playground",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#playground","aria-hidden":"true"},"#"),a(" Playground")],-1),Vn=n("h4",{id:"vue-playground",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#vue-playground","aria-hidden":"true"},"#"),a(" Vue Playground")],-1),Dn=n("h4",{id:"presentation",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#presentation","aria-hidden":"true"},"#"),a(" Presentation")],-1),Cn=n("p",null,"@slidestart",-1),Tn=n("h2",{id:"slide-1",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#slide-1","aria-hidden":"true"},"#"),a(" Slide 1")],-1),jn={href:"https://mister-hope.com",target:"_blank",rel:"noopener noreferrer"},Pn=c(`<hr><h2 id="slide-2" tabindex="-1"><a class="header-anchor" href="#slide-2" aria-hidden="true">#</a> Slide 2</h2><ul><li>Item 1</li><li>Item 2</li></ul><hr><h2 id="slide-3-1" tabindex="-1"><a class="header-anchor" href="#slide-3-1" aria-hidden="true">#</a> Slide 3.1</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>--</p><h2 id="slide-3-2" tabindex="-1"><a class="header-anchor" href="#slide-3-2" aria-hidden="true">#</a> Slide 3.2</h2><p>$$ J(\\theta_0,\\theta_1) = \\sum_{i=0} $$</p><p>@slideend</p>`,10);function Bn(In,Mn){const t=o("RouterLink"),r=o("ExternalLinkIcon"),u=o("ProjectLink"),d=o("Tabs"),m=o("CodeTabs"),h=o("VPCard"),k=o("Mermaid"),v=o("CodeDemo"),b=o("Playground"),g=o("VuePlayground");return f(),w("div",null,[A,V,p(" more "),D,n("p",null,[a("If you are a newcomer and don't know how to write Markdown, please read "),e(t,{to:"/cookbook/markdown/"},{default:s(()=>[a("Markdown Intro")]),_:1}),a(" and "),e(t,{to:"/cookbook/markdown/demo.html"},{default:s(()=>[a("Markdown Demo")]),_:1}),a(".")]),C,T,n("div",j,[P,n("p",null,[a("Frontmatter is an important concept in VuePress. If you don't know it, you need to read "),e(t,{to:"/cookbook/vuepress/page.html#frontmatter"},{default:s(()=>[a("Frontmatter Introduction")]),_:1}),a(".")])]),B,n("p",null,[a("The Markdown content in VuePress will be parsed by "),n("a",I,[a("markdown-it"),e(r)]),a(", which supports "),n("a",M,[a("syntax extensions"),e(r)]),a(" via markdown-it plugins.")]),S,K,n("p",null,[a("For these extended syntax, please see "),e(t,{to:"/cookbook/vuepress/markdown.html"},{default:s(()=>[a("Built-in Markdown Features")]),_:1}),a(".")]),E,n("p",null,[a("By using "),e(u,{name:"md-enhance"},{default:s(()=>[J]),_:1}),a(", the theme extends more Markdown syntax and provides richer writing functions.")]),F,n("ul",null,[n("li",null,[e(t,{to:"/guide/markdown/container.html"},{default:s(()=>[a("View Detail")]),_:1})])]),G,e(d,{id:"92",data:[{id:"apple"},{id:"banana"},{id:"orange"}],"tab-id":"fruit"},{title0:s(({value:i,isActive:l})=>[a("apple")]),title1:s(({value:i,isActive:l})=>[a("banana")]),title2:s(({value:i,isActive:l})=>[a("orange")]),tab0:s(({value:i,isActive:l})=>[L]),tab1:s(({value:i,isActive:l})=>[z]),tab2:s(({value:i,isActive:l})=>[Y]),_:1}),n("ul",null,[n("li",null,[e(t,{to:"/guide/markdown/tabs.html"},{default:s(()=>[a("View Detail")]),_:1})])]),H,e(m,{id:"119",data:[{id:"yarn"},{id:"npm"}],active:1},{title0:s(({value:i,isActive:l})=>[a("yarn")]),title1:s(({value:i,isActive:l})=>[a("npm")]),tab0:s(({value:i,isActive:l})=>[X]),tab1:s(({value:i,isActive:l})=>[Z]),_:1}),n("ul",null,[n("li",null,[e(t,{to:"/guide/markdown/code-tabs.html"},{default:s(()=>[a("View Detail")]),_:1})])]),N,U,n("ul",null,[n("li",null,[e(t,{to:"/guide/markdown/sup-sub.html"},{default:s(()=>[a("View Detail")]),_:1})])]),W,Q,R,n("ul",null,[n("li",null,[e(t,{to:"/guide/markdown/align.html"},{default:s(()=>[a("View Detail")]),_:1})])]),O,$,n("ul",null,[n("li",null,[e(t,{to:"/guide/markdown/attrs.html"},{default:s(()=>[a("View Detail")]),_:1})])]),nn,an,sn,n("ul",null,[n("li",null,[e(t,{to:"/guide/markdown/footnote.html"},{default:s(()=>[a("View Detail")]),_:1})])]),en,tn,n("ul",null,[n("li",null,[e(t,{to:"/guide/markdown/mark.html"},{default:s(()=>[a("View Detail")]),_:1})])]),on,n("ul",null,[ln,cn,n("li",null,[n("p",null,[e(t,{to:"/guide/markdown/tasklist.html"},{default:s(()=>[a("View Detail")]),_:1})])])]),rn,pn,n("ul",null,[n("li",null,[e(t,{to:"/guide/markdown/image.html"},{default:s(()=>[a("View Detail")]),_:1})])]),un,e(h,y(q({title:"Mr.Hope",desc:"Where there is light, there is hope",logo:"https://mister-hope.com/logo.svg",link:"https://mister-hope.com",color:"rgba(253, 230, 138, 0.15)"})),null,16),n("ul",null,[n("li",null,[e(t,{to:"/guide/markdown/card.html"},{default:s(()=>[a("View Detail")]),_:1})])]),dn,n("ul",null,[n("li",null,[e(t,{to:"/guide/markdown/chart.html"},{default:s(()=>[a("View Detail")]),_:1})])]),mn,n("ul",null,[n("li",null,[e(t,{to:"/guide/markdown/echarts.html"},{default:s(()=>[a("View Detail")]),_:1})])]),hn,n("ul",null,[n("li",null,[e(t,{to:"/guide/markdown/flowchart.html"},{default:s(()=>[a("View Detail")]),_:1})])]),kn,e(k,{id:"mermaid-301",code:"eJzT1dXlKsksyUm1UnDLyS9PzkgsKuECCabBeAohTlwKQJBsqKtrl2gEZheXJqUXJRZkKOTnpYIFEpEkU/NSUBWVlOeDBZJAipJwKcooSoWYBbYoGVUZ0B4FoCjcKLBqVJHyfDAfqBEAuj83LQ=="}),n("ul",null,[n("li",null,[e(t,{to:"/guide/markdown/mermaid.html"},{default:s(()=>[a("View Detail")]),_:1})])]),vn,bn,n("ul",null,[n("li",null,[e(t,{to:"/guide/markdown/tex.html"},{default:s(()=>[a("View Detail")]),_:1})])]),gn,p(" @include: ../markdown/demo.snippet.md{9-13} "),n("ul",null,[n("li",null,[e(t,{to:"/guide/markdown/include.html"},{default:s(()=>[a("View Detail")]),_:1})])]),_n,e(v,{id:"code-demo-336",type:"normal",title:"A%20normal%20demo",code:"eJxFjjELAjEMhf9KjIuCeLhq7SYoOAiKU5ejjdxpr61tTxHxv5ueg0sCed97L29scmdxiaJZyHNPh0gpwamhjmDrA4mK78qJIHcJRAq1g9asFT4ovhTKskRVzhKCf1K89HYkqsAWnOE1cbDxuu/I5fm9Z/hIlnT2caJw/MuYzmtjNg8m9m3K5Kho2rb6pnAGkymsJbyVA6gtxczamW3/Mg5YKfcpgxt1KpXDm4NHe+vjEiKZAjHy+QJaqVDL"},{default:s(()=>[fn,wn,yn]),_:1}),n("ul",null,[n("li",null,[e(t,{to:"/guide/markdown/demo.html"},{default:s(()=>[a("View Detail")]),_:1})])]),qn,xn,n("ul",null,[n("li",null,[e(t,{to:"/guide/markdown/stylize.html"},{default:s(()=>[a("View Detail")]),_:1})])]),An,e(b,{key:"2ccbac77",title:"TS%20demo",link:"https%3A%2F%2Fwww.typescriptlang.org%2Fplay%23code%2FMYewdgzgLgBAthA5jAvDARACwKYBtcgwDuIATrgCboDcAULaJLBAA7YCGA1qjABQKIAXDGikAlmEQBKVAD4YjCCFzYAdAUT8kUurVYdOW6XSA"}),n("ul",null,[n("li",null,[e(t,{to:"/guide/markdown/playground.html"},{default:s(()=>[a("View Detail")]),_:1})])]),Vn,e(g,{title:"Vue%20Playground",key:"d239c984",settings:"%7B%7D",files:"eyJBcHAudnVlIjoiPHNjcmlwdCBzZXR1cD5cbmltcG9ydCB7IHJlZiB9IGZyb20gXCJ2dWVcIjtcblxuY29uc3QgbXNnID0gcmVmKFwiSGVsbG8gV29ybGQhXCIpO1xuPC9zY3JpcHQ%2BXG5cbjx0ZW1wbGF0ZT5cbiAgPGgxPnt7IG1zZyB9fTwvaDE%2BXG4gIDxpbnB1dCB2LW1vZGVsPVwibXNnXCIgLz5cbjwvdGVtcGxhdGU%2BXG4ifQ%3D%3D"}),n("ul",null,[n("li",null,[e(t,{to:"/guide/markdown/vue-playground.html"},{default:s(()=>[a("View Detail")]),_:1})])]),Dn,Cn,Tn,n("p",null,[a("A paragraph with some text and a "),n("a",jn,[a("link"),e(r)])]),Pn,n("ul",null,[n("li",null,[e(t,{to:"/guide/markdown/revealjs.html"},{default:s(()=>[a("View Detail")]),_:1})])])])}const En=_(x,[["render",Bn],["__file","markdown.html.vue"]]);export{En as default};
