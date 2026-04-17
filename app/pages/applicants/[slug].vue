<script setup lang="ts">
// GQL
import HELP_TOPIC_DETAIL from "../gql/queries/HelpTopicDetail.gql"

// Helpers
import _get from "lodash/get"
import stripMeapFromURI from "~/utils/stripMeapFromURI"

const { $graphql } = useNuxtApp()

const route = useRoute()

const { data, error } = await useAsyncData(`applicants/${route.params.slug}`, async () => {
  const data = await $graphql.default.request(HELP_TOPIC_DETAIL, { slug: route.params.slug })
  // console.log('GQL Resource Detail data:', data)
  return data
})

const dataValue = data.value as Record<string, unknown> | undefined

if (error.value) {
  throw createError({
    ...error.value, statusMessage: 'Page not found.' + error.value, fatal: true
  })
}

if (!dataValue?.entry) {
  throw createError({ statusCode: 404, message: 'Page not found', fatal: true })
}

const page = ref(_get(data.value, 'entry', {}))

// PREVIEW
watch(data, (newVal, oldVal) => {
  console.log('In watch preview enabled, newVal, oldVal', newVal, oldVal)
  page.value = _get(newVal, 'entry', {})
})

// HEAD METADATA
useHead({
  title: page.value ? page.value.title : '... loading',
})


const parsedHelpTopicBlocks = computed(() => {

  if (page.value.helpTopicBlocks && page.value.helpTopicBlocks.length) {
    return page.value.helpTopicBlocks.map((obj) => {
      return {
        ...obj,
        parsedAssociatedEntries: obj.associatedEntries.map(
          (entry) => {
            return {
              ...entry,
              to: entry.externalResourceUrl
                ? entry.externalResourceUrl
                : `/${stripMeapFromURI(entry.uri)}`,
            }
          }
        ),
      }
    })
  }

  return []
})

</script>

<template lang="html">
  <main
    id="main"
    class="page page-help-topic"
  >
    <nav-breadcrumb
      :title="page.title"
      to="/applicants/resources"
      parent-title="For Applicants"
      class="breadcrumb"
    />
    <masthead-secondary
      :title="page.title"
      :text="page.summary"
    />
    <section-wrapper>
      <rich-text
        v-if="page.richText"
        class="content"
        :rich-text-content="page.richText"
      />
    </section-wrapper>

    <section-wrapper
      v-if="
        page.richText &&
        page.helpTopicBlocks &&
        page.helpTopicBlocks.length
      "
      theme="divider"
    >
      <divider-way-finder color="about" />
    </section-wrapper>
    <section-wrapper
      v-for="(block, index) in parsedHelpTopicBlocks"
      :key="`HelpTopicBlocksKey${index}`"
      class="help-topic-section"
    >
      <simple-cards
        class="help-topic-block"
        :section-title="block.sectionTitle"
        :section-summary="block.sectionSummary"
        :items="block.parsedAssociatedEntries"
      />
      <divider-way-finder color="about" />
    </section-wrapper>

    <flexible-blocks
      v-if="page.blocks && page.blocks.length"
      class="flexible-content"
      :blocks="page.blocks"
    />
  </main>
</template>



<style lang="scss" scoped>
.page-help-topic {

  .banner-text,
  .banner-header {
    --color-theme: var(--color-about-purple-03);
  }

  .help-topic-section:last-child {
    .divider-way-finder {
      display: none;
    }
  }
}
</style>
