<template lang="html">
    <simple-cards
        :block="block"
    />
</template>

<script>
export default {
    props: {
        block: {
            type: Object,
            default: () => {},
        },
    },
}
</script>
