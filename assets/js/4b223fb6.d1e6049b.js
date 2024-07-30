"use strict";(self.webpackChunkscreeb_docs=self.webpackChunkscreeb_docs||[]).push([[3526],{8821:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>d,toc:()=>a});var i=t(4848),s=t(8453);const r={sidebar_position:7},o="Hooks",d={id:"ios-hooks",title:"Hooks",description:"Set hooks",source:"@site/docs/sdk-ios/ios-hooks.md",sourceDirName:".",slug:"/ios-hooks",permalink:"/sdk-ios/ios-hooks",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"docSidebar",previous:{title:"Start survey programmatically",permalink:"/sdk-ios/start-survey-programmatically"},next:{title:"Push notifications",permalink:"/sdk-ios/push-notifications"}},l={},a=[{value:"Set hooks",id:"set-hooks",level:2},{value:"Set hooks on SDK init",id:"set-hooks-on-sdk-init",level:3},{value:"Set hooks on survey start",id:"set-hooks-on-survey-start",level:3},{value:"Payload types",id:"payload-types",level:3}];function c(n){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"hooks",children:"Hooks"}),"\n",(0,i.jsx)(e.h2,{id:"set-hooks",children:"Set hooks"}),"\n",(0,i.jsx)(e.p,{children:"You can define custom hooks to be executed on various events."}),"\n",(0,i.jsx)(e.p,{children:"Thanks to this you will be able to interact with your website when a survey appears, or execute some custom code when a survey is submitted."}),"\n",(0,i.jsxs)(e.p,{children:["You can define hooks on ",(0,i.jsx)(e.code,{children:"Screeb.initSdk()"})," and ",(0,i.jsx)(e.code,{children:"Screeb.startSurvey()"})," commands. Hooks are all optional."]}),"\n",(0,i.jsx)(e.p,{children:"Available hooks are:"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"onSurveyShowed"}),": called when a survey is showed"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"onSurveyStarted"}),": called when a survey is started"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"onQuestionReplied"}),": called when a question is replied"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"onSurveyCompleted"}),": called when a survey is completed"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"onSurveyHidden"}),": called when a survey is hidden"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"onReady"}),": called when the SDK is ready (Only available on ",(0,i.jsx)(e.code,{children:"Screeb.initSdk()"}),")"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"onSurveyDisplayAllowed"}),": called before a survey display to allow it or not (Only available on ",(0,i.jsx)(e.code,{children:"Screeb.initSdk()"}),")"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"onMessageDisplayAllowed"}),": called before a message display to allow it or not (Only available on ",(0,i.jsx)(e.code,{children:"Screeb.initSdk()"}),")"]}),"\n"]}),"\n",(0,i.jsx)(e.h3,{id:"set-hooks-on-sdk-init",children:"Set hooks on SDK init"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-swift",children:'Screeb.initSdk(\n    context: window?.rootViewController,\n    channelId: "<ios-channel-id>",\n    identity: "<user-id>", // optional\n    visitorProperty: ["age": AnyEncodable(12), "name": AnyEncodable("JohnDoe")], // optional\n    initOptions: InitOptions(automaticScreenDetection: true|false), // optional\n    hooks: ["version": "1.0.0","onReady": {(e:Any) -> () in print("Screeb sdk ready " + String(describing: e))}]\n)\n'})}),"\n",(0,i.jsx)(e.h3,{id:"set-hooks-on-survey-start",children:"Set hooks on survey start"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-swift",children:'Screeb.startSurvey(\n    surveyId: "<ios-channel-id>",\n    allowMultipleResponses: true,\n    hiddenFields: [\n        "iosHidden1": AnyEncodable("hiddenField1"),\n        "iosHiddenCount": AnyEncodable(75)\n    ],\n    hooks: [\n        "version": "1.0.0",\n        "onSurveyShowed": {(e:Any) -> () in print("Screeb survey showed " + String(describing: e))},\n        "onSurveyDisplayAllowed": {(e:Any) -> Bool in print("Screeb survey display allowed " + String(describing: e)); return true}\n    ]\n)\n'})}),"\n",(0,i.jsx)(e.h3,{id:"payload-types",children:"Payload types"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-swift",children:'onSurveyShowed: {\n    channel: {\n        id: string,\n        type: "ios"\n    },\n    survey: {\n        id: string,\n        survey_position: "center-left" | "center-center" | "center-right" | "bottom-left" | "bottom-center" | "bottom-right",\n        survey_size: 25 | 50 | 75 | 100 | 125 | 150,\n        survey_format: "conversational" | "cards",\n    },\n    response: {\n        id: string,\n        items: {\n            question: {\n                id: string;\n                title: string;\n                type: "text" | "video";\n                url: string;\n            };\n            answer: {\n                fields: {\n                    type: "string" | "number" | "boolean" | "none" | "time" | "url";\n                },\n                text: string;\n                number: number;\n                boolean: boolean;\n                time: Date;\n                url: string;\n            }[] | undefined;\n            replied_at: Date | undefined;\n        }[];\n    },\n    user: {\n        anonymous_id: string,\n        user_id: string,\n    }\n}\n\nonSurveyStarted: {\n    channel: {\n        id: string,\n        type: "ios"\n    },\n    survey: {\n        id: string,\n        survey_position: "center-left" | "center-center" | "center-right" | "bottom-left" | "bottom-center" | "bottom-right",\n        survey_size: 25 | 50 | 75 | 100 | 125 | 150,\n        survey_format: "conversational" | "cards",\n    },\n    response: {\n        id: string,\n    },\n    user: {\n        anonymous_id: string,\n        user_id: string,\n    }\n}\n\nonQuestionReplied: {\n    channel: {\n        id: string,\n        type: "ios"\n    },\n    survey: {\n        id: string,\n        survey_position: "center-left" | "center-center" | "center-right" | "bottom-left" | "bottom-center" | "bottom-right",\n        survey_size: 25 | 50 | 75 | 100 | 125 | 150,\n        survey_format: "conversational" | "cards",\n    },\n    response: {\n        id: string,\n        status: "started" | "ended" | "closed" | "interrupted"\n        question: {\n            id: string;\n            title: string;\n            type: "text" | "video";\n            url: string;\n        };\n        answer: {\n            fields: {\n                type: "string" | "number" | "boolean" | "none" | "time" | "url";\n            },\n            text: string;\n            number: number;\n            boolean: boolean;\n            time: Date;\n            url: string;\n        };\n        items: {\n            question: {\n                id: string;\n                title: string;\n                type: "text" | "video";\n                url: string;\n            };\n            answer: {\n                fields: {\n                    type: "string" | "number" | "boolean" | "none" | "time" | "url";\n                },\n                text: string;\n                number: number;\n                boolean: boolean;\n                time: Date;\n                url: string;\n            }[] | undefined;\n            replied_at: Date | undefined;\n        }[];\n    },\n    user: {\n        anonymous_id: string,\n        user_id: string,\n    }\n}\n\nonSurveyCompleted: {\n    channel: {\n        id: string,\n        type: "ios"\n    },\n    survey: {\n        id: string,\n        survey_position: "center-left" | "center-center" | "center-right" | "bottom-left" | "bottom-center" | "bottom-right",\n        survey_size: 25 | 50 | 75 | 100 | 125 | 150,\n        survey_format: "conversational" | "cards",\n    },\n    response: {\n        id: string,\n        items: {\n            question: {\n                id: string;\n                title: string;\n                type: "text" | "video";\n                url: string;\n            };\n            answer: {\n                fields: {\n                    type: "string" | "number" | "boolean" | "none" | "time" | "url";\n                },\n                text: string;\n                number: number;\n                boolean: boolean;\n                time: Date;\n                url: string;\n            }[] | undefined;\n            replied_at: Date | undefined;\n        }[];\n    },\n    user: {\n        anonymous_id: string,\n        user_id: string,\n    }\n}\n\nonSurveyHidden: {\n    channel: {\n        id: string,\n        type: "ios"\n    },\n    survey: {\n        id: string,\n        survey_position: "center-left" | "center-center" | "center-right" | "bottom-left" | "bottom-center" | "bottom-right",\n        survey_size: 25 | 50 | 75 | 100 | 125 | 150,\n        survey_format: "conversational" | "cards",\n    },\n    response: {\n        id: string,\n        hide_reason: "started" | "ended" | "closed" | "interrupted",\n        items: {\n            question: {\n                id: string;\n                title: string;\n                type: "text" | "video";\n                url: string;\n            };\n            answer: {\n                fields: {\n                    type: "string" | "number" | "boolean" | "none" | "time" | "url";\n                },\n                text: string;\n                number: number;\n                boolean: boolean;\n                time: Date;\n                url: string;\n            }[] | undefined;\n            replied_at: Date | undefined;\n        }[];\n    },\n    user: {\n        anonymous_id: string,\n        user_id: string,\n    }\n}\n\nonReady: {\n    channel: {\n        id: string,\n        type: "ios"\n    },\n    user: {\n        anonymous_id: string,\n        user_id: string,\n    }\n}\n\nonSurveyDisplayAllowed: {\n    channel: {\n        id: string,\n        type: "widget"\n    },\n    survey: {\n        id: string,\n    },\n    user: {\n        anonymous_id: string,\n        user_id: string,\n    }\n}\n\nonMessageDisplayAllowed: {\n    channel: {\n        id: string,\n        type: "widget"\n    },\n    message: {\n        id: string,\n    },\n    user: {\n        anonymous_id: string,\n        user_id: string,\n    }\n}\n'})})]})}function u(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(c,{...n})}):c(n)}},8453:(n,e,t)=>{t.d(e,{R:()=>o,x:()=>d});var i=t(6540);const s={},r=i.createContext(s);function o(n){const e=i.useContext(r);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function d(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:o(n.components),i.createElement(r.Provider,{value:e},n.children)}}}]);