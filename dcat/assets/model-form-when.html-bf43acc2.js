import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as p,o as e,c as o,b as s,d as n,e as c,w as l,a as i}from"./app-98225aba.js";const u="/dcat/assets/ltuZFPpEsD-50b98f18.gif",r={},k=s("h1",{id:"表单字段动态显示",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#表单字段动态显示","aria-hidden":"true"},"#"),n(" 表单字段动态显示")],-1),d=i('<p>表单字段动态显示是指，在选择表单项的指定的选项时，联动显示其他的表单项。</p><p><img src="'+u+`" alt="" loading="lazy">)</p><p>目前支持的表单联动的组件有：</p><ul><li><code>select</code></li><li><code>multipleSelect</code></li><li><code>radio</code></li><li><code>checkbox</code></li></ul><h2 id="使用方法" tabindex="-1"><a class="header-anchor" href="#使用方法" aria-hidden="true">#</a> 使用方法</h2><p>可以将上面的组件分为单选和多选两种类型，其中<code>select</code>、<code>radio</code>为单选组件，其它为多选组件</p><h3 id="单选组件" tabindex="-1"><a class="header-anchor" href="#单选组件" aria-hidden="true">#</a> 单选组件</h3><p>下面的例子中，选择不同的国籍类型，将会切换选择不同的联动表单项：</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token variable">$form</span><span class="token operator">-&gt;</span><span class="token function">radio</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;radio&#39;</span><span class="token punctuation">)</span>
    <span class="token operator">-&gt;</span><span class="token function">when</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token class-name type-declaration">Form</span> <span class="token variable">$form</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 值为1和4时显示文本框</span>
        <span class="token variable">$form</span><span class="token operator">-&gt;</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;text1&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token variable">$form</span><span class="token operator">-&gt;</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;text2&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token variable">$form</span><span class="token operator">-&gt;</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;text3&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token operator">-&gt;</span><span class="token function">when</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token class-name type-declaration">Form</span> <span class="token variable">$form</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token variable">$form</span><span class="token operator">-&gt;</span><span class="token function">editor</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;editor&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token operator">-&gt;</span><span class="token function">when</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token class-name type-declaration">Form</span> <span class="token variable">$form</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token variable">$form</span><span class="token operator">-&gt;</span><span class="token function">image</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;image&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token operator">-&gt;</span><span class="token function">options</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
        <span class="token number">1</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;显示文本框&#39;</span><span class="token punctuation">,</span>
        <span class="token number">2</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;显示编辑器&#39;</span><span class="token punctuation">,</span>
        <span class="token number">3</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;显示文件上传&#39;</span><span class="token punctuation">,</span>
        <span class="token number">4</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;还是显示文本框&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token operator">-&gt;</span><span class="token function">default</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上例中，方法<code>when(1, $callback)</code>等效于<code>when(&#39;=&#39;, 1, $callback)</code>, 如果用操作符<code>=</code>，则可以省略这个参数</p><p>同时也支持这些操作符，<code>=</code>、<code>&gt;</code>、<code>&gt;=</code>、<code>&lt;</code>、<code>&lt;=</code>、<code>!=</code>使用方法如下：</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token variable">$form</span><span class="token operator">-&gt;</span><span class="token function">radio</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;check&#39;</span><span class="token punctuation">)</span>
    <span class="token operator">-&gt;</span><span class="token function">when</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;&gt;&#39;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">when</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;&gt;=&#39;</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>select</code> 组件的使用方法和<code>radio</code>是一样的。</p><p>另外需要注意的是，如果使用动态显示功能之后表单不能使用<code>required</code>方法，应该使用<code>required_if</code>代替，如</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token variable">$form</span><span class="token operator">-&gt;</span><span class="token function">radio</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;type&#39;</span><span class="token punctuation">)</span>
    <span class="token operator">-&gt;</span><span class="token function">when</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token class-name type-declaration">Form</span> <span class="token variable">$form</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token variable">$form</span><span class="token operator">-&gt;</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;text1&#39;</span><span class="token punctuation">)</span>
            <span class="token operator">-&gt;</span><span class="token function">rules</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;required_if:type,1,4&#39;</span><span class="token punctuation">)</span> <span class="token comment">// 使用required_if</span>
            <span class="token operator">-&gt;</span><span class="token function">setLabelClass</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;asterisk&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 显示 * 号</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="多选组件" tabindex="-1"><a class="header-anchor" href="#多选组件" aria-hidden="true">#</a> 多选组件</h3><p>多选组件支持两个操作符：<code>in</code>、<code>notIn</code></p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token variable">$form</span><span class="token operator">-&gt;</span><span class="token function">checkbox</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;nationality&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;国籍&#39;</span><span class="token punctuation">)</span>
    <span class="token operator">-&gt;</span><span class="token function">options</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
        <span class="token number">1</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;中国&#39;</span><span class="token punctuation">,</span>
        <span class="token number">2</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;外国&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">when</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token class-name type-declaration">Form</span> <span class="token variable">$form</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> 

        <span class="token variable">$form</span><span class="token operator">-&gt;</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;name&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;姓名&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token variable">$form</span><span class="token operator">-&gt;</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;idcard&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;身份证&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">when</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;notIn&#39;</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token class-name type-declaration">Form</span> <span class="token variable">$form</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> 

        <span class="token variable">$form</span><span class="token operator">-&gt;</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;name&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;姓名&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token variable">$form</span><span class="token operator">-&gt;</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;passport&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;护照&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>multipleSelect</code>组件的使用方法和<code>checkbox</code>是一样的。</p><h3 id="布局" tabindex="-1"><a class="header-anchor" href="#布局" aria-hidden="true">#</a> 布局</h3><p>表单动态显示功能支持结合<code>column</code>以及<code>tab</code>布局功能一起使用，用法如下</p><p><code>tab</code>布局</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token variable">$form</span><span class="token operator">-&gt;</span><span class="token function">tab</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;Radio&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token class-name type-declaration">Form</span> <span class="token variable">$form</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token variable">$form</span><span class="token operator">-&gt;</span><span class="token function">display</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;title&#39;</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">value</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;单选框动态展示&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token variable">$form</span><span class="token operator">-&gt;</span><span class="token function">radio</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;radio&#39;</span><span class="token punctuation">)</span>
        <span class="token operator">-&gt;</span><span class="token function">when</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token class-name type-declaration">Form</span> <span class="token variable">$form</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token variable">$form</span><span class="token operator">-&gt;</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;text1&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token variable">$form</span><span class="token operator">-&gt;</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;text2&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token operator">-&gt;</span><span class="token function">when</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token class-name type-declaration">Form</span> <span class="token variable">$form</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token variable">$form</span><span class="token operator">-&gt;</span><span class="token function">editor</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;editor&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token operator">-&gt;</span><span class="token function">options</span><span class="token punctuation">(</span><span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">options</span><span class="token punctuation">)</span>
        <span class="token operator">-&gt;</span><span class="token function">default</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>column</code>布局</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token variable">$form</span><span class="token operator">-&gt;</span><span class="token function">column</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token class-name type-declaration">Form</span> <span class="token variable">$form</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token variable">$form</span><span class="token operator">-&gt;</span><span class="token function">radio</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;radio&#39;</span><span class="token punctuation">)</span>
        <span class="token operator">-&gt;</span><span class="token function">when</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token class-name type-declaration">Form</span> <span class="token variable">$form</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token variable">$form</span><span class="token operator">-&gt;</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;text1&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token variable">$form</span><span class="token operator">-&gt;</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;text2&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token operator">-&gt;</span><span class="token function">when</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token class-name type-declaration">Form</span> <span class="token variable">$form</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token variable">$form</span><span class="token operator">-&gt;</span><span class="token function">editor</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;editor&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token operator">-&gt;</span><span class="token function">options</span><span class="token punctuation">(</span><span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">options</span><span class="token punctuation">)</span>
        <span class="token operator">-&gt;</span><span class="token function">default</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,25);function g(v,m){const a=p("RouterLink");return e(),o("div",null,[k,s("blockquote",null,[s("p",null,[n("{tip} 此功能在"),c(a,{to:"/zh/guide/widgets-form.html"},{default:l(()=>[n("工具表单")]),_:1}),n("中一样有效")])]),d])}const h=t(r,[["render",g],["__file","model-form-when.html.vue"]]);export{h as default};
