---
sidebar_position: 5
---

# Screen tracking

You can track screen visited by your users, along with properties describing the screen.

<u>Requirements:</u>

* Screen names must be less than 128 characters long.
* Authorized characters are alphanumeric (uppercase included) and you can insert the following special characters: '-', '_', '.', ' ' (space), '/', and ':'.

```dart
PluginScreeb.trackScreen("MyHomeScreen");
```

## Attributes

In order to bring context to your event handling, some properties can be added to the screen.

<u>Requirements:</u>

* Property names must be limited to 128 characters
* No more than 1000 attributes
* Supported types for values: string, number (Int, Long, Double), boolean and Date.

```dart
// screen tracking with custom properties
PluginScreeb.trackScreen('MyHomeScreen', {
    'example-prop1': false,
    'example-prop2': 29,
    'example-prop3' : 'iPhone 13',
});
```
