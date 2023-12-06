const n=JSON.parse('{"key":"v-420b0948","path":"/zh/guide/model-grid-softdelete.html","title":"数据软删除","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"回收站入口","slug":"回收站入口","link":"#回收站入口","children":[]},{"level":2,"title":"行恢复操作","slug":"行恢复操作","link":"#行恢复操作","children":[]},{"level":2,"title":"批量恢复操作","slug":"批量恢复操作","link":"#批量恢复操作","children":[]}],"git":{"createdTime":1701780913000,"updatedTime":1701780913000,"contributors":[{"name":"Moments","email":"554676262@qq.com","commits":1}]},"readingTime":{"minutes":1.85,"words":554},"filePathRelative":"zh/guide/model-grid-softdelete.md","localizedDate":"2023年12月5日","excerpt":"<h1> 数据软删除</h1>\\n<p>先参考<code>Laravel</code>文档实现模型的<a href=\\"https://learnku.com/docs/laravel/6.x/eloquent/5176#soft-deleting\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">软删除</a>:</p>\\n<div class=\\"language-php line-numbers-mode\\" data-ext=\\"php\\"><pre class=\\"language-php\\"><code><span class=\\"token php language-php\\"><span class=\\"token delimiter important\\">&lt;?php</span>\\n\\n<span class=\\"token keyword\\">namespace</span> <span class=\\"token package\\">App<span class=\\"token punctuation\\">\\\\</span>Models</span><span class=\\"token punctuation\\">;</span>\\n\\n<span class=\\"token keyword\\">use</span> <span class=\\"token package\\">Illuminate<span class=\\"token punctuation\\">\\\\</span>Database<span class=\\"token punctuation\\">\\\\</span>Eloquent<span class=\\"token punctuation\\">\\\\</span>Model</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token keyword\\">use</span> <span class=\\"token package\\">Illuminate<span class=\\"token punctuation\\">\\\\</span>Database<span class=\\"token punctuation\\">\\\\</span>Eloquent<span class=\\"token punctuation\\">\\\\</span>SoftDeletes</span><span class=\\"token punctuation\\">;</span>\\n\\n<span class=\\"token keyword\\">class</span> <span class=\\"token class-name-definition class-name\\">Post</span> <span class=\\"token keyword\\">extends</span> <span class=\\"token class-name\\">Model</span>\\n<span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token keyword\\">use</span> <span class=\\"token package\\">SoftDeletes</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span>\\n</span></code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>"}');export{n as data};
