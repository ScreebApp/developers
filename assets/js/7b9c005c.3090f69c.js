"use strict";(self.webpackChunkscreeb_docs=self.webpackChunkscreeb_docs||[]).push([[3696],{2748:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var n=r(4848),o=r(8453),s=r(5164);const i={title:"How Screeb works",description:"Basic Overview of how Screeb is working.",sidebar_position:-1,sidebar_label:"How Screeb works"},a=void 0,c={id:"how-screeb-works",title:"How Screeb works",description:"Basic Overview of how Screeb is working.",source:"@site/docs/sdk-react-native/how-screeb-works.md",sourceDirName:".",slug:"/how-screeb-works",permalink:"/sdk-react-native/how-screeb-works",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:-1,frontMatter:{title:"How Screeb works",description:"Basic Overview of how Screeb is working.",sidebar_position:-1,sidebar_label:"How Screeb works"},sidebar:"docSidebar",previous:{title:"What is Screeb",permalink:"/sdk-react-native/what-is-screeb"},next:{title:"Install",permalink:"/sdk-react-native/install"}},l={},d=[...s.RM];function u(e){return(0,n.jsx)(s.Ay,{components:e.components})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},5164:(e,t,r)=>{r.d(t,{Ay:()=>a,RM:()=>s});var n=r(4848),o=r(8453);const s=[{value:"Overview",id:"overview",level:3},{value:"Sources for collecting data",id:"sources-for-collecting-data",level:2},{value:"How to collect data",id:"how-to-collect-data",level:2},{value:"Using Screeb as a Data Source",id:"using-screeb-as-a-data-source",level:3},{value:"Using external Data Source",id:"using-external-data-source",level:3},{value:"Destination for collected data",id:"destination-for-collected-data",level:2}];function i(e){const t={a:"a",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h3,{id:"overview",children:"Overview"}),"\n",(0,n.jsx)(t.p,{children:"Screeb gather anonymous user data from your product and analyse them to extract valuable information. Screeb can then display surveys or messages to the right users at the right time using its targeting system. Collected feedback will also be analysed and presented into easily readable dashboards, improving the overall Product manager experience."}),"\n",(0,n.jsx)(t.p,{children:"Four types of data can be collected using the Screeb Tag:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"identity"}),": identify user using a unique identifier_id chosen by you."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"properties"}),": associate a property to a user, adding more context."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"events"}),": track user behaviour on your product by collecting event during their navigation."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"groups"}),": Assign or dissociate a user from a group, creating segment of common users"]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"sources-for-collecting-data",children:"Sources for collecting data"}),"\n",(0,n.jsx)(t.p,{children:"You can collect data from your product to Screeb in various way:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Screeb SDK"}),", the main data source recommended for any website product."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Segment"})," can be used as the main data source for Screeb, simplifying the process of installing an additional tool to your product."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Amplitude"})," can also be used as the main data source to populate your users and events base in Screeb, simplifying the process of installing an additional tool yo your product."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Rudderstack"})," can be used as the main data source for Screeb, simplifying the process of installing an additional tool to your product."]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"how-to-collect-data",children:"How to collect data"}),"\n",(0,n.jsx)(t.p,{children:"Depending your data source, you have different ways of collecting data."}),"\n",(0,n.jsx)(t.h3,{id:"using-screeb-as-a-data-source",children:"Using Screeb as a Data Source"}),"\n",(0,n.jsxs)(t.p,{children:["First thing first, you need to install Screeb to your app, wether it's a website or a mobile app.\nPlease follow this article to install Screeb using your preferred method.\nSee ",(0,n.jsx)(t.a,{href:"install",children:"Install Screeb"})]}),"\n",(0,n.jsx)(t.p,{children:"Once Screeb is installed, you can start collecting events and properties."}),"\n",(0,n.jsx)(t.h3,{id:"using-external-data-source",children:"Using external Data Source"}),"\n",(0,n.jsx)(t.p,{children:"When you use external data source, like Amplitude or Segment, data are automatically transmitted from these data source to Screeb."}),"\n",(0,n.jsxs)(t.p,{children:["You just need to install the corresponding integration to your ",(0,n.jsx)(t.strong,{children:"Screeb workspace"}),". See your ",(0,n.jsx)(t.a,{href:"https://admin.screeb.app/org/last/integrations",children:"Workspace Integrations"})]}),"\n",(0,n.jsx)(t.h2,{id:"destination-for-collected-data",children:"Destination for collected data"}),"\n",(0,n.jsx)(t.p,{children:"Screeb offer a large catalog of integration to export your data to the your desired tool."})]})}function a(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(i,{...e})}):i(e)}},8453:(e,t,r)=>{r.d(t,{R:()=>i,x:()=>a});var n=r(6540);const o={},s=n.createContext(o);function i(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);