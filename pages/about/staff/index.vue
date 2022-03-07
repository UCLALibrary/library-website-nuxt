<template>
    <div class="page page-staff">
        <!-- staff page here -->

        <masthead-secondary title="Staff Directory">
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
// Helpers
import _get from "lodash/get"

// gql
import STAFF_LIST from "~/gql/queries/StaffList"

export default {
    async asyncData({ $graphql, params }) {
        console.log("live preview enters staff list")
        const data = await $graphql.default.request(STAFF_LIST, {
            uri: params.path,
        })

        return {
            page: data,
        }
    },
    computed: {
        parsedStaffList() {
            return this.page.entries.map((obj) => {
                return {
                    ...obj,
                    to: `/about/staff/${obj.to}`,
                    image: _get(obj, "image[0]staffMemberImage[0]", null),
                    staffName: `${obj.nameFirst} ${obj.nameLast}`,
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
