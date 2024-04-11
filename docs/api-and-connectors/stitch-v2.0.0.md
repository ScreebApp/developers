---
sidebar_position: 5
---

# Stitch v2.0.0

On visitor action (such as click on a button, scoring, input...) Screeb can send a request to an external platform, containing the response data.

## Entities

- Organization: A Screeb account, shared by many Screeb users of your company
- Channel: A distribution channel for your survey (Javascript SDK, Android SDK, iOS SDK...)
- Survey
- Survey scenario: A versioned survey: on survey update, your flow is saved in a new scenario. New users will see the last scenario.
- User: Information about the visitor
- Response: A response is a chain of question+answers. A user sometimes has many responses to a single survey.
- Question
- Answer: An answer is part of a response. Each answer is associated with a question.
- Field: An answer may have many fields (eg: multiple choices question)

## Hook types

You can send 3 different event types into your datawarehouse:

- On survey display: a survey is shown to visitors, but no question is replied. You will get notified even if no response is given.
- On question answered: a question has been replied. This webhook will be triggered for each question of a single survey.
- On response end: a survey has been closed or fully replied to by the user.

## Migrate from v1.3.0

- Each `correlation_id` has been renamed `id`, and the previous `id` property is not available anymore.
- `payload.respondent` has been renamed `payload.user`
- `payload.response.answer.field` has been converted into a array: `payload.response.answer.fields`

## Warehouse schema

Stitch delivers the responses to your surveys using the following database schema. In case of schema change, Stitch is in charge of updating columns in your datawarehouse.

Stitch requires an immutable primary key for identifying rows. Screeb uses `event_id` as primary key.

### Tables

| Table name                                                                                           | Description                                                        |
| ---------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| `<integration>.data`                                                                                 | A table with response metadata (organization, channel, survey...). |
| `<integration>.data__response__items`                                                                | A table with pairs of questions and answers.                       |
| `<integration>.data__response__answer_fields` or `<integration>.data__response__items_answer_fields` | A table with question answer.                                      |
| `<integration>.data__response__hidden_fields`                                                        | A table with your hidden fields linked to the response.            |

### `data` table

| Column                              | Type                     | Description                                                                           |
| ----------------------------------- | ------------------------ | ------------------------------------------------------------------------------------- |
| `_sdc_batched_at`                   | timestamp with time zone | Stitch internal                                                                       |
| `_sdc_received_at`                  | timestamp with time zone | Stitch internal                                                                       |
| `_sdc_sequence`                     | bigint                   | Stitch internal                                                                       |
| `_sdc_table_version`                | bigint                   | Stitch internal                                                                       |
| `event_id`                          | text                     | Unique id for this event (same id in retry request)                                   |
| `event_type`                        | text                     | Type of event sent over webhook                                                       |
| `event_time`                        | text                     | Date of event                                                                         |
| `event_time_ms`                     | bigint                   | Date of event in millisecond                                                          |
| `retry_count`                       | bigint                   | Nth request for this event                                                            |
| `version`                           | text                     | Semver version of the webhook payload                                                 |
| `organization__id`                  | text                     | Unique identifier for the organization                                                |
| `organization__name`                | text                     | Name of the Screeb account                                                            |
| `channel__id`                       | text                     | Unique identifier for the channel                                                     |
| `channel__type`                     | text                     | Channel type (widget, android, ios, hosted-page...)                                   |
| `user__anonymous_id`                | text                     | Main user identifier                                                                  |
| `user__user_id`                     | text                     | Screeb identifier for the user                                                        |
| `user__name`                        | text                     | User name (when available in identity properties)                                     |
| `user__email`                       | text                     | User email (when available in identity properties)                                    |
| `user__group_names`                 | []text                   | User groups                                                                           |
| `survey__id`                        | text                     | Unique identifier for the survey                                                      |
| `survey__name`                      | text                     | Name of the survey                                                                    |
| `survey__scenario_id`               | text                     | Unique identifier for the survey scenario                                             |
| `survey__scenario_time`             | text                     | Date of the scenario edition                                                          |
| `survey__scenario_time_ms`          | bigint                   | Timestamp of the scenario edition                                                     |
| `survey__scenario_version`          | bigint                   | Version number of the survey scenario                                                 |
| `response__id`                      | text                     | Unique identifier for the response                                                    |
| `response__time`                    | text                     | Date of response start                                                                |
| `response__time_ms`                 | bigint                   | Timestamp of response start in millisecond                                            |
| `response__time_to_complete_second` | bigint                   | Seconds between survey display and response end (when event_type == `response.ended`) |
| `response__locale`                  | text                     | Locale of the user                                                                    |
| `response__tags`                    | []text                   | Tags of the response                                                                  |
| `response__question__id`            | text                     | Unique identifier for the question                                                    |
| `response__question__type`          | text                     | Type of question                                                                      |
| `response__question__title`         | text                     | Label of the question                                                                 |
| `response__answer__replied_at`      | text                     | Date of the answer                                                                    |
| `response__answer__replied_at_ms`   | bigint                   | Timestamp of the answer (millisecond)                                                 |
| `response__answer__tags`            | []text                   | Tags of the answer                                                                    |

