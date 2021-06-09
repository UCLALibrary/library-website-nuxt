<template lang="html">
    <section class="section-teaser-vertical">
        <div
            v-for="item in items"
            :key="item.to"
            class="meta"
        >
            <block-teaser-vertical
                :item="item"
                class="block"
            />
        </div>
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

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
    align-items: center;

    .meta {
        border: 2px solid coral;
        margin-right: 16px;
        border: 2px solid yellow;
        &:nth-child(3n + 3) {
            margin-right: 0px;
        }
    }
    .block {
        margin-bottom: 50px;
    }

    .divider {
        width: 100%;
    }
}
</style>
