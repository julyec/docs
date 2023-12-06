import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{r as p,o as c,c as i,b as a,d as n,e,a as t}from"./app-06635a3b.js";const l={},r=t('<h1 id="广播" tabindex="-1"><a class="header-anchor" href="#广播" aria-hidden="true">#</a> 广播</h1><ul><li><a href="#introduction">介绍</a></li><li><a href="#server-side-installation">服务器端安装</a></li><li><a href="#configuration">配置</a></li><li><a href="#pusher-channels">Pusher Channels</a></li><li><a href="#ably">Ably</a></li><li><a href="#open-source-alternatives">开源替代品</a></li><li><a href="#client-side-installation">客户端安装</a></li><li><a href="#client-pusher-channels">Pusher Channels</a></li><li><a href="#client-ably">Ably</a></li><li><a href="#concept-overview">概念概述</a></li><li><a href="#using-example-application">使用示例应用程序</a></li><li><a href="#defining-broadcast-events">定义广播事件</a></li><li><a href="#broadcast-name">广播名称</a></li><li><a href="#broadcast-data">广播数据</a></li><li><a href="#broadcast-queue">广播队列</a></li><li><a href="#broadcast-conditions">广播条件</a></li><li><a href="#broadcasting-and-database-transactions">广播和数据库事务</a></li><li><a href="#authorizing-channels">授权频道</a></li><li><a href="#defining-authorization-routes">定义授权路由</a></li><li><a href="#defining-authorization-callbacks">定义授权回调</a></li><li><a href="#defining-channel-classes">定义频道类</a></li><li><a href="#broadcasting-events">广播事件</a></li><li><a href="#only-to-others">仅发送给其他人</a></li><li><a href="#customizing-the-connection">自定义连接</a></li><li><a href="#receiving-broadcasts">接收广播</a></li><li><a href="#listening-for-events">监听事件</a></li><li><a href="#leaving-a-channel">离开频道</a></li><li><a href="#namespaces">命名空间</a></li><li><a href="#presence-channels">在场频道</a></li><li><a href="#authorizing-presence-channels">授权在场频道</a></li><li><a href="#joining-presence-channels">加入在场频道</a></li><li><a href="#broadcasting-to-presence-channels">广播到在场频道</a></li><li><a href="#model-broadcasting">模型广播</a></li><li><a href="#model-broadcasting-conventions">模型广播约定</a></li><li><a href="#listening-for-model-broadcasts">监听模型广播</a></li><li><a href="#client-events">客户端事件</a></li><li><a href="#notifications">通知</a></li></ul><p><a name="introduction"></a></p><h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h2><p>在许多现代 Web 应用程序中，WebSockets 用于实现实时的、实时更新的用户界面。当服务器上的某些数据更新时，通常会发送一条消息到 WebSocket 连接，以由客户端处理。WebSockets 提供了一种更有效的替代方法，可以连续轮询应用程序服务器以反映 UI 中应该反映的数据更改。</p><p>举个例子，假设你的应用程序能够将用户的数据导出为 CSV 文件并通过电子邮件发送给他们。但是，创建这个 CSV 文件需要几分钟的时间，因此你选择在<a href="./queues">队列任务</a>中创建和发送 CSV。当 CSV 文件已经创建并发送给用户后，我们可以使用事件广播来分发 <code>App\\Events\\UserDataExported</code> 事件，该事件由我们应用程序的 JavaScript 接收。一旦接收到事件，我们可以向用户显示消息，告诉他们他们的 CSV 已通过电子邮件发送给他们，而无需刷新页面。</p><p>为了帮助你构建此类特性，Laravel使得在WebSocket连接上“广播”你的服务端<a href="./events">Laravel事件</a>变得简单。广播你的Laravel事件允许你在你的服务端Laravel应用和客户端JavaScript应用之间共享相同的事件名称和数据。</p><p>广播背后的核心概念很简单：客户端在前端连接到命名通道，而你的Laravel应用在后端向这些通道广播事件。这些事件可以包含任何你想要向前端提供的其他数据。</p><p><a name="supported-drivers"></a></p><h4 id="支持的驱动程序" tabindex="-1"><a class="header-anchor" href="#支持的驱动程序" aria-hidden="true">#</a> 支持的驱动程序</h4>',10),d={href:"https://pusher.com/channels",target:"_blank",rel:"noopener noreferrer"},u={href:"https://ably.com/",target:"_blank",rel:"noopener noreferrer"},k={href:"https://beyondco.de/docs/laravel-websockets/getting-started/introduction",target:"_blank",rel:"noopener noreferrer"},h={href:"https://docs.soketi.app/",target:"_blank",rel:"noopener noreferrer"},v=t('<blockquote><p><strong>注意</strong> 在深入了解事件广播之前，请确保已阅读Laravel的<a href="./events">事件和侦听器</a>文档。</p></blockquote><p><a name="server-side-installation"></a></p><h2 id="服务端安装" tabindex="-1"><a class="header-anchor" href="#服务端安装" aria-hidden="true">#</a> 服务端安装</h2><p>为了开始使用Laravel的事件广播，我们需要在Laravel应用程序中进行一些配置，并安装一些包。</p><p>事件广播是通过服务端广播驱动程序实现的，该驱动程序广播你的Laravel事件，以便Laravel Echo（一个JavaScript库）可以在浏览器客户端中接收它们。不用担心 - 我们将逐步介绍安装过程的每个部分。</p><p><a name="configuration"></a></p><h3 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h3>',7),m=a("code",null,"config/broadcasting.php",-1),b={href:"https://pusher.com/channels",target:"_blank",rel:"noopener noreferrer"},g=a("a",{href:"./redis"},"Redis",-1),f=a("code",null,"log",-1),y=a("code",null,"null",-1),_=a("code",null,"config/broadcasting.php",-1),w=t('<p><a name="broadcast-service-provider"></a></p><h4 id="广播服务提供商" tabindex="-1"><a class="header-anchor" href="#广播服务提供商" aria-hidden="true">#</a> 广播服务提供商</h4><p>在广播任何事件之前，您首先需要注册 <code>App\\Providers\\BroadcastServiceProvider</code>。在新的 Laravel 应用程序中，您只需要在 <code>config/app.php</code> 配置文件的 <code>providers</code> 数组中取消注释此提供程序即可。这个 <code>BroadcastServiceProvider</code> 包含了注册广播授权路由和回调所需的代码。</p><p><a name="queue-configuration"></a></p><h4 id="队列配置" tabindex="-1"><a class="header-anchor" href="#队列配置" aria-hidden="true">#</a> 队列配置</h4><p>您还需要配置和运行一个<a href="./queues">队列工作者</a>。所有事件广播都是通过排队的作业完成的，以确保您的应用程序的响应时间不会受到广播事件的影响。</p><p><a name="pusher-channels"></a></p><h3 id="pusher-channels" tabindex="-1"><a class="header-anchor" href="#pusher-channels" aria-hidden="true">#</a> Pusher Channels</h3>',8),E={href:"https://pusher.com/channels",target:"_blank",rel:"noopener noreferrer"},S=t(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">composer</span> require pusher/pusher-php-server
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>接下来，您应该在 <code>config/broadcasting.php</code> 配置文件中配置 Pusher Channels 凭据。此文件中已经包含了一个示例 Pusher Channels 配置，让您可以快速指定您的密钥、密钥、应用程序 ID。通常，这些值应该通过 <code>PUSHER_APP_KEY</code>、<code>PUSHER_APP_SECRET</code> 和 <code>PUSHER_APP_ID</code> <a href="./configuration#environment-configuration">环境变量</a> 设置：</p><div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code><span class="token key attr-name">PUSHER_APP_ID</span><span class="token punctuation">=</span><span class="token value attr-value">your-pusher-app-id</span>
<span class="token key attr-name">PUSHER_APP_KEY</span><span class="token punctuation">=</span><span class="token value attr-value">your-pusher-key</span>
<span class="token key attr-name">PUSHER_APP_SECRET</span><span class="token punctuation">=</span><span class="token value attr-value">your-pusher-secret</span>
<span class="token key attr-name">PUSHER_APP_CLUSTER</span><span class="token punctuation">=</span><span class="token value attr-value">mt1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>config/broadcasting.php</code> 文件的 <code>pusher</code> 配置还允许您指定 Channels 支持的其他 <code>options</code>，例如集群。</p><p>接下来，您需要在您的 <code>.env</code> 文件中将广播驱动程序更改为 <code>pusher</code>：</p><div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code><span class="token key attr-name">BROADCAST_DRIVER</span><span class="token punctuation">=</span><span class="token value attr-value">pusher</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>最后，您已经准备好安装和配置<a href="#client-side-installation">Laravel Echo</a>，它将在客户端接收广播事件。</p><p><a name="pusher-compatible-open-source-alternatives"></a></p><h4 id="开源的pusher替代品" tabindex="-1"><a class="header-anchor" href="#开源的pusher替代品" aria-hidden="true">#</a> 开源的Pusher替代品</h4>`,9),x={href:"https://github.com/beyondcode/laravel-websockets",target:"_blank",rel:"noopener noreferrer"},P={href:"https://docs.soketi.app/",target:"_blank",rel:"noopener noreferrer"},I=a("a",{href:"#open-source-alternatives"},"开源替代品文档",-1),B=a("p",null,[a("a",{name:"ably"})],-1),j=a("h3",{id:"ably",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#ably","aria-hidden":"true"},"#"),n(" Ably")],-1),A=a("strong",null,"注意",-1),C={href:"https://github.com/ably/laravel-broadcaster",target:"_blank",rel:"noopener noreferrer"},q={href:"https://ably.com/",target:"_blank",rel:"noopener noreferrer"},$=t(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">composer</span> require ably/ably-php
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>接下来，您应该在<code>config/broadcasting.php</code>配置文件中配置您的Ably凭据。该文件已经包含了一个示例Ably配置，允许您快速指定您的密钥。通常，此值应通过<code>ABLY_KEY</code><a href="./configuration#environment-configuration">环境变量</a>进行设置：</p><div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code><span class="token key attr-name">ABLY_KEY</span><span class="token punctuation">=</span><span class="token value attr-value">your-ably-key</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Next, you will need to change your broadcast driver to <code>ably</code> in your <code>.env</code> file:</p><div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code><span class="token key attr-name">BROADCAST_DRIVER</span><span class="token punctuation">=</span><span class="token value attr-value">ably</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>接下来，您需要在<code>.env</code>文件中将广播驱动程序更改为<code>ably</code>：</p><p><a name="open-source-alternatives"></a></p><h3 id="开源替代方案" tabindex="-1"><a class="header-anchor" href="#开源替代方案" aria-hidden="true">#</a> 开源替代方案</h3><p><a name="open-source-alternatives-php"></a></p><h4 id="php" tabindex="-1"><a class="header-anchor" href="#php" aria-hidden="true">#</a> PHP</h4>`,10),L={href:"https://github.com/beyondcode/laravel-websockets",target:"_blank",rel:"noopener noreferrer"},O={href:"https://beyondco.de/docs/laravel-websockets",target:"_blank",rel:"noopener noreferrer"},U=a("p",null,[a("a",{name:"open-source-alternatives-node"})],-1),M=a("h4",{id:"node",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#node","aria-hidden":"true"},"#"),n(" Node")],-1),D={href:"https://github.com/soketi/soketi",target:"_blank",rel:"noopener noreferrer"},z={href:"https://docs.soketi.app/",target:"_blank",rel:"noopener noreferrer"},T=t('<p><a name="client-side-installation"></a></p><h2 id="客户端安装" tabindex="-1"><a class="header-anchor" href="#客户端安装" aria-hidden="true">#</a> 客户端安装</h2><p><a name="client-pusher-channels"></a></p><h3 id="pusher-channels-1" tabindex="-1"><a class="header-anchor" href="#pusher-channels-1" aria-hidden="true">#</a> Pusher Channels</h3>',4),W={href:"https://github.com/laravel/echo",target:"_blank",rel:"noopener noreferrer"},J=a("code",null,"pusher-js",-1),R=t(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> --save-dev laravel-echo pusher-js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>安装 Echo 后，您可以在应用程序的 JavaScript 中创建一个新的 Echo 实例。一个很好的地方是在 Laravel 框架附带的 <code>resources/js/bootstrap.js</code> 文件的底部创建它。默认情况下，该文件中已包含一个示例 Echo 配置 - 您只需取消注释即可：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> Echo <span class="token keyword">from</span> <span class="token string">&#39;laravel-echo&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Pusher <span class="token keyword">from</span> <span class="token string">&#39;pusher-js&#39;</span><span class="token punctuation">;</span>

window<span class="token punctuation">.</span>Pusher <span class="token operator">=</span> Pusher<span class="token punctuation">;</span>

window<span class="token punctuation">.</span>Echo <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Echo</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">broadcaster</span><span class="token operator">:</span> <span class="token string">&#39;pusher&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">VITE_PUSHER_APP_KEY</span><span class="token punctuation">,</span>
    <span class="token literal-property property">cluster</span><span class="token operator">:</span> <span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">VITE_PUSHER_APP_CLUSTER</span><span class="token punctuation">,</span>
    <span class="token literal-property property">forceTLS</span><span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>一旦您根据自己的需求取消注释并调整了 Echo 配置，就可以编译应用程序的资产：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> run dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p><strong>注意</strong> 要了解有关编译应用程序的 JavaScript 资产的更多信息，请参阅 <a href="./vite">Vite</a> 上的文档。</p></blockquote><p><a name="using-an-existing-client-instance"></a></p><h4 id="使用现有的客户端实例" tabindex="-1"><a class="header-anchor" href="#使用现有的客户端实例" aria-hidden="true">#</a> 使用现有的客户端实例</h4><p>如果您已经有一个预配置的 Pusher Channels 客户端实例，并希望 Echo 利用它，您可以通过 <code>client</code> 配置选项将其传递给 Echo：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> Echo <span class="token keyword">from</span> <span class="token string">&#39;laravel-echo&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Pusher <span class="token keyword">from</span> <span class="token string">&#39;pusher-js&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> options <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">broadcaster</span><span class="token operator">:</span> <span class="token string">&#39;pusher&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">&#39;your-pusher-channels-key&#39;</span>
<span class="token punctuation">}</span>

