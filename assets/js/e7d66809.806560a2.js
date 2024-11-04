"use strict";(self.webpackChunkscreeb_docs=self.webpackChunkscreeb_docs||[]).push([[7074],{1916:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var r=n(4848),s=n(8453);const i={sidebar_position:4},a="Event tracking",c={id:"event-tracking",title:"Event tracking",description:"You can track actions performed by your users, along with properties describing the event.",source:"@site/docs/sdk-react-native/event-tracking.md",sourceDirName:".",slug:"/event-tracking",permalink:"/sdk-react-native/event-tracking",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"docSidebar",previous:{title:"Group assignation",permalink:"/sdk-react-native/group-assignation"},next:{title:"Screen tracking",permalink:"/sdk-react-native/screen-tracking"}},o={},d=[{value:"Attributes",id:"attributes",level:2}];function l(e){const t={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"event-tracking",children:"Event tracking"})}),"\n",(0,r.jsx)(t.p,{children:"You can track actions performed by your users, along with properties describing the event."}),"\n",(0,r.jsx)("u",{children:"Requirements:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Event names must be less than 128 characters long."}),"\n",(0,r.jsx)(t.li,{children:"Authorized characters are alphanumeric (uppercase included) and you can insert the following special characters: '-', '_', '.', ' ' (space), '/', and ':'."}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:'import { trackEvent } from "@screeb/react-native";\n\ntrackEvent("Product removed from cart");\n'})}),"\n",(0,r.jsx)(t.p,{children:"From the Screeb platform, to customize the conditions the surveys are displayed for a visitor, you can apply custom targeting rules using these events: trigger count or last event time."}),"\n",(0,r.jsx)(t.h2,{id:"attributes",children:"Attributes"}),"\n",(0,r.jsx)(t.p,{children:"In order to bring context to your event handling, some properties can be added to the event."}),"\n",(0,r.jsx)("u",{children:"Requirements:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Property names must be limited to 128 characters"}),"\n",(0,r.jsx)(t.li,{children:"No more than 1000 attributes"}),"\n",(0,r.jsx)(t.li,{children:"Supported types for values: string, number (Int, Long, Double), boolean and Date."}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:'import { trackEvent } from "@screeb/react-native";\n\n// trigger custom event\ntrackEvent("Product added to cart", {\n    product_name: "Red bike 2021",\n    category: "sport",\n    price: 12.29,\n    count: 1,\n    delivery_method: "UPS",\n    user_logged: false,\n    added_at: new Date(),\n})\n'})})]})}function u(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>c});var r=n(6540);const s={},i=r.createContext(s);function a(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);