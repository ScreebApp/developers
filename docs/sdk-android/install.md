---
sidebar_position: 1
---

# Install

## How to install the Android SDK in your app?

See the [example](https://github.com/ScreebApp/sdk-android-public) to install the last version of the Screeb SDK dependency in a native Android app.

You can find here useful information if you are using one of these technologies:

1. Flutter: [Releases](https://pub.dev/packages/plugin_screeb) - [sources](https://github.com/ScreebApp/flutter-screeb-plugin) - [example](https://github.com/ScreebApp/flutter-screeb-plugin/tree/master/example)
2. React Native: [Releases](https://www.npmjs.com/package/@screeb/react-native) - [sources](https://github.com/ScreebApp/sdk-reactnative) - [example](https://github.com/ScreebApp/sdk-reactnative/tree/master/example)

[![Maven Central](https://img.shields.io/maven-central/v/app.screeb.sdk/survey.svg?label=Maven%20Central)](https://search.maven.org/search?q=g:%22app.screeb.sdk%22%20AND%20a:%22survey%22)

## Screeb SDK Usage in CI Environments

Please note that if you are utilizing a Continuous Integration (CI) system, it is advisable to deactivate the Screeb SDK during CI execution. This precaution helps prevent the creation of numerous new anonymous users and potential exceedance of your MTU limit.

## Technical requirements

The Screeb SDK is configured to work with **Android SDK version 19 minimum**.

The size of the SDK is approximately **13 KB**.

The SDK needs the permissions `INTERNET` to work well.

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

## How to configure the Android SDK in your app?

### Add Screeb as a dependency

```
# build.gradle
allprojects {
    repositories {
        mavenCentral()
    }
}

implementation 'app.screeb.sdk:survey:x.x.x'
```

### Import Screeb SDK into your package

```kotlin
import app.screeb.sdk.Screeb
```

### Setup the SDK

```kotlin
// simple initialization
Screeb.initSdk(this, "<android-channel-id>")

// detailed initialization using a unique id and custom properties, see Identify visitors section
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
    },
    InitOptions(
        automaticScreenDetection = true|false // optional, default: false
    )
)
```

Fullscreen mode allows adapting screeb view bottom margin when an app is in fullscreen mode.

## About SDK lifecycle

At any time, you can disable the Screeb SDK with the following command:

```kotlin
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

If you face any issues with our dependencies, please contact our support team.

- core-ktx:1.6.0
- webkit:1.7.0
- com.google.android.play:review:2.0.1
- com.google.android.play:review-ktx:2.0.1
