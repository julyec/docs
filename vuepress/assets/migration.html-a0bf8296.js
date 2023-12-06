const e=JSON.parse('{"key":"v-81b14334","path":"/zh/guide/migration.html","title":"从 v1 迁移","lang":"zh-CN","frontmatter":{"icon":"fa6-solid:code-compare"},"headers":[{"level":2,"title":"给用户","slug":"给用户","link":"#给用户","children":[{"level":3,"title":"用户配置变更","slug":"用户配置变更","link":"#用户配置变更","children":[{"level":4,"title":"theme","slug":"theme","link":"#theme","children":[]},{"level":4,"title":"themeConfig","slug":"themeconfig","link":"#themeconfig","children":[]},{"level":4,"title":"plugins","slug":"plugins","link":"#plugins","children":[]},{"level":4,"title":"shouldPrefetch","slug":"shouldprefetch","link":"#shouldprefetch","children":[]},{"level":4,"title":"extraWatchFiles","slug":"extrawatchfiles","link":"#extrawatchfiles","children":[]},{"level":4,"title":"patterns","slug":"patterns","link":"#patterns","children":[]},{"level":4,"title":"markdown.lineNumbers","slug":"markdown-linenumbers","link":"#markdown-linenumbers","children":[]},{"level":4,"title":"markdown.pageSuffix","slug":"markdown-pagesuffix","link":"#markdown-pagesuffix","children":[]},{"level":4,"title":"markdown.externalLinks","slug":"markdown-externallinks","link":"#markdown-externallinks","children":[]},{"level":4,"title":"markdown.toc","slug":"markdown-toc","link":"#markdown-toc","children":[]},{"level":4,"title":"markdown.plugins","slug":"markdown-plugins","link":"#markdown-plugins","children":[]},{"level":4,"title":"markdown.extendMarkdown","slug":"markdown-extendmarkdown","link":"#markdown-extendmarkdown","children":[]},{"level":4,"title":"markdown.extractHeaders","slug":"markdown-extractheaders","link":"#markdown-extractheaders","children":[]},{"level":4,"title":"Webpack 相关配置","slug":"webpack-相关配置","link":"#webpack-相关配置","children":[]}]},{"level":3,"title":"Frontmatter 变更","slug":"frontmatter-变更","link":"#frontmatter-变更","children":[{"level":4,"title":"meta","slug":"meta","link":"#meta","children":[]}]},{"level":3,"title":"永久链接 Patterns 变更","slug":"永久链接-patterns-变更","link":"#永久链接-patterns-变更","children":[]},{"level":3,"title":"调色板系统变更","slug":"调色板系统变更","link":"#调色板系统变更","children":[]},{"level":3,"title":"约定文件变更","slug":"约定文件变更","link":"#约定文件变更","children":[{"level":4,"title":".vuepress/enhanceApp.js","slug":"vuepress-enhanceapp-js","link":"#vuepress-enhanceapp-js","children":[]},{"level":4,"title":".vuepress/components/","slug":"vuepress-components","link":"#vuepress-components","children":[]},{"level":4,"title":".vuepress/theme/","slug":"vuepress-theme","link":"#vuepress-theme","children":[]}]},{"level":3,"title":"Markdown 插槽变更","slug":"markdown-插槽变更","link":"#markdown-插槽变更","children":[]},{"level":3,"title":"CLI 变更","slug":"cli-变更","link":"#cli-变更","children":[{"level":4,"title":"eject 命令","slug":"eject-命令","link":"#eject-命令","children":[]},{"level":4,"title":"cache 选项","slug":"cache-选项","link":"#cache-选项","children":[]}]},{"level":3,"title":"默认主题变更","slug":"默认主题变更","link":"#默认主题变更","children":[{"level":4,"title":"内置组件","slug":"内置组件","link":"#内置组件","children":[]},{"level":4,"title":"调色板系统","slug":"调色板系统","link":"#调色板系统","children":[]},{"level":4,"title":"主题配置","slug":"主题配置","link":"#主题配置","children":[]}]},{"level":3,"title":"官方插件变更","slug":"官方插件变更","link":"#官方插件变更","children":[]},{"level":3,"title":"社区主题和插件","slug":"社区主题和插件","link":"#社区主题和插件","children":[]}]},{"level":2,"title":"给插件作者","slug":"给插件作者","link":"#给插件作者","children":[{"level":3,"title":"插件 API 变更","slug":"插件-api-变更","link":"#插件-api-变更","children":[]}]},{"level":2,"title":"给主题作者","slug":"给主题作者","link":"#给主题作者","children":[{"level":3,"title":"主题 API 变更","slug":"主题-api-变更","link":"#主题-api-变更","children":[{"level":4,"title":"layouts","slug":"layouts","link":"#layouts","children":[]},{"level":4,"title":"extend","slug":"extend","link":"#extend","children":[]}]}]}],"git":{"createdTime":1701780913000,"updatedTime":1701780913000,"contributors":[{"name":"Moments","email":"554676262@qq.com","commits":1}]},"readingTime":{"minutes":7.69,"words":2307},"filePathRelative":"zh/guide/migration.md","localizedDate":"2023年12月5日","excerpt":"<h1> 从 v1 迁移</h1>\\n<div class=\\"hint-container warning\\">\\n<p class=\\"hint-container-title\\">注意</p>\\n<p>VuePress v1 的插件和主题与 VuePress v2 不兼容。你需要将它们升级到与 v2 对应的版本。</p>\\n</div>\\n<p>VuePress v2 的一些主要改动和优化：</p>\\n<ul>\\n<li>VuePress v2 现在使用 Vue 3 ，因此你要保证你的组件和其他客户端文件是适用于 Vue 3 的。</li>\\n<li>VuePress v2 是使用 TypeScript 开发的，因此它现在提供了更好的类型支持。我们强烈推荐你使用 TypeScript 来开发插件和主题。 VuePress 配置文件也同样支持 TypeScript ，你可以直接使用 <code>.vuepress/config.ts</code> 。</li>\\n<li>VuePress v2 支持使用 Webpack 和 Vite 作为打包工具。现在默认的打包工具是 Vite ，但你仍然可以选择使用 Webpack 。你甚至可以在开发模式使用 Vite 来获取更好的开发体验，而在构建模式使用 Webpack 来获取更好的浏览器兼容性。</li>\\n<li>VuePress v2 现在是纯 ESM 包， CommonJS 格式的配置文件不再被支持。</li>\\n</ul>"}');export{e as data};
