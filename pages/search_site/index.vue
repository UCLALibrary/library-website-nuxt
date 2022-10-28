<template lang="html">
    <div>
        <search-generic />
        <div
            v-for="(result, index) in searchResults"
            :key="`SearchResult${index}`"
        >
            {{ result }}
            <divider-general />
        </div>
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
        const searchResponse = await $dataApi.keywordSearch("*")
        const searchJson = JSON.stringify(searchResponse)
        const searchObject = JSON.parse(searchJson)
        return { searchResults: _get(searchObject, "hits.hits", []) }
    },
}
</script>

<style lang="scss" scoped></style>
