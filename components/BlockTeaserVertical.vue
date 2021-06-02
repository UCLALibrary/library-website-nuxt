<template lang="html">
    <section class="block-teaser-vertical">
        <responsive-image
            :image="item.image"
            :aspect-ratio="60"
        />
        <block-teaser-meta
            v-bind="item"
            view="gallery"
            class="meta"
        />
    </section>
</template>

<script>
export default {
    props: {
        item: {
            type: Object,
            default: () => {},
        },
    },
}
</script>

<style lang="scss" scoped>
.block-teaser-vertical {
    display: block;
    max-width: 300px;
    background-color: var(--color-white);
    max-height: 360px;

    .meta {
        margin-top: 16px;
        max-height: 180px;
    }
}
</style>
