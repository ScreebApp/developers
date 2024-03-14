---
sidebar_position: 1
---

# Webhook v1.3.0

On visitor action (such as clicking on a choice, scoring, input...) Screeb can send a request to an external platform, containing the response data.

## Entities

- Organization: A Screeb account, shared by many Screeb users of your company
- Channel: A distribution channel for your survey (Javascript SDK, Android SDK, iOS SDK...)
- Survey
- Survey scenario: A versioned survey: on survey update, your flow is saved in a new scenario. New respondents will see the last scenario.
- Respondent: Information about the visitor
- Response: A response is a chain of question+answers. A respondent sometimes has many responses to a single survey.
- Question
- Answer: An answer is part of a response. Each answer is associated with a question.

## Hook types

You can trigger webhooks on 3 different events:

- On survey display: a survey is shown to visitors, but no question is replied. You will get notified even if no response is given.
- On question answered: a question has been replied. This webhook will be triggered for each question of a single survey.
- On response end: a survey has been closed or fully replied to by the user.

## Errors

On large synchronization order, the webhook destination may reply to Screeb with a 429 HTTP error (**rate limiting**). Screeb will resend these messages many times, with exponential delay.

## Example payload

Webhooks deliver the responses to your surveys in JSON format, via a POST HTTP request. Here is a typical webhook payload:

```js
{
  "event_id": "64c7ea3b-827b-4679-b25d-7fd61f6c3d33",
  "event_type": "response.ended",
  "version": "1.3.0",
  "time": "2021-07-29T13:45:09.325344042Z",
  "time_ms": 1627566309325,
  "payload": {
    "organization": {
      "id": "b5969d13-5e5e-4648-9806-5339ddafd984",
      "name": "ACME"
    },
    "channel": {
      "id": "411ee7c3-7e64-409f-9d75-c782b3f73aa4",
      "type": "android"
    },
    "survey": {
      "id": "9b913c69-3daf-4a6e-a26d-042004fc7881",
      "name": "Measure NPS",
      "scenario_id": "cc4a3710-e8ee-4672-a35c-5c17485ec441",
      "scenario_version": 9,
      "scenario_time": "2021-07-29T00:08:31.069497Z",
      "scenario_time_ms": 1627517311069
    },
    "respondent": {
      "id": "2eb83fb4-b1b3-4e48-be48-a8fd9c4e5a7d",
      "alias": "samuel@screeb.app",
      "aliases": [
        "2eb83fb4-b1b3-4e48-be48-a8fd9c4e5a7d",
        "samuel@screeb.app"
      ],
      "name": "Samuel Berthe",
      "email": "samuel@screeb.app",
      "group_names": ["Screeb", "10-100-companies", "plan-enterprise"]
    },
    "response": {
      "id": "5854a797-628c-4906-bb4c-da03e418cf47",
      "locale": "en-US",
      "time": "2021-07-29T13:44:59.831Z",
      "time_ms": 1627918228831,
      "time_to_complete_second": 34,
      "completion": "fully_completed",
      "hidden_fields": {
        "firstname": "Samuel",
        "lastname": "Berthe",
        "email": "samuel@screeb.app",
        "locale": "en-US",
        "support": "desktop",
        "timezone": -120,
        "user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) ...."
      },
      "question": {
        "id": "25c06995-b8aa-45d1-a03d-cd885a6ead58",
        "correlation_id": "a44252c3-ef3d-4156-90d6-a3d6364516c0",
        "type": "input",
        "title": "How can we improve your experience?"
      },
      "answer": {
        "field": {
          "id": "ca679de0-6f45-485d-be00-77aa15677d23",
          "correlation_id": "c71dfe9d-6b47-452f-bda2-6091c13561b0",
          "type": "string",
          "value": "The new dashboard is buggy.",   // @DEPRECATED
          "text": "The new dashboard is buggy.",
          "number": null,
          "boolean": null,
          "time": null
        },
        "replied_at": "2021-07-29T13:45:09.286Z",
        "replied_at_ms": 1627566309286,
        "tags": ["screeb", "feedbback"]
      },
      "tags": ["screeb", "feedbback"],
      "items": [
        { "question": {...}, "answer": {...} },
        { "question": {...}, "answer": {...} },
        { "question": {...}, "answer": {...} }
      ]
    }
  }
}
```

## Spec

Current version: **1.3.0**

When the destination server replies with a 4xx or 5xx status code, Screeb platform sends a new request after 60s (once).

### Metadata

| Field | Type | Optional | description |
|----------|-------------|------|----|
| event_id | uuid | No | Unique id for this event (same id in retry request) |
| event_type | enum: `response.displayed`, `response.answered` or `response.ended` | No | Type of event sent over webhook |
| time | Date | No | Date of event |
| time_ms | long | No | Timestamp of event in millisecond |
| version | string | No | Semver version of the webhook payload |
| payload | \<Payload> | No | See "Payload" section |

### Payload

| Field | type | Optional | description |
|----------|-------------|------|----|
| organization | Organization | No | Organization details |
| channel | Channel | No | Channel details |
| survey | Survey | No | Survey details |
| respondent | Respondent | No | Respondent details |
| response | Response | No | Response details |

