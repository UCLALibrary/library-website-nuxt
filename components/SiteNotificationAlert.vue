<template lang="html">
    <section class="site-notification-alert">
        <div class="container">
            <div
                class="alert"
                @click="toggleAlert()"
            >
                <div class="alertBoxIcon">
                    <svg-alert-circle />
                </div>
                <div
                    class="alertText"
                    v-html="title"
                />
            </div>

            <div
                v-if="message"
                class="message"
            >
                <div class="messageIcon">
                    <svg-glyph-close
                        class="svg"
                        @click="toggleAlert()"
                    />
                </div>
                <div
                    class="messageText"
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
    },
    data() {
        return {
            message: true,
            messageState: true,
        }
    },
    mounted() {
        this.callFunction(10)
    },
    methods: {
        toggleAlert: function () {
            (this.messageState = !this.messageState),
            (this.message = this.messageState)
        },
        callFunction: function () {
            var v = this
            setTimeout(function () {
                (v.message = false), (v.messageState = false)
            }, 10000)
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

        background-color: var(--color-yellow);
        border-radius: 4px 4px 0 0;
        height: 48px;
        max-width: 196px;
    }

    .alert:hover {
        cursor: pointer;
    }

    .alertBoxIcon {
        align-self: center;

        padding: 0 0 0 20px;
    }

    .alertText {
        align-self: center;
        flex-wrap: nowrap;

        color: var(--color-black);
        font-family: var(--font-primary);
        font-size: 14px;
        font-weight: 500;
        letter-spacing: 0.01em;
        line-height: 14px;
        overflow: hidden;
        padding: 0 20px 3px 0;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .message {
        box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.04),
            0px 6px 32px rgba(0, 0, 0, 0.08);
        transition-property: background-color, box-shadow;
        height: 190px;
        width: 410px;
        transition-duration: 400ms;
        transition-timing-function: ease-in-out;
    }

    .messageIcon {
        display: flex;
        align-self: flex-start;
        justify-content: flex-end;

        padding: 24px 24px 0 0;
    }

    .messageIcon:hover {
        cursor: pointer;
    }

    .messageText {
        align-self: flex-end;

        color: var(--color-black);
        font-family: var(--font-primary);
        font-size: 16px;
        font-weight: 400;
        letter-spacing: 0.01em;
        line-height: 22px;
        max-height: 128px;
        overflow-y: auto;
        padding: 10px 32px 0 32px;
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
