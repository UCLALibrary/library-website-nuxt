<template>
    <main
        id="main"
        class="page page-staff"
    >
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

        <section-wrapper theme="divider">
            <divider-way-finder />
        </section-wrapper>

        <div v-if="$fetchState.pending">
            <p>.....Its Loading</p>
        </div>
        <div v-else-if="$fetchState.error">
            <p>There is an error</p>
        </div>
        <div v-else>
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

            <section-wrapper>
                <alphabetical-browse-by
                    v-if="
                        (searchGenericQuery.queryFilters[
                            'subjectLibrarian.keyword'
                        ] &&
                            searchGenericQuery.queryFilters[
                                'subjectLibrarian.keyword'
                            ] === '') ||
                            !searchGenericQuery.queryFilters[
                                'subjectLibrarian.keyword'
                            ]
                    "
                    :selected-letter-prop="selectedLetterProp"
                    @selectedLetter="searchBySelectedLetter"
                />
                <section-staff-list
                    v-if="page.entries"
                    :items="parsedStaffList"
                />
                <section-staff-list
                    v-else-if="
                        hits &&
                            hits.length > 0 &&
                            ((searchGenericQuery.queryFilters[
                                'subjectLibrarian.keyword'
                            ] &&
                                searchGenericQuery.queryFilters[
                                    'subjectLibrarian.keyword'
                                ] === '') ||
                                !searchGenericQuery.queryFilters[
                                    'subjectLibrarian.keyword'
                                ])
                    "
                    :items="parseHitsResults"
                />
                <!-- TODO There is a ticket to create a component for this data structure -->
                <table
                    v-if="
                        searchGenericQuery.queryFilters[
                            'subjectLibrarian.keyword'
                        ] &&
                            searchGenericQuery.queryFilters[
                                'subjectLibrarian.keyword'
                            ] === 'yes'
                    "
                >
                    <thead>
                        <tr>
                            <th>Subject Area</th>

                            <th>Name</th>

                            <th>Contact Information</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr
                            v-for="(item, index) in groupByAcademicLibraries"
                            :key="`subjectArea${index}`"
                        >
                            <td>{{ item.subjectArea }}</td>
                            <td>{{ item.staffName }}</td>
                            <td>{{ item.email }}</td>
                        </tr>
                    </tbody>
                </table>
                <h4 v-else>
                    No results found
                </h4>
            </section-wrapper>
        </div>
    </main>
</template>

<script>
// HELPERS
import _get from "lodash/get"
import _ from "lodash"

// GQL
import STAFF_LIST from "~/gql/queries/StaffList"

// UTILITIES
import getListingFilters from "~/utils/getListingFilters"
import config from "~/utils/searchConfig"

