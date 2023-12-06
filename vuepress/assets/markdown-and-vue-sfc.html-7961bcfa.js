import{_ as p}from"./plugin-vue_export-helper-c27b6911.js";import{h as c,o as l,c as i,a as n,t,d as u,w as d,e as r,i as k}from"./app-d06631bc.js";const v=r(`<h1 id="markdown-and-vue-sfc" tabindex="-1"><a class="header-anchor" href="#markdown-and-vue-sfc" aria-hidden="true">#</a> Markdown and Vue SFC</h1><p>Each Markdown file is first compiled into HTML, and then converted to a Vue SFC. In other words, you can write a Markdown file like a Vue SFC:</p><ul><li>Blocks <code>&lt;script&gt;</code> and <code>&lt;style&gt;</code> are treated as Vue SFC blocks as they are. In other words, they are hoisted from the <code>&lt;template&gt;</code> block to the top-level of SFC.</li><li>Everything outside <code>&lt;script&gt;</code> and <code>&lt;style&gt;</code> will be compiled into HTML, and be treated as Vue SFC <code>&lt;template&gt;</code> block.</li></ul><div class="hint-container warning"><p class="hint-container-title">Note</p><p>As Vue SFC can contain only one <code>&lt;script&gt;</code> element, you should avoid using more than one <code>&lt;script&gt;</code> in VuePress markdown.</p></div><p>Here comes an example:</p><p><strong>Input</strong></p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code>_Hello, {{ msg }}_

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>RedDiv</span><span class="token punctuation">&gt;</span></span>

_Current count is: {{ count }}_

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>RedDiv</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>count++<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Click Me!<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> h<span class="token punctuation">,</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">RedDiv</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">_<span class="token punctuation">,</span> ctx</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
  <span class="token function">h</span><span class="token punctuation">(</span>
    <span class="token string">&quot;div&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token keyword">class</span><span class="token operator">:</span> <span class="token string">&quot;red-div&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    ctx<span class="token punctuation">.</span>slots<span class="token punctuation">.</span><span class="token function">default</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> msg <span class="token operator">=</span> <span class="token string">&quot;Vue in Markdown&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> count <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
<span class="token selector">.red-div</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Output</strong></p>`,8),m="Vue in Markdown",g={__name:"markdown-and-vue-sfc.html",setup(b){const e=(o,s)=>k("div",{class:"red-div"},s.slots.default()),a=c(0);return(o,s)=>(l(),i("div",null,[v,n("p",null,[n("em",null,"Hello, "+t(m))]),u(e,null,{default:d(()=>[n("p",null,[n("em",null,"Current count is: "+t(a.value),1)])]),_:1}),n("p",null,[n("button",{onClick:s[0]||(s[0]=f=>a.value++)},"Click Me!")])]))}},w=p(g,[["__file","markdown-and-vue-sfc.html.vue"]]);export{w as default};
