import { mount } from '@vue/test-utils'
import Prismjs from '@/components/Prismjs.vue'

describe('Prismjs', () => {
    it('renders a code block with the correct language class', () => {
        const wrapper = mount(Prismjs, {
            propsData: {
                code: 'const foo = "bar"',
                language: 'javascript'
            }
        })

        const codeElement = wrapper.find('.language-javascript')
        expect(codeElement.exists()).toBe(true)
        expect(codeElement.text()).toBe('const foo = "bar"')
    })

    it('renders a code block without line numbers', () => {
        const wrapper = mount(Prismjs, {
            propsData: {
                code: 'const foo = "bar"',
                language: 'javascript',
                lineNumbers: false
            }
        })

        const lineNumberElement = wrapper.find('.line-numbers')
        expect(lineNumberElement.exists()).toBe(false)
    })

    it('renders a code block with line numbers', () => {
        const wrapper = mount(Prismjs, {
            propsData: {
                code: 'const foo = "bar"\nconst baz = "qux"',
                language: 'javascript',
                lineNumbers: true
            }
        })

        const lineNumberElement = wrapper.find('.line-numbers')
        expect(lineNumberElement.exists()).toBe(true)
        expect(lineNumberElement.text()).toBe('1\n2')
    })
})
