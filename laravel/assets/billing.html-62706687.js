import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{r as i,o as r,c,b as e,d as t,e as a,a as o}from"./app-06635a3b.js";const p={},d=o('<h1 id="laravel-cashier-stripe" tabindex="-1"><a class="header-anchor" href="#laravel-cashier-stripe" aria-hidden="true">#</a> Laravel Cashier (Stripe)</h1><ul><li><a href="#introduction">Introduction</a></li><li><a href="#upgrading-cashier">Upgrading Cashier</a></li><li><a href="#installation">Installation</a><ul><li><a href="#database-migrations">Database Migrations</a></li></ul></li><li><a href="#configuration">Configuration</a><ul><li><a href="#billable-model">Billable Model</a></li><li><a href="#api-keys">API Keys</a></li><li><a href="#currency-configuration">Currency Configuration</a></li><li><a href="#tax-configuration">Tax Configuration</a></li><li><a href="#logging">Logging</a></li><li><a href="#using-custom-models">Using Custom Models</a></li></ul></li><li><a href="#customers">Customers</a><ul><li><a href="#retrieving-customers">Retrieving Customers</a></li><li><a href="#creating-customers">Creating Customers</a></li><li><a href="#updating-customers">Updating Customers</a></li><li><a href="#balances">Balances</a></li><li><a href="#tax-ids">Tax IDs</a></li><li><a href="#syncing-customer-data-with-stripe">Syncing Customer Data With Stripe</a></li><li><a href="#billing-portal">Billing Portal</a></li></ul></li><li><a href="#payment-methods">Payment Methods</a><ul><li><a href="#storing-payment-methods">Storing Payment Methods</a></li><li><a href="#retrieving-payment-methods">Retrieving Payment Methods</a></li><li><a href="#check-for-a-payment-method">Determining If A User Has A Payment Method</a></li><li><a href="#updating-the-default-payment-method">Updating The Default Payment Method</a></li><li><a href="#adding-payment-methods">Adding Payment Methods</a></li><li><a href="#deleting-payment-methods">Deleting Payment Methods</a></li></ul></li><li><a href="#subscriptions">Subscriptions</a><ul><li><a href="#creating-subscriptions">Creating Subscriptions</a></li><li><a href="#checking-subscription-status">Checking Subscription Status</a></li><li><a href="#changing-prices">Changing Prices</a></li><li><a href="#subscription-quantity">Subscription Quantity</a></li><li><a href="#subscriptions-with-multiple-products">Subscriptions With Multiple Products</a></li><li><a href="#multiple-subscriptions">Multiple Subscriptions</a></li><li><a href="#metered-billing">Metered Billing</a></li><li><a href="#subscription-taxes">Subscription Taxes</a></li><li><a href="#subscription-anchor-date">Subscription Anchor Date</a></li><li><a href="#cancelling-subscriptions">Canceling Subscriptions</a></li><li><a href="#resuming-subscriptions">Resuming Subscriptions</a></li></ul></li><li><a href="#subscription-trials">Subscription Trials</a><ul><li><a href="#with-payment-method-up-front">With Payment Method Up Front</a></li><li><a href="#without-payment-method-up-front">Without Payment Method Up Front</a></li><li><a href="#extending-trials">Extending Trials</a></li></ul></li><li><a href="#handling-stripe-webhooks">Handling Stripe Webhooks</a><ul><li><a href="#defining-webhook-event-handlers">Defining Webhook Event Handlers</a></li><li><a href="#verifying-webhook-signatures">Verifying Webhook Signatures</a></li></ul></li><li><a href="#single-charges">Single Charges</a><ul><li><a href="#simple-charge">Simple Charge</a></li><li><a href="#charge-with-invoice">Charge With Invoice</a></li><li><a href="#creating-payment-intents">Creating Payment Intents</a></li><li><a href="#refunding-charges">Refunding Charges</a></li></ul></li><li><a href="#checkout">Checkout</a><ul><li><a href="#product-checkouts">Product Checkouts</a></li><li><a href="#single-charge-checkouts">Single Charge Checkouts</a></li><li><a href="#subscription-checkouts">Subscription Checkouts</a></li><li><a href="#collecting-tax-ids">Collecting Tax IDs</a></li><li><a href="#guest-checkouts">Guest Checkouts</a></li></ul></li><li><a href="#invoices">Invoices</a><ul><li><a href="#retrieving-invoices">Retrieving Invoices</a></li><li><a href="#upcoming-invoices">Upcoming Invoices</a></li><li><a href="#previewing-subscription-invoices">Previewing Subscription Invoices</a></li><li><a href="#generating-invoice-pdfs">Generating Invoice PDFs</a></li></ul></li><li><a href="#handling-failed-payments">Handling Failed Payments</a><ul><li><a href="#confirming-payments">Confirming Payments</a></li></ul></li><li><a href="#strong-customer-authentication">Strong Customer Authentication (SCA)</a><ul><li><a href="#payments-requiring-additional-confirmation">Payments Requiring Additional Confirmation</a></li><li><a href="#off-session-payment-notifications">Off-session Payment Notifications</a></li></ul></li><li><a href="#stripe-sdk">Stripe SDK</a></li><li><a href="#testing">Testing</a></li></ul><p><a name="introduction"></a></p><h2 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h2>',4),u={href:"https://github.com/laravel/cashier-stripe",target:"_blank",rel:"noopener noreferrer"},l={href:"https://stripe.com",target:"_blank",rel:"noopener noreferrer"},h=e("p",null,[e("a",{name:"upgrading-cashier"})],-1),m=e("h2",{id:"upgrading-cashier",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#upgrading-cashier","aria-hidden":"true"},"#"),t(" Upgrading Cashier")],-1),g={href:"https://github.com/laravel/cashier-stripe/blob/master/UPGRADE.md",target:"_blank",rel:"noopener noreferrer"},b=o(`<blockquote><p><strong>Warning</strong><br> To prevent breaking changes, Cashier uses a fixed Stripe API version. Cashier 14 utilizes Stripe API version <code>2022-11-15</code>. The Stripe API version will be updated on minor releases in order to make use of new Stripe features and improvements.</p></blockquote><p><a name="installation"></a></p><h2 id="installation" tabindex="-1"><a class="header-anchor" href="#installation" aria-hidden="true">#</a> Installation</h2><p>First, install the Cashier package for Stripe using the Composer package manager:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">composer</span> require laravel/cashier
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p><strong>Warning</strong><br> To ensure Cashier properly handles all Stripe events, remember to <a href="#handling-stripe-webhooks">set up Cashier&#39;s webhook handling</a>.</p></blockquote><p><a name="database-migrations"></a></p><h3 id="database-migrations" tabindex="-1"><a class="header-anchor" href="#database-migrations" aria-hidden="true">#</a> Database Migrations</h3><p>Cashier&#39;s service provider registers its own database migration directory, so remember to migrate your database after installing the package. The Cashier migrations will add several columns to your <code>users</code> table. It will also create a new <code>subscriptions</code> table to hold all of your customer&#39;s subscriptions and a <code>subscription_items</code> table for subscriptions with multiple prices:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan migrate
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>If you need to overwrite the migrations that ship with Cashier, you can publish them using the <code>vendor:publish</code> Artisan command:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan vendor:publish <span class="token parameter variable">--tag</span><span class="token operator">=</span><span class="token string">&quot;cashier-migrations&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>If you would like to prevent Cashier&#39;s migrations from running entirely, you may use the <code>ignoreMigrations</code> method provided by Cashier. Typically, this method should be called in the <code>register</code> method of your <code>AppServiceProvider</code>:</p><pre><code>use Laravel\\Cashier\\Cashier;

/**
 * Register any application services.
 */
public function register(): void
{
    Cashier::ignoreMigrations();
}
</code></pre>`,14),y=e("strong",null,"Warning",-1),f=e("br",null,null,-1),v=e("code",null,"stripe_id",-1),k=e("code",null,"utf8_bin",-1),w={href:"https://stripe.com/docs/upgrades#what-changes-does-stripe-consider-to-be-backwards-compatible",target:"_blank",rel:"noopener noreferrer"},_=o(`<p><a name="configuration"></a></p><h2 id="configuration" tabindex="-1"><a class="header-anchor" href="#configuration" aria-hidden="true">#</a> Configuration</h2><p><a name="billable-model"></a></p><h3 id="billable-model" tabindex="-1"><a class="header-anchor" href="#billable-model" aria-hidden="true">#</a> Billable Model</h3><p>Before using Cashier, add the <code>Billable</code> trait to your billable model definition. Typically, this will be the <code>App\\Models\\User</code> model. This trait provides various methods to allow you to perform common billing tasks, such as creating subscriptions, applying coupons, and updating payment method information:</p><pre><code>use Laravel\\Cashier\\Billable;

class User extends Authenticatable
{
    use Billable;
}
</code></pre><p>Cashier assumes your billable model will be the <code>App\\Models\\User</code> class that ships with Laravel. If you wish to change this you may specify a different model via the <code>useCustomerModel</code> method. This method should typically be called in the <code>boot</code> method of your <code>AppServiceProvider</code> class:</p><pre><code>use App\\Models\\Cashier\\User;
use Laravel\\Cashier\\Cashier;

/**
 * Bootstrap any application services.
 */
public function boot(): void
{
    Cashier::useCustomerModel(User::class);
}
</code></pre><blockquote><p><strong>Warning</strong><br> If you&#39;re using a model other than Laravel&#39;s supplied <code>App\\Models\\User</code> model, you&#39;ll need to publish and alter the <a href="#installation">Cashier migrations</a> provided to match your alternative model&#39;s table name.</p></blockquote><p><a name="api-keys"></a></p><h3 id="api-keys" tabindex="-1"><a class="header-anchor" href="#api-keys" aria-hidden="true">#</a> API Keys</h3><p>Next, you should configure your Stripe API keys in your application&#39;s <code>.env</code> file. You can retrieve your Stripe API keys from the Stripe control panel:</p><div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code><span class="token key attr-name">STRIPE_KEY</span><span class="token punctuation">=</span><span class="token value attr-value">your-stripe-key</span>
<span class="token key attr-name">STRIPE_SECRET</span><span class="token punctuation">=</span><span class="token value attr-value">your-stripe-secret</span>
<span class="token key attr-name">STRIPE_WEBHOOK_SECRET</span><span class="token punctuation">=</span><span class="token value attr-value">your-stripe-webhook-secret</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>Warning</strong><br> You should ensure that the <code>STRIPE_WEBHOOK_SECRET</code> environment variable is defined in your application&#39;s <code>.env</code> file, as this variable is used to ensure that incoming webhooks are actually from Stripe.</p></blockquote><p><a name="currency-configuration"></a></p><h3 id="currency-configuration" tabindex="-1"><a class="header-anchor" href="#currency-configuration" aria-hidden="true">#</a> Currency Configuration</h3><p>The default Cashier currency is United States Dollars (USD). You can change the default currency by setting the <code>CASHIER_CURRENCY</code> environment variable within your application&#39;s <code>.env</code> file:</p><div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code><span class="token key attr-name">CASHIER_CURRENCY</span><span class="token punctuation">=</span><span class="token value attr-value">eur</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,18),S={href:"https://www.php.net/manual/en/class.numberformatter.php",target:"_blank",rel:"noopener noreferrer"},q=e("code",null,"NumberFormatter",-1),x=o(`<div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code><span class="token key attr-name">CASHIER_CURRENCY_LOCALE</span><span class="token punctuation">=</span><span class="token value attr-value">nl_BE</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p><strong>Warning</strong><br> In order to use locales other than <code>en</code>, ensure the <code>ext-intl</code> PHP extension is installed and configured on your server.</p></blockquote><p><a name="tax-configuration"></a></p><h3 id="tax-configuration" tabindex="-1"><a class="header-anchor" href="#tax-configuration" aria-hidden="true">#</a> Tax Configuration</h3>`,4),$={href:"https://stripe.com/tax",target:"_blank",rel:"noopener noreferrer"},C=e("code",null,"calculateTaxes",-1),I=e("code",null,"boot",-1),T=e("code",null,"App\\Providers\\AppServiceProvider",-1),P=o(`<pre><code>use Laravel\\Cashier\\Cashier;

/**
 * Bootstrap any application services.
 */
public function boot(): void
{
    Cashier::calculateTaxes();
}
</code></pre><p>Once tax calculation has been enabled, any new subscriptions and any one-off invoices that are generated will receive automatic tax calculation.</p><p>For this feature to work properly, your customer&#39;s billing details, such as the customer&#39;s name, address, and tax ID, need to be synced to Stripe. You may use the <a href="#syncing-customer-data-with-stripe">customer data synchronization</a> and <a href="#tax-ids">Tax ID</a> methods offered by Cashier to accomplish this.</p><blockquote><p><strong>Warning</strong><br> No tax is calculated for <a href="#single-charges">single charges</a> or <a href="#single-charge-checkouts">single charge checkouts</a>.</p></blockquote><p><a name="logging"></a></p><h3 id="logging" tabindex="-1"><a class="header-anchor" href="#logging" aria-hidden="true">#</a> Logging</h3><p>Cashier allows you to specify the log channel to be used when logging fatal Stripe errors. You may specify the log channel by defining the <code>CASHIER_LOGGER</code> environment variable within your application&#39;s <code>.env</code> file:</p><div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code><span class="token key attr-name">CASHIER_LOGGER</span><span class="token punctuation">=</span><span class="token value attr-value">stack</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Exceptions that are generated by API calls to Stripe will be logged through your application&#39;s default log channel.</p><p><a name="using-custom-models"></a></p><h3 id="using-custom-models" tabindex="-1"><a class="header-anchor" href="#using-custom-models" aria-hidden="true">#</a> Using Custom Models</h3><p>You are free to extend the models used internally by Cashier by defining your own model and extending the corresponding Cashier model:</p><pre><code>use Laravel\\Cashier\\Subscription as CashierSubscription;

class Subscription extends CashierSubscription
{
    // ...
}
</code></pre><p>After defining your model, you may instruct Cashier to use your custom model via the <code>Laravel\\Cashier\\Cashier</code> class. Typically, you should inform Cashier about your custom models in the <code>boot</code> method of your application&#39;s <code>App\\Providers\\AppServiceProvider</code> class:</p><pre><code>use App\\Models\\Cashier\\Subscription;
use App\\Models\\Cashier\\SubscriptionItem;

/**
 * Bootstrap any application services.
 */
public function boot(): void
{
    Cashier::useSubscriptionModel(Subscription::class);
    Cashier::useSubscriptionItemModel(SubscriptionItem::class);
}
</code></pre><p><a name="customers"></a></p><h2 id="customers" tabindex="-1"><a class="header-anchor" href="#customers" aria-hidden="true">#</a> Customers</h2><p><a name="retrieving-customers"></a></p><h3 id="retrieving-customers" tabindex="-1"><a class="header-anchor" href="#retrieving-customers" aria-hidden="true">#</a> Retrieving Customers</h3><p>You can retrieve a customer by their Stripe ID using the <code>Cashier::findBillable</code> method. This method will return an instance of the billable model:</p><pre><code>use Laravel\\Cashier\\Cashier;

$user = Cashier::findBillable($stripeId);
</code></pre><p><a name="creating-customers"></a></p><h3 id="creating-customers" tabindex="-1"><a class="header-anchor" href="#creating-customers" aria-hidden="true">#</a> Creating Customers</h3><p>Occasionally, you may wish to create a Stripe customer without beginning a subscription. You may accomplish this using the <code>createAsStripeCustomer</code> method:</p><pre><code>$stripeCustomer = $user-&gt;createAsStripeCustomer();
</code></pre>`,25),R=e("code",null,"$options",-1),A={href:"https://stripe.com/docs/api/customers/create",target:"_blank",rel:"noopener noreferrer"},M=o(`<pre><code>$stripeCustomer = $user-&gt;createAsStripeCustomer($options);
</code></pre><p>You may use the <code>asStripeCustomer</code> method if you want to return the Stripe customer object for a billable model:</p><pre><code>$stripeCustomer = $user-&gt;asStripeCustomer();
</code></pre><p>The <code>createOrGetStripeCustomer</code> method may be used if you would like to retrieve the Stripe customer object for a given billable model but are not sure whether the billable model is already a customer within Stripe. This method will create a new customer in Stripe if one does not already exist:</p><pre><code>$stripeCustomer = $user-&gt;createOrGetStripeCustomer();
</code></pre><p><a name="updating-customers"></a></p><h3 id="updating-customers" tabindex="-1"><a class="header-anchor" href="#updating-customers" aria-hidden="true">#</a> Updating Customers</h3>`,7),D=e("code",null,"updateStripeCustomer",-1),E={href:"https://stripe.com/docs/api/customers/update",target:"_blank",rel:"noopener noreferrer"},U=o(`<pre><code>$stripeCustomer = $user-&gt;updateStripeCustomer($options);
</code></pre><p><a name="balances"></a></p><h3 id="balances" tabindex="-1"><a class="header-anchor" href="#balances" aria-hidden="true">#</a> Balances</h3><p>Stripe allows you to credit or debit a customer&#39;s &quot;balance&quot;. Later, this balance will be credited or debited on new invoices. To check the customer&#39;s total balance you may use the <code>balance</code> method that is available on your billable model. The <code>balance</code> method will return a formatted string representation of the balance in the customer&#39;s currency:</p><pre><code>$balance = $user-&gt;balance();
</code></pre><p>To credit a customer&#39;s balance, you may provide a value to the <code>creditBalance</code> method. If you wish, you may also provide a description:</p><pre><code>$user-&gt;creditBalance(500, &#39;Premium customer top-up.&#39;);
</code></pre><p>Providing a value to the <code>debitBalance</code> method will debit the customer&#39;s balance:</p><pre><code>$user-&gt;debitBalance(300, &#39;Bad usage penalty.&#39;);
</code></pre><p>The <code>applyBalance</code> method will create new customer balance transactions for the customer. You may retrieve these transaction records using the <code>balanceTransactions</code> method, which may be useful in order to provide a log of credits and debits for the customer to review:</p><pre><code>// Retrieve all transactions...
$transactions = $user-&gt;balanceTransactions();

foreach ($transactions as $transaction) {
    // Transaction amount...
    $amount = $transaction-&gt;amount(); // $2.31

    // Retrieve the related invoice when available...
    $invoice = $transaction-&gt;invoice();
}
</code></pre><p><a name="tax-ids"></a></p><h3 id="tax-ids" tabindex="-1"><a class="header-anchor" href="#tax-ids" aria-hidden="true">#</a> Tax IDs</h3>`,13),W=e("code",null,"taxIds",-1),F={href:"https://stripe.com/docs/api/customer_tax_ids/object",target:"_blank",rel:"noopener noreferrer"},B=e("pre",null,[e("code",null,`$taxIds = $user->taxIds();
`)],-1),L=e("p",null,"You can also retrieve a specific tax ID for a customer by its identifier:",-1),Y=e("pre",null,[e("code",null,`$taxId = $user->findTaxId('txi_belgium');
`)],-1),H={href:"https://stripe.com/docs/api/customer_tax_ids/object#tax_id_object-type",target:"_blank",rel:"noopener noreferrer"},O=e("code",null,"createTaxId",-1),N=e("pre",null,[e("code",null,`$taxId = $user->createTaxId('eu_vat', 'BE0123456789');
`)],-1),j=e("code",null,"createTaxId",-1),G={href:"https://stripe.com/docs/invoicing/customer/tax-ids#validation",target:"_blank",rel:"noopener noreferrer"},Q=e("code",null,"customer.tax_id.updated",-1),V={href:"https://stripe.com/docs/api/customer_tax_ids/object#tax_id_object-verification",target:"_blank",rel:"noopener noreferrer"},z=e("code",null,"verification",-1),K=e("a",{href:"#handling-stripe-webhooks"},"documentation on defining webhook handlers",-1),J=o(`<p>You may delete a tax ID using the <code>deleteTaxId</code> method:</p><pre><code>$user-&gt;deleteTaxId(&#39;txi_belgium&#39;);
</code></pre><p><a name="syncing-customer-data-with-stripe"></a></p><h3 id="syncing-customer-data-with-stripe" tabindex="-1"><a class="header-anchor" href="#syncing-customer-data-with-stripe" aria-hidden="true">#</a> Syncing Customer Data With Stripe</h3><p>Typically, when your application&#39;s users update their name, email address, or other information that is also stored by Stripe, you should inform Stripe of the updates. By doing so, Stripe&#39;s copy of the information will be in sync with your application&#39;s.</p><p>To automate this, you may define an event listener on your billable model that reacts to the model&#39;s <code>updated</code> event. Then, within your event listener, you may invoke the <code>syncStripeCustomerDetails</code> method on the model:</p><pre><code>use App\\Models\\User;
use function Illuminate\\Events\\queueable;

/**
 * The &quot;booted&quot; method of the model.
 */
protected static function booted(): void
{
    static::updated(queueable(function (User $customer) {
        if ($customer-&gt;hasStripeId()) {
            $customer-&gt;syncStripeCustomerDetails();
        }
    }));
}
</code></pre><p>Now, every time your customer model is updated, its information will be synced with Stripe. For convenience, Cashier will automatically sync your customer&#39;s information with Stripe on the initial creation of the customer.</p><p>You may customize the columns used for syncing customer information to Stripe by overriding a variety of methods provided by Cashier. For example, you may override the <code>stripeName</code> method to customize the attribute that should be considered the customer&#39;s &quot;name&quot; when Cashier syncs customer information to Stripe:</p><pre><code>/**
 * Get the customer name that should be synced to Stripe.
 */
public function stripeName(): string|null
{
    return $this-&gt;company_name;
}
</code></pre>`,10),X=e("code",null,"stripeEmail",-1),Z=e("code",null,"stripePhone",-1),ee=e("code",null,"stripeAddress",-1),te=e("code",null,"stripePreferredLocales",-1),ne={href:"https://stripe.com/docs/api/customers/update",target:"_blank",rel:"noopener noreferrer"},ae=e("code",null,"syncStripeCustomerDetails",-1),oe=e("p",null,[e("a",{name:"billing-portal"})],-1),se=e("h3",{id:"billing-portal",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#billing-portal","aria-hidden":"true"},"#"),t(" Billing Portal")],-1),ie={href:"https://stripe.com/docs/billing/subscriptions/customer-portal",target:"_blank",rel:"noopener noreferrer"},re=e("code",null,"redirectToBillingPortal",-1),ce=o(`<pre><code>use Illuminate\\Http\\Request;

Route::get(&#39;/billing-portal&#39;, function (Request $request) {
    return $request-&gt;user()-&gt;redirectToBillingPortal();
});
</code></pre><p>By default, when the user is finished managing their subscription, they will be able to return to the <code>home</code> route of your application via a link within the Stripe billing portal. You may provide a custom URL that the user should return to by passing the URL as an argument to the <code>redirectToBillingPortal</code> method:</p><pre><code>use Illuminate\\Http\\Request;

Route::get(&#39;/billing-portal&#39;, function (Request $request) {
    return $request-&gt;user()-&gt;redirectToBillingPortal(route(&#39;billing&#39;));
});
</code></pre><p>If you would like to generate the URL to the billing portal without generating an HTTP redirect response, you may invoke the <code>billingPortalUrl</code> method:</p><pre><code>$url = $request-&gt;user()-&gt;billingPortalUrl(route(&#39;billing&#39;));
</code></pre><p><a name="payment-methods"></a></p><h2 id="payment-methods" tabindex="-1"><a class="header-anchor" href="#payment-methods" aria-hidden="true">#</a> Payment Methods</h2><p><a name="storing-payment-methods"></a></p><h3 id="storing-payment-methods" tabindex="-1"><a class="header-anchor" href="#storing-payment-methods" aria-hidden="true">#</a> Storing Payment Methods</h3><p>In order to create subscriptions or perform &quot;one-off&quot; charges with Stripe, you will need to store a payment method and retrieve its identifier from Stripe. The approach used to accomplish this differs based on whether you plan to use the payment method for subscriptions or single charges, so we will examine both below.</p><p><a name="payment-methods-for-subscriptions"></a></p><h4 id="payment-methods-for-subscriptions" tabindex="-1"><a class="header-anchor" href="#payment-methods-for-subscriptions" aria-hidden="true">#</a> Payment Methods For Subscriptions</h4><p>When storing a customer&#39;s credit card information for future use by a subscription, the Stripe &quot;Setup Intents&quot; API must be used to securely gather the customer&#39;s payment method details. A &quot;Setup Intent&quot; indicates to Stripe the intention to charge a customer&#39;s payment method. Cashier&#39;s <code>Billable</code> trait includes the <code>createSetupIntent</code> method to easily create a new Setup Intent. You should invoke this method from the route or controller that will render the form which gathers your customer&#39;s payment method details:</p><pre><code>return view(&#39;update-payment-method&#39;, [
    &#39;intent&#39; =&gt; $user-&gt;createSetupIntent()
]);
</code></pre><p>After you have created the Setup Intent and passed it to the view, you should attach its secret to the element that will gather the payment method. For example, consider this &quot;update payment method&quot; form:</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>card-holder-name<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>

<span class="token comment">&lt;!-- Stripe Elements Placeholder --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>card-element<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>card-button<span class="token punctuation">&quot;</span></span> <span class="token attr-name">data-secret</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{{ $intent-&gt;client_secret }}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    Update Payment Method
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16),pe={href:"https://stripe.com/docs/stripe-js",target:"_blank",rel:"noopener noreferrer"},de=o(`<div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://js.stripe.com/v3/<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">const</span> stripe <span class="token operator">=</span> <span class="token function">Stripe</span><span class="token punctuation">(</span><span class="token string">&#39;stripe-public-key&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> elements <span class="token operator">=</span> stripe<span class="token punctuation">.</span><span class="token function">elements</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> cardElement <span class="token operator">=</span> elements<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token string">&#39;card&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    cardElement<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&#39;#card-element&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),ue={href:"https://stripe.com/docs/js/setup_intents/confirm_card_setup",target:"_blank",rel:"noopener noreferrer"},le=e("code",null,"confirmCardSetup",-1),he=o(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> cardHolderName <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;card-holder-name&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> cardButton <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;card-button&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> clientSecret <span class="token operator">=</span> cardButton<span class="token punctuation">.</span>dataset<span class="token punctuation">.</span>secret<span class="token punctuation">;</span>

cardButton<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> setupIntent<span class="token punctuation">,</span> error <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">await</span> stripe<span class="token punctuation">.</span><span class="token function">confirmCardSetup</span><span class="token punctuation">(</span>
        clientSecret<span class="token punctuation">,</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">payment_method</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">card</span><span class="token operator">:</span> cardElement<span class="token punctuation">,</span>
                <span class="token literal-property property">billing_details</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> cardHolderName<span class="token punctuation">.</span>value <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// Display &quot;error.message&quot; to the user...</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token comment">// The card has been verified successfully...</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>After the card has been verified by Stripe, you may pass the resulting <code>setupIntent.payment_method</code> identifier to your Laravel application, where it can be attached to the customer. The payment method can either be <a href="#adding-payment-methods">added as a new payment method</a> or <a href="#updating-the-default-payment-method">used to update the default payment method</a>. You can also immediately use the payment method identifier to <a href="#creating-subscriptions">create a new subscription</a>.</p>`,2),me=e("strong",null,"Note",-1),ge=e("br",null,null,-1),be={href:"https://stripe.com/docs/payments/save-and-reuse#php",target:"_blank",rel:"noopener noreferrer"},ye=o(`<p><a name="payment-methods-for-single-charges"></a></p><h4 id="payment-methods-for-single-charges" tabindex="-1"><a class="header-anchor" href="#payment-methods-for-single-charges" aria-hidden="true">#</a> Payment Methods For Single Charges</h4><p>Of course, when making a single charge against a customer&#39;s payment method, we will only need to use a payment method identifier once. Due to Stripe limitations, you may not use the stored default payment method of a customer for single charges. You must allow the customer to enter their payment method details using the Stripe.js library. For example, consider the following form:</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>card-holder-name<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>

<span class="token comment">&lt;!-- Stripe Elements Placeholder --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>card-element<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>card-button<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    Process Payment
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),fe={href:"https://stripe.com/docs/stripe-js",target:"_blank",rel:"noopener noreferrer"},ve=o(`<div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://js.stripe.com/v3/<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">const</span> stripe <span class="token operator">=</span> <span class="token function">Stripe</span><span class="token punctuation">(</span><span class="token string">&#39;stripe-public-key&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> elements <span class="token operator">=</span> stripe<span class="token punctuation">.</span><span class="token function">elements</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> cardElement <span class="token operator">=</span> elements<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token string">&#39;card&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    cardElement<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&#39;#card-element&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),ke={href:"https://stripe.com/docs/stripe-js/reference#stripe-create-payment-method",target:"_blank",rel:"noopener noreferrer"},we=e("code",null,"createPaymentMethod",-1),_e=o(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> cardHolderName <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;card-holder-name&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> cardButton <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;card-button&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

cardButton<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> paymentMethod<span class="token punctuation">,</span> error <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">await</span> stripe<span class="token punctuation">.</span><span class="token function">createPaymentMethod</span><span class="token punctuation">(</span>
        <span class="token string">&#39;card&#39;</span><span class="token punctuation">,</span> cardElement<span class="token punctuation">,</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">billing_details</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> cardHolderName<span class="token punctuation">.</span>value <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// Display &quot;error.message&quot; to the user...</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token comment">// The card has been verified successfully...</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>If the card is verified successfully, you may pass the <code>paymentMethod.id</code> to your Laravel application and process a <a href="#simple-charge">single charge</a>.</p><p><a name="retrieving-payment-methods"></a></p><h3 id="retrieving-payment-methods" tabindex="-1"><a class="header-anchor" href="#retrieving-payment-methods" aria-hidden="true">#</a> Retrieving Payment Methods</h3><p>The <code>paymentMethods</code> method on the billable model instance returns a collection of <code>Laravel\\Cashier\\PaymentMethod</code> instances:</p><pre><code>$paymentMethods = $user-&gt;paymentMethods();
</code></pre><p>By default, this method will return payment methods of the <code>card</code> type. To retrieve payment methods of a different type, you may pass the <code>type</code> as an argument to the method:</p><pre><code>$paymentMethods = $user-&gt;paymentMethods(&#39;sepa_debit&#39;);
</code></pre><p>To retrieve the customer&#39;s default payment method, the <code>defaultPaymentMethod</code> method may be used:</p><pre><code>$paymentMethod = $user-&gt;defaultPaymentMethod();
</code></pre><p>You can retrieve a specific payment method that is attached to the billable model using the <code>findPaymentMethod</code> method:</p><pre><code>$paymentMethod = $user-&gt;findPaymentMethod($paymentMethodId);
</code></pre><p><a name="check-for-a-payment-method"></a></p><h3 id="determining-if-a-user-has-a-payment-method" tabindex="-1"><a class="header-anchor" href="#determining-if-a-user-has-a-payment-method" aria-hidden="true">#</a> Determining If A User Has A Payment Method</h3><p>To determine if a billable model has a default payment method attached to their account, invoke the <code>hasDefaultPaymentMethod</code> method:</p><pre><code>if ($user-&gt;hasDefaultPaymentMethod()) {
    // ...
}
</code></pre><p>You may use the <code>hasPaymentMethod</code> method to determine if a billable model has at least one payment method attached to their account:</p><pre><code>if ($user-&gt;hasPaymentMethod()) {
    // ...
}
</code></pre><p>This method will determine if the billable model has payment methods of the <code>card</code> type. To determine if a payment method of another type exists for the model, you may pass the <code>type</code> as an argument to the method:</p><pre><code>if ($user-&gt;hasPaymentMethod(&#39;sepa_debit&#39;)) {
    // ...
}
</code></pre><p><a name="updating-the-default-payment-method"></a></p><h3 id="updating-the-default-payment-method" tabindex="-1"><a class="header-anchor" href="#updating-the-default-payment-method" aria-hidden="true">#</a> Updating The Default Payment Method</h3><p>The <code>updateDefaultPaymentMethod</code> method may be used to update a customer&#39;s default payment method information. This method accepts a Stripe payment method identifier and will assign the new payment method as the default billing payment method:</p><pre><code>$user-&gt;updateDefaultPaymentMethod($paymentMethod);
</code></pre><p>To sync your default payment method information with the customer&#39;s default payment method information in Stripe, you may use the <code>updateDefaultPaymentMethodFromStripe</code> method:</p><pre><code>$user-&gt;updateDefaultPaymentMethodFromStripe();
</code></pre><blockquote><p><strong>Warning</strong><br> The default payment method on a customer can only be used for invoicing and creating new subscriptions. Due to limitations imposed by Stripe, it may not be used for single charges.</p></blockquote><p><a name="adding-payment-methods"></a></p><h3 id="adding-payment-methods" tabindex="-1"><a class="header-anchor" href="#adding-payment-methods" aria-hidden="true">#</a> Adding Payment Methods</h3><p>To add a new payment method, you may call the <code>addPaymentMethod</code> method on the billable model, passing the payment method identifier:</p><pre><code>$user-&gt;addPaymentMethod($paymentMethod);
</code></pre><blockquote><p><strong>Note</strong><br> To learn how to retrieve payment method identifiers please review the <a href="#storing-payment-methods">payment method storage documentation</a>.</p></blockquote><p><a name="deleting-payment-methods"></a></p><h3 id="deleting-payment-methods" tabindex="-1"><a class="header-anchor" href="#deleting-payment-methods" aria-hidden="true">#</a> Deleting Payment Methods</h3><p>To delete a payment method, you may call the <code>delete</code> method on the <code>Laravel\\Cashier\\PaymentMethod</code> instance you wish to delete:</p><pre><code>$paymentMethod-&gt;delete();
</code></pre><p>The <code>deletePaymentMethod</code> method will delete a specific payment method from the billable model:</p><pre><code>$user-&gt;deletePaymentMethod(&#39;pm_visa&#39;);
</code></pre><p>The <code>deletePaymentMethods</code> method will delete all of the payment method information for the billable model:</p><pre><code>$user-&gt;deletePaymentMethods();
</code></pre><p>By default, this method will delete payment methods of the <code>card</code> type. To delete payment methods of a different type you can pass the <code>type</code> as an argument to the method:</p><pre><code>$user-&gt;deletePaymentMethods(&#39;sepa_debit&#39;);
</code></pre><blockquote><p><strong>Warning</strong><br> If a user has an active subscription, your application should not allow them to delete their default payment method.</p></blockquote><p><a name="subscriptions"></a></p><h2 id="subscriptions" tabindex="-1"><a class="header-anchor" href="#subscriptions" aria-hidden="true">#</a> Subscriptions</h2><p>Subscriptions provide a way to set up recurring payments for your customers. Stripe subscriptions managed by Cashier provide support for multiple subscription prices, subscription quantities, trials, and more.</p><p><a name="creating-subscriptions"></a></p><h3 id="creating-subscriptions" tabindex="-1"><a class="header-anchor" href="#creating-subscriptions" aria-hidden="true">#</a> Creating Subscriptions</h3><p>To create a subscription, first retrieve an instance of your billable model, which typically will be an instance of <code>App\\Models\\User</code>. Once you have retrieved the model instance, you may use the <code>newSubscription</code> method to create the model&#39;s subscription:</p><pre><code>use Illuminate\\Http\\Request;

Route::post(&#39;/user/subscribe&#39;, function (Request $request) {
    $request-&gt;user()-&gt;newSubscription(
        &#39;default&#39;, &#39;price_monthly&#39;
    )-&gt;create($request-&gt;paymentMethodId);

    // ...
});
</code></pre><p>The first argument passed to the <code>newSubscription</code> method should be the internal name of the subscription. If your application only offers a single subscription, you might call this <code>default</code> or <code>primary</code>. This subscription name is only for internal application usage and is not meant to be shown to users. In addition, it should not contain spaces and it should never be changed after creating the subscription. The second argument is the specific price the user is subscribing to. This value should correspond to the price&#39;s identifier in Stripe.</p><p>The <code>create</code> method, which accepts <a href="#storing-payment-methods">a Stripe payment method identifier</a> or Stripe <code>PaymentMethod</code> object, will begin the subscription as well as update your database with the billable model&#39;s Stripe customer ID and other relevant billing information.</p><blockquote><p><strong>Warning</strong><br> Passing a payment method identifier directly to the <code>create</code> subscription method will also automatically add it to the user&#39;s stored payment methods.</p></blockquote><p><a name="collecting-recurring-payments-via-invoice-emails"></a></p><h4 id="collecting-recurring-payments-via-invoice-emails" tabindex="-1"><a class="header-anchor" href="#collecting-recurring-payments-via-invoice-emails" aria-hidden="true">#</a> Collecting Recurring Payments Via Invoice Emails</h4><p>Instead of collecting a customer&#39;s recurring payments automatically, you may instruct Stripe to email an invoice to the customer each time their recurring payment is due. Then, the customer may manually pay the invoice once they receive it. The customer does not need to provide a payment method up front when collecting recurring payments via invoices:</p><pre><code>$user-&gt;newSubscription(&#39;default&#39;, &#39;price_monthly&#39;)-&gt;createAndSendInvoice();
</code></pre><p>The amount of time a customer has to pay their invoice before their subscription is cancelled is determined by the <code>days_until_due</code> option. By default, this is 30 days; however, you may provide a specific value for this option if you wish:</p><pre><code>$user-&gt;newSubscription(&#39;default&#39;, &#39;price_monthly&#39;)-&gt;createAndSendInvoice([], [
    &#39;days_until_due&#39; =&gt; 30
]);
</code></pre><p><a name="subscription-quantities"></a></p><h4 id="quantities" tabindex="-1"><a class="header-anchor" href="#quantities" aria-hidden="true">#</a> Quantities</h4>`,61),Se={href:"https://stripe.com/docs/billing/subscriptions/quantities",target:"_blank",rel:"noopener noreferrer"},qe=e("code",null,"quantity",-1),xe=e("pre",null,[e("code",null,`$user->newSubscription('default', 'price_monthly')
     ->quantity(5)
     ->create($paymentMethod);
`)],-1),$e=e("p",null,[e("a",{name:"additional-details"})],-1),Ce=e("h4",{id:"additional-details",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#additional-details","aria-hidden":"true"},"#"),t(" Additional Details")],-1),Ie={href:"https://stripe.com/docs/api/customers/create",target:"_blank",rel:"noopener noreferrer"},Te={href:"https://stripe.com/docs/api/subscriptions/create",target:"_blank",rel:"noopener noreferrer"},Pe=e("code",null,"create",-1),Re=e("pre",null,[e("code",null,`$user->newSubscription('default', 'price_monthly')->create($paymentMethod, [
    'email' => $email,
], [
    'metadata' => ['note' => 'Some extra information.'],
]);
`)],-1),Ae=e("p",null,[e("a",{name:"coupons"})],-1),Me=e("h4",{id:"coupons",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#coupons","aria-hidden":"true"},"#"),t(" Coupons")],-1),De=e("p",null,[t("If you would like to apply a coupon when creating the subscription, you may use the "),e("code",null,"withCoupon"),t(" method:")],-1),Ee=e("pre",null,[e("code",null,`$user->newSubscription('default', 'price_monthly')
     ->withCoupon('code')
     ->create($paymentMethod);
`)],-1),Ue={href:"https://stripe.com/docs/billing/subscriptions/discounts/codes",target:"_blank",rel:"noopener noreferrer"},We=e("code",null,"withPromotionCode",-1),Fe=o(`<pre><code>$user-&gt;newSubscription(&#39;default&#39;, &#39;price_monthly&#39;)
     -&gt;withPromotionCode(&#39;promo_code_id&#39;)
     -&gt;create($paymentMethod);
</code></pre><p>The given promotion code ID should be the Stripe API ID assigned to the promotion code and not the customer facing promotion code. If you need to find a promotion code ID based on a given customer facing promotion code, you may use the <code>findPromotionCode</code> method:</p><pre><code>// Find a promotion code ID by its customer facing code...
$promotionCode = $user-&gt;findPromotionCode(&#39;SUMMERSALE&#39;);

// Find an active promotion code ID by its customer facing code...
$promotionCode = $user-&gt;findActivePromotionCode(&#39;SUMMERSALE&#39;);
</code></pre><p>In the example above, the returned <code>$promotionCode</code> object is an instance of <code>Laravel\\Cashier\\PromotionCode</code>. This class decorates an underlying <code>Stripe\\PromotionCode</code> object. You can retrieve the coupon related to the promotion code by invoking the <code>coupon</code> method:</p><pre><code>$coupon = $user-&gt;findPromotionCode(&#39;SUMMERSALE&#39;)-&gt;coupon();
</code></pre><p>The coupon instance allows you to determine the discount amount and whether the coupon represents a fixed discount or percentage based discount:</p><pre><code>if ($coupon-&gt;isPercentage()) {
    return $coupon-&gt;percentOff().&#39;%&#39;; // 21.5%
} else {
    return $coupon-&gt;amountOff(); // $5.99
}
</code></pre><p>You can also retrieve the discounts that are currently applied to a customer or subscription:</p><pre><code>$discount = $billable-&gt;discount();

$discount = $subscription-&gt;discount();
</code></pre><p>The returned <code>Laravel\\Cashier\\Discount</code> instances decorate an underlying <code>Stripe\\Discount</code> object instance. You may retrieve the coupon related to this discount by invoking the <code>coupon</code> method:</p><pre><code>$coupon = $subscription-&gt;discount()-&gt;coupon();
</code></pre><p>If you would like to apply a new coupon or promotion code to a customer or subscription, you may do so via the <code>applyCoupon</code> or <code>applyPromotionCode</code> methods:</p><pre><code>$billable-&gt;applyCoupon(&#39;coupon_id&#39;);
$billable-&gt;applyPromotionCode(&#39;promotion_code_id&#39;);

$subscription-&gt;applyCoupon(&#39;coupon_id&#39;);
$subscription-&gt;applyPromotionCode(&#39;promotion_code_id&#39;);
</code></pre><p>Remember, you should use the Stripe API ID assigned to the promotion code and not the customer facing promotion code. Only one coupon or promotion code can be applied to a customer or subscription at a given time.</p>`,14),Be={href:"https://stripe.com/docs/billing/subscriptions/coupons",target:"_blank",rel:"noopener noreferrer"},Le={href:"https://stripe.com/docs/billing/subscriptions/coupons/codes",target:"_blank",rel:"noopener noreferrer"},Ye=o(`<p><a name="adding-subscriptions"></a></p><h4 id="adding-subscriptions" tabindex="-1"><a class="header-anchor" href="#adding-subscriptions" aria-hidden="true">#</a> Adding Subscriptions</h4><p>If you would like to add a subscription to a customer who already has a default payment method you may invoke the <code>add</code> method on the subscription builder:</p><pre><code>use App\\Models\\User;

$user = User::find(1);

$user-&gt;newSubscription(&#39;default&#39;, &#39;price_monthly&#39;)-&gt;add();
</code></pre><p><a name="creating-subscriptions-from-the-stripe-dashboard"></a></p><h4 id="creating-subscriptions-from-the-stripe-dashboard" tabindex="-1"><a class="header-anchor" href="#creating-subscriptions-from-the-stripe-dashboard" aria-hidden="true">#</a> Creating Subscriptions From The Stripe Dashboard</h4><p>You may also create subscriptions from the Stripe dashboard itself. When doing so, Cashier will sync newly added subscriptions and assign them a name of <code>default</code>. To customize the subscription name that is assigned to dashboard created subscriptions, <a href="#defining-webhook-event-handlers">extend the <code>WebhookController</code></a> and overwrite the <code>newSubscriptionName</code> method.</p><p>In addition, you may only create one type of subscription via the Stripe dashboard. If your application offers multiple subscriptions that use different names, only one type of subscription may be added through the Stripe dashboard.</p><p>Finally, you should always make sure to only add one active subscription per type of subscription offered by your application. If a customer has two <code>default</code> subscriptions, only the most recently added subscription will be used by Cashier even though both would be synced with your application&#39;s database.</p><p><a name="checking-subscription-status"></a></p><h3 id="checking-subscription-status" tabindex="-1"><a class="header-anchor" href="#checking-subscription-status" aria-hidden="true">#</a> Checking Subscription Status</h3><p>Once a customer is subscribed to your application, you may easily check their subscription status using a variety of convenient methods. First, the <code>subscribed</code> method returns <code>true</code> if the customer has an active subscription, even if the subscription is currently within its trial period. The <code>subscribed</code> method accepts the name of the subscription as its first argument:</p><pre><code>if ($user-&gt;subscribed(&#39;default&#39;)) {
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
</code></pre><p>The <code>subscribedToProduct</code> method may be used to determine if the user is subscribed to a given product based on a given Stripe product&#39;s identifier. In Stripe, products are collections of prices. In this example, we will determine if the user&#39;s <code>default</code> subscription is actively subscribed to the application&#39;s &quot;premium&quot; product. The given Stripe product identifier should correspond to one of your product&#39;s identifiers in the Stripe dashboard:</p><pre><code>if ($user-&gt;subscribedToProduct(&#39;prod_premium&#39;, &#39;default&#39;)) {
    // ...
}
</code></pre><p>By passing an array to the <code>subscribedToProduct</code> method, you may determine if the user&#39;s <code>default</code> subscription is actively subscribed to the application&#39;s &quot;basic&quot; or &quot;premium&quot; product:</p><pre><code>if ($user-&gt;subscribedToProduct([&#39;prod_basic&#39;, &#39;prod_premium&#39;], &#39;default&#39;)) {
    // ...
}
</code></pre><p>The <code>subscribedToPrice</code> method may be used to determine if a customer&#39;s subscription corresponds to a given price ID:</p><pre><code>if ($user-&gt;subscribedToPrice(&#39;price_basic_monthly&#39;, &#39;default&#39;)) {
    // ...
}
</code></pre><p>The <code>recurring</code> method may be used to determine if the user is currently subscribed and is no longer within their trial period:</p><pre><code>if ($user-&gt;subscription(&#39;default&#39;)-&gt;recurring()) {
    // ...
}
</code></pre><blockquote><p><strong>Warning</strong><br> If a user has two subscriptions with the same name, the most recent subscription will always be returned by the <code>subscription</code> method. For example, a user might have two subscription records named <code>default</code>; however, one of the subscriptions may be an old, expired subscription, while the other is the current, active subscription. The most recent subscription will always be returned while older subscriptions are kept in the database for historical review.</p></blockquote><p><a name="cancelled-subscription-status"></a></p><h4 id="canceled-subscription-status" tabindex="-1"><a class="header-anchor" href="#canceled-subscription-status" aria-hidden="true">#</a> Canceled Subscription Status</h4><p>To determine if the user was once an active subscriber but has canceled their subscription, you may use the <code>canceled</code> method:</p><pre><code>if ($user-&gt;subscription(&#39;default&#39;)-&gt;canceled()) {
    // ...
}
</code></pre><p>You may also determine if a user has canceled their subscription but are still on their &quot;grace period&quot; until the subscription fully expires. For example, if a user cancels a subscription on March 5th that was originally scheduled to expire on March 10th, the user is on their &quot;grace period&quot; until March 10th. Note that the <code>subscribed</code> method still returns <code>true</code> during this time:</p><pre><code>if ($user-&gt;subscription(&#39;default&#39;)-&gt;onGracePeriod()) {
    // ...
}
</code></pre><p>To determine if the user has canceled their subscription and is no longer within their &quot;grace period&quot;, you may use the <code>ended</code> method:</p><pre><code>if ($user-&gt;subscription(&#39;default&#39;)-&gt;ended()) {
    // ...
}
</code></pre><p><a name="incomplete-and-past-due-status"></a></p><h4 id="incomplete-and-past-due-status" tabindex="-1"><a class="header-anchor" href="#incomplete-and-past-due-status" aria-hidden="true">#</a> Incomplete and Past Due Status</h4><p>If a subscription requires a secondary payment action after creation the subscription will be marked as <code>incomplete</code>. Subscription statuses are stored in the <code>stripe_status</code> column of Cashier&#39;s <code>subscriptions</code> database table.</p><p>Similarly, if a secondary payment action is required when swapping prices the subscription will be marked as <code>past_due</code>. When your subscription is in either of these states it will not be active until the customer has confirmed their payment. Determining if a subscription has an incomplete payment may be accomplished using the <code>hasIncompletePayment</code> method on the billable model or a subscription instance:</p><pre><code>if ($user-&gt;hasIncompletePayment(&#39;default&#39;)) {
    // ...
}

if ($user-&gt;subscription(&#39;default&#39;)-&gt;hasIncompletePayment()) {
    // ...
}
</code></pre><p>When a subscription has an incomplete payment, you should direct the user to Cashier&#39;s payment confirmation page, passing the <code>latestPayment</code> identifier. You may use the <code>latestPayment</code> method available on subscription instance to retrieve this identifier:</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{{ route(&#39;cashier.payment&#39;, $subscription-&gt;latestPayment()-&gt;id) }}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    Please confirm your payment.
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>If you would like the subscription to still be considered active when it&#39;s in a <code>past_due</code> or <code>incomplete</code> state, you may use the <code>keepPastDueSubscriptionsActive</code> and <code>keepIncompleteSubscriptionsActive</code> methods provided by Cashier. Typically, these methods should be called in the <code>register</code> method of your <code>App\\Providers\\AppServiceProvider</code>:</p><pre><code>use Laravel\\Cashier\\Cashier;

/**
 * Register any application services.
 */
public function register(): void
{
    Cashier::keepPastDueSubscriptionsActive();
    Cashier::keepIncompleteSubscriptionsActive();
}
</code></pre><blockquote><p><strong>Warning</strong><br> When a subscription is in an <code>incomplete</code> state it cannot be changed until the payment is confirmed. Therefore, the <code>swap</code> and <code>updateQuantity</code> methods will throw an exception when the subscription is in an <code>incomplete</code> state.</p></blockquote><p><a name="subscription-scopes"></a></p><h4 id="subscription-scopes" tabindex="-1"><a class="header-anchor" href="#subscription-scopes" aria-hidden="true">#</a> Subscription Scopes</h4><p>Most subscription states are also available as query scopes so that you may easily query your database for subscriptions that are in a given state:</p><pre><code>// Get all active subscriptions...
$subscriptions = Subscription::query()-&gt;active()-&gt;get();

// Get all of the canceled subscriptions for a user...
$subscriptions = $user-&gt;subscriptions()-&gt;canceled()-&gt;get();
</code></pre><p>A complete list of available scopes is available below:</p><pre><code>Subscription::query()-&gt;active();
Subscription::query()-&gt;canceled();
Subscription::query()-&gt;ended();
Subscription::query()-&gt;incomplete();
Subscription::query()-&gt;notCanceled();
Subscription::query()-&gt;notOnGracePeriod();
Subscription::query()-&gt;notOnTrial();
Subscription::query()-&gt;onGracePeriod();
Subscription::query()-&gt;onTrial();
Subscription::query()-&gt;pastDue();
Subscription::query()-&gt;recurring();
</code></pre><p><a name="changing-prices"></a></p><h3 id="changing-prices" tabindex="-1"><a class="header-anchor" href="#changing-prices" aria-hidden="true">#</a> Changing Prices</h3><p>After a customer is subscribed to your application, they may occasionally want to change to a new subscription price. To swap a customer to a new price, pass the Stripe price&#39;s identifier to the <code>swap</code> method. When swapping prices, it is assumed that the user would like to re-activate their subscription if it was previously canceled. The given price identifier should correspond to a Stripe price identifier available in the Stripe dashboard:</p><pre><code>use App\\Models\\User;

$user = App\\Models\\User::find(1);

$user-&gt;subscription(&#39;default&#39;)-&gt;swap(&#39;price_yearly&#39;);
</code></pre><p>If the customer is on trial, the trial period will be maintained. Additionally, if a &quot;quantity&quot; exists for the subscription, that quantity will also be maintained.</p><p>If you would like to swap prices and cancel any trial period the customer is currently on, you may invoke the <code>skipTrial</code> method:</p><pre><code>$user-&gt;subscription(&#39;default&#39;)
        -&gt;skipTrial()
        -&gt;swap(&#39;price_yearly&#39;);
</code></pre><p>If you would like to swap prices and immediately invoice the customer instead of waiting for their next billing cycle, you may use the <code>swapAndInvoice</code> method:</p><pre><code>$user = User::find(1);

$user-&gt;subscription(&#39;default&#39;)-&gt;swapAndInvoice(&#39;price_yearly&#39;);
</code></pre><p><a name="prorations"></a></p><h4 id="prorations" tabindex="-1"><a class="header-anchor" href="#prorations" aria-hidden="true">#</a> Prorations</h4><p>By default, Stripe prorates charges when swapping between prices. The <code>noProrate</code> method may be used to update the subscription&#39;s price without prorating the charges:</p><pre><code>$user-&gt;subscription(&#39;default&#39;)-&gt;noProrate()-&gt;swap(&#39;price_yearly&#39;);
</code></pre>`,63),He={href:"https://stripe.com/docs/billing/subscriptions/prorations",target:"_blank",rel:"noopener noreferrer"},Oe=o(`<blockquote><p><strong>Warning</strong><br> Executing the <code>noProrate</code> method before the <code>swapAndInvoice</code> method will have no effect on proration. An invoice will always be issued.</p></blockquote><p><a name="subscription-quantity"></a></p><h3 id="subscription-quantity" tabindex="-1"><a class="header-anchor" href="#subscription-quantity" aria-hidden="true">#</a> Subscription Quantity</h3><p>Sometimes subscriptions are affected by &quot;quantity&quot;. For example, a project management application might charge $10 per month per project. You may use the <code>incrementQuantity</code> and <code>decrementQuantity</code> methods to easily increment or decrement your subscription quantity:</p><pre><code>use App\\Models\\User;

$user = User::find(1);

$user-&gt;subscription(&#39;default&#39;)-&gt;incrementQuantity();

// Add five to the subscription&#39;s current quantity...
$user-&gt;subscription(&#39;default&#39;)-&gt;incrementQuantity(5);

$user-&gt;subscription(&#39;default&#39;)-&gt;decrementQuantity();

// Subtract five from the subscription&#39;s current quantity...
$user-&gt;subscription(&#39;default&#39;)-&gt;decrementQuantity(5);
</code></pre><p>Alternatively, you may set a specific quantity using the <code>updateQuantity</code> method:</p><pre><code>$user-&gt;subscription(&#39;default&#39;)-&gt;updateQuantity(10);
</code></pre><p>The <code>noProrate</code> method may be used to update the subscription&#39;s quantity without prorating the charges:</p><pre><code>$user-&gt;subscription(&#39;default&#39;)-&gt;noProrate()-&gt;updateQuantity(10);
</code></pre>`,9),Ne={href:"https://stripe.com/docs/subscriptions/quantities",target:"_blank",rel:"noopener noreferrer"},je=o(`<p><a name="quantities-for-subscription-with-multiple-products"></a></p><h4 id="quantities-for-subscriptions-with-multiple-products" tabindex="-1"><a class="header-anchor" href="#quantities-for-subscriptions-with-multiple-products" aria-hidden="true">#</a> Quantities For Subscriptions With Multiple Products</h4><p>If your subscription is a <a href="#subscriptions-with-multiple-products">subscription with multiple products</a>, you should pass the ID of the price whose quantity you wish to increment or decrement as the second argument to the increment / decrement methods:</p><pre><code>$user-&gt;subscription(&#39;default&#39;)-&gt;incrementQuantity(1, &#39;price_chat&#39;);
</code></pre><p><a name="subscriptions-with-multiple-products"></a></p><h3 id="subscriptions-with-multiple-products" tabindex="-1"><a class="header-anchor" href="#subscriptions-with-multiple-products" aria-hidden="true">#</a> Subscriptions With Multiple Products</h3>`,6),Ge={href:"https://stripe.com/docs/billing/subscriptions/multiple-products",target:"_blank",rel:"noopener noreferrer"},Qe=e("code",null,"subscription_items",-1),Ve=o(`<p>You may specify multiple products for a given subscription by passing an array of prices as the second argument to the <code>newSubscription</code> method:</p><pre><code>use Illuminate\\Http\\Request;

Route::post(&#39;/user/subscribe&#39;, function (Request $request) {
    $request-&gt;user()-&gt;newSubscription(&#39;default&#39;, [
        &#39;price_monthly&#39;,
        &#39;price_chat&#39;,
    ])-&gt;create($request-&gt;paymentMethodId);

    // ...
});
</code></pre><p>In the example above, the customer will have two prices attached to their <code>default</code> subscription. Both prices will be charged on their respective billing intervals. If necessary, you may use the <code>quantity</code> method to indicate a specific quantity for each price:</p><pre><code>$user = User::find(1);

$user-&gt;newSubscription(&#39;default&#39;, [&#39;price_monthly&#39;, &#39;price_chat&#39;])
    -&gt;quantity(5, &#39;price_chat&#39;)
    -&gt;create($paymentMethod);
</code></pre><p>If you would like to add another price to an existing subscription, you may invoke the subscription&#39;s <code>addPrice</code> method:</p><pre><code>$user = User::find(1);

$user-&gt;subscription(&#39;default&#39;)-&gt;addPrice(&#39;price_chat&#39;);
</code></pre><p>The example above will add the new price and the customer will be billed for it on their next billing cycle. If you would like to bill the customer immediately you may use the <code>addPriceAndInvoice</code> method:</p><pre><code>$user-&gt;subscription(&#39;default&#39;)-&gt;addPriceAndInvoice(&#39;price_chat&#39;);
</code></pre><p>If you would like to add a price with a specific quantity, you can pass the quantity as the second argument of the <code>addPrice</code> or <code>addPriceAndInvoice</code> methods:</p><pre><code>$user = User::find(1);

$user-&gt;subscription(&#39;default&#39;)-&gt;addPrice(&#39;price_chat&#39;, 5);
</code></pre><p>You may remove prices from subscriptions using the <code>removePrice</code> method:</p><pre><code>$user-&gt;subscription(&#39;default&#39;)-&gt;removePrice(&#39;price_chat&#39;);
</code></pre><blockquote><p><strong>Warning</strong><br> You may not remove the last price on a subscription. Instead, you should simply cancel the subscription.</p></blockquote><p><a name="swapping-prices"></a></p><h4 id="swapping-prices" tabindex="-1"><a class="header-anchor" href="#swapping-prices" aria-hidden="true">#</a> Swapping Prices</h4><p>You may also change the prices attached to a subscription with multiple products. For example, imagine a customer has a <code>price_basic</code> subscription with a <code>price_chat</code> add-on product and you want to upgrade the customer from the <code>price_basic</code> to the <code>price_pro</code> price:</p><pre><code>use App\\Models\\User;

$user = User::find(1);

$user-&gt;subscription(&#39;default&#39;)-&gt;swap([&#39;price_pro&#39;, &#39;price_chat&#39;]);
</code></pre><p>When executing the example above, the underlying subscription item with the <code>price_basic</code> is deleted and the one with the <code>price_chat</code> is preserved. Additionally, a new subscription item for the <code>price_pro</code> is created.</p><p>You can also specify subscription item options by passing an array of key / value pairs to the <code>swap</code> method. For example, you may need to specify the subscription price quantities:</p><pre><code>$user = User::find(1);

$user-&gt;subscription(&#39;default&#39;)-&gt;swap([
    &#39;price_pro&#39; =&gt; [&#39;quantity&#39; =&gt; 5],
    &#39;price_chat&#39;
]);
</code></pre><p>If you want to swap a single price on a subscription, you may do so using the <code>swap</code> method on the subscription item itself. This approach is particularly useful if you would like to preserve all of the existing metadata on the subscription&#39;s other prices:</p><pre><code>$user = User::find(1);

$user-&gt;subscription(&#39;default&#39;)
        -&gt;findItemOrFail(&#39;price_basic&#39;)
        -&gt;swap(&#39;price_pro&#39;);
</code></pre><p><a name="proration"></a></p><h4 id="proration" tabindex="-1"><a class="header-anchor" href="#proration" aria-hidden="true">#</a> Proration</h4><p>By default, Stripe will prorate charges when adding or removing prices from a subscription with multiple products. If you would like to make a price adjustment without proration, you should chain the <code>noProrate</code> method onto your price operation:</p><pre><code>$user-&gt;subscription(&#39;default&#39;)-&gt;noProrate()-&gt;removePrice(&#39;price_chat&#39;);
</code></pre><p><a name="swapping-quantities"></a></p><h4 id="quantities-1" tabindex="-1"><a class="header-anchor" href="#quantities-1" aria-hidden="true">#</a> Quantities</h4><p>If you would like to update quantities on individual subscription prices, you may do so using the <a href="#subscription-quantity">existing quantity methods</a> by passing the name of the price as an additional argument to the method:</p><pre><code>$user = User::find(1);

$user-&gt;subscription(&#39;default&#39;)-&gt;incrementQuantity(5, &#39;price_chat&#39;);

$user-&gt;subscription(&#39;default&#39;)-&gt;decrementQuantity(3, &#39;price_chat&#39;);

$user-&gt;subscription(&#39;default&#39;)-&gt;updateQuantity(10, &#39;price_chat&#39;);
</code></pre><blockquote><p><strong>Warning</strong><br> When a subscription has multiple prices the <code>stripe_price</code> and <code>quantity</code> attributes on the <code>Subscription</code> model will be <code>null</code>. To access the individual price attributes, you should use the <code>items</code> relationship available on the <code>Subscription</code> model.</p></blockquote><p><a name="subscription-items"></a></p><h4 id="subscription-items" tabindex="-1"><a class="header-anchor" href="#subscription-items" aria-hidden="true">#</a> Subscription Items</h4><p>When a subscription has multiple prices, it will have multiple subscription &quot;items&quot; stored in your database&#39;s <code>subscription_items</code> table. You may access these via the <code>items</code> relationship on the subscription:</p><pre><code>use App\\Models\\User;

$user = User::find(1);

$subscriptionItem = $user-&gt;subscription(&#39;default&#39;)-&gt;items-&gt;first();

// Retrieve the Stripe price and quantity for a specific item...
$stripePrice = $subscriptionItem-&gt;stripe_price;
$quantity = $subscriptionItem-&gt;quantity;
</code></pre><p>You can also retrieve a specific price using the <code>findItemOrFail</code> method:</p><pre><code>$user = User::find(1);

$subscriptionItem = $user-&gt;subscription(&#39;default&#39;)-&gt;findItemOrFail(&#39;price_chat&#39;);
</code></pre><p><a name="multiple-subscriptions"></a></p><h3 id="multiple-subscriptions" tabindex="-1"><a class="header-anchor" href="#multiple-subscriptions" aria-hidden="true">#</a> Multiple Subscriptions</h3><p>Stripe allows your customers to have multiple subscriptions simultaneously. For example, you may run a gym that offers a swimming subscription and a weight-lifting subscription, and each subscription may have different pricing. Of course, customers should be able to subscribe to either or both plans.</p><p>When your application creates subscriptions, you may provide the name of the subscription to the <code>newSubscription</code> method. The name may be any string that represents the type of subscription the user is initiating:</p><pre><code>use Illuminate\\Http\\Request;

Route::post(&#39;/swimming/subscribe&#39;, function (Request $request) {
    $request-&gt;user()-&gt;newSubscription(&#39;swimming&#39;)
        -&gt;price(&#39;price_swimming_monthly&#39;)
        -&gt;create($request-&gt;paymentMethodId);

    // ...
});
</code></pre><p>In this example, we initiated a monthly swimming subscription for the customer. However, they may want to swap to a yearly subscription at a later time. When adjusting the customer&#39;s subscription, we can simply swap the price on the <code>swimming</code> subscription:</p><pre><code>$user-&gt;subscription(&#39;swimming&#39;)-&gt;swap(&#39;price_swimming_yearly&#39;);
</code></pre><p>Of course, you may also cancel the subscription entirely:</p><pre><code>$user-&gt;subscription(&#39;swimming&#39;)-&gt;cancel();
</code></pre><p><a name="metered-billing"></a></p><h3 id="metered-billing" tabindex="-1"><a class="header-anchor" href="#metered-billing" aria-hidden="true">#</a> Metered Billing</h3>`,48),ze={href:"https://stripe.com/docs/billing/subscriptions/metered-billing",target:"_blank",rel:"noopener noreferrer"},Ke=o(`<p>To start using metered billing, you will first need to create a new product in your Stripe dashboard with a metered price. Then, use the <code>meteredPrice</code> to add the metered price ID to a customer subscription:</p><pre><code>use Illuminate\\Http\\Request;

Route::post(&#39;/user/subscribe&#39;, function (Request $request) {
    $request-&gt;user()-&gt;newSubscription(&#39;default&#39;)
        -&gt;meteredPrice(&#39;price_metered&#39;)
        -&gt;create($request-&gt;paymentMethodId);

    // ...
});
</code></pre><p>You may also start a metered subscription via <a href="#checkout">Stripe Checkout</a>:</p><pre><code>$checkout = Auth::user()
        -&gt;newSubscription(&#39;default&#39;, [])
        -&gt;meteredPrice(&#39;price_metered&#39;)
        -&gt;checkout();

return view(&#39;your-checkout-view&#39;, [
    &#39;checkout&#39; =&gt; $checkout,
]);
</code></pre><p><a name="reporting-usage"></a></p><h4 id="reporting-usage" tabindex="-1"><a class="header-anchor" href="#reporting-usage" aria-hidden="true">#</a> Reporting Usage</h4><p>As your customer uses your application, you will report their usage to Stripe so that they can be billed accurately. To increment the usage of a metered subscription, you may use the <code>reportUsage</code> method:</p><pre><code>$user = User::find(1);

$user-&gt;subscription(&#39;default&#39;)-&gt;reportUsage();
</code></pre><p>By default, a &quot;usage quantity&quot; of 1 is added to the billing period. Alternatively, you may pass a specific amount of &quot;usage&quot; to add to the customer&#39;s usage for the billing period:</p><pre><code>$user = User::find(1);

$user-&gt;subscription(&#39;default&#39;)-&gt;reportUsage(15);
</code></pre><p>If your application offers multiple prices on a single subscription, you will need to use the <code>reportUsageFor</code> method to specify the metered price you want to report usage for:</p><pre><code>$user = User::find(1);

$user-&gt;subscription(&#39;default&#39;)-&gt;reportUsageFor(&#39;price_metered&#39;, 15);
</code></pre><p>Sometimes, you may need to update usage which you have previously reported. To accomplish this, you may pass a timestamp or a <code>DateTimeInterface</code> instance as the second parameter to <code>reportUsage</code>. When doing so, Stripe will update the usage that was reported at that given time. You can continue to update previous usage records as the given date and time is still within the current billing period:</p><pre><code>$user = User::find(1);

$user-&gt;subscription(&#39;default&#39;)-&gt;reportUsage(5, $timestamp);
</code></pre><p><a name="retrieving-usage-records"></a></p><h4 id="retrieving-usage-records" tabindex="-1"><a class="header-anchor" href="#retrieving-usage-records" aria-hidden="true">#</a> Retrieving Usage Records</h4><p>To retrieve a customer&#39;s past usage, you may use a subscription instance&#39;s <code>usageRecords</code> method:</p><pre><code>$user = User::find(1);

$usageRecords = $user-&gt;subscription(&#39;default&#39;)-&gt;usageRecords();
</code></pre><p>If your application offers multiple prices on a single subscription, you may use the <code>usageRecordsFor</code> method to specify the metered price that you wish to retrieve usage records for:</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>    <span class="token variable">$user</span> <span class="token operator">=</span> <span class="token class-name static-context">User</span><span class="token operator">::</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token variable">$usageRecords</span> <span class="token operator">=</span> <span class="token variable">$user</span><span class="token operator">-&gt;</span><span class="token function">subscription</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;default&#39;</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">usageRecordsFor</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;price_metered&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

The <span class="token string backtick-quoted-string">\`usageRecords\`</span> <span class="token keyword">and</span> <span class="token string backtick-quoted-string">\`usageRecordsFor\`</span> methods <span class="token keyword">return</span> a Collection instance containing an associative <span class="token keyword type-declaration">array</span> of usage records<span class="token operator">.</span> You may iterate over this <span class="token keyword type-declaration">array</span> to display a customer<span class="token string single-quoted-string">&#39;s total usage:

    @foreach ($usageRecords as $usageRecord)
        - Period Starting: {{ $usageRecord[&#39;</span>period<span class="token string single-quoted-string">&#39;][&#39;</span>start<span class="token string single-quoted-string">&#39;] }}
        - Period Ending: {{ $usageRecord[&#39;</span>period<span class="token string single-quoted-string">&#39;][&#39;</span>end<span class="token string single-quoted-string">&#39;] }}
        - Total Usage: {{ $usageRecord[&#39;</span>total_usage&#39;<span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">}</span>
    @<span class="token keyword">endforeach</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,20),Je={href:"https://stripe.com/docs/api/usage_records/subscription_item_summary_list",target:"_blank",rel:"noopener noreferrer"},Xe=e("p",null,[e("a",{name:"subscription-taxes"})],-1),Ze=e("h3",{id:"subscription-taxes",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#subscription-taxes","aria-hidden":"true"},"#"),t(" Subscription Taxes")],-1),et=e("blockquote",null,[e("p",null,[e("strong",null,"Warning"),e("br"),t(" Instead of calculating Tax Rates manually, you can "),e("a",{href:"#tax-configuration"},"automatically calculate taxes using Stripe Tax")])],-1),tt=e("code",null,"taxRates",-1),nt={href:"https://dashboard.stripe.com/test/tax-rates",target:"_blank",rel:"noopener noreferrer"},at=o(`<pre><code>/**
 * The tax rates that should apply to the customer&#39;s subscriptions.
 *
 * @return array&lt;int, string&gt;
 */
public function taxRates(): array
{
    return [&#39;txr_id&#39;];
}
</code></pre><p>The <code>taxRates</code> method enables you to apply a tax rate on a customer-by-customer basis, which may be helpful for a user base that spans multiple countries and tax rates.</p><p>If you&#39;re offering subscriptions with multiple products, you may define different tax rates for each price by implementing a <code>priceTaxRates</code> method on your billable model:</p><pre><code>/**
 * The tax rates that should apply to the customer&#39;s subscriptions.
 *
 * @return array&lt;string, array&lt;int, string&gt;&gt;
 */
public function priceTaxRates(): array
{
    return [
        &#39;price_monthly&#39; =&gt; [&#39;txr_id&#39;],
    ];
}
</code></pre><blockquote><p><strong>Warning</strong><br> The <code>taxRates</code> method only applies to subscription charges. If you use Cashier to make &quot;one-off&quot; charges, you will need to manually specify the tax rate at that time.</p></blockquote><p><a name="syncing-tax-rates"></a></p><h4 id="syncing-tax-rates" tabindex="-1"><a class="header-anchor" href="#syncing-tax-rates" aria-hidden="true">#</a> Syncing Tax Rates</h4><p>When changing the hard-coded tax rate IDs returned by the <code>taxRates</code> method, the tax settings on any existing subscriptions for the user will remain the same. If you wish to update the tax value for existing subscriptions with the new <code>taxRates</code> values, you should call the <code>syncTaxRates</code> method on the user&#39;s subscription instance:</p><pre><code>$user-&gt;subscription(&#39;default&#39;)-&gt;syncTaxRates();
</code></pre><p>This will also sync any item tax rates for a subscription with multiple products. If your application is offering subscriptions with multiple products, you should ensure that your billable model implements the <code>priceTaxRates</code> method <a href="#subscription-taxes">discussed above</a>.</p><p><a name="tax-exemption"></a></p><h4 id="tax-exemption" tabindex="-1"><a class="header-anchor" href="#tax-exemption" aria-hidden="true">#</a> Tax Exemption</h4><p>Cashier also offers the <code>isNotTaxExempt</code>, <code>isTaxExempt</code>, and <code>reverseChargeApplies</code> methods to determine if the customer is tax exempt. These methods will call the Stripe API to determine a customer&#39;s tax exemption status:</p><pre><code>use App\\Models\\User;

$user = User::find(1);

$user-&gt;isTaxExempt();
$user-&gt;isNotTaxExempt();
$user-&gt;reverseChargeApplies();
</code></pre><blockquote><p><strong>Warning</strong><br> These methods are also available on any <code>Laravel\\Cashier\\Invoice</code> object. However, when invoked on an <code>Invoice</code> object, the methods will determine the exemption status at the time the invoice was created.</p></blockquote><p><a name="subscription-anchor-date"></a></p><h3 id="subscription-anchor-date" tabindex="-1"><a class="header-anchor" href="#subscription-anchor-date" aria-hidden="true">#</a> Subscription Anchor Date</h3><p>By default, the billing cycle anchor is the date the subscription was created or, if a trial period is used, the date that the trial ends. If you would like to modify the billing anchor date, you may use the <code>anchorBillingCycleOn</code> method:</p><pre><code>use Illuminate\\Http\\Request;

Route::post(&#39;/user/subscribe&#39;, function (Request $request) {
    $anchor = Carbon::parse(&#39;first day of next month&#39;);

    $request-&gt;user()-&gt;newSubscription(&#39;default&#39;, &#39;price_monthly&#39;)
                -&gt;anchorBillingCycleOn($anchor-&gt;startOfDay())
                -&gt;create($request-&gt;paymentMethodId);

    // ...
});
</code></pre>`,19),ot={href:"https://stripe.com/docs/billing/subscriptions/billing-cycle",target:"_blank",rel:"noopener noreferrer"},st=o(`<p><a name="cancelling-subscriptions"></a></p><h3 id="cancelling-subscriptions" tabindex="-1"><a class="header-anchor" href="#cancelling-subscriptions" aria-hidden="true">#</a> Cancelling Subscriptions</h3><p>To cancel a subscription, call the <code>cancel</code> method on the user&#39;s subscription:</p><pre><code>$user-&gt;subscription(&#39;default&#39;)-&gt;cancel();
</code></pre><p>When a subscription is canceled, Cashier will automatically set the <code>ends_at</code> column in your <code>subscriptions</code> database table. This column is used to know when the <code>subscribed</code> method should begin returning <code>false</code>.</p><p>For example, if a customer cancels a subscription on March 1st, but the subscription was not scheduled to end until March 5th, the <code>subscribed</code> method will continue to return <code>true</code> until March 5th. This is done because a user is typically allowed to continue using an application until the end of their billing cycle.</p><p>You may determine if a user has canceled their subscription but are still on their &quot;grace period&quot; using the <code>onGracePeriod</code> method:</p><pre><code>if ($user-&gt;subscription(&#39;default&#39;)-&gt;onGracePeriod()) {
    // ...
}
</code></pre><p>If you wish to cancel a subscription immediately, call the <code>cancelNow</code> method on the user&#39;s subscription:</p><pre><code>$user-&gt;subscription(&#39;default&#39;)-&gt;cancelNow();
</code></pre><p>If you wish to cancel a subscription immediately and invoice any remaining un-invoiced metered usage or new / pending proration invoice items, call the <code>cancelNowAndInvoice</code> method on the user&#39;s subscription:</p><pre><code>$user-&gt;subscription(&#39;default&#39;)-&gt;cancelNowAndInvoice();
</code></pre><p>You may also choose to cancel the subscription at a specific moment in time:</p><pre><code>$user-&gt;subscription(&#39;default&#39;)-&gt;cancelAt(
    now()-&gt;addDays(10)
);
</code></pre><p><a name="resuming-subscriptions"></a></p><h3 id="resuming-subscriptions" tabindex="-1"><a class="header-anchor" href="#resuming-subscriptions" aria-hidden="true">#</a> Resuming Subscriptions</h3><p>If a customer has canceled their subscription and you wish to resume it, you may invoke the <code>resume</code> method on the subscription. The customer must still be within their &quot;grace period&quot; in order to resume a subscription:</p><pre><code>$user-&gt;subscription(&#39;default&#39;)-&gt;resume();
</code></pre><p>If the customer cancels a subscription and then resumes that subscription before the subscription has fully expired the customer will not be billed immediately. Instead, their subscription will be re-activated and they will be billed on the original billing cycle.</p><p><a name="subscription-trials"></a></p><h2 id="subscription-trials" tabindex="-1"><a class="header-anchor" href="#subscription-trials" aria-hidden="true">#</a> Subscription Trials</h2><p><a name="with-payment-method-up-front"></a></p><h3 id="with-payment-method-up-front" tabindex="-1"><a class="header-anchor" href="#with-payment-method-up-front" aria-hidden="true">#</a> With Payment Method Up Front</h3><p>If you would like to offer trial periods to your customers while still collecting payment method information up front, you should use the <code>trialDays</code> method when creating your subscriptions:</p><pre><code>use Illuminate\\Http\\Request;

Route::post(&#39;/user/subscribe&#39;, function (Request $request) {
    $request-&gt;user()-&gt;newSubscription(&#39;default&#39;, &#39;price_monthly&#39;)
                -&gt;trialDays(10)
                -&gt;create($request-&gt;paymentMethodId);

    // ...
});
</code></pre><p>This method will set the trial period ending date on the subscription record within the database and instruct Stripe to not begin billing the customer until after this date. When using the <code>trialDays</code> method, Cashier will overwrite any default trial period configured for the price in Stripe.</p><blockquote><p><strong>Warning</strong><br> If the customer&#39;s subscription is not canceled before the trial ending date they will be charged as soon as the trial expires, so you should be sure to notify your users of their trial ending date.</p></blockquote><p>The <code>trialUntil</code> method allows you to provide a <code>DateTime</code> instance that specifies when the trial period should end:</p><pre><code>use Carbon\\Carbon;

$user-&gt;newSubscription(&#39;default&#39;, &#39;price_monthly&#39;)
            -&gt;trialUntil(Carbon::now()-&gt;addDays(10))
            -&gt;create($paymentMethod);
</code></pre><p>You may determine if a user is within their trial period using either the <code>onTrial</code> method of the user instance or the <code>onTrial</code> method of the subscription instance. The two examples below are equivalent:</p><pre><code>if ($user-&gt;onTrial(&#39;default&#39;)) {
    // ...
}

if ($user-&gt;subscription(&#39;default&#39;)-&gt;onTrial()) {
    // ...
}
</code></pre><p>You may use the <code>endTrial</code> method to immediately end a subscription trial:</p><pre><code>$user-&gt;subscription(&#39;default&#39;)-&gt;endTrial();
</code></pre><p>To determine if an existing trial has expired, you may use the <code>hasExpiredTrial</code> methods:</p><pre><code>if ($user-&gt;hasExpiredTrial(&#39;default&#39;)) {
    // ...
}

if ($user-&gt;subscription(&#39;default&#39;)-&gt;hasExpiredTrial()) {
    // ...
}
</code></pre><p><a name="defining-trial-days-in-stripe-cashier"></a></p><h4 id="defining-trial-days-in-stripe-cashier" tabindex="-1"><a class="header-anchor" href="#defining-trial-days-in-stripe-cashier" aria-hidden="true">#</a> Defining Trial Days In Stripe / Cashier</h4><p>You may choose to define how many trial days your price&#39;s receive in the Stripe dashboard or always pass them explicitly using Cashier. If you choose to define your price&#39;s trial days in Stripe you should be aware that new subscriptions, including new subscriptions for a customer that had a subscription in the past, will always receive a trial period unless you explicitly call the <code>skipTrial()</code> method.</p><p><a name="without-payment-method-up-front"></a></p><h3 id="without-payment-method-up-front" tabindex="-1"><a class="header-anchor" href="#without-payment-method-up-front" aria-hidden="true">#</a> Without Payment Method Up Front</h3><p>If you would like to offer trial periods without collecting the user&#39;s payment method information up front, you may set the <code>trial_ends_at</code> column on the user record to your desired trial ending date. This is typically done during user registration:</p><pre><code>use App\\Models\\User;

$user = User::create([
    // ...
    &#39;trial_ends_at&#39; =&gt; now()-&gt;addDays(10),
]);
</code></pre><blockquote><p><strong>Warning</strong><br> Be sure to add a <a href="./eloquent-mutators#date-casting">date cast</a> for the <code>trial_ends_at</code> attribute within your billable model&#39;s class definition.</p></blockquote><p>Cashier refers to this type of trial as a &quot;generic trial&quot;, since it is not attached to any existing subscription. The <code>onTrial</code> method on the billable model instance will return <code>true</code> if the current date is not past the value of <code>trial_ends_at</code>:</p><pre><code>if ($user-&gt;onTrial()) {
    // User is within their trial period...
}
</code></pre><p>Once you are ready to create an actual subscription for the user, you may use the <code>newSubscription</code> method as usual:</p><pre><code>$user = User::find(1);

$user-&gt;newSubscription(&#39;default&#39;, &#39;price_monthly&#39;)-&gt;create($paymentMethod);
</code></pre><p>To retrieve the user&#39;s trial ending date, you may use the <code>trialEndsAt</code> method. This method will return a Carbon date instance if a user is on a trial or <code>null</code> if they aren&#39;t. You may also pass an optional subscription name parameter if you would like to get the trial ending date for a specific subscription other than the default one:</p><pre><code>if ($user-&gt;onTrial()) {
    $trialEndsAt = $user-&gt;trialEndsAt(&#39;main&#39;);
}
</code></pre><p>You may also use the <code>onGenericTrial</code> method if you wish to know specifically that the user is within their &quot;generic&quot; trial period and has not yet created an actual subscription:</p><pre><code>if ($user-&gt;onGenericTrial()) {
    // User is within their &quot;generic&quot; trial period...
}
</code></pre><p><a name="extending-trials"></a></p><h3 id="extending-trials" tabindex="-1"><a class="header-anchor" href="#extending-trials" aria-hidden="true">#</a> Extending Trials</h3><p>The <code>extendTrial</code> method allows you to extend the trial period of a subscription after the subscription has been created. If the trial has already expired and the customer is already being billed for the subscription, you can still offer them an extended trial. The time spent within the trial period will be deducted from the customer&#39;s next invoice:</p><pre><code>use App\\Models\\User;

$subscription = User::find(1)-&gt;subscription(&#39;default&#39;);

// End the trial 7 days from now...
$subscription-&gt;extendTrial(
    now()-&gt;addDays(7)
);

// Add an additional 5 days to the trial...
$subscription-&gt;extendTrial(
    $subscription-&gt;trial_ends_at-&gt;addDays(5)
);
</code></pre><p><a name="handling-stripe-webhooks"></a></p><h2 id="handling-stripe-webhooks" tabindex="-1"><a class="header-anchor" href="#handling-stripe-webhooks" aria-hidden="true">#</a> Handling Stripe Webhooks</h2>`,57),it=e("strong",null,"Note",-1),rt=e("br",null,null,-1),ct={href:"https://stripe.com/docs/stripe-cli",target:"_blank",rel:"noopener noreferrer"},pt=o(`<p>Stripe can notify your application of a variety of events via webhooks. By default, a route that points to Cashier&#39;s webhook controller is automatically registered by the Cashier service provider. This controller will handle all incoming webhook requests.</p><p>By default, the Cashier webhook controller will automatically handle cancelling subscriptions that have too many failed charges (as defined by your Stripe settings), customer updates, customer deletions, subscription updates, and payment method changes; however, as we&#39;ll soon discover, you can extend this controller to handle any Stripe webhook event you like.</p><p>To ensure your application can handle Stripe webhooks, be sure to configure the webhook URL in the Stripe control panel. By default, Cashier&#39;s webhook controller responds to the <code>/stripe/webhook</code> URL path. The full list of all webhooks you should enable in the Stripe control panel are:</p><ul><li><code>customer.subscription.created</code></li><li><code>customer.subscription.updated</code></li><li><code>customer.subscription.deleted</code></li><li><code>customer.updated</code></li><li><code>customer.deleted</code></li><li><code>payment_method.automatically_updated</code></li><li><code>invoice.payment_action_required</code></li><li><code>invoice.payment_succeeded</code></li></ul><p>For convenience, Cashier includes a <code>cashier:webhook</code> Artisan command. This command will create a webhook in Stripe that listens to all of the events required by Cashier:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan cashier:webhook
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>By default, the created webhook will point to the URL defined by the <code>APP_URL</code> environment variable and the <code>cashier.webhook</code> route that is included with Cashier. You may provide the <code>--url</code> option when invoking the command if you would like to use a different URL:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan cashier:webhook <span class="token parameter variable">--url</span> <span class="token string">&quot;https://example.com/stripe/webhook&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>The webhook that is created will use the Stripe API version that your version of Cashier is compatible with. If you would like to use a different Stripe version, you may provide the <code>--api-version</code> option:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan cashier:webhook --api-version<span class="token operator">=</span><span class="token string">&quot;2019-12-03&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>After creation, the webhook will be immediately active. If you wish to create the webhook but have it disabled until you&#39;re ready, you may provide the <code>--disabled</code> option when invoking the command:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan cashier:webhook <span class="token parameter variable">--disabled</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p><strong>Warning</strong><br> Make sure you protect incoming Stripe webhook requests with Cashier&#39;s included <a href="#verifying-webhook-signatures">webhook signature verification</a> middleware.</p></blockquote><p><a name="webhooks-csrf-protection"></a></p><h4 id="webhooks-csrf-protection" tabindex="-1"><a class="header-anchor" href="#webhooks-csrf-protection" aria-hidden="true">#</a> Webhooks &amp; CSRF Protection</h4><p>Since Stripe webhooks need to bypass Laravel&#39;s <a href="./csrf">CSRF protection</a>, be sure to list the URI as an exception in your application&#39;s <code>App\\Http\\Middleware\\VerifyCsrfToken</code> middleware or list the route outside of the <code>web</code> middleware group:</p><pre><code>protected $except = [
    &#39;stripe/*&#39;,
];
</code></pre><p><a name="defining-webhook-event-handlers"></a></p><h3 id="defining-webhook-event-handlers" tabindex="-1"><a class="header-anchor" href="#defining-webhook-event-handlers" aria-hidden="true">#</a> Defining Webhook Event Handlers</h3><p>Cashier automatically handles subscription cancellations for failed charges and other common Stripe webhook events. However, if you have additional webhook events you would like to handle, you may do so by listening to the following events that are dispatched by Cashier:</p><ul><li><code>Laravel\\Cashier\\Events\\WebhookReceived</code></li><li><code>Laravel\\Cashier\\Events\\WebhookHandled</code></li></ul><p>Both events contain the full payload of the Stripe webhook. For example, if you wish to handle the <code>invoice.payment_succeeded</code> webhook, you may register a <a href="./events#defining-listeners">listener</a> that will handle the event:</p><pre><code>&lt;?php

namespace App\\Listeners;

use Laravel\\Cashier\\Events\\WebhookReceived;

class StripeEventListener
{
    /**
     * Handle received Stripe webhooks.
     */
    public function handle(WebhookReceived $event): void
    {
        if ($event-&gt;payload[&#39;type&#39;] === &#39;invoice.payment_succeeded&#39;) {
            // Handle the incoming event...
        }
    }
}
</code></pre><p>Once your listener has been defined, you may register it within your application&#39;s <code>EventServiceProvider</code>:</p><pre><code>&lt;?php

namespace App\\Providers;

use App\\Listeners\\StripeEventListener;
use Illuminate\\Foundation\\Support\\Providers\\EventServiceProvider as ServiceProvider;
use Laravel\\Cashier\\Events\\WebhookReceived;

class EventServiceProvider extends ServiceProvider
{
    protected $listen = [
        WebhookReceived::class =&gt; [
            StripeEventListener::class,
        ],
    ];
}
</code></pre><p><a name="verifying-webhook-signatures"></a></p><h3 id="verifying-webhook-signatures" tabindex="-1"><a class="header-anchor" href="#verifying-webhook-signatures" aria-hidden="true">#</a> Verifying Webhook Signatures</h3>`,27),dt={href:"https://stripe.com/docs/webhooks/signatures",target:"_blank",rel:"noopener noreferrer"},ut=o(`<p>To enable webhook verification, ensure that the <code>STRIPE_WEBHOOK_SECRET</code> environment variable is set in your application&#39;s <code>.env</code> file. The webhook <code>secret</code> may be retrieved from your Stripe account dashboard.</p><p><a name="single-charges"></a></p><h2 id="single-charges" tabindex="-1"><a class="header-anchor" href="#single-charges" aria-hidden="true">#</a> Single Charges</h2><p><a name="simple-charge"></a></p><h3 id="simple-charge" tabindex="-1"><a class="header-anchor" href="#simple-charge" aria-hidden="true">#</a> Simple Charge</h3><p>If you would like to make a one-time charge against a customer, you may use the <code>charge</code> method on a billable model instance. You will need to <a href="#payment-methods-for-single-charges">provide a payment method identifier</a> as the second argument to the <code>charge</code> method:</p><pre><code>use Illuminate\\Http\\Request;

Route::post(&#39;/purchase&#39;, function (Request $request) {
    $stripeCharge = $request-&gt;user()-&gt;charge(
        100, $request-&gt;paymentMethodId
    );

    // ...
});
</code></pre>`,7),lt=e("code",null,"charge",-1),ht={href:"https://stripe.com/docs/api/charges/create",target:"_blank",rel:"noopener noreferrer"},mt=o(`<pre><code>$user-&gt;charge(100, $paymentMethod, [
    &#39;custom_option&#39; =&gt; $value,
]);
</code></pre><p>You may also use the <code>charge</code> method without an underlying customer or user. To accomplish this, invoke the <code>charge</code> method on a new instance of your application&#39;s billable model:</p><pre><code>use App\\Models\\User;

$stripeCharge = (new User)-&gt;charge(100, $paymentMethod);
</code></pre><p>The <code>charge</code> method will throw an exception if the charge fails. If the charge is successful, an instance of <code>Laravel\\Cashier\\Payment</code> will be returned from the method:</p><pre><code>try {
    $payment = $user-&gt;charge(100, $paymentMethod);
} catch (Exception $e) {
    // ...
}
</code></pre><blockquote><p><strong>Warning</strong><br> The <code>charge</code> method accepts the payment amount in the lowest denominator of the currency used by your application. For example, if customers are paying in United States Dollars, amounts should be specified in pennies.</p></blockquote><p><a name="charge-with-invoice"></a></p><h3 id="charge-with-invoice" tabindex="-1"><a class="header-anchor" href="#charge-with-invoice" aria-hidden="true">#</a> Charge With Invoice</h3><p>Sometimes you may need to make a one-time charge and offer a PDF receipt to your customer. The <code>invoicePrice</code> method lets you do just that. For example, let&#39;s invoice a customer for five new shirts:</p><pre><code>$user-&gt;invoicePrice(&#39;price_tshirt&#39;, 5);
</code></pre><p>The invoice will be immediately charged against the user&#39;s default payment method. The <code>invoicePrice</code> method also accepts an array as its third argument. This array contains the billing options for the invoice item. The fourth argument accepted by the method is also an array which should contain the billing options for the invoice itself:</p><pre><code>$user-&gt;invoicePrice(&#39;price_tshirt&#39;, 5, [
    &#39;discounts&#39; =&gt; [
        [&#39;coupon&#39; =&gt; &#39;SUMMER21SALE&#39;]
    ],
], [
    &#39;default_tax_rates&#39; =&gt; [&#39;txr_id&#39;],
]);
</code></pre><p>Similarly to <code>invoicePrice</code>, you may use the <code>tabPrice</code> method to create a one-time charge for multiple items (up to 250 items per invoice) by adding them to the customer&#39;s &quot;tab&quot; and then invoicing the customer. For example, we may invoice a customer for five shirts and two mugs:</p><pre><code>$user-&gt;tabPrice(&#39;price_tshirt&#39;, 5);
$user-&gt;tabPrice(&#39;price_mug&#39;, 2);
$user-&gt;invoice();
</code></pre><p>Alternatively, you may use the <code>invoiceFor</code> method to make a &quot;one-off&quot; charge against the customer&#39;s default payment method:</p><pre><code>$user-&gt;invoiceFor(&#39;One Time Fee&#39;, 500);
</code></pre><p>Although the <code>invoiceFor</code> method is available for you to use, it is recommended that you use the <code>invoicePrice</code> and <code>tabPrice</code> methods with pre-defined prices. By doing so, you will have access to better analytics and data within your Stripe dashboard regarding your sales on a per-product basis.</p><blockquote><p><strong>Warning</strong><br> The <code>invoice</code>, <code>invoicePrice</code>, and <code>invoiceFor</code> methods will create a Stripe invoice which will retry failed billing attempts. If you do not want invoices to retry failed charges, you will need to close them using the Stripe API after the first failed charge.</p></blockquote><p><a name="creating-payment-intents"></a></p><h3 id="creating-payment-intents" tabindex="-1"><a class="header-anchor" href="#creating-payment-intents" aria-hidden="true">#</a> Creating Payment Intents</h3><p>You can create a new Stripe payment intent by invoking the <code>pay</code> method on a billable model instance. Calling this method will create a payment intent that is wrapped in a <code>Laravel\\Cashier\\Payment</code> instance:</p><pre><code>use Illuminate\\Http\\Request;

Route::post(&#39;/pay&#39;, function (Request $request) {
    $payment = $request-&gt;user()-&gt;pay(
        $request-&gt;get(&#39;amount&#39;)
    );

    return $payment-&gt;client_secret;
});
</code></pre>`,22),gt={href:"https://stripe.com/docs/payments/accept-a-payment?platform=web",target:"_blank",rel:"noopener noreferrer"},bt=o(`<p>When using the <code>pay</code> method, the default payment methods that are enabled within your Stripe dashboard will be available to the customer. Alternatively, if you only want to allow for some specific payment methods to be used, you may use the <code>payWith</code> method:</p><pre><code>use Illuminate\\Http\\Request;

Route::post(&#39;/pay&#39;, function (Request $request) {
    $payment = $request-&gt;user()-&gt;payWith(
        $request-&gt;get(&#39;amount&#39;), [&#39;card&#39;, &#39;bancontact&#39;]
    );

    return $payment-&gt;client_secret;
});
</code></pre><blockquote><p><strong>Warning</strong><br> The <code>pay</code> and <code>payWith</code> methods accept the payment amount in the lowest denominator of the currency used by your application. For example, if customers are paying in United States Dollars, amounts should be specified in pennies.</p></blockquote><p><a name="refunding-charges"></a></p><h3 id="refunding-charges" tabindex="-1"><a class="header-anchor" href="#refunding-charges" aria-hidden="true">#</a> Refunding Charges</h3><p>If you need to refund a Stripe charge, you may use the <code>refund</code> method. This method accepts the Stripe <a href="#payment-methods-for-single-charges">payment intent ID</a> as its first argument:</p><pre><code>$payment = $user-&gt;charge(100, $paymentMethodId);

$user-&gt;refund($payment-&gt;id);
</code></pre><p><a name="invoices"></a></p><h2 id="invoices" tabindex="-1"><a class="header-anchor" href="#invoices" aria-hidden="true">#</a> Invoices</h2><p><a name="retrieving-invoices"></a></p><h3 id="retrieving-invoices" tabindex="-1"><a class="header-anchor" href="#retrieving-invoices" aria-hidden="true">#</a> Retrieving Invoices</h3><p>You may easily retrieve an array of a billable model&#39;s invoices using the <code>invoices</code> method. The <code>invoices</code> method returns a collection of <code>Laravel\\Cashier\\Invoice</code> instances:</p><pre><code>$invoices = $user-&gt;invoices();
</code></pre><p>If you would like to include pending invoices in the results, you may use the <code>invoicesIncludingPending</code> method:</p><pre><code>$invoices = $user-&gt;invoicesIncludingPending();
</code></pre><p>You may use the <code>findInvoice</code> method to retrieve a specific invoice by its ID:</p><pre><code>$invoice = $user-&gt;findInvoice($invoiceId);
</code></pre><p><a name="displaying-invoice-information"></a></p><h4 id="displaying-invoice-information" tabindex="-1"><a class="header-anchor" href="#displaying-invoice-information" aria-hidden="true">#</a> Displaying Invoice Information</h4><p>When listing the invoices for the customer, you may use the invoice&#39;s methods to display the relevant invoice information. For example, you may wish to list every invoice in a table, allowing the user to easily download any of them:</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>    <span class="token operator">&lt;</span>table<span class="token operator">&gt;</span>
        @<span class="token keyword">foreach</span> <span class="token punctuation">(</span><span class="token variable">$invoices</span> <span class="token keyword">as</span> <span class="token variable">$invoice</span><span class="token punctuation">)</span>
            <span class="token operator">&lt;</span>tr<span class="token operator">&gt;</span>
                <span class="token operator">&lt;</span>td<span class="token operator">&gt;</span><span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token variable">$invoice</span><span class="token operator">-&gt;</span><span class="token function">date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">toFormattedDateString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>td<span class="token operator">&gt;</span>
                <span class="token operator">&lt;</span>td<span class="token operator">&gt;</span><span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token variable">$invoice</span><span class="token operator">-&gt;</span><span class="token function">total</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>td<span class="token operator">&gt;</span>
                <span class="token operator">&lt;</span>td<span class="token operator">&gt;</span><span class="token operator">&lt;</span>a href<span class="token operator">=</span><span class="token string double-quoted-string">&quot;/user/invoice/{{ <span class="token interpolation"><span class="token variable">$invoice</span><span class="token operator">-&gt;</span><span class="token property">id</span></span> }}&quot;</span><span class="token operator">&gt;</span>Download<span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>td<span class="token operator">&gt;</span>
            <span class="token operator">&lt;</span><span class="token operator">/</span>tr<span class="token operator">&gt;</span>
        @<span class="token keyword">endforeach</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>table<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="upcoming-invoices"></a></p><h3 id="upcoming-invoices" tabindex="-1"><a class="header-anchor" href="#upcoming-invoices" aria-hidden="true">#</a> Upcoming Invoices</h3><p>To retrieve the upcoming invoice for a customer, you may use the <code>upcomingInvoice</code> method:</p><pre><code>$invoice = $user-&gt;upcomingInvoice();
</code></pre><p>Similarly, if the customer has multiple subscriptions, you can also retrieve the upcoming invoice for a specific subscription:</p><pre><code>$invoice = $user-&gt;subscription(&#39;default&#39;)-&gt;upcomingInvoice();
</code></pre><p><a name="previewing-subscription-invoices"></a></p><h3 id="previewing-subscription-invoices" tabindex="-1"><a class="header-anchor" href="#previewing-subscription-invoices" aria-hidden="true">#</a> Previewing Subscription Invoices</h3><p>Using the <code>previewInvoice</code> method, you can preview an invoice before making price changes. This will allow you to determine what your customer&#39;s invoice will look like when a given price change is made:</p><pre><code>$invoice = $user-&gt;subscription(&#39;default&#39;)-&gt;previewInvoice(&#39;price_yearly&#39;);
</code></pre><p>You may pass an array of prices to the <code>previewInvoice</code> method in order to preview invoices with multiple new prices:</p><pre><code>$invoice = $user-&gt;subscription(&#39;default&#39;)-&gt;previewInvoice([&#39;price_yearly&#39;, &#39;price_metered&#39;]);
</code></pre><p><a name="generating-invoice-pdfs"></a></p><h3 id="generating-invoice-pdfs" tabindex="-1"><a class="header-anchor" href="#generating-invoice-pdfs" aria-hidden="true">#</a> Generating Invoice PDFs</h3><p>Before generating invoice PDFs, you should use Composer to install the Dompdf library, which is the default invoice renderer for Cashier:</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>composer <span class="token keyword">require</span> dompdf<span class="token operator">/</span>dompdf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>From within a route or controller, you may use the <code>downloadInvoice</code> method to generate a PDF download of a given invoice. This method will automatically generate the proper HTTP response needed to download the invoice:</p><pre><code>use Illuminate\\Http\\Request;

Route::get(&#39;/user/invoice/{invoice}&#39;, function (Request $request, string $invoiceId) {
    return $request-&gt;user()-&gt;downloadInvoice($invoiceId);
});
</code></pre><p>By default, all data on the invoice is derived from the customer and invoice data stored in Stripe. The filename is based on your <code>app.name</code> config value. However, you can customize some of this data by providing an array as the second argument to the <code>downloadInvoice</code> method. This array allows you to customize information such as your company and product details:</p><pre><code>return $request-&gt;user()-&gt;downloadInvoice($invoiceId, [
    &#39;vendor&#39; =&gt; &#39;Your Company&#39;,
    &#39;product&#39; =&gt; &#39;Your Product&#39;,
    &#39;street&#39; =&gt; &#39;Main Str. 1&#39;,
    &#39;location&#39; =&gt; &#39;2000 Antwerp, Belgium&#39;,
    &#39;phone&#39; =&gt; &#39;+32 499 00 00 00&#39;,
    &#39;email&#39; =&gt; &#39;info@example.com&#39;,
    &#39;url&#39; =&gt; &#39;https://example.com&#39;,
    &#39;vendorVat&#39; =&gt; &#39;BE123456789&#39;,
]);
</code></pre><p>The <code>downloadInvoice</code> method also allows for a custom filename via its third argument. This filename will automatically be suffixed with <code>.pdf</code>:</p><pre><code>return $request-&gt;user()-&gt;downloadInvoice($invoiceId, [], &#39;my-invoice&#39;);
</code></pre><p><a name="custom-invoice-render"></a></p><h4 id="custom-invoice-renderer" tabindex="-1"><a class="header-anchor" href="#custom-invoice-renderer" aria-hidden="true">#</a> Custom Invoice Renderer</h4>`,45),yt=e("code",null,"DompdfInvoiceRenderer",-1),ft={href:"https://github.com/dompdf/dompdf",target:"_blank",rel:"noopener noreferrer"},vt=e("code",null,"Laravel\\Cashier\\Contracts\\InvoiceRenderer",-1),kt=e("pre",null,[e("code",null,`use Illuminate\\Support\\Facades\\Http;
use Laravel\\Cashier\\Contracts\\InvoiceRenderer;
use Laravel\\Cashier\\Invoice;

class ApiInvoiceRenderer implements InvoiceRenderer
{
    /**
     * Render the given invoice and return the raw PDF bytes.
     */
    public function render(Invoice $invoice, array $data = [], array $options = []): string
    {
        $html = $invoice->view($data)->render();

        return Http::get('https://example.com/html-to-pdf', ['html' => $html])->get()->body();
    }
}
`)],-1),wt=e("p",null,[t("Once you have implemented the invoice renderer contract, you should update the "),e("code",null,"cashier.invoices.renderer"),t(" configuration value in your application's "),e("code",null,"config/cashier.php"),t(" configuration file. This configuration value should be set to the class name of your custom renderer implementation.")],-1),_t=e("p",null,[e("a",{name:"checkout"})],-1),St=e("h2",{id:"checkout",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#checkout","aria-hidden":"true"},"#"),t(" Checkout")],-1),qt={href:"https://stripe.com/payments/checkout",target:"_blank",rel:"noopener noreferrer"},xt={href:"https://stripe.com/docs/payments/checkout",target:"_blank",rel:"noopener noreferrer"},$t=o(`<p><a name="product-checkouts"></a></p><h3 id="product-checkouts" tabindex="-1"><a class="header-anchor" href="#product-checkouts" aria-hidden="true">#</a> Product Checkouts</h3><p>You may perform a checkout for an existing product that has been created within your Stripe dashboard using the <code>checkout</code> method on a billable model. The <code>checkout</code> method will initiate a new Stripe Checkout session. By default, you&#39;re required to pass a Stripe Price ID:</p><pre><code>use Illuminate\\Http\\Request;

Route::get(&#39;/product-checkout&#39;, function (Request $request) {
    return $request-&gt;user()-&gt;checkout(&#39;price_tshirt&#39;);
});
</code></pre><p>If needed, you may also specify a product quantity:</p><pre><code>use Illuminate\\Http\\Request;

Route::get(&#39;/product-checkout&#39;, function (Request $request) {
    return $request-&gt;user()-&gt;checkout([&#39;price_tshirt&#39; =&gt; 15]);
});
</code></pre><p>When a customer visits this route they will be redirected to Stripe&#39;s Checkout page. By default, when a user successfully completes or cancels a purchase they will be redirected to your <code>home</code> route location, but you may specify custom callback URLs using the <code>success_url</code> and <code>cancel_url</code> options:</p><pre><code>use Illuminate\\Http\\Request;

Route::get(&#39;/product-checkout&#39;, function (Request $request) {
    return $request-&gt;user()-&gt;checkout([&#39;price_tshirt&#39; =&gt; 1], [
        &#39;success_url&#39; =&gt; route(&#39;your-success-route&#39;),
        &#39;cancel_url&#39; =&gt; route(&#39;your-cancel-route&#39;),
    ]);
});
</code></pre><p>When defining your <code>success_url</code> checkout option, you may instruct Stripe to add the checkout session ID as a query string parameter when invoking your URL. To do so, add the literal string <code>{CHECKOUT_SESSION_ID}</code> to your <code>success_url</code> query string. Stripe will replace this placeholder with the actual checkout session ID:</p><pre><code>use Illuminate\\Http\\Request;
use Stripe\\Checkout\\Session;
use Stripe\\Customer;

Route::get(&#39;/product-checkout&#39;, function (Request $request) {
    return $request-&gt;user()-&gt;checkout([&#39;price_tshirt&#39; =&gt; 1], [
        &#39;success_url&#39; =&gt; route(&#39;checkout-success&#39;).&#39;?session_id={CHECKOUT_SESSION_ID}&#39;,
        &#39;cancel_url&#39; =&gt; route(&#39;checkout-cancel&#39;),
    ]);
});

Route::get(&#39;/checkout-success&#39;, function (Request $request) {
    $checkoutSession = $request-&gt;user()-&gt;stripe()-&gt;checkout-&gt;sessions-&gt;retrieve($request-&gt;get(&#39;session_id&#39;));

    return view(&#39;checkout.success&#39;, [&#39;checkoutSession&#39; =&gt; $checkoutSession]);
})-&gt;name(&#39;checkout-success&#39;);
</code></pre><p><a name="checkout-promotion-codes"></a></p><h4 id="promotion-codes" tabindex="-1"><a class="header-anchor" href="#promotion-codes" aria-hidden="true">#</a> Promotion Codes</h4>`,12),Ct={href:"https://stripe.com/docs/billing/subscriptions/discounts/codes",target:"_blank",rel:"noopener noreferrer"},It=e("code",null,"allowPromotionCodes",-1),Tt=o(`<pre><code>use Illuminate\\Http\\Request;

Route::get(&#39;/product-checkout&#39;, function (Request $request) {
    return $request-&gt;user()
        -&gt;allowPromotionCodes()
        -&gt;checkout(&#39;price_tshirt&#39;);
});
</code></pre><p><a name="single-charge-checkouts"></a></p><h3 id="single-charge-checkouts" tabindex="-1"><a class="header-anchor" href="#single-charge-checkouts" aria-hidden="true">#</a> Single Charge Checkouts</h3><p>You can also perform a simple charge for an ad-hoc product that has not been created in your Stripe dashboard. To do so you may use the <code>checkoutCharge</code> method on a billable model and pass it a chargeable amount, a product name, and an optional quantity. When a customer visits this route they will be redirected to Stripe&#39;s Checkout page:</p><pre><code>use Illuminate\\Http\\Request;

Route::get(&#39;/charge-checkout&#39;, function (Request $request) {
    return $request-&gt;user()-&gt;checkoutCharge(1200, &#39;T-Shirt&#39;, 5);
});
</code></pre><blockquote><p><strong>Warning</strong><br> When using the <code>checkoutCharge</code> method, Stripe will always create a new product and price in your Stripe dashboard. Therefore, we recommend that you create the products up front in your Stripe dashboard and use the <code>checkout</code> method instead.</p></blockquote><p><a name="subscription-checkouts"></a></p><h3 id="subscription-checkouts" tabindex="-1"><a class="header-anchor" href="#subscription-checkouts" aria-hidden="true">#</a> Subscription Checkouts</h3><blockquote><p><strong>Warning</strong><br> Using Stripe Checkout for subscriptions requires you to enable the <code>customer.subscription.created</code> webhook in your Stripe dashboard. This webhook will create the subscription record in your database and store all of the relevant subscription items.</p></blockquote><p>You may also use Stripe Checkout to initiate subscriptions. After defining your subscription with Cashier&#39;s subscription builder methods, you may call the <code>checkout </code>method. When a customer visits this route they will be redirected to Stripe&#39;s Checkout page:</p><pre><code>use Illuminate\\Http\\Request;

Route::get(&#39;/subscription-checkout&#39;, function (Request $request) {
    return $request-&gt;user()
        -&gt;newSubscription(&#39;default&#39;, &#39;price_monthly&#39;)
        -&gt;checkout();
});
</code></pre><p>Just as with product checkouts, you may customize the success and cancellation URLs:</p><pre><code>use Illuminate\\Http\\Request;

Route::get(&#39;/subscription-checkout&#39;, function (Request $request) {
    return $request-&gt;user()
        -&gt;newSubscription(&#39;default&#39;, &#39;price_monthly&#39;)
        -&gt;checkout([
            &#39;success_url&#39; =&gt; route(&#39;your-success-route&#39;),
            &#39;cancel_url&#39; =&gt; route(&#39;your-cancel-route&#39;),
        ]);
});
</code></pre><p>Of course, you can also enable promotion codes for subscription checkouts:</p><pre><code>use Illuminate\\Http\\Request;

Route::get(&#39;/subscription-checkout&#39;, function (Request $request) {
    return $request-&gt;user()
        -&gt;newSubscription(&#39;default&#39;, &#39;price_monthly&#39;)
        -&gt;allowPromotionCodes()
        -&gt;checkout();
});
</code></pre>`,15),Pt=e("strong",null,"Warning",-1),Rt=e("br",null,null,-1),At=e("code",null,"anchorBillingCycleOn",-1),Mt={href:"https://stripe.com/docs/api/checkout/sessions/create",target:"_blank",rel:"noopener noreferrer"},Dt=o(`<p><a name="stripe-checkout-trial-periods"></a></p><h4 id="stripe-checkout-trial-periods" tabindex="-1"><a class="header-anchor" href="#stripe-checkout-trial-periods" aria-hidden="true">#</a> Stripe Checkout &amp; Trial Periods</h4><p>Of course, you can define a trial period when building a subscription that will be completed using Stripe Checkout:</p><pre><code>$checkout = Auth::user()-&gt;newSubscription(&#39;default&#39;, &#39;price_monthly&#39;)
    -&gt;trialDays(3)
    -&gt;checkout();
</code></pre><p>However, the trial period must be at least 48 hours, which is the minimum amount of trial time supported by Stripe Checkout.</p><p><a name="stripe-checkout-subscriptions-and-webhooks"></a></p><h4 id="subscriptions-webhooks" tabindex="-1"><a class="header-anchor" href="#subscriptions-webhooks" aria-hidden="true">#</a> Subscriptions &amp; Webhooks</h4><p>Remember, Stripe and Cashier update subscription statuses via webhooks, so there&#39;s a possibility a subscription might not yet be active when the customer returns to the application after entering their payment information. To handle this scenario, you may wish to display a message informing the user that their payment or subscription is pending.</p><p><a name="collecting-tax-ids"></a></p><h3 id="collecting-tax-ids" tabindex="-1"><a class="header-anchor" href="#collecting-tax-ids" aria-hidden="true">#</a> Collecting Tax IDs</h3><p>Checkout also supports collecting a customer&#39;s Tax ID. To enable this on a checkout session, invoke the <code>collectTaxIds</code> method when creating the session:</p><pre><code>$checkout = $user-&gt;collectTaxIds()-&gt;checkout(&#39;price_tshirt&#39;);
</code></pre><p>When this method is invoked, a new checkbox will be available to the customer that allows them to indicate if they&#39;re purchasing as a company. If so, they will have the opportunity to provide their Tax ID number.</p><blockquote><p><strong>Warning</strong><br> If you have already configured <a href="#tax-configuration">automatic tax collection</a> in your application&#39;s service provider then this feature will be enabled automatically and there is no need to invoke the <code>collectTaxIds</code> method.</p></blockquote><p><a name="guest-checkouts"></a></p><h3 id="guest-checkouts" tabindex="-1"><a class="header-anchor" href="#guest-checkouts" aria-hidden="true">#</a> Guest Checkouts</h3><p>Using the <code>Checkout::guest</code> method, you may initiate checkout sessions for guests of your application that do not have an &quot;account&quot;:</p><pre><code>use Illuminate\\Http\\Request;
use Laravel\\Cashier\\Checkout;

Route::get(&#39;/product-checkout&#39;, function (Request $request) {
    return Checkout::guest()-&gt;create(&#39;price_tshirt&#39;, [
        &#39;success_url&#39; =&gt; route(&#39;your-success-route&#39;),
        &#39;cancel_url&#39; =&gt; route(&#39;your-cancel-route&#39;),
    ]);
});
</code></pre><p>Similarly to when creating checkout sessions for existing users, you may utilize additional methods available on the <code>Laravel\\Cashier\\CheckoutBuilder</code> instance to customize the guest checkout session:</p><pre><code>use Illuminate\\Http\\Request;
use Laravel\\Cashier\\Checkout;

Route::get(&#39;/product-checkout&#39;, function (Request $request) {
    return Checkout::guest()
        -&gt;withPromotionCode(&#39;promo-code&#39;)
        -&gt;create(&#39;price_tshirt&#39;, [
            &#39;success_url&#39; =&gt; route(&#39;your-success-route&#39;),
            &#39;cancel_url&#39; =&gt; route(&#39;your-cancel-route&#39;),
        ]);
});
</code></pre>`,20),Et=e("code",null,"checkout.session.completed",-1),Ut={href:"https://dashboard.stripe.com/webhooks",target:"_blank",rel:"noopener noreferrer"},Wt=e("a",{href:"#handling-stripe-webhooks"},"handle the webhook with Cashier",-1),Ft={href:"https://stripe.com/docs/api/checkout/sessions/object",target:"_blank",rel:"noopener noreferrer"},Bt=e("code",null,"checkout",-1),Lt=o(`<p><a name="handling-failed-payments"></a></p><h2 id="handling-failed-payments" tabindex="-1"><a class="header-anchor" href="#handling-failed-payments" aria-hidden="true">#</a> Handling Failed Payments</h2><p>Sometimes, payments for subscriptions or single charges can fail. When this happens, Cashier will throw an <code>Laravel\\Cashier\\Exceptions\\IncompletePayment</code> exception that informs you that this happened. After catching this exception, you have two options on how to proceed.</p><p>First, you could redirect your customer to the dedicated payment confirmation page which is included with Cashier. This page already has an associated named route that is registered via Cashier&#39;s service provider. So, you may catch the <code>IncompletePayment</code> exception and redirect the user to the payment confirmation page:</p><pre><code>use Laravel\\Cashier\\Exceptions\\IncompletePayment;

try {
    $subscription = $user-&gt;newSubscription(&#39;default&#39;, &#39;price_monthly&#39;)
                            -&gt;create($paymentMethod);
} catch (IncompletePayment $exception) {
    return redirect()-&gt;route(
        &#39;cashier.payment&#39;,
        [$exception-&gt;payment-&gt;id, &#39;redirect&#39; =&gt; route(&#39;home&#39;)]
    );
}
</code></pre><p>On the payment confirmation page, the customer will be prompted to enter their credit card information again and perform any additional actions required by Stripe, such as &quot;3D Secure&quot; confirmation. After confirming their payment, the user will be redirected to the URL provided by the <code>redirect</code> parameter specified above. Upon redirection, <code>message</code> (string) and <code>success</code> (integer) query string variables will be added to the URL. The payment page currently supports the following payment method types:</p>`,6),Yt=e("div",{class:"content-list",markdown:"1"},[e("ul",null,[e("li",null,"Credit Cards"),e("li",null,"Alipay"),e("li",null,"Bancontact"),e("li",null,"BECS Direct Debit"),e("li",null,"EPS"),e("li",null,"Giropay"),e("li",null,"iDEAL"),e("li",null,"SEPA Direct Debit")])],-1),Ht={href:"https://dashboard.stripe.com/account/billing/automatic",target:"_blank",rel:"noopener noreferrer"},Ot=e("code",null,"IncompletePayment",-1),Nt=o(`<p>Payment exceptions may be thrown for the following methods: <code>charge</code>, <code>invoiceFor</code>, and <code>invoice</code> on models using the <code>Billable</code> trait. When interacting with subscriptions, the <code>create</code> method on the <code>SubscriptionBuilder</code>, and the <code>incrementAndInvoice</code> and <code>swapAndInvoice</code> methods on the <code>Subscription</code> and <code>SubscriptionItem</code> models may throw incomplete payment exceptions.</p><p>Determining if an existing subscription has an incomplete payment may be accomplished using the <code>hasIncompletePayment</code> method on the billable model or a subscription instance:</p><pre><code>if ($user-&gt;hasIncompletePayment(&#39;default&#39;)) {
    // ...
}

if ($user-&gt;subscription(&#39;default&#39;)-&gt;hasIncompletePayment()) {
    // ...
}
</code></pre><p>You can derive the specific status of an incomplete payment by inspecting the <code>payment</code> property on the exception instance:</p><pre><code>use Laravel\\Cashier\\Exceptions\\IncompletePayment;

try {
    $user-&gt;charge(1000, &#39;pm_card_threeDSecure2Required&#39;);
} catch (IncompletePayment $exception) {
    // Get the payment intent status...
    $exception-&gt;payment-&gt;status;

    // Check specific conditions...
    if ($exception-&gt;payment-&gt;requiresPaymentMethod()) {
        // ...
    } elseif ($exception-&gt;payment-&gt;requiresConfirmation()) {
        // ...
    }
}
</code></pre><p><a name="confirming-payments"></a></p><h3 id="confirming-payments" tabindex="-1"><a class="header-anchor" href="#confirming-payments" aria-hidden="true">#</a> Confirming Payments</h3><p>Some payment methods require additional data in order to confirm payments. For example, SEPA payment methods require additional &quot;mandate&quot; data during the payment process. You may provide this data to Cashier using the <code>withPaymentConfirmationOptions</code> method:</p><pre><code>$subscription-&gt;withPaymentConfirmationOptions([
    &#39;mandate_data&#39; =&gt; &#39;...&#39;,
])-&gt;swap(&#39;price_xxx&#39;);
</code></pre>`,9),jt={href:"https://stripe.com/docs/api/payment_intents/confirm",target:"_blank",rel:"noopener noreferrer"},Gt=e("p",null,[e("a",{name:"strong-customer-authentication"})],-1),Qt=e("h2",{id:"strong-customer-authentication",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#strong-customer-authentication","aria-hidden":"true"},"#"),t(" Strong Customer Authentication")],-1),Vt=e("p",null,"If your business or one of your customers is based in Europe you will need to abide by the EU's Strong Customer Authentication (SCA) regulations. These regulations were imposed in September 2019 by the European Union to prevent payment fraud. Luckily, Stripe and Cashier are prepared for building SCA compliant applications.",-1),zt=e("strong",null,"Warning",-1),Kt=e("br",null,null,-1),Jt={href:"https://stripe.com/guides/strong-customer-authentication",target:"_blank",rel:"noopener noreferrer"},Xt={href:"https://stripe.com/docs/strong-customer-authentication",target:"_blank",rel:"noopener noreferrer"},Zt=o(`<p><a name="payments-requiring-additional-confirmation"></a></p><h3 id="payments-requiring-additional-confirmation" tabindex="-1"><a class="header-anchor" href="#payments-requiring-additional-confirmation" aria-hidden="true">#</a> Payments Requiring Additional Confirmation</h3><p>SCA regulations often require extra verification in order to confirm and process a payment. When this happens, Cashier will throw a <code>Laravel\\Cashier\\Exceptions\\IncompletePayment</code> exception that informs you that extra verification is needed. More information on how to handle these exceptions be found can be found in the documentation on <a href="#handling-failed-payments">handling failed payments</a>.</p><p>Payment confirmation screens presented by Stripe or Cashier may be tailored to a specific bank or card issuer&#39;s payment flow and can include additional card confirmation, a temporary small charge, separate device authentication, or other forms of verification.</p><p><a name="incomplete-and-past-due-state"></a></p><h4 id="incomplete-and-past-due-state" tabindex="-1"><a class="header-anchor" href="#incomplete-and-past-due-state" aria-hidden="true">#</a> Incomplete and Past Due State</h4><p>When a payment needs additional confirmation, the subscription will remain in an <code>incomplete</code> or <code>past_due</code> state as indicated by its <code>stripe_status</code> database column. Cashier will automatically activate the customer&#39;s subscription as soon as payment confirmation is complete and your application is notified by Stripe via webhook of its completion.</p><p>For more information on <code>incomplete</code> and <code>past_due</code> states, please refer to <a href="#incomplete-and-past-due-status">our additional documentation on these states</a>.</p><p><a name="off-session-payment-notifications"></a></p><h3 id="off-session-payment-notifications" tabindex="-1"><a class="header-anchor" href="#off-session-payment-notifications" aria-hidden="true">#</a> Off-Session Payment Notifications</h3><p>Since SCA regulations require customers to occasionally verify their payment details even while their subscription is active, Cashier can send a notification to the customer when off-session payment confirmation is required. For example, this may occur when a subscription is renewing. Cashier&#39;s payment notification can be enabled by setting the <code>CASHIER_PAYMENT_NOTIFICATION</code> environment variable to a notification class. By default, this notification is disabled. Of course, Cashier includes a notification class you may use for this purpose, but you are free to provide your own notification class if desired:</p><div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code><span class="token key attr-name">CASHIER_PAYMENT_NOTIFICATION</span><span class="token punctuation">=</span><span class="token value attr-value">Laravel\\Cashier\\Notifications\\ConfirmPayment</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>To ensure that off-session payment confirmation notifications are delivered, verify that <a href="#handling-stripe-webhooks">Stripe webhooks are configured</a> for your application and the <code>invoice.payment_action_required</code> webhook is enabled in your Stripe dashboard. In addition, your <code>Billable</code> model should also use Laravel&#39;s <code>Illuminate\\Notifications\\Notifiable</code> trait.</p><blockquote><p><strong>Warning</strong><br> Notifications will be sent even when customers are manually making a payment that requires additional confirmation. Unfortunately, there is no way for Stripe to know that the payment was done manually or &quot;off-session&quot;. But, a customer will simply see a &quot;Payment Successful&quot; message if they visit the payment page after already confirming their payment. The customer will not be allowed to accidentally confirm the same payment twice and incur an accidental second charge.</p></blockquote><p><a name="stripe-sdk"></a></p><h2 id="stripe-sdk" tabindex="-1"><a class="header-anchor" href="#stripe-sdk" aria-hidden="true">#</a> Stripe SDK</h2><p>Many of Cashier&#39;s objects are wrappers around Stripe SDK objects. If you would like to interact with the Stripe objects directly, you may conveniently retrieve them using the <code>asStripe</code> method:</p><pre><code>$stripeSubscription = $subscription-&gt;asStripeSubscription();

$stripeSubscription-&gt;application_fee_percent = 5;

$stripeSubscription-&gt;save();
</code></pre><p>You may also use the <code>updateStripeSubscription</code> method to update a Stripe subscription directly:</p><pre><code>$subscription-&gt;updateStripeSubscription([&#39;application_fee_percent&#39; =&gt; 5]);
</code></pre><p>You may invoke the <code>stripe</code> method on the <code>Cashier</code> class if you would like to use the <code>Stripe\\StripeClient</code> client directly. For example, you could use this method to access the <code>StripeClient</code> instance and retrieve a list of prices from your Stripe account:</p><pre><code>use Laravel\\Cashier\\Cashier;

$prices = Cashier::stripe()-&gt;prices-&gt;all();
</code></pre><p><a name="testing"></a></p><h2 id="testing" tabindex="-1"><a class="header-anchor" href="#testing" aria-hidden="true">#</a> Testing</h2><p>When testing an application that uses Cashier, you may mock the actual HTTP requests to the Stripe API; however, this requires you to partially re-implement Cashier&#39;s own behavior. Therefore, we recommend allowing your tests to hit the actual Stripe API. While this is slower, it provides more confidence that your application is working as expected and any slow tests may be placed within their own PHPUnit testing group.</p><p>When testing, remember that Cashier itself already has a great test suite, so you should only focus on testing the subscription and payment flow of your own application and not every underlying Cashier behavior.</p><p>To get started, add the <strong>testing</strong> version of your Stripe secret to your <code>phpunit.xml</code> file:</p><pre><code>&lt;env name=&quot;STRIPE_SECRET&quot; value=&quot;sk_test_&lt;your-key&gt;&quot;/&gt;
</code></pre><p>Now, whenever you interact with Cashier while testing, it will send actual API requests to your Stripe testing environment. For convenience, you should pre-fill your Stripe testing account with subscriptions / prices that you may use during testing.</p>`,29),en=e("strong",null,"Note",-1),tn=e("br",null,null,-1),nn={href:"https://stripe.com/docs/testing",target:"_blank",rel:"noopener noreferrer"};function an(on,sn){const n=i("ExternalLinkIcon");return r(),c("div",null,[d,e("p",null,[e("a",u,[t("Laravel Cashier Stripe"),a(n)]),t(" provides an expressive, fluent interface to "),e("a",l,[t("Stripe's"),a(n)]),t(' subscription billing services. It handles almost all of the boilerplate subscription billing code you are dreading writing. In addition to basic subscription management, Cashier can handle coupons, swapping subscription, subscription "quantities", cancellation grace periods, and even generate invoice PDFs.')]),h,m,e("p",null,[t("When upgrading to a new version of Cashier, it's important that you carefully review "),e("a",g,[t("the upgrade guide"),a(n)]),t(".")]),b,e("blockquote",null,[e("p",null,[y,f,t(" Stripe recommends that any column used for storing Stripe identifiers should be case-sensitive. Therefore, you should ensure the column collation for the "),v,t(" column is set to "),k,t(" when using MySQL. More information regarding this can be found in the "),e("a",w,[t("Stripe documentation"),a(n)]),t(".")])]),_,e("p",null,[t("In addition to configuring Cashier's currency, you may also specify a locale to be used when formatting money values for display on invoices. Internally, Cashier utilizes "),e("a",S,[t("PHP's "),q,t(" class"),a(n)]),t(" to set the currency locale:")]),x,e("p",null,[t("Thanks to "),e("a",$,[t("Stripe Tax"),a(n)]),t(", it's possible to automatically calculate taxes for all invoices generated by Stripe. You can enable automatic tax calculation by invoking the "),C,t(" method in the "),I,t(" method of your application's "),T,t(" class:")]),P,e("p",null,[t("Once the customer has been created in Stripe, you may begin a subscription at a later date. You may provide an optional "),R,t(" array to pass in any additional "),e("a",A,[t("customer creation parameters that are supported by the Stripe API"),a(n)]),t(":")]),M,e("p",null,[t("Occasionally, you may wish to update the Stripe customer directly with additional information. You may accomplish this using the "),D,t(" method. This method accepts an array of "),e("a",E,[t("customer update options supported by the Stripe API"),a(n)]),t(":")]),U,e("p",null,[t("Cashier offers an easy way to manage a customer's tax IDs. For example, the "),W,t(" method may be used to retrieve all of the "),e("a",F,[t("tax IDs"),a(n)]),t(" that are assigned to a customer as a collection:")]),B,L,Y,e("p",null,[t("You may create a new Tax ID by providing a valid "),e("a",H,[t("type"),a(n)]),t(" and value to the "),O,t(" method:")]),N,e("p",null,[t("The "),j,t(" method will immediately add the VAT ID to the customer's account. "),e("a",G,[t("Verification of VAT IDs is also done by Stripe"),a(n)]),t("; however, this is an asynchronous process. You can be notified of verification updates by subscribing to the "),Q,t(" webhook event and inspecting "),e("a",V,[t("the VAT IDs "),z,t(" parameter"),a(n)]),t(". For more information on handling webhooks, please consult the "),K,t(".")]),J,e("p",null,[t("Similarly, you may override the "),X,t(", "),Z,t(", "),ee,t(", and "),te,t(" methods. These methods will sync information to their corresponding customer parameters when "),e("a",ne,[t("updating the Stripe customer object"),a(n)]),t(". If you wish to take total control over the customer information sync process, you may override the "),ae,t(" method.")]),oe,se,e("p",null,[t("Stripe offers "),e("a",ie,[t("an easy way to set up a billing portal"),a(n)]),t(" so that your customer can manage their subscription, payment methods, and view their billing history. You can redirect your users to the billing portal by invoking the "),re,t(" method on the billable model from a controller or route:")]),ce,e("p",null,[t("Next, the Stripe.js library may be used to attach a "),e("a",pe,[t("Stripe Element"),a(n)]),t(" to the form and securely gather the customer's payment details:")]),de,e("p",null,[t('Next, the card can be verified and a secure "payment method identifier" can be retrieved from Stripe using '),e("a",ue,[t("Stripe's "),le,t(" method"),a(n)]),t(":")]),he,e("blockquote",null,[e("p",null,[me,ge,t(" If you would like more information about Setup Intents and gathering customer payment details please "),e("a",be,[t("review this overview provided by Stripe"),a(n)]),t(".")])]),ye,e("p",null,[t("After defining such a form, the Stripe.js library may be used to attach a "),e("a",fe,[t("Stripe Element"),a(n)]),t(" to the form and securely gather the customer's payment details:")]),ve,e("p",null,[t('Next, the card can be verified and a secure "payment method identifier" can be retrieved from Stripe using '),e("a",ke,[t("Stripe's "),we,t(" method"),a(n)]),t(":")]),_e,e("p",null,[t("If you would like to set a specific "),e("a",Se,[t("quantity"),a(n)]),t(" for the price when creating the subscription, you should invoke the "),qe,t(" method on the subscription builder before creating the subscription:")]),xe,$e,Ce,e("p",null,[t("If you would like to specify additional "),e("a",Ie,[t("customer"),a(n)]),t(" or "),e("a",Te,[t("subscription"),a(n)]),t(" options supported by Stripe, you may do so by passing them as the second and third arguments to the "),Pe,t(" method:")]),Re,Ae,Me,De,Ee,e("p",null,[t("Or, if you would like to apply a "),e("a",Ue,[t("Stripe promotion code"),a(n)]),t(", you may use the "),We,t(" method:")]),Fe,e("p",null,[t("For more info on this subject, please consult the Stripe documentation regarding "),e("a",Be,[t("coupons"),a(n)]),t(" and "),e("a",Le,[t("promotion codes"),a(n)]),t(".")]),Ye,e("p",null,[t("For more information on subscription proration, consult the "),e("a",He,[t("Stripe documentation"),a(n)]),t(".")]),Oe,e("p",null,[t("For more information on subscription quantities, consult the "),e("a",Ne,[t("Stripe documentation"),a(n)]),t(".")]),je,e("p",null,[e("a",Ge,[t("Subscription with multiple products"),a(n)]),t(` allow you to assign multiple billing products to a single subscription. For example, imagine you are building a customer service "helpdesk" application that has a base subscription price of $10 per month but offers a live chat add-on product for an additional $15 per month. Information for subscriptions with multiple products is stored in Cashier's `),Qe,t(" database table.")]),Ve,e("p",null,[e("a",ze,[t("Metered billing"),a(n)]),t(" allows you to charge customers based on their product usage during a billing cycle. For example, you may charge customers based on the number of text messages or emails they send per month.")]),Ke,e("p",null,[t("For a full reference of all usage data returned and how to use Stripe's cursor based pagination, please consult "),e("a",Je,[t("the official Stripe API documentation"),a(n)]),t(".")]),Xe,Ze,et,e("p",null,[t("To specify the tax rates a user pays on a subscription, you should implement the "),tt,t(" method on your billable model and return an array containing the Stripe tax rate IDs. You can define these tax rates in "),e("a",nt,[t("your Stripe dashboard"),a(n)]),t(":")]),at,e("p",null,[t("For more information on managing subscription billing cycles, consult the "),e("a",ot,[t("Stripe billing cycle documentation"),a(n)])]),st,e("blockquote",null,[e("p",null,[it,rt,t(" You may use "),e("a",ct,[t("the Stripe CLI"),a(n)]),t(" to help test webhooks during local development.")])]),pt,e("p",null,[t("To secure your webhooks, you may use "),e("a",dt,[t("Stripe's webhook signatures"),a(n)]),t(". For convenience, Cashier automatically includes a middleware which validates that the incoming Stripe webhook request is valid.")]),ut,e("p",null,[t("The "),lt,t(" method accepts an array as its third argument, allowing you to pass any options you wish to the underlying Stripe charge creation. More information regarding the options available to you when creating charges may be found in the "),e("a",ht,[t("Stripe documentation"),a(n)]),t(":")]),mt,e("p",null,[t("After creating the payment intent, you can return the client secret to your application's frontend so that the user can complete the payment in their browser. To read more about building entire payment flows using Stripe payment intents, please consult the "),e("a",gt,[t("Stripe documentation"),a(n)]),t(".")]),bt,e("p",null,[t("Cashier also makes it possible to use a custom invoice renderer. By default, Cashier uses the "),yt,t(" implementation, which utilizes the "),e("a",ft,[t("dompdf"),a(n)]),t(" PHP library to generate Cashier's invoices. However, you may use any renderer you wish by implementing the "),vt,t(" interface. For example, you may wish to render an invoice PDF using an API call to a third-party PDF rendering service:")]),kt,wt,_t,St,e("p",null,[t("Cashier Stripe also provides support for "),e("a",qt,[t("Stripe Checkout"),a(n)]),t(". Stripe Checkout takes the pain out of implementing custom pages to accept payments by providing a pre-built, hosted payment page.")]),e("p",null,[t("The following documentation contains information on how to get started using Stripe Checkout with Cashier. To learn more about Stripe Checkout, you should also consider reviewing "),e("a",xt,[t("Stripe's own documentation on Checkout"),a(n)]),t(".")]),$t,e("p",null,[t("By default, Stripe Checkout does not allow "),e("a",Ct,[t("user redeemable promotion codes"),a(n)]),t(". Luckily, there's an easy way to enable these for your Checkout page. To do so, you may invoke the "),It,t(" method:")]),Tt,e("blockquote",null,[e("p",null,[Pt,Rt,t(" Unfortunately Stripe Checkout does not support all subscription billing options when starting subscriptions. Using the "),At,t(" method on the subscription builder, setting proration behavior, or setting payment behavior will not have any effect during Stripe Checkout sessions. Please consult "),e("a",Mt,[t("the Stripe Checkout Session API documentation"),a(n)]),t(" to review which parameters are available.")])]),Dt,e("p",null,[t("After a guest checkout has been completed, Stripe can dispatch a "),Et,t(" webhook event, so make sure to "),e("a",Ut,[t("configure your Stripe webhook"),a(n)]),t(" to actually send this event to your application. Once the webhook has been enabled within the Stripe dashboard, you may "),Wt,t(". The object contained in the webhook payload will be a "),e("a",Ft,[Bt,t(" object"),a(n)]),t(" that you may inspect in order to fulfill your customer's order.")]),Lt,Yt,e("p",null,[t("Alternatively, you could allow Stripe to handle the payment confirmation for you. In this case, instead of redirecting to the payment confirmation page, you may "),e("a",Ht,[t("setup Stripe's automatic billing emails"),a(n)]),t(" in your Stripe dashboard. However, if an "),Ot,t(" exception is caught, you should still inform the user they will receive an email with further payment confirmation instructions.")]),Nt,e("p",null,[t("You may consult the "),e("a",jt,[t("Stripe API documentation"),a(n)]),t(" to review all of the options accepted when confirming payments.")]),Gt,Qt,Vt,e("blockquote",null,[e("p",null,[zt,Kt,t(" Before getting started, review "),e("a",Jt,[t("Stripe's guide on PSD2 and SCA"),a(n)]),t(" as well as their "),e("a",Xt,[t("documentation on the new SCA APIs"),a(n)]),t(".")])]),Zt,e("blockquote",null,[e("p",null,[en,tn,t(" In order to test a variety of billing scenarios, such as credit card denials and failures, you may use the vast range of "),e("a",nn,[t("testing card numbers and tokens"),a(n)]),t(" provided by Stripe.")])])])}const pn=s(p,[["render",an],["__file","billing.html.vue"]]);export{pn as default};
