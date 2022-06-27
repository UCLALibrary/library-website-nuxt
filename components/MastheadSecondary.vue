<template lang="html">
    <div :class="classes">
        <div class="container">
            <div class="meta">
                <h1
                    class="title"
                    v-html="title"
                />
                <div
                    v-if="text"
                    class="text"
                    v-html="text"
                />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        hasMolecules: {
            type: Boolean,
            default: true,
        },
        title: {
            type: String,
            required: true,
        },
        text: {
            type: String,
            default: "",
        },
    },
    computed: {
        classes() {
            return [
                "masthead-secondary",
                {
                    "has-molecule": this.hasMolecules,
                },
                {
                    "has-slot": this.$slots.default,
                },
            ]
        },
    },
}
</script>

<style lang="scss" scoped>
.masthead-secondary {
    --unit-height: 320px;

    position: relative;
    background: var(--gradient-03), var(--text-overlay);

    .container {
        max-width: $container-l-cta + px;

        position: relative;
        z-index: 20;
        margin: 0 auto;
        padding-top: var(--sapce-3xl);
        padding-bottom: var(--space-4xl);
    }
    .meta {
        color: var(--color-white);

        display: flex;
        align-items: flex-start;
        justify-content: center;
        flex-direction: column;

        .title {
            @include step-5;
            text-shadow: 0px 2px 8px rgba(113, 113, 113, 0.08);
        }
        .text {
            @include step-0;
            margin-top: var(--space-s);
            text-shadow: 0px 2px 8px rgba(113, 113, 113, 0.08);
        }
    }

    // Variants
    &.has-molecule:before {
        content: " ";
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background: url("~/assets/svg/molecule-background.svg?url");
        background-repeat: no-repeat;
        background-position: center 60%;
        filter: opacity(45%);
    }

    // Breakpoints
    @media #{$medium} {
        .container {
            padding-left: var(--unit-gutter);
            padding-right: var(--unit-gutter);
        }
    }

    @media #{$small} {
        --unit-height: 230px;
    }
}
</style>
