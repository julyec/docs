const n=JSON.parse(`{"key":"v-53bd0a16","path":"/guide/widgets-modal.html","title":"Modal windows (Modal)","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"Functionality","slug":"functionality","link":"#functionality","children":[{"level":3,"title":"TITLE (title)","slug":"title-title","link":"#title-title","children":[]},{"level":3,"title":"content (body)","slug":"content-body","link":"#content-body","children":[]},{"level":3,"title":"Bottom content (footer)","slug":"bottom-content-footer","link":"#bottom-content-footer","children":[]},{"level":3,"title":"size","slug":"size","link":"#size","children":[]},{"level":3,"title":"Buttons (button)","slug":"buttons-button","link":"#buttons-button","children":[]},{"level":3,"title":"Event listening","slug":"event-listening","link":"#event-listening","children":[]},{"level":3,"title":"Vertical centered (centered)","slug":"vertical-centered-centered","link":"#vertical-centered-centered","children":[]},{"level":3,"title":"Scrollable content (scrollable)","slug":"scrollable-content-scrollable","link":"#scrollable-content-scrollable","children":[]}]},{"level":2,"title":"Form pop-up","slug":"form-pop-up","link":"#form-pop-up","children":[]}],"git":{"createdTime":1701780913000,"updatedTime":1701780913000,"contributors":[{"name":"Moments","email":"554676262@qq.com","commits":1}]},"readingTime":{"minutes":1.12,"words":335},"filePathRelative":"guide/widgets-modal.md","localizedDate":"December 5, 2023","excerpt":"<h1> Modal windows (Modal)</h1>\\n<p>Basic use</p>\\n<div class=\\"language-php line-numbers-mode\\" data-ext=\\"php\\"><pre class=\\"language-php\\"><code><span class=\\"token keyword\\">use</span> <span class=\\"token package\\">Dcat<span class=\\"token punctuation\\">\\\\</span>Admin<span class=\\"token punctuation\\">\\\\</span>Widgets<span class=\\"token punctuation\\">\\\\</span>Modal</span><span class=\\"token punctuation\\">;</span>\\n\\n<span class=\\"token variable\\">$modal</span> <span class=\\"token operator\\">=</span> <span class=\\"token class-name static-context\\">Modal</span><span class=\\"token operator\\">::</span><span class=\\"token function\\">make</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span>\\n\\t<span class=\\"token operator\\">-&gt;</span><span class=\\"token function\\">lg</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span>\\n\\t<span class=\\"token operator\\">-&gt;</span><span class=\\"token function\\">title</span><span class=\\"token punctuation\\">(</span><span class=\\"token string single-quoted-string\\">'TITLE'</span><span class=\\"token punctuation\\">)</span>\\n\\t<span class=\\"token operator\\">-&gt;</span><span class=\\"token function\\">body</span><span class=\\"token punctuation\\">(</span><span class=\\"token function\\">view</span><span class=\\"token punctuation\\">(</span><span class=\\"token operator\\">...</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span>\\n\\t<span class=\\"token operator\\">-&gt;</span><span class=\\"token function\\">button</span><span class=\\"token punctuation\\">(</span><span class=\\"token string single-quoted-string\\">'&lt;button class=\\"btn btn-primary\\"&gt;Click to open a pop-up window&lt;/button&gt;'</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\t\\n<span class=\\"token keyword\\">return</span> <span class=\\"token function\\">view</span><span class=\\"token punctuation\\">(</span><span class=\\"token operator\\">...</span><span class=\\"token punctuation\\">,</span> <span class=\\"token punctuation\\">[</span><span class=\\"token string single-quoted-string\\">'modal'</span> <span class=\\"token operator\\">=&gt;</span> <span class=\\"token variable\\">$modal</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\t\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>"}`);export{n as data};