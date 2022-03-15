<template lang="html">
    <div class="block-campus-map">
        <nuxt-link
            class="title"
            to="modal"
        >
            Campus Map
        </nuxt-link>
        <div class="content">
            <iframe
                class="iframe"
                :src="parsedSrc"
                :title="locationName"
                allowfullscreen
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
    max-width: $container-l-main + px;
    margin: 0 auto;

    .title {
        color: var(--color-primary-blue-03);
        @include step-2;
        margin-bottom: var(--space-m);
    }
    .title::after {
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
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
        border: none;
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
        margin-bottom: var(--space-m);
    }

    ::v-deep .rich-text {
        padding-right: unset;
        margin: unset;
    }

    // Breakpoints
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
            margin-top: var(--space-m);
        }
    }
}
</style>
