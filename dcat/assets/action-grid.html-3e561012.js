const e=JSON.parse('{"key":"v-69486752","path":"/zh/guide/action-grid.html","title":"数据表格动作","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"表格动作基类 (GridAction)","slug":"表格动作基类-gridaction","link":"#表格动作基类-gridaction","children":[{"level":3,"title":"表格实例 (parent)","slug":"表格实例-parent","link":"#表格实例-parent","children":[]},{"level":3,"title":"表格页面地址 (resource)","slug":"表格页面地址-resource","link":"#表格页面地址-resource","children":[]}]},{"level":2,"title":"工具栏操作按钮基类 (AbstractTool)","slug":"工具栏操作按钮基类-abstracttool","link":"#工具栏操作按钮基类-abstracttool","children":[{"level":3,"title":"按钮样式 (style)","slug":"按钮样式-style","link":"#按钮样式-style","children":[]}]},{"level":2,"title":"批量操作基类 (BatchAction)","slug":"批量操作基类-batchaction","link":"#批量操作基类-batchaction","children":[{"level":3,"title":"获取选中行的主键数组 (getSelectedKeysScript)","slug":"获取选中行的主键数组-getselectedkeysscript","link":"#获取选中行的主键数组-getselectedkeysscript","children":[]}]},{"level":2,"title":"行操作基类 (RowAction)","slug":"行操作基类-rowaction","link":"#行操作基类-rowaction","children":[{"level":3,"title":"行数据 (row)","slug":"行数据-row","link":"#行数据-row","children":[]},{"level":3,"title":"主键值 (getKey)","slug":"主键值-getkey","link":"#主键值-getkey","children":[]}]}],"git":{"createdTime":1701780913000,"updatedTime":1701780913000,"contributors":[{"name":"Moments","email":"554676262@qq.com","commits":1}]},"readingTime":{"minutes":2.25,"words":675},"filePathRelative":"zh/guide/action-grid.md","localizedDate":"2023年12月5日","excerpt":"<h1> 数据表格动作</h1>\\n<h2> 表格动作基类 (GridAction)</h2>\\n<p>所有数据表格相关的动作类，包括<a href=\\"/dcat/zh/guide/model-grid-custom-tools.html\\" target=\\"blank\\">工具栏按钮</a>(<code>AbstractTool</code>)、\\n<a href=\\"/dcat/zh/guide/model-grid-actions.html\\" target=\\"blank\\">行操作</a>(<code>RowAction</code>)、<a href=\\"/dcat/zh/guide/model-grid-custom-tools.html#batch\\" target=\\"blank\\">批量操作</a>(<code>BatchAction</code>)\\n等等操作按钮的基类都继承自<code>Dcat\\\\Admin\\\\Grid\\\\GridAction</code>类，而<code>GridAction</code>则继承自<a href=\\"/dcat/zh/guide/action.html\\" target=\\"blank\\">动作类基类</a>(<code>Action</code>)。</p>"}');export{e as data};