import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{r,o as d,c as o,b as a,d as e,e as i,a as s}from"./app-06635a3b.js";const c={},h=s(`<h1 id="数据库测试" tabindex="-1"><a class="header-anchor" href="#数据库测试" aria-hidden="true">#</a> 数据库测试</h1><ul><li><a href="#introduction">介绍</a><ul><li><a href="#resetting-the-database-after-each-test">每次测试后重置数据库</a></li></ul></li><li><a href="#model-factories">模型工厂</a></li><li><a href="#running-seeders">运行 Seeders</a></li><li><a href="#available-assertions">可用的断言</a></li></ul><p><a name="introduction"></a></p><h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h2><p>Laravel 提供了各种有用的工具和断言，从而让测试数据库驱动变得更加容易。除此之外，Laravel 模型工厂和 Seeders 可以轻松地使用应用程序的 Eloquent 模型和关系来创建测试数据库记录。</p><p><a name="resetting-the-database-after-each-test"></a></p><h3 id="每次测试后重置数据库" tabindex="-1"><a class="header-anchor" href="#每次测试后重置数据库" aria-hidden="true">#</a> 每次测试后重置数据库</h3><p>在进行测试之前，让我们讨论一下如何在每次测试后重置数据库，以便让先前测试的数据不会干扰后续测试。 Laravel 包含的 <code>Illuminate\\Foundation\\Testing\\RefreshDatabase</code> trait 会为你解决这个问题。只需在您的测试类上使用该 Trait：</p><pre><code>&lt;?php

namespace Tests\\Feature;

use Illuminate\\Foundation\\Testing\\RefreshDatabase;
use Illuminate\\Foundation\\Testing\\WithoutMiddleware;
use Tests\\TestCase;

class ExampleTest extends TestCase
{
    use RefreshDatabase;

    /**
     * 一个基本的功能测试例子。
     */
    public function test_basic_example(): void
    {
        $response = $this-&gt;get(&#39;/&#39;);

        // ...
    }
}
</code></pre><p>如果你的数据库结构是最新的，那么这个 Trait<code>Illuminate\\Foundation\\Testing\\RefreshDatabase</code> 并不会迁移数据库。相反，它只会在一个数据库事务中执行测试。因此，任何由测试用例添加到数据库的记录，如果不使用这个 Trait，可能仍然存在于数据库中。</p><p>如果你想使用迁移来完全重置数据库，可以使用这个 Trait <code>Illuminate\\Foundation\\Testing\\DatabaseMigrations</code> 来替代。然而，<code>DatabaseMigrations</code> 这个 Trait 明显比 <code>RefreshDatabase</code> Trait 要慢。</p><p><a name="model-factories"></a></p><h2 id="模型工厂" tabindex="-1"><a class="header-anchor" href="#模型工厂" aria-hidden="true">#</a> 模型工厂</h2><p>当我们测试的时候，可能需要在执行测试之前向数据库插入一些数据。Laravel 允许你使用 <a href="./eloquent-factories">模型工厂</a> 为每个 <a href="./eloquent">Eloquent 模型</a> 定义一组默认值，而不是在创建测试数据时手动指定每一列的值。</p><p>要学习有关创建和使用模型工厂来创建模型的更多信息，请参阅完整的 <a href="./eloquent-factories">模型工厂文档</a>。定义模型工厂后，你可以在测试中使用该工厂来创建模型：</p><pre><code>use App\\Models\\User;

public function test_models_can_be_instantiated(): void
{
    $user = User::factory()-&gt;create();

    // ...
}
</code></pre><p><a name="running-seeders"></a></p><h2 id="运行-seeders" tabindex="-1"><a class="header-anchor" href="#运行-seeders" aria-hidden="true">#</a> 运行 seeders</h2><p>如果你在功能测试时希望使用 <a href="./seeding">数据库 seeders</a> 来填充你的数据库， 你可以调用 <code>seed</code> 方法。 默认情况下， <code>seed</code> 方法将会执行 <code>DatabaseSeeder</code>， 它将会执行你的所有其他 seeders。或者，你传递指定的 seeder 类名给 <code>seed</code> 方法：</p><pre><code>&lt;?php

namespace Tests\\Feature;

use Database\\Seeders\\OrderStatusSeeder;
use Database\\Seeders\\TransactionStatusSeeder;
use Illuminate\\Foundation\\Testing\\RefreshDatabase;
use Illuminate\\Foundation\\Testing\\WithoutMiddleware;
use Tests\\TestCase;

class ExampleTest extends TestCase
{
    use RefreshDatabase;

    /**
     * 测试创建新订单。
     */
    public function test_orders_can_be_created(): void
    {
        // 运行 DatabaseSeeder...
        $this-&gt;seed();

        // 运行指定 seeder...
        $this-&gt;seed(OrderStatusSeeder::class);

        // ...

        // 运行指定的 seeders...
        $this-&gt;seed([
            OrderStatusSeeder::class,
            TransactionStatusSeeder::class,
            // ...
        ]);
    }
}
</code></pre><p>或者通过 <code>RefreshDatabase</code> trait 在每次测试之前自动为数据库填充数据。你也可以通过在测试类上定义 <code>$seed</code> 属性来实现：</p><pre><code>&lt;?php

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
</code></pre><p>当 <code>$seed</code> 属性为 <code>true</code> 时，这个测试将在每个使用 <code>RefreshDatabase</code> trait 的测试之前运行 <code>Database\\Seeders\\DatabaseSeeder</code> 类。但是，你可以通过在测试类上定义 <code>$seeder</code> 属性来指定要执行的 seeder：</p><pre><code>use Database\\Seeders\\OrderStatusSeeder;

/**
 * 在测试前指定要运行的 seeder
 *
 * @var string
 */
protected $seeder = OrderStatusSeeder::class;
</code></pre><p><a name="available-assertions"></a></p><h2 id="可用的断言" tabindex="-1"><a class="header-anchor" href="#可用的断言" aria-hidden="true">#</a> 可用的断言</h2>`,26),l={href:"https://phpunit.de/",target:"_blank",rel:"noopener noreferrer"},p=s(`<p><a name="assert-database-count"></a></p><h4 id="assertdatabasecount" tabindex="-1"><a class="header-anchor" href="#assertdatabasecount" aria-hidden="true">#</a> assertDatabaseCount</h4><p>断言数据库中的表包含给定数量的记录：</p><pre><code>$this-&gt;assertDatabaseCount(&#39;users&#39;, 5);
</code></pre><p><a name="assert-database-has"></a></p><h4 id="assertdatabasehas" tabindex="-1"><a class="header-anchor" href="#assertdatabasehas" aria-hidden="true">#</a> assertDatabaseHas</h4><p>断言数据库中的表包含给定键/值查询约束的记录：</p><pre><code>$this-&gt;assertDatabaseHas(&#39;users&#39;, [
    &#39;email&#39; =&gt; &#39;sally@example.com&#39;,
]);
</code></pre><p><a name="assert-database-missing"></a></p><h4 id="assertdatabasemissing" tabindex="-1"><a class="header-anchor" href="#assertdatabasemissing" aria-hidden="true">#</a> assertDatabaseMissing</h4><p>断言数据库中的表不包含给定键/值查询约束的记录：</p><pre><code>$this-&gt;assertDatabaseMissing(&#39;users&#39;, [
    &#39;email&#39; =&gt; &#39;sally@example.com&#39;,
]);
</code></pre><p><a name="assert-deleted"></a></p><h4 id="assertsoftdeleted" tabindex="-1"><a class="header-anchor" href="#assertsoftdeleted" aria-hidden="true">#</a> assertSoftDeleted</h4><p><code>assertSoftDeleted</code> 方法断言给定的 Eloquent 模型已被「软删除」的记录：</p><pre><code>$this-&gt;assertSoftDeleted($user);
</code></pre><p><a name="assert-not-deleted"></a></p><h4 id="assertnotsoftdeleted" tabindex="-1"><a class="header-anchor" href="#assertnotsoftdeleted" aria-hidden="true">#</a> assertNotSoftDeleted</h4><p><code>assertNotSoftDeleted</code> 方法断言给定的 Eloquent 模型没有被「软删除」的记录：</p><pre><code>$this-&gt;assertNotSoftDeleted($user);
</code></pre><p><a name="assert-model-exists"></a></p><h4 id="assertmodelexists" tabindex="-1"><a class="header-anchor" href="#assertmodelexists" aria-hidden="true">#</a> assertModelExists</h4><p>断言数据库中存在给定的模型：</p><pre><code>use App\\Models\\User;

$user = User::factory()-&gt;create();

$this-&gt;assertModelExists($user);
</code></pre><p><a name="assert-model-missing"></a></p><h4 id="assertmodelmissing" tabindex="-1"><a class="header-anchor" href="#assertmodelmissing" aria-hidden="true">#</a> assertModelMissing</h4><p>断言数据库中不存在给定的模型：</p><pre><code>use App\\Models\\User;

$user = User::factory()-&gt;create();

$user-&gt;delete();

$this-&gt;assertModelMissing($user);
</code></pre><p><a name="expects-database-query-count"></a></p><h4 id="expectsdatabasequerycount" tabindex="-1"><a class="header-anchor" href="#expectsdatabasequerycount" aria-hidden="true">#</a> expectsDatabaseQueryCount</h4><p>可以在测试开始时调用 <code>expectsDatabaseQueryCount</code> 方法，以指定你希望在测试期间运行的数据库查询总数。如果实际执行的查询数量与这个预期不完全匹配，那么测试将失败：</p><pre><code>$this-&gt;expectsDatabaseQueryCount(5);

// Test...
</code></pre>`,32);function u(b,f){const t=r("ExternalLinkIcon");return d(),o("div",null,[h,a("p",null,[e("Laravel 为你的 "),a("a",l,[e("PHPUnit"),i(t)]),e(" 功能测试提供了几个数据库断言。我们将在下面逐个讨论。")]),p])}const x=n(c,[["render",u],["__file","database-testing.html.vue"]]);export{x as default};
