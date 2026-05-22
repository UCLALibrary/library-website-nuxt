<script setup>
// No Theme like Main Library Website
const { enabled, state } = usePreviewMode()

// set title
useHead({
  titleTemplate: (titleChunk) => {
    // If undefined or blank then we don't need the pipe and space
    return titleChunk === 'Homepage'
      ? 'Modern Endangered Archives Program '
      : `${titleChunk || 'Error'}  | Modern Endangered Archives Program `
  },
  htmlAttrs: {
    lang: 'en',
  },
  meta: [
    { charset: 'utf-8' },
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1.0, minimum-scale=1.0',
    },
  ],
  link: [
    { rel: 'icon', type: 'image/svg', href: '/icon-ucla-favicon.svg' },
  ],
})
</script>

<template>
  <div>
    <NuxtLoadingIndicator
      color="#ffe800"
      height=3
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

<style lang="scss" scoped>
.vue-skip-to {
  z-index: 300;
}
</style>
