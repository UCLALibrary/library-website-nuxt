<template lang="html">
    <main
        id="main"
        class="page page-home"
    >
        <masthead-primary />
        <!-- TODO elastic search testing -->
        <!--h4>Mapping:</h4>
        <p>{{ mapping }}</p>
        <h4>Search Responsee</h4>
        <p>{{ searchResponse }}</p-->
        <section-wrapper theme="divider">
            <divider-way-finder color="help" />
        </section-wrapper>
        <section-wrapper>
            <section-cards-with-illustrations
                class="section"
                :items="page.getHelpWith[0].getHelpWith"
                :section-title="page.getHelpWith[0].titleGeneral"
                :section-summary="page.getHelpWith[0].sectionSummary"
                to="/help/services-resources"
                :is-horizontal="false"
            />
        </section-wrapper>

        <section-wrapper theme="divider">
            <divider-way-finder color="visit" />
        </section-wrapper>
        <section-wrapper>
            <banner-featured
                :image="bannerFeaturedEvent.image"
                :to="bannerFeaturedEvent.to"
                :prompt="bannerFeaturedEvent.prompt"
                :title="bannerFeaturedEvent.title"
                :start-date="bannerFeaturedEvent.startDate"
                :end-date="bannerFeaturedEvent.endDate"
                :description="bannerFeaturedEvent.description"
                :locations="bannerFeaturedEvent.associatedLocations"
                :align-right="false"
            />
        </section-wrapper>

        <section-dual-masonry
            v-if="parsedDualMasonryEvents.length > 0"
            :items="parsedDualMasonryEvents"
            to="/events-exhibitions"
        />

        <section-wrapper theme="divider">
            <divider-way-finder color="about" />
        </section-wrapper>
        <section-wrapper>
            <banner-featured
                :image="bannerFeaturedCollection.image"
                :to="bannerFeaturedCollection.to"
                :title="bannerFeaturedCollection.title"
                :description="bannerFeaturedCollection.description"
                :category="bannerFeaturedCollection.category"
                :prompt="bannerFeaturedCollection.prompt"
                :align-right="true"
            />
        </section-wrapper>
        <section-wrapper>
            <section-teaser-highlight
                v-if="parsedSectionHighlightCollection.length > 1"
                :items="parsedSectionHighlightCollection"
            />
            <nuxt-link
                to="/collections/explore"
                class="button-more"
            >
                <button-more text="See More" />
            </nuxt-link>
        </section-wrapper>
        <section-wrapper theme="divider">
            <divider-way-finder color="about" />
        </section-wrapper>
        <section-wrapper>
            <banner-featured
                :image="bannerFeaturedNews.image"
                :to="bannerFeaturedNews.to"
                :prompt="bannerFeaturedNews.prompt"
                :title="bannerFeaturedNews.title"
                :description="bannerFeaturedNews.description"
                :category="bannerFeaturedNews.category"
                :start-date="bannerFeaturedNews.startDate"
                :end-date="bannerFeaturedNews.endDate"
                :align-right="false"
            />
        </section-wrapper>
        <section-wrapper>
            <section-teaser-card
                v-if="parsedNewsList.length > 1"
                :items="parsedNewsList"
            />
            <nuxt-link
                to="/about/news"
                class="button-more"
            >
                <button-more text="See More" />
            </nuxt-link>
        </section-wrapper>
        <section-wrapper theme="divider">
            <divider-general />
        </section-wrapper>
    </main>
</template>

<script>
// Helpers
import _get from "lodash/get"
// gql
import HOMEPAGE from "~/gql/queries/Homepage"
export default {
    async asyncData({ $graphql, $dataApi }) {
        const data = await $graphql.default.request(HOMEPAGE, {})
        return {
            page: _get(data, "entry", {}),
        }
    },
    computed: {
        bannerFeaturedEvent() {
            let bannerFeaturedEvent = this.page.featuredEvents[0]
            return {
                ...bannerFeaturedEvent,
                to: `/${bannerFeaturedEvent.uri}`,
                prompt: `View ${bannerFeaturedEvent.sectionHandle}`,
                image: _get(bannerFeaturedEvent, "heroImage[0].image[0]", null),
                startDate: _get(bannerFeaturedEvent, "startDateWithTime", null),
                endDate: _get(bannerFeaturedEvent, "endDateWithTime", null),
                category: _get(bannerFeaturedEvent, "category[0].title", ""),
                description:
                    bannerFeaturedEvent.sectionHandle === "event"
                        ? _get(bannerFeaturedEvent, "text", "")
                        : "",
            }
        },
        // TO DO need to update dates on component
        parsedDualMasonryEvents() {
            let masonaryEvents = this.page.featuredEvents.slice(1, 3)
            return masonaryEvents.map((obj) => {
                return {
                    ...obj,
                    to: `/${obj.uri}`,
                    image: _get(obj, "heroImage[0].image[0]", null),
                    dates: _get(obj, "startDateWithTime", null),
                    category: _get(obj, "category[0].title", ""),
                    prompt: `View ${obj.sectionHandle}`,
                }
            })
        },
        bannerFeaturedCollection() {
            let bannerFeaturedCollection = this.page.featuredCollections[0]
            return {
                ...bannerFeaturedCollection,
                to: `/${bannerFeaturedCollection.uri}`,
                image: _get(
                    bannerFeaturedCollection,
                    "heroImage[0].image[0]",
                    null
                ),
                category: bannerFeaturedCollection.category
                    ? bannerFeaturedCollection.category.toString()
                    : "",
                description: _get(bannerFeaturedCollection, "text", ""),
                prompt: `View ${bannerFeaturedCollection.sectionHandle}`,
            }
        },
        parsedSectionHighlightCollection() {
            let highlightCollections = this.page.featuredCollections.slice(1)
            return highlightCollections.map((obj) => {
                return {
                    ...obj,
                    to: `/${obj.uri}`,
                    image: _get(obj, "heroImage[0].image[0]", ""),
                    category: obj.category ? obj.category.toString() : "",
                }
            })
        },
        bannerFeaturedNews() {
            let bannerFeaturedNews = this.page.featuredNews[0]
            return {
                ...bannerFeaturedNews,
                to: `/${bannerFeaturedNews.uri}`,
                image: _get(bannerFeaturedNews, "heroImage[0].image[0]", null),
                // startDate: _get(bannerFeaturedNews, "postDate", null),
                category: _get(
                    bannerFeaturedNews,
                    "articleCategories[0].title",
                    ""
                ),
                description: _get(bannerFeaturedNews, "text", ""),
                startDate: _get(bannerFeaturedNews, "postDate", ""),
                endDate: _get(bannerFeaturedNews, "postDate", ""),
                prompt: `View ${bannerFeaturedNews.sectionHandle}`,
            }
        },
        parsedNewsList() {
            let newsList = this.page.featuredNews.slice(1)
            return newsList.map((obj) => {
                return {
                    ...obj,
                    to: `/${obj.uri}`,
                    image: _get(obj, "heroImage[0].image[0]", ""),
                    category: _get(obj, "articleCategories[0].title", ""),
                    startDate: _get(obj, "postDate", ""),
                    endDate: _get(obj, "postDate", ""),
                }
            })
        },
    },
    // async mounted() {
    //     const mapping = await this.$dataApi.getMapping()
    //     console.log(JSON.stringify(mapping))
    //     const searchResponse = await this.$dataApi.siteSearch("test")
    //     console.log("Search Response: " + JSON.stringify(searchResponse))
    // },
}
</script>
<style lang="scss" scoped>
.page-home {
    .button-more {
        margin: var(--space-2xl) auto;
    }
}
</style>
