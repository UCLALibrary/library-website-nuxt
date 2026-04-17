import { computed } from 'vue'
import { useGlobalStore } from '~/stores/GlobalStore'

export function useGlobalCallToAction() {
  const store = useGlobalStore()
  console.log('store.globals', JSON.stringify(store.globals))

  type CallToActionButton = { buttonText?: string; buttonUrl?: string }
  type MeapCTA = { button?: CallToActionButton[] }

  const button = computed(() => {
    const globals = store.globals as unknown
    if (!globals) return undefined

    // The global data can be either an object or an array of objects.
    // Normalize to the object that contains `meapCallToAction`.
    const globalsObj = Array.isArray(globals)
      ? globals.find((g): g is Record<string, unknown> =>
        typeof g === 'object' && g !== null && 'meapCallToAction' in g
      )
      : (globals as Record<string, unknown> | undefined)

    const meapCTA = ((globalsObj as unknown as { meapCallToAction?: unknown })?.meapCallToAction) as unknown as MeapCTA | undefined
    if (!meapCTA || typeof meapCTA !== 'object') return undefined

    const btnArr = meapCTA.button
    if (!Array.isArray(btnArr)) return undefined

    return btnArr[0]
  })

  const hasCTA = computed(() => {
    return !!button.value?.buttonText && !!button.value?.buttonUrl
  })

  const ctaText = computed(() => button.value?.buttonText || '')
  const ctaUrl = computed(() => button.value?.buttonUrl || '')

  return {
    hasCTA,
    ctaText,
    ctaUrl,
    button,
  }
}
