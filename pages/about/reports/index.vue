<script setup>
// COMPONENTS
import { NavBreadcrumb, BannerText, SectionWrapper, DividerWayFinder, SectionStaffArticleList, BlockCallToAction } from 'ucla-library-website-components'

// HELPERS
import _get from 'lodash/get'
import fixUri from '../utils/fixUri'
import removeTags from '../utils/removeTags'

// GQL
import IMPACT_REPORTS_LIST from '../gql/queries/ImpactReportsList.gql'

const { $graphql } = useNuxtApp()
const { data: page, error } = await useAsyncData('impact-report-all-list', async () => {
  const data = await $graphql.default.request(IMPACT_REPORTS_LIST)
  return data
})
if (error.value) {
  throw createError({
    ...error.value, statusMessage: 'Page not found.', fatal: true
  })
}
if (!page.value.entry) {
  throw createError({ statusCode: 404, message: 'Page not found', fatal: true })
}

useHead({
  title: page.value?.entry?.title || '... loading',
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: removeTags(page.value?.entry?.summary),
    },
  ],
})
const parsedReportsList = computed(() => {
  return page.value?.entries.map((obj) => {
    return {
      to: fixUri(_get(obj, 'to', null)),
      image: _get(obj, 'image[0]', null),
      title: _get(obj, 'title', 'hi'),
      description: _get(obj, 'richText', null),
    }
  })
})
</script>

<template>
  <main
    id="main"
    class="page page-news"
  >
    <NavBreadcrumb
      to="/about"
      :title="page.entry.title"
      parent-title="About Us"
    />
    <BannerText
      :title="page.entry.title"
      :text="page.entry.summary"
      button-text="View this year's report"
      :to="parsedReportsList[0].to"
    />

    <SectionWrapper theme="divider">
      <DividerWayFinder color="about" />
    </SectionWrapper>

    <SectionWrapper>
      <SectionStaffArticleList :items="parsedReportsList" />
    </SectionWrapper>

    <SectionWrapper theme="divider">
      <DividerWayFinder color="about" />
    </SectionWrapper>

    <SectionWrapper>
      <BlockCallToAction
        class="block-call-to-action"
        :is-global="true"
      />
    </SectionWrapper>
  </main>
</template>

<style lang="scss" scoped>
.page-news {
  padding-left: 50px;

  .entry-count {
    @include step-2;
    color: var(--color-primary-blue-03);
    margin: var(--space-m);
  }

  .section-heading {
    @include step-2;
    color: var(--color-primary-blue-03);
    margin-bottom: var(--space-m);
  }

  .all-news-heading {
    @include step-1;
    color: var(--color-primary-blue-03);
  }

  .news-item-link {
    list-style: none;
    display: flex;
    justify-content: space-between;
    @include step-1;
    color: var(--color-primary-blue-03);
  }
}
</style>
