<template lang="html">
    <div
        class="modal"
        @click="close"
    >
        <div class="content">
            <svg-glyph-close
                class="svg-glyph-close"
                @click="close"
            />
            <slot />
        </div>
    </div>
</template>

<script>
import SvgGlyphClose from "~/assets/svg/glyph-close"

export default {
    components: {
        SvgGlyphClose,
    },
    methods: {
        close() {
            this.$emit("close")
        },
    },
}
</script>

<style lang="scss" scoped>
.modal {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: var(--color-primary-blue-05);
    max-width: 100%;
    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;

    .content {
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        justify-content: flex-start;
        align-content: stretch;
        align-items: flex-end;
    }

    .svg-glyph-close {
        margin-bottom: 16px;

        circle {
            fill: var(--color-primary-blue-05);
        }
        path {
            stroke: var(--color-white);
        }
    }

    // Breakpoints
    @media #{$small} {
        .content {
            max-width: 100%;
        }
    }
}
</style>
