const n=JSON.parse(`{"key":"v-1c5050c7","path":"/guide/widgets-alert.html","title":"Warning boxes","lang":"en-US","frontmatter":{},"headers":[{"level":3,"title":"Alert","slug":"alert","link":"#alert","children":[]},{"level":3,"title":"Callout","slug":"callout","link":"#callout","children":[]}],"git":{"createdTime":1701780913000,"updatedTime":1701780913000,"contributors":[{"name":"Moments","email":"554676262@qq.com","commits":1}]},"readingTime":{"minutes":0.22,"words":67},"filePathRelative":"guide/widgets-alert.md","localizedDate":"December 5, 2023","excerpt":"<h1> Warning boxes</h1>\\n<h3> Alert</h3>\\n<p>Basic Usage</p>\\n<div class=\\"language-php line-numbers-mode\\" data-ext=\\"php\\"><pre class=\\"language-php\\"><code><span class=\\"token php language-php\\"><span class=\\"token delimiter important\\">&lt;?php</span>\\n\\n<span class=\\"token keyword\\">use</span> <span class=\\"token package\\">Dcat<span class=\\"token punctuation\\">\\\\</span>Admin<span class=\\"token punctuation\\">\\\\</span>Widgets<span class=\\"token punctuation\\">\\\\</span>Alert</span><span class=\\"token punctuation\\">;</span>\\n\\n<span class=\\"token variable\\">$alert</span> <span class=\\"token operator\\">=</span> <span class=\\"token class-name static-context\\">Alert</span><span class=\\"token operator\\">::</span><span class=\\"token function\\">make</span><span class=\\"token punctuation\\">(</span><span class=\\"token string single-quoted-string\\">'content'</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string single-quoted-string\\">'TITLE'</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\n<span class=\\"token comment\\">// types</span>\\n<span class=\\"token variable\\">$alert</span><span class=\\"token operator\\">-&gt;</span><span class=\\"token function\\">success</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token variable\\">$alert</span><span class=\\"token operator\\">-&gt;</span><span class=\\"token function\\">danger</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token variable\\">$alert</span><span class=\\"token operator\\">-&gt;</span><span class=\\"token function\\">info</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token variable\\">$alert</span><span class=\\"token operator\\">-&gt;</span><span class=\\"token function\\">warning</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\n<span class=\\"token comment\\">// icon</span>\\n<span class=\\"token variable\\">$alert</span><span class=\\"token operator\\">-&gt;</span><span class=\\"token function\\">icon</span><span class=\\"token punctuation\\">(</span><span class=\\"token string single-quoted-string\\">'feather icon-x'</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\n<span class=\\"token comment\\">// Removable buttons</span>\\n<span class=\\"token variable\\">$alert</span><span class=\\"token operator\\">-&gt;</span><span class=\\"token function\\">removable</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n</span></code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>"}`);export{n as data};
