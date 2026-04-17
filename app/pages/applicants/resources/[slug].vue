<script setup lang="ts">
// GQL
import RESOURCE_DETAIL from "../gql/queries/ResourceDetail.gql"

// Helpers
import _get from "lodash/get"
import stripMeapFromURI from "~/utils/stripMeapFromURI"

const { $graphql } = useNuxtApp()

const route = useRoute()

const { data, error } = await useAsyncData(`resources/${route.params.slug}`, async () => {
  const data = await $graphql.default.request(RESOURCE_DETAIL, { slug: route.params.slug })
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

const parsedAssociatedTopics = computed(() => {
  return page.value.associatedTopics.map((obj) => {
    return {
      ...obj,
      to: obj.externalResourceUrl
        ? obj.externalResourceUrl
        : `/${stripMeapFromURI(obj.uri)}`,
    }
  })
})
const parsedButtonText = computed(() => {

  return _get(page.value, "button[0].buttonText", "")
})
const parsedButtonTo = computed(() => {
  return _get(page.value, "button[0].buttonUrl", "")
})

// PREVIEW
watch(data, (newVal, oldVal) => {
  console.log('In watch preview enabled, newVal, oldVal', newVal, oldVal)
  page.value = _get(newVal, 'entry', {})
})

// HEAD METADATA
useHead({
  title: page.value ? page.value.title : '... loading',
})

const { hasCTA } = useGlobalCallToAction()
console.log('hasCTA', hasCTA.value)
</script>
<template lang="html">
  <main
    id="main"
    class="page page-resource-detail"
  >
    <nav-breadcrumb
      :title="page.title"
      parent-title="Resources"
      to="/applicants/resources"
      class="breadcrumb"
    />

    <banner-text
      v-if="!page.heroImage || page.heroImage.length == 0"
      class="banner-text"
      :category="page.type"
      :title="page.title"
      :text="page.text"
      :button-text="parsedButtonText"
      :to="parsedButtonTo"
    />
    <section-wrapper class="section-banner">
      <!-- media prop replaces image prop going forward for this component -->
      <banner-header
        v-if="page.heroImage && page.heroImage.length >= 1"
        :media="page.heroImage[0].image[0]"
        :to="parsedButtonTo"
        :prompt="parsedButtonText"
        :title="page.title"
        :category="page.type"
        :text="page.text"
      />
    </section-wrapper>

    <flexible-blocks
      v-if="page.blocks && page.blocks.length"
      :blocks="page.blocks"
    />

    <section-wrapper
v-if="
      page.blocks &&
      page.blocks.length &&
      page.parsedAssociatedTopics &&
      page.parsedAssociatedTopics.length
    ">
      <divider-way-finder color="about" />
    </section-wrapper>

    <section-wrapper v-if="parsedAssociatedTopics && parsedAssociatedTopics.length">
      <section-cards-with-illustrations
        :items="parsedAssociatedTopics"
        title="Associated Topics"
        button-text="All Resources"
        to="/applicants/resources"
      />
    </section-wrapper>
    <client-only>
      <section-wrapper>
        <block-call-to-action
          :is-meap-global="true"
          :v-if="hasCTA"
        />
      </section-wrapper>
    </client-only>
  </main>
</template>



<style lang="scss" scoped>
.page-resource-detail {

  .banner-text,
  .banner-header {
    --color-theme: var(--color-about-purple-03);
  }

  .section-banner {
    margin-top: 0;
  }
}
</style>
