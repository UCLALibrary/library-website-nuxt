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

</style>
