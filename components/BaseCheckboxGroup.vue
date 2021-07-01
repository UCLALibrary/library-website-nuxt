<template lang="html">
    <fieldset class="base-check-group">
        <label v-for="item in items" class="label">
            <input
                v-model="parsedSelected"
                type="checkbox"
                :true-value="item.name"
                :value="item.name"
                @change="onChange(item.name)"
            />
            {{ item.name }}
        </label>
    </fieldset>
</template>

<script>
import _uniq from "lodash/uniq"

export default {
    props: {
        items: {
            type: Array,
            default: () => [],
        },
        selected: {
            type: Array,
            default: () => [],
        },
    },
    data() {
        return {
            parsedSelected: [],
        }
    },
    watch: {
        selected: {
            handler(newVal) {
                this.parsedSelected = _uniq([...newVal, ...this.parsedSelected])
            },
            immediate: true,
        },
    },
    methods: {
        onChange(value) {
            this.$emit("update:selected", this.parsedSelected)
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
