<script setup>
// COMPONENTS
import { NavBreadcrumb, BannerText, BannerHeader, SectionTeaserList, SectionWrapper, BlockCallToAction, DividerWayFinder, PageAnchor, FlexibleBlocks, SectionCardsWithIllustrations } from 'ucla-library-website-components'

import { onMounted } from 'vue'

// HELPERS
import _get from 'lodash/get'
import removeTags from '../utils/removeTags'

// GQL
import SERVICE_OR_RESOURCE_OR_WORKSHOPSERIES_DETAIL from '../gql/queries/ServiceOrResourceOrWorkshopDetail.gql'

const { $graphql, $getHeaders } = useNuxtApp()
const route = useRoute()

const { data, error } = await useAsyncData(`services-resources-detail-${route.params.slug}`, async () => {
  const data = await $graphql.default.request(SERVICE_OR_RESOURCE_OR_WORKSHOPSERIES_DETAIL, { slug: route.params.slug, })

  return data
})

if (error.value) {
  throw createError({
    ...error.value, statusMessage: 'Page not found.' + error.value, fatal: true
  })
}

if (!data.value.serviceOrResource && !data.value.workshopSeries) {
  throw createError({ statusCode: 404, message: 'Page not found', fatal: true })
}

if (import.meta.server) {
  const { $elasticsearchplugin } = useNuxtApp()
  if (data.value.workshopSeries) {
    data.value.workshopSeries.sectionHandle = 'workshopSeries'
    data.value.workshopSeries.serviceOrResourceType = 'workshop series'
  }
  await $elasticsearchplugin?.index(data.value.serviceOrResource || data.value.workshopSeries, route.params.slug)
}

const page = ref(data.value)
watch(data, (newVal, oldVal) => {
  // console.log('In watch preview enabled, newVal, oldVal', newVal, oldVal)
  page.value = newVal
})

const h2Array = ref([]) // anchor tags

if (page.value) {
  if (page.value.serviceOrResource) {
    useHead({
      title: page.value
        ? page.value.serviceOrResource.title
        : '... loading',
      meta: [{
        hid: 'description',
        name: 'description',
        content: removeTags(
          page.value.serviceOrResource.text)
      }]
    })
  }

  if (page.value.workshopSeries) {
    useHead({
      title: page.value
        ? page.value.workshopSeries.title
        : '... loading',
      meta: [{
        hid: 'description',
        name: 'description',
        content: removeTags(
          page.value.workshopSeries.summary)
      }]
    })
  }
}

// Computed
const parsedServiceResourceAssociatedTopics = computed(() => {
  if (!page.value.serviceOrResource.associatedTopics) return []
  return page.value.serviceOrResource.associatedTopics.map((obj) => {
    return {
      ...obj,
      to: obj.externalResourceUrl
        ? obj.externalResourceUrl
        : `/${obj.uri}`,
    }
  })
})

const parsedWorkshopSeriesAssociatedTopics = computed(() => {
  return page.value.workshopSeries.associatedTopics.map((obj) => {
    return {
      ...obj,
      to: obj.externalResourceUrl
        ? obj.externalResourceUrl
        : `/${obj.uri}`,
    }
  })
})

const parsedButtonText = computed(() => {
  return _get(page.value.serviceOrResource, 'buttonUrl[0].buttonText', '')
})

const parsedButtonTo = computed(() => {
  return _get(page.value.serviceOrResource, 'buttonUrl[0].buttonUrl', '')
})

const associatedEvents = computed(() => {
  return page.value.workshopSeries.event.map((obj) => {
    return {
      ...obj,
      to: `/${obj.uri}`,
      image: _get(obj, 'image[0].image[0]', null),
      startDate: _get(obj, 'startDateWithTime', null),
      endDate: _get(obj, 'endDateWithTime', null),
      category: _get(obj, 'category.title', ''),
    }
  })
})

