<template lang="html">
    <section class="section-teaser-vertical">
        <div v-html="blockOfThree" />
        <div v-for="item in blockOfThree">
            <div
                v-for="(item, index) in items"
                :key="item.to"
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
        <!-- <div
            v-for="(item, index) in items"
            :key="item.to"
            class="meta"
        >
            <div
                v-for="(item, index) in items"
                :key="item.to"
            >
                <block-teaser-vertical
                    :key="item.to"
                    :item="item"
                    class="block"
                />
            </div>
        </div> -->
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
        blockOfTwo() {
            return arrayOfArrays(this.items, 2)
        },
        blockOfOne() {
            return arrayOfArrays(this.items, 1)
        },
    },
    methods: {
        arrayOfArrays(arr, chunkSize) {
            return sliceIntoChunks(arr, chunkSize)
        },
    },
}
</script>

<style lang="scss" scoped>
.section-teaser-vertical {
    max-width: 990px;
    background-color: var(--color-white);
    padding: 0 var(--unit-gutter);

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
    align-items: center;

    .meta {
        border: 2px solid coral;
        margin-right: 16px;
        border: 2px solid yellow;
        &:nth-child(3n + 3) {
            margin-right: 0px;
        }
        margin-top: 50px;
        margin-bottom: 50px;

        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: flex-start;
        align-content: flex-start;
        align-items: center;
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
