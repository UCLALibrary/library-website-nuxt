<template lang="html">
    <section class="section-teaser-vertical">
        <div
            v-for="(item, index) in items"
            :key="item.to"
            class="meta"
        >
            <div
                v-for="(item, index) in items"
                :key="item.to"
            >
                // loop through the Array // check the width of the screen //
                group the array into 3s // print out 3 or 2 or 1 // print the
                divider-general

                <block-teaser-vertical
                    :key="item.to"
                    :item="item"
                    class="block"
                />
            </div>
        </div>
        <divider-general class="divider" />
    </section>
</template>

<script>
import sliceIntoChunks from "~/utils/sliceIntoChunks"

export default {
    props: {
        items: {
            //Array of objects {image, to, category, title, dates, times, text}
            type: Array,
            default: () => [],
        },
    },
    computed: {
        classes() {
            return ["block-event", `button color-${this.sectionName}`]
        },
        sectionName() {
            return getSectionName(this.to)
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
