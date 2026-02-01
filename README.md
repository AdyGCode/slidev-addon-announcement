# Announcement - a Slidev Addon Component

A small component to add an announcement to a page.

![Visits](https://visitorbadge.vercel.app//api/badge/bac877ab-78b0-4dae-9bf2-2f53fdc0b612?style=for-the-badge&color=00ad14&labelColor=000000)

## Latest Update [![NPM version](https://img.shields.io/npm/v/slidev-addon-announcement?color=911118&label=)](https://www.npmjs.com/package/slidev-addon-announcement)

- Fix errors in `ReadMe.md`

## Installing Announcements

To add to your `Slidev` presentation use: 

```shell
pnpm i slidev-addon-announcement --save
```

Alternatively, add to the addons section in your package.json:

```
"slidev": {
    "addons": [
        "slidev-addon-announcement"
    ]
}
```

Add the following to your slides.md:

```markdown
---
addons:
  - announcement
---
```



## Using Announcement

Used in the form:

```vue
<Announcement type="TYPE_IDENTIFIER" title="OPTIONAL_TITLE" PARAMETERS >
    Just something to think about
</Announcement>
```

### Types

- Types:
    - `type="type_identifier"`
    - where `type_identifier` is one of:
        - `brainstorm`
        - `duration`
        - `idea`
        - `default`
        - `info`
        - `important`
        - `priority`
        - `warning`
        - `error`

### Parameters (`PARAMETERS`)

Replace the `PARAMETERS` with the option(s) you wish to employ.

The `PARAMETERS` are:

- `compact` or `compact="true|false"`
  - A smaller sized version 
  - **Optional**
  - **Default** `false` (also when omitted)
- `title="..."`
  - Title text (`...`) shown before the slot content 
  - **Optional**
- `inline` or `inline="true|false"`
  - Allow multiple announcements on a line
  - **Optional**
  - **Default** `false`  (also when omitted)
- `width="fit|full"`
  - Resizes the announcement to full or content width 
  - **Optional** 
  - **Default** `fit` (also when omitted)
  - Resizes to `full` width 
  - Or `fit` to content 


## Examples of Announcement Component

The variants are shown below:

### Default Note

![vivaldi_ud7iYfpT7l.png](https://github.com/AdyGCode/slidev-addon-announcement/blob/main/assets/announcement-default.png?raw=true)

```vue
<Announcement type="default" title="Default Note">
    Just something to think about
</Announcement>
```

### Idea

![vivaldi_o9dXLjuo1a.png](https://github.com/AdyGCode/slidev-addon-announcement/blob/main/assets/announcement-idea.png?raw=true)

```vue
<Announcement type="idea" title="Idea" >
    A useful idea could be identified using this variant
</Announcement>
```

### Brainstorm

![vivaldi_YItAahbh7Y.png](https://github.com/AdyGCode/slidev-addon-announcement/blob/main/assets/announcement-brainstorm.png?raw=true)

```vue
<Announcement type="brainstorm" title="Brainstorm" inline>
    Use to identify when brainstorming of ideas is an activity
</Announcement>
```

### Duration

![vivaldi_QhRet6gn7X.png](https://github.com/AdyGCode/slidev-addon-announcement/blob/main/assets/announcement-duration.png?raw=true)

```vue
<Announcement type="duration" title="Duration" >
    Use to identify how long a section could take
</Announcement>
```


### Error

![vivaldi_3mJ3v6YlCy.png](https://github.com/AdyGCode/slidev-addon-announcement/blob/main/assets/announcement-error.png?raw=true)

```vue
<Announcement type="error" title="Error" >
    Identify common errors, boo-boos and actual errors
</Announcement>
```

### Warning

![vivaldi_rVNJT6RFoH.png](https://github.com/AdyGCode/slidev-addon-announcement/blob/main/assets/announcement-warning.png?raw=true)

```vue
<Announcement type="warning" >
    Warn when an action could be dangerous, or should carefully be completed
</Announcement>
```

### Information

![vivaldi_nSxFPsnSoG.png](https://github.com/AdyGCode/slidev-addon-announcement/blob/main/assets/announcement-information.png?raw=true)

```vue
<Announcement type="info" >
    Information that could be useful for the current section
</Announcement>
```

### Important

![vivaldi_EDp0SqaIXh.png](https://github.com/AdyGCode/slidev-addon-announcement/blob/main/assets/announcement-important.png?raw=true)

```vue
<Announcement type="important" title="Important">
    When it is really important to complete an action
</Announcement>
```

### Priority

![vivaldi_fyGBubZXgz.png](https://github.com/AdyGCode/slidev-addon-announcement/blob/main/assets/announcement-priority.png?raw=true)

```vue
<Announcement type="priority" compact width="full">
    Do or Read this before you do anything else
</Announcement>
```

### Overriding icons

![vivaldi_6HFCXMNsjS.png](https://github.com/AdyGCode/slidev-addon-announcement/blob/main/assets/announcement-custom-icon.png?raw=true)

```vue
<Announcement type="info" title="Heads up">
    Custom icon via slot
    <template #icon>
        <i class="i-fa7-solid-user-ninja h-5 w-5 mt-0.5"></i>
    </template>
</Announcement>
```

## Requirements

Following packages are required for use:

- 'unocss'
- '@iconify-json/fa7-brands'
- '@iconify-json/fa7-regular'
- '@iconify-json/fa7-solid'
- '@unocss/preset-icons'

You may manually install these using:

### npm
```shell
npm i -D @unocss/preset-icons unocss
npm i -D @iconify-json/fa7-brands @iconify-json/fa7-regular 
npm i -D @iconify-json/fa7-solid
```

### pnpm
```shell
pnpm i -D @unocss/preset-icons unocss
pnpm i -D @iconify-json/fa7-brands @iconify-json/fa7-regular 
pnpm i -D @iconify-json/fa7-solid 
```

Learn more about Slidev at the [documentation](https://sli.dev/).
