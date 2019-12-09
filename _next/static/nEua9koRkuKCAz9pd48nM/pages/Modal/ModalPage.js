(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{KL3r:function(e,n,t){"use strict";t.r(n);var a=t("d2TB"),o=t("ERkP"),i=t.n(o),s=t("GsAr"),l=t("lIm4"),r=t("pneb"),u=t("R5dR"),c=t("nFRM"),p=i.a.createElement,d=[{name:"actions",types:"object[]",description:p(i.a.Fragment,null,"Accepts an array of objects with ",p(u.a,{href:"/button"},"Button")," props and an additional"," ",p(l.a,null,"text")," prop. See example for usage.")},{name:"backdrop",types:"boolean",defaultValue:"true",description:"Determines if the backdrop is shown."},{name:"closeOnClickOutside",types:"boolean",defaultValue:"false",description:p(i.a.Fragment,null,"Controls whether ",p(l.a,null,"onClose")," is called when clicking outside of the modal.")},{name:"closeOnEscKey",types:"boolean",defaultValue:"true",description:p(i.a.Fragment,null,"Controls whether ",p(l.a,null,"onClose")," is called when pressing the ESC key.")},{name:"header",types:"string",description:"Sets visible text that describes the content of the modal."},{name:"isOpen",types:"boolean",required:!0,description:"Determines if the modal/dialog is open."},{name:"onClose",types:"() => void",required:!0,description:"Function that will be called on close events."},{name:"variant",types:["modal","dialog"],defaultValue:"modal",description:"Determines the modal variant."}],m=function(e){return p(c.a,Object(r.a)({title:"Modal",propList:d},e))},f=i.a.createElement;n.default=function(){return f(i.a.Fragment,null,f(a.H0,null,"Modal"),f(a.Text,null,"A modal appears as a layer on top of the primary interface. Modals disrupt users from interacting with the page until they complete a specific task."," ",f(a.Link,{href:"https://design.bigcommerce.com/components/modals",target:"_blank"},"Modals Design Guidelines"),"."),f(s.a,null,"function Example() {\n  const [isOpen, setIsOpen] = React.useState(false);\n\n  return (\n    <>\n      <Button onClick={() => setIsOpen(true)}>Open Modal</Button>\n\n      <Modal\n        actions={[\n          { text: 'Cancel', variant: 'subtle', onClick: () => setIsOpen(false) },\n          { text: 'Apply', onClick: () => setIsOpen(false) },\n        ]}\n        header=\"Modal Title\"\n        isOpen={isOpen}\n        onClose={() => setIsOpen(false)}\n        closeOnEscKey={true}\n        closeOnClickOutside={false}\n      >\n        <Text>\n          Ea tempor sunt amet labore proident dolor proident commodo in exercitation ea nulla sunt pariatur. Nulla\n          sunt ipsum do eu consectetur exercitation occaecat labore aliqua. Aute elit occaecat esse ea fugiat\n          esse. Reprehenderit sunt ea ea mollit commodo tempor amet fugiat.\n        </Text>\n        <Text>\n          Esse ipsum est consectetur nulla aute deserunt. Anim sint nisi consequat officia adipisicing irure.\n          Nulla ea reprehenderit elit eu nostrud sunt veniam dolore ex occaecat qui. Commodo ullamco ut sint dolor\n          quis cillum in et enim culpa esse exercitation ad. Eiusmod adipisicing nisi culpa esse laborum cupidatat\n          ad pariatur proident. Consectetur ex sint ullamco non ex.\n        </Text>\n      </Modal>\n    </>\n  );\n}"),f(a.H1,null,"Dialog"),f(a.Text,null,"Setting the variant prop to ",f(l.a,{primary:!0},"dialog")," results in a simplified version of a Modal. The purpose of a dialog is to act as a safety net for a user attempting a destructive action."," ",f(a.Link,{href:"https://design.bigcommerce.com/components/modals-confirmation",target:"_blank"},"Modals\u2013Confirmation Design Guidelines"),"."),f(s.a,null,"function Example() {\n  const [isOpen, setIsOpen] = React.useState(false);\n\n  return (\n    <>\n      <Button onClick={() => setIsOpen(true)}>Open Dialog</Button>\n\n      <Modal\n        actions={[\n          { text: 'Cancel', variant: 'subtle', onClick: () => setIsOpen(false) },\n          { text: 'Apply', onClick: () => setIsOpen(false) },\n        ]}\n        header=\"Dialog Title\"\n        isOpen={isOpen}\n        onClose={() => setIsOpen(false)}\n        closeOnEscKey={true}\n        closeOnClickOutside={false}\n        variant=\"dialog\"\n      >\n        <Text>\n          Ea tempor sunt amet labore proident dolor proident commodo in exercitation ea nulla sunt pariatur.\n        </Text>\n      </Modal>\n    </>\n  );\n}"),f(a.H1,null,"API"),f(m,null))}},ftxc:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Modal/ModalPage",function(){return t("KL3r")}])}},[["ftxc",0,1]]]);