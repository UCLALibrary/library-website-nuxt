<template lang="html">
    <div
        class="modal-backdrop"
        @click="close"
    >
        <button
            class="btn-close"
            @click="close"
        >
            x
        </button>
        <div class="modal">
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
.modal-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: var(--color-primary-blue-05);
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: $container-l-main + px;
}

.modal {
    overflow-x: auto;
    display: flex;
    flex-direction: column;
    max-width: $container-l-main + px;
    @include shadow-lightbox-01;
}

.btn-close {
    position: absolute;
    top: 0;
    right: 0;
    font-size: 20px;
    cursor: pointer;
    color: var(--color-white);
    background: transparent;
}
</style>
