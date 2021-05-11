<template lang="html">
    <section :class="classes">
        <div class="container">
            <div
                class="alert"
                @click="toggleAlert()"
            >
                <div class="alert-box-icon">
                    <svg-alert-circle class="svg-alert-circle" />
                </div>
                <div
                    class="alert-text"
                    v-html="title"
                />
            </div>

            <div class="message">
                <div class="message-icon">
                    <svg-glyph-close
                        class="svg-glyph-close"
                        @click="toggleAlert()"
                    />
                </div>
                <div
                    class="message-text"
                    v-html="text"
                />
            </div>
        </div>
    </section>
</template>

<script>
import SvgGlyphClose from "~/assets/svg/glyph-close"
import SvgAlertCircle from "~/assets/svg/alert-circle"

export default {
    components: {
        SvgGlyphClose,
        SvgAlertCircle,
    },
    props: {
        title: {
            type: String,
            default: () => [],
        },
        text: {
            type: String,
            default: () => [],
        },
        time: {
            type: Number,
            default: 10000,
        },
    },
    data() {
        return {
            isOpened: true,
        }
    },
    computed: {
        classes() {
            return ["site-notification-alert", { "is-opened": this.isOpened }]
        },
    },
    mounted() {
        this.delayedClose()
    },
    methods: {
        toggleAlert() {
            this.isOpened = !this.isOpened
        },
        delayedClose() {
            setTimeout(() => {
                this.isOpened = false
            }, this.time)
        },
    },
}
</script>

<style lang="scss" scoped>
.site-notification-alert {
    width: 410px;

    .container {
        display: flex;
        align-items: flex-end;
        flex-direction: column;
        flex-wrap: nowrap;
    }

    .alert {
        display: flex;
        justify-content: center;
        user-select: none;

        background-color: var(--color-yellow);
        border-radius: 4px;
        transition: border-radius 400ms ease-in-out;
        height: 48px;
        max-width: 196px;
    }

    .alert:hover {
        cursor: pointer;
    }

    .alert-box-icon {
        align-self: center;

        padding: 0 0 0 20px;
    }

    .svg-alert-circle {
        path {
            stroke: var(--color-black);
        }
    }

    .alert-text {
        align-self: center;
        flex-wrap: nowrap;

        color: var(--color-black);
        font-family: var(--font-primary);
        font-size: 14px;
        font-weight: 500;
        letter-spacing: 0.01em;
        line-height: 14px;
        overflow: hidden;
        padding: 0 20px 3px 4px;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .message {
        box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.04),
            0px 6px 32px rgba(0, 0, 0, 0.08);
        transition-property: background-color, box-shadow;
        max-height: 190px;
        padding: 0 0 14px 0;
        width: 410px;
        border-radius: 4px;
        transition-duration: 400ms;
        transition-timing-function: ease-in-out;

        display: none;
    }

    .message-icon {
        display: flex;
        align-self: flex-start;
        justify-content: flex-end;

        padding: 24px 24px 0 0;
    }

    .svg-glyph-close {
        path {
            stroke: var(--color-black);
        }
    }

    .message-icon:hover {
        cursor: pointer;
    }

    .message-text {
        align-self: flex-end;

        color: var(--color-black);
        font-family: var(--font-primary);
        font-size: 16px;
        font-weight: 400;
        letter-spacing: 0.01em;
        line-height: 22px;
        max-height: 128px;
        overflow-y: auto;
        padding: 10px 32px 8px 32px;
    }

    // States
    &.is-opened {
        .alert {
            border-radius: 4px 4px 0 0;
        }
        .message {
            display: block;
        }
    }

    // Breakpoints
    @media #{$lte-phone} {
        width: 300px;
        .message {
            width: 300px;
        }
    }
}
</style>
