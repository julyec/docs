const n=JSON.parse(`{"key":"v-f84502a6","path":"/zh/guide/model-grid-editable.html","title":"数据表格行内编辑","lang":"zh-CN","frontmatter":{},"headers":[{"level":3,"title":"文本 (editable)","slug":"文本-editable","link":"#文本-editable","children":[]},{"level":3,"title":"开关 (switch)","slug":"开关-switch","link":"#开关-switch","children":[]},{"level":3,"title":"开关组 (switchGroup)","slug":"开关组-switchgroup","link":"#开关组-switchgroup","children":[]},{"level":3,"title":"下拉选框 (select)","slug":"下拉选框-select","link":"#下拉选框-select","children":[]},{"level":3,"title":"单选框 (radio)","slug":"单选框-radio","link":"#单选框-radio","children":[]},{"level":3,"title":"多选框 (checkbox)","slug":"多选框-checkbox","link":"#多选框-checkbox","children":[]},{"level":3,"title":"textarea","slug":"textarea","link":"#textarea","children":[]}],"git":{"createdTime":1701780913000,"updatedTime":1701780913000,"contributors":[{"name":"Moments","email":"554676262@qq.com","commits":1}]},"readingTime":{"minutes":2.05,"words":616},"filePathRelative":"zh/guide/model-grid-editable.md","localizedDate":"2023年12月5日","excerpt":"<h1> 数据表格行内编辑</h1>\\n<p>数据表格所有使用行内编辑的列字段，都必须在<code>form</code>表单中定义一个相同的表单字段，否则将无法进行编辑。</p>\\n<h3> 文本 (editable)</h3>\\n<p>启用</p>\\n<div class=\\"language-php line-numbers-mode\\" data-ext=\\"php\\"><pre class=\\"language-php\\"><code><span class=\\"token variable\\">$grid</span><span class=\\"token operator\\">-&gt;</span><span class=\\"token function\\">column</span><span class=\\"token punctuation\\">(</span><span class=\\"token string single-quoted-string\\">'title'</span><span class=\\"token punctuation\\">)</span><span class=\\"token operator\\">-&gt;</span><span class=\\"token function\\">editable</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\n<span class=\\"token comment\\">// 编辑成功后刷新页面</span>\\n<span class=\\"token variable\\">$grid</span><span class=\\"token operator\\">-&gt;</span><span class=\\"token function\\">column</span><span class=\\"token punctuation\\">(</span><span class=\\"token string single-quoted-string\\">'nickname'</span><span class=\\"token punctuation\\">)</span><span class=\\"token operator\\">-&gt;</span><span class=\\"token function\\">editable</span><span class=\\"token punctuation\\">(</span><span class=\\"token constant boolean\\">true</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>"}`);export{n as data};