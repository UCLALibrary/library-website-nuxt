<template lang="html">
    <div :class="classes">
        <div class="background" />

        <div class="container">
            <div class="overlay">
                <h2
                    class="title"
                    v-html="title"
                />
                <div
                    class="text"
                    v-html="text"
                />
            </div>
            <slot> <!-- TODO Search goes here --> </slot>
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
                    "has-slot": this.$slots.default,
                },
            ]
        },
    },
}
</script>

<style lang="scss" scoped>
.masthead-secondary {
    position: relative;
    z-index: 0;
    &.has-molecule {
        .background {
            background: url(~/assets/svg/molecule-background.svg?url) center -100px,
                var(--gradient-03);
            background-size: cover;
        }
    }
    .background {
        position: absolute;
        z-index: 10;
        top: 0;
        left: 0;
        width: 100%;
        height: 320px;
        overflow: hidden;
        background: var(--gradient-03);
    }
    .container {
        max-width: 990px;
        height: 100%;

        position: relative;
        z-index: 20;
        margin: 0 auto;

        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        justify-content: center;
        align-content: center;
        align-items: stretch;
    }
    .overlay {
        flex: 1 1 auto;
        height: 264px;
        color: var(--color-white);
        margin: 0 auto;

        display: flex;
        align-items: flex-start;
        justify-content: center;
        flex-direction: column;

        .title {
            font-size: 80px;
            line-height: 100%;
            letter-spacing: 0.01em;
            font-weight: 400;
            margin-block-start: unset;
            margin-block-end: unset;
        }
        .text {
            font-size: 24px;
            line-height: 140%;
            letter-spacing: 0.02em;
        }
    }

    // Breakpoints
    @media #{$lte-phone} {
        .background {
            height: 230px;
        }
        .overlay {
            height: 185px;
            justify-content: center;
            align-content: center;
            padding: 0 var(--unit-gutter);

            .title {
                font-size: 40px;
            }
            .text {
                font-size: 14px;
            }
        }
    }
}
</style>
