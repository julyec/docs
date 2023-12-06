const e=JSON.parse('{"key":"v-27642f51","path":"/guide/http-tests.html","title":"HTTP Tests","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"Introduction","slug":"introduction","link":"#introduction","children":[]},{"level":2,"title":"Making Requests","slug":"making-requests","link":"#making-requests","children":[{"level":3,"title":"Customizing Request Headers","slug":"customizing-request-headers","link":"#customizing-request-headers","children":[]},{"level":3,"title":"Cookies","slug":"cookies","link":"#cookies","children":[]},{"level":3,"title":"Session / Authentication","slug":"session-authentication","link":"#session-authentication","children":[]},{"level":3,"title":"Debugging Responses","slug":"debugging-responses","link":"#debugging-responses","children":[]},{"level":3,"title":"Exception Handling","slug":"exception-handling","link":"#exception-handling","children":[]}]},{"level":2,"title":"Testing JSON APIs","slug":"testing-json-apis","link":"#testing-json-apis","children":[{"level":4,"title":"Asserting Exact JSON Matches","slug":"asserting-exact-json-matches","link":"#asserting-exact-json-matches","children":[]},{"level":4,"title":"Asserting On JSON Paths","slug":"asserting-on-json-paths","link":"#asserting-on-json-paths","children":[]},{"level":3,"title":"Fluent JSON Testing","slug":"fluent-json-testing","link":"#fluent-json-testing","children":[{"level":4,"title":"Understanding The etc Method","slug":"understanding-the-etc-method","link":"#understanding-the-etc-method","children":[]},{"level":4,"title":"Asserting Attribute Presence / Absence","slug":"asserting-attribute-presence-absence","link":"#asserting-attribute-presence-absence","children":[]},{"level":4,"title":"Asserting Against JSON Collections","slug":"asserting-against-json-collections","link":"#asserting-against-json-collections","children":[]},{"level":4,"title":"Scoping JSON Collection Assertions","slug":"scoping-json-collection-assertions","link":"#scoping-json-collection-assertions","children":[]},{"level":4,"title":"Asserting JSON Types","slug":"asserting-json-types","link":"#asserting-json-types","children":[]}]}]},{"level":2,"title":"Testing File Uploads","slug":"testing-file-uploads","link":"#testing-file-uploads","children":[{"level":4,"title":"Fake File Customization","slug":"fake-file-customization","link":"#fake-file-customization","children":[]}]},{"level":2,"title":"Testing Views","slug":"testing-views","link":"#testing-views","children":[{"level":4,"title":"Sharing Errors","slug":"sharing-errors","link":"#sharing-errors","children":[]},{"level":3,"title":"Rendering Blade & Components","slug":"rendering-blade-components","link":"#rendering-blade-components","children":[]}]},{"level":2,"title":"Available Assertions","slug":"available-assertions","link":"#available-assertions","children":[{"level":3,"title":"Response Assertions","slug":"response-assertions","link":"#response-assertions","children":[{"level":4,"title":"assertBadRequest","slug":"assertbadrequest","link":"#assertbadrequest","children":[]},{"level":4,"title":"assertAccepted","slug":"assertaccepted","link":"#assertaccepted","children":[]},{"level":4,"title":"assertConflict","slug":"assertconflict","link":"#assertconflict","children":[]},{"level":4,"title":"assertCookie","slug":"assertcookie","link":"#assertcookie","children":[]},{"level":4,"title":"assertCookieExpired","slug":"assertcookieexpired","link":"#assertcookieexpired","children":[]},{"level":4,"title":"assertCookieNotExpired","slug":"assertcookienotexpired","link":"#assertcookienotexpired","children":[]},{"level":4,"title":"assertCookieMissing","slug":"assertcookiemissing","link":"#assertcookiemissing","children":[]},{"level":4,"title":"assertCreated","slug":"assertcreated","link":"#assertcreated","children":[]},{"level":4,"title":"assertDontSee","slug":"assertdontsee","link":"#assertdontsee","children":[]},{"level":4,"title":"assertDontSeeText","slug":"assertdontseetext","link":"#assertdontseetext","children":[]},{"level":4,"title":"assertDownload","slug":"assertdownload","link":"#assertdownload","children":[]},{"level":4,"title":"assertExactJson","slug":"assertexactjson","link":"#assertexactjson","children":[]},{"level":4,"title":"assertForbidden","slug":"assertforbidden","link":"#assertforbidden","children":[]},{"level":4,"title":"assertFound","slug":"assertfound","link":"#assertfound","children":[]},{"level":4,"title":"assertGone","slug":"assertgone","link":"#assertgone","children":[]},{"level":4,"title":"assertHeader","slug":"assertheader","link":"#assertheader","children":[]},{"level":4,"title":"assertHeaderMissing","slug":"assertheadermissing","link":"#assertheadermissing","children":[]},{"level":4,"title":"assertInternalServerError","slug":"assertinternalservererror","link":"#assertinternalservererror","children":[]},{"level":4,"title":"assertJson","slug":"assertjson","link":"#assertjson","children":[]},{"level":4,"title":"assertJsonCount","slug":"assertjsoncount","link":"#assertjsoncount","children":[]},{"level":4,"title":"assertJsonFragment","slug":"assertjsonfragment","link":"#assertjsonfragment","children":[]},{"level":4,"title":"assertJsonIsArray","slug":"assertjsonisarray","link":"#assertjsonisarray","children":[]},{"level":4,"title":"assertJsonIsObject","slug":"assertjsonisobject","link":"#assertjsonisobject","children":[]},{"level":4,"title":"assertJsonMissing","slug":"assertjsonmissing","link":"#assertjsonmissing","children":[]},{"level":4,"title":"assertJsonMissingExact","slug":"assertjsonmissingexact","link":"#assertjsonmissingexact","children":[]},{"level":4,"title":"assertJsonMissingValidationErrors","slug":"assertjsonmissingvalidationerrors","link":"#assertjsonmissingvalidationerrors","children":[]},{"level":4,"title":"assertJsonPath","slug":"assertjsonpath","link":"#assertjsonpath","children":[]},{"level":4,"title":"assertJsonMissingPath","slug":"assertjsonmissingpath","link":"#assertjsonmissingpath","children":[]},{"level":4,"title":"assertJsonStructure","slug":"assertjsonstructure","link":"#assertjsonstructure","children":[]},{"level":4,"title":"assertJsonValidationErrors","slug":"assertjsonvalidationerrors","link":"#assertjsonvalidationerrors","children":[]},{"level":4,"title":"assertJsonValidationErrorFor","slug":"assertjsonvalidationerrorfor","link":"#assertjsonvalidationerrorfor","children":[]},{"level":4,"title":"assertMethodNotAllowed","slug":"assertmethodnotallowed","link":"#assertmethodnotallowed","children":[]},{"level":4,"title":"assertMovedPermanently","slug":"assertmovedpermanently","link":"#assertmovedpermanently","children":[]},{"level":4,"title":"assertLocation","slug":"assertlocation","link":"#assertlocation","children":[]},{"level":4,"title":"assertContent","slug":"assertcontent","link":"#assertcontent","children":[]},{"level":4,"title":"assertNoContent","slug":"assertnocontent","link":"#assertnocontent","children":[]},{"level":4,"title":"assertStreamedContent","slug":"assertstreamedcontent","link":"#assertstreamedcontent","children":[]},{"level":4,"title":"assertNotFound","slug":"assertnotfound","link":"#assertnotfound","children":[]},{"level":4,"title":"assertOk","slug":"assertok","link":"#assertok","children":[]},{"level":4,"title":"assertPaymentRequired","slug":"assertpaymentrequired","link":"#assertpaymentrequired","children":[]},{"level":4,"title":"assertPlainCookie","slug":"assertplaincookie","link":"#assertplaincookie","children":[]},{"level":4,"title":"assertRedirect","slug":"assertredirect","link":"#assertredirect","children":[]},{"level":4,"title":"assertRedirectContains","slug":"assertredirectcontains","link":"#assertredirectcontains","children":[]},{"level":4,"title":"assertRedirectToRoute","slug":"assertredirecttoroute","link":"#assertredirecttoroute","children":[]},{"level":4,"title":"assertRedirectToSignedRoute","slug":"assertredirecttosignedroute","link":"#assertredirecttosignedroute","children":[]},{"level":4,"title":"assertRequestTimeout","slug":"assertrequesttimeout","link":"#assertrequesttimeout","children":[]},{"level":4,"title":"assertSee","slug":"assertsee","link":"#assertsee","children":[]},{"level":4,"title":"assertSeeInOrder","slug":"assertseeinorder","link":"#assertseeinorder","children":[]},{"level":4,"title":"assertSeeText","slug":"assertseetext","link":"#assertseetext","children":[]},{"level":4,"title":"assertSeeTextInOrder","slug":"assertseetextinorder","link":"#assertseetextinorder","children":[]},{"level":4,"title":"assertServerError","slug":"assertservererror","link":"#assertservererror","children":[]},{"level":4,"title":"assertServiceUnavailable","slug":"assertserviceunavailable","link":"#assertserviceunavailable","children":[]},{"level":4,"title":"assertSessionHas","slug":"assertsessionhas","link":"#assertsessionhas","children":[]},{"level":4,"title":"assertSessionHasInput","slug":"assertsessionhasinput","link":"#assertsessionhasinput","children":[]},{"level":4,"title":"assertSessionHasAll","slug":"assertsessionhasall","link":"#assertsessionhasall","children":[]},{"level":4,"title":"assertSessionHasErrors","slug":"assertsessionhaserrors","link":"#assertsessionhaserrors","children":[]},{"level":4,"title":"assertSessionHasErrorsIn","slug":"assertsessionhaserrorsin","link":"#assertsessionhaserrorsin","children":[]},{"level":4,"title":"assertSessionHasNoErrors","slug":"assertsessionhasnoerrors","link":"#assertsessionhasnoerrors","children":[]},{"level":4,"title":"assertSessionDoesntHaveErrors","slug":"assertsessiondoesnthaveerrors","link":"#assertsessiondoesnthaveerrors","children":[]},{"level":4,"title":"assertSessionMissing","slug":"assertsessionmissing","link":"#assertsessionmissing","children":[]},{"level":4,"title":"assertStatus","slug":"assertstatus","link":"#assertstatus","children":[]},{"level":4,"title":"assertSuccessful","slug":"assertsuccessful","link":"#assertsuccessful","children":[]},{"level":4,"title":"assertTooManyRequests","slug":"asserttoomanyrequests","link":"#asserttoomanyrequests","children":[]},{"level":4,"title":"assertUnauthorized","slug":"assertunauthorized","link":"#assertunauthorized","children":[]},{"level":4,"title":"assertUnprocessable","slug":"assertunprocessable","link":"#assertunprocessable","children":[]},{"level":4,"title":"assertUnsupportedMediaType","slug":"assertunsupportedmediatype","link":"#assertunsupportedmediatype","children":[]},{"level":4,"title":"assertValid","slug":"assertvalid","link":"#assertvalid","children":[]},{"level":4,"title":"assertInvalid","slug":"assertinvalid","link":"#assertinvalid","children":[]},{"level":4,"title":"assertViewHas","slug":"assertviewhas","link":"#assertviewhas","children":[]},{"level":4,"title":"assertViewHasAll","slug":"assertviewhasall","link":"#assertviewhasall","children":[]},{"level":4,"title":"assertViewIs","slug":"assertviewis","link":"#assertviewis","children":[]},{"level":4,"title":"assertViewMissing","slug":"assertviewmissing","link":"#assertviewmissing","children":[]}]},{"level":3,"title":"Authentication Assertions","slug":"authentication-assertions","link":"#authentication-assertions","children":[{"level":4,"title":"assertAuthenticated","slug":"assertauthenticated","link":"#assertauthenticated","children":[]},{"level":4,"title":"assertGuest","slug":"assertguest","link":"#assertguest","children":[]},{"level":4,"title":"assertAuthenticatedAs","slug":"assertauthenticatedas","link":"#assertauthenticatedas","children":[]}]}]},{"level":2,"title":"Validation Assertions","slug":"validation-assertions","link":"#validation-assertions","children":[{"level":4,"title":"assertValid","slug":"assertvalid-1","link":"#assertvalid-1","children":[]},{"level":4,"title":"assertInvalid","slug":"assertinvalid-1","link":"#assertinvalid-1","children":[]}]}],"git":{"createdTime":1701780913000,"updatedTime":1701780913000,"contributors":[{"name":"Moments","email":"554676262@qq.com","commits":1}]},"readingTime":{"minutes":20.26,"words":6079},"filePathRelative":"guide/http-tests.md","localizedDate":"December 5, 2023","excerpt":"<h1> HTTP Tests</h1>\\n<ul>\\n<li><a href=\\"#introduction\\">Introduction</a></li>\\n<li><a href=\\"#making-requests\\">Making Requests</a>\\n<ul>\\n<li><a href=\\"#customizing-request-headers\\">Customizing Request Headers</a></li>\\n<li><a href=\\"#cookies\\">Cookies</a></li>\\n<li><a href=\\"#session-and-authentication\\">Session / Authentication</a></li>\\n<li><a href=\\"#debugging-responses\\">Debugging Responses</a></li>\\n<li><a href=\\"#exception-handling\\">Exception Handling</a></li>\\n</ul>\\n</li>\\n<li><a href=\\"#testing-json-apis\\">Testing JSON APIs</a>\\n<ul>\\n<li><a href=\\"#fluent-json-testing\\">Fluent JSON Testing</a></li>\\n</ul>\\n</li>\\n<li><a href=\\"#testing-file-uploads\\">Testing File Uploads</a></li>\\n<li><a href=\\"#testing-views\\">Testing Views</a>\\n<ul>\\n<li><a href=\\"#rendering-blade-and-components\\">Rendering Blade &amp; Components</a></li>\\n</ul>\\n</li>\\n<li><a href=\\"#available-assertions\\">Available Assertions</a>\\n<ul>\\n<li><a href=\\"#response-assertions\\">Response Assertions</a></li>\\n<li><a href=\\"#authentication-assertions\\">Authentication Assertions</a></li>\\n<li><a href=\\"#validation-assertions\\">Validation Assertions</a></li>\\n</ul>\\n</li>\\n</ul>"}');export{e as data};