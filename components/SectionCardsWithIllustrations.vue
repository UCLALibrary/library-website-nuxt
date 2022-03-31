<template>
    <div
        class="section-cards-with-illustrations"
        :data-cy="cypressSelector"
    >
        <div class="meta">
            <h3
                v-if="title"
                class="title"
                v-html="title"
            />
            <div
                v-if="text"
                class="text"
                v-html="text"
            />
        </div>
        <div :class="classes">
            <block-card-with-illustration
                v-for="item in items"
                :key="item.to"
                class="card"
                :icon-name="item.iconName"
                :to="item.to"
                :title="item.title"
                :text="item.text"
                :category="item.category"
                :is-horizontal="item.isHorizontal"
            />
            <nuxt-link
                v-if="to"
                class="card card-more"
                :to="to"
            >
                <button-more
                    class="button"
                    :text="buttonText"
                />
            </nuxt-link>
        </div>
    </div>
</template>

<script>
import _kebabCase from "lodash/kebabCase"

export default {
    props: {
        title: {
            type: String,
            default: "",
        },
        text: {
            type: String,
            default: "",
        },
        items: {
            type: Array,
            default: () => [],
        },
        to: {
            type: String,
            default: "",
        },
        buttonText: {
            type: String,
            default: "",
        },
        isHorizontal: {
            type: Boolean,
            default: false,
        },
    },
    computed: {
        classes() {
            return [
                "card",
                { "is-horizontal": this.isHorizontal }
            ]
        },
        cypressSelector() {
            return `section-cards-with-illustrations-${_kebabCase(this.title) || "untitled"}`
        },
    },
}
</script>

<style lang="scss" scoped>
.section-cards-with-illustrations {
    max-width: $container-l-main + px;
    margin-left: auto;
    margin-right: auto;
    padding: 0;

    // .meta {
    //     margin-bottom: 90px;

    //     .title {
    //         font-weight: 400;
    //         font-size: 44px;
    //         line-height: 100%;
    //         text-transform: capitalize;
    //         color: var(--color-primary-blue-03);
    //     }
    //     .text {
    //         max-width: 730px;
    //         font-size: 24px;
    //         line-height: 130%;
    //         letter-spacing: 0.01em;
    //         color: var(--color-black);
    //         margin-top: 24px;
    //     }
    // }
// Variations
    // Vertical
    .cards {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: flex-start;
        align-content: flex-start;
        align-items: flex-start;
    }
    .card {
        margin: 0 30px 0 0;


        &:nth-child(3n) {
            margin-right: 0;
        }
        &:nth-child(n + 4) {
            margin-top: 40px;
        }
    }
    .card-more {
        border: 2px solid var(--color-primary-blue-01);
        width: 281px;
        height: 400px;
        border-radius: var(--rounded-slightly-all);
        transition-property: box-shadow, transform;
        transition-duration: 400ms;
        transition-timing-function: ease-in-out;
        .button {
            width: 100%;
            max-width: 100%;
            height: 100%;
        }

        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        justify-content: center;
        align-content: center;
        align-items: center;
    }

    // Hovers
    .card-more {
        @media #{$has-hover} {
            &:hover {
                transform: scale(1.1);
                box-shadow: 0px 10px 17px rgba(0, 0, 0, 0.04);
            }
        }
    }

    // Breakpoints
    @media #{$medium} {
        .meta {
            padding: 0 var(--unit-gutter);
            margin-bottom: 40px;
            .title {
                font-size: 40px;
            }
            .text {
                max-width: $container-m-text + px;
                font-size: 22px;
            }
        }
        .cards {
            width: auto;
            overflow-x: auto;
            overflow-y: visible;
            flex-wrap: nowrap;
            min-height: 420px;
            margin-right: var(--unit-gutter);
            .card {
                margin-top: 0;
                margin-right: 0;
                margin-left: 30px;
                flex-shrink: 0;

                &:first-child {
                    margin-left: var(--unit-gutter);
                }
            }
        }
    }
}
</style>
