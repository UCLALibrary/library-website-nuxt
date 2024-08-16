<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { ButtonLink } from 'ucla-library-website-components'

// Props
defineProps({
  src: {
    type: String,
    default: '',
  },

})
const iframeRef = ref<HTMLIFrameElement | null>(null)
const trackHeight = ref(0)
// Function to adjust iframe height
function adjustIframeHeight(data: number) {
  if (iframeRef.value) {
    console.log('iframe calculated height:', data)
    iframeRef.value.style.height = `${data + 20}px`
  }
}
// Polling mechanism to adjust height
function startPolling() {
  setInterval(() => {
    try {
      if (iframeRef.value) {
        const height = iframeRef.value.contentWindow?.document.body.scrollHeight
        if (height && height !== trackHeight.value) {
          adjustIframeHeight(height)
          trackHeight.value = height
        }
      }
    } catch (e) {
      console.error('Cross-origin access error or other issue:', e)
      // If cross-origin error, you can disable polling or add alternative logic
      // clearInterval(intervalId)
    }
  }, 2000) // Adjust every 2 seconds, can be tuned as needed
}
// Mounted
onMounted(() => {
  window.addEventListener(
    'message',
    (e) => {
      const eventName = e.data[0]
      const data = e.data[1]
      // Previously we used JS DOM manipulation to set the height of the iframe via getElementsById / getElementsByTagName
      // HOWEVER, this was failing when a race condition occured between the iframe loading and the JS DOM manipulation (APPS-2852)
      // THEREFORE, we are now using vue refs to set the height of the iframe, which should be sturdier
      if (eventName === 'setHeight' && iframeRef.value)
        adjustIframeHeight(data)
    },
    false
  )
  window.onload = () => {
    if (iframeRef.value) {
      iframeRef.value.contentWindow?.postMessage('requestHeight', '*')
    }
  }

  window.onresize = () => {
    if (iframeRef.value) {
      iframeRef.value.contentWindow?.postMessage('requestHeight', '*')
    }
  }
  startPolling()
})
</script>

<template>
  <div class="the-hours">
    <h3 class="title">
      Hours
    </h3>
    <div class="content">
      <iframe
        id="the-iframe"
        ref="iframeRef"
        title="Hours for location"
        class="iframe"
        :src="src"
        frameBorder="0"
        width="100%"
        height="100%"
      />
      <ButtonLink
        label="All Library Hours"
        :is-secondary="true"
        to="https://calendar.library.ucla.edu/hours"
        class="btn-lnk"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.the-hours {
  max-width: 930px;
  width: 100%;

  .title {
    color: var(--color-primary-blue-03);
    @include step-2;
    margin-bottom: var(--space-m);
  }

  .content {
    border-radius: var(--rounded-slightly-all);
    border: 2px solid var(--color-primary-blue-01);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    align-content: space-between;

    .btn-lnk {
      max-width: 300px;
      margin-left: 10px;
      margin-top: 8px;
      margin-bottom: 20px;
    }

    .iframe {
      max-width: 928px;
      padding: 12px;
    }

    table {
      height: 100%;
    }
  }
}
</style>
