const e=JSON.parse(`{"key":"v-6dbc9a86","path":"/exports/concerns.html","title":"Export concerns","lang":"en-US","frontmatter":{"pageClass":"no-toc"},"headers":[{"level":3,"title":"Traits","slug":"traits","link":"#traits","children":[]}],"git":{"createdTime":1704429178000,"updatedTime":1704429178000,"contributors":[{"name":"Moments","email":"554676262@qq.com","commits":1}]},"readingTime":{"minutes":1.68,"words":503},"filePathRelative":"exports/concerns.md","localizedDate":"January 5, 2024","excerpt":"<h1> Export concerns</h1>\\n<table>\\n<thead>\\n<tr>\\n<th>Interface</th>\\n<th>Explanation</th>\\n<th>Documentation</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td><code>Maatwebsite\\\\Excel\\\\Concerns\\\\FromArray</code></td>\\n<td>Use an array to populate the export.</td>\\n<td><a href=\\"/3.1/exports/collection.html#using-arrays\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Exporting collections</a></td>\\n</tr>\\n<tr>\\n<td><code>Maatwebsite\\\\Excel\\\\Concerns\\\\FromCollection</code></td>\\n<td>Use a Laravel Collection to populate the export.</td>\\n<td><a href=\\"/3.1/exports/collection.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Exporting collections</a></td>\\n</tr>\\n<tr>\\n<td><code>Maatwebsite\\\\Excel\\\\Concerns\\\\FromGenerator</code></td>\\n<td>Use a generator to populate the export.</td>\\n<td><a href=\\"/3.1/exports/from-generator.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">From Generator</a></td>\\n</tr>\\n<tr>\\n<td><code>Maatwebsite\\\\Excel\\\\Concerns\\\\FromIterator</code></td>\\n<td>Use an iterator to populate the export.</td>\\n<td></td>\\n</tr>\\n<tr>\\n<td><code>Maatwebsite\\\\Excel\\\\Concerns\\\\FromQuery</code></td>\\n<td>Use an Eloquent query to populate the export.</td>\\n<td><a href=\\"/3.1/exports/from-query.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">From Query</a></td>\\n</tr>\\n<tr>\\n<td><code>Maatwebsite\\\\Excel\\\\Concerns\\\\FromView</code></td>\\n<td>Use a (Blade) view to to populate the export.</td>\\n<td><a href=\\"/3.1/exports/from-view.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">From View</a></td>\\n</tr>\\n<tr>\\n<td><code>Maatwebsite\\\\Excel\\\\Concerns\\\\HasReferencesToOtherSheets</code></td>\\n<td>Allows precalculated values where one sheet has references to another sheet.</td>\\n<td><a href=\\"/3.1/exports/multiple-sheets.html#making-calculations-work-when-referencing-between-sheets\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">References to other sheets</a></td>\\n</tr>\\n<tr>\\n<td><code>Maatwebsite\\\\Excel\\\\Concerns\\\\ShouldAutoSize</code></td>\\n<td>Auto-size the columns in the worksheet.</td>\\n<td><a href=\\"/3.1/exports/column-formatting.html#auto-size\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Auto size</a></td>\\n</tr>\\n<tr>\\n<td><code>Maatwebsite\\\\Excel\\\\Concerns\\\\WithCharts</code></td>\\n<td>Allows to run one or multiple PhpSpreadsheet Chart instances.</td>\\n<td><a href=\\"/3.1/exports/charts.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Charts</a></td>\\n</tr>\\n<tr>\\n<td><code>Maatwebsite\\\\Excel\\\\Concerns\\\\WithColumnFormatting</code></td>\\n<td>Format certain columns.</td>\\n<td><a href=\\"/3.1/exports/column-formatting.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Formatting columns</a></td>\\n</tr>\\n<tr>\\n<td><code>Maatwebsite\\\\Excel\\\\Concerns\\\\WithColumnWidths</code></td>\\n<td>Set Column widths.</td>\\n<td><a href=\\"/3.1/exports/column-formatting.html#styling\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Column widths</a></td>\\n</tr>\\n<tr>\\n<td><code>Maatwebsite\\\\Excel\\\\Concerns\\\\WithCustomChunkSize</code></td>\\n<td>Allows Exportables to define their chunk size.</td>\\n<td></td>\\n</tr>\\n<tr>\\n<td><code>Maatwebsite\\\\Excel\\\\Concerns\\\\WithCustomCsvSettings</code></td>\\n<td>Allows to run custom Csv settings for this specific exportable.</td>\\n<td><a href=\\"/3.1/exports/settings.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Custom CSV Settings</a></td>\\n</tr>\\n<tr>\\n<td><code>Maatwebsite\\\\Excel\\\\Concerns\\\\WithCustomQuerySize</code></td>\\n<td>Allows Exportables that implement the FromQuery concern to provide their own custom query size.</td>\\n<td><a href=\\"/3.1/exports/queued.html#custom-query-size\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Custom Query Size</a></td>\\n</tr>\\n<tr>\\n<td><code>Maatwebsite\\\\Excel\\\\Concerns\\\\WithCustomStartCell</code></td>\\n<td>Allows to specify a custom start cell. Do note that this is only supported for FromCollection exports.</td>\\n<td><a href=\\"/3.1/exports/collection.html#custom-start-cell\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Custom start cell</a></td>\\n</tr>\\n<tr>\\n<td><code>Maatwebsite\\\\Excel\\\\Concerns\\\\WithCustomValueBinder</code></td>\\n<td>Allows to specify a custom value binder.</td>\\n<td><a href=\\"/3.1/exports/column-formatting.html#value-binders\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Custom Value Binder</a></td>\\n</tr>\\n<tr>\\n<td><code>Maatwebsite\\\\Excel\\\\Concerns\\\\WithDrawings</code></td>\\n<td>Allows to run one or multiple PhpSpreadsheet (Base)Drawing instances.</td>\\n<td><a href=\\"/3.1/exports/drawings.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Drawings</a></td>\\n</tr>\\n<tr>\\n<td><code>Maatwebsite\\\\Excel\\\\Concerns\\\\WithEvents</code></td>\\n<td>Register events to hook into the PhpSpreadsheet process.</td>\\n<td><a href=\\"/3.1/exports/extending.html#events\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Events</a></td>\\n</tr>\\n<tr>\\n<td><code>Maatwebsite\\\\Excel\\\\Concerns\\\\WithHeadings</code></td>\\n<td>Prepend a heading row.</td>\\n<td><a href=\\"/3.1/exports/mapping.html#adding-a-heading-row\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Adding a heading row</a></td>\\n</tr>\\n<tr>\\n<td><code>Maatwebsite\\\\Excel\\\\Concerns\\\\WithMapping</code></td>\\n<td>Format the row before it's written to the file.</td>\\n<td><a href=\\"/3.1/exports/mapping.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Mapping data</a></td>\\n</tr>\\n<tr>\\n<td><code>Maatwebsite\\\\Excel\\\\Concerns\\\\WithMultipleSheets</code></td>\\n<td>Enable multi-sheet support. Each sheet can have its own concerns (except this one).</td>\\n<td><a href=\\"/3.1/exports/multiple-sheets.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Multiple Sheets</a></td>\\n</tr>\\n<tr>\\n<td><code>Maatwebsite\\\\Excel\\\\Concerns\\\\WithPreCalculateFormulas</code></td>\\n<td>Forces PhpSpreadsheet to recalculate all formulae in a workbook when saving, so that the pre-calculated values are immediately available to MS Excel or other office spreadsheet viewer when opening the file.</td>\\n<td></td>\\n</tr>\\n<tr>\\n<td><code>Maatwebsite\\\\Excel\\\\Concerns\\\\WithProperties</code></td>\\n<td>Allows setting properties on the document.</td>\\n<td><a href=\\"/3.1/exports/settings.html#properties\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Properties</a></td>\\n</tr>\\n<tr>\\n<td><code>Maatwebsite\\\\Excel\\\\Concerns\\\\WithStrictNullComparison</code></td>\\n<td>Uses strict comparisons when testing cells for null value.</td>\\n<td><a href=\\"/3.1/exports/collection.html#strict-null-comparisons\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Strict null comparisons</a></td>\\n</tr>\\n<tr>\\n<td><code>Maatwebsite\\\\Excel\\\\Concerns\\\\WithStyles</code></td>\\n<td>Allows setting styles on worksheets.</td>\\n<td><a href=\\"/3.1/exports/column-formatting.html#styling\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Styles</a></td>\\n</tr>\\n<tr>\\n<td><code>Maatwebsite\\\\Excel\\\\Concerns\\\\WithTitle</code></td>\\n<td>Set the Workbook or Worksheet title.</td>\\n<td><a href=\\"/3.1/exports/multiple-sheets.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Multiple Sheets</a></td>\\n</tr>\\n</tbody>\\n</table>"}`);export{e as data};
