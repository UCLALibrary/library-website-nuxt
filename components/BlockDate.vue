<template lang="html">
    <div class="block-date">
        <svg-arrow-down class="svg" />
        <div class="date">
            {{ date }}
        </div>
        <div class="day">
            {{ day }}
        </div>
    </div>
</template>

<script>
import SvgArrowDown from "~/assets/svg/arrow-down"

export default {
    components: {
        SvgArrowDown,
    },
    props: {
        date: {
            type: String,
            default: "",
        },
        day: {
            type: String,
            default: "",
        },
    },
}
</script>

<style lang="scss" scoped>
.block-date {
    width: 274px;
    height: 232px;
    border-radius: var(--rounded-slightly-all);
    background-color: var(--color-lightest-blue);
    position: absolute;
    z-index: 10;

    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    align-content: center;
    align-items: center;

    .svg {
        position: relative;
        z-index: 20;
        padding-left: 90px;
        padding-right: 90px;
        margin-top: 30px;
    }

    .date {
        font-size: 80px;
        color: var(--color--black);
    }

    .day {
        font-size: 18px;
        color: var(--color-primary-blue);
    }
}
</style>
