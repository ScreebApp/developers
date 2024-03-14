---
sidebar_position: 4
---

# Event tracking

You can track actions performed by your users, along with properties describing the event.

<u>Requirements:</u>

* Event names must be less than 128 characters long.
* Authorized characters are alphanumeric (uppercase included) and you can insert the following special characters: '-' , '_' and ' ' (space).

```swift
Screeb.trackEvent(name: "Product removed from cart", trackingEventProperties: [:])
```

From the Screeb platform, to customize the conditions the surveys are displayed for a visitor, you can apply custom targeting rules using these events: trigger count or last event time.

## Attributes

In order to bring context to your event handling, some properties can be added to the event.

<u>Requirements:</u>

* Property names must be limited to 128 characters
* No more than 1000 attributes
* Supported types for values: string, number (Int, Long, Double), boolean and Date.

```swift
// trigger custom event
Screeb.trackEvent(name: "Product added to cart", trackingEventProperties: [
    "product_name": AnyEncodable("Red bike 2021"),
    "category": AnyEncodable("sport"),
    "price": AnyEncodable(12.29),
    "count": AnyEncodable(1),
    "delivery_method": AnyEncodable("UPS"),
    "user_logged": AnyEncodable(false),
    "added_at": AnyEncodable(Date())
])
```
