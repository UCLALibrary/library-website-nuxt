<template>
    <div class="base-checkbox">
        <input
            type="checkbox"
            :checked="isChecked"
            class="field"
            v-bind="$attrs"
            @change="updateInput"
        >
        <label v-if="label">{{ label }}</label>
    </div>
</template>
<script>
export default {
    inheritAttrs: false,
    model: {
        prop: "checkboxValue",
        event: "checkbox-select",
    },
    props: {
        label: {
            type: String,
            default: "",
        },
    },
    computed: {
        isChecked() {
            return this.checkboxValue
        },
    },
    methods: {
        updateInput(event) {
            this.$emit("checkbox-select", event.target.checked)
            this.$emit("change", event.target.checked)
        },
    },
}
</script>
