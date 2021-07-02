<template lang="html">
    <div class="page page-visit">
        <masthead-secondary
            title="Find and Reserve a Space"
            text="Browse on-campus spaces for study, meetings, and group projects."
        >
            <search-generic
                search-type="help"
                :filters="searchFilters.filters"
                :view-modes="searchFilters.views"
                class="generic-search"
                @view-changed="viewModeChanger"
            />
        </masthead-secondary>
    </div>
</template>
<script>
const searchFilters = {
    filters: [
        {
            label: "location",
            searchField: "location_ssi",
            isMultiValuedField: false,
            filterItems: [
                {
                    name: "Neque porro quisquam",
                },
                {
                    name: "qui dolorem ipsum quia dolor",
                },
                {
                    name: "consectetur, adipisci velit.",
                },
                {
                    name:
                        "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
                },
                {
                    name: "Excepteur sint occaecat cupidatat non proident",
                },
                {
                    name: "vel illum qui dolorem eum fugiat",
                },
                {
                    name: "quis nostrum exercitationem ullam",
                },
                {
                    name: "Quis autem vel eum iure reprehenderit",
                },
                {
                    name: "Excepteur sint occaecat cupidatat non proident1",
                },
                {
                    name: "vel illum qui dolorem eum fugiat1",
                },
                {
                    name: "quis nostrum exercitationem ullam1",
                },
                {
                    name: "Quis autem vel eum iure reprehenderit1",
                },
            ],
        },
    ],
    views: [
        {
            to: "/visit/foo",
            iconName: "icon-list",
            title: "List",
        },
        {
            to: "/visit/baz",
            iconName: "icon-card",
            title: "Card",
        },
        {
            to: "/visit/qux",
            iconName: "icon-calendar",
            title: "Calendar",
        },
    ],
}
export default {
    data() {
        return {
            searchFilters,
            selectedView: this.$route.query.view,
        }
    },
    methods: {
        viewModeChanger(slug) {
            console.log(slug)
            this.selectedView = slug
        },
    },
    async asyncData() {
        // TODO fetch content to build out results here
    },
    watchQuery(newQuery, oldQuery) {
        // Only execute component methods if the old query string contained `bar`
        // and the new query string contains `foo`
        return newQuery.foo && oldQuery.bar
    },
}
</script>
<style lang="scss" scoped>
.page-visit {
    .generic-search {
        margin-bottom: 500px;
    }
}
</style>
