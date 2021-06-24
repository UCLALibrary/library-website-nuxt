<template lang="html">
    <section class="section-teaser-highlight">
        <div class="section">
            <divider-general class="divider" />
            <div
                v-for="item in items"
                :key="item.to"
                class="meta"
            >
                <block-teaser-highlight
                    :item="item"
                    class="block"
                />
            </div>
        </div>
    </section>
</template>

<script>
export default {
    props: {
        /**
         * Array of objects [{ image, to, category, title, dates, times, text }]
         */
        items: {
            type: Array,
            default: () => [],
        },
    },
}
</script>

<style lang="scss" scoped>
.section-teaser-highlight {
    max-width: 990px;
    padding: 0 var(--unit-gutter);
    background-color: var(--color-white);
    .section {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        align-content: center;
        align-items: flex-start;
    }

    .divider {
        box-sizing: border-box;
        width: 100%;
    }

    .meta {
        &:nth-child(2n) {
            padding-right: 18px;
        }
        &:nth-child(3n) {
            padding-right: 0px;
        }
    }

    .block {
        margin-top: 85px;
    }

    // Breakpoints
    @media #{$lte-tablet} {
        .block {
            margin-top: 0px;
            margin-bottom: 0px;
            min-height: 200px;
        }
    }
    @media #{$lte-phone} {
        .section {
            display: flex;
            flex-direction: column;
            flex-wrap: wrap;
            justify-content: center;
            align-content: center;
            align-items: flex-start;
        }
        .block {
            margin-top: 0px;
            margin-bottom: 0px;
            min-height: 200px;
        }

        .meta {
            &:nth-child(2n) {
                padding-right: 0px;
            }
            &:nth-child(3n) {
                padding-right: 0px;
            }
        }
    }
}
</style>
