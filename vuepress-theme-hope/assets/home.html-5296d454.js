import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{r as l,o,c,a as u,b as n,d as s,e,w as t,f as p}from"./app-d630ecd8.js";const d="/vuepress-theme-hope/assets/home-light-b511a795.jpg",k="/vuepress-theme-hope/assets/home-dark-4b9180d3.jpg",r={},v=n("p",null,[n("code",null,"vuepress-theme-hope"),s(" improves the default home page.")],-1),m=n("p",null,[s("To use it, set "),n("code",null,"home: true"),s(" in page frontmatter. Any extra content after the "),n("code",null,"YAML front matter"),s(" will be parsed as normal Markdown and rendered after the features section.")],-1),b=n("p",null,[n("img",{src:d,alt:"Screenshot","data-mode":"lightmode-only",loading:"lazy"}),n("img",{src:k,alt:"Screenshot","data-mode":"darkmode-only",loading:"lazy"})],-1),h=p('<h2 id="site-information" tabindex="-1"><a class="header-anchor" href="#site-information" aria-hidden="true">#</a> Site Information</h2><p>You can use <code>heroText</code> to set the main title and <code>tagline</code> to set the subtitle.</p><p>If you have a logo, you can place it in the <code>public</code> folder and set it via <code>heroImage</code>, if you want to display another logo in night mode, you can use <code>heroImageDark</code>. For better A11y, we recommend that you set the description of Logo to <code>heroAlt</code>.</p><p>You can set the background image through <code>bgImage</code> and <code>bgImageDark</code>, but you need to pay attention that you must fill in the full URL or absolute path. If you want the information to be displayed in full screen, you can set <code>heroFullScreen: true</code>.</p><p>If you need to customize some styles, you can set the style of the logo and background image through <code>heroImageStyle</code> and <code>bgImageStyle</code>.</p><h2 id="home-button" tabindex="-1"><a class="header-anchor" href="#home-button" aria-hidden="true">#</a> Home button</h2><p>You can display some important links in the form of buttons on the home page.</p><p>You can set them via <code>actions</code> which is an array where each element is an object with the following keys:</p><ul><li><code>text</code>: button text</li><li><code>link</code>: button link</li><li><code>type</code>: button type (only <code>&quot;primary&quot;</code> and <code>&quot;default&quot;</code> (default) are supported)</li></ul><h2 id="project-features-legacy" tabindex="-1"><a class="header-anchor" href="#project-features-legacy" aria-hidden="true">#</a> Project features (legacy)</h2><p>You can set and display item features through <code>features</code>, which is an array, each element is an object, containing the following keys:</p><ul><li><code>title</code>: title</li><li><code>details</code>: details</li><li><code>icon</code> (optional): can be filled with full path or absolute path image link, or FontClass</li><li><code>link</code> (optional): link address</li></ul><h2 id="project-highlights-and-features" tabindex="-1"><a class="header-anchor" href="#project-highlights-and-features" aria-hidden="true">#</a> Project Highlights and features</h2><p>You can set and display project features and highlights through <code>highlights</code>, which is an array, each element is an object, representing a highlight or feature section.</p><p>Highlight section use <code>highlights</code> to set highlights and feature section use <code>features</code> to set features (you should only set one of them). Both of them are arrays, each element is an object, representing a highlight or feature item:</p><ul><li><code>title</code>: title, HTML string is supported</li><li><code>details</code>: details, HTML string is supported</li><li><code>icon</code> (optional): can be filled with full path or absolute path image link, or FontClass</li><li><code>link</code> (optional): link address</li></ul><p>You can also set the following optional keys:</p><ul><li><code>header</code>: section title, supports HTML string</li><li><code>description</code>: section description, supports HTML string</li><li><code>color</code>: Text color</li><li><code>image</code>: Section image</li><li><code>imageDark</code>: Section image used in darkmode</li><li><code>bgImage</code>: Section background image</li><li><code>bgImageDark</code>: Section background image used in darkmode</li><li><code>bgImageStyle</code>: Section background image styles</li></ul><p>Highlights also support the following properties:</p><ul><li><code>type</code>: <code>&quot;order&quot;</code>, <code>&quot;un-order&quot;</code>(default) or <code>&quot;no-order&quot;</code></li></ul>',20),y={class:"hint-container info"},g=n("p",{class:"hint-container-title"},"Info",-1),f=n("h2",{id:"demo",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#demo","aria-hidden":"true"},"#"),s(" Demo")],-1),w=p(`<details class="hint-container details"><summary>Feature Homepage Code</summary><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token front-matter-block"><span class="token punctuation">---</span>
<span class="token front-matter yaml language-yaml"><span class="token key atrule">home</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
<span class="token key atrule">icon</span><span class="token punctuation">:</span> home
<span class="token key atrule">title</span><span class="token punctuation">:</span> Project Home with features
<span class="token key atrule">heroImage</span><span class="token punctuation">:</span> /logo.svg
<span class="token key atrule">heroText</span><span class="token punctuation">:</span> VuePress Theme Hope
<span class="token key atrule">tagline</span><span class="token punctuation">:</span> A VuePress theme with tons of features✨
<span class="token key atrule">actions</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">text</span><span class="token punctuation">:</span> Tutorial 🧭
    <span class="token key atrule">link</span><span class="token punctuation">:</span> /cookbook/tutorial/
    <span class="token key atrule">type</span><span class="token punctuation">:</span> primary

  <span class="token punctuation">-</span> <span class="token key atrule">text</span><span class="token punctuation">:</span> Intro 💡
    <span class="token key atrule">link</span><span class="token punctuation">:</span> /guide/get<span class="token punctuation">-</span>started/intro.html

  <span class="token punctuation">-</span> <span class="token key atrule">text</span><span class="token punctuation">:</span> Config 🛠
    <span class="token key atrule">link</span><span class="token punctuation">:</span> /config/

  <span class="token punctuation">-</span> <span class="token key atrule">text</span><span class="token punctuation">:</span> Online Demo 🪀
    <span class="token key atrule">link</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//stackblitz.com/fork/vuepress<span class="token punctuation">-</span>theme<span class="token punctuation">-</span>hope

<span class="token key atrule">features</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> Markdown Enhance
    <span class="token key atrule">icon</span><span class="token punctuation">:</span> fab fa<span class="token punctuation">-</span>markdown
    <span class="token key atrule">details</span><span class="token punctuation">:</span> Add align<span class="token punctuation">,</span> sup/sub script<span class="token punctuation">,</span> footnote<span class="token punctuation">,</span> tasklist<span class="token punctuation">,</span> tex<span class="token punctuation">,</span> flowchart<span class="token punctuation">,</span> diagram<span class="token punctuation">,</span> mark and presentation support in Markdown
    <span class="token key atrule">link</span><span class="token punctuation">:</span> /guide/markdown/

  <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> Slide Page
    <span class="token key atrule">icon</span><span class="token punctuation">:</span> person<span class="token punctuation">-</span>chalkboard
    <span class="token key atrule">details</span><span class="token punctuation">:</span> Adding slide pages to display things you like
    <span class="token key atrule">link</span><span class="token punctuation">:</span> /guide/layout/slides

  <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> Layout Enhancement
    <span class="token key atrule">icon</span><span class="token punctuation">:</span> object<span class="token punctuation">-</span>group
    <span class="token key atrule">details</span><span class="token punctuation">:</span> Adding breadcrumb<span class="token punctuation">,</span> footer<span class="token punctuation">,</span> improved navbar<span class="token punctuation">,</span> improved page nav and etc.
    <span class="token key atrule">link</span><span class="token punctuation">:</span> /guide/layout/

  <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> Pageviews and Comments
    <span class="token key atrule">icon</span><span class="token punctuation">:</span> comment<span class="token punctuation">-</span>dots
    <span class="token key atrule">details</span><span class="token punctuation">:</span> Start pageview statistics and comment support with Waline
    <span class="token key atrule">link</span><span class="token punctuation">:</span> /guide/feature/comment.html

  <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> Article Information
    <span class="token key atrule">icon</span><span class="token punctuation">:</span> circle<span class="token punctuation">-</span>info
    <span class="token key atrule">details</span><span class="token punctuation">:</span> Add author<span class="token punctuation">,</span> writing date<span class="token punctuation">,</span> reading time<span class="token punctuation">,</span> word count and other information to your article
    <span class="token key atrule">link</span><span class="token punctuation">:</span> /guide/feature/page<span class="token punctuation">-</span>info.html

  <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> Blog Support
    <span class="token key atrule">icon</span><span class="token punctuation">:</span> blog
    <span class="token key atrule">details</span><span class="token punctuation">:</span> Listing your articles with their dates<span class="token punctuation">,</span> tags and categories with some awesome layouts
    <span class="token key atrule">link</span><span class="token punctuation">:</span> /guide/blog/

  <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> Customizable Theme Color
    <span class="token key atrule">icon</span><span class="token punctuation">:</span> palette
    <span class="token key atrule">details</span><span class="token punctuation">:</span> Customize theme color
    <span class="token key atrule">link</span><span class="token punctuation">:</span> /guide/interface/theme<span class="token punctuation">-</span>color.html

  <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> Dark Mode
    <span class="token key atrule">icon</span><span class="token punctuation">:</span> circle<span class="token punctuation">-</span>half<span class="token punctuation">-</span>stroke
    <span class="token key atrule">details</span><span class="token punctuation">:</span> Switch between light and dark modes freely
    <span class="token key atrule">link</span><span class="token punctuation">:</span> /guide/interface/darkmode.html

  <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> Full A11y support
    <span class="token key atrule">icon</span><span class="token punctuation">:</span> universal<span class="token punctuation">-</span>access
    <span class="token key atrule">details</span><span class="token punctuation">:</span> Full support of accessibility in your site
    <span class="token key atrule">link</span><span class="token punctuation">:</span> /guide/interface/accessibility.html

  <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> Article Encryption
    <span class="token key atrule">icon</span><span class="token punctuation">:</span> lock
    <span class="token key atrule">details</span><span class="token punctuation">:</span> Encrypt you articles based on page links<span class="token punctuation">,</span> so that only the one you want could see them
    <span class="token key atrule">link</span><span class="token punctuation">:</span> /guide/feature/encrypt.html

  <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> Search
    <span class="token key atrule">icon</span><span class="token punctuation">:</span> search
    <span class="token key atrule">details</span><span class="token punctuation">:</span> Support docsearch and client search
    <span class="token key atrule">link</span><span class="token punctuation">:</span> /guide/feature/search.html

  <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> Copy Code Blocks
    <span class="token key atrule">icon</span><span class="token punctuation">:</span> copy
    <span class="token key atrule">details</span><span class="token punctuation">:</span> Copy codes with one click in code blocks
    <span class="token key atrule">link</span><span class="token punctuation">:</span> /guide/feature/copy<span class="token punctuation">-</span>code.html

  <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> Image Preview
    <span class="token key atrule">icon</span><span class="token punctuation">:</span> image
    <span class="token key atrule">details</span><span class="token punctuation">:</span> Support viewing<span class="token punctuation">,</span> zooming<span class="token punctuation">,</span> sharing your page images like a gallery
    <span class="token key atrule">link</span><span class="token punctuation">:</span> /guide/feature/photo<span class="token punctuation">-</span>swipe.html

  <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> SEO Enhancement
    <span class="token key atrule">icon</span><span class="token punctuation">:</span> dumbbell
    <span class="token key atrule">details</span><span class="token punctuation">:</span> Optimize pages for search engines
    <span class="token key atrule">link</span><span class="token punctuation">:</span> /guide/advanced/seo.html

  <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> Sitemap
    <span class="token key atrule">icon</span><span class="token punctuation">:</span> sitemap
    <span class="token key atrule">details</span><span class="token punctuation">:</span> Generate a Sitemap for your site
    <span class="token key atrule">link</span><span class="token punctuation">:</span> /guide/advanced/sitemap.html

  <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> Feed
    <span class="token key atrule">icon</span><span class="token punctuation">:</span> rss
    <span class="token key atrule">details</span><span class="token punctuation">:</span> Generate feed to allow users to subscribe it
    <span class="token key atrule">link</span><span class="token punctuation">:</span> /guide/advanced/feed.html

  <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> PWA
    <span class="token key atrule">icon</span><span class="token punctuation">:</span> mobile<span class="token punctuation">-</span>screen
    <span class="token key atrule">details</span><span class="token punctuation">:</span> Make your site more like an APP
    <span class="token key atrule">link</span><span class="token punctuation">:</span> /guide/advanced/pwa.html

  <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> More New Features
    <span class="token key atrule">icon</span><span class="token punctuation">:</span> ellipsis
    <span class="token key atrule">details</span><span class="token punctuation">:</span> Including icon support<span class="token punctuation">,</span> fullscreen button<span class="token punctuation">,</span> etc.
    <span class="token key atrule">link</span><span class="token punctuation">:</span> /guide/feature/

<span class="token key atrule">copyright</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
<span class="token key atrule">footer</span><span class="token punctuation">:</span> MIT Licensed <span class="token punctuation">|</span> Copyright © 2019<span class="token punctuation">-</span>present Mr.Hope</span>
<span class="token punctuation">---</span></span>

<span class="token title important"><span class="token punctuation">##</span> 🛠Install</span>

Create a new vuepress-theme-hope project in <span class="token code-snippet code keyword">\`[dir]\`</span> directory under the current path:

::: code-tabs#shell

@tab pnpm

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">bash</span>
<span class="token code-block language-bash language-bash"><span class="token function">pnpm</span> create vuepress-theme-hope <span class="token punctuation">[</span>dir<span class="token punctuation">]</span></span>
<span class="token punctuation">\`\`\`</span></span>

@tab yarn

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">bash</span>
<span class="token code-block language-bash language-bash"><span class="token function">yarn</span> create vuepress-theme-hope <span class="token punctuation">[</span>dir<span class="token punctuation">]</span></span>
<span class="token punctuation">\`\`\`</span></span>

@tab npm

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">bash</span>
<span class="token code-block language-bash language-bash"><span class="token function">npm</span> init vuepress-theme-hope <span class="token punctuation">[</span>dir<span class="token punctuation">]</span></span>
<span class="token punctuation">\`\`\`</span></span>

:::

To add vuepress-theme-hope as docs builder to an existing project, run the following command in the project root directory:

::: code-tabs#shell

@tab pnpm

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">bash</span>
<span class="token code-block language-bash language-bash"><span class="token function">pnpm</span> create vuepress-theme-hope <span class="token function">add</span> <span class="token punctuation">[</span>dir<span class="token punctuation">]</span></span>
<span class="token punctuation">\`\`\`</span></span>

@tab yarn

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">bash</span>
<span class="token code-block language-bash language-bash"><span class="token function">yarn</span> create vuepress-theme-hope <span class="token function">add</span> <span class="token punctuation">[</span>dir<span class="token punctuation">]</span></span>
<span class="token punctuation">\`\`\`</span></span>

@tab npm

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">bash</span>
<span class="token code-block language-bash language-bash"><span class="token function">npm</span> init vuepress-theme-hope <span class="token function">add</span> <span class="token punctuation">[</span>dir<span class="token punctuation">]</span></span>
<span class="token punctuation">\`\`\`</span></span>

:::

<span class="token title important"><span class="token punctuation">##</span> 🚀Usage</span>

::: code-tabs#language

@tab TS

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">ts</span>
<span class="token code-block language-ts language-ts"><span class="token comment">// .vuepress/config.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineUserConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vuepress&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> hopeTheme <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vuepress-theme-hope&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineUserConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  theme<span class="token operator">:</span> <span class="token function">hopeTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token comment">// your theme config here</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="token punctuation">\`\`\`</span></span>

@tab JS

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">js</span>
<span class="token code-block language-js language-js"><span class="token comment">// .vuepress/config.js</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> hopeTheme <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vuepress-theme-hope&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">theme</span><span class="token operator">:</span> <span class="token function">hopeTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token comment">// your theme config here</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="token punctuation">\`\`\`</span></span>

:::

<span class="token title important"><span class="token punctuation">##</span> Step-by-Step Tutorial</span>

<span class="token list punctuation">-</span> <span class="token url">[<span class="token content">Tutorial</span>](<span class="token url">../cookbook/tutorial/README.md</span>)</span>

<span class="token title important"><span class="token punctuation">##</span> Telegram Group</span>

<span class="token list punctuation">-</span> <span class="token url">[<span class="token content">vuepressthemehope</span>](<span class="token url">https://t.me/vuepressthemehope</span>)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><p>::: detailsHighlight Homepage Code</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token front-matter-block"><span class="token punctuation">---</span>
<span class="token front-matter yaml language-yaml"><span class="token key atrule">containerClass</span><span class="token punctuation">:</span> home
<span class="token key atrule">home</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
<span class="token key atrule">icon</span><span class="token punctuation">:</span> home
<span class="token key atrule">title</span><span class="token punctuation">:</span> Home
<span class="token key atrule">heroImage</span><span class="token punctuation">:</span> /logo.svg
<span class="token key atrule">bgImage</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//theme<span class="token punctuation">-</span>hope<span class="token punctuation">-</span>assets.vuejs.press/bg/6<span class="token punctuation">-</span>light.svg
<span class="token key atrule">bgImageDark</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//theme<span class="token punctuation">-</span>hope<span class="token punctuation">-</span>assets.vuejs.press/bg/6<span class="token punctuation">-</span>dark.svg
<span class="token key atrule">bgImageStyle</span><span class="token punctuation">:</span>
  <span class="token key atrule">background-attachment</span><span class="token punctuation">:</span> fixed
<span class="token key atrule">heroText</span><span class="token punctuation">:</span> VuePress Theme Hope
<span class="token key atrule">tagline</span><span class="token punctuation">:</span> A VuePress theme with tons of features✨
<span class="token key atrule">actions</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">text</span><span class="token punctuation">:</span> Tutorial 🧭
    <span class="token key atrule">link</span><span class="token punctuation">:</span> ./cookbook/tutorial/
    <span class="token key atrule">type</span><span class="token punctuation">:</span> primary

  <span class="token punctuation">-</span> <span class="token key atrule">text</span><span class="token punctuation">:</span> Intro 💡
    <span class="token key atrule">link</span><span class="token punctuation">:</span> ./guide/get<span class="token punctuation">-</span>started/intro.html

  <span class="token punctuation">-</span> <span class="token key atrule">text</span><span class="token punctuation">:</span> Config 🛠
    <span class="token key atrule">link</span><span class="token punctuation">:</span> ./config/

  <span class="token punctuation">-</span> <span class="token key atrule">text</span><span class="token punctuation">:</span> Online Demo 🪀
    <span class="token key atrule">link</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//stackblitz.com/fork/vuepress<span class="token punctuation">-</span>theme<span class="token punctuation">-</span>hope

<span class="token key atrule">highlights</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">header</span><span class="token punctuation">:</span> Easy to install
    <span class="token key atrule">image</span><span class="token punctuation">:</span> /assets/image/box.svg
    <span class="token key atrule">bgImage</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//theme<span class="token punctuation">-</span>hope<span class="token punctuation">-</span>assets.vuejs.press/bg/3<span class="token punctuation">-</span>light.svg
    <span class="token key atrule">bgImageDark</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//theme<span class="token punctuation">-</span>hope<span class="token punctuation">-</span>assets.vuejs.press/bg/3<span class="token punctuation">-</span>dark.svg
    <span class="token key atrule">highlights</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> Run &lt;code<span class="token punctuation">&gt;</span>pnpm create vuepress<span class="token punctuation">-</span>theme<span class="token punctuation">-</span>hope hope<span class="token punctuation">-</span>project&lt;/code<span class="token punctuation">&gt;</span> to create a new project with this theme.
      <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> Run &lt;code<span class="token punctuation">&gt;</span>pnpm create vuepress<span class="token punctuation">-</span>theme<span class="token punctuation">-</span>hope add .&lt;/code<span class="token punctuation">&gt;</span> in your project root to create a new project with this theme.

  <span class="token punctuation">-</span> <span class="token key atrule">header</span><span class="token punctuation">:</span> Add things you want in markdown
    <span class="token key atrule">description</span><span class="token punctuation">:</span> We extended the standard commonMark specification and added tons of new features for you.
    <span class="token key atrule">image</span><span class="token punctuation">:</span> /assets/image/markdown.svg
    <span class="token key atrule">bgImage</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//theme<span class="token punctuation">-</span>hope<span class="token punctuation">-</span>assets.vuejs.press/bg/2<span class="token punctuation">-</span>light.svg
    <span class="token key atrule">bgImageDark</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//theme<span class="token punctuation">-</span>hope<span class="token punctuation">-</span>assets.vuejs.press/bg/2<span class="token punctuation">-</span>dark.svg
    <span class="token key atrule">bgImageStyle</span><span class="token punctuation">:</span>
      <span class="token key atrule">background-repeat</span><span class="token punctuation">:</span> repeat
      <span class="token key atrule">background-size</span><span class="token punctuation">:</span> initial
    <span class="token key atrule">features</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> Links Check
        <span class="token key atrule">icon</span><span class="token punctuation">:</span> clipboard<span class="token punctuation">-</span>check
        <span class="token key atrule">details</span><span class="token punctuation">:</span> Check markdown links
        <span class="token key atrule">link</span><span class="token punctuation">:</span> ./guide/markdown/others.html<span class="token comment">#link-check</span>

      <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> Custom Container
        <span class="token key atrule">icon</span><span class="token punctuation">:</span> box<span class="token punctuation">-</span>archive
        <span class="token key atrule">details</span><span class="token punctuation">:</span> Decorate Markdown content with styles
        <span class="token key atrule">link</span><span class="token punctuation">:</span> ./guide/markdown/container.html

      <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> Tabs
        <span class="token key atrule">icon</span><span class="token punctuation">:</span> table<span class="token punctuation">-</span>columns
        <span class="token key atrule">details</span><span class="token punctuation">:</span> Group similar content with tabs and switch them together
        <span class="token key atrule">link</span><span class="token punctuation">:</span> ./guide/markdown/tabs.html

      <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> Code Tabs
        <span class="token key atrule">icon</span><span class="token punctuation">:</span> code
        <span class="token key atrule">details</span><span class="token punctuation">:</span> Group similar codes with tabs
        <span class="token key atrule">link</span><span class="token punctuation">:</span> ./guide/markdown/code<span class="token punctuation">-</span>tabs.html

      <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> Custom Align
        <span class="token key atrule">icon</span><span class="token punctuation">:</span> align<span class="token punctuation">-</span>center
        <span class="token key atrule">details</span><span class="token punctuation">:</span> Let you decide to align paragraphs in the way you like
        <span class="token key atrule">link</span><span class="token punctuation">:</span> ./guide/markdown/align.html

      <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> Attrs support
        <span class="token key atrule">icon</span><span class="token punctuation">:</span> code
        <span class="token key atrule">details</span><span class="token punctuation">:</span> Allow you to add attributes for Markdown content
        <span class="token key atrule">link</span><span class="token punctuation">:</span> ./guide/markdown/attrs.html

      <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> Superscript and subscript support
        <span class="token key atrule">icon</span><span class="token punctuation">:</span> superscript
        <span class="token key atrule">details</span><span class="token punctuation">:</span> Your Markdown now support superscript and subscript
        <span class="token key atrule">link</span><span class="token punctuation">:</span> ./guide/markdown/sup<span class="token punctuation">-</span>sub.html

      <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> Footnote support
        <span class="token key atrule">icon</span><span class="token punctuation">:</span> quote<span class="token punctuation">-</span>left
        <span class="token key atrule">details</span><span class="token punctuation">:</span> Your Markdown now support footnotes
        <span class="token key atrule">link</span><span class="token punctuation">:</span> ./guide/markdown/footnote.html

      <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> Mark Support
        <span class="token key atrule">icon</span><span class="token punctuation">:</span> highlighter
        <span class="token key atrule">details</span><span class="token punctuation">:</span> Mark words and sentences in Markdown
        <span class="token key atrule">link</span><span class="token punctuation">:</span> ./guide/markdown/mark.html

      <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> Tasklist Support
        <span class="token key atrule">icon</span><span class="token punctuation">:</span> square<span class="token punctuation">-</span>check
        <span class="token key atrule">details</span><span class="token punctuation">:</span> Use tasklist in Markdown
        <span class="token key atrule">link</span><span class="token punctuation">:</span> ./guide/markdown/tasklist.html

      <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> image syntax
        <span class="token key atrule">icon</span><span class="token punctuation">:</span> image
        <span class="token key atrule">details</span><span class="token punctuation">:</span> improve syntax to specify size and color scheme
        <span class="token key atrule">link</span><span class="token punctuation">:</span> ./guide/markdown/image.html

      <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> Card Support
        <span class="token key atrule">icon</span><span class="token punctuation">:</span> square
        <span class="token key atrule">details</span><span class="token punctuation">:</span> Add cards in Markdown
        <span class="token key atrule">link</span><span class="token punctuation">:</span> ./guide/markdown/card.html

      <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> Chart Support
        <span class="token key atrule">icon</span><span class="token punctuation">:</span> chart<span class="token punctuation">-</span>simple
        <span class="token key atrule">details</span><span class="token punctuation">:</span> Display charts in Markdown
        <span class="token key atrule">link</span><span class="token punctuation">:</span> ./guide/markdown/chart.html

      <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> Flowchart Support
        <span class="token key atrule">icon</span><span class="token punctuation">:</span> route
        <span class="token key atrule">details</span><span class="token punctuation">:</span> Create your flowchart in Markdown
        <span class="token key atrule">link</span><span class="token punctuation">:</span> ./guide/markdown/flowchart.html

      <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> Mermaid Support
        <span class="token key atrule">icon</span><span class="token punctuation">:</span> chart<span class="token punctuation">-</span>pie
        <span class="token key atrule">details</span><span class="token punctuation">:</span> Add mermaid diagram in Markdown
        <span class="token key atrule">link</span><span class="token punctuation">:</span> ./guide/markdown/mermaid.html

      <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> Tex Support
        <span class="token key atrule">icon</span><span class="token punctuation">:</span> square<span class="token punctuation">-</span>root<span class="token punctuation">-</span>variable
        <span class="token key atrule">details</span><span class="token punctuation">:</span> Markdown now have Tex Support so you can write your formula
        <span class="token key atrule">link</span><span class="token punctuation">:</span> ./guide/markdown/tex.html

      <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> Include snippet Support
        <span class="token key atrule">icon</span><span class="token punctuation">:</span> fab fa<span class="token punctuation">-</span>markdown
        <span class="token key atrule">details</span><span class="token punctuation">:</span> split your docs with different parts and import them in Markdown
        <span class="token key atrule">link</span><span class="token punctuation">:</span> ./guide/markdown/include.html

      <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> Playground Support
        <span class="token key atrule">icon</span><span class="token punctuation">:</span> code
        <span class="token key atrule">details</span><span class="token punctuation">:</span> You can add playground in Markdown files
        <span class="token key atrule">link</span><span class="token punctuation">:</span> ./guide/markdown/playground.html

      <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> Vue playground Support
        <span class="token key atrule">icon</span><span class="token punctuation">:</span> fab fa<span class="token punctuation">-</span>vuejs
        <span class="token key atrule">details</span><span class="token punctuation">:</span> Show living vue component in playground
        <span class="token key atrule">link</span><span class="token punctuation">:</span> ./guide/markdown/vue<span class="token punctuation">-</span>playground.html

      <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> Code Demo Support
        <span class="token key atrule">icon</span><span class="token punctuation">:</span> laptop<span class="token punctuation">-</span>code
        <span class="token key atrule">details</span><span class="token punctuation">:</span> You can insert code demo easily
        <span class="token key atrule">link</span><span class="token punctuation">:</span> ./guide/markdown/demo/

      <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> Presentation Support
        <span class="token key atrule">icon</span><span class="token punctuation">:</span> person<span class="token punctuation">-</span>chalkboard
        <span class="token key atrule">details</span><span class="token punctuation">:</span> Insert presentation in Markdown files via Reveal.js
        <span class="token key atrule">link</span><span class="token punctuation">:</span> ./guide/markdown/revealjs/

  <span class="token punctuation">-</span> <span class="token key atrule">header</span><span class="token punctuation">:</span> Improved layouts
    <span class="token key atrule">description</span><span class="token punctuation">:</span> An awesome responsive layout with full a11y support.
    <span class="token key atrule">image</span><span class="token punctuation">:</span> /assets/image/layout.svg
    <span class="token key atrule">bgImage</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//theme<span class="token punctuation">-</span>hope<span class="token punctuation">-</span>assets.vuejs.press/bg/5<span class="token punctuation">-</span>light.svg
    <span class="token key atrule">bgImageDark</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//theme<span class="token punctuation">-</span>hope<span class="token punctuation">-</span>assets.vuejs.press/bg/5<span class="token punctuation">-</span>dark.svg
    <span class="token key atrule">highlights</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> Layout
        <span class="token key atrule">icon</span><span class="token punctuation">:</span> object<span class="token punctuation">-</span>group
        <span class="token key atrule">details</span><span class="token punctuation">:</span> Improved navbar<span class="token punctuation">,</span> sidebar<span class="token punctuation">,</span> page nav and new breadcrumb<span class="token punctuation">,</span> footer and toc. We also bring you a brand new homepage.
        <span class="token key atrule">link</span><span class="token punctuation">:</span> ./guide/layout/

      <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> Dark Mode
        <span class="token key atrule">icon</span><span class="token punctuation">:</span> circle<span class="token punctuation">-</span>half<span class="token punctuation">-</span>stroke
        <span class="token key atrule">details</span><span class="token punctuation">:</span> Switch between light and dark modes freely
        <span class="token key atrule">link</span><span class="token punctuation">:</span> ./guide/interface/darkmode.html

      <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> Customizable Theme Color
        <span class="token key atrule">icon</span><span class="token punctuation">:</span> palette
        <span class="token key atrule">details</span><span class="token punctuation">:</span> Customize theme color
        <span class="token key atrule">link</span><span class="token punctuation">:</span> ./guide/interface/theme<span class="token punctuation">-</span>color.html

      <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> Slide Page
        <span class="token key atrule">icon</span><span class="token punctuation">:</span> person<span class="token punctuation">-</span>chalkboard
        <span class="token key atrule">details</span><span class="token punctuation">:</span> Adding slide pages to display things you like
        <span class="token key atrule">link</span><span class="token punctuation">:</span> ./guide/layout/slides

      <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> More
        <span class="token key atrule">icon</span><span class="token punctuation">:</span> ellipsis
        <span class="token key atrule">details</span><span class="token punctuation">:</span> RTL layout<span class="token punctuation">,</span> print support<span class="token punctuation">,</span> fullscreen button<span class="token punctuation">,</span> etc.
        <span class="token key atrule">link</span><span class="token punctuation">:</span> ./guide/interface/others.html

  <span class="token punctuation">-</span> <span class="token key atrule">header</span><span class="token punctuation">:</span> New features
    <span class="token key atrule">image</span><span class="token punctuation">:</span> /assets/image/features.svg
    <span class="token key atrule">bgImage</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//theme<span class="token punctuation">-</span>hope<span class="token punctuation">-</span>assets.vuejs.press/bg/1<span class="token punctuation">-</span>light.svg
    <span class="token key atrule">bgImageDark</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//theme<span class="token punctuation">-</span>hope<span class="token punctuation">-</span>assets.vuejs.press/bg/1<span class="token punctuation">-</span>dark.svg
    <span class="token key atrule">features</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> Pageviews and Comments
        <span class="token key atrule">icon</span><span class="token punctuation">:</span> comment<span class="token punctuation">-</span>dots
        <span class="token key atrule">details</span><span class="token punctuation">:</span> Start pageview statistics and comment support with Waline
        <span class="token key atrule">link</span><span class="token punctuation">:</span> ./guide/feature/comment.html

      <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> Article Information
        <span class="token key atrule">icon</span><span class="token punctuation">:</span> circle<span class="token punctuation">-</span>info
        <span class="token key atrule">details</span><span class="token punctuation">:</span> Add author<span class="token punctuation">,</span> writing date<span class="token punctuation">,</span> reading time<span class="token punctuation">,</span> word count and other information to your article
        <span class="token key atrule">link</span><span class="token punctuation">:</span> ./guide/feature/page<span class="token punctuation">-</span>info.html

      <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> Article Encryption
        <span class="token key atrule">icon</span><span class="token punctuation">:</span> lock
        <span class="token key atrule">details</span><span class="token punctuation">:</span> Encrypt you articles based on page links<span class="token punctuation">,</span> so that only the one you want could see them
        <span class="token key atrule">link</span><span class="token punctuation">:</span> ./guide/feature/encrypt.html

      <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> Search
        <span class="token key atrule">icon</span><span class="token punctuation">:</span> search
        <span class="token key atrule">details</span><span class="token punctuation">:</span> Support docsearch and client search
        <span class="token key atrule">link</span><span class="token punctuation">:</span> ./guide/feature/search.html

      <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> Copy Code Blocks
        <span class="token key atrule">icon</span><span class="token punctuation">:</span> copy
        <span class="token key atrule">details</span><span class="token punctuation">:</span> Copy codes with one click in code blocks
        <span class="token key atrule">link</span><span class="token punctuation">:</span> ./guide/feature/copy<span class="token punctuation">-</span>code.html

      <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> Image Preview
        <span class="token key atrule">icon</span><span class="token punctuation">:</span> image
        <span class="token key atrule">details</span><span class="token punctuation">:</span> Support viewing<span class="token punctuation">,</span> zooming<span class="token punctuation">,</span> sharing your page images like a gallery
        <span class="token key atrule">link</span><span class="token punctuation">:</span> ./guide/feature/photo<span class="token punctuation">-</span>swipe.html

  <span class="token punctuation">-</span> <span class="token key atrule">header</span><span class="token punctuation">:</span> Blogging
    <span class="token key atrule">description</span><span class="token punctuation">:</span> Create personal blog with theme
    <span class="token key atrule">image</span><span class="token punctuation">:</span> /assets/image/blog.svg
    <span class="token key atrule">bgImage</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//theme<span class="token punctuation">-</span>hope<span class="token punctuation">-</span>assets.vuejs.press/bg/5<span class="token punctuation">-</span>light.svg
    <span class="token key atrule">bgImageDark</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//theme<span class="token punctuation">-</span>hope<span class="token punctuation">-</span>assets.vuejs.press/bg/5<span class="token punctuation">-</span>dark.svg
    <span class="token key atrule">highlights</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> Blog features
        <span class="token key atrule">icon</span><span class="token punctuation">:</span> blog
        <span class="token key atrule">details</span><span class="token punctuation">:</span> Listing your articles with their dates<span class="token punctuation">,</span> tags and categories
        <span class="token key atrule">link</span><span class="token punctuation">:</span> ./guide/blog/intro.html

      <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> Blog homepage
        <span class="token key atrule">icon</span><span class="token punctuation">:</span> blog
        <span class="token key atrule">details</span><span class="token punctuation">:</span> New blog homepage
        <span class="token key atrule">link</span><span class="token punctuation">:</span> ./guide/blog/home.html

      <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> Blogger info
        <span class="token key atrule">icon</span><span class="token punctuation">:</span> circle<span class="token punctuation">-</span>info
        <span class="token key atrule">details</span><span class="token punctuation">:</span> Customize avatar<span class="token punctuation">,</span> name<span class="token punctuation">,</span> slogan<span class="token punctuation">,</span> introduction and social links
        <span class="token key atrule">link</span><span class="token punctuation">:</span> ./guide/blog/blogger.html

      <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> Timeline
        <span class="token key atrule">icon</span><span class="token punctuation">:</span> clock
        <span class="token key atrule">details</span><span class="token punctuation">:</span> Read through blog posts in a timeline
        <span class="token key atrule">link</span><span class="token punctuation">:</span> ./guide/blog/timeline.html

  <span class="token punctuation">-</span> <span class="token key atrule">header</span><span class="token punctuation">:</span> Advanced
    <span class="token key atrule">description</span><span class="token punctuation">:</span> Advanced features to improve site SEO and user experience
    <span class="token key atrule">image</span><span class="token punctuation">:</span> /assets/image/advanced.svg
    <span class="token key atrule">bgImage</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//theme<span class="token punctuation">-</span>hope<span class="token punctuation">-</span>assets.vuejs.press/bg/4<span class="token punctuation">-</span>light.svg
    <span class="token key atrule">bgImageDark</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//theme<span class="token punctuation">-</span>hope<span class="token punctuation">-</span>assets.vuejs.press/bg/4<span class="token punctuation">-</span>dark.svg
    <span class="token key atrule">highlights</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> SEO Enhancement
        <span class="token key atrule">icon</span><span class="token punctuation">:</span> dumbbell
        <span class="token key atrule">details</span><span class="token punctuation">:</span> Optimize pages for search engines
        <span class="token key atrule">link</span><span class="token punctuation">:</span> ./guide/advanced/seo.html

      <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> Sitemap
        <span class="token key atrule">icon</span><span class="token punctuation">:</span> sitemap
        <span class="token key atrule">details</span><span class="token punctuation">:</span> Generate a Sitemap for your site
        <span class="token key atrule">link</span><span class="token punctuation">:</span> ./guide/advanced/sitemap.html

      <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> Feed
        <span class="token key atrule">icon</span><span class="token punctuation">:</span> rss
        <span class="token key atrule">details</span><span class="token punctuation">:</span> Generate feed to allow users to subscribe it
        <span class="token key atrule">link</span><span class="token punctuation">:</span> ./guide/advanced/feed.html

      <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> PWA
        <span class="token key atrule">icon</span><span class="token punctuation">:</span> mobile<span class="token punctuation">-</span>screen
        <span class="token key atrule">details</span><span class="token punctuation">:</span> Make your site more like an APP
        <span class="token key atrule">link</span><span class="token punctuation">:</span> ./guide/advanced/pwa.html

<span class="token key atrule">copyright</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
<span class="token key atrule">footer</span><span class="token punctuation">:</span> MIT Licensed <span class="token punctuation">|</span> Copyright © 2019<span class="token punctuation">-</span>present Mr.Hope</span>
<span class="token punctuation">---</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p>`,4);function S(j,I){const a=l("RouterLink");return o(),c("div",null,[v,m,b,u(" more "),h,n("div",y,[g,n("p",null,[s("For complete configuration items, see "),e(a,{to:"/config/frontmatter/home.html"},{default:t(()=>[s("Home Frontmatter Configuration")]),_:1}),s(".")])]),f,n("ul",null,[n("li",null,[n("p",null,[e(a,{to:"/demo/project-home.html"},{default:t(()=>[s("Project HomePage with features")]),_:1})])]),n("li",null,[n("p",null,[e(a,{to:"/"},{default:t(()=>[s("Project HomePage with highlights")]),_:1})])])]),w])}const M=i(r,[["render",S],["__file","home.html.vue"]]);export{M as default};
