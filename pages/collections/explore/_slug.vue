<template>
    <main id="main" class="page page-collection-detail">
        <nav-breadcrumb
            to="/collections/explore"
            :title="page.title"
            parent-title="Explore Collections"
        />

        <banner-text
            v-if="!page.heroImage || page.heroImage.length == 0"
            :title="page.title"
            :text="page.text"
            :subject-areas="page.subjectAreas"
            email="AskUs@library.ucla.edu"
            :button-text="parsedButtonText"
            :to="parsedButtonTo"
        />

        <section-wrapper
            v-if="page.heroImage && page.heroImage.length == 1"
            class="section-banner"
        >
            <banner-header
                :image="page.heroImage[0].image[0]"
                :title="page.title"
                :text="page.text"
                :category="parsedPhysicalDigital"
                :subject-areas="page.subjectAreas"
                email="AskUs@library.ucla.edu"
                :prompt="parsedButtonText"
                :to="parsedButtonTo"
                :align-right="false"
            />
        </section-wrapper>

        <section-wrapper theme="divider">
            <divider-way-finder class="divider-way-finder" color="default" />
        </section-wrapper>

        <page-anchor
            v-if="h2Array.length >=3"
            :section-titles= h2Array
            class="page-anchor"
            color="default"
        />

        <!-- Using the Collection -->
        <section-wrapper
            v-if="page.richTextSimplified"
            section-title="Using the Collection"
        >
            <div class="section-header">
                <rich-text :rich-text-content="page.richTextSimplified" />
            </div>

            <divider-way-finder
                v-if="page.blocks.length > 0"
                class="divider-way-finder"
                color="default"
            />
        </section-wrapper>

        <!-- Flexible Page Blocks -->
        <flexible-blocks class="flexible-content" :blocks="page.blocks" />

        <section-wrapper
            v-if="
                parsedServicesAndResources.length > 0 ||
                parsedEndowments.length > 0 ||
                parsedAssociatedStaffMember.length > 0
            "
            theme="divider"
        >
            <divider-way-finder class="divider-way-finder" color="default" />
        </section-wrapper>

        <!-- Services and Resources -->
        <section-wrapper
            v-if="parsedServicesAndResources.length"
            section-title="Services &amp; Resources"
        >
            <simple-cards
                :items="parsedServicesAndResources"
                class="section-header"
            />

            <divider-way-finder
                v-if="
                    parsedEndowments.length > 0 ||
                    parsedAssociatedStaffMember.length > 0
                "
                class="divider-way-finder"
                color="default"
            />
        </section-wrapper>

        <!-- Endowments -->
        <section-wrapper v-if="parsedEndowments.length"
            section-title="Collection Endowments">
            <section-staff-article-list
                :items="parsedEndowments"
                class="block-staff-article-item"
            />

            <divider-way-finder
                v-if="parsedAssociatedStaffMember.length > 0"
                class="divider-way-finder"
                color="default"
            />
        </section-wrapper>

        <!-- Subject Specialist -->
        <section-wrapper
            v-if="parsedAssociatedStaffMember.length > 0"
            section-title="Contact a Subject Specialist"
        >
            <section-staff-list :items="parsedAssociatedStaffMember" />
        </section-wrapper>
    </main>
</template>

<script>
// HELPERS
import _get from "lodash/get"
import fixUri from "~/utils/fixUri"
import removeTags from "~/utils/removeTags"

// GQL
import COLLECTION_DETAIL from "~/gql/queries/CollectionDetail"

export default {
    async asyncData({ $graphql, params, $elasticsearchplugin, error }) {
        // Do not remove testing live preview
        /*console.log(
            "fetching graphql data for Service or Resource detail from Craft for live preview"
        )*/
        const data = await $graphql.default.request(COLLECTION_DETAIL, {
            slug: params.slug,
        })
        if (!data.entry) {
            error({ statusCode: 404, message: "Page not found" })
        }
        // //console.log("Data fetched: " + JSON.stringify(data))
        if (data) await $elasticsearchplugin.index(data.entry, params.slug)
        return {
            page: data.entry,
        }
    },
    head() {
        let title = this.page ? this.page.title : "... loading"
        let metaDescription = removeTags(this.page.text)

        return {
            title: title,
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: metaDescription
                }
            ],
        }
    },
    data() {
        return {
            h2Array: []
        }
    },
    computed: {
        parsedPhysicalDigital() {
            return this.page.physicalDigital.length == 1
                ? this.page.physicalDigital[0]
                : `${this.page.physicalDigital[0]} & ${this.page.physicalDigital[1]}`
        },
        parsedButtonText() {
            return _get(this.page, "buttonUrl[0].buttonText", "")
        },
        parsedButtonTo() {
            return _get(this.page, "buttonUrl[0].buttonUrl", "")
        },
        parsedSubjectAreas() {
            return _get(this.page, "subjectAreas", "")
        },
        parsedServicesAndResources() {
            let services = this.page.resourceServiceWorkshop
            return services.map((obj) => {
                return {
                    ...obj,
                    to: obj.externalResourceUrl
                        ? obj.externalResourceUrl
                        : `/${obj.to}`,
                    title: _get(obj, "title", ""),
                    text: _get(obj, "text", ""),
                }
            })
        },
        parsedEndowments() {
            if (this.page.endowment) {
                return this.page.endowment.map((obj, index) => {
                    return {
                        to: `/${obj.to}`,
                        image: _get(obj, "image[0].image[0]", null),
                        title: _get(obj, "title", ""),
                        description: _get(obj, "description", ""),
                        category:
                            obj.donors.length > 0 ? this.parsedDonors(obj) : "",
                    }
                })
            } else {
                return ""
            }
        },
        parsedAssociatedStaffMember() {
            return this.page.associatedStaffMember.map((obj) => {
                return {
                    ...obj,
                    to: `/${obj.to}`,
                    image: _get(obj, "image[0]", null),
                    staffName: `${obj.nameFirst} ${obj.nameLast}`,
                    language: _get(
                        obj,
                        "alternativeName[0].languageAltName",
                        null
                    ),
                    alternativeFullName: _get(
                        obj,
                        "alternativeName[0].fullName",
                        null
                    ),
                    locations: _get(obj, "locations", []).map(loc => {
                        return {
                            ...loc,
                            uri: fixUri(loc.uri),
                        }
                    }),
                }
            })
        },
    },
    methods: {
        parsedDonors(obj) {
            let donorNames = []
            obj.donors.map((donor) => {
                donor.firstName == null
                    ? donorNames.push(`${donor.lastName}`)
                    : donorNames.push(`${donor.firstName} ${donor.lastName}`)
            })

            if (donorNames.length == 1) {
                return `Donor: ${donorNames[0]}`
            } else {
                let names = [
                    donorNames.slice(0, -1).join(", "),
                    donorNames.slice(-1)[0],
                ].join(donorNames.length < 2 ? "" : " and ")
                return `Donors: ${names}`
            }
        }
    },
    mounted() {
        // Find all elements with class name "section-header2" or "section-header3"
        const elements = document.querySelectorAll('.section-header2, .section-header3');

        const h2Array = [];

        // Loop through each section-header element and push it into the array
        // Excludes the section-header2 More Information
        // which is a visually-hidden element above the divider-way-finder
        // in the Flexible Block component
        elements.forEach((element) => {
            // if(.banner-header || BannerText || MastheadSecondary)
            if(element.textContent !== "More Information") this.h2Array.push(element.textContent);
        })
    },
}
</script>

<style lang="scss" scoped>
.page-collection-detail {
    .section-teaser-card {
        display: flex;
        flex-direction: row;
    }
}
</style>
