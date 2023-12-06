const t=JSON.parse('{"key":"v-a30426fc","path":"/further/mustLearn/menu.html","title":"菜单规则","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"菜单表重点字段说明","slug":"菜单表重点字段说明","link":"#菜单表重点字段说明","children":[]},{"level":2,"title":"注意事项","slug":"注意事项","link":"#注意事项","children":[]}],"git":{"createdTime":1701780913000,"updatedTime":1701780913000,"contributors":[{"name":"Moments","email":"554676262@qq.com","commits":1}]},"readingTime":{"minutes":1.55,"words":465},"filePathRelative":"further/mustLearn/menu.md","localizedDate":"December 5, 2023","excerpt":"<h1> 菜单规则</h1>\\n<p>MineAdmin 在菜单方面做了很多工作，兼顾路由和权限的一体化设计，即：路由就是权限</p>\\n<ul>\\n<li>后台注解路由和权限路由的使用</li>\\n<li>前端的路由自动注册，以及扁平化处理</li>\\n<li>后端双鉴权的设计</li>\\n<li>无限子级菜单的设计</li>\\n<li>针对菜单记录日志的操作日志注解使用</li>\\n</ul>\\n<h2> 菜单表重点字段说明</h2>\\n<table>\\n<thead>\\n<tr>\\n<th style=\\"text-align:center\\">字段</th>\\n<th style=\\"text-align:center\\">说明</th>\\n<th style=\\"text-align:center\\">规则</th>\\n<th style=\\"text-align:center\\">建议</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td style=\\"text-align:center\\">type</td>\\n<td style=\\"text-align:center\\">菜单类型</td>\\n<td style=\\"text-align:center\\">M(菜单) B(按钮) L(外链) I(iFrame)</td>\\n<td style=\\"text-align:center\\">无</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:center\\">name</td>\\n<td style=\\"text-align:center\\">菜单名称</td>\\n<td style=\\"text-align:center\\">比如：用户管理</td>\\n<td style=\\"text-align:center\\">一般指业务的简练概括，不宜太长</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:center\\">code</td>\\n<td style=\\"text-align:center\\">菜单标识</td>\\n<td style=\\"text-align:center\\">全局唯一，重复会导致前端报错</td>\\n<td style=\\"text-align:center\\">建议命名：<code>模块名</code>:<code>菜单英文名</code>:<code>功能名</code></td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:center\\">route</td>\\n<td style=\\"text-align:center\\">菜单路由（前端）</td>\\n<td style=\\"text-align:center\\">全局唯一，重复会导致前端报错</td>\\n<td style=\\"text-align:center\\">建议命名：<code>模块名</code>/<code>菜单英文名</code></td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:center\\">component</td>\\n<td style=\\"text-align:center\\">前端视图页面</td>\\n<td style=\\"text-align:center\\">指定地址以模块名开头，不加斜杠</td>\\n<td style=\\"text-align:center\\">在新增菜单前，建议先增加视图的空白页面</td>\\n</tr>\\n</tbody>\\n</table>"}');export{t as data};
