<template lang="html">
    <section class="section-teaser-vertical">
        <div
            v-for="item in items"
            :key="item.to"
        >
            <divider-general />
            <block-teaser-vertical
                :item="item"
                class="block"
            />
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
    background-color: var(--color-white);
    padding: 0 var(--unit-gutter);
    display: flex;
    flex-direction: column;
    align-items: center;

    .block {
        margin-top: 50px;
        margin-bottom: 50px;
    }

    .divider {
        &:after {
            display: none;
        }
    }
}
</style>
