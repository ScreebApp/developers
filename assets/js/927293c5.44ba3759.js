"use strict";(self.webpackChunkscreeb_docs=self.webpackChunkscreeb_docs||[]).push([[3861],{5592:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var s=t(4848),i=t(8453);const r={sidebar_position:1},o="Install",a={id:"install",title:"Install",description:"How to add the Screeb tag to your website?",source:"@site/docs/sdk-js/install.md",sourceDirName:".",slug:"/install",permalink:"/sdk-js/install",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docSidebar",previous:{title:"How Screeb works",permalink:"/sdk-js/how-screeb-works"},next:{title:"NPM packages",permalink:"/sdk-js/npm-packages"}},l={},c=[{value:"How to add the Screeb tag to your website?",id:"how-to-add-the-screeb-tag-to-your-website",level:2},{value:"Using HTML",id:"using-html",level:3},{value:"Using NPM Packages",id:"using-npm-packages",level:3},{value:"Using Segment",id:"using-segment",level:3},{value:"Using Google Tag Manager (GTM)",id:"using-google-tag-manager-gtm",level:3},{value:"About tag lifecycle",id:"about-tag-lifecycle",level:2},{value:"Initialization",id:"initialization",level:3},{value:"deactivation",id:"deactivation",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"install",children:"Install"}),"\n",(0,s.jsx)(n.h2,{id:"how-to-add-the-screeb-tag-to-your-website",children:"How to add the Screeb tag to your website?"}),"\n",(0,s.jsx)(n.p,{children:"The Screeb tag is a small piece of JavaScript code that you can add to your website to enable Screeb features."}),"\n",(0,s.jsx)(n.h3,{id:"using-html",children:"Using HTML"}),"\n",(0,s.jsx)(n.p,{children:"There is many ways to add the Screeb tag to your website. The most common way is to add the tag directly to your website's HTML code."}),"\n",(0,s.jsxs)(n.p,{children:["For that, you need to copy the Screeb tag code and paste it into your website's HTML code.\nYou can find this code in your workspace settings, (see ",(0,s.jsx)(n.a,{href:"https://admin.screeb.app/org/last/settings/install",children:"Install Screeb section"}),")."]}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["Pay Attention to the identifier ",(0,s.jsx)(n.code,{children:"<website-id>"})," in the tag code. This identifier is unique per Screeb workspace."]})}),"\n",(0,s.jsxs)(n.p,{children:["Paste the tag at the end of your HTML page (before ",(0,s.jsx)(n.code,{children:"</body>"}),")."]}),"\n",(0,s.jsx)(n.p,{children:"Example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:"<script type=\"text/javascript\">\n  (function (s,c,r,ee,b) {\n    s['ScreebObject']=r;s[r]=s[r]||function(){var d=arguments;return new Promise(function(a,b){(s[r].q=s[r].q||[]).push({v:1,args:d,ok:a,ko:b})})};\n    b=c.createElement('script');b.type='text/javascript';\n    b.id=r;b.src=ee;b.async=1;c.getElementsByTagName(\"head\")[0].appendChild(b);\n  }(window,document,'$screeb','https://t.screeb.app/tag.js'));\n\n  $screeb('init', '<website-id>');\n<\/script>\n"})}),"\n",(0,s.jsx)(n.h3,{id:"using-npm-packages",children:"Using NPM Packages"}),"\n",(0,s.jsxs)(n.p,{children:["If your app is built with a custom framework, you can install the right Screeb package for you and import it in your code.\n",(0,s.jsx)(n.a,{href:"./npm-packages",children:"See NPM Packages."})]}),"\n",(0,s.jsx)(n.h3,{id:"using-segment",children:"Using Segment"}),"\n",(0,s.jsx)(n.p,{children:"If you are using Segment, you can install Screeb without any additional coding using Segment Destinations. This method allows you to send data from Segment to Screeb without adding the Screeb tag to your website manually."}),"\n",(0,s.jsx)(n.p,{children:"To install Screeb using Segment Destinations, follow these steps:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Log in to Segment"}),": Go to your Segment workspace and log in with your credentials."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Add Screeb as a Destination"}),":"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Navigate to the ",(0,s.jsx)(n.strong,{children:"Destinations"})," tab in your Segment workspace."]}),"\n",(0,s.jsxs)(n.li,{children:["Click on ",(0,s.jsx)(n.strong,{children:"Add Destination"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Search for ",(0,s.jsx)(n.strong,{children:"Screeb Web (Actions)"})," in the catalog and select it."]}),"\n",(0,s.jsxs)(n.li,{children:["Click on ",(0,s.jsx)(n.strong,{children:"Configure Screeb Web (Actions)"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.ol,{start:"3",children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Configure Screeb"}),":"]}),"\n"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Enter your Screeb ",(0,s.jsx)(n.strong,{children:"Workspace ID"}),". You can find this ID in your ",(0,s.jsx)(n.a,{href:"https://admin.screeb.app/org/last/settings/install",children:"Screeb workspace settings"}),"."]}),"\n",(0,s.jsx)(n.li,{children:"Follow the on-screen instructions to complete the setup."}),"\n"]}),"\n",(0,s.jsxs)(n.ol,{start:"4",children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Send Data to Screeb"}),":"]}),"\n"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Once Screeb is added as a destination, Segment will start sending data to Screeb based on the events you have configured."}),"\n",(0,s.jsx)(n.li,{children:"Ensure that your events are correctly set up in Segment to capture the data you need in Screeb."}),"\n"]}),"\n",(0,s.jsxs)(n.ol,{start:"5",children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Verify Installation"}),":"]}),"\n"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Go back to your Screeb workspace."}),"\n",(0,s.jsx)(n.li,{children:"Check the incoming data to ensure that events from Segment are being received correctly."}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["For more detailed instructions, refer to the ",(0,s.jsx)(n.a,{href:"https://segment.com/docs/connections/destinations/catalog/actions-screeb-web/",children:"Segment documentation"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"By following these steps, you can seamlessly integrate Screeb with Segment and start leveraging the powerful features of both platforms."}),"\n",(0,s.jsx)(n.h3,{id:"using-google-tag-manager-gtm",children:"Using Google Tag Manager (GTM)"}),"\n",(0,s.jsx)(n.p,{children:"If you are using Google Tag Manager (GTM), you can install Screeb without any additional coding using GTM. This method allows you to send data from GTM to Screeb without adding the Screeb tag to your website manually."}),"\n",(0,s.jsx)(n.p,{children:"To install Screeb using Google Tag Manager (GTM), follow these steps:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Log in to GTM"}),": Go to your Google Tag Manager account and log in with your credentials."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Create a New Tag"}),":"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Navigate to the ",(0,s.jsx)(n.strong,{children:"Tags"})," section in your GTM workspace."]}),"\n",(0,s.jsxs)(n.li,{children:["Click on ",(0,s.jsx)(n.strong,{children:"Add New Tag"})," to create a new tag."]}),"\n",(0,s.jsxs)(n.li,{children:["Name your new tag and click on ",(0,s.jsx)(n.strong,{children:"Choose a Tag"}),"."]}),"\n",(0,s.jsx)(n.li,{children:"Navigate to the \u201cCommunity Tags\u201d by clicking on the banner above the tag list"}),"\n",(0,s.jsxs)(n.li,{children:["Search for ",(0,s.jsx)(n.strong,{children:"Screeb"})," in the community tags and click on ",(0,s.jsx)(n.strong,{children:"Add to Workspace"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.ol,{start:"3",children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Configure the Tag"}),":"]}),"\n"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Enter your Screeb ",(0,s.jsx)(n.strong,{children:"Workspace ID"}),". You can find this ID in your ",(0,s.jsx)(n.a,{href:"https://admin.screeb.app/org/last/settings/install",children:"Screeb workspace settings"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.ol,{start:"4",children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Set Up Trigger"}),":"]}),"\n"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Click on ",(0,s.jsx)(n.strong,{children:"Triggering"})," to set up a trigger for the tag."]}),"\n",(0,s.jsxs)(n.li,{children:["Choose an appropriate trigger, such as ",(0,s.jsx)(n.strong,{children:"All Pages"}),", to ensure the Screeb tag is loaded on all pages of your website."]}),"\n"]}),"\n",(0,s.jsxs)(n.ol,{start:"5",children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Save and Publish"}),":"]}),"\n"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Save the tag configuration."}),"\n",(0,s.jsxs)(n.li,{children:["Click on ",(0,s.jsx)(n.strong,{children:"Submit"})," to publish the changes to your GTM container."]}),"\n"]}),"\n",(0,s.jsxs)(n.ol,{start:"6",children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Verify Installation"}),":"]}),"\n"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Go back to your Screeb workspace."}),"\n",(0,s.jsx)(n.li,{children:"Check the incoming data to ensure that events from GTM are being received correctly."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"By following these steps, you can integrate Screeb with Google Tag Manager and start leveraging the powerful features of both platforms."}),"\n",(0,s.jsx)(n.h2,{id:"about-tag-lifecycle",children:"About tag lifecycle"}),"\n",(0,s.jsx)(n.h3,{id:"initialization",children:"Initialization"}),"\n",(0,s.jsxs)(n.p,{children:["After the script tag is inserted into your page, you must call the ",(0,s.jsx)(n.code,{children:"init"})," command, with your website ID (given in Screeb app). If no identity is specified, an anonymous Screeb session will be created (see ",(0,s.jsx)(n.a,{href:"./identity",children:"identity"})," section)."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"$screeb('init', '<website-id>');\n"})}),"\n",(0,s.jsx)(n.h3,{id:"deactivation",children:"deactivation"}),"\n",(0,s.jsx)(n.p,{children:"At any time, you can disable the Screeb tag with the following command:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"$screeb('close');\n"})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>a});var s=t(6540);const i={},r=s.createContext(i);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);