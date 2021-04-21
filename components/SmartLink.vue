<template>
    <nuxt-link
        v-if="this.target == '_self'"
        class="smart-link is-nuxt-link"
        :to="to"
    >
        <slot />
    </nuxt-link>
    <a
        v-else
        class="smart-link is-link"
        :href="to"
        :target="target"
        rel="noopener"
    >
        <slot />
    </a>
</template>

<script>
export default {
    props: {
        to: {
            type: String,
            default: "",
        },
        target: {
            type: String,
            default: "_self",
        },
    },
}
</script>

<style></style>
