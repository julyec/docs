import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{r as l,o as a,c,b as e,d as t,e as n,w as i,a as s,f as h}from"./app-d630ecd8.js";const r={},p=e("code",null,"vuepress-theme-hope",-1),u=e("code",null,"vuepress-plugin-feed2",-1),f=e("div",{class:"hint-container info"},[e("p",{class:"hint-container-title"},"相关信息"),e("p",null,[e("code",null,"vuepress-theme-hope"),t(" 将主题选项中的 "),e("code",null,"plugins.feed"),t(" 选项作为插件选项提供给 "),e("code",null,"vuepress-plugin-feed2"),t("。")])],-1),_=h('<h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h2><p><code>vuepress-plugin-feed2</code> 插件可为你生成以下三种格式的 feed 文件:</p><ul><li>Atom 1.0</li><li>JSON 1.1</li><li>RSS 2.0</li></ul><div class="hint-container tip"><p class="hint-container-title">提示</p><p>Atom 和 JSON 是为了提供更多 Feed 软件的适配而提供的。</p><p>如果可以，请尽可能使用 RSS。</p></div><p>请按照需要生成的格式，在主题选项中设置 <code>plugins.feed.atom</code>, <code>plugins.feed.json</code> 或 <code>plugins.feed.rss</code> 为 <code>true</code>。</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>当然，你可以都输出它们，这不是一个三选一。</p></div><p>考虑到现在 Feed 已经很小众，此插件旨在提供最小配置来尽可能自动生成详细的 Feed 文件。当然此插件也预留了充足的设置项，以让你自由定义 Feed 的输出内容。</p><h2 id="频道设置" tabindex="-1"><a class="header-anchor" href="#频道设置" aria-hidden="true">#</a> 频道设置</h2><p>你可以在主题选项中通过设置 <code>plugins.feed.channel</code> 选项来自自定义 Feed 频道的各项信息。</p><p>我们推荐进行如下设置:</p><ul><li>将建立 Feed 的日期转换为 ISOString 写入到 <code>channel.pubDate</code> 中</li><li>通过 <code>channel.ttl</code> 中设置内容的更新周期(单位: 分钟)</li><li>通过 <code>channel.copyright</code> 设置版权信息，或回退到主题选项中的 <code>copyright</code></li><li>通过 <code>channel.author</code> 设置频道作者，或回退到主题选项中的 <code>author</code>。</li></ul><div class="hint-container tip"><p class="hint-container-title">默认频道设置</p><ul><li><p>频道的标题、描述默认为站点的名称与链接。</p></li><li><p>频道的链接、最后更新时间会由插件自动生成。</p></li><li><p>频道的版权信息会尝试从页脚的版权信息中读取。</p></li></ul></div>',12),m=e("h2",{id:"生成控制",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#生成控制","aria-hidden":"true"},"#"),t(" 生成控制")],-1),g=e("h3",{id:"项目默认生成逻辑",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#项目默认生成逻辑","aria-hidden":"true"},"#"),t(" 项目默认生成逻辑")],-1),v=e("p",null,"默认情况下，所有文章均会被添加至 feed 流。",-1),x=e("h3",{id:"自定义页面",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#自定义页面","aria-hidden":"true"},"#"),t(" 自定义页面")],-1),F=e("p",null,[t("你可以通过配置 frontmatter 中的 "),e("code",null,"feed"),t(" 选项，对特定文章的 feed 项目生成的内容进行控制。")],-1),b=e("h3",{id:"自定义-feed-生成",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#自定义-feed-生成","aria-hidden":"true"},"#"),t(" 自定义 Feed 生成")],-1),S=e("p",null,[t("你可以通过配置插件选项中的 "),e("code",null,"getter"),t("，完全控制 Feed 项目的生成逻辑。")],-1),N=e("h3",{id:"多语言配置",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#多语言配置","aria-hidden":"true"},"#"),t(" 多语言配置")],-1),z=e("p",null,"插件会针对每个语言生成单独的 Feed。",-1),V=e("p",null,[t("你可以通过插件选项中的 "),e("code",null,"locales"),t(" 分别对不同语言提供不同的默认设置。")],-1);function k(j,B){const d=l("ProjectLink");return a(),c("div",null,[e("p",null,[p,t(" 通过内置 "),n(d,{name:"feed2",path:"/zh/"},{default:i(()=>[u]),_:1}),t(" 插件来为你提供 feed 支持。")]),f,s(" more "),_,e("p",null,[t("详细的选项及其默认值详见 "),n(d,{name:"feed2",path:"/zh/config/channel.html"},{default:i(()=>[t("配置 → 频道设置")]),_:1}),t("。")]),m,g,v,e("p",null,[t("关于默认情况下读取的内容，详见 "),n(d,{name:"feed2",path:"/zh/config/item.html"},{default:i(()=>[t("配置 → 项目控制")]),_:1}),t("。")]),x,F,e("p",null,[t("详细的选项及其默认值详见 "),n(d,{name:"feed2",path:"/zh/config/item.html"},{default:i(()=>[t("配置 → 项目设置")]),_:1}),t("。")]),b,S,e("p",null,[t("详细的选项及其默认值详见 "),n(d,{name:"feed2",path:"/zh/config/getter.html"},{default:i(()=>[t("配置 → Feed 获取器")]),_:1}),t("。")]),N,z,V])}const w=o(r,[["render",k],["__file","feed.html.vue"]]);export{w as default};
