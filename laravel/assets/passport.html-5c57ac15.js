const e=JSON.parse('{"key":"v-1a1fd2ca","path":"/guide/passport.html","title":"Laravel Passport","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"Introduction","slug":"introduction","link":"#introduction","children":[{"level":3,"title":"Passport Or Sanctum?","slug":"passport-or-sanctum","link":"#passport-or-sanctum","children":[]}]},{"level":2,"title":"Installation","slug":"installation","link":"#installation","children":[{"level":4,"title":"Client UUIDs","slug":"client-uuids","link":"#client-uuids","children":[]},{"level":3,"title":"Deploying Passport","slug":"deploying-passport","link":"#deploying-passport","children":[{"level":4,"title":"Loading Keys From The Environment","slug":"loading-keys-from-the-environment","link":"#loading-keys-from-the-environment","children":[]}]},{"level":3,"title":"Migration Customization","slug":"migration-customization","link":"#migration-customization","children":[]},{"level":3,"title":"Upgrading Passport","slug":"upgrading-passport","link":"#upgrading-passport","children":[]}]},{"level":2,"title":"Configuration","slug":"configuration","link":"#configuration","children":[{"level":3,"title":"Client Secret Hashing","slug":"client-secret-hashing","link":"#client-secret-hashing","children":[]},{"level":3,"title":"Token Lifetimes","slug":"token-lifetimes","link":"#token-lifetimes","children":[]},{"level":3,"title":"Overriding Default Models","slug":"overriding-default-models","link":"#overriding-default-models","children":[]},{"level":3,"title":"Overriding Routes","slug":"overriding-routes","link":"#overriding-routes","children":[]}]},{"level":2,"title":"Issuing Access Tokens","slug":"issuing-access-tokens","link":"#issuing-access-tokens","children":[{"level":3,"title":"Managing Clients","slug":"managing-clients","link":"#managing-clients","children":[{"level":4,"title":"The passport:client Command","slug":"the-passport-client-command","link":"#the-passport-client-command","children":[]},{"level":4,"title":"JSON API","slug":"json-api","link":"#json-api","children":[]},{"level":4,"title":"GET /oauth/clients","slug":"get-oauth-clients","link":"#get-oauth-clients","children":[]},{"level":4,"title":"POST /oauth/clients","slug":"post-oauth-clients","link":"#post-oauth-clients","children":[]},{"level":4,"title":"PUT /oauth/clients/{client-id}","slug":"put-oauth-clients-client-id","link":"#put-oauth-clients-client-id","children":[]},{"level":4,"title":"DELETE /oauth/clients/{client-id}","slug":"delete-oauth-clients-client-id","link":"#delete-oauth-clients-client-id","children":[]}]},{"level":3,"title":"Requesting Tokens","slug":"requesting-tokens","link":"#requesting-tokens","children":[{"level":4,"title":"Redirecting For Authorization","slug":"redirecting-for-authorization","link":"#redirecting-for-authorization","children":[]},{"level":4,"title":"Approving The Request","slug":"approving-the-request","link":"#approving-the-request","children":[]},{"level":4,"title":"Converting Authorization Codes To Access Tokens","slug":"converting-authorization-codes-to-access-tokens","link":"#converting-authorization-codes-to-access-tokens","children":[]},{"level":4,"title":"JSON API","slug":"json-api-1","link":"#json-api-1","children":[]},{"level":4,"title":"GET /oauth/tokens","slug":"get-oauth-tokens","link":"#get-oauth-tokens","children":[]},{"level":4,"title":"DELETE /oauth/tokens/{token-id}","slug":"delete-oauth-tokens-token-id","link":"#delete-oauth-tokens-token-id","children":[]}]},{"level":3,"title":"Refreshing Tokens","slug":"refreshing-tokens","link":"#refreshing-tokens","children":[]},{"level":3,"title":"Revoking Tokens","slug":"revoking-tokens","link":"#revoking-tokens","children":[]},{"level":3,"title":"Purging Tokens","slug":"purging-tokens","link":"#purging-tokens","children":[]}]},{"level":2,"title":"Authorization Code Grant with PKCE","slug":"authorization-code-grant-with-pkce","link":"#authorization-code-grant-with-pkce","children":[{"level":3,"title":"Creating The Client","slug":"creating-the-client","link":"#creating-the-client","children":[]},{"level":3,"title":"Requesting Tokens","slug":"requesting-tokens-1","link":"#requesting-tokens-1","children":[{"level":4,"title":"Code Verifier & Code Challenge","slug":"code-verifier-code-challenge","link":"#code-verifier-code-challenge","children":[]},{"level":4,"title":"Redirecting For Authorization","slug":"redirecting-for-authorization-1","link":"#redirecting-for-authorization-1","children":[]},{"level":4,"title":"Converting Authorization Codes To Access Tokens","slug":"converting-authorization-codes-to-access-tokens-1","link":"#converting-authorization-codes-to-access-tokens-1","children":[]}]}]},{"level":2,"title":"Password Grant Tokens","slug":"password-grant-tokens","link":"#password-grant-tokens","children":[{"level":3,"title":"Creating A Password Grant Client","slug":"creating-a-password-grant-client","link":"#creating-a-password-grant-client","children":[]},{"level":3,"title":"Requesting Tokens","slug":"requesting-tokens-2","link":"#requesting-tokens-2","children":[]},{"level":3,"title":"Requesting All Scopes","slug":"requesting-all-scopes","link":"#requesting-all-scopes","children":[]},{"level":3,"title":"Customizing The User Provider","slug":"customizing-the-user-provider","link":"#customizing-the-user-provider","children":[]},{"level":3,"title":"Customizing The Username Field","slug":"customizing-the-username-field","link":"#customizing-the-username-field","children":[]},{"level":3,"title":"Customizing The Password Validation","slug":"customizing-the-password-validation","link":"#customizing-the-password-validation","children":[]}]},{"level":2,"title":"Implicit Grant Tokens","slug":"implicit-grant-tokens","link":"#implicit-grant-tokens","children":[]},{"level":2,"title":"Client Credentials Grant Tokens","slug":"client-credentials-grant-tokens","link":"#client-credentials-grant-tokens","children":[{"level":3,"title":"Retrieving Tokens","slug":"retrieving-tokens","link":"#retrieving-tokens","children":[]}]},{"level":2,"title":"Personal Access Tokens","slug":"personal-access-tokens","link":"#personal-access-tokens","children":[{"level":3,"title":"Creating A Personal Access Client","slug":"creating-a-personal-access-client","link":"#creating-a-personal-access-client","children":[]},{"level":3,"title":"Managing Personal Access Tokens","slug":"managing-personal-access-tokens","link":"#managing-personal-access-tokens","children":[{"level":4,"title":"JSON API","slug":"json-api-2","link":"#json-api-2","children":[]},{"level":4,"title":"GET /oauth/scopes","slug":"get-oauth-scopes","link":"#get-oauth-scopes","children":[]},{"level":4,"title":"GET /oauth/personal-access-tokens","slug":"get-oauth-personal-access-tokens","link":"#get-oauth-personal-access-tokens","children":[]},{"level":4,"title":"POST /oauth/personal-access-tokens","slug":"post-oauth-personal-access-tokens","link":"#post-oauth-personal-access-tokens","children":[]},{"level":4,"title":"DELETE /oauth/personal-access-tokens/{token-id}","slug":"delete-oauth-personal-access-tokens-token-id","link":"#delete-oauth-personal-access-tokens-token-id","children":[]}]}]},{"level":2,"title":"Protecting Routes","slug":"protecting-routes","link":"#protecting-routes","children":[{"level":3,"title":"Via Middleware","slug":"via-middleware","link":"#via-middleware","children":[{"level":4,"title":"Multiple Authentication Guards","slug":"multiple-authentication-guards","link":"#multiple-authentication-guards","children":[]}]},{"level":3,"title":"Passing The Access Token","slug":"passing-the-access-token","link":"#passing-the-access-token","children":[]}]},{"level":2,"title":"Token Scopes","slug":"token-scopes","link":"#token-scopes","children":[{"level":3,"title":"Defining Scopes","slug":"defining-scopes","link":"#defining-scopes","children":[]},{"level":3,"title":"Default Scope","slug":"default-scope","link":"#default-scope","children":[]},{"level":3,"title":"Assigning Scopes To Tokens","slug":"assigning-scopes-to-tokens","link":"#assigning-scopes-to-tokens","children":[{"level":4,"title":"When Requesting Authorization Codes","slug":"when-requesting-authorization-codes","link":"#when-requesting-authorization-codes","children":[]},{"level":4,"title":"When Issuing Personal Access Tokens","slug":"when-issuing-personal-access-tokens","link":"#when-issuing-personal-access-tokens","children":[]}]},{"level":3,"title":"Checking Scopes","slug":"checking-scopes","link":"#checking-scopes","children":[{"level":4,"title":"Check For All Scopes","slug":"check-for-all-scopes","link":"#check-for-all-scopes","children":[]},{"level":4,"title":"Check For Any Scopes","slug":"check-for-any-scopes","link":"#check-for-any-scopes","children":[]},{"level":4,"title":"Checking Scopes On A Token Instance","slug":"checking-scopes-on-a-token-instance","link":"#checking-scopes-on-a-token-instance","children":[]},{"level":4,"title":"Additional Scope Methods","slug":"additional-scope-methods","link":"#additional-scope-methods","children":[]}]}]},{"level":2,"title":"Consuming Your API With JavaScript","slug":"consuming-your-api-with-javascript","link":"#consuming-your-api-with-javascript","children":[{"level":4,"title":"Customizing The Cookie Name","slug":"customizing-the-cookie-name","link":"#customizing-the-cookie-name","children":[]},{"level":4,"title":"CSRF Protection","slug":"csrf-protection","link":"#csrf-protection","children":[]}]},{"level":2,"title":"Events","slug":"events","link":"#events","children":[]},{"level":2,"title":"Testing","slug":"testing","link":"#testing","children":[]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":23.97,"words":7191},"filePathRelative":"guide/passport.md","excerpt":"<h1> Laravel Passport</h1>\\n<ul>\\n<li><a href=\\"#introduction\\">Introduction</a>\\n<ul>\\n<li><a href=\\"#passport-or-sanctum\\">Passport Or Sanctum?</a></li>\\n</ul>\\n</li>\\n<li><a href=\\"#installation\\">Installation</a>\\n<ul>\\n<li><a href=\\"#deploying-passport\\">Deploying Passport</a></li>\\n<li><a href=\\"#migration-customization\\">Migration Customization</a></li>\\n<li><a href=\\"#upgrading-passport\\">Upgrading Passport</a></li>\\n</ul>\\n</li>\\n<li><a href=\\"#configuration\\">Configuration</a>\\n<ul>\\n<li><a href=\\"#client-secret-hashing\\">Client Secret Hashing</a></li>\\n<li><a href=\\"#token-lifetimes\\">Token Lifetimes</a></li>\\n<li><a href=\\"#overriding-default-models\\">Overriding Default Models</a></li>\\n<li><a href=\\"#overriding-routes\\">Overriding Routes</a></li>\\n</ul>\\n</li>\\n<li><a href=\\"#issuing-access-tokens\\">Issuing Access Tokens</a>\\n<ul>\\n<li><a href=\\"#managing-clients\\">Managing Clients</a></li>\\n<li><a href=\\"#requesting-tokens\\">Requesting Tokens</a></li>\\n<li><a href=\\"#refreshing-tokens\\">Refreshing Tokens</a></li>\\n<li><a href=\\"#revoking-tokens\\">Revoking Tokens</a></li>\\n<li><a href=\\"#purging-tokens\\">Purging Tokens</a></li>\\n</ul>\\n</li>\\n<li><a href=\\"#code-grant-pkce\\">Authorization Code Grant with PKCE</a>\\n<ul>\\n<li><a href=\\"#creating-a-auth-pkce-grant-client\\">Creating The Client</a></li>\\n<li><a href=\\"#requesting-auth-pkce-grant-tokens\\">Requesting Tokens</a></li>\\n</ul>\\n</li>\\n<li><a href=\\"#password-grant-tokens\\">Password Grant Tokens</a>\\n<ul>\\n<li><a href=\\"#creating-a-password-grant-client\\">Creating A Password Grant Client</a></li>\\n<li><a href=\\"#requesting-password-grant-tokens\\">Requesting Tokens</a></li>\\n<li><a href=\\"#requesting-all-scopes\\">Requesting All Scopes</a></li>\\n<li><a href=\\"#customizing-the-user-provider\\">Customizing The User Provider</a></li>\\n<li><a href=\\"#customizing-the-username-field\\">Customizing The Username Field</a></li>\\n<li><a href=\\"#customizing-the-password-validation\\">Customizing The Password Validation</a></li>\\n</ul>\\n</li>\\n<li><a href=\\"#implicit-grant-tokens\\">Implicit Grant Tokens</a></li>\\n<li><a href=\\"#client-credentials-grant-tokens\\">Client Credentials Grant Tokens</a></li>\\n<li><a href=\\"#personal-access-tokens\\">Personal Access Tokens</a>\\n<ul>\\n<li><a href=\\"#creating-a-personal-access-client\\">Creating A Personal Access Client</a></li>\\n<li><a href=\\"#managing-personal-access-tokens\\">Managing Personal Access Tokens</a></li>\\n</ul>\\n</li>\\n<li><a href=\\"#protecting-routes\\">Protecting Routes</a>\\n<ul>\\n<li><a href=\\"#via-middleware\\">Via Middleware</a></li>\\n<li><a href=\\"#passing-the-access-token\\">Passing The Access Token</a></li>\\n</ul>\\n</li>\\n<li><a href=\\"#token-scopes\\">Token Scopes</a>\\n<ul>\\n<li><a href=\\"#defining-scopes\\">Defining Scopes</a></li>\\n<li><a href=\\"#default-scope\\">Default Scope</a></li>\\n<li><a href=\\"#assigning-scopes-to-tokens\\">Assigning Scopes To Tokens</a></li>\\n<li><a href=\\"#checking-scopes\\">Checking Scopes</a></li>\\n</ul>\\n</li>\\n<li><a href=\\"#consuming-your-api-with-javascript\\">Consuming Your API With JavaScript</a></li>\\n<li><a href=\\"#events\\">Events</a></li>\\n<li><a href=\\"#testing\\">Testing</a></li>\\n</ul>"}');export{e as data};
