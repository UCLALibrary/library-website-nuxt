<template>
    <div class="page page-staff-detail">
        <!-- staff page here -->
        <!-- no search on this page -->
        <masthead-secondary title="Staff Directory" />
        <block-staff-detail
            :image="parsedImage"
            :to="page.entry.to"
            :staff-name="page.entry.staffName"
            :job-title="page.entry.jobTitle"
            :locations="page.entry.locations"
            :email="page.entry.email"
            :phone="page.entry.phone"
            :departments="page.entry.departments"
            :topics="page.entry.topics"
            :biography="page.entry.biography"
            class="staff-detail-block"
        />
        <divider-way-finder class="section divider divider-way-finder" />
        <section-staff-article-list
            :items="items"
            section-title="Articles"
        />
        <!-- section-staff-list :items="parsedStaffList" /-->
        <!--block-call-to-action
            class="section block-call-to-action"
            icon-name="svg-call-to-action-find"
            :to="blockCallToAction.to"
            :name="blockCallToAction.name"
            :title="blockCallToAction.title"
            :text="blockCallToAction.text"
        /-->
    </div>
</template>

<script>
// Helpers
import _get from "lodash/get"

// gql
import STAFF_DETAIL from "~/gql/queries/StaffDetail"

export default {
    async asyncData({ $graphql, params }) {
        const data = await $graphql.default.request(STAFF_DETAIL, {
            slug: params.slug,
        })

        return {
            page: data,
        }
    },
    computed: {
        parsedImage() {
            return _get(this.page.entry, "image[0]", null)
        },
    },
}
</script>

<style lang="scss" scoped>
.page-staff-detail {
    .staff-detail-block {
        margin-left: auto;
        margin-right: auto;
        margin-top: 70px;
    }
}
</style>
