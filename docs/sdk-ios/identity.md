---
sidebar_position: 2
---

# Identity

## Set identity

When a user is identified in your app, you won't be able to identify who responded to surveys until you call the setIdentity command.

Thanks to this, you will be able to track this user over multiple platforms (desktop, mobile, tablet...).

The identifier of your website visitor must be unique and idempotent. User email is good, but can change over time. We recommend that you use the user id.

<u>Requirements:</u>

* The unique visitor id must have a length between 1 to 255 characters.

```swift
import Screeb
...
// assign current session to a visitor identifier (such as your internal user id, an email address...)
Screeb.setIdentity(uniqueVisitorId: "<unique-visitor-id>")

// You can also add properties (see Attributes configuration below) when calling identity command :
Screeb.setIdentity(uniqueVisitorId: "<unique-visitor-id>", visitorProperty: [
            "age": AnyEncodable(27),
            "category": AnyEncodable("cycle"),
            "purchasedAt": AnyEncodable(Date())
        ])
```

### Reset current identity

When the user logs out, please call the `resetIdentity` command.

This command must be called only once, since it creates a new identity on Screeb side. If you call it on every anonymous view, you won't be able to track visitor navigation and surveys will be sent many times to the same visitor.

```swift
Screeb.resetIdentity()
```

### Ignore anonymous user

If you want to ignore anonymous users and only track identified users, you can use the `ignore Anonymous` option. This will ensure that no data is collected for users who have not been identified.

To Activate the `ignore Anonymous` option, go to your screeb workspace settings and set the `ignore Anonymous` option to `true`.
([go to your workspace Settings](https://admin.screeb.app/org/last/settings/behaviour))


By setting `ignore Anonymous` to `true`, the widget will not collect any data until the `identity` command is called with a unique visitor identifier.

## Attributes

Screeb allows tracking some custom data about your website visitors. Those properties can be inserted as "hidden fields" in your surveys or can be used for an advanced targeting rule.

<u>Requirements:</u>

* Property names must be limited to 128 characters
* No more than 1000 attributes
* Supported types for values: string, number (Int, Long, Double), boolean and Date.

```swift
import Screeb
...
// set visitor properties
Screeb.visitorProperty(visitorProperty: [
  "email" = AnyEncodable("clement@screeb.app"),
  "age" = AnyEncodable(29),
  "logged" = AnyEncodable(true),
  "signed_up_at" = AnyEncodable(Date()),
])

// Delete visitor property: set values to nil
Screeb.visitorProperty(visitorProperty: [
  "email" = AnyEncodable("clement@screeb.app"),
  "age" = AnyEncodable(29),
  "logged" = nil,
  "signed_up_at" = AnyEncodable(Date()),
])

```