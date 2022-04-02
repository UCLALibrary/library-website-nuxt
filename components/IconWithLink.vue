<template lang="html">
    <div class="icon-with-link">
        icon-component-is
        text
        icon-name
        <div
            v-if="locations.length"
            class="location-group"
        >
            <nuxt-link
                v-for="location in parsedLocations"
                :key="`location-${location.id}`"
                :to="location.to"
                class="location-link"
            >
                <component
                    :is="location.svg"
                    class="location-svg"
                />
                <span
                    class="location"
                    v-html="location.title"
                />
            </nuxt-link>
        </div>
    </div>
</template>

<script>

// SVGs
export default {
    components: {
        SvgIconLCalendar: () =>
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
        title: {
            type: String,
            required: true,
        },
        locations: {
            type: Array,
            default: () => [],
        },
        to: {
            // URL to link to, if blank won't link
            type: String,
            default: "",
        },
    },
    computed: {
        classes() {
            return [
                "banner-featured",
                { "hatch-left": !this.alignRight },
                `color-${this.sectionName}`,
            ]
        },
        parsedLocations() {
            let parsedLocations = []
            for (let location in this.locations) {
                if (this.locations[location].title == "Online") {
                    break
                } else {
                    this.locations[location].svg = "svg-icon-location"
                    parsedLocations.push(this.locations[location])
                }
            }
            return parsedLocations
        },
        parsedIsOnline() {
            let parsedOnline = []
            for (let location in this.locations) {
                if (this.locations[location].title == "Online") {
                    this.locations[location].svg = "svg-icon-online"
                    parsedOnline.push(this.locations[location])
                }
            }
            return parsedOnline
        },
    },
}
</script>

<style lang="scss" scoped>
.icon-with-link {
    .location-group {
        font-family: var(--font-secondary);
        font-size: 20px;
        line-height: 1;
    }
    .location-link {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: flex-start;
        align-content: center;
        align-items: center;

        color: var(--color-primary-blue-03);
    }
    .location-online {
        color: var(--color-secondary-grey-05);

        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: flex-start;
        align-content: center;
        align-items: center;
    }
    .location {
        padding: 0 0 5px 5px;
    }
}
</style>
