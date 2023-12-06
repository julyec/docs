import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as e,f as a}from"./app-083c2955.js";const i={},l=a(`<h2 id="home" tabindex="-1"><a class="header-anchor" href="#home" aria-hidden="true">#</a> home</h2><ul><li>Type: <code>boolean</code></li><li>Default: <code>false</code></li></ul><p>Enable homepage style when setting to <code>true</code></p><h2 id="title" tabindex="-1"><a class="header-anchor" href="#title" aria-hidden="true">#</a> title</h2><ul><li>Type: <code>string</code></li><li>Required: No</li></ul><p>Page title, will be used in breadcrumb, seo, etc.</p><h2 id="herotext" tabindex="-1"><a class="header-anchor" href="#herotext" aria-hidden="true">#</a> heroText</h2><ul><li>Type: <code>string | false</code></li><li>Default: <code>&quot;Hello&quot;</code></li></ul><p>Hero Title</p><h2 id="tagline" tabindex="-1"><a class="header-anchor" href="#tagline" aria-hidden="true">#</a> tagline</h2><ul><li>Type: <code>string | false</code></li><li>Default: <code>&quot;Welcome to your VuePress site&quot;</code></li></ul><p>Short description in hero</p><h2 id="heroimage" tabindex="-1"><a class="header-anchor" href="#heroimage" aria-hidden="true">#</a> heroImage</h2><ul><li>Type: <code>string</code></li><li>Required: No</li></ul><p>Home hero (logo) image link, relative path is not supported.</p><h2 id="heroimagedark" tabindex="-1"><a class="header-anchor" href="#heroimagedark" aria-hidden="true">#</a> heroImageDark</h2><ul><li>Type: <code>string</code></li><li>Default: <code>heroImage</code></li></ul><p>Darkmode Home hero (logo) image link, relative path is not supported.</p><h2 id="heroalt" tabindex="-1"><a class="header-anchor" href="#heroalt" aria-hidden="true">#</a> heroAlt</h2><ul><li>Type: <code>string</code></li><li>Required: No</li></ul><p>Home icon alt text</p><h2 id="heroimagestyle" tabindex="-1"><a class="header-anchor" href="#heroimagestyle" aria-hidden="true">#</a> heroImageStyle</h2><ul><li>Type: <code>Record&lt;string, string&gt; | string</code></li><li>Required: No</li></ul><p>CSS style for home icon</p><h2 id="bgimage" tabindex="-1"><a class="header-anchor" href="#bgimage" aria-hidden="true">#</a> bgImage</h2><ul><li>Type: <code>string</code></li><li>Required: No</li></ul><p>Link of background image, relative path is not supported.</p><h2 id="bgimagedark" tabindex="-1"><a class="header-anchor" href="#bgimagedark" aria-hidden="true">#</a> bgImageDark</h2><ul><li>Type: <code>string</code></li><li>Default: <code>bgImage</code></li></ul><p>Link of darkmode background image, relative path is not supported.</p><h2 id="bgimagestyle" tabindex="-1"><a class="header-anchor" href="#bgimagestyle" aria-hidden="true">#</a> bgImageStyle</h2><ul><li>Type: <code>Record&lt;string, string&gt; | string</code></li><li>Required: No</li></ul><p>The CSS style of the background image.</p><h2 id="herofullscreen" tabindex="-1"><a class="header-anchor" href="#herofullscreen" aria-hidden="true">#</a> heroFullScreen</h2><ul><li>Type: <code>boolean</code></li><li>Default: <code>false</code></li></ul><p>Whether Hero is full screen displayed</p><h2 id="actions" tabindex="-1"><a class="header-anchor" href="#actions" aria-hidden="true">#</a> actions</h2><ul><li><p>Type: <code>ThemeHomeActionOptions[]</code></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">ThemeHomeActionOptions</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * Action name
   */</span>
  text<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Action link
   */</span>
  link<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Type of action
   * <span class="token keyword">@default</span> &#39;default&#39;
   */</span>
  type<span class="token operator">?</span><span class="token operator">:</span> <span class="token string">&quot;primary&quot;</span> <span class="token operator">|</span> <span class="token string">&quot;default&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Required: No</p></li></ul><p>Home actions</p><h2 id="highlights" tabindex="-1"><a class="header-anchor" href="#highlights" aria-hidden="true">#</a> highlights</h2><ul><li><p>Type: <code>(ThemeProjectHomeFeatureOptions |ThemeProjectHomeHighlightOptions)[]</code></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">ThemeProjectHomeHighlightItem</span> <span class="token punctuation">{</span>
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
   * Feature header
   */</span>
  header<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Feature section description, supports HTML string
   */</span>
  description<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Text color
   */</span>
  color<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Feature section image
   */</span>
  image<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Feature section image used in darkmode
   *
   * <span class="token keyword">@default</span> image
   */</span>
  imageDark<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Feature Background image
   */</span>
  bgImage<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Feature Background image used in darkmode
   *
   * <span class="token keyword">@default</span> bgImage
   */</span>
  bgImageDark<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Features Background image style
   */</span>
  bgImageStyle<span class="token operator">?</span><span class="token operator">:</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">string</span><span class="token operator">&gt;</span> <span class="token operator">|</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Features
   */</span>
  features<span class="token operator">:</span> ThemeProjectHomeFeatureItem<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">ThemeProjectHomeHighlightSection</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * Highlight section header, supports HTML string
   */</span>
  header<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Highlight section description, supports HTML string
   */</span>
  description<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Text color
   */</span>
  color<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Highlight section image
   */</span>
  image<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Highlight section image used in darkmode
   *
   * <span class="token keyword">@default</span> image
   */</span>
  imageDark<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Highlight Background image
   */</span>
  bgImage<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Highlight Background image used in darkmode
   *
   * <span class="token keyword">@default</span> bgImage
   */</span>
  bgImageDark<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Highlight Background image style
   */</span>
  bgImageStyle<span class="token operator">?</span><span class="token operator">:</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">string</span><span class="token operator">&gt;</span> <span class="token operator">|</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Highlight section list type
   *
   * <span class="token keyword">@default</span> un-order
   */</span>
  type<span class="token operator">?</span><span class="token operator">:</span> <span class="token string">&quot;order&quot;</span> <span class="token operator">|</span> <span class="token string">&quot;un-order&quot;</span> <span class="token operator">|</span> <span class="token string">&quot;no-order&quot;</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Highlights
   */</span>
  highlights<span class="token operator">?</span><span class="token operator">:</span> ThemeProjectHomeHighlightItem<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Required: No</p></li></ul><p>Highlights description.</p><h2 id="features" tabindex="-1"><a class="header-anchor" href="#features" aria-hidden="true">#</a> features</h2><ul><li><p>Type: <code>ThemeProjectHomeFeatureItem[]</code></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">ThemeProjectHomeFeatureItem</span> <span class="token punctuation">{</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Required: No</p></li></ul><p>Features description.</p>`,45),t=[l];function o(c,r){return s(),e("div",null,t)}const u=n(i,[["render",o],["__file","home.html.vue"]]);export{u as default};
