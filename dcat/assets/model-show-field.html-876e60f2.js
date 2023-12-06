import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{r as p,o as t,c as o,a as c,b as n,d as i,w as l,e as s}from"./app-c17653d8.js";const r={},u=s(`<h1 id="字段显示" tabindex="-1"><a class="header-anchor" href="#字段显示" aria-hidden="true">#</a> 字段显示</h1><h3 id="html" tabindex="-1"><a class="header-anchor" href="#html" aria-hidden="true">#</a> HTML</h3><p>通过<code>html</code>方法可以在详情页插入一段不显示<code>label</code>的<code>HTML</code>代码</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token comment">// 传入字符串</span>
<span class="token variable">$show</span><span class="token operator">-&gt;</span><span class="token function">html</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;&lt;br/&gt;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 传入视图</span>
<span class="token variable">$show</span><span class="token operator">-&gt;</span><span class="token function">html</span><span class="token punctuation">(</span><span class="token function">view</span><span class="token punctuation">(</span><span class="token operator">...</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 传入闭包</span>
<span class="token variable">$show</span><span class="token operator">-&gt;</span><span class="token function">html</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 获取字段信息</span>
	<span class="token variable">$id</span> <span class="token operator">=</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">id</span><span class="token punctuation">;</span>
	<span class="token variable">$username</span> <span class="token operator">=</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">username</span><span class="token punctuation">;</span>
	
	<span class="token keyword">return</span> <span class="token function">view</span><span class="token punctuation">(</span><span class="token operator">...</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;id&#39;</span> <span class="token operator">=&gt;</span> <span class="token variable">$id</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="分隔线" tabindex="-1"><a class="header-anchor" href="#分隔线" aria-hidden="true">#</a> 分隔线</h3><p>如果要在字段之间添加一条分隔线：</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token variable">$show</span><span class="token operator">-&gt;</span><span class="token function">divider</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="换行" tabindex="-1"><a class="header-anchor" href="#换行" aria-hidden="true">#</a> 换行</h3><p>如果要在字段之间使用换行：</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token variable">$show</span><span class="token operator">-&gt;</span><span class="token function">newline</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="修改显示内容" tabindex="-1"><a class="header-anchor" href="#修改显示内容" aria-hidden="true">#</a> 修改显示内容</h3><p>用下面的方法修改显示内容</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token variable">$show</span><span class="token operator">-&gt;</span><span class="token function">title</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">as</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token variable">$title</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 获取当前行的其他字段</span>
    <span class="token variable">$username</span> <span class="token operator">=</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">username</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token string double-quoted-string">&quot;&lt;<span class="token interpolation"><span class="token punctuation">{</span><span class="token variable">$title</span><span class="token punctuation">}</span></span>&gt; <span class="token interpolation"><span class="token punctuation">{</span><span class="token variable">$username</span><span class="token punctuation">}</span></span>&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token variable">$show</span><span class="token operator">-&gt;</span><span class="token function">contents</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">as</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token variable">$content</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string double-quoted-string">&quot;&lt;pre&gt;<span class="token interpolation"><span class="token punctuation">{</span><span class="token variable">$content</span><span class="token punctuation">}</span></span>&lt;/pre&gt;&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="帮助方法" tabindex="-1"><a class="header-anchor" href="#帮助方法" aria-hidden="true">#</a> 帮助方法</h3>`,14),d=s(`<h3 id="内置显示扩展方法" tabindex="-1"><a class="header-anchor" href="#内置显示扩展方法" aria-hidden="true">#</a> 内置显示扩展方法</h3><p>下面是通过as方法内置实现的几个常用的显示样式：</p><h4 id="view" tabindex="-1"><a class="header-anchor" href="#view" aria-hidden="true">#</a> view</h4><p><code>view</code>方法可以引入一个视图文件。</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token comment">// 模板中接收以下三个变量：</span>
<span class="token comment">// name 字段名称</span>
<span class="token comment">// value 字段值</span>
<span class="token comment">// model 当前行数据</span>
<span class="token variable">$show</span><span class="token operator">-&gt;</span><span class="token property">content</span><span class="token operator">-&gt;</span><span class="token function">view</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;admin.fields.content&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="explode" tabindex="-1"><a class="header-anchor" href="#explode" aria-hidden="true">#</a> explode</h4><p><code>explode</code>方法可以把字符串分割为数组。</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token variable">$show</span><span class="token operator">-&gt;</span><span class="token property">tag</span><span class="token operator">-&gt;</span><span class="token function">explode</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">label</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 可以指定分隔符，默认&quot;,&quot;</span>
<span class="token variable">$show</span><span class="token operator">-&gt;</span><span class="token property">tag</span><span class="token operator">-&gt;</span><span class="token function">explode</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;|&#39;</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">label</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="prepend" tabindex="-1"><a class="header-anchor" href="#prepend" aria-hidden="true">#</a> prepend</h4><p><code>prepend</code> 方法用于给 <code>string</code> 或 <code>array</code> 类型的值前面插入内容。</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token comment">// 当字段值是一个字符串</span>
<span class="token variable">$show</span><span class="token operator">-&gt;</span><span class="token property">email</span><span class="token operator">-&gt;</span><span class="token function">prepend</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;mailto:&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 当字段值是一个数组</span>
<span class="token variable">$show</span><span class="token operator">-&gt;</span><span class="token property">arr</span><span class="token operator">-&gt;</span><span class="token function">prepend</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;first item&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>prepend</code>方法允许传入闭包参数</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token variable">$show</span><span class="token operator">-&gt;</span><span class="token property">email</span><span class="token operator">-&gt;</span><span class="token function">prepend</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token variable">$value</span><span class="token punctuation">,</span> <span class="token variable">$original</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// $value 是当前字段值</span>
    <span class="token comment">// $original 是当前字段从数据库中查询出来的原始值</span>
    
    <span class="token comment">// 获取其他字段值</span>
    <span class="token variable">$username</span> <span class="token operator">=</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">username</span><span class="token punctuation">;</span>
    
    <span class="token keyword">return</span> <span class="token string double-quoted-string">&quot;[<span class="token interpolation"><span class="token punctuation">{</span><span class="token variable">$username</span><span class="token punctuation">}</span></span>]&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="append" tabindex="-1"><a class="header-anchor" href="#append" aria-hidden="true">#</a> append</h4><p><code>append</code> 方法用于给 <code>string</code> 或 <code>array</code> 类型的值后面插入内容。</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token comment">// 当字段值是一个字符串</span>
<span class="token variable">$show</span><span class="token operator">-&gt;</span><span class="token property">email</span><span class="token operator">-&gt;</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;@gmail.com&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 当字段值是一个数组</span>
<span class="token variable">$show</span><span class="token operator">-&gt;</span><span class="token property">arr</span><span class="token operator">-&gt;</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;last item&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>append</code>方法允许传入闭包参数</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token variable">$show</span><span class="token operator">-&gt;</span><span class="token property">email</span><span class="token operator">-&gt;</span><span class="token function">prepend</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token variable">$value</span><span class="token punctuation">,</span> <span class="token variable">$original</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// $value 是当前字段值</span>
    <span class="token comment">// $original 是当前字段从数据库中查询出来的原始值</span>
    
    <span class="token comment">// 获取其他字段值</span>
    <span class="token variable">$username</span> <span class="token operator">=</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">username</span><span class="token punctuation">;</span>
    
    <span class="token keyword">return</span> <span class="token string double-quoted-string">&quot;[<span class="token interpolation"><span class="token punctuation">{</span><span class="token variable">$username</span><span class="token punctuation">}</span></span>]&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="image" tabindex="-1"><a class="header-anchor" href="#image" aria-hidden="true">#</a> image</h4><p>字段avatar的内容是图片的路径或者url，可以将它显示为图片：</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token variable">$show</span><span class="token operator">-&gt;</span><span class="token function">avatar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">image</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>image()方法的参数参考Field::image()</p><h4 id="file" tabindex="-1"><a class="header-anchor" href="#file" aria-hidden="true">#</a> file</h4><p>字段document的内容是文件的路径或者url，可以将它显示为文件：</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token variable">$show</span><span class="token operator">-&gt;</span><span class="token function">avatar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">file</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>file()方法的参数参考Field::file()</p><h4 id="link" tabindex="-1"><a class="header-anchor" href="#link" aria-hidden="true">#</a> link</h4><p>字段homepage的内容是url链接，可以将它显示为HTML链接：</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token variable">$show</span><span class="token operator">-&gt;</span><span class="token function">homepage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">link</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>link()方法的参数参考Field::link()</p><h4 id="label" tabindex="-1"><a class="header-anchor" href="#label" aria-hidden="true">#</a> label</h4><p>将字段tag的内容显示为label：</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token variable">$show</span><span class="token operator">-&gt;</span><span class="token function">tag</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">label</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>label()方法的参数参考Field::label()</p><h4 id="badge" tabindex="-1"><a class="header-anchor" href="#badge" aria-hidden="true">#</a> badge</h4><p>将字段rate的内容显示为badge：</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token variable">$show</span><span class="token operator">-&gt;</span><span class="token function">rate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">badge</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>badge()方法的参数参考Field::badge()</p><h4 id="using" tabindex="-1"><a class="header-anchor" href="#using" aria-hidden="true">#</a> using</h4><p>如果字段gender的取值为<code>f</code>、<code>m</code>，分别需要用女、男来显示</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token variable">$show</span><span class="token operator">-&gt;</span><span class="token function">gender</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">using</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;f&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;女&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;m&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;男&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="dot" tabindex="-1"><a class="header-anchor" href="#dot" aria-hidden="true">#</a> dot</h4><p>通过<code>dot</code>方法可以在列文字前面加上一个带颜色的圆点</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">Dcat<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Admin</span><span class="token punctuation">;</span>

<span class="token variable">$show</span><span class="token operator">-&gt;</span><span class="token property">state</span>
	<span class="token operator">-&gt;</span><span class="token function">using</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;未处理&#39;</span><span class="token punctuation">,</span> <span class="token number">2</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;已处理&#39;</span><span class="token punctuation">,</span> <span class="token operator">...</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
	<span class="token operator">-&gt;</span><span class="token function">dot</span><span class="token punctuation">(</span>
		<span class="token punctuation">[</span>
			<span class="token number">1</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;primary&#39;</span><span class="token punctuation">,</span>
			<span class="token number">2</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;danger&#39;</span><span class="token punctuation">,</span>
			<span class="token number">3</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;success&#39;</span><span class="token punctuation">,</span>
			<span class="token number">4</span> <span class="token operator">=&gt;</span> <span class="token class-name static-context">Admin</span><span class="token operator">::</span><span class="token function">color</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">]</span><span class="token punctuation">,</span> 
	    <span class="token string single-quoted-string">&#39;primary&#39;</span> <span class="token comment">// 第二个参数为默认值</span>
	<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="显示文件尺寸" tabindex="-1"><a class="header-anchor" href="#显示文件尺寸" aria-hidden="true">#</a> 显示文件尺寸</h4><p>如果字段数据是表示文件大小的字节数，可以通过调用filezise方法来显示更有可读性的文字</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token variable">$show</span><span class="token operator">-&gt;</span><span class="token function">field</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;file_size&#39;</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">filesize</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这样数值199812019将会显示为190.56 MB</p>`,48);function k(v,m){const a=p("RouterLink");return t(),o("div",null,[u,c("p",null,[n("帮助方法与数据表格字段帮助方法使用一致，可参考"),i(a,{to:"/zh/guide/model-grid-column.html#help"},{default:l(()=>[n("帮助方法")]),_:1}),n("。")]),d])}const b=e(r,[["render",k],["__file","model-show-field.html.vue"]]);export{b as default};