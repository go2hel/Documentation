import DefaultTheme from 'vitepress/theme'
import './styles.css'
import { h } from 'vue'
import BlogHeader from './BlogHeader.vue'
import HomeCards from './components/HomeCards.vue'

export default {
    extends: DefaultTheme,
    Layout() {
        return h(DefaultTheme.Layout, null, {
            'doc-before': () => h(BlogHeader)
        })
    },
    enhanceApp({ app }) {
        app.component('HomeCards', HomeCards)
    }
}