<template lang="html">
    <div class="search-generic-filter-buttons">
        <button
            v-for="(filter, index) in parsedItems"
            :key="filter.label"
            :class="filter.class"
            @click="toggleOpen(index)"
        >
            <span
                class="title"
                v-html="filter.label"
            />

            <div class="chevron">
                <svg-chevron-down class="svg" />
            </div>
        </button>
    </div>
</template>

<script>
import SvgChevronDown from "~/assets/svg/chevron-down"

export default {
    components: {
        SvgChevronDown,
    },
    props: {
        items: {
            type: Array,
            default: () => [],
        },
        activeIndex: {
            type: Number,
            default: -1,
        },
    },
    computed: {
        parsedItems() {
            return this.items.map((obj, index) => {
                let btnClass = "button"
                if (this.activeIndex == index) {
                    btnClass = "button is-active"
                }

                return {
                    ...obj,
                    class: btnClass,
                }
            })
        },
    },
    methods: {
        toggleOpen(index) {
            if (index == this.activeIndex) {
                this.$emit("update:activeIndex", -1)
            } else {
                this.$emit("update:activeIndex", index)
            }
        },
    },
}
</script>

<style lang="scss" scoped>
.search-generic-filter-buttons {
    width: 100%;
    font-family: var(--font-secondary);
    font-size: 18px;

    display: flex;
    flex-direction: row;

    .button {
        height: 60px;
        font-size: 18px;
        color: var(--color-white);
        background-color: var(--color-blue-03);
        margin-right: 8px;
        padding: 0 50px 0 16px;
        position: relative;
        box-sizing: border-box;

        flex: 1 1 auto;

        display: flex;
        align-items: center;
        align-content: center;

        &:last-child {
            margin-right: 0;
        }
    }
    .chevron {
        font-size: 16px;
        color: var(--color-white);
        position: absolute;
        width: 56px;
        right: 0;
        top: 0;
        height: 100%;
        transition: background-color 400ms ease-in-out;

        display: flex;
        justify-content: center;
        align-content: center;
        align-items: center;
    }
    .svg path {
        stroke: var(--color-white);
    }

    // Open state
    .is-active {
        .svg {
            transform: rotate(180deg);
        }
    }

    // Hovers
    @media #{$has-hover} {
        .button:hover .chevron {
            background-color: var(--color-primary-blue);
        }
    }
}
</style>
