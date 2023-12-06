import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{r,o as c,c as d,b as a,d as e,e as s,a as n}from"./app-06635a3b.js";const i={},p=n(`<h1 id="eloquent-数据工厂" tabindex="-1"><a class="header-anchor" href="#eloquent-数据工厂" aria-hidden="true">#</a> Eloquent：数据工厂</h1><ul><li><a href="#introduction">介绍</a></li><li><a href="#defining-model-factories">定义模型工厂</a><ul><li><a href="#generating-factories">生成工厂</a></li><li><a href="#factory-states">工厂状态</a></li><li><a href="#factory-callbacks">工厂回调</a></li></ul></li><li><a href="#creating-models-using-factories">使用工厂创建模型</a><ul><li><a href="#instantiating-models">实例化模型</a></li><li><a href="#persisting-models">持久化模型</a></li><li><a href="#sequences">序列</a></li></ul></li><li><a href="#factory-relationships">工厂关联</a><ul><li><a href="#has-many-relationships">一对多关系</a></li><li><a href="#belongs-to-relationships">属于关系</a></li><li><a href="#many-to-many-relationships">多对多关系</a></li><li><a href="#polymorphic-relationships">多态关系</a></li><li><a href="#defining-relationships-within-factories">在工厂中定义关系</a></li><li><a href="#recycling-an-existing-model-for-relationships">重复利用现有的模型建立关系</a></li></ul></li></ul><p><a name="introduction"></a></p><h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h2><p>当测试你的应用程序或向数据库填充数据时，你可能需要插入一些记录到数据库中。Laravel 允许你使用模型工厂为每个 <a href="./eloquent">Eloquent 模型</a>定义一组默认属性，而不是手动指定每个列的值。</p><p>要查看如何编写工厂的示例，请查看你的应用程序中的 <code>database/factories/UserFactory.php</code> 文件。这个工厂已经包含在所有新的 Laravel 应用程序中，并包含以下工厂定义：</p><pre><code>namespace Database\\Factories;

use Illuminate\\Support\\Str;
use Illuminate\\Database\\Eloquent\\Factories\\Factory;

class UserFactory extends Factory
{
    /**
     * 定义模型的默认状态
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
</code></pre><p>正如你所见，在其最基本的形式下，数据工厂是扩展 Laravel 基础工厂类并定义一个 <code>definition</code> 方法的类。<code>definition</code> 方法返回在使用工厂创建模型时应用的默认属性值集合。</p>`,8),l=a("code",null,"fake",-1),u={href:"https://github.com/FakerPHP/Faker",target:"_blank",rel:"noopener noreferrer"},h=n('<blockquote><p><strong>注意</strong> 你可以通过在 <code>config/app.php</code> 配置文件中添加 <code>faker_locale</code> 选项来设置你应用程序的 Faker 区域设置。</p></blockquote><p><a name="defining-model-factories"></a></p><h2 id="定义模型工厂" tabindex="-1"><a class="header-anchor" href="#定义模型工厂" aria-hidden="true">#</a> 定义模型工厂</h2><p><a name="generating-factories"></a></p><h3 id="创建工厂" tabindex="-1"><a class="header-anchor" href="#创建工厂" aria-hidden="true">#</a> 创建工厂</h3>',5),g=a("code",null,"make:factory",-1),m={href:"https://chat.openai.com./artisan",target:"_blank",rel:"noopener noreferrer"},f=n(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan make:factory PostFactory
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>新工厂类将被放置在你的 <code>database/factories</code> 目录中。</p><p><a name="factory-and-model-discovery-conventions"></a></p><h4 id="模型和工厂的自动发现机制" tabindex="-1"><a class="header-anchor" href="#模型和工厂的自动发现机制" aria-hidden="true">#</a> 模型和工厂的自动发现机制</h4><p>一旦你定义了工厂，你可以使用 <code>Illuminate\\Database\\Eloquent\\Factories\\HasFactory</code> 特征提供给模型的静态 <code>factory</code> 方法来为该模型实例化工厂。</p><p><code>HasFactory</code> 特征的 <code>factory</code> 方法将使用约定来确定适用于特定模型的工厂。具体而言，该方法将在 <code>Database\\Factories</code> 命名空间中查找一个工厂，该工厂的类名与模型名称匹配，并以 <code>Factory</code> 为后缀。如果这些约定不适用于你的特定应用程序或工厂，则可以在模型上覆盖 <code>newFactory</code> 方法，以直接返回模型对应的工厂的实例：</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Database<span class="token punctuation">\\</span>Eloquent<span class="token punctuation">\\</span>Factories<span class="token punctuation">\\</span>Factory</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Database<span class="token punctuation">\\</span>Factories<span class="token punctuation">\\</span>Administration<span class="token punctuation">\\</span>FlightFactory</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * 为模型创建一个新的工厂实例。
 */</span>
<span class="token keyword">protected</span> <span class="token keyword">static</span> <span class="token keyword">function</span> <span class="token function-definition function">newFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token class-name return-type">Factory</span>
<span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token class-name static-context">FlightFactory</span><span class="token operator">::</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接下来，定义相应工厂的 <code>model</code> 属性：</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">App<span class="token punctuation">\\</span>Administration<span class="token punctuation">\\</span>Flight</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Database<span class="token punctuation">\\</span>Eloquent<span class="token punctuation">\\</span>Factories<span class="token punctuation">\\</span>Factory</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">FlightFactory</span> <span class="token keyword">extends</span> <span class="token class-name">Factory</span>
<span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * 工厂对应的模型名称。
     *
     * <span class="token keyword">@var</span> <span class="token class-name"><span class="token keyword">string</span></span>
     */</span>
    <span class="token keyword">protected</span> <span class="token variable">$model</span> <span class="token operator">=</span> <span class="token class-name static-context">Flight</span><span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="factory-states"></a></p><h3 id="工厂状态" tabindex="-1"><a class="header-anchor" href="#工厂状态" aria-hidden="true">#</a> 工厂状态</h3><p>状态操作方法可以让你定义离散的修改，这些修改可以在任意组合中应用于你的模型工厂。例如，你的 <code>Database\\Factories\\UserFactory</code> 工厂可能包含一个 <code>suspended</code> 状态方法，该方法可以修改其默认属性值之一。</p><p>状态转换方法通常会调用 Laravel 基础工厂类提供的 <code>state</code> 方法。<code>state</code> 方法接受一个闭包函数，该函数将接收为工厂定义的原始属性数组，并应返回一个要修改的属性数组：</p><pre><code>use Illuminate\\Database\\Eloquent\\Factories\\Factory;

/**
 * 表示用户已被暂停。
 */
public function suspended(): Factory
{
    return $this-&gt;state(function (array $attributes) {
        return [
            &#39;account_status&#39; =&gt; &#39;suspended&#39;,
        ];
    });
}
</code></pre><h4 id="「trashed」状态" tabindex="-1"><a class="header-anchor" href="#「trashed」状态" aria-hidden="true">#</a> 「Trashed」状态</h4><p>如果你的 Eloquent 模型可以进行<a href="./eloquent#soft-deleting">软删除</a>，你可以调用内置的 <code>trashed</code> 状态方法来表示创建的模型应该已经被「软删除」。你不需要手动定义 <code>trashed</code> 状态，因为它对所有工厂都是自动可用的：</p><pre><code>use App\\Models\\User;

$user = User::factory()-&gt;trashed()-&gt;create();
</code></pre><p><a name="factory-callbacks"></a></p><h3 id="工厂回调函数" tabindex="-1"><a class="header-anchor" href="#工厂回调函数" aria-hidden="true">#</a> 工厂回调函数</h3><p>工厂回调函数是使用 <code>afterMaking</code> 和 <code>afterCreating</code> 方法注册的，它们允许你在创建或制造模型后执行其他任务。你应该通过在工厂类中定义一个 <code>configure</code> 方法来注册这些回调函数。当工厂被实例化时，Laravel 将自动调用这个方法：</p><pre><code>namespace Database\\Factories;

use App\\Models\\User;
use Illuminate\\Database\\Eloquent\\Factories\\Factory;
use Illuminate\\Support\\Str;

class UserFactory extends Factory
{
    /**
     * 配置模型工厂。
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
</code></pre><p><a name="creating-models-using-factories"></a></p><h2 id="使用工厂创建模型" tabindex="-1"><a class="header-anchor" href="#使用工厂创建模型" aria-hidden="true">#</a> 使用工厂创建模型</h2><p><a name="instantiating-models"></a></p><h3 id="实例化模型" tabindex="-1"><a class="header-anchor" href="#实例化模型" aria-hidden="true">#</a> 实例化模型</h3><p>一旦你定义了工厂，你可以使用由 <code>Illuminate\\Database\\Eloquent\\Factories\\HasFactory</code> 特征为你的模型提供的静态 <code>factory</code> 方法来实例化该模型的工厂对象。让我们看一些创建模型的示例。首先，我们将使用 <code>make</code> 方法创建模型，而不将其持久化到数据库中：</p><pre><code>use App\\Models\\User;

$user = User::factory()-&gt;make();
</code></pre><p>你可以使用 count 方法创建多个模型的集合：</p><pre><code>$users = User::factory()-&gt;count(3)-&gt;make();
</code></pre><p><a name="applying-states"></a></p><h4 id="应用状态" tabindex="-1"><a class="header-anchor" href="#应用状态" aria-hidden="true">#</a> 应用状态</h4><p>你也可以将任何<a href="#factory-states">状态</a>应用于这些模型。如果你想要对这些模型应用多个状态转换，只需直接调用状态转换方法即可：</p><pre><code>$users = User::factory()-&gt;count(5)-&gt;suspended()-&gt;make();
</code></pre><p><a name="overriding-attributes"></a></p><h4 id="覆盖属性" tabindex="-1"><a class="header-anchor" href="#覆盖属性" aria-hidden="true">#</a> 覆盖属性</h4><p>如果你想要覆盖模型的一些默认值，可以将一个值数组传递给 <code>make</code> 方法。只有指定的属性将被替换，而其余的属性将保持设置为工厂指定的默认值：</p><pre><code>$user = User::factory()-&gt;make([
    &#39;name&#39; =&gt; &#39;Abigail Otwell&#39;,
]);
</code></pre><p>或者，可以直接在工厂实例上调用 state 方法进行内联状态转换：</p><pre><code>$user = User::factory()-&gt;state([
    &#39;name&#39; =&gt; &#39;Abigail Otwell&#39;,
])-&gt;make();
</code></pre><blockquote><p>注意：使用工厂创建模型时，<a href="./eloquent#mass-assignment">批量赋值保护</a>会自动被禁用。</p></blockquote><p><a name="persisting-models"></a></p><h3 id="持久化模型" tabindex="-1"><a class="header-anchor" href="#持久化模型" aria-hidden="true">#</a> 持久化模型</h3><p><code>create</code> 方法会实例化模型并使用 Eloquent 的 <code>save</code> 方法将它们持久化到数据库中：</p><pre><code>use App\\Models\\User;

// 创建单个 App\\Models\\User 实例。。。
$user = User::factory()-&gt;create();

// 创建三个 App\\Models\\User 实例。。。
$users = User::factory()-&gt;count(3)-&gt;create();
</code></pre><p>你可以通过将属性数组传递给 <code>create</code> 方法来覆盖工厂的默认模型属性：</p><pre><code>$user = User::factory()-&gt;create([
    &#39;name&#39; =&gt; &#39;Abigail&#39;,
]);
</code></pre><p><a name="sequences"></a></p><h3 id="序列" tabindex="-1"><a class="header-anchor" href="#序列" aria-hidden="true">#</a> 序列</h3><p>有时，你可能希望为每个创建的模型交替更改给定模型属性的值。你可以通过将状态转换定义为序列来实现此目的。例如，你可能希望为每个创建的用户在 <code>admin</code> 列中在 <code>Y</code> 和 <code>N</code> 之间交替更改：</p><pre><code>use App\\Models\\User;
use Illuminate\\Database\\Eloquent\\Factories\\Sequence;

$users = User::factory()
                -&gt;count(10)
                -&gt;state(new Sequence(
                    [&#39;admin&#39; =&gt; &#39;Y&#39;],
                    [&#39;admin&#39; =&gt; &#39;N&#39;],
                ))
                -&gt;create();
</code></pre><p>在这个例子中，将创建五个 <code>admin</code> 值为 <code>Y</code> 的用户和五个 <code>admin</code> 值为 <code>N</code> 的用户。</p><p>如果需要，你可以将闭包作为序列值包含在内。每次序列需要一个新值时，都会调用闭包：</p><pre><code>use Illuminate\\Database\\Eloquent\\Factories\\Sequence;

$users = User::factory()
                -&gt;count(10)
                -&gt;state(new Sequence(
                    fn (Sequence $sequence) =&gt; [&#39;role&#39; =&gt; UserRoles::all()-&gt;random()],
                ))
                -&gt;create();
</code></pre><p>在序列闭包内，你可以访问注入到闭包中的序列实例上的 <code>$index</code> 或 <code>$count</code> 属性。 <code>$index</code> 属性包含到目前为止已经进行的序列迭代次数，而 <code>$count</code> 属性包含序列将被调用的总次数：</p><pre><code>$users = User::factory()
                -&gt;count(10)
                -&gt;sequence(fn (Sequence $sequence) =&gt; [&#39;name&#39; =&gt; &#39;Name &#39;.$sequence-&gt;index])
                -&gt;create();
</code></pre><p>为了方便，序列也可以使用 <code>sequence</code> 方法应用，该方法只是在内部调用了 <code>state</code> 方法。 <code>sequence</code> 方法接受一个闭包或序列化属性的数组：</p><pre><code>$users = User::factory()
                -&gt;count(2)
                -&gt;sequence(
                    [&#39;name&#39; =&gt; &#39;First User&#39;],
                    [&#39;name&#39; =&gt; &#39;Second User&#39;],
                )
                -&gt;create();
</code></pre><p><a name="factory-relationships"></a></p><h2 id="工厂关联" tabindex="-1"><a class="header-anchor" href="#工厂关联" aria-hidden="true">#</a> 工厂关联</h2><p><a name="has-many-relationships"></a></p><h3 id="一对多关系" tabindex="-1"><a class="header-anchor" href="#一对多关系" aria-hidden="true">#</a> 一对多关系</h3><p>接下来，让我们探讨如何使用 Laravel 流畅的工厂方法构建 Eloquent 模型关系。首先，假设我们的应用程序有一个 <code>App\\Models\\User</code> 模型和一个 <code>App\\Models\\Post</code> 模型。同时，假设 <code>User</code> 模型定义了与 <code>Post</code> 的一对多关系。我们可以使用 Laravel 工厂提供的 <code>has</code> 方法创建一个有三篇文章的用户。<code>has</code> 方法接受一个工厂实例：</p><pre><code>use App\\Models\\Post;
use App\\Models\\User;

$user = User::factory()
            -&gt;has(Post::factory()-&gt;count(3))
            -&gt;create();
</code></pre><p>按照约定，当将 <code>Post</code> 模型传递给 <code>has</code> 方法时，Laravel 将假定 <code>User</code> 模型必须有一个 <code>posts</code> 方法来定义关系。如果需要，你可以显式指定你想要操作的关系名称：</p><pre><code>$user = User::factory()
            -&gt;has(Post::factory()-&gt;count(3), &#39;posts&#39;)
            -&gt;create();
</code></pre><p>当然，你可以对相关模型执行状态操作。此外，如果你的状态更改需要访问父模型，你可以传递一个基于闭包的状态转换：</p><pre><code>$user = User::factory()
            -&gt;has(
                Post::factory()
                        -&gt;count(3)
                        -&gt;state(function (array $attributes, User $user) {
                            return [&#39;user_type&#39; =&gt; $user-&gt;type];
                        })
            )
            -&gt;create();
</code></pre><p><a name="has-many-relationships-using-magic-methods"></a></p><h4 id="使用魔术方法" tabindex="-1"><a class="header-anchor" href="#使用魔术方法" aria-hidden="true">#</a> 使用魔术方法</h4><p>为了方便起见，你可以使用 Laravel 的魔术工厂关系方法来构建关系。例如，以下示例将使用约定来确定应该通过 <code>User</code> 模型上的 <code>posts</code> 关系方法创建相关模型：</p><pre><code>$user = User::factory()
            -&gt;hasPosts(3)
            -&gt;create();
</code></pre><p>当使用魔术方法创建工厂关系时，你可以传递一个属性数组来覆盖相关模型的属性：</p><pre><code>$user = User::factory()
            -&gt;hasPosts(3, [
                &#39;published&#39; =&gt; false,
            ])
            -&gt;create();
</code></pre><p>如果你的状态更改需要访问父模型，你可以提供一个基于闭包的状态转换：</p><pre><code>$user = User::factory()
            -&gt;hasPosts(3, function (array $attributes, User $user) {
                return [&#39;user_type&#39; =&gt; $user-&gt;type];
            })
            -&gt;create();
</code></pre><p><a name="belongs-to-relationships"></a></p><h3 id="反向关系" tabindex="-1"><a class="header-anchor" href="#反向关系" aria-hidden="true">#</a> 反向关系</h3><p>现在我们已经探讨了如何使用工厂构建「一对多」关系，让我们来探讨关系的反向操作。<code>for</code> 方法可用于定义工厂创建的模型所属的父模型。例如，我们可以创建三个 <code>App\\Models\\Post</code> 模型实例，这些实例属于同一个用户：</p><pre><code>use App\\Models\\Post;
use App\\Models\\User;

$posts = Post::factory()
            -&gt;count(3)
            -&gt;for(User::factory()-&gt;state([
                &#39;name&#39; =&gt; &#39;Jessica Archer&#39;,
            ]))
            -&gt;create();
</code></pre><p>如果你已经有一个应该与正在创建的模型关联的父模型实例，则可以将该模型实例传递给 <code>for</code> 方法：</p><pre><code>$user = User::factory()-&gt;create();

$posts = Post::factory()
            -&gt;count(3)
            -&gt;for($user)
            -&gt;create();
</code></pre><p><a name="belongs-to-relationships-using-magic-methods"></a></p><h4 id="使用魔术方法-1" tabindex="-1"><a class="header-anchor" href="#使用魔术方法-1" aria-hidden="true">#</a> 使用魔术方法</h4><p>为了方便起见，你可以使用 Laravel 的魔术工厂关系方法来定义「属于」关系。例如，以下示例将使用惯例来确定这三篇文章应该属于 <code>Post</code> 模型上的 <code>user</code> 关系：</p><pre><code>$posts = Post::factory()
            -&gt;count(3)
            -&gt;forUser([
                &#39;name&#39; =&gt; &#39;Jessica Archer&#39;,
            ])
            -&gt;create();
</code></pre><p><a name="many-to-many-relationships"></a></p><h3 id="多对多关系" tabindex="-1"><a class="header-anchor" href="#多对多关系" aria-hidden="true">#</a> 多对多关系</h3><p>与<a href="#has-many-relationships">一对多</a>关系一样，可以使用 <code>has</code> 方法创建「多对多」关系：</p><pre><code>use App\\Models\\Role;
use App\\Models\\User;

$user = User::factory()
            -&gt;has(Role::factory()-&gt;count(3))
            -&gt;create();
</code></pre><p><a name="pivot-table-attributes"></a></p><h4 id="中间表属性" tabindex="-1"><a class="header-anchor" href="#中间表属性" aria-hidden="true">#</a> 中间表属性</h4><p>如果需要定义应该在链接模型的透视表/中间表上设置的属性，可以使用 <code>hasAttached</code> 方法。此方法接受透视表属性名称和值的数组作为其第二个参数：</p><pre><code>use App\\Models\\Role;
use App\\Models\\User;

$user = User::factory()
            -&gt;hasAttached(
                Role::factory()-&gt;count(3),
                [&#39;active&#39; =&gt; true]
            )
            -&gt;create();
</code></pre><p>如果你的状态更改需要访问相关模型，则可以提供基于闭包的状态转换：</p><pre><code>$user = User::factory()
            -&gt;hasAttached(
                Role::factory()
                    -&gt;count(3)
                    -&gt;state(function (array $attributes, User $user) {
                        return [&#39;name&#39; =&gt; $user-&gt;name.&#39; Role&#39;];
                    }),
                [&#39;active&#39; =&gt; true]
            )
            -&gt;create();
</code></pre><p>如果你已经有要附加到正在创建的模型的模型实例，则可以将这些模型实例传递给 <code>hasAttached</code> 方法。在此示例中，相同的三个角色将附加到所有三个用户：</p><pre><code>$roles = Role::factory()-&gt;count(3)-&gt;create();

$user = User::factory()
            -&gt;count(3)
            -&gt;hasAttached($roles, [&#39;active&#39; =&gt; true])
            -&gt;create();
</code></pre><p><a name="many-to-many-relationships-using-magic-methods"></a></p><h4 id="使用魔术方法-2" tabindex="-1"><a class="header-anchor" href="#使用魔术方法-2" aria-hidden="true">#</a> 使用魔术方法</h4><p>为了方便，你可以使用 Laravel 的魔术工厂关系方法来定义多对多关系。例如，以下示例将使用约定确定应通过 <code>User</code> 模型上的 <code>roles</code> 关系方法创建相关模型：</p><pre><code>$user = User::factory()
            -&gt;hasRoles(1, [
                &#39;name&#39; =&gt; &#39;Editor&#39;
            ])
            -&gt;create();
</code></pre><p><a name="polymorphic-relationships"></a></p><h3 id="多态关联" tabindex="-1"><a class="header-anchor" href="#多态关联" aria-hidden="true">#</a> 多态关联</h3><p><a href="./eloquent-relationships#polymorphic-relationships">多态关联</a>也可以使用工厂函数创建。多态「morph many」关联的创建方式与典型的「has many」关联相同。例如，如果 <code>App\\Models\\Post</code> 模型与 <code>App\\Models\\Comment</code> 模型具有多态的<code>morphMany</code>关系：</p><pre><code>use App\\Models\\Post;

$post = Post::factory()-&gt;hasComments(3)-&gt;create();
</code></pre><p><a name="morph-to-relationships"></a></p><h4 id="morph-to-关联" tabindex="-1"><a class="header-anchor" href="#morph-to-关联" aria-hidden="true">#</a> Morph To 关联</h4><p>不能使用魔术方法创建 <code>morphTo</code> 关联。必须直接使用 <code>for</code> 方法，并明确提供关联名称。例如，假设 <code>Comment</code> 模型有一个 <code>commentable</code> 方法，该方法定义了一个 <code>morphTo</code> 关联。在这种情况下，我们可以使用 <code>for</code> 方法直接创建属于单个帖子的三个评论：</p><pre><code>$comments = Comment::factory()-&gt;count(3)-&gt;for(
    Post::factory(), &#39;commentable&#39;
)-&gt;create();
</code></pre><p><a name="polymorphic-many-to-many-relationships"></a></p><h4 id="多态多对多关联" tabindex="-1"><a class="header-anchor" href="#多态多对多关联" aria-hidden="true">#</a> 多态多对多关联</h4><p>多态「many to many」( <code>morphToMany</code> / <code>morphedByMany</code> ) 关联的创建方式与非多态 「many to many」 关联相同：</p><pre><code>use App\\Models\\Tag;
use App\\Models\\Video;

$videos = Video::factory()
            -&gt;hasAttached(
                Tag::factory()-&gt;count(3),
                [&#39;public&#39; =&gt; true]
            )
            -&gt;create();
</code></pre><p>当然，魔术方法 <code>has</code> 也可以用于创建多态「many to many」关系：</p><pre><code>$videos = Video::factory()
            -&gt;hasTags(3, [&#39;public&#39; =&gt; true])
            -&gt;create();
</code></pre><p><a name="defining-relationships-within-factories"></a></p><h3 id="在工厂中定义关系" tabindex="-1"><a class="header-anchor" href="#在工厂中定义关系" aria-hidden="true">#</a> 在工厂中定义关系</h3><p>在模型工厂中定义关系时，通常会将一个新的工厂实例分配给关系的外键。这通常是针对「反向」关系，例如 <code>belongsTo</code> 和 <code>morphTo</code> 关系。例如，如果你想在创建帖子时创建一个新用户，则可以执行以下操作：</p><pre><code>use App\\Models\\User;

/**
 * 定义模型的默认状态.
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
</code></pre><p>如果关系的列依赖于定义它的工厂，你可以将闭包分配给属性。该闭包将接收工厂计算出的属性数组</p><pre><code>/**
 * 定义模型的默认状态.
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
</code></pre><p><a name="recycling-an-existing-model-for-relationships"></a></p><h3 id="在关系中重复使用现有模型" tabindex="-1"><a class="header-anchor" href="#在关系中重复使用现有模型" aria-hidden="true">#</a> 在关系中重复使用现有模型</h3><p>如果你有多个模型与另一个模型共享一个公共关系，则可以使用 <code>recycle</code> 方法来确保相关模型的单个实例在工厂创建的所有关系中被重复使用。</p><p>例如，假设你有 <code>Airline</code>、<code>Flight</code> 和 <code>Ticket</code> 模型，其中机票属于一个航空公司和一个航班，而航班也属于一个航空公司。在创建机票时，你可能希望将同一航空公司用于机票和航班，因此可以将一个航空公司实例传递给 <code>recycle</code> 方法：</p><pre><code>Ticket::factory()
    -&gt;recycle(Airline::factory()-&gt;create())
    -&gt;create();
</code></pre><p>如果你的模型属于一个公共用户或团队，则可以发现 <code>recycle</code> 方法特别有用。</p><p><code>recycle</code> 方法还接受一组现有模型。当一组集合提供给 <code>recycle</code> 方法时，当工厂需要该类型的模型时，将从集合中选择一个随机模型：</p><pre><code>Ticket::factory()
    -&gt;recycle($airlines)
    -&gt;create();
</code></pre>`,129);function y(k,b){const t=r("ExternalLinkIcon");return c(),d("div",null,[p,a("p",null,[e("通过 "),l,e(" 辅助器，工厂可以访问 "),a("a",u,[e("Faker"),s(t)]),e(" PHP 库，它允许你方便地生成各种用于测试和填充的随机数据。")]),h,a("p",null,[e("要创建工厂，请执行 "),g,e(),a("a",m,[e("Artisan 命令"),s(t)]),e(":")]),f])}const U=o(i,[["render",y],["__file","eloquent-factories.html.vue"]]);export{U as default};
