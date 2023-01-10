<template>
    <main
        id="main"
        class="page page-program-detail"
    >
        <nav-breadcrumb
            to="/about/programs"
            :title="page.title"
            parent-title="Programs"
        />

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

        <section-wrapper>
            <block-hours
                v-if="
                    page.uri ==
                        'about/programs/campus-library-instructional-computing-commons-clicc'
                "
                lid="0"
                :is-clicc="true"
            />
            <divider-way-finder
                v-if="
                    page.uri ==
                        'about/programs/campus-library-instructional-computing-commons-clicc'
                "
                lid="0"
                :is-clicc="true"
                class="divider"
                color="about"
            />
        </section-wrapper>

        <flexible-blocks
            class="flexible-content"
            :blocks="page.blocks"
        />

        <section-wrapper theme="divider">
            <divider-way-finder
                v-if="parsedArticles.length > 0"
                color="about"
                class="divider-way-finder"
            />
        </section-wrapper>

        <section-wrapper
            v-if="parsedArticles.length > 0"
            class="associated-articles"
            section-title="Associated News"
        >
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
    </main>
</template>

<script>
// HELPERS
import _get from "lodash/get"
import removeTags from "~/utils/removeTags"

// GQL
import PROGRAM_DETAIL from "~/gql/queries/ProgramDetail"

export default {
    async asyncData({ $graphql, params, $elasticsearchplugin, error }) {
        // Do not remove testing live preview
        console.log(
            "fetching graphql data for Service or Resource detail from Craft for live preview"
        )
        const data = await $graphql.default.request(PROGRAM_DETAIL, {
            slug: params.slug,
        })
        if (!data.entry) {
            error({ statusCode: 404, message: 'Page not found' })
        }
        // console.log("Data fetched: " + JSON.stringify(data))
        if (data) await $elasticsearchplugin.index(data.entry, params.slug)
        return {
            page: _get(data, "entry", {}),
            associatedArticles: _get(data, "associatedArticles", {}),
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
    computed: {
        parsedButtonText() {
            return _get(this.page, "buttonUrl[0].buttonText", "")
        },
        parsedButtonTo() {
            return _get(this.page, "buttonUrl[0].buttonUrl", "")
        },
        parsedStaffDirectory() {
            let x = this.page.viewStaffDirectory
            if (x == "false") {
                return ""
            } else {
                return "/about/staff"
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
                    startDate: _get(obj, "startDate", ""),
                }
            })
        },
        parsedSeeMore() {
            if (this.page.slug == "preservation-conservation-program") {
                return "/about/blogs/listing-preservation-and-conservation-blog"
            } else {
                return "/about/news"
            }
        },
    },
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
