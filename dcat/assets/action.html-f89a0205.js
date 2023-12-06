import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o as p,c as o,a as c,b as n,d as i,w as l,e as s}from"./app-c17653d8.js";const u="/dcat/assets/gp8ICoYPks-adf351ef.png",d={},r=s(`<h1 id="动作基本使用" tabindex="-1"><a class="header-anchor" href="#动作基本使用" aria-hidden="true">#</a> 动作基本使用</h1><p>开发者通过 <code>Action</code> 动作类可以非常方便的开发出一个含有特定功能的操作，可以非常方便的让用户与服务器产生交互。</p><p>例如，页面上需要一个按钮，用户点击之后可以向服务器发起请求，通过弹窗展示当前登录用户的信息，那么这个功能按钮就可以用 <code>Action</code> 来开发。</p><h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h2><p>下面我们就开始开发一个用于查看登录用户信息的按钮：</p><h3 id="使用命令创建action类" tabindex="-1"><a class="header-anchor" href="#使用命令创建action类" aria-hidden="true">#</a> 使用命令创建Action类</h3><p>首先需要先创建 <code>Action</code> 类，运行命令</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan admin:action
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>运行成功之后会看到命令窗口出现如下信息，让开发者选择一个 <code>Action</code> 类的类型，这里我们输入 <code>0</code> 就行</p><blockquote><p>{tip} <code>default</code>类型的动作类，可以用在页面的任意位置。</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> Which <span class="token builtin class-name">type</span> of action would you like to make?:
  <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> default
  <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> grid-batch
  <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> grid-row
  <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span> grid-tool
  <span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span> form-tool
  <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span> show-tool
  <span class="token punctuation">[</span><span class="token number">6</span><span class="token punctuation">]</span> tree-tool
 <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token comment"># 输入 0</span>
 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接着输入 <code>Action</code> 类名称，这里需要输入 <code>大驼峰</code> 风格的英文字母</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>
 Please enter a name of action class:
 <span class="token operator">&gt;</span> ShowCurrentAdminUser

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>类名输入完成之后会出现以下信息让开发者输入类的命名空间，默认的命名空间是 <code>App\\Admin\\Actions</code>，这里我们直接按回车跳过就行了</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>
 Please enter the namespace of action class <span class="token punctuation">[</span>App<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Actions<span class="token punctuation">]</span>:
 <span class="token operator">&gt;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样一个 <code>Action</code> 类就创建完成了，刚刚创建的类路径是 <code>app/Admin/Actions/ShowCurrentAdminUser.php</code></p><h3 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h3><p>修改 <code>Action</code> 类如下</p><blockquote><p>{tip} 如果你的动作类中需要通过构造方法传递参数，则一定要给构造方法的所有参数都设置一个默认值！</p></blockquote><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>

<span class="token keyword">namespace</span> <span class="token package">App<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Actions</span><span class="token punctuation">;</span>

<span class="token keyword">use</span> <span class="token package">Dcat<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Admin</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Dcat<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Widgets<span class="token punctuation">\\</span>Table</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Dcat<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Actions<span class="token punctuation">\\</span>Action</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Dcat<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Actions<span class="token punctuation">\\</span>Response</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Dcat<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Traits<span class="token punctuation">\\</span>HasPermissions</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Contracts<span class="token punctuation">\\</span>Auth<span class="token punctuation">\\</span>Authenticatable</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Database<span class="token punctuation">\\</span>Eloquent<span class="token punctuation">\\</span>Model</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Http<span class="token punctuation">\\</span>Request</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">ShowCurrentAdminUser</span> <span class="token keyword">extends</span> <span class="token class-name">Action</span>
<span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * 按钮标题
     *
     * <span class="token keyword">@var</span> <span class="token class-name"><span class="token keyword">string</span></span>
     */</span>
    <span class="token keyword">protected</span> <span class="token variable">$title</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;个人信息&#39;</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * <span class="token keyword">@var</span> <span class="token class-name"><span class="token keyword">string</span></span>
     */</span>
    <span class="token keyword">protected</span> <span class="token variable">$modalId</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;show-current-user&#39;</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 处理当前动作的请求接口，如果不需要请直接删除
     *
     * <span class="token keyword">@param</span> <span class="token class-name">Request</span> <span class="token parameter">$request</span>
     *
     * <span class="token keyword">@return</span> <span class="token class-name">Response</span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">handle</span><span class="token punctuation">(</span><span class="token class-name type-declaration">Request</span> <span class="token variable">$request</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// 获取当前登录用户模型</span>
        <span class="token variable">$user</span> <span class="token operator">=</span> <span class="token class-name static-context">Admin</span><span class="token operator">::</span><span class="token function">user</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 这里我们用表格展示模型数据</span>
        <span class="token variable">$table</span> <span class="token operator">=</span> <span class="token class-name static-context">Table</span><span class="token operator">::</span><span class="token function">make</span><span class="token punctuation">(</span><span class="token variable">$user</span><span class="token operator">-&gt;</span><span class="token function">toArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">response</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token operator">-&gt;</span><span class="token function">success</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;查询成功&#39;</span><span class="token punctuation">)</span>
            <span class="token operator">-&gt;</span><span class="token function">html</span><span class="token punctuation">(</span><span class="token variable">$table</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 处理响应的HTML字符串，附加到弹窗节点中
     *
     * <span class="token keyword">@return</span> <span class="token class-name"><span class="token keyword">string</span></span>
     */</span>
    <span class="token keyword">protected</span> <span class="token keyword">function</span> <span class="token function-definition function">handleHtmlResponse</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string nowdoc-string"><span class="token delimiter symbol"><span class="token punctuation">&lt;&lt;&lt;&#39;</span>JS<span class="token punctuation">&#39;</span></span>
function (target, html, data) {
    var $modal = $(target.data(&#39;target&#39;)); 
    
    $modal.find(&#39;.modal-body&#39;).html(html)
    $modal.modal(&#39;show&#39;)
}        
<span class="token delimiter symbol">JS<span class="token punctuation">;</span></span></span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 设置HTML标签的属性
     *
     * <span class="token keyword">@return</span> <span class="token class-name"><span class="token keyword">void</span></span>
     */</span>
    <span class="token keyword">protected</span> <span class="token keyword">function</span> <span class="token function-definition function">setupHtmlAttributes</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// 添加class</span>
        <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">addHtmlClass</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;btn btn-primary&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 保存弹窗的ID</span>
        <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">setHtmlAttribute</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;data-target&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;#&#39;</span><span class="token operator">.</span><span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">modalId</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword static-context">parent</span><span class="token operator">::</span><span class="token function">setupHtmlAttributes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 设置按钮的HTML，这里我们需要附加上弹窗的HTML
     *
     * <span class="token keyword">@return</span> <span class="token class-name"><span class="token keyword">string</span><span class="token punctuation">|</span><span class="token keyword">void</span></span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">html</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// 按钮的html</span>
        <span class="token variable">$html</span> <span class="token operator">=</span> <span class="token keyword static-context">parent</span><span class="token operator">::</span><span class="token function">html</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">return</span> <span class="token string heredoc-string"><span class="token delimiter symbol"><span class="token punctuation">&lt;&lt;&lt;</span>HTML</span>
<span class="token interpolation"><span class="token punctuation">{</span><span class="token variable">$html</span><span class="token punctuation">}</span></span>        
&lt;div class=&quot;modal fade&quot; id=&quot;<span class="token interpolation"><span class="token punctuation">{</span><span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">modalId</span><span class="token punctuation">}</span></span>&quot; tabindex=&quot;-1&quot; role=&quot;dialog&quot;&gt;
  &lt;div class=&quot;modal-dialog modal-lg&quot; role=&quot;document&quot;&gt;
    &lt;div class=&quot;modal-content&quot;&gt;
      &lt;div class=&quot;modal-header&quot;&gt;
        &lt;button type=&quot;button&quot; class=&quot;close&quot; data-dismiss=&quot;modal&quot; aria-label=&quot;Close&quot;&gt;&lt;span aria-hidden=&quot;true&quot;&gt;&amp;times;&lt;/span&gt;&lt;/button&gt;
        &lt;h4 class=&quot;modal-title&quot;&gt;<span class="token interpolation"><span class="token punctuation">{</span><span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">title</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>&lt;/h4&gt;
      &lt;/div&gt;
      &lt;div class=&quot;modal-body&quot;&gt;&lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;
<span class="token delimiter symbol">HTML<span class="token punctuation">;</span></span></span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 确认弹窗信息，如不需要可以删除此方法 
     *
     * <span class="token keyword">@return</span> <span class="token class-name"><span class="token keyword">string</span><span class="token punctuation">|</span><span class="token keyword">void</span></span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">confirm</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// return [&#39;Confirm?&#39;, &#39;contents&#39;];</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 动作权限判断，返回false则表示无权限，如果不需要可以删除此方法
     *
     * <span class="token keyword">@param</span> <span class="token class-name">Model<span class="token punctuation">|</span>Authenticatable<span class="token punctuation">|</span>HasPermissions<span class="token punctuation">|</span><span class="token keyword">null</span></span> <span class="token parameter">$user</span>
     *
     * <span class="token keyword">@return</span> <span class="token class-name"><span class="token keyword">bool</span></span>
     */</span>
    <span class="token keyword">protected</span> <span class="token keyword">function</span> <span class="token function-definition function">authorize</span><span class="token punctuation">(</span><span class="token variable">$user</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">bool</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token constant boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 通过这个方法可以设置动作发起请求时需要附带的参数，如果不需要可以删除此方法
     *
     * <span class="token keyword">@return</span> <span class="token class-name"><span class="token keyword">array</span></span>
     */</span>
    <span class="token keyword">protected</span> <span class="token keyword">function</span> <span class="token function-definition function">parameters</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>修改完之后就可以开始使用了</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>

<span class="token keyword">use</span> <span class="token package">App<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Actions<span class="token punctuation">\\</span>ShowCurrentAdminUser</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">IndexController</span>
<span class="token punctuation">{</span>
	<span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">index</span><span class="token punctuation">(</span><span class="token class-name type-declaration">Content</span> <span class="token variable">$content</span><span class="token punctuation">)</span>
	<span class="token punctuation">{</span>
	    <span class="token keyword">return</span> <span class="token variable">$content</span><span class="token operator">-&gt;</span><span class="token function">body</span><span class="token punctuation">(</span><span class="token class-name static-context">ShowCurrentAdminUser</span><span class="token operator">::</span><span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>效果如下</p><p><img src="`+u+`" alt="" loading="lazy"></p><h2 id="属性" tabindex="-1"><a class="header-anchor" href="#属性" aria-hidden="true">#</a> 属性</h2><p><code>Dcat\\Admin\\Actions\\Action</code> 类可用属性说明</p><table><thead><tr><th>属性名</th><th>类型</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td>title</td><td><code>string</code></td><td></td><td>标题</td></tr><tr><td>selectorPrefix</td><td><code>public</code> <code>string</code></td><td><code>.admin-action-</code></td><td>目标元素的<code>Css</code>选择器</td></tr><tr><td>method</td><td><code>string</code></td><td><code>POST</code></td><td>与服务器交互的请求方法</td></tr><tr><td>event</td><td><code>string</code></td><td><code>click</code></td><td>目标元素绑定的事件，默认为点击事件</td></tr><tr><td>disabled</td><td><code>bool</code></td><td><code>false</code></td><td>是否渲染动作元素，设置<code>true</code>则不渲染</td></tr><tr><td>usingHandler</td><td><code>bool</code></td><td><code>true</code></td><td>当此属性设置为<code>false</code>，则无论<code>Action</code>中是否包含<code>handle</code>方法都不会向服务器发起请求</td></tr></tbody></table><h2 id="方法" tabindex="-1"><a class="header-anchor" href="#方法" aria-hidden="true">#</a> 方法</h2><p><code>Dcat\\Admin\\Actions\\Action</code> 类方法说明</p><h3 id="创建实例-make" tabindex="-1"><a class="header-anchor" href="#创建实例-make" aria-hidden="true">#</a> 创建实例 (make)</h3><p>此方法是一个静态方法，用于实例化动作类</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token variable">$action</span> <span class="token operator">=</span> <span class="token class-name static-context">MyAction</span><span class="token operator">::</span><span class="token function">make</span><span class="token punctuation">(</span><span class="token variable">$param1</span><span class="token punctuation">,</span> <span class="token variable">$param2</span><span class="token operator">...</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="处理请求-handle" tabindex="-1"><a class="header-anchor" href="#处理请求-handle" aria-hidden="true">#</a> 处理请求 (handle)</h3><p>当<code>Action</code>类中包含此方法之时，目标元素会被绑定通过<code>event</code>属性设置的事件（默认为<code>click</code>）。如果事件被触发，则会向服务器发起请求，而<code>handle</code>方法则可以处理并响应此请求。</p><blockquote><p>{tip} 如果没有此方法，则目标元素不会被绑定事件。</p></blockquote><h3 id="响应-response" tabindex="-1"><a class="header-anchor" href="#响应-response" aria-hidden="true">#</a> 响应 (response)</h3>`,36),k=s(`<h3 id="设置请求数据-parameters" tabindex="-1"><a class="header-anchor" href="#设置请求数据-parameters" aria-hidden="true">#</a> 设置请求数据 (parameters)</h3><p>通过这个方法可以设置动作发起请求时需要附带的参数</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>

<span class="token keyword">use</span> <span class="token package">Dcat<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Actions<span class="token punctuation">\\</span>Action</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Http<span class="token punctuation">\\</span>Request</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">MyAction</span> <span class="token keyword">extends</span> <span class="token class-name">Action</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">handle</span><span class="token punctuation">(</span><span class="token class-name type-declaration">Request</span> <span class="token variable">$request</span><span class="token punctuation">)</span> 
    <span class="token punctuation">{</span>
        <span class="token comment">// 接收参数</span>
        <span class="token variable">$key1</span> <span class="token operator">=</span> <span class="token variable">$request</span><span class="token operator">-&gt;</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;key1&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token variable">$key2</span> <span class="token operator">=</span> <span class="token variable">$request</span><span class="token operator">-&gt;</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;key2&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">response</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">success</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;成功！&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">parameters</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">[</span>
        	<span class="token string single-quoted-string">&#39;key1&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;value1&#39;</span><span class="token punctuation">,</span>
        	<span class="token string single-quoted-string">&#39;key2&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;value2&#39;</span><span class="token punctuation">,</span>    
		<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="确认弹窗-confirm" tabindex="-1"><a class="header-anchor" href="#确认弹窗-confirm" aria-hidden="true">#</a> 确认弹窗 (confirm)</h3><p>设置确认信息，此方法要求返回一个<code>string</code>类型参数。</p><p>当此方法返回值不为空时会加入确认窗功能，当事件被触发时自动弹出确认框，点击确认后才会进行下一步操作。</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">confirm</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token string single-quoted-string">&#39;你确定要删除此行内容吗？&#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>显示弹窗标题和内容</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">confirm</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;你确定要删除此行内容吗？&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;弹窗内容&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="发起请求之前执行的js代码-actionscript" tabindex="-1"><a class="header-anchor" href="#发起请求之前执行的js代码-actionscript" aria-hidden="true">#</a> 发起请求之前执行的JS代码 (actionScript)</h3><p>设置动作执行的前置<code>js</code>代码，当按钮绑定的事件被触发后，发起请求之前会执行通过此方法设置的<code>js</code>代码，此方法要求返回一个<code>js</code>的匿名函数。</p><p><code>js</code>匿名函数接收以下三个参数：</p><ul><li><code>data</code> <code>object</code> 需要传递给接口的数据对象</li><li><code>target</code> <code>object</code> 动作按钮的<code>jQuery</code>对象</li><li><code>action</code> <code>object</code> 动作的管理对象</li></ul><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">protected</span> <span class="token keyword">function</span> <span class="token function-definition function">actionScript</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token operator">&lt;&lt;</span><span class="token operator">&lt;</span><span class="token constant">JS</span>
<span class="token keyword">function</span> <span class="token punctuation">(</span>data<span class="token punctuation">,</span> target<span class="token punctuation">,</span> action<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token operator">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;发起请求之前&#39;</span><span class="token punctuation">,</span> data<span class="token punctuation">,</span> target<span class="token punctuation">,</span> action<span class="token punctuation">)</span><span class="token punctuation">;</span>
    
    <span class="token comment">// return false; 在这里return false可以终止执行后面的操作	</span>
    
    <span class="token comment">// 更改传递到接口的主键值</span>
    action<span class="token operator">.</span>options<span class="token operator">.</span>key <span class="token operator">=</span> <span class="token number">123</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token constant">JS</span>	
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="处理服务器响应的html代码-handlehtmlresponse" tabindex="-1"><a class="header-anchor" href="#处理服务器响应的html代码-handlehtmlresponse" aria-hidden="true">#</a> 处理服务器响应的HTML代码 (handleHtmlResponse)</h3><p>处理服务器响应的<code>HTML</code>代码，此方法要求返回一个<code>js</code>匿名函数。</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">protected</span> <span class="token keyword">function</span> <span class="token function-definition function">handleHtmlResponse</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string nowdoc-string"><span class="token delimiter symbol"><span class="token punctuation">&lt;&lt;&lt;&#39;</span>JS<span class="token punctuation">&#39;</span></span>
function (target, html, data) {
    // target 参数是动作按钮的JQ对象
    // html 参数是接口返回HTML字符串
    // data 参数是接口返回的完整数据的json对象

    target.html(html);
}
<span class="token delimiter symbol">JS<span class="token punctuation">;</span></span></span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="权限-authorize" tabindex="-1"><a class="header-anchor" href="#权限-authorize" aria-hidden="true">#</a> 权限 (authorize)</h3><p>此方法用于判断登录用户的操作权限，默认返回<code>true</code></p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">protected</span> <span class="token keyword">function</span> <span class="token function-definition function">authorize</span><span class="token punctuation">(</span><span class="token variable">$user</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">bool</span>
<span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token variable">$user</span><span class="token operator">-&gt;</span><span class="token function">can</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;do-action&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="无权限响应-failedauthorization" tabindex="-1"><a class="header-anchor" href="#无权限响应-failedauthorization" aria-hidden="true">#</a> 无权限响应 (failedAuthorization)</h3><p>此方法用于设置鉴权失败的响应内容，如果需要则可覆写此方法</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">failedAuthorization</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">response</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token function">__</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;admin.deny&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="隐藏或显示-disable" tabindex="-1"><a class="header-anchor" href="#隐藏或显示-disable" aria-hidden="true">#</a> 隐藏或显示 (disable)</h3><p>设置显示或隐藏此动作</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token comment">// 隐藏</span>
<span class="token class-name static-context">MyAction</span><span class="token operator">::</span><span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">disable</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 显示</span>
<span class="token class-name static-context">MyAction</span><span class="token operator">::</span><span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">disable</span><span class="token punctuation">(</span><span class="token constant boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="判断是否显示-allowed" tabindex="-1"><a class="header-anchor" href="#判断是否显示-allowed" aria-hidden="true">#</a> 判断是否显示 (allowed)</h3><p>判断动作是否允许显示</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token class-name static-context">MyAction</span><span class="token operator">::</span><span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">allowed</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token operator">...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="设置主键-setkey" tabindex="-1"><a class="header-anchor" href="#设置主键-setkey" aria-hidden="true">#</a> 设置主键 (setKey)</h3><p>设置数据主键</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token variable">$id</span> <span class="token operator">=</span> <span class="token operator">...</span><span class="token punctuation">;</span>

<span class="token class-name static-context">MyAction</span><span class="token operator">::</span><span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">setKey</span><span class="token punctuation">(</span><span class="token variable">$id</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="获取主键值-getkey" tabindex="-1"><a class="header-anchor" href="#获取主键值-getkey" aria-hidden="true">#</a> 获取主键值 (getKey)</h3><p>获取数据主键，此方法在<code>handle</code>方法内也同样可用</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>

<span class="token keyword">use</span> <span class="token package">Dcat<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Actions<span class="token punctuation">\\</span>Action</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Http<span class="token punctuation">\\</span>Request</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">MyAction</span> <span class="token keyword">extends</span> <span class="token class-name">Action</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">handle</span><span class="token punctuation">(</span><span class="token class-name type-declaration">Request</span> <span class="token variable">$request</span><span class="token punctuation">)</span> 
    <span class="token punctuation">{</span>
        <span class="token variable">$id</span> <span class="token operator">=</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">getKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        <span class="token operator">...</span>
        
        <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">response</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">success</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;成功！&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">title</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string double-quoted-string">&quot;标题 <span class="token interpolation"><span class="token punctuation">{</span><span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">key</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="获取目标元素样式-getelementclass" tabindex="-1"><a class="header-anchor" href="#获取目标元素样式-getelementclass" aria-hidden="true">#</a> 获取目标元素样式 (getElementClass)</h3><p>获取动作目标元素（按钮）的<code>class</code></p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token variable">$class</span> <span class="token operator">=</span> <span class="token class-name static-context">MyAction</span><span class="token operator">::</span><span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">getElementClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="获取目标元素的css选择器-selector" tabindex="-1"><a class="header-anchor" href="#获取目标元素的css选择器-selector" aria-hidden="true">#</a> 获取目标元素的Css选择器 (selector)</h3><p>获取动作目标元素（按钮）的CSS选择器</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token variable">$selector</span> <span class="token operator">=</span> <span class="token class-name static-context">MyAction</span><span class="token operator">::</span><span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">selector</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token class-name static-context">Admin</span><span class="token operator">::</span><span class="token function">script</span><span class="token punctuation">(</span>
	<span class="token operator">&lt;&lt;</span><span class="token operator">&lt;</span><span class="token class-name type-declaration">JS</span>
	$<span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;$selector&#39;</span><span class="token punctuation">)</span><span class="token operator">.</span><span class="token function">click</span><span class="token punctuation">(</span><span class="token operator">...</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token constant">JS</span>	
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="追加样式-addhtmlclass" tabindex="-1"><a class="header-anchor" href="#追加样式-addhtmlclass" aria-hidden="true">#</a> 追加样式 (addHtmlClass)</h3><p>追加获取动作目标元素（按钮）的<code>class</code></p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token class-name static-context">MyAction</span><span class="token operator">::</span><span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">addHtmlClass</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;btn btn-primary&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token class-name static-context">MyAction</span><span class="token operator">::</span><span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">addHtmlClass</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;btn&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;btn-primary&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="设置目标元素的html-html" tabindex="-1"><a class="header-anchor" href="#设置目标元素的html-html" aria-hidden="true">#</a> 设置目标元素的HTML (html)</h3><p>此方法用于设置动作目标元素的<code>HTML</code>代码，如有需要可以覆写</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">protected</span> <span class="token keyword">function</span> <span class="token function-definition function">html</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token string heredoc-string"><span class="token delimiter symbol"><span class="token punctuation">&lt;&lt;&lt;</span>HTML</span>
&lt;a <span class="token interpolation"><span class="token punctuation">{</span><span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">formatHtmlAttributes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>&gt;<span class="token interpolation"><span class="token punctuation">{</span><span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">title</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>&lt;/a&gt;
<span class="token delimiter symbol">HTML<span class="token punctuation">;</span></span></span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="添加js代码-script" tabindex="-1"><a class="header-anchor" href="#添加js代码-script" aria-hidden="true">#</a> 添加JS代码 (script)</h3><p>此方法用于在<code>render</code>方法执行完毕之前添加<code>JS</code>代码</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">protected</span> <span class="token keyword">function</span> <span class="token function-definition function">script</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token string heredoc-string"><span class="token delimiter symbol"><span class="token punctuation">&lt;&lt;&lt;</span>JS</span>
console.log(&#39;...&#39;)
<span class="token delimiter symbol">JS<span class="token punctuation">;</span></span></span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="设置目标元素的html属性-sethtmlattribute" tabindex="-1"><a class="header-anchor" href="#设置目标元素的html属性-sethtmlattribute" aria-hidden="true">#</a> 设置目标元素的HTML属性 (setHtmlAttribute)</h3><p>设置目标元素的<code>HTML</code>标签属性</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token class-name static-context">MyAction</span><span class="token operator">::</span><span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">setHtmlAttribute</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;name&#39;</span><span class="token punctuation">,</span> <span class="token variable">$value</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 批量设置</span>
<span class="token class-name static-context">MyAction</span><span class="token operator">::</span><span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">setHtmlAttribute</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;name&#39;</span> <span class="token operator">=&gt;</span> <span class="token variable">$value</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,53);function v(m,b){const a=t("RouterLink");return p(),o("div",null,[r,c("p",null,[n("参考 "),i(a,{to:"/zh/guide/response.html"},{default:l(()=>[n("动作以及表单响应")]),_:1}),n(" 章节")]),k])}const f=e(d,[["render",v],["__file","action.html.vue"]]);export{f as default};
