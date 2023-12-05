import{_ as k}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o as v,c as g,a as i,e as a,w as e,b as n,d as s,f as u}from"./app-d630ecd8.js";const b={},h=n("p",null,"插件为你带来了交互演示支持。",-1),y=n("h2",{id:"配置",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#配置","aria-hidden":"true"},"#"),s(" 配置")],-1),A=n("div",{class:"language-typescript line-numbers-mode","data-ext":"ts"},[n("pre",{ts:"",class:"language-typescript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.ts"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" mdEnhance "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress-plugin-md-enhance"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
  plugins`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
    `),n("span",{class:"token function"},"mdEnhance"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token comment"},"// 在此放置交互演示配置"),s(`
      playground`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token comment"},"// 添加预设"),s(`
        presets`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
          `),n("span",{class:"token string"},'"ts"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token string"},'"vue"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token string"},'"unocss"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"{"),s(`
            name`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"playground#language"'),n("span",{class:"token punctuation"},","),s(`
            component`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"PlaygroundComponent"'),n("span",{class:"token punctuation"},","),s(`
            propsGetter`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"("),s(`
              playgroundData`),n("span",{class:"token operator"},":"),s(" PlaygroundData"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},":"),s(" Record"),n("span",{class:"token operator"},"<"),n("span",{class:"token builtin"},"string"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token builtin"},"string"),n("span",{class:"token operator"},">"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
              `),n("span",{class:"token comment"},"// 交互演示属性"),s(`
            `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token comment"},"// 设置内置预设 (可选)"),s(`
        config`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
          ts`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token comment"},"// ..."),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
          vue`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token comment"},"// ..."),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
          unocss`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token comment"},"// ..."),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"highlight-lines"},[n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("br"),n("br"),n("br")]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),f=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{js:"",class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.js"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" mdEnhance "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress-plugin-md-enhance"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token literal-property property"},"plugins"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
    `),n("span",{class:"token function"},"mdEnhance"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token comment"},"// 在此放置交互演示配置"),s(`
      `),n("span",{class:"token literal-property property"},"playground"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token comment"},"// 添加预设"),s(`
        `),n("span",{class:"token literal-property property"},"presets"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
          `),n("span",{class:"token string"},'"ts"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token string"},'"vue"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token string"},'"unocss"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"playground#language"'),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"component"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"PlaygroundComponent"'),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"propsGetter"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"("),s(`
              `),n("span",{class:"token literal-property property"},"playgroundData"),n("span",{class:"token operator"},":"),s(` PlaygroundData
            `),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},":"),s(" Record"),n("span",{class:"token operator"},"<"),s("string"),n("span",{class:"token punctuation"},","),s(" string"),n("span",{class:"token operator"},">"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
              `),n("span",{class:"token comment"},"// 交互演示属性"),s(`
            `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token comment"},"// 设置内置预设 (可选)"),s(`
        `),n("span",{class:"token literal-property property"},"config"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token literal-property property"},"ts"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token comment"},"// ..."),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"vue"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token comment"},"// ..."),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"unocss"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token comment"},"// ..."),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"highlight-lines"},[n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("br"),n("br"),n("br")]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),B=u('<h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h2><p>你应该通过插件选项中的 <code>playground.presets</code> 添加预设。</p><p>要使用交互演示，你应该使用一个名为 <code>playground#preset</code> 的容器。</p><p>在其中，你可以使用 3 个指令：</p><ul><li><code>@file fileName</code> 紧跟文件的代码块</li><li><code>@import importMapFileName</code> 紧跟一个自定义“导入映射”的 json 代码块</li><li><code>@setting</code> 紧跟一个自定义设置的 json 代码块</li></ul><p>你可以查看以下演示以查看更多详细信息。</p><h2 id="可用预设" tabindex="-1"><a class="header-anchor" href="#可用预设" aria-hidden="true">#</a> 可用预设</h2><p>目前，我们支持 <code>ts</code>、<code>vue</code>和 <code>unocss</code> 预设，我们期待更多来自 PR 的预设。</p><p>如果你想添加自己的交互演示，可以在 <a href="#%E9%AB%98%E7%BA%A7%E7%94%A8%E6%B3%95">高级用法</a> 中添加你自己的预设。同时我们欢迎为你的精彩预设创建 PR。</p><div class="hint-container info"><p class="hint-container-title">TS 预设</p><p>TS 预设默认使用官方交互演示，不支持多个 ts 文件，所以你需要做的就是通过 <code>@file xxx.ts</code> 指令添加一个 ts 文件 (文件名不重要，但需要 <code>.ts</code> 文件扩展名)。</p><p>要使用定制化的编译器选项，你可以通过 <code>@setting</code> 指令提供一个。但请注意，官方 TS Playground 并不支持所有的编译器。</p><p>同时，你可以通过插件选项中的 <code>playground.config.ts</code> 自定义默认的 compilerOption，通过 <code>service</code> 选项可以使用官方交互演示之外的其他服务，以防你想部署自己的交互演示站点。</p></div>',10),w={class:"hint-container info"},_=n("p",{class:"hint-container-title"},"Vue 预设",-1),C=n("p",null,[s("但是如果你只想要几个演示而不是捆绑整个 Vue 交互演示，你可以使用这个预设来创建一个 "),n("code",null,"<iframe>"),s("。")],-1),E=n("p",null,[n("code",null,"@setting"),s(" 指令中只有 "),n("code",null,"service"),s("、"),n("code",null,"dev"),s(" 和 "),n("code",null,"ssr"),s(" 选项可用。")],-1),I={class:"hint-container info"},x=n("p",{class:"hint-container-title"},"UnoCSS 预设",-1),j={href:"https://unocss.dev/play",target:"_blank",rel:"noopener noreferrer"},D=n("code",null,"@file",-1),V=n("code",null,"index.html",-1),Z=n("code",null,"config.js",-1),S=n("code",null,"style.css",-1),G=u("<ul><li><code>@file index.html</code> 对应 <code>HTML</code>，没有对应文件则会使用官方的默认值</li><li><code>@file config.js</code> 对应 <code>Config</code>，没有对应文件则会使用官方默认值</li><li><code>@file style.css</code> 对应 <code>Custom CSS</code>，没有则为空</li></ul><p>❗ 注意该预设不支持多个 html/js/css 文件 在配置中，可以通过 <code>playground.config.unocss</code> 中的 <code>service</code> 选项使用官方交互演示之外的其他服务，以防你想部署自己的交互演示站点</p>",2),F=n("h2",{id:"案例",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#案例","aria-hidden":"true"},"#"),s(" 案例")],-1),P=n("div",{class:"language-markdown line-numbers-mode","data-ext":"md"},[n("pre",{class:"language-markdown"},[n("code",null,[s(`::: playground#ts TS 案例 1

@file index.ts

`),n("span",{class:"token code"},[n("span",{class:"token punctuation"},"```"),n("span",{class:"token code-language"},"ts"),s(`
`),n("span",{class:"token code-block language-ts language-ts language-ts"},[n("span",{class:"token keyword"},"const"),s(" msg "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},'"你好世界"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"speak"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),s("msg"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"string"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token builtin"},"console"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("msg"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token function"},"speak"),n("span",{class:"token punctuation"},"("),s("msg"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"token punctuation"},"```")]),s(`

:::

::: playground#ts TS 案例 2

@file index.ts

`),n("span",{class:"token code"},[n("span",{class:"token punctuation"},"```"),n("span",{class:"token code-language"},"ts"),s(`
`),n("span",{class:"token code-block language-ts language-ts language-ts"},[n("span",{class:"token keyword"},"const"),s(" msg "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},'"你好世界"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"speak"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),s("msg"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"string"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token builtin"},"console"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("msg"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token function"},"speak"),n("span",{class:"token punctuation"},"("),s("msg"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"token punctuation"},"```")]),s(`

@setting

`),n("span",{class:"token code"},[n("span",{class:"token punctuation"},"```"),n("span",{class:"token code-language"},"json"),s(`
`),n("span",{class:"token code-block language-json language-json language-json"},[n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},'"target"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"es5"'),s(`
`),n("span",{class:"token punctuation"},"}")]),s(`
`),n("span",{class:"token punctuation"},"```")]),s(`

:::
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),X=n("div",{class:"language-markdown line-numbers-mode","data-ext":"md"},[n("pre",{class:"language-markdown"},[n("code",null,[s(`::: playground#vue 使用自定义导入的 Vue 案例

@file App.vue

`),n("span",{class:"token code"},[n("span",{class:"token punctuation"},"```"),n("span",{class:"token code-language"},"vue"),s(`
`),n("span",{class:"token code-block language-vue language-vue language-vue"},`<script setup>
import { ref } from "vue";

import Comp from "./Comp.vue";

const msg = ref("Hello World!");
<\/script>

<template>
  <h1>{{ msg }}</h1>
  <input v-model="msg" />
  <Comp />
</template>`),s(`
`),n("span",{class:"token punctuation"},"```")]),s(`

@file Comp.vue

`),n("span",{class:"token code"},[n("span",{class:"token punctuation"},"```"),n("span",{class:"token code-language"},"vue"),s(`
`),n("span",{class:"token code-block language-vue language-vue language-vue"},`<template>
  <div>Comp</div>
</template>`),s(`
`),n("span",{class:"token punctuation"},"```")]),s(`

@import

`),n("span",{class:"token code"},[n("span",{class:"token punctuation"},"```"),n("span",{class:"token code-language"},"json"),s(`
`),n("span",{class:"token code-block language-json language-json language-json"},[n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},'"imports"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},'"vue"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"https://sfc.vuejs.org/vue.runtime.esm-browser.js"'),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}")]),s(`
`),n("span",{class:"token punctuation"},"```")]),s(`

:::

::: playground#vue 使用自定义设置的 Vue 案例

@file App.vue

`),n("span",{class:"token code"},[n("span",{class:"token punctuation"},"```"),n("span",{class:"token code-language"},"vue"),s(`
`),n("span",{class:"token code-block language-vue language-vue language-vue"},`<script setup>
import { ref } from "vue";

const msg = ref("Hello Playground!");
<\/script>

<template>
  <h1>{{ msg }}</h1>
  <input v-model="msg" />
</template>`),s(`
`),n("span",{class:"token punctuation"},"```")]),s(`

@setting

`),n("span",{class:"token code"},[n("span",{class:"token punctuation"},"```"),n("span",{class:"token code-language"},"json"),s(`
`),n("span",{class:"token code-block language-json language-json language-json"},[n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},'"dev"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token property"},'"ssr"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),s(`
`),n("span",{class:"token punctuation"},"}")]),s(`
`),n("span",{class:"token punctuation"},"```")]),s(`

:::
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),N=n("div",{class:"language-markdown line-numbers-mode","data-ext":"md"},[n("pre",{class:"language-markdown"},[n("code",null,[s(`::: playground#unocss UnoCSS 案例

@file index.html

`),n("span",{class:"token code"},[n("span",{class:"token punctuation"},"```"),n("span",{class:"token code-language"},"html"),s(`
`),n("span",{class:"token code-block language-html language-html language-html"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("flex flex-col text-center h-full justify-center"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("text-red"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("TEST for default preset"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("text-$fd-color"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("TEST for custom css"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"token punctuation"},"```")]),s(`

@file config.js

`),n("span",{class:"token code"},[n("span",{class:"token punctuation"},"```"),n("span",{class:"token code-language"},"js"),s(`
`),n("span",{class:"token code-block language-js language-js language-js"},[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" defineConfig"),n("span",{class:"token punctuation"},","),s(" presetUno "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"unocss"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"defineConfig"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token literal-property property"},"presets"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token function"},"presetUno"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"token punctuation"},"```")]),s(`

@file custom.css

`),n("span",{class:"token code"},[n("span",{class:"token punctuation"},"```"),n("span",{class:"token code-language"},"css"),s(`
`),n("span",{class:"token code-block language-css language-css language-css"},[n("span",{class:"token selector"},":root"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"--fd-color"),n("span",{class:"token punctuation"},":"),s(" green"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}")]),s(`
`),n("span",{class:"token punctuation"},"```")]),s(`

:::
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),L=u(`<h2 id="高级用法" tabindex="-1"><a class="header-anchor" href="#高级用法" aria-hidden="true">#</a> 高级用法</h2><p>你可以提供自己的预设。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">PlaygroundCodeConfig</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * 代码块扩展名
   *
   * <span class="token keyword">@description</span> 它基于文件名，而不是代码块语言
   */</span>
  ext<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 代码块内容
   */</span>
  content<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">PlaygroundData</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * 交互演示标题
   */</span>
  title<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Import map 文件名
   *
   * <span class="token keyword">@default</span> &#39;import-map.json&#39;
   */</span>
  importMap<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 交互演示件信息
   */</span>
  files<span class="token operator">:</span> Record<span class="token operator">&lt;</span>
    <span class="token doc-comment comment">/**
     * 文件名
     */</span>
    <span class="token builtin">string</span><span class="token punctuation">,</span>
    <span class="token doc-comment comment">/**
     * 文件详情
     */</span>
    PlaygroundCodeConfig
  <span class="token operator">&gt;</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 交互演示设置
   *
   * <span class="token keyword">@description</span> 它是设置指令后的 json 内容的解析结果
   */</span>
  settings<span class="token operator">:</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">unknown</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 根据交互演示内容生成的 hash key
   */</span>
  key<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">PlaygroundOptions</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * 交互演示容器名
   */</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 交互演示组件名称
   *
   * <span class="token keyword">@default</span> &#39;Playground&#39;
   */</span>
  component<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 属性获取器
   */</span>
  <span class="token function-variable function">propsGetter</span><span class="token operator">:</span> <span class="token punctuation">(</span>data<span class="token operator">:</span> PlaygroundData<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">string</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们为 <code>getter</code> 函数提供了一个 <code>playgroundData</code> 对象，你应该提供下列内容:</p><ul><li>通过 <code>name</code> 选项提供容器名称</li><li>通过 <code>component</code> 选项提供客户端组件名称</li><li>通过 <code>propsGetter</code> 选项提供一个接收 playgroundData 并返回格式为 <code>attr</code> → <code>value</code> 属性映射的函数</li></ul>`,5);function J(T,Q){const d=t("CodeTabs"),r=t("RouterLink"),m=t("ExternalLinkIcon"),l=t("Playground"),c=t("MdDemo");return v(),g("div",null,[h,i(" more "),y,a(d,{id:"7",data:[{id:"TS"},{id:"JS"}],"tab-id":"config"},{title0:e(({value:o,isActive:p})=>[s("TS")]),title1:e(({value:o,isActive:p})=>[s("JS")]),tab0:e(({value:o,isActive:p})=>[A]),tab1:e(({value:o,isActive:p})=>[f]),_:1}),i(" #region middle "),B,n("div",w,[_,i(" #endregion middle "),n("p",null,[s("Vue 预设默认使用官方 playground，并不像 "),a(r,{to:"/zh/guide/markdown/vue-playground.html"},{default:e(()=>[s("Vue Playground")]),_:1}),s(" 支持自定义选项。因此，如果你严重依赖 Vue 交互演示，我们建议你改用 "),a(r,{to:"/zh/guide/markdown/vue-playground.html"},{default:e(()=>[s("Vue 交互演示")]),_:1}),s("。")]),i(" #region after "),C,E]),n("div",I,[x,n("p",null,[s("UnoCSS 预设默认使用"),n("a",j,[s("官方 playground"),a(m)]),s("，可通过 "),D,s(" 指定添加三个文件（"),V,s(", "),Z,s(", "),S,s("），对应官方 playground 的相应输入：")]),G]),F,a(c,{title:"TS",id:"md-demo-109"},{default:e(()=>[a(l,{key:"1ce44707",title:"TS%20%E6%A1%88%E4%BE%8B%201",link:"https%3A%2F%2Fwww.typescriptlang.org%2Fplay%23code%2FMYewdgzgLgBAthA5jAvDARIA3lC%2BmoNDlAyrugNwBQJoksEADgKYCGA1qjABQKIBcM0ATgJZhEASlQA%2BGBQggANrQB0MkInZJhpEjQaNVI0kA"}),a(l,{key:"023a720d",title:"TS%20%E6%A1%88%E4%BE%8B%202",link:"https%3A%2F%2Fwww.typescriptlang.org%2Fplay%3F1%23code%2FMYewdgzgLgBAthA5jAvDARIA3lC%2BmoNDlAyrugNwBQJoksEADgKYCGA1qjABQKIBcM0ATgJZhEASlQA%2BGBQggANrQB0MkInZJhpEjQaNVI0kA"})]),code:e(()=>[P]),_:1}),a(c,{title:"Vue",id:"md-demo-125"},{default:e(()=>[a(l,{key:"af065fee",title:"%E4%BD%BF%E7%94%A8%E8%87%AA%E5%AE%9A%E4%B9%89%E5%AF%BC%E5%85%A5%E7%9A%84%20Vue%20%E6%A1%88%E4%BE%8B",link:"https%3A%2F%2Fsfc.vuejs.org%2F%23eyJBcHAudnVlIjoiPHNjcmlwdCBzZXR1cD5cbmltcG9ydCB7IHJlZiB9IGZyb20gXCJ2dWVcIjtcblxuaW1wb3J0IENvbXAgZnJvbSBcIi4vQ29tcC52dWVcIjtcblxuY29uc3QgbXNnID0gcmVmKFwiSGVsbG8gV29ybGQhXCIpO1xuPC9zY3JpcHQ%2BXG5cbjx0ZW1wbGF0ZT5cbiAgPGgxPnt7IG1zZyB9fTwvaDE%2BXG4gIDxpbnB1dCB2LW1vZGVsPVwibXNnXCIgLz5cbiAgPENvbXAgLz5cbjwvdGVtcGxhdGU%2BXG4iLCJDb21wLnZ1ZSI6Ijx0ZW1wbGF0ZT5cbiAgPGRpdj5Db21wPC9kaXY%2BXG48L3RlbXBsYXRlPlxuIiwiaW1wb3J0LW1hcC5qc29uIjoie1xuICBcImltcG9ydHNcIjoge1xuICAgIFwidnVlXCI6IFwiaHR0cHM6Ly9zZmMudnVlanMub3JnL3Z1ZS5ydW50aW1lLmVzbS1icm93c2VyLmpzXCJcbiAgfVxufSJ9"}),a(l,{key:"4901e0a0",title:"%E4%BD%BF%E7%94%A8%E8%87%AA%E5%AE%9A%E4%B9%89%E8%AE%BE%E7%BD%AE%E7%9A%84%20Vue%20%E6%A1%88%E4%BE%8B",link:"https%3A%2F%2Fsfc.vuejs.org%2F%23__DEV____SSR__eyJBcHAudnVlIjoiPHNjcmlwdCBzZXR1cD5cbmltcG9ydCB7IHJlZiB9IGZyb20gXCJ2dWVcIjtcblxuY29uc3QgbXNnID0gcmVmKFwiSGVsbG8gUGxheWdyb3VuZCFcIik7XG48L3NjcmlwdD5cblxuPHRlbXBsYXRlPlxuICA8aDE%2Be3sgbXNnIH19PC9oMT5cbiAgPGlucHV0IHYtbW9kZWw9XCJtc2dcIiAvPlxuPC90ZW1wbGF0ZT5cbiIsImltcG9ydC1tYXAuanNvbiI6IntcbiAgXCJpbXBvcnRzXCI6IHtcbiAgICBcInZ1ZVwiOiBcImh0dHBzOi8vc2ZjLnZ1ZWpzLm9yZy92dWUucnVudGltZS5lc20tYnJvd3Nlci5qc1wiLFxuICAgIFwidnVlL3NlcnZlci1yZW5kZXJlclwiOiBcImh0dHBzOi8vc2ZjLnZ1ZWpzLm9yZy9zZXJ2ZXItcmVuZGVyZXIuZXNtLWJyb3dzZXIuanNcIlxuICB9XG59In0%3D"})]),code:e(()=>[X]),_:1}),a(c,{title:"UnoCSS",id:"md-demo-147"},{default:e(()=>[a(l,{key:"327eb40d",title:"UnoCSS%20%E6%A1%88%E4%BE%8B",link:"https%3A%2F%2Funocss.dev%2Fplay%2F%3Fhtml%3DDwEwlgbgBAxgNgQwM5ILwCIBmcCmAPKbfAWhgHs4oAXfK0nAOxoCcoALYzAVzkoCsuSKmEwBPekxzN0APgBQUKKEixEKDDTx1mOELIAqAUQDK%2BwmVYgcmBDypQADjqQ4qwAPTgI8xcujxkNHRNOgASTBBSCgsDEzNMC1hBKjIAW1gUDy95LMh5IA%26config%3DJYWwDg9gTgLgBAbzgEwKYDNgDtUGEJaYDmANHGFKgM6owCqWEcAvnOlBCHAEQCujAYypVuAbgBQ41AA9IsFBgCGvADbw0mHPkLAiACgTi45SjRhUAXHADaFarQYQ9ASgC6Jcc2cSgA%26css%3DFwJw9mAuAEDeBQ1oFpkDMAmyDGYA2YIw0A5iAKbkB2A3PAL7xA"})]),code:e(()=>[N]),_:1}),L,i(" #endregion after ")])}const W=k(b,[["render",J],["__file","playground.html.vue"]]);export{W as default};
