<template lang="html">
    <div :class="classes">
        <nuxt-link
            v-if="previousTo"
            :to="previousTo"
            class="previous"
        >
            <svg-arrow-next class="previous-svg" />
            <div class="underline-hover">
                Previous
            </div>
        </nuxt-link>
        <nuxt-link
            v-if="nextTo"
            :to="nextTo"
            class="next"
        >
            <div class="underline-hover">
                Next
            </div>
            <svg-arrow-next class="next-svg" />
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

    font-family: var(--font-secondary);
    font-size: 18px;
    padding-left: 13px;

    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-content: center;
    align-items: center;
    .previous {
        display: flex;
        align-items: center;
    }
    .next {
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

    // Hover states
    @media #{$has-hover} {
        .previous:hover,
        .previous:active {
            color: var(--color-primary-blue);
        }
        .next:hover,
        .next:active {
            color: var(--color-primary-blue);
        }
    }
}
</style>
