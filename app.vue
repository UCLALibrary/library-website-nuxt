<script setup>
provide('theme', '')
const { enabled, state } = usePreviewMode()
const globalStore = useGlobalStore()

</script>
<template>
  <div>
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
