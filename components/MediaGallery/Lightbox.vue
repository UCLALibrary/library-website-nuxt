<template>
    <div class="lightbox">
        <responsive-image
            class="media-container"
            object-fit="contain"
            :image="image"
        />
        <button
            class="button-close"
            @click="$emit('closeModal')"
        >
            <svg-icon-close />
        </button>
        <button
            v-if="nItems > 1"
            class="button-prev"
            :disabled="selectionIndex <= 0"
            @click="$emit('clickPrev')"
        >
            <svg-icon-caret-left />
        </button>
        <button
            v-if="nItems > 1"
            class="button-next"
            :disabled="selectionIndex >= nItems - 1"
            @click="$emit('clickNext')"
        >
            <svg-icon-caret-right />
        </button>
        <div class="caption-block">
            <div class="media-counter">
                <button
                    v-for="index in nItems"
                    :key="index"
                    class="media-counter-item"
                    :disabled="index-1 == selectionIndex"
                    @click="$emit('selectItem', index-1)"
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
                v-text="captionTitle"
            />
            <p
                class="media-object-caption"
                v-text="captionText"
            />
        </div>
    </div>
</template>

<script>

export default 
{
    components: {
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
        image: {
            type: Object,
            required: true,
        },
        captionTitle: {
            type: String,
            default: "",
        },
        captionText: {
            type: String,
            default: "",
        },
        selectionIndex: {
            type: Number,
            default: 0,
        },
        nItems: {
            type: Number,
            default: 1,
        }
    },
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
        grid-row: middle-row / span 1;
        grid-column: middle-col / span 1;

        width: var(--media-width);
        height: var(--media-height);
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

    .button-close {
        grid-row: top-row / span 1;
        grid-column: right-col / span 1;
        justify-self: start;
        align-self: end;
    }

    .button-prev {
        grid-row: middle-row / span 1;
        grid-column: left-col / span 1;
        justify-self: end;
        align-self: center;
        color: white;
    }

    .button-next {
        grid-row: middle-row / span 1;
        grid-column: right-col / span 1;
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
