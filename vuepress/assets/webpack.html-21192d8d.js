import{_ as r}from"./plugin-vue_export-helper-c27b6911.js";import{r as l,o as c,c as p,d as s,a as e,b as n,w as d,e as o}from"./app-d06631bc.js";const u={},h=e("h1",{id:"webpack",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#webpack","aria-hidden":"true"},"#"),n(" Webpack")],-1),_={href:"https://www.npmjs.com/package/@vuepress/bundler-webpack",target:"_blank",rel:"noopener noreferrer"},b={href:"https://www.npmjs.com/package/vuepress-webpack",target:"_blank",rel:"noopener noreferrer"},f=o(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> i <span class="token parameter variable">-D</span> @vuepress/bundler-webpack@next
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options" aria-hidden="true">#</a> Options</h2><p>Reference of webpack bundler options:</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> webpackBundler <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@vuepress/bundler-webpack&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineUserConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@vuepress/cli&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineUserConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  bundler<span class="token operator">:</span> <span class="token function">webpackBundler</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    postcss<span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    vue<span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="configurewebpack" tabindex="-1"><a class="header-anchor" href="#configurewebpack" aria-hidden="true">#</a> configureWebpack</h3>`,5),k=e("li",null,[e("p",null,[n("Type: "),e("code",null,"(config: WebpackConfiguration, isServer: boolean, isBuild: boolean) => WebpackConfiguration | void")])],-1),g=e("p",null,"Details:",-1),v=e("p",null,"Edit the internal webpack config.",-1),m=e("code",null,"isServer",-1),w=e("code",null,"isBuild",-1),y={href:"https://github.com/survivejs/webpack-merge",target:"_blank",rel:"noopener noreferrer"},x=e("h3",{id:"chainwebpack",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#chainwebpack","aria-hidden":"true"},"#"),n(" chainWebpack")],-1),S=e("li",null,[e("p",null,[n("Type: "),e("code",null,"(config: WebpackChainConfig, isServer: boolean, isBuild: boolean) => void")])],-1),O=e("p",null,"Details:",-1),T={href:"https://github.com/mozilla-neutrino/webpack-chain",target:"_blank",rel:"noopener noreferrer"},D=e("p",null,[n("This option accepts a function that will receive a "),e("code",null,"Config"),n(" instance that provided by "),e("code",null,"webpack-chain"),n(" as the 1st argument an "),e("code",null,"isServer"),n(" flag as the 2nd argument and an "),e("code",null,"isBuild"),n(" flag as the 3rd argument.")],-1),B=e("h3",{id:"devserversetupmiddlewares",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#devserversetupmiddlewares","aria-hidden":"true"},"#"),n(" devServerSetupMiddlewares")],-1),C=e("li",null,[e("p",null,[n("Type: "),e("code",null,"(middlewares: Middleware[], devServer: Server) => Middleware[]")])],-1),L=e("li",null,[e("p",null,"Details:"),e("p",null,[n("A hook to be called in "),e("code",null,"devServer.setupMiddlewares"),n(" of webpack.")]),e("p",null,[n("The arguments of the function are those of "),e("code",null,"devServer.setupMiddlewares"),n(".")])],-1),A=e("p",null,"Also see:",-1),W={href:"https://webpack.js.org/configuration/dev-server/#devserversetupmiddlewares",target:"_blank",rel:"noopener noreferrer"},j=e("h3",{id:"vue",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#vue","aria-hidden":"true"},"#"),n(" vue")],-1),q=e("li",null,[e("p",null,[n("Type: "),e("code",null,"VueLoaderOptions")])],-1),M=e("li",null,[e("p",null,"Details:"),e("p",null,[n("Options for "),e("code",null,"vue-loader"),n(".")])],-1),N=e("p",null,"Also see:",-1),V={href:"https://vue-loader.vuejs.org/options.html",target:"_blank",rel:"noopener noreferrer"},E=e("h3",{id:"postcss",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#postcss","aria-hidden":"true"},"#"),n(" postcss")],-1),R=e("li",null,[e("p",null,[n("Type: "),e("code",null,"PostcssLoaderOptions")])],-1),U=e("li",null,[e("p",null,"Details:"),e("p",null,[n("Options for "),e("code",null,"postcss-loader"),n(".")])],-1),I=e("p",null,"Also see:",-1),F={href:"https://github.com/webpack-contrib/postcss-loader#options",target:"_blank",rel:"noopener noreferrer"},P=e("h3",{id:"stylus",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#stylus","aria-hidden":"true"},"#"),n(" stylus")],-1),z=e("li",null,[e("p",null,[n("Type: "),e("code",null,"StylusLoaderOptions")])],-1),H=e("li",null,[e("p",null,"Details:"),e("p",null,[n("Options for "),e("code",null,"stylus-loader"),n(".")])],-1),Q=e("p",null,"Also see:",-1),Y={href:"https://github.com/webpack-contrib/stylus-loader#options",target:"_blank",rel:"noopener noreferrer"},G=e("h3",{id:"scss",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#scss","aria-hidden":"true"},"#"),n(" scss")],-1),J=e("li",null,[e("p",null,[n("Type: "),e("code",null,"SassLoaderOptions")])],-1),K=e("li",null,[e("p",null,"Details:"),e("p",null,[n("Options for "),e("code",null,"sass-loader"),n(" for "),e("code",null,".scss"),n(" files.")])],-1),X=e("p",null,"Also see:",-1),Z={href:"https://github.com/webpack-contrib/sass-loader#options",target:"_blank",rel:"noopener noreferrer"},$=e("h3",{id:"sass",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#sass","aria-hidden":"true"},"#"),n(" sass")],-1),ee=e("li",null,[e("p",null,[n("Type: "),e("code",null,"SassLoaderOptions")])],-1),ne=e("li",null,[e("p",null,"Details:"),e("p",null,[n("Options for "),e("code",null,"sass-loader"),n(" for "),e("code",null,".sass"),n(" files.")])],-1),se=e("p",null,"Also see:",-1),ae={href:"https://github.com/webpack-contrib/sass-loader#options",target:"_blank",rel:"noopener noreferrer"},le=e("h3",{id:"less",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#less","aria-hidden":"true"},"#"),n(" less")],-1),oe=e("li",null,[e("p",null,[n("Type: "),e("code",null,"LessLoaderOptions")])],-1),te=e("li",null,[e("p",null,"Details:"),e("p",null,[n("Options for "),e("code",null,"less-loader"),n(".")])],-1),ie=e("p",null,"Also see:",-1),re={href:"https://github.com/webpack-contrib/less-loader#options",target:"_blank",rel:"noopener noreferrer"},ce=o('<h3 id="evergreen" tabindex="-1"><a class="header-anchor" href="#evergreen" aria-hidden="true">#</a> evergreen</h3><ul><li><p>Type: <code>boolean</code></p></li><li><p>Default: <code>true</code></p></li><li><p>Details:</p><p>Set to <code>true</code> if you are only targeting evergreen browsers. This will disable some transpilation and polyfills, and result in faster builds and smaller files.</p></li></ul><h2 id="faq" tabindex="-1"><a class="header-anchor" href="#faq" aria-hidden="true">#</a> FAQ</h2><h3 id="referencing-public-files-after-changing-base" tabindex="-1"><a class="header-anchor" href="#referencing-public-files-after-changing-base" aria-hidden="true">#</a> Referencing Public Files after Changing <code>base</code></h3>',4),pe=e("code",null,"base",-1),de=e("code",null,"base",-1),ue=e("h3",{id:"using-with-default-theme",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#using-with-default-theme","aria-hidden":"true"},"#"),n(" Using with Default Theme")],-1),he={href:"https://sass-lang.com/",target:"_blank",rel:"noopener noreferrer"},_e={href:"https://www.npmjs.com/package/sass-loader",target:"_blank",rel:"noopener noreferrer"},be={href:"https://pnpm.io/",target:"_blank",rel:"noopener noreferrer"};function fe(ke,ge){const t=l("NpmBadge"),a=l("ExternalLinkIcon"),i=l("RouterLink");return c(),p("div",null,[h,s(t,{package:"@vuepress/bundler-webpack"}),e("p",null,[n("Webpack bundler is provided by "),e("a",_,[n("@vuepress/bundler-webpack"),s(a)]),n(" package. It is a dependency of the "),e("a",b,[n("vuepress-webpack"),s(a)]),n(" package, and you can also install it separately.")]),f,e("ul",null,[k,e("li",null,[g,v,e("p",null,[n("This option accepts a function that will receive a webpack config object as the 1st argument, an "),m,n(" flag as the 2nd argument and an "),w,n(" flag as the 3rd argument. You can either mutate the config directly, or return an object to be merged by "),e("a",y,[n("webpack-merge"),s(a)]),n(".")])])]),x,e("ul",null,[S,e("li",null,[O,e("p",null,[n("Edit the internal webpack config with "),e("a",T,[n("webpack-chain"),s(a)]),n(".")]),D])]),B,e("ul",null,[C,L,e("li",null,[A,e("ul",null,[e("li",null,[e("a",W,[n("Webpack > Configuration > DevServer > devServer.setupMiddlewares"),s(a)])])])])]),j,e("ul",null,[q,M,e("li",null,[N,e("ul",null,[e("li",null,[e("a",V,[n("vue-loader > Options Reference"),s(a)])])])])]),E,e("ul",null,[R,U,e("li",null,[I,e("ul",null,[e("li",null,[e("a",F,[n("postcss-loader > Options"),s(a)])])])])]),P,e("ul",null,[z,H,e("li",null,[Q,e("ul",null,[e("li",null,[e("a",Y,[n("stylus-loader > Options"),s(a)])])])])]),G,e("ul",null,[J,K,e("li",null,[X,e("ul",null,[e("li",null,[e("a",Z,[n("sass-loader > Options"),s(a)])])])])]),$,e("ul",null,[ee,ne,e("li",null,[se,e("ul",null,[e("li",null,[e("a",ae,[n("sass-loader > Options"),s(a)])])])])]),le,e("ul",null,[oe,te,e("li",null,[ie,e("ul",null,[e("li",null,[e("a",re,[n("less-loader > Options"),s(a)])])])])]),ce,e("p",null,[n("Unlike Vite, Webpack won't handle "),pe,n(" for public files automatically. So if you change the "),de,n(" of your site, you'd better to use "),s(i,{to:"/guide/assets.html#base-helper"},{default:d(()=>[n("Base Helper")]),_:1}),n(" when referencing an public image file.")]),ue,e("p",null,[n("Default theme is using "),e("a",he,[n("SASS"),s(a)]),n(" as CSS pre-processor, so you might need to install "),e("a",_e,[n("sass-loader"),s(a)]),n(" as a peer dependency to make it work with Webpack, especially when you are using "),e("a",be,[n("pnpm"),s(a)]),n(".")])])}const we=r(u,[["render",fe],["__file","webpack.html.vue"]]);export{we as default};
