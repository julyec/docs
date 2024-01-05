import{_ as p}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as i,c,b as n,d as e,w as t,e as s,a as l}from"./app-f5806220.js";const u={},d=n("h1",{id:"multiple-sheets",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#multiple-sheets","aria-hidden":"true"},"#"),s(" Multiple Sheets")],-1),r={class:"table-of-contents"},k=l(`<p>When a file has multiple sheets, each sheet will go through the import object. If you want to handle each sheet separately, you&#39;ll need to implement the <code>WithMultipleSheets</code> concern.</p><p>The <code>sheets()</code> method expects an array of sheet import objects to be returned. The order of the sheets is important, the first sheet import object in the array will automatically be linked to the first worksheet in the Excel file.</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">namespace</span> <span class="token package">App<span class="token punctuation">\\</span>Imports</span><span class="token punctuation">;</span>

<span class="token keyword">use</span> <span class="token package">Maatwebsite<span class="token punctuation">\\</span>Excel<span class="token punctuation">\\</span>Concerns<span class="token punctuation">\\</span>WithMultipleSheets</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">UsersImport</span> <span class="token keyword">implements</span> <span class="token class-name">WithMultipleSheets</span> 
<span class="token punctuation">{</span>
   
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">sheets</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">array</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">[</span>
            <span class="token keyword">new</span> <span class="token class-name">FirstSheetImport</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>A sheet import class can import the same concerns as a normal import object.</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">namespace</span> <span class="token package">App<span class="token punctuation">\\</span>Imports</span><span class="token punctuation">;</span>

<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Support<span class="token punctuation">\\</span>Collection</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Maatwebsite<span class="token punctuation">\\</span>Excel<span class="token punctuation">\\</span>Concerns<span class="token punctuation">\\</span>ToCollection</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">FirstSheetImport</span> <span class="token keyword">implements</span> <span class="token class-name">ToCollection</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">collection</span><span class="token punctuation">(</span><span class="token class-name type-declaration">Collection</span> <span class="token variable">$rows</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">//</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="selecting-sheets-by-worksheet-index" tabindex="-1"><a class="header-anchor" href="#selecting-sheets-by-worksheet-index" aria-hidden="true">#</a> Selecting sheets by worksheet index</h2><p>If you want more control over which sheets are selected and how they are mapped to specific sheet import objects, you can use the sheet index as key. Sheet indices start at 0.</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">namespace</span> <span class="token package">App<span class="token punctuation">\\</span>Imports</span><span class="token punctuation">;</span>

<span class="token keyword">use</span> <span class="token package">Maatwebsite<span class="token punctuation">\\</span>Excel<span class="token punctuation">\\</span>Concerns<span class="token punctuation">\\</span>WithMultipleSheets</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">UsersImport</span> <span class="token keyword">implements</span> <span class="token class-name">WithMultipleSheets</span> 
<span class="token punctuation">{</span>
   
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">sheets</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">array</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">[</span>
            <span class="token number">0</span> <span class="token operator">=&gt;</span> <span class="token keyword">new</span> <span class="token class-name">FirstSheetImport</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token number">1</span> <span class="token operator">=&gt;</span> <span class="token keyword">new</span> <span class="token class-name">SecondSheetImport</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="selecting-sheets-by-worksheet-name" tabindex="-1"><a class="header-anchor" href="#selecting-sheets-by-worksheet-name" aria-hidden="true">#</a> Selecting sheets by worksheet name</h2><p>If you only know the name of the worksheet and don&#39;t know the sheet index, you can also use the worksheet name as a selector. Put the worksheet name as array index to link that worksheet to your sheet import object.</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">namespace</span> <span class="token package">App<span class="token punctuation">\\</span>Imports</span><span class="token punctuation">;</span>

<span class="token keyword">use</span> <span class="token package">Maatwebsite<span class="token punctuation">\\</span>Excel<span class="token punctuation">\\</span>Concerns<span class="token punctuation">\\</span>WithMultipleSheets</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">UsersImport</span> <span class="token keyword">implements</span> <span class="token class-name">WithMultipleSheets</span> 
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">sheets</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">array</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">[</span>
            <span class="token string single-quoted-string">&#39;Worksheet 1&#39;</span> <span class="token operator">=&gt;</span> <span class="token keyword">new</span> <span class="token class-name">FirstSheetImport</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token string single-quoted-string">&#39;Worksheet 2&#39;</span> <span class="token operator">=&gt;</span> <span class="token keyword">new</span> <span class="token class-name">SecondSheetImport</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container warning"><p class="hint-container-title">Note</p><p>Sheets that are not explicitly defined in the <code>sheet()</code> method, will be ignored and thus not be imported.</p></div><h2 id="skipping-unknown-sheets" tabindex="-1"><a class="header-anchor" href="#skipping-unknown-sheets" aria-hidden="true">#</a> Skipping unknown sheets</h2><p>When you have defined a sheet <strong>name</strong> or <strong>index</strong> that does not exist a <code>Maatwebsite\\Excel\\Exceptions\\SheetNotFoundException</code> will be thrown.</p><p>If you want to ignore when a sheet does not exists, you can use the <code>Maatwebsite\\Excel\\Concerns\\SkipsUnknownSheets</code> concern.</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">namespace</span> <span class="token package">App<span class="token punctuation">\\</span>Imports</span><span class="token punctuation">;</span>

<span class="token keyword">use</span> <span class="token package">Maatwebsite<span class="token punctuation">\\</span>Excel<span class="token punctuation">\\</span>Concerns<span class="token punctuation">\\</span>WithMultipleSheets</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Maatwebsite<span class="token punctuation">\\</span>Excel<span class="token punctuation">\\</span>Concerns<span class="token punctuation">\\</span>SkipsUnknownSheets</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">UsersImport</span> <span class="token keyword">implements</span> <span class="token class-name">WithMultipleSheets</span><span class="token punctuation">,</span> SkipsUnknownSheets
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">sheets</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">array</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">[</span>
            <span class="token string single-quoted-string">&#39;Worksheet 1&#39;</span> <span class="token operator">=&gt;</span> <span class="token keyword">new</span> <span class="token class-name">FirstSheetImport</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token string single-quoted-string">&#39;Worksheet 2&#39;</span> <span class="token operator">=&gt;</span> <span class="token keyword">new</span> <span class="token class-name">SecondSheetImport</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">onUnknownSheet</span><span class="token punctuation">(</span><span class="token variable">$sheetName</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// E.g. you can log that a sheet was not found.</span>
        <span class="token function">info</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;Sheet <span class="token interpolation"><span class="token punctuation">{</span><span class="token variable">$sheetName</span><span class="token punctuation">}</span></span> was skipped&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="skipping-only-specific-sheets" tabindex="-1"><a class="header-anchor" href="#skipping-only-specific-sheets" aria-hidden="true">#</a> Skipping only specific sheets</h3><p>If you want to have 1 optional sheet and still have the others fail, you can also let the Sheet import object implement <code>SkipsUnknownSheets</code>.</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">namespace</span> <span class="token package">App<span class="token punctuation">\\</span>Imports</span><span class="token punctuation">;</span>

<span class="token keyword">use</span> <span class="token package">Maatwebsite<span class="token punctuation">\\</span>Excel<span class="token punctuation">\\</span>Concerns<span class="token punctuation">\\</span>SkipsUnknownSheets</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">FirstSheetImport</span> <span class="token keyword">implements</span> <span class="token class-name">SkipsUnknownSheets</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">onUnknownSheet</span><span class="token punctuation">(</span><span class="token variable">$sheetName</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// E.g. you can log that a sheet was not found.</span>
        <span class="token function">info</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;Sheet <span class="token interpolation"><span class="token punctuation">{</span><span class="token variable">$sheetName</span><span class="token punctuation">}</span></span> was skipped&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Now only <code>FirstSheetImport</code> will be skipped if it&#39;s not found. Any other defined sheet will be skipped.</p><h2 id="conditional-sheet-loading" tabindex="-1"><a class="header-anchor" href="#conditional-sheet-loading" aria-hidden="true">#</a> Conditional sheet loading</h2><p>If you want to indicate per import which sheets should be imported, you can use the <code>Maatwebsite\\Excel\\Concerns\\WithConditionalSheets</code> trait.</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">namespace</span> <span class="token package">App<span class="token punctuation">\\</span>Imports</span><span class="token punctuation">;</span>

<span class="token keyword">use</span> <span class="token package">Maatwebsite<span class="token punctuation">\\</span>Excel<span class="token punctuation">\\</span>Concerns<span class="token punctuation">\\</span>WithMultipleSheets</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Maatwebsite<span class="token punctuation">\\</span>Excel<span class="token punctuation">\\</span>Concerns<span class="token punctuation">\\</span>WithConditionalSheets</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">UsersImport</span> <span class="token keyword">implements</span> <span class="token class-name">WithMultipleSheets</span> 
<span class="token punctuation">{</span>
    <span class="token keyword">use</span> <span class="token package">WithConditionalSheets</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">conditionalSheets</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">array</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">[</span>
            <span class="token string single-quoted-string">&#39;Worksheet 1&#39;</span> <span class="token operator">=&gt;</span> <span class="token keyword">new</span> <span class="token class-name">FirstSheetImport</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token string single-quoted-string">&#39;Worksheet 2&#39;</span> <span class="token operator">=&gt;</span> <span class="token keyword">new</span> <span class="token class-name">SecondSheetImport</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token string single-quoted-string">&#39;Worksheet 3&#39;</span> <span class="token operator">=&gt;</span> <span class="token keyword">new</span> <span class="token class-name">ThirdSheetImport</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Now you can use the <code>onlySheets</code> method to indicate which sheets should be loaded for this import.</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token variable">$import</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">UsersImport</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">$import</span><span class="token operator">-&gt;</span><span class="token function">onlySheets</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;Worksheet 1&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;Worksheet 3&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token class-name static-context">Excel</span><span class="token operator">::</span><span class="token function">import</span><span class="token punctuation">(</span><span class="token variable">$import</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;users.xlsx&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="making-calculations-work-when-referencing-between-sheets" tabindex="-1"><a class="header-anchor" href="#making-calculations-work-when-referencing-between-sheets" aria-hidden="true">#</a> Making calculations work when referencing between sheets</h2><p>When importing you have to implement the <code>Maatwebsite\\Excel\\Concerns\\WithCalculatedFormulas</code> concern for Laravel Excel to calculate values from formulas. However, if one sheet creates a calculation by referencing another sheet, e.g. <code>=Sheet1!A1</code>, then you also have to implement the concern <code>Maatwebsite\\Excel\\Concerns\\HasReferencesToOtherSheets</code>. An example is given below</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">namespace</span> <span class="token package">App<span class="token punctuation">\\</span>Imports</span><span class="token punctuation">;</span>

<span class="token keyword">use</span> <span class="token package">Maatwebsite<span class="token punctuation">\\</span>Excel<span class="token punctuation">\\</span>Concerns<span class="token punctuation">\\</span>WithMultipleSheets</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">UsersImport</span> <span class="token keyword">implements</span> <span class="token class-name">WithMultipleSheets</span> 
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">sheets</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">array</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">[</span>
            <span class="token keyword">new</span> <span class="token class-name">FirstSheetImport</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token keyword">new</span> <span class="token class-name">SecondSheetImport</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Then if <code>SecondSheetImport</code> contains formulas that reference <code>FirstSheetImport</code> then <code>FirstSheetImport</code> has to be defined using the <code>HasReferencesToOtherSheets</code> concern</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">namespace</span> <span class="token package">App<span class="token punctuation">\\</span>Imports</span><span class="token punctuation">;</span>

<span class="token keyword">use</span> <span class="token package">Maatwebsite<span class="token punctuation">\\</span>Excel<span class="token punctuation">\\</span>Concerns<span class="token punctuation">\\</span>ToArray</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Maatwebsite<span class="token punctuation">\\</span>Excel<span class="token punctuation">\\</span>Concerns<span class="token punctuation">\\</span>HasReferencesToOtherSheets</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">FirstSheetImport</span> <span class="token keyword">implements</span> <span class="token class-name">ToArray</span><span class="token punctuation">,</span> HasReferencesToOtherSheets
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">array</span><span class="token punctuation">(</span><span class="token keyword type-declaration">array</span><span class="token punctuation">:</span> <span class="token variable">$row</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">namespace</span> <span class="token package">App<span class="token punctuation">\\</span>Imports</span><span class="token punctuation">;</span>

<span class="token keyword">use</span> <span class="token package">Maatwebsite<span class="token punctuation">\\</span>Excel<span class="token punctuation">\\</span>Concerns<span class="token punctuation">\\</span>WithCalculatedFormulas</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">SecondSheetImport</span> <span class="token keyword">implements</span> <span class="token class-name">ToArray</span><span class="token punctuation">,</span> WithCalculatedFormulas
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">array</span><span class="token punctuation">(</span><span class="token keyword type-declaration">array</span><span class="token punctuation">:</span> <span class="token variable">$row</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,31);function m(v,h){const a=o("router-link");return i(),c("div",null,[d,n("nav",r,[n("ul",null,[n("li",null,[e(a,{to:"#selecting-sheets-by-worksheet-index"},{default:t(()=>[s("Selecting sheets by worksheet index")]),_:1})]),n("li",null,[e(a,{to:"#selecting-sheets-by-worksheet-name"},{default:t(()=>[s("Selecting sheets by worksheet name")]),_:1})]),n("li",null,[e(a,{to:"#skipping-unknown-sheets"},{default:t(()=>[s("Skipping unknown sheets")]),_:1}),n("ul",null,[n("li",null,[e(a,{to:"#skipping-only-specific-sheets"},{default:t(()=>[s("Skipping only specific sheets")]),_:1})])])]),n("li",null,[e(a,{to:"#conditional-sheet-loading"},{default:t(()=>[s("Conditional sheet loading")]),_:1})]),n("li",null,[e(a,{to:"#making-calculations-work-when-referencing-between-sheets"},{default:t(()=>[s("Making calculations work when referencing between sheets")]),_:1})])])]),k])}const g=p(u,[["render",m],["__file","multiple-sheets.html.vue"]]);export{g as default};
