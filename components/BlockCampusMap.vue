<template lang="html">
    <div class="block-campus-map">
        <h3 class="title">
            Campus Map
        </h3>
        <div class="content">
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
    max-width: $container-xl-full-width + px;
    margin: 0 auto;

    .title {
        color: var(--color-primary-blue-03);
        @include step-3;
        margin-bottom: 16px;
        font-weight: 500;
    }

    .content {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        align-content: center;
        align-items: stretch;
    }

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
        justify-content: flex-start;
        align-content: stretch;
        align-items: flex-start;
    }

    .subheading-small {
        color: var(--color-primary-blue-05);
        @include overline;
        margin-bottom: 14px;
    }

    ::v-deep .rich-text {
        padding-right: unset;
        margin: unset;
    }

    // Breakpoints
    @media #{$medium} {
    }
    @media #{$small} {
        .content {
            display: flex;
            flex-direction: column;
            flex-wrap: nowrap;
        }

        .iframe {
            width: 100%;
            max-width: 100%;
            height: auto;
        }

        .text-grouping {
            max-width: 100%;
            margin-top: 16px;
        }

        .subheading-small {
            margin-bottom: 0;
        }
    }
}
</style>
