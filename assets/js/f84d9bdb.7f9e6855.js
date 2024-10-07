"use strict";(self.webpackChunkscreeb_docs=self.webpackChunkscreeb_docs||[]).push([[6946],{5445:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>l,contentTitle:()=>d,default:()=>h,frontMatter:()=>o,metadata:()=>t,toc:()=>a});var r=s(4848),i=s(8453);const o={sidebar_position:7},d="Hooks",t={id:"react-native-hooks",title:"Hooks",description:"Set hooks",source:"@site/docs/sdk-react-native/react-native-hooks.md",sourceDirName:".",slug:"/react-native-hooks",permalink:"/sdk-react-native/react-native-hooks",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"docSidebar",previous:{title:"Start survey programmatically",permalink:"/sdk-react-native/start-survey-programmatically"},next:{title:"Troubleshooting",permalink:"/sdk-react-native/troubleshooting"}},l={},a=[{value:"Set hooks",id:"set-hooks",level:2},{value:"Available hooks",id:"available-hooks",level:2},{value:"Set hooks on SDK init",id:"set-hooks-on-sdk-init",level:3},{value:"Set hooks on survey start",id:"set-hooks-on-survey-start",level:3},{value:"<code>onSurveyShowed</code>",id:"onsurveyshowed",level:2},{value:"<code>onSurveyStarted</code>",id:"onsurveystarted",level:2},{value:"<code>onQuestionReplied</code>",id:"onquestionreplied",level:2},{value:"<code>onSurveyCompleted</code>",id:"onsurveycompleted",level:2},{value:"<code>onSurveyHidden</code>",id:"onsurveyhidden",level:2},{value:"<code>onAppStoreRatingTriggered</code>",id:"onappstoreratingtriggered",level:2},{value:"<code>onReady</code>",id:"onready",level:2},{value:"<code>onSurveyDisplayAllowed</code>",id:"onsurveydisplayallowed",level:2}];function c(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...n.components},{Details:s}=e;return s||function(n,e){throw new Error("Expected "+(e?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h1,{id:"hooks",children:"Hooks"}),"\n",(0,r.jsx)(e.h2,{id:"set-hooks",children:"Set hooks"}),"\n",(0,r.jsx)(e.p,{children:"You can define custom hooks to be executed on various events."}),"\n",(0,r.jsx)(e.p,{children:"Thanks to this you will be able to interact with your application when a survey appears, or execute some custom code when a survey is submitted."}),"\n",(0,r.jsxs)(e.p,{children:["You can define hooks on ",(0,r.jsx)(e.code,{children:"initSdk()"})," and ",(0,r.jsx)(e.code,{children:"startSurvey()"})," commands. Hooks are all optional."]}),"\n",(0,r.jsx)(e.h2,{id:"available-hooks",children:"Available hooks"}),"\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"Hook Name"}),(0,r.jsxs)(e.th,{children:["Available on ",(0,r.jsx)(e.code,{children:"initSdk()"})]}),(0,r.jsxs)(e.th,{children:["Available on ",(0,r.jsx)(e.code,{children:"startSurvey()"})]})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.a,{href:"#onsurveyshowed",children:(0,r.jsx)(e.code,{children:"onSurveyShowed"})})}),(0,r.jsx)(e.td,{children:"Yes \u2705"}),(0,r.jsx)(e.td,{children:"Yes \u2705"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.a,{href:"#onsurveystarted",children:(0,r.jsx)(e.code,{children:"onSurveyStarted"})})}),(0,r.jsx)(e.td,{children:"Yes \u2705"}),(0,r.jsx)(e.td,{children:"Yes \u2705"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.a,{href:"#onquestionreplied",children:(0,r.jsx)(e.code,{children:"onQuestionReplied"})})}),(0,r.jsx)(e.td,{children:"Yes \u2705"}),(0,r.jsx)(e.td,{children:"Yes \u2705"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.a,{href:"#onsurveycompleted",children:(0,r.jsx)(e.code,{children:"onSurveyCompleted"})})}),(0,r.jsx)(e.td,{children:"Yes \u2705"}),(0,r.jsx)(e.td,{children:"Yes \u2705"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.a,{href:"#onsurveyhidden",children:(0,r.jsx)(e.code,{children:"onSurveyHidden"})})}),(0,r.jsx)(e.td,{children:"Yes \u2705"}),(0,r.jsx)(e.td,{children:"Yes \u2705"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.a,{href:"#onappstoreratingtriggered",children:(0,r.jsx)(e.code,{children:"onAppStoreRatingTriggered"})})}),(0,r.jsx)(e.td,{children:"Yes \u2705"}),(0,r.jsx)(e.td,{children:"Yes \u2705"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.a,{href:"#onready",children:(0,r.jsx)(e.code,{children:"onReady"})})}),(0,r.jsx)(e.td,{children:"Yes \u2705"}),(0,r.jsx)(e.td,{children:"No \u274c"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.a,{href:"#onsurveydisplayallowed",children:(0,r.jsx)(e.code,{children:"onSurveyDisplayAllowed"})})}),(0,r.jsx)(e.td,{children:"Yes \u2705"}),(0,r.jsx)(e.td,{children:"No \u274c"})]})]})]}),"\n",(0,r.jsx)(e.h3,{id:"set-hooks-on-sdk-init",children:"Set hooks on SDK init"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-js",children:'initSdk(\n  "<android-channel-id>",\n  "<ios-channel-id>",\n  "<user-id>",\n  {\n    isConnected: false,\n    age: 29,\n    product: "iPhone 13",\n    email: "e2e@screeb.app",\n  },\n  {\n    version: "1.0.0",\n    onReady: (payload: any) => {\n      console.log("onReady", payload);\n    },\n    onSurveyDisplayAllowed: (payload: any) => {\n      console.log("onSurveyDisplayAllowed", payload);\n      // return false to prevent display\n      return true;\n    },\n  }\n);\n'})}),"\n",(0,r.jsx)(e.h3,{id:"set-hooks-on-survey-start",children:"Set hooks on survey start"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-js",children:'startSurvey(\n  "<survey-id>",\n  "<allowMultipleResponses>",\n  "<properties>",\n  "<ignoreSurveyStatus>",\n  {\n    version: "1.0.0",\n    onSurveyShowed: (payload: any) => {\n      console.log("onSurveyShowed", payload);\n    },\n  }\n);\n'})}),"\n",(0,r.jsx)(e.hr,{}),"\n",(0,r.jsx)(e.h2,{id:"onsurveyshowed",children:(0,r.jsx)(e.code,{children:"onSurveyShowed"})}),"\n",(0,r.jsx)(e.p,{children:"Called when a survey is showed."}),"\n",(0,r.jsxs)(s,{open:!0,children:[(0,r.jsx)("summary",{children:"Example"}),(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-js",children:'initSdk(\n  "<android-channel-id>",\n  "<ios-channel-id>",\n  "<user-id>",\n  {...},\n  {\n    version: "1.0.0",\n    onSurveyShowed: (payload: any) => {\n      console.log("onSurveyShowed", payload);\n    },\n  }\n);\n'})})]}),"\n",(0,r.jsxs)(s,{children:[(0,r.jsx)("summary",{children:"Payload definition"}),(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-json",children:'{\n    channel: {\n        id: string,\n        type: "ios"\n    },\n    survey: {\n        id: string,\n        survey_position: "center-left" | "center-center" | "center-right" | "bottom-left" | "bottom-center" | "bottom-right",\n        survey_size: 25 | 50 | 75 | 100 | 125 | 150,\n        survey_format: "conversational" | "cards",\n    },\n    response: {\n        id: string,\n        items: {\n            question: {\n                id: string;\n                title: string;\n                type: "text" | "video";\n                url: string;\n            };\n            answer: {\n                fields: {\n                    type: "string" | "number" | "boolean" | "none" | "time" | "url";\n                },\n                text: string;\n                number: number;\n                boolean: boolean;\n                time: Date;\n                url: string;\n            }[] | undefined;\n            replied_at: Date | undefined;\n        }[];\n    },\n    user: {\n        anonymous_id: string,\n        user_id: string,\n    }\n}\n'})})]}),"\n",(0,r.jsx)(e.h2,{id:"onsurveystarted",children:(0,r.jsx)(e.code,{children:"onSurveyStarted"})}),"\n",(0,r.jsx)(e.p,{children:"Called when a survey is started."}),"\n",(0,r.jsxs)(s,{open:!0,children:[(0,r.jsx)("summary",{children:"Example"}),(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-js",children:'initSdk(\n  "<android-channel-id>",\n  "<ios-channel-id>",\n  "<user-id>",\n  {...},\n  {\n    version: "1.0.0",\n    onSurveyStarted: (payload: any) => {\n      console.log("onSurveyStarted", payload);\n    },\n  }\n);\n'})})]}),"\n",(0,r.jsxs)(s,{children:[(0,r.jsx)("summary",{children:"Payload definition"}),(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-json",children:'{\n    channel: {\n        id: string,\n        type: "ios"\n    },\n    survey: {\n        id: string,\n        survey_position: "center-left" | "center-center" | "center-right" | "bottom-left" | "bottom-center" | "bottom-right",\n        survey_size: 25 | 50 | 75 | 100 | 125 | 150,\n        survey_format: "conversational" | "cards",\n    },\n    response: {\n        id: string,\n    },\n    user: {\n        anonymous_id: string,\n        user_id: string,\n    }\n}\n'})})]}),"\n",(0,r.jsx)(e.h2,{id:"onquestionreplied",children:(0,r.jsx)(e.code,{children:"onQuestionReplied"})}),"\n",(0,r.jsx)(e.p,{children:"Called when a question is replied."}),"\n",(0,r.jsxs)(s,{open:!0,children:[(0,r.jsx)("summary",{children:"Example"}),(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-js",children:'initSdk(\n  "<android-channel-id>",\n  "<ios-channel-id>",\n  "<user-id>",\n  {...},\n  {\n    version: "1.0.0",\n    onQuestionReplied: (payload: any) => {\n      console.log("onQuestionReplied", payload);\n    },\n  }\n);\n'})})]}),"\n",(0,r.jsxs)(s,{children:[(0,r.jsx)("summary",{children:"Payload definition"}),(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-json",children:'{\n    channel: {\n        id: string,\n        type: "ios"\n    },\n    survey: {\n        id: string,\n        survey_position: "center-left" | "center-center" | "center-right" | "bottom-left" | "bottom-center" | "bottom-right",\n        survey_size: 25 | 50 | 75 | 100 | 125 | 150,\n        survey_format: "conversational" | "cards",\n    },\n    response: {\n        id: string,\n        status: "started" | "ended" | "closed" | "interrupted"\n        question: {\n            id: string;\n            title: string;\n            type: "text" | "video";\n            url: string;\n        };\n        answer: {\n            fields: {\n                type: "string" | "number" | "boolean" | "none" | "time" | "url";\n            },\n            text: string;\n            number: number;\n            boolean: boolean;\n            time: Date;\n            url: string;\n        };\n        items: {\n            question: {\n                id: string;\n                title: string;\n                type: "text" | "video";\n                url: string;\n            };\n            answer: {\n                fields: {\n                    type: "string" | "number" | "boolean" | "none" | "time" | "url";\n                },\n                text: string;\n                number: number;\n                boolean: boolean;\n                time: Date;\n                url: string;\n            }[] | undefined;\n            replied_at: Date | undefined;\n        }[];\n    },\n    user: {\n        anonymous_id: string,\n        user_id: string,\n    }\n}\n'})})]}),"\n",(0,r.jsx)(e.h2,{id:"onsurveycompleted",children:(0,r.jsx)(e.code,{children:"onSurveyCompleted"})}),"\n",(0,r.jsx)(e.p,{children:"Called when a survey is completed."}),"\n",(0,r.jsxs)(s,{open:!0,children:[(0,r.jsx)("summary",{children:"Example"}),(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-js",children:'initSdk(\n  "<android-channel-id>",\n  "<ios-channel-id>",\n  "<user-id>",\n  {...},\n  {\n    version: "1.0.0",\n    onSurveyCompleted: (payload: any) => {\n      console.log("onSurveyCompleted", payload);\n    },\n  }\n);\n'})})]}),"\n",(0,r.jsxs)(s,{children:[(0,r.jsx)("summary",{children:"Payload definition"}),(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-json",children:'{\n    channel: {\n        id: string,\n        type: "ios"\n    },\n    survey: {\n        id: string,\n        survey_position: "center-left" | "center-center" | "center-right" | "bottom-left" | "bottom-center" | "bottom-right",\n        survey_size: 25 | 50 | 75 | 100 | 125 | 150,\n        survey_format: "conversational" | "cards",\n    },\n    response: {\n        id: string,\n        items: {\n            question: {\n                id: string;\n                title: string;\n                type: "text" | "video";\n                url: string;\n            };\n            answer: {\n                fields: {\n                    type: "string" | "number" | "boolean" | "none" | "time" | "url";\n                },\n                text: string;\n                number: number;\n                boolean: boolean;\n                time: Date;\n                url: string;\n            }[] | undefined;\n            replied_at: Date | undefined;\n        }[];\n    },\n    user: {\n        anonymous_id: string,\n        user_id: string,\n    }\n}\n'})})]}),"\n",(0,r.jsx)(e.h2,{id:"onsurveyhidden",children:(0,r.jsx)(e.code,{children:"onSurveyHidden"})}),"\n",(0,r.jsx)(e.p,{children:"Called when a survey is hidden."}),"\n",(0,r.jsxs)(s,{open:!0,children:[(0,r.jsx)("summary",{children:"Example"}),(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-js",children:'initSdk(\n  "<android-channel-id>",\n  "<ios-channel-id>",\n  "<user-id>",\n  {...},\n  {\n    version: "1.0.0",\n    onSurveyHidden: (payload: any) => {\n      console.log("onSurveyHidden", payload);\n    },\n  }\n);\n'})})]}),"\n",(0,r.jsxs)(s,{children:[(0,r.jsx)("summary",{children:"Payload definition"}),(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-json",children:'{\n    channel: {\n        id: string,\n        type: "ios"\n    },\n    survey: {\n        id: string,\n        survey_position: "center-left" | "center-center" | "center-right" | "bottom-left" | "bottom-center" | "bottom-right",\n        survey_size: 25 | 50 | 75 | 100 | 125 | 150,\n        survey_format: "conversational" | "cards",\n    },\n    response: {\n        id: string,\n        hide_reason: "started" | "ended" | "closed" | "interrupted",\n        items: {\n            question: {\n                id: string;\n                title: string;\n                type: "text" | "video";\n                url: string;\n            };\n            answer: {\n                fields: {\n                    type: "string" | "number" | "boolean" | "none" | "time" | "url";\n                },\n                text: string;\n                number: number;\n                boolean: boolean;\n                time: Date;\n                url: string;\n            }[] | undefined;\n            replied_at: Date | undefined;\n        }[];\n    },\n    user: {\n        anonymous_id: string,\n        user_id: string,\n    }\n}\n'})})]}),"\n",(0,r.jsx)(e.h2,{id:"onappstoreratingtriggered",children:(0,r.jsx)(e.code,{children:"onAppStoreRatingTriggered"})}),"\n",(0,r.jsx)(e.p,{children:"Called when an App Store Rating question is triggered."}),"\n",(0,r.jsxs)(s,{open:!0,children:[(0,r.jsx)("summary",{children:"Example"}),(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-js",children:'initSdk(\n  "<android-channel-id>",\n  "<ios-channel-id>",\n  "<user-id>",\n  {...},\n  {\n    version: "1.0.0",\n    onAppStoreRatingTriggered: (payload: any) => {\n      console.log("onAppStoreRatingTriggered", payload);\n    },\n  }\n);\n'})})]}),"\n",(0,r.jsxs)(s,{children:[(0,r.jsx)("summary",{children:"Payload definition"}),(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-json",children:'{\n    channel: {\n        id: string,\n        type: "ios"\n    },\n    user: {\n        anonymous_id: string,\n        user_id: string,\n    }\n}\n'})})]}),"\n",(0,r.jsx)(e.h2,{id:"onready",children:(0,r.jsx)(e.code,{children:"onReady"})}),"\n",(0,r.jsxs)(e.p,{children:["Called when the SDK is ready. Only available on ",(0,r.jsx)(e.code,{children:"initSdk()"}),"."]}),"\n",(0,r.jsxs)(s,{open:!0,children:[(0,r.jsx)("summary",{children:"Example"}),(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-js",children:'initSdk(\n  "<android-channel-id>",\n  "<ios-channel-id>",\n  "<user-id>",\n  {...},\n  {\n    version: "1.0.0",\n    onSurveyShowed: (payload: any) => {\n      console.log("onReady", payload);\n    },\n  }\n);\n'})})]}),"\n",(0,r.jsxs)(s,{children:[(0,r.jsx)("summary",{children:"Payload definition"}),(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-json",children:'{\n    channel: {\n        id: string,\n        type: "ios"\n    },\n    user: {\n        anonymous_id: string,\n        user_id: string,\n    }\n}\n'})})]}),"\n",(0,r.jsx)(e.h2,{id:"onsurveydisplayallowed",children:(0,r.jsx)(e.code,{children:"onSurveyDisplayAllowed"})}),"\n",(0,r.jsxs)(e.p,{children:["Called before a survey display to allow it or not. Only available on ",(0,r.jsx)(e.code,{children:"initSdk()"}),".\nReturn a boolean value. Return ",(0,r.jsx)(e.code,{children:"false"})," to prevent display."]}),"\n",(0,r.jsxs)(s,{open:!0,children:[(0,r.jsx)("summary",{children:"Example"}),(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-js",children:'initSdk(\n  "<android-channel-id>",\n  "<ios-channel-id>",\n  "<user-id>",\n  {...},\n  {\n    version: "1.0.0",\n    onSurveyDisplayAllowed: (payload: any) => {\n      console.log("onSurveyDisplayAllowed", payload);\n      // return false to prevent display\n      return true;\n    },\n  }\n);\n'})})]}),"\n",(0,r.jsxs)(s,{children:[(0,r.jsx)("summary",{children:"Payload definition"}),(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-json",children:'{\n    channel: {\n        id: string,\n        type: "ios"\n    },\n    survey: {\n        id: string,\n    },\n    user: {\n        anonymous_id: string,\n        user_id: string,\n    }\n}\n'})})]})]})}function h(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(c,{...n})}):c(n)}},8453:(n,e,s)=>{s.d(e,{R:()=>d,x:()=>t});var r=s(6540);const i={},o=r.createContext(i);function d(n){const e=r.useContext(o);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function t(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:d(n.components),r.createElement(o.Provider,{value:e},n.children)}}}]);