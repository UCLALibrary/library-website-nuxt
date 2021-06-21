<template lang="html">
    <div class="block-call-to-action">
        <svg-call-to-action class="svg" />
        <div
            class="title"
            v-html="title"
        />
        <div
            class="text"
            v-html="text"
        />
        <button-link
            :label="name"
            :to="to"
            class="button-link"
        />
    </div>
</template>

<script>
import SvgCallToAction from "~/assets/svg/call-to-action"

export default {
    components: {
        SvgCallToAction,
    },
    props: {
        iconName: {
            type: String,
            default: "",
        },
        title: {
            type: String,
            default: "",
        },
        text: {
            type: String,
            default: "",
        },
        name: {
            type: String,
            default: "",
        },
        to: {
            type: String,
            default: "",
        },
    },
    computed: {
        parsedSvgName() {
            return `${this.iconName}`
        },
    },
}
</script>

<style lang="scss" scoped>
.block-call-to-action {
    max-width: 1046px;
    max-height: 467px;
    margin-left: auto;
    margin-right: auto;
    background-color: var(--color-primary-lightest-blue);

    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    align-content: center;
    align-items: center;

    .svg {
        margin-bottom: 35px;
        margin-top: 60px;
    }
    .title {
        font-family: var(--font-primary);
        font-style: normal;
        font-weight: 500;
        font-size: 40px;
        line-height: 100%;
        color: var(--color-primary-blue);
        text-align: center;
        letter-spacing: 0.01em;
        max-width: 630px;
        margin-bottom: 16px;
    }
    .text {
        margin-bottom: 35px;
    }
    .button-link {
        width: 280px;
        margin-bottom: 60px;
    }
}
</style>
