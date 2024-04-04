<script setup>
// HELPERS
import _get from 'lodash/get'
import removeTags from '../utils/removeTags'

// GQL
import LOCATION_DETAIL from '../gql/queries/LocationDetail.gql'

const { $graphql } = useNuxtApp()

const route = useRoute()

const { data, error } = await useAsyncData('locations-detail', async () => {
  const data = await $graphql.default.request(LOCATION_DETAIL, {
    slug: route.params.slug
  })

  /* TODO: Incorporate when search functionality is ready? */
  // if (data) await $elasticsearchplugin.index(data.entry, params.slug)

  return data
})

if (error.value) {
  throw createError({
    statusCode: 404, statusMessage: 'Page not found.' + error.value, fatal: true
  })
}

if (!data.value.entry) {
  // console.log('no data')
  throw createError({
    statusCode: 404,
    statusMessage: 'Page Not Found'
  })
}

const page = ref(_get(data.value, 'entry', {}))
const associatedArticles = ref(_get(data.value, 'associatedArticles', {}))
const associatedExhibitions = ref(_get(data.value, 'associatedExhibitions', {}))
const associatedEndowments = ref(_get(data.value, 'associatedEndowments', {}))
const associatedEvents = ref(_get(data.value, 'associatedEvents', {}))
let h2Array = ref([]) // anchor tags

useHead({
  title: page.value ? page.value.title : '... loading',
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: removeTags(page.value.text)
    },
  ]
})

const parsedStaffDirectory = computed(() => {
  if (
    page.value.locationType !== 'affiliateLibrary' &&
    page.value.title.length > 0
  ) {
    const searchLibrary = page.value.title
    const libConcat =
      '/about/staff?q=&filters={"locations.title.keyword":["' +
      encodeURIComponent(searchLibrary) +
      '"]}'

    return libConcat
  } else {
    return ''
  }
})

const parsedAddress = computed(() => {
  if (page.value.address.length && page.value.address[0].addressLine2) {
    return (
      page.value.address[0].addressLine1 +
      '\n' +
      page.value.address[0].addressLine2 +
      '\n' +
      page.value.address[0].addressCity +
      ', ' +
      page.value.address[0].addressState +
      ' ' +
      page.value.address[0].addressZipCode
    )
  } else if (page.value.address.length) {
    return (
      page.value.address[0].addressLine1 +
      '\n' +
      page.value.address[0].addressCity +
      ', ' +
      page.value.address[0].addressState +
      ' ' +
      page.value.address[0].addressZipCode
    )
  } else {
    return ''
  }
})

const addressLink = computed(() => {
  return `https://map.ucla.edu/?id=${page.value.campusMapId}&e=true`
})

const parsedSpaces = computed(() => {
  return page.value.space.map((obj) => {
    return {
      ...obj,
      buttonText:
        obj.reservationRequired === 'email'
          ? 'Email to Reserve'
          : 'Reserve',
      to:
        obj.reservationRequired === 'email'
          ? `mailto:${obj.mediatorEmail}`
          : obj.reservationUrl,
      location: obj.associatedLocations
        ? obj.associatedLocations[0]
        : '',
    }
  })
})

const parsedServicesAndResources = computed(() => {
  return page.value.resourceServiceWorkshop.map((obj) => {
    return {
      ...obj,
      to: obj.externalResourceUrl
        ? obj.externalResourceUrl
        : `/${obj.uri}`,
    }
  })
})

const parsedExhibtions = computed(() => {
  return associatedExhibitions.value.map((obj) => {
    return {
      ...obj,
      to: `/visit/events-exhibitions/${obj.slug}`,
      image: _get(obj, 'heroImage[0].image[0]', {}),
      text: _get(obj, 'summary', ''),
      startDate: _get(obj, 'startDate', ''),
      endDate: _get(obj, 'endDate', ''),
      category: 'Exhibition',
    }
  })
})

const parsedEvents = computed(() => {
  return associatedEvents.value.map((obj) => {
    return {
      ...obj,
      to: `/visit/events-exhibitions/${obj.slug}`,
      image: _get(obj, 'heroImage[0].image[0]', null),
      text: _get(obj, 'eventDescription', ''),
      startDate: _get(obj, 'startDateWithTime', ''),
      endDate: _get(obj, 'endDateWithTime', ''),
      category: _get(obj, 'eventType[0].title', ''),
    }
  })
})

const mergeSortEventsExhibitions = computed(() => {
  return parsedExhibtions.value.concat(parsedEvents.value)
  // .sort((b, a) =>
  //     a.startDate > b.startDate
  //         ? -1
  //         : b.startDate > a.startDate
  //             ? 1
  //             : 0
  // )
})

const { $getHeaders } = useNuxtApp()

onMounted(() => {
  // Call the plugin method to get the .section-header2 and .section-header3 elements
  h2Array = $getHeaders.getHeadersMethod()
})
</script>

