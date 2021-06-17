<template lang="html">
    <section class="block-teaser-highlight">
        <responsive-image
            :image="item.image"
            :aspect-ratio="60"
        />
        <div class="text">
            <div class="floating-highlighlight" />
            <div class="clipped-box" />
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
    background-color: var(--color-white);

    .text {
        z-index: 0;
        position: relative;
        width: 456px;
        min-height: 255px;
        background-color: white;
        margin-bottom: 85px;

        .floating-highlighlight {
            z-index: 10;
            position: absolute;
            box-sizing: border-box;
            top: -56px;
            left: 5px;
            width: 403px;
            height: 60px;
            background-color: var(--color-visit-fushia-base);
            clip-path: polygon(
                0 0,
                93.5% 0,
                99% 48px,
                98.5% 48px,
                93.25% 2px,
                0 2px
            );
        }

        .clipped-box {
            z-index: 20;
            position: absolute;
            width: 436px;
            height: 50px;
            top: -46px;
            width: 450px;
            box-sizing: border-box;
            background-color: var(--color-white);
            clip-path: polygon(0 0, 375px 0, 397px 100%, 0% 100%);
        }

        .meta {
            z-index: 30;
            position: absolute;
            top: -46px;
            width: 436px;
            padding: 15px 0 10px 20px;
            background-color: var(--color-white);
            clip-path: polygon(0 0, 375px 0, 490px 100%, 0% 100%);
        }
    }

    // Breakpoints
    @media #{$lte-tablet} {
        width: 100%;
    }
    @media #{$lte-phone} {
        width: 100%;
    }
}
</style>
