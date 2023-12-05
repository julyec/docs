import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{r as c,o as u,c as l,a as s,b as n,d as a,w as e,e as p}from"./app-4560479e.js";const r={},d=s("h1",{id:"客户端配置的使用方法",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#客户端配置的使用方法","aria-hidden":"true"},"#"),n(" 客户端配置的使用方法")],-1),k=p(`<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> path <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@vuepress/utils&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> getDirname<span class="token punctuation">,</span> path <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@vuepress/utils&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> __dirname <span class="token operator">=</span> <span class="token function">getDirname</span><span class="token punctuation">(</span><span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span>url<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> pluginOrTheme <span class="token operator">=</span> <span class="token punctuation">{</span>
  clientConfigFile<span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&quot;./path/to/clientConfig.ts&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),v=s("code",null,"@vuepress/client",-1),m=p(`<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineClientConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@vuepress/client&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineClientConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function">enhance</span><span class="token punctuation">(</span><span class="token punctuation">{</span> app<span class="token punctuation">,</span> router<span class="token punctuation">,</span> siteData <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  layouts<span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  rootComponents<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="enhance" tabindex="-1"><a class="header-anchor" href="#enhance" aria-hidden="true">#</a> enhance</h2><p><code>enhance</code> 函数既可以是同步的，也可以是异步的。它接收一个 Context 参数，包含以下属性：</p>`,3),f=s("code",null,"app",-1),h={href:"https://staging-cn.vuejs.org/api/application.html#create-app",target:"_blank",rel:"noopener noreferrer"},b=s("code",null,"router",-1),g={href:"https://router.vuejs.org/zh/api/index.html#createrouter",target:"_blank",rel:"noopener noreferrer"},_=s("code",null,"siteData",-1),y=s("p",null,[s("code",null,"enhance"),n(" 函数会在客户端应用创建后被调用，你可以对 Vue 应用添加各种能力。")],-1),w=s("h3",{id:"注册-vue-组件",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#注册-vue-组件","aria-hidden":"true"},"#"),n(" 注册 Vue 组件")],-1),C={href:"https://staging-cn.vuejs.org/api/application.html#app-component",target:"_blank",rel:"noopener noreferrer"},q=p(`<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineClientConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@vuepress/client&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> MyComponent <span class="token keyword">from</span> <span class="token string">&quot;./MyComponent.vue&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineClientConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function">enhance</span><span class="token punctuation">(</span><span class="token punctuation">{</span> app <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    app<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">&quot;MyComponent&quot;</span><span class="token punctuation">,</span> MyComponent<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用不支持-ssr-的功能" tabindex="-1"><a class="header-anchor" href="#使用不支持-ssr-的功能" aria-hidden="true">#</a> 使用不支持 SSR 的功能</h3><p>VuePress 会在构建过程中生成一个 SSR 应用，用以对页面进行预渲染。一般而言，如果一段代码在客户端应用 Mount 之前就使用了浏览器或 DOM API ，我们就认为其对 SSR 不友好，即不支持 SSR 。</p>`,3),x=s("code",null,"enhance",-1),S=s("code",null,[n("_"),s("wbr"),n("_VUEPRESS_SSR__")],-1),R=p(`<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineClientConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@vuepress/client&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineClientConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token keyword">async</span> <span class="token function">enhance</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>_<wbr>_VUEPRESS_SSR__<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> nonSsrFriendlyModule <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&quot;non-ssr-friendly-module&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token comment">// ...</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用-router-方法" tabindex="-1"><a class="header-anchor" href="#使用-router-方法" aria-hidden="true">#</a> 使用 Router 方法</h3>`,2),E={href:"https://router.vuejs.org/zh/api/index.html#router-%E6%96%B9%E6%B3%95",target:"_blank",rel:"noopener noreferrer"},z=p(`<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineClientConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@vuepress/client&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineClientConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function">enhance</span><span class="token punctuation">(</span><span class="token punctuation">{</span> router <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    router<span class="token punctuation">.</span><span class="token function">beforeEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span>to<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;before navigation&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    router<span class="token punctuation">.</span><span class="token function">afterEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span>to<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;after navigation&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container warning"><p class="hint-container-title">注意</p><p>我们不推荐使用 <code>addRoute</code> 方法来添加动态路由，因为这些路由记录 <strong>不会</strong> 在构建模式中被预渲染出来。</p><p>当然，如果你了解了这种用法的缺点，你还是可以这样使用。</p></div><h2 id="setup" tabindex="-1"><a class="header-anchor" href="#setup" aria-hidden="true">#</a> setup</h2>`,3),M=s("code",null,"setup",-1),V={href:"https://staging-cn.vuejs.org/api/composition-api-setup.html",target:"_blank",rel:"noopener noreferrer"},B=s("h3",{id:"使用组合式-api",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#使用组合式-api","aria-hidden":"true"},"#"),n(" 使用组合式 API")],-1),P=s("code",null,"setup",-1),A={href:"https://staging-cn.vuejs.org/api/composition-api-setup.html",target:"_blank",rel:"noopener noreferrer"},D=p(`<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineClientConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@vuepress/client&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> provide<span class="token punctuation">,</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useRoute<span class="token punctuation">,</span> useRouter <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue-router&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineClientConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 获取当前的路由位置</span>
    <span class="token keyword">const</span> route <span class="token operator">=</span> <span class="token function">useRoute</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 或者 vue-router 实例</span>
    <span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token function">useRouter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 供给一个值，可以被布局、页面和其他组件注入</span>
    <span class="token keyword">const</span> count <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">provide</span><span class="token punctuation">(</span><span class="token string">&quot;count&quot;</span><span class="token punctuation">,</span> count<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用不支持-ssr-的功能-1" tabindex="-1"><a class="header-anchor" href="#使用不支持-ssr-的功能-1" aria-hidden="true">#</a> 使用不支持 SSR 的功能</h3>`,2),j=s("code",null,"setup",-1),I=s("code",null,[n("_"),s("wbr"),n("_VUEPRESS_SSR__")],-1),L={href:"https://staging-cn.vuejs.org/api/composition-api-lifecycle.html#onmounted",target:"_blank",rel:"noopener noreferrer"},O=p(`<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineClientConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@vuepress/client&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> onMounted <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineClientConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token comment">// 在 mounted 之后使用 DOM API</span>
      document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&quot;#app&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="layouts" tabindex="-1"><a class="header-anchor" href="#layouts" aria-hidden="true">#</a> layouts</h2>`,2),F=s("code",null,"layouts",-1),H=p(`<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineClientConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@vuepress/client&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> MyLayout <span class="token keyword">from</span> <span class="token string">&quot;./layouts/MyLayout.vue&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineClientConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  layouts<span class="token operator">:</span> <span class="token punctuation">{</span>
    MyLayout<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="rootcomponents" tabindex="-1"><a class="header-anchor" href="#rootcomponents" aria-hidden="true">#</a> rootComponents</h2><p><code>rootComponents</code> 是一个组件数组，它们将会直接被放置在客户端 Vue 应用的根节点下。</p><p>该选项的典型使用方式就是放置一些全局的 UI 组件，比如全局弹窗等：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineClientConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@vuepress/client&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> GlobalPopup <span class="token keyword">from</span> <span class="token string">&quot;./components/GlobalPopup.vue&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineClientConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  rootComponents<span class="token operator">:</span> <span class="token punctuation">[</span>GlobalPopup<span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5);function N(U,G){const t=c("RouterLink"),o=c("ExternalLinkIcon");return u(),l("div",null,[d,s("p",null,[n("你可以直接在你的项目中使用 "),a(t,{to:"/zh/guide/configuration.html#%E5%AE%A2%E6%88%B7%E7%AB%AF%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6"},{default:e(()=>[n("客户端配置文件")]),_:1}),n(" 。或者，在你的插件或者主题中，使用 "),a(t,{to:"/zh/reference/plugin-api.html#clientconfigfile"},{default:e(()=>[n("clientConfigFile")]),_:1}),n(" Hook 来指定客户端配置文件的路径：")]),k,s("p",null,[n("在客户端配置文件中，"),v,n(" 包提供了一个 "),a(t,{to:"/zh/reference/client-api.html#defineclientconfig"},{default:e(()=>[n("defineClientConfig")]),_:1}),n(" 函数来帮助你定义客户端配置：")]),m,s("ul",null,[s("li",null,[f,n(" 是由 "),s("a",h,[n("createApp"),a(o)]),n(" 创建的 Vue 应用实例。")]),s("li",null,[b,n(" 是由 "),s("a",g,[n("createRouter"),a(o)]),n(" 创建的路由实例。")]),s("li",null,[_,n(" 是一个根据用户配置生成的 Ref 对象，包含 "),a(t,{to:"/zh/reference/config.html#base"},{default:e(()=>[n("base")]),_:1}),n(", "),a(t,{to:"/zh/reference/config.html#lang"},{default:e(()=>[n("lang")]),_:1}),n(", "),a(t,{to:"/zh/reference/config.html#title"},{default:e(()=>[n("title")]),_:1}),n(", "),a(t,{to:"/zh/reference/config.html#description"},{default:e(()=>[n("description")]),_:1}),n(", "),a(t,{to:"/zh/reference/config.html#head"},{default:e(()=>[n("head")]),_:1}),n(" 和 "),a(t,{to:"/zh/reference/config.html#locales"},{default:e(()=>[n("locales")]),_:1}),n("。")])]),y,w,s("p",null,[n("你可以通过 "),s("a",C,[n("app.component"),a(o)]),n(" 方法来注册 Vue 全局组件：")]),q,s("p",null,[n("我们已经提供了一个 "),a(t,{to:"/zh/reference/components.html#clientonly"},{default:e(()=>[n("ClientOnly")]),_:1}),n(" 组件来包裹不支持 SSR 的内容。")]),s("p",null,[n("在 "),x,n(" 函数中，你可以使用 "),a(t,{to:"/zh/reference/client-api.html#ssr"},{default:e(()=>[S]),_:1}),n(" 标记来处理这种情况。")]),R,s("p",null,[n("你可以使用 vue-router 提供的 "),s("a",E,[n("Router 方法"),a(o)]),n(" 。例如，添加导航钩子：")]),z,s("p",null,[M,n(" 函数会在客户端 Vue 应用的 "),s("a",V,[n("setup"),a(o)]),n(" Hook 中被调用。")]),B,s("p",null,[n("你可以把 "),P,n(" 函数当作根组件的 "),s("a",A,[n("setup"),a(o)]),n(" Hook 中的一部分。因此，所有的组合式 API 都可以在这里使用。")]),D,s("p",null,[n("在 "),j,n(" 函数中，"),a(t,{to:"/zh/reference/client-api.html#ssr"},{default:e(()=>[I]),_:1}),n(" 标记同样可用。")]),s("p",null,[n("使用不支持 SSR 的功能的另一种方式就是将他们放在 "),s("a",L,[n("onMounted"),a(o)]),n(" Hook 中：")]),O,s("p",null,[F,n(" 配置项用于设置布局组件。你在此处注册布局后，用户就可以通过 "),a(t,{to:"/zh/reference/frontmatter.html#layout"},{default:e(()=>[n("layout")]),_:1}),n(" frontmatter 来使用它们。")]),H])}const K=i(r,[["render",N],["__file","usage-of-client-config.html.vue"]]);export{K as default};
