---
sidebar_position: 10
---

# Troubleshooting

## "Failed to build module 'Screeb'; this SDK is not supported by the compiler"

```txt
ScreebModule.swift:1:8 Failed to build module 'Screeb'; this SDK is not supported by the compiler (the SDK is built with 'Apple Swift version 5.5.2 (swiftlang-1300.0.47.5 clang-1300.0.29.30)', while this compiler is 'Apple Swift version 5.7.1 (swiftlang-5.7.1.135.3 clang-1400.0.29.51)'). Please select a toolchain which matches the SDK.
```

This compilation error is raised when support for *library evolution* is not enabled. Please add the following configuration to your Podfile:

```ruby
post_install do |installer|
    installer.pods_project.targets.each do |target|
        target.build_configurations.each do |config|
            config.build_settings['BUILD_LIBRARY_FOR_DISTRIBUTION'] = 'YES'
        end
    end
end
```

## Check IOS SDK is loaded correctly

You can use the `Screeb.debug()` command in your code.

You will get contextual information in the debugging log about the running user session:

<img width="638" alt="Capture d’écran 2023-02-08 à 15 59 14" src="https://user-images.githubusercontent.com/80167759/217566866-b7891608-7978-42f4-908b-b546b181ef9f.png"/>

## Debug targeting rules

Since the targeting engine built by Screeb runs in the background, you may not understand which rules prevent your survey from being displayed to a user.

You can use the `Screeb.debugTargeting()` command in your code.

You will get a list of available surveys and the associated targeting rules:

<img width="656" alt="Capture d’écran 2023-02-08 à 16 00 05" src="https://user-images.githubusercontent.com/80167759/217566900-b6bbc618-ef17-4209-bf7a-2c39f9090e92.png"/>

The rules with a green dot 🟢 are the ones that have been validated for this user. The rules with a red dot 🔴 are not validated and may be the reason why your survey is not displayed.
