import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,f as e}from"./app-083c2955.js";const i={},l=e(`<h2 id="home" tabindex="-1"><a class="header-anchor" href="#home" aria-hidden="true">#</a> home</h2><ul><li>类型: <code>boolean</code></li><li>默认值: <code>false</code></li></ul><p>设置为 <code>true</code> 时启用首页样式</p><h2 id="title" tabindex="-1"><a class="header-anchor" href="#title" aria-hidden="true">#</a> title</h2><ul><li>类型: <code>string</code></li><li>必填: 否</li></ul><p>设置页面标题，会用于路径导航、页面增强等。</p><h2 id="herotext" tabindex="-1"><a class="header-anchor" href="#herotext" aria-hidden="true">#</a> heroText</h2><ul><li>类型: <code>string | false</code></li><li>默认值: <code>&quot;Hello&quot;</code></li></ul><p>主页标题</p><h2 id="tagline" tabindex="-1"><a class="header-anchor" href="#tagline" aria-hidden="true">#</a> tagline</h2><ul><li>类型: <code>string | false</code></li><li>默认值: <code>&quot;Welcome to your VuePress site&quot;</code></li></ul><p>附加文字描述</p><h2 id="heroimage" tabindex="-1"><a class="header-anchor" href="#heroimage" aria-hidden="true">#</a> heroImage</h2><ul><li>类型: <code>string</code></li><li>必填: 否</li></ul><p>主页图标 (logo) 链接，不支持相对路径。</p><h2 id="heroimagedark" tabindex="-1"><a class="header-anchor" href="#heroimagedark" aria-hidden="true">#</a> heroImageDark</h2><ul><li>类型: <code>string</code></li><li>默认值: <code>heroImage</code></li></ul><p>深色模式下主页图标 (logo) 链接，不支持相对路径。</p><h2 id="heroimagestyle" tabindex="-1"><a class="header-anchor" href="#heroimagestyle" aria-hidden="true">#</a> heroImageStyle</h2><ul><li>类型: <code>Record&lt;string, string&gt; | string</code></li><li>必填: 否</li></ul><p>首页图标的 CSS 样式</p><h2 id="heroalt" tabindex="-1"><a class="header-anchor" href="#heroalt" aria-hidden="true">#</a> heroAlt</h2><ul><li>类型: <code>string</code></li><li>必填: 否</li></ul><p>主页图标的替代文字</p><h2 id="bgimage" tabindex="-1"><a class="header-anchor" href="#bgimage" aria-hidden="true">#</a> bgImage</h2><ul><li>类型: <code>string</code></li><li>必填: 否</li></ul><p>背景图片的地址，不支持相对路径。</p><h2 id="bgimagedark" tabindex="-1"><a class="header-anchor" href="#bgimagedark" aria-hidden="true">#</a> bgImageDark</h2><ul><li>类型: <code>string</code></li><li>默认值: <code>bgImage</code></li></ul><p>深色模式下背景图片的地址，不支持相对路径。</p><h2 id="bgimagestyle" tabindex="-1"><a class="header-anchor" href="#bgimagestyle" aria-hidden="true">#</a> bgImageStyle</h2><ul><li>类型: <code>Record&lt;string, string&gt; | string</code></li><li>必填: 否</li></ul><p>背景图片的 CSS 样式。</p><h2 id="herofullscreen" tabindex="-1"><a class="header-anchor" href="#herofullscreen" aria-hidden="true">#</a> heroFullScreen</h2><ul><li>类型: <code>boolean</code></li><li>默认值: <code>false</code></li></ul><p>是否全屏显示 Hero</p><h2 id="actions" tabindex="-1"><a class="header-anchor" href="#actions" aria-hidden="true">#</a> actions</h2><ul><li><p>类型: <code>ThemeHomeActionOptions[]</code></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">ThemeHomeActionOptions</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * 操作名称
   */</span>
  text<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 操作链接
   */</span>
  link<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 操作类型
   * <span class="token keyword">@default</span> &#39;default&#39;
   */</span>
  type<span class="token operator">?</span><span class="token operator">:</span> <span class="token string">&quot;primary&quot;</span> <span class="token operator">|</span> <span class="token string">&quot;default&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>必填: 否</p></li></ul><p>主页操作</p><h2 id="highlights" tabindex="-1"><a class="header-anchor" href="#highlights" aria-hidden="true">#</a> highlights</h2><ul><li><p>类型: <code>(ThemeProjectHomeFeatureOptions | ThemeProjectHomeHighlightOptions)[]</code></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">ThemeProjectHomeHighlightItem</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * Item name, supports HTML string
   */</span>
  title<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Item description, supports HTML string
   */</span>
  details<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Item icon
   *
   * <span class="token keyword">@description</span> image link or icon fontClass are supported
   */</span>
  icon<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Item link
   */</span>
  link<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> <span class="token class-name">ThemeProjectHomeFeatureItem</span> <span class="token operator">=</span> ThemeProjectHomeHighlightItem<span class="token punctuation">;</span>

<span class="token keyword">interface</span> <span class="token class-name">ThemeProjectHomeFeatureOptions</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * 功能标题
   */</span>
  header<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 功能描述，支持 HTML 字符串
   */</span>
  description<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 文字颜色
   */</span>
  color<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 功能图像
   */</span>
  image<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 夜间模式使用的功能图片
   *
   * <span class="token keyword">@default</span> image
   */</span>
  imageDark<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 功能背景图
   */</span>
  bgImage<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 夜间模式使用的功能背景图
   *
   * <span class="token keyword">@default</span> bgImage
   */</span>
  bgImageDark<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 功能背景图样式
   */</span>
  bgImageStyle<span class="token operator">?</span><span class="token operator">:</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">string</span><span class="token operator">&gt;</span> <span class="token operator">|</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 功能
   */</span>
  features<span class="token operator">:</span> ThemeProjectHomeFeatureItem<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">ThemeProjectHomeHighlightSection</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * 亮点标题，支持 HTML 字符串
   */</span>
  header<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 亮点描述，支持 HTML 字符串
   */</span>
  description<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 文字颜色
   */</span>
  color<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 亮点图像
   */</span>
  image<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 夜间模式使用的亮点图片
   *
   * <span class="token keyword">@default</span> image
   */</span>
  imageDark<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 亮点背景图
   */</span>
  bgImage<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 夜间模式使用的亮点背景图
   *
   * <span class="token keyword">@default</span> bgImage
   */</span>
  bgImageDark<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 亮点背景图样式
   */</span>
  bgImageStyle<span class="token operator">?</span><span class="token operator">:</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">string</span><span class="token operator">&gt;</span> <span class="token operator">|</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 亮点列表类型
   *
   * <span class="token keyword">@default</span> un-order
   */</span>
  type<span class="token operator">?</span><span class="token operator">:</span> <span class="token string">&quot;order&quot;</span> <span class="token operator">|</span> <span class="token string">&quot;un-order&quot;</span> <span class="token operator">|</span> <span class="token string">&quot;no-order&quot;</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 亮点
   */</span>
  highlights<span class="token operator">?</span><span class="token operator">:</span> ThemeProjectHomeHighlightItem<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>必填: 否</p></li></ul><p>亮点描述。</p><h2 id="features" tabindex="-1"><a class="header-anchor" href="#features" aria-hidden="true">#</a> features</h2><ul><li><p>类型: <code>ThemeProjectHomeFeatureItem[]</code></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">ThemeProjectHomeFeatureItem</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * 项目名称，支持 HTML 字符串
   */</span>
  title<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 项目描述，支持 HTML 字符串
   */</span>
  details<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 项目图标
   *
   * <span class="token keyword">@description</span> 支持图片链接或者图标字体类
   */</span>
  icon<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 项目链接
   */</span>
  link<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>必填: 否</p></li></ul><p>功能描述。</p>`,45),t=[l];function o(c,p){return s(),a("div",null,t)}const u=n(i,[["render",o],["__file","home.html.vue"]]);export{u as default};
