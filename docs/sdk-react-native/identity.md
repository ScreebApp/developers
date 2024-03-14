---
sidebar_position: 2
---

# Identity

## Set identity

When a user is identified in your app, you won't be able to identify who responded to surveys until you call the `setIdentity` command.

Thanks to this, you will be able to track this user over multiple platforms (desktop, mobile, tablet...).

The identifier of your website visitor must be unique and idempotent. User email is good, but can change over time. We recommend that you use the user id.

<u>Requirements:</u>

* The unique visitor id must have a length between 1 to 255 characters.

```js
import { setIdentity } from "@screeb/react-native";

setIdentity('<user-id>');
```

## Attributes

Screeb allows tracking some custom data about your website visitors. Those properties can be inserted as "hidden fields" in your surveys or can be used for an advanced targeting rule.

<u>Requirements:</u>

* Property names must be limited to 128 characters
* No more than 1000 attributes
* Supported types for values: string, number (Int, Long, Double), boolean and Date.

```js
import { setIdentity, setProperties } from "@screeb/react-native";

// Set visitor properties
setProperties({
    'example-prop1': false,
    'example-prop2': 29,
    'example-prop3': 'iPhone 13',
});

// Delete visitor property: set values to null
setProperties({
    'example-prop1': null,
    'example-prop2': null,
    'example-prop3': null,
})
```
