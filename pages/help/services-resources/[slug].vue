<script setup>
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
    statusCode: 404, statusMessage: 'Page not found.' + error.value, fatal: true
  })
}

if (!data.value.serviceOrResource && !data.value.workshopSeries) {
  error({ statusCode: 404, message: 'Page not found', fatal: true })
}

/* TODO: Incorporate when search functionality is ready? */
//
// if (data) {
//   /*console.log(
//       "Is it workshop or service or resource Indexing slug: " +
//           params.slug
//   )*/
//   if (data.workshopSeries) {
//     data.workshopSeries.sectionHandle = "workshopSeries"
//     data.workshopSeries.serviceOrResourceType = "workshop series"
//     /*console.log(
//         "what is workshopseries sectionHandle in ES? " +
//             data.workshopSeries.sectionHandle
//     )*/
//   }
//   await $elasticsearchplugin.index(
//     data.serviceOrResource || data.workshopSeries,
//     params.slug
//   )
// }

if (process.server) {
  const { $elasticsearchplugin } = useNuxtApp()
  if (data.value.workshopSeries) {
    data.value.workshopSeries.sectionHandle = 'workshopSeries'
    data.value.workshopSeries.serviceOrResourceType = 'workshop series'
  }
  await $elasticsearchplugin?.index(data.value.serviceOrResource || data.value.workshopSeries, route.params.slug)
}

const page = ref(data.value)
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
      <nav-breadcrumb
        to="/help/services-resources"
        :title="page.serviceOrResource.title"
        parent-title="Services & Resources"
      />

      <banner-text
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

      <section-wrapper
        v-if="
          page.serviceOrResource.heroImage &&
            page.serviceOrResource.heroImage.length == 1 &&
            page.serviceOrResource.heroImage[0].image &&
            page.serviceOrResource.heroImage[0].image.length > 0
        "
        class="section-banner"
      >
        <banner-header
          :media="page.serviceOrResource.heroImage[0].image[0]"
          :category="page.serviceOrResource.type"
          :title="page.serviceOrResource.title"
          :text="page.serviceOrResource.text"
          :prompt="parsedButtonText"
          :to="parsedButtonTo"
        />
      </section-wrapper>

      <section-wrapper theme="divider">
        <divider-way-finder />
      </section-wrapper>

      <page-anchor
        v-if="h2Array.length >= 3"
        :section-titles="h2Array"
      />

      <flexible-blocks
        class="content"
        :blocks="page.serviceOrResource.blocks"
      />

      <section-wrapper
        v-if="parsedServiceResourceAssociatedTopics.length"
        theme="divider"
      >
        <divider-way-finder
          class="divider-way-finder"
          color="help"
        />
      </section-wrapper>

      <section-wrapper>
        <section-cards-with-illustrations
          v-if="parsedServiceResourceAssociatedTopics.length"
          class="section-cards"
          :items="parsedServiceResourceAssociatedTopics"
          section-title="Associated Topics"
          button-text="All Services and Resources"
          to="/help/services-resources"
        />
      </section-wrapper>

      <section-wrapper theme="divider">
        <divider-way-finder
          class="divider-way-finder"
          color="help"
        />
      </section-wrapper>

      <section-wrapper>
        <block-call-to-action
          class="block-call-to-action"
          :is-global="true"
        />
      </section-wrapper>
    </div>

    <!-- WORKSHOP SERIES -->
    <div v-else>
      <nav-breadcrumb
        to="/help/services-resources"
        :title="page.workshopSeries.title"
        parent-title="Services & Resources"
      />

      <banner-text
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

      <section-wrapper
        v-if="
          page.workshopSeries.image &&
            page.workshopSeries.image.length == 1 &&
            page.workshopSeries.image[0].image &&
            page.workshopSeries.image[0].image.length > 0
        "
        class="section-banner"
      >
        <banner-header
          :media="page.workshopSeries.image[0].image[0]"
          :title="page.workshopSeries.title"
          :locations="page.workshopSeries.associatedLocations"
          :start-date="page.workshopSeries.startDate"
          :end-date="page.workshopSeries.endDate"
          category="Workshop Series"
          :text="page.workshopSeries.summary"
          :align-right="true"
        />

        <section-wrapper theme="divider">
          <divider-way-finder color="help" />
        </section-wrapper>
      </section-wrapper>

      <flexible-blocks
        v-if="page.workshopSeries.blocks.length > 0"
        class="content"
        :blocks="page.workshopSeries.blocks"
      />

      <section-wrapper
        v-if="page.workshopSeries.blocks.length > 0"
        theme="divider"
      >
        <divider-way-finder
          class="divider-way-finder"
          color="help"
        />
      </section-wrapper>

      <section-wrapper
        v-if="upcomingEvents.length"
        section-title="Upcoming Workshops in this Series"
      >
        <section-teaser-list
          v-if="upcomingEvents"
          :items="upcomingEvents"
          class="section section-list"
        />
        <divider-general v-if="pastEvents.length" />
      </section-wrapper>

      <section-wrapper
        v-if="pastEvents.length"
        section-title="Past Workshops in this Series"
      >
        <section-teaser-list
          v-if="pastEvents"
          :items="pastEvents"
          class="section section-list"
        />
      </section-wrapper>

      <section-wrapper
        v-if="page.upcomingEvents.length || page.pastEvents.length"
        theme="divider"
      >
        <divider-way-finder
          class="divider-way-finder"
          color="help"
        />
      </section-wrapper>

      <section-wrapper
        v-if="parsedAssociatedSeries.length"
        section-title="Related Series"
      >
        <section-teaser-list :items="parsedAssociatedSeries" />
      </section-wrapper>

      <section-wrapper
        v-if="parsedAssociatedSeries.length"
        theme="divider"
      >
        <divider-way-finder
          class="divider-way-finder"
          color="help"
        />
      </section-wrapper>

      <section-wrapper>
        <section-cards-with-illustrations
          v-if="parsedWorkshopSeriesAssociatedTopics.length > 0"
          class="section-cards"
          :items="parsedWorkshopSeriesAssociatedTopics"
          section-title="Associated Topics"
        />
      </section-wrapper>

      <section-wrapper>
        <block-call-to-action
          class="block-call-to-action"
          :is-global="true"
        />
      </section-wrapper>
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
