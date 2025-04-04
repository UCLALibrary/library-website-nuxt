<script setup>
// COMPONENTS
import { NavBreadcrumb, BannerText, PageAnchor, SectionWrapper, DividerWayFinder, FlexibleBlocks } from '@ucla-library-monorepo/ucla-library-website-components'

const content = ref(null)
const page = ref({})
const h2Array = ref([]) // anchor tags
const { $getHeaders } = useNuxtApp()
const bannerSummary = ref('')
useHead({
  title: 'Library Status Updates',
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: removeTags(bannerSummary.value)
    },
  ]
})

// Define options for formatting
const options = {
  weekday: 'long', // Full name of the day
  year: 'numeric', // Full numeric year
  month: 'long', // Full name of the month
  day: 'numeric' // Numeric day of the month
}

onMounted(async () => {
  // console.log("fetching data in onmounted from libguides proxy service")
  try {
    const response = await $fetch('https://libguides-proxy.library.ucla.edu/api/libguides/library/status/updates/proxy')

    // const response = await $fetch('http://localhost:8888/api/libguides/library/status/updates/proxy')
    // console.log("Response from libguides proxy:", response)
    content.value = response
    page.value.blocks = response.blocks

    // Format the date with options
    /*
    const today = new Date()
    const formattedDate = today.toLocaleDateString('en-US', options)
    bannerSummary.value = `Last updated ${formattedDate}.`
    */
    bannerSummary.value = response.summary
    // Call the plugin method to get the .section-header2 and .section-header3 elements
    h2Array.value = $getHeaders.getHeadersMethod()
  } catch (error) {
    console.error('Error fetching libguides content:', error)
  }
})
</script>
<template>
  <main
    id="main"
    class="page page-general-content"
  >
    <NavBreadcrumb
      title="Library Status Updates"
      class="breadcrumb"
      to="/about"
      parent-title="About Us"
    />

    <BannerText
      class="banner-text"
      title="Library Status Updates"
      :text="bannerSummary"
    />

    <SectionWrapper theme="divider">
      <DividerWayFinder class="divider-way-finder" />
    </SectionWrapper>
    <!--div>
      <h1>Status Updates</h1>
      <hr>
      <h3> Remove this later</h3>

      <div v-if="content">
        <h2>Proxy Content:</h2>
        <pre class="styled-pre">{{ content }} </pre>
      </div>
    </div-->

    <PageAnchor
      v-if="h2Array.length >= 3"
      :section-titles="h2Array"
    />

    <FlexibleBlocks
      v-if="page && page.blocks"
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
