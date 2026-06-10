import VueSkipTo from '@vue-a11y/skip-to'
import '@vue-a11y/skip-to/dist/style.css'

export default defineNuxtPlugin((nuxtApp) => {
  // Make plugin available throughout app
  nuxtApp.vueApp.use(VueSkipTo)

  // Fallback to ensure SkipToLink functionality works in browsers--particularly Firefox (LADI-5193)

  if (process.client) { // Run only on client-side
    document.addEventListener('click', (e) => {
      // Identify the skip-to-link element
      const link = e.target.closest('.vue-skip-to__link')

      if (!link) return

      // Find the target element (main content) via the href attr
      const targetId = link.getAttribute('href')
      const el = document.querySelector(targetId)

      if (!el) return

      requestAnimationFrame(() => {
        // 1. Set tabindex and apply focus to the target
        el.setAttribute('tabindex', '-1')
        el.focus()

        // 2. Scroll to main content
        window.scrollTo({
          top: el.getBoundingClientRect().top + window.scrollY,
          behavior: 'auto'
        })
      })
    })
  }
})
