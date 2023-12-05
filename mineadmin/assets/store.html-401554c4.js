import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{o as n,c as a,a as e}from"./app-66b20ad3.js";const o={},t=e(`<h1 id="pinia状态管理" tabindex="-1"><a class="header-anchor" href="#pinia状态管理" aria-hidden="true">#</a> Pinia状态管理</h1><p>Pinia 是 Vue 的存储库，它允许您跨组件/页面共享状态。</p><p>相比 Vuex 来讲，Pinia 简便了很多，使用起来非常方便，也可以算是下一代的 Store</p><h2 id="存放目录及内置store" tabindex="-1"><a class="header-anchor" href="#存放目录及内置store" aria-hidden="true">#</a> 存放目录及内置Store</h2><p>存放Store的目录在 <code>src/store/modules</code>, 目前系统有以下几处使用了 Pinia：</p><ul><li>app.js 保存整个系统的设置信息，包括个人的个性化设置</li><li>config.js 保存系统设置里的站点配置信息</li><li>doc.js 保存访问API文档的身份信息</li><li>iframe.js 保存iFrame类型菜单的keepalive信息</li><li>keepAlive.js 保存路由的keepalive信息</li><li>message.js 保存消息通知的数据</li><li>tag.js 保存后台系统多标签的数据</li><li>user.js 保存当前登录用户的信息数据</li></ul><h2 id="定义一个store" tabindex="-1"><a class="header-anchor" href="#定义一个store" aria-hidden="true">#</a> 定义一个Store</h2><p>src/store/modules/foo.js</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;pinia&#39;</span>

<span class="token keyword">const</span> useFooStore <span class="token operator">=</span> <span class="token function">defineStore</span><span class="token punctuation">(</span><span class="token string">&#39;foo&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">state</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token literal-property property">getters</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">getFoo</span><span class="token punctuation">(</span><span class="token parameter">state</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token operator">...</span>state <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token literal-property property">actions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">setFooName</span> <span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">Tips</p><p>src/store/index.js 需要增加引入，才能让自己新增的 Store 生效</p></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createPinia <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;pinia&#39;</span>
<span class="token keyword">import</span> useUserStore <span class="token keyword">from</span> <span class="token string">&#39;./modules/user&#39;</span>
<span class="token keyword">import</span> useAppStore <span class="token keyword">from</span> <span class="token string">&#39;./modules/app&#39;</span>
<span class="token keyword">import</span> useTagStore <span class="token keyword">from</span> <span class="token string">&#39;./modules/tag&#39;</span>
<span class="token keyword">import</span> useKeepAliveStore <span class="token keyword">from</span> <span class="token string">&#39;./modules/keepAlive&#39;</span>
<span class="token keyword">import</span> useIframeStore <span class="token keyword">from</span> <span class="token string">&#39;./modules/iframe&#39;</span>
<span class="token keyword">import</span> useConfigStore <span class="token keyword">from</span> <span class="token string">&#39;./modules/config&#39;</span>
<span class="token keyword">import</span> useMessageStore <span class="token keyword">from</span> <span class="token string">&#39;./modules/message&#39;</span>
<span class="token keyword">import</span> useDocStore <span class="token keyword">from</span> <span class="token string">&#39;./modules/doc&#39;</span>
<span class="token comment">// 下面引入新增的foo</span>
<span class="token keyword">import</span> useFooStore <span class="token keyword">from</span> <span class="token string">&#39;./modules/foo&#39;</span>

<span class="token keyword">const</span> pinia <span class="token operator">=</span> <span class="token function">createPinia</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token punctuation">{</span>
  useUserStore<span class="token punctuation">,</span>
  useAppStore<span class="token punctuation">,</span>
  useTagStore<span class="token punctuation">,</span>
  useKeepAliveStore<span class="token punctuation">,</span>
  useIframeStore<span class="token punctuation">,</span>
  useConfigStore<span class="token punctuation">,</span>
  useMessageStore<span class="token punctuation">,</span>
  useDocStore<span class="token punctuation">,</span>
  <span class="token comment">// 下面也导出新增的</span>
  useFooStore
<span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> pinia
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用store" tabindex="-1"><a class="header-anchor" href="#使用store" aria-hidden="true">#</a> 使用Store</h2><p>src/store/modules/foo.js</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useFooStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/store&#39;</span>

<span class="token keyword">const</span> fooStore <span class="token operator">=</span> <span class="token function">useFooStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// 设置</span>
fooStore<span class="token punctuation">.</span><span class="token function">setFooName</span><span class="token punctuation">(</span><span class="token string">&#39;法外狂徒-张三&#39;</span><span class="token punctuation">)</span>

<span class="token comment">// 输出到控制台</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>fooStore<span class="token punctuation">.</span>name<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14),p=[t];function i(l,c){return n(),a("div",null,p)}const d=s(o,[["render",i],["__file","store.html.vue"]]);export{d as default};
