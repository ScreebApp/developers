"use strict";(self.webpackChunkscreeb_docs=self.webpackChunkscreeb_docs||[]).push([[4778],{4355:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>n,metadata:()=>o,toc:()=>i});var r=t(4848),a=t(8453);const n={sidebar_position:6},l="Start survey programmatically",o={id:"start-survey-programmatically",title:"Start survey programmatically",description:"How to start a survey programmatically?",source:"@site/docs/sdk-js/start-survey-programmatically.md",sourceDirName:".",slug:"/start-survey-programmatically",permalink:"/sdk-js/start-survey-programmatically",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"docSidebar",previous:{title:"Event tracking",permalink:"/sdk-js/event-tracking"},next:{title:"Hooks",permalink:"/sdk-js/js-hooks"}},c={},i=[{value:"How to start a survey programmatically?",id:"how-to-start-a-survey-programmatically",level:2},{value:"Prevent multiple displays?",id:"prevent-multiple-displays",level:2},{value:"Respect survey status?",id:"respect-survey-status",level:2},{value:"Target a custom CSS Selector",id:"target-a-custom-css-selector",level:2},{value:"Contextualize response",id:"contextualize-response",level:2}];function u(e){const s={code:"code",em:"em",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h1,{id:"start-survey-programmatically",children:"Start survey programmatically"}),"\n",(0,r.jsx)(s.h2,{id:"how-to-start-a-survey-programmatically",children:"How to start a survey programmatically?"}),"\n",(0,r.jsxs)(s.p,{children:["In most cases, you should let the Screeb ",(0,r.jsx)(s.em,{children:"targeting engine start"})," the survey. But sometimes, you may need more control on survey trigger time."]}),"\n",(0,r.jsx)(s.p,{children:"This method is often used for adding feedback button into a menu."}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-js",children:'$screeb("survey.start", "<SURVEY_ID>");\n'})}),"\n",(0,r.jsx)(s.h2,{id:"prevent-multiple-displays",children:"Prevent multiple displays?"}),"\n",(0,r.jsxs)(s.p,{children:["If current user already replied to your survey and you would rather not display it many times, please add the ",(0,r.jsx)(s.code,{children:"allow_multiple_responses"})," argument:"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-js",children:'$screeb("survey.start", "<SURVEY_ID>", { allow_multiple_responses: false });\n'})}),"\n",(0,r.jsx)(s.h2,{id:"respect-survey-status",children:"Respect survey status?"}),"\n",(0,r.jsxs)(s.p,{children:["By default, using manual survey start will ignore the survey status. If you want to respect the survey status, you can add the ",(0,r.jsx)(s.code,{children:"ignore_survey_status"})," argument and set it to ",(0,r.jsx)(s.code,{children:"false"}),":"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-js",children:'$screeb("survey.start", "<SURVEY_ID>", { ignore_survey_status: false });\n'})}),"\n",(0,r.jsx)(s.h2,{id:"target-a-custom-css-selector",children:"Target a custom CSS Selector"}),"\n",(0,r.jsxs)(s.p,{children:["If you want to target a specific element on your page, you can use the ",(0,r.jsx)(s.code,{children:"selectors"})," argument:"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-js",children:'$screeb("survey.start", "<SURVEY_ID>", {\n  selectors: ".my-element" | ["#my-element", ".my-element"],\n});\n'})}),"\n",(0,r.jsx)(s.h2,{id:"contextualize-response",children:"Contextualize response"}),"\n",(0,r.jsxs)(s.p,{children:["The ",(0,r.jsx)(s.code,{children:"survey.start"})," command accepts an object of hidden fields. Values passed as parameters will be listed alongside the responses, on the Screeb platform."]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-js",children:'$screeb("survey.start", "<SURVEY_ID>", {\n  hidden_fields: { color: "green", article_id: 42 },\n});\n'})})]})}function d(e={}){const{wrapper:s}={...(0,a.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},8453:(e,s,t)=>{t.d(s,{R:()=>l,x:()=>o});var r=t(6540);const a={},n=r.createContext(a);function l(e){const s=r.useContext(n);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),r.createElement(n.Provider,{value:s},e.children)}}}]);