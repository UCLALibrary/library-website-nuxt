<template lang="html">
    <div class="impact-numbers-carousel">
        <div class="slide-indicator">
            <svg-icon-molecule-bullet 
                v-for="(block, index) in blocks"
                :key="index"
                :class="checkCurrentSlide(index)"
            />
        </div>
        <vue-glide
            :per-view="1"
            :rewind="false"
            @change="setCurrentSlide"
        >
            <vue-glide-slide
                v-for="(block, index) in blocks"
                :key="index"
            >
                <div class="slide-image">
                    <img
                        :src="block.imagePath"
                    >
                </div>
                <div class="impact-munbers-text-container">
                    <span class="impactNumber">{{ block.largeText }}</span>
                    <span class="impactText">{{ block.mediumText }}</span>
                </div>
                <div class="small-descriptor">
                    {{ block.smallDescriptor }}
                </div>
            </vue-glide-slide>
            <template slot="control">
                <!-- <div class="controls"> -->
                <button 
                    data-glide-dir="<"
                    :class="prevIsDisabled"
                >
                    <svg-arrow-right class="prev-control" />
                </button>
                <div class="separator"></div>
                <button
                    data-glide-dir=">"
                    :class="nextIsDisabled"
                >
                    <svg-arrow-right />
                </button>
                <!-- </div> -->
            </template>
        </vue-glide>
        <div
            role="tablist"
            class="dots"
        />
    </div>
</template>

<script>
import { Glide, GlideSlide } from 'vue-glide-js'
import 'vue-glide-js/dist/vue-glide.css'
// SVGs
import SvgArrowRight from "~/assets/svg/arrow-right"

export default {
    components: {
        [Glide.name]: Glide,
        [GlideSlide.name]: GlideSlide,
        SvgArrowRight,
        SvgIconMoleculeBullet: () =>
            import(
                "~/node_modules/ucla-library-design-tokens/assets/svgs/icon-molecule-bullet"
            ),
    },
    props: {
        /**
         * An array of blocks with the following properties: [{ largeText, 
         * mediumText, smallDescriptor, imagePath, altImageText }].
         */
        blocks: {
            type: Array,
            default: () => [],
            required: true,
        },
    },
    data() {
        return {
            currentSlide: 0,
        }
    },
    computed: {
        // returns 'disabled' if current slide is first
        prevIsDisabled() {
            return this.currentSlide === 0 ? 'disabled' : ''
        },
        // returns 'disabled' if current slide is last
        nextIsDisabled() {
            return this.currentSlide === this.blocks.length - 1 ? 'disabled' : ''
        },
    },
    methods: {
        checkCurrentSlide(index) {
            if (index === this.currentSlide) {
                return 'current-slide'
            }
        },
        setCurrentSlide(currentSlide) {
            this.currentSlide = currentSlide
        },
    }
}
</script>

<style lang="scss" scoped>
.impact-numbers-carousel {
    display: flex;
    max-width: 680px;

    .slide-indicator {
        .current-slide path.bullet-fill {
            fill: transparent;
        }
    }

    .glide {
        width: calc(100% - 32px);

        .slide-image img {
            max-height: 360px;
            max-width: 608px;
            width: 100%;
            object-fit: cover;
        }

        .impact-munbers-text-container {
            margin-left: 25px;

            .impactNumber {
                font-family: var(--font-secondary);
                font-weight: medium;
                font-size: 128px;
                line-height: 100%;
                letter-spacing: -0.02em;
                color: var(--color-primary-blue-03);
            }

            .impactText {
                font-family: var(--font-primary);
                font-weight: regular;
                font-size: 64px;
                line-height: 85%;
                letter-spacing: -0.005em;
                color: var(--color-black);
            }
        }

        .small-descriptor {
            margin-left: 25px;
            max-width: 352px;
        }
    }

    [data-glide-el="controls"] {
        button,
        .separator {
            bottom: 36px;
            position: absolute;
            // the right arrow svg has a built in 21px padding, so adding 4px
            // to the right to make 25px margin to match the left margin
            right: 48px;

            &[data-glide-dir="<"] {
                right: 104px;
            }

            &.disabled path {
                stroke: var(--color-secondary-grey-02);
            }

            path {
                stroke: var(--color-secondary-grey-04);
            }
        }

        .prev-control {
            right: 52px;
            transform: scaleX(-1);
        }

        .separator {
            border-left: dotted 1px;
            bottom: 56px;
            border-color: var(--color-secondary-grey-02);
            height: 16px;
            right: 107px;
        }
    }
}
</style>