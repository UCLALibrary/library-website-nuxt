<template lang="html">
    <div :class="classes" />
</template>

<script>
export default {
    props: {
        isBold: {
            type: Boolean,
            default: false,
        },
    },
    computed: {
        classes() {
            return ["divider-general", { "is-bold": this.isBold }]
        },
    },
}
</script>

<style lang="scss" scoped>
.divider-general {
    border-bottom: 2px dotted var(--color-grey-03);
    height: 1px;

    &.is-bold {
        border-bottom-color: var(--color-grey-02);
    }
}
</style>
