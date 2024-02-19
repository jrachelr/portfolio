---
title: "What is internationalization and i18n?"
date: "2023-08-31"
---

While working on a UI bug on GitLab.com, I came across a term I was unfamiliar with - a string with a function `s__` in an `i18n` dictionary.

This led me down a rabbit hole of understanding how software is adapted to different languages, regional idiosyncrasies and technical requirements of a certain location. This process is known as internationalization and localization, or i18n. The abbreviation of i18n is derived from the 18 letters between the “I” and the “n”: i18n (i+ nternationalizatio + n).

Here’s an extremely brief overview of how this process works.

Internationalization (I18N) is the process of designing and preparing an application to be used within different locales. This is the first step and builds the structure which allows the software to be adjusted to different markets.

Localization is the act of adapting software, including content, UI layout, colors, and images to measurement units, date formats, and currencies, to a specific locale. The term “locale” defines a geographical region with a specific language, for example, fr_CA refers to Canadian French, fr_FR means French from France.

GitLab uses the most widely used implementation of internationalization and localization, with [GNU gettext](https://www.gnu.org/software/gettext/manual/gettext.html#Files).

GNU gettext uses .po (portable object) and .pot (portable object template) extensions for user interface text translation files. The English language strings contained in the GitLab UI are saved into a .pot file. The .pot file contains source text but no translations, while .po files contain the translations to a particular language.

Each language has it’s own .po file, for example, US-EN.po or fr.po. The core of each .po file is made of pairs of the source text (what is found in the code) and target text (the translated text). For example, in the French PO file you might have a translation of a string as follows:

```pot
msgid "Hello world"
msgstr "Bonjour le monde"
```

The `msgid` line contains the text actually in the code, and the `msgstr` line contains the translated text.

With every update to text within the code / rendered in the UI, the .pot file needs to be regenerated. Which is pretty wild to consider the amount of text on GitLab. You can read more about GitLab's internationalization [here](https://docs.gitlab.com/ee/development/i18n/externalization.html#javascript-files)
