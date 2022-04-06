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
        SvgIconCalendar: () =>
            import(
                "~/node_modules/ucla-library-design-tokens/assets/svgs/icon-calendar"
            ),
        SvgIconCard: () =>
            import(
                "~/node_modules/ucla-library-design-tokens/assets/svgs/icon-card"
            ),

        // needs to be added to the ucla-library-design-tokens/
        // SvgIconConsultation: () =>
        //     import(
        //         "~/node_modules/ucla-library-design-tokens/assets/svgs/icon-consultation"
        //     ),

        // needs to be added to the ucla-library-design-tokens/
        // SvgIconEllipsis: () =>
        //     import(
        //         "~/node_modules/ucla-library-design-tokens/assets/svgs/icon-ellipsis"
        //     ),
        SvgIconEmail: () =>
            import(
                "~/node_modules/ucla-library-design-tokens/assets/svgs/icon-email"
            ),
        SvgIconList: () =>
            import(
                "~/node_modules/ucla-library-design-tokens/assets/svgs/icon-list"
            ),
        SvgIconLocation: () =>
            import(
                "~/node_modules/ucla-library-design-tokens/assets/svgs/icon-location"
            ),
        // needs to be added to the ucla-library-design-tokens/
        // SvgIconOnline: () =>
        //     import(
        //         "~/node_modules/ucla-library-design-tokens/assets/svgs/online"
        //     ),
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
            // URL to link to, if blank won't link
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
        // color: var(--color-secondary-grey-05);
        // padding: 0 0 5px 5px;
        flex-shrink: 0;
    }

    // Hover states
    @media #{$has-hover} {
        .link:hover {
            @include link-hover;
        }
    }
}
// icon-calendar
// icon-card
// icon-consultation
// icon-ellipsis
// icon-email
// icon-list
// icon-location
// icon-online
// icon-phone
// icon-search
// icon-virtual
// icon-share-email
// icon-share-printer
</style>
