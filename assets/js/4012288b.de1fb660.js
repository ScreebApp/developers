"use strict";(self.webpackChunkscreeb_docs=self.webpackChunkscreeb_docs||[]).push([[3814],{2943:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>o});var t=s(4848),r=s(8453);const a={sidebar_position:8},i="Examples",c={id:"examples",title:"Examples",description:"1- Start Screeb tag",source:"@site/docs/sdk-js/examples.md",sourceDirName:".",slug:"/examples",permalink:"/sdk-js/examples",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"docSidebar",previous:{title:"Hooks",permalink:"/sdk-js/js-hooks"},next:{title:"Reference",permalink:"/sdk-js/reference"}},l={},o=[{value:"1- Start Screeb tag",id:"1--start-screeb-tag",level:2},{value:"2- Authenticated page",id:"2--authenticated-page",level:2},{value:"3- On login",id:"3--on-login",level:2},{value:"4- On signup",id:"4--on-signup",level:2},{value:"5- Logout page",id:"5--logout-page",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"examples",children:"Examples"})}),"\n",(0,t.jsx)(n.h2,{id:"1--start-screeb-tag",children:"1- Start Screeb tag"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",children:"<script type=\"text/javascript\">\n  (function (s,c,r,ee,b) {\n    s['ScreebObject']=r;s[r]=s[r]||function(){(s[r].q=s[r].q||[]).push(arguments)};\n    b=c.createElement('script');b.type='text/javascript';\n    b.id=r;b.src=ee;b.async=1;c.getElementsByTagName(\"head\")[0].appendChild(b);\n  }(window,document,'$screeb','https://t.screeb.app/tag.js'));\n\n  // start Screeb tag, with website ID\n  $screeb('init', 'c796994e-f2dd-41c5-a88c-91d54fc42b0e');\n<\/script>\n"})}),"\n",(0,t.jsx)(n.h2,{id:"2--authenticated-page",children:"2- Authenticated page"}),"\n",(0,t.jsx)(n.p,{children:"Assuming your application uses the following session object:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:'var session = {\n  "user_id": "16813",\n  "email": "samuel@example.com",\n  "firstname": "Samuel",\n  "lastname": "Berthe",\n  "plan": "growth",\n  "created_at": new Date(),\n};\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",children:'<script type="text/javascript">\n  (function (s,c,r,ee,b) {\n    s[\'ScreebObject\']=r;s[r]=s[r]||function(){(s[r].q=s[r].q||[]).push(arguments)};\n    b=c.createElement(\'script\');b.type=\'text/javascript\';\n    b.id=r;b.src=ee;b.async=1;c.getElementsByTagName("head")[0].appendChild(b);\n  }(window,document,\'$screeb\',\'https://t.screeb.app/tag.js\'));\n\n  // start Screeb tag, with website ID\n  $screeb(\'init\', \'c796994e-f2dd-41c5-a88c-91d54fc42b0e\', {\n    "identity": {\n      "id": session.user_id,\n      "properties": {\n        "email": session.email,\n        "firstname": session.firstname,\n        "lastname": session.lastname,\n        "plan": session.plan,\n        "logged": true,\n        "signed_up_at": session.created_at,\n      }\n    }\n  });\n<\/script>\n'})}),"\n",(0,t.jsx)(n.h2,{id:"3--on-login",children:"3- On login"}),"\n",(0,t.jsx)(n.p,{children:"Before login:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",children:"<script type=\"text/javascript\">\n  (function (s,c,r,ee,b) {\n    s['ScreebObject']=r;s[r]=s[r]||function(){(s[r].q=s[r].q||[]).push(arguments)};\n    b=c.createElement('script');b.type='text/javascript';\n    b.id=r;b.src=ee;b.async=1;c.getElementsByTagName(\"head\")[0].appendChild(b);\n  }(window,document,'$screeb','https://t.screeb.app/tag.js'));\n\n  // start Screeb tag, with website ID\n  $screeb('init', 'c796994e-f2dd-41c5-a88c-91d54fc42b0e');\n<\/script>\n"})}),"\n",(0,t.jsx)(n.p,{children:"Assuming your application uses the following session object:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:'var session = {\n  "user_id": "16813",\n  "email": "samuel@example.com",\n  "firstname": "Samuel",\n  "lastname": "Berthe",\n  "plan": "growth",\n  "created_at": new Date(),\n};\n'})}),"\n",(0,t.jsx)(n.p,{children:"After login validation:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"// identify the current session\n$screeb('identity', session.user_id);\n\n// collect data about the current visitor\n$screeb('identity.properties', {\n  'email': session.email,\n  'firstname': session.firstname,\n  'lastname': session.lastname,\n  'plan': session.plan,\n  'logged': true,\n  'signed_up_at': session.created_at,\n});\n"})}),"\n",(0,t.jsx)(n.h2,{id:"4--on-signup",children:"4- On signup"}),"\n",(0,t.jsx)(n.p,{children:"Assuming you collected identity properties for anonymous users:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",children:"<script type=\"text/javascript\">\n  (function (s,c,r,ee,b) {\n    s['ScreebObject']=r;s[r]=s[r]||function(){(s[r].q=s[r].q||[]).push(arguments)};\n    b=c.createElement('script');b.type='text/javascript';\n    b.id=r;b.src=ee;b.async=1;c.getElementsByTagName(\"head\")[0].appendChild(b);\n  }(window,document,'$screeb','https://t.screeb.app/tag.js'));\n\n  // start Screeb tag, with website ID\n  $screeb('init', 'c796994e-f2dd-41c5-a88c-91d54fc42b0e');\n\n  // collect data about the current visitor\n  $screeb('identity.properties', {\n    'plan': 'anonymous',\n    'visited_pricing_page': true,\n  });\n<\/script>\n"})}),"\n",(0,t.jsx)(n.p,{children:"Then, when the user registers, just call the alias command:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"$screeb('identity.alias', 'samuel@example.com');\n"})}),"\n",(0,t.jsx)(n.p,{children:"Previous survey responses and properties will be associated with this identity."}),"\n",(0,t.jsx)(n.p,{children:"The next time your application is opened, just call:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"$screeb('identity', 'samuel@example.com');\n"})}),"\n",(0,t.jsx)(n.h2,{id:"5--logout-page",children:"5- Logout page"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",children:"<script type=\"text/javascript\">\n  (function (s,c,r,ee,b) {\n    s['ScreebObject']=r;s[r]=s[r]||function(){(s[r].q=s[r].q||[]).push(arguments)};\n    b=c.createElement('script');b.type='text/javascript';\n    b.id=r;b.src=ee;b.async=1;c.getElementsByTagName(\"head\")[0].appendChild(b);\n  }(window,document,'$screeb','https://t.screeb.app/tag.js'));\n\n  // start Screeb tag, with website ID\n  $screeb('init', 'c796994e-f2dd-41c5-a88c-91d54fc42b0e');\n\n  // reset the current user session\n  $screeb('identity.reset');\n\n  // contextualize the new anonymous session\n  $screeb('identity.properties', {\n    'plan': 'free',\n    'logged': false,\n  });\n<\/script>\n"})})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>c});var t=s(6540);const r={},a=t.createContext(r);function i(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);