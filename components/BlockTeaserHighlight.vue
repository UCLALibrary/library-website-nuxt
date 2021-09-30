<template lang="html">
    <section class="block-teaser-highlight">
        <responsive-image
            :image="image"
            :aspect-ratio="60"
            class="image"
        />
        <div class="text">
            <div class="clipped">
                <div class="floating-highlighlight" />
                <div class="clipped-box" />
            </div>
            <block-teaser-meta
                :to="to"
                :category="category"
                :title="title"
                :date="date"
                :time="time"
                :text="text"
                view="highlight"
                class="meta"
            />
        </div>
    </section>
</template>

<script>
export default {
    props: {
        image: {
            type: Object,
            default: () => {},
        },
        to: {
            type: String,
            default: "",
        },
        category: {
            type: String,
            default: "",
        },
        title: {
            type: String,
            default: "",
        },
        date: {
            type: String,
            default: "",
        },
        time: {
            type: String,
            default: "",
        },
        text: {
            type: String,
            default: "",
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
    margin-left: 5px;
    margin-right: 5px;

    .clipped {
        width: 456px;
        height: 60px;
        position: relative;

        .floating-highlighlight {
            z-index: 30;
            position: absolute;
            width: 398px;
            top: -57px;
            left: 5px;
            height: 60px;
            background-color: var(--color-visit-fushia-03);
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
            position: absolute;
            z-index: 30;
            top: -46px;
            left: 0px;
            width: 415px;
            height: 50px;
            box-sizing: border-box;
            background-color: var(--color-white);
            clip-path: polygon(
                0 0,
                calc(100% - 39px) 0,
                100% 95px,
                100% 102%,
                0 102%
            );
        }
    }

    .text {
        z-index: 0;
        position: relative;
        width: 100%;
        min-height: 255px;
        background-color: white;
    }

    .meta {
        z-index: 40;
        position: absolute;
        top: -27px;
        width: 436px;
        padding: 0px 0 10px 20px;
        background-color: var(--color-white);
        clip-path: polygon(73% 0, 73% 19%, 100% 19%, 100% 100%, 0 100%, 0 0);
    }

    // Breakpoints
    @media #{$lte-phone} {
        .clipped {
            width: 456px;
            height: 30px;
            position: relative;

            .floating-highlighlight {
                z-index: 30;
                position: absolute;
                width: 285px;
                top: -40px;
                left: 5px;
                height: 30px;
                background-color: var(--color-visit-fushia-03);
                clip-path: polygon(
                    0 0,
                    calc(100% - 19px) 0,
                    101% 53px,
                    99.5% 49px,
                    calc(100% - 21px) 2.25px,
                    0 2.25px
                );
            }

            .clipped-box {
                position: absolute;
                z-index: 30;
                top: -30px;
                left: 0px;
                width: 300px;
                height: 30px;
                box-sizing: border-box;
                background-color: var(--color-white);
                clip-path: polygon(
                    0 0,
                    calc(100% - 39px) 0,
                    100% 95px,
                    100% 102%,
                    0 102%
                );
            }
        }

        .text {
            width: 325px;
            min-height: 255px;
        }
        .meta {
            z-index: 40;
            position: absolute;
            top: -30px;
            width: 225px;
            padding: 15px 0 10px 20px;
            clip-path: polygon(0 0, 375px 0, 490px 100%, 0% 100%);
        }
    }
}
</style>
