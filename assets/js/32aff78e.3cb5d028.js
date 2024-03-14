"use strict";(self.webpackChunkscreeb_docs=self.webpackChunkscreeb_docs||[]).push([[1561],{5808:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>t,default:()=>h,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var i=s(4848),r=s(8453);const a={sidebar_class_name:"hidden"},t="Device tracking",c={id:"device-tracking",title:"Device tracking",description:"2 types of tracking are available in Screeb:",source:"@site/docs/sdk-js/device-tracking.md",sourceDirName:".",slug:"/device-tracking",permalink:"/sdk-js/device-tracking",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{sidebar_class_name:"hidden"},sidebar:"docSidebar",previous:{title:"Troubleshooting",permalink:"/sdk-js/troubleshooting"},next:{title:"Feature Flagging",permalink:"/sdk-js/feature-flagging"}},d={},l=[{value:"Summary",id:"summary",level:3},{value:"Screeb tracking",id:"screeb-tracking",level:2},{value:"1.1 Javascript Tag",id:"11-javascript-tag",level:3},{value:"1.2 Android SDK",id:"12-android-sdk",level:3},{value:"1.3 iOS SDK",id:"13-ios-sdk",level:3},{value:"1.4 ReactNative SDK",id:"14-reactnative-sdk",level:3},{value:"1.5 Flutter SDK",id:"15-flutter-sdk",level:3},{value:"Device tracking",id:"device-tracking-1",level:2},{value:"2.1 Javascript Tag",id:"21-javascript-tag",level:3},{value:"2.2 Android SDK",id:"22-android-sdk",level:3},{value:"2.3 iOS SDK",id:"23-ios-sdk",level:3},{value:"2.4 ReactNative SDK",id:"24-reactnative-sdk",level:3},{value:"2.5 Flutter SDK",id:"25-flutter-sdk",level:3},{value:"Screeb tracking vs device tracking",id:"screeb-tracking-vs-device-tracking",level:2}];function o(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"device-tracking",children:"Device tracking"}),"\n",(0,i.jsx)(n.p,{children:"2 types of tracking are available in Screeb:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Screeb tracking: events are transmitted to Screeb backend and are available for analytics in the admin panel."}),"\n",(0,i.jsx)(n.li,{children:"Device tracking: events are stored into localStorage (browser) or internal device memory (mobile)."}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"summary",children:"Summary"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"#screeb-tracking",children:"Screeb tracking"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#11-javascript-tag",children:"Javascript tag"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#12-android-sdk",children:"Android SDK"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#13-ios-sdk",children:"iOS SDK"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#14-reactnative-sdk",children:"ReactNative SDK"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#15-flutter-sdk",children:"Flutter SDK"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"#device-tracking",children:"Device tracking"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#21-javascript-tag",children:"Javascript tag"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#22-android-sdk",children:"Android SDK"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#23-ios-sdk",children:"iOS SDK"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#24-reactnative-sdk",children:"ReactNative SDK"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#25-flutter-sdk",children:"Flutter SDK"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"screeb-tracking",children:"Screeb tracking"}),"\n",(0,i.jsx)(n.p,{children:"You will be able to collect events from multiple devices and attach it to a unique user identity. These data are made available to Screeb analytics."}),"\n",(0,i.jsx)(n.p,{children:"Triggering a survey on a user event can involve a ~20 seconds delay."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(1248).A+"",width:"885",height:"211"})}),"\n",(0,i.jsx)(n.h3,{id:"11-javascript-tag",children:"1.1 Javascript Tag"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"init"})," command:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"$screeb('init', '<website-id>', {\n  identity: {\n    properties: {\n      firstname: '<user-firstname>',\n      lastname: '<user-lastname>',\n      plan: '<user-plan>',\n      last_seen_at: new Date(),\n      authenticated: true,\n    }\n  }\n});\n"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"identity"})," command:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"$screeb('identity', 'abcd-1234', {\n  email: 'samuel@screeb.app',\n  age: 42,\n  logged: true,\n  signed_up_at: new Date(),\n});\n"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"identity.properties"})," command:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"$screeb('identity.properties', {\n  email: 'samuel@screeb.app',\n  age: 42,\n  logged: true,\n  signed_up_at: new Date(),\n});\n"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"event.track"})," command:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"$screeb('event.track', 'Product added to cart');\n"})}),"\n",(0,i.jsx)(n.p,{children:"Group assignation commands:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"$screeb('identity.group.assign', 'company', 'Apple');\n$screeb('identity.group.unassign', 'plan', 'Growth');\n"})}),"\n",(0,i.jsx)(n.h3,{id:"12-android-sdk",children:"1.2 Android SDK"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"initSDK"})," method:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",children:'Screeb.initSdk(this,\n    "<android-channel-id>",\n    "<unique-user-id>",          // optional\n    VisitorProperties().apply {  // optional\n        this["firstname"] = "<user-firstname>"\n        this["lastname"] = "<user-lastname>"\n        this["plan"] = "<user-plan>"\n        this["age"] = 42\n        this["logged_at"] = Date()\n        this["authenticated"] = true\n    }\n)\n'})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"setIdentity"})," method:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",children:'Screeb.setIdentity("<unique-user-id>", VisitorProperties().apply {\n    this["firstname"] = "<user-firstname>"\n    this["lastname"] = "<user-lastname>"\n    this["plan"] = "<user-plan>"\n    this["age"] = 42\n    this["logged_at"] = Date()\n    this["authenticated"] = true\n})\n'})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"setProperties"})," method:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",children:'Screeb.setProperties(\n    VisitorProperties().apply {\n        this["firstname"] = "<user-firstname>"\n        this["lastname"] = "<user-lastname>"\n        this["plan"] = "<user-plan>"\n        this["age"] = 42\n        this["logged_at"] = Date()\n        this["authenticated"] = true\n    }\n)\n'})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Screeb.trackEvent"})," method:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",children:'Screeb.trackEvent("Product removed from cart")\n'})}),"\n",(0,i.jsx)(n.p,{children:"Group assignation commands:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",children:'Screeb.assignGroup("company", "Apple")\nScreeb.assignGroup("plan", "Growth")\n'})}),"\n",(0,i.jsx)(n.h3,{id:"13-ios-sdk",children:"1.3 iOS SDK"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"initSDK"})," method:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-swift",children:'Screeb.initSdk(\n   context: window?.rootViewController,\n   channelId: "<ios-channel-id>",\n   identity: "<user-id>", // optional\n   visitorProperty: ["age": AnyEncodable(12), "name": AnyEncodable("JohnDoe")] // optional\n)\n'})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"setIdentity"})," method:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-swift",children:'Screeb.setIdentity(uniqueVisitorId: "<unique-visitor-id>", visitorProperty: [\n    "age": AnyEncodable(27),\n    "category": AnyEncodable("cycle"),\n    "purchasedAt": AnyEncodable(Date())\n])\n'})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"setProperties"})," method:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-swift",children:'Screeb.visitorProperty(visitorProperty: [\n  "email" = AnyEncodable("clement@screeb.app"),\n  "age" = AnyEncodable(29),\n  "logged" = AnyEncodable(true),\n  "signed_up_at" = AnyEncodable(Date()),\n])\n'})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Screeb.trackEvent"})," method:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-swift",children:'Screeb.trackEvent(name: "Product removed from cart", trackingEventProperties: [:])\n'})}),"\n",(0,i.jsx)(n.p,{children:"Group assignation commands:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-swift",children:'Screeb.assignGroup(type: "company", name: "Apple")\nScreeb.unassignGroup(type: "plan", name: "Growth")\n'})}),"\n",(0,i.jsx)(n.h3,{id:"14-reactnative-sdk",children:"1.4 ReactNative SDK"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"initSDK"})," method:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"initSdk(\n  \"<android-channel-id>\",\n  \"<ios-channel-id>\",\n  \"<user-id>\",\n  {\n     'example-prop1': false,\n     'example-prop2': 29,\n     'example-prop3' : 'iPhone 13',\n  }\n);\n"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"setIdentity"})," method:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"setIdentity('abcd-1234', {\n    'example-prop1': false,\n    'example-prop2': 29,\n    'example-prop3': 'iPhone 13',\n});\n"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"setProperties"})," method:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"setProperties({\n    'example-prop1': false,\n    'example-prop2': 29,\n    'example-prop3': 'iPhone 13',\n});\n"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"trackEvent"})," method:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:'trackEvent("Product removed from cart");\n'})}),"\n",(0,i.jsx)(n.p,{children:"Group assignation methods:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:'assignGroup("company", "Apple");\nunassignGroup("plan", "Growth");\n'})}),"\n",(0,i.jsx)(n.h3,{id:"15-flutter-sdk",children:"1.5 Flutter SDK"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"initSDK"})," method:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-dart",children:"PluginScreeb.initSdk(\"<android-channel-id>\", \"<ios-channel-id>\", null, <String, dynamic>{\n    'isConnected': true,\n    'age': 27,\n    'company' : 'Screeb',\n    'technology' : 'iOS',\n    'flutterAccount' : true\n});\n"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"setIdentity"})," method:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-dart",children:"PluginScreeb.setIdentity(\"<user-id>\", <String, dynamic>{\n    'isConnected': true,\n    'age': 27,\n    'company' : 'Screeb',\n    'technology' : 'iOS',\n    'flutterAccount' : true\n});\n"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"setProperties"})," method:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-dart",children:"PluginScreeb.setProperties(\"<user-id>\", <String, dynamic>{\n    'isConnected': true,\n    'age': 27,\n    'company' : 'Screeb',\n    'technology' : 'iOS',\n    'flutterAccount' : true\n});\n"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"trackEvent"})," method:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-dart",children:'PluginScreeb.trackEvent("Product removed from cart");\n'})}),"\n",(0,i.jsx)(n.p,{children:"Group assignation methods:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-dart",children:'PluginScreeb.assignGroup("company", "Apple");\nPluginScreeb.unassignGroup("plan", "Growth");\n'})}),"\n",(0,i.jsx)(n.h2,{id:"device-tracking-1",children:"Device tracking"}),"\n",(0,i.jsx)(n.p,{children:"Events are stored locally on the user device and won't be available for analytics in the Screeb console."}),"\n",(0,i.jsx)(n.p,{children:"If users use your application from multiple devices, the targeting rules will be checked against local events only. Since Screeb does not receive these events, privacy is even better."}),"\n",(0,i.jsx)(n.p,{children:"Device tracking has a low retention policy:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"up to 90 days"}),"\n",(0,i.jsx)(n.li,{children:"up to 2.000 events"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Expect at most 150ko in browser localStorage."}),"\n",(0,i.jsx)(n.p,{children:"Triggering a survey on a user event will display the survey instantly."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(9931).A+"",width:"694",height:"291"})}),"\n",(0,i.jsx)(n.h3,{id:"21-javascript-tag",children:"2.1 Javascript Tag"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"init"})," command:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"$screeb('init', '<website-id>', {\n  identity: {\n    device: {\n      properties: {\n        firstname: '<user-firstname>',\n        lastname: '<user-lastname>',\n        plan: '<user-plan>',\n        last_seen_at: new Date(),\n        authenticated: true,\n      }\n    }\n  }\n});\n"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"device.identity.properties"})," command:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"$screeb('device.identity.properties', {\n  email: 'samuel@screeb.app',\n  age: 42,\n  logged: true,\n  signed_up_at: new Date(),\n});\n"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"device.event.track"})," command:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"$screeb('device.event.track', 'Product added to cart');\n"})}),"\n",(0,i.jsx)(n.p,{children:"Group assignation:"}),"\n",(0,i.jsx)(n.p,{children:"[currently not available]"}),"\n",(0,i.jsx)(n.h3,{id:"22-android-sdk",children:"2.2 Android SDK"}),"\n",(0,i.jsx)(n.p,{children:"[currently not available]"}),"\n",(0,i.jsx)(n.h3,{id:"23-ios-sdk",children:"2.3 iOS SDK"}),"\n",(0,i.jsx)(n.p,{children:"[currently not available]"}),"\n",(0,i.jsx)(n.h3,{id:"24-reactnative-sdk",children:"2.4 ReactNative SDK"}),"\n",(0,i.jsx)(n.p,{children:"[currently not available]"}),"\n",(0,i.jsx)(n.h3,{id:"25-flutter-sdk",children:"2.5 Flutter SDK"}),"\n",(0,i.jsx)(n.p,{children:"[currently not available]"}),"\n",(0,i.jsx)(n.h2,{id:"screeb-tracking-vs-device-tracking",children:"Screeb tracking vs device tracking"}),"\n",(0,i.jsx)(n.p,{children:"If you need events or properties for analytics or response analysis in Screeb, you should use the Screeb tracking."}),"\n",(0,i.jsx)(n.p,{children:"For applications having a high volumetry of events mainly used to display surveys, you should use the device tracking."}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Screeb tracking"}),(0,i.jsx)(n.th,{children:"Device tracking"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"\ud83d\udc4d"}),(0,i.jsxs)(n.td,{children:["* Survey Advanced Targeting",(0,i.jsx)("br",{})," * Segment Analytics",(0,i.jsx)("br",{})," * Funnel Reports ",(0,i.jsx)("br",{}),"* Response Analysis based on user properties"]}),(0,i.jsxs)(n.td,{children:["* lower time to display surveys",(0,i.jsx)("br",{})," * higher volume of events used for survey displays"]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"\ud83d\udc4e"}),(0,i.jsxs)(n.td,{children:["* higher delay to display a survey",(0,i.jsx)("br",{}),"* lower volumes of events allowed in your subscription"]}),(0,i.jsxs)(n.td,{children:["* Partial information on Screeb Homepage",(0,i.jsx)("br",{})," * No access to Segment Analytics, Funnel Reports",(0,i.jsx)("br",{}),"* No responses analysis based on user properties",(0,i.jsx)("br",{}),"* No variables in questions based on device properties"]})]})]})]}),"\n",(0,i.jsx)(n.p,{children:"Identity properties and events cannot be declared twice, in different locations (Screeb or device). When a mix is necessary, please use a different name."})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},1248:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/device-tracking-1-db4fc992fc3e60b7eafb0ba9807adb2b.png"},9931:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/device-tracking-2-ed5fe21c06edf1e7cca1863472c4c7e5.png"},8453:(e,n,s)=>{s.d(n,{R:()=>t,x:()=>c});var i=s(6540);const r={},a=i.createContext(r);function t(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);