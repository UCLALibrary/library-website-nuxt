<template lang="html">
    <main
        id="main"
        class="page page-home"
    >
        <masthead-secondary
            title="Modern Endangered Archives Program"
            text="Our grants enable digitization and access to at-risk cultural heritage collections from around the world. Explore our projects and learn more about available grant opportunities."
            :hero-image="parsedMastheadHeroImage"
            theme="meap"
        />

        <section-wrapper
            v-if="featuredProjects"
            class="section-featured-projects"
        >
            <!-- TODO Add the divider back in when we add the searchbar -->
            <!-- <divider-way-finder
                color="about"
                class="divider-way-finder"
            /> -->
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
                :ratio="featuredProjects[0].ratio"
                prompt="View project"
            />
            <section-teaser-highlight
                :items="featuredHighlightedProjects"
            />
            <nuxt-link
                v-if="featuredHighlightedProjects.length"
                class="button-more-link"
                to="/projects"
            >
                <button-more text="Explore Projects" />
            </nuxt-link>
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
            class="section"
        >
            <simple-cards
                section-title="Program Resources"
                :items="featuredMeapResources"
            />
            <nuxt-link
                v-if="featuredMeapResources.length"
                class="button-more-link"
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
                class="button-more-link"
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
.page-home {
    .banner {
        margin-bottom: var(--space-3xl);
    }

    .button-more-link {
        margin: var(--space-xl) auto;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        max-width: fit-content;

        ::v-deep .button-more {
            display: inline-flex;
            max-width: unset;
        }
    }

    @media #{$small} {
        .section-wrapper.section-featured-projects {
            padding: 0;
        }
    }
}
</style>
