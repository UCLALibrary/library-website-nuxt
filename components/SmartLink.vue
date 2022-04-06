<template>
    <nuxt-link
        v-if="isRelative"
        class="smart-link is-nuxt-link"
        :to="to"
    >
        <slot />
    </nuxt-link>

    <a
        v-else-if="to"
        :href="to"
        :target="parsedTarget"
        class="smart-link is-link"
    >
        <slot />
    </a>
</template>

<script>
// Helper functions
import isRelativeLink from "~/utils/isRelativeLink"
import isInternalLink from "~/utils/isInternalLink"

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
    computed: {
        parsedTarget() {
            let output = "blank"

            switch (true) {
                case isInternalLink(this.to):
                    output = "_self"
                    break
            }
            return output
        },
        isRelative() {
            return isRelativeLink(this.to) ? true : false
        },
    },
}
</script>

<style lang="scss" scoped>
.link-icon {
    &:hover {
        @include link-hover;
    }
}
</style>
