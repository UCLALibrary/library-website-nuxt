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
    //background-color: pink;
    padding: 0 var(--unit-gutter);
    background-color: coral;

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
    align-items: center;

    .block {
        padding-right: 16px;
        border: 1px solid pink;
    }

    .divider {
        width: 100%;
    }
}
</style>
