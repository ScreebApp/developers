"use strict";(self.webpackChunkscreeb_docs=self.webpackChunkscreeb_docs||[]).push([[7949],{630:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var i=n(4848),s=n(8453);const r={sidebar_position:2},o="Identity",l={id:"identity",title:"Identity",description:"Set identity",source:"@site/docs/sdk-flutter/identity.md",sourceDirName:".",slug:"/identity",permalink:"/sdk-flutter/identity",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docSidebar",previous:{title:"Install",permalink:"/sdk-flutter/install"},next:{title:"Group assignation",permalink:"/sdk-flutter/group-assignation"}},d={},c=[{value:"Set identity",id:"set-identity",level:2},{value:"Reset current identity",id:"reset-current-identity",level:3},{value:"Attributes",id:"attributes",level:2}];function a(e){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"identity",children:"Identity"}),"\n",(0,i.jsx)(t.h2,{id:"set-identity",children:"Set identity"}),"\n",(0,i.jsxs)(t.p,{children:["When a user is identified in your app, you won't be able to identify who responded to surveys until you call the ",(0,i.jsx)(t.code,{children:"setIdentity"})," command."]}),"\n",(0,i.jsx)(t.p,{children:"Thanks to this, you will be able to track this user over multiple platforms (desktop, mobile, tablet...)."}),"\n",(0,i.jsx)(t.p,{children:"The identifier of your website visitor must be unique and idempotent. User email is good, but can change over time. We recommend that you use the user id."}),"\n",(0,i.jsx)("u",{children:"Requirements:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"The unique visitor id must have a length between 1 to 255 characters."}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-dart",children:'PluginScreeb.setIdentity("<user-id>");\n'})}),"\n",(0,i.jsx)(t.h3,{id:"reset-current-identity",children:"Reset current identity"}),"\n",(0,i.jsxs)(t.p,{children:["When the user logs out, please call the ",(0,i.jsx)(t.code,{children:"resetIdentity"})," command."]}),"\n",(0,i.jsx)(t.p,{children:"This command must be called only once, since it creates a new identity on Screeb side. If you call it on every anonymous view, you won't be able to track visitor navigation and surveys will be sent many times to the same visitor."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-dart",children:"PluginScreeb.resetIdentity()\n"})}),"\n",(0,i.jsx)(t.h2,{id:"attributes",children:"Attributes"}),"\n",(0,i.jsx)(t.p,{children:'Screeb allows tracking some custom data about your website visitors. Those properties can be inserted as "hidden fields" in your surveys or can be used for an advanced targeting rule.'}),"\n",(0,i.jsx)("u",{children:"Requirements:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Property names must be limited to 128 characters"}),"\n",(0,i.jsx)(t.li,{children:"No more than 1000 attributes"}),"\n",(0,i.jsx)(t.li,{children:"Supported types for values: string, number (Int, Long, Double), boolean and Date."}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-dart",children:"// Set visitor properties\nPluginScreeb.setIdentity(\"<user-id>\", <String, dynamic>{\n    'isConnected': true,\n    'age': 27,\n    'company' : 'Screeb',\n    'technology' : 'iOS',\n    'flutterAccount' : true\n});\n\n// Delete visitor property: set values to null\nPluginScreeb.setIdentity(\"<user-id>\", <String, dynamic>{\n    'isConnected': null,\n    'age': null,\n    'company' : null,\n    'technology' : null,\n    'flutterAccount' : null\n});\n"})})]})}function u(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>l});var i=n(6540);const s={},r=i.createContext(s);function o(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);