(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{"6wrC":function(e,n,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Pagination/PaginationPage",function(){return a("qIvM")}])},akZe:function(e,n,a){"use strict";a.d(n,"a",function(){return p});var t=a("pneb"),i=a("ERkP"),r=a.n(i),s=a("R5dR"),g=a("nFRM"),m=r.a.createElement,o=[{name:"margin",types:m(s.a,{href:"/Margin/MarginPage",as:"/margin"},"Margin"),description:"Determines the margin to be applied."},{name:"marginTop",types:m(s.a,{href:"/Margin/MarginPage",as:"/margin"},"Margin"),description:"Determines the top margin to be applied."},{name:"marginRight",types:m(s.a,{href:"/Margin/MarginPage",as:"/margin"},"Margin"),description:"Determines the right margin to be applied."},{name:"marginBottom",types:m(s.a,{href:"/Margin/MarginPage",as:"/margin"},"Margin"),description:"Determines the bottom margin to be applied."},{name:"marginLeft",types:m(s.a,{href:"/Margin/MarginPage",as:"/margin"},"Margin"),description:"Determines the left margin to be applied."},{name:"marginVertical",types:m(s.a,{href:"/Margin/MarginPage",as:"/margin"},"Margin"),description:"Determines the top and bottom margin to be applied."},{name:"marginHorizontal",types:m(s.a,{href:"/Margin/MarginPage",as:"/margin"},"Margin"),description:"Determines the left and right margin to be applied."}],p=function(e){return m(g.a,Object(t.a)({title:"Margin",propList:o},e))}},qIvM:function(e,n,a){"use strict";a.r(n);var t=a("d2TB"),i=a("ERkP"),r=a.n(i),s=a("GsAr"),g=a("pneb"),m=a("nFRM"),o=r.a.createElement,p=[{name:"itemsPerPage",types:"number",required:!0,description:"Indicates how many items are displayed per page."},{name:"currentPage",types:"number",required:!0,description:"Indicates the page currently/initially displayed."},{name:"totalItems",types:"number",required:!0,description:"Indicates how many items in total will be displayed."},{name:"itemsPerPageOptions",types:"number[]",required:!0,description:"Indicates options for per-page ranges."},{name:"onPageChange",types:"(page: number) => void",required:!0,description:"Function that will be called when a navigation arrow is clicked."},{name:"onItemsPerPageChange",types:"(range: number) => void",required:!0,description:"Function that will be called when a new per-page range is selected."}],c=function(e){return o(m.a,Object(g.a)({title:"Pagination",propList:p},e))},l=a("akZe"),u=r.a.createElement;n.default=function(){return u(r.a.Fragment,null,u(t.H0,null,"Pagination"),u(t.Text,null,"Pagination allows for navigation through pages of content."," "),u(s.a,null,"function ExampleList() {\n  const [items] = React.useState(['Item1', 'Item2', 'Item3', 'Item 4', 'Item 5']);\n  const [ranges] = React.useState([2, 3, 4]);\n  const [range, setRange] = React.useState(ranges[0]);\n  const [page, setPage] = React.useState(1);\n  const [currentItems, setCurrentItems] = React.useState(['']);\n\n  const onItemsPerPageChange = newRange => {\n    setPage(1);\n    setRange(newRange);\n  };\n\n  React.useEffect(() => {\n    const maxItems = page * range;\n    const lastItem = Math.min(maxItems, items.length);\n    const firstItem = Math.max(0, maxItems - range);\n\n    setCurrentItems(items.slice(firstItem, lastItem));\n  }, [page, items, range]);\n\n  return (\n    <>\n      <Pagination\n        currentPage={page}\n        itemsPerPage={range}\n        itemsPerPageOptions={ranges}\n        totalItems={items.length}\n        onPageChange={newPage => setPage(newPage)}\n        onItemsPerPageChange={onItemsPerPageChange}\n      />\n      <ul>\n        {currentItems.map(item => (\n          <li key={item}>{item}</li>\n        ))}\n      </ul>\n    </>\n  );\n}"),u(t.H1,null,"API"),u(c,null),u(t.H2,null,"Inherited Props"),u(l.a,{collapsible:!0}))}}},[["6wrC",0,1]]]);