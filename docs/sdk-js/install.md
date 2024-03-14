---
sidebar_position: 1
---

# Install

## How to add the Screeb tag to your website?

First, log in to the Screeb application, then create your first survey.

When your survey is ready to share, we will provide a javascript snippet to copy at the end of your HTML page (before `</body>`).

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

### About tag lifecycle

After the script tag is inserted into your page, you must call the `init` command, with your website ID (given in Screeb app). If no identity is specified, an anonymous Screeb session will be created (see [identity](./identity) section).

```js
$screeb('init', '<website-id>');
```

At any time, you can disable the Screeb tag with the following command:

```js
$screeb('close');
```

## Next steps

### 1- Identify visitors

[See here.](./identity)

### 2- Event tracking

[See here.](./event-tracking)

### 3- Start the survey programmatically

[See here.](./start-survey-programmatically)
