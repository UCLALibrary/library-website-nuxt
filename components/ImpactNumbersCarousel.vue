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
                <button data-glide-dir="<">
                    <svg-arrow-right class="prev-control" />
                </button>
                <button data-glide-dir=">">
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

    .slide-indicator {
        .current-slide path.bullet-fill {
            fill: transparent;
        }
    }

    .glide {
        width: calc(100% - 32px);

        .slide-image img {
            width: 100%;
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
        button {
            position: absolute;
            right: 0;
            bottom: 60px;

            &[data-glide-dir="<"] {
                right: 40px;
            }
        }

        .prev-control {
            transform: scaleX(-1);
        }
    }
}
</style>