import{_ as p}from"./plugin-vue_export-helper-c27b6911.js";import{r as i,o as c,c as u,a as o,b as n,d as s,e,w as t,f as l}from"./app-083c2955.js";const k="/vuepress-theme-hope/assets/home-light-048c8ffb.jpg",d="/vuepress-theme-hope/assets/home-dark-c80b26db.jpg",r={},v=n("p",null,[n("code",null,"vuepress-theme-hope"),s(" 保留了默认主题的首页配置，在此基础上改进样式与配置。")],-1),m=n("p",null,[s("如果想要使用它，请在 frontmatter 中设置 "),n("code",null,"home: true"),s("。任何 frontmatter 之后的内容将会以普通的 Markdown 被渲染，并插入到主页渲染内容的底部。")],-1),b=n("p",null,[n("img",{src:k,alt:"首页截图","data-mode":"lightmode-only",loading:"lazy"}),n("img",{src:d,alt:"首页截图","data-mode":"darkmode-only",loading:"lazy"})],-1),y=l('<h2 id="站点信息" tabindex="-1"><a class="header-anchor" href="#站点信息" aria-hidden="true">#</a> 站点信息</h2><p>你可以使用 <code>heroText</code> 设置主标题，并通过 <code>tagline</code> 设置副标题。</p><p>如果你有一个 Logo，你可以将其放置在 <code>public</code> 文件夹中，并通过 <code>heroImage</code> 设置它，如果你在夜间模式希望展示另一个 Logo， 可以使用 <code>heroImageDark</code>。为了更好的 A11y，我们建议你设置 Logo 的描述到 <code>heroAlt</code>。</p><p>你可以通过 <code>bgImage</code> 和 <code>bgImageDark</code> 设置背景图片，但需要注意必须填入完整 URL 或绝对路径。如果你希望信息全屏展示，你可以设置 <code>heroFullScreen: true</code>。</p><p>如果你需要定制一些样式，你可以通过 <code>heroImageStyle</code> 和 <code>bgImageStyle</code> 设置 Logo 与背景图片的样式。</p><h2 id="主页按钮" tabindex="-1"><a class="header-anchor" href="#主页按钮" aria-hidden="true">#</a> 主页按钮</h2><p>你可以将一些重要的链接以按钮的形式展示在主页中。</p><p>你可以通过 <code>actions</code> 设置它们，它是一个数组，每个元素都是一个对象，包含以下键值:</p><ul><li><code>text</code>: 按钮文字</li><li><code>link</code>: 按钮链接</li><li><code>type</code>: 按钮类型 (仅支持 <code>&quot;primary&quot;</code> 与 <code>&quot;default&quot;</code> (默认))</li></ul><h2 id="项目功能-旧版" tabindex="-1"><a class="header-anchor" href="#项目功能-旧版" aria-hidden="true">#</a> 项目功能 (旧版)</h2><p>你可以通过 <code>features</code> 设置并展示项目特性，它是一个数组，每个元素都是一个对象，包含以下键值:</p><ul><li><code>title</code>: 标题</li><li><code>details</code>: 详情</li><li><code>icon</code>(可选): 可填入完整路径或绝对路径的图片链接，或 FontClass</li><li><code>link</code>(可选): 链接地址</li></ul><h2 id="项目亮点与功能" tabindex="-1"><a class="header-anchor" href="#项目亮点与功能" aria-hidden="true">#</a> 项目亮点与功能</h2><p>你可以通过 <code>highlights</code> 来设置和显示项目功能和亮点，它是一个数组，每个元素都是一个对象，代表一个功能或亮点章节。</p><p>亮点使用 <code>highlights</code> 来设置亮点，功能使用 <code>features</code> 来设置功能 (你只能设置其一)。两者都是数组，每个元素都是一个对象，代表一个亮点或者功能项：</p><ul><li><code>title</code>: 标题，支持 HTML 字符串</li><li><code>details</code>: 细节，支持 HTML 字符串</li><li><code>icon</code> (可选)：可以填写完整路径或绝对路径图片链接，或 FontClass</li><li><code>link</code> (可选)：链接地址</li></ul><p>你也可以设置以下可选属性：</p><ul><li><code>header</code>: 章节标题，支持 HTML 字符串</li><li><code>description</code>: 章节描述，支持 HTML 字符串</li><li><code>color</code>: 文字颜色</li><li><code>image</code>: 章节图像</li><li><code>imageDark</code>：在深色模式中使用的章节图像</li><li><code>bgImage</code>：章节背景图像</li><li><code>bgImageDark</code>：在暗深色模式中使用的章节背景图像</li><li><code>type</code>: <code>&quot;order&quot;</code>, <code>&quot;un-order&quot;</code> (默认) 或 <code>&quot;no-order&quot;</code></li></ul>',18),h={class:"hint-container info"},g=n("p",{class:"hint-container-title"},"相关信息",-1),f=n("h2",{id:"配置案例",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#配置案例","aria-hidden":"true"},"#"),s(" 配置案例")],-1),w=l(`<details class="hint-container details"><summary>功能项目主页代码</summary><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token front-matter-block"><span class="token punctuation">---</span>
<span class="token front-matter yaml language-yaml"><span class="token key atrule">home</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
<span class="token key atrule">title</span><span class="token punctuation">:</span> 功能项目主页
<span class="token key atrule">icon</span><span class="token punctuation">:</span> home
<span class="token key atrule">heroImage</span><span class="token punctuation">:</span> /logo.svg
<span class="token key atrule">heroText</span><span class="token punctuation">:</span> VuePress Theme Hope
<span class="token key atrule">tagline</span><span class="token punctuation">:</span> 一个具有强大功能的 vuepress 主题✨
<span class="token key atrule">actions</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">text</span><span class="token punctuation">:</span> 使用教程 🧭
    <span class="token key atrule">link</span><span class="token punctuation">:</span> /zh/cookbook/tutorial/
    <span class="token key atrule">type</span><span class="token punctuation">:</span> primary

  <span class="token punctuation">-</span> <span class="token key atrule">text</span><span class="token punctuation">:</span> 介绍 💡
    <span class="token key atrule">link</span><span class="token punctuation">:</span> /zh/guide/get<span class="token punctuation">-</span>started/intro.html

  <span class="token punctuation">-</span> <span class="token key atrule">text</span><span class="token punctuation">:</span> 配置 🛠
    <span class="token key atrule">link</span><span class="token punctuation">:</span> /zh/config/

  <span class="token punctuation">-</span> <span class="token key atrule">text</span><span class="token punctuation">:</span> 在线案例 🪀
    <span class="token key atrule">link</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//stackblitz.com/fork/vuepress<span class="token punctuation">-</span>theme<span class="token punctuation">-</span>hope

<span class="token key atrule">features</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> Markdown 增强
    <span class="token key atrule">icon</span><span class="token punctuation">:</span> fab fa<span class="token punctuation">-</span>markdown
    <span class="token key atrule">details</span><span class="token punctuation">:</span> 新增文字对齐、上下角标、脚注、标记、任务列表、数学公式、流程图、图表与幻灯片支持
    <span class="token key atrule">link</span><span class="token punctuation">:</span> /zh/guide/markdown/

  <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> 幻灯片页面
    <span class="token key atrule">icon</span><span class="token punctuation">:</span> person<span class="token punctuation">-</span>chalkboard
    <span class="token key atrule">details</span><span class="token punctuation">:</span> 添加幻灯片页面以显示你喜欢的内容
    <span class="token key atrule">link</span><span class="token punctuation">:</span> /zh/guide/layout/slides

  <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> 布局增强
    <span class="token key atrule">icon</span><span class="token punctuation">:</span> object<span class="token punctuation">-</span>group
    <span class="token key atrule">details</span><span class="token punctuation">:</span> 添加路径导航、页脚、改进的导航栏、改进的页面导航等。
    <span class="token key atrule">link</span><span class="token punctuation">:</span> /zh/guide/layout/

  <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> 浏览量与评论
    <span class="token key atrule">icon</span><span class="token punctuation">:</span> comment<span class="token punctuation">-</span>dots
    <span class="token key atrule">details</span><span class="token punctuation">:</span> 配合 Waline 来开启阅读量统计与评论支持
    <span class="token key atrule">link</span><span class="token punctuation">:</span> /zh/guide/feature/comment.html

  <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> 文章信息
    <span class="token key atrule">icon</span><span class="token punctuation">:</span> circle<span class="token punctuation">-</span>info
    <span class="token key atrule">details</span><span class="token punctuation">:</span> 为你的文章添加作者、写作日期、预计阅读时间、字数统计等信息
    <span class="token key atrule">link</span><span class="token punctuation">:</span> /zh/guide/feature/page<span class="token punctuation">-</span>info.html

  <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> 博客支持
    <span class="token key atrule">icon</span><span class="token punctuation">:</span> blog
    <span class="token key atrule">details</span><span class="token punctuation">:</span> 使用一些很棒的布局提供博客功能，通过文章的日期、标签和分类，自动生成文章、分类、标签与时间轴列表
    <span class="token key atrule">link</span><span class="token punctuation">:</span> /zh/guide/blog/intro.html

  <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> 主题色切换
    <span class="token key atrule">icon</span><span class="token punctuation">:</span> palette
    <span class="token key atrule">details</span><span class="token punctuation">:</span> 支持自定义主题色并允许用户在预设的主题颜色之间切换
    <span class="token key atrule">link</span><span class="token punctuation">:</span> /zh/guide/interface/theme<span class="token punctuation">-</span>color.html

  <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> 深色模式
    <span class="token key atrule">icon</span><span class="token punctuation">:</span> circle<span class="token punctuation">-</span>half<span class="token punctuation">-</span>stroke
    <span class="token key atrule">details</span><span class="token punctuation">:</span> 可以自由切换浅色模式与深色模式
    <span class="token key atrule">link</span><span class="token punctuation">:</span> /zh/guide/interface/darkmode.html

  <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> 完整的无障碍支持
    <span class="token key atrule">icon</span><span class="token punctuation">:</span> universal<span class="token punctuation">-</span>access
    <span class="token key atrule">details</span><span class="token punctuation">:</span> 为你的网站带来完整的无障碍支持
    <span class="token key atrule">link</span><span class="token punctuation">:</span> /zh/guide/interface/accessibility.html

  <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> 文章加密
    <span class="token key atrule">icon</span><span class="token punctuation">:</span> lock
    <span class="token key atrule">details</span><span class="token punctuation">:</span> 你可以为你的特定页面或特定目录进行加密，以便陌生人不能随意访问它们
    <span class="token key atrule">link</span><span class="token punctuation">:</span> /zh/guide/feature/encrypt.html

  <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> 搜索支持
    <span class="token key atrule">icon</span><span class="token punctuation">:</span> search
    <span class="token key atrule">details</span><span class="token punctuation">:</span> 支持 docsearch 和基于客户端的搜索
    <span class="token key atrule">link</span><span class="token punctuation">:</span> /zh/guide/feature/search.html

  <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> 代码复制
    <span class="token key atrule">icon</span><span class="token punctuation">:</span> copy
    <span class="token key atrule">details</span><span class="token punctuation">:</span> 一键复制代码块中的代码
    <span class="token key atrule">link</span><span class="token punctuation">:</span> /zh/guide/feature/copy<span class="token punctuation">-</span>code.html

  <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> 图片预览
    <span class="token key atrule">icon</span><span class="token punctuation">:</span> image
    <span class="token key atrule">details</span><span class="token punctuation">:</span> 像相册一样允许你浏览、缩放并分享你的页面图片
    <span class="token key atrule">link</span><span class="token punctuation">:</span> /zh/guide/feature/photo<span class="token punctuation">-</span>swipe.html

  <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> SEO 增强
    <span class="token key atrule">icon</span><span class="token punctuation">:</span> dumbbell
    <span class="token key atrule">details</span><span class="token punctuation">:</span> 将最终生成的网页针对搜索引擎进行优化。
    <span class="token key atrule">link</span><span class="token punctuation">:</span> /zh/guide/advanced/seo.html

  <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> Sitemap
    <span class="token key atrule">icon</span><span class="token punctuation">:</span> sitemap
    <span class="token key atrule">details</span><span class="token punctuation">:</span> 自动为你的网站生成 Sitemap
    <span class="token key atrule">link</span><span class="token punctuation">:</span> /zh/guide/advanced/sitemap.html

  <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> Feed 支持
    <span class="token key atrule">icon</span><span class="token punctuation">:</span> rss
    <span class="token key atrule">details</span><span class="token punctuation">:</span> 生成你的 Feed，并通知你的用户订阅它
    <span class="token key atrule">link</span><span class="token punctuation">:</span> /zh/guide/advanced/feed.html

  <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> PWA 支持
    <span class="token key atrule">icon</span><span class="token punctuation">:</span> mobile<span class="token punctuation">-</span>screen
    <span class="token key atrule">details</span><span class="token punctuation">:</span> 让你的网站更像一个 APP
    <span class="token key atrule">link</span><span class="token punctuation">:</span> /zh/guide/advanced/pwa.html

  <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> 更多新特性
    <span class="token key atrule">icon</span><span class="token punctuation">:</span> ellipsis
    <span class="token key atrule">details</span><span class="token punctuation">:</span> 包括图标支持、全屏按钮、返回顶部按钮等
    <span class="token key atrule">link</span><span class="token punctuation">:</span> /zh/guide/feature/

<span class="token key atrule">copyright</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
<span class="token key atrule">footer</span><span class="token punctuation">:</span> MIT Licensed <span class="token punctuation">|</span> Copyright © 2019<span class="token punctuation">-</span>present Mr.Hope</span>
<span class="token punctuation">---</span></span>

<span class="token title important"><span class="token punctuation">##</span> 🛠 安装</span>

在当前目录下的 <span class="token code-snippet code keyword">\`[dir]\`</span> 文件夹内创建 vuepress-theme-hope 项目:

::: code-tabs#shell

@tab pnpm

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">bash</span>
<span class="token code-block language-bash language-bash language-bash"><span class="token function">pnpm</span> create vuepress-theme-hope <span class="token punctuation">[</span>dir<span class="token punctuation">]</span></span>
<span class="token punctuation">\`\`\`</span></span>

@tab npm

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">bash</span>
<span class="token code-block language-bash language-bash language-bash"><span class="token function">npm</span> init vuepress-theme-hope <span class="token punctuation">[</span>dir<span class="token punctuation">]</span></span>
<span class="token punctuation">\`\`\`</span></span>

:::

要将 vuepress-theme-hope 作为文档构建器添加到现有项目中，请在项目根目录中运行以下命令:

::: code-tabs#shell

@tab pnpm

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">bash</span>
<span class="token code-block language-bash language-bash language-bash"><span class="token function">pnpm</span> create vuepress-theme-hope <span class="token function">add</span> <span class="token punctuation">[</span>dir<span class="token punctuation">]</span></span>
<span class="token punctuation">\`\`\`</span></span>

@tab npm

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">bash</span>
<span class="token code-block language-bash language-bash language-bash"><span class="token function">npm</span> init vuepress-theme-hope <span class="token function">add</span> <span class="token punctuation">[</span>dir<span class="token punctuation">]</span></span>
<span class="token punctuation">\`\`\`</span></span>

:::

<span class="token title important"><span class="token punctuation">##</span> 🚀 使用</span>

::: code-tabs#language

@tab TS

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">ts</span>
<span class="token code-block language-ts language-ts language-ts"><span class="token comment">// .vuepress/config.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineUserConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vuepress&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> hopeTheme <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vuepress-theme-hope&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineUserConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// 站点选项</span>
  <span class="token comment">// ...</span>

  theme<span class="token operator">:</span> <span class="token function">hopeTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token comment">// 主题选项</span>
    <span class="token comment">// ...</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="token punctuation">\`\`\`</span></span>

@tab JS

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">js</span>
<span class="token code-block language-js language-js language-js"><span class="token comment">// .vuepress/config.js</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> hopeTheme <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vuepress-theme-hope&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token comment">// 站点选项</span>
  <span class="token comment">// ...</span>

  <span class="token literal-property property">theme</span><span class="token operator">:</span> <span class="token function">hopeTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token comment">// 主题选项</span>
    <span class="token comment">// ...</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="token punctuation">\`\`\`</span></span>

:::

<span class="token title important"><span class="token punctuation">##</span> 使用教程</span>

<span class="token list punctuation">-</span> <span class="token url">[<span class="token content">详细小白教程</span>](<span class="token url">../cookbook/tutorial/README.md</span>)</span>

<span class="token title important"><span class="token punctuation">##</span> 官方 QQ 群</span>

<span class="token list punctuation">-</span> <span class="token url">[<span class="token content">点击加入</span>](<span class="token url">https://jq.qq.com/?_wv=1027&amp;k=rATJyxGK</span>)</span> (群号: 1003437555)

<span class="token comment">&lt;!-- markdownlint-disable --&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><details class="hint-container details"><summary>亮点项目主页代码</summary><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token front-matter-block"><span class="token punctuation">---</span>
<span class="token front-matter yaml language-yaml"><span class="token key atrule">containerClass</span><span class="token punctuation">:</span> home
<span class="token key atrule">home</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
<span class="token key atrule">title</span><span class="token punctuation">:</span> 主页
<span class="token key atrule">icon</span><span class="token punctuation">:</span> home
<span class="token key atrule">heroImage</span><span class="token punctuation">:</span> /logo.svg
<span class="token key atrule">bgImage</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//theme<span class="token punctuation">-</span>hope<span class="token punctuation">-</span>assets.vuejs.press/bg/6<span class="token punctuation">-</span>light.svg
<span class="token key atrule">bgImageDark</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//theme<span class="token punctuation">-</span>hope<span class="token punctuation">-</span>assets.vuejs.press/bg/6<span class="token punctuation">-</span>dark.svg
<span class="token key atrule">bgImageStyle</span><span class="token punctuation">:</span>
  <span class="token key atrule">background-attachment</span><span class="token punctuation">:</span> fixed
<span class="token key atrule">heroText</span><span class="token punctuation">:</span> VuePress Theme Hope
<span class="token key atrule">tagline</span><span class="token punctuation">:</span> 一个具有强大功能的 vuepress 主题✨
<span class="token key atrule">actions</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">text</span><span class="token punctuation">:</span> 使用教程 🧭
    <span class="token key atrule">link</span><span class="token punctuation">:</span> ./cookbook/tutorial/
    <span class="token key atrule">type</span><span class="token punctuation">:</span> primary

  <span class="token punctuation">-</span> <span class="token key atrule">text</span><span class="token punctuation">:</span> 介绍 💡
    <span class="token key atrule">link</span><span class="token punctuation">:</span> ./guide/get<span class="token punctuation">-</span>started/intro.html

  <span class="token punctuation">-</span> <span class="token key atrule">text</span><span class="token punctuation">:</span> 配置 🛠
    <span class="token key atrule">link</span><span class="token punctuation">:</span> ./config/

  <span class="token punctuation">-</span> <span class="token key atrule">text</span><span class="token punctuation">:</span> 在线案例 🪀
    <span class="token key atrule">link</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//stackblitz.com/fork/vuepress<span class="token punctuation">-</span>theme<span class="token punctuation">-</span>hope

<span class="token key atrule">highlights</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">header</span><span class="token punctuation">:</span> 易于安装
    <span class="token key atrule">image</span><span class="token punctuation">:</span> /assets/image/box.svg
    <span class="token key atrule">bgImage</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//theme<span class="token punctuation">-</span>hope<span class="token punctuation">-</span>assets.vuejs.press/bg/3<span class="token punctuation">-</span>light.svg
    <span class="token key atrule">bgImageDark</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//theme<span class="token punctuation">-</span>hope<span class="token punctuation">-</span>assets.vuejs.press/bg/3<span class="token punctuation">-</span>dark.svg
    <span class="token key atrule">highlights</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> 运行 &lt;code<span class="token punctuation">&gt;</span>pnpm create vuepress<span class="token punctuation">-</span>theme<span class="token punctuation">-</span>hope hope<span class="token punctuation">-</span>project&lt;/code<span class="token punctuation">&gt;</span> 以创建一个新的主题项目。
      <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> 在已有项目根目录下运行 &lt;code<span class="token punctuation">&gt;</span>pnpm create vuepress<span class="token punctuation">-</span>theme<span class="token punctuation">-</span>hope add .&lt;/code<span class="token punctuation">&gt;</span> 以在项目中添加主题。

  <span class="token punctuation">-</span> <span class="token key atrule">header</span><span class="token punctuation">:</span> 在 Markdown 中添加你想要的内容
    <span class="token key atrule">description</span><span class="token punctuation">:</span> 我们扩展了标准的 CommonMark 规范，为你添加了成吨功能。
    <span class="token key atrule">image</span><span class="token punctuation">:</span> /assets/image/markdown.svg
    <span class="token key atrule">bgImage</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//theme<span class="token punctuation">-</span>hope<span class="token punctuation">-</span>assets.vuejs.press/bg/2<span class="token punctuation">-</span>light.svg
    <span class="token key atrule">bgImageDark</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//theme<span class="token punctuation">-</span>hope<span class="token punctuation">-</span>assets.vuejs.press/bg/2<span class="token punctuation">-</span>dark.svg
    <span class="token key atrule">bgImageStyle</span><span class="token punctuation">:</span>
      <span class="token key atrule">background-repeat</span><span class="token punctuation">:</span> repeat
      <span class="token key atrule">background-size</span><span class="token punctuation">:</span> initial
    <span class="token key atrule">features</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> 链接检查
        <span class="token key atrule">icon</span><span class="token punctuation">:</span> clipboard<span class="token punctuation">-</span>check
        <span class="token key atrule">details</span><span class="token punctuation">:</span> 检查 Markdown 链接
        <span class="token key atrule">link</span><span class="token punctuation">:</span> ./guide/markdown/others.html<span class="token comment">#link-check</span>

      <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> 自定义容器支持
        <span class="token key atrule">icon</span><span class="token punctuation">:</span> box<span class="token punctuation">-</span>archive
        <span class="token key atrule">details</span><span class="token punctuation">:</span> 用样式装饰 Markdown 内容
        <span class="token key atrule">link</span><span class="token punctuation">:</span> ./guide/markdown/container.html

      <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> 选项卡
        <span class="token key atrule">icon</span><span class="token punctuation">:</span> table<span class="token punctuation">-</span>columns
        <span class="token key atrule">details</span><span class="token punctuation">:</span> 使用选项卡对相似内容进行分组
        <span class="token key atrule">link</span><span class="token punctuation">:</span> ./guide/markdown/tabs.html

      <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> 代码组
        <span class="token key atrule">icon</span><span class="token punctuation">:</span> code
        <span class="token key atrule">details</span><span class="token punctuation">:</span> 使用选项卡对相似代码进行分组
        <span class="token key atrule">link</span><span class="token punctuation">:</span> ./guide/markdown/code<span class="token punctuation">-</span>tabs.html

      <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> 自定义对齐支持
        <span class="token key atrule">icon</span><span class="token punctuation">:</span> align<span class="token punctuation">-</span>center
        <span class="token key atrule">details</span><span class="token punctuation">:</span> 让你在 Markdown 中对段落进行对齐
        <span class="token key atrule">link</span><span class="token punctuation">:</span> ./guide/markdown/align.html

      <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> 自定义属性支持
        <span class="token key atrule">icon</span><span class="token punctuation">:</span> code
        <span class="token key atrule">details</span><span class="token punctuation">:</span> 让你为 Markdown 元素添加属性
        <span class="token key atrule">link</span><span class="token punctuation">:</span> ./guide/markdown/attrs.html

      <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> 上下角标支持
        <span class="token key atrule">icon</span><span class="token punctuation">:</span> superscript
        <span class="token key atrule">details</span><span class="token punctuation">:</span> 你的 Markdown 现在将支持上下角标
        <span class="token key atrule">link</span><span class="token punctuation">:</span> ./guide/markdown/sup<span class="token punctuation">-</span>sub.html

      <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> 脚注
        <span class="token key atrule">icon</span><span class="token punctuation">:</span> quote<span class="token punctuation">-</span>left
        <span class="token key atrule">details</span><span class="token punctuation">:</span> 你的 Markdown 现在将支持脚注
        <span class="token key atrule">link</span><span class="token punctuation">:</span> ./guide/markdown/footnote.html

      <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> 标记支持
        <span class="token key atrule">icon</span><span class="token punctuation">:</span> highlighter
        <span class="token key atrule">details</span><span class="token punctuation">:</span> 让你在 Markdown 中对词句进行标记
        <span class="token key atrule">link</span><span class="token punctuation">:</span> ./guide/markdown/mark.html

      <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> 任务列表
        <span class="token key atrule">icon</span><span class="token punctuation">:</span> square<span class="token punctuation">-</span>check
        <span class="token key atrule">details</span><span class="token punctuation">:</span> 在 Markdown 中使用任务列表
        <span class="token key atrule">link</span><span class="token punctuation">:</span> ./guide/markdown/tasklist.html

      <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> 图片语法
        <span class="token key atrule">icon</span><span class="token punctuation">:</span> image
        <span class="token key atrule">details</span><span class="token punctuation">:</span> 使用改进的语法指定图片大小与颜色模式
        <span class="token key atrule">link</span><span class="token punctuation">:</span> ./guide/markdown/image.html

      <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> 卡片支持
        <span class="token key atrule">icon</span><span class="token punctuation">:</span> square
        <span class="token key atrule">details</span><span class="token punctuation">:</span> 在 Markdown 中展示卡片
        <span class="token key atrule">link</span><span class="token punctuation">:</span> ./guide/markdown/card.html

      <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> 图表支持
        <span class="token key atrule">icon</span><span class="token punctuation">:</span> chart<span class="token punctuation">-</span>simple
        <span class="token key atrule">details</span><span class="token punctuation">:</span> 在 Markdown 中展示图表
        <span class="token key atrule">link</span><span class="token punctuation">:</span> ./guide/markdown/chart.html

      <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> 流程图支持
        <span class="token key atrule">icon</span><span class="token punctuation">:</span> route
        <span class="token key atrule">details</span><span class="token punctuation">:</span> 可以在 Markdown 中直接写出流程图
        <span class="token key atrule">link</span><span class="token punctuation">:</span> ./guide/markdown/flowchart.html

      <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> Mermaid 支持
        <span class="token key atrule">icon</span><span class="token punctuation">:</span> chart<span class="token punctuation">-</span>pie
        <span class="token key atrule">details</span><span class="token punctuation">:</span> 可以在 Markdown 中添加 Mermaid 图例
        <span class="token key atrule">link</span><span class="token punctuation">:</span> ./guide/markdown/mermaid.html

      <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> Tex 支持
        <span class="token key atrule">icon</span><span class="token punctuation">:</span> square<span class="token punctuation">-</span>root<span class="token punctuation">-</span>variable
        <span class="token key atrule">details</span><span class="token punctuation">:</span> Markdown 现在也可以支持 Tex 语法以显示公式
        <span class="token key atrule">link</span><span class="token punctuation">:</span> ./guide/markdown/tex.html

      <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> 导入文件支持
        <span class="token key atrule">icon</span><span class="token punctuation">:</span> fab fa<span class="token punctuation">-</span>markdown
        <span class="token key atrule">details</span><span class="token punctuation">:</span> 将你的文档分段，并在 Markdown 中导入
        <span class="token key atrule">link</span><span class="token punctuation">:</span> ./guide/markdown/include.html

      <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> 交互演示支持
        <span class="token key atrule">icon</span><span class="token punctuation">:</span> code
        <span class="token key atrule">details</span><span class="token punctuation">:</span> 你可以在 Markdown 中添加交互演示
        <span class="token key atrule">link</span><span class="token punctuation">:</span> ./guide/markdown/playground.html

      <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> Vue 交互演示支持
        <span class="token key atrule">icon</span><span class="token punctuation">:</span> fab fa<span class="token punctuation">-</span>vuejs
        <span class="token key atrule">details</span><span class="token punctuation">:</span> 在交互演示中展示 Vue 组件
        <span class="token key atrule">link</span><span class="token punctuation">:</span> ./guide/markdown/vue<span class="token punctuation">-</span>playground.html

      <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> 代码案例支持
        <span class="token key atrule">icon</span><span class="token punctuation">:</span> laptop<span class="token punctuation">-</span>code
        <span class="token key atrule">details</span><span class="token punctuation">:</span> 你可以很方便的插入代码案例
        <span class="token key atrule">link</span><span class="token punctuation">:</span> ./guide/markdown/demo/

      <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> 幻灯片支持
        <span class="token key atrule">icon</span><span class="token punctuation">:</span> person<span class="token punctuation">-</span>chalkboard
        <span class="token key atrule">details</span><span class="token punctuation">:</span> 通过 Reveal.js 在 Markdown 中插入幻灯片
        <span class="token key atrule">link</span><span class="token punctuation">:</span> ./guide/markdown/revealjs/

  <span class="token punctuation">-</span> <span class="token key atrule">header</span><span class="token punctuation">:</span> 布局
    <span class="token key atrule">description</span><span class="token punctuation">:</span> 一个带有完整无障碍支持的响应式布局。
    <span class="token key atrule">image</span><span class="token punctuation">:</span> /assets/image/layout.svg
    <span class="token key atrule">bgImage</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//theme<span class="token punctuation">-</span>hope<span class="token punctuation">-</span>assets.vuejs.press/bg/5<span class="token punctuation">-</span>light.svg
    <span class="token key atrule">bgImageDark</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//theme<span class="token punctuation">-</span>hope<span class="token punctuation">-</span>assets.vuejs.press/bg/5<span class="token punctuation">-</span>dark.svg
    <span class="token key atrule">highlights</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> 布局增强
        <span class="token key atrule">icon</span><span class="token punctuation">:</span> object<span class="token punctuation">-</span>group
        <span class="token key atrule">details</span><span class="token punctuation">:</span> 添加路径导航、页脚、改进的导航栏、改进的页面导航等。
        <span class="token key atrule">link</span><span class="token punctuation">:</span> ./guide/layout/

      <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> 深色模式
        <span class="token key atrule">icon</span><span class="token punctuation">:</span> circle<span class="token punctuation">-</span>half<span class="token punctuation">-</span>stroke
        <span class="token key atrule">details</span><span class="token punctuation">:</span> 可以自由切换浅色模式与深色模式
        <span class="token key atrule">link</span><span class="token punctuation">:</span> ./guide/interface/darkmode.html

      <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> 主题色切换
        <span class="token key atrule">icon</span><span class="token punctuation">:</span> palette
        <span class="token key atrule">details</span><span class="token punctuation">:</span> 支持自定义主题色并允许用户在预设的主题颜色之间切换
        <span class="token key atrule">link</span><span class="token punctuation">:</span> ./guide/interface/theme<span class="token punctuation">-</span>color.html

      <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> 幻灯片页面
        <span class="token key atrule">icon</span><span class="token punctuation">:</span> person<span class="token punctuation">-</span>chalkboard
        <span class="token key atrule">details</span><span class="token punctuation">:</span> 添加幻灯片页面以显示你喜欢的内容
        <span class="token key atrule">link</span><span class="token punctuation">:</span> ./guide/layout/slides

      <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> 更多
        <span class="token key atrule">icon</span><span class="token punctuation">:</span> ellipsis
        <span class="token key atrule">details</span><span class="token punctuation">:</span> RTL 布局，打印支持，全局按钮等
        <span class="token key atrule">link</span><span class="token punctuation">:</span> ./guide/interface/others.html

  <span class="token punctuation">-</span> <span class="token key atrule">header</span><span class="token punctuation">:</span> 新功能
    <span class="token key atrule">image</span><span class="token punctuation">:</span> /assets/image/features.svg
    <span class="token key atrule">bgImage</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//theme<span class="token punctuation">-</span>hope<span class="token punctuation">-</span>assets.vuejs.press/bg/1<span class="token punctuation">-</span>light.svg
    <span class="token key atrule">bgImageDark</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//theme<span class="token punctuation">-</span>hope<span class="token punctuation">-</span>assets.vuejs.press/bg/1<span class="token punctuation">-</span>dark.svg
    <span class="token key atrule">features</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> 浏览量与评论
        <span class="token key atrule">icon</span><span class="token punctuation">:</span> comment<span class="token punctuation">-</span>dots
        <span class="token key atrule">details</span><span class="token punctuation">:</span> 配合 Waline 来开启阅读量统计与评论支持
        <span class="token key atrule">link</span><span class="token punctuation">:</span> ./guide/feature/comment.html

      <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> 文章信息
        <span class="token key atrule">icon</span><span class="token punctuation">:</span> circle<span class="token punctuation">-</span>info
        <span class="token key atrule">details</span><span class="token punctuation">:</span> 为你的文章添加作者、写作日期、预计阅读时间、字数统计等信息
        <span class="token key atrule">link</span><span class="token punctuation">:</span> ./guide/feature/page<span class="token punctuation">-</span>info.html

      <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> 文章加密
        <span class="token key atrule">icon</span><span class="token punctuation">:</span> lock
        <span class="token key atrule">details</span><span class="token punctuation">:</span> 你可以为你的特定页面或特定目录进行加密，以便陌生人不能随意访问它们
        <span class="token key atrule">link</span><span class="token punctuation">:</span> ./guide/feature/encrypt.html

      <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> 搜索支持
        <span class="token key atrule">icon</span><span class="token punctuation">:</span> search
        <span class="token key atrule">details</span><span class="token punctuation">:</span> 支持 docsearch 和基于客户端的搜索
        <span class="token key atrule">link</span><span class="token punctuation">:</span> ./guide/feature/search.html

      <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> 代码复制
        <span class="token key atrule">icon</span><span class="token punctuation">:</span> copy
        <span class="token key atrule">details</span><span class="token punctuation">:</span> 一键复制代码块中的代码
        <span class="token key atrule">link</span><span class="token punctuation">:</span> ./guide/feature/copy<span class="token punctuation">-</span>code.html

      <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> 图片预览
        <span class="token key atrule">icon</span><span class="token punctuation">:</span> image
        <span class="token key atrule">details</span><span class="token punctuation">:</span> 像相册一样允许你浏览、缩放并分享你的页面图片
        <span class="token key atrule">link</span><span class="token punctuation">:</span> ./guide/feature/photo<span class="token punctuation">-</span>swipe.html

  <span class="token punctuation">-</span> <span class="token key atrule">header</span><span class="token punctuation">:</span> 博客
    <span class="token key atrule">description</span><span class="token punctuation">:</span> 通过主题创建个人博客
    <span class="token key atrule">image</span><span class="token punctuation">:</span> /assets/image/blog.svg
    <span class="token key atrule">bgImage</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//theme<span class="token punctuation">-</span>hope<span class="token punctuation">-</span>assets.vuejs.press/bg/5<span class="token punctuation">-</span>light.svg
    <span class="token key atrule">bgImageDark</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//theme<span class="token punctuation">-</span>hope<span class="token punctuation">-</span>assets.vuejs.press/bg/5<span class="token punctuation">-</span>dark.svg
    <span class="token key atrule">highlights</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> 博客功能
        <span class="token key atrule">icon</span><span class="token punctuation">:</span> blog
        <span class="token key atrule">details</span><span class="token punctuation">:</span> 通过文章的日期、标签和分类展示文章
        <span class="token key atrule">link</span><span class="token punctuation">:</span> ./guide/blog/intro.html

      <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> 博客主页
        <span class="token key atrule">icon</span><span class="token punctuation">:</span> home
        <span class="token key atrule">details</span><span class="token punctuation">:</span> 全新播客主页
        <span class="token key atrule">link</span><span class="token punctuation">:</span> ./guide/blog/home.html

      <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> 博主信息
        <span class="token key atrule">icon</span><span class="token punctuation">:</span> home
        <span class="token key atrule">details</span><span class="token punctuation">:</span> 自定义名称、头像、座右铭和社交媒体链接
        <span class="token key atrule">link</span><span class="token punctuation">:</span> ./guide/blog/blogger.html

      <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> 时间线
        <span class="token key atrule">icon</span><span class="token punctuation">:</span> home
        <span class="token key atrule">details</span><span class="token punctuation">:</span> 在时间线中浏览和通读博文
        <span class="token key atrule">link</span><span class="token punctuation">:</span> ./guide/blog/timeline.html

  <span class="token punctuation">-</span> <span class="token key atrule">header</span><span class="token punctuation">:</span> 高级
    <span class="token key atrule">description</span><span class="token punctuation">:</span> 增强站点与用户体验的高级功能
    <span class="token key atrule">image</span><span class="token punctuation">:</span> /assets/image/advanced.svg
    <span class="token key atrule">bgImage</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//theme<span class="token punctuation">-</span>hope<span class="token punctuation">-</span>assets.vuejs.press/bg/4<span class="token punctuation">-</span>light.svg
    <span class="token key atrule">bgImageDark</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//theme<span class="token punctuation">-</span>hope<span class="token punctuation">-</span>assets.vuejs.press/bg/4<span class="token punctuation">-</span>dark.svg
    <span class="token key atrule">highlights</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> SEO 增强
        <span class="token key atrule">icon</span><span class="token punctuation">:</span> dumbbell
        <span class="token key atrule">details</span><span class="token punctuation">:</span> 将最终生成的网页针对搜索引擎进行优化。
        <span class="token key atrule">link</span><span class="token punctuation">:</span> ./guide/advanced/seo.html

      <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> Sitemap
        <span class="token key atrule">icon</span><span class="token punctuation">:</span> sitemap
        <span class="token key atrule">details</span><span class="token punctuation">:</span> 自动为你的网站生成 Sitemap
        <span class="token key atrule">link</span><span class="token punctuation">:</span> ./guide/advanced/sitemap.html

      <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> Feed 支持
        <span class="token key atrule">icon</span><span class="token punctuation">:</span> rss
        <span class="token key atrule">details</span><span class="token punctuation">:</span> 生成你的 Feed，并通知你的用户订阅它
        <span class="token key atrule">link</span><span class="token punctuation">:</span> ./guide/advanced/feed.html

      <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> PWA 支持
        <span class="token key atrule">icon</span><span class="token punctuation">:</span> mobile<span class="token punctuation">-</span>screen
        <span class="token key atrule">details</span><span class="token punctuation">:</span> 让你的网站更像一个 APP
        <span class="token key atrule">link</span><span class="token punctuation">:</span> ./guide/advanced/pwa.html

<span class="token key atrule">copyright</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
<span class="token key atrule">footer</span><span class="token punctuation">:</span> MIT Licensed <span class="token punctuation">|</span> Copyright © 2019<span class="token punctuation">-</span>present Mr.Hope</span>
<span class="token punctuation">---</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,2);function _(x,M){const a=i("RouterLink");return c(),u("div",null,[v,m,b,o(" more "),y,n("div",h,[g,n("p",null,[s("关于完整的配置项目，请参见 "),e(a,{to:"/zh/config/frontmatter/home.html"},{default:t(()=>[s("主页 Frontmatter 配置")]),_:1}),s("。")])]),f,n("ul",null,[n("li",null,[n("p",null,[e(a,{to:"/zh/demo/project-home.html"},{default:t(()=>[s("使用功能的项目主页")]),_:1})])]),n("li",null,[n("p",null,[e(a,{to:"/zh/"},{default:t(()=>[s("使用亮点的项目主页")]),_:1})])])]),w])}const I=p(r,[["render",_],["__file","home.html.vue"]]);export{I as default};
