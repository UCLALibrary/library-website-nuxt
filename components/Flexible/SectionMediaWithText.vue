<template lang="html">
    <div class="media-with-text">
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
                :is-audio="item.isAudio"
                :is-video="item.isVideo"
            />
            <divider-general />
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
            console.log(this.block.mediaWithText)
            const mediaWithText = this.block.mediaWithText
            return mediaWithText.map((obj) => {
                console.log(obj)
                return {
                    ...obj,
                    // classes: output,
                    //video and audio computed
                    //vertcical computed?
                }
            })
        },
    },
}
</script>

<style lang="scss" scoped>
.section-media-with-text {
    display: flex;
    flex-direction: column;
    // flex-wrap: nowrap;
    // align-content: center;
    // align-items: center;

    max-width: $content-width-06 + px;
}
</style>
