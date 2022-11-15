<template lang="html">
<<<<<<< HEAD
    <section class="page-collections">
        <banner-text
            v-if="!page.heroImage"
            class="banner-text"
            :title="page.title"
            :text="page.summary"
        />
=======
    <section class="page-collections-access">
        <!-- <nav-breadcrumb
            to="/collections/access"
            :title="page.title"
            parent-title="Collections"
        /> -->

        <!-- <masthead-secondary
            :title="page.title"
            :text="page.summary"
        > -->
        <!-- TODO Add SearchGenric here when complete -->
        <!-- search-generic
                search-type="about"
                class="generic-search"
            />-->
        <!-- :filters="searchFilters.filters"
                :view-modes="searchFilters.views"
                @view-mode-change="viewModeChanger" -->
        <!-- </masthead-secondary> -->

        <!-- <banner-text
            v-if="!page.heroImage || page.heroImage.length == 0"
            class="banner-text"
            :title="page.title"
            :text="page.summary"
        /> -->
>>>>>>> 1d065b8 (feat: added news component)

        <section-wrapper>
            <divider-way-finder class="divider divider-way-finder" />
        </section-wrapper>

        <section-wrapper>
            <section-cards-with-illustrations
<<<<<<< HEAD
                v-if="parsedResources.length"
                :items="parsedResources[0].featuredResources"
                :is-horizontal="false"
                :section-title="parsedResources[0].titleGeneral"
                :section-summary="parsedResources[0].sectionSummary"
                button-text="See More"
                to="/collections/access"
=======
                class="section"
                :items="parsedResources.featuredResources"
                :is-horizontal="false"
                :section-title="parsedResources.titleGeneral"
                :section-summary="parsedResources.sectionSummary"
                button-text="See More"
                to="/help/foo/bar"
>>>>>>> 1d065b8 (feat: added news component)
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
<<<<<<< HEAD
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

=======
            <section-wrapper>
                <banner-featured
                    class="banner banner-about"
                    :image="parsedCollections.featuredCollections[0].heroImage[0].image[0]"
                    :title="parsedCollections.titleGeneral"
                    :description="parsedCollections.sectionSummary"
                    :category="parseCategory(parsedCollections.featuredCollections[0].category)"
                />
                <!-- <section-teaser-highlight
                    v-if="parsedCollections.featuredCollections.length !== 1"
                    :items="parsedSectionHighlight"
                /> -->
                <!-- <block-highlight
                    :image="image"
                    :to="to"
                    :category="category"
                    :title="title"
                    :start-date="startDate"
                    :end-date="endDate"
                    :text="text"
                    :has-triangle="true"
                    :is-vertical="true"
                    :image-aspect-ratio="60"
                    :locations="locations"
                /> -->
            </section-wrapper>
        </section-wrapper>

        <section-wrapper>
            <divider-way-finder class="divider divider-way-finder" />
        </section-wrapper>

        <!-- cards with images -->
        
        <section-teaser-card
            class="section-teaser-card"
            :items="parsedArticles"
        />

>>>>>>> 1d065b8 (feat: added news component)
        <section-wrapper>
            <divider-way-finder class="divider divider-way-finder" />
        </section-wrapper>

        <flexible-blocks
<<<<<<< HEAD
            v-if="page.blocks"
=======
            v-if="page"
>>>>>>> 1d065b8 (feat: added news component)
            class="flexible-content"
            :blocks="page.blocks"
        />
    </section>
</template>

<script>
// Helpers
import _get from "lodash/get"
// GQL
import COLLECTIONS_LIST from "~/gql/queries/CollectionsList.gql"
<<<<<<< HEAD
=======
import HEADER_MAIN_MENU_ITEMS from "~/gql/queries/HeaderMainMenuItems.gql"

>>>>>>> 1d065b8 (feat: added news component)
export default {
    async asyncData({ $graphql }) {
        const data = await $graphql.default.request(COLLECTIONS_LIST)
        return {
<<<<<<< HEAD
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
                        to: `/about/${obj.articleType}/${obj.to}`,
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
=======
            allEvents: [],
            primaryItems: [],
            secondaryItems: [],
            formData: {},
            formId: "",
            eventId: "9383207",
            libcalEndpointProxy: this.$config.libcalProxy,
            page: {},
            pageArticles: {},

        }
    },
    async fetch() {
        console.log("In fetch start")
        const navData = await this.$graphql.default.request(
            HEADER_MAIN_MENU_ITEMS
        )
        this.primaryItems = _get(navData, "primary", [])
        this.secondaryItems = _get(navData, "secondary", [])

        const data = await this.$graphql.default.request(COLLECTIONS_LIST)
        
        // data.entry.accessCollections.forEach(element => {
        //     element.to = element.uri ? element.uri : element.externalResourceUrl

        //     element.category = 
        //         (element.workshopOrEventSeriesType === "help/services-resources") ? "workshop":
        //             element.serviceOrResourceType ? element.serviceOrResourceType :
        //                 (element.typeHandle === "externalResource") ? "external resource":
        //                     element.typeHandle
        // })
        this.pageArticles = _get(data, "entries", [])
        this.page = _get(data, "entry", {})
>>>>>>> 1d065b8 (feat: added news component)
    },
    computed: {
        parsedResources() {
            return this.page.featuredResourcesSection[0]
        },
        parsedCollections() {
            return this.page.featuredCollectionsSection[0]
        },
        parsedBannerHeader() {
            return this.parsedCollections.featuredCollections[0]
        },
        parsedSectionHighlight() {
            return this.page.featuredCollectionsSection[0].featuredCollections.slice(1).map((obj) => {
                return {
                    ...obj
                }
            })
        },
        parsedArticles() {
            return this.pageArticles.map((obj) => {
                let parsedCategories = this.parseArticleCategory(obj.articleCategories)
                return {
                    ...obj,
                    to: `/about/${obj.articleType}/${obj.to}`,
                    image: _get(obj, "heroImage[0].image[0]", {}),
                    category: parsedCategories,
                }
            })
        },
    },
    methods: {
        parseCategory(categories) {
            return categories.join(", ")
        },
        parseArticleCategory(categories) {
            let result = ""
            categories.forEach(obj => {
                result = result + obj.title + ", " 
            })
            return result.slice(0, -2)
        },
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