<template lang="html">
  <main class="page page-location-detail">
    <nav-breadcrumb
      to="/visit/locations"
      :title="page.title"
      parent-title="Locations"
    />

    <banner-text
      v-if="!page.heroImage || page.heroImage.length === 0"
      class="banner-text"
      :title="page.title"
      :text="page.text"
      :address="parsedAddress"
      :email="page.email"
      :phone="page.phoneNumber"
      :address-link="addressLink"
      :staff-directory-link="parsedStaffDirectory"
    />

    <section-wrapper
      v-if="page.heroImage && page.heroImage.length === 1"
      class="section-banner"
    >
      <banner-header
        :media="page.heroImage[0].image[0]"
        :title="page.title"
        :text="page.text"
        :address="parsedAddress"
        :email="page.email"
        :phone="page.phoneNumber"
        :staff-directory-link="parsedStaffDirectory"
        :address-link="addressLink"
      />
    </section-wrapper>

    <section-wrapper theme="divider">
      <divider-way-finder
        v-if="page.libcalLocationIdForHours ||
        page.amenitiesIcons.length ||
        parsedSpaces.length
        "
        class="divider-way-finder"
        color="visit"
      />
    </section-wrapper>

    <page-anchor
      v-if="h2Array.length >= 2"
      :section-titles="h2Array"
    />

    <!-- HOURS -->
    <section-wrapper
      v-if="page.libcalLocationIdForHours ||
        page.amenitiesIcons.length ||
        parsedSpaces.length"
      section-title="Using the Library"
      :section-summary="page.howToGetHere"
    >
      <block-hours
        v-if="page.libcalLocationIdForHours"
        :lid="page.libcalLocationIdForHours"
      />

      <!-- AMENITIES -->
      <divider-general
        v-if="page.amenitiesIcons.length"
        class="divider-general"
      />

      <block-amenities
        v-if="page.amenitiesIcons.length"
        :amenities="page.amenitiesIcons"
        class="amenities"
      />

      <!-- SPACES -->
      <divider-general
        v-if="parsedSpaces.length"
        class="divider-general"
      />

      <section-spaces-list
        v-if="parsedSpaces.length"
        class="section-block-spaces"
        :items="parsedSpaces"
      />
    </section-wrapper>

    <!-- SERVICES & RESOURCES -->
    <section-wrapper theme="divider">
      <divider-way-finder
        v-if="page.resourceServiceWorkshop.length"
        class="divider-way-finder"
        color="visit"
      />
    </section-wrapper>

    <section-wrapper
      v-if="page.resourceServiceWorkshop.length"
      class="services-and-resources"
      section-title="Services &amp; Resources"
    >
      <simple-cards :items="parsedServicesAndResources" />
      <nuxt-link
        v-if="page.resourceServiceWorkshop.length"
        class="button-more"
        to="/help/services-resources"
      >
        <button-more text="See All Services & Resources" />
      </nuxt-link>
    </section-wrapper>

    <!-- EXHIBITIONS -->
    <section-wrapper theme="divider">
      <divider-way-finder
        v-if="mergeSortEventsExhibitions.length"
        color="visit"
        class="divider-way-finder"
      />
    </section-wrapper>

    <section-wrapper
      v-if="mergeSortEventsExhibitions.length > 0"
      class="events-exhibitions"
      section-title="Events &amp; Exhibitions"
    >
      <section-teaser-list
        class="section-teaser-list"
        :items="mergeSortEventsExhibitions"
      />
    </section-wrapper>

    <!-- FPB - FLEXIBLE PAGE BLOCKS -->
    <section-wrapper theme="divider">
      <divider-way-finder
        v-if="page.blocks.length > 0"
        class="divider-way-finder"
        color="visit"
      />
    </section-wrapper>

    <flexible-blocks
      class="content"
      :blocks="page.blocks"
    />

    <!-- ABOUT -->
    <section-wrapper theme="divider">
      <divider-way-finder
        v-if="page.about"
        color="visit"
        class="divider-way-finder"
      />
    </section-wrapper>

    <section-wrapper
      v-if="page.about"
      class="about"
      section-title="About"
    >
      <rich-text
        class="about-text"
        :rich-text-content="page.about"
      />
    </section-wrapper>
  </main>
</template>

<style
  lang="scss"
  scoped
>
.page-location-detail {
  .section-header {
    margin: var(--space-xl) auto;
    max-width: $container-l-main + px;
  }

  .section-title {
    @include step-4;
    color: var(--color-primary-blue-03);
  }

  .section-summary {
    @include step-0;
    margin-top: var(--space-m);

    :deep(p) {
      margin: 0;
    }
  }

  .section-heading {
    @include step-4;
    color: var(--color-primary-blue-03);
    margin: var(--space-xl) auto;
    max-width: $container-l-main + px;
  }

  .section-teaser-list {
    margin: var(--space-xl) auto;
  }

  .block-hours,
  .button-more,
  .section-block-spaces,
  .amenities {
    margin: var(--space-2xl) auto;
  }

  .block-spaces {
    margin: 16px auto;
  }

  .campus-map {
    margin-bottom: var(--space-3xl);
  }

  .about-text {
    margin-bottom: var(--space-3xl);
  }

  .more-info {
    @include visually-hidden;
  }

  /* :deep(.flexible-block:last-child:not(.flexible-simple-cards)) {
      background: red;
   } */
  :deep(.section-banner) {
    .gradient-no-category {
      background: linear-gradient(120deg,
          rgba(15, 15, 15, 0) 0,
          rgba(15, 15, 15, 0.2509803922) 67.57%,
          #0f0f0f 120%);
    }
  }

  @media #{$small} {
    .page {
      width: 100%;
    }
  }
}
</style>
