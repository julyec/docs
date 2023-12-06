import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as s,a as r}from"./app-06635a3b.js";const t={},o=r(`<h1 id="重置密码" tabindex="-1"><a class="header-anchor" href="#重置密码" aria-hidden="true">#</a> 重置密码</h1><ul><li><a href="#introduction">介绍</a></li><li><a href="#model-preparation">模型准备</a></li><li><a href="#database-preparation">数据库准备</a></li><li><a href="#configuring-trusted-hosts">配置可信主机</a></li><li><a href="#routing">路由</a></li><li><a href="#requesting-the-password-reset-link">请求密码重置链接</a></li><li><a href="#resetting-the-password">重置密码</a></li><li><a href="#deleting-expired-tokens">删除过期令牌</a></li><li><a href="#password-customization">自定义</a></li></ul><p><a name="introduction"></a></p><h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h2><p>大多数 Web 应用程序都提供了一种让用户重置密码的方法。Laravel 已经提供了便捷的服务来发送密码重置链接和安全重置密码，而不需要您为每个应用程序重新实现此功能。</p><blockquote><p><strong>注意</strong> 想要快速入门吗？在全新的 Laravel 应用程序中安装 Laravel <a href="./starter-kits">入门套件</a>。 Laravel 的起始包将为您的整个身份验证系统包括重置忘记的密码提供支持。</p></blockquote><p><a name="model-preparation"></a></p><h3 id="模型准备" tabindex="-1"><a class="header-anchor" href="#模型准备" aria-hidden="true">#</a> 模型准备</h3><p>在使用 Laravel 的密码重置功能之前，您的应用程序的 <code>App\\Models\\User</code> 模型必须使用 <code>Illuminate\\Notifications\\Notifiable</code> trait。通常，在新创建的 Laravel 应用程序的 <code>App\\Models\\User</code> 模型中默认引入了该 trait 。</p><p>接下来，验证您的 <code>App\\Models\\User</code> 模型是否实现了 <code>Illuminate\\Contracts\\Auth\\CanResetPassword</code> 契约。框架中包含的 <code>App\\Models\\User</code> 模型已经实现了该接口，并使用 <code>Illuminate\\Auth\\Passwords\\CanResetPassword</code> 特性来包括实现该接口所需的方法。</p><p><a name="database-preparation"></a></p><h3 id="数据库准备" tabindex="-1"><a class="header-anchor" href="#数据库准备" aria-hidden="true">#</a> 数据库准备</h3><p>必须创建一个表来存储您的应用程序的密码重置令牌。这个表的迁移被包含在默认的 Laravel 应用程序中，所以您只需要迁移您的数据库来创建这个表：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan migrate
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a name="configuring-trusted-hosts"></a></p><h3 id="配置受信任的主机" tabindex="-1"><a class="header-anchor" href="#配置受信任的主机" aria-hidden="true">#</a> 配置受信任的主机</h3><p>默认情况下，无论 HTTP 请求的 <code>Host</code> 头的内容是什么，Laravel 都会响应它收到的所有请求。此外，在 Web 请求期间生成应用程序的绝对 URL 时，将使用 <code>Host</code> 标头的值。</p><p>通常，您应该将 Web 服务器（例如 Nginx 或 Apache）配置为仅向您的应用程序发送与给定主机名匹配的请求。然而，如果你没有能力直接自定义你的 web 服务器并且需要指示 Laravel 只响应某些主机名，你可以通过为你的应用程序启用 <code>App\\Http\\Middleware\\TrustHosts</code> 中间件来实现。当您的应用程序提供密码重置功能时，这一点尤其重要.</p><p>要了解有关此中间件的更多信息，请参阅<a href="./requests#configuring-trusted-hosts"><code>TrustHosts</code> 中间件文档</a>。</p><p><a name="routing"></a></p><h2 id="路由" tabindex="-1"><a class="header-anchor" href="#路由" aria-hidden="true">#</a> 路由</h2><p>要正确实现支持允许用户重置其密码的功能，我们需要定义多个路由。首先，我们需要一对路由来处理允许用户通过其电子邮件地址请求密码重置链接。其次，一旦用户访问通过电子邮件发送给他们的密码重置链接并完成密码重置表单，我们将需要一对路由来处理实际重置密码。</p><p><a name="requesting-the-password-reset-link"></a></p><h3 id="请求密码重置链接" tabindex="-1"><a class="header-anchor" href="#请求密码重置链接" aria-hidden="true">#</a> 请求密码重置链接</h3><p><a name="the-password-reset-link-request-form"></a></p><h4 id="密码重置链接申请表" tabindex="-1"><a class="header-anchor" href="#密码重置链接申请表" aria-hidden="true">#</a> 密码重置链接申请表</h4><p>首先，我们将定义请求密码重置链接所需的路由。首先，我们将定义一个路由，该路由返回一个带有密码重置链接请求表单的视图：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Route::get(&#39;/forgot-password&#39;, function () {
    return view(&#39;auth.forgot-password&#39;);
})-&gt;middleware(&#39;guest&#39;)-&gt;name(&#39;password.request&#39;);

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此路由返回的视图应该有一个包含 <code>email</code> 字段的表单，该字段允许用户请求给定电子邮件地址的密码重置链接。</p><p><a name="password-reset-link-handling-the-form-submission"></a></p><h4 id="处理表单提交" tabindex="-1"><a class="header-anchor" href="#处理表单提交" aria-hidden="true">#</a> 处理表单提交</h4><p>接下来，我们将定义一个路由，该路由将从「忘记密码」视图处理表单提交请求。此路由将负责验证电子邮件地址并将密码重置请求发送给相应用户：</p><pre><code>use Illuminate\\Http\\Request;
use Illuminate\\Support\\Facades\\Password;

Route::post(&#39;/forgot-password&#39;, function (Request $request) {
    $request-&gt;validate([&#39;email&#39; =&gt; &#39;required|email&#39;]);

    $status = Password::sendResetLink(
        $request-&gt;only(&#39;email&#39;)
    );

    return $status === Password::RESET_LINK_SENT
                ? back()-&gt;with([&#39;status&#39; =&gt; __($status)])
                : back()-&gt;withErrors([&#39;email&#39; =&gt; __($status)]);
})-&gt;middleware(&#39;guest&#39;)-&gt;name(&#39;password.email&#39;);
</code></pre><p>在继续之前，让我们更详细地检查一下这条路由。首先，验证请求的 <code>email</code> 属性。接下来，我们将使用 Laravel 内置的 <code>Password</code> 门面向用户发送一个密码重置链接。密码代理将负责按给定字段（在本例中是电子邮件地址）检索用户，并通过 Laravel 的内置 <a href="./notifications">消息通知系统</a> 向用户发送密码重置链接。</p><p>该 <code>sendResetLink</code> 方法返回一个状态标识。可以使用 Laravel 的 <a href="./localization">本地化</a> 助手来转换此状态，以便向用户显示有关请求状态的用户友好提示。密码重置状态的转换由应用程序的 <code>lang/{lang}/passwords.php</code> 语言文件决定。状态 slug 的每个可能值的条目位于 <code>passwords</code> 语言文件中。</p><blockquote><p><strong>注意</strong> 默认情况下, Laravel应用程序的框架不包括 <code>lang</code> 目录. 如果你想定制Laravel的语言文件, 你可以通过 <code>lang:publish</code> Artisan命令发布.</p></blockquote><p>你可能想知道，Laravel 在调用 Password 门面的 sendResetLink 方法时，Laravel 怎么知道如何从应用程序数据库中检索用户记录。Laravel 密码代理利用身份验证系统的「用户提供者」来检索数据库记录。密码代理使用的用户提供程序是在 passwords 配置文件的 config/auth.php 配置数组中配置的。要了解有关编写自定义用户提供程序的更多信息，请参阅 <a href="./authentication#adding-custom-user-providers">身份验证文档</a>。</p><blockquote><p><strong>Note</strong><br> 技巧：当手动实现密码重置时，你需要自己定义视图和路由的内容。如果你想要包含所有必要的身份验证和验证逻辑的脚手架，请查看 <a href="./starter-kits">Laravel 应用程序入门工具包</a>。</p></blockquote><p><a name="resetting-the-password"></a></p><h3 id="重置密码-1" tabindex="-1"><a class="header-anchor" href="#重置密码-1" aria-hidden="true">#</a> 重置密码</h3><p><a name="the-password-reset-form"></a></p><h4 id="重置密码表单" tabindex="-1"><a class="header-anchor" href="#重置密码表单" aria-hidden="true">#</a> 重置密码表单</h4><p>接下来，我们将定义用户点击重置密码邮件中的链接，进行重置密码所需要的一些路由。第一步，先定义一个获取重置密码表单的路由。这个路由需要一个 <code>token</code> 来验证请求：</p><pre><code>Route::get(&#39;/reset-password/{token}&#39;, function (string $token) {
    return view(&#39;auth.reset-password&#39;, [&#39;token&#39; =&gt; $token]);
})-&gt;middleware(&#39;guest&#39;)-&gt;name(&#39;password.reset&#39;);
</code></pre><p>通过路由返回的视图应该显示一个含有 <code>email</code> 字段， <code>password</code> 字段，<code>password_confirmation</code> 字段和一个隐藏的值通过路由参数获取的 <code>token</code> 字段。</p><p><a name="password-reset-handling-the-form-submission"></a></p><h4 id="处理表单提交的数据" tabindex="-1"><a class="header-anchor" href="#处理表单提交的数据" aria-hidden="true">#</a> 处理表单提交的数据</h4><p>当然，我们需要定义一个路由来接受表单提交的数据。这个路由会检查传过来的参数并更新数据库中用户的密码：</p><pre><code>use App\\Models\\User;
use Illuminate\\Auth\\Events\\PasswordReset;
use Illuminate\\Http\\Request;
use Illuminate\\Support\\Facades\\Hash;
use Illuminate\\Support\\Facades\\Password;
use Illuminate\\Support\\Str;

Route::post(&#39;/reset-password&#39;, function (Request $request) {
    $request-&gt;validate([
        &#39;token&#39; =&gt; &#39;required&#39;,
        &#39;email&#39; =&gt; &#39;required|email&#39;,
        &#39;password&#39; =&gt; &#39;required|min:8|confirmed&#39;,
    ]);

    $status = Password::reset(
        $request-&gt;only(&#39;email&#39;, &#39;password&#39;, &#39;password_confirmation&#39;, &#39;token&#39;),
        function (User $user, string $password) {
            $user-&gt;forceFill([
                &#39;password&#39; =&gt; Hash::make($password)
            ])-&gt;setRememberToken(Str::random(60));

            $user-&gt;save();

            event(new PasswordReset($user));
        }
    );

    return $status === Password::PASSWORD_RESET
                ? redirect()-&gt;route(&#39;login&#39;)-&gt;with(&#39;status&#39;, __($status))
                : back()-&gt;withErrors([&#39;email&#39; =&gt; [__($status)]]);
})-&gt;middleware(&#39;guest&#39;)-&gt;name(&#39;password.update&#39;);
</code></pre><p>在继续之前，我们再详细地检查下这条路由。 首先，验证请求的 <code>token</code>，<code>email</code> 和 <code>password</code> 属性。 接下来，我们将使用 Laravel 的内置「密码代理」 (通过 <code>Password</code> facade) 来验证密码重置请求凭据。</p><p>如果提供给密码代理的令牌、电子邮件地址和密码有效，则将调用传递给 <code>reset</code> 方法的闭包。 在这个接收用户实例和纯文本密码的闭包中，我们可以更新数据库中用户的密码。</p><p>该 <code>reset</code> 方法返回一个「状态」标识。 此状态可以使用 Laravel 的 <a href="./localization">本地化</a> 助手来翻译此状态，以便向用户显示有关其请求状态的用户友好消息。密码重置状态的翻译由应用程序的 <code>lang/{lang}/passwords.php</code> 语言文件决定。状态段的每个可能值的条目位于 <code>passwords</code> 语言文件中。如果你的应用没有 <code>lang</code> 文件夹，你可以使用 <code>lang:publish</code> artisan命令来创建。</p><p>在继续之前，你可能想知道 Laravel 如何在调用 <code>Password</code> facade的 <code>reset</code> 方法时如何知道如何从应用程序的数据库中检索用户记录。Laravel 密码代理利用你的身份验证系统的「用户提供者」来检索数据库记录。密码代理使用的用户提供程序在配置文件的 <code>config/auth.php</code> 配置文件的 <code>passwords</code> 配置数组中配置。 要了解有关编写自定义用户提供程序的更多信息，请参阅 <a href="./authentication#adding-custom-user-providers">身份验证文档</a>。</p><p><a name="deleting-expired-tokens"></a></p><h2 id="删除过期令牌" tabindex="-1"><a class="header-anchor" href="#删除过期令牌" aria-hidden="true">#</a> 删除过期令牌</h2><p>已过期的密码重置令牌仍将存在于你的数据库中。然而，你可以使用 <code>auth:clear-resets</code> Artisan 命令轻松删除这些记录：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan auth:clear-resets
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果你想使该过程自动化，请考虑将命令添加到应用程序的 <a href="./scheduling">调度程序</a>：</p><pre><code>$schedule-&gt;command(&#39;auth:clear-resets&#39;)-&gt;everyFifteenMinutes();
</code></pre><p><a name="password-customization"></a></p><h2 id="自定义" tabindex="-1"><a class="header-anchor" href="#自定义" aria-hidden="true">#</a> 自定义</h2><p><a name="reset-link-customization"></a></p><h4 id="重置链接自定义" tabindex="-1"><a class="header-anchor" href="#重置链接自定义" aria-hidden="true">#</a> 重置链接自定义</h4><p>你可以使用 <code>ResetPassword</code> 通知类提供的 <code>createUrlUsing</code> 方法自定义密码重置链接 URL。 此方法接受一个闭包，该闭包接收正在接收通知的用户实例以及密码重置链接令牌。 通常，你应该从 <code>App\\Providers\\AuthServiceProvider</code> 服务提供者的 <code>boot</code> 方法中调用此方法：</p><pre><code>use App\\Models\\User;
use Illuminate\\Auth\\Notifications\\ResetPassword;

/**
 * 注册任何身份验证/授权服务
 */
public function boot(): void
{
    ResetPassword::createUrlUsing(function (User $user, string $token) {
        return &#39;https://example.com/reset-password?token=&#39;.$token;
    });
}
</code></pre><p><a name="reset-email-customization"></a></p><h4 id="重置邮件自定义" tabindex="-1"><a class="header-anchor" href="#重置邮件自定义" aria-hidden="true">#</a> 重置邮件自定义</h4><p>你可以轻松修改用于向用户发送密码重置链接的通知类。 首先，覆盖你的 <code>App\\Models\\User</code> 模型上的 <code>sendPasswordResetNotification</code> 方法。 在此方法中，你可以使用你自己创建的任何 <a href="./notifications">通知类</a> 发送通知。 密码重置 <code>$token</code> 是该方法收到的第一个参数。 你可以使用这个 <code>$token</code> 来构建你选择的密码重置 URL 并将你的通知发送给用户：</p><pre><code>use App\\Notifications\\ResetPasswordNotification;

/**
 * 发送密码重置通知给用户
 *
 * @param string $token
 */
public function sendPasswordResetNotification($token): void
{
    $url = &#39;https://example.com/reset-password?token=&#39;.$token;

    $this-&gt;notify(new ResetPasswordNotification($url));
}
</code></pre>`,69),d=[o];function n(i,c){return a(),s("div",null,d)}const u=e(t,[["render",n],["__file","passwords.html.vue"]]);export{u as default};
