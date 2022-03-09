<template lang="html">
    <div class="block-access">
        <h4 class="subheading-small">
            Building Access
        </h4>
        <rich-text
            class="building-access-text"
            :rich-text-content="buildingAccess"
        />
    </div>
</template>

<script>
export default {
    props: {
        buildingAccess: {
            type: String,
            default: "",
        },
    },
}
</script>

<style lang="scss" scoped>
.block-access {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-content: center;
    align-items: flex-start;

    .subheading-small {
        // text-transform: uppercase;
        color: var(--color-primary-blue-05);
        @include overline;
    }

    ::v-deep .rich-text {
        margin: unset;
    }
}
</style>
