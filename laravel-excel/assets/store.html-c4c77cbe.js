const n=JSON.parse(`{"key":"v-48167421","path":"/exports/store.html","title":"Storing exports on disk","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"Default disk","slug":"default-disk","link":"#default-disk","children":[]},{"level":2,"title":"Custom disks","slug":"custom-disks","link":"#custom-disks","children":[]},{"level":2,"title":"Disk options","slug":"disk-options","link":"#disk-options","children":[]},{"level":2,"title":"Note about queuing","slug":"note-about-queuing","link":"#note-about-queuing","children":[]}],"git":{"createdTime":1704429178000,"updatedTime":1704429178000,"contributors":[{"name":"Moments","email":"554676262@qq.com","commits":1}]},"readingTime":{"minutes":0.62,"words":186},"filePathRelative":"exports/store.md","localizedDate":"January 5, 2024","excerpt":"<h1> Storing exports on disk</h1>\\n\\n<p>Exports can easily be stored on any <a href=\\"https://laravel.com/docs/master/filesystem\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">filesystem</a> that Laravel supports.</p>\\n<h2> Default disk</h2>\\n<div class=\\"language-php line-numbers-mode\\" data-ext=\\"php\\"><pre class=\\"language-php\\"><code><span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">function</span> <span class=\\"token function-definition function\\">storeExcel</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> \\n<span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token comment\\">// Store on default disk</span>\\n    <span class=\\"token class-name static-context\\">Excel</span><span class=\\"token operator\\">::</span><span class=\\"token function\\">store</span><span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">new</span> <span class=\\"token class-name\\">InvoicesExport</span><span class=\\"token punctuation\\">(</span><span class=\\"token number\\">2018</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string single-quoted-string\\">'invoices.xlsx'</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>"}`);export{n as data};