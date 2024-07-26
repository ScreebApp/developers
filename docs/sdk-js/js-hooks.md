---
sidebar_position: 6
---

# Hooks

## Set hooks

You can define custom hooks to be executed on various events.

Thanks to this you will be able to interact with your website when a survey appears, or execute some custom code when a survey is submitted.

You can define hooks on `init` and `survey.start` commands. Hooks are all optional.

Available hooks are:

- `onSurveyShowed`: called when a survey is showed
- `onMessageShowed`: called when a message is showed
- `onSurveyStarted`: called when a survey is started
- `onMessageStarted`: called when a message is started
- `onQuestionReplied`: called when a question is replied
- `onSurveyCompleted`: called when a survey is completed
- `onMessageCompleted`: called when a message is completed
- `onSurveyHidden`: called when a survey is hidden
- `onMessageHidden`: called when a message is hidden
- `onAppStoreRatingTriggered`: called when an App Store Rating question is triggered.
- `onReady`: called when the SDK is ready (Only available on `init`)
- `onSurveyDisplayAllowed`: called before a survey display to allow it or not (Only available on `init`)
- `onMessageDisplayAllowed`: called before a message display to allow it or not (Only available on `init`)

### Set hooks on widget init

```js
$screeb('init', '<website-id>', {
  hooks: {
    version: "1.0.0",
    onSurveyShowed: (payload) => {
        console.log("Survey has been showed", payload);
    },
    onMessageShowed: (payload) => {
        console.log("Message has been showed", payload);
    },
    onSurveyStarted: (payload) => {
        console.log("Survey has been started", payload);
    },
    onMessageStarted: (payload) => {
        console.log("Message has been started", payload);
    },
    onQuestionReplied: (payload) => {
        console.log("Question has been replied", payload);
    },
    onSurveyCompleted: (payload) => {
        console.log("Survey has been completed", payload);
    },
    onMessageCompleted: (payload) => {
        console.log("Survey has been completed", payload);
    },
    onSurveyHidden: (payload) => {
        console.log("Survey has been hidden", payload);
    },
    onMessageHidden: (payload) => {
        console.log("Survey has been hidden", payload);
    },
    onAppStoreRatingTriggered: (payload) => {
        console.log("App Store Rating triggered", payload);
    },
    onReady: (payload) => {
        console.log("Screeb ready", payload);
    },
    onSurveyDisplayAllowed: function (payload) {
        // return false to prevent display
        return true;
    },
    onMessageDisplayAllowed: function (payload) {
        // return false to prevent display
        return true;
    },
  }
});
```

### Set hooks on survey start

```js 
$screeb("survey.start", "<survey-id>", {
  hooks: {
    version: "1.0.0",
    onSurveyShowed: (payload) => {
        console.log("Survey has been showed", payload);
    },
    onMessageShowed: (payload) => {
        console.log("Survey has been showed", payload);
    },
    onSurveyStarted: (payload) => {
        console.log("Survey has been started", payload);
    },
    onMessageStarted: (payload) => {
        console.log("Survey has been started", payload);
    },
    onQuestionReplied: (payload) => {
        console.log("Question has been replied", payload);
    },
    onSurveyCompleted: (payload) => {
        console.log("Survey has been completed", payload);
    },
    onMessageCompleted: (payload) => {
        console.log("Survey has been completed", payload);
    },
    onSurveyHidden: (payload) => {
        console.log("Survey has been hidden", payload);
    },
    onMessageHidden: (payload) => {
        console.log("Survey has been hidden", payload);
    },
    onAppStoreRatingTriggered: (payload) => {
        console.log("App Store Rating triggered", payload);
    },
  },
});
```

### Payload types

```js
onSurveyShowed: {
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

onSurveyStarted: {
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

onQuestionReplied: {
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

onSurveyCompleted: {
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

onSurveyHidden: {
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

onAppStoreRatingTriggered: {
    channel: {
        id: string,
        type: "widget"
    },
    user: {
        anonymous_id: string,
        user_id: string,
    }
}

onReady: {
    channel: {
        id: string,
        type: "widget"
    },
    user: {
        anonymous_id: string,
        user_id: string,
    }
}

onSurveyDisplayAllowed: {
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

onMessageDisplayAllowed: {
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
