<!-- eslint-disable no-console -->
<script setup>
// HELPERS
import _get from 'lodash/get'
import removeTags from '../utils/removeTags'

// GQL
import EVENT_DETAIL from '../gql/queries/EventDetail.gql'
import HEADER_MAIN_MENU_ITEMS from '../gql/queries/HeaderMainMenuItems.gql'

// vue: {
//   config: {
//     unwrapInjectedRef: true,
//         },
// }

const { $graphql, $config } = useNuxtApp()

const route = useRoute()

const { data, error } = await useAsyncData('events-listing-detail', async () => {
  const data = await $graphql.default.request(EVENT_DETAIL, { slug: route.params.slug })
  const navData = await $graphql.default.request(HEADER_MAIN_MENU_ITEMS)

  if (!data.event && !data.eventSeries && !data.exhibition) {
    error({ statusCode: 404, message: 'Page not found' })
  }

  // Elastic search ?
  // if (data && (data.event || data.exhibition || data.eventSeries)) {
  //   if (data.eventSeries) data.eventSeries.sectionHandle = "eventSeries"
  //   if (data.event)
  //     data.event.locations = data.event.associatedLocations
  //   if (data.eventSeries)
  //     data.eventSeries.locations =
  //       data.eventSeries.associatedLocations
  //   if (data.exhibition)
  //     data.exhibition.locations =
  //       data.exhibition.associatedLocationsAndPrograms
  //   await $elasticsearchplugin.index(
  //     data.event || data.exhibition || data.eventSeries,
  //     params.slug
  //   )
  // }

  return { data, navData }
})

console.log('Expecting data:', data.value.data)
console.log('Expecting navData:', data.value.navData)

// Data
const page = ref(data.value.data)
const allEvents = ref([])
const primaryItems = ref(_get(data.value.navData, 'primary', []))
const secondaryItems = ref(_get(data.value.navData, 'secondary', []))
let formData = ref({})
const formId = ref('')
const eventId = ref(data.value.data && data.value.event ? data.value.event.libcalId : '')
const inPersonEvent = ref(!!(data.value.data &&
  data.value.data.event && data.value.data.event.libcalPhysicalSeats > 0 &&
  data.value.data.event.libcalPhysicalSeats >=
  data.value.data.event.libcalPhysicalSeats -
  data.value.data.event.libcalPhysicalSeatsTaken),)
const onlineEvent = ref(!!(data.value.data &&
  data.value.data.event && data.value.data.event.libcalOnlineSeats > 0 &&
  data.value.data.event.libcalOnlineSeats >=
  data.value.data.event.libcalOnlineSeats -
  data.value.data.event.libcalOnlineSeatsTaken))
const libcalWaitlist = ref(data.value.data && data.value.data.event && data.value.data.event.libcalWaitlist)
const libcalEndpointProxy = ref($config.libcalProxy)

console.log('page variable:', page.value)
console.log('allEvents variable:', allEvents.value)
console.log('primaryItems variable:', primaryItems.value)
console.log('secondaryItems variable:', secondaryItems.value)
console.log('eventId variable:', eventId.value)
console.log('formData variable:', formData.value)
console.log('formId variable:', formId.value)
console.log('eventId variable:', eventId.value)
console.log('inPersonEvent variable:', inPersonEvent.value)
console.log('onlineEvent variable:', onlineEvent.value)
console.log('libcalWaitlist variable:', libcalWaitlist.value)
console.log('libcalEndpointProxy variable:', libcalEndpointProxy.value)

//
provide('eventId', computed(() => eventId.value))
provide('blockFormData', computed(() => formData.value))
provide('registrationType', computed(() => {
  if (inPersonEvent.value && !onlineEvent.value) return 'in-person'
  else if (!inPersonEvent.value && onlineEvent.value)
    return 'online'
  else if (inPersonEvent.value && onlineEvent.value) return 'both'
  else return ''
}))
provide('libcalWaitlist', computed(() => libcalWaitlist.value))
provide('libcalEndpoint', libcalEndpointProxy.value)

if (page.value) {
  if (page.value.event) {
    useHead({
      title: page.value ? page.value.event.title : '... loading',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: removeTags(
            page.value.event.eventDescription
          )
        }
      ]
    })
  }

  if (page.value.eventSeries) {
    useHead({
      title: page.value
        ? page.value.eventSeries.title
        : '... loading',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: removeTags(page.value.eventSeries.summary)
        }
      ]
    })
  }

  if (page.value.exhibition) {
    useHead({
      title: page.value
        ? page.value.exhibition.title
        : '... loading',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: removeTags(page.value.exhibition.summary)
        }
      ]
    })
  }
}

// Computed
const promptName = computed(() => {
  if (parseRegistration.value) return 'Register'
  else if (page.value.event && page.value.event.onlineJoinURL)
    return 'More Details'
  return null
})

