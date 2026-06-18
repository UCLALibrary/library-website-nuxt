<script setup>
// COMPONENTS
//  import { NavBreadcrumb, BannerText, BannerHeader, SectionTeaserList, SectionWrapper, BlockCallToAction, DividerWayFinder, DividerGeneral, PageAnchor, FlexibleBlocks, SectionCardsWithIllustrations } from '@ucla-library-monorepo/ucla-library-website-components'

//  import { onMounted } from 'vue'

// HELPERS
import _get from 'lodash/get'
import { useWindowSize } from '@vueuse/core'
import SERVICE_OR_RESOURCE_OR_WORKSHOPSERIES_DETAIL from '../gql/queries/ServiceOrResourceOrWorkshopDetail.gql'
import removeTags from '@/utils/removeTags'

// GQL

const { $graphql, $getHeaders } = useNuxtApp()
const route = useRoute()
const { hasCTA } = useAskALibrarianCTA()
const isEquipmentLendingRoute = computed(() => {
  return route.path === '/help/services-resources/equipment-lending'
    || route.path === '/help/services-resources/equipment-lending/'
})

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

if (import.meta.prerender) {
  const { index } = useIndexer()
  if (data.value.workshopSeries) {
    data.value.workshopSeries.sectionHandle = 'workshopSeries'
    data.value.workshopSeries.serviceOrResourceType = 'workshop series'
  }
  await index(data.value.serviceOrResource || data.value.workshopSeries, route.params.slug)
}

const page = ref(data.value)
watch(data, (newVal, oldVal) => {
  // console.log('In watch preview enabled, newVal, oldVal', newVal, oldVal)
  page.value = newVal
})

// START CLICC TABLE DATA
const cliccSectionTitle = 'CLICC Device Availability'
const cliccSectionSummary = 'Is my CLICC device available? Current availability of devices. Every location also has various accessories.'
const cliccDevicesTableHeaders = ['Locations', 'Chromebook', 'iPad', 'Macbook']
const cliccDevicesData = ref(null)
const clickLocationURLLookup = {
  Powell: { displayName: 'Powell Library', url: '/visit/locations/powell-library/' },
  YRL: { displayName: 'Young Research Library', url: '/visit/locations/research-library/' },
}
// fetch data from the CLICC devices API
// const refreshCliccDevicesData = async () => {
//   try {
//     cliccDevicesError.value = null
//     cliccDevicesData.value = await $fetch('/api/clicc-devices', {
//       cache: 'no-store',
//       headers: {
//         'cache-control': 'no-cache',
//       },
//     })
//   }
//   catch (err) {
//     cliccDevicesError.value = err
//   }
// }
// reformat data when on mobile
const mobileBreakpoint = 750
const { width, height } = useWindowSize()
const isMobile = computed(() => {
  if (!width.value) return false
  return width.value < mobileBreakpoint
})
// END CLICC TABLE DATA

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

  $fetch('https://clicc-devices.library.ucla.edu/devices/').then((data) => {
    console.log('cliccDevicesData', data)
    cliccDevicesData.value = data
  })
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

      <!-- TODO: CLICC table here only on /help/services-resources/equipment-lending/ route -->
      <!-- TODO: needs to match with or without the / at the end of the route -->
      <SectionWrapper
        v-if="isEquipmentLendingRoute && cliccDevicesData"
        :section-title="cliccSectionTitle"
        :section-summary="cliccSectionSummary"
      >
        <TableComponent
          class="clicc-table"
          :table-headers="cliccDevicesTableHeaders"
        >
          <TableRow
            v-for="value, keyname in cliccDevicesData"
            :key="keyname"
            :num-cells="4"
          >
            <template #column1>
              <a :href="clickLocationURLLookup[keyname].url">{{ clickLocationURLLookup[keyname].displayName }}</a>
            </template>
            <template #column2>
              {{ value.Chromebook }} {{ isMobile ? 'Chromebooks' : '' }}
            </template>
            <template #column3>
              {{ value.iPad }} {{ isMobile ? 'iPads' : '' }}
            </template>
            <template #column4>
              {{ value.Macbook }} {{ isMobile ? 'Macbooks' : '' }}
            </template>
          </TableRow>
        </TableComponent>
      </SectionWrapper>

      <FlexibleBlocks
        class="
        content"
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
          v-if="hasCTA"
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
          v-if="hasCTA"
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

// CLICC TABLE STYLES
.clicc-table {
  a {
    text-decoration: underline;
    text-decoration-color: var(--color-secondary-blue-02);

    &:hover,
    &:focus {
      color: var(--color-primary-blue-03);
    }
  }

  :deep(td) {
    display: table-cell;
    padding: .75em 0;

    &:first-child {
      padding-left: 0;
    }

    &:not(:first-child) {
      align-items: center;
      text-align: center;
      font-size: 20px;
      line-height: 1.6;
    }
  }

  :deep(table.table-component) {
    tr {
      &:first-child td {
        padding: .75em 0;
      }

      th {
        width: auto;
        padding: .75em;

        &:first-child {
          padding-left: 0;
        }

        &:not(:first-child) {
          text-align: center;
        }
      }
    }
  }
}
</style>
