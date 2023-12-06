import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{r,o,c as d,b as a,d as e,e as i,a as t}from"./app-06635a3b.js";const c={},h=t(`<h1 id="database-testing" tabindex="-1"><a class="header-anchor" href="#database-testing" aria-hidden="true">#</a> Database Testing</h1><ul><li><a href="#introduction">Introduction</a><ul><li><a href="#resetting-the-database-after-each-test">Resetting The Database After Each Test</a></li></ul></li><li><a href="#model-factories">Model Factories</a></li><li><a href="#running-seeders">Running Seeders</a></li><li><a href="#available-assertions">Available Assertions</a></li></ul><p><a name="introduction"></a></p><h2 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h2><p>Laravel provides a variety of helpful tools and assertions to make it easier to test your database driven applications. In addition, Laravel model factories and seeders make it painless to create test database records using your application&#39;s Eloquent models and relationships. We&#39;ll discuss all of these powerful features in the following documentation.</p><p><a name="resetting-the-database-after-each-test"></a></p><h3 id="resetting-the-database-after-each-test" tabindex="-1"><a class="header-anchor" href="#resetting-the-database-after-each-test" aria-hidden="true">#</a> Resetting The Database After Each Test</h3><p>Before proceeding much further, let&#39;s discuss how to reset your database after each of your tests so that data from a previous test does not interfere with subsequent tests. Laravel&#39;s included <code>Illuminate\\Foundation\\Testing\\RefreshDatabase</code> trait will take care of this for you. Simply use the trait on your test class:</p><pre><code>&lt;?php

namespace Tests\\Feature;

use Illuminate\\Foundation\\Testing\\RefreshDatabase;
use Tests\\TestCase;

class ExampleTest extends TestCase
{
    use RefreshDatabase;

    /**
     * A basic functional test example.
     */
    public function test_basic_example(): void
    {
        $response = $this-&gt;get(&#39;/&#39;);

        // ...
    }
}
</code></pre><p>The <code>Illuminate\\Foundation\\Testing\\RefreshDatabase</code> trait does not migrate your database if your schema is up to date. Instead, it will only execute the test within a database transaction. Therefore, any records added to the database by test cases that do not use this trait may still exist in the database.</p><p>If you would like to totally reset the database, you may use the <code>Illuminate\\Foundation\\Testing\\DatabaseMigrations</code> or <code>Illuminate\\Foundation\\Testing\\DatabaseTruncation</code> traits instead. However, both of these options are significantly slower than the <code>RefreshDatabase</code> trait.</p><p><a name="model-factories"></a></p><h2 id="model-factories" tabindex="-1"><a class="header-anchor" href="#model-factories" aria-hidden="true">#</a> Model Factories</h2><p>When testing, you may need to insert a few records into your database before executing your test. Instead of manually specifying the value of each column when you create this test data, Laravel allows you to define a set of default attributes for each of your <a href="./eloquent">Eloquent models</a> using <a href="./eloquent-factories">model factories</a>.</p><p>To learn more about creating and utilizing model factories to create models, please consult the complete <a href="./eloquent-factories">model factory documentation</a>. Once you have defined a model factory, you may utilize the factory within your test to create models:</p><pre><code>use App\\Models\\User;

public function test_models_can_be_instantiated(): void
{
    $user = User::factory()-&gt;create();

    // ...
}
</code></pre><p><a name="running-seeders"></a></p><h2 id="running-seeders" tabindex="-1"><a class="header-anchor" href="#running-seeders" aria-hidden="true">#</a> Running Seeders</h2><p>If you would like to use <a href="./seeding">database seeders</a> to populate your database during a feature test, you may invoke the <code>seed</code> method. By default, the <code>seed</code> method will execute the <code>DatabaseSeeder</code>, which should execute all of your other seeders. Alternatively, you pass a specific seeder class name to the <code>seed</code> method:</p><pre><code>&lt;?php

namespace Tests\\Feature;

use Database\\Seeders\\OrderStatusSeeder;
use Database\\Seeders\\TransactionStatusSeeder;
use Illuminate\\Foundation\\Testing\\RefreshDatabase;
use Tests\\TestCase;

class ExampleTest extends TestCase
{
    use RefreshDatabase;

    /**
     * Test creating a new order.
     */
    public function test_orders_can_be_created(): void
    {
        // Run the DatabaseSeeder...
        $this-&gt;seed();

        // Run a specific seeder...
        $this-&gt;seed(OrderStatusSeeder::class);

        // ...

        // Run an array of specific seeders...
        $this-&gt;seed([
            OrderStatusSeeder::class,
            TransactionStatusSeeder::class,
            // ...
        ]);
    }
}
</code></pre><p>Alternatively, you may instruct Laravel to automatically seed the database before each test that uses the <code>RefreshDatabase</code> trait. You may accomplish this by defining a <code>$seed</code> property on your base test class:</p><pre><code>&lt;?php

namespace Tests;

use Illuminate\\Foundation\\Testing\\TestCase as BaseTestCase;

abstract class TestCase extends BaseTestCase
{
    use CreatesApplication;

    /**
     * Indicates whether the default seeder should run before each test.
     *
     * @var bool
     */
    protected $seed = true;
}
</code></pre><p>When the <code>$seed</code> property is <code>true</code>, the test will run the <code>Database\\Seeders\\DatabaseSeeder</code> class before each test that uses the <code>RefreshDatabase</code> trait. However, you may specify a specific seeder that should be executed by defining a <code>$seeder</code> property on your test class:</p><pre><code>use Database\\Seeders\\OrderStatusSeeder;

/**
 * Run a specific seeder before each test.
 *
 * @var string
 */
protected $seeder = OrderStatusSeeder::class;
</code></pre><p><a name="available-assertions"></a></p><h2 id="available-assertions" tabindex="-1"><a class="header-anchor" href="#available-assertions" aria-hidden="true">#</a> Available Assertions</h2>`,26),l={href:"https://phpunit.de/",target:"_blank",rel:"noopener noreferrer"},u=t(`<p><a name="assert-database-count"></a></p><h4 id="assertdatabasecount" tabindex="-1"><a class="header-anchor" href="#assertdatabasecount" aria-hidden="true">#</a> assertDatabaseCount</h4><p>Assert that a table in the database contains the given number of records:</p><pre><code>$this-&gt;assertDatabaseCount(&#39;users&#39;, 5);
</code></pre><p><a name="assert-database-has"></a></p><h4 id="assertdatabasehas" tabindex="-1"><a class="header-anchor" href="#assertdatabasehas" aria-hidden="true">#</a> assertDatabaseHas</h4><p>Assert that a table in the database contains records matching the given key / value query constraints:</p><pre><code>$this-&gt;assertDatabaseHas(&#39;users&#39;, [
    &#39;email&#39; =&gt; &#39;sally@example.com&#39;,
]);
</code></pre><p><a name="assert-database-missing"></a></p><h4 id="assertdatabasemissing" tabindex="-1"><a class="header-anchor" href="#assertdatabasemissing" aria-hidden="true">#</a> assertDatabaseMissing</h4><p>Assert that a table in the database does not contain records matching the given key / value query constraints:</p><pre><code>$this-&gt;assertDatabaseMissing(&#39;users&#39;, [
    &#39;email&#39; =&gt; &#39;sally@example.com&#39;,
]);
</code></pre><p><a name="assert-deleted"></a></p><h4 id="assertsoftdeleted" tabindex="-1"><a class="header-anchor" href="#assertsoftdeleted" aria-hidden="true">#</a> assertSoftDeleted</h4><p>The <code>assertSoftDeleted</code> method may be used to assert a given Eloquent model has been &quot;soft deleted&quot;:</p><pre><code>$this-&gt;assertSoftDeleted($user);
</code></pre><p><a name="assert-not-deleted"></a></p><h4 id="assertnotsoftdeleted" tabindex="-1"><a class="header-anchor" href="#assertnotsoftdeleted" aria-hidden="true">#</a> assertNotSoftDeleted</h4><p>The <code>assertNotSoftDeleted</code> method may be used to assert a given Eloquent model hasn&#39;t been &quot;soft deleted&quot;:</p><pre><code>$this-&gt;assertNotSoftDeleted($user);
</code></pre><p><a name="assert-model-exists"></a></p><h4 id="assertmodelexists" tabindex="-1"><a class="header-anchor" href="#assertmodelexists" aria-hidden="true">#</a> assertModelExists</h4><p>Assert that a given model exists in the database:</p><pre><code>use App\\Models\\User;

$user = User::factory()-&gt;create();

$this-&gt;assertModelExists($user);
</code></pre><p><a name="assert-model-missing"></a></p><h4 id="assertmodelmissing" tabindex="-1"><a class="header-anchor" href="#assertmodelmissing" aria-hidden="true">#</a> assertModelMissing</h4><p>Assert that a given model does not exist in the database:</p><pre><code>use App\\Models\\User;

$user = User::factory()-&gt;create();

$user-&gt;delete();

$this-&gt;assertModelMissing($user);
</code></pre><p><a name="expects-database-query-count"></a></p><h4 id="expectsdatabasequerycount" tabindex="-1"><a class="header-anchor" href="#expectsdatabasequerycount" aria-hidden="true">#</a> expectsDatabaseQueryCount</h4><p>The <code>expectsDatabaseQueryCount</code> method may be invoked at the beginning of your test to specify the total number of database queries that you expect to be run during the test. If the actual number of executed queries does not exactly match this expectation, the test will fail:</p><pre><code>$this-&gt;expectsDatabaseQueryCount(5);

// Test...
</code></pre>`,32);function p(f,b){const s=r("ExternalLinkIcon");return o(),d("div",null,[h,a("p",null,[e("Laravel provides several database assertions for your "),a("a",l,[e("PHPUnit"),i(s)]),e(" feature tests. We'll discuss each of these assertions below.")]),u])}const y=n(c,[["render",p],["__file","database-testing.html.vue"]]);export{y as default};
