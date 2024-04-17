<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps({
  error: Object as () => NuxtError
})
const isDevelopment = computed(() => process.env.NODE_ENV === 'development')
</script>

<template>
  <NuxtLayout>
    <main
      id="main"
      class="page page-error"
    >
      <p class="error">
        {{ error?.statusCode }}
      </p>
      <pre v-if="isDevelopment">
        {{ error?.message }}
        <br>
        {{ error }}
      </pre>
      <divider-way-finder />

      <rich-text
        class="
        error-text"
      >
        <h1
          v-if="error?.statusCode === 404"
          class="error-title"
        >
          Page not found
        </h1>
        <h1
          v-else
          class="error-title"
        >
          An error occurred
        </h1>

        <p>
          We can’t find the page you are looking for, but we're here to
          help. <nuxt-link to="/">
            Go back to home page
          </nuxt-link> or
          try these regularly visited links:
        </p>
        <ul>
          <li>
            <a href="https://library.ucla.edu">UCLA Library Home</a>
          </li>
          <li>
            <a href="https://library.ucla.edu/help/research-help">Research Help</a>
          </li>
          <li>
            <a href="https://library.ucla.edu/help/services-resources/accessibility-resources">Accessibility
              Resources</a>
          </li>
        </ul>
      </rich-text>
    </main>
  </NuxtLayout>
</template>

<style lang="scss" scoped>
.page-error {
  padding: var(--space-3xl) var(--unit-gutter);

  .error {
    font-family: var(--font-secondary);
    font-size: 248px;
    font-weight: 600;
    line-height: 1;
    background: linear-gradient(20deg,
        #fd9be0 10.99%,
        #e29aee 23.02%,
        #c099ff 32.91%,
        #8ba0ef 42.44%,
        #0aa5ff 56.68%,
        #06bef2 73.09%,
        #00e0e0 89.01%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    text-align: center;
  }

  .error-title {
    @include step-5;
    margin-bottom: 32px;

    p {
      margin-bottom: var(--space-xl);
    }
  }

  @media #{$small} {
    .error {
      font-size: 128px;
    }
  }
}
</style>
