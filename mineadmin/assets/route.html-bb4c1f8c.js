import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as p,o,c,b as s,e as n,d as i,a}from"./app-66b20ad3.js";const r={},l=a(`<h1 id="路由" tabindex="-1"><a class="header-anchor" href="#路由" aria-hidden="true">#</a> 路由</h1><div class="hint-container tip"><p class="hint-container-title">Tips</p><p>路由是前端系统的核心，没有路由系统将无法运行。所以，前端开发有必要完全掌握路由使用和定义。</p></div><h2 id="静态路由" tabindex="-1"><a class="header-anchor" href="#静态路由" aria-hidden="true">#</a> 静态路由</h2><ul><li>静态路由在 <code>src/router/webRouter.js</code> 中定义</li><li>后台首页的静态路由在 <code>src/router/homePageRoutes.js</code> 中定义</li><li>静态路由不受动态权限控制（除硬编码外），主要适用于公共页面，并且不需要权限控制的功能。</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">...</span> <span class="token comment">// 其他路由</span>

<span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;test&quot;</span><span class="token punctuation">,</span>                    <span class="token comment">// 路由名称（标识符） 唯一</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&quot;/test&quot;</span><span class="token punctuation">,</span>                   <span class="token comment">// 路由地址，浏览器访问的地址，要唯一</span>
    <span class="token literal-property property">meta</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&quot;标题&quot;</span><span class="token punctuation">,</span>               <span class="token comment">// 路由标题，显示在浏览器标题栏</span>
        <span class="token literal-property property">icon</span> <span class="token operator">:</span> <span class="token string">&quot;图标&quot;</span><span class="token punctuation">,</span>               <span class="token comment">// 路由图标</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;@/views/test/index.vue&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>   <span class="token comment">// 路由绑定的页面组件地址</span>
<span class="token punctuation">}</span>

<span class="token operator">...</span> <span class="token comment">// 其他路由</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="动态路由" tabindex="-1"><a class="header-anchor" href="#动态路由" aria-hidden="true">#</a> 动态路由</h2><div class="hint-container tip"><p class="hint-container-title">Tips</p><p>动态路由需要在菜单管理添加与修改，是跟 <code>用户</code>、<code>角色</code> 等功能息息相关，并且动态路由受权限动态控制。</p><p>与静态路由不同的是，动态路由表完全存放在后台数据库，每次刷新页面都会从后台请求当前登录用户的路由列表，Vue通过分析路由结构给动态添加到路由器里</p></div><h2 id="路由使用" tabindex="-1"><a class="header-anchor" href="#路由使用" aria-hidden="true">#</a> 路由使用</h2><p>在开发中经常会用到页面跳转、或者获取当前页面信息等需求，那么有必要掌握路由方面的一些操作</p><h3 id="获取当前路由信息" tabindex="-1"><a class="header-anchor" href="#获取当前路由信息" aria-hidden="true">#</a> 获取当前路由信息</h3><p>使用 <code>useRoute()</code> 获取当前路由的API，可通过此API获取当前路由的信息，比如 path、name、query 等参数。</p>`,11),u=s("code",null,"vue-router",-1),d={href:"https://router.vuejs.org/zh/guide/advanced/composition-api.html",target:"_blank",rel:"noopener noreferrer"},k=a(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useRoute <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue-router&#39;</span>
<span class="token keyword">const</span> route <span class="token operator">=</span> <span class="token function">useRoute</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="vue页面路由跳转" tabindex="-1"><a class="header-anchor" href="#vue页面路由跳转" aria-hidden="true">#</a> Vue页面路由跳转</h3><p>使用 <code>useRouter()</code> API可操作路由的跳转，更多使用方式，可参考 <code>vue-router</code> 的文档</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useRouter <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue-router&#39;</span>
<span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token function">useRouter</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// 直接输入要跳转的路由</span>
router<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">&#39;/login&#39;</span><span class="token punctuation">)</span>

<span class="token comment">// 指定路由的 name 跳转</span>
router<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;login&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 指定路由的 path 跳转</span>
router<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/login&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 带上参数跳转</span>
router<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;login&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">query</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;张三&#39;</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4);function v(m,h){const e=p("ExternalLinkIcon");return o(),c("div",null,[l,s("p",null,[n("更多信息可以参考 "),u,n(" 的setup语法使用"),s("a",d,[n("文档"),i(e)])]),k])}const y=t(r,[["render",v],["__file","route.html.vue"]]);export{y as default};
