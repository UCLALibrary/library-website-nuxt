<script setup>

import _get from 'lodash/get'

// GQL
import MEAP_HOMEPAGE from '../gql/queries/HomePage.gql'

const { $graphql } = useNuxtApp()

const { data, error } = await useAsyncData('meap-home-page', async () => {
  const data = await $graphql.default.request(MEAP_HOMEPAGE)
  console.log(data)
  return data
})

if (error.value) {
  throw createError({
    statusCode: error.value.statusCode, statusMessage: error.value.statusMessage + error.value, fatal: true
  })
}

if (!data.value.entries) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page Not Found',
    fatal: true
  })
}
console.log(data.value)

const page = ref(_get(data.value, 'entries', {}))

watch(data, (newVal, oldVal) => {
  console.log('In watch preview enabled, newVal, oldVal', newVal, oldVal)
  page.value = _get(newVal, 'entry', {})
})

const homePage = computed(() => {
  return page.value.map((obj) => {
    return {
      ...obj,
      to: `/${stripMeapFromURI(obj.to)}`,
    }
  })[0]
})

const parsedMastheadHeroImage = computed(() => {
  return homePage.value.heroImage[0].image[0]
})

const featuredMeapResources = computed(() => {
  return homePage.value.featuredMeapResources.map((obj) => {
    return {
      ...obj,
      to: obj.externalResourceUrl
        ? obj.externalResourceUrl
        : `/${stripMeapFromURI(obj.uri)}`,
    }
  })
})

const featuredProjects = computed(() => {
  return homePage.value.featuredProjects.map((obj) => {
    return {
      ...obj,
      image: obj.heroImage[0].image[0],
    }
  })
})

const featuredHighlightedProjects = computed(() => {
  return featuredProjects.value.slice(1)
})

const meapNews = computed(() => {
  return homePage.value.meapNews.map((obj) => {
    return {
      ...obj,
      image: obj.heroImage[0].image[0],
    }
  })
})
</script>
<template>
  <main
    id="main"
    class="page page-home"
  >
    <masthead-secondary
      :title="homePage.titleGeneral"
      :text="homePage.summary"
      :hero-image="parsedMastheadHeroImage"
      theme="meap"
      class="meap-masthead-secondary"
    />
    <!-- TODO Add the divider back in when we add the searchbar -->
    <!-- <divider-way-finder
                color="about"
                class="divider-way-finder"
            /> -->
    <section-wrapper
      v-if="featuredProjects"
      class="section-banner"
    >
      <banner-featured
        class="banner"
        :media="featuredProjects[0].heroImage[0].image[0]"
        :to="featuredProjects[0].to"
        :title="featuredProjects[0].title"
        :category="featuredProjects[0].category"
        breadcrumb="Featured Projects"
        :start-date="featuredProjects[0].startDate"
        :end-date="featuredProjects[0].endDate"
        :ratio="featuredProjects[0].ratio"
        prompt="View project"
      />
    </section-wrapper>

    <section-wrapper>
      <section-teaser-highlight :items="featuredHighlightedProjects" />
      <nuxt-link
        v-if="featuredHighlightedProjects.length"
        class="button-more-link"
        to="/projects"
      >
        <button-more text="Explore Projects" />
      </nuxt-link>
    </section-wrapper>

    <section-wrapper
      v-if="
        featuredProjects &&
          featuredProjects.length &&
          featuredMeapResources &&
          featuredMeapResources.length
      "
      theme="divider"
    >
      <divider-way-finder
        color="about"
        class="divider-way-finder"
      />
    </section-wrapper>

    <!-- Program Resources -->
    <section-wrapper
      v-if="featuredMeapResources && featuredMeapResources.length"
      class="section"
    >
      <simple-cards
        section-title="Program Resources"
        :items="featuredMeapResources"
      />

      <nuxt-link
        v-if="featuredMeapResources.length"
        class="button-more-link"
        to="/applicants/resources"
      >
        <button-more text="See all resources" />
      </nuxt-link>
    </section-wrapper>

    <section-wrapper
      v-if="
        ((featuredProjects && featuredProjects.length) ||
          (featuredMeapResources && featuredMeapResources.length)) &&
          meapNews &&
          meapNews.length
      "
      theme="divider"
    >
      <divider-way-finder
        color="about"
        class="divider-way-finder"
      />
    </section-wrapper>

    <!-- Announcements -->
    <section-wrapper
      v-if="meapNews && meapNews.length"
      section-title="News"
      class="section"
    >
      <section-teaser-card
        :items="meapNews"
        :image="meapNews[0].heroImage[0].image[0]"
        class="meap-news"
      />

      <nuxt-link
        v-if="featuredMeapResources.length"
        class="button-more-link"
        to="/about/news"
      >
        <button-more text="See all news" />
      </nuxt-link>
    </section-wrapper>
  </main>
</template>
<style lang="scss" scoped>
.page-home {
  .meap-masthead-secondary {
    margin-bottom: var(--space-3xl);

    :deep(.container .meta .rich-text a) {
      color: var(--color-white);

      &:hover {
        color: var(--color-white);
        font-weight: 500;
      }
    }
  }

  .button-more-link {
    margin: var(--space-xl) auto;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    max-width: fit-content;

    :deep(.button-more) {
      display: inline-flex;
      max-width: unset;
    }
  }
}
</style>
