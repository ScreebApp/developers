---
sidebar_position: 6
---

# Start survey programmatically

## How to start a survey programmatically?

In most cases, you should let the Screeb targeting engine start the survey. But sometimes, you may want to run a survey on user action.

```kotlin
Screeb.startSurvey(
    surveyId = "<SURVEY_ID>"
)
```

## Prevent multiple displays?

If current user already replied to your survey and you would rather not display it many times, please add the `allowMultipleResponses` argument:

```kotlin
Screeb.startSurvey(
    surveyId = "<SURVEY_ID>",
    allowMultipleResponses = false
)
```

## Contextualize response

The `startSurvey` command accepts a list of hidden fields. Values passed as parameters will be listed alongside the responses, on the Screeb platform.

```kotlin
Screeb.startSurvey(
    surveyId = "<SURVEY_ID>",
    hiddenFields = HiddenFields().apply {
        this["h1"] = "hidden_field1"
        this["h_count"] = 75
    }
)
```