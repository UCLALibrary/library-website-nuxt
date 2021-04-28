<template lang="html">
    <section class="section-post-small">
        <div class="grid">
            <block-post-small
                v-for="item in items"
                :category-name="item.categoryName"
                :author="item.author"
                :title="item.title"
                :image="image"
            />
        </div>

        <nuxt-link
            class="more"
            :to="/news/"
        >
            <button-more />
        </nuxt-link>
    </section>
</template>

<script>
export default {
    props: {
        items: {
            type: Array,
            default: () => [],
        },
        image: {
            type: Object,
            default: () => {},
        },
    },
}
</script>

<style lang="scss" scoped>
.section-post-small {
    background-color: var(--color-white);
    padding: 0 var(--unit-gutter);
    .grid {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        align-content: center;
        align-items: center;

        max-width: var(--unit-content-width);
        margin: 0 auto;
    }

    .more {
        display: block;
        padding: 40px;
        margin: 0 auto;
        width: max-content; // If not, 82px works too.
    }

    // Breakpoints
    @media #{$lte-tablet} {
        padding: 0 40px 0 40px;
    }
}
</style>
