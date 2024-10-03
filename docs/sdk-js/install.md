---
sidebar_position: 1
---

# Install

## How to add the Screeb tag to your website?

The Screeb tag is a small piece of JavaScript code that you can add to your website to enable Screeb features.

### Using HTML

There is many ways to add the Screeb tag to your website. The most common way is to add the tag directly to your website's HTML code.

For that, you need to copy the Screeb tag code and paste it into your website's HTML code.
You can find this code in your workspace settings, (see [Install Screeb section](https://admin.screeb.app/org/last/settings/install)).


> :warning: Pay Attention to the identifier `<website-id>` in the tag code. This identifier is unique per Screeb workspace.

Paste the tag at the end of your HTML page (before `</body>`).

Example:

```html
<script type="text/javascript">
  (function (s,c,r,ee,b) {
    s['ScreebObject']=r;s[r]=s[r]||function(){var d=arguments;return new Promise(function(a,b){(s[r].q=s[r].q||[]).push({v:1,args:d,ok:a,ko:b})})};
    b=c.createElement('script');b.type='text/javascript';
    b.id=r;b.src=ee;b.async=1;c.getElementsByTagName("head")[0].appendChild(b);
  }(window,document,'$screeb','https://t.screeb.app/tag.js'));

  $screeb('init', '<website-id>');
</script>
```

### Using Packages

If your app is built with a custom framework, you can install the right Screeb package for you and import it in your code.
[See NPM Packages.](./npm-packages)

## About tag lifecycle

### Initialization

After the script tag is inserted into your page, you must call the `init` command, with your website ID (given in Screeb app). If no identity is specified, an anonymous Screeb session will be created (see [identity](./identity) section).

```js
$screeb('init', '<website-id>');
```

### deactivation

At any time, you can disable the Screeb tag with the following command:

```js
$screeb('close');
```
