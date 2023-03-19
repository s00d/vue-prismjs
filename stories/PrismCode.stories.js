import Prismjs from '../src/Prismjs.vue'

export default {
    title: 'Prismjs',
    component: Prismjs,
    argTypes: {
        language: {
            control: {
                type: 'select',
                options: ['markup', 'css', 'clike', 'javascript']
            }
        },
        lineNumbers: {
            control: {
                type: 'boolean'
            }
        },
        code: {
            control: {
                type: 'text'
            }
        }
    }
}

const Template = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { Prismjs },
    template: '<prismjs v-bind="$props" />'
})

export const Default = Template.bind({})
Default.args = {
    code: `const greeting = 'Hello, World!'
console.log(greeting)`
}

export const WithLineNumbers = Template.bind({})
WithLineNumbers.args = {
    code: `const greeting = 'Hello, World!'
console.log(greeting)`,
    lineNumbers: true
}

export const WithoutLineNumbers = Template.bind({})
WithoutLineNumbers.args = {
    code: `const greeting = 'Hello, World!'
console.log(greeting)`,
    lineNumbers: false
}

export const JavaScript = Template.bind({})
JavaScript.args = {
    code: `const greeting = 'Hello, World!'
console.log(greeting)`,
    language: 'javascript'
}

export const CSS = Template.bind({})
CSS.args = {
    code: `body {
  background-color: #eee;
  font-family: sans-serif;
}`,
    language: 'css'
}
