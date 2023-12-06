import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as p,o as e,c as o,a as c,b as n,d as l,w as i,e as s}from"./app-c17653d8.js";const u="/dcat/assets/4net12VyoJ-0659dc5d.png",k={},r=s(`<h1 id="basic-use-of-data-details" tabindex="-1"><a class="header-anchor" href="#basic-use-of-data-details" aria-hidden="true">#</a> Basic use of data details</h1><p>The <code>Dcat\\Admin\\Show</code> is used to display data details, starting with an example where there is a posts table in the database:</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token identifier"><span class="token punctuation">\`</span>posts<span class="token punctuation">\`</span></span> <span class="token punctuation">(</span>
  <span class="token identifier"><span class="token punctuation">\`</span>id<span class="token punctuation">\`</span></span> <span class="token keyword">int</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span> <span class="token keyword">unsigned</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">AUTO_INCREMENT</span><span class="token punctuation">,</span>
  <span class="token identifier"><span class="token punctuation">\`</span>author_id<span class="token punctuation">\`</span></span> <span class="token keyword">int</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span> <span class="token keyword">unsigned</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token punctuation">,</span>
  <span class="token identifier"><span class="token punctuation">\`</span>title<span class="token punctuation">\`</span></span> <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">)</span> <span class="token keyword">COLLATE</span> utf8_unicode_ci <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
  <span class="token identifier"><span class="token punctuation">\`</span>content<span class="token punctuation">\`</span></span> <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">)</span> <span class="token keyword">COLLATE</span> utf8_unicode_ci <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
  <span class="token identifier"><span class="token punctuation">\`</span>rate<span class="token punctuation">\`</span></span> <span class="token keyword">int</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">)</span> <span class="token keyword">COLLATE</span> utf8_unicode_ci <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
  <span class="token identifier"><span class="token punctuation">\`</span>release_at<span class="token punctuation">\`</span></span> <span class="token keyword">timestamp</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">DEFAULT</span> <span class="token string">&#39;0000-00-00 00:00:00&#39;</span><span class="token punctuation">,</span>
  <span class="token identifier"><span class="token punctuation">\`</span>created_at<span class="token punctuation">\`</span></span> <span class="token keyword">timestamp</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">DEFAULT</span> <span class="token string">&#39;0000-00-00 00:00:00&#39;</span><span class="token punctuation">,</span>
  <span class="token identifier"><span class="token punctuation">\`</span>updated_at<span class="token punctuation">\`</span></span> <span class="token keyword">timestamp</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">DEFAULT</span> <span class="token string">&#39;0000-00-00 00:00:00&#39;</span><span class="token punctuation">,</span>
  <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span> <span class="token punctuation">(</span><span class="token identifier"><span class="token punctuation">\`</span>id<span class="token punctuation">\`</span></span><span class="token punctuation">)</span>
<span class="token punctuation">)</span> <span class="token keyword">ENGINE</span><span class="token operator">=</span><span class="token keyword">InnoDB</span> <span class="token keyword">DEFAULT</span> <span class="token keyword">CHARSET</span><span class="token operator">=</span>utf8 <span class="token keyword">COLLATE</span><span class="token operator">=</span>utf8_unicode_ci<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The corresponding data model is <code>App\\Admin\\Repositories\\Post</code> and the data repository is <code>App\\Admin\\Repositories\\Post</code> and the following code displays the data details of the posts table:</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>

<span class="token keyword">namespace</span> <span class="token package">App<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Controllers</span><span class="token punctuation">;</span>

<span class="token keyword">use</span> <span class="token package">App<span class="token punctuation">\\</span>Http<span class="token punctuation">\\</span>Controllers<span class="token punctuation">\\</span>Controller</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">App<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Repositories<span class="token punctuation">\\</span>Post</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Dcat<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Layout<span class="token punctuation">\\</span>Content</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Dcat<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Show</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Dcat<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Admin</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">PostController</span> <span class="token keyword">extends</span> <span class="token class-name">Controller</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">show</span><span class="token punctuation">(</span><span class="token variable">$id</span><span class="token punctuation">,</span> <span class="token class-name type-declaration">Content</span> <span class="token variable">$content</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token variable">$content</span><span class="token operator">-&gt;</span><span class="token function">header</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;Post&#39;</span><span class="token punctuation">)</span>
            <span class="token operator">-&gt;</span><span class="token function">description</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;Details&#39;</span><span class="token punctuation">)</span>
            <span class="token operator">-&gt;</span><span class="token function">body</span><span class="token punctuation">(</span><span class="token class-name static-context">Show</span><span class="token operator">::</span><span class="token function">make</span><span class="token punctuation">(</span><span class="token variable">$id</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">Post</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token class-name type-declaration">Show</span> <span class="token variable">$show</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token variable">$show</span><span class="token operator">-&gt;</span><span class="token function">id</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;ID&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token variable">$show</span><span class="token operator">-&gt;</span><span class="token function">title</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;TITLE&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token variable">$show</span><span class="token operator">-&gt;</span><span class="token function">content</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;Content&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token variable">$show</span><span class="token operator">-&gt;</span><span class="token function">rate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token variable">$show</span><span class="token operator">-&gt;</span><span class="token function">created_at</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token variable">$show</span><span class="token operator">-&gt;</span><span class="token function">updated_at</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token variable">$show</span><span class="token operator">-&gt;</span><span class="token function">release_at</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="basic-usage" tabindex="-1"><a class="header-anchor" href="#basic-usage" aria-hidden="true">#</a> Basic usage</h2><h3 id="html-content-escaping" tabindex="-1"><a class="header-anchor" href="#html-content-escaping" aria-hidden="true">#</a> HTML content escaping</h3><p>To prevent XSS attacks, the default output will be escaped using HTML:</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token variable">$show</span><span class="token operator">-&gt;</span><span class="token function">avatar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">unescape</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">as</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token variable">$avatar</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token keyword">return</span> <span class="token string double-quoted-string">&quot;&lt;img src=&#39;<span class="token interpolation"><span class="token punctuation">{</span><span class="token variable">$avatar</span><span class="token punctuation">}</span></span>&#39; /&gt;&quot;</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="set-the-field-width" tabindex="-1"><a class="header-anchor" href="#set-the-field-width" aria-hidden="true">#</a> Set the field width</h3><p>The default value of the field width is &quot;3&quot;, and you can set the number between 1 and 12.</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token variable">$show</span><span class="token operator">-&gt;</span><span class="token property">created_at</span><span class="token operator">-&gt;</span><span class="token function">width</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="modify-the-panel-style-and-title" tabindex="-1"><a class="header-anchor" href="#modify-the-panel-style-and-title" aria-hidden="true">#</a> Modify the panel style and TITLE.</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token variable">$show</span><span class="token operator">-&gt;</span><span class="token function">panel</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token operator">-&gt;</span><span class="token function">style</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;danger&#39;</span><span class="token punctuation">)</span>
    <span class="token operator">-&gt;</span><span class="token function">title</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;post Basic Information...&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The values of style can be primary, info, danger, warning, default.</p><h3 id="panel-tool-settings" tabindex="-1"><a class="header-anchor" href="#panel-tool-settings" aria-hidden="true">#</a> Panel tool settings</h3><p>There are three buttons to edit, delete, and list by default in the upper right corner of the panel, and they can each be turned off in the following manner:</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token variable">$show</span><span class="token operator">-&gt;</span><span class="token function">panel</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token operator">-&gt;</span><span class="token function">tools</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token variable">$tools</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token variable">$tools</span><span class="token operator">-&gt;</span><span class="token function">disableEdit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token variable">$tools</span><span class="token operator">-&gt;</span><span class="token function">disableList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token variable">$tools</span><span class="token operator">-&gt;</span><span class="token function">disableDelete</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// Show quick edit buttons</span>
        <span class="token variable">$tools</span><span class="token operator">-&gt;</span><span class="token function">showQuickEdit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="custom-complex-tool-button" tabindex="-1"><a class="header-anchor" href="#custom-complex-tool-button" aria-hidden="true">#</a> Custom Complex Tool Button</h4>`,19),d=s(`<h3 id="multicolumn-layout" tabindex="-1"><a class="header-anchor" href="#multicolumn-layout" aria-hidden="true">#</a> Multicolumn layout</h3><p>use</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token variable">$show</span><span class="token operator">-&gt;</span><span class="token function">row</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token class-name class-name-fully-qualified type-declaration">Show<span class="token punctuation">\\</span>Row</span> <span class="token variable">$show</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token variable">$show</span><span class="token operator">-&gt;</span><span class="token function">width</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token property">id</span><span class="token punctuation">;</span>
    <span class="token variable">$show</span><span class="token operator">-&gt;</span><span class="token function">width</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token property">name</span><span class="token punctuation">;</span>
    <span class="token variable">$show</span><span class="token operator">-&gt;</span><span class="token function">width</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token property">email</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token variable">$show</span><span class="token operator">-&gt;</span><span class="token function">row</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token class-name class-name-fully-qualified type-declaration">Show<span class="token punctuation">\\</span>Row</span> <span class="token variable">$show</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token variable">$show</span><span class="token operator">-&gt;</span><span class="token function">width</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token property">email_verified_at</span><span class="token punctuation">;</span>
    <span class="token variable">$show</span><span class="token operator">-&gt;</span><span class="token property">created_at</span><span class="token punctuation">;</span>
    <span class="token variable">$show</span><span class="token operator">-&gt;</span><span class="token property">updated_at</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token variable">$show</span><span class="token operator">-&gt;</span><span class="token function">row</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token class-name class-name-fully-qualified type-declaration">Show<span class="token punctuation">\\</span>Row</span> <span class="token variable">$show</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token variable">$show</span><span class="token operator">-&gt;</span><span class="token function">width</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">field</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;profile.first_name&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token variable">$show</span><span class="token operator">-&gt;</span><span class="token function">field</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;profile.last_name&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token variable">$show</span><span class="token operator">-&gt;</span><span class="token function">width</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">field</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;profile.postcode&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>result</p><p><img src="`+u+'" alt="" loading="lazy"></p>',5);function v(m,b){const a=p("RouterLink");return e(),o("div",null,[r,c("p",null,[n("Please refer to the document "),l(a,{to:"/guide/action-show.html"},{default:i(()=>[n("Data Detail Action")]),_:1}),n(".")]),d])}const f=t(k,[["render",v],["__file","model-show.html.vue"]]);export{f as default};