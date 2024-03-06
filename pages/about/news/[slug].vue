<!-- eslint-disable no-console -->

<script setup>
// HELPERS
import _get from 'lodash/get'
import format from 'date-fns/format'
import removeTags from '../utils/removeTags'

// GQL
import ARTICLE_DETAIL from '../gql/queries/ArticleDetail.gql'

const { $graphql } = useNuxtApp()

const { data } = await useAsyncData('news-story', async () => {
  const data = await $graphql.default.request(ARTICLE_DETAIL, { slug: params.slug })

  if (!data.entry) {
    error({ statusCode: 404, message: 'Page not found' })
  }

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
console.log('hello')
console.log(data.value)

const page = ref(_get(data.value, 'entry', {}))

console.log('goodbye')
console.log(page.value)

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

// const parsedByline = computed(() => {
//   const byline = (page.value.contributors || []).map((contributor) => {
//     if (
//       (contributor.staffMember &&
//         contributor.staffMember.length > 0) ||
//       contributor.title
//     )
//       return `${contributor.byline || ''} ${contributor.title || contributor.staffMember[0].title
//         }`

//     return contributor
//   })

//   return byline.map((contributor) => {
//     return contributor
//   })
// })

const parsedDate = computed(() => {
  return format(new Date(page.value.postDate), 'MMMM d, Y')
})

// const parsedAssociatedStaffMember = computed(() => {
//   return page.value.associatedStaffMember.map((obj) => {
//     return {
//       ...obj,
//       to: `/about/staff/${obj.to}`,
//       image: _get(obj, 'image[0]', null),
//       staffName: `${obj.nameFirst} ${obj.nameLast}`,
//     }
//   })
// })

// const parsedCategory = computed(() => {
//   return page.value.category[0] ? page.value.category[0].title : ''
// })

// const parsedLocations = computed(() => {
//   return page.value.locations.map((obj) => {
//     return {
//       ...obj,
//       to: `/${obj.to}`,
//     }
//   })
// })
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
        :image="page.heroImage[0].image[0]"
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

    <!-- <section-wrapper
      v-if="parsedAssociatedStaffMember.length > 0"
      theme="divider"
    >
      <divider-way-finder
        class="divider"
        color="about"
      />
    </section-wrapper> -->

    <!-- <section-wrapper
      v-if="parsedAssociatedStaffMember.length > 0"
      class="associated-staff-member"
      section-title="Associated Staff Member"
    >
      <section-staff-list :items="parsedAssociatedStaffMember" />
    </section-wrapper> -->
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
