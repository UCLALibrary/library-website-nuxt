<template lang="html">
    <figure
        :class="classes"
        :style="styles"
    >
        <img
            :src="src"
            :height="width"
            :width="height"
            :alt="alt"
            :srcset="srcset"
            :sizes="sizes"
            class="image"
        >
        <figcaption
            class="caption"
            v-html="caption"
        />
    </figure>
</template>

<script>
export default {
    props: {
        src: {
            type: String,
            default: "",
        },
        height: {
            type: Number,
            default: 0,
        },
        width: {
            type: Number,
            default: 0,
        },
        alt: {
            type: String,
            default: "",
        },
        srcset: {
            type: String,
            default: "",
        },
        sizes: {
            type: String,
            default: "",
        },
        caption: {
            type: String,
            default: "",
        },
        aspectRatio: {
            type: Number,
            default: 0,
        },
        objectFit: {
            type: String,
            default: "cover",
        },
    },
    computed: {
        parsedAspectRatio() {
            return this.aspectRatio || (this.height / this.width) * 100
        },
        styles() {
            return {
                paddingBottom: `${this.parsedAspectRatio}%`,
            }
        },
        classes() {
            return ["responsive-image", `object-fit-${this.objectFit}`]
        },
    },
}
</script>

<style lang="scss" scoped>
.responsive-image {
    position: relative;

    .image {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
    .caption {
        display: none;
    }

    // Variants
    &.object-fit-cover {
        .image {
            object-fit: cover;
        }
    }
    &.object-fit-contain {
        .image {
            object-fit: contain;
        }
    }
}
</style>
