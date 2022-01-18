<template>
    <div class="grid-gallery">
        <h3
            class="month-year"
            v-html="items[0].monthYear"
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
                    class="image"
                />
                <h3
                    v-if="
                        card.headlineText &&
                            ((card.featured && !card.snippet) || !card.featured)
                    "
                    class="title"
                >
                    <smart-link
                        :to="card.to"
                        target="_blank"
                        v-html="card.headlineText"
                    />
                </h3>
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
                        <h3
                            v-if="card.headlineText"
                            class="title"
                        >
                            <smart-link
                                :to="card.to"
                                target="_blank"
                                v-html="card.headlineText"
                            />
                        </h3>
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
    .month-year {
        font-weight: 600;
        font-size: 35.538px;
        line-height: 120%;
        color: var(--color-black);
        margin-top: var(--unit-gutter);
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
    }
    .card-small {
        grid-column: span 2;
    }

    .card-featured {
        grid-column: span 6;

        display: grid;
        grid-template-columns: 2fr 1fr;
        gap: 16px;
    }

    .card-4up {
        grid-column: span 4;
    }

    .title {
        font-weight: 500;
        font-size: 26px;
        letter-spacing: 0.25%;
        color: var(--color-primary-blue-03);
        margin: 16px 0 0 0;

        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
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
    }
    .svg {
        transform: rotate(180deg);
        width: 200px;
    }

    .text {
        margin-left: 15px;
        .title {
            margin-top: unset;
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
    }

    @media #{$small} {
        padding: 0 24px;
        .card {
            grid-column: span 6;
        }
    }
}
</style>
