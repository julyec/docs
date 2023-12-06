const n=JSON.parse('{"key":"v-000700b4","path":"/guide/model-grid-async.html","title":"Asynchronous rendering of tables","lang":"en-US","frontmatter":{},"headers":[],"git":{"createdTime":1701780913000,"updatedTime":1701780913000,"contributors":[{"name":"Moments","email":"554676262@qq.com","commits":1}]},"readingTime":{"minutes":0.49,"words":147},"filePathRelative":"guide/model-grid-async.md","localizedDate":"December 5, 2023","excerpt":"<h1> Asynchronous rendering of tables</h1>\\n<p>When the table on the page displays a particularly large amount of data (many columns and rows) and loads more components, there may be a lagging phenomenon, which can be effectively mitigated by using the table asynchronous rendering feature.</p>\\n<div class=\\"language-php line-numbers-mode\\" data-ext=\\"php\\"><pre class=\\"language-php\\"><code><span class=\\"token comment\\">// Enable asynchronous rendering of tables</span>\\n<span class=\\"token variable\\">$grid</span><span class=\\"token operator\\">-&gt;</span><span class=\\"token function\\">async</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\n<span class=\\"token comment\\">// Disable</span>\\n<span class=\\"token variable\\">$grid</span><span class=\\"token operator\\">-&gt;</span><span class=\\"token function\\">async</span><span class=\\"token punctuation\\">(</span><span class=\\"token constant boolean\\">false</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\n<span class=\\"token comment\\">// Determine if the request is an asynchronous rendering request</span>\\n<span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span><span class=\\"token variable\\">$grid</span><span class=\\"token operator\\">-&gt;</span><span class=\\"token function\\">isAsyncRequest</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token operator\\">...</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>"}');export{n as data};