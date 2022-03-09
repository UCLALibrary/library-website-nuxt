<template lang="html">
    <pull-quote v-if="block.pullQuote"
            :text="block.pullQuote[0].text"
            :attribution="block.pullQuote[0].attribution"
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

<style lang="scss" scoped>
.pull-quote {
    &.flexible-block {
        margin: var(--unit-gutter) auto;
        padding: 0 var(--unit-gutter);
        max-width: $container-l-main + px;

        @media #{$medium} {
            margin: var(--unit-gutter);
            
        }
    }
    
}
</style>
