<template lang="html">
    <div class="search-generic">
        <div class="box">
            <form name="searchHome" @submit.prevent="doSearch">
                <div class="input-container">
                    <svg-icon-search class="icon" />
                    <input
                        v-model="searchWords"
                        type="text"
                        placeholder="Search by keyword"
                    />
                </div>

                <hr class="divider" />

                <div class="container">
                    <search-generic-filter-buttons
                        :items="filters"
                        :active-index.sync="openedFilterIndex"
                    />

                    <!-- TODO This needs an active-type="list" etc... -->
                    <search-generic-view-modes
                        v-if="viewModes.length"
                        :items="viewModes"
                        :is-opened.sync="isViewOpened"
                        :selected.sync="selectedView"
                    />
                </div>

                <!-- Loop through avaible filter groups -->
                <transition name="slide-toggle" mode="out-in">
                    <component
                        v-for="(group, index) in parsedFilters"
                        :is="group.componentName"
                        :items="group.items"
                        :selected.sync="parsedFilters[index].selected"
                        v-if="index == openedFilterIndex"
                        :key="group.slug"
                        class="filter-group"
                    />
                </transition>
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
            selectedView: "list",
        }
    },
    computed: {
        parsedFilters() {
            return this.filters.map((obj) => {
                let selected = this.selectedFilters[obj.slug] || []
                let componentName = "base-checkbox-group"

                // If no selected, then make sure radio's default is empty string
                if (!selected.length && obj.inputType == "radio") {
                    selected = ""
                }

                // Figure out Vue component name
                switch (obj.inputType) {
                    case "radio":
                        componentName = "base-radio-group"
                        break
                    case "calendar":
                        componentName = "base-calendar-group"
                        break
                }

                return {
                    ...obj,
                    selected,
                    componentName,
                }
            })
        },
        queryParams() {
            // TODO probably want to use this: https://www.npmjs.com/package/qs
            return {
                q: this.searchWords,
                type: "location",
                filters: "foo",
                view: "list",
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
        // On mounted, parse URL query to set the starting index/selections for the search
        // On update/events, update URL query strings to reflect settings/selections

        //?q=Serach term&location=libary&date_range[]={date}&date_range[]={date}

        // setTimeout(() => {
        //     this.$set(this.selectedFilters, "department", [
        //         "Excepteur sint occaecat cupidatat non proident1",
        //     ])
        // }, 5000)

        // this.$router.push({
        //     path: this.actionURL,
        //     query: this.queryParams,
        // })

        this.$set(this.selectedFilters, this.$route.query)
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
    .filter-group {
        transition-duration: 400ms;
    }
}

// Transitions
.slide-toggle-enter,
.slide-toggle-leave-to {
    max-height: 0;
    opacity: 0;
}
.slide-toggle-enter-to,
.slide-toggle-leave {
    max-height: 500px;
    opacity: 1;
}
.slide-toggle-enter-active,
.slide-toggle-leave-active {
    overflow: hidden;
    transition-property: opacity, max-height;
    transition-timing-function: ease-in-out;
}
</style>
