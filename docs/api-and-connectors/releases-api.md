---
sidebar_position: 5
---

# Relases API

You can integrate the creation of your releases into your current workflow using the Release API.

## Authorization

To push a new release to your organization, you will need an API Token generated for you. You can find it on the release create form, next to the Submit button.

## Endpoint

The releases API is accessible via the following endpoint: `POST` - https://api.screeb.app/1.0/release

The `released_at` field is optional and will default to the current date.

## Example

Here is an example of a request that creates a release.

```bash
curl -X POST https://api.screeb.app/1.0/release \
    -H "Content-Type: application/json" \
    -H "Authorization: Bearer my_api_token" \
    -d '{
        "name": "My release name",
        "description": "My release description",
        "version": "1.0",
        "tags": ["API", "V1"],
        "released_at": "2023-03-22T15:22:41+00:00"
    }'
```

## Support

If you have any questions or additional requirements, feel free to open an issue or contact samuel@screeb.app.