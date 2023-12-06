const e=JSON.parse('{"key":"v-7db8f527","path":"/zh/guide/model-grid-data.html","title":"表格数据源","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"数据来自模型","slug":"数据来自模型","link":"#数据来自模型","children":[{"level":3,"title":"直接使用模型","slug":"直接使用模型","link":"#直接使用模型","children":[]},{"level":3,"title":"修改来源数据","slug":"修改来源数据","link":"#修改来源数据","children":[]},{"level":3,"title":"关联数据","slug":"关联数据","link":"#关联数据","children":[]}]},{"level":2,"title":"数据来自外部API","slug":"数据来自外部api","link":"#数据来自外部api","children":[{"level":3,"title":"示例","slug":"示例","link":"#示例","children":[]},{"level":3,"title":"Grid\\\\Model 常用方法","slug":"grid-model-常用方法","link":"#grid-model-常用方法","children":[{"level":4,"title":"获取当前页数 (getCurrentPage)","slug":"获取当前页数-getcurrentpage","link":"#获取当前页数-getcurrentpage","children":[]},{"level":4,"title":"获取每页显示行数 (getPerPage)","slug":"获取每页显示行数-getperpage","link":"#获取每页显示行数-getperpage","children":[]},{"level":4,"title":"获取排序字段 (getSort)","slug":"获取排序字段-getsort","link":"#获取排序字段-getsort","children":[]},{"level":4,"title":"获取过滤器对象 (filter)","slug":"获取过滤器对象-filter","link":"#获取过滤器对象-filter","children":[]},{"level":4,"title":"获取快捷搜索表单值","slug":"获取快捷搜索表单值","link":"#获取快捷搜索表单值","children":[]}]}]},{"level":2,"title":"数据来自复杂SQL查询","slug":"数据来自复杂sql查询","link":"#数据来自复杂sql查询","children":[]}],"git":{"createdTime":1701780913000,"updatedTime":1701780913000,"contributors":[{"name":"Moments","email":"554676262@qq.com","commits":1}]},"readingTime":{"minutes":3.98,"words":1193},"filePathRelative":"zh/guide/model-grid-data.md","localizedDate":"2023年12月5日","excerpt":"<h1> 表格数据源</h1>\\n<p>数据仓库(<code>Repository</code>)是一个可以提供特定接口对数据进行读写操作的类，通过数据仓库的引入，可以让页面的构建不再关心数据读写功能的具体实现，开发者只需要实现特定的操作接口即可轻松切换数据源。关于数据仓库的详细用法请参考文档<a href=\\"/dcat/zh/guide/model-repository.html\\" target=\\"blank\\">数据仓库</a>。</p>\\n<blockquote>\\n<p>{tip} 表格的数据是通过 <code>Dcat\\\\Admin\\\\Contracts\\\\Repository::get</code> 接口获取的。</p>\\n</blockquote>"}');export{e as data};