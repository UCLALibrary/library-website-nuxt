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

            <rich-text
                :text-blocks="mainStory.textBlocks"
                :pull-quote="mainStory.pullQuote"
                :image="mainStory.image"
                :caption="mainStory.caption"
                class="rich-text"
            />

            <story-with-image
                v-for="(item, index) in stories"
                :key="item.index"
                :image="item.image"
                :caption="item.image.caption"
                :title="item.title"
                :text="item.text"
                :footnote="item.footnote"
                :calltoaction="item.calltoaction"
                class="story"
            />
        </div>
    </div>
</template>

<script>
// TODO replace this file with actual json data from google sheet
import * as MOCK_IMPACT_API from "~/data/mock-impact-report.json"

export default {
    layout: "impact",
    data() {
        return {
            stories: MOCK_IMPACT_API.story,
            bannerHeader: MOCK_IMPACT_API.bannerHeader,
            mainStory: MOCK_IMPACT_API.mainStory,
        }
    },
    computed: {},
}
</script>

<style lang="scss" scoped>
.page-impact-report-home {
    .rich-text {
        margin: var(--unit-gutter) auto;
    }
    .divider {
        margin: 0 auto;
        padding-bottom: 30px;
    }
    .story {
    }
}
</style>
