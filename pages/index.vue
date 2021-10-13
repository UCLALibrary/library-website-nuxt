<template lang="html">
    <div class="page page-home">
        <masthead-primary />
        <divider-way-finder
            class="divider divider-first"
            color="help"
        />
        <section-cards
            class="section"
            :items="parsedSectionCards"
            title="Get Help with"
            text="Need guidance on how to make the most of UCLA Libraries? Below are common areas for which we offer services, resources, workshops and more."
            to="/help/foo/bar"
        />
        <divider-way-finder
            class="divider"
            color="visit"
        />

        <banner-featured
            class="section banner banner-visit"
            :image="bannerVisit.image"
            :to="bannerVisit.to"
            :title="bannerVisit.title"
            :category="bannerVisit.category"
            :breadcrumb="bannerVisit.breadcrumb"
            :start-date="bannerVisit.startDate"
            :end-date="bannerVisit.endDate"
            :is-online="bannerVisit.isOnline"
            :prompt="bannerVisit.prompt"
            :ratio="bannerVisit.ratio"
            :align-right="false"
        >
            <heading-arrow
                :text="bannerVisit.breadcrumb"
                :to="bannerVisit.to"
            />
        </banner-featured>

        <section-dual-masonry
            class="section"
            :items="page.sectionDualMasonry"
            to="/visit/foo"
        />
        <divider-way-finder
            class="divider"
            color="about"
        />

        <banner-featured
            class="banner banner-about"
            :image="bannerAbout.image"
            :to="bannerAbout.to"
            :title="bannerAbout.title"
            :category="bannerAbout.category"
            :breadcrumb="bannerAbout.breadcrumb"
            :start-date="bannerVisit.startDate"
            :end-date="bannerVisit.endDate"
            :is-online="bannerAbout.isOnline"
            :prompt="bannerAbout.prompt"
            :ratio="bannerAbout.ratio"
        >
            <heading-arrow
                :text="bannerAbout.breadcrumb"
                :to="bannerAbout.to"
            />
        </banner-featured>
        <divider-general class="divider" />
        <section-post-small
            class="section"
            :items="page.posts"
            to="/news/"
        />
    </div>
</template>

<script>
import * as MOCK_API from "~/stories/mock-api.json"

export default {
    components: {},
    async asyncData() {
        //const data = await this.$graphql(QUERY);

        const mockCard = {
            to: "/help/foo/bar/",
            title: "Example Service",
            text: "Here is a decent amount of text to explain this get help with.",
        }
        const sectionCardsData = {
            items: [
                { ...mockCard },
                { ...mockCard, to: "/about/foo/bar" },
                { ...mockCard, to: "/help/foo/baz" },
                { ...mockCard, to: "/visit/foo/bar" },
                { ...mockCard, to: "/help/foo/fred/" },
            ],
            title: "Get Help with",
            text: "Need guidance on how to make the most of UCLA Libraries? Below are common areas for which we offer services, resources, workshops and more.",
            to: "/help/foo/bar",
        }

        const sectionDualMasonry = MOCK_API.bricks

        const posts = [
            {
                ...MOCK_API.article,
                image: MOCK_API.image,
            },
            {
                ...MOCK_API.article,
                image: MOCK_API.image,
                to: "/about/foo/bar",
            },
            {
                ...MOCK_API.article,
                image: MOCK_API.image,
                to: "/help/foo/bar",
            },
        ]

        const banner = {
            image: MOCK_API.image,
            to: "/help/foo/bar/",
            title: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
            category: "Quisque",
            breadcrumb: "Lorem ipsum dolor sit amet",
            startDate: "1995-12-17T03:24:00",
            endDate: "1995-12-17T03:24:00",
            isOnline: true,
            prompt: "Read More",
            alignRight: true,
        }

        const data = {
            sectionCardsData: sectionCardsData,
            sectionDualMasonry: sectionDualMasonry,
            posts: posts,
            banner,
        }

        return {
            page: data,
        }
    },
    computed: {
        parsedSectionCards() {
            return this.page.sectionCardsData.items.map((obj, i) => {
                switch (i) {
                    case 0:
                        obj.iconName = "illustration-digitized-resources"
                        break
                    case 1:
                        obj.iconName = "illustration-find-space"
                        break
                }
                return {
                    ...obj,
                }
            })
        },
        bannerVisit() {
            return {
                ...this.page.banner,
                ratio: 56.25,
            }
        },
        bannerAbout() {
            return {
                ...this.page.banner,
                ratio: 40,
                alignRight: false,
            }
        },
    },
}
</script>
<style lang="scss" scoped>
.page-home {
    .banner {
        margin: var(--unit-vertical-gap) auto;
    }
}
</style>