window<span class="token punctuation">.</span>Echo <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Echo</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token operator">...</span>options<span class="token punctuation">,</span>
    <span class="token literal-property property">client</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Pusher</span><span class="token punctuation">(</span>options<span class="token punctuation">.</span>key<span class="token punctuation">,</span> options<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="client-ably"></a></p><h3 id="ably-1" tabindex="-1"><a class="header-anchor" href="#ably-1" aria-hidden="true">#</a> Ably</h3>`,12),H=a("strong",null,"注意",-1),N={href:"https://github.com/ably/laravel-broadcaster",target:"_blank",rel:"noopener noreferrer"},V={href:"https://github.com/laravel/echo",target:"_blank",rel:"noopener noreferrer"},Y=a("code",null,"pusher-js",-1),K=t(`<p>您可能会想为什么我们要安装 <code>pusher-js</code> JavaScript 库，即使我们使用 Ably 来广播事件。幸运的是，Ably 包括 Pusher 兼容性模式，让我们可以在客户端应用程序中使用 Pusher 协议来侦听事件：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> --save-dev laravel-echo pusher-js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>在继续之前，你应该在你的 Ably 应用设置中启用 Pusher 协议支持。你可以在你的 Ably 应用设置仪表板的“协议适配器设置”部分中启用此功能。</strong></p><p>安装 Echo 后，你可以在应用的 JavaScript 中创建一个新的 Echo 实例。一个很好的地方是在 Laravel 框架附带的 <code>resources/js/bootstrap.js</code> 文件底部。默认情况下，此文件中已包含一个示例 Echo 配置；但是，<code>bootstrap.js</code> 文件中的默认配置是为 Pusher 设计的。你可以复制以下配置来将配置转换为 Ably：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> Echo <span class="token keyword">from</span> <span class="token string">&#39;laravel-echo&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Pusher <span class="token keyword">from</span> <span class="token string">&#39;pusher-js&#39;</span><span class="token punctuation">;</span>

window<span class="token punctuation">.</span>Pusher <span class="token operator">=</span> Pusher<span class="token punctuation">;</span>

window<span class="token punctuation">.</span>Echo <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Echo</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">broadcaster</span><span class="token operator">:</span> <span class="token string">&#39;pusher&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">VITE_ABLY_PUBLIC_KEY</span><span class="token punctuation">,</span>
    <span class="token literal-property property">wsHost</span><span class="token operator">:</span> <span class="token string">&#39;realtime-pusher.ably.io&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">wsPort</span><span class="token operator">:</span> <span class="token number">443</span><span class="token punctuation">,</span>
    <span class="token literal-property property">disableStats</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">encrypted</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>请注意，我们的 Ably Echo 配置引用了一个 <code>VITE_ABLY_PUBLIC_KEY</code> 环境变量。该变量的值应该是你的 Ably 公钥。你的公钥是出现在 Ably 密钥的 <code>:</code> 字符之前的部分。</p><p>一旦你根据需要取消注释并调整 Echo 配置，你可以编译应用的资产：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> run dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p><strong>注意</strong> 要了解有关编译应用程序的 JavaScript 资产的更多信息，请参阅 <a href="./vite">Vite</a> 的文档。</p></blockquote><p><a name="concept-overview"></a></p><h2 id="概念概述" tabindex="-1"><a class="header-anchor" href="#概念概述" aria-hidden="true">#</a> 概念概述</h2>`,11),Q={href:"https://pusher.com/channels",target:"_blank",rel:"noopener noreferrer"},F={href:"https://ably.com/",target:"_blank",rel:"noopener noreferrer"},X=a("a",{href:"#client-side-installation"},"Laravel Echo",-1),G=t(`<p>事件通过“通道”广播，可以指定为公共或私有。任何访问您的应用程序的用户都可以订阅公共频道，无需进行身份验证或授权；但是，要订阅私有频道，用户必须经过身份验证和授权以便监听该频道。</p><blockquote><p><strong>注意</strong><br> 如果您想探索 Pusher 的开源替代品，请查看<a href="#open-source-alternatives">开源替代品</a>。</p></blockquote><p><a name="using-example-application"></a></p><h3 id="使用示例应用程序" tabindex="-1"><a class="header-anchor" href="#使用示例应用程序" aria-hidden="true">#</a> 使用示例应用程序</h3><p>在深入了解事件广播的每个组件之前，让我们使用电子商务店铺作为示例进行高级概述。</p><p>在我们的应用程序中，假设我们有一个页面，允许用户查看其订单的发货状态。假设在应用程序处理发货状态更新时，将触发一个 <code>OrderShipmentStatusUpdated</code> 事件：</p><pre><code>use App\\Events\\OrderShipmentStatusUpdated;

OrderShipmentStatusUpdated::dispatch($order);
</code></pre><p><a name="the-shouldbroadcast-interface"></a></p><h4 id="shouldbroadcast-接口" tabindex="-1"><a class="header-anchor" href="#shouldbroadcast-接口" aria-hidden="true">#</a> ShouldBroadcast 接口</h4><p>当用户查看其订单之一时，我们不希望他们必须刷新页面才能查看状态更新。相反，我们希望在创建更新时将更新广播到应用程序。因此，我们需要使用 <code>ShouldBroadcast</code> 接口标记 <code>OrderShipmentStatusUpdated</code> 事件。这将指示 Laravel 在触发事件时广播该事件：</p><pre><code>&lt;?php

namespace App\\Events;

use App\\Models\\Order;
use Illuminate\\Broadcasting\\Channel;
use Illuminate\\Broadcasting\\InteractsWithSockets;
use Illuminate\\Broadcasting\\PresenceChannel;
use Illuminate\\Contracts\\Broadcasting\\ShouldBroadcast;
use Illuminate\\Queue\\SerializesModels;

class OrderShipmentStatusUpdated implements ShouldBroadcast
{
    /**
     * The order instance.
     *
     * @var \\App\\Order
     */
    public $order;
}
</code></pre><p><code>ShouldBroadcast</code>接口要求我们的事件定义一个<code>broadcastOn</code>方法。该方法负责返回事件应广播到的频道。在生成的事件类中已经定义了这个方法的空桩，所以我们只需要填写它的细节即可。我们只希望订单的创建者能够查看状态更新，因此我们将事件广播到与订单相关的私有频道上：</p><pre><code>use Illuminate\\Broadcasting\\Channel;
use Illuminate\\Broadcasting\\PrivateChannel;

/**
 * 获取事件应该广播到的频道。
 */
public function broadcastOn(): Channel
{
    return new PrivateChannel(&#39;orders.&#39;.$this-&gt;order-&gt;id);
}
</code></pre><p>如果你希望事件广播到多个频道，可以返回一个<code>array</code>：</p><pre><code>use Illuminate\\Broadcasting\\PrivateChannel;

/**
 * 获取事件应该广播到的频道。
 *
 * @return array&lt;int, \\Illuminate\\Broadcasting\\Channel&gt;
 */
public function broadcastOn(): array
{
    return [
        new PrivateChannel(&#39;orders.&#39;.$this-&gt;order-&gt;id),
        // ...
    ];
}
</code></pre><p><a name="example-application-authorizing-channels"></a></p><h4 id="授权频道" tabindex="-1"><a class="header-anchor" href="#授权频道" aria-hidden="true">#</a> 授权频道</h4><p>记住，用户必须被授权才能监听私有频道。我们可以在应用程序的<code>routes/channels.php</code>文件中定义频道授权规则。在这个例子中，我们需要验证任何试图监听私有<code>orders.1</code>频道的用户是否实际上是订单的创建者：</p><pre><code>use App\\Models\\Order;
use App\\Models\\User;

Broadcast::channel(&#39;orders.{orderId}&#39;, function (User $user, int $orderId) {
    return $user-&gt;id === Order::findOrNew($orderId)-&gt;user_id;
});
</code></pre><p><code>channel</code>方法接受两个参数：频道名称和一个回调函数，该函数返回<code>true</code>或<code>false</code>，表示用户是否被授权监听该频道。</p><p>所有授权回调函数的第一个参数是当前认证的用户，其余的通配符参数是它们的后续参数。在此示例中，我们使用<code>{orderId}</code>占位符来指示频道名称的“ID”部分是通配符。</p><p><a name="listening-for-event-broadcasts"></a></p><h4 id="监听事件广播" tabindex="-1"><a class="header-anchor" href="#监听事件广播" aria-hidden="true">#</a> 监听事件广播</h4><p>接下来，我们只需要在JavaScript应用程序中监听事件即可。我们可以使用<a href="#client-side-installation">Laravel Echo</a>来完成这个过程。首先，我们使用<code>private</code>方法订阅私有频道。然后，我们可以使用<code>listen</code>方法来监听<code>OrderShipmentStatusUpdated</code>事件。默认情况下，广播事件的所有公共属性将被包括在广播事件中：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>Echo<span class="token punctuation">.</span><span class="token function">private</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">orders.</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>orderId<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token string">&#39;OrderShipmentStatusUpdated&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>order<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="defining-broadcast-events"></a></p><h2 id="定义广播事件" tabindex="-1"><a class="header-anchor" href="#定义广播事件" aria-hidden="true">#</a> 定义广播事件</h2><p>要通知 Laravel 给定事件应该被广播，您必须在事件类上实现<code>Illuminate\\Contracts\\Broadcasting\\ShouldBroadcast</code>接口。该接口已经被框架生成的所有事件类导入，因此您可以轻松地将其添加到任何事件中。</p><p><code>ShouldBroadcast</code>接口要求您实现一个单独的方法:<code>broadcastOn</code>。<code>broadcastOn</code>方法应该返回一个频道或频道数组，事件应该在这些频道上广播。这些频道应该是<code>Channel</code>、<code>PrivateChannel</code>或<code>PresenceChannel</code>的实例。<code>Channel</code>的实例表示任何用户都可以订阅的公共频道，而<code>PrivateChannel</code>和<code>PresenceChannel</code>表示需要<a href="#authorizing-channels">频道授权</a>的私有频道：</p><pre><code>&lt;?php

namespace App\\Events;

use App\\Models\\User;
use Illuminate\\Broadcasting\\Channel;
use Illuminate\\Broadcasting\\InteractsWithSockets;
use Illuminate\\Broadcasting\\PresenceChannel;
use Illuminate\\Broadcasting\\PrivateChannel;
use Illuminate\\Contracts\\Broadcasting\\ShouldBroadcast;
use Illuminate\\Queue\\SerializesModels;

class ServerCreated implements ShouldBroadcast
{
    use SerializesModels;

    /**
     * 创建一个新的事件实例。
     */
    public function __construct(
        public User $user,
    ) {}

    /**
     * 获取事件应该广播到哪些频道。
     *
     * @return array&lt;int, \\Illuminate\\Broadcasting\\Channel&gt;
     */
    public function broadcastOn(): array
    {
        return [
            new PrivateChannel(&#39;user.&#39;.$this-&gt;user-&gt;id),
        ];
    }
}
</code></pre><p>实现 <code>ShouldBroadcast</code> 接口后，您只需要像平常一样<a href="./events">触发事件</a>。一旦事件被触发，一个<a href="./queues">队列任务</a>将自动使用指定的广播驱动程序广播该事件。</p><p><a name="broadcast-name"></a></p><h3 id="广播名称" tabindex="-1"><a class="header-anchor" href="#广播名称" aria-hidden="true">#</a> 广播名称</h3><p>默认情况下，Laravel将使用事件类名广播事件。但是，您可以通过在事件上定义 <code>broadcastAs</code> 方法来自定义广播名称：</p><pre><code>/**
 * 活动的广播名称
 */
public function broadcastAs(): string
{
    return &#39;server.created&#39;;
}
</code></pre><p>如果您使用 <code>broadcastAs</code> 方法自定义广播名称，则应确保使用前导“.”字符注册您的侦听器。这将指示 Echo 不将应用程序的命名空间添加到事件中：</p><pre><code>.listen(&#39;.server.created&#39;, function (e) {
    ....
});
</code></pre><p><a name="broadcast-data"></a></p><h3 id="广播数据" tabindex="-1"><a class="header-anchor" href="#广播数据" aria-hidden="true">#</a> 广播数据</h3><p>当广播事件时，所有 <code>public</code> 属性都将自动序列化并广播为事件负载，使您能够从 JavaScript 应用程序中访问其任何公共数据。例如，如果您的事件具有单个公共 <code>$user</code> 属性，其中包含 Eloquent 模型，则事件的广播负载将是：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;user&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Patrick Stewart&quot;</span>
        ...
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但是，如果您希望更精细地控制广播负载，则可以向事件中添加 <code>broadcastWith</code> 方法。该方法应该返回您希望作为事件负载广播的数据数组：</p><pre><code>/**
 * 获取要广播的数据。
 *
 * @return array&lt;string, mixed&gt;
 */
public function broadcastWith(): array
{
    return [&#39;id&#39; =&gt; $this-&gt;user-&gt;id];
}
</code></pre><p><a name="broadcast-queue"></a></p><h3 id="广播队列" tabindex="-1"><a class="header-anchor" href="#广播队列" aria-hidden="true">#</a> 广播队列</h3><p>默认情况下，每个广播事件都会被放置在您在 <code>queue.php</code> 配置文件中指定的默认队列连接的默认队列上。您可以通过在事件类上定义 <code>connection</code> 和 <code>queue</code> 属性来自定义广播器使用的队列连接和名称：</p><pre><code>/**
 * 广播事件时要使用的队列连接的名称。
 *
 * @var string
 */
public $connection = &#39;redis&#39;;

/**
 * 广播作业要放置在哪个队列上的名称。
 *
 * @var string
 */
public $queue = &#39;default&#39;;
</code></pre><p>或者，您可以通过在事件上定义一个 <code>broadcastQueue</code> 方法来自定义队列名称：</p><pre><code>/**
 * 广播作业放置在其上的队列的名称。
 */
public function broadcastQueue(): string
{
    return &#39;default&#39;;
}
</code></pre><p>如果您想要使用 <code>sync</code> 队列而不是默认的队列驱动程序来广播事件，您可以实现 <code>ShouldBroadcastNow</code> 接口而不是 <code>ShouldBroadcast</code> 接口：</p><pre><code>&lt;?php

use Illuminate\\Contracts\\Broadcasting\\ShouldBroadcastNow;

class OrderShipmentStatusUpdated implements ShouldBroadcastNow
{
    // ...
}
</code></pre><p><a name="broadcast-conditions"></a></p><h3 id="广播条件" tabindex="-1"><a class="header-anchor" href="#广播条件" aria-hidden="true">#</a> 广播条件</h3><p>有时候您只想在给定条件为真时才广播事件。您可以通过在事件类中添加一个 <code>broadcastWhen</code> 方法来定义这些条件：</p><pre><code>/**
 * 确定此事件是否应该广播。
 */
public function broadcastWhen(): bool
{
    return $this-&gt;order-&gt;value &gt; 100;
}
</code></pre><p><a name="broadcasting-and-database-transactions"></a></p><h4 id="广播和数据库事务" tabindex="-1"><a class="header-anchor" href="#广播和数据库事务" aria-hidden="true">#</a> 广播和数据库事务</h4><p>当在数据库事务中分派广播事件时，它们可能会在数据库事务提交之前被队列处理。当这种情况发生时，在数据库中对模型或数据库记录所做的任何更新可能尚未反映在数据库中。此外，在事务中创建的任何模型或数据库记录可能不存在于数据库中。如果您的事件依赖于这些模型，则在处理广播事件的作业时可能会出现意外错误。</p><p>如果您的队列连接的<code>after_commit</code>配置选项设置为<code>false</code>，您仍然可以通过在事件类上定义<code>$afterCommit</code>属性来指示特定的广播事件在所有打开的数据库事务提交后被调度：</p><pre><code>&lt;?php

namespace App\\Events;

use Illuminate\\Contracts\\Broadcasting\\ShouldBroadcast;
use Illuminate\\Queue\\SerializesModels;

class ServerCreated implements ShouldBroadcast
{
    use SerializesModels;

    public $afterCommit = true;
}
</code></pre>`,60),Z=a("strong",null,"注意",-1),nn={href:"https://chat.openai.com./queues#jobs-and-database-transactions",target:"_blank",rel:"noopener noreferrer"},an=t(`<p><a name="authorizing-channels"></a></p><h2 id="授权频道-1" tabindex="-1"><a class="header-anchor" href="#授权频道-1" aria-hidden="true">#</a> 授权频道</h2><p>私有频道需要您授权当前已验证的用户是否实际上可以监听该频道。这可以通过向您的 Laravel 应用程序发送带有频道名称的 HTTP 请求来完成，并允许您的应用程序确定用户是否可以在该频道上监听。当使用<a href="#client-side-installation">Laravel Echo</a>时，将自动进行授权订阅私有频道的 HTTP 请求；但是，您需要定义正确的路由来响应这些请求。</p><p><a name="defining-authorization-routes"></a></p><h3 id="定义授权路由" tabindex="-1"><a class="header-anchor" href="#定义授权路由" aria-hidden="true">#</a> 定义授权路由</h3><p>幸运的是，Laravel 可以轻松定义用于响应频道授权请求的路由。在您的 Laravel 应用程序中包含的<code>App\\Providers\\BroadcastServiceProvider</code>中，您将看到对<code>Broadcast::routes</code>方法的调用。此方法将注册<code>/broadcasting/auth</code>路由以处理授权请求：</p><pre><code>Broadcast::routes();
</code></pre><p><code>Broadcast::routes</code>方法将自动将其路由放置在<code>web</code>中间件组中；但是，如果您想自定义分配的属性，则可以将路由属性数组传递给该方法：</p><pre><code>Broadcast::routes($attributes);
</code></pre><p><a name="customizing-the-authorization-endpoint"></a></p><h4 id="自定义授权终点" tabindex="-1"><a class="header-anchor" href="#自定义授权终点" aria-hidden="true">#</a> 自定义授权终点</h4><p>默认情况下，Echo 将使用 <code>/broadcasting/auth</code> 终点来授权频道访问。但是，您可以通过将 <code>authEndpoint</code> 配置选项传递给 Echo 实例来指定自己的授权终点：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>window<span class="token punctuation">.</span>Echo <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Echo</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">broadcaster</span><span class="token operator">:</span> <span class="token string">&#39;pusher&#39;</span><span class="token punctuation">,</span>
    <span class="token comment">// ...</span>
    <span class="token literal-property property">authEndpoint</span><span class="token operator">:</span> <span class="token string">&#39;/custom/endpoint/auth&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="customizing-the-authorization-request"></a></p><h4 id="自定义授权请求" tabindex="-1"><a class="header-anchor" href="#自定义授权请求" aria-hidden="true">#</a> 自定义授权请求</h4><p>您可以在初始化 Echo 时提供自定义授权器来自定义 Laravel Echo 如何执行授权请求：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>window<span class="token punctuation">.</span>Echo <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Echo</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
    <span class="token function-variable function">authorizer</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">channel<span class="token punctuation">,</span> options</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span>
            <span class="token function-variable function">authorize</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">socketId<span class="token punctuation">,</span> callback</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
                axios<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string">&#39;/api/broadcasting/auth&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">socket_id</span><span class="token operator">:</span> socketId<span class="token punctuation">,</span>
                    <span class="token literal-property property">channel_name</span><span class="token operator">:</span> channel<span class="token punctuation">.</span>name
                <span class="token punctuation">}</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">response</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
                    <span class="token function">callback</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> response<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">error</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
                    <span class="token function">callback</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="defining-authorization-callbacks"></a></p><h3 id="定义授权回调函数" tabindex="-1"><a class="header-anchor" href="#定义授权回调函数" aria-hidden="true">#</a> 定义授权回调函数</h3><p>接下来，我们需要定义实际确定当前认证用户是否可以收听给定频道的逻辑。这是在您的应用程序中包含的 <code>routes/channels.php</code> 文件中完成的。在该文件中，您可以使用 <code>Broadcast::channel</code> 方法来注册频道授权回调函数：</p><pre><code>use App\\Models\\User;

Broadcast::channel(&#39;orders.{orderId}&#39;, function (User $user, int $orderId) {
    return $user-&gt;id === Order::findOrNew($orderId)-&gt;user_id;
});
</code></pre><p><code>channel</code> 方法接受两个参数：频道名称和一个回调函数，该回调函数返回 <code>true</code> 或 <code>false</code>，指示用户是否有权限在频道上收听。</p><p>所有授权回调函数都接收当前认证用户作为其第一个参数，任何其他通配符参数作为其后续参数。在此示例中，我们使用 <code>{orderId}</code> 占位符来指示频道名称的 &quot;ID&quot; 部分是通配符。</p><p>您可以使用<code>channel:list</code> Artisan命令查看应用程序的广播授权回调列表：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan channel:list
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a name="authorization-callback-model-binding"></a></p><h4 id="授权回调模型绑定" tabindex="-1"><a class="header-anchor" href="#授权回调模型绑定" aria-hidden="true">#</a> 授权回调模型绑定</h4><p>与HTTP路由一样，频道路由也可以利用隐式和显式的<a href="./routing#route-model-binding">路由模型绑定</a>。例如，您可以请求一个实际的 <code>Order</code> 模型实例，而不是接收一个字符串或数字订单ID：</p><pre><code>use App\\Models\\Order;
use App\\Models\\User;

Broadcast::channel(&#39;orders.{order}&#39;, function (User $user, Order $order) {
    return $user-&gt;id === $order-&gt;user_id;
});
</code></pre><blockquote><p><strong>警告</strong> 与HTTP路由模型绑定不同，频道模型绑定不支持自动<a href="./routing#implicit-model-binding-scoping">隐式模型绑定范围</a>。但是，这很少是问题，因为大多数频道可以基于单个模型的唯一主键进行范围限制。</p></blockquote><p><a name="authorization-callback-authentication"></a></p><h4 id="授权回调身份验证" tabindex="-1"><a class="header-anchor" href="#授权回调身份验证" aria-hidden="true">#</a> 授权回调身份验证</h4><p>私有和存在广播频道会通过您的应用程序的默认身份验证保护当前用户。如果用户未经过身份验证，则频道授权将自动被拒绝，并且不会执行授权回调。但是，您可以分配多个自定义守卫，以根据需要对传入请求进行身份验证：</p><pre><code>Broadcast::channel(&#39;channel&#39;, function () {
    // ...
}, [&#39;guards&#39; =&gt; [&#39;web&#39;, &#39;admin&#39;]]);
</code></pre><p><a name="defining-channel-classes"></a></p><h3 id="定义频道类" tabindex="-1"><a class="header-anchor" href="#定义频道类" aria-hidden="true">#</a> 定义频道类</h3><p>如果您的应用程序正在消耗许多不同的频道，则您的 <code>routes/channels.php</code> 文件可能会变得臃肿。因此，您可以使用频道类而不是使用闭包来授权频道。要生成一个频道类，请使用 <code>make:channel</code> Artisan命令。该命令将在 <code>App/Broadcasting</code> 目录中放置一个新的频道类。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan make:channel OrderChannel
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>接下来，在您的 <code>routes/channels.php</code> 文件中注册您的频道：</p><pre><code>use App\\Broadcasting\\OrderChannel;

Broadcast::channel(&#39;orders.{order}&#39;, OrderChannel::class);
</code></pre><p>最后，您可以将频道授权逻辑放在频道类的 <code>join</code> 方法中。这个 <code>join</code> 方法将包含您通常放置在频道授权闭包中的相同逻辑。您还可以利用频道模型绑定：</p><pre><code>&lt;?php

namespace App\\Broadcasting;

use App\\Models\\Order;
use App\\Models\\User;

class OrderChannel
{
    /**
     * 创建一个新的频道实例。
     */
    public function __construct()
    {
        // ...
    }

    /**
     * 验证用户对频道的访问权限。
     */
    public function join(User $user, Order $order): array|bool
    {
        return $user-&gt;id === $order-&gt;user_id;
    }
}
</code></pre><blockquote><p><strong>注意</strong> 像 Laravel 中的许多其他类一样，频道类将自动由<a href="./container">服务容器</a>解析。因此，您可以在其构造函数中声明频道所需的任何依赖关系。</p></blockquote><p><a name="broadcasting-events"></a></p><h2 id="广播事件" tabindex="-1"><a class="header-anchor" href="#广播事件" aria-hidden="true">#</a> 广播事件</h2><p>一旦您定义了一个事件并使用 <code>ShouldBroadcast</code> 接口标记了它，您只需要使用事件的 <code>dispatch</code> 方法来触发事件。事件调度程序会注意到该事件已标记为 <code>ShouldBroadcast</code> 接口，并将该事件排队进行广播：</p><pre><code>use App\\Events\\OrderShipmentStatusUpdated;

OrderShipmentStatusUpdated::dispatch($order);
</code></pre><p><a name="only-to-others"></a></p><h3 id="只发给其他人" tabindex="-1"><a class="header-anchor" href="#只发给其他人" aria-hidden="true">#</a> 只发给其他人</h3><p>在构建使用事件广播的应用程序时，您可能需要将事件广播给给定频道的所有订阅者，除了当前用户。您可以使用 <code>broadcast</code> 帮助器和 <code>toOthers</code> 方法来实现：</p><pre><code>use App\\Events\\OrderShipmentStatusUpdated;

broadcast(new OrderShipmentStatusUpdated($update))-&gt;toOthers();
</code></pre><p>为了更好地理解何时需要使用<code>toOthers</code>方法，让我们想象一个任务列表应用程序，用户可以通过输入任务名称来创建新任务。为了创建任务，您的应用程序可能会向<code>/task</code> URL发出请求，该请求广播任务的创建并返回新任务的JSON表示。当JavaScript应用程序从端点接收到响应时，它可能会直接将新任务插入到其任务列表中，如下所示：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>axios<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string">&#39;/task&#39;</span><span class="token punctuation">,</span> task<span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">response</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>tasks<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然而，请记住，我们也会广播任务的创建。如果JavaScript应用程序也在监听此事件以便将任务添加到任务列表中，那么您的列表中将有重复的任务：一个来自端点，一个来自广播。您可以使用<code>toOthers</code>方法来解决这个问题，指示广播器不要向当前用户广播事件。</p><blockquote><p><strong>警告</strong> 您的事件必须使用<code>Illuminate\\Broadcasting\\InteractsWithSockets</code>特性才能调用<code>toOthers</code>方法。</p></blockquote><p><a name="only-to-others-configuration"></a></p><h4 id="配置-1" tabindex="-1"><a class="header-anchor" href="#配置-1" aria-hidden="true">#</a> 配置</h4>`,57),sn={href:"https://github.com/mzabriskie/axios",target:"_blank",rel:"noopener noreferrer"},en=a("code",null,"X-Socket-ID",-1),tn=a("code",null,"toOthers",-1),on=t(`<p>如果您没有使用全局的 Axios 实例，您需要手动配置 JavaScript 应用程序，以在所有传出请求中发送 <code>X-Socket-ID</code> 标头。您可以使用 <code>Echo.socketId</code> 方法检索 socket ID：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> socketId <span class="token operator">=</span> Echo<span class="token punctuation">.</span><span class="token function">socketId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a name="customizing-the-connection"></a></p><h3 id="定制连接" tabindex="-1"><a class="header-anchor" href="#定制连接" aria-hidden="true">#</a> 定制连接</h3><p>如果您的应用程序与多个广播连接交互，并且您想使用除默认之外的广播器广播事件，则可以使用 <code>via</code> 方法指定要将事件推送到哪个连接：</p><pre><code>use App\\Events\\OrderShipmentStatusUpdated;

broadcast(new OrderShipmentStatusUpdated($update))-&gt;via(&#39;pusher&#39;);
</code></pre><p>或者，您可以在事件的构造函数中调用 <code>broadcastVia</code> 方法指定事件的广播连接。不过，在这样做之前，您应该确保事件类使用了 <code>InteractsWithBroadcasting</code> trait：</p><pre><code>&lt;?php

namespace App\\Events;

use Illuminate\\Broadcasting\\Channel;
use Illuminate\\Broadcasting\\InteractsWithBroadcasting;
use Illuminate\\Broadcasting\\InteractsWithSockets;
use Illuminate\\Broadcasting\\PresenceChannel;
use Illuminate\\Broadcasting\\PrivateChannel;
use Illuminate\\Contracts\\Broadcasting\\ShouldBroadcast;
use Illuminate\\Queue\\SerializesModels;

class OrderShipmentStatusUpdated implements ShouldBroadcast
{
    use InteractsWithBroadcasting;

    /**
     * 创建一个新的事件实例。
     */
    public function __construct()
    {
        $this-&gt;broadcastVia(&#39;pusher&#39;);
    }
}
</code></pre><p><a name="receiving-broadcasts"></a></p><h2 id="接收广播" tabindex="-1"><a class="header-anchor" href="#接收广播" aria-hidden="true">#</a> 接收广播</h2><p><a name="listening-for-events"></a></p><h3 id="监听事件" tabindex="-1"><a class="header-anchor" href="#监听事件" aria-hidden="true">#</a> 监听事件</h3><p>一旦您 <a href="#client-side-installation">安装并实例化了 Laravel Echo</a>，您就可以开始监听从 Laravel 应用程序广播的事件。首先使用 <code>channel</code> 方法检索通道实例，然后调用 <code>listen</code> 方法来监听指定的事件：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>Echo<span class="token punctuation">.</span><span class="token function">channel</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">orders.</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>order<span class="token punctuation">.</span>id<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token string">&#39;OrderShipmentStatusUpdated&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>order<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如需在私有频道上监听事件，请改用<code>private</code>方法。您可以继续链式调用<code>listen</code>方法以侦听单个频道上的多个事件：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>Echo<span class="token punctuation">.</span><span class="token function">private</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">orders.</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>order<span class="token punctuation">.</span>id<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token comment">/* ... */</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token comment">/* ... */</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token comment">/* ... */</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="stop-listening-for-events"></a></p><h4 id="停止监听事件" tabindex="-1"><a class="header-anchor" href="#停止监听事件" aria-hidden="true">#</a> 停止监听事件</h4><p>如果您想停止侦听给定事件而不离开频道，可以使用<code>stopListening</code>方法：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>Echo<span class="token punctuation">.</span><span class="token function">private</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">orders.</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>order<span class="token punctuation">.</span>id<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">stopListening</span><span class="token punctuation">(</span><span class="token string">&#39;OrderShipmentStatusUpdated&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="leaving-a-channel"></a></p><h3 id="离开频道" tabindex="-1"><a class="header-anchor" href="#离开频道" aria-hidden="true">#</a> 离开频道</h3><p>要离开频道，请在Echo实例上调用<code>leaveChannel</code>方法：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>Echo<span class="token punctuation">.</span><span class="token function">leaveChannel</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">orders.</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>order<span class="token punctuation">.</span>id<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果您想离开频道以及其关联的私有和预​​sence频道，则可以调用<code>leave</code>方法：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>Echo<span class="token punctuation">.</span><span class="token function">leave</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">orders.</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>order<span class="token punctuation">.</span>id<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a name="namespaces"></a></p><h3 id="命名空间" tabindex="-1"><a class="header-anchor" href="#命名空间" aria-hidden="true">#</a> 命名空间</h3><p>您可能已经注意到在上面的示例中，我们没有指定事件类的完整<code>App\\Events</code>命名空间。这是因为Echo将自动假定事件位于<code>App\\Events</code>命名空间中。但是，您可以在实例化Echo时通过传递<code>namespace</code>配置选项来配置根命名空间：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>window<span class="token punctuation">.</span>Echo <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Echo</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">broadcaster</span><span class="token operator">:</span> <span class="token string">&#39;pusher&#39;</span><span class="token punctuation">,</span>
    <span class="token comment">// ...</span>
    <span class="token literal-property property">namespace</span><span class="token operator">:</span> <span class="token string">&#39;App.Other.Namespace&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>或者，您可以在使用Echo订阅时使用<code>。</code>前缀为事件类添加前缀。这将允许您始终指定完全限定的类名：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>Echo<span class="token punctuation">.</span><span class="token function">channel</span><span class="token punctuation">(</span><span class="token string">&#39;orders&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token string">&#39;.Namespace\\\\Event\\\\Class&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token comment">// ...</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="presence-channels"></a></p><h2 id="存在频道" tabindex="-1"><a class="header-anchor" href="#存在频道" aria-hidden="true">#</a> 存在频道</h2><p>存在频道基于私有频道的安全性，并公开了订阅频道用户的附加功能。这使得构建强大的协作应用程序功能变得容易，例如在另一个用户正在查看同一页面时通知用户，或者列出聊天室的用户。</p><p><a name="authorizing-presence-channels"></a></p><h3 id="授权存在频道" tabindex="-1"><a class="header-anchor" href="#授权存在频道" aria-hidden="true">#</a> 授权存在频道</h3><p>所有存在频道也都是私有频道，因此用户必须获得<a href="#authorizing-channels">访问权限</a>。但是，在为存在频道定义授权回调时，如果用户被授权加入该频道，您将不会返回<code>true</code>。相反，您应该返回有关用户的数据数组。</p><p>授权回调返回的数据将在JavaScript应用程序中的存在频道事件侦听器中可用。如果用户没有被授权加入存在频道，则应返回<code>false</code>或<code>null</code>：</p><pre><code>use App\\Models\\User;

Broadcast::channel(&#39;chat.{roomId}&#39;, function (User $user, int $roomId) {
    if ($user-&gt;canJoinRoom($roomId)) {
        return [&#39;id&#39; =&gt; $user-&gt;id, &#39;name&#39; =&gt; $user-&gt;name];
    }
});
</code></pre><p><a name="joining-presence-channels"></a></p><h3 id="加入存在频道" tabindex="-1"><a class="header-anchor" href="#加入存在频道" aria-hidden="true">#</a> 加入存在频道</h3><p>要加入存在频道，您可以使用Echo的<code>join</code>方法。<code>join</code>方法将返回一个<code>PresenceChannel</code>实现，除了公开<code>listen</code>方法外，还允许您订阅<code>here</code>，<code>joining</code>和<code>leaving</code>事件。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>Echo<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">chat.</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>roomId<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">here</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">users</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token comment">// ...</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">joining</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">user</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>user<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">leaving</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">user</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>user<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>成功加入频道后，<code>here</code>回调将立即执行，并接收一个包含所有当前订阅频道用户信息的数组。<code>joining</code>方法将在新用户加入频道时执行，而<code>leaving</code>方法将在用户离开频道时执行。当认证端点返回HTTP状态码200以外的代码或存在解析返回的JSON时，将执行<code>error</code>方法。</p><p><a name="broadcasting-to-presence-channels"></a></p><h3 id="向-presence-频道广播" tabindex="-1"><a class="header-anchor" href="#向-presence-频道广播" aria-hidden="true">#</a> 向 Presence 频道广播</h3><p>Presence 频道可以像公共频道或私有频道一样接收事件。以聊天室为例，我们可能希望将 <code>NewMessage</code> 事件广播到聊天室的 Presence 频道中。为此，我们将从事件的 <code>broadcastOn</code> 方法返回一个 <code>PresenceChannel</code> 实例：</p><pre><code>/**
 * Get the channels the event should broadcast on.
 *
 * @return array&lt;int, \\Illuminate\\Broadcasting\\Channel&gt;
 */
public function broadcastOn(): array
{
    return [
        new PresenceChannel(&#39;room.&#39;.$this-&gt;message-&gt;room_id),
    ];
}
</code></pre><p>与其他事件一样，您可以使用 <code>broadcast</code> 助手和 <code>toOthers</code> 方法来排除当前用户接收广播：</p><pre><code>broadcast(new NewMessage($message));

broadcast(new NewMessage($message))-&gt;toOthers();
</code></pre><p>与其他类型的事件一样，您可以使用 Echo 的 <code>listen</code> 方法来监听发送到 Presence 频道的事件：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>Echo<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">chat.</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>roomId<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">here</span><span class="token punctuation">(</span><span class="token comment">/* ... */</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">joining</span><span class="token punctuation">(</span><span class="token comment">/* ... */</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">leaving</span><span class="token punctuation">(</span><span class="token comment">/* ... */</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token string">&#39;NewMessage&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token comment">// ...</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="model-broadcasting"></a></p><h2 id="模型广播" tabindex="-1"><a class="header-anchor" href="#模型广播" aria-hidden="true">#</a> 模型广播</h2><blockquote><p><strong>警告</strong> 在阅读有关模型广播的以下文档之前，我们建议您熟悉 Laravel 模型广播服务的一般概念以及如何手动创建和监听广播事件。</p></blockquote><p>当创建、更新或删除应用程序的<a href="./eloquent">Eloquent 模型</a>时，通常会广播事件。当然，这可以通过手动<a href="./eloquent#events">定义用于 Eloquent 模型状态更改的自定义事件</a>并将这些事件标记为 <code>ShouldBroadcast</code> 接口来轻松完成。</p><p>但是，如果您没有在应用程序中使用这些事件进行任何其他用途，则为仅广播它们的目的创建事件类可能会很麻烦。为解决这个问题，Laravel 允许您指示一个 Eloquent 模型应自动广播其状态更改。</p><p>开始之前，你的Eloquent模型应该使用<code>Illuminate\\Database\\Eloquent\\BroadcastsEvents</code> trait。此外，模型应该定义一个<code>broadcastOn</code>方法，该方法将返回一个数组，该数组包含模型事件应该广播到的频道：</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>

<span class="token keyword">namespace</span> <span class="token package">App<span class="token punctuation">\\</span>Models</span><span class="token punctuation">;</span>

<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Broadcasting<span class="token punctuation">\\</span>Channel</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Broadcasting<span class="token punctuation">\\</span>PrivateChannel</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Database<span class="token punctuation">\\</span>Eloquent<span class="token punctuation">\\</span>BroadcastsEvents</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Database<span class="token punctuation">\\</span>Eloquent<span class="token punctuation">\\</span>Factories<span class="token punctuation">\\</span>HasFactory</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Database<span class="token punctuation">\\</span>Eloquent<span class="token punctuation">\\</span>Model</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Database<span class="token punctuation">\\</span>Eloquent<span class="token punctuation">\\</span>Relations<span class="token punctuation">\\</span>BelongsTo</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">Post</span> <span class="token keyword">extends</span> <span class="token class-name">Model</span>
<span class="token punctuation">{</span>
    <span class="token keyword">use</span> <span class="token package">BroadcastsEvents</span><span class="token punctuation">,</span> HasFactory<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 获取发帖用户
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">user</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token class-name return-type">BelongsTo</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">belongsTo</span><span class="token punctuation">(</span><span class="token class-name static-context">User</span><span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 获取模型事件应该广播到的频道
     *
     * <span class="token keyword">@return</span> <span class="token class-name"><span class="token keyword">array</span></span>&lt;int, \\Illuminate\\Broadcasting\\Channel|\\Illuminate\\Database\\Eloquent\\Model&gt;
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">broadcastOn</span><span class="token punctuation">(</span><span class="token keyword type-hint">string</span> <span class="token variable">$event</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">array</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token variable">$this</span><span class="token punctuation">,</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">user</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>一旦你的模型包含了这个trait并定义了它的广播频道，当模型实例被创建、更新、删除、移到回收站或还原时，它将自动开始广播事件。</p><p>另外，你可能已经注意到<code>broadcastOn</code>方法接收一个字符串<code>$event</code>参数。这个参数包含了在模型上发生的事件类型，将具有<code>created</code>、<code>updated</code>、<code>deleted</code>、<code>trashed</code>或<code>restored</code>的值。通过检查这个变量的值，你可以确定模型在特定事件上应该广播到哪些频道（如果有）：</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token doc-comment comment">/**
 * 获取模型事件应该广播到的频道
 *
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token keyword">array</span></span>&lt;string, array&lt;int, \\Illuminate\\Broadcasting\\Channel|\\Illuminate\\Database\\Eloquent\\Model&gt;&gt;
 */</span>
<span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">broadcastOn</span><span class="token punctuation">(</span><span class="token keyword type-hint">string</span> <span class="token variable">$event</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">array</span>
<span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">match</span> <span class="token punctuation">(</span><span class="token variable">$event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token string single-quoted-string">&#39;deleted&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token keyword">default</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span><span class="token variable">$this</span><span class="token punctuation">,</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">user</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="customizing-model-broadcasting-event-creation"></a></p><h4 id="自定义模型广播事件创建" tabindex="-1"><a class="header-anchor" href="#自定义模型广播事件创建" aria-hidden="true">#</a> 自定义模型广播事件创建</h4><p>有时候，您可能希望自定义 Laravel 创建底层模型广播事件的方式。您可以通过在您的 Eloquent 模型上定义一个 <code>newBroadcastableEvent</code> 方法来实现。这个方法应该返回一个 <code>Illuminate\\Database\\Eloquent\\BroadcastableModelEventOccurred</code> 实例：</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Database<span class="token punctuation">\\</span>Eloquent<span class="token punctuation">\\</span>BroadcastableModelEventOccurred</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * 为模型创建一个新的可广播模型事件。
 */</span>
<span class="token keyword">protected</span> <span class="token keyword">function</span> <span class="token function-definition function">newBroadcastableEvent</span><span class="token punctuation">(</span><span class="token keyword type-hint">string</span> <span class="token variable">$event</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token class-name return-type">BroadcastableModelEventOccurred</span>
<span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">BroadcastableModelEventOccurred</span><span class="token punctuation">(</span>
        <span class="token variable">$this</span><span class="token punctuation">,</span> <span class="token variable">$event</span>
    <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">dontBroadcastToCurrentUser</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="model-broadcasting-conventions"></a></p><h3 id="模型广播约定" tabindex="-1"><a class="header-anchor" href="#模型广播约定" aria-hidden="true">#</a> 模型广播约定</h3><p><a name="model-broadcasting-channel-conventions"></a></p><h4 id="频道约定" tabindex="-1"><a class="header-anchor" href="#频道约定" aria-hidden="true">#</a> 频道约定</h4><p>您可能已经注意到，在上面的模型示例中，<code>broadcastOn</code> 方法没有返回 <code>Channel</code> 实例。相反，它直接返回了 Eloquent 模型。如果您的模型的 <code>broadcastOn</code> 方法返回了 Eloquent 模型实例（或者包含在方法返回的数组中），Laravel 将自动使用模型的类名和主键标识符作为频道名称为模型实例实例化一个私有频道实例。</p><p>因此，<code>App\\Models\\User</code> 模型的 <code>id</code> 为 <code>1</code> 将被转换为一个名称为 <code>App.Models.User.1</code> 的 <code>Illuminate\\Broadcasting\\PrivateChannel</code> 实例。当然，除了从模型的 <code>broadcastOn</code> 方法返回 Eloquent 模型实例之外，您还可以返回完整的 <code>Channel</code> 实例，以完全控制模型的频道名称：</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Broadcasting<span class="token punctuation">\\</span>PrivateChannel</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * 获取模型事件应该广播到的频道。
 *
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token keyword">array</span></span>&lt;int, \\Illuminate\\Broadcasting\\Channel&gt;
 */</span>
<span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">broadcastOn</span><span class="token punctuation">(</span><span class="token keyword type-hint">string</span> <span class="token variable">$event</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">array</span>
<span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">[</span>
        <span class="token keyword">new</span> <span class="token class-name">PrivateChannel</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;user.&#39;</span><span class="token operator">.</span><span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">id</span><span class="token punctuation">)</span>
    <span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果您打算从模型的 <code>broadcastOn</code> 方法中明确返回一个频道实例，您可以将一个 Eloquent 模型实例传递给频道的构造函数。这样做时，Laravel 将使用上面讨论的模型频道约定将 Eloquent 模型转换为频道名称字符串：</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token keyword">new</span> <span class="token class-name">Channel</span><span class="token punctuation">(</span><span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">user</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果您需要确定模型的频道名称，可以在任何模型实例上调用<code>broadcastChannel</code>方法。例如，对于一个 <code>App\\Models\\User</code> 模型，它的 <code>id</code> 为 <code>1</code>，这个方法将返回字符串 <code>App.Models.User.1</code>：</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token variable">$user</span><span class="token operator">-&gt;</span><span class="token function">broadcastChannel</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a name="model-broadcasting-event-conventions"></a></p><h4 id="事件约定" tabindex="-1"><a class="header-anchor" href="#事件约定" aria-hidden="true">#</a> 事件约定</h4><p>由于模型广播事件与应用程序的 <code>App\\Events</code> 目录中的“实际”事件没有关联，它们会根据约定分配名称和负载。 Laravel 的约定是使用模型的类名（不包括命名空间）和触发广播的模型事件的名称来广播事件。</p><p>例如，对 <code>App\\Models\\Post</code> 模型进行更新会将事件广播到您的客户端应用程序中，名称为 <code>PostUpdated</code>，负载如下：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;model&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;My first post&quot;</span>
        ...
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    ...
    <span class="token property">&quot;socket&quot;</span><span class="token operator">:</span> <span class="token string">&quot;someSocketId&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>删除 <code>App\\Models\\User</code> 模型将广播名为 <code>UserDeleted</code> 的事件。</p><p>如果需要，您可以通过在模型中添加 <code>broadcastAs</code> 和 <code>broadcastWith</code> 方法来定义自定义广播名称和负载。这些方法接收正在发生的模型事件/操作的名称，允许您为每个模型操作自定义事件的名称和负载。如果从 <code>broadcastAs</code> 方法返回 <code>null</code>，则 Laravel 将在广播事件时使用上述讨论的模型广播事件名称约定：</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token doc-comment comment">/**
 * 模型事件的广播名称。
 */</span>
<span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">broadcastAs</span><span class="token punctuation">(</span><span class="token keyword type-hint">string</span> <span class="token variable">$event</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">string</span><span class="token operator">|</span><span class="token keyword type-declaration">null</span>
<span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">match</span> <span class="token punctuation">(</span><span class="token variable">$event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token string single-quoted-string">&#39;created&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;post.created&#39;</span><span class="token punctuation">,</span>
        <span class="token keyword">default</span> <span class="token operator">=&gt;</span> <span class="token constant">null</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * 获取要广播到模型的数据。
 *
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token keyword">array</span></span>&lt;string, mixed&gt;
 */</span>
<span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">broadcastWith</span><span class="token punctuation">(</span><span class="token keyword type-hint">string</span> <span class="token variable">$event</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">array</span>
<span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">match</span> <span class="token punctuation">(</span><span class="token variable">$event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token string single-quoted-string">&#39;created&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;title&#39;</span> <span class="token operator">=&gt;</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">title</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token keyword">default</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;model&#39;</span> <span class="token operator">=&gt;</span> <span class="token variable">$this</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="listening-for-model-broadcasts"></a></p><h3 id="监听模型广播" tabindex="-1"><a class="header-anchor" href="#监听模型广播" aria-hidden="true">#</a> 监听模型广播</h3><p>一旦您将<code>BroadcastsEvents</code> trait添加到您的模型中并定义了模型的<code>broadcastOn</code>方法，您就可以开始在客户端应用程序中监听广播的模型事件。在开始之前，您可能希望查阅完整的<a href="#listening-for-events">事件监听文档</a>。</p><p>首先，使用<code>private</code>方法获取一个通道实例，然后调用<code>listen</code>方法来监听指定的事件。通常，传递给<code>private</code>方法的通道名称应该对应于Laravel的<a href="#model-broadcasting-conventions">模型广播规则</a>。</p><p>获取通道实例后，您可以使用<code>listen</code>方法来监听特定事件。由于模型广播事件与应用程序的<code>App\\Events</code>目录中的&quot;实际&quot;事件不相关联，因此必须在事件名称前加上<code>.</code>以表示它不属于特定的命名空间。每个模型广播事件都有一个<code>model</code>属性，其中包含模型的所有可广播属性：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>Echo<span class="token punctuation">.</span><span class="token function">private</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">App.Models.User.</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>user<span class="token punctuation">.</span>id<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token string">&#39;.PostUpdated&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>model<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="client-events"></a></p><h2 id="客户端事件" tabindex="-1"><a class="header-anchor" href="#客户端事件" aria-hidden="true">#</a> 客户端事件</h2>`,94),pn=a("strong",null,"注意",-1),cn={href:"https://pusher.com/channels",target:"_blank",rel:"noopener noreferrer"},ln={href:"https://dashboard.pusher.com/",target:"_blank",rel:"noopener noreferrer"},rn=t(`<p>有时您可能希望将事件广播给其他连接的客户端，而根本不会触发您的Laravel应用程序。这对于诸如&quot;正在输入&quot;通知非常有用，其中您希望向应用程序的用户通知另一个用户正在给定屏幕上输入消息。</p><p>要广播客户端事件，你可以使用 Echo 的 <code>whisper</code> 方法：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>Echo<span class="token punctuation">.</span><span class="token function">private</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">chat.</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>roomId<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">whisper</span><span class="token punctuation">(</span><span class="token string">&#39;typing&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>user<span class="token punctuation">.</span>name
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>要监听客户端事件，你可以使用 <code>listenForWhisper</code> 方法：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>Echo<span class="token punctuation">.</span><span class="token function">private</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">chat.</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>roomId<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">listenForWhisper</span><span class="token punctuation">(</span><span class="token string">&#39;typing&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="notifications"></a></p><h2 id="通知" tabindex="-1"><a class="header-anchor" href="#通知" aria-hidden="true">#</a> 通知</h2><p>通过将事件广播与 <a href="./notifications">notifications</a> 配对，你的 JavaScript 应用程序可以在新通知发生时接收它们，而无需刷新页面。在开始之前，请务必阅读有关使用 <a href="./notifications#broadcast-notifications">广播通知频道</a> 的文档。</p><p>一旦你配置了一个使用广播频道的通知，你就可以使用 Echo 的 <code>notification</code> 方法来监听广播事件。请记住，通道名称应与接收通知的实体的类名称匹配：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>Echo<span class="token punctuation">.</span><span class="token function">private</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">App.Models.User.</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>userId<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">notification</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">notification</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>notification<span class="token punctuation">.</span>type<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个例子中，所有通过 <code>broadcast</code> 通道发送到 <code>App\\Models\\User</code> 实例的通知都会被回调接收。 <code>App.Models.User.{id}</code> 频道的频道授权回调包含在 Laravel 框架附带的默认<code> BroadcastServiceProvider</code> 中。</p>`,11);function dn(un,kn){const s=p("ExternalLinkIcon");return c(),i("div",null,[r,a("p",null,[n("默认情况下，Laravel为你提供了两个服务端广播驱动程序可供选择："),a("a",d,[n("Pusher Channels"),e(s)]),n(" 和 "),a("a",u,[n("Ably"),e(s)]),n("。但是，社区驱动的包，如 "),a("a",k,[n("laravel-websockets"),e(s)]),n(" 和 "),a("a",h,[n("soketi"),e(s)]),n(" 提供了不需要商业广播提供者的其他广播驱动程序。")]),v,a("p",null,[n("所有应用程序的事件广播配置都存储在"),m,n("配置文件中。Laravel支持多个广播驱动程序："),a("a",b,[n("Pusher Channels"),e(s)]),n("、"),g,n("和用于本地开发和调试的"),f,n("驱动程序。此外，还包括一个"),y,n("驱动程序，它允许你在测试期间完全禁用广播。"),_,n("配置文件中包含每个驱动程序的配置示例。")]),w,a("p",null,[n("如果您计划使用"),a("a",E,[n("Pusher Channels"),e(s)]),n("广播您的事件，您应该使用 Composer 包管理器安装 Pusher Channels PHP SDK：")]),S,a("p",null,[a("a",x,[n("laravel-websockets"),e(s)]),n("和"),a("a",P,[n("soketi"),e(s)]),n("软件包提供了适用于Laravel的Pusher兼容的WebSocket服务器。这些软件包允许您利用Laravel广播的全部功能，而无需商业WebSocket提供程序。有关安装和使用这些软件包的更多信息，请参阅我们的"),I,n("。")]),B,j,a("blockquote",null,[a("p",null,[A,n(" 下面的文档介绍了如何在“Pusher兼容”模式下使用Ably。然而，Ably团队推荐并维护一个广播器和Echo客户端，能够利用Ably提供的独特功能。有关使用Ably维护的驱动程序的更多信息，请"),a("a",C,[n("参阅Ably的Laravel广播器文档"),e(s)]),n("。")])]),a("p",null,[n("如果您计划使用"),a("a",q,[n("Ably"),e(s)]),n("广播您的事件，则应使用Composer软件包管理器安装Ably PHP SDK：")]),$,a("p",null,[a("a",L,[n("laravel-websockets"),e(s)]),n(" 是一个纯 PHP 的，与 Pusher 兼容的 Laravel WebSocket 包。该包允许您充分利用 Laravel 广播的功能，而无需商业 WebSocket 提供商。有关安装和使用此包的更多信息，请参阅其"),a("a",O,[n("官方文档"),e(s)]),n("。")]),U,M,a("p",null,[a("a",D,[n("Soketi"),e(s)]),n(" 是一个基于 Node 的，与 Pusher 兼容的 Laravel WebSocket 服务器。在幕后，Soketi 利用 µWebSockets.js 来实现极端的可扩展性和速度。该包允许您充分利用 Laravel 广播的功能，而无需商业 WebSocket 提供商。有关安装和使用此包的更多信息，请参阅其"),a("a",z,[n("官方文档"),e(s)]),n("。")]),T,a("p",null,[a("a",W,[n("Laravel Echo"),e(s)]),n(" 是一个 JavaScript 库，可以轻松订阅通道并监听由服务器端广播驱动程序广播的事件。您可以通过 NPM 包管理器安装 Echo。在此示例中，我们还将安装 "),J,n(" 包，因为我们将使用 Pusher Channels 广播器：")]),R,a("blockquote",null,[a("p",null,[H,n(" 下面的文档讨论如何在“Pusher 兼容性”模式下使用 Ably。但是，Ably 团队推荐和维护了一个广播器和 Echo 客户端，可以利用 Ably 提供的独特功能。有关使用由 Ably 维护的驱动程序的更多信息，请"),a("a",N,[n("查看 Ably 的 Laravel 广播器文档"),e(s)]),n("。")])]),a("p",null,[a("a",V,[n("Laravel Echo"),e(s)]),n(" 是一个 JavaScript 库，可以轻松订阅通道并侦听服务器端广播驱动程序广播的事件。您可以通过 NPM 包管理器安装 Echo。在本示例中，我们还将安装 "),Y,n(" 包。")]),K,a("p",null,[n("Laravel 的事件广播允许你使用基于驱动程序的 WebSocket 方法，将服务器端 Laravel 事件广播到客户端的 JavaScript 应用程序。目前，Laravel 附带了 "),a("a",Q,[n("Pusher Channels"),e(s)]),n(" 和 "),a("a",F,[n("Ably"),e(s)]),n(" 驱动程序。可以使用 "),X,n(" JavaScript 包轻松地在客户端消耗这些事件。")]),G,a("blockquote",null,[a("p",null,[Z,n(" 要了解更多有关解决这些问题的信息，请查阅有关"),a("a",nn,[n("队列作业和数据库事务"),e(s)]),n("的文档。")])]),an,a("p",null,[n("当您初始化一个Laravel Echo实例时，将为连接分配一个套接字ID。如果您正在使用全局的"),a("a",sn,[n("Axios"),e(s)]),n("实例从JavaScript应用程序发出HTTP请求，则套接字ID将自动附加到每个传出请求作为"),en,n("头。然后，当您调用"),tn,n("方法时，Laravel将从标头中提取套接字ID，并指示广播器不向具有该套接字ID的任何连接广播。")]),on,a("blockquote",null,[a("p",null,[pn,n(" 当使用"),a("a",cn,[n("Pusher Channels"),e(s)]),n("时，您必须在"),a("a",ln,[n("应用程序仪表板"),e(s)]),n('的"应用程序设置"部分中启用"客户端事件"选项，以便发送客户端事件。')])]),rn])}const mn=o(l,[["render",dn],["__file","broadcasting.html.vue"]]);export{mn as default};
