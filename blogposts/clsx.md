---
title: "clsx: conditional CSS classes in React"
date: "2023-09-03"
---

Imagine you have a component you only want to render depending on some action from the user. E.g. a [scroll to top button](/blogposts/scrolltop.md). Or any kind of style you'd like tp apply dynamically.

One very handy method to achieve this is by using the [`clsx`](https://www.npmjs.com/package/clsx) library.

```ts
import clsx from "clsx";

import styles from "./styles.module.css";

export interface MyComponentProps {
  isActive: boolean;
}

export function MyComponent({ isActive }) {
  return <div className={clsx(styles.one, isActive && styles.two)}>hi</div>;
}
```

In the above example, we initialize the props being passed to `MyComponent`.

Inside the component `className`, `clsx(...)` takes in any number of potential strings -including falsy values- and joins them into a single class.

For example:

- - `clsx("kittens")` → `"kittens"`
  - `clsx("kittens", "puppies")` → `"kittens puppies"`
  - `clsx("kittens", false)` → `"kittens"`
  - `clsx("kittens", false && "puppies")` → `"kittens"`
  - `clsx("kittens", true && "puppies")` → `"kittens puppies"`
  - `clsx("kittens", visible && "puppies")` → if..
    - visible is `false`: then just `"kittens"`
    - visible is `true`: then `"kittens puppies"`

By using `clsx` we can account for multiple states in a component, e.g. hover, focus, or dark mode.
