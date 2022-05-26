<template>
    <div class="thumbnail-card">
        <responsive-image
            :image="image"
            aspect-ratio="60"
            class="image"
        />
        <h3
            class="caption-title"
            v-text="captionTitle"
        />
        <p
            class="caption-text"
            v-text="captionText"
        />
    </div>
</template>

<script>
export default {
    props: {
        image: {
            type: Object,
            required: true,
        },
        captionTitle: {
            type: String,
            default: "",
        },
        captionText: {
            type: String,
            default: "",
        },
    },
}
</script>

<style lang="scss" scoped>
.thumbnail-card {
    width: 100%;
    max-width: 100%;
    margin: 0;
    padding: 0;

    .caption-title {
        @include step-1;

        margin: 0;
        padding: 0;
        position: static;
        color: var(--color-black);

        /* Inside auto layout */

        flex: none;
        order: 0;
        flex-grow: 0;
        margin: 16px 0px 8px;
    }

    .caption-text {
        @include step-0;

        padding: 0;
        line-height: 140%;
        color: var(--color-secondary-grey-05);

        /* Inside auto layout */

        flex: none;
        order: 1;
        flex-grow: 0;
        margin: 4px 0px;
    }
}
</style>
