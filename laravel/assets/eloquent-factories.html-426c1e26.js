import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{r as s,o as r,c as i,b as t,d as e,e as c,a}from"./app-8cdff07c.js";const d={},l=a(`<h1 id="eloquent-factories" tabindex="-1"><a class="header-anchor" href="#eloquent-factories" aria-hidden="true">#</a> Eloquent: Factories</h1><ul><li><a href="#introduction">Introduction</a></li><li><a href="#defining-model-factories">Defining Model Factories</a><ul><li><a href="#generating-factories">Generating Factories</a></li><li><a href="#factory-states">Factory States</a></li><li><a href="#factory-callbacks">Factory Callbacks</a></li></ul></li><li><a href="#creating-models-using-factories">Creating Models Using Factories</a><ul><li><a href="#instantiating-models">Instantiating Models</a></li><li><a href="#persisting-models">Persisting Models</a></li><li><a href="#sequences">Sequences</a></li></ul></li><li><a href="#factory-relationships">Factory Relationships</a><ul><li><a href="#has-many-relationships">Has Many Relationships</a></li><li><a href="#belongs-to-relationships">Belongs To Relationships</a></li><li><a href="#many-to-many-relationships">Many To Many Relationships</a></li><li><a href="#polymorphic-relationships">Polymorphic Relationships</a></li><li><a href="#defining-relationships-within-factories">Defining Relationships Within Factories</a></li><li><a href="#recycling-an-existing-model-for-relationships">Recycling An Existing Model For Relationships</a></li></ul></li></ul><p><a name="introduction"></a></p><h2 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h2><p>When testing your application or seeding your database, you may need to insert a few records into your database. Instead of manually specifying the value of each column, Laravel allows you to define a set of default attributes for each of your <a href="./eloquent">Eloquent models</a> using model factories.</p><p>To see an example of how to write a factory, take a look at the <code>database/factories/UserFactory.php</code> file in your application. This factory is included with all new Laravel applications and contains the following factory definition:</p><pre><code>namespace Database\\Factories;

use Illuminate\\Support\\Str;
use Illuminate\\Database\\Eloquent\\Factories\\Factory;

class UserFactory extends Factory
{
    /**
     * Define the model&#39;s default state.
     *
     * @return array&lt;string, mixed&gt;
     */
    public function definition(): array
    {
        return [
            &#39;name&#39; =&gt; fake()-&gt;name(),
            &#39;email&#39; =&gt; fake()-&gt;unique()-&gt;safeEmail(),
            &#39;email_verified_at&#39; =&gt; now(),
            &#39;password&#39; =&gt; &#39;$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi&#39;, // password
            &#39;remember_token&#39; =&gt; Str::random(10),
        ];
    }
}
</code></pre><p>As you can see, in their most basic form, factories are classes that extend Laravel&#39;s base factory class and define a <code>definition</code> method. The <code>definition</code> method returns the default set of attribute values that should be applied when creating a model using the factory.</p>`,8),h=t("code",null,"fake",-1),p={href:"https://github.com/FakerPHP/Faker",target:"_blank",rel:"noopener noreferrer"},u=a(`<blockquote><p><strong>Note</strong><br> You can set your application&#39;s Faker locale by adding a <code>faker_locale</code> option to your <code>config/app.php</code> configuration file.</p></blockquote><p><a name="defining-model-factories"></a></p><h2 id="defining-model-factories" tabindex="-1"><a class="header-anchor" href="#defining-model-factories" aria-hidden="true">#</a> Defining Model Factories</h2><p><a name="generating-factories"></a></p><h3 id="generating-factories" tabindex="-1"><a class="header-anchor" href="#generating-factories" aria-hidden="true">#</a> Generating Factories</h3><p>To create a factory, execute the <code>make:factory</code> <a href="./artisan">Artisan command</a>:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan make:factory PostFactory
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>The new factory class will be placed in your <code>database/factories</code> directory.</p><p><a name="factory-and-model-discovery-conventions"></a></p><h4 id="model-factory-discovery-conventions" tabindex="-1"><a class="header-anchor" href="#model-factory-discovery-conventions" aria-hidden="true">#</a> Model &amp; Factory Discovery Conventions</h4><p>Once you have defined your factories, you may use the static <code>factory</code> method provided to your models by the <code>Illuminate\\Database\\Eloquent\\Factories\\HasFactory</code> trait in order to instantiate a factory instance for that model.</p><p>The <code>HasFactory</code> trait&#39;s <code>factory</code> method will use conventions to determine the proper factory for the model the trait is assigned to. Specifically, the method will look for a factory in the <code>Database\\Factories</code> namespace that has a class name matching the model name and is suffixed with <code>Factory</code>. If these conventions do not apply to your particular application or factory, you may overwrite the <code>newFactory</code> method on your model to return an instance of the model&#39;s corresponding factory directly:</p><pre><code>use Illuminate\\Database\\Eloquent\\Factories\\Factory;
use Database\\Factories\\Administration\\FlightFactory;

/**
 * Create a new factory instance for the model.
 */
protected static function newFactory(): Factory
{
    return FlightFactory::new();
}
</code></pre><p>Then, define a <code>model</code> property on the corresponding factory:</p><pre><code>use App\\Administration\\Flight;
use Illuminate\\Database\\Eloquent\\Factories\\Factory;

class FlightFactory extends Factory
{
    /**
     * The name of the factory&#39;s corresponding model.
     *
     * @var class-string&lt;\\Illuminate\\Database\\Eloquent\\Model&gt;
     */
    protected $model = Flight::class;
}
</code></pre><p><a name="factory-states"></a></p><h3 id="factory-states" tabindex="-1"><a class="header-anchor" href="#factory-states" aria-hidden="true">#</a> Factory States</h3><p>State manipulation methods allow you to define discrete modifications that can be applied to your model factories in any combination. For example, your <code>Database\\Factories\\UserFactory</code> factory might contain a <code>suspended</code> state method that modifies one of its default attribute values.</p><p>State transformation methods typically call the <code>state</code> method provided by Laravel&#39;s base factory class. The <code>state</code> method accepts a closure which will receive the array of raw attributes defined for the factory and should return an array of attributes to modify:</p><pre><code>use Illuminate\\Database\\Eloquent\\Factories\\Factory;

/**
 * Indicate that the user is suspended.
 */
public function suspended(): Factory
{
    return $this-&gt;state(function (array $attributes) {
        return [
            &#39;account_status&#39; =&gt; &#39;suspended&#39;,
        ];
    });
}
</code></pre><p><a name="trashed-state"></a></p><h4 id="trashed-state" tabindex="-1"><a class="header-anchor" href="#trashed-state" aria-hidden="true">#</a> &quot;Trashed&quot; State</h4><p>If your Eloquent model can be <a href="./eloquent#soft-deleting">soft deleted</a>, you may invoke the built-in <code>trashed</code> state method to indicate that the created model should already be &quot;soft deleted&quot;. You do not need to manually define the <code>trashed</code> state as it is automatically available to all factories:</p><pre><code>use App\\Models\\User;

$user = User::factory()-&gt;trashed()-&gt;create();
</code></pre><p><a name="factory-callbacks"></a></p><h3 id="factory-callbacks" tabindex="-1"><a class="header-anchor" href="#factory-callbacks" aria-hidden="true">#</a> Factory Callbacks</h3><p>Factory callbacks are registered using the <code>afterMaking</code> and <code>afterCreating</code> methods and allow you to perform additional tasks after making or creating a model. You should register these callbacks by defining a <code>configure</code> method on your factory class. This method will be automatically called by Laravel when the factory is instantiated:</p><pre><code>namespace Database\\Factories;

use App\\Models\\User;
use Illuminate\\Database\\Eloquent\\Factories\\Factory;

class UserFactory extends Factory
{
    /**
     * Configure the model factory.
     */
    public function configure(): static
    {
        return $this-&gt;afterMaking(function (User $user) {
            // ...
        })-&gt;afterCreating(function (User $user) {
            // ...
        });
    }

    // ...
}
</code></pre><p>You may also register factory callbacks within state methods to perform additional tasks that are specific to a given state:</p><pre><code>use App\\Models\\User;
use Illuminate\\Database\\Eloquent\\Factories\\Factory;

/**
 * Indicate that the user is suspended.
 */
public function suspended(): Factory
{
    return $this-&gt;state(function (array $attributes) {
        return [
            &#39;account_status&#39; =&gt; &#39;suspended&#39;,
        ];
    })-&gt;afterMaking(function (User $user) {
        // ...
    })-&gt;afterCreating(function (User $user) {
        // ...
    });
}
</code></pre><p><a name="creating-models-using-factories"></a></p><h2 id="creating-models-using-factories" tabindex="-1"><a class="header-anchor" href="#creating-models-using-factories" aria-hidden="true">#</a> Creating Models Using Factories</h2><p><a name="instantiating-models"></a></p><h3 id="instantiating-models" tabindex="-1"><a class="header-anchor" href="#instantiating-models" aria-hidden="true">#</a> Instantiating Models</h3><p>Once you have defined your factories, you may use the static <code>factory</code> method provided to your models by the <code>Illuminate\\Database\\Eloquent\\Factories\\HasFactory</code> trait in order to instantiate a factory instance for that model. Let&#39;s take a look at a few examples of creating models. First, we&#39;ll use the <code>make</code> method to create models without persisting them to the database:</p><pre><code>use App\\Models\\User;

$user = User::factory()-&gt;make();
</code></pre><p>You may create a collection of many models using the <code>count</code> method:</p><pre><code>$users = User::factory()-&gt;count(3)-&gt;make();
</code></pre><p><a name="applying-states"></a></p><h4 id="applying-states" tabindex="-1"><a class="header-anchor" href="#applying-states" aria-hidden="true">#</a> Applying States</h4><p>You may also apply any of your <a href="#factory-states">states</a> to the models. If you would like to apply multiple state transformations to the models, you may simply call the state transformation methods directly:</p><pre><code>$users = User::factory()-&gt;count(5)-&gt;suspended()-&gt;make();
</code></pre><p><a name="overriding-attributes"></a></p><h4 id="overriding-attributes" tabindex="-1"><a class="header-anchor" href="#overriding-attributes" aria-hidden="true">#</a> Overriding Attributes</h4><p>If you would like to override some of the default values of your models, you may pass an array of values to the <code>make</code> method. Only the specified attributes will be replaced while the rest of the attributes remain set to their default values as specified by the factory:</p><pre><code>$user = User::factory()-&gt;make([
    &#39;name&#39; =&gt; &#39;Abigail Otwell&#39;,
]);
</code></pre><p>Alternatively, the <code>state</code> method may be called directly on the factory instance to perform an inline state transformation:</p><pre><code>$user = User::factory()-&gt;state([
    &#39;name&#39; =&gt; &#39;Abigail Otwell&#39;,
])-&gt;make();
</code></pre><blockquote><p><strong>Note</strong><br><a href="./eloquent#mass-assignment">Mass assignment protection</a> is automatically disabled when creating models using factories.</p></blockquote><p><a name="persisting-models"></a></p><h3 id="persisting-models" tabindex="-1"><a class="header-anchor" href="#persisting-models" aria-hidden="true">#</a> Persisting Models</h3><p>The <code>create</code> method instantiates model instances and persists them to the database using Eloquent&#39;s <code>save</code> method:</p><pre><code>use App\\Models\\User;

// Create a single App\\Models\\User instance...
$user = User::factory()-&gt;create();

// Create three App\\Models\\User instances...
$users = User::factory()-&gt;count(3)-&gt;create();
</code></pre><p>You may override the factory&#39;s default model attributes by passing an array of attributes to the <code>create</code> method:</p><pre><code>$user = User::factory()-&gt;create([
    &#39;name&#39; =&gt; &#39;Abigail&#39;,
]);
</code></pre><p><a name="sequences"></a></p><h3 id="sequences" tabindex="-1"><a class="header-anchor" href="#sequences" aria-hidden="true">#</a> Sequences</h3><p>Sometimes you may wish to alternate the value of a given model attribute for each created model. You may accomplish this by defining a state transformation as a sequence. For example, you may wish to alternate the value of an <code>admin</code> column between <code>Y</code> and <code>N</code> for each created user:</p><pre><code>use App\\Models\\User;
use Illuminate\\Database\\Eloquent\\Factories\\Sequence;

$users = User::factory()
                -&gt;count(10)
                -&gt;state(new Sequence(
                    [&#39;admin&#39; =&gt; &#39;Y&#39;],
                    [&#39;admin&#39; =&gt; &#39;N&#39;],
                ))
                -&gt;create();
</code></pre><p>In this example, five users will be created with an <code>admin</code> value of <code>Y</code> and five users will be created with an <code>admin</code> value of <code>N</code>.</p><p>If necessary, you may include a closure as a sequence value. The closure will be invoked each time the sequence needs a new value:</p><pre><code>use Illuminate\\Database\\Eloquent\\Factories\\Sequence;

$users = User::factory()
                -&gt;count(10)
                -&gt;state(new Sequence(
                    fn (Sequence $sequence) =&gt; [&#39;role&#39; =&gt; UserRoles::all()-&gt;random()],
                ))
                -&gt;create();
</code></pre><p>Within a sequence closure, you may access the <code>$index</code> or <code>$count</code> properties on the sequence instance that is injected into the closure. The <code>$index</code> property contains the number of iterations through the sequence that have occurred thus far, while the <code>$count</code> property contains the total number of times the sequence will be invoked:</p><pre><code>$users = User::factory()
                -&gt;count(10)
                -&gt;sequence(fn (Sequence $sequence) =&gt; [&#39;name&#39; =&gt; &#39;Name &#39;.$sequence-&gt;index])
                -&gt;create();
</code></pre><p>For convenience, sequences may also be applied using the <code>sequence</code> method, which simply invokes the <code>state</code> method internally. The <code>sequence</code> method accepts a closure or arrays of sequenced attributes:</p><pre><code>$users = User::factory()
                -&gt;count(2)
                -&gt;sequence(
                    [&#39;name&#39; =&gt; &#39;First User&#39;],
                    [&#39;name&#39; =&gt; &#39;Second User&#39;],
                )
                -&gt;create();
</code></pre><p><a name="factory-relationships"></a></p><h2 id="factory-relationships" tabindex="-1"><a class="header-anchor" href="#factory-relationships" aria-hidden="true">#</a> Factory Relationships</h2><p><a name="has-many-relationships"></a></p><h3 id="has-many-relationships" tabindex="-1"><a class="header-anchor" href="#has-many-relationships" aria-hidden="true">#</a> Has Many Relationships</h3><p>Next, let&#39;s explore building Eloquent model relationships using Laravel&#39;s fluent factory methods. First, let&#39;s assume our application has an <code>App\\Models\\User</code> model and an <code>App\\Models\\Post</code> model. Also, let&#39;s assume that the <code>User</code> model defines a <code>hasMany</code> relationship with <code>Post</code>. We can create a user that has three posts using the <code>has</code> method provided by the Laravel&#39;s factories. The <code>has</code> method accepts a factory instance:</p><pre><code>use App\\Models\\Post;
use App\\Models\\User;

$user = User::factory()
            -&gt;has(Post::factory()-&gt;count(3))
            -&gt;create();
</code></pre><p>By convention, when passing a <code>Post</code> model to the <code>has</code> method, Laravel will assume that the <code>User</code> model must have a <code>posts</code> method that defines the relationship. If necessary, you may explicitly specify the name of the relationship that you would like to manipulate:</p><pre><code>$user = User::factory()
            -&gt;has(Post::factory()-&gt;count(3), &#39;posts&#39;)
            -&gt;create();
</code></pre><p>Of course, you may perform state manipulations on the related models. In addition, you may pass a closure based state transformation if your state change requires access to the parent model:</p><pre><code>$user = User::factory()
            -&gt;has(
                Post::factory()
                        -&gt;count(3)
                        -&gt;state(function (array $attributes, User $user) {
                            return [&#39;user_type&#39; =&gt; $user-&gt;type];
                        })
            )
            -&gt;create();
</code></pre><p><a name="has-many-relationships-using-magic-methods"></a></p><h4 id="using-magic-methods" tabindex="-1"><a class="header-anchor" href="#using-magic-methods" aria-hidden="true">#</a> Using Magic Methods</h4><p>For convenience, you may use Laravel&#39;s magic factory relationship methods to build relationships. For example, the following example will use convention to determine that the related models should be created via a <code>posts</code> relationship method on the <code>User</code> model:</p><pre><code>$user = User::factory()
            -&gt;hasPosts(3)
            -&gt;create();
</code></pre><p>When using magic methods to create factory relationships, you may pass an array of attributes to override on the related models:</p><pre><code>$user = User::factory()
            -&gt;hasPosts(3, [
                &#39;published&#39; =&gt; false,
            ])
            -&gt;create();
</code></pre><p>You may provide a closure based state transformation if your state change requires access to the parent model:</p><pre><code>$user = User::factory()
            -&gt;hasPosts(3, function (array $attributes, User $user) {
                return [&#39;user_type&#39; =&gt; $user-&gt;type];
            })
            -&gt;create();
</code></pre><p><a name="belongs-to-relationships"></a></p><h3 id="belongs-to-relationships" tabindex="-1"><a class="header-anchor" href="#belongs-to-relationships" aria-hidden="true">#</a> Belongs To Relationships</h3><p>Now that we have explored how to build &quot;has many&quot; relationships using factories, let&#39;s explore the inverse of the relationship. The <code>for</code> method may be used to define the parent model that factory created models belong to. For example, we can create three <code>App\\Models\\Post</code> model instances that belong to a single user:</p><pre><code>use App\\Models\\Post;
use App\\Models\\User;

$posts = Post::factory()
            -&gt;count(3)
            -&gt;for(User::factory()-&gt;state([
                &#39;name&#39; =&gt; &#39;Jessica Archer&#39;,
            ]))
            -&gt;create();
</code></pre><p>If you already have a parent model instance that should be associated with the models you are creating, you may pass the model instance to the <code>for</code> method:</p><pre><code>$user = User::factory()-&gt;create();

$posts = Post::factory()
            -&gt;count(3)
            -&gt;for($user)
            -&gt;create();
</code></pre><p><a name="belongs-to-relationships-using-magic-methods"></a></p><h4 id="using-magic-methods-1" tabindex="-1"><a class="header-anchor" href="#using-magic-methods-1" aria-hidden="true">#</a> Using Magic Methods</h4><p>For convenience, you may use Laravel&#39;s magic factory relationship methods to define &quot;belongs to&quot; relationships. For example, the following example will use convention to determine that the three posts should belong to the <code>user</code> relationship on the <code>Post</code> model:</p><pre><code>$posts = Post::factory()
            -&gt;count(3)
            -&gt;forUser([
                &#39;name&#39; =&gt; &#39;Jessica Archer&#39;,
            ])
            -&gt;create();
</code></pre><p><a name="many-to-many-relationships"></a></p><h3 id="many-to-many-relationships" tabindex="-1"><a class="header-anchor" href="#many-to-many-relationships" aria-hidden="true">#</a> Many To Many Relationships</h3><p>Like <a href="#has-many-relationships">has many relationships</a>, &quot;many to many&quot; relationships may be created using the <code>has</code> method:</p><pre><code>use App\\Models\\Role;
use App\\Models\\User;

$user = User::factory()
            -&gt;has(Role::factory()-&gt;count(3))
            -&gt;create();
</code></pre><p><a name="pivot-table-attributes"></a></p><h4 id="pivot-table-attributes" tabindex="-1"><a class="header-anchor" href="#pivot-table-attributes" aria-hidden="true">#</a> Pivot Table Attributes</h4><p>If you need to define attributes that should be set on the pivot / intermediate table linking the models, you may use the <code>hasAttached</code> method. This method accepts an array of pivot table attribute names and values as its second argument:</p><pre><code>use App\\Models\\Role;
use App\\Models\\User;

$user = User::factory()
            -&gt;hasAttached(
                Role::factory()-&gt;count(3),
                [&#39;active&#39; =&gt; true]
            )
            -&gt;create();
</code></pre><p>You may provide a closure based state transformation if your state change requires access to the related model:</p><pre><code>$user = User::factory()
            -&gt;hasAttached(
                Role::factory()
                    -&gt;count(3)
                    -&gt;state(function (array $attributes, User $user) {
                        return [&#39;name&#39; =&gt; $user-&gt;name.&#39; Role&#39;];
                    }),
                [&#39;active&#39; =&gt; true]
            )
            -&gt;create();
</code></pre><p>If you already have model instances that you would like to be attached to the models you are creating, you may pass the model instances to the <code>hasAttached</code> method. In this example, the same three roles will be attached to all three users:</p><pre><code>$roles = Role::factory()-&gt;count(3)-&gt;create();

$user = User::factory()
            -&gt;count(3)
            -&gt;hasAttached($roles, [&#39;active&#39; =&gt; true])
            -&gt;create();
</code></pre><p><a name="many-to-many-relationships-using-magic-methods"></a></p><h4 id="using-magic-methods-2" tabindex="-1"><a class="header-anchor" href="#using-magic-methods-2" aria-hidden="true">#</a> Using Magic Methods</h4><p>For convenience, you may use Laravel&#39;s magic factory relationship methods to define many to many relationships. For example, the following example will use convention to determine that the related models should be created via a <code>roles</code> relationship method on the <code>User</code> model:</p><pre><code>$user = User::factory()
            -&gt;hasRoles(1, [
                &#39;name&#39; =&gt; &#39;Editor&#39;
            ])
            -&gt;create();
</code></pre><p><a name="polymorphic-relationships"></a></p><h3 id="polymorphic-relationships" tabindex="-1"><a class="header-anchor" href="#polymorphic-relationships" aria-hidden="true">#</a> Polymorphic Relationships</h3><p><a href="./eloquent-relationships#polymorphic-relationships">Polymorphic relationships</a> may also be created using factories. Polymorphic &quot;morph many&quot; relationships are created in the same way as typical &quot;has many&quot; relationships. For example, if an <code>App\\Models\\Post</code> model has a <code>morphMany</code> relationship with an <code>App\\Models\\Comment</code> model:</p><pre><code>use App\\Models\\Post;

$post = Post::factory()-&gt;hasComments(3)-&gt;create();
</code></pre><p><a name="morph-to-relationships"></a></p><h4 id="morph-to-relationships" tabindex="-1"><a class="header-anchor" href="#morph-to-relationships" aria-hidden="true">#</a> Morph To Relationships</h4><p>Magic methods may not be used to create <code>morphTo</code> relationships. Instead, the <code>for</code> method must be used directly and the name of the relationship must be explicitly provided. For example, imagine that the <code>Comment</code> model has a <code>commentable</code> method that defines a <code>morphTo</code> relationship. In this situation, we may create three comments that belong to a single post by using the <code>for</code> method directly:</p><pre><code>$comments = Comment::factory()-&gt;count(3)-&gt;for(
    Post::factory(), &#39;commentable&#39;
)-&gt;create();
</code></pre><p><a name="polymorphic-many-to-many-relationships"></a></p><h4 id="polymorphic-many-to-many-relationships" tabindex="-1"><a class="header-anchor" href="#polymorphic-many-to-many-relationships" aria-hidden="true">#</a> Polymorphic Many To Many Relationships</h4><p>Polymorphic &quot;many to many&quot; (<code>morphToMany</code> / <code>morphedByMany</code>) relationships may be created just like non-polymorphic &quot;many to many&quot; relationships:</p><pre><code>use App\\Models\\Tag;
use App\\Models\\Video;

$videos = Video::factory()
            -&gt;hasAttached(
                Tag::factory()-&gt;count(3),
                [&#39;public&#39; =&gt; true]
            )
            -&gt;create();
</code></pre><p>Of course, the magic <code>has</code> method may also be used to create polymorphic &quot;many to many&quot; relationships:</p><pre><code>$videos = Video::factory()
            -&gt;hasTags(3, [&#39;public&#39; =&gt; true])
            -&gt;create();
</code></pre><p><a name="defining-relationships-within-factories"></a></p><h3 id="defining-relationships-within-factories" tabindex="-1"><a class="header-anchor" href="#defining-relationships-within-factories" aria-hidden="true">#</a> Defining Relationships Within Factories</h3><p>To define a relationship within your model factory, you will typically assign a new factory instance to the foreign key of the relationship. This is normally done for the &quot;inverse&quot; relationships such as <code>belongsTo</code> and <code>morphTo</code> relationships. For example, if you would like to create a new user when creating a post, you may do the following:</p><pre><code>use App\\Models\\User;

/**
 * Define the model&#39;s default state.
 *
 * @return array&lt;string, mixed&gt;
 */
public function definition(): array
{
    return [
        &#39;user_id&#39; =&gt; User::factory(),
        &#39;title&#39; =&gt; fake()-&gt;title(),
        &#39;content&#39; =&gt; fake()-&gt;paragraph(),
    ];
}
</code></pre><p>If the relationship&#39;s columns depend on the factory that defines it you may assign a closure to an attribute. The closure will receive the factory&#39;s evaluated attribute array:</p><pre><code>/**
 * Define the model&#39;s default state.
 *
 * @return array&lt;string, mixed&gt;
 */
public function definition(): array
{
    return [
        &#39;user_id&#39; =&gt; User::factory(),
        &#39;user_type&#39; =&gt; function (array $attributes) {
            return User::find($attributes[&#39;user_id&#39;])-&gt;type;
        },
        &#39;title&#39; =&gt; fake()-&gt;title(),
        &#39;content&#39; =&gt; fake()-&gt;paragraph(),
    ];
}
</code></pre><p><a name="recycling-an-existing-model-for-relationships"></a></p><h3 id="recycling-an-existing-model-for-relationships" tabindex="-1"><a class="header-anchor" href="#recycling-an-existing-model-for-relationships" aria-hidden="true">#</a> Recycling An Existing Model For Relationships</h3><p>If you have models that share a common relationship with another model, you may use the <code>recycle</code> method to ensure a single instance of the related model is recycled for all of the relationships created by the factory.</p><p>For example, imagine you have <code>Airline</code>, <code>Flight</code>, and <code>Ticket</code> models, where the ticket belongs to an airline and a flight, and the flight also belongs to an airline. When creating tickets, you will probably want the same airline for both the ticket and the flight, so you may pass an airline instance to the <code>recycle</code> method:</p><pre><code>Ticket::factory()
    -&gt;recycle(Airline::factory()-&gt;create())
    -&gt;create();
</code></pre><p>You may find the <code>recycle</code> method particularly useful if you have models belonging to a common user or team.</p><p>The <code>recycle</code> method also accepts a collection of existing models. When a collection is provided to the <code>recycle</code> method, a random model from the collection will be chosen when the factory needs a model of that type:</p><pre><code>Ticket::factory()
    -&gt;recycle($airlines)
    -&gt;create();
</code></pre>`,138);function m(y,f){const o=s("ExternalLinkIcon");return r(),i("div",null,[l,t("p",null,[e("Via the "),h,e(" helper, factories have access to the "),t("a",p,[e("Faker"),c(o)]),e(" PHP library, which allows you to conveniently generate various kinds of random data for testing and seeding.")]),u])}const v=n(d,[["render",m],["__file","eloquent-factories.html.vue"]]);export{v as default};
