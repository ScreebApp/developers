"use strict";(self.webpackChunkscreeb_docs=self.webpackChunkscreeb_docs||[]).push([[8745],{887:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>l,frontMatter:()=>a,metadata:()=>o,toc:()=>u});var t=r(4848),s=r(8453);const a={sidebar_position:1},i="Feature Flagging",o={id:"sdk-js/feature-flagging",title:"Feature Flagging",description:"I paid for 100k MAU, but my application has 1m MAU",source:"@site/docs/private/sdk-js/feature-flagging.md",sourceDirName:"sdk-js",slug:"/sdk-js/feature-flagging",permalink:"/private/sdk-js/feature-flagging",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1}},c={},u=[{value:"I paid for 100k MAU, but my application has 1m MAU",id:"i-paid-for-100k-mau-but-my-application-has-1m-mau",level:2}];function h(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"feature-flagging",children:"Feature Flagging"}),"\n",(0,t.jsx)(n.h2,{id:"i-paid-for-100k-mau-but-my-application-has-1m-mau",children:"I paid for 100k MAU, but my application has 1m MAU"}),"\n",(0,t.jsx)(n.p,{children:"For large B2C applications, your Screeb quota may be consumed very fast. Until the end of the current month, you will be able to survey only the first XXX MAU allowed by your quota."}),"\n",(0,t.jsx)(n.p,{children:"In order to distribute your quota throughout the month, please use the following code:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:'function isScreebEnabledForCurrentUser(userId: string, country: string): boolean {\n  // Screeb will be loaded for 100% of japan users\n  if (country === "ja") {\n    return true;\n  }\n\n  const hash = cyrb53Hash(userId, 42);\n\n  // Screeb will be loaded for 10% of the rest of the audience.\n  return hash % 10 === 0;\n}\n\n// https://stackoverflow.com/questions/7616461/generate-a-hash-from-string-in-javascript\nfunction cyrb53Hash(str: string, seed: number): number {\n  let h1 = 0xdeadbeef ^ seed,\n    h2 = 0x41c6ce57 ^ seed;\n  for (let i = 0, ch; i < str.length; i++) {\n    ch = str.charCodeAt(i);\n    h1 = Math.imul(h1 ^ ch, 2654435761);\n    h2 = Math.imul(h2 ^ ch, 1597334677);\n  }\n\n  h1 =\n    Math.imul(h1 ^ (h1 >>> 16), 2246822507) ^\n    Math.imul(h2 ^ (h2 >>> 13), 3266489909);\n  h2 =\n    Math.imul(h2 ^ (h2 >>> 16), 2246822507) ^\n    Math.imul(h1 ^ (h1 >>> 13), 3266489909);\n\n  return 4294967296 * (2097151 & h2) + (h1 >>> 0);\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"Then for each call to a Screeb command, check that the user is enabled to load Screeb:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"if (isScreebEnabledForUser(\"user-123\",  'us')) {\n  $screeb('init', ...)\n}\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"if (isScreebEnabledForUser(\"user-123\",  'us')) {\n  $screeb('event.track', ...)\n}\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"if (isScreebEnabledForUser(\"user-123\",  'us')) {\n  $screeb('identity.group.assign', ...)\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["To vary your audience every month, please update the ",(0,t.jsx)(n.code,{children:"seed"})," parameter in ",(0,t.jsx)(n.code,{children:"cyrb53Hash"}),". Eg: ",(0,t.jsx)(n.code,{children:"cyrb53Hash(userId, new Date().getMonth())"})]})]})}function l(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>o});var t=r(6540);const s={},a=t.createContext(s);function i(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);