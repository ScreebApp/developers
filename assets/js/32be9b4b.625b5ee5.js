"use strict";(self.webpackChunkscreeb_docs=self.webpackChunkscreeb_docs||[]).push([[1636],{8008:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>t,metadata:()=>a,toc:()=>c});var r=s(4848),d=s(8453);const t={sidebar_position:3},i="Response API",a={id:"api-and-connectors/response-api",title:"Response API",description:"Summary",source:"@site/docs/private/api-and-connectors/response-api.md",sourceDirName:"api-and-connectors",slug:"/api-and-connectors/response-api",permalink:"/private/api-and-connectors/response-api",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3}},l={},c=[{value:"Summary",id:"summary",level:2},{value:"Authentication",id:"authentication",level:2},{value:"Response retrieval",id:"response-retrieval",level:2},{value:"Example",id:"example",level:3},{value:"Spec",id:"spec",level:3},{value:"Filters by user identifier",id:"filters-by-user-identifier",level:3},{value:"A few examples:",id:"a-few-examples",level:4},{value:"Range",id:"range",level:3},{value:"Output",id:"output",level:3},{value:"Response summary",id:"response-summary",level:2},{value:"Example",id:"example-1",level:3},{value:"Aggregate responses",id:"aggregate-responses",level:2},{value:"Count responses",id:"count-responses",level:3},{value:"Support",id:"support",level:2}];function o(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"response-api",children:"Response API"}),"\n",(0,r.jsx)(n.h2,{id:"summary",children:"Summary"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#authentication",children:"Authentication"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#response-retrieval",children:"Response retrieval"})}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"authentication",children:"Authentication"}),"\n",(0,r.jsx)(n.p,{children:"To query responses hosted in your Screeb workspace, you will need an API Token generated for you. Send a request to the support to get your token."}),"\n",(0,r.jsx)(n.h2,{id:"response-retrieval",children:"Response retrieval"}),"\n",(0,r.jsxs)(n.p,{children:["The response API is accessible via the following endpoint: ",(0,r.jsx)(n.code,{children:"SEARCH"})," - ",(0,r.jsx)(n.a,{href:"https://api.screeb.app/1.0/survey/:survey_ids/response",children:"https://api.screeb.app/1.0/survey/:survey_ids/response"})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:":survey_ids"})," must be replaced by a list of survey IDs separated by a comma (",(0,r.jsx)(n.code,{children:","}),") or a wildcard (",(0,r.jsx)(n.code,{children:"*"}),") for selecting all organization surveys."]}),"\n",(0,r.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'curl -X SEARCH https://api.screeb.app/1.0/survey/*/response \\\n    -H "Content-Type: application/json" \\\n    -H "Authorization: Bearer xxxxxxxxxxxxxxxxxxxxxxxxxxxx" \\\n    -d \'{\n        "filters_bool": "AND",\n        "filters": [\n            { ... },\n            { ... }\n        ],\n        "size": 100,\n        "offset": 0,\n        "range": {\n            "field": "created_at",\n            "start": "2020-01-01T00:00:00.000Z",\n            "end": "2023-12-31T00:00:00.000Z"\n        }\n    }\'\n'})}),"\n",(0,r.jsx)(n.h3,{id:"spec",children:"Spec"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Field"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"filters_bool"})}),(0,r.jsx)(n.td,{children:"String"}),(0,r.jsxs)(n.td,{children:["Supported: ",(0,r.jsx)(n.code,{children:"AND"}),", ",(0,r.jsx)(n.code,{children:"OR"}),". Either one or all filters must be valid."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"filters"})}),(0,r.jsx)(n.td,{children:"List of Filters (optional)"}),(0,r.jsx)(n.td,{children:"See below"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"size"})}),(0,r.jsx)(n.td,{children:"Int"}),(0,r.jsx)(n.td,{children:"Number of returned elements (0 to 1000)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"offset"})}),(0,r.jsx)(n.td,{children:"Int"}),(0,r.jsxs)(n.td,{children:["Offset of returned elements (0 to 100.000). For higher offset, please use a different ",(0,r.jsx)(n.code,{children:"range"})," window (see below)."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"range"})}),(0,r.jsx)(n.td,{children:"Range"}),(0,r.jsx)(n.td,{children:"See below"})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"filters-by-user-identifier",children:"Filters by user identifier"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Field"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"type"})}),(0,r.jsx)(n.td,{children:"String"}),(0,r.jsxs)(n.td,{children:["Supported: ",(0,r.jsx)(n.code,{children:"response"})]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"key"})}),(0,r.jsx)(n.td,{children:"String"}),(0,r.jsxs)(n.td,{children:["Filtered entity: ",(0,r.jsx)(n.code,{children:"respondent_id"}),", ",(0,r.jsx)(n.code,{children:"respondent_alias"}),", ",(0,r.jsx)(n.code,{children:"respondent_segments"}),", ",(0,r.jsx)(n.code,{children:"channel_id"}),", ",(0,r.jsx)(n.code,{children:"raw"}),", ",(0,r.jsx)(n.code,{children:"language"}),", ",(0,r.jsx)(n.code,{children:"completion"})]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"operator"})}),(0,r.jsx)(n.td,{children:"String"}),(0,r.jsxs)(n.td,{children:["Comparaison operator: ",(0,r.jsx)(n.code,{children:"eq"}),", ",(0,r.jsx)(n.code,{children:"neq"}),", ",(0,r.jsx)(n.code,{children:"in"}),", ",(0,r.jsx)(n.code,{children:"not_in"}),", ",(0,r.jsx)(n.code,{children:"not_null"}),", ",(0,r.jsx)(n.code,{children:"null"}),", ",(0,r.jsx)(n.code,{children:"contains"}),", ",(0,r.jsx)(n.code,{children:"not_contains"}),", ",(0,r.jsx)(n.code,{children:"before"}),", ",(0,r.jsx)(n.code,{children:"after"}),", ",(0,r.jsx)(n.code,{children:"lt"}),", ",(0,r.jsx)(n.code,{children:"gt"}),". Available operators may vary uppon requested data"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"value"})}),(0,r.jsx)(n.td,{children:"Any"}),(0,r.jsx)(n.td,{children:"Value to pass as an argument"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"values"})}),(0,r.jsx)(n.td,{children:"List of any"}),(0,r.jsx)(n.td,{children:"Values to pass as an argument"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"a-few-examples",children:"A few examples:"}),"\n",(0,r.jsx)(n.p,{children:"Fetch by screeb id:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{ "type": "response", "key": "respondent_id", "operator": "eq", "value": "9565ac03-df6f-49b9-b4ff-9e20e8cb6bbf" }\n'})}),"\n",(0,r.jsx)(n.p,{children:"Fetch by user alias:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{ "type": "response", "key": "respondent_aliases", "operator": "eq", "value": "samuel@screeb.app" }\n{ "type": "response", "key": "respondent_aliases", "operator": "contains", "value": "@apple.com" }\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Fetch responses created by users part of segment ",(0,r.jsx)(n.code,{children:"79ef68c0-2022-4b15-b48b-e95ba4cacf80"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{ "type": "response", "key": "respondent_segments", "operator": "in", "values": ["79ef68c0-2022-4b15-b48b-e95ba4cacf80"] }\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Fetch responses created on iOS (here channel_id is ",(0,r.jsx)(n.code,{children:"b4ece0cd-4e11-4a9d-a58d-c2519ee98605"}),"):"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{ "type": "response", "key": "channel_id", "operator": "eq", "value": "b4ece0cd-4e11-4a9d-a58d-c2519ee98605" }\n'})}),"\n",(0,r.jsx)(n.p,{children:"Fetch by keyword:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{ "type": "response", "key": "raw", "operator": "contains", "value": "problem" }\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Fetch by ",(0,r.jsx)(n.code,{children:"language"})," (exclude English):"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{ "type": "response", "key": "language", "operator": "not_in", "values": ["en"] }\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Fetch by ",(0,r.jsx)(n.code,{children:"completion"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{ "type": "response", "key": "completion", "operator": "eq", "value": "not_started" }\n{ "type": "response", "key": "completion", "operator": "in", "values": ["partially_completed", "fully_completed"] }\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Fetch by hidden field ",(0,r.jsx)(n.code,{children:"ltv"})," greater than ",(0,r.jsx)(n.code,{children:"100$"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{ "type": "response.hidden_field", "key": "ltv", "operator": "gt", "value": "100" }\n'})}),"\n",(0,r.jsx)(n.h3,{id:"range",children:"Range"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Field"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"field"})}),(0,r.jsx)(n.td,{children:"String"}),(0,r.jsxs)(n.td,{children:["Supported: ",(0,r.jsx)(n.code,{children:"created_at"})]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"start"})}),(0,r.jsx)(n.td,{children:"String in ISO 8601 format"}),(0,r.jsx)(n.td,{children:"Date of creation of the first response"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"end"})}),(0,r.jsx)(n.td,{children:"String in ISO 8601 format"}),(0,r.jsx)(n.td,{children:"Date of creation of the last response"})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"output",children:"Output"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"hits.total.value"})," contains the number of responses matching the criteria."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"hits.responses"})," is a list of responses."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "took": 282,\n  "hits": {\n    "total": {\n      "value": 123456\n    },\n    "responses": [\n      {\n        "id": "735f7cea-c84a-4d98-8a7f-e807a8763fc0",               // unique response id\n        "doc_type": "response",\n        "org_id": "6c1e7576-ef59-4673-a107-0fc64e9bf6f3",\n        "channel_id": "92486e31-7e9c-44b6-8af4-4643ef3ee4b6",\n        "respondent_id": "8a85c1f9-0b7a-46e0-b262-47ab45bf5f9b",    // screeb user id\n        "respondent_aliases": [\n          "8a85c1f9-0b7a-46e0-b262-47ab45bf5f9b",                   // screeb user id\n          "samuel@screeb.app"                                       // customer user id\n        ],\n        "survey_id": "a8d3950a-88d4-4662-8099-0ddeb3de98b4",\n        "scenario_id": "cf320d79-f8c6-43b6-ba4a-9faa57682507",\n        "language": "fr",\n        "locale": "fr-fr",\n        "question_id_path": "0d6496d0",\n        "question_correlation_id_path": "84338f3a",\n        "action_id_path": "53e0da62",\n        "action_correlation_id_path": "03a9ef5d",\n        "group_ids": [\n          "a84a92f6-9389-49e2-a011-b1bfa7fa5227"\n        ],\n        "hidden_fields": [\n          {\n            "t": 0,\n            "v_s": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.6 Safari/605.1.15",\n            "key": "user_agent"\n          },\n          {\n            "t": 0,\n            "v_s": "other",\n            "key": "os"\n          },\n          {\n            "t": 0,\n            "v_s": "tablet",\n            "key": "support"\n          },\n          {\n            "t": 0,\n            "v_s": "desktop",\n            "key": "platform"\n          },\n          {\n            "t": 2,\n            "v_d": -120,\n            "key": "timezone"\n          },\n          {\n            "t": 0,\n            "v_s": "fr-FR",\n            "key": "locale"\n          },\n          {\n            "t": 0,\n            "v_s": "fr",\n            "key": "country"\n          },\n          {\n            "t": 1,\n            "v_b": true,\n            "key": "logged_in"\n          },\n          {\n            "t": 0,\n            "v_s": "Home page",\n            "key": "page_title"\n          }\n        ],\n        "emotions": {\n          "fear": null,\n          "sadness": null,\n          "anger": null,\n          "joy": null\n        },\n        "answers": [        // a list of answers identified by question_id\n          {\n            "t": 0,\n            "v_s": "This feature didn\'t work on my computer",       // user answer in its own language\n            "cta_type": "input",                                    // question type\n            "key": "84338f3a-aad4-44eb-9d49-f6a894343867",\n            "question_id": "0d6496d0-7f3c-4ef3-bd71-b37b5a81e6d1",\n            "question_correlation_id": "84338f3a-aad4-44eb-9d49-f6a894343867",\n            "action_id": "53e0da62-e621-4ca0-9647-209a3bd4dde3",\n            "action_correlation_id": "03a9ef5d-b33b-4ffa-994b-2ca8c5edc241",\n            "answer_id": "521b7556-eff1-4bb8-bcb1-3d2281d5dfb6",\n            "tags": null,\n            "lang": null,\n            "translations": [],                         // translation of user input (if feature is activated)\n            "time": "2023-09-11T07:37:56.000444Z"\n          }\n        ],\n        "completion": "fully_completed",                // "not_started" or "partially_completed" or "fully_completed"\n        "active": false,\n        "end_reason": "completed",                      // is empty when response is active\n        "ended_at": "2023-09-11T07:37:56.167436Z",      // is empty when response is active\n        "created_at": "2023-09-11T07:37:49.406943Z",\n        "updated_at": "2023-09-11T07:37:56.256519Z",\n        "last_answer_at": "2023-09-11T07:37:56.000444Z"\n      }\n    ]\n  }\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"response-summary",children:"Response summary"}),"\n",(0,r.jsxs)(n.p,{children:["The response summary API is accessible via the following endpoint: ",(0,r.jsx)(n.code,{children:"SEARCH"})," - ",(0,r.jsx)(n.a,{href:"https://api.screeb.app/1.0/survey/:survey_ids/response/summary",children:"https://api.screeb.app/1.0/survey/:survey_ids/response/summary"})]}),"\n",(0,r.jsx)(n.h3,{id:"example-1",children:"Example"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'curl -X SEARCH https://api.screeb.app/1.0/survey/*/response \\\n    -H "Content-Type: application/json" \\\n    -H "Authorization: Bearer xxxxxxxxxxxxxxxxxxxxxxxxxxxx" \\\n    -d \'{\n        "filters_bool": "AND",\n        "filters": [\n            { ... },\n            { ... }\n        ],\n        "range": {\n            "field": "created_at",\n            "start": "2020-01-01T00:00:00.000Z",\n            "end": "2023-12-31T00:00:00.000Z"\n        }\n    }\'\n'})}),"\n",(0,r.jsx)(n.p,{children:"Output:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n    "ces_avg": 3,\n    "ces_details": {\n        "1": 79,\n        "2": 68,\n        "3": 71,\n        "4": 59,\n        "5": 62,\n        "6": 59,\n        "7": 67\n    },\n\n    "csat_avg": 3,\n    "csat_details": {\n        "1": 71,\n        "2": 75,\n        "3": 94,\n        "4": 83,\n        "5": 283\n    },\n\n    "nps_details": {\n        "1": 45,\n        "2": 50,\n        "3": 52,\n        "4": 59,\n        "5": 56,\n        "6": 50,\n        "7": 48,\n        "8": 65,\n        "9": 39,\n        "10": 46\n    },\n    "nps_groups": {\n      "detractor": 312,\n      "neutral": 113,\n      "promotor": 85,\n      "total": 510\n    },\n    "nps_score": 0,\n\n    "completion": {\n        "fully_completed": 1155,\n        "not_started": 1900,\n        "partially_completed": 972\n    },\n    "end_reasons": {\n        "closed": 2710,\n        "completed": 1155,\n        "expired": 157,\n        "interrupted": 4\n    },\n    "languages": {\n        "en": 4027\n    },\n    "supports": {\n      "desktop": 1714,\n      "mobile": 2313\n    }\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"aggregate-responses",children:"Aggregate responses"}),"\n",(0,r.jsxs)(n.p,{children:["The response aggregation API is accessible via the following endpoint: ",(0,r.jsx)(n.code,{children:"SEARCH"})," - ",(0,r.jsx)(n.a,{href:"https://api.screeb.app/1.0/survey/:survey_ids/response/aggregation",children:"https://api.screeb.app/1.0/survey/:survey_ids/response/aggregation"})]}),"\n",(0,r.jsx)(n.h3,{id:"count-responses",children:"Count responses"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"hits.total.value"})," field described above might not be sufficient for grouping data per completion status, user platform..."]}),"\n",(0,r.jsxs)(n.p,{children:["A ",(0,r.jsx)(n.code,{children:"group_by"})," argument can be added to the request. Eg:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n    "filters_bool": "AND",\n    "filters": [\n        // any filters described previously\n        { "type": "response", "key": "channel_id", "operator": "eq", "value": "b4ece0cd-4e11-4a9d-a58d-c2519ee98605" }\n    ],\n    "range": {\n        "field": "created_at",\n        "start": "2020-01-01T00:00:00.000Z",\n        "end": "2023-12-31T00:00:00.000Z"\n    },\n    "group_by": [\n        { "field": "completion" }   // <- count responses by completion status\n    ]\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:"The group_by argument supports multiple rules. The order matters. Eg:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n    "filters_bool": "AND",\n    "filters": [\n        // any filters described previously\n        { "type": "response", "key": "channel_id", "operator": "eq", "value": "b4ece0cd-4e11-4a9d-a58d-c2519ee98605" }\n    ],\n    "range": {\n        "field": "created_at",\n        "start": "2020-01-01T00:00:00.000Z",\n        "end": "2023-12-31T00:00:00.000Z"\n    },\n    "group_by": [\n        // count responses by completion status and per month\n        { "field": "completion" },\n        {\n            "field": "created_at",\n            "date_histogram_min_interval": "month",\n            "date_histogram_buckets": 20\n        }\n    ]\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:"Here is the full list of aggregation:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Group by date:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n    "field": "created_at",                   // either created_at, ended_at or last_activity_at\n    "date_histogram_min_interval": "day",    // month, day or hour\n    "date_histogram_buckets": 10             // number points in the timeseries (1 to 100) - eg: 10 points in a 1 month interval will group per 3 days\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Group by completion status:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n    "field": "completion"\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Group by survey_id:"})}),"\n",(0,r.jsxs)(n.p,{children:["(should be used with a wildcard request: ",(0,r.jsx)(n.a,{href:"https://api.screeb.app/1.0/survey/*/response",children:"https://api.screeb.app/1.0/survey/*/response"}),")"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n    "field": "survey_id"\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Group by response end reason:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n    "field": "end_reason"\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Group by hidden field:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n    "field": "hidden_field",\n    "hidden_field_key": "country"\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Group by answer:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n    "field": "answer",\n    "question_id": "23c4d464-699b-4fc6-851b-c3e7da6af853"       // <- the correlation id of the question\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"support",children:"Support"}),"\n",(0,r.jsxs)(n.p,{children:["If you have any questions or additional requirements, feel free to open an issue or contact ",(0,r.jsx)(n.a,{href:"mailto:samuel@screeb.app",children:"samuel@screeb.app"}),"."]})]})}function p(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>a});var r=s(6540);const d={},t=r.createContext(d);function i(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:i(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);