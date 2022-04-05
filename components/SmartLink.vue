<template>
    <!-- <component
        :is="elementType"
        :to="to"
        :href="to"
        :target="target"
        :rel="rel"
        :class="classes"
    >
        <slot />
    </component> -->

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
        // elementType() {
        //     let output = "a"
        //     if (this.target == "_self" || this.target === "") {
        //         output = "nuxt-link"
        //     }
        //     return output
        // },
        // rel() {
        //     let output = false
        //     if (this.elementType == "a") {
        //         output = "noopener"
        //     }
        //     return output
        // },
        // classes() {
        //     return [
        //         "smart-link",
        //         { "is-link": this.elementType == "a" },
        //         { "is-nuxt-link": this.elementType == "nuxt-link" },
        //     ]
        // },
        parsedTarget() {
            let output = "blank"

            switch (true) {
                case this.isRelative:
                case this.isInternal:
                    output = "_self"
                    break
            }
            return output
        },
        isRelative() {
            return isRelativeLink(this.to) ? true : false
        },
        isInternal() {
            return this.to.includes("library.ucla.edu") &&
                !this.to.includes("mailto:")
                ? true
                : false
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