### Organization

| Field | type | Optional | description |
|----------|-------------|------|----|
| id | uuid | No | Unique identifier for the organization |
| name | string | No | Name of the Screeb account |

### Channel

| Field | type | Optional | description |
|----------|-------------|------|----|
| id | uuid | No | Unique identifier for the channel |
| type | string | No | Channel type (widget, android, ios, hosted-page...) |

### Survey

| Field | type | Optional | description |
|----------|-------------|------|----|
| id | uuid | No | Unique identifier for the survey |
| name | string | No | Name of the survey |
| scenario_id | string | No | Unique identifier for the survey scenario |
| scenario_version | int | No | Version number of the survey scenario |
| scenario_time | Date | No | Date of the scenario edition |
| scenario_time_ms | int | No | Timestamp of the scenario edition (millisecond) |

### Respondent

| Field | type | Optional | description |
|----------|-------------|------|----|
| id | uuid | No | Screeb identifier for the respondent |
| alias | Array\<string> | No | Main respondent identifier |
| aliases | Array\<string> | No | List of respondent aliases |
| name | string | Yes | Respondent name (when available in identity properties) |
| email | string | Yes | Respondent email (when available in identity properties) |
| group_names | Array\<string> | Yes | Respondent groups |

### Response

| Field | type | Optional | description |
|----------|-------------|------|----|
| id | uuid | No | Unique identifier for the response |
| locale | string | Yes | Locale of the respondent |
| time | Date | No | Date of response start |
| time_ms | long | No | Timestamp of response start in millisecond |
| time_to_complete_second | long | Yes | Seconds between survey display and response end (when event_type == `response.ended`) |
| completion | string | Yes | "not_started", "partially_completed" or "fully_completed" |
| hidden_fields | object | Yes | Key/Value of the hidden fields |
| question | Question | Yes | See the "Question" section (when event_type == `response.answered`) |
| answer | Answer | Yes | See the "Answer" section (when event_type == `response.answered`) |
| items | Item[] | No | See the "Item" section (when event_type == `response.answered` || event_type == `response.ended` ) |

### Question

| Field | type | Optional | description |
|----------|-------------|------|----|
| id | uuid | No | Unique identifier for the question |
| correlation_id | uuid | No | Correlation identifier for the question (shared over many survey scenario versions) |
| type | string | No | Type of question |
| title | string | No | Label of the question |

### Answer

| Field | type | Optional | description |
|----------|-------------|------|----|
| field.id | uuid | No | Unique identifier for the field (a button, a score, an input...) |
| field.correlation_id | uuid | No | Correlation identifier for the field (shared over many survey scenario versions) |
| field.type | string | No | Value type: "string", "number", "time", "boolean"... |
| field.value | string | No | DEPRECATED: Value of the answer (always string) |
| field.text | string | Yes | Value of the answer, when type is "string" |
| field.number | number | Yes | Value of the answer, when type is "number" |
| field.boolean | string | Yes | Value of the answer, when type is "boolean" |
| field.time | string | Yes | Value of the answer, when type is "time" |
| replied_at | Date | No | Date of the answer |
| replied_at_ms | int | No | Timestamp of the answer (millisecond) |

NPS, CES and CSAT will be sent as numeric values, instead of emojis.

### Item

| Field | type | Optional | description |
|----------|-------------|------|----|
| question | Question | No | See the "Question" section |
| answer | Answer | No | See the "Answer" section |

## Security

To protect your server from unauthorized webhook events, we strongly recommend that you use [HMAC](https://en.wikipedia.org/wiki/HMAC) signatures.

Each webhook event will include a signature calculated using a secret key (available on Screeb [platform](https://admin.screeb.app)) and a payload from the webhook. By verifying this signature, you confirm that the webhook was sent by Screeb, and was not modified during transmission.

The signature is provided in the headers in this way:

```text
x-screeb-hmac-digest: HMAC-SHA256-BASE64
x-screeb-hmac-signature-url: k8TREZiVCkqywuUT1Lmxa4exhXOf0IS24ibxDIJ3ka8=
x-screeb-hmac-signature-body: uGv+PueUDB/r+3r7/NMfui8wMDerRynN95BacNbGntpE/G7aAi9FNqjYe51ENbFG/d7o3X5uS40ixPNNP1hP/Q==
```

Here is an example of a signature validation in NodeJS:

```js
function computeHash(secret, payload) {
  var crypto = require('crypto');
  var hmac = crypto.createHmac('sha256', secret);
  hmac.write(payload);
  hmac.end();
  return hmac.read().toString('base64');
};

function hashIsValid(secret, payload, verify) {
  return crypto.timingSafeEqual(verify, computeHash(secret,payload));
};

function webhookHandler(req, res) {
  var hmac = req.header('x-screeb-hmac-signature-body');
  var body = req.body;

  var ok = hashIsValid(process.env.SCREEB_SECRET, body, hmac);
  if (!ok) {
    res.status(403);
    res.send({message: "invalid signature"});
    return;
  }
}
```

## Support

If you have any questions or additional requirements, feel free to open an issue or contact samuel@screeb.app.
