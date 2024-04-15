<!-- eslint-disable no-console -->
<script setup>
// HELPERS
import _get from 'lodash/get'
import removeTags from '../utils/removeTags'

// GQL
import EVENT_DETAIL from '../gql/queries/EventDetail.gql'

const config = useRuntimeConfig()

const { $graphql } = useNuxtApp()

const route = useRoute()

const { data, error } = await useAsyncData(`events-listing-detail-${route.params.slug}`, async () => {
  const data = await $graphql.default.request(EVENT_DETAIL, { slug: route.params.slug })

  console.log('test:', data)

  return data
})

if (error.value) {
  throw createError({
    statusCode: 404, statusMessage: 'Page not found.' + error.value, fatal: true
  })
}

if (!data.value.event && !data.value.eventSeries && !data.value.exhibition) {
  error({ statusCode: 404, message: 'Page not found', fatal: true })
}

if (process.server) {
  const { $elasticsearchplugin } = useNuxtApp()
  if (data.value.eventSeries) data.eventSeries.sectionHandle = 'eventSeries'
  if (data.value.event)
    data.value.event.locations = data.event.associatedLocations
  if (data.value.eventSeries)
    data.value.eventSeries.locations =
      data.value.eventSeries.associatedLocations
  if (data.value.exhibition)
    data.value.exhibition.locations =
      data.value.exhibition.associatedLocationsAndPrograms
  await $elasticsearchplugin?.index(data.value.event || data.value.eventSeries || data.value.exhibition, route.params.slug)
}

// console.log('test:', data.value.event.libcalOnlineSeats, data.value.event.libcalOnlineSeatsTaken)

// Data

const page = ref(data.value)
watch(data, (newVal, oldVal) => {
  console.log('In watch preview enabled, newVal, oldVal', newVal, oldVal)
  page.value = newVal
})

const allEvents = ref([])
// console.log('online?', Number(page.value.event.libcalOnlineSeats) - Number(page.value.event.libcalOnlineSeatsTaken))

const formData = ref({})
const formId = ref('')
const eventId = ref(page.value && page.value.event ? page.value.event.libcalId : '')
const inPersonEvent = ref(!!(page.value &&
  page.value.event &&
  Number(page.value.event.libcalPhysicalSeats) > 0 &&
  Number(page.value.event.libcalPhysicalSeats) >=
  Number(page.value.event.libcalPhysicalSeats) -
  Number(page.value.event.libcalPhysicalSeatsTaken)))
const onlineEvent = ref(!!(page.value &&
  page.value.event &&
  Number(page.value.event.libcalOnlineSeats) > 0 &&
  Number(page.value.event.libcalOnlineSeats) >=
  Number(page.value.event.libcalOnlineSeats) -
  Number(page.value.event.libcalOnlineSeatsTaken)))
const libcalWaitlist = ref(page.value && page.value.event && page.value.event.libcalWaitlist)
const libcalEndpointProxy = ref(config.public.libcalProxy)

// console.log('page variable:', page.value)
// console.log('allEvents variable:', allEvents.value)

console.log('eventId variable:', eventId.value)
console.log('formData variable:', formData.value)
console.log('formId variable:', formId.value)
console.log('eventId variable:', eventId.value)
console.log('inPersonEvent variable:', inPersonEvent.value)
console.log('onlineEvent variable:', onlineEvent.value)
console.log('libcalWaitlist variable:', libcalWaitlist.value)
console.log('libcalEndpointProxy variable:', libcalEndpointProxy.value)
console.log('in-person event', inPersonEvent.value)
console.log('online event', onlineEvent.value)
const providerEventId = computed(() => {
  // console.log("In provder for event id is called")
  return eventId.value
})
provide('eventId', providerEventId)
const injectEventId = inject('eventId')
// console.log("injectEventId", injectEventId)
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
// //console.log(
//     "In parse registration:" + this.page.event.requiresRegistration
// )

