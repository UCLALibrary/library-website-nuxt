<template lang="html">
    <div class="section-teaser-vertical">
        <template v-for="item in items">
            <block-teaser-vertical
                :key="item.to"
                :item="item"
                class="block"
            />
        </template>
    </div>
</template>

<script>
import arrayOfArrays from "~/utils/arrayOfArrays"

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
    computed: {
        blockOfThree() {
            return arrayOfArrays(this.items, 3)
        },
    },
}
</script>

<style lang="scss" scoped>
.section-teaser-vertical {
    max-width: 990px;
    background-color: var(--color-white);
    padding: 0 var(--unit-gutter);
    border: 2px solid aqua;

    display: grid;
    grid-gap: 0px;
    grid-template-columns: repeat(3, minmax(300px, 1fr));

    .block-teaser-vertical {
        border-top: solid gray 1px;
        padding: 20px 0;

        &:first-child,
        &:nth-child(2),
        &:nth-child(3) {
            border-top: none;
        }
    }

    .meta {
        border: 2px solid coral;
        // margin-right: 16px;
        // &:nth-child(3n + 3) {
        //     margin-right: 0px;
        // }
        // margin-top: 50px;
        // margin-bottom: 50px;
    }
    .block {
        //margin-bottom: 50px;
    }

    .divider {
        width: 100%;
    }

    // Breakpoints
    @media #{$lte-tablet} {
        .meta {
            &:nth-child(2n + 3) {
                //margin-right: 50px;
            }
        }
    }
}
</style>
