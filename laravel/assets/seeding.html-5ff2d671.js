import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as s,a as n}from"./app-06635a3b.js";const d={},r=n(`<h1 id="数据填充" tabindex="-1"><a class="header-anchor" href="#数据填充" aria-hidden="true">#</a> 数据填充</h1><ul><li><a href="#introduction">简介</a></li><li><a href="#writing-seeders">编写 Seeders</a><ul><li><a href="#using-model-factories">使用模型工厂</a></li><li><a href="#calling-additional-seeders">调用其他 Seeders</a></li><li><a href="#muting-model-events">禁用模型事件</a></li></ul></li><li><a href="#running-seeders">运行 Seeders</a></li></ul><p><a name="introduction"></a></p><h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h2><p>Laravel 内置了一个可为你的数据库填充测试数据的数据填充类。所有的数据填充类都应该放在 <code>database/seeds</code> 目录下。Laravel 默认定义了一个 <code>DatabaseSeeder</code> 类。通过这个类，你可以用 <code>call</code> 方法来运行其他的 <code>seed</code> 类，从而控制数据填充的顺序。</p><blockquote><p><strong>注意</strong><br> 在数据库填充期间，<a href="./eloquent#mass-assignment">批量赋值保护</a>被自动禁用。</p></blockquote><p><a name="writing-seeders"></a></p><h2 id="编写-seeders" tabindex="-1"><a class="header-anchor" href="#编写-seeders" aria-hidden="true">#</a> 编写 Seeders</h2><p>运行 <a href="./artisan">Artisan 命令</a> <code>make:seeder</code> 可以生成 Seeder，生成的 seeders 都放在 <code>database/seeders</code> 目录下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan make:seeder UserSeeder
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>一个数据填充类默认只包含一个方法：<code>run</code> ，当执行 <code>db:seed</code> <a href="./artisan">Artisan命令</a> 时，被调用。在 <code>run</code> 方法中, 可以按需将数据插入数据库中。 也可以使用<a href="./queries">查询构造器</a>来手动插入数据，或者可以使用 <a href="./eloquent-factories">Eloquent 数据工厂</a>。</p><p>例如，在默认 <code>DatabaseSeeder</code> 类的 <code>run</code> 方法中添加一个数据库插入语句：</p><pre><code>&lt;?php

namespace Database\\Seeders;

use Illuminate\\Database\\Seeder;
use Illuminate\\Support\\Facades\\DB;
use Illuminate\\Support\\Facades\\Hash;
use Illuminate\\Support\\Str;

class DatabaseSeeder extends Seeder
{
    /**
     * 运行数据填充
     */
    public function run(): void
    {
        DB::table(&#39;users&#39;)-&gt;insert([
            &#39;name&#39; =&gt; Str::random(10),
            &#39;email&#39; =&gt; Str::random(10).&#39;@gmail.com&#39;,
            &#39;password&#39; =&gt; Hash::make(&#39;password&#39;),
        ]);
    }
}
</code></pre><blockquote><p><strong>注意</strong><br> 可以在 <code>run</code> 方法的参数中键入你需要的任何依赖性,它们将自动通过 Laravel <a href="./container">服务容器</a>注入。</p></blockquote><p><a name="using-model-factories"></a></p><h3 id="使用模型工厂" tabindex="-1"><a class="header-anchor" href="#使用模型工厂" aria-hidden="true">#</a> 使用模型工厂</h3><p>当然，手动指定每个模型填充的属性是很麻烦的。因此可以使用 <a href="./eloquent-factories">Eloquent 数据工厂</a>来更方便地生成大量的数据库记录。首先，查看 <a href="./eloquent-factories">Eloquent 数据工厂</a>，了解如何定义工厂。</p><p>例如，创建50个用户，每个用户有一个相关的帖子：</p><pre><code>use App\\Models\\User;

/**
 * 运行数据库迁移
 */
public function run(): void
{
    User::factory()
            -&gt;count(50)
            -&gt;hasPosts(1)
            -&gt;create();
}
</code></pre><p><a name="calling-additional-seeders"></a></p><h3 id="调用其他-seeders" tabindex="-1"><a class="header-anchor" href="#调用其他-seeders" aria-hidden="true">#</a> 调用其他 Seeders</h3><p>在 <code>DatabaseSeeder</code> 类中，可以使用 <code>call</code> 方法来执行其他的填充类。使用 <code>call</code> 方法可以将数据库迁移分成多个文件，这样就不会出现单个数据填充类过大。<code>call</code> 方法接受一个由数据填充类组成的数组：</p><pre><code>/**
 * 运行数据库迁移
 */
public function run(): void
{
    $this-&gt;call([
        UserSeeder::class,
        PostSeeder::class,
        CommentSeeder::class,
    ]);
}
</code></pre><p><a name="muting-model-events"></a></p><h3 id="禁用模型事件" tabindex="-1"><a class="header-anchor" href="#禁用模型事件" aria-hidden="true">#</a> 禁用模型事件</h3><p>在运行时，你可能想阻止模型调用事件，可以使用 <code>WithoutModelEvents</code> 特性。使用 <code>WithoutModelEvents</code> trait 可确保不调用模型事件，即使通过 <code>call</code> 方法执行了额外的 seed 类：</p><pre><code>&lt;?php

namespace Database\\Seeders;

use Illuminate\\Database\\Seeder;
use Illuminate\\Database\\Console\\Seeds\\WithoutModelEvents;

class DatabaseSeeder extends Seeder
{
    use WithoutModelEvents;

    /**
     * 运行数据库迁移
     */
    public function run(): void
    {
        $this-&gt;call([
            UserSeeder::class,
        ]);
    }
}
</code></pre><p><a name="running-seeders"></a></p><h2 id="运行-seeders" tabindex="-1"><a class="header-anchor" href="#运行-seeders" aria-hidden="true">#</a> 运行 Seeders</h2><p>执行 <code>db:seed</code> Artisan 命令来为数据库填充数据。默认情况下，<code>db:seed</code> 命令会运行 <code>Database\\Seeders\\DatabaseSeeder</code> 类来调用其他数据填充类。当然，也可以使用 <code>--class</code> 选项来指定一个特定的填充类：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan db:seed

php artisan db:seed <span class="token parameter variable">--class</span><span class="token operator">=</span>UserSeeder
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>你还可以使用 <code>migrate:fresh</code> 命令结合 <code>--seed</code> 选项，这将删除数据库中所有表并重新运行所有迁移。此命令对于完全重建数据库非常有用。 <code>--seeder</code> 选项可以用来指定要运行的填充文件：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan migrate:fresh <span class="token parameter variable">--seed</span>

php artisan migrate:fresh <span class="token parameter variable">--seed</span> <span class="token parameter variable">--seeder</span><span class="token operator">=</span>UserSeeder 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="forcing-seeding-production"></a></p><h4 id="在生产环境中强制运行填充" tabindex="-1"><a class="header-anchor" href="#在生产环境中强制运行填充" aria-hidden="true">#</a> 在生产环境中强制运行填充</h4><p>一些填充操作可能会导致原有数据的更新或丢失。为了保护生产环境数据库的数据，在 <code>生产环境</code> 中运行填充命令前会进行确认。可以添加 <code>--force</code> 选项来强制运行填充命令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan db:seed <span class="token parameter variable">--force</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,37),i=[r];function o(c,t){return a(),s("div",null,i)}const u=e(d,[["render",o],["__file","seeding.html.vue"]]);export{u as default};
