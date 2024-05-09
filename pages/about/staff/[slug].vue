<script
  lang="ts"
  setup
>
// HELPERS
import _get from 'lodash/get'
import removeTags from '../utils/removeTags'

// GQL
import STAFF_DETAIL from '../gql/queries/StaffDetail.gql'

const route = useRoute()
const { $graphql, $elasticsearchplugin } = useNuxtApp()

// ASYNC DATA into PAGE const
const { data, error } = await useAsyncData(`staff/${route.params.slug}`, async () => {
  const data = await $graphql.default.request(STAFF_DETAIL, { slug: route.params.slug })
  // console.log('In staff Slug page data', data)
  return data
})

if (error.value) {
  throw createError({
    ...error.value, statusMessage: 'Page not found.' + error.value, fatal: true
  })
}
if (!data.value.entry) {
  // eslint-disable-next-line no-console
  console.log('In staff Slug page no data')
  throw createError({
    statusCode: 404,
    statusMessage: 'Page Not Found',
    fatal: true
  })
}
// ES Index
// TODO - check if this is correct, not route.params.slug?
if (data.value.entry.slug && process.server) {
  const { $elasticsearchplugin } = useNuxtApp()
  // console.log("elasticsearchplugin", $elasticsearchplugin, route.params.slug)
  await $elasticsearchplugin?.index(data.value.entry, route.params.slug)
}

const page = ref(_get(data.value, 'entry', {}))
const entries = ref(_get(data.value, 'entries', {}))

watch(data, (newVal, oldVal) => {
  console.log('In watch preview enabled, newVal, oldVal', newVal, oldVal)
  page.value = _get(newVal, 'entry', {})
  entries.value = _get(newVal, 'entries', {})
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

// COMPUTED
const parsedImage = computed(() => {
  return _get(page.value, 'image[0]', null)
})
const parsedStaffName = computed(() => {
  console.log('In parsedStaffName', page.value.nameFirst + ' ' + page.value.nameLast)
  return `${page.value.nameFirst} ${page.value.nameLast}`
})
const parsedAlternativeFullName = computed(() => {
  return _get(page.value, 'alternativeName[0].fullName', '')
})
const parsedLanguage = computed(() => {
  return _get(page.value, 'alternativeName[0].languageAltName', '')
})
const parsedItems = computed(() => {
  // was page value entries
  return entries.value.map((obj) => {
    return {
      ...obj,
      to:
        obj.externalResourceUrl != null
          ? _get(obj, 'externalResourceUrl', '')
          : `/${obj.to}`,
      image: _get(obj, 'heroImage[0].image[0]', null),
      staffName: `${obj.nameFirst} ${obj.nameLast}`,
    }
  })
})
// TODO do we need a second watcher?
</script>
<template>
  <main
    id="main"
    class="page page-staff-detail"
  >
    <!-- staff page here -->
    <nav-breadcrumb
      to="/about/staff"
      :title="page.title"
      parent-title="Staff Directory"
    />
    <!-- block staff detail failing if pronouns = null or consultation = null? -->
    <section-wrapper>
      <block-staff-detail
        :image="parsedImage"
        :staff-name="parsedStaffName"
        :alternative-full-name="parsedAlternativeFullName"
        :language="parsedLanguage"
        :job-title="page.jobTitle"
        :departments="page.departments"
        :locations="page.locations"
        :pronouns="page.pronouns"
        :email="page.email"
        :phone="page.phone"
        :consultation="page.consultation"
        :topics="page.topics"
        :academic-departments="page.academicDepartments"
        :biography="page.biography"
      />
    </section-wrapper>

    <section-wrapper
      v-if="parsedItems?.length ||
        page.publications ||
        page.orcid
      "
      class="selected-articles"
      theme="divider"
    >
      <divider-way-finder
        class="divider"
        color="about"
      />
    </section-wrapper>

    <div
      v-if="parsedItems?.length ||
        page.publications ||
        page.orcid
      "
      class="selected-articles"
    >
      <section-wrapper>
        <section-staff-orcid-publications
          class="staff-orcid-publications"
          :orcid="page.orcid"
          :publications="page.publications"
        />
      </section-wrapper>

      <section-wrapper theme="divider">
        <divider-way-finder
          v-if="parsedItems?.length &&
            (page.publications || page.orcid)
          "
          class="divider divider-first"
          color="about"
        />
      </section-wrapper>

      <section-wrapper>
        <section-staff-article-list
          v-if="parsedItems?.length"
          class="staff-article-list-section"
          section-title="Articles"
          :items="parsedItems"
        />
      </section-wrapper>
    </div>

    <section-wrapper theme="divider">
      <divider-way-finder
        class="divider divider-first"
        color="about"
      />
    </section-wrapper>
    <section-wrapper>
      <block-call-to-action
        class="block-call-to-action"
        :is-global="true"
      />
    </section-wrapper>
  </main>
</template>
<style
  lang="scss"
  scoped
>
.page-staff-detail {
  .selected-articles {
    :deep(.divider .dotted) {
      border-color: var(--color-secondary-grey-03);
    }
  }
}
</style>
