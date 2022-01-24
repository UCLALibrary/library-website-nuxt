<template lang="html">
    <div class="page page-impact-report">
        <banner-header
            class="section banner-header"
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

// Utilities
import getS3Bucket from "~/utils/getS3Bucket"

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
                sourceUrl:
                    "https://mock-api.funkhaus.us/wp-content/uploads/2021/01/Screen-Shot-2018-04-05-at-3.43.34-PM_res-4-1-2560x1442.jpg",
                sizes: "(max-width: 2560px) 100vw, 2560px",
                srcSet: "https://mock-api.funkhaus.us/wp-content/uploads/2021/01/Screen-Shot-2018-04-05-at-3.43.34-PM_res-4-1-2560x1442.jpg 2560w, https://mock-api.funkhaus.us/wp-content/uploads/2021/01/Screen-Shot-2018-04-05-at-3.43.34-PM_res-4-1-300x169.jpg 300w, https://mock-api.funkhaus.us/wp-content/uploads/2021/01/Screen-Shot-2018-04-05-at-3.43.34-PM_res-4-1-1024x577.jpg 1024w, https://mock-api.funkhaus.us/wp-content/uploads/2021/01/Screen-Shot-2018-04-05-at-3.43.34-PM_res-4-1-768x432.jpg 768w, https://mock-api.funkhaus.us/wp-content/uploads/2021/01/Screen-Shot-2018-04-05-at-3.43.34-PM_res-4-1-1536x865.jpg 1536w, https://mock-api.funkhaus.us/wp-content/uploads/2021/01/Screen-Shot-2018-04-05-at-3.43.34-PM_res-4-1-2048x1153.jpg 2048w, https://mock-api.funkhaus.us/wp-content/uploads/2021/01/Screen-Shot-2018-04-05-at-3.43.34-PM_res-4-1-960x541.jpg 960w, https://mock-api.funkhaus.us/wp-content/uploads/2021/01/Screen-Shot-2018-04-05-at-3.43.34-PM_res-4-1-375x211.jpg 375w, https://mock-api.funkhaus.us/wp-content/uploads/2021/01/Screen-Shot-2018-04-05-at-3.43.34-PM_res-4-1-1280x721.jpg 1280w, https://mock-api.funkhaus.us/wp-content/uploads/2021/01/Screen-Shot-2018-04-05-at-3.43.34-PM_res-4-1-1920x1081.jpg 1920w",
                id: "cG9zdDo2NQ==",
                databaseId: 65,
                title: "Screen-Shot-2018-04-05-at-3.43.34-PM_res-4-1",
                altText: "",
                caption: null,
                mediaDetails: {
                    height: 1892,
                    width: 3360,
                },
                imageMeta: {
                    videoUrl: getS3Bucket(
                        this.$config,
                        "ucla-impact-report-animation.mp4"
                    ),
                    primaryColor: null,
                    focalPointX: null,
                    focalPointY: null,
                },
            }
            return video
        },
    },
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
