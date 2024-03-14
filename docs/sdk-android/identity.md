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

```kotlin
// assign current session to a visitor identifier (such as your internal user id, an email address...)
Screeb.setIdentity("<unique-user-id>")

// You can also add properties (see properties configuration below) when calling `setIdentity` command:
Screeb.setIdentity("<unique-user-id>", VisitorProperties().apply {
        this["firstname"] = "<user-firstname>"
        this["lastname"] = "<user-lastname>"
        this["plan"] = "<user-plan>"
        this["age"] = 42
        this["logged_at"] = Date()
        this["authenticated"] = true
    })
```

### Reset current identity

When the user logs out, please call the `resetIdentity` command.

This command must be called only once, since it creates a new identity on Screeb side. If you call it on every anonymous view, you won't be able to track visitor navigation and surveys will be sent many times to the same visitor.

```kotlin
Screeb.resetIdentity()
```

## Attributes

Screeb allows tracking some custom data about your website visitors. Those properties can be inserted as "hidden fields" in your surveys or can be used for an advanced targeting rule.

<u>Requirements:</u>

* Property names must be limited to 128 characters
* No more than 1000 attributes
* Supported types for values: string, number (Int, Long, Double), boolean and Date.

```kotlin
// set visitor properties
Screeb.setVisitorProperties(
    VisitorProperties().apply {
        this["firstname"] = "<user-firstname>"
        this["lastname"] = "<user-lastname>"
        this["plan"] = "<user-plan>"
        this["age"] = 42
        this["logged_at"] = Date()
        this["authenticated"] = true
    }
)

// Delete visitor property: set values to null
Screeb.setVisitorProperties(
    VisitorProperties().apply {
        this["firstname"] = null
        this["lastname"] = null
        this["plan"] = null
    }
)
```
