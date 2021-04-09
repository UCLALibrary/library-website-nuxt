<template lang="html">
    <div class="example-component">
        <slot name="before" />

        <div class="text" v-html="text" />

        <slot />

        <img
            v-if="image && image.src"
            class="image"
            :srcset="image.srcset"
            :sizes="image.sizes"
            :src="image.src"
            :alt="image.alt"
        />

        <slot name="after" />
    </div>
</template>

<script>
export default {
    props: {
        text: {
            type: String,
            default: "",
        },
        image: {
            type: Object,
            default: () => {},
        },
    },
}
</script>

<style lang="scss" scoped>
.example-component {
    .text {
        font-size: 24px;
        color: var(--color-black);
    }
    .image {
        display: block;
        max-width: 800px;
        margin: 2em 0;
    }
}
</style>
