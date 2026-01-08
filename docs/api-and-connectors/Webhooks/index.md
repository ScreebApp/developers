---
sidebar_position: 1
title: Webhooks
---

Screeb Webhooks allow you to receive real-time notifications about survey responses that received in your Screeb workspace. When an event occurs, we send an HTTP POST request to the webhook's configured URL.

You can configure webhooks at differents levels:
- At the workspace level -> Triggered for all surveys in the workspace
- At the survey level -> Triggered for a specific survey

:::warning
Only Admin users can configure webhooks.
:::

## Setup

### Install the Webhook Integration

Go to the [Integrations](https://admin.screeb.app/org/last/integrations) page and select the Webhook integration.
Once installed, you can configure the Webhook URL and the events you want to receive.

![](/assets/webhooks/webhook-integration.png)

### Configure the Webhook

#### Workspace Level

To configure the Webhook URL at the workspace level, go to the [Webhooks](https://admin.screeb.app/org/last/integrations/webhook) page and click on the "**Add a new Webhook**" button.

![](/assets/webhooks/webhook-configure-workspace.png)

#### Survey Level

To configure the Webhook URL at the survey level, follow these steps:
1. Go to the [Surveys](https://admin.screeb.app/org/last/survey/list) page.
2. Click on the survey you want to configure.
3. Go to the "Analyze" tab.
4. Click on the "Connect" section in the side bar.
5. Click on the "**Add a new Webhook**" button.

Don't forget to save at the end.

![](/assets/webhooks/webhook-configure-survey.png)