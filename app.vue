<script setup>
const { enabled, state } = usePreviewMode()
</script>
<template>
  <div>
    <NuxtLoadingIndicator
      color="#ffe800"
      height="3"
    />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
