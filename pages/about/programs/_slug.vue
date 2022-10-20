<template>
    <section class="page-program-detail">
        <nav-breadcrumb
            to="/about/program"
            :title="page.title"
            parent-title="Programs"
        />

        <banner-text
            v-if="!page.heroImage || page.heroImage.length == 0"
            class="banner-text"
            :title="page.title"
            :text="page.text"
            :button-text="parsedButtonText"
            :to="parsedButtonTo"
            :email="page.email"
            :phone="page.phoneNumber"
            :staff-directory-link="parsedStaffDirectory"
        />

        <banner-header
            v-if="page.heroImage && page.heroImage.length == 1"
            :image="page.heroImage[0].image[0]"
            :title="page.title"
            :text="page.text"
            :prompt="parsedButtonText"
            :to="parsedButtonTo"
            :email="page.email"
            :phone="page.phoneNumber"
            :staff-directory-link="parsedStaffDirectory"
            :align-right="true"
        />

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

        <section-wrapper theme="divider">
            <divider-way-finder
                class="divider"
                color="about"
            />
        </section-wrapper>

        <section-wrapper
            v-if="associatedArticles"
            class="associated-articles"
        >
            <div class="section-header">
                <h2 class="section-title">
                    Associated Articles
                </h2>
            </div>

            <section-teaser-card
                class="section-teaser-card"
                :items="parsedArticles"
            />

            <nuxt-link
                v-if="associatedArticles"
                class="button-more"
                :to="parsedSeeMore"
            >
                <button-more text="See More" />
            </nuxt-link>
        </section-wrapper>
    </section>
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
                return "/about/programs/preservation-conservation"
            } else {
                return "/about/news"
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.page-program-detail {
    .banner-text {
        --color-theme: var(--color-about-purple-03);
        margin: 0 auto var(--space-2xl);
    }

    .banner-header {
        margin-bottom: var(--space-xl);
        padding: 0;
        max-width: $container-xl-full-width + px;
        margin: var(--unit-gutter) auto;
    }

    .section-teaser-card {
        display: flex;
        flex-direction: row;
    }

    .section-header {
        margin-bottom: var(--space-xl);

        .section-title {
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
