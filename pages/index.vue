<template lang="html">
    <div class="page page-home">
        <divider-way-finder color="help" />
        <section-cards
            :items="parsedSectionCards"
            title="Get Help with"
            text="Need guidance on how to make the most of UCLA Libraries? Below are common areas for which we offer services, resources, workshops and more."
            to="/help/foo/bar"
        />
        <divider-way-finder color="visit" />
        <section-dual-masonry
            :items="page.sectionDualMasonry"
            to="/visit/foo"
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

        const data = {
            sectionCardsData: sectionCardsData,
            sectionDualMasonry: sectionDualMasonry,
        }

        return {
            page: data,
        }
    },
    computed: {
        parsedSectionCards() {
            return this.page.sectionCardsData.items.map((obj, i) => {
                if (i == 0) {
                    obj.iconName = "illustration-find-space"
                }
                if (i == 1) {
                    obj.iconName = "illustration-digitized-resources"
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
    .divider-way-finder {
        padding-top: 83px;
        margin: 0 auto;
        max-width: 980px;
    }
    .section-cards {
        padding-top: 75px;
    }
}
</style>
