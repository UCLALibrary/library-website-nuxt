<script setup lang="ts">
// GQL
import PROJECT_DETAIL from "../gql/queries/ProjectDetail.gql"

// Helpers
import _get from "lodash/get"

const { $graphql } = useNuxtApp()

const route = useRoute()

const { data, error } = await useAsyncData(`projects/${route.params.slug}`, async () => {
  const data = await $graphql.default.request(PROJECT_DETAIL, { slug: route.params.slug })
  // console.log('GQL Resource Detail data:', data)
  return data
})

const dataValue = data.value as Record<string, unknown> | undefined

if (error.value) {
  throw createError({
    ...error.value, statusMessage: 'Page not found.' + error.value, fatal: true
  })
}

if (!dataValue?.entry) {
  throw createError({ statusCode: 404, message: 'Page not found', fatal: true })
}
if (dataValue?.entry && import.meta.prerender) {

  try {
    // Call the composable to use the indexing function
    const { indexContent } = useContentIndexer()
    await indexContent(dataValue?.entry, route.params.slug)
    console.log('Projects indexed successfully during static build', route.params.slug)
  } catch (error) {

    console.error('FAILED TO INDEX News during static build:', error)
  }
}

const page = ref(_get(data.value, 'entry', {}))
// PREVIEW
watch(data, (newVal, oldVal) => {
  console.log('In watch preview enabled, newVal, oldVal', newVal, oldVal)
  page.value = _get(newVal, 'entry', {})
})

// HEAD METADATA
useHead({
  title: page.value ? page.value.title : '... loading',
})

const parsedButtonText = computed(() => {
  return _get(page.value, 'meapProjectCallToAction[0].buttonText', '')
})


const parsedButtonTo = computed(() => {
  const buttonTo = _get(
    page.value,
    "meapProjectCallToAction[0].externalUrl",
    ""
  )
  return buttonTo
    ? buttonTo
    : _get(
      page.value,
      "meapProjectCallToAction[0].uploadAsset[0].url",
      ""
    )
})
const { hasCTA } = useGlobalCallToAction()
</script>
<template lang="html">
  <main
    id="main"
    class="page page-project-detail"
  >
    <nav-breadcrumb
      :title="page.title"
      to="/projects"
      parent-title="Funded Projects"
      class="nav-breadcrumb"
    />

    <banner-text
      v-if="!page.heroImage || page.heroImage.length == 0"
      class="banner-text"
      :category="page.format"
      :title="page.title"
      :text="page.summary"
      :button-text="parsedButtonText"
      :to="parsedButtonTo"
    />

    <section-wrapper class="section-banner">
      <!-- media prop replaces image prop going forward for this component -->
      <banner-header
        v-if="page.heroImage && page.heroImage.length == 1"
        :media="page.heroImage[0].image[0]"
        :category="page.format"
        :title="page.title"
        :text="page.summary"
        :to="parsedButtonTo"
        :prompt="parsedButtonText"
      />
    </section-wrapper>

    <section-wrapper theme="divider">
      <divider-way-finder
        class="divider-way-finder"
        color="help"
      />
    </section-wrapper>

    <section-wrapper section-title="About the Project">
      <div
        class="title-general"
        v-html="page.titleGeneral"
      />

      <div
        v-if="page.projectType"
        class="project-type"
        v-html="page.projectType"
      />

      <rich-text
        v-if="page.projectDescription"
        :rich-text-content="page.projectDescription"
        class="project-description"
      />

      <rich-text
        v-if="page.citation"
        :rich-text-content="page.citation"
        class="citation"
      />

      <divider-general
        v-if="page.projectContributors && page.projectDescription"
        class="divider-general"
      />

      <h3
        v-if="page.projectContributorsSubheading"
        class="contributors-subheading"
        v-html="page.projectContributorsSubheading"
      />

      <rich-text
        v-if="page.projectContributors"
        class="contributors-content"
        :rich-text-content="page.projectContributors"
      />

      <h3
        v-if="page.institution"
        class="institution-subheading"
      >
        Host Institution
      </h3>

      <rich-text
        v-if="page.institution"
        class="institution-content"
        :rich-text-content="page.institution"
      />
    </section-wrapper>

    <section-wrapper theme="divider">
      <divider-way-finder
        class="divider-way-finder"
        color="help"
      />
    </section-wrapper>

    <flexible-blocks
      v-if="page.blocks && page.blocks.length"
      class="content"
      :blocks="page.blocks"
    />

    <section-wrapper theme="divider">
      <divider-way-finder
        v-if="page.blocks && page.blocks.length"
        class="divider-way-finder"
        color="help"
      />
    </section-wrapper>
    <client-only>
      <section-wrapper>
        <block-call-to-action
          v-if="hasCTA"
          class="block-call-to-action"
          :is-meap-global="true"
        />
      </section-wrapper>
    </client-only>
  </main>
</template>



<style lang="scss" scoped>
.page-project-detail {

  .banner-text,
  .banner-header {
    --color-theme: var(--color-help-green-03);
  }

  .section-banner.section-wrapper.theme-white {
    margin-top: 0;
  }

  .title-general {
    @include step-1;
    color: var(--color-secondary-grey-05);
    max-width: $container-l-main + px;
    margin: 0 auto 12px;
  }

  .project-type {
    @include step-0;
    font-weight: $font-weight-medium;
    color: var(--color-primary-blue-03);
    text-transform: capitalize;
    max-width: $container-l-main + px;
    margin: 0 auto var(--space-m);
  }

  .citation {
    margin-top: var(--space-m);

    :deep(p) {
      color: var(--color-secondary-grey-04);
    }
  }

  .contributors-subheading,
  .institution-subheading {
    @include step-1;
    max-width: $container-l-main + px;
    margin: 0 auto var(--space-m);
    color: var(--color-secondary-grey-05);
  }

  .contributors-content,
  .institution-content {
    @include step-0;
    margin-bottom: var(--space-xl);
  }
}
</style>
