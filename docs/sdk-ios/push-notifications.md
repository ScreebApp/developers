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

Create a new campaign in your notification service admin (ex: Firebase) and prepare the content of the notification : title, body, target and scheduling.

To configure the payload, add a custom data (in the "Additional options" section for Firebase).
For example, you can specify a key value like this

`
 "screeb" : "YOUR SURVEY ID"
`

Then, launch the campaign.

## Foreground mode

To receive the push messages payload when the app is in foreground with Firebase, you must configure a UNUserNotificationCenterDelegate delegate and implement this function :

```swift
extension AppDelegate: UNUserNotificationCenterDelegate {
  func userNotificationCenter(
    _ center: UNUserNotificationCenter,
    didReceive response: UNNotificationResponse,
    withCompletionHandler completionHandler: @escaping () -> Void
  ) {
      process(response.notification)
      completionHandler()
  }
  // ...
}
```

The function process described below uses the survey id to start the survey

```swift
    private func process(_ notification: UNNotification) {
      let userInfo = notification.request.content.userInfo
      if let surveyId = userInfo["screeb"] as? String {
          Screeb.startSurvey(surveyId: surveyId)
      }
    }
```

NB : Don't forget to declare this delegate in your `application` function of your AppDelegate class :

```swift
UNUserNotificationCenter.current().delegate = self
```

## Background mode

When an app is in background, a notification is typically displayed by your push framework.
When the user tap on the notification, it opens the app with the data that contains the payload you have previously configured.

Then you can get the Screeb id to start a survey in the controller that has been started.


```swift
extension AppDelegate: UNUserNotificationCenterDelegate {
  func userNotificationCenter(
    _ center: UNUserNotificationCenter,
    willPresent notification: UNNotification,
    withCompletionHandler completionHandler:
    @escaping (UNNotificationPresentationOptions) -> Void
  ) {
      process(notification)
      if #available(iOS 14.0, *) {
          completionHandler([[.banner, .sound]])
      } else {
          // Fallback on earlier versions
      }
  }
  // ...
}
```
