<script setup>
const iframeContent = ref(null)

onMounted(async () => {
  try {
    const response = await $fetch('/api/get-iframe-content')
    iframeContent.value = response
  } catch (error) {
    console.error('Error fetching iframe content:', error)
  }
})
</script>
<template>
  <div>
    <h1>Status Updates</h1>
    <hr>
    <h3> Remove this iframe later</h3>
    <iframe
      title="Content Box frame"
      id="s-lg-widget-frame-1727199122170"
      width="100%"
      height="250"
      scrolling="yes"
      style="border: 1px solid #bbb; border-radius: 4px;"
      src="//lgapi-us.libapps.com/widget_box.php?site_id=705&widget_type=8&output_format=2&widget_title=Library+Alert&widget_height=250&widget_width=100%25&widget_embed_type=1&guide_id=1427138&box_id=33325708&map_id=39190263&content_only=0&include_jquery=1&config_id=1727199122170"
    ></iframe>

    <div v-if="iframeContent">
      <h2>Extracted Content:</h2>
      <pre class="styled-pre">{{ iframeContent }} </pre>
    </div>
  </div>
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