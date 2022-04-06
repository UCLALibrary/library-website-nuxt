<template lang="html">
    <div class="icon-with-link">
        <smart-link
            v-if="to"
            :to="to"
            class="link"
        >
            <component
                :is="iconName"
                class="icon"
            />
            <span
                class="text"
                v-html="text"
            />
        </smart-link>
    </div>
</template>

<script>
// SVGs
export default {
    components: {
        SvgIconConsultation: () =>
            import(
                "~/node_modules/ucla-library-design-tokens/assets/svgs/icon-chat"
            ),
        SvgIconList: () =>
            import(
                "~/node_modules/ucla-library-design-tokens/assets/svgs/icon-list"
            ),
        SvgIconLocation: () =>
            import(
                "~/node_modules/ucla-library-design-tokens/assets/svgs/icon-location"
            ),
        SvgIconPhone: () =>
            import(
                "~/node_modules/ucla-library-design-tokens/assets/svgs/icon-phone"
            ),
        SvgIconSearch: () =>
            import(
                "~/node_modules/ucla-library-design-tokens/assets/svgs/icon-search"
            ),
        SvgIconVirtual: () =>
            import(
                "~/node_modules/ucla-library-design-tokens/assets/svgs/icon-virtual"
            ),
        SvgIconShareEmail: () =>
            import(
                "~/node_modules/ucla-library-design-tokens/assets/svgs/icon-share-email"
            ),
        SvgIconSharePrinter: () =>
            import(
                "~/node_modules/ucla-library-design-tokens/assets/svgs/icon-share-printer"
            ),
        SvgIconHeadphones: () =>
            import(
                "~/node_modules/ucla-library-design-tokens/assets/svgs/icon-headphones"
            ),
        SvgIconVideo: () =>
            import(
                "~/node_modules/ucla-library-design-tokens/assets/svgs/icon-video"
            ),
        SvgIconImageStack: () =>
            import(
                "~/node_modules/ucla-library-design-tokens/assets/svgs/icon-image-stack"
            ),
        SvgIconMoney: () =>
            import(
                "~/node_modules/ucla-library-design-tokens/assets/svgs/icon-money"
            ),
        SvgIconMessage: () =>
            import(
                "~/node_modules/ucla-library-design-tokens/assets/svgs/icon-message"
            ),
        SvgIconPlay: () =>
            import(
                "~/node_modules/ucla-library-design-tokens/assets/svgs/icon-play"
            ),
        SvgIconPlayFilled: () =>
            import(
                "~/node_modules/ucla-library-design-tokens/assets/svgs/icon-play-filled"
            ),
        SvgIconEye: () =>
            import(
                "~/node_modules/ucla-library-design-tokens/assets/svgs/icon-eye"
            ),
        SvgIconCheck: () =>
            import(
                "~/node_modules/ucla-library-design-tokens/assets/svgs/icon-check"
            ),
        SvgIconEmail: () =>
            import(
                "~/node_modules/ucla-library-design-tokens/assets/svgs/icon-email"
            ),
        SvgIconCard: () =>
            import(
                "~/node_modules/ucla-library-design-tokens/assets/svgs/icon-card"
            ),
        SvgIconCalendar: () =>
            import(
                "~/node_modules/ucla-library-design-tokens/assets/svgs/icon-calendar"
            ),
        SvgIconLaptop: () =>
            import(
                "~/node_modules/ucla-library-design-tokens/assets/svgs/icon-laptop"
            ),
        SvgIconBook: () =>
            import(
                "~/node_modules/ucla-library-design-tokens/assets/svgs/icon-book"
            ),
        SvgIconLocker: () =>
            import(
                "~/node_modules/ucla-library-design-tokens/assets/svgs/icon-locker"
            ),
        SvgIconPerson: () =>
            import(
                "~/node_modules/ucla-library-design-tokens/assets/svgs/icon-person"
            ),
        SvgIconAccessible: () =>
            import(
                "~/node_modules/ucla-library-design-tokens/assets/svgs/icon-accessible"
            ),
        SvgIconClock: () =>
            import(
                "~/node_modules/ucla-library-design-tokens/assets/svgs/icon-clock"
            ),
        SvgIconChair: () =>
            import(
                "~/node_modules/ucla-library-design-tokens/assets/svgs/icon-chair"
            ),
        SvgIconLight: () =>
            import(
                "~/node_modules/ucla-library-design-tokens/assets/svgs/icon-light"
            ),
        SvgIconLocationFilled: () =>
            import(
                "~/node_modules/ucla-library-design-tokens/assets/svgs/icon-location-filled"
            ),
        SvgIconAlert: () =>
            import(
                "~/node_modules/ucla-library-design-tokens/assets/svgs/icon-alert"
            ),
    },
    props: {
        text: {
            type: String,
            required: true,
        },
        iconName: {
            type: String,
            required: true,
        },
        to: {
            // URL to link to
            type: String,
            default: "",
        },
    },
}
</script>

<style lang="scss" scoped>
.icon-with-link {
    display: inline-block;
    .text {
        @include button;
    }
    .link {
        color: var(--color-primary-blue-03);
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: flex-start;
        align-items: center;
        gap: var(--space-xs);
    }
    .icon {
        flex-shrink: 0;
    }

    // Hover states
    @media #{$has-hover} {
        .link:hover {
            @include link-hover;
        }
    }
}
</style>
