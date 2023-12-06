import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{r as p,o,c as i,a as s,b as n,d as c,e as a}from"./app-c17653d8.js";const l={},r=a(`<h1 id="form-validation" tabindex="-1"><a class="header-anchor" href="#form-validation" aria-hidden="true">#</a> Form validation</h1><h3 id="rule" tabindex="-1"><a class="header-anchor" href="#rule" aria-hidden="true">#</a> rule</h3><p><code>model-form</code> uses lavel&#39;s validation rules to validate data submitted by the form</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token variable">$form</span><span class="token operator">-&gt;</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;title&#39;</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">rules</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;required|min:3&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Complex validation rules can be implemented inside callbacks</span>
<span class="token variable">$form</span><span class="token operator">-&gt;</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;title&#39;</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">rules</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token class-name type-declaration">Form</span> <span class="token variable">$form</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    
    <span class="token comment">// Add field unique validation if not edit status</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token variable">$id</span> <span class="token operator">=</span> <span class="token variable">$form</span><span class="token operator">-&gt;</span><span class="token function">model</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token property">id</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string single-quoted-string">&#39;unique:users,email_address&#39;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Custom error messages can also be given for validation rules:</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token variable">$form</span><span class="token operator">-&gt;</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;code&#39;</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">rules</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;required|regex:/^\\d+$/|min:10&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>
    <span class="token string single-quoted-string">&#39;regex&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;The code must be all numeric&#39;</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;min&#39;</span>   <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;Code cannot be less than 10 characters&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>If you want to allow the field to be empty, first set the field to <code>NULL</code> in the database table, then</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token variable">$form</span><span class="token operator">-&gt;</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;title&#39;</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">rules</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;nullable&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,8),u={href:"https://laravel.com/docs/5.5/validation",target:"_blank",rel:"noopener noreferrer"},d=a(`<h3 id="creationrules" tabindex="-1"><a class="header-anchor" href="#creationrules" aria-hidden="true">#</a> creationRules</h3><p>This method is exactly the same as <code>Form\\Field::rule</code>, except that it only works when data is added.</p><blockquote><p>{tip} If the <code>creationRules</code> method is called, the validation rules set by the <code>rule</code> method will be ignored.</p></blockquote><h3 id="updaterules" tabindex="-1"><a class="header-anchor" href="#updaterules" aria-hidden="true">#</a> updateRules</h3><p>This method is exactly the same as <code>Form\\Field::rule</code>, except that it only works when you update the data.</p><blockquote><p>{tip} If the <code>updateRules</code> method is called, the validation rules set by the <code>rule</code> method will be ignored.</p></blockquote><h2 id="responsevalidationmessages" tabindex="-1"><a class="header-anchor" href="#responsevalidationmessages" aria-hidden="true">#</a> responseValidationMessages</h2><p>Custom validation error messages can be returned and subsequent logic interrupted by the <code>Form::responseValidationMessages</code> method, used as follows:</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token comment">// &quot;PUT&quot; method for editing submissions</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">getMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token string single-quoted-string">&#39;PUT&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">...</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// Your validation logic</span>
        <span class="token variable">$form</span><span class="token operator">-&gt;</span><span class="token function">responseValidationMessages</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;title&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;Wrong title format&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        <span class="token comment">// If there are multiple error messages, the second parameter can be passed as an array.</span>
        <span class="token variable">$form</span><span class="token operator">-&gt;</span><span class="token function">responseValidationMessages</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;content&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;content format error&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;content cannot be empty&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token variable">$form</span><span class="token operator">-&gt;</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;title&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">$form</span><span class="token operator">-&gt;</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;content&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>You can also use this method in the <code>submitted</code> event</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token variable">$form</span><span class="token operator">-&gt;</span><span class="token function">submitted</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token variable">$form</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">...</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// Your validation logic</span>
        <span class="token variable">$form</span><span class="token operator">-&gt;</span><span class="token function">responseValidationMessages</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;title&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;Incorrect title format&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        <span class="token comment">// If there are multiple error messages, the second parameter can be passed as an array</span>
        <span class="token variable">$form</span><span class="token operator">-&gt;</span><span class="token function">responseValidationMessages</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;content&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;content format error&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;content cannot be empty&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="front-end-verification" tabindex="-1"><a class="header-anchor" href="#front-end-verification" aria-hidden="true">#</a> Front-end verification</h2><p>The system inherits <a href="https://github.com/1000hz/bootstrap-validator" target="_blank">bootstrap-validator</a> for front-end form validation and supports validation of H5 form types.</p><blockquote><p>{tip} Browsers that don&#39;t support H5 can also use front-end validation, and the system has been made compatible. Most forms support both front-end and back-end validation, both can work at the same time without conflict, a few forms front-end validation is invalid.</p></blockquote><h3 id="h5-verification" tabindex="-1"><a class="header-anchor" href="#h5-verification" aria-hidden="true">#</a> H5 verification</h3><h4 id="required" tabindex="-1"><a class="header-anchor" href="#required" aria-hidden="true">#</a> required</h4><p>mandatory fields</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token variable">$form</span><span class="token operator">-&gt;</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;title&#39;</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">required</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="number" tabindex="-1"><a class="header-anchor" href="#number" aria-hidden="true">#</a> number</h4><p>Only numbers are allowed</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token variable">$form</span><span class="token operator">-&gt;</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;age&#39;</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">type</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;number&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>limits</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token comment">// Only numbers in the range of 10-60 are allowed.</span>
<span class="token variable">$form</span><span class="token operator">-&gt;</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;age&#39;</span><span class="token punctuation">)</span>
    <span class="token operator">-&gt;</span><span class="token function">type</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;number&#39;</span><span class="token punctuation">)</span>
    <span class="token operator">-&gt;</span><span class="token function">attribute</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;min&#39;</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span>
    <span class="token operator">-&gt;</span><span class="token function">attribute</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;max&#39;</span><span class="token punctuation">,</span> <span class="token number">60</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="email" tabindex="-1"><a class="header-anchor" href="#email" aria-hidden="true">#</a> email</h4><p>email address</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token variable">$form</span><span class="token operator">-&gt;</span><span class="token function">email</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;email&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="url" tabindex="-1"><a class="header-anchor" href="#url" aria-hidden="true">#</a> url</h4><p>links</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token variable">$form</span><span class="token operator">-&gt;</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;website&#39;</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">type</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;url&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="other" tabindex="-1"><a class="header-anchor" href="#other" aria-hidden="true">#</a> Other</h3><h4 id="minlength" tabindex="-1"><a class="header-anchor" href="#minlength" aria-hidden="true">#</a> minLength</h4><p>Limit minimum character length</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token variable">$form</span><span class="token operator">-&gt;</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;title&#39;</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">minLength</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Setting error messages</span>
<span class="token variable">$form</span><span class="token operator">-&gt;</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;title&#39;</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">minLength</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;Minimum of 20 characters&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="maxlength" tabindex="-1"><a class="header-anchor" href="#maxlength" aria-hidden="true">#</a> maxLength</h4><p>Limit the maximum length of characters</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token variable">$form</span><span class="token operator">-&gt;</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;title&#39;</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">maxLength</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Setting error messages</span>
<span class="token variable">$form</span><span class="token operator">-&gt;</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;title&#39;</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">maxLength</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;No more than 50 characters.&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="same" tabindex="-1"><a class="header-anchor" href="#same" aria-hidden="true">#</a> same</h4><p>Limits the value of the current field to be equal to the value of the given field.</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token variable">$form</span><span class="token operator">-&gt;</span><span class="token function">password</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;password&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token variable">$form</span><span class="token operator">-&gt;</span><span class="token function">password</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;password_confirm&#39;</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">same</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;password&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Setting error messages</span>
<span class="token variable">$form</span><span class="token operator">-&gt;</span><span class="token function">password</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;password_confirm&#39;</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">same</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;password&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;Two inconsistent password entries&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="custom" tabindex="-1"><a class="header-anchor" href="#custom" aria-hidden="true">#</a> Custom</h3><p>Developers can customize front-end validation rules in the following ways</p><p>Add the following code to <code>app/Admin/bootstrap.php</code>.</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">Dcat<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Form<span class="token punctuation">\\</span>Field</span><span class="token punctuation">;</span>

<span class="token class-name class-name-fully-qualified static-context">Field<span class="token punctuation">\\</span>Text</span><span class="token operator">::</span><span class="token function">macro</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;len&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token keyword type-hint">int</span> <span class="token variable">$length</span><span class="token punctuation">,</span> <span class="token operator">?</span><span class="token keyword type-hint">string</span> <span class="token variable">$error</span> <span class="token operator">=</span> <span class="token constant">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// Extensions to the front-end verification logic</span>
    <span class="token class-name static-context">Admin</span><span class="token operator">::</span><span class="token function">script</span><span class="token punctuation">(</span>
                <span class="token operator">&lt;&lt;</span><span class="token operator">&lt;</span><span class="token string single-quoted-string">&#39;JS&#39;</span>
Dcat<span class="token operator">.</span>validator<span class="token operator">.</span><span class="token function">extend</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;len&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token variable">$el</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token variable">$el</span><span class="token operator">.</span><span class="token function">val</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">.</span>length <span class="token operator">!=</span> <span class="token variable">$el</span><span class="token operator">.</span><span class="token function">attr</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;data-len&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token constant">JS</span>
        <span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// Also add back-end verification logic, depending on the need</span>
        <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">rules</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;size:&#39;</span><span class="token operator">.</span><span class="token variable">$length</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">attribute</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
            <span class="token string single-quoted-string">&#39;data-len&#39;</span>       <span class="token operator">=&gt;</span> <span class="token variable">$length</span><span class="token punctuation">,</span>
            <span class="token string single-quoted-string">&#39;data-len-error&#39;</span> <span class="token operator">=&gt;</span> <span class="token function">str_replace</span><span class="token punctuation">(</span>
                <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;:attribute&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;:len&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
                <span class="token punctuation">[</span><span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">label</span><span class="token punctuation">,</span> <span class="token variable">$length</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
                <span class="token variable">$error</span> <span class="token operator">?</span><span class="token punctuation">:</span> <span class="token string double-quoted-string">&quot;Only :len characters can be entered.&quot;</span>
            <span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>use</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token variable">$form</span><span class="token operator">-&gt;</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;name&#39;</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">len</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,45);function k(g,m){const t=p("ExternalLinkIcon");return o(),i("div",null,[r,s("p",null,[n("See "),s("a",u,[n("Validation"),c(t)]),n(" for more rules.")]),d])}const b=e(l,[["render",k],["__file","model-form-validation.html.vue"]]);export{b as default};
