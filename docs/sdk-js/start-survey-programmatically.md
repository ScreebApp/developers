---
sidebar_position: 5
---

# Start survey programmatically

## How to start a survey programmatically?

In most cases, you should let the Screeb *targeting engine start* the survey. But sometimes, you may need more control on survey trigger time.

This method is often used for adding feedback button into a menu.

```js
$screeb('survey.start', '<SURVEY_ID>'); 
```

## Prevent multiple displays?

If current user already replied to your survey and you would rather not display it many times, please add the `allow_multiple_responses` argument:

```js
$screeb('survey.start', '<SURVEY_ID>', { 'allow_multiple_responses': false }); 
```

## Contextualize response

The `survey.start` command accepts an object of hidden fields. Values passed as parameters will be listed alongside the responses, on the Screeb platform.

```js
$screeb('survey.start', '<SURVEY_ID>', { 'hidden_fields': { 'color': 'green', 'article_id': 42 } });
```
