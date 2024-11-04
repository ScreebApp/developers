"use strict";(self.webpackChunkscreeb_docs=self.webpackChunkscreeb_docs||[]).push([[1865],{7676:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>d,toc:()=>a});var r=t(4848),o=t(8453);const s={sidebar_position:10},i="Troubleshooting",d={id:"troubleshooting",title:"Troubleshooting",description:"Check Android SDK is loaded correctly",source:"@site/docs/sdk-android/troubleshooting.md",sourceDirName:".",slug:"/troubleshooting",permalink:"/sdk-android/troubleshooting",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"doceSidebar",previous:{title:"Reference",permalink:"/sdk-android/reference"}},c={},a=[{value:"Check Android SDK is loaded correctly",id:"check-android-sdk-is-loaded-correctly",level:2},{value:"Debug targeting rules",id:"debug-targeting-rules",level:2}];function l(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"troubleshooting",children:"Troubleshooting"})}),"\n",(0,r.jsx)(n.h2,{id:"check-android-sdk-is-loaded-correctly",children:"Check Android SDK is loaded correctly"}),"\n",(0,r.jsxs)(n.p,{children:["You can use the ",(0,r.jsx)(n.code,{children:"Screeb.debug()"})," command in your code."]}),"\n",(0,r.jsx)(n.p,{children:"You will get contextual information in the debugging log about the running user session:"}),"\n",(0,r.jsx)("img",{width:"594",alt:"Capture d\u2019e\u0301cran 2023-02-08 a\u0300 15 54 43",src:"https://user-images.githubusercontent.com/80167759/217565520-0d6727e7-e178-492d-ba26-b69302b60861.png"}),"\n",(0,r.jsxs)(n.p,{children:["\u2139\ufe0f Output is printed with ",(0,r.jsx)(n.code,{children:"info"})," log level."]}),"\n",(0,r.jsx)(n.h2,{id:"debug-targeting-rules",children:"Debug targeting rules"}),"\n",(0,r.jsx)(n.p,{children:"Since the targeting engine built by Screeb runs in the background, you may not understand which rules prevent your survey from being displayed to a user."}),"\n",(0,r.jsxs)(n.p,{children:["You can use the ",(0,r.jsx)(n.code,{children:"Screeb.debugTargeting()"})," command in your code."]}),"\n",(0,r.jsx)(n.p,{children:"You will get a list of available surveys and the associated targeting rules:"}),"\n",(0,r.jsx)("img",{width:"594",alt:"Capture d\u2019e\u0301cran 2023-02-08 a\u0300 15 54 20",src:"https://user-images.githubusercontent.com/80167759/217565787-49ef0864-0ef1-4e28-8cd4-0f8999318a84.png"}),"\n",(0,r.jsx)(n.p,{children:"The rules with a green dot \ud83d\udfe2 are the ones that have been validated for this user. The rules with a red dot \ud83d\udd34 are not validated and may be the reason why your survey is not displayed."}),"\n",(0,r.jsxs)(n.p,{children:["\u2139\ufe0f Output is printed with ",(0,r.jsx)(n.code,{children:"info"})," log level."]})]})}function u(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>d});var r=t(6540);const o={},s=r.createContext(o);function i(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);