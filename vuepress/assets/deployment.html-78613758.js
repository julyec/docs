import{_ as c}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as p,c as u,a as n,b as s,d as e,w as i,f as r,e as t}from"./app-4560479e.js";const d={},k=n("h1",{id:"部署",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#部署","aria-hidden":"true"},"#"),s(" 部署")],-1),v=n("p",null,"下述的指南基于以下条件：",-1),m=n("li",null,[s("Markdown 源文件放置在你项目的 "),n("code",null,"docs"),s(" 目录；")],-1),h=n("li",null,[s("使用的是默认的构建输出目录 ("),n("code",null,".vuepress/dist"),s(") ；")],-1),b={href:"https://pnpm.io/zh/",target:"_blank",rel:"noopener noreferrer"},_=n("li",null,[s("VuePress 作为项目依赖安装，并在 "),n("code",null,"package.json"),s(" 中配置了如下脚本：")],-1),g=t(`<div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;docs:build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vuepress build docs&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="github-pages" tabindex="-1"><a class="header-anchor" href="#github-pages" aria-hidden="true">#</a> GitHub Pages</h2>`,2),f=t("<p>如果你准备发布到 <code>https://&lt;USERNAME&gt;.github.io/</code> ，你可以省略这一步，因为 <code>base</code> 默认就是 <code>&quot;/&quot;</code> 。</p><p>如果你准备发布到 <code>https://&lt;USERNAME&gt;.github.io/&lt;REPO&gt;/</code> ，也就是说你的仓库地址是 <code>https://github.com/&lt;USERNAME&gt;/&lt;REPO&gt;</code> ，则将 <code>base</code> 设置为 <code>&quot;/&lt;REPO&gt;/&quot;</code>。</p>",2),y={href:"https://github.com/features/actions",target:"_blank",rel:"noopener noreferrer"},E=n("p",null,[s("创建 "),n("code",null,".github/workflows/docs.yml"),s(" 文件来配置工作流。")],-1),q=t(`<details class="hint-container details"><summary>点击展开配置样例</summary><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">name</span><span class="token punctuation">:</span> docs

<span class="token key atrule">on</span><span class="token punctuation">:</span>
  <span class="token comment"># 每当 push 到 main 分支时触发部署</span>
  <span class="token key atrule">push</span><span class="token punctuation">:</span>
    <span class="token key atrule">branches</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>main<span class="token punctuation">]</span>
  <span class="token comment"># 手动触发部署</span>
  <span class="token key atrule">workflow_dispatch</span><span class="token punctuation">:</span>

<span class="token key atrule">jobs</span><span class="token punctuation">:</span>
  <span class="token key atrule">docs</span><span class="token punctuation">:</span>
    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span>latest

    <span class="token key atrule">steps</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v3
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token comment"># “最近更新时间” 等 git 日志相关信息，需要拉取全部提交记录</span>
          <span class="token key atrule">fetch-depth</span><span class="token punctuation">:</span> <span class="token number">0</span>

      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Setup pnpm
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> pnpm/action<span class="token punctuation">-</span>setup@v2
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token comment"># 选择要使用的 pnpm 版本</span>
          <span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token number">8</span>
          <span class="token comment"># 使用 pnpm 安装依赖</span>
          <span class="token key atrule">run_install</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>

      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Setup Node.js
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/setup<span class="token punctuation">-</span>node@v3
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token comment"># 选择要使用的 node 版本</span>
          <span class="token key atrule">node-version</span><span class="token punctuation">:</span> <span class="token number">18</span>
          <span class="token comment"># 缓存 pnpm 依赖</span>
          <span class="token key atrule">cache</span><span class="token punctuation">:</span> pnpm

      <span class="token comment"># 运行构建脚本</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Build VuePress site
        <span class="token key atrule">run</span><span class="token punctuation">:</span> pnpm docs<span class="token punctuation">:</span>build

      <span class="token comment"># 查看 workflow 的文档来获取更多信息</span>
      <span class="token comment"># @see https://github.com/crazy-max/ghaction-github-pages</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Deploy to GitHub Pages
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> crazy<span class="token punctuation">-</span>max/ghaction<span class="token punctuation">-</span>github<span class="token punctuation">-</span>pages@v2
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token comment"># 部署到 gh-pages 分支</span>
          <span class="token key atrule">target_branch</span><span class="token punctuation">:</span> gh<span class="token punctuation">-</span>pages
          <span class="token comment"># 部署目录为 VuePress 的默认输出目录</span>
          <span class="token key atrule">build_dir</span><span class="token punctuation">:</span> docs/.vuepress/dist
        <span class="token key atrule">env</span><span class="token punctuation">:</span>
          <span class="token comment"># @see https://docs.github.com/cn/actions/reference/authentication-in-a-workflow#about-the-github_token-secret</span>
          <span class="token key atrule">GITHUB_TOKEN</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.GITHUB_TOKEN <span class="token punctuation">}</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,1),x={class:"hint-container tip"},w=n("p",{class:"hint-container-title"},"提示",-1),j={href:"https://pages.github.com/",target:"_blank",rel:"noopener noreferrer"},P=n("h2",{id:"gitlab-pages",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#gitlab-pages","aria-hidden":"true"},"#"),s(" GitLab Pages")],-1),R=t("<p>如果你准备发布到 <code>https://&lt;USERNAME&gt;.gitlab.io/</code> ，你可以省略这一步，因此 <code>base</code> 默认就是 <code>&quot;/&quot;</code> 。</p><p>如果你准备发布到 <code>https://&lt;USERNAME&gt;.gitlab.io/&lt;REPO&gt;/</code> ，也就是说你的仓库地址是 <code>https://gitlab.com/&lt;USERNAME&gt;/&lt;REPO&gt;</code> ，则将 <code>base</code> 设置为 <code>&quot;/&lt;REPO&gt;/&quot;</code>。</p>",2),B=n("code",null,".gitlab-ci.yml",-1),N={href:"https://about.gitlab.com/stages-devops-lifecycle/continuous-integration/",target:"_blank",rel:"noopener noreferrer"},C=t(`<details class="hint-container details"><summary>点击展开配置样例</summary><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment"># 选择你要使用的 docker 镜像</span>
<span class="token key atrule">image</span><span class="token punctuation">:</span> node<span class="token punctuation">:</span>18<span class="token punctuation">-</span>buster

<span class="token key atrule">pages</span><span class="token punctuation">:</span>
  <span class="token comment"># 每当 push 到 main 分支时触发部署</span>
  <span class="token key atrule">only</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> main

  <span class="token comment"># 缓存 node_modules</span>
  <span class="token key atrule">cache</span><span class="token punctuation">:</span>
    <span class="token key atrule">key</span><span class="token punctuation">:</span>
      <span class="token key atrule">files</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> pnpm<span class="token punctuation">-</span>lock.yaml
    <span class="token key atrule">paths</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> .pnpm<span class="token punctuation">-</span>store

  <span class="token comment"># 安装 pnpm</span>
  <span class="token key atrule">before_script</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> curl <span class="token punctuation">-</span>fsSL https<span class="token punctuation">:</span>//get.pnpm.io/install.sh <span class="token punctuation">|</span> sh <span class="token punctuation">-</span>
    <span class="token punctuation">-</span> pnpm config set store<span class="token punctuation">-</span>dir .pnpm<span class="token punctuation">-</span>store

  <span class="token comment"># 安装依赖并运行构建脚本</span>
  <span class="token key atrule">script</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> pnpm install <span class="token punctuation">-</span><span class="token punctuation">-</span>frozen<span class="token punctuation">-</span>lockfile
    <span class="token punctuation">-</span> pnpm docs<span class="token punctuation">:</span>build <span class="token punctuation">-</span><span class="token punctuation">-</span>dest public

  <span class="token key atrule">artifacts</span><span class="token punctuation">:</span>
    <span class="token key atrule">paths</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> public
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,1),S={class:"hint-container tip"},V=n("p",{class:"hint-container-title"},"提示",-1),O={href:"https://docs.gitlab.com/ce/user/project/pages/#getting-started",target:"_blank",rel:"noopener noreferrer"},A=n("h2",{id:"google-firebase",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#google-firebase","aria-hidden":"true"},"#"),s(" Google Firebase")],-1),G={href:"https://www.npmjs.com/package/firebase-tools",target:"_blank",rel:"noopener noreferrer"},I=n("li",null,[n("p",null,[s("在你项目的根目录下创建 "),n("code",null,"firebase.json"),s(" 和 "),n("code",null,".firebaserc"),s("，并包含以下内容：")])],-1),H=t(`<p><code>firebase.json</code>:</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;hosting&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;public&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./docs/.vuepress/dist&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;ignore&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>.firebaserc</code>:</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;projects&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;default&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&lt;YOUR_FIREBASE_ID&gt;&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>在执行了 <code>pnpm docs:build</code> 后, 使用 <code>firebase deploy</code> 指令来部署。</li></ol>`,5),L={class:"hint-container tip"},U=n("p",{class:"hint-container-title"},"提示",-1),M={href:"https://firebase.google.com/docs/cli",target:"_blank",rel:"noopener noreferrer"},T=n("h2",{id:"heroku",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#heroku","aria-hidden":"true"},"#"),s(" Heroku")],-1),D={href:"https://devcenter.heroku.com/articles/heroku-cli",target:"_blank",rel:"noopener noreferrer"},F={href:"https://signup.heroku.com",target:"_blank",rel:"noopener noreferrer"},z=n("li",null,[n("p",null,[s("运行 "),n("code",null,"heroku login"),s(" 并填写你的 Heroku 认证信息：")])],-1),K=t(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>heroku login
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="4"><li>在你的项目根目录中，创建一个名为 <code>static.json</code> 的文件，并包含下述内容：</li></ol><p><code>static.json</code>:</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;root&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./docs/.vuepress/dist&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),Y={href:"https://github.com/heroku/heroku-buildpack-static",target:"_blank",rel:"noopener noreferrer"},W=n("h2",{id:"kinsta",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#kinsta","aria-hidden":"true"},"#"),s(" Kinsta")],-1),$={href:"https://kinsta.com/docs/vuepress-application/",target:"_blank",rel:"noopener noreferrer"},J=n("h2",{id:"edgio",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#edgio","aria-hidden":"true"},"#"),s(" Edgio")],-1),Q={href:"https://docs.edg.io/guides/vuepress",target:"_blank",rel:"noopener noreferrer"},X=n("h2",{id:"netlify",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#netlify","aria-hidden":"true"},"#"),s(" Netlify")],-1),Z={href:"https://netlify.com",target:"_blank",rel:"noopener noreferrer"},nn=n("ul",null,[n("li",null,[n("strong",null,"Build Command:"),s(),n("code",null,"pnpm docs:build")]),n("li",null,[n("strong",null,"Publish directory:"),s(),n("code",null,"docs/.vuepress/dist")])],-1),sn={href:"https://docs.netlify.com/configure-builds/environment-variables",target:"_blank",rel:"noopener noreferrer"},en=n("ul",null,[n("li",null,[n("code",null,"NODE_VERSION"),s(": 18")])],-1),an=n("li",null,[n("p",null,"点击 deploy 按钮。")],-1),tn=n("h2",{id:"vercel",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#vercel","aria-hidden":"true"},"#"),s(" Vercel")],-1),ln={href:"https://vercel.com",target:"_blank",rel:"noopener noreferrer"},on=n("ul",null,[n("li",null,[n("strong",null,"FRAMEWORK PRESET:"),s(),n("code",null,"Other")]),n("li",null,[n("strong",null,"BUILD COMMAND:"),s(),n("code",null,"pnpm docs:build")]),n("li",null,[n("strong",null,"OUTPUT DIRECTORY:"),s(),n("code",null,"docs/.vuepress/dist")])],-1),cn=n("li",null,[n("p",null,"点击 deploy 按钮。")],-1),pn=n("h2",{id:"云开发-cloudbase",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#云开发-cloudbase","aria-hidden":"true"},"#"),s(" 云开发 CloudBase")],-1),un={href:"https://cloudbase.net/?site=vuepress",target:"_blank",rel:"noopener noreferrer"},rn={href:"https://cloudbase.net/framework.html?site=vuepress",target:"_blank",rel:"noopener noreferrer"},dn=t(`<ol><li>全局安装 CloudBase CLI ：</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">pnpm</span> <span class="token function">install</span> <span class="token parameter variable">-g</span> @cloudbase/cli
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,2),kn={start:"2"},vn={href:"https://console.cloud.tencent.com/tcb/env/index?tdl_anchor=ad&tdl_site=vuejs",target:"_blank",rel:"noopener noreferrer"},mn=t(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>cloudbase init --without-template
cloudbase framework:deploy
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>CloudBase CLI 首先会跳转到控制台进行登录授权，然后将会交互式进行确认。</p><p>确认信息后会立即进行部署，部署完成后，可以获得一个自动 SSL，CDN 加速的网站应用，你也可以搭配使用 GitHub Action 来持续部署 GitHub 上的 VuePress 应用。</p><p>也可以使用 <code>cloudbase init --template vuepress</code> 快速创建和部署一个新的 VuePress 应用。</p>`,4),hn={class:"hint-container tip"},bn=n("p",{class:"hint-container-title"},"提示",-1),_n={href:"https://github.com/TencentCloudBase/cloudbase-framework?site=vuepress#%E9%A1%B9%E7%9B%AE%E7%A4%BA%E4%BE%8B",target:"_blank",rel:"noopener noreferrer"},gn=n("h2",{id:"_21-云盒子",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_21-云盒子","aria-hidden":"true"},"#"),s(" 21 云盒子")],-1),fn={href:"https://www.21yunbox.com/docs/#/deploy-vuepress",target:"_blank",rel:"noopener noreferrer"};function yn(En,qn){const a=o("ExternalLinkIcon"),l=o("RouterLink");return p(),u("div",null,[k,v,n("ul",null,[m,h,n("li",null,[s("使用 "),n("a",b,[s("pnpm"),e(a)]),s(" 作为包管理器，当然也支持使用 npm 或 yarn 。")]),_]),g,n("ol",null,[n("li",null,[n("p",null,[s("设置正确的 "),e(l,{to:"/zh/reference/config.html#base"},{default:i(()=>[s("base")]),_:1}),s(" 选项。")]),f]),n("li",null,[n("p",null,[s("选择你想要使用的 CI 工具。这里我们以 "),n("a",y,[s("GitHub Actions"),e(a)]),s(" 为例。")]),E])]),q,n("div",x,[w,n("p",null,[s("请参考 "),n("a",j,[s("GitHub Pages 官方指南"),e(a)]),s(" 来获取更多信息。")])]),P,n("ol",null,[n("li",null,[n("p",null,[s("设置正确的 "),e(l,{to:"/zh/reference/config.html#base"},{default:i(()=>[s("base")]),_:1}),s(" 选项。")]),R]),n("li",null,[n("p",null,[s("创建 "),B,s(" 文件来配置 "),n("a",N,[s("GitLab CI"),e(a)]),s(" 工作流。")])])]),C,n("div",S,[V,n("p",null,[s("请参考 "),n("a",O,[s("GitLab Pages 官方指南"),e(a)]),s(" 来获取更多信息。")])]),A,n("ol",null,[n("li",null,[n("p",null,[s("请确保你已经安装了 "),n("a",G,[s("firebase-tools"),e(a)]),s("。")])]),I]),H,n("div",L,[U,n("p",null,[s("请参考 "),n("a",M,[s("Firebase CLI 官方指南"),e(a)]),s(" 来获取更多信息。")])]),T,n("ol",null,[n("li",null,[n("p",null,[s("首先安装 "),n("a",D,[s("Heroku CLI"),e(a)]),s("；")])]),n("li",null,[n("p",null,[n("a",F,[s("在这里"),e(a)]),s(" 注册一个 Heroku 账号；")])]),z]),K,n("p",null,[s("这里是你项目的配置，请参考 "),n("a",Y,[s("heroku-buildpack-static"),e(a)]),s(" 来获取更多信息。")]),W,n("p",null,[s("请查看 "),n("a",$,[s("Set Up VuePress on Kinsta"),e(a)]),s(" 。")]),J,n("p",null,[s("请查看 "),n("a",Q,[s("Edgio Documentation > Framework Guides > VuePress"),e(a)]),s(" 。")]),X,n("ol",null,[n("li",null,[n("p",null,[s("前往 "),n("a",Z,[s("Netlify"),e(a)]),s(" ，从 GitHub 创建一个新项目，并进行如下配置：")]),nn]),n("li",null,[n("p",null,[s("设置 "),n("a",sn,[s("Environment variables"),e(a)]),s(" 来选择 Node 版本：")]),en]),an]),tn,n("ol",null,[n("li",null,[n("p",null,[s("前往 "),n("a",ln,[s("Vercel"),e(a)]),s(" ，从 GitHub 创建一个新项目，并进行如下配置：")]),on]),cn]),r(" 下列平台是中文文档特有的，放在最下方 "),pn,n("p",null,[n("a",un,[s("云开发 CloudBase"),e(a)]),s(" 是一个云原生一体化的 Serverless 云平台，支持静态网站、容器等多种托管能力，并提供简便的部署工具 "),n("a",rn,[s("CloudBase Framework"),e(a)]),s(" 来一键部署应用。")]),dn,n("ol",kn,[n("li",null,[s("在项目根目录运行以下命令一键部署 VuePress 应用，在部署之前可以先 "),n("a",vn,[s("开通环境"),e(a)]),s("：")])]),mn,n("div",hn,[bn,n("p",null,[s("更多详细信息请查看 CloudBase Framework 的"),n("a",_n,[s("部署项目示例"),e(a)])])]),gn,n("p",null,[s("请查看 "),n("a",fn,[s("21 云盒子 - 部署一个 VuePress 静态网页"),e(a)]),s("。")])])}const jn=c(d,[["render",yn],["__file","deployment.html.vue"]]);export{jn as default};
