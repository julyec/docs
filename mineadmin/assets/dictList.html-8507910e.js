const t=JSON.parse(`{"key":"v-1d8def56","path":"/further/front/components/dictList.html","title":"","lang":"en-US","frontmatter":{},"headers":[],"git":{"createdTime":1701780913000,"updatedTime":1701780913000,"contributors":[{"name":"Moments","email":"554676262@qq.com","commits":1}]},"readingTime":{"minutes":2.29,"words":687},"filePathRelative":"further/front/components/dictList.md","localizedDate":"December 5, 2023","excerpt":"<table>\\n<thead>\\n<tr>\\n<th style=\\"text-align:center\\">参数名</th>\\n<th style=\\"text-align:center\\">参数类型</th>\\n<th style=\\"text-align:center\\">参数说明</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td style=\\"text-align:center\\">name</td>\\n<td style=\\"text-align:center\\">String</td>\\n<td style=\\"text-align:center\\">指定字典的名称，可在数据字典管理里面查看</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:center\\">data</td>\\n<td style=\\"text-align:center\\">Array</td>\\n<td style=\\"text-align:center\\">指定一个数据集合</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:center\\">url</td>\\n<td style=\\"text-align:center\\">String</td>\\n<td style=\\"text-align:center\\">指定一个url地址，组件自动进行远程请求数据</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:center\\">cache</td>\\n<td style=\\"text-align:center\\">Boolean</td>\\n<td style=\\"text-align:center\\">是否把字典数据缓存到LocalStorage，只有url请求模式下生效</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:center\\">method</td>\\n<td style=\\"text-align:center\\">String</td>\\n<td style=\\"text-align:center\\">指定url请求时的请求方式：get,post,delete,put</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:center\\">params</td>\\n<td style=\\"text-align:center\\">Object</td>\\n<td style=\\"text-align:center\\">指定url请求时的query参数</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:center\\">body</td>\\n<td style=\\"text-align:center\\">Object</td>\\n<td style=\\"text-align:center\\">指定url请求时的data参数</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:center\\">openPage</td>\\n<td style=\\"text-align:center\\">Boolean</td>\\n<td style=\\"text-align:center\\">请求数据是否添加分页参数，返回数据也会按分页方式解析 </td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:center\\">pageSize</td>\\n<td style=\\"text-align:center\\">Number</td>\\n<td style=\\"text-align:center\\">每页记录数，默认: 10，前置条件：openPage: true </td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:center\\">remote</td>\\n<td style=\\"text-align:center\\">String</td>\\n<td style=\\"text-align:center\\">远程通用列表接口地址  </td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:center\\">remoteOption</td>\\n<td style=\\"text-align:center\\">Object</td>\\n<td style=\\"text-align:center\\">请求远程通用列表接口配置项 </td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:center\\">translation</td>\\n<td style=\\"text-align:center\\">Boolean</td>\\n<td style=\\"text-align:center\\">翻译：true则显示字典对应的标签，false则为显示原始数据</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:center\\">tagColor</td>\\n<td style=\\"text-align:center\\">String</td>\\n<td style=\\"text-align:center\\">统一设置tag标签的颜色对翻译的字典数据加上tag，前置条件：translation: true</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:center\\">tagColors</td>\\n<td style=\\"text-align:center\\">Object</td>\\n<td style=\\"text-align:center\\">单独对某个字典值设置tag颜色，前置条件：translation: true</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:center\\">props</td>\\n<td style=\\"text-align:center\\">Object</td>\\n<td style=\\"text-align:center\\">设置解析数据的 label 和 value，例如: { label: 'title', value: 'key' }</td>\\n</tr>\\n</tbody>\\n</table>"}`);export{t as data};
