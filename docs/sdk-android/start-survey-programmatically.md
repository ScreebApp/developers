---
sidebar_position: 6
---

# Start survey programmatically

## How to start a survey programmatically?

In most cases, you should let the Screeb targeting engine start the survey. But sometimes, you may want to run a survey on user action.

:::tip

You can find the `SURVEY_ID` in the **Manual** section of the survey editor. 
You can also fint in the survey editor **URL**, after the `/surveys/` part.

![](/assets/sdk/survey_targeting_manual.png)

:::

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

## Respect survey status?

By default, using manual survey start will ignore the survey status. If you want to respect the survey status, you can add the `ignoreSurveyStatus` argument and set it to `false`:

```kotlin
Screeb.startSurvey(
    surveyId = "<SURVEY_ID>",
    ignoreSurveyStatus = false
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
