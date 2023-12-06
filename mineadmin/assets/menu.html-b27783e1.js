import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as t,c as d,a as c}from"./app-719eb5cf.js";const l={},n=c('<h1 id="菜单规则" tabindex="-1"><a class="header-anchor" href="#菜单规则" aria-hidden="true">#</a> 菜单规则</h1><p>MineAdmin 在菜单方面做了很多工作，兼顾路由和权限的一体化设计，即：路由就是权限</p><ul><li>后台注解路由和权限路由的使用</li><li>前端的路由自动注册，以及扁平化处理</li><li>后端双鉴权的设计</li><li>无限子级菜单的设计</li><li>针对菜单记录日志的操作日志注解使用</li></ul><h2 id="菜单表重点字段说明" tabindex="-1"><a class="header-anchor" href="#菜单表重点字段说明" aria-hidden="true">#</a> 菜单表重点字段说明</h2><table><thead><tr><th style="text-align:center;">字段</th><th style="text-align:center;">说明</th><th style="text-align:center;">规则</th><th style="text-align:center;">建议</th></tr></thead><tbody><tr><td style="text-align:center;">type</td><td style="text-align:center;">菜单类型</td><td style="text-align:center;">M(菜单) B(按钮) L(外链) I(iFrame)</td><td style="text-align:center;">无</td></tr><tr><td style="text-align:center;">name</td><td style="text-align:center;">菜单名称</td><td style="text-align:center;">比如：用户管理</td><td style="text-align:center;">一般指业务的简练概括，不宜太长</td></tr><tr><td style="text-align:center;">code</td><td style="text-align:center;">菜单标识</td><td style="text-align:center;">全局唯一，重复会导致前端报错</td><td style="text-align:center;">建议命名：<code>模块名</code>:<code>菜单英文名</code>:<code>功能名</code></td></tr><tr><td style="text-align:center;">route</td><td style="text-align:center;">菜单路由（前端）</td><td style="text-align:center;">全局唯一，重复会导致前端报错</td><td style="text-align:center;">建议命名：<code>模块名</code>/<code>菜单英文名</code></td></tr><tr><td style="text-align:center;">component</td><td style="text-align:center;">前端视图页面</td><td style="text-align:center;">指定地址以模块名开头，不加斜杠</td><td style="text-align:center;">在新增菜单前，建议先增加视图的空白页面</td></tr></tbody></table><h2 id="注意事项" tabindex="-1"><a class="header-anchor" href="#注意事项" aria-hidden="true">#</a> 注意事项</h2><ul><li>菜单类型涉及到树状结构，<code>按钮类型</code>菜单不会出现在后台左侧菜单列表里面且<code>不能新增子级菜单</code>，而<code>外链</code>是指以新的窗口打开外部连接，<code>iFrame</code>是在后台打开外部连接</li><li>菜单标识设计为英文，<code>模块名</code>、<code>菜单名</code>、<code>功能名</code>中间以<code>冒号</code>隔开</li><li>菜单路由要定义的层次分明，一眼可以看出属于哪个模块、哪个业务控制器，一般以<code>模块名</code>、<code>业务名</code>为层次，中间用<code>斜杠</code>隔开</li><li>前端视图的目录存放在 <code>src/views</code> 下面，指定视图页面地址，以当前模块名开头即可，比如：<code>system/user/index</code>。 那么注册路由的时候，前端路由系统会找 <code>src/views/system/user/index.vue</code> 文件</li></ul>',7),r=[n];function i(a,o){return t(),d("div",null,r)}const x=e(l,[["render",i],["__file","menu.html.vue"]]);export{x as default};