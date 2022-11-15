<template>
    <main class="page-collection-detail">
        <nav-breadcrumb
            to="/collections"
            :title="page.title"
            parent-title="Collections"
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
            <divider-way-finder
                class="divider-way-finder"
                color="default"
            />
        </section-wrapper>

        <!-- Using the Collection -->
        <section-wrapper
            v-if="page.richTextSimplified"
            section-title="Using the Collection"
        >
            <div class="section-header">
                <rich-text :rich-text-content="page.richTextSimplified" />
            </div>

            <divider-way-finder
                class="divider-way-finder"
                color="default"
            />
        </section-wrapper>

        <!-- Flexible Page Blocks -->
        <flexible-blocks
            class="flexible-content"
            :blocks="page.blocks"
        />

        <section-wrapper
            v-if="page.blocks.length > 0"
            theme="divider"
        >
            <divider-way-finder
                class="divider-way-finder"
                color="default"
            />
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
                class="divider-way-finder"
                color="default"
            />
        </section-wrapper>

        <!-- Endowments -->
        <section-wrapper v-if="parsedEndowments.length">
            <section-staff-article-list
                :items="parsedEndowments"
                section-title="Collection Endowments"
                class="block-staff-article-item"
            />

            <divider-way-finder
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
// Helpers
import _get from "lodash/get"

// GQL
import COLLECTION_DETAIL from "~/gql/queries/CollectionDetail"

export default {
    async asyncData({ $graphql, params, $elasticsearchplugin }) {
        // Do not remove testing live preview
        console.log(
            "fetching graphql data for Service or Resource detail from Craft for live preview"
        )
        const data = await $graphql.default.request(COLLECTION_DETAIL, {
            slug: params.slug,
        })
        // console.log("Data fetched: " + JSON.stringify(data))
        if (data) await $elasticsearchplugin.index(data.entry, params.slug)
        return {
            page: data.entry,
        }
    },
    head() {
        let title = this.page ? this.page.title : "... loading"
        return {
            title: title,
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
                    to: `${obj.uri}`,
                    title: _get(obj, "title", ""),
                    text: _get(obj, "text", ""),
                }
            })
        },
        parsedDonors() {
            if (this.page.endowment && this.page.endowment.length > 0) {
                let donors = this.page.endowment[0].donors
                let donorNames = []
                donors.map((donor) => {
                    donorNames.push(`${donor.firstName} ${donor.lastName}`)
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
            } else {
                return ""
            }
        },
        parsedEndowments() {
            if (this.page.endowment) {
                return this.page.endowment.map((item) => {
                    return {
                        to: `${item.uri}`,
                        image: _get(item, "image[0].image[0]", null),
                        title: _get(item, "title", ""),
                        description: _get(item, "description", ""),
                        category: this.parsedDonors ? this.parsedDonors : "",
                    }
                })
            }
        },
        parsedAssociatedStaffMember() {
            return this.page.associatedStaffMember.map((obj) => {
                return {
                    ...obj,
                    to: `/about/staff/${obj.to}`,
                    image: _get(obj, "image[0]", null),
                    staffName: `${obj.nameFirst} ${obj.nameLast}`,
                }
            })
        },
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
