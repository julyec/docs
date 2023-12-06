import{_ as l}from"./plugin-vue_export-helper-c27b6911.js";import{r as a,o as d,c as r,b as e,d as o,e as n,a as c}from"./app-06635a3b.js";const i={},h=c(`<h1 id="集合" tabindex="-1"><a class="header-anchor" href="#集合" aria-hidden="true">#</a> 集合</h1><ul><li><a href="#introduction">介绍</a><ul><li><a href="#creating-collections">创建集合</a></li><li><a href="#extending-collections">扩展集合</a></li></ul></li><li><a href="#available-methods">可用方法</a></li><li><a href="#higher-order-messages">高阶消息</a></li><li><a href="#lazy-collections">惰性集合</a><ul><li><a href="#lazy-collection-introduction">介绍</a></li><li><a href="#creating-lazy-collections">创建惰性集合</a></li><li><a href="#the-enumerable-contract">枚举契约</a></li><li><a href="#lazy-collection-methods">惰性集合方法</a></li></ul></li></ul><p><a name="introduction"></a></p><h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h2><p><code>Illuminate\\Support\\Collection</code> 类为处理数据数组提供了一个流畅、方便的包装器。 例如，查看以下代码。 我们将使用 <code>collect</code> 助手从数组中创建一个新的集合实例，对每个元素运行 <code>strtoupper</code> 函数，然后删除所有空元素：</p><pre><code>$collection = collect([&#39;taylor&#39;, &#39;abigail&#39;, null])-&gt;map(function (string $name) {
    return strtoupper($name);
})-&gt;reject(function (string $name) {
    return empty($name);
});
</code></pre><p>如你所见，<code>Collection</code> 类允许你链接其方法以执行流畅的映射和减少底层数组。一般来说，集合是不可变的，这意味着每个 <code>Collection</code> 方法都会返回一个全新的 <code>Collection</code> 实例。</p><p><a name="creating-collections"></a></p><h3 id="创建集合" tabindex="-1"><a class="header-anchor" href="#创建集合" aria-hidden="true">#</a> 创建集合</h3><p>如上所述，<code>collect</code> 帮助器为给定数组返回一个新的 <code>Illuminate\\Support\\Collection</code> 实例。因此，创建一个集合非常简单：</p><pre><code>$collection = collect([1, 2, 3]);
</code></pre><blockquote><p><strong>技巧：</strong><a href="./eloquent">Eloquent</a> 查询的结果总是作为 <code>Collection</code> 实例返回。</p></blockquote><p><a name="extending-collections"></a></p><h3 id="扩展集合" tabindex="-1"><a class="header-anchor" href="#扩展集合" aria-hidden="true">#</a> 扩展集合</h3><p>集合是「可宏化的」，它允许你在运行时向 <code>Collection</code> 类添加其他方法。 <code>Illuminate\\Support\\Collection</code> 类的 <code>macro</code> 方法接受一个闭包，该闭包将在调用宏时执行。宏闭包可以通过 <code>$this</code> 访问集合的其他方法，就像它是集合类的真实方法一样。例如，以下代码在 <code>Collection</code> 类中添加了 <code>toUpper</code> 方法：</p><pre><code>use Illuminate\\Support\\Collection;
use Illuminate\\Support\\Str;

Collection::macro(&#39;toUpper&#39;, function () {
    return $this-&gt;map(function (string $value) {
        return Str::upper($value);
    });
});

$collection = collect([&#39;first&#39;, &#39;second&#39;]);

$upper = $collection-&gt;toUpper();

// [&#39;FIRST&#39;, &#39;SECOND&#39;]
</code></pre><p>通常，你应该在<a href="./providers">服务提供者</a>的 <code>boot</code> 方法中声明集合宏。</p><p><a name="macro-arguments"></a></p><h4 id="宏参数" tabindex="-1"><a class="header-anchor" href="#宏参数" aria-hidden="true">#</a> 宏参数</h4><p>如有必要，可以定义接受其他参数的宏：</p><pre><code>use Illuminate\\Support\\Collection;
use Illuminate\\Support\\Facades\\Lang;

Collection::macro(&#39;toLocale&#39;, function (string $locale) {
    return $this-&gt;map(function (string $value) use ($locale) {
        return Lang::get($value, [], $locale);
    });
});

$collection = collect([&#39;first&#39;, &#39;second&#39;]);

$translated = $collection-&gt;toLocale(&#39;es&#39;);
</code></pre><p><a name="available-methods"></a></p><h2 id="可用的方法" tabindex="-1"><a class="header-anchor" href="#可用的方法" aria-hidden="true">#</a> 可用的方法</h2><p>对于剩余的大部分集合文档，我们将讨论 <code>Collection</code> 类中可用的每个方法。请记住，所有这些方法都可以链式调用，以便流畅地操作底层数组。此外，几乎每个方法都会返回一个新的 <code>Collection</code> 实例，允许你在必要时保留集合的原始副本：</p>`,24),p=e("div",{class:"collection-method-list",markdown:"1"},[e("p",null,[e("a",{href:"#method-all"},"all"),e("a",{href:"#method-average"},"average"),e("a",{href:"#method-avg"},"avg"),e("a",{href:"#method-chunk"},"chunk"),e("a",{href:"#method-chunkwhile"},"chunkWhile"),e("a",{href:"#method-collapse"},"collapse"),e("a",{href:"#method-collect"},"collect"),e("a",{href:"#method-combine"},"combine"),e("a",{href:"#method-concat"},"concat"),e("a",{href:"#method-contains"},"contains"),e("a",{href:"#method-containsoneitem"},"containsOneItem"),e("a",{href:"#method-containsstrict"},"containsStrict"),e("a",{href:"#method-count"},"count"),e("a",{href:"#method-countBy"},"countBy"),e("a",{href:"#method-crossjoin"},"crossJoin"),e("a",{href:"#method-dd"},"dd"),e("a",{href:"#method-diff"},"diff"),e("a",{href:"#method-diffassoc"},"diffAssoc"),e("a",{href:"#method-diffkeys"},"diffKeys"),e("a",{href:"#method-doesntcontain"},"doesntContain"),e("a",{href:"#method-dump"},"dump"),e("a",{href:"#method-duplicates"},"duplicates"),e("a",{href:"#method-duplicatesstrict"},"duplicatesStrict"),e("a",{href:"#method-each"},"each"),e("a",{href:"#method-eachspread"},"eachSpread"),e("a",{href:"#method-every"},"every"),e("a",{href:"#method-except"},"except"),e("a",{href:"#method-filter"},"filter"),e("a",{href:"#method-first"},"first"),e("a",{href:"#method-first-or-fail"},"firstOrFail"),e("a",{href:"#method-first-where"},"firstWhere"),e("a",{href:"#method-flatmap"},"flatMap"),e("a",{href:"#method-flatten"},"flatten"),e("a",{href:"#method-flip"},"flip"),e("a",{href:"#method-forget"},"forget"),e("a",{href:"#method-forpage"},"forPage"),e("a",{href:"#method-get"},"get"),e("a",{href:"#method-groupby"},"groupBy"),e("a",{href:"#method-has"},"has"),e("a",{href:"#method-hasany"},"hasAny"),e("a",{href:"#method-implode"},"implode"),e("a",{href:"#method-intersect"},"intersect"),e("a",{href:"#method-intersectAssoc"},"intersectAssoc"),e("a",{href:"#method-intersectbykeys"},"intersectByKeys"),e("a",{href:"#method-isempty"},"isEmpty"),e("a",{href:"#method-isnotempty"},"isNotEmpty"),e("a",{href:"#method-join"},"join"),e("a",{href:"#method-keyby"},"keyBy"),e("a",{href:"#method-keys"},"keys"),e("a",{href:"#method-last"},"last"),e("a",{href:"#method-lazy"},"lazy"),e("a",{href:"#method-macro"},"macro"),e("a",{href:"#method-make"},"make"),e("a",{href:"#method-map"},"map"),e("a",{href:"#method-mapinto"},"mapInto"),e("a",{href:"#method-mapspread"},"mapSpread"),e("a",{href:"#method-maptogroups"},"mapToGroups"),e("a",{href:"#method-mapwithkeys"},"mapWithKeys"),e("a",{href:"#method-max"},"max"),e("a",{href:"#method-median"},"median"),e("a",{href:"#method-merge"},"merge"),e("a",{href:"#method-mergerecursive"},"mergeRecursive"),e("a",{href:"#method-min"},"min"),e("a",{href:"#method-mode"},"mode"),e("a",{href:"#method-nth"},"nth"),e("a",{href:"#method-only"},"only"),e("a",{href:"#method-pad"},"pad"),e("a",{href:"#method-partition"},"partition"),e("a",{href:"#method-pipe"},"pipe"),e("a",{href:"#method-pipeinto"},"pipeInto"),e("a",{href:"#method-pipethrough"},"pipeThrough"),e("a",{href:"#method-pluck"},"pluck"),e("a",{href:"#method-pop"},"pop"),e("a",{href:"#method-prepend"},"prepend"),e("a",{href:"#method-pull"},"pull"),e("a",{href:"#method-push"},"push"),e("a",{href:"#method-put"},"put"),e("a",{href:"#method-random"},"random"),e("a",{href:"#method-range"},"range"),e("a",{href:"#method-reduce"},"reduce"),e("a",{href:"#method-reduce-spread"},"reduceSpread"),e("a",{href:"#method-reject"},"reject"),e("a",{href:"#method-replace"},"replace"),e("a",{href:"#method-replacerecursive"},"replaceRecursive"),e("a",{href:"#method-reverse"},"reverse"),e("a",{href:"#method-search"},"search"),e("a",{href:"#method-shift"},"shift"),e("a",{href:"#method-shuffle"},"shuffle"),e("a",{href:"#method-skip"},"skip"),e("a",{href:"#method-skipuntil"},"skipUntil"),e("a",{href:"#method-skipwhile"},"skipWhile"),e("a",{href:"#method-slice"},"slice"),e("a",{href:"#method-sliding"},"sliding"),e("a",{href:"#method-sole"},"sole"),e("a",{href:"#method-some"},"some"),e("a",{href:"#method-sort"},"sort"),e("a",{href:"#method-sortby"},"sortBy"),e("a",{href:"#method-sortbydesc"},"sortByDesc"),e("a",{href:"#method-sortdesc"},"sortDesc"),e("a",{href:"#method-sortkeys"},"sortKeys"),e("a",{href:"#method-sortkeysdesc"},"sortKeysDesc"),e("a",{href:"#method-sortkeysusing"},"sortKeysUsing"),e("a",{href:"#method-splice"},"splice"),e("a",{href:"#method-split"},"split"),e("a",{href:"#method-splitin"},"splitIn"),e("a",{href:"#method-sum"},"sum"),e("a",{href:"#method-take"},"take"),e("a",{href:"#method-takeuntil"},"takeUntil"),e("a",{href:"#method-takewhile"},"takeWhile"),e("a",{href:"#method-tap"},"tap"),e("a",{href:"#method-times"},"times"),e("a",{href:"#method-toarray"},"toArray"),e("a",{href:"#method-tojson"},"toJson"),e("a",{href:"#method-transform"},"transform"),e("a",{href:"#method-undot"},"undot"),e("a",{href:"#method-union"},"union"),e("a",{href:"#method-unique"},"unique"),e("a",{href:"#method-uniquestrict"},"uniqueStrict"),e("a",{href:"#method-unless"},"unless"),e("a",{href:"#method-unlessempty"},"unlessEmpty"),e("a",{href:"#method-unlessnotempty"},"unlessNotEmpty"),e("a",{href:"#method-unwrap"},"unwrap"),e("a",{href:"#method-value"},"value"),e("a",{href:"#method-values"},"values"),e("a",{href:"#method-when"},"when"),e("a",{href:"#method-whenempty"},"whenEmpty"),e("a",{href:"#method-whennotempty"},"whenNotEmpty"),e("a",{href:"#method-where"},"where"),e("a",{href:"#method-wherestrict"},"whereStrict"),e("a",{href:"#method-wherebetween"},"whereBetween"),e("a",{href:"#method-wherein"},"whereIn"),e("a",{href:"#method-whereinstrict"},"whereInStrict"),e("a",{href:"#method-whereinstanceof"},"whereInstanceOf"),e("a",{href:"#method-wherenotbetween"},"whereNotBetween"),e("a",{href:"#method-wherenotin"},"whereNotIn"),e("a",{href:"#method-wherenotinstrict"},"whereNotInStrict"),e("a",{href:"#method-wherenotnull"},"whereNotNull"),e("a",{href:"#method-wherenull"},"whereNull"),e("a",{href:"#method-wrap"},"wrap"),e("a",{href:"#method-zip"},"zip")])],-1),s=c(`<p><a name="method-listing"></a></p><h2 id="方法列表" tabindex="-1"><a class="header-anchor" href="#方法列表" aria-hidden="true">#</a> 方法列表</h2><p><a name="method-all"></a></p><h4 id="all-collection-method-first-collection-method" tabindex="-1"><a class="header-anchor" href="#all-collection-method-first-collection-method" aria-hidden="true">#</a> <code>all()</code> {.collection-method .first-collection-method}</h4><p><code>all</code> 方法返回由集合表示的底层数组：</p><pre><code>collect([1, 2, 3])-&gt;all();

// [1, 2, 3]
</code></pre><p><a name="method-average"></a></p><h4 id="average-collection-method" tabindex="-1"><a class="header-anchor" href="#average-collection-method" aria-hidden="true">#</a> <code>average()</code> {.collection-method}</h4><p><a href="#method-avg"><code>avg</code></a> 方法的别名。</p><p><a name="method-avg"></a></p><h4 id="avg-collection-method" tabindex="-1"><a class="header-anchor" href="#avg-collection-method" aria-hidden="true">#</a> <code>avg()</code> {.collection-method}</h4>`,11),m=e("code",null,"avg",-1),u={href:"https://en.wikipedia.org/wiki/Average",target:"_blank",rel:"noopener noreferrer"},g=e("pre",null,[e("code",null,`$average = collect([
    ['foo' => 10],
    ['foo' => 10],
    ['foo' => 20],
    ['foo' => 40]
])->avg('foo');

// 20

$average = collect([1, 1, 2, 4])->avg();

// 2
`)],-1),f=e("p",null,[e("a",{name:"method-chunk"})],-1),$=e("h4",{id:"chunk-collection-method",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#chunk-collection-method","aria-hidden":"true"},"#"),o(),e("code",null,"chunk()"),o(" {.collection-method}")],-1),y=e("p",null,[e("code",null,"chunk"),o(" 方法将集合分成多个给定大小的较小集合：")],-1),k=e("pre",null,[e("code",null,`$collection = collect([1, 2, 3, 4, 5, 6, 7]);

$chunks = $collection->chunk(4);

$chunks->all();

// [[1, 2, 3, 4], [5, 6, 7]]
`)],-1),b={href:"https://getbootstrap.com/docs/4.1/layout/grid/",target:"_blank",rel:"noopener noreferrer"},w=e("a",{href:"./views"},"views",-1),x=e("a",{href:"./eloquent"},"Eloquent",-1),v=c(`<div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>@foreach ($products-&gt;chunk(3) as $chunk)
    &lt;div class=&quot;row&quot;&gt;
        @foreach ($chunk as $product)
            &lt;div class=&quot;col-xs-4&quot;&gt;{{ $product-&gt;name }}&lt;/div&gt;
        @endforeach
    &lt;/div&gt;
@endforeach
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="method-chunkwhile"></a></p><h4 id="chunkwhile-collection-method" tabindex="-1"><a class="header-anchor" href="#chunkwhile-collection-method" aria-hidden="true">#</a> <code>chunkWhile()</code> {.collection-method}</h4><p><code>chunkWhile</code> 方法根据给定回调的评估将集合分成多个更小的集合。传递给闭包的 <code>$chunk</code> 变量可用于检查前一个元素：</p><pre><code>$collection = collect(str_split(&#39;AABBCCCD&#39;));

$chunks = $collection-&gt;chunkWhile(function (string $value, int $key, Collection $chunk) {
    return $value === $chunk-&gt;last();
});

$chunks-&gt;all();

// [[&#39;A&#39;, &#39;A&#39;], [&#39;B&#39;, &#39;B&#39;], [&#39;C&#39;, &#39;C&#39;, &#39;C&#39;], [&#39;D&#39;]]
</code></pre><p><a name="method-collapse"></a></p><h4 id="collapse-collection-method" tabindex="-1"><a class="header-anchor" href="#collapse-collection-method" aria-hidden="true">#</a> <code>collapse()</code> {.collection-method}</h4><p><code>collapse</code> 方法将数组集合折叠成一个单一的平面集合：</p><pre><code>$collection = collect([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
]);

$collapsed = $collection-&gt;collapse();

$collapsed-&gt;all();

// [1, 2, 3, 4, 5, 6, 7, 8, 9]
</code></pre><p><a name="method-collect"></a></p><h4 id="collect-collection-method" tabindex="-1"><a class="header-anchor" href="#collect-collection-method" aria-hidden="true">#</a> <code>collect()</code> {.collection-method}</h4><p><code>collect</code> 方法返回一个新的 <code>Collection</code> 实例，其中包含当前集合中的项目：</p><pre><code>$collectionA = collect([1, 2, 3]);

$collectionB = $collectionA-&gt;collect();

$collectionB-&gt;all();

// [1, 2, 3]
</code></pre><p><code>collect</code> 方法主要用于将 <a href="#lazy-collections">惰性集合</a> 转换为标准的 <code>Collection</code> 实例：</p><pre><code>$lazyCollection = LazyCollection::make(function () {
    yield 1;
    yield 2;
    yield 3;
});

$collection = $lazyCollection-&gt;collect();

get_class($collection);

// &#39;Illuminate\\Support\\Collection&#39;

$collection-&gt;all();

// [1, 2, 3]
</code></pre><blockquote><p>**技巧：**当你有一个 <code>Enumerable</code> 的实例并且需要一个非惰性集合实例时，<code>collect</code> 方法特别有用。由于 <code>collect()</code> 是 <code>Enumerable</code> 合约的一部分，你可以安全地使用它来获取 <code>Collection</code> 实例。</p></blockquote><p><a name="method-combine"></a></p><h4 id="combine-collection-method" tabindex="-1"><a class="header-anchor" href="#combine-collection-method" aria-hidden="true">#</a> <code>combine()</code> {.collection-method}</h4><p><code>combine</code> 方法将集合的值作为键与另一个数组或集合的值组合：</p><pre><code>$collection = collect([&#39;name&#39;, &#39;age&#39;]);

