---
sidebar_position: 7
---

# Hooks

## Set hooks

You can define custom hooks to be executed on various events.

Thanks to this you will be able to interact with your application when a survey appears, or execute some custom code when a survey is submitted.

You can define hooks on `initSdk()` and `startSurvey()` commands. Hooks are all optional.

## Available hooks

| Hook Name                                                 | Available on `initSdk()` | Available on `startSurvey()` |
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

```js
initSdk(
  "<android-channel-id>",
  "<ios-channel-id>",
  "<user-id>",
  {
    isConnected: false,
    age: 29,
    product: "iPhone 13",
    email: "e2e@screeb.app",
  },
  {
    version: "1.0.0",
    onReady: (payload: any) => {
      console.log("onReady", payload);
    },
    onSurveyDisplayAllowed: (payload: any) => {
      console.log("onSurveyDisplayAllowed", payload);
      // return false to prevent display
      return true;
    },
  }
);
```

### Set hooks on survey start

```js
startSurvey(
  "<survey-id>",
  "<allowMultipleResponses>",
  "<properties>",
  "<ignoreSurveyStatus>",
  {
    version: "1.0.0",
    onSurveyShowed: (payload: any) => {
      console.log("onSurveyShowed", payload);
    },
  }
);
```

---

## `onSurveyShowed`

Called when a survey is showed.

<details open>
<summary>Example</summary>

```js
initSdk(
  "<android-channel-id>",
  "<ios-channel-id>",
  "<user-id>",
  {...},
  {
    version: "1.0.0",
    onSurveyShowed: (payload: any) => {
      console.log("onSurveyShowed", payload);
    },
  }
);
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

```js
initSdk(
  "<android-channel-id>",
  "<ios-channel-id>",
  "<user-id>",
  {...},
  {
    version: "1.0.0",
    onSurveyStarted: (payload: any) => {
      console.log("onSurveyStarted", payload);
    },
  }
);
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

```js
initSdk(
  "<android-channel-id>",
  "<ios-channel-id>",
  "<user-id>",
  {...},
  {
    version: "1.0.0",
    onQuestionReplied: (payload: any) => {
      console.log("onQuestionReplied", payload);
    },
  }
);
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

```js
initSdk(
  "<android-channel-id>",
  "<ios-channel-id>",
  "<user-id>",
  {...},
  {
    version: "1.0.0",
    onSurveyCompleted: (payload: any) => {
      console.log("onSurveyCompleted", payload);
    },
  }
);
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

```js
initSdk(
  "<android-channel-id>",
  "<ios-channel-id>",
  "<user-id>",
  {...},
  {
    version: "1.0.0",
    onSurveyHidden: (payload: any) => {
      console.log("onSurveyHidden", payload);
    },
  }
);
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

```js
initSdk(
  "<android-channel-id>",
  "<ios-channel-id>",
  "<user-id>",
  {...},
  {
    version: "1.0.0",
    onAppStoreRatingTriggered: (payload: any) => {
      console.log("onAppStoreRatingTriggered", payload);
    },
  }
);
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

Called when the SDK is ready. Only available on `initSdk()`.

<details open>
<summary>Example</summary>

```js
initSdk(
  "<android-channel-id>",
  "<ios-channel-id>",
  "<user-id>",
  {...},
  {
    version: "1.0.0",
    onSurveyShowed: (payload: any) => {
      console.log("onReady", payload);
    },
  }
);
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

Called before a survey display to allow it or not. Only available on `initSdk()`.
Return a boolean value. Return `false` to prevent display.

<details open>
<summary>Example</summary>

```js
initSdk(
  "<android-channel-id>",
  "<ios-channel-id>",
  "<user-id>",
  {...},
  {
    version: "1.0.0",
    onSurveyDisplayAllowed: (payload: any) => {
      console.log("onSurveyDisplayAllowed", payload);
      // return false to prevent display
      return true;
    },
  }
);
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