import{_ as s,c as n,o as a,a as l}from"./chunks/framework.ee9e66be.js";const p=JSON.parse('{"title":"Priority D Rules: Use with Caution","description":"","frontmatter":{},"headers":[{"level":2,"title":"Element selectors with scoped","slug":"element-selectors-with-scoped","link":"#element-selectors-with-scoped","children":[]},{"level":2,"title":"Implicit parent-child communication","slug":"implicit-parent-child-communication","link":"#implicit-parent-child-communication","children":[]}],"relativePath":"style-guide/rules-use-with-caution.md","filePath":"style-guide/rules-use-with-caution.md"}'),o={name:"style-guide/rules-use-with-caution.md"},e=[l('<h1 id="priority-d-rules-use-with-caution" tabindex="-1">Priority D Rules: Use with Caution <a class="header-anchor" href="#priority-d-rules-use-with-caution" aria-label="Permalink to &quot;Priority D Rules: Use with Caution {#priority-d-rules-use-with-caution}&quot;">​</a></h1><p>Some features of Vue exist to accommodate rare edge cases or smoother migrations from a legacy code base. When overused however, they can make your code more difficult to maintain or even become a source of bugs. These rules shine a light on potentially risky features, describing when and why they should be avoided.</p><h2 id="element-selectors-with-scoped" tabindex="-1">Element selectors with <code>scoped</code> <a class="header-anchor" href="#element-selectors-with-scoped" aria-label="Permalink to &quot;Element selectors with `scoped` {#element-selectors-with-scoped}&quot;">​</a></h2><p><strong>Element selectors should be avoided with <code>scoped</code>.</strong></p><p>Prefer class selectors over element selectors in <code>scoped</code> styles, because large numbers of element selectors are slow.</p><details class="details custom-block"><summary>Detailed Explanation</summary><p>To scope styles, Vue adds a unique attribute to component elements, such as <code>data-v-f3f3eg9</code>. Then selectors are modified so that only matching elements with this attribute are selected (e.g. <code>button[data-v-f3f3eg9]</code>).</p><p>The problem is that large numbers of element-attribute selectors (e.g. <code>button[data-v-f3f3eg9]</code>) will be considerably slower than class-attribute selectors (e.g. <code>.btn-close[data-v-f3f3eg9]</code>), so class selectors should be preferred whenever possible.</p></details><div class="style-example style-example-bad"><h3>Bad</h3><div class="language-template"><button title="Copy Code" class="copy"></button><span class="lang">template</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">×</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">style</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">scoped</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">button {</span></span>\n<span class="line"><span style="color:#A6ACCD;">  background-color: red;</span></span>\n<span class="line"><span style="color:#A6ACCD;">}</span></span>\n<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">style</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div></div><div class="style-example style-example-good"><h3>Good</h3><div class="language-template"><button title="Copy Code" class="copy"></button><span class="lang">template</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">btn btn-close</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">×</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">style</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">scoped</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">.btn-close {</span></span>\n<span class="line"><span style="color:#A6ACCD;">  background-color: red;</span></span>\n<span class="line"><span style="color:#A6ACCD;">}</span></span>\n<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">style</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div></div><h2 id="implicit-parent-child-communication" tabindex="-1">Implicit parent-child communication <a class="header-anchor" href="#implicit-parent-child-communication" aria-label="Permalink to &quot;Implicit parent-child communication {#implicit-parent-child-communication}&quot;">​</a></h2><p><strong>Props and events should be preferred for parent-child component communication, instead of <code>this.$parent</code> or mutating props.</strong></p><p>An ideal Vue application is props down, events up. Sticking to this convention makes your components much easier to understand. However, there are edge cases where prop mutation or <code>this.$parent</code> can simplify two components that are already deeply coupled.</p><p>The problem is, there are also many <em>simple</em> cases where these patterns may offer convenience. Beware: do not be seduced into trading simplicity (being able to understand the flow of your state) for short-term convenience (writing less code).</p><div class="style-example style-example-bad"><h3>Bad</h3><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">app</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">component</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">TodoItem</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">props</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">todo</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">type</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> Object</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">required</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">&lt;input v-model=&quot;todo.text&quot;&gt;</span><span style="color:#89DDFF;">&#39;</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span></code></pre></div><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">app</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">component</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">TodoItem</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">props</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">todo</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">type</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> Object</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">required</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">methods</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">removeTodo</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">$parent</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">todos</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">$parent</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">todos</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">filter</span><span style="color:#F07178;">(</span></span>\n<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">todo</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">todo</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">id</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">!==</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">vm</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">todo</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">id</span></span>\n<span class="line"><span style="color:#F07178;">      )</span></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">`</span></span>\n<span class="line"><span style="color:#C3E88D;">    &lt;span&gt;</span></span>\n<span class="line"><span style="color:#C3E88D;">      {{ todo.text }}</span></span>\n<span class="line"><span style="color:#C3E88D;">      &lt;button @click=&quot;removeTodo&quot;&gt;</span></span>\n<span class="line"><span style="color:#C3E88D;">        ×</span></span>\n<span class="line"><span style="color:#C3E88D;">      &lt;/button&gt;</span></span>\n<span class="line"><span style="color:#C3E88D;">    &lt;/span&gt;</span></span>\n<span class="line"><span style="color:#C3E88D;">  </span><span style="color:#89DDFF;">`</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span></code></pre></div></div><div class="style-example style-example-good"><h3>Good</h3><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">app</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">component</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">TodoItem</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">props</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">todo</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">type</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> Object</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">required</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">emits</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">input</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">`</span></span>\n<span class="line"><span style="color:#C3E88D;">    &lt;input</span></span>\n<span class="line"><span style="color:#C3E88D;">      :value=&quot;todo.text&quot;</span></span>\n<span class="line"><span style="color:#C3E88D;">      @input=&quot;$emit(&#39;input&#39;, $event.target.value)&quot;</span></span>\n<span class="line"><span style="color:#C3E88D;">    &gt;</span></span>\n<span class="line"><span style="color:#C3E88D;">  </span><span style="color:#89DDFF;">`</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span></code></pre></div><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">app</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">component</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">TodoItem</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">props</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">todo</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">type</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> Object</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">required</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">emits</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">delete</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">`</span></span>\n<span class="line"><span style="color:#C3E88D;">    &lt;span&gt;</span></span>\n<span class="line"><span style="color:#C3E88D;">      {{ todo.text }}</span></span>\n<span class="line"><span style="color:#C3E88D;">      &lt;button @click=&quot;$emit(&#39;delete&#39;)&quot;&gt;</span></span>\n<span class="line"><span style="color:#C3E88D;">        ×</span></span>\n<span class="line"><span style="color:#C3E88D;">      &lt;/button&gt;</span></span>\n<span class="line"><span style="color:#C3E88D;">    &lt;/span&gt;</span></span>\n<span class="line"><span style="color:#C3E88D;">  </span><span style="color:#89DDFF;">`</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span></code></pre></div></div>',14)];const t=s(o,[["render",function(s,l,p,o,t,c){return a(),n("div",null,e)}]]);export{p as __pageData,t as default};
