const e=JSON.parse('{"key":"v-0754cde1","path":"/zh/advanced/architecture.html","title":"架构","lang":"zh-CN","frontmatter":{"icon":"fa6-solid:folder-tree"},"headers":[{"level":2,"title":"概览","slug":"概览","link":"#概览","children":[]},{"level":2,"title":"核心流程与 Hooks","slug":"核心流程与-hooks","link":"#核心流程与-hooks","children":[]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":1.42,"words":427},"filePathRelative":"zh/advanced/architecture.md","excerpt":"<h1> 架构</h1>\\n<h2> 概览</h2>\\n<figure><img src=\\"/images/guide/vuepress-architecture-overview.png\\" alt=\\"vuepress-architecture-overview\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption>vuepress-architecture-overview</figcaption></figure>\\n<p>上图展示了 VuePress 的简要架构：</p>\\n<ul>\\n<li>Node App 会生成临时文件，包括页面、路由等。</li>\\n<li>Bundler 会将 Client App 和临时文件一起进行打包，就像处理一个普通的 Vue SPA 一样。</li>\\n</ul>"}');export{e as data};