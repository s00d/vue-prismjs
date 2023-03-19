<template>
  <div class="prismjs">
    <button class="prismjs-copy" @click="copyCodeToClipboard">Copy</button>
    <pre class="line-numbers" :class="'language-'+language"><code :class="language">{{ highlightedCode }}</code></pre>
  </div>
</template>

<script>
import { defineComponent, ref, watch } from 'vue-demi'
import Prism from 'prismjs'

export default defineComponent({
  name: 'VuePrismjs',
  props: {
    code: {
      type: String,
      required: true
    },
    language: {
      type: String,
      default: 'javascript'
    }
  },
  setup(props) {
    const highlightedCode = ref('')

    watch(() => props.code + props.language, () => {
      if (!Prism.languages[props.language]) {
        highlightedCode.value = props.code;
      } else {
        highlightedCode.value = Prism.highlight(props.code, Prism.languages[props.language], props.language)
      }
    }, { immediate: true })

    const copyCodeToClipboard = () => {
      navigator.clipboard.writeText(props.code)
    }

    return {
      highlightedCode,
      copyCodeToClipboard
    }
  }
})
</script>

<style>
.prismjs-copy {
  position: absolute;
  top: 5px;
  right: 5px;
  z-index: 1;
  background-color: #f1f1f1;
  color: black;
  border: none;
  font-size: 16px;
  padding: 8px 12px;
  cursor: pointer;
}


pre[class*="language-"].line-numbers {
  position: relative;
  padding-left: 3.8em;
  counter-reset: linenumber;
}

pre[class*="language-"].line-numbers > code {
  position: relative;
  white-space: inherit;
}

.line-numbers .line-numbers-rows {
  position: absolute;
  pointer-events: none;
  top: 0;
  left: -3.8em;
  width: 3em; /* works for line-numbers below 1000 lines */
  letter-spacing: -1px;
  border-right: 1px solid #999;

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  font-size: 1.1em;
}

.line-numbers-rows > span {
  display: block;
  counter-increment: linenumber;
}

.line-numbers-rows > span:before {
  content: counter(linenumber);
  color: #999;
  display: block;
  padding-right: 0.8em;
  text-align: right;
}

code[class*="language-"], pre[class*="language-"] {
  color: #f8f8f2;
  background: none;
  text-shadow: 0 1px rgba(0, 0, 0, 0.3);
  font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
  font-size: 0.9em;
  text-align: left;
  white-space: pre;
  word-spacing: normal;
  word-break: normal;
  word-wrap: normal;
  -moz-tab-size: 4;
  -o-tab-size: 4;
  tab-size: 4;
  -webkit-hyphens: none;
  -moz-hyphens: none;
  -ms-hyphens: none;
  hyphens: none;
  border: 0;
}
/* Code blocks */
pre[class*="language-"] {
  padding: 1em;
  margin: 0.5em 0;
  overflow: auto;
}
:not(pre) > code[class*="language-"], pre[class*="language-"] {
  background: #001529;
}
/* Inline code */
:not(pre) > code[class*="language-"] {
  padding: 0.1em;
  white-space: normal;
}
.token.comment, .token.prolog, .token.doctype, .token.cdata {
  color: #8292a2;
}
.token.punctuation {
  color: #f8f8f2;
}
.token.namespace {
  opacity: 0.7;
}
.token.property, .token.tag, .token.constant, .token.symbol, .token.deleted {
  color: #f92672;
}
.token.boolean, .token.number {
  color: #ae81ff;
}
.token.selector, .token.attr-name, .token.string, .token.char, .token.builtin, .token.inserted {
  color: #a6e22e;
}
.token.operator, .token.entity, .token.url, .language-css .token.string, .style .token.string, .token.variable {
  color: #f8f8f2;
}
.token.atrule, .token.attr-value, .token.function, .token.class-name {
  color: #e6db74;
}
.token.keyword {
  color: #66d9ef;
}
.token.regex, .token.important {
  color: #fd971f;
}
.token.important, .token.bold {
  font-weight: bold;
}
.token.italic {
  font-style: italic;
}
.token.entity {
  cursor: help;
}
.selector {
  cursor: pointer;
}
</style>
