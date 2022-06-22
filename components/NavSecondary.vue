<template lang="html">
    <nav class="nav-secondary">
        <ul class="list">
            <li
                v-for="item in parsedItems"
                class="list-item"
            >
                <smart-link
                    class="link underline-hover"
                    :to="item.to"
                    :target="item.target"
                >
                    {{ item.name }}
                </smart-link>
            </li>
        </ul>
    </nav>
</template>

<script>
// Helpers
import formatLinkTarget from "~/utils/formatLinkTarget"

export default {
    props: {
        items: {
            type: Array,
            default: () => [],
        },
    },
    computed: {
        parsedItems() {
            return this.items.map((obj) => {
                return {
                    ...obj,
                    target: formatLinkTarget(obj.target),
                }
            })
        },
    },
}
</script>

<style lang="scss" scoped>
.nav-secondary {
    height: 48px;
    padding: 0 var(--unit-gutter);
    border-bottom: 1px solid var(--color-secondary-grey-02);

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
        height: 100%;
        display: flex;
        align-items: center;
        gap: 48px;
    }

    .list-item {
        display: flex;
        align-items: center;
        height: 100%;
        font-size: 20px;
        line-height: 1;
        letter-spacing: 0.01em;
    }

    .link {
        color: var(--color-black);
        text-decoration: none;
        position: relative;

        @include clickable-area;
    }

    // Hover states
    @media #{$has-hover} {
        .link:hover,
        .link:active {
            color: var(--color-primary-blue-03);
        }
    }
}
</style>
