const e=JSON.parse('{"key":"v-3e735cb0","path":"/zh/guide/action.html","title":"动作基本使用","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"示例","slug":"示例","link":"#示例","children":[{"level":3,"title":"使用命令创建Action类","slug":"使用命令创建action类","link":"#使用命令创建action类","children":[]},{"level":3,"title":"使用","slug":"使用","link":"#使用","children":[]}]},{"level":2,"title":"属性","slug":"属性","link":"#属性","children":[]},{"level":2,"title":"方法","slug":"方法","link":"#方法","children":[{"level":3,"title":"创建实例 (make)","slug":"创建实例-make","link":"#创建实例-make","children":[]},{"level":3,"title":"处理请求 (handle)","slug":"处理请求-handle","link":"#处理请求-handle","children":[]},{"level":3,"title":"响应 (response)","slug":"响应-response","link":"#响应-response","children":[]},{"level":3,"title":"设置请求数据 (parameters)","slug":"设置请求数据-parameters","link":"#设置请求数据-parameters","children":[]},{"level":3,"title":"确认弹窗 (confirm)","slug":"确认弹窗-confirm","link":"#确认弹窗-confirm","children":[]},{"level":3,"title":"发起请求之前执行的JS代码 (actionScript)","slug":"发起请求之前执行的js代码-actionscript","link":"#发起请求之前执行的js代码-actionscript","children":[]},{"level":3,"title":"处理服务器响应的HTML代码 (handleHtmlResponse)","slug":"处理服务器响应的html代码-handlehtmlresponse","link":"#处理服务器响应的html代码-handlehtmlresponse","children":[]},{"level":3,"title":"权限 (authorize)","slug":"权限-authorize","link":"#权限-authorize","children":[]},{"level":3,"title":"无权限响应 (failedAuthorization)","slug":"无权限响应-failedauthorization","link":"#无权限响应-failedauthorization","children":[]},{"level":3,"title":"隐藏或显示 (disable)","slug":"隐藏或显示-disable","link":"#隐藏或显示-disable","children":[]},{"level":3,"title":"判断是否显示 (allowed)","slug":"判断是否显示-allowed","link":"#判断是否显示-allowed","children":[]},{"level":3,"title":"设置主键 (setKey)","slug":"设置主键-setkey","link":"#设置主键-setkey","children":[]},{"level":3,"title":"获取主键值 (getKey)","slug":"获取主键值-getkey","link":"#获取主键值-getkey","children":[]},{"level":3,"title":"获取目标元素样式 (getElementClass)","slug":"获取目标元素样式-getelementclass","link":"#获取目标元素样式-getelementclass","children":[]},{"level":3,"title":"获取目标元素的Css选择器 (selector)","slug":"获取目标元素的css选择器-selector","link":"#获取目标元素的css选择器-selector","children":[]},{"level":3,"title":"追加样式 (addHtmlClass)","slug":"追加样式-addhtmlclass","link":"#追加样式-addhtmlclass","children":[]},{"level":3,"title":"设置目标元素的HTML (html)","slug":"设置目标元素的html-html","link":"#设置目标元素的html-html","children":[]},{"level":3,"title":"添加JS代码 (script)","slug":"添加js代码-script","link":"#添加js代码-script","children":[]},{"level":3,"title":"设置目标元素的HTML属性 (setHtmlAttribute)","slug":"设置目标元素的html属性-sethtmlattribute","link":"#设置目标元素的html属性-sethtmlattribute","children":[]}]}],"git":{"createdTime":1701780913000,"updatedTime":1701780913000,"contributors":[{"name":"Moments","email":"554676262@qq.com","commits":1}]},"readingTime":{"minutes":6.91,"words":2073},"filePathRelative":"zh/guide/action.md","localizedDate":"2023年12月5日","excerpt":"<h1> 动作基本使用</h1>\\n<p>开发者通过 <code>Action</code> 动作类可以非常方便的开发出一个含有特定功能的操作，可以非常方便的让用户与服务器产生交互。</p>\\n<p>例如，页面上需要一个按钮，用户点击之后可以向服务器发起请求，通过弹窗展示当前登录用户的信息，那么这个功能按钮就可以用 <code>Action</code> 来开发。</p>\\n<h2> 示例</h2>\\n<p>下面我们就开始开发一个用于查看登录用户信息的按钮：</p>\\n<h3> 使用命令创建Action类</h3>\\n<p>首先需要先创建 <code>Action</code> 类，运行命令</p>\\n<div class=\\"language-bash line-numbers-mode\\" data-ext=\\"sh\\"><pre class=\\"language-bash\\"><code>php artisan admin:action\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div></div></div>"}');export{e as data};