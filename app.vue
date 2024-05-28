<script setup>
const { enabled, state } = usePreviewMode()
</script>
<template>
  <div>
    <NuxtLoadingIndicator
      color="#ffe800"
      height="3"
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
