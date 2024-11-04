"use strict";(self.webpackChunkscreeb_docs=self.webpackChunkscreeb_docs||[]).push([[1835],{6416:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>d,metadata:()=>t,toc:()=>a});var s=r(4848),i=r(8453);const d={sidebar_position:7},o="Hooks",t={id:"android-hooks",title:"Hooks",description:"Set hooks",source:"@site/docs/sdk-android/android-hooks.md",sourceDirName:".",slug:"/android-hooks",permalink:"/sdk-android/android-hooks",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"doceSidebar",previous:{title:"Start survey programmatically",permalink:"/sdk-android/start-survey-programmatically"},next:{title:"Push notifications",permalink:"/sdk-android/push-notifications"}},l={},a=[{value:"Set hooks",id:"set-hooks",level:2},{value:"Available hooks",id:"available-hooks",level:2},{value:"Set hooks on SDK init",id:"set-hooks-on-sdk-init",level:3},{value:"Set hooks on survey start",id:"set-hooks-on-survey-start",level:3},{value:"<code>onSurveyShowed</code>",id:"onsurveyshowed",level:2},{value:"<code>onSurveyStarted</code>",id:"onsurveystarted",level:2},{value:"<code>onQuestionReplied</code>",id:"onquestionreplied",level:2},{value:"<code>onSurveyCompleted</code>",id:"onsurveycompleted",level:2},{value:"<code>onSurveyHidden</code>",id:"onsurveyhidden",level:2},{value:"<code>onAppStoreRatingTriggered</code>",id:"onappstoreratingtriggered",level:2},{value:"<code>onReady</code>",id:"onready",level:2},{value:"<code>onSurveyDisplayAllowed</code>",id:"onsurveydisplayallowed",level:2}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components},{Details:r}=n;return r||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"hooks",children:"Hooks"})}),"\n",(0,s.jsx)(n.h2,{id:"set-hooks",children:"Set hooks"}),"\n",(0,s.jsx)(n.p,{children:"You can define custom hooks to be executed on various events."}),"\n",(0,s.jsx)(n.p,{children:"Thanks to this you will be able to interact with your website when a survey appears, or execute some custom code when a survey is submitted."}),"\n",(0,s.jsxs)(n.p,{children:["You can define hooks on ",(0,s.jsx)(n.code,{children:"Screeb.initSdk()"})," and ",(0,s.jsx)(n.code,{children:"Screeb.startSurvey()"})," commands. Hooks are all optional."]}),"\n",(0,s.jsx)(n.h2,{id:"available-hooks",children:"Available hooks"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Hook Name"}),(0,s.jsxs)(n.th,{children:["Available on ",(0,s.jsx)(n.code,{children:"Screeb.initSdk()"})]}),(0,s.jsxs)(n.th,{children:["Available on ",(0,s.jsx)(n.code,{children:"Screeb.startSurvey()"})]})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"#onsurveyshowed",children:(0,s.jsx)(n.code,{children:"onSurveyShowed"})})}),(0,s.jsx)(n.td,{children:"Yes \u2705"}),(0,s.jsx)(n.td,{children:"Yes \u2705"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"#onsurveystarted",children:(0,s.jsx)(n.code,{children:"onSurveyStarted"})})}),(0,s.jsx)(n.td,{children:"Yes \u2705"}),(0,s.jsx)(n.td,{children:"Yes \u2705"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"#onquestionreplied",children:(0,s.jsx)(n.code,{children:"onQuestionReplied"})})}),(0,s.jsx)(n.td,{children:"Yes \u2705"}),(0,s.jsx)(n.td,{children:"Yes \u2705"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"#onsurveycompleted",children:(0,s.jsx)(n.code,{children:"onSurveyCompleted"})})}),(0,s.jsx)(n.td,{children:"Yes \u2705"}),(0,s.jsx)(n.td,{children:"Yes \u2705"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"#onsurveyhidden",children:(0,s.jsx)(n.code,{children:"onSurveyHidden"})})}),(0,s.jsx)(n.td,{children:"Yes \u2705"}),(0,s.jsx)(n.td,{children:"Yes \u2705"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"#onappstoreratingtriggered",children:(0,s.jsx)(n.code,{children:"onAppStoreRatingTriggered"})})}),(0,s.jsx)(n.td,{children:"Yes \u2705"}),(0,s.jsx)(n.td,{children:"Yes \u2705"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"#onready",children:(0,s.jsx)(n.code,{children:"onReady"})})}),(0,s.jsx)(n.td,{children:"Yes \u2705"}),(0,s.jsx)(n.td,{children:"No \u274c"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"#onsurveydisplayallowed",children:(0,s.jsx)(n.code,{children:"onSurveyDisplayAllowed"})})}),(0,s.jsx)(n.td,{children:"Yes \u2705"}),(0,s.jsx)(n.td,{children:"No \u274c"})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"set-hooks-on-sdk-init",children:"Set hooks on SDK init"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-kotlin",children:'Screeb.initSdk(this,\n    "<android-channel-id>",\n    "<unique-user-id>",          // optional\n    VisitorProperties().apply {  // optional\n        this["firstname"] = "<user-firstname>"\n        this["lastname"] = "<user-lastname>"\n        this["plan"] = "<user-plan>"\n        this["age"] = 42\n        this["logged_at"] = Date()\n        this["authenticated"] = true\n    },\n    InitOptions(\n        isFullscreenMode = true|false,  // fullscreen mode, optional, default: false\n        automaticScreenDetection = true|false // optional, default: false\n    ),\n    hashMapOf(\n        "version" to "1.0.0",\n        "onReady" to { payload:Any -> Log.d("Screeb", "SDK Ready: $payload")},\n        "onSurveyDisplayAllowed" to { payload:Any -> true}\n    )\n)\n'})}),"\n",(0,s.jsx)(n.h3,{id:"set-hooks-on-survey-start",children:"Set hooks on survey start"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-kotlin",children:'Screeb.startSurvey(\n    surveyId = "<survey-id>",\n    allowMultipleResponses = true,\n    hiddenFields = HiddenFields().apply {\n        this["h1"] = "hidden_field1"\n        this["h_count"] = 75\n    },\n    hashMapOf(\n        "version" to "1.0.0",\n        "onSurveyShowed" to { payload:Any -> Log.d("Screeb", "Survey showed $payload")}\n    )\n)\n'})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"onsurveyshowed",children:(0,s.jsx)(n.code,{children:"onSurveyShowed"})}),"\n",(0,s.jsx)(n.p,{children:"Called when a survey is showed."}),"\n",(0,s.jsxs)(r,{open:!0,children:[(0,s.jsx)("summary",{children:"Example"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-kotlin",children:'Screeb.initSdk(this,\n    "<android-channel-id>",\n    ...\n    hashMapOf(\n        "version" to "1.0.0",\n        "onSurveyShowed" to { payload:Any -> Log.d("Screeb", "Survey has been showed: $payload")},\n    )\n)\n'})})]}),"\n",(0,s.jsxs)(r,{children:[(0,s.jsx)("summary",{children:"Payload definition"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n    channel: {\n        id: string,\n        type: "android"\n    },\n    survey: {\n        id: string,\n        survey_position: "center-left" | "center-center" | "center-right" | "bottom-left" | "bottom-center" | "bottom-right",\n        survey_size: 25 | 50 | 75 | 100 | 125 | 150,\n        survey_format: "conversational" | "cards",\n    },\n    response: {\n        id: string,\n        items: {\n            question: {\n                id: string;\n                title: string;\n                type: "text" | "video";\n                url: string;\n            };\n            answer: {\n                fields: {\n                    type: "string" | "number" | "boolean" | "none" | "time" | "url";\n                },\n                text: string;\n                number: number;\n                boolean: boolean;\n                time: Date;\n                url: string;\n            }[] | undefined;\n            replied_at: Date | undefined;\n        }[];\n    },\n    user: {\n        anonymous_id: string,\n        user_id: string,\n    }\n}\n'})})]}),"\n",(0,s.jsx)(n.h2,{id:"onsurveystarted",children:(0,s.jsx)(n.code,{children:"onSurveyStarted"})}),"\n",(0,s.jsx)(n.p,{children:"Called when a survey is started."}),"\n",(0,s.jsxs)(r,{open:!0,children:[(0,s.jsx)("summary",{children:"Example"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-kotlin",children:'Screeb.initSdk(this,\n    "<android-channel-id>",\n    ...\n    hashMapOf(\n        "version" to "1.0.0",\n        "onSurveyStarted" to { payload:Any -> Log.d("Screeb", "Survey has been started: $payload")},\n    )\n)\n'})})]}),"\n",(0,s.jsxs)(r,{children:[(0,s.jsx)("summary",{children:"Payload definition"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n    channel: {\n        id: string,\n        type: "android"\n    },\n    survey: {\n        id: string,\n        survey_position: "center-left" | "center-center" | "center-right" | "bottom-left" | "bottom-center" | "bottom-right",\n        survey_size: 25 | 50 | 75 | 100 | 125 | 150,\n        survey_format: "conversational" | "cards",\n    },\n    response: {\n        id: string,\n    },\n    user: {\n        anonymous_id: string,\n        user_id: string,\n    }\n}\n'})})]}),"\n",(0,s.jsx)(n.h2,{id:"onquestionreplied",children:(0,s.jsx)(n.code,{children:"onQuestionReplied"})}),"\n",(0,s.jsx)(n.p,{children:"Called when a question is replied."}),"\n",(0,s.jsxs)(r,{open:!0,children:[(0,s.jsx)("summary",{children:"Example"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-kotlin",children:'Screeb.initSdk(this,\n    "<android-channel-id>",\n    ...\n    hashMapOf(\n        "version" to "1.0.0",\n        "onQuestionReplied" to { payload:Any -> Log.d("Screeb", "Question has been replied: $payload")},\n    )\n)\n'})})]}),"\n",(0,s.jsxs)(r,{children:[(0,s.jsx)("summary",{children:"Payload definition"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n    channel: {\n        id: string,\n        type: "android"\n    },\n    survey: {\n        id: string,\n        survey_position: "center-left" | "center-center" | "center-right" | "bottom-left" | "bottom-center" | "bottom-right",\n        survey_size: 25 | 50 | 75 | 100 | 125 | 150,\n        survey_format: "conversational" | "cards",\n    },\n    response: {\n        id: string,\n        status: "started" | "ended" | "closed" | "interrupted"\n        question: {\n            id: string;\n            title: string;\n            type: "text" | "video";\n            url: string;\n        };\n        answer: {\n            fields: {\n                type: "string" | "number" | "boolean" | "none" | "time" | "url";\n            },\n            text: string;\n            number: number;\n            boolean: boolean;\n            time: Date;\n            url: string;\n        };\n        items: {\n            question: {\n                id: string;\n                title: string;\n                type: "text" | "video";\n                url: string;\n            };\n            answer: {\n                fields: {\n                    type: "string" | "number" | "boolean" | "none" | "time" | "url";\n                },\n                text: string;\n                number: number;\n                boolean: boolean;\n                time: Date;\n                url: string;\n            }[] | undefined;\n            replied_at: Date | undefined;\n        }[];\n    },\n    user: {\n        anonymous_id: string,\n        user_id: string,\n    }\n}\n'})})]}),"\n",(0,s.jsx)(n.h2,{id:"onsurveycompleted",children:(0,s.jsx)(n.code,{children:"onSurveyCompleted"})}),"\n",(0,s.jsx)(n.p,{children:"Called when a survey is completed."}),"\n",(0,s.jsxs)(r,{open:!0,children:[(0,s.jsx)("summary",{children:"Example"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-kotlin",children:'Screeb.initSdk(this,\n    "<android-channel-id>",\n    ...\n    hashMapOf(\n        "version" to "1.0.0",\n        "onSurveyCompleted" to { payload:Any -> Log.d("Screeb", "Survey has been completed: $payload")},\n    )\n)\n'})})]}),"\n",(0,s.jsxs)(r,{children:[(0,s.jsx)("summary",{children:"Payload definition"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n    channel: {\n        id: string,\n        type: "android"\n    },\n    survey: {\n        id: string,\n        survey_position: "center-left" | "center-center" | "center-right" | "bottom-left" | "bottom-center" | "bottom-right",\n        survey_size: 25 | 50 | 75 | 100 | 125 | 150,\n        survey_format: "conversational" | "cards",\n    },\n    response: {\n        id: string,\n        items: {\n            question: {\n                id: string;\n                title: string;\n                type: "text" | "video";\n                url: string;\n            };\n            answer: {\n                fields: {\n                    type: "string" | "number" | "boolean" | "none" | "time" | "url";\n                },\n                text: string;\n                number: number;\n                boolean: boolean;\n                time: Date;\n                url: string;\n            }[] | undefined;\n            replied_at: Date | undefined;\n        }[];\n    },\n    user: {\n        anonymous_id: string,\n        user_id: string,\n    }\n}\n'})})]}),"\n",(0,s.jsx)(n.h2,{id:"onsurveyhidden",children:(0,s.jsx)(n.code,{children:"onSurveyHidden"})}),"\n",(0,s.jsx)(n.p,{children:"Called when a survey is hidden."}),"\n",(0,s.jsxs)(r,{open:!0,children:[(0,s.jsx)("summary",{children:"Example"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-kotlin",children:'Screeb.initSdk(this,\n    "<android-channel-id>",\n    ...\n    hashMapOf(\n        "version" to "1.0.0",\n        "onSurveyHidden" to { payload:Any -> Log.d("Screeb", "Survey has been hidden: $payload")},\n    )\n)\n'})})]}),"\n",(0,s.jsxs)(r,{children:[(0,s.jsx)("summary",{children:"Payload definition"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n    channel: {\n        id: string,\n        type: "android"\n    },\n    survey: {\n        id: string,\n        survey_position: "center-left" | "center-center" | "center-right" | "bottom-left" | "bottom-center" | "bottom-right",\n        survey_size: 25 | 50 | 75 | 100 | 125 | 150,\n        survey_format: "conversational" | "cards",\n    },\n    response: {\n        id: string,\n        hide_reason: "started" | "ended" | "closed" | "interrupted",\n        items: {\n            question: {\n                id: string;\n                title: string;\n                type: "text" | "video";\n                url: string;\n            };\n            answer: {\n                fields: {\n                    type: "string" | "number" | "boolean" | "none" | "time" | "url";\n                },\n                text: string;\n                number: number;\n                boolean: boolean;\n                time: Date;\n                url: string;\n            }[] | undefined;\n            replied_at: Date | undefined;\n        }[];\n    },\n    user: {\n        anonymous_id: string,\n        user_id: string,\n    }\n}\n'})})]}),"\n",(0,s.jsx)(n.h2,{id:"onappstoreratingtriggered",children:(0,s.jsx)(n.code,{children:"onAppStoreRatingTriggered"})}),"\n",(0,s.jsx)(n.p,{children:"Called when an App Store Rating question is triggered."}),"\n",(0,s.jsxs)(r,{open:!0,children:[(0,s.jsx)("summary",{children:"Example"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-kotlin",children:'Screeb.initSdk(this,\n    "<android-channel-id>",\n    ...\n    hashMapOf(\n        "version" to "1.0.0",\n        "onAppStoreRatingTriggered" to { payload:Any -> Log.d("Screeb", "App store rating triggered: $payload")},\n    )\n)\n'})})]}),"\n",(0,s.jsxs)(r,{children:[(0,s.jsx)("summary",{children:"Payload definition"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n    channel: {\n        id: string,\n        type: "android"\n    },\n    user: {\n        anonymous_id: string,\n        user_id: string,\n    }\n}\n'})})]}),"\n",(0,s.jsx)(n.h2,{id:"onready",children:(0,s.jsx)(n.code,{children:"onReady"})}),"\n",(0,s.jsxs)(n.p,{children:["Called when the SDK is ready. Only available on ",(0,s.jsx)(n.code,{children:"Screeb.initSdk()"}),"."]}),"\n",(0,s.jsxs)(r,{open:!0,children:[(0,s.jsx)("summary",{children:"Example"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-kotlin",children:'Screeb.initSdk(this,\n    "<android-channel-id>",\n    ...\n    hashMapOf(\n        "version" to "1.0.0",\n        "onReady" to { payload:Any -> Log.d("Screeb", "SDK Ready: $payload")},\n    )\n)\n'})})]}),"\n",(0,s.jsxs)(r,{children:[(0,s.jsx)("summary",{children:"Payload definition"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n    channel: {\n        id: string,\n        type: "android"\n    },\n    user: {\n        anonymous_id: string,\n        user_id: string,\n    }\n}\n'})})]}),"\n",(0,s.jsx)(n.h2,{id:"onsurveydisplayallowed",children:(0,s.jsx)(n.code,{children:"onSurveyDisplayAllowed"})}),"\n",(0,s.jsxs)(n.p,{children:["Called before a survey display to allow it or not. Only available on ",(0,s.jsx)(n.code,{children:"Screeb.initSdk()"}),".\nReturn a boolean value. Return ",(0,s.jsx)(n.code,{children:"false"})," to prevent display."]}),"\n",(0,s.jsxs)(r,{open:!0,children:[(0,s.jsx)("summary",{children:"Example"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-kotlin",children:'Screeb.initSdk(this,\n    "<android-channel-id>",\n    ...\n    hashMapOf(\n        "version" to "1.0.0",\n        "onSurveyDisplayAllowed" to { payload:Any -> Log.d("Screeb", "Survey display allowed: $payload"); true},\n    )\n)\n'})})]}),"\n",(0,s.jsxs)(r,{children:[(0,s.jsx)("summary",{children:"Payload definition"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n    channel: {\n        id: string,\n        type: "android"\n    },\n    survey: {\n        id: string,\n    },\n    user: {\n        anonymous_id: string,\n        user_id: string,\n    }\n}\n'})})]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>t});var s=r(6540);const i={},d=s.createContext(i);function o(e){const n=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);