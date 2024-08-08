<script setup>
// COMPONENTS
import { NavBreadcrumb, BannerText, BannerHeader, SectionWrapper, DividerWayFinder, FlexibleBlocks, SectionStaffList } from 'ucla-library-website-components'

// HELPERS
import _get from 'lodash/get'
import { format } from 'date-fns'
import removeTags from '../utils/removeTags'

// GQL
import ARTICLE_DETAIL from '../gql/queries/ArticleDetail.gql'

const route = useRoute()

// console.log('In news Slug page')

const { $graphql } = useNuxtApp()
const { data, error } = await useAsyncData(`news/${route.params.slug}`, async () => {
  const data = await $graphql.default.request(ARTICLE_DETAIL, { slug: route.params.slug })
  return data
})

if (error.value) {
  throw createError({
    ...error.value, statusMessage: 'Page not found.' + error.value, fatal: true
  })
}

if (!data.value.entry) {
  // console.log('In news Slug page no data')
  throw createError({
    statusCode: 404,
    statusMessage: 'Page Not Found',
    fatal: true
  })
}

// console.log("import.meta.server", import.meta.server, process.client)

if (data.value.entry.slug && import.meta.server) {
  // console.log('News slug article category:', data.value.entry.category)
  data.value.entry.articleCategory = data.value.entry.category

  const { $elasticsearchplugin } = useNuxtApp()
  // console.log("elasticsearchplugin", $elasticsearchplugin, data.value.entry.slug)
  await $elasticsearchplugin?.index(data.value.entry, data.value.entry.slug)
}

const page = ref(_get(data.value, 'entry', {}))
watch(data, (newVal, oldVal) => {
  // console.log('In watch preview enabled, newVal, oldVal', newVal, oldVal)
  page.value = _get(newVal, 'entry', {})
})

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
    const fixUriLocations = (obj.locations || []).map((loc) => {
      return {
        title: loc.title,
        uri: fixUri(loc.uri)
      }
    })
    return {
      ...obj,
      locations: fixUriLocations,
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
    <NavBreadcrumb
      to="/about/news/"
      :title="page.title"
      parent-title="All Library News"
    />

    <BannerText
      v-if="!page.heroImage || page.heroImage.length == 0"
      class="banner-text"
      :category="parsedCategory"
      :title="page.title"
      :text="page.text"
      :byline="parsedByline"
      :locations="parsedLocations"
      :date-created="page.postDate"
    />

    <SectionWrapper
      v-if="page && page.heroImage && page.heroImage.length == 1"
      class="section-banner"
    >
      <BannerHeader
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
    </SectionWrapper>

    <SectionWrapper theme="divider">
      <DividerWayFinder
        class="divider"
        color="about"
      />
    </SectionWrapper>

    <FlexibleBlocks
      class="flexible-content"
      :blocks="page.blocks"
    />

    <SectionWrapper
      v-if="parsedAssociatedStaffMember.length > 0"
      theme="divider"
    >
      <DividerWayFinder
        class="divider"
        color="about"
      />
    </SectionWrapper>

    <SectionWrapper
      v-if="parsedAssociatedStaffMember.length > 0"
      class="associated-staff-member"
      section-title="Associated Staff Member"
    >
      <SectionStaffList :items="parsedAssociatedStaffMember" />
    </SectionWrapper>
  </main>
</template>

<style lang="scss" scoped>
.page-news-detail {
  .highlighted-news {
    @include visually-hidden;
  }
}
</style>
