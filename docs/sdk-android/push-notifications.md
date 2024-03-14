---
sidebar_position: 8
---

# Push notifications

To launch a survey from a push notification, you need to send a survey id in the payload of the push message.

Then, when receiving the message in the app, you have to start a survey with this id.

<u>Requirements:</u>

* Configure a survey in your Screeb admin space.
* Configure a push service in your app (ex: Firebase)

## Configuring the push notification

Create a new campaign in your notification service admin (ex: Firebase) and prepare the content of the notification: title, body, target and schedule.

To configure the payload, add custom data (in the "Additional options" section for Firebase).
For example, you can specify a key value like this

`
 "screeb" : "YOUR SURVEY ID"
`

Then, launch the campaign.

## Foreground mode

To receive the push messages payload when the app is in the foreground with Firebase, you must configure and declare a FirebaseMessagingService :

```kotlin
  override fun onMessageReceived(remoteMessage: RemoteMessage) {
        // ...

        // Check if the message contains a data payload.
        if (remoteMessage.data.isNotEmpty()) {
            Log.d(TAG, "Message data payload: ${remoteMessage.data}")
            Screeb.startSurveyFromNotification(remoteMessage.data["screeb"])
        }

        // ...
  }
```

## Background mode

When an app is in the background, a notification is typically displayed by your push framework.
When the user taps the notification, it opens the app with an intent that contains the payload you have previously configured.

Then you can get the Screeb id to start a survey in the Activity that has been started.

```kotlin
    // Call this function from the onCreate of your Activity
    private fun manageNotifications() {
        intent.extras?.let {
            Screeb.startSurvey(it.getString("screeb"))
        }
    }
```
