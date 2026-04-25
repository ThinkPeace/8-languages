import { watch } from 'vue'
import { useRoute } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './custom.css'

export default {
  extends: DefaultTheme,
  setup() {
    const route = useRoute()
    watch(
      () => route.path,
      (path) => {
        if (typeof document === 'undefined') return
        const isHome = path === '/' || path === '/index'
        document.documentElement.classList.toggle('is-home', isHome)
      },
      { immediate: true }
    )
  },
}
