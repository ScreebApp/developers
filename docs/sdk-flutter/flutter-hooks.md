---
sidebar_position: 7
---

# Hooks

## Set hooks

You can define custom hooks to be executed on various events.

Thanks to this you will be able to interact with your application when a survey appears, or execute some custom code when a survey is submitted.

You can define hooks on `PluginScreeb.initSdk()` and `PluginScreeb.startSurvey()` commands. Hooks are all optional.

## Available hooks

| Hook Name                                                 | Available on `PluginScreeb.initSdk()` | Available on `PluginScreeb.startSurvey()` |
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

```dart
PluginScreeb.initSdk(
    "<android-channel-id>",
    "<ios-channel-id>",
    "<user-id>",
    "<properties>",
    <String, dynamic>{
      "version": "1.0.0",
      "onReady": (dynamic data) {
        log("onReady $data");
      },
      "onSurveyDisplayAllowed": (dynamic data) {
        log("onSurveyDisplayAllowed $data");
        return true;
      },
    });
```

### Set hooks on survey start

```dart
PluginScreeb.startSurvey("<surveyId>", "<allowMultipleResponses>", "<properties>", "<ignoreSurveyStatus>", <String, dynamic>{
    "version": "1.0.0",
    "onSurveyShowed": (dynamic data) {
      print("onSurveyShowed");
      print(data.toString());
    },
    "onQuestionReplied": (dynamic data) {
      print("onQuestionReplied");
      print(data.toString());
    },
},);
```

---

## `onSurveyShowed`

Called when a survey is showed.

<details open>
<summary>Example</summary>

```dart
PluginScreeb.initSdk(
    "<android-channel-id>",
    "<ios-channel-id>",
    "<user-id>",
    "<properties>",
    <String, dynamic>{
      "version": "1.0.0",
      "onSurveyShowed": (dynamic data) {
        log("onSurveyShowed $data");
      },
    });
```
</details>

<details>
<summary>Payload definition</summary>

```json
{
    channel: {
        id: string,
        type: "ios"
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

```dart
PluginScreeb.initSdk(
    "<android-channel-id>",
    "<ios-channel-id>",
    "<user-id>",
    "<properties>",
    <String, dynamic>{
      "version": "1.0.0",
      "onSurveyStarted": (dynamic data) {
        log("onSurveyStarted $data");
      },
    });
```
</details>

<details>
<summary>Payload definition</summary>

```json
{
    channel: {
        id: string,
        type: "ios"
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

```dart
PluginScreeb.initSdk(
    "<android-channel-id>",
    "<ios-channel-id>",
    "<user-id>",
    "<properties>",
    <String, dynamic>{
      "version": "1.0.0",
      "onQuestionReplied": (dynamic data) {
        log("onQuestionReplied $data");
      },
    });
```
</details>

<details>
<summary>Payload definition</summary>

```json
{
    channel: {
        id: string,
        type: "ios"
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

```dart
PluginScreeb.initSdk(
    "<android-channel-id>",
    "<ios-channel-id>",
    "<user-id>",
    "<properties>",
    <String, dynamic>{
      "version": "1.0.0",
      "onSurveyCompleted": (dynamic data) {
        log("onSurveyCompleted $data");
      },
    });
```
</details>

<details>
<summary>Payload definition</summary>

```json
{
    channel: {
        id: string,
        type: "ios"
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

```dart
PluginScreeb.initSdk(
    "<android-channel-id>",
    "<ios-channel-id>",
    "<user-id>",
    "<properties>",
    <String, dynamic>{
      "version": "1.0.0",
      "onSurveyHidden": (dynamic data) {
        log("onSurveyHidden $data");
      },
    });
```
</details>

<details>
<summary>Payload definition</summary>

```json
{
    channel: {
        id: string,
        type: "ios"
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

```dart
PluginScreeb.initSdk(
    "<android-channel-id>",
    "<ios-channel-id>",
    "<user-id>",
    "<properties>",
    <String, dynamic>{
      "version": "1.0.0",
      "onAppStoreRatingTriggered": (dynamic data) {
        log("onAppStoreRatingTriggered $data");
      },
    });
```
</details>

<details>
<summary>Payload definition</summary>

```json
{
    channel: {
        id: string,
        type: "ios"
    },
    user: {
        anonymous_id: string,
        user_id: string,
    }
}
```
</details>

## `onReady`

Called when the SDK is ready. Only available on `PluginScreeb.initSdk()`.

<details open>
<summary>Example</summary>

```dart
PluginScreeb.initSdk(
    "<android-channel-id>",
    "<ios-channel-id>",
    "<user-id>",
    "<properties>",
    <String, dynamic>{
      "version": "1.0.0",
      "onReady": (dynamic data) {
        log("OnReady $data");
      },
    });
```
</details>

<details>
<summary>Payload definition</summary>

```json
{
    channel: {
        id: string,
        type: "ios"
    },
    user: {
        anonymous_id: string,
        user_id: string,
    }
}
```
</details>

## `onSurveyDisplayAllowed`

Called before a survey display to allow it or not. Only available on `PluginScreeb.initSdk()`.
Return a boolean value. Return `false` to prevent display.

<details open>
<summary>Example</summary>

```dart
PluginScreeb.initSdk(
    "<android-channel-id>",
    "<ios-channel-id>",
    "<user-id>",
    "<properties>",
    <String, dynamic>{
      "version": "1.0.0",
      "onSurveyDisplayAvailable": (dynamic data) {
        log("onSurveyDisplayAvailable $data");
        return true;
      },
    });
```
</details>

<details>
<summary>Payload definition</summary>

```json
{
    channel: {
        id: string,
        type: "ios"
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