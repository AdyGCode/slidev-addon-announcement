---
theme: default
background: #030306
title: "Slidev Addon - Announcement"
class: text-left
transition: slide-left

---

# Welcome to Slidev

Presentation slides for developers

<div @click="$slidev.nav.next" class="mt-12 py-1" hover:bg="white op-10">
  Press Space for next page <carbon:arrow-right />
</div>

<div class="abs-br m-6 text-xl">
  <button @click="$slidev.nav.openInEditor()" title="Open in Editor" class="slidev-icon-btn">
    <carbon:edit />
  </button>
  <a href="https://github.com/slidevjs/slidev" target="_blank" class="slidev-icon-btn">
    <carbon:logo-github />
  </a>
</div>

<!--
The last comment block of each slide will be treated as slide notes. It will be visible and editable in Presenter Mode along with the slide. [Read more in the docs](https://sli.dev/guide/syntax.html#notes)
-->

---
transition: fade-out
---

# Announcement Addon

A small component to add an announcement to a page.

<Announcement type="default" title="Default Note" inline>
    Just something to think about
</Announcement>

<Announcement type="idea" title="Idea" inline>
    Propose an idea
</Announcement>

<Announcement type="brainstorm" title="Brainstorm" inline>
    We need ideas
</Announcement>

<Announcement type="error" title="Error" inline>
    Danger or probable BOO-BOO
</Announcement>

<Announcement type="warning" inline>
    When errors MAY happen
</Announcement>

<Announcement type="info" inline>
    Sidebar information
</Announcement>

<Announcement type="duration" title="Duration" inline>
    How long it takes
</Announcement>

<Announcement type="important" title="Important">
Bring attention to an item
</Announcement>

<Announcement type="priority" compact width=full>
Do this first
</Announcement>

<Announcement type="info" title="Heads up">
    Custom icon via slot
    <template #icon>
        <i class="i-fa7-solid-user-ninja h-5 w-5 mt-0.5"></i>
    </template>
</Announcement>

---

# Announcement Usage

### Default Note

```vue
<Announcement type="default" title="Default Note">
    Just something to think about
</Announcement>
```

<Announcement type="default" title="Default Note">
    Just something to think about
</Announcement>

### Idea

```vue
<Announcement type="idea" title="Idea" >
    A useful idea could be identified using this variant
</Announcement>
```

<Announcement type="idea" title="Idea" >
    A useful idea could be identified using this variant
</Announcement>

---

# Announcement Usage II

### Brainstorm

```vue
<Announcement type="brainstorm" title="Brainstorm" inline>
    Ue to identify when brainstorming of ideas is an activity
</Announcement>
```

<Announcement type="brainstorm" title="Brainstorm" inline>
    Ue to identify when brainstorming of ideas is an activity
</Announcement>

### Duration

```vue
<Announcement type="duration" title="Duration" >
    Use to identify how long a section could take
</Announcement>
```

<Announcement type="duration" title="Duration" >
    Use to identify how long a section could take
</Announcement>


---

# Announcement Usage III

### Error

```vue
<Announcement type="error" title="Error" >
    Identify common errors, boo-boos and actual errors
</Announcement>
```

<Announcement type="error" title="Error" >
    Identify common errors, boo-boos and actual errors
</Announcement>

### Warning

```vue
<Announcement type="warning" >
    Warn when an action could be dangerous, or should carefully be completed
</Announcement>
```

<Announcement type="warning" >
    Warn when an action could be dangerous, or should carefully be completed
</Announcement>


---

# Announcement Usage IV

### Information

```vue
<Announcement type="info" >
    Information that could be useful for the current section
</Announcement>
```

<Announcement type="info" >
    Information that could be useful for the current section
</Announcement>


### Important

```vue
<Announcement type="important" title="Important">
    When it is really important to complete an action
</Announcement>
```

<Announcement type="important" title="Important">
    When it is really important to complete an action
</Announcement>

---

# Announcement Usage V

### Priority

```vue
<Announcement type="priority" compact>
    Do or Read this before you do anything else
</Announcement>
```

<Announcement type="priority" compact>
    Do or Read this before you do anything else
</Announcement>

### Overriding icons

```vue
<Announcement type="info" title="Heads up">
    Custom icon via slot
    <template #icon>
      <i class="i-fa7-solid-user-ninja h-5 w-5 mt-0.5"></i>
    </template>
</Announcement>
```

<Announcement type="info" title="Heads up">
    Custom icon via slot
    <template #icon>
        <i class="i-fa7-solid-user-ninja h-5 w-5 mt-0.5"></i>
    </template>
</Announcement>


---
layout: center
class: text-center
---

# Learn More

[Documentation](https://sli.dev) · [GitHub](https://github.com/slidevjs/slidev) · [Showcases](https://sli.dev/resources/showcases)

<PoweredBySlidev mt-10 />
