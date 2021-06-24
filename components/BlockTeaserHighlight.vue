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
export default {
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

    .floating-highlighlight {
        z-index: 30;
        position: absolute;
        width: 398px;
        top: -56px;
        left: 5px;
        height: 60px;
        background-color: var(--color-visit-fushia-base);
        clip-path: polygon(
            0 0,
            calc(100% - 19px) 0,
            101% 55px,
            99.5% 47px,
            calc(100% - 21px) 2.25px,
            0 2.25px
        );
    }

    .clipped-box {
        position: relative;
        z-index: 30;
        top: -46px;
        left: 0px;
        width: 415px;
        height: 50px;
        box-sizing: border-box;
        background-color: var(--color-white);
        background-color: aqua;
        clip-path: polygon(
            0 0,
            calc(100% - 39px) 0,
            100% 95px,
            100% 102%,
            0 102%
        );
    }

    .text {
        z-index: 0;
        position: relative;
        //width: 456px;
        width: 100%;
        min-height: 255px;
        background-color: white;
        margin-bottom: 85px;
    }

    .meta {
        z-index: 40;
        position: absolute;
        top: -46px;
        width: 436px;
        padding: 15px 0 10px 20px;
        background-color: var(--color-white);
        background-color: pink;
        clip-path: polygon(73% 0, 73% 20%, 100% 21%, 100% 100%, 0 100%, 0 0);
        //clip-path: polygon(0 0, 375px 0, 476px 100%, 0% 100%);
    }

    // Breakpoints
    @media #{$lte-phone} {
        .floating-highlighlight {
            width: 313px;
            top: -56px;
            left: 5px;
            height: 60px;
            background-color: var(--color-visit-fushia-base);
            clip-path: polygon(
                0 0,
                calc(100% - 19px) 0,
                100% 48px,
                99.25% 48px,
                calc(100% - 21.5px) 2.25px,
                0 2.25px
            );
        }

        .clipped-box {
            width: 330px;
            //background-color: var(--color-white);
            box-sizing: border-box;
            position: relative;
            z-index: 30;
            top: -46px;
            left: 0px;
            height: 50px;

            clip-path: polygon(
                0 0,
                calc(100% - 39px) 0,
                100% 95px,
                100% 102%,
                0 102%
            );
        }
        .text {
            width: 325px;
            min-height: 255px;
            margin-bottom: 25px;
        }
        .meta {
            z-index: 40;
            position: absolute;
            top: -46px;
            width: 225px;
            padding: 15px 0 10px 20px;
            clip-path: polygon(0 0, 375px 0, 490px 100%, 0% 100%);
        }
    }
}
</style>
