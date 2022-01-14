<template lang="html">
    <div class="impact-numbers-carousel">
        <div class="slide-indicator">
            <div 
                v-for="i in blocks"
                :key="i"
                class="bullet"
            >
                <svg-molecule-bullet class="slide" />
                <svg-molecule-radio-button class="current-slide" />
            </div>
        </div>
        <vue-glide
            per-view="1"
            :rewind="false"
        >
            <vue-glide-slide
                v-for="(block, i) in blocks"
                :key="i"
            >
                <div>
                    <img
                        :src="block.imagePath"
                        width="600"
                        height="400"
                    >
                </div>
                <div class="impact-munbers-text-container">
                    <span class="impactNumber">{{ block.largeText }}</span>
                    <span class="impactText">{{ block.mediumText }}</span>
                </div>
                <div class="smallDescriptor">
                    {{ block.smallDescriptor }}
                </div>
            </vue-glide-slide>
            <template slot="control">
                <button data-glide-dir="<">
                    <svg-arrow-right class="prev-control" />
                </button>
                <button data-glide-dir=">">
                    <svg-arrow-right />
                </button>
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
import SvgMoleculeBullet from "~/assets/svg/molecule-bullet"
import SvgMoleculeRadioButton from "~/assets/svg/molecule-radio-button"


export default {
    components: {
        [Glide.name]: Glide,
        [GlideSlide.name]: GlideSlide,
        SvgArrowRight,
        SvgMoleculeBullet,
        SvgMoleculeRadioButton,
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
}
</script>

<style lang="scss" scoped>
.impact-numbers-carousel {
    display: flex;

    .slide-indicator {
        .current-slide {
            fill: var(--color-primary-blue-03);
        }
    }


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

    .prev-control {
        transform: rotate(180deg);
    }
}
</style>