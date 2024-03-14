---
sidebar_position: 9
---

# Troubleshooting

## Check Flutter SDK is loaded correctly

You can use the `PluginScreeb.debug()` command in your code.

You will get contextual information in the debugging log about the running user session:

<img width="594" alt="Capture d’écran 2023-02-08 à 15 54 43" src="https://user-images.githubusercontent.com/80167759/217565520-0d6727e7-e178-492d-ba26-b69302b60861.png"/>

## Debug targeting rules

Since the targeting engine built by Screeb runs in the background, you may not understand which rules prevent your survey from being displayed to a user.

You can use the `PluginScreeb.debugTargeting()` command in your code.

You will get a list of available surveys and the associated targeting rules:

<img width="594" alt="Capture d’écran 2023-02-08 à 15 54 20" src="https://user-images.githubusercontent.com/80167759/217565787-49ef0864-0ef1-4e28-8cd4-0f8999318a84.png"/>

The rules with a green dot 🟢 are the ones that have been validated for this user. The rules with a red dot 🔴 are not validated and may be the reason why your survey is not displayed.

## Warning iOS

You won't see debug log on iOS if you didn't launch your app with xcode