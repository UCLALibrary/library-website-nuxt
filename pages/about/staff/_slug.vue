<template>
    <main class="page page-staff-detail">
        <!-- staff page here -->
        <!-- no search on this page -->
        <nav-breadcrumb
            to="/about/staff"
            :title="page.entry.title"
            parent-title="Staff Directory"
        />

        <section-wrapper>
            <block-staff-detail
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

        <section-wrapper
            v-if="
                parsedItems.length ||
                    page.entry.publications ||
                    page.entry.orcid
            "
            class="selected-articles"
            theme="divider"
        >
            <divider-way-finder
                class="divider"
                color="about"
            />
        </section-wrapper>

        <div
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
        </div>

        <section-wrapper theme="divider">
            <divider-way-finder
                class="divider divider-first"
                color="about"
            />
        </section-wrapper>
        <section-wrapper>
            <block-call-to-action
                class="block-call-to-action"
                :is-global="true"
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
    async asyncData({ $graphql, params, $elasticsearchplugin }) {
        // Do not remove testing live preview
        console.log(
            "fetching graphql data for staff detail from Craft for live preview"
        )

        const data = await $graphql.default.request(STAFF_DETAIL, {
            slug: params.slug,
        })
        await $elasticsearchplugin.getData(data, params.slug)

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
    .selected-articles {
        ::v-deep .divider .dotted {
            border-color: var(--color-secondary-grey-03);
        }
    }
}
</style>
