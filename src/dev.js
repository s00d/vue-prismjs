import { createApp } from 'vue-demi'
import Prismjs from './Prismjs.vue';

const app = createApp({})

app.component('Prismjs', Prismjs)

app.mount('#app')
