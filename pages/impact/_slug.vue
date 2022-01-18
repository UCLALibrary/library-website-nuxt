<template lang="html">
    <div class="page page-impact-report">
        <banner-featured
            class="section banner-featured"
            :title="title"
            :category="category"
            :image="firstEvent.image"
            :to="firstEvent.to"
            prompt="View exhibit"
            :align-right="false"
        />
        <div class="meta">
            <h2 class="intro">
                After Covid triggered a campus closure, UCLA Library reimagined 
            </h2>

            <divider-way-finder color="about" />

            <rich-text
                :text-blocks="textBlocks"
                :pull-quote="pullQuote"
                :image="image"
                :caption="caption"
            />

            <story-with-image
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
import * as API from "~/stories/mock-api.json"

export default {
    layout: 'impact',

    computed: {

    }
}
</script>

<style lang="scss" scoped>
.page-impact-report-home {
    .opening {
        margin: var(--unit-gutter);
        .intro {
            font-size: 84px;
            font-weight: 300;
            line-height: 84px;
            color: var(--color-primary-blue-03);
        }
        .text {
            font-size: 48px;
            line-height: 57px;
        }
        .attribution {
            font-size: 48px;
            line-height: 57px;
        }
    }
    .divider {
        margin: 0 auto;
    }
}

</style>
