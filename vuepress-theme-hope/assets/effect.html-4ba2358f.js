import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{r as i,o as l,c,a as u,b as s,d as n,e as t,w as p,f as a}from"./app-d630ecd8.js";const r={},d=s("p",null,"此教程引导你如何自定义主题特效。",-1),k=a(`<h2 id="清除特效" tabindex="-1"><a class="header-anchor" href="#清除特效" aria-hidden="true">#</a> 清除特效</h2><p>主题在默认情况下，会:</p><ul><li>使用色卡对分类、标签进行装饰</li><li>在切换页面、元素时添加动画</li><li>为主页元素添加缓入动画、以及为特性添加悬浮特效。</li><li>使用较为显眼的代码复制按钮</li><li>使用较为花哨的提示框。</li><li>在日间模式和夜间模式切换时添加渐入</li></ul><p>如果你需要清除这些花哨的样式，请在主题选项中配置 <code>pure: true</code> 开启纯净模式。</p><p>同时，你可以通过控制调色板文件中的 <code>$color-transition</code> 和 <code>transform-transition</code> 来控制动画的时长:</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token comment">// .vuepress/styles/palette.scss</span>

<span class="token property"><span class="token variable">$color-transition</span></span><span class="token punctuation">:</span> 0s<span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$transform-transition</span></span><span class="token punctuation">:</span> 0s<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="添加特效" tabindex="-1"><a class="header-anchor" href="#添加特效" aria-hidden="true">#</a> 添加特效</h2><p>你可以自由的通过 VuePress 提供的配置文件选项和客户端文件为你的站点添加更多特效。</p>`,8),m=s("code",null,"head",-1),v=a(`<div class="hint-container tip"><p class="hint-container-title">例子</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// .vuepress/config.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineUserConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vuepress&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineUserConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// ...</span>

  head<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">// ...</span>

    <span class="token comment">// 导入一个外部脚本</span>
    <span class="token punctuation">[</span><span class="token string">&quot;script&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> src<span class="token operator">:</span> <span class="token string">&quot;YOUR_SCRIPT_LINK&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// 添加一段脚本</span>
    <span class="token punctuation">[</span>
      <span class="token string">&quot;script&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">\\
        // your script here
      </span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// 添加一个外部 CSS</span>
    <span class="token punctuation">[</span><span class="token string">&quot;link&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> rel<span class="token operator">:</span> <span class="token string">&quot;stylesheet&quot;</span><span class="token punctuation">,</span> href<span class="token operator">:</span> <span class="token string">&quot;YOUR_STYLE_LINK&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// 添加一段样式</span>
    <span class="token comment">// 我们不建议这么做，你应该首选使用 .vuepress/style/index.scss</span>
    <span class="token punctuation">[</span>
      <span class="token string">&quot;style&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">\\
        /* your style here */
      </span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>

  <span class="token comment">// ...</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>`,1),b=s("code",null,"head",-1),g=a(`<div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token front-matter-block"><span class="token punctuation">---</span>
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

页面内容

...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),f=a(`<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// .vuepress/client.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineClientConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@vuepress/client&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> ExampleGlobalComponent <span class="token keyword">from</span> <span class="token string">&quot;./components/ExampleGlobalComponent.vue&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> ExampleRootComponent <span class="token keyword">from</span> <span class="token string">&quot;./components/ExampleRootComponent.vue&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> setupExampleCompositionAPI <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./composables/exampleCompositionAPI&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineClientConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// 客户端增强</span>
  <span class="token function-variable function">enhance</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> app <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// 注册全局组件</span>
    app<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">&quot;ExampleGlobalComponent&quot;</span><span class="token punctuation">,</span> ExampleGlobalComponent<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">// 全局注册</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 注册全局 Composition API</span>
    <span class="token function">setupExampleCompositionAPI</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">// 全局组件</span>
  rootComponents<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;ExampleRootComponent&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// ...</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function h(y,_){const e=i("RouterLink");return l(),c("div",null,[d,u(" more "),k,s("ul",null,[s("li",null,[s("p",null,[n("如果你需要添加全局的 CSS 与 JS，请在 VuePress "),t(e,{to:"/zh/cookbook/vuepress/config.html"},{default:p(()=>[n("配置文件")]),_:1}),n(" 中配置 "),m,n(" 选项。")]),v]),s("li",null,[s("p",null,[n("如果你需要添加页面级别的 CSS 与 JS，请在 "),t(e,{to:"/zh/cookbook/vuepress/page.html#frontmatter"},{default:p(()=>[n("Front Matter")]),_:1}),n(" 中配置 "),b,n(" 选项。")]),g]),s("li",null,[s("p",null,[n("更多全局的高级操作，可以通过 "),t(e,{to:"/zh/cookbook/vuepress/config.html#%E5%AE%A2%E6%88%B7%E7%AB%AF%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6"},{default:p(()=>[n("客户端配置文件")]),_:1}),n(" 进行。")]),f])])])}const x=o(r,[["render",h],["__file","effect.html.vue"]]);export{x as default};
