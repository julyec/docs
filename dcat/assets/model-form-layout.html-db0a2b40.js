const n=JSON.parse(`{"key":"v-4ed7c025","path":"/zh/guide/model-form-layout.html","title":"表单布局","lang":"zh-CN","frontmatter":{},"headers":[{"level":3,"title":"多列布局 (column)","slug":"多列布局-column","link":"#多列布局-column","children":[]},{"level":3,"title":"多行布局 (row)","slug":"多行布局-row","link":"#多行布局-row","children":[]},{"level":3,"title":"选项卡表单 (tab)","slug":"选项卡表单-tab","link":"#选项卡表单-tab","children":[{"level":4,"title":"Fieldset布局","slug":"fieldset布局","link":"#fieldset布局","children":[]}]},{"level":3,"title":"分块布局 (block)","slug":"分块布局-block","link":"#分块布局-block","children":[]}],"git":{"createdTime":1701780913000,"updatedTime":1701780913000,"contributors":[{"name":"Moments","email":"554676262@qq.com","commits":1}]},"readingTime":{"minutes":2.4,"words":720},"filePathRelative":"zh/guide/model-form-layout.md","localizedDate":"2023年12月5日","excerpt":"<h1> 表单布局</h1>\\n<h3> 多列布局 (column)</h3>\\n<p></p>\\n<p>类似于上图的左右两列布局方式，可以参考下面的代码来实现</p>\\n<div class=\\"language-php line-numbers-mode\\" data-ext=\\"php\\"><pre class=\\"language-php\\"><code><span class=\\"token comment\\">// 第一列占据1/2的页面宽度</span>\\n<span class=\\"token variable\\">$form</span><span class=\\"token operator\\">-&gt;</span><span class=\\"token function\\">column</span><span class=\\"token punctuation\\">(</span><span class=\\"token number\\">6</span><span class=\\"token punctuation\\">,</span> <span class=\\"token keyword\\">function</span> <span class=\\"token punctuation\\">(</span><span class=\\"token class-name type-declaration\\">Form</span> <span class=\\"token variable\\">$form</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token variable\\">$form</span><span class=\\"token operator\\">-&gt;</span><span class=\\"token function\\">text</span><span class=\\"token punctuation\\">(</span><span class=\\"token string single-quoted-string\\">'name'</span><span class=\\"token punctuation\\">)</span><span class=\\"token operator\\">-&gt;</span><span class=\\"token function\\">required</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token variable\\">$form</span><span class=\\"token operator\\">-&gt;</span><span class=\\"token function\\">date</span><span class=\\"token punctuation\\">(</span><span class=\\"token string single-quoted-string\\">'born'</span><span class=\\"token punctuation\\">)</span><span class=\\"token operator\\">-&gt;</span><span class=\\"token function\\">required</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token variable\\">$form</span><span class=\\"token operator\\">-&gt;</span><span class=\\"token function\\">select</span><span class=\\"token punctuation\\">(</span><span class=\\"token string single-quoted-string\\">'education'</span><span class=\\"token punctuation\\">)</span><span class=\\"token operator\\">-&gt;</span><span class=\\"token function\\">options</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">[</span><span class=\\"token operator\\">...</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">)</span><span class=\\"token operator\\">-&gt;</span><span class=\\"token function\\">required</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token variable\\">$form</span><span class=\\"token operator\\">-&gt;</span><span class=\\"token function\\">text</span><span class=\\"token punctuation\\">(</span><span class=\\"token string single-quoted-string\\">'nation'</span><span class=\\"token punctuation\\">)</span><span class=\\"token operator\\">-&gt;</span><span class=\\"token function\\">required</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token variable\\">$form</span><span class=\\"token operator\\">-&gt;</span><span class=\\"token function\\">text</span><span class=\\"token punctuation\\">(</span><span class=\\"token string single-quoted-string\\">'native'</span><span class=\\"token punctuation\\">)</span><span class=\\"token operator\\">-&gt;</span><span class=\\"token function\\">required</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token variable\\">$form</span><span class=\\"token operator\\">-&gt;</span><span class=\\"token function\\">text</span><span class=\\"token punctuation\\">(</span><span class=\\"token string single-quoted-string\\">'job'</span><span class=\\"token punctuation\\">)</span><span class=\\"token operator\\">-&gt;</span><span class=\\"token function\\">required</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token variable\\">$form</span><span class=\\"token operator\\">-&gt;</span><span class=\\"token function\\">text</span><span class=\\"token punctuation\\">(</span><span class=\\"token string single-quoted-string\\">'code'</span><span class=\\"token punctuation\\">)</span><span class=\\"token operator\\">-&gt;</span><span class=\\"token function\\">required</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token variable\\">$form</span><span class=\\"token operator\\">-&gt;</span><span class=\\"token function\\">text</span><span class=\\"token punctuation\\">(</span><span class=\\"token string single-quoted-string\\">'phone'</span><span class=\\"token punctuation\\">)</span><span class=\\"token operator\\">-&gt;</span><span class=\\"token function\\">required</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token variable\\">$form</span><span class=\\"token operator\\">-&gt;</span><span class=\\"token function\\">text</span><span class=\\"token punctuation\\">(</span><span class=\\"token string single-quoted-string\\">'work'</span><span class=\\"token punctuation\\">)</span><span class=\\"token operator\\">-&gt;</span><span class=\\"token function\\">required</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token variable\\">$form</span><span class=\\"token operator\\">-&gt;</span><span class=\\"token function\\">text</span><span class=\\"token punctuation\\">(</span><span class=\\"token string single-quoted-string\\">'census'</span><span class=\\"token punctuation\\">)</span><span class=\\"token operator\\">-&gt;</span><span class=\\"token function\\">required</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\n<span class=\\"token comment\\">// 第二列占据1/2的页面宽度</span>\\n<span class=\\"token variable\\">$form</span><span class=\\"token operator\\">-&gt;</span><span class=\\"token function\\">column</span><span class=\\"token punctuation\\">(</span><span class=\\"token number\\">6</span><span class=\\"token punctuation\\">,</span> <span class=\\"token keyword\\">function</span> <span class=\\"token punctuation\\">(</span><span class=\\"token class-name type-declaration\\">Form</span> <span class=\\"token variable\\">$form</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token variable\\">$form</span><span class=\\"token operator\\">-&gt;</span><span class=\\"token function\\">image</span><span class=\\"token punctuation\\">(</span><span class=\\"token string single-quoted-string\\">'avatar'</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token variable\\">$form</span><span class=\\"token operator\\">-&gt;</span><span class=\\"token function\\">decimal</span><span class=\\"token punctuation\\">(</span><span class=\\"token string single-quoted-string\\">'wages'</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token variable\\">$form</span><span class=\\"token operator\\">-&gt;</span><span class=\\"token function\\">decimal</span><span class=\\"token punctuation\\">(</span><span class=\\"token string single-quoted-string\\">'fund'</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token variable\\">$form</span><span class=\\"token operator\\">-&gt;</span><span class=\\"token function\\">decimal</span><span class=\\"token punctuation\\">(</span><span class=\\"token string single-quoted-string\\">'pension'</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token variable\\">$form</span><span class=\\"token operator\\">-&gt;</span><span class=\\"token function\\">decimal</span><span class=\\"token punctuation\\">(</span><span class=\\"token string single-quoted-string\\">'fee'</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token variable\\">$form</span><span class=\\"token operator\\">-&gt;</span><span class=\\"token function\\">decimal</span><span class=\\"token punctuation\\">(</span><span class=\\"token string single-quoted-string\\">'business'</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token variable\\">$form</span><span class=\\"token operator\\">-&gt;</span><span class=\\"token function\\">decimal</span><span class=\\"token punctuation\\">(</span><span class=\\"token string single-quoted-string\\">'other'</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token variable\\">$form</span><span class=\\"token operator\\">-&gt;</span><span class=\\"token function\\">text</span><span class=\\"token punctuation\\">(</span><span class=\\"token string single-quoted-string\\">'area'</span><span class=\\"token punctuation\\">)</span><span class=\\"token operator\\">-&gt;</span><span class=\\"token function\\">default</span><span class=\\"token punctuation\\">(</span><span class=\\"token number\\">0</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token variable\\">$form</span><span class=\\"token operator\\">-&gt;</span><span class=\\"token function\\">textarea</span><span class=\\"token punctuation\\">(</span><span class=\\"token string single-quoted-string\\">'illness'</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token variable\\">$form</span><span class=\\"token operator\\">-&gt;</span><span class=\\"token function\\">textarea</span><span class=\\"token punctuation\\">(</span><span class=\\"token string single-quoted-string\\">'comment'</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\n<span class=\\"token comment\\">// 调整所有表单的宽度</span>\\n<span class=\\"token variable\\">$form</span><span class=\\"token operator\\">-&gt;</span><span class=\\"token function\\">width</span><span class=\\"token punctuation\\">(</span><span class=\\"token number\\">9</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">2</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>"}`);export{n as data};