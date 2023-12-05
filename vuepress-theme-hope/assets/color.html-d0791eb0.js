import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as c,o as p,c as o,a as l,b as n,d as s,e as i,w as d,f as a}from"./app-d630ecd8.js";const r={},u=n("p",null,"此页面指导你如何自定义主题颜色。",-1),v=a(`<h2 id="修改内置颜色" tabindex="-1"><a class="header-anchor" href="#修改内置颜色" aria-hidden="true">#</a> 修改内置颜色</h2><p>主题通过调色板控制颜色，你可能需要分为两种情况设置你的颜色：</p><ol><li>此颜色在日间模式和夜间模式保持不变，如主题色。</li><li>此颜色在日间模式、夜间模式下不同，如背景色、字体、边框颜色等。</li></ol><p>调色板文件是 VuePress 项目文件夹下的 <code>.vuepress/styles/palette.scss</code> 文件。</p><p>对于前者，你需要在 <code>palette.scss</code> 中写入变量值，如：</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token comment">// .vuepress/styles/palette.scss</span>
<span class="token property"><span class="token variable">$theme-color</span></span><span class="token punctuation">:</span> #3eaf7c<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>对于后者，你需要设置一个 Map，键名为 <code>light</code> 和 <code>dark</code>，值为颜色值，如：</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token comment">// .vuepress/styles/palette.scss</span>
<span class="token property"><span class="token variable">$bg-color</span></span><span class="token punctuation">:</span> <span class="token punctuation">(</span>
  <span class="token property">light</span><span class="token punctuation">:</span> #fff<span class="token punctuation">,</span>
  <span class="token property">dark</span><span class="token punctuation">:</span> #000<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),m=a(`<h2 id="修改其他颜色" tabindex="-1"><a class="header-anchor" href="#修改其他颜色" aria-hidden="true">#</a> 修改其他颜色</h2><p>有些时候，你可能希望修改一些不在 <code>palette.scss</code> 中的颜色，比如代码块的背景色，此时你可以通过开发者工具查看对应的颜色属性值是否是 CSS 变量，如果是你可以在 <code>index.scss</code> 中手动覆盖这一变量值:</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token comment">// .vuepress/styles/index.scss</span>

<span class="token comment">// 覆盖代码块背景色</span>
<span class="token selector">#app </span><span class="token punctuation">{</span>
  <span class="token property">--code-bg-color</span><span class="token punctuation">:</span> #000<span class="token punctuation">;</span>

  <span class="token selector">html[data-theme=&quot;dark&quot;] <span class="token parent important">&amp;</span> </span><span class="token punctuation">{</span>
    <span class="token property">--code-bg-color</span><span class="token punctuation">:</span> #222<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果不是，请你自己编写选择器覆盖它们:</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token comment">// .vuepress/styles/index.scss</span>

<span class="token comment">// 覆盖代码块语言字体颜色</span>
<span class="token selector">pre[class*=&quot;language-&quot;]::before </span><span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #fff <span class="token important">!important</span><span class="token punctuation">;</span>

  <span class="token selector">html[data-theme=&quot;dark&quot;] <span class="token parent important">&amp;</span> </span><span class="token punctuation">{</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> #222 <span class="token important">!important</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5);function k(b,h){const e=c("RouterLink");return p(),o("div",null,[u,l(" more "),v,n("p",null,[s("所有可用的颜色变量详见 "),i(e,{to:"/zh/config/style.html#%E9%A2%9C%E8%89%B2%E8%AE%BE%E7%BD%AE"},{default:d(()=>[s("主题配置 → 颜色设置")]),_:1}),s("。")]),m])}const _=t(r,[["render",k],["__file","color.html.vue"]]);export{_ as default};
