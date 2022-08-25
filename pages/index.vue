<template lang="html">
    <section class="page">
        <masthead-secondary
            title="Modern Endangered Archives Program"
            text="Our grants enable digitization and access to at-risk cultural heritage collections from around the world. Explore our projects and learn more about available grant opportunities."
            :hero-image="parsedMastheadHeroImage"
        />

        <div v-if="featuredProjects">
            <!-- TODO Add the divider back in when we add the searchbar -->
            <!-- <divider-way-finder
                color="about"
                class="divider-way-finder"
            /> -->
            <div class="section">
                <h2
                    v-if="featuredProjects"
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
                    :ratio="featuredProjects[0].ratio"
                    :align-right="true"
                    prompt="View project"
                />
            </div>

            <div class="section">
                <div class="block-highlight-list">
                    <section-teaser-highlight
                        :items="featuredHighlightedProjects"
                    />
                </div>
                <nuxt-link
                    v-if="featuredHighlightedProjects.length"
                    class="button-more"
                    to="/projects"
                >
                    <button-more text="Explore Projects" />
                </nuxt-link>
            </div>
        </div>

        <!-- Program Resources -->
        <div
            v-if="featuredMeapResources"
            class="section"
        >
            <divider-way-finder
                color="about"
                class="divider-way-finder"
            />
            <h2
                v-if="featuredMeapResources"
                class="section-heading"
            >
                Program Resources
            </h2>
            <ul class="simple-cards-list">
                <simple-cards :items="featuredMeapResources" />
            </ul>
            <nuxt-link
                v-if="featuredMeapResources.length"
                class="button-more"
                to="/applicants/resources"
            >
                <button-more text="See all resources" />
            </nuxt-link>
        </div>

        <!-- Announcements -->
        <div
            v-if="meapNews"
            class="section"
        >
            <divider-way-finder
                color="about"
                class="divider-way-finder"
            />

            <h2 class="section-heading">
                News
            </h2>
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
        </div>
    </section>
</template>

<script>
// GQL
import MEAP_HOMEPAGE from "~/gql/queries/HomePage"
// Helpers
import _get from "lodash/get"
export default {
    async asyncData({ $graphql, params, store }) {
        const data = await $graphql.default.request(MEAP_HOMEPAGE, {
            slug: params.slug,
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
            return this.homePage.featuredProjects.map((obj) => {
                return {
                    ...obj,
                    image: obj.heroImage[0].image[0],
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
                    image: obj.heroImage[0].image[0],
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
.section-heading {
    @include step-3;
    color: var(--color-primary-blue-03);
    margin: var(--space-l) auto;
    margin-bottom: var(--space-xl);
    max-width: 928px;
}
.button-more {
    margin: var(--space-2xl) auto;
    white-space: nowrap;
}
.meap-news,
.block-highlight-list {
    margin: var(--space-2xl) auto;
}
@media #{$medium} {
    .content {
        padding: 0 var(--unit-gutter);
    }
    .meap-news {
        padding: 0 var(--unit-gutter);
    }
    .featured {
        padding: 0 var(--unit-gutter);
    }
}
</style>
