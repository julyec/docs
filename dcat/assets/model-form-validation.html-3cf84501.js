import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{r as p,o,c as i,a as s,b as n,d as c,e as a}from"./app-c17653d8.js";const l={},u=a(`<h1 id="表单验证" tabindex="-1"><a class="header-anchor" href="#表单验证" aria-hidden="true">#</a> 表单验证</h1><h3 id="rule" tabindex="-1"><a class="header-anchor" href="#rule" aria-hidden="true">#</a> rule</h3><p><code>model-form</code>使用laravel的验证规则来验证表单提交的数据：</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token variable">$form</span><span class="token operator">-&gt;</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;title&#39;</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">rules</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;required|min:3&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 复杂的验证规则可以在回调里面实现</span>
<span class="token variable">$form</span><span class="token operator">-&gt;</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;title&#39;</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">rules</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token class-name type-declaration">Form</span> <span class="token variable">$form</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    
    <span class="token comment">// 如果不是编辑状态，则添加字段唯一验证</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token variable">$id</span> <span class="token operator">=</span> <span class="token variable">$form</span><span class="token operator">-&gt;</span><span class="token function">model</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token property">id</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string single-quoted-string">&#39;unique:users,email_address&#39;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>也可以给验证规则自定义错误提示消息：</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token variable">$form</span><span class="token operator">-&gt;</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;code&#39;</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">rules</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;required|regex:/^\\d+$/|min:10&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>
    <span class="token string single-quoted-string">&#39;regex&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;code必须全部为数字&#39;</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;min&#39;</span>   <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;code不能少于10个字符&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果要允许字段为空，首先要在数据库的表里面对该字段设置为<code>NULL</code>，然后</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token variable">$form</span><span class="token operator">-&gt;</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;title&#39;</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">rules</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;nullable&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,8),r={href:"https://laravel.com/docs/5.5/validation",target:"_blank",rel:"noopener noreferrer"},d=a(`<h3 id="creationrules" tabindex="-1"><a class="header-anchor" href="#creationrules" aria-hidden="true">#</a> creationRules</h3><p>此方法用法和<code>Form\\Field::rule</code>用法完全一致，不同的是此方法只有在新增数据时才有效。</p><blockquote><p>{tip} 如果调用了<code>creationRules</code>方法，则<code>rule</code>方法设置的验证规则将会被忽略。</p></blockquote><h3 id="updaterules" tabindex="-1"><a class="header-anchor" href="#updaterules" aria-hidden="true">#</a> updateRules</h3><p>此方法用法和<code>Form\\Field::rule</code>用法完全一致，不同的是此方法只有在更新数据时才有效。</p><blockquote><p>{tip} 如果调用了<code>updateRules</code>方法，则<code>rule</code>方法设置的验证规则将会被忽略。</p></blockquote><h2 id="responsevalidationmessages" tabindex="-1"><a class="header-anchor" href="#responsevalidationmessages" aria-hidden="true">#</a> responseValidationMessages</h2><p>通过<code>Form::responseValidationMessages</code>方法可以返回自定义验证错误信息，并中断后续逻辑，用法如下：</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token comment">// 编辑提交时是“PUT”方法</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">getMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token string single-quoted-string">&#39;PUT&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">...</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 你的验证逻辑</span>
        <span class="token variable">$form</span><span class="token operator">-&gt;</span><span class="token function">responseValidationMessages</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;title&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;title格式错误&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        <span class="token comment">// 如有多个错误信息，第二个参数可以传数组</span>
        <span class="token variable">$form</span><span class="token operator">-&gt;</span><span class="token function">responseValidationMessages</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;content&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;content格式错误&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;content不能为空&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token variable">$form</span><span class="token operator">-&gt;</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;title&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">$form</span><span class="token operator">-&gt;</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;content&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>也可以在<code>submitted</code>事件中使用这个方法</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token variable">$form</span><span class="token operator">-&gt;</span><span class="token function">submitted</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token variable">$form</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">...</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 你的验证逻辑</span>
        <span class="token variable">$form</span><span class="token operator">-&gt;</span><span class="token function">responseValidationMessages</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;title&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;title格式错误&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        <span class="token comment">// 如有多个错误信息，第二个参数可以传数组</span>
        <span class="token variable">$form</span><span class="token operator">-&gt;</span><span class="token function">responseValidationMessages</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;content&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;content格式错误&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;content不能为空&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="前端验证" tabindex="-1"><a class="header-anchor" href="#前端验证" aria-hidden="true">#</a> 前端验证</h2><p>系统继承了<a href="https://github.com/1000hz/bootstrap-validator" target="_blank">bootstrap-validator</a>进行前端表单验证，支持H5表单类型的验证。</p><blockquote><p>{tip} 不支持H5的浏览器也可以使用前端验证，系统已经做好了兼容。大部分表单都支持前端和后端验证，两者可以同时工作不冲突，少部分表单前端验证无效。</p></blockquote><h3 id="h5验证" tabindex="-1"><a class="header-anchor" href="#h5验证" aria-hidden="true">#</a> H5验证</h3><h4 id="required" tabindex="-1"><a class="header-anchor" href="#required" aria-hidden="true">#</a> required</h4><p>必填</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token variable">$form</span><span class="token operator">-&gt;</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;title&#39;</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">required</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="number" tabindex="-1"><a class="header-anchor" href="#number" aria-hidden="true">#</a> number</h4><p>只允许输入数字</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token variable">$form</span><span class="token operator">-&gt;</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;age&#39;</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">type</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;number&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>限制范围</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token comment">// 只允许输入 10-60 范围内的数字</span>
<span class="token variable">$form</span><span class="token operator">-&gt;</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;age&#39;</span><span class="token punctuation">)</span>
    <span class="token operator">-&gt;</span><span class="token function">type</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;number&#39;</span><span class="token punctuation">)</span>
    <span class="token operator">-&gt;</span><span class="token function">attribute</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;min&#39;</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span>
    <span class="token operator">-&gt;</span><span class="token function">attribute</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;max&#39;</span><span class="token punctuation">,</span> <span class="token number">60</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="email" tabindex="-1"><a class="header-anchor" href="#email" aria-hidden="true">#</a> email</h4><p>邮箱</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token variable">$form</span><span class="token operator">-&gt;</span><span class="token function">email</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;email&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="url" tabindex="-1"><a class="header-anchor" href="#url" aria-hidden="true">#</a> url</h4><p>链接</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token variable">$form</span><span class="token operator">-&gt;</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;website&#39;</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">type</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;url&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="其它" tabindex="-1"><a class="header-anchor" href="#其它" aria-hidden="true">#</a> 其它</h3><h4 id="minlength" tabindex="-1"><a class="header-anchor" href="#minlength" aria-hidden="true">#</a> minLength</h4><p>限制字符最小长度</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token variable">$form</span><span class="token operator">-&gt;</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;title&#39;</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">minLength</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 设置错误信息</span>
<span class="token variable">$form</span><span class="token operator">-&gt;</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;title&#39;</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">minLength</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;最少输入20个字符&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="maxlength" tabindex="-1"><a class="header-anchor" href="#maxlength" aria-hidden="true">#</a> maxLength</h4><p>限制字符最大长度</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token variable">$form</span><span class="token operator">-&gt;</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;title&#39;</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">maxLength</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 设置错误信息</span>
<span class="token variable">$form</span><span class="token operator">-&gt;</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;title&#39;</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">minLength</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;不能超过50个字符&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="same" tabindex="-1"><a class="header-anchor" href="#same" aria-hidden="true">#</a> same</h4><p>限制当前字段值必须与给定字段的值相等，常用于密码确认</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token variable">$form</span><span class="token operator">-&gt;</span><span class="token function">password</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;password&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token variable">$form</span><span class="token operator">-&gt;</span><span class="token function">password</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;password_confirm&#39;</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">same</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;password&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 设置错误信息</span>
<span class="token variable">$form</span><span class="token operator">-&gt;</span><span class="token function">password</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;password_confirm&#39;</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">same</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;password&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;两次密码输入不一致&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="自定义" tabindex="-1"><a class="header-anchor" href="#自定义" aria-hidden="true">#</a> 自定义</h3><p>开发者可以通过以下方法自定义前端验证规则。</p><p>在 <code>app/Admin/bootstrap.php</code> 中添加以下代码。</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">Dcat<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Form<span class="token punctuation">\\</span>Field</span><span class="token punctuation">;</span>

<span class="token class-name class-name-fully-qualified static-context">Field<span class="token punctuation">\\</span>Text</span><span class="token operator">::</span><span class="token function">macro</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;len&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token keyword type-hint">int</span> <span class="token variable">$length</span><span class="token punctuation">,</span> <span class="token operator">?</span><span class="token keyword type-hint">string</span> <span class="token variable">$error</span> <span class="token operator">=</span> <span class="token constant">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 前端验证逻辑扩展</span>
    <span class="token class-name static-context">Admin</span><span class="token operator">::</span><span class="token function">script</span><span class="token punctuation">(</span>
                <span class="token operator">&lt;&lt;</span><span class="token operator">&lt;</span><span class="token string single-quoted-string">&#39;JS&#39;</span>
Dcat<span class="token operator">.</span>validator<span class="token operator">.</span><span class="token function">extend</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;len&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token variable">$el</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token variable">$el</span><span class="token operator">.</span><span class="token function">val</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">.</span>length <span class="token operator">!=</span> <span class="token variable">$el</span><span class="token operator">.</span><span class="token function">attr</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;data-len&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token constant">JS</span>
        <span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 同时添加后端验证逻辑，这个可以看需要</span>
        <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">rules</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;size:&#39;</span><span class="token operator">.</span><span class="token variable">$length</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">attribute</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
            <span class="token string single-quoted-string">&#39;data-len&#39;</span>       <span class="token operator">=&gt;</span> <span class="token variable">$length</span><span class="token punctuation">,</span>
            <span class="token string single-quoted-string">&#39;data-len-error&#39;</span> <span class="token operator">=&gt;</span> <span class="token function">str_replace</span><span class="token punctuation">(</span>
                <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;:attribute&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;:len&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
                <span class="token punctuation">[</span><span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">label</span><span class="token punctuation">,</span> <span class="token variable">$length</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
                <span class="token variable">$error</span> <span class="token operator">?</span><span class="token punctuation">:</span> <span class="token string double-quoted-string">&quot;只能输入:len个字符&quot;</span>
            <span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token variable">$form</span><span class="token operator">-&gt;</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;name&#39;</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">len</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,45);function k(g,v){const t=p("ExternalLinkIcon");return o(),i("div",null,[u,s("p",null,[n("更多规则请参考"),s("a",r,[n("Validation"),c(t)]),n("。")]),d])}const h=e(l,[["render",k],["__file","model-form-validation.html.vue"]]);export{h as default};
