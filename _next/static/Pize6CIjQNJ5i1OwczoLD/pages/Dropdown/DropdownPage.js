(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"2Jkj":function(n,t,e){"use strict";e.r(t);var o=e("d2TB"),i=e("ERkP"),a=e.n(i),r=e("GsAr"),l=e("R5dR"),p=e("lIm4"),c=e("pneb"),u=e("nFRM"),s=a.a.createElement,d=[{name:"maxHeight",types:"number",defaultValue:"250",description:"Sets the max-height of the dropdown."},{name:"placement",types:["auto","auto-end","auto-start","bottom","bottom-end","bottom-start","left","left-end","left-start","right","right-end","right-start","top","top-end","top-start"],defaultValue:"bottom-start",description:"Sets the placement of the Dropdown relative to the anchor."},{name:"options",types:"Array<DropdownItem | DropdownLinkItem | DropdownOptionGroup>",description:s(a.a.Fragment,null,"Accepts an array of ",s(p.a,null,"DropdownItems"),", ",s(p.a,null,"DropdownLinkItems"),", and"," ",s(p.a,null,"DropdownOptionGroups"),". See example for usage.")},{name:"trigger",types:"ReactElement",required:!0,description:"Element used as anchor."}],m=[{name:"actionType",types:["normal","destructive"],defaultValue:"normal",description:"Indicates whether your item's action is of normal or destructive nature."},{name:"content",types:"string",required:!0,description:"Sets the text content of the DropdownItem."},{name:"disabled",types:"boolean",description:"Sets the item to disabled."},{name:"icon",types:s(l.a,{href:"/Icons/IconsPage",as:"/icons"},"Icon"),description:s(a.a.Fragment,null,"Pass in an"," ",s(l.a,{href:"/Icons/IconsPage",as:"/icons"},"Icon")," ","component to display to the left of the text.")},{name:"onClick",types:"(item: DropdownItem): void",description:"Returns the item object."},{name:"tooltip",types:"string",description:s(a.a.Fragment,null,"Adds tooltip for disabled item. Default placement is set to ",s(p.a,{highlight:!1},"right"),".")},{name:"type",types:"'string'",defaultValue:"'string'",description:"Type of the item."},{name:"value",types:"any",description:"Stored value of the item."}],g=[{name:"actionType",types:["normal","destructive"],defaultValue:"normal",description:"Indicates whether your item's action is of normal or destructive nature."},{name:"content",types:"string",required:!0,description:"Sets the text content of the DropdownLinkItem."},{name:"disabled",types:"boolean",description:"Sets the item to disabled."},{name:"icon",types:s(l.a,{href:"/Icons/IconsPage",as:"/icons"},"Icon"),description:s(a.a.Fragment,null,"Pass in an"," ",s(l.a,{href:"/Icons/IconsPage",as:"/icons"},"Icon")," ","component to display to the left of the text.")},{name:"tooltip",types:"{ message: string, placement?: 'left' | 'right' }",description:"Adds tooltip for disabled item. Placement is optional, if not passed - 'left' is set."},{name:"type",types:"'link'",required:!0,description:s(a.a.Fragment,null,"Wraps the ",s(p.a,null,"content")," in a ",s(l.a,{href:"/link"},"Link")," component.")},{name:"url",types:"string",required:!0,description:"Valid URL of a linked resource."},{name:"target",types:"'_blank'",description:"Indicates where to display the linked resource."},{name:"onClick",types:"(item: DropdownLinkItem): void",description:"Returns the item object."}],h=[{name:"label",types:"string",description:"Sets the label for the group."},{name:"options",types:"Array<DropdownItem | DropdownLinkItem>",description:s(a.a.Fragment,null,"Accepts an array of ",s(p.a,null,"DropdownItems")," and ",s(p.a,null,"DropdownLinkItems"),". See example for usage.")}],v=function(n){return s(u.a,Object(c.a)({title:"Dropdown",propList:d},n))},y=function(n){return s(u.a,Object(c.a)({title:"Dropdown[Item]",propList:m},n))},O=function(n){return s(u.a,Object(c.a)({title:"Dropdown[LinkItem]",propList:g},n))},w=function(n){return s(u.a,Object(c.a)({title:"Dropdown[OptionGroup]",propList:h},n))},f=a.a.createElement;t.default=function(){return f(a.a.Fragment,null,f(o.H0,null,"Dropdown"),f(o.Text,null,"Dropdowns are toggleable, contextual overlays for displaying lists."," ",f(o.Link,{href:"https://design.bigcommerce.com/components/dropdown",target:"_blank"},"Dropdown Design Guidelines"),"."),f(r.a,null,"<Dropdown\n  maxHeight={250}\n  options={[\n    { content: 'Edit', onClick: item => item, icon: <EditIcon />, value: 'edit' },\n    {\n      content: 'Duplicate',\n      onClick: item => item,\n      value: 'duplicate',\n      icon: <FileCopyIcon />,\n    },\n    {\n      content: 'Copy',\n      onClick: item => item,\n      value: 'copy',\n      icon: <AssignmentIcon />,\n      disabled: true,\n      tooltip: 'You cannot copy this item...',\n    },\n    {\n      content: 'Delete',\n      onClick: item => item,\n      value: 'delete',\n      icon: <DeleteIcon />,\n      actionType: 'destructive',\n    },\n    {\n      content: 'Link',\n      icon: <OpenInNewIcon />,\n      type: 'link',\n      url: '#',\n    },\n  ]}\n  placement=\"bottom-start\"\n  trigger={<Button>Open Menu</Button>}\n/>"),f(o.H1,null,"API"),f(v,null),f(y,null),f(O,null),f(w,null),f(o.H1,null,"Examples"),f(o.H2,null,"Links"),f(o.Text,null,"A Dropdown can render a list of ",f(l.a,{href:"/link"},"Links")," if it receives an object of type"," ",f(p.a,null,"LinkItem"),"."),f(r.a,null,"<Dropdown\n  options={[\n    { content: 'Option', type: 'link', url: '#' },\n    { content: 'Option', type: 'link', url: '#' },\n    { content: 'Option', type: 'link', url: '#' },\n  ]}\n  trigger={<Button>Button</Button>}\n/>\n"),f(o.H2,null,"Icons"),f(o.Text,null,"An Item accepts an ",f(l.a,{href:"/icons"},"Icon")," component to render."),f(r.a,null,"\n      <Dropdown\n        options={[\n          { content: 'Option', icon: <EditIcon /> },\n          { content: 'Link', icon: <OpenInNewIcon />, type: 'link', url: '#' },\n        ]}\n        trigger={<Button>Button</Button>}\n      />\n"),f(o.H2,null,"Action Types"),f(o.Text,null,"There are two action types: ",f(p.a,null,"normal")," & ",f(p.a,null,"destructive"),". They are used to indicate the nature of the action when hovering on the item."),f(r.a,null,"<Dropdown\n  options={[\n    { content: 'Save', actionType: 'normal' },\n    { content: 'Delete', actionType: 'destructive' },\n  ]}\n  trigger={<Button>Button</Button>}\n/>"),f(o.H2,null,"Trigger"),f(o.Text,null,"Dropdown can be anchored to any ",f(p.a,null,"ReactElement"),", including all types of"," ",f(l.a,{href:"/button"},"Buttons"),"."),f(r.a,null,"<Grid gridColumns=\"repeat(4, min-content)\">\n  <Dropdown\n    options={[\n      { content: 'Option', value: '1' },\n      { content: 'Option', value: '2' },\n      { content: 'Option', value: '3' },\n    ]}\n    trigger={<Button>Button</Button>}\n  />\n  <Dropdown\n    options={[\n      { content: 'Option', value: '1' },\n      { content: 'Option', value: '2' },\n      { content: 'Option', value: '3' },\n    ]}\n    trigger={<Button actionType=\"destructive\">Button</Button>}\n  />\n\n  <Dropdown\n    options={[\n      { content: 'Option', value: '1' },\n      { content: 'Option', value: '2' },\n      { content: 'Option', value: '3' },\n    ]}\n    trigger={<Button variant=\"secondary\">Button</Button>}\n  />\n\n  <Dropdown\n    options={[\n      { content: 'Option', value: '1' },\n      { content: 'Option', value: '2' },\n      { content: 'Option', value: '3' },\n    ]}\n    trigger={<Button variant=\"subtle\">Button</Button>}\n  />\n</Grid>"),f(o.H2,null,"Placement"),f(o.Text,null,"Dropdown can be anchored in different directions with the ",f(p.a,{primary:!0},"placement")," property. It will automatically find a placement if there's not enough space in the chosen direction."),f(r.a,null,"<Grid gridColumns=\"repeat(4, min-content)\">\n  <Dropdown\n    options={[\n      { content: 'Option', value: '1' },\n      { content: 'Option', value: '2' },\n      { content: 'Option', value: '3' },\n    ]}\n    placement=\"right\"\n    trigger={<Button>Right</Button>}\n  />\n  <Dropdown\n    options={[\n      { content: 'Option', value: '1' },\n      { content: 'Option', value: '2' },\n      { content: 'Option', value: '3' },\n    ]}\n    placement=\"top\"\n    trigger={<Button>Top</Button>}\n  />\n  <Dropdown\n    options={[\n      { content: 'Option', value: '1' },\n      { content: 'Option', value: '2' },\n      { content: 'Option', value: '3' },\n    ]}\n    placement=\"bottom-start\"\n    trigger={<Button>Bottom-Start</Button>}\n  />\n  <Dropdown\n    options={[\n      { content: 'Option', value: '1' },\n      { content: 'Option', value: '2' },\n      { content: 'Option', value: '3' },\n    ]}\n    placement=\"bottom-end\"\n    trigger={<Button>Bottom-End</Button>}\n  />\n</Grid>"),f(o.H2,null,"Max Height"),f(o.Text,null,"Once the content is longer than the max-height, the Dropdown will be scrollable. It is possible to modify the dimension by passing a ",f(p.a,{primary:!0},"maxHeight")," property."),f(r.a,null,"<Grid gridColumns=\"repeat(3, min-content)\">\n  <Dropdown\n    options={[\n      { content: 'Option', value: '1' },\n      { content: 'Option', value: '2' },\n      { content: 'Option', value: '3' },\n      { content: 'Option', value: '4' },\n      { content: 'Option', value: '5' },\n      { content: 'Option', value: '6' },\n      { content: 'Option', value: '7' },\n      { content: 'Option', value: '8' },\n    ]}\n    trigger={<Button>Default</Button>}\n  />\n  <Dropdown\n    options={[\n      { content: 'Option', value: '1' },\n      { content: 'Option', value: '2' },\n      { content: 'Option', value: '3' },\n      { content: 'Option', value: '4' },\n      { content: 'Option', value: '5' },\n      { content: 'Option', value: '6' },\n      { content: 'Option', value: '7' },\n      { content: 'Option', value: '8' },\n    ]}\n    maxHeight={150}\n    trigger={<Button>Smaller</Button>}\n  />\n  <Dropdown\n    options={[\n      { content: 'Option', value: '1' },\n      { content: 'Option', value: '2' },\n      { content: 'Option', value: '3' },\n      { content: 'Option', value: '4' },\n      { content: 'Option', value: '5' },\n      { content: 'Option', value: '6' },\n      { content: 'Option', value: '7' },\n      { content: 'Option', value: '8' },\n    ]}\n    maxHeight={350}\n    trigger={<Button>Longer</Button>}\n  />\n</Grid>"),f(o.H2,null,"Option Groups"),f(o.Text,null,"Create Dropdowns with labeled groupings by passing ",f(p.a,{primary:!0},"DropdownOptionGroup"),"'s to the Dropdown's"," ",f(p.a,{primary:!0},"options")," property."),f(r.a,null,"<Dropdown\n  options={[\n    {\n      label: 'Label 1',\n      options: [{ content: 'Option 1' }, { content: 'Option 2' }, { content: 'Option 3' }],\n    },\n    {\n      label: 'Label 2',\n      options: [{ content: 'Option 4' }, { content: 'Option 5' }, { content: 'Option 6' }],\n    },\n  ]}\n  trigger={<Button>Button</Button>}\n/>"))}},IlL6:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Dropdown/DropdownPage",function(){return e("2Jkj")}])}},[["IlL6",0,1]]]);