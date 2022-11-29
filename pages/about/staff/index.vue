<template>
    <main class="page page-staff">
        <masthead-secondary title="Staff Directory" />
        <!-- TODO Add SearchGenric here when complete
                Filter by location, department, subject libarian -->
        <!--  -->
        <search-generic
            search-type="about"
            :filters="searchFilters"
            class="generic-search"
            :search-generic-query="searchGenericQuery"
            @search-ready="getSearchData"
        />
        <!--h4 style="margin: 30px 400px">
            No of hits

            {{ `from craft is ${parsedPages.length}` }}
        </h4>
        <h4 style="margin: 30px 400px">
            No of hits from ES
            {{
                hits &&
                    `calling parsedhitsresults length
            ${hits.length}`
            }}
        </h4-->

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
            <section-staff-list
                v-if="page.entries"
                :items="parsedStaffList"
            />
            <section-staff-list
                v-else-if="hits && hits.length > 0"
                :items="parseHitsResults"
            />
            <h4 v-else>
                No results found
            </h4>
        </section-wrapper>
    </main>
</template>

<script>
// Helpers
import _get from "lodash/get"

// Utilities
import getListingFilters from "~/utils/getListingFilters"
import config from "~/utils/searchConfig"

// gql
import STAFF_LIST from "~/gql/queries/StaffList"

export default {
    data() {
        return {
            page: {},
            hits: [],
            searchFilters: [],
            searchGenericQuery: {
                queryText: this.$route.query.q || "",
                queryFilters:
                    (this.$route.query.filters &&
                        JSON.parse(this.$route.query.filters)) ||
                    {},
            },
            bookmarked: true,
        }
    },
    async fetch() {
        console.log("live preview  staff list")
        this.page = {}
        this.hits = []
        /*console.log("test query parameters: " + this.$route.query.q)
        console.log("test query parameters: " + this.$route.query.filters)*/
        if (
            (this.$route.query.q && this.$route.query.q !== "") ||
            this.$route.query.filters
        ) {
            console.log("in router query in asyc data")
            const results = await this.$dataApi.keywordSearchWithFilters(
                this.$route.query.q || "*",
                "sectionHandle:staffMember",
                JSON.parse(this.$route.query.filters) || {},
                "nameLast.keyword",
                config.staff.resultFields,
                config.staff.filters
            )
            console.log("getsearchdata method:" + JSON.stringify(results))
            this.page = {}
            this.hits = []
            if (results && results.hits && results.hits.total.value > 0) {
                this.hits = results.hits.hits
                this.page = {}
            } else {
                this.hits = []
                this.page = {}
            }
            this.searchGenericQuery = {
                queryText: this.$route.query.q || "",
                queryFilters:
                    (this.$route.query.filters &&
                        JSON.parse(this.$route.query.filters)) ||
                    {},
            }
        } else {
            // if route queries are empty fetch data from craft
            this.page = await this.$graphql.default.request(STAFF_LIST)
            this.hits = []
            //console.log("Craft data:" + JSON.stringify(data))
        }
        this.bookmarked = false
    },
    computed: {
        parsedPages() {
            return this.page.entries || []
        },
        parsedStaff(obj) {
            return obj.nameFirst
        },
        parsedStaffList() {
            // console.log("in parsedStaff")
            return (this.page.entries || []).map((obj, index) => {
                return {
                    ...obj,
                    to: `/about/staff/${obj.to}`,
                    image: _get(obj, "image[0]", null),
                    staffName: obj.alternativeName.length > 0
                        ? `${obj.nameFirst} ${obj.nameLast} ${obj.alternativeName[0].fullName}`
                        : `${obj.nameFirst} ${obj.nameLast}`
                }
            })
        },
        parseHitsResults() {
            /*console.log(
                "ParseHits Results checking results data:" +
                    JSON.stringify(this.hits)
            )*/

            return this.parseHits(this.hits)
        },

    },
    watch: {
        "$route.query": "$fetch",
        /*"$route.query.q"(newValue) {
            console.log("watching querytEXT:" + newValue)
        },
        "$route.query.filters"(newValue) {
            console.log("watching filters:" + newValue)
        },*/
    },

    async mounted() {
        console.log("In mounted")
        /*console.log("ESREADkey:" + this.$config.esReadKey)
        console.log("ESURLkey:" + this.$config.esURL)*/
        this.setFilters()
        // bookmarked search queries are not calling fetch
        if (
            (this.bookmarked &&
                this.$route.query.q &&
                this.$route.query.q !== "") ||
            this.$route.query.filters
        ) {
            this.searchBookmarkedQuery()
            this.searchGenericQuery = {
                queryText: this.$route.query.q || "",
                queryFilters:
                    (this.$route.query.filters &&
                        JSON.parse(this.$route.query.filters)) ||
                    {},
            }
        }
    },
    methods: {
        async searchBookmarkedQuery() {
            this.page = {}
            this.hits = []
            const results = await this.$dataApi.keywordSearchWithFilters(
                this.$route.query.q || "*",
                "sectionHandle:staffMember",
                JSON.parse(this.$route.query.filters),
                "nameLast.keyword",
                config.staff.resultFields,
                config.staff.filters
            )
            console.log(
                "In bookmarked method data is:" + JSON.stringify(results)
            )

            if (results && results.hits && results.hits.total.value > 0) {
                this.hits = results.hits.hits
                this.page = {}
            } else {
                this.page = {}
                this.hits = []
            }
        },
        async setFilters() {
            const searchAggsResponse = await this.$dataApi.getAggregations(
                config.staff.filters,
                "staffMember"
            )

            console.log(
                "Search Aggs Response: " + JSON.stringify(searchAggsResponse)
            )
            this.searchFilters = getListingFilters(
                searchAggsResponse,
                config.staff.filters
            )
        },
        parseHits(hits = []) {
            return hits.map((obj) => {
                // console.log(obj["_source"]["image"])
                return {
                    ...obj["_source"],
                    to: `/${obj["_source"].uri}`,
                    image: _get(obj["_source"]["image"], "[0]", null),
                    staffName: `${obj["_source"].nameFirst} ${obj["_source"].nameLast}`, // TODO append to add alternativeName like above
                }
            })
        },
        parseBookmarkedQueryResults(hits = []) {
            // console.log("checking results data:" + JSON.stringify(hits[0]))

            return this.parseHits(hits)
        },
        async getSearchData(data) {
            console.log("On the page getsearchdata called")
            this.page = {}
            this.hits = []
            this.$router.push({
                path: "/about/staff",
                query: {
                    q: data.text,
                    filters: JSON.stringify(data.filters),
                },
            })
            this.searchBookmarkedQuery()
            this.searchGenericQuery = {
                queryText: this.$route.query.q || "",
                queryFilters:
                    (this.$route.query.filters &&
                        JSON.parse(this.$route.query.filters)) ||
                    {},
            }
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