//  if requiresRegistration = 1 & libcalRegistrationOpened = 1 & libcalRegistrationClosed = null
//     then show registration button/form
//
const parseRegistration = computed(() => {
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
const providedFormData = computed(() => formData.value)
provide('blockFormData', providedFormData)
const { $scrapeApi } = useNuxtApp()
watch(formData, (newVal, oldVal) => {
  console.log('formdata is updated', newVal, oldVal)
})

onMounted(async () => {
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
    console.log('getting formid')
    const formDataArray = await $scrapeApi.scrapeFormId(
      page.value.event.libcalId
    ) // please check the fieldname in the query
    console.log('is this a promise:' + JSON.stringify(formDataArray.data.value))
    formData.value = formDataArray.data.value[0]
  }
})

</script>

<template lang="html">
  <main
    id="main"
    class="page page-event-detail"
  >
    <!-- EVENT DETAIL -->
    <div v-if="page.event">
      <nav-breadcrumb
        to="/visit/events-exhibitions"
        :title="page.event.title"
        parent-title="Events & Exhibitions"
      />

      <banner-text
        v-if="page.event &&
          (!page.event.image || !page.event.image[0] || !page.event.image[0].image || !page.event.image[0].image[0] ||
            page.event.image[0].image[0].length == 0)
        "
        :title="page.event.title"
        :locations="page.event.eventLocation"
        :start-date="page.event.startDateWithTime"
        :end-date="page.event.endDateWithTime"
        :category="parseEventType"
        :to="parseURL"
        :button-text="promptName"
        :register-event="parseRegistration"
        :section-handle="page.event.sectionHandle"
      />

      <section-wrapper
        v-if="page.event.image && page.event.image.length > 0 && page.event.image[0].image && page.event.image[0].image.length > 0 && page.event.image[0].image[0]"
        class="section-banner"
      >
        <banner-header
          :media="page.event.image[0].image[0]"
          :title="page.event.title"
          :locations="page.event.eventLocation"
          :start-date="page.event.startDateWithTime"
          :end-date="page.event.endDateWithTime"
          :category="parseEventType"
          :to="parseURL"
          :align-right="true"
          :prompt="promptName"
          :register-event="parseRegistration"
          :section-handle="page.event.sectionHandle"
        />
      </section-wrapper>

      <section-wrapper theme="divider">
        <divider-way-finder
          v-if="page.event.image && page.event.image.length > 0 && page.event.image[0].image && page.event.image[0].image[0]"
          color="visit"
        />
      </section-wrapper>
      <section-wrapper v-if="page.event || page.event.eventDescription">
        <rich-text
          v-if="page.event.presenter"
          :rich-text-content="page.event.presenter"
          class="presenter"
        />
        <rich-text :rich-text-content="page.event.eventDescription" />
        <divider-general v-if="page.event.moreInformation" />
        <rich-text
          v-if="page.event.moreInformation"
          :rich-text-content="page.event.moreInformation"
        />
      </section-wrapper>

      <section-wrapper
        v-if="parsedAssociatedSeries.length"
        theme="divider"
      >
        <divider-way-finder color="visit" />
      </section-wrapper>

      <section-wrapper
        v-if="parsedAssociatedSeries.length"
        section-title="Related Series"
      >
        <section-teaser-list :items="parsedAssociatedSeries" />
      </section-wrapper>
      <section-wrapper theme="divider">
        <divider-way-finder color="visit" />
      </section-wrapper>

      <block-call-to-action
        class="section block-call-to-action"
        :is-global="true"
      />
    </div>

    <!-- EVENT SERIES -->
    <div v-else-if="page.eventSeries">
      <nav-breadcrumb
        to="/visit/events-exhibitions"
        :title="page.eventSeries.title"
        parent-title="Events & Exhibitions"
      />

      <banner-text
        v-if="page.eventSeries && !page.eventSeries.image[0]"
        :title="page.eventSeries.title"
        :text="page.eventSeries.summary"
        :locations="parsedEventSeriesLocations"
        :start-date="page.eventSeries.startDate"
        :end-date="page.eventSeries.endDate"
        category="Event Series"
      />

      <section-wrapper
        v-if="page.eventSeries.image[0]"
        class="section-banner"
      >
        <banner-header
          :media="page.eventSeries.image[0].image[0]"
          :title="page.eventSeries.title"
          :locations="parsedEventSeriesLocations"
          category="Event Series"
          :text="page.eventSeries.summary"
          :start-date="page.eventSeries.startDate"
          :end-date="page.eventSeries.endDate"
          :align-right="true"
        />
      </section-wrapper>

      <section-wrapper theme="divider">
        <divider-way-finder
          v-if="page.eventSeries.image"
          color="visit"
        />
      </section-wrapper>

      <flexible-blocks
        class="content"
        :blocks="page.eventSeries.blocks"
      />

      <section-wrapper
        v-if="page.eventSeries.blocks.length > 0"
        theme="divider"
      >
        <divider-way-finder
          class="divider-way-finder"
          color="visit"
        />
      </section-wrapper>

      <section-wrapper
        v-if="upcomingEvents.length"
        section-title="Upcoming Events in this Series"
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
        section-title="Past Events in this Series"
      >
        <section-teaser-list
          v-if="pastEvents"
          :items="pastEvents"
          class="section section-list"
        />
      </section-wrapper>

      <section-wrapper
        v-if="page.eventSeries.associatedTopics.length > 0"
        theme="divider"
      >
        <divider-way-finder
          class="divider-way-finder"
          color="visit"
        />
      </section-wrapper>

      <section-wrapper>
        <section-cards-with-illustrations
          v-if="parsedAssociatedTopics.length > 0"
          class="section-cards"
          :items="parsedAssociatedTopics"
          section-title="Associated Topics"
        />
      </section-wrapper>

      <section-wrapper theme="divider">
        <divider-way-finder
          class="divider-way-finder"
          color="visit"
        />
      </section-wrapper>

      <block-call-to-action
        class="section block-call-to-action"
        :is-global="true"
      />
    </div>

    <!-- EXHIBITION -->
    <div v-else>
      <nav-breadcrumb
        to="/visit/events-exhibitions"
        :title="page.exhibition.title"
        parent-title="Events & Exhibitions"
      />

      <banner-text
        v-if="page.exhibition && !page.exhibition.image[0]"
        :title="page.exhibition.title"
        :text="page.exhibition.summary"
        :locations="parsedExhibitionLocations"
        :to="parsedExhibitionBannerTo"
        :banner-text="parsedExhibitionBannerPrompt"
        :start-date="page.exhibition.startDate"
        :end-date="page.exhibition.endDate"
        category="Exhibition"
      />

      <section-wrapper
        v-if="page.exhibition.image[0]"
        class="section-banner"
      >
        <banner-header
          :media="page.exhibition.image[0].image[0]"
          :title="page.exhibition.title"
          :locations="parsedExhibitionLocations"
          category="Exhibition"
          :text="page.exhibition.summary"
          :align-right="true"
          :start-date="page.exhibition.startDate"
          :end-date="page.exhibition.endDate"
          :prompt="parsedExhibitionBannerPrompt"
          :to="parsedExhibitionBannerTo"
        />
      </section-wrapper>

      <section-wrapper theme="divider">
        <divider-way-finder color="visit" />
      </section-wrapper>

      <flexible-blocks
        class="content"
        :blocks="page.exhibition.blocks"
      />

      <section-wrapper
        v-if="page.exhibition.blocks.length > 0"
        theme="divider"
      >
        <divider-way-finder color="visit" />
      </section-wrapper>

      <section-wrapper
        v-if="associatedExhibitionEvents.length"
        section-title="Associated Events"
      >
        <section-teaser-list
          v-if="associatedExhibitionEvents.length > 0"
          :items="associatedExhibitionEvents"
          class="section section-list"
        />
      </section-wrapper>

      <section-wrapper
        v-if="associatedExhibitionEvents.length > 0"
        theme="divider"
      >
        <divider-way-finder color="visit" />
      </section-wrapper>

      <section-wrapper
        v-if="parsedAssociatedStaffMember.length > 0"
        section-title="Contact a Subject Specialist"
      >
        <section-staff-list :items="parsedAssociatedStaffMember" />
      </section-wrapper>

      <section-wrapper
        v-if="parsedAssociatedStaffMember.length > 0"
        theme="divider"
      >
        <divider-way-finder color="visit" />
      </section-wrapper>

      <section-wrapper :section-title="parsedAcknowledgementTitle">
        <rich-text
          :rich-text-content="page.exhibition.acknowledgements[0].acknowledgements
          "
        />
      </section-wrapper>
    </div>
  </main>
</template>
