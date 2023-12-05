import{_ as p}from"./plugin-vue_export-helper-c27b6911.js";import{r as i,o as l,c,a as u,b as s,d as n,e as t,w as o,f as a}from"./app-d630ecd8.js";const d={},r=s("p",null,"This tutorial guides you how to customize theme effects.",-1),m=a(`<h2 id="clear-effects" tabindex="-1"><a class="header-anchor" href="#clear-effects" aria-hidden="true">#</a> Clear Effects</h2><p>By default, the theme will:</p><ul><li>Use color list to decorate categories and tags</li><li>Add animation when switching pages and elements</li><li>Add ease-in animations to homepage elements, and add hovering effects to features.</li><li>Use a more fancy code copy button</li><li>Use fancy tooltips.</li><li>Added fade-in when switching between day mode and night mode</li></ul><p>If you need to remove these fancy styles, please set <code>pure: true</code> in the theme options to enable pure mode.</p><p>Meanwhile, you can control the duration of the animation by controlling <code>$color-transition</code> and <code>transform-transition</code> in the palette file:</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token comment">// .vuepress/styles/palette.scss</span>

<span class="token property"><span class="token variable">$color-transition</span></span><span class="token punctuation">:</span> 0s<span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$transform-transition</span></span><span class="token punctuation">:</span> 0s<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="adding-effects" tabindex="-1"><a class="header-anchor" href="#adding-effects" aria-hidden="true">#</a> Adding Effects</h2><p>You are free to add more effects to your site through config file options and client files provided by VuePress.</p>`,8),k=s("code",null,"head",-1),v=a(`<div class="hint-container tip"><p class="hint-container-title">Example</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// .vuepress/config.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineUserConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vuepress&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineUserConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">//...</span>

  head<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">//...</span>

    <span class="token comment">// import an external script</span>
    <span class="token punctuation">[</span><span class="token string">&quot;script&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> src<span class="token operator">:</span> <span class="token string">&quot;YOUR_SCRIPT_LINK&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// add a script</span>
    <span class="token punctuation">[</span>
      <span class="token string">&quot;script&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">\\
        // your script here
      </span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// add an external CSS</span>
    <span class="token punctuation">[</span><span class="token string">&quot;link&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> rel<span class="token operator">:</span> <span class="token string">&quot;stylesheet&quot;</span><span class="token punctuation">,</span> href<span class="token operator">:</span> <span class="token string">&quot;YOUR_STYLE_LINK&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// add a style</span>
    <span class="token comment">// We don&#39;t recommend this, you should prefer to use .vuepress/style/index.scss</span>
    <span class="token punctuation">[</span>
      <span class="token string">&quot;style&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">\\
        /* your style here */
      </span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>

  <span class="token comment">//...</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>`,1),b=s("code",null,"head",-1),f=a(`<div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token front-matter-block"><span class="token punctuation">---</span>
<span class="token front-matter yaml language-yaml"><span class="token key atrule">head</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">script</span><span class="token punctuation">:</span> YOUR_SCRIPT_LINK
  <span class="token punctuation">-</span> <span class="token key atrule">script</span><span class="token punctuation">:</span>
      <span class="token key atrule">type</span><span class="token punctuation">:</span> module
      <span class="token key atrule">src</span><span class="token punctuation">:</span> YOUR_SCRIPT_LINK
  <span class="token punctuation">-</span> <span class="token key atrule">style</span><span class="token punctuation">:</span> YOUR_STYLE_LINK
  <span class="token punctuation">-</span> <span class="token key atrule">style</span><span class="token punctuation">:</span>
      <span class="token key atrule">type</span><span class="token punctuation">:</span> text/css
      <span class="token key atrule">content</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">
        /* your style here */</span></span>
<span class="token punctuation">---</span></span>

Page content

...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),g=a(`<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// .vuepress/client.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineClientConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@vuepress/client&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> ExampleGlobalComponent <span class="token keyword">from</span> <span class="token string">&quot;./components/ExampleGlobalComponent.vue&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> ExampleRootComponent <span class="token keyword">from</span> <span class="token string">&quot;./components/ExampleRootComponent.vue&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> setupExampleCompositionAPI <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./composables/exampleCompositionAPI&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineClientConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// Client enhancements</span>
  <span class="token function-variable function">enhance</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> app <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// register global component</span>
    app<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">&quot;ExampleGlobalComponent&quot;</span><span class="token punctuation">,</span> ExampleGlobalComponent<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">// global registration</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// Register the global Composition API</span>
    <span class="token function">setupExampleCompositionAPI</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">// global component</span>
  rootComponents<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;ExampleRootComponent&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">//...</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function h(y,_){const e=i("RouterLink");return l(),c("div",null,[r,u(" more "),m,s("ul",null,[s("li",null,[s("p",null,[n("If you need to add global CSS and JS, please set "),k,n(" option in VuePress "),t(e,{to:"/cookbook/vuepress/config.html"},{default:o(()=>[n("config file")]),_:1}),n(".")]),v]),s("li",null,[s("p",null,[n("If you need to add page-level CSS and JS, please set "),b,n(" option in "),t(e,{to:"/cookbook/vuepress/page.html#frontmatter"},{default:o(()=>[n("Front Matter")]),_:1}),n(".")]),f]),s("li",null,[s("p",null,[n("More global advanced operations can be done through "),t(e,{to:"/cookbook/vuepress/config.html#client-config"},{default:o(()=>[n("client configuration file")]),_:1}),n(".")]),g])])])}const x=p(d,[["render",h],["__file","effect.html.vue"]]);export{x as default};
