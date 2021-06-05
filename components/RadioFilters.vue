<template>
    <ul :class="classes">
        <li
            v-for="filterItem in filterItems"
            :key="filterItem.label"
            class="content-item"
        >
            <BaseRadio
                v-model="parsedModel"
                :label="filterItem.name"
                :name="filter"
            />
        </li>
    </ul>
</template>

<script>
export default {
    props: {
        isOpened: {
            type: Boolean,
            default: false,
        },
        filterItems: {
            type: Array, // array of objects that contain the filter objects
            default: () => [],
        },
        filter: {
            type: String,
            reuired: true,
        },
        searchField: {
            type: String,
            reuired: true,
        },
    },
    data() {
        return {
            selectedFilters: {},
        }
    },
    computed: {
        classes() {
            return ["radio-filters content", { "is-opened": this.isOpened }]
        },
        parsedModel() {
            if (this.selectedFilters[this.searchField]) {
                return this.selectedFilters[this.searchField]
            } else {
                this.selectedFilters[this.searchField] = ""
                return this.selectedFilters[this.searchField]
            }
        },
    },
}
</script>

<style lang="scss" scoped>
.radio-filters {
    .content-item {
        margin: 12px 32px;
        width: 230px;
        height: 22px;
    }

    &.content {
        margin-top: 10px;
        background-color: var(--color-primary-blue);
        color: var(--color-white);
        display: none;

        list-style: none;
        width: 890px;
        height: 210px;

        // display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        justify-content: flex-start;
        align-content: space-between;
        align-items: flex-start;
    }
    &.is-opened {
        &.content {
            display: flex;
        }
    }
}
</style>
