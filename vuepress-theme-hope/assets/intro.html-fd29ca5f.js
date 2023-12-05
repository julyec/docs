import{_ as r}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o as a,c as p,b as e,d as n,e as l,a as u,w as i,f as d}from"./app-d630ecd8.js";const c={},h=e("p",null,[e("code",null,"vuepress-theme-hope"),n(" bundles many VuePress plugins.")],-1),g=e("ul",null,[e("li",null,"Some plugins are automatically enabled, you can disable them in theme options if you don't need them."),e("li",null,"Some plugins are only enabled when you provide necessary options.")],-1),m={class:"hint-container note"},f=e("p",{class:"hint-container-title"},"Note",-1),_={href:"https://github.com/orgs/vuepress/people",target:"_blank",rel:"noopener noreferrer"},v=e("p",null,[n("All plugins called by "),e("code",null,"vuepress-theme-hope"),n(" are official plugins or plugins developed by Mr. Hope which hosted under the "),e("code",null,"vuepress-theme-hope"),n(" repository.")],-1),b={href:"https://vuejs.press/",target:"_blank",rel:"noopener noreferrer"},y=e("li",null,"All plugins developed by Mr.Hope have their own documentation and can be used with other themes.",-1),k=d('<h2 id="plugin-options" tabindex="-1"><a class="header-anchor" href="#plugin-options" aria-hidden="true">#</a> Plugin Options</h2><p>The theme provides <code>plugins</code> option to pass options to plugins.</p><div class="hint-container info"><p class="hint-container-title">Plugin Options Name</p><p>All key names in <code>plugins</code> option are the camelCase version of the plugin name, with the optional number <code>2</code> suffix removed.</p><p>For example:</p><ul><li><code>vuepress-plugin-copy-code2</code> is controlled by key name <code>copyCode</code>.</li><li><code>vuepress-plugin-md-enhance2</code> is controlled by key name <code>mdEnhance</code>.</li></ul></div><h2 id="plugin-list" tabindex="-1"><a class="header-anchor" href="#plugin-list" aria-hidden="true">#</a> Plugin List</h2><h3 id="plugins-provided-by-mr-hope" tabindex="-1"><a class="header-anchor" href="#plugins-provided-by-mr-hope" aria-hidden="true">#</a> Plugins provided by Mr.Hope</h3>',5),w={class:"hint-container tip"},P=e("p",{class:"hint-container-title"},"Tips",-1),x=e("p",null,"Here are some other plugins that are not bundled by the theme, you can enable them according to your own needs.",-1),j=e("h3",{id:"official-plugin",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#official-plugin","aria-hidden":"true"},"#"),n(" Official plugin")],-1),V={href:"https://vuejs.press/reference/plugin/active-header-links.html",target:"_blank",rel:"noopener noreferrer"},A={href:"https://vuejs.press/reference/plugin/container.html",target:"_blank",rel:"noopener noreferrer"},C={href:"https://vuejs.press/reference/plugin/external-link-icon.html",target:"_blank",rel:"noopener noreferrer"},N={href:"https://vuejs.press/reference/plugin/git.html",target:"_blank",rel:"noopener noreferrer"},E={href:"https://vuejs.press/reference/plugin/nprogress.html",target:"_blank",rel:"noopener noreferrer"},H={href:"https://vuejs.press/reference/plugin/prismjs.html",target:"_blank",rel:"noopener noreferrer"},M={href:"https://vuejs.press/reference/plugin/theme-data.html",target:"_blank",rel:"noopener noreferrer"};function S(I,L){const s=t("ExternalLinkIcon"),o=t("ProjectLink");return a(),p("div",null,[h,g,e("div",m,[f,e("p",null,[n("As a member of "),e("a",_,[n("VuePress Org"),l(s)]),n(", Mr. Hope has developed many VuePress plugins.")]),v,e("ul",null,[e("li",null,[n("For the documentation of the official plugin, see "),e("a",b,[n("VuePress2 official website"),l(s)])]),y])]),u(" more "),k,e("ul",null,[e("li",null,[l(o,{name:"auto-catalog"},{default:i(()=>[n("vuepress-plugin-auto-catalog")]),_:1}),n(": Catalog automatically generation for VuePress2")]),e("li",null,[l(o,{name:"blog2"},{default:i(()=>[n("vuepress-plugin-blog2")]),_:1}),n(": Blog plugin for VuePress2")]),e("li",null,[l(o,{name:"comment2"},{default:i(()=>[n("vuepress-plugin-comment2")]),_:1}),n(": Provides comment and pageview function")]),e("li",null,[l(o,{name:"components"},{default:i(()=>[n("vuepress-plugin-components")]),_:1}),n(": Provides some plugins out of the box")]),e("li",null,[l(o,{name:"copy-code2"},{default:i(()=>[n("vuepress-plugin-copy-code2")]),_:1}),n(": Provides one-click copy code block function.")]),e("li",null,[l(o,{name:"copyright2"},{default:i(()=>[n("vuepress-plugin-copyright2")]),_:1}),n(": Append copyright information when copying or disable copy and selection.")]),e("li",null,[l(o,{name:"feed2"},{default:i(()=>[n("vuepress-plugin-feed2")]),_:1}),n(": Feed support")]),e("li",null,[l(o,{name:"md-enhance"},{default:i(()=>[n("vuepress-plugin-md-enhance")]),_:1}),n(": Provides more Markdown syntax")]),e("li",null,[l(o,{name:"photo-swipe"},{default:i(()=>[n("vuepress-plugin-photo-swipe")]),_:1}),n(": Image preview plugin based on photo-swipe")]),e("li",null,[l(o,{name:"pwa2"},{default:i(()=>[n("vuepress-plugin-pwa2")]),_:1}),n(": Enhanced PWA support")]),e("li",null,[l(o,{name:"reading-time2"},{default:i(()=>[n("vuepress-plugin-reading-time2")]),_:1}),n(": Reading time and word count")]),e("li",null,[l(o,{name:"sass-palette"},{default:i(()=>[n("vuepress-plugin-sass-palette")]),_:1}),n(": Sass style plugin for all plugins and themes")]),e("li",null,[l(o,{name:"seo2"},{default:i(()=>[n("vuepress-plugin-seo2")]),_:1}),n(": SEO enhancement plugin")]),e("li",null,[l(o,{name:"sitemap2"},{default:i(()=>[n("vuepress-plugin-sitemap2")]),_:1}),n(": Sitemap plugin")])]),e("div",w,[P,x,e("ul",null,[e("li",null,[l(o,{name:"lightgallery"},{default:i(()=>[n("vuepress-plugin-lightgallery")]),_:1}),n(": Image preview plugin based on lightgallery")]),e("li",null,[l(o,{name:"redirect"},{default:i(()=>[n("vuepress-plugin-redirect")]),_:1}),n(": Redirect pages")]),e("li",null,[l(o,{name:"remove-pwa"},{default:i(()=>[n("vuepress-plugin-remove-pwa")]),_:1}),n(": Plugins to remove pwa")]),e("li",null,[l(o,{name:"search-pro"},{default:i(()=>[n("vuepress-plugin-search-pro")]),_:1}),n(": Client search plugin")])])]),j,e("ul",null,[e("li",null,[e("p",null,[e("a",V,[n("@vuepress/plugin-active-header-links"),l(s)]),n(": Automatically update route Hash")])]),e("li",null,[e("p",null,[e("a",A,[n("@vuepress/plugin-container"),l(s)]),n(": custom container")])]),e("li",null,[e("p",null,[e("a",C,[n("@vuepress/external-link-icon"),l(s)]),n(": Add external link icon for external links in Markdown.")])]),e("li",null,[e("p",null,[e("a",N,[n("@vuepress/plugin-git"),l(s)]),n(": Git-based info plugin")])]),e("li",null,[e("p",null,[e("a",E,[n("@vuepress/plugin-nprogress"),l(s)]),n(": progress bar")])]),e("li",null,[e("p",null,[e("a",H,[n("@vuepress/plugin-prismjs"),l(s)]),n(": Code highlighting plugin using Prism.js")])]),e("li",null,[e("p",null,[e("a",M,[n("@vuepress/plugin-theme-data"),l(s)]),n(": Composition API plugin for theme data")])])])])}const F=r(c,[["render",S],["__file","intro.html.vue"]]);export{F as default};
