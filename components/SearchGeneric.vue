<template lang="html">
    <div class="search-generic">
        <div class="box">
            <form
                name="searchHome"
                @submit.prevent="doSearch"
            >
                <div class="input-container">
                    <icon-search class="icon" />
                    <input
                        v-model="searchWords"
                        type="text"
                        placeholder="Search by keyword"
                    >
                </div>
                <hr class="divider">
                <div class="container">
                    <div
                        v-for="(filter, index) in parsedFilters"
                        :key="index"
                        class="filter"
                    >
                        <button
                            :class="filter.btnClasses"
                            @click="toggleMenu(index)"
                        >
                            <span
                                class="title"
                                v-html="filter.label"
                            />
                        </button>
                    </div>

                    <!-- View Mode -->
                    <div
                        v-if="showViews"
                        class="view-mode"
                    >
                        <button
                            :class="parsedClasses"
                            @click="toggleViews"
                        >
                            <span class="title"> View </span>
                        </button>
                        <ul :class="parsedListClasses">
                            <li
                                v-for="view in viewModes"
                                :key="view.title"
                                class="list-item"
                                @click="$emit('view-mode-change', view.title)"
                            >
                                <component
                                    :is="view.iconName"
                                    class="svg"
                                />
                                <div v-html="view.title" />
                            </li>
                        </ul>
                    </div>
                </div>

                <!-- Filter list -->
                <div
                    v-for="(filter, index) in parsedFilters"
                    :key="index"
                    class="filter-list"
                >
                    <base-radio-group
                        v-if="!filter.isMultiValuedField"
                        :is-opened="filter.isOpened"
                        :search-field="filter.searchField"
                        :filter="filter.label"
                        :filter-items="filter.filterItems"
                        @filter-change="updateFilters"
                    />
                    <base-checkbox-group
                        v-if="filter.isMultiValuedField"
                        :is-opened="filter.isOpened"
                        :search-field="filter.searchField"
                        :filter="filter.label"
                        :filter-items="filter.filterItems"
                    />
                </div>
            </form>
            <div
                v-if="filterList.length > 0"
                class="remove-list"
            >
                <span> {{ filterList }} </span>
            </div>
        </div>
    </div>
</template>

<script>
import IconSearch from "~/assets/svg/icon-search"
import IconCalendar from "~/assets/svg/icon-calendar"
import IconCard from "~/assets/svg/icon-card"
import IconList from "~/assets/svg/icon-list"

export default {
    components: {
        IconSearch,
        IconCalendar,
        IconCard,
        IconList,
    },
    props: {
        searchType: {
            type: String,
            required: true,
            default: "help",
        },
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
            searchWords: "",
            isOpened: false,
            openedFilter: -1,
            filterList: [],
        }
    },
    computed: {
        parsedClasses() {
            return ["view-btn", { "is-opened": this.isOpened }]
        },
        parsedListClasses() {
            return ["view-list", { "is-opened": this.isOpened }]
        },
        showViews() {
            return this.viewModes.length > 0 ? true : false
        },
        parsedFilters() {
            return this.filters.map((obj, index) => {
                let btnClasses = "button"
                let isOpened = false
                if (index === this.openedFilter) {
                    btnClasses = "button is-opened"
                    isOpened = true
                }
                return {
                    ...obj,
                    btnClasses,
                    isOpened,
                }
            })
        },
    },
    methods: {
        async doSearch() {
            this.$router.push({
                path: this.actionURL,
                query: { q: this.searchWords },
            })
        },
        toggleMenu(index) {
            this.filters[index].isOpened = !this.filters[index].isOpened
            if (this.filters[index].isOpened) {
                this.openedFilter = index
                this.isOpened = false
            } else {
                this.openedFilter = -1
            }
        },
        toggleViews() {
            this.isOpened = !this.isOpened
            this.openedFilter = -1
        },
        updateFilters(e) {
            console.log("In update filter method: " + e)
            this.filterList.push(e)
        },
    },
}
</script>
<style lang="scss" scoped>
.search-generic {
    .box {
        // margin: 0 auto;
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

            width: -moz-available; /* WebKit-based browsers will ignore this. */
            width: -webkit-fill-available; /* Mozilla-based browsers will ignore this. */
            width: fill-available;

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

    .filter {
        margin-right: 24px;
        margin-top: 12px;
        margin-bottom: 12px;

        flex: 1 1 auto;

        display: flex;
        flex-direction: column;

        .button {
            height: 60px;
            background-color: var(--color-primary-blue);
            padding-right: 16px;

            display: flex;
            justify-content: space-between;
            align-items: center;
            align-content: center;

            &::after {
                content: "\f107";
                font-size: 16px;
                font-family: "Font-Awesome";
                color: var(--color-white);
            }
        }

        &:last-child {
            margin-right: 0;
        }
    }
    .view-mode {
        margin-top: 12px;
        margin-bottom: 12px;

        flex: 0 1 auto;
        display: flex;
        flex-direction: column;

        .view-btn {
            width: 106px;
            height: 60px;
            background-color: var(--color-primary-blue);
            padding-right: 16px;

            display: flex;
            justify-content: space-between;
            align-items: center;
            align-content: center;
            &::after {
                content: "\f107";
                font-size: 16px;
                font-family: "Font-Awesome";
                color: var(--color-white);
            }
        }

        .view-list {
            margin-top: 15px;
            list-style: none;
            background-color: var(--color-primary-blue);
            color: var(--color-white);

            display: none;
            flex-direction: column;
            flex-wrap: wrap;
            align-content: center;
            align-items: center;
            justify-content: center;

            &.is-opened {
                display: flex;
            }
            .list-item {
                margin-top: 12px;
                font-size: 18px;
                font-weight: 400;
                &:last-child {
                    margin-bottom: 12px;
                }
            }
            .svg:last-child {
                padding-left: 15px;
            }
        }
    }
    .title {
        color: var(--color-white);
        margin-left: 16px;
        font-size: 18px;
        font-weight: 400;
        text-transform: uppercase;
    }

    .is-opened {
        &.button {
            &::after {
                content: "\f106";
            }
        }
    }
}
</style>
