---
title: "Notes on my first GitLab contribution"
# subtitle: "The smallest issues like updating characters in a link can be complicated"
date: "2023-08-30"
# tags:
#   - gitlab
#   - frontend
#   - coding
#   - javascript
#   - opensource
---

The smallest issues, such as updating one character in an anchor tag, can be more complex than one would think!

My first contribution to the GitLab project tackled: [Move Full stop out of "Learn More."](https://gitlab.com/gitlab-org/gitlab/-/issues/414677)

### Getting started

First steps - get the GitLab Development Kit running locally and find where the component is rendered. Easier said than done!

Installing the GDK had an unexpected side effect on my machine (I no longer was able to run Node), which was a fun debugging exercise😅.

Once I had the GDK up and running, navigating the codebase was a quite daunting task. It is HUGE and is overwhelming if you've never seen it before. However, I was able to navigate to where I expected my 'Learn More.' link to be rendered. This is where I encountered the first problem - where I was expecting to find Vulnerability Report in the Security dropdown.

GitLab has many avenues for community contributors to ask questions, so after reading the docs, I took my question to the Discord.

I was fairly certain I had to enable the feature flag as documented in this section: [https://docs.gitlab.com/ee/user/permissions.html#custom-roles](https://docs.gitlab.com/ee/user/permissions.html#custom-roles).

I was on the right track, the GDK is similar to self-managed Gitlab and I needed to add a licence to my instance of the GDK.

I followed the steps documented [here](https://gitlab.com/gitlab-org/gitlab-development-kit/blob/main/doc/index.md#configure-developer-license-in-gdk) and [here](https://docs.gitlab.com/ee/administration/license_file.html), ran `gdk restart`, and violá, the vulnerability report appeared in my GDK.

### Making the change

On to the update itself! In "ee/app/assets/javascripts/security_dashboard/components/shared/ vulnerability_report/vulnerability_report_header.vue", I updated

```js
%{linkStart}Learn more%.{linkEnd}
```

to

```js
%{linkStart}Learn more%{linkEnd}.
```

However, in the DOM the component now renders with the '.' interpolated into it's own string:

```js
<a
  href="/help/user/application_security/vulnerability_report/index"
  rel="noopener"
  target="_blank"
  class="gl-link"
>
  Learn more
</a>;
(".");
```

Rendering:

> Learn more .

Not what we're looking for!

### Fixing the extra space

Removing the extra space took a little trial and error plus assistance from the GitLab team. For some reason, line breaks in the code editor affects how the component is rendered.

First off, I had:

```js
<template #link="{ content }">
          <gl-link
          :href="$options.DOC_PATH_VULNERABILITY_REPORT"
          target="_blank"
          >{{ content }}</gl-link
          >
          </template>
```

Updating to:

```js
<template #link="{ content }">
<gl-link :href="$options.DOC_PATH_VULNERABILITY_REPORT" target="_blank">{{
            content
          }}</gl-link>
        </template>
```

Fixed the issue! Now we have a correctly rendered link:

> Learn more.

### Creating the merge request

Once the change has been made, the next step is to create a merge request so your code can be reviewed by the GitLab team!

Merge requests include:

- A description of the request.
- Code changes and inline code reviews.
- Information about CI/CD pipelines.
- A comment section for discussion threads.
- The list of commits.

GitLab has extensive documentation on creating a merge request [here](https://docs.gitlab.com/ee/user/project/merge_requests/creating_merge_requests.html). My takeaway was to always have the [commit template](https://docs.gitlab.com/ee/user/project/merge_requests/commit_templates.html) open and be careful to adhere to their guidelines, or your merge request will fail😢.

That's a wrap! I learned so much from something as small as making a character edit in an anchor tag.
