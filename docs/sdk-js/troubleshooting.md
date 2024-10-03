---
sidebar_position: 10
---

# Troubleshooting

## Check if Javascript tag is loaded correctly

Open the developer console and call the following Screeb command: `$screeb('debug');`.

You will get contextual information about the running user session:

![image](https://user-images.githubusercontent.com/2951285/181211345-a52c3320-9f87-4ef3-a90a-185bbcbcffb4.png)

### Error cases

- The error `Uncaught ReferenceError: $screeb is not defined` means the Javascript Tag was not injected into the page.
- An empty channel id means you didn't call the `$screeb('init', ...)` command.
- An empty respondent id means you exceeded your respondent quota.

## Debug targeting rules

Since the targeting engine built by Screeb runs in the background, you may not understand which rules prevent your survey from being displayed to a user.

Open the developer console and call the following Screeb command: `$screeb('targeting.debug');`.

You will get a list of available surveys and the associated targeting rules:

![image](https://user-images.githubusercontent.com/2951285/155576598-ef0cf65d-0590-48e0-9b1b-78e65924117b.png)

The rules with a green dot 🟢 are the ones that have been validated for this user. The rules with a red dot 🔴 are not validated and may be the reason why your survey is not displayed.

## Content Security Policy (CSP)

You want to display Screeb surveys while being sure your app is secured and protected against injection attacks, here's how to make Screeb compatible with your Content Security Policy (CSP). 

Your CSP should -at least- look like this: 

```
default-src 'unsafe-inline' https://*.screeb.app wss://*.screeb.app; prefetch-src https://*.screeb.app; font-src blob:
```

And don't forget to add your own domains.

An example:

```
content-security-policy: default-src https: 'unsafe-eval' 'unsafe-inline' https://*.screeb.app wss://*.screeb.app; object-src 'self'; report-uri /csp-violation-report; frame-ancestors 'self' https://admin.example.com https://vip.example.com; prefetch-src https://*.screeb.app; font-src blob:
```
