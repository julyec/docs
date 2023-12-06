import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as i,c as e,a as s}from"./app-719eb5cf.js";const d={},l=s(`<h1 id="文件结构" tabindex="-1"><a class="header-anchor" href="#文件结构" aria-hidden="true">#</a> 文件结构</h1><h2 id="后端" tabindex="-1"><a class="header-anchor" href="#后端" aria-hidden="true">#</a> 后端</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">.</span>     
├── api                                 // 应用程序对外接口目录
│   ├── InterfaceApi                    // 接口程序目录
│   │   └──v1                           // v1接口版本
│   ├── Listener                        // 接口监听事件目录
│   ├── Middleware                      // 接口中间件处理目录
│   ├── ApiController.php               // 接口处理控制器
│   └── ApiDocController.php            // 接口文档控制器
├── app                                 // 应用程序目录
│   ├── System                          // 系统模块目录
│   │   ├── Controller                   // 控制器目录
│   │   ├── Databases                    // 数据库迁移
│   │   ├── Mapper                       // 数据库映射访问层目录
│   │   ├── Model                        // 模型目录
│   │   ├── Request                      // 请求验证目录
│   │   ├── Service                      // 业务逻辑层目录
│   │   └── <span class="token punctuation">..</span>.                          // 其他目录
│   ├── Setting                         // 设置模块目录
│   └── <span class="token punctuation">..</span>.                             // 以后增加的其他模块目录
├── bin                                 
│   └── hyperf.php                      // 启动项目的文件
├── config                              // 配置文件目录
├── common/common.php                   // 业务级公共函数库
├── mine                                // MineAdmin 核心目录
│   ├── Abstracts                        // 存放抽象类目录
│   ├── Amqp                             // 系统队列及延迟队列类库
│   ├── Annotation                       // 存放自定义注解目录
│   ├── Aspect                           // 存放自定义切面目录
│   ├── Command                          // 存放自定义命令目录
│   ├── Crontab                          // 存放定时任务核心目录
│   ├── Event                            // 存放事件目录
│   ├── Exception                        // 存放异常接管处理目录
│   ├── Generator                        // 存放代码生成处理目录
│   ├── Helper                           // 助手类目录
│   ├── Interfaces                       // 系统接口目录
│   ├── Redis                            // Redis封装类库目录
│   ├── Listener                         // 存放事件监听目录
│   ├── Traits                           // 存放复用类目录
│   ├── Mine.php                         // MineAdmin 基础功能类
│   ├── MineCollection.php               // 模型数据处理类
│   ├── MineCommand.php                  // 命令基础类
│   ├── MineController.php               // 控制器基础类
│   ├── MineModel.php                    // 模型基础类
│   ├── MineModelVisitor.php             // 模型字段类型映射
│   ├── MineRequest.php                  // 请求基础类
│   ├── MineResponse.php                 // 响应基础类
│   ├── MineServer.php                   // Mine服务类
│   ├── MineStart.php                    // 启动类
│   └── MineUpload.php                   // 上传处理类
├── mine-ui                             // 前端目录
├── public                              // MineAdmin外部访问目录
├── runtime                             // 临时文件目录
├── storage                             // 多语言目录  
├── vendor
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="前端" tabindex="-1"><a class="header-anchor" href="#前端" aria-hidden="true">#</a> 前端</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>./mine-ui/
├── build                      // 构建相关  
├── bin                        // 执行脚本
├── public                     // 公共文件
│   ├── favicon.ico            // favicon图标
│   ├── index.html             // html模板
│   ├──  tinymce                // 编辑器
│   └── img                    // 对外图片目录
├── src                        // 核心源码目录
│   ├── api                    // 存放所有请求文件目录
│   ├── assets                 // 存放字体等静态资源目录
│   ├── components             // 存放全局公用组件目录
│   ├── config                 // 存放全局配置文件目录
│   ├── directive              // 存放全局指令目录
│   ├── layout                 // 存放布局目录
│   ├── router                 // 存放路由目录
│   ├── store                  // 存放store管理目录
│   ├── style                  // 存放css目录
│   ├── utils                  // 全局公用方法目录
│   ├── views                  // 存放所有页面目录
│   ├── App.vue                // 入口页面
│   └── main.js                // 入口 加载组件 初始化等
├── .editorconfig              // 编码格式
├── README.md                  // SCUI项目介绍文件
├── LICENSE                    // 开源协议文件
├── .gitignore                 // <span class="token function">git</span> 忽略项
├── babel.config.js            // babel.config.js
├── package.json               // package.json
└── vue.config.js              // vue.config.js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),a=[l];function v(r,c){return i(),e("div",null,a)}const b=n(d,[["render",v],["__file","structure.html.vue"]]);export{b as default};
