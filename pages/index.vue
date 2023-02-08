<template lang="html">
    <main
        id="main"
        class="page page-home"
    >
        <masthead-primary
            :link-items="parsedSearchLinks"
            :advanced-search-link="parsedAdvancedSearchLink"
        />

        <!-- TODO elastic search testing -->
        <!--h4>Mapping:</h4>
        <p>{{ mapping }}</p>
        <h4>Search Responsee</h4>
        <p>{{ searchResponse }}</p-->

        <section-wrapper theme="divider">
            <divider-way-finder
                class="search-margin"
                color="help"
            />
        </section-wrapper>

        <section-wrapper class="section-no-top-margin">
            <section-cards-with-illustrations
                class="section"
                :items="parsedGetHelpWith"
                :section-title="page.getHelpWith[0].titleGeneral"
                :section-summary="page.getHelpWith[0].sectionSummary"
                button-text="See All Services &amp; Resources"
                to="/help/services-resources"
                :is-horizontal="false"
            />
        </section-wrapper>

        <section-wrapper theme="divider">
            <divider-way-finder color="visit" />
        </section-wrapper>

        <section-wrapper class="section-banner">
            <banner-featured
                :image="bannerFeaturedEvent.image"
                :to="bannerFeaturedEvent.to"
                :prompt="bannerFeaturedEvent.prompt"
                :title="bannerFeaturedEvent.title"
                :start-date="bannerFeaturedEvent.startDate"
                :end-date="bannerFeaturedEvent.endDate"
                :locations="bannerFeaturedEvent.associatedLocations"
                :align-right="false"
                :category="bannerFeaturedEvent.category"
            >
                <heading-arrow text="Featured Events &amp; Exhibitions" />
            </banner-featured>
        </section-wrapper>

        <section-wrapper class="section-dual-masonry">
            <section-dual-masonry
                v-if="parsedDualMasonryEvents.length > 0"
                :items="parsedDualMasonryEvents"
                to="/visit/events-exhibitions"
                text="See All Events &amp; Exhibitions"
            />
        </section-wrapper>

        <section-wrapper theme="divider">
            <divider-way-finder color="default" />
        </section-wrapper>

        <section-wrapper class="section-banner">
            <banner-featured
                :image="bannerFeaturedCollection.image"
                :to="bannerFeaturedCollection.to"
                :title="bannerFeaturedCollection.title"
                :description="bannerFeaturedCollection.description"
                :category="bannerFeaturedCollection.category"
                :prompt="bannerFeaturedCollection.prompt"
                :align-right="true"
            >
                <heading-arrow text="Featured Collections" />
            </banner-featured>
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
                <button-more text="See All Featured Collections" />
            </nuxt-link>
        </section-wrapper>

        <section-wrapper theme="divider">
            <divider-way-finder color="about" />
        </section-wrapper>

        <section-wrapper class="section-banner">
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
            >
                <heading-arrow text="Featured News" />
            </banner-featured>
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
                <button-more text="See All News" />
            </nuxt-link>
        </section-wrapper>
    </main>
</template>

<script>
// HELPERS
import _get from "lodash/get"

// GQL
import HOMEPAGE from "~/gql/queries/Homepage"