const upcomingEvents = computed(() => {
  return page.value.upcomingEvents.map((obj) => {
    return {
      ...obj,
      to: `/${obj.uri}`,
      image: _get(obj, 'image[0].image[0]', null),
      startDate: _get(obj, 'startDateWithTime', null),
      endDate: _get(obj, 'endDateWithTime', null),
      category: _get(obj, 'category[0].title', ''),
      locations:
        obj.associatedLocations[0] != null
          ? obj.associatedLocations
          : obj.eventLocation,
    }
  })
})

const pastEvents = computed(() => {
  return page.value.pastEvents.map((obj) => {
    return {
      ...obj,
      to: `/${obj.uri}`,
      image: _get(obj, 'image[0].image[0]', null),
      startDate: _get(obj, 'startDateWithTime', null),
      endDate: _get(obj, 'endDateWithTime', null),
      category: _get(obj, 'category[0].title', ''),
      locations:
        obj.associatedLocations[0] != null
          ? obj.associatedLocations
          : obj.eventLocation,
    }
  })
})

const parsedAssociatedSeries = computed(() => {
  return page.value.associatedSeries.map((obj) => {
    return {
      ...obj,
      to: `/${obj.to}`,
      image: _get(obj, 'image[0].image[0]', null),
      category: 'Workshop Series',
    }
  })
})

onMounted(() => {
  // Call the plugin method to get the .section-header2 and .section-header3 elements
  h2Array.value = $getHeaders.getHeadersMethod()
})

</script>

