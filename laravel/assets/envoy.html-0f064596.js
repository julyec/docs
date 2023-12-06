import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{r,o as l,c as o,b as a,d as e,e as n,a as i}from"./app-06635a3b.js";const c={},t=i('<h1 id="envoy-部署工具" tabindex="-1"><a class="header-anchor" href="#envoy-部署工具" aria-hidden="true">#</a> Envoy 部署工具</h1><ul><li><a href="#introduction">简介</a></li><li><a href="#installation">安装</a></li><li><a href="#writing-tasks">编写任务</a><ul><li><a href="#defining-tasks">定义任务</a></li><li><a href="#multiple-servers">多服务器</a></li><li><a href="#setup">配置</a></li><li><a href="#variables">变量</a></li><li><a href="#stories">脚本故事</a></li><li><a href="#completion-hooks">任务钩子</a></li></ul></li><li><a href="#running-tasks">运行任务</a><ul><li><a href="#confirming-task-execution">任务确认</a></li></ul></li><li><a href="#notifications">消息通知</a><ul><li><a href="#slack">Slack</a></li><li><a href="#discord">Discord</a></li><li><a href="#telegram">Telegram</a></li><li><a href="#microsoft-teams">Microsoft Teams</a></li></ul></li></ul><p><a name="introduction"></a></p><h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h2>',4),v={href:"https://github.com/laravel/envoy",target:"_blank",rel:"noopener noreferrer"},u=a("a",{href:"./blade"},"Blade",-1),h={href:"https://docs.microsoft.com/en-us/windows/wsl/install-win10",target:"_blank",rel:"noopener noreferrer"},b=i(`<p><a name="installation"></a></p><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><p>首先，运行 Composer 将 Envoy 安装到你的项目中：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">composer</span> require laravel/envoy <span class="token parameter variable">--dev</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>安装 Envoy 之后， Envoy 的可执行文件将出现在项目的 <code>vendor/bin</code> 目录下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php vendor/bin/envoy
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a name="writing-tasks"></a></p><h2 id="编写任务" tabindex="-1"><a class="header-anchor" href="#编写任务" aria-hidden="true">#</a> 编写任务</h2><p><a name="defining-tasks"></a></p><h3 id="定义任务" tabindex="-1"><a class="header-anchor" href="#定义任务" aria-hidden="true">#</a> 定义任务</h3><p>任务是 Envoy 的基础构建元素。任务定义了你想在远程服务器上当任务被调用时所执行的 Shell 命令。例如，你定义了一个任务：在队列服务器上执行 <code>php artisan queue:restart</code> 命令。</p><p>你所有的 Envoy 任务都应该在项目根目录中的 <code>Envoy.blade.php</code> 文件中定义。下面是一个帮助你入门的例子：</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>@servers([&#39;web&#39; =&gt; [&#39;user@192.168.1.1&#39;], &#39;workers&#39; =&gt; [&#39;user@192.168.1.2&#39;]])

@task(&#39;restart-queues&#39;, [&#39;on&#39; =&gt; &#39;workers&#39;])
    cd /home/user/example.com
    php artisan queue:restart
@endtask
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>正如你所见，在文件顶部定义了一个 <code>@servers</code> 数组，使你可以通过任务声明的 <code>on</code> 选项引用这些服务器。<code>@servers</code> 声明应始终放置在单行中。在你的 <code>@task</code> 声明中，你应该放置任务被调用执行时你期望在服务器上运行的 Shell 命令。</p><p><a name="local-tasks"></a></p><h4 id="本地任务" tabindex="-1"><a class="header-anchor" href="#本地任务" aria-hidden="true">#</a> 本地任务</h4><p>你可以通过将服务器的 IP 地址指定为 <code>127.0.0.1</code> 来强制脚本在本地运行：</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>@servers([&#39;localhost&#39; =&gt; &#39;127.0.0.1&#39;])
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a name="importing-envoy-tasks"></a></p><h4 id="导入-envoy-任务" tabindex="-1"><a class="header-anchor" href="#导入-envoy-任务" aria-hidden="true">#</a> 导入 Envoy 任务</h4><p>使用 <code>@import</code> 指令，你可以从其他的 Envoy 文件导入它们的故事与任务并添加到你的文件中。导入文件后，你可以像定义在自己的 Envoy 文件中一样执行其中包含的任务：</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>@import(&#39;vendor/package/Envoy.blade.php&#39;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a name="multiple-servers"></a></p><h3 id="多服务器" tabindex="-1"><a class="header-anchor" href="#多服务器" aria-hidden="true">#</a> 多服务器</h3><p>Envoy 允许你轻松地在多台服务器上运行任务。 首先，在  <code>@servers</code> 声明中添加其他服务器。每台服务器都应分配一个唯一的名称。一旦定义了其他服务器，你可以在任务的 <code>on</code> 数组中列出每个服务器：</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>@servers([&#39;web-1&#39; =&gt; &#39;192.168.1.1&#39;, &#39;web-2&#39; =&gt; &#39;192.168.1.2&#39;])

@task(&#39;deploy&#39;, [&#39;on&#39; =&gt; [&#39;web-1&#39;, &#39;web-2&#39;]])
    cd /home/user/example.com
    git pull origin {{ $branch }}
    php artisan migrate --force
@endtask
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="parallel-execution"></a></p><h4 id="并行执行" tabindex="-1"><a class="header-anchor" href="#并行执行" aria-hidden="true">#</a> 并行执行</h4><p>默认情况下，任务将在每个服务器上串行执行。 换句话说，任务将在第一台服务器上完成运行后，再继续在第二台服务器上执行。如果你想在多个服务器上并行运行任务，请在任务声明中添加 <code>parallel</code> 选项：</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>@servers([&#39;web-1&#39; =&gt; &#39;192.168.1.1&#39;, &#39;web-2&#39; =&gt; &#39;192.168.1.2&#39;])

@task(&#39;deploy&#39;, [&#39;on&#39; =&gt; [&#39;web-1&#39;, &#39;web-2&#39;], &#39;parallel&#39; =&gt; true])
    cd /home/user/example.com
    git pull origin {{ $branch }}
    php artisan migrate --force
@endtask
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如你所见，文件顶部定义了一个 <code>@server</code> 数组，允许你在任务声明的 <code>on</code> 选项中引用这些服务器。<code>@server</code> 声明应始终放在一行中。在你的 <code>@task</code> 声明中，你应该放置任务被调用执行时你期望在服务器上运行的 Shell 命令。</p><p><a name="local-tasks"></a></p><h4 id="本地任务-1" tabindex="-1"><a class="header-anchor" href="#本地任务-1" aria-hidden="true">#</a> 本地任务</h4><p>你可以通过将服务器的 IP 地址指定为 <code>127.0.0.1</code> 来强制脚本在本地运行：</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>@servers([&#39;localhost&#39; =&gt; &#39;127.0.0.1&#39;])
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a name="importing-envoy-tasks"></a></p><h4 id="导入-envoy-任务-1" tabindex="-1"><a class="header-anchor" href="#导入-envoy-任务-1" aria-hidden="true">#</a> 导入 Envoy 任务</h4><p>使用 <code>@import</code> 指令，你可以从其他的 Envoy 文件导入它们的故事与任务并添加到你的文件中。文件导入后，你可以执行他们所定义的任务，就像这些任务是在你的 Envoy 文件中被定义的一样：</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>@import(&#39;vendor/package/Envoy.blade.php&#39;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a name="setup"></a></p><h3 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h3><p>有时，你可能需要在执行 Envoy 任务之前执行一些 PHP 代码。你可以使用 <code>@setup</code> 指令来定义一段 PHP 代码块，在任务执行之前执行这段代码：</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>@<span class="token class-name type-declaration">setup</span>
    <span class="token variable">$now</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DateTime</span><span class="token punctuation">;</span>
@endsetup
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果你需要在任务执行之前引入其他的 PHP 文件，你可以在 <code>Envoy.blade.php</code> 文件的顶部使用 <code>@include</code> 指令：</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>@include(&#39;vendor/autoload.php&#39;)

@task(&#39;restart-queues&#39;)
    # ...
@endtask
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="variables"></a></p><h3 id="变量" tabindex="-1"><a class="header-anchor" href="#变量" aria-hidden="true">#</a> 变量</h3><p>如果需要的话，你可以在调用 Envoy 任务时通过在命令行中指定参数，将参数传递给 Envoy 任务：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php vendor/bin/envoy run deploy <span class="token parameter variable">--branch</span><span class="token operator">=</span>master
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>你可以使用 Blade 的「echo」语法访问传入任务中的命令行参数。你也可以在任务中使用 <code>if</code> 语句和循环。 例如，在执行 <code>git pull</code> 命令之前，我们先验证 <code>$branch</code> 变量是否存在：</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>@servers([&#39;web&#39; =&gt; [&#39;user@192.168.1.1&#39;]])

@task(&#39;deploy&#39;, [&#39;on&#39; =&gt; &#39;web&#39;])
    cd /home/user/example.com

    @if ($branch)
        git pull origin {{ $branch }}
    @endif

    php artisan migrate --force
@endtask
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="stories"></a></p><h3 id="故事" tabindex="-1"><a class="header-anchor" href="#故事" aria-hidden="true">#</a> 故事</h3><p>通过「故事」功能，你可以给一组任务起个名字，以便后续调用。例如，一个 <code>deploy</code> 故事可以运行 <code>update-code</code> 和 <code>install-dependencies</code> 等定义好的任务：</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>@servers([&#39;web&#39; =&gt; [&#39;user@192.168.1.1&#39;]])

@story(&#39;deploy&#39;)
    update-code
    install-dependencies
@endstory

@task(&#39;update-code&#39;)
    cd /home/user/example.com
    git pull origin master
@endtask

@task(&#39;install-dependencies&#39;)
    cd /home/user/example.com
    composer install
@endtask
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>一旦编写好了故事，你可以像调用任务一样调用它：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php vendor/bin/envoy run deploy
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a name="completion-hooks"></a></p><h3 id="任务钩子" tabindex="-1"><a class="header-anchor" href="#任务钩子" aria-hidden="true">#</a> 任务钩子</h3><p>当任务和故事脚本运行时，会执行很多钩子。Envoy 支持的钩子类型有<code>@before</code>, <code>@after</code>, <code>@error</code>, <code>@success</code>, and <code>@finished</code>。 这些钩子中的所有代码都被解释为 PHP 并在本地执行，而不是在你的任务与之交互的远程服务器上执行。</p><p>你可以根据需要定义任意数量的这些。这些钩子将按照它们在您的 Envoy 脚本中出现的顺序执行。</p><p><a name="hook-before"></a></p><h4 id="before" tabindex="-1"><a class="header-anchor" href="#before" aria-hidden="true">#</a> <code>@before</code></h4><p>在每个任务执行之前，Envoy 脚本中注册的所有 <code>@before</code> 钩子都会执行。 <code>@before</code> 钩子负责接收将要执行的任务的名称：</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>@before
    if ($task === &#39;deploy&#39;) {
        // ...
    }
@endbefore
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="completion-after"></a></p><h4 id="after" tabindex="-1"><a class="header-anchor" href="#after" aria-hidden="true">#</a> <code>@after</code></h4><p>每次任务执行后，Envoy 脚本中注册的所有 <code>@after</code> 钩子都会执行。 <code>@after</code> 钩子负责接收已执行任务的名称：</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>@after
    if ($task === &#39;deploy&#39;) {
        // ...
    }
@endafter
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="completion-error"></a></p><h4 id="error" tabindex="-1"><a class="header-anchor" href="#error" aria-hidden="true">#</a> <code>@error</code></h4><p>在每次任务失败后（以大于 <code>0</code> 的状态码退出执行），Envoy 脚本中注册的所有 <code>@error</code> 钩子都将执行。 <code>@error</code> 钩子负责接收已执行任务的名称：</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>@error
    if ($task === &#39;deploy&#39;) {
        // ...
    }
@enderror
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="completion-success"></a></p><h4 id="success" tabindex="-1"><a class="header-anchor" href="#success" aria-hidden="true">#</a> <code>@success</code></h4><p>如果所有任务都已正确执行，则 Envoy 脚本中注册的所有 <code>@success</code> 钩子都将执行：</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>@success
    // ...
@endsuccess
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="completion-finished"></a></p><h4 id="finished" tabindex="-1"><a class="header-anchor" href="#finished" aria-hidden="true">#</a> <code>@finished</code></h4><p>在所有任务都执行完毕后（不管退出状态如何），所有的 <code>@finished</code> 钩子都会被执行。 <code>@finished</code> 钩子负责接收已完成任务的状态码，它可能是 <code>null</code> 或大于或等于 <code>0</code> 的 <code>integer</code>：</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>@finished
    if ($exitCode &gt; 0) {
        // There were errors in one of the tasks...
    }
@endfinished
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="completion-hooks"></a></p><h3 id="钩子" tabindex="-1"><a class="header-anchor" href="#钩子" aria-hidden="true">#</a> 钩子</h3><p>当任务和故事运行时，会执行许多钩子。 Envoy 支持的钩子类型有 <code>@before</code>、<code>@after</code>、<code>@error</code>、<code>@success</code> 和 <code>@finished</code>。这些钩子中的所有代码都被解释为 PHP 并在本地执行，而不是在与你的任务交互的远程服务器上执行。</p><p>你可以根据需要定义任意数量的钩子。 它们将按照它们在你的 Envoy 脚本中出现的顺序执行。</p><p><a name="hook-before"></a></p><h4 id="before-1" tabindex="-1"><a class="header-anchor" href="#before-1" aria-hidden="true">#</a> <code>@before</code></h4><p>在每个任务执行之前，将执行在你的 Envoy 脚本中注册的所有 <code>@before</code> 钩子。 <code>@before</code> 钩子接收将要执行的任务的名称：</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>@before
    if ($task === &#39;deploy&#39;) {
        // ...
    }
@endbefore
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="completion-after"></a></p><h4 id="after-1" tabindex="-1"><a class="header-anchor" href="#after-1" aria-hidden="true">#</a> <code>@after</code></h4><p>每次任务执行后，将执行在你的 Envoy 脚本中注册的所有 <code>@after</code> 钩子。 <code>@after</code> 钩子接收已执行任务的名称：</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>@after
    if ($task === &#39;deploy&#39;) {
        // ...
    }
@endafter
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="completion-error"></a></p><h4 id="error-1" tabindex="-1"><a class="header-anchor" href="#error-1" aria-hidden="true">#</a> <code>@error</code></h4><p>在每个任务失败后（退出时的状态大于 <code>0</code>），在你的 Envoy 脚本中注册的所有 <code>@error</code> 钩子都将执行。 <code>@error</code> 钩子接收已执行任务的名称：</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>@error
    if ($task === &#39;deploy&#39;) {
        // ...
    }
@enderror
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="completion-success"></a></p><h4 id="success-1" tabindex="-1"><a class="header-anchor" href="#success-1" aria-hidden="true">#</a> <code>@success</code></h4><p>如果所有任务都没有出现错误，那么在你的 Envoy 脚本中注册的所有 <code>@success</code> 钩子都将执行：</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>@success
    // ...
@endsuccess
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="completion-finished"></a></p><h4 id="finished-1" tabindex="-1"><a class="header-anchor" href="#finished-1" aria-hidden="true">#</a> <code>@finished</code></h4><p>在执行完所有任务后（无论退出状态如何），所有的 <code>@finished</code> 钩子都将被执行。 <code>@finished</code> 钩子接收已完成任务的状态代码，它可以是 <code>null</code> 或大于或等于 <code>0</code> 的 <code>integer</code>：</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>@finished
    if ($exitCode &gt; 0) {
        // There were errors in one of the tasks...
    }
@endfinished
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="running-tasks"></a></p><h2 id="运行任务" tabindex="-1"><a class="header-anchor" href="#运行任务" aria-hidden="true">#</a> 运行任务</h2><p>要运行在应用程序的 <code>Envoy.blade.php</code> 文件中定义的任务或 story，请执行 Envoy 的 <code>run</code> 命令，传递你想要执行的任务或 story 的名称。Envoy 将执行该任务，并在任务运行时显示来自远程服务器的输出：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php vendor/bin/envoy run deploy
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a name="confirming-task-execution"></a></p><h3 id="确认任务执行" tabindex="-1"><a class="header-anchor" href="#确认任务执行" aria-hidden="true">#</a> 确认任务执行</h3><p>如果你想在在服务器上运行给定任务之前进行确认，请将 <code>confirm</code> 指令添加到您的任务声明中。此选项特别适用于破坏性操作：</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>@task(&#39;deploy&#39;, [&#39;on&#39; =&gt; &#39;web&#39;, &#39;confirm&#39; =&gt; true])
    cd /home/user/example.com
    git pull origin {{ $branch }}
    php artisan migrate
@endtask
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="notifications"></a></p><h2 id="通知" tabindex="-1"><a class="header-anchor" href="#通知" aria-hidden="true">#</a> 通知</h2><p><a name="slack"></a></p><h3 id="slack" tabindex="-1"><a class="header-anchor" href="#slack" aria-hidden="true">#</a> Slack</h3>`,117),m={href:"https://slack.com/",target:"_blank",rel:"noopener noreferrer"},p=a("code",null,"@slack",-1),g=i(`<p>你应该将整个 webhook URL 作为传递给 <code>@slack</code> 指令的第一个参数。<code>@slack</code> 指令给出的第二个参数应该是频道名称 (<code>#channel</code>) 或用户名称 (<code>@user</code>)：</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>@finished
    @slack(&#39;webhook-url&#39;, &#39;#bots&#39;)
@endfinished
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>默认情况下，Envoy 通知将向通知频道发送一条消息，描述已执行的任务。但是，你可以通过将第三个参数传递给 <code>@slack</code> 指令来覆盖此消息，以自定义自己的消息：</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>@finished
    @slack(&#39;webhook-url&#39;, &#39;#bots&#39;, &#39;Hello, Slack.&#39;)
@endfinished
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="discord"></a></p><h3 id="discord" tabindex="-1"><a class="header-anchor" href="#discord" aria-hidden="true">#</a> Discord</h3>`,6),f={href:"https://discord.com/",target:"_blank",rel:"noopener noreferrer"},k=a("code",null,"@discord",-1),x=a("code",null,"@discord",-1),y=i(`<div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>@finished
    @discord(&#39;discord-webhook-url&#39;)
@endfinished
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="telegram"></a></p><h3 id="telegram" tabindex="-1"><a class="header-anchor" href="#telegram" aria-hidden="true">#</a> Telegram</h3>`,3),_={href:"https://telegram.org/",target:"_blank",rel:"noopener noreferrer"},E=a("code",null,"@telegram",-1),w={href:"https://t.me/botfather",target:"_blank",rel:"noopener noreferrer"},T={href:"https://t.me/username_to_id_bot",target:"_blank",rel:"noopener noreferrer"},$=a("code",null,"@telegram",-1),L=i(`<div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>@finished
    @telegram(&#39;bot-id&#39;,&#39;chat-id&#39;)
@endfinished
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="microsoft-teams"></a></p><h3 id="microsoft-teams" tabindex="-1"><a class="header-anchor" href="#microsoft-teams" aria-hidden="true">#</a> Microsoft Teams</h3>`,3),P={href:"https://www.microsoft.com/en-us/microsoft-teams",target:"_blank",rel:"noopener noreferrer"},I=a("code",null,"@microsoftTeams",-1),D={href:"https://docs.microsoft.com/en-us/microsoftteams/platform/webhooks-and-connectors/how-to/add-incoming-webhook",target:"_blank",rel:"noopener noreferrer"},S={href:"https://docs.microsoft.com/en-us/microsoftteams/platform/webhooks-and-connectors/how-to/connectors-using?tabs=cURL#example-of-connector-message",target:"_blank",rel:"noopener noreferrer"},W=a("code",null,"@microsoftTeams",-1),B=i(`<div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>@finished
    @microsoftTeams(&#39;webhook-url&#39;)
@endfinished
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function R(U,C){const d=r("ExternalLinkIcon");return l(),o("div",null,[t,a("p",null,[a("a",v,[e("Laravel Envoy"),n(d)]),e(" 是一套在远程服务器上执行日常任务的工具。 使用 "),u,e(" 风格语法，你可以轻松地配置部署任务、Artisan 命令的执行等。目前， Envoy 仅支持 Mac 和 Linux 操作系统。但是， Windows 上可以使用 "),a("a",h,[e("WSL2"),n(d)]),e(" 来实现支持。")]),b,a("p",null,[e("Envoy 支持在每次任务执行后向 "),a("a",m,[e("Slack"),n(d)]),e(" 发送通知。"),p,e(" 指令接受一个 Slack 钩子 URL 和一个频道/用户名称。您可以通过在 Slack 控制面板中创建 「Incoming WebHooks」 集成来检索您的 webhook URL。")]),g,a("p",null,[e("Envoy 还支持在每个任务执行后向 "),a("a",f,[e("Discord"),n(d)]),e(" 发送通知。"),k,e(" 指令接受一个 Discord Webhook URL 和一条消息。您可以在服务器设置中创建「Webhook」，并选择 Webhook 应该发布到哪个频道来检索 Webhook URL。您应该将整个 Webhook URL 传递到 "),x,e(" 指令中：")]),y,a("p",null,[e("Envoy 还支持在每个任务执行后向 "),a("a",_,[e("Telegram"),n(d)]),e(" 发送通知。"),E,e(" 指令接受一个 Telegram Bot ID 和一个 Chat ID。你可以使用 "),a("a",w,[e("BotFather"),n(d)]),e(" 创建一个新的机器人来检索Bot ID。你可以使用 "),a("a",T,[e("@username_to_id_bot"),n(d)]),e(" 检索有效的 Chat ID。你应该将整个Bot ID和Chat ID传递到 "),$,e(" 指令中：")]),L,a("p",null,[e("Envoy 还支持在每个任务执行后向 "),a("a",P,[e("Microsoft Teams"),n(d)]),e(" 发送通知。"),I,e(" 指令接受Teams Webhook（必填）、消息、主题颜色（成功、信息、警告、错误）和一组选项。你可以通过创建新的 "),a("a",D,[e("incoming webhook"),n(d)]),e(" 来检索Teams Webhook。Teams API 有许多其他属性可以自定义消息框，例如标题、摘要和部分。你可以在 "),a("a",S,[e("Microsoft Teams文档"),n(d)]),e(" 中找到更多信息。你应该将整个Webhook URL 传递到 "),W,e(" 指令中：")]),B])}const M=s(c,[["render",R],["__file","envoy.html.vue"]]);export{M as default};
