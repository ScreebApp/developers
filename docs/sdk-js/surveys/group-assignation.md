---
sidebar_position: 4
---

# Group assignation


You can assign group to your users, along with properties describing the group.

<u>Requirements:</u>

* Group type and group id must be less than 128 characters long.
* Authorized characters are alphanumeric (uppercase included) and you can insert the following special characters: '-', '_', '.', ' ' (space), '/', and ':'.

```js
$screeb('identity.group.assign', 'company', 'Apple');
$screeb('identity.group.assign', 'plan', 'Growth');
```

### Default group type

Group type can be omitted:

```js
$screeb('identity.group.assign', null, 'cohort-42'); 
```

From the Screeb platform, to customize the conditions the surveys are displayed for a visitor, you can apply custom targeting rules using group membership.

### Group name vs group id

It is recommended to identify groups by using an immutable group id instead of a group name.

```js
$screeb('identity.group.unassign', 'company', 'nuR4eecu', { name: 'Apple' });
```

### Unassign group

At any time, you can unassign a user from a segment.

```js
$screeb('identity.group.unassign', 'company', 'Apple');
```

## Attributes

In order to bring context to your event handling, some properties can be added to the event.

<u>Requirements:</u>

* Property names must be limited to 128 characters
* No more than 1000 attributes
* Supported types for values: string, number, boolean and Date.

```js
// trigger custom event
$screeb('identity.group.assign', 'company', 'Apple', {
  address_line_1: 'Apple Campus',
  address_line_2: '1 Infinite Loop',
  city: 'Cupertino',
  zipcode: 95014,
  state: 'California',
  country: 'United states',
});
```
