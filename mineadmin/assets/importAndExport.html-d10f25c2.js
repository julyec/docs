import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as e,o as p,c as o,b as n,e as s,d as c,a as l}from"./app-719eb5cf.js";const i={},u=n("h1",{id:"导入与导出",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#导入与导出","aria-hidden":"true"},"#"),s(" 导入与导出")],-1),r=n("p",null,"对于企业来讲，对报表之类的数据很重视，往往需要经常导出数据。而财务或者销售相关的数据会经常按月或季度来导入到系统。",-1),d={href:"/further/backend/annotation.html#excel%E7%9B%B8%E5%85%B3%E6%B3%A8%E8%A7%A3",target:"_blank",rel:"noopener noreferrer"},k=l(`<h2 id="前提准备" tabindex="-1"><a class="header-anchor" href="#前提准备" aria-hidden="true">#</a> 前提准备</h2><div class="hint-container tip"><p class="hint-container-title">Tips</p><p>首先我们要创建一个<code>DTO（data to object）</code>类，该类要实现 <code>MineModelExcel</code> 接口（目前是个空接口，不需要做任何实现）</p><p>在类上面加上 <code>#[ExcelData]</code> 注解，类里面定义类属性，映射要 <code>导入/导出</code> 的数据库字段，该字段上面加上 <code>@ExcelProperty</code> 注解。</p><p>并且注解里设置相关属性，其中 <code>value</code> 和 <code>index</code> 是必须设置的项</p></div><ul><li>示例代码：</li></ul><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
<span class="token keyword">namespace</span> <span class="token package">App<span class="token punctuation">\\</span>System<span class="token punctuation">\\</span>Dto</span><span class="token punctuation">;</span>

<span class="token keyword">use</span> <span class="token package">Mine<span class="token punctuation">\\</span>Interfaces<span class="token punctuation">\\</span>MineModelExcel</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Mine<span class="token punctuation">\\</span>Annotation<span class="token punctuation">\\</span>ExcelData</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Mine<span class="token punctuation">\\</span>Annotation<span class="token punctuation">\\</span>ExcelProperty</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * 用户数据对象类
 */</span>
<span class="token attribute"><span class="token delimiter punctuation">#[</span><span class="token attribute-content"><span class="token attribute-class-name class-name">ExcelData</span></span><span class="token delimiter punctuation">]</span></span>
<span class="token keyword">class</span> <span class="token class-name-definition class-name">UserDto</span> <span class="token keyword">implements</span> <span class="token class-name">MineModelExcel</span>
<span class="token punctuation">{</span>
    <span class="token attribute"><span class="token delimiter punctuation">#[</span><span class="token attribute-content"><span class="token attribute-class-name class-name">ExcelProperty</span><span class="token punctuation">(</span><span class="token attribute-class-name class-name">value</span><span class="token operator">=</span><span class="token string double-quoted-string">&quot;用户名&quot;</span><span class="token punctuation">,</span> <span class="token attribute-class-name class-name">index</span><span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token attribute-class-name class-name">width</span><span class="token operator">=</span><span class="token number">20</span><span class="token punctuation">)</span></span><span class="token delimiter punctuation">]</span></span>
    <span class="token keyword">public</span> <span class="token keyword type-declaration">string</span> <span class="token variable">$username</span><span class="token punctuation">;</span>

    <span class="token attribute"><span class="token delimiter punctuation">#[</span><span class="token attribute-content"><span class="token attribute-class-name class-name">ExcelProperty</span><span class="token punctuation">(</span><span class="token attribute-class-name class-name">value</span><span class="token operator">=</span><span class="token string double-quoted-string">&quot;昵称&quot;</span><span class="token punctuation">,</span> <span class="token attribute-class-name class-name">index</span><span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token attribute-class-name class-name">width</span><span class="token operator">=</span><span class="token number">15</span><span class="token punctuation">)</span></span><span class="token delimiter punctuation">]</span></span>
    <span class="token keyword">public</span> <span class="token keyword type-declaration">string</span> <span class="token variable">$nickname</span><span class="token punctuation">;</span>
    
    <span class="token attribute"><span class="token delimiter punctuation">#[</span><span class="token attribute-content"><span class="token attribute-class-name class-name">ExcelProperty</span><span class="token punctuation">(</span><span class="token attribute-class-name class-name">value</span><span class="token operator">=</span><span class="token string double-quoted-string">&quot;手机&quot;</span><span class="token punctuation">,</span> <span class="token attribute-class-name class-name">index</span><span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token attribute-class-name class-name">width</span><span class="token operator">=</span><span class="token number">15</span><span class="token punctuation">)</span></span><span class="token delimiter punctuation">]</span></span>
    <span class="token keyword">public</span> <span class="token keyword type-declaration">string</span> <span class="token variable">$phone</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="数据导出" tabindex="-1"><a class="header-anchor" href="#数据导出" aria-hidden="true">#</a> 数据导出</h2><h3 id="快捷导出" tabindex="-1"><a class="header-anchor" href="#快捷导出" aria-hidden="true">#</a> 快捷导出</h3><div class="hint-container tip"><p class="hint-container-title">Tips</p><p>由于在 <code>ServiceTrait</code> 封装好了导出功能，在控制器只需要调用即可</p></div><ul><li>export方法参数列表</li></ul><table><thead><tr><th style="text-align:center;">参数</th><th style="text-align:center;">类型</th><th style="text-align:center;">说明</th><th style="text-align:center;">默认值</th></tr></thead><tbody><tr><td style="text-align:center;">$params</td><td style="text-align:center;">Array</td><td style="text-align:center;">接收一个数组，用于数据条件筛选</td><td style="text-align:center;">-</td></tr><tr><td style="text-align:center;">$dto</td><td style="text-align:center;">String</td><td style="text-align:center;">设置dto类的引用命名空间</td><td style="text-align:center;">-</td></tr><tr><td style="text-align:center;">$filename</td><td style="text-align:center;">String</td><td style="text-align:center;">要导出的excel文件名称</td><td style="text-align:center;">默认以数据表名作为文件名</td></tr></tbody></table><ul><li>示例代码：</li></ul><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token doc-comment comment">/**
 * 用户导出
 * <span class="token keyword">@throws</span> <span class="token class-name"><span class="token punctuation">\\</span>PhpOffice<span class="token punctuation">\\</span>PhpSpreadsheet<span class="token punctuation">\\</span>Writer<span class="token punctuation">\\</span>Exception</span>
 * <span class="token keyword">@return</span> <span class="token class-name">ResponseInterface</span>
 */</span>
<span class="token attribute"><span class="token delimiter punctuation">#[</span><span class="token attribute-content"><span class="token attribute-class-name class-name">PostMapping</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;export&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token attribute-class-name class-name">Permission</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;system:user:export&quot;</span><span class="token punctuation">)</span></span><span class="token delimiter punctuation">]</span></span>
<span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">export</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token class-name return-type">ResponseInterface</span>
<span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">service</span><span class="token operator">-&gt;</span><span class="token function">export</span><span class="token punctuation">(</span><span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">request</span><span class="token operator">-&gt;</span><span class="token function">all</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token class-name class-name-fully-qualified static-context"><span class="token punctuation">\\</span>App<span class="token punctuation">\\</span>System<span class="token punctuation">\\</span>Dto<span class="token punctuation">\\</span>UserDto</span><span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;用户列表&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="自定义导出" tabindex="-1"><a class="header-anchor" href="#自定义导出" aria-hidden="true">#</a> 自定义导出</h3><div class="hint-container tip"><p class="hint-container-title">Tips</p><p>上述使用是没有大的需求情况下，使用系统封装好的方法直接调用导出，在业务复杂的情况下，那么就需要自定义导出了</p></div><ul><li>使用 <code>\\Mine\\MineCollection</code> 下的 <code>export</code> 实现自定义导出</li><li>该方法第三个参数，支持传入一个<code>匿名函数</code>，自己实现获取数据方法，最后返回一个 <code>array</code> 即可。 也可以直接传入一个数据集合。</li></ul><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token keyword">string</span></span> <span class="token parameter">$dto</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token keyword">string</span></span> <span class="token parameter">$filename</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token keyword">null</span><span class="token punctuation">|</span>Closure<span class="token punctuation">|</span><span class="token keyword">array</span></span> <span class="token parameter">$closure</span>
 */</span>
<span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name class-name-fully-qualified"><span class="token punctuation">\\</span>Mine<span class="token punctuation">\\</span>MineCollection</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">export</span><span class="token punctuation">(</span><span class="token variable">$dto</span><span class="token punctuation">,</span> <span class="token variable">$filename</span><span class="token punctuation">,</span> <span class="token variable">$closure</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>示例代码：</li></ul><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token comment">// 传入匿名函数</span>
<span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name class-name-fully-qualified"><span class="token punctuation">\\</span>Mine<span class="token punctuation">\\</span>MineCollection</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">export</span><span class="token punctuation">(</span><span class="token variable">$dto</span><span class="token punctuation">,</span> <span class="token variable">$filename</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token class-name static-context">SystemUser</span><span class="token operator">::</span><span class="token function">query</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">where</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;age&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;&lt;&#39;</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">toArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 传入数据集合</span>
<span class="token variable">$data</span> <span class="token operator">=</span> <span class="token class-name static-context">SystemUser</span><span class="token operator">::</span><span class="token function">query</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">where</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;age&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;&lt;&#39;</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">toArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name class-name-fully-qualified"><span class="token punctuation">\\</span>Mine<span class="token punctuation">\\</span>MineCollection</span><span class="token punctuation">(</span><span class="token variable">$data</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">export</span><span class="token punctuation">(</span><span class="token variable">$dto</span><span class="token punctuation">,</span> <span class="token variable">$filename</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 或者</span>
<span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name class-name-fully-qualified"><span class="token punctuation">\\</span>Mine<span class="token punctuation">\\</span>MineCollection</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">export</span><span class="token punctuation">(</span><span class="token variable">$dto</span><span class="token punctuation">,</span> <span class="token variable">$filename</span><span class="token punctuation">,</span> <span class="token variable">$data</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="导出空模板" tabindex="-1"><a class="header-anchor" href="#导出空模板" aria-hidden="true">#</a> 导出空模板</h3><p>一样使用自定义导出的方法，只需要把第三个参数传入一个空数组即可</p><ul><li>示例代码：</li></ul><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">MineCollection</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">export</span><span class="token punctuation">(</span><span class="token class-name class-name-fully-qualified static-context"><span class="token punctuation">\\</span>App<span class="token punctuation">\\</span>System<span class="token punctuation">\\</span>Dto<span class="token punctuation">\\</span>UserDto</span><span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;用户导入模板&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="数据导入" tabindex="-1"><a class="header-anchor" href="#数据导入" aria-hidden="true">#</a> 数据导入</h2><div class="hint-container tip"><p class="hint-container-title">Tips</p><p>数据导入首先必须提供一个 <code>空模板</code>，按照模板去填充数据，再上传服务器即可。</p><p>MineAdmin 封装了一套简便的使用方法，只需要在 <code>控制器</code> 调用 <code>业务服务层</code> 的 <code>import</code> 方法即可</p></div><h3 id="快捷导入" tabindex="-1"><a class="header-anchor" href="#快捷导入" aria-hidden="true">#</a> 快捷导入</h3><ul><li><code>import</code> 方法接收 <code>dto</code> 类的引用命名空间地址</li><li>示例代码：</li></ul><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token doc-comment comment">/**
 * 用户导入
 * <span class="token keyword">@return</span> <span class="token class-name">ResponseInterface</span>
 * <span class="token keyword">@throws</span> <span class="token class-name"><span class="token punctuation">\\</span>PhpOffice<span class="token punctuation">\\</span>PhpSpreadsheet<span class="token punctuation">\\</span>Reader<span class="token punctuation">\\</span>Exception</span>
 */</span>
<span class="token attribute"><span class="token delimiter punctuation">#[</span><span class="token attribute-content"><span class="token attribute-class-name class-name">PostMapping</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;import&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token attribute-class-name class-name">Permission</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;system:user:import&quot;</span><span class="token punctuation">)</span></span><span class="token delimiter punctuation">]</span></span>
<span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">import</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token class-name return-type">ResponseInterface</span>
<span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">service</span><span class="token operator">-&gt;</span><span class="token function">import</span><span class="token punctuation">(</span><span class="token class-name class-name-fully-qualified static-context"><span class="token punctuation">\\</span>App<span class="token punctuation">\\</span>System<span class="token punctuation">\\</span>Dto<span class="token punctuation">\\</span>UserDto</span><span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">success</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">:</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="自定义导入" tabindex="-1"><a class="header-anchor" href="#自定义导入" aria-hidden="true">#</a> 自定义导入</h3><div class="hint-container tip"><p class="hint-container-title">Tips</p><p>如果业务复杂，导入数据不仅仅是 <code>单表</code> 操作，需要 <code>多表联动</code>；那么可以使用下面的方法，把具体的导入流程交给开发人员手里</p></div><ul><li><p>使用 <code>\\Mine\\MineCollection</code> 下的 <code>import</code> 实现自定义导出</p></li><li><p>import方法参数列表</p></li></ul><table><thead><tr><th style="text-align:center;">参数</th><th style="text-align:center;">类型</th><th style="text-align:center;">说明</th><th style="text-align:center;">默认值</th></tr></thead><tbody><tr><td style="text-align:center;">$dto</td><td style="text-align:center;">String</td><td style="text-align:center;">设置dto类的引用命名空间</td><td style="text-align:center;">-</td></tr><tr><td style="text-align:center;">$model</td><td style="text-align:center;">MineModel</td><td style="text-align:center;">继承于 <code>MineAdmin</code> 模型类</td><td style="text-align:center;">-</td></tr><tr><td style="text-align:center;">$closure</td><td style="text-align:center;">String</td><td style="text-align:center;">接收一个匿名函数, 返回值：bool</td><td style="text-align:center;">-</td></tr></tbody></table><ul><li>匿名函数参数列表</li></ul><table><thead><tr><th style="text-align:center;">参数</th><th style="text-align:center;">类型</th><th style="text-align:center;">说明</th></tr></thead><tbody><tr><td style="text-align:center;">$model</td><td style="text-align:center;">MineModel</td><td style="text-align:center;">实例化后的模型对象</td></tr><tr><td style="text-align:center;">$data</td><td style="text-align:center;">Array</td><td style="text-align:center;">从excel里读取好的待导入数据</td></tr></tbody></table><ul><li>示例代码：</li></ul><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token variable">$bool</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name class-name-fully-qualified"><span class="token punctuation">\\</span>Mine<span class="token punctuation">\\</span>MineCollection</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">import</span><span class="token punctuation">(</span>
    <span class="token class-name class-name-fully-qualified static-context"><span class="token punctuation">\\</span>App<span class="token punctuation">\\</span>System<span class="token punctuation">\\</span>Dto<span class="token punctuation">\\</span>UserDto</span><span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">SystemUser</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token variable">$model</span><span class="token punctuation">,</span> <span class="token variable">$data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token keyword">foreach</span> <span class="token punctuation">(</span><span class="token variable">$data</span> <span class="token keyword">as</span> <span class="token variable">$item</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token variable">$model</span><span class="token operator">-&gt;</span><span class="token function">insert</span><span class="token punctuation">(</span><span class="token variable">$item</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">return</span> <span class="token constant boolean">true</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name class-name-fully-qualified"><span class="token punctuation">\\</span>Exception</span> <span class="token variable">$e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token constant boolean">false</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,34);function m(v,b){const a=e("ExternalLinkIcon");return p(),o("div",null,[u,r,n("p",null,[s("我们为此设计了一套 "),n("a",d,[s("注解"),c(a)]),s("，配合使用")]),k])}const y=t(i,[["render",m],["__file","importAndExport.html.vue"]]);export{y as default};