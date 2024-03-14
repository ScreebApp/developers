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

### Set hooks on SDK init

```swift
Screeb.initSdk(
    context: window?.rootViewController,
    channelId: "<ios-channel-id>",
    identity: "<user-id>", // optional
    visitorProperty: ["age": AnyEncodable(12), "name": AnyEncodable("JohnDoe")], // optional
    initOptions: InitOptions(automaticScreenDetection: true|false), // optional
    hooks: ["version": "1.0.0","onReady": {(e:Any) -> () in print("Screeb sdk ready " + String(describing: e))}]
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
    hooks: ["version": "1.0.0","onSurveyShowed":{(e:Any) -> () in print("Screeb survey showed " + String(describing: e))}]
)
```

### Payload types

```swift
onSurveyShowed: {
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

onSurveyStarted: {
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

onQuestionReplied: {
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

onSurveyCompleted: {
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

onSurveyHidden: {
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

onReady: {
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