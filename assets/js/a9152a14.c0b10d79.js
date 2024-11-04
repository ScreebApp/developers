"use strict";(self.webpackChunkscreeb_docs=self.webpackChunkscreeb_docs||[]).push([[4227],{8534:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>t,contentTitle:()=>o,default:()=>h,frontMatter:()=>d,metadata:()=>l,toc:()=>a});var i=s(4848),r=s(8453);const d={sidebar_position:7},o="Hooks",l={id:"js-hooks",title:"Hooks",description:"Set hooks",source:"@site/docs/sdk-js/js-hooks.md",sourceDirName:".",slug:"/js-hooks",permalink:"/sdk-js/js-hooks",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"docSidebar",previous:{title:"Start survey programmatically",permalink:"/sdk-js/start-survey-programmatically"},next:{title:"Examples",permalink:"/sdk-js/examples"}},t={},a=[{value:"Set hooks",id:"set-hooks",level:2},{value:"Available hooks",id:"available-hooks",level:2},{value:"<code>onSurveyShowed</code>",id:"onsurveyshowed",level:2},{value:"<code>onMessageShowed</code>",id:"onmessageshowed",level:2},{value:"<code>onSurveyStarted</code>",id:"onsurveystarted",level:2},{value:"<code>onMessageStarted</code>",id:"onmessagestarted",level:2},{value:"<code>onQuestionReplied</code>",id:"onquestionreplied",level:2},{value:"<code>onSurveyCompleted</code>",id:"onsurveycompleted",level:2},{value:"<code>onMessageCompleted</code>",id:"onmessagecompleted",level:2},{value:"<code>onSurveyHidden</code>",id:"onsurveyhidden",level:2},{value:"<code>onMessageHidden</code>",id:"onmessagehidden",level:2},{value:"<code>onAppStoreRatingTriggered</code>",id:"onappstoreratingtriggered",level:2},{value:"<code>onReady</code>",id:"onready",level:2},{value:"<code>onSurveyDisplayAllowed</code>",id:"onsurveydisplayallowed",level:2},{value:"<code>onMessageDisplayAllowed</code>",id:"onmessagedisplayallowed",level:2}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components},{Details:s}=n;return s||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"hooks",children:"Hooks"})}),"\n",(0,i.jsx)(n.h2,{id:"set-hooks",children:"Set hooks"}),"\n",(0,i.jsx)(n.p,{children:"You can define custom hooks to be executed on various events."}),"\n",(0,i.jsx)(n.p,{children:"Thanks to this you will be able to interact with your website when a survey appears, or execute some custom actions when a survey is submitted."}),"\n",(0,i.jsxs)(n.p,{children:["You can define hooks on ",(0,i.jsx)(n.code,{children:"init"})," and ",(0,i.jsx)(n.code,{children:"survey.start"})," commands. Hooks are all optional."]}),"\n",(0,i.jsx)(n.h2,{id:"available-hooks",children:"Available hooks"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Hook Name"}),(0,i.jsxs)(n.th,{children:["Available on ",(0,i.jsx)(n.code,{children:"init"})]}),(0,i.jsxs)(n.th,{children:["Available on ",(0,i.jsx)(n.code,{children:"survey.start"})]})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"#onsurveyshowed",children:(0,i.jsx)(n.code,{children:"onSurveyShowed"})})}),(0,i.jsx)(n.td,{children:"Yes \u2705"}),(0,i.jsx)(n.td,{children:"Yes \u2705"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"#onmessageshowed",children:(0,i.jsx)(n.code,{children:"onMessageShowed"})})}),(0,i.jsx)(n.td,{children:"Yes \u2705"}),(0,i.jsx)(n.td,{children:"Yes \u2705"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"#onsurveystarted",children:(0,i.jsx)(n.code,{children:"onSurveyStarted"})})}),(0,i.jsx)(n.td,{children:"Yes \u2705"}),(0,i.jsx)(n.td,{children:"Yes \u2705"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"#onmessagestarted",children:(0,i.jsx)(n.code,{children:"onMessageStarted"})})}),(0,i.jsx)(n.td,{children:"Yes \u2705"}),(0,i.jsx)(n.td,{children:"Yes \u2705"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"#onquestionreplied",children:(0,i.jsx)(n.code,{children:"onQuestionReplied"})})}),(0,i.jsx)(n.td,{children:"Yes \u2705"}),(0,i.jsx)(n.td,{children:"Yes \u2705"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"#onsurveycompleted",children:(0,i.jsx)(n.code,{children:"onSurveyCompleted"})})}),(0,i.jsx)(n.td,{children:"Yes \u2705"}),(0,i.jsx)(n.td,{children:"Yes \u2705"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"#onmessagecompleted",children:(0,i.jsx)(n.code,{children:"onMessageCompleted"})})}),(0,i.jsx)(n.td,{children:"Yes \u2705"}),(0,i.jsx)(n.td,{children:"Yes \u2705"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"#onsurveyhidden",children:(0,i.jsx)(n.code,{children:"onSurveyHidden"})})}),(0,i.jsx)(n.td,{children:"Yes \u2705"}),(0,i.jsx)(n.td,{children:"Yes \u2705"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"#onmessagehidden",children:(0,i.jsx)(n.code,{children:"onMessageHidden"})})}),(0,i.jsx)(n.td,{children:"Yes \u2705"}),(0,i.jsx)(n.td,{children:"Yes \u2705"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"#onappstoreratingtriggered",children:(0,i.jsx)(n.code,{children:"onAppStoreRatingTriggered"})})}),(0,i.jsx)(n.td,{children:"Yes \u2705"}),(0,i.jsx)(n.td,{children:"Yes \u2705"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"#onready",children:(0,i.jsx)(n.code,{children:"onReady"})})}),(0,i.jsx)(n.td,{children:"Yes \u2705"}),(0,i.jsx)(n.td,{children:"No \u274c"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"#onsurveydisplayallowed",children:(0,i.jsx)(n.code,{children:"onSurveyDisplayAllowed"})})}),(0,i.jsx)(n.td,{children:"Yes \u2705"}),(0,i.jsx)(n.td,{children:"No \u274c"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"#onmessagedisplayallowed",children:(0,i.jsx)(n.code,{children:"onMessageDisplayAllowed"})})}),(0,i.jsx)(n.td,{children:"Yes \u2705"}),(0,i.jsx)(n.td,{children:"No \u274c"})]})]})]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"onsurveyshowed",children:(0,i.jsx)(n.code,{children:"onSurveyShowed"})}),"\n",(0,i.jsx)(n.p,{children:"Called when a survey is showed."}),"\n",(0,i.jsxs)(s,{open:!0,children:[(0,i.jsx)("summary",{children:"Example"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:'$screeb("init", "<website-id>", {\n  hooks: {\n    version: "1.0.0",\n    onSurveyShowed: (payload) => {\n      console.log("Survey has been showed", payload);\n    },\n  },\n});\n'})})]}),"\n",(0,i.jsxs)(s,{children:[(0,i.jsx)("summary",{children:"Payload definition"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n    channel: {\n        id: string,\n        type: "widget"\n    },\n    survey: {\n        id: string,\n        survey_position: "center-left" | "center-center" | "center-right" | "bottom-left" | "bottom-center" | "bottom-right",\n        survey_size: 25 | 50 | 75 | 100 | 125 | 150,\n        survey_format: "conversational" | "cards",\n    },\n    response: {\n        id: string,\n        items: {\n            question: {\n                id: string;\n                title: string;\n                type: "text" | "video";\n                url: string;\n            };\n            answer: {\n                fields: {\n                    type: "string" | "number" | "boolean" | "none" | "time" | "url";\n                },\n                text: string;\n                number: number;\n                boolean: boolean;\n                time: Date;\n                url: string;\n            }[] | undefined;\n            replied_at: Date | undefined;\n        }[];\n    },\n    user: {\n        anonymous_id: string,\n        user_id: string,\n    }\n}\n'})})]}),"\n",(0,i.jsx)(n.h2,{id:"onmessageshowed",children:(0,i.jsx)(n.code,{children:"onMessageShowed"})}),"\n",(0,i.jsx)(n.p,{children:"Called when a message is showed."}),"\n",(0,i.jsxs)(s,{open:!0,children:[(0,i.jsx)("summary",{children:"Example"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:'$screeb("init", "<website-id>", {\n  hooks: {\n    version: "1.0.0",\n    onMessageShowed: (payload) => {\n      console.log("Message has been showed", payload);\n    },\n  },\n});\n'})})]}),"\n",(0,i.jsxs)(s,{children:[(0,i.jsx)("summary",{children:"Payload definition"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n    channel: {\n        id: string,\n        type: "widget"\n    },\n    message: {\n        message_size: 25 | 50 | 75 | 100 | 125 | 150;\n        id: string | null;\n    },\n    response: {\n        id: string,\n        items: {\n            question: {\n                id: string;\n                title: string;\n                type: "text" | "video";\n                url: string;\n            };\n            answer: {\n                fields: {\n                    type: "string" | "number" | "boolean" | "none" | "time" | "url";\n                },\n                text: string;\n                number: number;\n                boolean: boolean;\n                time: Date;\n                url: string;\n            }[] | undefined;\n            replied_at: Date | undefined;\n        }[];\n    },\n    user: {\n        anonymous_id: string,\n        user_id: string,\n    }\n}\n'})})]}),"\n",(0,i.jsx)(n.h2,{id:"onsurveystarted",children:(0,i.jsx)(n.code,{children:"onSurveyStarted"})}),"\n",(0,i.jsx)(n.p,{children:"Called when a survey is started."}),"\n",(0,i.jsxs)(s,{open:!0,children:[(0,i.jsx)("summary",{children:"Example"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:'$screeb("init", "<website-id>", {\n  hooks: {\n    version: "1.0.0",\n    onSurveyStarted: (payload) => {\n      console.log("Survey has been started", payload);\n    },\n  },\n});\n'})})]}),"\n",(0,i.jsxs)(s,{children:[(0,i.jsx)("summary",{children:"Payload definition"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n    channel: {\n        id: string,\n        type: "widget"\n    },\n    survey: {\n        id: string,\n        survey_position: "center-left" | "center-center" | "center-right" | "bottom-left" | "bottom-center" | "bottom-right",\n        survey_size: 25 | 50 | 75 | 100 | 125 | 150,\n        survey_format: "conversational" | "cards",\n    },\n    response: {\n        id: string,\n    },\n    user: {\n        anonymous_id: string,\n        user_id: string,\n    }\n}\n'})})]}),"\n",(0,i.jsx)(n.h2,{id:"onmessagestarted",children:(0,i.jsx)(n.code,{children:"onMessageStarted"})}),"\n",(0,i.jsx)(n.p,{children:"Called when a message is started."}),"\n",(0,i.jsxs)(s,{open:!0,children:[(0,i.jsx)("summary",{children:"Example"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:'$screeb("init", "<website-id>", {\n  hooks: {\n    version: "1.0.0",\n    onMessageStarted: (payload) => {\n      console.log("Message has been started", payload);\n    },\n  },\n});\n'})})]}),"\n",(0,i.jsxs)(s,{children:[(0,i.jsx)("summary",{children:"Payload definition"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n    channel: {\n        id: string,\n        type: "widget"\n    },\n    message: {\n        message_size: 25 | 50 | 75 | 100 | 125 | 150;\n        id: string | null;\n    },\n    response: {\n        id: string,\n    },\n    user: {\n        anonymous_id: string,\n        user_id: string,\n    }\n}\n'})})]}),"\n",(0,i.jsx)(n.h2,{id:"onquestionreplied",children:(0,i.jsx)(n.code,{children:"onQuestionReplied"})}),"\n",(0,i.jsx)(n.p,{children:"Called when a question is replied."}),"\n",(0,i.jsxs)(s,{open:!0,children:[(0,i.jsx)("summary",{children:"Example"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:'$screeb("init", "<website-id>", {\n  hooks: {\n    version: "1.0.0",\n    onQuestionReplied: (payload) => {\n      console.log("Question has been replied", payload);\n    },\n  },\n});\n'})})]}),"\n",(0,i.jsxs)(s,{children:[(0,i.jsx)("summary",{children:"Payload definition"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n    channel: {\n        id: string,\n        type: "widget"\n    },\n    survey: {\n        id: string,\n        survey_position: "center-left" | "center-center" | "center-right" | "bottom-left" | "bottom-center" | "bottom-right",\n        survey_size: 25 | 50 | 75 | 100 | 125 | 150,\n        survey_format: "conversational" | "cards",\n    },\n    response: {\n        id: string,\n        status: "started" | "ended" | "closed" | "interrupted"\n        question: {\n            id: string;\n            title: string;\n            type: "text" | "video";\n            url: string;\n        };\n        answer: {\n            fields: {\n                type: "string" | "number" | "boolean" | "none" | "time" | "url";\n            },\n            text: string;\n            number: number;\n            boolean: boolean;\n            time: Date;\n            url: string;\n        };\n        items: {\n            question: {\n                id: string;\n                title: string;\n                type: "text" | "video";\n                url: string;\n            };\n            answer: {\n                fields: {\n                    type: "string" | "number" | "boolean" | "none" | "time" | "url";\n                },\n                text: string;\n                number: number;\n                boolean: boolean;\n                time: Date;\n                url: string;\n            }[] | undefined;\n            replied_at: Date | undefined;\n        }[];\n    },\n    user: {\n        anonymous_id: string,\n        user_id: string,\n    }\n}\n'})})]}),"\n",(0,i.jsx)(n.h2,{id:"onsurveycompleted",children:(0,i.jsx)(n.code,{children:"onSurveyCompleted"})}),"\n",(0,i.jsx)(n.p,{children:"Called when a survey is completed."}),"\n",(0,i.jsxs)(s,{open:!0,children:[(0,i.jsx)("summary",{children:"Example"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:'$screeb("init", "<website-id>", {\n  hooks: {\n    version: "1.0.0",\n    onSurveyCompleted: (payload) => {\n      console.log("Survey has been completed", payload);\n    },\n  },\n});\n'})})]}),"\n",(0,i.jsxs)(s,{children:[(0,i.jsx)("summary",{children:"Payload definition"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n    channel: {\n        id: string,\n        type: "widget"\n    },\n    survey: {\n        id: string,\n        survey_position: "center-left" | "center-center" | "center-right" | "bottom-left" | "bottom-center" | "bottom-right",\n        survey_size: 25 | 50 | 75 | 100 | 125 | 150,\n        survey_format: "conversational" | "cards",\n    },\n    response: {\n        id: string,\n        items: {\n            question: {\n                id: string;\n                title: string;\n                type: "text" | "video";\n                url: string;\n            };\n            answer: {\n                fields: {\n                    type: "string" | "number" | "boolean" | "none" | "time" | "url";\n                },\n                text: string;\n                number: number;\n                boolean: boolean;\n                time: Date;\n                url: string;\n            }[] | undefined;\n            replied_at: Date | undefined;\n        }[];\n    },\n    user: {\n        anonymous_id: string,\n        user_id: string,\n    }\n}\n'})})]}),"\n",(0,i.jsx)(n.h2,{id:"onmessagecompleted",children:(0,i.jsx)(n.code,{children:"onMessageCompleted"})}),"\n",(0,i.jsx)(n.p,{children:"Called when a message is completed."}),"\n",(0,i.jsxs)(s,{open:!0,children:[(0,i.jsx)("summary",{children:"Example"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:'$screeb("init", "<website-id>", {\n  hooks: {\n    version: "1.0.0",\n    onMessageCompleted: (payload) => {\n      console.log("Message has been completed", payload);\n    },\n  },\n});\n'})})]}),"\n",(0,i.jsxs)(s,{children:[(0,i.jsx)("summary",{children:"Payload definition"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n    channel: {\n        id: string,\n        type: "widget"\n    },\n    message: {\n        message_size: 25 | 50 | 75 | 100 | 125 | 150;\n        id: string | null;\n    },\n    response: {\n        id: string,\n        items: {\n            question: {\n                id: string;\n                title: string;\n                type: "text" | "video";\n                url: string;\n            };\n            answer: {\n                fields: {\n                    type: "string" | "number" | "boolean" | "none" | "time" | "url";\n                },\n                text: string;\n                number: number;\n                boolean: boolean;\n                time: Date;\n                url: string;\n            }[] | undefined;\n            replied_at: Date | undefined;\n        }[];\n    },\n    user: {\n        anonymous_id: string,\n        user_id: string,\n    }\n}\n'})})]}),"\n",(0,i.jsx)(n.h2,{id:"onsurveyhidden",children:(0,i.jsx)(n.code,{children:"onSurveyHidden"})}),"\n",(0,i.jsx)(n.p,{children:"Called when a survey is hidden."}),"\n",(0,i.jsxs)(s,{open:!0,children:[(0,i.jsx)("summary",{children:"Example"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:'$screeb("init", "<website-id>", {\n  hooks: {\n    version: "1.0.0",\n    onSurveyHidden: (payload) => {\n      console.log("Survey has been hidden", payload);\n    },\n  },\n});\n'})})]}),"\n",(0,i.jsxs)(s,{children:[(0,i.jsx)("summary",{children:"Payload definition"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n    channel: {\n        id: string,\n        type: "widget"\n    },\n    survey: {\n        id: string,\n        survey_position: "center-left" | "center-center" | "center-right" | "bottom-left" | "bottom-center" | "bottom-right",\n        survey_size: 25 | 50 | 75 | 100 | 125 | 150,\n        survey_format: "conversational" | "cards",\n    },\n    response: {\n        id: string,\n        hide_reason: "started" | "ended" | "closed" | "interrupted",\n        items: {\n            question: {\n                id: string;\n                title: string;\n                type: "text" | "video";\n                url: string;\n            };\n            answer: {\n                fields: {\n                    type: "string" | "number" | "boolean" | "none" | "time" | "url";\n                },\n                text: string;\n                number: number;\n                boolean: boolean;\n                time: Date;\n                url: string;\n            }[] | undefined;\n            replied_at: Date | undefined;\n        }[];\n    },\n    user: {\n        anonymous_id: string,\n        user_id: string,\n    }\n}\n'})})]}),"\n",(0,i.jsx)(n.h2,{id:"onmessagehidden",children:(0,i.jsx)(n.code,{children:"onMessageHidden"})}),"\n",(0,i.jsx)(n.p,{children:"Called when a message is hidden."}),"\n",(0,i.jsxs)(s,{open:!0,children:[(0,i.jsx)("summary",{children:"Example"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:'$screeb("init", "<website-id>", {\n  hooks: {\n    version: "1.0.0",\n    onMessageHidden: (payload) => {\n      console.log("Message has been hidden", payload);\n    },\n  },\n});\n'})})]}),"\n",(0,i.jsxs)(s,{children:[(0,i.jsx)("summary",{children:"Payload definition"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n    channel: {\n        id: string,\n        type: "widget"\n    },\n    message: {\n        message_size: 25 | 50 | 75 | 100 | 125 | 150;\n        id: string | null;\n    },\n    response: {\n        id: string,\n        hide_reason: "started" | "ended" | "closed" | "interrupted",\n        items: {\n            question: {\n                id: string;\n                title: string;\n                type: "text" | "video";\n                url: string;\n            };\n            answer: {\n                fields: {\n                    type: "string" | "number" | "boolean" | "none" | "time" | "url";\n                },\n                text: string;\n                number: number;\n                boolean: boolean;\n                time: Date;\n                url: string;\n            }[] | undefined;\n            replied_at: Date | undefined;\n        }[];\n    },\n    user: {\n        anonymous_id: string,\n        user_id: string,\n    }\n}\n'})})]}),"\n",(0,i.jsx)(n.h2,{id:"onappstoreratingtriggered",children:(0,i.jsx)(n.code,{children:"onAppStoreRatingTriggered"})}),"\n",(0,i.jsx)(n.p,{children:"Called when an App Store Rating question is triggered."}),"\n",(0,i.jsxs)(s,{open:!0,children:[(0,i.jsx)("summary",{children:"Example"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:'$screeb("init", "<website-id>", {\n  hooks: {\n    version: "1.0.0",\n    onAppStoreRatingTriggered: (payload) => {\n      console.log("App Store Rating triggered", payload);\n    },\n  },\n});\n'})})]}),"\n",(0,i.jsxs)(s,{children:[(0,i.jsx)("summary",{children:"Payload definition"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n    channel: {\n        id: string,\n        type: "widget"\n    },\n    user: {\n        anonymous_id: string,\n        user_id: string,\n    }\n}\n'})})]}),"\n",(0,i.jsx)(n.h2,{id:"onready",children:(0,i.jsx)(n.code,{children:"onReady"})}),"\n",(0,i.jsxs)(n.p,{children:["Called when the SDK is ready. Only available on ",(0,i.jsx)(n.code,{children:"init"}),"."]}),"\n",(0,i.jsxs)(s,{open:!0,children:[(0,i.jsx)("summary",{children:"Example"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:'$screeb("init", "<website-id>", {\n  hooks: {\n    version: "1.0.0",\n    onReady: (payload) => {\n      console.log("Screeb ready", payload);\n    },\n  },\n});\n'})})]}),"\n",(0,i.jsxs)(s,{children:[(0,i.jsx)("summary",{children:"Payload definition"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n    channel: {\n        id: string,\n        type: "widget"\n    },\n    user: {\n        anonymous_id: string,\n        user_id: string,\n    }\n}\n'})})]}),"\n",(0,i.jsx)(n.h2,{id:"onsurveydisplayallowed",children:(0,i.jsx)(n.code,{children:"onSurveyDisplayAllowed"})}),"\n",(0,i.jsxs)(n.p,{children:["Called before a survey display to allow it or not. Only available on ",(0,i.jsx)(n.code,{children:"init"}),"."]}),"\n",(0,i.jsxs)(s,{open:!0,children:[(0,i.jsx)("summary",{children:"Example"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:'$screeb("init", "<website-id>", {\n  hooks: {\n    version: "1.0.0",\n    onSurveyDisplayAllowed: (payload) => {\n      console.log("onSurveyDisplayAllowed", payload);\n      // return false to prevent display\n      return true;\n    },\n  },\n});\n'})})]}),"\n",(0,i.jsxs)(s,{children:[(0,i.jsx)("summary",{children:"Payload definition"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n    channel: {\n        id: string,\n        type: "widget"\n    },\n    survey: {\n        id: string,\n    },\n    user: {\n        anonymous_id: string,\n        user_id: string,\n    }\n}\n'})})]}),"\n",(0,i.jsx)(n.h2,{id:"onmessagedisplayallowed",children:(0,i.jsx)(n.code,{children:"onMessageDisplayAllowed"})}),"\n",(0,i.jsxs)(n.p,{children:["Called before a message display to allow it or not. Only available on ",(0,i.jsx)(n.code,{children:"init"}),"."]}),"\n",(0,i.jsxs)(s,{open:!0,children:[(0,i.jsx)("summary",{children:"Example"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:'$screeb("init", "<website-id>", {\n  hooks: {\n    version: "1.0.0",\n    onMessageDisplayAllowed: (payload) => {\n      console.log("onMessageDisplayAllowed", payload);\n      // return false to prevent display\n      return true;\n    },\n  },\n});\n'})})]}),"\n",(0,i.jsxs)(s,{children:[(0,i.jsx)("summary",{children:"Payload definition"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n    channel: {\n        id: string,\n        type: "widget"\n    },\n    message: {\n        id: string,\n    },\n    user: {\n        anonymous_id: string,\n        user_id: string,\n    }\n}\n'})})]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>l});var i=s(6540);const r={},d=i.createContext(r);function o(e){const n=i.useContext(d);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(d.Provider,{value:n},e.children)}}}]);