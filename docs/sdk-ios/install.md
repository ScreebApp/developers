---
sidebar_position: 1
---

# Install

## How to install the iOS SDK in your app?

See the [example](https://github.com/ScreebApp/sdk-ios-public) to install the last version of the Screeb SDK dependency in a native iOS app.

You can find here useful information if you are using one of these technologies:

1. Flutter: [Releases](https://pub.dev/packages/plugin_screeb) - [sources](https://github.com/ScreebApp/flutter-screeb-plugin) - [example](https://github.com/ScreebApp/flutter-screeb-plugin/tree/master/example)
2. React Native: [Releases](https://www.npmjs.com/package/@screeb/react-native) - [sources](https://github.com/ScreebApp/sdk-reactnative) - [example](https://github.com/ScreebApp/sdk-reactnative/tree/master/example)

[![Version](https://img.shields.io/cocoapods/v/Screeb.svg?style=flat)](https://cocoapods.org/pods/Screeb)

## Screeb SDK Usage in CI Environments

Please note that if you are utilizing a Continuous Integration (CI) system, it is advisable to deactivate the Screeb SDK during CI execution. This precaution helps prevent the creation of numerous new anonymous users and potential exceedance of your MTU limit.

## Technical requirements

The Screeb SDK is configured to work with **iOS version 11.0 minimum**.

The Swift version is **>= v5.5.2** and XCode version **>= 13.2.1**.

The size of the SDK is approximately **198 KB**.

The SDK also need theses permissions if you want to use the Screeb Audio/Video feature.
```xml
<key>NSCameraUsageDescription</key>
<string>This app needs access to the camera to take photos.</string>
<key>NSMicrophoneUsageDescription</key>
<string>This app needs access to microphone to record audio.</string>
<key>UISupportedInterfaceOrientations</key>
```

## How to configure the iOS SDK in your app?

First, log in to the Screeb application, then create your first survey.

When your survey is ready to share, we will provide a Swift snippet to copy into the `scene()` function of the `SceneDelegate` protocol.
If your application doesn't use a `SceneDelegate`, you should place the snippet in `AppDelegate` instead.
If your application is using SwiftUI lifecycle without an `AppDelegate` then you can try to access `rootViewController` this way:
https://developer.apple.com/forums/thread/695115

### Add Screeb to dependencies:

#### Using Cocoapods

To install the sdk, you just need to add the following lines in your project Podfile file :

```ruby
pod "Screeb", "x.x.x"
```

#### Using Swift Package Manager

To install the sdk, you just need to add the following lines in your project Package.swift file :

```swift
dependencies: [
    .package(url: "https://github.com/ScreebApp/sdk-ios-public", .upToNextMajor(from: "x.x.x"))
]
```

You can also do it from Xcode:

1. Go to File > Add Packages...
2. In the top right corner paste the project URL: https://github.com/ScreebApp/sdk-ios-public
3. Click Next and select the version you want to use

### Setup the SDK

```swift
// Initialization using SceneDelegate
class SceneDelegate: UIResponder, UIWindowSceneDelegate {
// [..]
    func scene(_ scene: UIScene, willConnectTo session: UISceneSession, options connectionOptions: UIScene.ConnectionOptions) {
        Screeb.initSdk(
                   context: nil,
                   channelId: "<ios-channel-id>",
                   identity: "<user-id>", // optional
                   visitorProperty: ["age": AnyEncodable(12), "name": AnyEncodable("JohnDoe")], // optional
                   initOptions: InitOptions(automaticScreenDetection: true|false) // optional
        )
        guard let _ = (scene as? UIWindowScene) else { return }
    }
// [..]
}
```

Or:

```swift
// Initialization using AppDelegate
@UIApplicationMain
class AppDelegate: UIResponder, UIApplicationDelegate {
// [..]
    func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
        Screeb.initSdk(
                   context: nil,
                   channelId: "<ios-channel-id>",
                   identity: "<user-id>", // optional
                   visitorProperty: ["age": AnyEncodable(12), "name": AnyEncodable("JohnDoe")], // optional
                   initOptions: InitOptions(automaticScreenDetection: true|false) // optional
        )
        return true
    }
// [..]
}
```

## About SDK lifecycle

At any time, you can disable the Screeb SDK with the following command:

```swift
Screeb.close()
```

## Next steps

### 1- Identify visitors

[See here.](./identity)

### 2- Event tracking

[See here.](./event-tracking)

### 3- Screen tracking

[See here.](./screen-tracking)

### 4- Start the survey programmatically

[See here.](./start-survey-programmatically)

## SDK dependencies

The iOS SDK does not have any external dependencies from version 2.0.0 onwards.
