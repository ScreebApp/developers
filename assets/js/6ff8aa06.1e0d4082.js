"use strict";(self.webpackChunkscreeb_docs=self.webpackChunkscreeb_docs||[]).push([[9481],{723:(e,d,s)=>{s.r(d),s.d(d,{assets:()=>l,contentTitle:()=>r,default:()=>o,frontMatter:()=>i,metadata:()=>c,toc:()=>h});var n=s(4848),t=s(8453);const i={sidebar_position:5},r="Stitch v2.0.0",c={id:"stitch-v2.0.0",title:"Stitch v2.0.0",description:"On visitor action (such as click on a button, scoring, input...) Screeb can send a request to an external platform, containing the response data.",source:"@site/docs/api-and-connectors/stitch-v2.0.0.md",sourceDirName:".",slug:"/stitch-v2.0.0",permalink:"/api-and-connectors/stitch-v2.0.0",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"docSidebar",previous:{title:"Stitch v1.0.0",permalink:"/api-and-connectors/stitch"},next:{title:"Releases API",permalink:"/api-and-connectors/releases-api"}},l={},h=[{value:"Entities",id:"entities",level:2},{value:"Hook types",id:"hook-types",level:2},{value:"Migrate from v1.3.0",id:"migrate-from-v130",level:2},{value:"Warehouse schema",id:"warehouse-schema",level:2},{value:"Tables",id:"tables",level:3},{value:"<code>data</code> table",id:"data-table",level:3},{value:"<code>data__response__items</code> table",id:"data__response__items-table",level:3},{value:"<code>data__response__answer_fields</code> table",id:"data__response__answer_fields-table",level:3},{value:"<code>data__response__hidden_fields</code> + <code>data__response__context</code> + <code>data__user__properties</code> table",id:"data__response__hidden_fields--data__response__context--data__user__properties-table",level:3},{value:"Support",id:"support",level:2}];function x(e){const d={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(d.h1,{id:"stitch-v200",children:"Stitch v2.0.0"}),"\n",(0,n.jsx)(d.p,{children:"On visitor action (such as click on a button, scoring, input...) Screeb can send a request to an external platform, containing the response data."}),"\n",(0,n.jsx)(d.h2,{id:"entities",children:"Entities"}),"\n",(0,n.jsxs)(d.ul,{children:["\n",(0,n.jsx)(d.li,{children:"Organization: A Screeb account, shared by many Screeb users of your company"}),"\n",(0,n.jsx)(d.li,{children:"Channel: A distribution channel for your survey (Javascript SDK, Android SDK, iOS SDK...)"}),"\n",(0,n.jsx)(d.li,{children:"Survey"}),"\n",(0,n.jsx)(d.li,{children:"Survey scenario: A versioned survey: on survey update, your flow is saved in a new scenario. New users will see the last scenario."}),"\n",(0,n.jsx)(d.li,{children:"User: Information about the visitor"}),"\n",(0,n.jsx)(d.li,{children:"Response: A response is a chain of question+answers. A user sometimes has many responses to a single survey."}),"\n",(0,n.jsx)(d.li,{children:"Question"}),"\n",(0,n.jsx)(d.li,{children:"Answer: An answer is part of a response. Each answer is associated with a question."}),"\n",(0,n.jsx)(d.li,{children:"Field: An answer may have many fields (eg: multiple choices question)"}),"\n"]}),"\n",(0,n.jsx)(d.h2,{id:"hook-types",children:"Hook types"}),"\n",(0,n.jsx)(d.p,{children:"You can send 3 different event types into your datawarehouse:"}),"\n",(0,n.jsxs)(d.ul,{children:["\n",(0,n.jsx)(d.li,{children:"On survey display: a survey is shown to visitors, but no question is replied. You will get notified even if no response is given."}),"\n",(0,n.jsx)(d.li,{children:"On question answered: a question has been replied. This webhook will be triggered for each question of a single survey."}),"\n",(0,n.jsx)(d.li,{children:"On response end: a survey has been closed or fully replied to by the user."}),"\n"]}),"\n",(0,n.jsx)(d.h2,{id:"migrate-from-v130",children:"Migrate from v1.3.0"}),"\n",(0,n.jsxs)(d.ul,{children:["\n",(0,n.jsxs)(d.li,{children:["Each ",(0,n.jsx)(d.code,{children:"correlation_id"})," has been renamed ",(0,n.jsx)(d.code,{children:"id"}),", and the previous ",(0,n.jsx)(d.code,{children:"id"})," property is not available anymore."]}),"\n",(0,n.jsxs)(d.li,{children:[(0,n.jsx)(d.code,{children:"payload.respondent"})," has been renamed ",(0,n.jsx)(d.code,{children:"payload.user"})]}),"\n",(0,n.jsxs)(d.li,{children:[(0,n.jsx)(d.code,{children:"payload.response.answer.field"})," has been converted into a array: ",(0,n.jsx)(d.code,{children:"payload.response.answer.fields"})]}),"\n"]}),"\n",(0,n.jsx)(d.h2,{id:"warehouse-schema",children:"Warehouse schema"}),"\n",(0,n.jsx)(d.p,{children:"Stitch delivers the responses to your surveys using the following database schema. In case of schema change, Stitch is in charge of updating columns in your datawarehouse."}),"\n",(0,n.jsxs)(d.p,{children:["Stitch requires an immutable primary key for identifying rows. Screeb uses ",(0,n.jsx)(d.code,{children:"event_id"})," as primary key."]}),"\n",(0,n.jsx)(d.h3,{id:"tables",children:"Tables"}),"\n",(0,n.jsxs)(d.table,{children:[(0,n.jsx)(d.thead,{children:(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.th,{children:"Table name"}),(0,n.jsx)(d.th,{children:"Description"})]})}),(0,n.jsxs)(d.tbody,{children:[(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"<integration>.data"})}),(0,n.jsx)(d.td,{children:"A table with response metadata (organization, channel, survey...)."})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"<integration>.data__response__items"})}),(0,n.jsx)(d.td,{children:"A table with pairs of questions and answers."})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsxs)(d.td,{children:[(0,n.jsx)(d.code,{children:"<integration>.data__response__answer_fields"})," or ",(0,n.jsx)(d.code,{children:"<integration>.data__response__items_answer_fields"})]}),(0,n.jsx)(d.td,{children:"A table with question answer."})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"<integration>.data__response__hidden_fields"})}),(0,n.jsx)(d.td,{children:"A table with hidden fields linked to the response."})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"<integration>.data__response__context"})}),(0,n.jsx)(d.td,{children:"A table with context data linked to the response."})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"<integration>.data__user__properties"})}),(0,n.jsx)(d.td,{children:"A table user properties snapshot linked to the response."})]})]})]}),"\n",(0,n.jsxs)(d.h3,{id:"data-table",children:[(0,n.jsx)(d.code,{children:"data"})," table"]}),"\n",(0,n.jsxs)(d.table,{children:[(0,n.jsx)(d.thead,{children:(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.th,{children:"Column"}),(0,n.jsx)(d.th,{children:"Type"}),(0,n.jsx)(d.th,{children:"Description"})]})}),(0,n.jsxs)(d.tbody,{children:[(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"_sdc_batched_at"})}),(0,n.jsx)(d.td,{children:"timestamp with time zone"}),(0,n.jsx)(d.td,{children:"Stitch internal"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"_sdc_received_at"})}),(0,n.jsx)(d.td,{children:"timestamp with time zone"}),(0,n.jsx)(d.td,{children:"Stitch internal"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"_sdc_sequence"})}),(0,n.jsx)(d.td,{children:"bigint"}),(0,n.jsx)(d.td,{children:"Stitch internal"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"_sdc_table_version"})}),(0,n.jsx)(d.td,{children:"bigint"}),(0,n.jsx)(d.td,{children:"Stitch internal"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"event_id"})}),(0,n.jsx)(d.td,{children:"text"}),(0,n.jsx)(d.td,{children:"Unique id for this event (same id in retry request)"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"event_type"})}),(0,n.jsx)(d.td,{children:"text"}),(0,n.jsx)(d.td,{children:"Type of event sent over webhook"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"event_time"})}),(0,n.jsx)(d.td,{children:"text"}),(0,n.jsx)(d.td,{children:"Date of event"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"event_time_ms"})}),(0,n.jsx)(d.td,{children:"bigint"}),(0,n.jsx)(d.td,{children:"Date of event in millisecond"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"retry_count"})}),(0,n.jsx)(d.td,{children:"bigint"}),(0,n.jsx)(d.td,{children:"Nth request for this event"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"version"})}),(0,n.jsx)(d.td,{children:"text"}),(0,n.jsx)(d.td,{children:"Semver version of the webhook payload"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"organization__id"})}),(0,n.jsx)(d.td,{children:"text"}),(0,n.jsx)(d.td,{children:"Unique identifier for the organization"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"organization__name"})}),(0,n.jsx)(d.td,{children:"text"}),(0,n.jsx)(d.td,{children:"Name of the Screeb account"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"channel__id"})}),(0,n.jsx)(d.td,{children:"text"}),(0,n.jsx)(d.td,{children:"Unique identifier for the channel"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"channel__type"})}),(0,n.jsx)(d.td,{children:"text"}),(0,n.jsx)(d.td,{children:"Channel type (widget, android, ios, hosted-page...)"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"user__anonymous_id"})}),(0,n.jsx)(d.td,{children:"text"}),(0,n.jsx)(d.td,{children:"Main user identifier"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"user__user_id"})}),(0,n.jsx)(d.td,{children:"text"}),(0,n.jsx)(d.td,{children:"Screeb identifier for the user"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"user__name"})}),(0,n.jsx)(d.td,{children:"text"}),(0,n.jsx)(d.td,{children:"User name (when available in identity properties)"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"user__email"})}),(0,n.jsx)(d.td,{children:"text"}),(0,n.jsx)(d.td,{children:"User email (when available in identity properties)"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"user__group_names"})}),(0,n.jsx)(d.td,{children:"[]text"}),(0,n.jsx)(d.td,{children:"User groups"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"survey__id"})}),(0,n.jsx)(d.td,{children:"text"}),(0,n.jsx)(d.td,{children:"Unique identifier for the survey"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"survey__name"})}),(0,n.jsx)(d.td,{children:"text"}),(0,n.jsx)(d.td,{children:"Name of the survey"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"survey__scenario_id"})}),(0,n.jsx)(d.td,{children:"text"}),(0,n.jsx)(d.td,{children:"Unique identifier for the survey scenario"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"survey__scenario_time"})}),(0,n.jsx)(d.td,{children:"text"}),(0,n.jsx)(d.td,{children:"Date of the scenario edition"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"survey__scenario_time_ms"})}),(0,n.jsx)(d.td,{children:"bigint"}),(0,n.jsx)(d.td,{children:"Timestamp of the scenario edition"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"survey__scenario_version"})}),(0,n.jsx)(d.td,{children:"bigint"}),(0,n.jsx)(d.td,{children:"Version number of the survey scenario"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"response__id"})}),(0,n.jsx)(d.td,{children:"text"}),(0,n.jsx)(d.td,{children:"Unique identifier for the response"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"response__time"})}),(0,n.jsx)(d.td,{children:"text"}),(0,n.jsx)(d.td,{children:"Date of response start"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"response__time_ms"})}),(0,n.jsx)(d.td,{children:"bigint"}),(0,n.jsx)(d.td,{children:"Timestamp of response start in millisecond"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"response__time_to_complete_second"})}),(0,n.jsx)(d.td,{children:"bigint"}),(0,n.jsxs)(d.td,{children:["Seconds between survey display and response end (when event_type == ",(0,n.jsx)(d.code,{children:"response.ended"}),")"]})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"response__locale"})}),(0,n.jsx)(d.td,{children:"text"}),(0,n.jsx)(d.td,{children:"Locale of the user"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"response__tags"})}),(0,n.jsx)(d.td,{children:"[]text"}),(0,n.jsx)(d.td,{children:"Tags of the response"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"response__question__id"})}),(0,n.jsx)(d.td,{children:"text"}),(0,n.jsx)(d.td,{children:"Unique identifier for the question"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"response__question__type"})}),(0,n.jsx)(d.td,{children:"text"}),(0,n.jsx)(d.td,{children:"Type of question"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"response__question__title"})}),(0,n.jsx)(d.td,{children:"text"}),(0,n.jsx)(d.td,{children:"Label of the question"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"response__answer__replied_at"})}),(0,n.jsx)(d.td,{children:"text"}),(0,n.jsx)(d.td,{children:"Date of the answer"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"response__answer__replied_at_ms"})}),(0,n.jsx)(d.td,{children:"bigint"}),(0,n.jsx)(d.td,{children:"Timestamp of the answer (millisecond)"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"response__answer__tags"})}),(0,n.jsx)(d.td,{children:"[]text"}),(0,n.jsx)(d.td,{children:"Tags of the answer"})]})]})]}),"\n",(0,n.jsxs)(d.h3,{id:"data__response__items-table",children:[(0,n.jsx)(d.code,{children:"data__response__items"})," table"]}),"\n",(0,n.jsxs)(d.table,{children:[(0,n.jsx)(d.thead,{children:(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.th,{children:"Column"}),(0,n.jsx)(d.th,{children:"Type"}),(0,n.jsx)(d.th,{children:"Description"})]})}),(0,n.jsxs)(d.tbody,{children:[(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"_sdc_batched_at"})}),(0,n.jsx)(d.td,{children:"timestamp with time zone"}),(0,n.jsx)(d.td,{children:"Stitch internal"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"_sdc_level_0_id"})}),(0,n.jsx)(d.td,{children:"bigint"}),(0,n.jsx)(d.td,{children:"Stitch internal"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"_sdc_received_at"})}),(0,n.jsx)(d.td,{children:"timestamp with time zone"}),(0,n.jsx)(d.td,{children:"Stitch internal"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"_sdc_sequence"})}),(0,n.jsx)(d.td,{children:"bigint"}),(0,n.jsx)(d.td,{children:"Stitch internal"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"_sdc_source_key_event_id"})}),(0,n.jsx)(d.td,{children:"text"}),(0,n.jsx)(d.td,{children:"Stitch internal"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"_sdc_table_version"})}),(0,n.jsx)(d.td,{children:"bigint"}),(0,n.jsx)(d.td,{children:"Stitch internal"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"question__id"})}),(0,n.jsx)(d.td,{children:"text"}),(0,n.jsx)(d.td,{children:"Unique identifier for the question"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"question__type"})}),(0,n.jsx)(d.td,{children:"text"}),(0,n.jsx)(d.td,{children:"Type of question"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"question__title"})}),(0,n.jsx)(d.td,{children:"text"}),(0,n.jsx)(d.td,{children:"Label of the question"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"answer__replied_at"})}),(0,n.jsx)(d.td,{children:"text"}),(0,n.jsx)(d.td,{children:"Date of the answer"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"answer__replied_at_ms"})}),(0,n.jsx)(d.td,{children:"bigint"}),(0,n.jsx)(d.td,{children:"Timestamp of the answer (millisecond)"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"answer__tags"})}),(0,n.jsx)(d.td,{children:"[]text"}),(0,n.jsx)(d.td,{children:"Tags of the answer"})]})]})]}),"\n",(0,n.jsxs)(d.h3,{id:"data__response__answer_fields-table",children:[(0,n.jsx)(d.code,{children:"data__response__answer_fields"})," table"]}),"\n",(0,n.jsxs)(d.table,{children:[(0,n.jsx)(d.thead,{children:(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.th,{children:"Column"}),(0,n.jsx)(d.th,{children:"Type"}),(0,n.jsx)(d.th,{children:"Description"})]})}),(0,n.jsxs)(d.tbody,{children:[(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"_sdc_batched_at"})}),(0,n.jsx)(d.td,{children:"timestamp with time zone"}),(0,n.jsx)(d.td,{children:"Stitch internal"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"_sdc_level_0_id"})}),(0,n.jsx)(d.td,{children:"bigint"}),(0,n.jsx)(d.td,{children:"Stitch internal"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"_sdc_received_at"})}),(0,n.jsx)(d.td,{children:"timestamp with time zone"}),(0,n.jsx)(d.td,{children:"Stitch internal"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"_sdc_sequence"})}),(0,n.jsx)(d.td,{children:"bigint"}),(0,n.jsx)(d.td,{children:"Stitch internal"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"_sdc_source_key_event_id"})}),(0,n.jsx)(d.td,{children:"text"}),(0,n.jsx)(d.td,{children:"Stitch internal"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"_sdc_table_version"})}),(0,n.jsx)(d.td,{children:"bigint"}),(0,n.jsx)(d.td,{children:"Stitch internal"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"id"})}),(0,n.jsx)(d.td,{children:"text"}),(0,n.jsx)(d.td,{children:"Unique identifier for the field (a button, a score, an input...)"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"type"})}),(0,n.jsx)(d.td,{children:"text"}),(0,n.jsx)(d.td,{children:'Value type: "string", "number", "time", "boolean"...'})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"number"})}),(0,n.jsx)(d.td,{children:"bigint"}),(0,n.jsx)(d.td,{children:"Value of the field (numeric)"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"bool"})}),(0,n.jsx)(d.td,{children:"boolean"}),(0,n.jsx)(d.td,{children:"Value of the field (boolean)"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"string"})}),(0,n.jsx)(d.td,{children:"text"}),(0,n.jsx)(d.td,{children:"Value of the field (string)"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"time"})}),(0,n.jsx)(d.td,{children:"text"}),(0,n.jsx)(d.td,{children:"Value of the field (string)"})]})]})]}),"\n",(0,n.jsxs)(d.h3,{id:"data__response__hidden_fields--data__response__context--data__user__properties-table",children:[(0,n.jsx)(d.code,{children:"data__response__hidden_fields"})," + ",(0,n.jsx)(d.code,{children:"data__response__context"})," + ",(0,n.jsx)(d.code,{children:"data__user__properties"})," table"]}),"\n",(0,n.jsxs)(d.table,{children:[(0,n.jsx)(d.thead,{children:(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.th,{children:"Column"}),(0,n.jsx)(d.th,{children:"Type"}),(0,n.jsx)(d.th,{children:"Description"})]})}),(0,n.jsxs)(d.tbody,{children:[(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"_sdc_batched_at"})}),(0,n.jsx)(d.td,{children:"timestamp with time zone"}),(0,n.jsx)(d.td,{children:"Stitch internal"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"_sdc_level_0_id"})}),(0,n.jsx)(d.td,{children:"bigint"}),(0,n.jsx)(d.td,{children:"Stitch internal"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"_sdc_received_at"})}),(0,n.jsx)(d.td,{children:"timestamp with time zone"}),(0,n.jsx)(d.td,{children:"Stitch internal"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"_sdc_sequence"})}),(0,n.jsx)(d.td,{children:"bigint"}),(0,n.jsx)(d.td,{children:"Stitch internal"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"_sdc_source_key_event_id"})}),(0,n.jsx)(d.td,{children:"text"}),(0,n.jsx)(d.td,{children:"Stitch internal"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"_sdc_table_version"})}),(0,n.jsx)(d.td,{children:"bigint"}),(0,n.jsx)(d.td,{children:"Stitch internal"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"name"})}),(0,n.jsx)(d.td,{children:"text"}),(0,n.jsx)(d.td,{children:"Hidden field key"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"type"})}),(0,n.jsx)(d.td,{children:"text"}),(0,n.jsx)(d.td,{children:'Hidden field value type: "string", "number", "time", "boolean"'})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"value__number"})}),(0,n.jsx)(d.td,{children:"bigint"}),(0,n.jsx)(d.td,{children:"Value of the hidden field (numeric)"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"value__bo"})}),(0,n.jsx)(d.td,{children:"boolean"}),(0,n.jsx)(d.td,{children:"Value of the hidden field (boolean)"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"value__st"})}),(0,n.jsx)(d.td,{children:"text"}),(0,n.jsx)(d.td,{children:"Value of the hidden field (string)"})]})]})]}),"\n",(0,n.jsx)(d.h2,{id:"support",children:"Support"}),"\n",(0,n.jsxs)(d.p,{children:["If you have any questions or additional requirements, feel free to open an issue or contact ",(0,n.jsx)(d.a,{href:"mailto:samuel@screeb.app",children:"samuel@screeb.app"}),"."]})]})}function o(e={}){const{wrapper:d}={...(0,t.R)(),...e.components};return d?(0,n.jsx)(d,{...e,children:(0,n.jsx)(x,{...e})}):x(e)}},8453:(e,d,s)=>{s.d(d,{R:()=>r,x:()=>c});var n=s(6540);const t={},i=n.createContext(t);function r(e){const d=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(d):{...d,...e}}),[d,e])}function c(e){let d;return d=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),n.createElement(i.Provider,{value:d},e.children)}}}]);