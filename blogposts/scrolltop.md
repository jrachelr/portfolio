---
title: Creating a Scroll to Top button in React and TypeScript
# subtitle: Adding a UI element to scroll to the top of the search page
date: "2023-08-04"
# tags:
#   - "#coding"
#   - "#react"
#   - "#nextjs"
#   - "#frontend"
#   - "#opensource"
---

Working on a feature for [# 🚀 Feature: Add a 'back to top' button for long search results](https://github.com/JoshuaKGoldberg/tidelift-me-up-site/issues/7). My first attempt was close, my approach was along the lines of:

1. Add a link to the page with an `href="#title"`
2. The button has an `onClick` that:
   1. Takes the clicked link’s `href`, removes the `#`, and finds an element by that ID (so, `"title"`)
   2. Calls `window.scrollTo` with a `top` equal to that element’s bounding client rectangle’s top

```ts
<Link href="#title" onClick={(event) => { event.preventDefault(); const targetID = event.currentTarget.href.replace(/.+#/, ""); const element = document.getElementById(targetId); window.scrollTo({ behavior: "smooth", top: element?.getBoundingClientRec().top }); }) > Scroll to Top </Link>
```

##### Streamlining the title

Rather than constructing the title from the `event.currentTarget,` ! can keep a constant in your code. That way it never has to re-read it from the DOM element.

```ts
const targetID = "title";
<Link href={`#${targetID}`}
onClick={(event) => { event.preventDefault(); const element = document.getElementById(targetId); window.scrollTo({ behavior: "smooth", top: element?.getBoundingClientRec().top }); }) > Scroll to Top
</Link>
```

Re-using constants instead of accessing dynamic DOM attributes is generally a good idea. It’s less code you have to write. And it means you don’t have to risk reaching into the document (which users might have toyed with).

### An alternative: React Refs

In theory, the code could avoid the `getElementById` call altogether by using a React “ref” (reference to some information separate from your React state). Refs can be used for a few things, so there are a couple of docs pages:

- [Referencing values with Refs](https://react.dev/learn/referencing-values-with-refs)
- [Manipulating the DOM with Refs](https://react.dev/learn/manipulating-the-dom-with-refs)
  Specifically, what can happen here is use a DOM reference to store the HTML `<h1>` in state, then pass it to the `ResultsDisplay` component as a prop:

```ts
const [title, setTitle] = useState<HTMLHeadingElement | undefined>(); // ...
return (
  <>
    {" "}
    <h1 ref={(element) => setTitle(element || undefined)}>...</h1> <ResultsDisplay title={title} />
  </>
);
```

Then, `ResultsDisplay` could call the element’s `.scrollIntoView`:

```ts
<Link onClick={() => { title?.scrollIntoView(); });
```

However this only works on Next.js client components, therefore:

### Streamlining the Scroll

This can be achieved with even less code by avoiding `#title` altogether. Calling `document.body.scrollTo` and telling it `top: 0` will scroll to the top of the `<body>` element.

```ts
<Link href={`#${targetID}`} onClick={(event) => { event.preventDefault(); document.body.scrollTo({ behavior: "smooth", top: 0 }); }) > Scroll to Top </Link>
```

In this instance I need to use `document.body.scrollTo` rather than `window.scrollTo` as the `<body>` element has a vertical scrollbar. The `<body>` is set to `height: 100%` of the containing `html` object, using `document.body.scrollTo` will take us to 0% (the top) of the body object.

```ts
<button onClick={() => { document.body.scrollTo({ behavior: "smooth", top: 0 }); }) > Scroll to Top </button>
```

### Adding some styling

We only want the Scroll to Top button to appear once we've scrolled away from the top of the page. To implement this, first we need to set the initial state of the button:

```ts
const [visible, setVisible] = useState(false);
```

Then we need to create the function that will switch the visibility on and off:

```ts
const toggleVisible = () => {
  const scrolled = document.body.scrollTop;
  setVisible(scrolled > 100);
};
```

Finally, we add the event lister that keeps track of how far we've scrolled down the page:

```ts
if (typeof document !== "undefined") {
  document.body.addEventListener("scroll", toggleVisible, { passive: true });
}
```

The event listener listens for the `"scroll"` event and notifies the `toggleVisible` function. We set the function to `passive: true` to improve performance, which you can read more about [here](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#improving_scroll_performance_using_passive_listeners).

Hope this helps! Happy coding!
