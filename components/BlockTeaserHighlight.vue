<template lang="html">
    <section class="block-teaser-highlight">
        <responsive-image
            :image="item.image"
            :aspect-ratio="60"
            class="image"
        />
        <div class="text">
            <svg-clipped-box class="clipped-box" />
            <block-teaser-meta
                v-bind="item"
                view="highlight"
                class="meta"
            />
        </div>
    </section>
</template>

<script>
import SvgClippedBox from "~/assets/svg/clipped-box"

export default {
    components: {
        SvgClippedBox,
    },
    props: {
        item: {
            type: Object,
            default: () => {},
        },
    },
}
</script>

<style lang="scss" scoped>
.block-teaser-highlight {
    display: block;
    overflow: hidden;
    max-width: 456px;
    max-height: 529px;
    background-color: var(--color-white);
    .image {
    }
    .text {
        z-index: 0;
        position: relative;
        width: 456px;
        height: 255px;
        //margin-top: 16px;
        background-color: white;

        .clipped-box {
            z-index: 10;
            position: absolute;
            box-sizing: border-box;
            top: -50px;
            width: 450px;
        }

        .meta {
            z-index: 20;
            position: absolute;
            top: -40px;
            width: 435px;
            padding: 15px 22px 10px 35px;
            background-color: white;
            clip-path: polygon(0 0, 375px 0, 100% 100%, 0% 100%);
        }
        /deep/ {
            &.block-teaser-meta {
                max-width: 450px;
            }
        }
    }
}
</style>
