<template>
    <main class="page-collection-detail">
        <nav-breadcrumb
            to="/collection"
            :title="page.title"
            parent-title="Collections"
        />
        <h3>page.associatedStaffMember: {{ page.associatedStaffMember }}</h3>
        <h3>parsedDonors: {{ parsedDonors }}</h3>

        <banner-text
            v-if="!page.heroImage || page.heroImage.length == 0"
            :title="page.title"
            :text="page.text"
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
                email="AskUs@library.ucla.edu"
                :prompt="parsedButtonText"
                :to="parsedButtonTo"
                :align-right="false"
            />
        </section-wrapper>

        <section-wrapper theme="divider">
            <divider-way-finder
                class="divider"
                color="default"
            />
        </section-wrapper>

        <!-- Using the Collection -->
        <section-wrapper
            v-if="page.richTextSimplified"
            section-title="Using the Collection"
        >
            <div class="section-header">
                <rich-text
                    :rich-text-content="page.richTextSimplified"
                />
            </div>

            <divider-way-finder
                class="divider"
                color="default"
            />
        </section-wrapper>

        <!-- Flexible Page Blocks -->
        <flexible-blocks
            class="flexible-content"
            :blocks="page.blocks"
        />

        <!-- Services and Resources -->
        <section-wrapper
            v-if="page.resourceServiceWorkshop.length"
            class=""
        >
            <div class="section-header">
                <simple-cards
                    section-title="Services &amp; Resources"
                    :items="parsedServicesAndResources"
                />
            </div>

            <divider-way-finder
                class="divider"
                color="default"
            />
        </section-wrapper>

        <!-- Endowments -->
        <section-wrapper
            v-if="parsedEndowments"
            class=""
        >
            <section-staff-article-list
                section-title="Collection Endowments"
                :items="parsedEndowments"
            />

            <divider-way-finder
                class="divider"
                color="default"
            />
        </section-wrapper>

        <!-- Subject Specialist -->
        <section-wrapper
            v-if="parsedAssociatedStaffMember.length > 0"
            section-title="Contact a Subject Specialist"
        >
            <section-staff-list
                :items="parsedAssociatedStaffMember"
            />
        </section-wrapper>
    </main>
</template>

<script>
// Helpers
import _get from "lodash/get"

// GQL
import COLLECTION_DETAIL from "~/gql/queries/CollectionDetail"

export default {
    async asyncData({ $graphql, params, store }) {
        // Do not remove testing live preview
        console.log(
            "fetching graphql data for Service or Resource detail from Craft for live preview"
        )
        const data = await $graphql.default.request(COLLECTION_DETAIL, {
            slug: params.slug,
        })
        console.log("Data fetched: " + JSON.stringify(data))
        return {
            page: data.entry,
            // associatedArticles: _get(data, "associatedArticles", {}),
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
            return this.page.physicalDigital.length == 1 ?
                this.page.physicalDigital[0] :
                `${this.page.physicalDigital[0]} & ${this.page.physicalDigital[1]}`
        },
        parsedButtonText() {
            return _get(this.page, "buttonUrl[0].buttonText", "")
        },
        parsedButtonTo() {
            return _get(this.page, "buttonUrl[0].buttonUrl", "")
        },
        // parsedCollection() {
        //     return this.page.associatedCollection.map((obj) => {
        //         return {
        //             ...obj,
        //             to: `/about/${obj.articleType}/${obj.to}`,
        //             image: _get(obj, "heroImage[0].image[0]", {}),
        //             category: _get(obj, "category", ""),
        //             title: _get(obj, "title", ""),
        //             text: _get(obj, "description", ""),
        //             startDate: _get(obj, "startDate", "")
        //         }
        //     })
        // },
        parsedServicesAndResources() {
            let services = this.page.resourceServiceWorkshop
            return services.map((obj) => {
                return {
                    ...obj,
                    to: `${obj.uri}`,
                    title: _get(obj, "title", ""),
                    text: _get(obj, "text", "")
                }
            })
        },
        parsedDonors() {
            let donors = this.page.endowment[0].donors
            let donorNames = []
            donors.map((donor) => {
                donorNames.push(`${donor.firstName} ${donor.lastName}`)
            })
            if (donorNames.length == 1) {
                return `Donor: ${donorNames[0]}`
            } else {
                let names = [donorNames.slice(0, -1).join(', '), donorNames.slice(-1)[0]].join(donorNames.length < 2 ? '' : ' and ')
                return `Donors: ${names}`
            }
        },
        // TODO fix this
        // parsedEndowments() {
        //     let endowment = this.page.endowment
        //     let parsedCategory = this.parsedDonors
        //     return endowment.map((item) => {
        //         return {
        //             to: `${item.uri}`,
        //             image: _get(item, "image[0]", null),
        //             title: item.endowment[0].title,
        //             description: _get(item, "summary", ""),
        //             category: parsedCategory
        //         }
        //     })
        // },
        parsedAssociatedStaffMember() {
            return this.page.associatedStaffMember.map((obj) => {
                return {
                    ...obj,
                    to: `/about/staff/${obj.to}`,
                    image: _get(obj, "image[0]", null),
                    staffName: `${obj.nameFirst} ${obj.nameLast}`,
                }
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.page-program-detail {
    .section-teaser-card {
        display: flex;
        flex-direction: row;
    }

    .section-header {
        margin: var(--space-xl) auto;
        max-width: $container-l-main + px;
    }
    .section-title-page {
        @include step-4;
        color: var(--color-primary-blue-03);
        color: green;
    }
}
</style>
