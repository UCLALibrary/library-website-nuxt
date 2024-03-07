<script setup>
// HELPERS
import _get from 'lodash/get'
import { format } from 'date-fns'
import removeTags from '../utils/removeTags'

// GQL
import ARTICLE_DETAIL from '../gql/queries/ArticleDetail.gql'

const { $graphql } = useNuxtApp()
const route = useRoute()

const { data, error } = await useAsyncData('news-detail', async () => {
  const data = await $graphql.default.request(ARTICLE_DETAIL, { slug: route.params.slug })

  // Elastic search?
  // if (data) {
  //   if (data.entry) {
  //     data.entry.articleCategory = data.entry.category
  //     delete data.entry.category

  //     await $elasticsearchplugin.index(data.entry, params.slug)
  //     data.entry.category = data.entry.articleCategory
  //   }
  //   console.log(
  //     'News Data fetched: ' + JSON.stringify(data.entry.category)
  //   )
  // }

  return data
})

if (error.value) {
  throw createError({
    statusCode: 404, statusMessage: 'Page not found.' + error.value, fatal: true
  })
}

if (!data.value.entry) {
  // eslint-disable-next-line no-console
  console.log('no data throw impact report main stry error')
  throw createError({
    statusCode: 404,
    statusMessage: 'Page Not Found'
  })
}

const page = ref(_get(data.value, 'entry', {}))

useHead({
  title: page.value ? page.value.title : '... loading',
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: removeTags(page.text)
    }
  ]
})

const parsedByline = computed(() => {
  const contributors = page.value.contributors || []

  const byline = contributors.reduce((acc, contributor) => {
    const hasStaffMember = contributor.staffMember && contributor.staffMember.length > 0
    const hasTitle = !!contributor.title

    if (hasStaffMember || hasTitle) {
      const title = contributor.title || contributor.staffMember[0].title
      const bylineText = `${contributor.byline || ''} ${title}`
      acc.push(bylineText)
    }
    return acc
  }, [])

  return byline
})

const parsedDate = computed(() => {
  return format(new Date(page.postDate), 'MMMM d, Y')
})

const parsedAssociatedStaffMember = computed(() => {
  return page.value.associatedStaffMember.map((obj) => {
    return {
      ...obj,
      to: `/about/staff/${obj.to}`,
      image: _get(obj, 'image[0]', null),
      staffName: `${obj.nameFirst} ${obj.nameLast}`,
    }
  })
})

const parsedCategory = computed(() => {
  return page.value.category[0] ? page.value.category[0].title : ''
})

const parsedLocations = computed(() => {
  return page.value.locations.map((obj) => {
    return {
      ...obj,
      to: `/${obj.to}`,
    }
  })
})
</script>

<template>
  <main
    id="main"
    class="page page-news-detail"
  >
    <nav-breadcrumb
      to="/about/news"
      :title="page.title"
      parent-title="All Library News"
    />

    <banner-text
      v-if="!page.heroImage || page.heroImage.length == 0"
      class="banner-text"
      :category="parsedCategory"
      :title="page.title"
      :text="page.text"
      :byline="parsedByline"
      :locations="parsedLocations"
      :date-created="page.postDate"
    />

    <section-wrapper
      v-if="page && page.heroImage && page.heroImage.length == 1"
      class="section-banner"
    >
      <banner-header
        :media="page.heroImage[0].image[0]"
        :to="page.to"
        :category="parsedCategory"
        :title="page.title"
        :text="page.text"
        :byline="parsedByline"
        :locations="parsedLocations"
        :date-created="page.postDate"
        :align-right="true"
      />
    </section-wrapper>

    <section-wrapper theme="divider">
      <divider-way-finder
        class="divider"
        color="about"
      />
    </section-wrapper>

    <flexible-blocks
      class="flexible-content"
      :blocks="page.blocks"
    />

    <section-wrapper
      v-if="parsedAssociatedStaffMember.length > 0"
      theme="divider"
    >
      <divider-way-finder
        class="divider"
        color="about"
      />
    </section-wrapper>

    <section-wrapper
      v-if="parsedAssociatedStaffMember.length > 0"
      class="associated-staff-member"
      section-title="Associated Staff Member"
    >
      <section-staff-list :items="parsedAssociatedStaffMember" />
    </section-wrapper>
  </main>
</template>

<style
  lang="scss"
  scoped
>
.page-news-detail {
  .highlighted-news {
    @include visually-hidden;
  }
}
</style>
