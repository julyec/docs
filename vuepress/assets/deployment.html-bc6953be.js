import{_ as c}from"./plugin-vue_export-helper-c27b6911.js";import{r as l,o as p,c as u,a as n,b as s,d as e,w as i,e as t}from"./app-4560479e.js";const r={},d=n("h1",{id:"deployment",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#deployment","aria-hidden":"true"},"#"),s(" Deployment")],-1),k=n("p",null,"The following guides are based on some shared assumptions:",-1),m=n("li",null,[s("You are placing your Markdown source files inside the "),n("code",null,"docs"),s(" directory of your project;")],-1),v=n("li",null,[s("You are using the default build output location ("),n("code",null,".vuepress/dist"),s(");")],-1),h={href:"https://pnpm.io",target:"_blank",rel:"noopener noreferrer"},b=n("li",null,[s("VuePress is installed as a local dependency in your project, and you have setup the following script in "),n("code",null,"package.json"),s(":")],-1),g=t(`<div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;docs:build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vuepress build docs&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="github-pages" tabindex="-1"><a class="header-anchor" href="#github-pages" aria-hidden="true">#</a> GitHub Pages</h2>`,2),_=t("<p>If you are deploying to <code>https://&lt;USERNAME&gt;.github.io/</code>, you can omit this step as <code>base</code> defaults to <code>&quot;/&quot;</code>.</p><p>If you are deploying to <code>https://&lt;USERNAME&gt;.github.io/&lt;REPO&gt;/</code>, for example your repository is at <code>https://github.com/&lt;USERNAME&gt;/&lt;REPO&gt;</code>, then set <code>base</code> to <code>&quot;/&lt;REPO&gt;/&quot;</code>.</p>",2),f={href:"https://github.com/features/actions",target:"_blank",rel:"noopener noreferrer"},y=n("p",null,[s("Create "),n("code",null,".github/workflows/docs.yml"),s(" to set up the workflow.")],-1),w=t(`<details class="hint-container details"><summary>Click to expand sample config</summary><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">name</span><span class="token punctuation">:</span> docs

<span class="token key atrule">on</span><span class="token punctuation">:</span>
  <span class="token comment"># trigger deployment on every push to main branch</span>
  <span class="token key atrule">push</span><span class="token punctuation">:</span>
    <span class="token key atrule">branches</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>main<span class="token punctuation">]</span>
  <span class="token comment"># trigger deployment manually</span>
  <span class="token key atrule">workflow_dispatch</span><span class="token punctuation">:</span>

<span class="token key atrule">jobs</span><span class="token punctuation">:</span>
  <span class="token key atrule">docs</span><span class="token punctuation">:</span>
    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span>latest

    <span class="token key atrule">steps</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v3
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token comment"># fetch all commits to get last updated time or other git log info</span>
          <span class="token key atrule">fetch-depth</span><span class="token punctuation">:</span> <span class="token number">0</span>

      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Setup pnpm
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> pnpm/action<span class="token punctuation">-</span>setup@v2
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token comment"># choose pnpm version to use</span>
          <span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token number">8</span>
          <span class="token comment"># install deps with pnpm</span>
          <span class="token key atrule">run_install</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>

      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Setup Node.js
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/setup<span class="token punctuation">-</span>node@v3
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token comment"># choose node.js version to use</span>
          <span class="token key atrule">node-version</span><span class="token punctuation">:</span> <span class="token number">18</span>
          <span class="token comment"># cache deps for pnpm</span>
          <span class="token key atrule">cache</span><span class="token punctuation">:</span> pnpm

      <span class="token comment"># run build script</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Build VuePress site
        <span class="token key atrule">run</span><span class="token punctuation">:</span> pnpm docs<span class="token punctuation">:</span>build

      <span class="token comment"># please check out the docs of the workflow for more details</span>
      <span class="token comment"># @see https://github.com/crazy-max/ghaction-github-pages</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Deploy to GitHub Pages
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> crazy<span class="token punctuation">-</span>max/ghaction<span class="token punctuation">-</span>github<span class="token punctuation">-</span>pages@v2
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token comment"># deploy to gh-pages branch</span>
          <span class="token key atrule">target_branch</span><span class="token punctuation">:</span> gh<span class="token punctuation">-</span>pages
          <span class="token comment"># deploy the default output dir of VuePress</span>
          <span class="token key atrule">build_dir</span><span class="token punctuation">:</span> docs/.vuepress/dist
        <span class="token key atrule">env</span><span class="token punctuation">:</span>
          <span class="token comment"># @see https://docs.github.com/en/actions/reference/authentication-in-a-workflow#about-the-github_token-secret</span>
          <span class="token key atrule">GITHUB_TOKEN</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.GITHUB_TOKEN <span class="token punctuation">}</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,1),E={class:"hint-container tip"},q=n("p",{class:"hint-container-title"},"Tips",-1),x={href:"https://pages.github.com/",target:"_blank",rel:"noopener noreferrer"},j=n("h2",{id:"gitlab-pages",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#gitlab-pages","aria-hidden":"true"},"#"),s(" GitLab Pages")],-1),R=t("<p>If you are deploying to <code>https://&lt;USERNAME&gt;.gitlab.io/</code>, you can omit <code>base</code> as it defaults to <code>&quot;/&quot;</code>.</p><p>If you are deploying to <code>https://&lt;USERNAME&gt;.gitlab.io/&lt;REPO&gt;/</code>, for example your repository is at <code>https://gitlab.com/&lt;USERNAME&gt;/&lt;REPO&gt;</code>, then set <code>base</code> to <code>&quot;/&lt;REPO&gt;/&quot;</code>.</p>",2),P=n("code",null,".gitlab-ci.yml",-1),I={href:"https://about.gitlab.com/stages-devops-lifecycle/continuous-integration/",target:"_blank",rel:"noopener noreferrer"},S=t(`<details class="hint-container details"><summary>Click to expand sample config</summary><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment"># choose a docker image to use</span>
<span class="token key atrule">image</span><span class="token punctuation">:</span> node<span class="token punctuation">:</span>18<span class="token punctuation">-</span>buster

<span class="token key atrule">pages</span><span class="token punctuation">:</span>
  <span class="token comment"># trigger deployment on every push to main branch</span>
  <span class="token key atrule">only</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> main

  <span class="token comment"># cache node_modules</span>
  <span class="token key atrule">cache</span><span class="token punctuation">:</span>
    <span class="token key atrule">key</span><span class="token punctuation">:</span>
      <span class="token key atrule">files</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> pnpm<span class="token punctuation">-</span>lock.yaml
    <span class="token key atrule">paths</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> .pnpm<span class="token punctuation">-</span>store

  <span class="token comment"># Install pnpm</span>
  <span class="token key atrule">before_script</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> curl <span class="token punctuation">-</span>fsSL https<span class="token punctuation">:</span>//get.pnpm.io/install.sh <span class="token punctuation">|</span> sh <span class="token punctuation">-</span>
    <span class="token punctuation">-</span> pnpm config set store<span class="token punctuation">-</span>dir .pnpm<span class="token punctuation">-</span>store

  <span class="token comment"># install dependencies and run build script</span>
  <span class="token key atrule">script</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> pnpm i <span class="token punctuation">-</span><span class="token punctuation">-</span>frozen<span class="token punctuation">-</span>lockfile
    <span class="token punctuation">-</span> pnpm docs<span class="token punctuation">:</span>build <span class="token punctuation">-</span><span class="token punctuation">-</span>dest public

  <span class="token key atrule">artifacts</span><span class="token punctuation">:</span>
    <span class="token key atrule">paths</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> public
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,1),N={class:"hint-container tip"},C=n("p",{class:"hint-container-title"},"Tips",-1),O={href:"https://docs.gitlab.com/ce/user/project/pages/#getting-started",target:"_blank",rel:"noopener noreferrer"},H=n("h2",{id:"google-firebase",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#google-firebase","aria-hidden":"true"},"#"),s(" Google Firebase")],-1),G={href:"https://www.npmjs.com/package/firebase-tools",target:"_blank",rel:"noopener noreferrer"},T=n("li",null,[n("p",null,[s("Create "),n("code",null,"firebase.json"),s(" and "),n("code",null,".firebaserc"),s(" at the root of your project with the following content:")])],-1),U=t(`<p><code>firebase.json</code>:</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>After running <code>pnpm docs:build</code>, deploy using the command <code>firebase deploy</code>.</li></ol>`,5),V={class:"hint-container tip"},A=n("p",{class:"hint-container-title"},"Tips",-1),L={href:"https://firebase.google.com/docs/cli",target:"_blank",rel:"noopener noreferrer"},M=n("h2",{id:"heroku",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#heroku","aria-hidden":"true"},"#"),s(" Heroku")],-1),B={href:"https://devcenter.heroku.com/articles/heroku-cli",target:"_blank",rel:"noopener noreferrer"},D={href:"https://signup.heroku.com",target:"_blank",rel:"noopener noreferrer"},F=n("li",null,[n("p",null,[s("Run "),n("code",null,"heroku login"),s(" and fill in your Heroku credentials:")])],-1),K=t(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>heroku login
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="4"><li>Create a file called <code>static.json</code> in the root of your project with the below content:</li></ol><p><code>static.json</code>:</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;root&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./docs/.vuepress/dist&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),Y={href:"https://github.com/heroku/heroku-buildpack-static",target:"_blank",rel:"noopener noreferrer"},z=n("h2",{id:"kinsta",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#kinsta","aria-hidden":"true"},"#"),s(" Kinsta")],-1),W={href:"https://kinsta.com/docs/vuepress-application/",target:"_blank",rel:"noopener noreferrer"},$=n("h2",{id:"edgio",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#edgio","aria-hidden":"true"},"#"),s(" Edgio")],-1),J={href:"https://docs.edg.io/guides/vuepress",target:"_blank",rel:"noopener noreferrer"},Q=n("h2",{id:"netlify",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#netlify","aria-hidden":"true"},"#"),s(" Netlify")],-1),X={href:"https://netlify.com",target:"_blank",rel:"noopener noreferrer"},Z=n("ul",null,[n("li",null,[n("strong",null,"Build Command:"),s(),n("code",null,"pnpm docs:build")]),n("li",null,[n("strong",null,"Publish directory:"),s(),n("code",null,"docs/.vuepress/dist")])],-1),nn={href:"https://docs.netlify.com/configure-builds/environment-variables",target:"_blank",rel:"noopener noreferrer"},sn=n("ul",null,[n("li",null,[n("code",null,"NODE_VERSION"),s(": 18")])],-1),en=n("li",null,[n("p",null,"Hit the deploy button.")],-1),an=n("h2",{id:"vercel",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#vercel","aria-hidden":"true"},"#"),s(" Vercel")],-1),tn={href:"https://vercel.com",target:"_blank",rel:"noopener noreferrer"},on=n("ul",null,[n("li",null,[n("strong",null,"FRAMEWORK PRESET:"),s(),n("code",null,"Other")]),n("li",null,[n("strong",null,"BUILD COMMAND:"),s(),n("code",null,"pnpm docs:build")]),n("li",null,[n("strong",null,"OUTPUT DIRECTORY:"),s(),n("code",null,"docs/.vuepress/dist")])],-1),ln=n("li",null,[n("p",null,"Hit the deploy button.")],-1);function cn(pn,un){const a=l("ExternalLinkIcon"),o=l("RouterLink");return p(),u("div",null,[d,k,n("ul",null,[m,v,n("li",null,[s("You are using as "),n("a",h,[s("pnpm"),e(a)]),s(" package manager, while npm and yarn are also supported;")]),b]),g,n("ol",null,[n("li",null,[n("p",null,[s("Set the correct "),e(o,{to:"/reference/config.html#base"},{default:i(()=>[s("base")]),_:1}),s(" config.")]),_]),n("li",null,[n("p",null,[s("Choose your preferred CI tools. Here we take "),n("a",f,[s("GitHub Actions"),e(a)]),s(" as an example.")]),y])]),w,n("div",E,[q,n("p",null,[s("Please refer to "),n("a",x,[s("GitHub Pages official guide"),e(a)]),s(" for more details.")])]),j,n("ol",null,[n("li",null,[n("p",null,[s("Set the correct "),e(o,{to:"/reference/config.html#base"},{default:i(()=>[s("base")]),_:1}),s(" config.")]),R]),n("li",null,[n("p",null,[s("Create "),P,s(" to set up "),n("a",I,[s("GitLab CI"),e(a)]),s(" workflow.")])])]),S,n("div",N,[C,n("p",null,[s("Please refer to "),n("a",O,[s("GitLab Pages official guide"),e(a)]),s(" for more details.")])]),H,n("ol",null,[n("li",null,[n("p",null,[s("Make sure you have "),n("a",G,[s("firebase-tools"),e(a)]),s(" installed.")])]),T]),U,n("div",V,[A,n("p",null,[s("Please refer to "),n("a",L,[s("Firebase CLI official guide"),e(a)]),s(" for more details.")])]),M,n("ol",null,[n("li",null,[n("p",null,[s("Install "),n("a",B,[s("Heroku CLI"),e(a)]),s(".")])]),n("li",null,[n("p",null,[s("Create a Heroku account by "),n("a",D,[s("signing up"),e(a)]),s(".")])]),F]),K,n("p",null,[s("This is the configuration of your site; read more at "),n("a",Y,[s("heroku-buildpack-static"),e(a)]),s(".")]),z,n("p",null,[s("See "),n("a",W,[s("Set Up VuePress on Kinsta"),e(a)]),s(".")]),$,n("p",null,[s("See "),n("a",J,[s("Edgio Documentation > Framework Guides > VuePress"),e(a)]),s(".")]),Q,n("ol",null,[n("li",null,[n("p",null,[s("On "),n("a",X,[s("Netlify"),e(a)]),s(", set up a new project from GitHub with the following settings:")]),Z]),n("li",null,[n("p",null,[s("Set "),n("a",nn,[s("Environment variables"),e(a)]),s(" to choose node version:")]),sn]),en]),an,n("ol",null,[n("li",null,[n("p",null,[s("Go to "),n("a",tn,[s("Vercel"),e(a)]),s(", set up a new project from GitHub with the following settings:")]),on]),ln])])}const kn=c(r,[["render",cn],["__file","deployment.html.vue"]]);export{kn as default};
