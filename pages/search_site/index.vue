<template lang="html">
    <div>
        <search-generic search-generic-query="service" />
        <section-wrapper
            v-for="(result, index) in searchResults"
            :key="`SearchResultBlock${index}`"
        >
            <search-result
                :title="result._source.title"
                :category="result._source.sectionHandle"
                :summary="result._source.summary"
                to="/"
            />
            <divider-general />
        </section-wrapper>
        {{ searchResults }}

        <section-wrapper>
            <divider-way-finder />
        </section-wrapper>
    </div>
</template>

<script>
// Helpers
import _get from "lodash/get"

export default {
    async asyncData({ $dataApi }) {
        const searchResponse = await $dataApi.siteSearch()
        const searchJson = JSON.stringify(searchResponse)
        const searchObject = JSON.parse(searchJson)
        return { searchResults: _get(searchObject, "hits.hits", []) }
    },
}
</script>

<style lang="scss" scoped></style>
