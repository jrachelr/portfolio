---
title: "Updating an Anchor tag on GitLab"
# subtitle: "The smallest issues like updating characters in a link can be complicated"
date: "2023-08-30"
# tags:
#   - gitlab
#   - frontend
#   - coding
#   - javascript
#   - opensource
---

## Move Full stop out of "Learn More."

### Issue: https://gitlab.com/gitlab-org/gitlab/-/issues/414677

First steps - get GDK running locally and find where the component is rendered. This is where I encountered the first problem - where I was expecting to find Vulnerability Report in the Security dropdown.

Posted this question in the community Discord:

> hello - I am working on issue #414677. I'm trying to find where this component is rendered however I can't see Vulnerabilty report under the Secure dropdown in a project in the GDK, although it shows on Gitlab.com. I took a look at the docs and I believe I should have permission as I'm an owner of the projects on the GDK, however, I'm not sure if I need to enable the feature flag as documented in this section: [https://docs.gitlab.com/ee/user/permissions.html#custom-roles](https://docs.gitlab.com/ee/user/permissions.html#custom-roles "https://docs.gitlab.com/ee/user/permissions.html#custom-roles"). Is the GDK self-managed Gitlab?

I was on the right track, the GDK is similar to self-managed Gitlab and I needed to add a licence to my instance of the GDK.

I followed the steps documented ([here] https://gitlab.com/gitlab-org/gitlab-development-kit/blob/main/doc/index.md#configure-developer-license-in-gdk) and ([here]https://docs.gitlab.com/ee/administration/license_file.html), ran `gdk restart`, now I can see where the component is rendered.

Updated `%{linkStart}Learn more%.{linkEnd}` to `%{linkStart}Learn more%{linkEnd}.` However, in the DOM the component now renders with the '.' interpolated into it's own string:

```<a href="/help/user/application_security/vulnerability_report/index" rel="noopener" target="_blank" class="gl-link">
          Learn more
        </a>
        "."
```

Rendering:

> Learn more .

In addition, this string is the key of and `s__` value in an `i18n` dictionary, meaning this is used for translation into multiple languages in internationalisation.

The .pot file referring to this phrase differs - is this an issue? Documentation on languages: https://docs.gitlab.com/ee/development/i18n/externalization.html#javascript-files
