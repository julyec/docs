import{_ as r}from"./plugin-vue_export-helper-c27b6911.js";import{r as l,o as u,c as d,d as a,a as e,b as n,w as s,e as i}from"./app-d06631bc.js";const h={},f=e("h1",{id:"client-api",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#client-api","aria-hidden":"true"},"#"),n(" Client API")],-1),g={href:"https://www.npmjs.com/package/@vuepress/client",target:"_blank",rel:"noopener noreferrer"},_=e("h2",{id:"composition-api",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#composition-api","aria-hidden":"true"},"#"),n(" Composition API")],-1),v=e("h3",{id:"usepagedata",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#usepagedata","aria-hidden":"true"},"#"),n(" usePageData")],-1),m=e("li",null,[e("p",null,"Details:"),e("p",null,"Returns the page data ref object of current page.")],-1),k=e("p",null,"Also see:",-1),b=e("h3",{id:"usepagefrontmatter",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#usepagefrontmatter","aria-hidden":"true"},"#"),n(" usePageFrontmatter")],-1),x=e("ul",null,[e("li",null,[e("p",null,"Details:"),e("p",null,"Returns the frontmatter ref object of current page."),e("p",null,[n("The value is the "),e("code",null,"frontmatter"),n(" property of the page data.")])])],-1),y=e("h3",{id:"usepagehead",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#usepagehead","aria-hidden":"true"},"#"),n(" usePageHead")],-1),P=e("p",null,"Details:",-1),D=e("p",null,"Returns the head config ref object of current page.",-1),R=i('<h3 id="usepageheadtitle" tabindex="-1"><a class="header-anchor" href="#usepageheadtitle" aria-hidden="true">#</a> usePageHeadTitle</h3><ul><li><p>Details:</p><p>Returns the head title ref object of current page.</p><p>The value is obtained by joining the page title and site title.</p></li></ul><h3 id="usepagelang" tabindex="-1"><a class="header-anchor" href="#usepagelang" aria-hidden="true">#</a> usePageLang</h3><ul><li><p>Details:</p><p>Returns the language ref object of current page.</p><p>The value is the <code>lang</code> property of the page data.</p></li></ul><h3 id="useroutelocale" tabindex="-1"><a class="header-anchor" href="#useroutelocale" aria-hidden="true">#</a> useRouteLocale</h3>',5),w=e("p",null,"Details:",-1),C=e("p",null,"Returns the locale path ref object of current route.",-1),S=i('<h3 id="usesitedata" tabindex="-1"><a class="header-anchor" href="#usesitedata" aria-hidden="true">#</a> useSiteData</h3><ul><li><p>Details:</p><p>Returns the site data ref object.</p></li></ul><h3 id="usesitelocaledata" tabindex="-1"><a class="header-anchor" href="#usesitelocaledata" aria-hidden="true">#</a> useSiteLocaleData</h3><ul><li><p>Details:</p><p>Returns the site data ref object of current locale.</p><p>The properties of current locale have been merged into the root-level properties.</p></li></ul><h2 id="helpers" tabindex="-1"><a class="header-anchor" href="#helpers" aria-hidden="true">#</a> Helpers</h2><h3 id="defineclientconfig" tabindex="-1"><a class="header-anchor" href="#defineclientconfig" aria-hidden="true">#</a> defineClientConfig</h3>',6),T=e("p",null,"Details:",-1),A=e("p",null,"Also see:",-1),j=e("h3",{id:"withbase",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#withbase","aria-hidden":"true"},"#"),n(" withBase")],-1),E=e("p",null,"Details:",-1),V=e("p",null,"Also see:",-1),B=i(`<h2 id="constants" tabindex="-1"><a class="header-anchor" href="#constants" aria-hidden="true">#</a> Constants</h2><p>There are some constants that available in the client side code.</p><p>To shim the types of these constants in client side code, add <code>@vuepress/client/types</code> to your <code>tsconfig.json</code>:</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;compilerOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;types&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;@vuepress/client/types&quot;</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="vuepress-version" tabindex="-1"><a class="header-anchor" href="#vuepress-version" aria-hidden="true">#</a> __ VUEPRESS_VERSION __</h3><ul><li><p>Type: <code>string</code></p></li><li><p>Details:</p><p>Version of VuePress core package.</p></li></ul><h3 id="vuepress-base" tabindex="-1"><a class="header-anchor" href="#vuepress-base" aria-hidden="true">#</a> __ VUEPRESS_BASE __</h3>`,7),L=e("li",null,[e("p",null,[n("Type: "),e("code",null,"string")])],-1),q=e("p",null,"Details:",-1),I=i('<h3 id="vuepress-dev" tabindex="-1"><a class="header-anchor" href="#vuepress-dev" aria-hidden="true">#</a> __ VUEPRESS_DEV __</h3><ul><li><p>Type: <code>boolean</code></p></li><li><p>Details:</p><p>An environment flag indicating whether it is currently running in <code>dev</code> mode.</p></li></ul><h3 id="vuepress-ssr" tabindex="-1"><a class="header-anchor" href="#vuepress-ssr" aria-hidden="true">#</a> __ VUEPRESS_SSR __</h3><ul><li><p>Type: <code>boolean</code></p></li><li><p>Details:</p><p>An environment flag indicating whether it is currently running in server-side-rendering (SSR) build.</p></li></ul><h2 id="advanced" tabindex="-1"><a class="header-anchor" href="#advanced" aria-hidden="true">#</a> Advanced</h2>',5),N={id:"resolvers",tabindex:"-1"},H=e("a",{class:"header-anchor",href:"#resolvers","aria-hidden":"true"},"#",-1),U=i(`<ul><li><p>Type: <code>Record&lt;string, Function&gt;</code></p></li><li><p>Details:</p><p>An reactive object, methods of which determining how to resolve global computed.</p></li><li><p>Example:</p></li></ul><p>Customizing the format of <code>&lt;title&gt;</code> in client config file:</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineClientConfig<span class="token punctuation">,</span> resolvers <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@vuepress/client&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineClientConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function">enhance</span><span class="token punctuation">(</span><span class="token punctuation">{</span> app<span class="token punctuation">,</span> router<span class="token punctuation">,</span> siteData <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    resolvers<span class="token punctuation">.</span><span class="token function-variable function">resolvePageHeadTitle</span> <span class="token operator">=</span> <span class="token punctuation">(</span>page<span class="token punctuation">,</span> siteLocale<span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
      <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>siteLocale<span class="token punctuation">.</span>title<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> &gt; </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>page<span class="token punctuation">.</span>title<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container danger"><p class="hint-container-title">Warning</p><p><code>resolvers</code> will affect the basic functionality of VuePress. Please make sure you have fully understood its purpose before modifying it.</p></div>`,4);function F(O,$){const o=l("NpmBadge"),p=l("ExternalLinkIcon"),t=l("RouterLink"),c=l("Badge");return u(),d("div",null,[f,a(o,{package:"@vuepress/client"}),e("p",null,[n("Client API is provided by "),e("a",g,[n("@vuepress/client"),a(p)]),n(" package, which is used for developing client files.")]),_,v,e("ul",null,[m,e("li",null,[k,e("ul",null,[e("li",null,[a(t,{to:"/reference/node-api.html#data"},{default:s(()=>[n("Node API > Page Properties > data")]),_:1})]),e("li",null,[a(t,{to:"/reference/plugin-api.html#extendspage"},{default:s(()=>[n("Plugin API > extendsPage")]),_:1})])])])]),b,x,y,e("ul",null,[e("li",null,[P,D,e("p",null,[n("The value is obtained by merging and deduplicating "),a(t,{to:"/reference/frontmatter.html#head"},{default:s(()=>[n("head")]),_:1}),n(" frontmatter and "),a(t,{to:"/reference/config.html#head"},{default:s(()=>[n("head")]),_:1}),n(" config.")])])]),R,e("ul",null,[e("li",null,[w,C,e("p",null,[n("The value is one of the keys of the "),a(t,{to:"/reference/config.html#locales"},{default:s(()=>[n("locales")]),_:1}),n(" config.")])])]),S,e("ul",null,[e("li",null,[T,e("p",null,[n("Helper for creating "),a(t,{to:"/reference/plugin-api.html#clientconfigfile"},{default:s(()=>[n("clientConfigFile")]),_:1}),n(".")])]),e("li",null,[A,e("ul",null,[e("li",null,[a(t,{to:"/advanced/cookbook/usage-of-client-config.html"},{default:s(()=>[n("Advanced > Cookbook > Usage of Client Config")]),_:1})])])])]),j,e("ul",null,[e("li",null,[E,e("p",null,[n("Prefix URL with site "),a(t,{to:"/reference/config.html#base"},{default:s(()=>[n("base")]),_:1}),n(".")])]),e("li",null,[V,e("ul",null,[e("li",null,[a(t,{to:"/guide/assets.html#base-helper"},{default:s(()=>[n("Guide > Assets > Base Helper")]),_:1})])])])]),B,e("ul",null,[L,e("li",null,[q,e("p",null,[n("The "),a(t,{to:"/reference/config.html#base"},{default:s(()=>[n("base")]),_:1}),n(" option from config.")])])]),I,e("h3",N,[H,n(" resolvers "),a(c,{text:"experimental"})]),U])}const W=r(h,[["render",F],["__file","client-api.html.vue"]]);export{W as default};
