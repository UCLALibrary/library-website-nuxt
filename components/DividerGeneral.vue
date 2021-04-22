<template lang="html">
    <div
        class="divider-general"
        :bold="bold"
    >
        putting something in the div
    </div>
</template>

<script>
export default {
    name: "DividerGeneral",
    props: {
        bold: {
            type: Boolean,
            default: true,
        },
    },
}
</script>

<style lang="scss" scoped>
.divider-general {
    border-bottom: 2px dashed var(--color-grey-03);
}
</style>
