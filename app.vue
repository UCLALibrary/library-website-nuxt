<script setup>
import { provideTheme } from '@/composables/provideTheme'
provideTheme()
const { enabled, state } = usePreviewMode()
const globalStore = useGlobalStore()

const hasScrolled = ref(false)
const hasScrolledPastHeader = ref(false)
const classes = computed(() => [
  { 'has-scrolled': hasScrolled.value },
  { 'has-scrolled-past-header': hasScrolledPastHeader.value }
])
const { $hasScrolled, $hasScrolledPastHeader } = useNuxtApp()
onMounted(() => {
  console.log('Apps.vue, did this solve the hydration errors')
  hasScrolled.value = $hasScrolled()
  hasScrolledPastHeader.value = $hasScrolledPastHeader()
})
</script>
<template>
  <div :class="classes">
    <NuxtLoadingIndicator
      color="#ffe800"
      :height="3"
    />
    <vue-skip-to
      to="#main"
      label="Skip to main content"
    />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
