<template lang="html">
    <div class="page page-impact-report">
        <div class="meta">
            <h2 class="intro">
                2020-2021 UCLA Library Impact Report
            </h2>
            <p class="text">
                As we close out the year, it’s worth reflecting on what we have accomplished as a Library community. When a pandemic scattered most of our faculty and students across the country and globe, we quickly adapted traditional in-person services for remote learning. This pivot made it possible for Bruins to access the materials, workshops, and research advice they needed, wherever they were. Our return to campus brings new priorities, and here is what we are focusing on in 2022: increasing opportunities for teaching with rare and unique materials, building capacity to recruit librarians who are experts in their field, and amplifying access to and safekeeping of digitally stored materials.
            </p>
            <p class="attribution">
                – Virginia Steel, Norman and Armena Powell University Librarian
            </p>
        </div>

        <h2>Banner Featured</h2>
        <banner-featured
            class="section banner-featured"
            :title="impactBannerFeatured.title"
            :category="impactBannerFeatured.category"
            :image="impactBannerFeatured.image"
            :to="impactBannerFeatured.to"
            prompt="View exhibit"
            :align-right="true"
        />

        <section-teaser-card
            class="teaser-card"
            :items="sectionTeaserCard.items"
        />

        <!-- <divider-way-finder
            color="about"
        /> -->

        <block-call-to-action
            class="section block-call-to-action"
            svg-name="svg-call-to-action-find"
            :to="blockCallToAction.to"
            :name="blockCallToAction.name"
            :title="blockCallToAction.title"
            :text="blockCallToAction.text"
        />
    </div>
</template>

<script>
import * as API from "~/stories/mock-api.json"
// import * as API from "~/stories/impact-report.json"

export default {
    layout: 'impact',

    computed: {
        //TODO remove once we have real data from Craft
        impactBannerFeatured() {
            const mockBannerFeatured = {
                image: API.image,
                to: "/help/foo/bar/",
                title: "Curabitur Tortor Pellentesque Nibh Aenean",
                alignRight: true,
            }
            return mockBannerFeatured
        },
        sectionTeaserCard() {
            const mockTeaserCard = [
                {
                    image: API.image,
                    to: "/visit/foo/bar/",
                    title: "Virtual Screening Room attracts new audiences during covid"
                },
                {
                    image: API.image,
                    to: "/visit/foo/baz/",
                    title: "Faculty partnership results in affordable course materials for Chicano/Chicana Studies students"
                },
                {
                    image: API.image,
                    to: "/visit/foo/bat/",
                    title: "UC Library Search: Many UC libraries, one unified discovery tool",
                }
            ]
            return { items: mockTeaserCard }
        },

        blockCallToAction() {
            const mockBlockCallToAction = {
                to: "/help/foo/bar/",
                name: "[Label]",
                title: "Call to Action",
                text: "[Byline] Descriptive copy",
            }
            return mockBlockCallToAction
        },
    },
    // This will recall fetch() when these query params change
    watchQuery: ["offset", "q"],
}
</script>

<style lang="scss" scoped>
.page-impact-report {
    .meta {
        margin: var(--unit-gutter);
        .intro {
            font-size: 84px;
            font-weight: 300;
            line-height: 84px;
            color: var(--color-primary-blue-03);
        }
        .text {
            font-size: 48px;
            line-height: 57px;
        }
        .attribution {
            font-size: 48px;
            line-height: 57px;
        }
    }
    .section-teaser-card {
        margin: 0 auto;
    }
    .divider {
        margin: 0 auto;
    }
     .block-call-to-action {
    }
}

</style>
