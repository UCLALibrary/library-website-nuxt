<template>
    <main class="page-collection-detail">
        <nav-breadcrumb
            to="/collection"
            :title="page.title"
            parent-title="Collections"
        />
        <h3>page: {{ page }}</h3>
        <h3>parsedPhysicalDigital: {{ parsedPhysicalDigital }}</h3>
        <!-- <h3>parsedButtonText : {{ page.ButtonUrl }}</h3> -->

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

        <flexible-blocks
            class="flexible-content"
            :blocks="page.blocks"
        />

        <!-- <section-wrapper
            v-if=""
            class=""
        >
            <div class="section-header">
                <h2 class="section-title">
                    Services & Resources
                </h2>
                <simple-cards
                    v-if="page.resourceServiceWorkshop.length"
                    section-title="Services &amp; Resources"
                    :items="parsedServicesAndResources"
                />
            </div>

            <divider-way-finder
                class="divider"
                color="default"
            />
        </section-wrapper>

        <section-wrapper
            v-if=""
            class=""
        >
            <h2 class="section-title">
                Collection Endowments
            </h2>

            <divider-way-finder
                class="divider"
                color="default"
            />
        </section-wrapper>

        <section-wrapper
            v-if="parsedAssociatedStaffMember.length > 0"
            theme="divider"
        >
            <divider-way-finder
                class="divider"
                color="about"
            />
        </section-wrapper>

        <section-wrapper v-if="parsedAssociatedStaffMember.length > 0">
            <h2 class="section-title">
                Contact a Subject Specialist
            </h2>

            <section-staff-list :items="parsedAssociatedStaffMember" />
        </section-wrapper> -->
    </main>
</template>
<!--

section-wrapper
divider-way-finder
section-wrapper (section-title="Using the Collection")

rich-text
section-wrapper
divider-way-finder

flexible-blocks

section-wrapper (if not empty, section-title="Services & Resources")

simple-cards

section-wrapper (if there are simple cards and endowments or staff)

divider-way-finder
section-wrapper (if not empty, section-title="Collection Endowments")

section-teaser-card
section-wrapper (if there are endowments and staff)
divider-way-finder
section-wrapper (if not empty, section-title="Contact a Subject Specialist")
section-staff-list -->


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
            // if (this.page.physicalDigital.length == 1){
            //     return this.page.physicalDigital[0]
            // } else  if (this.page.physicalDigital.length > 1){
            //     return `${this.page.physicalDigital[0]} & ${this.page.physicalDigital[1]}`
            // } else {
            //     return ""
            // }
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
        parsedCollection() {
            return this.associatedCollection.map((obj) => {
                return {
                    ...obj,
                    to: `/about/${obj.articleType}/${obj.to}`,
                    image: _get(obj, "heroImage[0].image[0]", {}),
                    category: _get(obj, "category", ""),
                    title: _get(obj, "title", ""),
                    text: _get(obj, "description", ""),
                    startDate: _get(obj, "startDate", "")
                }
            })
        },
        parsedSeeMore() {
            if (this.page.slug == "preservation-conservation-program") {
                return "/about/blogs/listing-preservation-and-conservation-blog"
            } else {
                return "/about/news"
            }
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
    .section-title {
        @include step-4;
        color: var(--color-primary-blue-03);
    }

    // .section-title {
    //     margin-bottom: var(--space-xl);

    //     .title {
    //         @include step-3;
    //         color: var(--color-primary-blue-03);
    //         margin-bottom: var(--space-m);
    //     }
    // }

    .button-more {
        margin: var(--space-2xl) auto;
    }
}
</style>
