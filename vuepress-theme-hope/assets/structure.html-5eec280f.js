import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as i,a as n,b as d,f as l}from"./app-083c2955.js";const r={},a=d("p",null,"本教程将介绍 VuePress 项目结构。",-1),c=l(`<h2 id="vuepress-项目结构" tabindex="-1"><a class="header-anchor" href="#vuepress-项目结构" aria-hidden="true">#</a> VuePress 项目结构</h2><p>VuePress 只控制 VuePress 项目文件夹中的文件，也就是默认模板生成的 <code>src</code> 文件夹，项目下的其他文件不受 VuePress 控制。</p><p>一个基本的项目结构如下:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>.
├── .github (可选的) → GitHub 配置文件存放路径
│    └── workflow → GitHub 工作流配置
│         └── docs-deploy.yml → 自动部署文档的工作流
│
├── src → 文档文件夹
│    │
│    ├── .vuepress (可选的) → VuePress 配置文件夹
│    │    │
│    │    ├── dist (默认的) → 构建输出目录
│    │    │
│    │    ├── public (可选的) → 静态资源目录
│    │    │
│    │    ├── styles (可选的) → 用于存放样式相关的文件
│    │    │
│    │    ├── config.{js,ts} (可选的) → 配置文件的入口文件
│    │    │
│    │    └── client.{js,ts} (可选的) → 客户端文件
│    │
│    ├── ... → 其他项目文档
│    │
│    └── README.md → 项目主页
│
└── package.json → Nodejs 配置文件
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4);function v(u,t){return s(),i("div",null,[a,n(" more "),c])}const b=e(r,[["render",v],["__file","structure.html.vue"]]);export{b as default};
