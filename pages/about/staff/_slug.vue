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

        <section
            v-if="page.entry.orcid || page.entry.publications"
            class="staff-orcid-publications"
        >
            <divider-way-finder
                class="divider divider-first"
                color="visit"
            />
            <h2 class="secondary-header">
                Publications
            </h2>
            <smart-link
                :to="page.entry.orcid"
                target="_blank"
                class="orcid"
                v-html="`ORCID: <span style='font-size: 20px'>${page.entry.orcid}</span>`"
            />
            <rich-text
                v-if="page.entry.publications"
                class="publications"
                :rich-text-content="page.entry.publications"
            />
        </section>

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

// GQL
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

    .divider {
        margin: 45px 0px;
        width: 100%;
    }

    .staff-orcid-publications {
        max-width: $container-l-main + px;
        padding: 0 var(--unit-gutter) 46px;
        margin: auto;
        .secondary-header {
            margin-bottom: 48px;
            @include step-3;
            color: var(--color-primary-blue-03);
        }
        .orcid {
            font-size: 26px;
            font-weight: 500;
            color: var(--color-primary-blue-03);
        }
        .publications {
            font-size: 20px;
        }
        .rich-text {
            margin: 20px auto;
            margin-left: -20px;
        }
        ul, li {
            margin-bottom: 24px;
        }
            // Hover states
        @media #{$has-hover} {
            .orcid:hover {
                text-decoration: underline;
                text-decoration-color: var(--color-primary-blue-03);
                text-decoration-thickness: 1.5px;
            }
        }
    }
}
</style>
