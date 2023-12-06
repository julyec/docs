const e=JSON.parse('{"key":"v-4e50c9d9","path":"/further/backend/schema.html","title":"架构","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"Controller控制器层","slug":"controller控制器层","link":"#controller控制器层","children":[]},{"level":2,"title":"Service业务服务层","slug":"service业务服务层","link":"#service业务服务层","children":[]},{"level":2,"title":"Mapper数据访问映射层","slug":"mapper数据访问映射层","link":"#mapper数据访问映射层","children":[]},{"level":2,"title":"Model模型","slug":"model模型","link":"#model模型","children":[]}],"git":{"createdTime":1701780913000,"updatedTime":1701780913000,"contributors":[{"name":"Moments","email":"554676262@qq.com","commits":1}]},"readingTime":{"minutes":2.33,"words":700},"filePathRelative":"further/backend/schema.md","localizedDate":"December 5, 2023","excerpt":"<h1> 架构</h1>\\n<div class=\\"hint-container tip\\">\\n<p class=\\"hint-container-title\\">介绍</p>\\n<p>MineAdmin 后端系统架构思想来源于 Spring boot，但由于 php 和 java 并不一样，也不适合完全照搬，所以我们取其精华</p>\\n<p>系统分层：</p>\\n<ol>\\n<li>控制器 Controller</li>\\n<li>业务服务层 Service</li>\\n<li>数据访问映射 Mapper，这一层也可以叫做 Dao 层</li>\\n<li>模型 Model，模型也可以叫做实体类</li>\\n</ol>\\n<p><strong>注意：系统分层是为了更好管理业务代码逻辑，如觉着麻烦，可以用传统方式直接在 Controller 调用 Db 一把梭。</strong></p>\\n</div>"}');export{e as data};
