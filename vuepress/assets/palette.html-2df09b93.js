import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o as c,c as o,d as a,a as e,b as s,e as l}from"./app-4560479e.js";const r={},d=e("h1",{id:"palette",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#palette","aria-hidden":"true"},"#"),s(" palette")],-1),u=l(`<p>为你的主题提供调色板功能。</p><p>该插件主要用于开发主题，并且已经集成到默认主题中。大部分情况下你不需要直接使用它。</p><p>对于主题作者，该插件可以帮助你提供用户自定义样式的能力。</p><h2 id="使用方法" tabindex="-1"><a class="header-anchor" href="#使用方法" aria-hidden="true">#</a> 使用方法</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> i <span class="token parameter variable">-D</span> @vuepress/plugin-palette@next
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> palettePlugin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@vuepress/plugin-palette&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  plugins<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">palettePlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token comment">// 配置项</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="调色板和样式" tabindex="-1"><a class="header-anchor" href="#调色板和样式" aria-hidden="true">#</a> 调色板和样式</h2><p>该插件会提供一个 <code>@vuepress/plugin-palette/palette</code> （调色板文件）和一个 <code>@vuepress/plugin-palette/style</code> （样式文件），用于在你的主题样式中引入。</p>`,8),v={href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties",target:"_blank",rel:"noopener noreferrer"},k={href:"https://sass-lang.com/documentation/variables",target:"_blank",rel:"noopener noreferrer"},h={href:"http://lesscss.org/features/#variables-feature",target:"_blank",rel:"noopener noreferrer"},m={href:"https://stylus-lang.com/docs/variables.html",target:"_blank",rel:"noopener noreferrer"},g=l(`<p>样式文件用于覆盖默认样式或添加额外样式，因此它一般会在你主题样式的末尾引入。</p><h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h2><p>在你的主题中使用该插件，假设你使用 SASS 作为 CSS 预处理器：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
  plugins<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">palettePlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span> preset<span class="token operator">:</span> <span class="token string">&quot;sass&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用调色板" tabindex="-1"><a class="header-anchor" href="#使用调色板" aria-hidden="true">#</a> 使用调色板</h3><p>在你主题需要使用对应变量的地方引入该插件的调色板文件，比如在 <code>Layout.vue</code> 中：</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>palette-title<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>你好，调色板！<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>scss<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
<span class="token comment">/* 从该插件的调色板中引入变量 */</span>
<span class="token atrule"><span class="token rule">@import</span> <span class="token string">&quot;@vuepress/plugin-palette/palette&quot;</span><span class="token punctuation">;</span></span>

<span class="token comment">/* 设置变量的默认值 */</span>
$<span class="token property">color</span><span class="token punctuation">:</span> red !default<span class="token punctuation">;</span>

<span class="token comment">/* 在你的样式中使用变量 */</span>
<span class="token selector">.palette-title</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> $color<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后，用户就可以在 <code>.vuepress/styles/palette.scss</code> 中自定义变量：</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token property"><span class="token variable">$color</span></span><span class="token punctuation">:</span> green<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="使用样式" tabindex="-1"><a class="header-anchor" href="#使用样式" aria-hidden="true">#</a> 使用样式</h3><p>在你主题的样式之后引入该插件的样式文件，比如在 <code>clientConfigFile</code> 中：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// 引入你主题本身的样式文件</span>
<span class="token keyword">import</span> <span class="token string">&quot;path/to/your/theme/style&quot;</span><span class="token punctuation">;</span>
<span class="token comment">// 引入该插件的样式文件</span>
<span class="token keyword">import</span> <span class="token string">&quot;@vuepress/plugin-palette/style&quot;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后，用户就可以在 <code>.vuepress/styles/index.scss</code> 中添加额外样式，并可以覆盖你主题本身的样式：</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token selector">h1 </span><span class="token punctuation">{</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 2.5rem<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="配置项" tabindex="-1"><a class="header-anchor" href="#配置项" aria-hidden="true">#</a> 配置项</h2><h3 id="preset" tabindex="-1"><a class="header-anchor" href="#preset" aria-hidden="true">#</a> preset</h3><ul><li><p>类型： <code>&#39;css&#39; | &#39;sass&#39; | &#39;less&#39; | &#39;stylus&#39;</code></p></li><li><p>默认值： <code>&#39;css&#39;</code></p></li><li><p>详情：</p><p>设置其他选项的预设。</p><p>如果你没有对该插件进行进阶定制化的需要，建议只设置该配置项并忽略其他选项。</p></li></ul><h3 id="userpalettefile" tabindex="-1"><a class="header-anchor" href="#userpalettefile" aria-hidden="true">#</a> userPaletteFile</h3><ul><li><p>类型： <code>string</code></p></li><li><p>默认值：</p><ul><li>css: <code>&#39;.vuepress/styles/palette.css&#39;</code></li><li>sass: <code>&#39;.vuepress/styles/palette.scss&#39;</code></li><li>less: <code>&#39;.vuepress/styles/palette.less&#39;</code></li><li>stylus: <code>&#39;.vuepress/styles/palette.styl&#39;</code></li></ul></li><li><p>详情：</p><p>用户调色板文件的路径，是针对源文件目录的相对路径。</p><p>默认值依赖于 <a href="#preset">preset</a> 配置项。</p><p>该文件用于用户定义样式变量，建议保持默认值作为约定的文件路径。</p></li></ul><h3 id="temppalettefile" tabindex="-1"><a class="header-anchor" href="#temppalettefile" aria-hidden="true">#</a> tempPaletteFile</h3><ul><li><p>类型： <code>string</code></p></li><li><p>默认值：</p><ul><li>css: <code>&#39;styles/palette.css&#39;</code></li><li>sass: <code>&#39;styles/palette.scss&#39;</code></li><li>less: <code>&#39;styles/palette.less&#39;</code></li><li>stylus: <code>&#39;styles/palette.styl&#39;</code></li></ul></li><li><p>详情：</p><p>生成的调色板临时文件的路径，是针对临时文件文件目录的相对路径。</p><p>默认值依赖于 <a href="#preset">preset</a> 配置项。</p><p>你应该使用 <code>&#39;@vuepress/plugin-palette/palette&#39;</code> 别名来引入调色板文件，因此在绝大多数情况下你不需要修改该配置项。</p></li></ul><h3 id="userstylefile" tabindex="-1"><a class="header-anchor" href="#userstylefile" aria-hidden="true">#</a> userStyleFile</h3><ul><li><p>类型： <code>string</code></p></li><li><p>默认值：</p><ul><li>css: <code>&#39;.vuepress/styles/index.css&#39;</code></li><li>sass: <code>&#39;.vuepress/styles/index.scss&#39;</code></li><li>less: <code>&#39;.vuepress/styles/index.less&#39;</code></li><li>stylus: <code>&#39;.vuepress/styles/index.styl&#39;</code></li></ul></li><li><p>详情：</p><p>用户样式文件的路径，是针对源文件目录的相对路径。</p><p>默认值依赖于 <a href="#preset">preset</a> 配置项。</p><p>该文件用于用户覆盖默认样式和添加额外样式，建议保持默认值作为约定的文件路径。</p></li></ul><h3 id="tempstylefile" tabindex="-1"><a class="header-anchor" href="#tempstylefile" aria-hidden="true">#</a> tempStyleFile</h3><ul><li><p>类型： <code>string</code></p></li><li><p>默认值：</p><ul><li>css: <code>&#39;styles/index.css&#39;</code></li><li>sass: <code>&#39;styles/index.scss&#39;</code></li><li>less: <code>&#39;styles/index.less&#39;</code></li><li>stylus: <code>&#39;styles/index.styl&#39;</code></li></ul></li><li><p>详情：</p><p>生成的样式临时文件的路径，是针对临时文件文件目录的相对路径。</p><p>默认值依赖于 <a href="#preset">preset</a> 配置项。</p><p>你应该使用 <code>&#39;@vuepress/plugin-palette/style&#39;</code> 别名来引入样式文件，因此在绝大多数情况下你不需要修改该配置项。</p></li></ul><h3 id="importcode" tabindex="-1"><a class="header-anchor" href="#importcode" aria-hidden="true">#</a> importCode</h3><ul><li><p>类型： <code>(filePath: string) =&gt; string</code></p></li><li><p>默认值：</p><ul><li>css: <code>(filePath) =&gt; \`@import &#39;\${filePath}&#39;;\\n\`</code></li><li>sass: <code>(filePath) =&gt; \`@forward &#39;file:///\${filePath}&#39;;\\n\`</code></li><li>less: <code>(filePath) =&gt; \`@import &#39;\${filePath}&#39;;\\n\`</code></li><li>stylus: <code>(filePath) =&gt; \`@require &#39;\${filePath}&#39;;\\n\`</code></li></ul></li><li><p>详情：</p><p>用于生成引入代码的函数。</p><p>默认值依赖于 <a href="#preset">preset</a> 配置项。</p><p>该配置项用于生成 <a href="#temppalettefile">tempPaletteFile</a> 和 <a href="#tempstylefile">tempStyleFile</a> ，在绝大多数情况下你不需要修改该配置项。</p></li></ul>`,27);function b(f,y){const p=t("NpmBadge"),n=t("ExternalLinkIcon");return c(),o("div",null,[d,a(p,{package:"@vuepress/plugin-palette"}),u,e("p",null,[s("调色板文件用于定义样式变量，因此它一般会在你主题样式的开头引入。举例来说，用户可以在调色板中定义 "),e("a",v,[s("CSS 变量"),a(n)]),s(" 、 "),e("a",k,[s("SASS 变量"),a(n)]),s(" 、 "),e("a",h,[s("LESS 变量"),a(n)]),s(" 或 "),e("a",m,[s("Stylus 变量"),a(n)]),s(" ，然后你可以在你的主题样式中使用这些变量。")]),g])}const S=i(r,[["render",b],["__file","palette.html.vue"]]);export{S as default};
