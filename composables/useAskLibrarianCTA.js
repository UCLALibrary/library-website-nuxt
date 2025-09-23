export function useAskALibrarianCTA() {
  const store = useGlobalStore()

  const button = computed(() => store.globals?.askALibrarian?.buttonUrl?.[0])

  const hasCTA = computed(() => {
    return !!button.value?.buttonText && !!button.value?.buttonUrl
  })

  const ctaText = computed(() => button.value?.buttonText || '')
  const ctaUrl  = computed(() => button.value?.buttonUrl  || '')

  return {
    hasCTA,
    ctaText,
    ctaUrl,
    button,
  }
}
