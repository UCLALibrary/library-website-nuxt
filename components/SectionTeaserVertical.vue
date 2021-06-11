<template lang="html">
    <section class="section-teaser-vertical">
        <div v-for="filterItems in blockOfThree">
            <div>{{ filterItems }}</div>
            <div
                v-for="item in filterItems"
                :key="item.category"
                class="meta"
            >
                <block-teaser-vertical
                    :key="item.to"
                    :item="item"
                    class="block"
                />
            </div>
            <divider-general class="divider" />
        </div>
    </section>
</template>

<script>
import arrayOfArrays from "~/utils/arrayOfArrays"

export default {
    props: {
        items: {
            //Array of objects {image, to, category, title, dates, times, text}
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

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
    align-items: center;

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
