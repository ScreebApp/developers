"use strict";(self.webpackChunkscreeb_docs=self.webpackChunkscreeb_docs||[]).push([[5122],{8759:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var r=t(4848),s=t(8453);const i={sidebar_position:4},o="Event tracking",c={id:"event-tracking",title:"Event tracking",description:"You can track actions performed by your users, along with properties describing the event.",source:"@site/docs/sdk-ios/event-tracking.md",sourceDirName:".",slug:"/event-tracking",permalink:"/sdk-ios/event-tracking",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"docSidebar",previous:{title:"Group assignation",permalink:"/sdk-ios/group-assignation"},next:{title:"Screen tracking",permalink:"/sdk-ios/screen-tracking"}},a={},d=[{value:"Attributes",id:"attributes",level:2}];function l(e){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"event-tracking",children:"Event tracking"}),"\n",(0,r.jsx)(n.p,{children:"You can track actions performed by your users, along with properties describing the event."}),"\n",(0,r.jsx)("u",{children:"Requirements:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Event names must be less than 128 characters long."}),"\n",(0,r.jsx)(n.li,{children:"Authorized characters are alphanumeric (uppercase included) and you can insert the following special characters: '-' , '_' and ' ' (space)."}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-swift",children:'Screeb.trackEvent(name: "Product removed from cart", trackingEventProperties: [:])\n'})}),"\n",(0,r.jsx)(n.p,{children:"From the Screeb platform, to customize the conditions the surveys are displayed for a visitor, you can apply custom targeting rules using these events: trigger count or last event time."}),"\n",(0,r.jsx)(n.h2,{id:"attributes",children:"Attributes"}),"\n",(0,r.jsx)(n.p,{children:"In order to bring context to your event handling, some properties can be added to the event."}),"\n",(0,r.jsx)("u",{children:"Requirements:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Property names must be limited to 128 characters"}),"\n",(0,r.jsx)(n.li,{children:"No more than 1000 attributes"}),"\n",(0,r.jsx)(n.li,{children:"Supported types for values: string, number (Int, Long, Double), boolean and Date."}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-swift",children:'// trigger custom event\nScreeb.trackEvent(name: "Product added to cart", trackingEventProperties: [\n    "product_name": AnyEncodable("Red bike 2021"),\n    "category": AnyEncodable("sport"),\n    "price": AnyEncodable(12.29),\n    "count": AnyEncodable(1),\n    "delivery_method": AnyEncodable("UPS"),\n    "user_logged": AnyEncodable(false),\n    "added_at": AnyEncodable(Date())\n])\n'})})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>c});var r=t(6540);const s={},i=r.createContext(s);function o(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);