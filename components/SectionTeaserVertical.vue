<template lang="html">
    <section class="section-teaser-vertical">
        <div
            v-for="item in items"
            :key="item.to"
        >
            <block-teaser-vertical
                :item="item"
                class="block"
            />
            <divider-general />
        </div>
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
    max-width: 924px;
    background-color: var(--color-white);
    padding: 0 var(--unit-gutter);
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;

    .block {
        margin: 50px 16px 60px;
    }

    .divider {
        &:after {
            display: none;
        }
    }
}
</style>
