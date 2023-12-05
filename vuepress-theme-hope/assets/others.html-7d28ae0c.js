import{_ as h}from"./plugin-vue_export-helper-c27b6911.js";import{r as d,o as r,c as u,b as e,d as o,e as t,w as n,f as c}from"./app-d630ecd8.js";const _={},p=c('<h2 id="components" tabindex="-1"><a class="header-anchor" href="#components" aria-hidden="true">#</a> components</h2><p>控制 <code>vuepress-plugin-components</code>，为 Markdown 提供一组组件。</p><p>可以在 Markdown 中使用的可用组件为:</p><ul><li><code>&quot;ArtPlayer&quot;</code></li><li><code>&quot;AudioPlayer&quot;</code></li><li><code>&quot;Badge&quot;</code></li><li><code>&quot;BiliBili&quot;</code></li><li><code>&quot;CodePen&quot;</code></li><li><code>&quot;FontIcon&quot;</code></li><li><code>&quot;PDF&quot;</code></li><li><code>&quot;Replit&quot;</code></li><li><code>&quot;Share&quot;</code></li><li><code>&quot;StackBlitz&quot;</code></li><li><code>&quot;VidStack&quot;</code></li><li><code>&quot;SiteInfo&quot;</code></li><li><code>&quot;VideoPlayer&quot;</code></li><li><code>&quot;XiGua&quot;</code></li><li><code>&quot;YouTube&quot;</code></li></ul><p>你可以将 <code>plugin.components.components</code> 设置为需要的组件数组，默认情况下为 <code>[&quot;Badge&quot;]</code>。</p><p>同时，你可以设置 <code>plugin.components.rootComponents</code> 来启用一些根组件，例如 Notice。</p>',6),m={class:"hint-container info"},f=e("p",{class:"hint-container-title"},"相关信息",-1),g={id:"copycode",tabindex:"-1"},q=e("a",{class:"header-anchor",href:"#copycode","aria-hidden":"true"},"#",-1),x=e("p",null,[o("控制 "),e("code",null,"vuepress-plugin-copy-code2"),o("，提供代码复制按钮。")],-1),v=e("p",null,[o("默认情况下，不需要任何配置。如果你不需要这个功能，请设置为 "),e("code",null,"false"),o("。")],-1),j={class:"hint-container info"},k=e("p",{class:"hint-container-title"},"相关信息",-1),b={id:"git",tabindex:"-1"},w=e("a",{class:"header-anchor",href:"#git","aria-hidden":"true"},"#",-1),P=e("p",null,[o("控制 "),e("code",null,"@vuepress/plugin-git"),o("，通过 Git 提交历史提供文件信息。")],-1),z=e("p",null,"默认情况下，为了提高开发服务器性能仅在构建模式下启用。你可以手动设置一个布尔值控制插件状态，可以设置插件选项。",-1),B={class:"hint-container info"},y=e("p",{class:"hint-container-title"},"相关信息",-1),S={href:"https://vuejs.press/zh/reference/plugin/git.html",target:"_blank",rel:"noopener noreferrer"},L={id:"nprogress",tabindex:"-1"},T=e("a",{class:"header-anchor",href:"#nprogress","aria-hidden":"true"},"#",-1),V=e("p",null,[o("控制 "),e("code",null,"@vuepress/plugin-nprogress"),o("，通过 nprogress 提供切换页面时的进度条。")],-1),C=e("p",null,[o("默认情况下，主题会启用此插件，你可以设置 "),e("code",null,"false"),o(" 禁用它。")],-1),N={id:"prismjs",tabindex:"-1"},I=e("a",{class:"header-anchor",href:"#prismjs","aria-hidden":"true"},"#",-1),E=e("p",null,[o("控制 "),e("code",null,"@vuepress/plugin-prismjs"),o("，通过 PrismJS 提供代码块高亮。")],-1),M=e("p",null,[o("默认情况下，主题会启用此插件，你可以设置 "),e("code",null,"false"),o(" 禁用它并自行高亮代码块。")],-1),R=e("h3",{id:"prismjs-light",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#prismjs-light","aria-hidden":"true"},"#"),o(" prismjs.light")],-1),A=e("li",null,[o("类型: "),e("code",null,"PrismjsTheme")],-1),F=e("li",null,[o("默认值: "),e("code",null,'"one-light"')],-1),G=e("p",null,"日间模式使用的 Prism.js 主题",-1),D=e("h3",{id:"prismjs-dark",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#prismjs-dark","aria-hidden":"true"},"#"),o(" prismjs.dark")],-1),J=e("li",null,[o("类型: "),e("code",null,"PrismjsTheme")],-1),X=e("li",null,[o("默认值: "),e("code",null,'"one-dark"')],-1),Y=e("p",null,"夜间模式使用的 Prism.js 主题",-1),H={id:"photoswipe",tabindex:"-1"},K=e("a",{class:"header-anchor",href:"#photoswipe","aria-hidden":"true"},"#",-1),O=e("p",null,[o("控制 "),e("code",null,"vuepress-plugin-photo-swipe"),o("，提供图片浏览功能。")],-1),Q=e("p",null,[o("默认情况下，不需要任何配置。如果你不需要这个功能，请设置为 "),e("code",null,"false"),o("。")],-1),U={class:"hint-container info"},W=e("p",{class:"hint-container-title"},"相关信息",-1),Z={id:"readingtime",tabindex:"-1"},$=e("a",{class:"header-anchor",href:"#readingtime","aria-hidden":"true"},"#",-1),ee=c('<p>控制 <code>vuepress-plugin-reading-time2</code>，为页面进行字数统计并生成预计的阅读时间。</p><h3 id="readingtime-wordperminute" tabindex="-1"><a class="header-anchor" href="#readingtime-wordperminute" aria-hidden="true">#</a> readingTime.wordPerMinute</h3><ul><li>类型: <code>number</code></li><li>默认值: <code>300</code></li></ul><p>每分钟的阅读字数。</p>',4),oe={class:"hint-container info"},te=e("p",{class:"hint-container-title"},"相关信息",-1),ie={id:"seo",tabindex:"-1"},ne=e("a",{class:"header-anchor",href:"#seo","aria-hidden":"true"},"#",-1),se=e("p",null,[o("控制 "),e("code",null,"vuepress-plugin-seo2"),o("，提供搜索引擎增强。")],-1),de=e("p",null,[o("默认情况下，不需要任何配置。如果你不需要这个功能，请设置为 "),e("code",null,"false"),o("。")],-1),le={class:"hint-container info"},ce=e("p",{class:"hint-container-title"},"相关信息",-1),ae={id:"sitemap",tabindex:"-1"},he=e("a",{class:"header-anchor",href:"#sitemap","aria-hidden":"true"},"#",-1),re=e("p",null,[o("控制 "),e("code",null,"vuepress-plugin-sitemap2"),o("，为网站自动生成 Sitemap。")],-1),ue=e("p",null,[o("默认情况下，不需要任何配置。如果你不需要这个功能，请设置为 "),e("code",null,"false"),o("。")],-1),_e={class:"hint-container info"},pe=e("p",{class:"hint-container-title"},"相关信息",-1);function me(fe,ge){const s=d("ProjectLink"),i=d("Badge"),a=d("ExternalLinkIcon"),l=d("RouterLink");return r(),u("div",null,[p,e("div",m,[f,e("p",null,[o("插件选项请参见 "),t(s,{name:"components",path:"/zh/config.html"},{default:n(()=>[o("components 插件选项")]),_:1}),o("。")])]),e("h2",g,[q,o(" copyCode "),t(i,{text:"默认启用"})]),x,v,e("div",j,[k,e("p",null,[o("插件选项请参见 "),t(s,{name:"copy-code2",path:"/zh/config.html"},{default:n(()=>[o("copy-code2 插件选项")]),_:1}),o("。")])]),e("h2",b,[w,o(" git "),t(i,{text:"默认仅限构建模式"})]),P,z,e("div",B,[y,e("p",null,[o("插件选项请参见 "),e("a",S,[o("git 插件选项"),t(a)]),o("。")])]),e("h2",L,[T,o(" nprogress "),t(i,{text:"默认启用"})]),V,C,e("h2",N,[I,o(" prismjs "),t(i,{text:"默认启用"})]),E,M,R,e("ul",null,[A,F,e("li",null,[o("详情: "),t(l,{to:"/zh/guide/interface/code-theme.html"},{default:n(()=>[o("界面 → 代码主题")]),_:1})])]),G,D,e("ul",null,[J,X,e("li",null,[o("详情: "),t(l,{to:"/zh/guide/interface/code-theme.html"},{default:n(()=>[o("界面 → 代码主题")]),_:1})])]),Y,e("h2",H,[K,o(" photoSwipe "),t(i,{text:"默认启用"})]),O,Q,e("div",U,[W,e("p",null,[o("插件选项请参见 "),t(s,{name:"photo-swipe",path:"/zh/config.html"},{default:n(()=>[o("photo-swipe 插件选项")]),_:1}),o("。")])]),e("h2",Z,[$,o(" readingTime "),t(i,{text:"默认启用"})]),ee,e("div",oe,[te,e("p",null,[o("更多插件选项请参见 "),t(s,{name:"reading-time2",path:"/zh/config.html"},{default:n(()=>[o("reading-time2 插件文档")]),_:1}),o("。")])]),e("h2",ie,[ne,o(" seo "),t(i,{text:"默认启用"})]),se,de,e("div",le,[ce,e("p",null,[o("插件选项请参见 "),t(s,{name:"seo2",path:"/zh/config.html"},{default:n(()=>[o("seo2 插件选项")]),_:1}),o("。")])]),e("h2",ae,[he,o(" sitemap "),t(i,{text:"默认启用"})]),re,ue,e("div",_e,[pe,e("p",null,[o("插件选项请参见 "),t(s,{name:"sitemap2",path:"/zh/config.html"},{default:n(()=>[o("sitemap2 插件选项")]),_:1}),o("。")])])])}const ve=h(_,[["render",me],["__file","others.html.vue"]]);export{ve as default};
