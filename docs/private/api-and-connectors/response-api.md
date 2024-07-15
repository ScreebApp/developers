---
sidebar_position: 3
---

# Response API

## Summary

- [Authentication](#authentication)
- [Response retrieval](#response-retrieval)

## Authentication

To query responses hosted in your Screeb workspace, you will need an API Token generated for you. Send a request to the support to get your token.

## Response retrieval

The response API is accessible via the following endpoint: `SEARCH` - https://api.screeb.app/1.0/survey/:survey_ids/response

`:survey_ids` must be replaced by a list of survey IDs separated by a comma (`,`) or a wildcard (`*`) for selecting all organization surveys.

### Example

```bash
curl -X SEARCH https://api.screeb.app/1.0/survey/*/response \
    -H "Content-Type: application/json" \
    -H "Authorization: Bearer xxxxxxxxxxxxxxxxxxxxxxxxxxxx" \
    -d '{
        "filters_bool": "AND",
        "filters": [
            { ... },
            { ... }
        ],
        "size": 100,
        "offset": 0,
        "range": {
            "field": "created_at",
            "start": "2020-01-01T00:00:00.000Z",
            "end": "2023-12-31T00:00:00.000Z"
        }
    }'
```

### Spec

| Field          | Type                       | Description                                                                                                       |
| -------------- | -------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `filters_bool` | String                     | Supported: `AND`, `OR`. Either one or all filters must be valid.                                                  |
| `filters`      | List of Filters (optional) | See below                                                                                                         |
| `size`         | Int                        | Number of returned elements (0 to 1000)                                                                           |
| `offset`       | Int                        | Offset of returned elements (0 to 100.000). For higher offset, please use a different `range` window (see below). |
| `range`        | Range                      | See below                                                                                                         |

### Filters by user identifier

| Field      | Type        | Description                                                                                                                                                                         |
| ---------- | ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`     | String      | Supported: `response`                                                                                                                                                               |
| `key`      | String      | Filtered entity: `respondent_id`, `respondent_alias`, `respondent_segments`, `channel_id`, `raw`, `language`, `completion`                                                          |
| `operator` | String      | Comparaison operator: `eq`, `neq`, `in`, `not_in`, `not_null`, `null`, `contains`, `not_contains`, `before`, `after`, `lt`, `gt`. Available operators may vary uppon requested data |
| `value`    | Any         | Value to pass as an argument                                                                                                                                                        |
| `values`   | List of any | Values to pass as an argument                                                                                                                                                       |

#### A few examples:

Fetch by screeb id:

```json
{ "type": "response", "key": "respondent_id", "operator": "eq", "value": "9565ac03-df6f-49b9-b4ff-9e20e8cb6bbf" }
```

Fetch by user alias:

```json
{ "type": "response", "key": "respondent_aliases", "operator": "eq", "value": "samuel@screeb.app" }
{ "type": "response", "key": "respondent_aliases", "operator": "contains", "value": "@apple.com" }
```

Fetch responses created by users part of segment `79ef68c0-2022-4b15-b48b-e95ba4cacf80`:

```json
{ "type": "response", "key": "respondent_segments", "operator": "in", "values": ["79ef68c0-2022-4b15-b48b-e95ba4cacf80"] }
```

Fetch responses created on iOS (here channel_id is `b4ece0cd-4e11-4a9d-a58d-c2519ee98605`):

```json
{ "type": "response", "key": "channel_id", "operator": "eq", "value": "b4ece0cd-4e11-4a9d-a58d-c2519ee98605" }
```

Fetch by keyword:

```json
{ "type": "response", "key": "raw", "operator": "contains", "value": "problem" }
```

Fetch by `language` (exclude English):

```json
{ "type": "response", "key": "language", "operator": "not_in", "values": ["en"] }
```

Fetch by `completion`:

```json
{ "type": "response", "key": "completion", "operator": "eq", "value": "not_started" }
{ "type": "response", "key": "completion", "operator": "in", "values": ["partially_completed", "fully_completed"] }
```

Fetch by hidden field `ltv` greater than `100$`:

```json
{ "type": "response.hidden_field", "key": "ltv", "operator": "gt", "value": "100" }
```

### Range

| Field   | Type                      | Description                            |
| ------- | ------------------------- | -------------------------------------- |
| `field` | String                    | Supported: `created_at`                |
| `start` | String in ISO 8601 format | Date of creation of the first response |
| `end`   | String in ISO 8601 format | Date of creation of the last response  |

### Output

`hits.total.value` contains the number of responses matching the criteria.

`hits.responses` is a list of responses.

```json
{
  "took": 282,
  "hits": {
    "total": {
      "value": 123456
    },
    "responses": [
      {
        "id": "735f7cea-c84a-4d98-8a7f-e807a8763fc0",               // unique response id
        "doc_type": "response",
        "org_id": "6c1e7576-ef59-4673-a107-0fc64e9bf6f3",
        "channel_id": "92486e31-7e9c-44b6-8af4-4643ef3ee4b6",
        "respondent_id": "8a85c1f9-0b7a-46e0-b262-47ab45bf5f9b",    // screeb user id
        "respondent_aliases": [
          "8a85c1f9-0b7a-46e0-b262-47ab45bf5f9b",                   // screeb user id
          "samuel@screeb.app"                                       // customer user id
        ],
        "survey_id": "a8d3950a-88d4-4662-8099-0ddeb3de98b4",
        "scenario_id": "cf320d79-f8c6-43b6-ba4a-9faa57682507",
        "language": "fr",
        "locale": "fr-fr",
        "question_id_path": "0d6496d0",
        "question_correlation_id_path": "84338f3a",
        "action_id_path": "53e0da62",
        "action_correlation_id_path": "03a9ef5d",
        "group_ids": [
          "a84a92f6-9389-49e2-a011-b1bfa7fa5227"
        ],
        "hidden_fields": [
          {
            "t": 0,
            "v_s": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.6 Safari/605.1.15",
            "key": "user_agent"
          },
          {
            "t": 0,
            "v_s": "other",
            "key": "os"
          },
          {
            "t": 0,
            "v_s": "tablet",
            "key": "support"
          },
          {
            "t": 0,
            "v_s": "desktop",
            "key": "platform"
          },
          {
            "t": 2,
            "v_d": -120,
            "key": "timezone"
          },
          {
            "t": 0,
            "v_s": "fr-FR",
            "key": "locale"
          },
          {
            "t": 0,
            "v_s": "fr",
            "key": "country"
          },
          {
            "t": 1,
            "v_b": true,
            "key": "logged_in"
          },
          {
            "t": 0,
            "v_s": "Home page",
            "key": "page_title"
          }
        ],
        "emotions": {
          "fear": null,
          "sadness": null,
          "anger": null,
          "joy": null
        },
        "answers": [        // a list of answers identified by question_id
          {
            "t": 0,
            "v_s": "This feature didn't work on my computer",       // user answer in its own language
            "cta_type": "input",                                    // question type
            "key": "84338f3a-aad4-44eb-9d49-f6a894343867",
            "question_id": "0d6496d0-7f3c-4ef3-bd71-b37b5a81e6d1",
            "question_correlation_id": "84338f3a-aad4-44eb-9d49-f6a894343867",
            "action_id": "53e0da62-e621-4ca0-9647-209a3bd4dde3",
            "action_correlation_id": "03a9ef5d-b33b-4ffa-994b-2ca8c5edc241",
            "answer_id": "521b7556-eff1-4bb8-bcb1-3d2281d5dfb6",
            "tags": null,
            "lang": null,
            "translations": [],                         // translation of user input (if feature is activated)
            "time": "2023-09-11T07:37:56.000444Z"
          }
        ],
        "completion": "fully_completed",                // "not_started" or "partially_completed" or "fully_completed"
        "active": false,
        "end_reason": "completed",                      // is empty when response is active
        "ended_at": "2023-09-11T07:37:56.167436Z",      // is empty when response is active
        "created_at": "2023-09-11T07:37:49.406943Z",
        "updated_at": "2023-09-11T07:37:56.256519Z",
        "last_answer_at": "2023-09-11T07:37:56.000444Z"
      }
    ]
  }
}
```

## Response summary

The response summary API is accessible via the following endpoint: `SEARCH` - https://api.screeb.app/1.0/survey/:survey_ids/response/summary

### Example

```bash
curl -X SEARCH https://api.screeb.app/1.0/survey/*/response \
    -H "Content-Type: application/json" \
    -H "Authorization: Bearer xxxxxxxxxxxxxxxxxxxxxxxxxxxx" \
    -d '{
        "filters_bool": "AND",
        "filters": [
            { ... },
            { ... }
        ],
        "range": {
            "field": "created_at",
            "start": "2020-01-01T00:00:00.000Z",
            "end": "2023-12-31T00:00:00.000Z"
        }
    }'
```

Output:

```json
{
    "ces_avg": 3,
    "ces_details": {
        "1": 79,
        "2": 68,
        "3": 71,
        "4": 59,
        "5": 62,
        "6": 59,
        "7": 67
    },

    "csat_avg": 3,
    "csat_details": {
        "1": 71,
        "2": 75,
        "3": 94,
        "4": 83,
        "5": 283
    },

    "nps_details": {
        "1": 45,
        "2": 50,
        "3": 52,
        "4": 59,
        "5": 56,
        "6": 50,
        "7": 48,
        "8": 65,
        "9": 39,
        "10": 46
    },
    "nps_groups": {
      "detractor": 312,
      "neutral": 113,
      "promotor": 85,
      "total": 510
    },
    "nps_score": 0,

    "completion": {
        "fully_completed": 1155,
        "not_started": 1900,
        "partially_completed": 972
    },
    "end_reasons": {
        "closed": 2710,
        "completed": 1155,
        "expired": 157,
        "interrupted": 4
    },
    "languages": {
        "en": 4027
    },
    "supports": {
      "desktop": 1714,
      "mobile": 2313
    }
}
```

## Aggregate responses

The response aggregation API is accessible via the following endpoint: `SEARCH` - https://api.screeb.app/1.0/survey/:survey_ids/response/aggregation

### Count responses

The `hits.total.value` field described above might not be sufficient for grouping data per completion status, user platform...

A `group_by` argument can be added to the request. Eg:

```json
{
    "filters_bool": "AND",
    "filters": [
        // any filters described previously
        { "type": "response", "key": "channel_id", "operator": "eq", "value": "b4ece0cd-4e11-4a9d-a58d-c2519ee98605" }
    ],
    "range": {
        "field": "created_at",
        "start": "2020-01-01T00:00:00.000Z",
        "end": "2023-12-31T00:00:00.000Z"
    },
    "group_by": [
        { "field": "completion" }   // <- count responses by completion status
    ]
}
```

The group_by argument supports multiple rules. The order matters. Eg:

```json
{
    "filters_bool": "AND",
    "filters": [
        // any filters described previously
        { "type": "response", "key": "channel_id", "operator": "eq", "value": "b4ece0cd-4e11-4a9d-a58d-c2519ee98605" }
    ],
    "range": {
        "field": "created_at",
        "start": "2020-01-01T00:00:00.000Z",
        "end": "2023-12-31T00:00:00.000Z"
    },
    "group_by": [
        // count responses by completion status and per month
        { "field": "completion" },
        {
            "field": "created_at",
            "date_histogram_min_interval": "month",
            "date_histogram_buckets": 20
        }
    ]
}
```

Here is the full list of aggregation:

**Group by date:**

```json
{
    "field": "created_at",                   // either created_at, ended_at or last_activity_at
    "date_histogram_min_interval": "day",    // month, day or hour
    "date_histogram_buckets": 10             // number points in the timeseries (1 to 100) - eg: 10 points in a 1 month interval will group per 3 days
}
```

**Group by completion status:**

```json
{
    "field": "completion"
}
```

**Group by survey_id:**

(should be used with a wildcard request: https://api.screeb.app/1.0/survey/*/response)

```json
{
    "field": "survey_id"
}
```

**Group by response end reason:**

```json
{
    "field": "end_reason"
}
```

**Group by hidden field:**

```json
{
    "field": "hidden_field",
    "hidden_field_key": "country"
}
```

**Group by answer:**

```json
{
    "field": "answer",
    "question_id": "23c4d464-699b-4fc6-851b-c3e7da6af853"       // <- the correlation id of the question
}
```

## Support

If you have any questions or additional requirements, feel free to open an issue or contact samuel@screeb.app.
