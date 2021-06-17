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
        </button>
    </div>
</template>

<script>
export default {
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

    display: flex;
    flex-direction: row;

    .button {
        height: 60px;
        color: var(--color-white);
        background-color: var(--color-primary-blue);
        padding-right: 16px;
        margin-right: 8px;

        flex: 1 1 auto;

        display: flex;
        align-items: center;
        align-content: center;

        &::after {
            content: "\f107";
            font-size: 16px;
            font-family: "Font-Awesome";
            color: var(--color-white);
        }
        &:last-child {
            margin-right: 0;
        }
    }

    &:last-child {
        margin-right: 0;
    }

    // Open state
    .is-active {
        &::after {
            content: "\f106";
        }
    }
}
</style>