const parseURL = computed(() => {
  return parseRegistration.value
    ? null
    : page.value.event.onlineJoinURL
})

const parseRegistration = computed(() => {
  // //console.log(
  //     "In parse registration:" + this.page.event.requiresRegistration
  // )
  /*
  if requiresRegistration = 1 & libcalRegistrationOpened = 1 & libcalRegistrationClosed = null
      then show registration button/form
  */
  if (
    page.value.event &&
    page.value.event.requiresRegistration === '1' &&
    page.value.event.libcalRegistrationOpened === '1' &&
    !page.value.event.libcalRegistrationClosed
  ) {
    return true
  }
  return false
})

const parseEventType = computed(() => {
  return page.value.event.eventType.length &&
    page.value.event.eventType[0].title
    ? page.value.event.eventType[0].title
    : ''
})

const parsedAssociatedSeries = computed(() => {
  return page.value.associatedSeries.map((obj) => {
    return {
      ...obj,
      to: `/${obj.to}`,
      image: _get(obj, 'image[0].image[0]', null),
      category: obj.workshopOrEventSeriesType ===
        'visit/events-exhibitions'
        ? 'Event Series'
        : 'Workshop Series',
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
      category: obj.category.length
        ? obj.category[0].title
        : null,
      locations: obj.associatedLocations[0] != null
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
      category: obj.category.length
        ? obj.category[0].title
        : null,
      locations: obj.associatedLocations[0] != null
        ? obj.associatedLocations
        : obj.eventLocation,
    }
  })
})

const parsedAssociatedTopics = computed(() => {
  if (!page.value.eventSeries.associatedTopics) return []
  return page.value.eventSeries.associatedTopics.map((obj) => {
    return {
      ...obj,
      to: obj.externalResourceUrl
        ? obj.externalResourceUrl
        : `/${obj.uri}`,
    }
  })
})

const parsedExhibitionBannerPrompt = computed(() => {
  return page.value.exhibition.buttonUrl.length
    ? page.value.exhibition.buttonUrl[0].buttonText
    : ''
})

const parsedExhibitionBannerTo = computed(() => {
  return page.value.exhibition.buttonUrl.length
    ? page.value.exhibition.buttonUrl[0].buttonUrl
    : ''
})

const associatedExhibitionEvents = computed(() => {
  return page.value.exhibition.exhibitsAndEvents.map((obj) => {
    return {
      ...obj,
      to: `/${obj.uri}`,
      image: _get(obj, 'image[0].image[0]', null),
      category: _get(obj, 'category[0].title', ''),
      startDate: _get(obj, 'startDateWithTime', null),
      endDate: _get(obj, 'startDateWithTime', null),
    }
  })
})

const parsedAssociatedStaffMember = computed(() => {
  return page.value.exhibition.associatedStaffMember.map((obj) => {
    return {
      ...obj,
      to: `/about/staff/${obj.to}`,
      image: _get(obj, 'image[0]', null),
      staffName: `${obj.nameFirst} ${obj.nameLast}`,
    }
  })
})

const parsedAcknowledgementTitle = computed(() => {
  return page.value.exhibition.acknowledgements[0]
    .displaySectionTitle === 'true'
    ? page.value.exhibition.acknowledgements[0].titleGeneral
    : ''
})

const parsedEventSeriesLocations = computed(() => {
  return page.value.eventSeries.associatedLocations.map((obj) => {
    return {
      ...obj,
      to: `/${obj.to}`,
    }
  })
})

const parsedExhibitionLocations = computed(() => {
  return page.value.exhibition.associatedLocationsAndPrograms.map((obj) => {
    return {
      ...obj,
      to: `/${obj.to}`,
    }
  })
})

onMounted(() => {
  // const formDataArray = await this.$scrapeApi.scrapeFormId("9383207")
  // //console.log(
  //     "in mounted is registration required :" +
  //         this.page.event.requiresRegistration
  // )
  // libcal events registration logic
  if (
    page.value.event &&
    page.value.event.requiresRegistration === '1' &&
    page.value.event.onlineProvider !== 'external'
  ) {
    // //console.log("getting formid")
    const formDataArray = $scrapeApi.scrapeFormId(
      page.value.event.libcalId
    ) // please check the fieldname in the query
    console.log('is this a promise:' + formDataArray)
    formDataArray.then((response) => {
      // //console.log(response)
      if (response && response.length === 1) {
        formData = response[0]
        // //console.log(
        //     "In mounted client side:" +
        //         JSON.stringify(this.formData)
        // )
      }
    })
  }
})

</script>

<template lang="html">
  <main
    id="main"
    class="page page-event-detail"
  >
    Hello
  </main>
</template>
