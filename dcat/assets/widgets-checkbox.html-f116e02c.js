const s=JSON.parse(`{"key":"v-a5534a28","path":"/guide/widgets-checkbox.html","title":"Single/check box","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"radio boxes","slug":"radio-boxes","link":"#radio-boxes","children":[{"level":3,"title":"Basic use","slug":"basic-use","link":"#basic-use","children":[]},{"level":3,"title":"Display on the same line (inline)","slug":"display-on-the-same-line-inline","link":"#display-on-the-same-line-inline","children":[]},{"level":3,"title":"Setting the unchecked options (disable)","slug":"setting-the-unchecked-options-disable","link":"#setting-the-unchecked-options-disable","children":[]},{"level":3,"title":"set the style (style)","slug":"set-the-style-style","link":"#set-the-style-style","children":[]},{"level":3,"title":"Set the size","slug":"set-the-size","link":"#set-the-size","children":[]}]},{"level":2,"title":"Checkboxes","slug":"checkboxes","link":"#checkboxes","children":[{"level":3,"title":"Basic Usage","slug":"basic-usage","link":"#basic-usage","children":[]},{"level":3,"title":"全选","slug":"全选","link":"#全选","children":[]},{"level":3,"title":"More Usages","slug":"more-usages","link":"#more-usages","children":[]}]}],"git":{"createdTime":1701780913000,"updatedTime":1701780913000,"contributors":[{"name":"Moments","email":"554676262@qq.com","commits":1}]},"readingTime":{"minutes":1.22,"words":367},"filePathRelative":"guide/widgets-checkbox.md","localizedDate":"December 5, 2023","excerpt":"<h1> Single/check box</h1>\\n<h2> radio boxes</h2>\\n<p>The <code>Dcat\\\\Admin\\\\Widgets\\\\Radio</code> class makes it easy to quickly build a radio form.</p>\\n<h3> Basic use</h3>\\n<div class=\\"language-php line-numbers-mode\\" data-ext=\\"php\\"><pre class=\\"language-php\\"><code><span class=\\"token php language-php\\"><span class=\\"token delimiter important\\">&lt;?php</span>\\n<span class=\\"token keyword\\">use</span> <span class=\\"token package\\">Dcat<span class=\\"token punctuation\\">\\\\</span>Admin<span class=\\"token punctuation\\">\\\\</span>Widgets<span class=\\"token punctuation\\">\\\\</span>Radio</span><span class=\\"token punctuation\\">;</span>\\n\\n<span class=\\"token comment\\">// Form name Attribute</span>\\n<span class=\\"token variable\\">$name</span> <span class=\\"token operator\\">=</span> <span class=\\"token string single-quoted-string\\">'state'</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token comment\\">// options</span>\\n<span class=\\"token variable\\">$options</span> <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">[</span>\\n   <span class=\\"token number\\">1</span> <span class=\\"token operator\\">=&gt;</span> <span class=\\"token string single-quoted-string\\">'unprocessed'</span><span class=\\"token punctuation\\">,</span>\\n   <span class=\\"token number\\">2</span> <span class=\\"token operator\\">=&gt;</span> <span class=\\"token string single-quoted-string\\">'processed'</span><span class=\\"token punctuation\\">,</span>\\n   <span class=\\"token number\\">3</span> <span class=\\"token operator\\">=&gt;</span> <span class=\\"token string single-quoted-string\\">'rejected'</span><span class=\\"token punctuation\\">,</span>\\n<span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">;</span>\\n\\n<span class=\\"token variable\\">$radio</span> <span class=\\"token operator\\">=</span> <span class=\\"token class-name static-context\\">Radio</span><span class=\\"token operator\\">::</span><span class=\\"token function\\">make</span><span class=\\"token punctuation\\">(</span><span class=\\"token variable\\">$name</span><span class=\\"token punctuation\\">,</span> <span class=\\"token variable\\">$options</span><span class=\\"token punctuation\\">)</span><span class=\\"token operator\\">-&gt;</span><span class=\\"token function\\">check</span><span class=\\"token punctuation\\">(</span><span class=\\"token number\\">1</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span> <span class=\\"token comment\\">// Check the first option</span>\\n</span></code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>"}`);export{s as data};