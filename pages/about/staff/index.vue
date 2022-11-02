<template>
    <main class="page page-staff">
        <masthead-secondary title="Staff Directory" />
        <!-- TODO Add SearchGenric here when complete
                Filter by location, department, subject libarian -->

        <search-generic
            search-type="about"
            :filters="searchFilters"
            class="generic-search"
            @search-ready="getSearchData"
        />

        <section-wrapper theme="divider">
            <divider-way-finder />
        </section-wrapper>

        <section-wrapper class="browse-by">
            <h2 class="section-heading">
                Browse by Last Name
            </h2>
            <!-- TODO Add Browse by A-Z links -->
            <ul class="browse-by-options">
                <li>A</li>
                <li>B</li>
                <li>C</li>
                <li>D</li>
                <li>E</li>
                <li>F</li>
                <li>G</li>
                <li>H</li>
                <li>I</li>
                <li>J</li>
                <li>K</li>
                <li>L</li>
                <li>M</li>
                <li>N</li>
                <li>O</li>
                <li>P</li>
                <li>Q</li>
                <li>R</li>
                <li>S</li>
                <li>T</li>
                <li>U</li>
                <li>V</li>
                <li>W</li>
                <li>X</li>
                <li>Y</li>
                <li>Z</li>
                <!-- <li>View All</li> -->
            </ul>
        </section-wrapper>

        <section-wrapper>
            <section-staff-list :items="parsedStaffList" />
        </section-wrapper>
    </main>
</template>

<script>
// Helpers
import _get from "lodash/get"

// Utilities
import getListingFilters from "~/utils/getListingFilters"
import mergeFilters from "~/utils/mergeFilters"
import config from "~/utils/searchConfig"

// gql
import STAFF_LIST from "~/gql/queries/StaffList"
// import STAFF_LIST_WITH_DETAIL from "~/gql/queries/StaffListwithfulldetail"

export default {
    async asyncData({ $graphql, params, $dataApi }) {
        console.log("live preview  staff list")

        const searchAggsResponse = await $dataApi.getAggregations(
            config.staff.filters,
            "staffMember"
        )

        console.log(
            "Search Aggs Response: " + JSON.stringify(searchAggsResponse)
        )
        // Write a helper function for returning generic filters and doing the reduce part

        const data = await $graphql.default.request(STAFF_LIST)
        console.log("Craft Data:" + JSON.stringify(data))
        const allResults = await $dataApi.keywordSearchWithFilters(
            "*:*",
            "staffMember",
            [],
            "nameLast",
            ["*"]
        )
        console.log(
            "Use this data when the page loads: " + JSON.stringify(allResults)
        )
        /*const datawithfulldetail = await $graphql.default.request(
            STAFF_LIST_WITH_DETAIL
        )

        console.log(
            "staff list for indexing: " +
                JSON.stringify(datawithfulldetail.entries)
        )*/

        return {
            page: data,
            searchFilters: getListingFilters(
                searchAggsResponse,
                config.staff.filters
            ),
        }
    },
    data() {
        return {
            //searchFilters,
            //selectedView: this.$route.query.view,
        }
    },
    computed: {
        parsedStaffList() {
            return this.page.entries.map((obj) => {
                return {
                    ...obj,
                    to: `/about/staff/${obj.to}`,
                    image: _get(obj, "image[0]", null),
                    staffName: `${obj.nameFirst} ${obj.nameLast}`,
                }
            })
        },
    },
    methods: {
        async getSearchData(data) {
            console.log("from search-generic: " + JSON.stringify(data))
            console.log(config.staff.resultFields)
            const filters = mergeFilters(data.filters)

            const results = await this.$dataApi.keywordSearchWithFilters(
                data.text || "*",
                "staffMember",
                filters,
                "nameLast",
                config.staff.resultFields
            )
            console.log(results)
            if (results && results.hits && results.hits.total.value > 0)
                this.page.entries = this.parseResults(results.hits.hits)
        },
        parseResults(hits = []) {
            console.log("checking results data:" + JSON.stringify(hits[0]))

            return hits.map((obj) => {
                console.log(obj["_source"]["image"])
                return {
                    ...obj["_source"],
                    to: `${obj["_source"].to}`,
                    image: obj["_source"]["image"], //_get(obj["_source"]["image"], "image[0]", null),
                    staffName: `${obj["_source"].nameFirst} ${obj["_source"].nameLast}`,
                }
            })
        },
    },
}
</script>

<style lang="scss" scoped>
.page-staff {
    .search-container {
        position: relative;
        width: $container-l-cta + px;
        // height: 240px;
        background-color: var(--color-white);
        margin: 0 auto;
        margin-top: -96px;
        z-index: 10;
        border-radius: $rounded-slightly + px;

        padding: var(--space-l) var(--space-xl);

        display: flex;
        justify-content: flex-start;
        flex-direction: column;
        flex-wrap: wrap;

        .empty-search-box {
            background: var(--color-primary-blue-01);
            width: 100%;
            height: var(--space-2xl);
            // margin-bottom: var(--space-s);
        }

        .input-indicator {
            width: 100%;
            height: 2px;
            border-bottom: 2px solid var(--color-default-cyan-03);
            margin: var(--space-s) auto;
        }

        .filters {
            display: flex;
            flex-direction: row;
            gap: var(--space-xs);

            div {
                background: var(--color-primary-blue-03);
                height: var(--space-2xl);
                // width: calc((100% / 3) - (var(--space-xs) * 2));
                flex-grow: 1;
            }
        }

        @media #{$medium} {
            width: 100%;
            margin-top: 0;
        }

        @media #{$small} {
            .filters {
                flex-direction: column;
            }
        }
    }

    .browse-by {
        max-width: $container-l-main + px;
        margin: 0 auto var(--space-xl);
    }

    .section-heading {
        @include step-2;
        color: var(--color-primary-blue-03);
        margin-bottom: var(--space-m);
    }

    .browse-by-options {
        list-style: none;
        display: flex;
        justify-content: space-between;
        @include step-1;
        color: var(--color-primary-blue-03);
    }

    @media #{$medium} {
        .search-container {
            margin-top: -64px;
            width: calc(100% - (var(--unit-gutter) * 2));
        }
        .browse-by {
            padding: 0 var(--unit-gutter);
        }
    }

    @media #{$small} {
        .search-container {
            margin-top: -48px;
        }

        .browse-by-options {
            flex-wrap: wrap;
            justify-content: flex-start;
            align-items: center;
            gap: 4px 0;
        }

        li {
            padding: 4px;
            min-width: 44px;
        }
    }
}
</style>
