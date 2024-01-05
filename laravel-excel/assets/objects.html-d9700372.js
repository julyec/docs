import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{r as p,o as l,c as r,b as n,d as a,w as t,e as s,a as o}from"./app-5f6cf456.js";const u={},d=n("h1",{id:"import-export-objects",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#import-export-objects","aria-hidden":"true"},"#"),s(" Import & Export Objects")],-1),k={class:"table-of-contents"},v=o(`<p>The entire Laravel Excel philosophy evolves around having <code>Export</code> and/or <code>Import</code> objects.</p><h2 id="directory-structure" tabindex="-1"><a class="header-anchor" href="#directory-structure" aria-hidden="true">#</a> Directory structure</h2><p>The location of these Import and Exports classes could be as follows:</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token operator">.</span>
├── app
│   ├── <span class="token string backtick-quoted-string">\`Exports\`</span> <span class="token function">_</span><span class="token punctuation">(</span><span class="token operator">**</span>Groups all exports in your app<span class="token operator">**</span><span class="token punctuation">)</span><span class="token constant">_</span>
│   │   ├── UsersExport<span class="token operator">.</span>php
│   │   ├── ProductsExport<span class="token operator">.</span>php
│   │   └── <span class="token string backtick-quoted-string">\`Sheets\`</span> <span class="token function">_</span><span class="token punctuation">(</span><span class="token operator">**</span>You can group sheets together<span class="token operator">**</span><span class="token punctuation">)</span><span class="token constant">_</span>
│   │      ├── InactiveUsersSheet<span class="token operator">.</span>php
│   │      └── ActiveUsersSheet<span class="token operator">.</span><span class="token class-name">php</span>
<span class="token operator">|</span>   <span class="token operator">|</span>
│   ├── <span class="token string backtick-quoted-string">\`Imports\`</span> <span class="token function">_</span><span class="token punctuation">(</span><span class="token operator">**</span>Groups all imports in your app<span class="token operator">**</span><span class="token punctuation">)</span><span class="token constant">_</span>
│   │   ├── UsersImport<span class="token operator">.</span>php
│   │   ├── ProductsImport<span class="token operator">.</span>php
│   │   └── <span class="token string backtick-quoted-string">\`Sheets\`</span> <span class="token function">_</span><span class="token punctuation">(</span><span class="token operator">**</span>You can group sheets together<span class="token operator">**</span><span class="token punctuation">)</span><span class="token constant">_</span>
│   │      ├── OutOfStockProductsSheet<span class="token operator">.</span>php
│   │      └── ProductsOnSaleSheet<span class="token operator">.</span>php
│ 
└── composer<span class="token operator">.</span>json
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="encapsulation" tabindex="-1"><a class="header-anchor" href="#encapsulation" aria-hidden="true">#</a> Encapsulation</h2><p>These objects encapsulate the entire export or import process. The idea behind it is that you can neatly use these objects in controllers, services, jobs, event listeners or commands. In all of theses cases, the entire logic of how the export/import needs to happen is kept within this object.</p><h2 id="data-transfer-object" tabindex="-1"><a class="header-anchor" href="#data-transfer-object" aria-hidden="true">#</a> Data transfer object</h2><p>The import/export objects are in essence simple data transfer objects (DTO). This means they will transfer the information you want to export/import to the Excel writer/reader. This information is not only the actual data you want to export, but also additional information like the styling of the file, the name of the worksheet, the number format of the cell etc.</p><p>In most cases, this means that your code doesn&#39;t need to have direct exposure to the actual read/write process.</p><h2 id="plain-old-php-object" tabindex="-1"><a class="header-anchor" href="#plain-old-php-object" aria-hidden="true">#</a> Plain Old PHP Object</h2><p>Besides being a DTO, the import/export objects are also just Plain Old PHP Objects (POPO). This means that you can do anything with them that you can do with normal PHP objects.</p><h3 id="constructor" tabindex="-1"><a class="header-anchor" href="#constructor" aria-hidden="true">#</a> Constructor</h3><p>For instance, you can simply inject data through the constructor of the export object.</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">class</span> <span class="token class-name-definition class-name">UsersExport</span> <span class="token keyword">implements</span> <span class="token class-name">FromCollection</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token variable">$year</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">__construct</span><span class="token punctuation">(</span><span class="token keyword type-hint">int</span> <span class="token variable">$year</span><span class="token punctuation">)</span> 
    <span class="token punctuation">{</span>
        <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">year</span> <span class="token operator">=</span> <span class="token variable">$year</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">collection</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token class-name static-context">Users</span><span class="token operator">::</span><span class="token function">whereYear</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;created_at&#39;</span><span class="token punctuation">,</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">year</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token class-name static-context">Excel</span><span class="token operator">::</span><span class="token function">download</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">UsersExport</span><span class="token punctuation">(</span><span class="token number">2019</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;users.xlsx&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="setters" tabindex="-1"><a class="header-anchor" href="#setters" aria-hidden="true">#</a> Setters</h3><p>Another option is to add setters for data that you want to pass.</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">class</span> <span class="token class-name-definition class-name">UsersExport</span> <span class="token keyword">implements</span> <span class="token class-name">FromCollection</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token variable">$year</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">setYear</span><span class="token punctuation">(</span><span class="token keyword type-hint">int</span> <span class="token variable">$year</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">year</span> <span class="token operator">=</span> <span class="token variable">$year</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">collection</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token class-name static-context">Users</span><span class="token operator">::</span><span class="token function">whereYear</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;created_at&#39;</span><span class="token punctuation">,</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">year</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token variable">$export</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">UsersExport</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">$export</span><span class="token operator">-&gt;</span><span class="token function">setYear</span><span class="token punctuation">(</span><span class="token number">2019</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token class-name static-context">Excel</span><span class="token operator">::</span><span class="token function">download</span><span class="token punctuation">(</span><span class="token variable">$export</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;users.xlsx&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="getters" tabindex="-1"><a class="header-anchor" href="#getters" aria-hidden="true">#</a> Getters</h3><p>In similar fashion to setters, you can also add getters. This can potentially be useful if you want to keep a state of your export/import.</p><p>For instance, you can keep a row count in your users import.</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">namespace</span> <span class="token package">App<span class="token punctuation">\\</span>Imports</span><span class="token punctuation">;</span>

<span class="token keyword">use</span> <span class="token package">App<span class="token punctuation">\\</span>User</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Maatwebsite<span class="token punctuation">\\</span>Excel<span class="token punctuation">\\</span>Concerns<span class="token punctuation">\\</span>ToModel</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">UsersImport</span> <span class="token keyword">implements</span> <span class="token class-name">ToModel</span>
<span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token variable">$rows</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">model</span><span class="token punctuation">(</span><span class="token keyword type-hint">array</span> <span class="token variable">$row</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token operator">++</span><span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">rows</span><span class="token punctuation">;</span>
    
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
            <span class="token string single-quoted-string">&#39;name&#39;</span> <span class="token operator">=&gt;</span> <span class="token variable">$row</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">getRowCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">int</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">rows</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>After doing the import, we can request the state with the getter.</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token variable">$import</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">UsersImport</span><span class="token punctuation">;</span>
<span class="token class-name static-context">Excel</span><span class="token operator">::</span><span class="token function">import</span><span class="token punctuation">(</span><span class="token variable">$import</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;users.xlsx&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">dd</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;Row count: &#39;</span> <span class="token operator">.</span> <span class="token variable">$import</span><span class="token operator">-&gt;</span><span class="token function">getRowCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="concerns" tabindex="-1"><a class="header-anchor" href="#concerns" aria-hidden="true">#</a> Concerns</h2><p>Most of the export/import configuration is done by using <strong>Concerns</strong>. Concerns are basically just simple interfaces. Implementing them will make the object adhere to a certain contract. This contract can request specific methods that e.g. data can be passed through. In other cases it might not ask for any methods to be implemented, but merely functions as a pointer interface.</p>`,27),m={href:"/3.1/architecture/concerns.html",target:"_blank",rel:"noopener noreferrer"},h=o(`<h2 id="hooks" tabindex="-1"><a class="header-anchor" href="#hooks" aria-hidden="true">#</a> Hooks</h2><p>In more complex cases you might want to hook into certain moments of the read/write process. This can be done by using Events. To register these events in your import/export object, you need to implement the <code>Maatwebsite\\Excel\\Concerns\\WithEvents</code> concern.</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">namespace</span> <span class="token package">App<span class="token punctuation">\\</span>Exports</span><span class="token punctuation">;</span>

<span class="token keyword">use</span> <span class="token package">Maatwebsite<span class="token punctuation">\\</span>Excel<span class="token punctuation">\\</span>Concerns<span class="token punctuation">\\</span>WithEvents</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Maatwebsite<span class="token punctuation">\\</span>Excel<span class="token punctuation">\\</span>Events<span class="token punctuation">\\</span>BeforeExport</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">UsersExport</span> <span class="token keyword">implements</span> <span class="token class-name">WithEvents</span>
<span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * <span class="token keyword">@return</span> <span class="token class-name"><span class="token keyword">array</span></span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">registerEvents</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">array</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">[</span>
            <span class="token comment">// Handle by a closure.</span>
            <span class="token class-name static-context">BeforeExport</span><span class="token operator">::</span><span class="token keyword">class</span> <span class="token operator">=&gt;</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token class-name type-declaration">BeforeExport</span> <span class="token variable">$event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token comment">// Do something before the export process starts.</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Alternatively, you can also configure these listeners globally if you want it to happen to any export.</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token class-name static-context">Writer</span><span class="token operator">::</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token class-name static-context">BeforeExport</span><span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// Do something before any export process starts.</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5);function b(f,g){const e=p("router-link"),c=p("ExternalLinkIcon");return l(),r("div",null,[d,n("nav",k,[n("ul",null,[n("li",null,[a(e,{to:"#directory-structure"},{default:t(()=>[s("Directory structure")]),_:1})]),n("li",null,[a(e,{to:"#encapsulation"},{default:t(()=>[s("Encapsulation")]),_:1})]),n("li",null,[a(e,{to:"#data-transfer-object"},{default:t(()=>[s("Data transfer object")]),_:1})]),n("li",null,[a(e,{to:"#plain-old-php-object"},{default:t(()=>[s("Plain Old PHP Object")]),_:1}),n("ul",null,[n("li",null,[a(e,{to:"#constructor"},{default:t(()=>[s("Constructor")]),_:1})]),n("li",null,[a(e,{to:"#setters"},{default:t(()=>[s("Setters")]),_:1})]),n("li",null,[a(e,{to:"#getters"},{default:t(()=>[s("Getters")]),_:1})])])]),n("li",null,[a(e,{to:"#concerns"},{default:t(()=>[s("Concerns")]),_:1})]),n("li",null,[a(e,{to:"#hooks"},{default:t(()=>[s("Hooks")]),_:1})])])]),v,n("p",null,[s("Read more about Concerns in the "),n("a",m,[s("concerns documentation"),a(c)]),s(".")]),h])}const x=i(u,[["render",b],["__file","objects.html.vue"]]);export{x as default};
