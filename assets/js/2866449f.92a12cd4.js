"use strict";(self.webpackChunkscreeb_docs=self.webpackChunkscreeb_docs||[]).push([[1428],{6126:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>u,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var s=r(4848),t=r(8453);const i={sidebar_position:3},o="Group assignation",a={id:"group-assignation",title:"Group assignation",description:"You can assign groups to your users, along with properties describing the group.",source:"@site/docs/sdk-flutter/group-assignation.md",sourceDirName:".",slug:"/group-assignation",permalink:"/sdk-flutter/group-assignation",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"docSidebar",previous:{title:"Identity",permalink:"/sdk-flutter/identity"},next:{title:"Event tracking",permalink:"/sdk-flutter/event-tracking"}},u={},c=[{value:"Default group type",id:"default-group-type",level:3},{value:"Group name vs group id",id:"group-name-vs-group-id",level:3},{value:"Unassign group",id:"unassign-group",level:3},{value:"Attributes",id:"attributes",level:2}];function l(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"group-assignation",children:"Group assignation"}),"\n",(0,s.jsx)(n.p,{children:"You can assign groups to your users, along with properties describing the group."}),"\n",(0,s.jsx)("u",{children:"Requirements:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Group type and group name must be less than 128 characters long."}),"\n",(0,s.jsx)(n.li,{children:"Authorized characters are alphanumeric (uppercase included) and you can insert the following special characters: '-', '_', '.', ' ' (space), '/', and ':'."}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-dart",children:'PluginScreeb.assignGroup("company", "Apple");\nPluginScreeb.assignGroup("plan", "Growth");\n'})}),"\n",(0,s.jsx)(n.h3,{id:"default-group-type",children:"Default group type"}),"\n",(0,s.jsx)(n.p,{children:"Group type can be omitted:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-dart",children:'PluginScreeb.assignGroup(null, "cohort-42");\n'})}),"\n",(0,s.jsx)(n.p,{children:"From the Screeb platform, to customize the conditions the surveys are displayed for a visitor, you can apply custom targeting rules using group membership."}),"\n",(0,s.jsx)(n.h3,{id:"group-name-vs-group-id",children:"Group name vs group id"}),"\n",(0,s.jsx)(n.p,{children:"It is recommended to identify groups by using an immutable group id instead of a group name."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-dart",children:'PluginScreeb.assignGroup("company", "nuR4eecu", { name: "Apple" });\n'})}),"\n",(0,s.jsx)(n.h3,{id:"unassign-group",children:"Unassign group"}),"\n",(0,s.jsx)(n.p,{children:"At any time, you can unassign a user from a segment;"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-dart",children:'PluginScreeb.unassignGroup(null, "cohort-42");\n'})}),"\n",(0,s.jsx)(n.h2,{id:"attributes",children:"Attributes"}),"\n",(0,s.jsx)(n.p,{children:"In order to bring context to your event handling, some properties can be added to the event."}),"\n",(0,s.jsx)("u",{children:"Requirements:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Property names must be limited to 128 characters"}),"\n",(0,s.jsx)(n.li,{children:"No more than 1000 attributes"}),"\n",(0,s.jsx)(n.li,{children:"Supported types for values: string, number, boolean and Date."}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-dart",children:'PluginScreeb.assignGroup("company", "nuR4eecu", {\n    name: "Apple",\n    employes: "100.000+",\n})\n'})})]})}function p(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>a});var s=r(6540);const t={},i=s.createContext(t);function o(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);