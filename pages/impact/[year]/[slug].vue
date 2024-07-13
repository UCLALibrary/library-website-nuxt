<script setup>
// COMPONENTS
import { BannerText, BannerHeader, SectionWrapper, DividerWayFinder, FlexibleBlocks } from 'ucla-library-website-components'

// HELPERS
import _get from 'lodash/get'
import removeTags from '../utils/removeTags'

// GQL
import IMPACT_REPORT_STORY from '../gql/queries/ImpactReportStory.gql'

definePageMeta({
  layout: 'impact'
})
const { $graphql } = useNuxtApp()
const route = useRoute()

const variables = { slug: route.params.slug }
const { data, error } = await useAsyncData(`impact-report-story-${route.params.slug}`, async () => {
  const data = await $graphql.default.request(IMPACT_REPORT_STORY, variables)
  return data
})

if (error.value) {
  throw createError({
    ...error.value, statusMessage: 'Page not found.' + error.value, fatal: true
  })
}
if (!data.value.entry) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page Not Found',
    fatal: true
  })
}

if (data.value.entry.slug && process.server) {
  const { $elasticsearchplugin } = useNuxtApp()
  await $elasticsearchplugin.index(data.value.entry, data.value.entry.slug)
}

const page = ref(_get(data.value, 'entry', {}))
watch(data, (newVal, oldVal) => {
  console.log('In watch preview enabled, newVal, oldVal', newVal, oldVal)
  page.value = _get(newVal, 'entry', {})
})

useHead({

  title: page ? page.value?.title : '... loading',
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: removeTags(page.value?.text),
    },
  ],

})

const parsedByline = computed(() => {
  const bannerFeaturedByline = page.value.contributors.map((obj) => {
    if (obj.typeHandle === 'externalContributor')
      return `${`${obj.byline} ${obj.title}`}`
    else if (obj.typeHandle === 'staffMember')
      return `${`${obj.byline} ${obj.staffMember[0].title}`}`
    else
      return []
  })
  return bannerFeaturedByline
})
</script>

<template lang="html">
  <main
    id="main"
    class="page page-impact-report"
  >
    <BannerText
      v-if="page && (!page.heroImage || page.heroImage.length === 0)"
      class="banner-text"
      :title="page.title"
      :text="page.text"
      :byline="parsedByline"
    />

    <SectionWrapper
      v-if="page && page.heroImage && page.heroImage.length === 1"
      class="section-banner"
    >
      <BannerHeader
        :title="page.title"
        :text="page.text"
        :align-right="true"
        :media="page.heroImage[0].image[0]"
        :byline="parsedByline"
      />
    </SectionWrapper>

    <SectionWrapper theme="divider">
      <DividerWayFinder
        class="divider"
        color="about"
      />
    </SectionWrapper>

    <FlexibleBlocks
      class="content"
      :blocks="page.blocks"
    />
  </main>
</template>

<style lang="scss" scoped>
.page-impact-report {
  margin: 0 0 0 0;

  .section {
    margin: 1px auto;
  }

  :deep(.section-wrapper.top-level.theme-gray) {
    --color-theme: var(--color-white);
    padding: 0;
  }

  // refactor when option to turn off overlays is available in craft
  :deep(.section-banner) {

    .gradient-no-category,
    .molecule,
    .hatch {
      display: none;
    }
  }

  // .section-banner {
  //     margin-top: 0;
  //     margin-bottom: 0;
  // }
  // .banner-header {
  //     // margin-bottom: var(--space-xl);
  //     padding: 0;
  //     max-width: $container-xl-full-width + px;
  // }
  // ::v-deep .banner-header {
  //     margin-bottom: 0px;
  // }
  // .rich-text {
  //     margin: var(--unit-gutter) auto;
  // }
  // .breadcrumb-link {
  //     margin: var(--space-xl) auto;
  //     padding: 0 $whitespace-m-sides + px;
  //     max-width: $container-l-main + px;
  //     font-style: var(--font-secondary);
  //     font-size: 20px;
  //     color: var(--color-primary-blue-03);
  //     font-weight: 400;

  //     display: flex;
  //     align-items: center;
  // }
  // .divider {
  //     margin: var(--space-xl) auto;
  // }
  // .divider-way-finder {
  //     max-width: $container-l-main + px;
  //     margin: var(--space-3xl) auto;
  //     &.divider {
  //         box-sizing: unset;
  //     }
  // }
  // .divider-general {
  //     margin: var(--space-3xl) auto;
  //     max-width: $container-l-main + px;
  // }
  // .call-to-action {
  //     font-weight: 500;
  //     font-size: 18px;
  //     line-height: 100%;
  //     margin: var(--space-3xl) auto;
  //     padding: 0 $whitespace-m-sides + px;
  //     max-width: $container-l-main + px;

  //     display: flex;
  //     align-items: center;
  // }
  // .svg {
  //     text-decoration: underline;
  //     text-decoration-color: var(--color-primary-blue-03);
  //     padding-left: 5px;
  //     .line {
  //         stroke: var(--color-primary-blue-03);
  //     }
  //     .arrow-diagonal {
  //         fill: var(--color-primary-blue-03);
  //     }
  // }
  // .svg-arrow-right {
  //     flex-shrink: 0;
  //     .arrow-right {
  //         stroke: var(--color-primary-blue-03);
  //     }
  // }

  // .content {
  //     ::v-deep .section-wrapper {
  //         .flexible-block {
  //             background-color: var(--color-white);
  //             ul > * {
  //                 background-color: var(--color-white);
  //             }
  //             div.clipped-box {
  //                 background-color: var(--color-white);
  //             }
  //         }
  //         background-color: var(--color-white);
  //     }
  // }
  // @media #{$medium} {
  //     .divider-general {
  //         width: calc(100% - (var(--unit-gutter) * 2));
  //     }

  //     .rich-text {
  //         padding: 0 var(--unit-gutter);
  //     }

  //     .call-to-action,
  //     .breadcrumb-link {
  //         padding: 0 var(--unit-gutter);
  //     }
  // }

  // @media #{$has-hover} {
  //     .svg:hover {
  //         .arrow {
  //             path {
  //                 fill: var(--color-primary-blue-03);
  //             }
  //         }
  //         path {
  //             fill: var(--color-primary-blue-03);
  //             .arrow-diagonal {
  //                 color: var(--color-primary-blue-03);
  //             }
  //         }
  //     }

  //     .hover-text:hover {
  //         color: var(--color-primary-blue-03);
  //         @include link-hover;
  //     }
  // }
}
</style>
