<template>
    <ul :class="classes">
        <li
            v-for="filterItem in filterItems"
            :key="filterItem.label"
            class="content-item"
        >
            <BaseRadio
                :id="filterItem.name"
                v-model="selectedFilters[searchField]"
                :label="filterItem.name"
                :name="filter"
                :value="filterItem.name"
                @change="changed"
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
        // eslint-disable-next-line vue/require-default-prop
        filter: {
            type: String,
            reuired: true,
        },
        // eslint-disable-next-line vue/require-default-prop
        searchField: {
            type: String,
            reuired: true,
        },
    },
    data() {
        return {
            location_ssi: "",
            location: "",
            selectedFilters: {},
        }
    },
    computed: {
        classes() {
            return ["base-radio-group content", { "is-opened": this.isOpened }]
        },
    },
    /* watch: {
        location_ssi(val) {
            console.log("In the watcher: " + val)
        },
        selectedFilters: {
            handler: function (val, oldVal) {
                console.log("In the watcher: " + val)
            },
            deep: true,
        },
    }, */
    methods: {
        changed(e) {
            console.log("Change handler says...")
            console.log("In the changed event handler: " + e)
            this.$emit("filter-change", this.selectedFilters)
        },
    },
}
</script>

<style lang="scss" scoped>
.base-radio-group {
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
