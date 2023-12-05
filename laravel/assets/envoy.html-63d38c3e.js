import{_ as d}from"./plugin-vue_export-helper-c27b6911.js";import{r,o,c as t,b as a,d as e,e as s,a as i}from"./app-8cdff07c.js";const l={},c=i('<h1 id="laravel-envoy" tabindex="-1"><a class="header-anchor" href="#laravel-envoy" aria-hidden="true">#</a> Laravel Envoy</h1><ul><li><a href="#introduction">Introduction</a></li><li><a href="#installation">Installation</a></li><li><a href="#writing-tasks">Writing Tasks</a><ul><li><a href="#defining-tasks">Defining Tasks</a></li><li><a href="#multiple-servers">Multiple Servers</a></li><li><a href="#setup">Setup</a></li><li><a href="#variables">Variables</a></li><li><a href="#stories">Stories</a></li><li><a href="#completion-hooks">Hooks</a></li></ul></li><li><a href="#running-tasks">Running Tasks</a><ul><li><a href="#confirming-task-execution">Confirming Task Execution</a></li></ul></li><li><a href="#notifications">Notifications</a><ul><li><a href="#slack">Slack</a></li><li><a href="#discord">Discord</a></li><li><a href="#telegram">Telegram</a></li><li><a href="#microsoft-teams">Microsoft Teams</a></li></ul></li></ul><p><a name="introduction"></a></p><h2 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h2>',4),u={href:"https://github.com/laravel/envoy",target:"_blank",rel:"noopener noreferrer"},h=a("a",{href:"./blade"},"Blade",-1),v={href:"https://docs.microsoft.com/en-us/windows/wsl/install-win10",target:"_blank",rel:"noopener noreferrer"},m=i(`<p><a name="installation"></a></p><h2 id="installation" tabindex="-1"><a class="header-anchor" href="#installation" aria-hidden="true">#</a> Installation</h2><p>First, install Envoy into your project using the Composer package manager:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">composer</span> require laravel/envoy <span class="token parameter variable">--dev</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Once Envoy has been installed, the Envoy binary will be available in your application&#39;s <code>vendor/bin</code> directory:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php vendor/bin/envoy
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a name="writing-tasks"></a></p><h2 id="writing-tasks" tabindex="-1"><a class="header-anchor" href="#writing-tasks" aria-hidden="true">#</a> Writing Tasks</h2><p><a name="defining-tasks"></a></p><h3 id="defining-tasks" tabindex="-1"><a class="header-anchor" href="#defining-tasks" aria-hidden="true">#</a> Defining Tasks</h3><p>Tasks are the basic building block of Envoy. Tasks define the shell commands that should execute on your remote servers when the task is invoked. For example, you might define a task that executes the <code>php artisan queue:restart</code> command on all of your application&#39;s queue worker servers.</p><p>All of your Envoy tasks should be defined in an <code>Envoy.blade.php</code> file at the root of your application. Here&#39;s an example to get you started:</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>@servers([&#39;web&#39; =&gt; [&#39;user@192.168.1.1&#39;], &#39;workers&#39; =&gt; [&#39;user@192.168.1.2&#39;]])

@task(&#39;restart-queues&#39;, [&#39;on&#39; =&gt; &#39;workers&#39;])
    cd /home/user/example.com
    php artisan queue:restart
@endtask
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>As you can see, an array of <code>@servers</code> is defined at the top of the file, allowing you to reference these servers via the <code>on</code> option of your task declarations. The <code>@servers</code> declaration should always be placed on a single line. Within your <code>@task</code> declarations, you should place the shell commands that should execute on your servers when the task is invoked.</p><p><a name="local-tasks"></a></p><h4 id="local-tasks" tabindex="-1"><a class="header-anchor" href="#local-tasks" aria-hidden="true">#</a> Local Tasks</h4><p>You can force a script to run on your local computer by specifying the server&#39;s IP address as <code>127.0.0.1</code>:</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>@servers([&#39;localhost&#39; =&gt; &#39;127.0.0.1&#39;])
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a name="importing-envoy-tasks"></a></p><h4 id="importing-envoy-tasks" tabindex="-1"><a class="header-anchor" href="#importing-envoy-tasks" aria-hidden="true">#</a> Importing Envoy Tasks</h4><p>Using the <code>@import</code> directive, you may import other Envoy files so their stories and tasks are added to yours. After the files have been imported, you may execute the tasks they contain as if they were defined in your own Envoy file:</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>@import(&#39;vendor/package/Envoy.blade.php&#39;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a name="multiple-servers"></a></p><h3 id="multiple-servers" tabindex="-1"><a class="header-anchor" href="#multiple-servers" aria-hidden="true">#</a> Multiple Servers</h3><p>Envoy allows you to easily run a task across multiple servers. First, add additional servers to your <code>@servers</code> declaration. Each server should be assigned a unique name. Once you have defined your additional servers you may list each of the servers in the task&#39;s <code>on</code> array:</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>@servers([&#39;web-1&#39; =&gt; &#39;192.168.1.1&#39;, &#39;web-2&#39; =&gt; &#39;192.168.1.2&#39;])

@task(&#39;deploy&#39;, [&#39;on&#39; =&gt; [&#39;web-1&#39;, &#39;web-2&#39;]])
    cd /home/user/example.com
    git pull origin {{ $branch }}
    php artisan migrate --force
@endtask
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="parallel-execution"></a></p><h4 id="parallel-execution" tabindex="-1"><a class="header-anchor" href="#parallel-execution" aria-hidden="true">#</a> Parallel Execution</h4><p>By default, tasks will be executed on each server serially. In other words, a task will finish running on the first server before proceeding to execute on the second server. If you would like to run a task across multiple servers in parallel, add the <code>parallel</code> option to your task declaration:</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>@servers([&#39;web-1&#39; =&gt; &#39;192.168.1.1&#39;, &#39;web-2&#39; =&gt; &#39;192.168.1.2&#39;])

@task(&#39;deploy&#39;, [&#39;on&#39; =&gt; [&#39;web-1&#39;, &#39;web-2&#39;], &#39;parallel&#39; =&gt; true])
    cd /home/user/example.com
    git pull origin {{ $branch }}
    php artisan migrate --force
@endtask
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="setup"></a></p><h3 id="setup" tabindex="-1"><a class="header-anchor" href="#setup" aria-hidden="true">#</a> Setup</h3><p>Sometimes, you may need to execute arbitrary PHP code before running your Envoy tasks. You may use the <code>@setup</code> directive to define a block of PHP code that should execute before your tasks:</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>@<span class="token class-name type-declaration">setup</span>
    <span class="token variable">$now</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DateTime</span><span class="token punctuation">;</span>
@endsetup
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>If you need to require other PHP files before your task is executed, you may use the <code>@include</code> directive at the top of your <code>Envoy.blade.php</code> file:</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>@include(&#39;vendor/autoload.php&#39;)

@task(&#39;restart-queues&#39;)
    # ...
@endtask
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="variables"></a></p><h3 id="variables" tabindex="-1"><a class="header-anchor" href="#variables" aria-hidden="true">#</a> Variables</h3><p>If needed, you may pass arguments to Envoy tasks by specifying them on the command line when invoking Envoy:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php vendor/bin/envoy run deploy <span class="token parameter variable">--branch</span><span class="token operator">=</span>master
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>You may access the options within your tasks using Blade&#39;s &quot;echo&quot; syntax. You may also define Blade <code>if</code> statements and loops within your tasks. For example, let&#39;s verify the presence of the <code>$branch</code> variable before executing the <code>git pull</code> command:</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>@servers([&#39;web&#39; =&gt; [&#39;user@192.168.1.1&#39;]])

@task(&#39;deploy&#39;, [&#39;on&#39; =&gt; &#39;web&#39;])
    cd /home/user/example.com

    @if ($branch)
        git pull origin {{ $branch }}
    @endif

    php artisan migrate --force
@endtask
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="stories"></a></p><h3 id="stories" tabindex="-1"><a class="header-anchor" href="#stories" aria-hidden="true">#</a> Stories</h3><p>Stories group a set of tasks under a single, convenient name. For instance, a <code>deploy</code> story may run the <code>update-code</code> and <code>install-dependencies</code> tasks by listing the task names within its definition:</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>@servers([&#39;web&#39; =&gt; [&#39;user@192.168.1.1&#39;]])

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Once the story has been written, you may invoke it in the same way you would invoke a task:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php vendor/bin/envoy run deploy
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a name="completion-hooks"></a></p><h3 id="hooks" tabindex="-1"><a class="header-anchor" href="#hooks" aria-hidden="true">#</a> Hooks</h3><p>When tasks and stories run, a number of hooks are executed. The hook types supported by Envoy are <code>@before</code>, <code>@after</code>, <code>@error</code>, <code>@success</code>, and <code>@finished</code>. All of the code in these hooks is interpreted as PHP and executed locally, not on the remote servers that your tasks interact with.</p><p>You may define as many of each of these hooks as you like. They will be executed in the order that they appear in your Envoy script.</p><p><a name="hook-before"></a></p><h4 id="before" tabindex="-1"><a class="header-anchor" href="#before" aria-hidden="true">#</a> <code>@before</code></h4><p>Before each task execution, all of the <code>@before</code> hooks registered in your Envoy script will execute. The <code>@before</code> hooks receive the name of the task that will be executed:</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>@before
    if ($task === &#39;deploy&#39;) {
        // ...
    }
@endbefore
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="completion-after"></a></p><h4 id="after" tabindex="-1"><a class="header-anchor" href="#after" aria-hidden="true">#</a> <code>@after</code></h4><p>After each task execution, all of the <code>@after</code> hooks registered in your Envoy script will execute. The <code>@after</code> hooks receive the name of the task that was executed:</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>@after
    if ($task === &#39;deploy&#39;) {
        // ...
    }
@endafter
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="completion-error"></a></p><h4 id="error" tabindex="-1"><a class="header-anchor" href="#error" aria-hidden="true">#</a> <code>@error</code></h4><p>After every task failure (exits with a status code greater than <code>0</code>), all of the <code>@error</code> hooks registered in your Envoy script will execute. The <code>@error</code> hooks receive the name of the task that was executed:</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>@error
    if ($task === &#39;deploy&#39;) {
        // ...
    }
@enderror
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="completion-success"></a></p><h4 id="success" tabindex="-1"><a class="header-anchor" href="#success" aria-hidden="true">#</a> <code>@success</code></h4><p>If all tasks have executed without errors, all of the <code>@success</code> hooks registered in your Envoy script will execute:</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>@success
    // ...
@endsuccess
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="completion-finished"></a></p><h4 id="finished" tabindex="-1"><a class="header-anchor" href="#finished" aria-hidden="true">#</a> <code>@finished</code></h4><p>After all tasks have been executed (regardless of exit status), all of the <code>@finished</code> hooks will be executed. The <code>@finished</code> hooks receive the status code of the completed task, which may be <code>null</code> or an <code>integer</code> greater than or equal to <code>0</code>:</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>@finished
    if ($exitCode &gt; 0) {
        // There were errors in one of the tasks...
    }
@endfinished
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="running-tasks"></a></p><h2 id="running-tasks" tabindex="-1"><a class="header-anchor" href="#running-tasks" aria-hidden="true">#</a> Running Tasks</h2><p>To run a task or story that is defined in your application&#39;s <code>Envoy.blade.php</code> file, execute Envoy&#39;s <code>run</code> command, passing the name of the task or story you would like to execute. Envoy will execute the task and display the output from your remote servers as the task is running:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php vendor/bin/envoy run deploy
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a name="confirming-task-execution"></a></p><h3 id="confirming-task-execution" tabindex="-1"><a class="header-anchor" href="#confirming-task-execution" aria-hidden="true">#</a> Confirming Task Execution</h3><p>If you would like to be prompted for confirmation before running a given task on your servers, you should add the <code>confirm</code> directive to your task declaration. This option is particularly useful for destructive operations:</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>@task(&#39;deploy&#39;, [&#39;on&#39; =&gt; &#39;web&#39;, &#39;confirm&#39; =&gt; true])
    cd /home/user/example.com
    git pull origin {{ $branch }}
    php artisan migrate
@endtask
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="notifications"></a></p><h2 id="notifications" tabindex="-1"><a class="header-anchor" href="#notifications" aria-hidden="true">#</a> Notifications</h2><p><a name="slack"></a></p><h3 id="slack" tabindex="-1"><a class="header-anchor" href="#slack" aria-hidden="true">#</a> Slack</h3>`,84),p={href:"https://slack.com",target:"_blank",rel:"noopener noreferrer"},b=a("code",null,"@slack",-1),f=i(`<p>You should pass the entire webhook URL as the first argument given to the <code>@slack</code> directive. The second argument given to the <code>@slack</code> directive should be a channel name (<code>#channel</code>) or a user name (<code>@user</code>):</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>@finished
    @slack(&#39;webhook-url&#39;, &#39;#bots&#39;)
@endfinished
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>By default, Envoy notifications will send a message to the notification channel describing the task that was executed. However, you may overwrite this message with your own custom message by passing a third argument to the <code>@slack</code> directive:</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>@finished
    @slack(&#39;webhook-url&#39;, &#39;#bots&#39;, &#39;Hello, Slack.&#39;)
@endfinished
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="discord"></a></p><h3 id="discord" tabindex="-1"><a class="header-anchor" href="#discord" aria-hidden="true">#</a> Discord</h3>`,6),g={href:"https://discord.com",target:"_blank",rel:"noopener noreferrer"},k=a("code",null,"@discord",-1),y=a("code",null,"@discord",-1),x=i(`<div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>@finished
    @discord(&#39;discord-webhook-url&#39;)
@endfinished
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="telegram"></a></p><h3 id="telegram" tabindex="-1"><a class="header-anchor" href="#telegram" aria-hidden="true">#</a> Telegram</h3>`,3),w={href:"https://telegram.org",target:"_blank",rel:"noopener noreferrer"},_=a("code",null,"@telegram",-1),T={href:"https://t.me/botfather",target:"_blank",rel:"noopener noreferrer"},E={href:"https://t.me/username_to_id_bot",target:"_blank",rel:"noopener noreferrer"},I=a("code",null,"@telegram",-1),S=i(`<div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>@finished
    @telegram(&#39;bot-id&#39;,&#39;chat-id&#39;)
@endfinished
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="microsoft-teams"></a></p><h3 id="microsoft-teams" tabindex="-1"><a class="header-anchor" href="#microsoft-teams" aria-hidden="true">#</a> Microsoft Teams</h3>`,3),L={href:"https://www.microsoft.com/en-us/microsoft-teams",target:"_blank",rel:"noopener noreferrer"},Y=a("code",null,"@microsoftTeams",-1),B={href:"https://docs.microsoft.com/en-us/microsoftteams/platform/webhooks-and-connectors/how-to/add-incoming-webhook",target:"_blank",rel:"noopener noreferrer"},D={href:"https://docs.microsoft.com/en-us/microsoftteams/platform/webhooks-and-connectors/how-to/connectors-using?tabs=cURL#example-of-connector-message",target:"_blank",rel:"noopener noreferrer"},q=a("code",null,"@microsoftTeams",-1),W=i(`<div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>@finished
    @microsoftTeams(&#39;webhook-url&#39;)
@endfinished
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function H(P,$){const n=r("ExternalLinkIcon");return o(),t("div",null,[c,a("p",null,[a("a",u,[e("Laravel Envoy"),s(n)]),e(" is a tool for executing common tasks you run on your remote servers. Using "),h,e(" style syntax, you can easily setup tasks for deployment, Artisan commands, and more. Currently, Envoy only supports the Mac and Linux operating systems. However, Windows support is achievable using "),a("a",v,[e("WSL2"),s(n)]),e(".")]),m,a("p",null,[e("Envoy supports sending notifications to "),a("a",p,[e("Slack"),s(n)]),e(" after each task is executed. The "),b,e(' directive accepts a Slack hook URL and a channel / user name. You may retrieve your webhook URL by creating an "Incoming WebHooks" integration in your Slack control panel.')]),f,a("p",null,[e("Envoy also supports sending notifications to "),a("a",g,[e("Discord"),s(n)]),e(" after each task is executed. The "),k,e(' directive accepts a Discord hook URL and a message. You may retrieve your webhook URL by creating a "Webhook" in your Server Settings and choosing which channel the webhook should post to. You should pass the entire Webhook URL into the '),y,e(" directive:")]),x,a("p",null,[e("Envoy also supports sending notifications to "),a("a",w,[e("Telegram"),s(n)]),e(" after each task is executed. The "),_,e(" directive accepts a Telegram Bot ID and a Chat ID. You may retrieve your Bot ID by creating a new bot using "),a("a",T,[e("BotFather"),s(n)]),e(". You can retrieve a valid Chat ID using "),a("a",E,[e("@username_to_id_bot"),s(n)]),e(". You should pass the entire Bot ID and Chat ID into the "),I,e(" directive:")]),S,a("p",null,[e("Envoy also supports sending notifications to "),a("a",L,[e("Microsoft Teams"),s(n)]),e(" after each task is executed. The "),Y,e(" directive accepts a Teams Webhook (required), a message, theme color (success, info, warning, error), and an array of options. You may retrieve your Teams Webhook by creating a new "),a("a",B,[e("incoming webhook"),s(n)]),e(". The Teams API has many other attributes to customize your message box like title, summary, and sections. You can find more information on the "),a("a",D,[e("Microsoft Teams documentation"),s(n)]),e(". You should pass the entire Webhook URL into the "),q,e(" directive:")]),W])}const A=d(l,[["render",H],["__file","envoy.html.vue"]]);export{A as default};