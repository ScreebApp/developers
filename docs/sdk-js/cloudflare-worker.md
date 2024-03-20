---
sidebar_class_name: hidden
---

# Cloudflare Worker

To add the script tag to a third-party app, by proxying website through Cloudflare, create a worker+route, with the following code:

```js
const SCREEB_CHANNEL_ID = "<REPLACE-ME>";

export default {
    async fetch(request, env) {
        /**
         * Response properties are immutable. To change them, construct a new
         * Response and pass modified status or statusText in the ResponseInit
         * object. Response headers can be modified through the headers `set` method.
         */
        const originalResponse = await fetch(request);

        const screebToken = this.getScreebToken(env, request.url);
    
        // You might need to add some existing values here.
        // See https://help.screeb.app/en/articles/5046665-using-screeb-with-content-security-policy
        const csp = `default-src https: 'unsafe-eval' 'unsafe-inline' https://*.screeb.app wss://*.screeb.app; object-src 'self'; report-uri /csp-violation-report; frame-ancestors 'self' https://admin.example.com https://vip.example.com; prefetch-src https://*.screeb.app; font-src blob:`;

        // Change "Content-Security-Policy" header
        const headers = new Headers(originalResponse.headers);    
        headers.set('Content-Security-Policy', csp);

        // Change response body by adding the Screeb script
        const originalBody = await originalResponse.text();
        const modifiedBody = originalBody.replace('</body>', `
            <script type="text/javascript">
                (function (s,c,r,ee,b) {
                s['ScreebObject']=r;s[r]=s[r]||function(){var d=arguments;return new Promise(function(a,b){(s[r].q=s[r].q||[]).push({v:1,args:d,ok:a,ko:b})})};
                b=c.createElement('script');b.type='text/javascript';
                b.id=r;b.src=ee;b.async=1;c.getElementsByTagName("head")[0].appendChild(b);
                }(window,document,'$screeb','https://t.screeb.app/tag.js'));
            
                $screeb('init', '${SCREEB_CHANNEL_ID}');
            </script>
            </body>`
        );
        const response = new Response(modifiedBody, {
            status: originalResponse.status,
            statusText: originalResponse.statusText,
            headers: headers
        });

        return response;
    },
};
```
