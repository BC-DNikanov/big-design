(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{GMks:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Checkbox/CheckboxPage",function(){return t("o6rH")}])},o6rH:function(e,n,t){"use strict";t.r(n);var a=t("d2TB"),o=t("ERkP"),c=t.n(o),r=t("lIm4"),l=t("GsAr"),i=t("pneb"),s=t("nFRM"),d=c.a.createElement,h=[{name:"label",types:"ReactChild",required:!0,description:"Label to display next to a <Code>Checkbox</Code> component."},{name:"hiddenLabel",types:"boolean",description:d(c.a.Fragment,null,"Renders ",d(r.a,{primary:!0},"Checkbox")," with a visually hidden label, retains accessibility for screen readers.")},{name:"isIndeterminate",types:"boolean",description:d(c.a.Fragment,null,"Styles and sets the checkbox into a indeterminate state. Note that the ",d(r.a,{primary:!0},"checked")," prop will take precedence over ",d(r.a,{primary:!0},"isIndeterminate"),".")}],u=function(e){return d(c.a.Fragment,null,d(a.Text,null,"Supports all native ",d(r.a,null,"<input />")," element attributes."),d(s.a,Object(i.a)({title:"Checkbox",propList:h},e)))},p=c.a.createElement;n.default=function(){return p(c.a.Fragment,null,p(a.H0,null,"Checkbox"),p(a.Text,null,"Checkboxes are a stylized ",p(r.a,null,'input[type="checkbox"]')," with controllable checked/unchecked states."," ",p(a.Link,{href:"https://design.bigcommerce.com/components/checkboxes",target:"_blank"},"Checkbox Design Guidelines"),"."),p(l.a,null,"function Example() {\n  const [checked, setChecked] = React.useState(false);\n  const handleChange = () => setChecked(!checked);\n\n  return (\n    <Form>\n      <Form.Group>\n        <Checkbox label={checked ? 'Checked' : 'Unchecked'} checked={checked} onChange={handleChange} />\n      </Form.Group>\n    </Form>\n  );\n}"),p(a.H1,null,"API"),p(u,null),p(a.H1,null,"Indeterminate"),p(a.Text,null,"Checkboxes support ",p(r.a,{primary:!0},"isIndeterminate")," passed as a prop to show a combined state of partially selected checkboxes."),p(l.a,null,'<Form>\n  <Form.Group>\n    <Checkbox label="Indeterminate" isIndeterminate />\n  </Form.Group>\n</Form>'))}}},[["GMks",0,1]]]);