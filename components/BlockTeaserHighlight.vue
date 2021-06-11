<template lang="html">
    <section class="block-teaser-highlight">
        <responsive-image
            :image="item.image"
            :aspect-ratio="60"
        />
        <div class="text">
            <div class="floating-highlighlight" />
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
    max-height: 5230px;
    background-color: var(--color-white);

    .text {
        z-index: 0;
        position: relative;
        width: 456px;
        height: 255px;
        background-color: white;
        padding-bottom: 50px;

        .floating-highlighlight {
            z-index: 10;
            position: absolute;
            box-sizing: border-box;
            top: -56px;
            left: 5px;
            background-color: var(--color-fushia-01);
            width: 403px;
            height: 60px;
            clip-path: polygon(
                0 0,
                93.75% 0,
                99.5% 48px,
                98.5% 48px,
                93.25% 2.5px,
                0 2.5px
            );
        }
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
            top: -46px;
            width: 435px;
            padding: 15px 0 10px 20px;
            background-color: white;
            clip-path: polygon(0 0, 375px 0, 490px 100%, 0% 100%);
        }

        /deep/ {
            &.block-teaser-meta {
                max-width: 450px;
            }
        }
    }
}
</style>
