"use strict";(self.webpackChunkscreeb_docs=self.webpackChunkscreeb_docs||[]).push([[9762],{9487:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var r=t(4848),n=t(8453);const a={sidebar_position:6},i="Start survey programmatically",o={id:"start-survey-programmatically",title:"Start survey programmatically",description:"How to start a survey programmatically?",source:"@site/docs/sdk-ios/start-survey-programmatically.md",sourceDirName:".",slug:"/start-survey-programmatically",permalink:"/sdk-ios/start-survey-programmatically",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"docSidebar",previous:{title:"Screen tracking",permalink:"/sdk-ios/screen-tracking"},next:{title:"Hooks",permalink:"/sdk-ios/ios-hooks"}},l={},c=[{value:"How to start a survey programmatically?",id:"how-to-start-a-survey-programmatically",level:2},{value:"Prevent multiple displays?",id:"prevent-multiple-displays",level:2},{value:"Respect survey status?",id:"respect-survey-status",level:2},{value:"Contextualize response",id:"contextualize-response",level:2}];function d(e){const s={admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",p:"p",pre:"pre",strong:"strong",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.header,{children:(0,r.jsx)(s.h1,{id:"start-survey-programmatically",children:"Start survey programmatically"})}),"\n",(0,r.jsx)(s.h2,{id:"how-to-start-a-survey-programmatically",children:"How to start a survey programmatically?"}),"\n",(0,r.jsx)(s.p,{children:"In most cases, you should let the Screeb targeting engine start the survey. But sometimes, you may want to run a survey on user action."}),"\n",(0,r.jsxs)(s.admonition,{type:"tip",children:[(0,r.jsxs)(s.p,{children:["You can find the ",(0,r.jsx)(s.code,{children:"SURVEY_ID"})," in the ",(0,r.jsx)(s.strong,{children:"Manual"})," section of the survey editor.\nYou can also fint in the survey editor ",(0,r.jsx)(s.strong,{children:"URL"}),", after the ",(0,r.jsx)(s.code,{children:"/surveys/"})," part."]}),(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{src:t(6680).A+"",width:"1431",height:"276"})})]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-swift",children:'Screeb.startSurvey(\n    surveyId = "<SURVEY_ID>"\n)\n'})}),"\n",(0,r.jsx)(s.h2,{id:"prevent-multiple-displays",children:"Prevent multiple displays?"}),"\n",(0,r.jsxs)(s.p,{children:["If current user already replied to your survey and you would rather not display it many times, please add the ",(0,r.jsx)(s.code,{children:"allowMultipleResponses"})," argument:"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-swift",children:'Screeb.startSurvey(\n    surveyId = "<SURVEY_ID>",\n    allowMultipleResponses = false\n)\n'})}),"\n",(0,r.jsx)(s.h2,{id:"respect-survey-status",children:"Respect survey status?"}),"\n",(0,r.jsxs)(s.p,{children:["By default, using manual survey start will ignore the survey status. If you want to respect the survey status, you can add the ",(0,r.jsx)(s.code,{children:"ignoreSurveyStatus"})," argument and set it to ",(0,r.jsx)(s.code,{children:"false"}),":"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-swift",children:'Screeb.startSurvey(\n    surveyId = "<SURVEY_ID>",\n    ignoreSurveyStatus = false\n)\n'})}),"\n",(0,r.jsx)(s.h2,{id:"contextualize-response",children:"Contextualize response"}),"\n",(0,r.jsxs)(s.p,{children:["The ",(0,r.jsx)(s.code,{children:"startSurvey"})," command accepts a list of hidden fields. Values passed as parameters will be listed alongside the responses, on the Screeb platform."]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-swift",children:'Screeb.startSurvey(\n    surveyId = "<SURVEY_ID>",\n    hiddenFields: [\n      \u201ciosHidden1": AnyEncodable(\u201chiddenField1\u201d),\n      \u201ciosHiddenCount\u201d: AnyEncodable(75)\n    ]\n)\n'})})]})}function u(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},6680:(e,s,t)=>{t.d(s,{A:()=>r});const r=t.p+"assets/images/survey_targeting_manual-831473feae11caa176a42d76c6500be7.png"},8453:(e,s,t)=>{t.d(s,{R:()=>i,x:()=>o});var r=t(6540);const n={},a=r.createContext(n);function i(e){const s=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),r.createElement(a.Provider,{value:s},e.children)}}}]);