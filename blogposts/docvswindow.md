---
title: "Document Vs. Window Object"
# subtitle: "What's the difference?"
date: "2023-08-04"
# tags:
#   - frontend
#   - javascript
---

- `document` is a reference to the HTML page / DOM object.
  - It has properties for important DOM elements, such as `document.body` (the `<body>`)
  - It also includes useful APIs such as `document.getElementByID`
- `window` (a.k.a. `globalThis`) is your “global scope”. It contains all the globally available variables.
  - That includes built-ins such as `Array`, `parseFloat`, `scrollTo`, etc.
  - Everything available on `window` can be accessed globally **or** as a property of `window`.
    - That does include `window.document`. Which you can just access as `document`.
