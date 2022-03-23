<template lang="html">
    <div class="block-campus-map">
        <button
            class="title"
            @click="showModal"
        >
            Campus Map
        </button>
        <div class="content">
            <div class="iframe-hover">
                <div
                    class="iframe-container"
                    @click="showModal"
                >
                    <iframe
                        :src="parsedSrc"
                        class="iframe"
                        allowfullscreen
                        @click="showModal"
                    />
                </div>
            </div>
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

        <modal-generic
            v-show="isModalVisible"
            class="modal"
            @close="closeModal"
        >
            <div class="modal-content">
                <div class="iframe-container-modal">
                    <iframe
                        :src="parsedSrc"
                        class="iframe-modal"
                        allowfullscreen
                    />
                </div>
            </div>
        </modal-generic>
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
    data() {
        return {
            isModalVisible: false,
        }
    },
    computed: {
        parsedSrc() {
            return `https://map.ucla.edu/?id=${this.campusLocationId}&e=true`
        },
    },
    methods: {
        showModal() {
            this.isModalVisible = true
        },
        closeModal() {
            this.isModalVisible = false
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

    .iframe-hover {
        max-width: 50%;
        min-width: 426px;
        margin-right: 50px;
        position: relative;
    }

    .iframe-container {
        overflow: hidden;
        /* 16:9 aspect ratio */
        padding-top: 56.25%;
        position: relative;
    }

    .iframe {
        border: 0;
        height: 100%;
        width: 100%;
        left: 0;
        top: 0;
        position: absolute;
        z-index: 10;
    }

    .hover-gradient {
        left: 0;
        top: 0;
        z-index: 20;
        position: absolute;
        cursor: pointer;
        width: 100%;
        height: 100%;
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
        // margin-bottom: var(--space-m);
    }

    ::v-deep .rich-text {
        padding-right: unset;
        margin: unset;
    }

    .modal {
        max-width: $container-l-main + px;
        margin: 0 auto;
        z-index: 20;
        position: absolute;
    }

    .modal-content {
        min-width: 768px;
        min-height: 600px;
        max-width: $container-l-main + px;
    }

    .iframe-container-modal {
        overflow: hidden;
        /* 4:3 aspect ratio */
        padding-top: 75%;
        position: relative;
    }

    .iframe-modal {
        border: 0;
        height: 100%;
        width: 100%;
        left: 0;
        top: 0;
        @include shadow-lightbox-01;
        position: absolute;
        z-index: 10;
    }

    // Hovers
    @media #{$has-hover} {
        .iframe-container:hover {
            @include shadow-01;
        }
    }

    // Breakpoints
    @media #{$small} {
        .content {
            display: flex;
            flex-direction: column;
            flex-wrap: nowrap;
        }

        .text-grouping {
            max-width: 100%;
            margin-top: var(--space-m);
        }
    }
}
</style>
