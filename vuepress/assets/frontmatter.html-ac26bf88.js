import{_ as u}from"./plugin-vue_export-helper-c27b6911.js";import{r as i,o as r,c,d as a,a as e,b as n,w as t,e as l}from"./app-d06631bc.js";const d={},h=e("h1",{id:"frontmatter",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#frontmatter","aria-hidden":"true"},"#"),n(" Frontmatter")],-1),m=e("h2",{id:"all-pages",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#all-pages","aria-hidden":"true"},"#"),n(" All Pages")],-1),k=e("p",null,"Frontmatter in this section will take effect in all types of pages.",-1),f=e("h3",{id:"externallinkicon",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#externallinkicon","aria-hidden":"true"},"#"),n(" externalLinkIcon")],-1),g=e("li",null,[e("p",null,[n("Type: "),e("code",null,"boolean")])],-1),v=e("p",null,"Details:",-1),b=e("p",null,"Also see:",-1),_=e("h3",{id:"navbar",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#navbar","aria-hidden":"true"},"#"),n(" navbar")],-1),y=e("li",null,[e("p",null,[n("Type: "),e("code",null,"boolean")])],-1),x=e("li",null,[e("p",null,"Details:"),e("p",null,"Show navbar on this page or not."),e("p",null,"If you disable navbar in theme config, this frontmatter will not take effect.")],-1),T=e("p",null,"Also see:",-1),w=l(`<h3 id="pageclass" tabindex="-1"><a class="header-anchor" href="#pageclass" aria-hidden="true">#</a> pageClass</h3><ul><li><p>Type: <code>string</code></p></li><li><p>Details:</p><p>Add extra class name to this page.</p></li><li><p>Example:</p></li></ul><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token front-matter-block"><span class="token punctuation">---</span>
<span class="token front-matter yaml language-yaml"><span class="token key atrule">pageClass</span><span class="token punctuation">:</span> custom<span class="token punctuation">-</span>page<span class="token punctuation">-</span>class</span>
<span class="token punctuation">---</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Then you can customize styles of this page in <code>.vuepress/styles/index.scss</code> file:</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token selector">.theme-container.custom-page-class </span><span class="token punctuation">{</span>
  <span class="token comment">/* page styles */</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),D=l(`<h2 id="home-page" tabindex="-1"><a class="header-anchor" href="#home-page" aria-hidden="true">#</a> Home Page</h2><p>Frontmatter in this section will only take effect in home pages.</p><h3 id="home" tabindex="-1"><a class="header-anchor" href="#home" aria-hidden="true">#</a> home</h3><ul><li><p>Type: <code>boolean</code></p></li><li><p>Details:</p><p>Specify whether the page is homepage or a normal page.</p><p>If you don&#39;t set this frontmatter or set it to <code>false</code>, the page would be a <a href="#normal-page">normal page</a>.</p></li><li><p>Example:</p></li></ul><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token front-matter-block"><span class="token punctuation">---</span>
<span class="token front-matter yaml language-yaml"><span class="token key atrule">home</span><span class="token punctuation">:</span> <span class="token boolean important">true</span></span>
<span class="token punctuation">---</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="heroimage" tabindex="-1"><a class="header-anchor" href="#heroimage" aria-hidden="true">#</a> heroImage</h3><ul><li><p>Type: <code>string</code></p></li><li><p>Details:</p><p>Specify the url of the hero image.</p></li><li><p>Example:</p></li></ul><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token front-matter-block"><span class="token punctuation">---</span>
<span class="token front-matter yaml language-yaml"><span class="token comment"># public file path</span>
<span class="token key atrule">heroImage</span><span class="token punctuation">:</span> /images/hero.png
<span class="token comment"># url</span>
<span class="token key atrule">heroImage</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//vuejs.org/images/logo.png</span>
<span class="token punctuation">---</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),S=e("h3",{id:"heroimagedark",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#heroimagedark","aria-hidden":"true"},"#"),n(" heroImageDark")],-1),A=e("li",null,[e("p",null,[n("Type: "),e("code",null,"string")])],-1),C=e("li",null,[e("p",null,"Details:"),e("p",null,"Specify the url of hero image to be used in dark mode."),e("p",null,"You can make use of this option if you want to use different heroImage config in dark mode.")],-1),L=e("p",null,"Also see:",-1),I=e("li",null,[e("a",{href:"#heroimage"},"Default Theme > Frontmatter > heroImage")],-1),N=l('<h3 id="heroalt" tabindex="-1"><a class="header-anchor" href="#heroalt" aria-hidden="true">#</a> heroAlt</h3><ul><li><p>Type: <code>string</code></p></li><li><p>Details:</p><p>Specify the <code>alt</code> attribute of the hero image.</p><p>This will fallback to the <a href="#heroText">heroText</a>.</p></li></ul><h3 id="heroheight" tabindex="-1"><a class="header-anchor" href="#heroheight" aria-hidden="true">#</a> heroHeight</h3>',3),E=e("li",null,[e("p",null,[n("Type: "),e("code",null,"number")])],-1),P=e("li",null,[e("p",null,[n("Default: "),e("code",null,"280")])],-1),V=e("p",null,"Details:",-1),F=e("p",null,[n("Specify the "),e("code",null,"height"),n(" attribute of the hero "),e("code",null,"<img>"),n(" tag.")],-1),j=e("p",null,"You may need to reduce this value if the height of your hero image is less than the default value.",-1),H={href:"https://web.dev/cls/",target:"_blank",rel:"noopener noreferrer"},B=e("h3",{id:"herotext",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#herotext","aria-hidden":"true"},"#"),n(" heroText")],-1),M=e("li",null,[e("p",null,[n("Type: "),e("code",null,"string | null")])],-1),q=e("p",null,"Details:",-1),G=e("p",null,"Specify the the hero text.",-1),R=e("p",null,[n("Set to "),e("code",null,"null"),n(" to disable hero text.")],-1),U=e("h3",{id:"tagline",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#tagline","aria-hidden":"true"},"#"),n(" tagline")],-1),Y=e("li",null,[e("p",null,[n("Type: "),e("code",null,"string | null")])],-1),z=e("p",null,"Details:",-1),O=e("p",null,"Specify the the tagline.",-1),J=e("p",null,[n("Set to "),e("code",null,"null"),n(" to disable tagline.")],-1),K=l(`<h3 id="actions" tabindex="-1"><a class="header-anchor" href="#actions" aria-hidden="true">#</a> actions</h3><ul><li>Type:</li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token builtin">Array</span><span class="token operator">&lt;</span><span class="token punctuation">{</span>
  text<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  link<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  type<span class="token operator">?</span><span class="token operator">:</span> <span class="token string">&quot;primary&quot;</span> <span class="token operator">|</span> <span class="token string">&quot;secondary&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>Details:</p><p>Configuration of the action buttons.</p></li><li><p>Example:</p></li></ul><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token front-matter-block"><span class="token punctuation">---</span>
<span class="token front-matter yaml language-yaml"><span class="token key atrule">actions</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">text</span><span class="token punctuation">:</span> Get Started
    <span class="token key atrule">link</span><span class="token punctuation">:</span> /guide/getting<span class="token punctuation">-</span>started.html
    <span class="token key atrule">type</span><span class="token punctuation">:</span> primary
  <span class="token punctuation">-</span> <span class="token key atrule">text</span><span class="token punctuation">:</span> Introduction
    <span class="token key atrule">link</span><span class="token punctuation">:</span> /guide/
    <span class="token key atrule">type</span><span class="token punctuation">:</span> secondary</span>
<span class="token punctuation">---</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="features" tabindex="-1"><a class="header-anchor" href="#features" aria-hidden="true">#</a> features</h3><ul><li>Type:</li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token builtin">Array</span><span class="token operator">&lt;</span><span class="token punctuation">{</span>
  title<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  details<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>Details:</p><p>Configuration of the features list.</p></li><li><p>Example:</p></li></ul><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token front-matter-block"><span class="token punctuation">---</span>
<span class="token front-matter yaml language-yaml"><span class="token key atrule">features</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> Simplicity First
    <span class="token key atrule">details</span><span class="token punctuation">:</span> Minimal setup with markdown<span class="token punctuation">-</span>centered project structure helps you focus on writing.
  <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> Vue<span class="token punctuation">-</span>Powered
    <span class="token key atrule">details</span><span class="token punctuation">:</span> Enjoy the dev experience of Vue<span class="token punctuation">,</span> use Vue components in markdown<span class="token punctuation">,</span> and develop custom themes with Vue.
  <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> Performant
    <span class="token key atrule">details</span><span class="token punctuation">:</span> VuePress generates pre<span class="token punctuation">-</span>rendered static HTML for each page<span class="token punctuation">,</span> and runs as an SPA once a page is loaded.</span>
<span class="token punctuation">---</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="footer" tabindex="-1"><a class="header-anchor" href="#footer" aria-hidden="true">#</a> footer</h3><ul><li><p>Type: <code>string</code></p></li><li><p>Details:</p><p>Specify the content of the footer.</p></li></ul><h3 id="footerhtml" tabindex="-1"><a class="header-anchor" href="#footerhtml" aria-hidden="true">#</a> footerHtml</h3><ul><li><p>Type: <code>boolean</code></p></li><li><p>Details:</p><p>Allow HTML in footer or not.</p><p>If you set it to <code>true</code>, the <a href="#footer">footer</a> will be treated as HTML code.</p></li></ul><h2 id="normal-page" tabindex="-1"><a class="header-anchor" href="#normal-page" aria-hidden="true">#</a> Normal Page</h2><p>Frontmatter in this section will only take effect in normal pages.</p><h3 id="editlink" tabindex="-1"><a class="header-anchor" href="#editlink" aria-hidden="true">#</a> editLink</h3>`,17),Q=e("li",null,[e("p",null,[n("Type: "),e("code",null,"boolean")])],-1),W=e("li",null,[e("p",null,"Details:"),e("p",null,[n("Enable the "),e("em",null,"edit this page"),n(" link in this page or not.")])],-1),X=e("p",null,"Also see:",-1),Z=e("h3",{id:"editlinkpattern",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#editlinkpattern","aria-hidden":"true"},"#"),n(" editLinkPattern")],-1),$=e("li",null,[e("p",null,[n("Type: "),e("code",null,"string")])],-1),ee=e("li",null,[e("p",null,"Details:"),e("p",null,[n("Specify the pattern of the "),e("em",null,"edit this page"),n(" link of this page.")])],-1),ne=e("p",null,"Also see:",-1),ae=e("h3",{id:"lastupdated",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#lastupdated","aria-hidden":"true"},"#"),n(" lastUpdated")],-1),se=e("li",null,[e("p",null,[n("Type: "),e("code",null,"boolean")])],-1),te=e("li",null,[e("p",null,"Details:"),e("p",null,[n("Enable the "),e("em",null,"last updated timestamp"),n(" in this page or not.")])],-1),le=e("p",null,"Also see:",-1),ie=e("h3",{id:"contributors",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#contributors","aria-hidden":"true"},"#"),n(" contributors")],-1),oe=e("li",null,[e("p",null,[n("Type: "),e("code",null,"boolean")])],-1),pe=e("li",null,[e("p",null,"Details:"),e("p",null,[n("Enable the "),e("em",null,"contributors list"),n(" in this page or not.")])],-1),ue=e("p",null,"Also see:",-1),re=e("h3",{id:"sidebar",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#sidebar","aria-hidden":"true"},"#"),n(" sidebar")],-1),ce=e("li",null,[e("p",null,[n("Type: "),e("code",null,"false | 'auto' | SidebarConfigArray | SidebarConfigObject")])],-1),de=e("li",null,[e("p",null,"Details:"),e("p",null,"Configure the sidebar of this page.")],-1),he=e("p",null,"Also see:",-1),me=e("h3",{id:"sidebardepth",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#sidebardepth","aria-hidden":"true"},"#"),n(" sidebarDepth")],-1),ke=e("li",null,[e("p",null,[n("Type: "),e("code",null,"number")])],-1),fe=e("li",null,[e("p",null,"Details:"),e("p",null,"Configure the sidebar depth of this page.")],-1),ge=e("p",null,"Also see:",-1),ve=l(`<h3 id="prev" tabindex="-1"><a class="header-anchor" href="#prev" aria-hidden="true">#</a> prev</h3><ul><li><p>Type: <code>NavLink | string</code></p></li><li><p>Details:</p><p>Specify the link of the previous page.</p><p>If you don&#39;t set this frontmatter, the link will be inferred from the sidebar config.</p><p>To configure the prev link manually, you can set this frontmatter to a <code>NavLink</code> object or a string:</p><ul><li>A <code>NavLink</code> object should have a <code>text</code> field and a <code>link</code> field.</li><li>A string should be the path to the target page file. It will be converted to a <code>NavLink</code> object, whose <code>text</code> is the page title, and <code>link</code> is the page route path.</li></ul></li><li><p>Example:</p></li></ul><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token front-matter-block"><span class="token punctuation">---</span>
<span class="token front-matter yaml language-yaml"><span class="token comment"># NavLink</span>
<span class="token key atrule">prev</span><span class="token punctuation">:</span>
  <span class="token key atrule">text</span><span class="token punctuation">:</span> Get Started
  <span class="token key atrule">link</span><span class="token punctuation">:</span> /guide/getting<span class="token punctuation">-</span>started.html

<span class="token comment"># NavLink - external url</span>
<span class="token key atrule">prev</span><span class="token punctuation">:</span>
  <span class="token key atrule">text</span><span class="token punctuation">:</span> GitHub
  <span class="token key atrule">link</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//github.com

<span class="token comment"># string - page file path</span>
<span class="token key atrule">prev</span><span class="token punctuation">:</span> /guide/getting<span class="token punctuation">-</span>started.md

<span class="token comment"># string - page file relative path</span>
<span class="token key atrule">prev</span><span class="token punctuation">:</span> ../../guide/getting<span class="token punctuation">-</span>started.md</span>
<span class="token punctuation">---</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="next" tabindex="-1"><a class="header-anchor" href="#next" aria-hidden="true">#</a> next</h3><ul><li><p>Type: <code>NavLink | string</code></p></li><li><p>Details:</p><p>Specify the link of the next page.</p><p>If you don&#39;t set this frontmatter, the link will be inferred from the sidebar config.</p><p>The type is the same as <a href="#prev">prev</a> frontmatter.</p></li></ul>`,5);function be(_e,ye){const o=i("NpmBadge"),s=i("RouterLink"),p=i("ExternalLinkIcon");return r(),c("div",null,[h,a(o,{package:"@vuepress/theme-default"}),m,k,f,e("ul",null,[g,e("li",null,[v,e("p",null,[n("Provided by "),a(s,{to:"/reference/plugin/external-link-icon.html#externallinkicon"},{default:t(()=>[n("@vuepress/plugin-external-link-icon")]),_:1}),n(".")])]),e("li",null,[b,e("ul",null,[e("li",null,[a(s,{to:"/reference/default-theme/config.html#themeplugins-externallinkicon"},{default:t(()=>[n("Default Theme > Config Reference > themePlugins.externalLinkIcon")]),_:1})])])])]),_,e("ul",null,[y,x,e("li",null,[T,e("ul",null,[e("li",null,[a(s,{to:"/reference/default-theme/config.html#navbar"},{default:t(()=>[n("Default Theme > Config > navbar")]),_:1})])])])]),w,e("ul",null,[e("li",null,[n("Also see: "),e("ul",null,[e("li",null,[a(s,{to:"/reference/default-theme/styles.html#style-file"},{default:t(()=>[n("Default Theme > Styles > Style File")]),_:1})])])])]),D,e("ul",null,[e("li",null,[n("Also see: "),e("ul",null,[e("li",null,[a(s,{to:"/guide/assets.html#public-files"},{default:t(()=>[n("Guide > Assets > Public Files")]),_:1})])])])]),S,e("ul",null,[A,C,e("li",null,[L,e("ul",null,[I,e("li",null,[a(s,{to:"/reference/default-theme/config.html#colormode"},{default:t(()=>[n("Default Theme > Config > colorMode")]),_:1})])])])]),N,e("ul",null,[E,P,e("li",null,[V,F,j,e("p",null,[n("Notice that the height is also constrained by CSS. This attribute is to reduce "),e("a",H,[n("Cumulative Layout Shift (CLS)"),a(p)]),n(" that caused by the loading of the hero image.")])])]),B,e("ul",null,[M,e("li",null,[q,G,e("p",null,[n("This will fallback to the site "),a(s,{to:"/reference/config.html#title"},{default:t(()=>[n("title")]),_:1}),n(".")]),R])]),U,e("ul",null,[Y,e("li",null,[z,O,e("p",null,[n("This will fallback to the site "),a(s,{to:"/reference/config.html#description"},{default:t(()=>[n("description")]),_:1}),n(".")]),J])]),K,e("ul",null,[Q,W,e("li",null,[X,e("ul",null,[e("li",null,[a(s,{to:"/reference/default-theme/config.html#editlink"},{default:t(()=>[n("Default Theme > Config > editLink")]),_:1})])])])]),Z,e("ul",null,[$,ee,e("li",null,[ne,e("ul",null,[e("li",null,[a(s,{to:"/reference/default-theme/config.html#editlinkpattern"},{default:t(()=>[n("Default Theme > Config > editLinkPattern")]),_:1})])])])]),ae,e("ul",null,[se,te,e("li",null,[le,e("ul",null,[e("li",null,[a(s,{to:"/reference/default-theme/config.html#lastupdated"},{default:t(()=>[n("Default Theme > Config > lastUpdated")]),_:1})])])])]),ie,e("ul",null,[oe,pe,e("li",null,[ue,e("ul",null,[e("li",null,[a(s,{to:"/reference/default-theme/config.html#contributors"},{default:t(()=>[n("Default Theme > Config > contributors")]),_:1})])])])]),re,e("ul",null,[ce,de,e("li",null,[he,e("ul",null,[e("li",null,[a(s,{to:"/reference/default-theme/config.html#sidebar"},{default:t(()=>[n("Default Theme > Config > sidebar")]),_:1})])])])]),me,e("ul",null,[ke,fe,e("li",null,[ge,e("ul",null,[e("li",null,[a(s,{to:"/reference/default-theme/config.html#sidebardepth"},{default:t(()=>[n("Default Theme > Config > sidebarDepth")]),_:1})])])])]),ve])}const we=u(d,[["render",be],["__file","frontmatter.html.vue"]]);export{we as default};
