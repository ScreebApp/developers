"use strict";(self.webpackChunkscreeb_docs=self.webpackChunkscreeb_docs||[]).push([[2832],{8728:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>p,frontMatter:()=>t,metadata:()=>o,toc:()=>c});var i=s(4848),r=s(8453);const t={sidebar_position:1},a="Install",o={id:"install",title:"Install",description:"How to install the React-Native SDK in your app?",source:"@site/docs/sdk-react-native/install.md",sourceDirName:".",slug:"/install",permalink:"/sdk-react-native/install",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docSidebar",previous:{title:"How Screeb works",permalink:"/sdk-react-native/how-screeb-works"},next:{title:"Identity",permalink:"/sdk-react-native/identity"}},d={},c=[{value:"How to install the React-Native SDK in your app?",id:"how-to-install-the-react-native-sdk-in-your-app",level:2},{value:"Screeb SDK Usage in CI Environments",id:"screeb-sdk-usage-in-ci-environments",level:2},{value:"Technical requirements",id:"technical-requirements",level:2},{value:"How to configure the React-Native SDK in your app?",id:"how-to-configure-the-react-native-sdk-in-your-app",level:2},{value:"Add Screeb as a dependency",id:"add-screeb-as-a-dependency",level:3},{value:"Android",id:"android",level:3},{value:"iOS",id:"ios",level:3},{value:"Update",id:"update",level:4},{value:"Import Screeb SDK into your package",id:"import-screeb-sdk-into-your-package",level:3},{value:"Setup the SDK",id:"setup-the-sdk",level:3}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"install",children:"Install"})}),"\n",(0,i.jsx)(n.h2,{id:"how-to-install-the-react-native-sdk-in-your-app",children:"How to install the React-Native SDK in your app?"}),"\n",(0,i.jsxs)(n.p,{children:["See the ",(0,i.jsx)(n.a,{href:"https://github.com/ScreebApp/sdk-reactnative/tree/master/example",children:"example"})," to install the last version of the Screeb SDK dependency in a React-Native app."]}),"\n",(0,i.jsxs)("p",{align:"center",children:[(0,i.jsx)("a",{href:"https://www.npmjs.com/package/@screeb/react-native",children:(0,i.jsx)("img",{alt:"npm screeb/react-native",src:"https://img.shields.io/npm/v/@screeb/react-native"})}),(0,i.jsx)("a",{href:"https://opensource.org/licenses/MIT",children:(0,i.jsx)("img",{src:"https://img.shields.io/badge/license-MIT-purple.svg",alt:"License: MIT"})}),(0,i.jsx)("a",{href:"https://cocoapods.org/pods/Screeb",children:(0,i.jsx)("img",{src:"https://img.shields.io/cocoapods/v/Screeb.svg?style=flat",alt:"Cocoapods"})}),(0,i.jsx)("a",{href:"https://search.maven.org/search?q=g:%22app.screeb.sdk%22%20AND%20a:%22survey%22",children:(0,i.jsx)("img",{src:"https://img.shields.io/maven-central/v/app.screeb.sdk/survey.svg?label=Maven%20Central",alt:"Maven Central"})})]}),"\n",(0,i.jsx)(n.h2,{id:"screeb-sdk-usage-in-ci-environments",children:"Screeb SDK Usage in CI Environments"}),"\n",(0,i.jsx)(n.p,{children:"Please note that if you are utilizing a Continuous Integration (CI) system, it is advisable to deactivate the Screeb SDK during CI execution. This precaution helps prevent the creation of numerous new anonymous users and potential exceedance of your MTU limit."}),"\n",(0,i.jsx)(n.h2,{id:"technical-requirements",children:"Technical requirements"}),"\n",(0,i.jsxs)(n.p,{children:["The Screeb SDK is configured to work with ",(0,i.jsx)(n.strong,{children:"Android SDK version 19 minimum"})," and ",(0,i.jsx)(n.strong,{children:"iOS version 11.0 minimum"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["The Swift version is ",(0,i.jsx)(n.strong,{children:">= v5.5.2"})," and XCode version ",(0,i.jsx)(n.strong,{children:">= 13.2.1"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"The size of the SDK is approximately 27 KB on Android and approximately 198 KB on iOS."}),"\n",(0,i.jsx)(n.h2,{id:"how-to-configure-the-react-native-sdk-in-your-app",children:"How to configure the React-Native SDK in your app?"}),"\n",(0,i.jsx)(n.p,{children:"First, log in to the Screeb application, then create your first survey."}),"\n",(0,i.jsx)(n.h3,{id:"add-screeb-as-a-dependency",children:"Add Screeb as a dependency"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"npm install @screeb/react-native\n"})}),"\n",(0,i.jsx)(n.h3,{id:"android",children:"Android"}),"\n",(0,i.jsxs)(n.p,{children:["The Android SDK needs the permissions ",(0,i.jsx)(n.code,{children:"INTERNET"})," to work well."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-xml",children:'<uses-permission android:name="android.permission.INTERNET" />\n'})}),"\n",(0,i.jsx)(n.p,{children:"The SDK also need theses permissions if you want to use the Screeb Audio/Video feature."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-xml",children:'<uses-permission android:name="android.permission.CAMERA"/>\n<uses-permission android:name="android.permission.MICROPHONE" />\n<uses-feature android:name="android.hardware.camera" android:required="true"/>\n<uses-feature android:name="android.hardware.camera.autofocus"/>\n<uses-permission android:name="android.permission.RECORD_AUDIO" />\n<uses-permission android:name="android.permission.MODIFY_AUDIO_SETTINGS" />\n'})}),"\n",(0,i.jsx)(n.h3,{id:"ios",children:"iOS"}),"\n",(0,i.jsx)(n.p,{children:"The SDK need theses permissions if you want to use the Screeb Audio/Video feature."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-xml",children:"<key>NSCameraUsageDescription</key>\n<string>This app needs access to the camera to take photos.</string>\n<key>NSMicrophoneUsageDescription</key>\n<string>This app needs access to microphone to record audio.</string>\n<key>UISupportedInterfaceOrientations</key>\n"})}),"\n",(0,i.jsx)(n.h4,{id:"update",children:"Update"}),"\n",(0,i.jsxs)(n.p,{children:["When upgrading the React-Native SDK version, you may need to run in ",(0,i.jsx)(n.code,{children:"ios/"})," directory:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"cd ios/\npod update Screeb\n"})}),"\n",(0,i.jsx)(n.h3,{id:"import-screeb-sdk-into-your-package",children:"Import Screeb SDK into your package"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:'import { initSdk, trackScreen, trackEvent, setProperties, setIdentity } from "@screeb/react-native";\n'})}),"\n",(0,i.jsx)(n.h3,{id:"setup-the-sdk",children:"Setup the SDK"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"// Init the sdk at app start (useEffect hook used here, but componentDidMount is fine)\nReact.useEffect(() => {\n   initSdk(\n      \"<android-channel-id>\",\n      \"<ios-channel-id>\",\n      \"<user-id>\",\n      {\n         'example-prop1': false,\n         'example-prop2': 29,\n         'example-prop3' : 'iPhone 13',\n      }\n   );\n}, []);\n"})})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>o});var i=s(6540);const r={},t=i.createContext(r);function a(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);