export default {
    async asyncData({ $graphql, $config }) {
        /*const timeElapsed = Date.now()
        const now = new Date(timeElapsed)
        let esIndex = `${$config.esIndexPrefix}${now
            .toISOString()
            .toLowerCase()
            .replaceAll(":", "-")}`
        console.log("Index named:" + esIndex)
        const response = await fetch(`${$config.esURL}/${esIndex}`, {
            headers: {
                Authorization: `ApiKey ${$config.esWriteKey}`,
                "Content-Type": "application/json",
            },
            method: "PUT",
        })*/
        /*const esData = await response.json()
        console.log(JSON.stringify(esData))*/
        const data = await $graphql.default.request(HOMEPAGE, {})
        return {
            page: _get(data, "entry", {}),
        }
    },
    head() {
        let title = this.page ? this.page.title : "... loading"
        let metaDescription =
            "The UCLA Library creates a vibrant nexus of ideas, collections, expertise, and spaces in which users illuminate solutions for local and global challenges. We constantly evolve to advance UCLA’s research, education, and public service mission by empowering and inspiring communities of scholars and learners to discover, access, create, share, and preserve knowledge."

        return {
            title: title,
            meta: [
                {
                    hid: "description",
                    name: "description",
                    content: metaDescription,
                },
            ],
        }
    },
    computed: {
        parsedAdvancedSearchLink() {
            // Last item in searchLinks
            let advancedLink = this.page.searchLinks.slice(-1)[0]
            return advancedLink
        },
        parsedSearchLinks() {
            // Remove last item in searchLinks
            let searchLinks = [...this.page.searchLinks].slice(0, -1)
            return searchLinks
        },

        parsedGetHelpWith() {
            return this.page.getHelpWith[0].getHelpWith.map((obj) => {
                return {
                    ...obj,
                    to: obj.externalResourceUrl
                        ? obj.externalResourceUrl
                        : `/${obj.uri}`,
                }
            })
        },
        bannerFeaturedEvent() {
            let bannerFeaturedEvent = this.page.featuredEvents[0]
            return {
                ...bannerFeaturedEvent,
                to: `/${bannerFeaturedEvent.uri}`,
                prompt:
                    bannerFeaturedEvent.sectionHandle ===
                    "workshopOrEventSeries"
                        ? "View series"
                        : `View ${bannerFeaturedEvent.sectionHandle}`,
                image: _get(bannerFeaturedEvent, "heroImage[0].image[0]", null),
                startDate:
                    bannerFeaturedEvent.sectionHandle === "event"
                        ? _get(bannerFeaturedEvent, "startDateWithTime", null)
                        : _get(bannerFeaturedEvent, "startDate", null),
                endDate:
                    bannerFeaturedEvent.sectionHandle === "event"
                        ? _get(bannerFeaturedEvent, "endDateWithTime", null)
                        : _get(bannerFeaturedEvent, "endDate", null),
                category: _get(bannerFeaturedEvent, "category[0].title", ""),
                description:
                    bannerFeaturedEvent.sectionHandle === "event"
                        ? _get(bannerFeaturedEvent, "eventDescription", "")
                        : _get(bannerFeaturedEvent, "summary", ""),
                locations: bannerFeaturedEvent.associatedLocations[0] != null
                    ? bannerFeaturedEvent.associatedLocations
                    : bannerFeaturedEvent.eventLocation,
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
                    startDate:
                        obj.sectionHandle === "event"
                            ? _get(obj, "startDateWithTime", null)
                            : _get(obj, "startDate", null),
                    endDate:
                        obj.sectionHandle === "event"
                            ? _get(obj, "endDateWithTime", null)
                            : _get(obj, "endDate", null),
                    category: "Featured",
                    prompt:
                        obj.sectionHandle === "workshopOrEventSeries"
                            ? "View series"
                            : `View ${obj.sectionHandle}`,
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
                to:
                    bannerFeaturedNews.externalResourceUrl != null
                        ? _get(bannerFeaturedNews, "externalResourceUrl", "")
                        : `/${bannerFeaturedNews.to}`,
                image: _get(bannerFeaturedNews, "heroImage[0].image[0]", null),
                // startDate: _get(bannerFeaturedNews, "postDate", null),
                category: this.parseArticleCategory(bannerFeaturedNews.articleCategories),
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
                    category: this.parseArticleCategory(obj.articleCategories),
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
    methods: {
        parseArticleCategory(categories) {
            if (!categories || categories.length == 0) return ""
            let result = ""
            categories.forEach((obj) => {
                result = result + obj.title + ", "
            })
            return result.slice(0, -2)
        },
    }
}
</script>
<style lang="scss" scoped>
.page-home {
    .button-more {
        margin: var(--space-2xl) auto;
    }
}
</style>
