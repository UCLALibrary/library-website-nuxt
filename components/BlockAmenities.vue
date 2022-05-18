<template lang="html">
    <div class="block-amenities">
        <div
            class="amenities-title"
            v-html="`Amenities`"
        />
        <ul class="amenities-list">
            <li
                v-for="(item, index) in parsedAmenities"
                :key="index"
                class="amenitiy-row"
            >
                <component
                    :is="parsedIconName"
                    v-if="parsedIconName"
                />
                <span
                    class="amenitiy-name"
                    v-html="item"
                />
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    // TO DO import all amenitites svgs
    components: {
        SvgIconPhone: () =>
            import(
                "~/node_modules/ucla-library-design-tokens/assets/svgs/icon-phone"
            ),
    },
    props: {
        items: {
            type: Array,
            default: () => [],
        },
    },
    computed: {
        parsedAmenities() {
            return this.items
        },
        parsedIconName() {
            return "svg-icon-phone"
        },
    },
}
</script>

<style lang="scss" scoped>
.block-amenities {
    max-width: $container-l-main + px;
    width: 100%;

    .amenities-title {
        color: var(--color-primary-blue-03);
        @include step-2;
        margin-bottom: 16px;
    }
    .amenities-list {
        display: flex;
        flex-direction: column;
    }
    .amenitiy-row {
        display: inline-flex;
    }
    .amenitiy-name {
        color: var(--color-black);
        @include step-0;
        margin-bottom: 23px; // TO Do replace with spacing token
    }
}
</style>