export default {
    data() {
        return {
            page: {},
            hits: [],
            searchFilters: [],
            selectedLetterProp: "",
            searchGenericQuery: {
                queryText: this.$route.query.q || "",
                queryFilters:
                    (this.$route.query.filters &&
                        JSON.parse(this.$route.query.filters)) ||
                    {},
            },
        }
    },
    fetchOnServer: false,
    // multiple components can return the same `fetchKey` and Nuxt will track them both separately
    fetchKey: "staff-list",
    async fetch() {
        console.log("live preview  staff list")
        this.page = {}
        this.hits = []
        /*console.log("test query parameters: " + this.$route.query.q)
        console.log("test query parameters: " + this.$route.query.filters)*/
        if (
            (this.$route.query.q && this.$route.query.q !== "") ||
            this.$route.query.filters ||
            this.$route.query.lastNameLetter
        ) {
            let query_text = this.$route.query.q || "*"
            if (
                this.$route.query.lastNameLetter &&
                this.$route.query.lastNameLetter !== "All"
            ) {
                query_text =
                    query_text +
                    ` AND nameLast:${this.$route.query.lastNameLetter}*`
            } else if (
                this.$route.query.lastNameLetter &&
                this.$route.query.lastNameLetter === "All"
            ) {
                query_text = query_text + " AND nameLast:*"
            }
            console.log("in router query in asyc data")
            const results = await this.$dataApi.keywordSearchWithFilters(
                query_text,
                config.staff.searchFields,
                "sectionHandle:staffMember",
                JSON.parse(this.$route.query.filters) || {},
                config.staff.sortField,
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
            this.selectedLetterProp = this.$route.query.lastNameLetter || ""
        } else {
            // if route queries are empty fetch data from craft
            this.page = await this.$graphql.default.request(STAFF_LIST)
            this.hits = []
            this.searchGenericQuery = {
                queryText: "",
                queryFilters: {},
            }
            this.selectedLetterProp = ""
            //console.log("Craft data:" + JSON.stringify(data))
        }
    },
    computed: {
        groupByAcademicLibraries() {
            let parseResults = this.parseHitsResults
            let groupBySubjectAreas = []
            let allacademicDepts = []

            for (let item of parseResults) {
                for (let obj of item.academicDepartments) {
                    allacademicDepts.push(obj.title)
                }
            }
            console.log("All academicDepts:" + allacademicDepts)
            let uniqueAcademicDepts = Array.from(
                new Set(allacademicDepts.sort())
            )
            console.log(
                "All uniqueAcademicDepts:" + JSON.stringify(uniqueAcademicDepts)
            )
            for (let title of uniqueAcademicDepts) {
                for (let item of parseResults) {
                    for (let obj of item.academicDepartments) {
                        if (title === obj.title)
                            groupBySubjectAreas.push({
                                subjectArea: title,
                                ...item,
                            })
                    }
                }
            }

            /*const groupBySubjectAreas = _.groupBy(
                parseResults,
                (row) => row.academicDepartments[0].title
            )*/
            return groupBySubjectAreas
        },
        parsedPages() {
            return this.page.entries || []
        },
        parsedStaffList() {
            // console.log("in parsedStaff")
            return (this.page.entries || []).map((obj) => {
                return {
                    ...obj,
                    to: `/about/staff/${obj.to}`,
                    image: _get(obj, "image[0]", null),
                    staffName:
                        obj.alternativeName.length > 0
                            ? `${obj.nameFirst} ${obj.nameLast} ${obj.alternativeName[0].fullName}`
                            : `${obj.nameFirst} ${obj.nameLast}`,
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
        "$route.query.q"(newValue) {
            console.log("watching querytEXT:" + newValue)
        },
        "$route.query.filters"(newValue) {
            console.log("watching filters:" + newValue)
        },
        "$route.query.lastNameLetter"(newValue) {
            console.log("watching lastNameLetter:" + newValue)
        },
    },

    async mounted() {
        console.log("In mounted")
        /*console.log("ESREADkey:" + this.$config.esReadKey)
        console.log("ESURLkey:" + this.$config.esURL)*/
        // bookmarked search queries are not calling fetch
        this.setFilters()
    },
    methods: {
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
                    staffName:
                        obj["_source"].alternativeName.length > 0
                            ? `${obj["_source"].nameFirst} ${obj["_source"].nameLast} ${obj["_source"].alternativeName[0].fullName}`
                            : `${obj["_source"].nameFirst} ${obj["_source"].nameLast}`,
                }
            })
        },
        searchBySelectedLetter(data) {
            console.log("On the page searchBySelectedLetter called")
            /*this.page = {}
            this.hits = []*/
            this.$router.push({
                path: "/about/staff",
                query: {
                    q: this.searchGenericQuery.queryText,
                    filters: JSON.stringify(
                        this.searchGenericQuery.queryFilters
                    ),
                    lastNameLetter: data,
                },
            })
        },

        getSearchData(data) {
            console.log("On the page getsearchdata called")
            /*this.page = {}
            this.hits = []*/
            this.$router.push({
                path: "/about/staff",
                query: {
                    q: data.text,
                    filters: JSON.stringify(data.filters),
                    lastNameLetter: this.$route.query.lastNameLetter,
                },
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
