<script setup>
// COMPONENTS
import { NavBreadcrumb, BannerText, SectionHeader, SectionWrapper, DividerWayFinder, RichText, FlexibleBlocks, BlockCallToAction } from '@ucla-library-monorepo/ucla-library-website-components'

// HELPERS
import _get from 'lodash/get'
import { format } from 'date-fns'
import removeTags from '../utils/removeTags'

// GQL
import TUTORIAL_DETAIL from '../gql/queries/TutorialsDetail.gql'

const route = useRoute()

// console.log('In news Slug page')

const { $graphql } = useNuxtApp()
const { data, error } = await useAsyncData(`news/${route.params.slug}`, async () => {
  const data = await $graphql.default.request(TUTORIAL_DETAIL, { slug: route.params.slug })
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

// console.log("import.meta.prerender", import.meta.prerender, process.client)

if (data.value.entry.slug && import.meta.prerender) {
  // console.log('News slug article category:', data.value.entry.category)
  data.value.entry.tutorial = data.value.entry.tutorial

  const { index } = useIndexer()
  // console.log("elasticsearchplugin", index, data.value.entry.slug)
  await index(data.value.entry, data.value.entry.slug)
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


const parsedTutorialType = computed(() => {
  return page.value.tutorialType.title ? page.value.tutorialType.title : ''
})

// const parsedPolicyBlocks = computed(() => {
//   return policyBlock.value.map((obj) => {
//     return {
//       ...obj,
//       parsedAssociatedEntries: obj.associatedEntries.map((entry) => {
//         return {
//           ...entry,
//           to: `/${entry.uri}`
//         }
//       })
//     }
//   })
// })

// const parsedAuthors
// const parsedContributorsNoMax

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

    <h3>
      <strong>title</strong>
      <hr/>
      <pre>{{page}}</pre>
    </h3>

    <BannerText
      class="banner-text"
      :category="page.tutorialType[0].title"
      :title="page.title"
      :text="page.summary"
      :button-text="page.buttonUrl[0].buttonText"
      :to="page.buttonUrl[0].buttonUrl"
    />

    <SectionWrapper theme="divider">
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
        v-if="page.learningOutcomes"
        class="learning-outcomes"
        :rich-text-content="page.learningOutcomes"
      />
    </SectionWrapper>

<!-- ALLFPBS -->

    <FlexibleBlocks
      class="flexible-content"
      :blocks="page.blocks"
    />


<!-- RELATED RESOURCES (SIMPLE CARDS) -->
    <!-- <div
      v-for="(policy, index) in parsedPolicyBlocks"
      :key="`PolicyBlocksKey-${policy}-${index}`"
    >
      <SectionWrapper
        :section-title="policy.sectionTitle"
        :section-summary="policy.sectionSummary"
      >
        <SimpleCards
          :items="policy.parsedAssociatedEntries"
          button="View all"
        />
      </SectionWrapper>

      <SectionWrapper theme="divider">
        <DividerWayFinder class="divider" />
      </SectionWrapper>
    </div> -->

<!-- ABOUT THIS TUTORIAL -->
 <!-- contributorsNoMax -->

    <SectionWrapper level="1">
      <SectionWrapper>
        <SectionHeader level="2">About this Tutorial</SectionHeader>
        <SectionWrapper>
          <SectionHeader level="3">Awards and Recognition</SectionHeader>
          <SectionHeader level="3">Authors</SectionHeader>
          <SectionHeader level="3">Contributors</SectionHeader>
        </SectionWrapper>
      </SectionWrapper>
    </SectionWrapper>
    <div class="awards" v-if="page.awardsAndRecognition.length > 0">

     <h3 class="awards-recognition">Awards and Recognition</h3>
    </div>
    <!--
      <div class="description-with-image">
        <div class="description">
          <RichText
            v-if="page.donors[0].lastName"
            class="donors"
          >
            Made possible by a gift from {{ parsedDonors }}
          </RichText>

          <IconWithLink
            v-if="page.subjectAreas[0]"
            class="subject-area"
            icon-name="svg-icon-book"
            :text="page.subjectAreas[0].title"
            :to="parsedSubjectAreaLink"
          />

          <ul v-if="parsedAssociatedLocations.length > 0">
            <li
              v-for="(
                location, index
              ) in parsedAssociatedLocations"
              :key="`AssociatedLocation-${location}-${index}`"
            >
              <IconWithLink
                class="associated-locations"
                icon-name="svg-icon-location"
                :text="location.title"
                :to="location.to"
              />
            </li>
          </ul>

          <RichText
            v-if="page.endowmentDescription"
            class="description-text"
            :rich-text-content="page.endowmentDescription"
          />
          <NuxtLink
            v-if="page.spakCode"
            class="catalog-link"
            :to="catalogLink"
          >
            See all items purchased through this Endowment
          </NuxtLink>
        </div>

        <ResponsiveImage
          v-if="page.heroImage.length > 0"
          :media="parsedImage"
          class="bookplate"
        />
      </div>
    </SectionWrapper> -->

<!-- GLOBAL CALLTOACTION -->
    <SectionWrapper>
      <BlockCallToAction
        class="block-call-to-action"
        :is-global="true"
      />
      <!-- <BlockCallToActionTwoUp
        :items="items"
      /> -->
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

