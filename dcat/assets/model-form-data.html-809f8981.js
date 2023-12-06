import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o,c as p,a as s,b as n,d as i,w as c,e as l}from"./app-c17653d8.js";const u={},d=s("h1",{id:"form-data-source",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#form-data-source","aria-hidden":"true"},"#"),n(" Form data source")],-1),r=s("h2",{id:"models-and-data-warehousing",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#models-and-data-warehousing","aria-hidden":"true"},"#"),n(" Models and data warehousing")],-1),k=s("code",null,"Repository",-1),m=l(`<h2 id="data-from-the-model" tabindex="-1"><a class="header-anchor" href="#data-from-the-model" aria-hidden="true">#</a> Data from the model</h2><blockquote><p>{tip} If your data comes from <code>Model</code>, then you can also use the <code>Model</code> instance directly, and the underlying layer will automatically convert <code>Model</code> into a repository instance.</p></blockquote><p>When the data source supports the model, it is sufficient to create a very simple \`Repository&#39; class.</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>

<span class="token keyword">namespace</span> <span class="token package">App<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Repositories</span><span class="token punctuation">;</span>

<span class="token keyword">use</span> <span class="token package">Dcat<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Repositories<span class="token punctuation">\\</span>EloquentRepository</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">App<span class="token punctuation">\\</span>Models<span class="token punctuation">\\</span>Movie</span> <span class="token keyword">as</span> MovieModel<span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">Movie</span> <span class="token keyword">extends</span> <span class="token class-name">EloquentRepository</span>
<span class="token punctuation">{</span>
    <span class="token comment">// Define your model class name here</span>
    <span class="token keyword">protected</span> <span class="token variable">$eloquentClass</span> <span class="token operator">=</span> <span class="token class-name static-context">MovieModel</span><span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">;</span>
    
    <span class="token comment">// With this method, you can specify the fields of the form page query, default &quot;*&quot;</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">getFormColumns</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">getKeyName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;name&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;title&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;created_at&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>usage:</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">App<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Repositories<span class="token punctuation">\\</span>Movie</span><span class="token punctuation">;</span>

<span class="token variable">$form</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Form</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Movie</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token operator">...</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="data-from-external-api" tabindex="-1"><a class="header-anchor" href="#data-from-external-api" aria-hidden="true">#</a> Data from external API</h2><p>The following is an example of the <code>Douban movie</code> API to demonstrate the usage of the <code>Repository</code> interface related to read and write operations on form data.</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
<span class="token keyword">namespace</span> <span class="token package">App<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Repositories</span><span class="token punctuation">;</span>

<span class="token keyword">use</span> <span class="token package">Dcat<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Repositories<span class="token punctuation">\\</span>Repository</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Dcat<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Form</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">ComingSoon</span> <span class="token keyword">extends</span> <span class="token class-name">Repository</span>
<span class="token punctuation">{</span>
    <span class="token keyword">protected</span> <span class="token variable">$api</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;https://api.douban.com/v2/movie/coming_soon&#39;</span><span class="token punctuation">;</span>
    
    <span class="token comment">// Returns the name of your id field, default &quot;id&quot;</span>
    <span class="token keyword">protected</span> <span class="token variable">$keyName</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;_id&#39;</span><span class="token punctuation">;</span>

    <span class="token comment">// Query edit page data</span>
    <span class="token comment">// This method needs to return an array.</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">edit</span><span class="token punctuation">(</span><span class="token class-name type-declaration">Form</span> <span class="token variable">$form</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// Get id</span>
        <span class="token variable">$id</span> <span class="token operator">=</span> <span class="token variable">$form</span><span class="token operator">-&gt;</span><span class="token function">builder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">getResourceId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token variable">$data</span> <span class="token operator">=</span> <span class="token function">file_get_contents</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;http://api.douban.com/v2/movie/subject/<span class="token interpolation"><span class="token variable">$id</span></span>&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">return</span> <span class="token function">json_decode</span><span class="token punctuation">(</span><span class="token variable">$data</span><span class="token punctuation">,</span> <span class="token constant boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token comment">// This method is used to query the original record before modifying the data.</span>
    <span class="token comment">// If a file upload form is used, the old file will be automatically deleted based on this original record when the file is changed.</span>
     <span class="token comment">// If this data is not needed, just return an empty array.</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">getDataWhenUpdating</span><span class="token punctuation">(</span><span class="token class-name type-declaration">Form</span> <span class="token variable">$form</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// Get id</span>
        <span class="token variable">$id</span> <span class="token operator">=</span> <span class="token variable">$form</span><span class="token operator">-&gt;</span><span class="token function">builder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">getResourceId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// Modify operation</span>
    <span class="token comment">// Returns a bool type data.</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">update</span><span class="token punctuation">(</span><span class="token class-name type-declaration">Form</span> <span class="token variable">$form</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// Get id</span>
        <span class="token variable">$id</span> <span class="token operator">=</span> <span class="token variable">$form</span><span class="token operator">-&gt;</span><span class="token function">builder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">getResourceId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// Get the data to be modified</span>
        <span class="token variable">$attributes</span> <span class="token operator">=</span> <span class="token variable">$form</span><span class="token operator">-&gt;</span><span class="token function">updates</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// TODO</span>
        <span class="token comment">// Write your modification logic here.</span>
        
        <span class="token keyword">return</span> <span class="token constant boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// This method is used to query the original data before modifying it.</span>
    <span class="token comment">// If a file upload form is used, files are automatically deleted based on this data.</span>
    <span class="token comment">// If this data is not needed, just return an empty array.</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">getDataWhenDeleting</span><span class="token punctuation">(</span><span class="token class-name type-declaration">Form</span> <span class="token variable">$form</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token variable">$id</span> <span class="token operator">=</span> <span class="token variable">$form</span><span class="token operator">-&gt;</span><span class="token function">builder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">getResourceId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        <span class="token variable">$id</span> <span class="token operator">=</span> <span class="token function">explode</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;,&#39;</span><span class="token punctuation">,</span> <span class="token variable">$id</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//        $data = file_get_contents(&quot;http://api.douban.com/v2/movie/subject/$id&quot;);</span>
<span class="token comment">//</span>
<span class="token comment">//        return json_decode($data, true);</span>

        <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// Delete data</span>
    <span class="token comment">// $deletingData is the data returned by the getDataWhenDeleting method.</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">destroy</span><span class="token punctuation">(</span><span class="token class-name type-declaration">Form</span> <span class="token variable">$form</span><span class="token punctuation">,</span> <span class="token variable">$deletingData</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// Note that there may be multiple ids here.</span>
        <span class="token variable">$id</span> <span class="token operator">=</span> <span class="token variable">$form</span><span class="token operator">-&gt;</span><span class="token function">builder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">getResourceId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        <span class="token comment">// When using the batch delete function, the id here is a string separated by &quot;,&quot;.</span>
        <span class="token variable">$id</span> <span class="token operator">=</span> <span class="token function">explode</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;,&#39;</span><span class="token punctuation">,</span> <span class="token variable">$id</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// TODO</span>
<span class="token comment">//        var_dump($id, $deletingData);</span>

        <span class="token keyword">return</span> <span class="token constant boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9);function v(b,f){const a=t("RouterLink");return o(),p("div",null,[d,r,s("p",null,[n("Repository ("),k,n(") is a class that can provide a specific interface to read and write operations on the data, through the introduction of repositories, you can make the construction of the page no longer care about the specific implementation of data read and write functions, developers only need to implement a specific interface to easily switch data sources. For detailed usage of the data warehouse, please refer to the document "),i(a,{to:"/guide/model-repository.html"},{default:c(()=>[n("Repository")]),_:1}),n(".")]),m])}const y=e(u,[["render",v],["__file","model-form-data.html.vue"]]);export{y as default};
