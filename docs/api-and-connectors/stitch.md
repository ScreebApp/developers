---
sidebar_position: 3
---

# Stitch v1.0.0

On visitor action (such as click on a button, scoring, input...) Screeb can send a request to an external platform, containing the response data.

## Entities

- Organization: A Screeb account, shared by many Screeb users of your company
- Channel: A distribution channel for your survey (Javascript SDK, Android SDK, iOS SDK...)
- Survey
- Survey scenario: A versioned survey: on survey update, your flow is saved in a new scenario. New respondents will see the last scenario.
- Respondent: Information about the visitor
- Response: A response is a chain of question+answers. A respondent sometimes has many responses to a single survey.
- Question
- Answer: An answer is part of a response. Each answer is associated to a question.

## Hook types

You can send 3 different event types into your datawarehouse:

- On survey display: a survey is shown to visitors, but no question is replied. You will get notified even if no response is given.
- On question answered: a question has been replied. This webhook will be triggered for each question of a single survey.
- On response end: a survey has been closed or fully replied to by the respondent.

## Warehouse schema

Stitch delivers the responses to your surveys using the following database schema. In case of schema change, Stitch is in charge of updating columns into your datawarehouse.

Stitch requires an immutable primary key for identifying rows. Screeb uses `event_id` as primary key.

### Tables

| Table name                                        | Description                                                                                              |
|---------------------------------------------------|----------------------------------------------------------------------------------------------------------|
| `<integration>.data`                              | A table with response metadata (organization, channel, survey...).                                       |
| `<integration>.data__response__items`             | A table with question answer.                                                                            |
| `<integration>.data__response__hidden_fields`     | A table with your hidden fields linked to the response.                                                  |

### `data` table

| Column                                  | Type                     | Description   |
|-----------------------------------------|--------------------------|-----------|
| `_sdc_batched_at`                         | timestamp with time zone | Stitch internal          |
| `_sdc_received_at`                        | timestamp with time zone | Stitch internal          |
| `_sdc_sequence`                           | bigint                   | Stitch internal          |
| `_sdc_table_version`                      | bigint                   | Stitch internal          |
| `event_id`                                | text                     | Unique id for this event (same id in retry request)  |
| `event_type`                              | text                     | Type of event sent over webhook          |
| `event_time`                              | text                     | Date of event          |
| `event_time_ms`                           | bigint                   | Date of event in millisecond          |
| `retry_count`                             | bigint                   | Nth request for this event          |
| `version`                                 | text                     | Semver version of the webhook payload          |
| `organization__id`                        | text                     | Unique identifier for the organization          |
| `organization__name`                      | text                     | Name of the Screeb account          |
| `channel__id`                             | text                     | Unique identifier for the channel          |
| `channel__type`                           | text                     | Channel type (widget, android, ios, hosted-page...)          |
| `respondent__id`                          | text                     | Main respondent identifier          |
| `respondent__alias`                       | text                     | Screeb identifier for the respondent          |
| `respondent__name`                        | text                     | Respondent name (when available in identity properties)          |
| `respondent__email`                       | text                     | Respondent email (when available in identity properties)          |
| `respondent__group_names`                 | []text                   | Respondent groups           |
| `survey__id`                              | text                     | Unique identifier for the survey          |
| `survey__name`                            | text                     | Name of the survey          |
| `survey__scenario_id`                     | text                     | Unique identifier for the survey scenario          |
| `survey__scenario_time`                   | text                     | Date of the scenario edition          |
| `survey__scenario_time_ms`                | bigint                   | Timestamp of the scenario edition           |
| `survey__scenario_version`                | bigint                   | Version number of the survey scenario          |
| `response__id`                            | text                     | Unique identifier for the response          |
| `response__time`                          | text                     | Date of response start          |
| `response__time_ms`                       | bigint                   | Timestamp of response start in millisecond          |
| `response__time_to_complete_second`       | bigint                   | Seconds between survey display and response end (when event_type == `response.ended`)          |
| `response__locale`                        | text                     | Locale of the respondent          |
| `response__tags`                          | []text                   | Tags of the response          |
| `response__question__id`                  | text                     | Unique identifier for the question          |
| `response__question__correlation_id`      | text                     | Correlation identifier for the question (shared over many survey scenario versions)          |
| `response__question__type`                | text                     | Type of question          |
| `response__question__title`               | text                     | Label of the question          |
| `response__answer__replied_at`            | text                     | Date of the answer          |
| `response__answer__replied_at_ms`         | bigint                   | Timestamp of the answer (millisecond)          |
| `response__answer__tags`                  | []text                   | Tags of the answer          |
| `response__answer__field__id`             | text                     | Unique identifier for the field (a button, a score, an input...)          |
| `response__answer__field__correlation_id` | text                     | Correlation identifier for the field (shared over many survey scenario versions)          |
| `response__answer__field__type`           | text                     | Value type: "string", "number", "time", "boolean"...          |
| `response__answer__field__value__bi`      | bigint                   | Value of the answer (numeric)         |
| `response__answer__field__value__bo`      | boolean                  | Value of the answer (boolean)         |
| `response__answer__field__value__st`      | text                     | Value of the answer (string)          |

