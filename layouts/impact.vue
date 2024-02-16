<script setup>
// MOCK DATA
import * as MOCK_API from '~/data/impact-social-media.json'

const footerPrimaryItems = [...MOCK_API.shortLinks]
const parsedItems = computed(() => {
  // Restructuring item to support text key
  return footerPrimaryItems.map((obj) => {
    return {
      ...obj,
      text: obj.name,
    }
  })
})
const pressItems = [{ ...MOCK_API.links[0] }]
const parsedPressItems = computed(() => {
  // Restructuring item to support text key
  return pressItems.map((obj) => {
    return {
      ...obj,
      text: obj.name,
    }
  })
})
const globalStore = useGlobalStore()

const classes = computed(() => [
  'layout',
  'layout-default',
  { 'has-scrolled': globalStore.sTop },
  { 'has-scrolled-past-header': globalStore.sTop >= 150 }
])

useHead({
  titleTemplate: '%s | UCLA Library'
})
</script>

<template>
  <div :class="classes">
    <nav-primary class="primary" />

    <slot />

    <footer-primary
      :social-items="parsedItems"
      :press-items="parsedPressItems"
      :form="false"
    />
  </div>
</template>

<style lang="scss" scoped>
.layout-default {
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-content: center;
  align-items: center;

  >* {
    width: 100%;
  }

  .page {
    flex: 1 1 auto;
  }
}
</style>
