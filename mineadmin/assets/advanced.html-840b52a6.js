import{_ as l}from"./plugin-vue_export-helper-c27b6911.js";import{r as d,o as c,c as o,b as s,e as n,d as i,a as e}from"./app-719eb5cf.js";const t="/mineadmin/images/xUhwxU.png",r="/mineadmin/images/xYo728.png",p="/mineadmin/images/xYTJII.png",m="/mineadmin/images/xNwPkd.png",u="/mineadmin/images/xNwu7Q.png",v={},b=e('<h1 id="环境安装" tabindex="-1"><a class="header-anchor" href="#环境安装" aria-hidden="true">#</a> 环境安装</h1><div class="hint-container tip"><p class="hint-container-title">Tips</p><p>MineAdmin 对系统环境有一些要求，由于使用的 Hyperf 框架是基于 Swoole 网络引擎驱动的，仅可运行于 Linux 和 Mac 环境下，但是 Docker 虚拟化技术的发展，在 Windows 下也可以通过 Docker for Windows 来作为运行环境。</p></div><div class="hint-container warning"><p class="hint-container-title">开发环境建议</p><p>不管你是 Windows、Mac 还是 Linux 使用者，我们都建议使用 <code>Docker</code> 作为开发环境。</p></div><h2 id="docker下环境安装" tabindex="-1"><a class="header-anchor" href="#docker下环境安装" aria-hidden="true">#</a> Docker下环境安装</h2><h3 id="docker-介绍" tabindex="-1"><a class="header-anchor" href="#docker-介绍" aria-hidden="true">#</a> Docker 介绍</h3><p>docker是一种虚拟化技术（和虚拟机差不多，没有虚拟机隔离的那么彻底）。 然后我们通过docker下载不同功能的容器来使用；而所有容器都运行在docker之上。</p><p>那么，什么是容器？可以通俗的理解为一个个集装箱，每个集装箱封装好了功能。 比如，想开发php，就通过docker下载一个php的容器来运行，那么你就可以开发php了</p><h3 id="安装docker" tabindex="-1"><a class="header-anchor" href="#安装docker" aria-hidden="true">#</a> 安装Docker</h3>',8),h={href:"https://www.docker.com/get-started/",target:"_blank",rel:"noopener noreferrer"},k=e('<img src="'+t+`"><h3 id="拉取镜像" tabindex="-1"><a class="header-anchor" href="#拉取镜像" aria-hidden="true">#</a> 拉取镜像</h3><p><strong>MineAdmin</strong> 需要用的几个镜像列表:</p><ul><li>ixmo/mine-admin（运行mineadmin的基础环境镜像，已配置好swoole、php、git等基础环境）</li><li>mysql:5.7 (宿主机安装有，则不需要拉取)</li><li>redis (宿主机安装有，则不需要拉取)</li><li>rabbitmq:management (宿主机安装有或不需要队列功能，则不需要拉取)</li></ul><h4 id="首先-拉取-ixmo-mine-admin-镜像-打开-cmd-或者-终端" tabindex="-1"><a class="header-anchor" href="#首先-拉取-ixmo-mine-admin-镜像-打开-cmd-或者-终端" aria-hidden="true">#</a> 首先，拉取 <code>ixmo/mine-admin</code> 镜像，打开 <code>cmd</code> 或者 <code>终端</code></h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 拉取镜像
docker pull ixmo/mine-admin

# 创建环境容器
docker run -d --name mineadmin -v d:\\mineadmin:/opt/www -p 9501:9501 -p 9502:9502 -p 9503:9503 -it ixmo/mine-admin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参数说明：</p><ul><li>--name 容器名字</li><li>-v 本地目录:容器目录 （宿主机与容器目录挂载）</li><li>-p 本地端口:容器端口 （宿主机与容器端口映射)</li></ul><h4 id="拉取-mysql-5-7-镜像-如果本地宿主机安装有mysql-可跳过" tabindex="-1"><a class="header-anchor" href="#拉取-mysql-5-7-镜像-如果本地宿主机安装有mysql-可跳过" aria-hidden="true">#</a> 拉取 <code>mysql:5.7</code> 镜像，如果本地宿主机安装有mysql，可跳过</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 拉取镜像
docker pull mysql:5.7

# 创建mysql容器
docker run -d -p 3306:3306 --privileged=true -e MYSQL_ROOT_PASSWORD=123456 --name mysql mysql:5.7 --character-set-server=utf8mb4 --collation-server=utf8mb4_general_ci
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参数说明：</p><ul><li>-d 表示后台运行</li><li>-p 表示端口映射</li><li>--privileged=true 设值MySQL的root用户权限, 否则外部不能使用root用户登陆</li><li>-e MYSQL_ROOT_PASSWORD=123456　　　设置MySQL数据库root用户的密码</li><li>--name 表示容器名字</li><li>--character-set-server=utf8mb4 --collation-server=utf8mb4_general_ci 设值数据库默认编码</li></ul><h4 id="拉取-redis-镜像-如果本地宿主机安装有redis-可跳过" tabindex="-1"><a class="header-anchor" href="#拉取-redis-镜像-如果本地宿主机安装有redis-可跳过" aria-hidden="true">#</a> 拉取 <code>redis</code> 镜像，如果本地宿主机安装有redis，可跳过</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 拉取镜像
docker pull redis

# 创建redis容器
docker run --name redis -d -p 6379:6379 redis
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参数说明：</p><ul><li>--name 表示容器名字</li><li>-p 表示端口映射</li></ul><h4 id="拉取-rabbitmq-management-镜像-如果本地宿主机安装有或者不需要队列功能-可跳过" tabindex="-1"><a class="header-anchor" href="#拉取-rabbitmq-management-镜像-如果本地宿主机安装有或者不需要队列功能-可跳过" aria-hidden="true">#</a> 拉取 <code>rabbitmq:management</code> 镜像，如果本地宿主机安装有或者不需要队列功能，可跳过</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 拉取镜像
docker pull rabbitmq:management

# 创建rabbitmq容器
docker run -d --name rabbit -e RABBITMQ_DEFAULT_USER=admin -e RABBITMQ_DEFAULT_PASS=admin -p 15672:15672 -p 5672:5672 -p 25672:25672 -p 61613:61613 -p 1883:1883 rabbitmq:management
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参数说明：</p><ul><li>-d 表示后台运行</li><li>--name 表示容器名字</li><li>-e RABBITMQ_DEFAULT_USER=admin 设置rabbitmq默认的用户名</li><li>-e RABBITMQ_DEFAULT_PASS=admin 设置rabbitmq默认的密码</li><li>-p 表示映射的一系列端口</li></ul><h2 id="docker-compose方式环境安装" tabindex="-1"><a class="header-anchor" href="#docker-compose方式环境安装" aria-hidden="true">#</a> Docker Compose方式环境安装</h2><h3 id="前提条件" tabindex="-1"><a class="header-anchor" href="#前提条件" aria-hidden="true">#</a> 前提条件</h3>`,22),g=e("<li>宿主机安装好<code>docker</code>、<code>docker-compose</code>环境</li><li>宿主机安装好<code>nodejs</code>、<code>npm</code>、<code>yarn</code>环境，<code>nodejs</code>建议装<code>lts</code>版本</li>",2),_={href:"https://gitee.com/mineadmin/mineadmin-vue",target:"_blank",rel:"noopener noreferrer"},x=s("code",null,"mine-ui",-1),f=e(`<h3 id="步骤" tabindex="-1"><a class="header-anchor" href="#步骤" aria-hidden="true">#</a> 步骤</h3><ol><li>第一次跑暂时只启动<code>hyperf</code>、<code>mysql</code>、<code>redis</code>这三个容器</li></ol><blockquote><p>注意：<code>mysql</code>和<code>redis</code>没有映射出来持久化，需要你自己百度一下</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 只启动\`hyperf\`、\`mysql\`、\`redis\`这三个容器</span>
<span class="token function">docker-compose</span> up <span class="token parameter variable">-d</span> hyperf mysql redis
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>第一次跑要先进容器，跑一遍 <code>composer</code> 和<code>mine:install</code>的命令</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 进hyperf容器</span>
<span class="token function">docker-compose</span> <span class="token builtin class-name">exec</span> hyperf /bin/sh

<span class="token comment"># 查看当前目录，即mineadmin目录</span>
<span class="token builtin class-name">pwd</span>
<span class="token comment"># /opt/www</span>

<span class="token comment"># 安装依赖</span>
<span class="token function">composer</span> <span class="token function">install</span> <span class="token parameter variable">-vvv</span>

<span class="token comment"># 安装mineadmin</span>
php bin/hyperf.php mine:install

<span class="token comment"># mysql和redis填写</span>
- <span class="token variable"><span class="token variable">\`</span>mysql<span class="token variable">\`</span></span>的server地址输入<span class="token variable"><span class="token variable">\`</span>mysql<span class="token variable">\`</span></span>，端口:<span class="token variable"><span class="token variable">\`</span><span class="token number">3306</span><span class="token variable">\`</span></span>，密码为<span class="token variable"><span class="token variable">\`</span><span class="token number">12345678</span><span class="token variable">\`</span></span>
- <span class="token variable"><span class="token variable">\`</span>redis<span class="token variable">\`</span></span>的server地址输入<span class="token variable"><span class="token variable">\`</span>redis<span class="token variable">\`</span></span>，没有密码
- 其它一路回车就好
- 第一次 <span class="token variable"><span class="token variable">\`</span>php bin/hyperf.php mine:install<span class="token variable">\`</span></span> 是配置<span class="token variable"><span class="token variable">\`</span>.env<span class="token variable">\`</span></span> 文件

<span class="token comment"># 再次执行安装命令</span>
php bin/hyperf.php mine:install
- 这次将执行安装数据

<span class="token comment"># 退出hyperf容器</span>
<span class="token builtin class-name">exit</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>启动前端</li></ol><blockquote><p>提示：<code>docker-compose.yml</code>前端映射的是<code>8101</code>端口，自己修改成想要的端口</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 进入前端目录</span>
<span class="token builtin class-name">cd</span> mine-ui

<span class="token comment"># 修改mine-ui/.env文件的ip为你服务器ip</span>

<span class="token function">npm</span> <span class="token function">install</span> 
<span class="token function">npm</span> run dev 或者 <span class="token function">npm</span> run build
<span class="token comment"># 或者</span>
<span class="token comment"># yarn install</span>
<span class="token comment"># yarn dev 或者 yarn build</span>

<span class="token comment"># 退回mineadmin目录 </span>
<span class="token builtin class-name">cd</span> <span class="token punctuation">..</span>

<span class="token comment"># 启动前端容器</span>
<span class="token function">docker-compose</span> up <span class="token parameter variable">-d</span> nginx-frontend
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>提示：<code>hyperf</code>容器内没有<code>nodejs</code>、<code>npm</code>环境，所以要在宿主机安装前端<code>npm</code>先打包，要是你不小心在打包前就已经起了前端服务，那么可以执行以下命令删除掉前端容器：</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 停止nginx-frontend容器 &amp;&amp; 删除nginx-frontend容器</span>
<span class="token function">docker-compose</span> stop nginx-frontend <span class="token operator">&amp;&amp;</span> <span class="token function">docker-compose</span> <span class="token function">rm</span> nginx-frontend
<span class="token comment"># 输入y，确认删除</span>

<span class="token comment"># 前端打包完后，单独启动前端服务</span>
<span class="token function">docker-compose</span> up <span class="token parameter variable">-d</span> nginx-frontend

<span class="token comment"># 可选：查看日志</span>
<span class="token comment"># docker-compose logs nginx-frontend</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>如果登录时一直转圈圈，可能<code>super_admin</code>和<code>admin_role</code>有问题，要从数据库读取后抄进<code>.env</code></li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 进入mysql容器</span>
<span class="token function">docker-compose</span> <span class="token builtin class-name">exec</span> mysql /bin/bash

<span class="token comment"># 进入mysql客户端</span>
mysql <span class="token parameter variable">-uroot</span> <span class="token parameter variable">-p</span>
<span class="token comment"># 输入密码:12345678</span>

<span class="token comment"># 选择mineadmin库</span>
use mineadmin<span class="token punctuation">;</span>
<span class="token comment"># 分别查询出\`super_admin\`和\`admin_role\`的id</span>
<span class="token keyword">select</span> * from system_user<span class="token punctuation">;</span>
<span class="token keyword">select</span> * from system_role<span class="token punctuation">;</span>
<span class="token comment"># 退出mysql</span>
<span class="token builtin class-name">exit</span>
<span class="token comment"># 退出容器</span>
<span class="token builtin class-name">exit</span>

<span class="token comment"># 停止和删除redis容器，或者你连进去redis，清空掉缓存</span>
<span class="token function">docker-compose</span> stop redis <span class="token operator">&amp;&amp;</span> <span class="token function">docker-compose</span> <span class="token function">rm</span> redis
<span class="token comment"># 如有提示，输入y</span>

<span class="token comment"># 重启容器</span>
<span class="token function">docker-compose</span> up <span class="token parameter variable">-d</span> redis
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>完成</li></ol><blockquote><p><code>docker-compose.yml</code>前端映射的是<code>8101</code>端口，自己修改成想要的端口</p></blockquote><p>前端访问地址：http://服务器地址:8101</p><p>后端地址验证：http://服务器地址:9501</p><p>至此，环境已搭建完毕。</p><h2 id="宝塔面板下的环境安装" tabindex="-1"><a class="header-anchor" href="#宝塔面板下的环境安装" aria-hidden="true">#</a> 宝塔面板下的环境安装</h2><div class="hint-container tip"><p class="hint-container-title">Tips</p><p>以下教程为全新系统的安装方式，可根据自己服务器的实际情况，挑选适合自己的章节</p><p>注意：图片可以点击放大查看</p></div><h3 id="安装宝塔面板" tabindex="-1"><a class="header-anchor" href="#安装宝塔面板" aria-hidden="true">#</a> 安装宝塔面板</h3><ul><li>ECS服务器,重新初始化操作系统 , 安全组开放宝塔面板所需网络端口。例如：8888端口。</li><li>安装面板，执行以下命令：</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum <span class="token function">install</span> <span class="token parameter variable">-y</span> <span class="token function">wget</span> <span class="token operator">&amp;&amp;</span> <span class="token function">wget</span> <span class="token parameter variable">-O</span> install.sh http://download.bt.cn/install/install_6.0.sh <span class="token operator">&amp;&amp;</span> <span class="token function">sh</span> install.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>按提示打开宝塔面板，完成下述各项操作步骤。</li></ul><h3 id="安装所需的web应用" tabindex="-1"><a class="header-anchor" href="#安装所需的web应用" aria-hidden="true">#</a> 安装所需的web应用</h3><p>在软件商店中搜索如下应用，并按提示完成安装即可。</p><ul><li>nginx:1.21</li><li>mysql:5.7</li><li>php:8.0</li><li>phpmyadmin:5.1</li><li>Node.js版本管理器</li></ul><p><strong>Redis 不直接安装，而是通过PHP管理器来安装</strong></p><h3 id="php配置" tabindex="-1"><a class="header-anchor" href="#php配置" aria-hidden="true">#</a> PHP配置</h3><h4 id="安装扩展" tabindex="-1"><a class="header-anchor" href="#安装扩展" aria-hidden="true">#</a> 安装扩展</h4><p>在 <code>PHP8.0 管理-安装扩展</code> 中，安装 <code>fileinfo</code>、<code>redis</code>、<code>swoole</code> 扩展。 <img src="`+r+`"></p><h4 id="修改配置文件" tabindex="-1"><a class="header-anchor" href="#修改配置文件" aria-hidden="true">#</a> 修改配置文件</h4><p>点击 <code>配置文件</code> 选项卡，搜索 <code>disable_functions</code>，替换成：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>disable_functions <span class="token operator">=</span> passthru,chroot,chgrp,chown,popen,ini_alter,ini_restore,dl,openlog,syslog,readlink,symlink,popepassthru,imap_open,apache_setenv
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><img src="`+p+`"><p>并在最后一行加入：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>swoole.use_shortname <span class="token operator">=</span> <span class="token string">&#39;Off&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="重启面板" tabindex="-1"><a class="header-anchor" href="#重启面板" aria-hidden="true">#</a> 重启面板</h3><p>由于宝塔的PHP命令行相关设置不会即时生效，也可能是bug等问题，需要对宝塔面板进行重启。</p><p>点击 <code>右上角-重启-重启面板</code> 等待几秒钟即可重启完毕</p><h3 id="后端代理配置" tabindex="-1"><a class="header-anchor" href="#后端代理配置" aria-hidden="true">#</a> 后端代理配置</h3><p>接下来，我们对 <code>nginx</code> 进行配置</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>server <span class="token punctuation">{</span>
  <span class="token comment"># 端口</span>
  listen <span class="token number">80</span><span class="token punctuation">;</span>
  <span class="token comment"># 域名 前端访问地址，改成自己的</span>
  server_name demo.mineadmin.com<span class="token punctuation">;</span>
  <span class="token comment"># 日志</span>
  access_log /data/wwwlogs/demo.mineadmin.com_nginx_access.log combined<span class="token punctuation">;</span>
  error_log /data/wwwlogs/demo.mineadmin.com_nginx_error.log debug<span class="token punctuation">;</span>

  <span class="token comment"># 同域根目录前端代码部署，注意：</span>
  location / <span class="token punctuation">{</span>
      root /data/wwwroot/demo.mineadmin.com<span class="token punctuation">;</span>
      try_files <span class="token variable">$uri</span> <span class="token variable">$uri</span>/ /index.html<span class="token punctuation">;</span>
      index index.html<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment"># 支持自定义下划线参数通过header传输</span>
  <span class="token comment"># underscores_in_headers on;</span>

  <span class="token comment"># PHP后端代理，这里的 /prod/ 要跟前端 .env.production 的 VITE_APP_PROXY_PREFIX 值一致</span>
  location /prod/ <span class="token punctuation">{</span>
      <span class="token comment"># 将客户端的 Host 和 IP 信息一并转发到对应节点</span>
      proxy_set_header Host <span class="token variable">$http_host</span><span class="token punctuation">;</span>
      proxy_set_header X-Real-IP <span class="token variable">$remote_addr</span><span class="token punctuation">;</span>
      proxy_set_header X-Forwarded-For <span class="token variable">$proxy_add_x_forwarded_for</span><span class="token punctuation">;</span>
      <span class="token comment"># 将协议架构转发到对应节点，如果使用非https请改为http</span>
      proxy_set_header X-scheme https<span class="token punctuation">;</span>

      <span class="token comment"># 执行代理访问真实服务器</span>
      proxy_pass http://127.0.0.1:9501/<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="上传目录同域名代理配置" tabindex="-1"><a class="header-anchor" href="#上传目录同域名代理配置" aria-hidden="true">#</a> 上传目录同域名代理配置</h3><p>后端代理完成后，我们需要对上传目录也设置代理，这里的设置为同域名即访问前端、也能访问后端接口，还可以访问上传目录的附件。</p><ul><li>如果是非同域名，则跟上一步骤的后端代理配置差不多</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 其他配置......</span>
<span class="token comment">#   proxy_pass http://127.0.0.1:9501/;</span>
<span class="token comment"># }</span>
<span class="token comment"># 在此配置下面继续加入配置</span>

<span class="token comment"># ^~ 不能去掉，/upload/ 中的 upload 可以改成其他名称</span>
location ^~ /upload/ <span class="token punctuation">{</span>
    <span class="token comment"># 将客户端的 Host 和 IP 信息一并转发到对应节点</span>
    proxy_set_header Host <span class="token variable">$http_host</span><span class="token punctuation">;</span>
    proxy_set_header X-Real-IP <span class="token variable">$remote_addr</span><span class="token punctuation">;</span>
    proxy_set_header X-Forwarded-For <span class="token variable">$proxy_add_x_forwarded_for</span><span class="token punctuation">;</span>
    <span class="token comment"># 将协议架构转发到对应节点，如果使用非https请改为http</span>
    proxy_set_header X-scheme https<span class="token punctuation">;</span>

    <span class="token comment"># 执行代理访问真实服务器</span>
    proxy_pass http://127.0.0.1:9501/<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面配置完成以后，我们需要对前端访问图片地址进行设置：</p><p>打开 <code>src/config/upload.js</code> 文件，修改 <code>LOCAL</code> 的值</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">storage</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 后面的 upload 要跟 nginx 的代理配置路径一致</span>
    <span class="token constant">LOCAL</span><span class="token operator">:</span> <span class="token string">&#39;http://demo.mineadmin.com/upload&#39;</span><span class="token punctuation">,</span>
    <span class="token constant">OSS</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
    <span class="token constant">COS</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
    <span class="token constant">QINIU</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="消息服务代理配置" tabindex="-1"><a class="header-anchor" href="#消息服务代理配置" aria-hidden="true">#</a> 消息服务代理配置</h3><p>消息服务是websocket协议，可以按照此配置修改成自己的：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>server <span class="token punctuation">{</span>
  <span class="token comment"># 端口</span>
  listen <span class="token number">80</span><span class="token punctuation">;</span>
  <span class="token comment"># 域名 前端访问地址，改成自己的</span>
  server_name message.mineadmin.com<span class="token punctuation">;</span>
  <span class="token comment"># 日志</span>
  access_log /data/wwwlogs/message.mineadmin.com_nginx_access.log combined<span class="token punctuation">;</span>
  error_log /data/wwwlogs/message.mineadmin.com_nginx_error.log debug<span class="token punctuation">;</span>

  location / <span class="token punctuation">{</span>
    <span class="token comment"># WebSocket Header</span>
    proxy_http_version <span class="token number">1.1</span><span class="token punctuation">;</span>
    proxy_set_header Upgrade websocket<span class="token punctuation">;</span>
    proxy_set_header Connection <span class="token string">&quot;Upgrade&quot;</span><span class="token punctuation">;</span>

    <span class="token comment"># 将客户端的 Host 和 IP 信息一并转发到对应节点</span>
    proxy_set_header X-Real-IP <span class="token variable">$remote_addr</span><span class="token punctuation">;</span>
    proxy_set_header X-Forwarded-For <span class="token variable">$proxy_add_x_forwarded_for</span><span class="token punctuation">;</span>
    proxy_set_header Host <span class="token variable">$http_host</span><span class="token punctuation">;</span>

    <span class="token comment"># 客户端与服务端无交互 60s 后自动断开连接，请根据实际业务场景设置</span>
    proxy_read_timeout 60s <span class="token punctuation">;</span>

    <span class="token comment"># 执行代理访问真实服务器</span>
    proxy_pass http://127.0.0.1:9502/<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="部署前端" tabindex="-1"><a class="header-anchor" href="#部署前端" aria-hidden="true">#</a> 部署前端</h3><p>部署前端，有两种方式：</p><ul><li>第一种为本地打包，然后上传服务器。</li><li>第二种可以通过git管理代码，每次在服务器上拉下最新代码后，在服务器上打包。</li></ul><h4 id="本地打包" tabindex="-1"><a class="header-anchor" href="#本地打包" aria-hidden="true">#</a> 本地打包</h4><p>打包后前端输出到 <code>dist</code> 目录，打包后把此目录的文件上传到服务器即可。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">yarn</span> build
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="本地预览" tabindex="-1"><a class="header-anchor" href="#本地预览" aria-hidden="true">#</a> 本地预览</h4><p>打包完成后，我们可以对打包的前端以服务器模式进行预览，可以查看程序状态，以防止打包前与打包后出现的差异或者bug</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">yarn</span> preview
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="服务器打包" tabindex="-1"><a class="header-anchor" href="#服务器打包" aria-hidden="true">#</a> 服务器打包</h4><ol><li>第一步：服务器上安装nodejs管理器</li></ol><img src="`+m+'"><ol start="2"><li>第二步：添加node项目，可以参考下图配置，点提交</li></ol><div class="hint-container tip"><p class="hint-container-title">Tips</p><p>第一次添加项目会自动下载依赖，并且启动项目。</p><p><strong>注意：打包完成后，项目服务状态会成为【未启动】状态，这个是正常的，以后每次需要打包，只需要启动一次项目即可</strong></p></div><img src="'+u+'"><ol start="3"><li>第三步：在PHP项目里，添加个普通的静态网站，目录指向前端目录的 <code>dist</code> 目录。</li></ol>',69);function y(w,q){const a=d("ExternalLinkIcon");return c(),o("div",null,[b,s("p",null,[n("首先，"),s("a",h,[n("下载DeskTop Docker"),i(a)]),n("，一步步安装软件。 安装完成后，打开docker显示这个界面，既已代表安装成功了。")]),k,s("ul",null,[g,s("li",null,[n("下载"),s("a",_,[n("【前端】"),i(a)]),n("，然后在后端根目录建立"),x,n("目录，前端文件复制到这里")])]),f])}const I=l(v,[["render",y],["__file","advanced.html.vue"]]);export{I as default};
