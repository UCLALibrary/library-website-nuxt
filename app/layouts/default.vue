<script setup>
// components need to be imported for nitro crawling in static mode
// //  import { HeaderSmart, SectionWrapper, NavPrimary, SiteNotificationAlert, FooterPrimary, FooterSock } from '@ucla-library-monorepo/ucla-library-website-components'

provide('theme', computed(() => ''))

useHead({
  titleTemplate: title =>
    title === 'Homepage' ? 'UCLA Library' : `${title || 'Error'}` + ' | UCLA Library',
  script: [
    {
      hid: 'libanswers',
      src: 'https://ucla.libanswers.com/load_chat.php?hash=5a44dfe7cc29aaee5bba635ab13fa753',
      defer: true
    },
  ]
})
const { enabled, state } = usePreviewMode()

const globalStore = useGlobalStore()
// ✅ Fetch + hydrate Pinia (SSR + client)
useHydrateGlobalStore()

// console.log('In default layout:', globalStore.header)
const libraryAlert = computed(() => {
  /* console.log(
    'in library alert computed property',
    globalStore.header,
  ) */
  if (globalStore.globals) {
    const alert = globalStore.globals?.libraryAlert
    if (
      alert
      && alert.title
      && alert.title.length > 0
      && alert.text
      && alert.text.length > 0
    )
      return alert
    else
      return null
  }
})


const classes = computed(() => [
  'layout',
  'layout-default',
])

const { $alerts } = useNuxtApp()

onMounted(async () => {
  console.log('In default layout', enabled.value, state?.token)
  await $alerts()
})
</script>

<template>
  <div :class="classes">
    <HeaderSmart v-if="globalStore.header && !$route.path.includes('/impact/')" />
    <SectionWrapper
      v-if="!$route.path.includes('/impact/')"
      class="
      section-alert"
      theme="divider"
    >
      <site-notification-alert
        v-if="
          libraryAlert"
        class="library-alert"
        v-bind="libraryAlert"
      />
    </SectionWrapper>
    <nav-primary
      v-if="globalStore.header && $route.path.includes('/impact/')"
      class="primary"
    />
    <slot />

    <footer>
      <FooterPrimary
        v-if="globalStore.footerPrimary && !$route.path.includes('/impact/')"
        :form="true"
      />
      <FooterPrimary
        v-if="globalStore.footerPrimary && $route.path.includes('/impact/')"
        :form="false"
      />
      <FooterSock v-if="globalStore.footerSock && !$route.path.includes('/impact/')" />
    </footer>
    <div
      v-if="!$route.path.includes('/impact/')"
      id="libchat_5a44dfe7cc29aaee5bba635ab13fa753"
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
