const e=JSON.parse('{"key":"v-489789ea","path":"/guide/other/","title":"注意事项","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"不能通过全局变量获取属性参数","slug":"不能通过全局变量获取属性参数","link":"#不能通过全局变量获取属性参数","children":[]},{"level":2,"title":"通过容器获取的类都是单例","slug":"通过容器获取的类都是单例","link":"#通过容器获取的类都是单例","children":[]},{"level":2,"title":"代码不生效","slug":"代码不生效","link":"#代码不生效","children":[]},{"level":2,"title":"存在兼容性问题的扩展","slug":"存在兼容性问题的扩展","link":"#存在兼容性问题的扩展","children":[]},{"level":2,"title":"Hyperf 常见问题","slug":"hyperf-常见问题","link":"#hyperf-常见问题","children":[]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":1.01,"words":303},"filePathRelative":"guide/other/README.md","excerpt":"<h1> 注意事项</h1>\\n<h2> 不能通过全局变量获取属性参数</h2>\\n<p>在 <code>PHP-FPM</code> 下可以通过全局变量获取到请求的参数，服务器的参数等，在 Hyperf 和 Swoole 内，都无法通过 <code>$_GET/$_POST/$_REQUEST/$_SESSION/$_COOKIE/$_SERVER</code> 等 <code>$_</code> 开头的变量获取到任何属性参数。</p>\\n<h2> 通过容器获取的类都是单例</h2>\\n<p>通过依赖注入容器获取的都是进程内持久化的，是多个协程共享的，所以不能包含任何的请求唯一的数据或协程唯一的数据，这类型的数据都通过协程上下文去处理，具体请仔细阅读hyperf官方的 <a href=\\"https://hyperf.wiki/2.2/#/zh-cn/di\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">依赖注入</a> 和 <a href=\\"https://hyperf.wiki/2.2/#/zh-cn/coroutine\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">协程</a> 章节。</p>"}');export{e as data};