<template>
  <main
    id="main"
    class="page page-service-detail"
  >
    <!-- ServiceOrResource Detail -->
    <div v-if="page.serviceOrResource">
      <NavBreadcrumb
        to="/help/services-resources/"
        :title="page.serviceOrResource.title"
        parent-title="Services & Resources"
      />

      <BannerText
        v-if="
          !page.serviceOrResource.heroImage ||
          page.serviceOrResource.heroImage.length == 0 ||
          !page.serviceOrResource.heroImage[0].image ||
          page.serviceOrResource.heroImage[0].image.length == 0
        "
        class="banner-text"
        :category="page.serviceOrResource.type"
        :title="page.serviceOrResource.title"
        :text="page.serviceOrResource.text"
        :button-text="parsedButtonText"
        :to="parsedButtonTo"
      />

      <SectionWrapper
        v-if="
          page.serviceOrResource.heroImage &&
          page.serviceOrResource.heroImage.length == 1 &&
          page.serviceOrResource.heroImage[0].image &&
          page.serviceOrResource.heroImage[0].image.length > 0
        "
        class="section-banner"
      >
        <BannerHeader
          :media="page.serviceOrResource.heroImage[0].image[0]"
          :category="page.serviceOrResource.type"
          :title="page.serviceOrResource.title"
          :text="page.serviceOrResource.text"
          :prompt="parsedButtonText"
          :to="parsedButtonTo"
        />
      </SectionWrapper>

      <SectionWrapper theme="divider">
        <DividerWayFinder />
      </SectionWrapper>

      <PageAnchor
        v-if="h2Array.length >= 3"
        :section-titles="h2Array"
      />

      <FlexibleBlocks
        class="content"
        :blocks="page.serviceOrResource.blocks"
      />

      <SectionWrapper
        v-if="parsedServiceResourceAssociatedTopics.length"
        theme="divider"
      >
        <DividerWayFinder
          class="divider-way-finder"
          color="help"
        />
      </SectionWrapper>

      <SectionWrapper>
        <SectionCardsWithIllustrations
          v-if="parsedServiceResourceAssociatedTopics.length"
          class="section-cards"
          :items="parsedServiceResourceAssociatedTopics"
          section-title="Associated Topics"
          button-text="All Services and Resources"
          to="/help/services-resources/"
        />
      </SectionWrapper>

      <SectionWrapper theme="divider">
        <DividerWayFinder
          class="divider-way-finder"
          color="help"
        />
      </SectionWrapper>

      <SectionWrapper>
        <BlockCallToAction
          class="block-call-to-action"
          :is-global="true"
        />
      </SectionWrapper>
    </div>

    <!-- WORKSHOP SERIES -->
    <div v-else>
      <NavBreadcrumb
        to="/help/services-resources/"
        :title="page.workshopSeries.title"
        parent-title="Services & Resources"
      />

      <BannerText
        v-if="
          page.workshopSeries &&
          (page.workshopSeries.image.length == 0 ||
            !page.workshopSeries.image[0].image ||
            page.workshopSeries.image[0].image.length == 0)
        "
        :title="page.workshopSeries.title"
        :text="page.workshopSeries.summary"
        :locations="page.workshopSeries.associatedLocations"
        :start-date="page.workshopSeries.startDate"
        :end-date="page.workshopSeries.endDate"
        category="Workshop Series"
      />

      <SectionWrapper
        v-if="
          page.workshopSeries.image &&
          page.workshopSeries.image.length == 1 &&
          page.workshopSeries.image[0].image &&
          page.workshopSeries.image[0].image.length > 0
        "
        class="section-banner"
      >
        <BannerHeader
          :media="page.workshopSeries.image[0].image[0]"
          :title="page.workshopSeries.title"
          :locations="page.workshopSeries.associatedLocations"
          :start-date="page.workshopSeries.startDate"
          :end-date="page.workshopSeries.endDate"
          category="Workshop Series"
          :text="page.workshopSeries.summary"
          :align-right="true"
        />

        <SectionWrapper theme="divider">
          <DividerWayFinder color="help" />
        </SectionWrapper>
      </SectionWrapper>

      <FlexibleBlocks
        v-if="page.workshopSeries.blocks.length > 0"
        class="content"
        :blocks="page.workshopSeries.blocks"
      />

      <SectionWrapper
        v-if="page.workshopSeries.blocks.length > 0"
        theme="divider"
      >
        <DividerWayFinder
          class="divider-way-finder"
          color="help"
        />
      </SectionWrapper>

      <SectionWrapper
        v-if="upcomingEvents.length"
        section-title="Upcoming Workshops in this Series"
      >
        <SectionTeaserList
          v-if="upcomingEvents"
          :items="upcomingEvents"
          class="section section-list"
        />
        <DividerGeneral v-if="pastEvents.length" />
      </SectionWrapper>

      <SectionWrapper
        v-if="pastEvents.length"
        section-title="Past Workshops in this Series"
      >
        <SectionTeaserList
          v-if="pastEvents"
          :items="pastEvents"
          class="section section-list"
        />
      </SectionWrapper>

      <SectionWrapper
        v-if="page.upcomingEvents.length || page.pastEvents.length"
        theme="divider"
      >
        <DividerWayFinder
          class="divider-way-finder"
          color="help"
        />
      </SectionWrapper>

      <SectionWrapper
        v-if="parsedAssociatedSeries.length"
        section-title="Related Series"
      >
        <SectionTeaserList :items="parsedAssociatedSeries" />
      </SectionWrapper>

      <SectionWrapper
        v-if="parsedAssociatedSeries.length"
        theme="divider"
      >
        <DividerWayFinder
          class="divider-way-finder"
          color="help"
        />
      </SectionWrapper>

      <SectionWrapper>
        <SectionCardsWithIllustrations
          v-if="parsedWorkshopSeriesAssociatedTopics.length > 0"
          class="section-cards"
          :items="parsedWorkshopSeriesAssociatedTopics"
          section-title="Associated Topics"
        />
      </SectionWrapper>

      <SectionWrapper>
        <BlockCallToAction
          class="block-call-to-action"
          :is-global="true"
        />
      </SectionWrapper>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.page-service-detail {
  .more-info {
    @include visually-hidden;
  }
}
</style>
