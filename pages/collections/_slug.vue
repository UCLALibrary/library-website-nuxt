<template>
    <main class="page-collection-detail">
        <nav-breadcrumb
            to="/collection"
            :title="page.title"
            parent-title="Collections"
        />
        <h3>{{ page }}</h3>
        <h3>{{ parsedButtonText }}</h3>

        <banner-text
            v-if="!page.heroImage || page.heroImage.length == 0"
            :title="page.title"
            :text="page.text"
            :email="page.email"
            :phone="page.phoneNumber"
            :staff-directory-link="parsedStaffDirectory"
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
                :email="page.email"
                :phone="page.phoneNumber"
                :staff-directory-link="parsedStaffDirectory"
                :prompt="parsedButtonText"
                :to="parsedButtonTo"
                :align-right="true"
            />
        </section-wrapper>

        <section-wrapper theme="divider">
            <divider-way-finder
                class="divider"
                color="about"
            />
        </section-wrapper>

        <flexible-blocks
            class="flexible-content"
            :blocks="page.blocks"
        />

        <section-wrapper
            v-if=""
            class=""
        />
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
        parsedButtonText() {
            return _get(this.page, "buttonUrl[0].buttonText", "")
        },
        parsedButtonTo() {
            return _get(this.page, "buttonUrl[0].buttonUrl", "")
        },
        parsedStaffDirectory() {
            if (this.page.viewStaffDirectory != "affiliateLibrary") {
                return "/about/staff"
            } else {
                return ""
            }
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

    .section-title {
        margin-bottom: var(--space-xl);

        .title {
            @include step-3;
            color: var(--color-primary-blue-03);
            margin-bottom: var(--space-m);
        }
    }

    .button-more {
        margin: var(--space-2xl) auto;
    }
}
</style>
