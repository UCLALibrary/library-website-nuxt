<template lang="html">
    <div :class="classes">
        <nuxt-link
            v-if="previousTo"
            :to="previousTo"
            class="previous"
        >
            <svg-arrow-next class="previous-svg" /> Previous
        </nuxt-link>
        <nuxt-link
            v-if="nextTo"
            :to="nextTo"
            class="next"
        >
            Next <svg-arrow-next class="next-svg" />
        </nuxt-link>
    </div>
</template>

<script>
import SvgArrowNext from "~/assets/svg/arrow-next"

export default {
    components: {
        SvgArrowNext,
    },
    props: {
        nextTo: {
            type: String,
            default: "",
        },
        previousTo: {
            type: String,
            default: "",
        },
    },
    computed: {
        classes() {
            if (this.previousTo == "") {
                return ["section-pagination", "first-page"]
            }
            if (this.nextTo == "") {
                return ["section-pagination", "last-page"]
            } else {
                return ["section-pagination"]
            }
        },
    },
}
</script>

<style lang="scss" scoped>
.section-pagination {
    max-width: 990px;

    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-content: center;
    align-items: center;
    .previous {
        font-family: var(--font-secondary);
        font-size: 18px;
        padding-left: 13px;

        display: flex;
        align-items: center;
    }
    .next {
        font-family: var(--font-secondary);
        font-size: 18px;
        padding-right: 13px;

        display: flex;
        align-items: center;
    }
    .previous-svg {
        transform: scaleX(-1);
        margin-right: 5px;
    }
    .next-svg {
        margin-left: 5px;
    }
    &.first-page {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: flex-end;
        align-content: stretch;
        align-items: center;
    }
    &.last-page {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: flex-start;
        align-content: stretch;
        align-items: center;
    }
}
</style>
