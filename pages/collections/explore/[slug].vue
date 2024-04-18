<script setup>
import { onMounted } from 'vue'

// HELPERS
import _get from 'lodash/get'
import fixUri from '../utils/fixUri'
import removeTags from '../utils/removeTags'

// GQL
import COLLECTION_DETAIL from '../gql/queries/CollectionDetail.gql'

const { $graphql, $getHeaders, $elasticsearchplugin } = useNuxtApp()

const route = useRoute()

const { data, error } = await useAsyncData(`collection-detail-${route.params.slug}`, async () => {
  const data = await $graphql.default.request(COLLECTION_DETAIL, {
    slug: route.params.slug,
  })

  return data
})

if (error.value) {
  throw createError({
    ...error.value, statusMessage: 'Page not found.' + error.value, fatal: true
  })
}

if (!data.value.entry) {
  throw createError({ statusCode: 404, message: 'Page not found', fatal: true })
}

if (data.value.entry.slug && process.server) {
  await $elasticsearchplugin.index(data.value.entry, route.params.slug)
}

const page = ref(_get(data.value, 'entry', {}))
const h2Array = ref([]) // anchor tags

watch(data, (newVal, oldVal) => {
  console.log('In watch preview enabled, newVal, oldVal', newVal, oldVal)
  page.value = _get(newVal, 'entry', {})
})

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

const parsedPhysicalDigital = computed(() => {
  return page.value.physicalDigital.length === 1
    ? page.value.physicalDigital[0]
    : `${page.value.physicalDigital[0]} & ${page.value.physicalDigital[1]}`
})

const parsedButtonText = computed(() => {
  return _get(page.value, 'buttonUrl[0].buttonText', '')
})

const parsedButtonTo = computed(() => {
  return _get(page.value, 'buttonUrl[0].buttonUrl', '')
})

const parsedSubjectAreas = computed(() => {
  return _get(page.value, 'subjectAreas', '')
})

const parsedServicesAndResources = computed(() => {
  const services = page.value.resourceServiceWorkshop
  return services.map((obj) => {
    return {
      ...obj,
      to: obj.externalResourceUrl
        ? obj.externalResourceUrl
        : `/${obj.to}`,
      title: _get(obj, 'title', ''),
      text: _get(obj, 'text', ''),
    }
  })
})

const parsedEndowments = computed(() => {
  if (page.value.endowment) {
    return page.value.endowment.map((obj, index) => {
      return {
        to: `/${obj.to}`,
        image: _get(obj, 'image[0].image[0]', null),
        title: _get(obj, 'title', ''),
        description: _get(obj, 'description', ''),
        category:
          obj.donors.length > 0 ? parsedDonors(obj) : '',
      }
    })
  } else {
    return ''
  }
})

const parsedAssociatedStaffMember = computed(() => {
  return page.value.associatedStaffMember.map((obj) => {
    return {
      ...obj,
      to: `/${obj.to}`,
      image: _get(obj, 'image[0]', null),
      staffName: `${obj.nameFirst} ${obj.nameLast}`,
      language: _get(
        obj,
        'alternativeName[0].languageAltName',
        null
      ),
      alternativeFullName: _get(
        obj,
        'alternativeName[0].fullName',
        null
      ),
      locations: _get(obj, 'locations', []).map((loc) => {
        return {
          ...loc,
          uri: fixUri(loc.uri),
        }
      }),
    }
  })
})

function parsedDonors(obj) {
  const donorNames = []
  obj.donors.map((donor) => {
    return donor.firstName === null
      ? donorNames.push(`${donor.lastName}`)
      : donorNames.push(`${donor.firstName} ${donor.lastName}`)
  })

  if (donorNames.length === 1) {
    return `Donor: ${donorNames[0]}`
  } else {
    const names = [
      donorNames.slice(0, -1).join(', '),
      donorNames.slice(-1)[0],
    ].join(donorNames.length < 2 ? '' : ' and ')
    return `Donors: ${names}`
  }
}

onMounted(() => {
  // Call the plugin method to get the .section-header2 and .section-header3 elements
  h2Array.value = $getHeaders.getHeadersMethod()
})
</script>

<template>
  <main
    id="main"
    class="page page-collection-detail"
  >
    <nav-breadcrumb
      to="/collections/explore"
      :title="page.title"
      parent-title="Explore Collections"
    />

    <banner-text
      v-if="!page.heroImage || page.heroImage.length == 0"
      :title="page.title"
      :text="page.text"
      :subject-areas="page.subjectAreas"
      email="AskUs@library.ucla.edu"
      :button-text="parsedButtonText"
      :to="parsedButtonTo"
    />

    <section-wrapper
      v-if="page.heroImage && page.heroImage.length == 1"
      class="section-banner"
    >
      <banner-header
        :media="page.heroImage[0].image[0]"
        :title="page.title"
        :text="page.text"
        :category="parsedPhysicalDigital"
        :subject-areas="page.subjectAreas"
        email="AskUs@library.ucla.edu"
        :prompt="parsedButtonText"
        :to="parsedButtonTo"
        :align-right="false"
      />
    </section-wrapper>

    <section-wrapper theme="divider">
      <divider-way-finder
        class="divider-way-finder"
        color="default"
      />
    </section-wrapper>

    <page-anchor
      v-if="h2Array.length >= 3"
      :section-titles="h2Array"
    />

    <!-- Using the Collection -->
    <section-wrapper
      v-if="page.richTextSimplified"
      section-title="Using the Collection"
      :section-summary="page.richTextSimplified"
    >
      <divider-way-finder
        v-if="page.blocks.length > 0"
        class="divider-way-finder"
        color="default"
      />
    </section-wrapper>

    <!-- Flexible Page Blocks -->
    <flexible-blocks
      class="flexible-content"
      :blocks="page.blocks"
    />

    <section-wrapper
      v-if="
        parsedServicesAndResources.length > 0 ||
          parsedEndowments.length > 0 ||
          parsedAssociatedStaffMember.length > 0
      "
      theme="divider"
    >
      <divider-way-finder
        class="divider-way-finder"
        color="default"
      />
    </section-wrapper>

    <!-- Services and Resources -->
    <section-wrapper
      v-if="parsedServicesAndResources.length"
      section-title="Services &amp; Resources"
    >
      <simple-cards
        :items="parsedServicesAndResources"
        class="section-header"
      />

      <divider-way-finder
        v-if="
          parsedEndowments.length > 0 ||
            parsedAssociatedStaffMember.length > 0
        "
        class="divider-way-finder"
        color="default"
      />
    </section-wrapper>

    <!-- Endowments -->
    <section-wrapper
      v-if="parsedEndowments.length"
      section-title="Collection Endowments"
    >
      <section-staff-article-list
        :items="parsedEndowments"
        class="block-staff-article-item"
      />

      <divider-way-finder
        v-if="parsedAssociatedStaffMember.length > 0"
        class="divider-way-finder"
        color="default"
      />
    </section-wrapper>

    <!-- Subject Specialist -->
    <section-wrapper
      v-if="parsedAssociatedStaffMember.length > 0"
      section-title="Contact a Subject Specialist"
    >
      <section-staff-list :items="parsedAssociatedStaffMember" />
    </section-wrapper>
  </main>
</template>

<style lang="scss" scoped>
.page-collection-detail {
  .section-teaser-card {
    display: flex;
    flex-direction: row;
  }
}
</style>
