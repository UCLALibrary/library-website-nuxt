<template lang="html">
    <div class="page page-impact-report">
        <banner-header
            class="section banner-header"
            :title="bannerHeader.title"
            :image="bannerHeader.image"
            :video="bannerHeader.video"
            :to="bannerHeader.to"
            :align-right="true"
        />
        <div class="meta">
            <divider-way-finder
                color="about"
                class="divider"
            />

            <!-- <rich-text
                :text-blocks="textBlocks"
                :pull-quote="pullQuote"
                :image="image"
                :caption="caption"
            /> -->

            <story-with-image
                v-for="item in stories"
                :key="item.title"
                :image="item.image"
                :caption="item.image.caption"
                :title="item.title"
                :text="item.text"
                :footnote="item.footnote"
                :calltoaction="item.calltoaction"
            />
        </div>
    </div>
</template>

<script>
// TODO replace this file with actual json data from google sheet
import * as MOCK_IMPACT_API from "~/stories/impact-report.json"

export default {
    layout: "impact",

    async asyncData() {
        const stories = [
            MOCK_IMPACT_API.story[0],
            MOCK_IMPACT_API.story[0],
            MOCK_IMPACT_API.story[0],
        ]
        console.log(stories)
        const bannerHeader = MOCK_IMPACT_API.bannerHeader
        return { stories, bannerHeader }
    },

    computed: {},
}
</script>

<style lang="scss" scoped>
.page-impact-report-home {
    .divider {
        margin: 0 auto;
        padding-bottom: 30px;
    }
}
</style>
