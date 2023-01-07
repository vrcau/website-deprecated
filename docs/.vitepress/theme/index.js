import DefaultTheme from 'vitepress/theme'
import './theme.css'

export default {
    ...DefaultTheme,
    enhanceApp(ctx) {
        // extend default theme custom behaviour.
        DefaultTheme.enhanceApp(ctx)
    }
}