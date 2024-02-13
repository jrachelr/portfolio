---
title: "How TideliftMeUp works"
# subtitle: "What's the difference?"
date: "2023-08-05"
# tags:
#   - frontend
#   - javascript
---

One project I've been spending some time with is Josh Goldberg's [Tidelift Me Up Site](https://github.com/JoshuaKGoldberg/tidelift-me-up-site).

The Tidelift Me Up tool is built on Tidelift's API, which helps maintainers to find their npm packages eligible for Tidelift funding.

Tidelift is an organization who's mission is to improve open-source software by giving maintainers recognition and compensation, while giving organizations necessary information to securely develop their applications using open-source.

This mission is becoming ever more critical as more and more software is built on open-source code.

![Open-source code supporting technology infrastructure](/Users/racheljohnson/projects/portfolio/public/opensource.png)

The accompanying web app to Tidelift Me Up is a NextJS app:

### How does Tidelift Me Up work?

The page `(page.tsx)` is set up with a React Server Component (RSC) named Home. It renders a `<form>` to the DOM. Inside that form are some inputs and a submit button.

When the submit button is pressed, the page reloads with a URL (based on the inputs) like:

```tsx
/?username=joshuakgoldberg&since=&author=on&maintainer=on
```

`Home` looks like a normal React function component, but it’s actually `async` so that it can fetch some data (this is why it’s an RSC - they’re allowed to do that!). Specifically, it calls to the `tideliftMeUp` function:

```ts
let result: Error | EstimatedPackage[] | undefined;

try {
  result = options.username ? await tideliftMeUp(options) : undefined;
} catch (error) {
  result = error as Error;
}
```

The `options` come from the page's URL search params, provided by the user. They’re provided as a `searchParams` prop by Next.js to the component.

The `tideliftMeUp` function comes from [tidelift-me-up](https://github.com/JoshuaKGoldberg/tidelift-me-up). It takes some options and returns a [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) containing an array of objects.

### `tideliftMeUp`

`tideliftMeUp` on the inside:

1. Calls to the npm API to retrieve information on the user’s npm packages
2. Calls to the Tidelift API to get funding information for each of those packages

Both of those API calls are JSON APIs. Fun fact, Next.js’s dev server will log any network calls it sees to the console.

```ts

-  ┌ GET /?username=joshuakgoldberg&since=&author=on&maintainer=on 200 in 33ms
   │
   ├──── GET https://api.npms.io/v2/search?q=maintainer:jo.. 200 in 6ms (cache: HIT)
   │
   └── 1 level ── POST https://tidelift.com/api/depci/estimate/bulk.. 200 in 1ms (cache: HIT)

```

- The npm one is a GET request sent to https://api.npms.io/v2/search?q=maintainer:joshuakgoldberg so you can see it in your browser
- The tidelift one is a POST request sent to https://tidelift.com/api/depci/estimate/bulk_estimates so you can’t see it in your browser
  - The request comes from this function in the `tidelift-me-up` package: https://github.com/JoshuaKGoldberg/tidelift-me-up/blob/4d905b40bd161cc56ecbafadfa4c32c5dda8ec44/src/getPackageEstimates.ts#L8
  - The data looks like this:
