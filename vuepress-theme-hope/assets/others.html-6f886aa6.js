const e=JSON.parse(`{"key":"v-71a3ee91","path":"/zh/guide/markdown/others.html","title":"其他","lang":"zh-CN","frontmatter":{"title":"其他","icon":"ellipsis"},"headers":[{"level":2,"title":"链接检查","slug":"链接检查","link":"#链接检查","children":[]},{"level":2,"title":"GFM","slug":"gfm","link":"#gfm","children":[]},{"level":2,"title":"v-pre","slug":"v-pre","link":"#v-pre","children":[]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":1.41,"words":424},"filePathRelative":"zh/guide/markdown/others.md","excerpt":"<h2> 链接检查</h2>\\n<p><code>vuepress-plugin-md-enhance</code> 默认在开发模式下检查你的 Markdown 链接。</p>\\n<p>你可以通过插件选项中的 <code>checkLinks</code> 自定义此功能。 <code>checkLinks</code> 接收一个对象。</p>\\n<ul>\\n<li>你可以使用 <code>checkLinks.status</code> 自定义链接检查状态，你可以在 <code>'always'</code>、<code>'never'</code>、<code>'dev'</code> 和 <code>'build'</code> 中选择。</li>\\n<li>要忽略某些链接，你可以将 <code>checkLinks.ignore</code> 设置为字符串和 RegExp 的数组，或者填入一个接收 link 和 isDev 作为参数并返回一个布尔值以标识是否忽略此链接的函数。</li>\\n</ul>"}`);export{e as data};