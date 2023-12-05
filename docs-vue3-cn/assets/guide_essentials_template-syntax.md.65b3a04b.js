import{c as s,e as a,t as l,d as n,a as e,o}from"./chunks/framework.ee9e66be.js";const t=e('<h1 id="template-syntax" tabindex="-1">模板语法 <a class="header-anchor" href="#template-syntax" aria-label="Permalink to &quot;模板语法 {#template-syntax}&quot;">​</a></h1><p>Vue 使用一种基于 HTML 的模板语法，使我们能够声明式地将其组件实例的数据绑定到呈现的 DOM 上。所有的 Vue 模板都是语法层面合法的 HTML，可以被符合规范的浏览器和 HTML 解析器解析。</p><p>在底层机制中，Vue 会将模板编译成高度优化的 JavaScript 代码。结合响应式系统，当应用状态变更时，Vue 能够智能地推导出需要重新渲染的组件的最少数量，并应用最少的 DOM 操作。</p><p>如果你对虚拟 DOM 的概念比较熟悉，并且偏好直接使用 JavaScript，你也可以结合可选的 JSX 支持<a href="/docs-vue3-cn/guide/extras/render-function.html">直接手写渲染函数</a>而不采用模板。但请注意，这将不会享受到和模板同等级别的编译时优化。</p><h2 id="text-interpolation" tabindex="-1">文本插值 <a class="header-anchor" href="#text-interpolation" aria-label="Permalink to &quot;文本插值 {#text-interpolation}&quot;">​</a></h2><p>最基本的数据绑定形式是文本插值，它使用的是“Mustache”语法 (即双大括号)：</p><div class="language-template"><button title="Copy Code" class="copy"></button><span class="lang">template</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">span</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Message: </span><span style="color:#89DDFF;">{{</span><span style="color:#A6ACCD;"> msg </span><span style="color:#89DDFF;">}}&lt;/</span><span style="color:#F07178;">span</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><p>双大括号标签会被替换为<a href="/docs-vue3-cn/guide/essentials/reactivity-fundamentals.html#declaring-reactive-state">相应组件实例中</a> <code>msg</code> 属性的值。同时每次 <code>msg</code> 属性更改时它也会同步更新。</p><h2 id="raw-html" tabindex="-1">原始 HTML <a class="header-anchor" href="#raw-html" aria-label="Permalink to &quot;原始 HTML {#raw-html}&quot;">​</a></h2><p>双大括号会将数据解释为纯文本，而不是 HTML。若想插入 HTML，你需要使用 <a href="/docs-vue3-cn/api/built-in-directives.html#v-html"><code>v-html</code> 指令</a>：</p><div class="language-template"><button title="Copy Code" class="copy"></button><span class="lang">template</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Using text interpolation: </span><span style="color:#89DDFF;">{{</span><span style="color:#A6ACCD;"> rawHtml </span><span style="color:#89DDFF;">}}&lt;/</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Using v-html directive: </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">span</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-html</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">rawHtml</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">span</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div>',11),p=e('<p>这里我们遇到了一个新的概念。这里看到的 <code>v-html</code> attribute 被称为一个<strong>指令</strong>。指令由 <code>v-</code> 作为前缀，表明它们是一些由 Vue 提供的特殊 attribute，你可能已经猜到了，它们将为渲染的 DOM 应用特殊的响应式行为。这里我们做的事情简单来说就是：在当前组件实例上，将此元素的 innerHTML 与 <code>rawHtml</code> 属性保持同步。</p><p><code>span</code> 的内容将会被替换为 <code>rawHtml</code> 属性的值，插值为纯 HTML——数据绑定将会被忽略。注意，你不能使用 <code>v-html</code> 来拼接组合模板，因为 Vue 不是一个基于字符串的模板引擎。在使用 Vue 时，应当使用组件作为 UI 重用和组合的基本单元。</p><div class="warning custom-block"><p class="custom-block-title">安全警告</p><p>在网站上动态渲染任意 HTML 是非常危险的，因为这非常容易造成 <a href="https://zh.wikipedia.org/wiki/%E8%B7%A8%E7%B6%B2%E7%AB%99%E6%8C%87%E4%BB%A4%E7%A2%BC" target="_blank" rel="noreferrer">XSS 漏洞</a>。请仅在内容安全可信时再使用 <code>v-html</code>，并且<strong>永远不要</strong>使用用户提供的 HTML 内容。</p></div><h2 id="attribute-bindings" tabindex="-1">Attribute 绑定 <a class="header-anchor" href="#attribute-bindings" aria-label="Permalink to &quot;Attribute 绑定 {#attribute-bindings}&quot;">​</a></h2><p>双大括号不能在 HTML attributes 中使用。想要响应式地绑定一个 attribute，应该使用 <a href="/docs-vue3-cn/api/built-in-directives.html#v-bind"><code>v-bind</code> 指令</a>：</p><div class="language-template"><button title="Copy Code" class="copy"></button><span class="lang">template</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-bind</span><span style="color:#89DDFF;">:</span><span style="color:#C792EA;">id</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">dynamicId</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><p><code>v-bind</code> 指令指示 Vue 将元素的 <code>id</code> attribute 与组件的 <code>dynamicId</code> 属性保持一致。如果绑定的值是 <code>null</code> 或者 <code>undefined</code>，那么该 attribute 将会从渲染的元素上移除。</p><h3 id="shorthand" tabindex="-1">简写 <a class="header-anchor" href="#shorthand" aria-label="Permalink to &quot;简写 {#shorthand}&quot;">​</a></h3><p>因为 <code>v-bind</code> 非常常用，我们提供了特定的简写语法：</p><div class="language-template"><button title="Copy Code" class="copy"></button><span class="lang">template</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> :</span><span style="color:#C792EA;">id</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">dynamicId</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><p>开头为 <code>:</code> 的 attribute 可能和一般的 HTML attribute 看起来不太一样，但它的确是合法的 attribute 名称字符，并且所有支持 Vue 的浏览器都能正确解析它。此外，他们不会出现在最终渲染的 DOM 中。简写语法是可选的，但相信在你了解了它更多的用处后，你应该会更喜欢它。</p><blockquote><p>接下来的指引中，我们都将在示例中使用简写语法，因为这是在实际开发中更常见的用法。</p></blockquote><h3 id="boolean-attributes" tabindex="-1">布尔型 Attribute <a class="header-anchor" href="#boolean-attributes" aria-label="Permalink to &quot;布尔型 Attribute {#boolean-attributes}&quot;">​</a></h3><p><a href="https://developer.mozilla.org/zh-CN/docs/Web/HTML/Attributes#%E5%B8%83%E5%B0%94%E5%80%BC%E5%B1%9E%E6%80%A7" target="_blank" rel="noreferrer">布尔型 attribute</a> 依据 true / false 值来决定 attribute 是否应该存在于该元素上。<a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/disabled" target="_blank" rel="noreferrer"><code>disabled</code></a> 就是最常见的例子之一。</p><p><code>v-bind</code> 在这种场景下的行为略有不同：</p><div class="language-template"><button title="Copy Code" class="copy"></button><span class="lang">template</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;"> :</span><span style="color:#C792EA;">disabled</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">isButtonDisabled</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Button</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><p>当 <code>isButtonDisabled</code> 为<a href="https://developer.mozilla.org/en-US/docs/Glossary/Truthy" target="_blank" rel="noreferrer">真值</a>或一个空字符串 (即 <code>&lt;button disabled=&quot;&quot;&gt;</code>) 时，元素会包含这个 <code>disabled</code> attribute。而当其为其他<a href="https://developer.mozilla.org/en-US/docs/Glossary/Falsy" target="_blank" rel="noreferrer">假值</a>时 attribute 将被忽略。</p><h3 id="dynamically-binding-multiple-attributes" tabindex="-1">动态绑定多个值 <a class="header-anchor" href="#dynamically-binding-multiple-attributes" aria-label="Permalink to &quot;动态绑定多个值 {#dynamically-binding-multiple-attributes}&quot;">​</a></h3><p>如果你有像这样的一个包含多个 attribute 的 JavaScript 对象：</p><div class="composition-api"><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> objectOfAttrs </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">id</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">container</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">class</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">wrapper</span><span style="color:#89DDFF;">&#39;</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div></div><div class="options-api"><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">data</span><span style="color:#A6ACCD;">() </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">    objectOfAttrs</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">      id</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">container</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#F07178;">      class</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">wrapper</span><span style="color:#89DDFF;">&#39;</span></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div></div><p>通过不带参数的 <code>v-bind</code>，你可以将它们绑定到单个元素上：</p><div class="language-template"><button title="Copy Code" class="copy"></button><span class="lang">template</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-bind</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">objectOfAttrs</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><h2 id="using-javascript-expressions" tabindex="-1">使用 JavaScript 表达式 <a class="header-anchor" href="#using-javascript-expressions" aria-label="Permalink to &quot;使用 JavaScript 表达式 {#using-javascript-expressions}&quot;">​</a></h2><p>至此，我们仅在模板中绑定了一些简单的属性名。但是 Vue 实际上在所有的数据绑定中都支持完整的 JavaScript 表达式：</p><div class="language-template"><button title="Copy Code" class="copy"></button><span class="lang">template</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">{{</span><span style="color:#A6ACCD;"> number </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}}</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#89DDFF;">{{</span><span style="color:#A6ACCD;"> ok </span><span style="color:#89DDFF;">?</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">YES</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">NO</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}}</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#89DDFF;">{{</span><span style="color:#A6ACCD;"> message</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">split</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">reverse</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">join</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#A6ACCD;">) </span><span style="color:#89DDFF;">}}</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> :</span><span style="color:#C792EA;">id</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;`</span><span style="color:#C3E88D;">list-</span><span style="color:#89DDFF;">${</span><span style="color:#A6ACCD;">id</span><span style="color:#89DDFF;">}`&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><p>这些表达式都会被作为 JavaScript ，以当前组件实例为作用域解析执行。</p><p>在 Vue 模板内，JavaScript 表达式可以被使用在如下场景上：</p><ul><li>在文本插值中 (双大括号)</li><li>在任何 Vue 指令 (以 <code>v-</code> 开头的特殊 attribute) attribute 的值中</li></ul><h3 id="expressions-only" tabindex="-1">仅支持表达式 <a class="header-anchor" href="#expressions-only" aria-label="Permalink to &quot;仅支持表达式 {#expressions-only}&quot;">​</a></h3><p>每个绑定仅支持<strong>单一表达式</strong>，也就是一段能够被求值的 JavaScript 代码。一个简单的判断方法是是否可以合法地写在 <code>return</code> 后面。</p><p>因此，下面的例子都是<strong>无效</strong>的：</p><div class="language-template"><button title="Copy Code" class="copy"></button><span class="lang">template</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">&lt;!-- 这是一个语句，而非表达式 --&gt;</span></span>\n<span class="line"><span style="color:#89DDFF;">{{</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> a </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}}</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#676E95;font-style:italic;">&lt;!-- 条件控制也不支持，请使用三元表达式 --&gt;</span></span>\n<span class="line"><span style="color:#89DDFF;">{{</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> (ok) </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">message</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}}</span></span></code></pre></div><h3 id="calling-functions" tabindex="-1">调用函数 <a class="header-anchor" href="#calling-functions" aria-label="Permalink to &quot;调用函数 {#calling-functions}&quot;">​</a></h3><p>可以在绑定的表达式中使用一个组件暴露的方法：</p><div class="language-template"><button title="Copy Code" class="copy"></button><span class="lang">template</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">time</span><span style="color:#89DDFF;"> :</span><span style="color:#C792EA;">title</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#82AAFF;">toTitleDate</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">date</span><span style="color:#89DDFF;">)</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> :</span><span style="color:#C792EA;">datetime</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">date</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">{{</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">formatDate</span><span style="color:#A6ACCD;">(date) </span><span style="color:#89DDFF;">}}</span></span>\n<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">time</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>绑定在表达式中的方法在组件每次更新时都会被重新调用，因此<strong>不</strong>应该产生任何副作用，比如改变数据或触发异步操作。</p></div><h3 id="restricted-globals-access" tabindex="-1">受限的全局访问 <a class="header-anchor" href="#restricted-globals-access" aria-label="Permalink to &quot;受限的全局访问 {#restricted-globals-access}&quot;">​</a></h3><p>模板中的表达式将被沙盒化，仅能够访问到<a href="https://github.com/vuejs/core/blob/main/packages/shared/src/globalsAllowList.ts#L3" target="_blank" rel="noreferrer">有限的全局对象列表</a>。该列表中会暴露常用的内置全局对象，比如 <code>Math</code> 和 <code>Date</code>。</p><p>没有显式包含在列表中的全局对象将不能在模板内表达式中访问，例如用户附加在 <code>window</code> 上的属性。然而，你也可以自行在 <a href="/docs-vue3-cn/api/application.html#app-config-globalproperties"><code>app.config.globalProperties</code></a> 上显式地添加它们，供所有的 Vue 表达式使用。</p><h2 id="directives" tabindex="-1">指令 Directives <a class="header-anchor" href="#directives" aria-label="Permalink to &quot;指令 Directives {#directives}&quot;">​</a></h2><p>指令是带有 <code>v-</code> 前缀的特殊 attribute。Vue 提供了许多<a href="/docs-vue3-cn/api/built-in-directives.html">内置指令</a>，包括上面我们所介绍的 <code>v-bind</code> 和 <code>v-html</code>。</p><p>指令 attribute 的期望值为一个 JavaScript 表达式 (除了少数几个例外，即之后要讨论到的 <code>v-for</code>、<code>v-on</code> 和 <code>v-slot</code>)。一个指令的任务是在其表达式的值变化时响应式地更新 DOM。以 <a href="/docs-vue3-cn/api/built-in-directives.html#v-if"><code>v-if</code></a> 为例：</p><div class="language-template"><button title="Copy Code" class="copy"></button><span class="lang">template</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-if</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">seen</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Now you see me</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><p>这里，<code>v-if</code> 指令会基于表达式 <code>seen</code> 的值的真假来移除/插入该 <code>&lt;p&gt;</code> 元素。</p><h3 id="arguments" tabindex="-1">参数 Arguments <a class="header-anchor" href="#arguments" aria-label="Permalink to &quot;参数 Arguments {#arguments}&quot;">​</a></h3><p>某些指令会需要一个“参数”，在指令名后通过一个冒号隔开做标识。例如用 <code>v-bind</code> 指令来响应式地更新一个 HTML attribute：</p><div class="language-template"><button title="Copy Code" class="copy"></button><span class="lang">template</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">a</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-bind</span><span style="color:#89DDFF;">:</span><span style="color:#C792EA;">href</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">url</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> ... </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">a</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#676E95;font-style:italic;">&lt;!-- 简写 --&gt;</span></span>\n<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">a</span><span style="color:#89DDFF;"> :</span><span style="color:#C792EA;">href</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">url</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> ... </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">a</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><p>这里 <code>href</code> 就是一个参数，它告诉 <code>v-bind</code> 指令将表达式 <code>url</code> 的值绑定到元素的 <code>href</code> attribute 上。在简写中，参数前的一切 (例如 <code>v-bind:</code>) 都会被缩略为一个 <code>:</code> 字符。</p><p>另一个例子是 <code>v-on</code> 指令，它将监听 DOM 事件：</p><div class="language-template"><button title="Copy Code" class="copy"></button><span class="lang">template</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">a</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-on</span><span style="color:#89DDFF;">:</span><span style="color:#C792EA;">click</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">doSomething</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> ... </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">a</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#676E95;font-style:italic;">&lt;!-- 简写 --&gt;</span></span>\n<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">a</span><span style="color:#89DDFF;"> @</span><span style="color:#C792EA;">click</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">doSomething</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> ... </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">a</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><p>这里的参数是要监听的事件名称：<code>click</code>。<code>v-on</code> 有一个相应的缩写，即 <code>@</code> 字符。我们之后也会讨论关于事件处理的更多细节。</p><h3 id="dynamic-arguments" tabindex="-1">动态参数 <a class="header-anchor" href="#dynamic-arguments" aria-label="Permalink to &quot;动态参数 {#dynamic-arguments}&quot;">​</a></h3><p>同样在指令参数上也可以使用一个 JavaScript 表达式，需要包含在一对方括号内：</p><div class="language-template"><button title="Copy Code" class="copy"></button><span class="lang">template</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">&lt;!--</span></span>\n<span class="line"><span style="color:#676E95;font-style:italic;">注意，参数表达式有一些约束，</span></span>\n<span class="line"><span style="color:#676E95;font-style:italic;">参见下面“动态参数值的限制”与“动态参数语法的限制”章节的解释</span></span>\n<span class="line"><span style="color:#676E95;font-style:italic;">--&gt;</span></span>\n<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">a</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-bind:</span><span style="color:#89DDFF;">[</span><span style="color:#C792EA;">attributeName</span><span style="color:#89DDFF;">]=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">url</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> ... </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">a</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#676E95;font-style:italic;">&lt;!-- 简写 --&gt;</span></span>\n<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">a</span><span style="color:#89DDFF;"> :[</span><span style="color:#C792EA;">attributeName</span><span style="color:#89DDFF;">]=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">url</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> ... </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">a</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><p>这里的 <code>attributeName</code> 会作为一个 JavaScript 表达式被动态执行，计算得到的值会被用作最终的参数。举例来说，如果你的组件实例有一个数据属性 <code>attributeName</code>，其值为 <code>&quot;href&quot;</code>，那么这个绑定就等价于 <code>v-bind:href</code>。</p><p>相似地，你还可以将一个函数绑定到动态的事件名称上：</p><div class="language-template"><button title="Copy Code" class="copy"></button><span class="lang">template</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">a</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-on:</span><span style="color:#89DDFF;">[</span><span style="color:#C792EA;">eventName</span><span style="color:#89DDFF;">]=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">doSomething</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> ... </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">a</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#676E95;font-style:italic;">&lt;!-- 简写 --&gt;</span></span>\n<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">a</span><span style="color:#89DDFF;"> @[</span><span style="color:#C792EA;">eventName</span><span style="color:#89DDFF;">]=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">doSomething</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><p>在此示例中，当 <code>eventName</code> 的值是 <code>&quot;focus&quot;</code> 时，<code>v-on:[eventName]</code> 就等价于 <code>v-on:focus</code>。</p><h4 id="dynamic-argument-value-constraints" tabindex="-1">动态参数值的限制 <a class="header-anchor" href="#dynamic-argument-value-constraints" aria-label="Permalink to &quot;动态参数值的限制 {#dynamic-argument-value-constraints}&quot;">​</a></h4><p>动态参数中表达式的值应当是一个字符串，或者是 <code>null</code>。特殊值 <code>null</code> 意为显式移除该绑定。其他非字符串的值会触发警告。</p><h4 id="dynamic-argument-syntax-constraints" tabindex="-1">动态参数语法的限制 <a class="header-anchor" href="#dynamic-argument-syntax-constraints" aria-label="Permalink to &quot;动态参数语法的限制 {#dynamic-argument-syntax-constraints}&quot;">​</a></h4><p>动态参数表达式因为某些字符的缘故有一些语法限制，比如空格和引号，在 HTML attribute 名称中都是不合法的。例如下面的示例：</p><div class="language-template"><button title="Copy Code" class="copy"></button><span class="lang">template</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">&lt;!-- 这会触发一个编译器警告 --&gt;</span></span>\n<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">a</span><span style="color:#89DDFF;"> :[</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">foo</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;"> + </span><span style="color:#C792EA;">bar</span><span style="color:#89DDFF;">]=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">value</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> ... </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">a</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><p>如果你需要传入一个复杂的动态参数，我们推荐使用<a href="./computed.html">计算属性</a>替换复杂的表达式，也是 Vue 最基础的概念之一，我们很快就会讲到。</p><p>当使用 DOM 内嵌模板 (直接写在 HTML 文件里的模板) 时，我们需要避免在名称中使用大写字母，因为浏览器会强制将其转换为小写：</p><div class="language-template"><button title="Copy Code" class="copy"></button><span class="lang">template</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">a</span><span style="color:#89DDFF;"> :[</span><span style="color:#C792EA;">someAttr</span><span style="color:#89DDFF;">]=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">value</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> ... </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">a</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><p>上面的例子将会在 DOM 内嵌模板中被转换为 <code>:[someattr]</code>。如果你的组件拥有 “someAttr” 属性而非 “someattr”，这段代码将不会工作。单文件组件内的模板<strong>不</strong>受此限制。</p><h3 id="modifiers" tabindex="-1">修饰符 Modifiers <a class="header-anchor" href="#modifiers" aria-label="Permalink to &quot;修饰符 Modifiers {#modifiers}&quot;">​</a></h3><p>修饰符是以点开头的特殊后缀，表明指令需要以一些特殊的方式被绑定。例如 <code>.prevent</code> 修饰符会告知 <code>v-on</code> 指令对触发的事件调用 <code>event.preventDefault()</code>：</p><div class="language-template"><button title="Copy Code" class="copy"></button><span class="lang">template</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">form</span><span style="color:#89DDFF;"> @</span><span style="color:#C792EA;">submit</span><span style="color:#89DDFF;">.</span><span style="color:#C792EA;">prevent</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">onSubmit</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">...</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">form</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><p>之后在讲到 <a href="./event-handling.html#event-modifiers"><code>v-on</code></a> 和 <a href="./forms.html#modifiers"><code>v-model</code></a> 的功能时，你将会看到其他修饰符的例子。</p><p>最后，在这里你可以直观地看到完整的指令语法：</p><p><img src="/docs-vue3-cn/assets/directive.69c37117.png" alt="指令语法图"></p>',74),c=JSON.parse('{"title":"模板语法","description":"","frontmatter":{},"headers":[{"level":2,"title":"文本插值","slug":"text-interpolation","link":"#text-interpolation","children":[]},{"level":2,"title":"原始 HTML","slug":"raw-html","link":"#raw-html","children":[]},{"level":2,"title":"Attribute 绑定","slug":"attribute-bindings","link":"#attribute-bindings","children":[{"level":3,"title":"简写","slug":"shorthand","link":"#shorthand","children":[]},{"level":3,"title":"布尔型 Attribute","slug":"boolean-attributes","link":"#boolean-attributes","children":[]},{"level":3,"title":"动态绑定多个值","slug":"dynamically-binding-multiple-attributes","link":"#dynamically-binding-multiple-attributes","children":[]}]},{"level":2,"title":"使用 JavaScript 表达式","slug":"using-javascript-expressions","link":"#using-javascript-expressions","children":[{"level":3,"title":"仅支持表达式","slug":"expressions-only","link":"#expressions-only","children":[]},{"level":3,"title":"调用函数","slug":"calling-functions","link":"#calling-functions","children":[]},{"level":3,"title":"受限的全局访问","slug":"restricted-globals-access","link":"#restricted-globals-access","children":[]}]},{"level":2,"title":"指令 Directives","slug":"directives","link":"#directives","children":[{"level":3,"title":"参数 Arguments","slug":"arguments","link":"#arguments","children":[]},{"level":3,"title":"动态参数","slug":"dynamic-arguments","link":"#dynamic-arguments","children":[]},{"level":3,"title":"修饰符 Modifiers","slug":"modifiers","link":"#modifiers","children":[]}]}],"relativePath":"guide/essentials/template-syntax.md","filePath":"guide/essentials/template-syntax.md"}'),r={name:"guide/essentials/template-syntax.md"},i=Object.assign(r,{setup(e){const c='<span style="color: red">This should be red.</span>';return(e,r)=>(o(),s("div",null,[t,a("p",{class:"demo"},[a("p",null,"Using text interpolation: "+l(c)),a("p",null,[n("Using v-html directive: "),a("span",{innerHTML:c})])]),p]))}});export{c as __pageData,i as default};
