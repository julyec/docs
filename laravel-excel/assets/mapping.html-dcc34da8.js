const n=JSON.parse('{"key":"v-00698214","path":"/exports/mapping.html","title":"Mapping data","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"Mapping rows","slug":"mapping-rows","link":"#mapping-rows","children":[{"level":3,"title":"Multiple rows","slug":"multiple-rows","link":"#multiple-rows","children":[]}]},{"level":2,"title":"Adding a heading row","slug":"adding-a-heading-row","link":"#adding-a-heading-row","children":[]},{"level":2,"title":"Prepare rows","slug":"prepare-rows","link":"#prepare-rows","children":[]}],"git":{"createdTime":1704429178000,"updatedTime":1704429178000,"contributors":[{"name":"Moments","email":"554676262@qq.com","commits":1}]},"readingTime":{"minutes":1.08,"words":325},"filePathRelative":"exports/mapping.md","localizedDate":"January 5, 2024","excerpt":"<h1> Mapping data</h1>\\n\\n<h2> Mapping rows</h2>\\n<p>By adding <code>WithMapping</code> you map the data that needs to be added as row. This way you have control over the actual source for each column.\\nIn case of using the Eloquent query builder:</p>\\n<div class=\\"language-php line-numbers-mode\\" data-ext=\\"php\\"><pre class=\\"language-php\\"><code>\\n<span class=\\"token keyword\\">use</span> <span class=\\"token package\\">Maatwebsite<span class=\\"token punctuation\\">\\\\</span>Excel<span class=\\"token punctuation\\">\\\\</span>Concerns<span class=\\"token punctuation\\">\\\\</span>FromQuery</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token keyword\\">use</span> <span class=\\"token package\\">Maatwebsite<span class=\\"token punctuation\\">\\\\</span>Excel<span class=\\"token punctuation\\">\\\\</span>Concerns<span class=\\"token punctuation\\">\\\\</span>WithMapping</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token keyword\\">use</span> <span class=\\"token package\\">PhpOffice<span class=\\"token punctuation\\">\\\\</span>PhpSpreadsheet<span class=\\"token punctuation\\">\\\\</span>Shared<span class=\\"token punctuation\\">\\\\</span>Date</span><span class=\\"token punctuation\\">;</span>\\n\\n<span class=\\"token keyword\\">class</span> <span class=\\"token class-name-definition class-name\\">InvoicesExport</span> <span class=\\"token keyword\\">implements</span> <span class=\\"token class-name\\">FromQuery</span><span class=\\"token punctuation\\">,</span> WithMapping\\n<span class=\\"token punctuation\\">{</span>    \\n    <span class=\\"token doc-comment comment\\">/**\\n    * <span class=\\"token keyword\\">@param</span> <span class=\\"token class-name\\">Invoice</span> <span class=\\"token parameter\\">$invoice</span>\\n    */</span>\\n    <span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">function</span> <span class=\\"token function-definition function\\">map</span><span class=\\"token punctuation\\">(</span><span class=\\"token variable\\">$invoice</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">:</span> <span class=\\"token keyword return-type\\">array</span>\\n    <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token keyword\\">return</span> <span class=\\"token punctuation\\">[</span>\\n            <span class=\\"token variable\\">$invoice</span><span class=\\"token operator\\">-&gt;</span><span class=\\"token property\\">invoice_number</span><span class=\\"token punctuation\\">,</span>\\n            <span class=\\"token variable\\">$invoice</span><span class=\\"token operator\\">-&gt;</span><span class=\\"token property\\">user</span><span class=\\"token operator\\">-&gt;</span><span class=\\"token property\\">name</span><span class=\\"token punctuation\\">,</span>\\n            <span class=\\"token class-name static-context\\">Date</span><span class=\\"token operator\\">::</span><span class=\\"token function\\">dateTimeToExcel</span><span class=\\"token punctuation\\">(</span><span class=\\"token variable\\">$invoice</span><span class=\\"token operator\\">-&gt;</span><span class=\\"token property\\">created_at</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">,</span>\\n        <span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token punctuation\\">}</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>"}');export{n as data};