<template>
    <ul :class="classes">
        <li
            v-for="filterItem in filterItems"
            :key="filterItem.label"
            class="content-item"
        >
            <BaseCheckbox
                v-model="selectedFilters[filterItem.name]"
                :label="filterItem.name"
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
            return [
                "base-checkbox-group content",
                { "is-opened": this.isOpened },
            ]
        },
    },
    methods: {
        mounted() {
            for (filterItem in this.filterItems) {
                this.selectedFilters[filterItem.name] = false
            }
        },
    },
}
</script>

<style lang="scss" scoped>
.base-checkbox-group {
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
