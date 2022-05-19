<template>
    <div class="lightbox">
        <button
            class="button-close"
            @click="$emit('closeModal')"
        >
            <svg-icon-close />
        </button>
        <vue-glide
            ref="slider"
            :active="selectionIndex"
            :per-view="1"
            :rewind="false"
            class="media-container"
            type="carousel"
            style="height: 100%"
            @change="setCurrentSlide"
        >
            <vue-glide-slide
                v-for="(img, index) in images"
                :key="index"
                style="height: 100%"
            >
                <responsive-image
                    :key="index"
                    object-fit="contain"
                    :image="img"
                    class="vue-glide-slide"
                />
            </vue-glide-slide>
            <template
                slot="control"
            >
                <button
                    v-if="nItems > 1"
                    class="button-prev"
                    :disabled="selectionIndex <= 0"
                    data-glide-dir="<"
                >
                    <svg-icon-caret-left />
                </button>
                <button
                    v-if="nItems > 1"
                    class="button-next"
                    :disabled="selectionIndex >= nItems - 1"
                    data-glide-dir=">"
                >
                    <svg-icon-caret-right />
                </button>
            </template>
        </vue-glide>
        <div class="caption-block">
            <div
                class="media-counter" 
                role="tablist"
            >
                <button
                    v-for="index in nItems"
                    :key="index"
                    class="media-counter-item"
                    :disabled="index - 1 == selectionIndex"
                    @click="setCurrentSlide(index - 1)"
                >
                    <svg-icon-molecule-bullet
                        width="12px"
                        height="12px"
                        viewBox="8 8 16 16"
                    />
                </button>
            </div>
            <h4
                class="media-object-title"
                v-text="images[selectionIndex].title"
            />
            <p
                class="media-object-caption"
                v-text="images[selectionIndex].alt"
            />
        </div>
    </div>
</template>

<script>
import { Glide, GlideSlide } from 'vue-glide-js'
import 'vue-glide-js/dist/vue-glide.css'

export default {
    components: {
        [Glide.name]: Glide,
        [GlideSlide.name]: GlideSlide,
        SvgIconCaretLeft: () =>
            import(
                "~/node_modules/ucla-library-design-tokens/assets/svgs/icon-caret-left"
            ),
        SvgIconCaretRight: () =>
            import(
                "~/node_modules/ucla-library-design-tokens/assets/svgs/icon-caret-right"
            ),
        SvgIconClose: () =>
            import(
                "~/node_modules/ucla-library-design-tokens/assets/svgs/icon-close"
            ),
        SvgIconMoleculeBullet: () =>
            import(
                "~/node_modules/ucla-library-design-tokens/assets/svgs/icon-molecule-bullet"
            ),
    },
    props: {
        block: {
            type: Array,
            default: () => [],
            required: true,
        },
        nItems: {
            type: Number,
            default: 0,
        }
    },
    data() {
        return {
            selectionIndex: 1,
        }
    },
    computed: {
        images() {
            return this.block.map((item) => item.image[0])
        }
    },
    methods: {
        clickPrev() {
            if (this.selectionIndex > 0) {
                this.selectionIndex -= 1
            }
        },
        clickNext() {
            if (this.selectionIndex + 1 < this.nItems) {
                this.selectionIndex += 1
            }
        },
        checkCurrentSlide(index) {
            if (index === this.currentSlide) {
                return 'current-slide'
            }
        },
        setCurrentSlide(currentSlide) {
            this.selectionIndex = currentSlide
        },
    }
}
</script>

<style lang="scss" scoped>
.lightbox {
    position: fixed;
    top:0;
    left:0;
    height: 100%;
    width: 100%;
    overflow-y: auto;
    overscroll-behavior: contain;

    --side-column-min-width: 48px;
    --gap-width: var(--space-l);
    --media-width: min(
        calc(100vw - 2 * var(--side-column-min-width) - 2 * var(--gap-width)),
        992px
    );
    --media-height: calc(var(--media-width) * 9 / 16);
    --side-column-width: calc((100vw - var(--media-width) - 2 * var(--gap-width)) / 2);

    background: var(--color-primary-blue-05);
    z-index: 800;

    display: grid;
    grid-template-columns:
        [left-col] var(--side-column-width)
        [middle-col] var(--media-width)
        [right-col] var(--side-column-width);
    grid-template-rows:
        [top-row] var(--side-column-min-width) 
        [middle-row] var(--media-height)
        [bottom-row] 1fr;
    grid-gap: var(--gap-width);

    .media-container {
        position: relative;
        grid-row: middle-row / span 1;
        grid-column: middle-col / span 1;

        width: var(--media-width);
        // height: var(--media-height);
        height: 100%;
    }

    // Override colors of all the SVG icons
    svg {
        circle {
            fill: none;
        }

        path {
            stroke: white;
        }
    }

    @media #{$has-hover} {
        button:enabled {
            &:hover {
            svg {
                    path {
                        stroke-width: 3px;
                    }
                }
            }
        }

        button:disabled {
            cursor: default;
        }
    }

    button:disabled {
        svg {
            path {
                stroke: var(--color-secondary-grey-03);
            }
        }
    }

    ::v-deep .responsive-image {
        height: var(--media-height);
    }
    
    @media #{$medium} {
        grid-template-rows:
        [top-row] 1fr
        [middle-row] 2fr
        [bottom-row] 1fr;

        ::v-deep .responsive-image {
            // height: calc(var(--media-height) * 1.5);
            min-height: 100%;
        }

    }
        
    @media #{$small} {
        grid-template-rows:
        [top-row] 1fr
        [middle-row] 2fr
        [bottom-row] 1fr;

        ::v-deep .responsive-image {
            // height: calc(var(--media-height) * 1.5);
            min-height: 100%;
            .glide__track {
                height: 100%;
            }
        }

    }

    .controls {
        width: 110%;
        display: flex;
        justify-content: space-between;
        position: absolute;
        top: 250px;
        left: -50px;
    }

    .button-close {
        grid-row: top-row / span 1;
        grid-column: right-col / span 1;
        justify-self: start;
        align-self: end;
    }
    --media-height-half: calc(var(--media-height) / 2);

    .button-prev {
        // grid-row: middle-row / span 1;
        // grid-column: left-col / span 1;
        position: absolute;
        // top: 279px;
        top: var(--media-height-half);
        left: -40px;
        justify-self: end;
        align-self: center;
        color: white;
    }

    .button-next {
        // grid-row: middle-row / span 1;
        // grid-column: right-col / span 1;
        position: absolute;
        top: var(--media-height-half);
        right: -40px;
        justify-self: start;
        align-self: center;
        color: white;
    }

    .caption-block {
        color: var(--color-white);
        grid-row: bottom-row;
        grid-column: middle-col;

        .media-counter {
            display: flex;
            flex-direction: row;
            width: 100%;
            justify-content: center;
            margin-top: 0px;
            margin-bottom: 24px;

            .media-counter-item {
                margin: 0px 3px;
                padding: 0px;
                height: 12px;
                width: 12px;

                .svg__fill--primary-blue-03 {
                    fill: none;
                }

                &:disabled {
                    .svg__stroke--primary-blue-03 {
                        stroke: white;
                    }

                    .svg__fill--primary-blue-03 {
                        fill: white;
                    }
                }
            }
        }

        .media-object-title {
            @include step-0;
        }

        .media-object-caption {
            @include step--1;
        }
    }
}
</style>
