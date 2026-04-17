<script setup>
// HELPERS
import _get from 'lodash/get'

// GQL
import ARTICLE_NEWS_DETAIL from '../gql/queries/ArticleNewsDetail.gql'

const { $graphql } = useNuxtApp()

const route = useRoute()

const { data, error } = await useAsyncData(`article-news/${route.params.slug}`, async () => {
  const data = await $graphql.default.request(ARTICLE_NEWS_DETAIL, { slug: route.params.slug })
  // console.log('GQL Article News Detail data:', data)
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
  // console.log('Static build - indexing News:', route.params.slug, JSON.stringify(data.value.entry))
  try {
    // Call the composable to use the indexing function
    const { indexContent } = useContentIndexer()
    await indexContent(data.value.entry, route.params.slug)
    console.log('News indexed successfully during static build', route.params.slug)
  } catch (error) {

    console.error('FAILED TO INDEX News during static build:', error)
  }
}

const page = ref(_get(data.value, 'entry', {}))

// COMPUTED
const parsedCategory = computed(() => {
  return _get(page.value, 'category[0].title', '')
})

const parsedByline = computed(() => {
  const byline = (page.value.contributors || []).map((contributor) => {
    if (
      (contributor.staffMember &&
        contributor.staffMember.length > 0) ||
      contributor.title
    ) {
      return `${contributor.byline || ''} ${contributor.title || contributor.staffMember[0].title
        }`
    } else {
      return ''
    }
  })

  return byline.map((contributor) => {
    return contributor
  })
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

</script>

<template lang="html">
  <main
    id="main"
    class="page page-news-detail"
  >
    <nav-breadcrumb
      to="/about/news"
      :title="page.title"
      parent-title="News"
    />

    <banner-text
      v-if="!page.heroImage || page.heroImage.length === 0"
      class="banner-text"
      :category="parsedCategory"
      :title="page.title"
      :text="page.text"
      :byline="parsedByline"
    />

    <section-wrapper class="section-banner">
      <banner-header
        v-if="page.heroImage && page.heroImage.length === 1"
        :media="page.heroImage[0].image[0]"
        :title="page.title"
        :text="page.text"
        :category="parsedCategory"
        :byline="parsedByline"
        :locations="page.locations"
        :date-created="page.dateCreated"
        :align-right="true"
      />
    </section-wrapper>

    <section-wrapper theme="divider">
      <divider-way-finder
        class="divider"
        color="visit"
      />
    </section-wrapper>

    <flexible-blocks
      class="content"
      :blocks="page.blocks"
    />
  </main>
</template>

<style lang="scss" scoped>
.page-news-detail {

  .banner-text,
  .banner-header {
    --color-theme: var(--color-visit-fushia-03);
  }

  .section-banner {
    margin-top: 0;
  }
}
</style>
