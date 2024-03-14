---
sidebar_position: 6
---

# Start survey programmatically

## How to start a survey programmatically?

In most cases, you should let the Screeb targeting engine start the survey. But sometimes, you may want to run a survey on user action.

```dart
PluginScreeb.startSurvey("<survey-id>");
```

You will find survey id in Screeb platform.

## Prevent multiple displays?

If current user already replied to your survey and you would rather not display it many times, please add the `allowMultipleResponses` argument:

```dart
PluginScreeb.startSurvey("<survey-id>", false);
```

## Contextualize response

The `startSurvey` command accepts a list of hidden fields. Values passed as parameters will be listed alongside the responses, on the Screeb platform.

```dart
PluginScreeb.startSurvey("<survey-id>", true, {
    color: "red",
    size: 42
});
```
