<script setup>
// No Theme like Main Library Website
const { enabled, state } = usePreviewMode()
</script>
<template>
  <div>
    <NuxtLoadingIndicator
      color="#ffe800"
      height="3"
    />
    <!--VueSkipTo
      to="#main"
      label="Skip to main content"
    /-->
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
