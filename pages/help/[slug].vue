<script setup>
import { onMounted } from 'vue'

// HELPERS
import _get from 'lodash/get'
import removeTags from '../utils/removeTags'

// GQL
import HELP_TOPIC_DETAIL from '../gql/queries/HelpTopicDetail.gql'

const { $graphql, $getHeaders } = useNuxtApp()
const route = useRoute()

const { data, error } = await useAsyncData(`help-topic-detail-${route.params.slug}`, async () => {
  const data = await $graphql.default.request(HELP_TOPIC_DETAIL, {
    slug: route.params.slug,
  })
  console.log("preview useasycdata $graphql called again", data.entry.title)

  if (data.entry) {
    data.entry.serviceOrResourceType = 'help topic'
  }

  return data
})


if (error.value) {
  throw createError({
    statusCode: 404, statusMessage: 'Page not found.' + error.value, fatal: true
  })
}

if (!data.value.entry) {
  error({ statusCode: 404, message: 'Page not found', fatal: true })
}


if (route.params.slug !== undefined && data.value.entry.slug && process.server) {
  const { $elasticsearchplugin } = useNuxtApp()
  await $elasticsearchplugin?.index(data.value.entry, data.value.entry.slug)
}

const page = ref(_get(data.value, 'entry', {}))
// Have to add a watcher for data when in preview mode as, page ref was not getting updated after the data was refetched from craft
watch(data, (newVal, oldVal) => {
  console.log("In watch preview enabled, newVal, oldVal", newVal, oldVal)
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
    },
  ]
})

const parsedHelpTopicBlocks = computed(() => {
  console.log("page Help topic computed called when preview=true", page.value.title)
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

onMounted(() => {
  // Call plugin method to get the .section-header2 and .section-header3 elements
  h2Array.value = $getHeaders.getHeadersMethod()
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
      :key="`HelpTopicBlocksKey-${block}-${index}`"
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
