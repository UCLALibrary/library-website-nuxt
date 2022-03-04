<template>
    <main class="page page-staff-detail">
        <!-- staff page here -->
        <!-- no search on this page -->
        <!-- TODO: Add Breadcrumb Component -->
        <block-staff-detail
            class="staff-detail-block"
            :image="parsedImage"
            :staff-name="parsedStaffName"
            :job-title="page.entry.jobTitle"
            :departments="page.entry.departments"
            :locations="page.entry.locations"
            :pronouns="page.entry.pronouns"
            :email="page.entry.email"
            :phone="page.entry.phone"
            :consultation="page.entry.consultation"
            :topics="page.entry.topics"
            :biography="page.entry.biography"
        />

        <h2
            v-if="page.entry.orcid || page.entry.publications"
            class="staff-orcid-publications"
        >
            PUBLICATIONS
        </h2>
        <div
            v-if="page.entry.orcid"
            class="orcid"
            v-html="page.entry.orcid"
        />
        <rich-text
            v-if="page.entry.publications"
            class="publications"
            :rich-text-content="page.entry.publications"
        />
        <section-staff-article-list
            v-if="parsedItems.length"
            class="staff-article-list-section"
            section-title="Articles"
            :items="parsedItems"
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
    </main>
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
            return _get(this.page.entry, "image[0]staffMemberImage[0]", null)
        },
        parsedStaffName() {
            console.log(this.page.entry)
            return `${this.page.entry.nameFirst} ${this.page.entry.nameLast}`
        },
        parsedPublications() {
            return this.page.entries.map((obj) => {
                return {
                    ...obj,
                    sectionTitle: `${obj.sectionTitle}`,
                    orcid: `ORCID: ${obj.orcidId}`,
                    publications: `${obj.publications}`,
                }
            },)
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
    .staff-orcid-publications {
        background-color: aqua;
    }
    .staff-article-list-section {
        background-color: var(--color-secondary-grey-01);
    }
}
</style>
