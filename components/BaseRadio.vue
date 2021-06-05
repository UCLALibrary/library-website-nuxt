<template>
    <div class="base-radio">
        <input
            type="radio"
            :checked="modelValue === label"
            :value="label"
            v-bind="$attrs"
            @change="$emit('update:modelValue', value)"
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
            type: String,
            default: "",
        },
    },
}
</script>
