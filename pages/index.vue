<script setup>
// COMPONENTS
import { MastheadPrimary, SectionWrapper, DividerWayFinder, ButtonMore, SectionTeaserCard, SectionTeaserHighlight, SectionDualMasonry, SectionCardsWithIllustrations, BannerFeatured, HeadingArrow, } from '@ucla-library-monorepo/ucla-library-website-components'
// HELPERS
import _get from 'lodash/get'

// GQL
import HOMEPAGE from '../gql/queries/Homepage.gql'

const { $graphql } = useNuxtApp()

const { data, error } = await useAsyncData('home-page', async () => {
  const data = await $graphql.default.request(HOMEPAGE)
  return data
})
if (error.value) {
  throw createError({
    statusCode: error.value.statusCode, statusMessage: error.value.statusMessage + error.value, fatal: true
  })
}
if (!data.value.entry) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page Not Found',
    fatal: true
  })
}

if (data.value.entry && import.meta.prerender) {
  const { index } = useIndexer()

  const doc = {
    title: data.value.entry.title,
    text: data.value.entry.summary,
    searchLinks: data.value.entry.searchLinks,
    uri: '/'
  }
  await index(doc, 'home-page')
}
const page = ref(_get(data.value, 'entry', {}))
watch(data, (newVal, oldVal) => {
  // console.log('In watch preview enabled, newVal, oldVal', newVal, oldVal)
  page.value = _get(newVal, 'entry', {})
})

const parsedAdvancedSearchLink = computed(() => {
  // Last item in searchLinks
  const advancedLink = page.value.searchLinks.slice(-1)[0]
  return advancedLink
})
const parsedSearchLinks = computed(() => {
  // Remove last item in searchLinks
  const searchLinks = [...page.value.searchLinks].slice(0, -1)
  return searchLinks
})

const parsedGetHelpWith = computed(() => {
  return page.value.getHelpWith[0].getHelpWith.map((obj) => {
    return {
      ...obj,
      to: obj.externalResourceUrl
        ? obj.externalResourceUrl
        : `/${obj.uri}`,
    }
  })
})
const bannerFeaturedEvent = computed(() => {
  const bannerFeaturedEvent = page.value.featuredEvents[0]
  return {
    ...bannerFeaturedEvent,
    to: `/${bannerFeaturedEvent.uri}`,
    title:
      bannerFeaturedEvent.sectionHandle
        === 'workshopOrEventSeries'
        ? bannerFeaturedEvent.title
        : bannerFeaturedEvent.eventTitle,
    prompt:
      bannerFeaturedEvent.sectionHandle
        === 'workshopOrEventSeries'
        ? 'View series'
        : `View ${bannerFeaturedEvent.sectionHandle}`,
    image: _get(bannerFeaturedEvent, 'heroImage[0].image[0]', null),
    startDate:
      bannerFeaturedEvent.sectionHandle === 'event'
        ? _get(bannerFeaturedEvent, 'startDateWithTime', null)
        : _get(bannerFeaturedEvent, 'startDate', null),
    endDate:
      bannerFeaturedEvent.sectionHandle === 'event'
        ? _get(bannerFeaturedEvent, 'endDateWithTime', null)
        : _get(bannerFeaturedEvent, 'endDate', null),
    category: _get(bannerFeaturedEvent, 'category[0].title', ''),
    description:
      bannerFeaturedEvent.sectionHandle === 'event'
        ? _get(bannerFeaturedEvent, 'eventDescription', '')
        : _get(bannerFeaturedEvent, 'summary', ''),
    locations:
      bannerFeaturedEvent.associatedLocations[0] != null
        ? bannerFeaturedEvent.associatedLocations
        : bannerFeaturedEvent.eventLocation,
  }
})
// TO DO need to update dates on component
const parsedDualMasonryEvents = computed(() => {
  const masonaryEvents = page.value.featuredEvents.slice(1, 3)
  return masonaryEvents.map((obj) => {
    return {
      ...obj,
      to: `/${obj.uri}`,
      title:
        obj.sectionHandle === 'workshopOrEventSeries'
          ? obj.title
          : obj.eventTitle,
      image: _get(obj, 'heroImage[0].image[0]', null),
      startDate:
        obj.sectionHandle === 'event'
          ? _get(obj, 'startDateWithTime', null)
          : _get(obj, 'startDate', null),
      endDate:
        obj.sectionHandle === 'event'
          ? _get(obj, 'endDateWithTime', null)
          : _get(obj, 'endDate', null),
      category: 'Featured',
      prompt:
        obj.sectionHandle === 'workshopOrEventSeries'
          ? 'View series'
          : `View ${obj.sectionHandle}`,
    }
  })
})
const bannerFeaturedCollection = computed(() => {
  const bannerFeaturedCollection = page.value.featuredCollections[0]
  return {
    ...bannerFeaturedCollection,
    to: `/${bannerFeaturedCollection.uri}`,
    image: _get(
      bannerFeaturedCollection,
      'heroImage[0].image[0]',
      null
    ),
    category: bannerFeaturedCollection.category
      ? bannerFeaturedCollection.category.toString()
      : '',
    description: _get(bannerFeaturedCollection, 'text', ''),
    prompt: `View ${bannerFeaturedCollection.sectionHandle}`,
  }
})
const parsedSectionHighlightCollection = computed(() => {
  const highlightCollections = page.value.featuredCollections.slice(1)
  return highlightCollections.map((obj) => {
    return {
      ...obj,
      to: `/${obj.uri}`,
      image: _get(obj, 'heroImage[0].image[0]', ''),
      category: obj.category ? obj.category.toString() : '',
    }
  })
})

