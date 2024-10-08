"use strict";(self.webpackChunkscreeb_docs=self.webpackChunkscreeb_docs||[]).push([[6536],{2586:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>n,metadata:()=>l,toc:()=>c});var s=r(4848),a=r(8453);const n={sidebar_position:6},i="Start survey programmatically",l={id:"start-survey-programmatically",title:"Start survey programmatically",description:"How to start a survey programmatically?",source:"@site/docs/sdk-react-native/start-survey-programmatically.md",sourceDirName:".",slug:"/start-survey-programmatically",permalink:"/sdk-react-native/start-survey-programmatically",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"docSidebar",previous:{title:"Screen tracking",permalink:"/sdk-react-native/screen-tracking"},next:{title:"Hooks",permalink:"/sdk-react-native/react-native-hooks"}},o={},c=[{value:"How to start a survey programmatically?",id:"how-to-start-a-survey-programmatically",level:2},{value:"Prevent multiple displays?",id:"prevent-multiple-displays",level:2},{value:"Respect survey status?",id:"respect-survey-status",level:2},{value:"Contextualize response",id:"contextualize-response",level:2}];function u(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"start-survey-programmatically",children:"Start survey programmatically"}),"\n",(0,s.jsx)(t.h2,{id:"how-to-start-a-survey-programmatically",children:"How to start a survey programmatically?"}),"\n",(0,s.jsx)(t.p,{children:"In most cases, you should let the Screeb targeting engine start the survey. But sometimes, you may want to run a survey on user action."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:'import { startSurvey } from "@screeb/react-native";\n\nstartSurvey("<survey-id>");\n'})}),"\n",(0,s.jsx)(t.p,{children:"You will find survey id in Screeb platform."}),"\n",(0,s.jsx)(t.h2,{id:"prevent-multiple-displays",children:"Prevent multiple displays?"}),"\n",(0,s.jsxs)(t.p,{children:["If current user already replied to your survey and you would rather not display it many times, please add the ",(0,s.jsx)(t.code,{children:"allowMultipleResponses"})," argument:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:'import { startSurvey } from "@screeb/react-native";\n\nstartSurvey("<survey-id>", false);\n'})}),"\n",(0,s.jsx)(t.h2,{id:"respect-survey-status",children:"Respect survey status?"}),"\n",(0,s.jsxs)(t.p,{children:["By default, using manual survey start will ignore the survey status. If you want to respect the survey status, you can add the ",(0,s.jsx)(t.code,{children:"ignoreSurveyStatus"})," argument and set it to ",(0,s.jsx)(t.code,{children:"false"}),":"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:'import { startSurvey } from "@screeb/react-native";\n\nstartSurvey("<survey-id>", null, null, false);\n'})}),"\n",(0,s.jsx)(t.h2,{id:"contextualize-response",children:"Contextualize response"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"startSurvey"})," command accepts a list of hidden fields. Values passed as parameters will be listed alongside the responses, on the Screeb platform."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:'import { startSurvey } from "@screeb/react-native";\n\nstartSurvey("<survey-id>", true, {\n  color: "red",\n  size: 42,\n});\n'})})]})}function d(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},8453:(e,t,r)=>{r.d(t,{R:()=>i,x:()=>l});var s=r(6540);const a={},n=s.createContext(a);function i(e){const t=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),s.createElement(n.Provider,{value:t},e.children)}}}]);