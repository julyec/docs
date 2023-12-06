const e=JSON.parse('{"key":"v-57016d8c","path":"/guide/other/version.html","title":"更新版本","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"更新最新的代码","slug":"更新最新的代码","link":"#更新最新的代码","children":[]},{"level":2,"title":"更新依赖","slug":"更新依赖","link":"#更新依赖","children":[{"level":3,"title":"更新后端","slug":"更新后端","link":"#更新后端","children":[]},{"level":3,"title":"更新前端","slug":"更新前端","link":"#更新前端","children":[]}]},{"level":2,"title":"升级数据库","slug":"升级数据库","link":"#升级数据库","children":[]},{"level":2,"title":"更新Redis缓存","slug":"更新redis缓存","link":"#更新redis缓存","children":[]}],"git":{"createdTime":1701780913000,"updatedTime":1701780913000,"contributors":[{"name":"Moments","email":"554676262@qq.com","commits":1}]},"readingTime":{"minutes":0.73,"words":219},"filePathRelative":"guide/other/version.md","localizedDate":"December 5, 2023","excerpt":"<h1> 更新版本</h1>\\n<div class=\\"hint-container tip\\">\\n<p class=\\"hint-container-title\\">Tips</p>\\n<p>MineAdmin是一个持续迭代版本、新增功能和修复BUG的系统，您可以参考此文档保持您的MineAdmin为最新版本。</p>\\n</div>\\n<h2> 更新最新的代码</h2>\\n<div class=\\"language-bash line-numbers-mode\\" data-ext=\\"sh\\"><pre class=\\"language-bash\\"><code><span class=\\"token comment\\"># 保存工作现场（将目前还不想提交的但是已经修改的代码保存至堆栈中）</span>\\n<span class=\\"token function\\">git</span> stash\\n\\n<span class=\\"token comment\\"># 从远程仓库获取最新代码并自动合并到本地</span>\\n<span class=\\"token function\\">git</span> pull\\n\\n<span class=\\"token comment\\"># pull 命令如果有冲突，先处理冲突（您新增的文件不会发生冲突，而框架文件我们更新同时您也更新了该文件才可能冲突）</span>\\n\\n<span class=\\"token comment\\"># 恢复工作现场</span>\\n<span class=\\"token function\\">git</span> stash pop\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>"}');export{e as data};
