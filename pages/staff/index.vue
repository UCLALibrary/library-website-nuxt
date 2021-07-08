<template>
    <div class="page page-staff">
        <!-- staff page here -->

        <masthead-secondary
            title="Exhibits & Upcoming Events"
            text="Browse upcoming remote events and online exhibits."
        >
            <!-- TODO Add SearchGenric here when complete  -->
            <!-- <search-generic search-type="about"
                    :filters="searchFilters.filters"
                    :view-modes="searchFilters.views"
                    class="generic-search"
                    @view-mode-change="viewModeChanger"
            /> -->
        </masthead-secondary>

        <divider-way-finder class="section divider divider-way-finder" />
        <section-staff-list :items="parsedStaffList" />
    </div>
</template>

<script>
import * as MOCK_API from "~/stories/mock-api.json"
import STAFF_LIST from "~/gql/queries/StaffList"

export default {
    async asyncData({ $graphql, params }) {
        const data = await $graphql.default.request(STAFF_LIST, {
            uri: params.path,
        })

        return {
            page: data,
        }
    },
    computed: {
        parsedStaffList() {
            return this.page.entries.map((obj, i) => {
                obj.department = obj.dept[0].title
                switch (i) {
                    case 0:
                        obj.image = MOCK_API.image
                        break

                    case 1:
                        obj.image = MOCK_API.image
                        break
                }
                return {
                    ...obj,
                }
            })
        },
    },
}
</script>

<style lang="scss" scoped>
.page-staff {
}
</style>
