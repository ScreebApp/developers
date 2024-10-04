---
sidebar_position: 7
---

# Hooks

## Set hooks

You can define custom hooks to be executed on various events.

Thanks to this you will be able to interact with your website when a survey appears, or execute some custom actions when a survey is submitted.

You can define hooks on `init` and `survey.start` commands. Hooks are all optional.

## Available hooks

| Hook Name                                                 | Available on `init` | Available on `survey.start` |
| --------------------------------------------------------- | ------------------- | --------------------------- |
| [`onSurveyShowed`](#onsurveyshowed)                       | Yes ✅              | Yes ✅                      |
| [`onMessageShowed`](#onmessageshowed)                     | Yes ✅              | Yes ✅                      |
| [`onSurveyStarted`](#onsurveystarted)                     | Yes ✅              | Yes ✅                      |
| [`onMessageStarted`](#onmessagestarted)                   | Yes ✅              | Yes ✅                      |
| [`onQuestionReplied`](#onquestionreplied)                 | Yes ✅              | Yes ✅                      |
| [`onSurveyCompleted`](#onsurveycompleted)                 | Yes ✅              | Yes ✅                      |
| [`onMessageCompleted`](#onmessagecompleted)               | Yes ✅              | Yes ✅                      |
| [`onSurveyHidden`](#onsurveyhidden)                       | Yes ✅              | Yes ✅                      |
| [`onMessageHidden`](#onmessagehidden)                     | Yes ✅              | Yes ✅                      |
| [`onAppStoreRatingTriggered`](#onappstoreratingtriggered) | Yes ✅              | Yes ✅                      |
| [`onReady`](#onready)                                     | Yes ✅              | No ❌                       |
| [`onSurveyDisplayAllowed`](#onsurveydisplayallowed)       | Yes ✅              | No ❌                       |
| [`onMessageDisplayAllowed`](#onmessagedisplayallowed)     | Yes ✅              | No ❌                       |

---

## `onSurveyShowed`

Called when a survey is showed.

<details open>
<summary>Example</summary>

```js
$screeb("init", "<website-id>", {
  hooks: {
    version: "1.0.0",
    onSurveyShowed: (payload) => {
      console.log("Survey has been showed", payload);
    },
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
        type: "widget"
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

## `onMessageShowed`

Called when a message is showed.

<details open>
<summary>Example</summary>

```js
$screeb("init", "<website-id>", {
  hooks: {
    version: "1.0.0",
    onMessageShowed: (payload) => {
      console.log("Message has been showed", payload);
    },
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
        type: "widget"
    },
    message: {
        message_size: 25 | 50 | 75 | 100 | 125 | 150;
        id: string | null;
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
$screeb("init", "<website-id>", {
  hooks: {
    version: "1.0.0",
    onSurveyStarted: (payload) => {
      console.log("Survey has been started", payload);
    },
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
        type: "widget"
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

## `onMessageStarted`

Called when a message is started.

<details open>
<summary>Example</summary>

```js
$screeb("init", "<website-id>", {
  hooks: {
    version: "1.0.0",
    onMessageStarted: (payload) => {
      console.log("Message has been started", payload);
    },
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
        type: "widget"
    },
    message: {
        message_size: 25 | 50 | 75 | 100 | 125 | 150;
        id: string | null;
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
$screeb("init", "<website-id>", {
  hooks: {
    version: "1.0.0",
    onQuestionReplied: (payload) => {
      console.log("Question has been replied", payload);
    },
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
        type: "widget"
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
$screeb("init", "<website-id>", {
  hooks: {
    version: "1.0.0",
    onSurveyCompleted: (payload) => {
      console.log("Survey has been completed", payload);
    },
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
        type: "widget"
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

## `onMessageCompleted`

Called when a message is completed.

<details open>
<summary>Example</summary>

```js
$screeb("init", "<website-id>", {
  hooks: {
    version: "1.0.0",
    onMessageCompleted: (payload) => {
      console.log("Message has been completed", payload);
    },
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
        type: "widget"
    },
    message: {
        message_size: 25 | 50 | 75 | 100 | 125 | 150;
        id: string | null;
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
$screeb("init", "<website-id>", {
  hooks: {
    version: "1.0.0",
    onSurveyHidden: (payload) => {
      console.log("Survey has been hidden", payload);
    },
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
        type: "widget"
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

## `onMessageHidden`

Called when a message is hidden.

<details open>
<summary>Example</summary>

```js
$screeb("init", "<website-id>", {
  hooks: {
    version: "1.0.0",
    onMessageHidden: (payload) => {
      console.log("Message has been hidden", payload);
    },
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
        type: "widget"
    },
    message: {
        message_size: 25 | 50 | 75 | 100 | 125 | 150;
        id: string | null;
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
$screeb("init", "<website-id>", {
  hooks: {
    version: "1.0.0",
    onAppStoreRatingTriggered: (payload) => {
      console.log("App Store Rating triggered", payload);
    },
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
        type: "widget"
    },
    user: {
        anonymous_id: string,
        user_id: string,
    }
}
```
</details>

## `onReady`

Called when the SDK is ready. Only available on `init`.

<details open>
<summary>Example</summary>

```js
$screeb("init", "<website-id>", {
  hooks: {
    version: "1.0.0",
    onReady: (payload) => {
      console.log("Screeb ready", payload);
    },
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
        type: "widget"
    },
    user: {
        anonymous_id: string,
        user_id: string,
    }
}
```
</details>

## `onSurveyDisplayAllowed`

Called before a survey display to allow it or not. Only available on `init`.

<details open>
<summary>Example</summary>

```js
$screeb("init", "<website-id>", {
  hooks: {
    version: "1.0.0",
    onSurveyDisplayAllowed: (payload) => {
      console.log("onSurveyDisplayAllowed", payload);
      // return false to prevent display
      return true;
    },
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
        type: "widget"
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

## `onMessageDisplayAllowed`

Called before a message display to allow it or not. Only available on `init`.

<details open>
<summary>Example</summary>

```js
$screeb("init", "<website-id>", {
  hooks: {
    version: "1.0.0",
    onMessageDisplayAllowed: (payload) => {
      console.log("onMessageDisplayAllowed", payload);
      // return false to prevent display
      return true;
    },
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
        type: "widget"
    },
    message: {
        id: string,
    },
    user: {
        anonymous_id: string,
        user_id: string,
    }
}
```
</details>
