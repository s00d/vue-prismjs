# vue-prismjs

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
import 'vue-prismjs/dist/vue-prismjs.css'

// ...
```

## Props

- `language` (required): The language to use for syntax highlighting. You can find a list of supported languages [here](https://prismjs.com/#supported-languages).
- `plugins`: An array of Prism.js plugins to use. You can find a list of available plugins [here](https://prismjs.com/plugins/).
- `line-numbers`: If set to `true`, line numbers will be displayed.
- `copy-button`: If set to `true`, a button to copy the code block to the clipboard will be displayed.

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
