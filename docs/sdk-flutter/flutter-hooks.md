---
sidebar_position: 7
---

# Hooks

## Set hooks

You can define custom hooks to be executed on various events.

Thanks to this you will be able to interact with your application when a survey appears, or execute some custom code when a survey is submitted.

You can define hooks on `PluginScreeb.initSdk()` and `PluginScreeb.startSurvey()` commands. Hooks are all optional.

Available hooks are:

- `onSurveyShowed`: called when a survey is showed
- `onSurveyStarted`: called when a survey is started
- `onQuestionReplied`: called when a question is replied
- `onSurveyCompleted`: called when a survey is completed
- `onSurveyHidden`: called when a survey is hidden
- `onReady`: called when the SDK is ready (Only available on `PluginScreeb.initSdk()`)

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

### Payload types

```dart
onSurveyShowed: {
    channel: {
        id: string,
        type: "android" | "ios"
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
        type: "android" | "ios"
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
        type: "android" | "ios"
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
        type: "android" | "ios"
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
        type: "android" | "ios"
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
        type: "android" | "ios"
    },
    user: {
        anonymous_id: string,
        user_id: string,
    }
}
```