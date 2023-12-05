import{r as e,b as a,c as r,d as i,e as t,t as l,a as s,o as n}from"./chunks/framework.ee9e66be.js";const o=t("h1",{id:"releases",tabindex:"-1"},[i("版本发布 "),t("a",{class:"header-anchor",href:"#releases","aria-label":'Permalink to "版本发布 {#releases}"'},"​")],-1),p={key:0},c={key:1},d=s('<p>完整的过往发布记录可以在 <a href="https://github.com/vuejs/core/blob/main/CHANGELOG.md" target="_blank" rel="noreferrer">GitHub</a> 查阅。</p><h2 id="release-cycle" tabindex="-1">发布周期 <a class="header-anchor" href="#release-cycle" aria-label="Permalink to &quot;发布周期 {#release-cycle}&quot;">​</a></h2><p>Vue 并没有固定的发布周期。</p><ul><li><p>补丁版本 (patch releases) 发布会及时按需进行。</p></li><li><p>小版本 (minor releases) 发布总是会包含一些新特性，发布周期通常会在 3~6 个月之间，并会经历 beta 预发布阶段。</p></li><li><p>大版本 (major releases) 发布会提前知会，且经历早期讨论和 alpha、beta 等预发布阶段。</p></li></ul><h2 id="semantic-versioning-edge-cases" tabindex="-1">语义化版本控制的特殊情况 <a class="header-anchor" href="#semantic-versioning-edge-cases" aria-label="Permalink to &quot;语义化版本控制的特殊情况 {#semantic-versioning-edge-cases}&quot;">​</a></h2><p>Vue 的发布会遵循<a href="https://semver.org/" target="_blank" rel="noreferrer">语义化版本控制</a>，同时伴随一些特殊情况。</p><h3 id="typescript-definitions" tabindex="-1">TypeScript 类型声明 <a class="header-anchor" href="#typescript-definitions" aria-label="Permalink to &quot;TypeScript 类型声明 {#typescript-definitions}&quot;">​</a></h3><p>我们可能会在<strong>小版本</strong>发布之间包含 TypeScript 类型声明的不兼容变更，因为：</p><ol><li><p>有的时候 TypeScript 自身会在其小版本之间发布不兼容变更，我们不得不为了支持更新版本的 TypeScript 而调整自身的类型定义。</p></li><li><p>我们也会偶尔需要使用最新版本的 TypeScript 中才可用的特性，并提升 TypeScript 的最低版本要求。</p></li></ol><p>如果你正在使用 TypeScript，则可以使用一个语义化版本的范围来锁住当前的小版本，并在 Vue 新的小版本发布时进行手动升级。</p><h3 id="compiled-code-compatibility-with-older-runtime" tabindex="-1">编译后的代码和旧版运行时之间的兼容性 <a class="header-anchor" href="#compiled-code-compatibility-with-older-runtime" aria-label="Permalink to &quot;编译后的代码和旧版运行时之间的兼容性 {#compiled-code-compatibility-with-older-runtime}&quot;">​</a></h3><p>较新<strong>小版本</strong>的 Vue 编译器可能会生成与较旧小版本的 Vue 运行时不兼容的代码。例如，由 Vue 3.2 编译器生成的代码可能不完全兼容 Vue 3.1 的运行时。</p><p>只有库的作者需要考虑这个问题，因为编译器版本和运行时版本在应用中总是相同的。只有当你把预编译的 Vue 组件代码发布为一个包，而用户在一个使用旧版本 Vue 的项目中使用它时，才会发生版本不匹配。因此，你的包可能需要明确声明 Vue 的最低小版本要求。</p><h2 id="pre-releases" tabindex="-1">预发布版本 <a class="header-anchor" href="#pre-releases" aria-label="Permalink to &quot;预发布版本 {#pre-releases}&quot;">​</a></h2><p>小版本发布通常会经历不定量的 beta 版。而大版本发布则会经历 alpha 和 beta 阶段。</p><p>此外，我们每周都会从 GitHub 上的 <code>main</code> 和 <code>minor</code> 分支发布金丝雀版本。它们将作为不同的软件包发布以避免稳定通道的 npm 元数据变得臃肿。你可以分别通过 <code>npx install-vue@canary</code> 或 <code>npx install-vue@canary-minor</code> 安装它们。</p><p>预发布版本 (pre releases) 是为了进行集成/稳定性测试，并让早期用户为不稳定的功能提供反馈。请不要在生产中使用预发布版本。所有的预发布版本都被认为是不稳定的，并且可能会在两者之间产生不兼容变更，所以在使用预发布版本时，一定要精确锁定版本号。</p><h2 id="deprecations" tabindex="-1">废弃的特性 <a class="header-anchor" href="#deprecations" aria-label="Permalink to &quot;废弃的特性 {#deprecations}&quot;">​</a></h2><p>我们可能会定期废弃那些在新的小版本中拥有更新更好的替代品的功能。被废弃的功能仍将继续工作，但会在进入废弃状态后的下一个大版本中被删除。</p><h2 id="rfcs" tabindex="-1">RFC <a class="header-anchor" href="#rfcs" aria-label="Permalink to &quot;RFC {#rfcs}&quot;">​</a></h2><p>具有可观表层 API 的新特性和 Vue 的重大变更都将经历<strong>意见征集</strong> (RFC) 流程。RFC 流程的目的是为新功能进入该框架提供一个一致且可控的路径，并给用户一个机会参与设计过程并提供反馈。</p><p>该 RFC 流程会在 GitHub 上的 <a href="https://github.com/vuejs/rfcs" target="_blank" rel="noreferrer">vuejs/rfcs</a> 仓库进行。</p><h2 id="experimental-features" tabindex="-1">试验性特性 <a class="header-anchor" href="#experimental-features" aria-label="Permalink to &quot;试验性特性 {#experimental-features}&quot;">​</a></h2><p>有些特性在 Vue 的稳定版本中已经发布并被记录了，但被标记为试验性的。试验性特性通常与某些 RFC 讨论相关联，这些讨论中的大部分设计问题已经在理论上得到了解决，但仍缺乏来自真实实践的反馈。</p><p>试验性特性的目的是允许用户通过在生产环境中测试它们来提供反馈，而不必使用不稳定的 Vue 版本。试验性特性本身是被认为不稳定的，只能以某种受控的方式使用，且该特性可预期地会在任何发布类型中发生变化。</p>',25),h=JSON.parse('{"title":"版本发布","description":"","frontmatter":{"outline":"deep"},"headers":[{"level":2,"title":"发布周期","slug":"release-cycle","link":"#release-cycle","children":[]},{"level":2,"title":"语义化版本控制的特殊情况","slug":"semantic-versioning-edge-cases","link":"#semantic-versioning-edge-cases","children":[{"level":3,"title":"TypeScript 类型声明","slug":"typescript-definitions","link":"#typescript-definitions","children":[]},{"level":3,"title":"编译后的代码和旧版运行时之间的兼容性","slug":"compiled-code-compatibility-with-older-runtime","link":"#compiled-code-compatibility-with-older-runtime","children":[]}]},{"level":2,"title":"预发布版本","slug":"pre-releases","link":"#pre-releases","children":[]},{"level":2,"title":"废弃的特性","slug":"deprecations","link":"#deprecations","children":[]},{"level":2,"title":"RFC","slug":"rfcs","link":"#rfcs","children":[]},{"level":2,"title":"试验性特性","slug":"experimental-features","link":"#experimental-features","children":[]}],"relativePath":"about/releases.md","filePath":"about/releases.md"}'),u={name:"about/releases.md"},m=Object.assign(u,{setup(s){const h=e();return a((async()=>{const e=await fetch("https://api.github.com/repos/vuejs/core/releases/latest");h.value=(await e.json()).name})),(e,a)=>(n(),r("div",null,[o,h.value?(n(),r("p",p,[i(" 当前 Vue 的最新稳定版本是 "),t("strong",null,l(h.value),1),i("。 ")])):(n(),r("p",c," 正在检测最新版本…… ")),d]))}});export{h as __pageData,m as default};
