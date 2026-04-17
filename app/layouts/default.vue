<script setup>

const globalStore = useGlobalStore()
// ✅ Fetch + hydrate Pinia (SSR + client)
useHydrateGlobalStore()

// ✅ Safe defaults so layout doesn't crash while data is loading
const primaryMenuItems = computed(() => (globalStore.header && globalStore.header.primary) ? globalStore.header.primary : [])
const secondaryMenuItems = computed(() => (globalStore.header && globalStore.header.secondary) ? globalStore.header.secondary : [])

// Your existing mobile logic, guarded
const isMobile = computed(() => (globalStore.winWidth || 0) <= 1024)

const classes = computed(() => {
  return [
    'layout',
    'layout-default',
    { 'has-scrolled': globalStore.sTop },
    { 'has-scrolled-past-header': globalStore.sTop >= 150 },
  ]
})

</script>
<template lang="html">
  <div :class="classes">
    <header
      v-show="!isMobile"
      class="header-main"
    >
      <site-brand-bar class="brand-bar" />
      <nav-secondary
        :items="secondaryMenuItems"
        :is-microsite="true"
      />

      <nav-primary
        :items="primaryMenuItems"
        class="primary"
        title="Modern Endangered Archives Program"
        acronym="MEAP"
      />
    </header>

    <header v-show="isMobile">
      <site-brand-bar class="brand-bar" />
      <header-main-responsive
        :primary-nav="primaryMenuItems"
        :secondary-nav="secondaryMenuItems"
        current-path="/about/foo/bar"
        title="Modern Endangered Archives Program"
        acronym="MEAP"
      />
    </header>

    <div class="layout-content">
      <slot />
    </div>

    <footer-main />
  </div>
</template>
<style lang="scss" scoped>
.layout-default {
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-content: center;
  align-items: center;

  :deep(>*) {
    width: 100%;
  }

  :deep(.more-menu .search-button) {
    display: none
  }

  flex: 1 1 auto;

  // TODO add prop to show or hide the search dropdown or button for mobile view instead of meap theme
  :deep(.nav-secondary .search-dropdown) {
    display: none;
  }

}

.layout-content {
  flex: 1 1 auto;
  /* ✅ this pushes the footer down */
  width: 100%;
}

.vue-skip-to {
  z-index: 300;
}

.header-main {
  z-index: 200;

  position: relative;
  height: 168px;

  .primary {
    position: absolute;
  }

  // TODO nav on smaller viewports
}

@media #{$small} {
  :deep(.more-menu .search-button) {
    display: none
  }
}
</style>
