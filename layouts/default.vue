<script setup>
// components need to be imported for nitro crawling in static mode
import { HeaderSmart, SectionWrapper, SiteNotificationAlert, FooterPrimary, FooterSock } from 'ucla-library-website-components'
import { onMounted } from 'vue'

useHead({
  titleTemplate: title =>
    title === 'Homepage' ? 'UCLA Library' : `${title}` + ' | UCLA Library',
  script: [
    {
      hid: 'libanswers',
      src: 'https://ucla.libanswers.com/load_chat.php?hash=5a44dfe7cc29aaee5bba635ab13fa753',
      defer: true
    }
  ]
})

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
const hasScrolled = ref(false)
const hasScrolledPastHeader = ref(false)


const classes = computed(() => [
  'layout',
  'layout-default',
  { 'has-scrolled': hasScrolled.value },
  { 'has-scrolled-past-header': hasScrolledPastHeader.value }
])
// on mounted I want to want to check if visiblity change event is triggered and use $fetch or $graghql to fetch data from api
// I want to use this data to update the global store
// const { $graphql } = useNuxtApp()
const { $alerts } = useNuxtApp()
const { $hasScrolled, $hasScrolledPastHeader } = useNuxtApp()

onMounted(async () => {
  // console.log('onMounted in Default layout')
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
  console.log('Apps.vue, did this solve the hydration errors')
  hasScrolled.value = $hasScrolled()
  hasScrolledPastHeader.value = $hasScrolledPastHeader()
  await $alerts()
})
</script>

<template>
  <div :class="classes">
    <HeaderSmart v-if="globalStore.header" />
    <SectionWrapper
      class="section-alert"
      theme="divider"
    >
      <site-notification-alert
        v-if="libraryAlert"
        class="library-alert"
        v-bind="libraryAlert"
      />
    </SectionWrapper>

    <slot />

    <footer>
      <FooterPrimary
        v-if="globalStore.footerPrimary"
        :form="true"
      />
      <FooterSock v-if="globalStore.footerSock" />
    </footer>
    <div id="libchat_5a44dfe7cc29aaee5bba635ab13fa753" />
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
