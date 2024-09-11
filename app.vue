<script setup>
import { useLayoutState } from './composables/useLayoutState'

provide('theme', computed(() => ''))
const { enabled, state } = usePreviewMode()
// console.log('App.vue', enabled.value, state.token)
const route = useRoute()

const globalStore = useGlobalStore()
const { header, footerPrimary, footerSock, setLayoutData } = useLayoutState()
setLayoutData(globalStore)

const classes = ref(['layout',
  'layout-default'])

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

// on mounted I want to want to check if visiblity change event is triggered and use $fetch or $graghql to fetch data from api
// I want to use this data to update the global store
// const { $graphql } = useNuxtApp()
const { $alerts } = useNuxtApp()
const { $layoutData } = useNuxtApp()
watch(globalStore.header, (newVal, oldVal) => {
  console.log('Global store changed for draft previews', newVal, oldVal)
})

onMounted(async () => {
  // globalstore state is lost due to 404 error for draft previews, this is hack to repopulate state on client side
  console.log('No layout query', route.query, 'preview enabled', enabled.value, 'state?.token', state?.token)
  if (process.env.NODE_ENV !== 'development' && (route.query?.preview === 'true' || enabled.value) && (route.query?.token !== undefined || state?.token !== undefined)) {
    await $layoutData()
  }
  classes.value.push({ 'has-scrolled': globalStore.sTop })
  classes.value.push({ 'has-scrolled-past-header': globalStore.sTop >= 150 })
  await $alerts()
})

const shouldIncludeExtraScript = computed(() => {
  if (useRuntimeConfig().public.hostName.indexOf('stage') > 0)
    return true
  return false
})
useHead({
  titleTemplate: title =>
    title === 'Homepage' ? 'UCLA Library' : `${title}` + ' | UCLA Library',
  script: [
    {
      hid: 'libanswers',
      src: 'https://ucla.libanswers.com/load_chat.php?hash=5a44dfe7cc29aaee5bba635ab13fa753',
      defer: true
    },
    ...(shouldIncludeExtraScript.value ? [{
      hid: 'gsurvey',
      src: 'https://test-librarystudy.library.ucla.edu/gsurvey.js',
      defer: true
    }
    ] : [])
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
      <NuxtPage />

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
    <!--NuxtLayout>
      <NuxtPage />
    </NuxtLayout-->
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
