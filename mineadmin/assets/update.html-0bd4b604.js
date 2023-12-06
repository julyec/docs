import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as e,c as a,a as s}from"./app-719eb5cf.js";const t={},o=s(`<h1 id="升级指南" tabindex="-1"><a class="header-anchor" href="#升级指南" aria-hidden="true">#</a> 升级指南</h1><h2 id="前端升级指南" tabindex="-1"><a class="header-anchor" href="#前端升级指南" aria-hidden="true">#</a> 前端升级指南</h2><h3 id="_1-1-0-升级到-1-2-0-指南" tabindex="-1"><a class="header-anchor" href="#_1-1-0-升级到-1-2-0-指南" aria-hidden="true">#</a> 1.1.0 升级到 1.2.0 指南</h3><p>MaCrud组件修改列表：</p><ul><li>组件 <code>Props</code> 参数的 <code>crud</code> 更名为 <code>options</code>，但之前的<code>crud</code>名称可以继续使用</li><li><code>columns</code> 字段配置项的 <code>rules</code> 更名为 <code>commonRules</code>，之前名称不可用</li><li>事件名称修改，统一加了前缀：on 比如，点击事件 onClick: () =&gt; {} 注意：区分大小写</li><li><code>viewLayoutSetting</code> 参数，现改名为 <code>formOption</code> 之前名称不可使用 同时，该参数下的 <code>layout</code> 数据类型改为 <code>Object</code> 是对form进行布局配置，可以查看文档 删除了 <code>cols</code> 和 <code>labelAlign</code> 属性 新增了 <code>tagId</code> 参数，<code>tagName</code>参数，<code>viewType</code>增加了 <code>tag</code> 配置</li></ul><p>旧版本</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>  viewLayoutSetting<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 布局方式, 支持 auto（自动） 和 customer（自定义）两种</span>
    layout<span class="token operator">?</span><span class="token operator">:</span> <span class="token string">&quot;auto&quot;</span> <span class="token operator">|</span> <span class="token string">&quot;customer&quot;</span><span class="token punctuation">;</span>
    <span class="token comment">// 显示方式支持模态框和抽屉?: modal drawer</span>
    viewType<span class="token operator">?</span><span class="token operator">:</span> <span class="token string">&quot;modal&quot;</span> <span class="token operator">|</span> <span class="token string">&quot;drawer&quot;</span><span class="token punctuation">;</span>
    <span class="token comment">// 显示宽度</span>
    width<span class="token operator">?</span><span class="token operator">:</span> number<span class="token punctuation">;</span>
    <span class="token comment">// 是否全屏，只有modal有效</span>
    isFull<span class="token operator">?</span><span class="token operator">:</span> boolean<span class="token punctuation">;</span>
    <span class="token comment">// 表单设置一行多少列，会自适应，在布局为 auto 下生效</span>
    cols<span class="token operator">?</span><span class="token operator">:</span> number<span class="token punctuation">;</span>
    <span class="token comment">// 标签对齐方式</span>
    labelAlign<span class="token operator">?</span><span class="token operator">:</span> <span class="token string">&quot;center&quot;</span> <span class="token operator">|</span> <span class="token string">&quot;right&quot;</span> <span class="token operator">|</span> <span class="token string">&quot;left&quot;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>新版本</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code> <span class="token comment">// 表单配置项</span>
  <span class="token literal-property property">formOption</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 显示方式支持模态框和抽屉或新打开一个tag页: modal drawer tag</span>
    <span class="token literal-property property">viewType</span><span class="token operator">:</span> <span class="token string">&#39;modal&#39;</span><span class="token punctuation">,</span>
    <span class="token comment">// 只有 viewType 为 tag 时生效，此值在所有 MaCrud 内唯一</span>
    <span class="token literal-property property">tagId</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
    <span class="token comment">// 只有 viewType 为 tag 时生效，定义tag的名称</span>
    <span class="token literal-property property">tagName</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
    <span class="token comment">// 显示宽度</span>
    <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">600</span><span class="token punctuation">,</span>
    <span class="token comment">// 是否全屏，只有modal有效</span>
    <span class="token literal-property property">isFull</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token comment">// 表单布局</span>
    <span class="token literal-property property">layout</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>formType组件名称变更列表</li></ul><table><thead><tr><th style="text-align:center;">旧版本</th><th style="text-align:center;">新版本</th></tr></thead><tbody><tr><td style="text-align:center;">&#39;select-user&#39;</td><td style="text-align:center;">&#39;user-select&#39;</td></tr><tr><td style="text-align:center;">&#39;icon&#39;</td><td style="text-align:center;">&#39;icon-picker&#39;</td></tr></tbody></table><ul><li>formType 新增组件列表</li></ul><table><thead><tr><th style="text-align:center;">组件名称</th><th style="text-align:center;">说明</th></tr></thead><tbody><tr><td style="text-align:center;">button</td><td style="text-align:center;">Arco的按钮组件</td></tr><tr><td style="text-align:center;">color-picker</td><td style="text-align:center;">颜色选择器组件</td></tr><tr><td style="text-align:center;">static-text</td><td style="text-align:center;">静态文字组件</td></tr><tr><td style="text-align:center;">divider</td><td style="text-align:center;">Arco的分割线组件</td></tr><tr><td style="text-align:center;">verify-code</td><td style="text-align:center;">验证码组件</td></tr></tbody></table><p>执行 <code>yarn</code> 更新依赖</p><h2 id="后端升级指南" tabindex="-1"><a class="header-anchor" href="#后端升级指南" aria-hidden="true">#</a> 后端升级指南</h2><h3 id="_1-1-0-升级到-1-1-1-指南" tabindex="-1"><a class="header-anchor" href="#_1-1-0-升级到-1-1-1-指南" aria-hidden="true">#</a> 1.1.0 升级到 1.1.1 指南</h3><p>更新文件：</p><ul><li>更新 App\\System\\Service\\ServerMonitorService.php 文件</li><li>更新 App\\Setting\\Service\\SettingGenerateColumnsService.php 文件</li><li>更新 App\\System\\Controller\\UploadController.php 文件</li><li>更新 App\\System\\Controller\\ServerController.php 文件</li><li>更新 Mine 目录所有文件</li></ul><p>执行 <code>composer update -o</code> 更新依赖</p>`,19),l=[o];function p(r,c){return e(),a("div",null,l)}const u=n(t,[["render",p],["__file","update.html.vue"]]);export{u as default};
