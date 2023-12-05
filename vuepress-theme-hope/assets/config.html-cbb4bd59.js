import{_ as c}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as p,c as d,b as n,d as s,e as a,w as t,f as e}from"./app-d630ecd8.js";const r={},u=e('<h2 id="plugin-options" tabindex="-1"><a class="header-anchor" href="#plugin-options" aria-hidden="true">#</a> Plugin Options</h2><p>You can pass these options to the plugin:</p><h3 id="gfm" tabindex="-1"><a class="header-anchor" href="#gfm" aria-hidden="true">#</a> gfm</h3><ul><li>Type: <code>boolean</code></li><li>Default: <code>false</code></li></ul><p>Whether to support full GFM syntax.</p>',5),v={class:"hint-container note"},m=n("p",{class:"hint-container-title"},"Note",-1),k={href:"https://github.github.com/gfm/",target:"_blank",rel:"noopener noreferrer"},b=n("p",null,"We are not 100% supporting it to be honestly, we only supply its syntax including linkify, breaks, footnote, task list, code highlight, image mark, mermaid, mathjax and so on.",-1),h=n("p",null,[s("Some of the behavior might be different, for example to support Vue syntax, we are not disallowing "),n("code",null,"<script>"),s(" tags. But in most situation, the behavior should be same.")],-1),g=n("h3",{id:"container",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#container","aria-hidden":"true"},"#"),s(" container")],-1),f=n("li",null,[s("Type: "),n("code",null,"boolean")],-1),y=n("li",null,[s("Default: "),n("code",null,"false")],-1),w=e(`<p>Whether to enable custom container including</p><ul><li>info</li><li>note</li><li>tip</li><li>warning</li><li>danger</li><li>details</li></ul><div class="hint-container warning"><p class="hint-container-title">Note</p><p>The last 4 items conflict with default theme and will override its style.</p></div><h3 id="checklinks" tabindex="-1"><a class="header-anchor" href="#checklinks" aria-hidden="true">#</a> checkLinks</h3><ul><li><p>Type: <code>LinksCheckOptions</code></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">LinksCheckStatus</span> <span class="token operator">=</span> <span class="token string">&quot;always&quot;</span> <span class="token operator">|</span> <span class="token string">&quot;dev&quot;</span> <span class="token operator">|</span> <span class="token string">&quot;build&quot;</span> <span class="token operator">|</span> <span class="token string">&quot;never&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">interface</span> <span class="token class-name">LinksCheckOptions</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * Whether check dead links in markdown
   *
   * <span class="token keyword">@default</span> &quot;dev&quot;
   */</span>
  status<span class="token operator">?</span><span class="token operator">:</span> LinksCheckStatus<span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Dead links to ignore
   */</span>
  ignore<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token builtin">string</span> <span class="token operator">|</span> RegExp<span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">|</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>link<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> isDev<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">boolean</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Default: <code>{ status: &quot;dev&quot; }</code></p></li></ul><p>Whether to enable links check.</p><h3 id="vpre" tabindex="-1"><a class="header-anchor" href="#vpre" aria-hidden="true">#</a> vPre</h3>`,7),x=n("li",null,[s("Type: "),n("code",null,"boolean")],-1),_=n("li",null,[s("Default: "),n("code",null,"false")],-1),q=e('<p>Whether to enable v-pre wrapper.</p><h3 id="breaks" tabindex="-1"><a class="header-anchor" href="#breaks" aria-hidden="true">#</a> breaks</h3><ul><li>Type: <code>boolean</code></li><li>Default: <code>false</code></li><li>Enabled in GFM: Yes</li></ul><p>Whether convert <code>\\n</code> in paragraphs into <code>&lt;br&gt;</code>s</p><h3 id="linkify" tabindex="-1"><a class="header-anchor" href="#linkify" aria-hidden="true">#</a> linkify</h3><ul><li>Type: <code>boolean</code></li><li>Default: <code>false</code></li><li>Enabled in GFM: Yes</li></ul><p>Whether convert URL-like text into links</p><h3 id="tabs" tabindex="-1"><a class="header-anchor" href="#tabs" aria-hidden="true">#</a> tabs</h3>',8),T=n("li",null,[s("Type: "),n("code",null,"boolean")],-1),D=n("li",null,[s("Default: "),n("code",null,"false")],-1),P=n("p",null,"Whether to enable tabs.",-1),W=n("h3",{id:"codetabs",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#codetabs","aria-hidden":"true"},"#"),s(" codetabs")],-1),C=n("li",null,[s("Type: "),n("code",null,"boolean")],-1),R=n("li",null,[s("Default: "),n("code",null,"false")],-1),S=n("p",null,"Whether to enable codetabs.",-1),O=n("h3",{id:"align",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#align","aria-hidden":"true"},"#"),s(" align")],-1),j=n("li",null,[s("Type: "),n("code",null,"boolean")],-1),z=n("li",null,[s("Default: "),n("code",null,"false")],-1),M=n("p",null,"Whether to enable custom align.",-1),L=n("h3",{id:"attrs",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#attrs","aria-hidden":"true"},"#"),s(" attrs")],-1),E=e(`<li><p>Type: <code>AttrsOptions | boolean</code></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">AttrsOptions</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * left delimiter
   *
   * <span class="token keyword">@default</span> &#39;<span class="token punctuation">{</span>&#39;
   */</span>
  left<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * right delimiter
   *
   * <span class="token keyword">@default</span> &#39;<span class="token punctuation">}</span>&#39;
   */</span>
  right<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * allowed attributes
   *
   * <span class="token keyword">@description</span> An empty list means allowing all attribute
   *
   * <span class="token keyword">@default</span> []
   */</span>
  allowed<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token builtin">string</span> <span class="token operator">|</span> RegExp<span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Default: <code>false</code></p></li>`,2),F=n("p",null,"Details:",-1),I=e(`<p>Whether to enable attribute customize support.</p><h3 id="sup" tabindex="-1"><a class="header-anchor" href="#sup" aria-hidden="true">#</a> sup</h3><ul><li>Type: <code>boolean</code></li><li>Default: <code>false</code></li></ul><p>Whether to enable the upper format support.</p><h3 id="sub" tabindex="-1"><a class="header-anchor" href="#sub" aria-hidden="true">#</a> sub</h3><ul><li>Type: <code>boolean</code></li><li>Default: <code>false</code></li></ul><p>Whether to enable the lower corner format support.</p><h3 id="footnote" tabindex="-1"><a class="header-anchor" href="#footnote" aria-hidden="true">#</a> footnote</h3><ul><li>Type: <code>boolean</code></li><li>Default: <code>false</code></li><li>Enabled in GFM: Yes</li></ul><p>Whether to enable footnote format support.</p><h3 id="mark" tabindex="-1"><a class="header-anchor" href="#mark" aria-hidden="true">#</a> mark</h3><ul><li>Type: <code>boolean</code></li><li>Default: <code>false</code></li></ul><p>Whether to enable mark support.</p><h3 id="figure" tabindex="-1"><a class="header-anchor" href="#figure" aria-hidden="true">#</a> figure</h3><ul><li>Type: <code>boolean</code></li><li>Default: <code>false</code></li></ul><p>Whether enable figure support.</p><h3 id="imglazyload" tabindex="-1"><a class="header-anchor" href="#imglazyload" aria-hidden="true">#</a> imgLazyload</h3><ul><li>Type: <code>boolean</code></li><li>Default: <code>false</code></li></ul><p>Whether to lazy load every image in page in native way.</p><h3 id="imgmark" tabindex="-1"><a class="header-anchor" href="#imgmark" aria-hidden="true">#</a> imgMark</h3><ul><li>Type: <code>ImageMarkOptions | boolean</code></li><li>Default: <code>false</code></li><li>Enabled in GFM: Yes</li></ul><p>Whether enable image mark support.</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">ImageMarkOptions</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/** lightmode only IDs */</span>
  light<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/** darkmode only IDs */</span>
  dark<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="imgsize" tabindex="-1"><a class="header-anchor" href="#imgsize" aria-hidden="true">#</a> imgSize</h3><ul><li>Type: <code>boolean</code></li><li>Default: <code>false</code></li></ul><p>Whether enable image size support.</p><h3 id="obsidianimgsize" tabindex="-1"><a class="header-anchor" href="#obsidianimgsize" aria-hidden="true">#</a> obsidianImgSize</h3><ul><li>Type: <code>boolean</code></li><li>Default: <code>false</code></li></ul><p>Whether enable obsidian image size support.</p><h3 id="tasklist" tabindex="-1"><a class="header-anchor" href="#tasklist" aria-hidden="true">#</a> tasklist</h3><ul><li>Type: <code>TaskListOptions | boolean</code></li><li>Default: <code>false</code></li><li>Enabled in GFM: Yes</li></ul><p>Whether to enable tasklist format support. You can pass an object to config task list.</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">TaskListOptions</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * Whether disable checkbox
   *
   * <span class="token keyword">@default</span> true
   */</span>
  disabled<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Whether use \`&lt;label&gt;\` to wrap text
   *
   * <span class="token keyword">@default</span> true
   */</span>
  label<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="katex" tabindex="-1"><a class="header-anchor" href="#katex" aria-hidden="true">#</a> katex</h3><ul><li>Type: <code>KatexOptions &amp; { copy?: boolean; mhchem?: boolean } | boolean</code></li><li>Default: <code>false</code></li></ul><p>Whether to enable $\\TeX$ syntax support through KaTeX. You can pass an object to config KaTeX.</p><p>In particular, you can enable the copy and mhchem extensions with <code>katex.copy: true</code> and <code>katex.mhchem: true</code>.</p>`,37),J={href:"https://katex.org/docs/options.html",target:"_blank",rel:"noopener noreferrer"},V=n("h3",{id:"mathjax",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#mathjax","aria-hidden":"true"},"#"),s(" mathjax")],-1),G=n("ul",null,[n("li",null,[s("Type: "),n("code",null,"MathJaxOptions | boolean")]),n("li",null,[s("Default: "),n("code",null,"false")]),n("li",null,"Enabled in GFM: Yes")],-1),N=n("p",null,"Whether to enable $\\TeX$ syntax support through Math Jax. You can pass an object to config Math Jax.",-1),Y={href:"https://github.com/vuepress-theme-hope/vuepress-theme-hope/tree/main/packages/md-enhance/src/shared/mathjax.ts",target:"_blank",rel:"noopener noreferrer"},U=e(`<h3 id="include" tabindex="-1"><a class="header-anchor" href="#include" aria-hidden="true">#</a> include</h3><ul><li><p>Type: <code>IncludeOptions | boolean</code></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">IncludeOptions</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * handle include filePath
   *
   * <span class="token keyword">@default</span> (path) =&gt; path
   */</span>
  resolvePath<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span>path<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> cwd<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Whether deep include files in included Markdown files
   *
   * <span class="token keyword">@default</span> false
   */</span>
  deep<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Default: <code>false</code></p></li></ul><p>Whether to enable Markdown import support. You can pass in a function for path resolution.</p><h3 id="card" tabindex="-1"><a class="header-anchor" href="#card" aria-hidden="true">#</a> card</h3><ul><li>Type: <code>boolean</code></li><li>Default: <code>false</code></li></ul><p>Whether to enable card support</p><h3 id="chart" tabindex="-1"><a class="header-anchor" href="#chart" aria-hidden="true">#</a> chart</h3><ul><li>Type: <code>boolean</code></li><li>Default: <code>false</code></li></ul><p>Whether to enable chart support</p><h3 id="echarts" tabindex="-1"><a class="header-anchor" href="#echarts" aria-hidden="true">#</a> echarts</h3><ul><li>Type: <code>boolean</code></li><li>Default: <code>false</code></li></ul><p>Whether to enable ECharts support</p><h3 id="flowchart" tabindex="-1"><a class="header-anchor" href="#flowchart" aria-hidden="true">#</a> flowchart</h3><ul><li>Type: <code>boolean</code></li><li>Default: <code>false</code></li></ul><p>Whether to enable flowchart support</p><h3 id="mermaid" tabindex="-1"><a class="header-anchor" href="#mermaid" aria-hidden="true">#</a> mermaid</h3><ul><li>Type: <code>MermaidConfig | boolean</code></li><li>Default: <code>false</code></li><li>Enabled in GFM: Yes</li></ul>`,17),A={href:"https://mermaid.js.org/",target:"_blank",rel:"noopener noreferrer"},B=e(`<h3 id="stylize" tabindex="-1"><a class="header-anchor" href="#stylize" aria-hidden="true">#</a> stylize</h3><ul><li><p>Type: <code>StylizeOptions | false</code></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">StylizeResult</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * Tag name
   */</span>
  tag<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Attributes settings
   */</span>
  attrs<span class="token operator">:</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">string</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Tag content
   */</span>
  content<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">StylizeItem</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * Inline token matcher
   */</span>
  matcher<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> RegExp<span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Content Replacer
   */</span>
  <span class="token function-variable function">replacer</span><span class="token operator">:</span> <span class="token punctuation">(</span>options<span class="token operator">:</span> <span class="token punctuation">{</span>
    tag<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    content<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    attrs<span class="token operator">:</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">string</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
    env<span class="token operator">?</span><span class="token operator">:</span> MarkdownEnv<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> StylizeResult <span class="token operator">|</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> <span class="token class-name">StylizeOptions</span> <span class="token operator">=</span> StylizeItem<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Default: <code>false</code></p></li></ul><p>Stylize inline tokens to create snippet you want.</p><h3 id="playground" tabindex="-1"><a class="header-anchor" href="#playground" aria-hidden="true">#</a> playground</h3><ul><li><p>Type: <code>PlaygroundGlobalOptions</code></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> CompilerOptions <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;typescript&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">interface</span> <span class="token class-name">PlaygroundCodeConfig</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * Code block extension
   *
   * <span class="token keyword">@description</span> It&#39;s based on filename, not code fence language
   */</span>
  ext<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Code block content
   */</span>
  content<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">PlaygroundData</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * Title of Playground
   */</span>
  title<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Import map file name
   *
   * <span class="token keyword">@default</span> &#39;import-map.json&#39;
   */</span>
  importMap<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Playground files info
   */</span>
  files<span class="token operator">:</span> Record<span class="token operator">&lt;</span>
    <span class="token doc-comment comment">/** File name */</span>
    <span class="token builtin">string</span><span class="token punctuation">,</span>
    <span class="token doc-comment comment">/** File detail */</span>
    PlaygroundCodeConfig
  <span class="token operator">&gt;</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Playground settings
   *
   * <span class="token keyword">@description</span> It&#39;s parsed result of json content after setting directive
   */</span>
  settings<span class="token operator">:</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">unknown</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * hash key based on playground content
   */</span>
  key<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">PlaygroundOptions</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * Playground container name
   */</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Playground component name
   *
   * <span class="token keyword">@default</span> &#39;Playground&#39;
   */</span>
  component<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Props getter
   */</span>
  <span class="token function-variable function">propsGetter</span><span class="token operator">:</span> <span class="token punctuation">(</span>data<span class="token operator">:</span> PlaygroundData<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">string</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">TSPresetPlaygroundOptions</span> <span class="token keyword">extends</span> <span class="token class-name">CompilerOptions</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * external playground service url
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
   * external playground service url
   *
   * <span class="token keyword">@default</span> &quot;https://sfc.vuejs.org/&quot;
   */</span>
  service<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Whether to use dev version
   *
   * <span class="token keyword">@default</span> false
   */</span>
  dev<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Whether to enable SSR
   *
   * <span class="token keyword">@default</span> false
   */</span>
  ssr<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">PlaygroundGlobalOptions</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/** Playground presets */</span>
  presets<span class="token operator">:</span> <span class="token punctuation">(</span><span class="token string">&quot;ts&quot;</span> <span class="token operator">|</span> <span class="token string">&quot;vue&quot;</span> <span class="token operator">|</span> PlaygroundOptions<span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/** Playground config */</span>
  config<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    ts<span class="token operator">?</span><span class="token operator">:</span> TSPresetPlaygroundOptions<span class="token punctuation">;</span>
    vue<span class="token operator">?</span><span class="token operator">:</span> VuePresetPlaygroundOptions<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Required: No</p></li></ul><p>Playground options.</p><h3 id="vueplayground" tabindex="-1"><a class="header-anchor" href="#vueplayground" aria-hidden="true">#</a> vuePlayground</h3><ul><li>Type: <code>boolean</code></li><li>Default: <code>false</code></li></ul><p>Whether to enable vue playground support.</p><h3 id="demo" tabindex="-1"><a class="header-anchor" href="#demo" aria-hidden="true">#</a> demo</h3><ul><li>Type: <code>CodeDemoGlobalOptions | boolean</code></li><li>Default: <code>false</code></li></ul><p>Whether to enable code demo support.</p><h4 id="demo-jslib" tabindex="-1"><a class="header-anchor" href="#demo-jslib" aria-hidden="true">#</a> demo.jsLib</h4><ul><li>Type: <code>string[]</code></li><li>Required: No</li></ul><p>CodePen, JsFiddle requires an external JS library for dating.</p><h4 id="demo-csslib" tabindex="-1"><a class="header-anchor" href="#demo-csslib" aria-hidden="true">#</a> demo.cssLib</h4><ul><li>Type: <code>string[]</code></li><li>Required: No</li></ul><p>CodePen, JsFiddle need an external CSS library for dating.</p><div class="hint-container warning"><p class="hint-container-title">Note</p><p>The above two options are only used by third-party code demo service, you need to import these libraries in <code>head</code>.</p></div><h4 id="demo-jsfiddle" tabindex="-1"><a class="header-anchor" href="#demo-jsfiddle" aria-hidden="true">#</a> demo.jsfiddle</h4><ul><li>Type: <code>boolean</code></li><li>Default value: <code>true</code></li></ul><p>Whether to display the JSFiddle button</p><h4 id="demo-codepen" tabindex="-1"><a class="header-anchor" href="#demo-codepen" aria-hidden="true">#</a> demo.codepen</h4><ul><li>Type: <code>boolean</code></li><li>Default value: <code>true</code></li></ul><p>Whether to display the CodePen button</p><h4 id="demo-codepenlayout" tabindex="-1"><a class="header-anchor" href="#demo-codepenlayout" aria-hidden="true">#</a> demo.codepenLayout</h4><ul><li>Type: <code>&quot;top&quot; | &quot;left&quot; | &quot;correct&quot;</code></li><li>Default value: <code>&quot;left&quot;</code></li></ul><p>CodePen editor layout</p><h4 id="demo-codepeneditors" tabindex="-1"><a class="header-anchor" href="#demo-codepeneditors" aria-hidden="true">#</a> demo.codepenEditors</h4><ul><li>Type: <code>string</code></li><li>Default value: <code>&quot;101&quot;</code></li></ul><p>CodePen editor status</p><h4 id="others" tabindex="-1"><a class="header-anchor" href="#others" aria-hidden="true">#</a> others</h4><p>The following are the library links used by the third-party code demo service. Unless your environment cannot visit unpkg or the speed is slow, you probably don&#39;t need to override the default values.</p><h5 id="demo-babel" tabindex="-1"><a class="header-anchor" href="#demo-babel" aria-hidden="true">#</a> demo.babel</h5><p>Default value: <code>&quot;https://unpkg.com/@babel/standalone/babel.min.js&quot;</code></p><h5 id="demo-vue" tabindex="-1"><a class="header-anchor" href="#demo-vue" aria-hidden="true">#</a> demo.vue</h5><p>Default value: <code>&quot;https://unpkg.com/vue/dist/vue.global.prod.js&quot;</code></p><h5 id="demo-react" tabindex="-1"><a class="header-anchor" href="#demo-react" aria-hidden="true">#</a> demo.react</h5><p>Default value: <code>&quot;https://unpkg.com/react/umd/react.production.min.js&quot;</code></p><h5 id="demo-reactdom" tabindex="-1"><a class="header-anchor" href="#demo-reactdom" aria-hidden="true">#</a> demo.reactDOM</h5><p>Default value: <code>&quot;https://unpkg.com/react-dom/umd/react-dom.production.min.js&quot;</code></p><h3 id="revealjs" tabindex="-1"><a class="header-anchor" href="#revealjs" aria-hidden="true">#</a> revealJs</h3><ul><li><p>Type: <code>RevealJsOptions | boolean</code></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">RevealJsPlugin</span> <span class="token operator">=</span> <span class="token string">&quot;highlight&quot;</span> <span class="token operator">|</span> <span class="token string">&quot;math&quot;</span> <span class="token operator">|</span> <span class="token string">&quot;search&quot;</span> <span class="token operator">|</span> <span class="token string">&quot;notes&quot;</span> <span class="token operator">|</span> <span class="token string">&quot;zoom&quot;</span><span class="token punctuation">;</span>

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
 * reveal.js options
 */</span>
<span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">RevealJsOptions</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * reveal.js plugins
   *
   * <span class="token keyword">@default</span> []
   */</span>
  plugins<span class="token operator">?</span><span class="token operator">:</span> RevealJsPlugin<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * reveal.js themes
   *
   * <span class="token keyword">@default</span> [&quot;auto&quot;]
   */</span>
  themes<span class="token operator">?</span><span class="token operator">:</span> RevealJsTheme<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Default: <code>false</code></p></li></ul><p>Whether to enable slides support. You can pass an option to control plugins and themes to import.</p><h3 id="delay" tabindex="-1"><a class="header-anchor" href="#delay" aria-hidden="true">#</a> delay</h3><ul><li>Type: <code>number</code></li><li>Default: <code>800</code></li></ul><p>The delay of operating dom, in ms.</p><div class="hint-container tip"><p class="hint-container-title">Tips</p><p>If the theme you are using has a switching animation, it is recommended to configure this option to <code>Switch animation duration + 200</code>.</p></div><h3 id="locales" tabindex="-1"><a class="header-anchor" href="#locales" aria-hidden="true">#</a> locales</h3><ul><li><p>Type: <code>MarkdownEnhanceLocaleConfig</code></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">MarkdownEnhanceLocaleData</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * Default Title text for info block
   */</span>
  info<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Default Title text for note block
   */</span>
  note<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Default Title text for tip block
   */</span>
  tip<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Default Title text for warning block
   */</span>
  warning<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Default Title text for danger block
   */</span>
  danger<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Default Title text for details block
   */</span>
  details<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">MarkdownEnhanceLocaleConfig</span> <span class="token punctuation">{</span>
  <span class="token punctuation">[</span>localePath<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> MarkdownEnhanceLocaleData<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Required: No</p></li></ul><p>Locales config for Markdown Enhance Plugin.</p><details class="hint-container details"><summary>Built-in Supported Languages</summary><ul><li><strong>Simplified Chinese</strong> (zh-CN)</li><li><strong>Traditional Chinese</strong> (zh-TW)</li><li><strong>English (United States)</strong> (en-US)</li><li><strong>German</strong> (de-DE)</li><li><strong>German (Australia)</strong> (de-AT)</li><li><strong>Russian</strong> (ru-RU)</li><li><strong>Ukrainian</strong> (uk-UA)</li><li><strong>Vietnamese</strong> (vi-VN)</li><li><strong>Portuguese (Brazil)</strong> (pt-BR)</li><li><strong>Polish</strong> (pl-PL)</li><li><strong>French</strong> (fr-FR)</li><li><strong>Spanish</strong> (es-ES)</li><li><strong>Slovak</strong> (sk-SK)</li><li><strong>Japanese</strong> (ja-JP)</li><li><strong>Turkish</strong> (tr-TR)</li><li><strong>Korean</strong> (ko-KR)</li><li><strong>Finnish</strong> (fi-FI)</li><li><strong>Indonesian</strong> (id-ID)</li><li><strong>Dutch</strong> (nl-NL)</li></ul></details><h2 id="client-config" tabindex="-1"><a class="header-anchor" href="#client-config" aria-hidden="true">#</a> Client Config</h2><h3 id="definemermaidconfig" tabindex="-1"><a class="header-anchor" href="#definemermaidconfig" aria-hidden="true">#</a> defineMermaidConfig</h3><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">defineMermaidConfig</span><span class="token operator">:</span> <span class="token punctuation">(</span>options<span class="token operator">:</span> MermaidConfig<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Define config which you want to pass to mermaid.</p><h3 id="definerevealjsconfig" tabindex="-1"><a class="header-anchor" href="#definerevealjsconfig" aria-hidden="true">#</a> defineRevealJsConfig</h3><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">defineRevealJsConfig</span><span class="token operator">:</span> <span class="token punctuation">(</span>options<span class="token operator">:</span> RevealOptions<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Define config which you want to pass to reveal.js.</p><h3 id="definevueplaygroundconfig" tabindex="-1"><a class="header-anchor" href="#definevueplaygroundconfig" aria-hidden="true">#</a> defineVuePlaygroundConfig</h3><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">VuePlaygroundOptions</span> <span class="token punctuation">{</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Define config which you want to pass to <code>@vue/repl</code>.</p>`,62);function K($,X){const l=o("ExternalLinkIcon"),i=o("RouterLink");return p(),d("div",null,[u,n("div",v,[m,n("p",null,[s("For full GFM syntax, see "),n("a",k,[s("GFM"),a(l)]),s(".")]),b,h]),g,n("ul",null,[f,y,n("li",null,[s("Details: "),n("ul",null,[n("li",null,[a(i,{to:"/guide/markdown/container.html"},{default:t(()=>[s("Custom Container")]),_:1})])])])]),w,n("ul",null,[x,_,n("li",null,[s("Details: "),n("ul",null,[n("li",null,[a(i,{to:"/guide/markdown/others.html#v-pre"},{default:t(()=>[s("v-pre wrapper")]),_:1})])])])]),q,n("ul",null,[T,D,n("li",null,[s("Details: "),n("ul",null,[n("li",null,[a(i,{to:"/guide/markdown/tabs.html"},{default:t(()=>[s("Tabs")]),_:1})])])])]),P,W,n("ul",null,[C,R,n("li",null,[s("Details: "),n("ul",null,[n("li",null,[a(i,{to:"/guide/markdown/code-tabs.html"},{default:t(()=>[s("Code Tabs")]),_:1})])])])]),S,O,n("ul",null,[j,z,n("li",null,[s("Details: "),n("ul",null,[n("li",null,[a(i,{to:"/guide/markdown/align.html"},{default:t(()=>[s("Align")]),_:1})])])])]),M,L,n("ul",null,[E,n("li",null,[F,n("ul",null,[n("li",null,[a(i,{to:"/guide/markdown/attrs.html"},{default:t(()=>[s("Attrs")]),_:1})])])])]),I,n("p",null,[s("Please see "),n("a",J,[s("Katex Docs"),a(l)]),s(" for available options.")]),V,G,N,n("p",null,[s("Please see "),n("a",Y,[s("source code"),a(l)]),s(" for available options.")]),U,n("p",null,[s("Whether to enable "),n("a",A,[s("Mermaid"),a(l)]),s(" support, you can pass in a config object to customize the behavior of Mermaid.")]),B])}const Z=c(r,[["render",K],["__file","config.html.vue"]]);export{Z as default};
