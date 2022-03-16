<template lang="html">
    <div
        class="modal"
        @click="close"
    >
        <div class="content">
            <button
                class="btn-close"
                @click="close"
            >
                x
            </button>
            <slot />
        </div>
    </div>
</template>

<script>
import SvgGlyphClose from "~/assets/svg/glyph-close"

export default {
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
    max-width: $container-l-main + px;

    display: flex;
    justify-content: center;
    align-items: center;
}

.content {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-content: stretch;
    align-items: flex-end;
}

.btn-close {
    top: 0;
    right: 0;
    font-size: 20px;
    cursor: pointer;
    color: var(--color-white);
    background: transparent;
}

.svg-glyph-close {
    height: 50px;
    width: 50px;

    position: absolute;
    top: 0;
    right: 0;
    z-index: 50;

    path {
        stroke: var(--color-black);
    }
}
</style>
