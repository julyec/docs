import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{r,o as s,c as a,b as e,e as t,d as l}from"./app-edc8bdf9.js";const i={},c=e("h1",{id:"export-concerns",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#export-concerns","aria-hidden":"true"},"#"),t(" Export concerns")],-1),d=e("thead",null,[e("tr",null,[e("th",null,"Interface"),e("th",null,"Explanation"),e("th",null,"Documentation")])],-1),h=e("td",null,[e("code",null,"Maatwebsite\\Excel\\Concerns\\FromArray")],-1),u=e("td",null,"Use an array to populate the export.",-1),_={href:"/3.1/exports/collection.html#using-arrays",target:"_blank",rel:"noopener noreferrer"},p=e("td",null,[e("code",null,"Maatwebsite\\Excel\\Concerns\\FromCollection")],-1),m=e("td",null,"Use a Laravel Collection to populate the export.",-1),f={href:"/3.1/exports/collection.html",target:"_blank",rel:"noopener noreferrer"},x=e("td",null,[e("code",null,"Maatwebsite\\Excel\\Concerns\\FromGenerator")],-1),b=e("td",null,"Use a generator to populate the export.",-1),g={href:"/3.1/exports/from-generator.html",target:"_blank",rel:"noopener noreferrer"},w=e("tr",null,[e("td",null,[e("code",null,"Maatwebsite\\Excel\\Concerns\\FromIterator")]),e("td",null,"Use an iterator to populate the export."),e("td")],-1),C=e("td",null,[e("code",null,"Maatwebsite\\Excel\\Concerns\\FromQuery")],-1),E=e("td",null,"Use an Eloquent query to populate the export.",-1),k={href:"/3.1/exports/from-query.html",target:"_blank",rel:"noopener noreferrer"},M=e("td",null,[e("code",null,"Maatwebsite\\Excel\\Concerns\\FromView")],-1),v=e("td",null,"Use a (Blade) view to to populate the export.",-1),S={href:"/3.1/exports/from-view.html",target:"_blank",rel:"noopener noreferrer"},y=e("td",null,[e("code",null,"Maatwebsite\\Excel\\Concerns\\HasReferencesToOtherSheets")],-1),W=e("td",null,"Allows precalculated values where one sheet has references to another sheet.",-1),A={href:"/3.1/exports/multiple-sheets.html#making-calculations-work-when-referencing-between-sheets",target:"_blank",rel:"noopener noreferrer"},F=e("td",null,[e("code",null,"Maatwebsite\\Excel\\Concerns\\ShouldAutoSize")],-1),z=e("td",null,"Auto-size the columns in the worksheet.",-1),P={href:"/3.1/exports/column-formatting.html#auto-size",target:"_blank",rel:"noopener noreferrer"},V=e("td",null,[e("code",null,"Maatwebsite\\Excel\\Concerns\\WithCharts")],-1),B=e("td",null,"Allows to run one or multiple PhpSpreadsheet Chart instances.",-1),U={href:"/3.1/exports/charts.html",target:"_blank",rel:"noopener noreferrer"},q=e("td",null,[e("code",null,"Maatwebsite\\Excel\\Concerns\\WithColumnFormatting")],-1),D=e("td",null,"Format certain columns.",-1),Q={href:"/3.1/exports/column-formatting.html",target:"_blank",rel:"noopener noreferrer"},T=e("td",null,[e("code",null,"Maatwebsite\\Excel\\Concerns\\WithColumnWidths")],-1),I=e("td",null,"Set Column widths.",-1),L={href:"/3.1/exports/column-formatting.html#styling",target:"_blank",rel:"noopener noreferrer"},N=e("tr",null,[e("td",null,[e("code",null,"Maatwebsite\\Excel\\Concerns\\WithCustomChunkSize")]),e("td",null,"Allows Exportables to define their chunk size."),e("td")],-1),R=e("td",null,[e("code",null,"Maatwebsite\\Excel\\Concerns\\WithCustomCsvSettings")],-1),G=e("td",null,"Allows to run custom Csv settings for this specific exportable.",-1),H={href:"/3.1/exports/settings.html",target:"_blank",rel:"noopener noreferrer"},O=e("td",null,[e("code",null,"Maatwebsite\\Excel\\Concerns\\WithCustomQuerySize")],-1),j=e("td",null,"Allows Exportables that implement the FromQuery concern to provide their own custom query size.",-1),J={href:"/3.1/exports/queued.html#custom-query-size",target:"_blank",rel:"noopener noreferrer"},K=e("td",null,[e("code",null,"Maatwebsite\\Excel\\Concerns\\WithCustomStartCell")],-1),X=e("td",null,"Allows to specify a custom start cell. Do note that this is only supported for FromCollection exports.",-1),Y={href:"/3.1/exports/collection.html#custom-start-cell",target:"_blank",rel:"noopener noreferrer"},Z=e("td",null,[e("code",null,"Maatwebsite\\Excel\\Concerns\\WithCustomValueBinder")],-1),$=e("td",null,"Allows to specify a custom value binder.",-1),ee={href:"/3.1/exports/column-formatting.html#value-binders",target:"_blank",rel:"noopener noreferrer"},te=e("td",null,[e("code",null,"Maatwebsite\\Excel\\Concerns\\WithDrawings")],-1),ne=e("td",null,"Allows to run one or multiple PhpSpreadsheet (Base)Drawing instances.",-1),le={href:"/3.1/exports/drawings.html",target:"_blank",rel:"noopener noreferrer"},oe=e("td",null,[e("code",null,"Maatwebsite\\Excel\\Concerns\\WithEvents")],-1),re=e("td",null,"Register events to hook into the PhpSpreadsheet process.",-1),se={href:"/3.1/exports/extending.html#events",target:"_blank",rel:"noopener noreferrer"},ae=e("td",null,[e("code",null,"Maatwebsite\\Excel\\Concerns\\WithHeadings")],-1),ie=e("td",null,"Prepend a heading row.",-1),ce={href:"/3.1/exports/mapping.html#adding-a-heading-row",target:"_blank",rel:"noopener noreferrer"},de=e("td",null,[e("code",null,"Maatwebsite\\Excel\\Concerns\\WithMapping")],-1),he=e("td",null,"Format the row before it's written to the file.",-1),ue={href:"/3.1/exports/mapping.html",target:"_blank",rel:"noopener noreferrer"},_e=e("td",null,[e("code",null,"Maatwebsite\\Excel\\Concerns\\WithMultipleSheets")],-1),pe=e("td",null,"Enable multi-sheet support. Each sheet can have its own concerns (except this one).",-1),me={href:"/3.1/exports/multiple-sheets.html",target:"_blank",rel:"noopener noreferrer"},fe=e("tr",null,[e("td",null,[e("code",null,"Maatwebsite\\Excel\\Concerns\\WithPreCalculateFormulas")]),e("td",null,"Forces PhpSpreadsheet to recalculate all formulae in a workbook when saving, so that the pre-calculated values are immediately available to MS Excel or other office spreadsheet viewer when opening the file."),e("td")],-1),xe=e("td",null,[e("code",null,"Maatwebsite\\Excel\\Concerns\\WithProperties")],-1),be=e("td",null,"Allows setting properties on the document.",-1),ge={href:"/3.1/exports/settings.html#properties",target:"_blank",rel:"noopener noreferrer"},we=e("td",null,[e("code",null,"Maatwebsite\\Excel\\Concerns\\WithStrictNullComparison")],-1),Ce=e("td",null,"Uses strict comparisons when testing cells for null value.",-1),Ee={href:"/3.1/exports/collection.html#strict-null-comparisons",target:"_blank",rel:"noopener noreferrer"},ke=e("td",null,[e("code",null,"Maatwebsite\\Excel\\Concerns\\WithStyles")],-1),Me=e("td",null,"Allows setting styles on worksheets.",-1),ve={href:"/3.1/exports/column-formatting.html#styling",target:"_blank",rel:"noopener noreferrer"},Se=e("td",null,[e("code",null,"Maatwebsite\\Excel\\Concerns\\WithTitle")],-1),ye=e("td",null,"Set the Workbook or Worksheet title.",-1),We={href:"/3.1/exports/multiple-sheets.html",target:"_blank",rel:"noopener noreferrer"},Ae=e("h3",{id:"traits",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#traits","aria-hidden":"true"},"#"),t(" Traits")],-1),Fe=e("thead",null,[e("tr",null,[e("th",null,"Trait"),e("th",null,"Explanation"),e("th",null,"Documentation")])],-1),ze=e("td",null,[e("code",null,"Maatwebsite\\Excel\\Concerns\\Exportable")],-1),Pe=e("td",null,"Add download/store abilities right on the export class itself.",-1),Ve={href:"/3.1/exports/exportables.html",target:"_blank",rel:"noopener noreferrer"},Be=e("td",null,[e("code",null,"Maatwebsite\\Excel\\Concerns\\RegistersEventListeners")],-1),Ue=e("td",null,"Auto-register the available event listeners.",-1),qe={href:"/3.1/exports/extending.html#auto-register-event-listeners",target:"_blank",rel:"noopener noreferrer"};function De(Qe,Te){const n=r("ExternalLinkIcon");return s(),a("div",null,[c,e("table",null,[d,e("tbody",null,[e("tr",null,[h,u,e("td",null,[e("a",_,[t("Exporting collections"),l(n)])])]),e("tr",null,[p,m,e("td",null,[e("a",f,[t("Exporting collections"),l(n)])])]),e("tr",null,[x,b,e("td",null,[e("a",g,[t("From Generator"),l(n)])])]),w,e("tr",null,[C,E,e("td",null,[e("a",k,[t("From Query"),l(n)])])]),e("tr",null,[M,v,e("td",null,[e("a",S,[t("From View"),l(n)])])]),e("tr",null,[y,W,e("td",null,[e("a",A,[t("References to other sheets"),l(n)])])]),e("tr",null,[F,z,e("td",null,[e("a",P,[t("Auto size"),l(n)])])]),e("tr",null,[V,B,e("td",null,[e("a",U,[t("Charts"),l(n)])])]),e("tr",null,[q,D,e("td",null,[e("a",Q,[t("Formatting columns"),l(n)])])]),e("tr",null,[T,I,e("td",null,[e("a",L,[t("Column widths"),l(n)])])]),N,e("tr",null,[R,G,e("td",null,[e("a",H,[t("Custom CSV Settings"),l(n)])])]),e("tr",null,[O,j,e("td",null,[e("a",J,[t("Custom Query Size"),l(n)])])]),e("tr",null,[K,X,e("td",null,[e("a",Y,[t("Custom start cell"),l(n)])])]),e("tr",null,[Z,$,e("td",null,[e("a",ee,[t("Custom Value Binder"),l(n)])])]),e("tr",null,[te,ne,e("td",null,[e("a",le,[t("Drawings"),l(n)])])]),e("tr",null,[oe,re,e("td",null,[e("a",se,[t("Events"),l(n)])])]),e("tr",null,[ae,ie,e("td",null,[e("a",ce,[t("Adding a heading row"),l(n)])])]),e("tr",null,[de,he,e("td",null,[e("a",ue,[t("Mapping data"),l(n)])])]),e("tr",null,[_e,pe,e("td",null,[e("a",me,[t("Multiple Sheets"),l(n)])])]),fe,e("tr",null,[xe,be,e("td",null,[e("a",ge,[t("Properties"),l(n)])])]),e("tr",null,[we,Ce,e("td",null,[e("a",Ee,[t("Strict null comparisons"),l(n)])])]),e("tr",null,[ke,Me,e("td",null,[e("a",ve,[t("Styles"),l(n)])])]),e("tr",null,[Se,ye,e("td",null,[e("a",We,[t("Multiple Sheets"),l(n)])])])])]),Ae,e("table",null,[Fe,e("tbody",null,[e("tr",null,[ze,Pe,e("td",null,[e("a",Ve,[t("Exportables"),l(n)])])]),e("tr",null,[Be,Ue,e("td",null,[e("a",qe,[t("Auto register event listeners"),l(n)])])])])])])}const Ne=o(i,[["render",De],["__file","concerns.html.vue"]]);export{Ne as default};
