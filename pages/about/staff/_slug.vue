<template>
    <main class="page page-staff-detail">
        <!-- staff page here -->
        <!-- no search on this page -->
        <nav-breadcrumb :title="page.entry.title" />

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
            :academic-departments="page.entry.academicDepartments"
            :biography="page.entry.biography"
        />

        <section
            v-if="parsedItems.length || page.entry.publications || page.entry.orcid"
            class="selected-articles"
        >
            <section-staff-orcid-publications
                class="staff-orcid-publications"
                :orcid="page.entry.orcid"
                :publications="page.entry.publications"
            />

            <divider-way-finder
                v-if="parsedItems.length && (page.entry.publications || page.entry.orcid)"
                class="divider divider-first"
                color="about"
            />

            <section-staff-article-list
                v-if="parsedItems.length"
                class="staff-article-list-section"
                section-title="Articles"
                :items="parsedItems"
            />
        </section>

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

// GQL
import STAFF_DETAIL from "~/gql/queries/StaffDetail"

export default {
    async asyncData({ $graphql, params }) {
        // console.log("fecthing graphql data for staff from Craft")
        const data = await $graphql.default.request(STAFF_DETAIL, {
            slug: params.slug,
        })
        console.log(data.entry)
        return {
            page: data,
        }
    },
    head() {
        return {
            title: this.page.entry.title,
        }
    },
    computed: {
        parsedImage() {
            return _get(this.page.entry, "image[0]", null)
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
    }

    .selected-articles {
        background-color: var(--color-secondary-grey-01);
        padding: var(--space-3xl) 0;

        ::v-deep .divider .dotted {
            border-color: var(--color-secondary-grey-03);
        }
    }
}
</style>
