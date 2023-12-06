const l=JSON.parse(`{"key":"v-4b583bb4","path":"/zh/guide/model-grid-column-display.html","title":"列的显示和扩展","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"根据条件显示不同的组件","slug":"根据条件显示不同的组件","link":"#根据条件显示不同的组件","children":[]},{"level":2,"title":"列显示","slug":"列显示","link":"#列显示","children":[{"level":3,"title":"display","slug":"display","link":"#display","children":[]},{"level":3,"title":"设置列的HTML属性","slug":"设置列的html属性","link":"#设置列的html属性","children":[]},{"level":3,"title":"列视图","slug":"列视图","link":"#列视图","children":[]},{"level":3,"title":"图片","slug":"图片","link":"#图片","children":[]},{"level":3,"title":"显示label标签","slug":"显示label标签","link":"#显示label标签","children":[]},{"level":3,"title":"显示badge标签","slug":"显示badge标签","link":"#显示badge标签","children":[]},{"level":3,"title":"布尔值显示 (bool)","slug":"布尔值显示-bool","link":"#布尔值显示-bool","children":[]},{"level":3,"title":"圆点前缀 (dot)","slug":"圆点前缀-dot","link":"#圆点前缀-dot","children":[]},{"level":3,"title":"列展开 (expand)","slug":"列展开-expand","link":"#列展开-expand","children":[{"level":4,"title":"异步加载","slug":"异步加载","link":"#异步加载","children":[]},{"level":4,"title":"异步加载工具表单","slug":"异步加载工具表单","link":"#异步加载工具表单","children":[]}]},{"level":3,"title":"弹出模态框 (modal)","slug":"弹出模态框-modal","link":"#弹出模态框-modal","children":[{"level":4,"title":"异步加载","slug":"异步加载-1","link":"#异步加载-1","children":[]},{"level":4,"title":"异步加载工具表单","slug":"异步加载工具表单-1","link":"#异步加载工具表单-1","children":[]}]},{"level":3,"title":"进度条 (progressBar)","slug":"进度条-progressbar","link":"#进度条-progressbar","children":[]},{"level":3,"title":"showTreeInDialog","slug":"showtreeindialog","link":"#showtreeindialog","children":[]},{"level":3,"title":"内容映射 (using)","slug":"内容映射-using","link":"#内容映射-using","children":[]},{"level":3,"title":"字符串分割为数组","slug":"字符串分割为数组","link":"#字符串分割为数组","children":[]},{"level":3,"title":"prepend","slug":"prepend","link":"#prepend","children":[]},{"level":3,"title":"append","slug":"append","link":"#append","children":[]},{"level":3,"title":"字符串或数组截取 (limit)","slug":"字符串或数组截取-limit","link":"#字符串或数组截取-limit","children":[]},{"level":3,"title":"列二维码 (qrcode)","slug":"列二维码-qrcode","link":"#列二维码-qrcode","children":[]},{"level":3,"title":"可复制 (copyable)","slug":"可复制-copyable","link":"#可复制-copyable","children":[]},{"level":3,"title":"可排序 (orderable)","slug":"可排序-orderable","link":"#可排序-orderable","children":[{"level":4,"title":"SortableTrait","slug":"sortabletrait","link":"#sortabletrait","children":[]},{"level":4,"title":"ModelTree","slug":"modeltree","link":"#modeltree","children":[]}]},{"level":3,"title":"链接 (link)","slug":"链接-link","link":"#链接-link","children":[]},{"level":3,"title":"行操作 (action)","slug":"行操作-action","link":"#行操作-action","children":[]}]},{"level":2,"title":"帮助方法","slug":"帮助方法","link":"#帮助方法","children":[{"level":3,"title":"字符串操作","slug":"字符串操作","link":"#字符串操作","children":[]},{"level":3,"title":"数组操作","slug":"数组操作","link":"#数组操作","children":[]},{"level":3,"title":"混合使用","slug":"混合使用","link":"#混合使用","children":[]}]},{"level":2,"title":"扩展列的显示功能","slug":"扩展列的显示功能","link":"#扩展列的显示功能","children":[{"level":3,"title":"匿名函数","slug":"匿名函数","link":"#匿名函数","children":[]},{"level":3,"title":"扩展类","slug":"扩展类","link":"#扩展类","children":[]},{"level":3,"title":"指定列名","slug":"指定列名","link":"#指定列名","children":[]}]}],"git":{"createdTime":1701780913000,"updatedTime":1701780913000,"contributors":[{"name":"Moments","email":"554676262@qq.com","commits":1}]},"readingTime":{"minutes":12.92,"words":3875},"filePathRelative":"zh/guide/model-grid-column-display.md","localizedDate":"2023年12月5日","excerpt":"<h1> 列的显示和扩展</h1>\\n<p>数据表格内置了很多对于列的操作方法，可以通过这些方法很灵活的操作列数据。</p>\\n<h2> 根据条件显示不同的组件</h2>\\n<p>有些情况我们需要根据某个条件去判断是否使用列的某个显示功能：</p>\\n<blockquote>\\n<p>{tip} 需要注意的是，<code>Grid\\\\Column::if</code>只对列的显示相关功能有效，其他方法如表头的相关操作都不能使用此方法！</p>\\n</blockquote>\\n<div class=\\"language-php line-numbers-mode\\" data-ext=\\"php\\"><pre class=\\"language-php\\"><code><span class=\\"token variable\\">$grid</span><span class=\\"token operator\\">-&gt;</span><span class=\\"token function\\">column</span><span class=\\"token punctuation\\">(</span><span class=\\"token string single-quoted-string\\">'config'</span><span class=\\"token punctuation\\">)</span>\\n    <span class=\\"token operator\\">-&gt;</span><span class=\\"token function\\">if</span><span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">function</span> <span class=\\"token punctuation\\">(</span><span class=\\"token variable\\">$column</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token comment\\">// 获取当前行其他字段值</span>\\n        <span class=\\"token variable\\">$username</span> <span class=\\"token operator\\">=</span> <span class=\\"token variable\\">$this</span><span class=\\"token operator\\">-&gt;</span><span class=\\"token property\\">username</span><span class=\\"token punctuation\\">;</span>\\n        \\n    \\t<span class=\\"token comment\\">// $column-&gt;getValue() 是当前字段的值</span>\\n        <span class=\\"token keyword\\">return</span> <span class=\\"token variable\\">$column</span><span class=\\"token operator\\">-&gt;</span><span class=\\"token function\\">getValue</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span>\\n    <span class=\\"token operator\\">-&gt;</span><span class=\\"token function\\">display</span><span class=\\"token punctuation\\">(</span><span class=\\"token variable\\">$view</span><span class=\\"token punctuation\\">)</span>\\n    <span class=\\"token operator\\">-&gt;</span><span class=\\"token function\\">copyable</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span>\\n    <span class=\\"token operator\\">-&gt;</span><span class=\\"token function\\">else</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span>\\n    <span class=\\"token operator\\">-&gt;</span><span class=\\"token function\\">display</span><span class=\\"token punctuation\\">(</span><span class=\\"token string single-quoted-string\\">''</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>"}`);export{l as data};
