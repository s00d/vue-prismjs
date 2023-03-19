# vue-prismjs

![mobile image](https://raw.githubusercontent.com/s00d/vue-prismjs/main/img/img.png)

Vue component for formatting code using Prism.js

## Installation

```
npm install vue-prismjs
```

## Usage

In your component:

```vue
<template>
  <prismjs language="javascript">
    // your code here
  </prismjs>
</template>

<script>
import Prismjs from 'vue-prismjs'

export default {
  components: {
    Prismjs
  }
}
</script>
```

In your `main.js` file:

```js
import Prismjs from './Prismjs.vue';

// ...

app.component('Prismjs', Prismjs)
// ...
```

## Props

- `language` (required): The language to use for syntax highlighting. You can find a list of supported languages [here](https://prismjs.com/#supported-languages).
- `code` (required): Code string.

## Supported Vue Versions

- Vue 2.x
- Vue 3.x (using `vue-demi`)

## Development

### Install Dependencies

```bash
npm install
```

### Build for Production

```bash
npm run build
```

### Watch for Changes

```bash
npm run watch
```

### Run Tests

```bash
npm test
```

### Run Storybook

```bash
npm run storybook
```