function parseArticleCategory(categories) {
  if (!categories || categories.length === 0)
    return ''
  let result = ''
  categories.forEach((obj) => {
    result = `${result + obj.title}, `
  })
  return result.slice(0, -2)
}
const bannerFeaturedNews = computed(() => {
  const bannerFeaturedNews = page.value.featuredNews[0]
  return {
    ...bannerFeaturedNews,
    to:
      bannerFeaturedNews.externalResourceUrl != null
        ? _get(bannerFeaturedNews, 'externalResourceUrl', '')
        : `/${bannerFeaturedNews.to}`,
    image: _get(bannerFeaturedNews, 'heroImage[0].image[0]', null),
    // startDate: _get(bannerFeaturedNews, "postDate", null),
    category: parseArticleCategory(
      bannerFeaturedNews.articleCategories
    ),
    description: _get(bannerFeaturedNews, 'text', ''),
    startDate: _get(bannerFeaturedNews, 'postDate', ''),
    endDate: _get(bannerFeaturedNews, 'postDate', ''),
    prompt: `View ${bannerFeaturedNews.sectionHandle}`,
  }
})
const parsedNewsList = computed(() => {
  const newsList = page.value.featuredNews.slice(1)
  return newsList.map((obj) => {
    return {
      ...obj,
      to:
        obj.externalResourceUrl != null
          ? _get(obj, 'externalResourceUrl', '')
          : `/${obj.to}`,
      image: _get(obj, 'heroImage[0].image[0]', ''),
      category: parseArticleCategory(obj.articleCategories),
      startDate: _get(obj, 'postDate', ''),
      endDate: _get(obj, 'postDate', ''),
    }
  })
})

useHead({
  title: page.value?.title || '... loading',
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: 'The UCLA Library creates a vibrant nexus of ideas, collections, expertise, and spaces in which users illuminate solutions for local and global challenges. We constantly evolve to advance UCLA’s research, education, and public service mission by empowering and inspiring communities of scholars and learners to discover, access, create, share, and preserve knowledge.',
    },
  ],
})
</script>

