<script setup>
// COMPONENTS
import { SectionWrapper, DividerWayFinder, RichText, GridGallery, ResponsiveImage, BannerFeatured, FlexibleBlocks } from 'ucla-library-website-components'

// HELPERS
import _get from 'lodash/get'
import _ from 'lodash'
import removeTags from '../utils/removeTags'

// GQL
import IMPACT_REPORT from '../gql/queries/ImpactReport.gql'

// UTILITIES
import flattenTimeLineStructure from '../utils/flattenTimeLineStructure'

const { $graphql } = useNuxtApp()

definePageMeta({
  layout: 'impact',
  path: '/impact/:year?',
  alias: ['/impact'],
})

const route = useRoute()
const path = route.params && route.params.year ? `impact/${route.params.year}` : '*'
const variables = { path }
const { data, error } = await useAsyncData('impact-report-index', async () => {
  const data = await $graphql.default.request(IMPACT_REPORT, variables)
  return data
})
if (error.value) {
  throw createError({
    statusCode: 404, statusMessage: 'Page not found.', fatal: true
  })
}
if (!data.value.entry) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page Not Found'
  })
}

if (data.value.entry.slug && process.server) {
  const { $elasticsearchplugin } = useNuxtApp()
  await $elasticsearchplugin.index(data.value.entry, path.replaceAll('/', '--'))
}

const page = ref(_get(data.value, 'entry', {}))
watch(data, (newVal, oldVal) => {
  console.log('In watch preview enabled, newVal, oldVal', newVal, oldVal)
  page.value = _get(newVal, 'entry', {})
})

useHead({
  title: page.value?.title || '... loading',
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: removeTags(page.value?.text),
    },
  ],
})

const timelineSortedBySubtitle = computed(() => {
  const timelineData = flattenTimeLineStructure(page.timelineGallery)

  const groupBySubtitle = _.groupBy(timelineData, 'subtitle')

  // console.log("parsed timeline by subtitle: " + JSON.stringify(groupBySubtitle))

  for (const key in groupBySubtitle)
    groupBySubtitle[key] = _.groupBy(groupBySubtitle[key], 'sectionSummary')

  // console.log("parsed timeline by summary: " + JSON.stringify(groupBySubtitle[key]))

  return groupBySubtitle
})
</script>

<template lang="html">
  <main
    id="main"
    class="page page-impact-report"
  >
    <!-- This is template for impact reports -->
    <div class="meta">
      <h1
        class="intro"
        v-html="page.title"
      />

      <ResponsiveImage
        v-if="page.portrait && page.portrait.length > 0"
        :media="page.portrait[0]"
        :aspect-ratio="60"
        class="portrait-Ginny"
        alt="Sketch of Ginny Steel wearing glasses and a grey blazer, with a yellow background"
      />

      <RichText
        class="text"
        :rich-text-content="page.text"
      />
    </div>
    <SectionWrapper theme="divider">
      <DividerWayFinder
        class="divider"
        color="about"
      />
    </SectionWrapper>
    <h2 class="visually-hidden">
      Main Story
    </h2>
    <BannerFeatured
      v-if="page.keyArt && page.keyArt.length !== 0"
      class="section-banner"
      :media="page.keyArt[0].heroImage[0]"
      :ratio="40"
      :title="page.keyArt[0].titleGeneral"
      :description="page.keyArt[0].summary"
      :prompt="page.keyArt[0].buttonText"
      :to="page.keyArt[0].buttonUrl"
      :align-right="false"
    />
    <div v-if="page.blocks">
      <FlexibleBlocks
        v-if="page.blocks"
        class="flexible-content"
        :blocks="page.blocks"
      />
    </div>

    <SectionWrapper theme="divider">
      <DividerWayFinder
        class="divider"
        color="about"
      />
    </SectionWrapper>

    <SectionWrapper :section-title="page.timelineTitle">
      <div
        v-for="(value, propertyName) in timelineSortedBySubtitle"
        :key="propertyName"
        class="sub-section-grid"
      >
        <h3
          class="grid-gallery-subtitle"
          v-html="propertyName"
        />

        <GridGallery
          v-for="(subValue, propertySubName) in value"
          :key="propertySubName"
          :section-summary="propertySubName"
          :items="subValue"
        />
      </div>
    </SectionWrapper>
    <SectionWrapper theme="divider">
      <DividerWayFinder
        class="divider"
        color="about"
      />
    </SectionWrapper>
    <SectionWrapper v-if="page.acknowledgements && page.acknowledgements.length === 1">
      <h2
        :class="page.acknowledgements[0].displaySectionTitle === 'true'
          ? ''
          : 'visually-hidden'
        "
      >
        {{ page.acknowledgements[0].titleGeneral }}
      </h2>
      <RichText
        class="credits"
        :rich-text-content="page.acknowledgements[0].acknowledgements"
      />
    </SectionWrapper>
  </main>