### `data__response__items` table

| Column                        | Type                     | Description          |
|-------------------------------|--------------------------|----------------------|
| `_sdc_batched_at`               | timestamp with time zone | Stitch internal                     |
| `_sdc_level_0_id`               | bigint                   | Stitch internal                     |
| `_sdc_received_at`              | timestamp with time zone | Stitch internal                     |
| `_sdc_sequence`                 | bigint                   | Stitch internal                     |
| `_sdc_source_key_event_id`      | text                     | Stitch internal                     |
| `_sdc_table_version`            | bigint                   | Stitch internal                     |
| `question__id`                  | text                     | Unique identifier for the question                     |
| `question__correlation_id`      | text                     | Correlation identifier for the question (shared over many survey scenario versions)                     |
| `question__type`                | text                     | Type of question                     |
| `question__title`               | text                     | Label of the question                     |
| `answer__replied_at`            | text                     | Date of the answer                     |
| `answer__replied_at_ms`         | bigint                   | Timestamp of the answer (millisecond)                     |
| `answer__tags`                  | []text                   | Tags of the answer                     |
| `answer__field__id`             | text                     | Unique identifier for the field (a button, a score, an input...)                     |
| `answer__field__correlation_id` | text                     | Correlation identifier for the field (shared over many survey scenario versions)                     |
| `answer__field__type`           | text                     | Value type: "string", "number", "time", "boolean"...                     |
| `answer__field__value__bi`      | bigint                   | Value of the answer (numeric)                     |
| `answer__field__value__bo`      | boolean                  | Value of the answer (boolean)                     |
| `answer__field__value__st`      | text                     | Value of the answer (string)                      |

### `data__response__hidden_fields` table

| Column                     | Type                     | Description                    |
|----------------------------|--------------------------|--------------------------------|
| `_sdc_batched_at`          | timestamp with time zone | Stitch internal                               |
| `_sdc_level_0_id`          | bigint                   | Stitch internal                               |
| `_sdc_received_at`         | timestamp with time zone | Stitch internal                               |
| `_sdc_sequence`            | bigint                   | Stitch internal                               |
| `_sdc_source_key_event_id` | text                     | Stitch internal                               |
| `_sdc_table_version`       | bigint                   | Stitch internal                               |
| `name`                     | text                     | Hidden field key                               |
| `type`                     | text                     | Hidden field value type: "string", "number", "time", "boolean"                               |
| `value__bi`                | bigint                   | Value of the hidden field (numeric)                               |
| `value__bo`                | boolean                  | Value of the hidden field (boolean)                               |
| `value__st`                | text                     | Value of the hidden field (string)                               |

## Support

If you have any questions or additional requirements, feel free to open an issue or contact samuel@screeb.app.
