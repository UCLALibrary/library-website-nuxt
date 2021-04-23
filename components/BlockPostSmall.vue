<template lang="html">
    <nuxt-link :to="to">
        <div class="block-post-small">
            <responsive-image
                :image="image"
                class="block-post-image"
            />
            <div class="block-post-text">
                {{ category }}
                {{ title }}
                {{ author }}
            </div>
        </div>
    </nuxt-link>
</template>

<script>
import ResponsiveImage from "~/components/ResponsiveImage"

export default {
    props: {
        image: {
            // Mock: api.page
            type: Object,
            default: () => {},
        },
        category: {
            // Mock: {name, to}
            type: Object,
            default: () => {},
        },
        title: {
            type: String,
            default: "",
        },
        author: {
            type: String,
            default: "",
        },
        to: {
            type: String,
            default: "",
        },
    },
}
</script>

<style lang="scss" scoped>
.block-post-small {
    display: flex;
    align-items: center;
    position: absolute;
    width: 320px;
    height: 140px;

    &:hover {
        background-color: var(--color-cyan-01);
    }
}

.block-post-text {
    display: flex;
    width: 200px;
    align-items: center;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    align-items: flex-end;
}

.block-post-image {
    height: 100px;
    width: 100px;
    align-items: flex-start;
}
</style>
