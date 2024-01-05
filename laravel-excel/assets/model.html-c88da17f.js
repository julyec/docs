import{_ as p}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as c,c as i,b as n,d as e,w as t,e as s,a as l}from"./app-5f6cf456.js";const u={},r=n("h1",{id:"importing-to-models",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#importing-to-models","aria-hidden":"true"},"#"),s(" Importing to models")],-1),d={class:"table-of-contents"},k=l(`<p>In case you want to import a workbook to an Eloquent model, you can use the <code>ToModel</code> concern. The concern enforces a <code>model()</code> method which accepts a model to be returned.</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">namespace</span> <span class="token package">App<span class="token punctuation">\\</span>Imports</span><span class="token punctuation">;</span>

<span class="token keyword">use</span> <span class="token package">App<span class="token punctuation">\\</span>User</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Maatwebsite<span class="token punctuation">\\</span>Excel<span class="token punctuation">\\</span>Concerns<span class="token punctuation">\\</span>ToModel</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">UsersImport</span> <span class="token keyword">implements</span> <span class="token class-name">ToModel</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">model</span><span class="token punctuation">(</span><span class="token keyword type-hint">array</span> <span class="token variable">$row</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
            <span class="token string single-quoted-string">&#39;name&#39;</span> <span class="token operator">=&gt;</span> <span class="token variable">$row</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The returned model will be saved for you. Each row will result into (at least) one save and will also fire model events.</p><div class="hint-container warning"><p class="hint-container-title">Note</p><p>When using <code>ToModel</code> you should never save the model yourself, as that will break the batch insert functionality. If you need this, consider using <code>OnEachRow</code>.</p></div><h2 id="upserting-models" tabindex="-1"><a class="header-anchor" href="#upserting-models" aria-hidden="true">#</a> Upserting models</h2><p>In case you want to upsert models, instead of inserting, you can implement the <code>WithUpserts</code> concern.</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">class</span> <span class="token class-name-definition class-name">UsersImport</span> <span class="token keyword">implements</span> <span class="token class-name">ToModel</span><span class="token punctuation">,</span> WithUpserts
<span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * <span class="token keyword">@return</span> <span class="token class-name"><span class="token keyword">string</span><span class="token punctuation">|</span><span class="token keyword">array</span></span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">uniqueBy</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string single-quoted-string">&#39;email&#39;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>In the example above, if a user already exists with the same email, the row will be updated instead. Behind the scenes, this feature uses the Laravel <code>upsert</code> method and the <code>uniqueBy</code> method is used for the second argument of the <code>upsert</code> method, which lists the column(s) that uniquely identify records within the associated table.</p><div class="hint-container warning"><p class="hint-container-title">Note</p><p>All databases except SQL Server require the <code>uniqueBy</code> columns to have a &quot;primary&quot; or &quot;unique&quot; index.</p></div><h3 id="upserting-with-specific-columns" tabindex="-1"><a class="header-anchor" href="#upserting-with-specific-columns" aria-hidden="true">#</a> Upserting with specific columns</h3><p>By default, <code>upsert</code>, in case of updating, will update all columns that match model&#39;s attributes. However, if you need to update only specific column(s) during <code>upsert</code>, you can also implement the <code>WithUpsertColumns</code> concern.</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">class</span> <span class="token class-name-definition class-name">UsersImport</span> <span class="token keyword">implements</span> <span class="token class-name">ToModel</span><span class="token punctuation">,</span> WithUpserts<span class="token punctuation">,</span> WithUpsertColumns
<span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * <span class="token keyword">@return</span> <span class="token class-name"><span class="token keyword">array</span></span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">upsertColumns</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;name&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;role&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>In this example, if a user already exists, only &quot;name&quot; and &quot;role&quot; columns will be updated.</p><h2 id="skipping-rows" tabindex="-1"><a class="header-anchor" href="#skipping-rows" aria-hidden="true">#</a> Skipping rows</h2><p>In case you want to skip a row, you can return null.</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">model</span><span class="token punctuation">(</span><span class="token keyword type-hint">array</span> <span class="token variable">$row</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">isset</span><span class="token punctuation">(</span><span class="token variable">$row</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token constant">null</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
        <span class="token string single-quoted-string">&#39;name&#39;</span> <span class="token operator">=&gt;</span> <span class="token variable">$row</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="possible-column-names" tabindex="-1"><a class="header-anchor" href="#possible-column-names" aria-hidden="true">#</a> Possible column names</h2><p>In case you want to import rows by several possible column names (using <code>WithHeadingRow</code>), you can use null coalescing operator (<code>??</code>). If the column with the first name (in example <em>client_name</em>) exists and is not NULL, return its value; otherwise look for second possible name (in example <em>client</em>) etc.</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">model</span><span class="token punctuation">(</span><span class="token keyword type-hint">array</span> <span class="token variable">$row</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
    <span class="token string single-quoted-string">&#39;name&#39;</span> <span class="token operator">=&gt;</span> <span class="token variable">$row</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;client_name&#39;</span><span class="token punctuation">]</span> <span class="token operator">??</span> <span class="token variable">$row</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;client&#39;</span><span class="token punctuation">]</span> <span class="token operator">??</span> <span class="token variable">$row</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;name&#39;</span><span class="token punctuation">]</span> <span class="token operator">??</span> <span class="token constant">null</span>
  <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="handling-persistence-on-your-own" tabindex="-1"><a class="header-anchor" href="#handling-persistence-on-your-own" aria-hidden="true">#</a> Handling persistence on your own</h2><p>In some cases you might not have an import in which each row is an Eloquent model and you want more control over what happens. In those cases you can use the <code>OnEachRow</code> concern.</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">namespace</span> <span class="token package">App<span class="token punctuation">\\</span>Imports</span><span class="token punctuation">;</span>

<span class="token keyword">use</span> <span class="token package">App<span class="token punctuation">\\</span>Group</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">App<span class="token punctuation">\\</span>User</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Maatwebsite<span class="token punctuation">\\</span>Excel<span class="token punctuation">\\</span>Row</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Maatwebsite<span class="token punctuation">\\</span>Excel<span class="token punctuation">\\</span>Concerns<span class="token punctuation">\\</span>OnEachRow</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">UsersImport</span> <span class="token keyword">implements</span> <span class="token class-name">OnEachRow</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">onRow</span><span class="token punctuation">(</span><span class="token class-name type-declaration">Row</span> <span class="token variable">$row</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token variable">$rowIndex</span> <span class="token operator">=</span> <span class="token variable">$row</span><span class="token operator">-&gt;</span><span class="token function">getIndex</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token variable">$row</span>      <span class="token operator">=</span> <span class="token variable">$row</span><span class="token operator">-&gt;</span><span class="token function">toArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        <span class="token variable">$group</span> <span class="token operator">=</span> <span class="token class-name static-context">Group</span><span class="token operator">::</span><span class="token function">firstOrCreate</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
            <span class="token string single-quoted-string">&#39;name&#39;</span> <span class="token operator">=&gt;</span> <span class="token variable">$row</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    
        <span class="token variable">$group</span><span class="token operator">-&gt;</span><span class="token function">users</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
            <span class="token string single-quoted-string">&#39;name&#39;</span> <span class="token operator">=&gt;</span> <span class="token variable">$row</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container warning"><p class="hint-container-title">Note</p><p>When using <code>OnEachRow</code> you cannot use batch inserts, as the model is already persisted in the <code>onRow</code> method.</p></div>`,23);function m(v,h){const a=o("router-link");return c(),i("div",null,[r,n("nav",d,[n("ul",null,[n("li",null,[e(a,{to:"#upserting-models"},{default:t(()=>[s("Upserting models")]),_:1}),n("ul",null,[n("li",null,[e(a,{to:"#upserting-with-specific-columns"},{default:t(()=>[s("Upserting with specific columns")]),_:1})])])]),n("li",null,[e(a,{to:"#skipping-rows"},{default:t(()=>[s("Skipping rows")]),_:1})]),n("li",null,[e(a,{to:"#possible-column-names"},{default:t(()=>[s("Possible column names")]),_:1})]),n("li",null,[e(a,{to:"#handling-persistence-on-your-own"},{default:t(()=>[s("Handling persistence on your own")]),_:1})])])]),k])}const g=p(u,[["render",m],["__file","model.html.vue"]]);export{g as default};
