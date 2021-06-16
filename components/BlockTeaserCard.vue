<template lang="html">
    <div class="block-teaser-card">
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
    </div>
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
.block-teaser-card {
    display: block;
    width: 300px;
    background-color: var(--color-white);

    .image {
        width: 300px;
    }

    .meta {
        margin-top: 16px;
        margin-left: 2px;
    }
}
</style>
