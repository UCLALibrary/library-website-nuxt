<template lang="html">
    <main
        id="main"
        class="page page-collections"
    >
        <banner-text
            class="banner-text"
            :title="page.title"
            :text="page.text"
        />

        <section-wrapper>
            <divider-way-finder class="divider divider-way-finder" />
        </section-wrapper>

        <page-anchor
            v-if="h2Array.length >=3"
            :section-titles= h2Array
        />

        <section-wrapper
            :section-title="parsedResources[0].titleGeneral"
            :section-summary="parsedResources[0].sectionSummary"
        >
            <section-cards-with-illustrations
                v-if="parsedResources.length"
                :items="parsedResources[0].featuredResources"
                :is-horizontal="false"
                button-text="See More"
                to="/collections/access"
            />
        </section-wrapper>

        <section-wrapper>
            <divider-way-finder class="divider divider-way-finder" />
        </section-wrapper>

        <!-- FEATURED & HIGHLIGHTED -->
        <section-wrapper
            :section-title="page.featuredCollectionsSection[0].titleGeneral"
            :section-summary="page.featuredCollectionsSection[0].sectionSummary"
        >
            <banner-featured
                v-if="page.featuredCollectionsSection.length > 0"
                class="banner banner-about"
                :image="parsedBannerFeatured[0].image"
                :title="parsedBannerFeatured[0].title"
                :description="parsedBannerFeatured[0].summary"
                :category="parsedBannerFeatured[0].category"
                :to="parsedBannerFeatured[0].to"
                :prompt="parsedBannerFeatured[0].prompt"
                :title-link="parsedBannerFeatured[0].titleLink"
            />

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

        <!-- COLLECTION NEWS -->
        <section-wrapper>
            <divider-way-finder class="divider divider-way-finder" />
        </section-wrapper>

        <section-wrapper section-title="Collections News">
            <section-teaser-card
                class="section-teaser-card"
                :items="parsedArticles"
            />
            <smart-link
                v-if="pageArticleCount > 3"
                class="button-more"
                :to="allCollectionsNewsLink"
            >
                <button-more text="See All Collections News" />
            </smart-link>
        </section-wrapper>

        <section-wrapper>
            <divider-way-finder class="divider divider-way-finder" />
        </section-wrapper>

        <!-- FLEXIBLE PAGE BLOCKS -->
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
import format from "date-fns/format"
import removeTags from "~/utils/removeTags"

// GQL
import COLLECTIONS_LIST from "~/gql/queries/CollectionsList.gql"

export default {
    async asyncData({ $graphql }) {
        const data = await $graphql.default.request(COLLECTIONS_LIST)
        return {
            page: _get(data, "entry", {}),
            pageArticles: _get(data, "entries", []),
            pageArticleCount: _get(data, "entryCount", 0),
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
            h2Array: [] // anchor tags
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
            let meta = this.page.featuredCollectionsSection[0].featuredCollections

            return meta.map((obj) => {
                return {
                    ...obj,
                    image: obj.heroImage[0].image[0],
                    title: _get(obj, "title", ""),
                    titleLink: `/${obj.titleLink}`,
                    description: (obj, "summary", ""),
                    category: obj.category
                        ? obj.category.join(", ")
                        : "",
                    to: _get(obj, "button[0].buttonUrl", ""),
                    prompt: _get(obj,"button[0].buttonText", ""),
                }
            })
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
                            category: obj.category.join(", "),
                            to: `/${obj.uri}`,
                            text: obj.summary
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
                        to:
                            obj.externalResourceUrl != null
                                ? _get(obj, "externalResourceUrl", "")
                                : `/${obj.to}`,
                        image: _get(obj, "heroImage[0].image[0]", null),
                        category: parsedCategories,
                        bylineOne: this.parsedDate(obj.postDate),
                    }
                })
            } else {
                return []
            }
        },
        allCollectionsNewsLink() {
            if (this.page.locationType != "affiliateLibrary") {
                let searchLibrary = "Collections"
                let libConcat = '/about/news?q=&filters={\"category.title.keyword\":[\"' + encodeURIComponent(searchLibrary) + '\"]}'

                return libConcat
            } else {
                return ""
            }
        }
    },
    methods: {
        parsedDate(postDate) {
            return format(new Date(postDate), "MMMM d, Y")
        },
        parseArticleCategory(categories) {
            let result = ""
            categories.forEach((obj) => {
                result = result + obj.title + ", "
            })
            return result.slice(0, -2)
        },
    },
    mounted() {
        // Call the plugin method to get the .section-header2 and .section-header3 elements
        this.h2Array = this.$getHeaders.getHeadersMethod();
    }
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
