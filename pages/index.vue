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
        <section-dual-masonry
            class="section"
            :items="page.sectionDualMasonry"
            to="/visit/foo"
        />
        <divider-way-finder
            class="divider"
            color="about"
        />
        <p class="section">
            TO DO
        </p>
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
            text:
                "Here is a decent amount of text to explain this get help with.",
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
            text:
                "Need guidance on how to make the most of UCLA Libraries? Below are common areas for which we offer services, resources, workshops and more.",
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

        const data = {
            sectionCardsData: sectionCardsData,
            sectionDualMasonry: sectionDualMasonry,
            posts: posts,
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
    },
}
</script>
<style lang="scss" scoped>
.page-home {
}
</style>
