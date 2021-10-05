<template lang="html">
    <div class="help-topic-card">
        <div class="cards">
            <!-- TODO update this to parse out items in block object/match gql names -->
            <block-card-vertical
                v-for="item in block.innerBlock"
                :key="item.contentLink[0].to"
                class="card"
                :icon-name="item.contentLink[0].iconName"
                :to="item.contentLink[0].to"
                :title="item.contentLink[0].title"
                :text="item.contentLink[0].text"
            />
            <nuxt-link
                class="card card-more"
                to="/services-resources"
            >
                <button-more
                    class="button"
                    text="All Services & Resources"
                />
            </nuxt-link>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        block: {
            type: Object,
            default: () => {},
        },
    },
    computed: {
        descriptionText() {
            return this.block.subheader //Or return short description from content link
        },
    },
}
</script>

<style lang="scss" scoped>
.help-topic-card {
    max-width: 924px;
    margin-left: auto;
    margin-right: auto;
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
        width: 281px;

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
        box-sizing: border-box;

        transition-property: box-shadow, transform;
        transition-duration: 400ms;
        transition-timing-function: ease-in-out;

        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        justify-content: center;
        align-content: center;
        align-items: center;

        .button {
            width: 100%;
            max-width: 100%;
            height: 100%;
        }
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
    @media #{$lte-tablet} {
        .meta {
            padding: 0 var(--unit-gutter);
            margin-bottom: 40px;

            .title {
                font-size: 40px;
            }
            .text {
                max-width: 600px;
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
