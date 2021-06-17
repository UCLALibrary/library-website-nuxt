<template lang="html">
    <fieldset class="base-check-group">
        <label
            v-for="item in items"
            class="label"
        >
            <input
                v-model="parsedSelected"
                type="checkbox"
                :value="item.name"
                @change="onChange(item.name)"
            >
            {{ item.name }}
        </label>
    </fieldset>
</template>

<script>
export default {
    props: {
        items: {
            type: Array,
            default: () => [],
        },
        selected: {
            type: String,
            default: "",
        },
    },
    data() {
        return {
            parsedSelected: "",
        }
    },
    watch: {
        selected: {
            handler(newVal) {
                this.parsedSelected = newVal
            },
            immediate: true,
        },
    },
    methods: {
        onChange(value) {
            this.$emit("update:selected", value)
        },
    },
}
</script>

<style lang="scss" scoped>
.base-radio-group {
    .label {
        display: block;
    }
}
</style>
