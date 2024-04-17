<script setup>
import { onMounted } from 'vue'

// HELPERS
import _get from 'lodash/get'

// GQL
import GENERAL_CONTENT_DETAIL from '../gql/queries/GeneralContentDetail.gql'

const { $graphql, $getHeaders } = useNuxtApp()

const route = useRoute()

const path = route.path.replace(/^\/|\/$/g, '') // trim initial and/or final slashes

const variables = { path }

const { data, error } = await useAsyncData(`general-content-${path}`, async () => {
  const data = await $graphql.default.request(GENERAL_CONTENT_DETAIL, variables)
  return data
})

if (error.value) {
  throw createError({
    ...error.value, statusMessage: 'Page not found.' + error.value, fatal: true
  })
}

if (!data.value.entry) {
  // console.log('no data')
  throw createError({
    statusCode: 404,
    statusMessage: 'Page Not Found',
    fatal: true
  })
}

if (data.value.entry.slug && process.server) {
  const { $elasticsearchplugin } = useNuxtApp()
  await $elasticsearchplugin.index(data.value.entry, path.replaceAll('/', '--'))
}

const page = ref(_get(data.value, 'entry', {}))
watch(data, (newVal, oldVal) => {
  console.log('In watch preview enabled, newVal, oldVal', newVal, oldVal)
  page.value = _get(newVal, 'entry', {})
})

const h2Array = ref([]) // anchor tags

useHead({
  title: page.value ? page.value.title : '... loading'
})

const parseParentPageURL = computed(() => {
  if (page.value.parent && page.value.parent.uri)
    return `/${page.value.parent.uri}`

  return '/'
})

const parseParentTitle = computed(() => {
  if (page.value.parent && page.value.parent.title)
    return page.value.parent.title

  return 'Home'
})

const parsedButtonText = computed(() => {
  return _get(page.value, 'button[0].buttonText', '')
})

const parsedButtonTo = computed(() => {
  return _get(page.value, 'button[0].buttonUrl', '')
})

onMounted(() => {
  // Call the plugin method to get the .section-header2 and .section-header3 elements
  h2Array.value = $getHeaders.getHeadersMethod()
})
</script>

<template lang="html">
  <main
    id="main"
    class="page page-general-content"
  >
    <nav-breadcrumb
      v-if="page"
      :title="page.title"
      class="breadcrumb"
      :to="parseParentPageURL"
      :parent-title="parseParentTitle"
    />

    <banner-text
      v-if="page && (!page.heroImage || page.heroImage.length == 0)"
      class="banner-text"
      :category="page.format"
      :title="page.title"
      :text="page.summary"
      :button-text="parsedButtonText"
      :to="parsedButtonTo"
    />

    <section-wrapper class="section-banner">
      <banner-header
        v-if="page && page.heroImage && page.heroImage.length == 1"
        :media="page.heroImage[0].image[0]"
        :category="page.format"
        :title="page.title"
        :text="page.summary"
        :to="parsedButtonTo"
        :prompt="parsedButtonText"
      />
    </section-wrapper>

    <section-wrapper theme="divider">
      <divider-way-finder class="divider-way-finder" />
    </section-wrapper>

    <page-anchor
      v-if="h2Array.length >= 3"
      :section-titles="h2Array"
    />

    <flexible-blocks
      v-if="page"
      class="flexible-content"
      :blocks="page.blocks"
    />
  </main>
</template>

<style lang="scss" scoped>
.page-general-content {
  .section-banner {
    margin-top: 0;
  }
}
</style>
