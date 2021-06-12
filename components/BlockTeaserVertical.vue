<template lang="html">
    <section class="block-teaser-vertical">
        <responsive-image
            :image="item.image"
            :aspect-ratio="60"
            class="image"
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
    // width: 300px;
    background-color: var(--color-white);

    .image {
        width: 300px;
    }

    .meta {
        margin-top: 16px;
    }
}
</style>
