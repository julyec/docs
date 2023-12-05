const l=JSON.parse('{"key":"v-35de4483","path":"/zh/guide/fortify.html","title":"Fortify 授权生成器","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"介绍","slug":"介绍","link":"#介绍","children":[{"level":3,"title":"Fortify 是什么？","slug":"fortify-是什么","link":"#fortify-是什么","children":[]},{"level":3,"title":"何时使用 Fortify？","slug":"何时使用-fortify","link":"#何时使用-fortify","children":[{"level":4,"title":"Laravel Fortify & Laravel Sanctum","slug":"laravel-fortify-laravel-sanctum","link":"#laravel-fortify-laravel-sanctum","children":[]}]}]},{"level":2,"title":"安装","slug":"安装","link":"#安装","children":[{"level":3,"title":"Fortify 服务提供商","slug":"fortify-服务提供商","link":"#fortify-服务提供商","children":[]},{"level":3,"title":"Fortify 包含的功能","slug":"fortify-包含的功能","link":"#fortify-包含的功能","children":[]},{"level":3,"title":"禁用视图","slug":"禁用视图","link":"#禁用视图","children":[{"level":4,"title":"禁用视图 & 重置密码","slug":"禁用视图-重置密码","link":"#禁用视图-重置密码","children":[]}]}]},{"level":2,"title":"身份认证","slug":"身份认证","link":"#身份认证","children":[{"level":3,"title":"自定义用户认证","slug":"自定义用户认证","link":"#自定义用户认证","children":[{"level":4,"title":"身份验证看守器","slug":"身份验证看守器","link":"#身份验证看守器","children":[]}]},{"level":3,"title":"自定义身份验证管道","slug":"自定义身份验证管道","link":"#自定义身份验证管道","children":[]},{"level":3,"title":"自定义跳转","slug":"自定义跳转","link":"#自定义跳转","children":[]}]},{"level":2,"title":"双因素认证","slug":"双因素认证","link":"#双因素认证","children":[{"level":3,"title":"启用双因素身份验证","slug":"启用双因素身份验证","link":"#启用双因素身份验证","children":[{"level":4,"title":"确认双因素认证","slug":"确认双因素认证","link":"#确认双因素认证","children":[]},{"level":4,"title":"显示恢复代码","slug":"显示恢复代码","link":"#显示恢复代码","children":[]}]},{"level":3,"title":"使用双因素身份验证进行身份验证","slug":"使用双因素身份验证进行身份验证","link":"#使用双因素身份验证进行身份验证","children":[]},{"level":3,"title":"禁用两因素身份验证","slug":"禁用两因素身份验证","link":"#禁用两因素身份验证","children":[]}]},{"level":2,"title":"注册","slug":"注册","link":"#注册","children":[{"level":3,"title":"定制注册","slug":"定制注册","link":"#定制注册","children":[]}]},{"level":2,"title":"重设密码","slug":"重设密码","link":"#重设密码","children":[{"level":3,"title":"请求密码重置链接","slug":"请求密码重置链接","link":"#请求密码重置链接","children":[{"level":4,"title":"处理密码重置链接请求响应","slug":"处理密码重置链接请求响应","link":"#处理密码重置链接请求响应","children":[]}]},{"level":3,"title":"重设密码","slug":"重设密码-1","link":"#重设密码-1","children":[{"level":4,"title":"处理密码重置响应","slug":"处理密码重置响应","link":"#处理密码重置响应","children":[]}]},{"level":3,"title":"自定义密码重置","slug":"自定义密码重置","link":"#自定义密码重置","children":[]}]},{"level":2,"title":"电子邮件验证","slug":"电子邮件验证","link":"#电子邮件验证","children":[{"level":4,"title":"重新发送电子邮件验证链接","slug":"重新发送电子邮件验证链接","link":"#重新发送电子邮件验证链接","children":[]},{"level":3,"title":"保护路由","slug":"保护路由","link":"#保护路由","children":[]}]},{"level":2,"title":"确认密码","slug":"确认密码","link":"#确认密码","children":[]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":23.36,"words":7007},"filePathRelative":"zh/guide/fortify.md","excerpt":"<h1> Fortify 授权生成器</h1>\\n<ul>\\n<li><a href=\\"#introduction\\">介绍</a>\\n<ul>\\n<li><a href=\\"#what-is-fortify\\">Fortify 是什么？</a></li>\\n<li><a href=\\"#when-should-i-use-fortify\\">何时使用 Fortify?</a></li>\\n</ul>\\n</li>\\n<li><a href=\\"#installation\\">安装</a>\\n<ul>\\n<li><a href=\\"#the-fortify-service-provider\\">Fortify 服务提供者</a></li>\\n<li><a href=\\"#fortify-features\\">Fortify 功能</a></li>\\n<li><a href=\\"#disabling-views\\">禁用视图</a></li>\\n</ul>\\n</li>\\n<li><a href=\\"#authentication\\">认证</a>\\n<ul>\\n<li><a href=\\"#customizing-user-authentication\\">自定义用户身份验证</a></li>\\n<li><a href=\\"#customizing-the-authentication-pipeline\\">自定义身份验证渠道</a></li>\\n<li><a href=\\"#customizing-authentication-redirects\\">自定义重定向</a></li>\\n</ul>\\n</li>\\n<li><a href=\\"#two-factor-authentication\\">双重认证</a>\\n<ul>\\n<li><a href=\\"#enabling-two-factor-authentication\\">启用双重认证</a></li>\\n<li><a href=\\"#authenticating-with-two-factor-authentication\\">使用双重认证</a></li>\\n<li><a href=\\"#disabling-two-factor-authentication\\">禁用双重认证</a></li>\\n</ul>\\n</li>\\n<li><a href=\\"#registration\\">注册</a>\\n<ul>\\n<li><a href=\\"#customizing-registration\\">自定义注册</a></li>\\n</ul>\\n</li>\\n<li><a href=\\"#password-reset\\">重置密码</a>\\n<ul>\\n<li><a href=\\"#requesting-a-password-reset-link\\">请求密码重置链接</a></li>\\n<li><a href=\\"#resetting-the-password\\">重置密码</a></li>\\n<li><a href=\\"#customizing-password-resets\\">自定义重置密码</a></li>\\n</ul>\\n</li>\\n<li><a href=\\"#email-verification\\">邮件认证</a>\\n<ul>\\n<li><a href=\\"#protecting-routes\\">保护路由</a></li>\\n</ul>\\n</li>\\n<li><a href=\\"#password-confirmation\\">确认密码</a></li>\\n</ul>"}');export{l as data};
