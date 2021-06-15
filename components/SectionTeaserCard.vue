<template lang="html">
    <section class="section-teaser-card">
        <div
            v-for="(block, index) in parsedList"
            :key="index"
        >
            <div class="block">
                <div
                    v-for="card in block"
                    :key="card.to"
                    class="card"
                >
                    <block-teaser-card :item="card" />
                </div>
            </div>
            <divider-general class="divider" />
        </div>
    </section>
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
        parsedList() {
            if (this.$store.state.winWidth <= 750) {
                return arrayOfArrays(this.items, 1)
            } else if (
                this.$store.state.winWidth <= 1024 &&
                this.$store.state.winWidth >= 750
            ) {
                return arrayOfArrays(this.items, 2)
            } else {
                return arrayOfArrays(this.items, 3)
            }
        },
    },
}
</script>

<style lang="scss" scoped>
.section-teaser-card {
    max-width: 964px;
    background-color: var(--color-white);

    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-content: flex-start;
    align-items: flex-start;

    .block {
        padding-left: 16px;
        margin-top: 50px;
        margin-bottom: 50px;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: flex-start;
        align-content: flex-start;
        align-items: flex-start;
    }

    .divider {
        width: 100%;
    }

    .card {
        padding-right: 16px;
        &:nth-child(3n) {
            padding-right: 0px;
        }
    }

    // Breakpoints
    @media #{$lte-tablet} {
        .block {
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
            justify-content: center;
            align-content: center;
            align-items: center;
        }
    }
    @media #{$lte-phone} {
        .block {
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
            justify-content: center;
            align-content: center;
            align-items: center;
        }
    }
}
</style>
