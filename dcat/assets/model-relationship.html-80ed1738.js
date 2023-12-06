import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o as p,c as o,a as c,b as n,d as i,w as l,e as s}from"./app-c17653d8.js";const u="/dcat/assets/aeYpYDrUQP-009d6e40.png",r={},k=s(`<h1 id="form-relationships" tabindex="-1"><a class="header-anchor" href="#form-relationships" aria-hidden="true">#</a> Form Relationships</h1><h3 id="one-on-one" tabindex="-1"><a class="header-anchor" href="#one-on-one" aria-hidden="true">#</a> One-on-one</h3><p><code>users</code> table and <code>profiles</code> table generate one-to-one associations via the <code>profiles.user_id</code> field</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token identifier"><span class="token punctuation">\`</span>users<span class="token punctuation">\`</span></span> <span class="token punctuation">(</span>
<span class="token identifier"><span class="token punctuation">\`</span>id<span class="token punctuation">\`</span></span> <span class="token keyword">int</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span> <span class="token keyword">unsigned</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">AUTO_INCREMENT</span><span class="token punctuation">,</span>
<span class="token identifier"><span class="token punctuation">\`</span>name<span class="token punctuation">\`</span></span> <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">)</span> <span class="token keyword">COLLATE</span> utf8_unicode_ci <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
<span class="token identifier"><span class="token punctuation">\`</span>email<span class="token punctuation">\`</span></span> <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">)</span> <span class="token keyword">COLLATE</span> utf8_unicode_ci <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
<span class="token identifier"><span class="token punctuation">\`</span>created_at<span class="token punctuation">\`</span></span> <span class="token keyword">timestamp</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">DEFAULT</span> <span class="token string">&#39;0000-00-00 00:00:00&#39;</span><span class="token punctuation">,</span>
<span class="token identifier"><span class="token punctuation">\`</span>updated_at<span class="token punctuation">\`</span></span> <span class="token keyword">timestamp</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">DEFAULT</span> <span class="token string">&#39;0000-00-00 00:00:00&#39;</span><span class="token punctuation">,</span>
<span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span> <span class="token punctuation">(</span><span class="token identifier"><span class="token punctuation">\`</span>id<span class="token punctuation">\`</span></span><span class="token punctuation">)</span>
<span class="token punctuation">)</span> <span class="token keyword">ENGINE</span><span class="token operator">=</span><span class="token keyword">InnoDB</span> <span class="token keyword">DEFAULT</span> <span class="token keyword">CHARSET</span><span class="token operator">=</span>utf8 <span class="token keyword">COLLATE</span><span class="token operator">=</span>utf8_unicode_ci<span class="token punctuation">;</span>

<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token identifier"><span class="token punctuation">\`</span>profiles<span class="token punctuation">\`</span></span> <span class="token punctuation">(</span>
<span class="token identifier"><span class="token punctuation">\`</span>id<span class="token punctuation">\`</span></span> <span class="token keyword">int</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span> <span class="token keyword">unsigned</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">AUTO_INCREMENT</span><span class="token punctuation">,</span>
<span class="token identifier"><span class="token punctuation">\`</span>user_id<span class="token punctuation">\`</span></span> <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">)</span> <span class="token keyword">COLLATE</span> utf8_unicode_ci <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
<span class="token identifier"><span class="token punctuation">\`</span>age<span class="token punctuation">\`</span></span> <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">)</span> <span class="token keyword">COLLATE</span> utf8_unicode_ci <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
<span class="token identifier"><span class="token punctuation">\`</span>gender<span class="token punctuation">\`</span></span> <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">)</span> <span class="token keyword">COLLATE</span> utf8_unicode_ci <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
<span class="token identifier"><span class="token punctuation">\`</span>created_at<span class="token punctuation">\`</span></span> <span class="token keyword">timestamp</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">DEFAULT</span> <span class="token string">&#39;0000-00-00 00:00:00&#39;</span><span class="token punctuation">,</span>
<span class="token identifier"><span class="token punctuation">\`</span>updated_at<span class="token punctuation">\`</span></span> <span class="token keyword">timestamp</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">DEFAULT</span> <span class="token string">&#39;0000-00-00 00:00:00&#39;</span><span class="token punctuation">,</span>
<span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span> <span class="token punctuation">(</span><span class="token identifier"><span class="token punctuation">\`</span>id<span class="token punctuation">\`</span></span><span class="token punctuation">)</span>
<span class="token punctuation">)</span> <span class="token keyword">ENGINE</span><span class="token operator">=</span><span class="token keyword">InnoDB</span> <span class="token keyword">DEFAULT</span> <span class="token keyword">CHARSET</span><span class="token operator">=</span>utf8 <span class="token keyword">COLLATE</span><span class="token operator">=</span>utf8_unicode_ci<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The corresponding models are:</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>

<span class="token keyword">namespace</span> <span class="token package">App<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Models</span><span class="token punctuation">;</span>

<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Database<span class="token punctuation">\\</span>Eloquent<span class="token punctuation">\\</span>Model</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">User</span> <span class="token keyword">extends</span> <span class="token class-name">Model</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">profile</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">hasOne</span><span class="token punctuation">(</span><span class="token class-name static-context">Profile</span><span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">Profile</span> <span class="token keyword">extends</span> <span class="token class-name">Model</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">user</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">belongsTo</span><span class="token punctuation">(</span><span class="token class-name static-context">User</span><span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The corresponding repository is:</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>

<span class="token keyword">namespace</span> <span class="token package">App<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Repositories</span><span class="token punctuation">;</span>

<span class="token keyword">use</span> <span class="token package">Dcat<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Repositories<span class="token punctuation">\\</span>EloquentRepository</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">User</span> <span class="token keyword">as</span> UserModel<span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">User</span> <span class="token keyword">extends</span> <span class="token class-name class-name-fully-qualified"><span class="token punctuation">\\</span>Dcat<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Repositories<span class="token punctuation">\\</span>EloquentRepository</span>
<span class="token punctuation">{</span>
    <span class="token keyword">protected</span> <span class="token variable">$eloquentClass</span> <span class="token operator">=</span> <span class="token class-name static-context">UserModel</span><span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The following code can be associated with a form:</p><blockquote><p>{tip} Instantiating the repository requires passing in the association name defined by the association model, which is equivalent to actively using the <code>Eloquent\\Model::with</code> method.</p></blockquote><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">App<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Repositories<span class="token punctuation">\\</span>User</span><span class="token punctuation">;</span>

<span class="token comment">// Note that the repository \`User\` must be instantiated with \`profile\` here, otherwise the \`profiles\` table data will not be associated.</span>
<span class="token variable">$form</span> <span class="token operator">=</span> <span class="token class-name static-context">Form</span><span class="token operator">::</span><span class="token function">make</span><span class="token punctuation">(</span><span class="token class-name static-context">User</span><span class="token operator">::</span><span class="token function">with</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;profile&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token class-name type-declaration">Form</span> <span class="token variable">$form</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token variable">$form</span><span class="token operator">-&gt;</span><span class="token function">display</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;id&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    
    <span class="token variable">$form</span><span class="token operator">-&gt;</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;name&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token variable">$form</span><span class="token operator">-&gt;</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;email&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    
    <span class="token variable">$form</span><span class="token operator">-&gt;</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;profile.age&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token variable">$form</span><span class="token operator">-&gt;</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;profile.gender&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    
    <span class="token variable">$form</span><span class="token operator">-&gt;</span><span class="token function">datetime</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;created_at&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token variable">$form</span><span class="token operator">-&gt;</span><span class="token function">datetime</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;updated_at&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>If you don&#39;t want to use a repository, you can simply use the model</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">App<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Models<span class="token punctuation">\\</span>User</span><span class="token punctuation">;</span>

<span class="token comment">// Note that the model is used directly here, not the repository</span>
<span class="token variable">$form</span> <span class="token operator">=</span> <span class="token class-name static-context">Form</span><span class="token operator">::</span><span class="token function">make</span><span class="token punctuation">(</span><span class="token class-name static-context">User</span><span class="token operator">::</span><span class="token function">with</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;profile&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token class-name type-declaration">Form</span> <span class="token variable">$form</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token variable">$form</span><span class="token operator">-&gt;</span><span class="token function">display</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;id&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    
    <span class="token operator">...</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="one-to-many" tabindex="-1"><a class="header-anchor" href="#one-to-many" aria-hidden="true">#</a> One-to-many</h3>`,14),d=s(`<h3 id="many-to-many" tabindex="-1"><a class="header-anchor" href="#many-to-many" aria-hidden="true">#</a> Many-to-many</h3><p>The following is an example of the <strong>Role Bind Permissions</strong> function of the built-in <code>Role Management</code> module to demonstrate the Usages of many-to-many association models.</p><p>Model <code>Role</code></p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>

<span class="token keyword">namespace</span> <span class="token package">Dcat<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Models</span><span class="token punctuation">;</span>

<span class="token keyword">use</span> <span class="token package">Dcat<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Traits<span class="token punctuation">\\</span>HasDateTimeFormatter</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Database<span class="token punctuation">\\</span>Eloquent<span class="token punctuation">\\</span>Model</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Database<span class="token punctuation">\\</span>Eloquent<span class="token punctuation">\\</span>Relations<span class="token punctuation">\\</span>BelongsToMany</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">Role</span> <span class="token keyword">extends</span> <span class="token class-name">Model</span>
<span class="token punctuation">{</span>
    <span class="token keyword">use</span> <span class="token package">HasDateTimeFormatter</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 定义你的关联模型.
     *
     * <span class="token keyword">@return</span> <span class="token class-name">BelongsToMany</span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">permissions</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token class-name return-type">BelongsToMany</span>
    <span class="token punctuation">{</span>
        <span class="token variable">$pivotTable</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;admin_role_permissions&#39;</span><span class="token punctuation">;</span> <span class="token comment">// intermediate table</span>

        <span class="token variable">$relatedModel</span> <span class="token operator">=</span> <span class="token class-name static-context">Permission</span><span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">;</span> <span class="token comment">// Related model class name</span>

        <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">belongsToMany</span><span class="token punctuation">(</span><span class="token variable">$relatedModel</span><span class="token punctuation">,</span> <span class="token variable">$pivotTable</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;role_id&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;permission_id&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">Dcat<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Models<span class="token punctuation">\\</span>Permission</span><span class="token punctuation">;</span>

<span class="token comment">// Passing permissions when instantiating a repository automatically associates the data of the related model.</span>
<span class="token comment">// Here we pass in data for permissions associated with the permission model.</span>
<span class="token variable">$repository</span> <span class="token operator">=</span> <span class="token class-name static-context">Role</span><span class="token operator">::</span><span class="token function">with</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;permissions&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">return</span> <span class="token class-name static-context">Form</span><span class="token operator">::</span><span class="token function">make</span><span class="token punctuation">(</span><span class="token variable">$repository</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token class-name type-declaration">Form</span> <span class="token variable">$form</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token variable">$form</span><span class="token operator">-&gt;</span><span class="token function">display</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;id&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;ID&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token variable">$form</span><span class="token operator">-&gt;</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;slug&#39;</span><span class="token punctuation">,</span> <span class="token function">trans</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;admin.slug&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">required</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token variable">$form</span><span class="token operator">-&gt;</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;name&#39;</span><span class="token punctuation">,</span> <span class="token function">trans</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;admin.name&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">required</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    
    <span class="token comment">// The data here is automatically saved in the associated model.</span>
    <span class="token variable">$form</span><span class="token operator">-&gt;</span><span class="token function">tree</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;permissions&#39;</span><span class="token punctuation">)</span>
        <span class="token operator">-&gt;</span><span class="token function">nodes</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Permission</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">allNodes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token operator">-&gt;</span><span class="token function">customFormat</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token variable">$v</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token variable">$v</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

            <span class="token comment">// This is a very important step to convert the two-dimensional array found in the database into a one-dimensional array</span>
            <span class="token keyword">return</span> <span class="token function">array_column</span><span class="token punctuation">(</span><span class="token variable">$v</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;id&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token operator">...</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>If you don&#39;t want to use a repository, you can simply use the model</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">Dcat<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Models<span class="token punctuation">\\</span>Role</span><span class="token punctuation">;</span>

<span class="token comment">// Note that the model is used directly here, not the repository.</span>
<span class="token variable">$form</span> <span class="token operator">=</span> <span class="token class-name static-context">Form</span><span class="token operator">::</span><span class="token function">make</span><span class="token punctuation">(</span><span class="token class-name static-context">Role</span><span class="token operator">::</span><span class="token function">with</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;permissions&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token class-name type-declaration">Form</span> <span class="token variable">$form</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token variable">$form</span><span class="token operator">-&gt;</span><span class="token function">display</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;id&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    
    <span class="token operator">...</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The final result is as follows</p><p><img src="`+u+`" alt="" loading="lazy"></p><h3 id="associated-model-name-is-camelcase-style" tabindex="-1"><a class="header-anchor" href="#associated-model-name-is-camelcase-style" aria-hidden="true">#</a> Associated model name is camelCase style</h3><p>If the name of your associated model is named <strong>camelCase</strong> style, then the use needs to be converted to <strong>snake_case_</strong> style naming</p><p>for example</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">class</span> <span class="token class-name-definition class-name">User</span> extend Model
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">userProfile</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token operator">...</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>use</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">return</span> <span class="token class-name static-context">Form</span><span class="token operator">::</span><span class="token function">make</span><span class="token punctuation">(</span><span class="token class-name static-context">User</span><span class="token operator">::</span><span class="token function">with</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;userProfile&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token class-name type-declaration">Form</span> <span class="token variable">$form</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token operator">...</span>
    
    <span class="token comment">// Note that you must use snake_case style naming here, otherwise the edited data will not be displayed.</span>
    <span class="token variable">$form</span><span class="token operator">-&gt;</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;user_profile.postcode&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token variable">$form</span><span class="token operator">-&gt;</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;user_profile.address&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15);function m(v,b){const a=t("RouterLink");return p(),o("div",null,[k,c("p",null,[n("For the use of one-to-many, please refer to the documentation "),i(a,{to:"/guide/model-form-fields.html#onemany"},{default:l(()=>[n("Use of Form Fields - One-to-Many")]),_:1}),n(".")]),d])}const y=e(r,[["render",m],["__file","model-relationship.html.vue"]]);export{y as default};
