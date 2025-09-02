---
sidebar_position: 1
---

# Install

## How to add the Screeb tag to your website?

The Screeb tag is a small piece of JavaScript code that you can add to your website to enable Screeb features.

### Using HTML

There is many ways to add the Screeb tag to your website. The most common way is to add the tag directly to your website's HTML code.

For that, you need to copy the Screeb tag code and paste it into your website's HTML code.
You can find this code in your workspace settings, (see [Install Screeb section](https://admin.screeb.app/org/last/settings/install)).

:::tip

Pay Attention to the identifier `<website-id>` in the tag code. This identifier is unique per Screeb workspace.

:::

Paste the tag at the end of your HTML page (before `</body>`).

Example:

```html
<script type="text/javascript">
  (function (s, c, r, ee, b) {
    s["ScreebObject"] = r;
    s[r] =
      s[r] ||
      function () {
        var d = arguments;
        return new Promise(function (a, b) {
          (s[r].q = s[r].q || []).push({ v: 1, args: d, ok: a, ko: b });
        });
      };
    b = c.createElement("script");
    b.type = "text/javascript";
    b.id = r;
    b.src = ee;
    b.async = 1;
    c.getElementsByTagName("head")[0].appendChild(b);
  })(window, document, "$screeb", "https://t.screeb.app/tag.js");

  $screeb("init", "<website-id>");
</script>
```

### Using NPM Packages

If your app is built with a custom framework, you can install the right Screeb package for you and import it in your code.
[See NPM Packages.](./npm-packages)

### Using Segment

If you are using Segment, you can install Screeb without any additional coding using Segment Destinations. This method allows you to send data from Segment to Screeb without adding the Screeb tag to your website manually.

To install Screeb using Segment Destinations, follow these steps:

1. **Log in to Segment**: Go to your Segment workspace and log in with your credentials.

2. **Add Screeb as a Destination**:

- Navigate to the **Destinations** tab in your Segment workspace.
- Click on **Add Destination**.
- Search for **Screeb Web (Actions)** in the catalog and select it.
- Click on **Configure Screeb Web (Actions)**.

3. **Configure Screeb**:

- Enter your Screeb **Workspace ID**. You can find this ID in your [Screeb workspace settings](https://admin.screeb.app/org/last/settings/install).
- Follow the on-screen instructions to complete the setup.

4. **Send Data to Screeb**:

- Once Screeb is added as a destination, Segment will start sending data to Screeb based on the events you have configured.
- Ensure that your events are correctly set up in Segment to capture the data you need in Screeb.

5. **Verify Installation**:

- Go back to your Screeb workspace.
- Check the incoming data to ensure that events from Segment are being received correctly.

For more detailed instructions, refer to the [Segment documentation](https://segment.com/docs/connections/destinations/catalog/actions-screeb-web/).

By following these steps, you can seamlessly integrate Screeb with Segment and start leveraging the powerful features of both platforms.

### Using Google Tag Manager (GTM)

If you are using Google Tag Manager (GTM), you can install Screeb without any additional coding using GTM. This method allows you to send data from GTM to Screeb without adding the Screeb tag to your website manually.

To install Screeb using Google Tag Manager (GTM), follow these steps:

1. **Log in to GTM**: Go to your Google Tag Manager account and log in with your credentials.

2. **Create a New Tag**:

- Navigate to the **Tags** section in your GTM workspace.
- Click on **Add New Tag** to create a new tag.
- Name your new tag and click on **Choose a Tag**.
- Navigate to the “Community Tags” by clicking on the banner above the tag list
- Search for **Screeb** in the community tags and click on **Add to Workspace**.

3. **Configure the Tag**:

- Enter your Screeb **Workspace ID**. You can find this ID in your [Screeb workspace settings](https://admin.screeb.app/org/last/settings/install).

4. **Set Up Trigger**:

- Click on **Triggering** to set up a trigger for the tag.
- Choose an appropriate trigger, such as **All Pages**, to ensure the Screeb tag is loaded on all pages of your website.

5. **Save and Publish**:

- Save the tag configuration.
- Click on **Submit** to publish the changes to your GTM container.

6. **Verify Installation**:

- Go back to your Screeb workspace.
- Check the incoming data to ensure that events from GTM are being received correctly.

By following these steps, you can integrate Screeb with Google Tag Manager and start leveraging the powerful features of both platforms.

## About tag lifecycle

### Initialization

After the script tag is inserted into your page, you must call the `init` command, with your website ID (given in Screeb app). If no identity is specified, an anonymous Screeb session will be created (see [identity](./identity) section).

```js
$screeb("init", "<website-id>");
```

### deactivation

At any time, you can disable the Screeb tag with the following command:

```js
$screeb("close");
```

### Force language

If you want to force the language, you can pass the `language` parameter:
Here is the order of priority for the language:
survey.start param > init param > user property > browser language.

```js
$screeb("init", "<website-id>", { language: "en" });
```

## Next steps

### 1- Identify visitors

[See here.](./identity)

### 2- Event tracking

[See here.](./event-tracking)

### 3- Start the survey programmatically

[See here.](./start-survey-programmatically)
