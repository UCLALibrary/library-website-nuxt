<template lang="html">
    <div class="search-generic-filter-items">
        <transition
            name="slide-toggle"
            mode="out-in"
        >
            <component
                :is="group.componentName"
                v-for="(group, index) in parsedItems"
                v-if="index == activeIndex"
                :key="group.slug"
                :items="group.items"
                :selected.sync="selected[group.slug]"
                class="group"
            />
        </transition>
        <!-- TODO Also need date picker/calendar -->
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
    data() {
        return {
            selected: {},
        }
    },
    computed: {
        parsedItems() {
            return this.items.map((obj) => {
                let componentName = "base-radio-group"
                switch (obj.inputType) {
                    case "checkbox":
                        componentName = "base-checkbox-group"
                        break
                    case "calendar":
                        componentName = "base-calendar-group"
                        break
                }

                return {
                    ...obj,
                    componentName,
                }
            })
        },
    },
    watch: {
        selected: {
            handler(newVal) {
                const key = Object.keys(newVal)[0]

                this.$emit("change", {
                    slug: key,
                    selected: newVal[key],
                })
            },
            deep: true,
        },
    },
}
</script>

<style lang="scss" scoped>
.search-generic-filter-items {
    .group {
        transition-duration: 400ms;
    }
}

.slide-toggle-enter,
.slide-toggle-leave-to {
    max-height: 0;
    opacity: 0;
}
.slide-toggle-enter-to,
.slide-toggle-leave {
    max-height: 500px;
    opacity: 1;
}
.slide-toggle-enter-active,
.slide-toggle-leave-active {
    overflow: hidden;
    transition-property: opacity, max-height;
    transition-timing-function: ease-in-out;
}
</style>
