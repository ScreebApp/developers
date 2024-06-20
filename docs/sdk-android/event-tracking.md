---
sidebar_position: 4
---

# Event tracking

You can track actions performed by your users, along with properties describing the event.

<u>Requirements:</u>

* Event names must be less than 128 characters long.
* Authorized characters are alphanumeric (uppercase included) and you can insert the following special characters: '-', '_', '.', ' ' (space), '/', and ':'.

```kotlin
Screeb.trackEvent("Product removed from cart")
```

From the Screeb platform, to customize the conditions the surveys are displayed for a visitor, you can apply custom targeting rules using these events: trigger count or last event time.

## Attributes

In order to bring context to your event handling, some properties can be added to the event.

<u>Requirements:</u>

* Property names must be limited to 128 characters
* No more than 1000 attributes
* Supported types for values: string, number (Int, Long, Double), boolean and Date.

```kotlin
// trigger custom event
Screeb.trackEvent("Product added to cart", TrackingEventProperties().apply {
    this["product_name"] = "Red bike 2021"
    this["category"] = "sport"
    this["price"] = 12.29
    this["count"] = 1
    this["delivery_method"] = "UPS"
    this["user_logged"] = false
    this["added_at"] = Date()
})
```
