<template>
    <div class="grid-gallery">
        <h4
            class="month-year"
            v-html="monthYear"
        />
        <ul class="cards">
            <li
                v-for="card in parsedItems"
                :key="card.to"
                :class="card.classes"
            >
                <responsive-image
                    :image="card.image"
                    :aspect-ratio="parsedAspectRatio"
                    :class="card.imgclasses"
                />
                <h5
                    v-if="
                        card.headlineText &&
                            ((card.featured && !card.snippet) || !card.featured)
                    "
                    class="title"
                >
                    <smart-link
                        :to="card.to"
                        target="_blank"
                        class="link"
                        v-html="card.headlineText"
                    >
                        {{ card.headlineText }}
                    </smart-link>
                </h5>
                <p
                    v-if="!card.featured && card.snippet"
                    class="snippet"
                    v-html="card.snippet"
                />
                <div
                    v-if="card.featured && card.snippet"
                    class="section-text"
                >
                    <component
                        :is="'svg-icon-play'"
                        class="svg"
                    />
                    <div class="text">
                        <h5
                            v-if="card.headlineText"
                            class="title"
                        >
                            <smart-link
                                :to="card.to"
                                target="_blank"
                                class="link"
                            >
                                {{ card.headlineText }}
                            </smart-link>
                        </h5>
                        <p
                            class="snippet"
                            v-html="card.snippet"
                        />
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    components: {
        SvgIconPlay: () =>
            import(
                "~/node_modules/ucla-library-design-tokens/assets/svgs/icon-play-filled"
            ),
    },
    props: {
        //  [{ image : Object, date: String, headlineText: String, to: URL,  featured: boolean, snippet:String }]
        monthYear: {
            type: String,
            default: "",
        },
        items: {
            type: Array,
            default: () => [],
        },
    },
    computed: {
        parsedItems() {
            return this.items.map((obj) => {
                let objClass = "card "
                if (obj.featured && obj.snippet) {
                    objClass = objClass + "card-featured"
                } else if (obj.featured && !obj.snippet) {
                    objClass = objClass + "card-4up"
                } else {
                    objClass = objClass + "card-small"
                }
                return {
                    ...obj,
                    classes: objClass,
                }
            })
        },
        parsedAspectRatio() {
            return this.featured ? 100 : 60
        },
    },
}
</script>

<style lang="scss" scoped>
.grid-gallery {
    max-width: 932px;
    padding: 0;
    margin: 0;
    background-color: var(--color-white);
    position: relative;

    .month-year {
        @include step-2;
        color: var(--color-black);
        position: sticky;
        top: 48px;
        background-color: var(--color-white);
        z-index: 20;
        padding-bottom: 16px;
        padding-top: 10px;
        // margin-top: var(--space-xl);
    }
    .cards {
        display: grid;
        grid-gap: 16px;
        grid-template-columns: repeat(6, 1fr);
        grid-auto-flow: dense;
        margin-top: 25px;
    }
    .card {
        margin-bottom: 32px;
        list-style: none;
        padding: 0;
        position: relative;
    }
    .card-small {
        grid-column: span 2;
    }

    .card-featured {
        grid-column: span 6;
        position: relative;

        display: grid;
        grid-template-columns: 2fr 1fr;
        gap: 16px;

        .two-librarians {
            ::v-deep {
                .media {
                    object-position: 50% top;
                }
            }
        }
    }

    .card-4up {
        grid-column: span 4;
    }

    .title {
        @include step-1;
        color: var(--color-primary-blue-03);
        margin: 16px 0 0 0;
        line-height: $line-height--1;

        /* display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;*/
    }
    .link::after {
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
    }
    .snippet {
        font-size: 18px;
        font-weight: 400;
        line-height: 160%;
        margin: 24px 0 0 0;
        color: var(--color-black);
    }
    .section-text {
        display: flex;
        flex-wrap: nowrap;
        justify-content: space-evenly;
        margin-left: -24px;
    }
    .svg {
        transform: rotate(180deg) scale(0.75);
        flex-shrink: 0;
    }

    .text {
        .title {
            margin-top: unset;
        }
    }
    // Hovers
    @media #{$has-hover} {
        .title a:hover {
            @include link-hover;
        }
    }

    @media #{$medium} {
        padding: 0 64px;
        .card {
            grid-column: span 3;
        }
        .card-featured {
            grid-template-columns: 1fr;
            gap: 0;
            grid-column: span 6;

            .section-text svg {
                display: none;
            }

            .text {
                margin: 16px 0 0;
            }
        }
        .card-4up {
            grid-column: span 6;
        }
        .month-year {
            padding-top: 20px;
        }
        .section-text {
            margin-left: 0;
        }
    }

    @media #{$small} {
        padding: 0 $whitespace-s-sides + px;

        .month-year {
            top: 74px;
        }
        .card {
            grid-column: span 6;
        }
    }

    @media (min-width: 400px) {
        .month-year {
            top: 60px;
            padding-top: 16px;
        }
    }

    @media (min-width: 860px) {
        .month-year {
            top: 40px;
        }
    }
}
</style>
