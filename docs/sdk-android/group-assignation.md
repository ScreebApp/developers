---
sidebar_position: 3
---

# Group assignation

You can assign groups to your users, along with properties describing the group.

<u>Requirements:</u>

* Group type and group name must be less than 128 characters long.
* Authorized characters are alphanumeric (uppercase included) and you can insert the following special characters: '-' , '_' and ' ' (space).

```kotlin
Screeb.assignGroup("company", "Apple")
Screeb.assignGroup("plan", "Growth")
```

### Default group type

Group type can be omitted:

```kotlin
Screeb.assignGroup(null, "cohort-42")
```

From the Screeb platform, to customize the conditions the surveys are displayed for a visitor, you can apply custom targeting rules using group membership.

### Group name vs group id

It is recommended to identify groups by using an immutable group id instead of a group name.

```kotlin
Screeb.assignGroup("company", "nuR4eecu", GroupProperties().apply { this["name"] = "Apple" }))
```

### Unassign group

At any time, you can unassign a user from a segment;

```kotlin
Screeb.unassignGroup(null, "cohort-42")
```

## Attributes

In order to bring context to your event handling, some properties can be added to the event.

<u>Requirements:</u>

* Property names must be limited to 128 characters
* No more than 1000 attributes
* Supported types for values: string, number, boolean and Date.

```kotlin
Screeb.assignGroup("company", "nuR4eecu", GroupProperties().apply {
    this["name"] = "Apple"
    this["employes"] = "100.000+"
})
```
