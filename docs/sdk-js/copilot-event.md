---
sidebar_position: 5
---

# Copilot event tracking

You can track actions performed by your users with AI copilots, along with properties describing the event. This allows you to measure and analyze the quality of your copilot experience and identify opportunities for improvement.

## How It Works

We can leverage our event tracking capabilities for copilots:

- Every user prompt sent is tracked as an event.

- Every copilot response is tracked as an event.

Optional events (like conversions or satisfaction) can be added to analyze success and user sentiment.

By adding properties to these events, you can provide additional context.

## Events to Track

### Mandatory Events

"screeb_copilot_user_prompt"

Triggered when a user sends a message to the copilot.

```js
$screeb("event.track", "screeb_copilot_user_prompt", {
  prompt: "How can I export my data?",
  conversation_id: "conv_123",
  session_id: "sess_456",
  // + any custom properties your product needs
});
```

<u>Mandatory properties:</u>

- prompt: string
- conversation_id: string
- session_id: string

"screeb_copilot_response"

Triggered when the copilot replies to the user.

```js
$screeb("event.track", "screeb_copilot_response", {
  response: "You can export your data from the Settings page.",
  conversation_id: "conv_123",
  session_id: "sess_456",
  // + any custom properties your product needs
});
```

<u>Mandatory properties:</u>

- response: string
- conversation_id: string
- session_id: string

### Optional Events

"screeb_copilot_conversion"

Triggered when a copilot interaction leads to a conversion (e.g. a purchase, signup, or workflow completion).

```js
$screeb("event.track", "screeb_copilot_conversion", {
  name: "Subscription started",
  conversation_id: "conv_123",
  session_id: "sess_456",
  // + any custom properties your product needs
});
```

<u>Mandatory properties:</u>

name: string
conversation_id: string
session_id: string

"screeb_copilot_satisfaction"
Triggered when a user provides feedback on the copilot interaction.

```js
$screeb("event.track", "screeb_copilot_satisfaction", {
  rating_scale: "1-5",
  rating: 4,
  conversation_id: "conv_123",
  session_id: "sess_456",
  // + any custom properties
});
```

<u>Mandatory properties:</u>

- rating_scale: string (e.g. "1-5")
- rating: number
- conversation_id: string
- session_id: string
