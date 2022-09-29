<template>
    <main class="page page-staff-detail">
        <!-- staff page here -->
        <!-- no search on this page -->
        <nav-breadcrumb :title="page.entry.title" />

        <section-wrapper>
            <block-staff-detail
                class="staff-detail-block"
                :image="parsedImage"
                :staff-name="parsedStaffName"
                :alternative-full-name="parsedAlternativeFullName"
                :language="parsedLanguage"
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
        </section-wrapper>

        <section
            v-if="
                parsedItems.length ||
                    page.entry.publications ||
                    page.entry.orcid
            "
            class="selected-articles"
        >
            <section-wrapper>
                <section-staff-orcid-publications
                    class="staff-orcid-publications"
                    :orcid="page.entry.orcid"
                    :publications="page.entry.publications"
                />
            </section-wrapper>

            <section-wrapper theme="divider">
                <divider-way-finder
                    v-if="
                        parsedItems.length &&
                            (page.entry.publications || page.entry.orcid)
                    "
                    class="divider divider-first"
                    color="about"
                />
            </section-wrapper>

            <section-wrapper>
                <section-staff-article-list
                    v-if="parsedItems.length"
                    class="staff-article-list-section"
                    section-title="Articles"
                    :items="parsedItems"
                />
            </section-wrapper>
        </section>

        <section-wrapper theme="divider">
            <divider-way-finder
                class="divider divider-first"
                color="about"
            />
        </section-wrapper>
        <!-- this is different from flexible page blocks ctacontentwidth and will be hardcoded where required -->
        <section-wrapper theme="divider">
            <block-call-to-action
                class="section block-call-to-action"
                svg-name="svg-call-to-action-mail"
                to="/contact-us"
                name="Contact Us"
                title="Not sure who you should reach out to?"
                text="Donec ullamcorper nulla non metus auctor fringilla. Sed posuere consectetur est at lobortis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
            />
        </section-wrapper>
    </main>
</template>

<script>
// Helpers
import _get from "lodash/get"

// GQL
import STAFF_DETAIL from "~/gql/queries/StaffDetail"

export default {
    async asyncData({ $graphql, params }) {
        // Do not remove testing live preview
        console.log(
            "fetching graphql data for staff detail from Craft for live preview"
        )
        const data = await $graphql.default.request(STAFF_DETAIL, {
            slug: params.slug,
        })
        console.log("Data fetched: " + JSON.stringify(data))
        // _get(data, "entry", {}),
        return {
            page: data,
        }
    },
    head() {
        let title =
            this.page && this.page.entry ? this.page.entry.title : "... loading"
        return {
            title: title,
        }
    },
    computed: {
        parsedImage() {
            return _get(this.page.entry, "image[0]", null)
        },
        parsedStaffName() {
            return `${this.page.entry.nameFirst} ${this.page.entry.nameLast}`
        },

        parsedAlternativeFullName() {
            return _get(this.page.entry, "alternativeName[0].fullName", "")
        },

        parsedLanguage() {
            return _get(
                this.page.entry,
                "alternativeName[0].languageAltName",
                ""
            )
        },

        parsedItems() {
            return this.page.entries.map((obj) => {
                return {
                    ...obj,
                    to: `/${obj.to}`,
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
        margin: var(--space-3xl) auto;

        ::v-deep .divider .dotted {
            border-color: var(--color-secondary-grey-03);
        }
    }
}
</style>
