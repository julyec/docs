import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,a as e}from"./app-719eb5cf.js";const p={},t=e(`<h1 id="网络请求" tabindex="-1"><a class="header-anchor" href="#网络请求" aria-hidden="true">#</a> 网络请求</h1><p>MineAdmin 是通过 <code>Axios</code> 包来实现网络请求的。这个包非常强大，我们做了封装，也仅仅使用了部分功能</p><ul><li>请求封装了自动携带Token</li><li>请求自动识别开发/生产模式</li><li>请求自动识别是否使用代理模式</li><li>请求自动根据前端设置的国际化，请求相应的多语言</li><li>响应封装了统一的拦截器</li><li>响应自动根据响应判断是否需要登录</li><li>请求和响应的异常处理</li></ul><div class="hint-container tip"><p class="hint-container-title">request.js</p><p>封装的请求处理文件在 <code>src/utils/request.js</code> 可查看源码，自行根据需求加入功能</p></div><p>前端跟大多数一样，有专门的目录存放所有的网络请求的 <code>api</code> 文件，它们存放在 <code>src/api</code> 目录下</p><ul><li>一些公共的网络请求或者无法分类的网络请求则放在 <code>src/api</code> 根目录下</li><li>普通业务的网络请求则要根据 <code>模块</code> 来存放</li></ul><div class="hint-container tip"><p class="hint-container-title">Tips</p><p>目前，api目录下有 <code>system</code> 和 <code>setting</code> 两个模块，如果建立了模块，此目录也要建立相应的模块目录</p></div><h2 id="使用示例" tabindex="-1"><a class="header-anchor" href="#使用示例" aria-hidden="true">#</a> 使用示例</h2><h3 id="定义" tabindex="-1"><a class="header-anchor" href="#定义" aria-hidden="true">#</a> 定义</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 示例 src/api/foo/foo.js</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> request <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/utils/request&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token function">login</span><span class="token punctuation">(</span><span class="token parameter">params <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&#39;system/login&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">&#39;post&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">data</span><span class="token operator">:</span> params
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">其他参数</p><ul><li>header: 可自定义请求头的参数</li><li>timeout: 可自定义请求超时时间，默认为 30 秒。如下载接口可定义时间长一些</li><li>responseType: 指定相应返回数据的类型，一般不需要设置，如果是下载返回的二进制，则需要指定 <code>blob</code></li></ul></div><h3 id="vue页面使用" tabindex="-1"><a class="header-anchor" href="#vue页面使用" aria-hidden="true">#</a> Vue页面使用</h3><p>使用 Promise 方式</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> foo <span class="token keyword">from</span> <span class="token string">&#39;@/api/foo/foo&#39;</span>
<span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">username</span><span class="token operator">:</span> <span class="token string">&#39;superAdmin&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">password</span><span class="token operator">:</span> <span class="token string">&#39;admin123&#39;</span>
<span class="token punctuation">}</span>
foo<span class="token punctuation">.</span><span class="token function">login</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span> <span class="token parameter">response</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>response<span class="token punctuation">.</span>success<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;登录成功&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span> <span class="token parameter">err</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用同步模式</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> foo <span class="token keyword">from</span> <span class="token string">&#39;@/api/foo/foo&#39;</span>
<span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">username</span><span class="token operator">:</span> <span class="token string">&#39;superAdmin&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">password</span><span class="token operator">:</span> <span class="token string">&#39;admin123&#39;</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> <span class="token function-variable function">login</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> response <span class="token operator">=</span> <span class="token keyword">await</span> foo<span class="token punctuation">.</span><span class="token function">login</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
    response<span class="token punctuation">.</span>success <span class="token operator">&amp;&amp;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;登录成功&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token function">login</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16),o=[t];function i(c,l){return s(),a("div",null,o)}const d=n(p,[["render",i],["__file","request.html.vue"]]);export{d as default};