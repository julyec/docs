import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as n,c as t,a as s}from"./app-8cdff07c.js";const a={},i=s(`<h1 id="events" tabindex="-1"><a class="header-anchor" href="#events" aria-hidden="true">#</a> Events</h1><ul><li><a href="#introduction">Introduction</a></li><li><a href="#registering-events-and-listeners">Registering Events &amp; Listeners</a><ul><li><a href="#generating-events-and-listeners">Generating Events &amp; Listeners</a></li><li><a href="#manually-registering-events">Manually Registering Events</a></li><li><a href="#event-discovery">Event Discovery</a></li></ul></li><li><a href="#defining-events">Defining Events</a></li><li><a href="#defining-listeners">Defining Listeners</a></li><li><a href="#queued-event-listeners">Queued Event Listeners</a><ul><li><a href="#manually-interacting-with-the-queue">Manually Interacting With The Queue</a></li><li><a href="#queued-event-listeners-and-database-transactions">Queued Event Listeners &amp; Database Transactions</a></li><li><a href="#handling-failed-jobs">Handling Failed Jobs</a></li></ul></li><li><a href="#dispatching-events">Dispatching Events</a><ul><li><a href="#dispatching-events-after-database-transactions">Dispatching Events After Database Transactions</a></li></ul></li><li><a href="#event-subscribers">Event Subscribers</a><ul><li><a href="#writing-event-subscribers">Writing Event Subscribers</a></li><li><a href="#registering-event-subscribers">Registering Event Subscribers</a></li></ul></li><li><a href="#testing">Testing</a><ul><li><a href="#faking-a-subset-of-events">Faking A Subset Of Events</a></li><li><a href="#scoped-event-fakes">Scoped Events Fakes</a></li></ul></li></ul><p><a name="introduction"></a></p><h2 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h2><p>Laravel&#39;s events provide a simple observer pattern implementation, allowing you to subscribe and listen for various events that occur within your application. Event classes are typically stored in the <code>app/Events</code> directory, while their listeners are stored in <code>app/Listeners</code>. Don&#39;t worry if you don&#39;t see these directories in your application as they will be created for you as you generate events and listeners using Artisan console commands.</p><p>Events serve as a great way to decouple various aspects of your application, since a single event can have multiple listeners that do not depend on each other. For example, you may wish to send a Slack notification to your user each time an order has shipped. Instead of coupling your order processing code to your Slack notification code, you can raise an <code>App\\Events\\OrderShipped</code> event which a listener can receive and use to dispatch a Slack notification.</p><p><a name="registering-events-and-listeners"></a></p><h2 id="registering-events-listeners" tabindex="-1"><a class="header-anchor" href="#registering-events-listeners" aria-hidden="true">#</a> Registering Events &amp; Listeners</h2><p>The <code>App\\Providers\\EventServiceProvider</code> included with your Laravel application provides a convenient place to register all of your application&#39;s event listeners. The <code>listen</code> property contains an array of all events (keys) and their listeners (values). You may add as many events to this array as your application requires. For example, let&#39;s add an <code>OrderShipped</code> event:</p><pre><code>use App\\Events\\OrderShipped;
use App\\Listeners\\SendShipmentNotification;

/**
 * The event listener mappings for the application.
 *
 * @var array&lt;class-string, array&lt;int, class-string&gt;&gt;
 */
protected $listen = [
    OrderShipped::class =&gt; [
        SendShipmentNotification::class,
    ],
];
</code></pre><blockquote><p><strong>Note</strong><br> The <code>event:list</code> command may be used to display a list of all events and listeners registered by your application.</p></blockquote><p><a name="generating-events-and-listeners"></a></p><h3 id="generating-events-listeners" tabindex="-1"><a class="header-anchor" href="#generating-events-listeners" aria-hidden="true">#</a> Generating Events &amp; Listeners</h3><p>Of course, manually creating the files for each event and listener is cumbersome. Instead, add listeners and events to your <code>EventServiceProvider</code> and use the <code>event:generate</code> Artisan command. This command will generate any events or listeners that are listed in your <code>EventServiceProvider</code> that do not already exist:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan event:generate
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Alternatively, you may use the <code>make:event</code> and <code>make:listener</code> Artisan commands to generate individual events and listeners:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan make:event PodcastProcessed

php artisan make:listener SendPodcastNotification <span class="token parameter variable">--event</span><span class="token operator">=</span>PodcastProcessed
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="manually-registering-events"></a></p><h3 id="manually-registering-events" tabindex="-1"><a class="header-anchor" href="#manually-registering-events" aria-hidden="true">#</a> Manually Registering Events</h3><p>Typically, events should be registered via the <code>EventServiceProvider</code> <code>$listen</code> array; however, you may also register class or closure based event listeners manually in the <code>boot</code> method of your <code>EventServiceProvider</code>:</p><pre><code>use App\\Events\\PodcastProcessed;
use App\\Listeners\\SendPodcastNotification;
use Illuminate\\Support\\Facades\\Event;

/**
 * Register any other events for your application.
 */
public function boot(): void
{
    Event::listen(
        PodcastProcessed::class,
        SendPodcastNotification::class,
    );

    Event::listen(function (PodcastProcessed $event) {
        // ...
    });
}
</code></pre><p><a name="queuable-anonymous-event-listeners"></a></p><h4 id="queueable-anonymous-event-listeners" tabindex="-1"><a class="header-anchor" href="#queueable-anonymous-event-listeners" aria-hidden="true">#</a> Queueable Anonymous Event Listeners</h4><p>When registering closure based event listeners manually, you may wrap the listener closure within the <code>Illuminate\\Events\\queueable</code> function to instruct Laravel to execute the listener using the <a href="./queues">queue</a>:</p><pre><code>use App\\Events\\PodcastProcessed;
use function Illuminate\\Events\\queueable;
use Illuminate\\Support\\Facades\\Event;

/**
 * Register any other events for your application.
 */
public function boot(): void
{
    Event::listen(queueable(function (PodcastProcessed $event) {
        // ...
    }));
}
</code></pre><p>Like queued jobs, you may use the <code>onConnection</code>, <code>onQueue</code>, and <code>delay</code> methods to customize the execution of the queued listener:</p><pre><code>Event::listen(queueable(function (PodcastProcessed $event) {
    // ...
})-&gt;onConnection(&#39;redis&#39;)-&gt;onQueue(&#39;podcasts&#39;)-&gt;delay(now()-&gt;addSeconds(10)));
</code></pre><p>If you would like to handle anonymous queued listener failures, you may provide a closure to the <code>catch</code> method while defining the <code>queueable</code> listener. This closure will receive the event instance and the <code>Throwable</code> instance that caused the listener&#39;s failure:</p><pre><code>use App\\Events\\PodcastProcessed;
use function Illuminate\\Events\\queueable;
use Illuminate\\Support\\Facades\\Event;
use Throwable;

Event::listen(queueable(function (PodcastProcessed $event) {
    // ...
})-&gt;catch(function (PodcastProcessed $event, Throwable $e) {
    // The queued listener failed...
}));
</code></pre><p><a name="wildcard-event-listeners"></a></p><h4 id="wildcard-event-listeners" tabindex="-1"><a class="header-anchor" href="#wildcard-event-listeners" aria-hidden="true">#</a> Wildcard Event Listeners</h4><p>You may even register listeners using the <code>*</code> as a wildcard parameter, allowing you to catch multiple events on the same listener. Wildcard listeners receive the event name as their first argument and the entire event data array as their second argument:</p><pre><code>Event::listen(&#39;event.*&#39;, function (string $eventName, array $data) {
    // ...
});
</code></pre><p><a name="event-discovery"></a></p><h3 id="event-discovery" tabindex="-1"><a class="header-anchor" href="#event-discovery" aria-hidden="true">#</a> Event Discovery</h3><p>Instead of registering events and listeners manually in the <code>$listen</code> array of the <code>EventServiceProvider</code>, you can enable automatic event discovery. When event discovery is enabled, Laravel will automatically find and register your events and listeners by scanning your application&#39;s <code>Listeners</code> directory. In addition, any explicitly defined events listed in the <code>EventServiceProvider</code> will still be registered.</p><p>Laravel finds event listeners by scanning the listener classes using PHP&#39;s reflection services. When Laravel finds any listener class method that begins with <code>handle</code> or <code>__invoke</code>, Laravel will register those methods as event listeners for the event that is type-hinted in the method&#39;s signature:</p><pre><code>use App\\Events\\PodcastProcessed;

class SendPodcastNotification
{
    /**
     * Handle the given event.
     */
    public function handle(PodcastProcessed $event): void
    {
        // ...
    }
}
</code></pre><p>Event discovery is disabled by default, but you can enable it by overriding the <code>shouldDiscoverEvents</code> method of your application&#39;s <code>EventServiceProvider</code>:</p><pre><code>/**
 * Determine if events and listeners should be automatically discovered.
 */
public function shouldDiscoverEvents(): bool
{
    return true;
}
</code></pre><p>By default, all listeners within your application&#39;s <code>app/Listeners</code> directory will be scanned. If you would like to define additional directories to scan, you may override the <code>discoverEventsWithin</code> method in your <code>EventServiceProvider</code>:</p><pre><code>/**
 * Get the listener directories that should be used to discover events.
 *
 * @return array&lt;int, string&gt;
 */
protected function discoverEventsWithin(): array
{
    return [
        $this-&gt;app-&gt;path(&#39;Listeners&#39;),
    ];
}
</code></pre><p><a name="event-discovery-in-production"></a></p><h4 id="event-discovery-in-production" tabindex="-1"><a class="header-anchor" href="#event-discovery-in-production" aria-hidden="true">#</a> Event Discovery In Production</h4><p>In production, it is not efficient for the framework to scan all of your listeners on every request. Therefore, during your deployment process, you should run the <code>event:cache</code> Artisan command to cache a manifest of all of your application&#39;s events and listeners. This manifest will be used by the framework to speed up the event registration process. The <code>event:clear</code> command may be used to destroy the cache.</p><p><a name="defining-events"></a></p><h2 id="defining-events" tabindex="-1"><a class="header-anchor" href="#defining-events" aria-hidden="true">#</a> Defining Events</h2><p>An event class is essentially a data container which holds the information related to the event. For example, let&#39;s assume an <code>App\\Events\\OrderShipped</code> event receives an <a href="./eloquent">Eloquent ORM</a> object:</p><pre><code>&lt;?php

namespace App\\Events;

use App\\Models\\Order;
use Illuminate\\Broadcasting\\InteractsWithSockets;
use Illuminate\\Foundation\\Events\\Dispatchable;
use Illuminate\\Queue\\SerializesModels;

class OrderShipped
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    /**
     * Create a new event instance.
     */
    public function __construct(
        public Order $order,
    ) {}
}
</code></pre><p>As you can see, this event class contains no logic. It is a container for the <code>App\\Models\\Order</code> instance that was purchased. The <code>SerializesModels</code> trait used by the event will gracefully serialize any Eloquent models if the event object is serialized using PHP&#39;s <code>serialize</code> function, such as when utilizing <a href="#queued-event-listeners">queued listeners</a>.</p><p><a name="defining-listeners"></a></p><h2 id="defining-listeners" tabindex="-1"><a class="header-anchor" href="#defining-listeners" aria-hidden="true">#</a> Defining Listeners</h2><p>Next, let&#39;s take a look at the listener for our example event. Event listeners receive event instances in their <code>handle</code> method. The <code>event:generate</code> and <code>make:listener</code> Artisan commands will automatically import the proper event class and type-hint the event on the <code>handle</code> method. Within the <code>handle</code> method, you may perform any actions necessary to respond to the event:</p><pre><code>&lt;?php

namespace App\\Listeners;

use App\\Events\\OrderShipped;

class SendShipmentNotification
{
    /**
     * Create the event listener.
     */
    public function __construct()
    {
        // ...
    }

    /**
     * Handle the event.
     */
    public function handle(OrderShipped $event): void
    {
        // Access the order using $event-&gt;order...
    }
}
</code></pre><blockquote><p><strong>Note</strong><br> Your event listeners may also type-hint any dependencies they need on their constructors. All event listeners are resolved via the Laravel <a href="./container">service container</a>, so dependencies will be injected automatically.</p></blockquote><p><a name="stopping-the-propagation-of-an-event"></a></p><h4 id="stopping-the-propagation-of-an-event" tabindex="-1"><a class="header-anchor" href="#stopping-the-propagation-of-an-event" aria-hidden="true">#</a> Stopping The Propagation Of An Event</h4><p>Sometimes, you may wish to stop the propagation of an event to other listeners. You may do so by returning <code>false</code> from your listener&#39;s <code>handle</code> method.</p><p><a name="queued-event-listeners"></a></p><h2 id="queued-event-listeners" tabindex="-1"><a class="header-anchor" href="#queued-event-listeners" aria-hidden="true">#</a> Queued Event Listeners</h2><p>Queueing listeners can be beneficial if your listener is going to perform a slow task such as sending an email or making an HTTP request. Before using queued listeners, make sure to <a href="./queues">configure your queue</a> and start a queue worker on your server or local development environment.</p><p>To specify that a listener should be queued, add the <code>ShouldQueue</code> interface to the listener class. Listeners generated by the <code>event:generate</code> and <code>make:listener</code> Artisan commands already have this interface imported into the current namespace so you can use it immediately:</p><pre><code>&lt;?php

namespace App\\Listeners;

use App\\Events\\OrderShipped;
use Illuminate\\Contracts\\Queue\\ShouldQueue;

class SendShipmentNotification implements ShouldQueue
{
    // ...
}
</code></pre><p>That&#39;s it! Now, when an event handled by this listener is dispatched, the listener will automatically be queued by the event dispatcher using Laravel&#39;s <a href="./queues">queue system</a>. If no exceptions are thrown when the listener is executed by the queue, the queued job will automatically be deleted after it has finished processing.</p><p><a name="customizing-the-queue-connection-queue-name"></a></p><h4 id="customizing-the-queue-connection-name-delay" tabindex="-1"><a class="header-anchor" href="#customizing-the-queue-connection-name-delay" aria-hidden="true">#</a> Customizing The Queue Connection, Name, &amp; Delay</h4><p>If you would like to customize the queue connection, queue name, or queue delay time of an event listener, you may define the <code>$connection</code>, <code>$queue</code>, or <code>$delay</code> properties on your listener class:</p><pre><code>&lt;?php

namespace App\\Listeners;

use App\\Events\\OrderShipped;
use Illuminate\\Contracts\\Queue\\ShouldQueue;

class SendShipmentNotification implements ShouldQueue
{
    /**
     * The name of the connection the job should be sent to.
     *
     * @var string|null
     */
    public $connection = &#39;sqs&#39;;

    /**
     * The name of the queue the job should be sent to.
     *
     * @var string|null
     */
    public $queue = &#39;listeners&#39;;

    /**
     * The time (seconds) before the job should be processed.
     *
     * @var int
     */
    public $delay = 60;
}
</code></pre><p>If you would like to define the listener&#39;s queue connection, queue name, or delay at runtime, you may define <code>viaConnection</code>, <code>viaQueue</code>, or <code>withDelay</code> methods on the listener:</p><pre><code>/**
 * Get the name of the listener&#39;s queue connection.
 */
public function viaConnection(): string
{
    return &#39;sqs&#39;;
}

/**
 * Get the name of the listener&#39;s queue.
 */
public function viaQueue(): string
{
    return &#39;listeners&#39;;
}

/**
 * Get the number of seconds before the job should be processed.
 */
public function withDelay(OrderShipped $event): int
{
    return $event-&gt;highPriority ? 0 : 60;
}
</code></pre><p><a name="conditionally-queueing-listeners"></a></p><h4 id="conditionally-queueing-listeners" tabindex="-1"><a class="header-anchor" href="#conditionally-queueing-listeners" aria-hidden="true">#</a> Conditionally Queueing Listeners</h4><p>Sometimes, you may need to determine whether a listener should be queued based on some data that are only available at runtime. To accomplish this, a <code>shouldQueue</code> method may be added to a listener to determine whether the listener should be queued. If the <code>shouldQueue</code> method returns <code>false</code>, the listener will not be executed:</p><pre><code>&lt;?php

namespace App\\Listeners;

use App\\Events\\OrderCreated;
use Illuminate\\Contracts\\Queue\\ShouldQueue;

class RewardGiftCard implements ShouldQueue
{
    /**
     * Reward a gift card to the customer.
     */
    public function handle(OrderCreated $event): void
    {
        // ...
    }

    /**
     * Determine whether the listener should be queued.
     */
    public function shouldQueue(OrderCreated $event): bool
    {
        return $event-&gt;order-&gt;subtotal &gt;= 5000;
    }
}
</code></pre><p><a name="manually-interacting-with-the-queue"></a></p><h3 id="manually-interacting-with-the-queue" tabindex="-1"><a class="header-anchor" href="#manually-interacting-with-the-queue" aria-hidden="true">#</a> Manually Interacting With The Queue</h3><p>If you need to manually access the listener&#39;s underlying queue job&#39;s <code>delete</code> and <code>release</code> methods, you may do so using the <code>Illuminate\\Queue\\InteractsWithQueue</code> trait. This trait is imported by default on generated listeners and provides access to these methods:</p><pre><code>&lt;?php

namespace App\\Listeners;

use App\\Events\\OrderShipped;
use Illuminate\\Contracts\\Queue\\ShouldQueue;
use Illuminate\\Queue\\InteractsWithQueue;

class SendShipmentNotification implements ShouldQueue
{
    use InteractsWithQueue;

    /**
     * Handle the event.
     */
    public function handle(OrderShipped $event): void
    {
        if (true) {
            $this-&gt;release(30);
        }
    }
}
</code></pre><p><a name="queued-event-listeners-and-database-transactions"></a></p><h3 id="queued-event-listeners-database-transactions" tabindex="-1"><a class="header-anchor" href="#queued-event-listeners-database-transactions" aria-hidden="true">#</a> Queued Event Listeners &amp; Database Transactions</h3><p>When queued listeners are dispatched within database transactions, they may be processed by the queue before the database transaction has committed. When this happens, any updates you have made to models or database records during the database transaction may not yet be reflected in the database. In addition, any models or database records created within the transaction may not exist in the database. If your listener depends on these models, unexpected errors can occur when the job that dispatches the queued listener is processed.</p><p>If your queue connection&#39;s <code>after_commit</code> configuration option is set to <code>false</code>, you may still indicate that a particular queued listener should be dispatched after all open database transactions have been committed by implementing the <code>ShouldHandleEventsAfterCommit</code> interface on the listener class:</p><pre><code>&lt;?php

namespace App\\Listeners;

use Illuminate\\Contracts\\Events\\ShouldHandleEventsAfterCommit;
use Illuminate\\Contracts\\Queue\\ShouldQueue;
use Illuminate\\Queue\\InteractsWithQueue;

class SendShipmentNotification implements ShouldQueue, ShouldHandleEventsAfterCommit
{
    use InteractsWithQueue;
}
</code></pre><blockquote><p><strong>Note</strong><br> To learn more about working around these issues, please review the documentation regarding <a href="./queues#jobs-and-database-transactions">queued jobs and database transactions</a>.</p></blockquote><p><a name="handling-failed-jobs"></a></p><h3 id="handling-failed-jobs" tabindex="-1"><a class="header-anchor" href="#handling-failed-jobs" aria-hidden="true">#</a> Handling Failed Jobs</h3><p>Sometimes your queued event listeners may fail. If the queued listener exceeds the maximum number of attempts as defined by your queue worker, the <code>failed</code> method will be called on your listener. The <code>failed</code> method receives the event instance and the <code>Throwable</code> that caused the failure:</p><pre><code>&lt;?php

namespace App\\Listeners;

use App\\Events\\OrderShipped;
use Illuminate\\Contracts\\Queue\\ShouldQueue;
use Illuminate\\Queue\\InteractsWithQueue;
use Throwable;

class SendShipmentNotification implements ShouldQueue
{
    use InteractsWithQueue;

    /**
     * Handle the event.
     */
    public function handle(OrderShipped $event): void
    {
        // ...
    }

    /**
     * Handle a job failure.
     */
    public function failed(OrderShipped $event, Throwable $exception): void
    {
        // ...
    }
}
</code></pre><p><a name="specifying-queued-listener-maximum-attempts"></a></p><h4 id="specifying-queued-listener-maximum-attempts" tabindex="-1"><a class="header-anchor" href="#specifying-queued-listener-maximum-attempts" aria-hidden="true">#</a> Specifying Queued Listener Maximum Attempts</h4><p>If one of your queued listeners is encountering an error, you likely do not want it to keep retrying indefinitely. Therefore, Laravel provides various ways to specify how many times or for how long a listener may be attempted.</p><p>You may define a <code>$tries</code> property on your listener class to specify how many times the listener may be attempted before it is considered to have failed:</p><pre><code>&lt;?php

namespace App\\Listeners;

use App\\Events\\OrderShipped;
use Illuminate\\Contracts\\Queue\\ShouldQueue;
use Illuminate\\Queue\\InteractsWithQueue;

class SendShipmentNotification implements ShouldQueue
{
    use InteractsWithQueue;

    /**
     * The number of times the queued listener may be attempted.
     *
     * @var int
     */
    public $tries = 5;
}
</code></pre><p>As an alternative to defining how many times a listener may be attempted before it fails, you may define a time at which the listener should no longer be attempted. This allows a listener to be attempted any number of times within a given time frame. To define the time at which a listener should no longer be attempted, add a <code>retryUntil</code> method to your listener class. This method should return a <code>DateTime</code> instance:</p><pre><code>use DateTime;

/**
 * Determine the time at which the listener should timeout.
 */
public function retryUntil(): DateTime
{
    return now()-&gt;addMinutes(5);
}
</code></pre><p><a name="dispatching-events"></a></p><h2 id="dispatching-events" tabindex="-1"><a class="header-anchor" href="#dispatching-events" aria-hidden="true">#</a> Dispatching Events</h2><p>To dispatch an event, you may call the static <code>dispatch</code> method on the event. This method is made available on the event by the <code>Illuminate\\Foundation\\Events\\Dispatchable</code> trait. Any arguments passed to the <code>dispatch</code> method will be passed to the event&#39;s constructor:</p><pre><code>&lt;?php

namespace App\\Http\\Controllers;

use App\\Events\\OrderShipped;
use App\\Http\\Controllers\\Controller;
use App\\Models\\Order;
use Illuminate\\Http\\RedirectResponse;
use Illuminate\\Http\\Request;

class OrderShipmentController extends Controller
{
    /**
     * Ship the given order.
     */
    public function store(Request $request): RedirectResponse
    {
        $order = Order::findOrFail($request-&gt;order_id);

        // Order shipment logic...

        OrderShipped::dispatch($order);

        return redirect(&#39;/orders&#39;);
    }
}
</code></pre><p>If you would like to conditionally dispatch an event, you may use the <code>dispatchIf</code> and <code>dispatchUnless</code> methods:</p><pre><code>OrderShipped::dispatchIf($condition, $order);

OrderShipped::dispatchUnless($condition, $order);
</code></pre><blockquote><p><strong>Note</strong><br> When testing, it can be helpful to assert that certain events were dispatched without actually triggering their listeners. Laravel&#39;s <a href="#testing">built-in testing helpers</a> make it a cinch.</p></blockquote><p><a name="dispatching-events-after-database-transactions"></a></p><h3 id="dispatching-events-after-database-transactions" tabindex="-1"><a class="header-anchor" href="#dispatching-events-after-database-transactions" aria-hidden="true">#</a> Dispatching Events After Database Transactions</h3><p>Sometimes, you may want to instruct Laravel to only dispatch an event after the active database transaction has committed. To do so, you may implement the <code>ShouldDispatchAfterCommit</code> interface on the event class.</p><p>This interface instructs Laravel to not dispatch the event until the current database transaction is committed. If the transaction fails, the event will be discarded. If no database transaction is in progress when the event is dispatched, the event will be dispatched immediately:</p><pre><code>&lt;?php

namespace App\\Events;

use App\\Models\\Order;
use Illuminate\\Broadcasting\\InteractsWithSockets;
use Illuminate\\Contracts\\Events\\ShouldDispatchAfterCommit;
use Illuminate\\Foundation\\Events\\Dispatchable;
use Illuminate\\Queue\\SerializesModels;

class OrderShipped implements ShouldDispatchAfterCommit
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    /**
     * Create a new event instance.
     */
    public function __construct(
        public Order $order,
    ) {}
}
</code></pre><p><a name="event-subscribers"></a></p><h2 id="event-subscribers" tabindex="-1"><a class="header-anchor" href="#event-subscribers" aria-hidden="true">#</a> Event Subscribers</h2><p><a name="writing-event-subscribers"></a></p><h3 id="writing-event-subscribers" tabindex="-1"><a class="header-anchor" href="#writing-event-subscribers" aria-hidden="true">#</a> Writing Event Subscribers</h3><p>Event subscribers are classes that may subscribe to multiple events from within the subscriber class itself, allowing you to define several event handlers within a single class. Subscribers should define a <code>subscribe</code> method, which will be passed an event dispatcher instance. You may call the <code>listen</code> method on the given dispatcher to register event listeners:</p><pre><code>&lt;?php

namespace App\\Listeners;

use Illuminate\\Auth\\Events\\Login;
use Illuminate\\Auth\\Events\\Logout;
use Illuminate\\Events\\Dispatcher;

class UserEventSubscriber
{
    /**
     * Handle user login events.
     */
    public function handleUserLogin(Login $event): void {}

    /**
     * Handle user logout events.
     */
    public function handleUserLogout(Logout $event): void {}

    /**
     * Register the listeners for the subscriber.
     */
    public function subscribe(Dispatcher $events): void
    {
        $events-&gt;listen(
            Login::class,
            [UserEventSubscriber::class, &#39;handleUserLogin&#39;]
        );

        $events-&gt;listen(
            Logout::class,
            [UserEventSubscriber::class, &#39;handleUserLogout&#39;]
        );
    }
}
</code></pre><p>If your event listener methods are defined within the subscriber itself, you may find it more convenient to return an array of events and method names from the subscriber&#39;s <code>subscribe</code> method. Laravel will automatically determine the subscriber&#39;s class name when registering the event listeners:</p><pre><code>&lt;?php

namespace App\\Listeners;

use Illuminate\\Auth\\Events\\Login;
use Illuminate\\Auth\\Events\\Logout;
use Illuminate\\Events\\Dispatcher;

class UserEventSubscriber
{
    /**
     * Handle user login events.
     */
    public function handleUserLogin(Login $event): void {}

    /**
     * Handle user logout events.
     */
    public function handleUserLogout(Logout $event): void {}

    /**
     * Register the listeners for the subscriber.
     *
     * @return array&lt;string, string&gt;
     */
    public function subscribe(Dispatcher $events): array
    {
        return [
            Login::class =&gt; &#39;handleUserLogin&#39;,
            Logout::class =&gt; &#39;handleUserLogout&#39;,
        ];
    }
}
</code></pre><p><a name="registering-event-subscribers"></a></p><h3 id="registering-event-subscribers" tabindex="-1"><a class="header-anchor" href="#registering-event-subscribers" aria-hidden="true">#</a> Registering Event Subscribers</h3><p>After writing the subscriber, you are ready to register it with the event dispatcher. You may register subscribers using the <code>$subscribe</code> property on the <code>EventServiceProvider</code>. For example, let&#39;s add the <code>UserEventSubscriber</code> to the list:</p><pre><code>&lt;?php

namespace App\\Providers;

use App\\Listeners\\UserEventSubscriber;
use Illuminate\\Foundation\\Support\\Providers\\EventServiceProvider as ServiceProvider;

class EventServiceProvider extends ServiceProvider
{
    /**
     * The event listener mappings for the application.
     *
     * @var array
     */
    protected $listen = [
        // ...
    ];

    /**
     * The subscriber classes to register.
     *
     * @var array
     */
    protected $subscribe = [
        UserEventSubscriber::class,
    ];
}
</code></pre><p><a name="testing"></a></p><h2 id="testing" tabindex="-1"><a class="header-anchor" href="#testing" aria-hidden="true">#</a> Testing</h2><p>When testing code that dispatches events, you may wish to instruct Laravel to not actually execute the event&#39;s listeners, since the listener&#39;s code can be tested directly and separately of the code that dispatches the corresponding event. Of course, to test the listener itself, you may instantiate a listener instance and invoke the <code>handle</code> method directly in your test.</p><p>Using the <code>Event</code> facade&#39;s <code>fake</code> method, you may prevent listeners from executing, execute the code under test, and then assert which events were dispatched by your application using the <code>assertDispatched</code>, <code>assertNotDispatched</code>, and <code>assertNothingDispatched</code> methods:</p><pre><code>&lt;?php

namespace Tests\\Feature;

use App\\Events\\OrderFailedToShip;
use App\\Events\\OrderShipped;
use Illuminate\\Support\\Facades\\Event;
use Tests\\TestCase;

class ExampleTest extends TestCase
{
    /**
     * Test order shipping.
     */
    public function test_orders_can_be_shipped(): void
    {
        Event::fake();

        // Perform order shipping...

        // Assert that an event was dispatched...
        Event::assertDispatched(OrderShipped::class);

        // Assert an event was dispatched twice...
        Event::assertDispatched(OrderShipped::class, 2);

        // Assert an event was not dispatched...
        Event::assertNotDispatched(OrderFailedToShip::class);

        // Assert that no events were dispatched...
        Event::assertNothingDispatched();
    }
}
</code></pre><p>You may pass a closure to the <code>assertDispatched</code> or <code>assertNotDispatched</code> methods in order to assert that an event was dispatched that passes a given &quot;truth test&quot;. If at least one event was dispatched that passes the given truth test then the assertion will be successful:</p><pre><code>Event::assertDispatched(function (OrderShipped $event) use ($order) {
    return $event-&gt;order-&gt;id === $order-&gt;id;
});
</code></pre><p>If you would simply like to assert that an event listener is listening to a given event, you may use the <code>assertListening</code> method:</p><pre><code>Event::assertListening(
    OrderShipped::class,
    SendShipmentNotification::class
);
</code></pre><blockquote><p><strong>Warning</strong> After calling <code>Event::fake()</code>, no event listeners will be executed. So, if your tests use model factories that rely on events, such as creating a UUID during a model&#39;s <code>creating</code> event, you should call <code>Event::fake()</code> <strong>after</strong> using your factories.</p></blockquote><p><a name="faking-a-subset-of-events"></a></p><h3 id="faking-a-subset-of-events" tabindex="-1"><a class="header-anchor" href="#faking-a-subset-of-events" aria-hidden="true">#</a> Faking A Subset Of Events</h3><p>If you only want to fake event listeners for a specific set of events, you may pass them to the <code>fake</code> or <code>fakeFor</code> method:</p><pre><code>/**
 * Test order process.
 */
public function test_orders_can_be_processed(): void
{
    Event::fake([
        OrderCreated::class,
    ]);

    $order = Order::factory()-&gt;create();

    Event::assertDispatched(OrderCreated::class);

    // Other events are dispatched as normal...
    $order-&gt;update([...]);
}
</code></pre><p>You may fake all events except for a set of specified events using the <code>except</code> method:</p><pre><code>Event::fake()-&gt;except([
    OrderCreated::class,
]);
</code></pre><p><a name="scoped-event-fakes"></a></p><h3 id="scoped-event-fakes" tabindex="-1"><a class="header-anchor" href="#scoped-event-fakes" aria-hidden="true">#</a> Scoped Event Fakes</h3><p>If you only want to fake event listeners for a portion of your test, you may use the <code>fakeFor</code> method:</p><pre><code>&lt;?php

namespace Tests\\Feature;

use App\\Events\\OrderCreated;
use App\\Models\\Order;
use Illuminate\\Support\\Facades\\Event;
use Tests\\TestCase;

class ExampleTest extends TestCase
{
    /**
     * Test order process.
     */
    public function test_orders_can_be_processed(): void
    {
        $order = Event::fakeFor(function () {
            $order = Order::factory()-&gt;create();

            Event::assertDispatched(OrderCreated::class);

            return $order;
        });

        // Events are dispatched as normal and observers will run ...
        $order-&gt;update([...]);
    }
}
</code></pre>`,139),r=[i];function o(d,c){return n(),t("div",null,r)}const h=e(a,[["render",o],["__file","events.html.vue"]]);export{h as default};