</template>

<style lang="scss" scoped>
.page-impact-report {
  .meta {
    padding: 0 var(--unit-gutter);
    margin: var(--space-xl) auto 0 auto;
    max-width: $container-xl-banner + px;

    .intro {
      @include step-5;
      margin-bottom: var(--space-xl);
      color: var(--color-primary-blue-03);
    }

    .rich-text {
      margin: 0;
      padding-right: 0;
      margin-right: 0;
      max-width: $container-xl-banner + px;
    }

    .text {
      @include step-3;
      line-height: 120%;

      :deep(p) {
        @include step-3;
      }
    }
  }

  .portrait-Ginny {
    width: 100%;
    max-width: 50%;
    margin-left: 24px;
    float: right;

    :deep(.media) {
      object-fit: cover;
    }
  }

  .section-banner {
    margin: 0 auto;
    max-width: $container-xl-banner + px;

    :deep() {
      --banner-color-theme: var(--color-help-green-03);

      // refactor when option to turn off overlays is available in craft
      .gradient,
      .molecule,
      &.hatch-left .hatch {
        display: none;
      }
    }
  }

  :deep(.block-highlight .text) {
    display: initial;
  }

  h2 {
    @include step-3;
    color: var(--color-primary-blue-03);
    margin-bottom: var(--space-xl);
  }

  :deep(.grid-gallery) {
    padding: 0;
  }

  .sub-section-grid {
    margin: 12px auto;
    position: relative;
  }

  .grid-gallery-subtitle {
    color: var(--color-primary-blue-03);
    font-size: 35.538px;
    line-height: 43px;
    @include step-2;
    position: sticky;
    top: 0;
    background-color: var(--color-white);
    padding-top: 8px;
    z-index: 30;
    min-height: 46px;
  }

  .teaser-card {
    margin: 0 auto;
  }

  .credits {
    max-width: $container-l-main + px;
    font-style: italic;
    line-height: 26px;

    :deep(p),
    :deep(a) {
      font-family: var(--font-secondary);
      font-size: var(--step--1);
      color: var(--color-secondary-grey-04);

      strong {
        font-weight: 600;
      }
    }
  }

  .divider {
    max-width: $container-l-main + px;
    margin: var(--space-3xl) auto;
  }

  .divider-general {
    margin-top: var(--space-3xl);
    margin-bottom: var(--space-3xl);
    max-width: $container-l-main + px;
  }

  // Hover states
  @media #{$has-hover} {}

  @media #{$medium} {
    .meta {
      padding: 0 $whitespace-m-sides + px;
      margin-top: 24px;

      .portrait-Ginny {
        float: none;
        max-width: 100%;
        margin: 32px auto;
      }
    }

    .divider-general {
      width: calc(100% - (var(--unit-gutter) * 2));
    }

    :deep(.grid-gallery) {
      padding: unset;

      .section-summary {
        top: 36px;
      }
    }
  }

  @media #{$small} {
    .meta {
      padding: 0 $whitespace-s-sides + px;

      .portrait-Ginny {
        width: 100%;
      }
    }

    :deep(.banner-featured.hatch-left) {
      .meta {
        padding-left: var(--unit-gutter);
        padding-right: var(--unit-gutter);
      }
    }

    .grid-gallery-subtitle {
      height: 80px;
    }
  }

  @media (min-width: 400px) {
    .grid-gallery-subtitle {
      height: 60px;
    }
  }

  @media (min-width: 860px) {
    .grid-gallery-subtitle {
      height: 40px;
    }
  }
}
</style>
