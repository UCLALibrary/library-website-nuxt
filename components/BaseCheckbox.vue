<template>
    <div class="base-radio">
        <input
            type="checkbox"
            :checked="modelValue"
            class="field"
            @change="$emit('update:modelValue', $event.target.checked)"
        >
        <label v-if="label">{{ label }}</label>
    </div>
</template>
<script>
export default {
    props: {
        label: {
            type: String,
            default: "",
        },
        modelValue: {
            type: Boolean,
            default: false,
        },
    },
}
</script>
