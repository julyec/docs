const l=JSON.parse('{"key":"v-a5c90be6","path":"/zh/guide/sail.html","title":"Sail 开发环境","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"介绍","slug":"介绍","link":"#介绍","children":[]},{"level":2,"title":"安装 & 设定","slug":"安装-设定","link":"#安装-设定","children":[{"level":3,"title":"安装 Sail 到当前应用中","slug":"安装-sail-到当前应用中","link":"#安装-sail-到当前应用中","children":[{"level":4,"title":"增加额外服务","slug":"增加额外服务","link":"#增加额外服务","children":[]},{"level":4,"title":"使用开发容器","slug":"使用开发容器","link":"#使用开发容器","children":[]}]},{"level":3,"title":"配置 Shell 别名","slug":"配置-shell-别名","link":"#配置-shell-别名","children":[]}]},{"level":2,"title":"启动 & 停止 Sail","slug":"启动-停止-sail","link":"#启动-停止-sail","children":[]},{"level":2,"title":"执行命令","slug":"执行命令","link":"#执行命令","children":[{"level":3,"title":"执行 PHP 命令","slug":"执行-php-命令","link":"#执行-php-命令","children":[]},{"level":3,"title":"执行 Composer 命令","slug":"执行-composer-命令","link":"#执行-composer-命令","children":[{"level":4,"title":"在已运行的应用中安装 Composer 依赖","slug":"在已运行的应用中安装-composer-依赖","link":"#在已运行的应用中安装-composer-依赖","children":[]}]},{"level":3,"title":"执行 Artisan 命令","slug":"执行-artisan-命令","link":"#执行-artisan-命令","children":[]},{"level":3,"title":"执行 Node / NPM 命令","slug":"执行-node-npm-命令","link":"#执行-node-npm-命令","children":[]}]},{"level":2,"title":"与数据库交互","slug":"与数据库交互","link":"#与数据库交互","children":[{"level":3,"title":"MySQL","slug":"mysql","link":"#mysql","children":[]},{"level":3,"title":"Redis","slug":"redis","link":"#redis","children":[]},{"level":3,"title":"Meilisearch","slug":"meilisearch","link":"#meilisearch","children":[]}]},{"level":2,"title":"文件存储","slug":"文件存储","link":"#文件存储","children":[]},{"level":2,"title":"运行测试","slug":"运行测试","link":"#运行测试","children":[{"level":3,"title":"Laravel Dusk","slug":"laravel-dusk","link":"#laravel-dusk","children":[{"level":4,"title":"在 Apple Silicon 上运行 Selenium","slug":"在-apple-silicon-上运行-selenium","link":"#在-apple-silicon-上运行-selenium","children":[]}]}]},{"level":2,"title":"预览电子邮件","slug":"预览电子邮件","link":"#预览电子邮件","children":[]},{"level":2,"title":"容器 CLI","slug":"容器-cli","link":"#容器-cli","children":[]},{"level":2,"title":"PHP 版本","slug":"php-版本","link":"#php-版本","children":[]},{"level":2,"title":"Node 版本","slug":"node-版本","link":"#node-版本","children":[]},{"level":2,"title":"共享你的网站","slug":"共享你的网站","link":"#共享你的网站","children":[]},{"level":2,"title":"使用 Xdebug 进行调试","slug":"使用-xdebug-进行调试","link":"#使用-xdebug-进行调试","children":[{"level":4,"title":"Linux 主机 IP 配置","slug":"linux-主机-ip-配置","link":"#linux-主机-ip-配置","children":[]},{"level":3,"title":"通过命令行使用 Xdebug 进行调试","slug":"通过命令行使用-xdebug-进行调试","link":"#通过命令行使用-xdebug-进行调试","children":[]},{"level":3,"title":"通过浏览器使用 Xdebug 进行调试","slug":"通过浏览器使用-xdebug-进行调试","link":"#通过浏览器使用-xdebug-进行调试","children":[]}]},{"level":2,"title":"定制化","slug":"定制化","link":"#定制化","children":[]}],"git":{"createdTime":1701780913000,"updatedTime":1701780913000,"contributors":[{"name":"Moments","email":"554676262@qq.com","commits":1}]},"readingTime":{"minutes":15.6,"words":4681},"filePathRelative":"zh/guide/sail.md","localizedDate":"2023年12月5日","excerpt":"<h1> Sail 开发环境</h1>\\n<ul>\\n<li><a href=\\"#introduction\\">介绍</a></li>\\n<li><a href=\\"#installation\\">安装 &amp; 设定</a>\\n<ul>\\n<li><a href=\\"#installing-sail-into-existing-applications\\">安装 Sail 到当前应用中</a></li>\\n<li><a href=\\"#configuring-a-bash-alias\\">配置 Bash 别名</a></li>\\n</ul>\\n</li>\\n<li><a href=\\"#starting-and-stopping-sail\\">启动 &amp; 停止 Sail</a></li>\\n<li><a href=\\"#executing-sail-commands\\">执行命令</a>\\n<ul>\\n<li><a href=\\"#executing-php-commands\\">执行 PHP 命令</a></li>\\n<li><a href=\\"#executing-composer-commands\\">执行 Composer 命令</a></li>\\n<li><a href=\\"#executing-artisan-commands\\">执行 Artisan 命令</a></li>\\n<li><a href=\\"#executing-node-npm-commands\\">执行 Node / NPM 命令</a></li>\\n</ul>\\n</li>\\n<li><a href=\\"#interacting-with-sail-databases\\">与数据库交互</a>\\n<ul>\\n<li><a href=\\"#mysql\\">MySQL</a></li>\\n<li><a href=\\"#redis\\">Redis</a></li>\\n<li><a href=\\"#meilisearch\\">MeiliSearch</a></li>\\n</ul>\\n</li>\\n<li><a href=\\"#file-storage\\">文件存储</a></li>\\n<li><a href=\\"#running-tests\\">运行测试</a></li>\\n<li><a href=\\"#laravel-dusk\\">Laravel Dusk</a></li>\\n<li><a href=\\"#previewing-emails\\">预览电子邮件</a></li>\\n<li><a href=\\"#sail-container-cli\\">容器 CLI</a></li>\\n<li><a href=\\"#sail-php-versions\\">PHP 版本</a></li>\\n<li><a href=\\"#sail-node-versions\\">Node 版本</a></li>\\n<li><a href=\\"#sharing-your-site\\">共享您的网站</a></li>\\n<li><a href=\\"#debugging-with-xdebug\\">使用 Xdebug 进行调试</a>\\n<ul>\\n<li><a href=\\"#xdebug-cli-usage\\">通过命令行使用 Xdebug 进行调试</a></li>\\n<li><a href=\\"#xdebug-browser-usage\\">通过浏览器使用 Xdebug 进行调试</a></li>\\n</ul>\\n</li>\\n<li><a href=\\"#sail-customization\\">定制化</a></li>\\n</ul>"}');export{l as data};
