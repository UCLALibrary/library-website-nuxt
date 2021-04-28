<template lang="html">
    <div :class="classes">
        <div class="background" />

        <div class="container">
            <div class="meta">
                <h2
                    class="title"
                    v-html="title"
                />
                <div
                    class="text"
                    v-html="text"
                />
            </div>
            <slot>
                <!-- TODO Search goes here -->
            </slot>
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
    z-index: 0;

    .background {
        position: absolute;
        z-index: 10;
        top: 0;
        left: 0;
        width: 100%;
        height: var(--unit-height);
        background: var(--gradient-03);
    }
    .container {
        max-width: 990px;
        height: var(--unit-height);

        position: relative;
        z-index: 20;
        margin: 0 auto;
    }
    .meta {
        min-height: 264px;
        height: 100%;
        color: var(--color-white);
        margin: 0 auto;
        padding: 0 var(--unit-gutter);

        display: flex;
        align-items: flex-start;
        justify-content: center;
        flex-direction: column;

        .title {
            font-size: 80px;
            line-height: 100%;
            letter-spacing: 0.01em;
            font-weight: 400;
            margin: 0 0 0 -5px; // Fixing buggy font that has extra space on left
        }
        .text {
            font-size: 24px;
            line-height: 140%;
            letter-spacing: 0.02em;
            margin-top: 15px;
        }
    }

    // Variants
    &.has-molecule {
        .background {
            background: url(~/assets/svg/molecule-background.svg?url) center -100px,
                var(--gradient-03);
            background-size: cover;
        }
    }
    &.has-slot {
        .container {
            height: auto;
        }
    }

    // Breakpoints
    @media #{$lte-phone} {
        --unit-height: 230px;

        .meta {
            min-height: 185px;

            .title {
                font-size: 40px;
                margin-left: -2px;
            }
            .text {
                font-size: 14px;
                max-width: 400px;
            }
        }
    }
}
</style>
