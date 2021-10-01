<template lang="html">
    <div class="help-cards">
        <block-card-vertical v-for="card in block" />
        <nuxt-link
            v-if="to"
            class="card card-more"
            :to="to"
        >
            <button-more class="button" />
        </nuxt-link>
    </div>
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

<style lang="scss" scoped></style>
