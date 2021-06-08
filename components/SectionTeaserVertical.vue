<template lang="html">
    <section class="section-teaser-vertical">
        <block-teaser-vertical
            v-for="item in items"
            :key="item.to"
            :item="item"
            class="block"
        />

        <divider-general class="divider" />
    </section>
</template>

<script>
export default {
    props: {
        items: {
            //Array of objects {image, to, category, title, dates, times, text}
            type: Array,
            default: () => [],
        },
    },
}
</script>

<style lang="scss" scoped>
.section-teaser-vertical {
    max-width: 990px;
    background-color: var(--color-white);
    padding: 0 var(--unit-gutter);
    border: 1px solid green;

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
    align-items: center;

    .meta {
        border: 1px solid coral;
    }

    .block {
        margin-bottom: 25px;
        padding-right: 16px;
    }

    .divider {
        width: 100%;
        margin-top: 25px;
        margin-bottom: 25px;
    }
}
</style>
