<!-- eslint-disable no-console -->
<script setup>
// COMPONENTS
import { MastheadSecondary, DividerWayFinder, RichText, SectionWrapper } from '@ucla-library-monorepo/ucla-library-website-components'

// UTILITIES
import _get from 'lodash/get'

// GQL
import TUTORIALS_LIST from '../gql/queries/TutorialsList.gql'

const { $graphql } = useNuxtApp()

const { data, error } = await useAsyncData('tutorials-list', async () => {
  const data = await $graphql.default.request(TUTORIALS_LIST)
  return { data }
})
// console.log('Tutorials data: ', data.value, 'error: ', error.value)

if (error.value) {
  throw createError({
    statusCode: 404, statusMessage: 'Page not found.', fatal: true
  })
}

if (!data.value?.data) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page Not Found'
  })
}

if (data.value?.data && import.meta.prerender) {
  const { index } = useIndexer()
  const doc = {
    title: data.value.data.title,
    text: data.value.data.summary,
    uri: 'help/tutorials/'
  }
  await index(doc, 'tutorials-list')
}

const route = useRoute()

// Data
const page = ref(_get(data.value.data, 'entry', {}))
console.log('Page Data: ', page.value)

watch(data, (newVal, oldVal) => {
  // console.log('In watch preview enabled, newVal, oldVal', newVal, oldVal)
  page.value = _get(newVal.data, 'entry', {})
})

useHead({
  title: page.value ? page.value.title : '... loading',
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: removeTags(page.value.summary),
    },
  ],
})
</script>

<template lang="html">
  <main
    id="main"
    class="page page-tutorials-listing"
  >
    <MastheadSecondary
      :title="page.title"
      :text="page.summary"
    />

    <SectionWrapper theme="divider">
      <DividerWayFinder color="help" />
    </SectionWrapper>

    <SectionWrapper :section-title="page.sectionTitle">
      <RichText :rich-text-content="page.richTextDefault" />
    </SectionWrapper>

    <SectionWrapper theme="divider">
      <DividerWayFinder color="help" />
    </SectionWrapper>

    <SectionWrapper :section-title="page.featuredResourcesSection[0].titleGeneral">
      <pre style="text-wrap: auto;">{{ page.featuredResourcesSection[0].featuredResources }}</pre>
    </SectionWrapper>

    <SectionWrapper theme="divider">
      <DividerWayFinder color="help" />
    </SectionWrapper>

    <SectionWrapper section-title="CTA">
      <pre style="text-wrap: auto;">{{ page.callToAction2Up }}</pre>
    </SectionWrapper>
  </main>
</template>

<style lang="scss" scoped></style>
