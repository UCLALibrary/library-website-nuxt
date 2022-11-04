<template lang="html">
    <div>
        <search-generic @search-ready="getSearchData" />
        <section-wrapper
            v-for="(result, index) in page"
            :key="`SearchResultBlock${index}`"
        >
            <search-result
                :title="result.title"
                :category="result.sectionHandle"
                :summary="result.summary"
                to="/"
            />
            <divider-general />
        </section-wrapper>
        {{ page }}

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
        let data = await $dataApi.siteSearch()
        console.log(data)
        return {
            page: data,
        }
    },
    methods: {
        async getSearchData(data) {
            // console.log("from search-generic: " + JSON.stringify(data.text))
            // let keyword =
            //     data && data.text && Object.keys(data).length != 0
            //         ? data.text
            //         : "*"

            // console.log(Object.keys(data).length)
            const results = await this.$dataApi.siteSearch(data.text)
            if (results && results.hits && results.hits.total.value > 0)
                this.page = this.parseResults(results.hits.hits)
        },
        parseResults(hits = []) {
            // console.log("checking results data:" + JSON.stringify(hits[0]))

            return hits.map((obj) => {
                return {
                    ...obj["_source"],
                    to: `${obj["_source"].to}`,
                    title: obj["_source"]["title"],
                    category: obj["_source"]["category"],
                    summary: obj["_source"]["summary"],
                }
            })
        },
    },
}
</script>

<style lang="scss" scoped></style>
