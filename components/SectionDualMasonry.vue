<template lang="html">
    <section class="section-dual-masonry">
        <div class="masonry">
            <block-event
                v-for="(item, index) in items"
                :key="item.to"
                :title="item.title"
                :category="item.category"
                :dates="item.dates"
                :prompt="item.prompt"
                :to="item.to"
                class="brick"
            />

            <nuxt-link
                v-for="(item, index) in items"
                :key="`image-${item.to}`"
                :to="item.to"
                class="brick brick-image"
            >
                <responsive-image
                    :image="item.image"
                    :aspect-ratio="100"
                />
            </nuxt-link>
        </div>
        <nuxt-link
            class="more"
            :to="to"
        >
            <button-more />
        </nuxt-link>
    </section>
</template>

<script>
export default {
    props: {
        items: {
            type: Array,
            default: () => [],
        },
        to: {
            type: String,
            default: "",
        },
    },
}
</script>

<style lang="scss" scoped>
.masonry {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-content: flex-start;
    align-items: flex-start;

    max-width: 1280px;
    margin: 0 auto;

    .brick {
        width: 50%;
        margin: 0;
        box-sizing: border-box;
        border: 8px solid white;

        &:nth-child(1) {
            order: 1;
            border-left: 0;

            /deep/ {
                .molecule {
                    transform: rotate(180deg);
                }
            }
        }
        &:nth-child(2) {
            order: 4;
            border-right: 0;

            // Half of 37.5
            margin-top: calc(-18.75% + 6.5px);

            /deep/ {
                .molecule {
                    bottom: 0;
                    top: auto;
                }
                .text {
                    top: 0;
                    bottom: auto;
                }
            }
        }
        &:nth-child(3) {
            order: 2;
            border-right: 0;
        }
        &:nth-child(4) {
            order: 3;
            border-left: 0;
        }
    }

    // Breakpoints
    @media #{$lte-phone} {
        flex-direction: column;
        flex-wrap: nowrap;

        .brick {
            width: 100%;
            border: 0;

            &:nth-child(1) {
                order: 1;
            }
            &:nth-child(2) {
                order: 3;
                margin-top: 0;
            }
            &:nth-child(3) {
                order: 2;
            }
            &:nth-child(4) {
                order: 4;
            }
        }
    }
}
.more {
    display: block;
    padding: 30px 0px;
    margin: 0 auto;
    width: max-content;
}
</style>