<template>
  <main
    id="main"
    class="page page-home"
  >
    <!-- TODO elastic search testing -->
    <!-- h4>Mapping:</h4>
        <p>{{ mapping }}</p>
        <h4>Search Responsee</h4>
        <p>{{ searchResponse }}</p -->

    <MastheadPrimary
      :link-items="parsedSearchLinks"
      :advanced-search-link="parsedAdvancedSearchLink"
    />

    <SectionWrapper theme="divider">
      <DividerWayFinder
        class="search-margin"
        color="help"
      />
    </SectionWrapper>

    <SectionWrapper class="section-no-top-margin">
      <SectionCardsWithIllustrations
        class="section"
        :items="parsedGetHelpWith"
        :section-title="page.getHelpWith[0].titleGeneral"
        :section-summary="page.getHelpWith[0].sectionSummary"
        button-text="See All Services &amp; Resources"
        to="/help/services-resources/"
        :is-horizontal="false"
      />
    </SectionWrapper>

    <SectionWrapper theme="divider">
      <DividerWayFinder color="visit" />
    </SectionWrapper>

    <SectionWrapper class="section-banner">
      <BannerFeatured
        :media="bannerFeaturedEvent.image"
        :to="bannerFeaturedEvent.to"
        :prompt="bannerFeaturedEvent.prompt"
        :title="bannerFeaturedEvent.title"
        :start-date="bannerFeaturedEvent.startDate"
        :end-date="bannerFeaturedEvent.endDate"
        :locations="bannerFeaturedEvent.associatedLocations"
        :align-right="false"
        :category="bannerFeaturedEvent.category"
      >
        <HeadingArrow text="Featured Events &amp; Exhibitions" />
      </BannerFeatured>
    </SectionWrapper>

    <SectionWrapper class="section-dual-masonry">
      <SectionDualMasonry
        v-if="parsedDualMasonryEvents.length > 0"
        :items="parsedDualMasonryEvents"
        to="/visit/events-exhibitions/"
        text="See All Events &amp; Exhibitions"
      />
    </SectionWrapper>

    <SectionWrapper theme="divider">
      <DividerWayFinder color="default" />
    </SectionWrapper>

    <SectionWrapper class="section-banner">
      <BannerFeatured
        :media="bannerFeaturedCollection.image"
        :to="bannerFeaturedCollection.to"
        :title="bannerFeaturedCollection.title"
        :description="bannerFeaturedCollection.description"
        :category="bannerFeaturedCollection.category"
        :prompt="bannerFeaturedCollection.prompt"
        :align-right="true"
      >
        <HeadingArrow text="Featured Collections" />
      </BannerFeatured>
    </SectionWrapper>
    <!-- fix card meta useroute add a check for route undefined-->
    <SectionWrapper>
      <SectionTeaserHighlight
        v-if="parsedSectionHighlightCollection.length > 1"
        :items="parsedSectionHighlightCollection"
      />
      <nuxt-link
        to="/collections/explore/"
        class="button-more"
      >
        <ButtonMore text="See All Featured Collections" />
      </nuxt-link>
    </SectionWrapper>

    <SectionWrapper theme="divider">
      <DividerWayFinder color="about" />
    </SectionWrapper>

    <SectionWrapper class="section-banner">
      <BannerFeatured
        :media="bannerFeaturedNews.image"
        :to="bannerFeaturedNews.to"
        :prompt="bannerFeaturedNews.prompt"
        :title="bannerFeaturedNews.title"
        :description="bannerFeaturedNews.description"
        :category="bannerFeaturedNews.category"
        :start-date="bannerFeaturedNews.startDate"
        :end-date="bannerFeaturedNews.endDate"
        :align-right="false"
      >
        <HeadingArrow text="Featured News" />
      </BannerFeatured>
    </SectionWrapper>

    <SectionWrapper>
      <SectionTeaserCard
        v-if="parsedNewsList.length > 1"
        :items="parsedNewsList"
      />
      <nuxt-link
        to="/about/news/"
        class="button-more"
      >
        <ButtonMore text="See All News" />
      </nuxt-link>
    </SectionWrapper>
  </main>
</template>

<style lang="scss" scoped>
.page-home {
  .button-more {
    margin: var(--space-2xl) auto;
  }
}
</style>
