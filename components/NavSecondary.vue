<template lang="html">
    <nav class="nav-secondary">
        <ul class="list">
            <li
                v-for="item in items"
                class="list-item"
            >
                <a
                    v-if="item.target == '_blank'"
                    class="list-item-link"
                    :href="item.to"
                    v-html="item.text"
                />
                <nuxt-link
                    v-else
                    class="list-item-link"
                    :to="item.to"
                >
                    {{ item.text }}
                </nuxt-link>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    props: {
        items: {
            type: Array,
            default: () => [{ text: "", to: "", target: "_self" }],
        },
    },
}
</script>

<style lang="scss" scoped>
.list {
    display: flex;
    justify-content: flex-end;
    list-style-type: none;
    margin: 10px 10px;
    padding-bottom: 10px;
}
.list-item {
    margin-right: 10px;
}
.list-item-link {
    color: var(--color-black);
    text-decoration: none;
}
</style>
