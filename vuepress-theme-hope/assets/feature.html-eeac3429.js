import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{r as l,o as r,c as u,a as p,b as e,d as o,e as i,w as t,f as n}from"./app-d630ecd8.js";const h={},g=e("p",null,"The following options control features provided by theme.",-1),q=e("h2",{id:"blog-options",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#blog-options","aria-hidden":"true"},"#"),o(" Blog Options")],-1),b=e("code",null,"vuepress-plugin-blog2",-1),m=e("strong",null,"disabled",-1),f=e("p",null,[o("To enable blog plugin and use default options, you can set "),e("code",null,"plugins.blog"),o(" to "),e("code",null,"true"),o(" in theme options.")],-1),y={class:"hint-container warning"},v=e("p",{class:"hint-container-title"},"Note",-1),_=e("p",null,"The following options will have NO effects unless you enable blog plugin.",-1),k=n('<h3 id="blog-name" tabindex="-1"><a class="header-anchor" href="#blog-name" aria-hidden="true">#</a> blog.name</h3><ul><li>Type: <code>string</code></li><li>Default: <code>author</code></li></ul><p>Blogger name.</p><h3 id="blog-avatar" tabindex="-1"><a class="header-anchor" href="#blog-avatar" aria-hidden="true">#</a> blog.avatar</h3><ul><li>Type: <code>string</code></li><li>Default: <code>logo</code></li></ul><p>Blogger avatar.</p><h3 id="blog-description" tabindex="-1"><a class="header-anchor" href="#blog-description" aria-hidden="true">#</a> blog.description</h3><ul><li>Type: <code>string</code></li><li>Required: No</li></ul><p>Motto, slogan or a short description.</p><h3 id="blog-intro" tabindex="-1"><a class="header-anchor" href="#blog-intro" aria-hidden="true">#</a> blog.intro</h3><ul><li>Type: <code>string</code></li><li>Required: No</li></ul><p>Personal introduction address of the blogger.</p><div class="hint-container note"><p class="hint-container-title">Note</p><p>Visitors can click on the avatar or name in &quot;Blogger Information&quot; to enter the personal introduction page.</p></div><h3 id="blog-medias" tabindex="-1"><a class="header-anchor" href="#blog-medias" aria-hidden="true">#</a> blog.medias</h3><ul><li>Type: <code>Record&lt;string, string | [string, string]&gt;</code></li><li>Required: No</li></ul><p>Set social links.</p><ul><li><p>If the social media icon is available below, you can set <code>MediaName: MediaLink</code> directly.</p></li><li><p>Otherwise, you should pass in a tuple <code>MediaName: [MediaLink , MediaSvgIconString or MediaSvgIconPath]</code>,</p><p>The second element in the tuple must be a valid SVG string or a full path of an existing SVG file.</p></li></ul><div class="hint-container info"><p class="hint-container-title">Available Social Media</p><p>The following social medias has built-in icons:</p><ul><li><code>&quot;Baidu&quot;</code></li><li><code>&quot;BiliBili&quot;</code></li><li><code>&quot;Bitbucket&quot;</code></li><li><code>&quot;Dingding&quot;</code></li><li><code>&quot;Discord&quot;</code></li><li><code>&quot;Douban&quot;</code></li><li><code>&quot;Dribbble&quot;</code></li><li><code>&quot;Email&quot;</code></li><li><code>&quot;Evernote&quot;</code></li><li><code>&quot;Facebook&quot;</code></li><li><code>&quot;Flipboard&quot;</code></li><li><code>&quot;Gitee&quot;</code></li><li><code>&quot;GitHub&quot;</code></li><li><code>&quot;Gitlab&quot;</code></li><li><code>&quot;Gmail&quot;</code></li><li><code>&quot;Instagram&quot;</code></li><li><code>&quot;Lark&quot;</code></li><li><code>&quot;Line&quot;</code></li><li><code>&quot;Linkedin&quot;</code></li><li><code>&quot;Pinterest&quot;</code></li><li><code>&quot;Pocket&quot;</code></li><li><code>&quot;QQ&quot;</code></li><li><code>&quot;Qzone&quot;</code></li><li><code>&quot;Reddit&quot;</code></li><li><code>&quot;Rss&quot;</code></li><li><code>&quot;Steam&quot;</code></li><li><code>&quot;Skype&quot;</code></li><li><code>&quot;Telegram&quot;</code></li><li><code>&quot;Twitter&quot;</code></li><li><code>&quot;Wechat&quot;</code></li><li><code>&quot;Weibo&quot;</code></li><li><code>&quot;Whatsapp&quot;</code></li><li><code>&quot;Youtube&quot;</code></li><li><code>&quot;Zhihu&quot;</code></li></ul></div><h3 id="blog-roundavatar" tabindex="-1"><a class="header-anchor" href="#blog-roundavatar" aria-hidden="true">#</a> blog.roundAvatar</h3><ul><li>Type: <code>boolean</code></li><li>Default: <code>false</code></li></ul><p>Whether clipping the avatar with round shape</p><h3 id="blog-sidebardisplay" tabindex="-1"><a class="header-anchor" href="#blog-sidebardisplay" aria-hidden="true">#</a> blog.sidebarDisplay</h3><ul><li>Type: <code>&quot;mobile&quot; | &quot;none&quot; | &quot;always&quot;</code></li><li>Default: <code>&quot;mobile&quot;</code></li></ul><p>Whether to show blogger information in the sidebar</p><ul><li><code>&quot;mobile&quot;</code>: Show in sidebar in mobile view</li><li><code>&quot;always&quot;</code>: Always show in the sidebar</li><li><code>&quot;none&quot;</code>: Never show in the sidebar</li></ul><h3 id="blog-timeline" tabindex="-1"><a class="header-anchor" href="#blog-timeline" aria-hidden="true">#</a> blog.timeline</h3><ul><li>Type: <code>string</code></li><li>Default: <code>&quot;Yesterday once more&quot;</code></li></ul><p>Text on the top of timeline page.</p><h3 id="blog-articleperpage" tabindex="-1"><a class="header-anchor" href="#blog-articleperpage" aria-hidden="true">#</a> blog.articlePerPage</h3><ul><li>Type: <code>number</code></li><li>Default: <code>10</code></li></ul><p>Article number per page</p><h3 id="blog-articleinfo" tabindex="-1"><a class="header-anchor" href="#blog-articleinfo" aria-hidden="true">#</a> blog.articleInfo</h3><ul><li>Type: <code>ArticleInfo[]</code></li><li>Default: <code>[&quot;Author&quot;, &quot;Original&quot;, &quot;Date&quot;, &quot;PageView&quot;, &quot;Category&quot;, &quot;Tag&quot;, &quot;ReadingTime&quot;]</code></li></ul><p>Article info displayed in article list</p><p>Available values for <code>ArticleInfo</code>:</p><ul><li><code>&quot;Author&quot;</code></li><li><code>&quot;Category&quot;</code></li><li><code>&quot;Date&quot;</code></li><li><code>&quot;Original&quot;</code></li><li><code>&quot;Tag&quot;</code></li><li><code>&quot;ReadingTime&quot;</code></li><li><code>&quot;Word&quot;</code></li></ul>',36),w={class:"hint-container warning"},T=e("p",{class:"hint-container-title"},"Limitation",-1),x={id:"encrypt-config",tabindex:"-1"},N=e("a",{class:"header-anchor",href:"#encrypt-config","aria-hidden":"true"},"#",-1),D=n(`<div class="hint-container note"><p class="hint-container-title">Note</p><p>You can only set this option directly under theme options, setting it in each locale <strong>has NO effect</strong>.</p></div><h3 id="encrypt-global" tabindex="-1"><a class="header-anchor" href="#encrypt-global" aria-hidden="true">#</a> encrypt.global</h3><ul><li>Type: <code>boolean</code></li><li>Default: <code>false</code></li></ul><p>Whether to encrypt globally.</p><h3 id="encrypt-admin" tabindex="-1"><a class="header-anchor" href="#encrypt-admin" aria-hidden="true">#</a> encrypt.admin</h3><ul><li>Type: <code>string | string []</code></li><li>Required: No</li></ul><p>Admin password with the highest authority, you can set multiple ones by using array.</p><h3 id="encrypt-config-1" tabindex="-1"><a class="header-anchor" href="#encrypt-config-1" aria-hidden="true">#</a> encrypt.config</h3><ul><li>Type: <code>Record &lt;string, string | string []&gt;</code></li><li>Required: No</li></ul><p>The encryption configuration is an object with a key name matching the path and a key-value corresponding to a password that accepts a string or an array of strings.</p><details class="hint-container details"><summary>Example</summary><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token comment">// This will encrypt the entire guide directory and both passwords will be available</span>
  <span class="token string-property property">&quot;/guide/&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;1234&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;5678&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token comment">// this will only encrypt config/page.html</span>
  <span class="token string-property property">&quot;/config/page.html&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1234&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,11);function R(B,S){const d=l("ProjectLink"),a=l("RouterLink"),c=l("Badge");return r(),u("div",null,[g,p(" more "),q,e("p",null,[o("The theme adds blog feature using "),i(d,{name:"blog2"},{default:t(()=>[b]),_:1}),o(", and the feature is "),m,o(" by default.")]),f,e("div",y,[v,_,e("p",null,[o("For details, see "),i(a,{to:"/guide/blog/intro.html"},{default:t(()=>[o("Blog Feature Intro")]),_:1}),o(".")])]),k,e("div",w,[T,e("p",null,[o("ReadingTime and Word are not available in devServer by default, "),i(a,{to:"/config/theme/basic.html#hotreload"},{default:t(()=>[o("see reasons and how to enable it")]),_:1}),o(".")])]),e("h2",x,[N,o(" Encrypt Config "),i(c,{text:"Root only",type:"warning"})]),e("p",null,[o("For details, see "),i(a,{to:"/guide/feature/encrypt.html"},{default:t(()=>[o("Encrypt Intro")]),_:1}),o(".")]),D])}const L=s(h,[["render",R],["__file","feature.html.vue"]]);export{L as default};
