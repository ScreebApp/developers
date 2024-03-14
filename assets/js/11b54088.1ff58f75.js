"use strict";(self.webpackChunkscreeb_docs=self.webpackChunkscreeb_docs||[]).push([[1486],{8729:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var s=t(4848),r=t(8453);const a={sidebar_position:5},o="Reelases API",i={id:"releases-api",title:"Reelases API",description:"You can integrate the creation of your releases into your current workflow using the Release API.",source:"@site/docs/api-and-connectors/releases-api.md",sourceDirName:".",slug:"/releases-api",permalink:"/api-and-connectors/releases-api",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"docSidebar",previous:{title:"Stitch v2.0.0",permalink:"/api-and-connectors/stitch-v2.0.0"},next:{title:"Response API",permalink:"/api-and-connectors/response-api"}},l={},c=[{value:"Authorization",id:"authorization",level:2},{value:"Endpoint",id:"endpoint",level:2},{value:"Example",id:"example",level:2},{value:"Support",id:"support",level:2}];function p(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"reelases-api",children:"Reelases API"}),"\n",(0,s.jsx)(n.p,{children:"You can integrate the creation of your releases into your current workflow using the Release API."}),"\n",(0,s.jsx)(n.h2,{id:"authorization",children:"Authorization"}),"\n",(0,s.jsx)(n.p,{children:"To push a new release to your organization, you will need an API Token generated for you. You can find it on the release create form, next to the Submit button."}),"\n",(0,s.jsx)(n.h2,{id:"endpoint",children:"Endpoint"}),"\n",(0,s.jsxs)(n.p,{children:["The releases API is accessible via the following endpoint: ",(0,s.jsx)(n.code,{children:"POST"})," - ",(0,s.jsx)(n.a,{href:"https://api.screeb.app/1.0/release",children:"https://api.screeb.app/1.0/release"})]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"released_at"})," field is optional and will default to the current date."]}),"\n",(0,s.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,s.jsx)(n.p,{children:"Here is an example of a request that creates a release."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'curl -X POST https://api.screeb.app/1.0/release \\\n    -H "Content-Type: application/json" \\\n    -H "Authorization: Bearer my_api_token" \\\n    -d \'{\n        "name": "My release name",\n        "description": "My release description",\n        "version": "1.0",\n        "tags": ["API", "V1"],\n        "released_at": "2023-03-22T15:22:41+00:00"\n    }\'\n'})}),"\n",(0,s.jsx)(n.h2,{id:"support",children:"Support"}),"\n",(0,s.jsxs)(n.p,{children:["If you have any questions or additional requirements, feel free to open an issue or contact ",(0,s.jsx)(n.a,{href:"mailto:samuel@screeb.app",children:"samuel@screeb.app"}),"."]})]})}function d(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>i});var s=t(6540);const r={},a=s.createContext(r);function o(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);