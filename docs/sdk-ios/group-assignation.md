---
sidebar_position: 3
---

# Group assignation

You can assign group to your users, along with properties describing the group.

<u>Requirements:</u>

* Group type and group name must be less than 128 characters long.
* Authorized characters are alphanumeric (uppercase included) and you can insert the following special characters: '-', '_', '.', ' ' (space), '/', and ':'.

```swift
Screeb.assignGroup(type: "company", name: "Apple")
Screeb.assignGroup(type: "plan", name: "Growth")
```

### Default group type

Group type can be omitted:

```swift
Screeb.assignGroup(type: nil, name: "cohort-42")
```

From the Screeb platform, to customize the conditions the surveys are displayed for a visitor, you can apply custom targeting rules using group membership.

### Unassign group

At any time, you can unassign a user from a segment;

```swift
Screeb.unassignGroup(type: nil, name: "cohort-42")
```

## Attributes

In order to bring context to your event handling, some properties can be added to the event.

<u>Requirements:</u>

* Property names must be limited to 128 characters
* No more than 1000 attributes
* Supported types for values: string, number, boolean and Date.

```swift
Screeb.assignGroup(type: "company", name: "Apple", properties:  [
      "iosGroupProp1": AnyEncodable("prop1"),
      "iosGroupProp2": AnyEncodable(75)
])
```
