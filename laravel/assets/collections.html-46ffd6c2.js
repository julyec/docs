import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{r as l,o as i,c as r,b as e,d as o,e as c,a as t}from"./app-06635a3b.js";const d={},h=t(`<h1 id="collections" tabindex="-1"><a class="header-anchor" href="#collections" aria-hidden="true">#</a> Collections</h1><ul><li><a href="#introduction">Introduction</a><ul><li><a href="#creating-collections">Creating Collections</a></li><li><a href="#extending-collections">Extending Collections</a></li></ul></li><li><a href="#available-methods">Available Methods</a></li><li><a href="#higher-order-messages">Higher Order Messages</a></li><li><a href="#lazy-collections">Lazy Collections</a><ul><li><a href="#lazy-collection-introduction">Introduction</a></li><li><a href="#creating-lazy-collections">Creating Lazy Collections</a></li><li><a href="#the-enumerable-contract">The Enumerable Contract</a></li><li><a href="#lazy-collection-methods">Lazy Collection Methods</a></li></ul></li></ul><p><a name="introduction"></a></p><h2 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h2><p>The <code>Illuminate\\Support\\Collection</code> class provides a fluent, convenient wrapper for working with arrays of data. For example, check out the following code. We&#39;ll use the <code>collect</code> helper to create a new collection instance from the array, run the <code>strtoupper</code> function on each element, and then remove all empty elements:</p><pre><code>$collection = collect([&#39;taylor&#39;, &#39;abigail&#39;, null])-&gt;map(function (string $name) {
    return strtoupper($name);
})-&gt;reject(function (string $name) {
    return empty($name);
});
</code></pre><p>As you can see, the <code>Collection</code> class allows you to chain its methods to perform fluent mapping and reducing of the underlying array. In general, collections are immutable, meaning every <code>Collection</code> method returns an entirely new <code>Collection</code> instance.</p><p><a name="creating-collections"></a></p><h3 id="creating-collections" tabindex="-1"><a class="header-anchor" href="#creating-collections" aria-hidden="true">#</a> Creating Collections</h3><p>As mentioned above, the <code>collect</code> helper returns a new <code>Illuminate\\Support\\Collection</code> instance for the given array. So, creating a collection is as simple as:</p><pre><code>$collection = collect([1, 2, 3]);
</code></pre><blockquote><p><strong>Note</strong><br> The results of <a href="./eloquent">Eloquent</a> queries are always returned as <code>Collection</code> instances.</p></blockquote><p><a name="extending-collections"></a></p><h3 id="extending-collections" tabindex="-1"><a class="header-anchor" href="#extending-collections" aria-hidden="true">#</a> Extending Collections</h3><p>Collections are &quot;macroable&quot;, which allows you to add additional methods to the <code>Collection</code> class at run time. The <code>Illuminate\\Support\\Collection</code> class&#39; <code>macro</code> method accepts a closure that will be executed when your macro is called. The macro closure may access the collection&#39;s other methods via <code>$this</code>, just as if it were a real method of the collection class. For example, the following code adds a <code>toUpper</code> method to the <code>Collection</code> class:</p><pre><code>use Illuminate\\Support\\Collection;
use Illuminate\\Support\\Str;

Collection::macro(&#39;toUpper&#39;, function () {
    return $this-&gt;map(function (string $value) {
        return Str::upper($value);
    });
});

$collection = collect([&#39;first&#39;, &#39;second&#39;]);

$upper = $collection-&gt;toUpper();

// [&#39;FIRST&#39;, &#39;SECOND&#39;]
</code></pre><p>Typically, you should declare collection macros in the <code>boot</code> method of a <a href="./providers">service provider</a>.</p><p><a name="macro-arguments"></a></p><h4 id="macro-arguments" tabindex="-1"><a class="header-anchor" href="#macro-arguments" aria-hidden="true">#</a> Macro Arguments</h4><p>If necessary, you may define macros that accept additional arguments:</p><pre><code>use Illuminate\\Support\\Collection;
use Illuminate\\Support\\Facades\\Lang;

Collection::macro(&#39;toLocale&#39;, function (string $locale) {
    return $this-&gt;map(function (string $value) use ($locale) {
        return Lang::get($value, [], $locale);
    });
});

$collection = collect([&#39;first&#39;, &#39;second&#39;]);

$translated = $collection-&gt;toLocale(&#39;es&#39;);
</code></pre><p><a name="available-methods"></a></p><h2 id="available-methods" tabindex="-1"><a class="header-anchor" href="#available-methods" aria-hidden="true">#</a> Available Methods</h2><p>For the majority of the remaining collection documentation, we&#39;ll discuss each method available on the <code>Collection</code> class. Remember, all of these methods may be chained to fluently manipulate the underlying array. Furthermore, almost every method returns a new <code>Collection</code> instance, allowing you to preserve the original copy of the collection when necessary:</p>`,24),s=e("div",{class:"collection-method-list",markdown:"1"},[e("p",null,[e("a",{href:"#method-all"},"all"),e("a",{href:"#method-average"},"average"),e("a",{href:"#method-avg"},"avg"),e("a",{href:"#method-chunk"},"chunk"),e("a",{href:"#method-chunkwhile"},"chunkWhile"),e("a",{href:"#method-collapse"},"collapse"),e("a",{href:"#method-collect"},"collect"),e("a",{href:"#method-combine"},"combine"),e("a",{href:"#method-concat"},"concat"),e("a",{href:"#method-contains"},"contains"),e("a",{href:"#method-containsoneitem"},"containsOneItem"),e("a",{href:"#method-containsstrict"},"containsStrict"),e("a",{href:"#method-count"},"count"),e("a",{href:"#method-countBy"},"countBy"),e("a",{href:"#method-crossjoin"},"crossJoin"),e("a",{href:"#method-dd"},"dd"),e("a",{href:"#method-diff"},"diff"),e("a",{href:"#method-diffassoc"},"diffAssoc"),e("a",{href:"#method-diffassocusing"},"diffAssocUsing"),e("a",{href:"#method-diffkeys"},"diffKeys"),e("a",{href:"#method-doesntcontain"},"doesntContain"),e("a",{href:"#method-dot"},"dot"),e("a",{href:"#method-dump"},"dump"),e("a",{href:"#method-duplicates"},"duplicates"),e("a",{href:"#method-duplicatesstrict"},"duplicatesStrict"),e("a",{href:"#method-each"},"each"),e("a",{href:"#method-eachspread"},"eachSpread"),e("a",{href:"#method-ensure"},"ensure"),e("a",{href:"#method-every"},"every"),e("a",{href:"#method-except"},"except"),e("a",{href:"#method-filter"},"filter"),e("a",{href:"#method-first"},"first"),e("a",{href:"#method-first-or-fail"},"firstOrFail"),e("a",{href:"#method-first-where"},"firstWhere"),e("a",{href:"#method-flatmap"},"flatMap"),e("a",{href:"#method-flatten"},"flatten"),e("a",{href:"#method-flip"},"flip"),e("a",{href:"#method-forget"},"forget"),e("a",{href:"#method-forpage"},"forPage"),e("a",{href:"#method-get"},"get"),e("a",{href:"#method-groupby"},"groupBy"),e("a",{href:"#method-has"},"has"),e("a",{href:"#method-hasany"},"hasAny"),e("a",{href:"#method-implode"},"implode"),e("a",{href:"#method-intersect"},"intersect"),e("a",{href:"#method-intersectAssoc"},"intersectAssoc"),e("a",{href:"#method-intersectbykeys"},"intersectByKeys"),e("a",{href:"#method-isempty"},"isEmpty"),e("a",{href:"#method-isnotempty"},"isNotEmpty"),e("a",{href:"#method-join"},"join"),e("a",{href:"#method-keyby"},"keyBy"),e("a",{href:"#method-keys"},"keys"),e("a",{href:"#method-last"},"last"),e("a",{href:"#method-lazy"},"lazy"),e("a",{href:"#method-macro"},"macro"),e("a",{href:"#method-make"},"make"),e("a",{href:"#method-map"},"map"),e("a",{href:"#method-mapinto"},"mapInto"),e("a",{href:"#method-mapspread"},"mapSpread"),e("a",{href:"#method-maptogroups"},"mapToGroups"),e("a",{href:"#method-mapwithkeys"},"mapWithKeys"),e("a",{href:"#method-max"},"max"),e("a",{href:"#method-median"},"median"),e("a",{href:"#method-merge"},"merge"),e("a",{href:"#method-mergerecursive"},"mergeRecursive"),e("a",{href:"#method-min"},"min"),e("a",{href:"#method-mode"},"mode"),e("a",{href:"#method-nth"},"nth"),e("a",{href:"#method-only"},"only"),e("a",{href:"#method-pad"},"pad"),e("a",{href:"#method-partition"},"partition"),e("a",{href:"#method-percentage"},"percentage"),e("a",{href:"#method-pipe"},"pipe"),e("a",{href:"#method-pipeinto"},"pipeInto"),e("a",{href:"#method-pipethrough"},"pipeThrough"),e("a",{href:"#method-pluck"},"pluck"),e("a",{href:"#method-pop"},"pop"),e("a",{href:"#method-prepend"},"prepend"),e("a",{href:"#method-pull"},"pull"),e("a",{href:"#method-push"},"push"),e("a",{href:"#method-put"},"put"),e("a",{href:"#method-random"},"random"),e("a",{href:"#method-range"},"range"),e("a",{href:"#method-reduce"},"reduce"),e("a",{href:"#method-reduce-spread"},"reduceSpread"),e("a",{href:"#method-reject"},"reject"),e("a",{href:"#method-replace"},"replace"),e("a",{href:"#method-replacerecursive"},"replaceRecursive"),e("a",{href:"#method-reverse"},"reverse"),e("a",{href:"#method-search"},"search"),e("a",{href:"#method-shift"},"shift"),e("a",{href:"#method-shuffle"},"shuffle"),e("a",{href:"#method-skip"},"skip"),e("a",{href:"#method-skipuntil"},"skipUntil"),e("a",{href:"#method-skipwhile"},"skipWhile"),e("a",{href:"#method-slice"},"slice"),e("a",{href:"#method-sliding"},"sliding"),e("a",{href:"#method-sole"},"sole"),e("a",{href:"#method-some"},"some"),e("a",{href:"#method-sort"},"sort"),e("a",{href:"#method-sortby"},"sortBy"),e("a",{href:"#method-sortbydesc"},"sortByDesc"),e("a",{href:"#method-sortdesc"},"sortDesc"),e("a",{href:"#method-sortkeys"},"sortKeys"),e("a",{href:"#method-sortkeysdesc"},"sortKeysDesc"),e("a",{href:"#method-sortkeysusing"},"sortKeysUsing"),e("a",{href:"#method-splice"},"splice"),e("a",{href:"#method-split"},"split"),e("a",{href:"#method-splitin"},"splitIn"),e("a",{href:"#method-sum"},"sum"),e("a",{href:"#method-take"},"take"),e("a",{href:"#method-takeuntil"},"takeUntil"),e("a",{href:"#method-takewhile"},"takeWhile"),e("a",{href:"#method-tap"},"tap"),e("a",{href:"#method-times"},"times"),e("a",{href:"#method-toarray"},"toArray"),e("a",{href:"#method-tojson"},"toJson"),e("a",{href:"#method-transform"},"transform"),e("a",{href:"#method-undot"},"undot"),e("a",{href:"#method-union"},"union"),e("a",{href:"#method-unique"},"unique"),e("a",{href:"#method-uniquestrict"},"uniqueStrict"),e("a",{href:"#method-unless"},"unless"),e("a",{href:"#method-unlessempty"},"unlessEmpty"),e("a",{href:"#method-unlessnotempty"},"unlessNotEmpty"),e("a",{href:"#method-unwrap"},"unwrap"),e("a",{href:"#method-value"},"value"),e("a",{href:"#method-values"},"values"),e("a",{href:"#method-when"},"when"),e("a",{href:"#method-whenempty"},"whenEmpty"),e("a",{href:"#method-whennotempty"},"whenNotEmpty"),e("a",{href:"#method-where"},"where"),e("a",{href:"#method-wherestrict"},"whereStrict"),e("a",{href:"#method-wherebetween"},"whereBetween"),e("a",{href:"#method-wherein"},"whereIn"),e("a",{href:"#method-whereinstrict"},"whereInStrict"),e("a",{href:"#method-whereinstanceof"},"whereInstanceOf"),e("a",{href:"#method-wherenotbetween"},"whereNotBetween"),e("a",{href:"#method-wherenotin"},"whereNotIn"),e("a",{href:"#method-wherenotinstrict"},"whereNotInStrict"),e("a",{href:"#method-wherenotnull"},"whereNotNull"),e("a",{href:"#method-wherenull"},"whereNull"),e("a",{href:"#method-wrap"},"wrap"),e("a",{href:"#method-zip"},"zip")])],-1),p=t(`<p><a name="method-listing"></a></p><h2 id="method-listing" tabindex="-1"><a class="header-anchor" href="#method-listing" aria-hidden="true">#</a> Method Listing</h2><p><a name="method-all"></a></p><h4 id="all-collection-method-first-collection-method" tabindex="-1"><a class="header-anchor" href="#all-collection-method-first-collection-method" aria-hidden="true">#</a> <code>all()</code> {.collection-method .first-collection-method}</h4><p>The <code>all</code> method returns the underlying array represented by the collection:</p><pre><code>collect([1, 2, 3])-&gt;all();

// [1, 2, 3]
</code></pre><p><a name="method-average"></a></p><h4 id="average-collection-method" tabindex="-1"><a class="header-anchor" href="#average-collection-method" aria-hidden="true">#</a> <code>average()</code> {.collection-method}</h4><p>Alias for the <a href="#method-avg"><code>avg</code></a> method.</p><p><a name="method-avg"></a></p><h4 id="avg-collection-method" tabindex="-1"><a class="header-anchor" href="#avg-collection-method" aria-hidden="true">#</a> <code>avg()</code> {.collection-method}</h4>`,11),m=e("code",null,"avg",-1),u={href:"https://en.wikipedia.org/wiki/Average",target:"_blank",rel:"noopener noreferrer"},g=t(`<pre><code>$average = collect([
    [&#39;foo&#39; =&gt; 10],
    [&#39;foo&#39; =&gt; 10],
    [&#39;foo&#39; =&gt; 20],
    [&#39;foo&#39; =&gt; 40]
])-&gt;avg(&#39;foo&#39;);

// 20

$average = collect([1, 1, 2, 4])-&gt;avg();

// 2
</code></pre><p><a name="method-chunk"></a></p><h4 id="chunk-collection-method" tabindex="-1"><a class="header-anchor" href="#chunk-collection-method" aria-hidden="true">#</a> <code>chunk()</code> {.collection-method}</h4><p>The <code>chunk</code> method breaks the collection into multiple, smaller collections of a given size:</p><pre><code>$collection = collect([1, 2, 3, 4, 5, 6, 7]);

$chunks = $collection-&gt;chunk(4);

$chunks-&gt;all();

// [[1, 2, 3, 4], [5, 6, 7]]
</code></pre>`,5),f=e("a",{href:"./views"},"views",-1),y={href:"https://getbootstrap.com/docs/4.1/layout/grid/",target:"_blank",rel:"noopener noreferrer"},$=e("a",{href:"./eloquent"},"Eloquent",-1),b=t(`<div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>@foreach ($products-&gt;chunk(3) as $chunk)
    &lt;div class=&quot;row&quot;&gt;
        @foreach ($chunk as $product)
            &lt;div class=&quot;col-xs-4&quot;&gt;{{ $product-&gt;name }}&lt;/div&gt;
        @endforeach
    &lt;/div&gt;
@endforeach
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="method-chunkwhile"></a></p><h4 id="chunkwhile-collection-method" tabindex="-1"><a class="header-anchor" href="#chunkwhile-collection-method" aria-hidden="true">#</a> <code>chunkWhile()</code> {.collection-method}</h4><p>The <code>chunkWhile</code> method breaks the collection into multiple, smaller collections based on the evaluation of the given callback. The <code>$chunk</code> variable passed to the closure may be used to inspect the previous element:</p><pre><code>$collection = collect(str_split(&#39;AABBCCCD&#39;));

$chunks = $collection-&gt;chunkWhile(function (string $value, int $key, Collection $chunk) {
    return $value === $chunk-&gt;last();
});

$chunks-&gt;all();

// [[&#39;A&#39;, &#39;A&#39;], [&#39;B&#39;, &#39;B&#39;], [&#39;C&#39;, &#39;C&#39;, &#39;C&#39;], [&#39;D&#39;]]
</code></pre><p><a name="method-collapse"></a></p><h4 id="collapse-collection-method" tabindex="-1"><a class="header-anchor" href="#collapse-collection-method" aria-hidden="true">#</a> <code>collapse()</code> {.collection-method}</h4><p>The <code>collapse</code> method collapses a collection of arrays into a single, flat collection:</p><pre><code>$collection = collect([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
]);

$collapsed = $collection-&gt;collapse();

$collapsed-&gt;all();

// [1, 2, 3, 4, 5, 6, 7, 8, 9]
</code></pre><p><a name="method-collect"></a></p><h4 id="collect-collection-method" tabindex="-1"><a class="header-anchor" href="#collect-collection-method" aria-hidden="true">#</a> <code>collect()</code> {.collection-method}</h4><p>The <code>collect</code> method returns a new <code>Collection</code> instance with the items currently in the collection:</p><pre><code>$collectionA = collect([1, 2, 3]);

$collectionB = $collectionA-&gt;collect();

$collectionB-&gt;all();

// [1, 2, 3]
</code></pre><p>The <code>collect</code> method is primarily useful for converting <a href="#lazy-collections">lazy collections</a> into standard <code>Collection</code> instances:</p><pre><code>$lazyCollection = LazyCollection::make(function () {
    yield 1;
    yield 2;
    yield 3;
});

$collection = $lazyCollection-&gt;collect();

$collection::class;

// &#39;Illuminate\\Support\\Collection&#39;

$collection-&gt;all();

// [1, 2, 3]
</code></pre><blockquote><p><strong>Note</strong><br> The <code>collect</code> method is especially useful when you have an instance of <code>Enumerable</code> and need a non-lazy collection instance. Since <code>collect()</code> is part of the <code>Enumerable</code> contract, you can safely use it to get a <code>Collection</code> instance.</p></blockquote><p><a name="method-combine"></a></p><h4 id="combine-collection-method" tabindex="-1"><a class="header-anchor" href="#combine-collection-method" aria-hidden="true">#</a> <code>combine()</code> {.collection-method}</h4><p>The <code>combine</code> method combines the values of the collection, as keys, with the values of another array or collection:</p><pre><code>$collection = collect([&#39;name&#39;, &#39;age&#39;]);

$combined = $collection-&gt;combine([&#39;George&#39;, 29]);

$combined-&gt;all();

// [&#39;name&#39; =&gt; &#39;George&#39;, &#39;age&#39; =&gt; 29]
</code></pre><p><a name="method-concat"></a></p><h4 id="concat-collection-method" tabindex="-1"><a class="header-anchor" href="#concat-collection-method" aria-hidden="true">#</a> <code>concat()</code> {.collection-method}</h4><p>The <code>concat</code> method appends the given <code>array</code> or collection&#39;s values onto the end of another collection:</p><pre><code>$collection = collect([&#39;John Doe&#39;]);

$concatenated = $collection-&gt;concat([&#39;Jane Doe&#39;])-&gt;concat([&#39;name&#39; =&gt; &#39;Johnny Doe&#39;]);

$concatenated-&gt;all();

// [&#39;John Doe&#39;, &#39;Jane Doe&#39;, &#39;Johnny Doe&#39;]
</code></pre><p>The <code>concat</code> method numerically reindexes keys for items concatenated onto the original collection. To maintain keys in associative collections, see the <a href="#method-merge">merge</a> method.</p><p><a name="method-contains"></a></p><h4 id="contains-collection-method" tabindex="-1"><a class="header-anchor" href="#contains-collection-method" aria-hidden="true">#</a> <code>contains()</code> {.collection-method}</h4><p>The <code>contains</code> method determines whether the collection contains a given item. You may pass a closure to the <code>contains</code> method to determine if an element exists in the collection matching a given truth test:</p><pre><code>$collection = collect([1, 2, 3, 4, 5]);

$collection-&gt;contains(function (int $value, int $key) {
    return $value &gt; 5;
});

// false
</code></pre><p>Alternatively, you may pass a string to the <code>contains</code> method to determine whether the collection contains a given item value:</p><pre><code>$collection = collect([&#39;name&#39; =&gt; &#39;Desk&#39;, &#39;price&#39; =&gt; 100]);

$collection-&gt;contains(&#39;Desk&#39;);

// true

$collection-&gt;contains(&#39;New York&#39;);

// false
</code></pre><p>You may also pass a key / value pair to the <code>contains</code> method, which will determine if the given pair exists in the collection:</p><pre><code>$collection = collect([
    [&#39;product&#39; =&gt; &#39;Desk&#39;, &#39;price&#39; =&gt; 200],
    [&#39;product&#39; =&gt; &#39;Chair&#39;, &#39;price&#39; =&gt; 100],
]);

$collection-&gt;contains(&#39;product&#39;, &#39;Bookcase&#39;);

// false
</code></pre><p>The <code>contains</code> method uses &quot;loose&quot; comparisons when checking item values, meaning a string with an integer value will be considered equal to an integer of the same value. Use the <a href="#method-containsstrict"><code>containsStrict</code></a> method to filter using &quot;strict&quot; comparisons.</p><p>For the inverse of <code>contains</code>, see the <a href="#method-doesntcontain">doesntContain</a> method.</p><p><a name="method-containsoneitem"></a></p><h4 id="containsoneitem-collection-method" tabindex="-1"><a class="header-anchor" href="#containsoneitem-collection-method" aria-hidden="true">#</a> <code>containsOneItem()</code> {.collection-method}</h4><p>The <code>containsOneItem</code> method determines whether the collection contains a single item:</p><pre><code>collect([])-&gt;containsOneItem();

// false

collect([&#39;1&#39;])-&gt;containsOneItem();

// true

collect([&#39;1&#39;, &#39;2&#39;])-&gt;containsOneItem();

// false
</code></pre><p><a name="method-containsstrict"></a></p><h4 id="containsstrict-collection-method" tabindex="-1"><a class="header-anchor" href="#containsstrict-collection-method" aria-hidden="true">#</a> <code>containsStrict()</code> {.collection-method}</h4><p>This method has the same signature as the <a href="#method-contains"><code>contains</code></a> method; however, all values are compared using &quot;strict&quot; comparisons.</p><blockquote><p><strong>Note</strong><br> This method&#39;s behavior is modified when using <a href="./eloquent-collections#method-contains">Eloquent Collections</a>.</p></blockquote><p><a name="method-count"></a></p><h4 id="count-collection-method" tabindex="-1"><a class="header-anchor" href="#count-collection-method" aria-hidden="true">#</a> <code>count()</code> {.collection-method}</h4><p>The <code>count</code> method returns the total number of items in the collection:</p><pre><code>$collection = collect([1, 2, 3, 4]);

$collection-&gt;count();

// 4
</code></pre><p><a name="method-countBy"></a></p><h4 id="countby-collection-method" tabindex="-1"><a class="header-anchor" href="#countby-collection-method" aria-hidden="true">#</a> <code>countBy()</code> {.collection-method}</h4><p>The <code>countBy</code> method counts the occurrences of values in the collection. By default, the method counts the occurrences of every element, allowing you to count certain &quot;types&quot; of elements in the collection:</p><pre><code>$collection = collect([1, 2, 2, 2, 3]);

$counted = $collection-&gt;countBy();

$counted-&gt;all();

// [1 =&gt; 1, 2 =&gt; 3, 3 =&gt; 1]
</code></pre><p>You pass a closure to the <code>countBy</code> method to count all items by a custom value:</p><pre><code>$collection = collect([&#39;alice@gmail.com&#39;, &#39;bob@yahoo.com&#39;, &#39;carlos@gmail.com&#39;]);

$counted = $collection-&gt;countBy(function (string $email) {
    return substr(strrchr($email, &quot;@&quot;), 1);
});

$counted-&gt;all();

// [&#39;gmail.com&#39; =&gt; 2, &#39;yahoo.com&#39; =&gt; 1]
</code></pre><p><a name="method-crossjoin"></a></p><h4 id="crossjoin-collection-method" tabindex="-1"><a class="header-anchor" href="#crossjoin-collection-method" aria-hidden="true">#</a> <code>crossJoin()</code> {.collection-method}</h4><p>The <code>crossJoin</code> method cross joins the collection&#39;s values among the given arrays or collections, returning a Cartesian product with all possible permutations:</p><pre><code>$collection = collect([1, 2]);

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
</code></pre><p><a name="method-dd"></a></p><h4 id="dd-collection-method" tabindex="-1"><a class="header-anchor" href="#dd-collection-method" aria-hidden="true">#</a> <code>dd()</code> {.collection-method}</h4><p>The <code>dd</code> method dumps the collection&#39;s items and ends execution of the script:</p><pre><code>$collection = collect([&#39;John Doe&#39;, &#39;Jane Doe&#39;]);

$collection-&gt;dd();

/*
    Collection {
        #items: array:2 [
            0 =&gt; &quot;John Doe&quot;
            1 =&gt; &quot;Jane Doe&quot;
        ]
    }
*/
</code></pre><p>If you do not want to stop executing the script, use the <a href="#method-dump"><code>dump</code></a> method instead.</p><p><a name="method-diff"></a></p><h4 id="diff-collection-method" tabindex="-1"><a class="header-anchor" href="#diff-collection-method" aria-hidden="true">#</a> <code>diff()</code> {.collection-method}</h4><p>The <code>diff</code> method compares the collection against another collection or a plain PHP <code>array</code> based on its values. This method will return the values in the original collection that are not present in the given collection:</p><pre><code>$collection = collect([1, 2, 3, 4, 5]);

$diff = $collection-&gt;diff([2, 4, 6, 8]);

$diff-&gt;all();

// [1, 3, 5]
</code></pre><blockquote><p><strong>Note</strong><br> This method&#39;s behavior is modified when using <a href="./eloquent-collections#method-diff">Eloquent Collections</a>.</p></blockquote><p><a name="method-diffassoc"></a></p><h4 id="diffassoc-collection-method" tabindex="-1"><a class="header-anchor" href="#diffassoc-collection-method" aria-hidden="true">#</a> <code>diffAssoc()</code> {.collection-method}</h4><p>The <code>diffAssoc</code> method compares the collection against another collection or a plain PHP <code>array</code> based on its keys and values. This method will return the key / value pairs in the original collection that are not present in the given collection:</p><pre><code>$collection = collect([
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
</code></pre><p><a name="method-diffassocusing"></a></p><h4 id="diffassocusing-collection-method" tabindex="-1"><a class="header-anchor" href="#diffassocusing-collection-method" aria-hidden="true">#</a> <code>diffAssocUsing()</code> {.collection-method}</h4><p>Unlike <code>diffAssoc</code>, <code>diffAssocUsing</code> accepts a user supplied callback function for the indices comparison:</p><pre><code>$collection = collect([
    &#39;color&#39; =&gt; &#39;orange&#39;,
    &#39;type&#39; =&gt; &#39;fruit&#39;,
    &#39;remain&#39; =&gt; 6,
]);

$diff = $collection-&gt;diffAssocUsing([
    &#39;Color&#39; =&gt; &#39;yellow&#39;,
    &#39;Type&#39; =&gt; &#39;fruit&#39;,
    &#39;Remain&#39; =&gt; 3,
], &#39;strnatcasecmp&#39;);

$diff-&gt;all();

// [&#39;color&#39; =&gt; &#39;orange&#39;, &#39;remain&#39; =&gt; 6]
</code></pre>`,75),k={href:"https://www.php.net/array_diff_uassoc#refsect1-function.array-diff-uassoc-parameters",target:"_blank",rel:"noopener noreferrer"},v=e("code",null,"array_diff_uassoc",-1),w=e("code",null,"diffAssocUsing",-1),x=t(`<p><a name="method-diffkeys"></a></p><h4 id="diffkeys-collection-method" tabindex="-1"><a class="header-anchor" href="#diffkeys-collection-method" aria-hidden="true">#</a> <code>diffKeys()</code> {.collection-method}</h4><p>The <code>diffKeys</code> method compares the collection against another collection or a plain PHP <code>array</code> based on its keys. This method will return the key / value pairs in the original collection that are not present in the given collection:</p><pre><code>$collection = collect([
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
</code></pre><p><a name="method-doesntcontain"></a></p><h4 id="doesntcontain-collection-method" tabindex="-1"><a class="header-anchor" href="#doesntcontain-collection-method" aria-hidden="true">#</a> <code>doesntContain()</code> {.collection-method}</h4><p>The <code>doesntContain</code> method determines whether the collection does not contain a given item. You may pass a closure to the <code>doesntContain</code> method to determine if an element does not exist in the collection matching a given truth test:</p><pre><code>$collection = collect([1, 2, 3, 4, 5]);

$collection-&gt;doesntContain(function (int $value, int $key) {
    return $value &lt; 5;
});

// false
</code></pre><p>Alternatively, you may pass a string to the <code>doesntContain</code> method to determine whether the collection does not contain a given item value:</p><pre><code>$collection = collect([&#39;name&#39; =&gt; &#39;Desk&#39;, &#39;price&#39; =&gt; 100]);

$collection-&gt;doesntContain(&#39;Table&#39;);

// true

$collection-&gt;doesntContain(&#39;Desk&#39;);

// false
</code></pre><p>You may also pass a key / value pair to the <code>doesntContain</code> method, which will determine if the given pair does not exist in the collection:</p><pre><code>$collection = collect([
    [&#39;product&#39; =&gt; &#39;Desk&#39;, &#39;price&#39; =&gt; 200],
    [&#39;product&#39; =&gt; &#39;Chair&#39;, &#39;price&#39; =&gt; 100],
]);

$collection-&gt;doesntContain(&#39;product&#39;, &#39;Bookcase&#39;);

// true
</code></pre><p>The <code>doesntContain</code> method uses &quot;loose&quot; comparisons when checking item values, meaning a string with an integer value will be considered equal to an integer of the same value.</p><p><a name="method-dot"></a></p><h4 id="dot-collection-method" tabindex="-1"><a class="header-anchor" href="#dot-collection-method" aria-hidden="true">#</a> <code>dot()</code> {.collection-method}</h4><p>The <code>dot</code> method flattens a multi-dimensional collection into a single level collection that uses &quot;dot&quot; notation to indicate depth:</p><pre><code>$collection = collect([&#39;products&#39; =&gt; [&#39;desk&#39; =&gt; [&#39;price&#39; =&gt; 100]]]);

$flattened = $collection-&gt;dot();

$flattened-&gt;all();

// [&#39;products.desk.price&#39; =&gt; 100]
</code></pre><p><a name="method-dump"></a></p><h4 id="dump-collection-method" tabindex="-1"><a class="header-anchor" href="#dump-collection-method" aria-hidden="true">#</a> <code>dump()</code> {.collection-method}</h4><p>The <code>dump</code> method dumps the collection&#39;s items:</p><pre><code>$collection = collect([&#39;John Doe&#39;, &#39;Jane Doe&#39;]);

$collection-&gt;dump();

/*
    Collection {
        #items: array:2 [
            0 =&gt; &quot;John Doe&quot;
            1 =&gt; &quot;Jane Doe&quot;
        ]
    }
*/
</code></pre><p>If you want to stop executing the script after dumping the collection, use the <a href="#method-dd"><code>dd</code></a> method instead.</p><p><a name="method-duplicates"></a></p><h4 id="duplicates-collection-method" tabindex="-1"><a class="header-anchor" href="#duplicates-collection-method" aria-hidden="true">#</a> <code>duplicates()</code> {.collection-method}</h4><p>The <code>duplicates</code> method retrieves and returns duplicate values from the collection:</p><pre><code>$collection = collect([&#39;a&#39;, &#39;b&#39;, &#39;a&#39;, &#39;c&#39;, &#39;b&#39;]);

$collection-&gt;duplicates();

// [2 =&gt; &#39;a&#39;, 4 =&gt; &#39;b&#39;]
</code></pre><p>If the collection contains arrays or objects, you can pass the key of the attributes that you wish to check for duplicate values:</p><pre><code>$employees = collect([
    [&#39;email&#39; =&gt; &#39;abigail@example.com&#39;, &#39;position&#39; =&gt; &#39;Developer&#39;],
    [&#39;email&#39; =&gt; &#39;james@example.com&#39;, &#39;position&#39; =&gt; &#39;Designer&#39;],
    [&#39;email&#39; =&gt; &#39;victoria@example.com&#39;, &#39;position&#39; =&gt; &#39;Developer&#39;],
]);

$employees-&gt;duplicates(&#39;position&#39;);

// [2 =&gt; &#39;Developer&#39;]
</code></pre><p><a name="method-duplicatesstrict"></a></p><h4 id="duplicatesstrict-collection-method" tabindex="-1"><a class="header-anchor" href="#duplicatesstrict-collection-method" aria-hidden="true">#</a> <code>duplicatesStrict()</code> {.collection-method}</h4><p>This method has the same signature as the <a href="#method-duplicates"><code>duplicates</code></a> method; however, all values are compared using &quot;strict&quot; comparisons.</p><p><a name="method-each"></a></p><h4 id="each-collection-method" tabindex="-1"><a class="header-anchor" href="#each-collection-method" aria-hidden="true">#</a> <code>each()</code> {.collection-method}</h4><p>The <code>each</code> method iterates over the items in the collection and passes each item to a closure:</p><pre><code>$collection = collect([1, 2, 3, 4]);

$collection-&gt;each(function (int $item, int $key) {
    // ...
});
</code></pre><p>If you would like to stop iterating through the items, you may return <code>false</code> from your closure:</p><pre><code>$collection-&gt;each(function (int $item, int $key) {
    if (/* condition */) {
        return false;
    }
});
</code></pre><p><a name="method-eachspread"></a></p><h4 id="eachspread-collection-method" tabindex="-1"><a class="header-anchor" href="#eachspread-collection-method" aria-hidden="true">#</a> <code>eachSpread()</code> {.collection-method}</h4><p>The <code>eachSpread</code> method iterates over the collection&#39;s items, passing each nested item value into the given callback:</p><pre><code>$collection = collect([[&#39;John Doe&#39;, 35], [&#39;Jane Doe&#39;, 33]]);

$collection-&gt;eachSpread(function (string $name, int $age) {
    // ...
});
</code></pre><p>You may stop iterating through the items by returning <code>false</code> from the callback:</p><pre><code>$collection-&gt;eachSpread(function (string $name, int $age) {
    return false;
});
</code></pre><p><a name="method-ensure"></a></p><h4 id="ensure-collection-method" tabindex="-1"><a class="header-anchor" href="#ensure-collection-method" aria-hidden="true">#</a> <code>ensure()</code> {.collection-method}</h4><p>The <code>ensure</code> method may be used to verify that all elements of a collection are of a given type. Otherwise, an <code>UnexpectedValueException</code> will be thrown:</p><pre><code>return $collection-&gt;ensure(User::class);
</code></pre><p>Primitive types such as <code>string</code>, <code>int</code>, <code>float</code>, <code>bool</code>, and <code>array</code> may also be specified:</p><pre><code>return $collection-&gt;ensure(&#39;int&#39;);
</code></pre><blockquote><p><strong>Warning</strong> The <code>ensure</code> method does not guarantee that elements of different types will not be added to the collection at a later time.</p></blockquote><p><a name="method-every"></a></p><h4 id="every-collection-method" tabindex="-1"><a class="header-anchor" href="#every-collection-method" aria-hidden="true">#</a> <code>every()</code> {.collection-method}</h4><p>The <code>every</code> method may be used to verify that all elements of a collection pass a given truth test:</p><pre><code>collect([1, 2, 3, 4])-&gt;every(function (int $value, int $key) {
    return $value &gt; 2;
});

// false
</code></pre><p>If the collection is empty, the <code>every</code> method will return true:</p><pre><code>$collection = collect([]);

$collection-&gt;every(function (int $value, int $key) {
    return $value &gt; 2;
});

// true
</code></pre><p><a name="method-except"></a></p><h4 id="except-collection-method" tabindex="-1"><a class="header-anchor" href="#except-collection-method" aria-hidden="true">#</a> <code>except()</code> {.collection-method}</h4><p>The <code>except</code> method returns all items in the collection except for those with the specified keys:</p><pre><code>$collection = collect([&#39;product_id&#39; =&gt; 1, &#39;price&#39; =&gt; 100, &#39;discount&#39; =&gt; false]);

$filtered = $collection-&gt;except([&#39;price&#39;, &#39;discount&#39;]);

$filtered-&gt;all();

// [&#39;product_id&#39; =&gt; 1]
</code></pre><p>For the inverse of <code>except</code>, see the <a href="#method-only">only</a> method.</p><blockquote><p><strong>Note</strong><br> This method&#39;s behavior is modified when using <a href="./eloquent-collections#method-except">Eloquent Collections</a>.</p></blockquote><p><a name="method-filter"></a></p><h4 id="filter-collection-method" tabindex="-1"><a class="header-anchor" href="#filter-collection-method" aria-hidden="true">#</a> <code>filter()</code> {.collection-method}</h4><p>The <code>filter</code> method filters the collection using the given callback, keeping only those items that pass a given truth test:</p><pre><code>$collection = collect([1, 2, 3, 4]);

$filtered = $collection-&gt;filter(function (int $value, int $key) {
    return $value &gt; 2;
});

$filtered-&gt;all();

// [3, 4]
</code></pre><p>If no callback is supplied, all entries of the collection that are equivalent to <code>false</code> will be removed:</p><pre><code>$collection = collect([1, 2, 3, null, false, &#39;&#39;, 0, []]);

$collection-&gt;filter()-&gt;all();

// [1, 2, 3]
</code></pre><p>For the inverse of <code>filter</code>, see the <a href="#method-reject">reject</a> method.</p><p><a name="method-first"></a></p><h4 id="first-collection-method" tabindex="-1"><a class="header-anchor" href="#first-collection-method" aria-hidden="true">#</a> <code>first()</code> {.collection-method}</h4><p>The <code>first</code> method returns the first element in the collection that passes a given truth test:</p><pre><code>collect([1, 2, 3, 4])-&gt;first(function (int $value, int $key) {
    return $value &gt; 2;
});

// 3
</code></pre><p>You may also call the <code>first</code> method with no arguments to get the first element in the collection. If the collection is empty, <code>null</code> is returned:</p><pre><code>collect([1, 2, 3, 4])-&gt;first();

// 1
</code></pre><p><a name="method-first-or-fail"></a></p><h4 id="firstorfail-collection-method" tabindex="-1"><a class="header-anchor" href="#firstorfail-collection-method" aria-hidden="true">#</a> <code>firstOrFail()</code> {.collection-method}</h4><p>The <code>firstOrFail</code> method is identical to the <code>first</code> method; however, if no result is found, an <code>Illuminate\\Support\\ItemNotFoundException</code> exception will be thrown:</p><pre><code>collect([1, 2, 3, 4])-&gt;firstOrFail(function (int $value, int $key) {
    return $value &gt; 5;
});

// Throws ItemNotFoundException...
</code></pre><p>You may also call the <code>firstOrFail</code> method with no arguments to get the first element in the collection. If the collection is empty, an <code>Illuminate\\Support\\ItemNotFoundException</code> exception will be thrown:</p><pre><code>collect([])-&gt;firstOrFail();

// Throws ItemNotFoundException...
</code></pre><p><a name="method-first-where"></a></p><h4 id="firstwhere-collection-method" tabindex="-1"><a class="header-anchor" href="#firstwhere-collection-method" aria-hidden="true">#</a> <code>firstWhere()</code> {.collection-method}</h4><p>The <code>firstWhere</code> method returns the first element in the collection with the given key / value pair:</p><pre><code>$collection = collect([
    [&#39;name&#39; =&gt; &#39;Regena&#39;, &#39;age&#39; =&gt; null],
    [&#39;name&#39; =&gt; &#39;Linda&#39;, &#39;age&#39; =&gt; 14],
    [&#39;name&#39; =&gt; &#39;Diego&#39;, &#39;age&#39; =&gt; 23],
    [&#39;name&#39; =&gt; &#39;Linda&#39;, &#39;age&#39; =&gt; 84],
]);

$collection-&gt;firstWhere(&#39;name&#39;, &#39;Linda&#39;);

// [&#39;name&#39; =&gt; &#39;Linda&#39;, &#39;age&#39; =&gt; 14]
</code></pre><p>You may also call the <code>firstWhere</code> method with a comparison operator:</p><pre><code>$collection-&gt;firstWhere(&#39;age&#39;, &#39;&gt;=&#39;, 18);

// [&#39;name&#39; =&gt; &#39;Diego&#39;, &#39;age&#39; =&gt; 23]
</code></pre><p>Like the <a href="#method-where">where</a> method, you may pass one argument to the <code>firstWhere</code> method. In this scenario, the <code>firstWhere</code> method will return the first item where the given item key&#39;s value is &quot;truthy&quot;:</p><pre><code>$collection-&gt;firstWhere(&#39;age&#39;);

// [&#39;name&#39; =&gt; &#39;Linda&#39;, &#39;age&#39; =&gt; 14]
</code></pre><p><a name="method-flatmap"></a></p><h4 id="flatmap-collection-method" tabindex="-1"><a class="header-anchor" href="#flatmap-collection-method" aria-hidden="true">#</a> <code>flatMap()</code> {.collection-method}</h4><p>The <code>flatMap</code> method iterates through the collection and passes each value to the given closure. The closure is free to modify the item and return it, thus forming a new collection of modified items. Then, the array is flattened by one level:</p><pre><code>$collection = collect([
    [&#39;name&#39; =&gt; &#39;Sally&#39;],
    [&#39;school&#39; =&gt; &#39;Arkansas&#39;],
    [&#39;age&#39; =&gt; 28]
]);

$flattened = $collection-&gt;flatMap(function (array $values) {
    return array_map(&#39;strtoupper&#39;, $values);
});

$flattened-&gt;all();

// [&#39;name&#39; =&gt; &#39;SALLY&#39;, &#39;school&#39; =&gt; &#39;ARKANSAS&#39;, &#39;age&#39; =&gt; &#39;28&#39;];
</code></pre><p><a name="method-flatten"></a></p><h4 id="flatten-collection-method" tabindex="-1"><a class="header-anchor" href="#flatten-collection-method" aria-hidden="true">#</a> <code>flatten()</code> {.collection-method}</h4><p>The <code>flatten</code> method flattens a multi-dimensional collection into a single dimension:</p><pre><code>$collection = collect([
    &#39;name&#39; =&gt; &#39;taylor&#39;,
    &#39;languages&#39; =&gt; [
        &#39;php&#39;, &#39;javascript&#39;
    ]
]);

$flattened = $collection-&gt;flatten();

$flattened-&gt;all();

// [&#39;taylor&#39;, &#39;php&#39;, &#39;javascript&#39;];
</code></pre><p>If necessary, you may pass the <code>flatten</code> method a &quot;depth&quot; argument:</p><pre><code>$collection = collect([
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
</code></pre><p>In this example, calling <code>flatten</code> without providing the depth would have also flattened the nested arrays, resulting in <code>[&#39;iPhone 6S&#39;, &#39;Apple&#39;, &#39;Galaxy S7&#39;, &#39;Samsung&#39;]</code>. Providing a depth allows you to specify the number of levels nested arrays will be flattened.</p><p><a name="method-flip"></a></p><h4 id="flip-collection-method" tabindex="-1"><a class="header-anchor" href="#flip-collection-method" aria-hidden="true">#</a> <code>flip()</code> {.collection-method}</h4><p>The <code>flip</code> method swaps the collection&#39;s keys with their corresponding values:</p><pre><code>$collection = collect([&#39;name&#39; =&gt; &#39;taylor&#39;, &#39;framework&#39; =&gt; &#39;laravel&#39;]);

$flipped = $collection-&gt;flip();

$flipped-&gt;all();

// [&#39;taylor&#39; =&gt; &#39;name&#39;, &#39;laravel&#39; =&gt; &#39;framework&#39;]
</code></pre><p><a name="method-forget"></a></p><h4 id="forget-collection-method" tabindex="-1"><a class="header-anchor" href="#forget-collection-method" aria-hidden="true">#</a> <code>forget()</code> {.collection-method}</h4><p>The <code>forget</code> method removes an item from the collection by its key:</p><pre><code>$collection = collect([&#39;name&#39; =&gt; &#39;taylor&#39;, &#39;framework&#39; =&gt; &#39;laravel&#39;]);

$collection-&gt;forget(&#39;name&#39;);

$collection-&gt;all();

// [&#39;framework&#39; =&gt; &#39;laravel&#39;]
</code></pre><blockquote><p><strong>Warning</strong><br> Unlike most other collection methods, <code>forget</code> does not return a new modified collection; it modifies the collection it is called on.</p></blockquote><p><a name="method-forpage"></a></p><h4 id="forpage-collection-method" tabindex="-1"><a class="header-anchor" href="#forpage-collection-method" aria-hidden="true">#</a> <code>forPage()</code> {.collection-method}</h4><p>The <code>forPage</code> method returns a new collection containing the items that would be present on a given page number. The method accepts the page number as its first argument and the number of items to show per page as its second argument:</p><pre><code>$collection = collect([1, 2, 3, 4, 5, 6, 7, 8, 9]);

$chunk = $collection-&gt;forPage(2, 3);

$chunk-&gt;all();

// [4, 5, 6]
</code></pre><p><a name="method-get"></a></p><h4 id="get-collection-method" tabindex="-1"><a class="header-anchor" href="#get-collection-method" aria-hidden="true">#</a> <code>get()</code> {.collection-method}</h4><p>The <code>get</code> method returns the item at a given key. If the key does not exist, <code>null</code> is returned:</p><pre><code>$collection = collect([&#39;name&#39; =&gt; &#39;taylor&#39;, &#39;framework&#39; =&gt; &#39;laravel&#39;]);

$value = $collection-&gt;get(&#39;name&#39;);

// taylor
</code></pre><p>You may optionally pass a default value as the second argument:</p><pre><code>$collection = collect([&#39;name&#39; =&gt; &#39;taylor&#39;, &#39;framework&#39; =&gt; &#39;laravel&#39;]);

$value = $collection-&gt;get(&#39;age&#39;, 34);

// 34
</code></pre><p>You may even pass a callback as the method&#39;s default value. The result of the callback will be returned if the specified key does not exist:</p><pre><code>$collection-&gt;get(&#39;email&#39;, function () {
    return &#39;taylor@example.com&#39;;
});

// taylor@example.com
</code></pre><p><a name="method-groupby"></a></p><h4 id="groupby-collection-method" tabindex="-1"><a class="header-anchor" href="#groupby-collection-method" aria-hidden="true">#</a> <code>groupBy()</code> {.collection-method}</h4><p>The <code>groupBy</code> method groups the collection&#39;s items by a given key:</p><pre><code>$collection = collect([
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
</code></pre><p>Instead of passing a string <code>key</code>, you may pass a callback. The callback should return the value you wish to key the group by:</p><pre><code>$grouped = $collection-&gt;groupBy(function (array $item, int $key) {
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
</code></pre><p>Multiple grouping criteria may be passed as an array. Each array element will be applied to the corresponding level within a multi-dimensional array:</p><pre><code>$data = new Collection([
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
</code></pre><p><a name="method-has"></a></p><h4 id="has-collection-method" tabindex="-1"><a class="header-anchor" href="#has-collection-method" aria-hidden="true">#</a> <code>has()</code> {.collection-method}</h4><p>The <code>has</code> method determines if a given key exists in the collection:</p><pre><code>$collection = collect([&#39;account_id&#39; =&gt; 1, &#39;product&#39; =&gt; &#39;Desk&#39;, &#39;amount&#39; =&gt; 5]);

$collection-&gt;has(&#39;product&#39;);

// true

$collection-&gt;has([&#39;product&#39;, &#39;amount&#39;]);

// true

$collection-&gt;has([&#39;amount&#39;, &#39;price&#39;]);

// false
</code></pre><p><a name="method-hasany"></a></p><h4 id="hasany-collection-method" tabindex="-1"><a class="header-anchor" href="#hasany-collection-method" aria-hidden="true">#</a> <code>hasAny()</code> {.collection-method}</h4><p>The <code>hasAny</code> method determines whether any of the given keys exist in the collection:</p><pre><code>$collection = collect([&#39;account_id&#39; =&gt; 1, &#39;product&#39; =&gt; &#39;Desk&#39;, &#39;amount&#39; =&gt; 5]);

$collection-&gt;hasAny([&#39;product&#39;, &#39;price&#39;]);

// true

$collection-&gt;hasAny([&#39;name&#39;, &#39;price&#39;]);

// false
</code></pre><p><a name="method-implode"></a></p><h4 id="implode-collection-method" tabindex="-1"><a class="header-anchor" href="#implode-collection-method" aria-hidden="true">#</a> <code>implode()</code> {.collection-method}</h4><p>The <code>implode</code> method joins items in a collection. Its arguments depend on the type of items in the collection. If the collection contains arrays or objects, you should pass the key of the attributes you wish to join, and the &quot;glue&quot; string you wish to place between the values:</p><pre><code>$collection = collect([
    [&#39;account_id&#39; =&gt; 1, &#39;product&#39; =&gt; &#39;Desk&#39;],
    [&#39;account_id&#39; =&gt; 2, &#39;product&#39; =&gt; &#39;Chair&#39;],
]);

$collection-&gt;implode(&#39;product&#39;, &#39;, &#39;);

// Desk, Chair
</code></pre><p>If the collection contains simple strings or numeric values, you should pass the &quot;glue&quot; as the only argument to the method:</p><pre><code>collect([1, 2, 3, 4, 5])-&gt;implode(&#39;-&#39;);

// &#39;1-2-3-4-5&#39;
</code></pre><p>You may pass a closure to the <code>implode</code> method if you would like to format the values being imploded:</p><pre><code>$collection-&gt;implode(function (array $item, int $key) {
    return strtoupper($item[&#39;product&#39;]);
}, &#39;, &#39;);

// DESK, CHAIR
</code></pre><p><a name="method-intersect"></a></p><h4 id="intersect-collection-method" tabindex="-1"><a class="header-anchor" href="#intersect-collection-method" aria-hidden="true">#</a> <code>intersect()</code> {.collection-method}</h4><p>The <code>intersect</code> method removes any values from the original collection that are not present in the given <code>array</code> or collection. The resulting collection will preserve the original collection&#39;s keys:</p><pre><code>$collection = collect([&#39;Desk&#39;, &#39;Sofa&#39;, &#39;Chair&#39;]);

$intersect = $collection-&gt;intersect([&#39;Desk&#39;, &#39;Chair&#39;, &#39;Bookcase&#39;]);

$intersect-&gt;all();

// [0 =&gt; &#39;Desk&#39;, 2 =&gt; &#39;Chair&#39;]
</code></pre><blockquote><p><strong>Note</strong><br> This method&#39;s behavior is modified when using <a href="./eloquent-collections#method-intersect">Eloquent Collections</a>.</p></blockquote><p><a name="method-intersectAssoc"></a></p><h4 id="intersectassoc-collection-method" tabindex="-1"><a class="header-anchor" href="#intersectassoc-collection-method" aria-hidden="true">#</a> <code>intersectAssoc()</code> {.collection-method}</h4><p>The <code>intersectAssoc</code> method compares the original collection against another collection or <code>array</code>, returning the key / value pairs that are present in all of the given collections:</p><pre><code>$collection = collect([
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
</code></pre><p><a name="method-intersectbykeys"></a></p><h4 id="intersectbykeys-collection-method" tabindex="-1"><a class="header-anchor" href="#intersectbykeys-collection-method" aria-hidden="true">#</a> <code>intersectByKeys()</code> {.collection-method}</h4><p>The <code>intersectByKeys</code> method removes any keys and their corresponding values from the original collection that are not present in the given <code>array</code> or collection:</p><pre><code>$collection = collect([
    &#39;serial&#39; =&gt; &#39;UX301&#39;, &#39;type&#39; =&gt; &#39;screen&#39;, &#39;year&#39; =&gt; 2009,
]);

$intersect = $collection-&gt;intersectByKeys([
    &#39;reference&#39; =&gt; &#39;UX404&#39;, &#39;type&#39; =&gt; &#39;tab&#39;, &#39;year&#39; =&gt; 2011,
]);

$intersect-&gt;all();

// [&#39;type&#39; =&gt; &#39;screen&#39;, &#39;year&#39; =&gt; 2009]
</code></pre><p><a name="method-isempty"></a></p><h4 id="isempty-collection-method" tabindex="-1"><a class="header-anchor" href="#isempty-collection-method" aria-hidden="true">#</a> <code>isEmpty()</code> {.collection-method}</h4><p>The <code>isEmpty</code> method returns <code>true</code> if the collection is empty; otherwise, <code>false</code> is returned:</p><pre><code>collect([])-&gt;isEmpty();

// true
</code></pre><p><a name="method-isnotempty"></a></p><h4 id="isnotempty-collection-method" tabindex="-1"><a class="header-anchor" href="#isnotempty-collection-method" aria-hidden="true">#</a> <code>isNotEmpty()</code> {.collection-method}</h4><p>The <code>isNotEmpty</code> method returns <code>true</code> if the collection is not empty; otherwise, <code>false</code> is returned:</p><pre><code>collect([])-&gt;isNotEmpty();

// false
</code></pre><p><a name="method-join"></a></p><h4 id="join-collection-method" tabindex="-1"><a class="header-anchor" href="#join-collection-method" aria-hidden="true">#</a> <code>join()</code> {.collection-method}</h4><p>The <code>join</code> method joins the collection&#39;s values with a string. Using this method&#39;s second argument, you may also specify how the final element should be appended to the string:</p><pre><code>collect([&#39;a&#39;, &#39;b&#39;, &#39;c&#39;])-&gt;join(&#39;, &#39;); // &#39;a, b, c&#39;
collect([&#39;a&#39;, &#39;b&#39;, &#39;c&#39;])-&gt;join(&#39;, &#39;, &#39;, and &#39;); // &#39;a, b, and c&#39;
collect([&#39;a&#39;, &#39;b&#39;])-&gt;join(&#39;, &#39;, &#39; and &#39;); // &#39;a and b&#39;
collect([&#39;a&#39;])-&gt;join(&#39;, &#39;, &#39; and &#39;); // &#39;a&#39;
collect([])-&gt;join(&#39;, &#39;, &#39; and &#39;); // &#39;&#39;
</code></pre><p><a name="method-keyby"></a></p><h4 id="keyby-collection-method" tabindex="-1"><a class="header-anchor" href="#keyby-collection-method" aria-hidden="true">#</a> <code>keyBy()</code> {.collection-method}</h4><p>The <code>keyBy</code> method keys the collection by the given key. If multiple items have the same key, only the last one will appear in the new collection:</p><pre><code>$collection = collect([
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
</code></pre><p>You may also pass a callback to the method. The callback should return the value to key the collection by:</p><pre><code>$keyed = $collection-&gt;keyBy(function (array $item, int $key) {
    return strtoupper($item[&#39;product_id&#39;]);
});

$keyed-&gt;all();

/*
    [
        &#39;PROD-100&#39; =&gt; [&#39;product_id&#39; =&gt; &#39;prod-100&#39;, &#39;name&#39; =&gt; &#39;Desk&#39;],
        &#39;PROD-200&#39; =&gt; [&#39;product_id&#39; =&gt; &#39;prod-200&#39;, &#39;name&#39; =&gt; &#39;Chair&#39;],
    ]
*/
</code></pre><p><a name="method-keys"></a></p><h4 id="keys-collection-method" tabindex="-1"><a class="header-anchor" href="#keys-collection-method" aria-hidden="true">#</a> <code>keys()</code> {.collection-method}</h4><p>The <code>keys</code> method returns all of the collection&#39;s keys:</p><pre><code>$collection = collect([
    &#39;prod-100&#39; =&gt; [&#39;product_id&#39; =&gt; &#39;prod-100&#39;, &#39;name&#39; =&gt; &#39;Desk&#39;],
    &#39;prod-200&#39; =&gt; [&#39;product_id&#39; =&gt; &#39;prod-200&#39;, &#39;name&#39; =&gt; &#39;Chair&#39;],
]);

$keys = $collection-&gt;keys();

$keys-&gt;all();

// [&#39;prod-100&#39;, &#39;prod-200&#39;]
</code></pre><p><a name="method-last"></a></p><h4 id="last-collection-method" tabindex="-1"><a class="header-anchor" href="#last-collection-method" aria-hidden="true">#</a> <code>last()</code> {.collection-method}</h4><p>The <code>last</code> method returns the last element in the collection that passes a given truth test:</p><pre><code>collect([1, 2, 3, 4])-&gt;last(function (int $value, int $key) {
    return $value &lt; 3;
});

// 2
</code></pre><p>You may also call the <code>last</code> method with no arguments to get the last element in the collection. If the collection is empty, <code>null</code> is returned:</p><pre><code>collect([1, 2, 3, 4])-&gt;last();

// 4
</code></pre><p><a name="method-lazy"></a></p><h4 id="lazy-collection-method" tabindex="-1"><a class="header-anchor" href="#lazy-collection-method" aria-hidden="true">#</a> <code>lazy()</code> {.collection-method}</h4><p>The <code>lazy</code> method returns a new <a href="#lazy-collections"><code>LazyCollection</code></a> instance from the underlying array of items:</p><pre><code>$lazyCollection = collect([1, 2, 3, 4])-&gt;lazy();

$lazyCollection::class;

// Illuminate\\Support\\LazyCollection

$lazyCollection-&gt;all();

// [1, 2, 3, 4]
</code></pre><p>This is especially useful when you need to perform transformations on a huge <code>Collection</code> that contains many items:</p><pre><code>$count = $hugeCollection
    -&gt;lazy()
    -&gt;where(&#39;country&#39;, &#39;FR&#39;)
    -&gt;where(&#39;balance&#39;, &#39;&gt;&#39;, &#39;100&#39;)
    -&gt;count();
</code></pre><p>By converting the collection to a <code>LazyCollection</code>, we avoid having to allocate a ton of additional memory. Though the original collection still keeps <em>its</em> values in memory, the subsequent filters will not. Therefore, virtually no additional memory will be allocated when filtering the collection&#39;s results.</p><p><a name="method-macro"></a></p><h4 id="macro-collection-method" tabindex="-1"><a class="header-anchor" href="#macro-collection-method" aria-hidden="true">#</a> <code>macro()</code> {.collection-method}</h4><p>The static <code>macro</code> method allows you to add methods to the <code>Collection</code> class at run time. Refer to the documentation on <a href="#extending-collections">extending collections</a> for more information.</p><p><a name="method-make"></a></p><h4 id="make-collection-method" tabindex="-1"><a class="header-anchor" href="#make-collection-method" aria-hidden="true">#</a> <code>make()</code> {.collection-method}</h4><p>The static <code>make</code> method creates a new collection instance. See the <a href="#creating-collections">Creating Collections</a> section.</p><p><a name="method-map"></a></p><h4 id="map-collection-method" tabindex="-1"><a class="header-anchor" href="#map-collection-method" aria-hidden="true">#</a> <code>map()</code> {.collection-method}</h4><p>The <code>map</code> method iterates through the collection and passes each value to the given callback. The callback is free to modify the item and return it, thus forming a new collection of modified items:</p><pre><code>$collection = collect([1, 2, 3, 4, 5]);

$multiplied = $collection-&gt;map(function (int $item, int $key) {
    return $item * 2;
});

$multiplied-&gt;all();

// [2, 4, 6, 8, 10]
</code></pre><blockquote><p><strong>Warning</strong><br> Like most other collection methods, <code>map</code> returns a new collection instance; it does not modify the collection it is called on. If you want to transform the original collection, use the <a href="#method-transform"><code>transform</code></a> method.</p></blockquote><p><a name="method-mapinto"></a></p><h4 id="mapinto-collection-method" tabindex="-1"><a class="header-anchor" href="#mapinto-collection-method" aria-hidden="true">#</a> <code>mapInto()</code> {.collection-method}</h4><p>The <code>mapInto()</code> method iterates over the collection, creating a new instance of the given class by passing the value into the constructor:</p><pre><code>class Currency
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
</code></pre><p><a name="method-mapspread"></a></p><h4 id="mapspread-collection-method" tabindex="-1"><a class="header-anchor" href="#mapspread-collection-method" aria-hidden="true">#</a> <code>mapSpread()</code> {.collection-method}</h4><p>The <code>mapSpread</code> method iterates over the collection&#39;s items, passing each nested item value into the given closure. The closure is free to modify the item and return it, thus forming a new collection of modified items:</p><pre><code>$collection = collect([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);

$chunks = $collection-&gt;chunk(2);

$sequence = $chunks-&gt;mapSpread(function (int $even, int $odd) {
    return $even + $odd;
});

$sequence-&gt;all();

// [1, 5, 9, 13, 17]
</code></pre><p><a name="method-maptogroups"></a></p><h4 id="maptogroups-collection-method" tabindex="-1"><a class="header-anchor" href="#maptogroups-collection-method" aria-hidden="true">#</a> <code>mapToGroups()</code> {.collection-method}</h4><p>The <code>mapToGroups</code> method groups the collection&#39;s items by the given closure. The closure should return an associative array containing a single key / value pair, thus forming a new collection of grouped values:</p><pre><code>$collection = collect([
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
</code></pre><p><a name="method-mapwithkeys"></a></p><h4 id="mapwithkeys-collection-method" tabindex="-1"><a class="header-anchor" href="#mapwithkeys-collection-method" aria-hidden="true">#</a> <code>mapWithKeys()</code> {.collection-method}</h4><p>The <code>mapWithKeys</code> method iterates through the collection and passes each value to the given callback. The callback should return an associative array containing a single key / value pair:</p><pre><code>$collection = collect([
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
</code></pre><p><a name="method-max"></a></p><h4 id="max-collection-method" tabindex="-1"><a class="header-anchor" href="#max-collection-method" aria-hidden="true">#</a> <code>max()</code> {.collection-method}</h4><p>The <code>max</code> method returns the maximum value of a given key:</p><pre><code>$max = collect([
    [&#39;foo&#39; =&gt; 10],
    [&#39;foo&#39; =&gt; 20]
])-&gt;max(&#39;foo&#39;);

// 20

$max = collect([1, 2, 3, 4, 5])-&gt;max();

// 5
</code></pre><p><a name="method-median"></a></p><h4 id="median-collection-method" tabindex="-1"><a class="header-anchor" href="#median-collection-method" aria-hidden="true">#</a> <code>median()</code> {.collection-method}</h4>`,226),T=e("code",null,"median",-1),q={href:"https://en.wikipedia.org/wiki/Median",target:"_blank",rel:"noopener noreferrer"},_=t(`<pre><code>$median = collect([
    [&#39;foo&#39; =&gt; 10],
    [&#39;foo&#39; =&gt; 10],
    [&#39;foo&#39; =&gt; 20],
    [&#39;foo&#39; =&gt; 40]
])-&gt;median(&#39;foo&#39;);

// 15

$median = collect([1, 1, 2, 4])-&gt;median();

// 1.5
</code></pre><p><a name="method-merge"></a></p><h4 id="merge-collection-method" tabindex="-1"><a class="header-anchor" href="#merge-collection-method" aria-hidden="true">#</a> <code>merge()</code> {.collection-method}</h4><p>The <code>merge</code> method merges the given array or collection with the original collection. If a string key in the given items matches a string key in the original collection, the given item&#39;s value will overwrite the value in the original collection:</p><pre><code>$collection = collect([&#39;product_id&#39; =&gt; 1, &#39;price&#39; =&gt; 100]);

$merged = $collection-&gt;merge([&#39;price&#39; =&gt; 200, &#39;discount&#39; =&gt; false]);

$merged-&gt;all();

// [&#39;product_id&#39; =&gt; 1, &#39;price&#39; =&gt; 200, &#39;discount&#39; =&gt; false]
</code></pre><p>If the given item&#39;s keys are numeric, the values will be appended to the end of the collection:</p><pre><code>$collection = collect([&#39;Desk&#39;, &#39;Chair&#39;]);

$merged = $collection-&gt;merge([&#39;Bookcase&#39;, &#39;Door&#39;]);

$merged-&gt;all();

// [&#39;Desk&#39;, &#39;Chair&#39;, &#39;Bookcase&#39;, &#39;Door&#39;]
</code></pre><p><a name="method-mergerecursive"></a></p><h4 id="mergerecursive-collection-method" tabindex="-1"><a class="header-anchor" href="#mergerecursive-collection-method" aria-hidden="true">#</a> <code>mergeRecursive()</code> {.collection-method}</h4><p>The <code>mergeRecursive</code> method merges the given array or collection recursively with the original collection. If a string key in the given items matches a string key in the original collection, then the values for these keys are merged together into an array, and this is done recursively:</p><pre><code>$collection = collect([&#39;product_id&#39; =&gt; 1, &#39;price&#39; =&gt; 100]);

$merged = $collection-&gt;mergeRecursive([
    &#39;product_id&#39; =&gt; 2,
    &#39;price&#39; =&gt; 200,
    &#39;discount&#39; =&gt; false
]);

$merged-&gt;all();

// [&#39;product_id&#39; =&gt; [1, 2], &#39;price&#39; =&gt; [100, 200], &#39;discount&#39; =&gt; false]
</code></pre><p><a name="method-min"></a></p><h4 id="min-collection-method" tabindex="-1"><a class="header-anchor" href="#min-collection-method" aria-hidden="true">#</a> <code>min()</code> {.collection-method}</h4><p>The <code>min</code> method returns the minimum value of a given key:</p><pre><code>$min = collect([[&#39;foo&#39; =&gt; 10], [&#39;foo&#39; =&gt; 20]])-&gt;min(&#39;foo&#39;);

// 10

$min = collect([1, 2, 3, 4, 5])-&gt;min();

// 1
</code></pre><p><a name="method-mode"></a></p><h4 id="mode-collection-method" tabindex="-1"><a class="header-anchor" href="#mode-collection-method" aria-hidden="true">#</a> <code>mode()</code> {.collection-method}</h4>`,17),C=e("code",null,"mode",-1),I={href:"https://en.wikipedia.org/wiki/Mode_(statistics)",target:"_blank",rel:"noopener noreferrer"},D=t(`<pre><code>$mode = collect([
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
</code></pre><p><a name="method-nth"></a></p><h4 id="nth-collection-method" tabindex="-1"><a class="header-anchor" href="#nth-collection-method" aria-hidden="true">#</a> <code>nth()</code> {.collection-method}</h4><p>The <code>nth</code> method creates a new collection consisting of every n-th element:</p><pre><code>$collection = collect([&#39;a&#39;, &#39;b&#39;, &#39;c&#39;, &#39;d&#39;, &#39;e&#39;, &#39;f&#39;]);

$collection-&gt;nth(4);

// [&#39;a&#39;, &#39;e&#39;]
</code></pre><p>You may optionally pass a starting offset as the second argument:</p><pre><code>$collection-&gt;nth(4, 1);

// [&#39;b&#39;, &#39;f&#39;]
</code></pre><p><a name="method-only"></a></p><h4 id="only-collection-method" tabindex="-1"><a class="header-anchor" href="#only-collection-method" aria-hidden="true">#</a> <code>only()</code> {.collection-method}</h4><p>The <code>only</code> method returns the items in the collection with the specified keys:</p><pre><code>$collection = collect([
    &#39;product_id&#39; =&gt; 1,
    &#39;name&#39; =&gt; &#39;Desk&#39;,
    &#39;price&#39; =&gt; 100,
    &#39;discount&#39; =&gt; false
]);

$filtered = $collection-&gt;only([&#39;product_id&#39;, &#39;name&#39;]);

$filtered-&gt;all();

// [&#39;product_id&#39; =&gt; 1, &#39;name&#39; =&gt; &#39;Desk&#39;]
</code></pre><p>For the inverse of <code>only</code>, see the <a href="#method-except">except</a> method.</p><blockquote><p><strong>Note</strong><br> This method&#39;s behavior is modified when using <a href="./eloquent-collections#method-only">Eloquent Collections</a>.</p></blockquote><p><a name="method-pad"></a></p><h4 id="pad-collection-method" tabindex="-1"><a class="header-anchor" href="#pad-collection-method" aria-hidden="true">#</a> <code>pad()</code> {.collection-method}</h4>`,15),A=e("code",null,"pad",-1),B={href:"https://secure.php.net/manual/en/function.array-pad.php",target:"_blank",rel:"noopener noreferrer"},S=t(`<p>To pad to the left, you should specify a negative size. No padding will take place if the absolute value of the given size is less than or equal to the length of the array:</p><pre><code>$collection = collect([&#39;A&#39;, &#39;B&#39;, &#39;C&#39;]);

$filtered = $collection-&gt;pad(5, 0);

$filtered-&gt;all();

// [&#39;A&#39;, &#39;B&#39;, &#39;C&#39;, 0, 0]

$filtered = $collection-&gt;pad(-5, 0);

$filtered-&gt;all();

// [0, 0, &#39;A&#39;, &#39;B&#39;, &#39;C&#39;]
</code></pre><p><a name="method-partition"></a></p><h4 id="partition-collection-method" tabindex="-1"><a class="header-anchor" href="#partition-collection-method" aria-hidden="true">#</a> <code>partition()</code> {.collection-method}</h4><p>The <code>partition</code> method may be combined with PHP array destructuring to separate elements that pass a given truth test from those that do not:</p><pre><code>$collection = collect([1, 2, 3, 4, 5, 6]);

[$underThree, $equalOrAboveThree] = $collection-&gt;partition(function (int $i) {
    return $i &lt; 3;
});

$underThree-&gt;all();

// [1, 2]

$equalOrAboveThree-&gt;all();

// [3, 4, 5, 6]
</code></pre><p><a name="method-percentage"></a></p><h4 id="percentage-collection-method" tabindex="-1"><a class="header-anchor" href="#percentage-collection-method" aria-hidden="true">#</a> <code>percentage()</code> {.collection-method}</h4><p>The <code>percentage</code> method may be used to quickly determine the percentage of items in the collection that pass a given truth test:</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token variable">$collection</span> <span class="token operator">=</span> <span class="token function">collect</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token variable">$percentage</span> <span class="token operator">=</span> <span class="token variable">$collection</span><span class="token operator">-&gt;</span><span class="token function">percentage</span><span class="token punctuation">(</span><span class="token keyword">fn</span> <span class="token punctuation">(</span><span class="token variable">$value</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token variable">$value</span> <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 33.33</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>By default, the percentage will be rounded to two decimal places. However, you may customize this behavior by providing a second argument to the method:</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token variable">$percentage</span> <span class="token operator">=</span> <span class="token variable">$collection</span><span class="token operator">-&gt;</span><span class="token function">percentage</span><span class="token punctuation">(</span><span class="token keyword">fn</span> <span class="token punctuation">(</span><span class="token variable">$value</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token variable">$value</span> <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token argument-name">precision</span><span class="token punctuation">:</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 33.333</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="method-pipe"></a></p><h4 id="pipe-collection-method" tabindex="-1"><a class="header-anchor" href="#pipe-collection-method" aria-hidden="true">#</a> <code>pipe()</code> {.collection-method}</h4><p>The <code>pipe</code> method passes the collection to the given closure and returns the result of the executed closure:</p><pre><code>$collection = collect([1, 2, 3]);

$piped = $collection-&gt;pipe(function (Collection $collection) {
    return $collection-&gt;sum();
});

// 6
</code></pre><p><a name="method-pipeinto"></a></p><h4 id="pipeinto-collection-method" tabindex="-1"><a class="header-anchor" href="#pipeinto-collection-method" aria-hidden="true">#</a> <code>pipeInto()</code> {.collection-method}</h4><p>The <code>pipeInto</code> method creates a new instance of the given class and passes the collection into the constructor:</p><pre><code>class ResourceCollection
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
</code></pre><p><a name="method-pipethrough"></a></p><h4 id="pipethrough-collection-method" tabindex="-1"><a class="header-anchor" href="#pipethrough-collection-method" aria-hidden="true">#</a> <code>pipeThrough()</code> {.collection-method}</h4><p>The <code>pipeThrough</code> method passes the collection to the given array of closures and returns the result of the executed closures:</p><pre><code>use Illuminate\\Support\\Collection;

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
</code></pre><p><a name="method-pluck"></a></p><h4 id="pluck-collection-method" tabindex="-1"><a class="header-anchor" href="#pluck-collection-method" aria-hidden="true">#</a> <code>pluck()</code> {.collection-method}</h4><p>The <code>pluck</code> method retrieves all of the values for a given key:</p><pre><code>$collection = collect([
    [&#39;product_id&#39; =&gt; &#39;prod-100&#39;, &#39;name&#39; =&gt; &#39;Desk&#39;],
    [&#39;product_id&#39; =&gt; &#39;prod-200&#39;, &#39;name&#39; =&gt; &#39;Chair&#39;],
]);

$plucked = $collection-&gt;pluck(&#39;name&#39;);

$plucked-&gt;all();

// [&#39;Desk&#39;, &#39;Chair&#39;]
</code></pre><p>You may also specify how you wish the resulting collection to be keyed:</p><pre><code>$plucked = $collection-&gt;pluck(&#39;name&#39;, &#39;product_id&#39;);

$plucked-&gt;all();

// [&#39;prod-100&#39; =&gt; &#39;Desk&#39;, &#39;prod-200&#39; =&gt; &#39;Chair&#39;]
</code></pre><p>The <code>pluck</code> method also supports retrieving nested values using &quot;dot&quot; notation:</p><pre><code>$collection = collect([
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
</code></pre><p>If duplicate keys exist, the last matching element will be inserted into the plucked collection:</p><pre><code>$collection = collect([
    [&#39;brand&#39; =&gt; &#39;Tesla&#39;,  &#39;color&#39; =&gt; &#39;red&#39;],
    [&#39;brand&#39; =&gt; &#39;Pagani&#39;, &#39;color&#39; =&gt; &#39;white&#39;],
    [&#39;brand&#39; =&gt; &#39;Tesla&#39;,  &#39;color&#39; =&gt; &#39;black&#39;],
    [&#39;brand&#39; =&gt; &#39;Pagani&#39;, &#39;color&#39; =&gt; &#39;orange&#39;],
]);

$plucked = $collection-&gt;pluck(&#39;color&#39;, &#39;brand&#39;);

$plucked-&gt;all();

// [&#39;Tesla&#39; =&gt; &#39;black&#39;, &#39;Pagani&#39; =&gt; &#39;orange&#39;]
</code></pre><p><a name="method-pop"></a></p><h4 id="pop-collection-method" tabindex="-1"><a class="header-anchor" href="#pop-collection-method" aria-hidden="true">#</a> <code>pop()</code> {.collection-method}</h4><p>The <code>pop</code> method removes and returns the last item from the collection:</p><pre><code>$collection = collect([1, 2, 3, 4, 5]);

$collection-&gt;pop();

// 5

$collection-&gt;all();

// [1, 2, 3, 4]
</code></pre><p>You may pass an integer to the <code>pop</code> method to remove and return multiple items from the end of a collection:</p><pre><code>$collection = collect([1, 2, 3, 4, 5]);

$collection-&gt;pop(3);

// collect([5, 4, 3])

$collection-&gt;all();

// [1, 2]
</code></pre><p><a name="method-prepend"></a></p><h4 id="prepend-collection-method" tabindex="-1"><a class="header-anchor" href="#prepend-collection-method" aria-hidden="true">#</a> <code>prepend()</code> {.collection-method}</h4><p>The <code>prepend</code> method adds an item to the beginning of the collection:</p><pre><code>$collection = collect([1, 2, 3, 4, 5]);

$collection-&gt;prepend(0);

$collection-&gt;all();

// [0, 1, 2, 3, 4, 5]
</code></pre><p>You may also pass a second argument to specify the key of the prepended item:</p><pre><code>$collection = collect([&#39;one&#39; =&gt; 1, &#39;two&#39; =&gt; 2]);

$collection-&gt;prepend(0, &#39;zero&#39;);

$collection-&gt;all();

// [&#39;zero&#39; =&gt; 0, &#39;one&#39; =&gt; 1, &#39;two&#39; =&gt; 2]
</code></pre><p><a name="method-pull"></a></p><h4 id="pull-collection-method" tabindex="-1"><a class="header-anchor" href="#pull-collection-method" aria-hidden="true">#</a> <code>pull()</code> {.collection-method}</h4><p>The <code>pull</code> method removes and returns an item from the collection by its key:</p><pre><code>$collection = collect([&#39;product_id&#39; =&gt; &#39;prod-100&#39;, &#39;name&#39; =&gt; &#39;Desk&#39;]);

$collection-&gt;pull(&#39;name&#39;);

// &#39;Desk&#39;

$collection-&gt;all();

// [&#39;product_id&#39; =&gt; &#39;prod-100&#39;]
</code></pre><p><a name="method-push"></a></p><h4 id="push-collection-method" tabindex="-1"><a class="header-anchor" href="#push-collection-method" aria-hidden="true">#</a> <code>push()</code> {.collection-method}</h4><p>The <code>push</code> method appends an item to the end of the collection:</p><pre><code>$collection = collect([1, 2, 3, 4]);

$collection-&gt;push(5);

$collection-&gt;all();

// [1, 2, 3, 4, 5]
</code></pre><p><a name="method-put"></a></p><h4 id="put-collection-method" tabindex="-1"><a class="header-anchor" href="#put-collection-method" aria-hidden="true">#</a> <code>put()</code> {.collection-method}</h4><p>The <code>put</code> method sets the given key and value in the collection:</p><pre><code>$collection = collect([&#39;product_id&#39; =&gt; 1, &#39;name&#39; =&gt; &#39;Desk&#39;]);

$collection-&gt;put(&#39;price&#39;, 100);

$collection-&gt;all();

// [&#39;product_id&#39; =&gt; 1, &#39;name&#39; =&gt; &#39;Desk&#39;, &#39;price&#39; =&gt; 100]
</code></pre><p><a name="method-random"></a></p><h4 id="random-collection-method" tabindex="-1"><a class="header-anchor" href="#random-collection-method" aria-hidden="true">#</a> <code>random()</code> {.collection-method}</h4><p>The <code>random</code> method returns a random item from the collection:</p><pre><code>$collection = collect([1, 2, 3, 4, 5]);

$collection-&gt;random();

// 4 - (retrieved randomly)
</code></pre><p>You may pass an integer to <code>random</code> to specify how many items you would like to randomly retrieve. A collection of items is always returned when explicitly passing the number of items you wish to receive:</p><pre><code>$random = $collection-&gt;random(3);

$random-&gt;all();

// [2, 4, 5] - (retrieved randomly)
</code></pre><p>If the collection instance has fewer items than requested, the <code>random</code> method will throw an <code>InvalidArgumentException</code>.</p><p>The <code>random</code> method also accepts a closure, which will receive the current collection instance:</p><pre><code>use Illuminate\\Support\\Collection;

$random = $collection-&gt;random(fn (Collection $items) =&gt; min(10, count($items)));

$random-&gt;all();

// [1, 2, 3, 4, 5] - (retrieved randomly)
</code></pre><p><a name="method-range"></a></p><h4 id="range-collection-method" tabindex="-1"><a class="header-anchor" href="#range-collection-method" aria-hidden="true">#</a> <code>range()</code> {.collection-method}</h4><p>The <code>range</code> method returns a collection containing integers between the specified range:</p><pre><code>$collection = collect()-&gt;range(3, 6);

$collection-&gt;all();

// [3, 4, 5, 6]
</code></pre><p><a name="method-reduce"></a></p><h4 id="reduce-collection-method" tabindex="-1"><a class="header-anchor" href="#reduce-collection-method" aria-hidden="true">#</a> <code>reduce()</code> {.collection-method}</h4><p>The <code>reduce</code> method reduces the collection to a single value, passing the result of each iteration into the subsequent iteration:</p><pre><code>$collection = collect([1, 2, 3]);

$total = $collection-&gt;reduce(function (?int $carry, int $item) {
    return $carry + $item;
});

// 6
</code></pre><p>The value for <code>$carry</code> on the first iteration is <code>null</code>; however, you may specify its initial value by passing a second argument to <code>reduce</code>:</p><pre><code>$collection-&gt;reduce(function (int $carry, int $item) {
    return $carry + $item;
}, 4);

// 10
</code></pre><p>The <code>reduce</code> method also passes array keys in associative collections to the given callback:</p><pre><code>$collection = collect([
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
</code></pre><p><a name="method-reduce-spread"></a></p><h4 id="reducespread-collection-method" tabindex="-1"><a class="header-anchor" href="#reducespread-collection-method" aria-hidden="true">#</a> <code>reduceSpread()</code> {.collection-method}</h4><p>The <code>reduceSpread</code> method reduces the collection to an array of values, passing the results of each iteration into the subsequent iteration. This method is similar to the <code>reduce</code> method; however, it can accept multiple initial values:</p><pre><code>[$creditsRemaining, $batch] = Image::where(&#39;status&#39;, &#39;unprocessed&#39;)
    -&gt;get()
    -&gt;reduceSpread(function (int $creditsRemaining, Collection $batch, Image $image) {
        if ($creditsRemaining &gt;= $image-&gt;creditsRequired()) {
            $batch-&gt;push($image);

            $creditsRemaining -= $image-&gt;creditsRequired();
        }

        return [$creditsRemaining, $batch];
    }, $creditsAvailable, collect());
</code></pre><p><a name="method-reject"></a></p><h4 id="reject-collection-method" tabindex="-1"><a class="header-anchor" href="#reject-collection-method" aria-hidden="true">#</a> <code>reject()</code> {.collection-method}</h4><p>The <code>reject</code> method filters the collection using the given closure. The closure should return <code>true</code> if the item should be removed from the resulting collection:</p><pre><code>$collection = collect([1, 2, 3, 4]);

$filtered = $collection-&gt;reject(function (int $value, int $key) {
    return $value &gt; 2;
});

$filtered-&gt;all();

// [1, 2]
</code></pre><p>For the inverse of the <code>reject</code> method, see the <a href="#method-filter"><code>filter</code></a> method.</p><p><a name="method-replace"></a></p><h4 id="replace-collection-method" tabindex="-1"><a class="header-anchor" href="#replace-collection-method" aria-hidden="true">#</a> <code>replace()</code> {.collection-method}</h4><p>The <code>replace</code> method behaves similarly to <code>merge</code>; however, in addition to overwriting matching items that have string keys, the <code>replace</code> method will also overwrite items in the collection that have matching numeric keys:</p><pre><code>$collection = collect([&#39;Taylor&#39;, &#39;Abigail&#39;, &#39;James&#39;]);

$replaced = $collection-&gt;replace([1 =&gt; &#39;Victoria&#39;, 3 =&gt; &#39;Finn&#39;]);

$replaced-&gt;all();

// [&#39;Taylor&#39;, &#39;Victoria&#39;, &#39;James&#39;, &#39;Finn&#39;]
</code></pre><p><a name="method-replacerecursive"></a></p><h4 id="replacerecursive-collection-method" tabindex="-1"><a class="header-anchor" href="#replacerecursive-collection-method" aria-hidden="true">#</a> <code>replaceRecursive()</code> {.collection-method}</h4><p>This method works like <code>replace</code>, but it will recur into arrays and apply the same replacement process to the inner values:</p><pre><code>$collection = collect([
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
</code></pre><p><a name="method-reverse"></a></p><h4 id="reverse-collection-method" tabindex="-1"><a class="header-anchor" href="#reverse-collection-method" aria-hidden="true">#</a> <code>reverse()</code> {.collection-method}</h4><p>The <code>reverse</code> method reverses the order of the collection&#39;s items, preserving the original keys:</p><pre><code>$collection = collect([&#39;a&#39;, &#39;b&#39;, &#39;c&#39;, &#39;d&#39;, &#39;e&#39;]);

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
</code></pre><p><a name="method-search"></a></p><h4 id="search-collection-method" tabindex="-1"><a class="header-anchor" href="#search-collection-method" aria-hidden="true">#</a> <code>search()</code> {.collection-method}</h4><p>The <code>search</code> method searches the collection for the given value and returns its key if found. If the item is not found, <code>false</code> is returned:</p><pre><code>$collection = collect([2, 4, 6, 8]);

$collection-&gt;search(4);

// 1
</code></pre><p>The search is done using a &quot;loose&quot; comparison, meaning a string with an integer value will be considered equal to an integer of the same value. To use &quot;strict&quot; comparison, pass <code>true</code> as the second argument to the method:</p><pre><code>collect([2, 4, 6, 8])-&gt;search(&#39;4&#39;, $strict = true);

// false
</code></pre><p>Alternatively, you may provide your own closure to search for the first item that passes a given truth test:</p><pre><code>collect([2, 4, 6, 8])-&gt;search(function (int $item, int $key) {
    return $item &gt; 5;
});

// 2
</code></pre><p><a name="method-shift"></a></p><h4 id="shift-collection-method" tabindex="-1"><a class="header-anchor" href="#shift-collection-method" aria-hidden="true">#</a> <code>shift()</code> {.collection-method}</h4><p>The <code>shift</code> method removes and returns the first item from the collection:</p><pre><code>$collection = collect([1, 2, 3, 4, 5]);

$collection-&gt;shift();

// 1

$collection-&gt;all();

// [2, 3, 4, 5]
</code></pre><p>You may pass an integer to the <code>shift</code> method to remove and return multiple items from the beginning of a collection:</p><pre><code>$collection = collect([1, 2, 3, 4, 5]);

$collection-&gt;shift(3);

// collect([1, 2, 3])

$collection-&gt;all();

// [4, 5]
</code></pre><p><a name="method-shuffle"></a></p><h4 id="shuffle-collection-method" tabindex="-1"><a class="header-anchor" href="#shuffle-collection-method" aria-hidden="true">#</a> <code>shuffle()</code> {.collection-method}</h4><p>The <code>shuffle</code> method randomly shuffles the items in the collection:</p><pre><code>$collection = collect([1, 2, 3, 4, 5]);

$shuffled = $collection-&gt;shuffle();

$shuffled-&gt;all();

// [3, 2, 5, 1, 4] - (generated randomly)
</code></pre><p><a name="method-skip"></a></p><h4 id="skip-collection-method" tabindex="-1"><a class="header-anchor" href="#skip-collection-method" aria-hidden="true">#</a> <code>skip()</code> {.collection-method}</h4><p>The <code>skip</code> method returns a new collection, with the given number of elements removed from the beginning of the collection:</p><pre><code>$collection = collect([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

$collection = $collection-&gt;skip(4);

$collection-&gt;all();

// [5, 6, 7, 8, 9, 10]
</code></pre><p><a name="method-skipuntil"></a></p><h4 id="skipuntil-collection-method" tabindex="-1"><a class="header-anchor" href="#skipuntil-collection-method" aria-hidden="true">#</a> <code>skipUntil()</code> {.collection-method}</h4><p>The <code>skipUntil</code> method skips over items from the collection until the given callback returns <code>true</code> and then returns the remaining items in the collection as a new collection instance:</p><pre><code>$collection = collect([1, 2, 3, 4]);

$subset = $collection-&gt;skipUntil(function (int $item) {
    return $item &gt;= 3;
});

$subset-&gt;all();

// [3, 4]
</code></pre><p>You may also pass a simple value to the <code>skipUntil</code> method to skip all items until the given value is found:</p><pre><code>$collection = collect([1, 2, 3, 4]);

$subset = $collection-&gt;skipUntil(3);

$subset-&gt;all();

// [3, 4]
</code></pre><blockquote><p><strong>Warning</strong><br> If the given value is not found or the callback never returns <code>true</code>, the <code>skipUntil</code> method will return an empty collection.</p></blockquote><p><a name="method-skipwhile"></a></p><h4 id="skipwhile-collection-method" tabindex="-1"><a class="header-anchor" href="#skipwhile-collection-method" aria-hidden="true">#</a> <code>skipWhile()</code> {.collection-method}</h4><p>The <code>skipWhile</code> method skips over items from the collection while the given callback returns <code>true</code> and then returns the remaining items in the collection as a new collection:</p><pre><code>$collection = collect([1, 2, 3, 4]);

$subset = $collection-&gt;skipWhile(function (int $item) {
    return $item &lt;= 3;
});

$subset-&gt;all();

// [4]
</code></pre><blockquote><p><strong>Warning</strong><br> If the callback never returns <code>false</code>, the <code>skipWhile</code> method will return an empty collection.</p></blockquote><p><a name="method-slice"></a></p><h4 id="slice-collection-method" tabindex="-1"><a class="header-anchor" href="#slice-collection-method" aria-hidden="true">#</a> <code>slice()</code> {.collection-method}</h4><p>The <code>slice</code> method returns a slice of the collection starting at the given index:</p><pre><code>$collection = collect([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

$slice = $collection-&gt;slice(4);

$slice-&gt;all();

// [5, 6, 7, 8, 9, 10]
</code></pre><p>If you would like to limit the size of the returned slice, pass the desired size as the second argument to the method:</p><pre><code>$slice = $collection-&gt;slice(4, 2);

$slice-&gt;all();

// [5, 6]
</code></pre><p>The returned slice will preserve keys by default. If you do not wish to preserve the original keys, you can use the <a href="#method-values"><code>values</code></a> method to reindex them.</p><p><a name="method-sliding"></a></p><h4 id="sliding-collection-method" tabindex="-1"><a class="header-anchor" href="#sliding-collection-method" aria-hidden="true">#</a> <code>sliding()</code> {.collection-method}</h4><p>The <code>sliding</code> method returns a new collection of chunks representing a &quot;sliding window&quot; view of the items in the collection:</p><pre><code>$collection = collect([1, 2, 3, 4, 5]);

$chunks = $collection-&gt;sliding(2);

$chunks-&gt;toArray();

// [[1, 2], [2, 3], [3, 4], [4, 5]]
</code></pre><p>This is especially useful in conjunction with the <a href="#method-eachspread"><code>eachSpread</code></a> method:</p><pre><code>$transactions-&gt;sliding(2)-&gt;eachSpread(function (Collection $previous, Collection $current) {
    $current-&gt;total = $previous-&gt;total + $current-&gt;amount;
});
</code></pre><p>You may optionally pass a second &quot;step&quot; value, which determines the distance between the first item of every chunk:</p><pre><code>$collection = collect([1, 2, 3, 4, 5]);

$chunks = $collection-&gt;sliding(3, step: 2);

$chunks-&gt;toArray();

// [[1, 2, 3], [3, 4, 5]]
</code></pre><p><a name="method-sole"></a></p><h4 id="sole-collection-method" tabindex="-1"><a class="header-anchor" href="#sole-collection-method" aria-hidden="true">#</a> <code>sole()</code> {.collection-method}</h4><p>The <code>sole</code> method returns the first element in the collection that passes a given truth test, but only if the truth test matches exactly one element:</p><pre><code>collect([1, 2, 3, 4])-&gt;sole(function (int $value, int $key) {
    return $value === 2;
});

// 2
</code></pre><p>You may also pass a key / value pair to the <code>sole</code> method, which will return the first element in the collection that matches the given pair, but only if it exactly one element matches:</p><pre><code>$collection = collect([
    [&#39;product&#39; =&gt; &#39;Desk&#39;, &#39;price&#39; =&gt; 200],
    [&#39;product&#39; =&gt; &#39;Chair&#39;, &#39;price&#39; =&gt; 100],
]);

$collection-&gt;sole(&#39;product&#39;, &#39;Chair&#39;);

// [&#39;product&#39; =&gt; &#39;Chair&#39;, &#39;price&#39; =&gt; 100]
</code></pre><p>Alternatively, you may also call the <code>sole</code> method with no argument to get the first element in the collection if there is only one element:</p><pre><code>$collection = collect([
    [&#39;product&#39; =&gt; &#39;Desk&#39;, &#39;price&#39; =&gt; 200],
]);

$collection-&gt;sole();

// [&#39;product&#39; =&gt; &#39;Desk&#39;, &#39;price&#39; =&gt; 200]
</code></pre><p>If there are no elements in the collection that should be returned by the <code>sole</code> method, an <code>\\Illuminate\\Collections\\ItemNotFoundException</code> exception will be thrown. If there is more than one element that should be returned, an <code>\\Illuminate\\Collections\\MultipleItemsFoundException</code> will be thrown.</p><p><a name="method-some"></a></p><h4 id="some-collection-method" tabindex="-1"><a class="header-anchor" href="#some-collection-method" aria-hidden="true">#</a> <code>some()</code> {.collection-method}</h4><p>Alias for the <a href="#method-contains"><code>contains</code></a> method.</p><p><a name="method-sort"></a></p><h4 id="sort-collection-method" tabindex="-1"><a class="header-anchor" href="#sort-collection-method" aria-hidden="true">#</a> <code>sort()</code> {.collection-method}</h4><p>The <code>sort</code> method sorts the collection. The sorted collection keeps the original array keys, so in the following example we will use the <a href="#method-values"><code>values</code></a> method to reset the keys to consecutively numbered indexes:</p><pre><code>$collection = collect([5, 3, 1, 2, 4]);

$sorted = $collection-&gt;sort();

$sorted-&gt;values()-&gt;all();

// [1, 2, 3, 4, 5]
</code></pre>`,165),z=e("code",null,"sort",-1),E={href:"https://secure.php.net/manual/en/function.uasort.php#refsect1-function.uasort-parameters",target:"_blank",rel:"noopener noreferrer"},N=e("code",null,"uasort",-1),U=e("code",null,"sort",-1),J=t(`<blockquote><p><strong>Note</strong><br> If you need to sort a collection of nested arrays or objects, see the <a href="#method-sortby"><code>sortBy</code></a> and <a href="#method-sortbydesc"><code>sortByDesc</code></a> methods.</p></blockquote><p><a name="method-sortby"></a></p><h4 id="sortby-collection-method" tabindex="-1"><a class="header-anchor" href="#sortby-collection-method" aria-hidden="true">#</a> <code>sortBy()</code> {.collection-method}</h4><p>The <code>sortBy</code> method sorts the collection by the given key. The sorted collection keeps the original array keys, so in the following example we will use the <a href="#method-values"><code>values</code></a> method to reset the keys to consecutively numbered indexes:</p><pre><code>$collection = collect([
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
</code></pre>`,5),R=e("code",null,"sortBy",-1),j={href:"https://www.php.net/manual/en/function.sort.php",target:"_blank",rel:"noopener noreferrer"},P=t(`<pre><code>$collection = collect([
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
</code></pre><p>Alternatively, you may pass your own closure to determine how to sort the collection&#39;s values:</p><pre><code>$collection = collect([
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
</code></pre><p>If you would like to sort your collection by multiple attributes, you may pass an array of sort operations to the <code>sortBy</code> method. Each sort operation should be an array consisting of the attribute that you wish to sort by and the direction of the desired sort:</p><pre><code>$collection = collect([
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
</code></pre><p>When sorting a collection by multiple attributes, you may also provide closures that define each sort operation:</p><pre><code>$collection = collect([
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
</code></pre><p><a name="method-sortbydesc"></a></p><h4 id="sortbydesc-collection-method" tabindex="-1"><a class="header-anchor" href="#sortbydesc-collection-method" aria-hidden="true">#</a> <code>sortByDesc()</code> {.collection-method}</h4><p>This method has the same signature as the <a href="#method-sortby"><code>sortBy</code></a> method, but will sort the collection in the opposite order.</p><p><a name="method-sortdesc"></a></p><h4 id="sortdesc-collection-method" tabindex="-1"><a class="header-anchor" href="#sortdesc-collection-method" aria-hidden="true">#</a> <code>sortDesc()</code> {.collection-method}</h4><p>This method will sort the collection in the opposite order as the <a href="#method-sort"><code>sort</code></a> method:</p><pre><code>$collection = collect([5, 3, 1, 2, 4]);

$sorted = $collection-&gt;sortDesc();

$sorted-&gt;values()-&gt;all();

// [5, 4, 3, 2, 1]
</code></pre><p>Unlike <code>sort</code>, you may not pass a closure to <code>sortDesc</code>. Instead, you should use the <a href="#method-sort"><code>sort</code></a> method and invert your comparison.</p><p><a name="method-sortkeys"></a></p><h4 id="sortkeys-collection-method" tabindex="-1"><a class="header-anchor" href="#sortkeys-collection-method" aria-hidden="true">#</a> <code>sortKeys()</code> {.collection-method}</h4><p>The <code>sortKeys</code> method sorts the collection by the keys of the underlying associative array:</p><pre><code>$collection = collect([
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
</code></pre><p><a name="method-sortkeysdesc"></a></p><h4 id="sortkeysdesc-collection-method" tabindex="-1"><a class="header-anchor" href="#sortkeysdesc-collection-method" aria-hidden="true">#</a> <code>sortKeysDesc()</code> {.collection-method}</h4><p>This method has the same signature as the <a href="#method-sortkeys"><code>sortKeys</code></a> method, but will sort the collection in the opposite order.</p><p><a name="method-sortkeysusing"></a></p><h4 id="sortkeysusing-collection-method" tabindex="-1"><a class="header-anchor" href="#sortkeysusing-collection-method" aria-hidden="true">#</a> <code>sortKeysUsing()</code> {.collection-method}</h4><p>The <code>sortKeysUsing</code> method sorts the collection by the keys of the underlying associative array using a callback:</p><pre><code>$collection = collect([
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
</code></pre>`,26),L={href:"https://www.php.net/manual/en/function.uksort.php#refsect1-function.uksort-parameters",target:"_blank",rel:"noopener noreferrer"},W=e("code",null,"uksort",-1),M=e("code",null,"sortKeysUsing",-1),O=t(`<p><a name="method-splice"></a></p><h4 id="splice-collection-method" tabindex="-1"><a class="header-anchor" href="#splice-collection-method" aria-hidden="true">#</a> <code>splice()</code> {.collection-method}</h4><p>The <code>splice</code> method removes and returns a slice of items starting at the specified index:</p><pre><code>$collection = collect([1, 2, 3, 4, 5]);

$chunk = $collection-&gt;splice(2);

$chunk-&gt;all();

// [3, 4, 5]

$collection-&gt;all();

// [1, 2]
</code></pre><p>You may pass a second argument to limit the size of the resulting collection:</p><pre><code>$collection = collect([1, 2, 3, 4, 5]);

$chunk = $collection-&gt;splice(2, 1);

$chunk-&gt;all();

// [3]

$collection-&gt;all();

// [1, 2, 4, 5]
</code></pre><p>In addition, you may pass a third argument containing the new items to replace the items removed from the collection:</p><pre><code>$collection = collect([1, 2, 3, 4, 5]);

$chunk = $collection-&gt;splice(2, 1, [10, 11]);

$chunk-&gt;all();

// [3]

$collection-&gt;all();

// [1, 2, 10, 11, 4, 5]
</code></pre><p><a name="method-split"></a></p><h4 id="split-collection-method" tabindex="-1"><a class="header-anchor" href="#split-collection-method" aria-hidden="true">#</a> <code>split()</code> {.collection-method}</h4><p>The <code>split</code> method breaks a collection into the given number of groups:</p><pre><code>$collection = collect([1, 2, 3, 4, 5]);

$groups = $collection-&gt;split(3);

$groups-&gt;all();

// [[1, 2], [3, 4], [5]]
</code></pre><p><a name="method-splitin"></a></p><h4 id="splitin-collection-method" tabindex="-1"><a class="header-anchor" href="#splitin-collection-method" aria-hidden="true">#</a> <code>splitIn()</code> {.collection-method}</h4><p>The <code>splitIn</code> method breaks a collection into the given number of groups, filling non-terminal groups completely before allocating the remainder to the final group:</p><pre><code>$collection = collect([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

$groups = $collection-&gt;splitIn(3);

$groups-&gt;all();

// [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10]]
</code></pre><p><a name="method-sum"></a></p><h4 id="sum-collection-method" tabindex="-1"><a class="header-anchor" href="#sum-collection-method" aria-hidden="true">#</a> <code>sum()</code> {.collection-method}</h4><p>The <code>sum</code> method returns the sum of all items in the collection:</p><pre><code>collect([1, 2, 3, 4, 5])-&gt;sum();

// 15
</code></pre><p>If the collection contains nested arrays or objects, you should pass a key that will be used to determine which values to sum:</p><pre><code>$collection = collect([
    [&#39;name&#39; =&gt; &#39;JavaScript: The Good Parts&#39;, &#39;pages&#39; =&gt; 176],
    [&#39;name&#39; =&gt; &#39;JavaScript: The Definitive Guide&#39;, &#39;pages&#39; =&gt; 1096],
]);

$collection-&gt;sum(&#39;pages&#39;);

// 1272
</code></pre><p>In addition, you may pass your own closure to determine which values of the collection to sum:</p><pre><code>$collection = collect([
    [&#39;name&#39; =&gt; &#39;Chair&#39;, &#39;colors&#39; =&gt; [&#39;Black&#39;]],
    [&#39;name&#39; =&gt; &#39;Desk&#39;, &#39;colors&#39; =&gt; [&#39;Black&#39;, &#39;Mahogany&#39;]],
    [&#39;name&#39; =&gt; &#39;Bookcase&#39;, &#39;colors&#39; =&gt; [&#39;Red&#39;, &#39;Beige&#39;, &#39;Brown&#39;]],
]);

$collection-&gt;sum(function (array $product) {
    return count($product[&#39;colors&#39;]);
});

// 6
</code></pre><p><a name="method-take"></a></p><h4 id="take-collection-method" tabindex="-1"><a class="header-anchor" href="#take-collection-method" aria-hidden="true">#</a> <code>take()</code> {.collection-method}</h4><p>The <code>take</code> method returns a new collection with the specified number of items:</p><pre><code>$collection = collect([0, 1, 2, 3, 4, 5]);

$chunk = $collection-&gt;take(3);

$chunk-&gt;all();

// [0, 1, 2]
</code></pre><p>You may also pass a negative integer to take the specified number of items from the end of the collection:</p><pre><code>$collection = collect([0, 1, 2, 3, 4, 5]);

$chunk = $collection-&gt;take(-2);

$chunk-&gt;all();

// [4, 5]
</code></pre><p><a name="method-takeuntil"></a></p><h4 id="takeuntil-collection-method" tabindex="-1"><a class="header-anchor" href="#takeuntil-collection-method" aria-hidden="true">#</a> <code>takeUntil()</code> {.collection-method}</h4><p>The <code>takeUntil</code> method returns items in the collection until the given callback returns <code>true</code>:</p><pre><code>$collection = collect([1, 2, 3, 4]);

$subset = $collection-&gt;takeUntil(function (int $item) {
    return $item &gt;= 3;
});

$subset-&gt;all();

// [1, 2]
</code></pre><p>You may also pass a simple value to the <code>takeUntil</code> method to get the items until the given value is found:</p><pre><code>$collection = collect([1, 2, 3, 4]);

$subset = $collection-&gt;takeUntil(3);

$subset-&gt;all();

// [1, 2]
</code></pre><blockquote><p><strong>Warning</strong><br> If the given value is not found or the callback never returns <code>true</code>, the <code>takeUntil</code> method will return all items in the collection.</p></blockquote><p><a name="method-takewhile"></a></p><h4 id="takewhile-collection-method" tabindex="-1"><a class="header-anchor" href="#takewhile-collection-method" aria-hidden="true">#</a> <code>takeWhile()</code> {.collection-method}</h4><p>The <code>takeWhile</code> method returns items in the collection until the given callback returns <code>false</code>:</p><pre><code>$collection = collect([1, 2, 3, 4]);

$subset = $collection-&gt;takeWhile(function (int $item) {
    return $item &lt; 3;
});

$subset-&gt;all();

// [1, 2]
</code></pre><blockquote><p><strong>Warning</strong><br> If the callback never returns <code>false</code>, the <code>takeWhile</code> method will return all items in the collection.</p></blockquote><p><a name="method-tap"></a></p><h4 id="tap-collection-method" tabindex="-1"><a class="header-anchor" href="#tap-collection-method" aria-hidden="true">#</a> <code>tap()</code> {.collection-method}</h4><p>The <code>tap</code> method passes the collection to the given callback, allowing you to &quot;tap&quot; into the collection at a specific point and do something with the items while not affecting the collection itself. The collection is then returned by the <code>tap</code> method:</p><pre><code>collect([2, 4, 3, 1, 5])
    -&gt;sort()
    -&gt;tap(function (Collection $collection) {
        Log::debug(&#39;Values after sorting&#39;, $collection-&gt;values()-&gt;all());
    })
    -&gt;shift();

// 1
</code></pre><p><a name="method-times"></a></p><h4 id="times-collection-method" tabindex="-1"><a class="header-anchor" href="#times-collection-method" aria-hidden="true">#</a> <code>times()</code> {.collection-method}</h4><p>The static <code>times</code> method creates a new collection by invoking the given closure a specified number of times:</p><pre><code>$collection = Collection::times(10, function (int $number) {
    return $number * 9;
});

$collection-&gt;all();

// [9, 18, 27, 36, 45, 54, 63, 72, 81, 90]
</code></pre><p><a name="method-toarray"></a></p><h4 id="toarray-collection-method" tabindex="-1"><a class="header-anchor" href="#toarray-collection-method" aria-hidden="true">#</a> <code>toArray()</code> {.collection-method}</h4><p>The <code>toArray</code> method converts the collection into a plain PHP <code>array</code>. If the collection&#39;s values are <a href="./eloquent">Eloquent</a> models, the models will also be converted to arrays:</p><pre><code>$collection = collect([&#39;name&#39; =&gt; &#39;Desk&#39;, &#39;price&#39; =&gt; 200]);

$collection-&gt;toArray();

/*
    [
        [&#39;name&#39; =&gt; &#39;Desk&#39;, &#39;price&#39; =&gt; 200],
    ]
*/
</code></pre><blockquote><p><strong>Warning</strong><br><code>toArray</code> also converts all of the collection&#39;s nested objects that are an instance of <code>Arrayable</code> to an array. If you want to get the raw array underlying the collection, use the <a href="#method-all"><code>all</code></a> method instead.</p></blockquote><p><a name="method-tojson"></a></p><h4 id="tojson-collection-method" tabindex="-1"><a class="header-anchor" href="#tojson-collection-method" aria-hidden="true">#</a> <code>toJson()</code> {.collection-method}</h4><p>The <code>toJson</code> method converts the collection into a JSON serialized string:</p><pre><code>$collection = collect([&#39;name&#39; =&gt; &#39;Desk&#39;, &#39;price&#39; =&gt; 200]);

$collection-&gt;toJson();

// &#39;{&quot;name&quot;:&quot;Desk&quot;, &quot;price&quot;:200}&#39;
</code></pre><p><a name="method-transform"></a></p><h4 id="transform-collection-method" tabindex="-1"><a class="header-anchor" href="#transform-collection-method" aria-hidden="true">#</a> <code>transform()</code> {.collection-method}</h4><p>The <code>transform</code> method iterates over the collection and calls the given callback with each item in the collection. The items in the collection will be replaced by the values returned by the callback:</p><pre><code>$collection = collect([1, 2, 3, 4, 5]);

$collection-&gt;transform(function (int $item, int $key) {
    return $item * 2;
});

$collection-&gt;all();

// [2, 4, 6, 8, 10]
</code></pre><blockquote><p><strong>Warning</strong><br> Unlike most other collection methods, <code>transform</code> modifies the collection itself. If you wish to create a new collection instead, use the <a href="#method-map"><code>map</code></a> method.</p></blockquote><p><a name="method-undot"></a></p><h4 id="undot-collection-method" tabindex="-1"><a class="header-anchor" href="#undot-collection-method" aria-hidden="true">#</a> <code>undot()</code> {.collection-method}</h4><p>The <code>undot</code> method expands a single-dimensional collection that uses &quot;dot&quot; notation into a multi-dimensional collection:</p><pre><code>$person = collect([
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
</code></pre><p><a name="method-union"></a></p><h4 id="union-collection-method" tabindex="-1"><a class="header-anchor" href="#union-collection-method" aria-hidden="true">#</a> <code>union()</code> {.collection-method}</h4><p>The <code>union</code> method adds the given array to the collection. If the given array contains keys that are already in the original collection, the original collection&#39;s values will be preferred:</p><pre><code>$collection = collect([1 =&gt; [&#39;a&#39;], 2 =&gt; [&#39;b&#39;]]);

$union = $collection-&gt;union([3 =&gt; [&#39;c&#39;], 1 =&gt; [&#39;d&#39;]]);

$union-&gt;all();

// [1 =&gt; [&#39;a&#39;], 2 =&gt; [&#39;b&#39;], 3 =&gt; [&#39;c&#39;]]
</code></pre><p><a name="method-unique"></a></p><h4 id="unique-collection-method" tabindex="-1"><a class="header-anchor" href="#unique-collection-method" aria-hidden="true">#</a> <code>unique()</code> {.collection-method}</h4><p>The <code>unique</code> method returns all of the unique items in the collection. The returned collection keeps the original array keys, so in the following example we will use the <a href="#method-values"><code>values</code></a> method to reset the keys to consecutively numbered indexes:</p><pre><code>$collection = collect([1, 1, 2, 2, 3, 4, 2]);

$unique = $collection-&gt;unique();

$unique-&gt;values()-&gt;all();

// [1, 2, 3, 4]
</code></pre><p>When dealing with nested arrays or objects, you may specify the key used to determine uniqueness:</p><pre><code>$collection = collect([
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
</code></pre><p>Finally, you may also pass your own closure to the <code>unique</code> method to specify which value should determine an item&#39;s uniqueness:</p><pre><code>$unique = $collection-&gt;unique(function (array $item) {
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
</code></pre><p>The <code>unique</code> method uses &quot;loose&quot; comparisons when checking item values, meaning a string with an integer value will be considered equal to an integer of the same value. Use the <a href="#method-uniquestrict"><code>uniqueStrict</code></a> method to filter using &quot;strict&quot; comparisons.</p><blockquote><p><strong>Note</strong><br> This method&#39;s behavior is modified when using <a href="./eloquent-collections#method-unique">Eloquent Collections</a>.</p></blockquote><p><a name="method-uniquestrict"></a></p><h4 id="uniquestrict-collection-method" tabindex="-1"><a class="header-anchor" href="#uniquestrict-collection-method" aria-hidden="true">#</a> <code>uniqueStrict()</code> {.collection-method}</h4><p>This method has the same signature as the <a href="#method-unique"><code>unique</code></a> method; however, all values are compared using &quot;strict&quot; comparisons.</p><p><a name="method-unless"></a></p><h4 id="unless-collection-method" tabindex="-1"><a class="header-anchor" href="#unless-collection-method" aria-hidden="true">#</a> <code>unless()</code> {.collection-method}</h4><p>The <code>unless</code> method will execute the given callback unless the first argument given to the method evaluates to <code>true</code>:</p><pre><code>$collection = collect([1, 2, 3]);

$collection-&gt;unless(true, function (Collection $collection) {
    return $collection-&gt;push(4);
});

$collection-&gt;unless(false, function (Collection $collection) {
    return $collection-&gt;push(5);
});

$collection-&gt;all();

// [1, 2, 3, 5]
</code></pre><p>A second callback may be passed to the <code>unless</code> method. The second callback will be executed when the first argument given to the <code>unless</code> method evaluates to <code>true</code>:</p><pre><code>$collection = collect([1, 2, 3]);

$collection-&gt;unless(true, function (Collection $collection) {
    return $collection-&gt;push(4);
}, function (Collection $collection) {
    return $collection-&gt;push(5);
});

$collection-&gt;all();

// [1, 2, 3, 5]
</code></pre><p>For the inverse of <code>unless</code>, see the <a href="#method-when"><code>when</code></a> method.</p><p><a name="method-unlessempty"></a></p><h4 id="unlessempty-collection-method" tabindex="-1"><a class="header-anchor" href="#unlessempty-collection-method" aria-hidden="true">#</a> <code>unlessEmpty()</code> {.collection-method}</h4><p>Alias for the <a href="#method-whennotempty"><code>whenNotEmpty</code></a> method.</p><p><a name="method-unlessnotempty"></a></p><h4 id="unlessnotempty-collection-method" tabindex="-1"><a class="header-anchor" href="#unlessnotempty-collection-method" aria-hidden="true">#</a> <code>unlessNotEmpty()</code> {.collection-method}</h4><p>Alias for the <a href="#method-whenempty"><code>whenEmpty</code></a> method.</p><p><a name="method-unwrap"></a></p><h4 id="unwrap-collection-method" tabindex="-1"><a class="header-anchor" href="#unwrap-collection-method" aria-hidden="true">#</a> <code>unwrap()</code> {.collection-method}</h4><p>The static <code>unwrap</code> method returns the collection&#39;s underlying items from the given value when applicable:</p><pre><code>Collection::unwrap(collect(&#39;John Doe&#39;));

// [&#39;John Doe&#39;]

Collection::unwrap([&#39;John Doe&#39;]);

// [&#39;John Doe&#39;]

Collection::unwrap(&#39;John Doe&#39;);

// &#39;John Doe&#39;
</code></pre><p><a name="method-value"></a></p><h4 id="value-collection-method" tabindex="-1"><a class="header-anchor" href="#value-collection-method" aria-hidden="true">#</a> <code>value()</code> {.collection-method}</h4><p>The <code>value</code> method retrieves a given value from the first element of the collection:</p><pre><code>$collection = collect([
    [&#39;product&#39; =&gt; &#39;Desk&#39;, &#39;price&#39; =&gt; 200],
    [&#39;product&#39; =&gt; &#39;Speaker&#39;, &#39;price&#39; =&gt; 400],
]);

$value = $collection-&gt;value(&#39;price&#39;);

// 200
</code></pre><p><a name="method-values"></a></p><h4 id="values-collection-method" tabindex="-1"><a class="header-anchor" href="#values-collection-method" aria-hidden="true">#</a> <code>values()</code> {.collection-method}</h4><p>The <code>values</code> method returns a new collection with the keys reset to consecutive integers:</p><pre><code>$collection = collect([
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
</code></pre><p><a name="method-when"></a></p><h4 id="when-collection-method" tabindex="-1"><a class="header-anchor" href="#when-collection-method" aria-hidden="true">#</a> <code>when()</code> {.collection-method}</h4><p>The <code>when</code> method will execute the given callback when the first argument given to the method evaluates to <code>true</code>. The collection instance and the first argument given to the <code>when</code> method will be provided to the closure:</p><pre><code>$collection = collect([1, 2, 3]);

$collection-&gt;when(true, function (Collection $collection, int $value) {
    return $collection-&gt;push(4);
});

$collection-&gt;when(false, function (Collection $collection, int $value) {
    return $collection-&gt;push(5);
});

$collection-&gt;all();

// [1, 2, 3, 4]
</code></pre><p>A second callback may be passed to the <code>when</code> method. The second callback will be executed when the first argument given to the <code>when</code> method evaluates to <code>false</code>:</p><pre><code>$collection = collect([1, 2, 3]);

$collection-&gt;when(false, function (Collection $collection, int $value) {
    return $collection-&gt;push(4);
}, function (Collection $collection) {
    return $collection-&gt;push(5);
});

$collection-&gt;all();

// [1, 2, 3, 5]
</code></pre><p>For the inverse of <code>when</code>, see the <a href="#method-unless"><code>unless</code></a> method.</p><p><a name="method-whenempty"></a></p><h4 id="whenempty-collection-method" tabindex="-1"><a class="header-anchor" href="#whenempty-collection-method" aria-hidden="true">#</a> <code>whenEmpty()</code> {.collection-method}</h4><p>The <code>whenEmpty</code> method will execute the given callback when the collection is empty:</p><pre><code>$collection = collect([&#39;Michael&#39;, &#39;Tom&#39;]);

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
</code></pre><p>A second closure may be passed to the <code>whenEmpty</code> method that will be executed when the collection is not empty:</p><pre><code>$collection = collect([&#39;Michael&#39;, &#39;Tom&#39;]);

$collection-&gt;whenEmpty(function (Collection $collection) {
    return $collection-&gt;push(&#39;Adam&#39;);
}, function (Collection $collection) {
    return $collection-&gt;push(&#39;Taylor&#39;);
});

$collection-&gt;all();

// [&#39;Michael&#39;, &#39;Tom&#39;, &#39;Taylor&#39;]
</code></pre><p>For the inverse of <code>whenEmpty</code>, see the <a href="#method-whennotempty"><code>whenNotEmpty</code></a> method.</p><p><a name="method-whennotempty"></a></p><h4 id="whennotempty-collection-method" tabindex="-1"><a class="header-anchor" href="#whennotempty-collection-method" aria-hidden="true">#</a> <code>whenNotEmpty()</code> {.collection-method}</h4><p>The <code>whenNotEmpty</code> method will execute the given callback when the collection is not empty:</p><pre><code>$collection = collect([&#39;michael&#39;, &#39;tom&#39;]);

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
</code></pre><p>A second closure may be passed to the <code>whenNotEmpty</code> method that will be executed when the collection is empty:</p><pre><code>$collection = collect();

$collection-&gt;whenNotEmpty(function (Collection $collection) {
    return $collection-&gt;push(&#39;adam&#39;);
}, function (Collection $collection) {
    return $collection-&gt;push(&#39;taylor&#39;);
});

$collection-&gt;all();

// [&#39;taylor&#39;]
</code></pre><p>For the inverse of <code>whenNotEmpty</code>, see the <a href="#method-whenempty"><code>whenEmpty</code></a> method.</p><p><a name="method-where"></a></p><h4 id="where-collection-method" tabindex="-1"><a class="header-anchor" href="#where-collection-method" aria-hidden="true">#</a> <code>where()</code> {.collection-method}</h4><p>The <code>where</code> method filters the collection by a given key / value pair:</p><pre><code>$collection = collect([
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
</code></pre><p>The <code>where</code> method uses &quot;loose&quot; comparisons when checking item values, meaning a string with an integer value will be considered equal to an integer of the same value. Use the <a href="#method-wherestrict"><code>whereStrict</code></a> method to filter using &quot;strict&quot; comparisons.</p><p>Optionally, you may pass a comparison operator as the second parameter. Supported operators are: &#39;===&#39;, &#39;!==&#39;, &#39;!=&#39;, &#39;==&#39;, &#39;=&#39;, &#39;&lt;&gt;&#39;, &#39;&gt;&#39;, &#39;&lt;&#39;, &#39;&gt;=&#39;, and &#39;&lt;=&#39;:</p><pre><code>$collection = collect([
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
</code></pre><p><a name="method-wherestrict"></a></p><h4 id="wherestrict-collection-method" tabindex="-1"><a class="header-anchor" href="#wherestrict-collection-method" aria-hidden="true">#</a> <code>whereStrict()</code> {.collection-method}</h4><p>This method has the same signature as the <a href="#method-where"><code>where</code></a> method; however, all values are compared using &quot;strict&quot; comparisons.</p><p><a name="method-wherebetween"></a></p><h4 id="wherebetween-collection-method" tabindex="-1"><a class="header-anchor" href="#wherebetween-collection-method" aria-hidden="true">#</a> <code>whereBetween()</code> {.collection-method}</h4><p>The <code>whereBetween</code> method filters the collection by determining if a specified item value is within a given range:</p><pre><code>$collection = collect([
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
</code></pre><p><a name="method-wherein"></a></p><h4 id="wherein-collection-method" tabindex="-1"><a class="header-anchor" href="#wherein-collection-method" aria-hidden="true">#</a> <code>whereIn()</code> {.collection-method}</h4><p>The <code>whereIn</code> method removes elements from the collection that do not have a specified item value that is contained within the given array:</p><pre><code>$collection = collect([
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
</code></pre><p>The <code>whereIn</code> method uses &quot;loose&quot; comparisons when checking item values, meaning a string with an integer value will be considered equal to an integer of the same value. Use the <a href="#method-whereinstrict"><code>whereInStrict</code></a> method to filter using &quot;strict&quot; comparisons.</p><p><a name="method-whereinstrict"></a></p><h4 id="whereinstrict-collection-method" tabindex="-1"><a class="header-anchor" href="#whereinstrict-collection-method" aria-hidden="true">#</a> <code>whereInStrict()</code> {.collection-method}</h4><p>This method has the same signature as the <a href="#method-wherein"><code>whereIn</code></a> method; however, all values are compared using &quot;strict&quot; comparisons.</p><p><a name="method-whereinstanceof"></a></p><h4 id="whereinstanceof-collection-method" tabindex="-1"><a class="header-anchor" href="#whereinstanceof-collection-method" aria-hidden="true">#</a> <code>whereInstanceOf()</code> {.collection-method}</h4><p>The <code>whereInstanceOf</code> method filters the collection by a given class type:</p><pre><code>use App\\Models\\User;
use App\\Models\\Post;

$collection = collect([
    new User,
    new User,
    new Post,
]);

$filtered = $collection-&gt;whereInstanceOf(User::class);

$filtered-&gt;all();

// [App\\Models\\User, App\\Models\\User]
</code></pre><p><a name="method-wherenotbetween"></a></p><h4 id="wherenotbetween-collection-method" tabindex="-1"><a class="header-anchor" href="#wherenotbetween-collection-method" aria-hidden="true">#</a> <code>whereNotBetween()</code> {.collection-method}</h4><p>The <code>whereNotBetween</code> method filters the collection by determining if a specified item value is outside of a given range:</p><pre><code>$collection = collect([
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
</code></pre><p><a name="method-wherenotin"></a></p><h4 id="wherenotin-collection-method" tabindex="-1"><a class="header-anchor" href="#wherenotin-collection-method" aria-hidden="true">#</a> <code>whereNotIn()</code> {.collection-method}</h4><p>The <code>whereNotIn</code> method removes elements from the collection that have a specified item value that is contained within the given array:</p><pre><code>$collection = collect([
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
</code></pre><p>The <code>whereNotIn</code> method uses &quot;loose&quot; comparisons when checking item values, meaning a string with an integer value will be considered equal to an integer of the same value. Use the <a href="#method-wherenotinstrict"><code>whereNotInStrict</code></a> method to filter using &quot;strict&quot; comparisons.</p><p><a name="method-wherenotinstrict"></a></p><h4 id="wherenotinstrict-collection-method" tabindex="-1"><a class="header-anchor" href="#wherenotinstrict-collection-method" aria-hidden="true">#</a> <code>whereNotInStrict()</code> {.collection-method}</h4><p>This method has the same signature as the <a href="#method-wherenotin"><code>whereNotIn</code></a> method; however, all values are compared using &quot;strict&quot; comparisons.</p><p><a name="method-wherenotnull"></a></p><h4 id="wherenotnull-collection-method" tabindex="-1"><a class="header-anchor" href="#wherenotnull-collection-method" aria-hidden="true">#</a> <code>whereNotNull()</code> {.collection-method}</h4><p>The <code>whereNotNull</code> method returns items from the collection where the given key is not <code>null</code>:</p><pre><code>$collection = collect([
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
</code></pre><p><a name="method-wherenull"></a></p><h4 id="wherenull-collection-method" tabindex="-1"><a class="header-anchor" href="#wherenull-collection-method" aria-hidden="true">#</a> <code>whereNull()</code> {.collection-method}</h4><p>The <code>whereNull</code> method returns items from the collection where the given key is <code>null</code>:</p><pre><code>$collection = collect([
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
</code></pre><p><a name="method-wrap"></a></p><h4 id="wrap-collection-method" tabindex="-1"><a class="header-anchor" href="#wrap-collection-method" aria-hidden="true">#</a> <code>wrap()</code> {.collection-method}</h4><p>The static <code>wrap</code> method wraps the given value in a collection when applicable:</p><pre><code>use Illuminate\\Support\\Collection;

$collection = Collection::wrap(&#39;John Doe&#39;);

$collection-&gt;all();

// [&#39;John Doe&#39;]

$collection = Collection::wrap([&#39;John Doe&#39;]);

$collection-&gt;all();

// [&#39;John Doe&#39;]

$collection = Collection::wrap(collect(&#39;John Doe&#39;));

$collection-&gt;all();

// [&#39;John Doe&#39;]
</code></pre><p><a name="method-zip"></a></p><h4 id="zip-collection-method" tabindex="-1"><a class="header-anchor" href="#zip-collection-method" aria-hidden="true">#</a> <code>zip()</code> {.collection-method}</h4><p>The <code>zip</code> method merges together the values of the given array with the values of the original collection at their corresponding index:</p><pre><code>$collection = collect([&#39;Chair&#39;, &#39;Desk&#39;]);

$zipped = $collection-&gt;zip([100, 200]);

$zipped-&gt;all();

// [[&#39;Chair&#39;, 100], [&#39;Desk&#39;, 200]]
</code></pre><p><a name="higher-order-messages"></a></p><h2 id="higher-order-messages" tabindex="-1"><a class="header-anchor" href="#higher-order-messages" aria-hidden="true">#</a> Higher Order Messages</h2><p>Collections also provide support for &quot;higher order messages&quot;, which are short-cuts for performing common actions on collections. The collection methods that provide higher order messages are: <a href="#method-average"><code>average</code></a>, <a href="#method-avg"><code>avg</code></a>, <a href="#method-contains"><code>contains</code></a>, <a href="#method-each"><code>each</code></a>, <a href="#method-every"><code>every</code></a>, <a href="#method-filter"><code>filter</code></a>, <a href="#method-first"><code>first</code></a>, <a href="#method-flatmap"><code>flatMap</code></a>, <a href="#method-groupby"><code>groupBy</code></a>, <a href="#method-keyby"><code>keyBy</code></a>, <a href="#method-map"><code>map</code></a>, <a href="#method-max"><code>max</code></a>, <a href="#method-min"><code>min</code></a>, <a href="#method-partition"><code>partition</code></a>, <a href="#method-reject"><code>reject</code></a>, <a href="#method-skipuntil"><code>skipUntil</code></a>, <a href="#method-skipwhile"><code>skipWhile</code></a>, <a href="#method-some"><code>some</code></a>, <a href="#method-sortby"><code>sortBy</code></a>, <a href="#method-sortbydesc"><code>sortByDesc</code></a>, <a href="#method-sum"><code>sum</code></a>, <a href="#method-takeuntil"><code>takeUntil</code></a>, <a href="#method-takewhile"><code>takeWhile</code></a>, and <a href="#method-unique"><code>unique</code></a>.</p><p>Each higher order message can be accessed as a dynamic property on a collection instance. For instance, let&#39;s use the <code>each</code> higher order message to call a method on each object within a collection:</p><pre><code>use App\\Models\\User;

$users = User::where(&#39;votes&#39;, &#39;&gt;&#39;, 500)-&gt;get();

$users-&gt;each-&gt;markAsVip();
</code></pre><p>Likewise, we can use the <code>sum</code> higher order message to gather the total number of &quot;votes&quot; for a collection of users:</p><pre><code>$users = User::where(&#39;group&#39;, &#39;Development&#39;)-&gt;get();

return $users-&gt;sum-&gt;votes;
</code></pre><p><a name="lazy-collections"></a></p><h2 id="lazy-collections" tabindex="-1"><a class="header-anchor" href="#lazy-collections" aria-hidden="true">#</a> Lazy Collections</h2><p><a name="lazy-collection-introduction"></a></p><h3 id="introduction-1" tabindex="-1"><a class="header-anchor" href="#introduction-1" aria-hidden="true">#</a> Introduction</h3>`,196),F=e("strong",null,"Warning",-1),K=e("br",null,null,-1),Y={href:"https://www.php.net/manual/en/language.generators.overview.php",target:"_blank",rel:"noopener noreferrer"},G=e("code",null,"Collection",-1),H=e("code",null,"LazyCollection",-1),V={href:"https://www.php.net/manual/en/language.generators.overview.php",target:"_blank",rel:"noopener noreferrer"},X=t(`<p>For example, imagine your application needs to process a multi-gigabyte log file while taking advantage of Laravel&#39;s collection methods to parse the logs. Instead of reading the entire file into memory at once, lazy collections may be used to keep only a small part of the file in memory at a given time:</p><pre><code>use App\\Models\\LogEntry;
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
</code></pre><p>Or, imagine you need to iterate through 10,000 Eloquent models. When using traditional Laravel collections, all 10,000 Eloquent models must be loaded into memory at the same time:</p><pre><code>use App\\Models\\User;

$users = User::all()-&gt;filter(function (User $user) {
    return $user-&gt;id &gt; 500;
});
</code></pre><p>However, the query builder&#39;s <code>cursor</code> method returns a <code>LazyCollection</code> instance. This allows you to still only run a single query against the database but also only keep one Eloquent model loaded in memory at a time. In this example, the <code>filter</code> callback is not executed until we actually iterate over each user individually, allowing for a drastic reduction in memory usage:</p><pre><code>use App\\Models\\User;

$users = User::cursor()-&gt;filter(function (User $user) {
    return $user-&gt;id &gt; 500;
});

foreach ($users as $user) {
    echo $user-&gt;id;
}
</code></pre><p><a name="creating-lazy-collections"></a></p><h3 id="creating-lazy-collections" tabindex="-1"><a class="header-anchor" href="#creating-lazy-collections" aria-hidden="true">#</a> Creating Lazy Collections</h3><p>To create a lazy collection instance, you should pass a PHP generator function to the collection&#39;s <code>make</code> method:</p><pre><code>use Illuminate\\Support\\LazyCollection;

LazyCollection::make(function () {
    $handle = fopen(&#39;log.txt&#39;, &#39;r&#39;);

    while (($line = fgets($handle)) !== false) {
        yield $line;
    }
});
</code></pre><p><a name="the-enumerable-contract"></a></p><h3 id="the-enumerable-contract" tabindex="-1"><a class="header-anchor" href="#the-enumerable-contract" aria-hidden="true">#</a> The Enumerable Contract</h3><p>Almost all methods available on the <code>Collection</code> class are also available on the <code>LazyCollection</code> class. Both of these classes implement the <code>Illuminate\\Support\\Enumerable</code> contract, which defines the following methods:</p>`,13),Q=e("div",{class:"collection-method-list",markdown:"1"},[e("p",null,[e("a",{href:"#method-all"},"all"),e("a",{href:"#method-average"},"average"),e("a",{href:"#method-avg"},"avg"),e("a",{href:"#method-chunk"},"chunk"),e("a",{href:"#method-chunkwhile"},"chunkWhile"),e("a",{href:"#method-collapse"},"collapse"),e("a",{href:"#method-collect"},"collect"),e("a",{href:"#method-combine"},"combine"),e("a",{href:"#method-concat"},"concat"),e("a",{href:"#method-contains"},"contains"),e("a",{href:"#method-containsstrict"},"containsStrict"),e("a",{href:"#method-count"},"count"),e("a",{href:"#method-countBy"},"countBy"),e("a",{href:"#method-crossjoin"},"crossJoin"),e("a",{href:"#method-dd"},"dd"),e("a",{href:"#method-diff"},"diff"),e("a",{href:"#method-diffassoc"},"diffAssoc"),e("a",{href:"#method-diffkeys"},"diffKeys"),e("a",{href:"#method-dump"},"dump"),e("a",{href:"#method-duplicates"},"duplicates"),e("a",{href:"#method-duplicatesstrict"},"duplicatesStrict"),e("a",{href:"#method-each"},"each"),e("a",{href:"#method-eachspread"},"eachSpread"),e("a",{href:"#method-every"},"every"),e("a",{href:"#method-except"},"except"),e("a",{href:"#method-filter"},"filter"),e("a",{href:"#method-first"},"first"),e("a",{href:"#method-first-or-fail"},"firstOrFail"),e("a",{href:"#method-first-where"},"firstWhere"),e("a",{href:"#method-flatmap"},"flatMap"),e("a",{href:"#method-flatten"},"flatten"),e("a",{href:"#method-flip"},"flip"),e("a",{href:"#method-forpage"},"forPage"),e("a",{href:"#method-get"},"get"),e("a",{href:"#method-groupby"},"groupBy"),e("a",{href:"#method-has"},"has"),e("a",{href:"#method-implode"},"implode"),e("a",{href:"#method-intersect"},"intersect"),e("a",{href:"#method-intersectAssoc"},"intersectAssoc"),e("a",{href:"#method-intersectbykeys"},"intersectByKeys"),e("a",{href:"#method-isempty"},"isEmpty"),e("a",{href:"#method-isnotempty"},"isNotEmpty"),e("a",{href:"#method-join"},"join"),e("a",{href:"#method-keyby"},"keyBy"),e("a",{href:"#method-keys"},"keys"),e("a",{href:"#method-last"},"last"),e("a",{href:"#method-macro"},"macro"),e("a",{href:"#method-make"},"make"),e("a",{href:"#method-map"},"map"),e("a",{href:"#method-mapinto"},"mapInto"),e("a",{href:"#method-mapspread"},"mapSpread"),e("a",{href:"#method-maptogroups"},"mapToGroups"),e("a",{href:"#method-mapwithkeys"},"mapWithKeys"),e("a",{href:"#method-max"},"max"),e("a",{href:"#method-median"},"median"),e("a",{href:"#method-merge"},"merge"),e("a",{href:"#method-mergerecursive"},"mergeRecursive"),e("a",{href:"#method-min"},"min"),e("a",{href:"#method-mode"},"mode"),e("a",{href:"#method-nth"},"nth"),e("a",{href:"#method-only"},"only"),e("a",{href:"#method-pad"},"pad"),e("a",{href:"#method-partition"},"partition"),e("a",{href:"#method-pipe"},"pipe"),e("a",{href:"#method-pluck"},"pluck"),e("a",{href:"#method-random"},"random"),e("a",{href:"#method-reduce"},"reduce"),e("a",{href:"#method-reject"},"reject"),e("a",{href:"#method-replace"},"replace"),e("a",{href:"#method-replacerecursive"},"replaceRecursive"),e("a",{href:"#method-reverse"},"reverse"),e("a",{href:"#method-search"},"search"),e("a",{href:"#method-shuffle"},"shuffle"),e("a",{href:"#method-skip"},"skip"),e("a",{href:"#method-slice"},"slice"),e("a",{href:"#method-sole"},"sole"),e("a",{href:"#method-some"},"some"),e("a",{href:"#method-sort"},"sort"),e("a",{href:"#method-sortby"},"sortBy"),e("a",{href:"#method-sortbydesc"},"sortByDesc"),e("a",{href:"#method-sortkeys"},"sortKeys"),e("a",{href:"#method-sortkeysdesc"},"sortKeysDesc"),e("a",{href:"#method-split"},"split"),e("a",{href:"#method-sum"},"sum"),e("a",{href:"#method-take"},"take"),e("a",{href:"#method-tap"},"tap"),e("a",{href:"#method-times"},"times"),e("a",{href:"#method-toarray"},"toArray"),e("a",{href:"#method-tojson"},"toJson"),e("a",{href:"#method-union"},"union"),e("a",{href:"#method-unique"},"unique"),e("a",{href:"#method-uniquestrict"},"uniqueStrict"),e("a",{href:"#method-unless"},"unless"),e("a",{href:"#method-unlessempty"},"unlessEmpty"),e("a",{href:"#method-unlessnotempty"},"unlessNotEmpty"),e("a",{href:"#method-unwrap"},"unwrap"),e("a",{href:"#method-values"},"values"),e("a",{href:"#method-when"},"when"),e("a",{href:"#method-whenempty"},"whenEmpty"),e("a",{href:"#method-whennotempty"},"whenNotEmpty"),e("a",{href:"#method-where"},"where"),e("a",{href:"#method-wherestrict"},"whereStrict"),e("a",{href:"#method-wherebetween"},"whereBetween"),e("a",{href:"#method-wherein"},"whereIn"),e("a",{href:"#method-whereinstrict"},"whereInStrict"),e("a",{href:"#method-whereinstanceof"},"whereInstanceOf"),e("a",{href:"#method-wherenotbetween"},"whereNotBetween"),e("a",{href:"#method-wherenotin"},"whereNotIn"),e("a",{href:"#method-wherenotinstrict"},"whereNotInStrict"),e("a",{href:"#method-wrap"},"wrap"),e("a",{href:"#method-zip"},"zip")])],-1),Z=t(`<blockquote><p><strong>Warning</strong><br> Methods that mutate the collection (such as <code>shift</code>, <code>pop</code>, <code>prepend</code> etc.) are <strong>not</strong> available on the <code>LazyCollection</code> class.</p></blockquote><p><a name="lazy-collection-methods"></a></p><h3 id="lazy-collection-methods" tabindex="-1"><a class="header-anchor" href="#lazy-collection-methods" aria-hidden="true">#</a> Lazy Collection Methods</h3><p>In addition to the methods defined in the <code>Enumerable</code> contract, the <code>LazyCollection</code> class contains the following methods:</p><p><a name="method-takeUntilTimeout"></a></p><h4 id="takeuntiltimeout-collection-method" tabindex="-1"><a class="header-anchor" href="#takeuntiltimeout-collection-method" aria-hidden="true">#</a> <code>takeUntilTimeout()</code> {.collection-method}</h4><p>The <code>takeUntilTimeout</code> method returns a new lazy collection that will enumerate values until the specified time. After that time, the collection will then stop enumerating:</p><pre><code>$lazyCollection = LazyCollection::times(INF)
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
</code></pre><p>To illustrate the usage of this method, imagine an application that submits invoices from the database using a cursor. You could define a <a href="./scheduling">scheduled task</a> that runs every 15 minutes and only processes invoices for a maximum of 14 minutes:</p><pre><code>use App\\Models\\Invoice;
use Illuminate\\Support\\Carbon;

Invoice::pending()-&gt;cursor()
    -&gt;takeUntilTimeout(
        Carbon::createFromTimestamp(LARAVEL_START)-&gt;add(14, &#39;minutes&#39;)
    )
    -&gt;each(fn (Invoice $invoice) =&gt; $invoice-&gt;submit());
</code></pre><p><a name="method-tapEach"></a></p><h4 id="tapeach-collection-method" tabindex="-1"><a class="header-anchor" href="#tapeach-collection-method" aria-hidden="true">#</a> <code>tapEach()</code> {.collection-method}</h4><p>While the <code>each</code> method calls the given callback for each item in the collection right away, the <code>tapEach</code> method only calls the given callback as the items are being pulled out of the list one by one:</p><pre><code>// Nothing has been dumped so far...
$lazyCollection = LazyCollection::times(INF)-&gt;tapEach(function (int $value) {
    dump($value);
});

// Three items are dumped...
$array = $lazyCollection-&gt;take(3)-&gt;all();

// 1
// 2
// 3
</code></pre><p><a name="method-remember"></a></p><h4 id="remember-collection-method" tabindex="-1"><a class="header-anchor" href="#remember-collection-method" aria-hidden="true">#</a> <code>remember()</code> {.collection-method}</h4><p>The <code>remember</code> method returns a new lazy collection that will remember any values that have already been enumerated and will not retrieve them again on subsequent collection enumerations:</p><pre><code>// No query has been executed yet...
$users = User::cursor()-&gt;remember();

// The query is executed...
// The first 5 users are hydrated from the database...
$users-&gt;take(5)-&gt;all();

// First 5 users come from the collection&#39;s cache...
// The rest are hydrated from the database...
$users-&gt;take(20)-&gt;all();
</code></pre>`,18);function ee(oe,te){const n=l("ExternalLinkIcon");return i(),r("div",null,[h,s,p,e("p",null,[o("The "),m,o(" method returns the "),e("a",u,[o("average value"),c(n)]),o(" of a given key:")]),g,e("p",null,[o("This method is especially useful in "),f,o(" when working with a grid system such as "),e("a",y,[o("Bootstrap"),c(n)]),o(". For example, imagine you have a collection of "),$,o(" models you want to display in a grid:")]),b,e("p",null,[o("The callback must be a comparison function that returns an integer less than, equal to, or greater than zero. For more information, refer to the PHP documentation on "),e("a",k,[v,c(n)]),o(", which is the PHP function that the "),w,o(" method utilizes internally.")]),x,e("p",null,[o("The "),T,o(" method returns the "),e("a",q,[o("median value"),c(n)]),o(" of a given key:")]),_,e("p",null,[o("The "),C,o(" method returns the "),e("a",I,[o("mode value"),c(n)]),o(" of a given key:")]),D,e("p",null,[o("The "),A,o(" method will fill the array with the given value until the array reaches the specified size. This method behaves like the "),e("a",B,[o("array_pad"),c(n)]),o(" PHP function.")]),S,e("p",null,[o("If your sorting needs are more advanced, you may pass a callback to "),z,o(" with your own algorithm. Refer to the PHP documentation on "),e("a",E,[N,c(n)]),o(", which is what the collection's "),U,o(" method calls utilizes internally.")]),J,e("p",null,[o("The "),R,o(" method accepts "),e("a",j,[o("sort flags"),c(n)]),o(" as its second argument:")]),P,e("p",null,[o("The callback must be a comparison function that returns an integer less than, equal to, or greater than zero. For more information, refer to the PHP documentation on "),e("a",L,[W,c(n)]),o(", which is the PHP function that "),M,o(" method utilizes internally.")]),O,e("blockquote",null,[e("p",null,[F,K,o(" Before learning more about Laravel's lazy collections, take some time to familiarize yourself with "),e("a",Y,[o("PHP generators"),c(n)]),o(".")])]),e("p",null,[o("To supplement the already powerful "),G,o(" class, the "),H,o(" class leverages PHP's "),e("a",V,[o("generators"),c(n)]),o(" to allow you to work with very large datasets while keeping memory usage low.")]),X,Q,Z])}const ae=a(d,[["render",ee],["__file","collections.html.vue"]]);export{ae as default};
