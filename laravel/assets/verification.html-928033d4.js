import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as i,c as t,a}from"./app-06635a3b.js";const n={},o=a(`<h1 id="email-verification" tabindex="-1"><a class="header-anchor" href="#email-verification" aria-hidden="true">#</a> Email Verification</h1><ul><li><a href="#introduction">Introduction</a><ul><li><a href="#model-preparation">Model Preparation</a></li><li><a href="#database-preparation">Database Preparation</a></li></ul></li><li><a href="#verification-routing">Routing</a><ul><li><a href="#the-email-verification-notice">The Email Verification Notice</a></li><li><a href="#the-email-verification-handler">The Email Verification Handler</a></li><li><a href="#resending-the-verification-email">Resending The Verification Email</a></li><li><a href="#protecting-routes">Protecting Routes</a></li></ul></li><li><a href="#customization">Customization</a></li><li><a href="#events">Events</a></li></ul><p><a name="introduction"></a></p><h2 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h2><p>Many web applications require users to verify their email addresses before using the application. Rather than forcing you to re-implement this feature by hand for each application you create, Laravel provides convenient built-in services for sending and verifying email verification requests.</p><blockquote><p><strong>Note</strong><br> Want to get started fast? Install one of the <a href="./starter-kits">Laravel application starter kits</a> in a fresh Laravel application. The starter kits will take care of scaffolding your entire authentication system, including email verification support.</p></blockquote><p><a name="model-preparation"></a></p><h3 id="model-preparation" tabindex="-1"><a class="header-anchor" href="#model-preparation" aria-hidden="true">#</a> Model Preparation</h3><p>Before getting started, verify that your <code>App\\Models\\User</code> model implements the <code>Illuminate\\Contracts\\Auth\\MustVerifyEmail</code> contract:</p><pre><code>&lt;?php

namespace App\\Models;

use Illuminate\\Contracts\\Auth\\MustVerifyEmail;
use Illuminate\\Foundation\\Auth\\User as Authenticatable;
use Illuminate\\Notifications\\Notifiable;

class User extends Authenticatable implements MustVerifyEmail
{
    use Notifiable;

    // ...
}
</code></pre><p>Once this interface has been added to your model, newly registered users will automatically be sent an email containing an email verification link. As you can see by examining your application&#39;s <code>App\\Providers\\EventServiceProvider</code>, Laravel already contains a <code>SendEmailVerificationNotification</code> <a href="./events">listener</a> that is attached to the <code>Illuminate\\Auth\\Events\\Registered</code> event. This event listener will send the email verification link to the user.</p><p>If you are manually implementing registration within your application instead of using <a href="./starter-kits">a starter kit</a>, you should ensure that you are dispatching the <code>Illuminate\\Auth\\Events\\Registered</code> event after a user&#39;s registration is successful:</p><pre><code>use Illuminate\\Auth\\Events\\Registered;

event(new Registered($user));
</code></pre><p><a name="database-preparation"></a></p><h3 id="database-preparation" tabindex="-1"><a class="header-anchor" href="#database-preparation" aria-hidden="true">#</a> Database Preparation</h3><p>Next, your <code>users</code> table must contain an <code>email_verified_at</code> column to store the date and time that the user&#39;s email address was verified. By default, the <code>users</code> table migration included with the Laravel framework already includes this column. So, all you need to do is run your database migrations:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan migrate
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a name="verification-routing"></a></p><h2 id="routing" tabindex="-1"><a class="header-anchor" href="#routing" aria-hidden="true">#</a> Routing</h2><p>To properly implement email verification, three routes will need to be defined. First, a route will be needed to display a notice to the user that they should click the email verification link in the verification email that Laravel sent them after registration.</p><p>Second, a route will be needed to handle requests generated when the user clicks the email verification link in the email.</p><p>Third, a route will be needed to resend a verification link if the user accidentally loses the first verification link.</p><p><a name="the-email-verification-notice"></a></p><h3 id="the-email-verification-notice" tabindex="-1"><a class="header-anchor" href="#the-email-verification-notice" aria-hidden="true">#</a> The Email Verification Notice</h3><p>As mentioned previously, a route should be defined that will return a view instructing the user to click the email verification link that was emailed to them by Laravel after registration. This view will be displayed to users when they try to access other parts of the application without verifying their email address first. Remember, the link is automatically emailed to the user as long as your <code>App\\Models\\User</code> model implements the <code>MustVerifyEmail</code> interface:</p><pre><code>Route::get(&#39;/email/verify&#39;, function () {
    return view(&#39;auth.verify-email&#39;);
})-&gt;middleware(&#39;auth&#39;)-&gt;name(&#39;verification.notice&#39;);
</code></pre><p>The route that returns the email verification notice should be named <code>verification.notice</code>. It is important that the route is assigned this exact name since the <code>verified</code> middleware <a href="#protecting-routes">included with Laravel</a> will automatically redirect to this route name if a user has not verified their email address.</p><blockquote><p><strong>Note</strong><br> When manually implementing email verification, you are required to define the contents of the verification notice view yourself. If you would like scaffolding that includes all necessary authentication and verification views, check out the <a href="./starter-kits">Laravel application starter kits</a>.</p></blockquote><p><a name="the-email-verification-handler"></a></p><h3 id="the-email-verification-handler" tabindex="-1"><a class="header-anchor" href="#the-email-verification-handler" aria-hidden="true">#</a> The Email Verification Handler</h3><p>Next, we need to define a route that will handle requests generated when the user clicks the email verification link that was emailed to them. This route should be named <code>verification.verify</code> and be assigned the <code>auth</code> and <code>signed</code> middlewares:</p><pre><code>use Illuminate\\Foundation\\Auth\\EmailVerificationRequest;

Route::get(&#39;/email/verify/{id}/{hash}&#39;, function (EmailVerificationRequest $request) {
    $request-&gt;fulfill();

    return redirect(&#39;/home&#39;);
})-&gt;middleware([&#39;auth&#39;, &#39;signed&#39;])-&gt;name(&#39;verification.verify&#39;);
</code></pre><p>Before moving on, let&#39;s take a closer look at this route. First, you&#39;ll notice we are using an <code>EmailVerificationRequest</code> request type instead of the typical <code>Illuminate\\Http\\Request</code> instance. The <code>EmailVerificationRequest</code> is a <a href="./validation#form-request-validation">form request</a> that is included with Laravel. This request will automatically take care of validating the request&#39;s <code>id</code> and <code>hash</code> parameters.</p><p>Next, we can proceed directly to calling the <code>fulfill</code> method on the request. This method will call the <code>markEmailAsVerified</code> method on the authenticated user and dispatch the <code>Illuminate\\Auth\\Events\\Verified</code> event. The <code>markEmailAsVerified</code> method is available to the default <code>App\\Models\\User</code> model via the <code>Illuminate\\Foundation\\Auth\\User</code> base class. Once the user&#39;s email address has been verified, you may redirect them wherever you wish.</p><p><a name="resending-the-verification-email"></a></p><h3 id="resending-the-verification-email" tabindex="-1"><a class="header-anchor" href="#resending-the-verification-email" aria-hidden="true">#</a> Resending The Verification Email</h3><p>Sometimes a user may misplace or accidentally delete the email address verification email. To accommodate this, you may wish to define a route to allow the user to request that the verification email be resent. You may then make a request to this route by placing a simple form submission button within your <a href="#the-email-verification-notice">verification notice view</a>:</p><pre><code>use Illuminate\\Http\\Request;

Route::post(&#39;/email/verification-notification&#39;, function (Request $request) {
    $request-&gt;user()-&gt;sendEmailVerificationNotification();

    return back()-&gt;with(&#39;message&#39;, &#39;Verification link sent!&#39;);
})-&gt;middleware([&#39;auth&#39;, &#39;throttle:6,1&#39;])-&gt;name(&#39;verification.send&#39;);
</code></pre><p><a name="protecting-routes"></a></p><h3 id="protecting-routes" tabindex="-1"><a class="header-anchor" href="#protecting-routes" aria-hidden="true">#</a> Protecting Routes</h3><p><a href="./middleware">Route middleware</a> may be used to only allow verified users to access a given route. Laravel ships with a <code>verified</code> middleware alias, which is an alias for the <code>Illuminate\\Auth\\Middleware\\EnsureEmailIsVerified</code> class. Since this middleware is already registered in your application&#39;s HTTP kernel, all you need to do is attach the middleware to a route definition. Typically, this middleware is paired with the <code>auth</code> middleware:</p><pre><code>Route::get(&#39;/profile&#39;, function () {
    // Only verified users may access this route...
})-&gt;middleware([&#39;auth&#39;, &#39;verified&#39;]);
</code></pre><p>If an unverified user attempts to access a route that has been assigned this middleware, they will automatically be redirected to the <code>verification.notice</code> <a href="./routing#named-routes">named route</a>.</p><p><a name="customization"></a></p><h2 id="customization" tabindex="-1"><a class="header-anchor" href="#customization" aria-hidden="true">#</a> Customization</h2><p><a name="verification-email-customization"></a></p><h4 id="verification-email-customization" tabindex="-1"><a class="header-anchor" href="#verification-email-customization" aria-hidden="true">#</a> Verification Email Customization</h4><p>Although the default email verification notification should satisfy the requirements of most applications, Laravel allows you to customize how the email verification mail message is constructed.</p><p>To get started, pass a closure to the <code>toMailUsing</code> method provided by the <code>Illuminate\\Auth\\Notifications\\VerifyEmail</code> notification. The closure will receive the notifiable model instance that is receiving the notification as well as the signed email verification URL that the user must visit to verify their email address. The closure should return an instance of <code>Illuminate\\Notifications\\Messages\\MailMessage</code>. Typically, you should call the <code>toMailUsing</code> method from the <code>boot</code> method of your application&#39;s <code>App\\Providers\\AuthServiceProvider</code> class:</p><pre><code>use Illuminate\\Auth\\Notifications\\VerifyEmail;
use Illuminate\\Notifications\\Messages\\MailMessage;

/**
 * Register any authentication / authorization services.
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
</code></pre><blockquote><p><strong>Note</strong><br> To learn more about mail notifications, please consult the <a href="./notifications#mail-notifications">mail notification documentation</a>.</p></blockquote><p><a name="events"></a></p><h2 id="events" tabindex="-1"><a class="header-anchor" href="#events" aria-hidden="true">#</a> Events</h2><p>When using the <a href="./starter-kits">Laravel application starter kits</a>, Laravel dispatches <a href="./events">events</a> during the email verification process. If you are manually handling email verification for your application, you may wish to manually dispatch these events after verification is completed. You may attach listeners to these events in your application&#39;s <code>EventServiceProvider</code>:</p><pre><code>use App\\Listeners\\LogVerifiedUser;
use Illuminate\\Auth\\Events\\Verified;

/**
 * The event listener mappings for the application.
 *
 * @var array
 */
protected $listen = [
    Verified::class =&gt; [
        LogVerifiedUser::class,
    ],
];
</code></pre>`,55),r=[o];function s(l,d){return i(),t("div",null,r)}const u=e(n,[["render",s],["__file","verification.html.vue"]]);export{u as default};
