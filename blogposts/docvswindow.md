---
title: "Document Vs. Window Object"
# subtitle: "What's the difference?"
date: "2023-08-04"
# tags:
#   - frontend
#   - javascript
---

Ever wondered what the difference is between the document and the window object? I have, when creating a UI component that wasn't behaving as expected.

According to [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Window), 'The `Window` interface represents a window containing a DOM document; the `document` property points to the DOM document loaded in that window.'

I ran into trouble when creating a Scroll to Top element that was calling `window.scrollTo`, as the `body` element inside the window object contains the vertical scroll bar.

Here are some additional useful tidbits:

- `document` is a reference to the HTML page / DOM object.
  - It has properties for important DOM elements, such as `document.body` (the `<body>`)
  - It also includes useful APIs such as `document.getElementByID`
- `window` (a.k.a. `globalThis`) is your “global scope”. It contains all the globally available variables.
  - That includes built-ins such as `Array`, `parseFloat`, `scrollTo`, etc.
  - Everything available on `window` can be accessed globally **or** as a property of `window`.
    - That does include `window.document`. Which you can just access as `document`.
