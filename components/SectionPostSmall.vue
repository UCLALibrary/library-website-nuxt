<template lang="html">
    <nav class="section-post-small">
        <ul class="list">
            <li
                v-for="item in items"
                class="list-item"
            >
                <div class="list">
                    <div>
                        <block-post-small class="button" />
                    </div>
                </div>
            </li>
        </ul>
        <div class="button">
            <button-more class="button" />
        </div>
    </nav>
</template>

<script>
export default {
    props: {
        items: {
            type: Array,
            default: () => [],
        },
    },
}
</script>

<style lang="scss" scoped>
.section-post-small {
    padding: 0 94px;

    .list {
        list-style-type: none;
        display: flex;
        flex-direction: row;

        justify-content: space-between;
        align-content: flex-start;
        align-items: flex-start;
        background-color: turquoise;
    }

    .list-item {
        height: 140px;
        width: 320px;
        padding: 25px;
        order: 0;
        flex: 0 1 auto;
        align-self: center;

        &:first-child {
            margin-left: 0;
        }
    }

    .link {
        color: var(--color-black);
        text-decoration: none;
    }

    .button {
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 40%;
    }

    // Hover states
    @media #{$has-hover} {
        .link:hover,
        .link:active {
            color: var(--color-primary-blue);
        }
    }
}
</style>
