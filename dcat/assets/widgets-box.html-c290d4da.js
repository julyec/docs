const n=JSON.parse(`{"key":"v-d6cc8db2","path":"/zh/guide/widgets-box.html","title":"卡片","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"Card","slug":"card","link":"#card","children":[]},{"level":2,"title":"Box","slug":"box","link":"#box","children":[]}],"git":{"createdTime":1701780913000,"updatedTime":1701780913000,"contributors":[{"name":"Moments","email":"554676262@qq.com","commits":1}]},"readingTime":{"minutes":0.51,"words":153},"filePathRelative":"zh/guide/widgets-box.md","localizedDate":"2023年12月5日","excerpt":"<h1> 卡片</h1>\\n<h2> Card</h2>\\n<div class=\\"language-php line-numbers-mode\\" data-ext=\\"php\\"><pre class=\\"language-php\\"><code><span class=\\"token php language-php\\"><span class=\\"token delimiter important\\">&lt;?php</span>\\n\\n<span class=\\"token keyword\\">use</span> <span class=\\"token package\\">Dcat<span class=\\"token punctuation\\">\\\\</span>Admin<span class=\\"token punctuation\\">\\\\</span>Widgets<span class=\\"token punctuation\\">\\\\</span>Card</span><span class=\\"token punctuation\\">;</span>\\n\\n<span class=\\"token comment\\">// 只填充内容，不需要标题</span>\\n<span class=\\"token variable\\">$card</span> <span class=\\"token operator\\">=</span> <span class=\\"token class-name static-context\\">Card</span><span class=\\"token operator\\">::</span><span class=\\"token function\\">make</span><span class=\\"token punctuation\\">(</span><span class=\\"token function\\">view</span><span class=\\"token punctuation\\">(</span><span class=\\"token string single-quoted-string\\">'...'</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\n<span class=\\"token comment\\">// 标题和内容</span>\\n<span class=\\"token variable\\">$card</span> <span class=\\"token operator\\">=</span> <span class=\\"token class-name static-context\\">Card</span><span class=\\"token operator\\">::</span><span class=\\"token function\\">make</span><span class=\\"token punctuation\\">(</span><span class=\\"token string single-quoted-string\\">'标题'</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string single-quoted-string\\">'内容'</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\n<span class=\\"token comment\\">// 设置间距</span>\\n<span class=\\"token variable\\">$card</span><span class=\\"token operator\\">-&gt;</span><span class=\\"token function\\">padding</span><span class=\\"token punctuation\\">(</span><span class=\\"token string single-quoted-string\\">'0 15px 0 12px'</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\n<span class=\\"token comment\\">// 设置工具按钮</span>\\n<span class=\\"token variable\\">$card</span><span class=\\"token operator\\">-&gt;</span><span class=\\"token function\\">tool</span><span class=\\"token punctuation\\">(</span><span class=\\"token string single-quoted-string\\">'&lt;button class=\\"btn btn-sm btn-light shadow-none\\"&gt;按钮&lt;/button&gt;'</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\n<span class=\\"token comment\\">// 设置底部内容</span>\\n<span class=\\"token variable\\">$card</span><span class=\\"token operator\\">-&gt;</span><span class=\\"token function\\">footer</span><span class=\\"token punctuation\\">(</span><span class=\\"token function\\">view</span><span class=\\"token punctuation\\">(</span><span class=\\"token string single-quoted-string\\">'...'</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n</span></code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>"}`);export{n as data};