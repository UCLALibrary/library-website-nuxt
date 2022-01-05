<template lang="html">
    <div class="story-with-image">
        <responsive-image
            class="image"
            :image="image"
            :aspect-ratio="parsedRatio"
        >
            <div class="gradient" />
        </responsive-image>
        <div 
            class="imagetitle"
            vhtml="imagetitle"
        />
        <div class="meta">
            <h2
                class="title"
                v-html="title"
            />
            <div
                class="text"
                v-html="text"
            />
            <divider-general class="divider-general" />
            <div
                class="footnote"
                v-html="footnote"
            />
            <divider-general class="divider-general" />
            <div class="calltoaction">
                <span
                    v-html="calltoaction"
                />
                <svg-arrow-diagonal class="svg" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    components: {
        SvgArrowDiagonal: () => import("~/assets/svg/arrow-diagonal")
    },
    props: {
        image: {
            type: Object,
            default: () => {},
        },
        imagetitle: {
            type: String,
            default: "",
        },
        title: {
            type: String,
            default: "",
        },
        text: {
            type: String,
            default: "",
        },
        footnote: {
            type: String,
            default: "",
        },
        calltoaction: {
            type: String,
            default: "",
        },
    },
    computed: {
        parsedRatio() {
            // If on mobile, change ratio of image
            let output = this.ratio
            if (this.$store.state.winWidth <= 750) {
                output = 100
            }
            return output
        },
    }
}
</script>

<style lang="scss" scoped>
    .story-with-image {
        border: 2px solid pink;
        color: var(--color-black);
        .image {
            margin:  0 var(--unit-gutter);
            .gradient {
                background: var(--gradient-image-01),
                    linear-gradient(
                        180deg,
                        rgba(15, 15, 15, 0) 0%,
                        rgba(15, 15, 15, 0.25) 67.57%,
                        #0f0f0f 100%
                    );
                z-index: 10;
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
            }
        }
        .meta {
            margin: 100px 150px;
            max-width: 832px;
        }
        .title {
            color: var(--color-black);
        }
        .text {
            font-size: 20px;
            line-height: 32px;
            letter-spacing: 0.01em;
            margin: 50px 0 80px 0;
        }
        .footnote {
            font-style: italic;
            font-weight: normal;
            font-size: 16px;
            line-height: 160%;
            margin: 42px 0;
        }
        .calltoaction {
            font-style: normal;
            font-weight: 500;
            font-size: 18px;
            line-height: 100%;
            margin: 55px 0 80px 0;

            display: flex;
            align-items: center;
        }

        // Hover states
        @media #{$has-hover} {
            a:hover {
                text-decoration: underline;
                text-decoration-color: var(--color-primary-blue-03);
                text-decoration-thickness: 1.5px;
            }
            .calltoaction:hover {
                text-decoration: underline;
                text-decoration-color: var(--color-primary-blue-03);
                text-decoration-thickness: 1.5px;
            }
            .svg:hover {
                text-decoration: underline;
                text-decoration-thickness: 1.5px;
                .arrow {
                    color: green;
                    path {
                        fill: var(--color-primary-blue-03);
                    }
                }
                path {
                    fill: var(--color-primary-blue-03);
                    .arrow-diagonal {
                        color: var(--color-primary-blue-03);
                    }
                }
            }
        }
    }
</style>
