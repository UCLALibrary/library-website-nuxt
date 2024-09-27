<script setup>
// components need to be imported for nitro crawling in static mode
import { HeaderSmart, SectionWrapper, SiteNotificationAlert, FooterPrimary, FooterSock } from 'ucla-library-website-components'

provide('theme', computed(() => ''))
const shouldIncludeExtraScript = computed(() => {
  if (useRuntimeConfig().public.hostName.includes('stage'))
    return true
  return false
})
const shouldIncludeProductionScript = computed(() => {
  if (!useRuntimeConfig().public.hostName.includes('stage') && !useRuntimeConfig().public.hostName.includes('test'))
    return true
  return false
})

useHead({
  titleTemplate: title =>
    title === 'Homepage' ? 'UCLA Library' : `${title || 'Error'}` + ' | UCLA Library',
  script: [
    {
      hid: 'libanswers',
      src: 'https://ucla.libanswers.com/load_chat.php?hash=5a44dfe7cc29aaee5bba635ab13fa753',
      defer: true
    },
    ...(shouldIncludeExtraScript.value
      ? [{
          hid: 'gsurvey',
          src: 'https://test-librarystudy.library.ucla.edu/gsurvey.js',
          defer: true
        }
        ]
      : []),
    ...(shouldIncludeProductionScript.value
      ? [{
          hid: 'gsurvey',
          src: 'https://librarystudy.library.ucla.edu/gsurvey.js',
          defer: true
        }
        ]
      : [])
  ]
})
const { enabled, state } = usePreviewMode()
const layoutCustomProps = useAttrs()
const globalStore = useGlobalStore()
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
const { header, footerPrimary, footerSock, setLayoutData } = useLayoutState()
setLayoutData(globalStore)

const classes = computed(() => [
  'layout',
  'layout-default',
])
// on mounted I want to want to check if visiblity change event is triggered and use $fetch or $graghql to fetch data from api
// I want to use this data to update the global store
// const { $graphql } = useNuxtApp()
const { $alerts } = useNuxtApp()
const { $layoutData } = useNuxtApp()
watch(globalStore.header, (newVal, oldVal) => {
  console.log('Global store changed for draft previews', newVal, oldVal)
})

onMounted(async () => {
  console.log('In default layout', enabled.value, state?.token)
  /* document.addEventListener('visibilitychange', async () => {
    if (document.visibilityState === 'visible') {
      const data = await $graphql.default.request(Globals)

      console.log('Pinia store Global Data object:' + JSON.stringify(data.value))
      if (data.value) {
        const globalData = removeEmpties(data.value?.globalSets || [])
        // console.log("remove empties: " + JSON.stringify(globalData))
        // Shape data from Craft
        const craftData = Object.fromEntries(
          globalData?.map(item => [item.handle, item])
        )
        globalStore.globals = craftData
      }
    }
  }) */

  if (process.env.NODE_ENV !== 'development' && layoutCustomProps['is-error']) {
    console.log('In SSG refresh layout data as state is not maintained after an error response')
    await $layoutData()
  }
  await $alerts()
})
</script>

<template>
  <div :class="classes">
    <HeaderSmart v-if="header && !$route.path.includes('/impact/')" />
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
      v-if="header && $route.path.includes('/impact/')"
      class="primary"
    />
    <slot />

    <footer>
      <FooterPrimary
        v-if="footerPrimary && !$route.path.includes('/impact/')"
        :form="true"
      />
      <FooterPrimary
        v-if="footerPrimary && $route.path.includes('/impact/')"
        :form="false"
      />
      <FooterSock v-if="footerSock && !$route.path.includes('/impact/')" />
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
