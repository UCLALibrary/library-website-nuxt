<template>
    <div class="base-radio">
        <input
            :id="id"
            type="radio"
            v-bind="$attrs"
            @change="onUpdate"
        >
        <label v-if="label">{{ label }}</label>
    </div>
</template>
<script>
export default {
    inheritAttrs: false,
    model: {
        prop: "radioModel",
        event: "radio-select",
    },
    props: {
        id: {
            type: String,
            required: true,
        },
        label: {
            type: String,
            required: true,
        },
    },
    methods: {
        onUpdate() {
            this.$emit("radio-select", event.target.value)
            this.$emit("change", event.target.value)
        },
    },
}
</script>
