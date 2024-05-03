<script setup>
import { onMounted } from 'vue'

// HELPERS
import _get from 'lodash/get'
import removeTags from '../utils/removeTags'

// GQL
import PROGRAM_DETAIL from '../gql/queries/ProgramDetail.gql'

const { $graphql, $getHeaders, $elasticsearchplugin } = useNuxtApp()

const route = useRoute()

const { data, error } = await useAsyncData(`program-detail-${route.params.slug}`, async () => {
  const data = await $graphql.default.request(PROGRAM_DETAIL, {
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
const associatedArticles = ref(_get(data.value, 'associatedArticles', {}))
const h2Array = ref([]) // anchor tags

watch(data, (newVal, oldVal) => {
  console.log('In watch preview enabled, newVal, oldVal', newVal, oldVal)
  page.value = _get(newVal.data, 'entry', {})
  associatedArticles.value = _get(newVal.data, 'associatedArticles', {})
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

const parsedButtonText = computed(() => {
  return _get(page.value, 'buttonUrl[0].buttonText', '')
})

const parsedButtonTo = computed(() => {
  return _get(page.value, 'buttonUrl[0].buttonUrl', '')
})

const parsedStaffDirectory = computed(() => {
  const x = page.value.viewStaffDirectory
  if (x === 'false' && page.value.title.length > 0) {
    return ''
  } else {
    const searchLibrary = page.value.title
    const libConcat = '/about/staff?q=&filters={"departments.title.keyword":["' + encodeURIComponent(searchLibrary) + '"]}'

    return libConcat
  }
})

const parsedArticles = computed(() => {
  return associatedArticles.value.map((obj) => {
    return {
      ...obj,
      to:
        obj.externalResourceUrl != null
          ? _get(obj, 'externalResourceUrl', '')
          : `/${obj.to}`,
      image: _get(obj, 'heroImage[0].image[0]', {}),
      category: _get(obj, 'category', ''),
      title: _get(obj, 'title', ''),
      text: _get(obj, 'description', ''),
      startDate: _get(obj, 'startDate', ''),
    }
  })
})

const parsedSeeMore = computed(() => {
  if (page.value.slug === 'preservation-conservation-program') {
    return '/about/blogs/listing-preservation-and-conservation-blog'
  } else {
    return '/about/news'
  }
})

onMounted(() => {
  // Call the plugin method to get the .section-header2 and .section-header3 elements
  h2Array.value = $getHeaders.getHeadersMethod()
})
</script>

<template>
  <main
    id="main"
    class="page page-program-detail"
  >
    <nav-breadcrumb
      to="/about/programs"
      :title="page.title"
      parent-title="Programs"
    />

    <banner-text
      v-if="!page.heroImage || page.heroImage.length == 0"
      :title="page.title"
      :text="page.text"
      :email="page.email"
      :phone="page.phoneNumber"
      :staff-directory-link="parsedStaffDirectory"
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
        :email="page.email"
        :phone="page.phoneNumber"
        :staff-directory-link="parsedStaffDirectory"
        :prompt="parsedButtonText"
        :to="parsedButtonTo"
        :align-right="true"
      />
    </section-wrapper>

    <section-wrapper theme="divider">
      <divider-way-finder
        class="divider"
        color="about"
      />
    </section-wrapper>

    <page-anchor
      v-if="h2Array.length >= 3"
      :section-titles="h2Array"
    />

    <section-wrapper>
      <block-hours
        v-if="
          page.uri ==
            'about/programs/campus-library-instructional-computing-commons-clicc'
        "
        lid="0"
        :is-clicc="true"
      />
      <divider-way-finder
        v-if="
          page.uri ==
            'about/programs/campus-library-instructional-computing-commons-clicc'
        "
        lid="0"
        :is-clicc="true"
        class="divider"
        color="about"
      />
    </section-wrapper>

    <flexible-blocks
      class="flexible-content"
      :blocks="page.blocks"
    />

    <section-wrapper theme="divider">
      <divider-way-finder
        v-if="parsedArticles.length > 0"
        color="about"
        class="divider-way-finder"
      />
    </section-wrapper>

    <section-wrapper
      v-if="parsedArticles.length > 0"
      class="associated-articles"
      section-title="Associated News"
    >
      <section-teaser-card
        class="section-teaser-card"
        :items="parsedArticles"
      />
      <nuxt-link
        v-if="associatedArticles"
        class="button-more"
        :to="parsedSeeMore"
      >
        <button-more text="See More Associated Articles" />
      </nuxt-link>
    </section-wrapper>
  </main>
</template>

<style lang="scss" scoped>
.page-program-detail {
  .section-teaser-card {
    display: flex;
    flex-direction: row;
  }

  .section-title {
    margin-bottom: var(--space-xl);

    .title {
      @include step-3;
      color: var(--color-primary-blue-03);
      margin-bottom: var(--space-m);
    }
  }

  .button-more {
    margin: var(--space-2xl) auto;
  }
}
</style>
