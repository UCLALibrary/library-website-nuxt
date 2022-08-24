<template lang="html">
    <main class="page">
        <masthead-secondary
            title="Modern Endangered Archives Program"
            text="Our grants enable digitization and access to at-risk cultural heritage collections from around the world. Explore our projects and learn more about available grant opportunities."
            :hero-image="parsedMastheadHeroImage"
        />

        <section-wrapper
            v-if="featuredProjects"
        >
            <!-- TODO Add the divider back in when we add the searchbar -->
            <!-- <divider-way-finder
                color="about"
                class="divider-way-finder"
            /> -->
            <div class="section">
                <h2
                    v-if="featuredProjects && featuredProjects.length"
                    class="visually-hidden"
                >
                    Featured Projects
                </h2>

                <banner-featured
                    class="banner banner-visit"
                    :image="featuredProjects[0].heroImage[0].image[0]"
                    :to="featuredProjects[0].to"
                    :title="featuredProjects[0].title"
                    :category="featuredProjects[0].category"
                    breadcrumb="Featured Projects"
                    :start-date="featuredProjects[0].startDate"
                    :end-date="featuredProjects[0].endDate"
                    :prompt="featuredProjects[0].prompt"
                    :ratio="featuredProjects[0].ratio"
                    align-right="true"
                    prompt="View project"
                />
                <div
                    class="
                block-highlight-list"
                >
                    <section-teaser-highlight
                        :items="featuredHighlightedProjects"
                    />
                </div>
                <nuxt-link
                    v-if="featuredHighlightedProjects.length"
                    class="button-more"
                    to="/funded-projects"
                >
                    <button-more text="Explore Projects" />
                </nuxt-link>
            </div>
        </section-wrapper>

        <section-wrapper v-if="(featuredProjects && featuredProjects.length) && (featuredMeapResources && featuredMeapResources.length)"  theme="divider">
            <divider-way-finder
                color="about"
                class="divider-way-finder"
            />
        </section-wrapper>

        <!-- Program Resources -->
        <section-wrapper
            v-if="featuredMeapResources && featuredMeapResources.length"
            sectionTitle="Program Resources"
            class="section"
        >
            <ul class="simple-cards-list">
                <simple-cards
                    :items="featuredMeapResources"
                />
            </ul>
            <nuxt-link
                v-if="featuredMeapResources.length"
                class="button-more"
                to="/applicants/resources"
            >
                <button-more text="See all resources" />
            </nuxt-link>
        </section-wrapper>

        <section-wrapper
            v-if="((featuredProjects && featuredProjects.length) || (featuredMeapResources && featuredMeapResources.length)) && (meapNews && meapNews.length)"
            theme="divider"
        >
            <divider-way-finder
                color="about"
                class="divider-way-finder"
            />
        </section-wrapper>

        <!-- Announcements -->
        <section-wrapper
            v-if="meapNews && meapNews.length"
            section-title="News"
            class="section"
        >
            <section-teaser-card
                :items="meapNews"
                :image="meapNews[0].heroImage[0].image[0]"
                class="meap-news"
            />

            <nuxt-link
                v-if="featuredMeapResources.length"
                class="button-more"
                to="/about/news"
            >
                <button-more text="See all news" />
            </nuxt-link>
        </section-wrapper>
    </main>
</template>

<script>
// GQL
import MEAP_HOMEPAGE from "~/gql/queries/HomePage"

// Helpers
import _get from "lodash/get"

export default {
    async asyncData({ $graphql, params}) {
        // Do not remove testing live preview
        
        const data = await $graphql.default.request(MEAP_HOMEPAGE, {
            slug: params.slug
        })
        return {
            page: _get(data, "entries", {}),
        }
    },
    head() {
        let title = this.page ? this.page.title : "... loading"
        return {
            title: title,
        }
    },
    computed: {
        homePage() {
            return this.page.map((obj) => {
                return {
                    ...obj,
                    to: `/${obj.to}`,
                }
            })[0]
        },
        parsedMastheadHeroImage() {
            return this.homePage.heroImage[0].image[0]
        },
        featuredMeapResources() {
            return this.homePage.featuredMeapResources
        },
        featuredProjects() {
            return  this.homePage.featuredProjects.map((obj) => {
                return {
                    ...obj,
                    image: obj.heroImage[0].image[0]
                }
            })
        },
        featuredHighlightedProjects() {
            return this.featuredProjects.slice(1)
        },
        meapNews() {
            return this.homePage.meapNews.map((obj) => {
                return {
                    ...obj,
                    image: obj.heroImage[0].image[0]
                }
            })
        },
    },
}
</script>

<style lang="scss" scoped>
    :deep .masthead-secondary .meta {
        background-color: var(--color-primary-blue-03);
        padding: 0 18px 20px 24px;
    }

    .visually-hidden {
        @include visually-hidden;
    }

    .button-more {
        margin: var(--space-2xl) auto;
        white-space: nowrap;
    }

    .meap-news, .block-highlight-list, .simple-cards-list {
        margin: var(--space-2xl) auto;
    }
</style>
