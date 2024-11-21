---
sidebar_position: 4
---

# Event tracking

You can track actions performed by your users, along with properties describing the event.

<u>Requirements:</u>

* Event names must be less than 128 characters long.
* Authorized characters are alphanumeric (uppercase included) and you can insert the following special characters: '-', '_', '.', ' ' (space), '/', and ':'.

```dart
PluginScreeb.trackEvent("Product removed from cart");
```

From the Screeb platform, to customize the conditions the surveys are displayed for a visitor, you can apply custom targeting rules using these events: trigger count or last event time.

## Attributes

:::warning

For now, Properties attached to events are not supported in the Screeb platform.
You can send properties but there are no possible use cases for them.
We are working on it and will update this documentation when this feature is available.

:::

In order to bring context to your event handling, some properties can be added to the event.

<u>Requirements:</u>

* Property names must be limited to 128 characters
* No more than 1000 attributes
* Supported types for values: string, number (Int, Long, Double), boolean and Date.

```dart
// trigger custom event
PluginScreeb.trackEvent("Product added to cart", {
    product_name: "Red bike 2021",
    category: "sport",
    price: 12.29,
    count: 1,
    delivery_method: "UPS",
    user_logged: false,
    added_at: new Date()
})
```
