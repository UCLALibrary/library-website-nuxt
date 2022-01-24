<template lang="html">
    <div class="page page-impact-report">
        <div class="meta">
            <h2 class="intro">
                2020-2021 UCLA Library Impact Report
            </h2>
            <p class="text">
                As we close out the year, it’s worth reflecting on what we have
                accomplished as a Library community. When a pandemic scattered
                most of our faculty and students across the country and globe,
                we quickly adapted traditional in-person services for remote
                learning. This pivot made it possible for Bruins to access the
                materials, workshops, and research advice they needed, wherever
                they were. Our return to campus brings new priorities, and here
                is what we are focusing on in 2022: increasing opportunities for
                teaching with rare and unique materials, building capacity to
                recruit librarians who are experts in their field, and
                amplifying access to and safekeeping of digitally stored
                materials.
            </p>
            <p class="attribution">
                - Virginia Steel, Norman and Armena Powell University Librarian
            </p>
        </div>

        <banner-featured
            class="banner-featured"
            :title="impactBannerFeatured.title"
            :description="impactBannerFeatured.description"
            :category="impactBannerFeatured.category"
            :image="impactBannerFeatured.image"
            :to="impactBannerFeatured.to"
            prompt="View exhibit"
            :ratio="42"
            :align-right="true"
        />

        <div class="section-grid">
            <section-teaser-card
                class="teaser-card"
                :items="sectionTeaserCard.items"
            />

            <divider-way-finder
                class="divider"
                color="about"
            />

            <h2 class="grid-gallery-title">
                2020-21: An Academic Year Like No Other
            </h2>

            <h3 class="grid-gallery-subtitle">
                The Great Pivot: March - October 2020
            </h3>

            <grid-gallery
                v-for="key in Object.keys(timelineSortedByMonth)"
                :key="key"
                :month-year="key"
                :items="timelineSortedByMonth[key]"
                class="grid-gallery"
            />
        </div>
        <p class="credits">
            <a href="">Thank you to UCLA Library Staff</a> credit lines, Lorem
            ipsum dolor sit amet odio maximus quis posuere vivamus dapibus
            etiam. Consectetur luctus elementum tempor lacinia nascetur
            tristique orci est vehicula interdum. Vehicula non hendrerit orci
            justo urna lacinia quam lectus taciti. Enim eros dis felis ipsum
            malesuada posuere sollicitudin. Habitasse proin purus montes lorem
            cursus iaculis lacinia et. Elementum consectetuer aptent parturient
            nostra hendrerit sapien imperdiet vel.
        </p>

        <divider-way-finder
            class="divider"
            color="about"
        />
    </div>
</template>

<script>
import * as API from "~/stories/mock-api.json"
import _ from "lodash"
import * as IMPACT_API from "~/data/impact-report.json"

export default {
    components: {},
    layout: "impact",
    async asyncData() {
        const timelineGallery = IMPACT_API.timelineGallery

        const data = {
            timelineGallery: timelineGallery,
        }

        return {
            page: data,
        }
    },
    computed: {
        timelineSortedByMonth() {
            const parsedTimeline = _.groupBy(
                this.page.timelineGallery,
                (month) => month.monthYear
            )
            return parsedTimeline
        },
        impactBannerFeatured() {
            const mockBannerFeatured = {
                image: IMPACT_API.image,
                to: "/help/foo/bar/",
                title: "Curabitur Tortor Pellentesque Nibh Aenean",
                description:
                    "After Covid triggered a campus closure, UCLA Library reimagined its services for students and faculty scattered across the country and globe",
                alignRight: true,
            }
            return mockBannerFeatured
        },

        sectionTeaserCard() {
            const mockTeaserCard = [
                {
                    image: IMPACT_API.image,
                    to: "/visit/foo/bar/",
                    title: "Virtual Screening Room attracts new audiences during covid",
                },
                {
                    image: IMPACT_API.image,
                    to: "/visit/foo/baz/",
                    title: "Faculty partnership results in affordable course materials for Chicano/Chicana Studies students",
                },
                {
                    image: IMPACT_API.image,
                    to: "/visit/foo/bat/",
                    title: "UC Library Search: Many UC libraries, one unified discovery tool",
                },
            ]
            return { items: mockTeaserCard }
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
            font-size: 47px;
            line-height: 56px;
        }
        .attribution {
            font-size: 48px;
            line-height: 57px;
        }
    }

    .section-grid {
        .grid-gallery-title {
            margin: var(--unit-gutter) var(--unit-gutter) 24px
                var(--unit-gutter);
            color: var(--color-primary-blue-03);
            font-size: 48px;
            line-height: 56px;
        }
        .grid-gallery-subtitle {
            margin: 0 var(--unit-gutter) 0 var(--unit-gutter);
            color: var(--color-primary-blue-03);
            font-size: 35.538px;
            line-height: 43px;
        }
        .grid-gallery {
            margin: 0 auto;
        }
    }

    .teaser-card {
        margin: 0 auto;
    }

    .block-call-to-action {
    }

    .credits {
        margin: var(--unit-gutter);
        font-style: italic;
        font-weight: normal;
        font-size: 16px;
        line-height: 26px;
    }
}
.page .section {
    margin-top: 0px;
}
</style>
