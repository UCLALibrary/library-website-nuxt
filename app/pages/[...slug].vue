<script setup>
// GQL
import _get from 'lodash/get'
import GENERAL_CONTENT_DETAIL from '../gql/queries/GeneralContentDetail.gql'

// Helpers
const { $graphql } = useNuxtApp()

// ROUTE
const route = useRoute()
const path = route.path.replace(/^\/|\/$/g, '')

// ASYNC DATA
const { data, error } = await useAsyncData(`general-content-${path}`, async () => {
  const data = await $graphql.default.request(GENERAL_CONTENT_DETAIL, {
    slug: path.substring(
      path.lastIndexOf('/') + 1
    ),
  })
  return data
})

if (error.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page not found.',
    fatal: true
  })
}

if (!data.value.entry) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page Not Found',
    fatal: true
  })
}

// DATA
const page = ref(_get(data.value, 'entry', {}))

// HEAD
useHead({
  title: page.value ? page.value.title : '... loading',
})

// COMPUTED
const parseParentPageURL = computed(() => {
  if (page.value.parent && page.value.parent.uri) {
    return `/${stripMeapFromURI(page.value.parent.uri)}`
  }

  return '/'
})
const parseParentTitle = computed(() => {
  if (page.value.parent && page.value.parent.title)
    return page.value.parent.title

  return 'Modern Endangered Archives Program'
})
</script>
<template lang="html">
  <main
    id="main"
    class="page page-general-content"
  >
    <nav-breadcrumb
      v-if="page"
      :title="page.title"
      class="breadcrumb"
      :to="parseParentPageURL"
      :parent-title="parseParentTitle"
    />
    <banner-text
      v-if="page && (!page.heroImage || page.heroImage.length == 0)"
      class="banner-text"
      :category="page.format"
      :title="page.title"
      :text="page.summary"
    />

    <section-wrapper class="section-banner">
      <banner-header
        v-if="page && page.heroImage && page.heroImage.length == 1"
        :media="page.heroImage[0].image[0]"
        :category="page.format"
        :title="page.title"
        :text="page.summary"
      />
    </section-wrapper>

    <section-wrapper theme="divider">
      <divider-way-finder
        class="divider-way-finder"
        color="visit"
      />
    </section-wrapper>

    <flexible-blocks
      v-if="page"
      class="flexible-content"
      :blocks="page.blocks"
    />
  </main>
</template>
<style lang="scss" scoped>
.page-general-content {

  .banner-text,
  .banner-header {
    --color-theme: var(--color-visit-fushia-03);
  }

  :deep(.meta) {
    margin-top: 0px;
  }

  :deep(.divider-way-finder) {
    --color-border: var(--color-visit-fushia-03);
  }

  .section-banner {
    margin-top: 0;
  }
}
</style>
