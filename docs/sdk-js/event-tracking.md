---
sidebar_position: 5
---

# Event tracking

You can track actions performed by your users, along with properties describing the event.

<u>Requirements:</u>

* Event names must be less than 128 characters long.
* Authorized characters are alphanumeric (uppercase included) and you can insert the following special characters: '-', '_', '.', ' ' (space), '/', and ':'.

```js
$screeb('event.track', 'Product added to cart');
```

From the Screeb platform, to customize the conditions the surveys are displayed for a visitor, you can apply custom targeting rules using these events: trigger count or last event time.

## Attributes

In order to bring context to your event handling, some properties can be added to the event.

<u>Requirements:</u>

* Property names must be limited to 128 characters
* No more than 1000 attributes
* Supported types for values: string, number, boolean and Date.

```js
// trigger custom event
$screeb('event.track', 'Product added to cart', {
  product_name: 'Red bike 2021',
  category: 'sport',
  color: 'red',
  price: 299,
  count: 1,
  reference: '2CF093TG1',
  delivery_method: 'UPS',
  user_logged: false,
  added_at: new Date(),
});
```