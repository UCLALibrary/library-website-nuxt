<script setup>
//  import { HeaderSmart, SectionWrapper, NavPrimary, SiteNotificationAlert, FooterPrimary, FooterSock } from '@ucla-library-monorepo/ucla-library-website-components'
//  import { useLayoutState } from './composables/useLayoutState'

provide('theme', computed(() => ''))
const { enabled, state } = usePreviewMode()
// console.log('App.vue', enabled.value, state.token)

useHead({
  titleTemplate: title =>
    title === 'Homepage' ? 'UCLA Library' : `${title}` + ' | UCLA Library',
  script: [
    {
      hid: 'libanswers',
      src: 'https://ucla.libanswers.com/load_chat.php?hash=5a44dfe7cc29aaee5bba635ab13fa753',
      defer: true
    },
  ]
})
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

<style lang="scss" scoped>
.layout-default {
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  flex: 1 1 auto;

  :deep(>*) {
    width: 100%;
  }

  .section-alert {
    height: 0;
    position: relative;

    .library-alert {
      position: absolute;
      z-index: 100;
      top: 32px;
      right: var(--unit-gutter);
    }
  }
}

.vue-skip-to {
  z-index: 300;
}

.skip-link {
  position: absolute;
  transform: translateY(-100%);
  display: inline-block;
  background: var(--color-primary-yellow-01);
  color: var(--color-black);
  @include step-0;
  padding: 4px 16px;
  transition: transform 0.3s;
  width: auto;
  left: 0;
}

.skip-link:focus {
  transform: translateY(0%);
}
</style>
