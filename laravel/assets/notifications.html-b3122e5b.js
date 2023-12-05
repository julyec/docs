const l=JSON.parse('{"key":"v-5771d80c","path":"/zh/guide/notifications.html","title":"消息通知","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"介绍","slug":"介绍","link":"#介绍","children":[]},{"level":2,"title":"创建通知","slug":"创建通知","link":"#创建通知","children":[]},{"level":2,"title":"发送通知","slug":"发送通知","link":"#发送通知","children":[{"level":3,"title":"使用 Notifiable Trait","slug":"使用-notifiable-trait","link":"#使用-notifiable-trait","children":[]},{"level":3,"title":"使用 Notification Facade","slug":"使用-notification-facade","link":"#使用-notification-facade","children":[]},{"level":3,"title":"发送指定频道","slug":"发送指定频道","link":"#发送指定频道","children":[]},{"level":3,"title":"通知队列化","slug":"通知队列化","link":"#通知队列化","children":[{"level":4,"title":"延迟通知","slug":"延迟通知","link":"#延迟通知","children":[]},{"level":4,"title":"多个通道的延迟通知","slug":"多个通道的延迟通知","link":"#多个通道的延迟通知","children":[]},{"level":4,"title":"自定义消息通知队列连接","slug":"自定义消息通知队列连接","link":"#自定义消息通知队列连接","children":[]},{"level":4,"title":"自定义通知通道队列","slug":"自定义通知通道队列","link":"#自定义通知通道队列","children":[]},{"level":4,"title":"队列通知 & 数据库事务","slug":"队列通知-数据库事务","link":"#队列通知-数据库事务","children":[]},{"level":4,"title":"确定是否发送排队的通知","slug":"确定是否发送排队的通知","link":"#确定是否发送排队的通知","children":[]}]},{"level":3,"title":"按需通知","slug":"按需通知","link":"#按需通知","children":[]}]},{"level":2,"title":"邮件通知","slug":"邮件通知","link":"#邮件通知","children":[{"level":3,"title":"格式化邮件","slug":"格式化邮件","link":"#格式化邮件","children":[{"level":4,"title":"错误消息","slug":"错误消息","link":"#错误消息","children":[]},{"level":4,"title":"其他邮件通知格式选项","slug":"其他邮件通知格式选项","link":"#其他邮件通知格式选项","children":[]}]},{"level":3,"title":"自定义发件人","slug":"自定义发件人","link":"#自定义发件人","children":[]},{"level":3,"title":"自定义收件人","slug":"自定义收件人","link":"#自定义收件人","children":[]},{"level":3,"title":"自定义主题","slug":"自定义主题","link":"#自定义主题","children":[]},{"level":3,"title":"自定义邮件程序","slug":"自定义邮件程序","link":"#自定义邮件程序","children":[]},{"level":3,"title":"自定义模板","slug":"自定义模板","link":"#自定义模板","children":[]},{"level":3,"title":"附件","slug":"附件","link":"#附件","children":[{"level":4,"title":"原始数据附件","slug":"原始数据附件","link":"#原始数据附件","children":[]}]},{"level":3,"title":"添加标签和元数据","slug":"添加标签和元数据","link":"#添加标签和元数据","children":[]},{"level":3,"title":"自定义 Symfony 消息","slug":"自定义-symfony-消息","link":"#自定义-symfony-消息","children":[]},{"level":3,"title":"使用可邮寄对象","slug":"使用可邮寄对象","link":"#使用可邮寄对象","children":[{"level":4,"title":"可邮寄对象和按需通知","slug":"可邮寄对象和按需通知","link":"#可邮寄对象和按需通知","children":[]}]},{"level":3,"title":"预览邮件通知","slug":"预览邮件通知","link":"#预览邮件通知","children":[]}]},{"level":2,"title":"Markdown 邮件通知","slug":"markdown-邮件通知","link":"#markdown-邮件通知","children":[{"level":3,"title":"生成消息","slug":"生成消息","link":"#生成消息","children":[]},{"level":3,"title":"编写消息","slug":"编写消息","link":"#编写消息","children":[{"level":4,"title":"Button 组件","slug":"button-组件","link":"#button-组件","children":[]},{"level":4,"title":"Panel 组件","slug":"panel-组件","link":"#panel-组件","children":[]},{"level":4,"title":"Table 组件","slug":"table-组件","link":"#table-组件","children":[]}]},{"level":3,"title":"定制组件","slug":"定制组件","link":"#定制组件","children":[{"level":4,"title":"定制 CSS 样式","slug":"定制-css-样式","link":"#定制-css-样式","children":[]}]}]},{"level":2,"title":"数据库通知","slug":"数据库通知","link":"#数据库通知","children":[{"level":3,"title":"前提条件","slug":"前提条件","link":"#前提条件","children":[]},{"level":3,"title":"格式化数据库通知","slug":"格式化数据库通知","link":"#格式化数据库通知","children":[{"level":4,"title":"toDatabase Vs. toArray","slug":"todatabase-vs-toarray","link":"#todatabase-vs-toarray","children":[]}]},{"level":3,"title":"访问通知","slug":"访问通知","link":"#访问通知","children":[]},{"level":3,"title":"将通知标记为已读","slug":"将通知标记为已读","link":"#将通知标记为已读","children":[]}]},{"level":2,"title":"广播通知","slug":"广播通知","link":"#广播通知","children":[{"level":3,"title":"前提条件","slug":"前提条件-1","link":"#前提条件-1","children":[]},{"level":3,"title":"格式化广播通知","slug":"格式化广播通知","link":"#格式化广播通知","children":[{"level":4,"title":"广播队列配置","slug":"广播队列配置","link":"#广播队列配置","children":[]},{"level":4,"title":"自定义通知类型","slug":"自定义通知类型","link":"#自定义通知类型","children":[]}]},{"level":3,"title":"监听通知","slug":"监听通知","link":"#监听通知","children":[{"level":4,"title":"自定义通知频道","slug":"自定义通知频道","link":"#自定义通知频道","children":[]}]}]},{"level":2,"title":"短信通知","slug":"短信通知","link":"#短信通知","children":[{"level":3,"title":"先决条件","slug":"先决条件","link":"#先决条件","children":[]},{"level":3,"title":"格式化短信通知","slug":"格式化短信通知","link":"#格式化短信通知","children":[{"level":4,"title":"Unicode 内容","slug":"unicode-内容","link":"#unicode-内容","children":[]}]},{"level":3,"title":"自定义「来源」号码","slug":"自定义「来源」号码","link":"#自定义「来源」号码","children":[]},{"level":3,"title":"添加客户关联","slug":"添加客户关联","link":"#添加客户关联","children":[]},{"level":3,"title":"路由短信通知","slug":"路由短信通知","link":"#路由短信通知","children":[]}]},{"level":2,"title":"Slack 通知","slug":"slack-通知","link":"#slack-通知","children":[{"level":3,"title":"先决条件","slug":"先决条件-1","link":"#先决条件-1","children":[]},{"level":3,"title":"格式化 Slack 通知","slug":"格式化-slack-通知","link":"#格式化-slack-通知","children":[]},{"level":3,"title":"Slack 附件","slug":"slack-附件","link":"#slack-附件","children":[{"level":4,"title":"Markdown 附件内容","slug":"markdown-附件内容","link":"#markdown-附件内容","children":[]}]},{"level":3,"title":"路由 Slack 通知","slug":"路由-slack-通知","link":"#路由-slack-通知","children":[]}]},{"level":2,"title":"本地化通知","slug":"本地化通知","link":"#本地化通知","children":[{"level":3,"title":"用户首选语言环境","slug":"用户首选语言环境","link":"#用户首选语言环境","children":[]}]},{"level":2,"title":"测试","slug":"测试","link":"#测试","children":[{"level":4,"title":"按需通知","slug":"按需通知-1","link":"#按需通知-1","children":[]}]},{"level":2,"title":"通知事件","slug":"通知事件","link":"#通知事件","children":[{"level":4,"title":"通知发送事件","slug":"通知发送事件","link":"#通知发送事件","children":[]},{"level":4,"title":"通知发送事件","slug":"通知发送事件-1","link":"#通知发送事件-1","children":[]}]},{"level":2,"title":"自定义频道","slug":"自定义频道","link":"#自定义频道","children":[]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":34.28,"words":10285},"filePathRelative":"zh/guide/notifications.md","excerpt":"<h1> 消息通知</h1>\\n<ul>\\n<li><a href=\\"#introduction\\">介绍</a></li>\\n<li><a href=\\"#generating-notifications\\">生成通知</a></li>\\n<li><a href=\\"#sending-notifications\\">发送通知</a></li>\\n<li><a href=\\"#using-the-notifiable-trait\\">使用可通知特征</a></li>\\n<li><a href=\\"#using-the-notification-facade\\">使用通知门面</a></li>\\n<li><a href=\\"#specifying-delivery-channels\\">指定传送渠道</a></li>\\n<li><a href=\\"#queueing-notifications\\">通知排队</a></li>\\n<li><a href=\\"#on-demand-notifications\\">按需通知</a></li>\\n<li><a href=\\"#mail-notifications\\">邮件通知</a></li>\\n<li><a href=\\"#formatting-mail-messages\\">格式化邮件消息</a></li>\\n<li><a href=\\"#customizing-the-sender\\">自定义发件人</a></li>\\n<li><a href=\\"#customizing-the-recipient\\">自定义收件人</a></li>\\n<li><a href=\\"#customizing-the-subject\\">自定义主题</a></li>\\n<li><a href=\\"#customizing-the-mailer\\">自定义邮件程序</a></li>\\n<li><a href=\\"#customizing-the-templates\\">自定义模板</a></li>\\n<li><a href=\\"#mail-attachments\\">附件</a></li>\\n<li><a href=\\"#adding-tags-metadata\\">添加标签和元数据</a></li>\\n<li><a href=\\"#customizing-the-symfony-message\\">自定义 Symfony 消息</a></li>\\n<li><a href=\\"#using-mailables\\">使用 Mailables</a></li>\\n<li><a href=\\"#previewing-mail-notifications\\">预览邮件通知</a></li>\\n<li><a href=\\"#markdown-mail-notifications\\">Markdown 邮件通知</a></li>\\n<li><a href=\\"#generating-the-message\\">生成消息</a></li>\\n<li><a href=\\"#writing-the-message\\">撰写消息</a></li>\\n<li><a href=\\"#customizing-the-components\\">自定义组件</a></li>\\n<li><a href=\\"#database-notifications\\">数据库通知</a></li>\\n<li><a href=\\"#database-prerequisites\\">先决条件</a></li>\\n<li><a href=\\"#formatting-database-notifications\\">格式化数据库通知</a></li>\\n<li><a href=\\"#accessing-the-notifications\\">访问通知</a></li>\\n<li><a href=\\"#marking-notifications-as-read\\">将通知标记为已读</a></li>\\n<li><a href=\\"#broadcast-notifications\\">广播通知</a></li>\\n<li><a href=\\"#broadcast-prerequisites\\">先决条件</a></li>\\n<li><a href=\\"#formatting-broadcast-notifications\\">格式化广播通知</a></li>\\n<li><a href=\\"#listening-for-notifications\\">监听通知</a></li>\\n<li><a href=\\"#sms-notifications\\">短信通知</a></li>\\n<li><a href=\\"#sms-prerequisites\\">先决条件</a></li>\\n<li><a href=\\"#formatting-sms-notifications\\">格式化短信通知</a></li>\\n<li><a href=\\"#formatting-shortcode-notifications\\">格式化短代码通知</a></li>\\n<li><a href=\\"#customizing-the-from-number\\">自定义「来源」号码</a></li>\\n<li><a href=\\"#adding-a-client-reference\\">添加客户参考</a></li>\\n<li><a href=\\"#routing-sms-notifications\\">路由短信通知</a></li>\\n<li><a href=\\"#slack-notifications\\">Slack 通知</a></li>\\n<li><a href=\\"#slack-prerequisites\\">先决条件</a></li>\\n<li><a href=\\"#formatting-slack-notifications\\">格式化 Slack 通知</a></li>\\n<li><a href=\\"#slack-attachments\\">Slack 附件</a></li>\\n<li><a href=\\"#routing-slack-notifications\\">路由 Slack 通知</a></li>\\n<li><a href=\\"#localizing-notifications\\">本地化通知</a></li>\\n<li><a href=\\"#testing\\">测试</a></li>\\n<li><a href=\\"#notification-events\\">通知事件</a></li>\\n<li><a href=\\"#custom-channels\\">自定义渠道</a></li>\\n</ul>"}');export{l as data};
