"use strict";(self.webpackChunkscreeb_docs=self.webpackChunkscreeb_docs||[]).push([[3861],{9348:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var s=n(4848),i=n(8453);const r={sidebar_position:1},a="Install",c={id:"install",title:"Install",description:"How to add the Screeb tag to your website?",source:"@site/docs/sdk-js/install.md",sourceDirName:".",slug:"/install",permalink:"/sdk-js/install",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docSidebar",previous:{title:"Javascript SDK",permalink:"/sdk-js/"},next:{title:"Identity",permalink:"/sdk-js/identity"}},o={},l=[{value:"How to add the Screeb tag to your website?",id:"how-to-add-the-screeb-tag-to-your-website",level:2},{value:"About tag lifecycle",id:"about-tag-lifecycle",level:3},{value:"Next steps",id:"next-steps",level:2},{value:"1- Identify visitors",id:"1--identify-visitors",level:3},{value:"2- Event tracking",id:"2--event-tracking",level:3},{value:"3- Start the survey programmatically",id:"3--start-the-survey-programmatically",level:3}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"install",children:"Install"}),"\n",(0,s.jsx)(t.h2,{id:"how-to-add-the-screeb-tag-to-your-website",children:"How to add the Screeb tag to your website?"}),"\n",(0,s.jsx)(t.p,{children:"First, log in to the Screeb application, then create your first survey."}),"\n",(0,s.jsxs)(t.p,{children:["When your survey is ready to share, we will provide a javascript snippet to copy at the end of your HTML page (before ",(0,s.jsx)(t.code,{children:"</body>"}),")."]}),"\n",(0,s.jsx)(t.p,{children:"Example:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-html",children:"<script type=\"text/javascript\">\n  (function (s,c,r,ee,b) {\n    s['ScreebObject']=r;s[r]=s[r]||function(){var d=arguments;return new Promise(function(a,b){(s[r].q=s[r].q||[]).push({v:1,args:d,ok:a,ko:b})})};\n    b=c.createElement('script');b.type='text/javascript';\n    b.id=r;b.src=ee;b.async=1;c.getElementsByTagName(\"head\")[0].appendChild(b);\n  }(window,document,'$screeb','https://t.screeb.app/tag.js'));\n\n  $screeb('init', '<website-id>');\n<\/script>\n"})}),"\n",(0,s.jsx)(t.h3,{id:"about-tag-lifecycle",children:"About tag lifecycle"}),"\n",(0,s.jsxs)(t.p,{children:["After the script tag is inserted into your page, you must call the ",(0,s.jsx)(t.code,{children:"init"})," command, with your website ID (given in Screeb app). If no identity is specified, an anonymous Screeb session will be created (see ",(0,s.jsx)(t.a,{href:"./identity",children:"identity"})," section)."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"$screeb('init', '<website-id>');\n"})}),"\n",(0,s.jsx)(t.p,{children:"At any time, you can disable the Screeb tag with the following command:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"$screeb('close');\n"})}),"\n",(0,s.jsx)(t.h2,{id:"next-steps",children:"Next steps"}),"\n",(0,s.jsx)(t.h3,{id:"1--identify-visitors",children:"1- Identify visitors"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"./identity",children:"See here."})}),"\n",(0,s.jsx)(t.h3,{id:"2--event-tracking",children:"2- Event tracking"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"./event-tracking",children:"See here."})}),"\n",(0,s.jsx)(t.h3,{id:"3--start-the-survey-programmatically",children:"3- Start the survey programmatically"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"./start-survey-programmatically",children:"See here."})})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>c});var s=n(6540);const i={},r=s.createContext(i);function a(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);