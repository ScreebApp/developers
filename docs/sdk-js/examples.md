---
sidebar_position: 9
---

# Examples

## 1- Start Screeb tag

```html
<script type="text/javascript">
  (function (s,c,r,ee,b) {
    s['ScreebObject']=r;s[r]=s[r]||function(){(s[r].q=s[r].q||[]).push(arguments)};
    b=c.createElement('script');b.type='text/javascript';
    b.id=r;b.src=ee;b.async=1;c.getElementsByTagName("head")[0].appendChild(b);
  }(window,document,'$screeb','https://t.screeb.app/tag.js'));

  // start Screeb tag, with website ID
  $screeb('init', 'c796994e-f2dd-41c5-a88c-91d54fc42b0e');
</script>
```

## 2- Authenticated page

Assuming your application uses the following session object:

```js
var session = {
  "user_id": "16813",
  "email": "samuel@example.com",
  "firstname": "Samuel",
  "lastname": "Berthe",
  "plan": "growth",
  "created_at": new Date(),
};
```

```html
<script type="text/javascript">
  (function (s,c,r,ee,b) {
    s['ScreebObject']=r;s[r]=s[r]||function(){(s[r].q=s[r].q||[]).push(arguments)};
    b=c.createElement('script');b.type='text/javascript';
    b.id=r;b.src=ee;b.async=1;c.getElementsByTagName("head")[0].appendChild(b);
  }(window,document,'$screeb','https://t.screeb.app/tag.js'));

  // start Screeb tag, with website ID
  $screeb('init', 'c796994e-f2dd-41c5-a88c-91d54fc42b0e', {
    "identity": {
      "id": session.user_id,
      "properties": {
        "email": session.email,
        "firstname": session.firstname,
        "lastname": session.lastname,
        "plan": session.plan,
        "logged": true,
        "signed_up_at": session.created_at,
      }
    }
  });
</script>
```

## 3- On login

Before login:

```html
<script type="text/javascript">
  (function (s,c,r,ee,b) {
    s['ScreebObject']=r;s[r]=s[r]||function(){(s[r].q=s[r].q||[]).push(arguments)};
    b=c.createElement('script');b.type='text/javascript';
    b.id=r;b.src=ee;b.async=1;c.getElementsByTagName("head")[0].appendChild(b);
  }(window,document,'$screeb','https://t.screeb.app/tag.js'));

  // start Screeb tag, with website ID
  $screeb('init', 'c796994e-f2dd-41c5-a88c-91d54fc42b0e');
</script>
```

Assuming your application uses the following session object:

```js
var session = {
  "user_id": "16813",
  "email": "samuel@example.com",
  "firstname": "Samuel",
  "lastname": "Berthe",
  "plan": "growth",
  "created_at": new Date(),
};
```

After login validation:

```js
// identify the current session
$screeb('identity', session.user_id);

// collect data about the current visitor
$screeb('identity.properties', {
  'email': session.email,
  'firstname': session.firstname,
  'lastname': session.lastname,
  'plan': session.plan,
  'logged': true,
  'signed_up_at': session.created_at,
});
```

## 4- On signup

Assuming you collected identity properties for anonymous users:

```html
<script type="text/javascript">
  (function (s,c,r,ee,b) {
    s['ScreebObject']=r;s[r]=s[r]||function(){(s[r].q=s[r].q||[]).push(arguments)};
    b=c.createElement('script');b.type='text/javascript';
    b.id=r;b.src=ee;b.async=1;c.getElementsByTagName("head")[0].appendChild(b);
  }(window,document,'$screeb','https://t.screeb.app/tag.js'));

  // start Screeb tag, with website ID
  $screeb('init', 'c796994e-f2dd-41c5-a88c-91d54fc42b0e');

  // collect data about the current visitor
  $screeb('identity.properties', {
    'plan': 'anonymous',
    'visited_pricing_page': true,
  });
</script>
```

Then, when the user registers, just call the alias command:

```js
$screeb('identity.alias', 'samuel@example.com');
```

Previous survey responses and properties will be associated with this identity.

The next time your application is opened, just call:

```js
$screeb('identity', 'samuel@example.com');
```

## 5- Logout page

```html
<script type="text/javascript">
  (function (s,c,r,ee,b) {
    s['ScreebObject']=r;s[r]=s[r]||function(){(s[r].q=s[r].q||[]).push(arguments)};
    b=c.createElement('script');b.type='text/javascript';
    b.id=r;b.src=ee;b.async=1;c.getElementsByTagName("head")[0].appendChild(b);
  }(window,document,'$screeb','https://t.screeb.app/tag.js'));

  // start Screeb tag, with website ID
  $screeb('init', 'c796994e-f2dd-41c5-a88c-91d54fc42b0e');

  // reset the current user session
  $screeb('identity.reset');

  // contextualize the new anonymous session
  $screeb('identity.properties', {
    'plan': 'free',
    'logged': false,
  });
</script>
```
