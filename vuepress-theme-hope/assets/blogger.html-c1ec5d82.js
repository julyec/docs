import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{r as c,o as l,c as p,a as u,b as n,e as r,w as e,f as d,d as s}from"./app-d630ecd8.js";const m="/vuepress-theme-hope/assets/blogger-info-light-5eb00ff1.png",k="/vuepress-theme-hope/assets/blogger-info-dark-7bced54d.png",b={},v=n("p",null,"Themes allow you to display basic information about the blogger.",-1),g=d('<p><img src="'+m+'" alt="Blogger info" data-mode="lightmode-only" loading="lazy"><img src="'+k+'" alt="Blogger info" data-mode="darkmode-only" loading="lazy"></p><h2 id="avatar-and-blogger-name" tabindex="-1"><a class="header-anchor" href="#avatar-and-blogger-name" aria-hidden="true">#</a> Avatar and blogger name</h2><p>You can config blogger avatar and name displayed through <code>blog.avatar</code> and <code>blog.name</code>.</p><div class="hint-container note"><p class="hint-container-title">Note</p><p>If you don&#39;t set those options, they automatically fall back to the site logo (<code>logo</code> in theme options) and site name.</p></div><div class="hint-container tip"><p class="hint-container-title">Tips</p><p>If you want the avatar to be clipped with round shape, set <code>blog.roundAvatar: true</code>.</p></div><h2 id="motto-social-media-profile-link" tabindex="-1"><a class="header-anchor" href="#motto-social-media-profile-link" aria-hidden="true">#</a> Motto, Social Media &amp; Profile Link</h2><p>You can use <code>blog.description</code> to set your own introduction, motto or slogan.</p><p>You can also specify a personal introduction page link through <code>blog.intro</code>, so when users click on the avatar and name, they will be direct to that page.</p><p>You can also config your social media links with <code>blog.medias</code> option.</p><ul><li><p>If the social media icon is available below, you can set <code>MediaName: MediaLink</code> directly.</p></li><li><p>Otherwise, you should pass in a tuple <code>MediaName: [MediaLink , MediaSvgIconString or MediaSvgIconPath]</code>,</p><p>The second element in the tuple must be a valid SVG string or a full path of an existing SVG file.</p></li></ul><div class="hint-container tip"><p class="hint-container-title">Available social media:</p><ul><li><code>&quot;Baidu&quot;</code></li><li><code>&quot;BiliBili&quot;</code></li><li><code>&quot;Bitbucket&quot;</code></li><li><code>&quot;Dingding&quot;</code></li><li><code>&quot;Discord&quot;</code></li><li><code>&quot;Douban&quot;</code></li><li><code>&quot;Dribbble&quot;</code></li><li><code>&quot;Email&quot;</code></li><li><code>&quot;Evernote&quot;</code></li><li><code>&quot;Facebook&quot;</code></li><li><code>&quot;Flipboard&quot;</code></li><li><code>&quot;Gitee&quot;</code></li><li><code>&quot;GitHub&quot;</code></li><li><code>&quot;Gitlab&quot;</code></li><li><code>&quot;Gmail&quot;</code></li><li><code>&quot;Instagram&quot;</code></li><li><code>&quot;Lark&quot;</code></li><li><code>&quot;Line&quot;</code></li><li><code>&quot;Linkedin&quot;</code></li><li><code>&quot;Pinterest&quot;</code></li><li><code>&quot;Pocket&quot;</code></li><li><code>&quot;QQ&quot;</code></li><li><code>&quot;Qzone&quot;</code></li><li><code>&quot;Reddit&quot;</code></li><li><code>&quot;Rss&quot;</code></li><li><code>&quot;Steam&quot;</code></li><li><code>&quot;Skype&quot;</code></li><li><code>&quot;Telegram&quot;</code></li><li><code>&quot;Twitter&quot;</code></li><li><code>&quot;Wechat&quot;</code></li><li><code>&quot;Weibo&quot;</code></li><li><code>&quot;Whatsapp&quot;</code></li><li><code>&quot;Youtube&quot;</code></li><li><code>&quot;Zhihu&quot;</code></li></ul></div>',11),h={class:"hint-container details"},q=n("summary",null,"Example",-1),y=n("div",{class:"language-typescript line-numbers-mode","data-ext":"ts"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.ts"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" getDirname"),n("span",{class:"token punctuation"},","),s(" path "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"@vuepress/utils"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" defineUserConfig "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" hopeTheme "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress-theme-hope"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(" __dirname "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"getDirname"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"import"),n("span",{class:"token punctuation"},"."),s("meta"),n("span",{class:"token punctuation"},"."),s("url"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"defineUserConfig"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  theme`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token function"},"hopeTheme"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
    blog`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
      medias`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token comment"},"// GitHub Icon is available"),s(`
        GitHub`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"https://github.com/Mister-Hope"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token comment"},'// A custom Media called "MediaX" (just an example)'),s(`
        MediaX`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
          `),n("span",{class:"token comment"},"// link"),s(`
          `),n("span",{class:"token string"},'"https://mediax.com/UserX/"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token comment"},"// icon string"),s(`
          `),n("span",{class:"token string"},'"<svg ....</svg>"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token comment"},'// A custom Media called "MediaY" (just an example)'),s(`
        MediaY`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
          `),n("span",{class:"token comment"},"// link"),s(`
          `),n("span",{class:"token string"},'"https://mediay.com/UserY/"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token comment"},"// icon path"),s(`
          path`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"resolve"),n("span",{class:"token punctuation"},"("),s("__dirname"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"icons/mediay.svg"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),f=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.js"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" getDirname"),n("span",{class:"token punctuation"},","),s(" path "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"@vuepress/utils"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" hopeTheme "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress-theme-hope"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(" __dirname "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"getDirname"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"import"),n("span",{class:"token punctuation"},"."),s("meta"),n("span",{class:"token punctuation"},"."),s("url"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token literal-property property"},"theme"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token function"},"hopeTheme"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"blog"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token literal-property property"},"medias"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token comment"},"// GitHub Icon is available"),s(`
        `),n("span",{class:"token literal-property property"},"GitHub"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"https://github.com/Mister-Hope"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token comment"},'// A custom Media called "MediaX" (just an example)'),s(`
        `),n("span",{class:"token literal-property property"},"MediaX"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
          `),n("span",{class:"token comment"},"// link"),s(`
          `),n("span",{class:"token string"},'"https://mediax.com/UserX/"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token comment"},"// icon string"),s(`
          `),n("span",{class:"token string"},'"<svg ....</svg>"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token comment"},'// A custom Media called "MediaY" (just an example)'),s(`
        `),n("span",{class:"token literal-property property"},"MediaY"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
          `),n("span",{class:"token comment"},"// link"),s(`
          `),n("span",{class:"token string"},'"https://mediay.com/UserY/"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token comment"},"// icon path"),s(`
          path`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"resolve"),n("span",{class:"token punctuation"},"("),s("__dirname"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"icons/mediay.svg"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1);function _(w,M){const o=c("CodeTabs");return l(),p("div",null,[v,u(" more "),g,n("details",h,[q,r(o,{id:"225",data:[{id:"TS"},{id:"JS"}],"tab-id":"language"},{title0:e(({value:a,isActive:t})=>[s("TS")]),title1:e(({value:a,isActive:t})=>[s("JS")]),tab0:e(({value:a,isActive:t})=>[y]),tab1:e(({value:a,isActive:t})=>[f]),_:1})])])}const S=i(b,[["render",_],["__file","blogger.html.vue"]]);export{S as default};
