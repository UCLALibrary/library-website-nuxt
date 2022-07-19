---
name: Page Request
about: Use this to define a Page that a developer can build.
title: Page Request - {PageRoute}
labels: ""
assignees: ""
---

## Page Description

This Page is used {where} to display {what}. Be sure to explain any variants or hover states.

## Design

Please also see attached screenshots for quick reference.

-   Desktop: https://www.figma.com/file/ZT2qWKTlOxfhr1QUS2rFPL/UI-Pattern-Library-(Client-Facing)-Final?node-id=7%3A56
-   Mobile: https://www.figma.com/file/ZT2qWKTlOxfhr1QUS2rFPL/UI-Pattern-Library-(Client-Facing)-Final?node-id=7%3A58

If no mobile designs provided, please use your best judgment for responsiveness.

## Slots

Name and description of any slots needed.

## Props

```js
props: {
    exampleObject: {
        // Mock: api.page
        type: Object,
        default: () => {}
    },
    exampleArray: {
        // Mock: api.pages
        type: Array,
        default: () => []
    },
    exampleNumber: {
        type: Number,
        default: 0
    },
    exampleString: {
        type: String,
        default: ""
    },
    exampleBoolean: {
        type: Boolean,
        default: true
    }
}
```

## Developer Tips

List any developer tips here

1. `--color-example` for the font color

## Events

Describe any events that should be emitted by this component.

1. `menuOpened` when {something} is clicked on

## Child components

List out any components that are used by this new Page. 

1. `required-component` is used for {what}

## Screenshots

{attach screenshots}
