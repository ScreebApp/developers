"use strict";(self.webpackChunkscreeb_docs=self.webpackChunkscreeb_docs||[]).push([[9795],{9183:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>a});var t=i(4848),o=i(8453);const r={sidebar_position:8},s="Troubleshooting",l={id:"troubleshooting",title:"Troubleshooting",description:"Check if ReactNative SDK is initialized correctly",source:"@site/docs/sdk-react-native/troubleshooting.md",sourceDirName:".",slug:"/troubleshooting",permalink:"/sdk-react-native/troubleshooting",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"docSidebar",previous:{title:"Hooks",permalink:"/sdk-react-native/react-native-hooks"}},d={},a=[{value:"Check if ReactNative SDK is initialized correctly",id:"check-if-reactnative-sdk-is-initialized-correctly",level:2},{value:"Error cases",id:"error-cases",level:3},{value:"Debug targeting rules",id:"debug-targeting-rules",level:2},{value:"iOS: &quot;Failed to build module &#39;Screeb&#39;; this SDK is not supported by the compiler&quot;",id:"ios-failed-to-build-module-screeb-this-sdk-is-not-supported-by-the-compiler",level:2},{value:"iOS: &quot;Cannot load underlying module for &#39;Alamofire&#39;&quot;",id:"ios-cannot-load-underlying-module-for-alamofire",level:2},{value:"Option 1",id:"option-1",level:3},{value:"Option 2",id:"option-2",level:3}];function c(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,t.jsx)(n.h2,{id:"check-if-reactnative-sdk-is-initialized-correctly",children:"Check if ReactNative SDK is initialized correctly"}),"\n",(0,t.jsx)(n.p,{children:"Call the following Screeb method from our SDK:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:'import { debug } from "@screeb/react-native";\ndebug();\n'})}),"\n",(0,t.jsx)(n.p,{children:"You will get contextual information about the running user session in the native logs:"}),"\n",(0,t.jsx)("img",{width:"650",src:"https://user-images.githubusercontent.com/2951285/237030294-dd8c7c7c-60ae-4d97-9561-57f5065ac3bc.png"}),"\n",(0,t.jsx)(n.h3,{id:"error-cases",children:"Error cases"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["An empty channel id means you didn't call the ",(0,t.jsx)(n.code,{children:"initSdk"})," method."]}),"\n",(0,t.jsx)(n.li,{children:"An empty respondent id means you exceeded your respondent quota."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"debug-targeting-rules",children:"Debug targeting rules"}),"\n",(0,t.jsx)(n.p,{children:"Since the targeting engine built by Screeb runs in the background, you may not understand which rules prevent your survey from being displayed to a user."}),"\n",(0,t.jsx)(n.p,{children:"Call the following Screeb method from our SDK:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:'import { debugTargeting } from "@screeb/react-native";\ndebugTargeting();\n'})}),"\n",(0,t.jsx)(n.p,{children:"You will get a list of available surveys and the associated targeting rules in the native logs."}),"\n",(0,t.jsx)("img",{width:"650",src:"https://user-images.githubusercontent.com/2951285/237030243-0c4b4b72-eb9d-4b3a-93d3-4c7f7cde0a88.png"}),"\n",(0,t.jsx)(n.p,{children:"The rules with a green dot \ud83d\udfe2 are the ones that have been validated for this user. The rules with a red dot \ud83d\udd34 are not validated and may be the reason why your survey is not displayed."}),"\n",(0,t.jsx)(n.h2,{id:"ios-failed-to-build-module-screeb-this-sdk-is-not-supported-by-the-compiler",children:"iOS: \"Failed to build module 'Screeb'; this SDK is not supported by the compiler\""}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-txt",children:"ScreebModule.swift:1:8 Failed to build module 'Screeb'; this SDK is not supported by the compiler (the SDK is built with 'Apple Swift version 5.5.2 (swiftlang-1300.0.47.5 clang-1300.0.29.30)', while this compiler is 'Apple Swift version 5.7.1 (swiftlang-5.7.1.135.3 clang-1400.0.29.51)'). Please select a toolchain which matches the SDK.\n"})}),"\n",(0,t.jsxs)(n.p,{children:["This compilation error is raised when support for ",(0,t.jsx)(n.em,{children:"library evolution"})," is not enabled. Please add the following configuration to your Podfile:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ruby",children:"post_install do |installer|\n    installer.pods_project.targets.each do |target|\n        target.build_configurations.each do |config|\n            config.build_settings['BUILD_LIBRARY_FOR_DISTRIBUTION'] = 'YES'\n        end\n    end\nend\n"})}),"\n",(0,t.jsx)(n.h2,{id:"ios-cannot-load-underlying-module-for-alamofire",children:"iOS: \"Cannot load underlying module for 'Alamofire'\""}),"\n",(0,t.jsx)(n.h3,{id:"option-1",children:"Option 1"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ruby",children:"target 'abcdProject' do\n  [...]\n\n  use_frameworks!\n\n  [...]\nend\n"})}),"\n",(0,t.jsx)(n.p,{children:"You will also need to desactivate flipper.\nIf you can't desactivate flipper check Option 2."}),"\n",(0,t.jsx)(n.h3,{id:"option-2",children:"Option 2"}),"\n",(0,t.jsxs)(n.p,{children:["Install the ",(0,t.jsx)(n.a,{href:"https://github.com/joncardasis/cocoapods-user-defined-build-types",children:"cocoapods-user-defined-build-types"})," plugin:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"sudo gem install cocoapods-user-defined-build-types\n"})}),"\n",(0,t.jsx)(n.p,{children:"Then add the following lines to your Podfile:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ruby",children:"plugin 'cocoapods-user-defined-build-types'\nenable_user_defined_build_types!\n\n[...]\n\ntarget 'abcdProject' do\n  [...]\n\n  pod \"Screeb\", :build_type => :dynamic_framework\n\n  [...]\nend\n"})})]})}function u(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>s,x:()=>l});var t=i(6540);const o={},r=t.createContext(o);function s(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);