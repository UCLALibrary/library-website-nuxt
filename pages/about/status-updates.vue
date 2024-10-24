<script setup>
// COMPONENTS
import { NavBreadcrumb, BannerText, BannerHeader, PageAnchor, SectionWrapper, DividerWayFinder, FlexibleBlocks } from 'ucla-library-website-components'

const iframeContent = ref(null)
const page = ref({})
const h2Array = ref([]) // anchor tags
const { $getHeaders } = useNuxtApp()
useHead({
  title: page.value ? page.value.title : '... loading'
})
const parseParentPageURL = computed(() => {
  if (page.value.parent && page.value.parent.uri)
    return `/${page.value.parent.uri}/`

  return '/'
})

const parseParentTitle = computed(() => {
  if (page.value.parent && page.value.parent.title)
    return page.value.parent.title

  return 'Home'
})

const parsedButtonText = computed(() => {
  return _get(page.value, 'button[0].buttonText', '')
})

const parsedButtonTo = computed(() => {
  return _get(page.value, 'button[0].buttonUrl', '')
})
onMounted(async () => {

  // console.log("fetching data in onmounted from libguides proxy service")
  try {
    const response = await $fetch('https://libguides-proxy.library.ucla.edu/api/libguides-proxy')
    // console.log("Response from libguides proxy:", response)
    iframeContent.value = response
    // Call the plugin method to get the .section-header2 and .section-header3 elements
    h2Array.value = $getHeaders.getHeadersMethod()
  } catch (error) {
    console.error('Error fetching iframe content:', error)
  }
})
</script>
<template>

  <main
    id="main"
    class="page page-general-content"
  >
    <NavBreadcrumb
      v-if="page"
      :title="page.title"
      class="breadcrumb"
      :to="parseParentPageURL"
      :parent-title="parseParentTitle"
    />

    <BannerText
      v-if="page && (!page.heroImage || page.heroImage.length == 0)"
      class="banner-text"
      :category="page.format"
      :title="page.title"
      :text="page.summary"
      :button-text="parsedButtonText"
      :to="parsedButtonTo"
    />

    <SectionWrapper class="section-banner">
      <BannerHeader
        v-if="page && page.heroImage && page.heroImage.length == 1"
        :media="page.heroImage[0].image[0]"
        :category="page.format"
        :title="page.title"
        :text="page.summary"
        :to="parsedButtonTo"
        :prompt="parsedButtonText"
      />
    </SectionWrapper>

    <SectionWrapper theme="divider">
      <DividerWayFinder class="divider-way-finder" />
    </SectionWrapper>
    <div>
      <h1>Status Updates</h1>
      <hr>
      <h3> Remove this iframe later</h3>
      <iframe
        id="s-lg-widget-frame-1727199122170"
        title="Content Box frame"
        width="100%"
        height="250"
        scrolling="yes"
        style="border: 1px solid #bbb; border-radius: 4px;"
        src="//lgapi-us.libapps.com/widget_box.php?site_id=705&widget_type=8&output_format=2&widget_title=Library+Alert&widget_height=250&widget_width=100%25&widget_embed_type=1&guide_id=1427138&box_id=33325708&map_id=39190263&content_only=0&include_jquery=1&config_id=1727199122170"
      />

      <div v-if="iframeContent">
        <h2>Extracted Content:</h2>
        <pre class="styled-pre">{{ iframeContent }} </pre>
      </div>
    </div>

    <PageAnchor
      v-if="h2Array.length >= 3"
      :section-titles="h2Array"
    />

    <FlexibleBlocks
      v-if="page"
      class="flexible-content"
      :blocks="page.blocks"
    />
  </main>
</template>
<style scoped>
.styled-pre {
  background-color: #f4f4f4;
  color: #333;
  padding: 40px;
  border-radius: 5px;
  overflow-x: auto;
  white-space: pre-wrap;
  /* Allows wrapping */
  font-family: 'Courier New', monospace;
}
</style>
