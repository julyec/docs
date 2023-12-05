import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as i,a as t}from"./app-8cdff07c.js";const n={},r=t(`<h1 id="email-认证" tabindex="-1"><a class="header-anchor" href="#email-认证" aria-hidden="true">#</a> Email 认证</h1><ul><li><a href="#introduction">简介</a><ul><li><a href="#model-preparation">准备模型</a></li><li><a href="#database-preparation">准备数据库</a></li></ul></li><li><a href="#verification-routing">路由</a><ul><li><a href="#the-email-verification-notice">Email 认证通知</a></li><li><a href="#the-email-verification-handler">Email 认证处理</a></li><li><a href="#resending-the-verification-email">重新发送 Email 认证</a></li><li><a href="#protecting-routes">保护路由</a></li></ul></li><li><a href="#customization">自定义</a></li><li><a href="#events">事件</a></li></ul><p><a name="introduction"></a></p><h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h2><p>很多 Web 应用会要求用户在使用之前进行 Email 地址验证。Laravel 不会强迫你在每个应用中重复实现它，而是提供了便捷的方法来发送和校验电子邮件的验证请求。</p><blockquote><p><strong>技巧</strong> 想快速上手吗？你可以在全新的应用中安装 <a href="./starter-kits">Laravel 应用入门套件</a> 。入门套件将帮助你搭建整个身份验证系统，包括电子邮件验证支持。</p></blockquote><p><a name="model-preparation"></a></p><h3 id="准备模型" tabindex="-1"><a class="header-anchor" href="#准备模型" aria-hidden="true">#</a> 准备模型</h3><p>在开始之前，需要检查你的 <code>App\\Models\\User</code> 模型是否实现了 <code>Illuminate\\Contracts\\Auth\\MustVerifyEmail</code> 契约：</p><pre><code>&lt;?php

namespace App\\Models;

use Illuminate\\Contracts\\Auth\\MustVerifyEmail;
use Illuminate\\Foundation\\Auth\\User as Authenticatable;
use Illuminate\\Notifications\\Notifiable;

class User extends Authenticatable implements MustVerifyEmail
{
    use Notifiable;

    // ...
}
</code></pre><p>一旦这一接口被添加到模型中，新注册的用户将自动收到一封包含电子邮件验证链接的电子邮件。检查你的 <code>App\\Providers\\EventServiceProvider</code> 可以看到，Laravel 已经为 <code>Illuminate\\Auth\\Events\\Registered</code> 事件注册了一个 <code>SendEmailVerificationNotification</code> <a href="./events">监听器</a> 。这个事件监听器会通过邮件发送验证链接给用户。 如果在应用中你没有使用 <a href="./starter-kits">入门套件</a> 而是手动实现的注册，你需要确保在用户注册成功后手动分发 <code>Illuminate\\Auth\\Events\\Registered</code> 事件：</p><pre><code>use Illuminate\\Auth\\Events\\Registered;

event(new Registered($user));
</code></pre><p><a name="database-preparation"></a></p><h3 id="数据库准备" tabindex="-1"><a class="header-anchor" href="#数据库准备" aria-hidden="true">#</a> 数据库准备</h3><p>接下来，你的 <code>users</code> 表必须有一个 <code>email_verified_at</code> 字段，用来存储用户邮箱验证的日期和时间。Laravel 框架自带的 <code>users</code> 表以及默认包含了该字段。因此，你只需运行数据库迁移即可：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan migrate
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a name="verification-routing"></a></p><h2 id="路由" tabindex="-1"><a class="header-anchor" href="#路由" aria-hidden="true">#</a> 路由</h2><p>为了实现完整的电子邮件验证流程，你将需要定义三个路由。首先，需要定义一个路由向用户显示通知，告诉用户应该点击注册之后， Laravel 向他们发送的验证邮件中的链接。</p><p>其次，需要一个路由来处理用户点击邮件中验证链接时发来的请求。</p><p>第三，如果用户没有收到验证邮件，则需要一路由来重新发送验证邮件。</p><p><a name="the-email-verification-notice"></a></p><h3 id="邮箱验证通知" tabindex="-1"><a class="header-anchor" href="#邮箱验证通知" aria-hidden="true">#</a> 邮箱验证通知</h3><p>如上所述，应该定义一条路由，该路由将返回一个视图，引导用户点击注册后 Laravel 发送给他们邮件中的验证链接。当用户尝试访问网站的其它页面而没有先完成邮箱验证时，将向用户显示此视图。请注意，只要您的 <code>App\\Models\\User</code> 模型实现了 <code>MustVerifyEmail</code> 接口，就会自动将该链接发邮件给用户：</p><pre><code>Route::get(&#39;/email/verify&#39;, function () {
    return view(&#39;auth.verify-email&#39;);
})-&gt;middleware(&#39;auth&#39;)-&gt;name(&#39;verification.notice&#39;);
</code></pre><p>显示邮箱验证的路由，应该命名为 <code>verification.notice</code>。配置这个命名路由很重要，因为如果用户邮箱验证未通过，Laravel 自带的<a href="#protecting-routes"><code>verified</code> 中间件</a> 将会自动重定向到该命名路由上。</p><blockquote><p><strong>注意</strong><br> 手动实现邮箱验证过程时，你需要自己定义验证通知视图。如果你希望包含所有必要的身份验证和验证视图，请查看 <a href="./starter-kits">Laravel 应用入门套件</a></p></blockquote><p><a name="the-email-verification-handler"></a></p><h3 id="email-认证处理" tabindex="-1"><a class="header-anchor" href="#email-认证处理" aria-hidden="true">#</a> Email 认证处理</h3><p>接下来，我们需要定义一个路由，该路由将处理当用户点击验证链接时发送的请求。该路由应命名为 <code>verification.verify</code> ，并添加了 <code>auth</code> 和 <code>signed</code> 中间件</p><pre><code>use Illuminate\\Foundation\\Auth\\EmailVerificationRequest;

Route::get(&#39;/email/verify/{id}/{hash}&#39;, function (EmailVerificationRequest $request) {
    $request-&gt;fulfill();

    return redirect(&#39;/home&#39;);
})-&gt;middleware([&#39;auth&#39;, &#39;signed&#39;])-&gt;name(&#39;verification.verify&#39;);
</code></pre><p>在继续之前，让我们仔细看一下这个路由。首先，您会注意到我们使用的是 <code>EmailVerificationRequest</code> 请求类型，而不是通常的 <code>Illuminate\\Http\\Request</code> 实例。 <code>EmailVerificationRequest</code> 是 Laravel 中包含的 <a href="./validation#form-request-validation">表单请求</a>。此请求将自动处理验证请求的 id 和 hash 参数。</p><p>接下来，我们可以直接在请求上调用 <code>fulfill</code> 方法。该方法将在经过身份验证的用户上调用 <code>markEmailAsVerified</code> 方法，并会触发 <code>Illuminate\\Auth\\Events\\Verified</code> 事件。通过 <code>Illuminate\\Foundation\\Auth\\User</code> 基类，<code>markEmailAsVerified</code> 方法可用于默认的 <code>App\\Models\\User</code> 模型。验证用户的电子邮件地址后，您可以将其重定向到任意位置。</p><p><a name="resending-the-verification-email"></a></p><h3 id="重新发送-email-认证邮件" tabindex="-1"><a class="header-anchor" href="#重新发送-email-认证邮件" aria-hidden="true">#</a> 重新发送 Email 认证邮件</h3><p>有时候，用户可能输错了电子邮件地址或者不小心删除了验证邮件。为了解决这种问题，您可能会想定义一个路由实现用户重新发送验证邮件。您可以通过在 <a href="#the-email-verification-notice">验证通知视图</a> 中放置一个简单的表单来实现此功能。</p><pre><code>use Illuminate\\Http\\Request;

Route::post(&#39;/email/verification-notification&#39;, function (Request $request) {
    $request-&gt;user()-&gt;sendEmailVerificationNotification();

    return back()-&gt;with(&#39;message&#39;, &#39;Verification link sent!&#39;);
})-&gt;middleware([&#39;auth&#39;, &#39;throttle:6,1&#39;])-&gt;name(&#39;verification.send&#39;);
</code></pre><p><a name="protecting-routes"></a></p><h3 id="保护路由" tabindex="-1"><a class="header-anchor" href="#保护路由" aria-hidden="true">#</a> 保护路由</h3><p><a href="./middleware">路由中间件</a>可用于仅允许经过验证的用户访问给定路由。Laravel 附带了一个 <code>verified</code> 中间件别名，它是 <code>Illuminate\\Auth\\Middleware\\EnsureEmailIsVerified</code> 类的别名。由于该中间件已经在你的应用程序的 HTTP 内核中注册，所以你只需要将中间件附加到路由定义即可。通常，此中间件与 <code>auth</code> 中间件配对使用。</p><pre><code>Route::get(&#39;/profile&#39;, function () {
    // 仅经过验证的用户可以访问此路由。。。
})-&gt;middleware([&#39;auth&#39;, &#39;verified&#39;]);
</code></pre><p>如果未经验证的用户尝试访问已被分配了此中间件的路由，他们将自动重定向到<code>verification.notice</code> <a href="./routing#named-routes">命名路由</a>。</p><p><a name="customization"></a></p><h2 id="自定义" tabindex="-1"><a class="header-anchor" href="#自定义" aria-hidden="true">#</a> 自定义</h2><p><a name="verification-email-customization"></a></p><h4 id="验证邮件自定义" tabindex="-1"><a class="header-anchor" href="#验证邮件自定义" aria-hidden="true">#</a> 验证邮件自定义</h4><p>虽然默认的电子邮件验证通知应该能够满足大多数应用程序的要求，但 Laravel 允许你自定义如何构建电子邮件验证邮件消息。</p><p>要开始自定义邮件验证消息，你需要将一个闭包传递给 <code>Illuminate\\Auth\\Notifications\\VerifyEmail</code> 通知提供的 <code>toMailUsing</code> 方法。该闭包将接收到通知的可通知模型实例以及用户必须访问以验证其电子邮件地址的已签名电子邮件验证 URL。该闭包应返回 <code>Illuminate\\Notifications\\Messages\\MailMessage</code> 的实例。通常，你应该从应用程序的 <code>App\\Providers\\AuthServiceProvider</code> 类的 <code>boot</code> 方法中调用 <code>toMailUsing</code> 方法：</p><pre><code>use Illuminate\\Auth\\Notifications\\VerifyEmail;
use Illuminate\\Notifications\\Messages\\MailMessage;

/**
 * 注册任何身份验证/授权服务。
 */
public function boot(): void
{
    // ...

    VerifyEmail::toMailUsing(function (object $notifiable, string $url) {
        return (new MailMessage)
            -&gt;subject(&#39;Verify Email Address&#39;)
            -&gt;line(&#39;Click the button below to verify your email address.&#39;)
            -&gt;action(&#39;Verify Email Address&#39;, $url);
    });
}
</code></pre><blockquote><p>技巧：要了解更多有关邮件通知的信息，请参阅 <a href="./notifications#mail-notifications"> 邮件通知文档</a>。</p></blockquote><p><a name="events"></a></p><h2 id="事件" tabindex="-1"><a class="header-anchor" href="#事件" aria-hidden="true">#</a> 事件</h2><p>如果你是使用 <a href="./starter-kits">Laravel 应用入门套件</a> 的话，Laravel 在电子邮件验证通过后会派发 <a href="./events">事件</a> 。如果你想接收到这个事件并进行手动处理的话，你应该在 <code>EventServiceProvider</code> 中注册监听器：</p><pre><code>use App\\Listeners\\LogVerifiedUser;
use Illuminate\\Auth\\Events\\Verified;

/**
 * 应用的事件监听器
 *
 * @var array
 */
protected $listen = [
    Verified::class =&gt; [
        LogVerifiedUser::class,
    ],
];
</code></pre>`,54),o=[r];function d(c,l){return a(),i("div",null,o)}const u=e(n,[["render",d],["__file","verification.html.vue"]]);export{u as default};
