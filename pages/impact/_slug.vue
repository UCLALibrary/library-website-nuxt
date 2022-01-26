<template lang="html">
    <div class="page page-impact-report">
        <div v-html="parsedMainStory" />
        <banner-header
            class="banner-header"
            :title="bannerHeader.title"
            :video="parseVideo"
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
                :images="parsedMainStoryImages"
                class="rich-text"
            />

            <story-with-image
                v-for="(item, index) in parsedStories"
                :key="item.index"
                :image="item.photo"
                :caption="item.photo.caption"
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
import * as MOCK_IMPACT_API from "~/data/impact_slug_page.json"

// Utilities
import getS3Bucket from "~/utils/getS3Bucket"
import updateImageData from "~/utils/updateImageData"

export default {
    layout: "impact",
    data() {
        return {
            stories: MOCK_IMPACT_API.story,
            bannerHeader: MOCK_IMPACT_API.bannerHeader,
            mainStory: MOCK_IMPACT_API.mainStory,
        }
    },
    computed: {
        parseVideo() {
            let video = {
                videoUrl: getS3Bucket(
                    this.$config,
                    "ucla-impact-report-animation.mp4"
                ),
            }
            return video
        },
        parsedStories() {
            const stories = MOCK_IMPACT_API.story
            return this.stories.map((obj) => {
                return {
                    ...obj,
                    photo: {
                        src: getS3Bucket(this.$config, obj.image.src),
                        sizes: "100vw",
                        height: 1080,
                        width: 1920,
                        alt: obj.image.alt,
                        caption: obj.image.caption,
                    },
                }
            })
        },
        parsedMainStoryImages() {
            const mainStory = MOCK_IMPACT_API.mainStory
            return this.mainStory.images.map((obj) => {
                return {
                    src: getS3Bucket(this.$config, obj.src),
                    sizes: "100vw",
                    height: 1080,
                    width: 1920,
                    alt: obj.alt,
                    caption: obj.caption,
                }
            })
        },
    },
}
</script>

<style lang="scss" scoped>
.page .section {
    margin-top: 1px;

    .page-impact-report-home {
        margin: 0 0 0 0;
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
}
</style>
