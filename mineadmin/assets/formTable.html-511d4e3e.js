const n=JSON.parse(`{"key":"v-126e6e4e","path":"/further/front/formTable.html","title":"组件明细表格使用","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"配置参考说明","slug":"配置参考说明","link":"#配置参考说明","children":[]},{"level":2,"title":"提交数据","slug":"提交数据","link":"#提交数据","children":[]},{"level":2,"title":"设置表单字段默认值","slug":"设置表单字段默认值","link":"#设置表单字段默认值","children":[]},{"level":2,"title":"使用字典数据","slug":"使用字典数据","link":"#使用字典数据","children":[]},{"level":2,"title":"数据联动","slug":"数据联动","link":"#数据联动","children":[]},{"level":2,"title":"字段交互控制","slug":"字段交互控制","link":"#字段交互控制","children":[]},{"level":2,"title":"Columns属性列表","slug":"columns属性列表","link":"#columns属性列表","children":[]},{"level":2,"title":"Options属性列表","slug":"options属性列表","link":"#options属性列表","children":[]},{"level":2,"title":"formType属性列表","slug":"formtype属性列表","link":"#formtype属性列表","children":[]},{"level":2,"title":"组件方法","slug":"组件方法","link":"#组件方法","children":[]},{"level":2,"title":"组件属性","slug":"组件属性","link":"#组件属性","children":[]},{"level":2,"title":"组件插槽列表","slug":"组件插槽列表","link":"#组件插槽列表","children":[{"level":3,"title":"字段组件插槽","slug":"字段组件插槽","link":"#字段组件插槽","children":[]},{"level":3,"title":"子表单字段插槽","slug":"子表单字段插槽","link":"#子表单字段插槽","children":[]},{"level":3,"title":"明细表格字段插槽","slug":"明细表格字段插槽","link":"#明细表格字段插槽","children":[]}]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":5.67,"words":1702},"filePathRelative":"further/front/formTable.md","excerpt":"<h1> 组件明细表格使用</h1>\\n<h2> 配置参考说明</h2>\\n<p>组件是在<code>ma-crud</code>和<code>ma-form</code>的基础上新增了<code>form-table</code>表格明细功能，其<code>ma-crud</code>和<code>ma-form</code>组件配置以及使用说明请到\\n<a href=\\"http://doc.mineadmin.com\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">mineadmin文档</a>查看</p>\\n<div class=\\"language-html line-numbers-mode\\" data-ext=\\"html\\"><pre class=\\"language-html\\"><code><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>template</span><span class=\\"token punctuation\\">&gt;</span></span>\\n    <span class=\\"token comment\\">&lt;!-- 使用 ma-crud 组件 --&gt;</span>\\n    <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>ma-form</span> <span class=\\"token attr-name\\">v-model</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>form<span class=\\"token punctuation\\">\\"</span></span> <span class=\\"token attr-name\\">:columns</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>columnsOptions<span class=\\"token punctuation\\">\\"</span></span> <span class=\\"token attr-name\\">ref</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>crudForm<span class=\\"token punctuation\\">\\"</span></span> <span class=\\"token punctuation\\">/&gt;</span></span>\\n<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>template</span><span class=\\"token punctuation\\">&gt;</span></span>\\n\\n<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>script</span> <span class=\\"token attr-name\\">setup</span><span class=\\"token punctuation\\">&gt;</span></span><span class=\\"token script\\"><span class=\\"token language-javascript\\">\\n<span class=\\"token keyword\\">import</span> <span class=\\"token punctuation\\">{</span> ref<span class=\\"token punctuation\\">,</span> reactive <span class=\\"token punctuation\\">}</span> <span class=\\"token keyword\\">from</span> <span class=\\"token string\\">'vue'</span>\\n\\n<span class=\\"token comment\\">// form 组件的 ref</span>\\n<span class=\\"token keyword\\">const</span> crudForm <span class=\\"token operator\\">=</span> <span class=\\"token function\\">ref</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span>\\n<span class=\\"token comment\\">// 表单数据</span>\\n<span class=\\"token keyword\\">const</span> form <span class=\\"token operator\\">=</span> <span class=\\"token function\\">ref</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">{</span><span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span>\\n<span class=\\"token comment\\">// 组件的字段设置</span>\\n<span class=\\"token keyword\\">const</span> columnsOptions <span class=\\"token operator\\">=</span> <span class=\\"token function\\">reactive</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">[</span>\\n    <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token literal-property property\\">title</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">'真实姓名'</span><span class=\\"token punctuation\\">,</span>\\n        <span class=\\"token literal-property property\\">dataIndex</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">'realName'</span><span class=\\"token punctuation\\">,</span>\\n        <span class=\\"token literal-property property\\">formType</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">'input'</span><span class=\\"token punctuation\\">,</span>  <span class=\\"token comment\\">// 默认为 input 组件</span>\\n    <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">,</span>\\n    <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token literal-property property\\">title</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">'性别'</span><span class=\\"token punctuation\\">,</span>\\n        <span class=\\"token literal-property property\\">dataIndex</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">'sex'</span><span class=\\"token punctuation\\">,</span>\\n        <span class=\\"token literal-property property\\">formType</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">'radio'</span><span class=\\"token punctuation\\">,</span>  <span class=\\"token comment\\">// 使用单选框组件</span>\\n        <span class=\\"token comment\\">// 定义字典数据</span>\\n        <span class=\\"token literal-property property\\">dict</span><span class=\\"token operator\\">:</span> <span class=\\"token punctuation\\">{</span>\\n            <span class=\\"token literal-property property\\">data</span><span class=\\"token operator\\">:</span> <span class=\\"token punctuation\\">[</span><span class=\\"token punctuation\\">{</span> <span class=\\"token literal-property property\\">label</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">'保密'</span><span class=\\"token punctuation\\">,</span> <span class=\\"token literal-property property\\">value</span><span class=\\"token operator\\">:</span> <span class=\\"token number\\">0</span> <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">,</span> <span class=\\"token punctuation\\">{</span> <span class=\\"token literal-property property\\">label</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">'男'</span><span class=\\"token punctuation\\">,</span> <span class=\\"token literal-property property\\">value</span><span class=\\"token operator\\">:</span> <span class=\\"token number\\">1</span> <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">,</span> <span class=\\"token punctuation\\">{</span> <span class=\\"token literal-property property\\">label</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">'女'</span><span class=\\"token punctuation\\">,</span> <span class=\\"token literal-property property\\">value</span><span class=\\"token operator\\">:</span> <span class=\\"token number\\">2</span> <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">]</span>\\n        <span class=\\"token punctuation\\">}</span>\\n    <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">,</span>\\n    <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token literal-property property\\">title</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">'所在省市'</span><span class=\\"token punctuation\\">,</span>\\n        <span class=\\"token literal-property property\\">dataIndex</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">'city'</span><span class=\\"token punctuation\\">,</span>\\n        <span class=\\"token literal-property property\\">formType</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">'city-linkage'</span><span class=\\"token punctuation\\">,</span>  <span class=\\"token comment\\">// 使用省市联动选择器</span>\\n        <span class=\\"token literal-property property\\">type</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">'cascader'</span><span class=\\"token punctuation\\">,</span>\\n    <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">,</span>\\n<span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">)</span>\\n</span></span><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>script</span><span class=\\"token punctuation\\">&gt;</span></span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>"}`);export{n as data};
