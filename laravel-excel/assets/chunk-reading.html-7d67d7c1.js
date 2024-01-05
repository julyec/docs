import{_ as p}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as c,c as i,b as n,d as e,w as t,e as s,a as l}from"./app-5f6cf456.js";const u={},k=n("h1",{id:"chunk-reading",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#chunk-reading","aria-hidden":"true"},"#"),s(" Chunk reading")],-1),r={class:"table-of-contents"},d=l(`<p>Importing a large file can have a huge impact on the memory usage, as the library will try to load the entire sheet into memory.</p><p>To mitigate this increase in memory usage, you can use the <code>WithChunkReading</code> concern. This will read the spreadsheet in chunks and keep the memory usage under control.</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">namespace</span> <span class="token package">App<span class="token punctuation">\\</span>Imports</span><span class="token punctuation">;</span>

<span class="token keyword">use</span> <span class="token package">App<span class="token punctuation">\\</span>User</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Maatwebsite<span class="token punctuation">\\</span>Excel<span class="token punctuation">\\</span>Concerns<span class="token punctuation">\\</span>ToModel</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Maatwebsite<span class="token punctuation">\\</span>Excel<span class="token punctuation">\\</span>Concerns<span class="token punctuation">\\</span>WithChunkReading</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">UsersImport</span> <span class="token keyword">implements</span> <span class="token class-name">ToModel</span><span class="token punctuation">,</span> WithChunkReading
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">model</span><span class="token punctuation">(</span><span class="token keyword type-hint">array</span> <span class="token variable">$row</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
            <span class="token string single-quoted-string">&#39;name&#39;</span> <span class="token operator">=&gt;</span> <span class="token variable">$row</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">chunkSize</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">int</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token number">1000</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container warning"><p class="hint-container-title">Note</p><p>A chunk size of <code>1000</code> will not be the most optimal situation for your import. Play around with this number to find the sweet spot.</p></div><h2 id="using-it-together-with-batch-inserts" tabindex="-1"><a class="header-anchor" href="#using-it-together-with-batch-inserts" aria-hidden="true">#</a> Using it together with Batch Inserts</h2><p>The most ideal situation (regarding time and memory consumption) you will find when combining batch inserts and chunk reading.</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">namespace</span> <span class="token package">App<span class="token punctuation">\\</span>Imports</span><span class="token punctuation">;</span>

<span class="token keyword">use</span> <span class="token package">App<span class="token punctuation">\\</span>User</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Maatwebsite<span class="token punctuation">\\</span>Excel<span class="token punctuation">\\</span>Concerns<span class="token punctuation">\\</span>ToModel</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Maatwebsite<span class="token punctuation">\\</span>Excel<span class="token punctuation">\\</span>Concerns<span class="token punctuation">\\</span>WithBatchInserts</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Maatwebsite<span class="token punctuation">\\</span>Excel<span class="token punctuation">\\</span>Concerns<span class="token punctuation">\\</span>WithChunkReading</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">UsersImport</span> <span class="token keyword">implements</span> <span class="token class-name">ToModel</span><span class="token punctuation">,</span> WithBatchInserts<span class="token punctuation">,</span> WithChunkReading
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">model</span><span class="token punctuation">(</span><span class="token keyword type-hint">array</span> <span class="token variable">$row</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
            <span class="token string single-quoted-string">&#39;name&#39;</span> <span class="token operator">=&gt;</span> <span class="token variable">$row</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">batchSize</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">int</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token number">1000</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">chunkSize</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">int</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token number">1000</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="keep-track-of-the-row-number" tabindex="-1"><a class="header-anchor" href="#keep-track-of-the-row-number" aria-hidden="true">#</a> Keep Track of the Row number</h2><p>If you need the row number you can use the <code>RemembersRowNumber</code> Trait.</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">namespace</span> <span class="token package">App<span class="token punctuation">\\</span>Imports</span><span class="token punctuation">;</span>

<span class="token keyword">use</span> <span class="token package">App<span class="token punctuation">\\</span>User</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Maatwebsite<span class="token punctuation">\\</span>Excel<span class="token punctuation">\\</span>Concerns<span class="token punctuation">\\</span>ToModel</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Maatwebsite<span class="token punctuation">\\</span>Excel<span class="token punctuation">\\</span>Concerns<span class="token punctuation">\\</span>RemembersRowNumber</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Maatwebsite<span class="token punctuation">\\</span>Excel<span class="token punctuation">\\</span>Concerns<span class="token punctuation">\\</span>WithChunkReading</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">UsersImport</span> <span class="token keyword">implements</span> <span class="token class-name">ToModel</span><span class="token punctuation">,</span> WithChunkReading
<span class="token punctuation">{</span>
    <span class="token keyword">use</span> <span class="token package">RemembersRowNumber</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">model</span><span class="token punctuation">(</span><span class="token keyword type-hint">array</span> <span class="token variable">$row</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token variable">$currentRowNumber</span> <span class="token operator">=</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">getRowNumber</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
            <span class="token string single-quoted-string">&#39;name&#39;</span> <span class="token operator">=&gt;</span> <span class="token variable">$row</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">chunkSize</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">int</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token number">1000</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container warning"><p class="hint-container-title">Note</p><p>Remembering row numbers is only intended for ToModel imports.</p></div><p>If you only need the information about the offset of the chunk you can use the <code>RemembersChunkOffset</code> Trait.</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">namespace</span> <span class="token package">App<span class="token punctuation">\\</span>Imports</span><span class="token punctuation">;</span>

<span class="token keyword">use</span> <span class="token package">App<span class="token punctuation">\\</span>User</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Maatwebsite<span class="token punctuation">\\</span>Excel<span class="token punctuation">\\</span>Concerns<span class="token punctuation">\\</span>ToModel</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Maatwebsite<span class="token punctuation">\\</span>Excel<span class="token punctuation">\\</span>Concerns<span class="token punctuation">\\</span>RemembersChunkOffset</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Maatwebsite<span class="token punctuation">\\</span>Excel<span class="token punctuation">\\</span>Concerns<span class="token punctuation">\\</span>WithChunkReading</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">UsersImport</span> <span class="token keyword">implements</span> <span class="token class-name">ToModel</span><span class="token punctuation">,</span> WithChunkReading
<span class="token punctuation">{</span>
    <span class="token keyword">use</span> <span class="token package">RemembersChunkOffset</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">model</span><span class="token punctuation">(</span><span class="token keyword type-hint">array</span> <span class="token variable">$row</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token variable">$chunkOffset</span> <span class="token operator">=</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">getChunkOffset</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
            <span class="token string single-quoted-string">&#39;name&#39;</span> <span class="token operator">=&gt;</span> <span class="token variable">$row</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">chunkSize</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">int</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token number">1000</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13);function v(m,b){const a=o("router-link");return c(),i("div",null,[k,n("nav",r,[n("ul",null,[n("li",null,[e(a,{to:"#using-it-together-with-batch-inserts"},{default:t(()=>[s("Using it together with Batch Inserts")]),_:1})]),n("li",null,[e(a,{to:"#keep-track-of-the-row-number"},{default:t(()=>[s("Keep Track of the Row number")]),_:1})])])]),d])}const y=p(u,[["render",v],["__file","chunk-reading.html.vue"]]);export{y as default};
