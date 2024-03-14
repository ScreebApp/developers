---
sidebar_position: 8
---

# Reference

## Introduction

The reference is your key to a comprehensive understanding of the Screeb Flutter SDK.

✨ **If this is your first look at the documentation, we recommend beginning with the [Getting started guide](./install).**

## Screeb methods

After installing the Screeb Flutter SDK in your mobile application, you will have access to the PluginScreeb module. `PluginScreeb` methods are executed sequentially.

Use the following syntaxt: `PluginScreeb.method(argument1, argument2, ...)`.

| Method  | Definition  | More  |
|---|---|---|
| `initSdk`  | The `initSdk` method starts the SDK and associates the current session to your Screeb project. Your android and your ios identifier must be passed. Optionally, this method can identify the current user. If no user identifier is provided, an anonymous visitor session is created. You will able to later change the current user by using the `identity` method.  | [👉](./identity)  |
| `closeSdk`  | The `closeSdk` method shutdowns the Screeb SDK. It is the opposite to `initSdk`.  | [👉](./install)  |
| `setIdentity`  | The `setIdentity` method tells Screeb who the current user is. When Screeb is only installed on the logged page, please identify users using the `initSdk` method instead. This method allows identifying users lazily, on user login.  | [👉](./identity)  |
| `resetIdentity`  | The `resetIdentity` method tells Screeb to reset the current user session and switch to an anonymous user. Please note it won't disable the Flutter SDK until you call the `closeSdk` command.  | [👉](./identity)  |
| `setVisitorProperties`  | The `setVisitorProperties` method associates some contextual properties to the current user session. You will be able to personalize surveys and target questions to the right audience.  | [👉](./identity)  |
| `assignGroup`  | The `assignGroup` method assigns the current user to a Screeb segment. Some properties can be passed to the method to contextualize the segment.  | [👉](./group-assignation)  |
| `unassignGroup`  | The `unassignGroup` method unassigns the current user from a Screeb segment.  | [👉](./group-assignation)  |
| `trackEvent`  | The `trackEvent` method tracks actions performed by current user, along with properties describing the event.  | [👉](./event-tracking)  |
| `trackScreen` | The `trackScreen` method tracks the screen/view of the current user, along with properties describing the event.  | [👉](./event-tracking)  |
| `startSurvey`  | The `startSurvey` method starts a survey by providing its id. Optionally, this command can prevent a user to see a single survey multiple times. Please note that running a survey using `startSurvey` will require a developer: to be autonomous, use the Screeb targeting engine instead.  | [👉](./start-survey-programmatically)  |
| `debug`  | The `debug` method prints the current configuration of Screeb SDK, with website id, user id, session duration...  | [👉](./troubleshooting)  |
| `debugTargeting`  | The `debugTargeting` method prints the status of each targeting rule for each survey of your account.  | [👉](./troubleshooting)  |