$combined = $collection-&gt;combine([&#39;George&#39;, 29]);

$combined-&gt;all();

// [&#39;name&#39; =&gt; &#39;George&#39;, &#39;age&#39; =&gt; 29]
</code></pre><p><a name="method-concat"></a></p><h4 id="concat-collection-method" tabindex="-1"><a class="header-anchor" href="#concat-collection-method" aria-hidden="true">#</a> <code>concat()</code> {.collection-method}</h4><p><code>concat</code> 方法将给定的 <code>array</code> 或集合的值附加到另一个集合的末尾：</p><pre><code>$collection = collect([&#39;John Doe&#39;]);

$concatenated = $collection-&gt;concat([&#39;Jane Doe&#39;])-&gt;concat([&#39;name&#39; =&gt; &#39;Johnny Doe&#39;]);

$concatenated-&gt;all();

// [&#39;John Doe&#39;, &#39;Jane Doe&#39;, &#39;Johnny Doe&#39;]
</code></pre><p><code>concat</code> 方法在数字上重新索引连接到原始集合上的项目的键。要维护关联集合中的键，请参阅 <a href="#method-merge">merge</a> 方法。</p><p><a name="method-contains"></a></p><h4 id="contains-collection-method" tabindex="-1"><a class="header-anchor" href="#contains-collection-method" aria-hidden="true">#</a> <code>contains()</code> {.collection-method}</h4><p><code>contains</code> 方法确定集合是否包含给定项目。你可以将闭包传递给 <code>contains</code> 方法，以确定集合中是否存在与给定真值测试匹配的元素：</p><pre><code>$collection = collect([1, 2, 3, 4, 5]);

$collection-&gt;contains(function (int $value, int $key) {
    return $value &gt; 5;
});

// false
</code></pre><p>或者，你可以将字符串传递给 <code>contains</code> 方法，以确定集合是否包含给定的项目值：</p><pre><code>$collection = collect([&#39;name&#39; =&gt; &#39;Desk&#39;, &#39;price&#39; =&gt; 100]);

$collection-&gt;contains(&#39;Desk&#39;);

// true

$collection-&gt;contains(&#39;New York&#39;);

// false
</code></pre><p>你还可以将键/值对传递给 <code>contains</code> 方法，该方法将确定给定对是否存在于集合中：</p><pre><code>$collection = collect([
    [&#39;product&#39; =&gt; &#39;Desk&#39;, &#39;price&#39; =&gt; 200],
    [&#39;product&#39; =&gt; &#39;Chair&#39;, &#39;price&#39; =&gt; 100],
]);

$collection-&gt;contains(&#39;product&#39;, &#39;Bookcase&#39;);

// false
</code></pre><p><code>contains</code> 方法在检查项目值时使用“松散”比较，这意味着具有整数值的字符串将被视为等于具有相同值的整数。使用 <a href="#method-containsstrict"><code>containsStrict</code></a> 方法使用“严格”比较进行过滤。</p><p>对于 <code>contains</code> 的逆操作，请参见 <a href="#method-doesntcontain">doesntContain</a> 方法。</p><p><a name="method-containsoneitem"></a></p><h4 id="containsoneitem-collection-method" tabindex="-1"><a class="header-anchor" href="#containsoneitem-collection-method" aria-hidden="true">#</a> <code>containsOneItem()</code> {.collection-method}</h4><p><code>containsOneItem</code> 方法决定了集合是否包含一个项目。</p><pre><code>collect([])-&gt;containsOneItem();

// false

collect([&#39;1&#39;])-&gt;containsOneItem();

// true

collect([&#39;1&#39;, &#39;2&#39;])-&gt;containsOneItem();

// false
</code></pre><p><a name="method-containsstrict"></a></p><h4 id="containsstrict-collection-method" tabindex="-1"><a class="header-anchor" href="#containsstrict-collection-method" aria-hidden="true">#</a> <code>containsStrict()</code> {.collection-method}</h4><p>此方法与 <a href="#method-contains"><code>contains</code></a> 方法具有相同的签名；但是，所有值都使用「严格」比较进行比较。</p><blockquote><p>**技巧：**使用 <a href="./eloquent-collections#method-contains">Eloquent Collections</a> 时会修改此方法的行为。</p></blockquote><p><a name="method-count"></a></p><h4 id="count-collection-method" tabindex="-1"><a class="header-anchor" href="#count-collection-method" aria-hidden="true">#</a> <code>count()</code> {.collection-method}</h4><p><code>count</code> 方法返回集合中的项目总数：</p><pre><code>$collection = collect([1, 2, 3, 4]);

$collection-&gt;count();

// 4
</code></pre><p><a name="method-countBy"></a></p><h4 id="countby-collection-method" tabindex="-1"><a class="header-anchor" href="#countby-collection-method" aria-hidden="true">#</a> <code>countBy()</code> {.collection-method}</h4><p><code>countBy</code> 方法计算集合中值的出现次数。默认情况下，该方法计算每个元素的出现次数，允许你计算集合中元素的某些“类型”：</p><pre><code>$collection = collect([1, 2, 2, 2, 3]);

$counted = $collection-&gt;countBy();

$counted-&gt;all();

// [1 =&gt; 1, 2 =&gt; 3, 3 =&gt; 1]
</code></pre><p>你将闭包传递给 <code>countBy</code> 方法以按自定义值计算所有项目：</p><pre><code>$collection = collect([&#39;alice@gmail.com&#39;, &#39;bob@yahoo.com&#39;, &#39;carlos@gmail.com&#39;]);

$counted = $collection-&gt;countBy(function (string $email) {
    return substr(strrchr($email, &quot;@&quot;), 1);
});

$counted-&gt;all();

// [&#39;gmail.com&#39; =&gt; 2, &#39;yahoo.com&#39; =&gt; 1]
</code></pre><p><a name="method-crossjoin"></a></p><h4 id="crossjoin-collection-method" tabindex="-1"><a class="header-anchor" href="#crossjoin-collection-method" aria-hidden="true">#</a> <code>crossJoin()</code> {.collection-method}</h4><p><code>crossJoin</code> 方法在给定的数组或集合中交叉连接集合的值，返回具有所有可能排列的笛卡尔积：</p><pre><code>$collection = collect([1, 2]);

$matrix = $collection-&gt;crossJoin([&#39;a&#39;, &#39;b&#39;]);

$matrix-&gt;all();

/*
    [
        [1, &#39;a&#39;],
        [1, &#39;b&#39;],
        [2, &#39;a&#39;],
        [2, &#39;b&#39;],
    ]
*/

$collection = collect([1, 2]);

$matrix = $collection-&gt;crossJoin([&#39;a&#39;, &#39;b&#39;], [&#39;I&#39;, &#39;II&#39;]);

$matrix-&gt;all();

/*
    [
        [1, &#39;a&#39;, &#39;I&#39;],
        [1, &#39;a&#39;, &#39;II&#39;],
        [1, &#39;b&#39;, &#39;I&#39;],
        [1, &#39;b&#39;, &#39;II&#39;],
        [2, &#39;a&#39;, &#39;I&#39;],
        [2, &#39;a&#39;, &#39;II&#39;],
        [2, &#39;b&#39;, &#39;I&#39;],
        [2, &#39;b&#39;, &#39;II&#39;],
    ]
*/
</code></pre><p><a name="method-dd"></a></p><h4 id="dd-collection-method" tabindex="-1"><a class="header-anchor" href="#dd-collection-method" aria-hidden="true">#</a> <code>dd()</code> {.collection-method}</h4><p><code>dd</code> 方法转储集合的项目并结束脚本的执行：</p><pre><code>$collection = collect([&#39;John Doe&#39;, &#39;Jane Doe&#39;]);

$collection-&gt;dd();

/*
    Collection {
        #items: array:2 [
            0 =&gt; &quot;John Doe&quot;
            1 =&gt; &quot;Jane Doe&quot;
        ]
    }
*/
</code></pre><p>如果你不想停止执行脚本，请改用 <a href="#method-dump"><code>dump</code></a> 方法。</p><p><a name="method-diff"></a></p><h4 id="diff-collection-method" tabindex="-1"><a class="header-anchor" href="#diff-collection-method" aria-hidden="true">#</a> <code>diff()</code> {.collection-method}</h4><p><code>diff</code> 方法根据集合的值将集合与另一个集合或普通 PHP <code>array</code> 进行比较。此方法将返回给定集合中不存在的原始集合中的值：</p><pre><code>$collection = collect([1, 2, 3, 4, 5]);

$diff = $collection-&gt;diff([2, 4, 6, 8]);

$diff-&gt;all();

// [1, 3, 5]
</code></pre><blockquote><p>**技巧：**此方法的行为在使用 <a href="./eloquent-collections#method-diff">Eloquent Collections</a> 时被修改。</p></blockquote><p><a name="method-diffassoc"></a></p><h4 id="diffassoc-collection-method" tabindex="-1"><a class="header-anchor" href="#diffassoc-collection-method" aria-hidden="true">#</a> <code>diffAssoc()</code> {.collection-method}</h4><p><code>diffAssoc</code> 方法根据其键和值将集合与另一个集合或普通 PHP <code>array</code> 进行比较。此方法将返回给定集合中不存在的原始集合中的键/值对：</p><pre><code>$collection = collect([
    &#39;color&#39; =&gt; &#39;orange&#39;,
    &#39;type&#39; =&gt; &#39;fruit&#39;,
    &#39;remain&#39; =&gt; 6,
]);

$diff = $collection-&gt;diffAssoc([
    &#39;color&#39; =&gt; &#39;yellow&#39;,
    &#39;type&#39; =&gt; &#39;fruit&#39;,
    &#39;remain&#39; =&gt; 3,
    &#39;used&#39; =&gt; 6,
]);

$diff-&gt;all();

// [&#39;color&#39; =&gt; &#39;orange&#39;, &#39;remain&#39; =&gt; 6]
</code></pre><p><a name="method-diffkeys"></a></p><h4 id="diffkeys-collection-method" tabindex="-1"><a class="header-anchor" href="#diffkeys-collection-method" aria-hidden="true">#</a> <code>diffKeys()</code> {.collection-method}</h4><p><code>diffKeys</code> 方法将集合与另一个集合或基于其键的普通 PHP <code>array</code> 进行比较。此方法将返回给定集合中不存在的原始集合中的键/值对：</p><pre><code>$collection = collect([
    &#39;one&#39; =&gt; 10,
    &#39;two&#39; =&gt; 20,
    &#39;three&#39; =&gt; 30,
    &#39;four&#39; =&gt; 40,
    &#39;five&#39; =&gt; 50,
]);

$diff = $collection-&gt;diffKeys([
    &#39;two&#39; =&gt; 2,
    &#39;four&#39; =&gt; 4,
    &#39;six&#39; =&gt; 6,
    &#39;eight&#39; =&gt; 8,
]);

$diff-&gt;all();

// [&#39;one&#39; =&gt; 10, &#39;three&#39; =&gt; 30, &#39;five&#39; =&gt; 50]
</code></pre><p><a name="method-doesntcontain"></a></p><h4 id="doesntcontain-collection-method" tabindex="-1"><a class="header-anchor" href="#doesntcontain-collection-method" aria-hidden="true">#</a> <code>doesntContain()</code> {.collection-method}</h4><p><code>doesntContain</code> 方法确定集合是否不包含给定项目。你可以将闭包传递给 <code>doesntContain</code> 方法，以确定集合中是否不存在与给定真值测试匹配的元素：</p><pre><code>$collection = collect([1, 2, 3, 4, 5]);

$collection-&gt;doesntContain(function (int $value, int $key) {
    return $value &lt; 5;
});

// false
</code></pre><p>或者，你可以将字符串传递给 <code>doesntContain</code> 方法，以确定集合是否不包含给定的项目值：</p><pre><code>$collection = collect([&#39;name&#39; =&gt; &#39;Desk&#39;, &#39;price&#39; =&gt; 100]);

$collection-&gt;doesntContain(&#39;Table&#39;);

// true

$collection-&gt;doesntContain(&#39;Desk&#39;);

// false
</code></pre><p>你还可以将键/值对传递给 <code>doesntContain</code> 方法，该方法将确定给定对是否不存在于集合中：</p><pre><code>$collection = collect([
    [&#39;product&#39; =&gt; &#39;Desk&#39;, &#39;price&#39; =&gt; 200],
    [&#39;product&#39; =&gt; &#39;Chair&#39;, &#39;price&#39; =&gt; 100],
]);

$collection-&gt;doesntContain(&#39;product&#39;, &#39;Bookcase&#39;);

// true
</code></pre><p><code>doesntContain</code> 方法在检查项目值时使用「松散」比较，这意味着具有整数值的字符串将被视为等于具有相同值的整数。</p><p><a name="method-dump"></a></p><h4 id="dump-collection-method" tabindex="-1"><a class="header-anchor" href="#dump-collection-method" aria-hidden="true">#</a> <code>dump()</code> {.collection-method}</h4><p><code>dump</code> 方法转储集合的项目：</p><pre><code>$collection = collect([&#39;John Doe&#39;, &#39;Jane Doe&#39;]);

$collection-&gt;dump();

/*
    Collection {
        #items: array:2 [
            0 =&gt; &quot;John Doe&quot;
            1 =&gt; &quot;Jane Doe&quot;
        ]
    }
*/
</code></pre><p>如果要在转储集合后停止执行脚本，请改用 <a href="#method-dd"><code>dd</code></a> 方法。</p><p><a name="method-duplicates"></a></p><h4 id="duplicates-collection-method" tabindex="-1"><a class="header-anchor" href="#duplicates-collection-method" aria-hidden="true">#</a> <code>duplicates()</code> {.collection-method}</h4><p><code>duplicates</code> 方法从集合中检索并返回重复值：</p><pre><code>$collection = collect([&#39;a&#39;, &#39;b&#39;, &#39;a&#39;, &#39;c&#39;, &#39;b&#39;]);

$collection-&gt;duplicates();

// [2 =&gt; &#39;a&#39;, 4 =&gt; &#39;b&#39;]
</code></pre><p>如果集合包含数组或对象，你可以传递要检查重复值的属性的键：</p><pre><code>$employees = collect([
    [&#39;email&#39; =&gt; &#39;abigail@example.com&#39;, &#39;position&#39; =&gt; &#39;Developer&#39;],
    [&#39;email&#39; =&gt; &#39;james@example.com&#39;, &#39;position&#39; =&gt; &#39;Designer&#39;],
    [&#39;email&#39; =&gt; &#39;victoria@example.com&#39;, &#39;position&#39; =&gt; &#39;Developer&#39;],
]);

$employees-&gt;duplicates(&#39;position&#39;);

// [2 =&gt; &#39;Developer&#39;]
</code></pre><p><a name="method-duplicatesstrict"></a></p><h4 id="duplicatesstrict-collection-method" tabindex="-1"><a class="header-anchor" href="#duplicatesstrict-collection-method" aria-hidden="true">#</a> <code>duplicatesStrict()</code> {.collection-method}</h4><p>此方法与 <a href="#method-duplicates"><code>duplicates</code></a> 方法具有相同的签名；但是，所有值都使用「严格」比较进行比较。</p><p><a name="method-each"></a></p><h4 id="each-collection-method" tabindex="-1"><a class="header-anchor" href="#each-collection-method" aria-hidden="true">#</a> <code>each()</code> {.collection-method}</h4><p><code>each</code> 方法遍历集合中的项目并将每个项目传递给闭包：</p><pre><code>$collection = collect([1, 2, 3, 4]);

$collection-&gt;each(function (int $item, int $key) {
    // ...
});
</code></pre><p>如果你想停止遍历这些项目，你可以从你的闭包中返回 <code>false</code>：</p><pre><code>$collection-&gt;each(function (int $item, int $key) {
    if (/* condition */) {
        return false;
    }
});
</code></pre><p><a name="method-eachspread"></a></p><h4 id="eachspread-collection-method" tabindex="-1"><a class="header-anchor" href="#eachspread-collection-method" aria-hidden="true">#</a> <code>eachSpread()</code> {.collection-method}</h4><p><code>eachSpread</code> 方法迭代集合的项目，将每个嵌套项目值传递给给定的回调：</p><pre><code>$collection = collect([[&#39;John Doe&#39;, 35], [&#39;Jane Doe&#39;, 33]]);

$collection-&gt;eachSpread(function (string $name, int $age) {
    // ...
});
</code></pre><p>你可以通过从回调中返回 <code>false</code> 来停止遍历项目：</p><pre><code>$collection-&gt;eachSpread(function (string $name, int $age) {
    return false;
});
</code></pre><p><a name="method-every"></a></p><h4 id="every-collection-method" tabindex="-1"><a class="header-anchor" href="#every-collection-method" aria-hidden="true">#</a> <code>every()</code> {.collection-method}</h4><p><code>every</code> 方法可用于验证集合的所有元素是否通过给定的真值测试：</p><pre><code>collect([1, 2, 3, 4])-&gt;every(function (int $value, int $key) {
    return $value &gt; 2;
});

// false
</code></pre><p>如果集合为空，<code>every</code> 方法将返回 true：</p><pre><code>$collection = collect([]);

$collection-&gt;every(function (int $value, int $key) {
    return $value &gt; 2;
});

// true
</code></pre><p><a name="method-except"></a></p><h4 id="except-collection-method" tabindex="-1"><a class="header-anchor" href="#except-collection-method" aria-hidden="true">#</a> <code>except()</code> {.collection-method}</h4><p><code>except</code> 方法返回集合中的所有项目，除了具有指定键的项目：</p><pre><code>$collection = collect([&#39;product_id&#39; =&gt; 1, &#39;price&#39; =&gt; 100, &#39;discount&#39; =&gt; false]);

$filtered = $collection-&gt;except([&#39;price&#39;, &#39;discount&#39;]);

$filtered-&gt;all();

// [&#39;product_id&#39; =&gt; 1]
</code></pre><p>对于 <code>except</code> 的反义词，请参见 <a href="#method-only">only</a> 方法。</p><blockquote><p>技巧：此方法的行为在使用 <a href="./eloquent-collections#method-except">Eloquent Collections</a> 时被修改。</p></blockquote><p><a name="method-filter"></a></p><h4 id="filter-collection-method" tabindex="-1"><a class="header-anchor" href="#filter-collection-method" aria-hidden="true">#</a> <code>filter()</code> {.collection-method}</h4><p><code>filter</code> 方法使用给定的回调过滤集合，只保留那些通过给定真值测试的项目：</p><pre><code>$collection = collect([1, 2, 3, 4]);

$filtered = $collection-&gt;filter(function (int $value, int $key) {
    return $value &gt; 2;
});

$filtered-&gt;all();

// [3, 4]
</code></pre><p>如果没有提供回调，则集合中所有相当于 <code>false</code> 的条目都将被删除：</p><pre><code>$collection = collect([1, 2, 3, null, false, &#39;&#39;, 0, []]);

$collection-&gt;filter()-&gt;all();

// [1, 2, 3]
</code></pre><p>对于 <code>filter</code> 的逆操作，请参见 <a href="#method-reject">reject</a> 方法。</p><p><a name="method-first"></a></p><h4 id="first-collection-method" tabindex="-1"><a class="header-anchor" href="#first-collection-method" aria-hidden="true">#</a> <code>first()</code> {.collection-method}</h4><p><code>first</code> 方法返回集合中通过给定真值测试的第一个元素：</p><pre><code>collect([1, 2, 3, 4])-&gt;first(function (int $value, int $key) {
    return $value &gt; 2;
});

// 3
</code></pre><p>你也可以调用不带参数的 <code>first</code> 方法来获取集合中的第一个元素。如果集合为空，则返回 <code>null</code>：</p><pre><code>collect([1, 2, 3, 4])-&gt;first();

// 1
</code></pre><p><a name="method-first-or-fail"></a></p><h4 id="firstorfail-collection-method" tabindex="-1"><a class="header-anchor" href="#firstorfail-collection-method" aria-hidden="true">#</a> <code>firstOrFail()</code> {.collection-method}</h4><p><code>firstOrFail</code> 方法与 <code>first</code> 方法相同；但是，如果没有找到结果，将抛出 <code>Illuminate/Support/ItemNotFoundException</code> 异常。</p><pre><code>collect([1, 2, 3, 4])-&gt;firstOrFail(function (int $value, int $key) {
    return $value &gt; 5;
});

// Throws ItemNotFoundException...
</code></pre><p>你也可以调用 <code>firstOrFail</code> 方法，没有参数，以获得集合中的第一个元素。如果集合是空的，将抛出一个 <code>Illuminate\\Support\\ItemNotFoundException</code> 异常。</p><pre><code>collect([])-&gt;firstOrFail();

// Throws ItemNotFoundException...
</code></pre><p><a name="method-first-where"></a></p><h4 id="firstwhere-collection-method" tabindex="-1"><a class="header-anchor" href="#firstwhere-collection-method" aria-hidden="true">#</a> <code>firstWhere()</code> {.collection-method}</h4><p><code>firstWhere</code> 方法返回集合中具有给定键/值对的第一个元素：</p><pre><code>$collection = collect([
    [&#39;name&#39; =&gt; &#39;Regena&#39;, &#39;age&#39; =&gt; null],
    [&#39;name&#39; =&gt; &#39;Linda&#39;, &#39;age&#39; =&gt; 14],
    [&#39;name&#39; =&gt; &#39;Diego&#39;, &#39;age&#39; =&gt; 23],
    [&#39;name&#39; =&gt; &#39;Linda&#39;, &#39;age&#39; =&gt; 84],
]);

$collection-&gt;firstWhere(&#39;name&#39;, &#39;Linda&#39;);

// [&#39;name&#39; =&gt; &#39;Linda&#39;, &#39;age&#39; =&gt; 14]
</code></pre><p>你还可以使用比较运算符调用 <code>firstWhere</code> 方法：</p><pre><code>$collection-&gt;firstWhere(&#39;age&#39;, &#39;&gt;=&#39;, 18);

// [&#39;name&#39; =&gt; &#39;Diego&#39;, &#39;age&#39; =&gt; 23]
</code></pre><p>与 <a href="#method-where">where</a> 方法一样，你可以将一个参数传递给 <code>firstWhere</code> 方法。在这种情况下，<code>firstWhere</code> 方法将返回给定项目键值为「真」的第一个项目：</p><pre><code>$collection-&gt;firstWhere(&#39;age&#39;);

// [&#39;name&#39; =&gt; &#39;Linda&#39;, &#39;age&#39; =&gt; 14]
</code></pre><p><a name="method-flatmap"></a></p><h4 id="flatmap-collection-method" tabindex="-1"><a class="header-anchor" href="#flatmap-collection-method" aria-hidden="true">#</a> <code>flatMap()</code> {.collection-method}</h4><p><code>flatMap</code> 方法遍历集合并将每个值传递给给定的闭包。闭包可以自由修改项目并将其返回，从而形成一个新的修改项目集合。然后，数组被展平一层：</p><pre><code>$collection = collect([
    [&#39;name&#39; =&gt; &#39;Sally&#39;],
    [&#39;school&#39; =&gt; &#39;Arkansas&#39;],
    [&#39;age&#39; =&gt; 28]
]);

$flattened = $collection-&gt;flatMap(function (array $values) {
    return array_map(&#39;strtoupper&#39;, $values);
});

$flattened-&gt;all();

// [&#39;name&#39; =&gt; &#39;SALLY&#39;, &#39;school&#39; =&gt; &#39;ARKANSAS&#39;, &#39;age&#39; =&gt; &#39;28&#39;];
</code></pre><p><a name="method-flatten"></a></p><h4 id="flatten-collection-method" tabindex="-1"><a class="header-anchor" href="#flatten-collection-method" aria-hidden="true">#</a> <code>flatten()</code> {.collection-method}</h4><p><code>flatten</code> 方法将多维集合展平为一维：</p><pre><code>$collection = collect([
    &#39;name&#39; =&gt; &#39;taylor&#39;,
    &#39;languages&#39; =&gt; [
        &#39;php&#39;, &#39;javascript&#39;
    ]
]);

$flattened = $collection-&gt;flatten();

$flattened-&gt;all();

// [&#39;taylor&#39;, &#39;php&#39;, &#39;javascript&#39;];
</code></pre><p>如有必要，你可以向 <code>flatten</code> 方法传递一个「深度」参数：</p><pre><code>$collection = collect([
    &#39;Apple&#39; =&gt; [
        [
            &#39;name&#39; =&gt; &#39;iPhone 6S&#39;,
            &#39;brand&#39; =&gt; &#39;Apple&#39;
        ],
    ],
    &#39;Samsung&#39; =&gt; [
        [
            &#39;name&#39; =&gt; &#39;Galaxy S7&#39;,
            &#39;brand&#39; =&gt; &#39;Samsung&#39;
        ],
    ],
]);

$products = $collection-&gt;flatten(1);

$products-&gt;values()-&gt;all();

/*
    [
        [&#39;name&#39; =&gt; &#39;iPhone 6S&#39;, &#39;brand&#39; =&gt; &#39;Apple&#39;],
        [&#39;name&#39; =&gt; &#39;Galaxy S7&#39;, &#39;brand&#39; =&gt; &#39;Samsung&#39;],
    ]
*/
</code></pre><p>在此示例中，调用 <code>flatten</code> 而不提供深度也会使嵌套数组变平，从而导致 <code>[&#39;iPhone 6S&#39;, &#39;Apple&#39;, &#39;Galaxy S7&#39;, &#39;Samsung&#39;]</code>。提供深度允许你指定嵌套数组将被展平的级别数。</p><p><a name="method-flip"></a></p><h4 id="flip-collection-method" tabindex="-1"><a class="header-anchor" href="#flip-collection-method" aria-hidden="true">#</a> <code>flip()</code> {.collection-method}</h4><p><code>flip</code> 方法将集合的键与其对应的值交换：</p><pre><code>$collection = collect([&#39;name&#39; =&gt; &#39;taylor&#39;, &#39;framework&#39; =&gt; &#39;laravel&#39;]);

$flipped = $collection-&gt;flip();

$flipped-&gt;all();

// [&#39;taylor&#39; =&gt; &#39;name&#39;, &#39;laravel&#39; =&gt; &#39;framework&#39;]
</code></pre><p><a name="method-forget"></a></p><h4 id="forget-collection-method" tabindex="-1"><a class="header-anchor" href="#forget-collection-method" aria-hidden="true">#</a> <code>forget()</code> {.collection-method}</h4><p>该 <code>forget</code> 方法将通过指定的键来移除集合中对应的元素：</p><pre><code>$collection = collect([&#39;name&#39; =&gt; &#39;taylor&#39;, &#39;framework&#39; =&gt; &#39;laravel&#39;]);

$collection-&gt;forget(&#39;name&#39;);

$collection-&gt;all();

// [&#39;framework&#39; =&gt; &#39;laravel&#39;]
</code></pre><blockquote><p>**注意：**与大多数集合的方法不同的是， <code>forget</code> 不会返回修改后的新集合；它会直接修改原集合。</p></blockquote><p><a name="method-forpage"></a></p><h4 id="forpage-collection-method" tabindex="-1"><a class="header-anchor" href="#forpage-collection-method" aria-hidden="true">#</a> <code>forPage()</code> {.collection-method}</h4><p>该 <code>forPage</code> 方法返回一个含有指定页码数集合项的新集合。这个方法接受页码数作为其第一个参数，每页显示的项数作为其第二个参数：</p><pre><code>$collection = collect([1, 2, 3, 4, 5, 6, 7, 8, 9]);

$chunk = $collection-&gt;forPage(2, 3);

$chunk-&gt;all();

// [4, 5, 6]
</code></pre><p><a name="method-get"></a></p><h4 id="get-collection-method" tabindex="-1"><a class="header-anchor" href="#get-collection-method" aria-hidden="true">#</a> <code>get()</code> {.collection-method}</h4><p>该 <code>get</code> 方法返回指定键的集合项，如果该键在集合中不存在，则返回 null：</p><pre><code>$collection = collect([&#39;name&#39; =&gt; &#39;taylor&#39;, &#39;framework&#39; =&gt; &#39;laravel&#39;]);

$value = $collection-&gt;get(&#39;name&#39;);

// taylor
</code></pre><p>你可以任选一个默认值作为第二个参数传递：</p><pre><code>$collection = collect([&#39;name&#39; =&gt; &#39;taylor&#39;, &#39;framework&#39; =&gt; &#39;laravel&#39;]);

$value = $collection-&gt;get(&#39;age&#39;, 34);

// 34
</code></pre><p>你甚至可以将一个回调函数作为默认值传递。如果指定的键不存在，就会返回回调函数的结果：</p><pre><code>$collection-&gt;get(&#39;email&#39;, function () {
    return &#39;taylor@example.com&#39;;
});

// taylor@example.com
</code></pre><p><a name="method-groupby"></a></p><h4 id="groupby-collection-method" tabindex="-1"><a class="header-anchor" href="#groupby-collection-method" aria-hidden="true">#</a> <code>groupBy()</code> {.collection-method}</h4><p>该 <code>groupBy</code> 方法根据指定键对集合项进行分组：</p><pre><code>$collection = collect([
    [&#39;account_id&#39; =&gt; &#39;account-x10&#39;, &#39;product&#39; =&gt; &#39;Chair&#39;],
    [&#39;account_id&#39; =&gt; &#39;account-x10&#39;, &#39;product&#39; =&gt; &#39;Bookcase&#39;],
    [&#39;account_id&#39; =&gt; &#39;account-x11&#39;, &#39;product&#39; =&gt; &#39;Desk&#39;],
]);

$grouped = $collection-&gt;groupBy(&#39;account_id&#39;);

$grouped-&gt;all();

/*
    [
        &#39;account-x10&#39; =&gt; [
            [&#39;account_id&#39; =&gt; &#39;account-x10&#39;, &#39;product&#39; =&gt; &#39;Chair&#39;],
            [&#39;account_id&#39; =&gt; &#39;account-x10&#39;, &#39;product&#39; =&gt; &#39;Bookcase&#39;],
        ],
        &#39;account-x11&#39; =&gt; [
            [&#39;account_id&#39; =&gt; &#39;account-x11&#39;, &#39;product&#39; =&gt; &#39;Desk&#39;],
        ],
    ]
*/
</code></pre><p>你可以传递回调，而不是传递字符串 <code>key</code>。回调应返回你希望通过以下方式键入组的值：</p><pre><code>$grouped = $collection-&gt;groupBy(function (array $item, int $key) {
    return substr($item[&#39;account_id&#39;], -3);
});

$grouped-&gt;all();

/*
    [
        &#39;x10&#39; =&gt; [
            [&#39;account_id&#39; =&gt; &#39;account-x10&#39;, &#39;product&#39; =&gt; &#39;Chair&#39;],
            [&#39;account_id&#39; =&gt; &#39;account-x10&#39;, &#39;product&#39; =&gt; &#39;Bookcase&#39;],
        ],
        &#39;x11&#39; =&gt; [
            [&#39;account_id&#39; =&gt; &#39;account-x11&#39;, &#39;product&#39; =&gt; &#39;Desk&#39;],
        ],
    ]
*/
</code></pre><p>多个分组标准可以作为数组传递。每个数组元素将应用于多维数组中的相应级别：</p><pre><code>$data = new Collection([
    10 =&gt; [&#39;user&#39; =&gt; 1, &#39;skill&#39; =&gt; 1, &#39;roles&#39; =&gt; [&#39;Role_1&#39;, &#39;Role_3&#39;]],
    20 =&gt; [&#39;user&#39; =&gt; 2, &#39;skill&#39; =&gt; 1, &#39;roles&#39; =&gt; [&#39;Role_1&#39;, &#39;Role_2&#39;]],
    30 =&gt; [&#39;user&#39; =&gt; 3, &#39;skill&#39; =&gt; 2, &#39;roles&#39; =&gt; [&#39;Role_1&#39;]],
    40 =&gt; [&#39;user&#39; =&gt; 4, &#39;skill&#39; =&gt; 2, &#39;roles&#39; =&gt; [&#39;Role_2&#39;]],
]);

$result = $data-&gt;groupBy([&#39;skill&#39;, function (array $item) {
    return $item[&#39;roles&#39;];
}], preserveKeys: true);

/*
[
    1 =&gt; [
        &#39;Role_1&#39; =&gt; [
            10 =&gt; [&#39;user&#39; =&gt; 1, &#39;skill&#39; =&gt; 1, &#39;roles&#39; =&gt; [&#39;Role_1&#39;, &#39;Role_3&#39;]],
            20 =&gt; [&#39;user&#39; =&gt; 2, &#39;skill&#39; =&gt; 1, &#39;roles&#39; =&gt; [&#39;Role_1&#39;, &#39;Role_2&#39;]],
        ],
        &#39;Role_2&#39; =&gt; [
            20 =&gt; [&#39;user&#39; =&gt; 2, &#39;skill&#39; =&gt; 1, &#39;roles&#39; =&gt; [&#39;Role_1&#39;, &#39;Role_2&#39;]],
        ],
        &#39;Role_3&#39; =&gt; [
            10 =&gt; [&#39;user&#39; =&gt; 1, &#39;skill&#39; =&gt; 1, &#39;roles&#39; =&gt; [&#39;Role_1&#39;, &#39;Role_3&#39;]],
        ],
    ],
    2 =&gt; [
        &#39;Role_1&#39; =&gt; [
            30 =&gt; [&#39;user&#39; =&gt; 3, &#39;skill&#39; =&gt; 2, &#39;roles&#39; =&gt; [&#39;Role_1&#39;]],
        ],
        &#39;Role_2&#39; =&gt; [
            40 =&gt; [&#39;user&#39; =&gt; 4, &#39;skill&#39; =&gt; 2, &#39;roles&#39; =&gt; [&#39;Role_2&#39;]],
        ],
    ],
];
*/
</code></pre><p><a name="method-has"></a></p><h4 id="has-collection-method" tabindex="-1"><a class="header-anchor" href="#has-collection-method" aria-hidden="true">#</a> <code>has()</code> {.collection-method}</h4><p><code>has</code> 方法确定集合中是否存在给定键：</p><pre><code>$collection = collect([&#39;account_id&#39; =&gt; 1, &#39;product&#39; =&gt; &#39;Desk&#39;, &#39;amount&#39; =&gt; 5]);

$collection-&gt;has(&#39;product&#39;);

// true

$collection-&gt;has([&#39;product&#39;, &#39;amount&#39;]);

// true

$collection-&gt;has([&#39;amount&#39;, &#39;price&#39;]);

// false
</code></pre><p><a name="method-hasany"></a></p><h4 id="hasany-collection-method" tabindex="-1"><a class="header-anchor" href="#hasany-collection-method" aria-hidden="true">#</a> <code>hasAny()</code> {.collection-method}</h4><p><code>hasAny</code> 方法确定在集合中是否存在任何给定的键。</p><pre><code>$collection = collect([&#39;account_id&#39; =&gt; 1, &#39;product&#39; =&gt; &#39;Desk&#39;, &#39;amount&#39; =&gt; 5]);

$collection-&gt;hasAny([&#39;product&#39;, &#39;price&#39;]);

// true

$collection-&gt;hasAny([&#39;name&#39;, &#39;price&#39;]);

// false
</code></pre><p><a name="method-implode"></a></p><h4 id="implode-collection-method" tabindex="-1"><a class="header-anchor" href="#implode-collection-method" aria-hidden="true">#</a> <code>implode()</code> {.collection-method}</h4><p><code>implode</code> 方法连接集合中的项目。它的参数取决于集合中项目的类型。如果集合包含数组或对象，你应该传递你希望加入的属性的键，以及你希望放置在值之间的「胶水」字符串：</p><pre><code>$collection = collect([
    [&#39;account_id&#39; =&gt; 1, &#39;product&#39; =&gt; &#39;Desk&#39;],
    [&#39;account_id&#39; =&gt; 2, &#39;product&#39; =&gt; &#39;Chair&#39;],
]);

$collection-&gt;implode(&#39;product&#39;, &#39;, &#39;);

// Desk, Chair
</code></pre><p>如果集合包含简单的字符串或数值，则应将「胶水」作为唯一参数传递给该方法：</p><pre><code>collect([1, 2, 3, 4, 5])-&gt;implode(&#39;-&#39;);

// &#39;1-2-3-4-5&#39;
</code></pre><p>如果你想对被内部处理的值进行格式化，你可以给 <code>implode</code> 方法传递一个闭包。</p><pre><code>$collection-&gt;implode(function (array $item, int $key) {
    return strtoupper($item[&#39;product&#39;]);
}, &#39;, &#39;);

// DESK, CHAIR
</code></pre><p><a name="method-intersect"></a></p><h4 id="intersect-collection-method" tabindex="-1"><a class="header-anchor" href="#intersect-collection-method" aria-hidden="true">#</a> <code>intersect()</code> {.collection-method}</h4><p><code>intersect</code> 方法从原始集合中删除任何不存在于给定 <code>array</code> 或集合中的值。生成的集合将保留原始集合的键：</p><pre><code>$collection = collect([&#39;Desk&#39;, &#39;Sofa&#39;, &#39;Chair&#39;]);

$intersect = $collection-&gt;intersect([&#39;Desk&#39;, &#39;Chair&#39;, &#39;Bookcase&#39;]);

$intersect-&gt;all();

// [0 =&gt; &#39;Desk&#39;, 2 =&gt; &#39;Chair&#39;]
</code></pre><blockquote><p>技巧：使用 <a href="./eloquent-collections#method-intersect">Eloquent Collections</a> 时会修改此方法的行为。</p></blockquote><p><a name="method-intersectAssoc"></a></p><h4 id="intersectassoc-collection-method" tabindex="-1"><a class="header-anchor" href="#intersectassoc-collection-method" aria-hidden="true">#</a> <code>intersectAssoc()</code> {.collection-method}</h4><p><code>intersectAssoc</code> 方法将原始集合与另一个集合或<code>array</code>进行比较，返回所有给定集合中存在的键/值对:</p><pre><code>$collection = collect([
    &#39;color&#39; =&gt; &#39;red&#39;,
    &#39;size&#39; =&gt; &#39;M&#39;,
    &#39;material&#39; =&gt; &#39;cotton&#39;
]);

$intersect = $collection-&gt;intersectAssoc([
    &#39;color&#39; =&gt; &#39;blue&#39;,
    &#39;size&#39; =&gt; &#39;M&#39;,
    &#39;material&#39; =&gt; &#39;polyester&#39;
]);

$intersect-&gt;all();

// [&#39;size&#39; =&gt; &#39;M&#39;]
</code></pre><p><a name="method-intersectbykeys"></a></p><h4 id="intersectbykeys-collection-method" tabindex="-1"><a class="header-anchor" href="#intersectbykeys-collection-method" aria-hidden="true">#</a> <code>intersectByKeys()</code> {.collection-method}</h4><p><code>intersectByKeys</code> 方法删除了原始集合中不存在于给定的 <code>array</code> 或集合中的任何键和其相应的值。</p><pre><code>$collection = collect([
    &#39;serial&#39; =&gt; &#39;UX301&#39;, &#39;type&#39; =&gt; &#39;screen&#39;, &#39;year&#39; =&gt; 2009,
]);

$intersect = $collection-&gt;intersectByKeys([
    &#39;reference&#39; =&gt; &#39;UX404&#39;, &#39;type&#39; =&gt; &#39;tab&#39;, &#39;year&#39; =&gt; 2011,
]);

$intersect-&gt;all();

// [&#39;type&#39; =&gt; &#39;screen&#39;, &#39;year&#39; =&gt; 2009]
</code></pre><p><a name="method-isempty"></a></p><h4 id="isempty-collection-method" tabindex="-1"><a class="header-anchor" href="#isempty-collection-method" aria-hidden="true">#</a> <code>isEmpty()</code> {.collection-method}</h4><p>如果集合为空，<code>isEmpty</code> 方法返回 <code>true</code>；否则，返回 <code>false</code>：</p><pre><code>collect([])-&gt;isEmpty();

// true
</code></pre><p><a name="method-isnotempty"></a></p><h4 id="isnotempty-collection-method" tabindex="-1"><a class="header-anchor" href="#isnotempty-collection-method" aria-hidden="true">#</a> <code>isNotEmpty()</code> {.collection-method}</h4><p>如果集合不为空，<code>isNotEmpty</code> 方法返回 <code>true</code>；否则，返回 <code>false</code>：</p><pre><code>collect([])-&gt;isNotEmpty();

// false
</code></pre><p><a name="method-join"></a></p><h4 id="join-collection-method" tabindex="-1"><a class="header-anchor" href="#join-collection-method" aria-hidden="true">#</a> <code>join()</code> {.collection-method}</h4><p><code>join</code> 方法将集合的值与字符串连接起来。使用此方法的第二个参数，你还可以指定最终元素应如何附加到字符串：</p><pre><code>collect([&#39;a&#39;, &#39;b&#39;, &#39;c&#39;])-&gt;join(&#39;, &#39;); // &#39;a, b, c&#39;
collect([&#39;a&#39;, &#39;b&#39;, &#39;c&#39;])-&gt;join(&#39;, &#39;, &#39;, and &#39;); // &#39;a, b, and c&#39;
collect([&#39;a&#39;, &#39;b&#39;])-&gt;join(&#39;, &#39;, &#39; and &#39;); // &#39;a and b&#39;
collect([&#39;a&#39;])-&gt;join(&#39;, &#39;, &#39; and &#39;); // &#39;a&#39;
collect([])-&gt;join(&#39;, &#39;, &#39; and &#39;); // &#39;&#39;
</code></pre><p><a name="method-keyby"></a></p><h4 id="keyby-collection-method" tabindex="-1"><a class="header-anchor" href="#keyby-collection-method" aria-hidden="true">#</a> <code>keyBy()</code> {.collection-method}</h4><p><code>keyBy</code> 方法通过给定键对集合进行键控。如果多个项目具有相同的键，则只有最后一个会出现在新集合中：</p><pre><code>$collection = collect([
    [&#39;product_id&#39; =&gt; &#39;prod-100&#39;, &#39;name&#39; =&gt; &#39;Desk&#39;],
    [&#39;product_id&#39; =&gt; &#39;prod-200&#39;, &#39;name&#39; =&gt; &#39;Chair&#39;],
]);

$keyed = $collection-&gt;keyBy(&#39;product_id&#39;);

$keyed-&gt;all();

/*
    [
        &#39;prod-100&#39; =&gt; [&#39;product_id&#39; =&gt; &#39;prod-100&#39;, &#39;name&#39; =&gt; &#39;Desk&#39;],
        &#39;prod-200&#39; =&gt; [&#39;product_id&#39; =&gt; &#39;prod-200&#39;, &#39;name&#39; =&gt; &#39;Chair&#39;],
    ]
*/
</code></pre><p>你也可以将回调传递给该方法。回调应通过以下方式返回值以作为集合的键：</p><pre><code>$keyed = $collection-&gt;keyBy(function (array $item, int $key) {
    return strtoupper($item[&#39;product_id&#39;]);
});

$keyed-&gt;all();

/*
    [
        &#39;PROD-100&#39; =&gt; [&#39;product_id&#39; =&gt; &#39;prod-100&#39;, &#39;name&#39; =&gt; &#39;Desk&#39;],
        &#39;PROD-200&#39; =&gt; [&#39;product_id&#39; =&gt; &#39;prod-200&#39;, &#39;name&#39; =&gt; &#39;Chair&#39;],
    ]
*/
</code></pre><p><a name="method-keys"></a></p><h4 id="keys-collection-method" tabindex="-1"><a class="header-anchor" href="#keys-collection-method" aria-hidden="true">#</a> <code>keys()</code> {.collection-method}</h4><p><code>keys</code> 方法返回集合的所有键：</p><pre><code>$collection = collect([
    &#39;prod-100&#39; =&gt; [&#39;product_id&#39; =&gt; &#39;prod-100&#39;, &#39;name&#39; =&gt; &#39;Desk&#39;],
    &#39;prod-200&#39; =&gt; [&#39;product_id&#39; =&gt; &#39;prod-200&#39;, &#39;name&#39; =&gt; &#39;Chair&#39;],
]);

$keys = $collection-&gt;keys();

$keys-&gt;all();

// [&#39;prod-100&#39;, &#39;prod-200&#39;]
</code></pre><p><a name="method-last"></a></p><h4 id="last-collection-method" tabindex="-1"><a class="header-anchor" href="#last-collection-method" aria-hidden="true">#</a> <code>last()</code> {.collection-method}</h4><p><code>last</code> 方法返回集合中通过给定真值测试的最后一个元素：</p><pre><code>collect([1, 2, 3, 4])-&gt;last(function (int $value, int $key) {
    return $value &lt; 3;
});

// 2
</code></pre><p>你也可以调用不带参数的<code>last</code>方法来获取集合中的最后一个元素。如果集合为空，则返回 <code>null</code>：</p><pre><code>collect([1, 2, 3, 4])-&gt;last();

// 4
</code></pre><p><a name="method-lazy"></a></p><h4 id="lazy-collection-method" tabindex="-1"><a class="header-anchor" href="#lazy-collection-method" aria-hidden="true">#</a> <code>lazy()</code> {.collection-method}</h4><p><code>lazy</code> 方法从底层的项目数组中返回一个新的 <a href="#lazy-collections"><code>LazyCollection</code></a> 实例。</p><pre><code>$lazyCollection = collect([1, 2, 3, 4])-&gt;lazy();

get_class($lazyCollection);

// Illuminate\\Support\\LazyCollection

$lazyCollection-&gt;all();

// [1, 2, 3, 4]
</code></pre><p>当你需要对一个包含许多项目的巨大 <code>Collection</code> 进行转换时，这一点特别有用。</p><pre><code>$count = $hugeCollection
    -&gt;lazy()
    -&gt;where(&#39;country&#39;, &#39;FR&#39;)
    -&gt;where(&#39;balance&#39;, &#39;&gt;&#39;, &#39;100&#39;)
    -&gt;count();
</code></pre><p>通过将集合转换为 <code>LazyCollection</code>，我们避免了分配大量的额外内存。虽然原始集合仍然在内存中保留 <em>它的</em> 值，但后续的过滤器不会。因此，在过滤集合的结果时，几乎没有额外的内存被分配。</p><p><a name="method-macro"></a></p><h4 id="macro-collection-method" tabindex="-1"><a class="header-anchor" href="#macro-collection-method" aria-hidden="true">#</a> <code>macro()</code> {.collection-method}</h4><p>静态<code>macro()</code>方法允许你在运行时向「集合」类添加方法。有关详细信息，请参阅有关 <a href="#extending-collections">扩展集合</a> 的文档。</p><p><a name="method-make"></a></p><h4 id="make-collection-method" tabindex="-1"><a class="header-anchor" href="#make-collection-method" aria-hidden="true">#</a> <code>make()</code> {.collection-method}</h4><p>静态 <code>make</code> 方法可以创建一个新的集合实例。请参照 <a href="#creating-collections">创建集合</a> 部分。</p><p><a name="method-map"></a></p><h4 id="map-collection-method" tabindex="-1"><a class="header-anchor" href="#map-collection-method" aria-hidden="true">#</a> <code>map()</code> {.collection-method}</h4><p>静态 <code>make</code> 方法可以创建一个新的集合实例。请参照 <a href="#creating-collections">创建集合</a> 部分。</p><pre><code>$collection = collect([1, 2, 3, 4, 5]);

$multiplied = $collection-&gt;map(function (int $item, int $key) {
    return $item * 2;
});

$multiplied-&gt;all();

// [2, 4, 6, 8, 10]
</code></pre><blockquote><p>**注意：**与其他大多数集合方法一样， <code>map</code> 会返回一个新的集合实例；它不会修改原集合。如果你想修改原集合，请使用 <a href="#method-transform"><code>transform</code></a> 方法。</p></blockquote><p><a name="method-mapinto"></a></p><h4 id="mapinto-collection-method" tabindex="-1"><a class="header-anchor" href="#mapinto-collection-method" aria-hidden="true">#</a> <code>mapInto()</code> {.collection-method}</h4><p>该 <code>mapInto()</code> 方法可以迭代集合，通过将值传递给构造函数来创建给定类的新实例：</p><pre><code>class Currency
{
    /**
     * Create a new currency instance.
     */
    function __construct(
        public string $code
    ) {}
}

$collection = collect([&#39;USD&#39;, &#39;EUR&#39;, &#39;GBP&#39;]);

$currencies = $collection-&gt;mapInto(Currency::class);

$currencies-&gt;all();

// [Currency(&#39;USD&#39;), Currency(&#39;EUR&#39;), Currency(&#39;GBP&#39;)]
</code></pre><p><a name="method-mapspread"></a></p><h4 id="mapspread-collection-method" tabindex="-1"><a class="header-anchor" href="#mapspread-collection-method" aria-hidden="true">#</a> <code>mapSpread()</code> {.collection-method}</h4><p>该 <code>mapSpread</code> 方法可以迭代集合，将每个嵌套项值给指定的回调函数。该回调函数可以自由修改该集合项并返回，从而生成被修改过集合项的新集合：</p><pre><code>$collection = collect([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);

$chunks = $collection-&gt;chunk(2);

$sequence = $chunks-&gt;mapSpread(function (int $even, int $odd) {
    return $even + $odd;
});

$sequence-&gt;all();

// [1, 5, 9, 13, 17]
</code></pre><p><a name="method-maptogroups"></a></p><h4 id="maptogroups-collection-method" tabindex="-1"><a class="header-anchor" href="#maptogroups-collection-method" aria-hidden="true">#</a> <code>mapToGroups()</code> {.collection-method}</h4><p>该 <code>mapToGroups</code> 方法通过给定的回调函数对集合项进行分组。该回调函数应该返回一个包含单个键 / 值对的关联数组，从而生成一个分组值的新集合：</p><pre><code>$collection = collect([
    [
        &#39;name&#39; =&gt; &#39;John Doe&#39;,
        &#39;department&#39; =&gt; &#39;Sales&#39;,
    ],
    [
        &#39;name&#39; =&gt; &#39;Jane Doe&#39;,
        &#39;department&#39; =&gt; &#39;Sales&#39;,
    ],
    [
        &#39;name&#39; =&gt; &#39;Johnny Doe&#39;,
        &#39;department&#39; =&gt; &#39;Marketing&#39;,
    ]
]);

$grouped = $collection-&gt;mapToGroups(function (array $item, int $key) {
    return [$item[&#39;department&#39;] =&gt; $item[&#39;name&#39;]];
});

$grouped-&gt;all();

/*
    [
        &#39;Sales&#39; =&gt; [&#39;John Doe&#39;, &#39;Jane Doe&#39;],
        &#39;Marketing&#39; =&gt; [&#39;Johnny Doe&#39;],
    ]
*/

$grouped-&gt;get(&#39;Sales&#39;)-&gt;all();

// [&#39;John Doe&#39;, &#39;Jane Doe&#39;]
</code></pre><p><a name="method-mapwithkeys"></a></p><h4 id="mapwithkeys-collection-method" tabindex="-1"><a class="header-anchor" href="#mapwithkeys-collection-method" aria-hidden="true">#</a> <code>mapWithKeys()</code> {.collection-method}</h4><p><code>mapWithKeys</code> 方法遍历集合并将每个值传递给给定的回调。回调应返回包含单个键/值对的关联数组：</p><pre><code>$collection = collect([
    [
        &#39;name&#39; =&gt; &#39;John&#39;,
        &#39;department&#39; =&gt; &#39;Sales&#39;,
        &#39;email&#39; =&gt; &#39;john@example.com&#39;,
    ],
    [
        &#39;name&#39; =&gt; &#39;Jane&#39;,
        &#39;department&#39; =&gt; &#39;Marketing&#39;,
        &#39;email&#39; =&gt; &#39;jane@example.com&#39;,
    ]
]);

$keyed = $collection-&gt;mapWithKeys(function (array $item, int $key) {
    return [$item[&#39;email&#39;] =&gt; $item[&#39;name&#39;]];
});

$keyed-&gt;all();

/*
    [
        &#39;john@example.com&#39; =&gt; &#39;John&#39;,
        &#39;jane@example.com&#39; =&gt; &#39;Jane&#39;,
    ]
*/
</code></pre><p><a name="method-max"></a></p><h4 id="max-collection-method" tabindex="-1"><a class="header-anchor" href="#max-collection-method" aria-hidden="true">#</a> <code>max()</code> {.collection-method}</h4><p><code>max</code> 方法返回给定键的最大值：</p><pre><code>$max = collect([
    [&#39;foo&#39; =&gt; 10],
    [&#39;foo&#39; =&gt; 20]
])-&gt;max(&#39;foo&#39;);

// 20

$max = collect([1, 2, 3, 4, 5])-&gt;max();

// 5
</code></pre><p><a name="method-median"></a></p><h4 id="median-collection-method" tabindex="-1"><a class="header-anchor" href="#median-collection-method" aria-hidden="true">#</a> <code>median()</code> {.collection-method}</h4>`,286),_=e("code",null,"median",-1),C={href:"https://en.wikipedia.org/wiki/Median",target:"_blank",rel:"noopener noreferrer"},q=c(`<pre><code>$median = collect([
    [&#39;foo&#39; =&gt; 10],
    [&#39;foo&#39; =&gt; 10],
    [&#39;foo&#39; =&gt; 20],
    [&#39;foo&#39; =&gt; 40]
])-&gt;median(&#39;foo&#39;);

// 15

$median = collect([1, 1, 2, 4])-&gt;median();

// 1.5
</code></pre><p><a name="method-merge"></a></p><h4 id="merge-collection-method" tabindex="-1"><a class="header-anchor" href="#merge-collection-method" aria-hidden="true">#</a> <code>merge()</code> {.collection-method}</h4><p><code>merge</code> 方法将给定的数组或集合与原始集合合并。如果给定项目中的字符串键与原始集合中的字符串键匹配，则给定项目的值将覆盖原始集合中的值：</p><pre><code>$collection = collect([&#39;product_id&#39; =&gt; 1, &#39;price&#39; =&gt; 100]);

$merged = $collection-&gt;merge([&#39;price&#39; =&gt; 200, &#39;discount&#39; =&gt; false]);

$merged-&gt;all();

// [&#39;product_id&#39; =&gt; 1, &#39;price&#39; =&gt; 200, &#39;discount&#39; =&gt; false]
</code></pre><p>如果给定项目的键是数字，则值将附加到集合的末尾：</p><pre><code>$collection = collect([&#39;Desk&#39;, &#39;Chair&#39;]);

$merged = $collection-&gt;merge([&#39;Bookcase&#39;, &#39;Door&#39;]);

$merged-&gt;all();

// [&#39;Desk&#39;, &#39;Chair&#39;, &#39;Bookcase&#39;, &#39;Door&#39;]
</code></pre><p><a name="method-mergerecursive"></a></p><h4 id="mergerecursive-collection-method" tabindex="-1"><a class="header-anchor" href="#mergerecursive-collection-method" aria-hidden="true">#</a> <code>mergeRecursive()</code> {.collection-method}</h4><p><code>mergeRecursive</code> 方法将给定的数组或集合递归地与原始集合合并。如果给定项目中的字符串键与原始集合中的字符串键匹配，则这些键的值将合并到一个数组中，这是递归完成的：</p><pre><code>$collection = collect([&#39;product_id&#39; =&gt; 1, &#39;price&#39; =&gt; 100]);

$merged = $collection-&gt;mergeRecursive([
    &#39;product_id&#39; =&gt; 2,
    &#39;price&#39; =&gt; 200,
    &#39;discount&#39; =&gt; false
]);

$merged-&gt;all();

// [&#39;product_id&#39; =&gt; [1, 2], &#39;price&#39; =&gt; [100, 200], &#39;discount&#39; =&gt; false]
</code></pre><p><a name="method-min"></a></p><h4 id="min-collection-method" tabindex="-1"><a class="header-anchor" href="#min-collection-method" aria-hidden="true">#</a> <code>min()</code> {.collection-method}</h4><p><code>min</code> 方法返回给定键的最小值：</p><pre><code>$min = collect([[&#39;foo&#39; =&gt; 10], [&#39;foo&#39; =&gt; 20]])-&gt;min(&#39;foo&#39;);

// 10

$min = collect([1, 2, 3, 4, 5])-&gt;min();

// 1
</code></pre><p><a name="method-mode"></a></p><h4 id="mode-collection-method" tabindex="-1"><a class="header-anchor" href="#mode-collection-method" aria-hidden="true">#</a> <code>mode()</code> {.collection-method}</h4>`,17),D=e("code",null,"mode",-1),B={href:"https://en.wikipedia.org/wiki/Mode_(statistics)",target:"_blank",rel:"noopener noreferrer"},I=c(`<pre><code>$mode = collect([
    [&#39;foo&#39; =&gt; 10],
    [&#39;foo&#39; =&gt; 10],
    [&#39;foo&#39; =&gt; 20],
    [&#39;foo&#39; =&gt; 40]
])-&gt;mode(&#39;foo&#39;);

// [10]

$mode = collect([1, 1, 2, 4])-&gt;mode();

// [1]

$mode = collect([1, 1, 2, 2])-&gt;mode();

// [1, 2]
</code></pre><p><a name="method-nth"></a></p><h4 id="nth-collection-method" tabindex="-1"><a class="header-anchor" href="#nth-collection-method" aria-hidden="true">#</a> <code>nth()</code> {.collection-method}</h4><p><code>nth</code> 方法创建一个由每个第 n 个元素组成的新集合：</p><pre><code>$collection = collect([&#39;a&#39;, &#39;b&#39;, &#39;c&#39;, &#39;d&#39;, &#39;e&#39;, &#39;f&#39;]);

$collection-&gt;nth(4);

// [&#39;a&#39;, &#39;e&#39;]
</code></pre><p>你可以选择将起始偏移量作为第二个参数传递：</p><pre><code>$collection-&gt;nth(4, 1);

// [&#39;b&#39;, &#39;f&#39;]
</code></pre><p><a name="method-only"></a></p><h4 id="only-collection-method" tabindex="-1"><a class="header-anchor" href="#only-collection-method" aria-hidden="true">#</a> <code>only()</code> {.collection-method}</h4><p><code>only</code> 方法返回集合中具有指定键的项目：</p><pre><code>$collection = collect([
    &#39;product_id&#39; =&gt; 1,
    &#39;name&#39; =&gt; &#39;Desk&#39;,
    &#39;price&#39; =&gt; 100,
    &#39;discount&#39; =&gt; false
]);

$filtered = $collection-&gt;only([&#39;product_id&#39;, &#39;name&#39;]);

$filtered-&gt;all();

// [&#39;product_id&#39; =&gt; 1, &#39;name&#39; =&gt; &#39;Desk&#39;]
</code></pre><p>关于 <code>only</code> 的反义词，见<a href="#method-except">except</a> 方法。</p>`,12),S={href:"/docs/laravel/9.x/eloquent-collections#method-only",target:"_blank",rel:"noopener noreferrer"},A=e("p",null,[e("a",{name:"method-pad"})],-1),E=e("h4",{id:"pad-collection-method",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#pad-collection-method","aria-hidden":"true"},"#"),o(),e("code",null,"pad()"),o(" {.collection-method}")],-1),J=e("code",null,"pad",-1),N={href:"https://secure.php.net/manual/en/function.array-pad.php",target:"_blank",rel:"noopener noreferrer"},z=c(`<p>要向左填充，你应该指定一个负尺寸。如果给定大小的绝对值小于或等于数组的长度，则不会发生填充：</p><pre><code>$collection = collect([&#39;A&#39;, &#39;B&#39;, &#39;C&#39;]);

$filtered = $collection-&gt;pad(5, 0);

$filtered-&gt;all();

// [&#39;A&#39;, &#39;B&#39;, &#39;C&#39;, 0, 0]

$filtered = $collection-&gt;pad(-5, 0);

$filtered-&gt;all();

// [0, 0, &#39;A&#39;, &#39;B&#39;, &#39;C&#39;]
</code></pre><p><a name="method-partition"></a></p><h4 id="partition-collection-method" tabindex="-1"><a class="header-anchor" href="#partition-collection-method" aria-hidden="true">#</a> <code>partition()</code> {.collection-method}</h4><p>该 <code>partition</code> 方法可以与 PHP 数组解构相结合，以将通过给定真值测试的元素与未通过的元素分开：</p><pre><code>$collection = collect([1, 2, 3, 4, 5, 6]);

[$underThree, $equalOrAboveThree] = $collection-&gt;partition(function (int $i) {
    return $i &lt; 3;
});

$underThree-&gt;all();

// [1, 2]

$equalOrAboveThree-&gt;all();

// [3, 4, 5, 6]
</code></pre><p><a name="method-pipe"></a></p><h4 id="pipe-collection-method" tabindex="-1"><a class="header-anchor" href="#pipe-collection-method" aria-hidden="true">#</a> <code>pipe()</code> {.collection-method}</h4><p>该 <code>pipe</code> 可以把集合放到回调参数中并返回回调的结果：</p><pre><code>$collection = collect([1, 2, 3]);

$piped = $collection-&gt;pipe(function (Collection $collection) {
    return $collection-&gt;sum();
});

// 6
</code></pre><p><a name="method-pipeinto"></a></p><h4 id="pipeinto-collection-method" tabindex="-1"><a class="header-anchor" href="#pipeinto-collection-method" aria-hidden="true">#</a> <code>pipeInto()</code> {.collection-method}</h4><p>该 <code>pipeInto</code> 方法创建一个给定类的新实例，并将集合传递给构造函数：</p><pre><code>class ResourceCollection
{
    /**
     * Create a new ResourceCollection instance.
     */
    public function __construct(
      public Collection $collection,
    ) {}
}

$collection = collect([1, 2, 3]);

$resource = $collection-&gt;pipeInto(ResourceCollection::class);

$resource-&gt;collection-&gt;all();

// [1, 2, 3]
</code></pre><p><a name="method-pipethrough"></a></p><h4 id="pipethrough-collection-method" tabindex="-1"><a class="header-anchor" href="#pipethrough-collection-method" aria-hidden="true">#</a> <code>pipeThrough()</code> {.collection-method}</h4><p>该 <code>pipeThrough</code> 方法将集合传递给给定的闭包数组并返回执行的闭包的结果：</p><pre><code>use Illuminate\\Support\\Collection;

$collection = collect([1, 2, 3]);

$result = $collection-&gt;pipeThrough([
    function (Collection $collection) {
        return $collection-&gt;merge([4, 5]);
    },
    function (Collection $collection) {
        return $collection-&gt;sum();
    },
]);

// 15
</code></pre><p><a name="method-pluck"></a></p><h4 id="pluck-collection-method" tabindex="-1"><a class="header-anchor" href="#pluck-collection-method" aria-hidden="true">#</a> <code>pluck()</code> {.collection-method}</h4><p>该 <code>pluck</code> 可以获取集合中指定键对应的所有值：</p><pre><code>$collection = collect([
    [&#39;product_id&#39; =&gt; &#39;prod-100&#39;, &#39;name&#39; =&gt; &#39;Desk&#39;],
    [&#39;product_id&#39; =&gt; &#39;prod-200&#39;, &#39;name&#39; =&gt; &#39;Chair&#39;],
]);

$plucked = $collection-&gt;pluck(&#39;name&#39;);

$plucked-&gt;all();

// [&#39;Desk&#39;, &#39;Chair&#39;]
</code></pre><p>你也可以通过传入第二个参数来指定生成集合的 key（键）：</p><pre><code>$plucked = $collection-&gt;pluck(&#39;name&#39;, &#39;product_id&#39;);

$plucked-&gt;all();

// [&#39;prod-100&#39; =&gt; &#39;Desk&#39;, &#39;prod-200&#39; =&gt; &#39;Chair&#39;]
</code></pre><p>该 <code>pluck</code> 也支持利用「.」标记的方法取出多维数组的键值：</p><pre><code>$collection = collect([
    [
        &#39;name&#39; =&gt; &#39;Laracon&#39;,
        &#39;speakers&#39; =&gt; [
            &#39;first_day&#39; =&gt; [&#39;Rosa&#39;, &#39;Judith&#39;],
        ],
    ],
    [
        &#39;name&#39; =&gt; &#39;VueConf&#39;,
        &#39;speakers&#39; =&gt; [
            &#39;first_day&#39; =&gt; [&#39;Abigail&#39;, &#39;Joey&#39;],
        ],
    ],
]);

$plucked = $collection-&gt;pluck(&#39;speakers.first_day&#39;);

$plucked-&gt;all();

// [[&#39;Rosa&#39;, &#39;Judith&#39;], [&#39;Abigail&#39;, &#39;Joey&#39;]]
</code></pre><p>如果存在重复键，则将最后一个匹配元素插入到 plucked 集合中：</p><pre><code>$collection = collect([
    [&#39;brand&#39; =&gt; &#39;Tesla&#39;,  &#39;color&#39; =&gt; &#39;red&#39;],
    [&#39;brand&#39; =&gt; &#39;Pagani&#39;, &#39;color&#39; =&gt; &#39;white&#39;],
    [&#39;brand&#39; =&gt; &#39;Tesla&#39;,  &#39;color&#39; =&gt; &#39;black&#39;],
    [&#39;brand&#39; =&gt; &#39;Pagani&#39;, &#39;color&#39; =&gt; &#39;orange&#39;],
]);

$plucked = $collection-&gt;pluck(&#39;color&#39;, &#39;brand&#39;);

$plucked-&gt;all();

// [&#39;Tesla&#39; =&gt; &#39;black&#39;, &#39;Pagani&#39; =&gt; &#39;orange&#39;]
</code></pre><p><a name="method-pop"></a></p><h4 id="pop-collection-method" tabindex="-1"><a class="header-anchor" href="#pop-collection-method" aria-hidden="true">#</a> <code>pop()</code> {.collection-method}</h4><p><code>pop</code> 方法删除并返回集合中的最后一项：</p><pre><code>$collection = collect([1, 2, 3, 4, 5]);

$collection-&gt;pop();

// 5

$collection-&gt;all();

// [1, 2, 3, 4]
</code></pre><p>你可以将整数传递给 <code>pop</code> 方法以从集合末尾删除并返回多个项目：</p><pre><code>$collection = collect([1, 2, 3, 4, 5]);

$collection-&gt;pop(3);

// collect([5, 4, 3])

$collection-&gt;all();

// [1, 2]
</code></pre><p><a name="method-prepend"></a></p><h4 id="prepend-collection-method" tabindex="-1"><a class="header-anchor" href="#prepend-collection-method" aria-hidden="true">#</a> <code>prepend()</code> {.collection-method}</h4><p><code>prepend</code> 方法将一个项目添加到集合的开头：</p><pre><code>$collection = collect([1, 2, 3, 4, 5]);

$collection-&gt;prepend(0);

$collection-&gt;all();

// [0, 1, 2, 3, 4, 5]
</code></pre><p>你还可以传递第二个参数来指定前置项的键：</p><pre><code>$collection = collect([&#39;one&#39; =&gt; 1, &#39;two&#39; =&gt; 2]);

$collection-&gt;prepend(0, &#39;zero&#39;);

$collection-&gt;all();

// [&#39;zero&#39; =&gt; 0, &#39;one&#39; =&gt; 1, &#39;two&#39; =&gt; 2]
</code></pre><p><a name="method-pull"></a></p><h4 id="pull-collection-method" tabindex="-1"><a class="header-anchor" href="#pull-collection-method" aria-hidden="true">#</a> <code>pull()</code> {.collection-method}</h4><p><code>pull</code> 方法通过它的键从集合中移除并返回一个项目：</p><pre><code>$collection = collect([&#39;product_id&#39; =&gt; &#39;prod-100&#39;, &#39;name&#39; =&gt; &#39;Desk&#39;]);

$collection-&gt;pull(&#39;name&#39;);

// &#39;Desk&#39;

$collection-&gt;all();

// [&#39;product_id&#39; =&gt; &#39;prod-100&#39;]
</code></pre><p><a name="method-push"></a></p><h4 id="push-collection-method" tabindex="-1"><a class="header-anchor" href="#push-collection-method" aria-hidden="true">#</a> <code>push()</code> {.collection-method}</h4><p><code>push</code> 方法将一个项目附加到集合的末尾：</p><pre><code>$collection = collect([1, 2, 3, 4]);

$collection-&gt;push(5);

$collection-&gt;all();

// [1, 2, 3, 4, 5]
</code></pre><p><a name="method-put"></a></p><h4 id="put-collection-method" tabindex="-1"><a class="header-anchor" href="#put-collection-method" aria-hidden="true">#</a> <code>put()</code> {.collection-method}</h4><p><code>put</code> 方法在集合中设置给定的键和值：</p><pre><code>$collection = collect([&#39;product_id&#39; =&gt; 1, &#39;name&#39; =&gt; &#39;Desk&#39;]);

$collection-&gt;put(&#39;price&#39;, 100);

$collection-&gt;all();

// [&#39;product_id&#39; =&gt; 1, &#39;name&#39; =&gt; &#39;Desk&#39;, &#39;price&#39; =&gt; 100]
</code></pre><p><a name="method-random"></a></p><h4 id="random-collection-method" tabindex="-1"><a class="header-anchor" href="#random-collection-method" aria-hidden="true">#</a> <code>random()</code> {.collection-method}</h4><p><code>random</code> 方法从集合中返回一个随机项：</p><pre><code>$collection = collect([1, 2, 3, 4, 5]);

$collection-&gt;random();

// 4 - (retrieved randomly)
</code></pre><p>你可以将一个整数传递给 <code>random</code>，以指定要随机检索的项目数。当明确传递你希望接收的项目数时，始终返回项目集合：</p><pre><code>$random = $collection-&gt;random(3);

$random-&gt;all();

// [2, 4, 5] - (retrieved randomly)
</code></pre><p>如果集合实例的项目少于请求的项目，则 <code>random</code> 方法将抛出 <code>InvalidArgumentException</code>。</p><p><code>random</code> 方法也接受一个闭包，它将接收当前集合实例。</p><pre><code>use Illuminate\\Support\\Collection;

$random = $collection-&gt;random(fn (Collection $items) =&gt; min(10, count($items)));

$random-&gt;all();

// [1, 2, 3, 4, 5] - (retrieved randomly)
</code></pre><p><a name="method-range"></a></p><h4 id="range-collection-method" tabindex="-1"><a class="header-anchor" href="#range-collection-method" aria-hidden="true">#</a> <code>range()</code> {.collection-method}</h4><p><code>range</code> 方法返回一个包含指定范围之间整数的集合：</p><pre><code>$collection = collect()-&gt;range(3, 6);

$collection-&gt;all();

// [3, 4, 5, 6]
</code></pre><p><a name="method-reduce"></a></p><h4 id="reduce-collection-method" tabindex="-1"><a class="header-anchor" href="#reduce-collection-method" aria-hidden="true">#</a> <code>reduce()</code> {.collection-method}</h4><p><code>reduce</code> 方法将集合减少为单个值，将每次迭代的结果传递给后续迭代：</p><pre><code>$collection = collect([1, 2, 3]);

$total = $collection-&gt;reduce(function (int $carry, int $item) {
    return $carry + $item;
});

// 6
</code></pre><p><code>$carry</code> 在第一次迭代时的值为 <code>null</code>；但是，你可以通过将第二个参数传递给 <code>reduce</code> 来指定其初始值：</p><pre><code>$collection-&gt;reduce(function (int $carry, int $item) {
    return $carry + $item;
}, 4);

// 10
</code></pre><p><code>reduce</code> 方法还将关联集合中的数组键传递给给定的回调：</p><pre><code>$collection = collect([
    &#39;usd&#39; =&gt; 1400,
    &#39;gbp&#39; =&gt; 1200,
    &#39;eur&#39; =&gt; 1000,
]);

$ratio = [
    &#39;usd&#39; =&gt; 1,
    &#39;gbp&#39; =&gt; 1.37,
    &#39;eur&#39; =&gt; 1.22,
];

$collection-&gt;reduce(function (int $carry, int $value, int $key) use ($ratio) {
    return $carry + ($value * $ratio[$key]);
});

// 4264
</code></pre><p><a name="method-reduce-spread"></a></p><h4 id="reducespread-collection-method" tabindex="-1"><a class="header-anchor" href="#reducespread-collection-method" aria-hidden="true">#</a> <code>reduceSpread()</code> {.collection-method}</h4><p><code>reduceSpread</code> 方法将集合缩减为一个值数组，将每次迭代的结果传递给后续迭代。此方法类似于 <code>reduce</code> 方法；但是，它可以接受多个初始值：</p><pre><code>[$creditsRemaining, $batch] = Image::where(&#39;status&#39;, &#39;unprocessed&#39;)
    -&gt;get()
    -&gt;reduceSpread(function (int $creditsRemaining, Collection $batch, Image $image) {
        if ($creditsRemaining &gt;= $image-&gt;creditsRequired()) {
            $batch-&gt;push($image);

            $creditsRemaining -= $image-&gt;creditsRequired();
        }

        return [$creditsRemaining, $batch];
    }, $creditsAvailable, collect());
</code></pre><p><a name="method-reject"></a></p><h4 id="reject-collection-method" tabindex="-1"><a class="header-anchor" href="#reject-collection-method" aria-hidden="true">#</a> <code>reject()</code> {.collection-method}</h4><p><code>reject</code> 方法使用给定的闭包过滤集合。如果应从结果集合中删除项目，则闭包应返回 <code>true</code>：</p><pre><code>$collection = collect([1, 2, 3, 4]);

$filtered = $collection-&gt;reject(function (int $value, int $key) {
    return $value &gt; 2;
});

$filtered-&gt;all();

// [1, 2]
</code></pre><p>对于 <code>reject</code> 方法的逆操作，请参见 <a href="#method-filter"><code>filter</code></a> 方法。</p><p><a name="method-replace"></a></p><h4 id="replace-collection-method" tabindex="-1"><a class="header-anchor" href="#replace-collection-method" aria-hidden="true">#</a> <code>replace()</code> {.collection-method}</h4><pre><code>$collection = collect([&#39;Taylor&#39;, &#39;Abigail&#39;, &#39;James&#39;]);

$replaced = $collection-&gt;replace([1 =&gt; &#39;Victoria&#39;, 3 =&gt; &#39;Finn&#39;]);

$replaced-&gt;all();

// [&#39;Taylor&#39;, &#39;Victoria&#39;, &#39;James&#39;, &#39;Finn&#39;]
</code></pre><p><a name="method-replacerecursive"></a></p><h4 id="replacerecursive-collection-method" tabindex="-1"><a class="header-anchor" href="#replacerecursive-collection-method" aria-hidden="true">#</a> <code>replaceRecursive()</code> {.collection-method}</h4><p>此方法的工作方式类似于 <code>replace</code>，但它会重复出现在数组中并对内部值应用相同的替换过程：</p><pre><code>$collection = collect([
    &#39;Taylor&#39;,
    &#39;Abigail&#39;,
    [
        &#39;James&#39;,
        &#39;Victoria&#39;,
        &#39;Finn&#39;
    ]
]);

$replaced = $collection-&gt;replaceRecursive([
    &#39;Charlie&#39;,
    2 =&gt; [1 =&gt; &#39;King&#39;]
]);

$replaced-&gt;all();

// [&#39;Charlie&#39;, &#39;Abigail&#39;, [&#39;James&#39;, &#39;King&#39;, &#39;Finn&#39;]]
</code></pre><p><a name="method-reverse"></a></p><h4 id="reverse-collection-method" tabindex="-1"><a class="header-anchor" href="#reverse-collection-method" aria-hidden="true">#</a> <code>reverse()</code> {.collection-method}</h4><p><code>reverse</code> 方法反转集合项的顺序，保留原始键：</p><pre><code>$collection = collect([&#39;a&#39;, &#39;b&#39;, &#39;c&#39;, &#39;d&#39;, &#39;e&#39;]);

$reversed = $collection-&gt;reverse();

$reversed-&gt;all();

/*
    [
        4 =&gt; &#39;e&#39;,
        3 =&gt; &#39;d&#39;,
        2 =&gt; &#39;c&#39;,
        1 =&gt; &#39;b&#39;,
        0 =&gt; &#39;a&#39;,
    ]
*/
</code></pre><p><a name="method-search"></a></p><h4 id="search-collection-method" tabindex="-1"><a class="header-anchor" href="#search-collection-method" aria-hidden="true">#</a> <code>search()</code> {.collection-method}</h4><p><code>search</code> 方法在集合中搜索给定值，如果找到则返回其键。如果未找到该项目，则返回 <code>false</code>：</p><pre><code>$collection = collect([2, 4, 6, 8]);

$collection-&gt;search(4);

// 1
</code></pre><p>搜索是使用「松散」比较完成的，这意味着具有整数值的字符串将被视为等于具有相同值的整数。要使用「严格」比较，请将 <code>true</code> 作为第二个参数传递给方法：</p><pre><code>collect([2, 4, 6, 8])-&gt;search(&#39;4&#39;, $strict = true);

// false
</code></pre><p>或者，你可以提供自己的闭包来搜索通过给定真值测试的第一个项目：</p><pre><code>collect([2, 4, 6, 8])-&gt;search(function (int $item, int $key) {
    return $item &gt; 5;
});

// 2
</code></pre><p><a name="method-shift"></a></p><h4 id="shift-collection-method" tabindex="-1"><a class="header-anchor" href="#shift-collection-method" aria-hidden="true">#</a> <code>shift()</code> {.collection-method}</h4><p><code>shift</code> 方法从集合中移除并返回第一项：</p><pre><code>$collection = collect([1, 2, 3, 4, 5]);

$collection-&gt;shift();

// 1

$collection-&gt;all();

// [2, 3, 4, 5]
</code></pre><p>你可以将整数传递给 <code>shift</code> 方法以从集合的开头删除并返回多个项目：</p><pre><code>$collection = collect([1, 2, 3, 4, 5]);

$collection-&gt;shift(3);

// collect([1, 2, 3])

$collection-&gt;all();

// [4, 5]
</code></pre><p><a name="method-shuffle"></a></p><h4 id="shuffle-collection-method" tabindex="-1"><a class="header-anchor" href="#shuffle-collection-method" aria-hidden="true">#</a> <code>shuffle()</code> {.collection-method}</h4><p><code>shuffle</code> 方法随机打乱集合中的项目：</p><pre><code>$collection = collect([1, 2, 3, 4, 5]);

$shuffled = $collection-&gt;shuffle();

$shuffled-&gt;all();

// [3, 2, 5, 1, 4] - (generated randomly)
</code></pre><p><a name="method-skip"></a></p><h4 id="skip-collection-method" tabindex="-1"><a class="header-anchor" href="#skip-collection-method" aria-hidden="true">#</a> <code>skip()</code> {.collection-method}</h4><p><code>skip</code> 方法返回一个新的集合，并从集合的开始删除指定数量的元素。</p><pre><code>$collection = collect([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

$collection = $collection-&gt;skip(4);

$collection-&gt;all();

// [5, 6, 7, 8, 9, 10]
</code></pre><p><a name="method-skipuntil"></a></p><h4 id="skipuntil-collection-method" tabindex="-1"><a class="header-anchor" href="#skipuntil-collection-method" aria-hidden="true">#</a> <code>skipUntil()</code> {.collection-method}</h4><p><code>skipUntil</code> 方法跳过集合中的项目，直到给定的回调返回 <code>true</code>，然后将集合中的剩余项目作为新的集合实例返回：</p><pre><code>$collection = collect([1, 2, 3, 4]);

$subset = $collection-&gt;skipUntil(function (int $item) {
    return $item &gt;= 3;
});

$subset-&gt;all();

// [3, 4]
</code></pre><p>你还可以将一个简单的值传递给 <code>skipUntil</code> 方法以跳过所有项目，直到找到给定值：</p><pre><code>$collection = collect([1, 2, 3, 4]);

$subset = $collection-&gt;skipUntil(3);

$subset-&gt;all();

// [3, 4]
</code></pre><blockquote><p>**注意：**如果没有找到给定的值或者回调从未返回 <code>true</code>，<code>skipUntil</code> 方法将返回一个空集合。</p></blockquote><p><a name="method-skipwhile"></a></p><h4 id="skipwhile-collection-method" tabindex="-1"><a class="header-anchor" href="#skipwhile-collection-method" aria-hidden="true">#</a> <code>skipWhile()</code> {.collection-method}</h4><p><code>skipWhile</code> 方法在给定回调返回 <code>true</code> 时跳过集合中的项目，然后将集合中的剩余项目作为新集合返回：</p><pre><code>$collection = collect([1, 2, 3, 4]);

$subset = $collection-&gt;skipWhile(function (int $item) {
    return $item &lt;= 3;
});

$subset-&gt;all();

// [4]
</code></pre><blockquote><p>**注意：**如果回调从未返回 <code>false</code>，<code>skipWhile</code> 方法将返回一个空集合。</p></blockquote><p><a name="method-slice"></a></p><h4 id="slice-collection-method" tabindex="-1"><a class="header-anchor" href="#slice-collection-method" aria-hidden="true">#</a> <code>slice()</code> {.collection-method}</h4><p><code>slice</code> 方法返回从给定索引开始的集合的一个片断。</p><pre><code>$collection = collect([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

$slice = $collection-&gt;slice(4);

$slice-&gt;all();

// [5, 6, 7, 8, 9, 10]
</code></pre><p>如果你想限制返回切片的大小，请将所需的大小作为第二个参数传给该方法。</p><pre><code>$slice = $collection-&gt;slice(4, 2);

$slice-&gt;all();

// [5, 6]
</code></pre><p>返回的切片将默认保留键值。如果你不希望保留原始键，你可以使用 <a href="#method-values"><code>values</code></a> 方法来重新索引它们。</p><p><a name="method-sliding"></a></p><h4 id="sliding-collection-method" tabindex="-1"><a class="header-anchor" href="#sliding-collection-method" aria-hidden="true">#</a> <code>sliding()</code> {.collection-method}</h4><p><code>sliding</code> 方法返回一个新的块集合，表示集合中项目的「滑动窗口」视图：</p><pre><code>$collection = collect([1, 2, 3, 4, 5]);

$chunks = $collection-&gt;sliding(2);

$chunks-&gt;toArray();

// [[1, 2], [2, 3], [3, 4], [4, 5]]
</code></pre><p>这与 <a href="#method-eachspread"><code>eachSpread</code></a> 方法结合使用特别有用：</p><pre><code>$transactions-&gt;sliding(2)-&gt;eachSpread(function (Collection $previous, Collection $current) {
    $current-&gt;total = $previous-&gt;total + $current-&gt;amount;
});
</code></pre><p>你可以选择传递第二个「步长」值，该值确定每个块的第一项之间的距离：</p><pre><code>$collection = collect([1, 2, 3, 4, 5]);

$chunks = $collection-&gt;sliding(3, step: 2);

$chunks-&gt;toArray();

// [[1, 2, 3], [3, 4, 5]]
</code></pre><p><a name="method-sole"></a></p><h4 id="sole-collection-method" tabindex="-1"><a class="header-anchor" href="#sole-collection-method" aria-hidden="true">#</a> <code>sole()</code> {.collection-method}</h4><p><code>sole</code> 方法返回集合中第一个通过给定真值测试的元素，但只有在真值测试正好匹配一个元素的情况下。</p><pre><code>collect([1, 2, 3, 4])-&gt;sole(function (int $value, int $key) {
    return $value === 2;
});

// 2
</code></pre><p>你也可以向 <code>sole</code> 方法传递一个键/值对，它将返回集合中第一个与给定对相匹配的元素，但只有当它正好有一个元素相匹配时。</p><pre><code>$collection = collect([
    [&#39;product&#39; =&gt; &#39;Desk&#39;, &#39;price&#39; =&gt; 200],
    [&#39;product&#39; =&gt; &#39;Chair&#39;, &#39;price&#39; =&gt; 100],
]);

$collection-&gt;sole(&#39;product&#39;, &#39;Chair&#39;);

// [&#39;product&#39; =&gt; &#39;Chair&#39;, &#39;price&#39; =&gt; 100]
</code></pre><p>另外，如果只有一个元素，你也可以调用没有参数的 <code>sole</code> 方法来获得集合中的第一个元素。</p><pre><code>$collection = collect([
    [&#39;product&#39; =&gt; &#39;Desk&#39;, &#39;price&#39; =&gt; 200],
]);

$collection-&gt;sole();

// [&#39;product&#39; =&gt; &#39;Desk&#39;, &#39;price&#39; =&gt; 200]
</code></pre><p>如果集合中没有应该由 <code>sole</code> 方法返回的元素，则会抛出 <code>\\Illuminate\\Collections\\ItemNotFoundException</code> 异常。如果应该返回多个元素，则会抛出 <code>\\Illuminate\\Collections\\MultipleItemsFoundException</code>。</p><p><a name="method-some"></a></p><h4 id="some-collection-method" tabindex="-1"><a class="header-anchor" href="#some-collection-method" aria-hidden="true">#</a> <code>some()</code> {.collection-method}</h4><p><a href="#method-contains"><code>contains</code></a> 方法的别名。</p><p><a name="method-sort"></a></p><h4 id="sort-collection-method" tabindex="-1"><a class="header-anchor" href="#sort-collection-method" aria-hidden="true">#</a> <code>sort()</code> {.collection-method}</h4><p><code>sort</code> 方法对集合进行排序。排序后的集合保留了原始数组键，因此在下面的示例中，我们将使用 <a href="#method-values"><code>values</code></a> 方法将键重置为连续编号的索引：</p><pre><code>$collection = collect([5, 3, 1, 2, 4]);

$sorted = $collection-&gt;sort();

$sorted-&gt;values()-&gt;all();

// [1, 2, 3, 4, 5]
</code></pre>`,158),R={href:"https://secure.php.net/manual/en/function.uasort.php#refsect1-function.uasort-parameters",target:"_blank",rel:"noopener noreferrer"},T=e("code",null,"uasort",-1),U=e("code",null,"sort",-1),P=c(`<blockquote><p>**技巧：**如果你需要对嵌套数组或对象的集合进行排序，请参阅 <a href="#method-sortby"><code>sortBy</code></a> 和 <a href="#method-sortbydesc"><code>sortByDesc</code></a> 方法。</p></blockquote><p><a name="method-sortby"></a></p><h4 id="sortby-collection-method" tabindex="-1"><a class="header-anchor" href="#sortby-collection-method" aria-hidden="true">#</a> <code>sortBy()</code> {.collection-method}</h4><p><code>sortBy</code> 方法按给定键对集合进行排序。排序后的集合保留了原始数组键，因此在下面的示例中，我们将使用 <a href="#method-values"><code>values</code></a> 方法将键重置为连续编号的索引：</p><pre><code>$collection = collect([
    [&#39;name&#39; =&gt; &#39;Desk&#39;, &#39;price&#39; =&gt; 200],
    [&#39;name&#39; =&gt; &#39;Chair&#39;, &#39;price&#39; =&gt; 100],
    [&#39;name&#39; =&gt; &#39;Bookcase&#39;, &#39;price&#39; =&gt; 150],
]);

$sorted = $collection-&gt;sortBy(&#39;price&#39;);

$sorted-&gt;values()-&gt;all();

/*
    [
        [&#39;name&#39; =&gt; &#39;Chair&#39;, &#39;price&#39; =&gt; 100],
        [&#39;name&#39; =&gt; &#39;Bookcase&#39;, &#39;price&#39; =&gt; 150],
        [&#39;name&#39; =&gt; &#39;Desk&#39;, &#39;price&#39; =&gt; 200],
    ]
*/
</code></pre>`,5),j=e("code",null,"sortBy",-1),O={href:"https://www.php.net/manual/en/function.sort.php",target:"_blank",rel:"noopener noreferrer"},L=c(`<pre><code>$collection = collect([
    [&#39;title&#39; =&gt; &#39;Item 1&#39;],
    [&#39;title&#39; =&gt; &#39;Item 12&#39;],
    [&#39;title&#39; =&gt; &#39;Item 3&#39;],
]);

$sorted = $collection-&gt;sortBy(&#39;title&#39;, SORT_NATURAL);

$sorted-&gt;values()-&gt;all();

/*
    [
        [&#39;title&#39; =&gt; &#39;Item 1&#39;],
        [&#39;title&#39; =&gt; &#39;Item 3&#39;],
        [&#39;title&#39; =&gt; &#39;Item 12&#39;],
    ]
*/
</code></pre><p>或者，你可以传递自己的闭包来确定如何对集合的值进行排序：</p><pre><code>$collection = collect([
    [&#39;name&#39; =&gt; &#39;Desk&#39;, &#39;colors&#39; =&gt; [&#39;Black&#39;, &#39;Mahogany&#39;]],
    [&#39;name&#39; =&gt; &#39;Chair&#39;, &#39;colors&#39; =&gt; [&#39;Black&#39;]],
    [&#39;name&#39; =&gt; &#39;Bookcase&#39;, &#39;colors&#39; =&gt; [&#39;Red&#39;, &#39;Beige&#39;, &#39;Brown&#39;]],
]);

$sorted = $collection-&gt;sortBy(function (array $product, int $key) {
    return count($product[&#39;colors&#39;]);
});

$sorted-&gt;values()-&gt;all();

/*
    [
        [&#39;name&#39; =&gt; &#39;Chair&#39;, &#39;colors&#39; =&gt; [&#39;Black&#39;]],
        [&#39;name&#39; =&gt; &#39;Desk&#39;, &#39;colors&#39; =&gt; [&#39;Black&#39;, &#39;Mahogany&#39;]],
        [&#39;name&#39; =&gt; &#39;Bookcase&#39;, &#39;colors&#39; =&gt; [&#39;Red&#39;, &#39;Beige&#39;, &#39;Brown&#39;]],
    ]
*/
</code></pre><p>如果你想按多个属性对集合进行排序，可以将排序操作数组传递给 <code>sortBy</code> 方法。每个排序操作都应该是一个数组，由你希望排序的属性和所需排序的方向组成：</p><pre><code>$collection = collect([
    [&#39;name&#39; =&gt; &#39;Taylor Otwell&#39;, &#39;age&#39; =&gt; 34],
    [&#39;name&#39; =&gt; &#39;Abigail Otwell&#39;, &#39;age&#39; =&gt; 30],
    [&#39;name&#39; =&gt; &#39;Taylor Otwell&#39;, &#39;age&#39; =&gt; 36],
    [&#39;name&#39; =&gt; &#39;Abigail Otwell&#39;, &#39;age&#39; =&gt; 32],
]);

$sorted = $collection-&gt;sortBy([
    [&#39;name&#39;, &#39;asc&#39;],
    [&#39;age&#39;, &#39;desc&#39;],
]);

$sorted-&gt;values()-&gt;all();

/*
    [
        [&#39;name&#39; =&gt; &#39;Abigail Otwell&#39;, &#39;age&#39; =&gt; 32],
        [&#39;name&#39; =&gt; &#39;Abigail Otwell&#39;, &#39;age&#39; =&gt; 30],
        [&#39;name&#39; =&gt; &#39;Taylor Otwell&#39;, &#39;age&#39; =&gt; 36],
        [&#39;name&#39; =&gt; &#39;Taylor Otwell&#39;, &#39;age&#39; =&gt; 34],
    ]
*/
</code></pre><p>当按多个属性对集合进行排序时，你还可以提供定义每个排序操作的闭包：</p><pre><code>$collection = collect([
    [&#39;name&#39; =&gt; &#39;Taylor Otwell&#39;, &#39;age&#39; =&gt; 34],
    [&#39;name&#39; =&gt; &#39;Abigail Otwell&#39;, &#39;age&#39; =&gt; 30],
    [&#39;name&#39; =&gt; &#39;Taylor Otwell&#39;, &#39;age&#39; =&gt; 36],
    [&#39;name&#39; =&gt; &#39;Abigail Otwell&#39;, &#39;age&#39; =&gt; 32],
]);

$sorted = $collection-&gt;sortBy([
    fn (array $a, array $b) =&gt; $a[&#39;name&#39;] &lt;=&gt; $b[&#39;name&#39;],
    fn (array $a, array $b) =&gt; $b[&#39;age&#39;] &lt;=&gt; $a[&#39;age&#39;],
]);

$sorted-&gt;values()-&gt;all();

/*
    [
        [&#39;name&#39; =&gt; &#39;Abigail Otwell&#39;, &#39;age&#39; =&gt; 32],
        [&#39;name&#39; =&gt; &#39;Abigail Otwell&#39;, &#39;age&#39; =&gt; 30],
        [&#39;name&#39; =&gt; &#39;Taylor Otwell&#39;, &#39;age&#39; =&gt; 36],
        [&#39;name&#39; =&gt; &#39;Taylor Otwell&#39;, &#39;age&#39; =&gt; 34],
    ]
*/
</code></pre><p><a name="method-sortbydesc"></a></p><h4 id="sortbydesc-collection-method" tabindex="-1"><a class="header-anchor" href="#sortbydesc-collection-method" aria-hidden="true">#</a> <code>sortByDesc()</code> {.collection-method}</h4><p>此方法与 <a href="#method-sortby"><code>sortBy</code></a> 方法具有相同的签名，但将以相反的顺序对集合进行排序。</p><p><a name="method-sortdesc"></a></p><h4 id="sortdesc-collection-method" tabindex="-1"><a class="header-anchor" href="#sortdesc-collection-method" aria-hidden="true">#</a> <code>sortDesc()</code> {.collection-method}</h4><p>此方法将按照与 <a href="#method-sort"><code>sort</code></a> 方法相反的顺序对集合进行排序：</p><pre><code>$collection = collect([5, 3, 1, 2, 4]);

$sorted = $collection-&gt;sortDesc();

$sorted-&gt;values()-&gt;all();

// [5, 4, 3, 2, 1]
</code></pre><p>与 <code>sort</code> 不同，你不能将闭包传递给 <code>sortDesc</code>。相反，你应该使用 <a href="#method-sort"><code>sort</code></a> 方法并反转比较。</p><p><a name="method-sortkeys"></a></p><h4 id="sortkeys-collection-method" tabindex="-1"><a class="header-anchor" href="#sortkeys-collection-method" aria-hidden="true">#</a> <code>sortKeys()</code> {.collection-method}</h4><p><code>sortKeys</code> 方法通过底层关联数组的键对集合进行排序：</p><pre><code>$collection = collect([
    &#39;id&#39; =&gt; 22345,
    &#39;first&#39; =&gt; &#39;John&#39;,
    &#39;last&#39; =&gt; &#39;Doe&#39;,
]);

$sorted = $collection-&gt;sortKeys();

$sorted-&gt;all();

/*
    [
        &#39;first&#39; =&gt; &#39;John&#39;,
        &#39;id&#39; =&gt; 22345,
        &#39;last&#39; =&gt; &#39;Doe&#39;,
    ]
*/
</code></pre><p><a name="method-sortkeysdesc"></a></p><h4 id="sortkeysdesc-collection-method" tabindex="-1"><a class="header-anchor" href="#sortkeysdesc-collection-method" aria-hidden="true">#</a> <code>sortKeysDesc()</code> {.collection-method}</h4><p>此方法与 <a href="#method-sortkeys"><code>sortKeys</code></a> 方法具有相同的签名，但将以相反的顺序对集合进行排序。</p><p><a name="method-sortkeysusing"></a></p><h4 id="sortkeysusing-collection-method" tabindex="-1"><a class="header-anchor" href="#sortkeysusing-collection-method" aria-hidden="true">#</a> <code>sortKeysUsing()</code> {.collection-method}</h4><p><code>sortKeysUsing</code> 方法使用回调通过底层关联数组的键对集合进行排序：</p><pre><code>$collection = collect([
    &#39;ID&#39; =&gt; 22345,
    &#39;first&#39; =&gt; &#39;John&#39;,
    &#39;last&#39; =&gt; &#39;Doe&#39;,
]);

$sorted = $collection-&gt;sortKeysUsing(&#39;strnatcasecmp&#39;);

$sorted-&gt;all();

/*
    [
        &#39;first&#39; =&gt; &#39;John&#39;,
        &#39;ID&#39; =&gt; 22345,
        &#39;last&#39; =&gt; &#39;Doe&#39;,
    ]
*/
</code></pre>`,26),M={href:"https://www.php.net/manual/en/function.uksort.php#refsect1-function.uksort-parameters",target:"_blank",rel:"noopener noreferrer"},K=e("code",null,"uksort",-1),W=e("code",null,"sortKeysUsing",-1),F=c(`<p><a name="method-splice"></a></p><h4 id="splice-collection-method" tabindex="-1"><a class="header-anchor" href="#splice-collection-method" aria-hidden="true">#</a> <code>splice()</code> {.collection-method}</h4><p><code>splice</code> 方法删除并返回从指定索引开始的项目切片：</p><pre><code>$collection = collect([1, 2, 3, 4, 5]);

$chunk = $collection-&gt;splice(2);

$chunk-&gt;all();

// [3, 4, 5]

$collection-&gt;all();

// [1, 2]
</code></pre><p>你可以传递第二个参数来限制结果集合的大小：</p><pre><code>$collection = collect([1, 2, 3, 4, 5]);

$chunk = $collection-&gt;splice(2, 1);

$chunk-&gt;all();

// [3]

$collection-&gt;all();

// [1, 2, 4, 5]
</code></pre><p>此外，你可以传递包含新项目的第三个参数来替换从集合中删除的项目：</p><pre><code>$collection = collect([1, 2, 3, 4, 5]);

$chunk = $collection-&gt;splice(2, 1, [10, 11]);

$chunk-&gt;all();

// [3]

$collection-&gt;all();

// [1, 2, 10, 11, 4, 5]
</code></pre><p><a name="method-split"></a></p><h4 id="split-collection-method" tabindex="-1"><a class="header-anchor" href="#split-collection-method" aria-hidden="true">#</a> <code>split()</code> {.collection-method}</h4><p><code>split</code> 方法将集合分成给定数量的组：</p><pre><code>$collection = collect([1, 2, 3, 4, 5]);

$groups = $collection-&gt;split(3);

$groups-&gt;all();

// [[1, 2], [3, 4], [5]]
</code></pre><p><a name="method-splitin"></a></p><h4 id="splitin-collection-method" tabindex="-1"><a class="header-anchor" href="#splitin-collection-method" aria-hidden="true">#</a> <code>splitIn()</code> {.collection-method}</h4><p><code>splitIn</code> 方法将集合分成给定数量的组，在将剩余部分分配给最终组之前完全填充非终端组：</p><pre><code>$collection = collect([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

$groups = $collection-&gt;splitIn(3);

$groups-&gt;all();

// [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10]]
</code></pre><p><a name="method-sum"></a></p><h4 id="sum-collection-method" tabindex="-1"><a class="header-anchor" href="#sum-collection-method" aria-hidden="true">#</a> <code>sum()</code> {.collection-method}</h4><p><code>sum</code> 方法返回集合中所有项目的总和：</p><pre><code>collect([1, 2, 3, 4, 5])-&gt;sum();

// 15
</code></pre><p>如果集合包含嵌套数组或对象，则应传递一个键，用于确定要对哪些值求和：</p><pre><code>$collection = collect([
    [&#39;name&#39; =&gt; &#39;JavaScript: The Good Parts&#39;, &#39;pages&#39; =&gt; 176],
    [&#39;name&#39; =&gt; &#39;JavaScript: The Definitive Guide&#39;, &#39;pages&#39; =&gt; 1096],
]);

$collection-&gt;sum(&#39;pages&#39;);

// 1272
</code></pre><p>此外，你可以传递自己的闭包来确定要对集合的哪些值求和：</p><pre><code>$collection = collect([
    [&#39;name&#39; =&gt; &#39;Chair&#39;, &#39;colors&#39; =&gt; [&#39;Black&#39;]],
    [&#39;name&#39; =&gt; &#39;Desk&#39;, &#39;colors&#39; =&gt; [&#39;Black&#39;, &#39;Mahogany&#39;]],
    [&#39;name&#39; =&gt; &#39;Bookcase&#39;, &#39;colors&#39; =&gt; [&#39;Red&#39;, &#39;Beige&#39;, &#39;Brown&#39;]],
]);

$collection-&gt;sum(function (array $product) {
    return count($product[&#39;colors&#39;]);
});

// 6
</code></pre><p><a name="method-take"></a></p><h4 id="take-collection-method" tabindex="-1"><a class="header-anchor" href="#take-collection-method" aria-hidden="true">#</a> <code>take()</code> {.collection-method}</h4><p><code>take</code> 方法返回一个具有指定数量项目的新集合：</p><pre><code>$collection = collect([0, 1, 2, 3, 4, 5]);

$chunk = $collection-&gt;take(3);

$chunk-&gt;all();

// [0, 1, 2]
</code></pre><p>你还可以传递一个负整数以从集合末尾获取指定数量的项目：</p><pre><code>$collection = collect([0, 1, 2, 3, 4, 5]);

$chunk = $collection-&gt;take(-2);

$chunk-&gt;all();

// [4, 5]
</code></pre><p><a name="method-takeuntil"></a></p><h4 id="takeuntil-collection-method" tabindex="-1"><a class="header-anchor" href="#takeuntil-collection-method" aria-hidden="true">#</a> <code>takeUntil()</code> {.collection-method}</h4><p><code>takeUntil</code> 方法返回集合中的项目，直到给定的回调返回 <code>true</code>：</p><pre><code>$collection = collect([1, 2, 3, 4]);

$subset = $collection-&gt;takeUntil(function (int $item) {
    return $item &gt;= 3;
});

$subset-&gt;all();

// [1, 2]
</code></pre><p>你还可以将一个简单的值传递给 <code>takeUntil</code> 方法以获取项目，直到找到给定值：</p><pre><code>$collection = collect([1, 2, 3, 4]);

$subset = $collection-&gt;takeUntil(3);

$subset-&gt;all();

// [1, 2]
</code></pre><blockquote><p>**注意：**如果未找到给定值或回调从未返回 <code>true</code>，则 <code>takeUntil</code> 方法将返回集合中的所有项目。</p></blockquote><p><a name="method-takewhile"></a></p><h4 id="takewhile-collection-method" tabindex="-1"><a class="header-anchor" href="#takewhile-collection-method" aria-hidden="true">#</a> <code>takeWhile()</code> {.collection-method}</h4><p><code>takeWhile</code> 方法返回集合中的项目，直到给定的回调返回 <code>false</code>：</p><pre><code>$collection = collect([1, 2, 3, 4]);

$subset = $collection-&gt;takeWhile(function (int $item) {
    return $item &lt; 3;
});

$subset-&gt;all();

// [1, 2]
</code></pre><blockquote><p>**注意：**如果回调从不返回 <code>false</code>，则 <code>takeWhile</code> 方法将返回集合中的所有项目。</p></blockquote><p><a name="method-tap"></a></p><h4 id="tap-collection-method" tabindex="-1"><a class="header-anchor" href="#tap-collection-method" aria-hidden="true">#</a> <code>tap()</code> {.collection-method}</h4><p><code>tap</code> 方法将集合传递给给定的回调，允许你在特定点「点击」到集合中并在不影响集合本身的情况下对项目执行某些操作。然后集合由 <code>tap</code> 方法返回：</p><pre><code>collect([2, 4, 3, 1, 5])
    -&gt;sort()
    -&gt;tap(function (Collection $collection) {
        Log::debug(&#39;Values after sorting&#39;, $collection-&gt;values()-&gt;all());
    })
    -&gt;shift();

// 1
</code></pre><p><a name="method-times"></a></p><h4 id="times-collection-method" tabindex="-1"><a class="header-anchor" href="#times-collection-method" aria-hidden="true">#</a> <code>times()</code> {.collection-method}</h4><p>静态 <code>times</code> 方法通过调用给定次数的回调函数来创建新集合：</p><pre><code>$collection = Collection::times(10, function (int $number) {
    return $number * 9;
});

$collection-&gt;all();

// [9, 18, 27, 36, 45, 54, 63, 72, 81, 90]
</code></pre><p><a name="method-toarray"></a></p><h4 id="toarray-collection-method" tabindex="-1"><a class="header-anchor" href="#toarray-collection-method" aria-hidden="true">#</a> <code>toArray()</code> {.collection-method}</h4><p>该 <code>toArray</code> 方法将集合转换成 PHP <code>array</code>。如果集合的值是 <a href="./eloquent">Eloquent</a> 模型，那也会被转换成数组：</p><pre><code>$collection = collect([&#39;name&#39; =&gt; &#39;Desk&#39;, &#39;price&#39; =&gt; 200]);

$collection-&gt;toArray();

/*
    [
        [&#39;name&#39; =&gt; &#39;Desk&#39;, &#39;price&#39; =&gt; 200],
    ]
*/
</code></pre><blockquote><p><strong>注意：</strong><code>toArray</code> 也会将 <code>Arrayable</code> 的实例、所有集合的嵌套对象转换为数组。如果你想获取原数组，可以使用 <a href="#method-all"><code>all</code></a> 方法。</p></blockquote><p><a name="method-tojson"></a></p><h4 id="tojson-collection-method" tabindex="-1"><a class="header-anchor" href="#tojson-collection-method" aria-hidden="true">#</a> <code>toJson()</code> {.collection-method}</h4><p>该 <code>toJson</code> 方法将集合转换成 JSON 字符串：</p><pre><code>$collection = collect([&#39;name&#39; =&gt; &#39;Desk&#39;, &#39;price&#39; =&gt; 200]);

$collection-&gt;toJson();

// &#39;{&quot;name&quot;:&quot;Desk&quot;, &quot;price&quot;:200}&#39;
</code></pre><p><a name="method-transform"></a></p><h4 id="transform-collection-method" tabindex="-1"><a class="header-anchor" href="#transform-collection-method" aria-hidden="true">#</a> <code>transform()</code> {.collection-method}</h4><p>该 <code>transform</code> 方法会遍历整个集合，并对集合中的每个元素都会调用其回调函数。集合中的元素将被替换为回调函数返回的值：</p><pre><code>$collection = collect([1, 2, 3, 4, 5]);

$collection-&gt;transform(function (int $item, int $key) {
    return $item * 2;
});

$collection-&gt;all();

// [2, 4, 6, 8, 10]
</code></pre><blockquote><p>**注意：**与大多数集合方法不同，<code>transform</code> 会修改集合本身。如果你想创建新集合，可以使用 <a href="#method-map"><code>map</code></a> 方法。</p></blockquote><p><a name="method-undot"></a></p><h4 id="undot-collection-method" tabindex="-1"><a class="header-anchor" href="#undot-collection-method" aria-hidden="true">#</a> <code>undot()</code> {.collection-method}</h4><p><code>undot()</code> 方法将使用「点」表示法的一维集合扩展为多维集合：</p><pre><code>$person = collect([
    &#39;name.first_name&#39; =&gt; &#39;Marie&#39;,
    &#39;name.last_name&#39; =&gt; &#39;Valentine&#39;,
    &#39;address.line_1&#39; =&gt; &#39;2992 Eagle Drive&#39;,
    &#39;address.line_2&#39; =&gt; &#39;&#39;,
    &#39;address.suburb&#39; =&gt; &#39;Detroit&#39;,
    &#39;address.state&#39; =&gt; &#39;MI&#39;,
    &#39;address.postcode&#39; =&gt; &#39;48219&#39;
]);

$person = $person-&gt;undot();

$person-&gt;toArray();

/*
    [
        &quot;name&quot; =&gt; [
            &quot;first_name&quot; =&gt; &quot;Marie&quot;,
            &quot;last_name&quot; =&gt; &quot;Valentine&quot;,
        ],
        &quot;address&quot; =&gt; [
            &quot;line_1&quot; =&gt; &quot;2992 Eagle Drive&quot;,
            &quot;line_2&quot; =&gt; &quot;&quot;,
            &quot;suburb&quot; =&gt; &quot;Detroit&quot;,
            &quot;state&quot; =&gt; &quot;MI&quot;,
            &quot;postcode&quot; =&gt; &quot;48219&quot;,
        ],
    ]
*/
</code></pre><p><a name="method-union"></a></p><h4 id="union-collection-method" tabindex="-1"><a class="header-anchor" href="#union-collection-method" aria-hidden="true">#</a> <code>union()</code> {.collection-method}</h4><p>该 <code>union</code> 方法将给定数组添加到集合中。如果给定的数组含有与原集合一样的键，则首选原始集合的值：</p><pre><code>$collection = collect([1 =&gt; [&#39;a&#39;], 2 =&gt; [&#39;b&#39;]]);

$union = $collection-&gt;union([3 =&gt; [&#39;c&#39;], 1 =&gt; [&#39;d&#39;]]);

$union-&gt;all();

// [1 =&gt; [&#39;a&#39;], 2 =&gt; [&#39;b&#39;], 3 =&gt; [&#39;c&#39;]]
</code></pre><p><a name="method-unique"></a></p><h4 id="unique-collection-method" tabindex="-1"><a class="header-anchor" href="#unique-collection-method" aria-hidden="true">#</a> <code>unique()</code> {.collection-method}</h4><p>该 <code>unique</code> 方法返回集合中所有唯一项。返回的集合保留着原数组的键，所以在这个例子中，我们使用 <a href="#method-values"><code>values</code></a> 方法把键重置为连续编号的索引：</p><pre><code>$collection = collect([1, 1, 2, 2, 3, 4, 2]);

$unique = $collection-&gt;unique();

$unique-&gt;values()-&gt;all();

// [1, 2, 3, 4]
</code></pre><p>当处理嵌套数组或对象时，你可以指定用于确定唯一性的键：</p><pre><code>$collection = collect([
    [&#39;name&#39; =&gt; &#39;iPhone 6&#39;, &#39;brand&#39; =&gt; &#39;Apple&#39;, &#39;type&#39; =&gt; &#39;phone&#39;],
    [&#39;name&#39; =&gt; &#39;iPhone 5&#39;, &#39;brand&#39; =&gt; &#39;Apple&#39;, &#39;type&#39; =&gt; &#39;phone&#39;],
    [&#39;name&#39; =&gt; &#39;Apple Watch&#39;, &#39;brand&#39; =&gt; &#39;Apple&#39;, &#39;type&#39; =&gt; &#39;watch&#39;],
    [&#39;name&#39; =&gt; &#39;Galaxy S6&#39;, &#39;brand&#39; =&gt; &#39;Samsung&#39;, &#39;type&#39; =&gt; &#39;phone&#39;],
    [&#39;name&#39; =&gt; &#39;Galaxy Gear&#39;, &#39;brand&#39; =&gt; &#39;Samsung&#39;, &#39;type&#39; =&gt; &#39;watch&#39;],
]);

$unique = $collection-&gt;unique(&#39;brand&#39;);

$unique-&gt;values()-&gt;all();

/*
    [
        [&#39;name&#39; =&gt; &#39;iPhone 6&#39;, &#39;brand&#39; =&gt; &#39;Apple&#39;, &#39;type&#39; =&gt; &#39;phone&#39;],
        [&#39;name&#39; =&gt; &#39;Galaxy S6&#39;, &#39;brand&#39; =&gt; &#39;Samsung&#39;, &#39;type&#39; =&gt; &#39;phone&#39;],
    ]
*/
</code></pre><p>最后，你还可以将自己的闭包传递给该 <code>unique</code> 方法，以指定哪个值应确定项目的唯一性：</p><pre><code>$unique = $collection-&gt;unique(function (array $item) {
    return $item[&#39;brand&#39;].$item[&#39;type&#39;];
});

$unique-&gt;values()-&gt;all();

/*
    [
        [&#39;name&#39; =&gt; &#39;iPhone 6&#39;, &#39;brand&#39; =&gt; &#39;Apple&#39;, &#39;type&#39; =&gt; &#39;phone&#39;],
        [&#39;name&#39; =&gt; &#39;Apple Watch&#39;, &#39;brand&#39; =&gt; &#39;Apple&#39;, &#39;type&#39; =&gt; &#39;watch&#39;],
        [&#39;name&#39; =&gt; &#39;Galaxy S6&#39;, &#39;brand&#39; =&gt; &#39;Samsung&#39;, &#39;type&#39; =&gt; &#39;phone&#39;],
        [&#39;name&#39; =&gt; &#39;Galaxy Gear&#39;, &#39;brand&#39; =&gt; &#39;Samsung&#39;, &#39;type&#39; =&gt; &#39;watch&#39;],
    ]
*/
</code></pre><p>该 <code>unique</code> 方法在检查项目值时使用「宽松」模式比较，意味着具有整数值的字符串将被视为等于相同值的整数。你可以使用 <a href="#method-uniquestrict"><code>uniqueStrict</code></a> 方法做「严格」模式比较。</p><blockquote><p>**技巧：**这个方法的行为在使用 <a href="./eloquent-collections#method-unique">Eloquent 集合</a> 时被修改。</p></blockquote><p><a name="method-uniquestrict"></a></p><h4 id="uniquestrict-collection-method" tabindex="-1"><a class="header-anchor" href="#uniquestrict-collection-method" aria-hidden="true">#</a> <code>uniqueStrict()</code> {.collection-method}</h4><p>这个方法与 <a href="#method-unique"><code>unique</code></a> 方法一样，然而，所有的值是用「严格」模式来比较的。</p><p><a name="method-unless"></a></p><h4 id="unless-collection-method" tabindex="-1"><a class="header-anchor" href="#unless-collection-method" aria-hidden="true">#</a> <code>unless()</code> {.collection-method}</h4><p>该 <code>unless</code> 方法当传入的第一个参数不为 <code>true</code> 的时候，将执行给定的回调函数：</p><pre><code>$collection = collect([1, 2, 3]);

$collection-&gt;unless(true, function (Collection $collection) {
    return $collection-&gt;push(4);
});

$collection-&gt;unless(false, function (Collection $collection) {
    return $collection-&gt;push(5);
});

$collection-&gt;all();

// [1, 2, 3, 5]
</code></pre><p>可以将第二个回调传递给该 <code>unless</code> 方法。 <code>unless</code> 当给方法的第一个参数计算结果为时，将执行第二个回调 <code>true</code>:</p><pre><code>$collection = collect([1, 2, 3]);

$collection-&gt;unless(true, function (Collection $collection) {
    return $collection-&gt;push(4);
}, function (Collection $collection) {
    return $collection-&gt;push(5);
});

$collection-&gt;all();

// [1, 2, 3, 5]
</code></pre><p>与 <code>unless</code> 相反的，请参见 <a href="#method-when"><code>when</code></a> 方法。</p><p><a name="method-unlessempty"></a></p><h4 id="unlessempty-collection-method" tabindex="-1"><a class="header-anchor" href="#unlessempty-collection-method" aria-hidden="true">#</a> <code>unlessEmpty()</code> {.collection-method}</h4><p><a href="#method-whennotempty"><code>whenNotEmpty</code></a> 的别名方法。</p><p><a name="method-unlessnotempty"></a></p><h4 id="unlessnotempty-collection-method" tabindex="-1"><a class="header-anchor" href="#unlessnotempty-collection-method" aria-hidden="true">#</a> <code>unlessNotEmpty()</code> {.collection-method}</h4><p><a href="#method-whenempty"><code>whenEmpty</code></a> 的别名方法。</p><p><a name="method-unwrap"></a></p><h4 id="unwrap-collection-method" tabindex="-1"><a class="header-anchor" href="#unwrap-collection-method" aria-hidden="true">#</a> <code>unwrap()</code> {.collection-method}</h4><p>静态 <code>unwrap</code> 方法返回集合内部的可用元素：</p><pre><code>Collection::unwrap(collect(&#39;John Doe&#39;));

// [&#39;John Doe&#39;]

Collection::unwrap([&#39;John Doe&#39;]);

// [&#39;John Doe&#39;]

Collection::unwrap(&#39;John Doe&#39;);

// &#39;John Doe&#39;
</code></pre><p><a name="method-value"></a></p><h4 id="value-collection-method" tabindex="-1"><a class="header-anchor" href="#value-collection-method" aria-hidden="true">#</a> <code>value()</code> {.collection-method}</h4><p><code>value</code> 方法从集合的第一个元素中检索一个给定的值。</p><pre><code>$collection = collect([
    [&#39;product&#39; =&gt; &#39;Desk&#39;, &#39;price&#39; =&gt; 200],
    [&#39;product&#39; =&gt; &#39;Speaker&#39;, &#39;price&#39; =&gt; 400],
]);

$value = $collection-&gt;value(&#39;price&#39;);

// 200
</code></pre><p><a name="method-values"></a></p><h4 id="values-collection-method" tabindex="-1"><a class="header-anchor" href="#values-collection-method" aria-hidden="true">#</a> <code>values()</code> {.collection-method}</h4><p>该 <code>values</code> 方法返回键被重置为连续编号的新集合：</p><pre><code>$collection = collect([
    10 =&gt; [&#39;product&#39; =&gt; &#39;Desk&#39;, &#39;price&#39; =&gt; 200],
    11 =&gt; [&#39;product&#39; =&gt; &#39;Desk&#39;, &#39;price&#39; =&gt; 200],
]);

$values = $collection-&gt;values();

$values-&gt;all();

/*
    [
        0 =&gt; [&#39;product&#39; =&gt; &#39;Desk&#39;, &#39;price&#39; =&gt; 200],
        1 =&gt; [&#39;product&#39; =&gt; &#39;Desk&#39;, &#39;price&#39; =&gt; 200],
    ]
*/
</code></pre><p><a name="method-when"></a></p><h4 id="when-collection-method" tabindex="-1"><a class="header-anchor" href="#when-collection-method" aria-hidden="true">#</a> <code>when()</code> {.collection-method}</h4><p>当 <code>when</code> 方法的第一个参数传入为 <code>true</code> 时，将执行给定的回调函数。 集合实例和给到 <code>when</code> 方法的第一个参数将被提供给闭包。</p><pre><code>$collection = collect([1, 2, 3]);

$collection-&gt;when(true, function (Collection $collection, int $value) {
    return $collection-&gt;push(4);
});

$collection-&gt;when(false, function (Collection $collection, int $value) {
    return $collection-&gt;push(5);
});

$collection-&gt;all();

// [1, 2, 3, 4]
</code></pre><p>可以将第二个回调传递给该 <code>when</code> 方法。当给 <code>when</code> 方法的第一个参数计算结果为 <code>false</code> 时，将执行第二个回调：</p><pre><code>$collection = collect([1, 2, 3]);

$collection-&gt;when(false, function (Collection $collection, int $value) {
    return $collection-&gt;push(4);
}, function (Collection $collection) {
    return $collection-&gt;push(5);
});

$collection-&gt;all();

// [1, 2, 3, 5]
</code></pre><p>与 <code>when</code> 相反的方法，请查看 <a href="#method-unless"><code>unless</code></a> 方法。</p><p><a name="method-whenempty"></a></p><h4 id="whenempty-collection-method" tabindex="-1"><a class="header-anchor" href="#whenempty-collection-method" aria-hidden="true">#</a> <code>whenEmpty()</code> {.collection-method}</h4><p>该 <code>whenEmpty</code> 方法是当集合为空时，将执行给定的回调函数：</p><pre><code>$collection = collect([&#39;Michael&#39;, &#39;Tom&#39;]);

$collection-&gt;whenEmpty(function (Collection $collection) {
    return $collection-&gt;push(&#39;Adam&#39;);
});

$collection-&gt;all();

// [&#39;Michael&#39;, &#39;Tom&#39;]


$collection = collect();

$collection-&gt;whenEmpty(function (Collection $collection) {
    return $collection-&gt;push(&#39;Adam&#39;);
});

$collection-&gt;all();

// [&#39;Adam&#39;]
</code></pre><p>当集合不为空时，可以将第二个闭包传递给 <code>whenEmpty</code> 将要执行的方法：</p><pre><code>$collection = collect([&#39;Michael&#39;, &#39;Tom&#39;]);

$collection-&gt;whenEmpty(function (Collection $collection) {
    return $collection-&gt;push(&#39;Adam&#39;);
}, function (Collection $collection) {
    return $collection-&gt;push(&#39;Taylor&#39;);
});

$collection-&gt;all();

// [&#39;Michael&#39;, &#39;Tom&#39;, &#39;Taylor&#39;]
</code></pre><p>与 <code>whenEmpty</code> 相反的方法，请查看 <a href="#method-whennotempty"><code>whenNotEmpty</code></a> 方法。</p><p><a name="method-whennotempty"></a></p><h4 id="whennotempty-collection-method" tabindex="-1"><a class="header-anchor" href="#whennotempty-collection-method" aria-hidden="true">#</a> <code>whenNotEmpty()</code> {.collection-method}</h4><p>该 <code>whenNotEmpty</code> 方法当集合不为空时，将执行给定的回调函数：</p><pre><code>$collection = collect([&#39;michael&#39;, &#39;tom&#39;]);

$collection-&gt;whenNotEmpty(function (Collection $collection) {
    return $collection-&gt;push(&#39;adam&#39;);
});

$collection-&gt;all();

// [&#39;michael&#39;, &#39;tom&#39;, &#39;adam&#39;]


$collection = collect();

$collection-&gt;whenNotEmpty(function (Collection $collection) {
    return $collection-&gt;push(&#39;adam&#39;);
});

$collection-&gt;all();

// []
</code></pre><p>可以将第二个闭包传递给 <code>whenNotEmpty</code> 将在集合为空时执行的方法：</p><pre><code>$collection = collect();

$collection-&gt;whenNotEmpty(function (Collection $collection) {
    return $collection-&gt;push(&#39;adam&#39;);
}, function (Collection $collection) {
    return $collection-&gt;push(&#39;taylor&#39;);
});

$collection-&gt;all();

// [&#39;taylor&#39;]
</code></pre><p>与 <code>whenNotEmpty</code> 相反的方法，请查看 <a href="#method-whenempty"><code>whenEmpty</code></a> 方法。</p><p><a name="method-where"></a></p><h4 id="where-collection-method" tabindex="-1"><a class="header-anchor" href="#where-collection-method" aria-hidden="true">#</a> <code>where()</code> {.collection-method}</h4><p>该 <code>where</code> 方法通过给定的键 / 值对查询过滤集合的结果：</p><pre><code>$collection = collect([
    [&#39;product&#39; =&gt; &#39;Desk&#39;, &#39;price&#39; =&gt; 200],
    [&#39;product&#39; =&gt; &#39;Chair&#39;, &#39;price&#39; =&gt; 100],
    [&#39;product&#39; =&gt; &#39;Bookcase&#39;, &#39;price&#39; =&gt; 150],
    [&#39;product&#39; =&gt; &#39;Door&#39;, &#39;price&#39; =&gt; 100],
]);

$filtered = $collection-&gt;where(&#39;price&#39;, 100);

$filtered-&gt;all();

/*
    [
        [&#39;product&#39; =&gt; &#39;Chair&#39;, &#39;price&#39; =&gt; 100],
        [&#39;product&#39; =&gt; &#39;Door&#39;, &#39;price&#39; =&gt; 100],
    ]
*/
</code></pre><p>该 <code>where</code> 方法在检查集合项值时使用「宽松」模式比较，这意味着具有整数值的字符串会被认为等于相同值的整数。你可以使用 <a href="#method-wherestrict"><code>whereStrict</code></a> 方法进行「严格」模式比较。</p><p>而且，你还可以将一个比较运算符作为第二个参数传递。 支持的运算符是有 &#39;===&#39;, &#39;！==&#39;, &#39;！=&#39;, &#39;==&#39;, &#39;=&#39;, &#39;&lt;&gt;&#39;, &#39;&gt;&#39;, &#39;&lt;&#39;, &#39;&gt;=&#39;, 和 &#39;&lt;=&#39;。</p><pre><code>$collection = collect([
    [&#39;name&#39; =&gt; &#39;Jim&#39;, &#39;deleted_at&#39; =&gt; &#39;2019-01-01 00:00:00&#39;],
    [&#39;name&#39; =&gt; &#39;Sally&#39;, &#39;deleted_at&#39; =&gt; &#39;2019-01-02 00:00:00&#39;],
    [&#39;name&#39; =&gt; &#39;Sue&#39;, &#39;deleted_at&#39; =&gt; null],
]);

$filtered = $collection-&gt;where(&#39;deleted_at&#39;, &#39;!=&#39;, null);

$filtered-&gt;all();

/*
    [
        [&#39;name&#39; =&gt; &#39;Jim&#39;, &#39;deleted_at&#39; =&gt; &#39;2019-01-01 00:00:00&#39;],
        [&#39;name&#39; =&gt; &#39;Sally&#39;, &#39;deleted_at&#39; =&gt; &#39;2019-01-02 00:00:00&#39;],
    ]
*/
</code></pre><p><a name="method-wherestrict"></a></p><h4 id="wherestrict-collection-method" tabindex="-1"><a class="header-anchor" href="#wherestrict-collection-method" aria-hidden="true">#</a> <code>whereStrict()</code> {.collection-method}</h4><p>此方法和 <a href="#method-where"><code>where</code></a> 方法使用相似；但是它是「严格」模式去匹配值和类型。</p><p><a name="method-wherebetween"></a></p><h4 id="wherebetween-collection-method" tabindex="-1"><a class="header-anchor" href="#wherebetween-collection-method" aria-hidden="true">#</a> <code>whereBetween()</code> {.collection-method}</h4><p>该 <code>whereBetween</code> 方法会筛选给定范围的集合：</p><pre><code>$collection = collect([
    [&#39;product&#39; =&gt; &#39;Desk&#39;, &#39;price&#39; =&gt; 200],
    [&#39;product&#39; =&gt; &#39;Chair&#39;, &#39;price&#39; =&gt; 80],
    [&#39;product&#39; =&gt; &#39;Bookcase&#39;, &#39;price&#39; =&gt; 150],
    [&#39;product&#39; =&gt; &#39;Pencil&#39;, &#39;price&#39; =&gt; 30],
    [&#39;product&#39; =&gt; &#39;Door&#39;, &#39;price&#39; =&gt; 100],
]);

$filtered = $collection-&gt;whereBetween(&#39;price&#39;, [100, 200]);

$filtered-&gt;all();

/*
    [
        [&#39;product&#39; =&gt; &#39;Desk&#39;, &#39;price&#39; =&gt; 200],
        [&#39;product&#39; =&gt; &#39;Bookcase&#39;, &#39;price&#39; =&gt; 150],
        [&#39;product&#39; =&gt; &#39;Door&#39;, &#39;price&#39; =&gt; 100],
    ]
*/
</code></pre><p><a name="method-wherein"></a></p><h4 id="wherein-collection-method" tabindex="-1"><a class="header-anchor" href="#wherein-collection-method" aria-hidden="true">#</a> <code>whereIn()</code> {.collection-method}</h4><p>该 <code>whereIn</code> 方法会根据包含给定数组的键 / 值对来过滤集合：</p><pre><code>$collection = collect([
    [&#39;product&#39; =&gt; &#39;Desk&#39;, &#39;price&#39; =&gt; 200],
    [&#39;product&#39; =&gt; &#39;Chair&#39;, &#39;price&#39; =&gt; 100],
    [&#39;product&#39; =&gt; &#39;Bookcase&#39;, &#39;price&#39; =&gt; 150],
    [&#39;product&#39; =&gt; &#39;Door&#39;, &#39;price&#39; =&gt; 100],
]);

$filtered = $collection-&gt;whereIn(&#39;price&#39;, [150, 200]);

$filtered-&gt;all();

/*
    [
        [&#39;product&#39; =&gt; &#39;Desk&#39;, &#39;price&#39; =&gt; 200],
        [&#39;product&#39; =&gt; &#39;Bookcase&#39;, &#39;price&#39; =&gt; 150],
    ]
*/
</code></pre><p><code>whereIn</code> 方法在检查项目值时使用 &quot;loose&quot; 比较，这意味着具有整数值的字符串将被视为等于相同值的整数。使用 <a href="#method-whereinstrict"><code>whereInStrict</code></a> 方法使用「strict」比较进行过滤。</p><p><a name="method-whereinstrict"></a></p><h4 id="whereinstrict-collection-method" tabindex="-1"><a class="header-anchor" href="#whereinstrict-collection-method" aria-hidden="true">#</a> <code>whereInStrict()</code> {.collection-method}</h4><p>此方法与 <a href="#method-wherein"><code>whereIn</code></a> 方法具有相同的签名；但是，所有值都使用「strict」比较进行比较。</p><p><a name="method-whereinstanceof"></a></p><h4 id="whereinstanceof-collection-method" tabindex="-1"><a class="header-anchor" href="#whereinstanceof-collection-method" aria-hidden="true">#</a> <code>whereInstanceOf()</code> {.collection-method}</h4><p><code>whereInstanceOf</code> 方法按给定的类类型过滤集合：</p><pre><code>use App\\Models\\User;
use App\\Models\\Post;

$collection = collect([
    new User,
    new User,
    new Post,
]);

$filtered = $collection-&gt;whereInstanceOf(User::class);

$filtered-&gt;all();

// [App\\Models\\User, App\\Models\\User]
</code></pre><p><a name="method-wherenotbetween"></a></p><h4 id="wherenotbetween-collection-method" tabindex="-1"><a class="header-anchor" href="#wherenotbetween-collection-method" aria-hidden="true">#</a> <code>whereNotBetween()</code> {.collection-method}</h4><p><code>whereNotBetween</code> 方法通过确定指定项的值是否超出给定范围来过滤集合：</p><pre><code>$collection = collect([
    [&#39;product&#39; =&gt; &#39;Desk&#39;, &#39;price&#39; =&gt; 200],
    [&#39;product&#39; =&gt; &#39;Chair&#39;, &#39;price&#39; =&gt; 80],
    [&#39;product&#39; =&gt; &#39;Bookcase&#39;, &#39;price&#39; =&gt; 150],
    [&#39;product&#39; =&gt; &#39;Pencil&#39;, &#39;price&#39; =&gt; 30],
    [&#39;product&#39; =&gt; &#39;Door&#39;, &#39;price&#39; =&gt; 100],
]);

$filtered = $collection-&gt;whereNotBetween(&#39;price&#39;, [100, 200]);

$filtered-&gt;all();

/*
    [
        [&#39;product&#39; =&gt; &#39;Chair&#39;, &#39;price&#39; =&gt; 80],
        [&#39;product&#39; =&gt; &#39;Pencil&#39;, &#39;price&#39; =&gt; 30],
    ]
*/
</code></pre><p><a name="method-wherenotin"></a></p><h4 id="wherenotin-collection-method" tabindex="-1"><a class="header-anchor" href="#wherenotin-collection-method" aria-hidden="true">#</a> <code>whereNotIn()</code> {.collection-method}</h4><p><code>whereNotIn</code> 方法从集合中删除具有给定数组中包含的指定项值的元素：</p><pre><code>$collection = collect([
    [&#39;product&#39; =&gt; &#39;Desk&#39;, &#39;price&#39; =&gt; 200],
    [&#39;product&#39; =&gt; &#39;Chair&#39;, &#39;price&#39; =&gt; 100],
    [&#39;product&#39; =&gt; &#39;Bookcase&#39;, &#39;price&#39; =&gt; 150],
    [&#39;product&#39; =&gt; &#39;Door&#39;, &#39;price&#39; =&gt; 100],
]);

$filtered = $collection-&gt;whereNotIn(&#39;price&#39;, [150, 200]);

$filtered-&gt;all();

/*
    [
        [&#39;product&#39; =&gt; &#39;Chair&#39;, &#39;price&#39; =&gt; 100],
        [&#39;product&#39; =&gt; &#39;Door&#39;, &#39;price&#39; =&gt; 100],
    ]
*/
</code></pre><p><code>whereNotIn</code> 方法在检查项目值时使用「loose」比较，这意味着具有整数值的字符串将被视为等于具有相同值的整数。使用 <a href="#method-wherenotinstrict"><code>whereNotInStrict</code></a> 方法使用「strict」比较进行过滤。</p><p><a name="method-wherenotinstrict"></a></p><h4 id="wherenotinstrict-collection-method" tabindex="-1"><a class="header-anchor" href="#wherenotinstrict-collection-method" aria-hidden="true">#</a> <code>whereNotInStrict()</code> {.collection-method}</h4><p>这个方法与 <a href="#method-wherenotin"><code>whereNotIn</code></a> 方法类似；不同的是会使用「严格」模式比较。</p><p><a name="method-wherenotnull"></a></p><h4 id="wherenotnull-collection-method" tabindex="-1"><a class="header-anchor" href="#wherenotnull-collection-method" aria-hidden="true">#</a> <code>whereNotNull()</code> {.collection-method}</h4><p>该 <code>whereNotNull</code> 方法筛选给定键不为 <code>null</code>的项：</p><pre><code>$collection = collect([
    [&#39;name&#39; =&gt; &#39;Desk&#39;],
    [&#39;name&#39; =&gt; null],
    [&#39;name&#39; =&gt; &#39;Bookcase&#39;],
]);

$filtered = $collection-&gt;whereNotNull(&#39;name&#39;);

$filtered-&gt;all();

/*
    [
        [&#39;name&#39; =&gt; &#39;Desk&#39;],
        [&#39;name&#39; =&gt; &#39;Bookcase&#39;],
    ]
*/
</code></pre><p><a name="method-wherenull"></a></p><h4 id="wherenull-collection-method" tabindex="-1"><a class="header-anchor" href="#wherenull-collection-method" aria-hidden="true">#</a> <code>whereNull()</code> {.collection-method}</h4><p>该 <code>whereNull</code> 方法筛选给定键为 <code>null</code>的项：</p><pre><code>$collection = collect([
    [&#39;name&#39; =&gt; &#39;Desk&#39;],
    [&#39;name&#39; =&gt; null],
    [&#39;name&#39; =&gt; &#39;Bookcase&#39;],
]);

$filtered = $collection-&gt;whereNull(&#39;name&#39;);

$filtered-&gt;all();

/*
    [
        [&#39;name&#39; =&gt; null],
    ]
*/
</code></pre><p><a name="method-wrap"></a></p><h4 id="wrap-collection-method" tabindex="-1"><a class="header-anchor" href="#wrap-collection-method" aria-hidden="true">#</a> <code>wrap()</code> {.collection-method}</h4><p>静态 <code>wrap</code> 方法会将给定值封装到集合中：</p><pre><code>use Illuminate\\Support\\Collection;

$collection = Collection::wrap(&#39;John Doe&#39;);

$collection-&gt;all();

// [&#39;John Doe&#39;]

$collection = Collection::wrap([&#39;John Doe&#39;]);

$collection-&gt;all();

// [&#39;John Doe&#39;]

$collection = Collection::wrap(collect(&#39;John Doe&#39;));

$collection-&gt;all();

// [&#39;John Doe&#39;]
</code></pre><p><a name="method-zip"></a></p><h4 id="zip-collection-method" tabindex="-1"><a class="header-anchor" href="#zip-collection-method" aria-hidden="true">#</a> <code>zip()</code> {.collection-method}</h4><p>该 <code>zip</code> 方法在与集合的值对应的索引处合并给定数组的值：</p><pre><code>$collection = collect([&#39;Chair&#39;, &#39;Desk&#39;]);

$zipped = $collection-&gt;zip([100, 200]);

$zipped-&gt;all();

// [[&#39;Chair&#39;, 100], [&#39;Desk&#39;, 200]]
</code></pre><p><a name="higher-order-messages"></a></p><h2 id="higher-order-messages" tabindex="-1"><a class="header-anchor" href="#higher-order-messages" aria-hidden="true">#</a> Higher Order Messages</h2><p>集合也提供对「高阶消息传递」的支持，即集合常见操作的快捷方式。支持高阶消息传递的集合方法有： <a href="#method-average"><code>average</code></a>、<a href="#method-avg"><code>avg</code></a>、<a href="#method-contains"><code>contains</code></a>、<a href="#method-each"><code>each</code></a>、<a href="#method-every"><code>every</code></a>、<a href="#method-filter"><code>filter</code></a>、<a href="#method-first"><code>first</code></a>、<a href="#method-flatmap"><code>flatMap</code></a>、<a href="#method-groupby"><code>groupBy</code></a>、<a href="#method-keyby"><code>keyBy</code></a>、<a href="#method-map"><code>map</code></a>、<a href="#method-max"><code>max</code></a>、<a href="#method-min"><code>min</code></a>、<a href="#method-partition"><code>partition</code></a>、<a href="#method-reject"><code>reject</code></a>、<a href="#method-skipuntil"><code>skipUntil</code></a>、<a href="#method-skipwhile"><code>skipWhile</code></a>、<a href="#method-some"><code>some</code></a>、<a href="#method-sortby"><code>sortBy</code></a>、<a href="#method-sortbydesc"><code>sortByDesc</code></a>、<a href="#method-sum"><code>sum</code></a>、<a href="#method-takeuntil"><code>takeUntil</code></a>、<a href="#method-takeewhile"><code>takeWhile</code></a> 和 <a href="#method-unique"><code>unique</code></a>。</p><p>每个高阶消息都可以作为集合实例上的动态属性进行访问。例如，让我们使用 <code>each</code> 高阶消息来调用集合中每个对象的方法：</p><pre><code>use App\\Models\\User;

$users = User::where(&#39;votes&#39;, &#39;&gt;&#39;, 500)-&gt;get();

$users-&gt;each-&gt;markAsVip();
</code></pre><p>同样，我们可以使用 <code>sum</code> 高阶消息来收集用户集合的「votes」总数：</p><pre><code>$users = User::where(&#39;group&#39;, &#39;Development&#39;)-&gt;get();

return $users-&gt;sum-&gt;votes;
</code></pre><p><a name="lazy-collections"></a></p><h2 id="惰性集合" tabindex="-1"><a class="header-anchor" href="#惰性集合" aria-hidden="true">#</a> 惰性集合</h2><p><a name="lazy-collection-introduction"></a></p><h3 id="介绍-1" tabindex="-1"><a class="header-anchor" href="#介绍-1" aria-hidden="true">#</a> 介绍</h3>`,196),G={href:"https://www.php.net/manual/en/language.generators.overview.php",target:"_blank",rel:"noopener noreferrer"},H=e("code",null,"Collection",-1),V=e("code",null,"LazyCollection",-1),X={href:"https://www.php.net/manual/en/language.generators.overview.php",target:"_blank",rel:"noopener noreferrer"},Y=c(`<p>例如，假设你的应用程序需要处理数 GB 的日志文件，同时利用 Laravel 的集合方法来解析日志。可以使用惰性集合在给定时间仅将文件的一小部分保留在内存中，而不是一次将整个文件读入内存：</p><pre><code>use App\\Models\\LogEntry;
use Illuminate\\Support\\LazyCollection;

LazyCollection::make(function () {
    $handle = fopen(&#39;log.txt&#39;, &#39;r&#39;);

    while (($line = fgets($handle)) !== false) {
        yield $line;
    }
})-&gt;chunk(4)-&gt;map(function (array $lines) {
    return LogEntry::fromLines($lines);
})-&gt;each(function (LogEntry $logEntry) {
    // Process the log entry...
});
</code></pre><p>或者，假设你需要遍历 10,000 个 Eloquent 模型。使用传统 Laravel 集合时，所有 10,000 个 Eloquent 模型必须同时加载到内存中：</p><pre><code>use App\\Models\\User;

$users = User::all()-&gt;filter(function (User $user) {
    return $user-&gt;id &gt; 500;
});
</code></pre><p>但是，查询构建器的 <code>cursor</code> 方法返回一个 <code>LazyCollection</code> 实例。这允许你仍然只对数据库运行一个查询，而且一次只在内存中加载一个 Eloquent 模型。在这个例子中，<code>filter</code> 回调在我们实际单独遍历每个用户之前不会执行，从而可以大幅减少内存使用量：</p><pre><code>use App\\Models\\User;

$users = User::cursor()-&gt;filter(function (User $user) {
    return $user-&gt;id &gt; 500;
});

foreach ($users as $user) {
    echo $user-&gt;id;
}
</code></pre><p><a name="creating-lazy-collections"></a></p><h3 id="创建惰性集合" tabindex="-1"><a class="header-anchor" href="#创建惰性集合" aria-hidden="true">#</a> 创建惰性集合</h3><p>要创建惰性集合实例，你应该将 PHP 生成器函数传递给集合的 <code>make</code> 方法：</p><pre><code>use Illuminate\\Support\\LazyCollection;

LazyCollection::make(function () {
    $handle = fopen(&#39;log.txt&#39;, &#39;r&#39;);

    while (($line = fgets($handle)) !== false) {
        yield $line;
    }
});
</code></pre><p><a name="the-enumerable-contract"></a></p><h3 id="枚举契约" tabindex="-1"><a class="header-anchor" href="#枚举契约" aria-hidden="true">#</a> 枚举契约</h3><p><code>Collection</code> 类上几乎所有可用的方法也可以在 <code>LazyCollection</code> 类上使用。这两个类都实现了 <code>Illuminate\\Support\\Enumerable</code> 契约，它定义了以下方法：</p>`,13),Q=e("div",{class:"collection-method-list",markdown:"1"},[e("p",null,[e("a",{href:"#method-all"},"all"),e("a",{href:"#method-average"},"average"),e("a",{href:"#method-avg"},"avg"),e("a",{href:"#method-chunk"},"chunk"),e("a",{href:"#method-chunkwhile"},"chunkWhile"),e("a",{href:"#method-collapse"},"collapse"),e("a",{href:"#method-collect"},"collect"),e("a",{href:"#method-combine"},"combine"),e("a",{href:"#method-concat"},"concat"),e("a",{href:"#method-contains"},"contains"),e("a",{href:"#method-containsstrict"},"containsStrict"),e("a",{href:"#method-count"},"count"),e("a",{href:"#method-countBy"},"countBy"),e("a",{href:"#method-crossjoin"},"crossJoin"),e("a",{href:"#method-dd"},"dd"),e("a",{href:"#method-diff"},"diff"),e("a",{href:"#method-diffassoc"},"diffAssoc"),e("a",{href:"#method-diffkeys"},"diffKeys"),e("a",{href:"#method-dump"},"dump"),e("a",{href:"#method-duplicates"},"duplicates"),e("a",{href:"#method-duplicatesstrict"},"duplicatesStrict"),e("a",{href:"#method-each"},"each"),e("a",{href:"#method-eachspread"},"eachSpread"),e("a",{href:"#method-every"},"every"),e("a",{href:"#method-except"},"except"),e("a",{href:"#method-filter"},"filter"),e("a",{href:"#method-first"},"first"),e("a",{href:"#method-first-or-fail"},"firstOrFail"),e("a",{href:"#method-first-where"},"firstWhere"),e("a",{href:"#method-flatmap"},"flatMap"),e("a",{href:"#method-flatten"},"flatten"),e("a",{href:"#method-flip"},"flip"),e("a",{href:"#method-forpage"},"forPage"),e("a",{href:"#method-get"},"get"),e("a",{href:"#method-groupby"},"groupBy"),e("a",{href:"#method-has"},"has"),e("a",{href:"#method-implode"},"implode"),e("a",{href:"#method-intersect"},"intersect"),e("a",{href:"#method-intersectAssoc"},"intersectAssoc"),e("a",{href:"#method-intersectbykeys"},"intersectByKeys"),e("a",{href:"#method-isempty"},"isEmpty"),e("a",{href:"#method-isnotempty"},"isNotEmpty"),e("a",{href:"#method-join"},"join"),e("a",{href:"#method-keyby"},"keyBy"),e("a",{href:"#method-keys"},"keys"),e("a",{href:"#method-last"},"last"),e("a",{href:"#method-macro"},"macro"),e("a",{href:"#method-make"},"make"),e("a",{href:"#method-map"},"map"),e("a",{href:"#method-mapinto"},"mapInto"),e("a",{href:"#method-mapspread"},"mapSpread"),e("a",{href:"#method-maptogroups"},"mapToGroups"),e("a",{href:"#method-mapwithkeys"},"mapWithKeys"),e("a",{href:"#method-max"},"max"),e("a",{href:"#method-median"},"median"),e("a",{href:"#method-merge"},"merge"),e("a",{href:"#method-mergerecursive"},"mergeRecursive"),e("a",{href:"#method-min"},"min"),e("a",{href:"#method-mode"},"mode"),e("a",{href:"#method-nth"},"nth"),e("a",{href:"#method-only"},"only"),e("a",{href:"#method-pad"},"pad"),e("a",{href:"#method-partition"},"partition"),e("a",{href:"#method-pipe"},"pipe"),e("a",{href:"#method-pluck"},"pluck"),e("a",{href:"#method-random"},"random"),e("a",{href:"#method-reduce"},"reduce"),e("a",{href:"#method-reject"},"reject"),e("a",{href:"#method-replace"},"replace"),e("a",{href:"#method-replacerecursive"},"replaceRecursive"),e("a",{href:"#method-reverse"},"reverse"),e("a",{href:"#method-search"},"search"),e("a",{href:"#method-shuffle"},"shuffle"),e("a",{href:"#method-skip"},"skip"),e("a",{href:"#method-slice"},"slice"),e("a",{href:"#method-sole"},"sole"),e("a",{href:"#method-some"},"some"),e("a",{href:"#method-sort"},"sort"),e("a",{href:"#method-sortby"},"sortBy"),e("a",{href:"#method-sortbydesc"},"sortByDesc"),e("a",{href:"#method-sortkeys"},"sortKeys"),e("a",{href:"#method-sortkeysdesc"},"sortKeysDesc"),e("a",{href:"#method-split"},"split"),e("a",{href:"#method-sum"},"sum"),e("a",{href:"#method-take"},"take"),e("a",{href:"#method-tap"},"tap"),e("a",{href:"#method-times"},"times"),e("a",{href:"#method-toarray"},"toArray"),e("a",{href:"#method-tojson"},"toJson"),e("a",{href:"#method-union"},"union"),e("a",{href:"#method-unique"},"unique"),e("a",{href:"#method-uniquestrict"},"uniqueStrict"),e("a",{href:"#method-unless"},"unless"),e("a",{href:"#method-unlessempty"},"unlessEmpty"),e("a",{href:"#method-unlessnotempty"},"unlessNotEmpty"),e("a",{href:"#method-unwrap"},"unwrap"),e("a",{href:"#method-values"},"values"),e("a",{href:"#method-when"},"when"),e("a",{href:"#method-whenempty"},"whenEmpty"),e("a",{href:"#method-whennotempty"},"whenNotEmpty"),e("a",{href:"#method-where"},"where"),e("a",{href:"#method-wherestrict"},"whereStrict"),e("a",{href:"#method-wherebetween"},"whereBetween"),e("a",{href:"#method-wherein"},"whereIn"),e("a",{href:"#method-whereinstrict"},"whereInStrict"),e("a",{href:"#method-whereinstanceof"},"whereInstanceOf"),e("a",{href:"#method-wherenotbetween"},"whereNotBetween"),e("a",{href:"#method-wherenotin"},"whereNotIn"),e("a",{href:"#method-wherenotinstrict"},"whereNotInStrict"),e("a",{href:"#method-wrap"},"wrap"),e("a",{href:"#method-zip"},"zip")])],-1),Z=c(`<blockquote><p><strong>注意：<strong>改变集合的方法（例如 <code>shift</code>、<code>pop</code>、<code>prepend</code> 等）在 <code>LazyCollection</code> 类中</strong>不</strong>可用。</p></blockquote><p><a name="lazy-collection-methods"></a></p><h3 id="惰性集合方法" tabindex="-1"><a class="header-anchor" href="#惰性集合方法" aria-hidden="true">#</a> 惰性集合方法</h3><p>除了在 <code>Enumerable</code> 契约中定义的方法外， <code>LazyCollection</code> 类还包含以下方法：</p><p><a name="method-takeUntilTimeout"></a></p><h4 id="takeuntiltimeout-collection-method" tabindex="-1"><a class="header-anchor" href="#takeuntiltimeout-collection-method" aria-hidden="true">#</a> <code>takeUntilTimeout()</code> {.collection-method}</h4><p><code>takeUntilTimeout</code> 方法返回新的惰性集合，它会在给定时间前去枚举集合值，之后集合将停止枚举：</p><pre><code>$lazyCollection = LazyCollection::times(INF)
    -&gt;takeUntilTimeout(now()-&gt;addMinute());

$lazyCollection-&gt;each(function (int $number) {
    dump($number);

    sleep(1);
});

// 1
// 2
// ...
// 58
// 59
</code></pre><p>为了具体阐述此方法，请设想一个使用游标从数据库提交发票的例子。你可以定义一个 <a href="./scheduling">计划任务</a>，它每十五分钟执行一次，并且只执行发票提交操作的最大时间是 14 分钟：</p><pre><code>use App\\Models\\Invoice;
use Illuminate\\Support\\Carbon;

Invoice::pending()-&gt;cursor()
    -&gt;takeUntilTimeout(
        Carbon::createFromTimestamp(LARAVEL_START)-&gt;add(14, &#39;minutes&#39;)
    )
    -&gt;each(fn (Invoice $invoice) =&gt; $invoice-&gt;submit());
</code></pre><p><a name="method-tapEach"></a></p><h4 id="tapeach-collection-method" tabindex="-1"><a class="header-anchor" href="#tapeach-collection-method" aria-hidden="true">#</a> <code>tapEach()</code> {.collection-method}</h4><p>当 <code>each</code> 方法为集合中每一个元素调用给定回调时， <code>tapEach</code> 方法仅调用给定回调，因为这些元素正在逐个从列表中拉出：</p><pre><code>// 没有任何输出
$lazyCollection = LazyCollection::times(INF)-&gt;tapEach(function (int $value) {
    dump($value);
});

// 打印出三条数据
$array = $lazyCollection-&gt;take(3)-&gt;all();

// 1
// 2
// 3
</code></pre><p><a name="method-remember"></a></p><h4 id="remember-collection-method" tabindex="-1"><a class="header-anchor" href="#remember-collection-method" aria-hidden="true">#</a> <code>remember()</code> {.collection-method}</h4><p><code>remember</code> 方法返回一个新的惰性集合，这个集合已经记住（缓存）已枚举的所有值，当再次枚举该集合时不会获取它们：</p><pre><code>// 没执行任何查询
$users = User::cursor()-&gt;remember();

//  执行了查询操作
// The first 5 users are hydrated from the database...
$users-&gt;take(5)-&gt;all();

// 前 5 个用户数据从缓存中获取
// The rest are hydrated from the database...
$users-&gt;take(20)-&gt;all();
</code></pre>`,18);function ee(oe,te){const t=a("ExternalLinkIcon");return d(),r("div",null,[h,p,s,e("p",null,[m,o(" 方法返回给定键的 "),e("a",u,[o("平均值"),n(t)]),o("：")]),g,f,$,y,k,e("p",null,[o("当使用诸如 "),e("a",b,[o("Bootstrap"),n(t)]),o(" 之类的网格系统时，此方法在 "),w,o(" 中特别有用。例如，假设你有一组 "),x,o(" 模型要在网格中显示：")]),v,e("p",null,[_,o(" 方法返回给定键的 "),e("a",C,[o("中值"),n(t)]),o("：")]),q,e("p",null,[D,o(" 方法返回给定键的 "),e("a",B,[o("mode 值"),n(t)]),o("：")]),I,e("blockquote",null,[e("p",null,[o("**技巧：**使用 "),e("a",S,[o("Eloquent Collections"),n(t)]),o(" 时会修改此方法的行为。")])]),A,E,e("p",null,[J,o(" 方法将用给定的值填充数组，直到数组达到指定的大小。此方法的行为类似于 "),e("a",N,[o("array_pad"),n(t)]),o(" PHP 函数。")]),z,e("p",null,[o("如果你的排序需求更高级，你可以使用自己的算法将回调传递给「排序」。参考 PHP 文档"),e("a",R,[T,n(t)]),o("，就是集合的"),U,o("方法 调用内部使用。")]),P,e("p",null,[j,o(" 方法接受 "),e("a",O,[o("sort flags"),n(t)]),o(" 作为其第二个参数：")]),L,e("p",null,[o("回调必须是返回小于、等于或大于零的整数的比较函数。有关更多信息，请参阅 "),e("a",M,[K,n(t)]),o(" 上的 PHP 文档，这是 PHP 函数 "),W,o(" 方法在内部使用。")]),F,e("blockquote",null,[e("p",null,[o("**注意：**在进一步了解 Laravel 的惰性集合之前，花点时间熟悉一下 "),e("a",G,[o("PHP 生成器"),n(t)]),o(".")])]),e("p",null,[o("为了补充已经强大的 "),H,o(" 类，"),V,o(" 类利用 PHP 的 "),e("a",X,[o("generators"),n(t)]),o(" 允许你使用非常 大型数据集，同时保持较低的内存使用率。")]),Y,Q,Z])}const le=l(i,[["render",ee],["__file","collections.html.vue"]]);export{le as default};
