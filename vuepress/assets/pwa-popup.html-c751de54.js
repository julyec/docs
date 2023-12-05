import{_ as l}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o as c,c as u,d as a,a as n,b as s,w as p,e as o}from"./app-4560479e.js";const r={},d=n("h1",{id:"pwa-popup",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#pwa-popup","aria-hidden":"true"},"#"),s(" pwa-popup")],-1),k=n("p",null,"Provide a popup component for users to activate the new PWA service worker manually.",-1),v=n("code",null,"skipWaiting",-1),m=n("code",null,"true",-1),h=o(`<p>When the new service worker is ready, a popup will appear in the right bottom of the page to ask users to activate the waiting service worker.</p><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> i <span class="token parameter variable">-D</span> @vuepress/plugin-pwa-popup@next
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> pwaPlugin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@vuepress/plugin-pwa&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> pwaPopupPlugin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@vuepress/plugin-pwa-popup&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  plugins<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">pwaPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">pwaPopupPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token comment">// options</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options" aria-hidden="true">#</a> Options</h2><h3 id="locales" tabindex="-1"><a class="header-anchor" href="#locales" aria-hidden="true">#</a> locales</h3><ul><li><p>Type: <code>Record&lt;string, { message: string, buttonText: string }&gt;</code></p></li><li><p>Details:</p><p>The messages of the popup in different locales.</p><p>If this option is not specified, it will fallback to default messages.</p></li><li><p>Example:</p></li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  plugins<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">pwaPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">pwaPopupPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      locales<span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&quot;/&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          message<span class="token operator">:</span> <span class="token string">&quot;New content is available.&quot;</span><span class="token punctuation">,</span>
          buttonText<span class="token operator">:</span> <span class="token string">&quot;Refresh&quot;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;/zh/&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          message<span class="token operator">:</span> <span class="token string">&quot;发现新内容可用&quot;</span><span class="token punctuation">,</span>
          buttonText<span class="token operator">:</span> <span class="token string">&quot;刷新&quot;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),g=o('<h2 id="styles" tabindex="-1"><a class="header-anchor" href="#styles" aria-hidden="true">#</a> Styles</h2><p>You can customize the style of the popup via CSS variables:</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>File not found</code></pre><div class="line-numbers" aria-hidden="true"></div></div>',3);function b(f,w){const i=t("NpmBadge"),e=t("RouterLink");return c(),u("div",null,[d,a(i,{package:"@vuepress/plugin-pwa-popup"}),k,n("p",null,[s("This plugin must be used together with "),a(e,{to:"/reference/plugin/pwa.html"},{default:p(()=>[s("pwa plugin")]),_:1}),s(", and the "),v,s(" option must not be set to "),m,s(".")]),h,n("ul",null,[n("li",null,[s("Also see: "),n("ul",null,[n("li",null,[a(e,{to:"/guide/i18n.html"},{default:p(()=>[s("Guide > I18n")]),_:1})])])])]),g])}const x=l(r,[["render",b],["__file","pwa-popup.html.vue"]]);export{x as default};
