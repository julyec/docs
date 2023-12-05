const n=JSON.parse('{"key":"v-2dc13f10","path":"/zh/config/theme/i18n.html","title":"主题多语言选项","lang":"zh-CN","frontmatter":{"title":"主题多语言选项","icon":"language","order":5,"category":["配置"],"tag":["多语言","主题配置"]},"headers":[],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":2.14,"words":643},"filePathRelative":"zh/config/theme/i18n.md","excerpt":"<p>你可以在主题配置中通过在 <code>locales[localePath]</code> 添加下列选项自定义主题的多语言选项。</p>\\n<div class=\\"language-typescript line-numbers-mode\\" data-ext=\\"ts\\"><pre class=\\"language-typescript\\"><code><span class=\\"token keyword\\">interface</span> <span class=\\"token class-name\\">ThemeLocaleData</span> <span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token doc-comment comment\\">/**\\n   * 当前语言代码\\n   */</span>\\n  lang<span class=\\"token operator\\">:</span> <span class=\\"token builtin\\">string</span><span class=\\"token punctuation\\">;</span>\\n\\n  <span class=\\"token doc-comment comment\\">/**\\n   * 外观\\n   */</span>\\n  outlookLocales<span class=\\"token operator\\">:</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token doc-comment comment\\">/**\\n     * 主题色\\n     */</span>\\n    themeColor<span class=\\"token operator\\">:</span> <span class=\\"token builtin\\">string</span><span class=\\"token punctuation\\">;</span>\\n\\n    <span class=\\"token doc-comment comment\\">/**\\n     * 夜间模式\\n     */</span>\\n    darkmode<span class=\\"token operator\\">:</span> <span class=\\"token builtin\\">string</span><span class=\\"token punctuation\\">;</span>\\n\\n    <span class=\\"token doc-comment comment\\">/**\\n     * 全屏文字\\n     */</span>\\n    fullscreen<span class=\\"token operator\\">:</span> <span class=\\"token builtin\\">string</span><span class=\\"token punctuation\\">;</span>\\n  <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">;</span>\\n\\n  <span class=\\"token doc-comment comment\\">/**\\n   * 博客\\n   */</span>\\n  blogLocales<span class=\\"token operator\\">:</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token doc-comment comment\\">/** 文章文字 */</span>\\n    article<span class=\\"token operator\\">:</span> <span class=\\"token builtin\\">string</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token doc-comment comment\\">/** 文章列表文字 */</span>\\n    articleList<span class=\\"token operator\\">:</span> <span class=\\"token builtin\\">string</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token doc-comment comment\\">/** 分类文字 */</span>\\n    category<span class=\\"token operator\\">:</span> <span class=\\"token builtin\\">string</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token doc-comment comment\\">/** 标签文字 */</span>\\n    tag<span class=\\"token operator\\">:</span> <span class=\\"token builtin\\">string</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token doc-comment comment\\">/** 时间轴文字 */</span>\\n    timeline<span class=\\"token operator\\">:</span> <span class=\\"token builtin\\">string</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token doc-comment comment\\">/** 时间轴标题文字 */</span>\\n    timelineTitle<span class=\\"token operator\\">:</span> <span class=\\"token builtin\\">string</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token doc-comment comment\\">/** 全部文字 */</span>\\n    all<span class=\\"token operator\\">:</span> <span class=\\"token builtin\\">string</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token doc-comment comment\\">/** 个人介绍 */</span>\\n    intro<span class=\\"token operator\\">:</span> <span class=\\"token builtin\\">string</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token doc-comment comment\\">/** 收藏文字 */</span>\\n    star<span class=\\"token operator\\">:</span> <span class=\\"token builtin\\">string</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token doc-comment comment\\">/** 幻灯片 */</span>\\n    slides<span class=\\"token operator\\">:</span> <span class=\\"token builtin\\">string</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token doc-comment comment\\">/** 加密 */</span>\\n    encrypt<span class=\\"token operator\\">:</span> <span class=\\"token builtin\\">string</span><span class=\\"token punctuation\\">;</span>\\n  <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">;</span>\\n\\n  <span class=\\"token doc-comment comment\\">/**\\n   * 分页\\n   */</span>\\n  paginationLocales<span class=\\"token operator\\">:</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token doc-comment comment\\">/**\\n     * 上一页文字\\n     */</span>\\n    prev<span class=\\"token operator\\">:</span> <span class=\\"token builtin\\">string</span><span class=\\"token punctuation\\">;</span>\\n\\n    <span class=\\"token doc-comment comment\\">/**\\n     * 下一页文字\\n     */</span>\\n    next<span class=\\"token operator\\">:</span> <span class=\\"token builtin\\">string</span><span class=\\"token punctuation\\">;</span>\\n\\n    <span class=\\"token doc-comment comment\\">/**\\n     * 跳转提示文字\\n     */</span>\\n    navigate<span class=\\"token operator\\">:</span> <span class=\\"token builtin\\">string</span><span class=\\"token punctuation\\">;</span>\\n\\n    <span class=\\"token doc-comment comment\\">/**\\n     * 跳转按钮文字\\n     */</span>\\n    action<span class=\\"token operator\\">:</span> <span class=\\"token builtin\\">string</span><span class=\\"token punctuation\\">;</span>\\n\\n    <span class=\\"token doc-comment comment\\">/**\\n     * 页码错误文字\\n     *\\n     * <span class=\\"token keyword\\">@description</span> `$page` 会自动替换为当前的总页数\\n     */</span>\\n    errorText<span class=\\"token operator\\">:</span> <span class=\\"token builtin\\">string</span><span class=\\"token punctuation\\">;</span>\\n  <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">;</span>\\n\\n  <span class=\\"token doc-comment comment\\">/**\\n   * 加密\\n   */</span>\\n  encryptLocales<span class=\\"token operator\\">:</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token doc-comment comment\\">/**\\n     * 加密图标的无障碍标签\\n     */</span>\\n    iconLabel<span class=\\"token operator\\">:</span> <span class=\\"token builtin\\">string</span><span class=\\"token punctuation\\">;</span>\\n\\n    <span class=\\"token doc-comment comment\\">/**\\n     * 密码输入框的默认占位符\\n     */</span>\\n    placeholder<span class=\\"token operator\\">:</span> <span class=\\"token builtin\\">string</span><span class=\\"token punctuation\\">;</span>\\n\\n    <span class=\\"token doc-comment comment\\">/**\\n     * 是否记忆密码\\n     */</span>\\n    remember<span class=\\"token operator\\">:</span> <span class=\\"token builtin\\">string</span><span class=\\"token punctuation\\">;</span>\\n\\n    <span class=\\"token doc-comment comment\\">/**\\n     * 密码错误提示\\n     */</span>\\n    errorHint<span class=\\"token operator\\">:</span> <span class=\\"token builtin\\">string</span><span class=\\"token punctuation\\">;</span>\\n  <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">;</span>\\n\\n  navbarLocales<span class=\\"token operator\\">:</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token doc-comment comment\\">/**\\n     * 语言下拉列表的无障碍标签\\n     */</span>\\n    selectLangAriaLabel<span class=\\"token operator\\">:</span> <span class=\\"token builtin\\">string</span><span class=\\"token punctuation\\">;</span>\\n\\n    <span class=\\"token doc-comment comment\\">/**\\n     * 当前语言的名称\\n     */</span>\\n    langName<span class=\\"token operator\\">:</span> <span class=\\"token builtin\\">string</span><span class=\\"token punctuation\\">;</span>\\n  <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">;</span>\\n\\n  <span class=\\"token doc-comment comment\\">/**\\n   * 页面元信息\\n   */</span>\\n  metaLocales<span class=\\"token operator\\">:</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token doc-comment comment\\">/**\\n     * 作者文字\\n     */</span>\\n    author<span class=\\"token operator\\">:</span> <span class=\\"token builtin\\">string</span><span class=\\"token punctuation\\">;</span>\\n\\n    <span class=\\"token doc-comment comment\\">/**\\n     * 写作日期文字\\n     */</span>\\n    date<span class=\\"token operator\\">:</span> <span class=\\"token builtin\\">string</span><span class=\\"token punctuation\\">;</span>\\n\\n    <span class=\\"token doc-comment comment\\">/**\\n     * 标记原创的文字\\n     */</span>\\n    origin<span class=\\"token operator\\">:</span> <span class=\\"token builtin\\">string</span><span class=\\"token punctuation\\">;</span>\\n\\n    <span class=\\"token doc-comment comment\\">/**\\n     * 访问量文字\\n     */</span>\\n    views<span class=\\"token operator\\">:</span> <span class=\\"token builtin\\">string</span><span class=\\"token punctuation\\">;</span>\\n\\n    <span class=\\"token doc-comment comment\\">/**\\n     * 标签文字\\n     */</span>\\n    tag<span class=\\"token operator\\">:</span> <span class=\\"token builtin\\">string</span><span class=\\"token punctuation\\">;</span>\\n\\n    <span class=\\"token doc-comment comment\\">/**\\n     * 分类文字\\n     */</span>\\n    category<span class=\\"token operator\\">:</span> <span class=\\"token builtin\\">string</span><span class=\\"token punctuation\\">;</span>\\n\\n    <span class=\\"token doc-comment comment\\">/**\\n     * 期望阅读时间文字\\n     */</span>\\n    readingTime<span class=\\"token operator\\">:</span> <span class=\\"token builtin\\">string</span><span class=\\"token punctuation\\">;</span>\\n\\n    <span class=\\"token doc-comment comment\\">/**\\n     * 文章字数\\n     */</span>\\n    words<span class=\\"token operator\\">:</span> <span class=\\"token builtin\\">string</span><span class=\\"token punctuation\\">;</span>\\n\\n    <span class=\\"token doc-comment comment\\">/**\\n     * 此页内容\\n     */</span>\\n    toc<span class=\\"token operator\\">:</span> <span class=\\"token builtin\\">string</span><span class=\\"token punctuation\\">;</span>\\n\\n    <span class=\\"token doc-comment comment\\">/**\\n     * 上一页\\n     */</span>\\n    prev<span class=\\"token operator\\">:</span> <span class=\\"token builtin\\">string</span><span class=\\"token punctuation\\">;</span>\\n\\n    <span class=\\"token doc-comment comment\\">/**\\n     * 下一页\\n     */</span>\\n    next<span class=\\"token operator\\">:</span> <span class=\\"token builtin\\">string</span><span class=\\"token punctuation\\">;</span>\\n\\n    <span class=\\"token doc-comment comment\\">/**\\n     * 更新时间文字\\n     */</span>\\n    lastUpdated<span class=\\"token operator\\">:</span> <span class=\\"token builtin\\">string</span><span class=\\"token punctuation\\">;</span>\\n\\n    <span class=\\"token doc-comment comment\\">/**\\n     * 贡献者文字\\n     */</span>\\n    contributors<span class=\\"token operator\\">:</span> <span class=\\"token builtin\\">string</span><span class=\\"token punctuation\\">;</span>\\n\\n    <span class=\\"token doc-comment comment\\">/**\\n     * 编辑此页文字\\n     */</span>\\n    editLink<span class=\\"token operator\\">:</span> <span class=\\"token builtin\\">string</span><span class=\\"token punctuation\\">;</span>\\n  <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">;</span>\\n\\n  routeLocales<span class=\\"token operator\\">:</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token doc-comment comment\\">/**\\n     * 跳转到主要内容\\n     */</span>\\n    skipToContent<span class=\\"token operator\\">:</span> <span class=\\"token builtin\\">string</span><span class=\\"token punctuation\\">;</span>\\n\\n    <span class=\\"token doc-comment comment\\">/**\\n     * 404 页面的标题\\n     */</span>\\n    notFoundTitle<span class=\\"token operator\\">:</span> <span class=\\"token builtin\\">string</span><span class=\\"token punctuation\\">;</span>\\n\\n    <span class=\\"token doc-comment comment\\">/**\\n     * 404 页面提示\\n     */</span>\\n    notFoundMsg<span class=\\"token operator\\">:</span> <span class=\\"token builtin\\">string</span><span class=\\"token punctuation\\">[</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">;</span>\\n\\n    <span class=\\"token doc-comment comment\\">/**\\n     * 返回主页\\n     */</span>\\n    home<span class=\\"token operator\\">:</span> <span class=\\"token builtin\\">string</span><span class=\\"token punctuation\\">;</span>\\n\\n    <span class=\\"token doc-comment comment\\">/**\\n     * 返回上一页\\n     */</span>\\n    back<span class=\\"token operator\\">:</span> <span class=\\"token builtin\\">string</span><span class=\\"token punctuation\\">;</span>\\n\\n    <span class=\\"token doc-comment comment\\">/**\\n     * `&lt;ExternalLinkIcon&gt;` 的仅供屏幕阅读器文字\\n     */</span>\\n    openInNewWindow<span class=\\"token operator\\">:</span> <span class=\\"token builtin\\">string</span><span class=\\"token punctuation\\">;</span>\\n  <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>"}');export{n as data};