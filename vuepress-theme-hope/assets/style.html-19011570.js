import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{o as e,c as t,a as p,b as n,d as s,f as o}from"./app-083c2955.js";const l={},c=n("p",null,[s("你可以在 "),n("code",null,".vuepress/styles"),s(" 中通过在 "),n("code",null,"config.scss"),s(" 和 "),n("code",null,"palette.scss"),s(" 文件中写入变量值来更改主题的样式。")],-1),i=n("p",null,[s("你也可以在 "),n("code",null,".vuepress/styles/index.scss"),s(" 中添加你自己的样式。")],-1),u=o(`<h2 id="config-scss" tabindex="-1"><a class="header-anchor" href="#config-scss" aria-hidden="true">#</a> config.scss</h2><p><code>config.scss</code> 用于纯变量配置，以下是支持的变量与默认值。</p><p>响应式布局断点:</p><ul><li><code>$pc</code></li><li><code>$laptop</code></li><li><code>$pad</code></li><li><code>$tablet</code></li><li><code>$mobile</code></li></ul><p>主题色:</p><ul><li><code>$theme-colors</code>: 除了主要主题色之外，你想使用的其他主题颜色</li></ul><p>代码块 (仅限 shiki):</p><ul><li><code>$code-bg-color</code>: 代码块的背景颜色</li><li><code>$code-color</code>: 代码块的字体颜色</li></ul><p>颜色列表: <code>$colors</code></p><details class="hint-container details"><summary>例子</summary><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token comment">// 修改电脑响应式布局断点</span>
<span class="token property"><span class="token variable">$pc</span></span><span class="token punctuation">:</span> 1920px<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></details><details class="hint-container details"><summary>默认值</summary><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token comment">/* rtl */</span>
<span class="token variable">$rtl</span><span class="token operator">-</span>selector<span class="token punctuation">:</span> <span class="token string single-quoted-string">&#39;html[dir=&quot;rtl&quot;]&#39;</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/** dark mode selector */</span>
<span class="token variable">$light</span><span class="token operator">-</span>selector<span class="token punctuation">:</span> <span class="token string single-quoted-string">&#39;html[data-theme=&quot;light&quot;]&#39;</span><span class="token punctuation">;</span>
<span class="token variable">$dark</span><span class="token operator">-</span>selector<span class="token punctuation">:</span> <span class="token string single-quoted-string">&#39;html[data-theme=&quot;dark&quot;]&#39;</span><span class="token punctuation">;</span>

<span class="token comment">/* Content Class */</span>
<span class="token variable">$content</span><span class="token operator">-</span><span class="token keyword">class</span><span class="token punctuation">:</span> <span class="token string double-quoted-string">&quot;.theme-hope-content&quot;</span><span class="token punctuation">;</span>

<span class="token comment">/* responsive breakpoints */</span>

<span class="token comment">// wide screen</span>
<span class="token variable">$pc</span><span class="token punctuation">:</span> <span class="token number">1440</span>px <span class="token operator">!</span><span class="token keyword">default</span><span class="token punctuation">;</span>

<span class="token comment">// desktop</span>
<span class="token variable">$laptop</span><span class="token punctuation">:</span> <span class="token number">1280</span>px <span class="token operator">!</span><span class="token keyword">default</span><span class="token punctuation">;</span>

<span class="token comment">// narrow desktop / iPad</span>
<span class="token variable">$pad</span><span class="token punctuation">:</span> <span class="token number">959</span>px <span class="token operator">!</span><span class="token keyword">default</span><span class="token punctuation">;</span>

<span class="token comment">// wide mobile</span>
<span class="token variable">$tablet</span><span class="token punctuation">:</span> <span class="token number">719</span>px <span class="token operator">!</span><span class="token keyword">default</span><span class="token punctuation">;</span>

<span class="token comment">// narrow mobile</span>
<span class="token variable">$mobile</span><span class="token punctuation">:</span> <span class="token number">419</span>px <span class="token operator">!</span><span class="token keyword">default</span><span class="token punctuation">;</span>

<span class="token comment">/* Color list */</span>
<span class="token variable">$colors</span><span class="token punctuation">:</span> <span class="token comment">#cf1322, #fa541c, #f39c12, #2ecc71, #25a55b, #10a5a5, #096dd9, #aa6fe9,</span>
  <span class="token comment">#eb2f96 !default;</span>

<span class="token comment">/* Code Block */</span>
<span class="token comment">// only available with shiki highlighter</span>
<span class="token variable">$code</span><span class="token operator">-</span>color<span class="token punctuation">:</span> <span class="token punctuation">(</span>
  <span class="token argument-name">light</span><span class="token punctuation">:</span> <span class="token comment">#383a42,</span>
  dark<span class="token punctuation">:</span> <span class="token comment">#abb2bf,</span>
<span class="token punctuation">)</span> <span class="token operator">!</span><span class="token keyword">default</span><span class="token punctuation">;</span>
<span class="token variable">$code</span><span class="token operator">-</span>bg<span class="token operator">-</span>color<span class="token punctuation">:</span> <span class="token punctuation">(</span>
  <span class="token argument-name">light</span><span class="token punctuation">:</span> <span class="token comment">#ecf4fa,</span>
  dark<span class="token punctuation">:</span> <span class="token comment">#282c34,</span>
<span class="token punctuation">)</span> <span class="token operator">!</span><span class="token keyword">default</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="palette-scss" tabindex="-1"><a class="header-anchor" href="#palette-scss" aria-hidden="true">#</a> palette.scss</h2><p><code>palette.scss</code> 用于 CSS 变量写入，以下是支持的配置与默认值。</p><div class="hint-container info"><p class="hint-container-title">相关信息</p><p>此处的所有变量 (包括你新添加的变量) 都会被转换为 kebab-case 的格式注入为 CSS 变量。</p><p>如 <code>$theme-color</code> 会被注入为 <code>--theme-color</code>，<code>$backgroundColor</code> 会被注入为 <code>--background-color</code>。</p></div><h3 id="颜色设置" tabindex="-1"><a class="header-anchor" href="#颜色设置" aria-hidden="true">#</a> 颜色设置</h3><p>对于所有颜色，如果其在浅色模式和深色模式颜色相同，可直接设置；否则，请设置一个 Map 类型的 Sass 变量分别给出浅色和深色模式下的颜色。此变量键名为 <code>light</code> 和 <code>dark</code>，值为颜色值。</p><p>可用的颜色变量:</p><ul><li><code>$theme-color</code>: 主题色</li><li><code>$text-color</code>: 字体颜色</li><li><code>$bg-color</code>: 背景色</li><li><code>$bg-color-secondary</code>: 另一个浅背景色</li><li><code>$bg-color-tertiary</code>: 另一个更浅的背景色</li><li><code>$border-color</code>: 边框颜色</li><li><code>$box-shadow</code>: 元素阴影色</li><li><code>$card-shadow</code>: 卡片阴影色</li></ul><details class="hint-container details"><summary>例子</summary><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token comment">// 将主题颜色设置为红色</span>
<span class="token property"><span class="token variable">$theme-color</span></span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>

<span class="token comment">// 将边框颜色加深</span>
<span class="token property"><span class="token variable">$border-color</span></span><span class="token punctuation">:</span> <span class="token punctuation">(</span>
  <span class="token property">light</span><span class="token punctuation">:</span> #ddd<span class="token punctuation">,</span>
  <span class="token property">dark</span><span class="token punctuation">:</span> #444<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><details class="hint-container details"><summary>默认值</summary><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>@<span class="token keyword">use</span> <span class="token string double-quoted-string">&quot;sass:list&quot;</span><span class="token punctuation">;</span>
@<span class="token keyword">use</span> <span class="token string double-quoted-string">&quot;sass:map&quot;</span><span class="token punctuation">;</span>

<span class="token variable">$theme</span><span class="token operator">-</span>color<span class="token punctuation">:</span> <span class="token comment">#3eaf7c !default;</span>
<span class="token variable">$text</span><span class="token operator">-</span>color<span class="token punctuation">:</span> <span class="token punctuation">(</span>
  <span class="token argument-name">light</span><span class="token punctuation">:</span> <span class="token comment">#2c3e50,</span>
  dark<span class="token punctuation">:</span> <span class="token comment">#9e9e9e,</span>
<span class="token punctuation">)</span> <span class="token operator">!</span><span class="token keyword">default</span><span class="token punctuation">;</span>
<span class="token variable">$bg</span><span class="token operator">-</span>color<span class="token punctuation">:</span> <span class="token punctuation">(</span>
  <span class="token argument-name">light</span><span class="token punctuation">:</span> <span class="token comment">#fff,</span>
  dark<span class="token punctuation">:</span> <span class="token comment">#0d1117,</span>
<span class="token punctuation">)</span> <span class="token operator">!</span><span class="token keyword">default</span><span class="token punctuation">;</span>
<span class="token variable">$bg</span><span class="token operator">-</span>color<span class="token operator">-</span>secondary<span class="token punctuation">:</span> <span class="token punctuation">(</span>
  <span class="token argument-name">light</span><span class="token punctuation">:</span> <span class="token comment">#f8f8f8,</span>
  dark<span class="token punctuation">:</span> <span class="token comment">#161b22,</span>
<span class="token punctuation">)</span> <span class="token operator">!</span><span class="token keyword">default</span><span class="token punctuation">;</span>
<span class="token variable">$bg</span><span class="token operator">-</span>color<span class="token operator">-</span>tertiary<span class="token punctuation">:</span> <span class="token punctuation">(</span>
  <span class="token argument-name">light</span><span class="token punctuation">:</span> <span class="token comment">#efeef4,</span>
  dark<span class="token punctuation">:</span> <span class="token comment">#21262c,</span>
<span class="token punctuation">)</span> <span class="token operator">!</span><span class="token keyword">default</span><span class="token punctuation">;</span>
<span class="token variable">$border</span><span class="token operator">-</span>color<span class="token punctuation">:</span> <span class="token punctuation">(</span>
  <span class="token argument-name">light</span><span class="token punctuation">:</span> <span class="token comment">#eaecef,</span>
  dark<span class="token punctuation">:</span> <span class="token comment">#30363d,</span>
<span class="token punctuation">)</span> <span class="token operator">!</span><span class="token keyword">default</span><span class="token punctuation">;</span>

<span class="token comment">// shadow</span>
<span class="token variable">$box</span><span class="token operator">-</span>shadow<span class="token punctuation">:</span> <span class="token punctuation">(</span>
  <span class="token argument-name">light</span><span class="token punctuation">:</span> <span class="token comment">#f0f1f2,</span>
  dark<span class="token punctuation">:</span> <span class="token comment">#282a32,</span>
<span class="token punctuation">)</span> <span class="token operator">!</span><span class="token keyword">default</span><span class="token punctuation">;</span>
<span class="token variable">$card</span><span class="token operator">-</span>shadow<span class="token punctuation">:</span> <span class="token punctuation">(</span>
  <span class="token argument-name">light</span><span class="token punctuation">:</span> <span class="token function">rgb</span><span class="token punctuation">(</span><span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token operator">/</span> <span class="token number">15</span><span class="token operator">%</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token argument-name">dark</span><span class="token punctuation">:</span> <span class="token function">rgb</span><span class="token punctuation">(</span><span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token operator">/</span> <span class="token number">30</span><span class="token operator">%</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span> <span class="token operator">!</span><span class="token keyword">default</span><span class="token punctuation">;</span>

<span class="token comment">// constants</span>
<span class="token variable">$black</span><span class="token punctuation">:</span> <span class="token punctuation">(</span>
  <span class="token argument-name">light</span><span class="token punctuation">:</span> <span class="token comment">#000,</span>
  dark<span class="token punctuation">:</span> <span class="token comment">#fff,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">$dark</span><span class="token operator">-</span>grey<span class="token punctuation">:</span> <span class="token punctuation">(</span>
  <span class="token argument-name">light</span><span class="token punctuation">:</span> <span class="token comment">#666,</span>
  dark<span class="token punctuation">:</span> <span class="token comment">#999,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">$light</span><span class="token operator">-</span>grey<span class="token punctuation">:</span> <span class="token punctuation">(</span>
  <span class="token argument-name">light</span><span class="token punctuation">:</span> <span class="token comment">#999,</span>
  dark<span class="token punctuation">:</span> <span class="token comment">#666,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">$white</span><span class="token punctuation">:</span> <span class="token punctuation">(</span>
  <span class="token argument-name">light</span><span class="token punctuation">:</span> <span class="token comment">#fff,</span>
  dark<span class="token punctuation">:</span> <span class="token comment">#000,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">$grey3</span><span class="token punctuation">:</span> <span class="token punctuation">(</span>
  <span class="token argument-name">light</span><span class="token punctuation">:</span> <span class="token comment">#333,</span>
  dark<span class="token punctuation">:</span> <span class="token comment">#bbb,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">$grey12</span><span class="token punctuation">:</span> <span class="token punctuation">(</span>
  <span class="token argument-name">light</span><span class="token punctuation">:</span> <span class="token comment">#bbb,</span>
  dark<span class="token punctuation">:</span> <span class="token comment">#333,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">$grey14</span><span class="token punctuation">:</span> <span class="token punctuation">(</span>
  <span class="token argument-name">light</span><span class="token punctuation">:</span> <span class="token comment">#eee,</span>
  dark<span class="token punctuation">:</span> <span class="token comment">#111,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="布局设置" tabindex="-1"><a class="header-anchor" href="#布局设置" aria-hidden="true">#</a> 布局设置</h3><p>可用的布局变量:</p><p>导航栏:</p><ul><li><code>$navbar-height</code>: 导航栏高度</li><li><code>$navbar-horizontal-padding</code>: 导航栏水平填充</li><li><code>$navbar-vertical-padding</code>: 导航栏垂直填充</li><li><code>$navbar-mobile-height</code>: 移动设备上的导航栏高度</li><li><code>$navbar-mobile-horizontal-padding</code>: 移动设备上的导航栏水平填充</li><li><code>$navbar-mobile-vertical-padding</code>: 移动设备上的导航栏垂直填充</li></ul><p>侧边栏:</p><ul><li><code>$sidebar-width</code>: 侧边栏宽度</li><li><code>$sidebar-mobile-width</code>: 移动设备侧边栏宽度</li></ul><p>内容:</p><ul><li><code>$content-width</code>: 主要内容的宽度</li><li><code>$home-page-width</code>: 主页内容的宽度</li></ul><p>字体:</p><ul><li><code>$font-family</code>: 普通文本上使用的字体</li><li><code>$font-family-heading:</code> 用于标题元素的字体</li></ul><p>代码:</p><ul><li><code>$font-family-mono</code>: 代码上使用的字体</li><li><code>$line-numbers-width</code>: 代码块中行号的宽度</li></ul><p>过渡:</p><ul><li><code>$color-transition</code>: 用于颜色的过渡</li><li><code>$transform-transition</code>: 用于变换动画的过渡</li></ul><details class="hint-container details"><summary>例子</summary><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token comment">// 加大移动设备上的导航栏高度</span>
<span class="token property"><span class="token variable">$navbar-mobile-height</span></span><span class="token punctuation">:</span> 3.5rem<span class="token punctuation">;</span>

<span class="token comment">// 将 Windows 网页字体设置为思源宋体 (当然你也要记得导入这个字体)</span>
<span class="token property"><span class="token variable">$font-family</span></span><span class="token punctuation">:</span> <span class="token string">&#39;Georgia, -apple-system, &quot;Nimbus Roman No9 L&quot;, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Noto Serif SC&quot;, &quot;Microsoft Yahei&quot;, &quot;WenQuanYi Micro Hei&quot;, &quot;ST Heiti&quot;, sans-serif&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><details class="hint-container details"><summary>默认值</summary><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token comment">/* layout */</span>
<span class="token comment">// navbar</span>
<span class="token variable">$navbar</span><span class="token operator">-</span>height<span class="token punctuation">:</span> <span class="token number">3.75</span>rem <span class="token operator">!</span><span class="token keyword">default</span><span class="token punctuation">;</span>
<span class="token variable">$navbar</span><span class="token operator">-</span>horizontal<span class="token operator">-</span>padding<span class="token punctuation">:</span> <span class="token number">1.5</span>rem <span class="token operator">!</span><span class="token keyword">default</span><span class="token punctuation">;</span>
<span class="token variable">$navbar</span><span class="token operator">-</span>vertical<span class="token operator">-</span>padding<span class="token punctuation">:</span> <span class="token number">0.7</span>rem <span class="token operator">!</span><span class="token keyword">default</span><span class="token punctuation">;</span>
<span class="token variable">$navbar</span><span class="token operator">-</span>mobile<span class="token operator">-</span>height<span class="token punctuation">:</span> <span class="token number">3.25</span>rem <span class="token operator">!</span><span class="token keyword">default</span><span class="token punctuation">;</span>
<span class="token variable">$navbar</span><span class="token operator">-</span>mobile<span class="token operator">-</span>horizontal<span class="token operator">-</span>padding<span class="token punctuation">:</span> <span class="token number">1</span>rem <span class="token operator">!</span><span class="token keyword">default</span><span class="token punctuation">;</span>
<span class="token variable">$navbar</span><span class="token operator">-</span>mobile<span class="token operator">-</span>vertical<span class="token operator">-</span>padding<span class="token punctuation">:</span> <span class="token number">0.5</span>rem <span class="token operator">!</span><span class="token keyword">default</span><span class="token punctuation">;</span>

<span class="token comment">// sidebar</span>
<span class="token variable">$sidebar</span><span class="token operator">-</span>width<span class="token punctuation">:</span> <span class="token number">18</span>rem <span class="token operator">!</span><span class="token keyword">default</span><span class="token punctuation">;</span>
<span class="token variable">$sidebar</span><span class="token operator">-</span>mobile<span class="token operator">-</span>width<span class="token punctuation">:</span> <span class="token number">16</span>rem <span class="token operator">!</span><span class="token keyword">default</span><span class="token punctuation">;</span>

<span class="token comment">// content</span>
<span class="token variable">$content</span><span class="token operator">-</span>width<span class="token punctuation">:</span> <span class="token number">780</span>px <span class="token operator">!</span><span class="token keyword">default</span><span class="token punctuation">;</span>
<span class="token variable">$home</span><span class="token operator">-</span>page<span class="token operator">-</span>width<span class="token punctuation">:</span> <span class="token number">1160</span>px <span class="token operator">!</span><span class="token keyword">default</span><span class="token punctuation">;</span>

<span class="token comment">// font</span>
<span class="token variable">$font</span><span class="token operator">-</span>family<span class="token punctuation">:</span> <span class="token string single-quoted-string">&#39;-apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, Oxygen, Ubuntu, Cantarell, &quot;Fira Sans&quot;, &quot;Droid Sans&quot;, &quot;Helvetica Neue&quot;, STHeiti, &quot;Microsoft YaHei&quot;, SimSun, sans-serif&#39;</span> <span class="token operator">!</span><span class="token keyword">default</span><span class="token punctuation">;</span>
<span class="token variable">$font</span><span class="token operator">-</span>family<span class="token operator">-</span>heading<span class="token punctuation">:</span> <span class="token string single-quoted-string">&#39;Georgia Pro, Crimson, Georgia, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, Oxygen, Ubuntu, Cantarell, &quot;Fira Sans&quot;, &quot;Droid Sans&quot;, &quot;Helvetica Neue&quot;, STHeiti, &quot;Microsoft YaHei&quot;, SimSun, sans-serif&#39;</span> <span class="token operator">!</span><span class="token keyword">default</span><span class="token punctuation">;</span>

<span class="token comment">// code</span>
<span class="token variable">$font</span><span class="token operator">-</span>family<span class="token operator">-</span>mono<span class="token punctuation">:</span> <span class="token string single-quoted-string">&#39;Consolas, Monaco, &quot;Andale Mono&quot;, &quot;Ubuntu Mono&quot;, monospace&#39;</span> <span class="token operator">!</span><span class="token keyword">default</span><span class="token punctuation">;</span>
<span class="token variable">$line</span><span class="token operator">-</span>numbers<span class="token operator">-</span>width<span class="token punctuation">:</span> <span class="token number">2.5</span>rem <span class="token operator">!</span><span class="token keyword">default</span><span class="token punctuation">;</span>

<span class="token comment">// transition</span>
<span class="token variable">$color</span><span class="token operator">-</span>transition<span class="token punctuation">:</span> <span class="token string double-quoted-string">&quot;0.3s ease&quot;</span> <span class="token operator">!</span><span class="token keyword">default</span><span class="token punctuation">;</span>
<span class="token variable">$transform</span><span class="token operator">-</span>transition<span class="token punctuation">:</span> <span class="token string double-quoted-string">&quot;0.3s ease&quot;</span> <span class="token operator">!</span><span class="token keyword">default</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="index-scss" tabindex="-1"><a class="header-anchor" href="#index-scss" aria-hidden="true">#</a> index.scss</h2><p>填入此文件所有内容都将解析为标准 CSS，然后在主题和插件样式之后注入。</p><p>因此，你可以在此处添加新样式或覆盖样式:</p><details class="hint-container details"><summary>例子</summary><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token comment">// 在导航栏中将站点名称改为斜体</span>
<span class="token selector">.site-name </span><span class="token punctuation">{</span>
  <span class="token property">font-style</span><span class="token punctuation">:</span> italic<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,40);function r(d,k){return e(),t("div",null,[c,i,p(" more "),u])}const b=a(l,[["render",r],["__file","style.html.vue"]]);export{b as default};
