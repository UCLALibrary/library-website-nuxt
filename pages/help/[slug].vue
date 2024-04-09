<script setup>
// HELPERS
import _get from "lodash/get"
import removeTags from "../utils/removeTags"

// GQL
import HELP_TOPIC_DETAIL from "../gql/queries/HelpTopicDetail.gql"

export default {
  async asyncData({ $graphql, params, $elasticsearchplugin, error }) {
    const data = await $graphql.default.request(HELP_TOPIC_DETAIL, {
      slug: params.slug,
    })
    if (!data.entry) {
      error({ statusCode: 404, message: "Page not found" })
    }
    if (data && params.slug !== undefined) {
      //console.log("Helptopics slugs Indexing slug: " + params.slug)
      await $elasticsearchplugin.index(data.entry, params.slug)
    }
    // //console.log("Data fetched: " + JSON.stringify(data))

    if (data.entry) {
      data.entry.serviceOrResourceType = "help topic"
    }

    return {
      page: _get(data, "entry", {}),
    }
  },
  head() {
    let title = this.page ? this.page.title : "... loading"
    let metaDescription = removeTags(this.page.text)

    return {
      title: title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: metaDescription,
        },
      ],
    }
  },
  data() {
    return {
      h2Array: [] // anchor tags
    }
  },
  computed: {
    parsedHelpTopicBlocks() {
      return this.page.helpTopicBlocks.map((obj) => {
        return {
          ...obj,
          parsedAssociatedEntries: obj.associatedEntries.map(
            (entry) => {
              return {
                ...entry,
                to: entry.externalResourceUrl
                  ? entry.externalResourceUrl
                  : `/${entry.uri}`,
              }
            }
          ),
        }
      })
    },
  },
  mounted() {
    // Call the plugin method to get the .section-header2 and .section-header3 elements
    this.h2Array = this.$getHeaders.getHeadersMethod();
  }
}
</script>

<template lang="html">
  <main
    id="main"
    class="page page-help-topic"
  >
    <h1>Hello Page!</h1>
  </main>
</template>

<style lang="scss" scoped>
.page-help-topic {}
</style>
