<template lang="html">
    <header class="header-sticky">
        <nav-primary
            :items="primaryItems"
            class="primary"
        />
        <nav-secondary
            :items="secondaryItems"
            class="secondary"
        />
    </header>
</template>

<script>
export default {
    props: {
        primaryItems: {
            type: Array,
            default: () => [],
        },
        secondaryItems: {
            type: Array,
            default: () => [],
        },
    },
}
</script>

<style lang="scss" scoped>
.header-sticky {
    top: 0;
    left: 0;
    width: 100%;
    position: fixed;
    border-bottom: 1px solid var(--color-secondary-grey-02);

    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;

    .primary {
        // position: absolute;
        --unit-height: 64px;
        padding: 0 18px;
        justify-content: flex-start;
        width: unset;
        ::v-deep {
            .section-name {
                color: var(--color-black);
                font-family: var(--font-primary);
                font-size: 15px;
                font-weight: 600;
            }
            .support-links {
                .item-top {
                    color: var(--color-black);
                    font-family: var(--font-primary);
                    font-size: 15px;
                }
            }
            .background-white {
                border-bottom: unset;
                height: unset;
            }
            .background-blue {
                width: 1920px;
            }
        }
    }
    .secondary {
        border-bottom: unset;
        margin-top: 10px;
        // margin-bottom: 21px;
        justify-content: flex-start;
        padding: 0 20px;
    }
}
</style>

<!-- TODO Write story for this component -->
