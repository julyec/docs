import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as i,c as a,a as n}from"./app-66b20ad3.js";const d={},r=n(`<h1 id="定时任务" tabindex="-1"><a class="header-anchor" href="#定时任务" aria-hidden="true">#</a> 定时任务</h1><p>定时任务在日常业务逻辑中非常常见，我们提供了不依赖操作系统级别的定时任务，只需要在后台就可以定义一个定时任务。</p><h2 id="任务类型" tabindex="-1"><a class="header-anchor" href="#任务类型" aria-hidden="true">#</a> 任务类型</h2><div class="hint-container tip"><p class="hint-container-title">定时任务种类</p><p>MineAdmin 支持 <code>4</code> 种任务类型：</p><ul><li>url 任务可以指定一个url地址来请求</li><li>eval 任务可以直接写入php代码，直接运行php脚本</li><li>Class 任务可以指定一个PHP类任务，执行类里面的execute方法（此类型任务需要重启服务器）</li><li>Command 任务可以指定运行hyperf框架定义的命令（此任务需要事先定义好命令）</li></ul></div><h2 id="定时规则" tabindex="-1"><a class="header-anchor" href="#定时规则" aria-hidden="true">#</a> 定时规则</h2><p>任务的定时规则与Linux系统的定时规则类似，只是系统的定时任务支持秒级的定义：</p><p>例如：<code>30 */5 * * * *</code>，代表每隔5分钟的第30秒执行任务</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> 0    1    2    3    4    5
 *    *    *    *    *    *
 -    -    -    -    -    -
 |    |    |    |    |    |
 |    |    |    |    |    +----- 周 (0 - 6) (星期天=0)
 |    |    |    |    +----- 月份 (1 - 12)
 |    |    |    +------- 天 (1 - 31)
 |    |    +--------- 小时 (0 - 23)
 |    +----------- 分 (0 - 59)
 +------------- 秒 (0-59)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="任务参数" tabindex="-1"><a class="header-anchor" href="#任务参数" aria-hidden="true">#</a> 任务参数</h2><p>目前定时任务只支持传入字符串参数。比如类任务处理的时候，可以以某个字符切分字符串，得到想要的数据。</p><h2 id="温馨提示" tabindex="-1"><a class="header-anchor" href="#温馨提示" aria-hidden="true">#</a> 温馨提示</h2><div class="hint-container warning"><p class="hint-container-title">温馨提示</p><p>任务定时时间修改后，并不是即使生效，而需要等待下一分钟后才会生效。</p><p>如果遇到定义了秒级定时任务，修改后，若还继续执行不需要惊讶，下一分钟就会按照新的定时规则运行了。</p></div>`,12),s=[r];function l(c,t){return i(),a("div",null,s)}const p=e(d,[["render",l],["__file","crontab.html.vue"]]);export{p as default};
