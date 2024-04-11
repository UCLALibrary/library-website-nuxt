<script setup>
import { onMounted } from 'vue'

// HELPERS
import _get from 'lodash/get'
import removeTags from '../utils/removeTags'

// GQL
import POLICIES_LIST from '../gql/queries/PoliciesList.gql'

const { $graphql, $getHeaders } = useNuxtApp()

const route = useRoute()

const { data } = await useAsyncData('policy-list', async () => {
  const data = await $graphql.default.request(POLICIES_LIST, {
    uri: route.params.uri,
  })

  return data
})

const page = ref(_get(data.value, 'entry', {}))
const policyBlock = ref(_get(data.value, 'entry.policyBlock', {}))
const h2Array = ref([]) // anchor tags
console.log('headers1c: ', h2Array.value)

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
    <masthead-secondary
      :title="page.title"
      :text="page.text"
    />

    <page-anchor
      v-if="h2Array.length >= 3"
      :section-titles="h2Array"
    />

    <div
      v-for="(policy, index) in parsedPolicyBlocks"
      :key="`PolicyBlocksKey-${policy}-${index}`"
    >
      <section-wrapper
        :section-title="policy.sectionTitle"
        :section-summary="policy.sectionSummary"
      >
        <simple-cards
          :items="policy.parsedAssociatedEntries"
          button="View all"
        />
      </section-wrapper>

      <section-wrapper theme="divider">
        <divider-way-finder class="divider" />
      </section-wrapper>
    </div>

    <flexible-blocks :blocks="page.blocks" />
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
