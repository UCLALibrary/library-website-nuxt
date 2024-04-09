<script setup>
// HELPERS
import _get from 'lodash/get'
import removeTags from '../utils/removeTags'

// GQL
import HELP_TOPIC_DETAIL from '../gql/queries/HelpTopicDetail.gql'

const { $graphql } = useNuxtApp()
const route = useRoute()

const { data, error } = await useAsyncData(`help-topic-detail-${route.params.slug}`, async () => {
  const data = await $graphql.default.request(HELP_TOPIC_DETAIL, {
    slug: route.params.slug,
  })

  if (data.entry) {
    data.entry.serviceOrResourceType = 'help topic'
  }

  // ToDo: Enable when elastic search is added
  // if (data && params.slug !== undefined) {
  // console.log("Helptopics slugs Indexing slug: " + params.slug)
  //   await $elasticsearchplugin.index(data.entry, params.slug)
  // }

  return data
})

if (error.value) {
  throw createError({
    statusCode: 404, statusMessage: 'Page not found.' + error.value, fatal: true
  })
}

if (!data.value.entry) {
  error({ statusCode: 404, message: 'Page not found' })
}

const page = ref(_get(data.value, 'entry', {}))
let h2Array = ref([]) // anchor tags

useHead({
  title: page.value ? page.value.title : '... loading',
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: removeTags(page.value.text)
    },
  ]
})

const parsedHelpTopicBlocks = computed(() => {
  return page.value.helpTopicBlocks.map((obj) => {
    return {
      ...obj,
      parsedAssociatedEntries: obj.associatedEntries.map(
        (entry) => {
          return {
            ...entry,
            to: entry.externalResourceUrl
              ? entry.externalResourceUrl
              : `/${entry.uri}`,
          }
        }
      ),
    }
  })
})

const { $getHeaders } = useNuxtApp()

onMounted(() => {
  // Call plugin method to get the .section-header2 and .section-header3 elements
  h2Array = $getHeaders.getHeadersMethod()
  console.log('headers: ', h2Array)
})

</script>

<template lang="html">
  <main
    id="main"
    class="page page-help-topic"
  >
    <mastheadSecondary
      :title="page.title"
      :text="page.text"
    />

    <page-anchor
      v-if="h2Array.length >= 3"
      :section-titles="h2Array"
    />

    <section-wrapper v-if="page.richText">
      <rich-text :rich-text-content="page.richText" />
    </section-wrapper>

    <div
      v-for="(block, index) in parsedHelpTopicBlocks"
      :key="`HelpTopicBlocksKey${index}`"
    >
      <section-wrapper
        :section-title="block.sectionTitle"
        :section-summary="block.sectionSummary"
      >
        <simple-cards :items="block.parsedAssociatedEntries" />
      </section-wrapper>

      <section-wrapper theme="divider">
        <divider-way-finder
          class="divider-way-finder"
          color="help"
        />
      </section-wrapper>
    </div>

    <flexible-blocks
      class="content"
      :blocks="page.blocks"
    />

    <section-wrapper
      v-if="page.blocks.length > 0"
      theme="divider"
    >
      <divider-way-finder
        class="divider-way-finder"
        color="help"
      />
    </section-wrapper>

    <section-wrapper>
      <block-call-to-action
        class="block-call-to-action"
        :is-global="true"
      />
    </section-wrapper>
  </main>
</template>

<style lang="scss" scoped>
.page-help-topic {}
</style>
