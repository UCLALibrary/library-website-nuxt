<template lang="html">
    <transition
        name="slide-toggle"
        mode="out-in"
    >
        <fieldset class="base-checkbox-group">
            <ul class="list">
                <li class="list-item">
                    <label
                        v-for="item in items"
                        class="label"
                    >
                        <input
                            v-model="parsedSelected"
                            type="checkbox"
                            :true-value="item.name"
                            :value="item.name"
                            class="input"
                            @change="onChange(item.name)"
                        >

                        <!-- TODO create a checkbox SVG for this -->
                        <svg-molecule-radio-button class="svg" />

                        {{ item.name }}
                    </label>
                </li>
            </ul>
        </fieldset>
    </transition>
</template>

<script>
// Helpers
import _uniq from "lodash/uniq"

// SVGs
import SvgMoleculeRadioButton from "~/assets/svg/molecule-radio-button"

export default {
    components: {
        SvgMoleculeRadioButton,
    },
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
.base-checkbox-group {
    font-size: 18px;
    color: var(--color-white);
    background-color: var(--color-primary-blue);
    border-radius: var(--rounded-slightly-all);
    border: 1.5px solid var(--color-fushia-03);
    margin: 0;

    padding: 22px 16px;
    box-sizing: border-box;

    .list {
        column-count: 3;
        list-style: none;
    }
    .label {
        font-family: var(--font-secondary);
        display: inline-block;
        width: 100%;
        box-sizing: border-box;

        margin: 4px 0;
        padding: 6px 14px 8px 45px;
        cursor: pointer;
        position: relative;
        border-radius: var(--rounded-slightly-all);

        background-color: rgba(255, 255, 255, 0);
        transition: background-color 400ms ease-in-out;
    }
    .input {
        height: 20px;
        width: 20px;
        opacity: 0;
        position: absolute;
        z-index: -1;
        margin: 0;
        padding: 0;
    }
    .svg {
        position: absolute;
        left: 14px;
        top: 5px;

        .filler {
            opacity: 0;
            transition: opacity 200ms ease-in-out;
        }
    }

    // Selected state
    .input:checked + .svg .filler {
        opacity: 1;
    }

    // Hovers
    @media #{$has-hover} {
        .label:hover {
            background-color: rgba(255, 255, 255, 0.1);
        }
    }
}
</style>
