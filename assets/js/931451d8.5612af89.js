"use strict";(self.webpackChunkscreeb_docs=self.webpackChunkscreeb_docs||[]).push([[6922],{4132:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>c,metadata:()=>a,toc:()=>l});var t=r(4848),s=r(8453);const c={sidebar_position:5},i="Screen tracking",a={id:"screen-tracking",title:"Screen tracking",description:"You can track screen visited by your users, along with properties describing the screen.",source:"@site/docs/sdk-flutter/screen-tracking.md",sourceDirName:".",slug:"/screen-tracking",permalink:"/sdk-flutter/screen-tracking",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"docSidebar",previous:{title:"Event tracking",permalink:"/sdk-flutter/event-tracking"},next:{title:"Start survey programmatically",permalink:"/sdk-flutter/start-survey-programmatically"}},o={},l=[{value:"Attributes",id:"attributes",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"screen-tracking",children:"Screen tracking"})}),"\n",(0,t.jsx)(n.p,{children:"You can track screen visited by your users, along with properties describing the screen."}),"\n",(0,t.jsx)("u",{children:"Requirements:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Screen names must be less than 128 characters long."}),"\n",(0,t.jsx)(n.li,{children:"Authorized characters are alphanumeric (uppercase included) and you can insert the following special characters: '-', '_', '.', ' ' (space), '/', and ':'."}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-dart",children:'PluginScreeb.trackScreen("MyHomeScreen");\n'})}),"\n",(0,t.jsx)(n.h2,{id:"attributes",children:"Attributes"}),"\n",(0,t.jsx)(n.p,{children:"In order to bring context to your event handling, some properties can be added to the screen."}),"\n",(0,t.jsx)("u",{children:"Requirements:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Property names must be limited to 128 characters"}),"\n",(0,t.jsx)(n.li,{children:"No more than 1000 attributes"}),"\n",(0,t.jsx)(n.li,{children:"Supported types for values: string, number (Int, Long, Double), boolean and Date."}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-dart",children:"// screen tracking with custom properties\nPluginScreeb.trackScreen('MyHomeScreen', {\n    'example-prop1': false,\n    'example-prop2': 29,\n    'example-prop3' : 'iPhone 13',\n});\n"})})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>a});var t=r(6540);const s={},c=t.createContext(s);function i(e){const n=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(c.Provider,{value:n},e.children)}}}]);