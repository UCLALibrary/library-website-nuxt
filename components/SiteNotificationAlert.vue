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

<script></script>

<style lang="scss" scoped></style>
