<template lang="html">
    <div class="pull-quote">
        <div
            v-if="text"
            class="quote"
            v-html="text"
        />
        <div
            v-if="attribution"
            class="attribution-block"
        >
            <span class="dash">—</span>
            <span
                v-if="attribution"
                class="attribution"
                v-html="attribution"
            />
        </div>
    </div>
</template>

<script>
export default {
    props: {
        text: {
            type: String,
            default: "",
        },
        attribution: {
            type: String,
            default: "",
        },
    },
}
</script>

<style lang="scss" scoped>
.pull-quote {
    background-color: var(--color-white);
    max-width: var(--container-width);
    text-align: left;
    font-family: var(--font-primary);
    font-size: 24px;
    font-style: italic;
    font-weight: 600;
    line-height: 150%;
    letter-spacing: 0.01em;
    color: var(--color-primary-blue-03);
    border-left: 4px solid var(--color-default-cyan-03);
    border-radius: 2px;
    padding: 24px var(--spacing-text-left);
    --spacing-text-left: 64px;
    --container-width: $container-m-text + px;

    // Breakpoints
    @media #{$small} {
        --spacing-text-left: 24px;
        --container-width: 100%;
    }

    .attribution-block {
        padding-top: 24px;
    }

    .dash {
        font-size: 48px;
        font-style: normal;
        font-weight: 300;
        color: var(--color-secondary-grey-05);
        position: absolute;
        height: 58px;
    }

    .attribution {
        font-weight: 400;
        font-size: 20px;
        font-style: normal;
        line-height: 140%;
        align-items: center;
        text-transform: uppercase;
        color: var(--color-secondary-grey-05);
        margin-left: 50px;
    }
}
</style>
