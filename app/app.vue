<script setup>
// No Theme like Main Library Website
const { enabled, state } = usePreviewMode()
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
