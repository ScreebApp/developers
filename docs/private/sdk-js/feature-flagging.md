---
sidebar_position: 1
---

# Feature Flagging

## I paid for 100k MAU, but my application has 1m MAU

For large B2C applications, your Screeb quota may be consumed very fast. Until the end of the current month, you will be able to survey only the first XXX MAU allowed by your quota.

In order to distribute your quota throughout the month, please use the following code:

```ts
function isScreebEnabledForCurrentUser(userId: string, country: string): boolean {
  // Screeb will be loaded for 100% of japan users
  if (country === "ja") {
    return true;
  }

  const hash = cyrb53Hash(userId, 42);

  // Screeb will be loaded for 10% of the rest of the audience.
  return hash % 10 === 0;
}

// https://stackoverflow.com/questions/7616461/generate-a-hash-from-string-in-javascript
function cyrb53Hash(str: string, seed: number): number {
  let h1 = 0xdeadbeef ^ seed,
    h2 = 0x41c6ce57 ^ seed;
  for (let i = 0, ch; i < str.length; i++) {
    ch = str.charCodeAt(i);
    h1 = Math.imul(h1 ^ ch, 2654435761);
    h2 = Math.imul(h2 ^ ch, 1597334677);
  }

  h1 =
    Math.imul(h1 ^ (h1 >>> 16), 2246822507) ^
    Math.imul(h2 ^ (h2 >>> 13), 3266489909);
  h2 =
    Math.imul(h2 ^ (h2 >>> 16), 2246822507) ^
    Math.imul(h1 ^ (h1 >>> 13), 3266489909);

  return 4294967296 * (2097151 & h2) + (h1 >>> 0);
}
```

Then for each call to a Screeb command, check that the user is enabled to load Screeb:

```ts
if (isScreebEnabledForUser("user-123",  'us')) {
  $screeb('init', ...)
}
```

```ts
if (isScreebEnabledForUser("user-123",  'us')) {
  $screeb('event.track', ...)
}
```

```ts
if (isScreebEnabledForUser("user-123",  'us')) {
  $screeb('identity.group.assign', ...)
}
```

To vary your audience every month, please update the `seed` parameter in `cyrb53Hash`. Eg: `cyrb53Hash(userId, new Date().getMonth())`