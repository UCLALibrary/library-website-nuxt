<template lang="html">
    <div class="rich-text">
        <div class="text">
            {{ textBlocks[0] }}
            <span>
                <responsive-image
                    v-if="image"
                    class="image"
                    :image="image"
                />
                {{ textBlocks[1] }}
            </span>

            <flexible-pull-quote
                v-if="pullQuote"
                class="pull-quote"
                :text="pullQuote.text"
                :attribution="pullQuote.attribution"
            />
            {{ textBlocks[2] }}
        </div>
    </div>
</template>

<script>
export default {
    props: {
        image: {
            type: Object,
            default: () => {},
        },
        pullQuote: {
            type: Object,
            default: () => {},
        },
        textBlocks: {
            type: Array,
            default: () => [],
        },
    },
}
</script>

<style lang="scss" scoped>
.rich-text {
    max-width: 832px;

    .text {
        font-family: var(--font-primary);
        font-weight: 400;
        font-size: 20px;
        line-height: 150%;
        letter-spacing: 0.01em;
        color: var(--color-black);
    }

    .image {
        width: 448px;
    }
}
</style>
