---
sidebar_class_name: hidden
---

# Device tracking

2 types of tracking are available in Screeb:

- Screeb tracking: events are transmitted to Screeb backend and are available for analytics in the admin panel.
- Device tracking: events are stored into localStorage (browser) or internal device memory (mobile).

### Summary

* [Screeb tracking](#screeb-tracking)
	* [Javascript tag](#11-javascript-tag)
	* [Android SDK](#12-android-sdk)
	* [iOS SDK](#13-ios-sdk)
	* [ReactNative SDK](#14-reactnative-sdk)
	* [Flutter SDK](#15-flutter-sdk)
* [Device tracking](#device-tracking)
	* [Javascript tag](#21-javascript-tag)
	* [Android SDK](#22-android-sdk)
	* [iOS SDK](#23-ios-sdk)
	* [ReactNative SDK](#24-reactnative-sdk)
	* [Flutter SDK](#25-flutter-sdk)

## Screeb tracking

You will be able to collect events from multiple devices and attach it to a unique user identity. These data are made available to Screeb analytics.

Triggering a survey on a user event can involve a ~20 seconds delay.

![](/assets/device-tracking-1.png)

### 1.1 Javascript Tag

`init` command:

```js
$screeb('init', '<website-id>', {
  identity: {
    properties: {
      firstname: '<user-firstname>',
      lastname: '<user-lastname>',
      plan: '<user-plan>',
      last_seen_at: new Date(),
      authenticated: true,
    }
  }
});
```

`identity` command:

```js
$screeb('identity', 'abcd-1234', {
  email: 'samuel@screeb.app',
  age: 42,
  logged: true,
  signed_up_at: new Date(),
});
```

`identity.properties` command:

```js
$screeb('identity.properties', {
  email: 'samuel@screeb.app',
  age: 42,
  logged: true,
  signed_up_at: new Date(),
});
```

`event.track` command:

```js
$screeb('event.track', 'Product added to cart');
```

Group assignation commands:

```js
$screeb('identity.group.assign', 'company', 'Apple');
$screeb('identity.group.unassign', 'plan', 'Growth');
```

### 1.2 Android SDK

`initSDK` method:

```kotlin
Screeb.initSdk(this,
    "<android-channel-id>",
    "<unique-user-id>",          // optional
    VisitorProperties().apply {  // optional
        this["firstname"] = "<user-firstname>"
        this["lastname"] = "<user-lastname>"
        this["plan"] = "<user-plan>"
        this["age"] = 42
        this["logged_at"] = Date()
        this["authenticated"] = true
    }
)
```

`setIdentity` method:

```kotlin
Screeb.setIdentity("<unique-user-id>", VisitorProperties().apply {
    this["firstname"] = "<user-firstname>"
    this["lastname"] = "<user-lastname>"
    this["plan"] = "<user-plan>"
    this["age"] = 42
    this["logged_at"] = Date()
    this["authenticated"] = true
})
```

`setProperties` method:

```kotlin
Screeb.setProperties(
    VisitorProperties().apply {
        this["firstname"] = "<user-firstname>"
        this["lastname"] = "<user-lastname>"
        this["plan"] = "<user-plan>"
        this["age"] = 42
        this["logged_at"] = Date()
        this["authenticated"] = true
    }
)
```

`Screeb.trackEvent` method:

```kotlin
Screeb.trackEvent("Product removed from cart")
```

Group assignation commands:

```kotlin
Screeb.assignGroup("company", "Apple")
Screeb.assignGroup("plan", "Growth")
```

### 1.3 iOS SDK

`initSDK` method:

```swift
Screeb.initSdk(
   context: window?.rootViewController,
   channelId: "<ios-channel-id>",
   identity: "<user-id>", // optional
   visitorProperty: ["age": AnyEncodable(12), "name": AnyEncodable("JohnDoe")] // optional
)
```

`setIdentity` method:

```swift
Screeb.setIdentity(uniqueVisitorId: "<unique-visitor-id>", visitorProperty: [
    "age": AnyEncodable(27),
    "category": AnyEncodable("cycle"),
    "purchasedAt": AnyEncodable(Date())
])
```

`setProperties` method:

```swift
Screeb.visitorProperty(visitorProperty: [
  "email" = AnyEncodable("clement@screeb.app"),
  "age" = AnyEncodable(29),
  "logged" = AnyEncodable(true),
  "signed_up_at" = AnyEncodable(Date()),
])
```

`Screeb.trackEvent` method:

```swift
Screeb.trackEvent(name: "Product removed from cart", trackingEventProperties: [:])
```

Group assignation commands:

```swift
Screeb.assignGroup(type: "company", name: "Apple")
Screeb.unassignGroup(type: "plan", name: "Growth")
```

### 1.4 ReactNative SDK

`initSDK` method:

```js
initSdk(
  "<android-channel-id>",
  "<ios-channel-id>",
  "<user-id>",
  {
     'example-prop1': false,
     'example-prop2': 29,
     'example-prop3' : 'iPhone 13',
  }
);
```

`setIdentity` method:

```js
setIdentity('abcd-1234', {
    'example-prop1': false,
    'example-prop2': 29,
    'example-prop3': 'iPhone 13',
});
```

`setProperties` method:

```js
setProperties({
    'example-prop1': false,
    'example-prop2': 29,
    'example-prop3': 'iPhone 13',
});
```

`trackEvent` method:

```js
trackEvent("Product removed from cart");
```

Group assignation methods:

```js
assignGroup("company", "Apple");
unassignGroup("plan", "Growth");
```

### 1.5 Flutter SDK

`initSDK` method:

```dart
PluginScreeb.initSdk("<android-channel-id>", "<ios-channel-id>", null, <String, dynamic>{
    'isConnected': true,
    'age': 27,
    'company' : 'Screeb',
    'technology' : 'iOS',
    'flutterAccount' : true
});
```

`setIdentity` method:

```dart
PluginScreeb.setIdentity("<user-id>", <String, dynamic>{
    'isConnected': true,
    'age': 27,
    'company' : 'Screeb',
    'technology' : 'iOS',
    'flutterAccount' : true
});
```

`setProperties` method:

```dart
PluginScreeb.setProperties("<user-id>", <String, dynamic>{
    'isConnected': true,
    'age': 27,
    'company' : 'Screeb',
    'technology' : 'iOS',
    'flutterAccount' : true
});
```

`trackEvent` method:

```dart
PluginScreeb.trackEvent("Product removed from cart");
```

Group assignation methods:

```dart
PluginScreeb.assignGroup("company", "Apple");
PluginScreeb.unassignGroup("plan", "Growth");
```

## Device tracking

Events are stored locally on the user device and won't be available for analytics in the Screeb console.

If users use your application from multiple devices, the targeting rules will be checked against local events only. Since Screeb does not receive these events, privacy is even better.

Device tracking has a low retention policy:

- up to 90 days
- up to 2.000 events

Expect at most 150ko in browser localStorage.

Triggering a survey on a user event will display the survey instantly.

![](/assets/device-tracking-2.png)

### 2.1 Javascript Tag

`init` command:

```js
$screeb('init', '<website-id>', {
  identity: {
    device: {
      properties: {
        firstname: '<user-firstname>',
        lastname: '<user-lastname>',
        plan: '<user-plan>',
        last_seen_at: new Date(),
        authenticated: true,
      }
    }
  }
});
```

`device.identity.properties` command:

```js
$screeb('device.identity.properties', {
  email: 'samuel@screeb.app',
  age: 42,
  logged: true,
  signed_up_at: new Date(),
});
```

`device.event.track` command:

```js
$screeb('device.event.track', 'Product added to cart');
```

Group assignation:

[currently not available]

### 2.2 Android SDK

[currently not available]

### 2.3 iOS SDK

[currently not available]

### 2.4 ReactNative SDK

[currently not available]

### 2.5 Flutter SDK

[currently not available]

## Screeb tracking vs device tracking

If you need events or properties for analytics or response analysis in Screeb, you should use the Screeb tracking.

For applications having a high volumetry of events mainly used to display surveys, you should use the device tracking.

|     | Screeb tracking | Device tracking |
| --- | --- | --- |
| 👍 | * Survey Advanced Targeting<br/> * Segment Analytics<br/> * Funnel Reports <br/>* Response Analysis based on user properties| * lower time to display surveys<br/> * higher volume of events used for survey displays |
| 👎 | * higher delay to display a survey<br />* lower volumes of events allowed in your subscription | * Partial information on Screeb Homepage<br/> * No access to Segment Analytics, Funnel Reports<br />* No responses analysis based on user properties<br />* No variables in questions based on device properties |

Identity properties and events cannot be declared twice, in different locations (Screeb or device). When a mix is necessary, please use a different name.
