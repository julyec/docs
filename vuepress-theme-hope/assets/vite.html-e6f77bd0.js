const e=JSON.parse('{"key":"v-744449d8","path":"/zh/faq/vite.html","title":"Vite 常见问题","lang":"zh-CN","frontmatter":{"title":"Vite 常见问题","icon":"circle-question","category":["FAQ"]},"headers":[{"level":2,"title":"Vite 冷启动速度慢","slug":"vite-冷启动速度慢","link":"#vite-冷启动速度慢","children":[]},{"level":2,"title":"@import 语法无效","slug":"import-语法无效","link":"#import-语法无效","children":[]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":3.49,"words":1048},"filePathRelative":"zh/faq/vite.md","excerpt":"<h2> Vite 冷启动速度慢</h2>\\n<p>这是预期的行为，而且请注意开发服务器冷启动慢<strong>不代表</strong>构建结果部署到线上性能不佳。</p>\\n<p><code>vuepress-theme-hope</code> 添加了更多功能，这意味着根据你使用的功能，与 <code>@vuepress/theme-default</code> 相比，我们代码行数约为 2 倍到 8 倍。因此，将主题和插件代码转译并发送到浏览器预计将从 <code>@vuepress/theme-default</code> 中的 <code>0.8s - 2s</code> 增加到 <code>3s - 10s</code> (范围取决于机器性能)。</p>"}');export{e as data};