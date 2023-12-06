const n=JSON.parse('{"key":"v-483ec913","path":"/guide/model-grid-actions.html","title":"Use and extension of rows","lang":"en-US","frontmatter":{},"headers":[{"level":3,"title":"Enable or disable the default action button","slug":"enable-or-disable-the-default-action-button","link":"#enable-or-disable-the-default-action-button","children":[]},{"level":3,"title":"Toggle line operation button display mode","slug":"toggle-line-operation-button-display-mode","link":"#toggle-line-operation-button-display-mode","children":[]},{"level":3,"title":"Get the row number (index)","slug":"get-the-row-number-index","link":"#get-the-row-number-index","children":[]},{"level":3,"title":"Get current row data","slug":"get-current-row-data","link":"#get-current-row-data","children":[]},{"level":3,"title":"Adding custom buttons","slug":"adding-custom-buttons","link":"#adding-custom-buttons","children":[]},{"level":3,"title":"Adding complex operation buttons","slug":"adding-complex-operation-buttons","link":"#adding-complex-operation-buttons","children":[]},{"level":3,"title":"Action buttons need to interact with the API","slug":"action-buttons-need-to-interact-with-the-api","link":"#action-buttons-need-to-interact-with-the-api","children":[]},{"level":2,"title":"Form pop-up","slug":"form-pop-up","link":"#form-pop-up","children":[]}],"git":{"createdTime":1701780913000,"updatedTime":1701780913000,"contributors":[{"name":"Moments","email":"554676262@qq.com","commits":1}]},"readingTime":{"minutes":2.92,"words":877},"filePathRelative":"guide/model-grid-actions.md","localizedDate":"December 5, 2023","excerpt":"<h1> Use and extension of rows</h1>\\n<h3> Enable or disable the default action button</h3>\\n<p>By default, <code>model-grid</code> has four line operations <code>edit</code>, <code>quick edit</code>, <code>delete</code> and <code>detail</code>, which can be turned off in the following way.</p>\\n<div class=\\"language-php line-numbers-mode\\" data-ext=\\"php\\"><pre class=\\"language-php\\"><code><span class=\\"token keyword\\">use</span> <span class=\\"token package\\">Dcat<span class=\\"token punctuation\\">\\\\</span>Admin<span class=\\"token punctuation\\">\\\\</span>Grid</span><span class=\\"token punctuation\\">;</span>\\n\\n <span class=\\"token variable\\">$grid</span><span class=\\"token operator\\">-&gt;</span><span class=\\"token function\\">actions</span><span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">function</span> <span class=\\"token punctuation\\">(</span><span class=\\"token class-name class-name-fully-qualified type-declaration\\">Grid<span class=\\"token punctuation\\">\\\\</span>Displayers<span class=\\"token punctuation\\">\\\\</span>Actions</span> <span class=\\"token variable\\">$actions</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token variable\\">$actions</span><span class=\\"token operator\\">-&gt;</span><span class=\\"token function\\">disableDelete</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token variable\\">$actions</span><span class=\\"token operator\\">-&gt;</span><span class=\\"token function\\">disableEdit</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token variable\\">$actions</span><span class=\\"token operator\\">-&gt;</span><span class=\\"token function\\">disableQuickEdit</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token variable\\">$actions</span><span class=\\"token operator\\">-&gt;</span><span class=\\"token function\\">disableView</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\n<span class=\\"token comment\\">// Buttons can also be enabled or disabled in the following ways</span>\\n<span class=\\"token variable\\">$grid</span><span class=\\"token operator\\">-&gt;</span><span class=\\"token function\\">disableDeleteButton</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token variable\\">$grid</span><span class=\\"token operator\\">-&gt;</span><span class=\\"token function\\">disableEditButton</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token variable\\">$grid</span><span class=\\"token operator\\">-&gt;</span><span class=\\"token function\\">disableQuickEditButton</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token variable\\">$grid</span><span class=\\"token operator\\">-&gt;</span><span class=\\"token function\\">disableViewButton</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>"}');export{n as data};