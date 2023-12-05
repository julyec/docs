import{_ as c}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o as p,c as d,b as n,d as s,e as a,w as l,f as e}from"./app-d630ecd8.js";const r={},u=e('<h2 id="插件配置" tabindex="-1"><a class="header-anchor" href="#插件配置" aria-hidden="true">#</a> 插件配置</h2><p>你可以设置以下插件选项来启用或禁用一些功能。</p><h3 id="gfm" tabindex="-1"><a class="header-anchor" href="#gfm" aria-hidden="true">#</a> gfm</h3><ul><li>类型: <code>boolean</code></li><li>默认值: <code>false</code></li></ul><p>是否支持完整的 GFM 语法。</p>',5),v={class:"hint-container note"},m=n("p",{class:"hint-container-title"},"注",-1),k={href:"https://github.github.com/gfm/",target:"_blank",rel:"noopener noreferrer"},b=n("p",null,"老实说，我们并不是 100% 支持它，我们只补全了它的语法，包括链接转换、换行、任务列表、脚注、代码高亮、图片标记、Mermaid、Mathjax 等。",-1),h=n("p",null,[s("某些行为可能会有所不同，例如，为了允许 Vue 语法，我们并没有禁止 "),n("code",null,"<script>"),s(" 标签。 但在大多数情况下，行为应该是相同的。")],-1),g=n("h3",{id:"container",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#container","aria-hidden":"true"},"#"),s(" container")],-1),f=n("li",null,[s("类型: "),n("code",null,"boolean")],-1),y=n("li",null,[s("默认值: "),n("code",null,"false")],-1),w=e(`<p>是否启用自定义容器支持:</p><ul><li>info</li><li>note</li><li>tip</li><li>warning</li><li>danger</li><li>details</li></ul><div class="hint-container warning"><p class="hint-container-title">注意</p><p>最后四个会和默认主题冲突，且会覆盖默认主题的样式与行为。</p></div><h3 id="checklinks" tabindex="-1"><a class="header-anchor" href="#checklinks" aria-hidden="true">#</a> checkLinks</h3><ul><li><p>类型: <code>LinksCheckOptions</code></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">LinksCheckStatus</span> <span class="token operator">=</span> <span class="token string">&quot;always&quot;</span> <span class="token operator">|</span> <span class="token string">&quot;dev&quot;</span> <span class="token operator">|</span> <span class="token string">&quot;build&quot;</span> <span class="token operator">|</span> <span class="token string">&quot;never&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">interface</span> <span class="token class-name">LinksCheckOptions</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * 是否检查 Markdown 中的死链
   *
   * <span class="token keyword">@default</span> &quot;dev&quot;
   */</span>
  status<span class="token operator">?</span><span class="token operator">:</span> LinksCheckStatus<span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 忽略的死链
   */</span>
  ignore<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token builtin">string</span> <span class="token operator">|</span> RegExp<span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">|</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>link<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> isDev<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">boolean</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>默认值: <code>{ status: &quot;dev&quot; }</code></p></li></ul><p>是否启用链接检查。</p><h3 id="vpre" tabindex="-1"><a class="header-anchor" href="#vpre" aria-hidden="true">#</a> vPre</h3>`,7),x=n("li",null,[s("类型: "),n("code",null,"boolean")],-1),_=n("li",null,[s("默认值: "),n("code",null,"false")],-1),q=e('<p>是否启用 v-pre 容器。</p><h3 id="breaks" tabindex="-1"><a class="header-anchor" href="#breaks" aria-hidden="true">#</a> breaks</h3><ul><li>类型: <code>boolean</code></li><li>默认值: <code>false</code></li><li>在 GFM 中启用: 是</li></ul><p>是否将段落中的 <code>\\n</code> 转换为 <code>&lt;br&gt;</code></p><h3 id="linkify" tabindex="-1"><a class="header-anchor" href="#linkify" aria-hidden="true">#</a> linkify</h3><ul><li>类型: <code>boolean</code></li><li>默认值: <code>false</code></li><li>在 GFM 中启用: 是</li></ul><p>是否将文字中的链接格式文字转换为链接</p><h3 id="tabs" tabindex="-1"><a class="header-anchor" href="#tabs" aria-hidden="true">#</a> tabs</h3>',8),R=n("li",null,[s("类型: "),n("code",null,"boolean")],-1),S=n("li",null,[s("默认值: "),n("code",null,"false")],-1),O=n("p",null,"是否启用选项卡。",-1),C=n("h3",{id:"codetabs",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#codetabs","aria-hidden":"true"},"#"),s(" codetabs")],-1),M=n("li",null,[s("类型: "),n("code",null,"boolean")],-1),P=n("li",null,[s("默认值: "),n("code",null,"false")],-1),z=n("p",null,"是否启用代码组。",-1),j=n("h3",{id:"align",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#align","aria-hidden":"true"},"#"),s(" align")],-1),L=n("li",null,[s("类型: "),n("code",null,"boolean")],-1),V=n("li",null,[s("默认值: "),n("code",null,"false")],-1),J=n("p",null,"是否启用自定义对齐格式支持。",-1),F=n("h3",{id:"attrs",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#attrs","aria-hidden":"true"},"#"),s(" attrs")],-1),I=e(`<li><p>类型: <code>AttrsOptions | boolean</code></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">AttrsOptions</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * 左分隔符
   *
   * <span class="token keyword">@default</span> &#39;<span class="token punctuation">{</span>&#39;
   */</span>
  left<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 右分隔符
   *
   * <span class="token keyword">@default</span> &#39;<span class="token punctuation">}</span>&#39;
   */</span>
  right<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 允许的属性
   *
   * <span class="token keyword">@description</span> 设置空数组意味着允许所有属性
   *
   * <span class="token keyword">@default</span> []
   */</span>
  allowed<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token builtin">string</span> <span class="token operator">|</span> RegExp<span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>默认值: <code>false</code></p></li>`,2),E=n("p",null,"详情:",-1),T=e(`<p>是否启用自定义属性支持。</p><h3 id="sup" tabindex="-1"><a class="header-anchor" href="#sup" aria-hidden="true">#</a> sup</h3><ul><li>类型: <code>boolean</code></li><li>默认值: <code>false</code></li></ul><p>是否启用上角标格式支持。</p><h3 id="sub" tabindex="-1"><a class="header-anchor" href="#sub" aria-hidden="true">#</a> sub</h3><ul><li>类型: <code>boolean</code></li><li>默认值: <code>false</code></li></ul><p>是否启用下角标格式支持。</p><h3 id="footnote" tabindex="-1"><a class="header-anchor" href="#footnote" aria-hidden="true">#</a> footnote</h3><ul><li>类型: <code>boolean</code></li><li>默认值: <code>false</code></li><li>在 GFM 中启用: 是</li></ul><p>是否启用脚注格式支持。</p><h3 id="mark" tabindex="-1"><a class="header-anchor" href="#mark" aria-hidden="true">#</a> mark</h3><ul><li>类型: <code>boolean</code></li><li>默认值: <code>false</code></li></ul><p>是否启用标记格式支持。</p><h3 id="figure" tabindex="-1"><a class="header-anchor" href="#figure" aria-hidden="true">#</a> figure</h3><ul><li>类型: <code>boolean</code></li><li>默认值: <code>false</code></li></ul><p>是否启用图片 Figure 支持。</p><h3 id="imglazyload" tabindex="-1"><a class="header-anchor" href="#imglazyload" aria-hidden="true">#</a> imgLazyload</h3><ul><li>类型: <code>boolean</code></li><li>默认值: <code>false</code></li></ul><p>是否使用原生方式懒加载页面图片。</p><h3 id="imgmark" tabindex="-1"><a class="header-anchor" href="#imgmark" aria-hidden="true">#</a> imgMark</h3><ul><li>类型: <code>ImageMarkOptions | boolean</code></li><li>默认值: <code>false</code></li><li>在 GFM 中启用: 是</li></ul><p>是否启用图片标注支持</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">ImageMarkOptions</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/** 日间模式的 ID */</span>
  light<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/** 夜间模式的 ID */</span>
  dark<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="imgsize" tabindex="-1"><a class="header-anchor" href="#imgsize" aria-hidden="true">#</a> imgSize</h3><ul><li>类型: <code>boolean</code></li><li>默认值: <code>false</code></li></ul><p>是否启用图片尺寸支持。</p><h3 id="obsidianimgsize" tabindex="-1"><a class="header-anchor" href="#obsidianimgsize" aria-hidden="true">#</a> obsidianImgSize</h3><ul><li>类型: <code>boolean</code></li><li>默认值: <code>false</code></li></ul><p>是否启用 obsidian 图片尺寸支持。</p><h3 id="tasklist" tabindex="-1"><a class="header-anchor" href="#tasklist" aria-hidden="true">#</a> tasklist</h3><ul><li>类型: <code>TaskListOptions | boolean</code></li><li>默认值: <code>false</code></li><li>在 GFM 中启用: 是</li></ul><p>是否启用任务列表格式支持。你可以传入一个对象作为任务列表的配置选项。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">TaskListOptions</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * 是否禁用 checkbox
   *
   * <span class="token keyword">@default</span> true
   */</span>
  disabled<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 是否使用 \`&lt;label&gt;\` 来包裹文字
   *
   * <span class="token keyword">@default</span> true
   */</span>
  label<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="include" tabindex="-1"><a class="header-anchor" href="#include" aria-hidden="true">#</a> include</h3><ul><li><p>类型: <code>IncludeOptions | boolean</code></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">IncludeOptions</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * 处理 include 文件路径
   *
   * <span class="token keyword">@default</span> (path) =&gt; path
   */</span>
  resolvePath<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span>path<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> cwd<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 是否深度导入包含的 Markdown 文件
   *
   * <span class="token keyword">@default</span> false
   */</span>
  deep<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>默认值: <code>false</code></p></li></ul><p>是否启用 Markdown 导入支持。你可以传入一个函数进行路径解析。</p><h3 id="katex" tabindex="-1"><a class="header-anchor" href="#katex" aria-hidden="true">#</a> katex</h3><ul><li>类型: <code>KatexOptions &amp; { copy?: boolean; mhchem?: boolean } | boolean</code></li><li>默认值: <code>false</code></li></ul><p>是否通过 KaTeX 启用 $\\TeX$ 语法支持。你可以传入一个对象作为 KaTeX 的配置选项。</p><p>特别地，你可以通过 <code>katex.copy: true</code> 和 <code>katex.mhchem: true</code> 来启用 copy 和 mhchem 扩展。</p>`,40),G={href:"https://katex.org/docs/options.html",target:"_blank",rel:"noopener noreferrer"},D=n("h3",{id:"mathjax",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#mathjax","aria-hidden":"true"},"#"),s(" mathjax")],-1),U=n("ul",null,[n("li",null,[s("类型: "),n("code",null,"MathJaxOptions | boolean")]),n("li",null,[s("默认值: "),n("code",null,"false")]),n("li",null,"在 GFM 中启用: 是")],-1),$=n("p",null,"是否通过 Math Jax 启用 $\\TeX$ 语法支持。你可以传递一个对象来配置 Math Jax。",-1),N={href:"https://github.com/vuepress-theme-hope/vuepress-theme-hope/tree/main/packages/md-enhance/src/shared/mathjax.ts",target:"_blank",rel:"noopener noreferrer"},K=e('<h3 id="card" tabindex="-1"><a class="header-anchor" href="#card" aria-hidden="true">#</a> card</h3><ul><li>类型: <code>boolean</code></li><li>默认值: <code>false</code></li></ul><p>是否启用卡片支持。</p><h3 id="chart" tabindex="-1"><a class="header-anchor" href="#chart" aria-hidden="true">#</a> chart</h3><ul><li>类型: <code>boolean</code></li><li>默认值: <code>false</code></li></ul><p>是否启用图表支持。</p><h3 id="echarts" tabindex="-1"><a class="header-anchor" href="#echarts" aria-hidden="true">#</a> echarts</h3><ul><li>类型: <code>boolean</code></li><li>默认值: <code>false</code></li></ul><p>是否启用 ECharts 图表支持。</p><h3 id="flowchart" tabindex="-1"><a class="header-anchor" href="#flowchart" aria-hidden="true">#</a> flowchart</h3><ul><li>类型: <code>boolean</code></li><li>默认值: <code>false</code></li></ul><p>是否启用流程图支持。</p><h3 id="mermaid" tabindex="-1"><a class="header-anchor" href="#mermaid" aria-hidden="true">#</a> mermaid</h3><ul><li>类型: <code>MermaidConfig | boolean</code></li><li>默认值: <code>false</code></li><li>在 GFM 中启用: 是</li></ul>',14),W={href:"https://mermaid.js.org/",target:"_blank",rel:"noopener noreferrer"},A=e(`<h3 id="stylize" tabindex="-1"><a class="header-anchor" href="#stylize" aria-hidden="true">#</a> stylize</h3><ul><li><p>类型: <code>StylizeOptions | false</code></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">StylizeResult</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * 渲染的标签名称
   */</span>
  tag<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 属性设置
   */</span>
  attrs<span class="token operator">:</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">string</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 标签内容
   */</span>
  content<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">StylizeItem</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * 字符匹配
   */</span>
  matcher<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> RegExp<span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 内容替换
   */</span>
  <span class="token function-variable function">replacer</span><span class="token operator">:</span> <span class="token punctuation">(</span>options<span class="token operator">:</span> <span class="token punctuation">{</span>
    tag<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    content<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    attrs<span class="token operator">:</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">string</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
    env<span class="token operator">?</span><span class="token operator">:</span> MarkdownEnv<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> StylizeResult <span class="token operator">|</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> <span class="token class-name">StylizeOptions</span> <span class="token operator">=</span> StylizeItem<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>默认值: <code>false</code></p></li></ul><p>对行内语法进行样式化以创建代码片段</p><h3 id="playground" tabindex="-1"><a class="header-anchor" href="#playground" aria-hidden="true">#</a> playground</h3><ul><li><p>类型: <code>PlaygroundGlobalOptions</code></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> CompilerOptions <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;typescript&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">interface</span> <span class="token class-name">PlaygroundCodeConfig</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * 代码块扩展名
   *
   * <span class="token keyword">@description</span> 它基于文件名，而不是代码块语言
   */</span>
  ext<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 代码块内容
   */</span>
  content<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">PlaygroundData</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * 交互演示标题
   */</span>
  title<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Import map 文件名
   *
   * <span class="token keyword">@default</span> &#39;import-map.json&#39;
   */</span>
  importMap<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 交互演示文件信息
   */</span>
  files<span class="token operator">:</span> Record<span class="token operator">&lt;</span>
    <span class="token doc-comment comment">/**
     * 文件名
     */</span>
    <span class="token builtin">string</span><span class="token punctuation">,</span>
    <span class="token doc-comment comment">/**
     * 文件详情
     */</span>
    PlaygroundCodeConfig
  <span class="token operator">&gt;</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 交互演示设置
   *
   * <span class="token keyword">@description</span> 它是设置指令后的 json 内容的解析结果
   */</span>
  settings<span class="token operator">:</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">unknown</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 根据交互演示内容生成的 hash key
   */</span>
  key<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">PlaygroundOptions</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * 交互演示容器名
   */</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 交互演示组件名称
   *
   * <span class="token keyword">@default</span> &#39;Playground&#39;
   */</span>
  component<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 属性获取器
   */</span>
  <span class="token function-variable function">propsGetter</span><span class="token operator">:</span> <span class="token punctuation">(</span>data<span class="token operator">:</span> PlaygroundData<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">string</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">TSPresetPlaygroundOptions</span> <span class="token keyword">extends</span> <span class="token class-name">CompilerOptions</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * 交互演示外部地址
   *
   * <span class="token keyword">@default</span> &quot;https://www.typescriptlang.org/play&quot;
   */</span>
  service<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">UnoPresetPlaygroundOptions</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * external playground service url
   *
   * 交互演示外部地址
   *
   * <span class="token keyword">@default</span> &quot;https://unocss.dev/play&quot;
   */</span>
  service<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">VuePresetPlaygroundOptions</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * 交互演示外部地址
   *
   * <span class="token keyword">@default</span> &quot;https://sfc.vuejs.org/&quot;
   */</span>
  service<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 是否启用开发版本
   *
   * <span class="token keyword">@default</span> false
   */</span>
  dev<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 是否启用 SSR
   *
   * <span class="token keyword">@default</span> false
   */</span>
  ssr<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">PlaygroundGlobalOptions</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/** 交互演示预设 */</span>
  presets<span class="token operator">:</span> <span class="token punctuation">(</span><span class="token string">&quot;ts&quot;</span> <span class="token operator">|</span> <span class="token string">&quot;vue&quot;</span> <span class="token operator">|</span> PlaygroundOptions<span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/** 交互演示配置 */</span>
  config<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    ts<span class="token operator">?</span><span class="token operator">:</span> TSPresetPlaygroundOptions<span class="token punctuation">;</span>
    vue<span class="token operator">?</span><span class="token operator">:</span> VuePresetPlaygroundOptions<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>必填: 否</p></li></ul><p>交互演示选项。</p><h3 id="vueplayground" tabindex="-1"><a class="header-anchor" href="#vueplayground" aria-hidden="true">#</a> vuePlayground</h3><ul><li><p>类型: <code>VuePlaygroundOptions | boolean</code></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">VuePlaygroundOptions</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * 指定 vue 版本
   */</span>
  vueVersion<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 指定默认的 Vue 运行时
   *
   * <span class="token keyword">@default</span> &quot;https://unpkg.com/@vue/runtime-dom@$<span class="token punctuation">{</span>version<span class="token punctuation">}</span>/dist/runtime-dom.esm-browser.js&quot;
   */</span>
  defaultVueRuntimeURL<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 指定默认的 Vue 服务端渲染器
   *
   * <span class="token keyword">@default</span> &quot;https://unpkg.com/@vue/server-renderer@$<span class="token punctuation">{</span>version<span class="token punctuation">}</span>/dist/server-renderer.esm-browser.js&quot;
   */</span>
  defaultVueServerRendererURL<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 是否启用自动调整大小
   *
   * <span class="token keyword">@default</span> true
   */</span>
  autoResize<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 是否显示 JS, CSS, SSR 面板
   *
   * <span class="token keyword">@default</span> false
   */</span>
  showCompileOutput<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 是否显示 import map
   *
   * <span class="token keyword">@default</span> true
   */</span>
  showImportMap<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 是否清空控制台
   *
   * <span class="token keyword">@default</span> false
   */</span>
  clearConsole<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 布局
   *
   * <span class="token keyword">@default</span> &#39;horizontal&#39;
   */</span>
  layout<span class="token operator">?</span><span class="token operator">:</span> <span class="token string">&quot;horizontal&quot;</span> <span class="token operator">|</span> <span class="token string">&quot;vertical&quot;</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * \`vue/compiler-sfc\` 配置项
   */</span>
  sfcOptions<span class="token operator">?</span><span class="token operator">:</span> SFCOptions<span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 是否启用 SSR
   *
   * <span class="token keyword">@default</span> true
   */</span>
  ssr<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>默认值: <code>false</code></p></li></ul><p>是否启用 Vue 交互演示支持。</p><h3 id="demo" tabindex="-1"><a class="header-anchor" href="#demo" aria-hidden="true">#</a> demo</h3><ul><li>类型: <code>CodeDemoGlobalOptions | boolean</code></li><li>默认值: <code>false</code></li></ul><p>是否启用代码案例支持。</p><h4 id="demo-jslib" tabindex="-1"><a class="header-anchor" href="#demo-jslib" aria-hidden="true">#</a> demo.jsLib</h4><ul><li>类型: <code>string[]</code></li><li>必填: 否</li></ul><p>CodePen, JsFiddle 需要引入的外部 JS 库。</p><h4 id="demo-csslib" tabindex="-1"><a class="header-anchor" href="#demo-csslib" aria-hidden="true">#</a> demo.cssLib</h4><ul><li>类型: <code>string[]</code></li><li>必填: 否</li></ul><p>CodePen, JsFiddle 需要引入的外部 CSS 库。</p><div class="hint-container warning"><p class="hint-container-title">注意</p><p>上述两个选项仅仅是给第三方代码演示使用的，你需要自行在 <code>head</code> 中导入这些库。</p></div><h4 id="demo-jsfiddle" tabindex="-1"><a class="header-anchor" href="#demo-jsfiddle" aria-hidden="true">#</a> demo.jsfiddle</h4><ul><li>类型: <code>boolean</code></li><li>默认值: <code>true</code></li></ul><p>是否显示 JSFiddle 按钮</p><h4 id="demo-codepen" tabindex="-1"><a class="header-anchor" href="#demo-codepen" aria-hidden="true">#</a> demo.codepen</h4><ul><li>类型: <code>boolean</code></li><li>默认值: <code>true</code></li></ul><p>是否显示 CodePen 按钮</p><h4 id="demo-codepenlayout" tabindex="-1"><a class="header-anchor" href="#demo-codepenlayout" aria-hidden="true">#</a> demo.codepenLayout</h4><ul><li>类型: <code>&quot;top&quot; | &quot;left&quot; | &quot;right&quot;</code></li><li>默认值: <code>&quot;left&quot;</code></li></ul><p>CodePen 编辑器布局</p><h4 id="demo-codepeneditors" tabindex="-1"><a class="header-anchor" href="#demo-codepeneditors" aria-hidden="true">#</a> demo.codepenEditors</h4><ul><li>类型: <code>string</code></li><li>默认值: <code>&quot;101&quot;</code></li></ul><p>CodePen 编辑器状态</p><h4 id="demo-editors" tabindex="-1"><a class="header-anchor" href="#demo-editors" aria-hidden="true">#</a> demo.editors</h4><ul><li>类型: <code>string</code></li><li>默认值: <code>&quot;101&quot;</code></li></ul><p>CodePen 编辑器显示情况，第一位代表 HTML ，第二位代表 JS，第三位代表演示页面。</p><h4 id="其他" tabindex="-1"><a class="header-anchor" href="#其他" aria-hidden="true">#</a> 其他</h4><p>以下是第三方代码演示使用的库地址，除非你的环境无法访问 unpkg 或访问缓慢，否则无需覆盖默认设置。</p><h5 id="demo-babel" tabindex="-1"><a class="header-anchor" href="#demo-babel" aria-hidden="true">#</a> demo.babel</h5><p>默认值: <code>&quot;https://unpkg.com/@babel/standalone/babel.min.js&quot;</code></p><h5 id="demo-vue" tabindex="-1"><a class="header-anchor" href="#demo-vue" aria-hidden="true">#</a> demo.vue</h5><p>默认值: <code>&quot;https://unpkg.com/vue/dist/vue.global.prod.js&quot;</code></p><h5 id="demo-react" tabindex="-1"><a class="header-anchor" href="#demo-react" aria-hidden="true">#</a> demo.react</h5><p>默认值: <code>&quot;https://unpkg.com/react/umd/react.production.min.js&quot;</code></p><h5 id="demo-reactdom" tabindex="-1"><a class="header-anchor" href="#demo-reactdom" aria-hidden="true">#</a> demo.reactDOM</h5><p>默认值: <code>&quot;https://unpkg.com/react-dom/umd/react-dom.production.min.js&quot;</code></p><h3 id="revealjs" tabindex="-1"><a class="header-anchor" href="#revealjs" aria-hidden="true">#</a> revealJs</h3><ul><li><p>类型: <code>RevealJsOptions | boolean</code></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">RevealJsPlugin</span> <span class="token operator">=</span> <span class="token string">&quot;highlight&quot;</span> <span class="token operator">|</span> <span class="token string">&quot;math&quot;</span> <span class="token operator">|</span> <span class="token string">&quot;search&quot;</span> <span class="token operator">|</span> <span class="token string">&quot;notes&quot;</span> <span class="token operator">|</span> <span class="token string">&quot;zoom&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">type</span> <span class="token class-name">RevealJsTheme</span> <span class="token operator">=</span>
  <span class="token operator">|</span> <span class="token string">&quot;auto&quot;</span>
  <span class="token operator">|</span> <span class="token string">&quot;beige&quot;</span>
  <span class="token operator">|</span> <span class="token string">&quot;black&quot;</span>
  <span class="token operator">|</span> <span class="token string">&quot;blood&quot;</span>
  <span class="token operator">|</span> <span class="token string">&quot;league&quot;</span>
  <span class="token operator">|</span> <span class="token string">&quot;moon&quot;</span>
  <span class="token operator">|</span> <span class="token string">&quot;night&quot;</span>
  <span class="token operator">|</span> <span class="token string">&quot;serif&quot;</span>
  <span class="token operator">|</span> <span class="token string">&quot;simple&quot;</span>
  <span class="token operator">|</span> <span class="token string">&quot;sky&quot;</span>
  <span class="token operator">|</span> <span class="token string">&quot;solarized&quot;</span>
  <span class="token operator">|</span> <span class="token string">&quot;white&quot;</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * reveal.js 选项
 */</span>
<span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">RevealJsOptions</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * reveal.js 插件
   *
   * <span class="token keyword">@default</span> []
   */</span>
  plugins<span class="token operator">?</span><span class="token operator">:</span> RevealJsPlugin<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * reveal.js 主题
   *
   * <span class="token keyword">@default</span> [&quot;auto&quot;]
   */</span>
  themes<span class="token operator">?</span><span class="token operator">:</span> RevealJsTheme<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>默认值: <code>false</code></p></li></ul><p>是否启用幻灯片支持。你可以传递选项控制导入的插件和主题。</p><h3 id="delay" tabindex="-1"><a class="header-anchor" href="#delay" aria-hidden="true">#</a> delay</h3><ul><li>类型: <code>number</code></li><li>默认值: <code>800</code></li></ul><p>操作页面 DOM 的延时，单位 ms。</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>如果你使用的主题有切换动画，建议配置此选项为 <code>切换动画时长 + 200</code>。</p></div><h3 id="locales" tabindex="-1"><a class="header-anchor" href="#locales" aria-hidden="true">#</a> locales</h3><ul><li><p>类型: <code>MarkdownEnhanceLocaleConfig</code></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">MarkdownEnhanceLocaleData</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * 信息块的默认标题
   */</span>
  info<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 注释块的默认标题
   */</span>
  note<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 提示块的默认标题
   */</span>
  tip<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 注意块的默认标题
   */</span>
  warning<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 警告块的默认标题
   */</span>
  danger<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 详情块的默认标题
   */</span>
  details<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">MarkdownEnhanceLocaleConfig</span> <span class="token punctuation">{</span>
  <span class="token punctuation">[</span>localePath<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> MarkdownEnhanceLocaleData<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>必填: 否</p></li></ul><p>Markdown 增强插件的国际化配置。</p><details class="hint-container details"><summary>内置支持语言</summary><ul><li><strong>简体中文</strong> (zh-CN)</li><li><strong>繁体中文</strong> (zh-TW)</li><li><strong>英文(美国)</strong> (en-US)</li><li><strong>德语</strong> (de-DE)</li><li><strong>德语(澳大利亚)</strong> (de-AT)</li><li><strong>俄语</strong> (ru-RU)</li><li><strong>乌克兰语</strong> (uk-UA)</li><li><strong>越南语</strong> (vi-VN)</li><li><strong>葡萄牙语(巴西)</strong> (pt-BR)</li><li><strong>波兰语</strong> (pl-PL)</li><li><strong>法语</strong> (fr-FR)</li><li><strong>西班牙语</strong> (es-ES)</li><li><strong>斯洛伐克</strong> (sk-SK)</li><li><strong>日语</strong> (ja-JP)</li><li><strong>土耳其语</strong> (tr-TR)</li><li><strong>韩语</strong> (ko-KR)</li><li><strong>芬兰语</strong> (fi-FI)</li><li><strong>印尼语</strong> (id-ID)</li><li><strong>荷兰语</strong> (nl-NL)</li></ul></details><h2 id="客户端配置" tabindex="-1"><a class="header-anchor" href="#客户端配置" aria-hidden="true">#</a> 客户端配置</h2><h3 id="definemermaidconfig" tabindex="-1"><a class="header-anchor" href="#definemermaidconfig" aria-hidden="true">#</a> defineMermaidConfig</h3><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">defineMermaidConfig</span><span class="token operator">:</span> <span class="token punctuation">(</span>options<span class="token operator">:</span> MermaidConfig<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>定义需要传递给 Mermaid 的配置选项。</p><h3 id="definerevealjsconfig" tabindex="-1"><a class="header-anchor" href="#definerevealjsconfig" aria-hidden="true">#</a> defineRevealJsConfig</h3><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">defineRevealJsConfig</span><span class="token operator">:</span> <span class="token punctuation">(</span>options<span class="token operator">:</span> RevealOptions<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>定义需要传递给 Reveal.js 的配置选项。</p><h3 id="definevueplaygroundconfig" tabindex="-1"><a class="header-anchor" href="#definevueplaygroundconfig" aria-hidden="true">#</a> defineVuePlaygroundConfig</h3><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">VuePlaygroundOptions</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * specify the version of vue
   */</span>
  vueVersion<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * specify default URL to import Vue runtime from in the sandbox
   *
   * <span class="token keyword">@default</span> &quot;https://unpkg.com/@vue/runtime-dom@$<span class="token punctuation">{</span>version<span class="token punctuation">}</span>/dist/runtime-dom.esm-browser.js&quot;
   */</span>
  defaultVueRuntimeURL<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Specify default URL to import Vue Server Renderer from in the sandbox
   *
   * <span class="token keyword">@default</span> &quot;https://unpkg.com/@vue/server-renderer@$<span class="token punctuation">{</span>version<span class="token punctuation">}</span>/dist/server-renderer.esm-browser.js&quot;
   */</span>
  defaultVueServerRendererURL<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Whether to enable repl&#39;s editor resizable
   *
   * <span class="token keyword">@default</span> true
   */</span>
  autoResize<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Whether to show JS, CSS, SSR panel
   *
   * <span class="token keyword">@default</span> false
   */</span>
  showCompileOutput<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Whether to show import map
   *
   * <span class="token keyword">@default</span> true
   */</span>
  showImportMap<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Whether to clear console
   *
   * <span class="token keyword">@default</span> false
   */</span>
  clearConsole<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Layout
   *
   * <span class="token keyword">@default</span> &#39;horizontal&#39;
   */</span>
  layout<span class="token operator">?</span><span class="token operator">:</span> <span class="token string">&quot;horizontal&quot;</span> <span class="token operator">|</span> <span class="token string">&quot;vertical&quot;</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Options to configure the \`vue/compiler-sfc\`
   */</span>
  sfcOptions<span class="token operator">?</span><span class="token operator">:</span> SFCOptions<span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Whether to enable SSR
   *
   * <span class="token keyword">@default</span> true
   */</span>
  ssr<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">defineVuePlaygroundConfig</span><span class="token operator">:</span> <span class="token punctuation">(</span>options<span class="token operator">:</span> VuePlaygroundOptions<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>定义需要传递给 <code>@vue/repl</code> 的选项。</p>`,65);function B(X,H){const o=t("ExternalLinkIcon"),i=t("RouterLink");return p(),d("div",null,[u,n("div",v,[m,n("p",null,[s("有关完整的 GFM 语法，请参阅 "),n("a",k,[s("GFM"),a(o)]),s("。")]),b,h]),g,n("ul",null,[f,y,n("li",null,[s("详情: "),n("ul",null,[n("li",null,[a(i,{to:"/zh/guide/markdown/container.html"},{default:l(()=>[s("自定义容器")]),_:1})])])])]),w,n("ul",null,[x,_,n("li",null,[s("详情: "),n("ul",null,[n("li",null,[a(i,{to:"/zh/guide/markdown/others.html#v-pre"},{default:l(()=>[s("v-pre")]),_:1})])])])]),q,n("ul",null,[R,S,n("li",null,[s("详情: "),n("ul",null,[n("li",null,[a(i,{to:"/zh/guide/markdown/tabs.html"},{default:l(()=>[s("选项卡")]),_:1})])])])]),O,C,n("ul",null,[M,P,n("li",null,[s("详情: "),n("ul",null,[n("li",null,[a(i,{to:"/zh/guide/markdown/code-tabs.html"},{default:l(()=>[s("代码组")]),_:1})])])])]),z,j,n("ul",null,[L,V,n("li",null,[s("详情: "),n("ul",null,[n("li",null,[a(i,{to:"/zh/guide/markdown/align.html"},{default:l(()=>[s("自定义对齐")]),_:1})])])])]),J,F,n("ul",null,[I,n("li",null,[E,n("ul",null,[n("li",null,[a(i,{to:"/zh/guide/markdown/attrs.html"},{default:l(()=>[s("定义属性")]),_:1})])])])]),T,n("p",null,[s("可用的选项，详见 "),n("a",G,[s("Katex 文档"),a(o)]),s("。")]),D,U,$,n("p",null,[s("可用的选项，详见 "),n("a",N,[s("源代码"),a(o)]),s("。")]),K,n("p",null,[s("是否启用 "),n("a",W,[s("Mermaid"),a(o)]),s(" 支持，你可以传入一个对象作为 Mermaid 的配置选项。")]),A])}const Z=c(r,[["render",B],["__file","config.html.vue"]]);export{Z as default};
