<script setup>
// COMPONENTS
import { MastheadSecondary, PageAnchor, SimpleCards, FlexibleBlocks, SectionWrapper, DividerWayFinder } from '@ucla-library-monorepo/ucla-library-website-components'

import { onMounted } from 'vue'

// HELPERS
import _get from 'lodash/get'
import removeTags from '../utils/removeTags'

// GQL
import POLICIES_LIST from '../gql/queries/PoliciesList.gql'

const { $graphql, $getHeaders } = useNuxtApp()

const route = useRoute()

const { data, error } = await useAsyncData('policy-listing', async () => {
  const data = await $graphql.default.request(POLICIES_LIST, {
    uri: route.params.uri,
  })

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

if (data.value.entry && import.meta.prerender) {
  const { index } = useIndexer()
  const doc = {
    title: data.value.entry.title,
    text: data.value.entry.text,
    uri: 'about/policies/'
  }
  await index(doc, 'policy-listing')
}

const page = ref(_get(data.value, 'entry', {}))
const policyBlock = ref(_get(data.value, 'entry.policyBlock', {}))
watch(data, (newVal, oldVal) => {
  // console.log('In watch preview enabled, newVal, oldVal', newVal, oldVal)
  page.value = _get(newVal, 'entry', {})
  policyBlock.value = _get(newVal, 'entry.policyBlock', [])
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

const parsedPolicyBlocks = computed(() => {
  return policyBlock.value.map((obj) => {
    return {
      ...obj,
      parsedAssociatedEntries: obj.associatedEntries.map((entry) => {
        return {
          ...entry,
          to: `/${entry.uri}`
        }
      })
    }
  })
})

onMounted(() => {
  // Call the plugin to get the .section-header2 and .section-header3 elements
  h2Array.value = $getHeaders.getHeadersMethod()
})
</script>

<template>
  <main
    id="main"
    class="page page-policies"
  >
    <MastheadSecondary
      :title="page.title"
      :text="page.text"
    />

    <PageAnchor
      v-if="h2Array.length >= 3"
      :section-titles="h2Array"
    />

    <div
      v-for="(policy, index) in parsedPolicyBlocks"
      :key="`PolicyBlocksKey-${policy}-${index}`"
    >
      <SectionWrapper
        :section-title="policy.sectionTitle"
        :section-summary="policy.sectionSummary"
      >
        <SimpleCards
          :items="policy.parsedAssociatedEntries"
          button="View all"
        />
      </SectionWrapper>

      <SectionWrapper theme="divider">
        <DividerWayFinder class="divider" />
      </SectionWrapper>
    </div>

    <FlexibleBlocks :blocks="page.blocks" />
  </main>
</template>

<style lang="scss" scoped>
.page-policies {

  // refactor simple cards component to fix truncation
  :deep(.simple-cards .text p) {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 5;
  }
}
</style>
