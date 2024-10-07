---
sidebar_position: 7
---

# Hooks

## Set hooks

You can define custom hooks to be executed on various events.

Thanks to this you will be able to interact with your website when a survey appears, or execute some custom code when a survey is submitted.

You can define hooks on `Screeb.initSdk()` and `Screeb.startSurvey()` commands. Hooks are all optional.

## Available hooks

| Hook Name                                                 | Available on `Screeb.initSdk()` | Available on `Screeb.startSurvey()` |
| --------------------------------------------------------- | ------------------- | --------------------------- |
| [`onSurveyShowed`](#onsurveyshowed)                       | Yes ✅              | Yes ✅                      |
| [`onSurveyStarted`](#onsurveystarted)                     | Yes ✅              | Yes ✅                      |
| [`onQuestionReplied`](#onquestionreplied)                 | Yes ✅              | Yes ✅                      |
| [`onSurveyCompleted`](#onsurveycompleted)                 | Yes ✅              | Yes ✅                      |
| [`onSurveyHidden`](#onsurveyhidden)                       | Yes ✅              | Yes ✅                      |
| [`onAppStoreRatingTriggered`](#onappstoreratingtriggered) | Yes ✅              | Yes ✅                      |
| [`onReady`](#onready)                                     | Yes ✅              | No ❌                       |
| [`onSurveyDisplayAllowed`](#onsurveydisplayallowed)       | Yes ✅              | No ❌                       |


### Set hooks on SDK init

```kotlin
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
        isFullscreenMode = true|false,  // fullscreen mode, optional, default: false
        automaticScreenDetection = true|false // optional, default: false
    ),
    hashMapOf(
        "version" to "1.0.0",
        "onReady" to { payload:Any -> Log.d("Screeb", "SDK Ready: $payload")},
        "onSurveyDisplayAllowed" to { payload:Any -> true}
    )
)
```

### Set hooks on survey start

```kotlin
Screeb.startSurvey(
    surveyId = "<survey-id>",
    allowMultipleResponses = true,
    hiddenFields = HiddenFields().apply {
        this["h1"] = "hidden_field1"
        this["h_count"] = 75
    },
    hashMapOf(
        "version" to "1.0.0",
        "onSurveyShowed" to { payload:Any -> Log.d("Screeb", "Survey showed $payload")}
    )
)
```

---

## `onSurveyShowed`

Called when a survey is showed.

<details open>
<summary>Example</summary>

```kotlin
Screeb.initSdk(this,
    "<android-channel-id>",
    ...
    hashMapOf(
        "version" to "1.0.0",
        "onSurveyShowed" to { payload:Any -> Log.d("Screeb", "Survey has been showed: $payload")},
    )
)
```
</details>

<details>
<summary>Payload definition</summary>

```json
{
    channel: {
        id: string,
        type: "android"
    },
    survey: {
        id: string,
        survey_position: "center-left" | "center-center" | "center-right" | "bottom-left" | "bottom-center" | "bottom-right",
        survey_size: 25 | 50 | 75 | 100 | 125 | 150,
        survey_format: "conversational" | "cards",
    },
    response: {
        id: string,
        items: {
            question: {
                id: string;
                title: string;
                type: "text" | "video";
                url: string;
            };
            answer: {
                fields: {
                    type: "string" | "number" | "boolean" | "none" | "time" | "url";
                },
                text: string;
                number: number;
                boolean: boolean;
                time: Date;
                url: string;
            }[] | undefined;
            replied_at: Date | undefined;
        }[];
    },
    user: {
        anonymous_id: string,
        user_id: string,
    }
}
```
</details>

## `onSurveyStarted`

Called when a survey is started.

<details open>
<summary>Example</summary>

```kotlin
Screeb.initSdk(this,
    "<android-channel-id>",
    ...
    hashMapOf(
        "version" to "1.0.0",
        "onSurveyStarted" to { payload:Any -> Log.d("Screeb", "Survey has been started: $payload")},
    )
)
```
</details>

<details>
<summary>Payload definition</summary>

```json
{
    channel: {
        id: string,
        type: "android"
    },
    survey: {
        id: string,
        survey_position: "center-left" | "center-center" | "center-right" | "bottom-left" | "bottom-center" | "bottom-right",
        survey_size: 25 | 50 | 75 | 100 | 125 | 150,
        survey_format: "conversational" | "cards",
    },
    response: {
        id: string,
    },
    user: {
        anonymous_id: string,
        user_id: string,
    }
}
```
</details>

## `onQuestionReplied`

Called when a question is replied.

<details open>
<summary>Example</summary>

```kotlin
Screeb.initSdk(this,
    "<android-channel-id>",
    ...
    hashMapOf(
        "version" to "1.0.0",
        "onQuestionReplied" to { payload:Any -> Log.d("Screeb", "Question has been replied: $payload")},
    )
)
```
</details>

<details>
<summary>Payload definition</summary>

```json
{
    channel: {
        id: string,
        type: "android"
    },
    survey: {
        id: string,
        survey_position: "center-left" | "center-center" | "center-right" | "bottom-left" | "bottom-center" | "bottom-right",
        survey_size: 25 | 50 | 75 | 100 | 125 | 150,
        survey_format: "conversational" | "cards",
    },
    response: {
        id: string,
        status: "started" | "ended" | "closed" | "interrupted"
        question: {
            id: string;
            title: string;
            type: "text" | "video";
            url: string;
        };
        answer: {
            fields: {
                type: "string" | "number" | "boolean" | "none" | "time" | "url";
            },
            text: string;
            number: number;
            boolean: boolean;
            time: Date;
            url: string;
        };
        items: {
            question: {
                id: string;
                title: string;
                type: "text" | "video";
                url: string;
            };
            answer: {
                fields: {
                    type: "string" | "number" | "boolean" | "none" | "time" | "url";
                },
                text: string;
                number: number;
                boolean: boolean;
                time: Date;
                url: string;
            }[] | undefined;
            replied_at: Date | undefined;
        }[];
    },
    user: {
        anonymous_id: string,
        user_id: string,
    }
}
```
</details>

## `onSurveyCompleted`

Called when a survey is completed.

<details open>
<summary>Example</summary>

```kotlin
Screeb.initSdk(this,
    "<android-channel-id>",
    ...
    hashMapOf(
        "version" to "1.0.0",
        "onSurveyCompleted" to { payload:Any -> Log.d("Screeb", "Survey has been completed: $payload")},
    )
)
```
</details>

<details>
<summary>Payload definition</summary>

```json
{
    channel: {
        id: string,
        type: "android"
    },
    survey: {
        id: string,
        survey_position: "center-left" | "center-center" | "center-right" | "bottom-left" | "bottom-center" | "bottom-right",
        survey_size: 25 | 50 | 75 | 100 | 125 | 150,
        survey_format: "conversational" | "cards",
    },
    response: {
        id: string,
        items: {
            question: {
                id: string;
                title: string;
                type: "text" | "video";
                url: string;
            };
            answer: {
                fields: {
                    type: "string" | "number" | "boolean" | "none" | "time" | "url";
                },
                text: string;
                number: number;
                boolean: boolean;
                time: Date;
                url: string;
            }[] | undefined;
            replied_at: Date | undefined;
        }[];
    },
    user: {
        anonymous_id: string,
        user_id: string,
    }
}
```
</details>

## `onSurveyHidden`

Called when a survey is hidden.

<details open>
<summary>Example</summary>

```kotlin
Screeb.initSdk(this,
    "<android-channel-id>",
    ...
    hashMapOf(
        "version" to "1.0.0",
        "onSurveyHidden" to { payload:Any -> Log.d("Screeb", "Survey has been hidden: $payload")},
    )
)
```
</details>

<details>
<summary>Payload definition</summary>

```json
{
    channel: {
        id: string,
        type: "android"
    },
    survey: {
        id: string,
        survey_position: "center-left" | "center-center" | "center-right" | "bottom-left" | "bottom-center" | "bottom-right",
        survey_size: 25 | 50 | 75 | 100 | 125 | 150,
        survey_format: "conversational" | "cards",
    },
    response: {
        id: string,
        hide_reason: "started" | "ended" | "closed" | "interrupted",
        items: {
            question: {
                id: string;
                title: string;
                type: "text" | "video";
                url: string;
            };
            answer: {
                fields: {
                    type: "string" | "number" | "boolean" | "none" | "time" | "url";
                },
                text: string;
                number: number;
                boolean: boolean;
                time: Date;
                url: string;
            }[] | undefined;
            replied_at: Date | undefined;
        }[];
    },
    user: {
        anonymous_id: string,
        user_id: string,
    }
}
```
</details>

## `onAppStoreRatingTriggered`

Called when an App Store Rating question is triggered.

<details open>
<summary>Example</summary>

```kotlin
Screeb.initSdk(this,
    "<android-channel-id>",
    ...
    hashMapOf(
        "version" to "1.0.0",
        "onAppStoreRatingTriggered" to { payload:Any -> Log.d("Screeb", "App store rating triggered: $payload")},
    )
)
```
</details>

<details>
<summary>Payload definition</summary>

```json
{
    channel: {
        id: string,
        type: "android"
    },
    user: {
        anonymous_id: string,
        user_id: string,
    }
}
```
</details>

## `onReady`

Called when the SDK is ready. Only available on `Screeb.initSdk()`.

<details open>
<summary>Example</summary>

```kotlin
Screeb.initSdk(this,
    "<android-channel-id>",
    ...
    hashMapOf(
        "version" to "1.0.0",
        "onReady" to { payload:Any -> Log.d("Screeb", "SDK Ready: $payload")},
    )
)
```
</details>

<details>
<summary>Payload definition</summary>

```json
{
    channel: {
        id: string,
        type: "android"
    },
    user: {
        anonymous_id: string,
        user_id: string,
    }
}
```
</details>

## `onSurveyDisplayAllowed`

Called before a survey display to allow it or not. Only available on `Screeb.initSdk()`.
Return a boolean value. Return `false` to prevent display.

<details open>
<summary>Example</summary>

```kotlin
Screeb.initSdk(this,
    "<android-channel-id>",
    ...
    hashMapOf(
        "version" to "1.0.0",
        "onSurveyDisplayAllowed" to { payload:Any -> Log.d("Screeb", "Survey display allowed: $payload"); true},
    )
)
```
</details>

<details>
<summary>Payload definition</summary>

```json
{
    channel: {
        id: string,
        type: "android"
    },
    survey: {
        id: string,
    },
    user: {
        anonymous_id: string,
        user_id: string,
    }
}
```
</details>