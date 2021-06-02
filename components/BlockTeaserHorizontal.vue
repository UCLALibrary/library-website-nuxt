<template lang="html">
    <section class="block-teaser-horizontal">
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
.block-teaser-horizontal {
    // display: inline;
    max-width: 930px;
    max-height: 360px;
    // background-color: var(--color-white);

    display: flex;
    flex-direction: row;
    align-items: center;

    .image {
        width: 456px;
        height: 274px;

        margin-right: 56px;
    }
    .meta {
        width: 412px;
        max-height: 180px;
    }
}
</style>