### `data__response__items` table

| Column                     | Type                     | Description                           |
| -------------------------- | ------------------------ | ------------------------------------- |
| `_sdc_batched_at`          | timestamp with time zone | Stitch internal                       |
| `_sdc_level_0_id`          | bigint                   | Stitch internal                       |
| `_sdc_received_at`         | timestamp with time zone | Stitch internal                       |
| `_sdc_sequence`            | bigint                   | Stitch internal                       |
| `_sdc_source_key_event_id` | text                     | Stitch internal                       |
| `_sdc_table_version`       | bigint                   | Stitch internal                       |
| `question__id`             | text                     | Unique identifier for the question    |
| `question__type`           | text                     | Type of question                      |
| `question__title`          | text                     | Label of the question                 |
| `answer__replied_at`       | text                     | Date of the answer                    |
| `answer__replied_at_ms`    | bigint                   | Timestamp of the answer (millisecond) |
| `answer__tags`             | []text                   | Tags of the answer                    |

### `data__response__answer_fields` table

| Column                     | Type                     | Description                                                      |
| -------------------------- | ------------------------ | ---------------------------------------------------------------- |
| `_sdc_batched_at`          | timestamp with time zone | Stitch internal                                                  |
| `_sdc_level_0_id`          | bigint                   | Stitch internal                                                  |
| `_sdc_received_at`         | timestamp with time zone | Stitch internal                                                  |
| `_sdc_sequence`            | bigint                   | Stitch internal                                                  |
| `_sdc_source_key_event_id` | text                     | Stitch internal                                                  |
| `_sdc_table_version`       | bigint                   | Stitch internal                                                  |
| `id`                       | text                     | Unique identifier for the field (a button, a score, an input...) |
| `type`                     | text                     | Value type: "string", "number", "time", "boolean"...             |
| `number`                   | bigint                   | Value of the field (numeric)                                     |
| `bool`                     | boolean                  | Value of the field (boolean)                                     |
| `string`                   | text                     | Value of the field (string)                                      |
| `time`                     | text                     | Value of the field (string)                                      |

### `data__response__hidden_fields` table

| Column                     | Type                     | Description                                                    |
| -------------------------- | ------------------------ | -------------------------------------------------------------- |
| `_sdc_batched_at`          | timestamp with time zone | Stitch internal                                                |
| `_sdc_level_0_id`          | bigint                   | Stitch internal                                                |
| `_sdc_received_at`         | timestamp with time zone | Stitch internal                                                |
| `_sdc_sequence`            | bigint                   | Stitch internal                                                |
| `_sdc_source_key_event_id` | text                     | Stitch internal                                                |
| `_sdc_table_version`       | bigint                   | Stitch internal                                                |
| `name`                     | text                     | Hidden field key                                               |
| `type`                     | text                     | Hidden field value type: "string", "number", "time", "boolean" |
| `value__number`            | bigint                   | Value of the hidden field (numeric)                            |
| `value__bo`                | boolean                  | Value of the hidden field (boolean)                            |
| `value__st`                | text                     | Value of the hidden field (string)                             |

## Support

If you have any questions or additional requirements, feel free to open an issue or contact samuel@screeb.app.
