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

```swift
Screeb.initSdk(
    context: window?.rootViewController,
    channelId: "<ios-channel-id>",
    identity: "<user-id>", // optional
    visitorProperty: ["age": AnyEncodable(12), "name": AnyEncodable("JohnDoe")], // optional
    initOptions: InitOptions(automaticScreenDetection: true|false), // optional
    hooks: [
        "version": "1.0.0",
        "onReady": {(e:Any) -> () in print("Screeb sdk ready " + String(describing: e))},
        "onSurveyDisplayAllowed": {(e:Any) -> Bool in print("onSurveyDisplayAllowed " + String(describing: e)); return true}
    ]
)
```

### Set hooks on survey start

```swift
Screeb.startSurvey(
    surveyId: "<ios-channel-id>",
    allowMultipleResponses: true,
    hiddenFields: [
        "iosHidden1": AnyEncodable("hiddenField1"),
        "iosHiddenCount": AnyEncodable(75)
    ],
    hooks: [
        "version": "1.0.0",
        "onSurveyShowed": {(e:Any) -> () in print("Screeb survey showed " + String(describing: e))},
    ]
)
```

---

## `onSurveyShowed`

Called when a survey is showed.

<details open>
<summary>Example</summary>

```swift
Screeb.initSdk(this,
    "<ios-channel-id>",
    ...
    hooks: [
        "version": "1.0.0",
        "onSurveyShowed": {(e:Any) -> () in print("Screeb survey showed " + String(describing: e))},
    ]
)
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

```swift
Screeb.initSdk(this,
    "<ios-channel-id>",
    ...
    hooks: [
        "version": "1.0.0",
        "onSurveyStarted": {(e:Any) -> () in print("Screeb survey started " + String(describing: e))},
    ]
)
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

```swift
Screeb.initSdk(this,
    "<ios-channel-id>",
    ...
    hooks: [
        "version": "1.0.0",
        "onQuestionReplied": {(e:Any) -> () in print("Screeb Question Replied " + String(describing: e))},
    ]
)
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

```swift
Screeb.initSdk(this,
    "<ios-channel-id>",
    ...
    hooks: [
        "version": "1.0.0",
        "onSurveyCompleted": {(e:Any) -> () in print("Screeb survey completed " + String(describing: e))},
    ]
)
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

```swift
Screeb.initSdk(this,
    "<ios-channel-id>",
    ...
    hooks: [
        "version": "1.0.0",
        "onSurveyHidden": {(e:Any) -> () in print("Screeb survey hidden " + String(describing: e))},
    ]
)
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

```swift
Screeb.initSdk(this,
    "<ios-channel-id>",
    ...
    hooks: [
        "version": "1.0.0",
        "onAppStoreRatingTriggered": {(e:Any) -> () in print("Screeb app store rating triggered " + String(describing: e))},
    ]
)
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

Called when the SDK is ready. Only available on `Screeb.initSdk()`.

<details open>
<summary>Example</summary>

```swift
Screeb.initSdk(this,
    "<ios-channel-id>",
    ...
    hooks: [
        "version": "1.0.0",
        "onReady": {(e:Any) -> () in print("Screeb SDK ready " + String(describing: e))},
    ]
)
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

Called before a survey display to allow it or not. Only available on `Screeb.initSdk()`.
Return a boolean value. Return `false` to prevent display.

<details open>
<summary>Example</summary>

```swift
Screeb.initSdk(this,
    "<ios-channel-id>",
    ...
    hooks: [
        "version": "1.0.0",
        "onSurveyDisplayAllowed": {(e:Any) -> Bool in print("Screeb survey display available " + String(describing: e)); return true},
    ]
)
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