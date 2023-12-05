import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{r,o as d,c as l,b as a,d as e,e as t,t as c,a as i}from"./app-8cdff07c.js";const u={},p=i('<h1 id="laravel-cashier-paddle" tabindex="-1"><a class="header-anchor" href="#laravel-cashier-paddle" aria-hidden="true">#</a> Laravel Cashier (Paddle)</h1><ul><li><a href="#introduction">Introduction</a></li><li><a href="#upgrading-cashier">Upgrading Cashier</a></li><li><a href="#installation">Installation</a><ul><li><a href="#paddle-sandbox">Paddle Sandbox</a></li><li><a href="#database-migrations">Database Migrations</a></li></ul></li><li><a href="#configuration">Configuration</a><ul><li><a href="#billable-model">Billable Model</a></li><li><a href="#api-keys">API Keys</a></li><li><a href="#paddle-js">Paddle JS</a></li><li><a href="#currency-configuration">Currency Configuration</a></li><li><a href="#overriding-default-models">Overriding Default Models</a></li></ul></li><li><a href="#core-concepts">Core Concepts</a><ul><li><a href="#pay-links">Pay Links</a></li><li><a href="#inline-checkout">Inline Checkout</a></li><li><a href="#user-identification">User Identification</a></li></ul></li><li><a href="#prices">Prices</a></li><li><a href="#customers">Customers</a><ul><li><a href="#customer-defaults">Customer Defaults</a></li></ul></li><li><a href="#subscriptions">Subscriptions</a><ul><li><a href="#creating-subscriptions">Creating Subscriptions</a></li><li><a href="#checking-subscription-status">Checking Subscription Status</a></li><li><a href="#subscription-single-charges">Subscription Single Charges</a></li><li><a href="#updating-payment-information">Updating Payment Information</a></li><li><a href="#changing-plans">Changing Plans</a></li><li><a href="#subscription-quantity">Subscription Quantity</a></li><li><a href="#subscription-modifiers">Subscription Modifiers</a></li><li><a href="#multiple-subscriptions">Multiple Subscriptions</a></li><li><a href="#pausing-subscriptions">Pausing Subscriptions</a></li><li><a href="#cancelling-subscriptions">Cancelling Subscriptions</a></li></ul></li><li><a href="#subscription-trials">Subscription Trials</a><ul><li><a href="#with-payment-method-up-front">With Payment Method Up Front</a></li><li><a href="#without-payment-method-up-front">Without Payment Method Up Front</a></li></ul></li><li><a href="#handling-paddle-webhooks">Handling Paddle Webhooks</a><ul><li><a href="#defining-webhook-event-handlers">Defining Webhook Event Handlers</a></li><li><a href="#verifying-webhook-signatures">Verifying Webhook Signatures</a></li></ul></li><li><a href="#single-charges">Single Charges</a><ul><li><a href="#simple-charge">Simple Charge</a></li><li><a href="#charging-products">Charging Products</a></li><li><a href="#refunding-orders">Refunding Orders</a></li></ul></li><li><a href="#receipts">Receipts</a><ul><li><a href="#past-and-upcoming-payments">Past &amp; Upcoming Payments</a></li></ul></li><li><a href="#handling-failed-payments">Handling Failed Payments</a></li><li><a href="#testing">Testing</a></li></ul><p><a name="introduction"></a></p><h2 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h2><blockquote><p><strong>Warning</strong> At this time, Cashier Paddle only supports Paddle Classic, which is not available to new Paddle customers unless you contact Paddle support.</p></blockquote>',5),h={href:"https://github.com/laravel/cashier-paddle",target:"_blank",rel:"noopener noreferrer"},m={href:"https://paddle.com",target:"_blank",rel:"noopener noreferrer"},g={href:"https://developer.paddle.com/guides",target:"_blank",rel:"noopener noreferrer"},b={href:"https://developer.paddle.com/api-reference",target:"_blank",rel:"noopener noreferrer"},y=a("p",null,[a("a",{name:"upgrading-cashier"})],-1),f=a("h2",{id:"upgrading-cashier",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#upgrading-cashier","aria-hidden":"true"},"#"),e(" Upgrading Cashier")],-1),v={href:"https://github.com/laravel/cashier-paddle/blob/master/UPGRADE.md",target:"_blank",rel:"noopener noreferrer"},k=i(`<p><a name="installation"></a></p><h2 id="installation" tabindex="-1"><a class="header-anchor" href="#installation" aria-hidden="true">#</a> Installation</h2><p>First, install the Cashier package for Paddle using the Composer package manager:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">composer</span> require laravel/cashier-paddle
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p><strong>Warning</strong><br> To ensure Cashier properly handles all Paddle events, remember to <a href="#handling-paddle-webhooks">set up Cashier&#39;s webhook handling</a>.</p></blockquote><p><a name="paddle-sandbox"></a></p><h3 id="paddle-sandbox" tabindex="-1"><a class="header-anchor" href="#paddle-sandbox" aria-hidden="true">#</a> Paddle Sandbox</h3>`,7),w={href:"https://developer.paddle.com/getting-started/sandbox",target:"_blank",rel:"noopener noreferrer"},P={href:"https://developer.paddle.com/getting-started/sandbox#test-cards",target:"_blank",rel:"noopener noreferrer"},_=i(`<p>When using the Paddle Sandbox environment, you should set the <code>PADDLE_SANDBOX</code> environment variable to <code>true</code> within your application&#39;s <code>.env</code> file:</p><div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code><span class="token key attr-name">PADDLE_SANDBOX</span><span class="token punctuation">=</span><span class="token value attr-value">true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,2),$={href:"https://paddle.com",target:"_blank",rel:"noopener noreferrer"},q=i(`<p><a name="database-migrations"></a></p><h3 id="database-migrations" tabindex="-1"><a class="header-anchor" href="#database-migrations" aria-hidden="true">#</a> Database Migrations</h3><p>The Cashier service provider registers its own database migration directory, so remember to migrate your database after installing the package. The Cashier migrations will create a new <code>customers</code> table. In addition, a new <code>subscriptions</code> table will be created to store all of your customer&#39;s subscriptions. Finally, a new <code>receipts</code> table will be created to store all of your application&#39;s receipt information:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan migrate
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>If you need to overwrite the migrations that are included with Cashier, you can publish them using the <code>vendor:publish</code> Artisan command:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan vendor:publish <span class="token parameter variable">--tag</span><span class="token operator">=</span><span class="token string">&quot;cashier-migrations&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>If you would like to prevent Cashier&#39;s migrations from running entirely, you may use the <code>ignoreMigrations</code> provided by Cashier. Typically, this method should be called in the <code>register</code> method of your <code>AppServiceProvider</code>:</p><pre><code>use Laravel\\Paddle\\Cashier;

/**
 * Register any application services.
 */
public function register(): void
{
    Cashier::ignoreMigrations();
}
</code></pre><p><a name="configuration"></a></p><h2 id="configuration" tabindex="-1"><a class="header-anchor" href="#configuration" aria-hidden="true">#</a> Configuration</h2><p><a name="billable-model"></a></p><h3 id="billable-model" tabindex="-1"><a class="header-anchor" href="#billable-model" aria-hidden="true">#</a> Billable Model</h3><p>Before using Cashier, you must add the <code>Billable</code> trait to your user model definition. This trait provides various methods to allow you to perform common billing tasks, such as creating subscriptions, applying coupons and updating payment method information:</p><pre><code>use Laravel\\Paddle\\Billable;

class User extends Authenticatable
{
    use Billable;
}
</code></pre><p>If you have billable entities that are not users, you may also add the trait to those classes:</p><pre><code>use Illuminate\\Database\\Eloquent\\Model;
use Laravel\\Paddle\\Billable;

class Team extends Model
{
    use Billable;
}
</code></pre><p><a name="api-keys"></a></p><h3 id="api-keys" tabindex="-1"><a class="header-anchor" href="#api-keys" aria-hidden="true">#</a> API Keys</h3><p>Next, you should configure your Paddle keys in your application&#39;s <code>.env</code> file. You can retrieve your Paddle API keys from the Paddle control panel:</p><div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code><span class="token key attr-name">PADDLE_VENDOR_ID</span><span class="token punctuation">=</span><span class="token value attr-value">your-paddle-vendor-id</span>
<span class="token key attr-name">PADDLE_VENDOR_AUTH_CODE</span><span class="token punctuation">=</span><span class="token value attr-value">your-paddle-vendor-auth-code</span>
<span class="token key attr-name">PADDLE_PUBLIC_KEY</span><span class="token punctuation">=</span><span class="token value attr-value">&quot;<span class="token inner-value">your-paddle-public-key</span>&quot;</span>
<span class="token key attr-name">PADDLE_SANDBOX</span><span class="token punctuation">=</span><span class="token value attr-value">true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The <code>PADDLE_SANDBOX</code> environment variable should be set to <code>true</code> when you are using <a href="#paddle-sandbox">Paddle&#39;s Sandbox environment</a>. The <code>PADDLE_SANDBOX</code> variable should be set to <code>false</code> if you are deploying your application to production and are using Paddle&#39;s live vendor environment.</p><p><a name="paddle-js"></a></p><h3 id="paddle-js" tabindex="-1"><a class="header-anchor" href="#paddle-js" aria-hidden="true">#</a> Paddle JS</h3><p>Paddle relies on its own JavaScript library to initiate the Paddle checkout widget. You can load the JavaScript library by placing the <code>@paddleJS</code> Blade directive right before your application layout&#39;s closing <code>&lt;/head&gt;</code> tag:</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>&lt;head&gt;
    ...

    @paddleJS
&lt;/head&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="currency-configuration"></a></p><h3 id="currency-configuration" tabindex="-1"><a class="header-anchor" href="#currency-configuration" aria-hidden="true">#</a> Currency Configuration</h3><p>The default Cashier currency is United States Dollars (USD). You can change the default currency by defining a <code>CASHIER_CURRENCY</code> environment variable within your application&#39;s <code>.env</code> file:</p><div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code><span class="token key attr-name">CASHIER_CURRENCY</span><span class="token punctuation">=</span><span class="token value attr-value">EUR</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,29),x={href:"https://www.php.net/manual/en/class.numberformatter.php",target:"_blank",rel:"noopener noreferrer"},S=a("code",null,"NumberFormatter",-1),C=i(`<div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code><span class="token key attr-name">CASHIER_CURRENCY_LOCALE</span><span class="token punctuation">=</span><span class="token value attr-value">nl_BE</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p><strong>Warning</strong><br> In order to use locales other than <code>en</code>, ensure the <code>ext-intl</code> PHP extension is installed and configured on your server.</p></blockquote><p><a name="overriding-default-models"></a></p><h3 id="overriding-default-models" tabindex="-1"><a class="header-anchor" href="#overriding-default-models" aria-hidden="true">#</a> Overriding Default Models</h3><p>You are free to extend the models used internally by Cashier by defining your own model and extending the corresponding Cashier model:</p><pre><code>use Laravel\\Paddle\\Subscription as CashierSubscription;

class Subscription extends CashierSubscription
{
    // ...
}
</code></pre><p>After defining your model, you may instruct Cashier to use your custom model via the <code>Laravel\\Paddle\\Cashier</code> class. Typically, you should inform Cashier about your custom models in the <code>boot</code> method of your application&#39;s <code>App\\Providers\\AppServiceProvider</code> class:</p><pre><code>use App\\Models\\Cashier\\Receipt;
use App\\Models\\Cashier\\Subscription;

/**
 * Bootstrap any application services.
 */
public function boot(): void
{
    Cashier::useReceiptModel(Receipt::class);
    Cashier::useSubscriptionModel(Subscription::class);
}
</code></pre><p><a name="core-concepts"></a></p><h2 id="core-concepts" tabindex="-1"><a class="header-anchor" href="#core-concepts" aria-hidden="true">#</a> Core Concepts</h2><p><a name="pay-links"></a></p><h3 id="pay-links" tabindex="-1"><a class="header-anchor" href="#pay-links" aria-hidden="true">#</a> Pay Links</h3>`,12),T={href:"https://developer.paddle.com/guides/how-tos/checkout/paddle-checkout",target:"_blank",rel:"noopener noreferrer"},I=i(`<pre><code>use App\\Models\\User;
use Illuminate\\Http\\Request;

Route::get(&#39;/user/subscribe&#39;, function (Request $request) {
    $payLink = $request-&gt;user()-&gt;newSubscription(&#39;default&#39;, $premium = 34567)
        -&gt;returnTo(route(&#39;home&#39;))
        -&gt;create();

    return view(&#39;billing&#39;, [&#39;payLink&#39; =&gt; $payLink]);
});
</code></pre><p>Cashier includes a <code>paddle-button</code> <a href="./blade#components">Blade component</a>. We may pass the pay link URL to this component as a &quot;prop&quot;. When this button is clicked, Paddle&#39;s checkout widget will be displayed:</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>x-paddle-button</span> <span class="token attr-name">:url</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>$payLink<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>px-8 py-4<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    Subscribe
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>x-paddle-button</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>By default, this will display a button with the standard Paddle styling. You can remove all Paddle styling by adding the <code>data-theme=&quot;none&quot;</code> attribute to the component:</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>x-paddle-button</span> <span class="token attr-name">:url</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>$payLink<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>px-8 py-4<span class="token punctuation">&quot;</span></span> <span class="token attr-name">data-theme</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>none<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    Subscribe
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>x-paddle-button</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The Paddle checkout widget is asynchronous. Once the user creates or updates a subscription within the widget, Paddle will send your application webhooks so that you may properly update the subscription state in our own database. Therefore, it&#39;s important that you properly <a href="#handling-paddle-webhooks">set up webhooks</a> to accommodate for state changes from Paddle.</p>`,6),L={href:"https://developer.paddle.com/api-reference/product-api/pay-links/createpaylink",target:"_blank",rel:"noopener noreferrer"},R=i(`<blockquote><p><strong>Warning</strong><br> After a subscription state change, the delay for receiving the corresponding webhook is typically minimal but you should account for this in your application by considering that your user&#39;s subscription might not be immediately available after completing the checkout.</p></blockquote><p><a name="manually-rendering-pay-links"></a></p><h4 id="manually-rendering-pay-links" tabindex="-1"><a class="header-anchor" href="#manually-rendering-pay-links" aria-hidden="true">#</a> Manually Rendering Pay Links</h4><p>You may also manually render a pay link without using Laravel&#39;s built-in Blade components. To get started, generate the pay link URL as demonstrated in previous examples:</p><pre><code>$payLink = $request-&gt;user()-&gt;newSubscription(&#39;default&#39;, $premium = 34567)
    -&gt;returnTo(route(&#39;home&#39;))
    -&gt;create();
</code></pre><p>Next, simply attach the pay link URL to an <code>a</code> element in your HTML:</p>`,6),A=i(`<p><a name="payments-requiring-additional-confirmation"></a></p><h4 id="payments-requiring-additional-confirmation" tabindex="-1"><a class="header-anchor" href="#payments-requiring-additional-confirmation" aria-hidden="true">#</a> Payments Requiring Additional Confirmation</h4><p>Sometimes additional verification is required in order to confirm and process a payment. When this happens, Paddle will present a payment confirmation screen. Payment confirmation screens presented by Paddle or Cashier may be tailored to a specific bank or card issuer&#39;s payment flow and can include additional card confirmation, a temporary small charge, separate device authentication, or other forms of verification.</p><p><a name="inline-checkout"></a></p><h3 id="inline-checkout" tabindex="-1"><a class="header-anchor" href="#inline-checkout" aria-hidden="true">#</a> Inline Checkout</h3><p>If you don&#39;t want to make use of Paddle&#39;s &quot;overlay&quot; style checkout widget, Paddle also provides the option to display the widget inline. While this approach does not allow you to adjust any of the checkout&#39;s HTML fields, it allows you to embed the widget within your application.</p><p>To make it easy for you to get started with inline checkout, Cashier includes a <code>paddle-checkout</code> Blade component. To get started, you should <a href="#pay-links">generate a pay link</a> and pass the pay link to the component&#39;s <code>override</code> attribute:</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>&lt;x-paddle-checkout :override=&quot;$payLink&quot; class=&quot;w-full&quot; /&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>To adjust the height of the inline checkout component, you may pass the <code>height</code> attribute to the Blade component:</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>&lt;x-paddle-checkout :override=&quot;$payLink&quot; class=&quot;w-full&quot; height=&quot;500&quot; /&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a name="inline-checkout-without-pay-links"></a></p><h4 id="inline-checkout-without-pay-links" tabindex="-1"><a class="header-anchor" href="#inline-checkout-without-pay-links" aria-hidden="true">#</a> Inline Checkout Without Pay Links</h4><p>Alternatively, you may customize the widget with custom options instead of using a pay link:</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>@php
$options = [
    &#39;product&#39; =&gt; $productId,
    &#39;title&#39; =&gt; &#39;Product Title&#39;,
];
@endphp

&lt;x-paddle-checkout :options=&quot;$options&quot; class=&quot;w-full&quot; /&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14),E={href:"https://developer.paddle.com/guides/how-tos/checkout/inline-checkout",target:"_blank",rel:"noopener noreferrer"},U={href:"https://developer.paddle.com/reference/paddle-js/parameters",target:"_blank",rel:"noopener noreferrer"},W=i('<blockquote><p><strong>Warning</strong><br> If you would like to also use the <code>passthrough</code> option when specifying custom options, you should provide a key / value array as its value. Cashier will automatically handle converting the array to a JSON string. In addition, the <code>customer_id</code> passthrough option is reserved for internal Cashier usage.</p></blockquote><p><a name="manually-rendering-an-inline-checkout"></a></p><h4 id="manually-rendering-an-inline-checkout" tabindex="-1"><a class="header-anchor" href="#manually-rendering-an-inline-checkout" aria-hidden="true">#</a> Manually Rendering An Inline Checkout</h4><p>You may also manually render an inline checkout without using Laravel&#39;s built-in Blade components. To get started, generate the pay link URL <a href="#pay-links">as demonstrated in previous examples</a>.</p>',4),D={href:"https://github.com/alpinejs/alpine",target:"_blank",rel:"noopener noreferrer"},M=i(`<div class="language-alpine line-numbers-mode" data-ext="alpine"><pre class="language-alpine"><code>&lt;div class=&quot;paddle-checkout&quot; x-data=&quot;{}&quot; x-init=&quot;
    Paddle.Checkout.open({
        override: {{ $payLink }},
        method: &#39;inline&#39;,
        frameTarget: &#39;paddle-checkout&#39;,
        frameInitialHeight: 366,
        frameStyle: &#39;width: 100%; background-color: transparent; border: none;&#39;
    });
&quot;&gt;
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="user-identification"></a></p><h3 id="user-identification" tabindex="-1"><a class="header-anchor" href="#user-identification" aria-hidden="true">#</a> User Identification</h3><p>In contrast to Stripe, Paddle users are unique across all of Paddle, not unique per Paddle account. Because of this, Paddle&#39;s API&#39;s do not currently provide a method to update a user&#39;s details such as their email address. When generating pay links, Paddle identifies users using the <code>customer_email</code> parameter. When creating a subscription, Paddle will try to match the user provided email to an existing Paddle user.</p><p>In light of this behavior, there are some important things to keep in mind when using Cashier and Paddle. First, you should be aware that even though subscriptions in Cashier are tied to the same application user, <strong>they could be tied to different users within Paddle&#39;s internal systems</strong>. Secondly, each subscription has its own connected payment method information and could also have different email addresses within Paddle&#39;s internal systems (depending on which email was assigned to the user when the subscription was created).</p><p>Therefore, when displaying subscriptions you should always inform the user which email address or payment method information is connected to the subscription on a per-subscription basis. Retrieving this information can be done with the following methods provided by the <code>Laravel\\Paddle\\Subscription</code> model:</p><pre><code>$subscription = $user-&gt;subscription(&#39;default&#39;);

$subscription-&gt;paddleEmail();
$subscription-&gt;paymentMethod();
$subscription-&gt;cardBrand();
$subscription-&gt;cardLastFour();
$subscription-&gt;cardExpirationDate();
</code></pre><p>There is currently no way to modify a user&#39;s email address through the Paddle API. When a user wants to update their email address within Paddle, the only way for them to do so is to contact Paddle customer support. When communicating with Paddle, they need to provide the <code>paddleEmail</code> value of the subscription to assist Paddle in updating the correct user.</p><p><a name="prices"></a></p><h2 id="prices" tabindex="-1"><a class="header-anchor" href="#prices" aria-hidden="true">#</a> Prices</h2><p>Paddle allows you to customize prices per currency, essentially allowing you to configure different prices for different countries. Cashier Paddle allows you to retrieve all of the prices for a given product using the <code>productPrices</code> method. This method accepts the product IDs of the products you wish to retrieve prices for:</p><pre><code>use Laravel\\Paddle\\Cashier;

$prices = Cashier::productPrices([123, 456]);
</code></pre><p>The currency will be determined based on the IP address of the request; however, you may optionally provide a specific country to retrieve prices for:</p><pre><code>use Laravel\\Paddle\\Cashier;

$prices = Cashier::productPrices([123, 456], [&#39;customer_country&#39; =&gt; &#39;BE&#39;]);
</code></pre><p>After retrieving the prices you may display them however you wish:</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>&lt;ul&gt;
    @foreach ($prices as $price)
        &lt;li&gt;{{ $price-&gt;product_title }} - {{ $price-&gt;price()-&gt;gross() }}&lt;/li&gt;
    @endforeach
&lt;/ul&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>You may also display the net price (excludes tax) and display the tax amount separately:</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>&lt;ul&gt;
    @foreach ($prices as $price)
        &lt;li&gt;{{ $price-&gt;product_title }} - {{ $price-&gt;price()-&gt;net() }} (+ {{ $price-&gt;price()-&gt;tax() }} tax)&lt;/li&gt;
    @endforeach
&lt;/ul&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>If you retrieved prices for subscription plans you can display their initial and recurring price separately:</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>&lt;ul&gt;
    @foreach ($prices as $price)
        &lt;li&gt;{{ $price-&gt;product_title }} - Initial: {{ $price-&gt;initialPrice()-&gt;gross() }} - Recurring: {{ $price-&gt;recurringPrice()-&gt;gross() }}&lt;/li&gt;
    @endforeach
&lt;/ul&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,20),B={href:"https://developer.paddle.com/api-reference/checkout-api/prices/getprices",target:"_blank",rel:"noopener noreferrer"},H=i(`<p><a name="prices-customers"></a></p><h4 id="customers" tabindex="-1"><a class="header-anchor" href="#customers" aria-hidden="true">#</a> Customers</h4><p>If a user is already a customer and you would like to display the prices that apply to that customer, you may do so by retrieving the prices directly from the customer instance:</p><pre><code>use App\\Models\\User;

$prices = User::find(1)-&gt;productPrices([123, 456]);
</code></pre><p>Internally, Cashier will use the user&#39;s <a href="#customer-defaults"><code>paddleCountry</code> method</a> to retrieve the prices in their currency. So, for example, a user living in the United States will see prices in USD while a user in Belgium will see prices in EUR. If no matching currency can be found the default currency of the product will be used. You can customize all prices of a product or subscription plan in the Paddle control panel.</p><p><a name="prices-coupons"></a></p><h4 id="coupons" tabindex="-1"><a class="header-anchor" href="#coupons" aria-hidden="true">#</a> Coupons</h4><p>You may also choose to display prices after a coupon reduction. When calling the <code>productPrices</code> method, coupons may be passed as a comma delimited string:</p><pre><code>use Laravel\\Paddle\\Cashier;

$prices = Cashier::productPrices([123, 456], [
    &#39;coupons&#39; =&gt; &#39;SUMMERSALE,20PERCENTOFF&#39;
]);
</code></pre><p>Then, display the calculated prices using the <code>price</code> method:</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>&lt;ul&gt;
    @foreach ($prices as $price)
        &lt;li&gt;{{ $price-&gt;product_title }} - {{ $price-&gt;price()-&gt;gross() }}&lt;/li&gt;
    @endforeach
&lt;/ul&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>You may display the original listed prices (without coupon discounts) using the <code>listPrice</code> method:</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>&lt;ul&gt;
    @foreach ($prices as $price)
        &lt;li&gt;{{ $price-&gt;product_title }} - {{ $price-&gt;listPrice()-&gt;gross() }}&lt;/li&gt;
    @endforeach
&lt;/ul&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>Warning</strong><br> When using the prices API, Paddle only allows applying coupons to one-time purchase products and not to subscription plans.</p></blockquote><p><a name="customers"></a></p><h2 id="customers-1" tabindex="-1"><a class="header-anchor" href="#customers-1" aria-hidden="true">#</a> Customers</h2><p><a name="customer-defaults"></a></p><h3 id="customer-defaults" tabindex="-1"><a class="header-anchor" href="#customer-defaults" aria-hidden="true">#</a> Customer Defaults</h3><p>Cashier allows you to define some useful defaults for your customers when creating pay links. Setting these defaults allow you to pre-fill a customer&#39;s email address, country, and postal code so that they can immediately move on to the payment portion of the checkout widget. You can set these defaults by overriding the following methods on your billable model:</p><pre><code>/**
 * Get the customer&#39;s email address to associate with Paddle.
 */
public function paddleEmail(): string|null
{
    return $this-&gt;email;
}

/**
 * Get the customer&#39;s country to associate with Paddle.
 *
 * This needs to be a 2 letter code. See the link below for supported countries.
 *
 * @link https://developer.paddle.com/reference/platform-parameters/supported-countries
 */
public function paddleCountry(): string|null
{
    // ...
}

/**
 * Get the customer&#39;s postal code to associate with Paddle.
 *
 * See the link below for countries which require this.
 *
 * @link https://developer.paddle.com/reference/platform-parameters/supported-countries#countries-requiring-postcode
 */
public function paddlePostcode(): string|null
{
    // ...
}
</code></pre><p>These defaults will be used for every action in Cashier that generates a <a href="#pay-links">pay link</a>.</p><p><a name="subscriptions"></a></p><h2 id="subscriptions" tabindex="-1"><a class="header-anchor" href="#subscriptions" aria-hidden="true">#</a> Subscriptions</h2><p><a name="creating-subscriptions"></a></p><h3 id="creating-subscriptions" tabindex="-1"><a class="header-anchor" href="#creating-subscriptions" aria-hidden="true">#</a> Creating Subscriptions</h3><p>To create a subscription, first retrieve an instance of your billable model from your database, which typically will be an instance of <code>App\\Models\\User</code>. Once you have retrieved the model instance, you may use the <code>newSubscription</code> method to create the model&#39;s subscription pay link:</p><pre><code>use Illuminate\\Http\\Request;

Route::get(&#39;/user/subscribe&#39;, function (Request $request) {
    $payLink = $request-&gt;user()-&gt;newSubscription(&#39;default&#39;, $premium = 12345)
        -&gt;returnTo(route(&#39;home&#39;))
        -&gt;create();

    return view(&#39;billing&#39;, [&#39;payLink&#39; =&gt; $payLink]);
});
</code></pre><p>The first argument passed to the <code>newSubscription</code> method should be the internal name of the subscription. If your application only offers a single subscription, you might call this <code>default</code> or <code>primary</code>. This subscription name is only for internal application usage and is not meant to be shown to users. In addition, it should not contain spaces and it should never be changed after creating the subscription. The second argument given to the <code>newSubscription</code> method is the specific plan the user is subscribing to. This value should correspond to the plan&#39;s identifier in Paddle. The <code>returnTo</code> method accepts a URL that your user will be redirected to after they successfully complete the checkout.</p><p>The <code>create</code> method will create a pay link which you can use to generate a payment button. The payment button can be generated using the <code>paddle-button</code> <a href="./blade#components">Blade component</a> that is included with Cashier Paddle:</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>&lt;x-paddle-button :url=&quot;$payLink&quot; class=&quot;px-8 py-4&quot;&gt;
    Subscribe
&lt;/x-paddle-button&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>After the user has finished their checkout, a <code>subscription_created</code> webhook will be dispatched from Paddle. Cashier will receive this webhook and setup the subscription for your customer. In order to make sure all webhooks are properly received and handled by your application, ensure you have properly <a href="#handling-paddle-webhooks">setup webhook handling</a>.</p><p><a name="additional-details"></a></p><h4 id="additional-details" tabindex="-1"><a class="header-anchor" href="#additional-details" aria-hidden="true">#</a> Additional Details</h4>`,33),Y=a("code",null,"create",-1),F={href:"https://developer.paddle.com/api-reference/product-api/pay-links/createpaylink",target:"_blank",rel:"noopener noreferrer"},N=i(`<pre><code>$payLink = $user-&gt;newSubscription(&#39;default&#39;, $monthly = 12345)
    -&gt;returnTo(route(&#39;home&#39;))
    -&gt;create([
        &#39;vat_number&#39; =&gt; $vatNumber,
    ]);
</code></pre><p><a name="subscriptions-coupons"></a></p><h4 id="coupons-1" tabindex="-1"><a class="header-anchor" href="#coupons-1" aria-hidden="true">#</a> Coupons</h4><p>If you would like to apply a coupon when creating the subscription, you may use the <code>withCoupon</code> method:</p><pre><code>$payLink = $user-&gt;newSubscription(&#39;default&#39;, $monthly = 12345)
    -&gt;returnTo(route(&#39;home&#39;))
    -&gt;withCoupon(&#39;code&#39;)
    -&gt;create();
</code></pre><p><a name="metadata"></a></p><h4 id="metadata" tabindex="-1"><a class="header-anchor" href="#metadata" aria-hidden="true">#</a> Metadata</h4><p>You can also pass an array of metadata using the <code>withMetadata</code> method:</p><pre><code>$payLink = $user-&gt;newSubscription(&#39;default&#39;, $monthly = 12345)
    -&gt;returnTo(route(&#39;home&#39;))
    -&gt;withMetadata([&#39;key&#39; =&gt; &#39;value&#39;])
    -&gt;create();
</code></pre><blockquote><p><strong>Warning</strong><br> When providing metadata, please avoid using <code>subscription_name</code> as a metadata key. This key is reserved for internal use by Cashier.</p></blockquote><p><a name="checking-subscription-status"></a></p><h3 id="checking-subscription-status" tabindex="-1"><a class="header-anchor" href="#checking-subscription-status" aria-hidden="true">#</a> Checking Subscription Status</h3><p>Once a user is subscribed to your application, you may check their subscription status using a variety of convenient methods. First, the <code>subscribed</code> method returns <code>true</code> if the user has an active subscription, even if the subscription is currently within its trial period:</p><pre><code>if ($user-&gt;subscribed(&#39;default&#39;)) {
    // ...
}
</code></pre><p>The <code>subscribed</code> method also makes a great candidate for a <a href="./middleware">route middleware</a>, allowing you to filter access to routes and controllers based on the user&#39;s subscription status:</p><pre><code>&lt;?php

namespace App\\Http\\Middleware;

use Closure;
use Illuminate\\Http\\Request;
use Symfony\\Component\\HttpFoundation\\Response;

class EnsureUserIsSubscribed
{
    /**
     * Handle an incoming request.
     *
     * @param  \\Closure(\\Illuminate\\Http\\Request): (\\Symfony\\Component\\HttpFoundation\\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        if ($request-&gt;user() &amp;&amp; ! $request-&gt;user()-&gt;subscribed(&#39;default&#39;)) {
            // This user is not a paying customer...
            return redirect(&#39;billing&#39;);
        }

        return $next($request);
    }
}
</code></pre><p>If you would like to determine if a user is still within their trial period, you may use the <code>onTrial</code> method. This method can be useful for determining if you should display a warning to the user that they are still on their trial period:</p><pre><code>if ($user-&gt;subscription(&#39;default&#39;)-&gt;onTrial()) {
    // ...
}
</code></pre><p>The <code>subscribedToPlan</code> method may be used to determine if the user is subscribed to a given plan based on a given Paddle plan ID. In this example, we will determine if the user&#39;s <code>default</code> subscription is actively subscribed to the monthly plan:</p><pre><code>if ($user-&gt;subscribedToPlan($monthly = 12345, &#39;default&#39;)) {
    // ...
}
</code></pre><p>The <code>recurring</code> method may be used to determine if the user is currently subscribed and is no longer within their trial period:</p><pre><code>if ($user-&gt;subscription(&#39;default&#39;)-&gt;recurring()) {
    // ...
}
</code></pre><p><a name="cancelled-subscription-status"></a></p><h4 id="cancelled-subscription-status" tabindex="-1"><a class="header-anchor" href="#cancelled-subscription-status" aria-hidden="true">#</a> Cancelled Subscription Status</h4><p>To determine if the user was once an active subscriber but has cancelled their subscription, you may use the <code>cancelled</code> method:</p><pre><code>if ($user-&gt;subscription(&#39;default&#39;)-&gt;cancelled()) {
    // ...
}
</code></pre><p>You may also determine if a user has cancelled their subscription, but are still on their &quot;grace period&quot; until the subscription fully expires. For example, if a user cancels a subscription on March 5th that was originally scheduled to expire on March 10th, the user is on their &quot;grace period&quot; until March 10th. Note that the <code>subscribed</code> method still returns <code>true</code> during this time:</p><pre><code>if ($user-&gt;subscription(&#39;default&#39;)-&gt;onGracePeriod()) {
    // ...
}
</code></pre><p>To determine if the user has cancelled their subscription and is no longer within their &quot;grace period&quot;, you may use the <code>ended</code> method:</p><pre><code>if ($user-&gt;subscription(&#39;default&#39;)-&gt;ended()) {
    // ...
}
</code></pre><p><a name="past-due-status"></a></p><h4 id="past-due-status" tabindex="-1"><a class="header-anchor" href="#past-due-status" aria-hidden="true">#</a> Past Due Status</h4><p>If a payment fails for a subscription, it will be marked as <code>past_due</code>. When your subscription is in this state it will not be active until the customer has updated their payment information. You may determine if a subscription is past due using the <code>pastDue</code> method on the subscription instance:</p><pre><code>if ($user-&gt;subscription(&#39;default&#39;)-&gt;pastDue()) {
    // ...
}
</code></pre>`,34),O=a("a",{href:"#updating-payment-information"},"update their payment information",-1),G={href:"https://vendors.paddle.com/subscription-settings",target:"_blank",rel:"noopener noreferrer"},j=i(`<p>If you would like subscriptions to still be considered active when they are <code>past_due</code>, you may use the <code>keepPastDueSubscriptionsActive</code> method provided by Cashier. Typically, this method should be called in the <code>register</code> method of your <code>AppServiceProvider</code>:</p><pre><code>use Laravel\\Paddle\\Cashier;

/**
 * Register any application services.
 */
public function register(): void
{
    Cashier::keepPastDueSubscriptionsActive();
}
</code></pre><blockquote><p><strong>Warning</strong><br> When a subscription is in a <code>past_due</code> state it cannot be changed until payment information has been updated. Therefore, the <code>swap</code> and <code>updateQuantity</code> methods will throw an exception when the subscription is in a <code>past_due</code> state.</p></blockquote><p><a name="subscription-scopes"></a></p><h4 id="subscription-scopes" tabindex="-1"><a class="header-anchor" href="#subscription-scopes" aria-hidden="true">#</a> Subscription Scopes</h4><p>Most subscription states are also available as query scopes so that you may easily query your database for subscriptions that are in a given state:</p><pre><code>// Get all active subscriptions...
$subscriptions = Subscription::query()-&gt;active()-&gt;get();

// Get all of the cancelled subscriptions for a user...
$subscriptions = $user-&gt;subscriptions()-&gt;cancelled()-&gt;get();
</code></pre><p>A complete list of available scopes is available below:</p><pre><code>Subscription::query()-&gt;active();
Subscription::query()-&gt;onTrial();
Subscription::query()-&gt;notOnTrial();
Subscription::query()-&gt;pastDue();
Subscription::query()-&gt;recurring();
Subscription::query()-&gt;ended();
Subscription::query()-&gt;paused();
Subscription::query()-&gt;notPaused();
Subscription::query()-&gt;onPausedGracePeriod();
Subscription::query()-&gt;notOnPausedGracePeriod();
Subscription::query()-&gt;cancelled();
Subscription::query()-&gt;notCancelled();
Subscription::query()-&gt;onGracePeriod();
Subscription::query()-&gt;notOnGracePeriod();
</code></pre><p><a name="subscription-single-charges"></a></p><h3 id="subscription-single-charges" tabindex="-1"><a class="header-anchor" href="#subscription-single-charges" aria-hidden="true">#</a> Subscription Single Charges</h3><p>Subscription single charges allow you to charge subscribers with a one-time charge on top of their subscriptions:</p><pre><code>$response = $user-&gt;subscription(&#39;default&#39;)-&gt;charge(12.99, &#39;Support Add-on&#39;);
</code></pre><p>In contrast to <a href="#single-charges">single charges</a>, this method will immediately charge the customer&#39;s stored payment method for the subscription. The charge amount should always be defined in the currency of the subscription.</p><p><a name="updating-payment-information"></a></p><h3 id="updating-payment-information" tabindex="-1"><a class="header-anchor" href="#updating-payment-information" aria-hidden="true">#</a> Updating Payment Information</h3><p>Paddle always saves a payment method per subscription. If you want to update the default payment method for a subscription, you should first generate a subscription &quot;update URL&quot; using the <code>updateUrl</code> method on the subscription model:</p><pre><code>use App\\Models\\User;

$user = User::find(1);

$updateUrl = $user-&gt;subscription(&#39;default&#39;)-&gt;updateUrl();
</code></pre><p>Then, you may use the generated URL in combination with Cashier&#39;s provided <code>paddle-button</code> Blade component to allow the user to initiate the Paddle widget and update their payment information:</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>x-paddle-button</span> <span class="token attr-name">:url</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>$updateUrl<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>px-8 py-4<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    Update Card
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>x-paddle-button</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>When a user has finished updating their information, a <code>subscription_updated</code> webhook will be dispatched by Paddle and the subscription details will be updated in your application&#39;s database.</p><p><a name="changing-plans"></a></p><h3 id="changing-plans" tabindex="-1"><a class="header-anchor" href="#changing-plans" aria-hidden="true">#</a> Changing Plans</h3><p>After a user has subscribed to your application, they may occasionally want to change to a new subscription plan. To update the subscription plan for a user, you should pass the Paddle plan&#39;s identifier to the subscription&#39;s <code>swap</code> method:</p><pre><code>use App\\Models\\User;

$user = User::find(1);

$user-&gt;subscription(&#39;default&#39;)-&gt;swap($premium = 34567);
</code></pre><p>If you would like to swap plans and immediately invoice the user instead of waiting for their next billing cycle, you may use the <code>swapAndInvoice</code> method:</p><pre><code>$user = User::find(1);

$user-&gt;subscription(&#39;default&#39;)-&gt;swapAndInvoice($premium = 34567);
</code></pre>`,27),Q=a("strong",null,"Warning",-1),V=a("br",null,null,-1),z={href:"https://developer.paddle.com/api-reference/subscription-api/users/updateuser#usage-notes",target:"_blank",rel:"noopener noreferrer"},J=i(`<p><a name="prorations"></a></p><h4 id="prorations" tabindex="-1"><a class="header-anchor" href="#prorations" aria-hidden="true">#</a> Prorations</h4><p>By default, Paddle prorates charges when swapping between plans. The <code>noProrate</code> method may be used to update the subscriptions without prorating the charges:</p><pre><code>$user-&gt;subscription(&#39;default&#39;)-&gt;noProrate()-&gt;swap($premium = 34567);
</code></pre><p><a name="subscription-quantity"></a></p><h3 id="subscription-quantity" tabindex="-1"><a class="header-anchor" href="#subscription-quantity" aria-hidden="true">#</a> Subscription Quantity</h3><p>Sometimes subscriptions are affected by &quot;quantity&quot;. For example, a project management application might charge $10 per month per project. To easily increment or decrement your subscription&#39;s quantity, use the <code>incrementQuantity</code> and <code>decrementQuantity</code> methods:</p><pre><code>$user = User::find(1);

$user-&gt;subscription(&#39;default&#39;)-&gt;incrementQuantity();

// Add five to the subscription&#39;s current quantity...
$user-&gt;subscription(&#39;default&#39;)-&gt;incrementQuantity(5);

$user-&gt;subscription(&#39;default&#39;)-&gt;decrementQuantity();

// Subtract five from the subscription&#39;s current quantity...
$user-&gt;subscription(&#39;default&#39;)-&gt;decrementQuantity(5);
</code></pre><p>Alternatively, you may set a specific quantity using the <code>updateQuantity</code> method:</p><pre><code>$user-&gt;subscription(&#39;default&#39;)-&gt;updateQuantity(10);
</code></pre><p>The <code>noProrate</code> method may be used to update the subscription&#39;s quantity without prorating the charges:</p><pre><code>$user-&gt;subscription(&#39;default&#39;)-&gt;noProrate()-&gt;updateQuantity(10);
</code></pre><p><a name="subscription-modifiers"></a></p><h3 id="subscription-modifiers" tabindex="-1"><a class="header-anchor" href="#subscription-modifiers" aria-hidden="true">#</a> Subscription Modifiers</h3>`,14),K={href:"https://developer.paddle.com/guides/how-tos/subscriptions/metered-billing#using-subscription-price-modifiers",target:"_blank",rel:"noopener noreferrer"},X=i(`<p>For example, you might want to offer a &quot;Premium Support&quot; add-on with your standard subscription. You can create this modifier like so:</p><pre><code>$modifier = $user-&gt;subscription(&#39;default&#39;)-&gt;newModifier(12.99)-&gt;create();
</code></pre><p>The example above will add a $12.99 add-on to the subscription. By default, this charge will recur on every interval you have configured for the subscription. If you would like, you can add a readable description to the modifier using the modifier&#39;s <code>description</code> method:</p><pre><code>$modifier = $user-&gt;subscription(&#39;default&#39;)-&gt;newModifier(12.99)
    -&gt;description(&#39;Premium Support&#39;)
    -&gt;create();
</code></pre><p>To illustrate how to implement metered billing using modifiers, imagine your application charges per SMS message sent by the user. First, you should create a $0 plan in your Paddle dashboard. Once the user has been subscribed to this plan, you can add modifiers representing each individual charge to the subscription:</p><pre><code>$modifier = $user-&gt;subscription(&#39;default&#39;)-&gt;newModifier(0.99)
    -&gt;description(&#39;New text message&#39;)
    -&gt;oneTime()
    -&gt;create();
</code></pre><p>As you can see, we invoked the <code>oneTime</code> method when creating this modifier. This method will ensure the modifier is only charged once and does not recur every billing interval.</p><p><a name="retrieving-modifiers"></a></p><h4 id="retrieving-modifiers" tabindex="-1"><a class="header-anchor" href="#retrieving-modifiers" aria-hidden="true">#</a> Retrieving Modifiers</h4><p>You may retrieve a list of all modifiers for a subscription via the <code>modifiers</code> method:</p><pre><code>$modifiers = $user-&gt;subscription(&#39;default&#39;)-&gt;modifiers();

foreach ($modifiers as $modifier) {
    $modifier-&gt;amount(); // $0.99
    $modifier-&gt;description; // New text message.
}
</code></pre><p><a name="deleting-modifiers"></a></p><h4 id="deleting-modifiers" tabindex="-1"><a class="header-anchor" href="#deleting-modifiers" aria-hidden="true">#</a> Deleting Modifiers</h4><p>Modifiers may be deleted by invoking the <code>delete</code> method on a <code>Laravel\\Paddle\\Modifier</code> instance:</p><pre><code>$modifier-&gt;delete();
</code></pre><p><a name="multiple-subscriptions"></a></p><h3 id="multiple-subscriptions" tabindex="-1"><a class="header-anchor" href="#multiple-subscriptions" aria-hidden="true">#</a> Multiple Subscriptions</h3><p>Paddle allows your customers to have multiple subscriptions simultaneously. For example, you may run a gym that offers a swimming subscription and a weight-lifting subscription, and each subscription may have different pricing. Of course, customers should be able to subscribe to either or both plans.</p><p>When your application creates subscriptions, you may provide the name of the subscription to the <code>newSubscription</code> method. The name may be any string that represents the type of subscription the user is initiating:</p><pre><code>use Illuminate\\Http\\Request;

Route::post(&#39;/swimming/subscribe&#39;, function (Request $request) {
    $request-&gt;user()
        -&gt;newSubscription(&#39;swimming&#39;, $swimmingMonthly = 12345)
        -&gt;create($request-&gt;paymentMethodId);

    // ...
});
</code></pre><p>In this example, we initiated a monthly swimming subscription for the customer. However, they may want to swap to a yearly subscription at a later time. When adjusting the customer&#39;s subscription, we can simply swap the price on the <code>swimming</code> subscription:</p><pre><code>$user-&gt;subscription(&#39;swimming&#39;)-&gt;swap($swimmingYearly = 34567);
</code></pre><p>Of course, you may also cancel the subscription entirely:</p><pre><code>$user-&gt;subscription(&#39;swimming&#39;)-&gt;cancel();
</code></pre><p><a name="pausing-subscriptions"></a></p><h3 id="pausing-subscriptions" tabindex="-1"><a class="header-anchor" href="#pausing-subscriptions" aria-hidden="true">#</a> Pausing Subscriptions</h3><p>To pause a subscription, call the <code>pause</code> method on the user&#39;s subscription:</p><pre><code>$user-&gt;subscription(&#39;default&#39;)-&gt;pause();
</code></pre><p>When a subscription is paused, Cashier will automatically set the <code>paused_from</code> column in your database. This column is used to know when the <code>paused</code> method should begin returning <code>true</code>. For example, if a customer pauses a subscription on March 1st, but the subscription was not scheduled to recur until March 5th, the <code>paused</code> method will continue to return <code>false</code> until March 5th. This is done because a user is typically allowed to continue using an application until the end of their billing cycle.</p><p>You may determine if a user has paused their subscription but are still on their &quot;grace period&quot; using the <code>onPausedGracePeriod</code> method:</p><pre><code>if ($user-&gt;subscription(&#39;default&#39;)-&gt;onPausedGracePeriod()) {
    // ...
}
</code></pre><p>To resume a paused a subscription, you may call the <code>unpause</code> method on the user&#39;s subscription:</p><pre><code>$user-&gt;subscription(&#39;default&#39;)-&gt;unpause();
</code></pre><blockquote><p><strong>Warning</strong><br> A subscription cannot be modified while it is paused. If you want to swap to a different plan or update quantities you must resume the subscription first.</p></blockquote><p><a name="cancelling-subscriptions"></a></p><h3 id="cancelling-subscriptions" tabindex="-1"><a class="header-anchor" href="#cancelling-subscriptions" aria-hidden="true">#</a> Cancelling Subscriptions</h3><p>To cancel a subscription, call the <code>cancel</code> method on the user&#39;s subscription:</p><pre><code>$user-&gt;subscription(&#39;default&#39;)-&gt;cancel();
</code></pre><p>When a subscription is cancelled, Cashier will automatically set the <code>ends_at</code> column in your database. This column is used to know when the <code>subscribed</code> method should begin returning <code>false</code>. For example, if a customer cancels a subscription on March 1st, but the subscription was not scheduled to end until March 5th, the <code>subscribed</code> method will continue to return <code>true</code> until March 5th. This is done because a user is typically allowed to continue using an application until the end of their billing cycle.</p><p>You may determine if a user has cancelled their subscription but are still on their &quot;grace period&quot; using the <code>onGracePeriod</code> method:</p><pre><code>if ($user-&gt;subscription(&#39;default&#39;)-&gt;onGracePeriod()) {
    // ...
}
</code></pre><p>If you wish to cancel a subscription immediately, you may call the <code>cancelNow</code> method on the user&#39;s subscription:</p><pre><code>$user-&gt;subscription(&#39;default&#39;)-&gt;cancelNow();
</code></pre><blockquote><p><strong>Warning</strong><br> Paddle&#39;s subscriptions cannot be resumed after cancellation. If your customer wishes to resume their subscription, they will have to subscribe to a new subscription.</p></blockquote><p><a name="subscription-trials"></a></p><h2 id="subscription-trials" tabindex="-1"><a class="header-anchor" href="#subscription-trials" aria-hidden="true">#</a> Subscription Trials</h2><p><a name="with-payment-method-up-front"></a></p><h3 id="with-payment-method-up-front" tabindex="-1"><a class="header-anchor" href="#with-payment-method-up-front" aria-hidden="true">#</a> With Payment Method Up Front</h3><blockquote><p><strong>Warning</strong><br> While trialing and collecting payment method details up front, Paddle prevents any subscription changes such as swapping plans or updating quantities. If you want to allow a customer to swap plans during a trial the subscription must be cancelled and recreated.</p></blockquote><p>If you would like to offer trial periods to your customers while still collecting payment method information up front, you should use the <code>trialDays</code> method when creating your subscription pay links:</p><pre><code>use Illuminate\\Http\\Request;

Route::get(&#39;/user/subscribe&#39;, function (Request $request) {
    $payLink = $request-&gt;user()-&gt;newSubscription(&#39;default&#39;, $monthly = 12345)
                -&gt;returnTo(route(&#39;home&#39;))
                -&gt;trialDays(10)
                -&gt;create();

    return view(&#39;billing&#39;, [&#39;payLink&#39; =&gt; $payLink]);
});
</code></pre><p>This method will set the trial period ending date on the subscription record within your application&#39;s database, as well as instruct Paddle to not begin billing the customer until after this date.</p><blockquote><p><strong>Warning</strong><br> If the customer&#39;s subscription is not cancelled before the trial ending date they will be charged as soon as the trial expires, so you should be sure to notify your users of their trial ending date.</p></blockquote><p>You may determine if the user is within their trial period using either the <code>onTrial</code> method of the user instance or the <code>onTrial</code> method of the subscription instance. The two examples below are equivalent:</p><pre><code>if ($user-&gt;onTrial(&#39;default&#39;)) {
    // ...
}

if ($user-&gt;subscription(&#39;default&#39;)-&gt;onTrial()) {
    // ...
}
</code></pre><p>To determine if an existing trial has expired, you may use the <code>hasExpiredTrial</code> methods:</p><pre><code>if ($user-&gt;hasExpiredTrial(&#39;default&#39;)) {
    // ...
}

if ($user-&gt;subscription(&#39;default&#39;)-&gt;hasExpiredTrial()) {
    // ...
}
</code></pre><p><a name="defining-trial-days-in-paddle-cashier"></a></p><h4 id="defining-trial-days-in-paddle-cashier" tabindex="-1"><a class="header-anchor" href="#defining-trial-days-in-paddle-cashier" aria-hidden="true">#</a> Defining Trial Days In Paddle / Cashier</h4><p>You may choose to define how many trial days your plan&#39;s receive in the Paddle dashboard or always pass them explicitly using Cashier. If you choose to define your plan&#39;s trial days in Paddle you should be aware that new subscriptions, including new subscriptions for a customer that had a subscription in the past, will always receive a trial period unless you explicitly call the <code>trialDays(0)</code> method.</p><p><a name="without-payment-method-up-front"></a></p><h3 id="without-payment-method-up-front" tabindex="-1"><a class="header-anchor" href="#without-payment-method-up-front" aria-hidden="true">#</a> Without Payment Method Up Front</h3><p>If you would like to offer trial periods without collecting the user&#39;s payment method information up front, you may set the <code>trial_ends_at</code> column on the customer record attached to your user to your desired trial ending date. This is typically done during user registration:</p><pre><code>use App\\Models\\User;

$user = User::create([
    // ...
]);

$user-&gt;createAsCustomer([
    &#39;trial_ends_at&#39; =&gt; now()-&gt;addDays(10)
]);
</code></pre><p>Cashier refers to this type of trial as a &quot;generic trial&quot;, since it is not attached to any existing subscription. The <code>onTrial</code> method on the <code>User</code> instance will return <code>true</code> if the current date is not past the value of <code>trial_ends_at</code>:</p><pre><code>if ($user-&gt;onTrial()) {
    // User is within their trial period...
}
</code></pre><p>Once you are ready to create an actual subscription for the user, you may use the <code>newSubscription</code> method as usual:</p><pre><code>use Illuminate\\Http\\Request;

Route::get(&#39;/user/subscribe&#39;, function (Request $request) {
    $payLink = $user-&gt;newSubscription(&#39;default&#39;, $monthly = 12345)
        -&gt;returnTo(route(&#39;home&#39;))
        -&gt;create();

    return view(&#39;billing&#39;, [&#39;payLink&#39; =&gt; $payLink]);
});
</code></pre><p>To retrieve the user&#39;s trial ending date, you may use the <code>trialEndsAt</code> method. This method will return a Carbon date instance if a user is on a trial or <code>null</code> if they aren&#39;t. You may also pass an optional subscription name parameter if you would like to get the trial ending date for a specific subscription other than the default one:</p><pre><code>if ($user-&gt;onTrial()) {
    $trialEndsAt = $user-&gt;trialEndsAt(&#39;main&#39;);
}
</code></pre><p>You may use the <code>onGenericTrial</code> method if you wish to know specifically that the user is within their &quot;generic&quot; trial period and has not created an actual subscription yet:</p><pre><code>if ($user-&gt;onGenericTrial()) {
    // User is within their &quot;generic&quot; trial period...
}
</code></pre><blockquote><p><strong>Warning</strong><br> There is no way to extend or modify a trial period on a Paddle subscription after it has been created.</p></blockquote><p><a name="handling-paddle-webhooks"></a></p><h2 id="handling-paddle-webhooks" tabindex="-1"><a class="header-anchor" href="#handling-paddle-webhooks" aria-hidden="true">#</a> Handling Paddle Webhooks</h2><p>Paddle can notify your application of a variety of events via webhooks. By default, a route that points to Cashier&#39;s webhook controller is registered by the Cashier service provider. This controller will handle all incoming webhook requests.</p>`,76),Z={href:"https://vendors.paddle.com/recover-settings#dunning-form-id",target:"_blank",rel:"noopener noreferrer"},ee={href:"https://vendors.paddle.com/alerts-webhooks",target:"_blank",rel:"noopener noreferrer"},ae=a("code",null,"/paddle/webhook",-1),ne=i(`<ul><li>Subscription Created</li><li>Subscription Updated</li><li>Subscription Cancelled</li><li>Payment Succeeded</li><li>Subscription Payment Succeeded</li></ul><blockquote><p><strong>Warning</strong><br> Make sure you protect incoming requests with Cashier&#39;s included <a href="./cashier-paddle#verifying-webhook-signatures">webhook signature verification</a> middleware.</p></blockquote><p><a name="webhooks-csrf-protection"></a></p><h4 id="webhooks-csrf-protection" tabindex="-1"><a class="header-anchor" href="#webhooks-csrf-protection" aria-hidden="true">#</a> Webhooks &amp; CSRF Protection</h4><p>Since Paddle webhooks need to bypass Laravel&#39;s <a href="./csrf">CSRF protection</a>, be sure to list the URI as an exception in your <code>App\\Http\\Middleware\\VerifyCsrfToken</code> middleware or list the route outside of the <code>web</code> middleware group:</p><pre><code>protected $except = [
    &#39;paddle/*&#39;,
];
</code></pre><p><a name="webhooks-local-development"></a></p><h4 id="webhooks-local-development" tabindex="-1"><a class="header-anchor" href="#webhooks-local-development" aria-hidden="true">#</a> Webhooks &amp; Local Development</h4>`,8),te={href:"https://ngrok.com/",target:"_blank",rel:"noopener noreferrer"},ie={href:"https://expose.dev/docs/introduction",target:"_blank",rel:"noopener noreferrer"},se=a("a",{href:"./sail"},"Laravel Sail",-1),oe=a("a",{href:"./sail#sharing-your-site"},"site sharing command",-1),re=i(`<p><a name="defining-webhook-event-handlers"></a></p><h3 id="defining-webhook-event-handlers" tabindex="-1"><a class="header-anchor" href="#defining-webhook-event-handlers" aria-hidden="true">#</a> Defining Webhook Event Handlers</h3><p>Cashier automatically handles subscription cancellation on failed charges and other common Paddle webhooks. However, if you have additional webhook events you would like to handle, you may do so by listening to the following events that are dispatched by Cashier:</p><ul><li><code>Laravel\\Paddle\\Events\\WebhookReceived</code></li><li><code>Laravel\\Paddle\\Events\\WebhookHandled</code></li></ul><p>Both events contain the full payload of the Paddle webhook. For example, if you wish to handle the <code>invoice.payment_succeeded</code> webhook, you may register a <a href="./events#defining-listeners">listener</a> that will handle the event:</p><pre><code>&lt;?php

namespace App\\Listeners;

use Laravel\\Paddle\\Events\\WebhookReceived;

class PaddleEventListener
{
    /**
     * Handle received Paddle webhooks.
     */
    public function handle(WebhookReceived $event): void
    {
        if ($event-&gt;payload[&#39;alert_name&#39;] === &#39;payment_succeeded&#39;) {
            // Handle the incoming event...
        }
    }
}
</code></pre><p>Once your listener has been defined, you may register it within your application&#39;s <code>EventServiceProvider</code>:</p><pre><code>&lt;?php

namespace App\\Providers;

use App\\Listeners\\PaddleEventListener;
use Illuminate\\Foundation\\Support\\Providers\\EventServiceProvider as ServiceProvider;
use Laravel\\Paddle\\Events\\WebhookReceived;

class EventServiceProvider extends ServiceProvider
{
    protected $listen = [
        WebhookReceived::class =&gt; [
            PaddleEventListener::class,
        ],
    ];
}
</code></pre><p>Cashier also emit events dedicated to the type of the received webhook. In addition to the full payload from Paddle, they also contain the relevant models that were used to process the webhook such as the billable model, the subscription, or the receipt:</p>`,9),de=a("div",{class:"content-list",markdown:"1"},[a("ul",null,[a("li",null,[a("code",null,"Laravel\\Paddle\\Events\\PaymentSucceeded")]),a("li",null,[a("code",null,"Laravel\\Paddle\\Events\\SubscriptionPaymentSucceeded")]),a("li",null,[a("code",null,"Laravel\\Paddle\\Events\\SubscriptionCreated")]),a("li",null,[a("code",null,"Laravel\\Paddle\\Events\\SubscriptionUpdated")]),a("li",null,[a("code",null,"Laravel\\Paddle\\Events\\SubscriptionCancelled")])])],-1),le=i(`<p>You can also override the default, built-in webhook route by defining the <code>CASHIER_WEBHOOK</code> environment variable in your application&#39;s <code>.env</code> file. This value should be the full URL to your webhook route and needs to match the URL set in your Paddle control panel:</p><div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code><span class="token key attr-name">CASHIER_WEBHOOK</span><span class="token punctuation">=</span><span class="token value attr-value">https://example.com/my-paddle-webhook-url</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a name="verifying-webhook-signatures"></a></p><h3 id="verifying-webhook-signatures" tabindex="-1"><a class="header-anchor" href="#verifying-webhook-signatures" aria-hidden="true">#</a> Verifying Webhook Signatures</h3>`,4),ce={href:"https://developer.paddle.com/webhook-reference/verifying-webhooks",target:"_blank",rel:"noopener noreferrer"},ue=i(`<p>To enable webhook verification, ensure that the <code>PADDLE_PUBLIC_KEY</code> environment variable is defined in your application&#39;s <code>.env</code> file. The public key may be retrieved from your Paddle account dashboard.</p><p><a name="single-charges"></a></p><h2 id="single-charges" tabindex="-1"><a class="header-anchor" href="#single-charges" aria-hidden="true">#</a> Single Charges</h2><p><a name="simple-charge"></a></p><h3 id="simple-charge" tabindex="-1"><a class="header-anchor" href="#simple-charge" aria-hidden="true">#</a> Simple Charge</h3><p>If you would like to make a one-time charge against a customer, you may use the <code>charge</code> method on a billable model instance to generate a pay link for the charge. The <code>charge</code> method accepts the charge amount (float) as its first argument and a charge description as its second argument:</p><pre><code>use Illuminate\\Http\\Request;

Route::get(&#39;/store&#39;, function (Request $request) {
    return view(&#39;store&#39;, [
        &#39;payLink&#39; =&gt; $user-&gt;charge(12.99, &#39;Action Figure&#39;)
    ]);
});
</code></pre><p>After generating the pay link, you may use Cashier&#39;s provided <code>paddle-button</code> Blade component to allow the user to initiate the Paddle widget and complete the charge:</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>&lt;x-paddle-button :url=&quot;$payLink&quot; class=&quot;px-8 py-4&quot;&gt;
    Buy
&lt;/x-paddle-button&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),pe=a("code",null,"charge",-1),he={href:"https://developer.paddle.com/api-reference/product-api/pay-links/createpaylink",target:"_blank",rel:"noopener noreferrer"},me=i(`<pre><code>$payLink = $user-&gt;charge(12.99, &#39;Action Figure&#39;, [
    &#39;custom_option&#39; =&gt; $value,
]);
</code></pre><p>Charges happen in the currency specified in the <code>cashier.currency</code> configuration option. By default, this is set to USD. You may override the default currency by defining the <code>CASHIER_CURRENCY</code> environment variable in your application&#39;s <code>.env</code> file:</p><div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code><span class="token key attr-name">CASHIER_CURRENCY</span><span class="token punctuation">=</span><span class="token value attr-value">EUR</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,3),ge={href:"https://developer.paddle.com/api-reference/product-api/pay-links/createpaylink#price-overrides",target:"_blank",rel:"noopener noreferrer"},be=i(`<pre><code>$payLink = $user-&gt;charge([
    &#39;USD:19.99&#39;,
    &#39;EUR:15.99&#39;,
], &#39;Action Figure&#39;);
</code></pre><p><a name="charging-products"></a></p><h3 id="charging-products" tabindex="-1"><a class="header-anchor" href="#charging-products" aria-hidden="true">#</a> Charging Products</h3><p>If you would like to make a one-time charge against a specific product configured within Paddle, you may use the <code>chargeProduct</code> method on a billable model instance to generate a pay link:</p><pre><code>use Illuminate\\Http\\Request;

Route::get(&#39;/store&#39;, function (Request $request) {
    return view(&#39;store&#39;, [
        &#39;payLink&#39; =&gt; $request-&gt;user()-&gt;chargeProduct($productId = 123)
    ]);
});
</code></pre><p>Then, you may provide the pay link to the <code>paddle-button</code> component to allow the user to initialize the Paddle widget:</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>&lt;x-paddle-button :url=&quot;$payLink&quot; class=&quot;px-8 py-4&quot;&gt;
    Buy
&lt;/x-paddle-button&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),ye=a("code",null,"chargeProduct",-1),fe={href:"https://developer.paddle.com/api-reference/product-api/pay-links/createpaylink",target:"_blank",rel:"noopener noreferrer"},ve=i(`<pre><code>$payLink = $user-&gt;chargeProduct($productId, [
    &#39;custom_option&#39; =&gt; $value,
]);
</code></pre><p><a name="refunding-orders"></a></p><h3 id="refunding-orders" tabindex="-1"><a class="header-anchor" href="#refunding-orders" aria-hidden="true">#</a> Refunding Orders</h3><p>If you need to refund a Paddle order, you may use the <code>refund</code> method. This method accepts the Paddle order ID as its first argument. You may retrieve the receipts for a given billable model using the <code>receipts</code> method:</p><pre><code>use App\\Models\\User;

$user = User::find(1);

$receipt = $user-&gt;receipts()-&gt;first();

$refundRequestId = $user-&gt;refund($receipt-&gt;order_id);
</code></pre><p>You may optionally specify a specific amount to refund as well as a reason for the refund:</p><pre><code>$receipt = $user-&gt;receipts()-&gt;first();

$refundRequestId = $user-&gt;refund(
    $receipt-&gt;order_id, 5.00, &#39;Unused product time&#39;
);
</code></pre><blockquote><p><strong>Note</strong><br> You can use the <code>$refundRequestId</code> as a reference for the refund when contacting Paddle support.</p></blockquote><p><a name="receipts"></a></p><h2 id="receipts" tabindex="-1"><a class="header-anchor" href="#receipts" aria-hidden="true">#</a> Receipts</h2><p>You may easily retrieve an array of a billable model&#39;s receipts via the <code>receipts</code> property:</p><pre><code>use App\\Models\\User;

$user = User::find(1);

$receipts = $user-&gt;receipts;
</code></pre><p>When listing the receipts for the customer, you may use the receipt instance&#39;s methods to display the relevant receipt information. For example, you may wish to list every receipt in a table, allowing the user to easily download any of the receipts:</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>table</span><span class="token punctuation">&gt;</span></span>
    @foreach ($receipts as $receipt)
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span>{{ $receipt-&gt;paid_at-&gt;toFormattedDateString() }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span>{{ $receipt-&gt;amount() }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{{ $receipt-&gt;receipt_url }}<span class="token punctuation">&quot;</span></span> <span class="token attr-name">target</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>_blank<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Download<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">&gt;</span></span>
    @endforeach
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>table</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="past-and-upcoming-payments"></a></p><h3 id="past-upcoming-payments" tabindex="-1"><a class="header-anchor" href="#past-upcoming-payments" aria-hidden="true">#</a> Past &amp; Upcoming Payments</h3><p>You may use the <code>lastPayment</code> and <code>nextPayment</code> methods to retrieve and display a customer&#39;s past or upcoming payments for recurring subscriptions:</p><pre><code>use App\\Models\\User;

$user = User::find(1);

$subscription = $user-&gt;subscription(&#39;default&#39;);

$lastPayment = $subscription-&gt;lastPayment();
$nextPayment = $subscription-&gt;nextPayment();
</code></pre><p>Both of these methods will return an instance of <code>Laravel\\Paddle\\Payment</code>; however, <code>nextPayment</code> will return <code>null</code> when the billing cycle has ended (such as when a subscription has been cancelled):</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>Next payment: {{ $nextPayment-&gt;amount() }} due on {{ $nextPayment-&gt;date()-&gt;format(&#39;d/m/Y&#39;) }}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a name="handling-failed-payments"></a></p><h2 id="handling-failed-payments" tabindex="-1"><a class="header-anchor" href="#handling-failed-payments" aria-hidden="true">#</a> Handling Failed Payments</h2>`,22),ke={href:"https://vendors.paddle.com/subscription-settings",target:"_blank",rel:"noopener noreferrer"},we=i(`<p>Alternatively, you can perform more precise customization by <a href="./events">listening</a> for the <code>subscription_payment_failed</code> Paddle event via the <code>WebhookReceived</code> event dispatched by Cashier. You should also ensure the &quot;Subscription Payment Failed&quot; option is enabled in the Webhook settings of your Paddle dashboard:</p><pre><code>&lt;?php

namespace App\\Listeners;

use Laravel\\Paddle\\Events\\WebhookReceived;

class PaddleEventListener
{
    /**
     * Handle received Paddle webhooks.
     */
    public function handle(WebhookReceived $event): void
    {
        if ($event-&gt;payload[&#39;alert_name&#39;] === &#39;subscription_payment_failed&#39;) {
            // Handle the failed subscription payment...
        }
    }
}
</code></pre><p>Once your listener has been defined, you should register it within your application&#39;s <code>EventServiceProvider</code>:</p><pre><code>&lt;?php

namespace App\\Providers;

use App\\Listeners\\PaddleEventListener;
use Illuminate\\Foundation\\Support\\Providers\\EventServiceProvider as ServiceProvider;
use Laravel\\Paddle\\Events\\WebhookReceived;

class EventServiceProvider extends ServiceProvider
{
    protected $listen = [
        WebhookReceived::class =&gt; [
            PaddleEventListener::class,
        ],
    ];
}
</code></pre><p><a name="testing"></a></p><h2 id="testing" tabindex="-1"><a class="header-anchor" href="#testing" aria-hidden="true">#</a> Testing</h2><p>While testing, you should manually test your billing flow to make sure your integration works as expected.</p><p>For automated tests, including those executed within a CI environment, you may use <a href="./http-client#testing">Laravel&#39;s HTTP Client</a> to fake HTTP calls made to Paddle. Although this does not test the actual responses from Paddle, it does provide a way to test your application without actually calling Paddle&#39;s API.</p>`,8);function Pe(s,_e){const n=r("ExternalLinkIcon");return d(),l("div",null,[p,a("p",null,[a("a",h,[e("Laravel Cashier Paddle"),t(n)]),e(" provides an expressive, fluent interface to "),a("a",m,[e("Paddle's"),t(n)]),e(' subscription billing services. It handles almost all of the boilerplate subscription billing code you are dreading. In addition to basic subscription management, Cashier can handle: coupons, swapping subscription, subscription "quantities", cancellation grace periods, and more.')]),a("p",null,[e("While working with Cashier we recommend you also review Paddle's "),a("a",g,[e("user guides"),t(n)]),e(" and "),a("a",b,[e("API documentation"),t(n)]),e(".")]),y,f,a("p",null,[e("When upgrading to a new version of Cashier, it's important that you carefully review "),a("a",v,[e("the upgrade guide"),t(n)]),e(".")]),k,a("p",null,[e("During local and staging development, you should "),a("a",w,[e("register a Paddle Sandbox account"),t(n)]),e(". This account will give you a sandboxed environment to test and develop your applications without making actual payments. You may use Paddle's "),a("a",P,[e("test card numbers"),t(n)]),e(" to simulate various payment scenarios.")]),_,a("p",null,[e("After you have finished developing your application you may "),a("a",$,[e("apply for a Paddle vendor account"),t(n)]),e(". Before your application is placed into production, Paddle will need to approve your application's domain.")]),q,a("p",null,[e("In addition to configuring Cashier's currency, you may also specify a locale to be used when formatting money values for display on invoices. Internally, Cashier utilizes "),a("a",x,[e("PHP's "),S,e(" class"),t(n)]),e(" to set the currency locale:")]),C,a("p",null,[e("Paddle lacks an extensive CRUD API to perform subscription state changes. Therefore, most interactions with Paddle are done through its "),a("a",T,[e("checkout widget"),t(n)]),e('. Before we can display the checkout widget, we must generate a "pay link" using Cashier. A "pay link" will inform the checkout widget of the billing operation we wish to perform:')]),I,a("p",null,[e("For more information on pay links, you may review "),a("a",L,[e("the Paddle API documentation on pay link generation"),t(n)]),e(".")]),R,a("pre",null,[a("code",null,'<a href="#!" class="ml-4 paddle_button" data-override="'+c(s.$payLink)+`">
    Paddle Checkout
</a>
`,1)]),A,a("p",null,[e("Please consult Paddle's "),a("a",E,[e("guide on Inline Checkout"),t(n)]),e(" as well as their "),a("a",U,[e("parameter reference"),t(n)]),e(" for further details on the inline checkout's available options.")]),W,a("p",null,[e("Next, you may use Paddle.js to initialize the checkout. To keep this example simple, we will demonstrate this using "),a("a",D,[e("Alpine.js"),t(n)]),e("; however, you are free to translate this example to your own frontend stack:")]),M,a("p",null,[e("For more information, "),a("a",B,[e("check Paddle's API documentation on prices"),t(n)]),e(".")]),H,a("p",null,[e("If you would like to specify additional customer or subscription details, you may do so by passing them as an array of key / value pairs to the "),Y,e(" method. To learn more about the additional fields supported by Paddle, check out Paddle's documentation on "),a("a",F,[e("generating pay links"),t(n)]),e(":")]),N,a("p",null,[e("When a subscription is past due, you should instruct the user to "),O,e(". You may configure how past due subscriptions are handled in your "),a("a",G,[e("Paddle subscription settings"),t(n)]),e(".")]),j,a("blockquote",null,[a("p",null,[Q,V,e(" Plans may not be swapped when a trial is active. For additional information regarding this limitation, please see the "),a("a",z,[e("Paddle documentation"),t(n)]),e(".")])]),J,a("p",null,[e("Subscription modifiers allow you to implement "),a("a",K,[e("metered billing"),t(n)]),e(" or extend subscriptions with add-ons.")]),X,a("p",null,[e("By default, this controller will automatically handle cancelling subscriptions that have too many failed charges ("),a("a",Z,[e("as defined by your Paddle dunning settings"),t(n)]),e("), subscription updates, and payment method changes; however, as we'll soon discover, you can extend this controller to handle any Paddle webhook event you like.")]),a("p",null,[e("To ensure your application can handle Paddle webhooks, be sure to "),a("a",ee,[e("configure the webhook URL in the Paddle control panel"),t(n)]),e(". By default, Cashier's webhook controller responds to the "),ae,e(" URL path. The full list of all webhooks you should enable in the Paddle control panel are:")]),ne,a("p",null,[e("For Paddle to be able to send your application webhooks during local development, you will need to expose your application via a site sharing service such as "),a("a",te,[e("Ngrok"),t(n)]),e(" or "),a("a",ie,[e("Expose"),t(n)]),e(". If you are developing your application locally using "),se,e(", you may use Sail's "),oe,e(".")]),re,de,le,a("p",null,[e("To secure your webhooks, you may use "),a("a",ce,[e("Paddle's webhook signatures"),t(n)]),e(". For convenience, Cashier automatically includes a middleware which validates that the incoming Paddle webhook request is valid.")]),ue,a("p",null,[e("The "),pe,e(" method accepts an array as its third argument, allowing you to pass any options you wish to the underlying Paddle pay link creation. Please consult "),a("a",he,[e("the Paddle documentation"),t(n)]),e(" to learn more about the options available to you when creating charges:")]),me,a("p",null,[e("You can also "),a("a",ge,[e("override prices per currency"),t(n)]),e(" using Paddle's dynamic pricing matching system. To do so, pass an array of prices instead of a fixed amount:")]),be,a("p",null,[e("The "),ye,e(" method accepts an array as its second argument, allowing you to pass any options you wish to the underlying Paddle pay link creation. Please consult "),a("a",fe,[e("the Paddle documentation"),t(n)]),e(" regarding the options that are available to you when creating charges:")]),ve,a("p",null,[e("Subscription payments fail for various reasons, such as expired cards or a card having insufficient funds. When this happens, we recommend that you let Paddle handle payment failures for you. Specifically, you may "),a("a",ke,[e("setup Paddle's automatic billing emails"),t(n)]),e(" in your Paddle dashboard.")]),we])}const xe=o(u,[["render",Pe],["__file","cashier-paddle.html.vue"]]);export{xe as default};
