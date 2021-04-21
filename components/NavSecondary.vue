<template lang="html">
    <nav class="nav-secondary">
        <ul class="list">
            <li
                v-for="item in items"
                class="list-item"
            >
                <smart-link
                    class="link underline-hover"
                    :to="item.to"
                    :target="item.target"
                    v-html="item.text"
                />
            </li>
        </ul>
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
.nav-secondary {
    background-color: var(--color-white);
    height: 48px;
    padding: 0 94px;

    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-end;
    align-content: center;
    align-items: center;

    .list {
        list-style-type: none;
        margin: 0;
        padding: 0;
    }

    .list-item {
        display: inline-block;
        margin-left: 50px;
        font-size: 18px;
        line-height: 1;

        &:first-child {
            margin-left: 0;
        }
    }

    .link {
        color: var(--color-black);
        text-decoration: none;
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
