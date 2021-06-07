<template lang="html">
    <section class="section-teaser-horizontal">
        <div
            v-for="item in items"
            :key="item.to"
            class="meta"
        >
            <divider-general class="divider" />
            <block-teaser-horizontal
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
.section-teaser-horizontal {
    background-color: var(--color-white);
    padding: 0 var(--unit-gutter);
    max-width: 990px;

    .meta {
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        justify-content: center;
        align-content: center;
        align-items: center;
    }

    .block {
        margin-top: 50px;
        margin-bottom: 50px;
        // padding-left: 5px;
        // padding-right: 5px;
        // width: 94%;
    }

    .divider {
        width: 100%;
    }
}
</style>
