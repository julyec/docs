import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,a as p}from"./app-719eb5cf.js";const t={},e=p(`<p>在一些情况下，有这种需求：</p><ul><li>A字段的值等于1，B字段和C字段隐藏</li><li>A字段的值等于2，B字段隐藏，C字段显示</li><li>A字段的值等于3，C字段隐藏，B字段显示</li><li>A字段的值等于4，B字段和C字段显示</li></ul><p>在或者，某些情况下，改变某字段的 label、value 等，我们称之为字段交互控制</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 省略其他示例代码</span>

<span class="token comment">// 组件的字段设置</span>
<span class="token keyword">const</span> columnsOptions <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;标题&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">dataIndex</span><span class="token operator">:</span> <span class="token string">&#39;title&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">formType</span><span class="token operator">:</span> <span class="token string">&#39;input&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;作者&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">dataIndex</span><span class="token operator">:</span> <span class="token string">&#39;author&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">formType</span><span class="token operator">:</span> <span class="token string">&#39;input&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;浏览量&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">dataIndex</span><span class="token operator">:</span> <span class="token string">&#39;view_number&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">formType</span><span class="token operator">:</span> <span class="token string">&#39;input-number&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;状态&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">dataIndex</span><span class="token operator">:</span> <span class="token string">&#39;status&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">formType</span><span class="token operator">:</span> <span class="token string">&#39;radio&#39;</span><span class="token punctuation">,</span>
        <span class="token comment">// 定义字段交互控制</span>
        <span class="token function-variable function">control</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>val <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">view_number</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">display</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">created_at</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">display</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">author</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;我的标题改变咯&#39;</span> <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>val <span class="token operator">==</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">view_number</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">display</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">created_at</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">display</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">author</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;作者&#39;</span> <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;发布时间&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">dataIndex</span><span class="token operator">:</span> <span class="token string">&#39;created_at&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">formType</span><span class="token operator">:</span> <span class="token string">&#39;date&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span>

<span class="token comment">// 省略其他示例代码</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),o=[e];function l(r,i){return s(),a("div",null,o)}const k=n(t,[["render",l],["__file","control.html.vue"]]);export{k as default};
