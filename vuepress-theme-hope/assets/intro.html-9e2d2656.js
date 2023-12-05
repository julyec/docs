import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{r as n,o as r,c,a as s,b as e,d as o,e as d,f as i}from"./app-d630ecd8.js";const l={},h=e("p",null,[o("主题通过引入 "),e("code",null,"vuepress-plugin-blog2"),o(" 提供了博客支持，该功能是"),e("strong",null,"默认禁用"),o("的。")],-1),p=e("p",null,[o("如果你需要博客功能，你可以在主题选项中设置 "),e("code",null,"plugins.blog: true"),o(" 来启用博客功能。")],-1),u=e("h2",{id:"介绍",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#介绍","aria-hidden":"true"},"#"),o(" 介绍")],-1),_=e("p",null,"启用博客功能后，主题允许你通过页面的 frontmatter，为页面配置分类、标签、是否是文章、是否出现在时间线中、收藏、置顶等功能。",-1),m={class:"hint-container tip"},f=e("p",{class:"hint-container-title"},"案例",-1),b={href:"https://mister-hope.com/",target:"_blank",rel:"noopener noreferrer"},g=e("code",null,"vuepress-theme-hope",-1),x=i('<h2 id="多语言支持" tabindex="-1"><a class="header-anchor" href="#多语言支持" aria-hidden="true">#</a> 多语言支持</h2><p>主题已为博客系统适配多语言。你可以在主题选项中通过 <code>locales</code> 选项，分别为每一种语言指定属于自己的博客配置。</p><p>当你配置了多语言后，每个语言下的文章列表、时间线等会保持独立。</p><h2 id="侧边栏" tabindex="-1"><a class="header-anchor" href="#侧边栏" aria-hidden="true">#</a> 侧边栏</h2><p>主题提供了一个博客相关的侧边栏。该侧边栏会在博客相关的页面显示 (在桌面会显示在右侧，在移动视图下收起到侧边栏中)</p><p>你可以在主题设置中通过 <code>blog.sidebarDisplay</code> 控制该侧边栏在非博客相关的页面的显示行为。可选的值有 <code>&quot;mobile&quot; | &quot;none&quot; | &quot;always&quot;</code>。默认为 <code>&quot;mobile&quot;</code>，即当你在移动视图下访问非博客相关的页面时，你也可以在侧边栏看到它。</p><h2 id="分页配置" tabindex="-1"><a class="header-anchor" href="#分页配置" aria-hidden="true">#</a> 分页配置</h2><p>对于所有页面的文章列表，我们都会在底部显示一个分页组件。你可以通过这个组件快捷的在首页、尾页、前后两页进行跳转。你也可以输入数字跳转到指定页面。</p><p>默认每个分页的文章数为 <code>10</code>，你可以在主题设置中配置 <code>blog.articlePerPage</code> 来覆盖它。</p><h2 id="限制" tabindex="-1"><a class="header-anchor" href="#限制" aria-hidden="true">#</a> 限制</h2><div class="hint-container warning"><p class="hint-container-title">热更新默认禁用</p><p>出于性能考虑，博客相关数据在开发服务器下默认不启用热更新，也就是如果你新增了文章或者修改了已有文章的分类、时间、标签、置顶、收藏状态等，整个站点的相关数据仅会在重启开发服务器后更新。</p><p>此外，由于博客信息会写入 VuePress 底层数据，修改这一文件会导致开发服务器重启，所以对于 Markdown 内容敏感的阅读时间 (含字数信息) 也<strong>不会在开发服务器下生效</strong>。</p><p>如果你希望实时更新这些内容，你需要设置 <code>hotReload: true</code> 并接受每次修改会触发页面刷新以及由于大量重新计算工作带来的一段白屏时间。</p></div>',11);function q(v,k){const t=n("ExternalLinkIcon");return r(),c("div",null,[h,p,s(" more "),u,_,e("div",m,[f,e("p",null,[e("a",b,[o("这里有一个案例"),d(t)]),o(" 以便你预览使用 "),g,o(" 构建的博客站点。")])]),x])}const w=a(l,[["render",q],["__file","intro.html.vue"]]);export{w as default};
