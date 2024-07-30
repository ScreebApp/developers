---
sidebar_position: 7
---

# Hooks

## Set hooks

You can define custom hooks to be executed on various events.

Thanks to this you will be able to interact with your website when a survey appears, or execute some custom code when a survey is submitted.

You can define hooks on `Screeb.initSdk()` and `Screeb.startSurvey()` commands. Hooks are all optional.

Available hooks are:

- `onSurveyShowed`: called when a survey is showed
- `onSurveyStarted`: called when a survey is started
- `onQuestionReplied`: called when a question is replied
- `onSurveyCompleted`: called when a survey is completed
- `onSurveyHidden`: called when a survey is hidden
- `onReady`: called when the SDK is ready (Only available on `Screeb.initSdk()`)
- `onSurveyDisplayAllowed`: called before a survey display to allow it or not (Only available on `Screeb.initSdk()`)
- `onMessageDisplayAllowed`: called before a message display to allow it or not (Only available on `Screeb.initSdk()`)

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
        "onReady" to { payload:Any -> Log.d("Screeb", "SDK Ready: $payload")}
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

### Payload types

```kotlin
onSurveyShowed: {
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

onSurveyStarted: {
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

onQuestionReplied: {
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

onSurveyCompleted: {
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

onSurveyHidden: {
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

onReady: {
    channel: {
        id: string,
        type: "android"
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
