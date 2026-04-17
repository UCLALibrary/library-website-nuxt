<script setup lang="ts">
// Helpers
import sortByTitle from "~/utils/sortByTitle"

// GQL
import RESOURCE_LIST from "../gql/queries/ResourceList.gql"

// Helpers
import _get from "lodash/get"
import stripMeapFromURI from "~/utils/stripMeapFromURI"
import { useGlobalCallToAction } from "~/composables/useGlobalCallToAction"
import { client } from "process"

const { $graphql } = useNuxtApp()

const { data, error } = await useAsyncData('resource-list', async () => {
  const data = await $graphql.default.request(RESOURCE_LIST)
  return data
})

const dataValue = data.value as Record<string, unknown> | undefined

if (error.value) {
  throw createError({
    ...error.value, statusMessage: 'Page not found.' + error.value, fatal: true
  })
}

if (!(dataValue?.entry) && !(dataValue?.entries)) {
  throw createError({ statusCode: 404, message: 'Page not found', fatal: true })
}

// DATA
const summaryData = ref(_get(data.value, 'entry', []))
// entries and externalResources should default to arrays to satisfy map calls
const page = ref(_get(data.value, "entries", []))
const externalResourceData = ref(_get(data.value, "externalResources", []))

// PREVIEW MODE
watch(data, (newVal, oldVal) => {
  console.log('In watch preview enabled, newVal, oldVal', newVal, oldVal)
  summaryData.value = _get(newVal, 'entry', [])
})

// HEAD METADATA
useHead({
  title: summaryData.value ? summaryData.value.title : '... loading',
})


const resourceList = computed(() => {
  return page.value.map((obj) => {
    return {
      ...obj,
      to: `/applicants/resources/${obj.to}`,
      image: _get(obj, "image[0].image[0]", {}),
    }
  })
})
// merge external & internal meap resource entries
const allData = computed(() => {
  const allResources = [...page.value, ...externalResourceData.value]
  return allResources.map((obj) => {
    return {
      ...obj,
      to: obj.externalResourceUrl
        ? obj.externalResourceUrl
        : `/${stripMeapFromURI(obj.uri)}`,
    }
  })
})
const sortedData = computed(() => {
  return allData.value.slice().sort(sortByTitle)
})
const { hasCTA } = useGlobalCallToAction()
</script>

<template lang="html">
  <main
    id="main"
    class="page page-resources-list"
  >
    <masthead-secondary
      :title="summaryData.title"
      :text="summaryData.text"
    />

    <section-wrapper
      v-if="resourceList"
      class="section"
    >
      <section-cards-with-illustrations
        class="section"
        :items="sortedData"
        :is-horizontal="true"
      />
    </section-wrapper>

    <section-wrapper
      v-if="resourceList"
      class="section"
    >
      <divider-way-finder
        class="divider-way-finder"
        color="about"
      />
    </section-wrapper>
    <client-only>
      <section-wrapper>
        <block-call-to-action
          class="block-call-to-action"
          :is-meap-global="true"
          :v-if="hasCTA"
        />
      </section-wrapper>
    </client-only>
  </main>
</template>



<style lang="scss" scoped>
.page-resources-list {
  .section-header {
    margin-top: var(--space-3xl);
    margin-bottom: var(--space-xl);
  }

  .section-title {
    @include step-4;
    color: var(--color-primary-blue-03);
    margin: 0 auto;
    max-width: $container-l-main + px;
  }

  .content {
    margin: 0 auto;
  }

  .section-cards {
    margin: var(--space-3xl) auto;
  }

  // All cards on this page should be about purple even if they are external
  :deep(.block-card-with-illustration.color-default) {
    --color-theme: var(--color-about-purple-01);
  }

  @media #{$medium} {

    .content,
    .section-title {
      padding: 0 var(--unit-gutter);
    }
  }
}
</style>
