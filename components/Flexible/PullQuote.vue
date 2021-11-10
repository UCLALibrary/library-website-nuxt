<template lang="html">
    <div class="pull-quote">
        <div
            v-if="text"
            class="quote"
            v-html="text"
        >
            <h3
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
    max-width: 600px;
    text-align: left;
    font-family: var(--font-primary);
    font-size: 24px;
    font-style: italic;
    font-weight: 800;
    line-height: 150%;
    letter-spacing: 0.01em;
    color: var(--color-primary-blue-03);
    border-left: 4px solid var(--color-default-cyan-03);
    border-radius: 2px;
    ;

    .quote {
        font-family: var(--font-primary);
        padding-top: 24px;
        padding-bottom: 24px;
        padding-left: 64px;
    }

    .dash {
        font-size: 48px;
        font-style: italic;
        font-weight: regular;
        line-height: 120%;
        letter-spacing: 0.01em;
        color: var(--color-secondary-grey-05);
    }

    .attribution {
        font-weight: regular;
        font-size: 20px;
        line-height: 140%;
        align-items: center;
        text-transform: uppercase;
        color: var(--color-secondary-grey-05);
    }
}
</style>
