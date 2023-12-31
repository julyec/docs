import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{r as l,o as c,c as p,d as s,a as e,b as n,w as d,e as o}from"./app-d06631bc.js";const u={},h=e("h1",{id:"webpack",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#webpack","aria-hidden":"true"},"#"),n(" Webpack")],-1),_={href:"https://www.npmjs.com/package/@vuepress/bundler-webpack",target:"_blank",rel:"noopener noreferrer"},b={href:"https://www.npmjs.com/package/vuepress-webpack",target:"_blank",rel:"noopener noreferrer"},k=o(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> i <span class="token parameter variable">-D</span> @vuepress/bundler-webpack@next
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="配置项" tabindex="-1"><a class="header-anchor" href="#配置项" aria-hidden="true">#</a> 配置项</h2><p>Webpack 打包工具的配置项：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> webpackBundler <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@vuepress/bundler-webpack&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineUserConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@vuepress/cli&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineUserConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  bundler<span class="token operator">:</span> <span class="token function">webpackBundler</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    postcss<span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    vue<span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="configurewebpack" tabindex="-1"><a class="header-anchor" href="#configurewebpack" aria-hidden="true">#</a> configureWebpack</h3><ul><li><p>类型： <code>(config: WebpackConfiguration, isServer: boolean, isBuild: boolean) =&gt; WebpackConfiguration | void</code></p></li><li><p>详情：</p><p>用于修改内部的 Webpack 配置。</p><p>该配置项接收一个函数，该函数的第一个参数是 Webpack 配置对象，第二个参数是 <code>isServer</code> 标志位，第三个参数是 <code>isBuild</code> 标志位。</p></li></ul><h3 id="chainwebpack" tabindex="-1"><a class="header-anchor" href="#chainwebpack" aria-hidden="true">#</a> chainWebpack</h3>`,7),v=e("li",null,[e("p",null,[n("类型： "),e("code",null,"(config: WebpackChainConfig, isServer: boolean, isBuild: boolean) => void")])],-1),f=e("p",null,"详情：",-1),m={href:"https://github.com/mozilla-neutrino/webpack-chain",target:"_blank",rel:"noopener noreferrer"},g=e("p",null,[n("该配置项接收一个函数，该函数的第一个参数是由 "),e("code",null,"webpack-chain"),n(" 提供的 "),e("code",null,"Config"),n(" 实例，第二个参数是 "),e("code",null,"isServer"),n(" 标志位，第三个参数是 "),e("code",null,"isBuild"),n(" 标志位。")],-1),w=e("h3",{id:"devserversetupmiddlewares",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#devserversetupmiddlewares","aria-hidden":"true"},"#"),n(" devServerSetupMiddlewares")],-1),x=e("li",null,[e("p",null,[n("类型： "),e("code",null,"(middlewares: Middleware[], devServer: Server) => Middleware[]")])],-1),S=e("li",null,[e("p",null,"详情："),e("p",null,[n("在 Webpack 的 "),e("code",null,"devServer.setupMiddlewares"),n(" 中调用的 Hook 。")]),e("p",null,[n("函数的参数即是 "),e("code",null,"devServer.setupMiddlewares"),n(" 的参数。")])],-1),y=e("p",null,"参考：",-1),W={href:"https://webpack.js.org/configuration/dev-server/#devserversetupmiddlewares",target:"_blank",rel:"noopener noreferrer"},B=e("h3",{id:"vue",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#vue","aria-hidden":"true"},"#"),n(" vue")],-1),C=e("li",null,[e("p",null,[n("类型： "),e("code",null,"VueLoaderOptions")])],-1),L=e("li",null,[e("p",null,"详情："),e("p",null,[e("code",null,"vue-loader"),n(" 的配置项。")])],-1),O=e("p",null,"参考：",-1),M={href:"https://vue-loader.vuejs.org/zh/options.html",target:"_blank",rel:"noopener noreferrer"},N=e("h3",{id:"postcss",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#postcss","aria-hidden":"true"},"#"),n(" postcss")],-1),V=e("li",null,[e("p",null,[n("类型： "),e("code",null,"PostcssLoaderOptions")])],-1),j=e("li",null,[e("p",null,"详情："),e("p",null,[e("code",null,"postcss-loader"),n(" 的配置项。")])],-1),P=e("p",null,"参考：",-1),q={href:"https://github.com/webpack-contrib/postcss-loader#options",target:"_blank",rel:"noopener noreferrer"},z=e("h3",{id:"stylus",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#stylus","aria-hidden":"true"},"#"),n(" stylus")],-1),E=e("li",null,[e("p",null,[n("类型： "),e("code",null,"StylusLoaderOptions")])],-1),D=e("li",null,[e("p",null,"详情："),e("p",null,[e("code",null,"stylus-loader"),n(" 的配置项。")])],-1),H=e("p",null,"参考：",-1),I={href:"https://github.com/webpack-contrib/stylus-loader#options",target:"_blank",rel:"noopener noreferrer"},R=e("h3",{id:"scss",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#scss","aria-hidden":"true"},"#"),n(" scss")],-1),U=e("li",null,[e("p",null,[n("类型： "),e("code",null,"SassLoaderOptions")])],-1),A=e("li",null,[e("p",null,"详情："),e("p",null,[n("针对 "),e("code",null,".scss"),n(" 文件的 "),e("code",null,"sass-loader"),n(" 的配置项。")])],-1),T=e("p",null,"参考：",-1),F={href:"https://github.com/webpack-contrib/sass-loader#options",target:"_blank",rel:"noopener noreferrer"},G=e("h3",{id:"sass",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#sass","aria-hidden":"true"},"#"),n(" sass")],-1),J=e("li",null,[e("p",null,[n("类型： "),e("code",null,"SassLoaderOptions")])],-1),K=e("li",null,[e("p",null,"详情："),e("p",null,[n("针对 "),e("code",null,".sass"),n(" 文件的 "),e("code",null,"sass-loader"),n(" 的配置项。")])],-1),Q=e("p",null,"参考：",-1),X={href:"https://github.com/webpack-contrib/sass-loader#options",target:"_blank",rel:"noopener noreferrer"},Y=e("h3",{id:"less",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#less","aria-hidden":"true"},"#"),n(" less")],-1),Z=e("li",null,[e("p",null,[n("类型： "),e("code",null,"LessLoaderOptions")])],-1),$=e("li",null,[e("p",null,"详情："),e("p",null,[e("code",null,"less-loader"),n(" 的配置项。")])],-1),ee=e("p",null,"参考：",-1),ne={href:"https://github.com/webpack-contrib/less-loader#options",target:"_blank",rel:"noopener noreferrer"},se=o('<h3 id="evergreen" tabindex="-1"><a class="header-anchor" href="#evergreen" aria-hidden="true">#</a> evergreen</h3><ul><li><p>类型： <code>boolean</code></p></li><li><p>默认值： <code>true</code></p></li><li><p>详情：</p><p>如果你的对象只有那些 “常青树” 浏览器，你可以将其设置成 <code>true</code> 。这将会禁用一些转译过程和 Polyfills ，带来更快的构建速度和更小的文件体积。</p></li></ul><h2 id="常见问题" tabindex="-1"><a class="header-anchor" href="#常见问题" aria-hidden="true">#</a> 常见问题</h2><h3 id="在修改-base-后引用-public-文件" tabindex="-1"><a class="header-anchor" href="#在修改-base-后引用-public-文件" aria-hidden="true">#</a> 在修改 <code>base</code> 后引用 Public 文件</h3>',4),ae=e("code",null,"base",-1),le=e("code",null,"base",-1),oe=e("h3",{id:"使用默认主题",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#使用默认主题","aria-hidden":"true"},"#"),n(" 使用默认主题")],-1),te={href:"https://sass-lang.com/",target:"_blank",rel:"noopener noreferrer"},re={href:"https://pnpm.io/",target:"_blank",rel:"noopener noreferrer"},ie={href:"https://www.npmjs.com/package/sass-loader",target:"_blank",rel:"noopener noreferrer"};function ce(pe,de){const t=l("NpmBadge"),a=l("ExternalLinkIcon"),r=l("RouterLink");return c(),p("div",null,[h,s(t,{package:"@vuepress/bundler-webpack"}),e("p",null,[n("Webpack 打包工具是由 "),e("a",_,[n("@vuepress/bundler-webpack"),s(a)]),n(" 包提供的。它是 "),e("a",b,[n("vuepress-webpack"),s(a)]),n(" 包的依赖之一，当然你也可以单独安装它：")]),k,e("ul",null,[v,e("li",null,[f,e("p",null,[n("通过 "),e("a",m,[n("webpack-chain"),s(a)]),n(" 来修改内部的 Webpack 配置。")]),g])]),w,e("ul",null,[x,S,e("li",null,[y,e("ul",null,[e("li",null,[e("a",W,[n("Webpack > Configuration > DevServer > devServer.setupMiddlewares"),s(a)])])])])]),B,e("ul",null,[C,L,e("li",null,[O,e("ul",null,[e("li",null,[e("a",M,[n("vue-loader > 选项参考"),s(a)])])])])]),N,e("ul",null,[V,j,e("li",null,[P,e("ul",null,[e("li",null,[e("a",q,[n("postcss-loader > Options"),s(a)])])])])]),z,e("ul",null,[E,D,e("li",null,[H,e("ul",null,[e("li",null,[e("a",I,[n("stylus-loader > Options"),s(a)])])])])]),R,e("ul",null,[U,A,e("li",null,[T,e("ul",null,[e("li",null,[e("a",F,[n("sass-loader > Options"),s(a)])])])])]),G,e("ul",null,[J,K,e("li",null,[Q,e("ul",null,[e("li",null,[e("a",X,[n("sass-loader > Options"),s(a)])])])])]),Y,e("ul",null,[Z,$,e("li",null,[ee,e("ul",null,[e("li",null,[e("a",ne,[n("less-loader > Options"),s(a)])])])])]),se,e("p",null,[n("与 Vite 不同， Webpack 不会为 Public 文件自动处理 "),ae,n("。因此如果你修改了网站的 "),le,n("，建议你在引用 Public 图片文件时使用 "),s(r,{to:"/zh/guide/assets.html#base-helper"},{default:d(()=>[n("Base Helper")]),_:1}),n("。")]),oe,e("p",null,[n("默认主题使用 "),e("a",te,[n("SASS"),s(a)]),n(" 作为 CSS 预处理器，因此你在使用 Webpack 时（特别是在使用 "),e("a",re,[n("pnpm"),s(a)]),n(" 时）可能需要手动安装 "),e("a",ie,[n("sass-loader"),s(a)]),n(" 来确保其正常工作。")])])}const _e=i(u,[["render",ce],["__file","webpack.html.vue"]]);export{_e as default};
