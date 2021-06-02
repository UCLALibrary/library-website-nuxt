<template lang="html">
    <section class="block-teaser-horizontal">
        <responsive-image
            :image="item.image"
            :aspect-ratio="60"
            class="image"
        />
        <block-teaser-meta
            v-bind="item"
            view="list"
            class="block-teaser"
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
    max-width: 992px;
    max-height: 274px;
    background-color: var(--color-white);

    display: flex;
    flex-direction: row;
    // align-items: center;

    .image {
        width: 456px;
        max-height: 274px;
        margin-right: 56px;
    }
    .block-teaser {
        width: 412px;
        max-height: 222px;
        margin-top: 16px;
        padding-bottom: 16px;
        overflow: hidden;
    }

    /deep/ {
        .block-teaser-meta {
            .title {
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                overflow: hidden;
            }
            .text {
                display: -webkit-box;
                -webkit-line-clamp: 3;
                -webkit-box-orient: vertical;
                overflow: hidden;
            }
        }
    }
}
</style>
