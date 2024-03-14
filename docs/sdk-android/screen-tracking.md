---
sidebar_position: 5
---

# Screen tracking

You can track screen visited by your users, along with properties describing the screen.

<u>Requirements:</u>

* Screen names must be less than 128 characters long.
* Authorized characters are alphanumeric (uppercase included) and you can insert the following special characters: '-', '_', '.', ' ' (space), '/', and ':'.

```kotlin
Screeb.trackScreen("ProductCartFragment")
```

## Attributes

In order to bring context to your event handling, some properties can be added to the screen.

<u>Requirements:</u>

* Property names must be limited to 128 characters
* No more than 1000 attributes
* Supported types for values: string, number (Int, Long, Double), boolean and Date.

```kotlin
// screen tracking with custom properties
Screeb.trackScreen("ProductCartFragment", TrackingEventProperties().apply {
    this["product_name"] = "Red bike 2021"
    this["category"] = "sport"
    this["price"] = 12.29
    this["count"] = 1
    this["delivery_method"] = "UPS"
    this["user_logged"] = false
    this["added_at"] = Date()
})
```
