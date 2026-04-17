export default defineNuxtRouteMiddleware(() => {
  console.log('clear-error-global middleware running')
  const err = useError()
  if (import.meta.client && err.value) {
    clearError()
  }
})
