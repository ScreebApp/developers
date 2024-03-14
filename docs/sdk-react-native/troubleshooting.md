---
sidebar_position: 8
---

# Troubleshooting

## Check if ReactNative SDK is initialized correctly

Call the following Screeb method from our SDK:

```js
import { debug } from "@screeb/react-native";
debug();
```

You will get contextual information about the running user session in the native logs:

<img width="650" src="https://user-images.githubusercontent.com/2951285/237030294-dd8c7c7c-60ae-4d97-9561-57f5065ac3bc.png"/>

### Error cases

- An empty channel id means you didn't call the `initSdk` method.
- An empty respondent id means you exceeded your respondent quota.

## Debug targeting rules

Since the targeting engine built by Screeb runs in the background, you may not understand which rules prevent your survey from being displayed to a user.

Call the following Screeb method from our SDK:

```js
import { debugTargeting } from "@screeb/react-native";
debugTargeting();
```

You will get a list of available surveys and the associated targeting rules in the native logs.

<img width="650" src="https://user-images.githubusercontent.com/2951285/237030243-0c4b4b72-eb9d-4b3a-93d3-4c7f7cde0a88.png"/>

The rules with a green dot 🟢 are the ones that have been validated for this user. The rules with a red dot 🔴 are not validated and may be the reason why your survey is not displayed.

## iOS: "Failed to build module 'Screeb'; this SDK is not supported by the compiler"

```txt
ScreebModule.swift:1:8 Failed to build module 'Screeb'; this SDK is not supported by the compiler (the SDK is built with 'Apple Swift version 5.5.2 (swiftlang-1300.0.47.5 clang-1300.0.29.30)', while this compiler is 'Apple Swift version 5.7.1 (swiftlang-5.7.1.135.3 clang-1400.0.29.51)'). Please select a toolchain which matches the SDK.
```

This compilation error is raised when support for _library evolution_ is not enabled. Please add the following configuration to your Podfile:

```ruby
post_install do |installer|
    installer.pods_project.targets.each do |target|
        target.build_configurations.each do |config|
            config.build_settings['BUILD_LIBRARY_FOR_DISTRIBUTION'] = 'YES'
        end
    end
end
```

## iOS: "Cannot load underlying module for 'Alamofire'"

### Option 1

```ruby
target 'abcdProject' do
  [...]

  use_frameworks!

  [...]
end
```

You will also need to desactivate flipper.
If you can't desactivate flipper check Option 2.

### Option 2

Install the [cocoapods-user-defined-build-types](https://github.com/joncardasis/cocoapods-user-defined-build-types) plugin:

```sh
sudo gem install cocoapods-user-defined-build-types
```

Then add the following lines to your Podfile:

```ruby
plugin 'cocoapods-user-defined-build-types'
enable_user_defined_build_types!

[...]

target 'abcdProject' do
  [...]

  pod "Screeb", :build_type => :dynamic_framework

  [...]
end
```
