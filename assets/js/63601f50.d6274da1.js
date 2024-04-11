"use strict";(self.webpackChunkscreeb_docs=self.webpackChunkscreeb_docs||[]).push([[7494],{9341:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>t,default:()=>a,frontMatter:()=>r,metadata:()=>l,toc:()=>h});var i=s(4848),d=s(8453);const r={sidebar_position:3},t="Webhook v2.1.0",l={id:"webhook-v2.1.0",title:"Webhook v2.1.0",description:"On visitor action (such as clicking on a choice, scoring, input...) Screeb can send a request to an external platform, containing the response data.",source:"@site/docs/api-and-connectors/webhook-v2.1.0.md",sourceDirName:".",slug:"/webhook-v2.1.0",permalink:"/api-and-connectors/webhook-v2.1.0",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"docSidebar",previous:{title:"Webhook v2.0.0",permalink:"/api-and-connectors/webhook-v2.0.0"},next:{title:"Stitch v1.0.0",permalink:"/api-and-connectors/stitch"}},c={},h=[{value:"Entities",id:"entities",level:2},{value:"Hook types",id:"hook-types",level:2},{value:"Errors",id:"errors",level:2},{value:"Migrate from v2.0.0",id:"migrate-from-v200",level:2},{value:"Example payload",id:"example-payload",level:2},{value:"Spec",id:"spec",level:2},{value:"Metadata",id:"metadata",level:3},{value:"Payload",id:"payload",level:3},{value:"Organization",id:"organization",level:3},{value:"Channel",id:"channel",level:3},{value:"Survey",id:"survey",level:3},{value:"User",id:"user",level:3},{value:"Response",id:"response",level:3},{value:"Question",id:"question",level:3},{value:"Answer",id:"answer",level:3},{value:"Field",id:"field",level:3},{value:"Item",id:"item",level:3},{value:"Security",id:"security",level:2},{value:"Support",id:"support",level:2}];function o(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"webhook-v210",children:"Webhook v2.1.0"}),"\n",(0,i.jsx)(n.p,{children:"On visitor action (such as clicking on a choice, scoring, input...) Screeb can send a request to an external platform, containing the response data."}),"\n",(0,i.jsx)(n.h2,{id:"entities",children:"Entities"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Organization: A Screeb account, shared by many Screeb users of your company"}),"\n",(0,i.jsx)(n.li,{children:"Channel: A distribution channel for your survey (Javascript SDK, Android SDK, iOS SDK...)"}),"\n",(0,i.jsx)(n.li,{children:"Survey"}),"\n",(0,i.jsx)(n.li,{children:"Survey scenario: A versioned survey: on survey update, your flow is saved in a new scenario. New users will see the last scenario."}),"\n",(0,i.jsx)(n.li,{children:"User: Information about the visitor"}),"\n",(0,i.jsx)(n.li,{children:"Response: A response is a chain of question+answers. A user sometimes has many responses to a single survey."}),"\n",(0,i.jsx)(n.li,{children:"Question"}),"\n",(0,i.jsx)(n.li,{children:"Answer: An answer is part of a response. Each answer is associated with a question."}),"\n",(0,i.jsx)(n.li,{children:"Field: An answer may have many fields (eg: multiple choices question)"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"hook-types",children:"Hook types"}),"\n",(0,i.jsx)(n.p,{children:"You can trigger webhooks on 3 different events:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"On survey display: a survey is shown to visitors, but no question is replied. You will get notified even if no response is given."}),"\n",(0,i.jsx)(n.li,{children:"On question answered: a question has been replied. This webhook will be triggered for each question of a single survey."}),"\n",(0,i.jsx)(n.li,{children:"On response end: a survey has been closed or fully replied to by the user."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"errors",children:"Errors"}),"\n",(0,i.jsxs)(n.p,{children:["On large synchronization order, the webhook destination may reply to Screeb with a 429 HTTP error (",(0,i.jsx)(n.strong,{children:"rate limiting"}),"). Screeb will resend these messages many times, with exponential delay."]}),"\n",(0,i.jsx)(n.h2,{id:"migrate-from-v200",children:"Migrate from v2.0.0"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"response.hidden_fields"})," has been split into 3 objects:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"user.properties"}),": snapshot of user properties on response start"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"response.context"}),": contextual informations (url, browser, locale, timezone, screen size...)"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"response.hidden_fields"}),": only for hidden fields created on response start"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"example-payload",children:"Example payload"}),"\n",(0,i.jsx)(n.p,{children:"Webhooks deliver the responses to your surveys in JSON format, via a POST HTTP request. Here is a typical webhook payload:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:'{\n  "event_id": "64c7ea3b-827b-4679-b25d-7fd61f6c3d33",\n  "event_type": "response.ended",\n  "version": "2.0.0",\n  "time": "2021-07-29T13:45:09.325344042Z",\n  "time_ms": 1627566309325,\n  "payload": {\n    "organization": {\n      "id": "b5969d13-5e5e-4648-9806-5339ddafd984",\n      "name": "ACME"\n    },\n    "channel": {\n      "id": "411ee7c3-7e64-409f-9d75-c782b3f73aa4",\n      "type": "android"\n    },\n    "survey": {\n      "id": "9b913c69-3daf-4a6e-a26d-042004fc7881",\n      "name": "Measure NPS",\n      "scenario_id": "cc4a3710-e8ee-4672-a35c-5c17485ec441",\n      "scenario_version": 9,\n      "scenario_time": "2021-07-29T00:08:31.069497Z",\n      "scenario_time_ms": 1627517311069\n    },\n    "user": {\n      "anonymous_id": "2eb83fb4-b1b3-4e48-be48-a8fd9c4e5a7d",\n      "user_id": "samuel@screeb.app",\n      "name": "Samuel Berthe",\n      "email": "samuel@screeb.app",\n      "group_names": ["Screeb", "10-100-companies", "plan-enterprise"],\n      "hidden_fields": {\n        "firstname": "Samuel",\n        "lastname": "Berthe",\n        "email": "samuel@screeb.app",\n        "plan": "free",\n        "signup_at": "2020-03-01T02:03:04.56789Z",\n        "last_seen_at": "2021-06-09T02:03:04.56789Z"\n      }\n    },\n    "response": {\n      "id": "5854a797-628c-4906-bb4c-da03e418cf47",\n      "locale": "en-US",\n      "time": "2021-07-29T13:44:59.831Z",\n      "time_ms": 1627918228831,\n      "time_to_complete_second": 34,\n      "completion": "fully_completed",\n      "hidden_fields": {\n        "variable-from-crm": "blablabla"\n      },\n      "context": {\n        "active_page": {\n          "domain": "screeb.app",\n          "path": "/solutions/product-analytics",\n          "search": "utm_medium=email",\n          "title": "In-app engaging surveys",\n          "url": "https://screeb.app/solutions/product-analytics?utm_medium=email"\n        },\n        "library": {\n          "name": "sdk-js",\n          "source": "sdk-js",\n          "source_type": "screeb",\n          "version": "0.2.61"\n        },\n        "locale": "en-GB",\n        "screen": {\n          "height": 940,\n          "scale": 1,\n          "width": 2560\n        },\n        "timezone": "Europe/Paris",\n        "user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36"\n      },\n      "question": {\n        "id": "a44252c3-ef3d-4156-90d6-a3d6364516c0",\n        "type": "input",\n        "title": "How can we improve your experience?"\n      },\n      "answer": {\n        "fields": [\n          {\n            "id": "c71dfe9d-6b47-452f-bda2-6091c13561b0",\n            "type": "string",\n            "value": "The new dashboard is buggy.",\n            "text": "The new dashboard is buggy.",\n            "number": null,\n            "boolean": null,\n            "time": null\n          }\n        ],\n        "replied_at": "2021-07-29T13:45:09.286Z",\n        "replied_at_ms": 1627566309286,\n        "tags": ["screeb", "feedbback"]\n      },\n      "tags": ["screeb", "feedbback"],\n      "items": [\n        { "question": {...}, "answer": {...} },\n        { "question": {...}, "answer": {...} },\n        { "question": {...}, "answer": {...} }\n      ]\n    }\n  }\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"spec",children:"Spec"}),"\n",(0,i.jsxs)(n.p,{children:["Current version: ",(0,i.jsx)(n.strong,{children:"2.0.0"})]}),"\n",(0,i.jsx)(n.p,{children:"When the destination server replies with a 4xx or 5xx status code, Screeb platform sends a new request after 60s (once)."}),"\n",(0,i.jsx)(n.h3,{id:"metadata",children:"Metadata"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Field"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Optional"}),(0,i.jsx)(n.th,{children:"description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"event_id"}),(0,i.jsx)(n.td,{children:"uuid"}),(0,i.jsx)(n.td,{children:"No"}),(0,i.jsx)(n.td,{children:"Unique id for this event (same id in retry request)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"event_type"}),(0,i.jsxs)(n.td,{children:["enum: ",(0,i.jsx)(n.code,{children:"response.displayed"}),", ",(0,i.jsx)(n.code,{children:"response.answered"})," or ",(0,i.jsx)(n.code,{children:"response.ended"})]}),(0,i.jsx)(n.td,{children:"No"}),(0,i.jsx)(n.td,{children:"Type of event sent over webhook"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"time"}),(0,i.jsx)(n.td,{children:"Date"}),(0,i.jsx)(n.td,{children:"No"}),(0,i.jsx)(n.td,{children:"Date of event"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"time_ms"}),(0,i.jsx)(n.td,{children:"long"}),(0,i.jsx)(n.td,{children:"No"}),(0,i.jsx)(n.td,{children:"Timestamp of event in millisecond"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"version"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"No"}),(0,i.jsx)(n.td,{children:"Semver version of the webhook payload"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"payload"}),(0,i.jsx)(n.td,{children:"<Payload>"}),(0,i.jsx)(n.td,{children:"No"}),(0,i.jsx)(n.td,{children:'See "Payload" section'})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"payload",children:"Payload"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Field"}),(0,i.jsx)(n.th,{children:"type"}),(0,i.jsx)(n.th,{children:"Optional"}),(0,i.jsx)(n.th,{children:"description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"organization"}),(0,i.jsx)(n.td,{children:"Organization"}),(0,i.jsx)(n.td,{children:"No"}),(0,i.jsx)(n.td,{children:"Organization details"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"channel"}),(0,i.jsx)(n.td,{children:"Channel"}),(0,i.jsx)(n.td,{children:"No"}),(0,i.jsx)(n.td,{children:"Channel details"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"survey"}),(0,i.jsx)(n.td,{children:"Survey"}),(0,i.jsx)(n.td,{children:"No"}),(0,i.jsx)(n.td,{children:"Survey details"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"user"}),(0,i.jsx)(n.td,{children:"User"}),(0,i.jsx)(n.td,{children:"No"}),(0,i.jsx)(n.td,{children:"User details"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"response"}),(0,i.jsx)(n.td,{children:"Response"}),(0,i.jsx)(n.td,{children:"No"}),(0,i.jsx)(n.td,{children:"Response details"})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"organization",children:"Organization"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Field"}),(0,i.jsx)(n.th,{children:"type"}),(0,i.jsx)(n.th,{children:"Optional"}),(0,i.jsx)(n.th,{children:"description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"id"}),(0,i.jsx)(n.td,{children:"uuid"}),(0,i.jsx)(n.td,{children:"No"}),(0,i.jsx)(n.td,{children:"Unique identifier for the organization"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"name"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"No"}),(0,i.jsx)(n.td,{children:"Name of the Screeb account"})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"channel",children:"Channel"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Field"}),(0,i.jsx)(n.th,{children:"type"}),(0,i.jsx)(n.th,{children:"Optional"}),(0,i.jsx)(n.th,{children:"description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"id"}),(0,i.jsx)(n.td,{children:"uuid"}),(0,i.jsx)(n.td,{children:"No"}),(0,i.jsx)(n.td,{children:"Unique identifier for the channel"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"type"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"No"}),(0,i.jsx)(n.td,{children:"Channel type (widget, android, ios, hosted-page...)"})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"survey",children:"Survey"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Field"}),(0,i.jsx)(n.th,{children:"type"}),(0,i.jsx)(n.th,{children:"Optional"}),(0,i.jsx)(n.th,{children:"description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"id"}),(0,i.jsx)(n.td,{children:"uuid"}),(0,i.jsx)(n.td,{children:"No"}),(0,i.jsx)(n.td,{children:"Unique identifier for the survey"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"name"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"No"}),(0,i.jsx)(n.td,{children:"Name of the survey"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"scenario_id"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"No"}),(0,i.jsx)(n.td,{children:"Unique identifier for the survey scenario"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"scenario_version"}),(0,i.jsx)(n.td,{children:"int"}),(0,i.jsx)(n.td,{children:"No"}),(0,i.jsx)(n.td,{children:"Version number of the survey scenario"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"scenario_time"}),(0,i.jsx)(n.td,{children:"Date"}),(0,i.jsx)(n.td,{children:"No"}),(0,i.jsx)(n.td,{children:"Date of the scenario edition"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"scenario_time_ms"}),(0,i.jsx)(n.td,{children:"int"}),(0,i.jsx)(n.td,{children:"No"}),(0,i.jsx)(n.td,{children:"Timestamp of the scenario edition (millisecond)"})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"user",children:"User"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Field"}),(0,i.jsx)(n.th,{children:"type"}),(0,i.jsx)(n.th,{children:"Optional"}),(0,i.jsx)(n.th,{children:"description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"anonymous_id"}),(0,i.jsx)(n.td,{children:"uuid"}),(0,i.jsx)(n.td,{children:"No"}),(0,i.jsx)(n.td,{children:"Screeb identifier for the user"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"user_id"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"No"}),(0,i.jsx)(n.td,{children:"Main user identifier"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"name"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"Yes"}),(0,i.jsx)(n.td,{children:"User name (when available in identity properties)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"email"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"Yes"}),(0,i.jsx)(n.td,{children:"User email (when available in identity properties)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"group_names"}),(0,i.jsx)(n.td,{children:"Array<string>"}),(0,i.jsx)(n.td,{children:"Yes"}),(0,i.jsx)(n.td,{children:"User groups"})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"response",children:"Response"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Field"}),(0,i.jsx)(n.th,{children:"type"}),(0,i.jsx)(n.th,{children:"Optional"}),(0,i.jsx)(n.th,{children:"description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"id"}),(0,i.jsx)(n.td,{children:"uuid"}),(0,i.jsx)(n.td,{children:"No"}),(0,i.jsx)(n.td,{children:"Unique identifier for the response"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"locale"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"Yes"}),(0,i.jsx)(n.td,{children:"Locale of the respondent"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"time"}),(0,i.jsx)(n.td,{children:"Date"}),(0,i.jsx)(n.td,{children:"No"}),(0,i.jsx)(n.td,{children:"Date of response start"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"time_ms"}),(0,i.jsx)(n.td,{children:"long"}),(0,i.jsx)(n.td,{children:"No"}),(0,i.jsx)(n.td,{children:"Timestamp of response start in millisecond"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"time_to_complete_second"}),(0,i.jsx)(n.td,{children:"long"}),(0,i.jsx)(n.td,{children:"Yes"}),(0,i.jsxs)(n.td,{children:["Seconds between survey display and response end (when event_type == ",(0,i.jsx)(n.code,{children:"response.ended"}),")"]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"completion"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"Yes"}),(0,i.jsx)(n.td,{children:'"not_started", "partially_completed" or "fully_completed"'})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"hidden_fields"}),(0,i.jsx)(n.td,{children:"object"}),(0,i.jsx)(n.td,{children:"Yes"}),(0,i.jsx)(n.td,{children:"Key/Value of the hidden fields"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"question"}),(0,i.jsx)(n.td,{children:"Question"}),(0,i.jsx)(n.td,{children:"Yes"}),(0,i.jsxs)(n.td,{children:['See the "Question" section (when event_type == ',(0,i.jsx)(n.code,{children:"response.answered"}),")"]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"answer"}),(0,i.jsx)(n.td,{children:"Answer"}),(0,i.jsx)(n.td,{children:"Yes"}),(0,i.jsxs)(n.td,{children:['See the "Answer" section (when event_type == ',(0,i.jsx)(n.code,{children:"response.answered"}),")"]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"items"}),(0,i.jsx)(n.td,{children:"Item[]"}),(0,i.jsx)(n.td,{children:"No"}),(0,i.jsxs)(n.td,{children:['See the "Item" section (when event_type == ',(0,i.jsx)(n.code,{children:"response.answered"})]})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"question",children:"Question"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Field"}),(0,i.jsx)(n.th,{children:"type"}),(0,i.jsx)(n.th,{children:"Optional"}),(0,i.jsx)(n.th,{children:"description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"id"}),(0,i.jsx)(n.td,{children:"uuid"}),(0,i.jsx)(n.td,{children:"No"}),(0,i.jsx)(n.td,{children:"Unique identifier for the question"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"type"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"No"}),(0,i.jsx)(n.td,{children:"Type of question"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"title"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"No"}),(0,i.jsx)(n.td,{children:"Label of the question"})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"answer",children:"Answer"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Field"}),(0,i.jsx)(n.th,{children:"type"}),(0,i.jsx)(n.th,{children:"Optional"}),(0,i.jsx)(n.th,{children:"description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"fields"}),(0,i.jsx)(n.td,{children:"Field[]"}),(0,i.jsx)(n.td,{children:"No"}),(0,i.jsx)(n.td,{children:'List of values. See the "Field" section'})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"replied_at"}),(0,i.jsx)(n.td,{children:"Date"}),(0,i.jsx)(n.td,{children:"No"}),(0,i.jsx)(n.td,{children:"Date of the answer"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"replied_at_ms"}),(0,i.jsx)(n.td,{children:"int"}),(0,i.jsx)(n.td,{children:"No"}),(0,i.jsx)(n.td,{children:"Timestamp of the answer (millisecond)"})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"field",children:"Field"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Field"}),(0,i.jsx)(n.th,{children:"type"}),(0,i.jsx)(n.th,{children:"Optional"}),(0,i.jsx)(n.th,{children:"description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"id"}),(0,i.jsx)(n.td,{children:"uuid"}),(0,i.jsx)(n.td,{children:"No"}),(0,i.jsx)(n.td,{children:"Unique identifier for the field"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"type"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"No"}),(0,i.jsx)(n.td,{children:'Value type: "string", "number", "time", "boolean"...'})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"value"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"No"}),(0,i.jsx)(n.td,{children:"Printable value of the field (always string)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"text"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"Yes"}),(0,i.jsx)(n.td,{children:'Value of the field, when type is "string"'})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"number"}),(0,i.jsx)(n.td,{children:"number"}),(0,i.jsx)(n.td,{children:"Yes"}),(0,i.jsx)(n.td,{children:'Value of the field, when type is "number"'})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"boolean"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"Yes"}),(0,i.jsx)(n.td,{children:'Value of the field, when type is "boolean"'})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"time"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"Yes"}),(0,i.jsx)(n.td,{children:'Value of the field, when type is "time"'})]})]})]}),"\n",(0,i.jsx)(n.p,{children:"NPS, CES and CSAT will be sent as numeric values, instead of emojis."}),"\n",(0,i.jsx)(n.h3,{id:"item",children:"Item"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Field"}),(0,i.jsx)(n.th,{children:"type"}),(0,i.jsx)(n.th,{children:"Optional"}),(0,i.jsx)(n.th,{children:"description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"question"}),(0,i.jsx)(n.td,{children:"Question"}),(0,i.jsx)(n.td,{children:"No"}),(0,i.jsx)(n.td,{children:'See the "Question" section'})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"answer"}),(0,i.jsx)(n.td,{children:"Answer"}),(0,i.jsx)(n.td,{children:"No"}),(0,i.jsx)(n.td,{children:'See the "Answer" section'})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"security",children:"Security"}),"\n",(0,i.jsxs)(n.p,{children:["To protect your server from unauthorized webhook events, we strongly recommend that you use ",(0,i.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/HMAC",children:"HMAC"})," signatures."]}),"\n",(0,i.jsxs)(n.p,{children:["Each webhook event will include a signature calculated using a secret key (available on Screeb ",(0,i.jsx)(n.a,{href:"https://admin.screeb.app",children:"platform"}),") and a payload from the webhook. By verifying this signature, you confirm that the webhook was sent by Screeb, and was not modified during transmission."]}),"\n",(0,i.jsx)(n.p,{children:"The signature is provided in the headers in this way:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"x-screeb-hmac-digest: HMAC-SHA256-BASE64\nx-screeb-hmac-signature-url: k8TREZiVCkqywuUT1Lmxa4exhXOf0IS24ibxDIJ3ka8=\nx-screeb-hmac-signature-body: uGv+PueUDB/r+3r7/NMfui8wMDerRynN95BacNbGntpE/G7aAi9FNqjYe51ENbFG/d7o3X5uS40ixPNNP1hP/Q==\n"})}),"\n",(0,i.jsx)(n.p,{children:"Here is an example of a signature validation in NodeJS:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"function computeHash(secret, payload) {\n  var crypto = require('crypto');\n  var hmac = crypto.createHmac('sha256', secret);\n  hmac.write(payload);\n  hmac.end();\n  return hmac.read().toString('base64');\n};\n\nfunction hashIsValid(secret, payload, verify) {\n  return crypto.timingSafeEqual(verify, computeHash(secret,payload));\n};\n\nfunction webhookHandler(req, res) {\n  var hmac = req.header('x-screeb-hmac-signature-body');\n  var body = req.body;\n\n  var ok = hashIsValid(process.env.SCREEB_SECRET, body, hmac);\n  if (!ok) {\n    res.status(403);\n    res.send({message: \"invalid signature\"});\n    return;\n  }\n}\n"})}),"\n",(0,i.jsx)(n.h2,{id:"support",children:"Support"}),"\n",(0,i.jsxs)(n.p,{children:["If you have any questions or additional requirements, feel free to open an issue or contact ",(0,i.jsx)(n.a,{href:"mailto:samuel@screeb.app",children:"samuel@screeb.app"}),"."]})]})}function a(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>t,x:()=>l});var i=s(6540);const d={},r=i.createContext(d);function t(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:t(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);