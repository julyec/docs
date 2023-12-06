const n=JSON.parse(`{"key":"v-3b9e5d3f","path":"/guide/model-show-extend.html","title":"Detail field display expansion","lang":"en-US","frontmatter":{},"headers":[],"git":{"createdTime":1701780913000,"updatedTime":1701780913000,"contributors":[{"name":"Moments","email":"554676262@qq.com","commits":1}]},"readingTime":{"minutes":0.8,"words":239},"filePathRelative":"guide/model-show-extend.md","localizedDate":"December 5, 2023","excerpt":"<h1> Detail field display expansion</h1>\\n<p>This feature is used to extend the detail field display, in cases where the built-in display method is not sufficient.</p>\\n<p>First define the extension class:</p>\\n<div class=\\"language-php line-numbers-mode\\" data-ext=\\"php\\"><pre class=\\"language-php\\"><code><span class=\\"token php language-php\\"><span class=\\"token delimiter important\\">&lt;?php</span>\\n\\n<span class=\\"token keyword\\">namespace</span> <span class=\\"token package\\">App<span class=\\"token punctuation\\">\\\\</span>Admin<span class=\\"token punctuation\\">\\\\</span>Extensions<span class=\\"token punctuation\\">\\\\</span>Show</span><span class=\\"token punctuation\\">;</span>\\n\\n<span class=\\"token keyword\\">use</span> <span class=\\"token package\\">Dcat<span class=\\"token punctuation\\">\\\\</span>Admin<span class=\\"token punctuation\\">\\\\</span>Show<span class=\\"token punctuation\\">\\\\</span>AbstractField</span><span class=\\"token punctuation\\">;</span>\\n\\n<span class=\\"token keyword\\">class</span> <span class=\\"token class-name-definition class-name\\">UnSerialize</span> <span class=\\"token keyword\\">extends</span> <span class=\\"token class-name\\">AbstractField</span>\\n<span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token comment\\">// Setting this property to false will not escape the HTML code</span>\\n    <span class=\\"token keyword\\">public</span> <span class=\\"token variable\\">$escape</span> <span class=\\"token operator\\">=</span> <span class=\\"token constant boolean\\">false</span><span class=\\"token punctuation\\">;</span>\\n    \\n    <span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">function</span> <span class=\\"token function-definition function\\">render</span><span class=\\"token punctuation\\">(</span><span class=\\"token variable\\">$arg</span> <span class=\\"token operator\\">=</span> <span class=\\"token string single-quoted-string\\">''</span><span class=\\"token punctuation\\">)</span>\\n    <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token comment\\">// Returns any content that can be rendered</span>\\n        <span class=\\"token keyword\\">return</span> <span class=\\"token function\\">unserialize</span><span class=\\"token punctuation\\">(</span><span class=\\"token variable\\">$this</span><span class=\\"token operator\\">-&gt;</span><span class=\\"token property\\">value</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token punctuation\\">}</span>\\n<span class=\\"token punctuation\\">}</span>\\n</span></code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>"}`);export{n as data};
