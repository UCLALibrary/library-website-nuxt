<template lang="html">
    <main
        id="main"
        class="page page-collections"
    >
        <banner-text
            class="banner-text"
            :title="page.title"
            :text="page.summary"
        />

        <section-wrapper>
            <divider-way-finder class="divider divider-way-finder" />
        </section-wrapper>

        <section-wrapper>
            <section-cards-with-illustrations
                v-if="parsedResources.length"
                :items="parsedResources[0].featuredResources"
                :is-horizontal="false"
                :section-title="parsedResources[0].titleGeneral"
                :section-summary="parsedResources[0].sectionSummary"
                button-text="See More"
                to="/collections/access"
            />
        </section-wrapper>

        <section-wrapper>
            <divider-way-finder class="divider divider-way-finder" />
        </section-wrapper>

        <section-wrapper
            :section-title="page.featuredCollectionsSection[0].titleGeneral"
            :section-summary="page.featuredCollectionsSection[0].sectionSummary"
        >
            <banner-featured
                v-if="page.featuredCollectionsSection.length > 0"
                class="banner banner-about"
                :image="parsedBannerFeatured.image"
                :title="parsedBannerFeatured.title"
                :description="parsedBannerFeatured.description"
                :category="parsedBannerFeatured.category"
                :to="parsedBannerFeatured.to"
                :prompt="parsedBannerFeatured.prompt"
            />

            <divider-general v-if="parsedSectionHighlight.length" />

            <section-teaser-highlight
                v-if="parsedCollections.featuredCollections.length > 1"
                class="section-teaser-highlight"
                :items="parsedSectionHighlight"
            />
            <nuxt-link
                to="/collections/explore"
                class="button-more"
            >
                <button-more text="Browse Collections" />
            </nuxt-link>
        </section-wrapper>

        <section-wrapper>
            <divider-way-finder class="divider divider-way-finder" />
        </section-wrapper>

        <section-wrapper>
            <h2 class="section-heading">
                Collections News
            </h2>
            <section-teaser-card
                class="section-teaser-card"
                :items="parsedArticles"
            />
        </section-wrapper>

        <section-wrapper>
            <divider-way-finder class="divider divider-way-finder" />
        </section-wrapper>

        <flexible-blocks
            v-if="page.blocks"
            class="flexible-content"
            :blocks="page.blocks"
        />
    </main>
</template>

<script>
// HELPERS
import _get from "lodash/get"

// GQL
import COLLECTIONS_LIST from "~/gql/queries/CollectionsList.gql"

export default {
    async asyncData({ $graphql }) {
        const data = await $graphql.default.request(COLLECTIONS_LIST)
        return {
            pageArticles: _get(data, "entries", []),
            page: _get(data, "entry", {}),
        }
    },
    computed: {
        parsedResources() {
            return this.page.featuredResourcesSection.map((obj) => {
                return {
                    ...obj,
                    featuredResources: obj.featuredResources.map((item) => {
                        return {
                            ...item,
                            to: item.externalResourceUrl
                                ? item.externalResourceUrl
                                : `/${item.to}`,
                        }
                    }),
                }
            })
        },
        parsedCollections() {
            return this.page.featuredCollectionsSection[0]
                ? this.page.featuredCollectionsSection[0]
                : {}
        },
        parsedBannerFeatured() {
            if (this.page.featuredCollectionsSection.length > 0) {
                return {
                    image: _get(
                        this.page.featuredCollectionsSection[0]
                            .featuredCollections[0],
                        "heroImage[0].image[0]",
                        null
                    ),
                    category: _get(
                        this.page.featuredCollectionsSection[0]
                            .featuredCollections[0],
                        "category[0]",
                        ""
                    ),
                    title: _get(
                        this.page.featuredCollectionsSection[0]
                            .featuredCollections[0],
                        "title",
                        ""
                    ),
                    description: _get(
                        this.page.featuredCollectionsSection[0]
                            .featuredCollections[0],
                        "text",
                        ""
                    ),
                    category: this.page.featuredCollectionsSection[0]
                        .featuredCollections[0].category
                        ? this.page.featuredCollectionsSection[0].featuredCollections[0].category.join(
                            ","
                        )
                        : "",
                    prompt: _get(
                        this.page.featuredCollectionsSection[0]
                            .featuredCollections[0],
                        "button[0].buttonText",
                        ""
                    ),
                    to: _get(
                        this.page.featuredCollectionsSection[0]
                            .featuredCollections[0],
                        "button[0].buttonUrl",
                        ""
                    ),
                }
            } else {
                return {}
            }
        },
        parsedSectionHighlight() {
            if (
                this.page.featuredCollectionsSection[0].featuredCollections
                    .length > 1
            ) {
                return this.page.featuredCollectionsSection[0].featuredCollections
                    .slice(1)
                    .map((obj) => {
                        return {
                            ...obj,
                            image: _get(obj, "heroImage[0].image[0]", ""),
                            category: _get(obj, "category[0]", ""),
                        }
                    })
            } else {
                return []
            }
        },
        parsedArticles() {
            if (this.pageArticles) {
                return this.pageArticles.map((obj) => {
                    let parsedCategories = this.parseArticleCategory(
                        obj.articleCategories
                    )
                    return {
                        ...obj,
                        to: `/${obj.to}`,
                        image: _get(obj, "heroImage[0].image[0]", null),
                        category: parsedCategories,
                    }
                })
            } else {
                return []
            }
        },
    },
    methods: {
        parseArticleCategory(categories) {
            let result = ""
            categories.forEach((obj) => {
                result = result + obj.title + ", "
            })
            return result.slice(0, -2)
        },
    },
}
</script>

<style lang="scss" scoped>
.page-collections {
    .banner-text {
        margin-top: var(--space-m);
    }
    .button-more {
        margin: var(--space-2xl) auto;
    }
    .section-heading {
        @include step-4;
        color: var(--color-primary-blue-03);
        margin: var(--space-xl) auto;
        max-width: $container-l-main + px;
    }
    .section-teaser-highlight {
        margin: var(--space-xl) auto;
    }
}
</style>
