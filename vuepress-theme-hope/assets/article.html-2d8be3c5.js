import{_ as c}from"./plugin-vue_export-helper-c27b6911.js";import{r as e,o as i,c as l,a as r,b as n,d as s,e as t,w as d,f as a}from"./app-083c2955.js";const u="/vuepress-theme-hope/assets/article-list-light-637da02e.png",k="/vuepress-theme-hope/assets/article-list-dark-01c35cbb.png",m={},v=n("p",null,[s("主题默认在 "),n("code",null,"/article/"),s(" 路径下为你提供了全部的文章列表。")],-1),h=a('<h2 id="文章" tabindex="-1"><a class="header-anchor" href="#文章" aria-hidden="true">#</a> 文章</h2><p>所有文章都会默认被添加到文章列表中渲染在 <code>/article/</code> 路径下。</p><p><img src="'+u+'" alt="文章列表" data-mode="lightmode-only" loading="lazy"><img src="'+k+'" alt="文章列表" data-mode="darkmode-only" loading="lazy"></p><p>如果你不希望该列表包含一些特定的文章，只需在文章的 frontmatter 中将 <code>article</code> 设置为 <code>false</code>，或者你也可以通过主题选项中的 <code>plugins.blog.filter</code> 自定义哪些页面是文章。</p><p>如果你希望在文章列表中置顶特定文章，只需在文章的 frontmatter 中将 <code>sticky</code> 设置为 <code>true</code>。</p><div class="hint-container tip"><p class="hint-container-title">置顶顺序</p><p>对于置顶文章，你可以将 <code>sticky</code> 设置为 <code>number</code> 来设置它们的顺序。数值大的文章会排列在前面。</p></div><h2 id="文章摘要" tabindex="-1"><a class="header-anchor" href="#文章摘要" aria-hidden="true">#</a> 文章摘要</h2><h3 id="添加摘要" tabindex="-1"><a class="header-anchor" href="#添加摘要" aria-hidden="true">#</a> 添加摘要</h3><p>如果你想要为文章添加摘要，你可以使用 <code>&lt;!-- more --&gt;</code> 注释来标记它。任何在此注释之前的内容会被视为摘要。</p><p>同时，如果你想设置的摘要并不是你要在文章开头展示的内容，你也可以在 Frontmatter 中通过 <code>excerpt</code> 选项来设置 HTML 字符串。</p><h3 id="自动生成摘要" tabindex="-1"><a class="header-anchor" href="#自动生成摘要" aria-hidden="true">#</a> 自动生成摘要</h3><p>主题默认情况下会自动生成摘要。</p><p>如果你只想让主题展示你指定的摘要或在 Frontmatter 中设置的描述，请在主题选项中设置 <code>plugins.blog.excerptLength: 0</code>。</p>',13),g={class:"hint-container warning"},b=n("p",{class:"hint-container-title"},"摘要限制",-1),f=a("<p>我们推荐你优先使用 <code>&lt;!-- more --&gt;</code> 来标记摘要。如果你的确需要一个特别的摘要的话，请自己设置在 Front Matter。</p><p>对于使用注释标记的摘要，我们会从原始文件分离出的摘要内容并将它们渲染成 HTMLString，所以在摘要外的内容<strong>不会参与摘要渲染</strong>，相关限制如:</p><ul><li><code>[[toc]]</code> 标记无法获得文章其他部分的标题</li><li>如果链接和脚注的引用内容在摘要外，它们无法正确渲染</li></ul><p>另外由于两种情况都是通过 <code>innerHTML</code> 直接插入到 DOM，这意味着任何组件都会解析为原生标签，不会正常渲染成 Vue 组件。</p>",4),_=a('<h2 id="收藏文章" tabindex="-1"><a class="header-anchor" href="#收藏文章" aria-hidden="true">#</a> 收藏文章</h2><p>你可以通过在 frontmatter 中设置 <code>star</code> 为 <code>true</code> 收藏一个文章。收藏后，用户就可以在 <code>/star/</code> 页面中查看这些文章。</p><p>同时任何任何收藏的文章都会显示在博客主页侧边栏的文章栏目中。</p><div class="hint-container info"><p class="hint-container-title">相关信息</p><p>我们提供收藏选项的考虑是: 主题使用者可能希望向访客展示一定数量的精品文章，而又不希望置顶文章充斥主页，导致用户不能看到最近更新的文章。</p></div><div class="hint-container tip"><p class="hint-container-title">收藏顺序</p><p>类似置顶文章，你同样可以将 <code>star</code> 设置为 <code>number</code> 来设置它们的顺序。数值大的文章会排列在前面。</p></div>',5),y={id:"其他类型的文章",tabindex:"-1"},q=n("a",{class:"header-anchor",href:"#其他类型的文章","aria-hidden":"true"},"#",-1),x=a(`<p>该主题为其他文章类型提供了单独的列表。</p><p>要添加其他文章类型，你应该在主题选项中设置 <code>plugins.blog.type</code>。它应该是一个一数组包含描述你想要的类型的配置对象。</p><p>每个类型都应该有一个唯一的键 (不含特殊字符)，以及一个 <code>filter</code> 函数来确定页面是否应该是该类型。 <code>filter</code> 函数应该接受页面对象并返回一个布尔值。</p><p>要对类型列表中的页面进行排序，你还可以设置 <code>sorter</code> 选项。 <code>sorter</code> 函数应该接受两个页面对象并返回一个数字。</p><p>默认情况下，类型列表路径为 <code>/key/</code> (<code>key</code> 被替换为实际键)。 你还可以通过在选项中设置 <code>path</code> 来设置自定义路径。</p><p><code>frontmatter</code> 选项控制布局页面的 frontmatter，它是一个接受 <code>localePath</code> 并返回 frontmatter 对象的函数。该选项在设置布局页面的标题时很有用。</p><div class="hint-container note"><p class="hint-container-title">注</p><p><code>layout</code> 是布局名称，默认为 <code>BlogType</code>，是一个 <code>vuepress-theme-hope</code> 注册的布局。 仅当你为类型列表构建自定义布局时，才应将此选项设置为你的布局值。</p></div><p>你还需要在主题语言环境中使用实际类型名称设置 <code>blogLocales[key]</code>，以便主题可以正确显示类型名称。</p><p>为了方便上手，我们在这里展示一些示例。</p><details class="hint-container details"><summary>示例</summary><ol><li><p>增加了一种幻灯片页面。</p><p>所有幻灯片页面都应在 frontmatter 中包含 <code>layout: Slide</code>。 并且顺序无关紧要。</p></li><li><p>添加原创类型。</p></li></ol><p>你应设置以下选项：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineUserConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vuepress&quot;</span><span class="token punctuation">;</span>
<span class="token comment">// 你可能需要安装 vuepress-shared 来使用它的 \`compareDate\`</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> compareDate <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vuepress-shared/node&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> hopeTheme <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vuepress-theme-hope&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineUserConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// other config</span>
  <span class="token comment">// ...</span>

  theme<span class="token operator">:</span> <span class="token function">hopeTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    blogLocales<span class="token operator">:</span> <span class="token punctuation">{</span>
      slide<span class="token operator">:</span> <span class="token string">&quot;幻灯片&quot;</span><span class="token punctuation">,</span>
      original<span class="token operator">:</span> <span class="token string">&quot;原创&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    plugins<span class="token operator">:</span> <span class="token punctuation">{</span>
      blog<span class="token operator">:</span> <span class="token punctuation">{</span>
        type<span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            key<span class="token operator">:</span> <span class="token string">&quot;slide&quot;</span><span class="token punctuation">,</span>
            <span class="token function-variable function">filter</span><span class="token operator">:</span> <span class="token punctuation">(</span>page<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> page<span class="token punctuation">.</span>frontmatter<span class="token punctuation">.</span>layout <span class="token operator">===</span> <span class="token string">&quot;Slide&quot;</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            key<span class="token operator">:</span> <span class="token string">&quot;original&quot;</span><span class="token punctuation">,</span>
            <span class="token function-variable function">filter</span><span class="token operator">:</span> <span class="token punctuation">(</span>page<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> page<span class="token punctuation">.</span>frontmatter<span class="token punctuation">.</span>original<span class="token punctuation">,</span>
            <span class="token function-variable function">sorter</span><span class="token operator">:</span> <span class="token punctuation">(</span>pageA<span class="token punctuation">,</span> pageB<span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
              <span class="token function">compareDate</span><span class="token punctuation">(</span>pageA<span class="token punctuation">.</span>frontmatter<span class="token punctuation">.</span>date <span class="token operator">-</span> pageB<span class="token punctuation">.</span>frontmatter<span class="token punctuation">.</span>date<span class="token punctuation">)</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,10);function w(B,L){const o=e("RouterLink"),p=e("Badge");return i(),l("div",null,[v,r(" more "),h,n("div",g,[b,n("p",null,[s("出于性能考虑，默认情况下开发服务器中不提供自动摘录生成功能，请使用 "),t(o,{to:"/zh/config/theme/basic.html#hotreload"},{default:d(()=>[s("hotReload")]),_:1}),s(" 启用它。")]),f]),_,n("h2",y,[q,s(" 其他类型的文章 "),t(p,{text:"高级",type:"info"})]),x])}const C=c(m,[["render",w],["__file","article.html.vue"]]);export{C as default};