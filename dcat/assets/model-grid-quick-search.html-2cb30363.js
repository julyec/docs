import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as p,o,c as i,a as s,b as n,d as c,e as a}from"./app-c17653d8.js";const l="/dcat/assets/kxlUFKfd2x-0b97a828.png",u={},r=a(`<h1 id="shortcut-table-search" tabindex="-1"><a class="header-anchor" href="#shortcut-table-search" aria-hidden="true">#</a> Shortcut table search</h1><p>Quick Search is another way to search tabular data in addition to <code>filter</code>, to quickly filter the data you want, open the following way:</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token variable">$grid</span><span class="token operator">-&gt;</span><span class="token function">quickSearch</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Set form prompt value</span>
<span class="token variable">$grid</span><span class="token operator">-&gt;</span><span class="token function">quickSearch</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">placeholder</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;search...&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This will bring up a search box in the table header:</p><p><img src="`+l+`" alt="" loading="lazy"></p><p>By passing different parameters to the <code>quickSearch</code> method, to set up different search methods, there are several ways to use the following</p><h2 id="like-search" tabindex="-1"><a class="header-anchor" href="#like-search" aria-hidden="true">#</a> Like search</h2><p>The first way to do a simple like query is by setting the field name</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token variable">$grid</span><span class="token operator">-&gt;</span><span class="token function">quickSearch</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;title&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// After submission, the model performs the following queries</span>
<span class="token variable">$model</span><span class="token operator">-&gt;</span><span class="token function">where</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;title&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;like&#39;</span><span class="token punctuation">,</span> <span class="token string double-quoted-string">&quot;%<span class="token interpolation"><span class="token punctuation">{</span><span class="token variable">$input</span><span class="token punctuation">}</span></span>%&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Or do like queries on multiple fields:</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token variable">$grid</span><span class="token operator">-&gt;</span><span class="token function">quickSearch</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;title&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;desc&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;content&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// or</span>
<span class="token variable">$grid</span><span class="token operator">-&gt;</span><span class="token function">quickSearch</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;title&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;desc&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;content&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// After submission, the model performs the following queries</span>
<span class="token variable">$model</span><span class="token operator">-&gt;</span><span class="token function">where</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;title&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;like&#39;</span><span class="token punctuation">,</span> <span class="token string double-quoted-string">&quot;%<span class="token interpolation"><span class="token punctuation">{</span><span class="token variable">$input</span><span class="token punctuation">}</span></span>%&quot;</span><span class="token punctuation">)</span>
    <span class="token operator">-&gt;</span><span class="token function">orWhere</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;desc&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;like&#39;</span><span class="token punctuation">,</span> <span class="token string double-quoted-string">&quot;%<span class="token interpolation"><span class="token punctuation">{</span><span class="token variable">$input</span><span class="token punctuation">}</span></span>%&quot;</span><span class="token punctuation">)</span>
    <span class="token operator">-&gt;</span><span class="token function">orWhere</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;content&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;like&#39;</span><span class="token punctuation">,</span> <span class="token string double-quoted-string">&quot;%<span class="token interpolation"><span class="token punctuation">{</span><span class="token variable">$input</span><span class="token punctuation">}</span></span>%&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="relationships" tabindex="-1"><a class="header-anchor" href="#relationships" aria-hidden="true">#</a> relationships</h3>`,12),d={href:"https://github.com/jqhph/laravel-wherehasin",target:"_blank",rel:"noopener noreferrer"},k=s("code",null,"whereHasIn",-1),g=a(`<div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token variable">$grid</span><span class="token operator">-&gt;</span><span class="token function">quickSearch</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;user.name&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;user.username&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;content&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="custom-search" tabindex="-1"><a class="header-anchor" href="#custom-search" aria-hidden="true">#</a> Custom search</h2><p>The second way gives you more flexible control over your search criteria</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token variable">$grid</span><span class="token operator">-&gt;</span><span class="token function">quickSearch</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token variable">$model</span><span class="token punctuation">,</span> <span class="token variable">$query</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token variable">$model</span><span class="token operator">-&gt;</span><span class="token function">where</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;title&#39;</span><span class="token punctuation">,</span> <span class="token variable">$query</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">orWhere</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;desc&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;like&#39;</span><span class="token punctuation">,</span> <span class="token string double-quoted-string">&quot;%<span class="token interpolation"><span class="token punctuation">{</span><span class="token variable">$query</span><span class="token punctuation">}</span></span>%&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>where the parameter <code>$query</code> of the closure is the contents of the search box you fill in, and then submit it for the search in the closure.</p><h2 id="quick-syntax-search" tabindex="-1"><a class="header-anchor" href="#quick-syntax-search" aria-hidden="true">#</a> Quick Syntax Search</h2><p>The third way references the search syntax of <code>Github</code> to perform a quick search, invoked as follows：</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token comment">// non-parametric</span>
<span class="token variable">$grid</span><span class="token operator">-&gt;</span><span class="token function">quickSearch</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>The following syntax will be used to fill in the search box, and the corresponding query will be made after submission :</p><h3 id="compare-queries" tabindex="-1"><a class="header-anchor" href="#compare-queries" aria-hidden="true">#</a> Compare queries</h3><p><code>title:foo</code> 、<code>title:!foo</code></p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token variable">$model</span><span class="token operator">-&gt;</span><span class="token function">where</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;title&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;foo&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token variable">$model</span><span class="token operator">-&gt;</span><span class="token function">where</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;title&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;!=&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;foo&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>rate:&gt;10</code>、<code>rate:&lt;10</code>、<code>rate:&gt;=10</code>、<code>rate:&lt;=10</code></p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token variable">$model</span><span class="token operator">-&gt;</span><span class="token function">where</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;rate&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;&gt;&#39;</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token variable">$model</span><span class="token operator">-&gt;</span><span class="token function">where</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;rate&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;&lt;&#39;</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token variable">$model</span><span class="token operator">-&gt;</span><span class="token function">where</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;rate&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;&gt;=&#39;</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token variable">$model</span><span class="token operator">-&gt;</span><span class="token function">where</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;rate&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;&lt;=&#39;</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="in-notin-queries" tabindex="-1"><a class="header-anchor" href="#in-notin-queries" aria-hidden="true">#</a> In, NotIn queries</h3><p><code>status:(1,2,3,4)</code>、<code>status:!(1,2,3,4)</code></p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token variable">$model</span><span class="token operator">-&gt;</span><span class="token function">whereIn</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;status&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token variable">$model</span><span class="token operator">-&gt;</span><span class="token function">whereNotIn</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;status&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="between-queries" tabindex="-1"><a class="header-anchor" href="#between-queries" aria-hidden="true">#</a> Between queries</h3><p><code>score:[1,10]</code></p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token variable">$model</span><span class="token operator">-&gt;</span><span class="token function">whereBetween</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;score&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="time-and-date-function-queries" tabindex="-1"><a class="header-anchor" href="#time-and-date-function-queries" aria-hidden="true">#</a> Time and date function queries</h3><p><code>created_at:date,2019-06-08</code></p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token variable">$model</span><span class="token operator">-&gt;</span><span class="token function">whereDate</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;created_at&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;2019-06-08&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>created_at:time,09:57:45</code></p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token variable">$model</span><span class="token operator">-&gt;</span><span class="token function">whereTime</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;created_at&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;09:57:45&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>created_at:day,08</code></p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token variable">$model</span><span class="token operator">-&gt;</span><span class="token function">whereDay</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;created_at&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;08&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>created_at:month,06</code></p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token variable">$model</span><span class="token operator">-&gt;</span><span class="token function">whereMonth</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;created_at&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;06&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>created_at:year,2019</code></p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token variable">$model</span><span class="token operator">-&gt;</span><span class="token function">whereYear</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;created_at&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;2019&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="like-search-1" tabindex="-1"><a class="header-anchor" href="#like-search-1" aria-hidden="true">#</a> Like Search</h3><p><code>content:%Laudantium%</code>、<code>content:Laud%</code></p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token variable">$model</span><span class="token operator">-&gt;</span><span class="token function">where</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;content&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;like&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;%Laudantium%&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token variable">$model</span><span class="token operator">-&gt;</span><span class="token function">where</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;content&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;like&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;Laud%&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="regular-query" tabindex="-1"><a class="header-anchor" href="#regular-query" aria-hidden="true">#</a> regular query</h3><p><code>username:/song/</code></p><blockquote><p>{tip} Please use MYSQL regular syntax here</p></blockquote><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token variable">$model</span><span class="token operator">-&gt;</span><span class="token function">where</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;username&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;REGEXP&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;song&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="multi-criteria-combination-search" tabindex="-1"><a class="header-anchor" href="#multi-criteria-combination-search" aria-hidden="true">#</a> Multi-criteria combination search</h3><p>Separate multiple search statements with spaces to achieve multiple fields of the AND query, such as <code>username:%song% status:(1,2,3)</code>, after submission will run the following search</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token variable">$model</span><span class="token operator">-&gt;</span><span class="token function">where</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;username&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;like&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;%song%&#39;</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">whereIn</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;status&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>If a condition is an <code>OR</code> query, just add a | symbol in front of the statement cell: <code>username:%song% |status:(1,2,3)</code></p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token variable">$model</span><span class="token operator">-&gt;</span><span class="token function">where</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;username&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;like&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;%song%&#39;</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">orWhereIn</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;status&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>{tip} If the filled query text contains spaces, it needs to be inside double quotes: <code>updated_at: &quot;2019-06-08 09:57:45&quot;</code></p></blockquote><h3 id="label-as-a-query-field-name" tabindex="-1"><a class="header-anchor" href="#label-as-a-query-field-name" aria-hidden="true">#</a> Label as a query field name</h3><p>If it is not convenient to get the field name, you can simply use the label name as the query field.</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code> <span class="token comment">// For example, if the table header of \`user_status\` is set to \`user_status\`.</span>
<span class="token variable">$grid</span><span class="token operator">-&gt;</span><span class="token function">column</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;user_status&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;user_status&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Then you can fill in <code>user status:(1,2,3)</code> to execute the following query</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token variable">$model</span><span class="token operator">-&gt;</span><span class="token function">whereIn</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;user_status&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="disable-automatic-submission" tabindex="-1"><a class="header-anchor" href="#disable-automatic-submission" aria-hidden="true">#</a> Disable automatic submission</h2><p>If you don&#39;t want auto-submission, you can disable it in the following ways</p><blockquote><p>{tip} When the auto-submit feature is disabled, you need to search by pressing the <code>Enter</code> key.</p></blockquote><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token variable">$grid</span><span class="token operator">-&gt;</span><span class="token function">quickSearch</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">auto</span><span class="token punctuation">(</span><span class="token constant boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,53);function h(m,v){const e=p("ExternalLinkIcon");return o(),i("div",null,[r,s("p",null,[n("If "),s("a",d,[n("dcat/laravel-wherehasin"),c(e)]),n(" is installed, the "),k,n(" method will be used in preference to queries")]),g])}const f=t(u,[["render",h],["__file","model-grid-quick-search.html.vue"]]);export{f as default};