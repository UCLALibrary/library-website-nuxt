<script setup>
// COMPONENTS
import { NavBreadcrumb, BannerText, BannerHeader, SectionHeader, SectionWrapper, DividerWayFinder, RichText, FlexibleBlocks, BlockCallToActionTwoUp } from '@ucla-library-monorepo/ucla-library-website-components'

// HELPERS
import _get from 'lodash/get'
import removeTags from '../utils/removeTags'

// GQL
import TUTORIALS_DETAIL from '../gql/queries/TutorialsDetail.gql'
import TUTORIALS_CTA from '../gql/queries/TutorialsCTA.gql'

const { $graphql } = useNuxtApp()
const route = useRoute()

// FETCH DATA
const { data, error } = await useAsyncData(`tutorials-${route.params.slug}`, async () => {
  const detail = await $graphql.default.request(TUTORIALS_DETAIL, { slug: route.params.slug })
  const cta = await $graphql.default.request(TUTORIALS_CTA)
  return { detail, cta }
})

// handle network / graphql error
if (error.value) {
  throw createError({
    ...error.value,
    statusMessage: 'Page not found.' + error.value,
    fatal: true
  })
}

// Ensure the detail entry exists, using the correct path
if (!data.value?.detail?.entry) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page Not Found',
    fatal: true
  })
}

// Indexing during prerender
if (data.value.detail.entry.slug && import.meta.prerender) {
  const { index } = useIndexer()
  await index(data.value.detail.entry, route.params.slug)
}

// Create reactive refs for template usage
const page = ref(_get(data.value, 'detail.entry', {}))
const cta = ref(_get(data.value, 'cta.entry.callToAction2Up', []))

// Update refs when previewing / data changes
watch(data, (newVal, oldVal) => {
  // console.log('In watch preview enabled, newVal, oldVal', newVal, oldVal)
  page.value = _get(newVal, 'detail.entry', {})
  cta.value = _get(newVal, 'cta.entry.callToAction2Up', [])
})

const metaDescription = computed(() => removeTags(page.value.summary ?? page.value.title ?? ''))

useHead({
  title: page.value ? page.value.title : '... loading',
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: metaDescription.value
    }
  ]
})

const parsedTutorialType = computed(() => {
  return page.value.tutorialType.title ? page.value.tutorialType.title : ''
})
</script>

<template>
  <main
    id="main"
    class="page page-news-detail"
  >
    <h3>
      <br>
      <strong>PAGE DATA</strong>
      <br>
      <pre>{{ page }}</pre>
    </h3>
    <hr>
    <h3>
      <strong>CALL TO ACTION DATA</strong>
      <br>
      <pre>{{ cta }}</pre>
    </h3>
  </main>
</template>

<style lang="scss" scoped>
.page-news-detail {

}
</style>
