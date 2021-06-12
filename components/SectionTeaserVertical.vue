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
    padding-left: 25px;

    display: grid;
    grid-gap: 0px;
    grid-template-columns: repeat(3, minmax(300px, 1fr));

    .block-teaser-vertical {
        border-top: 2px dotted var(--color-grey-03);
        padding: 50px 0;

        &:first-child,
        &:nth-child(2),
        &:nth-child(3) {
            border-top: none;
        }
    }
}
</style>
