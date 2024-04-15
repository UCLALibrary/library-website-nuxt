<script setup>
import { onMounted } from 'vue'

// HELPERS
import _get from 'lodash/get'
import removeTags from '../utils/removeTags'

// GQL
import POLICY_DETAIL from '../gql/queries/PolicyDetail.gql'

const { $graphql, $getHeaders, $elasticsearchplugin } = useNuxtApp()
const route = useRoute()
const config = useRuntimeConfig()

const { data, error } = await useAsyncData(`policy-detail-${route.params.slug}`, async () => {
  if (
    route.params.slug ===
    'report-problematic-content-and-description-in-uclas-library-collections-and-archives'
  ) {
    redirect(
      'https://ucla.libwizard.com/id/38f45c482a5fcb0b715a7e9e3ddee8b2'
    )
  } else if (
    route.params.slug ===
    'toward-ethical-and-inclusive-descriptive-practices-in-ucla-library-special-collections'
  ) {
    redirect(`${config.host}/about/policies/ethical-description`)
  } else {
    const data = await $graphql.default.request(POLICY_DETAIL, {
      slug: route.params.slug,
    })

    return data
  }
})

if (error.value) {
  throw createError({
    statusCode: 404, statusMessage: 'Page not found.' + error.value, fatal: true
  })
}

if (!data.value.entry) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page Not Found'
  })
}
if (data.value.entry.slug && process.server) {
  await $elasticsearchplugin.index(data.value.entry, route.params.slug)
}

const page = ref(_get(data.value, 'entry', {}))
watch(data, (newVal, oldVal) => {
  console.log('In watch preview enabled, newVal, oldVal', newVal, oldVal)
  page.value = _get(newVal, 'entry', {})
})

const h2Array = ref([]) // anchor tags

useHead({
  title: page.value ? page.value.title : '... loading',
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: removeTags(page.value.text)
    }
  ]
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
      to="/about/policies"
      :title="page.title"
      parent-title="Policies"
    />

    <banner-text
      v-if="page && (!page.heroImage || page.heroImage.length == 0)"
      class="banner-text"
      :category="page.format"
      :title="page.title"
      :text="page.text"
    />

    <section-wrapper
      v-if="page && page.heroImage && page.heroImage.length == 1"
      class="section-banner"
    >
      <banner-header
        :media="page.heroImage[0].image[0]"
        :category="page.format"
        :title="page.title"
        :text="page.text"
      />
    </section-wrapper>

    <section-wrapper theme="divider">
      <divider-way-finder
        class="divider-way-finder"
        color="about"
      />
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
.page-general-content {}
</style>
