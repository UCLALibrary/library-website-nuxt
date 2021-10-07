<template>
    <component
        :is="elementType"
        :to="to"
        :href="to"
        :target="target"
        :rel="rel"
        :class="classes"
    >
        <!--
            // TODO Figure out why if we have a slot here it gives node-mismatch error
            <slot />
        -->
        <slot />
    </component>
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
    computed: {
        elementType() {
            let output = "a"
            if (this.target == "_self" || this.target === "") {
                output = "nuxt-link"
            }
            return output
        },
        rel() {
            let output = false
            if (this.elementType == "a") {
                output = "noopener"
            }
            return output
        },
        classes() {
            return [
                "smart-link",
                { "is-link": this.elementType == "a" },
                { "is-nuxt-link": this.elementType == "nuxt-link" },
            ]
        },
    },
}
</script>
