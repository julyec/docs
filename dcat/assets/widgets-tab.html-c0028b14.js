const n=JSON.parse(`{"key":"v-8570fea4","path":"/guide/widgets-tab.html","title":"Tabs","lang":"en-US","frontmatter":{},"headers":[{"level":3,"title":"Basic Usage","slug":"basic-usage","link":"#basic-usage","children":[]},{"level":3,"title":"Switching display mode","slug":"switching-display-mode","link":"#switching-display-mode","children":[]},{"level":3,"title":"vertically (vertical)","slug":"vertically-vertical","link":"#vertically-vertical","children":[]}],"git":{"createdTime":1701780913000,"updatedTime":1701780913000,"contributors":[{"name":"Moments","email":"554676262@qq.com","commits":1}]},"readingTime":{"minutes":0.44,"words":132},"filePathRelative":"guide/widgets-tab.md","localizedDate":"December 5, 2023","excerpt":"<h1> Tabs</h1>\\n<p>The <code>tab</code> tab can be quickly constructed using the <code>Dcat\\\\Admin\\\\Widgets\\\\Tab</code> method.</p>\\n<h3> Basic Usage</h3>\\n<div class=\\"language-php line-numbers-mode\\" data-ext=\\"php\\"><pre class=\\"language-php\\"><code><span class=\\"token php language-php\\"><span class=\\"token delimiter important\\">&lt;?php</span>\\n\\n<span class=\\"token keyword\\">use</span> <span class=\\"token package\\">Dcat<span class=\\"token punctuation\\">\\\\</span>Admin<span class=\\"token punctuation\\">\\\\</span>Widgets<span class=\\"token punctuation\\">\\\\</span>Tab</span><span class=\\"token punctuation\\">;</span>\\n\\n<span class=\\"token variable\\">$tab</span> <span class=\\"token operator\\">=</span> <span class=\\"token class-name static-context\\">Tab</span><span class=\\"token operator\\">::</span><span class=\\"token function\\">make</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\n<span class=\\"token comment\\">// The first parameter is the tab TITLE, the second parameter is the content, and the third parameter is whether or not the tab is selected.</span>\\n<span class=\\"token variable\\">$tab</span><span class=\\"token operator\\">-&gt;</span><span class=\\"token function\\">add</span><span class=\\"token punctuation\\">(</span><span class=\\"token string single-quoted-string\\">'Tab 1'</span><span class=\\"token punctuation\\">,</span> <span class=\\"token function\\">view</span><span class=\\"token punctuation\\">(</span><span class=\\"token string single-quoted-string\\">'...'</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">,</span> <span class=\\"token constant boolean\\">true</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token variable\\">$tab</span><span class=\\"token operator\\">-&gt;</span><span class=\\"token function\\">add</span><span class=\\"token punctuation\\">(</span><span class=\\"token string single-quoted-string\\">'Option 2'</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string single-quoted-string\\">'html'</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token comment\\">// Adding tab links</span>\\n<span class=\\"token variable\\">$tab</span><span class=\\"token operator\\">-&gt;</span><span class=\\"token function\\">addLink</span><span class=\\"token punctuation\\">(</span><span class=\\"token string single-quoted-string\\">'skip link'</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string single-quoted-string\\">'http://xxx'</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\n<span class=\\"token keyword\\">return</span> <span class=\\"token variable\\">$content</span><span class=\\"token operator\\">-&gt;</span><span class=\\"token function\\">body</span><span class=\\"token punctuation\\">(</span><span class=\\"token variable\\">$tab</span><span class=\\"token operator\\">-&gt;</span><span class=\\"token function\\">withCard</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n</span></code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>"}`);export{n as data};