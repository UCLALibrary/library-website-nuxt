<script setup>
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

const libraryAlert = computed(() => {
  /* console.log(
    'in library alert computed property',
    globalStore.header,
  ) */
  if (globalStore.globals) {
    const alert = globalStore.globals.libraryAlert
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
  { 'has-scrolled': globalStore.sTop },
  { 'has-scrolled-past-header': globalStore.sTop >= 150 }
])
</script>

<template>
  <div :class="classes">
    <!-- VueSkipTo to="#main" label="Skip to main content" / -->
    <!-- this is not working in static build -->
    <header-smart />

    <section-wrapper class="section-alert" theme="divider">
      <site-notification-alert v-if="libraryAlert" class="library-alert" v-bind="libraryAlert" />
    </section-wrapper>

    <slot />

    <footer>
      <footer-primary :form="true" />
      <footer-sock />
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

  >* {
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

  flex: 1 1 auto;
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
