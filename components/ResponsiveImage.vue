<template lang="html">
    <figure :class="classes">
        <img
            :src="image.src || src"
            :height="image.width || width"
            :width="image.height || height"
            :alt="image.alt || alt"
            :srcset="image.srcset || srcset"
            :sizes="image.sizes || sizes"
            class="image"
        >
        <figcaption
            class="caption"
            v-html="caption"
        />
        <div
            class="sizer"
            :style="styles"
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
        image: {
            type: Object,
            default: () => {},
        },
    },
    computed: {
        parsedAspectRatio() {
            const height = this.image.height || this.height
            const width = this.image.width || this.width

            return this.aspectRatio || (height / width) * 100
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
    margin: 0;

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
