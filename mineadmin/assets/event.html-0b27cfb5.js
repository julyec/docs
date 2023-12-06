import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as l,c as i,a}from"./app-719eb5cf.js";const r={},n=a('<h1 id="内置事件" tabindex="-1"><a class="header-anchor" href="#内置事件" aria-hidden="true">#</a> 内置事件</h1><h2 id="用户登录前事件" tabindex="-1"><a class="header-anchor" href="#用户登录前事件" aria-hidden="true">#</a> 用户登录前事件</h2><p>监听类名</p><ul><li>\\Mine\\Event\\UserLoginBefore::class</li></ul><p>事件参数</p><ul><li>用户登录时提交的数据</li></ul><h2 id="用户登录后事件" tabindex="-1"><a class="header-anchor" href="#用户登录后事件" aria-hidden="true">#</a> 用户登录后事件</h2><p>监听类名</p><ul><li>\\Mine\\Event\\UserLoginAfter::class</li></ul><p>事件参数</p><ul><li>当前登录用户数据</li></ul><h2 id="用户退出事件" tabindex="-1"><a class="header-anchor" href="#用户退出事件" aria-hidden="true">#</a> 用户退出事件</h2><p>监听类名</p><ul><li>\\Mine\\Event\\UserLogout::class</li></ul><p>事件参数</p><ul><li>当前退出用户数据</li></ul><h2 id="附件上传后事件" tabindex="-1"><a class="header-anchor" href="#附件上传后事件" aria-hidden="true">#</a> 附件上传后事件</h2><p>监听类名</p><ul><li>\\Mine\\Event\\UploadAfter::class</li></ul><p>事件参数</p><ul><li>上传文件数据</li></ul><h2 id="附件真实删除事件" tabindex="-1"><a class="header-anchor" href="#附件真实删除事件" aria-hidden="true">#</a> 附件真实删除事件</h2><p>监听类名</p><ul><li>\\Mine\\Event\\RealDeleteUploadFile::class</li></ul><p>事件参数</p><ul><li>SystemUploadFile 模型实例 (文件数据)</li><li>Filesystem 文件操作系统实例 (支持 OSS QINIU COS 本地)</li></ul><p>事件方法</p><ul><li>setConfirm(bool $confirm) 设置是否删除文件</li><li>getConfirm() 获取是否删除文件</li></ul><blockquote><p>系统只有在 <code>getConfirm()</code> 返回为 <code>true</code> 才会删除文件</p></blockquote><h2 id="后台操作记录事件" tabindex="-1"><a class="header-anchor" href="#后台操作记录事件" aria-hidden="true">#</a> 后台操作记录事件</h2><p>监听类名</p><ul><li>\\Mine\\Event\\Operation::class</li></ul><p>事件参数</p><ul><li>当前请求的详细数据</li></ul><h2 id="api接口请求前事件" tabindex="-1"><a class="header-anchor" href="#api接口请求前事件" aria-hidden="true">#</a> API接口请求前事件</h2><p>监听类名</p><ul><li>\\Mine\\Event\\ApiBefore::class</li></ul><p>事件参数</p><ul><li>无</li></ul><h2 id="api接口请求后事件" tabindex="-1"><a class="header-anchor" href="#api接口请求后事件" aria-hidden="true">#</a> API接口请求后事件</h2><p>监听类名</p><ul><li>\\Mine\\Event\\ApiAfter::class</li></ul><p>事件参数</p><ul><li>请求接口的详细数据</li><li>接口返回浏览器的数据 （可改变接口返回数据的内容，不建议这么做）</li></ul>',44),t=[n];function d(h,s){return l(),i("div",null,t)}const p=e(r,[["render",d],["__file","event.html.vue"]]);export{p as default};