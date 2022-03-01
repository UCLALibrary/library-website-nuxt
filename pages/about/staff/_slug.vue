<template>
    <section class="page page-staff-detail">
        <!-- staff page here -->
        <!-- no search on this page -->
        <masthead-secondary title="Staff Directory" />
        <block-staff-detail
            :image="parsedImage"
            :staff-name="parsedStaffName"
            :pronouns="page.entry.pronouns"
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
            v-if="parsedItems.length"
            :items="parsedItems"
            section-title="Articles"
            class="staff-article-list-section"
        />
        <!-- this is different from flexible page blocks ctacontentwidth and will be hardcoded where required -->
        <block-call-to-action
            class="section block-call-to-action"
            svg-name="svg-call-to-action-mail"
            to="/contact-us"
            name="Contact Us"
            title="Not sure who you should reach out to?"
            text="Donec ullamcorper nulla non metus auctor fringilla. Sed posuere consectetur est at lobortis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
        />
    </section>
</template>

<script>
// Helpers
import _get from "lodash/get"

// gql
import STAFF_DETAIL from "~/gql/queries/StaffDetail"

export default {
    async asyncData({ $graphql, params }) {
        // console.log("fecthing graphql data for staff from Craft")
        const data = await $graphql.default.request(STAFF_DETAIL, {
            slug: params.slug,
        })
        return {
            page: data,
        }
    },
    computed: {
        parsedImage() {
            console.log(this.page.entry)
            return _get(this.page.entry, "image[0]staffMemberImage[0]", null)
        },
        parsedStaffName() {
            return `${this.page.entry.nameFirst} ${this.page.entry.nameLast}`
        },
        parsedItems() {
            return this.page.entries.map((obj) => {
                return {
                    ...obj,
                    to: `/news/${obj.to}`,
                    image: _get(obj, "heroImage[0].image[0]", null),
                    staffName: `${obj.nameFirst} ${obj.nameLast}`,
                }
            })
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
    .staff-article-list-section {
        background-color: var(--color-secondary-grey-01);
    }
}
</style>
