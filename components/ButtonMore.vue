<template lang="html">
    <div class="button-more">
        <div class="icon">
            <molecule-border class="molecule-border" />
            <arrow-right class="arrow-right" />
        </div>

        <div class="text">
            {{ text }}
        </div>
    </div>
</template>

<script>
import ArrowRight from "~/assets/svg/arrow-right"
import MoleculeBorder from "~/assets/svg/molecule-border"

export default {
    components: {
        ArrowRight,
        MoleculeBorder,
    },
    props: {
        text: {
            type: String,
            default: "See More",
        },
    },
}
</script>

<style lang="scss" scoped>
.button-more {
    background-color: var(--color-white);
    width: fit-content;
    max-width: 120px;

    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    position: relative;
    text-align: center;

    .icon {
        position: relative;
    }
    .molecule-border {
        width: 83px;
        height: 83px;

        stroke: var(--color-cyan-01);
        stroke-width: 1.5px;
    }
    .arrow-right {
        position: absolute;
        z-index: 0;
        width: 49px;
        height: 49px;
        left: 50%;

        // Center this way so button can be streched and it still centers
        top: 50%;
        transform: translate(-50%, -50%);

        stroke-width: 1.5px;
        stroke: var(--color-primary-blue);
        transition: stroke 400ms ease-in-out;
    }

    .text {
        margin-top: 16px;
        color: var(--color-dark-blue);
        font-family: var(--font-primary);
        font-size: 16px;
        font-weight: 500;
        letter-spacing: 0.01em;
        line-height: 16px;
        text-transform: uppercase;
        transition: color 400ms ease-in-out;
    }

    // Hover states
    @media #{$has-hover} {
        &:hover {
            .arrow-right {
                stroke: var(--color-cyan-01);
            }
            .text {
                color: var(--color-primary-blue);
            }
        }
    }
}
</style>
