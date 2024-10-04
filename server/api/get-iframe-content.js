export default defineEventHandler(async (event) => {
  try {
    const iframeUrl = "https://lgapi-us.libapps.com/widget_box.php?site_id=705&widget_type=8&output_format=2&widget_title=Library+Alert&widget_height=250&widget_width=100%25&guide_id=1427138&box_id=33325708&map_id=39190263&content_only=0&include_jquery=1&config_id=1727199122170"

    const response = await $fetch(iframeUrl)
    return response
  } catch (error) {
    console.error('Error fetching iframe content:', error)
    throw new Error('Failed to fetch iframe content.')
  }
})
