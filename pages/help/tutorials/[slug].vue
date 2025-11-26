<script setup>
// COMPONENTS
import { NavBreadcrumb, BannerText, BannerHeader, SectionHeader, SectionWrapper, DividerWayFinder, RichText, FlexibleBlocks, SimpleCards, IconWithLink, BlockSponsor, BlockCallToActionTwoUp } from '@ucla-library-monorepo/ucla-library-website-components'

// HELPERS
import _get from 'lodash/get'
import removeTags from '../utils/removeTags'

// GQL
import TUTORIALS_DETAIL from '../gql/queries/TutorialsDetail.gql'
import TUTORIALS_CTA from '../gql/queries/TutorialsCTA.gql'

const { $graphql } = useNuxtApp()
const route = useRoute()

// FETCH DATA
const { data, error } = await useAsyncData(`tutorials-${route.params.slug}`, async () => {
  const detail = await $graphql.default.request(TUTORIALS_DETAIL, { slug: route.params.slug })
  const cta = await $graphql.default.request(TUTORIALS_CTA)
  return { detail, cta }
})

// HANDLE NETWORK/GRAPHQL ERROR
if (error.value) {
  throw createError({
    ...error.value,
    statusMessage: 'Page not found.' + error.value,
    fatal: true
  })
}

// CHECKS THAT THE TUTORIAL DETAIL EXISTS & USES THE CORRECT PATH
if (!data.value?.detail?.entry) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page Not Found',
    fatal: true
  })
}

// INDEXING DURING PRERENDER
if (data.value.detail.entry.slug && import.meta.prerender) {
  const { index } = useIndexer()
  await index(data.value.detail.entry, route.params.slug)
}

// CREATE REACTIVE REFS FOR TEMPLATE
const page = ref(_get(data.value, 'detail.entry', {}))
const cta = ref(_get(data.value, 'cta.entry.callToAction2Up', []))

// UPDATE REFS WHEN PREVIEWING/DATA CHANGES
watch(data, (newVal, oldVal) => {
  // console.log('In watch preview enabled, newVal, oldVal', newVal, oldVal)
  page.value = _get(newVal, 'detail.entry', {})
  cta.value = _get(newVal, 'cta.entry.callToAction2Up', [])
})

const metaDescription = computed(() => removeTags(page.value.summary ?? page.value.title ?? ''))

useHead({
  title: page.value ? page.value.title : '... loading',
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: metaDescription.value
    }
  ]
})

const parsedButtonText = computed(() => {
  return _get(page.value, 'button[0].buttonText', '')
})

const parsedButtonTo = computed(() => {
  return _get(page.value, 'button[0].buttonUrl', '')
})

const parsedRelatedResources = computed(() => {
  return (page.value.resourceServiceWorkshop || []).map((obj) => {
    return {
      ...obj,
      to: obj.externalResourceUrl
        ? obj.externalResourceUrl
        : obj.uri
          ? `/${obj.uri}`
          : null,
    }
  })
})

const parsedAwardsAndRecognitions = computed(() => {
  return page.value.awardsAndRecognition.map((obj) => {
    return {
      ...obj,
      to: `/${obj.uri}`,
      image: _get(obj, 'image[0]', null),
    }
  })
})

const parsedAuthors = computed(() => {
  const authorNames = page.value.authors.flatMap(author =>
    author.contributor
      ? author.contributor
      : author.staffMember
        ? author.staffMember.map(staff => staff.title)
        : []
  )

  return authorNames.join(', ')
})

const parsedContributors = computed(() => {
  const authorNames = page.value.contributorsNoMax.flatMap(author =>
    author.contributor
      ? author.contributor
      : author.staffMember
        ? author.staffMember.map(staff => staff.title)
        : []
  )

  return authorNames.join(', ')
})
</script>

<template>
  <main
    id="main"
    class="page page-news-detail"
  >

    <NavBreadcrumb
      to="/help/"
      :title="page.title"
      parent-title="Tutorials"
    />

    <BannerText
      v-if="page.tutorialType"
      class="banner-text"
      :category="page.tutorialType[0].title"
      :title="page.title"
      :text="page.summary"
      :button-text="parsedButtonText"
      :to="parsedButtonTo"
    />

    <SectionWrapper
      v-if="page.learningOutcomes
      page.learningOutcomes
      theme="divider"
    >
      <DividerWayFinder
        class="divider"
        color="help"
      />
    </SectionWrapper>

    <SectionWrapper
      v-if="page.learningOutcomes"
      section-title="Learning Outcomes"
    >
      <RichText
        class="learning-outcomes"
        :rich-text-content="page.learningOutcomes"
      />
    </SectionWrapper>

    <FlexibleBlocks
      v-if="page && page.blocks"
      class="flexible-content"
      :blocks="page.blocks"
    />

    <SectionWrapper
      v-if="page.resourceServiceWorkshop.length"
      theme="divider"
    >
      <DividerWayFinder
        class="divider"
        color="help"
      />
    </SectionWrapper>

    <SectionWrapper
      v-if="page.resourceServiceWorkshop.length"
      class="related-resources"
      section-title="Related Resources"
    >
      <SimpleCards
        :items="parsedRelatedResources"
      />
    </SectionWrapper>

    <SectionWrapper
      v-if="page.awardsAndRecognition.length || page.authors.length || page.contributorsNoMax.length"
      theme="divider"
    >
      <DividerWayFinder
        class="divider"
        color="help"
      />
    </SectionWrapper>

    <SectionWrapper
      v-if="page.awardsAndRecognition.length || page.authors.length || page.contributorsNoMax.length"
      class="about-this-tutorial"
      theme="divider"
      section-title="About this Tutorial"
    >

      <SectionWrapper
        v-if="page.awardsAndRecognition.length"
        class="about"
      >
        <SectionHeader level="3">Awards and Recognition</SectionHeader>
        <div class="awards-list">
            <BlockSponsor
              v-for="item in parsedAwardsAndRecognitions"
              :key="`footer-sponsor-${item.funderName}`"
              class="sponsor-item"
              :funder-logo="item.funderLogo"
              :funder-name="item.funderName"
              :funder-url="item.funderUrl"
            />
        </div>
      </SectionWrapper>

      <SectionWrapper
        v-if="page.authors.length"
        class="about"
      >
        <SectionHeader level="3">Authors</SectionHeader>
        <p>{{parsedAuthors}}</p>
      </SectionWrapper>

      <SectionWrapper
        v-if="page.contributorsNoMax.length"
        class="about"
      >
        <SectionHeader level="3">Contributors</SectionHeader>
        <p>{{parsedContributors}}</p>
      </SectionWrapper>

    </SectionWrapper>

    <SectionWrapper v-if="cta">
      <BlockCallToActionTwoUp
        :items="cta"
      />
    </SectionWrapper>
  </main>
</template>

<style lang="scss" scoped>
.page-news-detail {

  .about-this-tutorial.section-wrapper > :deep(.section-header) {
    margin-bottom: 0;
  }

  .about {
    margin-bottom: var(--space-m);

    p {
      @include step-0;
    }

    .awards-list {
      display: flex;
      flex-direction: row;
      gap: var(--space-m);
    }
  }

}
</style>
