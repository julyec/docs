import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{r as c,o as i,c as l,a as s,b as n,d as e,w as t,e as p}from"./app-4560479e.js";const u={},r=s("h1",{id:"向客户端代码传递数据",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#向客户端代码传递数据","aria-hidden":"true"},"#"),n(" 向客户端代码传递数据")],-1),d=s("p",null,"我们知道，VuePress 插件入口和主题入口是在 Node 端处理的，但有时候你可能需要向客户端动态传递数据。例如，你希望在用户传入不同的选项时生成不同的数据。",-1),k=s("h2",{id:"使用-define-hook",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#使用-define-hook","aria-hidden":"true"},"#"),n(" 使用 "),s("code",null,"define"),n(" Hook")],-1),v=p(`<p>首先，通过 <code>define</code> Hook 定义一些常量：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span>options<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
  define<span class="token operator">:</span> <span class="token punctuation">{</span>
    __FOO__<span class="token operator">:</span> options<span class="token punctuation">.</span>foo <span class="token operator">||</span> <span class="token string">&quot;str&quot;</span><span class="token punctuation">,</span>
    __OBJ__<span class="token operator">:</span> <span class="token punctuation">{</span>
      bar<span class="token operator">:</span> options<span class="token punctuation">.</span>bar <span class="token operator">||</span> <span class="token number">123</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后，在客户端代码中直接使用它们：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> foo <span class="token operator">=</span> __FOO__<span class="token punctuation">;</span>
<span class="token keyword">const</span> obj <span class="token operator">=</span> __OBJ__<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>如果你在客户端代码中使用 TypeScript ，你可能需要手动声明这些全局常量的类型：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">declare</span> <span class="token keyword">const</span> __FOO__<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token keyword">declare</span> <span class="token keyword">const</span> __OBJ__<span class="token operator">:</span> <span class="token punctuation">{</span> bar<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="写入并加载临时文件" tabindex="-1"><a class="header-anchor" href="#写入并加载临时文件" aria-hidden="true">#</a> 写入并加载临时文件</h2><p>如果你需要实现一些更复杂的功能，你可以写入临时文件，并在客户端代码中动态加载它们。</p>`,8),m=s("code",null,"foo.js",-1),_=p(`<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span>options<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token keyword">async</span> <span class="token function">onPrepared</span><span class="token punctuation">(</span>app<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 写入临时文件</span>
    <span class="token keyword">await</span> app<span class="token punctuation">.</span><span class="token function">writeTemp</span><span class="token punctuation">(</span>
      <span class="token string">&quot;foo.js&quot;</span><span class="token punctuation">,</span>
      <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">export const foo = </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>options<span class="token punctuation">.</span>foo<span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后，在客户端代码中通过 <code>@temp</code> 别名来加载临时文件：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> foo <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@temp/foo&quot;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果你在客户端代码中使用 TypeScript ，你可能需要手动声明这些临时模块的类型：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">declare</span> <span class="token keyword">module</span> <span class="token string">&quot;@temp/foo&quot;</span> <span class="token punctuation">{</span>
  <span class="token keyword">export</span> <span class="token keyword">const</span> foo<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5);function b(g,f){const a=c("RouterLink");return i(),l("div",null,[r,d,k,s("p",null,[n("插件 API 提供了一个 "),e(a,{to:"/zh/reference/plugin-api.html#define"},{default:t(()=>[n("define")]),_:1}),n(" Hook 来定义客户端代码中的全局常量。你可以利用它来向客户端传递数据。")]),v,s("p",null,[n("首先，写入一个名为 "),m,n(" 的临时文件，它将会生成在 "),e(a,{to:"/zh/reference/config.html#temp"},{default:t(()=>[n("temp")]),_:1}),n(" 目录中：")]),_])}const w=o(u,[["render",b],["__file","passing-data-to-client-code.html.vue"]]);export{w as default};
