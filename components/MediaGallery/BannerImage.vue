<template>
    <div
        class="banner-image"
        @click="$emit('toggleThumbnails')"
    >
        <responsive-image
            :image="image"
            :aspect-ratio="60"
        >
            <div v-if="nItems > 1 && !expanded">
                <div class="gradient" />
                <svg-molecule-image-stack class="molecule-image-stack" />
            </div>
            <media-badge
                v-if="nItems > 1"
                :label="expand_toggle_text"
                :is-expanded="expanded"
            >
                {{ nItems }}
                images
                <svg class="glyph-expand">
                    <line
                        x1="20%"
                        y1="50%"
                        x2="80%"
                        y2="50%"
                        stroke-width="1.5px"
                    />
                    <line
                        v-if="!expanded"
                        y1="20%"
                        x1="50%"
                        y2="80%"
                        x2="50%"
                        stroke-width="1.5px"
                    />
                </svg>
            </media-badge>
        </responsive-image>
    </div>
</template>

<script>
import MediaBadge from '../MediaBadge.vue'

export default 
{
    components: {
        MediaBadge, 
        SvgMoleculeImageStack: () =>
            import(
                "~/node_modules/ucla-library-design-tokens/assets/svgs/molecule-image-stack"
            ),
    },
    props: {
        image: {
            type: Object,
            required: true,
        },
        nItems: {
            type: Number,
            required: true,
        },
        expanded: {
            type: Boolean,
            required: true,
        }
    },
}
</script>

<style lang="scss" scoped>
.banner-image {
    .gradient {
        display: none;
        background: var(--gradient-radial);
        background-size: cover; 
        // z-index: 10;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }

    .svg__molecule-image-stack {
        --width: calc(min(128px, 45%));
        width: var(--width);
        height: var(--width);
        // z-index: 400;
        position: absolute;
        left: calc(50% - var(--width) / 2);
        top: calc(50% - var(--width) / 2);

        .svg__fill--primary-blue-03 {
            fill: var(--color-primary-blue-03);
        }
    }

    .glyph-expand {
        // z-index: 15;
        display: inline-block;
        width: 24px;
        height: 24px;
        margin-left: 8px;

        border-radius: 12px;
        background: #FFFFFF;
    }
}

// Hovers
@media #{$has-hover} {
    .banner-image:hover {
        .gradient {
            display: block;
        }

    .svg__molecule-image-stack {
        .svg__fill--primary-blue-03 {
            fill: var(--color-primary-blue-05);
        }
    }
    }
}
</style>
