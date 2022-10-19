<template>
    <div class="page-program-detail">
        <h3>associatedArticles: {{ associatedArticles }}</h3>
        <hr>
        <h3>parsedArticles: {{ parsedArticles }}</h3>

        <nav-breadcrumb
            to="/about/program"
            :title="page.title"
            parent-title="Programs"
        />

        <banner-text
            v-if="!page.heroImage || page.heroImage.length == 0"
            class="banner-text"
            category="Program"
            :title="page.title"
            :text="page.text"
            :button-text="parsedButtonText"
            :to="parsedButtonTo"
            :email="page.email"
            :phone="page.phoneNumber"
            :staff-directory-link="parsedStaffDirectory"
        />

        <section-wrapper class="section-banner">
            <banner-header
                v-if="page.heroImage && page.heroImage.length == 1"
                :image="page.heroImage[0].image[0]"
                category="Program"
                :title="page.title"
                :text="page.text"
                :prompt="parsedButtonText"
                :to="parsedButtonTo"
                :email="page.email"
                :phone="page.phoneNumber"
                :staff-directory-link="parsedStaffDirectory"
                :align-right="true"
            />
        </section-wrapper>

        <section-wrapper theme="divider">
            <divider-way-finder
                class="divider"
                color="about"
            />
        </section-wrapper>

        <section-wrapper>
            <block-hours
                v-if="page.uri == 
                    'about/programs/campus-library-instructional-computing-commons-clicc'"
                lid="0"
                :is-clicc="true"
            />
        </section-wrapper>

        <flexible-blocks
            class="flexible-content"
            :blocks="page.blocks"
        />

        <section-wrapper
            v-if="associatedArticles"
            class="associated-articles"
        >
            <h2 class="section-heading">
                Associated Articles
            </h2>
        </section-wrapper>

        <section-teaser-card
            class="section-teaser-card"
            :items="parsedArticles"
        />

        <section-wrapper
            v-if="associatedArticles"
            class="associated-articles"
        >
            <nuxt-link
                v-if="associatedArticles"
                class="button-more"
                to="/about/news"
            >
                <button-more text="See More" />
            </nuxt-link>
        </section-wrapper>
    </div>
</template>

<script>
// Helpers
import _get from "lodash/get"

// GQL
import PROGRAM_DETAIL from "~/gql/queries/ProgramDetail"

export default {
    async asyncData({ $graphql, params, store }) {
        // Do not remove testing live preview
        console.log(
            "fetching graphql data for Service or Resource detail from Craft for live preview"
        )
        const data = await $graphql.default.request(PROGRAM_DETAIL, {
            slug: params.slug,
        })
        console.log("Data fetched: " + JSON.stringify(data))
        return {
            page: _get(data, "entry", {}),
            associatedArticles: _get(data, "associatedArticles", {}),
        }
    },
    head() {
        let title = this.page ? this.page.title : "... loading"
        return {
            title: title,
        }
    },
    computed: {
        // classes() {
        //     return is-clicc ? ["block-hours is-clicc"] : ["block-hours"]
        // },
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
        parsedArticles() {
            return this.associatedArticles.map((obj) => {
                return {
                    ...obj,
                    to: `/about/blog${obj.slug}`,
                    image: _get(obj, "heroImage[0].image[0]", {}),
                    category: _get(obj, "category", ""),
                    title: _get(obj, "title", ""),
                    text: _get(obj, "description", ""),
                    startDate: _get(obj, "startDate", "")
                }
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.page-program-detail {
.associated-articles {
    display: flex;
        flex-direction: column;
}
    .section-teaser-card {
        //margin: var(--space-xl) auto;
        display: flex;
        flex-direction: row;
    }
::v-deep .block-hours {
    .s-lc-wh {
        w-loc,
        .s-lc-whw-subloc {
            display: none;
        }

        .s-lc-whw-loc-tr-4691,
        .s-lc-whw-loc-tr-3291,
        .s-lc-whw-loc-tr-4698,
        .s-lc-whw-loc-tr-2609,
        .s-lc-whw-loc-tr-2607,
        .s-lc-whw-loc-tr-2608,
        .s-lc-whw-loc-tr-2614,
        .s-lc-whw-loc-tr-4705,
        .s-lc-whw-loc-tr-4706 {
            display: table-row;
        }
    }
}
}
</style>
