const l=JSON.parse('{"key":"v-1cdd9cb4","path":"/zh/guide/authentication.html","title":"用户认证","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"简介","slug":"简介","link":"#简介","children":[{"level":3,"title":"入门套件","slug":"入门套件","link":"#入门套件","children":[]},{"level":3,"title":"数据库注意事项","slug":"数据库注意事项","link":"#数据库注意事项","children":[]},{"level":3,"title":"生态系统概述","slug":"生态系统概述","link":"#生态系统概述","children":[{"level":4,"title":"Laravel 内置的浏览器认证服务","slug":"laravel-内置的浏览器认证服务","link":"#laravel-内置的浏览器认证服务","children":[]},{"level":4,"title":"Laravel 的 API 认证服务","slug":"laravel-的-api-认证服务","link":"#laravel-的-api-认证服务","children":[]},{"level":4,"title":"汇总 & 选择你的解决方案","slug":"汇总-选择你的解决方案","link":"#汇总-选择你的解决方案","children":[]}]}]},{"level":2,"title":"身份验证快速入门","slug":"身份验证快速入门","link":"#身份验证快速入门","children":[{"level":3,"title":"安装入门套件","slug":"安装入门套件","link":"#安装入门套件","children":[]},{"level":3,"title":"获取已认证的用户信息","slug":"获取已认证的用户信息","link":"#获取已认证的用户信息","children":[{"level":4,"title":"确定当前用户是否已通过身份验证","slug":"确定当前用户是否已通过身份验证","link":"#确定当前用户是否已通过身份验证","children":[]}]},{"level":3,"title":"路由保护","slug":"路由保护","link":"#路由保护","children":[{"level":4,"title":"给未认证的用户设置重定向","slug":"给未认证的用户设置重定向","link":"#给未认证的用户设置重定向","children":[]},{"level":4,"title":"指定看守器","slug":"指定看守器","link":"#指定看守器","children":[]}]},{"level":3,"title":"登录限流","slug":"登录限流","link":"#登录限流","children":[]}]},{"level":2,"title":"手动验证用户","slug":"手动验证用户","link":"#手动验证用户","children":[{"level":4,"title":"指定附加条件","slug":"指定附加条件","link":"#指定附加条件","children":[]},{"level":4,"title":"访问特定的看守器实例","slug":"访问特定的看守器实例","link":"#访问特定的看守器实例","children":[]},{"level":3,"title":"记住用户","slug":"记住用户","link":"#记住用户","children":[]},{"level":3,"title":"其他身份验证方法","slug":"其他身份验证方法","link":"#其他身份验证方法","children":[{"level":4,"title":"验证用户实例","slug":"验证用户实例","link":"#验证用户实例","children":[]},{"level":4,"title":"通过 ID 对用户进行身份验证","slug":"通过-id-对用户进行身份验证","link":"#通过-id-对用户进行身份验证","children":[]},{"level":4,"title":"只验证一次","slug":"只验证一次","link":"#只验证一次","children":[]}]}]},{"level":2,"title":"HTTP Basic 用户认证","slug":"http-basic-用户认证","link":"#http-basic-用户认证","children":[{"level":4,"title":"注意 FastCGI","slug":"注意-fastcgi","link":"#注意-fastcgi","children":[]},{"level":3,"title":"无状态 HTTP Basic 认证","slug":"无状态-http-basic-认证","link":"#无状态-http-basic-认证","children":[]}]},{"level":2,"title":"退出登录","slug":"退出登录","link":"#退出登录","children":[{"level":3,"title":"使其他设备上的 session 失效","slug":"使其他设备上的-session-失效","link":"#使其他设备上的-session-失效","children":[]}]},{"level":2,"title":"密码确认","slug":"密码确认","link":"#密码确认","children":[{"level":3,"title":"配置","slug":"配置","link":"#配置","children":[]},{"level":3,"title":"路由","slug":"路由","link":"#路由","children":[{"level":4,"title":"密码确认表单","slug":"密码确认表单","link":"#密码确认表单","children":[]},{"level":4,"title":"确认密码","slug":"确认密码","link":"#确认密码","children":[]}]},{"level":3,"title":"保护路由","slug":"保护路由","link":"#保护路由","children":[]}]},{"level":2,"title":"添加自定义的看守器","slug":"添加自定义的看守器","link":"#添加自定义的看守器","children":[{"level":3,"title":"闭包请求看守器","slug":"闭包请求看守器","link":"#闭包请求看守器","children":[]}]},{"level":2,"title":"添加自定义的用户提供器","slug":"添加自定义的用户提供器","link":"#添加自定义的用户提供器","children":[{"level":3,"title":"用户提供器契约","slug":"用户提供器契约","link":"#用户提供器契约","children":[]},{"level":3,"title":"用户认证契约","slug":"用户认证契约","link":"#用户认证契约","children":[]}]},{"level":2,"title":"事件","slug":"事件","link":"#事件","children":[]}],"git":{"createdTime":1701780913000,"updatedTime":1701780913000,"contributors":[{"name":"Moments","email":"554676262@qq.com","commits":1}]},"readingTime":{"minutes":31.15,"words":9344},"filePathRelative":"zh/guide/authentication.md","localizedDate":"2023年12月5日","excerpt":"<h1> 用户认证</h1>\\n<ul>\\n<li><a href=\\"#introduction\\">介绍</a>\\n<ul>\\n<li><a href=\\"#starter-kits\\">入门套件</a></li>\\n<li><a href=\\"#introduction-database-considerations\\">数据库注意事项</a></li>\\n<li><a href=\\"#ecosystem-overview\\">生态系统概述</a></li>\\n</ul>\\n</li>\\n<li><a href=\\"#authentication-quickstart\\">快速开始用户认证</a>\\n<ul>\\n<li><a href=\\"#install-a-starter-kit\\">安装入门套件</a></li>\\n<li><a href=\\"#retrieving-the-authenticated-user\\">获取已认证的用户信息</a></li>\\n<li><a href=\\"#protecting-routes\\">路由保护</a></li>\\n<li><a href=\\"#login-throttling\\">登录限流</a></li>\\n</ul>\\n</li>\\n<li><a href=\\"#authenticating-users\\">手动认证用户</a>\\n<ul>\\n<li><a href=\\"#remembering-users\\">记住密码</a></li>\\n<li><a href=\\"#other-authentication-methods\\">其他认证方法</a></li>\\n</ul>\\n</li>\\n<li><a href=\\"#http-basic-authentication\\">HTTP Basic 认证</a>\\n<ul>\\n<li><a href=\\"#stateless-http-basic-authentication\\">无状态 HTTP Basic 认证</a></li>\\n</ul>\\n</li>\\n<li><a href=\\"#logging-out\\">注销</a>\\n<ul>\\n<li><a href=\\"#invalidating-sessions-on-other-devices\\">使其他设备上的会话无效</a></li>\\n</ul>\\n</li>\\n<li><a href=\\"#password-confirmation\\">密码确认</a>\\n<ul>\\n<li><a href=\\"#password-confirmation-configuration\\">配置</a></li>\\n<li><a href=\\"#password-confirmation-routing\\">路由</a></li>\\n<li><a href=\\"#password-confirmation-protecting-routes\\">路由保护</a></li>\\n</ul>\\n</li>\\n<li><a href=\\"#adding-custom-guards\\">添加自定义看守器</a>\\n<ul>\\n<li><a href=\\"#closure-request-guards\\">闭包请求看守器</a></li>\\n</ul>\\n</li>\\n<li><a href=\\"#adding-custom-user-providers\\">添加自定义用户提供器</a>\\n<ul>\\n<li><a href=\\"#the-user-provider-contract\\">用户提供器契约</a></li>\\n<li><a href=\\"#the-authenticatable-contract\\">用户认证契约</a></li>\\n</ul>\\n</li>\\n<li><a href=\\"./socialite\\">社会化用户认证</a></li>\\n<li><a href=\\"#events\\">事件</a></li>\\n</ul>"}');export{l as data};
