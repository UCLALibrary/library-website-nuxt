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
export default 
{
    components: true,
    props: {
        image: {
            type: Object,
            required: true,
        },
        captionTitle: {
            type: Text,
            default: "",
        },
        captionText: {
            type: Text,
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
        margin: 0;
        padding: 0;

        position: static;
        font-family: var(--font-primary);
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: 130%;
        color: var(--color-black);

        /* Inside auto layout */

        flex: none;
        order: 0;
        flex-grow: 0;
        margin: 4px 0px;
    }

    .caption-text {
        padding: 0;


        /* proxima-nova/proxima-nova-regular-16-140-1.5-0 */

        font-family: var(--font-secondary);
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 140%;
        /* or 22px */

        letter-spacing: 0.015em;

        color: var(--color-secondary-grey-05);

        /* Inside auto layout */

        flex: none;
        order: 1;
        flex-grow: 0;
        margin: 4px 0px;
    }
}
</style>
