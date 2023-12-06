const n=JSON.parse(`{"key":"v-8d7a6bb8","path":"/zh/guide/model-grid-header.html","title":"头部和脚部","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"头部","slug":"头部","link":"#头部","children":[]},{"level":2,"title":"脚部","slug":"脚部","link":"#脚部","children":[]}],"git":{"createdTime":1701780913000,"updatedTime":1701780913000,"contributors":[{"name":"Moments","email":"554676262@qq.com","commits":1}]},"readingTime":{"minutes":1.51,"words":454},"filePathRelative":"zh/guide/model-grid-header.md","localizedDate":"2023年12月5日","excerpt":"<h1> 头部和脚部</h1>\\n<p>数据表格支持往头部和脚部两个区块填入你想要的内容</p>\\n<div class=\\"language-php line-numbers-mode\\" data-ext=\\"php\\"><pre class=\\"language-php\\"><code><span class=\\"token variable\\">$grid</span><span class=\\"token operator\\">-&gt;</span><span class=\\"token function\\">header</span><span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">function</span> <span class=\\"token punctuation\\">(</span><span class=\\"token variable\\">$collection</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token keyword\\">return</span> <span class=\\"token string single-quoted-string\\">'header'</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\n<span class=\\"token variable\\">$grid</span><span class=\\"token operator\\">-&gt;</span><span class=\\"token function\\">footer</span><span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">function</span> <span class=\\"token punctuation\\">(</span><span class=\\"token variable\\">$collection</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token keyword\\">return</span> <span class=\\"token string single-quoted-string\\">'footer'</span><span class=\\"token punctuation\\">;</span> \\n<span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>"}`);export{n as data};
