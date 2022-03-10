<template lang="html">
    <div class="block-campus-map">
        <iframe
            class="iframe"
            :src="parsedSrc"
            :title="locationName"
        />
        <div
            v-if="buildingAccess"
            class="text-grouping"
        >
            <h4 class="subheading-small">
                Building Access
            </h4>
            <rich-text
                class="building-access-text"
                :rich-text-content="buildingAccess"
            />
        </div>
    </div>
</template>

<script>
export default {
    props: {
        campusLocationId: {
            type: String,
            default: "",
        },
        locationName: {
            type: String,
            default: "",
        },
        buildingAccess: {
            type: String,
            default: "",
        },
    },
    computed: {
        parsedSrc() {
            return `https://map.ucla.edu/?id=${this.campusLocationId}&e=true`
        },
    },
}
</script>

<style lang="scss" scoped>
.block-campus-map {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-content: center;
    align-items: stretch;

    max-width: $container-xl-full-width + px;

    .iframe {
        max-width: 50%;
        min-width: 426px;
        min-height: 220px;
        margin-right: 50px;
    }

    .text-grouping {
        max-width: 40%;

        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        align-content: flex-start;
        align-items: flex-start;
    }

    .subheading-small {
        color: var(--color-primary-blue-05);
        @include overline;
        margin-bottom: 14px;
    }
}
</style>
