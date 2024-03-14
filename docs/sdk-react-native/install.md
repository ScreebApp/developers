---
sidebar_position: 1
---

# Install

## How to install the React-Native SDK in your app?

See the [example](https://github.com/ScreebApp/sdk-reactnative/tree/master/example) to install the last version of the Screeb SDK dependency in a React-Native app.

<p align="center">
  <a href="https://www.npmjs.com/package/@screeb/react-native"><img alt="npm screeb/react-native" src="https://img.shields.io/npm/v/@screeb/react-native"/></a>
  <a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/badge/license-MIT-purple.svg" alt="License: MIT"/></a>
  <a href="https://cocoapods.org/pods/Screeb"><img src="https://img.shields.io/cocoapods/v/Screeb.svg?style=flat" alt="Cocoapods"/></a>
  <a href="https://search.maven.org/search?q=g:%22app.screeb.sdk%22%20AND%20a:%22survey%22"><img src="https://img.shields.io/maven-central/v/app.screeb.sdk/survey.svg?label=Maven%20Central" alt="Maven Central"/></a>
</p>

## Screeb SDK Usage in CI Environments

Please note that if you are utilizing a Continuous Integration (CI) system, it is advisable to deactivate the Screeb SDK during CI execution. This precaution helps prevent the creation of numerous new anonymous users and potential exceedance of your MTU limit.

## Technical requirements

The Screeb SDK is configured to work with **Android SDK version 19 minimum** and **iOS version 11.0 minimum**.

The Swift version is **>= v5.5.2** and XCode version **>= 13.2.1**.

The size of the SDK is approximately 27 KB on Android and approximately 198 KB on iOS.

## How to configure the React-Native SDK in your app?

First, log in to the Screeb application, then create your first survey.

### Add Screeb as a dependency

```sh
npm install @screeb/react-native
```

### Android

The Android SDK needs the permissions `INTERNET` to work well.

```xml
<uses-permission android:name="android.permission.INTERNET" />
```

The SDK also need theses permissions if you want to use the Screeb Audio/Video feature.
```xml
<uses-permission android:name="android.permission.CAMERA"/>
<uses-permission android:name="android.permission.MICROPHONE" />
<uses-feature android:name="android.hardware.camera" android:required="true"/>
<uses-feature android:name="android.hardware.camera.autofocus"/>
<uses-permission android:name="android.permission.RECORD_AUDIO" />
<uses-permission android:name="android.permission.MODIFY_AUDIO_SETTINGS" />
```

### iOS

The SDK need theses permissions if you want to use the Screeb Audio/Video feature.
```xml
<key>NSCameraUsageDescription</key>
<string>This app needs access to the camera to take photos.</string>
<key>NSMicrophoneUsageDescription</key>
<string>This app needs access to microphone to record audio.</string>
<key>UISupportedInterfaceOrientations</key>
```

#### Update

When upgrading the React-Native SDK version, you may need to run in `ios/` directory:

```sh
cd ios/
pod update Screeb
```

### Import Screeb SDK into your package

```js
import { initSdk, trackScreen, trackEvent, setProperties, setIdentity } from "@screeb/react-native";
```

### Setup the SDK

```js
// Init the sdk at app start (useEffect hook used here, but componentDidMount is fine)
React.useEffect(() => {
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
}, []);
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
