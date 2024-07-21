<script setup>
// COMPONENTS
import { NavBreadcrumb, BannerText, FlexibleBlocks, SectionWrapper, DividerWayFinder } from 'ucla-library-website-components'

// HELPERS
import _get from 'lodash/get'
import removeTags from '../utils/removeTags'

// GQL
import ASK_US from '../gql/queries/AskUs.gql'

const { $graphql } = useNuxtApp()

const { data, error } = await useAsyncData('ask-us-list', async () => {
  const data = await $graphql.default.request(ASK_US)

  return data
})

if (error.value) {
  throw createError({
    ...error.value, statusMessage: 'Page not found.' + error.value, fatal: true
  })
}

if (!data.value.entry) {
  throw createError({ statusCode: 404, message: 'Page not found', fatal: true })
}

if (data.value.entry && import.meta.server) {
  const { $elasticsearchplugin } = useNuxtApp()
  const doc = {
    title: data.value.entry.title,
    text: data.value.entry.summary,
    uri: 'help/'
  }
  await $elasticsearchplugin.index(doc, 'ask-us')
}

const page = ref(_get(data.value, 'entry', {}))
watch(data, (newVal, oldVal) => {
  // console.log('In watch preview enabled, newVal, oldVal', newVal, oldVal)
  page.value = _get(newVal, 'entry', {})
})

useHead({
  title: page.value ? page.value.title : '... loading',
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: removeTags(page.value.text),
    },
  ],
  script: [
    {
      hid: 'libchat',
      src: 'https://ucla.libanswers.com/load_chat.php?hash=e6e621712e7b0ed0193f065d84d4e0c9',
      defer: true
    }
  ]
})

definePageMeta({
  alias: ['/help/']
})
</script>

<template lang="html">
  <main
    id="main"
    class="page page-ask-us"
  >
    <NavBreadcrumb
      to="/help/services-resources/"
      title="Ask Us"
      parent-title="Services & Resources"
    />
    <BannerText
      class="banner-text"
      :title="page.title"
      :text="page.summary"
    />
    <!-- LibChat Widget -->
    <SectionWrapper class="section-ask-us">
      <div id="libchat_e6e621712e7b0ed0193f065d84d4e0c9" />
    </SectionWrapper>

    <SectionWrapper theme="divider">
      <DividerWayFinder
        v-if="page.blocks.length > 0"
        color="help"
        class="divider-way-finder"
      />
    </SectionWrapper>

    <!-- Flexible Page Blocks -->
    <FlexibleBlocks
      class="flexible-content"
      :blocks="page.blocks"
    />
  </main>
</template>

<style lang="scss" scoped>
.page-ask-us {
  .banner-text {
    margin-bottom: var(--space-l);
  }
}
</style>
