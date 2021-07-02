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

                    <search-generic-view-modes
                        v-if="views.length"
                        :items="views"
                        :is-opened.sync="isViewOpened"
                        :selected.sync="selectedView"
                    />
                </div>

                <!-- This loops through avaible filter groups -->
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
        views: {
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

                // If none selected, then make sure radio's default is empty string
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
        // TODO Figure out how to get these intial values from the URL.
        // Probably want to use this: https://www.npmjs.com/package/qs
        this.selectedFilters = {
            location: "Neque porro quisquam",
            department: [
                "quis nostrum exercitationem ullam1",
                "Quis autem vel eum iure reprehenderit",
            ],
        }

        // TODO probably want to validate agaisnt this.viewModes
        this.selectedView = this.$route.query.view || "list"
    },
    methods: {
        async doSearch() {
            // TODO Get this pushing real values ot the URL
            this.$router.push({
                path: this.actionURL,
                query: {
                    q: this.searchWords,
                    view: this.selectedView,
                    filters: Object.keys(this.selectedFilters).length, // TODO get this encoding correctly
                },
            })
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
