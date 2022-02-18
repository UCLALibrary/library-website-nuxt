<template lang="html">
    <div class="section-media-with-text">
        <div
            v-for="(item, index) in parsedContent"
            :key="index"
            class="meta"
        >
            <flexible-media-with-text
                :section-header="item.sectionHeader"
                :short-description="item.shortDescription"
                :image="item.image"
                :button-text="item.buttonText"
                :to="item.to"
                :is-audio="item.parsedIsAudio"
                :is-video="item.parsedIsVideo"
                :is-vertical="item.parsedIsVertical"
                class="flexible-media-with-text"
            />
            <divider-general class="divider" />
        </div>
    </div>
</template>

<script>
export default {
    props: {
        block: {
            type: Object,
            default: () => {},
        },
    },
    computed: {
        parsedContent() {
            const mediaWithText = this.block.mediaWithText

            return mediaWithText.map((obj) => {
                return {
                    ...obj,
                    parsedIsVideo: obj.mediaType == "video" ? true : false,
                    parsedIsAudio: obj.mediaType == "audio" ? true : false,
                    parsedIsVertical: obj.verticalImage == "yes" ? true : false,
                }
            })
        },
    },
    isVideo() {},
}
</script>

<style lang="scss" scoped>
.section-media-with-text {
    // display: flex;
    // flex-direction: column;
    // flex-wrap: nowrap;
    // align-content: center;
    // align-items: center;
    // justify-content: center;

    max-width: $content-width-06 + px;

    .meta {
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        align-content: center;
        align-items: center;
        justify-content: center;
    }

    .flexible-media-with-text {
        margin-bottom: 56px;
    }
    .divider {
        width: 100%;
        margin-bottom: 56px;
    }
}
</style>
