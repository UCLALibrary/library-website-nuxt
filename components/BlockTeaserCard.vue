<template lang="html">
    <div class="block-teaser-card">
        <responsive-image
            :image="image"
            :aspect-ratio="60"
            class="image"
        />
        <block-teaser-meta
            :to="to"
            :category="category"
            :title="title"
            :date="date"
            :time="time"
            view="gallery"
            class="meta"
        />
    </div>
</template>

<script>
export default {
    props: {
        image: {
            type: Object,
            default: () => {},
        },
        to: {
            type: String,
            default: "",
        },
        category: {
            type: String,
            default: "",
        },
        title: {
            type: String,
            default: "",
        },
        date: {
            type: String,
            default: "",
        },
        time: {
            type: String,
            default: "",
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
