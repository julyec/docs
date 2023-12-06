import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{r as i,o as n,c as r,a as s,b as e,d as t,e as l,f as d}from"./app-083c2955.js";const h={},c=e("p",null,[t("The theme supports blog feature with"),e("code",null,"vuepress-plugin-blog2"),t(" by default, and it's "),e("strong",null,"disabled by default"),t(".")],-1),p=e("p",null,[t("If you need blog functionality, you can set "),e("code",null,"plugins.blog: true"),t(" in theme options to enable blog functionality.")],-1),u=e("h2",{id:"intro",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#intro","aria-hidden":"true"},"#"),t(" Intro")],-1),f=e("p",null,"After enabling the blog function, the theme allows you to configure categories, tags, whether it is an article, whether it appears in the timeline, stars, sticky and other functions through the frontmatter of the page.",-1),g={class:"hint-container tip"},m=e("p",{class:"hint-container-title"},"Demo",-1),b={href:"https://mister-hope.com/en/",target:"_blank",rel:"noopener noreferrer"},_=e("code",null,"vuepress-theme-hope",-1),y=d('<h2 id="i18n-support" tabindex="-1"><a class="header-anchor" href="#i18n-support" aria-hidden="true">#</a> I18n Support</h2><p>The theme adds support for i18n in blog system. You can set different blog config for each language using <code>locales</code> in theme options.</p><p>When you have multiple languages, the article list, timeline, etc. under each language will remain independent.</p><h2 id="sidebar" tabindex="-1"><a class="header-anchor" href="#sidebar" aria-hidden="true">#</a> Sidebar</h2><p>The theme provides a blog info sidebar. The sidebar will be displayed on the blog-related page (it will be displayed on the right side on the desktop, and retracted into the sidebar in mobile view)</p><p>You can control the display behavior of the sidebar on non-blog related pages through <code>blog.sidebarDisplay</code> in theme options. Optional values are <code>&quot;mobile&quot; | &quot;none&quot; | &quot;always&quot;</code>. The default is <code>&quot;mobile&quot;</code>, that is, when you visit non-blog related pages in mobile view, you can also see it in the sidebar.</p><h2 id="pagination" tabindex="-1"><a class="header-anchor" href="#pagination" aria-hidden="true">#</a> Pagination</h2><p>For the list of articles on all pages, we will display a pagination component at the bottom. You can use this component to quickly jump to the first page, the last page, and the two pages before and after. You can also enter a number to jump to the specified page.</p><p>The default number of articles per page is <code>10</code>, you can set <code>blog.articlePerPage</code> in theme options to override it.</p><h2 id="limitation" tabindex="-1"><a class="header-anchor" href="#limitation" aria-hidden="true">#</a> Limitation</h2><div class="hint-container warning"><p class="hint-container-title">Hot update disabled by default</p><p>For performance reasons, hot updates are not enabled for blog-related data by default in devServer, i.e. if you add new articles or modify the categories, time, tags, sticky, star, etc. of existing articles, the related data of the entire site will not update until you restart devServer.</p><p>In addition, since the blog information will be written to the underlying data of VuePress, modifying this file will cause application restart, so reading time (including word count information) which are sensitive to Markdown content will not take effect in devServer.</p><p>If you want these to take effect or be updated in real time, you need to set <code>hotReload: true</code> and accept the fact that each modification will trigger a page refresh and some time having white screen due to heavy recomputing work.</p></div>',11);function w(v,k){const o=i("ExternalLinkIcon");return n(),r("div",null,[c,p,s(" more "),u,f,e("div",g,[m,e("p",null,[e("a",b,[t("Here is a demo"),l(o)]),t(" for you to preview blog sites built with "),_,t(".")])]),y])}const I=a(h,[["render",w],["__file","intro.html.vue"]]);export{I as default};
