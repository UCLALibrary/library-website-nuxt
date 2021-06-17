<template lang="html">
    <div class="search-generic">
        <div class="box">
            <form
                name="searchHome"
                @submit.prevent="doSearch"
            >
                <div class="input-container">
                    <svg-icon-search class="icon" />
                    <input
                        v-model="searchWords"
                        type="text"
                        placeholder="Search by keyword"
                    >
                </div>

                <hr class="divider">

                <div class="container">
                    <search-generic-filter-buttons
                        :items="filters"
                        :active-index.sync="openedFilterIndex"
                    />

                    <!-- TODO This needs an active-type="list" etc... -->
                    <search-generic-view-modes :is-opened.sync="isViewOpened" />
                </div>

                <search-generic-filter-items
                    :active-index.sync="openedFilterIndex"
                    :items="parsedFilters"
                    @change="onFilterChange"
                />
            </form>
        </div>
    </div>
</template>

<script>
import SvgIconSearch from "~/assets/svg/icon-search"

export default {
    components: {
        SvgIconSearch,
    },
    props: {
        filters: {
            type: Array, // array of objects that contain the filter objects
            default: () => [],
        },
        viewModes: {
            type: Array,
            default: () => [],
        },
    },
    data() {
        return {
            searchWords: this.$route.query.q,
            selectedFilters: {},
            openedFilterIndex: -1,
            isViewOpened: false,
        }
    },
    computed: {
        parsedFilters() {
            return this.filters.map((obj) => {
                let selected = this.selectedFilters[obj.slug] || []

                // If no selected, then make sure radio's default is empty string
                if (!selected.length && obj.inputType == "radio") {
                    selected = ""
                }

                return {
                    ...obj,
                    selected,
                }
            })
        },
        queryParams() {
            // TODO probably want to use this: https://www.npmjs.com/package/qs
            return {
                q: this.searchWords,
                type: "location",
                filters: "foo",
                viewMode: "list",
            }
        },
    },
    watch: {
        isViewOpened(newVal, oldVal) {
            if (newVal) {
                this.openedFilterIndex = -1
            }
        },
        openedFilterIndex(newVal, oldVal) {
            if (newVal !== -1) {
                this.isViewOpened = false
            }
        },
    },
    mounted() {
        // TODO parse this.$route.query.filters and set this.selectedFilters
        // TODO parse this.$route.query.viewMode and set view dropdown active index
    },
    methods: {
        async doSearch() {
            this.$router.push({
                path: this.actionURL,
                query: this.queryParams,
            })
        },
        onFilterChange({ slug, selected }) {
            this.selectedFilters[slug] = selected
        },
    },
}
</script>
<style lang="scss" scoped>
.search-generic {
    .box {
        padding: 30px 50px;
        background-color: var(--color-white);
        height: 70px;
        width: 890px;
        border: 1px solid transparent;
        border-top-left-radius: 4px;
    }
    .input-container {
        .icon {
            padding: 25px 40px 25px 32px;
            position: absolute;
            z-index: 10;
            width: 28px;
            height: 27px;
        }

        input {
            font-size: 20px;
            line-height: 100%;
            background-color: var(--color-lightest-blue);
            border-color: transparent;
            padding: 27px 95px;

            width: 100%;
            box-sizing: border-box;

            &::placeholder {
                text-transform: uppercase;
            }
        }
    }
    .divider {
        margin-top: 15px;
        height: 1px;
        border: none;
        background-color: var(--color-cyan-01);
    }
    .container {
        list-style: none;
        cursor: pointer;
        width: 890px;

        display: flex;
        flex-direction: row;
        justify-content: flex-start;
    }
}
</style>
